import type { Locale, Date, HolidayClass } from "./types";
export declare class Helpers {
    options: this & Partial<Helpers>;
    container: HTMLAreaElement;
    dates: Date[];
    months: string[];
    years: string[];
    nowDay: string;
    nowMonth: string;
    quickActions: boolean;
    locale: Locale;
    constructor(options: Partial<Helpers>);
    render(): void;
    getHolidayClass(args: HolidayClass): string;
}
