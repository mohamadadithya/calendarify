import { Calendarify } from "./main"

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `<input type="text" class="calendarify-input" />`

const calendarify = new Calendarify({
  rootContainer: document.querySelector("#app") as HTMLAreaElement,
  onTrigger: (calendarify) => console.log(calendarify),
  quickActions: true,
  locale: {
    format: "DD-MM-YYYY",
    lang: {
      code: 'id',
      months: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
      ui: {
        quickActions: {
          today: "Hari Ini",
          tomorrow: "Besok",
          inTwoDays: "Lusa",
        }
      }
    }
  }
})

calendarify.init()
