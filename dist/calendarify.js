var Qn = Object.defineProperty, Xn = Object.defineProperties;
var Kn = Object.getOwnPropertyDescriptors;
var ot = Object.getOwnPropertySymbols;
var Fs = Object.prototype.hasOwnProperty, Ns = Object.prototype.propertyIsEnumerable;
var Nt = (e, t, s) => t in e ? Qn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s, V = (e, t) => {
  for (var s in t || (t = {}))
    Fs.call(t, s) && Nt(e, s, t[s]);
  if (ot)
    for (var s of ot(t))
      Ns.call(t, s) && Nt(e, s, t[s]);
  return e;
}, Ee = (e, t) => Xn(e, Kn(t));
var Cs = (e, t) => {
  var s = {};
  for (var n in e)
    Fs.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
  if (e != null && ot)
    for (var n of ot(e))
      t.indexOf(n) < 0 && Ns.call(e, n) && (s[n] = e[n]);
  return s;
};
var p = (e, t, s) => (Nt(e, typeof t != "symbol" ? t + "" : t, s), s);
var Se = (e, t, s) => new Promise((n, a) => {
  var r = (u) => {
    try {
      o(s.next(u));
    } catch (h) {
      a(h);
    }
  }, i = (u) => {
    try {
      o(s.throw(u));
    } catch (h) {
      a(h);
    }
  }, o = (u) => u.done ? n(u.value) : Promise.resolve(u.value).then(r, i);
  o((s = s.apply(e, t)).next());
});
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Qs;
function l() {
  return Qs.apply(null, arguments);
}
function ea(e) {
  Qs = e;
}
function K(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function be(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function S(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Qt(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (S(e, t))
      return !1;
  return !0;
}
function $(e) {
  return e === void 0;
}
function me(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function st(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Xs(e, t) {
  var s = [], n, a = e.length;
  for (n = 0; n < a; ++n)
    s.push(t(e[n], n));
  return s;
}
function ge(e, t) {
  for (var s in t)
    S(t, s) && (e[s] = t[s]);
  return S(t, "toString") && (e.toString = t.toString), S(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function oe(e, t, s, n) {
  return Mn(e, t, s, n, !0).utc();
}
function ta() {
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
function g(e) {
  return e._pf == null && (e._pf = ta()), e._pf;
}
var Ut;
Array.prototype.some ? Ut = Array.prototype.some : Ut = function(e) {
  var t = Object(this), s = t.length >>> 0, n;
  for (n = 0; n < s; n++)
    if (n in t && e.call(this, t[n], n, t))
      return !0;
  return !1;
};
function Xt(e) {
  if (e._isValid == null) {
    var t = g(e), s = Ut.call(t.parsedDateParts, function(a) {
      return a != null;
    }), n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && s);
    if (e._strict && (n = n && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = n;
    else
      return n;
  }
  return e._isValid;
}
function kt(e) {
  var t = oe(NaN);
  return e != null ? ge(g(t), e) : g(t).userInvalidated = !0, t;
}
var As = l.momentProperties = [], Ct = !1;
function Kt(e, t) {
  var s, n, a, r = As.length;
  if ($(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), $(t._i) || (e._i = t._i), $(t._f) || (e._f = t._f), $(t._l) || (e._l = t._l), $(t._strict) || (e._strict = t._strict), $(t._tzm) || (e._tzm = t._tzm), $(t._isUTC) || (e._isUTC = t._isUTC), $(t._offset) || (e._offset = t._offset), $(t._pf) || (e._pf = g(t)), $(t._locale) || (e._locale = t._locale), r > 0)
    for (s = 0; s < r; s++)
      n = As[s], a = t[n], $(a) || (e[n] = a);
  return e;
}
function nt(e) {
  Kt(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), Ct === !1 && (Ct = !0, l.updateOffset(this), Ct = !1);
}
function ee(e) {
  return e instanceof nt || e != null && e._isAMomentObject != null;
}
function Ks(e) {
  l.suppressDeprecationWarnings === !1 && typeof console != "undefined" && console.warn && console.warn("Deprecation warning: " + e);
}
function Z(e, t) {
  var s = !0;
  return ge(function() {
    if (l.deprecationHandler != null && l.deprecationHandler(null, e), s) {
      var n = [], a, r, i, o = arguments.length;
      for (r = 0; r < o; r++) {
        if (a = "", typeof arguments[r] == "object") {
          a += `
[` + r + "] ";
          for (i in arguments[0])
            S(arguments[0], i) && (a += i + ": " + arguments[0][i] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[r];
        n.push(a);
      }
      Ks(
        e + `
Arguments: ` + Array.prototype.slice.call(n).join("") + `
` + new Error().stack
      ), s = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Is = {};
function en(e, t) {
  l.deprecationHandler != null && l.deprecationHandler(e, t), Is[e] || (Ks(t), Is[e] = !0);
}
l.suppressDeprecationWarnings = !1;
l.deprecationHandler = null;
function le(e) {
  return typeof Function != "undefined" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function sa(e) {
  var t, s;
  for (s in e)
    S(e, s) && (t = e[s], le(t) ? this[s] = t : this["_" + s] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function $t(e, t) {
  var s = ge({}, e), n;
  for (n in t)
    S(t, n) && (be(e[n]) && be(t[n]) ? (s[n] = {}, ge(s[n], e[n]), ge(s[n], t[n])) : t[n] != null ? s[n] = t[n] : delete s[n]);
  for (n in e)
    S(e, n) && !S(t, n) && be(e[n]) && (s[n] = ge({}, s[n]));
  return s;
}
function es(e) {
  e != null && this.set(e);
}
var Vt;
Object.keys ? Vt = Object.keys : Vt = function(e) {
  var t, s = [];
  for (t in e)
    S(e, t) && s.push(t);
  return s;
};
var na = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function aa(e, t, s) {
  var n = this._calendar[e] || this._calendar.sameElse;
  return le(n) ? n.call(t, s) : n;
}
function ie(e, t, s) {
  var n = "" + Math.abs(e), a = t - n.length, r = e >= 0;
  return (r ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + n;
}
var ts = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, lt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, At = {}, Fe = {};
function y(e, t, s, n) {
  var a = n;
  typeof n == "string" && (a = function() {
    return this[n]();
  }), e && (Fe[e] = a), t && (Fe[t[0]] = function() {
    return ie(a.apply(this, arguments), t[1], t[2]);
  }), s && (Fe[s] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function ra(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function ia(e) {
  var t = e.match(ts), s, n;
  for (s = 0, n = t.length; s < n; s++)
    Fe[t[s]] ? t[s] = Fe[t[s]] : t[s] = ra(t[s]);
  return function(a) {
    var r = "", i;
    for (i = 0; i < n; i++)
      r += le(t[i]) ? t[i].call(a, e) : t[i];
    return r;
  };
}
function dt(e, t) {
  return e.isValid() ? (t = tn(t, e.localeData()), At[t] = At[t] || ia(t), At[t](e)) : e.localeData().invalidDate();
}
function tn(e, t) {
  var s = 5;
  function n(a) {
    return t.longDateFormat(a) || a;
  }
  for (lt.lastIndex = 0; s >= 0 && lt.test(e); )
    e = e.replace(
      lt,
      n
    ), lt.lastIndex = 0, s -= 1;
  return e;
}
var oa = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function la(e) {
  var t = this._longDateFormat[e], s = this._longDateFormat[e.toUpperCase()];
  return t || !s ? t : (this._longDateFormat[e] = s.match(ts).map(function(n) {
    return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd" ? n.slice(1) : n;
  }).join(""), this._longDateFormat[e]);
}
var ua = "Invalid date";
function ha() {
  return this._invalidDate;
}
var da = "%d", ca = /\d{1,2}/;
function fa(e) {
  return this._ordinal.replace("%d", e);
}
var ma = {
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
function _a(e, t, s, n) {
  var a = this._relativeTime[s];
  return le(a) ? a(e, t, s, n) : a.replace(/%d/i, e);
}
function ya(e, t) {
  var s = this._relativeTime[e > 0 ? "future" : "past"];
  return le(s) ? s(t) : s.replace(/%s/i, t);
}
var qe = {};
function I(e, t) {
  var s = e.toLowerCase();
  qe[s] = qe[s + "s"] = qe[t] = e;
}
function J(e) {
  return typeof e == "string" ? qe[e] || qe[e.toLowerCase()] : void 0;
}
function ss(e) {
  var t = {}, s, n;
  for (n in e)
    S(e, n) && (s = J(n), s && (t[s] = e[n]));
  return t;
}
var sn = {};
function H(e, t) {
  sn[e] = t;
}
function pa(e) {
  var t = [], s;
  for (s in e)
    S(e, s) && t.push({ unit: s, priority: sn[s] });
  return t.sort(function(n, a) {
    return n.priority - a.priority;
  }), t;
}
function Dt(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function z(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function v(e) {
  var t = +e, s = 0;
  return t !== 0 && isFinite(t) && (s = z(t)), s;
}
function Ie(e, t) {
  return function(s) {
    return s != null ? (nn(this, e, s), l.updateOffset(this, t), this) : mt(this, e);
  };
}
function mt(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function nn(e, t, s) {
  e.isValid() && !isNaN(s) && (t === "FullYear" && Dt(e.year()) && e.month() === 1 && e.date() === 29 ? (s = v(s), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    s,
    e.month(),
    Ot(s, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](s));
}
function wa(e) {
  return e = J(e), le(this[e]) ? this[e]() : this;
}
function ga(e, t) {
  if (typeof e == "object") {
    e = ss(e);
    var s = pa(e), n, a = s.length;
    for (n = 0; n < a; n++)
      this[s[n].unit](e[s[n].unit]);
  } else if (e = J(e), le(this[e]))
    return this[e](t);
  return this;
}
var an = /\d/, B = /\d\d/, rn = /\d{3}/, ns = /\d{4}/, Mt = /[+-]?\d{6}/, W = /\d\d?/, on = /\d\d\d\d?/, ln = /\d\d\d\d\d\d?/, St = /\d{1,3}/, as = /\d{1,4}/, Yt = /[+-]?\d{1,6}/, He = /\d+/, xt = /[+-]?\d+/, va = /Z|[+-]\d\d:?\d\d/gi, bt = /Z|[+-]\d\d(?::?\d\d)?/gi, ka = /[+-]?\d+(\.\d{1,3})?/, at = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, _t;
_t = {};
function f(e, t, s) {
  _t[e] = le(t) ? t : function(n, a) {
    return n && s ? s : t;
  };
}
function Da(e, t) {
  return S(_t, e) ? _t[e](t._strict, t._locale) : new RegExp(Ma(e));
}
function Ma(e) {
  return G(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, s, n, a, r) {
        return s || n || a || r;
      }
    )
  );
}
function G(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var Gt = {};
function b(e, t) {
  var s, n = t, a;
  for (typeof e == "string" && (e = [e]), me(t) && (n = function(r, i) {
    i[t] = v(r);
  }), a = e.length, s = 0; s < a; s++)
    Gt[e[s]] = n;
}
function rt(e, t) {
  b(e, function(s, n, a, r) {
    a._w = a._w || {}, t(s, a._w, a, r);
  });
}
function Sa(e, t, s) {
  t != null && S(Gt, e) && Gt[e](t, s._a, s, e);
}
var A = 0, de = 1, ne = 2, N = 3, Q = 4, ce = 5, xe = 6, Ya = 7, xa = 8;
function ba(e, t) {
  return (e % t + t) % t;
}
var P;
Array.prototype.indexOf ? P = Array.prototype.indexOf : P = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Ot(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var s = ba(t, 12);
  return e += (t - s) / 12, s === 1 ? Dt(e) ? 29 : 28 : 31 - s % 7 % 2;
}
y("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
y("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
y("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
I("month", "M");
H("month", 8);
f("M", W);
f("MM", W, B);
f("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
f("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
b(["M", "MM"], function(e, t) {
  t[de] = v(e) - 1;
});
b(["MMM", "MMMM"], function(e, t, s, n) {
  var a = s._locale.monthsParse(e, n, s._strict);
  a != null ? t[de] = a : g(s).invalidMonth = e;
});
var Oa = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), un = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), hn = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Ta = at, Ra = at;
function Ea(e, t) {
  return e ? K(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || hn).test(t) ? "format" : "standalone"][e.month()] : K(this._months) ? this._months : this._months.standalone;
}
function Wa(e, t) {
  return e ? K(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[hn.test(t) ? "format" : "standalone"][e.month()] : K(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function La(e, t, s) {
  var n, a, r, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n)
      r = oe([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(
        r,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[n] = this.months(r, "").toLocaleLowerCase();
  return s ? t === "MMM" ? (a = P.call(this._shortMonthsParse, i), a !== -1 ? a : null) : (a = P.call(this._longMonthsParse, i), a !== -1 ? a : null) : t === "MMM" ? (a = P.call(this._shortMonthsParse, i), a !== -1 ? a : (a = P.call(this._longMonthsParse, i), a !== -1 ? a : null)) : (a = P.call(this._longMonthsParse, i), a !== -1 ? a : (a = P.call(this._shortMonthsParse, i), a !== -1 ? a : null));
}
function Pa(e, t, s) {
  var n, a, r;
  if (this._monthsParseExact)
    return La.call(this, e, t, s);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
    if (a = oe([2e3, n]), s && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp(
      "^" + this.months(a, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[n] = new RegExp(
      "^" + this.monthsShort(a, "").replace(".", "") + "$",
      "i"
    )), !s && !this._monthsParse[n] && (r = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[n] = new RegExp(r.replace(".", ""), "i")), s && t === "MMMM" && this._longMonthsParse[n].test(e))
      return n;
    if (s && t === "MMM" && this._shortMonthsParse[n].test(e))
      return n;
    if (!s && this._monthsParse[n].test(e))
      return n;
  }
}
function dn(e, t) {
  var s;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = v(t);
    else if (t = e.localeData().monthsParse(t), !me(t))
      return e;
  }
  return s = Math.min(e.date(), Ot(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, s), e;
}
function cn(e) {
  return e != null ? (dn(this, e), l.updateOffset(this, !0), this) : mt(this, "Month");
}
function Fa() {
  return Ot(this.year(), this.month());
}
function Na(e) {
  return this._monthsParseExact ? (S(this, "_monthsRegex") || fn.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (S(this, "_monthsShortRegex") || (this._monthsShortRegex = Ta), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Ca(e) {
  return this._monthsParseExact ? (S(this, "_monthsRegex") || fn.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (S(this, "_monthsRegex") || (this._monthsRegex = Ra), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function fn() {
  function e(i, o) {
    return o.length - i.length;
  }
  var t = [], s = [], n = [], a, r;
  for (a = 0; a < 12; a++)
    r = oe([2e3, a]), t.push(this.monthsShort(r, "")), s.push(this.months(r, "")), n.push(this.months(r, "")), n.push(this.monthsShort(r, ""));
  for (t.sort(e), s.sort(e), n.sort(e), a = 0; a < 12; a++)
    t[a] = G(t[a]), s[a] = G(s[a]);
  for (a = 0; a < 24; a++)
    n[a] = G(n[a]);
  this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
y("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? ie(e, 4) : "+" + e;
});
y(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
y(0, ["YYYY", 4], 0, "year");
y(0, ["YYYYY", 5], 0, "year");
y(0, ["YYYYYY", 6, !0], 0, "year");
I("year", "y");
H("year", 1);
f("Y", xt);
f("YY", W, B);
f("YYYY", as, ns);
f("YYYYY", Yt, Mt);
f("YYYYYY", Yt, Mt);
b(["YYYYY", "YYYYYY"], A);
b("YYYY", function(e, t) {
  t[A] = e.length === 2 ? l.parseTwoDigitYear(e) : v(e);
});
b("YY", function(e, t) {
  t[A] = l.parseTwoDigitYear(e);
});
b("Y", function(e, t) {
  t[A] = parseInt(e, 10);
});
function ze(e) {
  return Dt(e) ? 366 : 365;
}
l.parseTwoDigitYear = function(e) {
  return v(e) + (v(e) > 68 ? 1900 : 2e3);
};
var mn = Ie("FullYear", !0);
function Aa() {
  return Dt(this.year());
}
function Ia(e, t, s, n, a, r, i) {
  var o;
  return e < 100 && e >= 0 ? (o = new Date(e + 400, t, s, n, a, r, i), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, s, n, a, r, i), o;
}
function Qe(e) {
  var t, s;
  return e < 100 && e >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = e + 400, t = new Date(Date.UTC.apply(null, s)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function yt(e, t, s) {
  var n = 7 + t - s, a = (7 + Qe(e, 0, n).getUTCDay() - t) % 7;
  return -a + n - 1;
}
function _n(e, t, s, n, a) {
  var r = (7 + s - n) % 7, i = yt(e, n, a), o = 1 + 7 * (t - 1) + r + i, u, h;
  return o <= 0 ? (u = e - 1, h = ze(u) + o) : o > ze(e) ? (u = e + 1, h = o - ze(e)) : (u = e, h = o), {
    year: u,
    dayOfYear: h
  };
}
function Xe(e, t, s) {
  var n = yt(e.year(), t, s), a = Math.floor((e.dayOfYear() - n - 1) / 7) + 1, r, i;
  return a < 1 ? (i = e.year() - 1, r = a + fe(i, t, s)) : a > fe(e.year(), t, s) ? (r = a - fe(e.year(), t, s), i = e.year() + 1) : (i = e.year(), r = a), {
    week: r,
    year: i
  };
}
function fe(e, t, s) {
  var n = yt(e, t, s), a = yt(e + 1, t, s);
  return (ze(e) - n + a) / 7;
}
y("w", ["ww", 2], "wo", "week");
y("W", ["WW", 2], "Wo", "isoWeek");
I("week", "w");
I("isoWeek", "W");
H("week", 5);
H("isoWeek", 5);
f("w", W);
f("ww", W, B);
f("W", W);
f("WW", W, B);
rt(
  ["w", "ww", "W", "WW"],
  function(e, t, s, n) {
    t[n.substr(0, 1)] = v(e);
  }
);
function Ha(e) {
  return Xe(e, this._week.dow, this._week.doy).week;
}
var Ua = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function $a() {
  return this._week.dow;
}
function Va() {
  return this._week.doy;
}
function Ga(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function ja(e) {
  var t = Xe(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
y("d", 0, "do", "day");
y("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
y("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
y("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
y("e", 0, 0, "weekday");
y("E", 0, 0, "isoWeekday");
I("day", "d");
I("weekday", "e");
I("isoWeekday", "E");
H("day", 11);
H("weekday", 11);
H("isoWeekday", 11);
f("d", W);
f("e", W);
f("E", W);
f("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
f("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
f("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
rt(["dd", "ddd", "dddd"], function(e, t, s, n) {
  var a = s._locale.weekdaysParse(e, n, s._strict);
  a != null ? t.d = a : g(s).invalidWeekday = e;
});
rt(["d", "e", "E"], function(e, t, s, n) {
  t[n] = v(e);
});
function Ba(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function qa(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function rs(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var za = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), yn = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Za = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Ja = at, Qa = at, Xa = at;
function Ka(e, t) {
  var s = K(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? rs(s, this._week.dow) : e ? s[e.day()] : s;
}
function er(e) {
  return e === !0 ? rs(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function tr(e) {
  return e === !0 ? rs(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function sr(e, t, s) {
  var n, a, r, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n)
      r = oe([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(
        r,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(
        r,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(r, "").toLocaleLowerCase();
  return s ? t === "dddd" ? (a = P.call(this._weekdaysParse, i), a !== -1 ? a : null) : t === "ddd" ? (a = P.call(this._shortWeekdaysParse, i), a !== -1 ? a : null) : (a = P.call(this._minWeekdaysParse, i), a !== -1 ? a : null) : t === "dddd" ? (a = P.call(this._weekdaysParse, i), a !== -1 || (a = P.call(this._shortWeekdaysParse, i), a !== -1) ? a : (a = P.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : t === "ddd" ? (a = P.call(this._shortWeekdaysParse, i), a !== -1 || (a = P.call(this._weekdaysParse, i), a !== -1) ? a : (a = P.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : (a = P.call(this._minWeekdaysParse, i), a !== -1 || (a = P.call(this._weekdaysParse, i), a !== -1) ? a : (a = P.call(this._shortWeekdaysParse, i), a !== -1 ? a : null));
}
function nr(e, t, s) {
  var n, a, r;
  if (this._weekdaysParseExact)
    return sr.call(this, e, t, s);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
    if (a = oe([2e3, 1]).day(n), s && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp(
      "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[n] || (r = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[n] = new RegExp(r.replace(".", ""), "i")), s && t === "dddd" && this._fullWeekdaysParse[n].test(e))
      return n;
    if (s && t === "ddd" && this._shortWeekdaysParse[n].test(e))
      return n;
    if (s && t === "dd" && this._minWeekdaysParse[n].test(e))
      return n;
    if (!s && this._weekdaysParse[n].test(e))
      return n;
  }
}
function ar(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = Ba(e, this.localeData()), this.add(e - t, "d")) : t;
}
function rr(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function ir(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = qa(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function or(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || is.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (S(this, "_weekdaysRegex") || (this._weekdaysRegex = Ja), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function lr(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || is.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (S(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Qa), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function ur(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || is.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (S(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Xa), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function is() {
  function e(_, c) {
    return c.length - _.length;
  }
  var t = [], s = [], n = [], a = [], r, i, o, u, h;
  for (r = 0; r < 7; r++)
    i = oe([2e3, 1]).day(r), o = G(this.weekdaysMin(i, "")), u = G(this.weekdaysShort(i, "")), h = G(this.weekdays(i, "")), t.push(o), s.push(u), n.push(h), a.push(o), a.push(u), a.push(h);
  t.sort(e), s.sort(e), n.sort(e), a.sort(e), this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function os() {
  return this.hours() % 12 || 12;
}
function hr() {
  return this.hours() || 24;
}
y("H", ["HH", 2], 0, "hour");
y("h", ["hh", 2], 0, os);
y("k", ["kk", 2], 0, hr);
y("hmm", 0, 0, function() {
  return "" + os.apply(this) + ie(this.minutes(), 2);
});
y("hmmss", 0, 0, function() {
  return "" + os.apply(this) + ie(this.minutes(), 2) + ie(this.seconds(), 2);
});
y("Hmm", 0, 0, function() {
  return "" + this.hours() + ie(this.minutes(), 2);
});
y("Hmmss", 0, 0, function() {
  return "" + this.hours() + ie(this.minutes(), 2) + ie(this.seconds(), 2);
});
function pn(e, t) {
  y(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
pn("a", !0);
pn("A", !1);
I("hour", "h");
H("hour", 13);
function wn(e, t) {
  return t._meridiemParse;
}
f("a", wn);
f("A", wn);
f("H", W);
f("h", W);
f("k", W);
f("HH", W, B);
f("hh", W, B);
f("kk", W, B);
f("hmm", on);
f("hmmss", ln);
f("Hmm", on);
f("Hmmss", ln);
b(["H", "HH"], N);
b(["k", "kk"], function(e, t, s) {
  var n = v(e);
  t[N] = n === 24 ? 0 : n;
});
b(["a", "A"], function(e, t, s) {
  s._isPm = s._locale.isPM(e), s._meridiem = e;
});
b(["h", "hh"], function(e, t, s) {
  t[N] = v(e), g(s).bigHour = !0;
});
b("hmm", function(e, t, s) {
  var n = e.length - 2;
  t[N] = v(e.substr(0, n)), t[Q] = v(e.substr(n)), g(s).bigHour = !0;
});
b("hmmss", function(e, t, s) {
  var n = e.length - 4, a = e.length - 2;
  t[N] = v(e.substr(0, n)), t[Q] = v(e.substr(n, 2)), t[ce] = v(e.substr(a)), g(s).bigHour = !0;
});
b("Hmm", function(e, t, s) {
  var n = e.length - 2;
  t[N] = v(e.substr(0, n)), t[Q] = v(e.substr(n));
});
b("Hmmss", function(e, t, s) {
  var n = e.length - 4, a = e.length - 2;
  t[N] = v(e.substr(0, n)), t[Q] = v(e.substr(n, 2)), t[ce] = v(e.substr(a));
});
function dr(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var cr = /[ap]\.?m?\.?/i, fr = Ie("Hours", !0);
function mr(e, t, s) {
  return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM";
}
var gn = {
  calendar: na,
  longDateFormat: oa,
  invalidDate: ua,
  ordinal: da,
  dayOfMonthOrdinalParse: ca,
  relativeTime: ma,
  months: Oa,
  monthsShort: un,
  week: Ua,
  weekdays: za,
  weekdaysMin: Za,
  weekdaysShort: yn,
  meridiemParse: cr
}, L = {}, je = {}, Ke;
function _r(e, t) {
  var s, n = Math.min(e.length, t.length);
  for (s = 0; s < n; s += 1)
    if (e[s] !== t[s])
      return s;
  return n;
}
function Hs(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function yr(e) {
  for (var t = 0, s, n, a, r; t < e.length; ) {
    for (r = Hs(e[t]).split("-"), s = r.length, n = Hs(e[t + 1]), n = n ? n.split("-") : null; s > 0; ) {
      if (a = Tt(r.slice(0, s).join("-")), a)
        return a;
      if (n && n.length >= s && _r(r, n) >= s - 1)
        break;
      s--;
    }
    t++;
  }
  return Ke;
}
function pr(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function Tt(e) {
  var t = null, s;
  if (L[e] === void 0 && typeof module != "undefined" && module && module.exports && pr(e))
    try {
      t = Ke._abbr, s = require, s("./locale/" + e), ke(t);
    } catch (n) {
      L[e] = null;
    }
  return L[e];
}
function ke(e, t) {
  var s;
  return e && ($(t) ? s = _e(e) : s = ls(e, t), s ? Ke = s : typeof console != "undefined" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Ke._abbr;
}
function ls(e, t) {
  if (t !== null) {
    var s, n = gn;
    if (t.abbr = e, L[e] != null)
      en(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), n = L[e]._config;
    else if (t.parentLocale != null)
      if (L[t.parentLocale] != null)
        n = L[t.parentLocale]._config;
      else if (s = Tt(t.parentLocale), s != null)
        n = s._config;
      else
        return je[t.parentLocale] || (je[t.parentLocale] = []), je[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return L[e] = new es($t(n, t)), je[e] && je[e].forEach(function(a) {
      ls(a.name, a.config);
    }), ke(e), L[e];
  } else
    return delete L[e], null;
}
function wr(e, t) {
  if (t != null) {
    var s, n, a = gn;
    L[e] != null && L[e].parentLocale != null ? L[e].set($t(L[e]._config, t)) : (n = Tt(e), n != null && (a = n._config), t = $t(a, t), n == null && (t.abbr = e), s = new es(t), s.parentLocale = L[e], L[e] = s), ke(e);
  } else
    L[e] != null && (L[e].parentLocale != null ? (L[e] = L[e].parentLocale, e === ke() && ke(e)) : L[e] != null && delete L[e]);
  return L[e];
}
function _e(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Ke;
  if (!K(e)) {
    if (t = Tt(e), t)
      return t;
    e = [e];
  }
  return yr(e);
}
function gr() {
  return Vt(L);
}
function us(e) {
  var t, s = e._a;
  return s && g(e).overflow === -2 && (t = s[de] < 0 || s[de] > 11 ? de : s[ne] < 1 || s[ne] > Ot(s[A], s[de]) ? ne : s[N] < 0 || s[N] > 24 || s[N] === 24 && (s[Q] !== 0 || s[ce] !== 0 || s[xe] !== 0) ? N : s[Q] < 0 || s[Q] > 59 ? Q : s[ce] < 0 || s[ce] > 59 ? ce : s[xe] < 0 || s[xe] > 999 ? xe : -1, g(e)._overflowDayOfYear && (t < A || t > ne) && (t = ne), g(e)._overflowWeeks && t === -1 && (t = Ya), g(e)._overflowWeekday && t === -1 && (t = xa), g(e).overflow = t), e;
}
var vr = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, kr = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Dr = /Z|[+-]\d\d(?::?\d\d)?/, ut = [
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
], It = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], Mr = /^\/?Date\((-?\d+)/i, Sr = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Yr = {
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
function vn(e) {
  var t, s, n = e._i, a = vr.exec(n) || kr.exec(n), r, i, o, u, h = ut.length, _ = It.length;
  if (a) {
    for (g(e).iso = !0, t = 0, s = h; t < s; t++)
      if (ut[t][1].exec(a[1])) {
        i = ut[t][0], r = ut[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, s = _; t < s; t++)
        if (It[t][1].exec(a[3])) {
          o = (a[2] || " ") + It[t][0];
          break;
        }
      if (o == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!r && o != null) {
      e._isValid = !1;
      return;
    }
    if (a[4])
      if (Dr.exec(a[4]))
        u = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (o || "") + (u || ""), ds(e);
  } else
    e._isValid = !1;
}
function xr(e, t, s, n, a, r) {
  var i = [
    br(e),
    un.indexOf(t),
    parseInt(s, 10),
    parseInt(n, 10),
    parseInt(a, 10)
  ];
  return r && i.push(parseInt(r, 10)), i;
}
function br(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Or(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Tr(e, t, s) {
  if (e) {
    var n = yn.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (n !== a)
      return g(s).weekdayMismatch = !0, s._isValid = !1, !1;
  }
  return !0;
}
function Rr(e, t, s) {
  if (e)
    return Yr[e];
  if (t)
    return 0;
  var n = parseInt(s, 10), a = n % 100, r = (n - a) / 100;
  return r * 60 + a;
}
function kn(e) {
  var t = Sr.exec(Or(e._i)), s;
  if (t) {
    if (s = xr(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Tr(t[1], s, e))
      return;
    e._a = s, e._tzm = Rr(t[8], t[9], t[10]), e._d = Qe.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), g(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Er(e) {
  var t = Mr.exec(e._i);
  if (t !== null) {
    e._d = new Date(+t[1]);
    return;
  }
  if (vn(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (kn(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : l.createFromInputFallback(e);
}
l.createFromInputFallback = Z(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Le(e, t, s) {
  return e != null ? e : t != null ? t : s;
}
function Wr(e) {
  var t = new Date(l.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function hs(e) {
  var t, s, n = [], a, r, i;
  if (!e._d) {
    for (a = Wr(e), e._w && e._a[ne] == null && e._a[de] == null && Lr(e), e._dayOfYear != null && (i = Le(e._a[A], a[A]), (e._dayOfYear > ze(i) || e._dayOfYear === 0) && (g(e)._overflowDayOfYear = !0), s = Qe(i, 0, e._dayOfYear), e._a[de] = s.getUTCMonth(), e._a[ne] = s.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = n[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = n[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[N] === 24 && e._a[Q] === 0 && e._a[ce] === 0 && e._a[xe] === 0 && (e._nextDay = !0, e._a[N] = 0), e._d = (e._useUTC ? Qe : Ia).apply(
      null,
      n
    ), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[N] = 24), e._w && typeof e._w.d != "undefined" && e._w.d !== r && (g(e).weekdayMismatch = !0);
  }
}
function Lr(e) {
  var t, s, n, a, r, i, o, u, h;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (r = 1, i = 4, s = Le(
    t.GG,
    e._a[A],
    Xe(E(), 1, 4).year
  ), n = Le(t.W, 1), a = Le(t.E, 1), (a < 1 || a > 7) && (u = !0)) : (r = e._locale._week.dow, i = e._locale._week.doy, h = Xe(E(), r, i), s = Le(t.gg, e._a[A], h.year), n = Le(t.w, h.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (u = !0)) : t.e != null ? (a = t.e + r, (t.e < 0 || t.e > 6) && (u = !0)) : a = r), n < 1 || n > fe(s, r, i) ? g(e)._overflowWeeks = !0 : u != null ? g(e)._overflowWeekday = !0 : (o = _n(s, n, a, r, i), e._a[A] = o.year, e._dayOfYear = o.dayOfYear);
}
l.ISO_8601 = function() {
};
l.RFC_2822 = function() {
};
function ds(e) {
  if (e._f === l.ISO_8601) {
    vn(e);
    return;
  }
  if (e._f === l.RFC_2822) {
    kn(e);
    return;
  }
  e._a = [], g(e).empty = !0;
  var t = "" + e._i, s, n, a, r, i, o = t.length, u = 0, h, _;
  for (a = tn(e._f, e._locale).match(ts) || [], _ = a.length, s = 0; s < _; s++)
    r = a[s], n = (t.match(Da(r, e)) || [])[0], n && (i = t.substr(0, t.indexOf(n)), i.length > 0 && g(e).unusedInput.push(i), t = t.slice(
      t.indexOf(n) + n.length
    ), u += n.length), Fe[r] ? (n ? g(e).empty = !1 : g(e).unusedTokens.push(r), Sa(r, n, e)) : e._strict && !n && g(e).unusedTokens.push(r);
  g(e).charsLeftOver = o - u, t.length > 0 && g(e).unusedInput.push(t), e._a[N] <= 12 && g(e).bigHour === !0 && e._a[N] > 0 && (g(e).bigHour = void 0), g(e).parsedDateParts = e._a.slice(0), g(e).meridiem = e._meridiem, e._a[N] = Pr(
    e._locale,
    e._a[N],
    e._meridiem
  ), h = g(e).era, h !== null && (e._a[A] = e._locale.erasConvertYear(h, e._a[A])), hs(e), us(e);
}
function Pr(e, t, s) {
  var n;
  return s == null ? t : e.meridiemHour != null ? e.meridiemHour(t, s) : (e.isPM != null && (n = e.isPM(s), n && t < 12 && (t += 12), !n && t === 12 && (t = 0)), t);
}
function Fr(e) {
  var t, s, n, a, r, i, o = !1, u = e._f.length;
  if (u === 0) {
    g(e).invalidFormat = !0, e._d = new Date(NaN);
    return;
  }
  for (a = 0; a < u; a++)
    r = 0, i = !1, t = Kt({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], ds(t), Xt(t) && (i = !0), r += g(t).charsLeftOver, r += g(t).unusedTokens.length * 10, g(t).score = r, o ? r < n && (n = r, s = t) : (n == null || r < n || i) && (n = r, s = t, i && (o = !0));
  ge(e, s || t);
}
function Nr(e) {
  if (!e._d) {
    var t = ss(e._i), s = t.day === void 0 ? t.date : t.day;
    e._a = Xs(
      [t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond],
      function(n) {
        return n && parseInt(n, 10);
      }
    ), hs(e);
  }
}
function Cr(e) {
  var t = new nt(us(Dn(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function Dn(e) {
  var t = e._i, s = e._f;
  return e._locale = e._locale || _e(e._l), t === null || s === void 0 && t === "" ? kt({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), ee(t) ? new nt(us(t)) : (st(t) ? e._d = t : K(s) ? Fr(e) : s ? ds(e) : Ar(e), Xt(e) || (e._d = null), e));
}
function Ar(e) {
  var t = e._i;
  $(t) ? e._d = new Date(l.now()) : st(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Er(e) : K(t) ? (e._a = Xs(t.slice(0), function(s) {
    return parseInt(s, 10);
  }), hs(e)) : be(t) ? Nr(e) : me(t) ? e._d = new Date(t) : l.createFromInputFallback(e);
}
function Mn(e, t, s, n, a) {
  var r = {};
  return (t === !0 || t === !1) && (n = t, t = void 0), (s === !0 || s === !1) && (n = s, s = void 0), (be(e) && Qt(e) || K(e) && e.length === 0) && (e = void 0), r._isAMomentObject = !0, r._useUTC = r._isUTC = a, r._l = s, r._i = e, r._f = t, r._strict = n, Cr(r);
}
function E(e, t, s, n) {
  return Mn(e, t, s, n, !1);
}
var Ir = Z(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = E.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : kt();
  }
), Hr = Z(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = E.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : kt();
  }
);
function Sn(e, t) {
  var s, n;
  if (t.length === 1 && K(t[0]) && (t = t[0]), !t.length)
    return E();
  for (s = t[0], n = 1; n < t.length; ++n)
    (!t[n].isValid() || t[n][e](s)) && (s = t[n]);
  return s;
}
function Ur() {
  var e = [].slice.call(arguments, 0);
  return Sn("isBefore", e);
}
function $r() {
  var e = [].slice.call(arguments, 0);
  return Sn("isAfter", e);
}
var Vr = function() {
  return Date.now ? Date.now() : +new Date();
}, Be = [
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
function Gr(e) {
  var t, s = !1, n, a = Be.length;
  for (t in e)
    if (S(e, t) && !(P.call(Be, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (n = 0; n < a; ++n)
    if (e[Be[n]]) {
      if (s)
        return !1;
      parseFloat(e[Be[n]]) !== v(e[Be[n]]) && (s = !0);
    }
  return !0;
}
function jr() {
  return this._isValid;
}
function Br() {
  return te(NaN);
}
function Rt(e) {
  var t = ss(e), s = t.year || 0, n = t.quarter || 0, a = t.month || 0, r = t.week || t.isoWeek || 0, i = t.day || 0, o = t.hour || 0, u = t.minute || 0, h = t.second || 0, _ = t.millisecond || 0;
  this._isValid = Gr(t), this._milliseconds = +_ + h * 1e3 + // 1000
  u * 6e4 + // 1000 * 60
  o * 1e3 * 60 * 60, this._days = +i + r * 7, this._months = +a + n * 3 + s * 12, this._data = {}, this._locale = _e(), this._bubble();
}
function ct(e) {
  return e instanceof Rt;
}
function jt(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function qr(e, t, s) {
  var n = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), r = 0, i;
  for (i = 0; i < n; i++)
    (s && e[i] !== t[i] || !s && v(e[i]) !== v(t[i])) && r++;
  return r + a;
}
function Yn(e, t) {
  y(e, 0, 0, function() {
    var s = this.utcOffset(), n = "+";
    return s < 0 && (s = -s, n = "-"), n + ie(~~(s / 60), 2) + t + ie(~~s % 60, 2);
  });
}
Yn("Z", ":");
Yn("ZZ", "");
f("Z", bt);
f("ZZ", bt);
b(["Z", "ZZ"], function(e, t, s) {
  s._useUTC = !0, s._tzm = cs(bt, e);
});
var zr = /([\+\-]|\d\d)/gi;
function cs(e, t) {
  var s = (t || "").match(e), n, a, r;
  return s === null ? null : (n = s[s.length - 1] || [], a = (n + "").match(zr) || ["-", 0, 0], r = +(a[1] * 60) + v(a[2]), r === 0 ? 0 : a[0] === "+" ? r : -r);
}
function fs(e, t) {
  var s, n;
  return t._isUTC ? (s = t.clone(), n = (ee(e) || st(e) ? e.valueOf() : E(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + n), l.updateOffset(s, !1), s) : E(e).local();
}
function Bt(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
l.updateOffset = function() {
};
function Zr(e, t, s) {
  var n = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = cs(bt, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !s && (e = e * 60);
    return !this._isUTC && t && (a = Bt(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), n !== e && (!t || this._changeInProgress ? On(
      this,
      te(e - n, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, l.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? n : Bt(this);
}
function Jr(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Qr(e) {
  return this.utcOffset(0, e);
}
function Xr(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Bt(this), "m")), this;
}
function Kr() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = cs(va, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function ei(e) {
  return this.isValid() ? (e = e ? E(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function ti() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function si() {
  if (!$(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Kt(e, this), e = Dn(e), e._a ? (t = e._isUTC ? oe(e._a) : E(e._a), this._isDSTShifted = this.isValid() && qr(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function ni() {
  return this.isValid() ? !this._isUTC : !1;
}
function ai() {
  return this.isValid() ? this._isUTC : !1;
}
function xn() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var ri = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, ii = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function te(e, t) {
  var s = e, n = null, a, r, i;
  return ct(e) ? s = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : me(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (n = ri.exec(e)) ? (a = n[1] === "-" ? -1 : 1, s = {
    y: 0,
    d: v(n[ne]) * a,
    h: v(n[N]) * a,
    m: v(n[Q]) * a,
    s: v(n[ce]) * a,
    ms: v(jt(n[xe] * 1e3)) * a
    // the millisecond decimal point is included in the match
  }) : (n = ii.exec(e)) ? (a = n[1] === "-" ? -1 : 1, s = {
    y: Ye(n[2], a),
    M: Ye(n[3], a),
    w: Ye(n[4], a),
    d: Ye(n[5], a),
    h: Ye(n[6], a),
    m: Ye(n[7], a),
    s: Ye(n[8], a)
  }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (i = oi(
    E(s.from),
    E(s.to)
  ), s = {}, s.ms = i.milliseconds, s.M = i.months), r = new Rt(s), ct(e) && S(e, "_locale") && (r._locale = e._locale), ct(e) && S(e, "_isValid") && (r._isValid = e._isValid), r;
}
te.fn = Rt.prototype;
te.invalid = Br;
function Ye(e, t) {
  var s = e && parseFloat(e.replace(",", "."));
  return (isNaN(s) ? 0 : s) * t;
}
function Us(e, t) {
  var s = {};
  return s.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(s.months, "M").isAfter(t) && --s.months, s.milliseconds = +t - +e.clone().add(s.months, "M"), s;
}
function oi(e, t) {
  var s;
  return e.isValid() && t.isValid() ? (t = fs(t, e), e.isBefore(t) ? s = Us(e, t) : (s = Us(t, e), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 };
}
function bn(e, t) {
  return function(s, n) {
    var a, r;
    return n !== null && !isNaN(+n) && (en(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), r = s, s = n, n = r), a = te(s, n), On(this, a, e), this;
  };
}
function On(e, t, s, n) {
  var a = t._milliseconds, r = jt(t._days), i = jt(t._months);
  e.isValid() && (n = n == null ? !0 : n, i && dn(e, mt(e, "Month") + i * s), r && nn(e, "Date", mt(e, "Date") + r * s), a && e._d.setTime(e._d.valueOf() + a * s), n && l.updateOffset(e, r || i));
}
var li = bn(1, "add"), ui = bn(-1, "subtract");
function Tn(e) {
  return typeof e == "string" || e instanceof String;
}
function hi(e) {
  return ee(e) || st(e) || Tn(e) || me(e) || ci(e) || di(e) || e === null || e === void 0;
}
function di(e) {
  var t = be(e) && !Qt(e), s = !1, n = [
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
  ], a, r, i = n.length;
  for (a = 0; a < i; a += 1)
    r = n[a], s = s || S(e, r);
  return t && s;
}
function ci(e) {
  var t = K(e), s = !1;
  return t && (s = e.filter(function(n) {
    return !me(n) && Tn(e);
  }).length === 0), t && s;
}
function fi(e) {
  var t = be(e) && !Qt(e), s = !1, n = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, r;
  for (a = 0; a < n.length; a += 1)
    r = n[a], s = s || S(e, r);
  return t && s;
}
function mi(e, t) {
  var s = e.diff(t, "days", !0);
  return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse";
}
function _i(e, t) {
  arguments.length === 1 && (arguments[0] ? hi(arguments[0]) ? (e = arguments[0], t = void 0) : fi(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var s = e || E(), n = fs(s, this).startOf("day"), a = l.calendarFormat(this, n) || "sameElse", r = t && (le(t[a]) ? t[a].call(this, s) : t[a]);
  return this.format(
    r || this.localeData().calendar(a, this, E(s))
  );
}
function yi() {
  return new nt(this);
}
function pi(e, t) {
  var s = ee(e) ? e : E(e);
  return this.isValid() && s.isValid() ? (t = J(t) || "millisecond", t === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function wi(e, t) {
  var s = ee(e) ? e : E(e);
  return this.isValid() && s.isValid() ? (t = J(t) || "millisecond", t === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(t).valueOf() < s.valueOf()) : !1;
}
function gi(e, t, s, n) {
  var a = ee(e) ? e : E(e), r = ee(t) ? t : E(t);
  return this.isValid() && a.isValid() && r.isValid() ? (n = n || "()", (n[0] === "(" ? this.isAfter(a, s) : !this.isBefore(a, s)) && (n[1] === ")" ? this.isBefore(r, s) : !this.isAfter(r, s))) : !1;
}
function vi(e, t) {
  var s = ee(e) ? e : E(e), n;
  return this.isValid() && s.isValid() ? (t = J(t) || "millisecond", t === "millisecond" ? this.valueOf() === s.valueOf() : (n = s.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) : !1;
}
function ki(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Di(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Mi(e, t, s) {
  var n, a, r;
  if (!this.isValid())
    return NaN;
  if (n = fs(e, this), !n.isValid())
    return NaN;
  switch (a = (n.utcOffset() - this.utcOffset()) * 6e4, t = J(t), t) {
    case "year":
      r = ft(this, n) / 12;
      break;
    case "month":
      r = ft(this, n);
      break;
    case "quarter":
      r = ft(this, n) / 3;
      break;
    case "second":
      r = (this - n) / 1e3;
      break;
    case "minute":
      r = (this - n) / 6e4;
      break;
    case "hour":
      r = (this - n) / 36e5;
      break;
    case "day":
      r = (this - n - a) / 864e5;
      break;
    case "week":
      r = (this - n - a) / 6048e5;
      break;
    default:
      r = this - n;
  }
  return s ? r : z(r);
}
function ft(e, t) {
  if (e.date() < t.date())
    return -ft(t, e);
  var s = (t.year() - e.year()) * 12 + (t.month() - e.month()), n = e.clone().add(s, "months"), a, r;
  return t - n < 0 ? (a = e.clone().add(s - 1, "months"), r = (t - n) / (n - a)) : (a = e.clone().add(s + 1, "months"), r = (t - n) / (a - n)), -(s + r) || 0;
}
l.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
l.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Si() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Yi(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, s = t ? this.clone().utc() : this;
  return s.year() < 0 || s.year() > 9999 ? dt(
    s,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : le(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", dt(s, "Z")) : dt(
    s,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function xi() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", s, n, a, r;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), s = "[" + e + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", r = t + '[")]', this.format(s + n + a + r);
}
function bi(e) {
  e || (e = this.isUtc() ? l.defaultFormatUtc : l.defaultFormat);
  var t = dt(this, e);
  return this.localeData().postformat(t);
}
function Oi(e, t) {
  return this.isValid() && (ee(e) && e.isValid() || E(e).isValid()) ? te({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Ti(e) {
  return this.from(E(), e);
}
function Ri(e, t) {
  return this.isValid() && (ee(e) && e.isValid() || E(e).isValid()) ? te({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Ei(e) {
  return this.to(E(), e);
}
function Rn(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = _e(e), t != null && (this._locale = t), this);
}
var En = Z(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Wn() {
  return this._locale;
}
var pt = 1e3, Ne = 60 * pt, wt = 60 * Ne, Ln = (365 * 400 + 97) * 24 * wt;
function Ce(e, t) {
  return (e % t + t) % t;
}
function Pn(e, t, s) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, s) - Ln : new Date(e, t, s).valueOf();
}
function Fn(e, t, s) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - Ln : Date.UTC(e, t, s);
}
function Wi(e) {
  var t, s;
  if (e = J(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? Fn : Pn, e) {
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
      t = this._d.valueOf(), t -= Ce(
        t + (this._isUTC ? 0 : this.utcOffset() * Ne),
        wt
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= Ce(t, Ne);
      break;
    case "second":
      t = this._d.valueOf(), t -= Ce(t, pt);
      break;
  }
  return this._d.setTime(t), l.updateOffset(this, !0), this;
}
function Li(e) {
  var t, s;
  if (e = J(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? Fn : Pn, e) {
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
      t = this._d.valueOf(), t += wt - Ce(
        t + (this._isUTC ? 0 : this.utcOffset() * Ne),
        wt
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Ne - Ce(t, Ne) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += pt - Ce(t, pt) - 1;
      break;
  }
  return this._d.setTime(t), l.updateOffset(this, !0), this;
}
function Pi() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Fi() {
  return Math.floor(this.valueOf() / 1e3);
}
function Ni() {
  return new Date(this.valueOf());
}
function Ci() {
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
function Ai() {
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
function Ii() {
  return this.isValid() ? this.toISOString() : null;
}
function Hi() {
  return Xt(this);
}
function Ui() {
  return ge({}, g(this));
}
function $i() {
  return g(this).overflow;
}
function Vi() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
y("N", 0, 0, "eraAbbr");
y("NN", 0, 0, "eraAbbr");
y("NNN", 0, 0, "eraAbbr");
y("NNNN", 0, 0, "eraName");
y("NNNNN", 0, 0, "eraNarrow");
y("y", ["y", 1], "yo", "eraYear");
y("y", ["yy", 2], 0, "eraYear");
y("y", ["yyy", 3], 0, "eraYear");
y("y", ["yyyy", 4], 0, "eraYear");
f("N", ms);
f("NN", ms);
f("NNN", ms);
f("NNNN", eo);
f("NNNNN", to);
b(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, s, n) {
    var a = s._locale.erasParse(e, n, s._strict);
    a ? g(s).era = a : g(s).invalidEra = e;
  }
);
f("y", He);
f("yy", He);
f("yyy", He);
f("yyyy", He);
f("yo", so);
b(["y", "yy", "yyy", "yyyy"], A);
b(["yo"], function(e, t, s, n) {
  var a;
  s._locale._eraYearOrdinalRegex && (a = e.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? t[A] = s._locale.eraYearOrdinalParse(e, a) : t[A] = parseInt(e, 10);
});
function Gi(e, t) {
  var s, n, a, r = this._eras || _e("en")._eras;
  for (s = 0, n = r.length; s < n; ++s) {
    switch (typeof r[s].since) {
      case "string":
        a = l(r[s].since).startOf("day"), r[s].since = a.valueOf();
        break;
    }
    switch (typeof r[s].until) {
      case "undefined":
        r[s].until = 1 / 0;
        break;
      case "string":
        a = l(r[s].until).startOf("day").valueOf(), r[s].until = a.valueOf();
        break;
    }
  }
  return r;
}
function ji(e, t, s) {
  var n, a, r = this.eras(), i, o, u;
  for (e = e.toUpperCase(), n = 0, a = r.length; n < a; ++n)
    if (i = r[n].name.toUpperCase(), o = r[n].abbr.toUpperCase(), u = r[n].narrow.toUpperCase(), s)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (o === e)
            return r[n];
          break;
        case "NNNN":
          if (i === e)
            return r[n];
          break;
        case "NNNNN":
          if (u === e)
            return r[n];
          break;
      }
    else if ([i, o, u].indexOf(e) >= 0)
      return r[n];
}
function Bi(e, t) {
  var s = e.since <= e.until ? 1 : -1;
  return t === void 0 ? l(e.since).year() : l(e.since).year() + (t - e.offset) * s;
}
function qi() {
  var e, t, s, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), n[e].since <= s && s <= n[e].until || n[e].until <= s && s <= n[e].since)
      return n[e].name;
  return "";
}
function zi() {
  var e, t, s, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), n[e].since <= s && s <= n[e].until || n[e].until <= s && s <= n[e].since)
      return n[e].narrow;
  return "";
}
function Zi() {
  var e, t, s, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), n[e].since <= s && s <= n[e].until || n[e].until <= s && s <= n[e].since)
      return n[e].abbr;
  return "";
}
function Ji() {
  var e, t, s, n, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (s = a[e].since <= a[e].until ? 1 : -1, n = this.clone().startOf("day").valueOf(), a[e].since <= n && n <= a[e].until || a[e].until <= n && n <= a[e].since)
      return (this.year() - l(a[e].since).year()) * s + a[e].offset;
  return this.year();
}
function Qi(e) {
  return S(this, "_erasNameRegex") || _s.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Xi(e) {
  return S(this, "_erasAbbrRegex") || _s.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Ki(e) {
  return S(this, "_erasNarrowRegex") || _s.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function ms(e, t) {
  return t.erasAbbrRegex(e);
}
function eo(e, t) {
  return t.erasNameRegex(e);
}
function to(e, t) {
  return t.erasNarrowRegex(e);
}
function so(e, t) {
  return t._eraYearOrdinalRegex || He;
}
function _s() {
  var e = [], t = [], s = [], n = [], a, r, i = this.eras();
  for (a = 0, r = i.length; a < r; ++a)
    t.push(G(i[a].name)), e.push(G(i[a].abbr)), s.push(G(i[a].narrow)), n.push(G(i[a].name)), n.push(G(i[a].abbr)), n.push(G(i[a].narrow));
  this._erasRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  );
}
y(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
y(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Et(e, t) {
  y(0, [e, e.length], 0, t);
}
Et("gggg", "weekYear");
Et("ggggg", "weekYear");
Et("GGGG", "isoWeekYear");
Et("GGGGG", "isoWeekYear");
I("weekYear", "gg");
I("isoWeekYear", "GG");
H("weekYear", 1);
H("isoWeekYear", 1);
f("G", xt);
f("g", xt);
f("GG", W, B);
f("gg", W, B);
f("GGGG", as, ns);
f("gggg", as, ns);
f("GGGGG", Yt, Mt);
f("ggggg", Yt, Mt);
rt(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, s, n) {
    t[n.substr(0, 2)] = v(e);
  }
);
rt(["gg", "GG"], function(e, t, s, n) {
  t[n] = l.parseTwoDigitYear(e);
});
function no(e) {
  return Nn.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function ao(e) {
  return Nn.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function ro() {
  return fe(this.year(), 1, 4);
}
function io() {
  return fe(this.isoWeekYear(), 1, 4);
}
function oo() {
  var e = this.localeData()._week;
  return fe(this.year(), e.dow, e.doy);
}
function lo() {
  var e = this.localeData()._week;
  return fe(this.weekYear(), e.dow, e.doy);
}
function Nn(e, t, s, n, a) {
  var r;
  return e == null ? Xe(this, n, a).year : (r = fe(e, n, a), t > r && (t = r), uo.call(this, e, t, s, n, a));
}
function uo(e, t, s, n, a) {
  var r = _n(e, t, s, n, a), i = Qe(r.year, 0, r.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
y("Q", 0, "Qo", "quarter");
I("quarter", "Q");
H("quarter", 7);
f("Q", an);
b("Q", function(e, t) {
  t[de] = (v(e) - 1) * 3;
});
function ho(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
y("D", ["DD", 2], "Do", "date");
I("date", "D");
H("date", 9);
f("D", W);
f("DD", W, B);
f("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
b(["D", "DD"], ne);
b("Do", function(e, t) {
  t[ne] = v(e.match(W)[0]);
});
var Cn = Ie("Date", !0);
y("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
I("dayOfYear", "DDD");
H("dayOfYear", 4);
f("DDD", St);
f("DDDD", rn);
b(["DDD", "DDDD"], function(e, t, s) {
  s._dayOfYear = v(e);
});
function co(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
y("m", ["mm", 2], 0, "minute");
I("minute", "m");
H("minute", 14);
f("m", W);
f("mm", W, B);
b(["m", "mm"], Q);
var fo = Ie("Minutes", !1);
y("s", ["ss", 2], 0, "second");
I("second", "s");
H("second", 15);
f("s", W);
f("ss", W, B);
b(["s", "ss"], ce);
var mo = Ie("Seconds", !1);
y("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
y(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
y(0, ["SSS", 3], 0, "millisecond");
y(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
y(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
y(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
y(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
y(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
y(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
I("millisecond", "ms");
H("millisecond", 16);
f("S", St, an);
f("SS", St, B);
f("SSS", St, rn);
var ve, An;
for (ve = "SSSS"; ve.length <= 9; ve += "S")
  f(ve, He);
function _o(e, t) {
  t[xe] = v(("0." + e) * 1e3);
}
for (ve = "S"; ve.length <= 9; ve += "S")
  b(ve, _o);
An = Ie("Milliseconds", !1);
y("z", 0, 0, "zoneAbbr");
y("zz", 0, 0, "zoneName");
function yo() {
  return this._isUTC ? "UTC" : "";
}
function po() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var d = nt.prototype;
d.add = li;
d.calendar = _i;
d.clone = yi;
d.diff = Mi;
d.endOf = Li;
d.format = bi;
d.from = Oi;
d.fromNow = Ti;
d.to = Ri;
d.toNow = Ei;
d.get = wa;
d.invalidAt = $i;
d.isAfter = pi;
d.isBefore = wi;
d.isBetween = gi;
d.isSame = vi;
d.isSameOrAfter = ki;
d.isSameOrBefore = Di;
d.isValid = Hi;
d.lang = En;
d.locale = Rn;
d.localeData = Wn;
d.max = Hr;
d.min = Ir;
d.parsingFlags = Ui;
d.set = ga;
d.startOf = Wi;
d.subtract = ui;
d.toArray = Ci;
d.toObject = Ai;
d.toDate = Ni;
d.toISOString = Yi;
d.inspect = xi;
typeof Symbol != "undefined" && Symbol.for != null && (d[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
d.toJSON = Ii;
d.toString = Si;
d.unix = Fi;
d.valueOf = Pi;
d.creationData = Vi;
d.eraName = qi;
d.eraNarrow = zi;
d.eraAbbr = Zi;
d.eraYear = Ji;
d.year = mn;
d.isLeapYear = Aa;
d.weekYear = no;
d.isoWeekYear = ao;
d.quarter = d.quarters = ho;
d.month = cn;
d.daysInMonth = Fa;
d.week = d.weeks = Ga;
d.isoWeek = d.isoWeeks = ja;
d.weeksInYear = oo;
d.weeksInWeekYear = lo;
d.isoWeeksInYear = ro;
d.isoWeeksInISOWeekYear = io;
d.date = Cn;
d.day = d.days = ar;
d.weekday = rr;
d.isoWeekday = ir;
d.dayOfYear = co;
d.hour = d.hours = fr;
d.minute = d.minutes = fo;
d.second = d.seconds = mo;
d.millisecond = d.milliseconds = An;
d.utcOffset = Zr;
d.utc = Qr;
d.local = Xr;
d.parseZone = Kr;
d.hasAlignedHourOffset = ei;
d.isDST = ti;
d.isLocal = ni;
d.isUtcOffset = ai;
d.isUtc = xn;
d.isUTC = xn;
d.zoneAbbr = yo;
d.zoneName = po;
d.dates = Z(
  "dates accessor is deprecated. Use date instead.",
  Cn
);
d.months = Z(
  "months accessor is deprecated. Use month instead",
  cn
);
d.years = Z(
  "years accessor is deprecated. Use year instead",
  mn
);
d.zone = Z(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Jr
);
d.isDSTShifted = Z(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  si
);
function wo(e) {
  return E(e * 1e3);
}
function go() {
  return E.apply(null, arguments).parseZone();
}
function In(e) {
  return e;
}
var Y = es.prototype;
Y.calendar = aa;
Y.longDateFormat = la;
Y.invalidDate = ha;
Y.ordinal = fa;
Y.preparse = In;
Y.postformat = In;
Y.relativeTime = _a;
Y.pastFuture = ya;
Y.set = sa;
Y.eras = Gi;
Y.erasParse = ji;
Y.erasConvertYear = Bi;
Y.erasAbbrRegex = Xi;
Y.erasNameRegex = Qi;
Y.erasNarrowRegex = Ki;
Y.months = Ea;
Y.monthsShort = Wa;
Y.monthsParse = Pa;
Y.monthsRegex = Ca;
Y.monthsShortRegex = Na;
Y.week = Ha;
Y.firstDayOfYear = Va;
Y.firstDayOfWeek = $a;
Y.weekdays = Ka;
Y.weekdaysMin = tr;
Y.weekdaysShort = er;
Y.weekdaysParse = nr;
Y.weekdaysRegex = or;
Y.weekdaysShortRegex = lr;
Y.weekdaysMinRegex = ur;
Y.isPM = dr;
Y.meridiem = mr;
function gt(e, t, s, n) {
  var a = _e(), r = oe().set(n, t);
  return a[s](r, e);
}
function Hn(e, t, s) {
  if (me(e) && (t = e, e = void 0), e = e || "", t != null)
    return gt(e, t, s, "month");
  var n, a = [];
  for (n = 0; n < 12; n++)
    a[n] = gt(e, n, s, "month");
  return a;
}
function ys(e, t, s, n) {
  typeof e == "boolean" ? (me(t) && (s = t, t = void 0), t = t || "") : (t = e, s = t, e = !1, me(t) && (s = t, t = void 0), t = t || "");
  var a = _e(), r = e ? a._week.dow : 0, i, o = [];
  if (s != null)
    return gt(t, (s + r) % 7, n, "day");
  for (i = 0; i < 7; i++)
    o[i] = gt(t, (i + r) % 7, n, "day");
  return o;
}
function vo(e, t) {
  return Hn(e, t, "months");
}
function ko(e, t) {
  return Hn(e, t, "monthsShort");
}
function Do(e, t, s) {
  return ys(e, t, s, "weekdays");
}
function Mo(e, t, s) {
  return ys(e, t, s, "weekdaysShort");
}
function So(e, t, s) {
  return ys(e, t, s, "weekdaysMin");
}
ke("en", {
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
    var t = e % 10, s = v(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + s;
  }
});
l.lang = Z(
  "moment.lang is deprecated. Use moment.locale instead.",
  ke
);
l.langData = Z(
  "moment.langData is deprecated. Use moment.localeData instead.",
  _e
);
var ue = Math.abs;
function Yo() {
  var e = this._data;
  return this._milliseconds = ue(this._milliseconds), this._days = ue(this._days), this._months = ue(this._months), e.milliseconds = ue(e.milliseconds), e.seconds = ue(e.seconds), e.minutes = ue(e.minutes), e.hours = ue(e.hours), e.months = ue(e.months), e.years = ue(e.years), this;
}
function Un(e, t, s, n) {
  var a = te(t, s);
  return e._milliseconds += n * a._milliseconds, e._days += n * a._days, e._months += n * a._months, e._bubble();
}
function xo(e, t) {
  return Un(this, e, t, 1);
}
function bo(e, t) {
  return Un(this, e, t, -1);
}
function $s(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Oo() {
  var e = this._milliseconds, t = this._days, s = this._months, n = this._data, a, r, i, o, u;
  return e >= 0 && t >= 0 && s >= 0 || e <= 0 && t <= 0 && s <= 0 || (e += $s(qt(s) + t) * 864e5, t = 0, s = 0), n.milliseconds = e % 1e3, a = z(e / 1e3), n.seconds = a % 60, r = z(a / 60), n.minutes = r % 60, i = z(r / 60), n.hours = i % 24, t += z(i / 24), u = z($n(t)), s += u, t -= $s(qt(u)), o = z(s / 12), s %= 12, n.days = t, n.months = s, n.years = o, this;
}
function $n(e) {
  return e * 4800 / 146097;
}
function qt(e) {
  return e * 146097 / 4800;
}
function To(e) {
  if (!this.isValid())
    return NaN;
  var t, s, n = this._milliseconds;
  if (e = J(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + n / 864e5, s = this._months + $n(t), e) {
      case "month":
        return s;
      case "quarter":
        return s / 3;
      case "year":
        return s / 12;
    }
  else
    switch (t = this._days + Math.round(qt(this._months)), e) {
      case "week":
        return t / 7 + n / 6048e5;
      case "day":
        return t + n / 864e5;
      case "hour":
        return t * 24 + n / 36e5;
      case "minute":
        return t * 1440 + n / 6e4;
      case "second":
        return t * 86400 + n / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + n;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function Ro() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + v(this._months / 12) * 31536e6 : NaN;
}
function ye(e) {
  return function() {
    return this.as(e);
  };
}
var Eo = ye("ms"), Wo = ye("s"), Lo = ye("m"), Po = ye("h"), Fo = ye("d"), No = ye("w"), Co = ye("M"), Ao = ye("Q"), Io = ye("y");
function Ho() {
  return te(this);
}
function Uo(e) {
  return e = J(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Te(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var $o = Te("milliseconds"), Vo = Te("seconds"), Go = Te("minutes"), jo = Te("hours"), Bo = Te("days"), qo = Te("months"), zo = Te("years");
function Zo() {
  return z(this.days() / 7);
}
var he = Math.round, Pe = {
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
function Jo(e, t, s, n, a) {
  return a.relativeTime(t || 1, !!s, e, n);
}
function Qo(e, t, s, n) {
  var a = te(e).abs(), r = he(a.as("s")), i = he(a.as("m")), o = he(a.as("h")), u = he(a.as("d")), h = he(a.as("M")), _ = he(a.as("w")), c = he(a.as("y")), m = r <= s.ss && ["s", r] || r < s.s && ["ss", r] || i <= 1 && ["m"] || i < s.m && ["mm", i] || o <= 1 && ["h"] || o < s.h && ["hh", o] || u <= 1 && ["d"] || u < s.d && ["dd", u];
  return s.w != null && (m = m || _ <= 1 && ["w"] || _ < s.w && ["ww", _]), m = m || h <= 1 && ["M"] || h < s.M && ["MM", h] || c <= 1 && ["y"] || ["yy", c], m[2] = t, m[3] = +e > 0, m[4] = n, Jo.apply(null, m);
}
function Xo(e) {
  return e === void 0 ? he : typeof e == "function" ? (he = e, !0) : !1;
}
function Ko(e, t) {
  return Pe[e] === void 0 ? !1 : t === void 0 ? Pe[e] : (Pe[e] = t, e === "s" && (Pe.ss = t - 1), !0);
}
function el(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var s = !1, n = Pe, a, r;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (s = e), typeof t == "object" && (n = Object.assign({}, Pe, t), t.s != null && t.ss == null && (n.ss = t.s - 1)), a = this.localeData(), r = Qo(this, !s, n, a), s && (r = a.pastFuture(+this, r)), a.postformat(r);
}
var Ht = Math.abs;
function We(e) {
  return (e > 0) - (e < 0) || +e;
}
function Wt() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Ht(this._milliseconds) / 1e3, t = Ht(this._days), s = Ht(this._months), n, a, r, i, o = this.asSeconds(), u, h, _, c;
  return o ? (n = z(e / 60), a = z(n / 60), e %= 60, n %= 60, r = z(s / 12), s %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", u = o < 0 ? "-" : "", h = We(this._months) !== We(o) ? "-" : "", _ = We(this._days) !== We(o) ? "-" : "", c = We(this._milliseconds) !== We(o) ? "-" : "", u + "P" + (r ? h + r + "Y" : "") + (s ? h + s + "M" : "") + (t ? _ + t + "D" : "") + (a || n || e ? "T" : "") + (a ? c + a + "H" : "") + (n ? c + n + "M" : "") + (e ? c + i + "S" : "")) : "P0D";
}
var D = Rt.prototype;
D.isValid = jr;
D.abs = Yo;
D.add = xo;
D.subtract = bo;
D.as = To;
D.asMilliseconds = Eo;
D.asSeconds = Wo;
D.asMinutes = Lo;
D.asHours = Po;
D.asDays = Fo;
D.asWeeks = No;
D.asMonths = Co;
D.asQuarters = Ao;
D.asYears = Io;
D.valueOf = Ro;
D._bubble = Oo;
D.clone = Ho;
D.get = Uo;
D.milliseconds = $o;
D.seconds = Vo;
D.minutes = Go;
D.hours = jo;
D.days = Bo;
D.weeks = Zo;
D.months = qo;
D.years = zo;
D.humanize = el;
D.toISOString = Wt;
D.toString = Wt;
D.toJSON = Wt;
D.locale = Rn;
D.localeData = Wn;
D.toIsoString = Z(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Wt
);
D.lang = En;
y("X", 0, 0, "unix");
y("x", 0, 0, "valueOf");
f("x", xt);
f("X", ka);
b("X", function(e, t, s) {
  s._d = new Date(parseFloat(e) * 1e3);
});
b("x", function(e, t, s) {
  s._d = new Date(v(e));
});
//! moment.js
l.version = "2.29.4";
ea(E);
l.fn = d;
l.min = Ur;
l.max = $r;
l.now = Vr;
l.utc = oe;
l.unix = wo;
l.months = vo;
l.isDate = st;
l.locale = ke;
l.invalid = kt;
l.duration = te;
l.isMoment = ee;
l.weekdays = Do;
l.parseZone = go;
l.localeData = _e;
l.isDuration = ct;
l.monthsShort = ko;
l.weekdaysMin = So;
l.defineLocale = ls;
l.updateLocale = wr;
l.locales = gr;
l.weekdaysShort = Mo;
l.normalizeUnits = J;
l.relativeTimeRounding = Xo;
l.relativeTimeThreshold = Ko;
l.calendarFormat = mi;
l.prototype = d;
l.HTML5_FMT = {
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
function we(e) {
  return e.split("-")[1];
}
function Vn(e) {
  return e === "y" ? "height" : "width";
}
function et(e) {
  return e.split("-")[0];
}
function ps(e) {
  return ["top", "bottom"].includes(et(e)) ? "x" : "y";
}
function Vs(e, t, s) {
  let { reference: n, floating: a } = e;
  const r = n.x + n.width / 2 - a.width / 2, i = n.y + n.height / 2 - a.height / 2, o = ps(t), u = Vn(o), h = n[u] / 2 - a[u] / 2, _ = o === "x";
  let c;
  switch (et(t)) {
    case "top":
      c = { x: r, y: n.y - a.height };
      break;
    case "bottom":
      c = { x: r, y: n.y + n.height };
      break;
    case "right":
      c = { x: n.x + n.width, y: i };
      break;
    case "left":
      c = { x: n.x - a.width, y: i };
      break;
    default:
      c = { x: n.x, y: n.y };
  }
  switch (we(t)) {
    case "start":
      c[o] -= h * (s && _ ? -1 : 1);
      break;
    case "end":
      c[o] += h * (s && _ ? -1 : 1);
  }
  return c;
}
const tl = (e, t, s) => Se(void 0, null, function* () {
  const { placement: n = "bottom", strategy: a = "absolute", middleware: r = [], platform: i } = s, o = r.filter(Boolean), u = yield i.isRTL == null ? void 0 : i.isRTL(t);
  let h = yield i.getElementRects({ reference: e, floating: t, strategy: a }), { x: _, y: c } = Vs(h, n, u), m = n, w = {}, k = 0;
  for (let M = 0; M < o.length; M++) {
    const { name: x, fn: O } = o[M], { x: T, y: R, data: C, reset: q } = yield O({ x: _, y: c, initialPlacement: n, placement: m, strategy: a, middlewareData: w, rects: h, platform: i, elements: { reference: e, floating: t } });
    _ = T != null ? T : _, c = R != null ? R : c, w = Ee(V({}, w), { [x]: V(V({}, w[x]), C) }), q && k <= 50 && (k++, typeof q == "object" && (q.placement && (m = q.placement), q.rects && (h = q.rects === !0 ? yield i.getElementRects({ reference: e, floating: t, strategy: a }) : q.rects), { x: _, y: c } = Vs(h, m, u)), M = -1);
  }
  return { x: _, y: c, placement: m, strategy: a, middlewareData: w };
});
function sl(e) {
  return typeof e != "number" ? function(t) {
    return V({ top: 0, right: 0, bottom: 0, left: 0 }, t);
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function zt(e) {
  return Ee(V({}, e), { top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height });
}
function nl(e, t) {
  return Se(this, null, function* () {
    var s;
    t === void 0 && (t = {});
    const { x: n, y: a, platform: r, rects: i, elements: o, strategy: u } = e, { boundary: h = "clippingAncestors", rootBoundary: _ = "viewport", elementContext: c = "floating", altBoundary: m = !1, padding: w = 0 } = t, k = sl(w), M = o[m ? c === "floating" ? "reference" : "floating" : c], x = zt(yield r.getClippingRect({ element: (s = yield r.isElement == null ? void 0 : r.isElement(M)) == null || s ? M : M.contextElement || (yield r.getDocumentElement == null ? void 0 : r.getDocumentElement(o.floating)), boundary: h, rootBoundary: _, strategy: u })), O = c === "floating" ? Ee(V({}, i.floating), { x: n, y: a }) : i.reference, T = yield r.getOffsetParent == null ? void 0 : r.getOffsetParent(o.floating), R = (yield r.isElement == null ? void 0 : r.isElement(T)) && (yield r.getScale == null ? void 0 : r.getScale(T)) || { x: 1, y: 1 }, C = zt(r.convertOffsetParentRelativeRectToViewportRelativeRect ? yield r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: O, offsetParent: T, strategy: u }) : O);
    return { top: (x.top - C.top + k.top) / R.y, bottom: (C.bottom - x.bottom + k.bottom) / R.y, left: (x.left - C.left + k.left) / R.x, right: (C.right - x.right + k.right) / R.x };
  });
}
const al = ["top", "right", "bottom", "left"], Gs = al.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []), rl = { left: "right", right: "left", bottom: "top", top: "bottom" };
function js(e) {
  return e.replace(/left|right|bottom|top/g, (t) => rl[t]);
}
function il(e, t, s) {
  s === void 0 && (s = !1);
  const n = we(e), a = ps(e), r = Vn(a);
  let i = a === "x" ? n === (s ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (i = js(i)), { main: i, cross: js(i) };
}
const ol = { start: "end", end: "start" };
function ll(e) {
  return e.replace(/start|end/g, (t) => ol[t]);
}
const ul = function(e) {
  return e === void 0 && (e = {}), { name: "autoPlacement", options: e, fn(s) {
    return Se(this, null, function* () {
      var n, a, r;
      const { rects: i, middlewareData: o, placement: u, platform: h, elements: _ } = s, Ge = e, { crossAxis: c = !1, alignment: m, allowedPlacements: w = Gs, autoAlignment: k = !0 } = Ge, M = Cs(Ge, ["crossAxis", "alignment", "allowedPlacements", "autoAlignment"]), x = m !== void 0 || w === Gs ? function(F, se, pe) {
        return (F ? [...pe.filter((U) => we(U) === F), ...pe.filter((U) => we(U) !== F)] : pe.filter((U) => et(U) === U)).filter((U) => !F || we(U) === F || !!se && ll(U) !== U);
      }(m || null, k, w) : w, O = yield nl(s, M), T = ((n = o.autoPlacement) == null ? void 0 : n.index) || 0, R = x[T];
      if (R == null)
        return {};
      const { main: C, cross: q } = il(R, i, yield h.isRTL == null ? void 0 : h.isRTL(_.floating));
      if (u !== R)
        return { reset: { placement: x[0] } };
      const it = [O[et(R)], O[C], O[q]], Re = [...((a = o.autoPlacement) == null ? void 0 : a.overflows) || [], { placement: R, overflows: it }], Ue = x[T + 1];
      if (Ue)
        return { data: { index: T + 1, overflows: Re }, reset: { placement: Ue } };
      const $e = Re.map((F) => {
        const se = we(F.placement);
        return [F.placement, se && c ? F.overflows.slice(0, 2).reduce((pe, U) => pe + U, 0) : F.overflows[0], F.overflows];
      }).sort((F, se) => F[1] - se[1]), Ve = ((r = $e.filter((F) => F[2].slice(0, we(F[0]) ? 2 : 3).every((se) => se <= 0))[0]) == null ? void 0 : r[0]) || $e[0][0];
      return Ve !== u ? { data: { index: T + 1, overflows: Re }, reset: { placement: Ve } } : {};
    });
  } };
}, hl = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, fn(s) {
    return Se(this, null, function* () {
      const { x: n, y: a } = s, r = yield function(i, o) {
        return Se(this, null, function* () {
          const { placement: u, platform: h, elements: _ } = i, c = yield h.isRTL == null ? void 0 : h.isRTL(_.floating), m = et(u), w = we(u), k = ps(u) === "x", M = ["left", "top"].includes(m) ? -1 : 1, x = c && k ? -1 : 1, O = typeof o == "function" ? o(i) : o;
          let { mainAxis: T, crossAxis: R, alignmentAxis: C } = typeof O == "number" ? { mainAxis: O, crossAxis: 0, alignmentAxis: null } : V({ mainAxis: 0, crossAxis: 0, alignmentAxis: null }, O);
          return w && typeof C == "number" && (R = w === "end" ? -1 * C : C), k ? { x: R * x, y: T * M } : { x: T * M, y: R * x };
        });
      }(s, e);
      return { x: n + r.x, y: a + r.y, data: r };
    });
  } };
};
function j(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ae(e) {
  return j(e).getComputedStyle(e);
}
const Bs = Math.min, Ze = Math.max, vt = Math.round;
function Gn(e) {
  const t = ae(e);
  let s = parseFloat(t.width), n = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, i = vt(s) !== a || vt(n) !== r;
  return i && (s = a, n = r), { width: s, height: n, fallback: i };
}
function Me(e) {
  return Bn(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ht;
function jn() {
  if (ht)
    return ht;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ht = e.brands.map((t) => t.brand + "/" + t.version).join(" "), ht) : navigator.userAgent;
}
function re(e) {
  return e instanceof j(e).HTMLElement;
}
function X(e) {
  return e instanceof j(e).Element;
}
function Bn(e) {
  return e instanceof j(e).Node;
}
function qs(e) {
  return typeof ShadowRoot == "undefined" ? !1 : e instanceof j(e).ShadowRoot || e instanceof ShadowRoot;
}
function Lt(e) {
  const { overflow: t, overflowX: s, overflowY: n, display: a } = ae(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + s) && !["inline", "contents"].includes(a);
}
function dl(e) {
  return ["table", "td", "th"].includes(Me(e));
}
function Zt(e) {
  const t = /firefox/i.test(jn()), s = ae(e), n = s.backdropFilter || s.WebkitBackdropFilter;
  return s.transform !== "none" || s.perspective !== "none" || !!n && n !== "none" || t && s.willChange === "filter" || t && !!s.filter && s.filter !== "none" || ["transform", "perspective"].some((a) => s.willChange.includes(a)) || ["paint", "layout", "strict", "content"].some((a) => {
    const r = s.contain;
    return r != null && r.includes(a);
  });
}
function Jt() {
  return /^((?!chrome|android).)*safari/i.test(jn());
}
function ws(e) {
  return ["html", "body", "#document"].includes(Me(e));
}
function qn(e) {
  return X(e) ? e : e.contextElement;
}
const zn = { x: 1, y: 1 };
function Ae(e) {
  const t = qn(e);
  if (!re(t))
    return zn;
  const s = t.getBoundingClientRect(), { width: n, height: a, fallback: r } = Gn(t);
  let i = (r ? vt(s.width) : s.width) / n, o = (r ? vt(s.height) : s.height) / a;
  return i && Number.isFinite(i) || (i = 1), o && Number.isFinite(o) || (o = 1), { x: i, y: o };
}
function Oe(e, t, s, n) {
  var a, r;
  t === void 0 && (t = !1), s === void 0 && (s = !1);
  const i = e.getBoundingClientRect(), o = qn(e);
  let u = zn;
  t && (n ? X(n) && (u = Ae(n)) : u = Ae(e));
  const h = o ? j(o) : window, _ = Jt() && s;
  let c = (i.left + (_ && ((a = h.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / u.x, m = (i.top + (_ && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / u.y, w = i.width / u.x, k = i.height / u.y;
  if (o) {
    const M = j(o), x = n && X(n) ? j(n) : n;
    let O = M.frameElement;
    for (; O && n && x !== M; ) {
      const T = Ae(O), R = O.getBoundingClientRect(), C = getComputedStyle(O);
      R.x += (O.clientLeft + parseFloat(C.paddingLeft)) * T.x, R.y += (O.clientTop + parseFloat(C.paddingTop)) * T.y, c *= T.x, m *= T.y, w *= T.x, k *= T.y, c += R.x, m += R.y, O = j(O).frameElement;
    }
  }
  return { width: w, height: k, top: m, right: c + w, bottom: m + k, left: c, x: c, y: m };
}
function De(e) {
  return ((Bn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Pt(e) {
  return X(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Zn(e) {
  return Oe(De(e)).left + Pt(e).scrollLeft;
}
function tt(e) {
  if (Me(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || qs(e) && e.host || De(e);
  return qs(t) ? t.host : t;
}
function Jn(e) {
  const t = tt(e);
  return ws(t) ? t.ownerDocument.body : re(t) && Lt(t) ? t : Jn(t);
}
function Je(e, t) {
  var s;
  t === void 0 && (t = []);
  const n = Jn(e), a = n === ((s = e.ownerDocument) == null ? void 0 : s.body), r = j(n);
  return a ? t.concat(r, r.visualViewport || [], Lt(n) ? n : []) : t.concat(n, Je(n));
}
function zs(e, t, s) {
  let n;
  if (t === "viewport")
    n = function(i, o) {
      const u = j(i), h = De(i), _ = u.visualViewport;
      let c = h.clientWidth, m = h.clientHeight, w = 0, k = 0;
      if (_) {
        c = _.width, m = _.height;
        const M = Jt();
        (!M || M && o === "fixed") && (w = _.offsetLeft, k = _.offsetTop);
      }
      return { width: c, height: m, x: w, y: k };
    }(e, s);
  else if (t === "document")
    n = function(i) {
      const o = De(i), u = Pt(i), h = i.ownerDocument.body, _ = Ze(o.scrollWidth, o.clientWidth, h.scrollWidth, h.clientWidth), c = Ze(o.scrollHeight, o.clientHeight, h.scrollHeight, h.clientHeight);
      let m = -u.scrollLeft + Zn(i);
      const w = -u.scrollTop;
      return ae(h).direction === "rtl" && (m += Ze(o.clientWidth, h.clientWidth) - _), { width: _, height: c, x: m, y: w };
    }(De(e));
  else if (X(t))
    n = function(i, o) {
      const u = Oe(i, !0, o === "fixed"), h = u.top + i.clientTop, _ = u.left + i.clientLeft, c = re(i) ? Ae(i) : { x: 1, y: 1 };
      return { width: i.clientWidth * c.x, height: i.clientHeight * c.y, x: _ * c.x, y: h * c.y };
    }(t, s);
  else {
    const i = V({}, t);
    if (Jt()) {
      var a, r;
      const o = j(e);
      i.x -= ((a = o.visualViewport) == null ? void 0 : a.offsetLeft) || 0, i.y -= ((r = o.visualViewport) == null ? void 0 : r.offsetTop) || 0;
    }
    n = i;
  }
  return zt(n);
}
function Zs(e, t) {
  return re(e) && ae(e).position !== "fixed" ? t ? t(e) : e.offsetParent : null;
}
function Js(e, t) {
  const s = j(e);
  let n = Zs(e, t);
  for (; n && dl(n) && ae(n).position === "static"; )
    n = Zs(n, t);
  return n && (Me(n) === "html" || Me(n) === "body" && ae(n).position === "static" && !Zt(n)) ? s : n || function(a) {
    let r = tt(a);
    for (; re(r) && !ws(r); ) {
      if (Zt(r))
        return r;
      r = tt(r);
    }
    return null;
  }(e) || s;
}
function cl(e, t, s) {
  const n = re(t), a = De(t), r = Oe(e, !0, s === "fixed", t);
  let i = { scrollLeft: 0, scrollTop: 0 };
  const o = { x: 0, y: 0 };
  if (n || !n && s !== "fixed")
    if ((Me(t) !== "body" || Lt(a)) && (i = Pt(t)), re(t)) {
      const u = Oe(t, !0);
      o.x = u.x + t.clientLeft, o.y = u.y + t.clientTop;
    } else
      a && (o.x = Zn(a));
  return { x: r.left + i.scrollLeft - o.x, y: r.top + i.scrollTop - o.y, width: r.width, height: r.height };
}
const fl = { getClippingRect: function(e) {
  let { element: t, boundary: s, rootBoundary: n, strategy: a } = e;
  const r = s === "clippingAncestors" ? function(h, _) {
    const c = _.get(h);
    if (c)
      return c;
    let m = Je(h).filter((x) => X(x) && Me(x) !== "body"), w = null;
    const k = ae(h).position === "fixed";
    let M = k ? tt(h) : h;
    for (; X(M) && !ws(M); ) {
      const x = ae(M), O = Zt(M);
      x.position === "fixed" ? w = null : (k ? O || w : O || x.position !== "static" || !w || !["absolute", "fixed"].includes(w.position)) ? w = x : m = m.filter((T) => T !== M), M = tt(M);
    }
    return _.set(h, m), m;
  }(t, this._c) : [].concat(s), i = [...r, n], o = i[0], u = i.reduce((h, _) => {
    const c = zs(t, _, a);
    return h.top = Ze(c.top, h.top), h.right = Bs(c.right, h.right), h.bottom = Bs(c.bottom, h.bottom), h.left = Ze(c.left, h.left), h;
  }, zs(t, o, a));
  return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: s, strategy: n } = e;
  const a = re(s), r = De(s);
  if (s === r)
    return t;
  let i = { scrollLeft: 0, scrollTop: 0 }, o = { x: 1, y: 1 };
  const u = { x: 0, y: 0 };
  if ((a || !a && n !== "fixed") && ((Me(s) !== "body" || Lt(r)) && (i = Pt(s)), re(s))) {
    const h = Oe(s);
    o = Ae(s), u.x = h.x + s.clientLeft, u.y = h.y + s.clientTop;
  }
  return { width: t.width * o.x, height: t.height * o.y, x: t.x * o.x - i.scrollLeft * o.x + u.x, y: t.y * o.y - i.scrollTop * o.y + u.y };
}, isElement: X, getDimensions: function(e) {
  return re(e) ? Gn(e) : e.getBoundingClientRect();
}, getOffsetParent: Js, getDocumentElement: De, getScale: Ae, getElementRects(e) {
  return Se(this, null, function* () {
    let { reference: t, floating: s, strategy: n } = e;
    const a = this.getOffsetParent || Js, r = this.getDimensions;
    return { reference: cl(t, yield a(s), n), floating: V({ x: 0, y: 0 }, yield r(s)) };
  });
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => ae(e).direction === "rtl" };
function ml(e, t, s, n) {
  n === void 0 && (n = {});
  const { ancestorScroll: a = !0, ancestorResize: r = !0, elementResize: i = !0, animationFrame: o = !1 } = n, u = a && !o, h = u || r ? [...X(e) ? Je(e) : e.contextElement ? Je(e.contextElement) : [], ...Je(t)] : [];
  h.forEach((w) => {
    u && w.addEventListener("scroll", s, { passive: !0 }), r && w.addEventListener("resize", s);
  });
  let _, c = null;
  if (i) {
    let w = !0;
    c = new ResizeObserver(() => {
      w || s(), w = !1;
    }), X(e) && !o && c.observe(e), X(e) || !e.contextElement || o || c.observe(e.contextElement), c.observe(t);
  }
  let m = o ? Oe(e) : null;
  return o && function w() {
    const k = Oe(e);
    !m || k.x === m.x && k.y === m.y && k.width === m.width && k.height === m.height || s(), m = k, _ = requestAnimationFrame(w);
  }(), s(), () => {
    var w;
    h.forEach((k) => {
      u && k.removeEventListener("scroll", s), r && k.removeEventListener("resize", s);
    }), (w = c) == null || w.disconnect(), c = null, o && cancelAnimationFrame(_);
  };
}
const _l = (e, t, s) => {
  const n = /* @__PURE__ */ new Map(), a = V({ platform: fl }, s), r = Ee(V({}, a.platform), { _c: n });
  return tl(e, t, Ee(V({}, a), { platform: r }));
};
class yl {
  constructor(t) {
    p(this, "options");
    p(this, "container");
    p(this, "dates");
    p(this, "months");
    p(this, "years");
    p(this, "nowDay");
    p(this, "nowMonth");
    p(this, "quickActions");
    p(this, "locale");
    this.options = Object.assign(this, t), this.container = this.options.container, this.dates = this.options.dates, this.months = this.options.months, this.years = this.options.years, this.nowDay = this.options.nowDay, this.nowMonth = this.options.nowMonth, this.quickActions = this.options.quickActions, this.locale = this.options.locale;
  }
  render() {
    var t, s, n, a, r, i, o, u, h, _, c;
    this.container.innerHTML += `<div class="calendarify">
    <div class="calendarify__quick-actions ${this.quickActions ? "" : "d-none"}">
      <button data-action="today">${(n = (s = (t = this.locale.lang) == null ? void 0 : t.ui) == null ? void 0 : s.quickActions) == null ? void 0 : n.today}</button>
      <button data-action="tomorrow">${(i = (r = (a = this.locale.lang) == null ? void 0 : a.ui) == null ? void 0 : r.quickActions) == null ? void 0 : i.tomorrow}</button>
      <button data-action="in-2-days">${(h = (u = (o = this.locale.lang) == null ? void 0 : o.ui) == null ? void 0 : u.quickActions) == null ? void 0 : h.inTwoDays}</button>
    </div>
    <nav class="calendarify__navigations">
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
    <div class="calendarify__calendar">
      <ul class="days-wrapper wrapper">
      ${(c = (_ = this.locale.lang) == null ? void 0 : _.weekdays) == null ? void 0 : c.map((m) => `<li>${m.slice(0, 3)}</li>`).join("")}
      </ul>
      <ul class="dates-wrapper wrapper">
          ${this.dates.map((m) => `<li><button ${m.disabled ? "disabled" : ""} type="button" class="date-button ${this.getHolidayClass({ date: m.date, nowMonth: this.nowMonth })} ${this.nowDay == String(m.date) ? "active" : ""}">${m.date}</button></li>`).join("")}
      </ul>
      <ul class="months-wrapper wrapper d-none">
        ${this.months.map((m, w) => {
      var x;
      const k = (x = this.locale.lang) == null ? void 0 : x.months[w].slice(0, 3), M = l().format("M");
      return `<li><button class="${m == M ? "active" : ""}" data-date="${m}" type="button">${k}</button></li>`;
    }).join("")}
      </ul>
      <ul class="years-wrapper wrapper d-none">
        ${this.years.map((m) => `<li><button data-date="${m}" type="button">${m}</button></li>`).join("")}
      </ul>
    </div>
  </div>`;
  }
  getHolidayClass(t) {
    const { nowMonth: s, date: n } = t, a = new Date(`${s}-${n}`).getDay(), r = a === 0, i = a === 6;
    let o = "";
    return r ? o = "holiday" : i && (o = "pre-holiday"), o;
  }
}
class wl {
  constructor(t, s) {
    p(this, "options");
    p(this, "locale");
    p(this, "startDate");
    p(this, "accentColor", "#0090FC");
    p(this, "isDark", !1);
    p(this, "zIndex", 1e3);
    p(this, "customClass", []);
    p(this, "quickActions", !0);
    p(this, "onChange");
    p(this, "_container");
    p(this, "_calendarWrapper");
    p(this, "_datepickerInput");
    p(this, "_datesWrapperEl");
    p(this, "_monthsWrapperEl");
    p(this, "_yearsWrapperEl");
    p(this, "_months");
    p(this, "_dates");
    p(this, "_nowMonth");
    p(this, "_nowDay");
    p(this, "_nowYear");
    p(this, "_dateButtons");
    p(this, "_expandButton");
    p(this, "_prevButton");
    p(this, "_nextButton");
    p(this, "_date");
    p(this, "_isExpanded", !1);
    p(this, "_expandedMode", "months");
    p(this, "_outputDate");
    p(this, "_quickButtons");
    p(this, "_wrapperEls");
    p(this, "_yearRangeButton");
    p(this, "_systemFormat", "YYYY-MM-DD");
    p(this, "_helpers");
    p(this, "_inputSelector");
    p(this, "_wasExecuted", !1);
    p(this, "_isSetted", !1);
    var a, r, i, o, u, h, _, c, m, w, k, M, x, O, T, R, C, q, it, Re, Ue, $e, Ve, Ge, F, se, pe, U, gs, vs, ks, Ds, Ms, Ss, Ys, xs, bs, Os, Ts, Rs, Es, Ws, Ls, Ps;
    const n = document.documentElement;
    this.options = Object.assign(this, s), n.style.setProperty("--accentColor", (a = this.options.accentColor) != null ? a : this.accentColor), this.onChange = this.options.onChange, this._inputSelector = t, this.locale = {
      format: (o = (i = (r = this.options) == null ? void 0 : r.locale) == null ? void 0 : i.format) != null ? o : this._systemFormat,
      lang: {
        code: (c = (_ = (h = (u = this.options) == null ? void 0 : u.locale) == null ? void 0 : h.lang) == null ? void 0 : _.code) != null ? c : "en",
        ui: {
          quickActions: {
            today: (O = (x = (M = (k = (w = (m = this.options) == null ? void 0 : m.locale) == null ? void 0 : w.lang) == null ? void 0 : k.ui) == null ? void 0 : M.quickActions) == null ? void 0 : x.today) != null ? O : "Today",
            tomorrow: (Re = (it = (q = (C = (R = (T = this.options) == null ? void 0 : T.locale) == null ? void 0 : R.lang) == null ? void 0 : C.ui) == null ? void 0 : q.quickActions) == null ? void 0 : it.tomorrow) != null ? Re : "Tomorrow",
            inTwoDays: (se = (F = (Ge = (Ve = ($e = (Ue = this.options) == null ? void 0 : Ue.locale) == null ? void 0 : $e.lang) == null ? void 0 : Ve.ui) == null ? void 0 : Ge.quickActions) == null ? void 0 : F.inTwoDays) != null ? se : "In 2 Days"
          }
        },
        months: (vs = (gs = (U = (pe = this.options) == null ? void 0 : pe.locale) == null ? void 0 : U.lang) == null ? void 0 : gs.months) != null ? vs : l.months(),
        weekdays: (Ss = (Ms = (Ds = (ks = this.options) == null ? void 0 : ks.locale) == null ? void 0 : Ds.lang) == null ? void 0 : Ms.weekdays) != null ? Ss : l.weekdays()
      }
    }, this.startDate = (Ys = this.options.startDate) != null ? Ys : l().format(this._systemFormat), this._date = (xs = this.options.startDate) != null ? xs : this.startDate, this._months = [];
    for (let Ft = 0; Ft < 12; Ft++)
      this._months.push(String(Ft + 1));
    this._nowMonth = l(this._date).format("YYYY-MM"), this._nowDay = l(this._date).format("D"), this._nowYear = l(this._date).format("YYYY"), this._outputDate = l(this._date).format(this.locale.format), this._dates = [], this.loopDaysMonths(), this._helpers = new yl({
      container: (bs = document.querySelector(t)) == null ? void 0 : bs.parentElement,
      dates: this._dates,
      months: this._months,
      years: this._years,
      nowMonth: this._nowMonth,
      nowDay: this._nowDay,
      quickActions: this.options.quickActions,
      locale: this.options.locale
    }), this._helpers.render(), l.updateLocale((Rs = (Ts = (Os = this.options) == null ? void 0 : Os.locale) == null ? void 0 : Ts.lang) == null ? void 0 : Rs.code, { months: (Ws = (Es = this.options.locale) == null ? void 0 : Es.lang) == null ? void 0 : Ws.months, weekdays: (Ps = (Ls = this.options.locale) == null ? void 0 : Ls.lang) == null ? void 0 : Ps.weekdays }), this._container = document.querySelector(".calendarify"), this._datepickerInput = document.querySelector(t), this._datesWrapperEl = this._container.querySelector(".dates-wrapper"), this._monthsWrapperEl = this._container.querySelector(".months-wrapper"), this._yearsWrapperEl = this._container.querySelector(".years-wrapper"), this._expandButton = this._container.querySelector('.calendarify__navigations button[data-action="expand"]'), this._dateButtons = this._container.querySelectorAll(".date-button"), this._prevButton = this._container.querySelector('.calendarify__navigations button[data-action="prev"]'), this._nextButton = this._container.querySelector('.calendarify__navigations button[data-action="next"]'), this._calendarWrapper = this._container.querySelector(".calendarify__calendar"), this._quickButtons = this._container.querySelectorAll(".quick-actions button"), this._wrapperEls = this._calendarWrapper.querySelectorAll(".wrapper:not(:last-child, :nth-child(3))"), this._yearRangeButton = this._container.querySelector('.calendarify__navigations button[data-action="year-range"]');
  }
  init() {
    l.suppressDeprecationWarnings = !0, this.showValue(), this.changeState(), this._datepickerInput.spellcheck = !1, this._datepickerInput.autocomplete = "off", this._datepickerInput.addEventListener("input", (t) => {
      const s = t.target;
      s.value = this._outputDate;
    }), this.stylingContainer(), this._prevButton.addEventListener("click", this.prevMonth.bind(this)), this._nextButton.addEventListener("click", this.nextMonth.bind(this)), this._expandButton.addEventListener("click", this.expand.bind(this)), this._datepickerInput.addEventListener("focus", () => {
      this._wasExecuted = !0, this._container.classList.add("show");
    }), window.addEventListener("click", this.hideOnOutsideClick.bind(this)), this._quickButtons.forEach((t) => t.addEventListener("click", this.quickAction.bind(this)));
  }
  stylingContainer() {
    var n, a, r;
    (n = this.options) != null && n.isDark && this._container.setAttribute("data-theme", "dark"), (a = this.options) != null && a.zIndex && this._container.style.setProperty("--z-index", String(this.options.zIndex)), (r = this.options) != null && r.customClass && this.customClass.forEach((i) => this._container.classList.add(i));
    const { _datepickerInput: t, _container: s } = this;
    ml(t, s, () => {
      _l(t, s, {
        placement: "bottom",
        middleware: [hl(10), ul({ alignment: "start", allowedPlacements: ["top", "bottom"] })]
      }).then(({ x: i, y: o }) => {
        Object.assign(this._container.style, { top: `${o}px`, left: `${i}px` });
      });
    });
  }
  get _years() {
    const t = [], s = l(this._date), n = l(this._date).add(11, "y");
    for (; n.diff(s, "years") >= 0; )
      t.push(s.format("YYYY")), s.add(1, "year");
    return t;
  }
  quickAction(t) {
    switch (t.target.getAttribute("data-action")) {
      case "today":
        this._date = this.startDate;
        break;
      case "tomorrow":
        this._date = l(this.startDate).add(1, "days").format(this._systemFormat);
        break;
      default:
        this._date = l(this.startDate).add(2, "days").format(this._systemFormat);
        break;
    }
    this.showValue(), this.changeState(), this.resetUI();
  }
  showValue() {
    this._outputDate = l(this._date).format(this.locale.format), this._datepickerInput.value = this._outputDate;
  }
  hideOnOutsideClick(t) {
    const s = t.target;
    !s.closest(this._inputSelector) && !s.closest(".calendarify") && (this._container.classList.remove("show"), this.doneState(), this._wasExecuted = !1);
  }
  expand() {
    this._isExpanded = !0, this._expandButton.textContent = l(this._date).format("YYYY"), this._wrapperEls.forEach((t) => t.classList.add("d-none")), this._monthsWrapperEl.classList.remove("d-none"), this.showMonths();
  }
  showMonths() {
    this._expandButton.classList.add("d-none"), this._yearRangeButton.classList.remove("d-none");
    const t = this._monthsWrapperEl.querySelectorAll("button");
    t.forEach((s) => s.addEventListener("click", (n) => this.changeMonth(n, t))), this._yearRangeButton.addEventListener("click", this.showYears.bind(this));
  }
  showYears() {
    this._expandedMode = "years", this._monthsWrapperEl.classList.add("d-none"), this._yearsWrapperEl.classList.remove("d-none"), this._yearsWrapperEl.innerHTML = `${this._years.map((s) => `<li><button class="${s == this._nowYear ? "active" : ""}" data-date="${s}" type="button">${s}</button></li>`).join("")}`, this._yearsWrapperEl.querySelectorAll("button").forEach((s) => s.addEventListener("click", this.changeYear.bind(this))), this.changeState();
  }
  changeYear(t) {
    const n = t.target.getAttribute("data-date"), a = l(this._nowMonth).format("MM");
    this._date = l(`${n}-${a}-${this._nowDay}`).format(this._systemFormat), this._nowYear = n, this._yearsWrapperEl.classList.add("d-none"), this._monthsWrapperEl.classList.remove("d-none"), this._expandedMode = "months", this.changeState();
  }
  changeMonth(t, s) {
    this._wrapperEls.forEach((o) => o.classList.remove("d-none")), s.forEach((o) => o.classList.remove("active"));
    const n = t.target, a = n.getAttribute("data-date"), r = l(this._date).format("YYYY"), i = l(new Date(`${r} ${a} ${this._nowDay}`));
    this._date = l(i).format(this._systemFormat), n.classList.add("active"), this._isExpanded = !1, this._expandedMode = "months", this.changeState(), this.resetUI();
  }
  doneState() {
    this._container.classList.remove("show");
    const t = {
      date: {
        default: l(this._outputDate).toDate(),
        iso: l(this._outputDate).toISOString()
      },
      formatted: {
        relative: l(this._outputDate).fromNow(),
        calendar: l(this._outputDate).calendar()
      },
      unix: {
        seconds: l(this._outputDate).unix(),
        milliseconds: +l(this._outputDate)
      },
      locale: this.locale,
      partials: {
        day: l(this._outputDate).format("DD"),
        month: l(this._outputDate).format("MM"),
        year: l(this._outputDate).format("YYYY")
      }
    };
    this.resetUI();
    const { onChange: s, _wasExecuted: n, _isSetted: a } = this;
    s && n && a && (s(t), this._isSetted = !1);
  }
  resetUI() {
    this._monthsWrapperEl.classList.add("d-none"), this._yearsWrapperEl.classList.add("d-none"), this._wrapperEls.forEach((t) => t.classList.remove("d-none")), this._isExpanded = !1, this._monthsWrapperEl.classList.add("d-none"), this._yearsWrapperEl.classList.add("d-none"), this._expandButton.classList.remove("d-none"), this._yearRangeButton.classList.add("d-none"), this.changeState();
  }
  changeState() {
    var n, a;
    this._dates = [], this._nowMonth = l(this._date).format("YYYY-MM"), this._nowDay = l(this._date).format("D"), this.loopDaysMonths();
    const t = l(this._nowMonth).format("M"), s = l(this._nowMonth).format("YYYY");
    switch (this._expandButton.textContent = `${(n = this.locale.lang) == null ? void 0 : n.months[+t - 1]} ${s}`, this._expandedMode) {
      case "years":
        this._yearRangeButton.textContent = `${this._years[0]} - ${this._years[this._years.length - 1]}`;
        break;
      default:
        this._yearRangeButton.textContent = l(this._date).format("YYYY");
        break;
    }
    if (this.renderDates(), this._dateButtons = this._datesWrapperEl.querySelectorAll(".date-button"), this._dateButtons.forEach((r) => r.addEventListener("click", this.setDate.bind(this))), this._expandedMode == "months" && this._dates.slice(0, 7).every((i) => i.disabled))
      for (let i = 0; i < 7; i++)
        (a = this._dateButtons[i].parentElement) == null || a.classList.add("d-none");
  }
  loopDaysMonths() {
    const t = l(this._date).daysInMonth(), s = l(new Date(this._nowMonth)).isoWeekday(), n = l(this._date).subtract(1, "months").daysInMonth();
    for (let a = 1; a <= s; a++)
      this._dates.unshift({ disabled: !0, date: String(n + 1 - a) });
    for (let a = 1; a <= t; a++)
      this._dates.push({ disabled: !1, date: String(a) });
  }
  renderDates() {
    this._datesWrapperEl.innerHTML = `${this._dates.map((t) => `<li><button ${t.disabled ? "disabled" : ""} type="button" class="date-button ${this._helpers.getHolidayClass({ date: t.date, nowMonth: this._nowMonth })} ${this._nowDay == String(t.date) ? "active" : ""}">${t.date}</button></li>`).join("")}`;
  }
  setDate(t) {
    this._isSetted = !0;
    const s = t.target;
    this._dateButtons.forEach((n) => n.classList.remove("active")), this._nowDay = String(s.textContent), this._date = `${l(`${this._nowMonth}-${this._nowDay}`).format(this._systemFormat)}`, this.showValue(), s.classList.add("active");
  }
  prevMonth() {
    if (this._isExpanded)
      switch (this._expandedMode) {
        case "months":
          this._date = l(`${this._nowMonth}-${this._nowDay}`).subtract(1, "years").format(this._systemFormat);
          break;
        default:
          this._date = l(`${this._nowMonth}-${this._nowDay}`).subtract(10, "years").format(this._systemFormat), this.showYears();
          break;
      }
    else
      this._date = l(`${this._nowMonth}-${this._nowDay}`).subtract(1, "months").format(this._systemFormat);
    this.changeState();
  }
  nextMonth() {
    if (this._isExpanded)
      switch (this._expandedMode) {
        case "months":
          this._date = l(`${this._nowMonth}-${this._nowDay}`).add(1, "years").format(this._systemFormat);
          break;
        default:
          this._date = l(`${this._nowMonth}-${this._nowDay}`).add(10, "years").format(this._systemFormat), this.showYears();
          break;
      }
    else
      this._date = l(`${this._nowMonth}-${this._nowDay}`).add(1, "months").format(this._systemFormat);
    this.changeState();
  }
}
export {
  wl as default
};
