/*! For license information please see main.js.LICENSE.txt */
( () => {
        var e, r, t = {
            352: e => {
                "use strict";
                e.exports = i;
                var r = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/
                    , t = {
                    reset: ["fff", "000"],
                    black: "000",
                    red: "ff0000",
                    green: "209805",
                    yellow: "e8bf03",
                    blue: "0000ff",
                    magenta: "ff00ff",
                    cyan: "00ffee",
                    lightgrey: "f0f0f0",
                    darkgrey: "888"
                }
                    , n = {
                    30: "black",
                    31: "red",
                    32: "green",
                    33: "yellow",
                    34: "blue",
                    35: "magenta",
                    36: "cyan",
                    37: "lightgrey"
                }
                    , o = {
                    1: "font-weight:bold",
                    2: "opacity:0.5",
                    3: "<i>",
                    4: "<u>",
                    8: "display:none",
                    9: "<del>"
                }
                    , a = {
                    23: "</i>",
                    24: "</u>",
                    29: "</del>"
                };
                function i(e) {
                    if (!r.test(e))
                        return e;
                    var t = []
                        , n = e.replace(/\033\[(\d+)m/g, (function(e, r) {
                            var n = o[r];
                            if (n)
                                return ~t.indexOf(r) ? (t.pop(),
                                    "</span>") : (t.push(r),
                                    "<" === n[0] ? n : '<span style="' + n + ';">');
                            var i = a[r];
                            return i ? (t.pop(),
                                i) : ""
                        }
                    ))
                        , i = t.length;
                    return i > 0 && (n += Array(i + 1).join("</span>")),
                        n
                }
                function s(e) {
                    for (var r in o[0] = "font-weight:normal;opacity:1;color:#" + e.reset[0] + ";background:#" + e.reset[1],
                        o[7] = "color:#" + e.reset[1] + ";background:#" + e.reset[0],
                        o[90] = "color:#" + e.darkgrey,
                        n) {
                        var t = e[n[r]] || "000";
                        o[r] = "color:#" + t,
                            r = parseInt(r),
                            o[(r + 10).toString()] = "background:#" + t
                    }
                }
                [0, 21, 22, 27, 28, 39, 49].forEach((function(e) {
                        a[e] = "</span>"
                    }
                )),
                    i.setColors = function(e) {
                        if ("object" != typeof e)
                            throw new Error("`colors` parameter must be an Object.");
                        var r = {};
                        for (var n in t) {
                            var o = e.hasOwnProperty(n) ? e[n] : null;
                            if (o) {
                                if ("reset" === n) {
                                    if ("string" == typeof o && (o = [o]),
                                    !Array.isArray(o) || 0 === o.length || o.some((function(e) {
                                            return "string" != typeof e
                                        }
                                    )))
                                        throw new Error("The value of `" + n + "` property must be an Array and each item could only be a hex string, e.g.: FF0000");
                                    var a = t[n];
                                    o[0] || (o[0] = a[0]),
                                    1 !== o.length && o[1] || (o = [o[0]]).push(a[1]),
                                        o = o.slice(0, 2)
                                } else if ("string" != typeof o)
                                    throw new Error("The value of `" + n + "` property must be a hex string, e.g.: FF0000");
                                r[n] = o
                            } else
                                r[n] = t[n]
                        }
                        s(r)
                    }
                    ,
                    i.reset = function() {
                        s(t)
                    }
                    ,
                    i.tags = {},
                    Object.defineProperty ? (Object.defineProperty(i.tags, "open", {
                        get: function() {
                            return o
                        }
                    }),
                        Object.defineProperty(i.tags, "close", {
                            get: function() {
                                return a
                            }
                        })) : (i.tags.open = o,
                        i.tags.close = a),
                    i.reset()
            }
            ,
            208: (e, r, t) => {
                "use strict";
                t.r(r),
                    t.d(r, {
                        default: () => s
                    });
                var n = t(601)
                    , o = t.n(n)
                    , a = t(314)
                    , i = t.n(a)()(o());
                i.push([e.id, "body {\n  margin: 0;\n  font-family: sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n.body-wrap {\n  max-width: 1000px;\n}\n\n.container {\n  display: flex;\n  justify-content: space-around;\n}\n\n.gridwrap {\n  display: grid;\n  grid-template-rows: repeat(12, 35px);\n  grid-template-columns: repeat(11, 35px);\n}\n\n.gridwrap.onxx {\n  margin-right: 70px;\n}\n\n.gridwrap .nums {\n  grid-area: 2 / 1 / 11 / 2;\n  display: grid;\n  grid-template-rows: repeat(10, 35px);\n  align-items: center;\n  justify-items: center;\n  font-size: 10px;\n}\n\n.gridwrap .alphs {\n  grid-area: 1 / 2 / 2 / 12;\n  display: grid;\n  grid-template-columns: repeat(10, 35px);\n  align-items: center;\n  justify-items: center;\n  font-size: 10px;\n}\n\n.gridwrap .gridlabel {\n  grid-area: 12 / 1 / 13 / 12;\n  align-self: end;\n  justify-self: center;\n}\n\n.grid1 > div, .grid2 > div {\n  border-right: 1px solid rgba(0, 0, 255, 0.4);\n  border-top: 1px solid rgba(0, 0, 255, 0.4);\n  position: relative;\n  z-index: 1;\n}\n\n.grid1, .grid2 {\n  grid-area: 2 / 2 / 12 / 12;\n  display: grid;\n  grid-template-rows: repeat(10, 35px);\n  grid-template-columns: repeat(10, 35px);\n  border-left: 1px solid rgba(0, 0, 255, 0.4);\n  border-bottom: 1px solid rgba(0, 0, 255, 0.4);\n  position: relative;\n}\n\n.btns {\n  margin-top: 25px;\n}\n\n.contents {\n  height: 200px;\n  width: 200px;\n  display: flex;\n  justify-content: left;\n  /* align-items: end; */\n  flex-wrap: wrap;\n  margin-top: 35px;\n}\n\n.boat {\n  border: 2px solid blue;\n  background-color: rgba(0, 0, 255, 0.1);\n  height: 33px;\n  cursor: move;\n  left: 0;\n  top: 0;\n  position: absolute;\n  margin: -2px;\n  z-index: 5;\n}\n\n.five {\n  width: 174px;\n}\n\n.four {\n  width: 139px;\n}\n\n.three {\n  width: 104px;\n}\n\n.two {\n  width: 69px;\n}\n\n.spot {\n  margin: 10px;\n  position: relative;\n  height: 33px;\n  border: 1px dotted grey;\n  background-color: white;\n}\n\n.hide {\n  opacity: 0;\n}\n\n@keyframes failed {\n  0% {\n    transform: translateX(0px);\n  }\n\n  25% {\n    transform: translateX(-5px);\n  }\n\n  75% {\n    transform: translateX(5px);\n  }\n\n  100% {\n    transform: translateX(0px);\n  }\n\n}\n\n.boat.animate {\n  border: 2px solid red;\n  background-color: rgba(255, 213, 158, 0.678);\n  animation: failed 0.2s ease-in 0s 1;\n}\n\n.disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n\n.nodrag {\n  cursor: pointer;\n  user-select: none;\n  pointer-events: none;\n}\n\n.correcthit .st, .correcthit .nd {\n  background-color: red;\n  width: 49px;\n  height: 1px;\n  position: absolute;\n  z-index: -1;\n}\n\n.correcthit .st {\n  transform-origin: top left;\n  transform: translate(0px) translateY(-1px) rotate(45deg);\n}\n\n\n.correcthit .nd {\n  transform-origin: top right;\n  transform: translate(-15px) translateY(-1px) rotate(-45deg);\n}\n\n.wronghit {\n  background-color: rgb(243, 243, 243);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.autosolve {\n  background-color: rgb(243, 243, 243);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.blackdot {\n  background-color: black;\n  border-radius: 2px;\n  height: 3px;\n  width: 3px;\n}\n\n.autosolve .blackdot {\n  background-color: rgb(170, 170, 170);\n\n}\n\n.ownhit {\n  border: 2px solid red;\n  background-color: rgba(255, 0, 0, 0.1);\n}\n\n.grid2boat {\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: -2px;\n  border: 2px solid red;\n  background-color: rgba(255, 0, 0, 0.1);\n}\n\n/* .grid2overlay {\n  position: absolute;\n} */\n\n.showprogress {\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 70px;\n  max-height: 90px;\n  opacity: 0.3;\n  margin-top: 35px;\n}\n\n.showprogress.two {\n  margin-left: 15px;\n}\n\n.showprogress > div {\n  display: flex;\n  margin: 3px;\n}\n\n.showprogress > div > div {\n  background-color: blue;\n  border: 1px solid white;\n  height: 10px;\n  width: 10px;\n}\n\n.header {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  margin-bottom: 15px;\n}\n\n.header .actual {\n  font-size: 25px;\n  font-weight: 800;\n}\n\n.header .me {\n  color: grey;\n  padding-left: 50px;\n  font-size: 15px;\n  margin-top: -5px;\n}\n\n.header .notifications {\n  background-color: rgb(238, 238, 238);\n  padding: 8px;\n}\n\n.header {\n  justify-self: end;\n  color: blue;\n  opacity: 0.5;\n}\n\n.footer .dash {\n  margin-top: 10px;\n  margin-bottom: 5px;\n  width: 100%;\n  border-top: 1px dashed grey;\n}\n\n.footer .jazz {\n  width: 100%;\n  text-align: center;\n  color: grey;\n  font-size: 15px;\n}\n\n.btns {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.btns > button {\n  border: 0px;\n  background-color: transparent;\n  color: rgba(0, 0, 255, 0.644);\n  border-bottom: 1px dashed;\n  margin: 5px;\n}\n\nbutton[disabled='true'] {\n  opacity: 0.3;\n}\n\nbutton:hover {\n  color: green;\n  cursor: pointer;\n}\n\n.showsunk {\n  background-color: red;\n}\n\n.rematch {\n  border: 0px;\n  border-bottom: 2px dashed;\n  color: white;\n  font-size: 15px;\n  margin-left: 50px;\n  background-color: transparent;\n}\n\n.rematch:hover {\n  color: black;\n}\n", ""]);
                const s = i
            }
            ,
            314: e => {
                "use strict";
                e.exports = function(e) {
                    var r = [];
                    return r.toString = function() {
                        return this.map((function(r) {
                                var t = ""
                                    , n = void 0 !== r[5];
                                return r[4] && (t += "@supports (".concat(r[4], ") {")),
                                r[2] && (t += "@media ".concat(r[2], " {")),
                                n && (t += "@layer".concat(r[5].length > 0 ? " ".concat(r[5]) : "", " {")),
                                    t += e(r),
                                n && (t += "}"),
                                r[2] && (t += "}"),
                                r[4] && (t += "}"),
                                    t
                            }
                        )).join("")
                    }
                        ,
                        r.i = function(e, t, n, o, a) {
                            "string" == typeof e && (e = [[null, e, void 0]]);
                            var i = {};
                            if (n)
                                for (var s = 0; s < this.length; s++) {
                                    var c = this[s][0];
                                    null != c && (i[c] = !0)
                                }
                            for (var l = 0; l < e.length; l++) {
                                var u = [].concat(e[l]);
                                n && i[u[0]] || (void 0 !== a && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")),
                                    u[5] = a),
                                t && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"),
                                    u[2] = t) : u[2] = t),
                                o && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"),
                                    u[4] = o) : u[4] = "".concat(o)),
                                    r.push(u))
                            }
                        }
                        ,
                        r
                }
            }
            ,
            601: e => {
                "use strict";
                e.exports = function(e) {
                    return e[1]
                }
            }
            ,
            7: e => {
                "use strict";
                var r, t = "object" == typeof Reflect ? Reflect : null, n = t && "function" == typeof t.apply ? t.apply : function(e, r, t) {
                        return Function.prototype.apply.call(e, r, t)
                    }
                ;
                r = t && "function" == typeof t.ownKeys ? t.ownKeys : Object.getOwnPropertySymbols ? function(e) {
                        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
                    }
                    : function(e) {
                        return Object.getOwnPropertyNames(e)
                    }
                ;
                var o = Number.isNaN || function(e) {
                        return e != e
                    }
                ;
                function a() {
                    a.init.call(this)
                }
                e.exports = a,
                    e.exports.once = function(e, r) {
                        return new Promise((function(t, n) {
                                function o(t) {
                                    e.removeListener(r, a),
                                        n(t)
                                }
                                function a() {
                                    "function" == typeof e.removeListener && e.removeListener("error", o),
                                        t([].slice.call(arguments))
                                }
                                h(e, r, a, {
                                    once: !0
                                }),
                                "error" !== r && function(e, r, t) {
                                    "function" == typeof e.on && h(e, "error", r, {
                                        once: !0
                                    })
                                }(e, o)
                            }
                        ))
                    }
                    ,
                    a.EventEmitter = a,
                    a.prototype._events = void 0,
                    a.prototype._eventsCount = 0,
                    a.prototype._maxListeners = void 0;
                var i = 10;
                function s(e) {
                    if ("function" != typeof e)
                        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
                }
                function c(e) {
                    return void 0 === e._maxListeners ? a.defaultMaxListeners : e._maxListeners
                }
                function l(e, r, t, n) {
                    var o, a, i, l;
                    if (s(t),
                        void 0 === (a = e._events) ? (a = e._events = Object.create(null),
                            e._eventsCount = 0) : (void 0 !== a.newListener && (e.emit("newListener", r, t.listener ? t.listener : t),
                            a = e._events),
                            i = a[r]),
                    void 0 === i)
                        i = a[r] = t,
                            ++e._eventsCount;
                    else if ("function" == typeof i ? i = a[r] = n ? [t, i] : [i, t] : n ? i.unshift(t) : i.push(t),
                    (o = c(e)) > 0 && i.length > o && !i.warned) {
                        i.warned = !0;
                        var u = new Error("Possible EventEmitter memory leak detected. " + i.length + " " + String(r) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                        u.name = "MaxListenersExceededWarning",
                            u.emitter = e,
                            u.type = r,
                            u.count = i.length,
                            l = u,
                        console && console.warn && console.warn(l)
                    }
                    return e
                }
                function u() {
                    if (!this.fired)
                        return this.target.removeListener(this.type, this.wrapFn),
                            this.fired = !0,
                            0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
                }
                function d(e, r, t) {
                    var n = {
                        fired: !1,
                        wrapFn: void 0,
                        target: e,
                        type: r,
                        listener: t
                    }
                        , o = u.bind(n);
                    return o.listener = t,
                        n.wrapFn = o,
                        o
                }
                function p(e, r, t) {
                    var n = e._events;
                    if (void 0 === n)
                        return [];
                    var o = n[r];
                    return void 0 === o ? [] : "function" == typeof o ? t ? [o.listener || o] : [o] : t ? function(e) {
                        for (var r = new Array(e.length), t = 0; t < r.length; ++t)
                            r[t] = e[t].listener || e[t];
                        return r
                    }(o) : g(o, o.length)
                }
                function f(e) {
                    var r = this._events;
                    if (void 0 !== r) {
                        var t = r[e];
                        if ("function" == typeof t)
                            return 1;
                        if (void 0 !== t)
                            return t.length
                    }
                    return 0
                }
                function g(e, r) {
                    for (var t = new Array(r), n = 0; n < r; ++n)
                        t[n] = e[n];
                    return t
                }
                function h(e, r, t, n) {
                    if ("function" == typeof e.on)
                        n.once ? e.once(r, t) : e.on(r, t);
                    else {
                        if ("function" != typeof e.addEventListener)
                            throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
                        e.addEventListener(r, (function o(a) {
                                n.once && e.removeEventListener(r, o),
                                    t(a)
                            }
                        ))
                    }
                }
                Object.defineProperty(a, "defaultMaxListeners", {
                    enumerable: !0,
                    get: function() {
                        return i
                    },
                    set: function(e) {
                        if ("number" != typeof e || e < 0 || o(e))
                            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                        i = e
                    }
                }),
                    a.init = function() {
                        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null),
                            this._eventsCount = 0),
                            this._maxListeners = this._maxListeners || void 0
                    }
                    ,
                    a.prototype.setMaxListeners = function(e) {
                        if ("number" != typeof e || e < 0 || o(e))
                            throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                        return this._maxListeners = e,
                            this
                    }
                    ,
                    a.prototype.getMaxListeners = function() {
                        return c(this)
                    }
                    ,
                    a.prototype.emit = function(e) {
                        for (var r = [], t = 1; t < arguments.length; t++)
                            r.push(arguments[t]);
                        var o = "error" === e
                            , a = this._events;
                        if (void 0 !== a)
                            o = o && void 0 === a.error;
                        else if (!o)
                            return !1;
                        if (o) {
                            var i;
                            if (r.length > 0 && (i = r[0]),
                            i instanceof Error)
                                throw i;
                            var s = new Error("Unhandled error." + (i ? " (" + i.message + ")" : ""));
                            throw s.context = i,
                                s
                        }
                        var c = a[e];
                        if (void 0 === c)
                            return !1;
                        if ("function" == typeof c)
                            n(c, this, r);
                        else {
                            var l = c.length
                                , u = g(c, l);
                            for (t = 0; t < l; ++t)
                                n(u[t], this, r)
                        }
                        return !0
                    }
                    ,
                    a.prototype.addListener = function(e, r) {
                        return l(this, e, r, !1)
                    }
                    ,
                    a.prototype.on = a.prototype.addListener,
                    a.prototype.prependListener = function(e, r) {
                        return l(this, e, r, !0)
                    }
                    ,
                    a.prototype.once = function(e, r) {
                        return s(r),
                            this.on(e, d(this, e, r)),
                            this
                    }
                    ,
                    a.prototype.prependOnceListener = function(e, r) {
                        return s(r),
                            this.prependListener(e, d(this, e, r)),
                            this
                    }
                    ,
                    a.prototype.removeListener = function(e, r) {
                        var t, n, o, a, i;
                        if (s(r),
                        void 0 === (n = this._events))
                            return this;
                        if (void 0 === (t = n[e]))
                            return this;
                        if (t === r || t.listener === r)
                            0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[e],
                            n.removeListener && this.emit("removeListener", e, t.listener || r));
                        else if ("function" != typeof t) {
                            for (o = -1,
                                     a = t.length - 1; a >= 0; a--)
                                if (t[a] === r || t[a].listener === r) {
                                    i = t[a].listener,
                                        o = a;
                                    break
                                }
                            if (o < 0)
                                return this;
                            0 === o ? t.shift() : function(e, r) {
                                for (; r + 1 < e.length; r++)
                                    e[r] = e[r + 1];
                                e.pop()
                            }(t, o),
                            1 === t.length && (n[e] = t[0]),
                            void 0 !== n.removeListener && this.emit("removeListener", e, i || r)
                        }
                        return this
                    }
                    ,
                    a.prototype.off = a.prototype.removeListener,
                    a.prototype.removeAllListeners = function(e) {
                        var r, t, n;
                        if (void 0 === (t = this._events))
                            return this;
                        if (void 0 === t.removeListener)
                            return 0 === arguments.length ? (this._events = Object.create(null),
                                this._eventsCount = 0) : void 0 !== t[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete t[e]),
                                this;
                        if (0 === arguments.length) {
                            var o, a = Object.keys(t);
                            for (n = 0; n < a.length; ++n)
                                "removeListener" !== (o = a[n]) && this.removeAllListeners(o);
                            return this.removeAllListeners("removeListener"),
                                this._events = Object.create(null),
                                this._eventsCount = 0,
                                this
                        }
                        if ("function" == typeof (r = t[e]))
                            this.removeListener(e, r);
                        else if (void 0 !== r)
                            for (n = r.length - 1; n >= 0; n--)
                                this.removeListener(e, r[n]);
                        return this
                    }
                    ,
                    a.prototype.listeners = function(e) {
                        return p(this, e, !0)
                    }
                    ,
                    a.prototype.rawListeners = function(e) {
                        return p(this, e, !1)
                    }
                    ,
                    a.listenerCount = function(e, r) {
                        return "function" == typeof e.listenerCount ? e.listenerCount(r) : f.call(e, r)
                    }
                    ,
                    a.prototype.listenerCount = f,
                    a.prototype.eventNames = function() {
                        return this._eventsCount > 0 ? r(this._events) : []
                    }
            }
            ,
            376: function(e, r, t) {
                "use strict";
                var n = this && this.__assign || function() {
                        return n = Object.assign || function(e) {
                            for (var r, t = 1, n = arguments.length; t < n; t++)
                                for (var o in r = arguments[t])
                                    Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
                            return e
                        }
                            ,
                            n.apply(this, arguments)
                    }
                ;
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var o = t(340)
                    , a = t(762)
                    , i = t(826)
                    , s = n(n({}, o.namedReferences), {
                    all: o.namedReferences.html5
                });
                function c(e, r, t) {
                    r.lastIndex = 0;
                    var n, o = r.exec(e);
                    if (o) {
                        n = "";
                        var a = 0;
                        do {
                            a !== o.index && (n += e.substring(a, o.index));
                            var i = o[0];
                            n += t(i),
                                a = o.index + i.length
                        } while (o = r.exec(e));
                        a !== e.length && (n += e.substring(a))
                    } else
                        n = e;
                    return n
                }
                var l = {
                    specialChars: /[<>'"&]/g,
                    nonAscii: /[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
                    nonAsciiPrintable: /[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
                    nonAsciiPrintableOnly: /[\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
                    extensive: /[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g
                }
                    , u = {
                    mode: "specialChars",
                    level: "all",
                    numeric: "decimal"
                };
                r.encode = function(e, r) {
                    var t = void 0 === r ? u : r
                        , n = t.mode
                        , o = void 0 === n ? "specialChars" : n
                        , a = t.numeric
                        , d = void 0 === a ? "decimal" : a
                        , p = t.level;
                    if (!e)
                        return "";
                    var f = l[o]
                        , g = s[void 0 === p ? "all" : p].characters
                        , h = "hexadecimal" === d;
                    return c(e, f, (function(e) {
                            var r = g[e];
                            if (!r) {
                                var t = e.length > 1 ? i.getCodePoint(e, 0) : e.charCodeAt(0);
                                r = (h ? "&#x" + t.toString(16) : "&#" + t) + ";"
                            }
                            return r
                        }
                    ))
                }
                ;
                var d = {
                    scope: "body",
                    level: "all"
                }
                    , p = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g
                    , f = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g
                    , g = {
                    xml: {
                        strict: p,
                        attribute: f,
                        body: o.bodyRegExps.xml
                    },
                    html4: {
                        strict: p,
                        attribute: f,
                        body: o.bodyRegExps.html4
                    },
                    html5: {
                        strict: p,
                        attribute: f,
                        body: o.bodyRegExps.html5
                    }
                }
                    , h = n(n({}, g), {
                    all: g.html5
                })
                    , m = String.fromCharCode
                    , y = m(65533)
                    , b = {
                    level: "all"
                };
                function v(e, r, t, n) {
                    var o = e
                        , s = e[e.length - 1];
                    if (t && "=" === s)
                        o = e;
                    else if (n && ";" !== s)
                        o = e;
                    else {
                        var c = r[e];
                        if (c)
                            o = c;
                        else if ("&" === e[0] && "#" === e[1]) {
                            var l = e[2]
                                , u = "x" == l || "X" == l ? parseInt(e.substr(3), 16) : parseInt(e.substr(2));
                            o = u >= 1114111 ? y : u > 65535 ? i.fromCodePoint(u) : m(a.numericUnicodeMap[u] || u)
                        }
                    }
                    return o
                }
                r.decodeEntity = function(e, r) {
                    var t = (void 0 === r ? b : r).level;
                    return e ? v(e, s[void 0 === t ? "all" : t].entities, !1, !1) : ""
                }
                    ,
                    r.decode = function(e, r) {
                        var t = void 0 === r ? d : r
                            , n = t.level
                            , o = void 0 === n ? "all" : n
                            , a = t.scope
                            , i = void 0 === a ? "xml" === o ? "strict" : "body" : a;
                        if (!e)
                            return "";
                        var l = h[o][i]
                            , u = s[o].entities
                            , p = "attribute" === i
                            , f = "strict" === i;
                        return c(e, l, (function(e) {
                                return v(e, u, p, f)
                            }
                        ))
                    }
            },
            340: (e, r) => {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }),
                    r.bodyRegExps = {
                        xml: /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
                        html4: /&notin;|&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
                        html5: /&centerdot;|&copysr;|&divideontimes;|&gtcc;|&gtcir;|&gtdot;|&gtlPar;|&gtquest;|&gtrapprox;|&gtrarr;|&gtrdot;|&gtreqless;|&gtreqqless;|&gtrless;|&gtrsim;|&ltcc;|&ltcir;|&ltdot;|&lthree;|&ltimes;|&ltlarr;|&ltquest;|&ltrPar;|&ltri;|&ltrie;|&ltrif;|&notin;|&notinE;|&notindot;|&notinva;|&notinvb;|&notinvc;|&notni;|&notniva;|&notnivb;|&notnivc;|&parallel;|&timesb;|&timesbar;|&timesd;|&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g
                    },
                    r.namedReferences = {
                        xml: {
                            entities: {
                                "&lt;": "<",
                                "&gt;": ">",
                                "&quot;": '"',
                                "&apos;": "'",
                                "&amp;": "&"
                            },
                            characters: {
                                "<": "&lt;",
                                ">": "&gt;",
                                '"': "&quot;",
                                "'": "&apos;",
                                "&": "&amp;"
                            }
                        },
                        html4: {
                            entities: {
                                "&apos;": "'",
                                "&nbsp": " ",
                                "&nbsp;": " ",
                                "&iexcl": "¡",
                                "&iexcl;": "¡",
                                "&cent": "¢",
                                "&cent;": "¢",
                                "&pound": "£",
                                "&pound;": "£",
                                "&curren": "¤",
                                "&curren;": "¤",
                                "&yen": "¥",
                                "&yen;": "¥",
                                "&brvbar": "¦",
                                "&brvbar;": "¦",
                                "&sect": "§",
                                "&sect;": "§",
                                "&uml": "¨",
                                "&uml;": "¨",
                                "&copy": "©",
                                "&copy;": "©",
                                "&ordf": "ª",
                                "&ordf;": "ª",
                                "&laquo": "«",
                                "&laquo;": "«",
                                "&not": "¬",
                                "&not;": "¬",
                                "&shy": "­",
                                "&shy;": "­",
                                "&reg": "®",
                                "&reg;": "®",
                                "&macr": "¯",
                                "&macr;": "¯",
                                "&deg": "°",
                                "&deg;": "°",
                                "&plusmn": "±",
                                "&plusmn;": "±",
                                "&sup2": "²",
                                "&sup2;": "²",
                                "&sup3": "³",
                                "&sup3;": "³",
                                "&acute": "´",
                                "&acute;": "´",
                                "&micro": "µ",
                                "&micro;": "µ",
                                "&para": "¶",
                                "&para;": "¶",
                                "&middot": "·",
                                "&middot;": "·",
                                "&cedil": "¸",
                                "&cedil;": "¸",
                                "&sup1": "¹",
                                "&sup1;": "¹",
                                "&ordm": "º",
                                "&ordm;": "º",
                                "&raquo": "»",
                                "&raquo;": "»",
                                "&frac14": "¼",
                                "&frac14;": "¼",
                                "&frac12": "½",
                                "&frac12;": "½",
                                "&frac34": "¾",
                                "&frac34;": "¾",
                                "&iquest": "¿",
                                "&iquest;": "¿",
                                "&Agrave": "À",
                                "&Agrave;": "À",
                                "&Aacute": "Á",
                                "&Aacute;": "Á",
                                "&Acirc": "Â",
                                "&Acirc;": "Â",
                                "&Atilde": "Ã",
                                "&Atilde;": "Ã",
                                "&Auml": "Ä",
                                "&Auml;": "Ä",
                                "&Aring": "Å",
                                "&Aring;": "Å",
                                "&AElig": "Æ",
                                "&AElig;": "Æ",
                                "&Ccedil": "Ç",
                                "&Ccedil;": "Ç",
                                "&Egrave": "È",
                                "&Egrave;": "È",
                                "&Eacute": "É",
                                "&Eacute;": "É",
                                "&Ecirc": "Ê",
                                "&Ecirc;": "Ê",
                                "&Euml": "Ë",
                                "&Euml;": "Ë",
                                "&Igrave": "Ì",
                                "&Igrave;": "Ì",
                                "&Iacute": "Í",
                                "&Iacute;": "Í",
                                "&Icirc": "Î",
                                "&Icirc;": "Î",
                                "&Iuml": "Ï",
                                "&Iuml;": "Ï",
                                "&ETH": "Ð",
                                "&ETH;": "Ð",
                                "&Ntilde": "Ñ",
                                "&Ntilde;": "Ñ",
                                "&Ograve": "Ò",
                                "&Ograve;": "Ò",
                                "&Oacute": "Ó",
                                "&Oacute;": "Ó",
                                "&Ocirc": "Ô",
                                "&Ocirc;": "Ô",
                                "&Otilde": "Õ",
                                "&Otilde;": "Õ",
                                "&Ouml": "Ö",
                                "&Ouml;": "Ö",
                                "&times": "×",
                                "&times;": "×",
                                "&Oslash": "Ø",
                                "&Oslash;": "Ø",
                                "&Ugrave": "Ù",
                                "&Ugrave;": "Ù",
                                "&Uacute": "Ú",
                                "&Uacute;": "Ú",
                                "&Ucirc": "Û",
                                "&Ucirc;": "Û",
                                "&Uuml": "Ü",
                                "&Uuml;": "Ü",
                                "&Yacute": "Ý",
                                "&Yacute;": "Ý",
                                "&THORN": "Þ",
                                "&THORN;": "Þ",
                                "&szlig": "ß",
                                "&szlig;": "ß",
                                "&agrave": "à",
                                "&agrave;": "à",
                                "&aacute": "á",
                                "&aacute;": "á",
                                "&acirc": "â",
                                "&acirc;": "â",
                                "&atilde": "ã",
                                "&atilde;": "ã",
                                "&auml": "ä",
                                "&auml;": "ä",
                                "&aring": "å",
                                "&aring;": "å",
                                "&aelig": "æ",
                                "&aelig;": "æ",
                                "&ccedil": "ç",
                                "&ccedil;": "ç",
                                "&egrave": "è",
                                "&egrave;": "è",
                                "&eacute": "é",
                                "&eacute;": "é",
                                "&ecirc": "ê",
                                "&ecirc;": "ê",
                                "&euml": "ë",
                                "&euml;": "ë",
                                "&igrave": "ì",
                                "&igrave;": "ì",
                                "&iacute": "í",
                                "&iacute;": "í",
                                "&icirc": "î",
                                "&icirc;": "î",
                                "&iuml": "ï",
                                "&iuml;": "ï",
                                "&eth": "ð",
                                "&eth;": "ð",
                                "&ntilde": "ñ",
                                "&ntilde;": "ñ",
                                "&ograve": "ò",
                                "&ograve;": "ò",
                                "&oacute": "ó",
                                "&oacute;": "ó",
                                "&ocirc": "ô",
                                "&ocirc;": "ô",
                                "&otilde": "õ",
                                "&otilde;": "õ",
                                "&ouml": "ö",
                                "&ouml;": "ö",
                                "&divide": "÷",
                                "&divide;": "÷",
                                "&oslash": "ø",
                                "&oslash;": "ø",
                                "&ugrave": "ù",
                                "&ugrave;": "ù",
                                "&uacute": "ú",
                                "&uacute;": "ú",
                                "&ucirc": "û",
                                "&ucirc;": "û",
                                "&uuml": "ü",
                                "&uuml;": "ü",
                                "&yacute": "ý",
                                "&yacute;": "ý",
                                "&thorn": "þ",
                                "&thorn;": "þ",
                                "&yuml": "ÿ",
                                "&yuml;": "ÿ",
                                "&quot": '"',
                                "&quot;": '"',
                                "&amp": "&",
                                "&amp;": "&",
                                "&lt": "<",
                                "&lt;": "<",
                                "&gt": ">",
                                "&gt;": ">",
                                "&OElig;": "Œ",
                                "&oelig;": "œ",
                                "&Scaron;": "Š",
                                "&scaron;": "š",
                                "&Yuml;": "Ÿ",
                                "&circ;": "ˆ",
                                "&tilde;": "˜",
                                "&ensp;": " ",
                                "&emsp;": " ",
                                "&thinsp;": " ",
                                "&zwnj;": "‌",
                                "&zwj;": "‍",
                                "&lrm;": "‎",
                                "&rlm;": "‏",
                                "&ndash;": "–",
                                "&mdash;": "—",
                                "&lsquo;": "‘",
                                "&rsquo;": "’",
                                "&sbquo;": "‚",
                                "&ldquo;": "“",
                                "&rdquo;": "”",
                                "&bdquo;": "„",
                                "&dagger;": "†",
                                "&Dagger;": "‡",
                                "&permil;": "‰",
                                "&lsaquo;": "‹",
                                "&rsaquo;": "›",
                                "&euro;": "€",
                                "&fnof;": "ƒ",
                                "&Alpha;": "Α",
                                "&Beta;": "Β",
                                "&Gamma;": "Γ",
                                "&Delta;": "Δ",
                                "&Epsilon;": "Ε",
                                "&Zeta;": "Ζ",
                                "&Eta;": "Η",
                                "&Theta;": "Θ",
                                "&Iota;": "Ι",
                                "&Kappa;": "Κ",
                                "&Lambda;": "Λ",
                                "&Mu;": "Μ",
                                "&Nu;": "Ν",
                                "&Xi;": "Ξ",
                                "&Omicron;": "Ο",
                                "&Pi;": "Π",
                                "&Rho;": "Ρ",
                                "&Sigma;": "Σ",
                                "&Tau;": "Τ",
                                "&Upsilon;": "Υ",
                                "&Phi;": "Φ",
                                "&Chi;": "Χ",
                                "&Psi;": "Ψ",
                                "&Omega;": "Ω",
                                "&alpha;": "α",
                                "&beta;": "β",
                                "&gamma;": "γ",
                                "&delta;": "δ",
                                "&epsilon;": "ε",
                                "&zeta;": "ζ",
                                "&eta;": "η",
                                "&theta;": "θ",
                                "&iota;": "ι",
                                "&kappa;": "κ",
                                "&lambda;": "λ",
                                "&mu;": "μ",
                                "&nu;": "ν",
                                "&xi;": "ξ",
                                "&omicron;": "ο",
                                "&pi;": "π",
                                "&rho;": "ρ",
                                "&sigmaf;": "ς",
                                "&sigma;": "σ",
                                "&tau;": "τ",
                                "&upsilon;": "υ",
                                "&phi;": "φ",
                                "&chi;": "χ",
                                "&psi;": "ψ",
                                "&omega;": "ω",
                                "&thetasym;": "ϑ",
                                "&upsih;": "ϒ",
                                "&piv;": "ϖ",
                                "&bull;": "•",
                                "&hellip;": "…",
                                "&prime;": "′",
                                "&Prime;": "″",
                                "&oline;": "‾",
                                "&frasl;": "⁄",
                                "&weierp;": "℘",
                                "&image;": "ℑ",
                                "&real;": "ℜ",
                                "&trade;": "™",
                                "&alefsym;": "ℵ",
                                "&larr;": "←",
                                "&uarr;": "↑",
                                "&rarr;": "→",
                                "&darr;": "↓",
                                "&harr;": "↔",
                                "&crarr;": "↵",
                                "&lArr;": "⇐",
                                "&uArr;": "⇑",
                                "&rArr;": "⇒",
                                "&dArr;": "⇓",
                                "&hArr;": "⇔",
                                "&forall;": "∀",
                                "&part;": "∂",
                                "&exist;": "∃",
                                "&empty;": "∅",
                                "&nabla;": "∇",
                                "&isin;": "∈",
                                "&notin;": "∉",
                                "&ni;": "∋",
                                "&prod;": "∏",
                                "&sum;": "∑",
                                "&minus;": "−",
                                "&lowast;": "∗",
                                "&radic;": "√",
                                "&prop;": "∝",
                                "&infin;": "∞",
                                "&ang;": "∠",
                                "&and;": "∧",
                                "&or;": "∨",
                                "&cap;": "∩",
                                "&cup;": "∪",
                                "&int;": "∫",
                                "&there4;": "∴",
                                "&sim;": "∼",
                                "&cong;": "≅",
                                "&asymp;": "≈",
                                "&ne;": "≠",
                                "&equiv;": "≡",
                                "&le;": "≤",
                                "&ge;": "≥",
                                "&sub;": "⊂",
                                "&sup;": "⊃",
                                "&nsub;": "⊄",
                                "&sube;": "⊆",
                                "&supe;": "⊇",
                                "&oplus;": "⊕",
                                "&otimes;": "⊗",
                                "&perp;": "⊥",
                                "&sdot;": "⋅",
                                "&lceil;": "⌈",
                                "&rceil;": "⌉",
                                "&lfloor;": "⌊",
                                "&rfloor;": "⌋",
                                "&lang;": "〈",
                                "&rang;": "〉",
                                "&loz;": "◊",
                                "&spades;": "♠",
                                "&clubs;": "♣",
                                "&hearts;": "♥",
                                "&diams;": "♦"
                            },
                            characters: {
                                "'": "&apos;",
                                " ": "&nbsp;",
                                "¡": "&iexcl;",
                                "¢": "&cent;",
                                "£": "&pound;",
                                "¤": "&curren;",
                                "¥": "&yen;",
                                "¦": "&brvbar;",
                                "§": "&sect;",
                                "¨": "&uml;",
                                "©": "&copy;",
                                ª: "&ordf;",
                                "«": "&laquo;",
                                "¬": "&not;",
                                "­": "&shy;",
                                "®": "&reg;",
                                "¯": "&macr;",
                                "°": "&deg;",
                                "±": "&plusmn;",
                                "²": "&sup2;",
                                "³": "&sup3;",
                                "´": "&acute;",
                                µ: "&micro;",
                                "¶": "&para;",
                                "·": "&middot;",
                                "¸": "&cedil;",
                                "¹": "&sup1;",
                                º: "&ordm;",
                                "»": "&raquo;",
                                "¼": "&frac14;",
                                "½": "&frac12;",
                                "¾": "&frac34;",
                                "¿": "&iquest;",
                                À: "&Agrave;",
                                Á: "&Aacute;",
                                Â: "&Acirc;",
                                Ã: "&Atilde;",
                                Ä: "&Auml;",
                                Å: "&Aring;",
                                Æ: "&AElig;",
                                Ç: "&Ccedil;",
                                È: "&Egrave;",
                                É: "&Eacute;",
                                Ê: "&Ecirc;",
                                Ë: "&Euml;",
                                Ì: "&Igrave;",
                                Í: "&Iacute;",
                                Î: "&Icirc;",
                                Ï: "&Iuml;",
                                Ð: "&ETH;",
                                Ñ: "&Ntilde;",
                                Ò: "&Ograve;",
                                Ó: "&Oacute;",
                                Ô: "&Ocirc;",
                                Õ: "&Otilde;",
                                Ö: "&Ouml;",
                                "×": "&times;",
                                Ø: "&Oslash;",
                                Ù: "&Ugrave;",
                                Ú: "&Uacute;",
                                Û: "&Ucirc;",
                                Ü: "&Uuml;",
                                Ý: "&Yacute;",
                                Þ: "&THORN;",
                                ß: "&szlig;",
                                à: "&agrave;",
                                á: "&aacute;",
                                â: "&acirc;",
                                ã: "&atilde;",
                                ä: "&auml;",
                                å: "&aring;",
                                æ: "&aelig;",
                                ç: "&ccedil;",
                                è: "&egrave;",
                                é: "&eacute;",
                                ê: "&ecirc;",
                                ë: "&euml;",
                                ì: "&igrave;",
                                í: "&iacute;",
                                î: "&icirc;",
                                ï: "&iuml;",
                                ð: "&eth;",
                                ñ: "&ntilde;",
                                ò: "&ograve;",
                                ó: "&oacute;",
                                ô: "&ocirc;",
                                õ: "&otilde;",
                                ö: "&ouml;",
                                "÷": "&divide;",
                                ø: "&oslash;",
                                ù: "&ugrave;",
                                ú: "&uacute;",
                                û: "&ucirc;",
                                ü: "&uuml;",
                                ý: "&yacute;",
                                þ: "&thorn;",
                                ÿ: "&yuml;",
                                '"': "&quot;",
                                "&": "&amp;",
                                "<": "&lt;",
                                ">": "&gt;",
                                Œ: "&OElig;",
                                œ: "&oelig;",
                                Š: "&Scaron;",
                                š: "&scaron;",
                                Ÿ: "&Yuml;",
                                ˆ: "&circ;",
                                "˜": "&tilde;",
                                " ": "&ensp;",
                                " ": "&emsp;",
                                " ": "&thinsp;",
                                "‌": "&zwnj;",
                                "‍": "&zwj;",
                                "‎": "&lrm;",
                                "‏": "&rlm;",
                                "–": "&ndash;",
                                "—": "&mdash;",
                                "‘": "&lsquo;",
                                "’": "&rsquo;",
                                "‚": "&sbquo;",
                                "“": "&ldquo;",
                                "”": "&rdquo;",
                                "„": "&bdquo;",
                                "†": "&dagger;",
                                "‡": "&Dagger;",
                                "‰": "&permil;",
                                "‹": "&lsaquo;",
                                "›": "&rsaquo;",
                                "€": "&euro;",
                                ƒ: "&fnof;",
                                Α: "&Alpha;",
                                Β: "&Beta;",
                                Γ: "&Gamma;",
                                Δ: "&Delta;",
                                Ε: "&Epsilon;",
                                Ζ: "&Zeta;",
                                Η: "&Eta;",
                                Θ: "&Theta;",
                                Ι: "&Iota;",
                                Κ: "&Kappa;",
                                Λ: "&Lambda;",
                                Μ: "&Mu;",
                                Ν: "&Nu;",
                                Ξ: "&Xi;",
                                Ο: "&Omicron;",
                                Π: "&Pi;",
                                Ρ: "&Rho;",
                                Σ: "&Sigma;",
                                Τ: "&Tau;",
                                Υ: "&Upsilon;",
                                Φ: "&Phi;",
                                Χ: "&Chi;",
                                Ψ: "&Psi;",
                                Ω: "&Omega;",
                                α: "&alpha;",
                                β: "&beta;",
                                γ: "&gamma;",
                                δ: "&delta;",
                                ε: "&epsilon;",
                                ζ: "&zeta;",
                                η: "&eta;",
                                θ: "&theta;",
                                ι: "&iota;",
                                κ: "&kappa;",
                                λ: "&lambda;",
                                μ: "&mu;",
                                ν: "&nu;",
                                ξ: "&xi;",
                                ο: "&omicron;",
                                π: "&pi;",
                                ρ: "&rho;",
                                ς: "&sigmaf;",
                                σ: "&sigma;",
                                τ: "&tau;",
                                υ: "&upsilon;",
                                φ: "&phi;",
                                χ: "&chi;",
                                ψ: "&psi;",
                                ω: "&omega;",
                                ϑ: "&thetasym;",
                                ϒ: "&upsih;",
                                ϖ: "&piv;",
                                "•": "&bull;",
                                "…": "&hellip;",
                                "′": "&prime;",
                                "″": "&Prime;",
                                "‾": "&oline;",
                                "⁄": "&frasl;",
                        ℘: "&weierp;",
                    ℑ: "&image;",
                    ℜ: "&real;",
                    "™": "&trade;",
                    ℵ: "&alefsym;",
                    "←": "&larr;",
                    "↑": "&uarr;",
                    "→": "&rarr;",
                    "↓": "&darr;",
                    "↔": "&harr;",
                    "↵": "&crarr;",
                    "⇐": "&lArr;",
                    "⇑": "&uArr;",
                    "⇒": "&rArr;",
                    "⇓": "&dArr;",
                    "⇔": "&hArr;",
                    "∀": "&forall;",
                    "∂": "&part;",
                    "∃": "&exist;",
                    "∅": "&empty;",
                    "∇": "&nabla;",
                    "∈": "&isin;",
                    "∉": "&notin;",
                    "∋": "&ni;",
                    "∏": "&prod;",
                    "∑": "&sum;",
                    "−": "&minus;",
                    "∗": "&lowast;",
                    "√": "&radic;",
                    "∝": "&prop;",
                    "∞": "&infin;",
                    "∠": "&ang;",
                    "∧": "&and;",
                    "∨": "&or;",
                    "∩": "&cap;",
                    "∪": "&cup;",
                    "∫": "&int;",
                    "∴": "&there4;",
                    "∼": "&sim;",
                    "≅": "&cong;",
                    "≈": "&asymp;",
                    "≠": "&ne;",
                    "≡": "&equiv;",
                    "≤": "&le;",
                    "≥": "&ge;",
                    "⊂": "&sub;",
                    "⊃": "&sup;",
                    "⊄": "&nsub;",
                    "⊆": "&sube;",
                    "⊇": "&supe;",
                    "⊕": "&oplus;",
                    "⊗": "&otimes;",
                    "⊥": "&perp;",
                    "⋅": "&sdot;",
                    "⌈": "&lceil;",
                    "⌉": "&rceil;",
                    "⌊": "&lfloor;",
                    "⌋": "&rfloor;",
                    "〈": "&lang;",
                    "〉": "&rang;",
                    "◊": "&loz;",
                    "♠": "&spades;",
                    "♣": "&clubs;",
                    "♥": "&hearts;",
                    "♦": "&diams;"
            }
            },
                html5: {
                    entities: {
                        "&AElig": "Æ",
                            "&AElig;": "Æ",
                            "&AMP": "&",
                            "&AMP;": "&",
                            "&Aacute": "Á",
                            "&Aacute;": "Á",
                            "&Abreve;": "Ă",
                            "&Acirc": "Â",
                            "&Acirc;": "Â",
                            "&Acy;": "А",
                            "&Afr;": "𝔄",
                            "&Agrave": "À",
                            "&Agrave;": "À",
                            "&Alpha;": "Α",
                            "&Amacr;": "Ā",
                            "&And;": "⩓",
                            "&Aogon;": "Ą",
                            "&Aopf;": "𝔸",
                            "&ApplyFunction;": "⁡",
                            "&Aring": "Å",
                            "&Aring;": "Å",
                            "&Ascr;": "𝒜",
                            "&Assign;": "≔",
                            "&Atilde": "Ã",
                            "&Atilde;": "Ã",
                            "&Auml": "Ä",
                            "&Auml;": "Ä",
                            "&Backslash;": "∖",
                            "&Barv;": "⫧",
                            "&Barwed;": "⌆",
                            "&Bcy;": "Б",
                            "&Because;": "∵",
                            "&Bernoullis;": "ℬ",
                            "&Beta;": "Β",
                            "&Bfr;": "𝔅",
                            "&Bopf;": "𝔹",
                            "&Breve;": "˘",
                            "&Bscr;": "ℬ",
                            "&Bumpeq;": "≎",
                            "&CHcy;": "Ч",
                            "&COPY": "©",
                            "&COPY;": "©",
                            "&Cacute;": "Ć",
                            "&Cap;": "⋒",
                            "&CapitalDifferentialD;": "ⅅ",
                            "&Cayleys;": "ℭ",
                            "&Ccaron;": "Č",
                            "&Ccedil": "Ç",
                            "&Ccedil;": "Ç",
                            "&Ccirc;": "Ĉ",
                            "&Cconint;": "∰",
                            "&Cdot;": "Ċ",
                            "&Cedilla;": "¸",
                            "&CenterDot;": "·",
                            "&Cfr;": "ℭ",
                            "&Chi;": "Χ",
                            "&CircleDot;": "⊙",
                            "&CircleMinus;": "⊖",
                            "&CirclePlus;": "⊕",
                            "&CircleTimes;": "⊗",
                            "&ClockwiseContourIntegral;": "∲",
                            "&CloseCurlyDoubleQuote;": "”",
                            "&CloseCurlyQuote;": "’",
                            "&Colon;": "∷",
                            "&Colone;": "⩴",
                            "&Congruent;": "≡",
                            "&Conint;": "∯",
                            "&ContourIntegral;": "∮",
                            "&Copf;": "ℂ",
                            "&Coproduct;": "∐",
                            "&CounterClockwiseContourIntegral;": "∳",
                            "&Cross;": "⨯",
                            "&Cscr;": "𝒞",
                            "&Cup;": "⋓",
                            "&CupCap;": "≍",
                            "&DD;": "ⅅ",
                            "&DDotrahd;": "⤑",
                            "&DJcy;": "Ђ",
                            "&DScy;": "Ѕ",
                            "&DZcy;": "Џ",
                            "&Dagger;": "‡",
                            "&Darr;": "↡",
                            "&Dashv;": "⫤",
                            "&Dcaron;": "Ď",
                            "&Dcy;": "Д",
                            "&Del;": "∇",
                            "&Delta;": "Δ",
                            "&Dfr;": "𝔇",
                            "&DiacriticalAcute;": "´",
                            "&DiacriticalDot;": "˙",
                            "&DiacriticalDoubleAcute;": "˝",
                            "&DiacriticalGrave;": "`",
                            "&DiacriticalTilde;": "˜",
                            "&Diamond;": "⋄",
                            "&DifferentialD;": "ⅆ",
                            "&Dopf;": "𝔻",
                            "&Dot;": "¨",
                            "&DotDot;": "⃜",
                            "&DotEqual;": "≐",
                            "&DoubleContourIntegral;": "∯",
                            "&DoubleDot;": "¨",
                            "&DoubleDownArrow;": "⇓",
                            "&DoubleLeftArrow;": "⇐",
                            "&DoubleLeftRightArrow;": "⇔",
                            "&DoubleLeftTee;": "⫤",
                            "&DoubleLongLeftArrow;": "⟸",
                            "&DoubleLongLeftRightArrow;": "⟺",
                            "&DoubleLongRightArrow;": "⟹",
                            "&DoubleRightArrow;": "⇒",
                            "&DoubleRightTee;": "⊨",
                            "&DoubleUpArrow;": "⇑",
                            "&DoubleUpDownArrow;": "⇕",
                            "&DoubleVerticalBar;": "∥",
                            "&DownArrow;": "↓",
                            "&DownArrowBar;": "⤓",
                            "&DownArrowUpArrow;": "⇵",
                            "&DownBreve;": "̑",
                            "&DownLeftRightVector;": "⥐",
                            "&DownLeftTeeVector;": "⥞",
                            "&DownLeftVector;": "↽",
                            "&DownLeftVectorBar;": "⥖",
                            "&DownRightTeeVector;": "⥟",
                            "&DownRightVector;": "⇁",
                            "&DownRightVectorBar;": "⥗",
                            "&DownTee;": "⊤",
                            "&DownTeeArrow;": "↧",
                            "&Downarrow;": "⇓",
                            "&Dscr;": "𝒟",
                            "&Dstrok;": "Đ",
                            "&ENG;": "Ŋ",
                            "&ETH": "Ð",
                            "&ETH;": "Ð",
                            "&Eacute": "É",
                            "&Eacute;": "É",
                            "&Ecaron;": "Ě",
                            "&Ecirc": "Ê",
                            "&Ecirc;": "Ê",
                            "&Ecy;": "Э",
                            "&Edot;": "Ė",
                            "&Efr;": "𝔈",
                            "&Egrave": "È",
                            "&Egrave;": "È",
                            "&Element;": "∈",
                            "&Emacr;": "Ē",
                            "&EmptySmallSquare;": "◻",
                            "&EmptyVerySmallSquare;": "▫",
                            "&Eogon;": "Ę",
                            "&Eopf;": "𝔼",
                            "&Epsilon;": "Ε",
                            "&Equal;": "⩵",
                            "&EqualTilde;": "≂",
                            "&Equilibrium;": "⇌",
                            "&Escr;": "ℰ",
                            "&Esim;": "⩳",
                            "&Eta;": "Η",
                            "&Euml": "Ë",
                            "&Euml;": "Ë",
                            "&Exists;": "∃",
                            "&ExponentialE;": "ⅇ",
                            "&Fcy;": "Ф",
                            "&Ffr;": "𝔉",
                            "&FilledSmallSquare;": "◼",
                            "&FilledVerySmallSquare;": "▪",
                            "&Fopf;": "𝔽",
                            "&ForAll;": "∀",
                            "&Fouriertrf;": "ℱ",
                            "&Fscr;": "ℱ",
                            "&GJcy;": "Ѓ",
                            "&GT": ">",
                            "&GT;": ">",
                            "&Gamma;": "Γ",
                            "&Gammad;": "Ϝ",
                            "&Gbreve;": "Ğ",
                            "&Gcedil;": "Ģ",
                            "&Gcirc;": "Ĝ",
                            "&Gcy;": "Г",
                            "&Gdot;": "Ġ",
                            "&Gfr;": "𝔊",
                            "&Gg;": "⋙",
                            "&Gopf;": "𝔾",
                            "&GreaterEqual;": "≥",
                            "&GreaterEqualLess;": "⋛",
                            "&GreaterFullEqual;": "≧",
                            "&GreaterGreater;": "⪢",
                            "&GreaterLess;": "≷",
                            "&GreaterSlantEqual;": "⩾",
                            "&GreaterTilde;": "≳",
                            "&Gscr;": "𝒢",
                            "&Gt;": "≫",
                            "&HARDcy;": "Ъ",
                            "&Hacek;": "ˇ",
                            "&Hat;": "^",
                            "&Hcirc;": "Ĥ",
                            "&Hfr;": "ℌ",
                            "&HilbertSpace;": "ℋ",
                            "&Hopf;": "ℍ",
                            "&HorizontalLine;": "─",
                            "&Hscr;": "ℋ",
                            "&Hstrok;": "Ħ",
                            "&HumpDownHump;": "≎",
                            "&HumpEqual;": "≏",
                            "&IEcy;": "Е",
                            "&IJlig;": "Ĳ",
                            "&IOcy;": "Ё",
                            "&Iacute": "Í",
                            "&Iacute;": "Í",
                            "&Icirc": "Î",
                            "&Icirc;": "Î",
                            "&Icy;": "И",
                            "&Idot;": "İ",
                            "&Ifr;": "ℑ",
                            "&Igrave": "Ì",
                            "&Igrave;": "Ì",
                            "&Im;": "ℑ",
                            "&Imacr;": "Ī",
                            "&ImaginaryI;": "ⅈ",
                            "&Implies;": "⇒",
                            "&Int;": "∬",
                            "&Integral;": "∫",
                            "&Intersection;": "⋂",
                            "&InvisibleComma;": "⁣",
                            "&InvisibleTimes;": "⁢",
                            "&Iogon;": "Į",
                            "&Iopf;": "𝕀",
                            "&Iota;": "Ι",
                            "&Iscr;": "ℐ",
                            "&Itilde;": "Ĩ",
                            "&Iukcy;": "І",
                            "&Iuml": "Ï",
                            "&Iuml;": "Ï",
                            "&Jcirc;": "Ĵ",
                            "&Jcy;": "Й",
                            "&Jfr;": "𝔍",
                            "&Jopf;": "𝕁",
                            "&Jscr;": "𝒥",
                            "&Jsercy;": "Ј",
                            "&Jukcy;": "Є",
                            "&KHcy;": "Х",
                            "&KJcy;": "Ќ",
                            "&Kappa;": "Κ",
                            "&Kcedil;": "Ķ",
                            "&Kcy;": "К",
                            "&Kfr;": "𝔎",
                            "&Kopf;": "𝕂",
                            "&Kscr;": "𝒦",
                            "&LJcy;": "Љ",
                            "&LT": "<",
                            "&LT;": "<",
                            "&Lacute;": "Ĺ",
                            "&Lambda;": "Λ",
                            "&Lang;": "⟪",
                            "&Laplacetrf;": "ℒ",
                            "&Larr;": "↞",
                            "&Lcaron;": "Ľ",
                            "&Lcedil;": "Ļ",
                            "&Lcy;": "Л",
                            "&LeftAngleBracket;": "⟨",
                            "&LeftArrow;": "←",
                            "&LeftArrowBar;": "⇤",
                            "&LeftArrowRightArrow;": "⇆",
                            "&LeftCeiling;": "⌈",
                            "&LeftDoubleBracket;": "⟦",
                            "&LeftDownTeeVector;": "⥡",
                            "&LeftDownVector;": "⇃",
                            "&LeftDownVectorBar;": "⥙",
                            "&LeftFloor;": "⌊",
                            "&LeftRightArrow;": "↔",
                            "&LeftRightVector;": "⥎",
                            "&LeftTee;": "⊣",
                            "&LeftTeeArrow;": "↤",
                            "&LeftTeeVector;": "⥚",
                            "&LeftTriangle;": "⊲",
                            "&LeftTriangleBar;": "⧏",
                            "&LeftTriangleEqual;": "⊴",
                            "&LeftUpDownVector;": "⥑",
                            "&LeftUpTeeVector;": "⥠",
                            "&LeftUpVector;": "↿",
                            "&LeftUpVectorBar;": "⥘",
                            "&LeftVector;": "↼",
                            "&LeftVectorBar;": "⥒",
                            "&Leftarrow;": "⇐",
                            "&Leftrightarrow;": "⇔",
                            "&LessEqualGreater;": "⋚",
                            "&LessFullEqual;": "≦",
                            "&LessGreater;": "≶",
                            "&LessLess;": "⪡",
                            "&LessSlantEqual;": "⩽",
                            "&LessTilde;": "≲",
                            "&Lfr;": "𝔏",
                            "&Ll;": "⋘",
                            "&Lleftarrow;": "⇚",
                            "&Lmidot;": "Ŀ",
                            "&LongLeftArrow;": "⟵",
                            "&LongLeftRightArrow;": "⟷",
                            "&LongRightArrow;": "⟶",
                            "&Longleftarrow;": "⟸",
                            "&Longleftrightarrow;": "⟺",
                            "&Longrightarrow;": "⟹",
                            "&Lopf;": "𝕃",
                            "&LowerLeftArrow;": "↙",
                            "&LowerRightArrow;": "↘",
                            "&Lscr;": "ℒ",
                            "&Lsh;": "↰",
                            "&Lstrok;": "Ł",
                            "&Lt;": "≪",
                            "&Map;": "⤅",
                            "&Mcy;": "М",
                            "&MediumSpace;": " ",
                            "&Mellintrf;": "ℳ",
                            "&Mfr;": "𝔐",
                            "&MinusPlus;": "∓",
                            "&Mopf;": "𝕄",
                            "&Mscr;": "ℳ",
                            "&Mu;": "Μ",
                            "&NJcy;": "Њ",
                            "&Nacute;": "Ń",
                            "&Ncaron;": "Ň",
                            "&Ncedil;": "Ņ",
                            "&Ncy;": "Н",
                            "&NegativeMediumSpace;": "​",
                            "&NegativeThickSpace;": "​",
                            "&NegativeThinSpace;": "​",
                            "&NegativeVeryThinSpace;": "​",
                            "&NestedGreaterGreater;": "≫",
                            "&NestedLessLess;": "≪",
                            "&NewLine;": "\n",
                            "&Nfr;": "𝔑",
                            "&NoBreak;": "⁠",
                            "&NonBreakingSpace;": " ",
                            "&Nopf;": "ℕ",
                            "&Not;": "⫬",
                            "&NotCongruent;": "≢",
                            "&NotCupCap;": "≭",
                            "&NotDoubleVerticalBar;": "∦",
                            "&NotElement;": "∉",
                            "&NotEqual;": "≠",
                            "&NotEqualTilde;": "≂̸",
                            "&NotExists;": "∄",
                            "&NotGreater;": "≯",
                            "&NotGreaterEqual;": "≱",
                            "&NotGreaterFullEqual;": "≧̸",
                            "&NotGreaterGreater;": "≫̸",
                            "&NotGreaterLess;": "≹",
                            "&NotGreaterSlantEqual;": "⩾̸",
                            "&NotGreaterTilde;": "≵",
                            "&NotHumpDownHump;": "≎̸",
                            "&NotHumpEqual;": "≏̸",
                            "&NotLeftTriangle;": "⋪",
                            "&NotLeftTriangleBar;": "⧏̸",
                            "&NotLeftTriangleEqual;": "⋬",
                            "&NotLess;": "≮",
                            "&NotLessEqual;": "≰",
                            "&NotLessGreater;": "≸",
                            "&NotLessLess;": "≪̸",
                            "&NotLessSlantEqual;": "⩽̸",
                            "&NotLessTilde;": "≴",
                            "&NotNestedGreaterGreater;": "⪢̸",
                            "&NotNestedLessLess;": "⪡̸",
                            "&NotPrecedes;": "⊀",
                            "&NotPrecedesEqual;": "⪯̸",
                            "&NotPrecedesSlantEqual;": "⋠",
                            "&NotReverseElement;": "∌",
                            "&NotRightTriangle;": "⋫",
                            "&NotRightTriangleBar;": "⧐̸",
                            "&NotRightTriangleEqual;": "⋭",
                            "&NotSquareSubset;": "⊏̸",
                            "&NotSquareSubsetEqual;": "⋢",
                            "&NotSquareSuperset;": "⊐̸",
                            "&NotSquareSupersetEqual;": "⋣",
                            "&NotSubset;": "⊂⃒",
                            "&NotSubsetEqual;": "⊈",
                            "&NotSucceeds;": "⊁",
                            "&NotSucceedsEqual;": "⪰̸",
                            "&NotSucceedsSlantEqual;": "⋡",
                            "&NotSucceedsTilde;": "≿̸",
                            "&NotSuperset;": "⊃⃒",
                            "&NotSupersetEqual;": "⊉",
                            "&NotTilde;": "≁",
                            "&NotTildeEqual;": "≄",
                            "&NotTildeFullEqual;": "≇",
                            "&NotTildeTilde;": "≉",
                            "&NotVerticalBar;": "∤",
                            "&Nscr;": "𝒩",
                            "&Ntilde": "Ñ",
                            "&Ntilde;": "Ñ",
                            "&Nu;": "Ν",
                            "&OElig;": "Œ",
                            "&Oacute": "Ó",
                            "&Oacute;": "Ó",
                            "&Ocirc": "Ô",
                            "&Ocirc;": "Ô",
                            "&Ocy;": "О",
                            "&Odblac;": "Ő",
                            "&Ofr;": "𝔒",
                            "&Ograve": "Ò",
                            "&Ograve;": "Ò",
                            "&Omacr;": "Ō",
                            "&Omega;": "Ω",
                            "&Omicron;": "Ο",
                            "&Oopf;": "𝕆",
                            "&OpenCurlyDoubleQuote;": "“",
                            "&OpenCurlyQuote;": "‘",
                            "&Or;": "⩔",
                            "&Oscr;": "𝒪",
                            "&Oslash": "Ø",
                            "&Oslash;": "Ø",
                            "&Otilde": "Õ",
                            "&Otilde;": "Õ",
                            "&Otimes;": "⨷",
                            "&Ouml": "Ö",
                            "&Ouml;": "Ö",
                            "&OverBar;": "‾",
                            "&OverBrace;": "⏞",
                            "&OverBracket;": "⎴",
                            "&OverParenthesis;": "⏜",
                            "&PartialD;": "∂",
                            "&Pcy;": "П",
                            "&Pfr;": "𝔓",
                            "&Phi;": "Φ",
                            "&Pi;": "Π",
                            "&PlusMinus;": "±",
                            "&Poincareplane;": "ℌ",
                            "&Popf;": "ℙ",
                            "&Pr;": "⪻",
                            "&Precedes;": "≺",
                            "&PrecedesEqual;": "⪯",
                            "&PrecedesSlantEqual;": "≼",
                            "&PrecedesTilde;": "≾",
                            "&Prime;": "″",
                            "&Product;": "∏",
                            "&Proportion;": "∷",
                            "&Proportional;": "∝",
                            "&Pscr;": "𝒫",
                            "&Psi;": "Ψ",
                            "&QUOT": '"',
                            "&QUOT;": '"',
                            "&Qfr;": "𝔔",
                            "&Qopf;": "ℚ",
                            "&Qscr;": "𝒬",
                            "&RBarr;": "⤐",
                            "&REG": "®",
                            "&REG;": "®",
                            "&Racute;": "Ŕ",
                            "&Rang;": "⟫",
                            "&Rarr;": "↠",
                            "&Rarrtl;": "⤖",
                            "&Rcaron;": "Ř",
                            "&Rcedil;": "Ŗ",
                            "&Rcy;": "Р",
                            "&Re;": "ℜ",
                            "&ReverseElement;": "∋",
                            "&ReverseEquilibrium;": "⇋",
                            "&ReverseUpEquilibrium;": "⥯",
                            "&Rfr;": "ℜ",
                            "&Rho;": "Ρ",
                            "&RightAngleBracket;": "⟩",
                            "&RightArrow;": "→",
                            "&RightArrowBar;": "⇥",
                            "&RightArrowLeftArrow;": "⇄",
                            "&RightCeiling;": "⌉",
                            "&RightDoubleBracket;": "⟧",
                            "&RightDownTeeVector;": "⥝",
                            "&RightDownVector;": "⇂",
                            "&RightDownVectorBar;": "⥕",
                            "&RightFloor;": "⌋",
                            "&RightTee;": "⊢",
                            "&RightTeeArrow;": "↦",
                            "&RightTeeVector;": "⥛",
                            "&RightTriangle;": "⊳",
                            "&RightTriangleBar;": "⧐",
                            "&RightTriangleEqual;": "⊵",
                            "&RightUpDownVector;": "⥏",
                            "&RightUpTeeVector;": "⥜",
                            "&RightUpVector;": "↾",
                            "&RightUpVectorBar;": "⥔",
                            "&RightVector;": "⇀",
                            "&RightVectorBar;": "⥓",
                            "&Rightarrow;": "⇒",
                            "&Ropf;": "ℝ",
                            "&RoundImplies;": "⥰",
                            "&Rrightarrow;": "⇛",
                            "&Rscr;": "ℛ",
                            "&Rsh;": "↱",
                            "&RuleDelayed;": "⧴",
                            "&SHCHcy;": "Щ",
                            "&SHcy;": "Ш",
                            "&SOFTcy;": "Ь",
                            "&Sacute;": "Ś",
                            "&Sc;": "⪼",
                            "&Scaron;": "Š",
                            "&Scedil;": "Ş",
                            "&Scirc;": "Ŝ",
                            "&Scy;": "С",
                            "&Sfr;": "𝔖",
                            "&ShortDownArrow;": "↓",
                            "&ShortLeftArrow;": "←",
                            "&ShortRightArrow;": "→",
                            "&ShortUpArrow;": "↑",
                            "&Sigma;": "Σ",
                            "&SmallCircle;": "∘",
                            "&Sopf;": "𝕊",
                            "&Sqrt;": "√",
                            "&Square;": "□",
                            "&SquareIntersection;": "⊓",
                            "&SquareSubset;": "⊏",
                            "&SquareSubsetEqual;": "⊑",
                            "&SquareSuperset;": "⊐",
                            "&SquareSupersetEqual;": "⊒",
                            "&SquareUnion;": "⊔",
                            "&Sscr;": "𝒮",
                            "&Star;": "⋆",
                            "&Sub;": "⋐",
                            "&Subset;": "⋐",
                            "&SubsetEqual;": "⊆",
                            "&Succeeds;": "≻",
                            "&SucceedsEqual;": "⪰",
                            "&SucceedsSlantEqual;": "≽",
                            "&SucceedsTilde;": "≿",
                            "&SuchThat;": "∋",
                            "&Sum;": "∑",
                            "&Sup;": "⋑",
                            "&Superset;": "⊃",
                            "&SupersetEqual;": "⊇",
                            "&Supset;": "⋑",
                            "&THORN": "Þ",
                            "&THORN;": "Þ",
                            "&TRADE;": "™",
                            "&TSHcy;": "Ћ",
                            "&TScy;": "Ц",
                            "&Tab;": "\t",
                            "&Tau;": "Τ",
                            "&Tcaron;": "Ť",
                            "&Tcedil;": "Ţ",
                            "&Tcy;": "Т",
                            "&Tfr;": "𝔗",
                            "&Therefore;": "∴",
                            "&Theta;": "Θ",
                            "&ThickSpace;": "  ",
                            "&ThinSpace;": " ",
                            "&Tilde;": "∼",
                            "&TildeEqual;": "≃",
                            "&TildeFullEqual;": "≅",
                            "&TildeTilde;": "≈",
                            "&Topf;": "𝕋",
                            "&TripleDot;": "⃛",
                            "&Tscr;": "𝒯",
                            "&Tstrok;": "Ŧ",
                            "&Uacute": "Ú",
                            "&Uacute;": "Ú",
                            "&Uarr;": "↟",
                            "&Uarrocir;": "⥉",
                            "&Ubrcy;": "Ў",
                            "&Ubreve;": "Ŭ",
                            "&Ucirc": "Û",
                            "&Ucirc;": "Û",
                            "&Ucy;": "У",
                            "&Udblac;": "Ű",
                            "&Ufr;": "𝔘",
                            "&Ugrave": "Ù",
                            "&Ugrave;": "Ù",
                            "&Umacr;": "Ū",
                            "&UnderBar;": "_",
                            "&UnderBrace;": "⏟",
                            "&UnderBracket;": "⎵",
                            "&UnderParenthesis;": "⏝",
                            "&Union;": "⋃",
                            "&UnionPlus;": "⊎",
                            "&Uogon;": "Ų",
                            "&Uopf;": "𝕌",
                            "&UpArrow;": "↑",
                            "&UpArrowBar;": "⤒",
                            "&UpArrowDownArrow;": "⇅",
                            "&UpDownArrow;": "↕",
                            "&UpEquilibrium;": "⥮",
                            "&UpTee;": "⊥",
                            "&UpTeeArrow;": "↥",
                            "&Uparrow;": "⇑",
                            "&Updownarrow;": "⇕",
                            "&UpperLeftArrow;": "↖",
                            "&UpperRightArrow;": "↗",
                            "&Upsi;": "ϒ",
                            "&Upsilon;": "Υ",
                            "&Uring;": "Ů",
                            "&Uscr;": "𝒰",
                            "&Utilde;": "Ũ",
                            "&Uuml": "Ü",
                            "&Uuml;": "Ü",
                            "&VDash;": "⊫",
                            "&Vbar;": "⫫",
                            "&Vcy;": "В",
                            "&Vdash;": "⊩",
                            "&Vdashl;": "⫦",
                            "&Vee;": "⋁",
                            "&Verbar;": "‖",
                            "&Vert;": "‖",
                            "&VerticalBar;": "∣",
                            "&VerticalLine;": "|",
                            "&VerticalSeparator;": "❘",
                            "&VerticalTilde;": "≀",
                            "&VeryThinSpace;": " ",
                            "&Vfr;": "𝔙",
                            "&Vopf;": "𝕍",
                            "&Vscr;": "𝒱",
                            "&Vvdash;": "⊪",
                            "&Wcirc;": "Ŵ",
                            "&Wedge;": "⋀",
                            "&Wfr;": "𝔚",
                            "&Wopf;": "𝕎",
                            "&Wscr;": "𝒲",
                            "&Xfr;": "𝔛",
                            "&Xi;": "Ξ",
                            "&Xopf;": "𝕏",
                            "&Xscr;": "𝒳",
                            "&YAcy;": "Я",
                            "&YIcy;": "Ї",
                            "&YUcy;": "Ю",
                            "&Yacute": "Ý",
                            "&Yacute;": "Ý",
                            "&Ycirc;": "Ŷ",
                            "&Ycy;": "Ы",
                            "&Yfr;": "𝔜",
                            "&Yopf;": "𝕐",
                            "&Yscr;": "𝒴",
                            "&Yuml;": "Ÿ",
                            "&ZHcy;": "Ж",
                            "&Zacute;": "Ź",
                            "&Zcaron;": "Ž",
                            "&Zcy;": "З",
                            "&Zdot;": "Ż",
                            "&ZeroWidthSpace;": "​",
                            "&Zeta;": "Ζ",
                            "&Zfr;": "ℨ",
                            "&Zopf;": "ℤ",
                            "&Zscr;": "𝒵",
                            "&aacute": "á",
                            "&aacute;": "á",
                            "&abreve;": "ă",
                            "&ac;": "∾",
                            "&acE;": "∾̳",
                            "&acd;": "∿",
                            "&acirc": "â",
                            "&acirc;": "â",
                            "&acute": "´",
                            "&acute;": "´",
                            "&acy;": "а",
                            "&aelig": "æ",
                            "&aelig;": "æ",
                            "&af;": "⁡",
                            "&afr;": "𝔞",
                            "&agrave": "à",
                            "&agrave;": "à",
                            "&alefsym;": "ℵ",
                            "&aleph;": "ℵ",
                            "&alpha;": "α",
                            "&amacr;": "ā",
                            "&amalg;": "⨿",
                            "&amp": "&",
                            "&amp;": "&",
                            "&and;": "∧",
                            "&andand;": "⩕",
                            "&andd;": "⩜",
                            "&andslope;": "⩘",
                            "&andv;": "⩚",
                            "&ang;": "∠",
                            "&ange;": "⦤",
                            "&angle;": "∠",
                            "&angmsd;": "∡",
                            "&angmsdaa;": "⦨",
                            "&angmsdab;": "⦩",
                            "&angmsdac;": "⦪",
                            "&angmsdad;": "⦫",
                            "&angmsdae;": "⦬",
                            "&angmsdaf;": "⦭",
                            "&angmsdag;": "⦮",
                            "&angmsdah;": "⦯",
                            "&angrt;": "∟",
                            "&angrtvb;": "⊾",
                            "&angrtvbd;": "⦝",
                            "&angsph;": "∢",
                            "&angst;": "Å",
                            "&angzarr;": "⍼",
                            "&aogon;": "ą",
                            "&aopf;": "𝕒",
                            "&ap;": "≈",
                            "&apE;": "⩰",
                            "&apacir;": "⩯",
                            "&ape;": "≊",
                            "&apid;": "≋",
                            "&apos;": "'",
                            "&approx;": "≈",
                            "&approxeq;": "≊",
                            "&aring": "å",
                            "&aring;": "å",
                            "&ascr;": "𝒶",
                            "&ast;": "*",
                            "&asymp;": "≈",
                            "&asympeq;": "≍",
                            "&atilde": "ã",
                            "&atilde;": "ã",
                            "&auml": "ä",
                            "&auml;": "ä",
                            "&awconint;": "∳",
                            "&awint;": "⨑",
                            "&bNot;": "⫭",
                            "&backcong;": "≌",
                            "&backepsilon;": "϶",
                            "&backprime;": "‵",
                            "&backsim;": "∽",
                            "&backsimeq;": "⋍",
                            "&barvee;": "⊽",
                            "&barwed;": "⌅",
                            "&barwedge;": "⌅",
                            "&bbrk;": "⎵",
                            "&bbrktbrk;": "⎶",
                            "&bcong;": "≌",
                            "&bcy;": "б",
                            "&bdquo;": "„",
                            "&becaus;": "∵",
                            "&because;": "∵",
                            "&bemptyv;": "⦰",
                            "&bepsi;": "϶",
                            "&bernou;": "ℬ",
                            "&beta;": "β",
                            "&beth;": "ℶ",
                            "&between;": "≬",
                            "&bfr;": "𝔟",
                            "&bigcap;": "⋂",
                            "&bigcirc;": "◯",
                            "&bigcup;": "⋃",
                            "&bigodot;": "⨀",
                            "&bigoplus;": "⨁",
                            "&bigotimes;": "⨂",
                            "&bigsqcup;": "⨆",
                            "&bigstar;": "★",
                            "&bigtriangledown;": "▽",
                            "&bigtriangleup;": "△",
                            "&biguplus;": "⨄",
                            "&bigvee;": "⋁",
                            "&bigwedge;": "⋀",
                            "&bkarow;": "⤍",
                            "&blacklozenge;": "⧫",
                            "&blacksquare;": "▪",
                            "&blacktriangle;": "▴",
                            "&blacktriangledown;": "▾",
                            "&blacktriangleleft;": "◂",
                            "&blacktriangleright;": "▸",
                            "&blank;": "␣",
                            "&blk12;": "▒",
                            "&blk14;": "░",
                            "&blk34;": "▓",
                            "&block;": "█",
                            "&bne;": "=⃥",
                            "&bnequiv;": "≡⃥",
                            "&bnot;": "⌐",
                            "&bopf;": "𝕓",
                            "&bot;": "⊥",
                            "&bottom;": "⊥",
                            "&bowtie;": "⋈",
                            "&boxDL;": "╗",
                            "&boxDR;": "╔",
                            "&boxDl;": "╖",
                            "&boxDr;": "╓",
                            "&boxH;": "═",
                            "&boxHD;": "╦",
                            "&boxHU;": "╩",
                            "&boxHd;": "╤",
                            "&boxHu;": "╧",
                            "&boxUL;": "╝",
                            "&boxUR;": "╚",
                            "&boxUl;": "╜",
                            "&boxUr;": "╙",
                            "&boxV;": "║",
                            "&boxVH;": "╬",
                            "&boxVL;": "╣",
                            "&boxVR;": "╠",
                            "&boxVh;": "╫",
                            "&boxVl;": "╢",
                            "&boxVr;": "╟",
                            "&boxbox;": "⧉",
                            "&boxdL;": "╕",
                            "&boxdR;": "╒",
                            "&boxdl;": "┐",
                            "&boxdr;": "┌",
                            "&boxh;": "─",
                            "&boxhD;": "╥",
                            "&boxhU;": "╨",
                            "&boxhd;": "┬",
                            "&boxhu;": "┴",
                            "&boxminus;": "⊟",
                            "&boxplus;": "⊞",
                            "&boxtimes;": "⊠",
                            "&boxuL;": "╛",
                            "&boxuR;": "╘",
                            "&boxul;": "┘",
                            "&boxur;": "└",
                            "&boxv;": "│",
                            "&boxvH;": "╪",
                            "&boxvL;": "╡",
                            "&boxvR;": "╞",
                            "&boxvh;": "┼",
                            "&boxvl;": "┤",
                            "&boxvr;": "├",
                            "&bprime;": "‵",
                            "&breve;": "˘",
                            "&brvbar": "¦",
                            "&brvbar;": "¦",
                            "&bscr;": "𝒷",
                            "&bsemi;": "⁏",
                            "&bsim;": "∽",
                            "&bsime;": "⋍",
                            "&bsol;": "\\",
                            "&bsolb;": "⧅",
                            "&bsolhsub;": "⟈",
                            "&bull;": "•",
                            "&bullet;": "•",
                            "&bump;": "≎",
                            "&bumpE;": "⪮",
                            "&bumpe;": "≏",
                            "&bumpeq;": "≏",
                            "&cacute;": "ć",
                            "&cap;": "∩",
                            "&capand;": "⩄",
                            "&capbrcup;": "⩉",
                            "&capcap;": "⩋",
                            "&capcup;": "⩇",
                            "&capdot;": "⩀",
                            "&caps;": "∩︀",
                            "&caret;": "⁁",
                            "&caron;": "ˇ",
                            "&ccaps;": "⩍",
                            "&ccaron;": "č",
                            "&ccedil": "ç",
                            "&ccedil;": "ç",
                            "&ccirc;": "ĉ",
                            "&ccups;": "⩌",
                            "&ccupssm;": "⩐",
                            "&cdot;": "ċ",
                            "&cedil": "¸",
                            "&cedil;": "¸",
                            "&cemptyv;": "⦲",
                            "&cent": "¢",
                            "&cent;": "¢",
                            "&centerdot;": "·",
                            "&cfr;": "𝔠",
                            "&chcy;": "ч",
                            "&check;": "✓",
                            "&checkmark;": "✓",
                            "&chi;": "χ",
                            "&cir;": "○",
                            "&cirE;": "⧃",
                            "&circ;": "ˆ",
                            "&circeq;": "≗",
                            "&circlearrowleft;": "↺",
                            "&circlearrowright;": "↻",
                            "&circledR;": "®",
                            "&circledS;": "Ⓢ",
                            "&circledast;": "⊛",
                            "&circledcirc;": "⊚",
                            "&circleddash;": "⊝",
                            "&cire;": "≗",
                            "&cirfnint;": "⨐",
                            "&cirmid;": "⫯",
                            "&cirscir;": "⧂",
                            "&clubs;": "♣",
                            "&clubsuit;": "♣",
                            "&colon;": ":",
                            "&colone;": "≔",
                            "&coloneq;": "≔",
                            "&comma;": ",",
                            "&commat;": "@",
                            "&comp;": "∁",
                            "&compfn;": "∘",
                            "&complement;": "∁",
                            "&complexes;": "ℂ",
                            "&cong;": "≅",
                            "&congdot;": "⩭",
                            "&conint;": "∮",
                            "&copf;": "𝕔",
                            "&coprod;": "∐",
                            "&copy": "©",
                            "&copy;": "©",
                            "&copysr;": "℗",
                            "&crarr;": "↵",
                            "&cross;": "✗",
                            "&cscr;": "𝒸",
                            "&csub;": "⫏",
                            "&csube;": "⫑",
                            "&csup;": "⫐",
                            "&csupe;": "⫒",
                            "&ctdot;": "⋯",
                            "&cudarrl;": "⤸",
                            "&cudarrr;": "⤵",
                            "&cuepr;": "⋞",
                            "&cuesc;": "⋟",
                            "&cularr;": "↶",
                            "&cularrp;": "⤽",
                            "&cup;": "∪",
                            "&cupbrcap;": "⩈",
                            "&cupcap;": "⩆",
                            "&cupcup;": "⩊",
                            "&cupdot;": "⊍",
                            "&cupor;": "⩅",
                            "&cups;": "∪︀",
                            "&curarr;": "↷",
                            "&curarrm;": "⤼",
                            "&curlyeqprec;": "⋞",
                            "&curlyeqsucc;": "⋟",
                            "&curlyvee;": "⋎",
                            "&curlywedge;": "⋏",
                            "&curren": "¤",
                            "&curren;": "¤",
                            "&curvearrowleft;": "↶",
                            "&curvearrowright;": "↷",
                            "&cuvee;": "⋎",
                            "&cuwed;": "⋏",
                            "&cwconint;": "∲",
                            "&cwint;": "∱",
                            "&cylcty;": "⌭",
                            "&dArr;": "⇓",
                            "&dHar;": "⥥",
                            "&dagger;": "†",
                            "&daleth;": "ℸ",
                            "&darr;": "↓",
                            "&dash;": "‐",
                            "&dashv;": "⊣",
                            "&dbkarow;": "⤏",
                            "&dblac;": "˝",
                            "&dcaron;": "ď",
                            "&dcy;": "д",
                            "&dd;": "ⅆ",
                            "&ddagger;": "‡",
                            "&ddarr;": "⇊",
                            "&ddotseq;": "⩷",
                            "&deg": "°",
                            "&deg;": "°",
                            "&delta;": "δ",
                            "&demptyv;": "⦱",
                            "&dfisht;": "⥿",
                            "&dfr;": "𝔡",
                            "&dharl;": "⇃",
                            "&dharr;": "⇂",
                            "&diam;": "⋄",
                            "&diamond;": "⋄",
                            "&diamondsuit;": "♦",
                            "&diams;": "♦",
                            "&die;": "¨",
                            "&digamma;": "ϝ",
                            "&disin;": "⋲",
                            "&div;": "÷",
                            "&divide": "÷",
                            "&divide;": "÷",
                            "&divideontimes;": "⋇",
                            "&divonx;": "⋇",
                            "&djcy;": "ђ",
                            "&dlcorn;": "⌞",
                            "&dlcrop;": "⌍",
                            "&dollar;": "$",
                            "&dopf;": "𝕕",
                            "&dot;": "˙",
                            "&doteq;": "≐",
                            "&doteqdot;": "≑",
                            "&dotminus;": "∸",
                            "&dotplus;": "∔",
                            "&dotsquare;": "⊡",
                            "&doublebarwedge;": "⌆",
                            "&downarrow;": "↓",
                            "&downdownarrows;": "⇊",
                            "&downharpoonleft;": "⇃",
                            "&downharpoonright;": "⇂",
                            "&drbkarow;": "⤐",
                            "&drcorn;": "⌟",
                            "&drcrop;": "⌌",
                            "&dscr;": "𝒹",
                            "&dscy;": "ѕ",
                            "&dsol;": "⧶",
                            "&dstrok;": "đ",
                            "&dtdot;": "⋱",
                            "&dtri;": "▿",
                            "&dtrif;": "▾",
                            "&duarr;": "⇵",
                            "&duhar;": "⥯",
                            "&dwangle;": "⦦",
                            "&dzcy;": "џ",
                            "&dzigrarr;": "⟿",
                            "&eDDot;": "⩷",
                            "&eDot;": "≑",
                            "&eacute": "é",
                            "&eacute;": "é",
                            "&easter;": "⩮",
                            "&ecaron;": "ě",
                            "&ecir;": "≖",
                            "&ecirc": "ê",
                            "&ecirc;": "ê",
                            "&ecolon;": "≕",
                            "&ecy;": "э",
                            "&edot;": "ė",
                            "&ee;": "ⅇ",
                            "&efDot;": "≒",
                            "&efr;": "𝔢",
                            "&eg;": "⪚",
                            "&egrave": "è",
                            "&egrave;": "è",
                            "&egs;": "⪖",
                            "&egsdot;": "⪘",
                            "&el;": "⪙",
                            "&elinters;": "⏧",
                            "&ell;": "ℓ",
                            "&els;": "⪕",
                            "&elsdot;": "⪗",
                            "&emacr;": "ē",
                            "&empty;": "∅",
                            "&emptyset;": "∅",
                            "&emptyv;": "∅",
                            "&emsp13;": " ",
                            "&emsp14;": " ",
                            "&emsp;": " ",
                            "&eng;": "ŋ",
                            "&ensp;": " ",
                            "&eogon;": "ę",
                            "&eopf;": "𝕖",
                            "&epar;": "⋕",
                            "&eparsl;": "⧣",
                            "&eplus;": "⩱",
                            "&epsi;": "ε",
                            "&epsilon;": "ε",
                            "&epsiv;": "ϵ",
                            "&eqcirc;": "≖",
                            "&eqcolon;": "≕",
                            "&eqsim;": "≂",
                            "&eqslantgtr;": "⪖",
                            "&eqslantless;": "⪕",
                            "&equals;": "=",
                            "&equest;": "≟",
                            "&equiv;": "≡",
                            "&equivDD;": "⩸",
                            "&eqvparsl;": "⧥",
                            "&erDot;": "≓",
                            "&erarr;": "⥱",
                            "&escr;": "ℯ",
                            "&esdot;": "≐",
                            "&esim;": "≂",
                            "&eta;": "η",
                            "&eth": "ð",
                            "&eth;": "ð",
                            "&euml": "ë",
                            "&euml;": "ë",
                            "&euro;": "€",
                            "&excl;": "!",
                            "&exist;": "∃",
                            "&expectation;": "ℰ",
                            "&exponentiale;": "ⅇ",
                            "&fallingdotseq;": "≒",
                            "&fcy;": "ф",
                            "&female;": "♀",
                            "&ffilig;": "ﬃ",
                            "&fflig;": "ﬀ",
                            "&ffllig;": "ﬄ",
                            "&ffr;": "𝔣",
                            "&filig;": "ﬁ",
                            "&fjlig;": "fj",
                            "&flat;": "♭",
                            "&fllig;": "ﬂ",
                            "&fltns;": "▱",
                            "&fnof;": "ƒ",
                            "&fopf;": "𝕗",
                            "&forall;": "∀",
                            "&fork;": "⋔",
                            "&forkv;": "⫙",
                            "&fpartint;": "⨍",
                            "&frac12": "½",
                            "&frac12;": "½",
                            "&frac13;": "⅓",
                            "&frac14": "¼",
                            "&frac14;": "¼",
                            "&frac15;": "⅕",
                            "&frac16;": "⅙",
                            "&frac18;": "⅛",
                            "&frac23;": "⅔",
                            "&frac25;": "⅖",
                            "&frac34": "¾",
                            "&frac34;": "¾",
                            "&frac35;": "⅗",
                            "&frac38;": "⅜",
                            "&frac45;": "⅘",
                            "&frac56;": "⅚",
                            "&frac58;": "⅝",
                            "&frac78;": "⅞",
                            "&frasl;": "⁄",
                            "&frown;": "⌢",
                            "&fscr;": "𝒻",
                            "&gE;": "≧",
                            "&gEl;": "⪌",
                            "&gacute;": "ǵ",
                            "&gamma;": "γ",
                            "&gammad;": "ϝ",
                            "&gap;": "⪆",
                            "&gbreve;": "ğ",
                            "&gcirc;": "ĝ",
                            "&gcy;": "г",
                            "&gdot;": "ġ",
                            "&ge;": "≥",
                            "&gel;": "⋛",
                            "&geq;": "≥",
                            "&geqq;": "≧",
                            "&geqslant;": "⩾",
                            "&ges;": "⩾",
                            "&gescc;": "⪩",
                            "&gesdot;": "⪀",
                            "&gesdoto;": "⪂",
                            "&gesdotol;": "⪄",
                            "&gesl;": "⋛︀",
                            "&gesles;": "⪔",
                            "&gfr;": "𝔤",
                            "&gg;": "≫",
                            "&ggg;": "⋙",
                            "&gimel;": "ℷ",
                            "&gjcy;": "ѓ",
                            "&gl;": "≷",
                            "&glE;": "⪒",
                            "&gla;": "⪥",
                            "&glj;": "⪤",
                            "&gnE;": "≩",
                            "&gnap;": "⪊",
                            "&gnapprox;": "⪊",
                            "&gne;": "⪈",
                            "&gneq;": "⪈",
                            "&gneqq;": "≩",
                            "&gnsim;": "⋧",
                            "&gopf;": "𝕘",
                            "&grave;": "`",
                            "&gscr;": "ℊ",
                            "&gsim;": "≳",
                            "&gsime;": "⪎",
                            "&gsiml;": "⪐",
                            "&gt": ">",
                            "&gt;": ">",
                            "&gtcc;": "⪧",
                            "&gtcir;": "⩺",
                            "&gtdot;": "⋗",
                            "&gtlPar;": "⦕",
                            "&gtquest;": "⩼",
                            "&gtrapprox;": "⪆",
                            "&gtrarr;": "⥸",
                            "&gtrdot;": "⋗",
                            "&gtreqless;": "⋛",
                            "&gtreqqless;": "⪌",
                            "&gtrless;": "≷",
                            "&gtrsim;": "≳",
                            "&gvertneqq;": "≩︀",
                            "&gvnE;": "≩︀",
                            "&hArr;": "⇔",
                            "&hairsp;": " ",
                            "&half;": "½",
                            "&hamilt;": "ℋ",
                            "&hardcy;": "ъ",
                            "&harr;": "↔",
                            "&harrcir;": "⥈",
                            "&harrw;": "↭",
                            "&hbar;": "ℏ",
                            "&hcirc;": "ĥ",
                            "&hearts;": "♥",
                            "&heartsuit;": "♥",
                            "&hellip;": "…",
                            "&hercon;": "⊹",
                            "&hfr;": "𝔥",
                            "&hksearow;": "⤥",
                            "&hkswarow;": "⤦",
                            "&hoarr;": "⇿",
                            "&homtht;": "∻",
                            "&hookleftarrow;": "↩",
                            "&hookrightarrow;": "↪",
                            "&hopf;": "𝕙",
                            "&horbar;": "―",
                            "&hscr;": "𝒽",
                            "&hslash;": "ℏ",
                            "&hstrok;": "ħ",
                            "&hybull;": "⁃",
                            "&hyphen;": "‐",
                            "&iacute": "í",
                            "&iacute;": "í",
                            "&ic;": "⁣",
                            "&icirc": "î",
                            "&icirc;": "î",
                            "&icy;": "и",
                            "&iecy;": "е",
                            "&iexcl": "¡",
                            "&iexcl;": "¡",
                            "&iff;": "⇔",
                            "&ifr;": "𝔦",
                            "&igrave": "ì",
                            "&igrave;": "ì",
                            "&ii;": "ⅈ",
                            "&iiiint;": "⨌",
                            "&iiint;": "∭",
                            "&iinfin;": "⧜",
                            "&iiota;": "℩",
                            "&ijlig;": "ĳ",
                            "&imacr;": "ī",
                            "&image;": "ℑ",
                            "&imagline;": "ℐ",
                            "&imagpart;": "ℑ",
                            "&imath;": "ı",
                            "&imof;": "⊷",
                            "&imped;": "Ƶ",
                            "&in;": "∈",
                            "&incare;": "℅",
                            "&infin;": "∞",
                            "&infintie;": "⧝",
                            "&inodot;": "ı",
                            "&int;": "∫",
                            "&intcal;": "⊺",
                            "&integers;": "ℤ",
                            "&intercal;": "⊺",
                            "&intlarhk;": "⨗",
                            "&intprod;": "⨼",
                            "&iocy;": "ё",
                            "&iogon;": "į",
                            "&iopf;": "𝕚",
                            "&iota;": "ι",
                            "&iprod;": "⨼",
                            "&iquest": "¿",
                            "&iquest;": "¿",
                            "&iscr;": "𝒾",
                            "&isin;": "∈",
                            "&isinE;": "⋹",
                            "&isindot;": "⋵",
                            "&isins;": "⋴",
                            "&isinsv;": "⋳",
                            "&isinv;": "∈",
                            "&it;": "⁢",
                            "&itilde;": "ĩ",
                            "&iukcy;": "і",
                            "&iuml": "ï",
                            "&iuml;": "ï",
                            "&jcirc;": "ĵ",
                            "&jcy;": "й",
                            "&jfr;": "𝔧",
                            "&jmath;": "ȷ",
                            "&jopf;": "𝕛",
                            "&jscr;": "𝒿",
                            "&jsercy;": "ј",
                            "&jukcy;": "є",
                            "&kappa;": "κ",
                            "&kappav;": "ϰ",
                            "&kcedil;": "ķ",
                            "&kcy;": "к",
                            "&kfr;": "𝔨",
                            "&kgreen;": "ĸ",
                            "&khcy;": "х",
                            "&kjcy;": "ќ",
                            "&kopf;": "𝕜",
                            "&kscr;": "𝓀",
                            "&lAarr;": "⇚",
                            "&lArr;": "⇐",
                            "&lAtail;": "⤛",
                            "&lBarr;": "⤎",
                            "&lE;": "≦",
                            "&lEg;": "⪋",
                            "&lHar;": "⥢",
                            "&lacute;": "ĺ",
                            "&laemptyv;": "⦴",
                            "&lagran;": "ℒ",
                            "&lambda;": "λ",
                            "&lang;": "⟨",
                            "&langd;": "⦑",
                            "&langle;": "⟨",
                            "&lap;": "⪅",
                            "&laquo": "«",
                            "&laquo;": "«",
                            "&larr;": "←",
                            "&larrb;": "⇤",
                            "&larrbfs;": "⤟",
                            "&larrfs;": "⤝",
                            "&larrhk;": "↩",
                            "&larrlp;": "↫",
                            "&larrpl;": "⤹",
                            "&larrsim;": "⥳",
                            "&larrtl;": "↢",
                            "&lat;": "⪫",
                            "&latail;": "⤙",
                            "&late;": "⪭",
                            "&lates;": "⪭︀",
                            "&lbarr;": "⤌",
                            "&lbbrk;": "❲",
                            "&lbrace;": "{",
                            "&lbrack;": "[",
                            "&lbrke;": "⦋",
                            "&lbrksld;": "⦏",
                            "&lbrkslu;": "⦍",
                            "&lcaron;": "ľ",
                            "&lcedil;": "ļ",
                            "&lceil;": "⌈",
                            "&lcub;": "{",
                            "&lcy;": "л",
                            "&ldca;": "⤶",
                            "&ldquo;": "“",
                            "&ldquor;": "„",
                            "&ldrdhar;": "⥧",
                            "&ldrushar;": "⥋",
                            "&ldsh;": "↲",
                            "&le;": "≤",
                            "&leftarrow;": "←",
                            "&leftarrowtail;": "↢",
                            "&leftharpoondown;": "↽",
                            "&leftharpoonup;": "↼",
                            "&leftleftarrows;": "⇇",
                            "&leftrightarrow;": "↔",
                            "&leftrightarrows;": "⇆",
                            "&leftrightharpoons;": "⇋",
                            "&leftrightsquigarrow;": "↭",
                            "&leftthreetimes;": "⋋",
                            "&leg;": "⋚",
                            "&leq;": "≤",
                            "&leqq;": "≦",
                            "&leqslant;": "⩽",
                            "&les;": "⩽",
                            "&lescc;": "⪨",
                            "&lesdot;": "⩿",
                            "&lesdoto;": "⪁",
                            "&lesdotor;": "⪃",
                            "&lesg;": "⋚︀",
                            "&lesges;": "⪓",
                            "&lessapprox;": "⪅",
                            "&lessdot;": "⋖",
                            "&lesseqgtr;": "⋚",
                            "&lesseqqgtr;": "⪋",
                            "&lessgtr;": "≶",
                            "&lesssim;": "≲",
                            "&lfisht;": "⥼",
                            "&lfloor;": "⌊",
                            "&lfr;": "𝔩",
                            "&lg;": "≶",
                            "&lgE;": "⪑",
                            "&lhard;": "↽",
                            "&lharu;": "↼",
                            "&lharul;": "⥪",
                            "&lhblk;": "▄",
                            "&ljcy;": "љ",
                            "&ll;": "≪",
                            "&llarr;": "⇇",
                            "&llcorner;": "⌞",
                            "&llhard;": "⥫",
                            "&lltri;": "◺",
                            "&lmidot;": "ŀ",
                            "&lmoust;": "⎰",
                            "&lmoustache;": "⎰",
                            "&lnE;": "≨",
                            "&lnap;": "⪉",
                            "&lnapprox;": "⪉",
                            "&lne;": "⪇",
                            "&lneq;": "⪇",
                            "&lneqq;": "≨",
                            "&lnsim;": "⋦",
                            "&loang;": "⟬",
                            "&loarr;": "⇽",
                            "&lobrk;": "⟦",
                            "&longleftarrow;": "⟵",
                            "&longleftrightarrow;": "⟷",
                            "&longmapsto;": "⟼",
                            "&longrightarrow;": "⟶",
                            "&looparrowleft;": "↫",
                            "&looparrowright;": "↬",
                            "&lopar;": "⦅",
                            "&lopf;": "𝕝",
                            "&loplus;": "⨭",
                            "&lotimes;": "⨴",
                            "&lowast;": "∗",
                            "&lowbar;": "_",
                            "&loz;": "◊",
                            "&lozenge;": "◊",
                            "&lozf;": "⧫",
                            "&lpar;": "(",
                            "&lparlt;": "⦓",
                            "&lrarr;": "⇆",
                            "&lrcorner;": "⌟",
                            "&lrhar;": "⇋",
                            "&lrhard;": "⥭",
                            "&lrm;": "‎",
                            "&lrtri;": "⊿",
                            "&lsaquo;": "‹",
                            "&lscr;": "𝓁",
                            "&lsh;": "↰",
                            "&lsim;": "≲",
                            "&lsime;": "⪍",
                            "&lsimg;": "⪏",
                            "&lsqb;": "[",
                            "&lsquo;": "‘",
                            "&lsquor;": "‚",
                            "&lstrok;": "ł",
                            "&lt": "<",
                            "&lt;": "<",
                            "&ltcc;": "⪦",
                            "&ltcir;": "⩹",
                            "&ltdot;": "⋖",
                            "&lthree;": "⋋",
                            "&ltimes;": "⋉",
                            "&ltlarr;": "⥶",
                            "&ltquest;": "⩻",
                            "&ltrPar;": "⦖",
                            "&ltri;": "◃",
                            "&ltrie;": "⊴",
                            "&ltrif;": "◂",
                            "&lurdshar;": "⥊",
                            "&luruhar;": "⥦",
                            "&lvertneqq;": "≨︀",
                            "&lvnE;": "≨︀",
                            "&mDDot;": "∺",
                            "&macr": "¯",
                            "&macr;": "¯",
                            "&male;": "♂",
                            "&malt;": "✠",
                            "&maltese;": "✠",
                            "&map;": "↦",
                            "&mapsto;": "↦",
                            "&mapstodown;": "↧",
                            "&mapstoleft;": "↤",
                            "&mapstoup;": "↥",
                            "&marker;": "▮",
                            "&mcomma;": "⨩",
                            "&mcy;": "м",
                            "&mdash;": "—",
                            "&measuredangle;": "∡",
                            "&mfr;": "𝔪",
                            "&mho;": "℧",
                            "&micro": "µ",
                            "&micro;": "µ",
                            "&mid;": "∣",
                            "&midast;": "*",
                            "&midcir;": "⫰",
                            "&middot": "·",
                            "&middot;": "·",
                            "&minus;": "−",
                            "&minusb;": "⊟",
                            "&minusd;": "∸",
                            "&minusdu;": "⨪",
                            "&mlcp;": "⫛",
                            "&mldr;": "…",
                            "&mnplus;": "∓",
                            "&models;": "⊧",
                            "&mopf;": "𝕞",
                            "&mp;": "∓",
                            "&mscr;": "𝓂",
                            "&mstpos;": "∾",
                            "&mu;": "μ",
                            "&multimap;": "⊸",
                            "&mumap;": "⊸",
                            "&nGg;": "⋙̸",
                            "&nGt;": "≫⃒",
                            "&nGtv;": "≫̸",
                            "&nLeftarrow;": "⇍",
                            "&nLeftrightarrow;": "⇎",
                            "&nLl;": "⋘̸",
                            "&nLt;": "≪⃒",
                            "&nLtv;": "≪̸",
                            "&nRightarrow;": "⇏",
                            "&nVDash;": "⊯",
                            "&nVdash;": "⊮",
                            "&nabla;": "∇",
                            "&nacute;": "ń",
                            "&nang;": "∠⃒",
                            "&nap;": "≉",
                            "&napE;": "⩰̸",
                            "&napid;": "≋̸",
                            "&napos;": "ŉ",
                            "&napprox;": "≉",
                            "&natur;": "♮",
                            "&natural;": "♮",
                            "&naturals;": "ℕ",
                            "&nbsp": " ",
                            "&nbsp;": " ",
                            "&nbump;": "≎̸",
                            "&nbumpe;": "≏̸",
                            "&ncap;": "⩃",
                            "&ncaron;": "ň",
                            "&ncedil;": "ņ",
                            "&ncong;": "≇",
                            "&ncongdot;": "⩭̸",
                            "&ncup;": "⩂",
                            "&ncy;": "н",
                            "&ndash;": "–",
                            "&ne;": "≠",
                            "&neArr;": "⇗",
                            "&nearhk;": "⤤",
                            "&nearr;": "↗",
                            "&nearrow;": "↗",
                            "&nedot;": "≐̸",
                            "&nequiv;": "≢",
                            "&nesear;": "⤨",
                            "&nesim;": "≂̸",
                            "&nexist;": "∄",
                            "&nexists;": "∄",
                            "&nfr;": "𝔫",
                            "&ngE;": "≧̸",
                            "&nge;": "≱",
                            "&ngeq;": "≱",
                            "&ngeqq;": "≧̸",
                            "&ngeqslant;": "⩾̸",
                            "&nges;": "⩾̸",
                            "&ngsim;": "≵",
                            "&ngt;": "≯",
                            "&ngtr;": "≯",
                            "&nhArr;": "⇎",
                            "&nharr;": "↮",
                            "&nhpar;": "⫲",
                            "&ni;": "∋",
                            "&nis;": "⋼",
                            "&nisd;": "⋺",
                            "&niv;": "∋",
                            "&njcy;": "њ",
                            "&nlArr;": "⇍",
                            "&nlE;": "≦̸",
                            "&nlarr;": "↚",
                            "&nldr;": "‥",
                            "&nle;": "≰",
                            "&nleftarrow;": "↚",
                            "&nleftrightarrow;": "↮",
                            "&nleq;": "≰",
                            "&nleqq;": "≦̸",
                            "&nleqslant;": "⩽̸",
                            "&nles;": "⩽̸",
                            "&nless;": "≮",
                            "&nlsim;": "≴",
                            "&nlt;": "≮",
                            "&nltri;": "⋪",
                            "&nltrie;": "⋬",
                            "&nmid;": "∤",
                            "&nopf;": "𝕟",
                            "&not": "¬",
                            "&not;": "¬",
                            "&notin;": "∉",
                            "&notinE;": "⋹̸",
                            "&notindot;": "⋵̸",
                            "&notinva;": "∉",
                            "&notinvb;": "⋷",
                            "&notinvc;": "⋶",
                            "&notni;": "∌",
                            "&notniva;": "∌",
                            "&notnivb;": "⋾",
                            "&notnivc;": "⋽",
                            "&npar;": "∦",
                            "&nparallel;": "∦",
                            "&nparsl;": "⫽⃥",
                            "&npart;": "∂̸",
                            "&npolint;": "⨔",
                            "&npr;": "⊀",
                            "&nprcue;": "⋠",
                            "&npre;": "⪯̸",
                            "&nprec;": "⊀",
                            "&npreceq;": "⪯̸",
                            "&nrArr;": "⇏",
                            "&nrarr;": "↛",
                            "&nrarrc;": "⤳̸",
                            "&nrarrw;": "↝̸",
                            "&nrightarrow;": "↛",
                            "&nrtri;": "⋫",
                            "&nrtrie;": "⋭",
                            "&nsc;": "⊁",
                            "&nsccue;": "⋡",
                            "&nsce;": "⪰̸",
                            "&nscr;": "𝓃",
                            "&nshortmid;": "∤",
                            "&nshortparallel;": "∦",
                            "&nsim;": "≁",
                            "&nsime;": "≄",
                            "&nsimeq;": "≄",
                            "&nsmid;": "∤",
                            "&nspar;": "∦",
                            "&nsqsube;": "⋢",
                            "&nsqsupe;": "⋣",
                            "&nsub;": "⊄",
                            "&nsubE;": "⫅̸",
                            "&nsube;": "⊈",
                            "&nsubset;": "⊂⃒",
                            "&nsubseteq;": "⊈",
                            "&nsubseteqq;": "⫅̸",
                            "&nsucc;": "⊁",
                            "&nsucceq;": "⪰̸",
                            "&nsup;": "⊅",
                            "&nsupE;": "⫆̸",
                            "&nsupe;": "⊉",
                            "&nsupset;": "⊃⃒",
                            "&nsupseteq;": "⊉",
                            "&nsupseteqq;": "⫆̸",
                            "&ntgl;": "≹",
                            "&ntilde": "ñ",
                            "&ntilde;": "ñ",
                            "&ntlg;": "≸",
                            "&ntriangleleft;": "⋪",
                            "&ntrianglelefteq;": "⋬",
                            "&ntriangleright;": "⋫",
                            "&ntrianglerighteq;": "⋭",
                            "&nu;": "ν",
                            "&num;": "#",
                            "&numero;": "№",
                            "&numsp;": " ",
                            "&nvDash;": "⊭",
                            "&nvHarr;": "⤄",
                            "&nvap;": "≍⃒",
                            "&nvdash;": "⊬",
                            "&nvge;": "≥⃒",
                            "&nvgt;": ">⃒",
                            "&nvinfin;": "⧞",
                            "&nvlArr;": "⤂",
                            "&nvle;": "≤⃒",
                            "&nvlt;": "<⃒",
                            "&nvltrie;": "⊴⃒",
                            "&nvrArr;": "⤃",
                            "&nvrtrie;": "⊵⃒",
                            "&nvsim;": "∼⃒",
                            "&nwArr;": "⇖",
                            "&nwarhk;": "⤣",
                            "&nwarr;": "↖",
                            "&nwarrow;": "↖",
                            "&nwnear;": "⤧",
                            "&oS;": "Ⓢ",
                            "&oacute": "ó",
                            "&oacute;": "ó",
                            "&oast;": "⊛",
                            "&ocir;": "⊚",
                            "&ocirc": "ô",
                            "&ocirc;": "ô",
                            "&ocy;": "о",
                            "&odash;": "⊝",
                            "&odblac;": "ő",
                            "&odiv;": "⨸",
                            "&odot;": "⊙",
                            "&odsold;": "⦼",
                            "&oelig;": "œ",
                            "&ofcir;": "⦿",
                            "&ofr;": "𝔬",
                            "&ogon;": "˛",
                            "&ograve": "ò",
                            "&ograve;": "ò",
                            "&ogt;": "⧁",
                            "&ohbar;": "⦵",
                            "&ohm;": "Ω",
                            "&oint;": "∮",
                            "&olarr;": "↺",
                            "&olcir;": "⦾",
                            "&olcross;": "⦻",
                            "&oline;": "‾",
                            "&olt;": "⧀",
                            "&omacr;": "ō",
                            "&omega;": "ω",
                            "&omicron;": "ο",
                            "&omid;": "⦶",
                            "&ominus;": "⊖",
                            "&oopf;": "𝕠",
                            "&opar;": "⦷",
                            "&operp;": "⦹",
                            "&oplus;": "⊕",
                            "&or;": "∨",
                            "&orarr;": "↻",
                            "&ord;": "⩝",
                            "&order;": "ℴ",
                            "&orderof;": "ℴ",
                            "&ordf": "ª",
                            "&ordf;": "ª",
                            "&ordm": "º",
                            "&ordm;": "º",
                            "&origof;": "⊶",
                            "&oror;": "⩖",
                            "&orslope;": "⩗",
                            "&orv;": "⩛",
                            "&oscr;": "ℴ",
                            "&oslash": "ø",
                            "&oslash;": "ø",
                            "&osol;": "⊘",
                            "&otilde": "õ",
                            "&otilde;": "õ",
                            "&otimes;": "⊗",
                            "&otimesas;": "⨶",
                            "&ouml": "ö",
                            "&ouml;": "ö",
                            "&ovbar;": "⌽",
                            "&par;": "∥",
                            "&para": "¶",
                            "&para;": "¶",
                            "&parallel;": "∥",
                            "&parsim;": "⫳",
                            "&parsl;": "⫽",
                            "&part;": "∂",
                            "&pcy;": "п",
                            "&percnt;": "%",
                            "&period;": ".",
                            "&permil;": "‰",
                            "&perp;": "⊥",
                            "&pertenk;": "‱",
                            "&pfr;": "𝔭",
                            "&phi;": "φ",
                            "&phiv;": "ϕ",
                            "&phmmat;": "ℳ",
                            "&phone;": "☎",
                            "&pi;": "π",
                            "&pitchfork;": "⋔",
                            "&piv;": "ϖ",
                            "&planck;": "ℏ",
                            "&planckh;": "ℎ",
                            "&plankv;": "ℏ",
                            "&plus;": "+",
                            "&plusacir;": "⨣",
                            "&plusb;": "⊞",
                            "&pluscir;": "⨢",
                            "&plusdo;": "∔",
                            "&plusdu;": "⨥",
                            "&pluse;": "⩲",
                            "&plusmn": "±",
                            "&plusmn;": "±",
                            "&plussim;": "⨦",
                            "&plustwo;": "⨧",
                            "&pm;": "±",
                            "&pointint;": "⨕",
                            "&popf;": "𝕡",
                            "&pound": "£",
                            "&pound;": "£",
                            "&pr;": "≺",
                            "&prE;": "⪳",
                            "&prap;": "⪷",
                            "&prcue;": "≼",
                            "&pre;": "⪯",
                            "&prec;": "≺",
                            "&precapprox;": "⪷",
                            "&preccurlyeq;": "≼",
                            "&preceq;": "⪯",
                            "&precnapprox;": "⪹",
                            "&precneqq;": "⪵",
                            "&precnsim;": "⋨",
                            "&precsim;": "≾",
                            "&prime;": "′",
                            "&primes;": "ℙ",
                            "&prnE;": "⪵",
                            "&prnap;": "⪹",
                            "&prnsim;": "⋨",
                            "&prod;": "∏",
                            "&profalar;": "⌮",
                            "&profline;": "⌒",
                            "&profsurf;": "⌓",
                            "&prop;": "∝",
                            "&propto;": "∝",
                            "&prsim;": "≾",
                            "&prurel;": "⊰",
                            "&pscr;": "𝓅",
                            "&psi;": "ψ",
                            "&puncsp;": " ",
                            "&qfr;": "𝔮",
                            "&qint;": "⨌",
                            "&qopf;": "𝕢",
                            "&qprime;": "⁗",
                            "&qscr;": "𝓆",
                            "&quaternions;": "ℍ",
                            "&quatint;": "⨖",
                            "&quest;": "?",
                            "&questeq;": "≟",
                            "&quot": '"',
                            "&quot;": '"',
                            "&rAarr;": "⇛",
                            "&rArr;": "⇒",
                            "&rAtail;": "⤜",
                            "&rBarr;": "⤏",
                            "&rHar;": "⥤",
                            "&race;": "∽̱",
                            "&racute;": "ŕ",
                            "&radic;": "√",
                            "&raemptyv;": "⦳",
                            "&rang;": "⟩",
                            "&rangd;": "⦒",
                            "&range;": "⦥",
                            "&rangle;": "⟩",
                            "&raquo": "»",
                            "&raquo;": "»",
                            "&rarr;": "→",
                            "&rarrap;": "⥵",
                            "&rarrb;": "⇥",
                            "&rarrbfs;": "⤠",
                            "&rarrc;": "⤳",
                            "&rarrfs;": "⤞",
                            "&rarrhk;": "↪",
                            "&rarrlp;": "↬",
                            "&rarrpl;": "⥅",
                            "&rarrsim;": "⥴",
                            "&rarrtl;": "↣",
                            "&rarrw;": "↝",
                            "&ratail;": "⤚",
                            "&ratio;": "∶",
                            "&rationals;": "ℚ",
                            "&rbarr;": "⤍",
                            "&rbbrk;": "❳",
                            "&rbrace;": "}",
                            "&rbrack;": "]",
                            "&rbrke;": "⦌",
                            "&rbrksld;": "⦎",
                            "&rbrkslu;": "⦐",
                            "&rcaron;": "ř",
                            "&rcedil;": "ŗ",
                            "&rceil;": "⌉",
                            "&rcub;": "}",
                            "&rcy;": "р",
                            "&rdca;": "⤷",
                            "&rdldhar;": "⥩",
                            "&rdquo;": "”",
                            "&rdquor;": "”",
                            "&rdsh;": "↳",
                            "&real;": "ℜ",
                            "&realine;": "ℛ",
                            "&realpart;": "ℜ",
                            "&reals;": "ℝ",
                            "&rect;": "▭",
                            "&reg": "®",
                            "&reg;": "®",
                            "&rfisht;": "⥽",
                            "&rfloor;": "⌋",
                            "&rfr;": "𝔯",
                            "&rhard;": "⇁",
                            "&rharu;": "⇀",
                            "&rharul;": "⥬",
                            "&rho;": "ρ",
                            "&rhov;": "ϱ",
                            "&rightarrow;": "→",
                            "&rightarrowtail;": "↣",
                            "&rightharpoondown;": "⇁",
                            "&rightharpoonup;": "⇀",
                            "&rightleftarrows;": "⇄",
                            "&rightleftharpoons;": "⇌",
                            "&rightrightarrows;": "⇉",
                            "&rightsquigarrow;": "↝",
                            "&rightthreetimes;": "⋌",
                            "&ring;": "˚",
                            "&risingdotseq;": "≓",
                            "&rlarr;": "⇄",
                            "&rlhar;": "⇌",
                            "&rlm;": "‏",
                            "&rmoust;": "⎱",
                            "&rmoustache;": "⎱",
                            "&rnmid;": "⫮",
                            "&roang;": "⟭",
                            "&roarr;": "⇾",
                            "&robrk;": "⟧",
                            "&ropar;": "⦆",
                            "&ropf;": "𝕣",
                            "&roplus;": "⨮",
                            "&rotimes;": "⨵",
                            "&rpar;": ")",
                            "&rpargt;": "⦔",
                            "&rppolint;": "⨒",
                            "&rrarr;": "⇉",
                            "&rsaquo;": "›",
                            "&rscr;": "𝓇",
                            "&rsh;": "↱",
                            "&rsqb;": "]",
                            "&rsquo;": "’",
                            "&rsquor;": "’",
                            "&rthree;": "⋌",
                            "&rtimes;": "⋊",
                            "&rtri;": "▹",
                            "&rtrie;": "⊵",
                            "&rtrif;": "▸",
                            "&rtriltri;": "⧎",
                            "&ruluhar;": "⥨",
                            "&rx;": "℞",
                            "&sacute;": "ś",
                            "&sbquo;": "‚",
                            "&sc;": "≻",
                            "&scE;": "⪴",
                            "&scap;": "⪸",
                            "&scaron;": "š",
                            "&sccue;": "≽",
                            "&sce;": "⪰",
                            "&scedil;": "ş",
                            "&scirc;": "ŝ",
                            "&scnE;": "⪶",
                            "&scnap;": "⪺",
                            "&scnsim;": "⋩",
                            "&scpolint;": "⨓",
                            "&scsim;": "≿",
                            "&scy;": "с",
                            "&sdot;": "⋅",
                            "&sdotb;": "⊡",
                            "&sdote;": "⩦",
                            "&seArr;": "⇘",
                            "&searhk;": "⤥",
                            "&searr;": "↘",
                            "&searrow;": "↘",
                            "&sect": "§",
                            "&sect;": "§",
                            "&semi;": ";",
                            "&seswar;": "⤩",
                            "&setminus;": "∖",
                            "&setmn;": "∖",
                            "&sext;": "✶",
                            "&sfr;": "𝔰",
                            "&sfrown;": "⌢",
                            "&sharp;": "♯",
                            "&shchcy;": "щ",
                            "&shcy;": "ш",
                            "&shortmid;": "∣",
                            "&shortparallel;": "∥",
                            "&shy": "­",
                            "&shy;": "­",
                            "&sigma;": "σ",
                            "&sigmaf;": "ς",
                            "&sigmav;": "ς",
                            "&sim;": "∼",
                            "&simdot;": "⩪",
                            "&sime;": "≃",
                            "&simeq;": "≃",
                            "&simg;": "⪞",
                            "&simgE;": "⪠",
                            "&siml;": "⪝",
                            "&simlE;": "⪟",
                            "&simne;": "≆",
                            "&simplus;": "⨤",
                            "&simrarr;": "⥲",
                            "&slarr;": "←",
                            "&smallsetminus;": "∖",
                            "&smashp;": "⨳",
                            "&smeparsl;": "⧤",
                            "&smid;": "∣",
                            "&smile;": "⌣",
                            "&smt;": "⪪",
                            "&smte;": "⪬",
                            "&smtes;": "⪬︀",
                            "&softcy;": "ь",
                            "&sol;": "/",
                            "&solb;": "⧄",
                            "&solbar;": "⌿",
                            "&sopf;": "𝕤",
                            "&spades;": "♠",
                            "&spadesuit;": "♠",
                            "&spar;": "∥",
                            "&sqcap;": "⊓",
                            "&sqcaps;": "⊓︀",
                            "&sqcup;": "⊔",
                            "&sqcups;": "⊔︀",
                            "&sqsub;": "⊏",
                            "&sqsube;": "⊑",
                            "&sqsubset;": "⊏",
                            "&sqsubseteq;": "⊑",
                            "&sqsup;": "⊐",
                            "&sqsupe;": "⊒",
                            "&sqsupset;": "⊐",
                            "&sqsupseteq;": "⊒",
                            "&squ;": "□",
                            "&square;": "□",
                            "&squarf;": "▪",
                            "&squf;": "▪",
                            "&srarr;": "→",
                            "&sscr;": "𝓈",
                            "&ssetmn;": "∖",
                            "&ssmile;": "⌣",
                            "&sstarf;": "⋆",
                            "&star;": "☆",
                            "&starf;": "★",
                            "&straightepsilon;": "ϵ",
                            "&straightphi;": "ϕ",
                            "&strns;": "¯",
                            "&sub;": "⊂",
                            "&subE;": "⫅",
                            "&subdot;": "⪽",
                            "&sube;": "⊆",
                            "&subedot;": "⫃",
                            "&submult;": "⫁",
                            "&subnE;": "⫋",
                            "&subne;": "⊊",
                            "&subplus;": "⪿",
                            "&subrarr;": "⥹",
                            "&subset;": "⊂",
                            "&subseteq;": "⊆",
                            "&subseteqq;": "⫅",
                            "&subsetneq;": "⊊",
                            "&subsetneqq;": "⫋",
                            "&subsim;": "⫇",
                            "&subsub;": "⫕",
                            "&subsup;": "⫓",
                            "&succ;": "≻",
                            "&succapprox;": "⪸",
                            "&succcurlyeq;": "≽",
                            "&succeq;": "⪰",
                            "&succnapprox;": "⪺",
                            "&succneqq;": "⪶",
                            "&succnsim;": "⋩",
                            "&succsim;": "≿",
                            "&sum;": "∑",
                            "&sung;": "♪",
                            "&sup1": "¹",
                            "&sup1;": "¹",
                            "&sup2": "²",
                            "&sup2;": "²",
                            "&sup3": "³",
                            "&sup3;": "³",
                            "&sup;": "⊃",
                            "&supE;": "⫆",
                            "&supdot;": "⪾",
                            "&supdsub;": "⫘",
                            "&supe;": "⊇",
                            "&supedot;": "⫄",
                            "&suphsol;": "⟉",
                            "&suphsub;": "⫗",
                            "&suplarr;": "⥻",
                            "&supmult;": "⫂",
                            "&supnE;": "⫌",
                            "&supne;": "⊋",
                            "&supplus;": "⫀",
                            "&supset;": "⊃",
                            "&supseteq;": "⊇",
                            "&supseteqq;": "⫆",
                            "&supsetneq;": "⊋",
                            "&supsetneqq;": "⫌",
                            "&supsim;": "⫈",
                            "&supsub;": "⫔",
                            "&supsup;": "⫖",
                            "&swArr;": "⇙",
                            "&swarhk;": "⤦",
                            "&swarr;": "↙",
                            "&swarrow;": "↙",
                            "&swnwar;": "⤪",
                            "&szlig": "ß",
                            "&szlig;": "ß",
                            "&target;": "⌖",
                            "&tau;": "τ",
                            "&tbrk;": "⎴",
                            "&tcaron;": "ť",
                            "&tcedil;": "ţ",
                            "&tcy;": "т",
                            "&tdot;": "⃛",
                            "&telrec;": "⌕",
                            "&tfr;": "𝔱",
                            "&there4;": "∴",
                            "&therefore;": "∴",
                            "&theta;": "θ",
                            "&thetasym;": "ϑ",
                            "&thetav;": "ϑ",
                            "&thickapprox;": "≈",
                            "&thicksim;": "∼",
                            "&thinsp;": " ",
                            "&thkap;": "≈",
                            "&thksim;": "∼",
                            "&thorn": "þ",
                            "&thorn;": "þ",
                            "&tilde;": "˜",
                            "&times": "×",
                            "&times;": "×",
                            "&timesb;": "⊠",
                            "&timesbar;": "⨱",
                            "&timesd;": "⨰",
                            "&tint;": "∭",
                            "&toea;": "⤨",
                            "&top;": "⊤",
                            "&topbot;": "⌶",
                            "&topcir;": "⫱",
                            "&topf;": "𝕥",
                            "&topfork;": "⫚",
                            "&tosa;": "⤩",
                            "&tprime;": "‴",
                            "&trade;": "™",
                            "&triangle;": "▵",
                            "&triangledown;": "▿",
                            "&triangleleft;": "◃",
                            "&trianglelefteq;": "⊴",
                            "&triangleq;": "≜",
                            "&triangleright;": "▹",
                            "&trianglerighteq;": "⊵",
                            "&tridot;": "◬",
                            "&trie;": "≜",
                            "&triminus;": "⨺",
                            "&triplus;": "⨹",
                            "&trisb;": "⧍",
                            "&tritime;": "⨻",
                            "&trpezium;": "⏢",
                            "&tscr;": "𝓉",
                            "&tscy;": "ц",
                            "&tshcy;": "ћ",
                            "&tstrok;": "ŧ",
                            "&twixt;": "≬",
                            "&twoheadleftarrow;": "↞",
                            "&twoheadrightarrow;": "↠",
                            "&uArr;": "⇑",
                            "&uHar;": "⥣",
                            "&uacute": "ú",
                            "&uacute;": "ú",
                            "&uarr;": "↑",
                            "&ubrcy;": "ў",
                            "&ubreve;": "ŭ",
                            "&ucirc": "û",
                            "&ucirc;": "û",
                            "&ucy;": "у",
                            "&udarr;": "⇅",
                            "&udblac;": "ű",
                            "&udhar;": "⥮",
                            "&ufisht;": "⥾",
                            "&ufr;": "𝔲",
                            "&ugrave": "ù",
                            "&ugrave;": "ù",
                            "&uharl;": "↿",
                            "&uharr;": "↾",
                            "&uhblk;": "▀",
                            "&ulcorn;": "⌜",
                            "&ulcorner;": "⌜",
                            "&ulcrop;": "⌏",
                            "&ultri;": "◸",
                            "&umacr;": "ū",
                            "&uml": "¨",
                            "&uml;": "¨",
                            "&uogon;": "ų",
                            "&uopf;": "𝕦",
                            "&uparrow;": "↑",
                            "&updownarrow;": "↕",
                            "&upharpoonleft;": "↿",
                            "&upharpoonright;": "↾",
                            "&uplus;": "⊎",
                            "&upsi;": "υ",
                            "&upsih;": "ϒ",
                            "&upsilon;": "υ",
                            "&upuparrows;": "⇈",
                            "&urcorn;": "⌝",
                            "&urcorner;": "⌝",
                            "&urcrop;": "⌎",
                            "&uring;": "ů",
                            "&urtri;": "◹",
                            "&uscr;": "𝓊",
                            "&utdot;": "⋰",
                            "&utilde;": "ũ",
                            "&utri;": "▵",
                            "&utrif;": "▴",
                            "&uuarr;": "⇈",
                            "&uuml": "ü",
                            "&uuml;": "ü",
                            "&uwangle;": "⦧",
                            "&vArr;": "⇕",
                            "&vBar;": "⫨",
                            "&vBarv;": "⫩",
                            "&vDash;": "⊨",
                            "&vangrt;": "⦜",
                            "&varepsilon;": "ϵ",
                            "&varkappa;": "ϰ",
                            "&varnothing;": "∅",
                            "&varphi;": "ϕ",
                            "&varpi;": "ϖ",
                            "&varpropto;": "∝",
                            "&varr;": "↕",
                            "&varrho;": "ϱ",
                            "&varsigma;": "ς",
                            "&varsubsetneq;": "⊊︀",
                            "&varsubsetneqq;": "⫋︀",
                            "&varsupsetneq;": "⊋︀",
                            "&varsupsetneqq;": "⫌︀",
                            "&vartheta;": "ϑ",
                            "&vartriangleleft;": "⊲",
                            "&vartriangleright;": "⊳",
                            "&vcy;": "в",
                            "&vdash;": "⊢",
                            "&vee;": "∨",
                            "&veebar;": "⊻",
                            "&veeeq;": "≚",
                            "&vellip;": "⋮",
                            "&verbar;": "|",
                            "&vert;": "|",
                            "&vfr;": "𝔳",
                            "&vltri;": "⊲",
                            "&vnsub;": "⊂⃒",
                            "&vnsup;": "⊃⃒",
                            "&vopf;": "𝕧",
                            "&vprop;": "∝",
                            "&vrtri;": "⊳",
                            "&vscr;": "𝓋",
                            "&vsubnE;": "⫋︀",
                            "&vsubne;": "⊊︀",
                            "&vsupnE;": "⫌︀",
                            "&vsupne;": "⊋︀",
                            "&vzigzag;": "⦚",
                            "&wcirc;": "ŵ",
                            "&wedbar;": "⩟",
                            "&wedge;": "∧",
                            "&wedgeq;": "≙",
                            "&weierp;": "℘",
                            "&wfr;": "𝔴",
                            "&wopf;": "𝕨",
                            "&wp;": "℘",
                            "&wr;": "≀",
                            "&wreath;": "≀",
                            "&wscr;": "𝓌",
                            "&xcap;": "⋂",
                            "&xcirc;": "◯",
                            "&xcup;": "⋃",
                            "&xdtri;": "▽",
                            "&xfr;": "𝔵",
                            "&xhArr;": "⟺",
                            "&xharr;": "⟷",
                            "&xi;": "ξ",
                            "&xlArr;": "⟸",
                            "&xlarr;": "⟵",
                            "&xmap;": "⟼",
                            "&xnis;": "⋻",
                            "&xodot;": "⨀",
                            "&xopf;": "𝕩",
                            "&xoplus;": "⨁",
                            "&xotime;": "⨂",
                            "&xrArr;": "⟹",
                            "&xrarr;": "⟶",
                            "&xscr;": "𝓍",
                            "&xsqcup;": "⨆",
                            "&xuplus;": "⨄",
                            "&xutri;": "△",
                            "&xvee;": "⋁",
                            "&xwedge;": "⋀",
                            "&yacute": "ý",
                            "&yacute;": "ý",
                            "&yacy;": "я",
                            "&ycirc;": "ŷ",
                            "&ycy;": "ы",
                            "&yen": "¥",
                            "&yen;": "¥",
                            "&yfr;": "𝔶",
                            "&yicy;": "ї",
                            "&yopf;": "𝕪",
                            "&yscr;": "𝓎",
                            "&yucy;": "ю",
                            "&yuml": "ÿ",
                            "&yuml;": "ÿ",
                            "&zacute;": "ź",
                            "&zcaron;": "ž",
                            "&zcy;": "з",
                            "&zdot;": "ż",
                            "&zeetrf;": "ℨ",
                            "&zeta;": "ζ",
                            "&zfr;": "𝔷",
                            "&zhcy;": "ж",
                            "&zigrarr;": "⇝",
                            "&zopf;": "𝕫",
                            "&zscr;": "𝓏",
                            "&zwj;": "‍",
                            "&zwnj;": "‌"
                    },
                    characters: {
                        Æ: "&AElig;",
                            "&": "&amp;",
                            Á: "&Aacute;",
                            Ă: "&Abreve;",
                            Â: "&Acirc;",
                            А: "&Acy;",
                            𝔄: "&Afr;",
                            À: "&Agrave;",
                            Α: "&Alpha;",
                            Ā: "&Amacr;",
                            "⩓": "&And;",
                            Ą: "&Aogon;",
                            𝔸: "&Aopf;",
                            "⁡": "&af;",
                            Å: "&angst;",
                            𝒜: "&Ascr;",
                            "≔": "&coloneq;",
                            Ã: "&Atilde;",
                            Ä: "&Auml;",
                            "∖": "&ssetmn;",
                            "⫧": "&Barv;",
                            "⌆": "&doublebarwedge;",
                            Б: "&Bcy;",
                            "∵": "&because;",
                            ℬ: "&bernou;",
                            Β: "&Beta;",
                            𝔅: "&Bfr;",
                            𝔹: "&Bopf;",
                            "˘": "&breve;",
                            "≎": "&bump;",
                            Ч: "&CHcy;",
                            "©": "&copy;",
                            Ć: "&Cacute;",
                            "⋒": "&Cap;",
                            ⅅ: "&DD;",
                            ℭ: "&Cfr;",
                            Č: "&Ccaron;",
                            Ç: "&Ccedil;",
                            Ĉ: "&Ccirc;",
                            "∰": "&Cconint;",
                            Ċ: "&Cdot;",
                            "¸": "&cedil;",
                            "·": "&middot;",
                            Χ: "&Chi;",
                            "⊙": "&odot;",
                            "⊖": "&ominus;",
                            "⊕": "&oplus;",
                            "⊗": "&otimes;",
                            "∲": "&cwconint;",
                            "”": "&rdquor;",
                            "’": "&rsquor;",
                            "∷": "&Proportion;",
                            "⩴": "&Colone;",
                            "≡": "&equiv;",
                            "∯": "&DoubleContourIntegral;",
                            "∮": "&oint;",
                            ℂ: "&complexes;",
                            "∐": "&coprod;",
                            "∳": "&awconint;",
                            "⨯": "&Cross;",
                            𝒞: "&Cscr;",
                            "⋓": "&Cup;",
                            "≍": "&asympeq;",
                            "⤑": "&DDotrahd;",
                            Ђ: "&DJcy;",
                            Ѕ: "&DScy;",
                            Џ: "&DZcy;",
                            "‡": "&ddagger;",
                            "↡": "&Darr;",
                            "⫤": "&DoubleLeftTee;",
                            Ď: "&Dcaron;",
                            Д: "&Dcy;",
                            "∇": "&nabla;",
                            Δ: "&Delta;",
                            𝔇: "&Dfr;",
                            "´": "&acute;",
                            "˙": "&dot;",
                            "˝": "&dblac;",
                            "`": "&grave;",
                            "˜": "&tilde;",
                            "⋄": "&diamond;",
                            ⅆ: "&dd;",
                            𝔻: "&Dopf;",
                            "¨": "&uml;",
                            "⃜": "&DotDot;",
                            "≐": "&esdot;",
                            "⇓": "&dArr;",
                            "⇐": "&lArr;",
                            "⇔": "&iff;",
                            "⟸": "&xlArr;",
                            "⟺": "&xhArr;",
                            "⟹": "&xrArr;",
                            "⇒": "&rArr;",
                            "⊨": "&vDash;",
                            "⇑": "&uArr;",
                            "⇕": "&vArr;",
                            "∥": "&spar;",
                            "↓": "&downarrow;",
                            "⤓": "&DownArrowBar;",
                            "⇵": "&duarr;",
                            "̑": "&DownBreve;",
                            "⥐": "&DownLeftRightVector;",
                            "⥞": "&DownLeftTeeVector;",
                            "↽": "&lhard;",
                            "⥖": "&DownLeftVectorBar;",
                            "⥟": "&DownRightTeeVector;",
                            "⇁": "&rightharpoondown;",
                            "⥗": "&DownRightVectorBar;",
                            "⊤": "&top;",
                            "↧": "&mapstodown;",
                            𝒟: "&Dscr;",
                            Đ: "&Dstrok;",
                            Ŋ: "&ENG;",
                            Ð: "&ETH;",
                            É: "&Eacute;",
                            Ě: "&Ecaron;",
                            Ê: "&Ecirc;",
                            Э: "&Ecy;",
                            Ė: "&Edot;",
                            𝔈: "&Efr;",
                            È: "&Egrave;",
                            "∈": "&isinv;",
                            Ē: "&Emacr;",
                            "◻": "&EmptySmallSquare;",
                            "▫": "&EmptyVerySmallSquare;",
                            Ę: "&Eogon;",
                            𝔼: "&Eopf;",
                            Ε: "&Epsilon;",
                            "⩵": "&Equal;",
                            "≂": "&esim;",
                            "⇌": "&rlhar;",
                            ℰ: "&expectation;",
                            "⩳": "&Esim;",
                            Η: "&Eta;",
                            Ë: "&Euml;",
                            "∃": "&exist;",
                            ⅇ: "&exponentiale;",
                            Ф: "&Fcy;",
                            𝔉: "&Ffr;",
                            "◼": "&FilledSmallSquare;",
                            "▪": "&squf;",
                            𝔽: "&Fopf;",
                            "∀": "&forall;",
                            ℱ: "&Fscr;",
                            Ѓ: "&GJcy;",
                            ">": "&gt;",
                            Γ: "&Gamma;",
                            Ϝ: "&Gammad;",
                            Ğ: "&Gbreve;",
                            Ģ: "&Gcedil;",
                            Ĝ: "&Gcirc;",
                            Г: "&Gcy;",
                            Ġ: "&Gdot;",
                            𝔊: "&Gfr;",
                            "⋙": "&ggg;",
                            𝔾: "&Gopf;",
                            "≥": "&geq;",
                            "⋛": "&gtreqless;",
                            "≧": "&geqq;",
                            "⪢": "&GreaterGreater;",
                            "≷": "&gtrless;",
                            "⩾": "&ges;",
                            "≳": "&gtrsim;",
                            𝒢: "&Gscr;",
                            "≫": "&gg;",
                            Ъ: "&HARDcy;",
                            ˇ: "&caron;",
                            "^": "&Hat;",
                            Ĥ: "&Hcirc;",
                            ℌ: "&Poincareplane;",
                            ℋ: "&hamilt;",
                            ℍ: "&quaternions;",
                            "─": "&boxh;",
                            Ħ: "&Hstrok;",
                            "≏": "&bumpeq;",
                            Е: "&IEcy;",
                            Ĳ: "&IJlig;",
                            Ё: "&IOcy;",
                            Í: "&Iacute;",
                            Î: "&Icirc;",
                            И: "&Icy;",
                            İ: "&Idot;",
                            ℑ: "&imagpart;",
                            Ì: "&Igrave;",
                            Ī: "&Imacr;",
                            ⅈ: "&ii;",
                            "∬": "&Int;",
                            "∫": "&int;",
                            "⋂": "&xcap;",
                            "⁣": "&ic;",
                            "⁢": "&it;",
                            Į: "&Iogon;",
                            𝕀: "&Iopf;",
                            Ι: "&Iota;",
                            ℐ: "&imagline;",
                            Ĩ: "&Itilde;",
                            І: "&Iukcy;",
                            Ï: "&Iuml;",
                            Ĵ: "&Jcirc;",
                            Й: "&Jcy;",
                            𝔍: "&Jfr;",
                            𝕁: "&Jopf;",
                            𝒥: "&Jscr;",
                            Ј: "&Jsercy;",
                            Є: "&Jukcy;",
                            Х: "&KHcy;",
                            Ќ: "&KJcy;",
                            Κ: "&Kappa;",
                            Ķ: "&Kcedil;",
                            К: "&Kcy;",
                            𝔎: "&Kfr;",
                            𝕂: "&Kopf;",
                            𝒦: "&Kscr;",
                            Љ: "&LJcy;",
                            "<": "&lt;",
                            Ĺ: "&Lacute;",
                            Λ: "&Lambda;",
                            "⟪": "&Lang;",
                            ℒ: "&lagran;",
                            "↞": "&twoheadleftarrow;",
                            Ľ: "&Lcaron;",
                            Ļ: "&Lcedil;",
                            Л: "&Lcy;",
                            "⟨": "&langle;",
                            "←": "&slarr;",
                            "⇤": "&larrb;",
                            "⇆": "&lrarr;",
                            "⌈": "&lceil;",
                            "⟦": "&lobrk;",
                            "⥡": "&LeftDownTeeVector;",
                            "⇃": "&downharpoonleft;",
                            "⥙": "&LeftDownVectorBar;",
                            "⌊": "&lfloor;",
                            "↔": "&leftrightarrow;",
                            "⥎": "&LeftRightVector;",
                            "⊣": "&dashv;",
                            "↤": "&mapstoleft;",
                            "⥚": "&LeftTeeVector;",
                            "⊲": "&vltri;",
                            "⧏": "&LeftTriangleBar;",
                            "⊴": "&trianglelefteq;",
                            "⥑": "&LeftUpDownVector;",
                            "⥠": "&LeftUpTeeVector;",
                            "↿": "&upharpoonleft;",
                            "⥘": "&LeftUpVectorBar;",
                            "↼": "&lharu;",
                            "⥒": "&LeftVectorBar;",
                            "⋚": "&lesseqgtr;",
                            "≦": "&leqq;",
                            "≶": "&lg;",
                            "⪡": "&LessLess;",
                            "⩽": "&les;",
                            "≲": "&lsim;",
                            𝔏: "&Lfr;",
                            "⋘": "&Ll;",
                            "⇚": "&lAarr;",
                            Ŀ: "&Lmidot;",
                            "⟵": "&xlarr;",
                            "⟷": "&xharr;",
                            "⟶": "&xrarr;",
                            𝕃: "&Lopf;",
                            "↙": "&swarrow;",
                            "↘": "&searrow;",
                            "↰": "&lsh;",
                            Ł: "&Lstrok;",
                            "≪": "&ll;",
                            "⤅": "&Map;",
                            М: "&Mcy;",
                            " ": "&MediumSpace;",
                            ℳ: "&phmmat;",
                            𝔐: "&Mfr;",
                            "∓": "&mp;",
                            𝕄: "&Mopf;",
                            Μ: "&Mu;",
                            Њ: "&NJcy;",
                            Ń: "&Nacute;",
                            Ň: "&Ncaron;",
                            Ņ: "&Ncedil;",
                            Н: "&Ncy;",
                            "​": "&ZeroWidthSpace;",
                            "\n": "&NewLine;",
                            𝔑: "&Nfr;",
                            "⁠": "&NoBreak;",
                            " ": "&nbsp;",
                            ℕ: "&naturals;",
                            "⫬": "&Not;",
                            "≢": "&nequiv;",
                            "≭": "&NotCupCap;",
                            "∦": "&nspar;",
                            "∉": "&notinva;",
                            "≠": "&ne;",
                            "≂̸": "&nesim;",
                            "∄": "&nexists;",
                            "≯": "&ngtr;",
                            "≱": "&ngeq;",
                            "≧̸": "&ngeqq;",
                            "≫̸": "&nGtv;",
                            "≹": "&ntgl;",
                            "⩾̸": "&nges;",
                            "≵": "&ngsim;",
                            "≎̸": "&nbump;",
                            "≏̸": "&nbumpe;",
                            "⋪": "&ntriangleleft;",
                            "⧏̸": "&NotLeftTriangleBar;",
                            "⋬": "&ntrianglelefteq;",
                            "≮": "&nlt;",
                            "≰": "&nleq;",
                            "≸": "&ntlg;",
                            "≪̸": "&nLtv;",
                            "⩽̸": "&nles;",
                            "≴": "&nlsim;",
                            "⪢̸": "&NotNestedGreaterGreater;",
                            "⪡̸": "&NotNestedLessLess;",
                            "⊀": "&nprec;",
                            "⪯̸": "&npreceq;",
                            "⋠": "&nprcue;",
                            "∌": "&notniva;",
                            "⋫": "&ntriangleright;",
                            "⧐̸": "&NotRightTriangleBar;",
                            "⋭": "&ntrianglerighteq;",
                            "⊏̸": "&NotSquareSubset;",
                            "⋢": "&nsqsube;",
                            "⊐̸": "&NotSquareSuperset;",
                            "⋣": "&nsqsupe;",
                            "⊂⃒": "&vnsub;",
                            "⊈": "&nsubseteq;",
                            "⊁": "&nsucc;",
                            "⪰̸": "&nsucceq;",
                            "⋡": "&nsccue;",
                            "≿̸": "&NotSucceedsTilde;",
                            "⊃⃒": "&vnsup;",
                            "⊉": "&nsupseteq;",
                            "≁": "&nsim;",
                            "≄": "&nsimeq;",
                            "≇": "&ncong;",
                            "≉": "&napprox;",
                            "∤": "&nsmid;",
                            𝒩: "&Nscr;",
                            Ñ: "&Ntilde;",
                            Ν: "&Nu;",
                            Œ: "&OElig;",
                            Ó: "&Oacute;",
                            Ô: "&Ocirc;",
                            О: "&Ocy;",
                            Ő: "&Odblac;",
                            𝔒: "&Ofr;",
                            Ò: "&Ograve;",
                            Ō: "&Omacr;",
                            Ω: "&ohm;",
                            Ο: "&Omicron;",
                            𝕆: "&Oopf;",
                            "“": "&ldquo;",
                            "‘": "&lsquo;",
                            "⩔": "&Or;",
                            𝒪: "&Oscr;",
                            Ø: "&Oslash;",
                            Õ: "&Otilde;",
                            "⨷": "&Otimes;",
                            Ö: "&Ouml;",
                            "‾": "&oline;",
                            "⏞": "&OverBrace;",
                            "⎴": "&tbrk;",
                            "⏜": "&OverParenthesis;",
                            "∂": "&part;",
                            П: "&Pcy;",
                            𝔓: "&Pfr;",
                            Φ: "&Phi;",
                            Π: "&Pi;",
                            "±": "&pm;",
                            ℙ: "&primes;",
                            "⪻": "&Pr;",
                            "≺": "&prec;",
                            "⪯": "&preceq;",
                            "≼": "&preccurlyeq;",
                            "≾": "&prsim;",
                            "″": "&Prime;",
                            "∏": "&prod;",
                            "∝": "&vprop;",
                            𝒫: "&Pscr;",
                            Ψ: "&Psi;",
                            '"': "&quot;",
                            𝔔: "&Qfr;",
                            ℚ: "&rationals;",
                            𝒬: "&Qscr;",
                            "⤐": "&drbkarow;",
                            "®": "&reg;",
                            Ŕ: "&Racute;",
                            "⟫": "&Rang;",
                            "↠": "&twoheadrightarrow;",
                            "⤖": "&Rarrtl;",
                            Ř: "&Rcaron;",
                            Ŗ: "&Rcedil;",
                            Р: "&Rcy;",
                            ℜ: "&realpart;",
                            "∋": "&niv;",
                            "⇋": "&lrhar;",
                            "⥯": "&duhar;",
                            Ρ: "&Rho;",
                            "⟩": "&rangle;",
                            "→": "&srarr;",
                            "⇥": "&rarrb;",
                            "⇄": "&rlarr;",
                            "⌉": "&rceil;",
                            "⟧": "&robrk;",
                            "⥝": "&RightDownTeeVector;",
                            "⇂": "&downharpoonright;",
                            "⥕": "&RightDownVectorBar;",
                            "⌋": "&rfloor;",
                            "⊢": "&vdash;",
                            "↦": "&mapsto;",
                            "⥛": "&RightTeeVector;",
                            "⊳": "&vrtri;",
                            "⧐": "&RightTriangleBar;",
                            "⊵": "&trianglerighteq;",
                            "⥏": "&RightUpDownVector;",
                            "⥜": "&RightUpTeeVector;",
                            "↾": "&upharpoonright;",
                            "⥔": "&RightUpVectorBar;",
                            "⇀": "&rightharpoonup;",
                            "⥓": "&RightVectorBar;",
                            ℝ: "&reals;",
                            "⥰": "&RoundImplies;",
                            "⇛": "&rAarr;",
                            ℛ: "&realine;",
                            "↱": "&rsh;",
                            "⧴": "&RuleDelayed;",
                            Щ: "&SHCHcy;",
                            Ш: "&SHcy;",
                            Ь: "&SOFTcy;",
                            Ś: "&Sacute;",
                            "⪼": "&Sc;",
                            Š: "&Scaron;",
                            Ş: "&Scedil;",
                            Ŝ: "&Scirc;",
                            С: "&Scy;",
                            𝔖: "&Sfr;",
                            "↑": "&uparrow;",
                            Σ: "&Sigma;",
                            "∘": "&compfn;",
                            𝕊: "&Sopf;",
                            "√": "&radic;",
                            "□": "&square;",
                            "⊓": "&sqcap;",
                            "⊏": "&sqsubset;",
                            "⊑": "&sqsubseteq;",
                            "⊐": "&sqsupset;",
                            "⊒": "&sqsupseteq;",
                            "⊔": "&sqcup;",
                            𝒮: "&Sscr;",
                            "⋆": "&sstarf;",
                            "⋐": "&Subset;",
                            "⊆": "&subseteq;",
                            "≻": "&succ;",
                            "⪰": "&succeq;",
                            "≽": "&succcurlyeq;",
                            "≿": "&succsim;",
                            "∑": "&sum;",
                            "⋑": "&Supset;",
                            "⊃": "&supset;",
                            "⊇": "&supseteq;",
                            Þ: "&THORN;",
                            "™": "&trade;",
                            Ћ: "&TSHcy;",
                            Ц: "&TScy;",
                            "\t": "&Tab;",
                            Τ: "&Tau;",
                            Ť: "&Tcaron;",
                            Ţ: "&Tcedil;",
                            Т: "&Tcy;",
                            𝔗: "&Tfr;",
                            "∴": "&therefore;",
                            Θ: "&Theta;",
                            "  ": "&ThickSpace;",
                            " ": "&thinsp;",
                            "∼": "&thksim;",
                            "≃": "&simeq;",
                            "≅": "&cong;",
                            "≈": "&thkap;",
                            𝕋: "&Topf;",
                            "⃛": "&tdot;",
                            𝒯: "&Tscr;",
                            Ŧ: "&Tstrok;",
                            Ú: "&Uacute;",
                            "↟": "&Uarr;",
                            "⥉": "&Uarrocir;",
                            Ў: "&Ubrcy;",
                            Ŭ: "&Ubreve;",
                            Û: "&Ucirc;",
                            У: "&Ucy;",
                            Ű: "&Udblac;",
                            𝔘: "&Ufr;",
                            Ù: "&Ugrave;",
                            Ū: "&Umacr;",
                            _: "&lowbar;",
                            "⏟": "&UnderBrace;",
                            "⎵": "&bbrk;",
                            "⏝": "&UnderParenthesis;",
                            "⋃": "&xcup;",
                            "⊎": "&uplus;",
                            Ų: "&Uogon;",
                            𝕌: "&Uopf;",
                            "⤒": "&UpArrowBar;",
                            "⇅": "&udarr;",
                            "↕": "&varr;",
                            "⥮": "&udhar;",
                            "⊥": "&perp;",
                            "↥": "&mapstoup;",
                            "↖": "&nwarrow;",
                            "↗": "&nearrow;",
                            ϒ: "&upsih;",
                            Υ: "&Upsilon;",
                            Ů: "&Uring;",
                            𝒰: "&Uscr;",
                            Ũ: "&Utilde;",
                            Ü: "&Uuml;",
                            "⊫": "&VDash;",
                            "⫫": "&Vbar;",
                            В: "&Vcy;",
                            "⊩": "&Vdash;",
                            "⫦": "&Vdashl;",
                            "⋁": "&xvee;",
                            "‖": "&Vert;",
                            "∣": "&smid;",
                            "|": "&vert;",
                            "❘": "&VerticalSeparator;",
                            "≀": "&wreath;",
                            " ": "&hairsp;",
                            𝔙: "&Vfr;",
                            𝕍: "&Vopf;",
                            𝒱: "&Vscr;",
                            "⊪": "&Vvdash;",
                            Ŵ: "&Wcirc;",
                            "⋀": "&xwedge;",
                            𝔚: "&Wfr;",
                            𝕎: "&Wopf;",
                            𝒲: "&Wscr;",
                            𝔛: "&Xfr;",
                            Ξ: "&Xi;",
                            𝕏: "&Xopf;",
                            𝒳: "&Xscr;",
                            Я: "&YAcy;",
                            Ї: "&YIcy;",
                            Ю: "&YUcy;",
                            Ý: "&Yacute;",
                            Ŷ: "&Ycirc;",
                            Ы: "&Ycy;",
                            𝔜: "&Yfr;",
                            𝕐: "&Yopf;",
                            𝒴: "&Yscr;",
                            Ÿ: "&Yuml;",
                            Ж: "&ZHcy;",
                            Ź: "&Zacute;",
                            Ž: "&Zcaron;",
                            З: "&Zcy;",
                            Ż: "&Zdot;",
                            Ζ: "&Zeta;",
                            ℨ: "&zeetrf;",
                            ℤ: "&integers;",
                            𝒵: "&Zscr;",
                            á: "&aacute;",
                            ă: "&abreve;",
                            "∾": "&mstpos;",
                            "∾̳": "&acE;",
                            "∿": "&acd;",
                            â: "&acirc;",
                            а: "&acy;",
                            æ: "&aelig;",
                            𝔞: "&afr;",
                            à: "&agrave;",
                            ℵ: "&aleph;",
                            α: "&alpha;",
                            ā: "&amacr;",
                            "⨿": "&amalg;",
                            "∧": "&wedge;",
                            "⩕": "&andand;",
                            "⩜": "&andd;",
                            "⩘": "&andslope;",
                            "⩚": "&andv;",
                            "∠": "&angle;",
                            "⦤": "&ange;",
                            "∡": "&measuredangle;",
                            "⦨": "&angmsdaa;",
                            "⦩": "&angmsdab;",
                            "⦪": "&angmsdac;",
                            "⦫": "&angmsdad;",
                            "⦬": "&angmsdae;",
                            "⦭": "&angmsdaf;",
                            "⦮": "&angmsdag;",
                            "⦯": "&angmsdah;",
                            "∟": "&angrt;",
                            "⊾": "&angrtvb;",
                            "⦝": "&angrtvbd;",
                            "∢": "&angsph;",
                            "⍼": "&angzarr;",
                            ą: "&aogon;",
                            𝕒: "&aopf;",
                            "⩰": "&apE;",
                            "⩯": "&apacir;",
                            "≊": "&approxeq;",
                            "≋": "&apid;",
                            "'": "&apos;",
                            å: "&aring;",
                            𝒶: "&ascr;",
                            "*": "&midast;",
                            ã: "&atilde;",
                            ä: "&auml;",
                            "⨑": "&awint;",
                            "⫭": "&bNot;",
                            "≌": "&bcong;",
                            "϶": "&bepsi;",
                            "‵": "&bprime;",
                            "∽": "&bsim;",
                            "⋍": "&bsime;",
                            "⊽": "&barvee;",
                            "⌅": "&barwedge;",
                            "⎶": "&bbrktbrk;",
                            б: "&bcy;",
                            "„": "&ldquor;",
                            "⦰": "&bemptyv;",
                            β: "&beta;",
                            ℶ: "&beth;",
                            "≬": "&twixt;",
                            𝔟: "&bfr;",
                            "◯": "&xcirc;",
                            "⨀": "&xodot;",
                            "⨁": "&xoplus;",
                            "⨂": "&xotime;",
                            "⨆": "&xsqcup;",
                            "★": "&starf;",
                            "▽": "&xdtri;",
                            "△": "&xutri;",
                            "⨄": "&xuplus;",
                            "⤍": "&rbarr;",
                            "⧫": "&lozf;",
                            "▴": "&utrif;",
                            "▾": "&dtrif;",
                            "◂": "&ltrif;",
                            "▸": "&rtrif;",
                            "␣": "&blank;",
                            "▒": "&blk12;",
                            "░": "&blk14;",
                            "▓": "&blk34;",
                            "█": "&block;",
                            "=⃥": "&bne;",
                            "≡⃥": "&bnequiv;",
                            "⌐": "&bnot;",
                            𝕓: "&bopf;",
                            "⋈": "&bowtie;",
                            "╗": "&boxDL;",
                            "╔": "&boxDR;",
                            "╖": "&boxDl;",
                            "╓": "&boxDr;",
                            "═": "&boxH;",
                            "╦": "&boxHD;",
                            "╩": "&boxHU;",
                            "╤": "&boxHd;",
                            "╧": "&boxHu;",
                            "╝": "&boxUL;",
                            "╚": "&boxUR;",
                            "╜": "&boxUl;",
                            "╙": "&boxUr;",
                            "║": "&boxV;",
                            "╬": "&boxVH;",
                            "╣": "&boxVL;",
                            "╠": "&boxVR;",
                            "╫": "&boxVh;",
                            "╢": "&boxVl;",
                            "╟": "&boxVr;",
                            "⧉": "&boxbox;",
                            "╕": "&boxdL;",
                            "╒": "&boxdR;",
                            "┐": "&boxdl;",
                            "┌": "&boxdr;",
                            "╥": "&boxhD;",
                            "╨": "&boxhU;",
                            "┬": "&boxhd;",
                            "┴": "&boxhu;",
                            "⊟": "&minusb;",
                            "⊞": "&plusb;",
                            "⊠": "&timesb;",
                            "╛": "&boxuL;",
                            "╘": "&boxuR;",
                            "┘": "&boxul;",
                            "└": "&boxur;",
                            "│": "&boxv;",
                            "╪": "&boxvH;",
                            "╡": "&boxvL;",
                            "╞": "&boxvR;",
                            "┼": "&boxvh;",
                            "┤": "&boxvl;",
                            "├": "&boxvr;",
                            "¦": "&brvbar;",
                            𝒷: "&bscr;",
                            "⁏": "&bsemi;",
                            "\\": "&bsol;",
                            "⧅": "&bsolb;",
                            "⟈": "&bsolhsub;",
                            "•": "&bullet;",
                            "⪮": "&bumpE;",
                            ć: "&cacute;",
                            "∩": "&cap;",
                            "⩄": "&capand;",
                            "⩉": "&capbrcup;",
                            "⩋": "&capcap;",
                            "⩇": "&capcup;",
                            "⩀": "&capdot;",
                            "∩︀": "&caps;",
                            "⁁": "&caret;",
                            "⩍": "&ccaps;",
                            č: "&ccaron;",
                            ç: "&ccedil;",
                            ĉ: "&ccirc;",
                            "⩌": "&ccups;",
                            "⩐": "&ccupssm;",
                            ċ: "&cdot;",
                            "⦲": "&cemptyv;",
                            "¢": "&cent;",
                            𝔠: "&cfr;",
                            ч: "&chcy;",
                            "✓": "&checkmark;",
                            χ: "&chi;",
                            "○": "&cir;",
                            "⧃": "&cirE;",
                            ˆ: "&circ;",
                            "≗": "&cire;",
                            "↺": "&olarr;",
                            "↻": "&orarr;",
                            "Ⓢ": "&oS;",
                            "⊛": "&oast;",
                            "⊚": "&ocir;",
                            "⊝": "&odash;",
                            "⨐": "&cirfnint;",
                            "⫯": "&cirmid;",
                            "⧂": "&cirscir;",
                            "♣": "&clubsuit;",
                            ":": "&colon;",
                            ",": "&comma;",
                            "@": "&commat;",
                            "∁": "&complement;",
                            "⩭": "&congdot;",
                            𝕔: "&copf;",
                            "℗": "&copysr;",
                            "↵": "&crarr;",
                            "✗": "&cross;",
                            𝒸: "&cscr;",
                            "⫏": "&csub;",
                            "⫑": "&csube;",
                            "⫐": "&csup;",
                            "⫒": "&csupe;",
                            "⋯": "&ctdot;",
                            "⤸": "&cudarrl;",
                            "⤵": "&cudarrr;",
                            "⋞": "&curlyeqprec;",
                            "⋟": "&curlyeqsucc;",
                            "↶": "&curvearrowleft;",
                            "⤽": "&cularrp;",
                            "∪": "&cup;",
                            "⩈": "&cupbrcap;",
                            "⩆": "&cupcap;",
                            "⩊": "&cupcup;",
                            "⊍": "&cupdot;",
                            "⩅": "&cupor;",
                            "∪︀": "&cups;",
                            "↷": "&curvearrowright;",
                            "⤼": "&curarrm;",
                            "⋎": "&cuvee;",
                            "⋏": "&cuwed;",
                            "¤": "&curren;",
                            "∱": "&cwint;",
                            "⌭": "&cylcty;",
                            "⥥": "&dHar;",
                            "†": "&dagger;",
                            ℸ: "&daleth;",
                            "‐": "&hyphen;",
                            "⤏": "&rBarr;",
                            ď: "&dcaron;",
                            д: "&dcy;",
                            "⇊": "&downdownarrows;",
                            "⩷": "&eDDot;",
                            "°": "&deg;",
                            δ: "&delta;",
                            "⦱": "&demptyv;",
                            "⥿": "&dfisht;",
                            𝔡: "&dfr;",
                            "♦": "&diams;",
                            ϝ: "&gammad;",
                            "⋲": "&disin;",
                            "÷": "&divide;",
                            "⋇": "&divonx;",
                            ђ: "&djcy;",
                            "⌞": "&llcorner;",
                            "⌍": "&dlcrop;",
                            $: "&dollar;",
                            𝕕: "&dopf;",
                            "≑": "&eDot;",
                            "∸": "&minusd;",
                            "∔": "&plusdo;",
                            "⊡": "&sdotb;",
                            "⌟": "&lrcorner;",
                            "⌌": "&drcrop;",
                            𝒹: "&dscr;",
                            ѕ: "&dscy;",
                            "⧶": "&dsol;",
                            đ: "&dstrok;",
                            "⋱": "&dtdot;",
                            "▿": "&triangledown;",
                            "⦦": "&dwangle;",
                            џ: "&dzcy;",
                            "⟿": "&dzigrarr;",
                            é: "&eacute;",
                            "⩮": "&easter;",
                            ě: "&ecaron;",
                            "≖": "&eqcirc;",
                            ê: "&ecirc;",
                            "≕": "&eqcolon;",
                            э: "&ecy;",
                            ė: "&edot;",
                            "≒": "&fallingdotseq;",
                            𝔢: "&efr;",
                            "⪚": "&eg;",
                            è: "&egrave;",
                            "⪖": "&eqslantgtr;",
                            "⪘": "&egsdot;",
                            "⪙": "&el;",
                            "⏧": "&elinters;",
                            ℓ: "&ell;",
                            "⪕": "&eqslantless;",
                            "⪗": "&elsdot;",
                            ē: "&emacr;",
                            "∅": "&varnothing;",
                            " ": "&emsp13;",
                            " ": "&emsp14;",
                            " ": "&emsp;",
                            ŋ: "&eng;",
                            " ": "&ensp;",
                            ę: "&eogon;",
                            𝕖: "&eopf;",
                            "⋕": "&epar;",
                            "⧣": "&eparsl;",
                            "⩱": "&eplus;",
                            ε: "&epsilon;",
                            ϵ: "&varepsilon;",
                            "=": "&equals;",
                            "≟": "&questeq;",
                            "⩸": "&equivDD;",
                            "⧥": "&eqvparsl;",
                            "≓": "&risingdotseq;",
                            "⥱": "&erarr;",
                            ℯ: "&escr;",
                            η: "&eta;",
                            ð: "&eth;",
                            ë: "&euml;",
                            "€": "&euro;",
                            "!": "&excl;",
                            ф: "&fcy;",
                            "♀": "&female;",
                            ﬃ: "&ffilig;",
                            ﬀ: "&fflig;",
                            ﬄ: "&ffllig;",
                            𝔣: "&ffr;",
                            ﬁ: "&filig;",
                            fj: "&fjlig;",
                            "♭": "&flat;",
                            ﬂ: "&fllig;",
                            "▱": "&fltns;",
                            ƒ: "&fnof;",
                            𝕗: "&fopf;",
                            "⋔": "&pitchfork;",
                            "⫙": "&forkv;",
                            "⨍": "&fpartint;",
                            "½": "&half;",
                            "⅓": "&frac13;",
                            "¼": "&frac14;",
                            "⅕": "&frac15;",
                            "⅙": "&frac16;",
                            "⅛": "&frac18;",
                            "⅔": "&frac23;",
                            "⅖": "&frac25;",
                            "¾": "&frac34;",
                            "⅗": "&frac35;",
                            "⅜": "&frac38;",
                            "⅘": "&frac45;",
                            "⅚": "&frac56;",
                            "⅝": "&frac58;",
                            "⅞": "&frac78;",
                            "⁄": "&frasl;",
                            "⌢": "&sfrown;",
                            𝒻: "&fscr;",
                            "⪌": "&gtreqqless;",
                            ǵ: "&gacute;",
                            γ: "&gamma;",
                            "⪆": "&gtrapprox;",
                            ğ: "&gbreve;",
                            ĝ: "&gcirc;",
                            г: "&gcy;",
                            ġ: "&gdot;",
                            "⪩": "&gescc;",
                            "⪀": "&gesdot;",
                            "⪂": "&gesdoto;",
                            "⪄": "&gesdotol;",
                            "⋛︀": "&gesl;",
                            "⪔": "&gesles;",
                            𝔤: "&gfr;",
                            ℷ: "&gimel;",
                            ѓ: "&gjcy;",
                            "⪒": "&glE;",
                            "⪥": "&gla;",
                            "⪤": "&glj;",
                            "≩": "&gneqq;",
                            "⪊": "&gnapprox;",
                            "⪈": "&gneq;",
                            "⋧": "&gnsim;",
                            𝕘: "&gopf;",
                            ℊ: "&gscr;",
                            "⪎": "&gsime;",
                            "⪐": "&gsiml;",
                            "⪧": "&gtcc;",
                            "⩺": "&gtcir;",
                            "⋗": "&gtrdot;",
                            "⦕": "&gtlPar;",
                            "⩼": "&gtquest;",
                            "⥸": "&gtrarr;",
                            "≩︀": "&gvnE;",
                            ъ: "&hardcy;",
                            "⥈": "&harrcir;",
                            "↭": "&leftrightsquigarrow;",
                            ℏ: "&plankv;",
                            ĥ: "&hcirc;",
                            "♥": "&heartsuit;",
                            "…": "&mldr;",
                            "⊹": "&hercon;",
                            𝔥: "&hfr;",
                            "⤥": "&searhk;",
                            "⤦": "&swarhk;",
                            "⇿": "&hoarr;",
                            "∻": "&homtht;",
                            "↩": "&larrhk;",
                            "↪": "&rarrhk;",
                            𝕙: "&hopf;",
                            "―": "&horbar;",
                            𝒽: "&hscr;",
                            ħ: "&hstrok;",
                            "⁃": "&hybull;",
                            í: "&iacute;",
                            î: "&icirc;",
                            и: "&icy;",
                            е: "&iecy;",
                            "¡": "&iexcl;",
                            𝔦: "&ifr;",
                            ì: "&igrave;",
                            "⨌": "&qint;",
                            "∭": "&tint;",
                            "⧜": "&iinfin;",
                            "℩": "&iiota;",
                            ĳ: "&ijlig;",
                            ī: "&imacr;",
                            ı: "&inodot;",
                            "⊷": "&imof;",
                            Ƶ: "&imped;",
                            "℅": "&incare;",
                            "∞": "&infin;",
                            "⧝": "&infintie;",
                            "⊺": "&intercal;",
                            "⨗": "&intlarhk;",
                            "⨼": "&iprod;",
                            ё: "&iocy;",
                            į: "&iogon;",
                            𝕚: "&iopf;",
                            ι: "&iota;",
                            "¿": "&iquest;",
                            𝒾: "&iscr;",
                            "⋹": "&isinE;",
                            "⋵": "&isindot;",
                            "⋴": "&isins;",
                            "⋳": "&isinsv;",
                            ĩ: "&itilde;",
                            і: "&iukcy;",
                            ï: "&iuml;",
                            ĵ: "&jcirc;",
                            й: "&jcy;",
                            𝔧: "&jfr;",
                            ȷ: "&jmath;",
                            𝕛: "&jopf;",
                            𝒿: "&jscr;",
                            ј: "&jsercy;",
                            є: "&jukcy;",
                            κ: "&kappa;",
                            ϰ: "&varkappa;",
                            ķ: "&kcedil;",
                            к: "&kcy;",
                            𝔨: "&kfr;",
                            ĸ: "&kgreen;",
                            х: "&khcy;",
                            ќ: "&kjcy;",
                            𝕜: "&kopf;",
                            𝓀: "&kscr;",
                            "⤛": "&lAtail;",
                            "⤎": "&lBarr;",
                            "⪋": "&lesseqqgtr;",
                            "⥢": "&lHar;",
                            ĺ: "&lacute;",
                            "⦴": "&laemptyv;",
                            λ: "&lambda;",
                            "⦑": "&langd;",
                            "⪅": "&lessapprox;",
                            "«": "&laquo;",
                            "⤟": "&larrbfs;",
                            "⤝": "&larrfs;",
                            "↫": "&looparrowleft;",
                            "⤹": "&larrpl;",
                            "⥳": "&larrsim;",
                            "↢": "&leftarrowtail;",
                            "⪫": "&lat;",
                            "⤙": "&latail;",
                            "⪭": "&late;",
                            "⪭︀": "&lates;",
                            "⤌": "&lbarr;",
                            "❲": "&lbbrk;",
                            "{": "&lcub;",
                            "[": "&lsqb;",
                            "⦋": "&lbrke;",
                            "⦏": "&lbrksld;",
                            "⦍": "&lbrkslu;",
                            ľ: "&lcaron;",
                            ļ: "&lcedil;",
                            л: "&lcy;",
                            "⤶": "&ldca;",
                            "⥧": "&ldrdhar;",
                            "⥋": "&ldrushar;",
                            "↲": "&ldsh;",
                            "≤": "&leq;",
                            "⇇": "&llarr;",
                            "⋋": "&lthree;",
                            "⪨": "&lescc;",
                            "⩿": "&lesdot;",
                            "⪁": "&lesdoto;",
                            "⪃": "&lesdotor;",
                            "⋚︀": "&lesg;",
                            "⪓": "&lesges;",
                            "⋖": "&ltdot;",
                            "⥼": "&lfisht;",
                            𝔩: "&lfr;",
                            "⪑": "&lgE;",
                            "⥪": "&lharul;",
                            "▄": "&lhblk;",
                            љ: "&ljcy;",
                            "⥫": "&llhard;",
                            "◺": "&lltri;",
                            ŀ: "&lmidot;",
                            "⎰": "&lmoustache;",
                            "≨": "&lneqq;",
                            "⪉": "&lnapprox;",
                            "⪇": "&lneq;",
                            "⋦": "&lnsim;",
                            "⟬": "&loang;",
                            "⇽": "&loarr;",
                            "⟼": "&xmap;",
                            "↬": "&rarrlp;",
                            "⦅": "&lopar;",
                            𝕝: "&lopf;",
                            "⨭": "&loplus;",
                            "⨴": "&lotimes;",
                            "∗": "&lowast;",
                            "◊": "&lozenge;",
                            "(": "&lpar;",
                            "⦓": "&lparlt;",
                            "⥭": "&lrhard;",
                            "‎": "&lrm;",
                            "⊿": "&lrtri;",
                            "‹": "&lsaquo;",
                            𝓁: "&lscr;",
                            "⪍": "&lsime;",
                            "⪏": "&lsimg;",
                            "‚": "&sbquo;",
                            ł: "&lstrok;",
                            "⪦": "&ltcc;",
                            "⩹": "&ltcir;",
                            "⋉": "&ltimes;",
                            "⥶": "&ltlarr;",
                            "⩻": "&ltquest;",
                            "⦖": "&ltrPar;",
                            "◃": "&triangleleft;",
                            "⥊": "&lurdshar;",
                            "⥦": "&luruhar;",
                            "≨︀": "&lvnE;",
                            "∺": "&mDDot;",
                            "¯": "&strns;",
                            "♂": "&male;",
                            "✠": "&maltese;",
                            "▮": "&marker;",
                            "⨩": "&mcomma;",
                            м: "&mcy;",
                            "—": "&mdash;",
                            𝔪: "&mfr;",
                            "℧": "&mho;",
                            µ: "&micro;",
                            "⫰": "&midcir;",
                            "−": "&minus;",
                            "⨪": "&minusdu;",
                            "⫛": "&mlcp;",
                            "⊧": "&models;",
                            𝕞: "&mopf;",
                            𝓂: "&mscr;",
                            μ: "&mu;",
                            "⊸": "&mumap;",
                            "⋙̸": "&nGg;",
                            "≫⃒": "&nGt;",
                            "⇍": "&nlArr;",
                            "⇎": "&nhArr;",
                            "⋘̸": "&nLl;",
                            "≪⃒": "&nLt;",
                            "⇏": "&nrArr;",
                            "⊯": "&nVDash;",
                            "⊮": "&nVdash;",
                            ń: "&nacute;",
                            "∠⃒": "&nang;",
                            "⩰̸": "&napE;",
                            "≋̸": "&napid;",
                            ŉ: "&napos;",
                            "♮": "&natural;",
                            "⩃": "&ncap;",
                            ň: "&ncaron;",
                            ņ: "&ncedil;",
                            "⩭̸": "&ncongdot;",
                            "⩂": "&ncup;",
                            н: "&ncy;",
                            "–": "&ndash;",
                            "⇗": "&neArr;",
                            "⤤": "&nearhk;",
                            "≐̸": "&nedot;",
                            "⤨": "&toea;",
                            𝔫: "&nfr;",
                            "↮": "&nleftrightarrow;",
                            "⫲": "&nhpar;",
                            "⋼": "&nis;",
                            "⋺": "&nisd;",
                            њ: "&njcy;",
                            "≦̸": "&nleqq;",
                            "↚": "&nleftarrow;",
                            "‥": "&nldr;",
                            𝕟: "&nopf;",
                            "¬": "&not;",
                            "⋹̸": "&notinE;",
                            "⋵̸": "&notindot;",
                            "⋷": "&notinvb;",
                            "⋶": "&notinvc;",
                            "⋾": "&notnivb;",
                            "⋽": "&notnivc;",
                            "⫽⃥": "&nparsl;",
                            "∂̸": "&npart;",
                            "⨔": "&npolint;",
                            "↛": "&nrightarrow;",
                            "⤳̸": "&nrarrc;",
                            "↝̸": "&nrarrw;",
                            𝓃: "&nscr;",
                            "⊄": "&nsub;",
                            "⫅̸": "&nsubseteqq;",
                            "⊅": "&nsup;",
                            "⫆̸": "&nsupseteqq;",
                            ñ: "&ntilde;",
                            ν: "&nu;",
                            "#": "&num;",
                            "№": "&numero;",
                            " ": "&numsp;",
                            "⊭": "&nvDash;",
                            "⤄": "&nvHarr;",
                            "≍⃒": "&nvap;",
                            "⊬": "&nvdash;",
                            "≥⃒": "&nvge;",
                            ">⃒": "&nvgt;",
                            "⧞": "&nvinfin;",
                            "⤂": "&nvlArr;",
                            "≤⃒": "&nvle;",
                            "<⃒": "&nvlt;",
                            "⊴⃒": "&nvltrie;",
                            "⤃": "&nvrArr;",
                            "⊵⃒": "&nvrtrie;",
                            "∼⃒": "&nvsim;",
                            "⇖": "&nwArr;",
                            "⤣": "&nwarhk;",
                            "⤧": "&nwnear;",
                            ó: "&oacute;",
                            ô: "&ocirc;",
                            о: "&ocy;",
                            ő: "&odblac;",
                            "⨸": "&odiv;",
                            "⦼": "&odsold;",
                            œ: "&oelig;",
                            "⦿": "&ofcir;",
                            𝔬: "&ofr;",
                            "˛": "&ogon;",
                            ò: "&ograve;",
                            "⧁": "&ogt;",
                            "⦵": "&ohbar;",
                            "⦾": "&olcir;",
                            "⦻": "&olcross;",
                            "⧀": "&olt;",
                            ō: "&omacr;",
                            ω: "&omega;",
                            ο: "&omicron;",
                            "⦶": "&omid;",
                            𝕠: "&oopf;",
                            "⦷": "&opar;",
                            "⦹": "&operp;",
                            "∨": "&vee;",
                            "⩝": "&ord;",
                            ℴ: "&oscr;",
                            ª: "&ordf;",
                            º: "&ordm;",
                            "⊶": "&origof;",
                            "⩖": "&oror;",
                            "⩗": "&orslope;",
                            "⩛": "&orv;",
                            ø: "&oslash;",
                            "⊘": "&osol;",
                            õ: "&otilde;",
                            "⨶": "&otimesas;",
                            ö: "&ouml;",
                            "⌽": "&ovbar;",
                            "¶": "&para;",
                            "⫳": "&parsim;",
                            "⫽": "&parsl;",
                            п: "&pcy;",
                            "%": "&percnt;",
                            ".": "&period;",
                            "‰": "&permil;",
                            "‱": "&pertenk;",
                            𝔭: "&pfr;",
                            φ: "&phi;",
                            ϕ: "&varphi;",
                            "☎": "&phone;",
                            π: "&pi;",
                            ϖ: "&varpi;",
                            ℎ: "&planckh;",
                            "+": "&plus;",
                            "⨣": "&plusacir;",
                            "⨢": "&pluscir;",
                            "⨥": "&plusdu;",
                            "⩲": "&pluse;",
                            "⨦": "&plussim;",
                            "⨧": "&plustwo;",
                            "⨕": "&pointint;",
                            𝕡: "&popf;",
                            "£": "&pound;",
                            "⪳": "&prE;",
                            "⪷": "&precapprox;",
                            "⪹": "&prnap;",
                            "⪵": "&prnE;",
                            "⋨": "&prnsim;",
                            "′": "&prime;",
                            "⌮": "&profalar;",
                            "⌒": "&profline;",
                            "⌓": "&profsurf;",
                            "⊰": "&prurel;",
                            𝓅: "&pscr;",
                            ψ: "&psi;",
                            " ": "&puncsp;",
                            𝔮: "&qfr;",
                            𝕢: "&qopf;",
                            "⁗": "&qprime;",
                            𝓆: "&qscr;",
                            "⨖": "&quatint;",
                            "?": "&quest;",
                            "⤜": "&rAtail;",
                            "⥤": "&rHar;",
                            "∽̱": "&race;",
                            ŕ: "&racute;",
                            "⦳": "&raemptyv;",
                            "⦒": "&rangd;",
                            "⦥": "&range;",
                            "»": "&raquo;",
                            "⥵": "&rarrap;",
                            "⤠": "&rarrbfs;",
                            "⤳": "&rarrc;",
                            "⤞": "&rarrfs;",
                            "⥅": "&rarrpl;",
                            "⥴": "&rarrsim;",
                            "↣": "&rightarrowtail;",
                            "↝": "&rightsquigarrow;",
                            "⤚": "&ratail;",
                            "∶": "&ratio;",
                            "❳": "&rbbrk;",
                            "}": "&rcub;",
                            "]": "&rsqb;",
                            "⦌": "&rbrke;",
                            "⦎": "&rbrksld;",
                            "⦐": "&rbrkslu;",
                            ř: "&rcaron;",
                            ŗ: "&rcedil;",
                            р: "&rcy;",
                            "⤷": "&rdca;",
                            "⥩": "&rdldhar;",
                            "↳": "&rdsh;",
                            "▭": "&rect;",
                            "⥽": "&rfisht;",
                            𝔯: "&rfr;",
                            "⥬": "&rharul;",
                            ρ: "&rho;",
                            ϱ: "&varrho;",
                            "⇉": "&rrarr;",
                            "⋌": "&rthree;",
                            "˚": "&ring;",
                            "‏": "&rlm;",
                            "⎱": "&rmoustache;",
                            "⫮": "&rnmid;",
                            "⟭": "&roang;",
                            "⇾": "&roarr;",
                            "⦆": "&ropar;",
                            𝕣: "&ropf;",
                            "⨮": "&roplus;",
                            "⨵": "&rotimes;",
                            ")": "&rpar;",
                            "⦔": "&rpargt;",
                            "⨒": "&rppolint;",
                            "›": "&rsaquo;",
                            𝓇: "&rscr;",
                            "⋊": "&rtimes;",
                            "▹": "&triangleright;",
                            "⧎": "&rtriltri;",
                            "⥨": "&ruluhar;",
                            "℞": "&rx;",
                            ś: "&sacute;",
                            "⪴": "&scE;",
                            "⪸": "&succapprox;",
                            š: "&scaron;",
                            ş: "&scedil;",
                            ŝ: "&scirc;",
                            "⪶": "&succneqq;",
                            "⪺": "&succnapprox;",
                            "⋩": "&succnsim;",
                            "⨓": "&scpolint;",
                            с: "&scy;",
                            "⋅": "&sdot;",
                            "⩦": "&sdote;",
                            "⇘": "&seArr;",
                            "§": "&sect;",
                            ";": "&semi;",
                            "⤩": "&tosa;",
                            "✶": "&sext;",
                            𝔰: "&sfr;",
                            "♯": "&sharp;",
                            щ: "&shchcy;",
                            ш: "&shcy;",
                            "­": "&shy;",
                            σ: "&sigma;",
                            ς: "&varsigma;",
                            "⩪": "&simdot;",
                            "⪞": "&simg;",
                            "⪠": "&simgE;",
                            "⪝": "&siml;",
                            "⪟": "&simlE;",
                            "≆": "&simne;",
                            "⨤": "&simplus;",
                            "⥲": "&simrarr;",
                            "⨳": "&smashp;",
                            "⧤": "&smeparsl;",
                            "⌣": "&ssmile;",
                            "⪪": "&smt;",
                            "⪬": "&smte;",
                            "⪬︀": "&smtes;",
                            ь: "&softcy;",
                            "/": "&sol;",
                            "⧄": "&solb;",
                            "⌿": "&solbar;",
                            𝕤: "&sopf;",
                            "♠": "&spadesuit;",
                            "⊓︀": "&sqcaps;",
                            "⊔︀": "&sqcups;",
                            𝓈: "&sscr;",
                            "☆": "&star;",
                            "⊂": "&subset;",
                            "⫅": "&subseteqq;",
                            "⪽": "&subdot;",
                            "⫃": "&subedot;",
                            "⫁": "&submult;",
                            "⫋": "&subsetneqq;",
                            "⊊": "&subsetneq;",
                            "⪿": "&subplus;",
                            "⥹": "&subrarr;",
                            "⫇": "&subsim;",
                            "⫕": "&subsub;",
                            "⫓": "&subsup;",
                            "♪": "&sung;",
                            "¹": "&sup1;",
                            "²": "&sup2;",
                            "³": "&sup3;",
                            "⫆": "&supseteqq;",
                            "⪾": "&supdot;",
                            "⫘": "&supdsub;",
                            "⫄": "&supedot;",
                            "⟉": "&suphsol;",
                            "⫗": "&suphsub;",
                            "⥻": "&suplarr;",
                            "⫂": "&supmult;",
                            "⫌": "&supsetneqq;",
                            "⊋": "&supsetneq;",
                            "⫀": "&supplus;",
                            "⫈": "&supsim;",
                            "⫔": "&supsub;",
                            "⫖": "&supsup;",
                            "⇙": "&swArr;",
                            "⤪": "&swnwar;",
                            ß: "&szlig;",
                            "⌖": "&target;",
                            τ: "&tau;",
                            ť: "&tcaron;",
                            ţ: "&tcedil;",
                            т: "&tcy;",
                            "⌕": "&telrec;",
                            𝔱: "&tfr;",
                            θ: "&theta;",
                            ϑ: "&vartheta;",
                            þ: "&thorn;",
                            "×": "&times;",
                            "⨱": "&timesbar;",
                            "⨰": "&timesd;",
                            "⌶": "&topbot;",
                            "⫱": "&topcir;",
                            𝕥: "&topf;",
                            "⫚": "&topfork;",
                            "‴": "&tprime;",
                            "▵": "&utri;",
                            "≜": "&trie;",
                            "◬": "&tridot;",
                            "⨺": "&triminus;",
                            "⨹": "&triplus;",
                            "⧍": "&trisb;",
                            "⨻": "&tritime;",
                            "⏢": "&trpezium;",
                            𝓉: "&tscr;",
                            ц: "&tscy;",
                            ћ: "&tshcy;",
                            ŧ: "&tstrok;",
                            "⥣": "&uHar;",
                            ú: "&uacute;",
                            ў: "&ubrcy;",
                            ŭ: "&ubreve;",
                            û: "&ucirc;",
                            у: "&ucy;",
                            ű: "&udblac;",
                            "⥾": "&ufisht;",
                            𝔲: "&ufr;",
                            ù: "&ugrave;",
                            "▀": "&uhblk;",
                            "⌜": "&ulcorner;",
                            "⌏": "&ulcrop;",
                            "◸": "&ultri;",
                            ū: "&umacr;",
                            ų: "&uogon;",
                            𝕦: "&uopf;",
                            υ: "&upsilon;",
                            "⇈": "&uuarr;",
                            "⌝": "&urcorner;",
                            "⌎": "&urcrop;",
                            ů: "&uring;",
                            "◹": "&urtri;",
                            𝓊: "&uscr;",
                            "⋰": "&utdot;",
                            ũ: "&utilde;",
                            ü: "&uuml;",
                            "⦧": "&uwangle;",
                            "⫨": "&vBar;",
                            "⫩": "&vBarv;",
                            "⦜": "&vangrt;",
                            "⊊︀": "&vsubne;",
                            "⫋︀": "&vsubnE;",
                            "⊋︀": "&vsupne;",
                            "⫌︀": "&vsupnE;",
                            в: "&vcy;",
                            "⊻": "&veebar;",
                            "≚": "&veeeq;",
                            "⋮": "&vellip;",
                            𝔳: "&vfr;",
                            𝕧: "&vopf;",
                            𝓋: "&vscr;",
                            "⦚": "&vzigzag;",
                            ŵ: "&wcirc;",
                            "⩟": "&wedbar;",
                            "≙": "&wedgeq;",
                        ℘: "&wp;",
                            𝔴: "&wfr;",
                            𝕨: "&wopf;",
                            𝓌: "&wscr;",
                            𝔵: "&xfr;",
                            ξ: "&xi;",
                            "⋻": "&xnis;",
                            𝕩: "&xopf;",
                            𝓍: "&xscr;",
                            ý: "&yacute;",
                            я: "&yacy;",
                            ŷ: "&ycirc;",
                            ы: "&ycy;",
                            "¥": "&yen;",
                            𝔶: "&yfr;",
                            ї: "&yicy;",
                            𝕪: "&yopf;",
                            𝓎: "&yscr;",
                            ю: "&yucy;",
                            ÿ: "&yuml;",
                            ź: "&zacute;",
                            ž: "&zcaron;",
                            з: "&zcy;",
                            ż: "&zdot;",
                            ζ: "&zeta;",
                            𝔷: "&zfr;",
                            ж: "&zhcy;",
                            "⇝": "&zigrarr;",
                            𝕫: "&zopf;",
                            𝓏: "&zscr;",
                            "‍": "&zwj;",
                            "‌": "&zwnj;"
                    }
                }
            }
            }
            ,
            762: (e, r) => {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }),
                    r.numericUnicodeMap = {
                        0: 65533,
                        128: 8364,
                        130: 8218,
                        131: 402,
                        132: 8222,
                        133: 8230,
                        134: 8224,
                        135: 8225,
                        136: 710,
                        137: 8240,
                        138: 352,
                        139: 8249,
                        140: 338,
                        142: 381,
                        145: 8216,
                        146: 8217,
                        147: 8220,
                        148: 8221,
                        149: 8226,
                        150: 8211,
                        151: 8212,
                        152: 732,
                        153: 8482,
                        154: 353,
                        155: 8250,
                        156: 339,
                        158: 382,
                        159: 376
                    }
            }
            ,
            826: (e, r) => {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }),
                    r.fromCodePoint = String.fromCodePoint || function(e) {
                        return String.fromCharCode(Math.floor((e - 65536) / 1024) + 55296, (e - 65536) % 1024 + 56320)
                    }
                    ,
                    r.getCodePoint = String.prototype.codePointAt ? function(e, r) {
                            return e.codePointAt(r)
                        }
                        : function(e, r) {
                            return 1024 * (e.charCodeAt(r) - 55296) + e.charCodeAt(r + 1) - 56320 + 65536
                        }
                    ,
                    r.highSurrogateFrom = 55296,
                    r.highSurrogateTo = 56319
            }
            ,
            511: (e, r, t) => {
                "use strict";
                var n = t(72)
                    , o = t.n(n)
                    , a = t(825)
                    , i = t.n(a)
                    , s = t(659)
                    , c = t.n(s)
                    , l = t(56)
                    , u = t.n(l)
                    , d = t(540)
                    , p = t.n(d)
                    , f = t(113)
                    , g = t.n(f)
                    , h = t(208)
                    , m = {};
                m.styleTagTransform = g(),
                    m.setAttributes = u(),
                    m.insert = c().bind(null, "head"),
                    m.domAPI = i(),
                    m.insertStyleElement = p();
                var y = o()(h.default, m);
                if (!h.default.locals || e.hot.invalidate) {
                    var b = !h.default.locals
                        , v = b ? h : h.default.locals;
                    e.hot.accept(208, (r => {
                            h = t(208),
                                function(e, r, t) {
                                    if (!e && r || e && !r)
                                        return !1;
                                    var n;
                                    for (n in e)
                                        if ((!t || "default" !== n) && e[n] !== r[n])
                                            return !1;
                                    for (n in r)
                                        if (!(t && "default" === n || e[n]))
                                            return !1;
                                    return !0
                                }(v, b ? h : h.default.locals, b) ? (v = b ? h : h.default.locals,
                                    y(h.default)) : e.hot.invalidate()
                        }
                    ))
                }
                e.hot.dispose((function() {
                        y()
                    }
                )),
                h.default && h.default.locals && h.default.locals
            }
            ,
            72: e => {
                "use strict";
                var r = [];
                function t(e) {
                    for (var t = -1, n = 0; n < r.length; n++)
                        if (r[n].identifier === e) {
                            t = n;
                            break
                        }
                    return t
                }
                function n(e, n) {
                    for (var a = {}, i = [], s = 0; s < e.length; s++) {
                        var c = e[s]
                            , l = n.base ? c[0] + n.base : c[0]
                            , u = a[l] || 0
                            , d = "".concat(l, " ").concat(u);
                        a[l] = u + 1;
                        var p = t(d)
                            , f = {
                            css: c[1],
                            media: c[2],
                            sourceMap: c[3],
                            supports: c[4],
                            layer: c[5]
                        };
                        if (-1 !== p)
                            r[p].references++,
                                r[p].updater(f);
                        else {
                            var g = o(f, n);
                            n.byIndex = s,
                                r.splice(s, 0, {
                                    identifier: d,
                                    updater: g,
                                    references: 1
                                })
                        }
                        i.push(d)
                    }
                    return i
                }
                function o(e, r) {
                    var t = r.domAPI(r);
                    return t.update(e),
                        function(r) {
                            if (r) {
                                if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap && r.supports === e.supports && r.layer === e.layer)
                                    return;
                                t.update(e = r)
                            } else
                                t.remove()
                        }
                }
                e.exports = function(e, o) {
                    var a = n(e = e || [], o = o || {});
                    return function(e) {
                        e = e || [];
                        for (var i = 0; i < a.length; i++) {
                            var s = t(a[i]);
                            r[s].references--
                        }
                        for (var c = n(e, o), l = 0; l < a.length; l++) {
                            var u = t(a[l]);
                            0 === r[u].references && (r[u].updater(),
                                r.splice(u, 1))
                        }
                        a = c
                    }
                }
            }
            ,
            659: e => {
                "use strict";
                var r = {};
                e.exports = function(e, t) {
                    var n = function(e) {
                        if (void 0 === r[e]) {
                            var t = document.querySelector(e);
                            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement)
                                try {
                                    t = t.contentDocument.head
                                } catch (e) {
                                    t = null
                                }
                            r[e] = t
                        }
                        return r[e]
                    }(e);
                    if (!n)
                        throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    n.appendChild(t)
                }
            }
            ,
            540: e => {
                "use strict";
                e.exports = function(e) {
                    var r = document.createElement("style");
                    return e.setAttributes(r, e.attributes),
                        e.insert(r, e.options),
                        r
                }
            }
            ,
            56: (e, r, t) => {
                "use strict";
                e.exports = function(e) {
                    var r = t.nc;
                    r && e.setAttribute("nonce", r)
                }
            }
            ,
            825: e => {
                "use strict";
                e.exports = function(e) {
                    if ("undefined" == typeof document)
                        return {
                            update: function() {},
                            remove: function() {}
                        };
                    var r = e.insertStyleElement(e);
                    return {
                        update: function(t) {
                            !function(e, r, t) {
                                var n = "";
                                t.supports && (n += "@supports (".concat(t.supports, ") {")),
                                t.media && (n += "@media ".concat(t.media, " {"));
                                var o = void 0 !== t.layer;
                                o && (n += "@layer".concat(t.layer.length > 0 ? " ".concat(t.layer) : "", " {")),
                                    n += t.css,
                                o && (n += "}"),
                                t.media && (n += "}"),
                                t.supports && (n += "}");
                                var a = t.sourceMap;
                                a && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")),
                                    r.styleTagTransform(n, e, r.options)
                            }(r, e, t)
                        },
                        remove: function() {
                            !function(e) {
                                if (null === e.parentNode)
                                    return !1;
                                e.parentNode.removeChild(e)
                            }(r)
                        }
                    }
                }
            }
            ,
            113: e => {
                "use strict";
                e.exports = function(e, r) {
                    if (r.styleSheet)
                        r.styleSheet.cssText = e;
                    else {
                        for (; r.firstChild; )
                            r.removeChild(r.firstChild);
                        r.appendChild(document.createTextNode(e))
                    }
                }
            }
            ,
            927: (e, r, t) => {
                "use strict";
                t.r(r),
                    t.d(r, {
                        default: () => i
                    });
                var n = t(984);
                function o(e, r) {
                    for (var t = 0; t < r.length; t++) {
                        var n = r[t];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                        "value"in n && (n.writable = !0),
                            Object.defineProperty(e, a(n.key), n)
                    }
                }
                function a(e) {
                    var r = function(e, r) {
                        if ("object" != typeof e || !e)
                            return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var n = t.call(e, "string");
                            if ("object" != typeof n)
                                return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == typeof r ? r : r + ""
                }
                var i = function() {
                    return e = function e(r) {
                        !function(e, r) {
                            if (!(e instanceof r))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, e),
                            this.client = new WebSocket(r),
                            this.client.onerror = function(e) {
                                n.Rm.error(e)
                            }
                    }
                        ,
                        r = [{
                            key: "onOpen",
                            value: function(e) {
                                this.client.onopen = e
                            }
                        }, {
                            key: "onClose",
                            value: function(e) {
                                this.client.onclose = e
                            }
                        }, {
                            key: "onMessage",
                            value: function(e) {
                                this.client.onmessage = function(r) {
                                    e(r.data)
                                }
                            }
                        }],
                    r && o(e.prototype, r),
                        Object.defineProperty(e, "prototype", {
                            writable: !1
                        }),
                        e;
                    var e, r
                }()
            }
            ,
            274: (e, r, t) => {
                "use strict";
                var n = t(922)
                    , o = t.n(n)
                    , a = new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");
                const i = function(e) {
                    if ("string" != typeof e)
                        throw new TypeError("Expected a `string`, got `".concat(typeof e, "`"));
                    return e.replace(a, "")
                };
                var s = t(927)
                    , c = t(984)
                    , l = t(927)
                    , u = void 0 !== l ? void 0 !== l.default ? l.default : l : s.default
                    , d = 0
                    , p = 10
                    , f = null
                    , g = function(e, r, t) {
                    (f = new u(e)).onOpen((function() {
                            d = 0,
                            void 0 !== t && (p = t)
                        }
                    )),
                        f.onClose((function() {
                                if (0 === d && r.close(),
                                    f = null,
                                d < p) {
                                    var n = 1e3 * Math.pow(2, d) + 100 * Math.random();
                                    d += 1,
                                        c.Rm.info("Trying to reconnect..."),
                                        setTimeout((function() {
                                                g(e, r, t)
                                            }
                                        ), n)
                                }
                            }
                        )),
                        f.onMessage((function(e) {
                                var t = JSON.parse(e);
                                r[t.type] && r[t.type](t.data, t.params)
                            }
                        ))
                };
                const h = g;
                var m = t(352)
                    , y = t.n(m)
                    , b = t(376);
                function v(e) {
                    if (!(e && e instanceof Error))
                        throw new Error("parseErrorToStacks expects Error object");
                    if ("string" == typeof e.stack)
                        return e.stack.split("\n").filter((function(r) {
                                return r !== "Error: ".concat(e.message)
                            }
                        ))
                }
                function w(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                                return Object.getOwnPropertyDescriptor(e, r).enumerable
                            }
                        ))),
                            t.push.apply(t, n)
                    }
                    return t
                }
                function x(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {};
                        r % 2 ? w(Object(t), !0).forEach((function(r) {
                                E(e, r, t[r])
                            }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach((function(r) {
                                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                            }
                        ))
                    }
                    return e
                }
                function E(e, r, t) {
                    return (r = function(e) {
                        var r = function(e, r) {
                            if ("object" != typeof e || !e)
                                return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var n = t.call(e, "string");
                                if ("object" != typeof n)
                                    return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(e);
                        return "symbol" == typeof r ? r : r + ""
                    }(r))in e ? Object.defineProperty(e, r, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[r] = t,
                        e
                }
                const q = function(e) {
                    var r, t, n, o, a, i, s, c, l = e.hideOverlay, u = e.showOverlay;
                    return t = {
                        actions: {
                            dismissMessages: function() {
                                return {
                                    messages: [],
                                    level: "error",
                                    messageSource: "build"
                                }
                            },
                            appendMessages: function(e, r) {
                                return {
                                    messages: e.messages.concat(r.messages),
                                    level: r.level || e.level,
                                    messageSource: "RUNTIME_ERROR" === r.type ? "runtime" : "build"
                                }
                            },
                            setMessages: function(e, r) {
                                return {
                                    messages: r.messages,
                                    level: r.level || e.level,
                                    messageSource: "RUNTIME_ERROR" === r.type ? "runtime" : "build"
                                }
                            },
                            hideOverlay: l,
                            showOverlay: u
                        }
                    },
                        n = (r = {
                            initial: "hidden",
                            context: {
                                level: "error",
                                messages: [],
                                messageSource: "build"
                            },
                            states: {
                                hidden: {
                                    on: {
                                        BUILD_ERROR: {
                                            target: "displayBuildError",
                                            actions: ["setMessages", "showOverlay"]
                                        },
                                        RUNTIME_ERROR: {
                                            target: "displayRuntimeError",
                                            actions: ["setMessages", "showOverlay"]
                                        }
                                    }
                                },
                                displayBuildError: {
                                    on: {
                                        DISMISS: {
                                            target: "hidden",
                                            actions: ["dismissMessages", "hideOverlay"]
                                        },
                                        BUILD_ERROR: {
                                            target: "displayBuildError",
                                            actions: ["appendMessages", "showOverlay"]
                                        }
                                    }
                                },
                                displayRuntimeError: {
                                    on: {
                                        DISMISS: {
                                            target: "hidden",
                                            actions: ["dismissMessages", "hideOverlay"]
                                        },
                                        RUNTIME_ERROR: {
                                            target: "displayRuntimeError",
                                            actions: ["appendMessages", "showOverlay"]
                                        },
                                        BUILD_ERROR: {
                                            target: "displayBuildError",
                                            actions: ["setMessages", "showOverlay"]
                                        }
                                    }
                                }
                            }
                        }).states,
                        o = r.context,
                        a = r.initial,
                        i = t.actions,
                        s = a,
                        c = o,
                        {
                            send: function(e) {
                                var r = n[s].on
                                    , t = r && r[e.type];
                                t && (s = t.target,
                                t.actions && t.actions.forEach((function(r) {
                                        var t = i[r]
                                            , n = t && t(c, e);
                                        n && (c = x(x({}, c), n))
                                    }
                                )))
                            }
                        }
                };
                var k = {
                    error: {
                        backgroundColor: "rgba(206, 17, 38, 0.1)",
                        color: "#fccfcf"
                    },
                    warning: {
                        backgroundColor: "rgba(251, 245, 180, 0.1)",
                        color: "#fbf5b4"
                    }
                }
                    , S = {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: "100vw",
                    height: "100vh",
                    border: "none",
                    "z-index": 9999999999
                }
                    , A = {
                    position: "fixed",
                    boxSizing: "border-box",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: "100vw",
                    height: "100vh",
                    fontSize: "large",
                    padding: "2rem 2rem 4rem 2rem",
                    lineHeight: "1.2",
                    whiteSpace: "pre-wrap",
                    overflow: "auto",
                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                    color: "white"
                }
                    , O = {
                    color: "#e83b46",
                    fontSize: "2em",
                    whiteSpace: "pre-wrap",
                    fontFamily: "sans-serif",
                    margin: "0 2rem 2rem 0",
                    flex: "0 0 auto",
                    maxHeight: "50%",
                    overflow: "auto"
                }
                    , L = {
                    color: "#ffffff",
                    lineHeight: "1rem",
                    fontSize: "1.5rem",
                    padding: "1rem",
                    cursor: "pointer",
                    position: "absolute",
                    right: 0,
                    top: 0,
                    backgroundColor: "transparent",
                    border: "none"
                }
                    , D = {
                    color: "#e83b46",
                    fontSize: "1.2em",
                    marginBottom: "1rem",
                    fontFamily: "sans-serif"
                }
                    , R = {
                    lineHeight: "1.5",
                    fontSize: "1rem",
                    fontFamily: "Menlo, Consolas, monospace"
                };
                function T(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                                return Object.getOwnPropertyDescriptor(e, r).enumerable
                            }
                        ))),
                            t.push.apply(t, n)
                    }
                    return t
                }
                function C(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {};
                        r % 2 ? T(Object(t), !0).forEach((function(r) {
                                N(e, r, t[r])
                            }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach((function(r) {
                                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                            }
                        ))
                    }
                    return e
                }
                function N(e, r, t) {
                    return (r = function(e) {
                        var r = function(e, r) {
                            if ("object" != typeof e || !e)
                                return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var n = t.call(e, "string");
                                if ("object" != typeof n)
                                    return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(e);
                        return "symbol" == typeof r ? r : r + ""
                    }(r))in e ? Object.defineProperty(e, r, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[r] = t,
                        e
                }
                function j(e, r) {
                    var t = "warning" === e ? "WARNING" : "ERROR"
                        , n = "";
                    if ("string" == typeof r)
                        n += r;
                    else {
                        var o = r.file || ""
                            , a = r.moduleName ? -1 !== r.moduleName.indexOf("!") ? "".concat(r.moduleName.replace(/^(\s|\S)*!/, ""), " (").concat(r.moduleName, ")") : "".concat(r.moduleName) : ""
                            , i = r.loc;
                        t += "".concat(a || o ? " in ".concat(a ? "".concat(a).concat(o ? " (".concat(o, ")") : "") : o).concat(i ? " ".concat(i) : "") : ""),
                            n += r.message || ""
                    }
                    return Array.isArray(r.stack) && r.stack.forEach((function(e) {
                            "string" == typeof e && (n += "\r\n".concat(e))
                        }
                    )),
                        {
                            header: t,
                            body: n
                        }
                }
                y().setColors({
                    reset: ["transparent", "transparent"],
                    black: "181818",
                    red: "E36049",
                    green: "B3CB74",
                    yellow: "FFD080",
                    blue: "7CAFC2",
                    magenta: "7FACCA",
                    cyan: "C3C2EF",
                    lightgrey: "EBE7E3",
                    darkgrey: "6D7891"
                });
                const P = function(e, r) {
                    "undefined" == typeof self || "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope || self.postMessage({
                        type: "webpack".concat(e),
                        data: r
                    }, "*")
                };
                var I = t(982)
                    , U = t.n(I);
                const H = function(e, r) {
                    var t = e.hot
                        , n = e.liveReload;
                    if (!r.isUnloading) {
                        var o = r.currentHash
                            , a = r.previousHash;
                        if (!(o.indexOf(a) >= 0)) {
                            var i = self.location.search.toLowerCase()
                                , s = -1 === i.indexOf("webpack-dev-server-hot=false")
                                , l = -1 === i.indexOf("webpack-dev-server-live-reload=false");
                            if (t && s)
                                c.Rm.info("App hot update..."),
                                    U().emit("webpackHotUpdate", r.currentHash),
                                "undefined" != typeof self && self.window && self.postMessage("webpackHotUpdate".concat(r.currentHash), "*");
                            else if (n && l)
                                var u = self
                                    , d = self.setInterval((function() {
                                        ("about:" !== u.location.protocol || (u = u.parent).parent === u) && function(e, r) {
                                            clearInterval(r),
                                                c.Rm.info("App updated. Reloading..."),
                                                e.location.reload()
                                        }(u, d)
                                    }
                                ))
                        }
                    }
                };
                function B(e, r) {
                    for (var t = 0; t < r.length; t++) {
                        var n = r[t];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                        "value"in n && (n.writable = !0),
                            Object.defineProperty(e, F(n.key), n)
                    }
                }
                function F(e) {
                    var r = function(e, r) {
                        if ("object" != typeof e || !e)
                            return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var n = t.call(e, "string");
                            if ("object" != typeof n)
                                return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == typeof r ? r : r + ""
                }
                function M(e) {
                    var r = "function" == typeof Map ? new Map : void 0;
                    return M = function(e) {
                        if (null === e || !function(e) {
                            try {
                                return -1 !== Function.toString.call(e).indexOf("[native code]")
                            } catch (r) {
                                return "function" == typeof e
                            }
                        }(e))
                            return e;
                        if ("function" != typeof e)
                            throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== r) {
                            if (r.has(e))
                                return r.get(e);
                            r.set(e, t)
                        }
                        function t() {
                            return function(e, r, t) {
                                if (_())
                                    return Reflect.construct.apply(null, arguments);
                                var n = [null];
                                n.push.apply(n, r);
                                var o = new (e.bind.apply(e, n));
                                return t && G(o, t.prototype),
                                    o
                            }(e, arguments, V(this).constructor)
                        }
                        return t.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                            G(t, e)
                    }
                        ,
                        M(e)
                }
                function _() {
                    try {
                        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        )))
                    } catch (e) {}
                    return (_ = function() {
                            return !!e
                        }
                    )()
                }
                function G(e, r) {
                    return G = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, r) {
                        return e.__proto__ = r,
                            e
                    }
                        ,
                        G(e, r)
                }
                function V(e) {
                    return V = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }
                        ,
                        V(e)
                }
                function z(e, r, t) {
                    if ("function" == typeof e ? e === r : e.has(r))
                        return arguments.length < 3 ? r : t;
                    throw new TypeError("Private element is not present on this object")
                }
                function Y() {
                    var e;
                    if (!customElements.get("wds-progress")) {
                        var r = new WeakSet
                            , t = function(e) {
                            function t() {
                                var e;
                                return function(e, r) {
                                    if (!(e instanceof r))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, t),
                                    function(e, r) {
                                        (function(e, r) {
                                                if (r.has(e))
                                                    throw new TypeError("Cannot initialize the same private elements twice on an object")
                                            }
                                        )(e, r),
                                            r.add(e)
                                    }(e = function(e, r, t) {
                                        return r = V(r),
                                            function(e, r) {
                                                if (r && ("object" == typeof r || "function" == typeof r))
                                                    return r;
                                                if (void 0 !== r)
                                                    throw new TypeError("Derived constructors may only return object or undefined");
                                                return function(e) {
                                                    if (void 0 === e)
                                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                    return e
                                                }(e)
                                            }(e, _() ? Reflect.construct(r, t || [], V(e).constructor) : r.apply(e, t))
                                    }(this, t), r),
                                    e.attachShadow({
                                        mode: "open"
                                    }),
                                    e.maxDashOffset = -219.99078369140625,
                                    e.animationTimer = null,
                                    e
                            }
                            return function(e, r) {
                                if ("function" != typeof r && null !== r)
                                    throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(r && r.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                    Object.defineProperty(e, "prototype", {
                                        writable: !1
                                    }),
                                r && G(e, r)
                            }(t, e),
                                o = t,
                                s = [{
                                    key: "observedAttributes",
                                    get: function() {
                                        return ["progress", "type"]
                                    }
                                }],
                            (a = [{
                                key: "connectedCallback",
                                value: function() {
                                    z(r, this, n).call(this)
                                }
                            }, {
                                key: "attributeChangedCallback",
                                value: function(e, t, o) {
                                    "progress" === e ? z(r, this, i).call(this, Number(o)) : "type" === e && z(r, this, n).call(this)
                                }
                            }]) && B(o.prototype, a),
                            s && B(o, s),
                                Object.defineProperty(o, "prototype", {
                                    writable: !1
                                }),
                                o;
                            var o, a, s
                        }(M(HTMLElement));
                        e = t,
                            customElements.define("wds-progress", t)
                    }
                    function n() {
                        var t, n;
                        clearTimeout(this.animationTimer),
                            this.animationTimer = null;
                        var s = null === (t = this.getAttribute("type")) || void 0 === t ? void 0 : t.toLowerCase();
                        this.type = "circular" === s ? "circular" : "linear";
                        var c = "circular" === this.type ? o.call(e) : a.call(e);
                        this.shadowRoot.innerHTML = c,
                            this.initialProgress = null !== (n = Number(this.getAttribute("progress"))) && void 0 !== n ? n : 0,
                            z(r, this, i).call(this, this.initialProgress)
                    }
                    function o() {
                        return '\n        <style>\n        :host {\n            width: 200px;\n            height: 200px;\n            position: fixed;\n            right: 5%;\n            top: 5%;\n            transition: opacity .25s ease-in-out;\n            z-index: 2147483645;\n        }\n\n        circle {\n            fill: #282d35;\n        }\n\n        path {\n            fill: rgba(0, 0, 0, 0);\n            stroke: rgb(186, 223, 172);\n            stroke-dasharray: 219.99078369140625;\n            stroke-dashoffset: -219.99078369140625;\n            stroke-width: 10;\n            transform: rotate(90deg) translate(0px, -80px);\n        }\n\n        text {\n            font-family: \'Open Sans\', sans-serif;\n            font-size: 18px;\n            fill: #ffffff;\n            dominant-baseline: middle;\n            text-anchor: middle;\n        }\n\n        tspan#percent-super {\n            fill: #bdc3c7;\n            font-size: 0.45em;\n            baseline-shift: 10%;\n        }\n\n        @keyframes fade {\n            0% { opacity: 1; transform: scale(1); }\n            100% { opacity: 0; transform: scale(0); }\n        }\n\n        .disappear {\n            animation: fade 0.3s;\n            animation-fill-mode: forwards;\n            animation-delay: 0.5s;\n        }\n\n        .hidden {\n            display: none;\n        }\n        </style>\n        <svg id="progress" class="hidden noselect" viewBox="0 0 80 80">\n        <circle cx="50%" cy="50%" r="35"></circle>\n        <path d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0"></path>\n        <text x="50%" y="51%">\n            <tspan id="percent-value">0</tspan>\n            <tspan id="percent-super">%</tspan>\n        </text>\n        </svg>\n      '
                    }
                    function a() {
                        return '\n        <style>\n        :host {\n            position: fixed;\n            top: 0;\n            left: 0;\n            height: 4px;\n            width: 100vw;\n            z-index: 2147483645;\n        }\n\n        #bar {\n            width: 0%;\n            height: 4px;\n            background-color: rgb(186, 223, 172);\n        }\n\n        @keyframes fade {\n            0% { opacity: 1; }\n            100% { opacity: 0; }\n        }\n\n        .disappear {\n            animation: fade 0.3s;\n            animation-fill-mode: forwards;\n            animation-delay: 0.5s;\n        }\n\n        .hidden {\n            display: none;\n        }\n        </style>\n        <div id="progress"></div>\n        '
                    }
                    function i(e) {
                        var t = this.shadowRoot.querySelector("#progress");
                        if ("circular" === this.type) {
                            var n = this.shadowRoot.querySelector("path")
                                , o = this.shadowRoot.querySelector("#percent-value")
                                , a = (100 - e) / 100 * this.maxDashOffset;
                            n.style.strokeDashoffset = a,
                                o.textContent = e
                        } else
                            t.style.width = "".concat(e, "%");
                        e >= 100 ? z(r, this, c).call(this) : e > 0 && z(r, this, s).call(this)
                    }
                    function s() {
                        this.shadowRoot.querySelector("#progress").classList.remove("hidden")
                    }
                    function c() {
                        var e = this
                            , t = this.shadowRoot.querySelector("#progress");
                        "circular" === this.type ? (t.classList.add("disappear"),
                            t.addEventListener("animationend", (function() {
                                    t.classList.add("hidden"),
                                        z(r, e, i).call(e, 0)
                                }
                            ), {
                                once: !0
                            })) : "linear" === this.type && (t.classList.add("disappear"),
                            this.animationTimer = setTimeout((function() {
                                    t.classList.remove("disappear"),
                                        t.classList.add("hidden"),
                                        t.style.width = "0%",
                                        e.animationTimer = null
                                }
                            ), 800))
                    }
                }
                function $(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                                return Object.getOwnPropertyDescriptor(e, r).enumerable
                            }
                        ))),
                            t.push.apply(t, n)
                    }
                    return t
                }
                function X(e, r, t) {
                    return (r = function(e) {
                        var r = function(e, r) {
                            if ("object" != typeof e || !e)
                                return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var n = t.call(e, "string");
                                if ("object" != typeof n)
                                    return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(e);
                        return "symbol" == typeof r ? r : r + ""
                    }(r))in e ? Object.defineProperty(e, r, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[r] = t,
                        e
                }
                var J = function(e) {
                    "object" == typeof e && ["warnings", "errors", "runtimeErrors"].forEach((function(r) {
                            if ("string" == typeof e[r]) {
                                var t = decodeURIComponent(e[r])
                                    , n = new Function("message","var callback = ".concat(t, "\n        return callback(message)"));
                                e[r] = n
                            }
                        }
                    ))
                }
                    , Z = {
                    isUnloading: !1,
                    currentHash: t.h()
                }
                    , W = {
                    hot: !1,
                    liveReload: !1,
                    progress: !1,
                    overlay: !1
                }
                    , K = function(e) {
                    var r = {};
                    if ("string" == typeof e && "" !== e)
                        for (var t = e.slice(1).split("&"), n = 0; n < t.length; n++) {
                            var o = t[n].split("=");
                            r[o[0]] = decodeURIComponent(o[1])
                        }
                    else {
                        var a, i = function() {
                            if (document.currentScript)
                                return document.currentScript.getAttribute("src");
                            var e = document.scripts || []
                                , r = Array.prototype.filter.call(e, (function(e) {
                                    return e.getAttribute("src")
                                }
                            ));
                            if (r.length > 0)
                                return r[r.length - 1].getAttribute("src");
                            throw new Error("[webpack-dev-server] Failed to get current script source.")
                        }();
                        try {
                            a = new URL(i,self.location.href)
                        } catch (e) {}
                        a && ((r = a).fromCurrentScript = !0)
                    }
                    return r
                }("?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true")
                    , Q = {
                    "Hot Module Replacement": !1,
                    "Live Reloading": !1,
                    Progress: !1,
                    Overlay: !1
                };
                if ("true" === K.hot && (W.hot = !0,
                    Q["Hot Module Replacement"] = !0),
                "true" === K["live-reload"] && (W.liveReload = !0,
                    Q["Live Reloading"] = !0),
                "true" === K.progress && (W.progress = !0,
                    Q.Progress = !0),
                    K.overlay) {
                    try {
                        W.overlay = JSON.parse(K.overlay)
                    } catch (e) {
                        c.Rm.error("Error parsing overlay options from resource query:", e)
                    }
                    "object" == typeof W.overlay && (W.overlay = function(e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var t = null != arguments[r] ? arguments[r] : {};
                            r % 2 ? $(Object(t), !0).forEach((function(r) {
                                    X(e, r, t[r])
                                }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $(Object(t)).forEach((function(r) {
                                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                                }
                            ))
                        }
                        return e
                    }({
                        errors: !0,
                        warnings: !0,
                        runtimeErrors: !0
                    }, W.overlay),
                        J(W.overlay)),
                        Q.Overlay = !0
                }
                function ee(e) {
                    o().setLogLevel("verbose" === e || "log" === e ? "info" : e),
                        (0,
                            c.He)(e)
                }
                K.logging && (W.logging = K.logging),
                void 0 !== K.reconnect && (W.reconnect = Number(K.reconnect)),
                W.logging && ee(W.logging),
                    (0,
                        c.Bk)(Q),
                    self.addEventListener("beforeunload", (function() {
                            Z.isUnloading = !0
                        }
                    ));
                var re = "undefined" != typeof window ? function(e) {
                    var r, t, n, o, a = [];
                    function i(e, r) {
                        Object.keys(r).forEach((function(t) {
                                e.style[t] = r[t]
                            }
                        ))
                    }
                    var s, c = q({
                        showOverlay: function(s) {
                            var l = s.level
                                , u = void 0 === l ? "error" : l
                                , d = s.messages
                                , p = s.messageSource;
                            return function(e, s, l, u) {
                                !function(e, s) {
                                    if (t)
                                        return t.innerHTML = o ? o.createHTML("") : "",
                                            void e(t);
                                    a.push(e),
                                    r || function(e) {
                                        window.trustedTypes && (o = window.trustedTypes.createPolicy(e || "webpack-dev-server#overlay", {
                                            createHTML: function(e) {
                                                return e
                                            }
                                        })),
                                            (r = document.createElement("iframe")).id = "webpack-dev-server-client-overlay",
                                            r.src = "about:blank",
                                            i(r, S),
                                            r.onload = function() {
                                                var e = r.contentDocument.createElement("div");
                                                t = r.contentDocument.createElement("div"),
                                                    e.id = "webpack-dev-server-client-overlay-div",
                                                    i(e, A),
                                                    (n = document.createElement("div")).innerText = "Compiled with problems:",
                                                    i(n, O);
                                                var o = document.createElement("button");
                                                i(o, L),
                                                    o.innerText = "×",
                                                    o.ariaLabel = "Dismiss",
                                                    o.addEventListener("click", (function() {
                                                            c.send({
                                                                type: "DISMISS"
                                                            })
                                                        }
                                                    )),
                                                    e.appendChild(n),
                                                    e.appendChild(o),
                                                    e.appendChild(t),
                                                    r.contentDocument.body.appendChild(e),
                                                    a.forEach((function(r) {
                                                            r(e)
                                                        }
                                                    )),
                                                    a = [],
                                                    r.onload = null
                                            }
                                            ,
                                            document.body.appendChild(r)
                                    }(s)
                                }((function() {
                                        n.innerText = "runtime" === u ? "Uncaught runtime errors:" : "Compiled with problems:",
                                            s.forEach((function(r) {
                                                    var n = document.createElement("div");
                                                    i(n, C(C({}, "warning" === e ? k.warning : k.error), {}, {
                                                        padding: "1rem 1rem 1.5rem 1rem"
                                                    }));
                                                    var a = document.createElement("div")
                                                        , s = j(e, r)
                                                        , c = s.header
                                                        , l = s.body;
                                                    a.innerText = c,
                                                        i(a, D),
                                                    r.moduleIdentifier && (i(a, {
                                                        cursor: "pointer"
                                                    }),
                                                        a.setAttribute("data-can-open", !0),
                                                        a.addEventListener("click", (function() {
                                                                fetch("/webpack-dev-server/open-editor?fileName=".concat(r.moduleIdentifier))
                                                            }
                                                        )));
                                                    var u = y()((0,
                                                        b.encode)(l))
                                                        , d = document.createElement("div");
                                                    i(d, R),
                                                        d.innerHTML = o ? o.createHTML(u) : u,
                                                        n.appendChild(a),
                                                        n.appendChild(d),
                                                        t.appendChild(n)
                                                }
                                            ))
                                    }
                                ), l)
                            }(u, d, e.trustedTypesPolicyName, p)
                        },
                        hideOverlay: function() {
                            r && (document.body.removeChild(r),
                                r = null,
                                t = null)
                        }
                    });
                    if (e.catchRuntimeError) {
                        var l = function(r, t) {
                            var n = r instanceof Error ? r : new Error(r || t);
                            ("function" != typeof e.catchRuntimeError || e.catchRuntimeError(n)) && c.send({
                                type: "RUNTIME_ERROR",
                                messages: [{
                                    message: n.message,
                                    stack: v(n)
                                }]
                            })
                        };
                        s = function(e) {
                            var r = e.error
                                , t = e.message;
                            (r || t) && l(r, t)
                        }
                            ,
                            window.addEventListener("error", s),
                            window.addEventListener("unhandledrejection", (function(e) {
                                    var r = e.reason;
                                    l(r, "Unknown promise rejection reason")
                                }
                            ))
                    }
                    return c
                }("object" == typeof W.overlay ? {
                    trustedTypesPolicyName: W.overlay.trustedTypesPolicyName,
                    catchRuntimeError: W.overlay.runtimeErrors
                } : {
                    trustedTypesPolicyName: !1,
                    catchRuntimeError: W.overlay
                }) : {
                    send: function() {}
                }
                    , te = {
                    hot: function() {
                        "false" !== K.hot && (W.hot = !0)
                    },
                    liveReload: function() {
                        "false" !== K["live-reload"] && (W.liveReload = !0)
                    },
                    invalid: function() {
                        c.Rm.info("App updated. Recompiling..."),
                        W.overlay && re.send({
                            type: "DISMISS"
                        }),
                            P("Invalid")
                    },
                    hash: function(e) {
                        Z.previousHash = Z.currentHash,
                            Z.currentHash = e
                    },
                    logging: ee,
                    overlay: function(e) {
                        "undefined" != typeof document && (W.overlay = e,
                            J(W.overlay))
                    },
                    reconnect: function(e) {
                        "false" !== K.reconnect && (W.reconnect = e)
                    },
                    progress: function(e) {
                        W.progress = e
                    },
                    "progress-update": function(e) {
                        if (W.progress && c.Rm.info("".concat(e.pluginName ? "[".concat(e.pluginName, "] ") : "").concat(e.percent, "% - ").concat(e.msg, ".")),
                        "customElements"in self && HTMLElement.prototype.attachShadow && "string" == typeof W.progress) {
                            var r = document.querySelector("wds-progress");
                            r || (Y(),
                                r = document.createElement("wds-progress"),
                                document.body.appendChild(r)),
                                r.setAttribute("progress", e.percent),
                                r.setAttribute("type", W.progress)
                        }
                        P("Progress", e)
                    },
                    "still-ok": function() {
                        c.Rm.info("Nothing changed."),
                        W.overlay && re.send({
                            type: "DISMISS"
                        }),
                            P("StillOk")
                    },
                    ok: function() {
                        P("Ok"),
                        W.overlay && re.send({
                            type: "DISMISS"
                        }),
                            H(W, Z)
                    },
                    "static-changed": function(e) {
                        c.Rm.info("".concat(e ? '"'.concat(e, '"') : "Content", " from static directory was changed. Reloading...")),
                            self.location.reload()
                    },
                    warnings: function(e, r) {
                        c.Rm.warn("Warnings while compiling.");
                        var t = e.map((function(e) {
                                var r = j("warning", e)
                                    , t = r.header
                                    , n = r.body;
                                return "".concat(t, "\n").concat(i(n))
                            }
                        ));
                        P("Warnings", t);
                        for (var n = 0; n < t.length; n++)
                            c.Rm.warn(t[n]);
                        var o = "boolean" == typeof W.overlay ? W.overlay : W.overlay && W.overlay.warnings;
                        o && ("function" == typeof o ? e.filter(o) : e).length && re.send({
                            type: "BUILD_ERROR",
                            level: "warning",
                            messages: e
                        }),
                        r && r.preventReloading || H(W, Z)
                    },
                    errors: function(e) {
                        c.Rm.error("Errors while compiling. Reload prevented.");
                        var r = e.map((function(e) {
                                var r = j("error", e)
                                    , t = r.header
                                    , n = r.body;
                                return "".concat(t, "\n").concat(i(n))
                            }
                        ));
                        P("Errors", r);
                        for (var t = 0; t < r.length; t++)
                            c.Rm.error(r[t]);
                        var n = "boolean" == typeof W.overlay ? W.overlay : W.overlay && W.overlay.errors;
                        n && ("function" == typeof n ? e.filter(n) : e).length && re.send({
                            type: "BUILD_ERROR",
                            level: "error",
                            messages: e
                        })
                    },
                    error: function(e) {
                        c.Rm.error(e)
                    },
                    close: function() {
                        c.Rm.info("Disconnected!"),
                        W.overlay && re.send({
                            type: "DISMISS"
                        }),
                            P("Close")
                    }
                };
                h(function(e) {
                    var r = e.hostname
                        , t = "0.0.0.0" === r || "::" === r || "[::]" === r;
                    t && self.location.hostname && 0 === self.location.protocol.indexOf("http") && (r = self.location.hostname);
                    var n = e.protocol || self.location.protocol;
                    ("auto:" === n || r && t && "https:" === self.location.protocol) && (n = self.location.protocol),
                        n = n.replace(/^(?:http|.+-extension|file)/i, "ws");
                    var o = "";
                    e.username && (o = e.username,
                    e.password && (o = o.concat(":", e.password)));
                    var a = (r || self.location.hostname || "localhost").replace(/^\[(.*)\]$/, "$1")
                        , i = e.port;
                    i && "0" !== i || (i = self.location.port);
                    var s = "/ws";
                    return e.pathname && !e.fromCurrentScript && (s = e.pathname),
                        function(e) {
                            var r = e.protocol || "";
                            r && ":" !== r.substr(-1) && (r += ":");
                            var t = e.auth || "";
                            t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"),
                                t += "@");
                            var n = "";
                            e.hostname && (n = t + (-1 === e.hostname.indexOf(":") ? e.hostname : "[".concat(e.hostname, "]")),
                            e.port && (n += ":".concat(e.port)));
                            var o = e.pathname || "";
                            e.slashes ? (n = "//".concat(n || ""),
                            o && "/" !== o.charAt(0) && (o = "/".concat(o))) : n || (n = "");
                            var a = e.search || "";
                            a && "?" !== a.charAt(0) && (a = "?".concat(a));
                            var i = e.hash || "";
                            return i && "#" !== i.charAt(0) && (i = "#".concat(i)),
                                o = o.replace(/[?#]/g, (function(e) {
                                        return encodeURIComponent(e)
                                    }
                                )),
                                a = a.replace("#", "%23"),
                                "".concat(r).concat(n).concat(o).concat(a).concat(i)
                        }({
                            protocol: n,
                            auth: o,
                            hostname: a,
                            port: i,
                            pathname: s,
                            slashes: !0
                        })
                }(K), te, W.reconnect)
            }
            ,
            491: (e, r) => {
                !function() {
                    "use strict";
                    var e = {
                        "./client-src/modules/logger/tapable.js": function(e, r, t) {
                            function n() {
                                return {
                                    call: function() {}
                                }
                            }
                            t.r(r),
                                t.d(r, {
                                    SyncBailHook: function() {
                                        return n
                                    }
                                })
                        },
                        "./node_modules/webpack/lib/logging/Logger.js": function(e) {
                            function r(e) {
                                return function(e) {
                                    if (Array.isArray(e))
                                        return t(e)
                                }(e) || function(e) {
                                    if (void 0 !== ("undefined" != typeof Symbol ? Symbol : function(e) {
                                            return e
                                        }
                                    ) && null != e[("undefined" != typeof Symbol ? Symbol : function(e) {
                                            return e
                                        }
                                    ).iterator] || null != e["@@iterator"])
                                        return Array.from(e)
                                }(e) || function(e, r) {
                                    if (e) {
                                        if ("string" == typeof e)
                                            return t(e, r);
                                        var n = {}.toString.call(e).slice(8, -1);
                                        return "Object" === n && e.constructor && (n = e.constructor.name),
                                            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? t(e, r) : void 0
                                    }
                                }(e) || function() {
                                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()
                            }
                            function t(e, r) {
                                (null == r || r > e.length) && (r = e.length);
                                for (var t = 0, n = Array(r); t < r; t++)
                                    n[t] = e[t];
                                return n
                            }
                            function n(e, r) {
                                for (var t = 0; t < r.length; t++) {
                                    var n = r[t];
                                    n.enumerable = n.enumerable || !1,
                                        n.configurable = !0,
                                    "value"in n && (n.writable = !0),
                                        Object.defineProperty(e, o(n.key), n)
                                }
                            }
                            function o(e) {
                                var r = function(e, r) {
                                    if ("object" != typeof e || !e)
                                        return e;
                                    var t = e[("undefined" != typeof Symbol ? Symbol : function(e) {
                                            return e
                                        }
                                    ).toPrimitive];
                                    if (void 0 !== t) {
                                        var n = t.call(e, "string");
                                        if ("object" != typeof n)
                                            return n;
                                        throw new TypeError("@@toPrimitive must return a primitive value.")
                                    }
                                    return String(e)
                                }(e);
                                return "symbol" == typeof r ? r : r + ""
                            }
                            var a = Object.freeze({
                                error: "error",
                                warn: "warn",
                                info: "info",
                                log: "log",
                                debug: "debug",
                                trace: "trace",
                                group: "group",
                                groupCollapsed: "groupCollapsed",
                                groupEnd: "groupEnd",
                                profile: "profile",
                                profileEnd: "profileEnd",
                                time: "time",
                                clear: "clear",
                                status: "status"
                            });
                            e.exports.LogType = a;
                            var i = ("undefined" != typeof Symbol ? Symbol : function(e) {
                                    return e
                                }
                            )("webpack logger raw log method")
                                , s = ("undefined" != typeof Symbol ? Symbol : function(e) {
                                    return e
                                }
                            )("webpack logger times")
                                , c = ("undefined" != typeof Symbol ? Symbol : function(e) {
                                    return e
                                }
                            )("webpack logger aggregated times")
                                , l = function() {
                                return e = function e(r, t) {
                                    !function(e, r) {
                                        if (!(e instanceof r))
                                            throw new TypeError("Cannot call a class as a function")
                                    }(this, e),
                                        this[i] = r,
                                        this.getChildLogger = t
                                }
                                    ,
                                    t = [{
                                        key: "error",
                                        value: function() {
                                            for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
                                                r[t] = arguments[t];
                                            this[i](a.error, r)
                                        }
                                    }, {
                                        key: "warn",
                                        value: function() {
                                            for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
                                                r[t] = arguments[t];
                                            this[i](a.warn, r)
                                        }
                                    }, {
                                        key: "info",
                                        value: function() {
                                            for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
                                                r[t] = arguments[t];
                                            this[i](a.info, r)
                                        }
                                    }, {
                                        key: "log",
                                        value: function() {
                                            for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
                                                r[t] = arguments[t];
                                            this[i](a.log, r)
                                        }
                                    }, {
                                        key: "debug",
                                        value: function() {
                                            for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
                                                r[t] = arguments[t];
                                            this[i](a.debug, r)
                                        }
                                    }, {
                                        key: "assert",
                                        value: function(e) {
                                            if (!e) {
                                                for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
                                                    t[n - 1] = arguments[n];
                                                this[i](a.error, t)
                                            }
                                        }
                                    }, {
                                        key: "trace",
                                        value: function() {
                                            this[i](a.trace, ["Trace"])
                                        }
                                    }, {
                                        key: "clear",
                                        value: function() {
                                            this[i](a.clear)
                                        }
                                    }, {
                                        key: "status",
                                        value: function() {
                                            for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
                                                r[t] = arguments[t];
                                            this[i](a.status, r)
                                        }
                                    }, {
                                        key: "group",
                                        value: function() {
                                            for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
                                                r[t] = arguments[t];
                                            this[i](a.group, r)
                                        }
                                    }, {
                                        key: "groupCollapsed",
                                        value: function() {
                                            for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
                                                r[t] = arguments[t];
                                            this[i](a.groupCollapsed, r)
                                        }
                                    }, {
                                        key: "groupEnd",
                                        value: function() {
                                            this[i](a.groupEnd)
                                        }
                                    }, {
                                        key: "profile",
                                        value: function(e) {
                                            this[i](a.profile, [e])
                                        }
                                    }, {
                                        key: "profileEnd",
                                        value: function(e) {
                                            this[i](a.profileEnd, [e])
                                        }
                                    }, {
                                        key: "time",
                                        value: function(e) {
                                            this[s] = this[s] || new Map,
                                                this[s].set(e, process.hrtime())
                                        }
                                    }, {
                                        key: "timeLog",
                                        value: function(e) {
                                            var t = this[s] && this[s].get(e);
                                            if (!t)
                                                throw new Error("No such label '".concat(e, "' for WebpackLogger.timeLog()"));
                                            var n = process.hrtime(t);
                                            this[i](a.time, [e].concat(r(n)))
                                        }
                                    }, {
                                        key: "timeEnd",
                                        value: function(e) {
                                            var t = this[s] && this[s].get(e);
                                            if (!t)
                                                throw new Error("No such label '".concat(e, "' for WebpackLogger.timeEnd()"));
                                            var n = process.hrtime(t);
                                            this[s].delete(e),
                                                this[i](a.time, [e].concat(r(n)))
                                        }
                                    }, {
                                        key: "timeAggregate",
                                        value: function(e) {
                                            var r = this[s] && this[s].get(e);
                                            if (!r)
                                                throw new Error("No such label '".concat(e, "' for WebpackLogger.timeAggregate()"));
                                            var t = process.hrtime(r);
                                            this[s].delete(e),
                                                this[c] = this[c] || new Map;
                                            var n = this[c].get(e);
                                            void 0 !== n && (t[1] + n[1] > 1e9 ? (t[0] += n[0] + 1,
                                                t[1] = t[1] - 1e9 + n[1]) : (t[0] += n[0],
                                                t[1] += n[1])),
                                                this[c].set(e, t)
                                        }
                                    }, {
                                        key: "timeAggregateEnd",
                                        value: function(e) {
                                            if (void 0 !== this[c]) {
                                                var t = this[c].get(e);
                                                void 0 !== t && (this[c].delete(e),
                                                    this[i](a.time, [e].concat(r(t))))
                                            }
                                        }
                                    }],
                                t && n(e.prototype, t),
                                    Object.defineProperty(e, "prototype", {
                                        writable: !1
                                    }),
                                    e;
                                var e, t
                            }();
                            e.exports.Logger = l
                        },
                        "./node_modules/webpack/lib/logging/createConsoleLogger.js": function(e, r, t) {
                            function n(e) {
                                return function(e) {
                                    if (Array.isArray(e))
                                        return a(e)
                                }(e) || function(e) {
                                    if (void 0 !== ("undefined" != typeof Symbol ? Symbol : function(e) {
                                            return e
                                        }
                                    ) && null != e[("undefined" != typeof Symbol ? Symbol : function(e) {
                                            return e
                                        }
                                    ).iterator] || null != e["@@iterator"])
                                        return Array.from(e)
                                }(e) || o(e) || function() {
                                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()
                            }
                            function o(e, r) {
                                if (e) {
                                    if ("string" == typeof e)
                                        return a(e, r);
                                    var t = {}.toString.call(e).slice(8, -1);
                                    return "Object" === t && e.constructor && (t = e.constructor.name),
                                        "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? a(e, r) : void 0
                                }
                            }
                            function a(e, r) {
                                (null == r || r > e.length) && (r = e.length);
                                for (var t = 0, n = Array(r); t < r; t++)
                                    n[t] = e[t];
                                return n
                            }
                            var i = t("./node_modules/webpack/lib/logging/Logger.js").LogType
                                , s = function(e) {
                                if ("string" == typeof e) {
                                    var r = new RegExp("[\\\\/]".concat(e.replace(/[-[\]{}()*+?.\\^$|]/g, "\\$&"), "([\\\\/]|$|!|\\?)"));
                                    return function(e) {
                                        return r.test(e)
                                    }
                                }
                                return e && "object" == typeof e && "function" == typeof e.test ? function(r) {
                                        return e.test(r)
                                    }
                                    : "function" == typeof e ? e : "boolean" == typeof e ? function() {
                                            return e
                                        }
                                        : void 0
                            }
                                , c = {
                                none: 6,
                                false: 6,
                                error: 5,
                                warn: 4,
                                info: 3,
                                log: 2,
                                true: 2,
                                verbose: 1
                            };
                            e.exports = function(e) {
                                var r = e.level
                                    , t = void 0 === r ? "info" : r
                                    , a = e.debug
                                    , l = void 0 !== a && a
                                    , u = e.console
                                    , d = "boolean" == typeof l ? [function() {
                                    return l
                                }
                                ] : [].concat(l).map(s)
                                    , p = c["".concat(t)] || 0;
                                return function(e, r, t) {
                                    var a, s, l = function() {
                                        return Array.isArray(t) ? t.length > 0 && "string" == typeof t[0] ? ["[".concat(e, "] ").concat(t[0])].concat(n(t.slice(1))) : ["[".concat(e, "]")].concat(n(t)) : []
                                    }, f = d.some((function(r) {
                                            return r(e)
                                        }
                                    ));
                                    switch (r) {
                                        case i.debug:
                                            if (!f)
                                                return;
                                            "function" == typeof u.debug ? u.debug.apply(u, n(l())) : u.log.apply(u, n(l()));
                                            break;
                                        case i.log:
                                            if (!f && p > c.log)
                                                return;
                                            u.log.apply(u, n(l()));
                                            break;
                                        case i.info:
                                            if (!f && p > c.info)
                                                return;
                                            u.info.apply(u, n(l()));
                                            break;
                                        case i.warn:
                                            if (!f && p > c.warn)
                                                return;
                                            u.warn.apply(u, n(l()));
                                            break;
                                        case i.error:
                                            if (!f && p > c.error)
                                                return;
                                            u.error.apply(u, n(l()));
                                            break;
                                        case i.trace:
                                            if (!f)
                                                return;
                                            u.trace();
                                            break;
                                        case i.groupCollapsed:
                                            if (!f && p > c.log)
                                                return;
                                            if (!f && p > c.verbose) {
                                                "function" == typeof u.groupCollapsed ? u.groupCollapsed.apply(u, n(l())) : u.log.apply(u, n(l()));
                                                break
                                            }
                                        case i.group:
                                            if (!f && p > c.log)
                                                return;
                                            "function" == typeof u.group ? u.group.apply(u, n(l())) : u.log.apply(u, n(l()));
                                            break;
                                        case i.groupEnd:
                                            if (!f && p > c.log)
                                                return;
                                            "function" == typeof u.groupEnd && u.groupEnd();
                                            break;
                                        case i.time:
                                            if (!f && p > c.log)
                                                return;
                                            var g = (s = 3,
                                            function(e) {
                                                if (Array.isArray(e))
                                                    return e
                                            }(a = t) || function(e, r) {
                                                var t = null == e ? null : void 0 !== ("undefined" != typeof Symbol ? Symbol : function(e) {
                                                        return e
                                                    }
                                                ) && e[("undefined" != typeof Symbol ? Symbol : function(e) {
                                                        return e
                                                    }
                                                ).iterator] || e["@@iterator"];
                                                if (null != t) {
                                                    var n, o, a, i, s = [], c = !0, l = !1;
                                                    try {
                                                        if (a = (t = t.call(e)).next,
                                                        0 === r) {
                                                            if (Object(t) !== t)
                                                                return;
                                                            c = !1
                                                        } else
                                                            for (; !(c = (n = a.call(t)).done) && (s.push(n.value),
                                                            s.length !== r); c = !0)
                                                                ;
                                                    } catch (e) {
                                                        l = !0,
                                                            o = e
                                                    } finally {
                                                        try {
                                                            if (!c && null != t.return && (i = t.return(),
                                                            Object(i) !== i))
                                                                return
                                                        } finally {
                                                            if (l)
                                                                throw o
                                                        }
                                                    }
                                                    return s
                                                }
                                            }(a, s) || o(a, s) || function() {
                                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                            }())
                                                , h = g[0]
                                                , m = 1e3 * g[1] + g[2] / 1e6
                                                , y = "[".concat(e, "] ").concat(h, ": ").concat(m, " ms");
                                            "function" == typeof u.logTime ? u.logTime(y) : u.log(y);
                                            break;
                                        case i.profile:
                                            "function" == typeof u.profile && u.profile.apply(u, n(l()));
                                            break;
                                        case i.profileEnd:
                                            "function" == typeof u.profileEnd && u.profileEnd.apply(u, n(l()));
                                            break;
                                        case i.clear:
                                            if (!f && p > c.log)
                                                return;
                                            "function" == typeof u.clear && u.clear();
                                            break;
                                        case i.status:
                                            if (!f && p > c.info)
                                                return;
                                            "function" == typeof u.status ? t && 0 !== t.length ? u.status.apply(u, n(l())) : u.status() : t && 0 !== t.length && u.info.apply(u, n(l()));
                                            break;
                                        default:
                                            throw new Error("Unexpected LogType ".concat(r))
                                    }
                                }
                            }
                        },
                        "./node_modules/webpack/lib/logging/runtime.js": function(e, r, t) {
                            function n() {
                                return n = Object.assign ? Object.assign.bind() : function(e) {
                                    for (var r = 1; r < arguments.length; r++) {
                                        var t = arguments[r];
                                        for (var n in t)
                                            ({}).hasOwnProperty.call(t, n) && (e[n] = t[n])
                                    }
                                    return e
                                }
                                    ,
                                    n.apply(null, arguments)
                            }
                            var o = t("./client-src/modules/logger/tapable.js").SyncBailHook
                                , a = t("./node_modules/webpack/lib/logging/Logger.js").Logger
                                , i = t("./node_modules/webpack/lib/logging/createConsoleLogger.js")
                                , s = {
                                level: "info",
                                debug: !1,
                                console
                            }
                                , c = i(s);
                            e.exports.getLogger = function(r) {
                                return new a((function(t, n) {
                                        void 0 === e.exports.hooks.log.call(r, t, n) && c(r, t, n)
                                    }
                                ),(function(t) {
                                        return e.exports.getLogger("".concat(r, "/").concat(t))
                                    }
                                ))
                            }
                                ,
                                e.exports.configureDefaultLogger = function(e) {
                                    n(s, e),
                                        c = i(s)
                                }
                                ,
                                e.exports.hooks = {
                                    log: new o(["origin", "type", "args"])
                                }
                        }
                    }
                        , t = {};
                    function n(r) {
                        var o = t[r];
                        if (void 0 !== o)
                            return o.exports;
                        var a = t[r] = {
                            exports: {}
                        };
                        return e[r](a, a.exports, n),
                            a.exports
                    }
                    n.d = function(e, r) {
                        for (var t in r)
                            n.o(r, t) && !n.o(e, t) && Object.defineProperty(e, t, {
                                enumerable: !0,
                                get: r[t]
                            })
                    }
                        ,
                        n.o = function(e, r) {
                            return Object.prototype.hasOwnProperty.call(e, r)
                        }
                        ,
                        n.r = function(e) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                                value: "Module"
                            }),
                                Object.defineProperty(e, "__esModule", {
                                    value: !0
                                })
                        }
                    ;
                    var o = {};
                    n.r(o),
                        n.d(o, {
                            default: function() {
                                return a
                            }
                        });
                    var a = n("./node_modules/webpack/lib/logging/runtime.js")
                        , i = r;
                    for (var s in o)
                        i[s] = o[s];
                    o.__esModule && Object.defineProperty(i, "__esModule", {
                        value: !0
                    })
                }()
            }
            ,
            984: (e, r, t) => {
                "use strict";
                t.d(r, {
                    Bk: () => s,
                    He: () => a,
                    Rm: () => i
                });
                var n = t(491)
                    , o = t.n(n);
                function a(e) {
                    o().configureDefaultLogger({
                        level: e
                    })
                }
                a("info");
                var i = o().getLogger("webpack-dev-server")
                    , s = function(e) {
                    var r = Object.keys(e);
                    if (e && 0 !== r.length) {
                        for (var t = "Server started:", n = 0; n < r.length; n++) {
                            var o = r[n];
                            t += " ".concat(o, " ").concat(e[o] ? "enabled" : "disabled", ",")
                        }
                        t = t.slice(0, -1).concat("."),
                            i.info(t)
                    }
                }
            }
            ,
            943: (e, r, t) => {
                var n, o = function() {
                    return n.indexOf(t.h()) >= 0
                }, a = t(922), i = function r() {
                    e.hot.check(!0).then((function(e) {
                            if (!e)
                                return a("warning", "[HMR] Cannot find update. " + ("undefined" != typeof window ? "Need to do a full reload!" : "Please reload manually!")),
                                    a("warning", "[HMR] (Probably because of restarting the webpack-dev-server)"),
                                    void ("undefined" != typeof window && window.location.reload());
                            o() || r(),
                                t(617)(e, e),
                            o() && a("info", "[HMR] App is up to date.")
                        }
                    )).catch((function(r) {
                            var t = e.hot.status();
                            ["abort", "fail"].indexOf(t) >= 0 ? (a("warning", "[HMR] Cannot apply update. " + ("undefined" != typeof window ? "Need to do a full reload!" : "Please reload manually!")),
                                a("warning", "[HMR] " + a.formatError(r)),
                            "undefined" != typeof window && window.location.reload()) : a("warning", "[HMR] Update failed: " + a.formatError(r))
                        }
                    ))
                };
                t(982).on("webpackHotUpdate", (function(r) {
                        n = r,
                        o() || "idle" !== e.hot.status() || (a("info", "[HMR] Checking for updates on the server..."),
                            i())
                    }
                )),
                    a("info", "[HMR] Waiting for update signal from WDS...")
            }
            ,
            982: (e, r, t) => {
                var n = t(7);
                e.exports = new n
            }
            ,
            617: (e, r, t) => {
                e.exports = function(e, r) {
                    var n = e.filter((function(e) {
                            return r && r.indexOf(e) < 0
                        }
                    ))
                        , o = t(922);
                    n.length > 0 && (o("warning", "[HMR] The following modules couldn't be hot updated: (They would need a full reload!)"),
                        n.forEach((function(e) {
                                o("warning", "[HMR]  - " + e)
                            }
                        ))),
                        r && 0 !== r.length ? (o("info", "[HMR] Updated modules:"),
                            r.forEach((function(e) {
                                    if ("string" == typeof e && -1 !== e.indexOf("!")) {
                                        var r = e.split("!");
                                        o.groupCollapsed("info", "[HMR]  - " + r.pop()),
                                            o("info", "[HMR]  - " + e),
                                            o.groupEnd("info")
                                    } else
                                        o("info", "[HMR]  - " + e)
                                }
                            )),
                        r.every((function(e) {
                                return "number" == typeof e
                            }
                        )) && o("info", '[HMR] Consider using the optimization.moduleIds: "named" for module names.')) : o("info", "[HMR] Nothing hot updated.")
                }
            }
            ,
            922: e => {
                var r = "info";
                function t() {}
                function n(e) {
                    return "info" === r && "info" === e || ["info", "warning"].indexOf(r) >= 0 && "warning" === e || ["info", "warning", "error"].indexOf(r) >= 0 && "error" === e
                }
                function o(e) {
                    return function(r, t) {
                        n(r) && e(t)
                    }
                }
                e.exports = function(e, r) {
                    n(e) && ("info" === e ? console.log(r) : "warning" === e ? console.warn(r) : "error" === e && console.error(r))
                }
                ;
                var a = console.group || t
                    , i = console.groupCollapsed || t
                    , s = console.groupEnd || t;
                e.exports.group = o(a),
                    e.exports.groupCollapsed = o(i),
                    e.exports.groupEnd = o(s),
                    e.exports.setLogLevel = function(e) {
                        r = e
                    }
                    ,
                    e.exports.formatError = function(e) {
                        var r = e.message
                            , t = e.stack;
                        return t ? t.indexOf(r) < 0 ? r + "\n" + t : t : r
                    }
            }
            ,
            685: (e, r, t) => {
                const n = t(738)
                    , o = t(211);
                e.exports = function() {
                    const e = o();
                    let r = null;
                    function t(e) {
                        return e.x >= 0 && e.x < 10 && e.y >= 0 && e.y < 10
                    }
                    return e.isValid = t,
                        e.ai = function(o) {
                            if (r && !o.getGameboard().getBoard()[r.found.start.y][r.found.start.x].ship.isSunk()) {
                                let n;
                                if (r.found.next) {
                                    if (n = r.found.next,
                                        console.log("before new code: xy: ", n),
                                    (!t(n) || o.getGameboard().getBoard()[n.y][n.x].isHit) && r.found.streak) {
                                        if (console.log("In new code"),
                                        "h" == r.found.orient)
                                            if ("+" == r.found.currop) {
                                                let e = 0;
                                                for (; (!t(n) || o.getGameboard().getBoard()[n.y][n.x].isHit) && e < 20; )
                                                    n = {
                                                        x: n.x - 1,
                                                        y: n.y
                                                    },
                                                        e++;
                                                e < 20 || console.log("VERY MAJOR ERROR"),
                                                    r.found.currop = "-"
                                            } else {
                                                let e = 0;
                                                for (; (!t(n) || o.getGameboard().getBoard()[n.y][n.x].isHit) && e < 20; )
                                                    n = {
                                                        x: n.x + 1,
                                                        y: n.y
                                                    },
                                                        e++;
                                                e < 20 || console.log("VERY MAJOR ERROR"),
                                                    r.found.currop = "+"
                                            }
                                        else if ("+" == r.found.currop) {
                                            let e = 0;
                                            for (; (!t(n) || o.getGameboard().getBoard()[n.y][n.x].isHit) && e < 20; )
                                                n = {
                                                    x: n.x,
                                                    y: n.y - 1
                                                },
                                                    e++;
                                            e < 20 || console.log("VERY MAJOR ERROR"),
                                                r.found.currop = "-"
                                        } else {
                                            let e = 0;
                                            for (; (!t(n) || o.getGameboard().getBoard()[n.y][n.x].isHit) && e < 20; )
                                                n = {
                                                    x: n.x,
                                                    y: n.y + 1
                                                },
                                                    e++;
                                            e < 20 || console.log("VERY MAJOR ERROR"),
                                                r.found.currop = "+"
                                        }
                                        console.log("result of new code :", n)
                                    }
                                    r.found.streak ? "+" == r.found.currop ? r.found.next = "h" == r.found.orient ? {
                                        x: n.x + 1,
                                        y: n.y
                                    } : {
                                        x: n.x,
                                        y: n.y + 1
                                    } : r.found.next = "h" == r.found.orient ? {
                                        x: n.x - 1,
                                        y: n.y
                                    } : {
                                        x: n.x,
                                        y: n.y - 1
                                    } : "+" == r.found.currop ? (r.found.next = "h" == r.found.orient ? {
                                        x: r.found.start.x - 1,
                                        y: r.found.start.y
                                    } : {
                                        x: r.found.start.x,
                                        y: r.found.start.y - 1
                                    },
                                        r.found.currop = "-",
                                        n = r.found.next,
                                        r.found.next = "h" == r.found.orient ? {
                                            x: n.x - 1,
                                            y: n.y
                                        } : {
                                            x: n.x,
                                            y: n.y - 1
                                        }) : (r.found.next = "h" == r.found.orient ? {
                                        x: r.found.start.x + 1,
                                        y: r.found.start.y
                                    } : {
                                        x: r.found.start.x,
                                        y: r.found.start.y + 1
                                    },
                                        r.found.currop = "+",
                                        n = r.found.next,
                                        r.found.next = "h" == r.found.orient ? {
                                            x: n.x + 1,
                                            y: n.y
                                        } : {
                                            x: n.x,
                                            y: n.y + 1
                                        }),
                                        o.getGameboard().getBoard()[n.y][n.x].ship ? r.found.streak = !0 : r.found.streak = !1
                                } else {
                                    let t;
                                    if (r.top ? (r.found.next = r.top,
                                        t = "t") : r.right ? (r.found.next = r.right,
                                        t = "r") : r.bottom ? (r.found.next = r.bottom,
                                        t = "b") : (r.found.next = r.left,
                                        t = "l"),
                                        n = r.found.next,
                                        o.getGameboard().getBoard()[n.y][n.x].ship) {
                                        r.found.currop = "t" == t || "l" == t ? "-" : "+",
                                            r.found.streak = !0;
                                        let {horizontal: o, length: a} = e.getGameboard().getLenAndDirection(r.found.start, r.found.next);
                                        r.found.orient = o ? "h" : "v",
                                            r.found.next = o ? "+" == r.found.currop ? {
                                                x: n.x + 1,
                                                y: n.y
                                            } : {
                                                x: n.x - 1,
                                                y: n.y
                                            } : "+" == r.found.currop ? {
                                                x: n.x,
                                                y: n.y + 1
                                            } : {
                                                x: n.x,
                                                y: n.y - 1
                                            }
                                    } else
                                        r.found.next = null,
                                        "t" == t && (r.top = null),
                                        "r" == t && (r.right = null),
                                        "b" == t && (r.bottom = null),
                                        "l" == t && (r.left = null);
                                    console.log("trying to find first next: ", JSON.stringify(r))
                                }
                                return n
                            }
                            {
                                r = null;
                                let e = Math.floor(100 * Math.random())
                                    , a = n.numToXY(e);
                                for (; o.getGameboard().getBoard()[a.y][a.x].isHit; )
                                    e = Math.floor(100 * Math.random()),
                                        a = n.numToXY(e);
                                if (o.getGameboard().getBoard()[a.y][a.x].ship) {
                                    let e = {
                                        x: a.x,
                                        y: a.y - 1
                                    };
                                    t(e) ? o.getGameboard().getBoard()[e.y][e.x].isHit && (e = null) : e = null;
                                    let n = {
                                        x: a.x - 1,
                                        y: a.y
                                    };
                                    t(n) ? o.getGameboard().getBoard()[n.y][n.x].isHit && (n = null) : n = null;
                                    let i = {
                                        x: a.x + 1,
                                        y: a.y
                                    };
                                    t(i) ? o.getGameboard().getBoard()[i.y][i.x].isHit && (i = null) : i = null;
                                    let s = {
                                        x: a.x,
                                        y: a.y + 1
                                    };
                                    t(s) ? o.getGameboard().getBoard()[s.y][s.x].isHit && (s = null) : s = null;
                                    let c = {
                                        xy: a,
                                        top: e,
                                        left: n,
                                        right: i,
                                        bottom: s,
                                        found: {}
                                    };
                                    c.found.start = a,
                                        c.found.next = null,
                                        r = c
                                }
                                return console.log("Just found: ", JSON.stringify(r)),
                                    a
                            }
                        }
                        ,
                        e.attack = function(e, r) {
                            return e.getGameboard().receiveAttack(r.x, r.y)
                        }
                        ,
                        e.printBoard = function() {
                            let e = "";
                            for (let r = 0; r < 10; r++) {
                                let t = "";
                                for (let e = 0; e < 10; e++)
                                    this.getGameboard().getBoard()[r][e].ship ? t += "X " : t += "O ";
                                e += t,
                                    e += "\n"
                            }
                            console.log(e)
                        }
                        ,
                        e
                }
            }
            ,
            906: (e, r, t) => {
                const n = t(432)
                    , o = t(738);
                e.exports = function() {
                    let e = [[], [], [], [], [], [], [], [], [], []];
                    for (let r = 0; r < 10; r++)
                        for (let t = 0; t < 10; t++)
                            e[r].push({
                                x: t,
                                y: r,
                                isHit: !1,
                                ship: null
                            });
                    function r(e, r) {
                        let t = e.x != r.x;
                        return {
                            horizontal: t,
                            length: 1 + (t ? r.x - e.x : r.y - e.y)
                        }
                    }
                    return {
                        getLenAndDirection: r,
                        placeShip: function(t, o) {
                            let {horizontal: a, length: i} = r(t, o)
                                , s = n(i);
                            if (a)
                                for (let r = t.x; r <= o.x; r++) {
                                    if (e[t.y][r].ship)
                                        throw new Error("ship already exists");
                                    e[t.y][r].ship = s
                                }
                            else
                                for (let r = t.y; r <= o.y; r++) {
                                    if (e[r][t.x].ship)
                                        throw new Error("ship already exists");
                                    e[r][t.x].ship = s
                                }
                        },
                        getBoard: function() {
                            return e
                        },
                        receiveAttack: function(r, t) {
                            return e[t][r].isHit = !0,
                            !!e[t][r].ship && (e[t][r].ship.hit(),
                                !0)
                        },
                        allShipsSunk: function() {
                            for (let r = 0; r < 10; r++)
                                for (let t = 0; t < 10; t++)
                                    if (e[r][t].ship && !e[r][t].ship.sunk)
                                        return !1;
                            return !0
                        },
                        validPlacement: function(t, n) {
                            if (t.x > 9 || t.y > 9 || n.x > 9 || n.y > 9)
                                return !1;
                            if (t.x < 0 || t.y < 0 || n.x < 0 || n.y < 0)
                                return !1;
                            let {horizontal: o, length: a} = r(t, n);
                            if (o) {
                                for (let r = t.x - 1; r <= n.x + 1; r++)
                                    if (!(r < 0 || r > 9)) {
                                        if (e[t.y][r].ship)
                                            return !1;
                                        if (t.y - 1 >= 0 && e[t.y - 1][r].ship)
                                            return !1;
                                        if (t.y + 1 <= 9 && e[t.y + 1][r].ship)
                                            return !1
                                    }
                            } else
                                for (let r = t.y - 1; r <= n.y + 1; r++)
                                    if (!(r < 0 || r > 9)) {
                                        if (e[r][t.x].ship)
                                            return !1;
                                        if (t.x - 1 >= 0 && e[r][t.x - 1].ship)
                                            return !1;
                                        if (t.x + 1 <= 9 && e[r][t.x + 1].ship)
                                            return !1
                                    }
                            return !0
                        },
                        removeShip: function(t, n) {
                            let {horizontal: o, length: a} = r(t, n);
                            if (o)
                                for (let r = t.x; r <= n.x; r++)
                                    e[t.y][r].ship = null;
                            else
                                for (let r = t.y; r <= n.y; r++)
                                    e[r][t.x].ship = null
                        },
                        printBoard: function() {
                            let e = "";
                            for (let r = 0; r < 10; r++) {
                                let t = "";
                                for (let e = 0; e < 10; e++)
                                    this.getBoard()[r][e].ship ? t += "X " : t += "O ";
                                e += t,
                                    e += "\n"
                            }
                            console.log(e)
                        },
                        removeAllShips: function() {
                            for (let r = 0; r < 10; r++)
                                for (let t = 0; t < 10; t++)
                                    e[r][t].ship = null,
                                        e[r][t].isHit = !1
                        },
                        getShipFromNum: function(r) {
                            let t = o.numToXY(r);
                            return e[t.y][t.x].ship
                        }
                    }
                }
            }
            ,
            738: e => {
                const r = function() {
                    function e(e, r) {
                        return 10 * r + e
                    }
                    return {
                        numToXY: function(e) {
                            return {
                                x: (e = Number(e)) % 10,
                                y: Math.floor(e / 10)
                            }
                        },
                        unshadeArea: function(r, t) {
                            if (r.x == t.x)
                                for (let n = 0; n < t.y - r.y + 1; n++)
                                    document.querySelector(`.grid1 [data-val='${e(r.x, r.y + n)}']`).style.cssText = "";
                            else
                                for (let n = 0; n < t.x - r.x + 1; n++)
                                    document.querySelector(`.grid1 [data-val='${e(r.x + n, r.y)}']`).style.cssText = ""
                        },
                        xyToNum: e,
                        getEnd: function(e, r, t) {
                            let n = {};
                            return t = Number(t),
                                "h" == r ? (n.x = e.x + t - 1,
                                    n.y = e.y) : (n.y = e.y + t - 1,
                                    n.x = e.x),
                                n
                        },
                        shadeArea: function(r, t) {
                            if (r.x == t.x)
                                for (let n = 0; n < t.y - r.y + 1; n++) {
                                    let o = document.querySelector(`.grid1 [data-val='${e(r.x, r.y + n)}']`);
                                    o.style.cssText = "\n        border-left: 2px solid yellowgreen;\n        border-right: 2px solid yellowgreen;\n        opacity: 1;\n        ",
                                    0 == n && (o.style.cssText += "\n          border-top: 2px solid yellowgreen;\n          "),
                                    n == t.x - r.x && (o.style.cssText += "\n          border-bottom: 2px solid yellowgreen;\n          ")
                                }
                            else
                                for (let n = 0; n < t.x - r.x + 1; n++) {
                                    let o = document.querySelector(`.grid1 [data-val='${e(r.x + n, r.y)}']`);
                                    o.style.cssText = "\n        border-top: 2px solid yellowgreen;\n        border-bottom: 2px solid yellowgreen;\n        opacity: 1;\n        ",
                                    0 == n && (o.style.cssText += "\n          border-left: 2px solid yellowgreen;\n          "),
                                    n == t.x - r.x && (o.style.cssText += "\n          border-right: 2px solid yellowgreen;\n          ")
                                }
                        }
                    }
                }();
                e.exports = r
            }
            ,
            44: (e, r, t) => {
                "use strict";
                t(511);
                const n = t(738)
                    , o = t(685)
                    , a = t(211)
                    , i = o()
                    , s = a();
                let c = document.querySelectorAll(".boat")
                    , l = document.querySelectorAll(".grid1 > div")
                    , u = document.querySelector(".grid2")
                    , d = document.querySelector(".grid1")
                    , p = !1;
                const f = document.querySelectorAll(".spot")
                    , g = document.querySelector(".reset")
                    , h = document.querySelector(".randomise")
                    , m = document.querySelector(".play")
                    , y = document.querySelector(".header .notifications");
                function b(e) {
                    this.style.opacity = "0.2",
                        this.classList.add("temp"),
                    "1" == this.getAttribute("data-placed") && s.getGameboard().removeShip(n.numToXY(this.parentElement.getAttribute("data-val")), n.getEnd(n.numToXY(this.parentElement.getAttribute("data-val")), this.getAttribute("data-orient"), this.getAttribute("data-length")))
                }
                function v(e) {
                    if (this.style.opacity = "1",
                        this.classList.remove("temp"),
                        !this.parentElement.classList.contains("spot")) {
                        let e = Number(this.parentElement.getAttribute("data-val"));
                        s.getGameboard().placeShip(n.numToXY(e), n.getEnd(n.numToXY(e), this.getAttribute("data-orient"), this.getAttribute("data-length"))),
                            this.setAttribute("data-placed", "1")
                    }
                    l.forEach((e => {
                            e.classList.remove("over"),
                                e.style.cssText = ""
                        }
                    ));
                    let r = 0;
                    f.forEach((e => {
                            e.children.length > 0 && r++
                        }
                    )),
                    r || setTimeout(( () => {
                            m.removeAttribute("disabled"),
                                document.querySelector(".contents").style.display = "none"
                        }
                    ), 500)
                }
                function w(e) {
                    let r = document.querySelector(".temp")
                        , t = Number(r.getAttribute("data-length"))
                        , o = r.getAttribute("data-orient")
                        , a = Number(this.getAttribute("data-val"))
                        , i = n.numToXY(a)
                        , c = n.getEnd(i, o, t);
                    s.getGameboard().validPlacement(i, c) ? (n.shadeArea(i, c),
                        p = !0) : p = !1
                }
                function x(e) {
                    let r = document.querySelector(".temp")
                        , t = Number(r.getAttribute("data-length"))
                        , o = r.getAttribute("data-orient")
                        , a = Number(this.getAttribute("data-val"))
                        , i = n.numToXY(a)
                        , s = n.getEnd(i, o, t);
                    n.unshadeArea(i, s)
                }
                function E(e) {
                    if (p)
                        return e.preventDefault(),
                            !1
                }
                function q(e) {
                    if (!p)
                        return;
                    let r = document.querySelector(".temp");
                    return e.preventDefault(),
                        e.stopPropagation(),
                        this.appendChild(r),
                    "0" == r.getAttribute("data-placed") && r.addEventListener("click", k),
                        !1
                }
                function k(e) {
                    e.stopPropagation();
                    let r = !1
                        , t = this.getAttribute("data-orient")
                        , o = Number(this.getAttribute("data-length"))
                        , a = Number(this.parentElement.getAttribute("data-val"))
                        , i = n.numToXY(a);
                    s.getGameboard().removeShip(i, n.getEnd(i, t, o));
                    let c = {};
                    if ("h" == t ? (c.y = i.y + o - 1,
                        c.x = i.x,
                        s.getGameboard().validPlacement(i, c) ? r = !0 : s.getGameboard().placeShip(i, n.getEnd(i, t, o))) : (c.x = i.x + o - 1,
                        c.y = i.y,
                        s.getGameboard().validPlacement(i, c) ? r = !0 : s.getGameboard().placeShip(i, n.getEnd(i, t, o))),
                        r) {
                        let e = this.getAttribute("data-h")
                            , r = this.getAttribute("data-w");
                        this.style.height = r + "px",
                            this.setAttribute("data-h", r),
                            this.style.width = e + "px",
                            this.setAttribute("data-w", e),
                            "h" == t ? this.setAttribute("data-orient", "v") : this.setAttribute("data-orient", "h"),
                            s.getGameboard().placeShip(i, c)
                    } else
                        this.classList.add("animate"),
                            setTimeout(( () => {
                                    this.classList.remove("animate")
                                }
                            ), 200)
                }
                function S() {
                    s.getGameboard().removeAllShips();
                    let e, r = ["two", "three", "three", "four", "five"];
                    for (let t = 0; t < 5; t++) {
                        if (2 != t) {
                            if (e = document.querySelector(`.boat.${r[t]}`),
                                e.parentElement.classList.contains("spot"))
                                continue;
                            document.querySelector(`.spot.${r[t]}`).appendChild(e)
                        } else {
                            if (e = document.querySelector('.boat.three[data-placed="1"]'),
                                !e)
                                continue;
                            if (e.parentElement.classList.contains("spot"))
                                continue;
                            let r = document.querySelector(".spot.three .boat");
                            document.querySelectorAll(".spot.three").forEach((t => {
                                    t !== r && t.appendChild(e)
                                }
                            ))
                        }
                        e.setAttribute("data-placed", "0"),
                            e.setAttribute("data-orient", "h");
                        let n = Number(e.getAttribute("data-w"))
                            , o = Number(e.getAttribute("data-h"))
                            , a = n;
                        n = n > o ? n : o,
                            o = a == n ? o : a,
                            e.setAttribute("data-w", n),
                            e.setAttribute("data-h", o),
                            e.style.height = o + "px",
                            e.style.width = n + "px",
                            e.removeEventListener("click", k)
                    }
                }
                function A(e) {
                    e.classList.add("disabled")
                }
                function O(e) {
                    e.classList.remove("disabled")
                }
                function L() {
                    S(),
                        s.randomlyPlaceShips(),
                        function() {
                            for (let e = 0; e < 10; e++)
                                for (let r = 0; r < 10; r++)
                                    if (s.getGameboard().getBoard()[e][r].ship) {
                                        if (0 != e && s.getGameboard().getBoard()[e - 1][r].ship)
                                            continue;
                                        if (0 != r && s.getGameboard().getBoard()[e][r - 1].ship)
                                            continue;
                                        let t, o = s.getGameboard().getBoard()[e][r].ship.length;
                                        t = 9 != r && s.getGameboard().getBoard()[e][r + 1].ship ? "h" : "v";
                                        let a, i = n.xyToNum(r, e), c = ["zero", "one", "two", "three", "four", "five"];
                                        if (a = 3 != o ? document.querySelector(`.boat.${c[o]}`) : document.querySelector('.boat.three[data-placed="0"]'),
                                        "v" == t) {
                                            let e = a.getAttribute("data-h")
                                                , r = a.getAttribute("data-w");
                                            a.style.height = r + "px",
                                                a.setAttribute("data-h", r),
                                                a.style.width = e + "px",
                                                a.setAttribute("data-w", e),
                                                a.setAttribute("data-orient", "v")
                                        }
                                        document.querySelector(`.grid1 [data-val="${i}"]`).appendChild(a),
                                            a.setAttribute("data-placed", "1"),
                                            a.addEventListener("click", k)
                                    }
                        }(),
                        document.querySelector(".contents").style.display = "none",
                        m.removeAttribute("disabled")
                }
                function D() {
                    let e = Number(this.getAttribute("data-val"));
                    if (this.removeEventListener("click", D),
                        s.attack(i, n.numToXY(e))) {
                        const r = document.createElement("div");
                        r.classList.add("st");
                        const t = document.createElement("div");
                        t.classList.add("nd"),
                            this.classList.add("correcthit"),
                            this.appendChild(r),
                            this.appendChild(t),
                            N(e, u, s, i);
                        let n = i.getGameboard().getShipFromNum(e);
                        if (n.isSunk()) {
                            R(i, n, e);
                            let r = document.querySelector(`.showprogress.two .rep${n.length}[data-sunk='false']`);
                            r.querySelectorAll("div").forEach((e => {
                                    e.style.backgroundColor = "red"
                                }
                            )),
                                r.setAttribute("data-sunk", "true"),
                            i.lossCondition() && T(i)
                        }
                    } else {
                        const e = document.createElement("div");
                        e.classList.add("blackdot"),
                            O(d),
                            A(u),
                            this.classList.add("wronghit"),
                            this.appendChild(e);
                        let r = i.ai(s);
                        console.log("computer ai returns: ", r),
                        s.getGameboard().getBoard()[r.y][r.x].isHit && console.log("IMPOSSIBLE");
                        let t = document.querySelector(`.grid1 [data-val='${n.xyToNum(r.x, r.y)}']`);
                        setTimeout(( () => {
                                C(r, t),
                                    O(u),
                                    A(d)
                            }
                        ), 1e3)
                    }
                }
                function R(e, r, t) {
                    t = Number(t);
                    let n, o, a, s = r.length;
                    if (e == i) {
                        let e, r, i, c, l = j(t);
                        l.before && (e = document.querySelector(`.grid2 [data-val='${l.before}']`)),
                        l.after && (r = document.querySelector(`.grid2 [data-val='${l.after}']`)),
                        e && (i = e.childNodes.length > 1),
                        r && (c = r.childNodes.length > 1),
                            n = i || c ? "h" : "v",
                            o = t;
                        let u = t
                            , d = document.querySelector(`.grid2 [data-val='${u}']`);
                        if ("h" == n) {
                            for (; d && d.childNodes.length > 1; )
                                u -= 1,
                                    o = u,
                                    d = document.querySelector(`.grid2 [data-val='${u}']`);
                            for (o++; !P(t, o); )
                                o++;
                            a = o + s - 1
                        } else {
                            for (; d && d.childNodes.length > 1; )
                                u -= 10,
                                    o = u,
                                    d = document.querySelector(`.grid2 [data-val='${u}']`);
                            o += 10,
                                a = o + 10 * (s - 1)
                        }
                        let p, f = document.createElement("div");
                        switch (f.classList.add("grid2boat"),
                            s) {
                            case 2:
                                p = 69;
                                break;
                            case 3:
                                p = 104;
                                break;
                            case 4:
                                p = 139;
                                break;
                            case 5:
                                p = 174
                        }
                        "h" == n ? (f.style.height = "33px",
                            f.style.width = `${p}px`) : (f.style.width = "33px",
                            f.style.height = `${p}px`),
                            document.querySelector(`.grid2 [data-val='${o}']`).appendChild(f)
                    } else {
                        let e, r, a, i, s = j(t);
                        s.before && (e = document.querySelector(`.grid1 [data-val='${s.before}']`)),
                        s.after && (r = document.querySelector(`.grid1 [data-val='${s.after}']`)),
                        e && (a = e.childNodes.length > 1),
                        r && (i = r.childNodes.length > 1),
                            n = a || i ? "h" : "v",
                            o = t;
                        let c = t
                            , l = document.querySelector(`.grid1 [data-val='${c}']`);
                        if ("h" == n) {
                            for (; l && l.childNodes.length > 1; )
                                c -= 1,
                                    o = c,
                                    l = document.querySelector(`.grid1 [data-val='${c}']`);
                            for (o++; !P(t, o); )
                                o++
                        } else {
                            for (; l && l.childNodes.length > 1; )
                                c -= 10,
                                    o = c,
                                    l = document.querySelector(`.grid1 [data-val='${c}']`);
                            o += 10
                        }
                        document.querySelector(`.grid1 [data-val='${o}']`).childNodes[0].classList.add("ownhit")
                    }
                }
                function T(e) {
                    document.querySelectorAll(".grid2 > div").forEach((e => {
                            e.removeEventListener("click", D)
                        }
                    )),
                        e == s ? (y.style.backgroundColor = "red",
                            y.textContent = "You lose.") : (y.style.backgroundColor = "yellowgreen",
                            y.textContent = "You win!");
                    let r = document.createElement("button");
                    r.textContent = "Play again!",
                        r.classList.add("rematch"),
                        r.addEventListener("click", ( () => {
                                window.location.reload()
                            }
                        )),
                        y.appendChild(r)
                }
                function C(e, r) {
                    if (i.attack(s, e)) {
                        const t = document.createElement("div");
                        t.classList.add("st");
                        const o = document.createElement("div");
                        o.classList.add("nd"),
                            r.classList.add("correcthit"),
                            r.appendChild(t),
                            r.appendChild(o),
                            N(Number(r.getAttribute("data-val")), d, i, s);
                        let a = s.getGameboard().getShipFromNum(n.xyToNum(e.x, e.y));
                        if (a.isSunk()) {
                            R(s, a, n.xyToNum(e.x, e.y));
                            let r = document.querySelector(`.showprogress.one .rep${a.length}[data-sunk='false']`);
                            if (r.querySelectorAll("div").forEach((e => {
                                    e.style.backgroundColor = "red"
                                }
                            )),
                                r.setAttribute("data-sunk", "true"),
                                s.lossCondition())
                                return void T(s)
                        }
                        setTimeout(( () => {
                                let e = i.ai(s);
                                return console.log("computer ai returns: ", e),
                                s.getGameboard().getBoard()[e.y][e.x].isHit && console.log("IMPOSSIBLE"),
                                    C(e, document.querySelector(`.grid1 [data-val='${n.xyToNum(e.x, e.y)}']`))
                            }
                        ), 500)
                    } else {
                        const e = document.createElement("div");
                        e.classList.add("blackdot"),
                            r.classList.add("wronghit"),
                            r.appendChild(e)
                    }
                }
                function N(e, r, t, o) {
                    let a = n.numToXY(e)
                        , s = function(e) {
                        let r = [];
                        return r.push({
                            x: e.x - 1,
                            y: e.y - 1
                        }),
                            r.push({
                                x: e.x - 1,
                                y: e.y + 1
                            }),
                            r.push({
                                x: e.x + 1,
                                y: e.y - 1
                            }),
                            r.push({
                                x: e.x + 1,
                                y: e.y + 1
                            }),
                            r.forEach((e => {
                                    (e.x > 9 || e.x < 0) && (e.invalid = !0),
                                    (e.y > 9 || e.y < 0) && (e.invalid = !0)
                                }
                            )),
                            r.filter((e => !e.invalid)).map((e => n.xyToNum(e.x, e.y)))
                    }(a);
                    if (o.getGameboard().getBoard()[a.y][a.x].ship.isSunk()) {
                        let r, t, n, c = o.getGameboard().getBoard()[a.y][a.x].ship.length;
                        if (o == i) {
                            let o, a, i, s, l = j(e);
                            l.before && (o = document.querySelector(`.grid2 [data-val='${l.before}']`)),
                            l.after && (a = document.querySelector(`.grid2 [data-val='${l.after}']`)),
                            o && (i = o.childNodes.length > 1),
                            a && (s = a.childNodes.length > 1),
                                r = i || s ? "h" : "v",
                                t = e;
                            let u = e
                                , d = document.querySelector(`.grid2 [data-val='${u}']`);
                            if ("h" == r) {
                                for (; d && d.childNodes.length > 1; )
                                    u -= 1,
                                        t = u,
                                        d = document.querySelector(`.grid2 [data-val='${u}']`);
                                n = t + c + 1,
                                P(e, t) || (t = null),
                                P(e, n) || (n = null)
                            } else {
                                for (; d && d.childNodes.length > 1; )
                                    u -= 10,
                                        t = u,
                                        d = document.querySelector(`.grid2 [data-val='${u}']`);
                                n = t + 10 * (c - 1) + 20
                            }
                        } else {
                            let o, a, i, s, l = j(e);
                            l.before && (o = document.querySelector(`.grid1 [data-val='${l.before}']`)),
                            l.after && (a = document.querySelector(`.grid1 [data-val='${l.after}']`)),
                            o && (i = o.childNodes.length > 1),
                            a && (s = a.childNodes.length > 1),
                                r = i || s ? "h" : "v",
                                t = e;
                            let u = e
                                , d = document.querySelector(`.grid1 [data-val='${u}']`);
                            if ("h" == r) {
                                for (; d && d.childNodes.length > 1; )
                                    u -= 1,
                                        t = u,
                                        d = document.querySelector(`.grid1 [data-val='${u}']`);
                                n = t + c + 1,
                                P(e, t) || (t = null),
                                P(e, n) || (n = null)
                            } else {
                                for (; d && d.childNodes.length > 1; )
                                    u -= 10,
                                        t = u,
                                        d = document.querySelector(`.grid1 [data-val='${u}']`);
                                n = t + 10 * (c - 1) + 20
                            }
                        }
                        t && 0 < t && t < 100 && s.push(t),
                        n && 0 < n && n < 100 && s.push(n)
                    }
                    s.forEach((e => {
                            let a = r.querySelector(`[data-val='${e}']`);
                            if (a && 0 == a.childNodes.length) {
                                t.attack(o, n.numToXY(e));
                                const r = document.createElement("div");
                                r.classList.add("blackdot"),
                                    a.appendChild(r),
                                    a.classList.add("autosolve"),
                                    a.removeEventListener("click", D)
                            }
                        }
                    ))
                }
                function j(e) {
                    let r = n.numToXY(e)
                        , t = {
                        x: r.x - 1,
                        y: r.y
                    }
                        , o = {
                        x: r.x + 1,
                        y: r.y
                    };
                    return t.x >= 0 && t.x <= 9 || (t = null),
                    o.x >= 0 && o.x <= 9 || (o = null),
                    t && (t = n.xyToNum(t.x, t.y)),
                    o && (o = n.xyToNum(o.x, o.y)),
                        {
                            before: t,
                            after: o
                        }
                }
                function P(e, r) {
                    return Math.floor(e / 10) == Math.floor(r / 10)
                }
                A(u),
                    c.forEach((e => {
                            e.addEventListener("dragstart", b),
                                e.addEventListener("dragend", v)
                        }
                    )),
                    L(),
                    l.forEach((e => {
                            e.addEventListener("dragenter", w),
                                e.addEventListener("dragleave", x),
                                e.addEventListener("dragover", E),
                                e.addEventListener("drop", q)
                        }
                    )),
                    h.addEventListener("click", L),
                    g.addEventListener("click", ( () => {
                            document.querySelector(".contents").style.cssText = "",
                                m.setAttribute("disabled", "true"),
                                S()
                        }
                    )),
                    m.addEventListener("click", ( () => {
                            l.forEach((e => {
                                    e.removeEventListener("dragenter", w),
                                        e.removeEventListener("dragleave", x),
                                        e.removeEventListener("dragover", E),
                                        e.removeEventListener("drop", q)
                                }
                            )),
                                c.forEach((e => {
                                        e.removeEventListener("dragstart", b),
                                            e.removeEventListener("dragend", v),
                                            e.removeEventListener("click", k),
                                            e.removeAttribute("draggable")
                                    }
                                )),
                                g.setAttribute("disabled", "true"),
                                h.setAttribute("disabled", "true"),
                                m.setAttribute("disabled", "true"),
                                O(u),
                                d.classList.add("nodrag"),
                                i.randomlyPlaceShips(),
                                document.querySelectorAll(".grid2 > div").forEach((e => {
                                        e.addEventListener("click", D)
                                    }
                                )),
                                document.querySelectorAll(".showprogress").forEach((e => {
                                        e.style.cssText = ""
                                    }
                                )),
                                y.textContent = "Good luck!"
                        }
                    ))
            }
            ,
            211: (e, r, t) => {
                const n = t(906);
                e.exports = function() {
                    const e = n();
                    function r() {
                        return e
                    }
                    function t(r, t) {
                        e.placeShip(r, t)
                    }
                    return {
                        attack: function(e, r) {
                            return e.getGameboard().receiveAttack(r.x, r.y)
                        },
                        getGameboard: r,
                        lossCondition: function() {
                            return r().allShipsSunk()
                        },
                        putShipOnGameBoard: t,
                        randomlyPlaceShips: function() {
                            const e = [5, 4, 3, 3, 2];
                            let n, o = {
                                x: null,
                                y: null
                            }, a = {
                                x: null,
                                y: null
                            };
                            for (let i = 0; i < e.length; i++) {
                                for (n = 10 * Math.random(); ; ) {
                                    if (o.x = Math.floor(10 * Math.random()),
                                        o.y = Math.floor(10 * Math.random()),
                                    n < 5) {
                                        if (a.x = o.x + e[i] - 1,
                                        a.x > 9)
                                            continue;
                                        a.y = o.y
                                    } else {
                                        if (a.y = o.y + e[i] - 1,
                                        a.y > 9)
                                            continue;
                                        a.x = o.x
                                    }
                                    if (r().validPlacement(o, a))
                                        break
                                }
                                t(o, a)
                            }
                        }
                    }
                }
            }
            ,
            432: e => {
                e.exports = function(e) {
                    return {
                        length: e,
                        hits: null,
                        sunk: !1,
                        hit: function() {
                            this.sunk || (this.hits ? this.hits++ : this.hits = 1,
                                this.isSunk())
                        },
                        isSunk: function() {
                            return this.hits == this.length && (this.sunk = !0,
                                !0)
                        }
                    }
                }
            }
        }, n = {};
        function o(e) {
            var r = n[e];
            if (void 0 !== r)
                return r.exports;
            var a = n[e] = {
                id: e,
                exports: {}
            }
                , i = {
                id: e,
                module: a,
                factory: t[e],
                require: o
            };
            return o.i.forEach((function(e) {
                    e(i)
                }
            )),
                a = i.module,
                i.factory.call(a.exports, a, a.exports, i.require),
                a.exports
        }
        o.m = t,
            o.c = n,
            o.i = [],
            o.n = e => {
                var r = e && e.__esModule ? () => e.default : () => e;
                return o.d(r, {
                    a: r
                }),
                    r
            }
            ,
            o.d = (e, r) => {
                for (var t in r)
                    o.o(r, t) && !o.o(e, t) && Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: r[t]
                    })
            }
            ,
            o.hu = e => e + "." + o.h() + ".hot-update.js",
            o.hmrF = () => "main." + o.h() + ".hot-update.json",
            o.h = () => "45e34f23af9b9dee275e",
            o.g = function() {
                if ("object" == typeof globalThis)
                    return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (e) {
                    if ("object" == typeof window)
                        return window
                }
            }(),
            o.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r),
            e = {},
            r = "battleship-game-odin:",
            o.l = (t, n, a, i) => {
                if (e[t])
                    e[t].push(n);
                else {
                    var s, c;
                    if (void 0 !== a)
                        for (var l = document.getElementsByTagName("script"), u = 0; u < l.length; u++) {
                            var d = l[u];
                            if (d.getAttribute("src") == t || d.getAttribute("data-webpack") == r + a) {
                                s = d;
                                break
                            }
                        }
                    s || (c = !0,
                        (s = document.createElement("script")).charset = "utf-8",
                        s.timeout = 120,
                    o.nc && s.setAttribute("nonce", o.nc),
                        s.setAttribute("data-webpack", r + a),
                        s.src = t),
                        e[t] = [n];
                    var p = (r, n) => {
                        s.onerror = s.onload = null,
                            clearTimeout(f);
                        var o = e[t];
                        if (delete e[t],
                        s.parentNode && s.parentNode.removeChild(s),
                        o && o.forEach((e => e(n))),
                            r)
                            return r(n)
                    }
                        , f = setTimeout(p.bind(null, void 0, {
                        type: "timeout",
                        target: s
                    }), 12e4);
                    s.onerror = p.bind(null, s.onerror),
                        s.onload = p.bind(null, s.onload),
                    c && document.head.appendChild(s)
                }
            }
            ,
            o.r = e => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
            }
            ,
            ( () => {
                    var e, r, t, n = {}, a = o.c, i = [], s = [], c = "idle", l = 0, u = [];
                    function d(e) {
                        c = e;
                        for (var r = [], t = 0; t < s.length; t++)
                            r[t] = s[t].call(null, e);
                        return Promise.all(r).then((function() {}
                        ))
                    }
                    function p() {
                        0 == --l && d("ready").then((function() {
                                if (0 === l) {
                                    var e = u;
                                    u = [];
                                    for (var r = 0; r < e.length; r++)
                                        e[r]()
                                }
                            }
                        ))
                    }
                    function f(e) {
                        if ("idle" !== c)
                            throw new Error("check() is only allowed in idle status");
                        return d("check").then(o.hmrM).then((function(t) {
                                return t ? d("prepare").then((function() {
                                        var n = [];
                                        return r = [],
                                            Promise.all(Object.keys(o.hmrC).reduce((function(e, a) {
                                                    return o.hmrC[a](t.c, t.r, t.m, e, r, n),
                                                        e
                                                }
                                            ), [])).then((function() {
                                                    return r = function() {
                                                        return e ? h(e) : d("ready").then((function() {
                                                                return n
                                                            }
                                                        ))
                                                    }
                                                        ,
                                                        0 === l ? r() : new Promise((function(e) {
                                                                u.push((function() {
                                                                        e(r())
                                                                    }
                                                                ))
                                                            }
                                                        ));
                                                    var r
                                                }
                                            ))
                                    }
                                )) : d(m() ? "ready" : "idle").then((function() {
                                        return null
                                    }
                                ))
                            }
                        ))
                    }
                    function g(e) {
                        return "ready" !== c ? Promise.resolve().then((function() {
                                throw new Error("apply() is only allowed in ready status (state: " + c + ")")
                            }
                        )) : h(e)
                    }
                    function h(e) {
                        e = e || {},
                            m();
                        var n = r.map((function(r) {
                                return r(e)
                            }
                        ));
                        r = void 0;
                        var o = n.map((function(e) {
                                return e.error
                            }
                        )).filter(Boolean);
                        if (o.length > 0)
                            return d("abort").then((function() {
                                    throw o[0]
                                }
                            ));
                        var a = d("dispose");
                        n.forEach((function(e) {
                                e.dispose && e.dispose()
                            }
                        ));
                        var i, s = d("apply"), c = function(e) {
                            i || (i = e)
                        }, l = [];
                        return n.forEach((function(e) {
                                if (e.apply) {
                                    var r = e.apply(c);
                                    if (r)
                                        for (var t = 0; t < r.length; t++)
                                            l.push(r[t])
                                }
                            }
                        )),
                            Promise.all([a, s]).then((function() {
                                    return i ? d("fail").then((function() {
                                            throw i
                                        }
                                    )) : t ? h(e).then((function(e) {
                                            return l.forEach((function(r) {
                                                    e.indexOf(r) < 0 && e.push(r)
                                                }
                                            )),
                                                e
                                        }
                                    )) : d("idle").then((function() {
                                            return l
                                        }
                                    ))
                                }
                            ))
                    }
                    function m() {
                        if (t)
                            return r || (r = []),
                                Object.keys(o.hmrI).forEach((function(e) {
                                        t.forEach((function(t) {
                                                o.hmrI[e](t, r)
                                            }
                                        ))
                                    }
                                )),
                                t = void 0,
                                !0
                    }
                    o.hmrD = n,
                        o.i.push((function(u) {
                                var h, m, y, b, v = u.module, w = function(r, t) {
                                    var n = a[t];
                                    if (!n)
                                        return r;
                                    var o = function(o) {
                                        if (n.hot.active) {
                                            if (a[o]) {
                                                var s = a[o].parents;
                                                -1 === s.indexOf(t) && s.push(t)
                                            } else
                                                i = [t],
                                                    e = o;
                                            -1 === n.children.indexOf(o) && n.children.push(o)
                                        } else
                                            console.warn("[HMR] unexpected require(" + o + ") from disposed module " + t),
                                                i = [];
                                        return r(o)
                                    }
                                        , s = function(e) {
                                        return {
                                            configurable: !0,
                                            enumerable: !0,
                                            get: function() {
                                                return r[e]
                                            },
                                            set: function(t) {
                                                r[e] = t
                                            }
                                        }
                                    };
                                    for (var u in r)
                                        Object.prototype.hasOwnProperty.call(r, u) && "e" !== u && Object.defineProperty(o, u, s(u));
                                    return o.e = function(e, t) {
                                        return function(e) {
                                            switch (c) {
                                                case "ready":
                                                    d("prepare");
                                                case "prepare":
                                                    return l++,
                                                        e.then(p, p),
                                                        e;
                                                default:
                                                    return e
                                            }
                                        }(r.e(e, t))
                                    }
                                        ,
                                        o
                                }(u.require, u.id);
                                v.hot = (h = u.id,
                                    m = v,
                                    b = {
                                        _acceptedDependencies: {},
                                        _acceptedErrorHandlers: {},
                                        _declinedDependencies: {},
                                        _selfAccepted: !1,
                                        _selfDeclined: !1,
                                        _selfInvalidated: !1,
                                        _disposeHandlers: [],
                                        _main: y = e !== h,
                                        _requireSelf: function() {
                                            i = m.parents.slice(),
                                                e = y ? void 0 : h,
                                                o(h)
                                        },
                                        active: !0,
                                        accept: function(e, r, t) {
                                            if (void 0 === e)
                                                b._selfAccepted = !0;
                                            else if ("function" == typeof e)
                                                b._selfAccepted = e;
                                            else if ("object" == typeof e && null !== e)
                                                for (var n = 0; n < e.length; n++)
                                                    b._acceptedDependencies[e[n]] = r || function() {}
                                                        ,
                                                        b._acceptedErrorHandlers[e[n]] = t;
                                            else
                                                b._acceptedDependencies[e] = r || function() {}
                                                    ,
                                                    b._acceptedErrorHandlers[e] = t
                                        },
                                        decline: function(e) {
                                            if (void 0 === e)
                                                b._selfDeclined = !0;
                                            else if ("object" == typeof e && null !== e)
                                                for (var r = 0; r < e.length; r++)
                                                    b._declinedDependencies[e[r]] = !0;
                                            else
                                                b._declinedDependencies[e] = !0
                                        },
                                        dispose: function(e) {
                                            b._disposeHandlers.push(e)
                                        },
                                        addDisposeHandler: function(e) {
                                            b._disposeHandlers.push(e)
                                        },
                                        removeDisposeHandler: function(e) {
                                            var r = b._disposeHandlers.indexOf(e);
                                            r >= 0 && b._disposeHandlers.splice(r, 1)
                                        },
                                        invalidate: function() {
                                            switch (this._selfInvalidated = !0,
                                                c) {
                                                case "idle":
                                                    r = [],
                                                        Object.keys(o.hmrI).forEach((function(e) {
                                                                o.hmrI[e](h, r)
                                                            }
                                                        )),
                                                        d("ready");
                                                    break;
                                                case "ready":
                                                    Object.keys(o.hmrI).forEach((function(e) {
                                                            o.hmrI[e](h, r)
                                                        }
                                                    ));
                                                    break;
                                                case "prepare":
                                                case "check":
                                                case "dispose":
                                                case "apply":
                                                    (t = t || []).push(h)
                                            }
                                        },
                                        check: f,
                                        apply: g,
                                        status: function(e) {
                                            if (!e)
                                                return c;
                                            s.push(e)
                                        },
                                        addStatusHandler: function(e) {
                                            s.push(e)
                                        },
                                        removeStatusHandler: function(e) {
                                            var r = s.indexOf(e);
                                            r >= 0 && s.splice(r, 1)
                                        },
                                        data: n[h]
                                    },
                                    e = void 0,
                                    b),
                                    v.parents = i,
                                    v.children = [],
                                    i = [],
                                    u.require = w
                            }
                        )),
                        o.hmrC = {},
                        o.hmrI = {}
                }
            )(),
            ( () => {
                    var e;
                    o.g.importScripts && (e = o.g.location + "");
                    var r = o.g.document;
                    if (!e && r && (r.currentScript && "SCRIPT" === r.currentScript.tagName.toUpperCase() && (e = r.currentScript.src),
                        !e)) {
                        var t = r.getElementsByTagName("script");
                        if (t.length)
                            for (var n = t.length - 1; n > -1 && (!e || !/^http(s?):/.test(e)); )
                                e = t[n--].src
                    }
                    if (!e)
                        throw new Error("Automatic publicPath is not supported in this browser");
                    e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
                        o.p = e
                }
            )(),
            ( () => {
                    var e, r, t, n, a, i = o.hmrS_jsonp = o.hmrS_jsonp || {
                        792: 0
                    }, s = {};
                    function c(r, t) {
                        return e = t,
                            new Promise(( (e, t) => {
                                    s[r] = e;
                                    var n = o.p + o.hu(r)
                                        , a = new Error;
                                    o.l(n, (e => {
                                            if (s[r]) {
                                                s[r] = void 0;
                                                var n = e && ("load" === e.type ? "missing" : e.type)
                                                    , o = e && e.target && e.target.src;
                                                a.message = "Loading hot update chunk " + r + " failed.\n(" + n + ": " + o + ")",
                                                    a.name = "ChunkLoadError",
                                                    a.type = n,
                                                    a.request = o,
                                                    t(a)
                                            }
                                        }
                                    ))
                                }
                            ))
                    }
                    function l(e) {
                        function s(e) {
                            for (var r = [e], t = {}, n = r.map((function(e) {
                                    return {
                                        chain: [e],
                                        id: e
                                    }
                                }
                            )); n.length > 0; ) {
                                var a = n.pop()
                                    , i = a.id
                                    , s = a.chain
                                    , l = o.c[i];
                                if (l && (!l.hot._selfAccepted || l.hot._selfInvalidated)) {
                                    if (l.hot._selfDeclined)
                                        return {
                                            type: "self-declined",
                                            chain: s,
                                            moduleId: i
                                        };
                                    if (l.hot._main)
                                        return {
                                            type: "unaccepted",
                                            chain: s,
                                            moduleId: i
                                        };
                                    for (var u = 0; u < l.parents.length; u++) {
                                        var d = l.parents[u]
                                            , p = o.c[d];
                                        if (p) {
                                            if (p.hot._declinedDependencies[i])
                                                return {
                                                    type: "declined",
                                                    chain: s.concat([d]),
                                                    moduleId: i,
                                                    parentId: d
                                                };
                                            -1 === r.indexOf(d) && (p.hot._acceptedDependencies[i] ? (t[d] || (t[d] = []),
                                                c(t[d], [i])) : (delete t[d],
                                                r.push(d),
                                                n.push({
                                                    chain: s.concat([d]),
                                                    id: d
                                                })))
                                        }
                                    }
                                }
                            }
                            return {
                                type: "accepted",
                                moduleId: e,
                                outdatedModules: r,
                                outdatedDependencies: t
                            }
                        }
                        function c(e, r) {
                            for (var t = 0; t < r.length; t++) {
                                var n = r[t];
                                -1 === e.indexOf(n) && e.push(n)
                            }
                        }
                        o.f && delete o.f.jsonpHmr,
                            r = void 0;
                        var l = {}
                            , u = []
                            , d = {}
                            , p = function(e) {
                            console.warn("[HMR] unexpected require(" + e.id + ") to disposed module")
                        };
                        for (var f in t)
                            if (o.o(t, f)) {
                                var g = t[f]
                                    , h = g ? s(f) : {
                                    type: "disposed",
                                    moduleId: f
                                }
                                    , m = !1
                                    , y = !1
                                    , b = !1
                                    , v = "";
                                switch (h.chain && (v = "\nUpdate propagation: " + h.chain.join(" -> ")),
                                    h.type) {
                                    case "self-declined":
                                        e.onDeclined && e.onDeclined(h),
                                        e.ignoreDeclined || (m = new Error("Aborted because of self decline: " + h.moduleId + v));
                                        break;
                                    case "declined":
                                        e.onDeclined && e.onDeclined(h),
                                        e.ignoreDeclined || (m = new Error("Aborted because of declined dependency: " + h.moduleId + " in " + h.parentId + v));
                                        break;
                                    case "unaccepted":
                                        e.onUnaccepted && e.onUnaccepted(h),
                                        e.ignoreUnaccepted || (m = new Error("Aborted because " + f + " is not accepted" + v));
                                        break;
                                    case "accepted":
                                        e.onAccepted && e.onAccepted(h),
                                            y = !0;
                                        break;
                                    case "disposed":
                                        e.onDisposed && e.onDisposed(h),
                                            b = !0;
                                        break;
                                    default:
                                        throw new Error("Unexception type " + h.type)
                                }
                                if (m)
                                    return {
                                        error: m
                                    };
                                if (y)
                                    for (f in d[f] = g,
                                        c(u, h.outdatedModules),
                                        h.outdatedDependencies)
                                        o.o(h.outdatedDependencies, f) && (l[f] || (l[f] = []),
                                            c(l[f], h.outdatedDependencies[f]));
                                b && (c(u, [h.moduleId]),
                                    d[f] = p)
                            }
                        t = void 0;
                        for (var w, x = [], E = 0; E < u.length; E++) {
                            var q = u[E]
                                , k = o.c[q];
                            k && (k.hot._selfAccepted || k.hot._main) && d[q] !== p && !k.hot._selfInvalidated && x.push({
                                module: q,
                                require: k.hot._requireSelf,
                                errorHandler: k.hot._selfAccepted
                            })
                        }
                        return {
                            dispose: function() {
                                var e;
                                n.forEach((function(e) {
                                        delete i[e]
                                    }
                                )),
                                    n = void 0;
                                for (var r, t = u.slice(); t.length > 0; ) {
                                    var a = t.pop()
                                        , s = o.c[a];
                                    if (s) {
                                        var c = {}
                                            , d = s.hot._disposeHandlers;
                                        for (E = 0; E < d.length; E++)
                                            d[E].call(null, c);
                                        for (o.hmrD[a] = c,
                                                 s.hot.active = !1,
                                                 delete o.c[a],
                                                 delete l[a],
                                                 E = 0; E < s.children.length; E++) {
                                            var p = o.c[s.children[E]];
                                            p && (e = p.parents.indexOf(a)) >= 0 && p.parents.splice(e, 1)
                                        }
                                    }
                                }
                                for (var f in l)
                                    if (o.o(l, f) && (s = o.c[f]))
                                        for (w = l[f],
                                                 E = 0; E < w.length; E++)
                                            r = w[E],
                                            (e = s.children.indexOf(r)) >= 0 && s.children.splice(e, 1)
                            },
                            apply: function(r) {
                                for (var t in d)
                                    o.o(d, t) && (o.m[t] = d[t]);
                                for (var n = 0; n < a.length; n++)
                                    a[n](o);
                                for (var i in l)
                                    if (o.o(l, i)) {
                                        var s = o.c[i];
                                        if (s) {
                                            w = l[i];
                                            for (var c = [], p = [], f = [], g = 0; g < w.length; g++) {
                                                var h = w[g]
                                                    , m = s.hot._acceptedDependencies[h]
                                                    , y = s.hot._acceptedErrorHandlers[h];
                                                if (m) {
                                                    if (-1 !== c.indexOf(m))
                                                        continue;
                                                    c.push(m),
                                                        p.push(y),
                                                        f.push(h)
                                                }
                                            }
                                            for (var b = 0; b < c.length; b++)
                                                try {
                                                    c[b].call(null, w)
                                                } catch (t) {
                                                    if ("function" == typeof p[b])
                                                        try {
                                                            p[b](t, {
                                                                moduleId: i,
                                                                dependencyId: f[b]
                                                            })
                                                        } catch (n) {
                                                            e.onErrored && e.onErrored({
                                                                type: "accept-error-handler-errored",
                                                                moduleId: i,
                                                                dependencyId: f[b],
                                                                error: n,
                                                                originalError: t
                                                            }),
                                                            e.ignoreErrored || (r(n),
                                                                r(t))
                                                        }
                                                    else
                                                        e.onErrored && e.onErrored({
                                                            type: "accept-errored",
                                                            moduleId: i,
                                                            dependencyId: f[b],
                                                            error: t
                                                        }),
                                                        e.ignoreErrored || r(t)
                                                }
                                        }
                                    }
                                for (var v = 0; v < x.length; v++) {
                                    var E = x[v]
                                        , q = E.module;
                                    try {
                                        E.require(q)
                                    } catch (t) {
                                        if ("function" == typeof E.errorHandler)
                                            try {
                                                E.errorHandler(t, {
                                                    moduleId: q,
                                                    module: o.c[q]
                                                })
                                            } catch (n) {
                                                e.onErrored && e.onErrored({
                                                    type: "self-accept-error-handler-errored",
                                                    moduleId: q,
                                                    error: n,
                                                    originalError: t
                                                }),
                                                e.ignoreErrored || (r(n),
                                                    r(t))
                                            }
                                        else
                                            e.onErrored && e.onErrored({
                                                type: "self-accept-errored",
                                                moduleId: q,
                                                error: t
                                            }),
                                            e.ignoreErrored || r(t)
                                    }
                                }
                                return u
                            }
                        }
                    }
                    self.webpackHotUpdatebattleship_game_odin = (r, n, i) => {
                        for (var c in n)
                            o.o(n, c) && (t[c] = n[c],
                            e && e.push(c));
                        i && a.push(i),
                        s[r] && (s[r](),
                            s[r] = void 0)
                    }
                        ,
                        o.hmrI.jsonp = function(e, r) {
                            t || (t = {},
                                a = [],
                                n = [],
                                r.push(l)),
                            o.o(t, e) || (t[e] = o.m[e])
                        }
                        ,
                        o.hmrC.jsonp = function(e, s, u, d, p, f) {
                            p.push(l),
                                r = {},
                                n = s,
                                t = u.reduce((function(e, r) {
                                        return e[r] = !1,
                                            e
                                    }
                                ), {}),
                                a = [],
                                e.forEach((function(e) {
                                        o.o(i, e) && void 0 !== i[e] ? (d.push(c(e, f)),
                                            r[e] = !0) : r[e] = !1
                                    }
                                )),
                            o.f && (o.f.jsonpHmr = function(e, t) {
                                    r && o.o(r, e) && !r[e] && (t.push(c(e)),
                                        r[e] = !0)
                                }
                            )
                        }
                        ,
                        o.hmrM = () => {
                            if ("undefined" == typeof fetch)
                                throw new Error("No browser support: need fetch API");
                            return fetch(o.p + o.hmrF()).then((e => {
                                    if (404 !== e.status) {
                                        if (!e.ok)
                                            throw new Error("Failed to fetch update manifest " + e.statusText);
                                        return e.json()
                                    }
                                }
                            ))
                        }
                }
            )(),
            o.nc = void 0,
            o(274),
            o(943),
            o(44)
    }
)();
