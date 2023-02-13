# Calendarify

Calendarify is a simple datepicker javascript library.

### Installation

#### GitHack

```html
<link rel="stylesheet" type="text/css" href="https://rawcdn.githack.com/mohamadadithya/calendarify/5fca1d1c3519d08abc6dcf81b0b363c7895b4eaa/dist/calendarify.min.css">

<!-- You can also choose UMD version -->
<script src="https://rawcdn.githack.com/mohamadadithya/calendarify/5fca1d1c3519d08abc6dcf81b0b363c7895b4eaa/dist/calendarify.js"></script>
<script src="https://rawcdn.githack.com/mohamadadithya/calendarify/5fca1d1c3519d08abc6dcf81b0b363c7895b4eaa/dist/calendarify.umd.js"></script>
```

#### JSDelivr

```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/mohamadadithya/calendarify@latest/dist/calendarify.min.css">

<!-- You can also choose UMD version -->
<script src="https://cdn.jsdelivr.net/gh/mohamadadithya/calendarify@latest/dist/calendarify.js"></script>
<script src="https://cdn.jsdelivr.net/gh/mohamadadithya/calendarify@latest/dist/calendarify.umd.js"></script>
```

#### Statically

```html
<link rel="stylesheet" type="text/css" href="https://cdn.statically.io/gh/mohamadadithya/calendarify/master/dist/calendarify.min.css">

<!-- You can also choose UMD version -->
<script src="https://cdn.statically.io/gh/mohamadadithya/calendarify/master/dist/calendarify.js"></script>
<script src="https://cdn.statically.io/gh/mohamadadithya/calendarify/master/dist/calendarify.umd.js"></script>
```

#### NPM
```shell
npm i calendarify
```

#### PNPM
```shell
pnpm add calendarify
```

### How to use

#### ES6
```javascript
import Calendarify from "calendarify"

const calendarify = new Calendarify('.input-element', { // Pass input selector to append calendarify
  onTrigger: (calendarify) => console.log(calendarify), // You can trigger whatever function in this property (e.g. to fetch data with passed date parameter)
  quickActions: true, // You can enable/disable quick action (Today, Tomorrow, In 2 Days) buttons with boolean
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

calendarify.init() // Initialize calendarify
```

#### CDN
Include `calendarify.min.css` in the `<head>` first

```html
<head>
  ...
  <link rel="stylesheet" type="text/css" href="https://cdn.statically.io/gh/mohamadadithya/calendarify/master/dist/calendarify.min.css" />
</head>
```

and then include `calendarify.js` just above your closing `</body>` tag...

```html
<body>
  ...
  <script src="https://cdn.statically.io/gh/mohamadadithya/calendarify/master/dist/calendarify.js"></script>
</body>
```

If you downloaded the package via zip file from Github, these files are located in the dist folder. Otherwise, you can use the CDNs as shown in the [Installation](#installation).

```javascript
const calendarify = new Calendarify('.input-element', { // Pass input selector to append calendarify
  onTrigger: (calendarify) => console.log(calendarify), // You can trigger whatever function in this property (e.g. to fetch data with passed date parameter)
  quickActions: true, // You can enable/disable quick action (Today, Tomorrow, In 2 Days) buttons with boolean
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

calendarify.init() // Initialize calendarify
```