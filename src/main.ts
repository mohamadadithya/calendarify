import './styles/main.scss'
import moment from 'moment'
import { computePosition, autoUpdate, offset, flip } from '@floating-ui/dom'
import { Helpers } from './utils/helpers'
import type { Date, ExpandedMode, Locale } from './utils/types'

export default class Calendarify {
  public options: Partial<Calendarify>
  public locale: Locale
  public startDate: string
  public accentColor: string = '#0090FC'
  public isDark: boolean = false
  public zIndex: number | string = 1000
  public customClass: string[] = []
  public quickActions: boolean = true
  public onChange?: (outputObject: Object) => void

  private _container: HTMLAreaElement
  private _calendarWrapper: HTMLAreaElement
  private _datepickerInput: HTMLInputElement
  private _datesWrapperEl: HTMLAreaElement
  private _monthsWrapperEl: HTMLAreaElement
  private _yearsWrapperEl: HTMLAreaElement
  private _months: string[]
  private _dates: Date[]
  private _nowMonth: string
  private _nowDay: string
  private _nowYear: string
  private _dateButtons: NodeListOf<HTMLButtonElement>
  private _expandButton: HTMLButtonElement
  private _prevButton: HTMLButtonElement
  private _nextButton: HTMLButtonElement
  private _date: string
  private _isExpanded: boolean = false
  private _expandedMode: ExpandedMode = 'months'
  private _outputDate: string
  private _quickButtons: NodeListOf<HTMLButtonElement>
  private _wrapperEls: NodeListOf<HTMLAreaElement>
  private _yearRangeButton: HTMLButtonElement
  private _systemFormat: string = 'YYYY-MM-DD'
  private _helpers: any
  private _inputSelector: string
  private _wasExecuted: boolean = false
  private _isSetted: boolean = false

  constructor(inputSelector: string, options?: Partial<Calendarify>) {
    const rootElement = document.documentElement

    this.options = Object.assign(this, options)
    rootElement.style.setProperty('--accentColor', this.options.accentColor ?? this.accentColor)

    this.onChange = this.options.onChange
    this._inputSelector = inputSelector

    this.locale = {
      format: this.options?.locale?.format ?? this._systemFormat,
      lang: {
        code: this.options?.locale?.lang?.code ?? 'en',
        ui: { 
          quickActions: {
            today: this.options?.locale?.lang?.ui?.quickActions?.today ?? 'Today',
            tomorrow: this.options?.locale?.lang?.ui?.quickActions?.tomorrow ?? 'Tomorrow',
            inTwoDays: this.options?.locale?.lang?.ui?.quickActions?.inTwoDays ?? 'In 2 Days'
          }
        },
        months: this.options?.locale?.lang?.months ?? moment.months(),
        weekdays: this.options?.locale?.lang?.weekdays ?? moment.weekdays()
      }
    }

    this.startDate = this.options.startDate ?? moment().format(this._systemFormat)
    this._date = this.options.startDate ?? this.startDate
    
    this._months = []
    for(let i = 0; i < 12; i++) {this._months.push(String(i + 1))}

    this._nowMonth = moment(this._date).format('YYYY-MM')
    this._nowDay = moment(this._date).format('D')
    this._nowYear = moment(this._date).format('YYYY')
    this._outputDate = moment(this._date).format(this.locale.format)

    this._dates = []

    this.loopDaysMonths()

    this._helpers = new Helpers({
      container: document.querySelector(inputSelector)?.parentElement as HTMLAreaElement,
      dates: this._dates,
      months: this._months,
      years: this._years,
      nowMonth: this._nowMonth,
      nowDay: this._nowDay,
      quickActions: this.options.quickActions,
      locale: this.options.locale
    })

    this._helpers.render()

    moment.updateLocale(this.options?.locale?.lang?.code!, { months: this.options.locale?.lang?.months, weekdays: this.options.locale?.lang?.weekdays })

    this._container = document.querySelector('.calendarify') as HTMLAreaElement
    this._datepickerInput = document.querySelector(inputSelector) as HTMLInputElement
    this._datesWrapperEl = this._container.querySelector('.dates-wrapper') as HTMLAreaElement
    this._monthsWrapperEl = this._container.querySelector('.months-wrapper') as HTMLAreaElement
    this._yearsWrapperEl = this._container.querySelector('.years-wrapper') as HTMLAreaElement
    this._expandButton = this._container.querySelector('.calendarify__navigations button[data-action="expand"]') as HTMLButtonElement
    this._dateButtons = this._container.querySelectorAll('.date-button') as NodeListOf<HTMLButtonElement>
    this._prevButton = this._container.querySelector('.calendarify__navigations button[data-action="prev"]') as HTMLButtonElement
    this._nextButton = this._container.querySelector('.calendarify__navigations button[data-action="next"]') as HTMLButtonElement
    this._calendarWrapper = this._container.querySelector('.calendarify__calendar') as HTMLAreaElement
    this._quickButtons = this._container.querySelectorAll('.quick-actions button') as NodeListOf<HTMLButtonElement>
    this._wrapperEls = this._calendarWrapper.querySelectorAll('.wrapper:not(:last-child, :nth-child(3))') as NodeListOf<HTMLAreaElement>
    this._yearRangeButton = this._container.querySelector('.calendarify__navigations button[data-action="year-range"]') as HTMLButtonElement
  }

