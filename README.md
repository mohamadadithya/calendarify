# Calendarify

[![npm version](https://badge.fury.io/js/calendarify.svg)](https://badge.fury.io/js/calendarify)
[![npm weekly downloads](https://img.shields.io/npm/dw/calendarify.svg)](https://www.npmjs.com/package/calendarify)

Calendarify is a simple and lightweight Vanilla JavaScript datepicker library.

## Screenshots

![Calendarify light](https://ik.imagekit.io/0vztr848y/calendarify/Screenshot%20from%202023-07-27%2009-21-23.png?updatedAt=1690425026231)
![Calendarify dark](https://ik.imagekit.io/0vztr848y/calendarify/Screenshot%20from%202023-07-27%2009-21-11.png?updatedAt=1690424984666)

## Shortlinks

* [Installation](#installation)
* [How to Use](#how-to-use)
* [Options](#options)
  * [Types](#types)
* [File Sizes](#file-sizes)

## Installation

#### NPM

```shell
npm i calendarify
```

#### PNPM

```shell
pnpm add calendarify
```

#### JSDelivr

```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/mohamadadithya/calendarify@latest/dist/calendarify.min.css">
<script src="https://cdn.jsdelivr.net/gh/mohamadadithya/calendarify@latest/dist/calendarify.iife.js"></script>
```

#### Statically

```html
<link rel="stylesheet" type="text/css" href="https://cdn.statically.io/gh/mohamadadithya/calendarify/master/dist/calendarify.min.css">
<script src="https://cdn.statically.io/gh/mohamadadithya/calendarify/master/dist/calendarify.iife.js"></script>
```

#### UNPKG

```html
<link rel="stylesheet" type="text/css" href="https://unpkg.com/calendarify@latest/dist/calendarify.min.css">
<script src="https://unpkg.com/calendarify@latest/dist/calendarify.iife.js"></script>
```

## How to use

#### ES6
```javascript
import Calendarify from "calendarify"

const calendarify = new Calendarify('.date-input', { ...options })
calendarify.init() // Initialize calendarify
```

#### CDN
Include `calendarify.min.css` in the `<head>` first

```html
<head>
  ...
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/calendarify@latest/dist/calendarify.min.css" />
</head>
```

and then include `calendarify.iife.js` just above your closing `</body>` tag...

```html
<body>
  ...
  <input type="text" class="date-input" id="date-input" />
  ...
  <script src="https://unpkg.com/calendarify@latest/dist/calendarify.iife.js"></script>
</body>
```

If you downloaded the package via zip file from Github, these files are located in the dist folder. Otherwise, you can use the CDNs as shown in the [Installation](#installation).

```javascript
const calendarify = new Calendarify('.date-input', { ...options })
calendarify.init() // Initialize calendarify
```

## Options

```javascript
const options = {
  accentColor: '#0090FC', // You can customize the accent color
  isDark: true, // You can enable/disable dark mode
  zIndex: 9999, // You can set z-index, default is 1000
  customClass: ['font-poppins'], // You can add custom class to the calendarify element
  onChange: (calendarify) => console.log(calendarify), // You can trigger whatever function in this callback property (e.g. to fetch data with passed date parameter)
  quickActions: true, // You can enable/disable quick action (Today, Tomorrow, In 2 Days) buttons
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
}
```

### Types

#### accentColor

* Type: `String`
* Default: `#0090FC`

Customize the accent color

#### isDark

* Type: `Boolean`
* Default: `false`

Enable/disable dark mode

#### zIndex

* Type: `String | Number`
* Default: `1000`

Set calendarify element **z-index**, default is 1000

#### customClass

* Type: `String[]`
* Default: `[]`

Add custom classes to the calendarify element

#### onChange

* Type: `Callback`
* Default: `null`

Trigger whatever function in this callback property (e.g. to fetch data with passed date parameter)

#### quickActions

* Type: `Boolean`
* Default: `false`

Enable/disable quick action (Today, Tomorrow, In 2 Days) buttons

#### format

* Type: `String`
* Default: `YYYY-MM-DD`

Set output date format with Moment JS

#### code

* Type: `String`
* Default: `en`

Set country code (e.g. "en", "id", etc)

#### months

* Type: `String[]`
* Default: `['January', 'February', ...]`

Set locale month names / Or you can use locale **moment.months()** instead

#### weekdays

* Type: `String[]`
* Default: `['Sunday', 'Monday', ...]`

Set locale month names / Or you can use locale **moment.weekdays()** instead

#### today

* Type: `String`
* Default: `Today`

set **today** locale text for quick action buttons

#### tomorrow

* Type: `String`
* Default: `Tomorrow`

set **tomorrow** locale text for quick action buttons

#### inTwoDays

* Type: `String`
* Default: `in 2 Days`

set **in 2 days** locale text for quick action buttons

## File Sizes

```shell
dist/calendarify.min.css    3.82 kB   │ gzip:  1.03 kB
dist/calendarify.js         129.57 kB │ gzip: 35.95 kB
dist/calendarify.umd.cjs    99.48 kB  │ gzip: 31.91 kB
dist/calendarify.cjs        99.23 kB  │ gzip: 31.82 kB
dist/calendarify.iife.js    99.28 kB  │ gzip: 31.83 kB
```
