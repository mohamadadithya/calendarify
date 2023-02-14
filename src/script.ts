import Calendarify from "./main"

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="wrapper">
    <input type="text" class="calendarify-input" />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo autem accusantium provident officia necessitatibus obcaecati. Distinctio ad sint odio esse ullam, et doloribus expedita excepturi aut molestias voluptatem aliquam porro.
    Quos explicabo pariatur quae natus, sed doloremque illo libero quibusdam culpa vitae laborum, nostrum animi quis sint maxime odio dolores! Necessitatibus nihil, id assumenda repellendus rem modi unde beatae dolore.
    Quam nostrum veritatis vitae rem dolore nobis id in. Neque est explicabo rerum debitis? In, totam illum earum sapiente eius mollitia recusandae, amet enim numquam assumenda inventore, fugiat cupiditate autem.
    Doloribus maiores hic at? Nostrum veniam obcaecati, dolorem quod quos ad nulla reiciendis deserunt ullam voluptatibus quidem dolores aspernatur porro? Minus voluptatem cum ex eveniet in provident, mollitia ipsam a.
    Quo quaerat harum, provident, voluptatibus error necessitatibus nulla, iure ea reiciendis voluptates beatae nesciunt! Debitis distinctio, perferendis voluptatum ipsum aspernatur fugit repudiandae officiis quisquam amet sequi corrupti accusamus blanditiis at.
    Saepe aliquam illo suscipit doloremque sit? Quasi et, reiciendis voluptatum reprehenderit labore beatae qui iure quidem, veritatis excepturi dolores dignissimos iste facilis, minus quae tempore. Animi, maiores rem? Temporibus, animi.
    Facere eaque iusto sapiente aperiam dignissimos, consequatur vitae. Sed aliquam qui provident praesentium iste incidunt aperiam dignissimos maiores nesciunt illo laudantium atque corporis repudiandae, repellat itaque aut, quisquam nemo vero.
    Aperiam, quia tenetur adipisci alias exercitationem neque repellat eos repudiandae ducimus molestiae. Voluptate laboriosam cumque odio illum obcaecati iusto libero, et incidunt veritatis ea blanditiis officiis explicabo assumenda doloremque. Ea.
    Exercitationem, nulla! Veritatis dolores earum molestias alias consectetur. Aspernatur esse tempora error, commodi, ratione nisi hic nihil quod deserunt corporis quo? Necessitatibus dolores blanditiis dolor? Quas natus quisquam ipsa cum.
    Itaque officia laudantium consequatur totam voluptate animi doloribus quam, nihil neque quas ducimus dolores voluptas repellat corrupti sed dolor magni quisquam consequuntur, eos a quod iste vel. Similique, consequuntur dolorem?</p>
  </div>
`

const calendarify = new Calendarify('.calendarify-input', {
  onChange: (calendarify) => console.log(calendarify), // You can trigger whatever function in this property (e.g. to fetch data with passed date parameter)
  quickActions: true, // You can enable/disable quick action (Today, Tomorrow, In 2 Days) buttons with boolean
  isDark: false, // You can enable/disable dark mode
  customClass: ['font-poppins'], // You can add custom class to the calendarify element
  locale: { // You can set locale for calendar
    format: "DD-MM-YYYY", // Set Custom Format with Moment JS
    lang: {
      code: 'id', // Set country code (e.g. "en", "id", etc)
      months: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'], // Or you can use locale moment.months instead
      weekdays: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'], // Or you can use locale moment.weekdays instead
      ui: { // You can set locale text for quick action buttons
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