  public init() {
    moment.suppressDeprecationWarnings = true;
    
    this.showValue()
    this.changeState()

    this._datepickerInput.spellcheck = false
    this._datepickerInput.autocomplete = "off"
    this._datepickerInput.addEventListener('input', (event: Event) => {
      const targetElement = event.target as HTMLInputElement
      targetElement.value = this._outputDate
    })

    this.stylingContainer()
    
    this._prevButton.addEventListener('click', this.prevMonth.bind(this))
    this._nextButton.addEventListener('click', this.nextMonth.bind(this))

    this._expandButton.addEventListener('click', this.expand.bind(this))
    this._datepickerInput.addEventListener('focus', () => {
      this._wasExecuted = true
      this._container.classList.add('show')
    })

    window.addEventListener('click', this.hideOnOutsideClick.bind(this))
    this._quickButtons.forEach(button => button.addEventListener('click', this.quickAction.bind(this)))
  }

  private stylingContainer() {
    if(this.options?.isDark) this._container.setAttribute('data-theme', 'dark')
    if(this.options?.zIndex) this._container.style.setProperty('--z-index', String(this.options.zIndex))
    if(this.options?.customClass) {
      this.customClass.forEach(customClass => this._container.classList.add(customClass))
    }

    const { _datepickerInput: inputElement, _container: containerEl } = this

    autoUpdate(inputElement, containerEl, () => {
      computePosition(inputElement, containerEl, {
        placement: 'bottom',
        middleware: [offset(10), flip()]
      }).then(({ x, y }) => {
        Object.assign(this._container.style, { top: `${y}px`, left: `${x}px` })
      })
    })
  }

  private get _years() {
    const years = []
    const dateStart = moment(this._date)
    const dateEnd = moment(this._date).add(11, 'y')
    while (dateEnd.diff(dateStart, 'years') >= 0) {
      years.push(dateStart.format('YYYY'))
      dateStart.add(1, 'year')
    }
    return years
  }

  private quickAction(event: Event) {
    const targetElement = event.target as HTMLButtonElement
    const data = targetElement.getAttribute('data-action')

    switch (data) {
      case "today":
        this._date = this.startDate
        break
      case "tomorrow":
        this._date = moment(this.startDate).add(1, 'days').format(this._systemFormat)
        break
      default:
        this._date = moment(this.startDate).add(2, 'days').format(this._systemFormat)
        break
    }

    this.showValue()
    this.changeState()
    this.resetUI()
  }

  private showValue() {
    this._outputDate = moment(this._date).format(this.locale.format)
    this._datepickerInput.value = this._outputDate
  }

