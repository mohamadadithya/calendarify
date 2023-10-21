import Calendarify from "./main";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <input type="text" class="calendarify-input" />
`;

const calendarify = new Calendarify(".calendarify-input", {
  position: "bottom-start", // You can set the position of the calendar
  onChange: (calendarify) => console.log(calendarify), // You can trigger whatever function in this property (e.g. to fetch data with passed date parameter)
  quickActions: true, // You can enable/disable quick action (Today, Tomorrow, In 2 Days) buttons with boolean
  isDark: false, // You can enable/disable dark mode
  zIndex: 9999,
  customClass: ["font-poppins"], // You can add custom class to the calendarify element
  locale: {
    // You can set locale for calendar
    format: "DD-MM-YYYY", // Set Custom Format with Moment JS
    lang: {
      code: "id", // Set country code (e.g. "en", "id", etc)
      months: [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ], // Or you can use locale moment.months instead
      weekdays: [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
      ], // Or you can use locale moment.weekdays instead
      ui: {
        // You can set locale text for quick action buttons
        quickActions: {
          today: "Hari Ini",
          tomorrow: "Besok",
          inTwoDays: "Lusa",
        },
      },
    },
  },
});

calendarify.init();
