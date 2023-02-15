var Ms = Object.defineProperty;
var Os = (e, t, r) => t in e ? Ms(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var v = (e, t, r) => (Os(e, typeof t != "symbol" ? t + "" : t, r), r);
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var ba;
function u() {
  return ba.apply(null, arguments);
}
function xs(e) {
  ba = e;
}
function he(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Ze(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function x(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function kr(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (x(e, t))
      return !1;
  return !0;
}
function X(e) {
  return e === void 0;
}
function Pe(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function xt(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Da(e, t) {
  var r = [], a, s = e.length;
  for (a = 0; a < s; ++a)
    r.push(t(e[a], a));
  return r;
}
function Ce(e, t) {
  for (var r in t)
    x(t, r) && (e[r] = t[r]);
  return x(t, "toString") && (e.toString = t.toString), x(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function Se(e, t, r, a) {
  return qa(e, t, r, a, !0).utc();
}
function Ys() {
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
function w(e) {
  return e._pf == null && (e._pf = Ys()), e._pf;
}
var pr;
Array.prototype.some ? pr = Array.prototype.some : pr = function(e) {
  var t = Object(this), r = t.length >>> 0, a;
  for (a = 0; a < r; a++)
    if (a in t && e.call(this, t[a], a, t))
      return !0;
  return !1;
};
function Mr(e) {
  if (e._isValid == null) {
    var t = w(e), r = pr.call(t.parsedDateParts, function(s) {
      return s != null;
    }), a = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r);
    if (e._strict && (a = a && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = a;
    else
      return a;
  }
  return e._isValid;
}
function Zt(e) {
  var t = Se(NaN);
  return e != null ? Ce(w(t), e) : w(t).userInvalidated = !0, t;
}
var na = u.momentProperties = [], dr = !1;
function Or(e, t) {
  var r, a, s, n = na.length;
  if (X(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), X(t._i) || (e._i = t._i), X(t._f) || (e._f = t._f), X(t._l) || (e._l = t._l), X(t._strict) || (e._strict = t._strict), X(t._tzm) || (e._tzm = t._tzm), X(t._isUTC) || (e._isUTC = t._isUTC), X(t._offset) || (e._offset = t._offset), X(t._pf) || (e._pf = w(t)), X(t._locale) || (e._locale = t._locale), n > 0)
    for (r = 0; r < n; r++)
      a = na[r], s = t[a], X(s) || (e[a] = s);
  return e;
}
function Yt(e) {
  Or(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), dr === !1 && (dr = !0, u.updateOffset(this), dr = !1);
}
function fe(e) {
  return e instanceof Yt || e != null && e._isAMomentObject != null;
}
function Sa(e) {
  u.suppressDeprecationWarnings === !1 && typeof console != "undefined" && console.warn && console.warn("Deprecation warning: " + e);
}
function ie(e, t) {
  var r = !0;
  return Ce(function() {
    if (u.deprecationHandler != null && u.deprecationHandler(null, e), r) {
      var a = [], s, n, i, o = arguments.length;
      for (n = 0; n < o; n++) {
        if (s = "", typeof arguments[n] == "object") {
          s += `
[` + n + "] ";
          for (i in arguments[0])
            x(arguments[0], i) && (s += i + ": " + arguments[0][i] + ", ");
          s = s.slice(0, -2);
        } else
          s = arguments[n];
        a.push(s);
      }
      Sa(
        e + `
Arguments: ` + Array.prototype.slice.call(a).join("") + `
` + new Error().stack
      ), r = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var ia = {};
function ka(e, t) {
  u.deprecationHandler != null && u.deprecationHandler(e, t), ia[e] || (Sa(t), ia[e] = !0);
}
u.suppressDeprecationWarnings = !1;
u.deprecationHandler = null;
function ke(e) {
  return typeof Function != "undefined" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function Es(e) {
  var t, r;
  for (r in e)
    x(e, r) && (t = e[r], ke(t) ? this[r] = t : this["_" + r] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function mr(e, t) {
  var r = Ce({}, e), a;
  for (a in t)
    x(t, a) && (Ze(e[a]) && Ze(t[a]) ? (r[a] = {}, Ce(r[a], e[a]), Ce(r[a], t[a])) : t[a] != null ? r[a] = t[a] : delete r[a]);
  for (a in e)
    x(e, a) && !x(t, a) && Ze(e[a]) && (r[a] = Ce({}, r[a]));
  return r;
}
function xr(e) {
  e != null && this.set(e);
}
var yr;
Object.keys ? yr = Object.keys : yr = function(e) {
  var t, r = [];
  for (t in e)
    x(e, t) && r.push(t);
  return r;
};
var Ts = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Ps(e, t, r) {
  var a = this._calendar[e] || this._calendar.sameElse;
  return ke(a) ? a.call(t, r) : a;
}
function be(e, t, r) {
  var a = "" + Math.abs(e), s = t - a.length, n = e >= 0;
  return (n ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + a;
}
var Yr = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Lt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, cr = {}, nt = {};
function p(e, t, r, a) {
  var s = a;
  typeof a == "string" && (s = function() {
    return this[a]();
  }), e && (nt[e] = s), t && (nt[t[0]] = function() {
    return be(s.apply(this, arguments), t[1], t[2]);
  }), r && (nt[r] = function() {
    return this.localeData().ordinal(
      s.apply(this, arguments),
      e
    );
  });
}
function Rs(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Ws(e) {
  var t = e.match(Yr), r, a;
  for (r = 0, a = t.length; r < a; r++)
    nt[t[r]] ? t[r] = nt[t[r]] : t[r] = Rs(t[r]);
  return function(s) {
    var n = "", i;
    for (i = 0; i < a; i++)
      n += ke(t[i]) ? t[i].call(s, e) : t[i];
    return n;
  };
}
function Ft(e, t) {
  return e.isValid() ? (t = Ma(t, e.localeData()), cr[t] = cr[t] || Ws(t), cr[t](e)) : e.localeData().invalidDate();
}
function Ma(e, t) {
  var r = 5;
  function a(s) {
    return t.longDateFormat(s) || s;
  }
  for (Lt.lastIndex = 0; r >= 0 && Lt.test(e); )
    e = e.replace(
      Lt,
      a
    ), Lt.lastIndex = 0, r -= 1;
  return e;
}
var Ns = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Ls(e) {
  var t = this._longDateFormat[e], r = this._longDateFormat[e.toUpperCase()];
  return t || !r ? t : (this._longDateFormat[e] = r.match(Yr).map(function(a) {
    return a === "MMMM" || a === "MM" || a === "DD" || a === "dddd" ? a.slice(1) : a;
  }).join(""), this._longDateFormat[e]);
}
var As = "Invalid date";
function Cs() {
  return this._invalidDate;
}
var Fs = "%d", Is = /\d{1,2}/;
function $s(e) {
  return this._ordinal.replace("%d", e);
}
var Hs = {
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
function Us(e, t, r, a) {
  var s = this._relativeTime[r];
  return ke(s) ? s(e, t, r, a) : s.replace(/%d/i, e);
}
function js(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return ke(r) ? r(t) : r.replace(/%s/i, t);
}
var _t = {};
function z(e, t) {
  var r = e.toLowerCase();
  _t[r] = _t[r + "s"] = _t[t] = e;
}
function oe(e) {
  return typeof e == "string" ? _t[e] || _t[e.toLowerCase()] : void 0;
}
function Er(e) {
  var t = {}, r, a;
  for (a in e)
    x(e, a) && (r = oe(a), r && (t[r] = e[a]));
  return t;
}
var Oa = {};
function Z(e, t) {
  Oa[e] = t;
}
function Vs(e) {
  var t = [], r;
  for (r in e)
    x(e, r) && t.push({ unit: r, priority: Oa[r] });
  return t.sort(function(a, s) {
    return a.priority - s.priority;
  }), t;
}
function Jt(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function ae(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function b(e) {
  var t = +e, r = 0;
  return t !== 0 && isFinite(t) && (r = ae(t)), r;
}
function ht(e, t) {
  return function(r) {
    return r != null ? (xa(this, e, r), u.updateOffset(this, t), this) : Ut(this, e);
  };
}
function Ut(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function xa(e, t, r) {
  e.isValid() && !isNaN(r) && (t === "FullYear" && Jt(e.year()) && e.month() === 1 && e.date() === 29 ? (r = b(r), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    r,
    e.month(),
    rr(r, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](r));
}
function Bs(e) {
  return e = oe(e), ke(this[e]) ? this[e]() : this;
}
function qs(e, t) {
  if (typeof e == "object") {
    e = Er(e);
    var r = Vs(e), a, s = r.length;
    for (a = 0; a < s; a++)
      this[r[a].unit](e[r[a].unit]);
  } else if (e = oe(e), ke(this[e]))
    return this[e](t);
  return this;
}
var Ya = /\d/, re = /\d\d/, Ea = /\d{3}/, Tr = /\d{4}/, Xt = /[+-]?\d{6}/, A = /\d\d?/, Ta = /\d\d\d\d?/, Pa = /\d\d\d\d\d\d?/, Qt = /\d{1,3}/, Pr = /\d{1,4}/, Kt = /[+-]?\d{1,6}/, ft = /\d+/, er = /[+-]?\d+/, Gs = /Z|[+-]\d\d:?\d\d/gi, tr = /Z|[+-]\d\d(?::?\d\d)?/gi, zs = /[+-]?\d+(\.\d{1,3})?/, Et = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, jt;
jt = {};
function f(e, t, r) {
  jt[e] = ke(t) ? t : function(a, s) {
    return a && r ? r : t;
  };
}
function Zs(e, t) {
  return x(jt, e) ? jt[e](t._strict, t._locale) : new RegExp(Js(e));
}
function Js(e) {
  return ee(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, r, a, s, n) {
        return r || a || s || n;
      }
    )
  );
}
function ee(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var vr = {};
function R(e, t) {
  var r, a = t, s;
  for (typeof e == "string" && (e = [e]), Pe(t) && (a = function(n, i) {
    i[t] = b(n);
  }), s = e.length, r = 0; r < s; r++)
    vr[e[r]] = a;
}
function Tt(e, t) {
  R(e, function(r, a, s, n) {
    s._w = s._w || {}, t(r, s._w, s, n);
  });
}
function Xs(e, t, r) {
  t != null && x(vr, e) && vr[e](t, r._a, r, e);
}
var G = 0, Ye = 1, ge = 2, j = 3, de = 4, Ee = 5, ze = 6, Qs = 7, Ks = 8;
function en(e, t) {
  return (e % t + t) % t;
}
var U;
Array.prototype.indexOf ? U = Array.prototype.indexOf : U = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function rr(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var r = en(t, 12);
  return e += (t - r) / 12, r === 1 ? Jt(e) ? 29 : 28 : 31 - r % 7 % 2;
}
p("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
p("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
p("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
z("month", "M");
Z("month", 8);
f("M", A);
f("MM", A, re);
f("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
f("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
R(["M", "MM"], function(e, t) {
  t[Ye] = b(e) - 1;
});
R(["MMM", "MMMM"], function(e, t, r, a) {
  var s = r._locale.monthsParse(e, a, r._strict);
  s != null ? t[Ye] = s : w(r).invalidMonth = e;
});
var tn = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Ra = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Wa = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, rn = Et, an = Et;
function sn(e, t) {
  return e ? he(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Wa).test(t) ? "format" : "standalone"][e.month()] : he(this._months) ? this._months : this._months.standalone;
}
function nn(e, t) {
  return e ? he(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Wa.test(t) ? "format" : "standalone"][e.month()] : he(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function on(e, t, r) {
  var a, s, n, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a)
      n = Se([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(
        n,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[a] = this.months(n, "").toLocaleLowerCase();
  return r ? t === "MMM" ? (s = U.call(this._shortMonthsParse, i), s !== -1 ? s : null) : (s = U.call(this._longMonthsParse, i), s !== -1 ? s : null) : t === "MMM" ? (s = U.call(this._shortMonthsParse, i), s !== -1 ? s : (s = U.call(this._longMonthsParse, i), s !== -1 ? s : null)) : (s = U.call(this._longMonthsParse, i), s !== -1 ? s : (s = U.call(this._shortMonthsParse, i), s !== -1 ? s : null));
}
function ln(e, t, r) {
  var a, s, n;
  if (this._monthsParseExact)
    return on.call(this, e, t, r);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; a < 12; a++) {
    if (s = Se([2e3, a]), r && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp(
      "^" + this.months(s, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[a] = new RegExp(
      "^" + this.monthsShort(s, "").replace(".", "") + "$",
      "i"
    )), !r && !this._monthsParse[a] && (n = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[a] = new RegExp(n.replace(".", ""), "i")), r && t === "MMMM" && this._longMonthsParse[a].test(e))
      return a;
    if (r && t === "MMM" && this._shortMonthsParse[a].test(e))
      return a;
    if (!r && this._monthsParse[a].test(e))
      return a;
  }
}
function Na(e, t) {
  var r;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = b(t);
    else if (t = e.localeData().monthsParse(t), !Pe(t))
      return e;
  }
  return r = Math.min(e.date(), rr(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, r), e;
}
function La(e) {
  return e != null ? (Na(this, e), u.updateOffset(this, !0), this) : Ut(this, "Month");
}
function un() {
  return rr(this.year(), this.month());
}
function dn(e) {
  return this._monthsParseExact ? (x(this, "_monthsRegex") || Aa.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (x(this, "_monthsShortRegex") || (this._monthsShortRegex = rn), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function cn(e) {
  return this._monthsParseExact ? (x(this, "_monthsRegex") || Aa.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (x(this, "_monthsRegex") || (this._monthsRegex = an), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Aa() {
  function e(i, o) {
    return o.length - i.length;
  }
  var t = [], r = [], a = [], s, n;
  for (s = 0; s < 12; s++)
    n = Se([2e3, s]), t.push(this.monthsShort(n, "")), r.push(this.months(n, "")), a.push(this.months(n, "")), a.push(this.monthsShort(n, ""));
  for (t.sort(e), r.sort(e), a.sort(e), s = 0; s < 12; s++)
    t[s] = ee(t[s]), r[s] = ee(r[s]);
  for (s = 0; s < 24; s++)
    a[s] = ee(a[s]);
  this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
p("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? be(e, 4) : "+" + e;
});
p(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
p(0, ["YYYY", 4], 0, "year");
p(0, ["YYYYY", 5], 0, "year");
p(0, ["YYYYYY", 6, !0], 0, "year");
z("year", "y");
Z("year", 1);
f("Y", er);
f("YY", A, re);
f("YYYY", Pr, Tr);
f("YYYYY", Kt, Xt);
f("YYYYYY", Kt, Xt);
R(["YYYYY", "YYYYYY"], G);
R("YYYY", function(e, t) {
  t[G] = e.length === 2 ? u.parseTwoDigitYear(e) : b(e);
});
R("YY", function(e, t) {
  t[G] = u.parseTwoDigitYear(e);
});
R("Y", function(e, t) {
  t[G] = parseInt(e, 10);
});
function wt(e) {
  return Jt(e) ? 366 : 365;
}
u.parseTwoDigitYear = function(e) {
  return b(e) + (b(e) > 68 ? 1900 : 2e3);
};
var Ca = ht("FullYear", !0);
function hn() {
  return Jt(this.year());
}
function fn(e, t, r, a, s, n, i) {
  var o;
  return e < 100 && e >= 0 ? (o = new Date(e + 400, t, r, a, s, n, i), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, r, a, s, n, i), o;
}
function Dt(e) {
  var t, r;
  return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, t = new Date(Date.UTC.apply(null, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Vt(e, t, r) {
  var a = 7 + t - r, s = (7 + Dt(e, 0, a).getUTCDay() - t) % 7;
  return -s + a - 1;
}
function Fa(e, t, r, a, s) {
  var n = (7 + r - a) % 7, i = Vt(e, a, s), o = 1 + 7 * (t - 1) + n + i, l, h;
  return o <= 0 ? (l = e - 1, h = wt(l) + o) : o > wt(e) ? (l = e + 1, h = o - wt(e)) : (l = e, h = o), {
    year: l,
    dayOfYear: h
  };
}
function St(e, t, r) {
  var a = Vt(e.year(), t, r), s = Math.floor((e.dayOfYear() - a - 1) / 7) + 1, n, i;
  return s < 1 ? (i = e.year() - 1, n = s + Te(i, t, r)) : s > Te(e.year(), t, r) ? (n = s - Te(e.year(), t, r), i = e.year() + 1) : (i = e.year(), n = s), {
    week: n,
    year: i
  };
}
function Te(e, t, r) {
  var a = Vt(e, t, r), s = Vt(e + 1, t, r);
  return (wt(e) - a + s) / 7;
}
p("w", ["ww", 2], "wo", "week");
p("W", ["WW", 2], "Wo", "isoWeek");
z("week", "w");
z("isoWeek", "W");
Z("week", 5);
Z("isoWeek", 5);
f("w", A);
f("ww", A, re);
f("W", A);
f("WW", A, re);
Tt(
  ["w", "ww", "W", "WW"],
  function(e, t, r, a) {
    t[a.substr(0, 1)] = b(e);
  }
);
function pn(e) {
  return St(e, this._week.dow, this._week.doy).week;
}
var mn = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function yn() {
  return this._week.dow;
}
function vn() {
  return this._week.doy;
}
function _n(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function wn(e) {
  var t = St(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
p("d", 0, "do", "day");
p("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
p("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
p("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
p("e", 0, 0, "weekday");
p("E", 0, 0, "isoWeekday");
z("day", "d");
z("weekday", "e");
z("isoWeekday", "E");
Z("day", 11);
Z("weekday", 11);
Z("isoWeekday", 11);
f("d", A);
f("e", A);
f("E", A);
f("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
f("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
f("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Tt(["dd", "ddd", "dddd"], function(e, t, r, a) {
  var s = r._locale.weekdaysParse(e, a, r._strict);
  s != null ? t.d = s : w(r).invalidWeekday = e;
});
Tt(["d", "e", "E"], function(e, t, r, a) {
  t[a] = b(e);
});
function gn(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function bn(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Rr(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Dn = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Ia = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Sn = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), kn = Et, Mn = Et, On = Et;
function xn(e, t) {
  var r = he(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Rr(r, this._week.dow) : e ? r[e.day()] : r;
}
function Yn(e) {
  return e === !0 ? Rr(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function En(e) {
  return e === !0 ? Rr(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Tn(e, t, r) {
  var a, s, n, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; a < 7; ++a)
      n = Se([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(
        n,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[a] = this.weekdaysShort(
        n,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(n, "").toLocaleLowerCase();
  return r ? t === "dddd" ? (s = U.call(this._weekdaysParse, i), s !== -1 ? s : null) : t === "ddd" ? (s = U.call(this._shortWeekdaysParse, i), s !== -1 ? s : null) : (s = U.call(this._minWeekdaysParse, i), s !== -1 ? s : null) : t === "dddd" ? (s = U.call(this._weekdaysParse, i), s !== -1 || (s = U.call(this._shortWeekdaysParse, i), s !== -1) ? s : (s = U.call(this._minWeekdaysParse, i), s !== -1 ? s : null)) : t === "ddd" ? (s = U.call(this._shortWeekdaysParse, i), s !== -1 || (s = U.call(this._weekdaysParse, i), s !== -1) ? s : (s = U.call(this._minWeekdaysParse, i), s !== -1 ? s : null)) : (s = U.call(this._minWeekdaysParse, i), s !== -1 || (s = U.call(this._weekdaysParse, i), s !== -1) ? s : (s = U.call(this._shortWeekdaysParse, i), s !== -1 ? s : null));
}
function Pn(e, t, r) {
  var a, s, n;
  if (this._weekdaysParseExact)
    return Tn.call(this, e, t, r);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; a < 7; a++) {
    if (s = Se([2e3, 1]).day(a), r && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp(
      "^" + this.weekdays(s, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[a] = new RegExp(
      "^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[a] = new RegExp(
      "^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[a] || (n = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[a] = new RegExp(n.replace(".", ""), "i")), r && t === "dddd" && this._fullWeekdaysParse[a].test(e))
      return a;
    if (r && t === "ddd" && this._shortWeekdaysParse[a].test(e))
      return a;
    if (r && t === "dd" && this._minWeekdaysParse[a].test(e))
      return a;
    if (!r && this._weekdaysParse[a].test(e))
      return a;
  }
}
function Rn(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = gn(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Wn(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Nn(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = bn(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Ln(e) {
  return this._weekdaysParseExact ? (x(this, "_weekdaysRegex") || Wr.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (x(this, "_weekdaysRegex") || (this._weekdaysRegex = kn), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function An(e) {
  return this._weekdaysParseExact ? (x(this, "_weekdaysRegex") || Wr.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (x(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Mn), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Cn(e) {
  return this._weekdaysParseExact ? (x(this, "_weekdaysRegex") || Wr.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (x(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = On), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Wr() {
  function e(d, y) {
    return y.length - d.length;
  }
  var t = [], r = [], a = [], s = [], n, i, o, l, h;
  for (n = 0; n < 7; n++)
    i = Se([2e3, 1]).day(n), o = ee(this.weekdaysMin(i, "")), l = ee(this.weekdaysShort(i, "")), h = ee(this.weekdays(i, "")), t.push(o), r.push(l), a.push(h), s.push(o), s.push(l), s.push(h);
  t.sort(e), r.sort(e), a.sort(e), s.sort(e), this._weekdaysRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + a.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function Nr() {
  return this.hours() % 12 || 12;
}
function Fn() {
  return this.hours() || 24;
}
p("H", ["HH", 2], 0, "hour");
p("h", ["hh", 2], 0, Nr);
p("k", ["kk", 2], 0, Fn);
p("hmm", 0, 0, function() {
  return "" + Nr.apply(this) + be(this.minutes(), 2);
});
p("hmmss", 0, 0, function() {
  return "" + Nr.apply(this) + be(this.minutes(), 2) + be(this.seconds(), 2);
});
p("Hmm", 0, 0, function() {
  return "" + this.hours() + be(this.minutes(), 2);
});
p("Hmmss", 0, 0, function() {
  return "" + this.hours() + be(this.minutes(), 2) + be(this.seconds(), 2);
});
function $a(e, t) {
  p(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
$a("a", !0);
$a("A", !1);
z("hour", "h");
Z("hour", 13);
function Ha(e, t) {
  return t._meridiemParse;
}
f("a", Ha);
f("A", Ha);
f("H", A);
f("h", A);
f("k", A);
f("HH", A, re);
f("hh", A, re);
f("kk", A, re);
f("hmm", Ta);
f("hmmss", Pa);
f("Hmm", Ta);
f("Hmmss", Pa);
R(["H", "HH"], j);
R(["k", "kk"], function(e, t, r) {
  var a = b(e);
  t[j] = a === 24 ? 0 : a;
});
R(["a", "A"], function(e, t, r) {
  r._isPm = r._locale.isPM(e), r._meridiem = e;
});
R(["h", "hh"], function(e, t, r) {
  t[j] = b(e), w(r).bigHour = !0;
});
R("hmm", function(e, t, r) {
  var a = e.length - 2;
  t[j] = b(e.substr(0, a)), t[de] = b(e.substr(a)), w(r).bigHour = !0;
});
R("hmmss", function(e, t, r) {
  var a = e.length - 4, s = e.length - 2;
  t[j] = b(e.substr(0, a)), t[de] = b(e.substr(a, 2)), t[Ee] = b(e.substr(s)), w(r).bigHour = !0;
});
R("Hmm", function(e, t, r) {
  var a = e.length - 2;
  t[j] = b(e.substr(0, a)), t[de] = b(e.substr(a));
});
R("Hmmss", function(e, t, r) {
  var a = e.length - 4, s = e.length - 2;
  t[j] = b(e.substr(0, a)), t[de] = b(e.substr(a, 2)), t[Ee] = b(e.substr(s));
});
function In(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var $n = /[ap]\.?m?\.?/i, Hn = ht("Hours", !0);
function Un(e, t, r) {
  return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
}
var Ua = {
  calendar: Ts,
  longDateFormat: Ns,
  invalidDate: As,
  ordinal: Fs,
  dayOfMonthOrdinalParse: Is,
  relativeTime: Hs,
  months: tn,
  monthsShort: Ra,
  week: mn,
  weekdays: Dn,
  weekdaysMin: Sn,
  weekdaysShort: Ia,
  meridiemParse: $n
}, F = {}, mt = {}, kt;
function jn(e, t) {
  var r, a = Math.min(e.length, t.length);
  for (r = 0; r < a; r += 1)
    if (e[r] !== t[r])
      return r;
  return a;
}
function oa(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Vn(e) {
  for (var t = 0, r, a, s, n; t < e.length; ) {
    for (n = oa(e[t]).split("-"), r = n.length, a = oa(e[t + 1]), a = a ? a.split("-") : null; r > 0; ) {
      if (s = ar(n.slice(0, r).join("-")), s)
        return s;
      if (a && a.length >= r && jn(n, a) >= r - 1)
        break;
      r--;
    }
    t++;
  }
  return kt;
}
function Bn(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function ar(e) {
  var t = null, r;
  if (F[e] === void 0 && typeof module != "undefined" && module && module.exports && Bn(e))
    try {
      t = kt._abbr, r = require, r("./locale/" + e), Ie(t);
    } catch (a) {
      F[e] = null;
    }
  return F[e];
}
function Ie(e, t) {
  var r;
  return e && (X(t) ? r = Re(e) : r = Lr(e, t), r ? kt = r : typeof console != "undefined" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), kt._abbr;
}
function Lr(e, t) {
  if (t !== null) {
    var r, a = Ua;
    if (t.abbr = e, F[e] != null)
      ka(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), a = F[e]._config;
    else if (t.parentLocale != null)
      if (F[t.parentLocale] != null)
        a = F[t.parentLocale]._config;
      else if (r = ar(t.parentLocale), r != null)
        a = r._config;
      else
        return mt[t.parentLocale] || (mt[t.parentLocale] = []), mt[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return F[e] = new xr(mr(a, t)), mt[e] && mt[e].forEach(function(s) {
      Lr(s.name, s.config);
    }), Ie(e), F[e];
  } else
    return delete F[e], null;
}
function qn(e, t) {
  if (t != null) {
    var r, a, s = Ua;
    F[e] != null && F[e].parentLocale != null ? F[e].set(mr(F[e]._config, t)) : (a = ar(e), a != null && (s = a._config), t = mr(s, t), a == null && (t.abbr = e), r = new xr(t), r.parentLocale = F[e], F[e] = r), Ie(e);
  } else
    F[e] != null && (F[e].parentLocale != null ? (F[e] = F[e].parentLocale, e === Ie() && Ie(e)) : F[e] != null && delete F[e]);
  return F[e];
}
function Re(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return kt;
  if (!he(e)) {
    if (t = ar(e), t)
      return t;
    e = [e];
  }
  return Vn(e);
}
function Gn() {
  return yr(F);
}
function Ar(e) {
  var t, r = e._a;
  return r && w(e).overflow === -2 && (t = r[Ye] < 0 || r[Ye] > 11 ? Ye : r[ge] < 1 || r[ge] > rr(r[G], r[Ye]) ? ge : r[j] < 0 || r[j] > 24 || r[j] === 24 && (r[de] !== 0 || r[Ee] !== 0 || r[ze] !== 0) ? j : r[de] < 0 || r[de] > 59 ? de : r[Ee] < 0 || r[Ee] > 59 ? Ee : r[ze] < 0 || r[ze] > 999 ? ze : -1, w(e)._overflowDayOfYear && (t < G || t > ge) && (t = ge), w(e)._overflowWeeks && t === -1 && (t = Qs), w(e)._overflowWeekday && t === -1 && (t = Ks), w(e).overflow = t), e;
}
var zn = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Zn = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Jn = /Z|[+-]\d\d(?::?\d\d)?/, At = [
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
], hr = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], Xn = /^\/?Date\((-?\d+)/i, Qn = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Kn = {
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
function ja(e) {
  var t, r, a = e._i, s = zn.exec(a) || Zn.exec(a), n, i, o, l, h = At.length, d = hr.length;
  if (s) {
    for (w(e).iso = !0, t = 0, r = h; t < r; t++)
      if (At[t][1].exec(s[1])) {
        i = At[t][0], n = At[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (s[3]) {
      for (t = 0, r = d; t < r; t++)
        if (hr[t][1].exec(s[3])) {
          o = (s[2] || " ") + hr[t][0];
          break;
        }
      if (o == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!n && o != null) {
      e._isValid = !1;
      return;
    }
    if (s[4])
      if (Jn.exec(s[4]))
        l = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (o || "") + (l || ""), Fr(e);
  } else
    e._isValid = !1;
}
function ei(e, t, r, a, s, n) {
  var i = [
    ti(e),
    Ra.indexOf(t),
    parseInt(r, 10),
    parseInt(a, 10),
    parseInt(s, 10)
  ];
  return n && i.push(parseInt(n, 10)), i;
}
function ti(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function ri(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function ai(e, t, r) {
  if (e) {
    var a = Ia.indexOf(e), s = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (a !== s)
      return w(r).weekdayMismatch = !0, r._isValid = !1, !1;
  }
  return !0;
}
function si(e, t, r) {
  if (e)
    return Kn[e];
  if (t)
    return 0;
  var a = parseInt(r, 10), s = a % 100, n = (a - s) / 100;
  return n * 60 + s;
}
function Va(e) {
  var t = Qn.exec(ri(e._i)), r;
  if (t) {
    if (r = ei(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !ai(t[1], r, e))
      return;
    e._a = r, e._tzm = si(t[8], t[9], t[10]), e._d = Dt.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), w(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function ni(e) {
  var t = Xn.exec(e._i);
  if (t !== null) {
    e._d = new Date(+t[1]);
    return;
  }
  if (ja(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Va(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : u.createFromInputFallback(e);
}
u.createFromInputFallback = ie(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function at(e, t, r) {
  return e != null ? e : t != null ? t : r;
}
function ii(e) {
  var t = new Date(u.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Cr(e) {
  var t, r, a = [], s, n, i;
  if (!e._d) {
    for (s = ii(e), e._w && e._a[ge] == null && e._a[Ye] == null && oi(e), e._dayOfYear != null && (i = at(e._a[G], s[G]), (e._dayOfYear > wt(i) || e._dayOfYear === 0) && (w(e)._overflowDayOfYear = !0), r = Dt(i, 0, e._dayOfYear), e._a[Ye] = r.getUTCMonth(), e._a[ge] = r.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = a[t] = s[t];
    for (; t < 7; t++)
      e._a[t] = a[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[j] === 24 && e._a[de] === 0 && e._a[Ee] === 0 && e._a[ze] === 0 && (e._nextDay = !0, e._a[j] = 0), e._d = (e._useUTC ? Dt : fn).apply(
      null,
      a
    ), n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[j] = 24), e._w && typeof e._w.d != "undefined" && e._w.d !== n && (w(e).weekdayMismatch = !0);
  }
}
function oi(e) {
  var t, r, a, s, n, i, o, l, h;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (n = 1, i = 4, r = at(
    t.GG,
    e._a[G],
    St(L(), 1, 4).year
  ), a = at(t.W, 1), s = at(t.E, 1), (s < 1 || s > 7) && (l = !0)) : (n = e._locale._week.dow, i = e._locale._week.doy, h = St(L(), n, i), r = at(t.gg, e._a[G], h.year), a = at(t.w, h.week), t.d != null ? (s = t.d, (s < 0 || s > 6) && (l = !0)) : t.e != null ? (s = t.e + n, (t.e < 0 || t.e > 6) && (l = !0)) : s = n), a < 1 || a > Te(r, n, i) ? w(e)._overflowWeeks = !0 : l != null ? w(e)._overflowWeekday = !0 : (o = Fa(r, a, s, n, i), e._a[G] = o.year, e._dayOfYear = o.dayOfYear);
}
u.ISO_8601 = function() {
};
u.RFC_2822 = function() {
};
function Fr(e) {
  if (e._f === u.ISO_8601) {
    ja(e);
    return;
  }
  if (e._f === u.RFC_2822) {
    Va(e);
    return;
  }
  e._a = [], w(e).empty = !0;
  var t = "" + e._i, r, a, s, n, i, o = t.length, l = 0, h, d;
  for (s = Ma(e._f, e._locale).match(Yr) || [], d = s.length, r = 0; r < d; r++)
    n = s[r], a = (t.match(Zs(n, e)) || [])[0], a && (i = t.substr(0, t.indexOf(a)), i.length > 0 && w(e).unusedInput.push(i), t = t.slice(
      t.indexOf(a) + a.length
    ), l += a.length), nt[n] ? (a ? w(e).empty = !1 : w(e).unusedTokens.push(n), Xs(n, a, e)) : e._strict && !a && w(e).unusedTokens.push(n);
  w(e).charsLeftOver = o - l, t.length > 0 && w(e).unusedInput.push(t), e._a[j] <= 12 && w(e).bigHour === !0 && e._a[j] > 0 && (w(e).bigHour = void 0), w(e).parsedDateParts = e._a.slice(0), w(e).meridiem = e._meridiem, e._a[j] = li(
    e._locale,
    e._a[j],
    e._meridiem
  ), h = w(e).era, h !== null && (e._a[G] = e._locale.erasConvertYear(h, e._a[G])), Cr(e), Ar(e);
}
function li(e, t, r) {
  var a;
  return r == null ? t : e.meridiemHour != null ? e.meridiemHour(t, r) : (e.isPM != null && (a = e.isPM(r), a && t < 12 && (t += 12), !a && t === 12 && (t = 0)), t);
}
function ui(e) {
  var t, r, a, s, n, i, o = !1, l = e._f.length;
  if (l === 0) {
    w(e).invalidFormat = !0, e._d = new Date(NaN);
    return;
  }
  for (s = 0; s < l; s++)
    n = 0, i = !1, t = Or({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[s], Fr(t), Mr(t) && (i = !0), n += w(t).charsLeftOver, n += w(t).unusedTokens.length * 10, w(t).score = n, o ? n < a && (a = n, r = t) : (a == null || n < a || i) && (a = n, r = t, i && (o = !0));
  Ce(e, r || t);
}
function di(e) {
  if (!e._d) {
    var t = Er(e._i), r = t.day === void 0 ? t.date : t.day;
    e._a = Da(
      [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
      function(a) {
        return a && parseInt(a, 10);
      }
    ), Cr(e);
  }
}
function ci(e) {
  var t = new Yt(Ar(Ba(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function Ba(e) {
  var t = e._i, r = e._f;
  return e._locale = e._locale || Re(e._l), t === null || r === void 0 && t === "" ? Zt({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), fe(t) ? new Yt(Ar(t)) : (xt(t) ? e._d = t : he(r) ? ui(e) : r ? Fr(e) : hi(e), Mr(e) || (e._d = null), e));
}
function hi(e) {
  var t = e._i;
  X(t) ? e._d = new Date(u.now()) : xt(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? ni(e) : he(t) ? (e._a = Da(t.slice(0), function(r) {
    return parseInt(r, 10);
  }), Cr(e)) : Ze(t) ? di(e) : Pe(t) ? e._d = new Date(t) : u.createFromInputFallback(e);
}
function qa(e, t, r, a, s) {
  var n = {};
  return (t === !0 || t === !1) && (a = t, t = void 0), (r === !0 || r === !1) && (a = r, r = void 0), (Ze(e) && kr(e) || he(e) && e.length === 0) && (e = void 0), n._isAMomentObject = !0, n._useUTC = n._isUTC = s, n._l = r, n._i = e, n._f = t, n._strict = a, ci(n);
}
function L(e, t, r, a) {
  return qa(e, t, r, a, !1);
}
var fi = ie(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = L.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Zt();
  }
), pi = ie(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = L.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Zt();
  }
);
function Ga(e, t) {
  var r, a;
  if (t.length === 1 && he(t[0]) && (t = t[0]), !t.length)
    return L();
  for (r = t[0], a = 1; a < t.length; ++a)
    (!t[a].isValid() || t[a][e](r)) && (r = t[a]);
  return r;
}
function mi() {
  var e = [].slice.call(arguments, 0);
  return Ga("isBefore", e);
}
function yi() {
  var e = [].slice.call(arguments, 0);
  return Ga("isAfter", e);
}
var vi = function() {
  return Date.now ? Date.now() : +new Date();
}, yt = [
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
function _i(e) {
  var t, r = !1, a, s = yt.length;
  for (t in e)
    if (x(e, t) && !(U.call(yt, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (a = 0; a < s; ++a)
    if (e[yt[a]]) {
      if (r)
        return !1;
      parseFloat(e[yt[a]]) !== b(e[yt[a]]) && (r = !0);
    }
  return !0;
}
function wi() {
  return this._isValid;
}
function gi() {
  return me(NaN);
}
function sr(e) {
  var t = Er(e), r = t.year || 0, a = t.quarter || 0, s = t.month || 0, n = t.week || t.isoWeek || 0, i = t.day || 0, o = t.hour || 0, l = t.minute || 0, h = t.second || 0, d = t.millisecond || 0;
  this._isValid = _i(t), this._milliseconds = +d + h * 1e3 + // 1000
  l * 6e4 + // 1000 * 60
  o * 1e3 * 60 * 60, this._days = +i + n * 7, this._months = +s + a * 3 + r * 12, this._data = {}, this._locale = Re(), this._bubble();
}
function It(e) {
  return e instanceof sr;
}
function _r(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function bi(e, t, r) {
  var a = Math.min(e.length, t.length), s = Math.abs(e.length - t.length), n = 0, i;
  for (i = 0; i < a; i++)
    (r && e[i] !== t[i] || !r && b(e[i]) !== b(t[i])) && n++;
  return n + s;
}
function za(e, t) {
  p(e, 0, 0, function() {
    var r = this.utcOffset(), a = "+";
    return r < 0 && (r = -r, a = "-"), a + be(~~(r / 60), 2) + t + be(~~r % 60, 2);
  });
}
za("Z", ":");
za("ZZ", "");
f("Z", tr);
f("ZZ", tr);
R(["Z", "ZZ"], function(e, t, r) {
  r._useUTC = !0, r._tzm = Ir(tr, e);
});
var Di = /([\+\-]|\d\d)/gi;
function Ir(e, t) {
  var r = (t || "").match(e), a, s, n;
  return r === null ? null : (a = r[r.length - 1] || [], s = (a + "").match(Di) || ["-", 0, 0], n = +(s[1] * 60) + b(s[2]), n === 0 ? 0 : s[0] === "+" ? n : -n);
}
function $r(e, t) {
  var r, a;
  return t._isUTC ? (r = t.clone(), a = (fe(e) || xt(e) ? e.valueOf() : L(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + a), u.updateOffset(r, !1), r) : L(e).local();
}
function wr(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
u.updateOffset = function() {
};
function Si(e, t, r) {
  var a = this._offset || 0, s;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Ir(tr, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !r && (e = e * 60);
    return !this._isUTC && t && (s = wr(this)), this._offset = e, this._isUTC = !0, s != null && this.add(s, "m"), a !== e && (!t || this._changeInProgress ? Xa(
      this,
      me(e - a, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, u.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? a : wr(this);
}
function ki(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Mi(e) {
  return this.utcOffset(0, e);
}
function Oi(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(wr(this), "m")), this;
}
function xi() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Ir(Gs, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Yi(e) {
  return this.isValid() ? (e = e ? L(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Ei() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Ti() {
  if (!X(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Or(e, this), e = Ba(e), e._a ? (t = e._isUTC ? Se(e._a) : L(e._a), this._isDSTShifted = this.isValid() && bi(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Pi() {
  return this.isValid() ? !this._isUTC : !1;
}
function Ri() {
  return this.isValid() ? this._isUTC : !1;
}
function Za() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Wi = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Ni = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function me(e, t) {
  var r = e, a = null, s, n, i;
  return It(e) ? r = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : Pe(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (a = Wi.exec(e)) ? (s = a[1] === "-" ? -1 : 1, r = {
    y: 0,
    d: b(a[ge]) * s,
    h: b(a[j]) * s,
    m: b(a[de]) * s,
    s: b(a[Ee]) * s,
    ms: b(_r(a[ze] * 1e3)) * s
    // the millisecond decimal point is included in the match
  }) : (a = Ni.exec(e)) ? (s = a[1] === "-" ? -1 : 1, r = {
    y: qe(a[2], s),
    M: qe(a[3], s),
    w: qe(a[4], s),
    d: qe(a[5], s),
    h: qe(a[6], s),
    m: qe(a[7], s),
    s: qe(a[8], s)
  }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (i = Li(
    L(r.from),
    L(r.to)
  ), r = {}, r.ms = i.milliseconds, r.M = i.months), n = new sr(r), It(e) && x(e, "_locale") && (n._locale = e._locale), It(e) && x(e, "_isValid") && (n._isValid = e._isValid), n;
}
me.fn = sr.prototype;
me.invalid = gi;
function qe(e, t) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * t;
}
function la(e, t) {
  var r = {};
  return r.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(t) && --r.months, r.milliseconds = +t - +e.clone().add(r.months, "M"), r;
}
function Li(e, t) {
  var r;
  return e.isValid() && t.isValid() ? (t = $r(t, e), e.isBefore(t) ? r = la(e, t) : (r = la(t, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : { milliseconds: 0, months: 0 };
}
function Ja(e, t) {
  return function(r, a) {
    var s, n;
    return a !== null && !isNaN(+a) && (ka(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), n = r, r = a, a = n), s = me(r, a), Xa(this, s, e), this;
  };
}
function Xa(e, t, r, a) {
  var s = t._milliseconds, n = _r(t._days), i = _r(t._months);
  e.isValid() && (a = a == null ? !0 : a, i && Na(e, Ut(e, "Month") + i * r), n && xa(e, "Date", Ut(e, "Date") + n * r), s && e._d.setTime(e._d.valueOf() + s * r), a && u.updateOffset(e, n || i));
}
var Ai = Ja(1, "add"), Ci = Ja(-1, "subtract");
function Qa(e) {
  return typeof e == "string" || e instanceof String;
}
function Fi(e) {
  return fe(e) || xt(e) || Qa(e) || Pe(e) || $i(e) || Ii(e) || e === null || e === void 0;
}
function Ii(e) {
  var t = Ze(e) && !kr(e), r = !1, a = [
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
  ], s, n, i = a.length;
  for (s = 0; s < i; s += 1)
    n = a[s], r = r || x(e, n);
  return t && r;
}
function $i(e) {
  var t = he(e), r = !1;
  return t && (r = e.filter(function(a) {
    return !Pe(a) && Qa(e);
  }).length === 0), t && r;
}
function Hi(e) {
  var t = Ze(e) && !kr(e), r = !1, a = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], s, n;
  for (s = 0; s < a.length; s += 1)
    n = a[s], r = r || x(e, n);
  return t && r;
}
function Ui(e, t) {
  var r = e.diff(t, "days", !0);
  return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
}
function ji(e, t) {
  arguments.length === 1 && (arguments[0] ? Fi(arguments[0]) ? (e = arguments[0], t = void 0) : Hi(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var r = e || L(), a = $r(r, this).startOf("day"), s = u.calendarFormat(this, a) || "sameElse", n = t && (ke(t[s]) ? t[s].call(this, r) : t[s]);
  return this.format(
    n || this.localeData().calendar(s, this, L(r))
  );
}
function Vi() {
  return new Yt(this);
}
function Bi(e, t) {
  var r = fe(e) ? e : L(e);
  return this.isValid() && r.isValid() ? (t = oe(t) || "millisecond", t === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function qi(e, t) {
  var r = fe(e) ? e : L(e);
  return this.isValid() && r.isValid() ? (t = oe(t) || "millisecond", t === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(t).valueOf() < r.valueOf()) : !1;
}
function Gi(e, t, r, a) {
  var s = fe(e) ? e : L(e), n = fe(t) ? t : L(t);
  return this.isValid() && s.isValid() && n.isValid() ? (a = a || "()", (a[0] === "(" ? this.isAfter(s, r) : !this.isBefore(s, r)) && (a[1] === ")" ? this.isBefore(n, r) : !this.isAfter(n, r))) : !1;
}
function zi(e, t) {
  var r = fe(e) ? e : L(e), a;
  return this.isValid() && r.isValid() ? (t = oe(t) || "millisecond", t === "millisecond" ? this.valueOf() === r.valueOf() : (a = r.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf())) : !1;
}
function Zi(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Ji(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Xi(e, t, r) {
  var a, s, n;
  if (!this.isValid())
    return NaN;
  if (a = $r(e, this), !a.isValid())
    return NaN;
  switch (s = (a.utcOffset() - this.utcOffset()) * 6e4, t = oe(t), t) {
    case "year":
      n = $t(this, a) / 12;
      break;
    case "month":
      n = $t(this, a);
      break;
    case "quarter":
      n = $t(this, a) / 3;
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
      n = (this - a - s) / 864e5;
      break;
    case "week":
      n = (this - a - s) / 6048e5;
      break;
    default:
      n = this - a;
  }
  return r ? n : ae(n);
}
function $t(e, t) {
  if (e.date() < t.date())
    return -$t(t, e);
  var r = (t.year() - e.year()) * 12 + (t.month() - e.month()), a = e.clone().add(r, "months"), s, n;
  return t - a < 0 ? (s = e.clone().add(r - 1, "months"), n = (t - a) / (a - s)) : (s = e.clone().add(r + 1, "months"), n = (t - a) / (s - a)), -(r + n) || 0;
}
u.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
u.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Qi() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Ki(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, r = t ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999 ? Ft(
    r,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : ke(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Ft(r, "Z")) : Ft(
    r,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function eo() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", r, a, s, n;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", s = "-MM-DD[T]HH:mm:ss.SSS", n = t + '[")]', this.format(r + a + s + n);
}
function to(e) {
  e || (e = this.isUtc() ? u.defaultFormatUtc : u.defaultFormat);
  var t = Ft(this, e);
  return this.localeData().postformat(t);
}
function ro(e, t) {
  return this.isValid() && (fe(e) && e.isValid() || L(e).isValid()) ? me({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function ao(e) {
  return this.from(L(), e);
}
function so(e, t) {
  return this.isValid() && (fe(e) && e.isValid() || L(e).isValid()) ? me({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function no(e) {
  return this.to(L(), e);
}
function Ka(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = Re(e), t != null && (this._locale = t), this);
}
var es = ie(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function ts() {
  return this._locale;
}
var Bt = 1e3, it = 60 * Bt, qt = 60 * it, rs = (365 * 400 + 97) * 24 * qt;
function ot(e, t) {
  return (e % t + t) % t;
}
function as(e, t, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, r) - rs : new Date(e, t, r).valueOf();
}
function ss(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - rs : Date.UTC(e, t, r);
}
function io(e) {
  var t, r;
  if (e = oe(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? ss : as, e) {
    case "year":
      t = r(this.year(), 0, 1);
      break;
    case "quarter":
      t = r(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = r(this.year(), this.month(), 1);
      break;
    case "week":
      t = r(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= ot(
        t + (this._isUTC ? 0 : this.utcOffset() * it),
        qt
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= ot(t, it);
      break;
    case "second":
      t = this._d.valueOf(), t -= ot(t, Bt);
      break;
  }
  return this._d.setTime(t), u.updateOffset(this, !0), this;
}
function oo(e) {
  var t, r;
  if (e = oe(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? ss : as, e) {
    case "year":
      t = r(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = r(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = r(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = r(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += qt - ot(
        t + (this._isUTC ? 0 : this.utcOffset() * it),
        qt
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += it - ot(t, it) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Bt - ot(t, Bt) - 1;
      break;
  }
  return this._d.setTime(t), u.updateOffset(this, !0), this;
}
function lo() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function uo() {
  return Math.floor(this.valueOf() / 1e3);
}
function co() {
  return new Date(this.valueOf());
}
function ho() {
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
function fo() {
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
function po() {
  return this.isValid() ? this.toISOString() : null;
}
function mo() {
  return Mr(this);
}
function yo() {
  return Ce({}, w(this));
}
function vo() {
  return w(this).overflow;
}
function _o() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
p("N", 0, 0, "eraAbbr");
p("NN", 0, 0, "eraAbbr");
p("NNN", 0, 0, "eraAbbr");
p("NNNN", 0, 0, "eraName");
p("NNNNN", 0, 0, "eraNarrow");
p("y", ["y", 1], "yo", "eraYear");
p("y", ["yy", 2], 0, "eraYear");
p("y", ["yyy", 3], 0, "eraYear");
p("y", ["yyyy", 4], 0, "eraYear");
f("N", Hr);
f("NN", Hr);
f("NNN", Hr);
f("NNNN", Eo);
f("NNNNN", To);
R(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, r, a) {
    var s = r._locale.erasParse(e, a, r._strict);
    s ? w(r).era = s : w(r).invalidEra = e;
  }
);
f("y", ft);
f("yy", ft);
f("yyy", ft);
f("yyyy", ft);
f("yo", Po);
R(["y", "yy", "yyy", "yyyy"], G);
R(["yo"], function(e, t, r, a) {
  var s;
  r._locale._eraYearOrdinalRegex && (s = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[G] = r._locale.eraYearOrdinalParse(e, s) : t[G] = parseInt(e, 10);
});
function wo(e, t) {
  var r, a, s, n = this._eras || Re("en")._eras;
  for (r = 0, a = n.length; r < a; ++r) {
    switch (typeof n[r].since) {
      case "string":
        s = u(n[r].since).startOf("day"), n[r].since = s.valueOf();
        break;
    }
    switch (typeof n[r].until) {
      case "undefined":
        n[r].until = 1 / 0;
        break;
      case "string":
        s = u(n[r].until).startOf("day").valueOf(), n[r].until = s.valueOf();
        break;
    }
  }
  return n;
}
function go(e, t, r) {
  var a, s, n = this.eras(), i, o, l;
  for (e = e.toUpperCase(), a = 0, s = n.length; a < s; ++a)
    if (i = n[a].name.toUpperCase(), o = n[a].abbr.toUpperCase(), l = n[a].narrow.toUpperCase(), r)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (o === e)
            return n[a];
          break;
        case "NNNN":
          if (i === e)
            return n[a];
          break;
        case "NNNNN":
          if (l === e)
            return n[a];
          break;
      }
    else if ([i, o, l].indexOf(e) >= 0)
      return n[a];
}
function bo(e, t) {
  var r = e.since <= e.until ? 1 : -1;
  return t === void 0 ? u(e.since).year() : u(e.since).year() + (t - e.offset) * r;
}
function Do() {
  var e, t, r, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since)
      return a[e].name;
  return "";
}
function So() {
  var e, t, r, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since)
      return a[e].narrow;
  return "";
}
function ko() {
  var e, t, r, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since)
      return a[e].abbr;
  return "";
}
function Mo() {
  var e, t, r, a, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = s[e].since <= s[e].until ? 1 : -1, a = this.clone().startOf("day").valueOf(), s[e].since <= a && a <= s[e].until || s[e].until <= a && a <= s[e].since)
      return (this.year() - u(s[e].since).year()) * r + s[e].offset;
  return this.year();
}
function Oo(e) {
  return x(this, "_erasNameRegex") || Ur.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function xo(e) {
  return x(this, "_erasAbbrRegex") || Ur.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Yo(e) {
  return x(this, "_erasNarrowRegex") || Ur.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Hr(e, t) {
  return t.erasAbbrRegex(e);
}
function Eo(e, t) {
  return t.erasNameRegex(e);
}
function To(e, t) {
  return t.erasNarrowRegex(e);
}
function Po(e, t) {
  return t._eraYearOrdinalRegex || ft;
}
function Ur() {
  var e = [], t = [], r = [], a = [], s, n, i = this.eras();
  for (s = 0, n = i.length; s < n; ++s)
    t.push(ee(i[s].name)), e.push(ee(i[s].abbr)), r.push(ee(i[s].narrow)), a.push(ee(i[s].name)), a.push(ee(i[s].abbr)), a.push(ee(i[s].narrow));
  this._erasRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  );
}
p(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
p(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function nr(e, t) {
  p(0, [e, e.length], 0, t);
}
nr("gggg", "weekYear");
nr("ggggg", "weekYear");
nr("GGGG", "isoWeekYear");
nr("GGGGG", "isoWeekYear");
z("weekYear", "gg");
z("isoWeekYear", "GG");
Z("weekYear", 1);
Z("isoWeekYear", 1);
f("G", er);
f("g", er);
f("GG", A, re);
f("gg", A, re);
f("GGGG", Pr, Tr);
f("gggg", Pr, Tr);
f("GGGGG", Kt, Xt);
f("ggggg", Kt, Xt);
Tt(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, r, a) {
    t[a.substr(0, 2)] = b(e);
  }
);
Tt(["gg", "GG"], function(e, t, r, a) {
  t[a] = u.parseTwoDigitYear(e);
});
function Ro(e) {
  return ns.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Wo(e) {
  return ns.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function No() {
  return Te(this.year(), 1, 4);
}
function Lo() {
  return Te(this.isoWeekYear(), 1, 4);
}
function Ao() {
  var e = this.localeData()._week;
  return Te(this.year(), e.dow, e.doy);
}
function Co() {
  var e = this.localeData()._week;
  return Te(this.weekYear(), e.dow, e.doy);
}
function ns(e, t, r, a, s) {
  var n;
  return e == null ? St(this, a, s).year : (n = Te(e, a, s), t > n && (t = n), Fo.call(this, e, t, r, a, s));
}
function Fo(e, t, r, a, s) {
  var n = Fa(e, t, r, a, s), i = Dt(n.year, 0, n.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
p("Q", 0, "Qo", "quarter");
z("quarter", "Q");
Z("quarter", 7);
f("Q", Ya);
R("Q", function(e, t) {
  t[Ye] = (b(e) - 1) * 3;
});
function Io(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
p("D", ["DD", 2], "Do", "date");
z("date", "D");
Z("date", 9);
f("D", A);
f("DD", A, re);
f("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
R(["D", "DD"], ge);
R("Do", function(e, t) {
  t[ge] = b(e.match(A)[0]);
});
var is = ht("Date", !0);
p("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
z("dayOfYear", "DDD");
Z("dayOfYear", 4);
f("DDD", Qt);
f("DDDD", Ea);
R(["DDD", "DDDD"], function(e, t, r) {
  r._dayOfYear = b(e);
});
function $o(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
p("m", ["mm", 2], 0, "minute");
z("minute", "m");
Z("minute", 14);
f("m", A);
f("mm", A, re);
R(["m", "mm"], de);
var Ho = ht("Minutes", !1);
p("s", ["ss", 2], 0, "second");
z("second", "s");
Z("second", 15);
f("s", A);
f("ss", A, re);
R(["s", "ss"], Ee);
var Uo = ht("Seconds", !1);
p("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
p(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
p(0, ["SSS", 3], 0, "millisecond");
p(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
p(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
p(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
p(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
p(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
p(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
z("millisecond", "ms");
Z("millisecond", 16);
f("S", Qt, Ya);
f("SS", Qt, re);
f("SSS", Qt, Ea);
var Fe, os;
for (Fe = "SSSS"; Fe.length <= 9; Fe += "S")
  f(Fe, ft);
function jo(e, t) {
  t[ze] = b(("0." + e) * 1e3);
}
for (Fe = "S"; Fe.length <= 9; Fe += "S")
  R(Fe, jo);
os = ht("Milliseconds", !1);
p("z", 0, 0, "zoneAbbr");
p("zz", 0, 0, "zoneName");
function Vo() {
  return this._isUTC ? "UTC" : "";
}
function Bo() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var c = Yt.prototype;
c.add = Ai;
c.calendar = ji;
c.clone = Vi;
c.diff = Xi;
c.endOf = oo;
c.format = to;
c.from = ro;
c.fromNow = ao;
c.to = so;
c.toNow = no;
c.get = Bs;
c.invalidAt = vo;
c.isAfter = Bi;
c.isBefore = qi;
c.isBetween = Gi;
c.isSame = zi;
c.isSameOrAfter = Zi;
c.isSameOrBefore = Ji;
c.isValid = mo;
c.lang = es;
c.locale = Ka;
c.localeData = ts;
c.max = pi;
c.min = fi;
c.parsingFlags = yo;
c.set = qs;
c.startOf = io;
c.subtract = Ci;
c.toArray = ho;
c.toObject = fo;
c.toDate = co;
c.toISOString = Ki;
c.inspect = eo;
typeof Symbol != "undefined" && Symbol.for != null && (c[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
c.toJSON = po;
c.toString = Qi;
c.unix = uo;
c.valueOf = lo;
c.creationData = _o;
c.eraName = Do;
c.eraNarrow = So;
c.eraAbbr = ko;
c.eraYear = Mo;
c.year = Ca;
c.isLeapYear = hn;
c.weekYear = Ro;
c.isoWeekYear = Wo;
c.quarter = c.quarters = Io;
c.month = La;
c.daysInMonth = un;
c.week = c.weeks = _n;
c.isoWeek = c.isoWeeks = wn;
c.weeksInYear = Ao;
c.weeksInWeekYear = Co;
c.isoWeeksInYear = No;
c.isoWeeksInISOWeekYear = Lo;
c.date = is;
c.day = c.days = Rn;
c.weekday = Wn;
c.isoWeekday = Nn;
c.dayOfYear = $o;
c.hour = c.hours = Hn;
c.minute = c.minutes = Ho;
c.second = c.seconds = Uo;
c.millisecond = c.milliseconds = os;
c.utcOffset = Si;
c.utc = Mi;
c.local = Oi;
c.parseZone = xi;
c.hasAlignedHourOffset = Yi;
c.isDST = Ei;
c.isLocal = Pi;
c.isUtcOffset = Ri;
c.isUtc = Za;
c.isUTC = Za;
c.zoneAbbr = Vo;
c.zoneName = Bo;
c.dates = ie(
  "dates accessor is deprecated. Use date instead.",
  is
);
c.months = ie(
  "months accessor is deprecated. Use month instead",
  La
);
c.years = ie(
  "years accessor is deprecated. Use year instead",
  Ca
);
c.zone = ie(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  ki
);
c.isDSTShifted = ie(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Ti
);
function qo(e) {
  return L(e * 1e3);
}
function Go() {
  return L.apply(null, arguments).parseZone();
}
function ls(e) {
  return e;
}
var Y = xr.prototype;
Y.calendar = Ps;
Y.longDateFormat = Ls;
Y.invalidDate = Cs;
Y.ordinal = $s;
Y.preparse = ls;
Y.postformat = ls;
Y.relativeTime = Us;
Y.pastFuture = js;
Y.set = Es;
Y.eras = wo;
Y.erasParse = go;
Y.erasConvertYear = bo;
Y.erasAbbrRegex = xo;
Y.erasNameRegex = Oo;
Y.erasNarrowRegex = Yo;
Y.months = sn;
Y.monthsShort = nn;
Y.monthsParse = ln;
Y.monthsRegex = cn;
Y.monthsShortRegex = dn;
Y.week = pn;
Y.firstDayOfYear = vn;
Y.firstDayOfWeek = yn;
Y.weekdays = xn;
Y.weekdaysMin = En;
Y.weekdaysShort = Yn;
Y.weekdaysParse = Pn;
Y.weekdaysRegex = Ln;
Y.weekdaysShortRegex = An;
Y.weekdaysMinRegex = Cn;
Y.isPM = In;
Y.meridiem = Un;
function Gt(e, t, r, a) {
  var s = Re(), n = Se().set(a, t);
  return s[r](n, e);
}
function us(e, t, r) {
  if (Pe(e) && (t = e, e = void 0), e = e || "", t != null)
    return Gt(e, t, r, "month");
  var a, s = [];
  for (a = 0; a < 12; a++)
    s[a] = Gt(e, a, r, "month");
  return s;
}
function jr(e, t, r, a) {
  typeof e == "boolean" ? (Pe(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, Pe(t) && (r = t, t = void 0), t = t || "");
  var s = Re(), n = e ? s._week.dow : 0, i, o = [];
  if (r != null)
    return Gt(t, (r + n) % 7, a, "day");
  for (i = 0; i < 7; i++)
    o[i] = Gt(t, (i + n) % 7, a, "day");
  return o;
}
function zo(e, t) {
  return us(e, t, "months");
}
function Zo(e, t) {
  return us(e, t, "monthsShort");
}
function Jo(e, t, r) {
  return jr(e, t, r, "weekdays");
}
function Xo(e, t, r) {
  return jr(e, t, r, "weekdaysShort");
}
function Qo(e, t, r) {
  return jr(e, t, r, "weekdaysMin");
}
Ie("en", {
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
    var t = e % 10, r = b(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + r;
  }
});
u.lang = ie(
  "moment.lang is deprecated. Use moment.locale instead.",
  Ie
);
u.langData = ie(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Re
);
var Oe = Math.abs;
function Ko() {
  var e = this._data;
  return this._milliseconds = Oe(this._milliseconds), this._days = Oe(this._days), this._months = Oe(this._months), e.milliseconds = Oe(e.milliseconds), e.seconds = Oe(e.seconds), e.minutes = Oe(e.minutes), e.hours = Oe(e.hours), e.months = Oe(e.months), e.years = Oe(e.years), this;
}
function ds(e, t, r, a) {
  var s = me(t, r);
  return e._milliseconds += a * s._milliseconds, e._days += a * s._days, e._months += a * s._months, e._bubble();
}
function el(e, t) {
  return ds(this, e, t, 1);
}
function tl(e, t) {
  return ds(this, e, t, -1);
}
function ua(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function rl() {
  var e = this._milliseconds, t = this._days, r = this._months, a = this._data, s, n, i, o, l;
  return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += ua(gr(r) + t) * 864e5, t = 0, r = 0), a.milliseconds = e % 1e3, s = ae(e / 1e3), a.seconds = s % 60, n = ae(s / 60), a.minutes = n % 60, i = ae(n / 60), a.hours = i % 24, t += ae(i / 24), l = ae(cs(t)), r += l, t -= ua(gr(l)), o = ae(r / 12), r %= 12, a.days = t, a.months = r, a.years = o, this;
}
function cs(e) {
  return e * 4800 / 146097;
}
function gr(e) {
  return e * 146097 / 4800;
}
function al(e) {
  if (!this.isValid())
    return NaN;
  var t, r, a = this._milliseconds;
  if (e = oe(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + a / 864e5, r = this._months + cs(t), e) {
      case "month":
        return r;
      case "quarter":
        return r / 3;
      case "year":
        return r / 12;
    }
  else
    switch (t = this._days + Math.round(gr(this._months)), e) {
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
function sl() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + b(this._months / 12) * 31536e6 : NaN;
}
function We(e) {
  return function() {
    return this.as(e);
  };
}
var nl = We("ms"), il = We("s"), ol = We("m"), ll = We("h"), ul = We("d"), dl = We("w"), cl = We("M"), hl = We("Q"), fl = We("y");
function pl() {
  return me(this);
}
function ml(e) {
  return e = oe(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Qe(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var yl = Qe("milliseconds"), vl = Qe("seconds"), _l = Qe("minutes"), wl = Qe("hours"), gl = Qe("days"), bl = Qe("months"), Dl = Qe("years");
function Sl() {
  return ae(this.days() / 7);
}
var xe = Math.round, st = {
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
function kl(e, t, r, a, s) {
  return s.relativeTime(t || 1, !!r, e, a);
}
function Ml(e, t, r, a) {
  var s = me(e).abs(), n = xe(s.as("s")), i = xe(s.as("m")), o = xe(s.as("h")), l = xe(s.as("d")), h = xe(s.as("M")), d = xe(s.as("w")), y = xe(s.as("y")), m = n <= r.ss && ["s", n] || n < r.s && ["ss", n] || i <= 1 && ["m"] || i < r.m && ["mm", i] || o <= 1 && ["h"] || o < r.h && ["hh", o] || l <= 1 && ["d"] || l < r.d && ["dd", l];
  return r.w != null && (m = m || d <= 1 && ["w"] || d < r.w && ["ww", d]), m = m || h <= 1 && ["M"] || h < r.M && ["MM", h] || y <= 1 && ["y"] || ["yy", y], m[2] = t, m[3] = +e > 0, m[4] = a, kl.apply(null, m);
}
function Ol(e) {
  return e === void 0 ? xe : typeof e == "function" ? (xe = e, !0) : !1;
}
function xl(e, t) {
  return st[e] === void 0 ? !1 : t === void 0 ? st[e] : (st[e] = t, e === "s" && (st.ss = t - 1), !0);
}
function Yl(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = !1, a = st, s, n;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (a = Object.assign({}, st, t), t.s != null && t.ss == null && (a.ss = t.s - 1)), s = this.localeData(), n = Ml(this, !r, a, s), r && (n = s.pastFuture(+this, n)), s.postformat(n);
}
var fr = Math.abs;
function rt(e) {
  return (e > 0) - (e < 0) || +e;
}
function ir() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = fr(this._milliseconds) / 1e3, t = fr(this._days), r = fr(this._months), a, s, n, i, o = this.asSeconds(), l, h, d, y;
  return o ? (a = ae(e / 60), s = ae(a / 60), e %= 60, a %= 60, n = ae(r / 12), r %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", l = o < 0 ? "-" : "", h = rt(this._months) !== rt(o) ? "-" : "", d = rt(this._days) !== rt(o) ? "-" : "", y = rt(this._milliseconds) !== rt(o) ? "-" : "", l + "P" + (n ? h + n + "Y" : "") + (r ? h + r + "M" : "") + (t ? d + t + "D" : "") + (s || a || e ? "T" : "") + (s ? y + s + "H" : "") + (a ? y + a + "M" : "") + (e ? y + i + "S" : "")) : "P0D";
}
var O = sr.prototype;
O.isValid = wi;
O.abs = Ko;
O.add = el;
O.subtract = tl;
O.as = al;
O.asMilliseconds = nl;
O.asSeconds = il;
O.asMinutes = ol;
O.asHours = ll;
O.asDays = ul;
O.asWeeks = dl;
O.asMonths = cl;
O.asQuarters = hl;
O.asYears = fl;
O.valueOf = sl;
O._bubble = rl;
O.clone = pl;
O.get = ml;
O.milliseconds = yl;
O.seconds = vl;
O.minutes = _l;
O.hours = wl;
O.days = gl;
O.weeks = Sl;
O.months = bl;
O.years = Dl;
O.humanize = Yl;
O.toISOString = ir;
O.toString = ir;
O.toJSON = ir;
O.locale = Ka;
O.localeData = ts;
O.toIsoString = ie(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  ir
);
O.lang = es;
p("X", 0, 0, "unix");
p("x", 0, 0, "valueOf");
f("x", er);
f("X", zs);
R("X", function(e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
R("x", function(e, t, r) {
  r._d = new Date(b(e));
});
//! moment.js
u.version = "2.29.4";
xs(L);
u.fn = c;
u.min = mi;
u.max = yi;
u.now = vi;
u.utc = Se;
u.unix = qo;
u.months = zo;
u.isDate = xt;
u.locale = Ie;
u.invalid = Zt;
u.duration = me;
u.isMoment = fe;
u.weekdays = Jo;
u.parseZone = Go;
u.localeData = Re;
u.isDuration = It;
u.monthsShort = Zo;
u.weekdaysMin = Qo;
u.defineLocale = Lr;
u.updateLocale = qn;
u.locales = Gn;
u.weekdaysShort = Xo;
u.normalizeUnits = oe;
u.relativeTimeRounding = Ol;
u.relativeTimeThreshold = xl;
u.calendarFormat = Ui;
u.prototype = c;
u.HTML5_FMT = {
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
var Q = "top", se = "bottom", ne = "right", K = "left", or = "auto", Pt = [Q, se, ne, K], lt = "start", Mt = "end", El = "clippingParents", hs = "viewport", vt = "popper", Tl = "reference", da = /* @__PURE__ */ Pt.reduce(function(e, t) {
  return e.concat([t + "-" + lt, t + "-" + Mt]);
}, []), fs = /* @__PURE__ */ [].concat(Pt, [or]).reduce(function(e, t) {
  return e.concat([t, t + "-" + lt, t + "-" + Mt]);
}, []), Pl = "beforeRead", Rl = "read", Wl = "afterRead", Nl = "beforeMain", Ll = "main", Al = "afterMain", Cl = "beforeWrite", Fl = "write", Il = "afterWrite", br = [Pl, Rl, Wl, Nl, Ll, Al, Cl, Fl, Il];
function De(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function le(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Xe(e) {
  var t = le(e).Element;
  return e instanceof t || e instanceof Element;
}
function te(e) {
  var t = le(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Vr(e) {
  if (typeof ShadowRoot == "undefined")
    return !1;
  var t = le(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function $l(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var a = t.styles[r] || {}, s = t.attributes[r] || {}, n = t.elements[r];
    !te(n) || !De(n) || (Object.assign(n.style, a), Object.keys(s).forEach(function(i) {
      var o = s[i];
      o === !1 ? n.removeAttribute(i) : n.setAttribute(i, o === !0 ? "" : o);
    }));
  });
}
function Hl(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(a) {
      var s = t.elements[a], n = t.attributes[a] || {}, i = Object.keys(t.styles.hasOwnProperty(a) ? t.styles[a] : r[a]), o = i.reduce(function(l, h) {
        return l[h] = "", l;
      }, {});
      !te(s) || !De(s) || (Object.assign(s.style, o), Object.keys(n).forEach(function(l) {
        s.removeAttribute(l);
      }));
    });
  };
}
const Ul = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: $l,
  effect: Hl,
  requires: ["computeStyles"]
};
function ce(e) {
  return e.split("-")[0];
}
var Je = Math.max, zt = Math.min, ut = Math.round;
function Dr() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ps() {
  return !/^((?!chrome|android).)*safari/i.test(Dr());
}
function dt(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), s = 1, n = 1;
  t && te(e) && (s = e.offsetWidth > 0 && ut(a.width) / e.offsetWidth || 1, n = e.offsetHeight > 0 && ut(a.height) / e.offsetHeight || 1);
  var i = Xe(e) ? le(e) : window, o = i.visualViewport, l = !ps() && r, h = (a.left + (l && o ? o.offsetLeft : 0)) / s, d = (a.top + (l && o ? o.offsetTop : 0)) / n, y = a.width / s, m = a.height / n;
  return {
    width: y,
    height: m,
    top: d,
    right: h + y,
    bottom: d + m,
    left: h,
    x: h,
    y: d
  };
}
function Br(e) {
  var t = dt(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - a) <= 1 && (a = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function ms(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Vr(r)) {
    var a = t;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function pe(e) {
  return le(e).getComputedStyle(e);
}
function jl(e) {
  return ["table", "td", "th"].indexOf(De(e)) >= 0;
}
function $e(e) {
  return ((Xe(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function lr(e) {
  return De(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Vr(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    $e(e)
  );
}
function ca(e) {
  return !te(e) || // https://github.com/popperjs/popper-core/issues/837
  pe(e).position === "fixed" ? null : e.offsetParent;
}
function Vl(e) {
  var t = /firefox/i.test(Dr()), r = /Trident/i.test(Dr());
  if (r && te(e)) {
    var a = pe(e);
    if (a.position === "fixed")
      return null;
  }
  var s = lr(e);
  for (Vr(s) && (s = s.host); te(s) && ["html", "body"].indexOf(De(s)) < 0; ) {
    var n = pe(s);
    if (n.transform !== "none" || n.perspective !== "none" || n.contain === "paint" || ["transform", "perspective"].indexOf(n.willChange) !== -1 || t && n.willChange === "filter" || t && n.filter && n.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Rt(e) {
  for (var t = le(e), r = ca(e); r && jl(r) && pe(r).position === "static"; )
    r = ca(r);
  return r && (De(r) === "html" || De(r) === "body" && pe(r).position === "static") ? t : r || Vl(e) || t;
}
function qr(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function gt(e, t, r) {
  return Je(e, zt(t, r));
}
function Bl(e, t, r) {
  var a = gt(e, t, r);
  return a > r ? r : a;
}
function ys() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function vs(e) {
  return Object.assign({}, ys(), e);
}
function _s(e, t) {
  return t.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
var ql = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, vs(typeof t != "number" ? t : _s(t, Pt));
};
function Gl(e) {
  var t, r = e.state, a = e.name, s = e.options, n = r.elements.arrow, i = r.modifiersData.popperOffsets, o = ce(r.placement), l = qr(o), h = [K, ne].indexOf(o) >= 0, d = h ? "height" : "width";
  if (!(!n || !i)) {
    var y = ql(s.padding, r), m = Br(n), _ = l === "y" ? Q : K, T = l === "y" ? se : ne, k = r.rects.reference[d] + r.rects.reference[l] - i[l] - r.rects.popper[d], g = i[l] - r.rects.reference[l], P = Rt(n), C = P ? l === "y" ? P.clientHeight || 0 : P.clientWidth || 0 : 0, N = k / 2 - g / 2, D = y[_], M = C - m[d] - y[T], S = C / 2 - m[d] / 2 + N, W = gt(D, S, M), I = l;
    r.modifiersData[a] = (t = {}, t[I] = W, t.centerOffset = W - S, t);
  }
}
function zl(e) {
  var t = e.state, r = e.options, a = r.element, s = a === void 0 ? "[data-popper-arrow]" : a;
  if (s != null && !(typeof s == "string" && (s = t.elements.popper.querySelector(s), !s))) {
    if (process.env.NODE_ENV !== "production" && (te(s) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !ms(t.elements.popper, s)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = s;
  }
}
const Zl = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Gl,
  effect: zl,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ct(e) {
  return e.split("-")[1];
}
var Jl = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Xl(e) {
  var t = e.x, r = e.y, a = window, s = a.devicePixelRatio || 1;
  return {
    x: ut(t * s) / s || 0,
    y: ut(r * s) / s || 0
  };
}
function ha(e) {
  var t, r = e.popper, a = e.popperRect, s = e.placement, n = e.variation, i = e.offsets, o = e.position, l = e.gpuAcceleration, h = e.adaptive, d = e.roundOffsets, y = e.isFixed, m = i.x, _ = m === void 0 ? 0 : m, T = i.y, k = T === void 0 ? 0 : T, g = typeof d == "function" ? d({
    x: _,
    y: k
  }) : {
    x: _,
    y: k
  };
  _ = g.x, k = g.y;
  var P = i.hasOwnProperty("x"), C = i.hasOwnProperty("y"), N = K, D = Q, M = window;
  if (h) {
    var S = Rt(r), W = "clientHeight", I = "clientWidth";
    if (S === le(r) && (S = $e(r), pe(S).position !== "static" && o === "absolute" && (W = "scrollHeight", I = "scrollWidth")), S = S, s === Q || (s === K || s === ne) && n === Mt) {
      D = se;
      var $ = y && S === M && M.visualViewport ? M.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        S[W]
      );
      k -= $ - a.height, k *= l ? 1 : -1;
    }
    if (s === K || (s === Q || s === se) && n === Mt) {
      N = ne;
      var H = y && S === M && M.visualViewport ? M.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        S[I]
      );
      _ -= H - a.width, _ *= l ? 1 : -1;
    }
  }
  var E = Object.assign({
    position: o
  }, h && Jl), V = d === !0 ? Xl({
    x: _,
    y: k
  }) : {
    x: _,
    y: k
  };
  if (_ = V.x, k = V.y, l) {
    var B;
    return Object.assign({}, E, (B = {}, B[D] = C ? "0" : "", B[N] = P ? "0" : "", B.transform = (M.devicePixelRatio || 1) <= 1 ? "translate(" + _ + "px, " + k + "px)" : "translate3d(" + _ + "px, " + k + "px, 0)", B));
  }
  return Object.assign({}, E, (t = {}, t[D] = C ? k + "px" : "", t[N] = P ? _ + "px" : "", t.transform = "", t));
}
function Ql(e) {
  var t = e.state, r = e.options, a = r.gpuAcceleration, s = a === void 0 ? !0 : a, n = r.adaptive, i = n === void 0 ? !0 : n, o = r.roundOffsets, l = o === void 0 ? !0 : o;
  if (process.env.NODE_ENV !== "production") {
    var h = pe(t.elements.popper).transitionProperty || "";
    i && ["transform", "top", "right", "bottom", "left"].some(function(y) {
      return h.indexOf(y) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: ce(t.placement),
    variation: ct(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ha(Object.assign({}, d, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ha(Object.assign({}, d, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Kl = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ql,
  data: {}
};
var Ct = {
  passive: !0
};
function eu(e) {
  var t = e.state, r = e.instance, a = e.options, s = a.scroll, n = s === void 0 ? !0 : s, i = a.resize, o = i === void 0 ? !0 : i, l = le(t.elements.popper), h = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return n && h.forEach(function(d) {
    d.addEventListener("scroll", r.update, Ct);
  }), o && l.addEventListener("resize", r.update, Ct), function() {
    n && h.forEach(function(d) {
      d.removeEventListener("scroll", r.update, Ct);
    }), o && l.removeEventListener("resize", r.update, Ct);
  };
}
const tu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: eu,
  data: {}
};
var ru = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ht(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ru[t];
  });
}
var au = {
  start: "end",
  end: "start"
};
function fa(e) {
  return e.replace(/start|end/g, function(t) {
    return au[t];
  });
}
function Gr(e) {
  var t = le(e), r = t.pageXOffset, a = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function zr(e) {
  return dt($e(e)).left + Gr(e).scrollLeft;
}
function su(e, t) {
  var r = le(e), a = $e(e), s = r.visualViewport, n = a.clientWidth, i = a.clientHeight, o = 0, l = 0;
  if (s) {
    n = s.width, i = s.height;
    var h = ps();
    (h || !h && t === "fixed") && (o = s.offsetLeft, l = s.offsetTop);
  }
  return {
    width: n,
    height: i,
    x: o + zr(e),
    y: l
  };
}
function nu(e) {
  var t, r = $e(e), a = Gr(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, n = Je(r.scrollWidth, r.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), i = Je(r.scrollHeight, r.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), o = -a.scrollLeft + zr(e), l = -a.scrollTop;
  return pe(s || r).direction === "rtl" && (o += Je(r.clientWidth, s ? s.clientWidth : 0) - n), {
    width: n,
    height: i,
    x: o,
    y: l
  };
}
function Zr(e) {
  var t = pe(e), r = t.overflow, a = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + s + a);
}
function ws(e) {
  return ["html", "body", "#document"].indexOf(De(e)) >= 0 ? e.ownerDocument.body : te(e) && Zr(e) ? e : ws(lr(e));
}
function bt(e, t) {
  var r;
  t === void 0 && (t = []);
  var a = ws(e), s = a === ((r = e.ownerDocument) == null ? void 0 : r.body), n = le(a), i = s ? [n].concat(n.visualViewport || [], Zr(a) ? a : []) : a, o = t.concat(i);
  return s ? o : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    o.concat(bt(lr(i)))
  );
}
function Sr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function iu(e, t) {
  var r = dt(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function pa(e, t, r) {
  return t === hs ? Sr(su(e, r)) : Xe(t) ? iu(t, r) : Sr(nu($e(e)));
}
function ou(e) {
  var t = bt(lr(e)), r = ["absolute", "fixed"].indexOf(pe(e).position) >= 0, a = r && te(e) ? Rt(e) : e;
  return Xe(a) ? t.filter(function(s) {
    return Xe(s) && ms(s, a) && De(s) !== "body";
  }) : [];
}
function lu(e, t, r, a) {
  var s = t === "clippingParents" ? ou(e) : [].concat(t), n = [].concat(s, [r]), i = n[0], o = n.reduce(function(l, h) {
    var d = pa(e, h, a);
    return l.top = Je(d.top, l.top), l.right = zt(d.right, l.right), l.bottom = zt(d.bottom, l.bottom), l.left = Je(d.left, l.left), l;
  }, pa(e, i, a));
  return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function gs(e) {
  var t = e.reference, r = e.element, a = e.placement, s = a ? ce(a) : null, n = a ? ct(a) : null, i = t.x + t.width / 2 - r.width / 2, o = t.y + t.height / 2 - r.height / 2, l;
  switch (s) {
    case Q:
      l = {
        x: i,
        y: t.y - r.height
      };
      break;
    case se:
      l = {
        x: i,
        y: t.y + t.height
      };
      break;
    case ne:
      l = {
        x: t.x + t.width,
        y: o
      };
      break;
    case K:
      l = {
        x: t.x - r.width,
        y: o
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var h = s ? qr(s) : null;
  if (h != null) {
    var d = h === "y" ? "height" : "width";
    switch (n) {
      case lt:
        l[h] = l[h] - (t[d] / 2 - r[d] / 2);
        break;
      case Mt:
        l[h] = l[h] + (t[d] / 2 - r[d] / 2);
        break;
    }
  }
  return l;
}
function Ot(e, t) {
  t === void 0 && (t = {});
  var r = t, a = r.placement, s = a === void 0 ? e.placement : a, n = r.strategy, i = n === void 0 ? e.strategy : n, o = r.boundary, l = o === void 0 ? El : o, h = r.rootBoundary, d = h === void 0 ? hs : h, y = r.elementContext, m = y === void 0 ? vt : y, _ = r.altBoundary, T = _ === void 0 ? !1 : _, k = r.padding, g = k === void 0 ? 0 : k, P = vs(typeof g != "number" ? g : _s(g, Pt)), C = m === vt ? Tl : vt, N = e.rects.popper, D = e.elements[T ? C : m], M = lu(Xe(D) ? D : D.contextElement || $e(e.elements.popper), l, d, i), S = dt(e.elements.reference), W = gs({
    reference: S,
    element: N,
    strategy: "absolute",
    placement: s
  }), I = Sr(Object.assign({}, N, W)), $ = m === vt ? I : S, H = {
    top: M.top - $.top + P.top,
    bottom: $.bottom - M.bottom + P.bottom,
    left: M.left - $.left + P.left,
    right: $.right - M.right + P.right
  }, E = e.modifiersData.offset;
  if (m === vt && E) {
    var V = E[s];
    Object.keys(H).forEach(function(B) {
      var ye = [ne, se].indexOf(B) >= 0 ? 1 : -1, ve = [Q, se].indexOf(B) >= 0 ? "y" : "x";
      H[B] += V[ve] * ye;
    });
  }
  return H;
}
function uu(e, t) {
  t === void 0 && (t = {});
  var r = t, a = r.placement, s = r.boundary, n = r.rootBoundary, i = r.padding, o = r.flipVariations, l = r.allowedAutoPlacements, h = l === void 0 ? fs : l, d = ct(a), y = d ? o ? da : da.filter(function(T) {
    return ct(T) === d;
  }) : Pt, m = y.filter(function(T) {
    return h.indexOf(T) >= 0;
  });
  m.length === 0 && (m = y, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var _ = m.reduce(function(T, k) {
    return T[k] = Ot(e, {
      placement: k,
      boundary: s,
      rootBoundary: n,
      padding: i
    })[ce(k)], T;
  }, {});
  return Object.keys(_).sort(function(T, k) {
    return _[T] - _[k];
  });
}
function du(e) {
  if (ce(e) === or)
    return [];
  var t = Ht(e);
  return [fa(e), t, fa(t)];
}
function cu(e) {
  var t = e.state, r = e.options, a = e.name;
  if (!t.modifiersData[a]._skip) {
    for (var s = r.mainAxis, n = s === void 0 ? !0 : s, i = r.altAxis, o = i === void 0 ? !0 : i, l = r.fallbackPlacements, h = r.padding, d = r.boundary, y = r.rootBoundary, m = r.altBoundary, _ = r.flipVariations, T = _ === void 0 ? !0 : _, k = r.allowedAutoPlacements, g = t.options.placement, P = ce(g), C = P === g, N = l || (C || !T ? [Ht(g)] : du(g)), D = [g].concat(N).reduce(function(Me, ue) {
      return Me.concat(ce(ue) === or ? uu(t, {
        placement: ue,
        boundary: d,
        rootBoundary: y,
        padding: h,
        flipVariations: T,
        allowedAutoPlacements: k
      }) : ue);
    }, []), M = t.rects.reference, S = t.rects.popper, W = /* @__PURE__ */ new Map(), I = !0, $ = D[0], H = 0; H < D.length; H++) {
      var E = D[H], V = ce(E), B = ct(E) === lt, ye = [Q, se].indexOf(V) >= 0, ve = ye ? "width" : "height", q = Ot(t, {
        placement: E,
        boundary: d,
        rootBoundary: y,
        altBoundary: m,
        padding: h
      }), J = ye ? B ? ne : K : B ? se : Q;
      M[ve] > S[ve] && (J = Ht(J));
      var He = Ht(J), _e = [];
      if (n && _e.push(q[V] <= 0), o && _e.push(q[J] <= 0, q[He] <= 0), _e.every(function(Me) {
        return Me;
      })) {
        $ = E, I = !1;
        break;
      }
      W.set(E, _e);
    }
    if (I)
      for (var Ue = T ? 3 : 1, Ke = function(ue) {
        var Le = D.find(function(Ve) {
          var we = W.get(Ve);
          if (we)
            return we.slice(0, ue).every(function(et) {
              return et;
            });
        });
        if (Le)
          return $ = Le, "break";
      }, Ne = Ue; Ne > 0; Ne--) {
        var je = Ke(Ne);
        if (je === "break")
          break;
      }
    t.placement !== $ && (t.modifiersData[a]._skip = !0, t.placement = $, t.reset = !0);
  }
}
const hu = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: cu,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ma(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function ya(e) {
  return [Q, ne, se, K].some(function(t) {
    return e[t] >= 0;
  });
}
function fu(e) {
  var t = e.state, r = e.name, a = t.rects.reference, s = t.rects.popper, n = t.modifiersData.preventOverflow, i = Ot(t, {
    elementContext: "reference"
  }), o = Ot(t, {
    altBoundary: !0
  }), l = ma(i, a), h = ma(o, s, n), d = ya(l), y = ya(h);
  t.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: h,
    isReferenceHidden: d,
    hasPopperEscaped: y
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": y
  });
}
const pu = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: fu
};
function mu(e, t, r) {
  var a = ce(e), s = [K, Q].indexOf(a) >= 0 ? -1 : 1, n = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, i = n[0], o = n[1];
  return i = i || 0, o = (o || 0) * s, [K, ne].indexOf(a) >= 0 ? {
    x: o,
    y: i
  } : {
    x: i,
    y: o
  };
}
function yu(e) {
  var t = e.state, r = e.options, a = e.name, s = r.offset, n = s === void 0 ? [0, 0] : s, i = fs.reduce(function(d, y) {
    return d[y] = mu(y, t.rects, n), d;
  }, {}), o = i[t.placement], l = o.x, h = o.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += h), t.modifiersData[a] = i;
}
const vu = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: yu
};
function _u(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = gs({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const wu = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: _u,
  data: {}
};
function gu(e) {
  return e === "x" ? "y" : "x";
}
function bu(e) {
  var t = e.state, r = e.options, a = e.name, s = r.mainAxis, n = s === void 0 ? !0 : s, i = r.altAxis, o = i === void 0 ? !1 : i, l = r.boundary, h = r.rootBoundary, d = r.altBoundary, y = r.padding, m = r.tether, _ = m === void 0 ? !0 : m, T = r.tetherOffset, k = T === void 0 ? 0 : T, g = Ot(t, {
    boundary: l,
    rootBoundary: h,
    padding: y,
    altBoundary: d
  }), P = ce(t.placement), C = ct(t.placement), N = !C, D = qr(P), M = gu(D), S = t.modifiersData.popperOffsets, W = t.rects.reference, I = t.rects.popper, $ = typeof k == "function" ? k(Object.assign({}, t.rects, {
    placement: t.placement
  })) : k, H = typeof $ == "number" ? {
    mainAxis: $,
    altAxis: $
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, $), E = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, V = {
    x: 0,
    y: 0
  };
  if (S) {
    if (n) {
      var B, ye = D === "y" ? Q : K, ve = D === "y" ? se : ne, q = D === "y" ? "height" : "width", J = S[D], He = J + g[ye], _e = J - g[ve], Ue = _ ? -I[q] / 2 : 0, Ke = C === lt ? W[q] : I[q], Ne = C === lt ? -I[q] : -W[q], je = t.elements.arrow, Me = _ && je ? Br(je) : {
        width: 0,
        height: 0
      }, ue = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ys(), Le = ue[ye], Ve = ue[ve], we = gt(0, W[q], Me[q]), et = N ? W[q] / 2 - Ue - we - Le - H.mainAxis : Ke - we - Le - H.mainAxis, Wt = N ? -W[q] / 2 + Ue + we + Ve + H.mainAxis : Ne + we + Ve + H.mainAxis, tt = t.elements.arrow && Rt(t.elements.arrow), pt = tt ? D === "y" ? tt.clientTop || 0 : tt.clientLeft || 0 : 0, Jr = (B = E == null ? void 0 : E[D]) != null ? B : 0, bs = J + et - Jr - pt, Ds = J + Wt - Jr, Xr = gt(_ ? zt(He, bs) : He, J, _ ? Je(_e, Ds) : _e);
      S[D] = Xr, V[D] = Xr - J;
    }
    if (o) {
      var Qr, Ss = D === "x" ? Q : K, ks = D === "x" ? se : ne, Be = S[M], Nt = M === "y" ? "height" : "width", Kr = Be + g[Ss], ea = Be - g[ks], ur = [Q, K].indexOf(P) !== -1, ta = (Qr = E == null ? void 0 : E[M]) != null ? Qr : 0, ra = ur ? Kr : Be - W[Nt] - I[Nt] - ta + H.altAxis, aa = ur ? Be + W[Nt] + I[Nt] - ta - H.altAxis : ea, sa = _ && ur ? Bl(ra, Be, aa) : gt(_ ? ra : Kr, Be, _ ? aa : ea);
      S[M] = sa, V[M] = sa - Be;
    }
    t.modifiersData[a] = V;
  }
}
const Du = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: bu,
  requiresIfExists: ["offset"]
};
function Su(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function ku(e) {
  return e === le(e) || !te(e) ? Gr(e) : Su(e);
}
function Mu(e) {
  var t = e.getBoundingClientRect(), r = ut(t.width) / e.offsetWidth || 1, a = ut(t.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function Ou(e, t, r) {
  r === void 0 && (r = !1);
  var a = te(t), s = te(t) && Mu(t), n = $e(t), i = dt(e, s, r), o = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((De(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Zr(n)) && (o = ku(t)), te(t) ? (l = dt(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : n && (l.x = zr(n))), {
    x: i.left + o.scrollLeft - l.x,
    y: i.top + o.scrollTop - l.y,
    width: i.width,
    height: i.height
  };
}
function xu(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), a = [];
  e.forEach(function(n) {
    t.set(n.name, n);
  });
  function s(n) {
    r.add(n.name);
    var i = [].concat(n.requires || [], n.requiresIfExists || []);
    i.forEach(function(o) {
      if (!r.has(o)) {
        var l = t.get(o);
        l && s(l);
      }
    }), a.push(n);
  }
  return e.forEach(function(n) {
    r.has(n.name) || s(n);
  }), a;
}
function Yu(e) {
  var t = xu(e);
  return br.reduce(function(r, a) {
    return r.concat(t.filter(function(s) {
      return s.phase === a;
    }));
  }, []);
}
function Eu(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Ae(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(s, n) {
    return s.replace(/%s/, n);
  }, e);
}
var Ge = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Tu = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', va = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Pu(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), va).filter(function(r, a, s) {
      return s.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(Ae(Ge, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Ae(Ge, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          br.indexOf(t.phase) < 0 && console.error(Ae(Ge, t.name, '"phase"', "either " + br.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Ae(Ge, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Ae(Ge, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Ae(Ge, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Ae(Ge, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + va.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(a) {
        e.find(function(s) {
          return s.name === a;
        }) == null && console.error(Ae(Tu, String(t.name), a, a));
      });
    });
  });
}
function Ru(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var s = t(a);
    if (!r.has(s))
      return r.add(s), !0;
  });
}
function Wu(e) {
  var t = e.reduce(function(r, a) {
    var s = r[a.name];
    return r[a.name] = s ? Object.assign({}, s, a, {
      options: Object.assign({}, s.options, a.options),
      data: Object.assign({}, s.data, a.data)
    }) : a, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var _a = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Nu = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", wa = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ga() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Lu(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, a = r === void 0 ? [] : r, s = t.defaultOptions, n = s === void 0 ? wa : s;
  return function(o, l, h) {
    h === void 0 && (h = n);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, wa, n),
      modifiersData: {},
      elements: {
        reference: o,
        popper: l
      },
      attributes: {},
      styles: {}
    }, y = [], m = !1, _ = {
      state: d,
      setOptions: function(P) {
        var C = typeof P == "function" ? P(d.options) : P;
        k(), d.options = Object.assign({}, n, d.options, C), d.scrollParents = {
          reference: Xe(o) ? bt(o) : o.contextElement ? bt(o.contextElement) : [],
          popper: bt(l)
        };
        var N = Yu(Wu([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = N.filter(function(E) {
          return E.enabled;
        }), process.env.NODE_ENV !== "production") {
          var D = Ru([].concat(N, d.options.modifiers), function(E) {
            var V = E.name;
            return V;
          });
          if (Pu(D), ce(d.options.placement) === or) {
            var M = d.orderedModifiers.find(function(E) {
              var V = E.name;
              return V === "flip";
            });
            M || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var S = pe(l), W = S.marginTop, I = S.marginRight, $ = S.marginBottom, H = S.marginLeft;
          [W, I, $, H].some(function(E) {
            return parseFloat(E);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return T(), _.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!m) {
          var P = d.elements, C = P.reference, N = P.popper;
          if (!ga(C, N)) {
            process.env.NODE_ENV !== "production" && console.error(_a);
            return;
          }
          d.rects = {
            reference: Ou(C, Rt(N), d.options.strategy === "fixed"),
            popper: Br(N)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(E) {
            return d.modifiersData[E.name] = Object.assign({}, E.data);
          });
          for (var D = 0, M = 0; M < d.orderedModifiers.length; M++) {
            if (process.env.NODE_ENV !== "production" && (D += 1, D > 100)) {
              console.error(Nu);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, M = -1;
              continue;
            }
            var S = d.orderedModifiers[M], W = S.fn, I = S.options, $ = I === void 0 ? {} : I, H = S.name;
            typeof W == "function" && (d = W({
              state: d,
              options: $,
              name: H,
              instance: _
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Eu(function() {
        return new Promise(function(g) {
          _.forceUpdate(), g(d);
        });
      }),
      destroy: function() {
        k(), m = !0;
      }
    };
    if (!ga(o, l))
      return process.env.NODE_ENV !== "production" && console.error(_a), _;
    _.setOptions(h).then(function(g) {
      !m && h.onFirstUpdate && h.onFirstUpdate(g);
    });
    function T() {
      d.orderedModifiers.forEach(function(g) {
        var P = g.name, C = g.options, N = C === void 0 ? {} : C, D = g.effect;
        if (typeof D == "function") {
          var M = D({
            state: d,
            name: P,
            instance: _,
            options: N
          }), S = function() {
          };
          y.push(M || S);
        }
      });
    }
    function k() {
      y.forEach(function(g) {
        return g();
      }), y = [];
    }
    return _;
  };
}
var Au = [tu, wu, Kl, Ul, vu, hu, Du, Zl, pu], Cu = /* @__PURE__ */ Lu({
  defaultModifiers: Au
});
class Fu {
  constructor(t) {
    v(this, "options");
    v(this, "container");
    v(this, "dates");
    v(this, "months");
    v(this, "years");
    v(this, "nowDay");
    v(this, "nowMonth");
    v(this, "quickActions");
    v(this, "locale");
    this.options = Object.assign(this, t), this.container = this.options.container, this.dates = this.options.dates, this.months = this.options.months, this.years = this.options.years, this.nowDay = this.options.nowDay, this.nowMonth = this.options.nowMonth, this.quickActions = this.options.quickActions, this.locale = this.options.locale;
  }
  render() {
    var t, r, a, s, n, i, o, l, h, d, y;
    this.container.innerHTML += `<div class="calendarify">
    <div class="quick-actions ${this.quickActions ? "" : "d-none"}">
      <button data-action="today">${(a = (r = (t = this.locale.lang) == null ? void 0 : t.ui) == null ? void 0 : r.quickActions) == null ? void 0 : a.today}</button>
      <button data-action="tomorrow">${(i = (n = (s = this.locale.lang) == null ? void 0 : s.ui) == null ? void 0 : n.quickActions) == null ? void 0 : i.tomorrow}</button>
      <button data-action="in-2-days">${(h = (l = (o = this.locale.lang) == null ? void 0 : o.ui) == null ? void 0 : l.quickActions) == null ? void 0 : h.inTwoDays}</button>
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
      ${(y = (d = this.locale.lang) == null ? void 0 : d.weekdays) == null ? void 0 : y.map((m) => `<li>${m.slice(0, 3)}</li>`).join("")}
      </ul>
      <ul class="dates-wrapper wrapper">
          ${this.dates.map((m) => `<li><button ${m.disabled ? "disabled" : ""} type="button" class="date-button ${this.getHolidayClass({ date: m.date, nowMonth: this.nowMonth })} ${this.nowDay == String(m.date) ? "active" : ""}">${m.date}</button></li>`).join("")}
      </ul>
      <ul class="months-wrapper wrapper d-none">
        ${this.months.map((m, _) => {
      var g;
      const T = (g = this.locale.lang) == null ? void 0 : g.months[_].slice(0, 3), k = u().format("M");
      return `<li><button class="${m == k ? "active" : ""}" data-date="${m}" type="button">${T}</button></li>`;
    }).join("")}
      </ul>
      <ul class="years-wrapper wrapper d-none">
        ${this.years.map((m) => `<li><button data-date="${m}" type="button">${m}</button></li>`).join("")}
      </ul>
    </div>
  </div>`;
  }
  getHolidayClass(t) {
    const { nowMonth: r, date: a } = t, s = new Date(`${r}-${a}`).getDay(), n = s === 0, i = s === 6;
    let o = "";
    return n ? o = "holiday" : i && (o = "pre-holiday"), o;
  }
}
class $u {
  constructor(t, r) {
    v(this, "options");
    v(this, "locale");
    v(this, "startDate");
    v(this, "accentColor", "#0090FC");
    v(this, "isDark", !1);
    v(this, "zIndex", 1e3);
    v(this, "customClass", []);
    v(this, "quickActions", !0);
    v(this, "onChange");
    v(this, "_container");
    v(this, "_calendarWrapper");
    v(this, "_datepickerInput");
    v(this, "_datesWrapperEl");
    v(this, "_monthsWrapperEl");
    v(this, "_yearsWrapperEl");
    v(this, "_months");
    v(this, "_dates");
    v(this, "_nowMonth");
    v(this, "_nowDay");
    v(this, "_nowYear");
    v(this, "_dateButtons");
    v(this, "_expandButton");
    v(this, "_prevButton");
    v(this, "_nextButton");
    v(this, "_date");
    v(this, "_isExpanded", !1);
    v(this, "_expandedMode", "months");
    v(this, "_outputDate");
    v(this, "_quickButtons");
    v(this, "_wrapperEls");
    v(this, "_yearRangeButton");
    v(this, "_systemFormat", "YYYY-MM-DD");
    v(this, "_helpers");
    v(this, "_inputSelector");
    v(this, "_wasExecuted", !1);
    v(this, "_isSetted", !1);
    var s, n, i, o, l, h, d, y, m, _, T, k, g, P, C, N, D, M, S, W, I, $, H, E, V, B, ye, ve, q, J, He, _e, Ue, Ke, Ne, je, Me, ue, Le, Ve, we, et, Wt, tt;
    const a = document.documentElement;
    this.options = Object.assign(this, r), a.style.setProperty("--accentColor", (s = this.options.accentColor) != null ? s : this.accentColor), this.onChange = this.options.onChange, this._inputSelector = t, this.locale = {
      format: (o = (i = (n = this.options) == null ? void 0 : n.locale) == null ? void 0 : i.format) != null ? o : this._systemFormat,
      lang: {
        code: (y = (d = (h = (l = this.options) == null ? void 0 : l.locale) == null ? void 0 : h.lang) == null ? void 0 : d.code) != null ? y : "en",
        ui: {
          quickActions: {
            today: (P = (g = (k = (T = (_ = (m = this.options) == null ? void 0 : m.locale) == null ? void 0 : _.lang) == null ? void 0 : T.ui) == null ? void 0 : k.quickActions) == null ? void 0 : g.today) != null ? P : "Today",
            tomorrow: (W = (S = (M = (D = (N = (C = this.options) == null ? void 0 : C.locale) == null ? void 0 : N.lang) == null ? void 0 : D.ui) == null ? void 0 : M.quickActions) == null ? void 0 : S.tomorrow) != null ? W : "Tomorrow",
            inTwoDays: (B = (V = (E = (H = ($ = (I = this.options) == null ? void 0 : I.locale) == null ? void 0 : $.lang) == null ? void 0 : H.ui) == null ? void 0 : E.quickActions) == null ? void 0 : V.inTwoDays) != null ? B : "In 2 Days"
          }
        },
        months: (J = (q = (ve = (ye = this.options) == null ? void 0 : ye.locale) == null ? void 0 : ve.lang) == null ? void 0 : q.months) != null ? J : u.months(),
        weekdays: (Ke = (Ue = (_e = (He = this.options) == null ? void 0 : He.locale) == null ? void 0 : _e.lang) == null ? void 0 : Ue.weekdays) != null ? Ke : u.weekdays()
      }
    }, this.startDate = (Ne = this.options.startDate) != null ? Ne : u().format(this._systemFormat), this._date = (je = this.options.startDate) != null ? je : this.startDate, this._months = [];
    for (let pt = 0; pt < 12; pt++)
      this._months.push(String(pt + 1));
    this._nowMonth = u(this._date).format("YYYY-MM"), this._nowDay = u(this._date).format("D"), this._nowYear = u(this._date).format("YYYY"), this._outputDate = u(this._date).format(this.locale.format), this._dates = [], this.loopDaysMonths(), this._helpers = new Fu({
      container: (Me = document.querySelector(t)) == null ? void 0 : Me.parentElement,
      dates: this._dates,
      months: this._months,
      years: this._years,
      nowMonth: this._nowMonth,
      nowDay: this._nowDay,
      quickActions: this.options.quickActions,
      locale: this.options.locale
    }), this._helpers.render(), u.updateLocale((Ve = (Le = (ue = this.options) == null ? void 0 : ue.locale) == null ? void 0 : Le.lang) == null ? void 0 : Ve.code, { months: (et = (we = this.options.locale) == null ? void 0 : we.lang) == null ? void 0 : et.months, weekdays: (tt = (Wt = this.options.locale) == null ? void 0 : Wt.lang) == null ? void 0 : tt.weekdays }), this._container = document.querySelector(".calendarify"), this._datepickerInput = document.querySelector(t), this._datesWrapperEl = this._container.querySelector(".dates-wrapper"), this._monthsWrapperEl = this._container.querySelector(".months-wrapper"), this._yearsWrapperEl = this._container.querySelector(".years-wrapper"), this._expandButton = this._container.querySelector('.navigation button[data-action="expand"]'), this._dateButtons = this._container.querySelectorAll(".date-button"), this._prevButton = this._container.querySelector('.navigation button[data-action="prev"]'), this._nextButton = this._container.querySelector('.navigation button[data-action="next"]'), this._calendarWrapper = this._container.querySelector(".calendar"), this._quickButtons = this._container.querySelectorAll(".quick-actions button"), this._wrapperEls = this._calendarWrapper.querySelectorAll(".wrapper:not(:last-child, :nth-child(3))"), this._yearRangeButton = this._container.querySelector('.navigation button[data-action="year-range"]');
  }
  init() {
    u.suppressDeprecationWarnings = !0, this.showValue(), this.changeState(), this._datepickerInput.spellcheck = !1, this._datepickerInput.addEventListener("input", (t) => {
      const r = t.target;
      r.value = this._outputDate;
    }), this.stylingContainer(), this._prevButton.addEventListener("click", this.prevMonth.bind(this)), this._nextButton.addEventListener("click", this.nextMonth.bind(this)), this._expandButton.addEventListener("click", this.expand.bind(this)), this._datepickerInput.addEventListener("focus", () => {
      this._wasExecuted = !0, this._container.classList.add("show");
    }), window.addEventListener("click", this.hideOnOutsideClick.bind(this)), this._quickButtons.forEach((t) => t.addEventListener("click", this.quickAction.bind(this)));
  }
  stylingContainer() {
    var t, r, a;
    (t = this.options) != null && t.isDark && this._container.setAttribute("data-theme", "dark"), (r = this.options) != null && r.zIndex && this._container.style.setProperty("--z-index", String(this.options.zIndex)), (a = this.options) != null && a.customClass && this.customClass.forEach((s) => this._container.classList.add(s)), Cu(this._datepickerInput, this._container, {
      placement: "bottom-start",
      modifiers: [
        {
          name: "offset",
          options: { offset: [0, 12] }
        }
      ]
    });
  }
  get _years() {
    const t = [], r = u(this._date), a = u(this._date).add(11, "y");
    for (; a.diff(r, "years") >= 0; )
      t.push(r.format("YYYY")), r.add(1, "year");
    return t;
  }
  quickAction(t) {
    switch (t.target.getAttribute("data-action")) {
      case "today":
        this._date = this.startDate;
        break;
      case "tomorrow":
        this._date = u(this.startDate).add(1, "days").format(this._systemFormat);
        break;
      default:
        this._date = u(this.startDate).add(2, "days").format(this._systemFormat);
        break;
    }
    this.showValue(), this.changeState(), this.resetUI();
  }
  showValue() {
    this._outputDate = u(this._date).format(this.locale.format), this._datepickerInput.value = this._outputDate;
  }
  hideOnOutsideClick(t) {
    const r = t.target;
    !r.closest(this._inputSelector) && !r.closest(".calendarify") && (this._container.classList.remove("show"), this.doneState(), this._wasExecuted = !1);
  }
  expand() {
    this._isExpanded = !0, this._expandButton.textContent = u(this._date).format("YYYY"), this._wrapperEls.forEach((t) => t.classList.add("d-none")), this._monthsWrapperEl.classList.remove("d-none"), this.showMonths();
  }
  showMonths() {
    this._expandButton.classList.add("d-none"), this._yearRangeButton.classList.remove("d-none");
    const t = this._monthsWrapperEl.querySelectorAll("button");
    t.forEach((r) => r.addEventListener("click", (a) => this.changeMonth(a, t))), this._yearRangeButton.addEventListener("click", this.showYears.bind(this));
  }
  showYears() {
    this._expandedMode = "years", this._monthsWrapperEl.classList.add("d-none"), this._yearsWrapperEl.classList.remove("d-none"), this._yearsWrapperEl.innerHTML = `${this._years.map((r) => `<li><button class="${r == this._nowYear ? "active" : ""}" data-date="${r}" type="button">${r}</button></li>`).join("")}`, this._yearsWrapperEl.querySelectorAll("button").forEach((r) => r.addEventListener("click", this.changeYear.bind(this))), this.changeState();
  }
  changeYear(t) {
    const a = t.target.getAttribute("data-date"), s = u(this._nowMonth).format("MM");
    this._date = u(`${a}-${s}-${this._nowDay}`).format(this._systemFormat), this._nowYear = a, this._yearsWrapperEl.classList.add("d-none"), this._monthsWrapperEl.classList.remove("d-none"), this._expandedMode = "months", this.changeState();
  }
  changeMonth(t, r) {
    this._wrapperEls.forEach((o) => o.classList.remove("d-none")), r.forEach((o) => o.classList.remove("active"));
    const a = t.target, s = a.getAttribute("data-date"), n = u(this._date).format("YYYY"), i = u(new Date(`${n} ${s} ${this._nowDay}`));
    this._date = u(i).format(this._systemFormat), a.classList.add("active"), this._isExpanded = !1, this._expandedMode = "months", this.changeState(), this.resetUI();
  }
  doneState() {
    this._container.classList.remove("show");
    const t = {
      date: {
        default: u(this._outputDate).toDate(),
        iso: u(this._outputDate).toISOString()
      },
      formatted: {
        relative: u(this._outputDate).fromNow(),
        calendar: u(this._outputDate).calendar()
      },
      unix: {
        seconds: u(this._outputDate).unix(),
        milliseconds: +u(this._outputDate)
      },
      locale: this.locale,
      partials: {
        day: u(this._outputDate).format("DD"),
        month: u(this._outputDate).format("MM"),
        year: u(this._outputDate).format("YYYY")
      }
    };
    this.resetUI();
    const { onChange: r, _wasExecuted: a, _isSetted: s } = this;
    r && a && s && (r(t), this._isSetted = !1);
  }
  resetUI() {
    this._monthsWrapperEl.classList.add("d-none"), this._yearsWrapperEl.classList.add("d-none"), this._wrapperEls.forEach((t) => t.classList.remove("d-none")), this._isExpanded = !1, this._monthsWrapperEl.classList.add("d-none"), this._yearsWrapperEl.classList.add("d-none"), this._expandButton.classList.remove("d-none"), this._yearRangeButton.classList.add("d-none"), this.changeState();
  }
  changeState() {
    var a, s;
    this._dates = [], this._nowMonth = u(this._date).format("YYYY-MM"), this._nowDay = u(this._date).format("D"), this.loopDaysMonths();
    const t = u(this._nowMonth).format("M"), r = u(this._nowMonth).format("YYYY");
    switch (this._expandButton.textContent = `${(a = this.locale.lang) == null ? void 0 : a.months[+t - 1]} ${r}`, this._expandedMode) {
      case "years":
        this._yearRangeButton.textContent = `${this._years[0]} - ${this._years[this._years.length - 1]}`;
        break;
      default:
        this._yearRangeButton.textContent = u(this._date).format("YYYY");
        break;
    }
    if (this.renderDates(), this._dateButtons = this._datesWrapperEl.querySelectorAll(".date-button"), this._dateButtons.forEach((n) => n.addEventListener("click", this.setDate.bind(this))), this._expandedMode == "months" && this._dates.slice(0, 7).every((i) => i.disabled))
      for (let i = 0; i < 7; i++)
        (s = this._dateButtons[i].parentElement) == null || s.classList.add("d-none");
  }
  loopDaysMonths() {
    const t = u(this._date).daysInMonth(), r = u(new Date(this._nowMonth)).isoWeekday(), a = u(this._date).subtract(1, "months").daysInMonth();
    for (let s = 1; s <= r; s++)
      this._dates.unshift({ disabled: !0, date: String(a + 1 - s) });
    for (let s = 1; s <= t; s++)
      this._dates.push({ disabled: !1, date: String(s) });
  }
  renderDates() {
    this._datesWrapperEl.innerHTML = `${this._dates.map((t) => `<li><button ${t.disabled ? "disabled" : ""} type="button" class="date-button ${this._helpers.getHolidayClass({ date: t.date, nowMonth: this._nowMonth })} ${this._nowDay == String(t.date) ? "active" : ""}">${t.date}</button></li>`).join("")}`;
  }
  setDate(t) {
    this._isSetted = !0;
    const r = t.target;
    this._dateButtons.forEach((a) => a.classList.remove("active")), this._nowDay = String(r.textContent), this._date = `${u(`${this._nowMonth}-${this._nowDay}`).format(this._systemFormat)}`, this.showValue(), r.classList.add("active");
  }
  prevMonth() {
    if (this._isExpanded)
      switch (this._expandedMode) {
        case "months":
          this._date = u(`${this._nowMonth}-${this._nowDay}`).subtract(1, "years").format(this._systemFormat);
          break;
        default:
          this._date = u(`${this._nowMonth}-${this._nowDay}`).subtract(10, "years").format(this._systemFormat), this.showYears();
          break;
      }
    else
      this._date = u(`${this._nowMonth}-${this._nowDay}`).subtract(1, "months").format(this._systemFormat);
    this.changeState();
  }
  nextMonth() {
    if (this._isExpanded)
      switch (this._expandedMode) {
        case "months":
          this._date = u(`${this._nowMonth}-${this._nowDay}`).add(1, "years").format(this._systemFormat);
          break;
        default:
          this._date = u(`${this._nowMonth}-${this._nowDay}`).add(10, "years").format(this._systemFormat), this.showYears();
          break;
      }
    else
      this._date = u(`${this._nowMonth}-${this._nowDay}`).add(1, "months").format(this._systemFormat);
    this.changeState();
  }
}
export {
  $u as default
};