  private hideOnOutsideClick(event: Event) {
    const targetElement = event.target as HTMLElement
    if(!targetElement.closest(this._inputSelector) && !targetElement.closest('.calendarify')) {
      this._container.classList.remove('show')
      this.doneState()
      this._wasExecuted = false
    }
  }

  private expand() {
    this._isExpanded = true
    this._expandButton.textContent = moment(this._date).format('YYYY')
    this._wrapperEls.forEach(wrapper => wrapper.classList.add('d-none'))

    this._monthsWrapperEl.classList.remove('d-none')

    this.showMonths()
  }

  private showMonths() {
    this._expandButton.classList.add('d-none')
    this._yearRangeButton.classList.remove('d-none')
    const monthButtons = this._monthsWrapperEl.querySelectorAll('button') as NodeListOf<HTMLButtonElement>
    monthButtons.forEach(button => button.addEventListener('click', (event) => this.changeMonth(event, monthButtons)))

    this._yearRangeButton.addEventListener('click', this.showYears.bind(this))
  }

  private showYears() {
    this._expandedMode = 'years'
    this._monthsWrapperEl.classList.add('d-none')
    this._yearsWrapperEl.classList.remove('d-none')

    this._yearsWrapperEl.innerHTML = `${this._years.map(year => {
      return `<li><button class="${year == this._nowYear ? 'active' : ''}" data-date="${year}" type="button">${year}</button></li>`
    }).join('')}`

    const yearButtons = this._yearsWrapperEl.querySelectorAll('button') as NodeListOf<HTMLButtonElement>
    yearButtons.forEach(button => button.addEventListener('click', this.changeYear.bind(this)))

    this.changeState()
  }

  private changeYear(event: Event) {
    const targetElement = event.target as HTMLButtonElement
    const year = targetElement.getAttribute('data-date') as string
    const month = moment(this._nowMonth).format('MM')
    this._date = moment(`${year}-${month}-${this._nowDay}`).format(this._systemFormat)
    this._nowYear = year
    this._yearsWrapperEl.classList.add('d-none')
    this._monthsWrapperEl.classList.remove('d-none')

    this._expandedMode = 'months'
    this.changeState()
  }

  private changeMonth(event: Event, buttons: NodeListOf<HTMLButtonElement>) {
    this._wrapperEls.forEach(wrapper => wrapper.classList.remove('d-none'))
    buttons.forEach(button => button.classList.remove('active'))
    
    const targetElement = event.target as HTMLButtonElement
    const month = targetElement.getAttribute('data-date')
    const year = moment(this._date).format('YYYY')
    const fullDate = moment(new Date(`${year} ${month} ${this._nowDay}`))
    this._date = moment(fullDate).format(this._systemFormat)

    targetElement.classList.add('active')

    this._isExpanded = false
    this._expandedMode = 'months'
    this.changeState()
    this.resetUI()
  }

  private doneState() {
    this._container.classList.remove('show')

    const object = {
      date: {
        default: moment(this._outputDate).toDate(),
        iso: moment(this._outputDate).toISOString(),
      },
      formatted: {
        relative: moment(this._outputDate).fromNow(),
        calendar: moment(this._outputDate).calendar()
      },
      unix: {
        seconds: moment(this._outputDate).unix(),
        milliseconds: +moment(this._outputDate)
      },
      locale: this.locale,
      partials: {
        day: moment(this._outputDate).format('DD'),
        month: moment(this._outputDate).format('MM'),
        year: moment(this._outputDate).format('YYYY')
      }
    }

    this.resetUI()

    const { onChange, _wasExecuted, _isSetted } = this
    if(onChange && _wasExecuted && _isSetted) {
      onChange(object)
      this._isSetted = false
    }
  }

  private resetUI() {
    this._monthsWrapperEl.classList.add('d-none')
    this._yearsWrapperEl.classList.add('d-none')
    this._wrapperEls.forEach(wrapper => wrapper.classList.remove('d-none'))
    this._isExpanded = false
    this._monthsWrapperEl.classList.add('d-none')
    this._yearsWrapperEl.classList.add('d-none')
    this._expandButton.classList.remove('d-none')
    this._yearRangeButton.classList.add('d-none')
    this.changeState()
  }

