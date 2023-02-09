export const render = (
  container: HTMLAreaElement,
  dates: string[],
  days: string[],
  months: string[],
  nowDay: string,
  nowMonth: string
) => {
  container.innerHTML += `<div class="calendarify">
    <div class="quick-actions">
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
        </li>
        <li>
          <button data-action="next" type="button"><i class="fas fa-fw fa-chevron-right"></i></button>
        </li>
      </ul>
    </nav>
    <div class="calendar">
      <ul class="days-wrapper wrapper">
      ${days
        .map((day) => {
          return `<li>${day}</li>`;
        })
        .join("")}
      </ul>
      <ul class="dates-wrapper wrapper">
          ${dates
            .map((date) => {
              return `<li><button ${
                date == "" ? "disabled" : ""
              } type="button" class="date-button ${getHolidayClassHandler(date, nowMonth)} ${
                nowDay == String(date) ? "active" : ""
              }">${date}</button></li>`;
            })
            .join("")}
      </ul>
      <ul class="months-wrapper wrapper d-none">
        ${months.map(month => {
          return `<li><button data-date="${month}" type="button">${month}</button></li>`
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