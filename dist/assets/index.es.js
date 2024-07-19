var Ha = Object.defineProperty;
var Ka = (n, e, t) => e in n ? Ha(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Qa = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var U = (n, e, t) => Ka(n, typeof e != "symbol" ? e + "" : e, t);
var Ll = Qa((Il, Ja) => {
  var wr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function Xa(n) {
    if (n.__esModule) return n;
    var e = n.default;
    if (typeof e == "function") {
      var t = function r() {
        return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
      };
      t.prototype = e.prototype;
    } else t = {};
    return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(n).forEach(function(r) {
      var i = Object.getOwnPropertyDescriptor(n, r);
      Object.defineProperty(t, r, i.get ? i : {
        enumerable: !0,
        get: function() {
          return n[r];
        }
      });
    }), t;
  }
  var Qi = {};
  function sn(n, e) {
    if (n == null) return {};
    var t, r, i = function(c, l) {
      if (c == null) return {};
      var u, h, p = {}, m = Object.keys(c);
      for (h = 0; h < m.length; h++) u = m[h], l.indexOf(u) >= 0 || (p[u] = c[u]);
      return p;
    }(n, e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(n);
      for (r = 0; r < a.length; r++) t = a[r], e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(n, t) && (i[t] = n[t]);
    }
    return i;
  }
  function le(n, e) {
    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  function F(n) {
    return F = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, F(n);
  }
  function Xi(n) {
    var e = function(t, r) {
      if (F(t) !== "object" || t === null) return t;
      var i = t[Symbol.toPrimitive];
      if (i !== void 0) {
        var a = i.call(t, r || "default");
        if (F(a) !== "object") return a;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(t);
    }(n, "string");
    return F(e) === "symbol" ? e : String(e);
  }
  function kr(n, e) {
    for (var t = 0; t < e.length; t++) {
      var r = e[t];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, Xi(r.key), r);
    }
  }
  function ue(n, e, t) {
    return e && kr(n.prototype, e), t && kr(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
  }
  function ge(n) {
    if (n === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n;
  }
  function ft(n, e) {
    return ft = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
      return t.__proto__ = r, t;
    }, ft(n, e);
  }
  function Xt(n, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    n.prototype = Object.create(e && e.prototype, { constructor: { value: n, writable: !0, configurable: !0 } }), Object.defineProperty(n, "prototype", { writable: !1 }), e && ft(n, e);
  }
  function Zt(n, e) {
    if (e && (F(e) === "object" || typeof e == "function")) return e;
    if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return ge(n);
  }
  function se(n) {
    return se = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    }, se(n);
  }
  function we(n, e, t) {
    return (e = Xi(e)) in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
  }
  function Tr(n, e, t, r, i, a, c) {
    try {
      var l = n[a](c), u = l.value;
    } catch (h) {
      return void t(h);
    }
    l.done ? e(u) : Promise.resolve(u).then(r, i);
  }
  function M(n) {
    return function() {
      var e = this, t = arguments;
      return new Promise(function(r, i) {
        var a = n.apply(e, t);
        function c(u) {
          Tr(a, r, i, c, l, "next", u);
        }
        function l(u) {
          Tr(a, r, i, c, l, "throw", u);
        }
        c(void 0);
      });
    };
  }
  function Cr(n, e) {
    (e == null || e > n.length) && (e = n.length);
    for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
    return r;
  }
  function Be(n, e) {
    return function(t) {
      if (Array.isArray(t)) return t;
    }(n) || function(t, r) {
      var i = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
      if (i != null) {
        var a, c, l, u, h = [], p = !0, m = !1;
        try {
          if (l = (i = i.call(t)).next, r === 0) {
            if (Object(i) !== i) return;
            p = !1;
          } else for (; !(p = (a = l.call(i)).done) && (h.push(a.value), h.length !== r); p = !0) ;
        } catch (_) {
          m = !0, c = _;
        } finally {
          try {
            if (!p && i.return != null && (u = i.return(), Object(u) !== u)) return;
          } finally {
            if (m) throw c;
          }
        }
        return h;
      }
    }(n, e) || function(t, r) {
      if (t) {
        if (typeof t == "string") return Cr(t, r);
        var i = Object.prototype.toString.call(t).slice(8, -1);
        return i === "Object" && t.constructor && (i = t.constructor.name), i === "Map" || i === "Set" ? Array.from(t) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Cr(t, r) : void 0;
      }
    }(n, e) || function() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  var Zi, be = {}, Za = { get exports() {
    return be;
  }, set exports(n) {
    be = n;
  } }, We = typeof Reflect == "object" ? Reflect : null, Mr = We && typeof We.apply == "function" ? We.apply : function(n, e, t) {
    return Function.prototype.apply.call(n, e, t);
  };
  Zi = We && typeof We.ownKeys == "function" ? We.ownKeys : Object.getOwnPropertySymbols ? function(n) {
    return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n));
  } : function(n) {
    return Object.getOwnPropertyNames(n);
  };
  var Ar = Number.isNaN || function(n) {
    return n != n;
  };
  function D() {
    D.init.call(this);
  }
  Za.exports = D, be.once = function(n, e) {
    return new Promise(function(t, r) {
      function i(c) {
        n.removeListener(e, a), r(c);
      }
      function a() {
        typeof n.removeListener == "function" && n.removeListener("error", i), t([].slice.call(arguments));
      }
      Nr(n, e, a, { once: !0 }), e !== "error" && function(c, l, u) {
        typeof c.on == "function" && Nr(c, "error", l, u);
      }(n, i, { once: !0 });
    });
  }, D.EventEmitter = D, D.prototype._events = void 0, D.prototype._eventsCount = 0, D.prototype._maxListeners = void 0;
  var Or = 10;
  function Dt(n) {
    if (typeof n != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
  }
  function eo(n) {
    return n._maxListeners === void 0 ? D.defaultMaxListeners : n._maxListeners;
  }
  function Lr(n, e, t, r) {
    var i, a, c, l;
    if (Dt(t), (a = n._events) === void 0 ? (a = n._events = /* @__PURE__ */ Object.create(null), n._eventsCount = 0) : (a.newListener !== void 0 && (n.emit("newListener", e, t.listener ? t.listener : t), a = n._events), c = a[e]), c === void 0) c = a[e] = t, ++n._eventsCount;
    else if (typeof c == "function" ? c = a[e] = r ? [t, c] : [c, t] : r ? c.unshift(t) : c.push(t), (i = eo(n)) > 0 && c.length > i && !c.warned) {
      c.warned = !0;
      var u = new Error("Possible EventEmitter memory leak detected. " + c.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      u.name = "MaxListenersExceededWarning", u.emitter = n, u.type = e, u.count = c.length, l = u, console && console.warn && console.warn(l);
    }
    return n;
  }
  function es() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function Pr(n, e, t) {
    var r = { fired: !1, wrapFn: void 0, target: n, type: e, listener: t }, i = es.bind(r);
    return i.listener = t, r.wrapFn = i, i;
  }
  function Ir(n, e, t) {
    var r = n._events;
    if (r === void 0) return [];
    var i = r[e];
    return i === void 0 ? [] : typeof i == "function" ? t ? [i.listener || i] : [i] : t ? function(a) {
      for (var c = new Array(a.length), l = 0; l < c.length; ++l) c[l] = a[l].listener || a[l];
      return c;
    }(i) : to(i, i.length);
  }
  function Dr(n) {
    var e = this._events;
    if (e !== void 0) {
      var t = e[n];
      if (typeof t == "function") return 1;
      if (t !== void 0) return t.length;
    }
    return 0;
  }
  function to(n, e) {
    for (var t = new Array(e), r = 0; r < e; ++r) t[r] = n[r];
    return t;
  }
  function Nr(n, e, t, r) {
    if (typeof n.on == "function") r.once ? n.once(e, t) : n.on(e, t);
    else {
      if (typeof n.addEventListener != "function") throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof n);
      n.addEventListener(e, function i(a) {
        r.once && n.removeEventListener(e, i), t(a);
      });
    }
  }
  Object.defineProperty(D, "defaultMaxListeners", { enumerable: !0, get: function() {
    return Or;
  }, set: function(n) {
    if (typeof n != "number" || n < 0 || Ar(n)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + n + ".");
    Or = n;
  } }), D.init = function() {
    this._events !== void 0 && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, D.prototype.setMaxListeners = function(n) {
    if (typeof n != "number" || n < 0 || Ar(n)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
    return this._maxListeners = n, this;
  }, D.prototype.getMaxListeners = function() {
    return eo(this);
  }, D.prototype.emit = function(n) {
    for (var e = [], t = 1; t < arguments.length; t++) e.push(arguments[t]);
    var r = n === "error", i = this._events;
    if (i !== void 0) r = r && i.error === void 0;
    else if (!r) return !1;
    if (r) {
      var a;
      if (e.length > 0 && (a = e[0]), a instanceof Error) throw a;
      var c = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
      throw c.context = a, c;
    }
    var l = i[n];
    if (l === void 0) return !1;
    if (typeof l == "function") Mr(l, this, e);
    else {
      var u = l.length, h = to(l, u);
      for (t = 0; t < u; ++t) Mr(h[t], this, e);
    }
    return !0;
  }, D.prototype.addListener = function(n, e) {
    return Lr(this, n, e, !1);
  }, D.prototype.on = D.prototype.addListener, D.prototype.prependListener = function(n, e) {
    return Lr(this, n, e, !0);
  }, D.prototype.once = function(n, e) {
    return Dt(e), this.on(n, Pr(this, n, e)), this;
  }, D.prototype.prependOnceListener = function(n, e) {
    return Dt(e), this.prependListener(n, Pr(this, n, e)), this;
  }, D.prototype.removeListener = function(n, e) {
    var t, r, i, a, c;
    if (Dt(e), (r = this._events) === void 0) return this;
    if ((t = r[n]) === void 0) return this;
    if (t === e || t.listener === e) --this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete r[n], r.removeListener && this.emit("removeListener", n, t.listener || e));
    else if (typeof t != "function") {
      for (i = -1, a = t.length - 1; a >= 0; a--) if (t[a] === e || t[a].listener === e) {
        c = t[a].listener, i = a;
        break;
      }
      if (i < 0) return this;
      i === 0 ? t.shift() : function(l, u) {
        for (; u + 1 < l.length; u++) l[u] = l[u + 1];
        l.pop();
      }(t, i), t.length === 1 && (r[n] = t[0]), r.removeListener !== void 0 && this.emit("removeListener", n, c || e);
    }
    return this;
  }, D.prototype.off = D.prototype.removeListener, D.prototype.removeAllListeners = function(n) {
    var e, t, r;
    if ((t = this._events) === void 0) return this;
    if (t.removeListener === void 0) return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : t[n] !== void 0 && (--this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete t[n]), this;
    if (arguments.length === 0) {
      var i, a = Object.keys(t);
      for (r = 0; r < a.length; ++r) (i = a[r]) !== "removeListener" && this.removeAllListeners(i);
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (typeof (e = t[n]) == "function") this.removeListener(n, e);
    else if (e !== void 0) for (r = e.length - 1; r >= 0; r--) this.removeListener(n, e[r]);
    return this;
  }, D.prototype.listeners = function(n) {
    return Ir(this, n, !0);
  }, D.prototype.rawListeners = function(n) {
    return Ir(this, n, !1);
  }, D.listenerCount = function(n, e) {
    return typeof n.listenerCount == "function" ? n.listenerCount(e) : Dr.call(n, e);
  }, D.prototype.listenerCount = Dr, D.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Zi(this._events) : [];
  };
  var Rr = Object.prototype.hasOwnProperty;
  function xr(n, e, t) {
    for (t of n.keys()) if (Z(t, e)) return t;
  }
  function Z(n, e) {
    var t, r, i;
    if (n === e) return !0;
    if (n && e && (t = n.constructor) === e.constructor) {
      if (t === Date) return n.getTime() === e.getTime();
      if (t === RegExp) return n.toString() === e.toString();
      if (t === Array) {
        if ((r = n.length) === e.length) for (; r-- && Z(n[r], e[r]); ) ;
        return r === -1;
      }
      if (t === Set) {
        if (n.size !== e.size) return !1;
        for (r of n)
          if ((i = r) && typeof i == "object" && !(i = xr(e, i)) || !e.has(i)) return !1;
        return !0;
      }
      if (t === Map) {
        if (n.size !== e.size) return !1;
        for (r of n)
          if ((i = r[0]) && typeof i == "object" && !(i = xr(e, i)) || !Z(r[1], e.get(i))) return !1;
        return !0;
      }
      if (t === ArrayBuffer) n = new Uint8Array(n), e = new Uint8Array(e);
      else if (t === DataView) {
        if ((r = n.byteLength) === e.byteLength) for (; r-- && n.getInt8(r) === e.getInt8(r); ) ;
        return r === -1;
      }
      if (ArrayBuffer.isView(n)) {
        if ((r = n.byteLength) === e.byteLength) for (; r-- && n[r] === e[r]; ) ;
        return r === -1;
      }
      if (!t || typeof n == "object") {
        for (t in r = 0, n)
          if (Rr.call(n, t) && ++r && !Rr.call(e, t) || !(t in e) || !Z(n[t], e[t])) return !1;
        return Object.keys(e).length === r;
      }
    }
    return n != n && e != e;
  }
  const ts = { "Amazon Silk": "amazon_silk", "Android Browser": "android", Bada: "bada", BlackBerry: "blackberry", Chrome: "chrome", Chromium: "chromium", Electron: "electron", Epiphany: "epiphany", Firefox: "firefox", Focus: "focus", Generic: "generic", "Google Search": "google_search", Googlebot: "googlebot", "Internet Explorer": "ie", "K-Meleon": "k_meleon", Maxthon: "maxthon", "Microsoft Edge": "edge", "MZ Browser": "mz", "NAVER Whale Browser": "naver", Opera: "opera", "Opera Coast": "opera_coast", PhantomJS: "phantomjs", Puffin: "puffin", QupZilla: "qupzilla", QQ: "qq", QQLite: "qqlite", Safari: "safari", Sailfish: "sailfish", "Samsung Internet for Android": "samsung_internet", SeaMonkey: "seamonkey", Sleipnir: "sleipnir", Swing: "swing", Tizen: "tizen", "UC Browser": "uc", Vivaldi: "vivaldi", "WebOS Browser": "webos", WeChat: "wechat", "Yandex Browser": "yandex", Roku: "roku" }, no = { amazon_silk: "Amazon Silk", android: "Android Browser", bada: "Bada", blackberry: "BlackBerry", chrome: "Chrome", chromium: "Chromium", electron: "Electron", epiphany: "Epiphany", firefox: "Firefox", focus: "Focus", generic: "Generic", googlebot: "Googlebot", google_search: "Google Search", ie: "Internet Explorer", k_meleon: "K-Meleon", maxthon: "Maxthon", edge: "Microsoft Edge", mz: "MZ Browser", naver: "NAVER Whale Browser", opera: "Opera", opera_coast: "Opera Coast", phantomjs: "PhantomJS", puffin: "Puffin", qupzilla: "QupZilla", qq: "QQ Browser", qqlite: "QQ Browser Lite", safari: "Safari", sailfish: "Sailfish", samsung_internet: "Samsung Internet for Android", seamonkey: "SeaMonkey", sleipnir: "Sleipnir", swing: "Swing", tizen: "Tizen", uc: "UC Browser", vivaldi: "Vivaldi", webos: "WebOS Browser", wechat: "WeChat", yandex: "Yandex Browser" }, G = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" }, Q = { WindowsPhone: "Windows Phone", Windows: "Windows", MacOS: "macOS", iOS: "iOS", Android: "Android", WebOS: "WebOS", BlackBerry: "BlackBerry", Bada: "Bada", Tizen: "Tizen", Linux: "Linux", ChromeOS: "Chrome OS", PlayStation4: "PlayStation 4", Roku: "Roku" }, Ee = { EdgeHTML: "EdgeHTML", Blink: "Blink", Trident: "Trident", Presto: "Presto", Gecko: "Gecko", WebKit: "WebKit" };
  class y {
    static getFirstMatch(e, t) {
      const r = t.match(e);
      return r && r.length > 0 && r[1] || "";
    }
    static getSecondMatch(e, t) {
      const r = t.match(e);
      return r && r.length > 1 && r[2] || "";
    }
    static matchAndReturnConst(e, t, r) {
      if (e.test(t)) return r;
    }
    static getWindowsVersionName(e) {
      switch (e) {
        case "NT":
          return "NT";
        case "XP":
        case "NT 5.1":
          return "XP";
        case "NT 5.0":
          return "2000";
        case "NT 5.2":
          return "2003";
        case "NT 6.0":
          return "Vista";
        case "NT 6.1":
          return "7";
        case "NT 6.2":
          return "8";
        case "NT 6.3":
          return "8.1";
        case "NT 10.0":
          return "10";
        default:
          return;
      }
    }
    static getMacOSVersionName(e) {
      const t = e.split(".").splice(0, 2).map((r) => parseInt(r, 10) || 0);
      if (t.push(0), t[0] === 10) switch (t[1]) {
        case 5:
          return "Leopard";
        case 6:
          return "Snow Leopard";
        case 7:
          return "Lion";
        case 8:
          return "Mountain Lion";
        case 9:
          return "Mavericks";
        case 10:
          return "Yosemite";
        case 11:
          return "El Capitan";
        case 12:
          return "Sierra";
        case 13:
          return "High Sierra";
        case 14:
          return "Mojave";
        case 15:
          return "Catalina";
        default:
          return;
      }
    }
    static getAndroidVersionName(e) {
      const t = e.split(".").splice(0, 2).map((r) => parseInt(r, 10) || 0);
      if (t.push(0), !(t[0] === 1 && t[1] < 5)) return t[0] === 1 && t[1] < 6 ? "Cupcake" : t[0] === 1 && t[1] >= 6 ? "Donut" : t[0] === 2 && t[1] < 2 ? "Eclair" : t[0] === 2 && t[1] === 2 ? "Froyo" : t[0] === 2 && t[1] > 2 ? "Gingerbread" : t[0] === 3 ? "Honeycomb" : t[0] === 4 && t[1] < 1 ? "Ice Cream Sandwich" : t[0] === 4 && t[1] < 4 ? "Jelly Bean" : t[0] === 4 && t[1] >= 4 ? "KitKat" : t[0] === 5 ? "Lollipop" : t[0] === 6 ? "Marshmallow" : t[0] === 7 ? "Nougat" : t[0] === 8 ? "Oreo" : t[0] === 9 ? "Pie" : void 0;
    }
    static getVersionPrecision(e) {
      return e.split(".").length;
    }
    static compareVersions(e, t, r = !1) {
      const i = y.getVersionPrecision(e), a = y.getVersionPrecision(t);
      let c = Math.max(i, a), l = 0;
      const u = y.map([e, t], (h) => {
        const p = c - y.getVersionPrecision(h), m = h + new Array(p + 1).join(".0");
        return y.map(m.split("."), (_) => new Array(20 - _.length).join("0") + _).reverse();
      });
      for (r && (l = c - Math.min(i, a)), c -= 1; c >= l; ) {
        if (u[0][c] > u[1][c]) return 1;
        if (u[0][c] === u[1][c]) {
          if (c === l) return 0;
          c -= 1;
        } else if (u[0][c] < u[1][c]) return -1;
      }
    }
    static map(e, t) {
      const r = [];
      let i;
      if (Array.prototype.map) return Array.prototype.map.call(e, t);
      for (i = 0; i < e.length; i += 1) r.push(t(e[i]));
      return r;
    }
    static find(e, t) {
      let r, i;
      if (Array.prototype.find) return Array.prototype.find.call(e, t);
      for (r = 0, i = e.length; r < i; r += 1) {
        const a = e[r];
        if (t(a, r)) return a;
      }
    }
    static assign(e, ...t) {
      const r = e;
      let i, a;
      if (Object.assign) return Object.assign(e, ...t);
      for (i = 0, a = t.length; i < a; i += 1) {
        const c = t[i];
        typeof c == "object" && c !== null && Object.keys(c).forEach((l) => {
          r[l] = c[l];
        });
      }
      return e;
    }
    static getBrowserAlias(e) {
      return ts[e];
    }
    static getBrowserTypeByAlias(e) {
      return no[e] || "";
    }
  }
  const x = /version\/(\d+(\.?_?\d+)+)/i, ns = [{ test: [/googlebot/i], describe(n) {
    const e = { name: "Googlebot" }, t = y.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, n) || y.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/opera/i], describe(n) {
    const e = { name: "Opera" }, t = y.getFirstMatch(x, n) || y.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/opr\/|opios/i], describe(n) {
    const e = { name: "Opera" }, t = y.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, n) || y.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/SamsungBrowser/i], describe(n) {
    const e = { name: "Samsung Internet for Android" }, t = y.getFirstMatch(x, n) || y.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/Whale/i], describe(n) {
    const e = { name: "NAVER Whale Browser" }, t = y.getFirstMatch(x, n) || y.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/MZBrowser/i], describe(n) {
    const e = { name: "MZ Browser" }, t = y.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, n) || y.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/focus/i], describe(n) {
    const e = { name: "Focus" }, t = y.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, n) || y.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/swing/i], describe(n) {
    const e = { name: "Swing" }, t = y.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, n) || y.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/coast/i], describe(n) {
    const e = { name: "Opera Coast" }, t = y.getFirstMatch(x, n) || y.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/opt\/\d+(?:.?_?\d+)+/i], describe(n) {
    const e = { name: "Opera Touch" }, t = y.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, n) || y.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/yabrowser/i], describe(n) {
    const e = { name: "Yandex Browser" }, t = y.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, n) || y.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/ucbrowser/i], describe(n) {
    const e = { name: "UC Browser" }, t = y.getFirstMatch(x, n) || y.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/Maxthon|mxios/i], describe(n) {
    const e = { name: "Maxthon" }, t = y.getFirstMatch(x, n) || y.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/epiphany/i], describe(n) {
    const e = { name: "Epiphany" }, t = y.getFirstMatch(x, n) || y.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/puffin/i], describe(n) {
    const e = { name: "Puffin" }, t = y.getFirstMatch(x, n) || y.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/sleipnir/i], describe(n) {
    const e = { name: "Sleipnir" }, t = y.getFirstMatch(x, n) || y.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/k-meleon/i], describe(n) {
    const e = { name: "K-Meleon" }, t = y.getFirstMatch(x, n) || y.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/micromessenger/i], describe(n) {
    const e = { name: "WeChat" }, t = y.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, n) || y.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/qqbrowser/i], describe(n) {
    const e = { name: /qqbrowserlite/i.test(n) ? "QQ Browser Lite" : "QQ Browser" }, t = y.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, n) || y.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/msie|trident/i], describe(n) {
    const e = { name: "Internet Explorer" }, t = y.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/\sedg\//i], describe(n) {
    const e = { name: "Microsoft Edge" }, t = y.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/edg([ea]|ios)/i], describe(n) {
    const e = { name: "Microsoft Edge" }, t = y.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/vivaldi/i], describe(n) {
    const e = { name: "Vivaldi" }, t = y.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/seamonkey/i], describe(n) {
    const e = { name: "SeaMonkey" }, t = y.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/sailfish/i], describe(n) {
    const e = { name: "Sailfish" }, t = y.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/silk/i], describe(n) {
    const e = { name: "Amazon Silk" }, t = y.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/phantom/i], describe(n) {
    const e = { name: "PhantomJS" }, t = y.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/slimerjs/i], describe(n) {
    const e = { name: "SlimerJS" }, t = y.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe(n) {
    const e = { name: "BlackBerry" }, t = y.getFirstMatch(x, n) || y.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/(web|hpw)[o0]s/i], describe(n) {
    const e = { name: "WebOS Browser" }, t = y.getFirstMatch(x, n) || y.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/bada/i], describe(n) {
    const e = { name: "Bada" }, t = y.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/tizen/i], describe(n) {
    const e = { name: "Tizen" }, t = y.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, n) || y.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/qupzilla/i], describe(n) {
    const e = { name: "QupZilla" }, t = y.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, n) || y.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/firefox|iceweasel|fxios/i], describe(n) {
    const e = { name: "Firefox" }, t = y.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/electron/i], describe(n) {
    const e = { name: "Electron" }, t = y.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/MiuiBrowser/i], describe(n) {
    const e = { name: "Miui" }, t = y.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/chromium/i], describe(n) {
    const e = { name: "Chromium" }, t = y.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, n) || y.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/chrome|crios|crmo/i], describe(n) {
    const e = { name: "Chrome" }, t = y.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/GSA/i], describe(n) {
    const e = { name: "Google Search" }, t = y.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test(n) {
    const e = !n.test(/like android/i), t = n.test(/android/i);
    return e && t;
  }, describe(n) {
    const e = { name: "Android Browser" }, t = y.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/playstation 4/i], describe(n) {
    const e = { name: "PlayStation 4" }, t = y.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/safari|applewebkit/i], describe(n) {
    const e = { name: "Safari" }, t = y.getFirstMatch(x, n);
    return t && (e.version = t), e;
  } }, { test: [/.*/i], describe(n) {
    const e = n.search("\\(") !== -1 ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
    return { name: y.getFirstMatch(e, n), version: y.getSecondMatch(e, n) };
  } }];
  var rs = [{ test: [/Roku\/DVP/], describe(n) {
    const e = y.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, n);
    return { name: Q.Roku, version: e };
  } }, { test: [/windows phone/i], describe(n) {
    const e = y.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, n);
    return { name: Q.WindowsPhone, version: e };
  } }, { test: [/windows /i], describe(n) {
    const e = y.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, n), t = y.getWindowsVersionName(e);
    return { name: Q.Windows, version: e, versionName: t };
  } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe(n) {
    const e = { name: Q.iOS }, t = y.getSecondMatch(/(Version\/)(\d[\d.]+)/, n);
    return t && (e.version = t), e;
  } }, { test: [/macintosh/i], describe(n) {
    const e = y.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, n).replace(/[_\s]/g, "."), t = y.getMacOSVersionName(e), r = { name: Q.MacOS, version: e };
    return t && (r.versionName = t), r;
  } }, { test: [/(ipod|iphone|ipad)/i], describe(n) {
    const e = y.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, n).replace(/[_\s]/g, ".");
    return { name: Q.iOS, version: e };
  } }, { test(n) {
    const e = !n.test(/like android/i), t = n.test(/android/i);
    return e && t;
  }, describe(n) {
    const e = y.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, n), t = y.getAndroidVersionName(e), r = { name: Q.Android, version: e };
    return t && (r.versionName = t), r;
  } }, { test: [/(web|hpw)[o0]s/i], describe(n) {
    const e = y.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, n), t = { name: Q.WebOS };
    return e && e.length && (t.version = e), t;
  } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe(n) {
    const e = y.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, n) || y.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, n) || y.getFirstMatch(/\bbb(\d+)/i, n);
    return { name: Q.BlackBerry, version: e };
  } }, { test: [/bada/i], describe(n) {
    const e = y.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, n);
    return { name: Q.Bada, version: e };
  } }, { test: [/tizen/i], describe(n) {
    const e = y.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, n);
    return { name: Q.Tizen, version: e };
  } }, { test: [/linux/i], describe: () => ({ name: Q.Linux }) }, { test: [/CrOS/], describe: () => ({ name: Q.ChromeOS }) }, { test: [/PlayStation 4/], describe(n) {
    const e = y.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, n);
    return { name: Q.PlayStation4, version: e };
  } }], is = [{ test: [/googlebot/i], describe: () => ({ type: "bot", vendor: "Google" }) }, { test: [/huawei/i], describe(n) {
    const e = y.getFirstMatch(/(can-l01)/i, n) && "Nova", t = { type: G.mobile, vendor: "Huawei" };
    return e && (t.model = e), t;
  } }, { test: [/nexus\s*(?:7|8|9|10).*/i], describe: () => ({ type: G.tablet, vendor: "Nexus" }) }, { test: [/ipad/i], describe: () => ({ type: G.tablet, vendor: "Apple", model: "iPad" }) }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: () => ({ type: G.tablet, vendor: "Apple", model: "iPad" }) }, { test: [/kftt build/i], describe: () => ({ type: G.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" }) }, { test: [/silk/i], describe: () => ({ type: G.tablet, vendor: "Amazon" }) }, { test: [/tablet(?! pc)/i], describe: () => ({ type: G.tablet }) }, { test(n) {
    const e = n.test(/ipod|iphone/i), t = n.test(/like (ipod|iphone)/i);
    return e && !t;
  }, describe(n) {
    const e = y.getFirstMatch(/(ipod|iphone)/i, n);
    return { type: G.mobile, vendor: "Apple", model: e };
  } }, { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: () => ({ type: G.mobile, vendor: "Nexus" }) }, { test: [/[^-]mobi/i], describe: () => ({ type: G.mobile }) }, { test: (n) => n.getBrowserName(!0) === "blackberry", describe: () => ({ type: G.mobile, vendor: "BlackBerry" }) }, { test: (n) => n.getBrowserName(!0) === "bada", describe: () => ({ type: G.mobile }) }, { test: (n) => n.getBrowserName() === "windows phone", describe: () => ({ type: G.mobile, vendor: "Microsoft" }) }, { test(n) {
    const e = Number(String(n.getOSVersion()).split(".")[0]);
    return n.getOSName(!0) === "android" && e >= 3;
  }, describe: () => ({ type: G.tablet }) }, { test: (n) => n.getOSName(!0) === "android", describe: () => ({ type: G.mobile }) }, { test: (n) => n.getOSName(!0) === "macos", describe: () => ({ type: G.desktop, vendor: "Apple" }) }, { test: (n) => n.getOSName(!0) === "windows", describe: () => ({ type: G.desktop }) }, { test: (n) => n.getOSName(!0) === "linux", describe: () => ({ type: G.desktop }) }, { test: (n) => n.getOSName(!0) === "playstation 4", describe: () => ({ type: G.tv }) }, { test: (n) => n.getOSName(!0) === "roku", describe: () => ({ type: G.tv }) }], os = [{ test: (n) => n.getBrowserName(!0) === "microsoft edge", describe(n) {
    if (/\sedg\//i.test(n)) return { name: Ee.Blink };
    const e = y.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, n);
    return { name: Ee.EdgeHTML, version: e };
  } }, { test: [/trident/i], describe(n) {
    const e = { name: Ee.Trident }, t = y.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: (n) => n.test(/presto/i), describe(n) {
    const e = { name: Ee.Presto }, t = y.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test(n) {
    const e = n.test(/gecko/i), t = n.test(/like gecko/i);
    return e && !t;
  }, describe(n) {
    const e = { name: Ee.Gecko }, t = y.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }, { test: [/(apple)?webkit\/537\.36/i], describe: () => ({ name: Ee.Blink }) }, { test: [/(apple)?webkit/i], describe(n) {
    const e = { name: Ee.WebKit }, t = y.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, n);
    return t && (e.version = t), e;
  } }];
  class jr {
    constructor(e, t = !1) {
      if (e == null || e === "") throw new Error("UserAgent parameter can't be empty");
      this._ua = e, this.parsedResult = {}, t !== !0 && this.parse();
    }
    getUA() {
      return this._ua;
    }
    test(e) {
      return e.test(this._ua);
    }
    parseBrowser() {
      this.parsedResult.browser = {};
      const e = y.find(ns, (t) => {
        if (typeof t.test == "function") return t.test(this);
        if (t.test instanceof Array) return t.test.some((r) => this.test(r));
        throw new Error("Browser's test function is not valid");
      });
      return e && (this.parsedResult.browser = e.describe(this.getUA())), this.parsedResult.browser;
    }
    getBrowser() {
      return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
    }
    getBrowserName(e) {
      return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
    }
    getBrowserVersion() {
      return this.getBrowser().version;
    }
    getOS() {
      return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
    }
    parseOS() {
      this.parsedResult.os = {};
      const e = y.find(rs, (t) => {
        if (typeof t.test == "function") return t.test(this);
        if (t.test instanceof Array) return t.test.some((r) => this.test(r));
        throw new Error("Browser's test function is not valid");
      });
      return e && (this.parsedResult.os = e.describe(this.getUA())), this.parsedResult.os;
    }
    getOSName(e) {
      const { name: t } = this.getOS();
      return e ? String(t).toLowerCase() || "" : t || "";
    }
    getOSVersion() {
      return this.getOS().version;
    }
    getPlatform() {
      return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
    }
    getPlatformType(e = !1) {
      const { type: t } = this.getPlatform();
      return e ? String(t).toLowerCase() || "" : t || "";
    }
    parsePlatform() {
      this.parsedResult.platform = {};
      const e = y.find(is, (t) => {
        if (typeof t.test == "function") return t.test(this);
        if (t.test instanceof Array) return t.test.some((r) => this.test(r));
        throw new Error("Browser's test function is not valid");
      });
      return e && (this.parsedResult.platform = e.describe(this.getUA())), this.parsedResult.platform;
    }
    getEngine() {
      return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
    }
    getEngineName(e) {
      return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
    }
    parseEngine() {
      this.parsedResult.engine = {};
      const e = y.find(os, (t) => {
        if (typeof t.test == "function") return t.test(this);
        if (t.test instanceof Array) return t.test.some((r) => this.test(r));
        throw new Error("Browser's test function is not valid");
      });
      return e && (this.parsedResult.engine = e.describe(this.getUA())), this.parsedResult.engine;
    }
    parse() {
      return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
    }
    getResult() {
      return y.assign({}, this.parsedResult);
    }
    satisfies(e) {
      const t = {};
      let r = 0;
      const i = {};
      let a = 0;
      if (Object.keys(e).forEach((c) => {
        const l = e[c];
        typeof l == "string" ? (i[c] = l, a += 1) : typeof l == "object" && (t[c] = l, r += 1);
      }), r > 0) {
        const c = Object.keys(t), l = y.find(c, (h) => this.isOS(h));
        if (l) {
          const h = this.satisfies(t[l]);
          if (h !== void 0) return h;
        }
        const u = y.find(c, (h) => this.isPlatform(h));
        if (u) {
          const h = this.satisfies(t[u]);
          if (h !== void 0) return h;
        }
      }
      if (a > 0) {
        const c = Object.keys(i), l = y.find(c, (u) => this.isBrowser(u, !0));
        if (l !== void 0) return this.compareVersion(i[l]);
      }
    }
    isBrowser(e, t = !1) {
      const r = this.getBrowserName().toLowerCase();
      let i = e.toLowerCase();
      const a = y.getBrowserTypeByAlias(i);
      return t && a && (i = a.toLowerCase()), i === r;
    }
    compareVersion(e) {
      let t = [0], r = e, i = !1;
      const a = this.getBrowserVersion();
      if (typeof a == "string") return e[0] === ">" || e[0] === "<" ? (r = e.substr(1), e[1] === "=" ? (i = !0, r = e.substr(2)) : t = [], e[0] === ">" ? t.push(1) : t.push(-1)) : e[0] === "=" ? r = e.substr(1) : e[0] === "~" && (i = !0, r = e.substr(1)), t.indexOf(y.compareVersions(a, r, i)) > -1;
    }
    isOS(e) {
      return this.getOSName(!0) === String(e).toLowerCase();
    }
    isPlatform(e) {
      return this.getPlatformType(!0) === String(e).toLowerCase();
    }
    isEngine(e) {
      return this.getEngineName(!0) === String(e).toLowerCase();
    }
    is(e, t = !1) {
      return this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e);
    }
    some(e = []) {
      return e.some((t) => this.is(t));
    }
  }
  /*!
   * Bowser - a browser detector
   * https://github.com/lancedikson/bowser
   * MIT License | (c) Dustin Diaz 2012-2015
   * MIT License | (c) Denis Demchenko 2015-2019
   */
  class as {
    static getParser(e, t = !1) {
      if (typeof e != "string") throw new Error("UserAgent should be a string");
      return new jr(e, t);
    }
    static parse(e) {
      return new jr(e).getResult();
    }
    static get BROWSER_MAP() {
      return no;
    }
    static get ENGINE_MAP() {
      return Ee;
    }
    static get OS_MAP() {
      return Q;
    }
    static get PLATFORMS_MAP() {
      return G;
    }
  }
  function en() {
    return Date.now() + Math.random().toString();
  }
  function at() {
    throw new Error("Method must be implemented in subclass");
  }
  function ro(n, e) {
    return e != null && e.proxyUrl ? e.proxyUrl + (e.proxyUrl.slice(-1) === "/" ? "" : "/") + n.substring(8) : n;
  }
  function $t(n) {
    return n != null && n.callObjectBundleUrlOverride ? n.callObjectBundleUrlOverride : ro("https://c.daily.co/call-machine/versioned/".concat("0.66.0", "/static/call-machine-object-bundle.js"), n);
  }
  function mt(n) {
    try {
      new URL(n);
    } catch {
      return !1;
    }
    return !0;
  }
  const io = Object.prototype.toString;
  function oo(n) {
    switch (io.call(n)) {
      case "[object Error]":
      case "[object Exception]":
      case "[object DOMException]":
        return !0;
      default:
        return Ve(n, Error);
    }
  }
  function it(n, e) {
    return io.call(n) === `[object ${e}]`;
  }
  function Hn(n) {
    return it(n, "ErrorEvent");
  }
  function Fr(n) {
    return it(n, "DOMError");
  }
  function Ue(n) {
    return it(n, "String");
  }
  function ao(n) {
    return n === null || typeof n != "object" && typeof n != "function";
  }
  function tt(n) {
    return it(n, "Object");
  }
  function Gt(n) {
    return typeof Event < "u" && Ve(n, Event);
  }
  function Kn(n) {
    return !!(n && n.then && typeof n.then == "function");
  }
  function Ve(n, e) {
    try {
      return n instanceof e;
    } catch {
      return !1;
    }
  }
  function ze(n, e = 0) {
    return typeof n != "string" || e === 0 || n.length <= e ? n : `${n.slice(0, e)}...`;
  }
  function Br(n, e) {
    if (!Array.isArray(n)) return "";
    const t = [];
    for (let r = 0; r < n.length; r++) {
      const i = n[r];
      try {
        t.push(String(i));
      } catch {
        t.push("[value cannot be serialized]");
      }
    }
    return t.join(e);
  }
  function ss(n, e, t = !1) {
    return !!Ue(n) && (it(e, "RegExp") ? e.test(n) : !!Ue(e) && (t ? n === e : n.includes(e)));
  }
  function wt(n, e = [], t = !1) {
    return e.some((r) => ss(n, r, t));
  }
  function cs(n, e, t = 250, r, i, a, c) {
    if (!(a.exception && a.exception.values && c && Ve(c.originalException, Error))) return;
    const l = a.exception.values.length > 0 ? a.exception.values[a.exception.values.length - 1] : void 0;
    var u, h;
    l && (a.exception.values = (u = Sn(n, e, i, c.originalException, r, a.exception.values, l, 0), h = t, u.map((p) => (p.value && (p.value = ze(p.value, h)), p))));
  }
  function Sn(n, e, t, r, i, a, c, l) {
    if (a.length >= t + 1) return a;
    let u = [...a];
    if (Ve(r[i], Error)) {
      Ur(c, l);
      const h = n(e, r[i]), p = u.length;
      Vr(h, i, p, l), u = Sn(n, e, t, r[i], i, [h, ...u], h, p);
    }
    return Array.isArray(r.errors) && r.errors.forEach((h, p) => {
      if (Ve(h, Error)) {
        Ur(c, l);
        const m = n(e, h), _ = u.length;
        Vr(m, `errors[${p}]`, _, l), u = Sn(n, e, t, h, i, [m, ...u], m, _);
      }
    }), u;
  }
  function Ur(n, e) {
    n.mechanism = n.mechanism || { type: "generic", handled: !0 }, n.mechanism = { ...n.mechanism, is_exception_group: !0, exception_id: e };
  }
  function Vr(n, e, t, r) {
    n.mechanism = n.mechanism || { type: "generic", handled: !0 }, n.mechanism = { ...n.mechanism, type: "chained", source: e, exception_id: t, parent_id: r };
  }
  function kt(n) {
    return n && n.Math == Math ? n : void 0;
  }
  const ie = typeof globalThis == "object" && kt(globalThis) || typeof window == "object" && kt(window) || typeof self == "object" && kt(self) || typeof global == "object" && kt(global) || /* @__PURE__ */ function() {
    return this;
  }() || {};
  function St() {
    return ie;
  }
  function Qn(n, e, t) {
    const r = t || ie, i = r.__SENTRY__ = r.__SENTRY__ || {};
    return i[n] || (i[n] = e());
  }
  const ls = St(), us = 80;
  function En(n, e = {}) {
    try {
      let t = n;
      const r = 5, i = [];
      let a = 0, c = 0;
      const l = " > ", u = l.length;
      let h;
      const p = Array.isArray(e) ? e : e.keyAttrs, m = !Array.isArray(e) && e.maxStringLength || us;
      for (; t && a++ < r && (h = ds(t, p), !(h === "html" || a > 1 && c + i.length * u + h.length >= m)); ) i.push(h), c += h.length, t = t.parentNode;
      return i.reverse().join(l);
    } catch {
      return "<unknown>";
    }
  }
  function ds(n, e) {
    const t = n, r = [];
    let i, a, c, l, u;
    if (!t || !t.tagName) return "";
    r.push(t.tagName.toLowerCase());
    const h = e && e.length ? e.filter((m) => t.getAttribute(m)).map((m) => [m, t.getAttribute(m)]) : null;
    if (h && h.length) h.forEach((m) => {
      r.push(`[${m[0]}="${m[1]}"]`);
    });
    else if (t.id && r.push(`#${t.id}`), i = t.className, i && Ue(i)) for (a = i.split(/\s+/), u = 0; u < a.length; u++) r.push(`.${a[u]}`);
    const p = ["aria-label", "type", "name", "title", "alt"];
    for (u = 0; u < p.length; u++) c = p[u], l = t.getAttribute(c), l && r.push(`[${c}="${l}"]`);
    return r.join("");
  }
  const qt = ["debug", "info", "warn", "error", "log", "assert", "trace"];
  function so(n) {
    if (!("console" in ie)) return n();
    const e = ie.console, t = {};
    qt.forEach((r) => {
      const i = e[r] && e[r].__sentry_original__;
      r in e && i && (t[r] = e[r], e[r] = i);
    });
    try {
      return n();
    } finally {
      Object.keys(t).forEach((r) => {
        e[r] = t[r];
      });
    }
  }
  function Yr() {
    let n = !1;
    const e = { enable: () => {
      n = !0;
    }, disable: () => {
      n = !1;
    } };
    return typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? qt.forEach((t) => {
      e[t] = (...r) => {
        n && so(() => {
          ie.console[t](`Sentry Logger [${t}]:`, ...r);
        });
      };
    }) : qt.forEach((t) => {
      e[t] = () => {
      };
    }), e;
  }
  let L;
  L = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? Qn("logger", Yr) : Yr();
  const hs = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
  function Jt(n, e = !1) {
    const { host: t, path: r, pass: i, port: a, projectId: c, protocol: l, publicKey: u } = n;
    return `${l}://${u}${e && i ? `:${i}` : ""}@${t}${a ? `:${a}` : ""}/${r && `${r}/`}${c}`;
  }
  function $r(n) {
    return { protocol: n.protocol, publicKey: n.publicKey || "", pass: n.pass || "", host: n.host, port: n.port || "", path: n.path || "", projectId: n.projectId };
  }
  function ps(n) {
    const e = typeof n == "string" ? function(t) {
      const r = hs.exec(t);
      if (!r) return void console.error(`Invalid Sentry Dsn: ${t}`);
      const [i, a, c = "", l, u = "", h] = r.slice(1);
      let p = "", m = h;
      const _ = m.split("/");
      if (_.length > 1 && (p = _.slice(0, -1).join("/"), m = _.pop()), m) {
        const S = m.match(/^\d+/);
        S && (m = S[0]);
      }
      return $r({ host: l, pass: c, path: p, projectId: m, port: u, protocol: i, publicKey: a });
    }(n) : $r(n);
    if (e && function(t) {
      if (typeof __SENTRY_DEBUG__ < "u" && !__SENTRY_DEBUG__) return !0;
      const { port: r, projectId: i, protocol: a } = t;
      return !(["protocol", "publicKey", "host", "projectId"].find((c) => !t[c] && (L.error(`Invalid Sentry Dsn: ${c} missing`), !0)) || (i.match(/^\d+$/) ? /* @__PURE__ */ function(c) {
        return c === "http" || c === "https";
      }(a) ? r && isNaN(parseInt(r, 10)) && (L.error(`Invalid Sentry Dsn: Invalid port ${r}`), 1) : (L.error(`Invalid Sentry Dsn: Invalid protocol ${a}`), 1) : (L.error(`Invalid Sentry Dsn: Invalid projectId ${i}`), 1)));
    }(e)) return e;
  }
  class ae extends Error {
    constructor(e, t = "warn") {
      super(e), this.message = e, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = t;
    }
  }
  function W(n, e, t) {
    if (!(e in n)) return;
    const r = n[e], i = t(r);
    if (typeof i == "function") try {
      co(i, r);
    } catch {
    }
    n[e] = i;
  }
  function Xn(n, e, t) {
    Object.defineProperty(n, e, { value: t, writable: !0, configurable: !0 });
  }
  function co(n, e) {
    const t = e.prototype || {};
    n.prototype = e.prototype = t, Xn(n, "__sentry_original__", e);
  }
  function Zn(n) {
    return n.__sentry_original__;
  }
  function lo(n) {
    if (oo(n)) return { message: n.message, name: n.name, stack: n.stack, ...qr(n) };
    if (Gt(n)) {
      const e = { type: n.type, target: Gr(n.target), currentTarget: Gr(n.currentTarget), ...qr(n) };
      return typeof CustomEvent < "u" && Ve(n, CustomEvent) && (e.detail = n.detail), e;
    }
    return n;
  }
  function Gr(n) {
    try {
      return e = n, typeof Element < "u" && Ve(e, Element) ? En(n) : Object.prototype.toString.call(n);
    } catch {
      return "<unknown>";
    }
    var e;
  }
  function qr(n) {
    if (typeof n == "object" && n !== null) {
      const e = {};
      for (const t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
      return e;
    }
    return {};
  }
  function tn(n) {
    return wn(n, /* @__PURE__ */ new Map());
  }
  function wn(n, e) {
    if (tt(n)) {
      const t = e.get(n);
      if (t !== void 0) return t;
      const r = {};
      e.set(n, r);
      for (const i of Object.keys(n)) n[i] !== void 0 && (r[i] = wn(n[i], e));
      return r;
    }
    if (Array.isArray(n)) {
      const t = e.get(n);
      if (t !== void 0) return t;
      const r = [];
      return e.set(n, r), n.forEach((i) => {
        r.push(wn(i, e));
      }), r;
    }
    return n;
  }
  const Jr = "<anonymous>";
  function Oe(n) {
    try {
      return n && typeof n == "function" && n.name || Jr;
    } catch {
      return Jr;
    }
  }
  const cn = St();
  function kn(n) {
    return n && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(n.toString());
  }
  function fs() {
    if (!function() {
      if (!("fetch" in cn)) return !1;
      try {
        return new Headers(), new Request("http://www.example.com"), new Response(), !0;
      } catch {
        return !1;
      }
    }()) return !1;
    if (kn(cn.fetch)) return !0;
    let n = !1;
    const e = cn.document;
    if (e && typeof e.createElement == "function") try {
      const t = e.createElement("iframe");
      t.hidden = !0, e.head.appendChild(t), t.contentWindow && t.contentWindow.fetch && (n = kn(t.contentWindow.fetch)), e.head.removeChild(t);
    } catch (t) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t);
    }
    return n;
  }
  const Tt = St(), B = St(), ut = "__sentry_xhr_v2__", ht = {}, Wr = {};
  function ms(n) {
    if (!Wr[n]) switch (Wr[n] = !0, n) {
      case "console":
        (function() {
          "console" in B && qt.forEach(function(e) {
            e in B.console && W(B.console, e, function(t) {
              return function(...r) {
                oe("console", { args: r, level: e }), t && t.apply(B.console, r);
              };
            });
          });
        })();
        break;
      case "dom":
        (function() {
          if (!("document" in B)) return;
          const e = oe.bind(null, "dom"), t = Hr(e, !0);
          B.document.addEventListener("click", t, !1), B.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach((r) => {
            const i = B[r] && B[r].prototype;
            i && i.hasOwnProperty && i.hasOwnProperty("addEventListener") && (W(i, "addEventListener", function(a) {
              return function(c, l, u) {
                if (c === "click" || c == "keypress") try {
                  const h = this, p = h.__sentry_instrumentation_handlers__ = h.__sentry_instrumentation_handlers__ || {}, m = p[c] = p[c] || { refCount: 0 };
                  if (!m.handler) {
                    const _ = Hr(e);
                    m.handler = _, a.call(this, c, _, u);
                  }
                  m.refCount++;
                } catch {
                }
                return a.call(this, c, l, u);
              };
            }), W(i, "removeEventListener", function(a) {
              return function(c, l, u) {
                if (c === "click" || c == "keypress") try {
                  const h = this, p = h.__sentry_instrumentation_handlers__ || {}, m = p[c];
                  m && (m.refCount--, m.refCount <= 0 && (a.call(this, c, m.handler, u), m.handler = void 0, delete p[c]), Object.keys(p).length === 0 && delete h.__sentry_instrumentation_handlers__);
                } catch {
                }
                return a.call(this, c, l, u);
              };
            }));
          });
        })();
        break;
      case "xhr":
        (function() {
          if (!("XMLHttpRequest" in B)) return;
          const e = XMLHttpRequest.prototype;
          W(e, "open", function(t) {
            return function(...r) {
              const i = r[1], a = this[ut] = { method: Ue(r[0]) ? r[0].toUpperCase() : r[0], url: r[1], request_headers: {} };
              Ue(i) && a.method === "POST" && i.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
              const c = () => {
                const l = this[ut];
                if (l && this.readyState === 4) {
                  try {
                    l.status_code = this.status;
                  } catch {
                  }
                  oe("xhr", { args: r, endTimestamp: Date.now(), startTimestamp: Date.now(), xhr: this });
                }
              };
              return "onreadystatechange" in this && typeof this.onreadystatechange == "function" ? W(this, "onreadystatechange", function(l) {
                return function(...u) {
                  return c(), l.apply(this, u);
                };
              }) : this.addEventListener("readystatechange", c), W(this, "setRequestHeader", function(l) {
                return function(...u) {
                  const [h, p] = u, m = this[ut];
                  return m && (m.request_headers[h.toLowerCase()] = p), l.apply(this, u);
                };
              }), t.apply(this, r);
            };
          }), W(e, "send", function(t) {
            return function(...r) {
              const i = this[ut];
              return i && r[0] !== void 0 && (i.body = r[0]), oe("xhr", { args: r, startTimestamp: Date.now(), xhr: this }), t.apply(this, r);
            };
          });
        })();
        break;
      case "fetch":
        (function() {
          fs() && W(B, "fetch", function(e) {
            return function(...t) {
              const { method: r, url: i } = function(c) {
                if (c.length === 0) return { method: "GET", url: "" };
                if (c.length === 2) {
                  const [u, h] = c;
                  return { url: zr(u), method: Tn(h, "method") ? String(h.method).toUpperCase() : "GET" };
                }
                const l = c[0];
                return { url: zr(l), method: Tn(l, "method") ? String(l.method).toUpperCase() : "GET" };
              }(t), a = { args: t, fetchData: { method: r, url: i }, startTimestamp: Date.now() };
              return oe("fetch", { ...a }), e.apply(B, t).then((c) => (oe("fetch", { ...a, endTimestamp: Date.now(), response: c }), c), (c) => {
                throw oe("fetch", { ...a, endTimestamp: Date.now(), error: c }), c;
              });
            };
          });
        })();
        break;
      case "history":
        (function() {
          if (!function() {
            const r = Tt.chrome, i = r && r.app && r.app.runtime, a = "history" in Tt && !!Tt.history.pushState && !!Tt.history.replaceState;
            return !i && a;
          }()) return;
          const e = B.onpopstate;
          function t(r) {
            return function(...i) {
              const a = i.length > 2 ? i[2] : void 0;
              if (a) {
                const c = Ct, l = String(a);
                Ct = l, oe("history", { from: c, to: l });
              }
              return r.apply(this, i);
            };
          }
          B.onpopstate = function(...r) {
            const i = B.location.href, a = Ct;
            if (Ct = i, oe("history", { from: a, to: i }), e) try {
              return e.apply(this, r);
            } catch {
            }
          }, W(B.history, "pushState", t), W(B.history, "replaceState", t);
        })();
        break;
      case "error":
        At = B.onerror, B.onerror = function(e, t, r, i, a) {
          return oe("error", { column: i, error: a, line: r, msg: e, url: t }), !(!At || At.__SENTRY_LOADER__) && At.apply(this, arguments);
        }, B.onerror.__SENTRY_INSTRUMENTED__ = !0;
        break;
      case "unhandledrejection":
        Ot = B.onunhandledrejection, B.onunhandledrejection = function(e) {
          return oe("unhandledrejection", e), !(Ot && !Ot.__SENTRY_LOADER__) || Ot.apply(this, arguments);
        }, B.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
        break;
      default:
        return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn("unknown instrumentation type:", n));
    }
  }
  function Re(n, e) {
    ht[n] = ht[n] || [], ht[n].push(e), ms(n);
  }
  function oe(n, e) {
    if (n && ht[n]) for (const t of ht[n] || []) try {
      t(e);
    } catch (r) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.error(`Error while triggering instrumentation handler.
Type: ${n}
Name: ${Oe(t)}
Error:`, r);
    }
  }
  function Tn(n, e) {
    return !!n && typeof n == "object" && !!n[e];
  }
  function zr(n) {
    return typeof n == "string" ? n : n ? Tn(n, "url") ? n.url : n.toString ? n.toString() : "" : "";
  }
  let Ct;
  const gs = 1e3;
  let Mt, ln;
  function Hr(n, e = !1) {
    return (t) => {
      if (!t || ln === t || function(i) {
        if (i.type !== "keypress") return !1;
        try {
          const a = i.target;
          if (!a || !a.tagName) return !0;
          if (a.tagName === "INPUT" || a.tagName === "TEXTAREA" || a.isContentEditable) return !1;
        } catch {
        }
        return !0;
      }(t)) return;
      const r = t.type === "keypress" ? "input" : t.type;
      (Mt === void 0 || function(i, a) {
        if (!i || i.type !== a.type) return !0;
        try {
          if (i.target !== a.target) return !0;
        } catch {
        }
        return !1;
      }(ln, t)) && (n({ event: t, name: r, global: e }), ln = t), clearTimeout(Mt), Mt = B.setTimeout(() => {
        Mt = void 0;
      }, gs);
    };
  }
  let At = null, Ot = null;
  function Ce() {
    const n = ie, e = n.crypto || n.msCrypto;
    if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
    const t = e && e.getRandomValues ? () => e.getRandomValues(new Uint8Array(1))[0] : () => 16 * Math.random();
    return ("10000000100040008000" + 1e11).replace(/[018]/g, (r) => (r ^ (15 & t()) >> r / 4).toString(16));
  }
  function uo(n) {
    return n.exception && n.exception.values ? n.exception.values[0] : void 0;
  }
  function ke(n) {
    const { message: e, event_id: t } = n;
    if (e) return e;
    const r = uo(n);
    return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || t || "<unknown>" : t || "<unknown>";
  }
  function Cn(n, e, t) {
    const r = n.exception = n.exception || {}, i = r.values = r.values || [], a = i[0] = i[0] || {};
    a.value || (a.value = e || ""), a.type || (a.type = "Error");
  }
  function gt(n, e) {
    const t = uo(n);
    if (!t) return;
    const r = t.mechanism;
    if (t.mechanism = { type: "generic", handled: !0, ...r, ...e }, e && "data" in e) {
      const i = { ...r && r.data, ...e.data };
      t.mechanism.data = i;
    }
  }
  function Kr(n) {
    if (n && n.__sentry_captured__) return !0;
    try {
      Xn(n, "__sentry_captured__", !0);
    } catch {
    }
    return !1;
  }
  function Te(n, e = 100, t = 1 / 0) {
    try {
      return Mn("", n, e, t);
    } catch (r) {
      return { ERROR: `**non-serializable** (${r})` };
    }
  }
  function ho(n, e = 3, t = 102400) {
    const r = Te(n, e);
    return i = r, function(a) {
      return ~-encodeURI(a).split(/%..|./).length;
    }(JSON.stringify(i)) > t ? ho(n, e - 1, t) : r;
    var i;
  }
  function Mn(n, e, t = 1 / 0, r = 1 / 0, i = /* @__PURE__ */ function() {
    const a = typeof WeakSet == "function", c = a ? /* @__PURE__ */ new WeakSet() : [];
    return [function(l) {
      if (a) return !!c.has(l) || (c.add(l), !1);
      for (let u = 0; u < c.length; u++) if (c[u] === l) return !0;
      return c.push(l), !1;
    }, function(l) {
      if (a) c.delete(l);
      else for (let u = 0; u < c.length; u++) if (c[u] === l) {
        c.splice(u, 1);
        break;
      }
    }];
  }()) {
    const [a, c] = i;
    if (e == null || ["number", "boolean", "string"].includes(typeof e) && (typeof (l = e) != "number" || l == l)) return e;
    var l;
    const u = function(b, E) {
      try {
        if (b === "domain" && E && typeof E == "object" && E._events) return "[Domain]";
        if (b === "domainEmitter") return "[DomainEmitter]";
        if (typeof global < "u" && E === global) return "[Global]";
        if (typeof window < "u" && E === window) return "[Window]";
        if (typeof document < "u" && E === document) return "[Document]";
        if (function(O) {
          return tt(O) && "nativeEvent" in O && "preventDefault" in O && "stopPropagation" in O;
        }(E)) return "[SyntheticEvent]";
        if (typeof E == "number" && E != E) return "[NaN]";
        if (typeof E == "function") return `[Function: ${Oe(E)}]`;
        if (typeof E == "symbol") return `[${String(E)}]`;
        if (typeof E == "bigint") return `[BigInt: ${String(E)}]`;
        const T = function(O) {
          const $ = Object.getPrototypeOf(O);
          return $ ? $.constructor.name : "null prototype";
        }(E);
        return /^HTML(\w*)Element$/.test(T) ? `[HTMLElement: ${T}]` : `[object ${T}]`;
      } catch (T) {
        return `**non-serializable** (${T})`;
      }
    }(n, e);
    if (!u.startsWith("[object ")) return u;
    if (e.__sentry_skip_normalization__) return e;
    const h = typeof e.__sentry_override_normalization_depth__ == "number" ? e.__sentry_override_normalization_depth__ : t;
    if (h === 0) return u.replace("object ", "");
    if (a(e)) return "[Circular ~]";
    const p = e;
    if (p && typeof p.toJSON == "function") try {
      return Mn("", p.toJSON(), h - 1, r, i);
    } catch {
    }
    const m = Array.isArray(e) ? [] : {};
    let _ = 0;
    const S = lo(e);
    for (const b in S) {
      if (!Object.prototype.hasOwnProperty.call(S, b)) continue;
      if (_ >= r) {
        m[b] = "[MaxProperties ~]";
        break;
      }
      const E = S[b];
      m[b] = Mn(b, E, h - 1, r, i), _++;
    }
    return c(e), m;
  }
  var ye;
  function Ye(n) {
    return new X((e) => {
      e(n);
    });
  }
  function Wt(n) {
    return new X((e, t) => {
      t(n);
    });
  }
  (function(n) {
    n[n.PENDING = 0] = "PENDING", n[n.RESOLVED = 1] = "RESOLVED", n[n.REJECTED = 2] = "REJECTED";
  })(ye || (ye = {}));
  class X {
    __init() {
      this._state = ye.PENDING;
    }
    __init2() {
      this._handlers = [];
    }
    constructor(e) {
      X.prototype.__init.call(this), X.prototype.__init2.call(this), X.prototype.__init3.call(this), X.prototype.__init4.call(this), X.prototype.__init5.call(this), X.prototype.__init6.call(this);
      try {
        e(this._resolve, this._reject);
      } catch (t) {
        this._reject(t);
      }
    }
    then(e, t) {
      return new X((r, i) => {
        this._handlers.push([!1, (a) => {
          if (e) try {
            r(e(a));
          } catch (c) {
            i(c);
          }
          else r(a);
        }, (a) => {
          if (t) try {
            r(t(a));
          } catch (c) {
            i(c);
          }
          else i(a);
        }]), this._executeHandlers();
      });
    }
    catch(e) {
      return this.then((t) => t, e);
    }
    finally(e) {
      return new X((t, r) => {
        let i, a;
        return this.then((c) => {
          a = !1, i = c, e && e();
        }, (c) => {
          a = !0, i = c, e && e();
        }).then(() => {
          a ? r(i) : t(i);
        });
      });
    }
    __init3() {
      this._resolve = (e) => {
        this._setResult(ye.RESOLVED, e);
      };
    }
    __init4() {
      this._reject = (e) => {
        this._setResult(ye.REJECTED, e);
      };
    }
    __init5() {
      this._setResult = (e, t) => {
        this._state === ye.PENDING && (Kn(t) ? t.then(this._resolve, this._reject) : (this._state = e, this._value = t, this._executeHandlers()));
      };
    }
    __init6() {
      this._executeHandlers = () => {
        if (this._state === ye.PENDING) return;
        const e = this._handlers.slice();
        this._handlers = [], e.forEach((t) => {
          t[0] || (this._state === ye.RESOLVED && t[1](this._value), this._state === ye.REJECTED && t[2](this._value), t[0] = !0);
        });
      };
    }
  }
  function vs(n) {
    const e = [];
    function t(r) {
      return e.splice(e.indexOf(r), 1)[0];
    }
    return { $: e, add: function(r) {
      if (!(n === void 0 || e.length < n)) return Wt(new ae("Not adding Promise because buffer limit was reached."));
      const i = r();
      return e.indexOf(i) === -1 && e.push(i), i.then(() => t(i)).then(null, () => t(i).then(null, () => {
      })), i;
    }, drain: function(r) {
      return new X((i, a) => {
        let c = e.length;
        if (!c) return i(!0);
        const l = setTimeout(() => {
          r && r > 0 && i(!1);
        }, r);
        e.forEach((u) => {
          Ye(u).then(() => {
            --c || (clearTimeout(l), i(!0));
          }, a);
        });
      });
    } };
  }
  function un(n) {
    if (!n) return {};
    const e = n.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!e) return {};
    const t = e[6] || "", r = e[8] || "";
    return { host: e[4], path: e[5], protocol: e[2], search: t, hash: r, relative: e[5] + t + r };
  }
  const _s = ["fatal", "error", "warning", "log", "info", "debug"], po = St(), An = { nowSeconds: () => Date.now() / 1e3 }, dn = typeof __SENTRY_BROWSER_BUNDLE__ < "u" && __SENTRY_BROWSER_BUNDLE__ || Object.prototype.toString.call(typeof process < "u" ? process : 0) !== "[object process]" ? function() {
    const { performance: n } = po;
    if (!(!n || !n.now))
      return { now: () => n.now(), timeOrigin: Date.now() - n.now() };
  }() : function() {
    try {
      return (n = Ja, e = "perf_hooks", n.require(e)).performance;
    } catch {
      return;
    }
    var n, e;
  }(), Qr = dn === void 0 ? An : { nowSeconds: () => (dn.timeOrigin + dn.now()) / 1e3 }, nn = An.nowSeconds.bind(An), fo = Qr.nowSeconds.bind(Qr);
  function vt(n, e = []) {
    return [n, e];
  }
  function ys(n, e) {
    const [t, r] = n;
    return [t, [...r, e]];
  }
  function Xr(n, e) {
    const t = n[1];
    for (const r of t)
      if (e(r, r[0].type)) return !0;
    return !1;
  }
  function On(n, e) {
    return (e || new TextEncoder()).encode(n);
  }
  function bs(n, e) {
    const [t, r] = n;
    let i = JSON.stringify(t);
    function a(c) {
      typeof i == "string" ? i = typeof c == "string" ? i + c : [On(i, e), c] : i.push(typeof c == "string" ? On(c, e) : c);
    }
    for (const c of r) {
      const [l, u] = c;
      if (a(`
${JSON.stringify(l)}
`), typeof u == "string" || u instanceof Uint8Array) a(u);
      else {
        let h;
        try {
          h = JSON.stringify(u);
        } catch {
          h = JSON.stringify(Te(u));
        }
        a(h);
      }
    }
    return typeof i == "string" ? i : function(c) {
      const l = c.reduce((p, m) => p + m.length, 0), u = new Uint8Array(l);
      let h = 0;
      for (const p of c) u.set(p, h), h += p.length;
      return u;
    }(i);
  }
  function Ss(n, e) {
    const t = typeof n.data == "string" ? On(n.data, e) : n.data;
    return [tn({ type: "attachment", length: t.length, filename: n.filename, content_type: n.contentType, attachment_type: n.attachmentType }), t];
  }
  (() => {
    const { performance: n } = po;
    if (!n || !n.now) return;
    const e = 36e5, t = n.now(), r = Date.now(), i = n.timeOrigin ? Math.abs(n.timeOrigin + t - r) : e, a = i < e, c = n.timing && n.timing.navigationStart, l = typeof c == "number" ? Math.abs(c + t - r) : e;
    (a || l < e) && i <= l && n.timeOrigin;
  })();
  const Es = { session: "session", sessions: "session", attachment: "attachment", transaction: "transaction", event: "error", client_report: "internal", user_report: "default", profile: "profile", replay_event: "replay", replay_recording: "replay", check_in: "monitor" };
  function Zr(n) {
    return Es[n];
  }
  function mo(n) {
    if (!n || !n.sdk) return;
    const { name: e, version: t } = n.sdk;
    return { name: e, version: t };
  }
  const ws = 6e4;
  function ks(n, { statusCode: e, headers: t }, r = Date.now()) {
    const i = { ...n }, a = t && t["x-sentry-rate-limits"], c = t && t["retry-after"];
    if (a) for (const l of a.trim().split(",")) {
      const [u, h] = l.split(":", 2), p = parseInt(u, 10), m = 1e3 * (isNaN(p) ? 60 : p);
      if (h) for (const _ of h.split(";")) i[_] = r + m;
      else i.all = r + m;
    }
    else c ? i.all = r + function(l, u = Date.now()) {
      const h = parseInt(`${l}`, 10);
      if (!isNaN(h)) return 1e3 * h;
      const p = Date.parse(`${l}`);
      return isNaN(p) ? ws : p - u;
    }(c, r) : e === 429 && (i.all = r + 6e4);
    return i;
  }
  const er = "production";
  function Ts(n) {
    const e = fo(), t = { sid: Ce(), init: !0, timestamp: e, started: e, duration: 0, status: "ok", errors: 0, ignoreDuration: !1, toJSON: () => function(r) {
      return tn({ sid: `${r.sid}`, init: r.init, started: new Date(1e3 * r.started).toISOString(), timestamp: new Date(1e3 * r.timestamp).toISOString(), status: r.status, errors: r.errors, did: typeof r.did == "number" || typeof r.did == "string" ? `${r.did}` : void 0, duration: r.duration, attrs: { release: r.release, environment: r.environment, ip_address: r.ipAddress, user_agent: r.userAgent } });
    }(t) };
    return n && nt(t, n), t;
  }
  function nt(n, e = {}) {
    if (e.user && (!n.ipAddress && e.user.ip_address && (n.ipAddress = e.user.ip_address), n.did || e.did || (n.did = e.user.id || e.user.email || e.user.username)), n.timestamp = e.timestamp || fo(), e.ignoreDuration && (n.ignoreDuration = e.ignoreDuration), e.sid && (n.sid = e.sid.length === 32 ? e.sid : Ce()), e.init !== void 0 && (n.init = e.init), !n.did && e.did && (n.did = `${e.did}`), typeof e.started == "number" && (n.started = e.started), n.ignoreDuration) n.duration = void 0;
    else if (typeof e.duration == "number") n.duration = e.duration;
    else {
      const t = n.timestamp - n.started;
      n.duration = t >= 0 ? t : 0;
    }
    e.release && (n.release = e.release), e.environment && (n.environment = e.environment), !n.ipAddress && e.ipAddress && (n.ipAddress = e.ipAddress), !n.userAgent && e.userAgent && (n.userAgent = e.userAgent), typeof e.errors == "number" && (n.errors = e.errors), e.status && (n.status = e.status);
  }
  class Fe {
    constructor() {
      this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = ei();
    }
    static clone(e) {
      const t = new Fe();
      return e && (t._breadcrumbs = [...e._breadcrumbs], t._tags = { ...e._tags }, t._extra = { ...e._extra }, t._contexts = { ...e._contexts }, t._user = e._user, t._level = e._level, t._span = e._span, t._session = e._session, t._transactionName = e._transactionName, t._fingerprint = e._fingerprint, t._eventProcessors = [...e._eventProcessors], t._requestSession = e._requestSession, t._attachments = [...e._attachments], t._sdkProcessingMetadata = { ...e._sdkProcessingMetadata }, t._propagationContext = { ...e._propagationContext }), t;
    }
    addScopeListener(e) {
      this._scopeListeners.push(e);
    }
    addEventProcessor(e) {
      return this._eventProcessors.push(e), this;
    }
    setUser(e) {
      return this._user = e || {}, this._session && nt(this._session, { user: e }), this._notifyScopeListeners(), this;
    }
    getUser() {
      return this._user;
    }
    getRequestSession() {
      return this._requestSession;
    }
    setRequestSession(e) {
      return this._requestSession = e, this;
    }
    setTags(e) {
      return this._tags = { ...this._tags, ...e }, this._notifyScopeListeners(), this;
    }
    setTag(e, t) {
      return this._tags = { ...this._tags, [e]: t }, this._notifyScopeListeners(), this;
    }
    setExtras(e) {
      return this._extra = { ...this._extra, ...e }, this._notifyScopeListeners(), this;
    }
    setExtra(e, t) {
      return this._extra = { ...this._extra, [e]: t }, this._notifyScopeListeners(), this;
    }
    setFingerprint(e) {
      return this._fingerprint = e, this._notifyScopeListeners(), this;
    }
    setLevel(e) {
      return this._level = e, this._notifyScopeListeners(), this;
    }
    setTransactionName(e) {
      return this._transactionName = e, this._notifyScopeListeners(), this;
    }
    setContext(e, t) {
      return t === null ? delete this._contexts[e] : this._contexts[e] = t, this._notifyScopeListeners(), this;
    }
    setSpan(e) {
      return this._span = e, this._notifyScopeListeners(), this;
    }
    getSpan() {
      return this._span;
    }
    getTransaction() {
      const e = this.getSpan();
      return e && e.transaction;
    }
    setSession(e) {
      return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this;
    }
    getSession() {
      return this._session;
    }
    update(e) {
      if (!e) return this;
      if (typeof e == "function") {
        const t = e(this);
        return t instanceof Fe ? t : this;
      }
      return e instanceof Fe ? (this._tags = { ...this._tags, ...e._tags }, this._extra = { ...this._extra, ...e._extra }, this._contexts = { ...this._contexts, ...e._contexts }, e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint), e._requestSession && (this._requestSession = e._requestSession), e._propagationContext && (this._propagationContext = e._propagationContext)) : tt(e) && (this._tags = { ...this._tags, ...e.tags }, this._extra = { ...this._extra, ...e.extra }, this._contexts = { ...this._contexts, ...e.contexts }, e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession && (this._requestSession = e.requestSession), e.propagationContext && (this._propagationContext = e.propagationContext)), this;
    }
    clear() {
      return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this._propagationContext = ei(), this;
    }
    addBreadcrumb(e, t) {
      const r = typeof t == "number" ? t : 100;
      if (r <= 0) return this;
      const i = { timestamp: nn(), ...e };
      return this._breadcrumbs = [...this._breadcrumbs, i].slice(-r), this._notifyScopeListeners(), this;
    }
    getLastBreadcrumb() {
      return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    clearBreadcrumbs() {
      return this._breadcrumbs = [], this._notifyScopeListeners(), this;
    }
    addAttachment(e) {
      return this._attachments.push(e), this;
    }
    getAttachments() {
      return this._attachments;
    }
    clearAttachments() {
      return this._attachments = [], this;
    }
    applyToEvent(e, t = {}) {
      if (this._extra && Object.keys(this._extra).length && (e.extra = { ...this._extra, ...e.extra }), this._tags && Object.keys(this._tags).length && (e.tags = { ...this._tags, ...e.tags }), this._user && Object.keys(this._user).length && (e.user = { ...this._user, ...e.user }), this._contexts && Object.keys(this._contexts).length && (e.contexts = { ...this._contexts, ...e.contexts }), this._level && (e.level = this._level), this._transactionName && (e.transaction = this._transactionName), this._span) {
        e.contexts = { trace: this._span.getTraceContext(), ...e.contexts };
        const r = this._span.transaction;
        if (r) {
          e.sdkProcessingMetadata = { dynamicSamplingContext: r.getDynamicSamplingContext(), ...e.sdkProcessingMetadata };
          const i = r.name;
          i && (e.tags = { transaction: i, ...e.tags });
        }
      }
      return this._applyFingerprint(e), e.breadcrumbs = [...e.breadcrumbs || [], ...this._breadcrumbs], e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0, e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...this._sdkProcessingMetadata, propagationContext: this._propagationContext }, this._notifyEventProcessors([...go(), ...this._eventProcessors], e, t);
    }
    setSDKProcessingMetadata(e) {
      return this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata, ...e }, this;
    }
    setPropagationContext(e) {
      return this._propagationContext = e, this;
    }
    getPropagationContext() {
      return this._propagationContext;
    }
    _notifyEventProcessors(e, t, r, i = 0) {
      return new X((a, c) => {
        const l = e[i];
        if (t === null || typeof l != "function") a(t);
        else {
          const u = l({ ...t }, r);
          (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && l.id && u === null && L.log(`Event processor "${l.id}" dropped event`), Kn(u) ? u.then((h) => this._notifyEventProcessors(e, h, r, i + 1).then(a)).then(null, c) : this._notifyEventProcessors(e, u, r, i + 1).then(a).then(null, c);
        }
      });
    }
    _notifyScopeListeners() {
      this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((e) => {
        e(this);
      }), this._notifyingListeners = !1);
    }
    _applyFingerprint(e) {
      var t;
      e.fingerprint = e.fingerprint ? (t = e.fingerprint, Array.isArray(t) ? t : [t]) : [], this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
    }
  }
  function go() {
    return Qn("globalEventProcessors", () => []);
  }
  function vo(n) {
    go().push(n);
  }
  function ei() {
    return { traceId: Ce(), spanId: Ce().substring(16), sampled: !1 };
  }
  const _o = 4, Cs = 100;
  class tr {
    constructor(e, t = new Fe(), r = _o) {
      this._version = r, this._stack = [{ scope: t }], e && this.bindClient(e);
    }
    isOlderThan(e) {
      return this._version < e;
    }
    bindClient(e) {
      this.getStackTop().client = e, e && e.setupIntegrations && e.setupIntegrations();
    }
    pushScope() {
      const e = Fe.clone(this.getScope());
      return this.getStack().push({ client: this.getClient(), scope: e }), e;
    }
    popScope() {
      return !(this.getStack().length <= 1) && !!this.getStack().pop();
    }
    withScope(e) {
      const t = this.pushScope();
      try {
        e(t);
      } finally {
        this.popScope();
      }
    }
    getClient() {
      return this.getStackTop().client;
    }
    getScope() {
      return this.getStackTop().scope;
    }
    getStack() {
      return this._stack;
    }
    getStackTop() {
      return this._stack[this._stack.length - 1];
    }
    captureException(e, t) {
      const r = this._lastEventId = t && t.event_id ? t.event_id : Ce(), i = new Error("Sentry syntheticException");
      return this._withClient((a, c) => {
        a.captureException(e, { originalException: e, syntheticException: i, ...t, event_id: r }, c);
      }), r;
    }
    captureMessage(e, t, r) {
      const i = this._lastEventId = r && r.event_id ? r.event_id : Ce(), a = new Error(e);
      return this._withClient((c, l) => {
        c.captureMessage(e, t, { originalException: e, syntheticException: a, ...r, event_id: i }, l);
      }), i;
    }
    captureEvent(e, t) {
      const r = t && t.event_id ? t.event_id : Ce();
      return e.type || (this._lastEventId = r), this._withClient((i, a) => {
        i.captureEvent(e, { ...t, event_id: r }, a);
      }), r;
    }
    lastEventId() {
      return this._lastEventId;
    }
    addBreadcrumb(e, t) {
      const { scope: r, client: i } = this.getStackTop();
      if (!i) return;
      const { beforeBreadcrumb: a = null, maxBreadcrumbs: c = Cs } = i.getOptions && i.getOptions() || {};
      if (c <= 0) return;
      const l = { timestamp: nn(), ...e }, u = a ? so(() => a(l, t)) : l;
      u !== null && (i.emit && i.emit("beforeAddBreadcrumb", u, t), r.addBreadcrumb(u, c));
    }
    setUser(e) {
      this.getScope().setUser(e);
    }
    setTags(e) {
      this.getScope().setTags(e);
    }
    setExtras(e) {
      this.getScope().setExtras(e);
    }
    setTag(e, t) {
      this.getScope().setTag(e, t);
    }
    setExtra(e, t) {
      this.getScope().setExtra(e, t);
    }
    setContext(e, t) {
      this.getScope().setContext(e, t);
    }
    configureScope(e) {
      const { scope: t, client: r } = this.getStackTop();
      r && e(t);
    }
    run(e) {
      const t = ti(this);
      try {
        e(this);
      } finally {
        ti(t);
      }
    }
    getIntegration(e) {
      const t = this.getClient();
      if (!t) return null;
      try {
        return t.getIntegration(e);
      } catch {
        return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn(`Cannot retrieve integration ${e.id} from the current Hub`), null;
      }
    }
    startTransaction(e, t) {
      const r = this._callExtensionMethod("startTransaction", e, t);
      return typeof __SENTRY_DEBUG__ < "u" && !__SENTRY_DEBUG__ || r || console.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`), r;
    }
    traceHeaders() {
      return this._callExtensionMethod("traceHeaders");
    }
    captureSession(e = !1) {
      if (e) return this.endSession();
      this._sendSessionUpdate();
    }
    endSession() {
      const e = this.getStackTop().scope, t = e.getSession();
      t && function(r, i) {
        let a = {};
        r.status === "ok" && (a = { status: "exited" }), nt(r, a);
      }(t), this._sendSessionUpdate(), e.setSession();
    }
    startSession(e) {
      const { scope: t, client: r } = this.getStackTop(), { release: i, environment: a = er } = r && r.getOptions() || {}, { userAgent: c } = ie.navigator || {}, l = Ts({ release: i, environment: a, user: t.getUser(), ...c && { userAgent: c }, ...e }), u = t.getSession && t.getSession();
      return u && u.status === "ok" && nt(u, { status: "exited" }), this.endSession(), t.setSession(l), l;
    }
    shouldSendDefaultPii() {
      const e = this.getClient(), t = e && e.getOptions();
      return !!(t && t.sendDefaultPii);
    }
    _sendSessionUpdate() {
      const { scope: e, client: t } = this.getStackTop(), r = e.getSession();
      r && t && t.captureSession && t.captureSession(r);
    }
    _withClient(e) {
      const { scope: t, client: r } = this.getStackTop();
      r && e(r, t);
    }
    _callExtensionMethod(e, ...t) {
      const r = zt().__SENTRY__;
      if (r && r.extensions && typeof r.extensions[e] == "function") return r.extensions[e].apply(this, t);
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn(`Extension method ${e} couldn't be found, doing nothing.`);
    }
  }
  function zt() {
    return ie.__SENTRY__ = ie.__SENTRY__ || { extensions: {}, hub: void 0 }, ie;
  }
  function ti(n) {
    const e = zt(), t = Ln(e);
    return yo(e, n), t;
  }
  function te() {
    const n = zt();
    if (n.__SENTRY__ && n.__SENTRY__.acs) {
      const e = n.__SENTRY__.acs.getCurrentHub();
      if (e) return e;
    }
    return function(e = zt()) {
      t = e, t && t.__SENTRY__ && t.__SENTRY__.hub && !Ln(e).isOlderThan(_o) || yo(e, new tr());
      var t;
      return Ln(e);
    }(n);
  }
  function Ln(n) {
    return Qn("hub", () => new tr(), n);
  }
  function yo(n, e) {
    return n ? ((n.__SENTRY__ = n.__SENTRY__ || {}).hub = e, !0) : !1;
  }
  const Ms = "7";
  function As(n, e) {
    return t = { sentry_key: n.publicKey, sentry_version: Ms, ...e && { sentry_client: `${e.name}/${e.version}` } }, Object.keys(t).map((r) => `${encodeURIComponent(r)}=${encodeURIComponent(t[r])}`).join("&");
    var t;
  }
  function Os(n, e, t, r) {
    const i = mo(t), a = n.type && n.type !== "replay_event" ? n.type : "event";
    (function(l, u) {
      u && (l.sdk = l.sdk || {}, l.sdk.name = l.sdk.name || u.name, l.sdk.version = l.sdk.version || u.version, l.sdk.integrations = [...l.sdk.integrations || [], ...u.integrations || []], l.sdk.packages = [...l.sdk.packages || [], ...u.packages || []]);
    })(n, t && t.sdk);
    const c = function(l, u, h, p) {
      const m = l.sdkProcessingMetadata && l.sdkProcessingMetadata.dynamicSamplingContext;
      return { event_id: l.event_id, sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...u && { sdk: u }, ...!!h && { dsn: Jt(p) }, ...m && { trace: tn({ ...m }) } };
    }(n, i, r, e);
    return delete n.sdkProcessingMetadata, vt(c, [[{ type: a }, n]]);
  }
  const ni = [];
  function ri(n, e) {
    e[n.name] = n, ni.indexOf(n.name) === -1 && (n.setupOnce(vo, te), ni.push(n.name), (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.log(`Integration installed: ${n.name}`));
  }
  function Ls(n, e, t, r) {
    const { normalizeDepth: i = 3, normalizeMaxBreadth: a = 1e3 } = n, c = { ...e, event_id: e.event_id || t.event_id || Ce(), timestamp: e.timestamp || nn() }, l = t.integrations || n.integrations.map((p) => p.name);
    (function(p, m) {
      const { environment: _, release: S, dist: b, maxValueLength: E = 250 } = m;
      "environment" in p || (p.environment = "environment" in m ? _ : er), p.release === void 0 && S !== void 0 && (p.release = S), p.dist === void 0 && b !== void 0 && (p.dist = b), p.message && (p.message = ze(p.message, E));
      const T = p.exception && p.exception.values && p.exception.values[0];
      T && T.value && (T.value = ze(T.value, E));
      const O = p.request;
      O && O.url && (O.url = ze(O.url, E));
    })(c, n), function(p, m) {
      m.length > 0 && (p.sdk = p.sdk || {}, p.sdk.integrations = [...p.sdk.integrations || [], ...m]);
    }(c, l), e.type === void 0 && function(p, m) {
      const _ = ie._sentryDebugIds;
      if (!_) return;
      let S;
      const b = ii.get(m);
      b ? S = b : (S = /* @__PURE__ */ new Map(), ii.set(m, S));
      const E = Object.keys(_).reduce((T, O) => {
        let $;
        const Se = S.get(O);
        Se ? $ = Se : ($ = m(O), S.set(O, $));
        for (let Ge = $.length - 1; Ge >= 0; Ge--) {
          const ot = $[Ge];
          if (ot.filename) {
            T[ot.filename] = _[O];
            break;
          }
        }
        return T;
      }, {});
      try {
        p.exception.values.forEach((T) => {
          T.stacktrace.frames.forEach((O) => {
            O.filename && (O.debug_id = E[O.filename]);
          });
        });
      } catch {
      }
    }(c, n.stackParser);
    let u = r;
    t.captureContext && (u = Fe.clone(u).update(t.captureContext));
    let h = Ye(c);
    if (u) {
      if (u.getAttachments) {
        const p = [...t.attachments || [], ...u.getAttachments()];
        p.length && (t.attachments = p);
      }
      h = u.applyToEvent(c, t);
    }
    return h.then((p) => (p && function(m) {
      const _ = {};
      try {
        m.exception.values.forEach((b) => {
          b.stacktrace.frames.forEach((E) => {
            E.debug_id && (E.abs_path ? _[E.abs_path] = E.debug_id : E.filename && (_[E.filename] = E.debug_id), delete E.debug_id);
          });
        });
      } catch {
      }
      if (Object.keys(_).length === 0) return;
      m.debug_meta = m.debug_meta || {}, m.debug_meta.images = m.debug_meta.images || [];
      const S = m.debug_meta.images;
      Object.keys(_).forEach((b) => {
        S.push({ type: "sourcemap", code_file: b, debug_id: _[b] });
      });
    }(p), typeof i == "number" && i > 0 ? function(m, _, S) {
      if (!m) return null;
      const b = { ...m, ...m.breadcrumbs && { breadcrumbs: m.breadcrumbs.map((E) => ({ ...E, ...E.data && { data: Te(E.data, _, S) } })) }, ...m.user && { user: Te(m.user, _, S) }, ...m.contexts && { contexts: Te(m.contexts, _, S) }, ...m.extra && { extra: Te(m.extra, _, S) } };
      return m.contexts && m.contexts.trace && b.contexts && (b.contexts.trace = m.contexts.trace, m.contexts.trace.data && (b.contexts.trace.data = Te(m.contexts.trace.data, _, S))), m.spans && (b.spans = m.spans.map((E) => (E.data && (E.data = Te(E.data, _, S)), E))), b;
    }(p, i, a) : p));
  }
  const ii = /* @__PURE__ */ new WeakMap(), oi = "Not capturing exception because it's already been captured.";
  class xe {
    __init() {
      this._integrations = {};
    }
    __init2() {
      this._integrationsInitialized = !1;
    }
    __init3() {
      this._numProcessing = 0;
    }
    __init4() {
      this._outcomes = {};
    }
    __init5() {
      this._hooks = {};
    }
    constructor(e) {
      if (xe.prototype.__init.call(this), xe.prototype.__init2.call(this), xe.prototype.__init3.call(this), xe.prototype.__init4.call(this), xe.prototype.__init5.call(this), this._options = e, e.dsn ? this._dsn = ps(e.dsn) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn("No DSN provided, client will not do anything."), this._dsn) {
        const t = function(r, i = {}) {
          const a = typeof i == "string" ? i : i.tunnel, c = typeof i != "string" && i._metadata ? i._metadata.sdk : void 0;
          return a || `${function(l) {
            return `${function(u) {
              const h = u.protocol ? `${u.protocol}:` : "", p = u.port ? `:${u.port}` : "";
              return `${h}//${u.host}${p}${u.path ? `/${u.path}` : ""}/api/`;
            }(l)}${l.projectId}/envelope/`;
          }(r)}?${As(r, c)}`;
        }(this._dsn, e);
        this._transport = e.transport({ recordDroppedEvent: this.recordDroppedEvent.bind(this), ...e.transportOptions, url: t });
      }
    }
    captureException(e, t, r) {
      if (Kr(e)) return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.log(oi));
      let i = t && t.event_id;
      return this._process(this.eventFromException(e, t).then((a) => this._captureEvent(a, t, r)).then((a) => {
        i = a;
      })), i;
    }
    captureMessage(e, t, r, i) {
      let a = r && r.event_id;
      const c = ao(e) ? this.eventFromMessage(String(e), t, r) : this.eventFromException(e, r);
      return this._process(c.then((l) => this._captureEvent(l, r, i)).then((l) => {
        a = l;
      })), a;
    }
    captureEvent(e, t, r) {
      if (t && t.originalException && Kr(t.originalException)) return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.log(oi));
      let i = t && t.event_id;
      return this._process(this._captureEvent(e, t, r).then((a) => {
        i = a;
      })), i;
    }
    captureSession(e) {
      this._isEnabled() ? typeof e.release != "string" ? (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn("Discarded session because of missing or non-string release") : (this.sendSession(e), nt(e, { init: !1 })) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn("SDK not enabled, will not capture session.");
    }
    getDsn() {
      return this._dsn;
    }
    getOptions() {
      return this._options;
    }
    getSdkMetadata() {
      return this._options._metadata;
    }
    getTransport() {
      return this._transport;
    }
    flush(e) {
      const t = this._transport;
      return t ? this._isClientDoneProcessing(e).then((r) => t.flush(e).then((i) => r && i)) : Ye(!0);
    }
    close(e) {
      return this.flush(e).then((t) => (this.getOptions().enabled = !1, t));
    }
    setupIntegrations() {
      this._isEnabled() && !this._integrationsInitialized && (this._integrations = function(e) {
        const t = {};
        return e.forEach((r) => {
          r && ri(r, t);
        }), t;
      }(this._options.integrations), this._integrationsInitialized = !0);
    }
    getIntegrationById(e) {
      return this._integrations[e];
    }
    getIntegration(e) {
      try {
        return this._integrations[e.id] || null;
      } catch {
        return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn(`Cannot retrieve integration ${e.id} from the current Client`), null;
      }
    }
    addIntegration(e) {
      ri(e, this._integrations);
    }
    sendEvent(e, t = {}) {
      if (this._dsn) {
        let r = Os(e, this._dsn, this._options._metadata, this._options.tunnel);
        for (const a of t.attachments || []) r = ys(r, Ss(a, this._options.transportOptions && this._options.transportOptions.textEncoder));
        const i = this._sendEnvelope(r);
        i && i.then((a) => this.emit("afterSendEvent", e, a), null);
      }
    }
    sendSession(e) {
      if (this._dsn) {
        const t = function(r, i, a, c) {
          const l = mo(a);
          return vt({ sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...l && { sdk: l }, ...!!c && { dsn: Jt(i) } }, ["aggregates" in r ? [{ type: "sessions" }, r] : [{ type: "session" }, r.toJSON()]]);
        }(e, this._dsn, this._options._metadata, this._options.tunnel);
        this._sendEnvelope(t);
      }
    }
    recordDroppedEvent(e, t, r) {
      if (this._options.sendClientReports) {
        const i = `${e}:${t}`;
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.log(`Adding outcome: "${i}"`), this._outcomes[i] = this._outcomes[i] + 1 || 1;
      }
    }
    on(e, t) {
      this._hooks[e] || (this._hooks[e] = []), this._hooks[e].push(t);
    }
    emit(e, ...t) {
      this._hooks[e] && this._hooks[e].forEach((r) => r(...t));
    }
    _updateSessionFromEvent(e, t) {
      let r = !1, i = !1;
      const a = t.exception && t.exception.values;
      if (a) {
        i = !0;
        for (const l of a) {
          const u = l.mechanism;
          if (u && u.handled === !1) {
            r = !0;
            break;
          }
        }
      }
      const c = e.status === "ok";
      (c && e.errors === 0 || c && r) && (nt(e, { ...r && { status: "crashed" }, errors: e.errors || Number(i || r) }), this.captureSession(e));
    }
    _isClientDoneProcessing(e) {
      return new X((t) => {
        let r = 0;
        const i = setInterval(() => {
          this._numProcessing == 0 ? (clearInterval(i), t(!0)) : (r += 1, e && r >= e && (clearInterval(i), t(!1)));
        }, 1);
      });
    }
    _isEnabled() {
      return this.getOptions().enabled !== !1 && this._dsn !== void 0;
    }
    _prepareEvent(e, t, r) {
      const i = this.getOptions(), a = Object.keys(this._integrations);
      return !t.integrations && a.length > 0 && (t.integrations = a), Ls(i, e, t, r).then((c) => {
        if (c === null) return c;
        const { propagationContext: l } = c.sdkProcessingMetadata || {};
        if (!(c.contexts && c.contexts.trace) && l) {
          const { traceId: u, spanId: h, parentSpanId: p, dsc: m } = l;
          c.contexts = { trace: { trace_id: u, span_id: h, parent_span_id: p }, ...c.contexts };
          const _ = m || function(S, b, E) {
            const T = b.getOptions(), { publicKey: O } = b.getDsn() || {}, { segment: $ } = E && E.getUser() || {}, Se = tn({ environment: T.environment || er, release: T.release, user_segment: $, public_key: O, trace_id: S });
            return b.emit && b.emit("createDsc", Se), Se;
          }(u, this, r);
          c.sdkProcessingMetadata = { dynamicSamplingContext: _, ...c.sdkProcessingMetadata };
        }
        return c;
      });
    }
    _captureEvent(e, t = {}, r) {
      return this._processEvent(e, t, r).then((i) => i.event_id, (i) => {
        if (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) {
          const a = i;
          a.logLevel === "log" ? L.log(a.message) : L.warn(a);
        }
      });
    }
    _processEvent(e, t, r) {
      const i = this.getOptions(), { sampleRate: a } = i;
      if (!this._isEnabled()) return Wt(new ae("SDK not enabled, will not capture event.", "log"));
      const c = si(e), l = ai(e), u = e.type || "error", h = `before send for type \`${u}\``;
      if (l && typeof a == "number" && Math.random() > a) return this.recordDroppedEvent("sample_rate", "error", e), Wt(new ae(`Discarding event because it's not included in the random sample (sampling rate = ${a})`, "log"));
      const p = u === "replay_event" ? "replay" : u;
      return this._prepareEvent(e, t, r).then((m) => {
        if (m === null) throw this.recordDroppedEvent("event_processor", p, e), new ae("An event processor returned `null`, will not send event.", "log");
        if (t.data && t.data.__sentry__ === !0) return m;
        const _ = function(S, b, E) {
          const { beforeSend: T, beforeSendTransaction: O } = S;
          return ai(b) && T ? T(b, E) : si(b) && O ? O(b, E) : b;
        }(i, m, t);
        return function(S, b) {
          const E = `${b} must return \`null\` or a valid event.`;
          if (Kn(S)) return S.then((T) => {
            if (!tt(T) && T !== null) throw new ae(E);
            return T;
          }, (T) => {
            throw new ae(`${b} rejected with ${T}`);
          });
          if (!tt(S) && S !== null) throw new ae(E);
          return S;
        }(_, h);
      }).then((m) => {
        if (m === null) throw this.recordDroppedEvent("before_send", p, e), new ae(`${h} returned \`null\`, will not send event.`, "log");
        const _ = r && r.getSession();
        !c && _ && this._updateSessionFromEvent(_, m);
        const S = m.transaction_info;
        if (c && S && m.transaction !== e.transaction) {
          const b = "custom";
          m.transaction_info = { ...S, source: b };
        }
        return this.sendEvent(m, t), m;
      }).then(null, (m) => {
        throw m instanceof ae ? m : (this.captureException(m, { data: { __sentry__: !0 }, originalException: m }), new ae(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${m}`));
      });
    }
    _process(e) {
      this._numProcessing++, e.then((t) => (this._numProcessing--, t), (t) => (this._numProcessing--, t));
    }
    _sendEnvelope(e) {
      if (this._transport && this._dsn) return this.emit("beforeEnvelope", e), this._transport.send(e).then(null, (t) => {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.error("Error while sending event:", t);
      });
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.error("Transport disabled");
    }
    _clearOutcomes() {
      const e = this._outcomes;
      return this._outcomes = {}, Object.keys(e).map((t) => {
        const [r, i] = t.split(":");
        return { reason: r, category: i, quantity: e[t] };
      });
    }
  }
  function ai(n) {
    return n.type === void 0;
  }
  function si(n) {
    return n.type === "transaction";
  }
  const Ps = 30;
  function Is(n, e, t = vs(n.bufferSize || Ps)) {
    let r = {};
    function i(a) {
      const c = [];
      if (Xr(a, (h, p) => {
        const m = Zr(p);
        if (function(_, S, b = Date.now()) {
          return function(E, T) {
            return E[T] || E.all || 0;
          }(_, S) > b;
        }(r, m)) {
          const _ = ci(h, p);
          n.recordDroppedEvent("ratelimit_backoff", m, _);
        } else c.push(h);
      }), c.length === 0) return Ye();
      const l = vt(a[0], c), u = (h) => {
        Xr(l, (p, m) => {
          const _ = ci(p, m);
          n.recordDroppedEvent(h, Zr(m), _);
        });
      };
      return t.add(() => e({ body: bs(l, n.textEncoder) }).then((h) => (h.statusCode !== void 0 && (h.statusCode < 200 || h.statusCode >= 300) && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn(`Sentry responded with status code ${h.statusCode} to sent event.`), r = ks(r, h), h), (h) => {
        throw u("network_error"), h;
      })).then((h) => h, (h) => {
        if (h instanceof ae) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.error("Skipped sending event because buffer is full."), u("queue_overflow"), Ye();
        throw h;
      });
    }
    return i.__sentry__baseTransport__ = !0, { send: i, flush: (a) => t.drain(a) };
  }
  function ci(n, e) {
    if (e === "event" || e === "transaction") return Array.isArray(n) ? n[1] : void 0;
  }
  const li = "7.60.1";
  let ui;
  class _t {
    constructor() {
      _t.prototype.__init.call(this);
    }
    static __initStatic() {
      this.id = "FunctionToString";
    }
    __init() {
      this.name = _t.id;
    }
    setupOnce() {
      ui = Function.prototype.toString;
      try {
        Function.prototype.toString = function(...e) {
          const t = Zn(this) || this;
          return ui.apply(t, e);
        };
      } catch {
      }
    }
  }
  _t.__initStatic();
  const Ds = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/], Ns = [/^.*healthcheck.*$/, /^.*healthy.*$/, /^.*live.*$/, /^.*ready.*$/, /^.*heartbeat.*$/, /^.*\/health$/, /^.*\/healthz$/];
  class He {
    static __initStatic() {
      this.id = "InboundFilters";
    }
    __init() {
      this.name = He.id;
    }
    constructor(e = {}) {
      this._options = e, He.prototype.__init.call(this);
    }
    setupOnce(e, t) {
      const r = (i) => {
        const a = t();
        if (a) {
          const c = a.getIntegration(He);
          if (c) {
            const l = a.getClient(), u = l ? l.getOptions() : {}, h = function(p = {}, m = {}) {
              return { allowUrls: [...p.allowUrls || [], ...m.allowUrls || []], denyUrls: [...p.denyUrls || [], ...m.denyUrls || []], ignoreErrors: [...p.ignoreErrors || [], ...m.ignoreErrors || [], ...p.disableErrorDefaults ? [] : Ds], ignoreTransactions: [...p.ignoreTransactions || [], ...m.ignoreTransactions || [], ...p.disableTransactionDefaults ? [] : Ns], ignoreInternal: p.ignoreInternal === void 0 || p.ignoreInternal };
            }(c._options, u);
            return function(p, m) {
              return m.ignoreInternal && function(_) {
                try {
                  return _.exception.values[0].type === "SentryError";
                } catch {
                }
                return !1;
              }(p) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn(`Event dropped due to being internal Sentry Error.
Event: ${ke(p)}`), !0) : function(_, S) {
                return _.type || !S || !S.length ? !1 : function(b) {
                  if (b.message) return [b.message];
                  if (b.exception) {
                    const { values: E } = b.exception;
                    try {
                      const { type: T = "", value: O = "" } = E && E[E.length - 1] || {};
                      return [`${O}`, `${T}: ${O}`];
                    } catch {
                      return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.error(`Cannot extract message for event ${ke(b)}`), [];
                    }
                  }
                  return [];
                }(_).some((b) => wt(b, S));
              }(p, m.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${ke(p)}`), !0) : function(_, S) {
                if (_.type !== "transaction" || !S || !S.length) return !1;
                const b = _.transaction;
                return !!b && wt(b, S);
              }(p, m.ignoreTransactions) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${ke(p)}`), !0) : function(_, S) {
                if (!S || !S.length) return !1;
                const b = Lt(_);
                return !!b && wt(b, S);
              }(p, m.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${ke(p)}.
Url: ${Lt(p)}`), !0) : function(_, S) {
                if (!S || !S.length) return !0;
                const b = Lt(_);
                return !b || wt(b, S);
              }(p, m.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${ke(p)}.
Url: ${Lt(p)}`), !0);
            }(i, h) ? null : i;
          }
        }
        return i;
      };
      r.id = this.name, e(r);
    }
  }
  function Lt(n) {
    try {
      let e;
      try {
        e = n.exception.values[0].stacktrace.frames;
      } catch {
      }
      return e ? function(t = []) {
        for (let r = t.length - 1; r >= 0; r--) {
          const i = t[r];
          if (i && i.filename !== "<anonymous>" && i.filename !== "[native code]") return i.filename || null;
        }
        return null;
      }(e) : null;
    } catch {
      return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.error(`Cannot extract url for event ${ke(n)}`), null;
    }
  }
  He.__initStatic();
  var Rs = Object.freeze({ __proto__: null, FunctionToString: _t, InboundFilters: He });
  const j = ie;
  let Pn = 0;
  function bo() {
    return Pn > 0;
  }
  function rt(n, e = {}, t) {
    if (typeof n != "function") return n;
    try {
      const i = n.__sentry_wrapped__;
      if (i) return i;
      if (Zn(n)) return n;
    } catch {
      return n;
    }
    const r = function() {
      const i = Array.prototype.slice.call(arguments);
      try {
        t && typeof t == "function" && t.apply(this, arguments);
        const c = i.map((l) => rt(l, e));
        return n.apply(this, c);
      } catch (c) {
        throw Pn++, setTimeout(() => {
          Pn--;
        }), a = (l) => {
          var u, h;
          l.addEventProcessor((p) => (e.mechanism && (Cn(p, void 0), gt(p, e.mechanism)), p.extra = { ...p.extra, arguments: i }, p)), u = c, te().captureException(u, { captureContext: h });
        }, te().withScope(a), c;
      }
      var a;
    };
    try {
      for (const i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
    } catch {
    }
    co(r, n), Xn(n, "__sentry_wrapped__", r);
    try {
      Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", { get: () => n.name });
    } catch {
    }
    return r;
  }
  function So(n, e) {
    const t = nr(n, e), r = { type: e && e.name, value: js(e) };
    return t.length && (r.stacktrace = { frames: t }), r.type === void 0 && r.value === "" && (r.value = "Unrecoverable error caught"), r;
  }
  function hn(n, e) {
    return { exception: { values: [So(n, e)] } };
  }
  function nr(n, e) {
    const t = e.stacktrace || e.stack || "", r = function(i) {
      if (i) {
        if (typeof i.framesToPop == "number") return i.framesToPop;
        if (xs.test(i.message)) return 1;
      }
      return 0;
    }(e);
    try {
      return n(t, r);
    } catch {
    }
    return [];
  }
  const xs = /Minified React error #\d+;/i;
  function js(n) {
    const e = n && n.message;
    return e ? e.error && typeof e.error.message == "string" ? e.error.message : e : "No error message";
  }
  function rr(n, e, t, r, i) {
    let a;
    if (Hn(e) && e.error)
      return hn(n, e.error);
    if (Fr(e) || it(e, "DOMException")) {
      const c = e;
      if ("stack" in e) a = hn(n, e);
      else {
        const l = c.name || (Fr(c) ? "DOMError" : "DOMException"), u = c.message ? `${l}: ${c.message}` : l;
        a = In(n, u, t, r), Cn(a, u);
      }
      return "code" in c && (a.tags = { ...a.tags, "DOMException.code": `${c.code}` }), a;
    }
    return oo(e) ? hn(n, e) : tt(e) || Gt(e) ? (a = function(c, l, u, h) {
      const p = te().getClient(), m = p && p.getOptions().normalizeDepth, _ = { exception: { values: [{ type: Gt(l) ? l.constructor.name : h ? "UnhandledRejection" : "Error", value: Fs(l, { isUnhandledRejection: h }) }] }, extra: { __serialized__: ho(l, m) } };
      if (u) {
        const S = nr(c, u);
        S.length && (_.exception.values[0].stacktrace = { frames: S });
      }
      return _;
    }(n, e, t, i), gt(a, { synthetic: !0 }), a) : (a = In(n, e, t, r), Cn(a, `${e}`), gt(a, { synthetic: !0 }), a);
  }
  function In(n, e, t, r) {
    const i = { message: e };
    if (r && t) {
      const a = nr(n, t);
      a.length && (i.exception = { values: [{ value: e, stacktrace: { frames: a } }] });
    }
    return i;
  }
  function Fs(n, { isUnhandledRejection: e }) {
    const t = function(i, a = 40) {
      const c = Object.keys(lo(i));
      if (c.sort(), !c.length) return "[object has no keys]";
      if (c[0].length >= a) return ze(c[0], a);
      for (let l = c.length; l > 0; l--) {
        const u = c.slice(0, l).join(", ");
        if (!(u.length > a)) return l === c.length ? u : ze(u, a);
      }
      return "";
    }(n), r = e ? "promise rejection" : "exception";
    return Hn(n) ? `Event \`ErrorEvent\` captured as ${r} with message \`${n.message}\`` : Gt(n) ? `Event \`${function(i) {
      try {
        const a = Object.getPrototypeOf(i);
        return a ? a.constructor.name : void 0;
      } catch {
      }
    }(n)}\` (type=${n.type}) captured as ${r}` : `Object captured as ${r} with keys: ${t}`;
  }
  const di = 1024, Eo = "Breadcrumbs";
  class yt {
    static __initStatic() {
      this.id = Eo;
    }
    __init() {
      this.name = yt.id;
    }
    constructor(e) {
      yt.prototype.__init.call(this), this.options = { console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0, ...e };
    }
    setupOnce() {
      this.options.console && Re("console", Bs), this.options.dom && Re("dom", /* @__PURE__ */ function(e) {
        function t(r) {
          let i, a = typeof e == "object" ? e.serializeAttribute : void 0, c = typeof e == "object" && typeof e.maxStringLength == "number" ? e.maxStringLength : void 0;
          c && c > di && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${c} was configured. Sentry will use 1024 instead.`), c = di), typeof a == "string" && (a = [a]);
          try {
            const l = r.event;
            i = function(u) {
              return !!u && !!u.target;
            }(l) ? En(l.target, { keyAttrs: a, maxStringLength: c }) : En(l, { keyAttrs: a, maxStringLength: c });
          } catch {
            i = "<unknown>";
          }
          i.length !== 0 && te().addBreadcrumb({ category: `ui.${r.name}`, message: i }, { event: r.event, name: r.name, global: r.global });
        }
        return t;
      }(this.options.dom)), this.options.xhr && Re("xhr", Us), this.options.fetch && Re("fetch", Vs), this.options.history && Re("history", Ys);
    }
    addSentryBreadcrumb(e) {
      this.options.sentry && te().addBreadcrumb({ category: "sentry." + (e.type === "transaction" ? "transaction" : "event"), event_id: e.event_id, level: e.level, message: ke(e) }, { event: e });
    }
  }
  function Bs(n) {
    for (let r = 0; r < n.args.length; r++) if (n.args[r] === "ref=Ref<") {
      n.args[r + 1] = "viewRef";
      break;
    }
    const e = { category: "console", data: { arguments: n.args, logger: "console" }, level: (t = n.level, t === "warn" ? "warning" : _s.includes(t) ? t : "log"), message: Br(n.args, " ") };
    var t;
    if (n.level === "assert") {
      if (n.args[0] !== !1) return;
      e.message = `Assertion failed: ${Br(n.args.slice(1), " ") || "console.assert"}`, e.data.arguments = n.args.slice(1);
    }
    te().addBreadcrumb(e, { input: n.args, level: n.level });
  }
  function Us(n) {
    const { startTimestamp: e, endTimestamp: t } = n, r = n.xhr[ut];
    if (!e || !t || !r) return;
    const { method: i, url: a, status_code: c, body: l } = r, u = { method: i, url: a, status_code: c }, h = { xhr: n.xhr, input: l, startTimestamp: e, endTimestamp: t };
    te().addBreadcrumb({ category: "xhr", data: u, type: "http" }, h);
  }
  function Vs(n) {
    const { startTimestamp: e, endTimestamp: t } = n;
    if (t && (!n.fetchData.url.match(/sentry_key/) || n.fetchData.method !== "POST")) if (n.error) {
      const r = n.fetchData, i = { data: n.error, input: n.args, startTimestamp: e, endTimestamp: t };
      te().addBreadcrumb({ category: "fetch", data: r, level: "error", type: "http" }, i);
    } else {
      const r = { ...n.fetchData, status_code: n.response && n.response.status }, i = { input: n.args, response: n.response, startTimestamp: e, endTimestamp: t };
      te().addBreadcrumb({ category: "fetch", data: r, type: "http" }, i);
    }
  }
  function Ys(n) {
    let e = n.from, t = n.to;
    const r = un(j.location.href);
    let i = un(e);
    const a = un(t);
    i.path || (i = r), r.protocol === a.protocol && r.host === a.host && (t = a.relative), r.protocol === i.protocol && r.host === i.host && (e = i.relative), te().addBreadcrumb({ category: "navigation", data: { from: e, to: t } });
  }
  yt.__initStatic();
  class $s extends xe {
    constructor(e) {
      const t = j.SENTRY_SDK_SOURCE || "npm";
      e._metadata = e._metadata || {}, e._metadata.sdk = e._metadata.sdk || { name: "sentry.javascript.browser", packages: [{ name: `${t}:@sentry/browser`, version: li }], version: li }, super(e), e.sendClientReports && j.document && j.document.addEventListener("visibilitychange", () => {
        j.document.visibilityState === "hidden" && this._flushOutcomes();
      });
    }
    eventFromException(e, t) {
      return function(r, i, a, c) {
        const l = rr(r, i, a && a.syntheticException || void 0, c);
        return gt(l), l.level = "error", a && a.event_id && (l.event_id = a.event_id), Ye(l);
      }(this._options.stackParser, e, t, this._options.attachStacktrace);
    }
    eventFromMessage(e, t = "info", r) {
      return function(i, a, c = "info", l, u) {
        const h = In(i, a, l && l.syntheticException || void 0, u);
        return h.level = c, l && l.event_id && (h.event_id = l.event_id), Ye(h);
      }(this._options.stackParser, e, t, r, this._options.attachStacktrace);
    }
    sendEvent(e, t) {
      const r = this.getIntegrationById(Eo);
      r && r.addSentryBreadcrumb && r.addSentryBreadcrumb(e), super.sendEvent(e, t);
    }
    captureUserFeedback(e) {
      if (!this._isEnabled()) return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn("SDK not enabled, will not capture user feedback."));
      const t = function(r, { metadata: i, tunnel: a, dsn: c }) {
        const l = { event_id: r.event_id, sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...i && i.sdk && { sdk: { name: i.sdk.name, version: i.sdk.version } }, ...!!a && !!c && { dsn: Jt(c) } };
        return vt(l, [/* @__PURE__ */ function(h) {
          return [{ type: "user_report" }, h];
        }(r)]);
      }(e, { metadata: this.getSdkMetadata(), dsn: this.getDsn(), tunnel: this.getOptions().tunnel });
      this._sendEnvelope(t);
    }
    _prepareEvent(e, t, r) {
      return e.platform = e.platform || "javascript", super._prepareEvent(e, t, r);
    }
    _flushOutcomes() {
      const e = this._clearOutcomes();
      if (e.length === 0) return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.log("No outcomes to send"));
      if (!this._dsn) return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.log("No dsn provided, will not send outcomes"));
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.log("Sending outcomes:", e);
      const t = (r = e, vt((i = this._options.tunnel && Jt(this._dsn)) ? { dsn: i } : {}, [[{ type: "client_report" }, { timestamp: a || nn(), discarded_events: r }]]));
      var r, i, a;
      this._sendEnvelope(t);
    }
  }
  let st;
  function Gs(n, e = function() {
    if (st) return st;
    if (kn(j.fetch)) return st = j.fetch.bind(j);
    const t = j.document;
    let r = j.fetch;
    if (t && typeof t.createElement == "function") try {
      const i = t.createElement("iframe");
      i.hidden = !0, t.head.appendChild(i);
      const a = i.contentWindow;
      a && a.fetch && (r = a.fetch), t.head.removeChild(i);
    } catch (i) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", i);
    }
    return st = r.bind(j);
  }()) {
    let t = 0, r = 0;
    return Is(n, function(i) {
      const a = i.body.length;
      t += a, r++;
      const c = { body: i.body, method: "POST", referrerPolicy: "origin", headers: n.headers, keepalive: t <= 6e4 && r < 15, ...n.fetchOptions };
      try {
        return e(n.url, c).then((l) => (t -= a, r--, { statusCode: l.status, headers: { "x-sentry-rate-limits": l.headers.get("X-Sentry-Rate-Limits"), "retry-after": l.headers.get("Retry-After") } }));
      } catch (l) {
        return st = void 0, t -= a, r--, Wt(l);
      }
    });
  }
  class Me {
    static __initStatic() {
      this.id = "GlobalHandlers";
    }
    __init() {
      this.name = Me.id;
    }
    __init2() {
      this._installFunc = { onerror: qs, onunhandledrejection: Js };
    }
    constructor(e) {
      Me.prototype.__init.call(this), Me.prototype.__init2.call(this), this._options = { onerror: !0, onunhandledrejection: !0, ...e };
    }
    setupOnce() {
      Error.stackTraceLimit = 50;
      const e = this._options;
      for (const r in e) {
        const i = this._installFunc[r];
        i && e[r] && (t = r, (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.log(`Global Handler attached: ${t}`), i(), this._installFunc[r] = void 0);
      }
      var t;
    }
  }
  function qs() {
    Re("error", (n) => {
      const [e, t, r] = ko();
      if (!e.getIntegration(Me)) return;
      const { msg: i, url: a, line: c, column: l, error: u } = n;
      if (bo() || u && u.__sentry_own_request__) return;
      const h = u === void 0 && Ue(i) ? function(p, m, _, S) {
        const b = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        let E = Hn(p) ? p.message : p, T = "Error";
        const O = E.match(b);
        return O && (T = O[1], E = O[2]), hi({ exception: { values: [{ type: T, value: E }] } }, m, _, S);
      }(i, a, c, l) : hi(rr(t, u || i, void 0, r, !1), a, c, l);
      h.level = "error", wo(e, u, h, "onerror");
    });
  }
  function Js() {
    Re("unhandledrejection", (n) => {
      const [e, t, r] = ko();
      if (!e.getIntegration(Me)) return;
      let i = n;
      try {
        "reason" in n ? i = n.reason : "detail" in n && "reason" in n.detail && (i = n.detail.reason);
      } catch {
      }
      if (bo() || i && i.__sentry_own_request__) return !0;
      const a = ao(i) ? { exception: { values: [{ type: "UnhandledRejection", value: `Non-Error promise rejection captured with value: ${String(i)}` }] } } : rr(t, i, void 0, r, !0);
      a.level = "error", wo(e, i, a, "onunhandledrejection");
    });
  }
  function hi(n, e, t, r) {
    const i = n.exception = n.exception || {}, a = i.values = i.values || [], c = a[0] = a[0] || {}, l = c.stacktrace = c.stacktrace || {}, u = l.frames = l.frames || [], h = isNaN(parseInt(r, 10)) ? void 0 : r, p = isNaN(parseInt(t, 10)) ? void 0 : t, m = Ue(e) && e.length > 0 ? e : function() {
      try {
        return ls.document.location.href;
      } catch {
        return "";
      }
    }();
    return u.length === 0 && u.push({ colno: h, filename: m, function: "?", in_app: !0, lineno: p }), n;
  }
  function wo(n, e, t, r) {
    gt(t, { handled: !1, type: r }), n.captureEvent(t, { originalException: e });
  }
  function ko() {
    const n = te(), e = n.getClient(), t = e && e.getOptions() || { stackParser: () => [], attachStacktrace: !1 };
    return [n, t.stackParser, t.attachStacktrace];
  }
  Me.__initStatic();
  const Ws = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
  class bt {
    static __initStatic() {
      this.id = "TryCatch";
    }
    __init() {
      this.name = bt.id;
    }
    constructor(e) {
      bt.prototype.__init.call(this), this._options = { XMLHttpRequest: !0, eventTarget: !0, requestAnimationFrame: !0, setInterval: !0, setTimeout: !0, ...e };
    }
    setupOnce() {
      this._options.setTimeout && W(j, "setTimeout", pi), this._options.setInterval && W(j, "setInterval", pi), this._options.requestAnimationFrame && W(j, "requestAnimationFrame", zs), this._options.XMLHttpRequest && "XMLHttpRequest" in j && W(XMLHttpRequest.prototype, "send", Hs);
      const e = this._options.eventTarget;
      e && (Array.isArray(e) ? e : Ws).forEach(Ks);
    }
  }
  function pi(n) {
    return function(...e) {
      const t = e[0];
      return e[0] = rt(t, { mechanism: { data: { function: Oe(n) }, handled: !0, type: "instrument" } }), n.apply(this, e);
    };
  }
  function zs(n) {
    return function(e) {
      return n.apply(this, [rt(e, { mechanism: { data: { function: "requestAnimationFrame", handler: Oe(n) }, handled: !0, type: "instrument" } })]);
    };
  }
  function Hs(n) {
    return function(...e) {
      const t = this;
      return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((r) => {
        r in t && typeof t[r] == "function" && W(t, r, function(i) {
          const a = { mechanism: { data: { function: r, handler: Oe(i) }, handled: !0, type: "instrument" } }, c = Zn(i);
          return c && (a.mechanism.data.handler = Oe(c)), rt(i, a);
        });
      }), n.apply(this, e);
    };
  }
  function Ks(n) {
    const e = j, t = e[n] && e[n].prototype;
    t && t.hasOwnProperty && t.hasOwnProperty("addEventListener") && (W(t, "addEventListener", function(r) {
      return function(i, a, c) {
        try {
          typeof a.handleEvent == "function" && (a.handleEvent = rt(a.handleEvent, { mechanism: { data: { function: "handleEvent", handler: Oe(a), target: n }, handled: !0, type: "instrument" } }));
        } catch {
        }
        return r.apply(this, [i, rt(a, { mechanism: { data: { function: "addEventListener", handler: Oe(a), target: n }, handled: !0, type: "instrument" } }), c]);
      };
    }), W(t, "removeEventListener", function(r) {
      return function(i, a, c) {
        const l = a;
        try {
          const u = l && l.__sentry_wrapped__;
          u && r.call(this, i, u, c);
        } catch {
        }
        return r.call(this, i, l, c);
      };
    }));
  }
  bt.__initStatic();
  class Ke {
    static __initStatic() {
      this.id = "LinkedErrors";
    }
    __init() {
      this.name = Ke.id;
    }
    constructor(e = {}) {
      Ke.prototype.__init.call(this), this._key = e.key || "cause", this._limit = e.limit || 5;
    }
    setupOnce(e, t) {
      e((r, i) => {
        const a = t(), c = a.getClient(), l = a.getIntegration(Ke);
        if (!c || !l) return r;
        const u = c.getOptions();
        return cs(So, u.stackParser, u.maxValueLength, l._key, l._limit, r, i), r;
      });
    }
  }
  Ke.__initStatic();
  class Qe {
    constructor() {
      Qe.prototype.__init.call(this);
    }
    static __initStatic() {
      this.id = "HttpContext";
    }
    __init() {
      this.name = Qe.id;
    }
    setupOnce() {
      vo((e) => {
        if (te().getIntegration(Qe)) {
          if (!j.navigator && !j.location && !j.document) return e;
          const t = e.request && e.request.url || j.location && j.location.href, { referrer: r } = j.document || {}, { userAgent: i } = j.navigator || {}, a = { ...e.request && e.request.headers, ...r && { Referer: r }, ...i && { "User-Agent": i } }, c = { ...e.request, ...t && { url: t }, headers: a };
          return { ...e, request: c };
        }
        return e;
      });
    }
  }
  Qe.__initStatic();
  class Xe {
    constructor() {
      Xe.prototype.__init.call(this);
    }
    static __initStatic() {
      this.id = "Dedupe";
    }
    __init() {
      this.name = Xe.id;
    }
    setupOnce(e, t) {
      const r = (i) => {
        if (i.type) return i;
        const a = t().getIntegration(Xe);
        if (a) {
          try {
            if (function(c, l) {
              return l ? !!(function(u, h) {
                const p = u.message, m = h.message;
                return !(!p && !m || p && !m || !p && m || p !== m || !mi(u, h) || !fi(u, h));
              }(c, l) || function(u, h) {
                const p = gi(h), m = gi(u);
                return !(!p || !m || p.type !== m.type || p.value !== m.value || !mi(u, h) || !fi(u, h));
              }(c, l)) : !1;
            }(i, a._previousEvent)) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && L.warn("Event dropped due to being a duplicate of previously captured event."), null;
          } catch {
            return a._previousEvent = i;
          }
          return a._previousEvent = i;
        }
        return i;
      };
      r.id = this.name, e(r);
    }
  }
  function fi(n, e) {
    let t = vi(n), r = vi(e);
    if (!t && !r) return !0;
    if (t && !r || !t && r || r.length !== t.length) return !1;
    for (let i = 0; i < r.length; i++) {
      const a = r[i], c = t[i];
      if (a.filename !== c.filename || a.lineno !== c.lineno || a.colno !== c.colno || a.function !== c.function) return !1;
    }
    return !0;
  }
  function mi(n, e) {
    let t = n.fingerprint, r = e.fingerprint;
    if (!t && !r) return !0;
    if (t && !r || !t && r) return !1;
    try {
      return t.join("") === r.join("");
    } catch {
      return !1;
    }
  }
  function gi(n) {
    return n.exception && n.exception.values && n.exception.values[0];
  }
  function vi(n) {
    const e = n.exception;
    if (e) try {
      return e.values[0].stacktrace.frames;
    } catch {
      return;
    }
  }
  Xe.__initStatic();
  var Qs = Object.freeze({ __proto__: null, Breadcrumbs: yt, Dedupe: Xe, GlobalHandlers: Me, HttpContext: Qe, LinkedErrors: Ke, TryCatch: bt });
  let To = {};
  j.Sentry && j.Sentry.Integrations && (To = j.Sentry.Integrations);
  const _i = { ...To, ...Rs, ...Qs };
  var Dn = "new", yi = "loading", bi = "loaded", Ht = "joining-meeting", je = "joined-meeting", ve = "left-meeting", _e = "error", Xs = "blocked", Zs = "off", ec = "sendable", tc = "loading", nc = "interrupted", rc = "playable", Nt = "unknown", Co = "full", ic = "lobby", oc = "none", Mo = "base", Ao = "*", ac = "ejected", sc = "nbf-room", cc = "nbf-token", lc = "exp-room", uc = "exp-token", dc = "no-room", hc = "meeting-full", pc = "end-of-life", fc = "not-allowed", mc = "connection-error", gc = "cam-in-use", vc = "mic-in-use", _c = "cam-mic-in-use", yc = "permissions", bc = "undefined-mediadevices", Sc = "not-found", Ec = "constraints", wc = "unknown", Oo = "iframe-ready-for-launch-config", Lo = "iframe-launch-config", Nn = "theme-updated", Rn = "loading", xn = "load-attempt-failed", Rt = "loaded", Po = "started-camera", Io = "camera-error", jn = "joining-meeting", Do = "joined-meeting", No = "left-meeting", Si = "available-devices-updated", Ro = "participant-joined", xo = "participant-updated", jo = "participant-left", Fo = "participant-counts-updated", Bo = "access-state-updated", Uo = "meeting-session-summary-updated", Vo = "meeting-session-state-updated", kc = "meeting-session-data-error", Yo = "waiting-participant-added", $o = "waiting-participant-updated", Go = "waiting-participant-removed", Fn = "track-started", Bn = "track-stopped", qo = "transcription-started", Jo = "transcription-stopped", Wo = "transcription-error", xt = "recording-started", jt = "recording-stopped", zo = "recording-stats", Ho = "recording-error", Ko = "recording-upload-completed", Qo = "recording-data", Xo = "app-message", Zo = "transcription-message", ea = "remote-media-player-started", ta = "remote-media-player-updated", na = "remote-media-player-stopped", ra = "local-screen-share-started", ia = "local-screen-share-stopped", oa = "local-screen-share-canceled", aa = "active-speaker-change", sa = "active-speaker-mode-change", ca = "network-quality-change", la = "network-connection", ua = "cpu-load-change", da = "face-counts-updated", De = "fullscreen", Ne = "exited-fullscreen", ha = "live-streaming-started", pa = "live-streaming-updated", fa = "live-streaming-stopped", ma = "live-streaming-error", ga = "lang-updated", va = "receive-settings-updated", _a = "input-settings-updated", Ft = "nonfatal-error", Bt = "error", Ei = 102400, pn = "iframe-call-message", wi = "local-screen-start", ki = "daily-method-update-live-streaming-endpoints", ct = "transmit-log", dt = "daily-custom-track", Ut = { NONE: "none", BGBLUR: "background-blur", BGIMAGE: "background-image", FACE_DETECTION: "face-detection" }, ya = { NONE: "none", NOISE_CANCELLATION: "noise-cancellation" }, Un = { PLAY: "play", PAUSE: "pause" }, Ti = 10, fn = ["jpg", "png", "jpeg"], Tc = "add-endpoints", Cc = "remove-endpoints";
  function ce() {
    return !N() && typeof window < "u" && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : "";
  }
  function N() {
    return typeof navigator < "u" && navigator.product && navigator.product === "ReactNative";
  }
  function ba() {
    return navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
  }
  function Mc() {
    return !!(navigator && navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) && (function(n, e) {
      if (!n || !e) return !0;
      switch (n) {
        case "Chrome":
          return e.major >= 75;
        case "Safari":
          return RTCRtpTransceiver.prototype.hasOwnProperty("currentDirection") && !(e.major === 13 && e.minor === 0 && e.point === 0);
        case "Firefox":
          return e.major >= 67;
      }
      return !0;
    }($e(), Yn()) || N());
  }
  function Ci() {
    if (N() || !document) return !1;
    var n = document.createElement("iframe");
    return !!n.requestFullscreen || !!n.webkitRequestFullscreen;
  }
  var Ac = function() {
    try {
      var n = document.createElement("canvas"), e = n.getContext("webgl2") != null;
      return n.remove(), e;
    } catch {
      return !1;
    }
  }();
  function Sa() {
    var n = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
    return !N() && !!Ac && (n ? function() {
      return Vn() ? !1 : ["Chrome", "Firefox"].includes($e());
    }() : function() {
      if (Vn()) return !1;
      var e = $e();
      if (e === "Safari") {
        var t = or();
        if (t.major < 15 || t.major === 15 && t.minor < 4) return !1;
      }
      return e === "Chrome" ? ir().major >= 77 : e === "Firefox" ? ar().major >= 97 : ["Chrome", "Firefox", "Safari"].includes(e);
    }());
  }
  var Oc = ["Chrome", "Firefox"];
  function Ea() {
    return !N() && !Vn() && typeof AudioWorkletNode < "u" && Oc.includes($e());
  }
  function Mi() {
    return ba() && !function() {
      var n, e = $e();
      if (!ce()) return !0;
      switch (e) {
        case "Chrome":
          return (n = ir()).major && n.major > 0 && n.major < 75;
        case "Firefox":
          return (n = ar()).major < 91;
        case "Safari":
          return (n = or()).major < 13 || n.major === 13 && n.minor < 1;
        default:
          return !0;
      }
    }();
  }
  function Vn() {
    var n, e, t = ce(), r = t.match(/Mac/) && (!N() && typeof window < "u" && (n = window) !== null && n !== void 0 && (e = n.navigator) !== null && e !== void 0 && e.maxTouchPoints ? window.navigator.maxTouchPoints : 0) >= 5;
    return !!(t.match(/Mobi/) || t.match(/Android/) || r) || !!ce().match(/DailyAnd\//) || void 0;
  }
  function $e() {
    if (typeof window < "u") {
      var n = ce();
      return wa() ? "Safari" : n.indexOf("Edge") > -1 ? "Edge" : n.match(/Chrome\//) ? "Chrome" : n.indexOf("Safari") > -1 ? "Safari" : n.indexOf("Firefox") > -1 ? "Firefox" : n.indexOf("MSIE") > -1 || n.indexOf(".NET") > -1 ? "IE" : "Unknown Browser";
    }
  }
  function Yn() {
    switch ($e()) {
      case "Chrome":
        return ir();
      case "Safari":
        return or();
      case "Firefox":
        return ar();
      case "Edge":
        return function() {
          var n = 0, e = 0;
          if (typeof window < "u") {
            var t = ce().match(/Edge\/(\d+).(\d+)/);
            if (t) try {
              n = parseInt(t[1]), e = parseInt(t[2]);
            } catch {
            }
          }
          return { major: n, minor: e };
        }();
    }
  }
  function ir() {
    var n = 0, e = 0, t = 0, r = 0, i = !1;
    if (typeof window < "u") {
      var a = ce(), c = a.match(/Chrome\/(\d+).(\d+).(\d+).(\d+)/);
      if (c) try {
        n = parseInt(c[1]), e = parseInt(c[2]), t = parseInt(c[3]), r = parseInt(c[4]), i = a.indexOf("OPR/") > -1;
      } catch {
      }
    }
    return { major: n, minor: e, build: t, patch: r, opera: i };
  }
  function wa() {
    return !!ce().match(/iPad|iPhone|iPod/i) && ba();
  }
  function or() {
    var n = 0, e = 0, t = 0;
    if (typeof window < "u") {
      var r = ce().match(/Version\/(\d+).(\d+)(.(\d+))?/);
      if (r) try {
        n = parseInt(r[1]), e = parseInt(r[2]), t = parseInt(r[4]);
      } catch {
      }
      else wa() && (n = 14, e = 0, t = 3);
    }
    return { major: n, minor: e, point: t };
  }
  function ar() {
    var n = 0, e = 0;
    if (typeof window < "u") {
      var t = ce().match(/Firefox\/(\d+).(\d+)/);
      if (t) try {
        n = parseInt(t[1]), e = parseInt(t[2]);
      } catch {
      }
    }
    return { major: n, minor: e };
  }
  var ka = function() {
    function n() {
      le(this, n);
    }
    return ue(n, [{ key: "addListenerForMessagesFromCallMachine", value: function(e, t, r) {
      at();
    } }, { key: "addListenerForMessagesFromDailyJs", value: function(e, t, r) {
      at();
    } }, { key: "sendMessageToCallMachine", value: function(e, t, r, i) {
      at();
    } }, { key: "sendMessageToDailyJs", value: function(e, t) {
      at();
    } }, { key: "removeListener", value: function(e) {
      at();
    } }]), n;
  }();
  function Ai(n, e) {
    var t = Object.keys(n);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(n);
      e && (r = r.filter(function(i) {
        return Object.getOwnPropertyDescriptor(n, i).enumerable;
      })), t.push.apply(t, r);
    }
    return t;
  }
  function mn(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e] != null ? arguments[e] : {};
      e % 2 ? Ai(Object(t), !0).forEach(function(r) {
        we(n, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Ai(Object(t)).forEach(function(r) {
        Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return n;
  }
  function Lc(n) {
    var e = function() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
      if (typeof Proxy == "function") return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }();
    return function() {
      var t, r = se(n);
      if (e) {
        var i = se(this).constructor;
        t = Reflect.construct(r, arguments, i);
      } else t = r.apply(this, arguments);
      return Zt(this, t);
    };
  }
  var Pc = function(n) {
    Xt(t, ka);
    var e = Lc(t);
    function t() {
      var r;
      return le(this, t), (r = e.call(this))._wrappedListeners = {}, r._messageCallbacks = {}, r;
    }
    return ue(t, [{ key: "addListenerForMessagesFromCallMachine", value: function(r, i, a) {
      var c = this, l = function(u) {
        if (u.data && u.data.what === "iframe-call-message" && (!u.data.callFrameId || u.data.callFrameId === i) && (!u.data.from || u.data.from !== "module")) {
          var h = mn({}, u.data);
          if (delete h.from, h.callbackStamp && c._messageCallbacks[h.callbackStamp]) {
            var p = h.callbackStamp;
            c._messageCallbacks[p].call(a, h), delete c._messageCallbacks[p];
          }
          delete h.what, delete h.callbackStamp, r.call(a, h);
        }
      };
      this._wrappedListeners[r] = l, window.addEventListener("message", l);
    } }, { key: "addListenerForMessagesFromDailyJs", value: function(r, i, a) {
      var c = function(l) {
        if (!(!l.data || l.data.what !== pn || !l.data.action || l.data.from && l.data.from !== "module" || l.data.callFrameId && i && l.data.callFrameId !== i)) {
          var u = l.data;
          r.call(a, u);
        }
      };
      this._wrappedListeners[r] = c, window.addEventListener("message", c);
    } }, { key: "sendMessageToCallMachine", value: function(r, i, a, c) {
      if (!c) throw new Error("undefined callFrameId. Are you trying to use a DailyCall instance previously destroyed?");
      var l = mn({}, r);
      if (l.what = pn, l.from = "module", l.callFrameId = c, i) {
        var u = en();
        this._messageCallbacks[u] = i, l.callbackStamp = u;
      }
      var h = a ? a.contentWindow : window, p = this._callMachineTargetOrigin(a);
      p && h.postMessage(l, p);
    } }, { key: "sendMessageToDailyJs", value: function(r, i) {
      r.what = pn, r.callFrameId = i, r.from = "embedded", window.postMessage(r, this._targetOriginFromWindowLocation());
    } }, { key: "removeListener", value: function(r) {
      var i = this._wrappedListeners[r];
      i && (window.removeEventListener("message", i), delete this._wrappedListeners[r]);
    } }, { key: "forwardPackagedMessageToCallMachine", value: function(r, i, a) {
      var c = mn({}, r);
      c.callFrameId = a;
      var l = i ? i.contentWindow : window, u = this._callMachineTargetOrigin(i);
      u && l.postMessage(c, u);
    } }, { key: "addListenerForPackagedMessagesFromCallMachine", value: function(r, i) {
      var a = function(c) {
        if (c.data && c.data.what === "iframe-call-message" && (!c.data.callFrameId || c.data.callFrameId === i) && (!c.data.from || c.data.from !== "module")) {
          var l = c.data;
          r(l);
        }
      };
      return this._wrappedListeners[r] = a, window.addEventListener("message", a), r;
    } }, { key: "removeListenerForPackagedMessagesFromCallMachine", value: function(r) {
      var i = this._wrappedListeners[r];
      i && (window.removeEventListener("message", i), delete this._wrappedListeners[r]);
    } }, { key: "_callMachineTargetOrigin", value: function(r) {
      return r ? r.src ? new URL(r.src).origin : void 0 : this._targetOriginFromWindowLocation();
    } }, { key: "_targetOriginFromWindowLocation", value: function() {
      return window.location.protocol === "file:" ? "*" : window.location.origin;
    } }]), t;
  }();
  function Ic(n) {
    var e = function() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
      if (typeof Proxy == "function") return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }();
    return function() {
      var t, r = se(n);
      if (e) {
        var i = se(this).constructor;
        t = Reflect.construct(r, arguments, i);
      } else t = r.apply(this, arguments);
      return Zt(this, t);
    };
  }
  var Dc = function(n) {
    Xt(t, ka);
    var e = Ic(t);
    function t() {
      var r;
      return le(this, t), r = e.call(this), global.callMachineToDailyJsEmitter = global.callMachineToDailyJsEmitter || new be.EventEmitter(), global.dailyJsToCallMachineEmitter = global.dailyJsToCallMachineEmitter || new be.EventEmitter(), r._wrappedListeners = {}, r._messageCallbacks = {}, r;
    }
    return ue(t, [{ key: "addListenerForMessagesFromCallMachine", value: function(r, i, a) {
      this._addListener(r, global.callMachineToDailyJsEmitter, a, "received call machine message");
    } }, { key: "addListenerForMessagesFromDailyJs", value: function(r, i, a) {
      this._addListener(r, global.dailyJsToCallMachineEmitter, a, "received daily-js message");
    } }, { key: "sendMessageToCallMachine", value: function(r, i) {
      this._sendMessage(r, global.dailyJsToCallMachineEmitter, "sending message to call machine", i);
    } }, { key: "sendMessageToDailyJs", value: function(r) {
      this._sendMessage(r, global.callMachineToDailyJsEmitter, "sending message to daily-js");
    } }, { key: "removeListener", value: function(r) {
      var i = this._wrappedListeners[r];
      i && (global.callMachineToDailyJsEmitter.removeListener("message", i), global.dailyJsToCallMachineEmitter.removeListener("message", i), delete this._wrappedListeners[r]);
    } }, { key: "_addListener", value: function(r, i, a, c) {
      var l = this, u = function(h) {
        if (h.callbackStamp && l._messageCallbacks[h.callbackStamp]) {
          var p = h.callbackStamp;
          l._messageCallbacks[p].call(a, h), delete l._messageCallbacks[p];
        }
        r.call(a, h);
      };
      this._wrappedListeners[r] = u, i.addListener("message", u);
    } }, { key: "_sendMessage", value: function(r, i, a, c) {
      if (c) {
        var l = en();
        this._messageCallbacks[l] = c, r.callbackStamp = l;
      }
      i.emit("message", r);
    } }]), t;
  }(), $n = "replace", Gn = "shallow-merge", Oi = [$n, Gn], Nc = function() {
    function n() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.data, r = e.mergeStrategy, i = r === void 0 ? $n : r;
      le(this, n), n._validateMergeStrategy(i), n._validateData(t, i), this.mergeStrategy = i, this.data = t;
    }
    return ue(n, [{ key: "isNoOp", value: function() {
      return n.isNoOpUpdate(this.data, this.mergeStrategy);
    } }], [{ key: "isNoOpUpdate", value: function(e, t) {
      return Object.keys(e).length === 0 && t === Gn;
    } }, { key: "_validateMergeStrategy", value: function(e) {
      if (!Oi.includes(e)) throw Error("Unrecognized mergeStrategy provided. Options are: [".concat(Oi, "]"));
    } }, { key: "_validateData", value: function(e, t) {
      if (!function(l) {
        if (l == null || F(l) !== "object") return !1;
        var u = Object.getPrototypeOf(l);
        return u == null || u === Object.prototype;
      }(e)) throw Error("Meeting session data must be a plain (map-like) object");
      var r;
      try {
        if (r = JSON.stringify(e), t === $n) {
          var i = JSON.parse(r);
          Z(i, e) || console.warn("The meeting session data provided will be modified when serialized.", i, e);
        } else if (t === Gn) {
          for (var a in e) if (Object.hasOwnProperty.call(e, a) && e[a] !== void 0) {
            var c = JSON.parse(JSON.stringify(e[a]));
            Z(e[a], c) || console.warn("At least one key in the meeting session data provided will be modified when serialized.", c, e[a]);
          }
        }
      } catch (l) {
        throw Error("Meeting session data must be serializable to JSON: ".concat(l));
      }
      if (r.length > Ei) throw Error("Meeting session data is too large (".concat(r.length, " characters). Maximum size suppported is ").concat(Ei, "."));
    } }]), n;
  }();
  function qn(n, e, t) {
    return qn = function() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
      if (typeof Proxy == "function") return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }() ? Reflect.construct.bind() : function(r, i, a) {
      var c = [null];
      c.push.apply(c, i);
      var l = new (Function.bind.apply(r, c))();
      return a && ft(l, a.prototype), l;
    }, qn.apply(null, arguments);
  }
  function Jn(n) {
    var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
    return Jn = function(t) {
      if (t === null || (r = t, Function.toString.call(r).indexOf("[native code]") === -1)) return t;
      var r;
      if (typeof t != "function") throw new TypeError("Super expression must either be null or a function");
      if (e !== void 0) {
        if (e.has(t)) return e.get(t);
        e.set(t, i);
      }
      function i() {
        return qn(t, arguments, se(this).constructor);
      }
      return i.prototype = Object.create(t.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } }), ft(i, t);
    }, Jn(n);
  }
  function Rc(n) {
    var e = function() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
      if (typeof Proxy == "function") return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }();
    return function() {
      var t, r = se(n);
      if (e) {
        var i = se(this).constructor;
        t = Reflect.construct(r, arguments, i);
      } else t = r.apply(this, arguments);
      return Zt(this, t);
    };
  }
  function Li(n) {
    var e, t = (e = window._daily) === null || e === void 0 ? void 0 : e.pendings;
    if (t) {
      var r = t.indexOf(n);
      r !== -1 && t.splice(r, 1);
    }
  }
  var xc = function() {
    function n(e) {
      le(this, n), this._currentLoad = null, this._callFrameId = e;
    }
    return ue(n, [{ key: "load", value: function() {
      var e, t = this, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0, a = arguments.length > 2 ? arguments[2] : void 0;
      if (this.loaded) return window._daily.instances[this._callFrameId].callMachine.reset(), void i(!0);
      e = this._callFrameId, window._daily.pendings.push(e), this._currentLoad && this._currentLoad.cancel(), this._currentLoad = new jc(r, function() {
        i(!1);
      }, function(c, l) {
        l || Li(t._callFrameId), a(c, l);
      }), this._currentLoad.start();
    } }, { key: "cancel", value: function() {
      this._currentLoad && this._currentLoad.cancel(), Li(this._callFrameId);
    } }, { key: "loaded", get: function() {
      return this._currentLoad && this._currentLoad.succeeded;
    } }]), n;
  }(), jc = function() {
    function n() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0;
      le(this, n), this._attemptsRemaining = 3, this._currentAttempt = null, this._dailyConfig = e, this._successCallback = t, this._failureCallback = r;
    }
    return ue(n, [{ key: "start", value: function() {
      var e = this;
      this._currentAttempt || (this._currentAttempt = new Pi(this._dailyConfig, this._successCallback, function t(r) {
        e._currentAttempt.cancelled || (e._attemptsRemaining--, e._failureCallback(r, e._attemptsRemaining > 0), e._attemptsRemaining <= 0 || setTimeout(function() {
          e._currentAttempt.cancelled || (e._currentAttempt = new Pi(e._dailyConfig, e._successCallback, t), e._currentAttempt.start());
        }, 3e3));
      }), this._currentAttempt.start());
    } }, { key: "cancel", value: function() {
      this._currentAttempt && this._currentAttempt.cancel();
    } }, { key: "cancelled", get: function() {
      return this._currentAttempt && this._currentAttempt.cancelled;
    } }, { key: "succeeded", get: function() {
      return this._currentAttempt && this._currentAttempt.succeeded;
    } }]), n;
  }(), gn = function(n) {
    Xt(t, Jn(Error));
    var e = Rc(t);
    function t() {
      return le(this, t), e.apply(this, arguments);
    }
    return ue(t);
  }(), Kt = 2e4, Pi = function() {
    function n(t, r, i) {
      le(this, n), this._loadAttemptImpl = N() || !t.avoidEval ? new Fc(t, r, i) : new Bc(t, r, i);
    }
    var e;
    return ue(n, [{ key: "start", value: (e = M(function* () {
      return this._loadAttemptImpl.start();
    }), function() {
      return e.apply(this, arguments);
    }) }, { key: "cancel", value: function() {
      this._loadAttemptImpl.cancel();
    } }, { key: "cancelled", get: function() {
      return this._loadAttemptImpl.cancelled;
    } }, { key: "succeeded", get: function() {
      return this._loadAttemptImpl.succeeded;
    } }]), n;
  }(), Fc = function() {
    function n(a, c, l) {
      le(this, n), this.cancelled = !1, this.succeeded = !1, this._networkTimedOut = !1, this._networkTimeout = null, this._iosCache = typeof iOSCallObjectBundleCache < "u" && iOSCallObjectBundleCache, this._refetchHeaders = null, this._dailyConfig = a, this._successCallback = c, this._failureCallback = l;
    }
    var e, t, r, i;
    return ue(n, [{ key: "start", value: (i = M(function* () {
      var a = $t(this._dailyConfig);
      !(yield this._tryLoadFromIOSCache(a)) && this._loadFromNetwork(a);
    }), function() {
      return i.apply(this, arguments);
    }) }, { key: "cancel", value: function() {
      clearTimeout(this._networkTimeout), this.cancelled = !0;
    } }, { key: "_tryLoadFromIOSCache", value: (r = M(function* (a) {
      if (!this._iosCache) return !1;
      try {
        var c = yield this._iosCache.get(a);
        return !!this.cancelled || !!c && (c.code ? (Function('"use strict";' + c.code)(), this.succeeded = !0, this._successCallback(), !0) : (this._refetchHeaders = c.refetchHeaders, !1));
      } catch {
        return !1;
      }
    }), function(a) {
      return r.apply(this, arguments);
    }) }, { key: "_loadFromNetwork", value: (t = M(function* (a) {
      var c = this;
      this._networkTimeout = setTimeout(function() {
        c._networkTimedOut = !0, c._failureCallback({ msg: "Timed out (>".concat(Kt, " ms) when loading call object bundle ").concat(a), type: "timeout" });
      }, Kt);
      try {
        var l = this._refetchHeaders ? { headers: this._refetchHeaders } : {}, u = yield fetch(a, l);
        if (clearTimeout(this._networkTimeout), this.cancelled || this._networkTimedOut) throw new gn();
        var h = yield this._getBundleCodeFromResponse(a, u);
        if (this.cancelled) throw new gn();
        Function('"use strict";' + h)(), this._iosCache && this._iosCache.set(a, h, u.headers), this.succeeded = !0, this._successCallback();
      } catch (p) {
        if (clearTimeout(this._networkTimeout), p instanceof gn || this.cancelled || this._networkTimedOut) return;
        this._failureCallback({ msg: "Failed to load call object bundle ".concat(a, ": ").concat(p), type: p.message });
      }
    }), function(a) {
      return t.apply(this, arguments);
    }) }, { key: "_getBundleCodeFromResponse", value: (e = M(function* (a, c) {
      if (c.ok) return yield c.text();
      if (this._iosCache && c.status === 304) return (yield this._iosCache.renew(a, c.headers)).code;
      throw new Error("Received ".concat(c.status, " response"));
    }), function(a, c) {
      return e.apply(this, arguments);
    }) }]), n;
  }(), Bc = function() {
    function n(e, t, r) {
      le(this, n), this.cancelled = !1, this.succeeded = !1, this._dailyConfig = e, this._successCallback = t, this._failureCallback = r, this._attemptId = en(), this._networkTimeout = null, this._scriptElement = null;
    }
    return ue(n, [{ key: "start", value: function() {
      window._dailyCallMachineLoadWaitlist || (window._dailyCallMachineLoadWaitlist = /* @__PURE__ */ new Set());
      var e = $t(this._dailyConfig);
      (typeof document > "u" ? "undefined" : F(document)) === "object" ? this._startLoading(e) : this._failureCallback({ msg: "Call object bundle must be loaded in a DOM/web context", type: "missing context" });
    } }, { key: "cancel", value: function() {
      this._stopLoading(), this.cancelled = !0;
    } }, { key: "_startLoading", value: function(e) {
      var t = this;
      this._signUpForCallMachineLoadWaitlist(), this._networkTimeout = setTimeout(function() {
        t._stopLoading(), t._failureCallback({ msg: "Timed out (>".concat(Kt, " ms) when loading call object bundle ").concat(e), type: "timeout" });
      }, Kt);
      var r = document.getElementsByTagName("head")[0], i = document.createElement("script");
      this._scriptElement = i, i.onload = function() {
        t._stopLoading(), t.succeeded = !0, t._successCallback();
      }, i.onerror = function(a) {
        t._stopLoading(), t._failureCallback({ msg: "Failed to load call object bundle ".concat(a.target.src), type: a.message });
      }, i.src = e, r.appendChild(i);
    } }, { key: "_stopLoading", value: function() {
      this._withdrawFromCallMachineLoadWaitlist(), clearTimeout(this._networkTimeout), this._scriptElement && (this._scriptElement.onload = null, this._scriptElement.onerror = null);
    } }, { key: "_signUpForCallMachineLoadWaitlist", value: function() {
      window._dailyCallMachineLoadWaitlist.add(this._attemptId);
    } }, { key: "_withdrawFromCallMachineLoadWaitlist", value: function() {
      window._dailyCallMachineLoadWaitlist.delete(this._attemptId);
    } }]), n;
  }(), Pt = function(n, e, t) {
    return Vc(n.local, e, t) === !0;
  }, Uc = function(n, e, t) {
    return n.local.streams && n.local.streams[e] && n.local.streams[e].stream && n.local.streams[e].stream["get".concat(t === "video" ? "Video" : "Audio", "Tracks")]()[0];
  }, Je = function(n, e, t, r) {
    var i = Yc(n, e, t, r);
    return i && i.pendingTrack;
  }, Vc = function(n, e, t) {
    if (!n) return !1;
    var r = function(a) {
      switch (a) {
        case "avatar":
          return !0;
        case "staged":
          return a;
        default:
          return !!a;
      }
    }, i = n.public.subscribedTracks;
    return i && i[e] ? ["cam-audio", "cam-video", "screen-video", "screen-audio", "rmpAudio", "rmpVideo"].indexOf(t) === -1 && i[e].custom ? [!0, "staged"].includes(i[e].custom) ? r(i[e].custom) : r(i[e].custom[t]) : r(i[e][t]) : !i || r(i.ALL);
  }, Yc = function(n, e, t, r) {
    var i = Object.values(n.streams || {}).filter(function(a) {
      return a.participantId === e && a.type === t && a.pendingTrack && a.pendingTrack.kind === r;
    }).sort(function(a, c) {
      return new Date(c.starttime) - new Date(a.starttime);
    });
    return i && i[0];
  }, $c = function(n, e) {
    var t = n.local.public.customTracks;
    if (t && t[e]) return t[e].track;
  };
  function Ii(n, e) {
    for (var t = e.getState(), r = 0, i = ["cam", "screen"]; r < i.length; r++) for (var a = i[r], c = 0, l = ["video", "audio"]; c < l.length; c++) {
      var u = l[c], h = a === "cam" ? u : "screen".concat(u.charAt(0).toUpperCase() + u.slice(1)), p = n.tracks[h];
      if (p) {
        var m = n.local ? Uc(t, a, u) : Je(t, n.session_id, a, u);
        p.state === "playable" && (p.track = m), p.persistentTrack = m;
      }
    }
  }
  function Di(n, e) {
    try {
      var t = e.getState();
      for (var r in n.tracks) if (!Gc(r)) {
        var i = n.tracks[r].kind;
        if (i) {
          var a = n.tracks[r];
          if (a) {
            var c = n.local ? $c(t, r) : Je(t, n.session_id, r, i);
            a.state === "playable" && (n.tracks[r].track = c), a.persistentTrack = c;
          }
        } else console.error("unknown type for custom track");
      }
    } catch (l) {
      console.error(l);
    }
  }
  function Gc(n) {
    return ["video", "audio", "screenVideo", "screenAudio"].includes(n);
  }
  function Ni(n, e, t) {
    var r = t.getState();
    if (n.local) {
      if (n.audio) try {
        n.audioTrack = r.local.streams.cam.stream.getAudioTracks()[0], n.audioTrack || (n.audio = !1);
      } catch {
      }
      if (n.video) try {
        n.videoTrack = r.local.streams.cam.stream.getVideoTracks()[0], n.videoTrack || (n.video = !1);
      } catch {
      }
      if (n.screen) try {
        n.screenVideoTrack = r.local.streams.screen.stream.getVideoTracks()[0], n.screenAudioTrack = r.local.streams.screen.stream.getAudioTracks()[0], n.screenVideoTrack || n.screenAudioTrack || (n.screen = !1);
      } catch {
      }
    } else {
      var i = !0;
      try {
        var a = r.participants[n.session_id];
        a && a.public && a.public.rtcType && a.public.rtcType.impl === "peer-to-peer" && a.private && !["connected", "completed"].includes(a.private.peeringState) && (i = !1);
      } catch (p) {
        console.error(p);
      }
      if (!i) return n.audio = !1, n.audioTrack = !1, n.video = !1, n.videoTrack = !1, n.screen = !1, void (n.screenTrack = !1);
      try {
        if (r.streams, n.audio && Pt(r, n.session_id, "cam-audio")) {
          var c = Je(r, n.session_id, "cam", "audio");
          c && (e && e.audioTrack && e.audioTrack.id === c.id ? n.audioTrack = c : c.muted || (n.audioTrack = c)), n.audioTrack || (n.audio = !1);
        }
        if (n.video && Pt(r, n.session_id, "cam-video")) {
          var l = Je(r, n.session_id, "cam", "video");
          l && (e && e.videoTrack && e.videoTrack.id === l.id ? n.videoTrack = l : l.muted || (n.videoTrack = l)), n.videoTrack || (n.video = !1);
        }
        if (n.screen && Pt(r, n.session_id, "screen-audio")) {
          var u = Je(r, n.session_id, "screen", "audio");
          u && (e && e.screenAudioTrack && e.screenAudioTrack.id === u.id ? n.screenAudioTrack = u : u.muted || (n.screenAudioTrack = u));
        }
        if (n.screen && Pt(r, n.session_id, "screen-video")) {
          var h = Je(r, n.session_id, "screen", "video");
          h && (e && e.screenVideoTrack && e.screenVideoTrack.id === h.id ? n.screenVideoTrack = h : h.muted || (n.screenVideoTrack = h));
        }
        n.screenVideoTrack || n.screenAudioTrack || (n.screen = !1);
      } catch (p) {
        console.error("unexpected error matching up tracks", p);
      }
    }
  }
  function qc(n, e) {
    var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (!t) {
      if (Array.isArray(n) || (t = function(u, h) {
        if (u) {
          if (typeof u == "string") return Ri(u, h);
          var p = Object.prototype.toString.call(u).slice(8, -1);
          if (p === "Object" && u.constructor && (p = u.constructor.name), p === "Map" || p === "Set") return Array.from(u);
          if (p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)) return Ri(u, h);
        }
      }(n)) || e) {
        t && (n = t);
        var r = 0, i = function() {
        };
        return { s: i, n: function() {
          return r >= n.length ? { done: !0 } : { done: !1, value: n[r++] };
        }, e: function(u) {
          throw u;
        }, f: i };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var a, c = !0, l = !1;
    return { s: function() {
      t = t.call(n);
    }, n: function() {
      var u = t.next();
      return c = u.done, u;
    }, e: function(u) {
      l = !0, a = u;
    }, f: function() {
      try {
        c || t.return == null || t.return();
      } finally {
        if (l) throw a;
      }
    } };
  }
  function Ri(n, e) {
    (e == null || e > n.length) && (e = n.length);
    for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
    return r;
  }
  var fe = /* @__PURE__ */ new Map(), Ze = null;
  function Jc(n, e) {
    var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (!t) {
      if (Array.isArray(n) || (t = function(u, h) {
        if (u) {
          if (typeof u == "string") return xi(u, h);
          var p = Object.prototype.toString.call(u).slice(8, -1);
          if (p === "Object" && u.constructor && (p = u.constructor.name), p === "Map" || p === "Set") return Array.from(u);
          if (p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)) return xi(u, h);
        }
      }(n)) || e) {
        t && (n = t);
        var r = 0, i = function() {
        };
        return { s: i, n: function() {
          return r >= n.length ? { done: !0 } : { done: !1, value: n[r++] };
        }, e: function(u) {
          throw u;
        }, f: i };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var a, c = !0, l = !1;
    return { s: function() {
      t = t.call(n);
    }, n: function() {
      var u = t.next();
      return c = u.done, u;
    }, e: function(u) {
      l = !0, a = u;
    }, f: function() {
      try {
        c || t.return == null || t.return();
      } finally {
        if (l) throw a;
      }
    } };
  }
  function xi(n, e) {
    (e == null || e > n.length) && (e = n.length);
    for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
    return r;
  }
  var me = /* @__PURE__ */ new Map(), pt = null, Wc = 3e3;
  function zc(n) {
    Ta() ? function(e) {
      fe.has(e) || (fe.set(e, {}), navigator.mediaDevices.enumerateDevices().then(function(t) {
        fe.has(e) && (fe.get(e).lastDevicesString = JSON.stringify(t), Ze || (Ze = function() {
          var r = M(function* () {
            var i, a = yield navigator.mediaDevices.enumerateDevices(), c = qc(fe.keys());
            try {
              for (c.s(); !(i = c.n()).done; ) {
                var l = i.value, u = JSON.stringify(a);
                u !== fe.get(l).lastDevicesString && (fe.get(l).lastDevicesString = u, l(a));
              }
            } catch (h) {
              c.e(h);
            } finally {
              c.f();
            }
          });
          return function() {
            return r.apply(this, arguments);
          };
        }(), navigator.mediaDevices.addEventListener("devicechange", Ze)));
      }).catch(function() {
      }));
    }(n) : function(e) {
      me.has(e) || (me.set(e, {}), navigator.mediaDevices.enumerateDevices().then(function(t) {
        me.has(e) && (me.get(e).lastDevicesString = JSON.stringify(t), pt || (pt = setInterval(M(function* () {
          var r, i = yield navigator.mediaDevices.enumerateDevices(), a = Jc(me.keys());
          try {
            for (a.s(); !(r = a.n()).done; ) {
              var c = r.value, l = JSON.stringify(i);
              l !== me.get(c).lastDevicesString && (me.get(c).lastDevicesString = l, c(i));
            }
          } catch (u) {
            a.e(u);
          } finally {
            a.f();
          }
        }), Wc)));
      }));
    }(n);
  }
  function Hc(n) {
    Ta() ? function(e) {
      fe.has(e) && (fe.delete(e), fe.size === 0 && Ze && (navigator.mediaDevices.removeEventListener("devicechange", Ze), Ze = null));
    }(n) : function(e) {
      me.has(e) && (me.delete(e), me.size === 0 && pt && (clearInterval(pt), pt = null));
    }(n);
  }
  function Ta() {
    return N() || navigator.mediaDevices.ondevicechange !== void 0;
  }
  var Kc = /* @__PURE__ */ new Set();
  function Qc(n, e) {
    return n && n.readyState === "live" && !function(t, r) {
      return t.muted && !Kc.has(t.id);
    }(n);
  }
  var he, Xc = ["videoTrack"], Zc = ["result"], el = ["preserveIframe"];
  function ji(n, e) {
    var t = Object.keys(n);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(n);
      e && (r = r.filter(function(i) {
        return Object.getOwnPropertyDescriptor(n, i).enumerable;
      })), t.push.apply(t, r);
    }
    return t;
  }
  function A(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e] != null ? arguments[e] : {};
      e % 2 ? ji(Object(t), !0).forEach(function(r) {
        we(n, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : ji(Object(t)).forEach(function(r) {
        Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return n;
  }
  function tl(n) {
    var e = function() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
      if (typeof Proxy == "function") return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }();
    return function() {
      var t, r = se(n);
      if (e) {
        var i = se(this).constructor;
        t = Reflect.construct(r, arguments, i);
      } else t = r.apply(this, arguments);
      return Zt(this, t);
    };
  }
  function Fi(n, e) {
    var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (!t) {
      if (Array.isArray(n) || (t = function(u, h) {
        if (u) {
          if (typeof u == "string") return Bi(u, h);
          var p = Object.prototype.toString.call(u).slice(8, -1);
          if (p === "Object" && u.constructor && (p = u.constructor.name), p === "Map" || p === "Set") return Array.from(u);
          if (p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)) return Bi(u, h);
        }
      }(n)) || e) {
        t && (n = t);
        var r = 0, i = function() {
        };
        return { s: i, n: function() {
          return r >= n.length ? { done: !0 } : { done: !1, value: n[r++] };
        }, e: function(u) {
          throw u;
        }, f: i };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var a, c = !0, l = !1;
    return { s: function() {
      t = t.call(n);
    }, n: function() {
      var u = t.next();
      return c = u.done, u;
    }, e: function(u) {
      l = !0, a = u;
    }, f: function() {
      try {
        c || t.return == null || t.return();
      } finally {
        if (l) throw a;
      }
    } };
  }
  function Bi(n, e) {
    (e == null || e > n.length) && (e = n.length);
    for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
    return r;
  }
  var Ui = "video", nl = "voice", Vi = N() ? { data: {} } : { data: {}, topology: "none" }, Yi = { present: 0, hidden: 0 }, Ca = { maxBitrate: { min: 1e5, max: 25e5 }, maxFramerate: { min: 1, max: 30 }, scaleResolutionDownBy: { min: 1, max: 8 } }, vn = Object.keys(Ca), $i = ["state", "volume", "simulcastEncodings"], Gi = { androidInCallNotification: { title: "string", subtitle: "string", iconName: "string", disableForCustomOverride: "boolean" }, disableAutoDeviceManagement: { audio: "boolean", video: "boolean" } }, Qt = { id: { iconPath: "string", iconPathDarkMode: "string", label: "string", tooltip: "string" } }, Wn = { id: { allow: "string", controlledBy: "'*' | 'owners' | string[]", csp: "string", iconURL: "string", label: "string", loading: "'eager' | 'lazy'", location: "'main' | 'sidebar'", name: "string", referrerPolicy: "string", sandbox: "string", src: "string", srcdoc: "string", shared: "string[] | 'owners' | boolean" } }, Pe = { customIntegrations: { validate: Na, help: Ia() }, customTrayButtons: { validate: Da, help: "customTrayButtons should be a dictionary of the type ".concat(JSON.stringify(Qt)) }, url: { validate: function(n) {
    return typeof n == "string";
  }, help: "url should be a string" }, baseUrl: { validate: function(n) {
    return typeof n == "string";
  }, help: "baseUrl should be a string" }, token: { validate: function(n) {
    return typeof n == "string";
  }, help: "token should be a string", queryString: "t" }, dailyConfig: { validate: function(n, e) {
    try {
      return e.validateDailyConfig(n), !0;
    } catch (t) {
      console.error("Failed to validate dailyConfig", t);
    }
    return !1;
  }, help: "Unsupported dailyConfig. Check error logs for detailed info." }, reactNativeConfig: { validate: function(n) {
    return Ra(n, Gi);
  }, help: "reactNativeConfig should look like ".concat(JSON.stringify(Gi), ", all fields optional") }, lang: { validate: function(n) {
    return ["de", "en-us", "en", "es", "fi", "fr", "it", "jp", "ka", "nl", "no", "pl", "pt", "pt-BR", "ru", "sv", "tr", "user"].includes(n);
  }, help: "language not supported. Options are: de, en-us, en, es, fi, fr, it, jp, ka, nl, no, pl, pt, pt-BR, ru, sv, tr, user" }, userName: !0, userData: { validate: function(n) {
    try {
      return Ma(n), !0;
    } catch (e) {
      return console.error(e), !1;
    }
  }, help: "invalid userData type provided" }, startVideoOff: !0, startAudioOff: !0, activeSpeakerMode: !0, showLeaveButton: !0, showLocalVideo: !0, showParticipantsBar: !0, showFullscreenButton: !0, showUserNameChangeUI: !0, iframeStyle: !0, customLayout: !0, cssFile: !0, cssText: !0, bodyClass: !0, videoSource: { validate: function(n, e) {
    return n instanceof MediaStreamTrack && (e._sharedTracks.videoDeviceId = n), e._preloadCache.videoDeviceId = n, !0;
  } }, audioSource: { validate: function(n, e) {
    return n instanceof MediaStreamTrack && (e._sharedTracks.audioDeviceId = n), e._preloadCache.audioDeviceId = n, !0;
  } }, subscribeToTracksAutomatically: { validate: function(n, e) {
    return e._preloadCache.subscribeToTracksAutomatically = n, !0;
  } }, theme: { validate: function(n) {
    var e = ["accent", "accentText", "background", "backgroundAccent", "baseText", "border", "mainAreaBg", "mainAreaBgAccent", "mainAreaText", "supportiveText"], t = function(r) {
      for (var i = 0, a = Object.keys(r); i < a.length; i++) {
        var c = a[i];
        if (!e.includes(c)) return console.error('unsupported color "'.concat(c, '". Valid colors: ').concat(e.join(", "))), !1;
        if (!r[c].match(/^#[0-9a-f]{6}|#[0-9a-f]{3}$/i)) return console.error("".concat(c, ' theme color should be provided in valid hex color format. Received: "').concat(r[c], '"')), !1;
      }
      return !0;
    };
    return F(n) === "object" && ("light" in n && "dark" in n || "colors" in n) ? "light" in n && "dark" in n ? "colors" in n.light ? "colors" in n.dark ? t(n.light.colors) && t(n.dark.colors) : (console.error('Dark theme is missing "colors" property.', n), !1) : (console.error('Light theme is missing "colors" property.', n), !1) : t(n.colors) : (console.error('Theme must contain either both "light" and "dark" properties, or "colors".', n), !1);
  }, help: "unsupported theme configuration. Check error logs for detailed info." }, layoutConfig: { validate: function(n) {
    if ("grid" in n) {
      var e = n.grid;
      if ("maxTilesPerPage" in e) {
        if (!Number.isInteger(e.maxTilesPerPage)) return console.error("grid.maxTilesPerPage should be an integer. You passed ".concat(e.maxTilesPerPage, ".")), !1;
        if (e.maxTilesPerPage > 49) return console.error("grid.maxTilesPerPage can't be larger than 49 without sacrificing browser performance. Please contact us at https://www.daily.co/contact to talk about your use case."), !1;
      }
      if ("minTilesPerPage" in e) {
        if (!Number.isInteger(e.minTilesPerPage)) return console.error("grid.minTilesPerPage should be an integer. You passed ".concat(e.minTilesPerPage, ".")), !1;
        if (e.minTilesPerPage < 1) return console.error("grid.minTilesPerPage can't be lower than 1."), !1;
        if ("maxTilesPerPage" in e && e.minTilesPerPage > e.maxTilesPerPage) return console.error("grid.minTilesPerPage can't be higher than grid.maxTilesPerPage."), !1;
      }
    }
    return !0;
  }, help: "unsupported layoutConfig. Check error logs for detailed info." }, receiveSettings: { validate: function(n) {
    return Aa(n, { allowAllParticipantsKey: !1 });
  }, help: Pa({ allowAllParticipantsKey: !1 }) }, sendSettings: { validate: function(n, e) {
    return !!function(t, r) {
      try {
        return r.validateUpdateSendSettings(t), !0;
      } catch (i) {
        return console.error("Failed to validate send settings", i), !1;
      }
    }(n, e) && (e._preloadCache.sendSettings = n, !0);
  }, help: "Invalid sendSettings provided. Check error logs for detailed info." }, inputSettings: { validate: function(n, e) {
    var t;
    return !!Oa(n) && (e._preloadCache.inputSettings || (e._preloadCache.inputSettings = {}), La(n, (t = e.properties) === null || t === void 0 ? void 0 : t.dailyConfig), n.audio && (e._preloadCache.inputSettings.audio = n.audio), n.video && (e._preloadCache.inputSettings.video = n.video), !0);
  }, help: zn() }, layout: { validate: function(n) {
    return n === "custom-v1" || n === "browser" || n === "none";
  }, help: 'layout may only be set to "custom-v1"', queryString: "layout" }, emb: { queryString: "emb" }, embHref: { queryString: "embHref" }, dailyJsVersion: { queryString: "dailyJsVersion" }, proxy: { queryString: "proxy" }, strictMode: !0 }, It = { styles: { validate: function(n) {
    for (var e in n) if (e !== "cam" && e !== "screen") return !1;
    if (n.cam) {
      for (var t in n.cam) if (t !== "div" && t !== "video") return !1;
    }
    if (n.screen) {
      for (var r in n.screen) if (r !== "div" && r !== "video") return !1;
    }
    return !0;
  }, help: "styles format should be a subset of: { cam: {div: {}, video: {}}, screen: {div: {}, video: {}} }" }, setSubscribedTracks: { validate: function(n, e) {
    if (e._preloadCache.subscribeToTracksAutomatically) return !1;
    var t = [!0, !1, "staged"];
    if (t.includes(n) || !N() && n === "avatar") return !0;
    var r = ["audio", "video", "screenAudio", "screenVideo", "rmpAudio", "rmpVideo"];
    return function i(a) {
      var c = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
      for (var l in a) if (l === "custom") {
        if (!t.includes(a[l]) && !i(a[l], !0)) return !1;
      } else {
        var u = !c && !r.includes(l), h = !t.includes(a[l]);
        if (u || h) return !1;
      }
      return !0;
    }(n);
  }, help: "setSubscribedTracks cannot be used when setSubscribeToTracksAutomatically is enabled, and should be of the form: " + "true".concat(N() ? "" : " | 'avatar'", " | false | 'staged' | { [audio: true|false|'staged'], [video: true|false|'staged'], [screenAudio: true|false|'staged'], [screenVideo: true|false|'staged'] }") }, setAudio: !0, setVideo: !0, setScreenShare: { validate: function(n) {
    return n === !1;
  }, help: "setScreenShare must be false, as it's only meant for stopping remote participants' screen shares" }, eject: !0, updatePermissions: { validate: function(n) {
    for (var e = 0, t = Object.entries(n); e < t.length; e++) {
      var r = Be(t[e], 2), i = r[0], a = r[1];
      switch (i) {
        case "hasPresence":
          if (typeof a != "boolean") return !1;
          break;
        case "canSend":
          if (a instanceof Set || a instanceof Array) {
            var c, l = ["video", "audio", "screenVideo", "screenAudio", "customVideo", "customAudio"], u = Fi(a);
            try {
              for (u.s(); !(c = u.n()).done; ) {
                var h = c.value;
                if (!l.includes(h)) return !1;
              }
            } catch (b) {
              u.e(b);
            } finally {
              u.f();
            }
          } else if (typeof a != "boolean") return !1;
          a instanceof Array && (n.canSend = new Set(a));
          break;
        case "canAdmin":
          if (a instanceof Set || a instanceof Array) {
            var p, m = ["participants", "streaming", "transcription"], _ = Fi(a);
            try {
              for (_.s(); !(p = _.n()).done; ) {
                var S = p.value;
                if (!m.includes(S)) return !1;
              }
            } catch (b) {
              _.e(b);
            } finally {
              _.f();
            }
          } else if (typeof a != "boolean") return !1;
          a instanceof Array && (n.canAdmin = new Set(a));
          break;
        default:
          return !1;
      }
    }
    return !0;
  }, help: "updatePermissions can take hasPresence, canSend, and canAdmin permissions. hasPresence must be a boolean. canSend can be a boolean or an Array or Set of media types (video, audio, screenVideo, screenAudio, customVideo, customAudio). canAdmin can be a boolean or an Array or Set of admin types (participants, streaming, transcription)." } };
  Promise.any || (Promise.any = function() {
    var n = M(function* (e) {
      return new Promise(function(t, r) {
        var i = [];
        e.forEach(function(a) {
          return Promise.resolve(a).then(function(c) {
            t(c);
          }).catch(function(c) {
            i.push(c), i.length === e.length && r(i);
          });
        });
      });
    });
    return function(e) {
      return n.apply(this, arguments);
    };
  }());
  var rl = function(n) {
    Xt(ne, be);
    var e, t, r, i, a, c, l, u, h, p, m, _, S, b, E, T, O, $, Se, Ge, ot, cr, lr, ur, dr, hr, pr, fr, mr, gr, vr, _r, yr, br, Sr, Er, Wa = tl(ne);
    function ne(o) {
      var s, d, f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (le(this, ne), we(ge(s = Wa.call(this)), "startListeningForDeviceChanges", function() {
        zc(s.handleDeviceChange);
      }), we(ge(s), "stopListeningForDeviceChanges", function() {
        Hc(s.handleDeviceChange);
      }), we(ge(s), "handleDeviceChange", function(v) {
        v = v.map(function(w) {
          return JSON.parse(JSON.stringify(w));
        }), s.emit(Si, { action: Si, availableDevices: v });
      }), we(ge(s), "handleNativeAppStateChange", function() {
        var v = M(function* (w) {
          if (w === "destroyed") return console.warn("App has been destroyed before leaving the meeting. Cleaning up all the resources!"), void (yield s.destroy());
          var k = w === "active";
          s.disableReactNativeAutoDeviceManagement("video") || (k ? s.camUnmutedBeforeLosingNativeActiveState && s.setLocalVideo(!0) : (s.camUnmutedBeforeLosingNativeActiveState = s.localVideo(), s.camUnmutedBeforeLosingNativeActiveState && s.setLocalVideo(!1)));
        });
        return function(w) {
          return v.apply(this, arguments);
        };
      }()), we(ge(s), "handleNativeAudioFocusChange", function(v) {
        s.disableReactNativeAutoDeviceManagement("audio") || (s._hasNativeAudioFocus = v, s.toggleParticipantAudioBasedOnNativeAudioFocus(), s._hasNativeAudioFocus ? s.micUnmutedBeforeLosingNativeAudioFocus && s.setLocalAudio(!0) : (s.micUnmutedBeforeLosingNativeAudioFocus = s.localAudio(), s.setLocalAudio(!1)));
      }), we(ge(s), "handleNativeSystemScreenCaptureStop", function() {
        s.stopScreenShare();
      }), s.strictMode = f.strictMode === void 0 || f.strictMode, he) {
        if (s._logDuplicateInstanceAttempt(), s.strictMode) throw new Error("Duplicate DailyIframe instances are not allowed");
      } else d = ge(s), he = d;
      if (window._daily || (window._daily = { pendings: [], instances: {} }), s._callFrameId = en(), window._daily.instances[s._callFrameId] = {}, s._sharedTracks = {}, window._daily.instances[s._callFrameId].tracks = s._sharedTracks, f.dailyJsVersion = ne.version(), s._iframe = o, s._callObjectMode = f.layout === "none" && !s._iframe, s._preloadCache = { subscribeToTracksAutomatically: !0, audioDeviceId: null, videoDeviceId: null, outputDeviceId: null, inputSettings: null, sendSettings: null, videoTrackForNetworkConnectivityTest: null, videoTrackForConnectionQualityTest: null }, f.showLocalVideo !== void 0 ? s._callObjectMode ? console.error("showLocalVideo is not available in call object mode") : s._showLocalVideo = !!f.showLocalVideo : s._showLocalVideo = !0, f.showParticipantsBar !== void 0 ? s._callObjectMode ? console.error("showParticipantsBar is not available in call object mode") : s._showParticipantsBar = !!f.showParticipantsBar : s._showParticipantsBar = !0, f.customIntegrations !== void 0 ? s._callObjectMode ? console.error("customIntegrations is not available in call object mode") : s._customIntegrations = f.customIntegrations : s._customIntegrations = {}, f.customTrayButtons !== void 0 ? s._callObjectMode ? console.error("customTrayButtons is not available in call object mode") : s._customTrayButtons = f.customTrayButtons : s._customTrayButtons = {}, f.activeSpeakerMode !== void 0 ? s._callObjectMode ? console.error("activeSpeakerMode is not available in call object mode") : s._activeSpeakerMode = !!f.activeSpeakerMode : s._activeSpeakerMode = !1, f.receiveSettings ? s._callObjectMode ? s._receiveSettings = f.receiveSettings : console.error("receiveSettings is only available in call object mode") : s._receiveSettings = {}, s.validateProperties(f), s.properties = A({}, f), s._preloadCache.inputSettings || (s._preloadCache.inputSettings = {}), f.inputSettings && f.inputSettings.audio && (s._preloadCache.inputSettings.audio = f.inputSettings.audio), f.inputSettings && f.inputSettings.video && (s._preloadCache.inputSettings.video = f.inputSettings.video), s._callObjectLoader = s._callObjectMode ? new xc(s._callFrameId) : null, s._callState = Dn, s._isPreparingToJoin = !1, s._accessState = { access: Nt }, s._meetingSessionSummary = {}, s._finalSummaryOfPrevSession = {}, s._meetingSessionState = yn(Vi, s._callObjectMode), s._nativeInCallAudioMode = Ui, s._participants = {}, s._isScreenSharing = !1, s._participantCounts = Yi, s._rmpPlayerState = {}, s._waitingParticipants = {}, s._network = { threshold: "good", quality: 100 }, s._activeSpeaker = {}, s._localAudioLevel = 0, s._remoteParticipantsAudioLevel = {}, s._messageChannel = N() ? new Dc() : new Pc(), s._iframe && (s._iframe.requestFullscreen ? s._iframe.addEventListener("fullscreenchange", function() {
        document.fullscreenElement === s._iframe ? (s.emit(De, { action: De }), s.sendMessageToCallMachine({ action: De })) : (s.emit(Ne, { action: Ne }), s.sendMessageToCallMachine({ action: Ne }));
      }) : s._iframe.webkitRequestFullscreen && s._iframe.addEventListener("webkitfullscreenchange", function() {
        document.webkitFullscreenElement === s._iframe ? (s.emit(De, { action: De }), s.sendMessageToCallMachine({ action: De })) : (s.emit(Ne, { action: Ne }), s.sendMessageToCallMachine({ action: Ne }));
      })), N()) {
        var g = s.nativeUtils();
        g.addAudioFocusChangeListener && g.removeAudioFocusChangeListener && g.addAppStateChangeListener && g.removeAppStateChangeListener && g.addSystemScreenCaptureStopListener && g.removeSystemScreenCaptureStopListener || console.warn("expected (add|remove)(AudioFocusChange|AppActiveStateChange|SystemScreenCaptureStop)Listener to be available in React Native"), s._hasNativeAudioFocus = !0, g.addAudioFocusChangeListener(s.handleNativeAudioFocusChange), g.addAppStateChangeListener(s.handleNativeAppStateChange), g.addSystemScreenCaptureStopListener(s.handleNativeSystemScreenCaptureStop);
      }
      return s._callObjectMode && s.startListeningForDeviceChanges(), s._messageChannel.addListenerForMessagesFromCallMachine(s.handleMessageFromCallMachine, s._callFrameId, ge(s)), s;
    }
    return ue(ne, [{ key: "destroy", value: (Er = M(function* () {
      var o, s;
      try {
        yield this.leave();
      } catch {
      }
      var d = this._iframe;
      if (d) {
        var f = d.parentElement;
        f && f.removeChild(d);
      }
      if (this._messageChannel.removeListener(this.handleMessageFromCallMachine), N()) {
        var g = this.nativeUtils();
        g.removeAudioFocusChangeListener(this.handleNativeAudioFocusChange), g.removeAppStateChangeListener(this.handleNativeAppStateChange), g.removeSystemScreenCaptureStopListener(this.handleNativeSystemScreenCaptureStop);
      }
      this._callObjectMode && this.stopListeningForDeviceChanges(), this.resetMeetingDependentVars(), this._destroyed = !0;
      try {
        this.emit("call-instance-destroyed", { action: "call-instance-destroyed" });
      } catch {
        console.log("could not emit call-instance-destroyed");
      }
      he = void 0, !((o = window) === null || o === void 0 || (s = o._daily) === null || s === void 0) && s.instances && delete window._daily.instances[this._callFrameId], this.strictMode && (this._callFrameId = void 0);
    }), function() {
      return Er.apply(this, arguments);
    }) }, { key: "isDestroyed", value: function() {
      return !!this._destroyed;
    } }, { key: "loadCss", value: function(o) {
      var s = o.bodyClass, d = o.cssFile, f = o.cssText;
      return I(), this.sendMessageToCallMachine({ action: "load-css", cssFile: this.absoluteUrl(d), bodyClass: s, cssText: f }), this;
    } }, { key: "iframe", value: function() {
      return I(), this._iframe;
    } }, { key: "meetingState", value: function() {
      return this._callState;
    } }, { key: "accessState", value: function() {
      return pe(this._callObjectMode, "accessState()"), this._accessState;
    } }, { key: "participants", value: function() {
      return this._participants;
    } }, { key: "participantCounts", value: function() {
      return this._participantCounts;
    } }, { key: "waitingParticipants", value: function() {
      return pe(this._callObjectMode, "waitingParticipants()"), this._waitingParticipants;
    } }, { key: "validateParticipantProperties", value: function(o, s) {
      for (var d in s) {
        if (!It[d]) throw new Error("unrecognized updateParticipant property ".concat(d));
        if (It[d].validate && !It[d].validate(s[d], this, this._participants[o])) throw new Error(It[d].help);
      }
    } }, { key: "updateParticipant", value: function(o, s) {
      return this._participants.local && this._participants.local.session_id === o && (o = "local"), o && s && (this.validateParticipantProperties(o, s), this.sendMessageToCallMachine({ action: "update-participant", id: o, properties: s })), this;
    } }, { key: "updateParticipants", value: function(o) {
      var s = this._participants.local && this._participants.local.session_id;
      for (var d in o) d === s && (d = "local"), d && o[d] && this.validateParticipantProperties(d, o[d]);
      return this.sendMessageToCallMachine({ action: "update-participants", participants: o }), this;
    } }, { key: "updateWaitingParticipant", value: (Sr = M(function* () {
      var o = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (pe(this._callObjectMode, "updateWaitingParticipant()"), Y(this._callState, "updateWaitingParticipant()"), typeof s != "string" || F(d) !== "object") throw new Error("updateWaitingParticipant() must take an id string and a updates object");
      return new Promise(function(f, g) {
        o.sendMessageToCallMachine({ action: "daily-method-update-waiting-participant", id: s, updates: d }, function(v) {
          v.error && g(v.error), v.id || g(new Error("unknown error in updateWaitingParticipant()")), f({ id: v.id });
        });
      });
    }), function() {
      return Sr.apply(this, arguments);
    }) }, { key: "updateWaitingParticipants", value: (br = M(function* () {
      var o = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (pe(this._callObjectMode, "updateWaitingParticipants()"), Y(this._callState, "updateWaitingParticipants()"), F(s) !== "object") throw new Error("updateWaitingParticipants() must take a mapping between ids and update objects");
      return new Promise(function(d, f) {
        o.sendMessageToCallMachine({ action: "daily-method-update-waiting-participants", updatesById: s }, function(g) {
          g.error && f(g.error), g.ids || f(new Error("unknown error in updateWaitingParticipants()")), d({ ids: g.ids });
        });
      });
    }), function() {
      return br.apply(this, arguments);
    }) }, { key: "requestAccess", value: (yr = M(function* () {
      var o = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, d = s.access, f = d === void 0 ? { level: Co } : d, g = s.name, v = g === void 0 ? "" : g;
      return pe(this._callObjectMode, "requestAccess()"), Y(this._callState, "requestAccess()"), new Promise(function(w, k) {
        o.sendMessageToCallMachine({ action: "daily-method-request-access", access: f, name: v }, function(P) {
          P.error && k(P.error), P.access || k(new Error("unknown error in requestAccess()")), w({ access: P.access, granted: P.granted });
        });
      });
    }), function() {
      return yr.apply(this, arguments);
    }) }, { key: "localAudio", value: function() {
      return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.audio.state) : null;
    } }, { key: "localVideo", value: function() {
      return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.video.state) : null;
    } }, { key: "setLocalAudio", value: function(o) {
      var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return "forceDiscardTrack" in s && (N() ? (console.warn("forceDiscardTrack option not supported in React Native; ignoring"), s = {}) : o && (console.warn("forceDiscardTrack option only supported when calling setLocalAudio(false); ignoring"), s = {})), this.sendMessageToCallMachine({ action: "local-audio", state: o, options: s }), this;
    } }, { key: "localScreenAudio", value: function() {
      return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.screenAudio.state) : null;
    } }, { key: "localScreenVideo", value: function() {
      return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.screenVideo.state) : null;
    } }, { key: "updateScreenShare", value: function(o) {
      if (this._isScreenSharing) return this.sendMessageToCallMachine({ action: "local-screen-update", options: o }), this;
      console.warn("There is no screen share in progress. Try calling startScreenShare first.");
    } }, { key: "setLocalVideo", value: function(o) {
      return this.sendMessageToCallMachine({ action: "local-video", state: o }), this;
    } }, { key: "getReceiveSettings", value: (_r = M(function* (o) {
      var s = this, d = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).showInheritedValues, f = d !== void 0 && d;
      if (pe(this._callObjectMode, "getReceiveSettings()"), !this._callMachineInitialized) return this._receiveSettings;
      switch (F(o)) {
        case "string":
          return new Promise(function(g) {
            s.sendMessageToCallMachine({ action: "get-single-participant-receive-settings", id: o, showInheritedValues: f }, function(v) {
              g(v.receiveSettings);
            });
          });
        case "undefined":
          return this._receiveSettings;
        default:
          throw new Error('first argument to getReceiveSettings() must be a participant id (or "base"), or there should be no arguments');
      }
    }), function(o) {
      return _r.apply(this, arguments);
    }) }, { key: "updateReceiveSettings", value: (vr = M(function* (o) {
      var s = this;
      if (pe(this._callObjectMode, "updateReceiveSettings()"), !Aa(o, { allowAllParticipantsKey: !0 })) throw new Error(Pa({ allowAllParticipantsKey: !0 }));
      return Y(this._callState, "updateReceiveSettings()", "To specify receive settings earlier, use the receiveSettings config property."), new Promise(function(d) {
        s.sendMessageToCallMachine({ action: "update-receive-settings", receiveSettings: o }, function(f) {
          d({ receiveSettings: f.receiveSettings });
        });
      });
    }), function(o) {
      return vr.apply(this, arguments);
    }) }, { key: "_prepInputSettingsToPresentToUser", value: function(o) {
      var s, d, f, g, v, w, k, P;
      if (o) {
        var J = {}, z = ((s = o.audio) === null || s === void 0 || (d = s.processor) === null || d === void 0 ? void 0 : d.type) === "none" && ((f = o.audio) === null || f === void 0 || (g = f.processor) === null || g === void 0 ? void 0 : g._isDefaultWhenNone);
        if (o.audio && !z) {
          var H = A({}, o.audio.processor);
          delete H._isDefaultWhenNone, J.audio = A(A({}, o.audio), {}, { processor: H });
        }
        var re = ((v = o.video) === null || v === void 0 || (w = v.processor) === null || w === void 0 ? void 0 : w.type) === "none" && ((k = o.video) === null || k === void 0 || (P = k.processor) === null || P === void 0 ? void 0 : P._isDefaultWhenNone);
        if (o.video && !re) {
          var q = A({}, o.video.processor);
          delete q._isDefaultWhenNone, J.video = A(A({}, o.video), {}, { processor: q });
        }
        return J;
      }
    } }, { key: "getInputSettings", value: function() {
      var o = this;
      return I(), new Promise(function(s) {
        s(o._getInputSettings());
      });
    } }, { key: "_getInputSettings", value: function() {
      var o, s, d, f, g, v, w, k, P = { processor: { type: "none", _isDefaultWhenNone: !0 } };
      this._inputSettings ? (o = ((d = this._inputSettings) === null || d === void 0 ? void 0 : d.video) || P, s = ((f = this._inputSettings) === null || f === void 0 ? void 0 : f.audio) || P) : (o = ((g = this._preloadCache) === null || g === void 0 || (v = g.inputSettings) === null || v === void 0 ? void 0 : v.video) || P, s = ((w = this._preloadCache) === null || w === void 0 || (k = w.inputSettings) === null || k === void 0 ? void 0 : k.audio) || P);
      var J = { audio: s, video: o };
      return this._prepInputSettingsToPresentToUser(J);
    } }, { key: "updateInputSettings", value: (gr = M(function* (o) {
      var s = this;
      return I(), Oa(o) ? (o && (this._preloadCache.inputSettings || (this._preloadCache.inputSettings = {}), La(o, this.properties.dailyConfig), o.audio && (this._preloadCache.inputSettings.audio = o.audio), o.video && (this._preloadCache.inputSettings.video = o.video)), o.video || o.audio ? this._callObjectMode && !this._callMachineInitialized ? this._getInputSettings() : new Promise(function(d, f) {
        s.sendMessageToCallMachine({ action: "update-input-settings", inputSettings: o }, function(g) {
          g.error ? f(g.error) : d({ inputSettings: s._prepInputSettingsToPresentToUser(g.inputSettings) });
        });
      }) : this._getInputSettings()) : (console.error(zn()), Promise.reject(zn()));
    }), function(o) {
      return gr.apply(this, arguments);
    }) }, { key: "setBandwidth", value: function(o) {
      var s = o.kbs, d = o.trackConstraints;
      if (I(), this._callMachineInitialized) return this.sendMessageToCallMachine({ action: "set-bandwidth", kbs: s, trackConstraints: d }), this;
    } }, { key: "getDailyLang", value: function() {
      var o = this;
      if (I(), this._callMachineInitialized) return new Promise(function(s) {
        o.sendMessageToCallMachine({ action: "get-daily-lang" }, function(d) {
          delete d.action, delete d.callbackStamp, s(d);
        });
      });
    } }, { key: "setDailyLang", value: function(o) {
      return I(), this.sendMessageToCallMachine({ action: "set-daily-lang", lang: o }), this;
    } }, { key: "setProxyUrl", value: function(o) {
      return this.sendMessageToCallMachine({ action: "set-proxy-url", proxyUrl: o }), this;
    } }, { key: "setIceConfig", value: function(o) {
      return this.sendMessageToCallMachine({ action: "set-ice-config", iceConfig: o }), this;
    } }, { key: "meetingSessionSummary", value: function() {
      return [ve, _e].includes(this._callState) ? this._finalSummaryOfPrevSession : this._meetingSessionSummary;
    } }, { key: "getMeetingSession", value: (mr = M(function* () {
      var o = this;
      return console.warn("getMeetingSession() is deprecated: use meetingSessionSummary(), which will return immediately"), Y(this._callState, "getMeetingSession()"), new Promise(function(s) {
        o.sendMessageToCallMachine({ action: "get-meeting-session" }, function(d) {
          delete d.action, delete d.callbackStamp, delete d.callFrameId, s(d);
        });
      });
    }), function() {
      return mr.apply(this, arguments);
    }) }, { key: "meetingSessionState", value: function() {
      return Y(this._callState, "meetingSessionState"), this._meetingSessionState;
    } }, { key: "setMeetingSessionData", value: function(o) {
      var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "replace";
      pe(this._callObjectMode, "setMeetingSessionData()"), Y(this._callState, "setMeetingSessionData");
      try {
        (function(d, f) {
          new Nc({ data: d, mergeStrategy: f });
        })(o, s);
      } catch (d) {
        throw console.error(d), d;
      }
      try {
        this.sendMessageToCallMachine({ action: "set-session-data", data: o, mergeStrategy: s });
      } catch (d) {
        throw new Error("Error setting meeting session data: ".concat(d));
      }
    } }, { key: "setUserName", value: function(o, s) {
      var d = this;
      return this.properties.userName = o, new Promise(function(f) {
        d.sendMessageToCallMachine({ action: "set-user-name", name: o ?? "", thisMeetingOnly: N() || !!s && !!s.thisMeetingOnly }, function(g) {
          delete g.action, delete g.callbackStamp, f(g);
        });
      });
    } }, { key: "setUserData", value: (fr = M(function* (o) {
      var s = this;
      try {
        Ma(o);
      } catch (d) {
        throw console.error(d), d;
      }
      if (this.properties.userData = o, this._callMachineInitialized) return new Promise(function(d) {
        try {
          s.sendMessageToCallMachine({ action: "set-user-data", userData: o }, function(f) {
            delete f.action, delete f.callbackStamp, delete f.callFrameId, d(f);
          });
        } catch (f) {
          throw new Error("Error setting user data: ".concat(f));
        }
      });
    }), function(o) {
      return fr.apply(this, arguments);
    }) }, { key: "validateAudioLevelInterval", value: function(o) {
      if (o && (o < 100 || typeof o != "number")) throw new Error("The interval must be a number greater than or equal to 100 milliseconds.");
    } }, { key: "startLocalAudioLevelObserver", value: function(o) {
      var s = this;
      if (typeof AudioWorkletNode > "u" && !N()) throw new Error("startLocalAudioLevelObserver() is not supported on this browser");
      if (this.validateAudioLevelInterval(o), this._callMachineInitialized) return new Promise(function(d, f) {
        s.sendMessageToCallMachine({ action: "start-local-audio-level-observer", interval: o }, function(g) {
          g.error ? f({ error: g.error }) : d();
        });
      });
      this._preloadCache.localAudioLevelObserver = { enabled: !0, interval: o };
    } }, { key: "stopLocalAudioLevelObserver", value: function() {
      this._preloadCache.localAudioLevelObserver = null, this._localAudioLevel = 0, this.sendMessageToCallMachine({ action: "stop-local-audio-level-observer" });
    } }, { key: "startRemoteParticipantsAudioLevelObserver", value: function(o) {
      var s = this;
      if (this.validateAudioLevelInterval(o), this._callMachineInitialized) return new Promise(function(d, f) {
        s.sendMessageToCallMachine({ action: "start-remote-participants-audio-level-observer", interval: o }, function(g) {
          g.error ? f({ error: g.error }) : d();
        });
      });
      this._preloadCache.remoteParticipantsAudioLevelObserver = { enabled: !0, interval: o };
    } }, { key: "stopRemoteParticipantsAudioLevelObserver", value: function() {
      this._preloadCache.remoteParticipantsAudioLevelObserver = null, this._remoteParticipantsAudioLevel = {}, this.sendMessageToCallMachine({ action: "stop-remote-participants-audio-level-observer" });
    } }, { key: "startCamera", value: (pr = M(function* () {
      var o = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (pe(this._callObjectMode, "startCamera()"), qi(this._callState, this._isPreparingToJoin, "startCamera()", "Did you mean to use setLocalAudio() and/or setLocalVideo() instead?"), Ie(this._testCallInProgress, "startCamera()"), this.needsLoad()) try {
        yield this.load(s);
      } catch (d) {
        return Promise.reject(d);
      }
      else {
        if (this._didPreAuth) {
          if (s.url && s.url !== this.properties.url) return console.error("url in startCamera() is different than the one used in preAuth()"), Promise.reject();
          if (s.token && s.token !== this.properties.token) return console.error("token in startCamera() is different than the one used in preAuth()"), Promise.reject();
        }
        this.validateProperties(s), this.properties = A(A({}, this.properties), s);
      }
      return new Promise(function(d) {
        o.sendMessageToCallMachine({ action: "start-camera", properties: qe(o.properties, o._callFrameId), preloadCache: qe(o._preloadCache, o._callFrameId) }, function(f) {
          delete f.action, delete f.callbackStamp, d(f);
        });
      });
    }), function() {
      return pr.apply(this, arguments);
    }) }, { key: "validateCustomTrack", value: function(o, s, d) {
      if (d && d.length > 50) throw new Error("Custom track `trackName` must not be more than 50 characters");
      if (s && s !== "music" && s !== "speech" && !(s instanceof Object)) throw new Error("Custom track `mode` must be either `music` | `speech` | `DailyMicAudioModeSettings` or `undefined`");
      if (d && ["cam-audio", "cam-video", "screen-video", "screen-audio", "rmpAudio", "rmpVideo", "customVideoDefaults"].includes(d)) throw new Error("Custom track `trackName` must not match a track name already used by daily: cam-audio, cam-video, customVideoDefaults, screen-video, screen-audio, rmpAudio, rmpVideo");
      if (!(o instanceof MediaStreamTrack)) throw new Error("Custom tracks provided must be instances of MediaStreamTrack");
    } }, { key: "startCustomTrack", value: function() {
      var o = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { track, mode, trackName };
      return I(), Y(this._callState, "startCustomTrack()"), this.validateCustomTrack(s.track, s.mode, s.trackName), new Promise(function(d, f) {
        o._sharedTracks.customTrack = s.track, s.track = dt, o.sendMessageToCallMachine({ action: "start-custom-track", properties: s }, function(g) {
          g.error ? f({ error: g.error }) : d(g.mediaTag);
        });
      });
    } }, { key: "stopCustomTrack", value: function(o) {
      var s = this;
      return I(), Y(this._callState, "stopCustomTrack()"), new Promise(function(d) {
        s.sendMessageToCallMachine({ action: "stop-custom-track", mediaTag: o }, function(f) {
          d(f.mediaTag);
        });
      });
    } }, { key: "setCamera", value: function(o) {
      var s = this;
      return lt(), _n(this._callMachineInitialized, "setCamera()"), new Promise(function(d) {
        s.sendMessageToCallMachine({ action: "set-camera", cameraDeviceId: o }, function(f) {
          d({ device: f.device });
        });
      });
    } }, { key: "setAudioDevice", value: (hr = M(function* (o) {
      return lt(), this.nativeUtils().setAudioDevice(o), { deviceId: yield this.nativeUtils().getAudioDevice() };
    }), function(o) {
      return hr.apply(this, arguments);
    }) }, { key: "cycleCamera", value: function() {
      var o = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return new Promise(function(d) {
        o.sendMessageToCallMachine({ action: "cycle-camera", properties: s }, function(f) {
          d({ device: f.device });
        });
      });
    } }, { key: "cycleMic", value: function() {
      var o = this;
      return I(), new Promise(function(s) {
        o.sendMessageToCallMachine({ action: "cycle-mic" }, function(d) {
          s({ device: d.device });
        });
      });
    } }, { key: "getCameraFacingMode", value: function() {
      var o = this;
      return lt(), new Promise(function(s) {
        o.sendMessageToCallMachine({ action: "get-camera-facing-mode" }, function(d) {
          s(d.facingMode);
        });
      });
    } }, { key: "setInputDevicesAsync", value: (dr = M(function* (o) {
      var s = this, d = o.audioDeviceId, f = o.videoDeviceId, g = o.audioSource, v = o.videoSource;
      return I(), g !== void 0 && (d = g), v !== void 0 && (f = v), d && (this._preloadCache.audioDeviceId = d, this._sharedTracks.audioDeviceId = d), f && (this._preloadCache.videoDeviceId = f, this._sharedTracks.videoDeviceId = f), this._callObjectMode && this.needsLoad() ? { camera: { deviceId: this._preloadCache.videoDeviceId }, mic: { deviceId: this._preloadCache.audioDeviceId }, speaker: { deviceId: this._preloadCache.outputDeviceId } } : (d instanceof MediaStreamTrack && (d = dt), f instanceof MediaStreamTrack && (f = dt), new Promise(function(w) {
        s.sendMessageToCallMachine({ action: "set-input-devices", audioDeviceId: d, videoDeviceId: f }, function(k) {
          delete k.action, delete k.callbackStamp, k.returnPreloadCache ? w({ camera: { deviceId: s._preloadCache.videoDeviceId }, mic: { deviceId: s._preloadCache.audioDeviceId }, speaker: { deviceId: s._preloadCache.outputDeviceId } }) : w(k);
        });
      }));
    }), function(o) {
      return dr.apply(this, arguments);
    }) }, { key: "setOutputDeviceAsync", value: (ur = M(function* (o) {
      var s = this, d = o.outputDeviceId;
      return I(), d && (this._preloadCache.outputDeviceId = d), this._callObjectMode && this.needsLoad() ? { camera: { deviceId: this._preloadCache.videoDeviceId }, mic: { deviceId: this._preloadCache.audioDeviceId }, speaker: { deviceId: this._preloadCache.outputDeviceId } } : new Promise(function(f) {
        s.sendMessageToCallMachine({ action: "set-output-device", outputDeviceId: d }, function(g) {
          delete g.action, delete g.callbackStamp, g.returnPreloadCache ? f({ camera: { deviceId: s._preloadCache.videoDeviceId }, mic: { deviceId: s._preloadCache.audioDeviceId }, speaker: { deviceId: s._preloadCache.outputDeviceId } }) : f(g);
        });
      });
    }), function(o) {
      return ur.apply(this, arguments);
    }) }, { key: "getInputDevices", value: (lr = M(function* () {
      var o = this;
      return this._callObjectMode && this.needsLoad() ? { camera: { deviceId: this._preloadCache.videoDeviceId }, mic: { deviceId: this._preloadCache.audioDeviceId }, speaker: { deviceId: this._preloadCache.outputDeviceId } } : new Promise(function(s) {
        o.sendMessageToCallMachine({ action: "get-input-devices" }, function(d) {
          delete d.action, delete d.callbackStamp, d.returnPreloadCache ? s({ camera: { deviceId: o._preloadCache.videoDeviceId }, mic: { deviceId: o._preloadCache.audioDeviceId }, speaker: { deviceId: o._preloadCache.outputDeviceId } }) : s(d);
        });
      });
    }), function() {
      return lr.apply(this, arguments);
    }) }, { key: "nativeInCallAudioMode", value: function() {
      return lt(), this._nativeInCallAudioMode;
    } }, { key: "setNativeInCallAudioMode", value: function(o) {
      if (lt(), [Ui, nl].includes(o)) {
        if (o !== this._nativeInCallAudioMode) return this._nativeInCallAudioMode = o, !this.disableReactNativeAutoDeviceManagement("audio") && Vt(this._callState, this._isPreparingToJoin) && this.nativeUtils().setAudioMode(this._nativeInCallAudioMode), this;
      } else console.error("invalid in-call audio mode specified: ", o);
    } }, { key: "preAuth", value: (cr = M(function* () {
      var o = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (pe(this._callObjectMode, "preAuth()"), qi(this._callState, this._isPreparingToJoin, "preAuth()"), Ie(this._testCallInProgress, "preAuth()"), this.needsLoad() && (yield this.load(s)), !s.url) throw new Error("preAuth() requires at least a url to be provided");
      return this.validateProperties(s), this.properties = A(A({}, this.properties), s), new Promise(function(d, f) {
        o.sendMessageToCallMachine({ action: "daily-method-preauth", properties: qe(o.properties, o._callFrameId), preloadCache: qe(o._preloadCache, o._callFrameId) }, function(g) {
          return g.error ? f(g.error) : g.access ? (o._didPreAuth = !0, void d({ access: g.access })) : f(new Error("unknown error in preAuth()"));
        });
      });
    }), function() {
      return cr.apply(this, arguments);
    }) }, { key: "load", value: (ot = M(function* (o) {
      var s = this;
      if (this.needsLoad()) {
        if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode)) throw new Error("Use after destroy");
        if (o && (this.validateProperties(o), this.properties = A(A({}, this.properties), o)), !this._callObjectMode && !this.properties.url) throw new Error("can't load iframe meeting because url property isn't set");
        this._updateCallState(yi);
        try {
          this.emit(Rn, { action: Rn });
        } catch (d) {
          console.log("could not emit 'loading'", d);
        }
        return this._callObjectMode ? new Promise(function(d, f) {
          s._callObjectLoader.cancel();
          var g = Date.now();
          s._callObjectLoader.load(s.properties.dailyConfig, function(v) {
            s._bundleLoadTime = v ? "no-op" : Date.now() - g, s._updateCallState(bi), v && s.emit(Rt, { action: Rt }), d();
          }, function(v, w) {
            if (s.emit(xn, { action: xn, error: v }), !w) {
              s._updateCallState(_e), s.resetMeetingDependentVars();
              var k = { action: Bt, errorMsg: v.msg, error: { type: "connection-error", msg: "Failed to load call object bundle.", details: { on: "load", sourceError: v, bundleUrl: $t(s.properties.dailyConfig) } } };
              s._maybeSendToSentry(k), s.emit(Bt, k), f(v.msg);
            }
          });
        }) : (this._iframe.src = ro(this.assembleMeetingUrl(), this.properties.dailyConfig), new Promise(function(d, f) {
          s._loadedCallback = function(g) {
            s._callState !== _e ? (s._updateCallState(bi), (s.properties.cssFile || s.properties.cssText) && s.loadCss(s.properties), d()) : f(g);
          };
        }));
      }
    }), function(o) {
      return ot.apply(this, arguments);
    }) }, { key: "join", value: (Ge = M(function* () {
      var o = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      Ie(this._testCallInProgress, "join()");
      var d = !1;
      if (this.needsLoad()) {
        this.updateIsPreparingToJoin(!0);
        try {
          yield this.load(s);
        } catch (f) {
          return this.updateIsPreparingToJoin(!1), Promise.reject(f);
        }
      } else {
        if (d = !(!this.properties.cssFile && !this.properties.cssText), this._didPreAuth) {
          if (s.url && s.url !== this.properties.url) return console.error("url in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(!1), Promise.reject();
          if (s.token && s.token !== this.properties.token) return console.error("token in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(!1), Promise.reject();
        }
        if (s.url && !this._callObjectMode && s.url && s.url !== this.properties.url) return console.error("url in join() is different than the one used in load() (".concat(this.properties.url, " -> ").concat(s.url, ")")), this.updateIsPreparingToJoin(!1), Promise.reject();
        this.validateProperties(s), this.properties = A(A({}, this.properties), s);
      }
      if (s.showLocalVideo !== void 0 && (this._callObjectMode ? console.error("showLocalVideo is not available in callObject mode") : this._showLocalVideo = !!s.showLocalVideo), s.showParticipantsBar !== void 0 && (this._callObjectMode ? console.error("showParticipantsBar is not available in callObject mode") : this._showParticipantsBar = !!s.showParticipantsBar), this._callState === je || this._callState === Ht) return console.warn("already joined meeting, call leave() before joining again"), void this.updateIsPreparingToJoin(!1);
      this._updateCallState(Ht, !1);
      try {
        this.emit(jn, { action: jn });
      } catch (f) {
        console.log("could not emit 'joining-meeting'", f);
      }
      return this._preloadCache.inputSettings || (this._preloadCache.inputSettings = {}), s.inputSettings && s.inputSettings.audio && (this._preloadCache.inputSettings.audio = s.inputSettings.audio), s.inputSettings && s.inputSettings.video && (this._preloadCache.inputSettings.video = s.inputSettings.video), this.sendMessageToCallMachine({ action: "join-meeting", properties: qe(this.properties, this._callFrameId), preloadCache: qe(this._preloadCache, this._callFrameId) }), new Promise(function(f, g) {
        o._joinedCallback = function(v, w) {
          if (o._callState !== _e) {
            if (o._updateCallState(je), v) for (var k in v) {
              if (o._callObjectMode) {
                var P = o._callMachine().store;
                Ii(v[k], P), Di(v[k], P), Ni(v[k], o._participants[k], P);
              }
              o._participants[k] = A({}, v[k]), o.toggleParticipantAudioBasedOnNativeAudioFocus();
            }
            d && o.loadCss(o.properties), f(v);
          } else g(w);
        };
      });
    }), function() {
      return Ge.apply(this, arguments);
    }) }, { key: "leave", value: (Se = M(function* () {
      var o = this;
      return Ie(this._testCallInProgress, "leave()"), new Promise(function(s) {
        if (o._callState === ve || o._callState === _e) s();
        else if (o._callObjectLoader && !o._callObjectLoader.loaded) {
          o._callObjectLoader.cancel(), o._updateCallState(ve), o.resetMeetingDependentVars();
          try {
            o.emit(ve, { action: ve });
          } catch (d) {
            console.log("could not emit 'left-meeting'", d);
          }
          s();
        } else o._resolveLeave = s, o.sendMessageToCallMachine({ action: "leave-meeting" });
      });
    }), function() {
      return Se.apply(this, arguments);
    }) }, { key: "startScreenShare", value: ($ = M(function* () {
      var o = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (_n(this._callMachineInitialized, "startScreenShare()"), s.screenVideoSendSettings && this._validateVideoSendSettings("screenVideo", s.screenVideoSendSettings), s.mediaStream && (this._sharedTracks.screenMediaStream = s.mediaStream, s.mediaStream = dt), typeof DailyNativeUtils < "u" && DailyNativeUtils.isIOS !== void 0 && DailyNativeUtils.isIOS) {
        var d = this.nativeUtils();
        if (yield d.isScreenBeingCaptured()) return void this.emit(Ft, { action: Ft, type: "screen-share-error", errorMsg: "Could not start the screen sharing. The screen is already been captured!" });
        d.setSystemScreenCaptureStartCallback(function() {
          d.setSystemScreenCaptureStartCallback(null), o.sendMessageToCallMachine({ action: wi, captureOptions: s });
        }), d.presentSystemScreenCapturePrompt();
      } else this.sendMessageToCallMachine({ action: wi, captureOptions: s });
    }), function() {
      return $.apply(this, arguments);
    }) }, { key: "stopScreenShare", value: function() {
      _n(this._callMachineInitialized, "stopScreenShare()"), this.sendMessageToCallMachine({ action: "local-screen-stop" });
    } }, { key: "startRecording", value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      this.sendMessageToCallMachine(A({ action: "local-recording-start" }, o));
    } }, { key: "updateRecording", value: function(o) {
      var s = o.layout, d = s === void 0 ? { preset: "default" } : s, f = o.instanceId;
      this.sendMessageToCallMachine({ action: "daily-method-update-recording", layout: d, instanceId: f });
    } }, { key: "stopRecording", value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      this.sendMessageToCallMachine(A({ action: "local-recording-stop" }, o));
    } }, { key: "startLiveStreaming", value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      this.sendMessageToCallMachine(A({ action: "daily-method-start-live-streaming" }, o));
    } }, { key: "updateLiveStreaming", value: function(o) {
      var s = o.layout, d = s === void 0 ? { preset: "default" } : s, f = o.instanceId;
      this.sendMessageToCallMachine({ action: "daily-method-update-live-streaming", layout: d, instanceId: f });
    } }, { key: "addLiveStreamingEndpoints", value: function(o) {
      var s = o.endpoints, d = o.instanceId;
      this.sendMessageToCallMachine({ action: ki, endpointsOp: Tc, endpoints: s, instanceId: d });
    } }, { key: "removeLiveStreamingEndpoints", value: function(o) {
      var s = o.endpoints, d = o.instanceId;
      this.sendMessageToCallMachine({ action: ki, endpointsOp: Cc, endpoints: s, instanceId: d });
    } }, { key: "stopLiveStreaming", value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      this.sendMessageToCallMachine(A({ action: "daily-method-stop-live-streaming" }, o));
    } }, { key: "validateDailyConfig", value: function(o) {
      o.camSimulcastEncodings && (console.warn("camSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide camera simulcast settings."), this.validateSimulcastEncodings(o.camSimulcastEncodings)), o.screenSimulcastEncodings && console.warn("screenSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide screen simulcast settings."), ce().match(/Linux; Android/) && o.noAutoDefaultDeviceChange && console.warn("noAutoDefaultDeviceChange is not supported on Android, and will be ignored.");
    } }, { key: "validateSimulcastEncodings", value: function(o) {
      var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, d = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
      if (o) {
        if (!(o instanceof Array)) throw new Error("encodings must be an Array");
        if (!Wi(o.length, 1, 3)) throw new Error("encodings must be an Array with between 1 to ".concat(3, " layers"));
        for (var f = 0; f < o.length; f++) {
          var g = o[f];
          for (var v in this._validateEncodingLayerHasValidProperties(g), g) if (vn.includes(v)) {
            if (typeof g[v] != "number") throw new Error("".concat(v, " must be a number"));
            if (s) {
              var w = s[v], k = w.min, P = w.max;
              if (!Wi(g[v], k, P)) throw new Error("".concat(v, " value not in range. valid range: ").concat(k, " to ").concat(P));
            }
          } else if (!["active", "scalabilityMode"].includes(v)) throw new Error("Invalid key ".concat(v, ", valid keys are:") + Object.values(vn));
          if (d && !g.hasOwnProperty("maxBitrate")) throw new Error("maxBitrate is not specified");
        }
      }
    } }, { key: "startRemoteMediaPlayer", value: (O = M(function* (o) {
      var s = this, d = o.url, f = o.settings, g = f === void 0 ? { state: Un.PLAY } : f;
      try {
        (function(v) {
          if (typeof v != "string") throw new Error('url parameter must be "string" type');
        })(d), Ji(g), function(v) {
          for (var w in v) if (!$i.includes(w)) throw new Error("Invalid key ".concat(w, ", valid keys are: ").concat($i));
          v.simulcastEncodings && this.validateSimulcastEncodings(v.simulcastEncodings, Ca, !0);
        }(g);
      } catch (v) {
        throw console.error("invalid argument Error: ".concat(v)), console.error(`startRemoteMediaPlayer arguments must be of the form:
  { url: "playback url",
  settings?:
  {state: "play"|"pause", simulcastEncodings?: [{}] } }`), v;
      }
      return new Promise(function(v, w) {
        s.sendMessageToCallMachine({ action: "daily-method-start-remote-media-player", url: d, settings: g }, function(k) {
          k.error ? w({ error: k.error, errorMsg: k.errorMsg }) : v({ session_id: k.session_id, remoteMediaPlayerState: { state: k.state, settings: k.settings } });
        });
      });
    }), function(o) {
      return O.apply(this, arguments);
    }) }, { key: "stopRemoteMediaPlayer", value: (T = M(function* (o) {
      var s = this;
      if (typeof o != "string") throw new Error(" remotePlayerID must be of type string");
      return new Promise(function(d, f) {
        s.sendMessageToCallMachine({ action: "daily-method-stop-remote-media-player", session_id: o }, function(g) {
          g.error ? f({ error: g.error, errorMsg: g.errorMsg }) : d();
        });
      });
    }), function(o) {
      return T.apply(this, arguments);
    }) }, { key: "updateRemoteMediaPlayer", value: (E = M(function* (o) {
      var s = this, d = o.session_id, f = o.settings;
      try {
        Ji(f);
      } catch (g) {
        throw console.error("invalid argument Error: ".concat(g)), console.error(`updateRemoteMediaPlayer arguments must be of the form:
  session_id: "participant session",
  { settings?: {state: "play"|"pause"} }`), g;
      }
      return new Promise(function(g, v) {
        s.sendMessageToCallMachine({ action: "daily-method-update-remote-media-player", session_id: d, settings: f }, function(w) {
          w.error ? v({ error: w.error, errorMsg: w.errorMsg }) : g({ session_id: w.session_id, remoteMediaPlayerState: { state: w.state, settings: w.settings } });
        });
      });
    }), function(o) {
      return E.apply(this, arguments);
    }) }, { key: "startTranscription", value: function(o) {
      this.sendMessageToCallMachine(A({ action: "daily-method-start-transcription" }, o));
    } }, { key: "stopTranscription", value: function() {
      this.sendMessageToCallMachine({ action: "daily-method-stop-transcription" });
    } }, { key: "startDialOut", value: (b = M(function* (o) {
      var s = this;
      Y(this._callState, "startDialOut()");
      var d = function(f) {
        if (f) {
          if (!Array.isArray(f)) throw new Error("Error starting dial out: audio codec must be an array");
          if (f.length <= 0) throw new Error("Error starting dial out: audio codec array specified but empty");
          f.forEach(function(g) {
            if (typeof g != "string") throw new Error("Error starting dial out: audio codec must be a string");
            if (g !== "OPUS" && g !== "PCMU" && g !== "PCMA" && g !== "G722") throw new Error("Error starting dial out: audio codec must be one of OPUS, PCMU, PCMA, G722");
          });
        }
      };
      if (!o.sipUri && !o.phoneNumber) throw new Error("Error starting dial out: either a sip uri or phone number must be provided");
      if (o.sipUri && o.phoneNumber) throw new Error("Error starting dial out: only one of sip uri or phone number must be provided");
      if (o.sipUri) {
        if (typeof o.sipUri != "string") throw new Error("Error starting dial out: sipUri must be a string");
        if (!o.sipUri.startsWith("sip:")) throw new Error("Error starting dial out: Invalid SIP URI, must start with 'sip:'");
        if (o.video && typeof o.video != "boolean") throw new Error("Error starting dial out: video must be a boolean value");
        (function(f) {
          if (f && (d(f.audio), f.video)) {
            if (!Array.isArray(f.video)) throw new Error("Error starting dial out: video codec must be an array");
            if (f.video.length <= 0) throw new Error("Error starting dial out: video codec array specified but empty");
            f.video.forEach(function(g) {
              if (typeof g != "string") throw new Error("Error starting dial out: video codec must be a string");
              if (g !== "H264" && g !== "VP8") throw new Error("Error starting dial out: video codec must be H264 or VP8");
            });
          }
        })(o.codecs);
      }
      if (o.phoneNumber) {
        if (typeof o.phoneNumber != "string") throw new Error("Error starting dial out: phoneNumber must be a string");
        if (!/^\+\d{1,}$/.test(o.phoneNumber)) throw new Error("Error starting dial out: Invalid phone number, must be valid phone number as per E.164");
        o.codecs && d(o.codecs.audio);
      }
      if (o.callerId) {
        if (typeof o.callerId != "string") throw new Error("Error starting dial out: callerId must be a string");
        if (o.sipUri) throw new Error("Error starting dial out: callerId not allowed with sipUri");
      }
      if (o.displayName) {
        if (typeof o.displayName != "string") throw new Error("Error starting dial out: displayName must be a string");
        if (o.displayName.length >= 200) throw new Error("Error starting dial out: displayName length must be less than 200");
      }
      return new Promise(function(f, g) {
        s.sendMessageToCallMachine(A({ action: "dialout-start" }, o), function(v) {
          v.error ? g(v.error) : f(v);
        });
      });
    }), function(o) {
      return b.apply(this, arguments);
    }) }, { key: "stopDialOut", value: function(o) {
      var s = this;
      return Y(this._callState, "stopDialOut()"), new Promise(function(d, f) {
        s.sendMessageToCallMachine(A({ action: "dialout-stop" }, o), function(g) {
          g.error ? f(g.error) : d(g);
        });
      });
    } }, { key: "sendDTMF", value: (S = M(function* (o) {
      var s = this;
      return Y(this._callState, "sendDTMF()"), function(d) {
        var f = d.sessionId, g = d.tones;
        if (!f || !g) throw new Error("sessionId and tones are mandatory parameter");
        if (typeof f != "string" || typeof g != "string") throw new Error("sessionId and tones should be of string type");
        if (g.length > 20) throw new Error("tones string must be upto 20 characters");
        var v = /[^0-9A-D*#]/g, w = g.match(v);
        if (w && w[0]) throw new Error("".concat(w[0], " is not valid DTMF tone"));
      }(o), new Promise(function(d, f) {
        s.sendMessageToCallMachine(A({ action: "send-dtmf" }, o), function(g) {
          g.error ? f(g.error) : d(g);
        });
      });
    }), function(o) {
      return S.apply(this, arguments);
    }) }, { key: "getNetworkStats", value: function() {
      var o = this;
      return this._callState !== je ? { stats: { latest: {} } } : new Promise(function(s) {
        o.sendMessageToCallMachine({ action: "get-calc-stats" }, function(d) {
          s(A({ stats: d.stats }, o._network));
        });
      });
    } }, { key: "testWebsocketConnectivity", value: (_ = M(function* () {
      var o = this;
      if (Ie(this._testCallInProgress, "testWebsocketConnectivity()"), this.needsLoad()) try {
        yield this.load();
      } catch (s) {
        return Promise.reject(s);
      }
      return new Promise(function(s, d) {
        o.sendMessageToCallMachine({ action: "test-websocket-connectivity" }, function(f) {
          f.error ? d(f.error) : s(f.results);
        });
      });
    }), function() {
      return _.apply(this, arguments);
    }) }, { key: "abortTestWebsocketConnectivity", value: function() {
      this.sendMessageToCallMachine({ action: "abort-test-websocket-connectivity" });
    } }, { key: "_validateVideoTrackForNetworkTests", value: function(o) {
      return o ? o instanceof MediaStreamTrack ? !!Qc(o) || (console.error("Video track is not playable. This test needs a live video track."), !1) : (console.error("Video track needs to be of type `MediaStreamTrack`."), !1) : (console.error("Missing video track. You must provide a video track in order to run this test."), !1);
    } }, { key: "testCallQuality", value: (m = M(function* (o) {
      var s = this;
      if (function(k) {
        var P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", J = arguments.length > 2 ? arguments[2] : void 0;
        if (k) {
          var z = "".concat(P, " can not be called after preAuth(), startCamera(), or join() and call state has been initialized.");
          throw J && (z += " ".concat(J)), console.error(z), new Error(z);
        }
      }(this._callMachineInitialized, "testCallQuality()"), o.videoTrack && !this._validateVideoTrackForNetworkTests(o.videoTrack)) throw new Error("Video track error");
      var d = this._testCallAlreadyInProgress, f = function(k) {
        d || (s._testCallInProgress = k);
      };
      f(!0);
      var g = o.videoTrack, v = sn(o, Xc);
      if (this._sharedTracks.videoTrackForConnectionQualityTest = g, this.needsLoad()) try {
        var w = this._callState;
        yield this.load(), this._callState = w;
      } catch (k) {
        return f(!1), Promise.reject(k);
      }
      return new Promise(function(k) {
        s.sendMessageToCallMachine(A(A({ action: "test-call-quality" }, v), {}, { dailyJsVersion: s.properties.dailyJsVersion }), function(P) {
          var J = P.results, z = J.result, H = sn(J, Zc);
          if (z === "failed") {
            var re, q = A({}, H);
            (re = H.error) !== null && re !== void 0 && re.details ? (H.error.details = JSON.parse(H.error.details), q.error = A(A({}, q.error), {}, { details: A({}, q.error.details) }), q.error.details.duringTest = "testCallQuality") : (q.error = q.error ? A({}, q.error) : {}, q.error.details = { duringTest: "testCallQuality" }), s._maybeSendToSentry(q);
          }
          f(!1), k(A({ result: z }, H));
        });
      });
    }), function(o) {
      return m.apply(this, arguments);
    }) }, { key: "stopTestCallQuality", value: function() {
      this.sendMessageToCallMachine({ action: "stop-test-call-quality" });
    } }, { key: "testConnectionQuality", value: (p = M(function* (o) {
      console.warn("testConnectionQuality() is deprecated: use testPeerToPeerCallQuality() instead");
      var s = yield this.testPeerToPeerCallQuality(o), d = { result: s.result, secondsElapsed: s.secondsElapsed };
      return s.data && (d.data = { maxRTT: s.data.maxRoundTripTime, packetLoss: s.data.avgRecvPacketLoss }), d;
    }), function(o) {
      return p.apply(this, arguments);
    }) }, { key: "testPeerToPeerCallQuality", value: (h = M(function* (o) {
      var s = this;
      if (Ie(this._testCallInProgress, "testConnectionQuality()"), this.needsLoad()) try {
        yield this.load();
      } catch (g) {
        return Promise.reject(g);
      }
      var d = o.videoTrack, f = o.duration;
      if (!this._validateVideoTrackForNetworkTests(d)) throw new Error("Video track error");
      return this._sharedTracks.videoTrackForConnectionQualityTest = d, new Promise(function(g, v) {
        s.sendMessageToCallMachine({ action: "test-p2p-call-quality", duration: f }, function(w) {
          w.error ? v(w.error) : g(w.results);
        });
      });
    }), function(o) {
      return h.apply(this, arguments);
    }) }, { key: "stopTestConnectionQuality", value: function() {
      console.warn("stopTestConnectionQuality() is deprecated: use stopTestPeerToPeerCallQuality() instead"), this.stopTestPeerToPeerCallQuality();
    } }, { key: "stopTestPeerToPeerCallQuality", value: function() {
      this.sendMessageToCallMachine({ action: "stop-test-p2p-call-quality" });
    } }, { key: "testNetworkConnectivity", value: (u = M(function* (o) {
      var s = this;
      if (Ie(this._testCallInProgress, "testNetworkConnectivity()"), this.needsLoad()) try {
        yield this.load();
      } catch (d) {
        return Promise.reject(d);
      }
      if (!this._validateVideoTrackForNetworkTests(o)) throw new Error("Video track error");
      return this._sharedTracks.videoTrackForNetworkConnectivityTest = o, new Promise(function(d, f) {
        s.sendMessageToCallMachine({ action: "test-network-connectivity" }, function(g) {
          g.error ? f(g.error) : d(g.results);
        });
      });
    }), function(o) {
      return u.apply(this, arguments);
    }) }, { key: "abortTestNetworkConnectivity", value: function() {
      this.sendMessageToCallMachine({ action: "abort-test-network-connectivity" });
    } }, { key: "getCpuLoadStats", value: function() {
      var o = this;
      return new Promise(function(s, d) {
        o._callState === je ? o.sendMessageToCallMachine({ action: "get-cpu-load-stats" }, function(f) {
          s(f.cpuStats);
        }) : s({ cpuLoadState: void 0, cpuLoadStateReason: void 0, stats: {} });
      });
    } }, { key: "_validateEncodingLayerHasValidProperties", value: function(o) {
      var s;
      if (!(((s = Object.keys(o)) === null || s === void 0 ? void 0 : s.length) > 0)) throw new Error("Empty encoding is not allowed. At least one of these valid keys should be specified:" + Object.values(vn));
    } }, { key: "_validateVideoSendSettings", value: function(o, s) {
      var d = o === "screenVideo" ? ["default-screen-video", "detail-optimized", "motion-optimized", "motion-and-detail-balanced"] : ["default-video", "bandwidth-optimized", "bandwidth-and-quality-balanced", "quality-optimized", "adaptive-2-layers", "adaptive-3-layers"], f = "Video send settings should be either an object or one of the supported presets: ".concat(d.join());
      if (typeof s == "string") {
        if (!d.includes(s)) throw new Error(f);
      } else {
        if (F(s) !== "object") throw new Error(f);
        if (!s.maxQuality && !s.encodings && s.allowAdaptiveLayers === void 0) throw new Error("Video send settings must contain at least maxQuality, allowAdaptiveLayers or encodings attribute");
        if (s.maxQuality && ["low", "medium", "high"].indexOf(s.maxQuality) === -1) throw new Error("maxQuality must be either low, medium or high");
        if (s.encodings) {
          var g = !1;
          switch (Object.keys(s.encodings).length) {
            case 1:
              g = !s.encodings.low;
              break;
            case 2:
              g = !s.encodings.low || !s.encodings.medium;
              break;
            case 3:
              g = !s.encodings.low || !s.encodings.medium || !s.encodings.high;
              break;
            default:
              g = !0;
          }
          if (g) throw new Error("Encodings must be defined as: low, low and medium, or low, medium and high.");
          s.encodings.low && this._validateEncodingLayerHasValidProperties(s.encodings.low), s.encodings.medium && this._validateEncodingLayerHasValidProperties(s.encodings.medium), s.encodings.high && this._validateEncodingLayerHasValidProperties(s.encodings.high);
        }
      }
    } }, { key: "validateUpdateSendSettings", value: function(o) {
      var s = this;
      if (!o || Object.keys(o).length === 0) throw new Error("Send settings must contain at least information for one track!");
      Object.entries(o).forEach(function(d) {
        var f = Be(d, 2), g = f[0], v = f[1];
        s._validateVideoSendSettings(g, v);
      });
    } }, { key: "updateSendSettings", value: function(o) {
      var s = this;
      return this.validateUpdateSendSettings(o), this.needsLoad() ? (this._preloadCache.sendSettings = o, { sendSettings: this._preloadCache.sendSettings }) : new Promise(function(d, f) {
        s.sendMessageToCallMachine({ action: "update-send-settings", sendSettings: o }, function(g) {
          g.error ? f(g.error) : d(g.sendSettings);
        });
      });
    } }, { key: "getSendSettings", value: function() {
      return this._sendSettings || this._preloadCache.sendSettings;
    } }, { key: "getLocalAudioLevel", value: function() {
      return this._localAudioLevel;
    } }, { key: "getRemoteParticipantsAudioLevel", value: function() {
      return this._remoteParticipantsAudioLevel;
    } }, { key: "getActiveSpeaker", value: function() {
      return I(), this._activeSpeaker;
    } }, { key: "setActiveSpeakerMode", value: function(o) {
      return I(), this.sendMessageToCallMachine({ action: "set-active-speaker-mode", enabled: o }), this;
    } }, { key: "activeSpeakerMode", value: function() {
      return I(), this._activeSpeakerMode;
    } }, { key: "subscribeToTracksAutomatically", value: function() {
      return this._preloadCache.subscribeToTracksAutomatically;
    } }, { key: "setSubscribeToTracksAutomatically", value: function(o) {
      return Y(this._callState, "setSubscribeToTracksAutomatically()", "Use the subscribeToTracksAutomatically configuration property."), this._preloadCache.subscribeToTracksAutomatically = o, this.sendMessageToCallMachine({ action: "daily-method-subscribe-to-tracks-automatically", enabled: o }), this;
    } }, { key: "enumerateDevices", value: (l = M(function* () {
      var o = this;
      if (this._callObjectMode) {
        var s = yield navigator.mediaDevices.enumerateDevices();
        return $e() === "Firefox" && Yn().major > 115 && Yn().major < 123 && (s = s.filter(function(d) {
          return d.kind !== "audiooutput";
        })), { devices: s.map(function(d) {
          var f = JSON.parse(JSON.stringify(d));
          if (!N() && d.kind === "videoinput" && d.getCapabilities) {
            var g, v = d.getCapabilities();
            f.facing = (v == null || (g = v.facingMode) === null || g === void 0 ? void 0 : g.length) >= 1 ? v.facingMode[0] : void 0;
          }
          return f;
        }) };
      }
      return new Promise(function(d) {
        o.sendMessageToCallMachine({ action: "enumerate-devices" }, function(f) {
          d({ devices: f.devices });
        });
      });
    }), function() {
      return l.apply(this, arguments);
    }) }, { key: "sendAppMessage", value: function(o) {
      var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "*";
      if (Y(this._callState, "sendAppMessage()"), JSON.stringify(o).length > 4096) throw new Error("Message data too large. Max size is 4096");
      return this.sendMessageToCallMachine({ action: "app-msg", data: o, to: s }), this;
    } }, { key: "addFakeParticipant", value: function(o) {
      return I(), Y(this._callState, "addFakeParticipant()"), this.sendMessageToCallMachine(A({ action: "add-fake-participant" }, o)), this;
    } }, { key: "setShowNamesMode", value: function(o) {
      return ee(this._callObjectMode, "setShowNamesMode()"), I(), o && o !== "always" && o !== "never" ? (console.error('setShowNamesMode argument should be "always", "never", or false'), this) : (this.sendMessageToCallMachine({ action: "set-show-names", mode: o }), this);
    } }, { key: "setShowLocalVideo", value: function() {
      var o = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
      return ee(this._callObjectMode, "setShowLocalVideo()"), I(), Y(this._callState, "setShowLocalVideo()"), typeof o != "boolean" ? (console.error("setShowLocalVideo only accepts a boolean value"), this) : (this.sendMessageToCallMachine({ action: "set-show-local-video", show: o }), this._showLocalVideo = o, this);
    } }, { key: "showLocalVideo", value: function() {
      return ee(this._callObjectMode, "showLocalVideo()"), I(), this._showLocalVideo;
    } }, { key: "setShowParticipantsBar", value: function() {
      var o = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
      return ee(this._callObjectMode, "setShowParticipantsBar()"), I(), Y(this._callState, "setShowParticipantsBar()"), typeof o != "boolean" ? (console.error("setShowParticipantsBar only accepts a boolean value"), this) : (this.sendMessageToCallMachine({ action: "set-show-participants-bar", show: o }), this._showParticipantsBar = o, this);
    } }, { key: "showParticipantsBar", value: function() {
      return ee(this._callObjectMode, "showParticipantsBar()"), I(), this._showParticipantsBar;
    } }, { key: "customIntegrations", value: function() {
      return I(), ee(this._callObjectMode, "customIntegrations()"), this._customIntegrations;
    } }, { key: "setCustomIntegrations", value: function(o) {
      return I(), ee(this._callObjectMode, "setCustomIntegrations()"), Y(this._callState, "setCustomIntegrations()"), Na(o) ? (this.sendMessageToCallMachine({ action: "set-custom-integrations", integrations: o }), this._customIntegrations = o, this) : this;
    } }, { key: "startCustomIntegrations", value: function(o) {
      var s = this;
      if (I(), ee(this._callObjectMode, "startCustomIntegrations()"), Y(this._callState, "startCustomIntegrations()"), Array.isArray(o) && o.some(function(g) {
        return typeof g != "string";
      }) || !Array.isArray(o) && typeof o != "string") return console.error("startCustomIntegrations() only accepts string | string[]"), this;
      var d = typeof o == "string" ? [o] : o, f = d.filter(function(g) {
        return !(g in s._customIntegrations);
      });
      return f.length ? (console.error(`Can't find custom integration(s): "`.concat(f.join(", "), '"')), this) : (this.sendMessageToCallMachine({ action: "start-custom-integrations", ids: d }), this);
    } }, { key: "stopCustomIntegrations", value: function(o) {
      var s = this;
      if (I(), ee(this._callObjectMode, "stopCustomIntegrations()"), Y(this._callState, "stopCustomIntegrations()"), Array.isArray(o) && o.some(function(g) {
        return typeof g != "string";
      }) || !Array.isArray(o) && typeof o != "string") return console.error("stopCustomIntegrations() only accepts string | string[]"), this;
      var d = typeof o == "string" ? [o] : o, f = d.filter(function(g) {
        return !(g in s._customIntegrations);
      });
      return f.length ? (console.error(`Can't find custom integration(s): "`.concat(f.join(", "), '"')), this) : (this.sendMessageToCallMachine({ action: "stop-custom-integrations", ids: d }), this);
    } }, { key: "customTrayButtons", value: function() {
      return ee(this._callObjectMode, "customTrayButtons()"), I(), this._customTrayButtons;
    } }, { key: "updateCustomTrayButtons", value: function(o) {
      return ee(this._callObjectMode, "updateCustomTrayButtons()"), I(), Y(this._callState, "updateCustomTrayButtons()"), Da(o) ? (this.sendMessageToCallMachine({ action: "update-custom-tray-buttons", btns: o }), this._customTrayButtons = o, this) : (console.error("updateCustomTrayButtons only accepts a dictionary of the type ".concat(JSON.stringify(Qt))), this);
    } }, { key: "theme", value: function() {
      return ee(this._callObjectMode, "theme()"), this.properties.theme;
    } }, { key: "setTheme", value: function(o) {
      var s = this;
      return ee(this._callObjectMode, "setTheme()"), new Promise(function(d, f) {
        try {
          s.validateProperties({ theme: o }), s.properties.theme = A({}, o), s.sendMessageToCallMachine({ action: "set-theme", theme: s.properties.theme });
          try {
            s.emit(Nn, { action: Nn, theme: s.properties.theme });
          } catch (g) {
            console.log("could not emit 'theme-updated'", g);
          }
          d(s.properties.theme);
        } catch (g) {
          f(g);
        }
      });
    } }, { key: "requestFullscreen", value: (c = M(function* () {
      if (I(), this._iframe && !document.fullscreenElement && Ci()) try {
        (yield this._iframe.requestFullscreen) ? this._iframe.requestFullscreen() : this._iframe.webkitRequestFullscreen();
      } catch (o) {
        console.log("could not make video call fullscreen", o);
      }
    }), function() {
      return c.apply(this, arguments);
    }) }, { key: "exitFullscreen", value: function() {
      I(), document.fullscreenElement ? document.exitFullscreen() : document.webkitFullscreenElement && document.webkitExitFullscreen();
    } }, { key: "getSidebarView", value: (a = M(function* () {
      var o = this;
      return this._callObjectMode ? (console.error("getSidebarView is not available in callObject mode"), Promise.resolve(null)) : new Promise(function(s) {
        o.sendMessageToCallMachine({ action: "get-sidebar-view" }, function(d) {
          s(d.view);
        });
      });
    }), function() {
      return a.apply(this, arguments);
    }) }, { key: "setSidebarView", value: function(o) {
      return this._callObjectMode ? (console.error("setSidebarView is not available in callObject mode"), this) : (this.sendMessageToCallMachine({ action: "set-sidebar-view", view: o }), this);
    } }, { key: "room", value: (i = M(function* () {
      var o = this, s = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).includeRoomConfigDefaults, d = s === void 0 || s;
      return this._accessState.access === Nt || this.needsLoad() ? this.properties.url ? { roomUrlPendingJoin: this.properties.url } : null : new Promise(function(f) {
        o.sendMessageToCallMachine({ action: "lib-room-info", includeRoomConfigDefaults: d }, function(g) {
          delete g.action, delete g.callbackStamp, f(g);
        });
      });
    }), function() {
      return i.apply(this, arguments);
    }) }, { key: "geo", value: (r = M(function* () {
      try {
        var o = yield fetch("https://gs.daily.co/_ks_/x-swsl/:");
        return { current: (yield o.json()).geo };
      } catch (s) {
        return console.error("geo lookup failed", s), { current: "" };
      }
    }), function() {
      return r.apply(this, arguments);
    }) }, { key: "setNetworkTopology", value: (t = M(function* (o) {
      var s = this;
      return I(), Y(this._callState, "setNetworkTopology()"), new Promise(function(d, f) {
        s.sendMessageToCallMachine({ action: "set-network-topology", opts: o }, function(g) {
          g.error ? f({ error: g.error }) : d({ workerId: g.workerId });
        });
      });
    }), function(o) {
      return t.apply(this, arguments);
    }) }, { key: "getNetworkTopology", value: (e = M(function* () {
      var o = this;
      return new Promise(function(s, d) {
        o.needsLoad() && s({ topology: "none" }), o.sendMessageToCallMachine({ action: "get-network-topology" }, function(f) {
          f.error ? d({ error: f.error }) : s({ topology: f.topology });
        });
      });
    }), function() {
      return e.apply(this, arguments);
    }) }, { key: "setPlayNewParticipantSound", value: function(o) {
      if (I(), typeof o != "number" && o !== !0 && o !== !1) throw new Error("argument to setShouldPlayNewParticipantSound should be true, false, or a number, but is ".concat(o));
      this.sendMessageToCallMachine({ action: "daily-method-set-play-ding", arg: o });
    } }, { key: "on", value: function(o, s) {
      return be.prototype.on.call(this, o, s);
    } }, { key: "once", value: function(o, s) {
      return be.prototype.once.call(this, o, s);
    } }, { key: "off", value: function(o, s) {
      return be.prototype.off.call(this, o, s);
    } }, { key: "validateProperties", value: function(o) {
      for (var s in o) {
        if (!Pe[s]) throw new Error("unrecognized property '".concat(s, "'"));
        if (Pe[s].validate && !Pe[s].validate(o[s], this)) throw new Error("property '".concat(s, "': ").concat(Pe[s].help));
      }
    } }, { key: "assembleMeetingUrl", value: function() {
      var o, s, d = A(A({}, this.properties), {}, { emb: this._callFrameId, embHref: encodeURIComponent(window.location.href), proxy: (o = this.properties.dailyConfig) !== null && o !== void 0 && o.proxyUrl ? encodeURIComponent((s = this.properties.dailyConfig) === null || s === void 0 ? void 0 : s.proxyUrl) : void 0 }), f = d.url.match(/\?/) ? "&" : "?";
      return d.url + f + Object.keys(Pe).filter(function(g) {
        return Pe[g].queryString && d[g] !== void 0;
      }).map(function(g) {
        return "".concat(Pe[g].queryString, "=").concat(d[g]);
      }).join("&");
    } }, { key: "needsLoad", value: function() {
      return [Dn, yi, ve, _e].includes(this._callState);
    } }, { key: "sendMessageToCallMachine", value: function(o, s) {
      if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode)) throw new Error("Use after destroy");
      this._messageChannel.sendMessageToCallMachine(o, s, this._iframe, this._callFrameId);
    } }, { key: "forwardPackagedMessageToCallMachine", value: function(o) {
      this._messageChannel.forwardPackagedMessageToCallMachine(o, this._iframe, this._callFrameId);
    } }, { key: "addListenerForPackagedMessagesFromCallMachine", value: function(o) {
      return this._messageChannel.addListenerForPackagedMessagesFromCallMachine(o, this._callFrameId);
    } }, { key: "removeListenerForPackagedMessagesFromCallMachine", value: function(o) {
      this._messageChannel.removeListenerForPackagedMessagesFromCallMachine(o);
    } }, { key: "handleMessageFromCallMachine", value: function(o) {
      switch (o.action) {
        case Oo:
          this.sendMessageToCallMachine(A({ action: Lo }, this.properties));
          break;
        case "call-machine-initialized":
          this._callMachineInitialized = !0;
          var s = { action: ct, level: "log", code: 1011, stats: { event: "bundle load", time: this._bundleLoadTime === "no-op" ? 0 : this._bundleLoadTime, preLoaded: this._bundleLoadTime === "no-op", url: $t(this.properties.dailyConfig) } };
          this.sendMessageToCallMachine(s), this._delayDuplicateInstanceLog && this._logDuplicateInstanceAttempt();
          break;
        case Rt:
          this._loadedCallback && (this._loadedCallback(), this._loadedCallback = null);
          try {
            this.emit(o.action, o);
          } catch (C) {
            console.log("could not emit", o, C);
          }
          break;
        case Do:
          this._joinedCallback && (this._joinedCallback(o.participants), this._joinedCallback = null);
          try {
            this.emit(o.action, o);
          } catch (C) {
            console.log("could not emit", o, C);
          }
          break;
        case Ro:
        case xo:
          if (this._callState === ve) return;
          if (o.participant && o.participant.session_id) {
            var d = o.participant.local ? "local" : o.participant.session_id;
            if (this._callObjectMode) {
              var f = this._callMachine().store;
              Ii(o.participant, f), Di(o.participant, f), Ni(o.participant, this._participants[d], f);
            }
            try {
              this.maybeParticipantTracksStopped(this._participants[d], o.participant), this.maybeParticipantTracksStarted(this._participants[d], o.participant), this.maybeEventRecordingStopped(this._participants[d], o.participant), this.maybeEventRecordingStarted(this._participants[d], o.participant);
            } catch (C) {
              console.error("track events error", C);
            }
            if (!this.compareEqualForParticipantUpdateEvent(o.participant, this._participants[d])) {
              this._participants[d] = A({}, o.participant), this.toggleParticipantAudioBasedOnNativeAudioFocus();
              try {
                this.emit(o.action, o);
              } catch (C) {
                console.log("could not emit", o, C);
              }
            }
          }
          break;
        case jo:
          if (o.participant && o.participant.session_id) {
            var g = this._participants[o.participant.session_id];
            g && this.maybeParticipantTracksStopped(g, null), delete this._participants[o.participant.session_id];
            try {
              this.emit(o.action, o);
            } catch (C) {
              console.log("could not emit", o, C);
            }
          }
          break;
        case Fo:
          if (!Z(this._participantCounts, o.participantCounts)) {
            this._participantCounts = o.participantCounts;
            try {
              this.emit(o.action, o);
            } catch (C) {
              console.log("could not emit", o, C);
            }
          }
          break;
        case Bo:
          var v = { access: o.access };
          if (o.awaitingAccess && (v.awaitingAccess = o.awaitingAccess), !Z(this._accessState, v)) {
            this._accessState = v;
            try {
              this.emit(o.action, o);
            } catch (C) {
              console.log("could not emit", o, C);
            }
          }
          break;
        case Uo:
          if (o.meetingSession) {
            this._meetingSessionSummary = o.meetingSession;
            try {
              delete o.callFrameId, this.emit(o.action, o);
              var w = A(A({}, o), {}, { action: "meeting-session-updated" });
              this.emit(w.action, w);
            } catch (C) {
              console.log("could not emit", o, C);
            }
          }
          break;
        case Bt:
          var k;
          this._iframe && !o.preserveIframe && (this._iframe.src = ""), this._updateCallState(_e), this.resetMeetingDependentVars(), this._loadedCallback && (this._loadedCallback(o.errorMsg), this._loadedCallback = null), o.preserveIframe;
          var P = sn(o, el);
          P != null && (k = P.error) !== null && k !== void 0 && k.details && (P.error.details = JSON.parse(P.error.details)), this._maybeSendToSentry(o), this._joinedCallback && (this._joinedCallback(null, P), this._joinedCallback = null);
          try {
            this.emit(o.action, P);
          } catch (C) {
            console.log("could not emit", o, C);
          }
          break;
        case No:
          this._callState !== _e && this._updateCallState(ve), this.resetMeetingDependentVars(), this._resolveLeave && (this._resolveLeave(), this._resolveLeave = null);
          try {
            this.emit(o.action, o);
          } catch (C) {
            console.log("could not emit", o, C);
          }
          break;
        case "selected-devices-updated":
          if (o.devices) try {
            this.emit(o.action, o);
          } catch (C) {
            console.log("could not emit", o, C);
          }
          break;
        case ca:
          var J = o.threshold, z = o.quality;
          if (J !== this._network.threshold || z !== this._network.quality) {
            this._network.quality = z, this._network.threshold = J;
            try {
              this.emit(o.action, o);
            } catch (C) {
              console.log("could not emit", o, C);
            }
          }
          break;
        case ua:
          if (o && o.cpuLoadState) try {
            this.emit(o.action, o);
          } catch (C) {
            console.log("could not emit", o, C);
          }
          break;
        case da:
          if (o && o.faceCounts !== void 0) try {
            this.emit(o.action, o);
          } catch (C) {
            console.log("could not emit", o, C);
          }
          break;
        case aa:
          var H = o.activeSpeaker;
          if (this._activeSpeaker.peerId !== H.peerId) {
            this._activeSpeaker.peerId = H.peerId;
            try {
              this.emit(o.action, { action: o.action, activeSpeaker: this._activeSpeaker });
            } catch (C) {
              console.log("could not emit", o, C);
            }
          }
          break;
        case "show-local-video-changed":
          if (this._callObjectMode) return;
          var re = o.show;
          this._showLocalVideo = re;
          try {
            this.emit(o.action, { action: o.action, show: re });
          } catch (C) {
            console.log("could not emit", o, C);
          }
          break;
        case sa:
          var q = o.enabled;
          if (this._activeSpeakerMode !== q) {
            this._activeSpeakerMode = q;
            try {
              this.emit(o.action, { action: o.action, enabled: this._activeSpeakerMode });
            } catch (C) {
              console.log("could not emit", o, C);
            }
          }
          break;
        case Yo:
        case $o:
        case Go:
          this._waitingParticipants = o.allWaitingParticipants;
          try {
            this.emit(o.action, { action: o.action, participant: o.participant });
          } catch (C) {
            console.log("could not emit", o, C);
          }
          break;
        case va:
          if (!Z(this._receiveSettings, o.receiveSettings)) {
            this._receiveSettings = o.receiveSettings;
            try {
              this.emit(o.action, { action: o.action, receiveSettings: o.receiveSettings });
            } catch (C) {
              console.log("could not emit", o, C);
            }
          }
          break;
        case _a:
          if (!Z(this._inputSettings, o.inputSettings)) {
            var an = this._getInputSettings();
            if (this._inputSettings = o.inputSettings, this._preloadCache.inputSettings = {}, !Z(an, this._getInputSettings())) try {
              this.emit(o.action, { action: o.action, inputSettings: this._getInputSettings() });
            } catch (C) {
              console.log("could not emit", o, C);
            }
          }
          break;
        case "send-settings-updated":
          if (!Z(this._sendSettings, o.sendSettings)) {
            this._sendSettings = o.sendSettings, this._preloadCache.sendSettings = null;
            try {
              this.emit(o.action, { action: o.action, sendSettings: o.sendSettings });
            } catch (C) {
              console.log("could not emit", o, C);
            }
          }
          break;
        case "local-audio-level":
          this._localAudioLevel = o.audioLevel, this._preloadCache.localAudioLevelObserver = null, this.emitDailyJSEvent(o);
          break;
        case "remote-participants-audio-level":
          this._remoteParticipantsAudioLevel = o.participantsAudioLevel, this._preloadCache.remoteParticipantsAudioLevelObserver = null, this.emitDailyJSEvent(o);
          break;
        case ea:
          var K = o.session_id;
          this._rmpPlayerState[K] = o.playerState, this.emitDailyJSEvent(o);
          break;
        case na:
          delete this._rmpPlayerState[o.session_id], this.emitDailyJSEvent(o);
          break;
        case ta:
          var de = o.session_id, Le = this._rmpPlayerState[de];
          Le && this.compareEqualForRMPUpdateEvent(Le, o.remoteMediaPlayerState) || (this._rmpPlayerState[de] = o.remoteMediaPlayerState, this.emitDailyJSEvent(o));
          break;
        case "custom-button-click":
        case "sidebar-view-changed":
          this.emitDailyJSEvent(o);
          break;
        case Vo:
          var Et = this._meetingSessionState.topology !== (o.meetingSessionState && o.meetingSessionState.topology);
          this._meetingSessionState = yn(o.meetingSessionState, this._callObjectMode), (this._callObjectMode || Et) && this.emitDailyJSEvent(o);
          break;
        case ra:
          this._isScreenSharing = !0, this.emitDailyJSEvent(o);
          break;
        case ia:
        case oa:
          this._isScreenSharing = !1, this.emitDailyJSEvent(o);
          break;
        case xt:
        case jt:
        case zo:
        case Ho:
        case Ko:
        case qo:
        case Jo:
        case Wo:
        case Po:
        case Io:
        case Xo:
        case Zo:
        case la:
        case Qo:
        case ha:
        case pa:
        case fa:
        case ma:
        case Ft:
        case ga:
        case "dialin-ready":
        case "dialin-connected":
        case "dialin-error":
        case "dialin-stopped":
        case "dialin-warning":
        case "dialout-connected":
        case "dialout-error":
        case "dialout-stopped":
        case "dialout-warning":
          try {
            this.emit(o.action, o);
          } catch (C) {
            console.log("could not emit", o, C);
          }
          break;
        case "request-fullscreen":
          this.requestFullscreen();
          break;
        case "request-exit-fullscreen":
          this.exitFullscreen();
      }
    } }, { key: "maybeEventRecordingStopped", value: function(o, s) {
      var d = "record";
      if (o && !s.local && s[d] === !1 && o[d] !== s[d]) try {
        this.emit(jt, { action: jt });
      } catch (f) {
        console.log("could not emit", f);
      }
    } }, { key: "maybeEventRecordingStarted", value: function(o, s) {
      var d = "record";
      if (o && !s.local && s[d] === !0 && o[d] !== s[d]) try {
        this.emit(xt, { action: xt });
      } catch (f) {
        console.log("could not emit", f);
      }
    } }, { key: "maybeEventTrackStopped", value: function(o, s, d, f) {
      if (o && (o.readyState === "ended" || !s || o.id !== s.id)) try {
        this.emit(Bn, { action: Bn, track: o, participant: d, type: f });
      } catch (g) {
        console.log("maybeEventTrackStopped: could not emit", g);
      }
    } }, { key: "maybeEventTrackStarted", value: function(o, s, d, f) {
      if (s && (!o || o.readyState === "ended" || s.id !== o.id)) try {
        this.emit(Fn, { action: Fn, track: s, participant: d, type: f });
      } catch (g) {
        console.log("maybeEventTrackStarted: could not emit", g);
      }
    } }, { key: "maybeParticipantTracksStopped", value: function(o, s) {
      if (o) for (var d in o.tracks) this.maybeEventTrackStopped(o.tracks[d].track, s && s.tracks[d] ? s.tracks[d].track : null, s, d);
    } }, { key: "maybeParticipantTracksStarted", value: function(o, s) {
      if (s) for (var d in s.tracks) this.maybeEventTrackStarted(o && o.tracks[d] ? o.tracks[d].track : null, s.tracks[d].track, s, d);
    } }, { key: "compareEqualForRMPUpdateEvent", value: function(o, s) {
      var d, f;
      return o.state === s.state && ((d = o.settings) === null || d === void 0 ? void 0 : d.volume) === ((f = s.settings) === null || f === void 0 ? void 0 : f.volume);
    } }, { key: "emitDailyJSEvent", value: function(o) {
      try {
        this.emit(o.action, o);
      } catch (s) {
        console.log("could not emit", o, s);
      }
    } }, { key: "compareEqualForParticipantUpdateEvent", value: function(o, s) {
      return !!Z(o, s) && (!o.videoTrack || !s.videoTrack || o.videoTrack.id === s.videoTrack.id && o.videoTrack.muted === s.videoTrack.muted && o.videoTrack.enabled === s.videoTrack.enabled) && (!o.audioTrack || !s.audioTrack || o.audioTrack.id === s.audioTrack.id && o.audioTrack.muted === s.audioTrack.muted && o.audioTrack.enabled === s.audioTrack.enabled);
    } }, { key: "nativeUtils", value: function() {
      return N() ? typeof DailyNativeUtils > "u" ? (console.warn("in React Native, DailyNativeUtils is expected to be available"), null) : DailyNativeUtils : null;
    } }, { key: "updateIsPreparingToJoin", value: function(o) {
      this._updateCallState(this._callState, o);
    } }, { key: "_updateCallState", value: function(o) {
      var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._isPreparingToJoin;
      if (o !== this._callState || s !== this._isPreparingToJoin) {
        var d = this._callState, f = this._isPreparingToJoin;
        this._callState = o, this._isPreparingToJoin = s;
        var g = Vt(d, f), v = Vt(this._callState, this._isPreparingToJoin);
        g !== v && (this.updateKeepDeviceAwake(v), this.updateDeviceAudioMode(v), this.updateShowAndroidOngoingMeetingNotification(v), this.updateNoOpRecordingEnsuringBackgroundContinuity(v));
      }
    } }, { key: "resetMeetingDependentVars", value: function() {
      this._participants = {}, this._participantCounts = Yi, this._waitingParticipants = {}, this._activeSpeaker = {}, this._activeSpeakerMode = !1, this._didPreAuth = !1, this._accessState = { access: Nt }, this._finalSummaryOfPrevSession = this._meetingSessionSummary, this._meetingSessionSummary = {}, this._meetingSessionState = yn(Vi, this._callObjectMode), this._isScreenSharing = !1, this._receiveSettings = {}, this._inputSettings = void 0, this._sendSettings = {}, this._localAudioLevel = 0, this._remoteParticipantsAudioLevel = {}, this._callMachineInitialized = !1, this._bundleLoadTime = void 0, this._preloadCache;
    } }, { key: "updateKeepDeviceAwake", value: function(o) {
      N() && this.nativeUtils().setKeepDeviceAwake(o, this._callFrameId);
    } }, { key: "updateDeviceAudioMode", value: function(o) {
      if (N() && !this.disableReactNativeAutoDeviceManagement("audio")) {
        var s = o ? this._nativeInCallAudioMode : "idle";
        this.nativeUtils().setAudioMode(s);
      }
    } }, { key: "updateShowAndroidOngoingMeetingNotification", value: function(o) {
      if (N() && this.nativeUtils().setShowOngoingMeetingNotification) {
        var s, d, f, g;
        if (this.properties.reactNativeConfig && this.properties.reactNativeConfig.androidInCallNotification) {
          var v = this.properties.reactNativeConfig.androidInCallNotification;
          s = v.title, d = v.subtitle, f = v.iconName, g = v.disableForCustomOverride;
        }
        g && (o = !1), this.nativeUtils().setShowOngoingMeetingNotification(o, s, d, f, this._callFrameId);
      }
    } }, { key: "updateNoOpRecordingEnsuringBackgroundContinuity", value: function(o) {
      N() && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity(o);
    } }, { key: "toggleParticipantAudioBasedOnNativeAudioFocus", value: function() {
      var o, s;
      if (N()) {
        var d = (o = this._callMachine()) === null || o === void 0 || (s = o.store) === null || s === void 0 ? void 0 : s.getState();
        for (var f in d == null ? void 0 : d.streams) {
          var g = d.streams[f];
          g && g.pendingTrack && g.pendingTrack.kind === "audio" && (g.pendingTrack.enabled = this._hasNativeAudioFocus);
        }
      }
    } }, { key: "disableReactNativeAutoDeviceManagement", value: function(o) {
      return this.properties.reactNativeConfig && this.properties.reactNativeConfig.disableAutoDeviceManagement && this.properties.reactNativeConfig.disableAutoDeviceManagement[o];
    } }, { key: "absoluteUrl", value: function(o) {
      if (o !== void 0) {
        var s = document.createElement("a");
        return s.href = o, s.href;
      }
    } }, { key: "sayHello", value: function() {
      var o = "hello, world.";
      return console.log(o), o;
    } }, { key: "_logCallQualityTestResults", value: function(o) {
      if (this._callMachineInitialized) {
        var s = { action: ct, level: "info", code: 1012, results: o };
        this.sendMessageToCallMachine(s);
      } else console.warn("_logCallQualityTestResults() must be called after daily initialization");
    } }, { key: "_logUseAfterDestroy", value: function() {
      if (this.needsLoad())
        if (he && !he.needsLoad()) {
          var o = { action: ct, level: "error", code: this.strictMode ? 9995 : 9997 };
          he.sendMessageToCallMachine(o);
        } else this.strictMode || console.error("You are are attempting to use a call instance that was previously destroyed, which is unsupported. Please remove `strictMode: false` from your constructor properties to enable strict mode to track down and fix this unsupported usage.");
      else {
        var s = { action: ct, level: "error", code: this.strictMode ? 9995 : 9997 };
        this._messageChannel.sendMessageToCallMachine(s, null, this._iframe, this._callFrameId);
      }
    } }, { key: "_logDuplicateInstanceAttempt", value: function() {
      var o = he._callMachineInitialized ? he : this._callMachineInitialized ? this : void 0;
      o ? (o.sendMessageToCallMachine({ action: ct, level: "warn", code: this.strictMode ? 9990 : 9992 }), this._delayDuplicateInstanceLog = !1) : (this._delayDuplicateInstanceLog = !0, he._delayDuplicateInstanceLog = !0);
    } }, { key: "_maybeSendToSentry", value: function(o) {
      var s, d, f, g, v, w;
      if (!((s = o.error) !== null && s !== void 0 && s.type && !["connection-error", "end-of-life", "no-room"].includes(o.error.type))) {
        var k = (d = this.properties) !== null && d !== void 0 && d.url ? new URL(this.properties.url) : void 0, P = "production";
        k && k.host.includes(".staging.daily") && (P = "staging");
        var J, z, H, re, q, an = new $s({ dsn: "https://f10f1c81e5d44a4098416c0867a8b740@o77906.ingest.sentry.io/168844", transport: Gs, integrations: [new _i.GlobalHandlers({ onunhandledrejection: !1 }), new _i.HttpContext()], environment: P }), K = new tr(an, void 0, ne.version());
        if (this.session_id && K.setExtra("sessionId", this.session_id), this.properties) {
          var de = A({}, this.properties);
          de.userName = de.userName ? "[Filtered]" : void 0, de.userData = de.userData ? "[Filtered]" : void 0, de.token = de.token ? "[Filtered]" : void 0, K.setExtra("properties", de);
        }
        if (k) {
          var Le = k.searchParams.get("domain");
          if (!Le) {
            var Et = k.host.match(/(.*?)\./);
            Le = Et && Et[1] || "";
          }
          Le && K.setTag("domain", Le);
        }
        o.error && (K.setTag("fatalErrorType", o.error.type), K.setExtra("errorDetails", o.error.details), !((J = o.error.details) === null || J === void 0) && J.uri && K.setTag("serverAddress", o.error.details.uri), !((z = o.error.details) === null || z === void 0) && z.workerGroup && K.setTag("workerGroup", o.error.details.workerGroup), !((H = o.error.details) === null || H === void 0) && H.geoGroup && K.setTag("geoGroup", o.error.details.geoGroup), !((re = o.error.details) === null || re === void 0) && re.on && K.setTag("connectionAttempt", o.error.details.on), (q = o.error.details) !== null && q !== void 0 && q.bundleUrl && (K.setTag("bundleUrl", o.error.details.bundleUrl), K.setTag("bundleError", o.error.details.sourceError.type))), K.setTags({ callMode: this._callObjectMode ? N() ? "reactNative" : (f = this.properties) !== null && f !== void 0 && (g = f.dailyConfig) !== null && g !== void 0 && (v = g.callMode) !== null && v !== void 0 && v.includes("prebuilt") ? this.properties.dailyConfig.callMode : "custom" : "prebuilt-frame", version: ne.version() });
        var C = ((w = o.error) === null || w === void 0 ? void 0 : w.msg) || o.errorMsg;
        K.run(function(za) {
          za.captureException(new Error(C));
        });
      }
    } }, { key: "_callMachine", value: function() {
      var o, s, d;
      return (o = window._daily) === null || o === void 0 || (s = o.instances) === null || s === void 0 || (d = s[this._callFrameId]) === null || d === void 0 ? void 0 : d.callMachine;
    } }], [{ key: "supportedBrowser", value: function() {
      if (N()) return { supported: !0, mobile: !0, name: "React Native", version: null, supportsScreenShare: !0, supportsSfu: !0, supportsVideoProcessing: !1, supportsAudioProcessing: !1 };
      var o = as.getParser(ce());
      return { supported: !!Mi(), mobile: o.getPlatformType() === "mobile", name: o.getBrowserName(), version: o.getBrowserVersion(), supportsFullscreen: !!Ci(), supportsScreenShare: !!Mc(), supportsSfu: !!Mi(), supportsVideoProcessing: Sa(), supportsAudioProcessing: Ea() };
    } }, { key: "version", value: function() {
      return "0.66.0";
    } }, { key: "createCallObject", value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return o.layout = "none", new ne(null, o);
    } }, { key: "wrap", value: function(o) {
      var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (I(), !o || !o.contentWindow || typeof o.src != "string") throw new Error("DailyIframe::Wrap needs an iframe-like first argument");
      return s.layout || (s.customLayout ? s.layout = "custom-v1" : s.layout = "browser"), new ne(o, s);
    } }, { key: "createFrame", value: function(o, s) {
      var d, f;
      I(), o && s ? (d = o, f = s) : o && o.append ? (d = o, f = {}) : (d = document.body, f = o || {});
      var g = f.iframeStyle;
      g || (g = d === document.body ? { position: "fixed", border: "1px solid black", backgroundColor: "white", width: "375px", height: "450px", right: "1em", bottom: "1em" } : { border: 0, width: "100%", height: "100%" });
      var v = document.createElement("iframe");
      window.navigator && window.navigator.userAgent.match(/Chrome\/61\./) ? v.allow = "microphone, camera" : v.allow = "microphone; camera; autoplay; display-capture; screen-wake-lock", v.style.visibility = "hidden", d.appendChild(v), v.style.visibility = null, Object.keys(g).forEach(function(w) {
        return v.style[w] = g[w];
      }), f.layout || (f.customLayout ? f.layout = "custom-v1" : f.layout = "browser");
      try {
        return new ne(v, f);
      } catch (w) {
        throw d.removeChild(v), w;
      }
    } }, { key: "createTransparentFrame", value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      I();
      var s = document.createElement("iframe");
      return s.allow = "microphone; camera; autoplay", s.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
      pointer-events: none;
    `, document.body.appendChild(s), o.layout || (o.layout = "custom-v1"), ne.wrap(s, o);
    } }, { key: "getCallInstance", value: function() {
      return he;
    } }]), ne;
  }();
  function qe(n, e) {
    var t = {};
    for (var r in n) if (n[r] instanceof MediaStreamTrack) t[r] = dt;
    else if (r === "dailyConfig") {
      if (n[r].modifyLocalSdpHook) {
        var i = window._daily.instances[e].customCallbacks || {};
        i.modifyLocalSdpHook = n[r].modifyLocalSdpHook, window._daily.instances[e].customCallbacks = i, delete n[r].modifyLocalSdpHook;
      }
      if (n[r].modifyRemoteSdpHook) {
        var a = window._daily.instances[e].customCallbacks || {};
        a.modifyRemoteSdpHook = n[r].modifyRemoteSdpHook, window._daily.instances[e].customCallbacks = a, delete n[r].modifyRemoteSdpHook;
      }
      t[r] = n[r];
    } else t[r] = n[r];
    return t;
  }
  function Y(n) {
    var e = arguments.length > 2 ? arguments[2] : void 0;
    if (n !== je) {
      var t = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " only supported after join.");
      throw e && (t += " ".concat(e)), console.error(t), new Error(t);
    }
  }
  function Vt(n, e) {
    return [Ht, je].includes(n) || e;
  }
  function qi(n, e) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "This daily-js method", r = arguments.length > 3 ? arguments[3] : void 0;
    if (Vt(n, e)) {
      var i = "".concat(t, " not supported after joining a meeting.");
      throw r && (i += " ".concat(r)), console.error(i), new Error(i);
    }
  }
  function _n(n) {
    var e = arguments.length > 2 ? arguments[2] : void 0;
    if (!n) {
      var t = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " requires preAuth(), startCamera(), or join() to initialize call state.");
      throw e && (t += " ".concat(e)), console.error(t), new Error(t);
    }
  }
  function Ie(n) {
    if (n) {
      var e = "A pre-call quality test is in progress. Please try ".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " again once testing has completed. Use stopTestCallQuality() to end it early.");
      throw console.error(e), new Error(e);
    }
  }
  function pe(n) {
    if (!n) {
      var e = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " is only supported on custom callObject instances");
      throw console.error(e), new Error(e);
    }
  }
  function ee(n) {
    if (n) {
      var e = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " is only supported as part of Daily's Prebuilt");
      throw console.error(e), new Error(e);
    }
  }
  function I() {
    if (N()) throw new Error("This daily-js method is not currently supported in React Native");
  }
  function lt() {
    if (!N()) throw new Error("This daily-js method is only supported in React Native");
  }
  function Ma(n) {
    if (n === void 0) return !0;
    var e;
    if (typeof n == "string") e = n;
    else try {
      e = JSON.stringify(n), Z(JSON.parse(e), n) || console.warn("The userData provided will be modified when serialized.");
    } catch (t) {
      throw Error("userData must be serializable to JSON: ".concat(t));
    }
    if (e.length > 4096) throw Error("userData is too large (".concat(e.length, " characters). Maximum size suppported is ").concat(4096, "."));
    return !0;
  }
  function Aa(n, e) {
    for (var t = e.allowAllParticipantsKey, r = function(m) {
      var _ = ["local"];
      return t || _.push("*"), m && !_.includes(m);
    }, i = function(m) {
      return !!(m.layer === void 0 || Number.isInteger(m.layer) && m.layer >= 0 || m.layer === "inherit");
    }, a = function(m) {
      return !!m && !(m.video && !i(m.video)) && !(m.screenVideo && !i(m.screenVideo));
    }, c = 0, l = Object.entries(n); c < l.length; c++) {
      var u = Be(l[c], 2), h = u[0], p = u[1];
      if (!r(h) || !a(p)) return !1;
    }
    return !0;
  }
  function Oa(n) {
    return F(n) === "object" && !(n.video && (F(n.video) !== "object" || !function(i) {
      var a = ["type", "config"];
      return !i || F(i) !== "object" || !function(c) {
        return typeof c != "string" ? !1 : Object.values(Ut).includes(c) ? !0 : (console.error("inputSettings video processor type invalid"), !1);
      }(i.type) || i.config && (F(i.config) !== "object" || !function(c, l) {
        var u = Object.keys(l);
        if (u.length === 0) return !0;
        var h = "invalid object in inputSettings -> video -> processor -> config";
        switch (c) {
          case Ut.BGBLUR:
            return u.length > 1 || u[0] !== "strength" ? (console.error(h), !1) : !(typeof l.strength != "number" || l.strength <= 0 || l.strength > 1 || isNaN(l.strength)) || (console.error("".concat(h, "; expected: {0 < strength <= 1}, got: ").concat(l.strength)), !1);
          case Ut.BGIMAGE:
            return !(l.source !== void 0 && !function(p) {
              if (p.source === "default") return p.type = "default", !0;
              if (p.source instanceof ArrayBuffer) return !0;
              if (mt(p.source)) return p.type = "url", !!function(S) {
                var b = new URL(S), E = b.pathname;
                if (b.protocol === "data:") try {
                  var T = E.substring(E.indexOf(":") + 1, E.indexOf(";")).split("/")[1];
                  return fn.includes(T);
                } catch ($) {
                  return console.error("failed to deduce blob content type", $), !1;
                }
                var O = E.split(".").at(-1).toLowerCase().trim();
                return fn.includes(O);
              }(p.source) || (console.error("invalid image type; supported types: [".concat(fn.join(", "), "]")), !1);
              return m = p.source, _ = Number(m), isNaN(_) || !Number.isInteger(_) || _ <= 0 || _ > Ti ? (console.error("invalid image selection; must be an int, > 0, <= ".concat(Ti)), !1) : (p.type = "daily-preselect", !0);
              var m, _;
            }(l));
          default:
            return !0;
        }
      }(i.type, i.config)) ? !1 : (Object.keys(i).filter(function(c) {
        return !a.includes(c);
      }).forEach(function(c) {
        console.warn("invalid key inputSettings -> video -> processor : ".concat(c)), delete i[c];
      }), !0);
    }(n.video.processor))) && !(n.audio && (F(n.audio) !== "object" || (t = n.audio.processor, r = ["type"], !t || F(t) !== "object" || (Object.keys(t).filter(function(i) {
      return !r.includes(i);
    }).forEach(function(i) {
      console.warn("invalid key inputSettings -> audio -> processor : ".concat(i)), delete t[i];
    }), e = t.type, typeof e != "string" || !Object.values(ya).includes(e) && (console.error("inputSettings audio processor type invalid"), 1)))));
    var e, t, r;
  }
  function La(n, e) {
    var t, r = [];
    n.video && !Sa((t = e == null ? void 0 : e.useLegacyVideoProcessor) !== null && t !== void 0 && t) && (delete n.video, r.push("video")), n.audio && !Ea() && (delete n.audio, r.push("audio")), r.length > 0 && console.error("Ignoring settings for browser- or platform-unsupported input processor(s): ".concat(r.join(", ")));
  }
  function zn() {
    var n = Object.values(Ut).join(" | "), e = Object.values(ya).join(" | ");
    return "inputSettings must be of the form: { video?: { processor: { type: [ ".concat(n, " ], config?: {} } }, audio?: { processor: {type: [ ").concat(e, " ] } } }");
  }
  function Pa(n) {
    var e = n.allowAllParticipantsKey;
    return "receiveSettings must be of the form { [<remote participant id> | ".concat(Mo).concat(e ? ' | "'.concat(Ao, '"') : "", "]: ") + '{ [video: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]], [screenVideo: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]] }}}';
  }
  function Ia() {
    return "customIntegrations should be an object of type ".concat(JSON.stringify(Wn), ".");
  }
  function Da(n) {
    if (n && F(n) !== "object" || Array.isArray(n)) return console.error("customTrayButtons should be an Object of the type ".concat(JSON.stringify(Qt), ".")), !1;
    if (n) for (var e = 0, t = Object.entries(n); e < t.length; e++) for (var r = Be(t[e], 1)[0], i = 0, a = Object.entries(n[r]); i < a.length; i++) {
      var c = Be(a[i], 2), l = c[0], u = c[1];
      if (l === "iconPath" && !mt(u) || l === "iconPathDarkMode" && !mt(u)) return console.error("customTrayButton ".concat(l, " should be a url.")), !1;
      var h = Qt.id[l];
      if (!h) return console.error("customTrayButton does not support key ".concat(l)), !1;
      if (F(u) !== h) return console.error("customTrayButton ".concat(l, " should be a ").concat(h, ".")), !1;
    }
    return !0;
  }
  function Na(n) {
    if (!n || n && F(n) !== "object" || Array.isArray(n)) return console.error(Ia()), !1;
    for (var e = function(m) {
      return "".concat(m, " should be ").concat(Wn.id[m]);
    }, t = function(m, _) {
      return console.error("customIntegration ".concat(m, ": ").concat(_));
    }, r = 0, i = Object.entries(n); r < i.length; r++) {
      var a = Be(i[r], 1)[0];
      if (!("label" in n[a])) return t(a, "label is required"), !1;
      if (!("location" in n[a])) return t(a, "location is required"), !1;
      if (!("src" in n[a]) && !("srcdoc" in n[a])) return t(a, "src or srcdoc is required"), !1;
      for (var c = 0, l = Object.entries(n[a]); c < l.length; c++) {
        var u = Be(l[c], 2), h = u[0], p = u[1];
        switch (h) {
          case "allow":
          case "csp":
          case "name":
          case "referrerPolicy":
          case "sandbox":
            if (typeof p != "string") return t(a, e(h)), !1;
            break;
          case "iconURL":
            if (!mt(p)) return t(a, "".concat(h, " should be a url")), !1;
            break;
          case "src":
            if ("srcdoc" in n[a]) return t(a, "cannot have both src and srcdoc"), !1;
            if (!mt(p)) return t(a, 'src "'.concat(p, '" is not a valid URL')), !1;
            break;
          case "srcdoc":
            if ("src" in n[a]) return t(a, "cannot have both src and srcdoc"), !1;
            if (typeof p != "string") return t(a, e(h)), !1;
            break;
          case "location":
            if (!["main", "sidebar"].includes(p)) return t(a, e(h)), !1;
            break;
          case "controlledBy":
            if (p !== "*" && p !== "owners" && (!Array.isArray(p) || p.some(function(m) {
              return typeof m != "string";
            }))) return t(a, e(h)), !1;
            break;
          case "shared":
            if ((!Array.isArray(p) || p.some(function(m) {
              return typeof m != "string";
            })) && p !== "owners" && typeof p != "boolean") return t(a, e(h)), !1;
            break;
          default:
            if (!Wn.id[h]) return console.error("customIntegration does not support key ".concat(h)), !1;
        }
      }
    }
    return !0;
  }
  function Ra(n, e) {
    if (e === void 0) return !1;
    switch (F(e)) {
      case "string":
        return F(n) === e;
      case "object":
        if (F(n) !== "object") return !1;
        for (var t in n) if (!Ra(n[t], e[t])) return !1;
        return !0;
      default:
        return !1;
    }
  }
  function Ji(n) {
    if (F(n) !== "object") throw new Error('RemoteMediaPlayerSettings: must be "object" type');
    if (n.state && !Object.values(Un).includes(n.state)) throw new Error("Invalid value for RemoteMediaPlayerSettings.state, valid values are: " + JSON.stringify(Un));
    if (n.volume) {
      if (typeof n.volume != "number") throw new Error('RemoteMediaPlayerSettings.volume: must be "number" type');
      if (n.volume < 0 || n.volume > 2) throw new Error("RemoteMediaPlayerSettings.volume: must be between 0.0 - 2.0");
    }
  }
  function Wi(n, e, t) {
    return !(typeof n != "number" || n < e || n > t);
  }
  function yn(n, e) {
    return n && !e && delete n.data, n;
  }
  const il = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    DAILY_ACCESS_LEVEL_FULL: Co,
    DAILY_ACCESS_LEVEL_LOBBY: ic,
    DAILY_ACCESS_LEVEL_NONE: oc,
    DAILY_ACCESS_UNKNOWN: Nt,
    DAILY_CAMERA_ERROR_CAM_AND_MIC_IN_USE: _c,
    DAILY_CAMERA_ERROR_CAM_IN_USE: gc,
    DAILY_CAMERA_ERROR_CONSTRAINTS: Ec,
    DAILY_CAMERA_ERROR_MIC_IN_USE: vc,
    DAILY_CAMERA_ERROR_NOT_FOUND: Sc,
    DAILY_CAMERA_ERROR_PERMISSIONS: yc,
    DAILY_CAMERA_ERROR_UNDEF_MEDIADEVICES: bc,
    DAILY_CAMERA_ERROR_UNKNOWN: wc,
    DAILY_EVENT_ACCESS_STATE_UPDATED: Bo,
    DAILY_EVENT_ACTIVE_SPEAKER_CHANGE: aa,
    DAILY_EVENT_ACTIVE_SPEAKER_MODE_CHANGE: sa,
    DAILY_EVENT_APP_MSG: Xo,
    DAILY_EVENT_CAMERA_ERROR: Io,
    DAILY_EVENT_CPU_LOAD_CHANGE: ua,
    DAILY_EVENT_ERROR: Bt,
    DAILY_EVENT_EXIT_FULLSCREEN: Ne,
    DAILY_EVENT_FACE_COUNTS_UPDATED: da,
    DAILY_EVENT_FULLSCREEN: De,
    DAILY_EVENT_IFRAME_LAUNCH_CONFIG: Lo,
    DAILY_EVENT_IFRAME_READY_FOR_LAUNCH_CONFIG: Oo,
    DAILY_EVENT_INPUT_SETTINGS_UPDATED: _a,
    DAILY_EVENT_JOINED_MEETING: Do,
    DAILY_EVENT_JOINING_MEETING: jn,
    DAILY_EVENT_LANG_UPDATED: ga,
    DAILY_EVENT_LEFT_MEETING: No,
    DAILY_EVENT_LIVE_STREAMING_ERROR: ma,
    DAILY_EVENT_LIVE_STREAMING_STARTED: ha,
    DAILY_EVENT_LIVE_STREAMING_STOPPED: fa,
    DAILY_EVENT_LIVE_STREAMING_UPDATED: pa,
    DAILY_EVENT_LOADED: Rt,
    DAILY_EVENT_LOADING: Rn,
    DAILY_EVENT_LOAD_ATTEMPT_FAILED: xn,
    DAILY_EVENT_LOCAL_SCREEN_SHARE_CANCELED: oa,
    DAILY_EVENT_LOCAL_SCREEN_SHARE_STARTED: ra,
    DAILY_EVENT_LOCAL_SCREEN_SHARE_STOPPED: ia,
    DAILY_EVENT_MEETING_SESSION_DATA_ERROR: kc,
    DAILY_EVENT_MEETING_SESSION_STATE_UPDATED: Vo,
    DAILY_EVENT_MEETING_SESSION_SUMMARY_UPDATED: Uo,
    DAILY_EVENT_NETWORK_CONNECTION: la,
    DAILY_EVENT_NETWORK_QUALITY_CHANGE: ca,
    DAILY_EVENT_NONFATAL_ERROR: Ft,
    DAILY_EVENT_PARTICIPANT_COUNTS_UPDATED: Fo,
    DAILY_EVENT_PARTICIPANT_JOINED: Ro,
    DAILY_EVENT_PARTICIPANT_LEFT: jo,
    DAILY_EVENT_PARTICIPANT_UPDATED: xo,
    DAILY_EVENT_RECEIVE_SETTINGS_UPDATED: va,
    DAILY_EVENT_RECORDING_DATA: Qo,
    DAILY_EVENT_RECORDING_ERROR: Ho,
    DAILY_EVENT_RECORDING_STARTED: xt,
    DAILY_EVENT_RECORDING_STATS: zo,
    DAILY_EVENT_RECORDING_STOPPED: jt,
    DAILY_EVENT_RECORDING_UPLOAD_COMPLETED: Ko,
    DAILY_EVENT_REMOTE_MEDIA_PLAYER_STARTED: ea,
    DAILY_EVENT_REMOTE_MEDIA_PLAYER_STOPPED: na,
    DAILY_EVENT_REMOTE_MEDIA_PLAYER_UPDATED: ta,
    DAILY_EVENT_STARTED_CAMERA: Po,
    DAILY_EVENT_THEME_UPDATED: Nn,
    DAILY_EVENT_TRACK_STARTED: Fn,
    DAILY_EVENT_TRACK_STOPPED: Bn,
    DAILY_EVENT_TRANSCRIPTION_ERROR: Wo,
    DAILY_EVENT_TRANSCRIPTION_MSG: Zo,
    DAILY_EVENT_TRANSCRIPTION_STARTED: qo,
    DAILY_EVENT_TRANSCRIPTION_STOPPED: Jo,
    DAILY_EVENT_WAITING_PARTICIPANT_ADDED: Yo,
    DAILY_EVENT_WAITING_PARTICIPANT_REMOVED: Go,
    DAILY_EVENT_WAITING_PARTICIPANT_UPDATED: $o,
    DAILY_FATAL_ERROR_CONNECTION: mc,
    DAILY_FATAL_ERROR_EJECTED: ac,
    DAILY_FATAL_ERROR_EOL: pc,
    DAILY_FATAL_ERROR_EXP_ROOM: lc,
    DAILY_FATAL_ERROR_EXP_TOKEN: uc,
    DAILY_FATAL_ERROR_MEETING_FULL: hc,
    DAILY_FATAL_ERROR_NBF_ROOM: sc,
    DAILY_FATAL_ERROR_NBF_TOKEN: cc,
    DAILY_FATAL_ERROR_NOT_ALLOWED: fc,
    DAILY_FATAL_ERROR_NO_ROOM: dc,
    DAILY_RECEIVE_SETTINGS_ALL_PARTICIPANTS_KEY: Ao,
    DAILY_RECEIVE_SETTINGS_BASE_KEY: Mo,
    DAILY_STATE_ERROR: _e,
    DAILY_STATE_JOINED: je,
    DAILY_STATE_JOINING: Ht,
    DAILY_STATE_LEFT: ve,
    DAILY_STATE_NEW: Dn,
    DAILY_TRACK_STATE_BLOCKED: Xs,
    DAILY_TRACK_STATE_INTERRUPTED: nc,
    DAILY_TRACK_STATE_LOADING: tc,
    DAILY_TRACK_STATE_OFF: Zs,
    DAILY_TRACK_STATE_PLAYABLE: rc,
    DAILY_TRACK_STATE_SENDABLE: ec,
    default: rl
  }, Symbol.toStringTag, { value: "Module" })), ol = /* @__PURE__ */ Xa(il);
  var sr = { exports: {} }, et = typeof Reflect == "object" ? Reflect : null, zi = et && typeof et.apply == "function" ? et.apply : function(e, t, r) {
    return Function.prototype.apply.call(e, t, r);
  }, Yt;
  et && typeof et.ownKeys == "function" ? Yt = et.ownKeys : Object.getOwnPropertySymbols ? Yt = function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
  } : Yt = function(e) {
    return Object.getOwnPropertyNames(e);
  };
  function al(n) {
    console && console.warn && console.warn(n);
  }
  var xa = Number.isNaN || function(e) {
    return e !== e;
  };
  function R() {
    R.init.call(this);
  }
  sr.exports = R;
  sr.exports.once = ul;
  R.EventEmitter = R;
  R.prototype._events = void 0;
  R.prototype._eventsCount = 0;
  R.prototype._maxListeners = void 0;
  var Hi = 10;
  function rn(n) {
    if (typeof n != "function")
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
  }
  Object.defineProperty(R, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
      return Hi;
    },
    set: function(n) {
      if (typeof n != "number" || n < 0 || xa(n))
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + n + ".");
      Hi = n;
    }
  });
  R.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  };
  R.prototype.setMaxListeners = function(e) {
    if (typeof e != "number" || e < 0 || xa(e))
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this;
  };
  function ja(n) {
    return n._maxListeners === void 0 ? R.defaultMaxListeners : n._maxListeners;
  }
  R.prototype.getMaxListeners = function() {
    return ja(this);
  };
  R.prototype.emit = function(e) {
    for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
    var i = e === "error", a = this._events;
    if (a !== void 0)
      i = i && a.error === void 0;
    else if (!i)
      return !1;
    if (i) {
      var c;
      if (t.length > 0 && (c = t[0]), c instanceof Error)
        throw c;
      var l = new Error("Unhandled error." + (c ? " (" + c.message + ")" : ""));
      throw l.context = c, l;
    }
    var u = a[e];
    if (u === void 0)
      return !1;
    if (typeof u == "function")
      zi(u, this, t);
    else
      for (var h = u.length, p = Ya(u, h), r = 0; r < h; ++r)
        zi(p[r], this, t);
    return !0;
  };
  function Fa(n, e, t, r) {
    var i, a, c;
    if (rn(t), a = n._events, a === void 0 ? (a = n._events = /* @__PURE__ */ Object.create(null), n._eventsCount = 0) : (a.newListener !== void 0 && (n.emit(
      "newListener",
      e,
      t.listener ? t.listener : t
    ), a = n._events), c = a[e]), c === void 0)
      c = a[e] = t, ++n._eventsCount;
    else if (typeof c == "function" ? c = a[e] = r ? [t, c] : [c, t] : r ? c.unshift(t) : c.push(t), i = ja(n), i > 0 && c.length > i && !c.warned) {
      c.warned = !0;
      var l = new Error("Possible EventEmitter memory leak detected. " + c.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      l.name = "MaxListenersExceededWarning", l.emitter = n, l.type = e, l.count = c.length, al(l);
    }
    return n;
  }
  R.prototype.addListener = function(e, t) {
    return Fa(this, e, t, !1);
  };
  R.prototype.on = R.prototype.addListener;
  R.prototype.prependListener = function(e, t) {
    return Fa(this, e, t, !0);
  };
  function sl() {
    if (!this.fired)
      return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function Ba(n, e, t) {
    var r = { fired: !1, wrapFn: void 0, target: n, type: e, listener: t }, i = sl.bind(r);
    return i.listener = t, r.wrapFn = i, i;
  }
  R.prototype.once = function(e, t) {
    return rn(t), this.on(e, Ba(this, e, t)), this;
  };
  R.prototype.prependOnceListener = function(e, t) {
    return rn(t), this.prependListener(e, Ba(this, e, t)), this;
  };
  R.prototype.removeListener = function(e, t) {
    var r, i, a, c, l;
    if (rn(t), i = this._events, i === void 0)
      return this;
    if (r = i[e], r === void 0)
      return this;
    if (r === t || r.listener === t)
      --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, r.listener || t));
    else if (typeof r != "function") {
      for (a = -1, c = r.length - 1; c >= 0; c--)
        if (r[c] === t || r[c].listener === t) {
          l = r[c].listener, a = c;
          break;
        }
      if (a < 0)
        return this;
      a === 0 ? r.shift() : cl(r, a), r.length === 1 && (i[e] = r[0]), i.removeListener !== void 0 && this.emit("removeListener", e, l || t);
    }
    return this;
  };
  R.prototype.off = R.prototype.removeListener;
  R.prototype.removeAllListeners = function(e) {
    var t, r, i;
    if (r = this._events, r === void 0)
      return this;
    if (r.removeListener === void 0)
      return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : r[e] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete r[e]), this;
    if (arguments.length === 0) {
      var a = Object.keys(r), c;
      for (i = 0; i < a.length; ++i)
        c = a[i], c !== "removeListener" && this.removeAllListeners(c);
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (t = r[e], typeof t == "function")
      this.removeListener(e, t);
    else if (t !== void 0)
      for (i = t.length - 1; i >= 0; i--)
        this.removeListener(e, t[i]);
    return this;
  };
  function Ua(n, e, t) {
    var r = n._events;
    if (r === void 0)
      return [];
    var i = r[e];
    return i === void 0 ? [] : typeof i == "function" ? t ? [i.listener || i] : [i] : t ? ll(i) : Ya(i, i.length);
  }
  R.prototype.listeners = function(e) {
    return Ua(this, e, !0);
  };
  R.prototype.rawListeners = function(e) {
    return Ua(this, e, !1);
  };
  R.listenerCount = function(n, e) {
    return typeof n.listenerCount == "function" ? n.listenerCount(e) : Va.call(n, e);
  };
  R.prototype.listenerCount = Va;
  function Va(n) {
    var e = this._events;
    if (e !== void 0) {
      var t = e[n];
      if (typeof t == "function")
        return 1;
      if (t !== void 0)
        return t.length;
    }
    return 0;
  }
  R.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Yt(this._events) : [];
  };
  function Ya(n, e) {
    for (var t = new Array(e), r = 0; r < e; ++r)
      t[r] = n[r];
    return t;
  }
  function cl(n, e) {
    for (; e + 1 < n.length; e++)
      n[e] = n[e + 1];
    n.pop();
  }
  function ll(n) {
    for (var e = new Array(n.length), t = 0; t < e.length; ++t)
      e[t] = n[t].listener || n[t];
    return e;
  }
  function ul(n, e) {
    return new Promise(function(t, r) {
      function i(c) {
        n.removeListener(e, a), r(c);
      }
      function a() {
        typeof n.removeListener == "function" && n.removeListener("error", i), t([].slice.call(arguments));
      }
      $a(n, e, a, { once: !0 }), e !== "error" && dl(n, i, { once: !0 });
    });
  }
  function dl(n, e, t) {
    typeof n.on == "function" && $a(n, "error", e, t);
  }
  function $a(n, e, t, r) {
    if (typeof n.on == "function")
      r.once ? n.once(e, t) : n.on(e, t);
    else if (typeof n.addEventListener == "function")
      n.addEventListener(e, function i(a) {
        r.once && n.removeEventListener(e, i), t(a);
      });
    else
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof n);
  }
  var hl = sr.exports, on = {}, Ae = {};
  Object.defineProperty(Ae, "__esModule", { value: !0 });
  Ae.Api = Ae.HttpClient = Ae.ContentType = void 0;
  var V;
  (function(n) {
    n.Json = "application/json", n.FormData = "multipart/form-data", n.UrlEncoded = "application/x-www-form-urlencoded", n.Text = "text/plain";
  })(V || (Ae.ContentType = V = {}));
  class Ga {
    constructor(e = {}) {
      U(this, "baseUrl", "https://api.vapi.ai");
      U(this, "securityData", null);
      U(this, "securityWorker");
      U(this, "abortControllers", /* @__PURE__ */ new Map());
      U(this, "customFetch", (...e) => fetch(...e));
      U(this, "baseApiParams", {
        credentials: "same-origin",
        headers: {},
        redirect: "follow",
        referrerPolicy: "no-referrer"
      });
      U(this, "setSecurityData", (e) => {
        this.securityData = e;
      });
      U(this, "contentFormatters", {
        [V.Json]: (e) => e !== null && (typeof e == "object" || typeof e == "string") ? JSON.stringify(e) : e,
        [V.Text]: (e) => e !== null && typeof e != "string" ? JSON.stringify(e) : e,
        [V.FormData]: (e) => Object.keys(e || {}).reduce((t, r) => {
          const i = e[r];
          return t.append(r, i instanceof Blob ? i : typeof i == "object" && i !== null ? JSON.stringify(i) : `${i}`), t;
        }, new FormData()),
        [V.UrlEncoded]: (e) => this.toQueryString(e)
      });
      U(this, "createAbortSignal", (e) => {
        if (this.abortControllers.has(e)) {
          const r = this.abortControllers.get(e);
          return r ? r.signal : void 0;
        }
        const t = new AbortController();
        return this.abortControllers.set(e, t), t.signal;
      });
      U(this, "abortRequest", (e) => {
        const t = this.abortControllers.get(e);
        t && (t.abort(), this.abortControllers.delete(e));
      });
      U(this, "request", async ({ body: e, secure: t, path: r, type: i, query: a, format: c, baseUrl: l, cancelToken: u, ...h }) => {
        const p = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {}, m = this.mergeRequestParams(h, p), _ = a && this.toQueryString(a), S = this.contentFormatters[i || V.Json], b = c || m.format;
        return this.customFetch(`${l || this.baseUrl || ""}${r}${_ ? `?${_}` : ""}`, {
          ...m,
          headers: {
            ...m.headers || {},
            ...i && i !== V.FormData ? { "Content-Type": i } : {}
          },
          signal: (u ? this.createAbortSignal(u) : m.signal) || null,
          body: typeof e > "u" || e === null ? null : S(e)
        }).then(async (E) => {
          const T = E;
          T.data = null, T.error = null;
          const O = b ? await E[b]().then(($) => (T.ok ? T.data = $ : T.error = $, T)).catch(($) => (T.error = $, T)) : T;
          if (u && this.abortControllers.delete(u), !E.ok)
            throw O;
          return O;
        });
      });
      Object.assign(this, e);
    }
    encodeQueryParam(e, t) {
      return `${encodeURIComponent(e)}=${encodeURIComponent(typeof t == "number" ? t : `${t}`)}`;
    }
    addQueryParam(e, t) {
      return this.encodeQueryParam(t, e[t]);
    }
    addArrayQueryParam(e, t) {
      return e[t].map((i) => this.encodeQueryParam(t, i)).join("&");
    }
    toQueryString(e) {
      const t = e || {};
      return Object.keys(t).filter((i) => typeof t[i] < "u").map((i) => Array.isArray(t[i]) ? this.addArrayQueryParam(t, i) : this.addQueryParam(t, i)).join("&");
    }
    addQueryParams(e) {
      const t = this.toQueryString(e);
      return t ? `?${t}` : "";
    }
    mergeRequestParams(e, t) {
      return {
        ...this.baseApiParams,
        ...e,
        ...t || {},
        headers: {
          ...this.baseApiParams.headers || {},
          ...e.headers || {},
          ...t && t.headers || {}
        }
      };
    }
  }
  Ae.HttpClient = Ga;
  class pl extends Ga {
    constructor() {
      super(...arguments);
      U(this, "assistant", {
        /**
         * No description
         *
         * @tags Assistants
         * @name AssistantControllerCreate
         * @summary Create Assistant
         * @request POST:/assistant
         * @secure
         */
        assistantControllerCreate: (t, r = {}) => this.request({
          path: "/assistant",
          method: "POST",
          body: t,
          secure: !0,
          type: V.Json,
          format: "json",
          ...r
        }),
        /**
         * No description
         *
         * @tags Assistants
         * @name AssistantControllerFindAll
         * @summary List Assistants
         * @request GET:/assistant
         * @secure
         */
        assistantControllerFindAll: (t, r = {}) => this.request({
          path: "/assistant",
          method: "GET",
          query: t,
          secure: !0,
          format: "json",
          ...r
        }),
        /**
         * No description
         *
         * @tags Assistants
         * @name AssistantControllerFindOne
         * @summary Get Assistant
         * @request GET:/assistant/{id}
         * @secure
         */
        assistantControllerFindOne: (t, r = {}) => this.request({
          path: `/assistant/${t}`,
          method: "GET",
          secure: !0,
          format: "json",
          ...r
        }),
        /**
         * No description
         *
         * @tags Assistants
         * @name AssistantControllerUpdate
         * @summary Update Assistant
         * @request PATCH:/assistant/{id}
         * @secure
         */
        assistantControllerUpdate: (t, r, i = {}) => this.request({
          path: `/assistant/${t}`,
          method: "PATCH",
          body: r,
          secure: !0,
          type: V.Json,
          format: "json",
          ...i
        }),
        /**
         * No description
         *
         * @tags Assistants
         * @name AssistantControllerReplace
         * @summary Replace Assistant
         * @request PUT:/assistant/{id}
         * @secure
         */
        assistantControllerReplace: (t, r, i = {}) => this.request({
          path: `/assistant/${t}`,
          method: "PUT",
          body: r,
          secure: !0,
          type: V.Json,
          format: "json",
          ...i
        }),
        /**
         * No description
         *
         * @tags Assistants
         * @name AssistantControllerRemove
         * @summary Delete Assistant
         * @request DELETE:/assistant/{id}
         * @secure
         */
        assistantControllerRemove: (t, r = {}) => this.request({
          path: `/assistant/${t}`,
          method: "DELETE",
          secure: !0,
          format: "json",
          ...r
        })
      });
      U(this, "call", {
        /**
         * No description
         *
         * @tags Calls
         * @name CallControllerFindAll
         * @summary List Calls
         * @request GET:/call
         * @secure
         */
        callControllerFindAll: (t, r = {}) => this.request({
          path: "/call",
          method: "GET",
          query: t,
          secure: !0,
          format: "json",
          ...r
        }),
        /**
         * No description
         *
         * @tags Calls
         * @name CallControllerFindOne
         * @summary Get Call
         * @request GET:/call/{id}
         * @secure
         */
        callControllerFindOne: (t, r = {}) => this.request({
          path: `/call/${t}`,
          method: "GET",
          secure: !0,
          format: "json",
          ...r
        }),
        /**
         * No description
         *
         * @tags Calls
         * @name CallControllerDeleteCallData
         * @summary Delete Call Data
         * @request DELETE:/call/{id}
         * @secure
         */
        callControllerDeleteCallData: (t, r = {}) => this.request({
          path: `/call/${t}`,
          method: "DELETE",
          secure: !0,
          format: "json",
          ...r
        }),
        /**
         * No description
         *
         * @tags Calls
         * @name CallControllerUpdate
         * @summary Update Call
         * @request PATCH:/call/{id}
         * @secure
         */
        callControllerUpdate: (t, r, i = {}) => this.request({
          path: `/call/${t}`,
          method: "PATCH",
          body: r,
          secure: !0,
          type: V.Json,
          format: "json",
          ...i
        }),
        /**
         * No description
         *
         * @tags Calls
         * @name CallControllerCreatePhoneCall
         * @summary Create Phone Call
         * @request POST:/call/phone
         * @secure
         */
        callControllerCreatePhoneCall: (t, r = {}) => this.request({
          path: "/call/phone",
          method: "POST",
          body: t,
          secure: !0,
          type: V.Json,
          format: "json",
          ...r
        }),
        /**
         * No description
         *
         * @tags Calls
         * @name CallControllerCreateWebCall
         * @summary Create Web Call
         * @request POST:/call/web
         * @secure
         */
        callControllerCreateWebCall: (t, r = {}) => this.request({
          path: "/call/web",
          method: "POST",
          body: t,
          secure: !0,
          type: V.Json,
          format: "json",
          ...r
        })
      });
      U(this, "credential", {
        /**
         * No description
         *
         * @tags Credentials
         * @name CredentialControllerCreate
         * @summary Create Credential
         * @request POST:/credential
         * @secure
         */
        credentialControllerCreate: (t, r = {}) => this.request({
          path: "/credential",
          method: "POST",
          body: t,
          secure: !0,
          type: V.Json,
          format: "json",
          ...r
        }),
        /**
         * No description
         *
         * @tags Credentials
         * @name CredentialControllerFindAll
         * @summary List Credentials
         * @request GET:/credential
         * @secure
         */
        credentialControllerFindAll: (t, r = {}) => this.request({
          path: "/credential",
          method: "GET",
          query: t,
          secure: !0,
          format: "json",
          ...r
        }),
        /**
         * No description
         *
         * @tags Credentials
         * @name CredentialControllerFindOne
         * @summary Get Credential
         * @request GET:/credential/{id}
         * @secure
         */
        credentialControllerFindOne: (t, r = {}) => this.request({
          path: `/credential/${t}`,
          method: "GET",
          secure: !0,
          format: "json",
          ...r
        }),
        /**
         * No description
         *
         * @tags Credentials
         * @name CredentialControllerUpdate
         * @summary Update Credential
         * @request PUT:/credential/{id}
         * @secure
         */
        credentialControllerUpdate: (t, r, i = {}) => this.request({
          path: `/credential/${t}`,
          method: "PUT",
          body: r,
          secure: !0,
          type: V.Json,
          format: "json",
          ...i
        }),
        /**
         * No description
         *
         * @tags Credentials
         * @name CredentialControllerRemove
         * @summary Delete Credential
         * @request DELETE:/credential/{id}
         * @secure
         */
        credentialControllerRemove: (t, r = {}) => this.request({
          path: `/credential/${t}`,
          method: "DELETE",
          secure: !0,
          format: "json",
          ...r
        })
      });
      U(this, "phoneNumber", {
        /**
         * No description
         *
         * @tags Phone Numbers
         * @name PhoneNumberControllerBuy
         * @summary Buy Phone Number
         * @request POST:/phone-number/buy
         * @secure
         */
        phoneNumberControllerBuy: (t, r = {}) => this.request({
          path: "/phone-number/buy",
          method: "POST",
          body: t,
          secure: !0,
          type: V.Json,
          format: "json",
          ...r
        }),
        /**
         * No description
         *
         * @tags Phone Numbers
         * @name PhoneNumberControllerImportTwilio
         * @summary Import Twilio Number
         * @request POST:/phone-number/import/twilio
         * @secure
         */
        phoneNumberControllerImportTwilio: (t, r = {}) => this.request({
          path: "/phone-number/import/twilio",
          method: "POST",
          body: t,
          secure: !0,
          type: V.Json,
          format: "json",
          ...r
        }),
        /**
         * No description
         *
         * @tags Phone Numbers
         * @name PhoneNumberControllerImportVonage
         * @summary Import Vonage Number
         * @request POST:/phone-number/import/vonage
         * @secure
         */
        phoneNumberControllerImportVonage: (t, r = {}) => this.request({
          path: "/phone-number/import/vonage",
          method: "POST",
          body: t,
          secure: !0,
          type: V.Json,
          format: "json",
          ...r
        }),
        /**
         * No description
         *
         * @tags Phone Numbers
         * @name PhoneNumberControllerFindAll
         * @summary List Phone Numbers
         * @request GET:/phone-number
         * @secure
         */
        phoneNumberControllerFindAll: (t, r = {}) => this.request({
          path: "/phone-number",
          method: "GET",
          query: t,
          secure: !0,
          format: "json",
          ...r
        }),
        /**
         * No description
         *
         * @tags Phone Numbers
         * @name PhoneNumberControllerFindOne
         * @summary Get Phone Number
         * @request GET:/phone-number/{id}
         * @secure
         */
        phoneNumberControllerFindOne: (t, r = {}) => this.request({
          path: `/phone-number/${t}`,
          method: "GET",
          secure: !0,
          format: "json",
          ...r
        }),
        /**
         * No description
         *
         * @tags Phone Numbers
         * @name PhoneNumberControllerUpdate
         * @summary Update Phone Number
         * @request PATCH:/phone-number/{id}
         * @secure
         */
        phoneNumberControllerUpdate: (t, r, i = {}) => this.request({
          path: `/phone-number/${t}`,
          method: "PATCH",
          body: r,
          secure: !0,
          type: V.Json,
          format: "json",
          ...i
        }),
        /**
         * No description
         *
         * @tags Phone Numbers
         * @name PhoneNumberControllerRemove
         * @summary Delete Phone Number
         * @request DELETE:/phone-number/{id}
         * @secure
         */
        phoneNumberControllerRemove: (t, r = {}) => this.request({
          path: `/phone-number/${t}`,
          method: "DELETE",
          secure: !0,
          format: "json",
          ...r
        })
      });
      U(this, "metrics", {
        /**
         * No description
         *
         * @tags Metrics
         * @name MetricsControllerFindAll
         * @summary List Metrics
         * @request GET:/metrics
         * @secure
         */
        metricsControllerFindAll: (t, r = {}) => this.request({
          path: "/metrics",
          method: "GET",
          query: t,
          secure: !0,
          format: "json",
          ...r
        })
      });
      U(this, "log", {
        /**
         * No description
         *
         * @tags Logs
         * @name LoggingControllerGetLogs
         * @summary Get Call Logs
         * @request GET:/log
         * @secure
         */
        loggingControllerGetLogs: (t, r = {}) => this.request({
          path: "/log",
          method: "GET",
          query: t,
          secure: !0,
          format: "json",
          ...r
        })
      });
      U(this, "tool", {
        /**
         * No description
         *
         * @tags Tools
         * @name ToolControllerCreate
         * @summary Create Tool
         * @request POST:/tool
         * @secure
         */
        toolControllerCreate: (t, r = {}) => this.request({
          path: "/tool",
          method: "POST",
          body: t,
          secure: !0,
          type: V.Json,
          format: "json",
          ...r
        }),
        /**
         * No description
         *
         * @tags Tools
         * @name ToolControllerFindAll
         * @summary List Tools
         * @request GET:/tool
         * @secure
         */
        toolControllerFindAll: (t, r = {}) => this.request({
          path: "/tool",
          method: "GET",
          query: t,
          secure: !0,
          format: "json",
          ...r
        }),
        /**
         * No description
         *
         * @tags Tools
         * @name ToolControllerFindOne
         * @summary Get Tool
         * @request GET:/tool/{id}
         * @secure
         */
        toolControllerFindOne: (t, r = {}) => this.request({
          path: `/tool/${t}`,
          method: "GET",
          secure: !0,
          format: "json",
          ...r
        }),
        /**
         * No description
         *
         * @tags Tools
         * @name ToolControllerUpdate
         * @summary Update Tool
         * @request PATCH:/tool/{id}
         * @secure
         */
        toolControllerUpdate: (t, r, i = {}) => this.request({
          path: `/tool/${t}`,
          method: "PATCH",
          body: r,
          secure: !0,
          type: V.Json,
          format: "json",
          ...i
        }),
        /**
         * No description
         *
         * @tags Tools
         * @name ToolControllerRemove
         * @summary Delete Tool
         * @request DELETE:/tool/{id}
         * @secure
         */
        toolControllerRemove: (t, r = {}) => this.request({
          path: `/tool/${t}`,
          method: "DELETE",
          secure: !0,
          format: "json",
          ...r
        })
      });
      U(this, "file", {
        /**
         * No description
         *
         * @tags Files
         * @name FileControllerCreate
         * @summary Upload File
         * @request POST:/file/upload
         * @secure
         */
        fileControllerCreate: (t, r = {}) => this.request({
          path: "/file/upload",
          method: "POST",
          body: t,
          secure: !0,
          type: V.FormData,
          format: "json",
          ...r
        }),
        /**
         * No description
         *
         * @tags Files
         * @name FileControllerFindAll
         * @summary List Files
         * @request GET:/file
         * @secure
         */
        fileControllerFindAll: (t = {}) => this.request({
          path: "/file",
          method: "GET",
          secure: !0,
          format: "json",
          ...t
        }),
        /**
         * No description
         *
         * @tags Files
         * @name FileControllerFindOne
         * @summary Get File
         * @request GET:/file/{id}
         * @secure
         */
        fileControllerFindOne: (t, r = {}) => this.request({
          path: `/file/${t}`,
          method: "GET",
          secure: !0,
          format: "json",
          ...r
        }),
        /**
         * No description
         *
         * @tags Files
         * @name FileControllerRemove
         * @summary Delete File
         * @request DELETE:/file/{id}
         * @secure
         */
        fileControllerRemove: (t, r = {}) => this.request({
          path: `/file/${t}`,
          method: "DELETE",
          secure: !0,
          format: "json",
          ...r
        })
      });
    }
  }
  Ae.Api = pl;
  Object.defineProperty(on, "__esModule", { value: !0 });
  on.client = void 0;
  const fl = Ae, ml = new fl.Api({
    baseUrl: "https://api.vapi.ai",
    baseApiParams: {
      secure: !0
    },
    securityWorker: async (n) => {
      if (n)
        return {
          headers: {
            Authorization: `Bearer ${n}`
          }
        };
    }
  });
  on.client = ml;
  var qa = wr && wr.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(Qi, "__esModule", { value: !0 });
  const gl = qa(ol), vl = qa(hl), bn = on;
  function _l(n) {
    const e = document.querySelector(`audio[data-participant-id="${n}"]`);
    e == null || e.remove();
  }
  async function yl(n, e) {
    n.muted = !1, n.autoplay = !0, e != null && (n.srcObject = new MediaStream([e]), await n.play());
  }
  async function bl(n, e) {
    const t = document.createElement("audio");
    return t.dataset.participantId = e, document.body.appendChild(t), await yl(t, n), t;
  }
  function Sl(n, e, t) {
    n.participant.local || e.updateParticipant(n.participant.session_id, {
      setSubscribedTracks: {
        audio: !0,
        video: t
      }
    });
  }
  class El extends vl.default {
    on(e, t) {
      return super.on(e, t), this;
    }
    once(e, t) {
      return super.once(e, t), this;
    }
    emit(e, ...t) {
      return super.emit(e, ...t);
    }
    removeListener(e, t) {
      return super.removeListener(e, t), this;
    }
    removeAllListeners(e) {
      return super.removeAllListeners(e), this;
    }
  }
  class wl extends El {
    constructor(t, r) {
      super();
      U(this, "started", !1);
      U(this, "call", null);
      U(this, "speakingTimeout", null);
      bn.client.baseUrl = r ?? "https://api.vapi.ai", bn.client.setSecurityData(t);
    }
    cleanup() {
      var t;
      this.started = !1, (t = this.call) == null || t.destroy(), this.call = null, this.speakingTimeout = null;
    }
    async start(t, r, i) {
      var a, c;
      if (!t && !i)
        throw new Error("Assistant or Squad must be provided.");
      if (this.started)
        return null;
      this.started = !0;
      try {
        const l = (await bn.client.call.callControllerCreateWebCall({
          assistant: typeof t == "string" ? void 0 : t,
          assistantId: typeof t == "string" ? t : void 0,
          assistantOverrides: r,
          squad: typeof i == "string" ? void 0 : i,
          squadId: typeof i == "string" ? i : void 0
        })).data;
        this.call && this.cleanup();
        const u = ((a = l == null ? void 0 : l.artifactPlan) == null ? void 0 : a.videoRecordingEnabled) ?? !1;
        if (this.call = gl.default.createCallObject({
          audioSource: !0,
          videoSource: u
        }), (c = this.call.iframe()) == null || c.style.setProperty("display", "none"), this.call.on("left-meeting", () => {
          var h;
          this.emit("call-end"), u && ((h = this.call) == null || h.stopRecording()), this.cleanup();
        }), this.call.on("participant-left", (h) => {
          h && _l(h.participant.session_id);
        }), this.call.on("error", (h) => {
          var p;
          this.emit("error", h), u && ((p = this.call) == null || p.stopRecording());
        }), this.call.on("camera-error", (h) => {
          this.emit("error", h);
        }), this.call.on("track-started", async (h) => {
          var p, m, _;
          !h || !h.participant || (p = h.participant) != null && p.local || h.track.kind === "audio" && (await bl(h.track, h.participant.session_id), ((m = h == null ? void 0 : h.participant) == null ? void 0 : m.user_name) === "Vapi Speaker" && ((_ = this.call) == null || _.sendAppMessage("playable")));
        }), this.call.on("participant-joined", (h) => {
          !h || !this.call || Sl(h, this.call, u);
        }), await this.call.join({
          url: l.webCallUrl,
          subscribeToTracksAutomatically: !1
        }), u) {
          const h = (/* @__PURE__ */ new Date()).getTime();
          this.call.startRecording({
            width: 1280,
            height: 720,
            backgroundColor: "#FF1F2D3D",
            layout: {
              preset: "default"
            }
          }), this.call.on("recording-started", () => {
            this.send({
              type: "control",
              control: "say-first-message",
              videoRecordingStartDelaySeconds: ((/* @__PURE__ */ new Date()).getTime() - h) / 1e3
            });
          });
        }
        return this.call.startRemoteParticipantsAudioLevelObserver(100), this.call.on("remote-participants-audio-level", (h) => {
          h && this.handleRemoteParticipantsAudioLevel(h);
        }), this.call.on("app-message", (h) => this.onAppMessage(h)), this.call.on("nonfatal-error", (h) => {
          var p;
          (h == null ? void 0 : h.type) === "audio-processor-error" && ((p = this.call) == null || p.updateInputSettings({
            audio: {
              processor: {
                type: "none"
              }
            }
          }).then(() => {
            var m;
            (m = this.call) == null || m.setLocalAudio(!0);
          }));
        }), this.call.updateInputSettings({
          audio: {
            processor: {
              type: "noise-cancellation"
            }
          }
        }), l;
      } catch (l) {
        return console.error(l), this.emit("error", l), this.cleanup(), null;
      }
    }
    onAppMessage(t) {
      if (t)
        try {
          if (t.data === "listening")
            return this.emit("call-start");
          try {
            const r = JSON.parse(t.data);
            this.emit("message", r);
          } catch (r) {
            console.log("Error parsing message data: ", r);
          }
        } catch (r) {
          console.error(r);
        }
    }
    handleRemoteParticipantsAudioLevel(t) {
      const r = Object.values(t.participantsAudioLevel).reduce((a, c) => a + c, 0);
      this.emit("volume-level", Math.min(1, r / 0.15)), r > 0.01 && (this.speakingTimeout ? (clearTimeout(this.speakingTimeout), this.speakingTimeout = null) : this.emit("speech-start"), this.speakingTimeout = setTimeout(() => {
        this.emit("speech-end"), this.speakingTimeout = null;
      }, 1e3));
    }
    stop() {
      var t;
      this.started = !1, (t = this.call) == null || t.destroy(), this.call = null;
    }
    send(t) {
      var r;
      (r = this.call) == null || r.sendAppMessage(JSON.stringify(t));
    }
    setMuted(t) {
      try {
        if (!this.call)
          throw new Error("Call object is not available.");
        this.call.setLocalAudio(!t);
      } catch (r) {
        throw r;
      }
    }
    isMuted() {
      try {
        return this.call ? this.call.localAudio() === !1 : !1;
      } catch (t) {
        throw t;
      }
    }
    say(t, r) {
      this.send({
        type: "say",
        message: t,
        endCallAfterSpoken: r
      });
    }
    setInputDevicesAsync(t) {
      var r;
      (r = this.call) == null || r.setInputDevicesAsync(t);
    }
    setOutputDeviceAsync(t) {
      var r;
      (r = this.call) == null || r.setOutputDeviceAsync(t);
    }
  }
  var kl = Qi.default = wl;
  const Tl = ({
    idle: n,
    loading: e,
    active: t,
    width: r,
    height: i,
    position: a,
    offset: c
  }) => {
    const l = parseInt(r) / 2, u = parseInt(i) / 2, h = {
      "bottom-right": `bottom: ${c}; right: ${c};`,
      "bottom-left": `bottom: ${c}; left: ${c};`,
      "top-right": `top: ${c}; right: ${c};`,
      "top-left": `top: ${c}; left: ${c};`,
      bottom: `bottom: ${c}; left: 50%; margin-left: -${l}px;`,
      right: `top: 50%; right: ${c}; margin-top: -${u}px;`,
      left: `top: 50%; left: ${c}; margin-top: -${u}px;`,
      top: `top: ${c}; left: 50%; margin-left: -${l}px;`
    }, p = document.createElement("style");
    p.innerText = `
    @keyframes bounce {
      30% {
        transform: translateY(0%);
      }
      40% {
        transform: translateY(-5%);
      }
      50% {
        transform: translateY(-10%);
      }
      60% {
        transform: translateY(-5%);
      }
      70% {
        transform: translateY(0%);
      }
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .vapi-btn {
      border-radius: 50%;
      min-width: ${r};
      height: ${i};
      color: white;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      display: flex;
      text-align: left;
      align-items: center;
      padding: 0;
      animation: bounce 2s ease-in-out infinite;
      ${h[a]}
    }
    .vapi-btn-round {
      justify-content: center;
    }
    .vapi-btn-pill {
      border-radius: 8px;
      color: black;
      background: white;
      justify-content: flex-start;
      padding: 0px 10px;
    }
    .vapi-btn:hover {
      animation: none;
      transform: translateY(-5px);
    }
    #vapi-icon-container {
      padding: 5px;
      margin: 5px;
      border-radius: 5px;
    }

    #vapi-title-container {
      padding: 5px 10px;
    }
    #vapi-title {
      font-size: 1.1em;
    }
    #vapi-subtitle {
      font-size: 0.9em;
    }

    .vapi-btn-is-loading > #vapi-icon-container > img {
      animation: spin 1s linear infinite;
    }

    .vapi-btn-is-active {
      background: ${t.color};
      box-shadow: 1px 1px 80px 20px ${t.color};
    }
    .vapi-btn-pill.vapi-btn-is-active {
      background: white;
    }
    .vapi-btn-pill.vapi-btn-is-active > #vapi-icon-container {
      background: ${t.color};
    }


    .vapi-btn-is-idle {
      background: ${n.color};
      box-shadow: 1px 1px 10px ${n.color};
    }
    .vapi-btn-pill.vapi-btn-is-idle {
      background: white;
    }
    .vapi-btn-pill.vapi-btn-is-idle > #vapi-icon-container {
      background: ${n.color};
    }

    .vapi-btn-is-loading {
      background: ${e.color};
      box-shadow: 1px 1px 80px 20px ${e.color};
    }
    .vapi-btn-pill.vapi-btn-is-loading {
      background: white;
    }
    .vapi-btn-pill.vapi-btn-is-loading > #vapi-icon-container {
      background: ${e.color};
    }
    .vapi-btn-is-speaking {
      // Add speaking styles if different from active/loading/idle
    }
    @font-face {
      font-family: 'LucideIcons';
      src: url(https://unpkg.com/lucide-static@latest/font/Lucide.ttf) format('truetype');
    }
  `;
    for (let m = 0; m <= 10; m++)
      p.innerText += `
      .vapi-btn-volume-${m} {
        box-shadow: 1px 1px ${5 + m * 2}px ${m * 2}px ${t.color}, inset 0px 0px 10px 0px rgba(0,0,0,0.1);
      }
    `;
    document.head.appendChild(p);
  }, Cl = ({
    position: n = "bottom",
    offset: e = "40px",
    width: t = "50px",
    height: r = "50px",
    idle: i,
    loading: a,
    active: c
  }, l = "vapi-support-btn") => {
    Tl({ idle: i, loading: a, active: c, width: t, height: r, position: n, offset: e });
    const u = document.createElement("button");
    return u.id = l, u.className = "vapi-btn vapi-btn-round vapi-btn-is-idle", u.onclick = () => {
    }, u;
  }, Ki = "https://unpkg.com/lucide-static@0.321.0/icons/phone.svg", Ml = (n) => (e, t) => {
    const r = n[t];
    if (r) {
      if (e.className = `vapi-btn vapi-btn-is-${t} ${r.type === "pill" ? "vapi-btn-pill" : r.type === "round" ? "vapi-btn-round" : ""}`, e.innerHTML = "", e.title = r.title ?? "", r.type === "pill") {
        const i = document.createElement("div");
        i.id = "vapi-icon-container";
        const a = document.createElement("img");
        a.src = r.icon || Ki, a.alt = "Icon", i.appendChild(a);
        const c = document.createElement("div");
        c.id = "vapi-title-container";
        const l = document.createElement("div");
        l.id = "vapi-title", l.textContent = r.title;
        const u = document.createElement("div");
        u.id = "vapi-subtitle", u.textContent = r.subtitle, c.appendChild(l), c.appendChild(u), e.appendChild(i), e.appendChild(c);
      } else if (r.type === "round") {
        const i = document.createElement("div");
        i.id = "vapi-icon-container";
        const a = document.createElement("img");
        a.src = r.icon || Ki, a.alt = "Icon", i.appendChild(a), e.appendChild(i);
      }
    }
  };
  function Al(n, e, t, r, i, a, c) {
    let l = !1;
    const u = document.querySelector("#e_386227_1_172142096996108662_d > div"), h = () => {
      a(e, "loading"), l ? (n.stop(), l = !1) : (t || r ? n.start(t, r) : (console.log("squad ,", i, t, r), n.start(void 0, void 0, i)), l = !0);
    };
    n.on("call-start", () => {
      a(e, "active");
    }), n.on("call-end", () => {
      a(e, "idle");
    }), n.on("speech-start", () => {
      e.classList.add("vapi-btn-is-speaking");
    }), n.on("speech-end", () => {
      e.classList.remove("vapi-btn-is-speaking");
    }), u.addEventListener("click", h), n.on("volume-level", (p) => {
      const m = Math.floor(p * 10);
      for (let _ = 0; _ <= 10; _++)
        e.classList.remove(`vapi-btn-volume-${_}`);
      e.classList.add(`vapi-btn-volume-${m}`);
    });
  }
  const Ol = ({
    apiKey: n = "",
    assistant: e,
    assistantOverrides: t,
    squad: r,
    anchorElementId: i = "myCustomDiv",
    // ID do elemento âncora como parâmetro
    config: a = {},
    ...c
  }) => {
    function l(m, _) {
      console.log(_);
      const S = { ...m };
      return Object.keys(_).forEach((b) => {
        typeof _[b] == "object" && _[b] !== null && !Array.isArray(_[b]) ? S[b] = l(
          m[b] || {},
          _[b]
        ) : S[b] = _[b];
      }), S;
    }
    const h = l({
      position: "bottom",
      offset: "40px",
      width: "50px",
      height: "50px",
      idle: {
        color: "rgb(93, 254, 202)",
        type: "round",
        title: "Have a quick question?",
        subtitle: "Talk with our AI assistant",
        icon: "https://unpkg.com/lucide-static@0.321.0/icons/phone.svg"
      },
      loading: {
        color: "rgb(93, 124, 202)",
        type: "round",
        title: "Connecting...",
        subtitle: "Please wait",
        icon: "https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg"
      },
      active: {
        color: "rgb(255, 0, 0)",
        type: "round",
        title: "Call is in progress...",
        subtitle: "End the call.",
        icon: "https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg"
      }
    }, a), p = document.querySelector(a.anchorElement) || document.body;
    if (n && (e || r)) {
      const m = new kl(n), _ = Cl(h), S = Ml(h);
      return p.appendChild(_), S(_, "idle"), Al(m, _, e, t, r, S), window.vapiSDK.vapi = m, m;
    } else
      return console.error(
        "API Key and Assistant Configurations are required."
      ), null;
  };
  window.vapiSDK = {
    run: Ol
  };
});
export default Ll();
