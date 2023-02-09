import './styles/main.scss'
import moment from 'moment'
import { getHolidayClassHandler, render } from './utils/helpers'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <input type="text" class="calendarify-input" />`

class Calendarify {
  public options
  public locale: string
  public rootContainer: HTMLAreaElement
  public startDate: string = moment().format('YYYY-MM-DD')
  public accentColor: string = '#0090FC'

  private _container: HTMLAreaElement
  private _calendarWrapper: HTMLAreaElement
  private _datepickerInput: HTMLInputElement
  private _datesWrapperEl: HTMLAreaElement
  private _days: string[]
  private _months: string[]
  private _dates: string[]
  private _nowMonth: string
  private _nowDay: string
  private _dateButtons: NodeListOf<HTMLButtonElement>
  private _expandButton: HTMLButtonElement
  private _prevButton: HTMLButtonElement
  private _nextButton: HTMLButtonElement
  private _doneButton: HTMLButtonElement
  private _date: string
  private _isExpanded: boolean = false

  constructor(options: Partial<Calendarify>) {
    const rootElement = document.documentElement
    this.locale = 'en'
    moment.locale(this.locale)
    this.options = Object.assign(this, options)
    rootElement.style.setProperty('--accentColor', this.options.accentColor)
    this.rootContainer = options.rootContainer as HTMLAreaElement

    this._date = this.options.startDate
    this._days = moment.weekdaysShort()
    this._months = moment.monthsShort()
    this._nowMonth = moment(this._date).format('MMMM YYYY')
    this._nowDay = moment(this._date).format('D')

    this._dates = []

    const daysInMonth = moment(this._date).daysInMonth()
    const firstWeekdayOfTheMonth = moment(new Date(this._nowMonth)).isoWeekday()
    
    for(let i = 1; i <= firstWeekdayOfTheMonth; i++) {this._dates.push("")}
    for(let i = 1; i <= daysInMonth; i++) {this._dates.push(String(i))}

    render(this.rootContainer, this._dates, this._days, this._months, this._nowDay, this._nowMonth)

    this._container = document.querySelector('.calendarify') as HTMLAreaElement
    this._datepickerInput = document.querySelector('.calendarify-input') as HTMLInputElement
    this._datesWrapperEl = this._container.querySelector('.dates-wrapper') as HTMLAreaElement
    this._expandButton = this._container.querySelector('.navigation button[data-action="expand"]') as HTMLButtonElement
    this._dateButtons = this._container.querySelectorAll('.date-button') as NodeListOf<HTMLButtonElement>
    this._prevButton = this._container.querySelector('.navigation button[data-action="prev"]') as HTMLButtonElement
    this._nextButton = this._container.querySelector('.navigation button[data-action="next"]') as HTMLButtonElement
    this._calendarWrapper = this._container.querySelector('.calendar') as HTMLAreaElement
    this._doneButton = this._container.querySelector('.trigger-buttons button[data-action="done"]') as HTMLButtonElement
  }

  public init() {
    this.changeState()
    
    this._prevButton.addEventListener('click', this.prevMonth.bind(this))
    this._nextButton.addEventListener('click', this.nextMonth.bind(this))

    this._expandButton.addEventListener('click', this.expand.bind(this))
    this._doneButton.addEventListener('click', this.doneState.bind(this))
    this._datepickerInput.addEventListener('focus', () => this._container.classList.add('show'))

    window.addEventListener('click', this.hideOnOutsideClick.bind(this))
  }

  private hideOnOutsideClick(event: Event) {
    const targetElement = event.target as HTMLElement
    if(!targetElement.closest('.calendarify-input') && !targetElement.closest('.calendarify')) {
      this._container.classList.remove('show')
    }
  }

  private expand() {
    this._isExpanded = true
    this._expandButton.textContent = moment(this._date).format('YYYY')
    const wrappers = this._calendarWrapper.querySelectorAll('.wrapper:not(:last-child)') as NodeListOf<HTMLAreaElement>
    wrappers.forEach(wrapper => wrapper.classList.add('d-none'))

    const monthsWrapper = this._calendarWrapper.querySelector('.months-wrapper') as HTMLAreaElement
    monthsWrapper.classList.remove('d-none')

    const monthButtons = monthsWrapper.querySelectorAll('button') as NodeListOf<HTMLButtonElement>
    monthButtons.forEach(button => {
      button.addEventListener('click', (event) => this.changeMonth(event, wrappers, monthsWrapper))
    })
  }

  private changeMonth(event: Event, wrappers: NodeListOf<HTMLAreaElement>, monthsWrapper: HTMLAreaElement) {
    wrappers.forEach(wrapper => wrapper.classList.remove('d-none'))
    const targetElement = event.target as HTMLButtonElement
    const month = targetElement.getAttribute('data-date')
    const year = moment(this._date).format('YYYY')
    const fullDate = moment(new Date(`${year} ${month}`))
    this._date = moment(fullDate).format('YYYY-MM')

    this._isExpanded = false
    this.changeState()
    monthsWrapper.classList.add('d-none')
  }

  private doneState() {
    this._container.classList.remove('show')
  }

  private changeState() {
    this._dates = []
    this._nowMonth = moment(this._date).format('MMMM YYYY')
    this._nowDay = moment(this._date).format('D')
    const daysInMonth = moment(this._date).daysInMonth()
    const firstWeekdayOfTheMonth = moment(new Date(this._nowMonth)).isoWeekday()

    this._expandButton.textContent = this._isExpanded ? moment(this._date).format('YYYY') : this._expandButton.textContent = this._nowMonth
    
    for(let i = 1; i <= firstWeekdayOfTheMonth; i++) {this._dates.push("")}
    for(let i = 1; i <= daysInMonth; i++) {this._dates.push(String(i))}

    this.renderDates()

    this._dateButtons = this._datesWrapperEl.querySelectorAll('.date-button') as NodeListOf<HTMLButtonElement>
    this._dateButtons.forEach(button => button.addEventListener('click', this.setDate.bind(this)))

    const isFirstRowEmpty = this._dates.slice(0, 7).every(date => date === "")
    if(isFirstRowEmpty) for(let i = 0; i < 7; i++) {this._dateButtons[i].classList.add('d-none')}
  }

  private renderDates() {
      this._datesWrapperEl.innerHTML = `${this._dates.map((date) => {
        return `<li><button ${date == "" ? 'disabled' : ''} type="button" class="date-button ${getHolidayClassHandler(date, this._nowMonth)} ${this._nowDay == String(date) ? 'active' : ''}">${date}</button></li>`
    }).join('')}`
  }

  private setDate(event: Event) {
    const targetElement = event.target as HTMLButtonElement
    this._dateButtons.forEach(button => button.classList.remove('active'))

    targetElement.classList.add('active')
  }

  private prevMonth() {
    if(this._isExpanded) {
      this._date = moment(this._nowMonth).subtract(1, 'years').format('YYYY-MM')
    } else {
      this._date = moment(this._nowMonth).subtract(1, 'months').format('YYYY-MM')
    }
    this.changeState()
  }

  private nextMonth() {
    if(this._isExpanded) {
      this._date = moment(this._nowMonth).add(1, 'years').format('YYYY-MM')
    } else {
      this._date = moment(this._nowMonth).add(1, 'months').format('YYYY-MM')
    }
    this.changeState()
  }
}

const calendarify = new Calendarify({
  locale: 'en',
  rootContainer: document.querySelector('#app') as HTMLAreaElement
})

calendarify.init()