export interface Date {
  disabled: boolean;
  date: string;
}

interface Lang {
  code?: string,
  ui?: {
    quickActions?: {
      today?: string,
      tomorrow?: string,
      inTwoDays?: string
    }
  },
  months?: string[],
  weekdays?: string[]
}

export interface Render {
  container: HTMLAreaElement,
  dates: Date[],
  months: string[],
  years: string[],
  nowDay: string,
  nowMonth: string,
  quickActions: boolean,
  locale: Locale
}

export interface Locale {
    format?: string,
    months?: string[],
    weekdays?: string[],
    lang?: Lang
}

export interface HolidayClass {
  date: string,
  nowMonth: string
}

export type ExpandedMode = "months" | "years";