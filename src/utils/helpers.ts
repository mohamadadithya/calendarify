import moment from "moment";
import type { Render } from "./types";

export const render = (args: Render) => {
  const { container, dates, days, months, years, nowDay, nowMonth, quickActions } = args;
  container.innerHTML += `<div class="calendarify">
    <div class="quick-actions ${!quickActions ? 'd-none' : ''}">
      <button data-action="today">Today</button>
      <button data-action="tomorrow">Tomorrow</button>
      <button data-action="in-2-days">In 2 Days</button>
    </div>
    <nav class="navigation">
      <ul>
        <li>
          <button data-action="prev" type="button"><i class="fas fa-fw fa-chevron-left"></i></button>
        </li>
        <li>
          <button data-action="expand" type="button">February 2023</button>
          <button data-action="year-range" class="d-none" type="button">2023</button>
        </li>
        <li>
          <button data-action="next" type="button"><i class="fas fa-fw fa-chevron-right"></i></button>
        </li>
      </ul>
    </nav>
    <div class="calendar">
      <ul class="days-wrapper wrapper">
      ${days.map((day) => { return `<li>${day}</li>` }).join("")}
      </ul>
      <ul class="dates-wrapper wrapper">
          ${dates
            .map((date) => {
              return `<li><button ${
                date.disabled ? "disabled" : ""
              } type="button" class="date-button ${getHolidayClassHandler(date.date, nowMonth)} ${
                nowDay == String(date.date) ? "active" : ""
              }">${date.date}</button></li>`;
            })
            .join("")}
      </ul>
      <ul class="months-wrapper wrapper d-none">
        ${months.map(month => {
          const nowMonthShort = moment(nowMonth).format('MMM')
          return `<li><button class="${month == nowMonthShort ? 'active' : ''}" data-date="${month}" type="button">${month}</button></li>`
        }).join('')}
      </ul>
      <ul class="years-wrapper wrapper d-none">
        ${years.map(year => {
          return `<li><button data-date="${year}" type="button">${year}</button></li>`
        }).join('')}
      </ul>
    </div>
    <div class="trigger-buttons">
      <button data-action="reset" type="button">Reset</button>
      <button data-action="done" type="button">Done</button>
    </div>
  </div>`;
};

export const getHolidayClassHandler = (date: string, nowMonth: string) => {
  const dayPosition = new Date(`${date} ${nowMonth}`).getDay();
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