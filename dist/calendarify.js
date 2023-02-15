var ra = Object.defineProperty;
var na = (e, t, s) => t in e ? ra(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var f = (e, t, s) => (na(e, typeof t != "symbol" ? t + "" : t, s), s);
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var fs;
function o() {
  return fs.apply(null, arguments);
}
function ia(e) {
  fs = e;
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
function dt(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (w(e, t))
      return !1;
  return !0;
}
function P(e) {
  return e === void 0;
}
function Q(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Se(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function _s(e, t) {
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
  return Is(e, t, s, a, !0).utc();
}
function oa() {
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
  return e._pf == null && (e._pf = oa()), e._pf;
}
var rt;
Array.prototype.some ? rt = Array.prototype.some : rt = function(e) {
  var t = Object(this), s = t.length >>> 0, a;
  for (a = 0; a < s; a++)
    if (a in t && e.call(this, t[a], a, t))
      return !0;
  return !1;
};
function ct(e) {
  if (e._isValid == null) {
    var t = _(e), s = rt.call(t.parsedDateParts, function(r) {
      return r != null;
    }), a = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && s);
    if (e._strict && (a = a && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = a;
    else
      return a;
  }
  return e._isValid;
}
function He(e) {
  var t = G(NaN);
  return e != null ? ee(_(t), e) : _(t).userInvalidated = !0, t;
}
var ls = o.momentProperties = [], et = !1;
function ft(e, t) {
  var s, a, r, n = ls.length;
  if (P(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), P(t._i) || (e._i = t._i), P(t._f) || (e._f = t._f), P(t._l) || (e._l = t._l), P(t._strict) || (e._strict = t._strict), P(t._tzm) || (e._tzm = t._tzm), P(t._isUTC) || (e._isUTC = t._isUTC), P(t._offset) || (e._offset = t._offset), P(t._pf) || (e._pf = _(t)), P(t._locale) || (e._locale = t._locale), n > 0)
    for (s = 0; s < n; s++)
      a = ls[s], r = t[a], P(r) || (e[a] = r);
  return e;
}
function ve(e) {
  ft(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), et === !1 && (et = !0, o.updateOffset(this), et = !1);
}
function U(e) {
  return e instanceof ve || e != null && e._isAMomentObject != null;
}
function ms(e) {
  o.suppressDeprecationWarnings === !1 && typeof console != "undefined" && console.warn && console.warn("Deprecation warning: " + e);
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
      ms(
        e + `
Arguments: ` + Array.prototype.slice.call(a).join("") + `
` + new Error().stack
      ), s = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var hs = {};
function ys(e, t) {
  o.deprecationHandler != null && o.deprecationHandler(e, t), hs[e] || (ms(t), hs[e] = !0);
}
o.suppressDeprecationWarnings = !1;
o.deprecationHandler = null;
function j(e) {
  return typeof Function != "undefined" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function la(e) {
  var t, s;
  for (s in e)
    w(e, s) && (t = e[s], j(t) ? this[s] = t : this["_" + s] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function nt(e, t) {
  var s = ee({}, e), a;
  for (a in t)
    w(t, a) && (ne(e[a]) && ne(t[a]) ? (s[a] = {}, ee(s[a], e[a]), ee(s[a], t[a])) : t[a] != null ? s[a] = t[a] : delete s[a]);
  for (a in e)
    w(e, a) && !w(t, a) && ne(e[a]) && (s[a] = ee({}, s[a]));
  return s;
}
function _t(e) {
  e != null && this.set(e);
}
var it;
Object.keys ? it = Object.keys : it = function(e) {
  var t, s = [];
  for (t in e)
    w(e, t) && s.push(t);
  return s;
};
var ha = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function ua(e, t, s) {
  var a = this._calendar[e] || this._calendar.sameElse;
  return j(a) ? a.call(t, s) : a;
}
function V(e, t, s) {
  var a = "" + Math.abs(e), r = t - a.length, n = e >= 0;
  return (n ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + a;
}
var mt = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, We = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, tt = {}, ue = {};
function d(e, t, s, a) {
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
function da(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function ca(e) {
  var t = e.match(mt), s, a;
  for (s = 0, a = t.length; s < a; s++)
    ue[t[s]] ? t[s] = ue[t[s]] : t[s] = da(t[s]);
  return function(r) {
    var n = "", i;
    for (i = 0; i < a; i++)
      n += j(t[i]) ? t[i].call(r, e) : t[i];
    return n;
  };
}
function Pe(e, t) {
  return e.isValid() ? (t = ps(t, e.localeData()), tt[t] = tt[t] || ca(t), tt[t](e)) : e.localeData().invalidDate();
}
function ps(e, t) {
  var s = 5;
  function a(r) {
    return t.longDateFormat(r) || r;
  }
  for (We.lastIndex = 0; s >= 0 && We.test(e); )
    e = e.replace(
      We,
      a
    ), We.lastIndex = 0, s -= 1;
  return e;
}
var fa = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function _a(e) {
  var t = this._longDateFormat[e], s = this._longDateFormat[e.toUpperCase()];
  return t || !s ? t : (this._longDateFormat[e] = s.match(mt).map(function(a) {
    return a === "MMMM" || a === "MM" || a === "DD" || a === "dddd" ? a.slice(1) : a;
  }).join(""), this._longDateFormat[e]);
}
var ma = "Invalid date";
function ya() {
  return this._invalidDate;
}
var pa = "%d", wa = /\d{1,2}/;
function ga(e) {
  return this._ordinal.replace("%d", e);
}
var ka = {
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
function Ma(e, t, s, a) {
  var r = this._relativeTime[s];
  return j(r) ? r(e, t, s, a) : r.replace(/%d/i, e);
}
function Da(e, t) {
  var s = this._relativeTime[e > 0 ? "future" : "past"];
  return j(s) ? s(t) : s.replace(/%s/i, t);
}
var we = {};
function T(e, t) {
  var s = e.toLowerCase();
  we[s] = we[s + "s"] = we[t] = e;
}
function C(e) {
  return typeof e == "string" ? we[e] || we[e.toLowerCase()] : void 0;
}
function yt(e) {
  var t = {}, s, a;
  for (a in e)
    w(e, a) && (s = C(a), s && (t[s] = e[a]));
  return t;
}
var ws = {};
function W(e, t) {
  ws[e] = t;
}
function Sa(e) {
  var t = [], s;
  for (s in e)
    w(e, s) && t.push({ unit: s, priority: ws[s] });
  return t.sort(function(a, r) {
    return a.priority - r.priority;
  }), t;
}
function $e(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function L(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function m(e) {
  var t = +e, s = 0;
  return t !== 0 && isFinite(t) && (s = L(t)), s;
}
function fe(e, t) {
  return function(s) {
    return s != null ? (gs(this, e, s), o.updateOffset(this, t), this) : Le(this, e);
  };
}
function Le(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function gs(e, t, s) {
  e.isValid() && !isNaN(s) && (t === "FullYear" && $e(e.year()) && e.month() === 1 && e.date() === 29 ? (s = m(s), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    s,
    e.month(),
    ze(s, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](s));
}
function va(e) {
  return e = C(e), j(this[e]) ? this[e]() : this;
}
function Ya(e, t) {
  if (typeof e == "object") {
    e = yt(e);
    var s = Sa(e), a, r = s.length;
    for (a = 0; a < r; a++)
      this[s[a].unit](e[s[a].unit]);
  } else if (e = C(e), j(this[e]))
    return this[e](t);
  return this;
}
var ks = /\d/, N = /\d\d/, Ms = /\d{3}/, pt = /\d{4}/, Ve = /[+-]?\d{6}/, D = /\d\d?/, Ds = /\d\d\d\d?/, Ss = /\d\d\d\d\d\d?/, Ge = /\d{1,3}/, wt = /\d{1,4}/, je = /[+-]?\d{1,6}/, _e = /\d+/, qe = /[+-]?\d+/, Oa = /Z|[+-]\d\d:?\d\d/gi, Be = /Z|[+-]\d\d(?::?\d\d)?/gi, ba = /[+-]?\d+(\.\d{1,3})?/, Ye = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Fe;
Fe = {};
function u(e, t, s) {
  Fe[e] = j(t) ? t : function(a, r) {
    return a && s ? s : t;
  };
}
function xa(e, t) {
  return w(Fe, e) ? Fe[e](t._strict, t._locale) : new RegExp(Ta(e));
}
function Ta(e) {
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
var ot = {};
function k(e, t) {
  var s, a = t, r;
  for (typeof e == "string" && (e = [e]), Q(t) && (a = function(n, i) {
    i[t] = m(n);
  }), r = e.length, s = 0; s < r; s++)
    ot[e[s]] = a;
}
function Oe(e, t) {
  k(e, function(s, a, r, n) {
    r._w = r._w || {}, t(s, r._w, r, n);
  });
}
function Wa(e, t, s) {
  t != null && w(ot, e) && ot[e](t, s._a, s, e);
}
var x = 0, z = 1, $ = 2, b = 3, I = 4, Z = 5, re = 6, Ea = 7, Pa = 8;
function Ra(e, t) {
  return (e % t + t) % t;
}
var O;
Array.prototype.indexOf ? O = Array.prototype.indexOf : O = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function ze(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var s = Ra(t, 12);
  return e += (t - s) / 12, s === 1 ? $e(e) ? 29 : 28 : 31 - s % 7 % 2;
}
d("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
d("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
d("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
T("month", "M");
W("month", 8);
u("M", D);
u("MM", D, N);
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
var Na = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), vs = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Ys = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, La = Ye, Fa = Ye;
function Ca(e, t) {
  return e ? A(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ys).test(t) ? "format" : "standalone"][e.month()] : A(this._months) ? this._months : this._months.standalone;
}
function Ia(e, t) {
  return e ? A(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ys.test(t) ? "format" : "standalone"][e.month()] : A(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Aa(e, t, s) {
  var a, r, n, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a)
      n = G([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(
        n,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[a] = this.months(n, "").toLocaleLowerCase();
  return s ? t === "MMM" ? (r = O.call(this._shortMonthsParse, i), r !== -1 ? r : null) : (r = O.call(this._longMonthsParse, i), r !== -1 ? r : null) : t === "MMM" ? (r = O.call(this._shortMonthsParse, i), r !== -1 ? r : (r = O.call(this._longMonthsParse, i), r !== -1 ? r : null)) : (r = O.call(this._longMonthsParse, i), r !== -1 ? r : (r = O.call(this._shortMonthsParse, i), r !== -1 ? r : null));
}
function Ua(e, t, s) {
  var a, r, n;
  if (this._monthsParseExact)
    return Aa.call(this, e, t, s);
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
function Os(e, t) {
  var s;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = m(t);
    else if (t = e.localeData().monthsParse(t), !Q(t))
      return e;
  }
  return s = Math.min(e.date(), ze(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, s), e;
}
function bs(e) {
  return e != null ? (Os(this, e), o.updateOffset(this, !0), this) : Le(this, "Month");
}
function Ha() {
  return ze(this.year(), this.month());
}
function $a(e) {
  return this._monthsParseExact ? (w(this, "_monthsRegex") || xs.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (w(this, "_monthsShortRegex") || (this._monthsShortRegex = La), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Va(e) {
  return this._monthsParseExact ? (w(this, "_monthsRegex") || xs.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (w(this, "_monthsRegex") || (this._monthsRegex = Fa), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function xs() {
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
d("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? V(e, 4) : "+" + e;
});
d(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
d(0, ["YYYY", 4], 0, "year");
d(0, ["YYYYY", 5], 0, "year");
d(0, ["YYYYYY", 6, !0], 0, "year");
T("year", "y");
W("year", 1);
u("Y", qe);
u("YY", D, N);
u("YYYY", wt, pt);
u("YYYYY", je, Ve);
u("YYYYYY", je, Ve);
k(["YYYYY", "YYYYYY"], x);
k("YYYY", function(e, t) {
  t[x] = e.length === 2 ? o.parseTwoDigitYear(e) : m(e);
});
k("YY", function(e, t) {
  t[x] = o.parseTwoDigitYear(e);
});
k("Y", function(e, t) {
  t[x] = parseInt(e, 10);
});
function ge(e) {
  return $e(e) ? 366 : 365;
}
o.parseTwoDigitYear = function(e) {
  return m(e) + (m(e) > 68 ? 1900 : 2e3);
};
var Ts = fe("FullYear", !0);
function Ga() {
  return $e(this.year());
}
function ja(e, t, s, a, r, n, i) {
  var h;
  return e < 100 && e >= 0 ? (h = new Date(e + 400, t, s, a, r, n, i), isFinite(h.getFullYear()) && h.setFullYear(e)) : h = new Date(e, t, s, a, r, n, i), h;
}
function ke(e) {
  var t, s;
  return e < 100 && e >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = e + 400, t = new Date(Date.UTC.apply(null, s)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Ce(e, t, s) {
  var a = 7 + t - s, r = (7 + ke(e, 0, a).getUTCDay() - t) % 7;
  return -r + a - 1;
}
function Ws(e, t, s, a, r) {
  var n = (7 + s - a) % 7, i = Ce(e, a, r), h = 1 + 7 * (t - 1) + n + i, c, y;
  return h <= 0 ? (c = e - 1, y = ge(c) + h) : h > ge(e) ? (c = e + 1, y = h - ge(e)) : (c = e, y = h), {
    year: c,
    dayOfYear: y
  };
}
function Me(e, t, s) {
  var a = Ce(e.year(), t, s), r = Math.floor((e.dayOfYear() - a - 1) / 7) + 1, n, i;
  return r < 1 ? (i = e.year() - 1, n = r + J(i, t, s)) : r > J(e.year(), t, s) ? (n = r - J(e.year(), t, s), i = e.year() + 1) : (i = e.year(), n = r), {
    week: n,
    year: i
  };
}
function J(e, t, s) {
  var a = Ce(e, t, s), r = Ce(e + 1, t, s);
  return (ge(e) - a + r) / 7;
}
d("w", ["ww", 2], "wo", "week");
d("W", ["WW", 2], "Wo", "isoWeek");
T("week", "w");
T("isoWeek", "W");
W("week", 5);
W("isoWeek", 5);
u("w", D);
u("ww", D, N);
u("W", D);
u("WW", D, N);
Oe(
  ["w", "ww", "W", "WW"],
  function(e, t, s, a) {
    t[a.substr(0, 1)] = m(e);
  }
);
function qa(e) {
  return Me(e, this._week.dow, this._week.doy).week;
}
var Ba = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function za() {
  return this._week.dow;
}
function Za() {
  return this._week.doy;
}
function Ja(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Qa(e) {
  var t = Me(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
d("d", 0, "do", "day");
d("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
d("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
d("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
d("e", 0, 0, "weekday");
d("E", 0, 0, "isoWeekday");
T("day", "d");
T("weekday", "e");
T("isoWeekday", "E");
W("day", 11);
W("weekday", 11);
W("isoWeekday", 11);
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
Oe(["dd", "ddd", "dddd"], function(e, t, s, a) {
  var r = s._locale.weekdaysParse(e, a, s._strict);
  r != null ? t.d = r : _(s).invalidWeekday = e;
});
Oe(["d", "e", "E"], function(e, t, s, a) {
  t[a] = m(e);
});
function Xa(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Ka(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function gt(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var er = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Es = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), tr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), sr = Ye, ar = Ye, rr = Ye;
function nr(e, t) {
  var s = A(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? gt(s, this._week.dow) : e ? s[e.day()] : s;
}
function ir(e) {
  return e === !0 ? gt(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function or(e) {
  return e === !0 ? gt(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function lr(e, t, s) {
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
  return s ? t === "dddd" ? (r = O.call(this._weekdaysParse, i), r !== -1 ? r : null) : t === "ddd" ? (r = O.call(this._shortWeekdaysParse, i), r !== -1 ? r : null) : (r = O.call(this._minWeekdaysParse, i), r !== -1 ? r : null) : t === "dddd" ? (r = O.call(this._weekdaysParse, i), r !== -1 || (r = O.call(this._shortWeekdaysParse, i), r !== -1) ? r : (r = O.call(this._minWeekdaysParse, i), r !== -1 ? r : null)) : t === "ddd" ? (r = O.call(this._shortWeekdaysParse, i), r !== -1 || (r = O.call(this._weekdaysParse, i), r !== -1) ? r : (r = O.call(this._minWeekdaysParse, i), r !== -1 ? r : null)) : (r = O.call(this._minWeekdaysParse, i), r !== -1 || (r = O.call(this._weekdaysParse, i), r !== -1) ? r : (r = O.call(this._shortWeekdaysParse, i), r !== -1 ? r : null));
}
function hr(e, t, s) {
  var a, r, n;
  if (this._weekdaysParseExact)
    return lr.call(this, e, t, s);
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
function ur(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = Xa(e, this.localeData()), this.add(e - t, "d")) : t;
}
function dr(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function cr(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Ka(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function fr(e) {
  return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || kt.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (w(this, "_weekdaysRegex") || (this._weekdaysRegex = sr), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function _r(e) {
  return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || kt.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (w(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ar), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function mr(e) {
  return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || kt.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (w(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = rr), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function kt() {
  function e(Y, E) {
    return E.length - Y.length;
  }
  var t = [], s = [], a = [], r = [], n, i, h, c, y;
  for (n = 0; n < 7; n++)
    i = G([2e3, 1]).day(n), h = R(this.weekdaysMin(i, "")), c = R(this.weekdaysShort(i, "")), y = R(this.weekdays(i, "")), t.push(h), s.push(c), a.push(y), r.push(h), r.push(c), r.push(y);
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
function Mt() {
  return this.hours() % 12 || 12;
}
function yr() {
  return this.hours() || 24;
}
d("H", ["HH", 2], 0, "hour");
d("h", ["hh", 2], 0, Mt);
d("k", ["kk", 2], 0, yr);
d("hmm", 0, 0, function() {
  return "" + Mt.apply(this) + V(this.minutes(), 2);
});
d("hmmss", 0, 0, function() {
  return "" + Mt.apply(this) + V(this.minutes(), 2) + V(this.seconds(), 2);
});
d("Hmm", 0, 0, function() {
  return "" + this.hours() + V(this.minutes(), 2);
});
d("Hmmss", 0, 0, function() {
  return "" + this.hours() + V(this.minutes(), 2) + V(this.seconds(), 2);
});
function Ps(e, t) {
  d(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
Ps("a", !0);
Ps("A", !1);
T("hour", "h");
W("hour", 13);
function Rs(e, t) {
  return t._meridiemParse;
}
u("a", Rs);
u("A", Rs);
u("H", D);
u("h", D);
u("k", D);
u("HH", D, N);
u("hh", D, N);
u("kk", D, N);
u("hmm", Ds);
u("hmmss", Ss);
u("Hmm", Ds);
u("Hmmss", Ss);
k(["H", "HH"], b);
k(["k", "kk"], function(e, t, s) {
  var a = m(e);
  t[b] = a === 24 ? 0 : a;
});
k(["a", "A"], function(e, t, s) {
  s._isPm = s._locale.isPM(e), s._meridiem = e;
});
k(["h", "hh"], function(e, t, s) {
  t[b] = m(e), _(s).bigHour = !0;
});
k("hmm", function(e, t, s) {
  var a = e.length - 2;
  t[b] = m(e.substr(0, a)), t[I] = m(e.substr(a)), _(s).bigHour = !0;
});
k("hmmss", function(e, t, s) {
  var a = e.length - 4, r = e.length - 2;
  t[b] = m(e.substr(0, a)), t[I] = m(e.substr(a, 2)), t[Z] = m(e.substr(r)), _(s).bigHour = !0;
});
k("Hmm", function(e, t, s) {
  var a = e.length - 2;
  t[b] = m(e.substr(0, a)), t[I] = m(e.substr(a));
});
k("Hmmss", function(e, t, s) {
  var a = e.length - 4, r = e.length - 2;
  t[b] = m(e.substr(0, a)), t[I] = m(e.substr(a, 2)), t[Z] = m(e.substr(r));
});
function pr(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var wr = /[ap]\.?m?\.?/i, gr = fe("Hours", !0);
function kr(e, t, s) {
  return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM";
}
var Ns = {
  calendar: ha,
  longDateFormat: fa,
  invalidDate: ma,
  ordinal: pa,
  dayOfMonthOrdinalParse: wa,
  relativeTime: ka,
  months: Na,
  monthsShort: vs,
  week: Ba,
  weekdays: er,
  weekdaysMin: tr,
  weekdaysShort: Es,
  meridiemParse: wr
}, v = {}, ye = {}, De;
function Mr(e, t) {
  var s, a = Math.min(e.length, t.length);
  for (s = 0; s < a; s += 1)
    if (e[s] !== t[s])
      return s;
  return a;
}
function us(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Dr(e) {
  for (var t = 0, s, a, r, n; t < e.length; ) {
    for (n = us(e[t]).split("-"), s = n.length, a = us(e[t + 1]), a = a ? a.split("-") : null; s > 0; ) {
      if (r = Ze(n.slice(0, s).join("-")), r)
        return r;
      if (a && a.length >= s && Mr(n, a) >= s - 1)
        break;
      s--;
    }
    t++;
  }
  return De;
}
function Sr(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function Ze(e) {
  var t = null, s;
  if (v[e] === void 0 && typeof module != "undefined" && module && module.exports && Sr(e))
    try {
      t = De._abbr, s = require, s("./locale/" + e), se(t);
    } catch (a) {
      v[e] = null;
    }
  return v[e];
}
function se(e, t) {
  var s;
  return e && (P(t) ? s = X(e) : s = Dt(e, t), s ? De = s : typeof console != "undefined" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), De._abbr;
}
function Dt(e, t) {
  if (t !== null) {
    var s, a = Ns;
    if (t.abbr = e, v[e] != null)
      ys(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), a = v[e]._config;
    else if (t.parentLocale != null)
      if (v[t.parentLocale] != null)
        a = v[t.parentLocale]._config;
      else if (s = Ze(t.parentLocale), s != null)
        a = s._config;
      else
        return ye[t.parentLocale] || (ye[t.parentLocale] = []), ye[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return v[e] = new _t(nt(a, t)), ye[e] && ye[e].forEach(function(r) {
      Dt(r.name, r.config);
    }), se(e), v[e];
  } else
    return delete v[e], null;
}
function vr(e, t) {
  if (t != null) {
    var s, a, r = Ns;
    v[e] != null && v[e].parentLocale != null ? v[e].set(nt(v[e]._config, t)) : (a = Ze(e), a != null && (r = a._config), t = nt(r, t), a == null && (t.abbr = e), s = new _t(t), s.parentLocale = v[e], v[e] = s), se(e);
  } else
    v[e] != null && (v[e].parentLocale != null ? (v[e] = v[e].parentLocale, e === se() && se(e)) : v[e] != null && delete v[e]);
  return v[e];
}
function X(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return De;
  if (!A(e)) {
    if (t = Ze(e), t)
      return t;
    e = [e];
  }
  return Dr(e);
}
function Yr() {
  return it(v);
}
function St(e) {
  var t, s = e._a;
  return s && _(e).overflow === -2 && (t = s[z] < 0 || s[z] > 11 ? z : s[$] < 1 || s[$] > ze(s[x], s[z]) ? $ : s[b] < 0 || s[b] > 24 || s[b] === 24 && (s[I] !== 0 || s[Z] !== 0 || s[re] !== 0) ? b : s[I] < 0 || s[I] > 59 ? I : s[Z] < 0 || s[Z] > 59 ? Z : s[re] < 0 || s[re] > 999 ? re : -1, _(e)._overflowDayOfYear && (t < x || t > $) && (t = $), _(e)._overflowWeeks && t === -1 && (t = Ea), _(e)._overflowWeekday && t === -1 && (t = Pa), _(e).overflow = t), e;
}
var Or = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, br = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, xr = /Z|[+-]\d\d(?::?\d\d)?/, Ee = [
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
], st = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], Tr = /^\/?Date\((-?\d+)/i, Wr = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Er = {
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
function Ls(e) {
  var t, s, a = e._i, r = Or.exec(a) || br.exec(a), n, i, h, c, y = Ee.length, Y = st.length;
  if (r) {
    for (_(e).iso = !0, t = 0, s = y; t < s; t++)
      if (Ee[t][1].exec(r[1])) {
        i = Ee[t][0], n = Ee[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (r[3]) {
      for (t = 0, s = Y; t < s; t++)
        if (st[t][1].exec(r[3])) {
          h = (r[2] || " ") + st[t][0];
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
      if (xr.exec(r[4]))
        c = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (h || "") + (c || ""), Yt(e);
  } else
    e._isValid = !1;
}
function Pr(e, t, s, a, r, n) {
  var i = [
    Rr(e),
    vs.indexOf(t),
    parseInt(s, 10),
    parseInt(a, 10),
    parseInt(r, 10)
  ];
  return n && i.push(parseInt(n, 10)), i;
}
function Rr(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Nr(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Lr(e, t, s) {
  if (e) {
    var a = Es.indexOf(e), r = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (a !== r)
      return _(s).weekdayMismatch = !0, s._isValid = !1, !1;
  }
  return !0;
}
function Fr(e, t, s) {
  if (e)
    return Er[e];
  if (t)
    return 0;
  var a = parseInt(s, 10), r = a % 100, n = (a - r) / 100;
  return n * 60 + r;
}
function Fs(e) {
  var t = Wr.exec(Nr(e._i)), s;
  if (t) {
    if (s = Pr(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Lr(t[1], s, e))
      return;
    e._a = s, e._tzm = Fr(t[8], t[9], t[10]), e._d = ke.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), _(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Cr(e) {
  var t = Tr.exec(e._i);
  if (t !== null) {
    e._d = new Date(+t[1]);
    return;
  }
  if (Ls(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Fs(e), e._isValid === !1)
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
  return e != null ? e : t != null ? t : s;
}
function Ir(e) {
  var t = new Date(o.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function vt(e) {
  var t, s, a = [], r, n, i;
  if (!e._d) {
    for (r = Ir(e), e._w && e._a[$] == null && e._a[z] == null && Ar(e), e._dayOfYear != null && (i = le(e._a[x], r[x]), (e._dayOfYear > ge(i) || e._dayOfYear === 0) && (_(e)._overflowDayOfYear = !0), s = ke(i, 0, e._dayOfYear), e._a[z] = s.getUTCMonth(), e._a[$] = s.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = a[t] = r[t];
    for (; t < 7; t++)
      e._a[t] = a[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[b] === 24 && e._a[I] === 0 && e._a[Z] === 0 && e._a[re] === 0 && (e._nextDay = !0, e._a[b] = 0), e._d = (e._useUTC ? ke : ja).apply(
      null,
      a
    ), n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[b] = 24), e._w && typeof e._w.d != "undefined" && e._w.d !== n && (_(e).weekdayMismatch = !0);
  }
}
function Ar(e) {
  var t, s, a, r, n, i, h, c, y;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (n = 1, i = 4, s = le(
    t.GG,
    e._a[x],
    Me(M(), 1, 4).year
  ), a = le(t.W, 1), r = le(t.E, 1), (r < 1 || r > 7) && (c = !0)) : (n = e._locale._week.dow, i = e._locale._week.doy, y = Me(M(), n, i), s = le(t.gg, e._a[x], y.year), a = le(t.w, y.week), t.d != null ? (r = t.d, (r < 0 || r > 6) && (c = !0)) : t.e != null ? (r = t.e + n, (t.e < 0 || t.e > 6) && (c = !0)) : r = n), a < 1 || a > J(s, n, i) ? _(e)._overflowWeeks = !0 : c != null ? _(e)._overflowWeekday = !0 : (h = Ws(s, a, r, n, i), e._a[x] = h.year, e._dayOfYear = h.dayOfYear);
}
o.ISO_8601 = function() {
};
o.RFC_2822 = function() {
};
function Yt(e) {
  if (e._f === o.ISO_8601) {
    Ls(e);
    return;
  }
  if (e._f === o.RFC_2822) {
    Fs(e);
    return;
  }
  e._a = [], _(e).empty = !0;
  var t = "" + e._i, s, a, r, n, i, h = t.length, c = 0, y, Y;
  for (r = ps(e._f, e._locale).match(mt) || [], Y = r.length, s = 0; s < Y; s++)
    n = r[s], a = (t.match(xa(n, e)) || [])[0], a && (i = t.substr(0, t.indexOf(a)), i.length > 0 && _(e).unusedInput.push(i), t = t.slice(
      t.indexOf(a) + a.length
    ), c += a.length), ue[n] ? (a ? _(e).empty = !1 : _(e).unusedTokens.push(n), Wa(n, a, e)) : e._strict && !a && _(e).unusedTokens.push(n);
  _(e).charsLeftOver = h - c, t.length > 0 && _(e).unusedInput.push(t), e._a[b] <= 12 && _(e).bigHour === !0 && e._a[b] > 0 && (_(e).bigHour = void 0), _(e).parsedDateParts = e._a.slice(0), _(e).meridiem = e._meridiem, e._a[b] = Ur(
    e._locale,
    e._a[b],
    e._meridiem
  ), y = _(e).era, y !== null && (e._a[x] = e._locale.erasConvertYear(y, e._a[x])), vt(e), St(e);
}
function Ur(e, t, s) {
  var a;
  return s == null ? t : e.meridiemHour != null ? e.meridiemHour(t, s) : (e.isPM != null && (a = e.isPM(s), a && t < 12 && (t += 12), !a && t === 12 && (t = 0)), t);
}
function Hr(e) {
  var t, s, a, r, n, i, h = !1, c = e._f.length;
  if (c === 0) {
    _(e).invalidFormat = !0, e._d = new Date(NaN);
    return;
  }
  for (r = 0; r < c; r++)
    n = 0, i = !1, t = ft({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[r], Yt(t), ct(t) && (i = !0), n += _(t).charsLeftOver, n += _(t).unusedTokens.length * 10, _(t).score = n, h ? n < a && (a = n, s = t) : (a == null || n < a || i) && (a = n, s = t, i && (h = !0));
  ee(e, s || t);
}
function $r(e) {
  if (!e._d) {
    var t = yt(e._i), s = t.day === void 0 ? t.date : t.day;
    e._a = _s(
      [t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond],
      function(a) {
        return a && parseInt(a, 10);
      }
    ), vt(e);
  }
}
function Vr(e) {
  var t = new ve(St(Cs(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function Cs(e) {
  var t = e._i, s = e._f;
  return e._locale = e._locale || X(e._l), t === null || s === void 0 && t === "" ? He({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), U(t) ? new ve(St(t)) : (Se(t) ? e._d = t : A(s) ? Hr(e) : s ? Yt(e) : Gr(e), ct(e) || (e._d = null), e));
}
function Gr(e) {
  var t = e._i;
  P(t) ? e._d = new Date(o.now()) : Se(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Cr(e) : A(t) ? (e._a = _s(t.slice(0), function(s) {
    return parseInt(s, 10);
  }), vt(e)) : ne(t) ? $r(e) : Q(t) ? e._d = new Date(t) : o.createFromInputFallback(e);
}
function Is(e, t, s, a, r) {
  var n = {};
  return (t === !0 || t === !1) && (a = t, t = void 0), (s === !0 || s === !1) && (a = s, s = void 0), (ne(e) && dt(e) || A(e) && e.length === 0) && (e = void 0), n._isAMomentObject = !0, n._useUTC = n._isUTC = r, n._l = s, n._i = e, n._f = t, n._strict = a, Vr(n);
}
function M(e, t, s, a) {
  return Is(e, t, s, a, !1);
}
var jr = F(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = M.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : He();
  }
), qr = F(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = M.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : He();
  }
);
function As(e, t) {
  var s, a;
  if (t.length === 1 && A(t[0]) && (t = t[0]), !t.length)
    return M();
  for (s = t[0], a = 1; a < t.length; ++a)
    (!t[a].isValid() || t[a][e](s)) && (s = t[a]);
  return s;
}
function Br() {
  var e = [].slice.call(arguments, 0);
  return As("isBefore", e);
}
function zr() {
  var e = [].slice.call(arguments, 0);
  return As("isAfter", e);
}
var Zr = function() {
  return Date.now ? Date.now() : +new Date();
}, pe = [
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
function Jr(e) {
  var t, s = !1, a, r = pe.length;
  for (t in e)
    if (w(e, t) && !(O.call(pe, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (a = 0; a < r; ++a)
    if (e[pe[a]]) {
      if (s)
        return !1;
      parseFloat(e[pe[a]]) !== m(e[pe[a]]) && (s = !0);
    }
  return !0;
}
function Qr() {
  return this._isValid;
}
function Xr() {
  return H(NaN);
}
function Je(e) {
  var t = yt(e), s = t.year || 0, a = t.quarter || 0, r = t.month || 0, n = t.week || t.isoWeek || 0, i = t.day || 0, h = t.hour || 0, c = t.minute || 0, y = t.second || 0, Y = t.millisecond || 0;
  this._isValid = Jr(t), this._milliseconds = +Y + y * 1e3 + // 1000
  c * 6e4 + // 1000 * 60
  h * 1e3 * 60 * 60, this._days = +i + n * 7, this._months = +r + a * 3 + s * 12, this._data = {}, this._locale = X(), this._bubble();
}
function Re(e) {
  return e instanceof Je;
}
function lt(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Kr(e, t, s) {
  var a = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), n = 0, i;
  for (i = 0; i < a; i++)
    (s && e[i] !== t[i] || !s && m(e[i]) !== m(t[i])) && n++;
  return n + r;
}
function Us(e, t) {
  d(e, 0, 0, function() {
    var s = this.utcOffset(), a = "+";
    return s < 0 && (s = -s, a = "-"), a + V(~~(s / 60), 2) + t + V(~~s % 60, 2);
  });
}
Us("Z", ":");
Us("ZZ", "");
u("Z", Be);
u("ZZ", Be);
k(["Z", "ZZ"], function(e, t, s) {
  s._useUTC = !0, s._tzm = Ot(Be, e);
});
var en = /([\+\-]|\d\d)/gi;
function Ot(e, t) {
  var s = (t || "").match(e), a, r, n;
  return s === null ? null : (a = s[s.length - 1] || [], r = (a + "").match(en) || ["-", 0, 0], n = +(r[1] * 60) + m(r[2]), n === 0 ? 0 : r[0] === "+" ? n : -n);
}
function bt(e, t) {
  var s, a;
  return t._isUTC ? (s = t.clone(), a = (U(e) || Se(e) ? e.valueOf() : M(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + a), o.updateOffset(s, !1), s) : M(e).local();
}
function ht(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
o.updateOffset = function() {
};
function tn(e, t, s) {
  var a = this._offset || 0, r;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Ot(Be, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !s && (e = e * 60);
    return !this._isUTC && t && (r = ht(this)), this._offset = e, this._isUTC = !0, r != null && this.add(r, "m"), a !== e && (!t || this._changeInProgress ? Vs(
      this,
      H(e - a, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, o.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? a : ht(this);
}
function sn(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function an(e) {
  return this.utcOffset(0, e);
}
function rn(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(ht(this), "m")), this;
}
function nn() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Ot(Oa, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function on(e) {
  return this.isValid() ? (e = e ? M(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function ln() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function hn() {
  if (!P(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return ft(e, this), e = Cs(e), e._a ? (t = e._isUTC ? G(e._a) : M(e._a), this._isDSTShifted = this.isValid() && Kr(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function un() {
  return this.isValid() ? !this._isUTC : !1;
}
function dn() {
  return this.isValid() ? this._isUTC : !1;
}
function Hs() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var cn = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, fn = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function H(e, t) {
  var s = e, a = null, r, n, i;
  return Re(e) ? s = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : Q(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (a = cn.exec(e)) ? (r = a[1] === "-" ? -1 : 1, s = {
    y: 0,
    d: m(a[$]) * r,
    h: m(a[b]) * r,
    m: m(a[I]) * r,
    s: m(a[Z]) * r,
    ms: m(lt(a[re] * 1e3)) * r
    // the millisecond decimal point is included in the match
  }) : (a = fn.exec(e)) ? (r = a[1] === "-" ? -1 : 1, s = {
    y: ae(a[2], r),
    M: ae(a[3], r),
    w: ae(a[4], r),
    d: ae(a[5], r),
    h: ae(a[6], r),
    m: ae(a[7], r),
    s: ae(a[8], r)
  }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (i = _n(
    M(s.from),
    M(s.to)
  ), s = {}, s.ms = i.milliseconds, s.M = i.months), n = new Je(s), Re(e) && w(e, "_locale") && (n._locale = e._locale), Re(e) && w(e, "_isValid") && (n._isValid = e._isValid), n;
}
H.fn = Je.prototype;
H.invalid = Xr;
function ae(e, t) {
  var s = e && parseFloat(e.replace(",", "."));
  return (isNaN(s) ? 0 : s) * t;
}
function ds(e, t) {
  var s = {};
  return s.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(s.months, "M").isAfter(t) && --s.months, s.milliseconds = +t - +e.clone().add(s.months, "M"), s;
}
function _n(e, t) {
  var s;
  return e.isValid() && t.isValid() ? (t = bt(t, e), e.isBefore(t) ? s = ds(e, t) : (s = ds(t, e), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 };
}
function $s(e, t) {
  return function(s, a) {
    var r, n;
    return a !== null && !isNaN(+a) && (ys(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), n = s, s = a, a = n), r = H(s, a), Vs(this, r, e), this;
  };
}
function Vs(e, t, s, a) {
  var r = t._milliseconds, n = lt(t._days), i = lt(t._months);
  e.isValid() && (a = a == null ? !0 : a, i && Os(e, Le(e, "Month") + i * s), n && gs(e, "Date", Le(e, "Date") + n * s), r && e._d.setTime(e._d.valueOf() + r * s), a && o.updateOffset(e, n || i));
}
var mn = $s(1, "add"), yn = $s(-1, "subtract");
function Gs(e) {
  return typeof e == "string" || e instanceof String;
}
function pn(e) {
  return U(e) || Se(e) || Gs(e) || Q(e) || gn(e) || wn(e) || e === null || e === void 0;
}
function wn(e) {
  var t = ne(e) && !dt(e), s = !1, a = [
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
function gn(e) {
  var t = A(e), s = !1;
  return t && (s = e.filter(function(a) {
    return !Q(a) && Gs(e);
  }).length === 0), t && s;
}
function kn(e) {
  var t = ne(e) && !dt(e), s = !1, a = [
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
function Mn(e, t) {
  var s = e.diff(t, "days", !0);
  return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse";
}
function Dn(e, t) {
  arguments.length === 1 && (arguments[0] ? pn(arguments[0]) ? (e = arguments[0], t = void 0) : kn(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var s = e || M(), a = bt(s, this).startOf("day"), r = o.calendarFormat(this, a) || "sameElse", n = t && (j(t[r]) ? t[r].call(this, s) : t[r]);
  return this.format(
    n || this.localeData().calendar(r, this, M(s))
  );
}
function Sn() {
  return new ve(this);
}
function vn(e, t) {
  var s = U(e) ? e : M(e);
  return this.isValid() && s.isValid() ? (t = C(t) || "millisecond", t === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Yn(e, t) {
  var s = U(e) ? e : M(e);
  return this.isValid() && s.isValid() ? (t = C(t) || "millisecond", t === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(t).valueOf() < s.valueOf()) : !1;
}
function On(e, t, s, a) {
  var r = U(e) ? e : M(e), n = U(t) ? t : M(t);
  return this.isValid() && r.isValid() && n.isValid() ? (a = a || "()", (a[0] === "(" ? this.isAfter(r, s) : !this.isBefore(r, s)) && (a[1] === ")" ? this.isBefore(n, s) : !this.isAfter(n, s))) : !1;
}
function bn(e, t) {
  var s = U(e) ? e : M(e), a;
  return this.isValid() && s.isValid() ? (t = C(t) || "millisecond", t === "millisecond" ? this.valueOf() === s.valueOf() : (a = s.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf())) : !1;
}
function xn(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Tn(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Wn(e, t, s) {
  var a, r, n;
  if (!this.isValid())
    return NaN;
  if (a = bt(e, this), !a.isValid())
    return NaN;
  switch (r = (a.utcOffset() - this.utcOffset()) * 6e4, t = C(t), t) {
    case "year":
      n = Ne(this, a) / 12;
      break;
    case "month":
      n = Ne(this, a);
      break;
    case "quarter":
      n = Ne(this, a) / 3;
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
  return s ? n : L(n);
}
function Ne(e, t) {
  if (e.date() < t.date())
    return -Ne(t, e);
  var s = (t.year() - e.year()) * 12 + (t.month() - e.month()), a = e.clone().add(s, "months"), r, n;
  return t - a < 0 ? (r = e.clone().add(s - 1, "months"), n = (t - a) / (a - r)) : (r = e.clone().add(s + 1, "months"), n = (t - a) / (r - a)), -(s + n) || 0;
}
o.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
o.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function En() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Pn(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, s = t ? this.clone().utc() : this;
  return s.year() < 0 || s.year() > 9999 ? Pe(
    s,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : j(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Pe(s, "Z")) : Pe(
    s,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function Rn() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", s, a, r, n;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), s = "[" + e + '("]', a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", r = "-MM-DD[T]HH:mm:ss.SSS", n = t + '[")]', this.format(s + a + r + n);
}
function Nn(e) {
  e || (e = this.isUtc() ? o.defaultFormatUtc : o.defaultFormat);
  var t = Pe(this, e);
  return this.localeData().postformat(t);
}
function Ln(e, t) {
  return this.isValid() && (U(e) && e.isValid() || M(e).isValid()) ? H({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Fn(e) {
  return this.from(M(), e);
}
function Cn(e, t) {
  return this.isValid() && (U(e) && e.isValid() || M(e).isValid()) ? H({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function In(e) {
  return this.to(M(), e);
}
function js(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = X(e), t != null && (this._locale = t), this);
}
var qs = F(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Bs() {
  return this._locale;
}
var Ie = 1e3, de = 60 * Ie, Ae = 60 * de, zs = (365 * 400 + 97) * 24 * Ae;
function ce(e, t) {
  return (e % t + t) % t;
}
function Zs(e, t, s) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, s) - zs : new Date(e, t, s).valueOf();
}
function Js(e, t, s) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - zs : Date.UTC(e, t, s);
}
function An(e) {
  var t, s;
  if (e = C(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? Js : Zs, e) {
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
        Ae
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= ce(t, de);
      break;
    case "second":
      t = this._d.valueOf(), t -= ce(t, Ie);
      break;
  }
  return this._d.setTime(t), o.updateOffset(this, !0), this;
}
function Un(e) {
  var t, s;
  if (e = C(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? Js : Zs, e) {
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
      t = this._d.valueOf(), t += Ae - ce(
        t + (this._isUTC ? 0 : this.utcOffset() * de),
        Ae
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += de - ce(t, de) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Ie - ce(t, Ie) - 1;
      break;
  }
  return this._d.setTime(t), o.updateOffset(this, !0), this;
}
function Hn() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function $n() {
  return Math.floor(this.valueOf() / 1e3);
}
function Vn() {
  return new Date(this.valueOf());
}
function Gn() {
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
function jn() {
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
function qn() {
  return this.isValid() ? this.toISOString() : null;
}
function Bn() {
  return ct(this);
}
function zn() {
  return ee({}, _(this));
}
function Zn() {
  return _(this).overflow;
}
function Jn() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
d("N", 0, 0, "eraAbbr");
d("NN", 0, 0, "eraAbbr");
d("NNN", 0, 0, "eraAbbr");
d("NNNN", 0, 0, "eraName");
d("NNNNN", 0, 0, "eraNarrow");
d("y", ["y", 1], "yo", "eraYear");
d("y", ["yy", 2], 0, "eraYear");
d("y", ["yyy", 3], 0, "eraYear");
d("y", ["yyyy", 4], 0, "eraYear");
u("N", xt);
u("NN", xt);
u("NNN", xt);
u("NNNN", oi);
u("NNNNN", li);
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
u("yo", hi);
k(["y", "yy", "yyy", "yyyy"], x);
k(["yo"], function(e, t, s, a) {
  var r;
  s._locale._eraYearOrdinalRegex && (r = e.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? t[x] = s._locale.eraYearOrdinalParse(e, r) : t[x] = parseInt(e, 10);
});
function Qn(e, t) {
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
function Xn(e, t, s) {
  var a, r, n = this.eras(), i, h, c;
  for (e = e.toUpperCase(), a = 0, r = n.length; a < r; ++a)
    if (i = n[a].name.toUpperCase(), h = n[a].abbr.toUpperCase(), c = n[a].narrow.toUpperCase(), s)
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
          if (c === e)
            return n[a];
          break;
      }
    else if ([i, h, c].indexOf(e) >= 0)
      return n[a];
}
function Kn(e, t) {
  var s = e.since <= e.until ? 1 : -1;
  return t === void 0 ? o(e.since).year() : o(e.since).year() + (t - e.offset) * s;
}
function ei() {
  var e, t, s, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), a[e].since <= s && s <= a[e].until || a[e].until <= s && s <= a[e].since)
      return a[e].name;
  return "";
}
function ti() {
  var e, t, s, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), a[e].since <= s && s <= a[e].until || a[e].until <= s && s <= a[e].since)
      return a[e].narrow;
  return "";
}
function si() {
  var e, t, s, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), a[e].since <= s && s <= a[e].until || a[e].until <= s && s <= a[e].since)
      return a[e].abbr;
  return "";
}
function ai() {
  var e, t, s, a, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = r[e].since <= r[e].until ? 1 : -1, a = this.clone().startOf("day").valueOf(), r[e].since <= a && a <= r[e].until || r[e].until <= a && a <= r[e].since)
      return (this.year() - o(r[e].since).year()) * s + r[e].offset;
  return this.year();
}
function ri(e) {
  return w(this, "_erasNameRegex") || Tt.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function ni(e) {
  return w(this, "_erasAbbrRegex") || Tt.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function ii(e) {
  return w(this, "_erasNarrowRegex") || Tt.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function xt(e, t) {
  return t.erasAbbrRegex(e);
}
function oi(e, t) {
  return t.erasNameRegex(e);
}
function li(e, t) {
  return t.erasNarrowRegex(e);
}
function hi(e, t) {
  return t._eraYearOrdinalRegex || _e;
}
function Tt() {
  var e = [], t = [], s = [], a = [], r, n, i = this.eras();
  for (r = 0, n = i.length; r < n; ++r)
    t.push(R(i[r].name)), e.push(R(i[r].abbr)), s.push(R(i[r].narrow)), a.push(R(i[r].name)), a.push(R(i[r].abbr)), a.push(R(i[r].narrow));
  this._erasRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  );
}
d(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
d(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Qe(e, t) {
  d(0, [e, e.length], 0, t);
}
Qe("gggg", "weekYear");
Qe("ggggg", "weekYear");
Qe("GGGG", "isoWeekYear");
Qe("GGGGG", "isoWeekYear");
T("weekYear", "gg");
T("isoWeekYear", "GG");
W("weekYear", 1);
W("isoWeekYear", 1);
u("G", qe);
u("g", qe);
u("GG", D, N);
u("gg", D, N);
u("GGGG", wt, pt);
u("gggg", wt, pt);
u("GGGGG", je, Ve);
u("ggggg", je, Ve);
Oe(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, s, a) {
    t[a.substr(0, 2)] = m(e);
  }
);
Oe(["gg", "GG"], function(e, t, s, a) {
  t[a] = o.parseTwoDigitYear(e);
});
function ui(e) {
  return Qs.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function di(e) {
  return Qs.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function ci() {
  return J(this.year(), 1, 4);
}
function fi() {
  return J(this.isoWeekYear(), 1, 4);
}
function _i() {
  var e = this.localeData()._week;
  return J(this.year(), e.dow, e.doy);
}
function mi() {
  var e = this.localeData()._week;
  return J(this.weekYear(), e.dow, e.doy);
}
function Qs(e, t, s, a, r) {
  var n;
  return e == null ? Me(this, a, r).year : (n = J(e, a, r), t > n && (t = n), yi.call(this, e, t, s, a, r));
}
function yi(e, t, s, a, r) {
  var n = Ws(e, t, s, a, r), i = ke(n.year, 0, n.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
d("Q", 0, "Qo", "quarter");
T("quarter", "Q");
W("quarter", 7);
u("Q", ks);
k("Q", function(e, t) {
  t[z] = (m(e) - 1) * 3;
});
function pi(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
d("D", ["DD", 2], "Do", "date");
T("date", "D");
W("date", 9);
u("D", D);
u("DD", D, N);
u("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
k(["D", "DD"], $);
k("Do", function(e, t) {
  t[$] = m(e.match(D)[0]);
});
var Xs = fe("Date", !0);
d("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
T("dayOfYear", "DDD");
W("dayOfYear", 4);
u("DDD", Ge);
u("DDDD", Ms);
k(["DDD", "DDDD"], function(e, t, s) {
  s._dayOfYear = m(e);
});
function wi(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
d("m", ["mm", 2], 0, "minute");
T("minute", "m");
W("minute", 14);
u("m", D);
u("mm", D, N);
k(["m", "mm"], I);
var gi = fe("Minutes", !1);
d("s", ["ss", 2], 0, "second");
T("second", "s");
W("second", 15);
u("s", D);
u("ss", D, N);
k(["s", "ss"], Z);
var ki = fe("Seconds", !1);
d("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
d(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
d(0, ["SSS", 3], 0, "millisecond");
d(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
d(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
d(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
d(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
d(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
d(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
T("millisecond", "ms");
W("millisecond", 16);
u("S", Ge, ks);
u("SS", Ge, N);
u("SSS", Ge, Ms);
var te, Ks;
for (te = "SSSS"; te.length <= 9; te += "S")
  u(te, _e);
function Mi(e, t) {
  t[re] = m(("0." + e) * 1e3);
}
for (te = "S"; te.length <= 9; te += "S")
  k(te, Mi);
Ks = fe("Milliseconds", !1);
d("z", 0, 0, "zoneAbbr");
d("zz", 0, 0, "zoneName");
function Di() {
  return this._isUTC ? "UTC" : "";
}
function Si() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var l = ve.prototype;
l.add = mn;
l.calendar = Dn;
l.clone = Sn;
l.diff = Wn;
l.endOf = Un;
l.format = Nn;
l.from = Ln;
l.fromNow = Fn;
l.to = Cn;
l.toNow = In;
l.get = va;
l.invalidAt = Zn;
l.isAfter = vn;
l.isBefore = Yn;
l.isBetween = On;
l.isSame = bn;
l.isSameOrAfter = xn;
l.isSameOrBefore = Tn;
l.isValid = Bn;
l.lang = qs;
l.locale = js;
l.localeData = Bs;
l.max = qr;
l.min = jr;
l.parsingFlags = zn;
l.set = Ya;
l.startOf = An;
l.subtract = yn;
l.toArray = Gn;
l.toObject = jn;
l.toDate = Vn;
l.toISOString = Pn;
l.inspect = Rn;
typeof Symbol != "undefined" && Symbol.for != null && (l[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
l.toJSON = qn;
l.toString = En;
l.unix = $n;
l.valueOf = Hn;
l.creationData = Jn;
l.eraName = ei;
l.eraNarrow = ti;
l.eraAbbr = si;
l.eraYear = ai;
l.year = Ts;
l.isLeapYear = Ga;
l.weekYear = ui;
l.isoWeekYear = di;
l.quarter = l.quarters = pi;
l.month = bs;
l.daysInMonth = Ha;
l.week = l.weeks = Ja;
l.isoWeek = l.isoWeeks = Qa;
l.weeksInYear = _i;
l.weeksInWeekYear = mi;
l.isoWeeksInYear = ci;
l.isoWeeksInISOWeekYear = fi;
l.date = Xs;
l.day = l.days = ur;
l.weekday = dr;
l.isoWeekday = cr;
l.dayOfYear = wi;
l.hour = l.hours = gr;
l.minute = l.minutes = gi;
l.second = l.seconds = ki;
l.millisecond = l.milliseconds = Ks;
l.utcOffset = tn;
l.utc = an;
l.local = rn;
l.parseZone = nn;
l.hasAlignedHourOffset = on;
l.isDST = ln;
l.isLocal = un;
l.isUtcOffset = dn;
l.isUtc = Hs;
l.isUTC = Hs;
l.zoneAbbr = Di;
l.zoneName = Si;
l.dates = F(
  "dates accessor is deprecated. Use date instead.",
  Xs
);
l.months = F(
  "months accessor is deprecated. Use month instead",
  bs
);
l.years = F(
  "years accessor is deprecated. Use year instead",
  Ts
);
l.zone = F(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  sn
);
l.isDSTShifted = F(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  hn
);
function vi(e) {
  return M(e * 1e3);
}
function Yi() {
  return M.apply(null, arguments).parseZone();
}
function ea(e) {
  return e;
}
var g = _t.prototype;
g.calendar = ua;
g.longDateFormat = _a;
g.invalidDate = ya;
g.ordinal = ga;
g.preparse = ea;
g.postformat = ea;
g.relativeTime = Ma;
g.pastFuture = Da;
g.set = la;
g.eras = Qn;
g.erasParse = Xn;
g.erasConvertYear = Kn;
g.erasAbbrRegex = ni;
g.erasNameRegex = ri;
g.erasNarrowRegex = ii;
g.months = Ca;
g.monthsShort = Ia;
g.monthsParse = Ua;
g.monthsRegex = Va;
g.monthsShortRegex = $a;
g.week = qa;
g.firstDayOfYear = Za;
g.firstDayOfWeek = za;
g.weekdays = nr;
g.weekdaysMin = or;
g.weekdaysShort = ir;
g.weekdaysParse = hr;
g.weekdaysRegex = fr;
g.weekdaysShortRegex = _r;
g.weekdaysMinRegex = mr;
g.isPM = pr;
g.meridiem = kr;
function Ue(e, t, s, a) {
  var r = X(), n = G().set(a, t);
  return r[s](n, e);
}
function ta(e, t, s) {
  if (Q(e) && (t = e, e = void 0), e = e || "", t != null)
    return Ue(e, t, s, "month");
  var a, r = [];
  for (a = 0; a < 12; a++)
    r[a] = Ue(e, a, s, "month");
  return r;
}
function Wt(e, t, s, a) {
  typeof e == "boolean" ? (Q(t) && (s = t, t = void 0), t = t || "") : (t = e, s = t, e = !1, Q(t) && (s = t, t = void 0), t = t || "");
  var r = X(), n = e ? r._week.dow : 0, i, h = [];
  if (s != null)
    return Ue(t, (s + n) % 7, a, "day");
  for (i = 0; i < 7; i++)
    h[i] = Ue(t, (i + n) % 7, a, "day");
  return h;
}
function Oi(e, t) {
  return ta(e, t, "months");
}
function bi(e, t) {
  return ta(e, t, "monthsShort");
}
function xi(e, t, s) {
  return Wt(e, t, s, "weekdays");
}
function Ti(e, t, s) {
  return Wt(e, t, s, "weekdaysShort");
}
function Wi(e, t, s) {
  return Wt(e, t, s, "weekdaysMin");
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
function Ei() {
  var e = this._data;
  return this._milliseconds = q(this._milliseconds), this._days = q(this._days), this._months = q(this._months), e.milliseconds = q(e.milliseconds), e.seconds = q(e.seconds), e.minutes = q(e.minutes), e.hours = q(e.hours), e.months = q(e.months), e.years = q(e.years), this;
}
function sa(e, t, s, a) {
  var r = H(t, s);
  return e._milliseconds += a * r._milliseconds, e._days += a * r._days, e._months += a * r._months, e._bubble();
}
function Pi(e, t) {
  return sa(this, e, t, 1);
}
function Ri(e, t) {
  return sa(this, e, t, -1);
}
function cs(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Ni() {
  var e = this._milliseconds, t = this._days, s = this._months, a = this._data, r, n, i, h, c;
  return e >= 0 && t >= 0 && s >= 0 || e <= 0 && t <= 0 && s <= 0 || (e += cs(ut(s) + t) * 864e5, t = 0, s = 0), a.milliseconds = e % 1e3, r = L(e / 1e3), a.seconds = r % 60, n = L(r / 60), a.minutes = n % 60, i = L(n / 60), a.hours = i % 24, t += L(i / 24), c = L(aa(t)), s += c, t -= cs(ut(c)), h = L(s / 12), s %= 12, a.days = t, a.months = s, a.years = h, this;
}
function aa(e) {
  return e * 4800 / 146097;
}
function ut(e) {
  return e * 146097 / 4800;
}
function Li(e) {
  if (!this.isValid())
    return NaN;
  var t, s, a = this._milliseconds;
  if (e = C(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + a / 864e5, s = this._months + aa(t), e) {
      case "month":
        return s;
      case "quarter":
        return s / 3;
      case "year":
        return s / 12;
    }
  else
    switch (t = this._days + Math.round(ut(this._months)), e) {
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
function Fi() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + m(this._months / 12) * 31536e6 : NaN;
}
function K(e) {
  return function() {
    return this.as(e);
  };
}
var Ci = K("ms"), Ii = K("s"), Ai = K("m"), Ui = K("h"), Hi = K("d"), $i = K("w"), Vi = K("M"), Gi = K("Q"), ji = K("y");
function qi() {
  return H(this);
}
function Bi(e) {
  return e = C(e), this.isValid() ? this[e + "s"]() : NaN;
}
function ie(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var zi = ie("milliseconds"), Zi = ie("seconds"), Ji = ie("minutes"), Qi = ie("hours"), Xi = ie("days"), Ki = ie("months"), eo = ie("years");
function to() {
  return L(this.days() / 7);
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
function so(e, t, s, a, r) {
  return r.relativeTime(t || 1, !!s, e, a);
}
function ao(e, t, s, a) {
  var r = H(e).abs(), n = B(r.as("s")), i = B(r.as("m")), h = B(r.as("h")), c = B(r.as("d")), y = B(r.as("M")), Y = B(r.as("w")), E = B(r.as("y")), S = n <= s.ss && ["s", n] || n < s.s && ["ss", n] || i <= 1 && ["m"] || i < s.m && ["mm", i] || h <= 1 && ["h"] || h < s.h && ["hh", h] || c <= 1 && ["d"] || c < s.d && ["dd", c];
  return s.w != null && (S = S || Y <= 1 && ["w"] || Y < s.w && ["ww", Y]), S = S || y <= 1 && ["M"] || y < s.M && ["MM", y] || E <= 1 && ["y"] || ["yy", E], S[2] = t, S[3] = +e > 0, S[4] = a, so.apply(null, S);
}
function ro(e) {
  return e === void 0 ? B : typeof e == "function" ? (B = e, !0) : !1;
}
function no(e, t) {
  return he[e] === void 0 ? !1 : t === void 0 ? he[e] : (he[e] = t, e === "s" && (he.ss = t - 1), !0);
}
function io(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var s = !1, a = he, r, n;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (s = e), typeof t == "object" && (a = Object.assign({}, he, t), t.s != null && t.ss == null && (a.ss = t.s - 1)), r = this.localeData(), n = ao(this, !s, a, r), s && (n = r.pastFuture(+this, n)), r.postformat(n);
}
var at = Math.abs;
function oe(e) {
  return (e > 0) - (e < 0) || +e;
}
function Xe() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = at(this._milliseconds) / 1e3, t = at(this._days), s = at(this._months), a, r, n, i, h = this.asSeconds(), c, y, Y, E;
  return h ? (a = L(e / 60), r = L(a / 60), e %= 60, a %= 60, n = L(s / 12), s %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", c = h < 0 ? "-" : "", y = oe(this._months) !== oe(h) ? "-" : "", Y = oe(this._days) !== oe(h) ? "-" : "", E = oe(this._milliseconds) !== oe(h) ? "-" : "", c + "P" + (n ? y + n + "Y" : "") + (s ? y + s + "M" : "") + (t ? Y + t + "D" : "") + (r || a || e ? "T" : "") + (r ? E + r + "H" : "") + (a ? E + a + "M" : "") + (e ? E + i + "S" : "")) : "P0D";
}
var p = Je.prototype;
p.isValid = Qr;
p.abs = Ei;
p.add = Pi;
p.subtract = Ri;
p.as = Li;
p.asMilliseconds = Ci;
p.asSeconds = Ii;
p.asMinutes = Ai;
p.asHours = Ui;
p.asDays = Hi;
p.asWeeks = $i;
p.asMonths = Vi;
p.asQuarters = Gi;
p.asYears = ji;
p.valueOf = Fi;
p._bubble = Ni;
p.clone = qi;
p.get = Bi;
p.milliseconds = zi;
p.seconds = Zi;
p.minutes = Ji;
p.hours = Qi;
p.days = Xi;
p.weeks = to;
p.months = Ki;
p.years = eo;
p.humanize = io;
p.toISOString = Xe;
p.toString = Xe;
p.toJSON = Xe;
p.locale = js;
p.localeData = Bs;
p.toIsoString = F(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Xe
);
p.lang = qs;
d("X", 0, 0, "unix");
d("x", 0, 0, "valueOf");
u("x", qe);
u("X", ba);
k("X", function(e, t, s) {
  s._d = new Date(parseFloat(e) * 1e3);
});
k("x", function(e, t, s) {
  s._d = new Date(m(e));
});
//! moment.js
o.version = "2.29.4";
ia(M);
o.fn = l;
o.min = Br;
o.max = zr;
o.now = Zr;
o.utc = G;
o.unix = vi;
o.months = Oi;
o.isDate = Se;
o.locale = se;
o.invalid = He;
o.duration = H;
o.isMoment = U;
o.weekdays = xi;
o.parseZone = Yi;
o.localeData = X;
o.isDuration = Re;
o.monthsShort = bi;
o.weekdaysMin = Wi;
o.defineLocale = Dt;
o.updateLocale = vr;
o.locales = Yr;
o.weekdaysShort = Ti;
o.normalizeUnits = C;
o.relativeTimeRounding = ro;
o.relativeTimeThreshold = no;
o.calendarFormat = Mn;
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
class oo {
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
    var t, s, a, r, n, i, h, c, y, Y, E;
    this.container.innerHTML += `<div class="calendarify">
    <div class="quick-actions ${this.quickActions ? "" : "d-none"}">
      <button data-action="today">${(a = (s = (t = this.locale.lang) == null ? void 0 : t.ui) == null ? void 0 : s.quickActions) == null ? void 0 : a.today}</button>
      <button data-action="tomorrow">${(i = (n = (r = this.locale.lang) == null ? void 0 : r.ui) == null ? void 0 : n.quickActions) == null ? void 0 : i.tomorrow}</button>
      <button data-action="in-2-days">${(y = (c = (h = this.locale.lang) == null ? void 0 : h.ui) == null ? void 0 : c.quickActions) == null ? void 0 : y.inTwoDays}</button>
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
      ${(E = (Y = this.locale.lang) == null ? void 0 : Y.weekdays) == null ? void 0 : E.map((S) => `<li>${S.slice(0, 3)}</li>`).join("")}
      </ul>
      <ul class="dates-wrapper wrapper">
          ${this.dates.map((S) => `<li><button ${S.disabled ? "disabled" : ""} type="button" class="date-button ${this.getHolidayClass({ date: S.date, nowMonth: this.nowMonth })} ${this.nowDay == String(S.date) ? "active" : ""}">${S.date}</button></li>`).join("")}
      </ul>
      <ul class="months-wrapper wrapper d-none">
        ${this.months.map((S, be) => {
      var me;
      const xe = (me = this.locale.lang) == null ? void 0 : me.months[be].slice(0, 3), Te = o().format("M");
      return `<li><button class="${S == Te ? "active" : ""}" data-date="${S}" type="button">${xe}</button></li>`;
    }).join("")}
      </ul>
      <ul class="years-wrapper wrapper d-none">
        ${this.years.map((S) => `<li><button data-date="${S}" type="button">${S}</button></li>`).join("")}
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
class ho {
  constructor(t, s) {
    f(this, "options");
    f(this, "locale");
    f(this, "startDate");
    f(this, "accentColor", "#0090FC");
    f(this, "isDark", !1);
    f(this, "zIndex", 1e3);
    f(this, "customClass", []);
    f(this, "quickActions", !0);
    f(this, "onChange");
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
    f(this, "_isSetted", !1);
    var r, n, i, h, c, y, Y, E, S, be, xe, Te, me, Et, Pt, Rt, Nt, Lt, Ft, Ct, It, At, Ut, Ht, $t, Vt, Gt, jt, qt, Bt, zt, Zt, Jt, Qt, Xt, Kt, es, ts, ss, as, rs, ns, is, os;
    const a = document.documentElement;
    this.options = Object.assign(this, s), a.style.setProperty("--accentColor", (r = this.options.accentColor) != null ? r : this.accentColor), this.onChange = this.options.onChange, this._inputSelector = t, this.locale = {
      format: (h = (i = (n = this.options) == null ? void 0 : n.locale) == null ? void 0 : i.format) != null ? h : this._systemFormat,
      lang: {
        code: (E = (Y = (y = (c = this.options) == null ? void 0 : c.locale) == null ? void 0 : y.lang) == null ? void 0 : Y.code) != null ? E : "en",
        ui: {
          quickActions: {
            today: (Et = (me = (Te = (xe = (be = (S = this.options) == null ? void 0 : S.locale) == null ? void 0 : be.lang) == null ? void 0 : xe.ui) == null ? void 0 : Te.quickActions) == null ? void 0 : me.today) != null ? Et : "Today",
            tomorrow: (Ct = (Ft = (Lt = (Nt = (Rt = (Pt = this.options) == null ? void 0 : Pt.locale) == null ? void 0 : Rt.lang) == null ? void 0 : Nt.ui) == null ? void 0 : Lt.quickActions) == null ? void 0 : Ft.tomorrow) != null ? Ct : "Tomorrow",
            inTwoDays: (Vt = ($t = (Ht = (Ut = (At = (It = this.options) == null ? void 0 : It.locale) == null ? void 0 : At.lang) == null ? void 0 : Ut.ui) == null ? void 0 : Ht.quickActions) == null ? void 0 : $t.inTwoDays) != null ? Vt : "In 2 Days"
          }
        },
        months: (Bt = (qt = (jt = (Gt = this.options) == null ? void 0 : Gt.locale) == null ? void 0 : jt.lang) == null ? void 0 : qt.months) != null ? Bt : o.months(),
        weekdays: (Qt = (Jt = (Zt = (zt = this.options) == null ? void 0 : zt.locale) == null ? void 0 : Zt.lang) == null ? void 0 : Jt.weekdays) != null ? Qt : o.weekdays()
      }
    }, this.startDate = (Xt = this.options.startDate) != null ? Xt : o().format(this._systemFormat), this._date = (Kt = this.options.startDate) != null ? Kt : this.startDate, this._months = [];
    for (let Ke = 0; Ke < 12; Ke++)
      this._months.push(String(Ke + 1));
    this._nowMonth = o(this._date).format("YYYY-MM"), this._nowDay = o(this._date).format("D"), this._nowYear = o(this._date).format("YYYY"), this._outputDate = o(this._date).format(this.locale.format), this._dates = [], this.loopDaysMonths(), this._helpers = new oo({
      container: (es = document.querySelector(t)) == null ? void 0 : es.parentElement,
      dates: this._dates,
      months: this._months,
      years: this._years,
      nowMonth: this._nowMonth,
      nowDay: this._nowDay,
      quickActions: this.options.quickActions,
      locale: this.options.locale
    }), this._helpers.render(), o.updateLocale((as = (ss = (ts = this.options) == null ? void 0 : ts.locale) == null ? void 0 : ss.lang) == null ? void 0 : as.code, { months: (ns = (rs = this.options.locale) == null ? void 0 : rs.lang) == null ? void 0 : ns.months, weekdays: (os = (is = this.options.locale) == null ? void 0 : is.lang) == null ? void 0 : os.weekdays }), this._container = document.querySelector(".calendarify"), this._datepickerInput = document.querySelector(t), this._datesWrapperEl = this._container.querySelector(".dates-wrapper"), this._monthsWrapperEl = this._container.querySelector(".months-wrapper"), this._yearsWrapperEl = this._container.querySelector(".years-wrapper"), this._expandButton = this._container.querySelector('.navigation button[data-action="expand"]'), this._dateButtons = this._container.querySelectorAll(".date-button"), this._prevButton = this._container.querySelector('.navigation button[data-action="prev"]'), this._nextButton = this._container.querySelector('.navigation button[data-action="next"]'), this._calendarWrapper = this._container.querySelector(".calendar"), this._quickButtons = this._container.querySelectorAll(".quick-actions button"), this._wrapperEls = this._calendarWrapper.querySelectorAll(".wrapper:not(:last-child, :nth-child(3))"), this._yearRangeButton = this._container.querySelector('.navigation button[data-action="year-range"]');
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
    var s, a, r;
    (s = this.options) != null && s.isDark && this._container.setAttribute("data-theme", "dark"), (a = this.options) != null && a.zIndex && this._container.style.setProperty("--z-index", String(this.options.zIndex)), (r = this.options) != null && r.customClass && this.customClass.forEach((n) => this._container.classList.add(n));
    const t = this._datepickerInput.parentElement;
    t.style.position = "relative", this._container.style.top = `${t.clientHeight + 12}px`;
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
        this._date = this.startDate;
        break;
      case "tomorrow":
        this._date = o(this.startDate).add(1, "days").format(this._systemFormat);
        break;
      default:
        this._date = o(this.startDate).add(2, "days").format(this._systemFormat);
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
    this.resetUI();
    const { onChange: s, _wasExecuted: a, _isSetted: r } = this;
    s && a && r && (s(t), this._isSetted = !1);
  }
  resetUI() {
    this._monthsWrapperEl.classList.add("d-none"), this._yearsWrapperEl.classList.add("d-none"), this._wrapperEls.forEach((t) => t.classList.remove("d-none")), this._isExpanded = !1, this._monthsWrapperEl.classList.add("d-none"), this._yearsWrapperEl.classList.add("d-none"), this._expandButton.classList.remove("d-none"), this._yearRangeButton.classList.add("d-none"), this.changeState();
  }
  changeState() {
    var a, r;
    this._dates = [], this._nowMonth = o(this._date).format("YYYY-MM"), this._nowDay = o(this._date).format("D"), this.loopDaysMonths();
    const t = o(this._nowMonth).format("M"), s = o(this._nowMonth).format("YYYY");
    switch (this._expandButton.textContent = `${(a = this.locale.lang) == null ? void 0 : a.months[+t - 1]} ${s}`, this._expandedMode) {
      case "years":
        this._yearRangeButton.textContent = `${this._years[0]} - ${this._years[this._years.length - 1]}`;
        break;
      default:
        this._yearRangeButton.textContent = o(this._date).format("YYYY");
        break;
    }
    if (this.renderDates(), this._dateButtons = this._datesWrapperEl.querySelectorAll(".date-button"), this._dateButtons.forEach((n) => n.addEventListener("click", this.setDate.bind(this))), this._expandedMode == "months" && this._dates.slice(0, 7).every((i) => i.disabled))
      for (let i = 0; i < 7; i++)
        (r = this._dateButtons[i].parentElement) == null || r.classList.add("d-none");
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
    this._isSetted = !0;
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
export {
  ho as default
};
