import moment from "moment";
import type { Render, HolidayClassHandler } from "./types";

export const render = (args: Render) => {
  const { container, dates, months, years, nowDay, nowMonth, quickActions, locale } = args;
  container.innerHTML += `<div class="calendarify">
    <div class="quick-actions ${!quickActions ? 'd-none' : ''}">
      <button data-action="today">${locale.lang.ui?.quickActions?.today}</button>
      <button data-action="tomorrow">${locale.lang.ui?.quickActions?.tomorrow}</button>
      <button data-action="in-2-days">${locale.lang.ui?.quickActions?.inTwoDays}</button>
    </div>
    <nav class="navigation">
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
    <div class="calendar">
      <ul class="days-wrapper wrapper">
      ${locale.lang.weekdays?.map((day) => { return `<li>${day.slice(0, 3)}</li>` }).join("")}
      </ul>
      <ul class="dates-wrapper wrapper">
          ${dates
            .map((date) => {
              return `<li><button ${
                date.disabled ? "disabled" : ""
              } type="button" class="date-button ${getHolidayClassHandler({ date: date.date, nowMonth: nowMonth })} ${
                nowDay == String(date.date) ? "active" : ""
              }">${date.date}</button></li>`;
            })
            .join("")}
      </ul>
      <ul class="months-wrapper wrapper d-none">
        ${months.map((month, index) => {
          const monthShort = locale.lang.months![index].slice(0, 3)
          const nowMonthOnly = moment().format('M')
          return `<li><button class="${month == nowMonthOnly ? 'active' : ''}" data-date="${month}" type="button">${monthShort}</button></li>`
        }).join('')}
      </ul>
      <ul class="years-wrapper wrapper d-none">
        ${years.map(year => {
          return `<li><button data-date="${year}" type="button">${year}</button></li>`
        }).join('')}
      </ul>
    </div>
  </div>`;
};

export const getHolidayClassHandler = (args: HolidayClassHandler) => {
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
};