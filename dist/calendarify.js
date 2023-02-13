var bs = Object.defineProperty;
var xs = (e, t, s) => t in e ? bs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var f = (e, t, s) => (xs(e, typeof t != "symbol" ? t + "" : t, s), s);
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Ft;
function o() {
  return Ft.apply(null, arguments);
}
function Ts(e) {
  Ft = e;
}
function A(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function ne(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function w(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function ot(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (w(e, t))
      return !1;
  return !0;
}
function E(e) {
  return e === void 0;
}
function Q(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function De(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Lt(e, t) {
  var s = [], a, r = e.length;
  for (a = 0; a < r; ++a)
    s.push(t(e[a], a));
  return s;
}
function ee(e, t) {
  for (var s in t)
    w(t, s) && (e[s] = t[s]);
  return w(t, "toString") && (e.toString = t.toString), w(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function G(e, t, s, a) {
  return is(e, t, s, a, !0).utc();
}
function Ws() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function _(e) {
  return e._pf == null && (e._pf = Ws()), e._pf;
}
var et;
Array.prototype.some ? et = Array.prototype.some : et = function(e) {
  var t = Object(this), s = t.length >>> 0, a;
  for (a = 0; a < s; a++)
    if (a in t && e.call(this, t[a], a, t))
      return !0;
  return !1;
};
function lt(e) {
  if (e._isValid == null) {
    var t = _(e), s = et.call(t.parsedDateParts, function(r) {
      return r != null;
    }), a = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && s);
    if (e._strict && (a = a && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = a;
    else
      return a;
  }
  return e._isValid;
}
function Ce(e) {
  var t = G(NaN);
  return e != null ? ee(_(t), e) : _(t).userInvalidated = !0, t;
}
var Wt = o.momentProperties = [], Je = !1;
function ht(e, t) {
  var s, a, r, n = Wt.length;
  if (E(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), E(t._i) || (e._i = t._i), E(t._f) || (e._f = t._f), E(t._l) || (e._l = t._l), E(t._strict) || (e._strict = t._strict), E(t._tzm) || (e._tzm = t._tzm), E(t._isUTC) || (e._isUTC = t._isUTC), E(t._offset) || (e._offset = t._offset), E(t._pf) || (e._pf = _(t)), E(t._locale) || (e._locale = t._locale), n > 0)
    for (s = 0; s < n; s++)
      a = Wt[s], r = t[a], E(r) || (e[a] = r);
  return e;
}
function Se(e) {
  ht(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), Je === !1 && (Je = !0, o.updateOffset(this), Je = !1);
}
function U(e) {
  return e instanceof Se || e != null && e._isAMomentObject != null;
}
function Ct(e) {
  o.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function F(e, t) {
  var s = !0;
  return ee(function() {
    if (o.deprecationHandler != null && o.deprecationHandler(null, e), s) {
      var a = [], r, n, i, h = arguments.length;
      for (n = 0; n < h; n++) {
        if (r = "", typeof arguments[n] == "object") {
          r += `
[` + n + "] ";
          for (i in arguments[0])
            w(arguments[0], i) && (r += i + ": " + arguments[0][i] + ", ");
          r = r.slice(0, -2);
        } else
          r = arguments[n];
        a.push(r);
      }
      Ct(
        e + `
Arguments: ` + Array.prototype.slice.call(a).join("") + `
` + new Error().stack
      ), s = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Et = {};
function It(e, t) {
  o.deprecationHandler != null && o.deprecationHandler(e, t), Et[e] || (Ct(t), Et[e] = !0);
}
o.suppressDeprecationWarnings = !1;
o.deprecationHandler = null;
function j(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function Es(e) {
  var t, s;
  for (s in e)
    w(e, s) && (t = e[s], j(t) ? this[s] = t : this["_" + s] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function tt(e, t) {
  var s = ee({}, e), a;
  for (a in t)
    w(t, a) && (ne(e[a]) && ne(t[a]) ? (s[a] = {}, ee(s[a], e[a]), ee(s[a], t[a])) : t[a] != null ? s[a] = t[a] : delete s[a]);
  for (a in e)
    w(e, a) && !w(t, a) && ne(e[a]) && (s[a] = ee({}, s[a]));
  return s;
}
function ut(e) {
  e != null && this.set(e);
}
var st;
Object.keys ? st = Object.keys : st = function(e) {
  var t, s = [];
  for (t in e)
    w(e, t) && s.push(t);
  return s;
};
var Rs = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Ps(e, t, s) {
  var a = this._calendar[e] || this._calendar.sameElse;
  return j(a) ? a.call(t, s) : a;
}
function V(e, t, s) {
  var a = "" + Math.abs(e), r = t - a.length, n = e >= 0;
  return (n ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + a;
}
var dt = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Oe = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Qe = {}, ue = {};
function c(e, t, s, a) {
  var r = a;
  typeof a == "string" && (r = function() {
    return this[a]();
  }), e && (ue[e] = r), t && (ue[t[0]] = function() {
    return V(r.apply(this, arguments), t[1], t[2]);
  }), s && (ue[s] = function() {
    return this.localeData().ordinal(
      r.apply(this, arguments),
      e
    );
  });
}
function Ns(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Fs(e) {
  var t = e.match(dt), s, a;
  for (s = 0, a = t.length; s < a; s++)
    ue[t[s]] ? t[s] = ue[t[s]] : t[s] = Ns(t[s]);
  return function(r) {
    var n = "", i;
    for (i = 0; i < a; i++)
      n += j(t[i]) ? t[i].call(r, e) : t[i];
    return n;
  };
}
function xe(e, t) {
  return e.isValid() ? (t = At(t, e.localeData()), Qe[t] = Qe[t] || Fs(t), Qe[t](e)) : e.localeData().invalidDate();
}
function At(e, t) {
  var s = 5;
  function a(r) {
    return t.longDateFormat(r) || r;
  }
  for (Oe.lastIndex = 0; s >= 0 && Oe.test(e); )
    e = e.replace(
      Oe,
      a
    ), Oe.lastIndex = 0, s -= 1;
  return e;
}
var Ls = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Cs(e) {
  var t = this._longDateFormat[e], s = this._longDateFormat[e.toUpperCase()];
  return t || !s ? t : (this._longDateFormat[e] = s.match(dt).map(function(a) {
    return a === "MMMM" || a === "MM" || a === "DD" || a === "dddd" ? a.slice(1) : a;
  }).join(""), this._longDateFormat[e]);
}
var Is = "Invalid date";
function As() {
  return this._invalidDate;
}
var Us = "%d", Hs = /\d{1,2}/;
function $s(e) {
  return this._ordinal.replace("%d", e);
}
var Vs = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function Gs(e, t, s, a) {
  var r = this._relativeTime[s];
  return j(r) ? r(e, t, s, a) : r.replace(/%d/i, e);
}
function js(e, t) {
  var s = this._relativeTime[e > 0 ? "future" : "past"];
  return j(s) ? s(t) : s.replace(/%s/i, t);
}
var pe = {};
function x(e, t) {
  var s = e.toLowerCase();
  pe[s] = pe[s + "s"] = pe[t] = e;
}
function L(e) {
  return typeof e == "string" ? pe[e] || pe[e.toLowerCase()] : void 0;
}
function ct(e) {
  var t = {}, s, a;
  for (a in e)
    w(e, a) && (s = L(a), s && (t[s] = e[a]));
  return t;
}
var Ut = {};
function T(e, t) {
  Ut[e] = t;
}
function qs(e) {
  var t = [], s;
  for (s in e)
    w(e, s) && t.push({ unit: s, priority: Ut[s] });
  return t.sort(function(a, r) {
    return a.priority - r.priority;
  }), t;
}
function Ie(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function N(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function m(e) {
  var t = +e, s = 0;
  return t !== 0 && isFinite(t) && (s = N(t)), s;
}
function fe(e, t) {
  return function(s) {
    return s != null ? (Ht(this, e, s), o.updateOffset(this, t), this) : Ee(this, e);
  };
}
function Ee(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function Ht(e, t, s) {
  e.isValid() && !isNaN(s) && (t === "FullYear" && Ie(e.year()) && e.month() === 1 && e.date() === 29 ? (s = m(s), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    s,
    e.month(),
    Ge(s, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](s));
}
function Bs(e) {
  return e = L(e), j(this[e]) ? this[e]() : this;
}
function zs(e, t) {
  if (typeof e == "object") {
    e = ct(e);
    var s = qs(e), a, r = s.length;
    for (a = 0; a < r; a++)
      this[s[a].unit](e[s[a].unit]);
  } else if (e = L(e), j(this[e]))
    return this[e](t);
  return this;
}
var $t = /\d/, P = /\d\d/, Vt = /\d{3}/, ft = /\d{4}/, Ae = /[+-]?\d{6}/, D = /\d\d?/, Gt = /\d\d\d\d?/, jt = /\d\d\d\d\d\d?/, Ue = /\d{1,3}/, _t = /\d{1,4}/, He = /[+-]?\d{1,6}/, _e = /\d+/, $e = /[+-]?\d+/, Zs = /Z|[+-]\d\d:?\d\d/gi, Ve = /Z|[+-]\d\d(?::?\d\d)?/gi, Js = /[+-]?\d+(\.\d{1,3})?/, ve = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Re;
Re = {};
function u(e, t, s) {
  Re[e] = j(t) ? t : function(a, r) {
    return a && s ? s : t;
  };
}
function Qs(e, t) {
  return w(Re, e) ? Re[e](t._strict, t._locale) : new RegExp(Xs(e));
}
function Xs(e) {
  return R(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, s, a, r, n) {
        return s || a || r || n;
      }
    )
  );
}
function R(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var at = {};
function k(e, t) {
  var s, a = t, r;
  for (typeof e == "string" && (e = [e]), Q(t) && (a = function(n, i) {
    i[t] = m(n);
  }), r = e.length, s = 0; s < r; s++)
    at[e[s]] = a;
}
function Ye(e, t) {
  k(e, function(s, a, r, n) {
    r._w = r._w || {}, t(s, r._w, r, n);
  });
}
function Ks(e, t, s) {
  t != null && w(at, e) && at[e](t, s._a, s, e);
}
var b = 0, z = 1, $ = 2, O = 3, I = 4, Z = 5, re = 6, ea = 7, ta = 8;
function sa(e, t) {
  return (e % t + t) % t;
}
var v;
Array.prototype.indexOf ? v = Array.prototype.indexOf : v = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Ge(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var s = sa(t, 12);
  return e += (t - s) / 12, s === 1 ? Ie(e) ? 29 : 28 : 31 - s % 7 % 2;
}
c("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
c("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
c("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
x("month", "M");
T("month", 8);
u("M", D);
u("MM", D, P);
u("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
u("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
k(["M", "MM"], function(e, t) {
  t[z] = m(e) - 1;
});
k(["MMM", "MMMM"], function(e, t, s, a) {
  var r = s._locale.monthsParse(e, a, s._strict);
  r != null ? t[z] = r : _(s).invalidMonth = e;
});
var aa = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), qt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Bt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, ra = ve, na = ve;
function ia(e, t) {
  return e ? A(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Bt).test(t) ? "format" : "standalone"][e.month()] : A(this._months) ? this._months : this._months.standalone;
}
function oa(e, t) {
  return e ? A(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Bt.test(t) ? "format" : "standalone"][e.month()] : A(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function la(e, t, s) {
  var a, r, n, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a)
      n = G([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(
        n,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[a] = this.months(n, "").toLocaleLowerCase();
  return s ? t === "MMM" ? (r = v.call(this._shortMonthsParse, i), r !== -1 ? r : null) : (r = v.call(this._longMonthsParse, i), r !== -1 ? r : null) : t === "MMM" ? (r = v.call(this._shortMonthsParse, i), r !== -1 ? r : (r = v.call(this._longMonthsParse, i), r !== -1 ? r : null)) : (r = v.call(this._longMonthsParse, i), r !== -1 ? r : (r = v.call(this._shortMonthsParse, i), r !== -1 ? r : null));
}
function ha(e, t, s) {
  var a, r, n;
  if (this._monthsParseExact)
    return la.call(this, e, t, s);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; a < 12; a++) {
    if (r = G([2e3, a]), s && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp(
      "^" + this.months(r, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[a] = new RegExp(
      "^" + this.monthsShort(r, "").replace(".", "") + "$",
      "i"
    )), !s && !this._monthsParse[a] && (n = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[a] = new RegExp(n.replace(".", ""), "i")), s && t === "MMMM" && this._longMonthsParse[a].test(e))
      return a;
    if (s && t === "MMM" && this._shortMonthsParse[a].test(e))
      return a;
    if (!s && this._monthsParse[a].test(e))
      return a;
  }
}
function zt(e, t) {
  var s;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = m(t);
    else if (t = e.localeData().monthsParse(t), !Q(t))
      return e;
  }
  return s = Math.min(e.date(), Ge(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, s), e;
}
function Zt(e) {
  return e != null ? (zt(this, e), o.updateOffset(this, !0), this) : Ee(this, "Month");
}
function ua() {
  return Ge(this.year(), this.month());
}
function da(e) {
  return this._monthsParseExact ? (w(this, "_monthsRegex") || Jt.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (w(this, "_monthsShortRegex") || (this._monthsShortRegex = ra), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function ca(e) {
  return this._monthsParseExact ? (w(this, "_monthsRegex") || Jt.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (w(this, "_monthsRegex") || (this._monthsRegex = na), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Jt() {
  function e(i, h) {
    return h.length - i.length;
  }
  var t = [], s = [], a = [], r, n;
  for (r = 0; r < 12; r++)
    n = G([2e3, r]), t.push(this.monthsShort(n, "")), s.push(this.months(n, "")), a.push(this.months(n, "")), a.push(this.monthsShort(n, ""));
  for (t.sort(e), s.sort(e), a.sort(e), r = 0; r < 12; r++)
    t[r] = R(t[r]), s[r] = R(s[r]);
  for (r = 0; r < 24; r++)
    a[r] = R(a[r]);
  this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
c("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? V(e, 4) : "+" + e;
});
c(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
c(0, ["YYYY", 4], 0, "year");
c(0, ["YYYYY", 5], 0, "year");
c(0, ["YYYYYY", 6, !0], 0, "year");
x("year", "y");
T("year", 1);
u("Y", $e);
u("YY", D, P);
u("YYYY", _t, ft);
u("YYYYY", He, Ae);
u("YYYYYY", He, Ae);
k(["YYYYY", "YYYYYY"], b);
k("YYYY", function(e, t) {
  t[b] = e.length === 2 ? o.parseTwoDigitYear(e) : m(e);
});
k("YY", function(e, t) {
  t[b] = o.parseTwoDigitYear(e);
});
k("Y", function(e, t) {
  t[b] = parseInt(e, 10);
});
function we(e) {
  return Ie(e) ? 366 : 365;
}
o.parseTwoDigitYear = function(e) {
  return m(e) + (m(e) > 68 ? 1900 : 2e3);
};
var Qt = fe("FullYear", !0);
function fa() {
  return Ie(this.year());
}
function _a(e, t, s, a, r, n, i) {
  var h;
  return e < 100 && e >= 0 ? (h = new Date(e + 400, t, s, a, r, n, i), isFinite(h.getFullYear()) && h.setFullYear(e)) : h = new Date(e, t, s, a, r, n, i), h;
}
function ge(e) {
  var t, s;
  return e < 100 && e >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = e + 400, t = new Date(Date.UTC.apply(null, s)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Pe(e, t, s) {
  var a = 7 + t - s, r = (7 + ge(e, 0, a).getUTCDay() - t) % 7;
  return -r + a - 1;
}
function Xt(e, t, s, a, r) {
  var n = (7 + s - a) % 7, i = Pe(e, a, r), h = 1 + 7 * (t - 1) + n + i, d, p;
  return h <= 0 ? (d = e - 1, p = we(d) + h) : h > we(e) ? (d = e + 1, p = h - we(e)) : (d = e, p = h), {
    year: d,
    dayOfYear: p
  };
}
function ke(e, t, s) {
  var a = Pe(e.year(), t, s), r = Math.floor((e.dayOfYear() - a - 1) / 7) + 1, n, i;
  return r < 1 ? (i = e.year() - 1, n = r + J(i, t, s)) : r > J(e.year(), t, s) ? (n = r - J(e.year(), t, s), i = e.year() + 1) : (i = e.year(), n = r), {
    week: n,
    year: i
  };
}
function J(e, t, s) {
  var a = Pe(e, t, s), r = Pe(e + 1, t, s);
  return (we(e) - a + r) / 7;
}
c("w", ["ww", 2], "wo", "week");
c("W", ["WW", 2], "Wo", "isoWeek");
x("week", "w");
x("isoWeek", "W");
T("week", 5);
T("isoWeek", 5);
u("w", D);
u("ww", D, P);
u("W", D);
u("WW", D, P);
Ye(
  ["w", "ww", "W", "WW"],
  function(e, t, s, a) {
    t[a.substr(0, 1)] = m(e);
  }
);
function ma(e) {
  return ke(e, this._week.dow, this._week.doy).week;
}
var ya = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function pa() {
  return this._week.dow;
}
function wa() {
  return this._week.doy;
}
function ga(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function ka(e) {
  var t = ke(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
c("d", 0, "do", "day");
c("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
c("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
c("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
c("e", 0, 0, "weekday");
c("E", 0, 0, "isoWeekday");
x("day", "d");
x("weekday", "e");
x("isoWeekday", "E");
T("day", 11);
T("weekday", 11);
T("isoWeekday", 11);
u("d", D);
u("e", D);
u("E", D);
u("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
u("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
u("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Ye(["dd", "ddd", "dddd"], function(e, t, s, a) {
  var r = s._locale.weekdaysParse(e, a, s._strict);
  r != null ? t.d = r : _(s).invalidWeekday = e;
});
Ye(["d", "e", "E"], function(e, t, s, a) {
  t[a] = m(e);
});
function Ma(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Da(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function mt(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Sa = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Kt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), va = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Ya = ve, Oa = ve, ba = ve;
function xa(e, t) {
  var s = A(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? mt(s, this._week.dow) : e ? s[e.day()] : s;
}
function Ta(e) {
  return e === !0 ? mt(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Wa(e) {
  return e === !0 ? mt(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Ea(e, t, s) {
  var a, r, n, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; a < 7; ++a)
      n = G([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(
        n,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[a] = this.weekdaysShort(
        n,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(n, "").toLocaleLowerCase();
  return s ? t === "dddd" ? (r = v.call(this._weekdaysParse, i), r !== -1 ? r : null) : t === "ddd" ? (r = v.call(this._shortWeekdaysParse, i), r !== -1 ? r : null) : (r = v.call(this._minWeekdaysParse, i), r !== -1 ? r : null) : t === "dddd" ? (r = v.call(this._weekdaysParse, i), r !== -1 || (r = v.call(this._shortWeekdaysParse, i), r !== -1) ? r : (r = v.call(this._minWeekdaysParse, i), r !== -1 ? r : null)) : t === "ddd" ? (r = v.call(this._shortWeekdaysParse, i), r !== -1 || (r = v.call(this._weekdaysParse, i), r !== -1) ? r : (r = v.call(this._minWeekdaysParse, i), r !== -1 ? r : null)) : (r = v.call(this._minWeekdaysParse, i), r !== -1 || (r = v.call(this._weekdaysParse, i), r !== -1) ? r : (r = v.call(this._shortWeekdaysParse, i), r !== -1 ? r : null));
}
function Ra(e, t, s) {
  var a, r, n;
  if (this._weekdaysParseExact)
    return Ea.call(this, e, t, s);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; a < 7; a++) {
    if (r = G([2e3, 1]).day(a), s && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp(
      "^" + this.weekdays(r, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[a] = new RegExp(
      "^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[a] = new RegExp(
      "^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[a] || (n = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[a] = new RegExp(n.replace(".", ""), "i")), s && t === "dddd" && this._fullWeekdaysParse[a].test(e))
      return a;
    if (s && t === "ddd" && this._shortWeekdaysParse[a].test(e))
      return a;
    if (s && t === "dd" && this._minWeekdaysParse[a].test(e))
      return a;
    if (!s && this._weekdaysParse[a].test(e))
      return a;
  }
}
function Pa(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = Ma(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Na(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Fa(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Da(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function La(e) {
  return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || yt.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (w(this, "_weekdaysRegex") || (this._weekdaysRegex = Ya), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Ca(e) {
  return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || yt.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (w(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Oa), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Ia(e) {
  return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || yt.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (w(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = ba), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function yt() {
  function e(Y, W) {
    return W.length - Y.length;
  }
  var t = [], s = [], a = [], r = [], n, i, h, d, p;
  for (n = 0; n < 7; n++)
    i = G([2e3, 1]).day(n), h = R(this.weekdaysMin(i, "")), d = R(this.weekdaysShort(i, "")), p = R(this.weekdays(i, "")), t.push(h), s.push(d), a.push(p), r.push(h), r.push(d), r.push(p);
  t.sort(e), s.sort(e), a.sort(e), r.sort(e), this._weekdaysRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + a.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function pt() {
  return this.hours() % 12 || 12;
}
function Aa() {
  return this.hours() || 24;
}
c("H", ["HH", 2], 0, "hour");
c("h", ["hh", 2], 0, pt);
c("k", ["kk", 2], 0, Aa);
c("hmm", 0, 0, function() {
  return "" + pt.apply(this) + V(this.minutes(), 2);
});
c("hmmss", 0, 0, function() {
  return "" + pt.apply(this) + V(this.minutes(), 2) + V(this.seconds(), 2);
});
c("Hmm", 0, 0, function() {
  return "" + this.hours() + V(this.minutes(), 2);
});
c("Hmmss", 0, 0, function() {
  return "" + this.hours() + V(this.minutes(), 2) + V(this.seconds(), 2);
});
function es(e, t) {
  c(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
es("a", !0);
es("A", !1);
x("hour", "h");
T("hour", 13);
function ts(e, t) {
  return t._meridiemParse;
}
u("a", ts);
u("A", ts);
u("H", D);
u("h", D);
u("k", D);
u("HH", D, P);
u("hh", D, P);
u("kk", D, P);
u("hmm", Gt);
u("hmmss", jt);
u("Hmm", Gt);
u("Hmmss", jt);
k(["H", "HH"], O);
k(["k", "kk"], function(e, t, s) {
  var a = m(e);
  t[O] = a === 24 ? 0 : a;
});
k(["a", "A"], function(e, t, s) {
  s._isPm = s._locale.isPM(e), s._meridiem = e;
});
k(["h", "hh"], function(e, t, s) {
  t[O] = m(e), _(s).bigHour = !0;
});
k("hmm", function(e, t, s) {
  var a = e.length - 2;
  t[O] = m(e.substr(0, a)), t[I] = m(e.substr(a)), _(s).bigHour = !0;
});
k("hmmss", function(e, t, s) {
  var a = e.length - 4, r = e.length - 2;
  t[O] = m(e.substr(0, a)), t[I] = m(e.substr(a, 2)), t[Z] = m(e.substr(r)), _(s).bigHour = !0;
});
k("Hmm", function(e, t, s) {
  var a = e.length - 2;
  t[O] = m(e.substr(0, a)), t[I] = m(e.substr(a));
});
k("Hmmss", function(e, t, s) {
  var a = e.length - 4, r = e.length - 2;
  t[O] = m(e.substr(0, a)), t[I] = m(e.substr(a, 2)), t[Z] = m(e.substr(r));
});
function Ua(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Ha = /[ap]\.?m?\.?/i, $a = fe("Hours", !0);
function Va(e, t, s) {
  return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM";
}
var ss = {
  calendar: Rs,
  longDateFormat: Ls,
  invalidDate: Is,
  ordinal: Us,
  dayOfMonthOrdinalParse: Hs,
  relativeTime: Vs,
  months: aa,
  monthsShort: qt,
  week: ya,
  weekdays: Sa,
  weekdaysMin: va,
  weekdaysShort: Kt,
  meridiemParse: Ha
}, S = {}, me = {}, Me;
function Ga(e, t) {
  var s, a = Math.min(e.length, t.length);
  for (s = 0; s < a; s += 1)
    if (e[s] !== t[s])
      return s;
  return a;
}
function Rt(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function ja(e) {
  for (var t = 0, s, a, r, n; t < e.length; ) {
    for (n = Rt(e[t]).split("-"), s = n.length, a = Rt(e[t + 1]), a = a ? a.split("-") : null; s > 0; ) {
      if (r = je(n.slice(0, s).join("-")), r)
        return r;
      if (a && a.length >= s && Ga(n, a) >= s - 1)
        break;
      s--;
    }
    t++;
  }
  return Me;
}
function qa(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function je(e) {
  var t = null, s;
  if (S[e] === void 0 && typeof module < "u" && module && module.exports && qa(e))
    try {
      t = Me._abbr, s = require, s("./locale/" + e), se(t);
    } catch {
      S[e] = null;
    }
  return S[e];
}
function se(e, t) {
  var s;
  return e && (E(t) ? s = X(e) : s = wt(e, t), s ? Me = s : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Me._abbr;
}
function wt(e, t) {
  if (t !== null) {
    var s, a = ss;
    if (t.abbr = e, S[e] != null)
      It(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), a = S[e]._config;
    else if (t.parentLocale != null)
      if (S[t.parentLocale] != null)
        a = S[t.parentLocale]._config;
      else if (s = je(t.parentLocale), s != null)
        a = s._config;
      else
        return me[t.parentLocale] || (me[t.parentLocale] = []), me[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return S[e] = new ut(tt(a, t)), me[e] && me[e].forEach(function(r) {
      wt(r.name, r.config);
    }), se(e), S[e];
  } else
    return delete S[e], null;
}
function Ba(e, t) {
  if (t != null) {
    var s, a, r = ss;
    S[e] != null && S[e].parentLocale != null ? S[e].set(tt(S[e]._config, t)) : (a = je(e), a != null && (r = a._config), t = tt(r, t), a == null && (t.abbr = e), s = new ut(t), s.parentLocale = S[e], S[e] = s), se(e);
  } else
    S[e] != null && (S[e].parentLocale != null ? (S[e] = S[e].parentLocale, e === se() && se(e)) : S[e] != null && delete S[e]);
  return S[e];
}
function X(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Me;
  if (!A(e)) {
    if (t = je(e), t)
      return t;
    e = [e];
  }
  return ja(e);
}
function za() {
  return st(S);
}
function gt(e) {
  var t, s = e._a;
  return s && _(e).overflow === -2 && (t = s[z] < 0 || s[z] > 11 ? z : s[$] < 1 || s[$] > Ge(s[b], s[z]) ? $ : s[O] < 0 || s[O] > 24 || s[O] === 24 && (s[I] !== 0 || s[Z] !== 0 || s[re] !== 0) ? O : s[I] < 0 || s[I] > 59 ? I : s[Z] < 0 || s[Z] > 59 ? Z : s[re] < 0 || s[re] > 999 ? re : -1, _(e)._overflowDayOfYear && (t < b || t > $) && (t = $), _(e)._overflowWeeks && t === -1 && (t = ea), _(e)._overflowWeekday && t === -1 && (t = ta), _(e).overflow = t), e;
}
var Za = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ja = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Qa = /Z|[+-]\d\d(?::?\d\d)?/, be = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], Xe = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], Xa = /^\/?Date\((-?\d+)/i, Ka = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, er = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function as(e) {
  var t, s, a = e._i, r = Za.exec(a) || Ja.exec(a), n, i, h, d, p = be.length, Y = Xe.length;
  if (r) {
    for (_(e).iso = !0, t = 0, s = p; t < s; t++)
      if (be[t][1].exec(r[1])) {
        i = be[t][0], n = be[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (r[3]) {
      for (t = 0, s = Y; t < s; t++)
        if (Xe[t][1].exec(r[3])) {
          h = (r[2] || " ") + Xe[t][0];
          break;
        }
      if (h == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!n && h != null) {
      e._isValid = !1;
      return;
    }
    if (r[4])
      if (Qa.exec(r[4]))
        d = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (h || "") + (d || ""), Mt(e);
  } else
    e._isValid = !1;
}
function tr(e, t, s, a, r, n) {
  var i = [
    sr(e),
    qt.indexOf(t),
    parseInt(s, 10),
    parseInt(a, 10),
    parseInt(r, 10)
  ];
  return n && i.push(parseInt(n, 10)), i;
}
function sr(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function ar(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function rr(e, t, s) {
  if (e) {
    var a = Kt.indexOf(e), r = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (a !== r)
      return _(s).weekdayMismatch = !0, s._isValid = !1, !1;
  }
  return !0;
}
function nr(e, t, s) {
  if (e)
    return er[e];
  if (t)
    return 0;
  var a = parseInt(s, 10), r = a % 100, n = (a - r) / 100;
  return n * 60 + r;
}
function rs(e) {
  var t = Ka.exec(ar(e._i)), s;
  if (t) {
    if (s = tr(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !rr(t[1], s, e))
      return;
    e._a = s, e._tzm = nr(t[8], t[9], t[10]), e._d = ge.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), _(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function ir(e) {
  var t = Xa.exec(e._i);
  if (t !== null) {
    e._d = new Date(+t[1]);
    return;
  }
  if (as(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (rs(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : o.createFromInputFallback(e);
}
o.createFromInputFallback = F(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function le(e, t, s) {
  return e ?? t ?? s;
}
function or(e) {
  var t = new Date(o.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function kt(e) {
  var t, s, a = [], r, n, i;
  if (!e._d) {
    for (r = or(e), e._w && e._a[$] == null && e._a[z] == null && lr(e), e._dayOfYear != null && (i = le(e._a[b], r[b]), (e._dayOfYear > we(i) || e._dayOfYear === 0) && (_(e)._overflowDayOfYear = !0), s = ge(i, 0, e._dayOfYear), e._a[z] = s.getUTCMonth(), e._a[$] = s.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = a[t] = r[t];
    for (; t < 7; t++)
      e._a[t] = a[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[O] === 24 && e._a[I] === 0 && e._a[Z] === 0 && e._a[re] === 0 && (e._nextDay = !0, e._a[O] = 0), e._d = (e._useUTC ? ge : _a).apply(
      null,
      a
    ), n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[O] = 24), e._w && typeof e._w.d < "u" && e._w.d !== n && (_(e).weekdayMismatch = !0);
  }
}
function lr(e) {
  var t, s, a, r, n, i, h, d, p;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (n = 1, i = 4, s = le(
    t.GG,
    e._a[b],
    ke(M(), 1, 4).year
  ), a = le(t.W, 1), r = le(t.E, 1), (r < 1 || r > 7) && (d = !0)) : (n = e._locale._week.dow, i = e._locale._week.doy, p = ke(M(), n, i), s = le(t.gg, e._a[b], p.year), a = le(t.w, p.week), t.d != null ? (r = t.d, (r < 0 || r > 6) && (d = !0)) : t.e != null ? (r = t.e + n, (t.e < 0 || t.e > 6) && (d = !0)) : r = n), a < 1 || a > J(s, n, i) ? _(e)._overflowWeeks = !0 : d != null ? _(e)._overflowWeekday = !0 : (h = Xt(s, a, r, n, i), e._a[b] = h.year, e._dayOfYear = h.dayOfYear);
}
o.ISO_8601 = function() {
};
o.RFC_2822 = function() {
};
function Mt(e) {
  if (e._f === o.ISO_8601) {
    as(e);
    return;
  }
  if (e._f === o.RFC_2822) {
    rs(e);
    return;
  }
  e._a = [], _(e).empty = !0;
  var t = "" + e._i, s, a, r, n, i, h = t.length, d = 0, p, Y;
  for (r = At(e._f, e._locale).match(dt) || [], Y = r.length, s = 0; s < Y; s++)
    n = r[s], a = (t.match(Qs(n, e)) || [])[0], a && (i = t.substr(0, t.indexOf(a)), i.length > 0 && _(e).unusedInput.push(i), t = t.slice(
      t.indexOf(a) + a.length
    ), d += a.length), ue[n] ? (a ? _(e).empty = !1 : _(e).unusedTokens.push(n), Ks(n, a, e)) : e._strict && !a && _(e).unusedTokens.push(n);
  _(e).charsLeftOver = h - d, t.length > 0 && _(e).unusedInput.push(t), e._a[O] <= 12 && _(e).bigHour === !0 && e._a[O] > 0 && (_(e).bigHour = void 0), _(e).parsedDateParts = e._a.slice(0), _(e).meridiem = e._meridiem, e._a[O] = hr(
    e._locale,
    e._a[O],
    e._meridiem
  ), p = _(e).era, p !== null && (e._a[b] = e._locale.erasConvertYear(p, e._a[b])), kt(e), gt(e);
}
function hr(e, t, s) {
  var a;
  return s == null ? t : e.meridiemHour != null ? e.meridiemHour(t, s) : (e.isPM != null && (a = e.isPM(s), a && t < 12 && (t += 12), !a && t === 12 && (t = 0)), t);
}
function ur(e) {
  var t, s, a, r, n, i, h = !1, d = e._f.length;
  if (d === 0) {
    _(e).invalidFormat = !0, e._d = new Date(NaN);
    return;
  }
  for (r = 0; r < d; r++)
    n = 0, i = !1, t = ht({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[r], Mt(t), lt(t) && (i = !0), n += _(t).charsLeftOver, n += _(t).unusedTokens.length * 10, _(t).score = n, h ? n < a && (a = n, s = t) : (a == null || n < a || i) && (a = n, s = t, i && (h = !0));
  ee(e, s || t);
}
function dr(e) {
  if (!e._d) {
    var t = ct(e._i), s = t.day === void 0 ? t.date : t.day;
    e._a = Lt(
      [t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond],
      function(a) {
        return a && parseInt(a, 10);
      }
    ), kt(e);
  }
}
function cr(e) {
  var t = new Se(gt(ns(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function ns(e) {
  var t = e._i, s = e._f;
  return e._locale = e._locale || X(e._l), t === null || s === void 0 && t === "" ? Ce({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), U(t) ? new Se(gt(t)) : (De(t) ? e._d = t : A(s) ? ur(e) : s ? Mt(e) : fr(e), lt(e) || (e._d = null), e));
}
function fr(e) {
  var t = e._i;
  E(t) ? e._d = new Date(o.now()) : De(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? ir(e) : A(t) ? (e._a = Lt(t.slice(0), function(s) {
    return parseInt(s, 10);
  }), kt(e)) : ne(t) ? dr(e) : Q(t) ? e._d = new Date(t) : o.createFromInputFallback(e);
}
function is(e, t, s, a, r) {
  var n = {};
  return (t === !0 || t === !1) && (a = t, t = void 0), (s === !0 || s === !1) && (a = s, s = void 0), (ne(e) && ot(e) || A(e) && e.length === 0) && (e = void 0), n._isAMomentObject = !0, n._useUTC = n._isUTC = r, n._l = s, n._i = e, n._f = t, n._strict = a, cr(n);
}
function M(e, t, s, a) {
  return is(e, t, s, a, !1);
}
var _r = F(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = M.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Ce();
  }
), mr = F(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = M.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Ce();
  }
);
function os(e, t) {
  var s, a;
  if (t.length === 1 && A(t[0]) && (t = t[0]), !t.length)
    return M();
  for (s = t[0], a = 1; a < t.length; ++a)
    (!t[a].isValid() || t[a][e](s)) && (s = t[a]);
  return s;
}
function yr() {
  var e = [].slice.call(arguments, 0);
  return os("isBefore", e);
}
function pr() {
  var e = [].slice.call(arguments, 0);
  return os("isAfter", e);
}
var wr = function() {
  return Date.now ? Date.now() : +new Date();
}, ye = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function gr(e) {
  var t, s = !1, a, r = ye.length;
  for (t in e)
    if (w(e, t) && !(v.call(ye, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (a = 0; a < r; ++a)
    if (e[ye[a]]) {
      if (s)
        return !1;
      parseFloat(e[ye[a]]) !== m(e[ye[a]]) && (s = !0);
    }
  return !0;
}
function kr() {
  return this._isValid;
}
function Mr() {
  return H(NaN);
}
function qe(e) {
  var t = ct(e), s = t.year || 0, a = t.quarter || 0, r = t.month || 0, n = t.week || t.isoWeek || 0, i = t.day || 0, h = t.hour || 0, d = t.minute || 0, p = t.second || 0, Y = t.millisecond || 0;
  this._isValid = gr(t), this._milliseconds = +Y + p * 1e3 + // 1000
  d * 6e4 + // 1000 * 60
  h * 1e3 * 60 * 60, this._days = +i + n * 7, this._months = +r + a * 3 + s * 12, this._data = {}, this._locale = X(), this._bubble();
}
function Te(e) {
  return e instanceof qe;
}
function rt(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Dr(e, t, s) {
  var a = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), n = 0, i;
  for (i = 0; i < a; i++)
    (s && e[i] !== t[i] || !s && m(e[i]) !== m(t[i])) && n++;
  return n + r;
}
function ls(e, t) {
  c(e, 0, 0, function() {
    var s = this.utcOffset(), a = "+";
    return s < 0 && (s = -s, a = "-"), a + V(~~(s / 60), 2) + t + V(~~s % 60, 2);
  });
}
ls("Z", ":");
ls("ZZ", "");
u("Z", Ve);
u("ZZ", Ve);
k(["Z", "ZZ"], function(e, t, s) {
  s._useUTC = !0, s._tzm = Dt(Ve, e);
});
var Sr = /([\+\-]|\d\d)/gi;
function Dt(e, t) {
  var s = (t || "").match(e), a, r, n;
  return s === null ? null : (a = s[s.length - 1] || [], r = (a + "").match(Sr) || ["-", 0, 0], n = +(r[1] * 60) + m(r[2]), n === 0 ? 0 : r[0] === "+" ? n : -n);
}
function St(e, t) {
  var s, a;
  return t._isUTC ? (s = t.clone(), a = (U(e) || De(e) ? e.valueOf() : M(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + a), o.updateOffset(s, !1), s) : M(e).local();
}
function nt(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
o.updateOffset = function() {
};
function vr(e, t, s) {
  var a = this._offset || 0, r;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Dt(Ve, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !s && (e = e * 60);
    return !this._isUTC && t && (r = nt(this)), this._offset = e, this._isUTC = !0, r != null && this.add(r, "m"), a !== e && (!t || this._changeInProgress ? ds(
      this,
      H(e - a, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, o.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? a : nt(this);
}
function Yr(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Or(e) {
  return this.utcOffset(0, e);
}
function br(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(nt(this), "m")), this;
}
function xr() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Dt(Zs, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Tr(e) {
  return this.isValid() ? (e = e ? M(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Wr() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Er() {
  if (!E(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return ht(e, this), e = ns(e), e._a ? (t = e._isUTC ? G(e._a) : M(e._a), this._isDSTShifted = this.isValid() && Dr(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Rr() {
  return this.isValid() ? !this._isUTC : !1;
}
function Pr() {
  return this.isValid() ? this._isUTC : !1;
}
function hs() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Nr = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Fr = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function H(e, t) {
  var s = e, a = null, r, n, i;
  return Te(e) ? s = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : Q(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (a = Nr.exec(e)) ? (r = a[1] === "-" ? -1 : 1, s = {
    y: 0,
    d: m(a[$]) * r,
    h: m(a[O]) * r,
    m: m(a[I]) * r,
    s: m(a[Z]) * r,
    ms: m(rt(a[re] * 1e3)) * r
    // the millisecond decimal point is included in the match
  }) : (a = Fr.exec(e)) ? (r = a[1] === "-" ? -1 : 1, s = {
    y: ae(a[2], r),
    M: ae(a[3], r),
    w: ae(a[4], r),
    d: ae(a[5], r),
    h: ae(a[6], r),
    m: ae(a[7], r),
    s: ae(a[8], r)
  }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (i = Lr(
    M(s.from),
    M(s.to)
  ), s = {}, s.ms = i.milliseconds, s.M = i.months), n = new qe(s), Te(e) && w(e, "_locale") && (n._locale = e._locale), Te(e) && w(e, "_isValid") && (n._isValid = e._isValid), n;
}
H.fn = qe.prototype;
H.invalid = Mr;
function ae(e, t) {
  var s = e && parseFloat(e.replace(",", "."));
  return (isNaN(s) ? 0 : s) * t;
}
function Pt(e, t) {
  var s = {};
  return s.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(s.months, "M").isAfter(t) && --s.months, s.milliseconds = +t - +e.clone().add(s.months, "M"), s;
}
function Lr(e, t) {
  var s;
  return e.isValid() && t.isValid() ? (t = St(t, e), e.isBefore(t) ? s = Pt(e, t) : (s = Pt(t, e), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 };
}
function us(e, t) {
  return function(s, a) {
    var r, n;
    return a !== null && !isNaN(+a) && (It(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), n = s, s = a, a = n), r = H(s, a), ds(this, r, e), this;
  };
}
function ds(e, t, s, a) {
  var r = t._milliseconds, n = rt(t._days), i = rt(t._months);
  e.isValid() && (a = a ?? !0, i && zt(e, Ee(e, "Month") + i * s), n && Ht(e, "Date", Ee(e, "Date") + n * s), r && e._d.setTime(e._d.valueOf() + r * s), a && o.updateOffset(e, n || i));
}
var Cr = us(1, "add"), Ir = us(-1, "subtract");
function cs(e) {
  return typeof e == "string" || e instanceof String;
}
function Ar(e) {
  return U(e) || De(e) || cs(e) || Q(e) || Hr(e) || Ur(e) || e === null || e === void 0;
}
function Ur(e) {
  var t = ne(e) && !ot(e), s = !1, a = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], r, n, i = a.length;
  for (r = 0; r < i; r += 1)
    n = a[r], s = s || w(e, n);
  return t && s;
}
function Hr(e) {
  var t = A(e), s = !1;
  return t && (s = e.filter(function(a) {
    return !Q(a) && cs(e);
  }).length === 0), t && s;
}
function $r(e) {
  var t = ne(e) && !ot(e), s = !1, a = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], r, n;
  for (r = 0; r < a.length; r += 1)
    n = a[r], s = s || w(e, n);
  return t && s;
}
function Vr(e, t) {
  var s = e.diff(t, "days", !0);
  return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse";
}
function Gr(e, t) {
  arguments.length === 1 && (arguments[0] ? Ar(arguments[0]) ? (e = arguments[0], t = void 0) : $r(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var s = e || M(), a = St(s, this).startOf("day"), r = o.calendarFormat(this, a) || "sameElse", n = t && (j(t[r]) ? t[r].call(this, s) : t[r]);
  return this.format(
    n || this.localeData().calendar(r, this, M(s))
  );
}
function jr() {
  return new Se(this);
}
function qr(e, t) {
  var s = U(e) ? e : M(e);
  return this.isValid() && s.isValid() ? (t = L(t) || "millisecond", t === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Br(e, t) {
  var s = U(e) ? e : M(e);
  return this.isValid() && s.isValid() ? (t = L(t) || "millisecond", t === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(t).valueOf() < s.valueOf()) : !1;
}
function zr(e, t, s, a) {
  var r = U(e) ? e : M(e), n = U(t) ? t : M(t);
  return this.isValid() && r.isValid() && n.isValid() ? (a = a || "()", (a[0] === "(" ? this.isAfter(r, s) : !this.isBefore(r, s)) && (a[1] === ")" ? this.isBefore(n, s) : !this.isAfter(n, s))) : !1;
}
function Zr(e, t) {
  var s = U(e) ? e : M(e), a;
  return this.isValid() && s.isValid() ? (t = L(t) || "millisecond", t === "millisecond" ? this.valueOf() === s.valueOf() : (a = s.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf())) : !1;
}
function Jr(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Qr(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Xr(e, t, s) {
  var a, r, n;
  if (!this.isValid())
    return NaN;
  if (a = St(e, this), !a.isValid())
    return NaN;
  switch (r = (a.utcOffset() - this.utcOffset()) * 6e4, t = L(t), t) {
    case "year":
      n = We(this, a) / 12;
      break;
    case "month":
      n = We(this, a);
      break;
    case "quarter":
      n = We(this, a) / 3;
      break;
    case "second":
      n = (this - a) / 1e3;
      break;
    case "minute":
      n = (this - a) / 6e4;
      break;
    case "hour":
      n = (this - a) / 36e5;
      break;
    case "day":
      n = (this - a - r) / 864e5;
      break;
    case "week":
      n = (this - a - r) / 6048e5;
      break;
    default:
      n = this - a;
  }
  return s ? n : N(n);
}
function We(e, t) {
  if (e.date() < t.date())
    return -We(t, e);
  var s = (t.year() - e.year()) * 12 + (t.month() - e.month()), a = e.clone().add(s, "months"), r, n;
  return t - a < 0 ? (r = e.clone().add(s - 1, "months"), n = (t - a) / (a - r)) : (r = e.clone().add(s + 1, "months"), n = (t - a) / (r - a)), -(s + n) || 0;
}
o.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
o.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Kr() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function en(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, s = t ? this.clone().utc() : this;
  return s.year() < 0 || s.year() > 9999 ? xe(
    s,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : j(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", xe(s, "Z")) : xe(
    s,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function tn() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", s, a, r, n;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), s = "[" + e + '("]', a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", r = "-MM-DD[T]HH:mm:ss.SSS", n = t + '[")]', this.format(s + a + r + n);
}
function sn(e) {
  e || (e = this.isUtc() ? o.defaultFormatUtc : o.defaultFormat);
  var t = xe(this, e);
  return this.localeData().postformat(t);
}
function an(e, t) {
  return this.isValid() && (U(e) && e.isValid() || M(e).isValid()) ? H({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function rn(e) {
  return this.from(M(), e);
}
function nn(e, t) {
  return this.isValid() && (U(e) && e.isValid() || M(e).isValid()) ? H({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function on(e) {
  return this.to(M(), e);
}
function fs(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = X(e), t != null && (this._locale = t), this);
}
var _s = F(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function ms() {
  return this._locale;
}
var Ne = 1e3, de = 60 * Ne, Fe = 60 * de, ys = (365 * 400 + 97) * 24 * Fe;
function ce(e, t) {
  return (e % t + t) % t;
}
function ps(e, t, s) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, s) - ys : new Date(e, t, s).valueOf();
}
function ws(e, t, s) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - ys : Date.UTC(e, t, s);
}
function ln(e) {
  var t, s;
  if (e = L(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? ws : ps, e) {
    case "year":
      t = s(this.year(), 0, 1);
      break;
    case "quarter":
      t = s(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = s(this.year(), this.month(), 1);
      break;
    case "week":
      t = s(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= ce(
        t + (this._isUTC ? 0 : this.utcOffset() * de),
        Fe
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= ce(t, de);
      break;
    case "second":
      t = this._d.valueOf(), t -= ce(t, Ne);
      break;
  }
  return this._d.setTime(t), o.updateOffset(this, !0), this;
}
function hn(e) {
  var t, s;
  if (e = L(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? ws : ps, e) {
    case "year":
      t = s(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = s(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = s(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = s(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += Fe - ce(
        t + (this._isUTC ? 0 : this.utcOffset() * de),
        Fe
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += de - ce(t, de) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Ne - ce(t, Ne) - 1;
      break;
  }
  return this._d.setTime(t), o.updateOffset(this, !0), this;
}
function un() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function dn() {
  return Math.floor(this.valueOf() / 1e3);
}
function cn() {
  return new Date(this.valueOf());
}
function fn() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function _n() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function mn() {
  return this.isValid() ? this.toISOString() : null;
}
function yn() {
  return lt(this);
}
function pn() {
  return ee({}, _(this));
}
function wn() {
  return _(this).overflow;
}
function gn() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
c("N", 0, 0, "eraAbbr");
c("NN", 0, 0, "eraAbbr");
c("NNN", 0, 0, "eraAbbr");
c("NNNN", 0, 0, "eraName");
c("NNNNN", 0, 0, "eraNarrow");
c("y", ["y", 1], "yo", "eraYear");
c("y", ["yy", 2], 0, "eraYear");
c("y", ["yyy", 3], 0, "eraYear");
c("y", ["yyyy", 4], 0, "eraYear");
u("N", vt);
u("NN", vt);
u("NNN", vt);
u("NNNN", Wn);
u("NNNNN", En);
k(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, s, a) {
    var r = s._locale.erasParse(e, a, s._strict);
    r ? _(s).era = r : _(s).invalidEra = e;
  }
);
u("y", _e);
u("yy", _e);
u("yyy", _e);
u("yyyy", _e);
u("yo", Rn);
k(["y", "yy", "yyy", "yyyy"], b);
k(["yo"], function(e, t, s, a) {
  var r;
  s._locale._eraYearOrdinalRegex && (r = e.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? t[b] = s._locale.eraYearOrdinalParse(e, r) : t[b] = parseInt(e, 10);
});
function kn(e, t) {
  var s, a, r, n = this._eras || X("en")._eras;
  for (s = 0, a = n.length; s < a; ++s) {
    switch (typeof n[s].since) {
      case "string":
        r = o(n[s].since).startOf("day"), n[s].since = r.valueOf();
        break;
    }
    switch (typeof n[s].until) {
      case "undefined":
        n[s].until = 1 / 0;
        break;
      case "string":
        r = o(n[s].until).startOf("day").valueOf(), n[s].until = r.valueOf();
        break;
    }
  }
  return n;
}
function Mn(e, t, s) {
  var a, r, n = this.eras(), i, h, d;
  for (e = e.toUpperCase(), a = 0, r = n.length; a < r; ++a)
    if (i = n[a].name.toUpperCase(), h = n[a].abbr.toUpperCase(), d = n[a].narrow.toUpperCase(), s)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (h === e)
            return n[a];
          break;
        case "NNNN":
          if (i === e)
            return n[a];
          break;
        case "NNNNN":
          if (d === e)
            return n[a];
          break;
      }
    else if ([i, h, d].indexOf(e) >= 0)
      return n[a];
}
function Dn(e, t) {
  var s = e.since <= e.until ? 1 : -1;
  return t === void 0 ? o(e.since).year() : o(e.since).year() + (t - e.offset) * s;
}
function Sn() {
  var e, t, s, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), a[e].since <= s && s <= a[e].until || a[e].until <= s && s <= a[e].since)
      return a[e].name;
  return "";
}
function vn() {
  var e, t, s, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), a[e].since <= s && s <= a[e].until || a[e].until <= s && s <= a[e].since)
      return a[e].narrow;
  return "";
}
function Yn() {
  var e, t, s, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), a[e].since <= s && s <= a[e].until || a[e].until <= s && s <= a[e].since)
      return a[e].abbr;
  return "";
}
function On() {
  var e, t, s, a, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = r[e].since <= r[e].until ? 1 : -1, a = this.clone().startOf("day").valueOf(), r[e].since <= a && a <= r[e].until || r[e].until <= a && a <= r[e].since)
      return (this.year() - o(r[e].since).year()) * s + r[e].offset;
  return this.year();
}
function bn(e) {
  return w(this, "_erasNameRegex") || Yt.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function xn(e) {
  return w(this, "_erasAbbrRegex") || Yt.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Tn(e) {
  return w(this, "_erasNarrowRegex") || Yt.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function vt(e, t) {
  return t.erasAbbrRegex(e);
}
function Wn(e, t) {
  return t.erasNameRegex(e);
}
function En(e, t) {
  return t.erasNarrowRegex(e);
}
function Rn(e, t) {
  return t._eraYearOrdinalRegex || _e;
}
function Yt() {
  var e = [], t = [], s = [], a = [], r, n, i = this.eras();
  for (r = 0, n = i.length; r < n; ++r)
    t.push(R(i[r].name)), e.push(R(i[r].abbr)), s.push(R(i[r].narrow)), a.push(R(i[r].name)), a.push(R(i[r].abbr)), a.push(R(i[r].narrow));
  this._erasRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  );
}
c(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
c(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Be(e, t) {
  c(0, [e, e.length], 0, t);
}
Be("gggg", "weekYear");
Be("ggggg", "weekYear");
Be("GGGG", "isoWeekYear");
Be("GGGGG", "isoWeekYear");
x("weekYear", "gg");
x("isoWeekYear", "GG");
T("weekYear", 1);
T("isoWeekYear", 1);
u("G", $e);
u("g", $e);
u("GG", D, P);
u("gg", D, P);
u("GGGG", _t, ft);
u("gggg", _t, ft);
u("GGGGG", He, Ae);
u("ggggg", He, Ae);
Ye(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, s, a) {
    t[a.substr(0, 2)] = m(e);
  }
);
Ye(["gg", "GG"], function(e, t, s, a) {
  t[a] = o.parseTwoDigitYear(e);
});
function Pn(e) {
  return gs.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Nn(e) {
  return gs.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Fn() {
  return J(this.year(), 1, 4);
}
function Ln() {
  return J(this.isoWeekYear(), 1, 4);
}
function Cn() {
  var e = this.localeData()._week;
  return J(this.year(), e.dow, e.doy);
}
function In() {
  var e = this.localeData()._week;
  return J(this.weekYear(), e.dow, e.doy);
}
function gs(e, t, s, a, r) {
  var n;
  return e == null ? ke(this, a, r).year : (n = J(e, a, r), t > n && (t = n), An.call(this, e, t, s, a, r));
}
function An(e, t, s, a, r) {
  var n = Xt(e, t, s, a, r), i = ge(n.year, 0, n.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
c("Q", 0, "Qo", "quarter");
x("quarter", "Q");
T("quarter", 7);
u("Q", $t);
k("Q", function(e, t) {
  t[z] = (m(e) - 1) * 3;
});
function Un(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
c("D", ["DD", 2], "Do", "date");
x("date", "D");
T("date", 9);
u("D", D);
u("DD", D, P);
u("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
k(["D", "DD"], $);
k("Do", function(e, t) {
  t[$] = m(e.match(D)[0]);
});
var ks = fe("Date", !0);
c("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
x("dayOfYear", "DDD");
T("dayOfYear", 4);
u("DDD", Ue);
u("DDDD", Vt);
k(["DDD", "DDDD"], function(e, t, s) {
  s._dayOfYear = m(e);
});
function Hn(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
c("m", ["mm", 2], 0, "minute");
x("minute", "m");
T("minute", 14);
u("m", D);
u("mm", D, P);
k(["m", "mm"], I);
var $n = fe("Minutes", !1);
c("s", ["ss", 2], 0, "second");
x("second", "s");
T("second", 15);
u("s", D);
u("ss", D, P);
k(["s", "ss"], Z);
var Vn = fe("Seconds", !1);
c("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
c(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
c(0, ["SSS", 3], 0, "millisecond");
c(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
c(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
c(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
c(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
c(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
c(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
x("millisecond", "ms");
T("millisecond", 16);
u("S", Ue, $t);
u("SS", Ue, P);
u("SSS", Ue, Vt);
var te, Ms;
for (te = "SSSS"; te.length <= 9; te += "S")
  u(te, _e);
function Gn(e, t) {
  t[re] = m(("0." + e) * 1e3);
}
for (te = "S"; te.length <= 9; te += "S")
  k(te, Gn);
Ms = fe("Milliseconds", !1);
c("z", 0, 0, "zoneAbbr");
c("zz", 0, 0, "zoneName");
function jn() {
  return this._isUTC ? "UTC" : "";
}
function qn() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var l = Se.prototype;
l.add = Cr;
l.calendar = Gr;
l.clone = jr;
l.diff = Xr;
l.endOf = hn;
l.format = sn;
l.from = an;
l.fromNow = rn;
l.to = nn;
l.toNow = on;
l.get = Bs;
l.invalidAt = wn;
l.isAfter = qr;
l.isBefore = Br;
l.isBetween = zr;
l.isSame = Zr;
l.isSameOrAfter = Jr;
l.isSameOrBefore = Qr;
l.isValid = yn;
l.lang = _s;
l.locale = fs;
l.localeData = ms;
l.max = mr;
l.min = _r;
l.parsingFlags = pn;
l.set = zs;
l.startOf = ln;
l.subtract = Ir;
l.toArray = fn;
l.toObject = _n;
l.toDate = cn;
l.toISOString = en;
l.inspect = tn;
typeof Symbol < "u" && Symbol.for != null && (l[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
l.toJSON = mn;
l.toString = Kr;
l.unix = dn;
l.valueOf = un;
l.creationData = gn;
l.eraName = Sn;
l.eraNarrow = vn;
l.eraAbbr = Yn;
l.eraYear = On;
l.year = Qt;
l.isLeapYear = fa;
l.weekYear = Pn;
l.isoWeekYear = Nn;
l.quarter = l.quarters = Un;
l.month = Zt;
l.daysInMonth = ua;
l.week = l.weeks = ga;
l.isoWeek = l.isoWeeks = ka;
l.weeksInYear = Cn;
l.weeksInWeekYear = In;
l.isoWeeksInYear = Fn;
l.isoWeeksInISOWeekYear = Ln;
l.date = ks;
l.day = l.days = Pa;
l.weekday = Na;
l.isoWeekday = Fa;
l.dayOfYear = Hn;
l.hour = l.hours = $a;
l.minute = l.minutes = $n;
l.second = l.seconds = Vn;
l.millisecond = l.milliseconds = Ms;
l.utcOffset = vr;
l.utc = Or;
l.local = br;
l.parseZone = xr;
l.hasAlignedHourOffset = Tr;
l.isDST = Wr;
l.isLocal = Rr;
l.isUtcOffset = Pr;
l.isUtc = hs;
l.isUTC = hs;
l.zoneAbbr = jn;
l.zoneName = qn;
l.dates = F(
  "dates accessor is deprecated. Use date instead.",
  ks
);
l.months = F(
  "months accessor is deprecated. Use month instead",
  Zt
);
l.years = F(
  "years accessor is deprecated. Use year instead",
  Qt
);
l.zone = F(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Yr
);
l.isDSTShifted = F(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Er
);
function Bn(e) {
  return M(e * 1e3);
}
function zn() {
  return M.apply(null, arguments).parseZone();
}
function Ds(e) {
  return e;
}
var g = ut.prototype;
g.calendar = Ps;
g.longDateFormat = Cs;
g.invalidDate = As;
g.ordinal = $s;
g.preparse = Ds;
g.postformat = Ds;
g.relativeTime = Gs;
g.pastFuture = js;
g.set = Es;
g.eras = kn;
g.erasParse = Mn;
g.erasConvertYear = Dn;
g.erasAbbrRegex = xn;
g.erasNameRegex = bn;
g.erasNarrowRegex = Tn;
g.months = ia;
g.monthsShort = oa;
g.monthsParse = ha;
g.monthsRegex = ca;
g.monthsShortRegex = da;
g.week = ma;
g.firstDayOfYear = wa;
g.firstDayOfWeek = pa;
g.weekdays = xa;
g.weekdaysMin = Wa;
g.weekdaysShort = Ta;
g.weekdaysParse = Ra;
g.weekdaysRegex = La;
g.weekdaysShortRegex = Ca;
g.weekdaysMinRegex = Ia;
g.isPM = Ua;
g.meridiem = Va;
function Le(e, t, s, a) {
  var r = X(), n = G().set(a, t);
  return r[s](n, e);
}
function Ss(e, t, s) {
  if (Q(e) && (t = e, e = void 0), e = e || "", t != null)
    return Le(e, t, s, "month");
  var a, r = [];
  for (a = 0; a < 12; a++)
    r[a] = Le(e, a, s, "month");
  return r;
}
function Ot(e, t, s, a) {
  typeof e == "boolean" ? (Q(t) && (s = t, t = void 0), t = t || "") : (t = e, s = t, e = !1, Q(t) && (s = t, t = void 0), t = t || "");
  var r = X(), n = e ? r._week.dow : 0, i, h = [];
  if (s != null)
    return Le(t, (s + n) % 7, a, "day");
  for (i = 0; i < 7; i++)
    h[i] = Le(t, (i + n) % 7, a, "day");
  return h;
}
function Zn(e, t) {
  return Ss(e, t, "months");
}
function Jn(e, t) {
  return Ss(e, t, "monthsShort");
}
function Qn(e, t, s) {
  return Ot(e, t, s, "weekdays");
}
function Xn(e, t, s) {
  return Ot(e, t, s, "weekdaysShort");
}
function Kn(e, t, s) {
  return Ot(e, t, s, "weekdaysMin");
}
se("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, s = m(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + s;
  }
});
o.lang = F(
  "moment.lang is deprecated. Use moment.locale instead.",
  se
);
o.langData = F(
  "moment.langData is deprecated. Use moment.localeData instead.",
  X
);
var q = Math.abs;
function ei() {
  var e = this._data;
  return this._milliseconds = q(this._milliseconds), this._days = q(this._days), this._months = q(this._months), e.milliseconds = q(e.milliseconds), e.seconds = q(e.seconds), e.minutes = q(e.minutes), e.hours = q(e.hours), e.months = q(e.months), e.years = q(e.years), this;
}
function vs(e, t, s, a) {
  var r = H(t, s);
  return e._milliseconds += a * r._milliseconds, e._days += a * r._days, e._months += a * r._months, e._bubble();
}
function ti(e, t) {
  return vs(this, e, t, 1);
}
function si(e, t) {
  return vs(this, e, t, -1);
}
function Nt(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function ai() {
  var e = this._milliseconds, t = this._days, s = this._months, a = this._data, r, n, i, h, d;
  return e >= 0 && t >= 0 && s >= 0 || e <= 0 && t <= 0 && s <= 0 || (e += Nt(it(s) + t) * 864e5, t = 0, s = 0), a.milliseconds = e % 1e3, r = N(e / 1e3), a.seconds = r % 60, n = N(r / 60), a.minutes = n % 60, i = N(n / 60), a.hours = i % 24, t += N(i / 24), d = N(Ys(t)), s += d, t -= Nt(it(d)), h = N(s / 12), s %= 12, a.days = t, a.months = s, a.years = h, this;
}
function Ys(e) {
  return e * 4800 / 146097;
}
function it(e) {
  return e * 146097 / 4800;
}
function ri(e) {
  if (!this.isValid())
    return NaN;
  var t, s, a = this._milliseconds;
  if (e = L(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + a / 864e5, s = this._months + Ys(t), e) {
      case "month":
        return s;
      case "quarter":
        return s / 3;
      case "year":
        return s / 12;
    }
  else
    switch (t = this._days + Math.round(it(this._months)), e) {
      case "week":
        return t / 7 + a / 6048e5;
      case "day":
        return t + a / 864e5;
      case "hour":
        return t * 24 + a / 36e5;
      case "minute":
        return t * 1440 + a / 6e4;
      case "second":
        return t * 86400 + a / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + a;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function ni() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + m(this._months / 12) * 31536e6 : NaN;
}
function K(e) {
  return function() {
    return this.as(e);
  };
}
var ii = K("ms"), oi = K("s"), li = K("m"), hi = K("h"), ui = K("d"), di = K("w"), ci = K("M"), fi = K("Q"), _i = K("y");
function mi() {
  return H(this);
}
function yi(e) {
  return e = L(e), this.isValid() ? this[e + "s"]() : NaN;
}
function ie(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var pi = ie("milliseconds"), wi = ie("seconds"), gi = ie("minutes"), ki = ie("hours"), Mi = ie("days"), Di = ie("months"), Si = ie("years");
function vi() {
  return N(this.days() / 7);
}
var B = Math.round, he = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function Yi(e, t, s, a, r) {
  return r.relativeTime(t || 1, !!s, e, a);
}
function Oi(e, t, s, a) {
  var r = H(e).abs(), n = B(r.as("s")), i = B(r.as("m")), h = B(r.as("h")), d = B(r.as("d")), p = B(r.as("M")), Y = B(r.as("w")), W = B(r.as("y")), C = n <= s.ss && ["s", n] || n < s.s && ["ss", n] || i <= 1 && ["m"] || i < s.m && ["mm", i] || h <= 1 && ["h"] || h < s.h && ["hh", h] || d <= 1 && ["d"] || d < s.d && ["dd", d];
  return s.w != null && (C = C || Y <= 1 && ["w"] || Y < s.w && ["ww", Y]), C = C || p <= 1 && ["M"] || p < s.M && ["MM", p] || W <= 1 && ["y"] || ["yy", W], C[2] = t, C[3] = +e > 0, C[4] = a, Yi.apply(null, C);
}
function bi(e) {
  return e === void 0 ? B : typeof e == "function" ? (B = e, !0) : !1;
}
function xi(e, t) {
  return he[e] === void 0 ? !1 : t === void 0 ? he[e] : (he[e] = t, e === "s" && (he.ss = t - 1), !0);
}
function Ti(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var s = !1, a = he, r, n;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (s = e), typeof t == "object" && (a = Object.assign({}, he, t), t.s != null && t.ss == null && (a.ss = t.s - 1)), r = this.localeData(), n = Oi(this, !s, a, r), s && (n = r.pastFuture(+this, n)), r.postformat(n);
}
var Ke = Math.abs;
function oe(e) {
  return (e > 0) - (e < 0) || +e;
}
function ze() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Ke(this._milliseconds) / 1e3, t = Ke(this._days), s = Ke(this._months), a, r, n, i, h = this.asSeconds(), d, p, Y, W;
  return h ? (a = N(e / 60), r = N(a / 60), e %= 60, a %= 60, n = N(s / 12), s %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", d = h < 0 ? "-" : "", p = oe(this._months) !== oe(h) ? "-" : "", Y = oe(this._days) !== oe(h) ? "-" : "", W = oe(this._milliseconds) !== oe(h) ? "-" : "", d + "P" + (n ? p + n + "Y" : "") + (s ? p + s + "M" : "") + (t ? Y + t + "D" : "") + (r || a || e ? "T" : "") + (r ? W + r + "H" : "") + (a ? W + a + "M" : "") + (e ? W + i + "S" : "")) : "P0D";
}
var y = qe.prototype;
y.isValid = kr;
y.abs = ei;
y.add = ti;
y.subtract = si;
y.as = ri;
y.asMilliseconds = ii;
y.asSeconds = oi;
y.asMinutes = li;
y.asHours = hi;
y.asDays = ui;
y.asWeeks = di;
y.asMonths = ci;
y.asQuarters = fi;
y.asYears = _i;
y.valueOf = ni;
y._bubble = ai;
y.clone = mi;
y.get = yi;
y.milliseconds = pi;
y.seconds = wi;
y.minutes = gi;
y.hours = ki;
y.days = Mi;
y.weeks = vi;
y.months = Di;
y.years = Si;
y.humanize = Ti;
y.toISOString = ze;
y.toString = ze;
y.toJSON = ze;
y.locale = fs;
y.localeData = ms;
y.toIsoString = F(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  ze
);
y.lang = _s;
c("X", 0, 0, "unix");
c("x", 0, 0, "valueOf");
u("x", $e);
u("X", Js);
k("X", function(e, t, s) {
  s._d = new Date(parseFloat(e) * 1e3);
});
k("x", function(e, t, s) {
  s._d = new Date(m(e));
});
//! moment.js
o.version = "2.29.4";
Ts(M);
o.fn = l;
o.min = yr;
o.max = pr;
o.now = wr;
o.utc = G;
o.unix = Bn;
o.months = Zn;
o.isDate = De;
o.locale = se;
o.invalid = Ce;
o.duration = H;
o.isMoment = U;
o.weekdays = Qn;
o.parseZone = zn;
o.localeData = X;
o.isDuration = Te;
o.monthsShort = Jn;
o.weekdaysMin = Kn;
o.defineLocale = wt;
o.updateLocale = Ba;
o.locales = za;
o.weekdaysShort = Xn;
o.normalizeUnits = L;
o.relativeTimeRounding = bi;
o.relativeTimeThreshold = xi;
o.calendarFormat = Vr;
o.prototype = l;
o.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
class Wi {
  constructor(t) {
    f(this, "options");
    f(this, "container");
    f(this, "dates");
    f(this, "months");
    f(this, "years");
    f(this, "nowDay");
    f(this, "nowMonth");
    f(this, "quickActions");
    f(this, "locale");
    this.options = Object.assign(this, t), this.container = this.options.container, this.dates = this.options.dates, this.months = this.options.months, this.years = this.options.years, this.nowDay = this.options.nowDay, this.nowMonth = this.options.nowMonth, this.quickActions = this.options.quickActions, this.locale = this.options.locale;
  }
  render() {
    var t, s, a, r, n, i, h;
    this.container.innerHTML += `<div class="calendarify">
    <div class="quick-actions ${this.quickActions ? "" : "d-none"}">
      <button data-action="today">${(s = (t = this.locale.lang.ui) == null ? void 0 : t.quickActions) == null ? void 0 : s.today}</button>
      <button data-action="tomorrow">${(r = (a = this.locale.lang.ui) == null ? void 0 : a.quickActions) == null ? void 0 : r.tomorrow}</button>
      <button data-action="in-2-days">${(i = (n = this.locale.lang.ui) == null ? void 0 : n.quickActions) == null ? void 0 : i.inTwoDays}</button>
    </div>
    <nav class="navigation">
      <ul>
        <li>
          <button data-action="prev" type="button"><i class="fas fa-fw fa-chevron-left"></i></button>
        </li>
        <li>
          <button data-action="expand" type="button">-</button>
          <button data-action="year-range" class="d-none" type="button">-</button>
        </li>
        <li>
          <button data-action="next" type="button"><i class="fas fa-fw fa-chevron-right"></i></button>
        </li>
      </ul>
    </nav>
    <div class="calendar">
      <ul class="days-wrapper wrapper">
      ${(h = this.locale.lang.weekdays) == null ? void 0 : h.map((d) => `<li>${d.slice(0, 3)}</li>`).join("")}
      </ul>
      <ul class="dates-wrapper wrapper">
          ${this.dates.map((d) => `<li><button ${d.disabled ? "disabled" : ""} type="button" class="date-button ${this.getHolidayClass({ date: d.date, nowMonth: this.nowMonth })} ${this.nowDay == String(d.date) ? "active" : ""}">${d.date}</button></li>`).join("")}
      </ul>
      <ul class="months-wrapper wrapper d-none">
        ${this.months.map((d, p) => {
      const Y = this.locale.lang.months[p].slice(0, 3), W = o().format("M");
      return `<li><button class="${d == W ? "active" : ""}" data-date="${d}" type="button">${Y}</button></li>`;
    }).join("")}
      </ul>
      <ul class="years-wrapper wrapper d-none">
        ${this.years.map((d) => `<li><button data-date="${d}" type="button">${d}</button></li>`).join("")}
      </ul>
    </div>
  </div>`;
  }
  getHolidayClass(t) {
    const { nowMonth: s, date: a } = t, r = new Date(`${s}-${a}`).getDay(), n = r === 0, i = r === 6;
    let h = "";
    return n ? h = "holiday" : i && (h = "pre-holiday"), h;
  }
}
class Ei {
  constructor(t, s) {
    f(this, "options");
    f(this, "locale");
    f(this, "startDate");
    f(this, "accentColor", "#0090FC");
    f(this, "quickActions", !0);
    f(this, "onTrigger");
    f(this, "_container");
    f(this, "_calendarWrapper");
    f(this, "_datepickerInput");
    f(this, "_datesWrapperEl");
    f(this, "_monthsWrapperEl");
    f(this, "_yearsWrapperEl");
    f(this, "_months");
    f(this, "_dates");
    f(this, "_nowMonth");
    f(this, "_nowDay");
    f(this, "_nowYear");
    f(this, "_dateButtons");
    f(this, "_expandButton");
    f(this, "_prevButton");
    f(this, "_nextButton");
    f(this, "_date");
    f(this, "_isExpanded", !1);
    f(this, "_expandedMode", "months");
    f(this, "_outputDate");
    f(this, "_quickButtons");
    f(this, "_wrapperEls");
    f(this, "_yearRangeButton");
    f(this, "_systemFormat", "YYYY-MM-DD");
    f(this, "_helpers");
    f(this, "_inputSelector");
    f(this, "_wasExecuted", !1);
    var h, d, p, Y, W, C, bt, xt, Tt;
    const a = document.documentElement;
    this.options = Object.assign(this, s), a.style.setProperty("--accentColor", this.options.accentColor), this.onTrigger = this.options.onTrigger, this._inputSelector = t;
    const r = {
      format: this._systemFormat,
      lang: {
        code: "en",
        ui: {
          quickActions: {
            today: "Today",
            tomorrow: "Tomorrow",
            inTwoDays: "In 2 Days"
          }
        },
        months: o.months(),
        weekdays: o.weekdays()
      }
    };
    this.locale = {
      format: ((h = s.locale) == null ? void 0 : h.format) || r.format,
      lang: {
        code: ((p = (d = s.locale) == null ? void 0 : d.lang) == null ? void 0 : p.code) || r.lang.code,
        ui: { quickActions: ((W = (Y = s.locale) == null ? void 0 : Y.lang.ui) == null ? void 0 : W.quickActions) || ((C = r.lang.ui) == null ? void 0 : C.quickActions) },
        months: ((bt = s.locale) == null ? void 0 : bt.lang.months) || r.lang.months,
        weekdays: ((xt = s.locale) == null ? void 0 : xt.lang.weekdays) || r.lang.weekdays
      }
    }, this.startDate = this.options.startDate || o().format(this._systemFormat), this._date = this.options.startDate, this._months = [];
    for (let Ze = 0; Ze < 12; Ze++)
      this._months.push(String(Ze + 1));
    this._nowMonth = o(this._date).format("YYYY-MM"), this._nowDay = o(this._date).format("D"), this._nowYear = o(this._date).format("YYYY"), this._outputDate = o(this._date).format(this.locale.format), this._dates = [], this.loopDaysMonths(), this._helpers = new Wi({
      container: (Tt = document.querySelector(t)) == null ? void 0 : Tt.parentElement,
      dates: this._dates,
      months: this._months,
      years: this._years,
      nowMonth: this._nowMonth,
      nowDay: this._nowDay,
      quickActions: this.options.quickActions,
      locale: this.options.locale
    }), this._helpers.render();
    const { months: n, weekdays: i } = this.options.locale.lang;
    o.updateLocale(this.options.locale.lang.code, { months: n, weekdays: i }), this._container = document.querySelector(".calendarify"), this._datepickerInput = document.querySelector(t), this._datesWrapperEl = this._container.querySelector(".dates-wrapper"), this._monthsWrapperEl = this._container.querySelector(".months-wrapper"), this._yearsWrapperEl = this._container.querySelector(".years-wrapper"), this._expandButton = this._container.querySelector('.navigation button[data-action="expand"]'), this._dateButtons = this._container.querySelectorAll(".date-button"), this._prevButton = this._container.querySelector('.navigation button[data-action="prev"]'), this._nextButton = this._container.querySelector('.navigation button[data-action="next"]'), this._calendarWrapper = this._container.querySelector(".calendar"), this._quickButtons = this._container.querySelectorAll(".quick-actions button"), this._wrapperEls = this._calendarWrapper.querySelectorAll(".wrapper:not(:last-child, :nth-child(3))"), this._yearRangeButton = this._container.querySelector('.navigation button[data-action="year-range"]');
  }
  init() {
    o.suppressDeprecationWarnings = !0, this.showValue(), this.changeState(), this._datepickerInput.spellcheck = !1, this._datepickerInput.addEventListener("input", (t) => {
      const s = t.target;
      s.value = this._outputDate;
    }), this.stylingContainer(), this._prevButton.addEventListener("click", this.prevMonth.bind(this)), this._nextButton.addEventListener("click", this.nextMonth.bind(this)), this._expandButton.addEventListener("click", this.expand.bind(this)), this._datepickerInput.addEventListener("focus", () => {
      this._wasExecuted = !0, this._container.classList.add("show");
    }), window.addEventListener("click", this.hideOnOutsideClick.bind(this)), this._quickButtons.forEach((t) => t.addEventListener("click", this.quickAction.bind(this)));
  }
  stylingContainer() {
    const t = this._datepickerInput.parentElement;
    t.style.position = "relative", this._container.style.top = `${this._datepickerInput.clientHeight + 12}px`;
  }
  get _years() {
    const t = [], s = o(this._date), a = o(this._date).add(11, "y");
    for (; a.diff(s, "years") >= 0; )
      t.push(s.format("YYYY")), s.add(1, "year");
    return t;
  }
  quickAction(t) {
    switch (t.target.getAttribute("data-action")) {
      case "today":
        this._date = o().format(this._systemFormat);
        break;
      case "tomorrow":
        this._date = o().add(1, "days").format(this._systemFormat);
        break;
      default:
        this._date = o().add(2, "days").format(this._systemFormat);
        break;
    }
    this.showValue(), this.changeState(), this.resetUI();
  }
  showValue() {
    this._outputDate = o(this._date).format(this.locale.format), this._datepickerInput.value = this._outputDate;
  }
  hideOnOutsideClick(t) {
    const s = t.target;
    !s.closest(this._inputSelector) && !s.closest(".calendarify") && (this._container.classList.remove("show"), this.doneState(), this._wasExecuted = !1);
  }
  expand() {
    this._isExpanded = !0, this._expandButton.textContent = o(this._date).format("YYYY"), this._wrapperEls.forEach((t) => t.classList.add("d-none")), this._monthsWrapperEl.classList.remove("d-none"), this.showMonths();
  }
  showMonths() {
    this._expandButton.classList.add("d-none"), this._yearRangeButton.classList.remove("d-none");
    const t = this._monthsWrapperEl.querySelectorAll("button");
    t.forEach((s) => s.addEventListener("click", (a) => this.changeMonth(a, t))), this._yearRangeButton.addEventListener("click", this.showYears.bind(this));
  }
  showYears() {
    this._expandedMode = "years", this._monthsWrapperEl.classList.add("d-none"), this._yearsWrapperEl.classList.remove("d-none"), this._yearsWrapperEl.innerHTML = `${this._years.map((s) => `<li><button class="${s == this._nowYear ? "active" : ""}" data-date="${s}" type="button">${s}</button></li>`).join("")}`, this._yearsWrapperEl.querySelectorAll("button").forEach((s) => s.addEventListener("click", this.changeYear.bind(this))), this.changeState();
  }
  changeYear(t) {
    const a = t.target.getAttribute("data-date"), r = o(this._nowMonth).format("MM");
    this._date = o(`${a}-${r}-${this._nowDay}`).format(this._systemFormat), this._nowYear = a, this._yearsWrapperEl.classList.add("d-none"), this._monthsWrapperEl.classList.remove("d-none"), this._expandedMode = "months", this.changeState();
  }
  changeMonth(t, s) {
    this._wrapperEls.forEach((h) => h.classList.remove("d-none")), s.forEach((h) => h.classList.remove("active"));
    const a = t.target, r = a.getAttribute("data-date"), n = o(this._date).format("YYYY"), i = o(new Date(`${n} ${r} ${this._nowDay}`));
    this._date = o(i).format(this._systemFormat), a.classList.add("active"), this._isExpanded = !1, this._expandedMode = "months", this.changeState(), this.resetUI();
  }
  doneState() {
    this._container.classList.remove("show");
    const t = {
      date: {
        default: o(this._outputDate).toDate(),
        iso: o(this._outputDate).toISOString()
      },
      formatted: {
        relative: o(this._outputDate).fromNow(),
        calendar: o(this._outputDate).calendar()
      },
      unix: {
        seconds: o(this._outputDate).unix(),
        milliseconds: +o(this._outputDate)
      },
      locale: this.locale,
      partials: {
        day: o(this._outputDate).format("DD"),
        month: o(this._outputDate).format("MM"),
        year: o(this._outputDate).format("YYYY")
      }
    };
    this.resetUI(), this.onTrigger && this._wasExecuted && this.onTrigger(t);
  }
  resetUI() {
    this._monthsWrapperEl.classList.add("d-none"), this._yearsWrapperEl.classList.add("d-none"), this._wrapperEls.forEach((t) => t.classList.remove("d-none")), this._isExpanded = !1, this._monthsWrapperEl.classList.add("d-none"), this._yearsWrapperEl.classList.add("d-none"), this._expandButton.classList.remove("d-none"), this._yearRangeButton.classList.add("d-none"), this.changeState();
  }
  changeState() {
    var a;
    this._dates = [], this._nowMonth = o(this._date).format("YYYY-MM"), this._nowDay = o(this._date).format("D"), this.loopDaysMonths();
    const t = o(this._nowMonth).format("M"), s = o(this._nowMonth).format("YYYY");
    switch (this._expandButton.textContent = `${this.locale.lang.months[+t - 1]} ${s}`, this._expandedMode) {
      case "years":
        this._yearRangeButton.textContent = `${this._years[0]} - ${this._years[this._years.length - 1]}`;
        break;
      default:
        this._yearRangeButton.textContent = o(this._date).format("YYYY");
        break;
    }
    if (this.renderDates(), this._dateButtons = this._datesWrapperEl.querySelectorAll(".date-button"), this._dateButtons.forEach((r) => r.addEventListener("click", this.setDate.bind(this))), this._expandedMode == "months" && this._dates.slice(0, 7).every((n) => n.disabled))
      for (let n = 0; n < 7; n++)
        (a = this._dateButtons[n].parentElement) == null || a.classList.add("d-none");
  }
  loopDaysMonths() {
    const t = o(this._date).daysInMonth(), s = o(new Date(this._nowMonth)).isoWeekday(), a = o(this._date).subtract(1, "months").daysInMonth();
    for (let r = 1; r <= s; r++)
      this._dates.unshift({ disabled: !0, date: String(a + 1 - r) });
    for (let r = 1; r <= t; r++)
      this._dates.push({ disabled: !1, date: String(r) });
  }
  renderDates() {
    this._datesWrapperEl.innerHTML = `${this._dates.map((t) => `<li><button ${t.disabled ? "disabled" : ""} type="button" class="date-button ${this._helpers.getHolidayClass({ date: t.date, nowMonth: this._nowMonth })} ${this._nowDay == String(t.date) ? "active" : ""}">${t.date}</button></li>`).join("")}`;
  }
  setDate(t) {
    const s = t.target;
    this._dateButtons.forEach((a) => a.classList.remove("active")), this._nowDay = String(s.textContent), this._date = `${o(`${this._nowMonth}-${this._nowDay}`).format(this._systemFormat)}`, this.showValue(), s.classList.add("active");
  }
  prevMonth() {
    if (this._isExpanded)
      switch (this._expandedMode) {
        case "months":
          this._date = o(`${this._nowMonth}-${this._nowDay}`).subtract(1, "years").format(this._systemFormat);
          break;
        default:
          this._date = o(`${this._nowMonth}-${this._nowDay}`).subtract(10, "years").format(this._systemFormat), this.showYears();
          break;
      }
    else
      this._date = o(`${this._nowMonth}-${this._nowDay}`).subtract(1, "months").format(this._systemFormat);
    this.changeState();
  }
  nextMonth() {
    if (this._isExpanded)
      switch (this._expandedMode) {
        case "months":
          this._date = o(`${this._nowMonth}-${this._nowDay}`).add(1, "years").format(this._systemFormat);
          break;
        default:
          this._date = o(`${this._nowMonth}-${this._nowDay}`).add(10, "years").format(this._systemFormat), this.showYears();
          break;
      }
    else
      this._date = o(`${this._nowMonth}-${this._nowDay}`).add(1, "months").format(this._systemFormat);
    this.changeState();
  }
}
var Os = window || Os;
Os.Calendarify = Ei;
export {
  Ei as default
};
