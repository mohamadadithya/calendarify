import { Placement } from "@floating-ui/dom";
import type { Locale } from "./utils/types";
export default class Calendarify {
    options: Partial<Calendarify>;
    locale: Locale;
    startDate: string;
    accentColor: string;
    isDark: boolean;
    zIndex: number | string;
    customClass: string[];
    quickActions: boolean;
    onChange?: (outputObject: Object) => void;
    position: Placement;
    private _container;
    private _calendarWrapper;
    private _datepickerInput;
    private _datesWrapperEl;
    private _monthsWrapperEl;
    private _yearsWrapperEl;
    private _months;
    private _dates;
    private _nowMonth;
    private _nowDay;
    private _nowYear;
    private _dateButtons;
    private _expandButton;
    private _prevButton;
    private _nextButton;
    private _date;
    private _isExpanded;
    private _expandedMode;
    private _outputDate;
    private _quickButtons;
    private _wrapperEls;
    private _yearRangeButton;
    private _systemFormat;
    private _helpers;
    private _inputSelector;
    private _wasExecuted;
    private _isSetted;
    constructor(inputSelector: string, options?: Partial<Calendarify>);
    init(): void;
    private stylingContainer;
    private get _years();
    private quickAction;
    private showValue;
    private hideOnOutsideClick;
    private expand;
    private showMonths;
    private showYears;
    private changeYear;
    private changeMonth;
    private doneState;
    private resetUI;
    private changeState;
    private loopDaysMonths;
    private renderDates;
    private setDate;
    private prevMonth;
    private nextMonth;
}
