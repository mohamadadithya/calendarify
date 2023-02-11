export interface Date {
  disabled: boolean;
  date: string;
}

export interface Render {
  container: HTMLAreaElement;
  dates: Date[];
  days: string[];
  months: string[];
  years: string[];
  nowDay: string;
  nowMonth: string;
  quickActions: boolean;
}

export interface Locale {
    format: string,
    lang: string
}

export type ExpandedMode = "months" | "years";