  private changeState() {
    this._dates = []
    this._nowMonth = moment(this._date).format('YYYY-MM')
    this._nowDay = moment(this._date).format('D')

    this.loopDaysMonths()

    const formattedMonth = moment(this._nowMonth).format('M')
    const formattedYear = moment(this._nowMonth).format('YYYY')
    this._expandButton.textContent = `${this.locale.lang?.months![+formattedMonth - 1]} ${formattedYear}`

    switch (this._expandedMode) {
      case "years":
        this._yearRangeButton.textContent = `${this._years[0]} - ${this._years[this._years.length - 1]}`
        break
      default:
        this._yearRangeButton.textContent = moment(this._date).format('YYYY')
        break
    }

    // Render dates to wrapper
    this.renderDates()

    this._dateButtons = this._datesWrapperEl.querySelectorAll('.date-button') as NodeListOf<HTMLButtonElement>
    this._dateButtons.forEach(button => button.addEventListener('click', this.setDate.bind(this)))

    if(this._expandedMode == 'months') {
      const isFirstRowDisabled = this._dates.slice(0, 7).every(date => date.disabled)
      if(isFirstRowDisabled) for(let i = 0; i < 7; i++) {this._dateButtons[i].parentElement?.classList.add('d-none')}
    }
  }

  private loopDaysMonths() {
    const daysInMonth = moment(this._date).daysInMonth()
    const firstWeekdayOfTheMonth = moment(new Date(this._nowMonth)).isoWeekday()
    const daysInBeforeMonth = moment(this._date).subtract(1, 'months').daysInMonth()

    // Loop disabled days prev
    for(let i = 1; i <= firstWeekdayOfTheMonth; i++) { this._dates.unshift({ disabled: true, date: String(daysInBeforeMonth + 1 - i) })}
    // Loop days of the month
    for(let i = 1; i <= daysInMonth; i++) {this._dates.push({ disabled: false, date: String(i) })}
  }

  private renderDates() {
      this._datesWrapperEl.innerHTML = `${this._dates.map((date) => {
        return `<li><button ${date.disabled ? 'disabled' : ''} type="button" class="date-button ${this._helpers.getHolidayClass({ date: date.date, nowMonth: this._nowMonth })} ${this._nowDay == String(date.date) ? 'active' : ''}">${date.date}</button></li>`
    }).join('')}`
  }

  private setDate(event: Event) {
    this._isSetted = true
    const targetElement = event.target as HTMLButtonElement
    this._dateButtons.forEach(button => button.classList.remove('active'))
    this._nowDay = String(targetElement.textContent)
    this._date = `${moment(`${this._nowMonth}-${this._nowDay}`).format(this._systemFormat)}`
    
    this.showValue()
    targetElement.classList.add('active')
  }

  private prevMonth() {
    if(this._isExpanded) {
      switch (this._expandedMode) {
        case "months":
          this._date = moment(`${this._nowMonth}-${this._nowDay}`).subtract(1, 'years').format(this._systemFormat)
          break
        default:
          this._date = moment(`${this._nowMonth}-${this._nowDay}`).subtract(10, 'years').format(this._systemFormat)
          this.showYears()
          break
      }
    } else {
      this._date = moment(`${this._nowMonth}-${this._nowDay}`).subtract(1, 'months').format(this._systemFormat)
    }
    this.changeState()
  }

  private nextMonth() {
    if(this._isExpanded) {
      switch (this._expandedMode) {
        case "months":
          this._date = moment(`${this._nowMonth}-${this._nowDay}`).add(1, 'years').format(this._systemFormat)
          break
        default:
          this._date = moment(`${this._nowMonth}-${this._nowDay}`).add(10, 'years').format(this._systemFormat)
          this.showYears()
          break
      }
    } else {
      this._date = moment(`${this._nowMonth}-${this._nowDay}`).add(1, 'months').format(this._systemFormat)
    }
    this.changeState()
  }
}