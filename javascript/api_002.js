(function () {
   'use strict';
   var n;

   function aa(a) {
      var b = 0;
      return function () {
         return b < a.length ? {
            done: !1,
            value: a[b++]
         } : {
            done: !0
         }
      }
   }
   var r = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
      if (a == Array.prototype || a == Object.prototype) return a;
      a[b] = c.value;
      return a
   };

   function ba(a) {
      a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
      for (var b = 0; b < a.length; ++b) {
         var c = a[b];
         if (c && c.Math == Math) return c
      }
      throw Error("Cannot find global object");
   }
   var t = ba(this);

   function u(a, b) {
      if (b) a: {
         var c = t;a = a.split(".");
         for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e]
         }
         a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && r(c, a, {
            configurable: !0,
            writable: !0,
            value: b
         })
      }
   }
   u("Symbol", function (a) {
      function b(h) {
         if (this instanceof b) throw new TypeError("Symbol is not a constructor");
         return new c(d + (h || "") + "_" + e++, h)
      }

      function c(h, f) {
         this.g = h;
         r(this, "description", {
            configurable: !0,
            writable: !0,
            value: f
         })
      }
      if (a) return a;
      c.prototype.toString = function () {
         return this.g
      };
      var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
         e = 0;
      return b
   });
   u("Symbol.iterator", function (a) {
      if (a) return a;
      a = Symbol("Symbol.iterator");
      for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
         var d = t[b[c]];
         "function" === typeof d && "function" != typeof d.prototype[a] && r(d.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function () {
               return ca(aa(this))
            }
         })
      }
      return a
   });

   function ca(a) {
      a = {
         next: a
      };
      a[Symbol.iterator] = function () {
         return this
      };
      return a
   }

   function da(a) {
      return a.raw = a
   }

   function w(a) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return {
         next: aa(a)
      };
      throw Error(String(a) + " is not an iterable or ArrayLike");
   }
   var ea = "function" == typeof Object.create ? Object.create : function (a) {
         function b() {}
         b.prototype = a;
         return new b
      },
      fa;
   if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
   else {
      var ha;
      a: {
         var ia = {
               a: !0
            },
            ja = {};
         try {
            ja.__proto__ = ia;
            ha = ja.a;
            break a
         } catch (a) {}
         ha = !1
      }
      fa = ha ? function (a, b) {
         a.__proto__ = b;
         if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
         return a
      } : null
   }
   var ka = fa;

   function la(a, b) {
      a.prototype = ea(b.prototype);
      a.prototype.constructor = a;
      if (ka) ka(a, b);
      else
         for (var c in b)
            if ("prototype" != c)
               if (Object.defineProperties) {
                  var d = Object.getOwnPropertyDescriptor(b, c);
                  d && Object.defineProperty(a, c, d)
               } else a[c] = b[c];
      a.S = b.prototype
   }

   function ma() {
      this.l = !1;
      this.h = null;
      this.i = void 0;
      this.g = 1;
      this.u = 0;
      this.j = null
   }

   function na(a) {
      if (a.l) throw new TypeError("Generator is already running");
      a.l = !0
   }
   ma.prototype.s = function (a) {
      this.i = a
   };

   function oa(a, b) {
      a.j = {
         Y: b,
         Z: !0
      };
      a.g = a.u
   }
   ma.prototype.return = function (a) {
      this.j = {
         return: a
      };
      this.g = this.u
   };

   function x(a, b, c) {
      a.g = c;
      return {
         value: b
      }
   }

   function pa(a) {
      this.g = new ma;
      this.h = a
   }

   function qa(a, b) {
      na(a.g);
      var c = a.g.h;
      if (c) return ra(a, "return" in c ? c["return"] : function (d) {
         return {
            value: d,
            done: !0
         }
      }, b, a.g.return);
      a.g.return(b);
      return z(a)
   }

   function ra(a, b, c, d) {
      try {
         var e = b.call(a.g.h, c);
         if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
         if (!e.done) return a.g.l = !1, e;
         var h = e.value
      } catch (f) {
         return a.g.h = null, oa(a.g, f), z(a)
      }
      a.g.h = null;
      d.call(a.g, h);
      return z(a)
   }

   function z(a) {
      for (; a.g.g;) try {
         var b = a.h(a.g);
         if (b) return a.g.l = !1, {
            value: b.value,
            done: !1
         }
      } catch (c) {
         a.g.i = void 0, oa(a.g, c)
      }
      a.g.l = !1;
      if (a.g.j) {
         b = a.g.j;
         a.g.j = null;
         if (b.Z) throw b.Y;
         return {
            value: b.return,
            done: !0
         }
      }
      return {
         value: void 0,
         done: !0
      }
   }

   function sa(a) {
      this.next = function (b) {
         na(a.g);
         a.g.h ? b = ra(a, a.g.h.next, b, a.g.s) : (a.g.s(b), b = z(a));
         return b
      };
      this.throw = function (b) {
         na(a.g);
         a.g.h ? b = ra(a, a.g.h["throw"], b, a.g.s) : (oa(a.g, b), b = z(a));
         return b
      };
      this.return = function (b) {
         return qa(a, b)
      };
      this[Symbol.iterator] = function () {
         return this
      }
   }

   function ta(a) {
      function b(d) {
         return a.next(d)
      }

      function c(d) {
         return a.throw(d)
      }
      return new Promise(function (d, e) {
         function h(f) {
            f.done ? d(f.value) : Promise.resolve(f.value).then(b, c).then(h, e)
         }
         h(a.next())
      })
   }

   function A(a) {
      return ta(new sa(new pa(a)))
   }

   function ua() {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
      return b
   }
   u("Promise", function (a) {
      function b(f) {
         this.g = 0;
         this.i = void 0;
         this.h = [];
         this.u = !1;
         var g = this.j();
         try {
            f(g.resolve, g.reject)
         } catch (k) {
            g.reject(k)
         }
      }

      function c() {
         this.g = null
      }

      function d(f) {
         return f instanceof b ? f : new b(function (g) {
            g(f)
         })
      }
      if (a) return a;
      c.prototype.h = function (f) {
         if (null == this.g) {
            this.g = [];
            var g = this;
            this.i(function () {
               g.l()
            })
         }
         this.g.push(f)
      };
      var e = t.setTimeout;
      c.prototype.i = function (f) {
         e(f, 0)
      };
      c.prototype.l = function () {
         for (; this.g && this.g.length;) {
            var f = this.g;
            this.g = [];
            for (var g = 0; g < f.length; ++g) {
               var k =
                  f[g];
               f[g] = null;
               try {
                  k()
               } catch (l) {
                  this.j(l)
               }
            }
         }
         this.g = null
      };
      c.prototype.j = function (f) {
         this.i(function () {
            throw f;
         })
      };
      b.prototype.j = function () {
         function f(l) {
            return function (m) {
               k || (k = !0, l.call(g, m))
            }
         }
         var g = this,
            k = !1;
         return {
            resolve: f(this.F),
            reject: f(this.l)
         }
      };
      b.prototype.F = function (f) {
         if (f === this) this.l(new TypeError("A Promise cannot resolve to itself"));
         else if (f instanceof b) this.H(f);
         else {
            a: switch (typeof f) {
               case "object":
                  var g = null != f;
                  break a;
               case "function":
                  g = !0;
                  break a;
               default:
                  g = !1
            }
            g ? this.B(f) : this.s(f)
         }
      };
      b.prototype.B = function (f) {
         var g = void 0;
         try {
            g = f.then
         } catch (k) {
            this.l(k);
            return
         }
         "function" == typeof g ? this.I(g, f) : this.s(f)
      };
      b.prototype.l = function (f) {
         this.A(2, f)
      };
      b.prototype.s = function (f) {
         this.A(1, f)
      };
      b.prototype.A = function (f, g) {
         if (0 != this.g) throw Error("Cannot settle(" + f + ", " + g + "): Promise already settled in state" + this.g);
         this.g = f;
         this.i = g;
         2 === this.g && this.G();
         this.C()
      };
      b.prototype.G = function () {
         var f = this;
         e(function () {
            if (f.D()) {
               var g = t.console;
               "undefined" !== typeof g && g.error(f.i)
            }
         }, 1)
      };
      b.prototype.D =
         function () {
            if (this.u) return !1;
            var f = t.CustomEvent,
               g = t.Event,
               k = t.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof f ? f = new f("unhandledrejection", {
               cancelable: !0
            }) : "function" === typeof g ? f = new g("unhandledrejection", {
               cancelable: !0
            }) : (f = t.document.createEvent("CustomEvent"), f.initCustomEvent("unhandledrejection", !1, !0, f));
            f.promise = this;
            f.reason = this.i;
            return k(f)
         };
      b.prototype.C = function () {
         if (null != this.h) {
            for (var f = 0; f < this.h.length; ++f) h.h(this.h[f]);
            this.h = null
         }
      };
      var h = new c;
      b.prototype.H =
         function (f) {
            var g = this.j();
            f.K(g.resolve, g.reject)
         };
      b.prototype.I = function (f, g) {
         var k = this.j();
         try {
            f.call(g, k.resolve, k.reject)
         } catch (l) {
            k.reject(l)
         }
      };
      b.prototype.then = function (f, g) {
         function k(q, v) {
            return "function" == typeof q ? function (L) {
               try {
                  l(q(L))
               } catch (y) {
                  m(y)
               }
            } : v
         }
         var l, m, p = new b(function (q, v) {
            l = q;
            m = v
         });
         this.K(k(f, l), k(g, m));
         return p
      };
      b.prototype.catch = function (f) {
         return this.then(void 0, f)
      };
      b.prototype.K = function (f, g) {
         function k() {
            switch (l.g) {
               case 1:
                  f(l.i);
                  break;
               case 2:
                  g(l.i);
                  break;
               default:
                  throw Error("Unexpected state: " +
                     l.g);
            }
         }
         var l = this;
         null == this.h ? h.h(k) : this.h.push(k);
         this.u = !0
      };
      b.resolve = d;
      b.reject = function (f) {
         return new b(function (g, k) {
            k(f)
         })
      };
      b.race = function (f) {
         return new b(function (g, k) {
            for (var l = w(f), m = l.next(); !m.done; m = l.next()) d(m.value).K(g, k)
         })
      };
      b.all = function (f) {
         var g = w(f),
            k = g.next();
         return k.done ? d([]) : new b(function (l, m) {
            function p(L) {
               return function (y) {
                  q[L] = y;
                  v--;
                  0 == v && l(q)
               }
            }
            var q = [],
               v = 0;
            do q.push(void 0), v++, d(k.value).K(p(q.length - 1), m), k = g.next(); while (!k.done)
         })
      };
      return b
   });

   function B(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b)
   }
   u("Array.prototype.find", function (a) {
      return a ? a : function (b, c) {
         a: {
            var d = this;d instanceof String && (d = String(d));
            for (var e = d.length, h = 0; h < e; h++) {
               var f = d[h];
               if (b.call(c, f, h, d)) {
                  b = f;
                  break a
               }
            }
            b = void 0
         }
         return b
      }
   });
   u("WeakMap", function (a) {
      function b(k) {
         this.g = (g += Math.random() + 1).toString();
         if (k) {
            k = w(k);
            for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
         }
      }

      function c() {}

      function d(k) {
         var l = typeof k;
         return "object" === l && null !== k || "function" === l
      }

      function e(k) {
         if (!B(k, f)) {
            var l = new c;
            r(k, f, {
               value: l
            })
         }
      }

      function h(k) {
         var l = Object[k];
         l && (Object[k] = function (m) {
            if (m instanceof c) return m;
            Object.isExtensible(m) && e(m);
            return l(m)
         })
      }
      if (function () {
            if (!a || !Object.seal) return !1;
            try {
               var k = Object.seal({}),
                  l = Object.seal({}),
                  m = new a([
                     [k, 2],
                     [l, 3]
                  ]);
               if (2 != m.get(k) || 3 != m.get(l)) return !1;
               m.delete(k);
               m.set(l, 4);
               return !m.has(k) && 4 == m.get(l)
            } catch (p) {
               return !1
            }
         }()) return a;
      var f = "$jscomp_hidden_" + Math.random();
      h("freeze");
      h("preventExtensions");
      h("seal");
      var g = 0;
      b.prototype.set = function (k, l) {
         if (!d(k)) throw Error("Invalid WeakMap key");
         e(k);
         if (!B(k, f)) throw Error("WeakMap key fail: " + k);
         k[f][this.g] = l;
         return this
      };
      b.prototype.get = function (k) {
         return d(k) && B(k, f) ? k[f][this.g] : void 0
      };
      b.prototype.has = function (k) {
         return d(k) && B(k,
            f) && B(k[f], this.g)
      };
      b.prototype.delete = function (k) {
         return d(k) && B(k, f) && B(k[f], this.g) ? delete k[f][this.g] : !1
      };
      return b
   });
   u("Map", function (a) {
      function b() {
         var g = {};
         return g.v = g.next = g.head = g
      }

      function c(g, k) {
         var l = g[1];
         return ca(function () {
            if (l) {
               for (; l.head != g[1];) l = l.v;
               for (; l.next != l.head;) return l = l.next, {
                  done: !1,
                  value: k(l)
               };
               l = null
            }
            return {
               done: !0,
               value: void 0
            }
         })
      }

      function d(g, k) {
         var l = k && typeof k;
         "object" == l || "function" == l ? h.has(k) ? l = h.get(k) : (l = "" + ++f, h.set(k, l)) : l = "p_" + k;
         var m = g[0][l];
         if (m && B(g[0], l))
            for (g = 0; g < m.length; g++) {
               var p = m[g];
               if (k !== k && p.key !== p.key || k === p.key) return {
                  id: l,
                  list: m,
                  index: g,
                  m: p
               }
            }
         return {
            id: l,
            list: m,
            index: -1,
            m: void 0
         }
      }

      function e(g) {
         this[0] = {};
         this[1] = b();
         this.size = 0;
         if (g) {
            g = w(g);
            for (var k; !(k = g.next()).done;) k = k.value, this.set(k[0], k[1])
         }
      }
      if (function () {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
            try {
               var g = Object.seal({
                     x: 4
                  }),
                  k = new a(w([
                     [g, "s"]
                  ]));
               if ("s" != k.get(g) || 1 != k.size || k.get({
                     x: 4
                  }) || k.set({
                     x: 4
                  }, "t") != k || 2 != k.size) return !1;
               var l = k.entries(),
                  m = l.next();
               if (m.done || m.value[0] != g || "s" != m.value[1]) return !1;
               m = l.next();
               return m.done || 4 != m.value[0].x ||
                  "t" != m.value[1] || !l.next().done ? !1 : !0
            } catch (p) {
               return !1
            }
         }()) return a;
      var h = new WeakMap;
      e.prototype.set = function (g, k) {
         g = 0 === g ? 0 : g;
         var l = d(this, g);
         l.list || (l.list = this[0][l.id] = []);
         l.m ? l.m.value = k : (l.m = {
            next: this[1],
            v: this[1].v,
            head: this[1],
            key: g,
            value: k
         }, l.list.push(l.m), this[1].v.next = l.m, this[1].v = l.m, this.size++);
         return this
      };
      e.prototype.delete = function (g) {
         g = d(this, g);
         return g.m && g.list ? (g.list.splice(g.index, 1), g.list.length || delete this[0][g.id], g.m.v.next = g.m.next, g.m.next.v = g.m.v, g.m.head = null,
            this.size--, !0) : !1
      };
      e.prototype.clear = function () {
         this[0] = {};
         this[1] = this[1].v = b();
         this.size = 0
      };
      e.prototype.has = function (g) {
         return !!d(this, g).m
      };
      e.prototype.get = function (g) {
         return (g = d(this, g).m) && g.value
      };
      e.prototype.entries = function () {
         return c(this, function (g) {
            return [g.key, g.value]
         })
      };
      e.prototype.keys = function () {
         return c(this, function (g) {
            return g.key
         })
      };
      e.prototype.values = function () {
         return c(this, function (g) {
            return g.value
         })
      };
      e.prototype.forEach = function (g, k) {
         for (var l = this.entries(), m; !(m = l.next()).done;) m =
            m.value, g.call(k, m[1], m[0], this)
      };
      e.prototype[Symbol.iterator] = e.prototype.entries;
      var f = 0;
      return e
   });
   u("Object.values", function (a) {
      return a ? a : function (b) {
         var c = [],
            d;
         for (d in b) B(b, d) && c.push(b[d]);
         return c
      }
   });
   u("Object.is", function (a) {
      return a ? a : function (b, c) {
         return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
      }
   });
   u("Array.prototype.includes", function (a) {
      return a ? a : function (b, c) {
         var d = this;
         d instanceof String && (d = String(d));
         var e = d.length;
         c = c || 0;
         for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var h = d[c];
            if (h === b || Object.is(h, b)) return !0
         }
         return !1
      }
   });
   u("String.prototype.includes", function (a) {
      return a ? a : function (b, c) {
         if (null == this) throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
         if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
         return -1 !== (this + "").indexOf(b, c || 0)
      }
   });

   function va(a, b) {
      a instanceof String && (a += "");
      var c = 0,
         d = !1,
         e = {
            next: function () {
               if (!d && c < a.length) {
                  var h = c++;
                  return {
                     value: b(h, a[h]),
                     done: !1
                  }
               }
               d = !0;
               return {
                  done: !0,
                  value: void 0
               }
            }
         };
      e[Symbol.iterator] = function () {
         return e
      };
      return e
   }
   u("Array.prototype.entries", function (a) {
      return a ? a : function () {
         return va(this, function (b, c) {
            return [b, c]
         })
      }
   });
   u("Array.prototype.keys", function (a) {
      return a ? a : function () {
         return va(this, function (b) {
            return b
         })
      }
   });
   u("Array.prototype.values", function (a) {
      return a ? a : function () {
         return va(this, function (b, c) {
            return c
         })
      }
   });
   u("Array.from", function (a) {
      return a ? a : function (b, c, d) {
         c = null != c ? c : function (g) {
            return g
         };
         var e = [],
            h = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
         if ("function" == typeof h) {
            b = h.call(b);
            for (var f = 0; !(h = b.next()).done;) e.push(c.call(d, h.value, f++))
         } else
            for (h = b.length, f = 0; f < h; f++) e.push(c.call(d, b[f], f));
         return e
      }
   });
   u("Object.entries", function (a) {
      return a ? a : function (b) {
         var c = [],
            d;
         for (d in b) B(b, d) && c.push([d, b[d]]);
         return c
      }
   });
   u("String.prototype.replaceAll", function (a) {
      return a ? a : function (b, c) {
         if (b instanceof RegExp && !b.global) throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");
         return b instanceof RegExp ? this.replace(b, c) : this.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c)
      }
   });
   /*

    Copyright The Closure Library Authors.
    SPDX-License-Identifier: Apache-2.0
   */
   var wa = wa || {},
      C = this || self;

   function xa(a) {
      var b = ya("CLOSURE_FLAGS");
      a = b && b[a];
      return null != a ? a : !1
   }

   function ya(a, b) {
      a = a.split(".");
      b = b || C;
      for (var c = 0; c < a.length; c++)
         if (b = b[a[c]], null == b) return null;
      return b
   }

   function za(a) {
      var b = typeof a;
      return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
   }

   function Aa(a) {
      var b = za(a);
      return "array" == b || "object" == b && "number" == typeof a.length
   }

   function D(a) {
      var b = typeof a;
      return "object" == b && null != a || "function" == b
   }

   function Ba(a, b, c) {
      return a.call.apply(a.bind, arguments)
   }

   function Ca(a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
         var d = Array.prototype.slice.call(arguments, 2);
         return function () {
            var e = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(e, d);
            return a.apply(b, e)
         }
      }
      return function () {
         return a.apply(b, arguments)
      }
   }

   function E(a, b, c) {
      E = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ba : Ca;
      return E.apply(null, arguments)
   }

   function Da(a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.S = b.prototype;
      a.prototype = new c;
      a.prototype.constructor = a;
      a.qa = function (d, e, h) {
         for (var f = Array(arguments.length - 2), g = 2; g < arguments.length; g++) f[g - 2] = arguments[g];
         return b.prototype[e].apply(d, f)
      }
   }

   function Ea(a) {
      return a
   };
   var Fa;
   var Ga = xa(610401301),
      Ha = xa(188588736);

   function Ia() {
      var a = C.navigator;
      return a && (a = a.userAgent) ? a : ""
   }
   var F, Ja = C.navigator;
   F = Ja ? Ja.userAgentData || null : null;

   function Ka(a) {
      return Ga ? F ? F.brands.some(function (b) {
         return (b = b.brand) && -1 != b.indexOf(a)
      }) : !1 : !1
   }

   function G(a) {
      return -1 != Ia().indexOf(a)
   };

   function H() {
      return Ga ? !!F && 0 < F.brands.length : !1
   }

   function La() {
      return H() ? Ka("Chromium") : (G("Chrome") || G("CriOS")) && !(H() ? 0 : G("Edge")) || G("Silk")
   };
   var Ma = Array.prototype.indexOf ? function (a, b) {
         return Array.prototype.indexOf.call(a, b, void 0)
      } : function (a, b) {
         if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
         for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
         return -1
      },
      Na = Array.prototype.forEach ? function (a, b) {
         Array.prototype.forEach.call(a, b, void 0)
      } : function (a, b) {
         for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
      };

   function Oa(a, b) {
      b = Ma(a, b);
      var c;
      (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
      return c
   }

   function Pa(a) {
      var b = a.length;
      if (0 < b) {
         for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
         return c
      }
      return []
   };
   var Qa = H() ? !1 : G("Trident") || G("MSIE"),
      Ra = -1 != Ia().toLowerCase().indexOf("webkit") && !G("Edge") && G("Mobile");
   !G("Android") || La();
   La();
   G("Safari") && (La() || (H() ? 0 : G("Coast")) || (H() ? 0 : G("Opera")) || (H() ? 0 : G("Edge")) || (H() ? Ka("Microsoft Edge") : G("Edg/")) || H() && Ka("Opera"));
   var Sa = {},
      I = null;
   var Ta = "undefined" !== typeof Uint8Array,
      Ua = !Qa && "function" === typeof btoa;
   var J;
   J = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0;
   var Va = Math.max,
      Wa = Va.apply,
      Xa = Object.values({
         ka: 1,
         ia: 2,
         ha: 4,
         na: 8,
         ma: 16,
         la: 32,
         ca: 64,
         pa: 128,
         ga: 256,
         fa: 512,
         ja: 1024,
         da: 2048,
         oa: 4096,
         ea: 8192
      }),
      Ya;
   if (Xa instanceof Array) Ya = Xa;
   else {
      for (var Za = w(Xa), $a, ab = []; !($a = Za.next()).done;) ab.push($a.value);
      Ya = ab
   }
   Wa.call(Va, Math, Ya);
   var bb = J ? function (a, b) {
         a[J] |= b
      } : function (a, b) {
         void 0 !== a.g ? a.g |= b : Object.defineProperties(a, {
            g: {
               value: b,
               configurable: !0,
               writable: !0,
               enumerable: !1
            }
         })
      },
      K = J ? function (a) {
         return a[J] | 0
      } : function (a) {
         return a.g | 0
      },
      M = J ? function (a) {
         return a[J]
      } : function (a) {
         return a.g
      },
      N = J ? function (a, b) {
         a[J] = b;
         return a
      } : function (a, b) {
         void 0 !== a.g ? a.g = b : Object.defineProperties(a, {
            g: {
               value: b,
               configurable: !0,
               writable: !0,
               enumerable: !1
            }
         });
         return a
      };

   function cb(a, b) {
      N(b, (a | 0) & -14591)
   }

   function db(a, b) {
      N(b, (a | 34) & -14557)
   }

   function eb(a) {
      a = a >> 14 & 1023;
      return 0 === a ? 536870912 : a
   };
   var fb = {},
      gb = {};

   function hb(a) {
      return !(!a || "object" !== typeof a || a.g !== gb)
   }

   function ib(a) {
      return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
   }

   function jb(a, b, c) {
      if (!Array.isArray(a) || a.length) return !1;
      var d = K(a);
      if (d & 1) return !0;
      if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
      N(a, d | 1);
      return !0
   }
   Object.freeze(new function () {});
   Object.freeze(new function () {});

   function kb(a) {
      return a.displayName || a.name || "unknown type name"
   };
   var lb;

   function mb(a, b) {
      lb = b;
      a = new a(b);
      lb = void 0;
      return a
   }

   function nb(a, b, c) {
      null == a && (a = lb);
      lb = void 0;
      if (null == a) {
         var d = 96;
         c ? (a = [c], d |= 512) : a = [];
         b && (d = d & -16760833 | (b & 1023) << 14)
      } else {
         if (!Array.isArray(a)) throw Error();
         d = K(a);
         if (d & 64) return a;
         d |= 64;
         if (c && (d |= 512, c !== a[0])) throw Error();
         a: {
            c = a;
            var e = c.length;
            if (e) {
               var h = e - 1;
               if (ib(c[h])) {
                  d |= 256;
                  b = h - (+!!(d & 512) - 1);
                  if (1024 <= b) throw Error();
                  d = d & -16760833 | (b & 1023) << 14;
                  break a
               }
            }
            if (b) {
               b = Math.max(b, e - (+!!(d & 512) - 1));
               if (1024 < b) throw Error();
               d = d & -16760833 | (b & 1023) << 14
            }
         }
      }
      N(a, d);
      return a
   };

   function ob(a) {
      switch (typeof a) {
         case "number":
            return isFinite(a) ? a : String(a);
         case "boolean":
            return a ? 1 : 0;
         case "object":
            if (a)
               if (Array.isArray(a)) {
                  if (jb(a, void 0, 0)) return
               } else if (Ta && null != a && a instanceof Uint8Array) {
               if (Ua) {
                  for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                  b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                  a = btoa(b)
               } else {
                  void 0 === b && (b = 0);
                  if (!I) {
                     I = {};
                     c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
                     d = ["+/=",
                        "+/", "-_=", "-_.", "-_"
                     ];
                     for (var e = 0; 5 > e; e++) {
                        var h = c.concat(d[e].split(""));
                        Sa[e] = h;
                        for (var f = 0; f < h.length; f++) {
                           var g = h[f];
                           void 0 === I[g] && (I[g] = f)
                        }
                     }
                  }
                  b = Sa[b];
                  c = Array(Math.floor(a.length / 3));
                  d = b[64] || "";
                  for (e = h = 0; h < a.length - 2; h += 3) {
                     var k = a[h],
                        l = a[h + 1];
                     g = a[h + 2];
                     f = b[k >> 2];
                     k = b[(k & 3) << 4 | l >> 4];
                     l = b[(l & 15) << 2 | g >> 6];
                     g = b[g & 63];
                     c[e++] = "" + f + k + l + g
                  }
                  f = 0;
                  g = d;
                  switch (a.length - h) {
                     case 2:
                        f = a[h + 1], g = b[(f & 15) << 2] || d;
                     case 1:
                        a = a[h], c[e] = "" + b[a >> 2] + b[(a & 3) << 4 | f >> 4] + g + d
                  }
                  a = c.join("")
               }
               return a
            }
      }
      return a
   };

   function pb(a, b, c) {
      a = Array.prototype.slice.call(a);
      var d = a.length,
         e = b & 256 ? a[d - 1] : void 0;
      d += e ? -1 : 0;
      for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
      if (e) {
         b = a[b] = {};
         for (var h in e) b[h] = c(e[h])
      }
      return a
   }

   function qb(a, b, c, d, e) {
      if (null != a) {
         if (Array.isArray(a)) a = jb(a, void 0, 0) ? void 0 : e && K(a) & 2 ? a : rb(a, b, c, void 0 !== d, e);
         else if (ib(a)) {
            var h = {},
               f;
            for (f in a) h[f] = qb(a[f], b, c, d, e);
            a = h
         } else a = b(a, d);
         return a
      }
   }

   function rb(a, b, c, d, e) {
      var h = d || c ? K(a) : 0;
      d = d ? !!(h & 32) : void 0;
      a = Array.prototype.slice.call(a);
      for (var f = 0; f < a.length; f++) a[f] = qb(a[f], b, c, d, e);
      c && c(h, a);
      return a
   }

   function sb(a) {
      return a.R === fb ? a.toJSON() : ob(a)
   };

   function tb(a, b, c) {
      c = void 0 === c ? db : c;
      if (null != a) {
         if (Ta && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
         if (Array.isArray(a)) {
            var d = K(a);
            if (d & 2) return a;
            b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
            return b ? N(a, (d | 34) & -12293) : rb(a, tb, d & 4 ? db : c, !0, !0)
         }
         a.R === fb && (c = a.o, d = M(c), a = d & 2 ? a : mb(a.constructor, ub(c, d, !0)));
         return a
      }
   }

   function ub(a, b, c) {
      var d = c || b & 2 ? db : cb,
         e = !!(b & 32);
      a = pb(a, b, function (h) {
         return tb(h, e, d)
      });
      bb(a, 32 | (c ? 2 : 0));
      return a
   };

   function vb(a, b, c, d) {
      if (-1 === c) return null;
      if (c >= eb(b)) {
         if (b & 256) return a[a.length - 1][c]
      } else {
         var e = a.length;
         if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
         b = c + (+!!(b & 512) - 1);
         if (b < e) return a[b]
      }
   }

   function wb(a, b, c, d, e) {
      var h = eb(b);
      if (c >= h || e) {
         var f = b;
         if (b & 256) e = a[a.length - 1];
         else {
            if (null == d) return;
            e = a[h + (+!!(b & 512) - 1)] = {};
            f |= 256
         }
         e[c] = d;
         c < h && (a[c + (+!!(b & 512) - 1)] = void 0);
         f !== b && N(a, f)
      } else a[c + (+!!(b & 512) - 1)] = d, b & 256 && (a = a[a.length - 1], c in a && delete a[c])
   }

   function O(a, b) {
      a = a.o;
      b = vb(a, M(a), b);
      b = null == b || "boolean" === typeof b ? b : "number" === typeof b ? !!b : void 0;
      return null != b ? b : !1
   }

   function P(a, b, c) {
      if (null != c && "boolean" !== typeof c) throw Error("Expected boolean but got " + za(c) + ": " + c);
      var d = a.o,
         e = M(d);
      if (e & 2) throw Error();
      wb(d, e, b, !1 === c ? void 0 : c);
      return a
   };

   function Q(a, b, c) {
      this.o = nb(a, b, c)
   }
   Q.prototype.toJSON = function () {
      return xb(this, rb(this.o, sb, void 0, void 0, !1), !0)
   };
   Q.prototype.R = fb;
   Q.prototype.toString = function () {
      return xb(this, this.o, !1).toString()
   };

   function xb(a, b, c) {
      var d = Ha ? void 0 : a.constructor.ra;
      var e = M(c ? a.o : b);
      a = b.length;
      if (!a) return b;
      var h;
      if (ib(c = b[a - 1])) {
         a: {
            var f = c;
            var g = {},
               k = !1,
               l;
            for (l in f) {
               var m = f[l];
               if (Array.isArray(m)) {
                  var p = m;
                  if (jb(m, d, +l) || hb(m) && 0 === m.size) m = null;
                  m != p && (k = !0)
               }
               null != m ? g[l] = m : k = !0
            }
            if (k) {
               for (var q in g) {
                  f = g;
                  break a
               }
               f = null
            }
         }
         f != c && (h = !0);a--
      }
      for (l = +!!(e & 512) - 1; 0 < a; a--) {
         q = a - 1;
         c = b[q];
         q -= l;
         if (!(null == c || jb(c, d, q) || hb(c) && 0 === c.size)) break;
         var v = !0
      }
      if (!h && !v) return b;
      b = Array.prototype.slice.call(b, 0, a);
      f && b.push(f);
      return b
   };
   try {
      (new self.OffscreenCanvas(0, 0)).getContext("2d")
   } catch (a) {};
   var yb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

   function zb(a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
         d = arguments[e];
         for (c in d) a[c] = d[c];
         for (var h = 0; h < yb.length; h++) c = yb[h], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
      }
   };
   var Ab;

   function Bb(a) {
      this.g = a
   }
   Bb.prototype.toString = function () {
      return this.g + ""
   };
   var Cb = {};

   function Db(a) {
      if (void 0 === Ab) {
         var b = null;
         var c = C.trustedTypes;
         if (c && c.createPolicy) {
            try {
               b = c.createPolicy("uf-api#html", {
                  createHTML: Ea,
                  createScript: Ea,
                  createScriptURL: Ea
               })
            } catch (d) {
               C.console && C.console.error(d.message)
            }
            Ab = b
         } else Ab = b
      }
      a = (b = Ab) ? b.createScriptURL(a) : a;
      return new Bb(a, Cb)
   };

   function R(a) {
      this.g = a
   }
   R.prototype.toString = function () {
      return this.g.toString()
   };
   var Eb = {};
   /*

    SPDX-License-Identifier: Apache-2.0
   */
   var Fb = new R("about:invalid#zClosurez", Eb);

   function Gb(a, b, c) {
      function d(g) {
         g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g)
      }
      for (var e = 1; e < c.length; e++) {
         var h = c[e];
         if (!Aa(h) || D(h) && 0 < h.nodeType) d(h);
         else {
            a: {
               if (h && "number" == typeof h.length) {
                  if (D(h)) {
                     var f = "function" == typeof h.item || "string" == typeof h.item;
                     break a
                  }
                  if ("function" === typeof h) {
                     f = "function" == typeof h.item;
                     break a
                  }
               }
               f = !1
            }
            Na(f ? Pa(h) : h, d)
         }
      }
   }

   function Hb(a) {
      var b = "SCRIPT";
      "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
      return a.createElement(b)
   }

   function Ib(a) {
      this.g = a || C.document || document
   }
   Ib.prototype.append = function (a, b) {
      Gb(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments)
   };

   function S() {
      this.l = this.l;
      this.u = this.u
   }
   S.prototype.l = !1;
   S.prototype.isDisposed = function () {
      return this.l
   };
   S.prototype.J = function () {
      if (this.u)
         for (; this.u.length;) this.u.shift()()
   };

   function Jb(a, b) {
      this.type = a;
      this.g = this.target = b;
      this.defaultPrevented = !1
   };
   var Kb = "closure_listenable_" + (1E6 * Math.random() | 0);
   var Lb = 0;

   function Mb(a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.P = e;
      this.key = ++Lb;
      this.L = this.O = !1
   }

   function Nb(a) {
      a.L = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.P = null
   };

   function Ob(a) {
      this.src = a;
      this.g = {};
      this.h = 0
   }
   Ob.prototype.add = function (a, b, c, d, e) {
      var h = a.toString();
      a = this.g[h];
      a || (a = this.g[h] = [], this.h++);
      var f = Pb(a, b, d, e); - 1 < f ? (b = a[f], c || (b.O = !1)) : (b = new Mb(b, this.src, h, !!d, e), b.O = c, a.push(b));
      return b
   };

   function Qb(a, b) {
      var c = b.type;
      c in a.g && Oa(a.g[c], b) && (Nb(b), 0 == a.g[c].length && (delete a.g[c], a.h--))
   }

   function Pb(a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
         var h = a[e];
         if (!h.L && h.listener == b && h.capture == !!c && h.P == d) return e
      }
      return -1
   };
   var Rb = "closure_lm_" + (1E6 * Math.random() | 0),
      Sb = {},
      Tb = 0;

   function Ub(a, b, c, d, e) {
      if (Array.isArray(b))
         for (var h = 0; h < b.length; h++) Ub(a, b[h], c, d, e);
      else(d = D(d) ? !!d.capture : !!d, c = Vb(c), a && a[Kb]) ? (a = a.i, b = String(b).toString(), b in a.g && (h = a.g[b], c = Pb(h, c, d, e), -1 < c && (Nb(h[c]), Array.prototype.splice.call(h, c, 1), 0 == h.length && (delete a.g[b], a.h--)))) : a && (a = Wb(a)) && (b = a.g[b.toString()], a = -1, b && (a = Pb(b, c, d, e)), (c = -1 < a ? b[a] : null) && "number" !== typeof c && c && !c.L && ((e = c.src) && e[Kb] ? Qb(e.i, c) : (d = c.type, b = c.proxy, e.removeEventListener ? e.removeEventListener(d, b, c.capture) :
         e.detachEvent ? e.detachEvent(d in Sb ? Sb[d] : Sb[d] = "on" + d, b) : e.addListener && e.removeListener && e.removeListener(b), Tb--, (d = Wb(e)) ? (Qb(d, c), 0 == d.h && (d.src = null, e[Rb] = null)) : Nb(c))))
   }

   function Wb(a) {
      a = a[Rb];
      return a instanceof Ob ? a : null
   }
   var Xb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

   function Vb(a) {
      if ("function" === typeof a) return a;
      a[Xb] || (a[Xb] = function (b) {
         return a.handleEvent(b)
      });
      return a[Xb]
   };

   function T() {
      S.call(this);
      this.i = new Ob(this);
      this.W = this;
      this.I = null
   }
   Da(T, S);
   T.prototype[Kb] = !0;
   T.prototype.removeEventListener = function (a, b, c, d) {
      Ub(this, a, b, c, d)
   };

   function U(a, b) {
      var c = a.I;
      if (c) {
         var d = [];
         for (var e = 1; c; c = c.I) d.push(c), ++e
      }
      a = a.W;
      c = b.type || b;
      "string" === typeof b ? b = new Jb(b, a) : b instanceof Jb ? b.target = b.target || a : (e = b, b = new Jb(c, a), zb(b, e));
      e = !0;
      if (d)
         for (var h = d.length - 1; 0 <= h; h--) {
            var f = b.g = d[h];
            e = Yb(f, c, !0, b) && e
         }
      f = b.g = a;
      e = Yb(f, c, !0, b) && e;
      e = Yb(f, c, !1, b) && e;
      if (d)
         for (h = 0; h < d.length; h++) f = b.g = d[h], e = Yb(f, c, !1, b) && e
   }
   T.prototype.J = function () {
      T.S.J.call(this);
      if (this.i) {
         var a = this.i,
            b = 0,
            c;
         for (c in a.g) {
            for (var d = a.g[c], e = 0; e < d.length; e++) ++b, Nb(d[e]);
            delete a.g[c];
            a.h--
         }
      }
      this.I = null
   };

   function Yb(a, b, c, d) {
      b = a.i.g[String(b)];
      if (!b) return !0;
      b = b.concat();
      for (var e = !0, h = 0; h < b.length; ++h) {
         var f = b[h];
         if (f && !f.L && f.capture == c) {
            var g = f.listener,
               k = f.P || f.src;
            f.O && Qb(a.i, f);
            e = !1 !== g.call(k, d) && e
         }
      }
      return e && !d.defaultPrevented
   };

   function Zb(a) {
      try {
         return C.JSON.parse(a)
      } catch (b) {}
      a = String(a);
      if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
         return eval("(" + a + ")")
      } catch (b) {}
      throw Error("Invalid JSON string: " + a);
   };

   function $b() {}
   $b.prototype.g = null;

   function ac(a) {
      var b;
      (b = a.g) || (b = {}, bc(a) && (b[0] = !0, b[1] = !0), b = a.g = b);
      return b
   };
   var cc;

   function dc() {}
   Da(dc, $b);

   function ec(a) {
      return (a = bc(a)) ? new ActiveXObject(a) : new XMLHttpRequest
   }

   function bc(a) {
      if (!a.h && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
         for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
            var d = b[c];
            try {
               return new ActiveXObject(d), a.h = d
            } catch (e) {}
         }
         throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
      }
      return a.h
   }
   cc = new dc;

   function fc(a, b, c) {
      if ("function" === typeof a) c && (a = E(a, c));
      else if (a && "function" == typeof a.handleEvent) a = E(a.handleEvent, a);
      else throw Error("Invalid listener argument");
      return 2147483647 < Number(b) ? -1 : C.setTimeout(a, b || 0)
   };
   var gc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

   function hc(a) {
      T.call(this);
      this.headers = new Map;
      this.B = a || null;
      this.h = !1;
      this.D = this.g = null;
      this.H = "";
      this.j = this.G = this.s = this.F = !1;
      this.C = 0;
      this.A = null;
      this.T = "";
      this.M = this.N = !1
   }
   Da(hc, T);
   var ic = /^https?$/i,
      jc = ["POST", "PUT"],
      kc = [];

   function lc(a, b) {
      var c = new hc;
      kc.push(c);
      b && c.i.add("complete", b, !1, void 0, void 0);
      c.i.add("ready", c.X, !0, void 0, void 0);
      c.C = 2E3;
      c.N = !0;
      mc(c, a)
   }
   n = hc.prototype;
   n.X = function () {
      this.l || (this.l = !0, this.J());
      Oa(kc, this)
   };

   function mc(a, b) {
      var c = {};
      if (a.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.H + "; newUri=" + b);
      a.H = b;
      a.F = !1;
      a.h = !0;
      a.g = a.B ? ec(a.B) : ec(cc);
      a.D = a.B ? ac(a.B) : ac(cc);
      a.g.onreadystatechange = E(a.U, a);
      try {
         a.G = !0, a.g.open("GET", String(b), !0), a.G = !1
      } catch (h) {
         nc(a);
         return
      }
      b = new Map(a.headers);
      if (c)
         if (Object.getPrototypeOf(c) === Object.prototype)
            for (var d in c) b.set(d, c[d]);
         else if ("function" === typeof c.keys && "function" === typeof c.get) {
         d = w(c.keys());
         for (var e = d.next(); !e.done; e = d.next()) e =
            e.value, b.set(e, c.get(e))
      } else throw Error("Unknown input type for opt_headers: " + String(c));
      c = Array.from(b.keys()).find(function (h) {
         return "content-type" == h.toLowerCase()
      });
      d = C.FormData && !1;
      !(0 <= Ma(jc, "GET")) || c || d || b.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
      b = w(b);
      for (c = b.next(); !c.done; c = b.next()) d = w(c.value), c = d.next().value, d = d.next().value, a.g.setRequestHeader(c, d);
      a.T && (a.g.responseType = a.T);
      "withCredentials" in a.g && a.g.withCredentials !== a.N && (a.g.withCredentials =
         a.N);
      try {
         oc(a), 0 < a.C && (a.M = pc(a.g), a.M ? (a.g.timeout = a.C, a.g.ontimeout = E(a.V, a)) : a.A = fc(a.V, a.C, a)), a.s = !0, a.g.send(""), a.s = !1
      } catch (h) {
         nc(a)
      }
   }

   function pc(a) {
      return Qa && "number" === typeof a.timeout && void 0 !== a.ontimeout
   }
   n.V = function () {
      "undefined" != typeof wa && this.g && (U(this, "timeout"), this.abort(8))
   };

   function nc(a) {
      a.h = !1;
      a.g && (a.j = !0, a.g.abort(), a.j = !1);
      qc(a);
      rc(a)
   }

   function qc(a) {
      a.F || (a.F = !0, U(a, "complete"), U(a, "error"))
   }
   n.abort = function () {
      this.g && this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1, U(this, "complete"), U(this, "abort"), rc(this))
   };
   n.J = function () {
      this.g && (this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1), rc(this, !0));
      hc.S.J.call(this)
   };
   n.U = function () {
      this.isDisposed() || (this.G || this.s || this.j ? sc(this) : this.ba())
   };
   n.ba = function () {
      sc(this)
   };

   function sc(a) {
      if (a.h && "undefined" != typeof wa && (!a.D[1] || 4 != (a.g ? a.g.readyState : 0) || 2 != tc(a)))
         if (a.s && 4 == (a.g ? a.g.readyState : 0)) fc(a.U, 0, a);
         else if (U(a, "readystatechange"), 4 == (a.g ? a.g.readyState : 0)) {
         a.h = !1;
         try {
            var b = tc(a);
            a: switch (b) {
               case 200:
               case 201:
               case 202:
               case 204:
               case 206:
               case 304:
               case 1223:
                  var c = !0;
                  break a;
               default:
                  c = !1
            }
            var d;
            if (!(d = c)) {
               var e;
               if (e = 0 === b) {
                  var h = String(a.H).match(gc)[1] || null;
                  !h && C.self && C.self.location && (h = C.self.location.protocol.slice(0, -1));
                  e = !ic.test(h ? h.toLowerCase() : "")
               }
               d =
                  e
            }
            d ? (U(a, "complete"), U(a, "success")) : qc(a)
         } finally {
            rc(a)
         }
      }
   }

   function rc(a, b) {
      if (a.g) {
         oc(a);
         var c = a.g,
            d = a.D[0] ? function () {} : null;
         a.g = null;
         a.D = null;
         b || U(a, "ready");
         try {
            c.onreadystatechange = d
         } catch (e) {}
      }
   }

   function oc(a) {
      a.g && a.M && (a.g.ontimeout = null);
      a.A && (C.clearTimeout(a.A), a.A = null)
   }
   n.isActive = function () {
      return !!this.g
   };

   function tc(a) {
      try {
         return 2 < (a.g ? a.g.readyState : 0) ? a.g.status : -1
      } catch (b) {
         return -1
      }
   };

   function uc(a) {
      this.aa = a
   }

   function V(a) {
      return new uc(function (b) {
         return b.substr(0, a.length + 1).toLowerCase() === a + ":"
      })
   }
   var vc = [V("data"), V("http"), V("https"), V("mailto"), V("ftp"), new uc(function (a) {
      return /^[^:]*([/?#]|$)/.test(a)
   })];

   function wc(a) {
      var b = void 0 === b ? vc : b;
      a: if (b = void 0 === b ? vc : b, !(a instanceof R)) {
         for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d instanceof uc && d.aa(a)) {
               a = new R(a, Eb);
               break a
            }
         }
         a = void 0
      }
      return a || Fb
   }
   var xc = /^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;

   function yc(a) {
      var b = ua.apply(1, arguments);
      if (0 === b.length) return Db(a[0]);
      for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
      return Db(c)
   };

   function zc(a, b) {
      b instanceof R ? b = b instanceof R && b.constructor === R ? b.g : "type_error:SafeUrl" : b = xc.test(b) ? b : void 0;
      void 0 !== b && a.open(b, void 0, void 0)
   }

   function Ac(a) {
      var b, c;
      return (a = null == (c = (b = a.document).querySelector) ? void 0 : c.call(b, "script[nonce]")) ? a.nonce || a.getAttribute("nonce") || "" : ""
   };

   function Bc(a, b) {
      a.src = b instanceof Bb && b.constructor === Bb ? b.g : "type_error:TrustedResourceUrl";
      (b = Ac(a.ownerDocument && a.ownerDocument.defaultView || window)) && a.setAttribute("nonce", b)
   };

   function W(a) {
      this.o = nb(a)
   }
   la(W, Q);
   n = W.prototype;
   n.getEnableSsEngine = function () {
      return O(this, 2)
   };
   n.getEnableAwr = function () {
      return O(this, 3)
   };
   n.getAlohaAutoGaRollout = function () {
      return O(this, 5)
   };
   n.getEnableConfigurator = function () {
      return O(this, 6)
   };
   n.getEnableMweb = function () {
      return O(this, 7)
   };
   n.getEnableCtlConsentCheckbox = function () {
      return O(this, 8)
   };
   n.getEnableIframe = function () {
      return O(this, 9)
   };
   n.getEnableScreenshotNudge = function () {
      return O(this, 10)
   };
   n.getEnableWebStartupConfigEndpoint = function () {
      return O(this, 11)
   };
   n.getEnableJunkNudge = function () {
      return O(this, 12)
   };
   n.getEnableConfiguratorLocale = function () {
      return O(this, 13)
   };
   n.getEnableTinyNoPointer = function () {
      return O(this, 14)
   };
   n.getEnableSupportSessionLogging = function () {
      return O(this, 15)
   };
   n.getEnableFileUploadForScreenshot = function () {
      return O(this, 16)
   };
   n.getEnableDirectDeflectionForSingleCategory = function () {
      return O(this, 17)
   };
   n.getEnableImageSanitization = function () {
      return O(this, 18)
   };
   n.getEnableAlohaBinarySplit = function () {
      return O(this, 19)
   };
   n.getEnableDbFeedbackIntents = function () {
      return O(this, 20)
   };
   n.getEnableMarkMandatoryFieldsWithRequired = function () {
      return O(this, 21)
   };
   n.getEnableFeedbackCategoryCustomUi = function () {
      return O(this, 22)
   };
   n.getEnableRealtimeCtl = function () {
      return O(this, 23)
   };

   function Cc(a) {
      this.o = nb(a)
   }
   la(Cc, Q);

   function Dc(a) {
      return Ec.some(function (b) {
         return b.test(a)
      })
   }
   var Ec = [/https:\/\/sandbox\.google\.com\/tools\/feedback/, /https:\/\/feedback-frontend-qual[a-z0-9.]*\.google\.com\/inapp/, /https:\/\/feedback-frontend-qual[a-z0-9.]*\.google\.com\/tools\/feedback/, /https:\/\/.*\.googleusercontent\.com\/inapp/];
   var Fc = "af am ar-EG ar-JO ar-MA ar-SA ar-XB ar az be bg bn bs ca cs cy da de-AT de-CH de el en en-GB en-AU en-CA en-IE en-IN en-NZ en-SG en-XA en-XC en-ZA es es-419 es-AR es-BO es-CL es-CO es-CR es-DO es-EC es-GT es-HN es-MX es-NI es-PA es-PE es-PR es-PY es-SV es-US es-UY es-VE et eu fa fi fil fr-CA fr-CH fr gl gsw gu he hi hr hu hy id in is it iw ja ka kk km kn ko ky ln lo lt lv mk ml mn mo mr ms my nb ne nl no pa pl pt pt-BR pt-PT ro ru si sk sl sq sr-Latn sr sv sw ta te th tl tr uk ur uz vi zh zh-CN zh-HK zh-TW zu".split(" ");

   function Gc(a) {
      var b;
      return null == (b = a.formContent) ? void 0 : b.locale
   };
   var Hc = da(["https://www.gstatic.com/uservoice/feedback/client/web/", "/main_light_binary.js"]),
      Ic = da(["https://www.gstatic.com/uservoice/feedback/client/web/", "/main_binary__", ".js"]);

   function Jc(a, b) {
      var c = Gc(a);
      c = (c && Fc.includes(c) ? Gc(a) : "en").replaceAll("-", "_").toLowerCase();
      var d;
      a = (null == (d = a.initializationData) ? 0 : d.useNightlyRelease) ? "nightly" : "live";
      var e;
      return (null == b ? 0 : null == (e = b.getEnableAlohaBinarySplit) ? 0 : e.call(b)) ? yc(Hc, a) : yc(Ic, a, c)
   };
   var Kc, Lc;

   function Mc(a, b, c, d) {
      if (Kc) return Kc;
      var e = Jc(a, d);
      return Kc = b.feedbackV2GlobalObject ? Promise.resolve(b.feedbackV2GlobalObject) : new Promise(function (h, f) {
         var g = Hb(document);
         Bc(g, e);
         g.onload = function () {
            b.feedbackV2GlobalObject ? h(b.feedbackV2GlobalObject) : f("feedbackV2GlobalObject not found on window.")
         };
         g.onerror = function () {
            f("Feedback binary script tag failed to load: " + e.toString())
         };
         c.body.appendChild(g)
      })
   }

   function Nc(a, b, c, d) {
      if (Lc) return Lc;
      var e = Jc(a, d);
      return Lc = b.feedbackV2GlobalObject ? Promise.resolve(b.feedbackV2GlobalObject) : new Promise(function (h, f) {
         var g = Hb(document);
         Bc(g, e);
         g.onload = function () {
            b.feedbackV2GlobalObject ? h(b.feedbackV2GlobalObject) : f("feedbackV2GlobalObject not found on window.")
         };
         g.onerror = function () {
            f("Feedback binary script tag failed to load: " + e.toString())
         };
         c.body.appendChild(g)
      })
   }

   function Oc(a, b, c, d, e) {
      e = void 0 === e ? !0 : e;
      var h, f, g, k, l;
      return A(function (m) {
         switch (m.g) {
            case 1:
               return h = Date.now(), x(m, Mc(a, c, d, b), 2);
            case 2:
               f = m.i;
               if (!(e || (null == (k = a.initializationData) ? 0 : k.useNightlyRelease) || (null == (l = a.initializationData) ? 0 : l.isLocalServer))) {
                  g = f.initializeFeedbackClient(a, h, b);
                  m.g = 3;
                  break
               }
               return x(m, f.initializeFeedbackClientAsync(a, h, b), 4);
            case 4:
               g = m.i;
            case 3:
               return g.initiateAloha(), m.return(g)
         }
      })
   }

   function Pc(a, b, c, d) {
      var e, h, f;
      return A(function (g) {
         if (1 == g.g) return e = Date.now(), x(g, Nc(a, c, d.document, b), 2);
         if (3 != g.g) return h = g.i, x(g, h.initializeFeedbackClientAsync(a, e, b, d), 3);
         f = g.i;
         f.initiateAloha();
         return g.return(f)
      })
   }

   function Qc(a, b, c) {
      var d = !0;
      d = void 0 === d ? !0 : d;
      var e, h, f, g, k, l, m, p, q, v;
      return A(function (L) {
         e = c || C;
         if (null == (h = b) ? 0 : null == (g = (f = h).getEnableAlohaBinarySplit) ? 0 : g.call(f)) {
            k = e;
            if (k.isFormOpened) throw l = Error("Form is either loading or already opened"), l.name = "DuplicateFormError", l;
            k.isFormOpened = !0;
            a.callbacks = a.callbacks || {};
            m = a.callbacks.onClose || function () {};
            a.callbacks.onClose = function (y) {
               k.isFormOpened = !1;
               m(y)
            };
            try {
               return L.return(Pc(a, b, k, e))
            } catch (y) {
               throw k.isFormOpened = !1, y;
            }
         } else {
            p = e;
            if (p.isFormOpened) throw q =
               Error("Form is either loading or already opened"), q.name = "DuplicateFormError", q;
            p.isFormOpened = !0;
            a.callbacks = a.callbacks || {};
            v = a.callbacks.onClose || function () {};
            a.callbacks.onClose = function (y) {
               p.isFormOpened = !1;
               v(y)
            };
            try {
               return L.return(Oc(a, b, p, e.document, d))
            } catch (y) {
               throw p.isFormOpened = !1, y;
            }
         }
      })
   };

   function Rc(a, b) {
      return A(function (c) {
         return c.return(new Promise(function (d) {
            var e = Sc(null != b ? b : "") + "/aloha_form_properties?productId=" + a;
            lc(e, function (h) {
               var f = h.target;
               h = null;
               try {
                  var g = JSON,
                     k = g.stringify;
                  if (f.g) {
                     var l = f.g.responseText;
                     0 == l.indexOf(")]}'\n") && (l = l.substring(5));
                     b: {
                        if (C.JSON) try {
                           var m = C.JSON.parse(l);
                           break b
                        } catch (v) {}
                        m = Zb(l)
                     }
                  } else m = void 0;
                  var p = k.call(g, m);
                  if (null == p || "" == p) h = new Cc;
                  else {
                     var q = JSON.parse(p);
                     if (!Array.isArray(q)) throw Error(void 0);
                     bb(q, 32);
                     h = mb(Cc, q)
                  }
               } catch (v) {
                  k =
                     new Cc;
                  m = new W;
                  m = P(m, 5, !0);
                  m = P(m, 2, !0);
                  m = P(m, 4, !1);
                  m = P(m, 8, !0);
                  m = P(m, 9, !0);
                  m = P(m, 7, !0);
                  m = P(m, 10, !0);
                  m = P(m, 12, !0);
                  m = P(m, 13, !1);
                  m = P(m, 14, !0);
                  m = P(m, 15, !0);
                  m = P(m, 20, !1);
                  if (null != m) {
                     if (!(m instanceof W)) throw Error("Expected instanceof " + kb(W) + " but got " + (m && kb(m.constructor)));
                  } else m = void 0;
                  p = k.o;
                  q = M(p);
                  if (q & 2) throw Error();
                  wb(p, q, 1, m);
                  h = k
               }
               d(h)
            })
         }))
      })
   }

   function Sc(a) {
      return Dc(a) ? a : "https://www.google.com/tools/feedback"
   };

   function Tc(a, b, c) {
      a.timeOfStartCall = (new Date).getTime();
      var d = c || C,
         e = d.document,
         h = a.nonce || Ac(d);
      h && !a.nonce && (a.nonce = h);
      if ("help" == a.flow) {
         var f = ya("document.location.href", d);
         !a.helpCenterContext && f && (a.helpCenterContext = f.substring(0, 1200));
         f = !0;
         if (b && JSON && JSON.stringify) {
            var g = JSON.stringify(b);
            (f = 1200 >= g.length) && (a.psdJson = g)
         }
         f || (b = {
            invalidPsd: !0
         })
      }
      b = [a, b, c];
      d.GOOGLE_FEEDBACK_START_ARGUMENTS = b;
      c = a.feedbackServerUri || "//www.google.com/tools/feedback";
      if (f = d.GOOGLE_FEEDBACK_START) f.apply(d,
         b);
      else {
         d = c + "/load.js?";
         for (var k in a) b = a[k], null == b || D(b) || (d += encodeURIComponent(k) + "=" + encodeURIComponent(b) + "&");
         a = e ? new Ib(9 == e.nodeType ? e : e.ownerDocument || e.document) : Fa || (Fa = new Ib);
         a = Hb(a.g);
         h && a.setAttribute("nonce", h);
         h = Db(d);
         Bc(a, h);
         e.body.appendChild(a)
      }
   }

   function Uc(a, b, c, d) {
      var e, h;
      A(function (f) {
         e = c || C;
         var g = "DEV" === a.serverEnvironment,
            k = c || C;
         k = a.nonce || Ac(k);
         g = {
            integrationKeys: {
               productId: a.productId,
               feedbackBucket: a.bucket,
               triggerId: a.triggerId
            },
            callbacks: {
               onClose: a.callback,
               onLoad: a.onLoadCallback
            },
            formContent: {
               locale: a.locale,
               disableScreenshot: a.disableScreenshotting,
               productDisplayName: void 0,
               announcement: void 0,
               issueCategories: void 0,
               includeSeveritySelection: void 0,
               customImageSrc: void 0,
               thankYouMessage: void 0,
               sa: void 0,
               defaultFormInputValues: void 0,
               defaultFormInputValuesString: void 0,
               abuseLink: a.abuseLink,
               additionalDataConsent: a.additionalDataConsent
            },
            initializationData: {
               isLocalServer: g,
               nonce: k,
               useNightlyRelease: g,
               feedbackJsUrl: void 0,
               feedbackCssUrl: void 0,
               feedbackJsUrlSerialized: void 0,
               feedbackCssUrlSerialized: void 0,
               submissionServerUri: a.feedbackServerUri,
               colorScheme: a.colorScheme
            },
            extraData: {
               productVersion: a.productVersion,
               authUser: a.authuser,
               configuratorId: a.configuratorId,
               customZIndex: a.customZIndex,
               tinyNoPointer: a.tinyNoPointer,
               allowNonLoggedInFeedback: a.allowNonLoggedInFeedback,
               enableAnonymousFeedback: a.enableAnonymousFeedback
            }
         };
         b && (k = new Map(Object.entries(b)), g.extraData.productSpecificData = k);
         h = g;
         return x(f, Qc(h, d, e), 0)
      })
   }

   function Vc(a, b, c) {
      try {
         if ("help" === a.flow) {
            var d = a.helpCenterPath.replace(/^\//, "");
            zc(c || window, wc("https://support.google.com/" + d))
         } else "submit" === a.flow ? Tc(a, b, c) : Rc(a.productId, a.feedbackServerUri).then(function (e) {
            var h = void 0 === h ? !1 : h;
            var f = e.o;
            var g = M(f),
               k = vb(f, g, 1, h);
            if (null != k && "object" === typeof k && k.R === fb) var l = k;
            else if (Array.isArray(k)) {
               var m = l = K(k);
               0 === m && (m |= g & 32);
               m |= g & 2;
               m !== l && N(k, m);
               l = new W(k)
            } else l = void 0;
            l !== k && null != l && wb(f, g, 1, l, h);
            f = l;
            null != f && (e = e.o, g = M(e), g & 2 || (k = f, l = k.o,
               m = M(l), k = m & 2 ? mb(k.constructor, ub(l, m, !1)) : k, k !== f && (f = k, wb(e, g, 1, f, h))));
            h = f;
            e = !Ra || (null == h ? void 0 : h.getEnableMweb());
            f = !a.tinyNoPointer || (null == h ? void 0 : h.getEnableTinyNoPointer());
            !h || h.getAlohaAutoGaRollout() && e && f ? Uc(a, b, c, h) : Tc(a, b, c)
         }, function (e) {
            e && "DuplicateFormError" !== e.name && Tc(a, b, c)
         })
      } catch (e) {
         Uc(a, b, c, null)
      }
   }
   var X = ["userfeedback", "api", "startFeedback"],
      Y = C;
   X[0] in Y || "undefined" == typeof Y.execScript || Y.execScript("var " + X[0]);
   for (var Z; X.length && (Z = X.shift());) X.length || void 0 === Vc ? Y[Z] && Y[Z] !== Object.prototype[Z] ? Y = Y[Z] : Y = Y[Z] = {} : Y[Z] = Vc;
}).call(this);
