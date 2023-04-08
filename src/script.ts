import Calendarify from "./main"

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula lacus a velit commodo, eu aliquam diam maximus. Proin velit tortor, congue sit amet justo ornare, pretium venenatis nisl. Donec eleifend, ante non consequat vulputate, leo tortor tempus orci, rutrum ullamcorper urna nibh vitae ante. Morbi vel lacinia sem. Sed diam dolor, iaculis et dui ac, tincidunt feugiat dolor. Ut eleifend suscipit lorem in tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque porttitor lacinia leo pulvinar dignissim.

  Ut scelerisque nisi et scelerisque molestie. Praesent nec finibus purus. Donec iaculis nunc quam, sit amet facilisis tellus luctus et. Duis in mattis est, sit amet aliquet justo. Phasellus lacinia facilisis ligula. Vestibulum vitae ante semper, ultricies odio ac, scelerisque lorem. Proin sollicitudin pretium felis, in consectetur magna. Cras aliquam congue vulputate. Donec vitae enim mauris. Maecenas laoreet diam sit amet laoreet scelerisque.
  
  Nunc pulvinar sem eu bibendum imperdiet. Aliquam pellentesque eget dui eget cursus. Morbi vitae euismod nibh. Proin id elementum felis, consequat convallis velit. Vivamus ac faucibus lacus, vitae ultrices nibh. Proin mollis mollis quam sed semper. Proin ac ultricies nibh, ut faucibus turpis. Curabitur mollis eget ligula sed fermentum. Aliquam erat volutpat. Mauris egestas faucibus nibh, ut mollis tellus convallis eu. Nunc scelerisque turpis ut nisl pellentesque, ac rhoncus est fringilla. Nullam non tristique sapien.
  
  Etiam id est mi. Proin tempus nulla sed sem placerat lacinia. Vestibulum cursus eleifend enim. Praesent nisi nisi, aliquet in auctor hendrerit, viverra eu nulla. In lacinia semper massa venenatis pellentesque. Integer risus ipsum, commodo vitae leo sit amet, ornare hendrerit neque. Donec efficitur nunc nec hendrerit luctus. Duis congue mi a risus rhoncus finibus nec ut ipsum. Suspendisse porttitor sit amet nisi eu dignissim. Pellentesque eu tortor sit amet quam malesuada dapibus eget eget arcu. Mauris facilisis augue in molestie eleifend.
  
  Phasellus tincidunt sit amet elit et rhoncus. Ut sodales leo eleifend sem elementum euismod. Suspendisse varius efficitur purus non viverra. Praesent facilisis, tellus in luctus porta, lacus lectus hendrerit sapien, ut lacinia augue velit sed sem. Vestibulum maximus elit justo, ut fringilla diam placerat ac. Pellentesque aliquam risus sed gravida lobortis. Nulla quis nibh vitae leo egestas ornare. Aenean vel purus quam. Praesent bibendum vestibulum quam at varius. Integer tempus congue nisl eu hendrerit. Morbi vitae bibendum massa, sed hendrerit nibh. Vivamus vel ligula interdum, vestibulum nisl id, pharetra velit. Duis sodales pellentesque molestie. Donec et laoreet metus.</p>
  <input type="text" class="calendarify-input" />
`

const calendarify = new Calendarify('.calendarify-input', {
  onChange: (calendarify) => console.log(calendarify), // You can trigger whatever function in this property (e.g. to fetch data with passed date parameter)
  quickActions: true, // You can enable/disable quick action (Today, Tomorrow, In 2 Days) buttons with boolean
  isDark: false, // You can enable/disable dark mode
  zIndex: 9999,
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
