import moment from "moment";
import type { Locale, Date, HolidayClass } from "./types";

export class Helpers {
  public options
  public container: HTMLAreaElement
  public dates: Date[]
  public months: string[]
  public years: string[]
  public nowDay: string
  public nowMonth: string
  public quickActions: boolean
  public locale: Locale

  constructor(options: Partial<Helpers>) {
    this.options = Object.assign(this, options)
    this.container = this.options.container
    this.dates = this.options.dates
    this.months = this.options.months
    this.years = this.options.years
    this.nowDay = this.options.nowDay
    this.nowMonth = this.options.nowMonth
    this.quickActions = this.options.quickActions
    this.locale = this.options.locale
  }

  render() {
    this.container.innerHTML += `<div class="calendarify">
    <div class="calendarify__quick-actions ${!this.quickActions ? 'd-none' : ''}">
      <button data-action="today">${this.locale.lang?.ui?.quickActions?.today}</button>
      <button data-action="tomorrow">${this.locale.lang?.ui?.quickActions?.tomorrow}</button>
      <button data-action="in-2-days">${this.locale.lang?.ui?.quickActions?.inTwoDays}</button>
    </div>
    <nav class="calendarify__navigations">
      <ul>
        <li>
          <button data-action="prev" type="button"><i class="fas fa-fw fa-chevron-left"></i></button>
        </li>
        <li>
          <button data-action="expand" type="button">-</button>
          <button data-action="year-range" class="d-none" type="button">-</button>
        </li>
        <li>
          <button data-action="next" type="button"><i class="fas fa-fw fa-chevron-right"></i></button>
        </li>
      </ul>
    </nav>
    <div class="calendarify__calendar">
      <ul class="days-wrapper wrapper">
      ${this.locale.lang?.weekdays?.map((day) => { return `<li>${day.slice(0, 3)}</li>` }).join("")}
      </ul>
      <ul class="dates-wrapper wrapper">
          ${this.dates
            .map((date) => {
              return `<li><button ${
                date.disabled ? "disabled" : ""
              } type="button" class="date-button ${this.getHolidayClass({ date: date.date, nowMonth: this.nowMonth })} ${
                this.nowDay == String(date.date) ? "active" : ""
              }">${date.date}</button></li>`;
            })
            .join("")}
      </ul>
      <ul class="months-wrapper wrapper d-none">
        ${this.months.map((month, index) => {
          const monthShort = this.locale.lang?.months![index].slice(0, 3)
          const nowMonthOnly = moment().format('M')
          return `<li><button class="${month == nowMonthOnly ? 'active' : ''}" data-date="${month}" type="button">${monthShort}</button></li>`
        }).join('')}
      </ul>
      <ul class="years-wrapper wrapper d-none">
        ${this.years.map(year => {
          return `<li><button data-date="${year}" type="button">${year}</button></li>`
        }).join('')}
      </ul>
    </div>
  </div>`;
  }

  getHolidayClass(args: HolidayClass) {
    const { nowMonth, date } = args;
    const dayPosition = new Date(`${nowMonth}-${date}`).getDay();
    const isHoliday = dayPosition === 0;
    const isPreHoliday = dayPosition === 6;
  
    let handlerClass = "";
  
    if (isHoliday) {
      handlerClass = "holiday";
    } else if (isPreHoliday) {
      handlerClass = "pre-holiday";
    }
    
    return handlerClass
  }
}