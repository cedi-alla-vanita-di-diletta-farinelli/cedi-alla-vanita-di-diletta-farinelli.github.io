gapi.loaded_0(function (_) {
   var window = this;
   _._F_toggles_initialize = function (a) {
      ("undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self ? self : this)._F_toggles = a || []
   };
   (0, _._F_toggles_initialize)([]);
   var fa, ka, ma, ra, sa, wa, Ca, Ea;
   _.ea = function (a) {
      return function () {
         return _.da[a].apply(this, arguments)
      }
   };
   _.da = [];
   fa = function (a) {
      var b = 0;
      return function () {
         return b < a.length ? {
            done: !1,
            value: a[b++]
         } : {
            done: !0
         }
      }
   };
   ka = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
      if (a == Array.prototype || a == Object.prototype) return a;
      a[b] = c.value;
      return a
   };
   ma = function (a) {
      a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
      for (var b = 0; b < a.length; ++b) {
         var c = a[b];
         if (c && c.Math == Math) return c
      }
      throw Error("a");
   };
   _.na = ma(this);
   ra = function (a, b) {
      if (b) a: {
         var c = _.na;a = a.split(".");
         for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e]
         }
         a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ka(c, a, {
            configurable: !0,
            writable: !0,
            value: b
         })
      }
   };
   ra("Symbol", function (a) {
      if (a) return a;
      var b = function (f, h) {
         this.v1 = f;
         ka(this, "description", {
            configurable: !0,
            writable: !0,
            value: h
         })
      };
      b.prototype.toString = function () {
         return this.v1
      };
      var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
         d = 0,
         e = function (f) {
            if (this instanceof e) throw new TypeError("Symbol is not a constructor");
            return new b(c + (f || "") + "_" + d++, f)
         };
      return e
   });
   ra("Symbol.iterator", function (a) {
      if (a) return a;
      a = Symbol("Symbol.iterator");
      for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
         var d = _.na[b[c]];
         "function" === typeof d && "function" != typeof d.prototype[a] && ka(d.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function () {
               return sa(fa(this))
            }
         })
      }
      return a
   });
   sa = function (a) {
      a = {
         next: a
      };
      a[Symbol.iterator] = function () {
         return this
      };
      return a
   };
   _.va = function (a) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return {
         next: fa(a)
      };
      throw Error("b`" + String(a));
   };
   wa = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b)
   };
   Ca = "function" == typeof Object.assign ? Object.assign : function (a, b) {
      for (var c = 1; c < arguments.length; c++) {
         var d = arguments[c];
         if (d)
            for (var e in d) wa(d, e) && (a[e] = d[e])
      }
      return a
   };
   ra("Object.assign", function (a) {
      return a || Ca
   });
   _.Da = "function" == typeof Object.create ? Object.create : function (a) {
      var b = function () {};
      b.prototype = a;
      return new b
   };
   if ("function" == typeof Object.setPrototypeOf) Ea = Object.setPrototypeOf;
   else {
      var Fa;
      a: {
         var Ga = {
               a: !0
            },
            Ha = {};
         try {
            Ha.__proto__ = Ga;
            Fa = Ha.a;
            break a
         } catch (a) {}
         Fa = !1
      }
      Ea = Fa ? function (a, b) {
         a.__proto__ = b;
         if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
         return a
      } : null
   }
   _.Ia = Ea;
   ra("Promise", function (a) {
      function b() {
         this.Nf = null
      }

      function c(h) {
         return h instanceof e ? h : new e(function (k) {
            k(h)
         })
      }
      if (a) return a;
      b.prototype.IP = function (h) {
         if (null == this.Nf) {
            this.Nf = [];
            var k = this;
            this.JP(function () {
               k.C7()
            })
         }
         this.Nf.push(h)
      };
      var d = _.na.setTimeout;
      b.prototype.JP = function (h) {
         d(h, 0)
      };
      b.prototype.C7 = function () {
         for (; this.Nf && this.Nf.length;) {
            var h = this.Nf;
            this.Nf = [];
            for (var k = 0; k < h.length; ++k) {
               var l = h[k];
               h[k] = null;
               try {
                  l()
               } catch (m) {
                  this.wq(m)
               }
            }
         }
         this.Nf = null
      };
      b.prototype.wq = function (h) {
         this.JP(function () {
            throw h;
         })
      };
      var e = function (h) {
         this.Fa = 0;
         this.Cf = void 0;
         this.Wr = [];
         this.KV = !1;
         var k = this.HF();
         try {
            h(k.resolve, k.reject)
         } catch (l) {
            k.reject(l)
         }
      };
      e.prototype.HF = function () {
         function h(m) {
            return function (n) {
               l || (l = !0, m.call(k, n))
            }
         }
         var k = this,
            l = !1;
         return {
            resolve: h(this.aea),
            reject: h(this.lK)
         }
      };
      e.prototype.aea = function (h) {
         if (h === this) this.lK(new TypeError("A Promise cannot resolve to itself"));
         else if (h instanceof e) this.Cfa(h);
         else {
            a: switch (typeof h) {
               case "object":
                  var k = null != h;
                  break a;
               case "function":
                  k = !0;
                  break a;
               default:
                  k = !1
            }
            k ? this.Zda(h) : this.PS(h)
         }
      };
      e.prototype.Zda = function (h) {
         var k = void 0;
         try {
            k = h.then
         } catch (l) {
            this.lK(l);
            return
         }
         "function" == typeof k ? this.Dfa(k, h) : this.PS(h)
      };
      e.prototype.lK = function (h) {
         this.r_(2, h)
      };
      e.prototype.PS = function (h) {
         this.r_(1, h)
      };
      e.prototype.r_ = function (h, k) {
         if (0 != this.Fa) throw Error("c`" + h + "`" + k + "`" + this.Fa);
         this.Fa = h;
         this.Cf = k;
         2 === this.Fa && this.pea();
         this.D7()
      };
      e.prototype.pea = function () {
         var h = this;
         d(function () {
               if (h.fca()) {
                  var k = _.na.console;
                  "undefined" !== typeof k && k.error(h.Cf)
               }
            },
            1)
      };
      e.prototype.fca = function () {
         if (this.KV) return !1;
         var h = _.na.CustomEvent,
            k = _.na.Event,
            l = _.na.dispatchEvent;
         if ("undefined" === typeof l) return !0;
         "function" === typeof h ? h = new h("unhandledrejection", {
            cancelable: !0
         }) : "function" === typeof k ? h = new k("unhandledrejection", {
            cancelable: !0
         }) : (h = _.na.document.createEvent("CustomEvent"), h.initCustomEvent("unhandledrejection", !1, !0, h));
         h.promise = this;
         h.reason = this.Cf;
         return l(h)
      };
      e.prototype.D7 = function () {
         if (null != this.Wr) {
            for (var h = 0; h < this.Wr.length; ++h) f.IP(this.Wr[h]);
            this.Wr = null
         }
      };
      var f = new b;
      e.prototype.Cfa = function (h) {
         var k = this.HF();
         h.zy(k.resolve, k.reject)
      };
      e.prototype.Dfa = function (h, k) {
         var l = this.HF();
         try {
            h.call(k, l.resolve, l.reject)
         } catch (m) {
            l.reject(m)
         }
      };
      e.prototype.then = function (h, k) {
         function l(q, t) {
            return "function" == typeof q ? function (v) {
               try {
                  m(q(v))
               } catch (u) {
                  n(u)
               }
            } : t
         }
         var m, n, p = new e(function (q, t) {
            m = q;
            n = t
         });
         this.zy(l(h, m), l(k, n));
         return p
      };
      e.prototype.catch = function (h) {
         return this.then(void 0, h)
      };
      e.prototype.zy = function (h, k) {
         function l() {
            switch (m.Fa) {
               case 1:
                  h(m.Cf);
                  break;
               case 2:
                  k(m.Cf);
                  break;
               default:
                  throw Error("d`" + m.Fa);
            }
         }
         var m = this;
         null == this.Wr ? f.IP(l) : this.Wr.push(l);
         this.KV = !0
      };
      e.resolve = c;
      e.reject = function (h) {
         return new e(function (k, l) {
            l(h)
         })
      };
      e.race = function (h) {
         return new e(function (k, l) {
            for (var m = _.va(h), n = m.next(); !n.done; n = m.next()) c(n.value).zy(k, l)
         })
      };
      e.all = function (h) {
         var k = _.va(h),
            l = k.next();
         return l.done ? c([]) : new e(function (m, n) {
            function p(v) {
               return function (u) {
                  q[v] = u;
                  t--;
                  0 == t && m(q)
               }
            }
            var q = [],
               t = 0;
            do q.push(void 0), t++, c(l.value).zy(p(q.length -
               1), n), l = k.next(); while (!l.done)
         })
      };
      return e
   });
   var Ka = function (a, b, c) {
      if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
      if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
      return a + ""
   };
   ra("String.prototype.startsWith", function (a) {
      return a ? a : function (b, c) {
         var d = Ka(this, b, "startsWith"),
            e = d.length,
            f = b.length;
         c = Math.max(0, Math.min(c | 0, d.length));
         for (var h = 0; h < f && c < e;)
            if (d[c++] != b[h++]) return !1;
         return h >= f
      }
   });
   ra("WeakMap", function (a) {
      function b() {}

      function c(l) {
         var m = typeof l;
         return "object" === m && null !== l || "function" === m
      }

      function d(l) {
         if (!wa(l, f)) {
            var m = new b;
            ka(l, f, {
               value: m
            })
         }
      }

      function e(l) {
         var m = Object[l];
         m && (Object[l] = function (n) {
            if (n instanceof b) return n;
            Object.isExtensible(n) && d(n);
            return m(n)
         })
      }
      if (function () {
            if (!a || !Object.seal) return !1;
            try {
               var l = Object.seal({}),
                  m = Object.seal({}),
                  n = new a([
                     [l, 2],
                     [m, 3]
                  ]);
               if (2 != n.get(l) || 3 != n.get(m)) return !1;
               n.delete(l);
               n.set(m, 4);
               return !n.has(l) && 4 == n.get(m)
            } catch (p) {
               return !1
            }
         }()) return a;
      var f = "$jscomp_hidden_" + Math.random();
      e("freeze");
      e("preventExtensions");
      e("seal");
      var h = 0,
         k = function (l) {
            this.Ga = (h += Math.random() + 1).toString();
            if (l) {
               l = _.va(l);
               for (var m; !(m = l.next()).done;) m = m.value, this.set(m[0], m[1])
            }
         };
      k.prototype.set = function (l, m) {
         if (!c(l)) throw Error("e");
         d(l);
         if (!wa(l, f)) throw Error("f`" + l);
         l[f][this.Ga] = m;
         return this
      };
      k.prototype.get = function (l) {
         return c(l) && wa(l, f) ? l[f][this.Ga] : void 0
      };
      k.prototype.has = function (l) {
         return c(l) && wa(l, f) && wa(l[f], this.Ga)
      };
      k.prototype.delete =
         function (l) {
            return c(l) && wa(l, f) && wa(l[f], this.Ga) ? delete l[f][this.Ga] : !1
         };
      return k
   });
   ra("Map", function (a) {
      if (function () {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
            try {
               var k = Object.seal({
                     x: 4
                  }),
                  l = new a(_.va([
                     [k, "s"]
                  ]));
               if ("s" != l.get(k) || 1 != l.size || l.get({
                     x: 4
                  }) || l.set({
                     x: 4
                  }, "t") != l || 2 != l.size) return !1;
               var m = l.entries(),
                  n = m.next();
               if (n.done || n.value[0] != k || "s" != n.value[1]) return !1;
               n = m.next();
               return n.done || 4 != n.value[0].x || "t" != n.value[1] || !m.next().done ? !1 : !0
            } catch (p) {
               return !1
            }
         }()) return a;
      var b = new WeakMap,
         c = function (k) {
            this[0] = {};
            this[1] =
               f();
            this.size = 0;
            if (k) {
               k = _.va(k);
               for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
            }
         };
      c.prototype.set = function (k, l) {
         k = 0 === k ? 0 : k;
         var m = d(this, k);
         m.list || (m.list = this[0][m.id] = []);
         m.hf ? m.hf.value = l : (m.hf = {
            next: this[1],
            bl: this[1].bl,
            head: this[1],
            key: k,
            value: l
         }, m.list.push(m.hf), this[1].bl.next = m.hf, this[1].bl = m.hf, this.size++);
         return this
      };
      c.prototype.delete = function (k) {
         k = d(this, k);
         return k.hf && k.list ? (k.list.splice(k.index, 1), k.list.length || delete this[0][k.id], k.hf.bl.next = k.hf.next, k.hf.next.bl =
            k.hf.bl, k.hf.head = null, this.size--, !0) : !1
      };
      c.prototype.clear = function () {
         this[0] = {};
         this[1] = this[1].bl = f();
         this.size = 0
      };
      c.prototype.has = function (k) {
         return !!d(this, k).hf
      };
      c.prototype.get = function (k) {
         return (k = d(this, k).hf) && k.value
      };
      c.prototype.entries = function () {
         return e(this, function (k) {
            return [k.key, k.value]
         })
      };
      c.prototype.keys = function () {
         return e(this, function (k) {
            return k.key
         })
      };
      c.prototype.values = function () {
         return e(this, function (k) {
            return k.value
         })
      };
      c.prototype.forEach = function (k, l) {
         for (var m = this.entries(),
               n; !(n = m.next()).done;) n = n.value, k.call(l, n[1], n[0], this)
      };
      c.prototype[Symbol.iterator] = c.prototype.entries;
      var d = function (k, l) {
            var m = l && typeof l;
            "object" == m || "function" == m ? b.has(l) ? m = b.get(l) : (m = "" + ++h, b.set(l, m)) : m = "p_" + l;
            var n = k[0][m];
            if (n && wa(k[0], m))
               for (k = 0; k < n.length; k++) {
                  var p = n[k];
                  if (l !== l && p.key !== p.key || l === p.key) return {
                     id: m,
                     list: n,
                     index: k,
                     hf: p
                  }
               }
            return {
               id: m,
               list: n,
               index: -1,
               hf: void 0
            }
         },
         e = function (k, l) {
            var m = k[1];
            return sa(function () {
               if (m) {
                  for (; m.head != k[1];) m = m.bl;
                  for (; m.next != m.head;) return m =
                     m.next, {
                        done: !1,
                        value: l(m)
                     };
                  m = null
               }
               return {
                  done: !0,
                  value: void 0
               }
            })
         },
         f = function () {
            var k = {};
            return k.bl = k.next = k.head = k
         },
         h = 0;
      return c
   });
   ra("Array.prototype.find", function (a) {
      return a ? a : function (b, c) {
         a: {
            var d = this;d instanceof String && (d = String(d));
            for (var e = d.length, f = 0; f < e; f++) {
               var h = d[f];
               if (b.call(c, h, f, d)) {
                  b = h;
                  break a
               }
            }
            b = void 0
         }
         return b
      }
   });
   ra("Number.isFinite", function (a) {
      return a ? a : function (b) {
         return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
      }
   });
   var Na = function (a, b) {
      a instanceof String && (a += "");
      var c = 0,
         d = !1,
         e = {
            next: function () {
               if (!d && c < a.length) {
                  var f = c++;
                  return {
                     value: b(f, a[f]),
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
   };
   ra("Array.prototype.entries", function (a) {
      return a ? a : function () {
         return Na(this, function (b, c) {
            return [b, c]
         })
      }
   });
   ra("Array.prototype.keys", function (a) {
      return a ? a : function () {
         return Na(this, function (b) {
            return b
         })
      }
   });
   ra("Set", function (a) {
      if (function () {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
            try {
               var c = Object.seal({
                     x: 4
                  }),
                  d = new a(_.va([c]));
               if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                     x: 4
                  }) != d || 2 != d.size) return !1;
               var e = d.entries(),
                  f = e.next();
               if (f.done || f.value[0] != c || f.value[1] != c) return !1;
               f = e.next();
               return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
            } catch (h) {
               return !1
            }
         }()) return a;
      var b = function (c) {
         this.Ca = new Map;
         if (c) {
            c =
               _.va(c);
            for (var d; !(d = c.next()).done;) this.add(d.value)
         }
         this.size = this.Ca.size
      };
      b.prototype.add = function (c) {
         c = 0 === c ? 0 : c;
         this.Ca.set(c, c);
         this.size = this.Ca.size;
         return this
      };
      b.prototype.delete = function (c) {
         c = this.Ca.delete(c);
         this.size = this.Ca.size;
         return c
      };
      b.prototype.clear = function () {
         this.Ca.clear();
         this.size = 0
      };
      b.prototype.has = function (c) {
         return this.Ca.has(c)
      };
      b.prototype.entries = function () {
         return this.Ca.entries()
      };
      b.prototype.values = function () {
         return this.Ca.values()
      };
      b.prototype.keys = b.prototype.values;
      b.prototype[Symbol.iterator] = b.prototype.values;
      b.prototype.forEach = function (c, d) {
         var e = this;
         this.Ca.forEach(function (f) {
            return c.call(d, f, f, e)
         })
      };
      return b
   });
   ra("Array.prototype.values", function (a) {
      return a ? a : function () {
         return Na(this, function (b, c) {
            return c
         })
      }
   });
   ra("Array.from", function (a) {
      return a ? a : function (b, c, d) {
         c = null != c ? c : function (k) {
            return k
         };
         var e = [],
            f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
         if ("function" == typeof f) {
            b = f.call(b);
            for (var h = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, h++))
         } else
            for (f = b.length, h = 0; h < f; h++) e.push(c.call(d, b[h], h));
         return e
      }
   });
   ra("Object.entries", function (a) {
      return a ? a : function (b) {
         var c = [],
            d;
         for (d in b) wa(b, d) && c.push([d, b[d]]);
         return c
      }
   });
   ra("Object.values", function (a) {
      return a ? a : function (b) {
         var c = [],
            d;
         for (d in b) wa(b, d) && c.push(b[d]);
         return c
      }
   });
   ra("Object.is", function (a) {
      return a ? a : function (b, c) {
         return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
      }
   });
   ra("Array.prototype.includes", function (a) {
      return a ? a : function (b, c) {
         var d = this;
         d instanceof String && (d = String(d));
         var e = d.length;
         c = c || 0;
         for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0
         }
         return !1
      }
   });
   ra("String.prototype.includes", function (a) {
      return a ? a : function (b, c) {
         return -1 !== Ka(this, b, "includes").indexOf(b, c || 0)
      }
   });
   ra("Array.prototype.flat", function (a) {
      return a ? a : function (b) {
         b = void 0 === b ? 1 : b;
         var c = [];
         Array.prototype.forEach.call(this, function (d) {
            Array.isArray(d) && 0 < b ? (d = Array.prototype.flat.call(d, b - 1), c.push.apply(c, d)) : c.push(d)
         });
         return c
      }
   });
   ra("Math.trunc", function (a) {
      return a ? a : function (b) {
         b = Number(b);
         if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
         var c = Math.floor(Math.abs(b));
         return 0 > b ? -c : c
      }
   });
   ra("Number.MAX_SAFE_INTEGER", function () {
      return 9007199254740991
   });
   ra("Number.isInteger", function (a) {
      return a ? a : function (b) {
         return Number.isFinite(b) ? b === Math.floor(b) : !1
      }
   });
   ra("Number.isSafeInteger", function (a) {
      return a ? a : function (b) {
         return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER
      }
   });
   ra("Number.isNaN", function (a) {
      return a ? a : function (b) {
         return "number" === typeof b && isNaN(b)
      }
   });
   ra("String.prototype.replaceAll", function (a) {
      return a ? a : function (b, c) {
         if (b instanceof RegExp && !b.global) throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");
         return b instanceof RegExp ? this.replace(b, c) : this.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c)
      }
   });
   ra("globalThis", function (a) {
      return a || _.na
   });
   ra("Math.imul", function (a) {
      return a ? a : function (b, c) {
         b = Number(b);
         c = Number(c);
         var d = b & 65535,
            e = c & 65535;
         return d * e + ((b >>> 16 & 65535) * e + d * (c >>> 16 & 65535) << 16 >>> 0) | 0
      }
   });
   ra("String.fromCodePoint", function (a) {
      return a ? a : function (b) {
         for (var c = "", d = 0; d < arguments.length; d++) {
            var e = Number(arguments[d]);
            if (0 > e || 1114111 < e || e !== Math.floor(e)) throw new RangeError("invalid_code_point " + e);
            65535 >= e ? c += String.fromCharCode(e) : (e -= 65536, c += String.fromCharCode(e >>> 10 & 1023 | 55296), c += String.fromCharCode(e & 1023 | 56320))
         }
         return c
      }
   });
   ra("Promise.prototype.finally", function (a) {
      return a ? a : function (b) {
         return this.then(function (c) {
            return Promise.resolve(b()).then(function () {
               return c
            })
         }, function (c) {
            return Promise.resolve(b()).then(function () {
               throw c;
            })
         })
      }
   });
   _.Qa = {};
   /*

    Copyright The Closure Library Authors.
    SPDX-License-Identifier: Apache-2.0
   */
   _.Ta = _.Ta || {};
   _.r = this || self;
   _.Va = _.r._F_toggles || [];
   _.Wa = "closure_uid_" + (1E9 * Math.random() >>> 0);
   _.$a = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
         var d = c.slice();
         d.push.apply(d, arguments);
         return a.apply(this, d)
      }
   };
   _.C = function (a, b) {
      a = a.split(".");
      var c = _.r;
      a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
      for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b
   };
   _.ab = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.N = b.prototype;
      a.prototype = new c;
      a.prototype.constructor = a;
      a.At = function (d, e, f) {
         for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
         return b.prototype[e].apply(d, h)
      }
   };
   _.bb = window.osapi = window.osapi || {};
   window.___jsl = window.___jsl || {};
   (window.___jsl.cd = window.___jsl.cd || []).push({
      gwidget: {
         parsetags: "explicit"
      },
      appsapi: {
         plus_one_service: "/plus/v1"
      },
      csi: {
         rate: .01
      },
      poshare: {
         hangoutContactPickerServer: "https://plus.google.com"
      },
      gappsutil: {
         required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
         display_on_page_ready: !1
      },
      appsutil: {
         required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
         display_on_page_ready: !1
      },
      "oauth-flow": {
         authUrl: "https://accounts.google.com/o/oauth2/auth",
         proxyUrl: "https://accounts.google.com/o/oauth2/postmessageRelay",
         redirectUri: "postmessage"
      },
      iframes: {
         sharebox: {
            params: {
               json: "&"
            },
            url: ":socialhost:/:session_prefix:_/sharebox/dialog"
         },
         plus: {
            url: ":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"
         },
         ":socialhost:": "https://apis.google.com",
         ":im_socialhost:": "https://plus.googleapis.com",
         domains_suggest: {
            url: "https://domains.google.com/suggest/flow"
         },
         card: {
            params: {
               s: "#",
               userid: "&"
            },
            url: ":socialhost:/:session_prefix:_/hovercard/internalcard"
         },
         ":signuphost:": "https://plus.google.com",
         ":gplus_url:": "https://plus.google.com",
         plusone: {
            url: ":socialhost:/:session_prefix:_/+1/fastbutton?usegapi=1"
         },
         plus_share: {
            url: ":socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true&usegapi=1"
         },
         plus_circle: {
            url: ":socialhost:/:session_prefix:_/widget/plus/circle?usegapi=1"
         },
         plus_followers: {
            url: ":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"
         },
         configurator: {
            url: ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"
         },
         appcirclepicker: {
            url: ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
         },
         page: {
            url: ":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"
         },
         person: {
            url: ":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"
         },
         community: {
            url: ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"
         },
         follow: {
            url: ":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"
         },
         commentcount: {
            url: ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"
         },
         comments: {
            url: ":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1"
         },
         blogger: {
            url: ":socialhost:/:session_prefix:_/widget/render/blogger?usegapi=1"
         },
         youtube: {
            url: ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1"
         },
         reportabuse: {
            url: ":socialhost:/:session_prefix:_/widget/render/reportabuse?usegapi=1"
         },
         additnow: {
            url: ":socialhost:/additnow/additnow.html"
         },
         appfinder: {
            url: "https://workspace.google.com/:session_prefix:marketplace/appfinder?usegapi=1"
         },
         ":source:": "1p"
      },
      poclient: {
         update_session: "google.updateSessionCallback"
      },
      "googleapis.config": {
         rpc: "/rpc",
         root: "https://content.googleapis.com",
         "root-1p": "https://clients6.google.com",
         useGapiForXd3: !0,
         xd3: "/static/proxy.html",
         auth: {
            useInterimAuth: !1
         }
      },
      report: {
         apis: ["iframes\\..*", "gadgets\\..*", "gapi\\.appcirclepicker\\..*", "gapi\\.client\\..*"],
         rate: 1E-4
      },
      client: {
         perApiBatch: !0
      }
   });
   var db, eb;
   db = function (a, b, c) {
      return a.call.apply(a.bind, arguments)
   };
   eb = function (a, b, c) {
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
   };
   _.D = function (a, b, c) {
      _.D = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? db : eb;
      return _.D.apply(null, arguments)
   };
   var Kb, Sb, Ub, Xb, $b, ac, bc, cc, dc, kc;
   _.hb = function (a, b) {
      return _.da[a] = b
   };
   _.ib = function (a, b) {
      if (Error.captureStackTrace) Error.captureStackTrace(this, _.ib);
      else {
         var c = Error().stack;
         c && (this.stack = c)
      }
      a && (this.message = String(a));
      void 0 !== b && (this.cause = b);
      this.qK = !0
   };
   _.mb = function (a, b) {
      return 0 <= (0, _.lb)(a, b)
   };
   _.nb = function (a, b) {
      b = (0, _.lb)(a, b);
      var c;
      (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
      return c
   };
   _.ob = function (a) {
      var b = a.length;
      if (0 < b) {
         for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
         return c
      }
      return []
   };
   _.pb = function (a, b, c) {
      for (var d in a) b.call(c, a[d], d, a)
   };
   _.qb = function (a) {
      var b = [],
         c = 0,
         d;
      for (d in a) b[c++] = a[d];
      return b
   };
   _.rb = function (a) {
      var b = [],
         c = 0,
         d;
      for (d in a) b[c++] = d;
      return b
   };
   _.tb = function (a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
         d = arguments[e];
         for (c in d) a[c] = d[c];
         for (var f = 0; f < sb.length; f++) c = sb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
      }
   };
   _.vb = function (a) {
      var b = arguments.length;
      if (1 == b && Array.isArray(arguments[0])) return _.vb.apply(null, arguments[0]);
      for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
      return c
   };
   _.wb = function () {
      var a = _.r.navigator;
      return a && (a = a.userAgent) ? a : ""
   };
   _.Ab = function (a) {
      return _.yb(_.wb(), a)
   };
   _.Eb = function () {
      return _.Cb ? !!_.Db && 0 < _.Db.brands.length : !1
   };
   _.Fb = function () {
      return _.Eb() ? !1 : _.Ab("Opera")
   };
   _.Hb = function () {
      return _.Eb() ? !1 : _.Ab("Trident") || _.Ab("MSIE")
   };
   _.Ib = function () {
      return _.Eb() ? !1 : _.Ab("Edge")
   };
   Kb = function () {
      return _.Cb ? !!_.Db && !!_.Db.platform : !1
   };
   _.Lb = function () {
      return Kb() ? "Android" === _.Db.platform : _.Ab("Android")
   };
   _.Mb = function () {
      return _.Ab("iPhone") && !_.Ab("iPod") && !_.Ab("iPad")
   };
   _.Nb = function () {
      return _.Mb() || _.Ab("iPad") || _.Ab("iPod")
   };
   _.Ob = function () {
      return Kb() ? "macOS" === _.Db.platform : _.Ab("Macintosh")
   };
   _.Pb = function () {
      return Kb() ? "Windows" === _.Db.platform : _.Ab("Windows")
   };
   _.Qb = function () {
      return Kb() ? "Chrome OS" === _.Db.platform : _.Ab("CrOS")
   };
   _.Rb = function (a) {
      var b = typeof a;
      return "object" == b && null != a || "function" == b
   };
   _.Tb = function (a, b) {
      a = a.split(".");
      b = b || _.r;
      for (var c = 0; c < a.length; c++)
         if (b = b[a[c]], null == b) return null;
      return b
   };
   Ub = function (a, b) {
      var c = _.Tb("WIZ_global_data.oxN3nb");
      a = c && c[a];
      return null != a ? a : b
   };
   _.Vb = function (a) {
      var b = typeof a;
      return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
   };
   _.Wb = function (a) {
      var b = _.Vb(a);
      return "array" == b || "object" == b && "number" == typeof a.length
   };
   Xb = 0;
   _.Yb = function (a) {
      return Object.prototype.hasOwnProperty.call(a, _.Wa) && a[_.Wa] || (a[_.Wa] = ++Xb)
   };
   _.Zb = function () {
      return Date.now()
   };
   $b = function (a) {
      return a
   };
   _.ab(_.ib, Error);
   _.ib.prototype.name = "CustomError";
   bc = function () {
      if (void 0 === ac) {
         var a = null,
            b = _.r.trustedTypes;
         if (b && b.createPolicy) try {
            a = b.createPolicy("goog#html", {
               createHTML: $b,
               createScript: $b,
               createScriptURL: $b
            })
         } catch (c) {
            _.r.console && _.r.console.error(c.message)
         }
         ac = a
      }
      return ac
   };
   cc = {};
   dc = {};
   _.ec = function (a, b) {
      this.b0 = a === cc && b || "";
      this.W4 = dc
   };
   _.ec.prototype.toString = function () {
      return this.b0
   };
   _.gc = function (a) {
      return a instanceof _.ec && a.constructor === _.ec && a.W4 === dc ? a.b0 : "type_error:Const"
   };
   _.hc = function (a) {
      return new _.ec(cc, a)
   };
   _.ic = function (a) {
      this.xY = a
   };
   _.ic.prototype.toString = function () {
      return this.xY + ""
   };
   _.jc = function (a) {
      if (a instanceof _.ic && a.constructor === _.ic) return a.xY;
      _.Vb(a);
      return "type_error:TrustedResourceUrl"
   };
   kc = {};
   _.lc = function (a) {
      var b = bc();
      a = b ? b.createScriptURL(a) : a;
      return new _.ic(a, kc)
   };
   _.mc = function (a) {
      var b = !1,
         c;
      return function () {
         b || (c = a(), b = !0);
         return c
      }
   };
   _.lb = Array.prototype.indexOf ? function (a, b) {
      return Array.prototype.indexOf.call(a, b, void 0)
   } : function (a, b) {
      if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
      for (var c = 0; c < a.length; c++)
         if (c in a && a[c] === b) return c;
      return -1
   };
   _.nc = Array.prototype.lastIndexOf ? function (a, b) {
      return Array.prototype.lastIndexOf.call(a, b, a.length - 1)
   } : function (a, b) {
      var c = a.length - 1;
      0 > c && (c = Math.max(0, a.length + c));
      if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.lastIndexOf(b, c);
      for (; 0 <= c; c--)
         if (c in a && a[c] === b) return c;
      return -1
   };
   _.oc = Array.prototype.forEach ? function (a, b, c) {
      Array.prototype.forEach.call(a, b, c)
   } : function (a, b, c) {
      for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
   };
   _.pc = Array.prototype.filter ? function (a, b) {
      return Array.prototype.filter.call(a, b, void 0)
   } : function (a, b) {
      for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, h = 0; h < c; h++)
         if (h in f) {
            var k = f[h];
            b.call(void 0, k, h, a) && (d[e++] = k)
         } return d
   };
   _.rc = Array.prototype.map ? function (a, b, c) {
      return Array.prototype.map.call(a, b, c)
   } : function (a, b, c) {
      for (var d = a.length, e = Array(d), f = "string" === typeof a ? a.split("") : a, h = 0; h < d; h++) h in f && (e[h] = b.call(c, f[h], h, a));
      return e
   };
   _.sc = Array.prototype.reduce ? function (a, b, c) {
      return Array.prototype.reduce.call(a, b, c)
   } : function (a, b, c) {
      var d = c;
      (0, _.oc)(a, function (e, f) {
         d = b.call(void 0, d, e, f, a)
      });
      return d
   };
   _.tc = Array.prototype.some ? function (a, b, c) {
      return Array.prototype.some.call(a, b, c)
   } : function (a, b, c) {
      for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
         if (f in e && b.call(c, e[f], f, a)) return !0;
      return !1
   };
   _.uc = Array.prototype.every ? function (a, b, c) {
      return Array.prototype.every.call(a, b, c)
   } : function (a, b, c) {
      for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
         if (f in e && !b.call(c, e[f], f, a)) return !1;
      return !0
   };
   var sb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
   var vc = !!(_.Va[0] & 128),
      wc = !!(_.Va[0] & 4),
      xc = !!(_.Va[0] & 256),
      yc = !!(_.Va[0] & 2);
   _.Cb = vc ? xc : Ub(610401301, !1);
   _.zc = vc ? wc || !yc : Ub(572417392, !0);
   var Cc, Ec;
   _.Ac = function (a) {
      this.wY = a
   };
   _.Ac.prototype.toString = function () {
      return this.wY.toString()
   };
   _.Bc = function (a) {
      if (a instanceof _.Ac && a.constructor === _.Ac) return a.wY;
      _.Vb(a);
      return "type_error:SafeUrl"
   };
   try {
      new URL("s://g"), Cc = !0
   } catch (a) {
      Cc = !1
   }
   _.Dc = Cc;
   Ec = {};
   _.Fc = function (a) {
      return new _.Ac(a, Ec)
   };
   _.Gc = _.Fc("about:invalid#zClosurez");
   var Lc, Nc, Oc, Pc, Qc, Rc, Kc, Tc;
   _.Hc = function (a, b) {
      return 0 == a.lastIndexOf(b, 0)
   };
   _.Ic = function (a) {
      return /^[\s\xa0]*$/.test(a)
   };
   _.Jc = String.prototype.trim ? function (a) {
      return a.trim()
   } : function (a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
   };
   _.Sc = function (a) {
      if (!Kc.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Lc, "&")); - 1 != a.indexOf("<") && (a = a.replace(Nc, "<")); - 1 != a.indexOf(">") && (a = a.replace(Oc, ">")); - 1 != a.indexOf('"') && (a = a.replace(Pc, """)); - 1 != a.indexOf("'") && (a = a.replace(Qc, "'")); - 1 != a.indexOf("\x00") && (a = a.replace(Rc, "�"));
      return a
   };
   Lc = /&/g;
   Nc = /</g;
   Oc = />/g;
   Pc = /"/g;
   Qc = /'/g;
   Rc = /\x00/g;
   Kc = /[\x00&<>"']/;
   _.yb = function (a, b) {
      return -1 != a.indexOf(b)
   };
   _.Uc = function (a, b) {
      var c = 0;
      a = (0, _.Jc)(String(a)).split(".");
      b = (0, _.Jc)(String(b)).split(".");
      for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
         var f = a[e] || "",
            h = b[e] || "";
         do {
            f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
            h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
            if (0 == f[0].length && 0 == h[0].length) break;
            c = Tc(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || Tc(0 == f[2].length, 0 == h[2].length) || Tc(f[2], h[2]);
            f = f[3];
            h = h[3]
         } while (0 == c)
      }
      return c
   };
   Tc = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0
   };
   _.Vc = {};
   _.Wc = function (a) {
      this.vY = a
   };
   _.Wc.prototype.toString = function () {
      return this.vY.toString()
   };
   _.Xc = new _.Wc("", _.Vc);
   _.Zc = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$");
   _.$c = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g");
   _.ad = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g");
   var dd;
   _.bd = {};
   _.cd = function (a) {
      this.uY = a
   };
   _.cd.prototype.toString = function () {
      return this.uY.toString()
   };
   _.ed = function (a) {
      a = _.gc(a);
      return 0 === a.length ? dd : new _.cd(a, _.bd)
   };
   dd = new _.cd("", _.bd);
   var fd;
   fd = _.r.navigator;
   _.Db = fd ? fd.userAgentData || null : null;
   var gd;
   gd = {};
   _.hd = function (a) {
      this.tY = a
   };
   _.hd.prototype.toString = function () {
      return this.tY.toString()
   };
   _.id = function (a) {
      if (a instanceof _.hd && a.constructor === _.hd) return a.tY;
      _.Vb(a);
      return "type_error:SafeHtml"
   };
   _.kd = function (a) {
      return a instanceof _.hd ? a : _.jd(_.Sc(String(a)))
   };
   _.jd = function (a) {
      var b = bc();
      a = b ? b.createHTML(a) : a;
      return new _.hd(a, gd)
   };
   _.ld = new _.hd(_.r.trustedTypes && _.r.trustedTypes.emptyHTML || "", gd);
   _.md = _.jd("<br>");
   var nd = function (a) {
      nd[" "](a);
      return a
   };
   nd[" "] = function () {};
   _.od = function (a, b) {
      try {
         return nd(a[b]), !0
      } catch (c) {}
      return !1
   };
   var Fd, Gd, Ld;
   _.pd = _.Fb();
   _.qd = _.Hb();
   _.rd = _.Ab("Edge");
   _.td = _.rd || _.qd;
   _.ud = _.Ab("Gecko") && !(_.yb(_.wb().toLowerCase(), "webkit") && !_.Ab("Edge")) && !(_.Ab("Trident") || _.Ab("MSIE")) && !_.Ab("Edge");
   _.vd = _.yb(_.wb().toLowerCase(), "webkit") && !_.Ab("Edge");
   _.wd = _.vd && _.Ab("Mobile");
   _.xd = _.Ob();
   _.yd = _.Pb();
   _.zd = (Kb() ? "Linux" === _.Db.platform : _.Ab("Linux")) || _.Qb();
   _.Ad = _.Lb();
   _.Bd = _.Mb();
   _.Cd = _.Ab("iPad");
   _.Dd = _.Ab("iPod");
   _.Ed = _.Nb();
   Fd = function () {
      var a = _.r.document;
      return a ? a.documentMode : void 0
   };
   a: {
      var Hd = "",
         Id = function () {
            var a = _.wb();
            if (_.ud) return /rv:([^\);]+)(\)|;)/.exec(a);
            if (_.rd) return /Edge\/([\d\.]+)/.exec(a);
            if (_.qd) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (_.vd) return /WebKit\/(\S+)/.exec(a);
            if (_.pd) return /(?:Version)[ \/]?(\S+)/.exec(a)
         }();Id && (Hd = Id ? Id[1] : "");
      if (_.qd) {
         var Jd = Fd();
         if (null != Jd && Jd > parseFloat(Hd)) {
            Gd = String(Jd);
            break a
         }
      }
      Gd = Hd
   }
   _.Kd = Gd;
   if (_.r.document && _.qd) {
      var Od = Fd();
      Ld = Od ? Od : parseInt(_.Kd, 10) || void 0
   } else Ld = void 0;
   _.Pd = Ld;
   try {
      (new self.OffscreenCanvas(0, 0)).getContext("2d")
   } catch (a) {}
   _.Qd = _.qd || _.vd;
   var Rd, Td;
   Rd = _.mc(function () {
      var a = document.createElement("div"),
         b = document.createElement("div");
      b.appendChild(document.createElement("div"));
      a.appendChild(b);
      b = a.firstChild.firstChild;
      a.innerHTML = _.id(_.ld);
      return !b.parentElement
   });
   _.Sd = function (a, b) {
      if (Rd())
         for (; a.lastChild;) a.removeChild(a.lastChild);
      a.innerHTML = _.id(b)
   };
   Td = /^[\w+/_-]+[=]{0,2}$/;
   _.Ud = function (a, b) {
      b = (b || _.r).document;
      return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && Td.test(a) ? a : "" : ""
   };
   _.Vd = function (a, b) {
      this.width = a;
      this.height = b
   };
   _.Wd = function (a, b) {
      return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
   };
   _.g = _.Vd.prototype;
   _.g.clone = function () {
      return new _.Vd(this.width, this.height)
   };
   _.g.iy = function () {
      return this.width * this.height
   };
   _.g.aspectRatio = function () {
      return this.width / this.height
   };
   _.g.isEmpty = function () {
      return !this.iy()
   };
   _.g.ceil = function () {
      this.width = Math.ceil(this.width);
      this.height = Math.ceil(this.height);
      return this
   };
   _.g.floor = function () {
      this.width = Math.floor(this.width);
      this.height = Math.floor(this.height);
      return this
   };
   _.g.round = function () {
      this.width = Math.round(this.width);
      this.height = Math.round(this.height);
      return this
   };
   _.g.scale = function (a, b) {
      this.width *= a;
      this.height *= "number" === typeof b ? b : a;
      return this
   };
   _.Xd = String.prototype.repeat ? function (a, b) {
      return a.repeat(b)
   } : function (a, b) {
      return Array(b + 1).join(a)
   };
   _.Yd = 2147483648 * Math.random() | 0;
   var ce, me;
   _.ae = function (a) {
      return a ? new _.Zd(_.$d(a)) : Sb || (Sb = new _.Zd)
   };
   _.be = function (a, b, c, d) {
      a = d || a;
      b = b && "*" != b ? String(b).toUpperCase() : "";
      if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
      if (c && a.getElementsByClassName) {
         a = a.getElementsByClassName(c);
         if (b) {
            d = {};
            for (var e = 0, f = 0, h; h = a[f]; f++) b == h.nodeName && (d[e++] = h);
            d.length = e;
            return d
         }
         return a
      }
      a = a.getElementsByTagName(b || "*");
      if (c) {
         d = {};
         for (f = e = 0; h = a[f]; f++) b = h.className, "function" == typeof b.split && _.mb(b.split(/\s+/), c) && (d[e++] = h);
         d.length = e;
         return d
      }
      return a
   };
   _.fe = function (a, b) {
      _.pb(b, function (c, d) {
         "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : ce.hasOwnProperty(d) ? a.setAttribute(ce[d], c) : _.Hc(d, "aria-") || _.Hc(d, "data-") ? a.setAttribute(d, c) : a[d] = c
      })
   };
   ce = {
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      colspan: "colSpan",
      frameborder: "frameBorder",
      height: "height",
      maxlength: "maxLength",
      nonce: "nonce",
      role: "role",
      rowspan: "rowSpan",
      type: "type",
      usemap: "useMap",
      valign: "vAlign",
      width: "width"
   };
   _.he = function (a) {
      return _.ge(a || window)
   };
   _.ge = function (a) {
      a = a.document;
      a = _.ie(a) ? a.documentElement : a.body;
      return new _.Vd(a.clientWidth, a.clientHeight)
   };
   _.je = function (a) {
      return a ? a.parentWindow || a.defaultView : window
   };
   _.ne = function (a, b) {
      var c = b[1],
         d = _.ke(a, String(b[0]));
      c && ("string" === typeof c ? d.className = c : Array.isArray(c) ? d.className = c.join(" ") : _.fe(d, c));
      2 < b.length && me(a, d, b, 2);
      return d
   };
   me = function (a, b, c, d) {
      function e(k) {
         k && b.appendChild("string" === typeof k ? a.createTextNode(k) : k)
      }
      for (; d < c.length; d++) {
         var f = c[d];
         if (!_.Wb(f) || _.Rb(f) && 0 < f.nodeType) e(f);
         else {
            a: {
               if (f && "number" == typeof f.length) {
                  if (_.Rb(f)) {
                     var h = "function" == typeof f.item || "string" == typeof f.item;
                     break a
                  }
                  if ("function" === typeof f) {
                     h = "function" == typeof f.item;
                     break a
                  }
               }
               h = !1
            }
            _.oc(h ? _.ob(f) : f, e)
         }
      }
   };
   _.oe = function (a) {
      return _.ke(document, a)
   };
   _.ke = function (a, b) {
      b = String(b);
      "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
      return a.createElement(b)
   };
   _.ie = function (a) {
      return "CSS1Compat" == a.compatMode
   };
   _.pe = function (a) {
      if (1 != a.nodeType) return !1;
      switch (a.tagName) {
         case "APPLET":
         case "AREA":
         case "BASE":
         case "BR":
         case "COL":
         case "COMMAND":
         case "EMBED":
         case "FRAME":
         case "HR":
         case "IMG":
         case "INPUT":
         case "IFRAME":
         case "ISINDEX":
         case "KEYGEN":
         case "LINK":
         case "NOFRAMES":
         case "NOSCRIPT":
         case "META":
         case "OBJECT":
         case "PARAM":
         case "SCRIPT":
         case "SOURCE":
         case "STYLE":
         case "TRACK":
         case "WBR":
            return !1
      }
      return !0
   };
   _.qe = function (a, b) {
      me(_.$d(a), a, arguments, 1)
   };
   _.re = function (a) {
      for (var b; b = a.firstChild;) a.removeChild(b)
   };
   _.se = function (a, b) {
      b.parentNode && b.parentNode.insertBefore(a, b)
   };
   _.te = function (a) {
      return a && a.parentNode ? a.parentNode.removeChild(a) : null
   };
   _.ue = function (a) {
      return void 0 != a.children ? a.children : Array.prototype.filter.call(a.childNodes, function (b) {
         return 1 == b.nodeType
      })
   };
   _.ve = function (a) {
      return _.Rb(a) && 1 == a.nodeType
   };
   _.we = function (a, b) {
      if (!a || !b) return !1;
      if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
      if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
      for (; b && a != b;) b = b.parentNode;
      return b == a
   };
   _.$d = function (a) {
      return 9 == a.nodeType ? a : a.ownerDocument || a.document
   };
   _.xe = function (a, b) {
      if ("textContent" in a) a.textContent = b;
      else if (3 == a.nodeType) a.data = String(b);
      else if (a.firstChild && 3 == a.firstChild.nodeType) {
         for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
         a.firstChild.data = String(b)
      } else _.re(a), a.appendChild(_.$d(a).createTextNode(String(b)))
   };
   _.Zd = function (a) {
      this.Hb = a || _.r.document || document
   };
   _.g = _.Zd.prototype;
   _.g.Ja = _.ae;
   _.g.lL = _.ea(0);
   _.g.ub = function () {
      return this.Hb
   };
   _.g.O = _.ea(1);
   _.g.getElementsByTagName = function (a, b) {
      return (b || this.Hb).getElementsByTagName(String(a))
   };
   _.g.yH = _.ea(2);
   _.g.va = function (a, b, c) {
      return _.ne(this.Hb, arguments)
   };
   _.g.createElement = function (a) {
      return _.ke(this.Hb, a)
   };
   _.g.createTextNode = function (a) {
      return this.Hb.createTextNode(String(a))
   };
   _.g.getWindow = function () {
      var a = this.Hb;
      return a.parentWindow || a.defaultView
   };
   _.g.appendChild = function (a, b) {
      a.appendChild(b)
   };
   _.g.append = _.qe;
   _.g.canHaveChildren = _.pe;
   _.g.Ae = _.re;
   _.g.mV = _.se;
   _.g.removeNode = _.te;
   _.g.JG = _.ue;
   _.g.isElement = _.ve;
   _.g.contains = _.we;
   _.g.bH = _.$d;
   _.g.Bj = _.ea(3);
   _.ye = function (a, b) {
      for (var c in a)
         if (a[c] == b) return !0;
      return !1
   };
   _.ze = function (a, b) {
      return "string" === typeof b ? a.getElementById(b) : b
   };
   _.E = function (a, b) {
      a.prototype = (0, _.Da)(b.prototype);
      a.prototype.constructor = a;
      if (_.Ia)(0, _.Ia)(a, b);
      else
         for (var c in b)
            if ("prototype" != c)
               if (Object.defineProperties) {
                  var d = Object.getOwnPropertyDescriptor(b, c);
                  d && Object.defineProperty(a, c, d)
               } else a[c] = b[c];
      a.N = b.prototype
   };
   _.Ae = function (a) {
      if (!(a instanceof Array)) {
         a = _.va(a);
         for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
         a = c
      }
      return a
   };
   _.Be = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
      return b
   };
   /*

    SPDX-License-Identifier: Apache-2.0
   */
   var Ce, Ee;
   Ce = function (a) {
      return {
         valueOf: a
      }.valueOf()
   };
   Ee = function (a) {
      return new De(function (b) {
         return b.substr(0, a.length + 1).toLowerCase() === a + ":"
      })
   };
   _.Ge = function (a) {
      var b = void 0 === b ? Fe : b;
      a: if (b = void 0 === b ? Fe : b, !(a instanceof _.Ac)) {
         for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d instanceof De && d.Dj(a)) {
               a = _.Fc(a);
               break a
            }
         }
         a = void 0
      }
      return a || _.Gc
   };
   _.Ie = function (a) {
      if (!He) {
         a: {
            var b = document.createElement("a");
            try {
               b.href = a
            } catch (c) {
               a = void 0;
               break a
            }
            a = b.protocol;a = ":" === a || "" === a ? "https:" : a
         }
         return a
      }
      try {
         b = new URL(a)
      } catch (c) {
         return "https:"
      }
      return b.protocol
   };
   _.Je = function (a) {
      if ("javascript:" !== _.Ie(a)) return a
   };
   _.Ke = function (a, b) {
      b = void 0 === b ? {} : b;
      if (a instanceof _.hd) return a;
      a = String(a).replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">").replace(/"/g, """).replace(/'/g, "'");
      b.Gqa && (a = a.replace(/(^|[\r\n\t ]) /g, "$1 "));
      b.mda && (a = a.replace(/(\r\n|\n|\r)/g, "<br>"));
      b.Hqa && (a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>'));
      return _.jd(a)
   };
   var De = function (a) {
         this.Dj = a
      },
      Fe = [Ee("data"), Ee("http"), Ee("https"), Ee("mailto"), Ee("ftp"), new De(function (a) {
         return /^[^:]*([/?#]|$)/.test(a)
      })],
      He = Ce(function () {
         return "function" === typeof URL
      });
   var Me = function (a, b, c, d) {
      var e = new Map(Le);
      this.N5 = a;
      this.xR = e;
      this.O5 = b;
      this.C9 = c;
      this.PT = d
   };
   var Ne = "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" "),
      Le = [
         ["A", new Map([
            ["href", {
               fe: 2
            }]
         ])],
         ["AREA", new Map([
            ["href", {
               fe: 2
            }]
         ])],
         ["LINK", new Map([
            ["href", {
               fe: 2,
               conditions: new Map([
                  ["rel", new Set("alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" "))]
               ])
            }]
         ])],
         ["SOURCE", new Map([
            ["src", {
               fe: 1
            }]
         ])],
         ["IMG", new Map([
            ["src", {
               fe: 1
            }]
         ])],
         ["VIDEO", new Map([
            ["src", {
               fe: 1
            }]
         ])],
         ["AUDIO", new Map([
            ["src", {
               fe: 1
            }]
         ])]
      ],
      Oe = "title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" "),
      Pe = [
         ["dir", {
            fe: 3,
            conditions: Ce(function () {
               return new Map([
                  ["dir", new Set(["auto", "ltr", "rtl"])]
               ])
            })
         }],
         ["async", {
            fe: 3,
            conditions: Ce(function () {
               return new Map([
                  ["async", new Set(["async"])]
               ])
            })
         }],
         ["cite", {
            fe: 2
         }],
         ["loading", {
            fe: 3,
            conditions: Ce(function () {
               return new Map([
                  ["loading", new Set(["eager", "lazy"])]
               ])
            })
         }],
         ["poster", {
            fe: 2
         }],
         ["target", {
            fe: 3,
            conditions: Ce(function () {
               return new Map([
                  ["target", new Set(["_self", "_blank"])]
               ])
            })
         }]
      ],
      Qe = new Me(new Set(Ne), new Set(Oe), new Map(Pe)),
      Re = new Me(new Set(Ne),
         new Set(Ce(function () {
            return Oe.concat(["class", "id"])
         })), new Map(Ce(function () {
            return Pe.concat([
               ["style", {
                  fe: 4
               }]
            ])
         }))),
      Se = new Me(new Set(Ce(function () {
         return Ne.concat("STYLE TITLE INPUT TEXTAREA BUTTON LABEL".split(" "))
      })), new Set(Ce(function () {
         return Oe.concat(["class", "id", "tabindex", "contenteditable", "name"])
      })), new Map(Ce(function () {
         return Pe.concat([
            ["style", {
               fe: 4
            }]
         ])
      })), new Set(["data-", "aria-"]));
   var Te;
   Te = function (a) {
      this.lZ = a;
      this.Ey = []
   };
   _.Ue = Ce(function () {
      return new Te(Qe)
   });
   _.Ve = Ce(function () {
      return new Te(Re)
   });
   _.We = Ce(function () {
      return new Te(Se)
   });
   /*
    gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
   _.Xe = function (a) {
      return a instanceof _.Ac ? _.Bc(a) : _.Je(a)
   };
   _.Ye = function (a, b) {
      if (1 === a.nodeType) {
         var c = a.tagName;
         if ("SCRIPT" === c || "STYLE" === c) throw Error("q");
      }
      a.innerHTML = _.id(b)
   };
   _.Ze = function (a, b, c, d) {
      b = _.Xe(b);
      return void 0 !== b ? a.open(b, c, d) : null
   };
   _.$e = function (a) {
      return null === a ? "null" : void 0 === a ? "undefined" : a
   };
   _.af = window;
   _.cf = document;
   _.df = _.af.location;
   _.ef = /\[native code\]/;
   _.ff = function (a, b, c) {
      return a[b] = a[b] || c
   };
   _.gf = function () {
      var a;
      if ((a = Object.create) && _.ef.test(a)) a = a(null);
      else {
         a = {};
         for (var b in a) a[b] = void 0
      }
      return a
   };
   _.hf = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b)
   };
   _.jf = function (a, b) {
      a = a || {};
      for (var c in a) _.hf(a, c) && (b[c] = a[c])
   };
   _.kf = _.ff(_.af, "gapi", {});
   _.lf = function (a, b, c) {
      var d = new RegExp("([#].*&|[#])" + b + "=([^&#]*)", "g");
      b = new RegExp("([?#].*&|[?#])" + b + "=([^&#]*)", "g");
      if (a = a && (d.exec(a) || b.exec(a))) try {
         c = decodeURIComponent(a[2])
      } catch (e) {}
      return c
   };
   _.mf = new RegExp(/^/.source + /([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source + /(\/\/[^\/?#]*)?/.source + /([^?#]*)?/.source + /(\?([^#]*))?/.source + /(#((#|[^#])*))?/.source + /$/.source);
   _.nf = new RegExp(/(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source + /%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source, "g");
   _.of = new RegExp(/\/?\??#?/.source + "(" + /[\/?#]/i.source + "|" + /[\uD800-\uDBFF]/i.source + "|" + /%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source + "|" + /%[0-9a-f]?/i.source + ")$", "i");
   _.qf = function (a, b, c) {
      _.pf(a, b, c, "add", "at")
   };
   _.pf = function (a, b, c, d, e) {
      if (a[d + "EventListener"]) a[d + "EventListener"](b, c, !1);
      else if (a[e + "tachEvent"]) a[e + "tachEvent"]("on" + b, c)
   };
   _.rf = {};
   _.rf = _.ff(_.af, "___jsl", _.gf());
   _.ff(_.rf, "I", 0);
   _.ff(_.rf, "hel", 10);
   var sf, tf, uf, vf, wf, xf, yf;
   sf = function (a) {
      var b = window.___jsl = window.___jsl || {};
      b[a] = b[a] || [];
      return b[a]
   };
   tf = function (a) {
      var b = window.___jsl = window.___jsl || {};
      b.cfg = !a && b.cfg || {};
      return b.cfg
   };
   uf = function (a) {
      return "object" === typeof a && /\[native code\]/.test(a.push)
   };
   vf = function (a, b, c) {
      if (b && "object" === typeof b)
         for (var d in b) !Object.prototype.hasOwnProperty.call(b, d) || c && "___goc" === d && "undefined" === typeof b[d] || (a[d] && b[d] && "object" === typeof a[d] && "object" === typeof b[d] && !uf(a[d]) && !uf(b[d]) ? vf(a[d], b[d]) : b[d] && "object" === typeof b[d] ? (a[d] = uf(b[d]) ? [] : {}, vf(a[d], b[d])) : a[d] = b[d])
   };
   wf = function (a) {
      if (a && !/^\s+$/.test(a)) {
         for (; 0 == a.charCodeAt(a.length - 1);) a = a.substring(0, a.length - 1);
         try {
            var b = window.JSON.parse(a)
         } catch (c) {}
         if ("object" === typeof b) return b;
         try {
            b = (new Function("return (" + a + "\n)"))()
         } catch (c) {}
         if ("object" === typeof b) return b;
         try {
            b = (new Function("return ({" + a + "\n})"))()
         } catch (c) {}
         return "object" === typeof b ? b : {}
      }
   };
   xf = function (a, b) {
      var c = {
         ___goc: void 0
      };
      a.length && a[a.length - 1] && Object.hasOwnProperty.call(a[a.length - 1], "___goc") && "undefined" === typeof a[a.length - 1].___goc && (c = a.pop());
      vf(c, b);
      a.push(c)
   };
   yf = function (a) {
      tf(!0);
      var b = window.___gcfg,
         c = sf("cu"),
         d = window.___gu;
      b && b !== d && (xf(c, b), window.___gu = b);
      b = sf("cu");
      var e = document.scripts || document.getElementsByTagName("script") || [];
      d = [];
      var f = [];
      f.push.apply(f, sf("us"));
      for (var h = 0; h < e.length; ++h)
         for (var k = e[h], l = 0; l < f.length; ++l) k.src && 0 == k.src.indexOf(f[l]) && d.push(k);
      0 == d.length && 0 < e.length && e[e.length - 1].src && d.push(e[e.length - 1]);
      for (e = 0; e < d.length; ++e) d[e].getAttribute("gapi_processed") || (d[e].setAttribute("gapi_processed", !0), (f = d[e]) ? (h =
         f.nodeType, f = 3 == h || 4 == h ? f.nodeValue : f.textContent || "") : f = void 0, (f = wf(f)) && b.push(f));
      a && xf(c, a);
      d = sf("cd");
      a = 0;
      for (b = d.length; a < b; ++a) vf(tf(), d[a], !0);
      d = sf("ci");
      a = 0;
      for (b = d.length; a < b; ++a) vf(tf(), d[a], !0);
      a = 0;
      for (b = c.length; a < b; ++a) vf(tf(), c[a], !0)
   };
   _.zf = function (a, b) {
      var c = tf();
      if (!a) return c;
      a = a.split("/");
      for (var d = 0, e = a.length; c && "object" === typeof c && d < e; ++d) c = c[a[d]];
      return d === a.length && void 0 !== c ? c : b
   };
   _.Af = function (a, b) {
      var c;
      if ("string" === typeof a) {
         var d = c = {};
         a = a.split("/");
         for (var e = 0, f = a.length; e < f - 1; ++e) {
            var h = {};
            d = d[a[e]] = h
         }
         d[a[e]] = b
      } else c = a;
      yf(c)
   };
   var Bf = function () {
      var a = window.__GOOGLEAPIS;
      a && (a.googleapis && !a["googleapis.config"] && (a["googleapis.config"] = a.googleapis), _.ff(_.rf, "ci", []).push(a), window.__GOOGLEAPIS = void 0)
   };
   Bf && Bf();
   yf();
   _.C("gapi.config.get", _.zf);
   _.C("gapi.config.update", _.Af);
   var Cf, Df, Ef, Ff, Hf, If, Kf, Qf, Rf, Sf, Tf, Uf, Vf, Jf, Nf, Of;
   Cf = function (a, b) {
      var c = b.createRange();
      c.selectNode(b.body);
      a = _.jd(a);
      return c.createContextualFragment(_.id(a))
   };
   Df = function (a) {
      a = a.nodeName;
      return "string" === typeof a ? a : "FORM"
   };
   Ef = function (a) {
      a = a.nodeType;
      return 1 === a || "number" !== typeof a
   };
   Ff = function (a, b, c) {
      a.setAttribute(b, c)
   };
   _.Gf = function (a) {
      var b = _.Be.apply(1, arguments);
      if (0 === b.length) return _.lc(a[0]);
      for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
      return _.lc(c)
   };
   Hf = function (a, b) {
      var c = new XMLHttpRequest;
      c.open("POST", a);
      c.setRequestHeader("Content-Type", "application/json");
      c.send(b)
   };
   If = function (a, b) {
      ("undefined" !== typeof window && window.navigator && void 0 !== window.navigator.sendBeacon ? navigator.sendBeacon.bind(navigator) : Hf)("https://csp.withgoogle.com/csp/lcreport/" + a.rK, JSON.stringify({
         host: window.location.hostname,
         type: b,
         additionalData: void 0
      }))
   };
   Kf = function (a, b) {
      try {
         Jf(_.We, a)
      } catch (c) {
         return If(b, "H_SLSANITIZE"), !0
      }
      try {
         Jf(_.Ve, a)
      } catch (c) {
         return If(b, "H_RSANITIZE"), !0
      }
      try {
         Jf(_.Ue, a)
      } catch (c) {
         return If(b, "H_SANITIZE"), !0
      }
      return !1
   };
   _.Lf = function (a) {
      var b, c;
      return (a = null == (c = (b = a.document).querySelector) ? void 0 : c.call(b, "script[nonce]")) ? a.nonce || a.getAttribute("nonce") || "" : ""
   };
   _.Mf = function (a, b) {
      a.src = _.jc(b);
      (b = _.Lf(a.ownerDocument && a.ownerDocument.defaultView || window)) && a.setAttribute("nonce", b)
   };
   _.Pf = function (a, b) {
      a = _.$e(a);
      var c;
      if (c = b) {
         var d, e;
         c = Math.random() < (null != (e = null != (d = b.bra) ? d : Nf[b.rK[0]]) ? e : 0)
      }
      if (c && !1 !== window.SAFEVALUES_REPORTING && "DocumentFragment" in window) {
         var f, h;
         Math.random() < (null != (h = null != (f = b.Upa) ? f : Of[b.rK[0]]) ? h : 0) && If(b, "HEARTBEAT");
         Kf(a, b) || _.Ke(a).toString() !== a && If(b, "H_ESCAPE")
      }
      return _.jd(a)
   };
   Qf = ["data:", "http:", "https:", "mailto:", "ftp:"];
   Rf = function (a, b, c) {
      c = a.xR.get(c);
      return (null == c ? 0 : c.has(b)) ? c.get(b) : a.O5.has(b) ? {
         fe: 1
      } : (c = a.C9.get(b)) ? c : a.PT && [].concat(_.Ae(a.PT)).some(function (d) {
         return 0 === b.indexOf(d)
      }) ? {
         fe: 1
      } : {
         fe: 0
      }
   };
   Sf = function (a) {
      0 === a.Ey.length && a.Ey.push("")
   };
   Tf = function (a, b) {
      if (3 === b.nodeType) return 1;
      if (!Ef(b)) return 2;
      b = Df(b);
      if (null === b) return Sf(a), 2;
      var c = a.lZ;
      if ("FORM" !== b && (c.N5.has(b) || c.xR.has(b))) return 1;
      Sf(a);
      return 2
   };
   Uf = function (a, b, c) {
      var d = Df(b);
      c = c.createElement(d);
      b = b.attributes;
      for (var e = _.va(b), f = e.next(); !f.done; f = e.next()) {
         var h = f.value;
         f = h.name;
         h = h.value;
         var k = Rf(a.lZ, f, d),
            l;
         a: {
            if (l = k.conditions) {
               l = _.va(l);
               for (var m = l.next(); !m.done; m = l.next()) {
                  var n = _.va(m.value);
                  m = n.next().value;
                  n = n.next().value;
                  var p = void 0;
                  if ((m = null == (p = b.getNamedItem(m)) ? void 0 : p.value) && !n.has(m)) {
                     l = !1;
                     break a
                  }
               }
            }
            l = !0
         }
         if (l) switch (k.fe) {
            case 1:
               Ff(c, f, h);
               break;
            case 2:
               k = _.Ie(h);
               k = void 0 !== k && -1 !== Qf.indexOf(k.toLowerCase()) ? h : "about:invalid#zClosurez";
               k !== h && Sf(a);
               Ff(c, f, k);
               break;
            case 3:
               Ff(c, f, h.toLowerCase());
               break;
            case 4:
               Ff(c, f, h);
               break;
            case 0:
               Sf(a)
         } else Sf(a)
      }
      return c
   };
   Vf = function (a, b, c) {
      b = Cf(b, c);
      b = document.createTreeWalker(b, 5, function (k) {
         return Tf(a, k)
      }, !1);
      for (var d = b.nextNode(), e = c.createDocumentFragment(), f = e; null !== d;) {
         var h = void 0;
         if (3 === d.nodeType) h = document.createTextNode(d.data);
         else if (Ef(d)) h = Uf(a, d, c);
         else throw Error("q");
         f.appendChild(h);
         if (d = b.firstChild()) f = h;
         else
            for (; !(d = b.nextSibling()) && (d = b.parentNode());) f = f.parentNode
      }
      return e
   };
   _.Wf = function (a, b) {
      var c = document.implementation.createHTMLDocument(""),
         d = c.body;
      d.appendChild(Vf(a, b, c));
      a = (new XMLSerializer).serializeToString(d);
      a = a.slice(a.indexOf(">") + 1, a.lastIndexOf("</"));
      return _.jd(a)
   };
   Jf = function (a, b) {
      a.Ey = [];
      _.Wf(a, b);
      if (0 !== a.Ey.length) throw Error("q");
   };
   Nf = {
      0: 1,
      1: 1
   };
   Of = {
      0: .1,
      1: .1
   };
   var bg, cg, eg, fg, gg, hg, ig, jg, kg, lg, mg, ng, og, pg, qg, rg, sg, tg, ug, vg, wg, xg, yg, zg, Ag, Bg, Cg, Dg, Eg, Fg, Gg, Jg, Kg;
   eg = void 0;
   fg = function (a) {
      try {
         return _.r.JSON.parse.call(_.r.JSON, a)
      } catch (b) {
         return !1
      }
   };
   gg = function (a) {
      return Object.prototype.toString.call(a)
   };
   hg = gg(0);
   ig = gg(new Date(0));
   jg = gg(!0);
   kg = gg("");
   lg = gg({});
   mg = gg([]);
   ng = function (a, b) {
      if (b)
         for (var c = 0, d = b.length; c < d; ++c)
            if (a === b[c]) throw new TypeError("Converting circular structure to JSON");
      d = typeof a;
      if ("undefined" !== d) {
         c = Array.prototype.slice.call(b || [], 0);
         c[c.length] = a;
         b = [];
         var e = gg(a);
         if (null != a && "function" === typeof a.toJSON && (Object.prototype.hasOwnProperty.call(a, "toJSON") || (e !== mg || a.constructor !== Array && a.constructor !== Object) && (e !== lg || a.constructor !== Array && a.constructor !== Object) && e !== kg && e !== hg && e !== jg && e !== ig)) return ng(a.toJSON.call(a), c);
         if (null ==
            a) b[b.length] = "null";
         else if (e === hg) a = Number(a), isNaN(a) || isNaN(a - a) ? a = "null" : -0 === a && 0 > 1 / a && (a = "-0"), b[b.length] = String(a);
         else if (e === jg) b[b.length] = String(!!Number(a));
         else {
            if (e === ig) return ng(a.toISOString.call(a), c);
            if (e === mg && gg(a.length) === hg) {
               b[b.length] = "[";
               var f = 0;
               for (d = Number(a.length) >> 0; f < d; ++f) f && (b[b.length] = ","), b[b.length] = ng(a[f], c) || "null";
               b[b.length] = "]"
            } else if (e == kg && gg(a.length) === hg) {
               b[b.length] = '"';
               f = 0;
               for (c = Number(a.length) >> 0; f < c; ++f) d = String.prototype.charAt.call(a, f),
                  e = String.prototype.charCodeAt.call(a, f), b[b.length] = "\b" === d ? "\\b" : "\f" === d ? "\\f" : "\n" === d ? "\\n" : "\r" === d ? "\\r" : "\t" === d ? "\\t" : "\\" === d || '"' === d ? "\\" + d : 31 >= e ? "\\u" + (e + 65536).toString(16).substr(1) : 32 <= e && 65535 >= e ? d : "\ufffd";
               b[b.length] = '"'
            } else if ("object" === d) {
               b[b.length] = "{";
               d = 0;
               for (f in a) Object.prototype.hasOwnProperty.call(a, f) && (e = ng(a[f], c), void 0 !== e && (d++ && (b[b.length] = ","), b[b.length] = ng(f), b[b.length] = ":", b[b.length] = e));
               b[b.length] = "}"
            } else return
         }
         return b.join("")
      }
   };
   og = /[\0-\x07\x0b\x0e-\x1f]/;
   pg = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/;
   qg = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/;
   rg = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/;
   sg = /"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g;
   tg = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g;
   ug = /[ \t\n\r]+/g;
   vg = /[^"]:/;
   wg = /""/g;
   xg = /true|false|null/g;
   yg = /00/;
   zg = /[\{]([^0\}]|0[^:])/;
   Ag = /(^|\[)[,:]|[,:](\]|\}|[,:]|$)/;
   Bg = /[^\[,:][\[\{]/;
   Cg = /^(\{|\}|\[|\]|,|:|0)+/;
   Dg = /\u2028/g;
   Eg = /\u2029/g;
   Fg = function (a) {
      a = String(a);
      if (og.test(a) || pg.test(a) || qg.test(a) || rg.test(a)) return !1;
      var b = a.replace(sg, '""');
      b = b.replace(tg, "0");
      b = b.replace(ug, "");
      if (vg.test(b)) return !1;
      b = b.replace(wg, "0");
      b = b.replace(xg, "0");
      if (yg.test(b) || zg.test(b) || Ag.test(b) || Bg.test(b) || !b || (b = b.replace(Cg, ""))) return !1;
      a = a.replace(Dg, "\\u2028").replace(Eg, "\\u2029");
      b = void 0;
      try {
         b = eg ? [fg(a)] : eval("(function (var_args) {\n  return Array.prototype.slice.call(arguments, 0);\n})(\n" + a + "\n)")
      } catch (c) {
         return !1
      }
      return b && 1 ===
         b.length ? b[0] : !1
   };
   Gg = function () {
      var a = ((_.r.document || {}).scripts || []).length;
      if ((void 0 === bg || void 0 === eg || cg !== a) && -1 !== cg) {
         bg = eg = !1;
         cg = -1;
         try {
            try {
               eg = !!_.r.JSON && '{"a":[3,true,"1970-01-01T00:00:00.000Z"]}' === _.r.JSON.stringify.call(_.r.JSON, {
                  a: [3, !0, new Date(0)],
                  c: function () {}
               }) && !0 === fg("true") && 3 === fg('[{"a":3}]')[0].a
            } catch (b) {}
            bg = eg && !fg("[00]") && !fg('"\u0007"') && !fg('"\\0"') && !fg('"\\v"')
         } finally {
            cg = a
         }
      }
   };
   _.Hg = function (a) {
      if (-1 === cg) return !1;
      Gg();
      return (bg ? fg : Fg)(a)
   };
   _.Ig = function (a) {
      if (-1 !== cg) return Gg(), eg ? _.r.JSON.stringify.call(_.r.JSON, a) : ng(a)
   };
   Jg = !Date.prototype.toISOString || "function" !== typeof Date.prototype.toISOString || "1970-01-01T00:00:00.000Z" !== (new Date(0)).toISOString();
   Kg = function () {
      var a = Date.prototype.getUTCFullYear.call(this);
      return [0 > a ? "-" + String(1E6 - a).substr(1) : 9999 >= a ? String(1E4 + a).substr(1) : "+" + String(1E6 + a).substr(1), "-", String(101 + Date.prototype.getUTCMonth.call(this)).substr(1), "-", String(100 + Date.prototype.getUTCDate.call(this)).substr(1), "T", String(100 + Date.prototype.getUTCHours.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCMinutes.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCSeconds.call(this)).substr(1), ".", String(1E3 + Date.prototype.getUTCMilliseconds.call(this)).substr(1),
         "Z"
      ].join("")
   };
   Date.prototype.toISOString = Jg ? Kg : Date.prototype.toISOString;
   var Bh = function () {
      this.blockSize = -1
   };
   var Ch = function () {
      this.blockSize = -1;
      this.blockSize = 64;
      this.Zc = [];
      this.hF = [];
      this.n5 = [];
      this.aC = [];
      this.aC[0] = 128;
      for (var a = 1; a < this.blockSize; ++a) this.aC[a] = 0;
      this.KD = this.xr = 0;
      this.reset()
   };
   _.ab(Ch, Bh);
   Ch.prototype.reset = function () {
      this.Zc[0] = 1732584193;
      this.Zc[1] = 4023233417;
      this.Zc[2] = 2562383102;
      this.Zc[3] = 271733878;
      this.Zc[4] = 3285377520;
      this.KD = this.xr = 0
   };
   var Dh = function (a, b, c) {
      c || (c = 0);
      var d = a.n5;
      if ("string" === typeof b)
         for (var e = 0; 16 > e; e++) d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4;
      else
         for (e = 0; 16 > e; e++) d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
      for (e = 16; 80 > e; e++) {
         var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
         d[e] = (f << 1 | f >>> 31) & 4294967295
      }
      b = a.Zc[0];
      c = a.Zc[1];
      var h = a.Zc[2],
         k = a.Zc[3],
         l = a.Zc[4];
      for (e = 0; 80 > e; e++) {
         if (40 > e)
            if (20 > e) {
               f = k ^ c & (h ^ k);
               var m = 1518500249
            } else f = c ^ h ^ k, m = 1859775393;
         else 60 > e ? (f = c & h | k & (c | h),
            m = 2400959708) : (f = c ^ h ^ k, m = 3395469782);
         f = (b << 5 | b >>> 27) + f + l + m + d[e] & 4294967295;
         l = k;
         k = h;
         h = (c << 30 | c >>> 2) & 4294967295;
         c = b;
         b = f
      }
      a.Zc[0] = a.Zc[0] + b & 4294967295;
      a.Zc[1] = a.Zc[1] + c & 4294967295;
      a.Zc[2] = a.Zc[2] + h & 4294967295;
      a.Zc[3] = a.Zc[3] + k & 4294967295;
      a.Zc[4] = a.Zc[4] + l & 4294967295
   };
   Ch.prototype.update = function (a, b) {
      if (null != a) {
         void 0 === b && (b = a.length);
         for (var c = b - this.blockSize, d = 0, e = this.hF, f = this.xr; d < b;) {
            if (0 == f)
               for (; d <= c;) Dh(this, a, d), d += this.blockSize;
            if ("string" === typeof a)
               for (; d < b;) {
                  if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.blockSize) {
                     Dh(this, e);
                     f = 0;
                     break
                  }
               } else
                  for (; d < b;)
                     if (e[f] = a[d], ++f, ++d, f == this.blockSize) {
                        Dh(this, e);
                        f = 0;
                        break
                     }
         }
         this.xr = f;
         this.KD += b
      }
   };
   Ch.prototype.digest = function () {
      var a = [],
         b = 8 * this.KD;
      56 > this.xr ? this.update(this.aC, 56 - this.xr) : this.update(this.aC, this.blockSize - (this.xr - 56));
      for (var c = this.blockSize - 1; 56 <= c; c--) this.hF[c] = b & 255, b /= 256;
      Dh(this, this.hF);
      for (c = b = 0; 5 > c; c++)
         for (var d = 24; 0 <= d; d -= 8) a[b] = this.Zc[c] >> d & 255, ++b;
      return a
   };
   _.Eh = function () {
      this.RM = new Ch
   };
   _.g = _.Eh.prototype;
   _.g.reset = function () {
      this.RM.reset()
   };
   _.g.P0 = function (a) {
      this.RM.update(a)
   };
   _.g.cR = function () {
      return this.RM.digest()
   };
   _.g.ux = function (a) {
      a = unescape(encodeURIComponent(a));
      for (var b = [], c = 0, d = a.length; c < d; ++c) b.push(a.charCodeAt(c));
      this.P0(b)
   };
   _.g.cj = function () {
      for (var a = this.cR(), b = "", c = 0; c < a.length; c++) b += "0123456789ABCDEF".charAt(Math.floor(a[c] / 16)) + "0123456789ABCDEF".charAt(a[c] % 16);
      return b
   };
   _.Vi = function (a) {
      var b = window.___jsl = window.___jsl || {};
      b.cfg = !a && b.cfg || {};
      return b.cfg
   };
   _.Wi = function (a) {
      var b = _.Vi();
      if (!a) return b;
      a = a.split("/");
      for (var c = 0, d = a.length; b && "object" === typeof b && c < d; ++c) b = b[a[c]];
      return c === a.length && void 0 !== b ? b : void 0
   };
   _.Xi = function (a, b) {
      b = _.Xe(b);
      void 0 !== b && (a.href = b)
   };
   _.Yi = function (a, b) {
      a.src = _.jc(b).toString()
   };
   var Zi;
   Zi = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/u\/(\d)\//;
   _.$i = function (a) {
      var b = _.Wi("googleapis.config/sessionIndex");
      "string" === typeof b && 254 < b.length && (b = null);
      null == b && (b = window.__X_GOOG_AUTHUSER);
      "string" === typeof b && 254 < b.length && (b = null);
      if (null == b) {
         var c = window.google;
         c && (b = c.authuser)
      }
      "string" === typeof b && 254 < b.length && (b = null);
      null == b && (a = a || window.location.href, b = _.lf(a, "authuser") || null, null == b && (b = (b = a.match(Zi)) ? b[1] : null));
      if (null == b) return null;
      b = String(b);
      254 < b.length && (b = null);
      return b
   };
   var rj, qj, xj, yj, sj, vj, tj, zj, uj;
   _.wj = function () {
      if (qj) {
         var a = new _.af.Uint32Array(1);
         rj.getRandomValues(a);
         a = Number("0." + a[0])
      } else a = sj, a += parseInt(tj.substr(0, 20), 16), tj = uj(tj), a /= vj + Math.pow(16, 20);
      return a
   };
   rj = _.af.crypto;
   qj = !1;
   xj = 0;
   yj = 0;
   sj = 1;
   vj = 0;
   tj = "";
   zj = function (a) {
      a = a || _.af.event;
      var b = a.screenX + a.clientX << 16;
      b += a.screenY + a.clientY;
      b *= (new Date).getTime() % 1E6;
      sj = sj * b % vj;
      0 < xj && ++yj == xj && _.pf(_.af, "mousemove", zj, "remove", "de")
   };
   uj = function (a) {
      var b = new _.Eh;
      b.ux(a);
      return b.cj()
   };
   qj = !!rj && "function" == typeof rj.getRandomValues;
   qj || (vj = 1E6 * (screen.width * screen.width + screen.height), tj = uj(_.cf.cookie + "|" + _.cf.location + "|" + (new Date).getTime() + "|" + Math.random()), xj = _.Wi("random/maxObserveMousemove") || 0, 0 != xj && _.qf(_.af, "mousemove", zj));
   var qm, rm, sm, tm, um, vm, wm, xm, ym, zm, Am, Bm, Fm, Gm, Hm, Im, Jm, Km, Lm, Mm;
   _.pm = function (a, b) {
      if (!a) throw Error(b || "");
   };
   qm = /&/g;
   rm = /</g;
   sm = />/g;
   tm = /"/g;
   um = /'/g;
   vm = function (a) {
      return String(a).replace(qm, "&").replace(rm, "<").replace(sm, ">").replace(tm, """).replace(um, "'")
   };
   wm = /[\ud800-\udbff][\udc00-\udfff]|[^!-~]/g;
   xm = /%([a-f]|[0-9a-fA-F][a-f])/g;
   ym = /^(https?|ftp|file|chrome-extension):$/i;
   zm = function (a) {
      a = String(a);
      a = a.replace(wm, function (e) {
         try {
            return encodeURIComponent(e)
         } catch (f) {
            return encodeURIComponent(e.replace(/^[^%]+$/g, "\ufffd"))
         }
      }).replace(_.nf, function (e) {
         return e.replace(/%/g, "%25")
      }).replace(xm, function (e) {
         return e.toUpperCase()
      });
      a = a.match(_.mf) || [];
      var b = _.gf(),
         c = function (e) {
            return e.replace(/\\/g, "%5C").replace(/\^/g, "%5E").replace(/`/g, "%60").replace(/\{/g, "%7B").replace(/\|/g, "%7C").replace(/\}/g, "%7D")
         },
         d = !!(a[1] || "").match(ym);
      b.At = c((a[1] || "") + (a[2] || "") + (a[3] ||
         (a[2] && d ? "/" : "")));
      d = function (e) {
         return c(e.replace(/\?/g, "%3F").replace(/#/g, "%23"))
      };
      b.query = a[5] ? [d(a[5])] : [];
      b.ij = a[7] ? [d(a[7])] : [];
      return b
   };
   Am = function (a) {
      return a.At + (0 < a.query.length ? "?" + a.query.join("&") : "") + (0 < a.ij.length ? "#" + a.ij.join("&") : "")
   };
   Bm = function (a, b) {
      var c = [];
      if (a)
         for (var d in a)
            if (_.hf(a, d) && null != a[d]) {
               var e = b ? b(a[d]) : a[d];
               c.push(encodeURIComponent(d) + "=" + encodeURIComponent(e))
            } return c
   };
   _.Cm = function (a, b, c, d) {
      a = zm(a);
      a.query.push.apply(a.query, Bm(b, d));
      a.ij.push.apply(a.ij, Bm(c, d));
      return Am(a)
   };
   _.Dm = function (a, b) {
      var c = zm(b);
      b = c.At;
      c.query.length && (b += "?" + c.query.join(""));
      c.ij.length && (b += "#" + c.ij.join(""));
      var d = "";
      2E3 < b.length && (c = b, b = b.substr(0, 2E3), b = b.replace(_.of, ""), d = c.substr(b.length));
      var e = a.createElement("div");
      a = a.createElement("a");
      c = zm(b);
      b = c.At;
      c.query.length && (b += "?" + c.query.join(""));
      c.ij.length && (b += "#" + c.ij.join(""));
      _.Xi(a, _.Fc(_.$e(b)));
      e.appendChild(a);
      _.Ye(e, _.jd(e.innerHTML));
      b = String(e.firstChild.href);
      e.parentNode && e.parentNode.removeChild(e);
      c = zm(b + d);
      b = c.At;
      c.query.length && (b += "?" + c.query.join(""));
      c.ij.length && (b += "#" + c.ij.join(""));
      return b
   };
   _.Em = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
   Gm = function (a) {
      for (; a.firstChild;) a.removeChild(a.firstChild)
   };
   Hm = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/b\/(\d{10,21})\//;
   Im = function () {
      var a = _.Wi("googleapis.config/sessionDelegate");
      "string" === typeof a && 21 < a.length && (a = null);
      null == a && (a = (a = window.location.href.match(Hm)) ? a[1] : null);
      if (null == a) return null;
      a = String(a);
      21 < a.length && (a = null);
      return a
   };
   Jm = function () {
      var a = _.rf.onl;
      if (!a) {
         a = _.gf();
         _.rf.onl = a;
         var b = _.gf();
         a.e = function (c) {
            var d = b[c];
            d && (delete b[c], d())
         };
         a.a = function (c, d) {
            b[c] = d
         };
         a.r = function (c) {
            delete b[c]
         }
      }
      return a
   };
   Km = function (a, b) {
      b = b.onload;
      return "function" === typeof b ? (Jm().a(a, b), b) : null
   };
   Lm = function (a) {
      _.pm(/^\w+$/.test(a), "Unsupported id - " + a);
      return 'onload="window.___jsl.onl.e("' + a + '")"'
   };
   Mm = function (a) {
      Jm().r(a)
   };
   var Om, Pm, Tm;
   _.Nm = {
      allowtransparency: "true",
      frameborder: "0",
      hspace: "0",
      marginheight: "0",
      marginwidth: "0",
      scrolling: "no",
      style: "",
      tabindex: "0",
      vspace: "0",
      width: "100%"
   };
   Om = {
      allowtransparency: !0,
      onload: !0
   };
   Pm = 0;
   _.Qm = function (a, b) {
      var c = 0;
      do var d = b.id || ["I", Pm++, "_", (new Date).getTime()].join(""); while (a.getElementById(d) && 5 > ++c);
      _.pm(5 > c, "Error creating iframe id");
      return d
   };
   _.Rm = function (a, b) {
      return a ? b + "/" + a : ""
   };
   _.Sm = function (a, b, c, d) {
      var e = {},
         f = {};
      a.documentMode && 9 > a.documentMode && (e.hostiemode = a.documentMode);
      _.jf(d.queryParams || {}, e);
      _.jf(d.fragmentParams || {}, f);
      var h = d.pfname;
      var k = _.gf();
      _.Wi("iframes/dropLegacyIdParam") || (k.id = c);
      k._gfid = c;
      k.parent = a.location.protocol + "//" + a.location.host;
      c = _.lf(a.location.href, "parent");
      h = h || "";
      !h && c && (h = _.lf(a.location.href, "_gfid", "") || _.lf(a.location.href, "id", ""), h = _.Rm(h, _.lf(a.location.href, "pfname", "")));
      h || (c = _.Hg(_.lf(a.location.href, "jcp", ""))) && "object" ==
         typeof c && (h = _.Rm(c.id, c.pfname));
      k.pfname = h;
      d.connectWithJsonParam && (h = {}, h.jcp = _.Ig(k), k = h);
      h = _.lf(b, "rpctoken") || e.rpctoken || f.rpctoken;
      h || (h = d.rpctoken || String(Math.round(1E8 * _.wj())), k.rpctoken = h);
      d.rpctoken = h;
      _.jf(k, d.connectWithQueryParams ? e : f);
      k = a.location.href;
      a = _.gf();
      (h = _.lf(k, "_bsh", _.rf.bsh)) && (a._bsh = h);
      (k = _.rf.dpo ? _.rf.h : _.lf(k, "jsh", _.rf.h)) && (a.jsh = k);
      d.hintInFragment ? _.jf(a, f) : _.jf(a, e);
      return _.Cm(b, e, f, d.paramsSerializer)
   };
   Tm = function (a) {
      _.pm(!a || _.Em.test(a), "Illegal url for new iframe - " + a)
   };
   _.Um = function (a, b, c, d, e) {
      Tm(c.src);
      var f, h = Km(d, c),
         k = h ? Lm(d) : "";
      try {
         document.all && (f = a.createElement('<iframe frameborder="' + vm(String(c.frameborder)) + '" scrolling="' + vm(String(c.scrolling)) + '" ' + k + ' name="' + vm(String(c.name)) + '"/>'))
      } catch (m) {} finally {
         f || (f = _.ae(a).va("IFRAME"), h && (f.onload = function () {
            f.onload = null;
            h.call(this)
         }, Mm(d)))
      }
      f.setAttribute("ng-non-bindable", "");
      for (var l in c) a = c[l], "style" === l && "object" === typeof a ? _.jf(a, f.style) : Om[l] || f.setAttribute(l, String(a));
      (l = e && e.beforeNode ||
         null) || e && e.dontclear || Gm(b);
      b.insertBefore(f, l);
      f = l ? l.previousSibling : b.lastChild;
      c.allowtransparency && (f.allowTransparency = !0);
      return f
   };
   var Vm, Ym;
   Vm = /^:[\w]+$/;
   _.Wm = /:([a-zA-Z_]+):/g;
   _.Xm = function () {
      var a = _.$i() || "0",
         b = Im();
      var c = _.$i() || a;
      var d = Im(),
         e = "";
      c && (e += "u/" + encodeURIComponent(String(c)) + "/");
      d && (e += "b/" + encodeURIComponent(String(d)) + "/");
      c = e || null;
      (e = (d = !1 === _.Wi("isLoggedIn")) ? "_/im/" : "") && (c = "");
      var f = _.Wi("iframes/:socialhost:"),
         h = _.Wi("iframes/:im_socialhost:");
      return Fm = {
         socialhost: f,
         ctx_socialhost: d ? h : f,
         session_index: a,
         session_delegate: b,
         session_prefix: c,
         im_prefix: e
      }
   };
   Ym = function (a, b) {
      return _.Xm()[b] || ""
   };
   _.Zm = function (a) {
      return _.Dm(_.cf, a.replace(_.Wm, Ym))
   };
   _.$m = function (a) {
      var b = a;
      Vm.test(a) && (b = _.Wi("iframes/" + b.substring(1) + "/url"), _.pm(!!b, "Unknown iframe url config for - " + a));
      return _.Zm(b)
   };
   _.an = function (a, b, c) {
      c = c || {};
      var d = c.attributes || {};
      _.pm(!(c.allowPost || c.forcePost) || !d.onload, "onload is not supported by post iframe (allowPost or forcePost)");
      a = _.$m(a);
      d = b.ownerDocument || _.cf;
      var e = _.Qm(d, c);
      a = _.Sm(d, a, e, c);
      var f = c,
         h = _.gf();
      _.jf(_.Nm, h);
      _.jf(f.attributes, h);
      h.name = h.id = e;
      h.src = a;
      c.eurl = a;
      c = (f = c) || {};
      var k = !!c.allowPost;
      if (c.forcePost || k && 2E3 < a.length) {
         c = zm(a);
         h.src = "";
         f.dropDataPostorigin || (h["data-postorigin"] = a);
         a = _.Um(d, b, h, e);
         if (-1 != navigator.userAgent.indexOf("WebKit")) {
            var l =
               a.contentWindow.document;
            l.open();
            h = l.createElement("div");
            k = {};
            var m = e + "_inner";
            k.name = m;
            k.src = "";
            k.style = "display:none";
            _.Um(d, h, k, m, f)
         }
         h = (f = c.query[0]) ? f.split("&") : [];
         f = [];
         for (k = 0; k < h.length; k++) m = h[k].split("=", 2), f.push([decodeURIComponent(m[0]), decodeURIComponent(m[1])]);
         c.query = [];
         h = Am(c);
         _.pm(_.Em.test(h), "Invalid URL: " + h);
         c = d.createElement("form");
         c.method = "POST";
         c.target = e;
         c.style.display = "none";
         e = _.Xe(h);
         void 0 !== e && (c.action = e);
         for (e = 0; e < f.length; e++) h = d.createElement("input"), h.type =
            "hidden", h.name = f[e][0], h.value = f[e][1], c.appendChild(h);
         b.appendChild(c);
         c.submit();
         c.parentNode.removeChild(c);
         l && l.close();
         b = a
      } else b = _.Um(d, b, h, e, f);
      return b
   };
   var Lg = function () {
      this.Rg = window.console
   };
   Lg.prototype.log = function (a) {
      this.Rg && this.Rg.log && this.Rg.log(a)
   };
   Lg.prototype.error = function (a) {
      this.Rg && (this.Rg.error ? this.Rg.error(a) : this.Rg.log && this.Rg.log(a))
   };
   Lg.prototype.warn = function (a) {
      this.Rg && (this.Rg.warn ? this.Rg.warn(a) : this.Rg.log && this.Rg.log(a))
   };
   Lg.prototype.debug = function () {};
   _.Mg = new Lg;
   _.zh = function (a) {
      if (!a) return "";
      if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
      a.startsWith("blob:") && (a = a.substring(5));
      a = a.split("#")[0].split("?")[0];
      a = a.toLowerCase();
      0 == a.indexOf("//") && (a = window.location.protocol + a);
      /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
      var b = a.substring(a.indexOf("://") + 3),
         c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
      c = a.substring(0, a.indexOf("://"));
      if (!c) throw Error("A`" + a);
      if ("http" !== c && "https" !== c && "chrome-extension" !== c && "moz-extension" !==
         c && "file" !== c && "android-app" !== c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !== c && "app" !== c && "devtools" !== c) throw Error("B`" + c);
      a = "";
      var d = b.indexOf(":");
      if (-1 != d) {
         var e = b.substring(d + 1);
         b = b.substring(0, d);
         if ("http" === c && "80" !== e || "https" === c && "443" !== e) a = ":" + e
      }
      return c + "://" + b + a
   };
   _.hi = function (a) {
      _.r.setTimeout(function () {
         throw a;
      }, 0)
   };
   _.ii = function (a) {
      return _.Cb ? _.Db ? _.Db.brands.some(function (b) {
         return (b = b.brand) && _.yb(b, a)
      }) : !1 : !1
   };
   _.ji = function (a) {
      for (var b = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
      return c
   };
   _.ki = function () {
      return _.Eb() ? _.ii("Microsoft Edge") : _.Ab("Edg/")
   };
   _.li = function () {
      return _.Ab("Firefox") || _.Ab("FxiOS")
   };
   _.mi = function () {
      return _.Eb() ? _.ii("Chromium") : (_.Ab("Chrome") || _.Ab("CriOS")) && !_.Ib() || _.Ab("Silk")
   };
   _.ni = function () {
      return _.Ab("Safari") && !(_.mi() || (_.Eb() ? 0 : _.Ab("Coast")) || _.Fb() || _.Ib() || _.ki() || (_.Eb() ? _.ii("Opera") : _.Ab("OPR")) || _.li() || _.Ab("Silk") || _.Ab("Android"))
   };
   _.oi = function () {
      return _.Ab("Android") && !(_.mi() || _.li() || _.Fb() || _.Ab("Silk"))
   };
   _.pi = function (a) {
      var b = {};
      a.forEach(function (c) {
         b[c[0]] = c[1]
      });
      return function (c) {
         return b[c.find(function (d) {
            return d in b
         })] || ""
      }
   };
   _.qi = function (a) {
      var b = /rv: *([\d\.]*)/.exec(a);
      if (b && b[1]) return b[1];
      b = "";
      var c = /MSIE +([\d\.]+)/.exec(a);
      if (c && c[1])
         if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
            if (a && a[1]) switch (a[1]) {
               case "4.0":
                  b = "8.0";
                  break;
               case "5.0":
                  b = "9.0";
                  break;
               case "6.0":
                  b = "10.0";
                  break;
               case "7.0":
                  b = "11.0"
            } else b = "7.0";
            else b = c[1];
      return b
   };
   _.ri = _.li();
   _.si = _.Mb() || _.Ab("iPod");
   _.ti = _.Ab("iPad");
   _.ui = _.oi();
   _.vi = _.mi();
   _.wi = _.ni() && !_.Nb();
   _.Mj = [];
   _.Nj = [];
   _.Oj = !1;
   _.Pj = function (a) {
      _.Mj[_.Mj.length] = a;
      if (_.Oj)
         for (var b = 0; b < _.Nj.length; b++) a((0, _.D)(_.Nj[b].wrap, _.Nj[b]))
   };
   _.zk = function (a, b, c, d) {
      for (var e = 0, f = a.length, h; e < f;) {
         var k = e + (f - e >>> 1);
         var l = c ? b.call(void 0, a[k], k, a) : b(d, a[k]);
         0 < l ? e = k + 1 : (f = k, h = !l)
      }
      return h ? e : -e - 1
   };
   _.Ak = function (a, b) {
      var c = {},
         d;
      for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
      return c
   };
   _.Bk = function (a) {
      return a.raw = a
   };
   var Ck = function (a) {
      this.T = a
   };
   _.g = Ck.prototype;
   _.g.value = function () {
      return this.T
   };
   _.g.Te = function (a) {
      this.T.width = a;
      return this
   };
   _.g.Xb = function () {
      return this.T.width
   };
   _.g.ie = function (a) {
      this.T.height = a;
      return this
   };
   _.g.Vc = function () {
      return this.T.height
   };
   _.g.Ah = function (a) {
      this.T.style = a;
      return this
   };
   _.g.getStyle = function () {
      return this.T.style
   };
   _.Dk = function (a) {
      this.T = a || {}
   };
   _.g = _.Dk.prototype;
   _.g.value = function () {
      return this.T
   };
   _.g.setUrl = function (a) {
      this.T.url = a;
      return this
   };
   _.g.getUrl = function () {
      return this.T.url
   };
   _.g.Ah = function (a) {
      this.T.style = a;
      return this
   };
   _.g.getStyle = function () {
      return this.T.style
   };
   _.g.Se = function (a) {
      this.T.id = a;
      return this
   };
   _.g.getId = function () {
      return this.T.id
   };
   _.g.zn = function (a) {
      this.T.rpctoken = a;
      return this
   };
   _.Ek = function (a, b) {
      a.T.messageHandlers = b;
      return a
   };
   _.Fk = function (a, b) {
      a.T.messageHandlersFilter = b;
      return a
   };
   _.g = _.Dk.prototype;
   _.g.zs = _.ea(4);
   _.g.getContext = function () {
      return this.T.context
   };
   _.g.yd = function () {
      return this.T.openerIframe
   };
   _.g.xo = function () {
      this.T.attributes = this.T.attributes || {};
      return new Ck(this.T.attributes)
   };
   _.g.Ek = function () {
      return this.T.controller
   };
   var Ok;
   _.Gk = function (a, b) {
      for (var c = 1; c < arguments.length; c++) {
         var d = arguments[c];
         if (_.Wb(d)) {
            var e = a.length || 0,
               f = d.length || 0;
            a.length = e + f;
            for (var h = 0; h < f; h++) a[e + h] = d[h]
         } else a.push(d)
      }
   };
   _.Hk = function (a, b) {
      b = b || a;
      for (var c = 0, d = 0, e = {}; d < a.length;) {
         var f = a[d++],
            h = _.Rb(f) ? "o" + _.Yb(f) : (typeof f).charAt(0) + f;
         Object.prototype.hasOwnProperty.call(e, h) || (e[h] = !0, b[c++] = f)
      }
      b.length = c
   };
   _.Ik = function (a, b) {
      for (var c in a)
         if (!(c in b) || a[c] !== b[c]) return !1;
      for (var d in b)
         if (!(d in a)) return !1;
      return !0
   };
   _.Jk = function (a) {
      var b = {},
         c;
      for (c in a) b[c] = a[c];
      return b
   };
   _.Kk = function () {};
   _.Lk = function (a) {
      return a
   };
   _.Mk = function (a) {
      a.prototype.$goog_Thenable = !0
   };
   _.Nk = function (a) {
      if (!a) return !1;
      try {
         return !!a.$goog_Thenable
      } catch (b) {
         return !1
      }
   };
   Ok = function (a, b) {
      this.X6 = a;
      this.Xda = b;
      this.MB = 0;
      this.CA = null
   };
   Ok.prototype.get = function () {
      if (0 < this.MB) {
         this.MB--;
         var a = this.CA;
         this.CA = a.next;
         a.next = null
      } else a = this.X6();
      return a
   };
   Ok.prototype.put = function (a) {
      this.Xda(a);
      100 > this.MB && (this.MB++, a.next = this.CA, this.CA = a)
   };
   var Qk, Rk, Pk;
   _.Sk = function (a) {
      a = Pk(a);
      "function" !== typeof _.r.setImmediate || _.r.Window && _.r.Window.prototype && !_.Ib() && _.r.Window.prototype.setImmediate == _.r.setImmediate ? (Qk || (Qk = Rk()), Qk(a)) : _.r.setImmediate(a)
   };
   Rk = function () {
      var a = _.r.MessageChannel;
      "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !_.Ab("Presto") && (a = function () {
         var e = _.oe("IFRAME");
         e.style.display = "none";
         document.documentElement.appendChild(e);
         var f = e.contentWindow;
         e = f.document;
         e.open();
         e.close();
         var h = "callImmediate" + Math.random(),
            k = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
         e = (0, _.D)(function (l) {
            if (("*" == k || l.origin == k) && l.data == h) this.port1.onmessage()
         }, this);
         f.addEventListener("message", e, !1);
         this.port1 = {};
         this.port2 = {
            postMessage: function () {
               f.postMessage(h, k)
            }
         }
      });
      if ("undefined" !== typeof a && !_.Hb()) {
         var b = new a,
            c = {},
            d = c;
         b.port1.onmessage = function () {
            if (void 0 !== c.next) {
               c = c.next;
               var e = c.cb;
               c.cb = null;
               e()
            }
         };
         return function (e) {
            d.next = {
               cb: e
            };
            d = d.next;
            b.port2.postMessage(0)
         }
      }
      return function (e) {
         _.r.setTimeout(e, 0)
      }
   };
   Pk = _.Lk;
   _.Pj(function (a) {
      Pk = a
   });
   var Tk = function () {
      this.ZD = this.bt = null
   };
   Tk.prototype.add = function (a, b) {
      var c = Uk.get();
      c.set(a, b);
      this.ZD ? this.ZD.next = c : this.bt = c;
      this.ZD = c
   };
   Tk.prototype.remove = function () {
      var a = null;
      this.bt && (a = this.bt, this.bt = this.bt.next, this.bt || (this.ZD = null), a.next = null);
      return a
   };
   var Uk = new Ok(function () {
         return new Vk
      }, function (a) {
         return a.reset()
      }),
      Vk = function () {
         this.next = this.scope = this.ei = null
      };
   Vk.prototype.set = function (a, b) {
      this.ei = a;
      this.scope = b;
      this.next = null
   };
   Vk.prototype.reset = function () {
      this.next = this.scope = this.ei = null
   };
   var Wk, Xk, Yk, Zk, al;
   Xk = !1;
   Yk = new Tk;
   _.$k = function (a, b) {
      Wk || Zk();
      Xk || (Wk(), Xk = !0);
      Yk.add(a, b)
   };
   Zk = function () {
      if (_.r.Promise && _.r.Promise.resolve) {
         var a = _.r.Promise.resolve(void 0);
         Wk = function () {
            a.then(al)
         }
      } else Wk = function () {
         _.Sk(al)
      }
   };
   al = function () {
      for (var a; a = Yk.remove();) {
         try {
            a.ei.call(a.scope)
         } catch (b) {
            _.hi(b)
         }
         Uk.put(a)
      }
      Xk = !1
   };
   var dl, el, fl, tl, xl, vl, yl;
   _.cl = function (a, b) {
      this.Fa = 0;
      this.Cf = void 0;
      this.zq = this.Sl = this.yb = null;
      this.rA = this.kG = !1;
      if (a != _.Kk) try {
         var c = this;
         a.call(b, function (d) {
            bl(c, 2, d)
         }, function (d) {
            bl(c, 3, d)
         })
      } catch (d) {
         bl(this, 3, d)
      }
   };
   dl = function () {
      this.next = this.context = this.Vr = this.Kv = this.Mn = null;
      this.vt = !1
   };
   dl.prototype.reset = function () {
      this.context = this.Vr = this.Kv = this.Mn = null;
      this.vt = !1
   };
   el = new Ok(function () {
      return new dl
   }, function (a) {
      a.reset()
   });
   fl = function (a, b, c) {
      var d = el.get();
      d.Kv = a;
      d.Vr = b;
      d.context = c;
      return d
   };
   _.gl = function (a) {
      if (a instanceof _.cl) return a;
      var b = new _.cl(_.Kk);
      bl(b, 2, a);
      return b
   };
   _.hl = function (a) {
      return new _.cl(function (b, c) {
         c(a)
      })
   };
   _.jl = function (a, b, c) {
      il(a, b, c, null) || _.$k(_.$a(b, a))
   };
   _.kl = function (a) {
      return new _.cl(function (b, c) {
         var d = a.length,
            e = [];
         if (d)
            for (var f = function (m, n) {
                  d--;
                  e[m] = n;
                  0 == d && b(e)
               }, h = function (m) {
                  c(m)
               }, k = 0, l; k < a.length; k++) l = a[k], _.jl(l, _.$a(f, k), h);
         else b(e)
      })
   };
   _.ml = function () {
      var a, b, c = new _.cl(function (d, e) {
         a = d;
         b = e
      });
      return new ll(c, a, b)
   };
   _.cl.prototype.then = function (a, b, c) {
      return nl(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
   };
   _.Mk(_.cl);
   _.pl = function (a, b) {
      b = fl(b, b);
      b.vt = !0;
      ol(a, b);
      return a
   };
   _.cl.prototype.Yw = function (a, b) {
      return nl(this, null, a, b)
   };
   _.cl.prototype.catch = _.cl.prototype.Yw;
   _.cl.prototype.cancel = function (a) {
      if (0 == this.Fa) {
         var b = new _.ql(a);
         _.$k(function () {
            rl(this, b)
         }, this)
      }
   };
   var rl = function (a, b) {
         if (0 == a.Fa)
            if (a.yb) {
               var c = a.yb;
               if (c.Sl) {
                  for (var d = 0, e = null, f = null, h = c.Sl; h && (h.vt || (d++, h.Mn == a && (e = h), !(e && 1 < d))); h = h.next) e || (f = h);
                  e && (0 == c.Fa && 1 == d ? rl(c, b) : (f ? (d = f, d.next == c.zq && (c.zq = d), d.next = d.next.next) : sl(c), tl(c, e, 3, b)))
               }
               a.yb = null
            } else bl(a, 3, b)
      },
      ol = function (a, b) {
         a.Sl || 2 != a.Fa && 3 != a.Fa || ul(a);
         a.zq ? a.zq.next = b : a.Sl = b;
         a.zq = b
      },
      nl = function (a, b, c, d) {
         var e = fl(null, null, null);
         e.Mn = new _.cl(function (f, h) {
            e.Kv = b ? function (k) {
               try {
                  var l = b.call(d, k);
                  f(l)
               } catch (m) {
                  h(m)
               }
            } : f;
            e.Vr = c ?
               function (k) {
                  try {
                     var l = c.call(d, k);
                     void 0 === l && k instanceof _.ql ? h(k) : f(l)
                  } catch (m) {
                     h(m)
                  }
               } : h
         });
         e.Mn.yb = a;
         ol(a, e);
         return e.Mn
      };
   _.cl.prototype.rga = function (a) {
      this.Fa = 0;
      bl(this, 2, a)
   };
   _.cl.prototype.sga = function (a) {
      this.Fa = 0;
      bl(this, 3, a)
   };
   var bl = function (a, b, c) {
         0 == a.Fa && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.Fa = 1, il(c, a.rga, a.sga, a) || (a.Cf = c, a.Fa = b, a.yb = null, ul(a), 3 != b || c instanceof _.ql || vl(a, c)))
      },
      il = function (a, b, c, d) {
         if (a instanceof _.cl) return ol(a, fl(b || _.Kk, c || null, d)), !0;
         if (_.Nk(a)) return a.then(b, c, d), !0;
         if (_.Rb(a)) try {
            var e = a.then;
            if ("function" === typeof e) return wl(a, e, b, c, d), !0
         } catch (f) {
            return c.call(d, f), !0
         }
         return !1
      },
      wl = function (a, b, c, d, e) {
         var f = !1,
            h = function (l) {
               f || (f = !0, c.call(e, l))
            },
            k = function (l) {
               f ||
                  (f = !0, d.call(e, l))
            };
         try {
            b.call(a, h, k)
         } catch (l) {
            k(l)
         }
      },
      ul = function (a) {
         a.kG || (a.kG = !0, _.$k(a.oz, a))
      },
      sl = function (a) {
         var b = null;
         a.Sl && (b = a.Sl, a.Sl = b.next, b.next = null);
         a.Sl || (a.zq = null);
         return b
      };
   _.cl.prototype.oz = function () {
      for (var a; a = sl(this);) tl(this, a, this.Fa, this.Cf);
      this.kG = !1
   };
   tl = function (a, b, c, d) {
      if (3 == c && b.Vr && !b.vt)
         for (; a && a.rA; a = a.yb) a.rA = !1;
      if (b.Mn) b.Mn.yb = null, xl(b, c, d);
      else try {
         b.vt ? b.Kv.call(b.context) : xl(b, c, d)
      } catch (e) {
         yl.call(null, e)
      }
      el.put(b)
   };
   xl = function (a, b, c) {
      2 == b ? a.Kv.call(a.context, c) : a.Vr && a.Vr.call(a.context, c)
   };
   vl = function (a, b) {
      a.rA = !0;
      _.$k(function () {
         a.rA && yl.call(null, b)
      })
   };
   yl = _.hi;
   _.ql = function (a) {
      _.ib.call(this, a);
      this.qK = !1
   };
   _.ab(_.ql, _.ib);
   _.ql.prototype.name = "cancel";
   var ll = function (a, b, c) {
      this.promise = a;
      this.resolve = b;
      this.reject = c
   };
   _.zl = function (a) {
      return new _.cl(a)
   };
   var Ml = function () {
      this.nx = {
         OY: Al ? "../" + Al : null,
         bz: Bl,
         OT: Dl,
         sqa: El,
         Fo: Fl,
         nra: Gl
      };
      this.og = _.af;
      this.iY = this.c7;
      this.T7 = /MSIE\s*[0-8](\D|$)/.test(window.navigator.userAgent);
      if (this.nx.OY) {
         this.og = this.nx.OT(this.og, this.nx.OY);
         var a = this.og.document,
            b = a.createElement("script");
         b.setAttribute("type", "text/javascript");
         b.text = "window.doPostMsg=function(w,s,o) {window.setTimeout(function(){w.postMessage(s,o);},0);};";
         a.body.appendChild(b);
         this.iY = this.og.doPostMsg
      }
      this.SM = {};
      this.vN = {};
      a = (0, _.D)(this.GH,
         this);
      _.qf(this.og, "message", a);
      _.ff(_.rf, "RPMQ", []).push(a);
      this.og != this.og.parent && Ll(this, this.og.parent, this.UI(this.og.name), "*")
   };
   Ml.prototype.UI = function (a) {
      return '{"h":"' + escape(a) + '"}'
   };
   var Nl = function (a) {
         var b = null;
         0 === a.indexOf('{"h":"') && a.indexOf('"}') === a.length - 2 && (b = unescape(a.substring(6, a.length - 2)));
         return b
      },
      Ol = function (a) {
         if (!/^\s*{/.test(a)) return !1;
         a = _.Hg(a);
         return null !== a && "object" === typeof a && !!a.g
      };
   Ml.prototype.GH = function (a) {
      var b = String(a.data);
      _.Mg.debug("gapix.rpc.receive(" + El + "): " + (!b || 512 >= b.length ? b : b.substr(0, 512) + "... (" + b.length + " bytes)"));
      var c = 0 !== b.indexOf("!_");
      c || (b = b.substring(2));
      var d = Ol(b);
      if (!c && !d) {
         if (!d && (c = Nl(b))) {
            if (this.SM[c]) this.SM[c]();
            else this.vN[c] = 1;
            return
         }
         var e = a.origin,
            f = this.nx.bz;
         this.T7 ? _.af.setTimeout(function () {
            f(b, e)
         }, 0) : f(b, e)
      }
   };
   Ml.prototype.Pb = function (a, b) {
      ".." === a || this.vN[a] ? (b(), delete this.vN[a]) : this.SM[a] = b
   };
   var Ll = function (a, b, c, d) {
      var e = Ol(c) ? "" : "!_";
      _.Mg.debug("gapix.rpc.send(" + El + "): " + (!c || 512 >= c.length ? c : c.substr(0, 512) + "... (" + c.length + " bytes)"));
      a.iY(b, e + c, d)
   };
   Ml.prototype.c7 = function (a, b, c) {
      a.postMessage(b, c)
   };
   Ml.prototype.send = function (a, b, c) {
      (a = this.nx.OT(this.og, a)) && !a.closed && Ll(this, a, b, c)
   };
   var Pl, Ql, Rl, Sl, Tl, Ul, Vl, Al, El, Wl, Xl, Yl, Dl, Fl, $l, am, fm, gm, im, Gl, km, jm, bm, cm, lm, Bl, mm, nm;
   Pl = 0;
   Ql = [];
   Rl = {};
   Sl = {};
   Tl = _.af.location.href;
   Ul = _.lf(Tl, "rpctoken");
   Vl = _.lf(Tl, "parent") || _.cf.referrer;
   Al = _.lf(Tl, "rly");
   El = Al || (_.af !== _.af.top || _.af.opener) && _.af.name || "..";
   Wl = null;
   Xl = {};
   Yl = function () {};
   _.Zl = {
      send: Yl,
      Pb: Yl,
      UI: Yl
   };
   Dl = function (a, b) {
      "/" == b.charAt(0) && (b = b.substring(1), a = _.af.top);
      if (0 === b.length) return a;
      for (b = b.split("/"); b.length;) {
         var c = b.shift();
         "{" == c.charAt(0) && "}" == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1));
         if (".." === c) a = a == a.parent ? a.opener : a.parent;
         else if (".." !== c && a.frames[c]) {
            if (a = a.frames[c], !("postMessage" in a)) throw Error("N");
         } else return null
      }
      return a
   };
   Fl = function (a) {
      return (a = Rl[a]) && a.token
   };
   $l = function (a) {
      if (a.f in {}) return !1;
      var b = a.t,
         c = Rl[a.r];
      a = a.origin;
      return c && (c.token === b || !c.token && !b) && (a === c.origin || "*" === c.origin)
   };
   am = function (a) {
      var b = a.id.split("/"),
         c = b[b.length - 1],
         d = a.origin;
      return function (e) {
         var f = e.origin;
         return e.f == c && (d == f || "*" == d)
      }
   };
   _.dm = function (a, b, c) {
      a = bm(a);
      Sl[a.name] = {
         ei: b,
         yv: a.yv,
         Ys: c || $l
      };
      cm()
   };
   _.em = function (a) {
      delete Sl[bm(a).name]
   };
   fm = {};
   gm = function (a, b) {
      (a = fm["_" + a]) && a[1](this) && a[0].call(this, b)
   };
   im = function (a) {
      var b = a.c;
      if (!b) return Yl;
      var c = a.r,
         d = a.g ? "legacy__" : "";
      return function () {
         var e = [].slice.call(arguments, 0);
         e.unshift(c, d + "__cb", null, b);
         _.hm.apply(null, e)
      }
   };
   Gl = function (a) {
      Wl = a
   };
   km = function (a) {
      Xl[a] || (Xl[a] = _.af.setTimeout(function () {
         Xl[a] = !1;
         jm(a)
      }, 0))
   };
   jm = function (a) {
      var b = Rl[a];
      if (b && b.ready) {
         var c = b.hK;
         for (b.hK = []; c.length;) _.Zl.send(a, _.Ig(c.shift()), b.origin)
      }
   };
   bm = function (a) {
      return 0 === a.indexOf("legacy__") ? {
         name: a.substring(8),
         yv: !0
      } : {
         name: a,
         yv: !1
      }
   };
   cm = function () {
      for (var a = _.Wi("rpc/residenceSec") || 60, b = (new Date).getTime() / 1E3, c, d = 0; c = Ql[d]; ++d) {
         var e = c.Gp;
         if (!e || 0 < a && b - c.timestamp > a) Ql.splice(d, 1), --d;
         else {
            var f = e.s,
               h = Sl[f] || Sl["*"];
            if (h)
               if (Ql.splice(d, 1), --d, e.origin = c.origin, c = im(e), e.callback = c, h.Ys(e)) {
                  if ("__cb" !== f && !!h.yv != !!e.g) break;
                  e = h.ei.apply(e, e.a);
                  void 0 !== e && c(e)
               } else _.Mg.debug("gapix.rpc.rejected(" + El + "): " + f)
         }
      }
   };
   lm = function (a, b, c) {
      Ql.push({
         Gp: a,
         origin: b,
         timestamp: (new Date).getTime() / 1E3
      });
      c || cm()
   };
   Bl = function (a, b) {
      a = _.Hg(a);
      lm(a, b, !1)
   };
   mm = function (a) {
      for (; a.length;) lm(a.shift(), this.origin, !0);
      cm()
   };
   nm = function (a) {
      var b = !1;
      a = a.split("|");
      var c = a[0];
      0 <= c.indexOf("/") && (b = !0);
      return {
         id: c,
         origin: a[1] || "*",
         sI: b
      }
   };
   _.om = function (a, b, c, d) {
      var e = nm(a);
      d && (_.af.frames[e.id] = _.af.frames[e.id] || d);
      a = e.id;
      if (!Rl.hasOwnProperty(a)) {
         c = c || null;
         d = e.origin;
         if (".." === a) d = _.zh(Vl), c = c || Ul;
         else if (!e.sI) {
            var f = _.cf.getElementById(a);
            f && (f = f.src, d = _.zh(f), c = c || _.lf(f, "rpctoken"))
         }
         "*" === e.origin && d || (d = e.origin);
         Rl[a] = {
            token: c,
            hK: [],
            origin: d,
            jea: b,
            HY: function () {
               var h = a;
               Rl[h].ready = 1;
               jm(h)
            }
         };
         _.Zl.Pb(a, Rl[a].HY)
      }
      return Rl[a].HY
   };
   _.hm = function (a, b, c, d) {
      a = a || "..";
      _.om(a);
      a = a.split("|", 1)[0];
      var e = b,
         f = a,
         h = [].slice.call(arguments, 3),
         k = c,
         l = El,
         m = Ul,
         n = Rl[f],
         p = l,
         q = nm(f);
      if (n && ".." !== f) {
         if (q.sI) {
            if (!(m = Rl[f].jea)) {
               m = Wl ? Wl.substring(1).split("/") : [El];
               p = m.length - 1;
               for (f = _.af.parent; f !== _.af.top;) {
                  var t = f.parent;
                  if (!p--) {
                     for (var v = null, u = t.frames.length, w = 0; w < u; ++w) t.frames[w] == f && (v = w);
                     m.unshift("{" + v + "}")
                  }
                  f = t
               }
               m = "/" + m.join("/")
            }
            p = m
         } else p = l = "..";
         m = n.token
      }
      k && q ? (n = $l, q.sI && (n = am(q)), fm["_" + ++Pl] = [k, n], k = Pl) : k = null;
      h = {
         s: e,
         f: l,
         r: p,
         t: m,
         c: k,
         a: h
      };
      e = bm(e);
      h.s = e.name;
      h.g = e.yv;
      Rl[a].hK.push(h);
      km(a)
   };
   if ("function" === typeof _.af.postMessage || "object" === typeof _.af.postMessage) _.Zl = new Ml, _.dm("__cb", gm, function () {
      return !0
   }), _.dm("_processBatch", mm, function () {
      return !0
   }), _.om("..");
   var bn;
   bn = function () {
      function a(k, l) {
         k = window.getComputedStyle(k, "").getPropertyValue(l).match(/^([0-9]+)/);
         return parseInt(k[0], 10)
      }
      for (var b = 0, c = [document.body]; 0 < c.length;) {
         var d = c.shift(),
            e = d.childNodes;
         if ("undefined" !== typeof d.style) {
            var f = d.style.overflowY;
            f || (f = (f = document.defaultView.getComputedStyle(d, null)) ? f.overflowY : null);
            if ("visible" != f && "inherit" != f && (f = d.style.height, f || (f = (f = document.defaultView.getComputedStyle(d, null)) ? f.height : ""), 0 < f.length && "auto" != f)) continue
         }
         for (d = 0; d < e.length; d++) {
            f = e[d];
            if ("undefined" !== typeof f.offsetTop && "undefined" !== typeof f.offsetHeight) {
               var h = f.offsetTop + f.offsetHeight + a(f, "margin-bottom");
               b = Math.max(b, h)
            }
            c.push(f)
         }
      }
      return b + a(document.body, "border-bottom") + a(document.body, "margin-bottom") + a(document.body, "padding-bottom")
   };
   _.cn = function () {
      var a = 0;
      self.innerHeight ? a = self.innerHeight : document.documentElement && document.documentElement.clientHeight ? a = document.documentElement.clientHeight : document.body && (a = document.body.clientHeight);
      var b = document.body,
         c = document.documentElement;
      if ("CSS1Compat" === document.compatMode && c.scrollHeight) return c.scrollHeight !== a ? c.scrollHeight : c.offsetHeight;
      if (0 <= navigator.userAgent.indexOf("AppleWebKit")) return bn();
      if (b && c) {
         var d = c.scrollHeight,
            e = c.offsetHeight;
         c.clientHeight !== e && (d = b.scrollHeight,
            e = b.offsetHeight);
         return d > a ? d > e ? d : e : d < e ? d : e
      }
   };
   var dn = function (a, b) {
         return _.zk(a, b, !0)
      },
      en = function (a) {
         var b = function (c) {
            return new(a().Context)(c)
         };
         b.prototype.addOnConnectHandler = function (c, d, e, f) {
            return a().Context.prototype.addOnConnectHandler.apply(this, [c, d, e, f])
         };
         b.prototype.addOnOpenerHandler = function (c, d, e) {
            return a().Context.prototype.addOnOpenerHandler.apply(this, [c, d, e])
         };
         b.prototype.closeSelf = function (c, d, e) {
            return a().Context.prototype.closeSelf.apply(this, [c, d, e])
         };
         b.prototype.connectIframes = function (c, d) {
            a().Context.prototype.connectIframes.apply(this,
               [c, d])
         };
         b.prototype.getFrameName = function () {
            return a().Context.prototype.getFrameName.apply(this)
         };
         b.prototype.getGlobalParam = function (c) {
            a().Context.prototype.getGlobalParam.apply(this, [c])
         };
         b.prototype.getParentIframe = function () {
            return a().Context.prototype.getParentIframe.apply(this)
         };
         b.prototype.getWindow = function () {
            return a().Context.prototype.getWindow.apply(this)
         };
         b.prototype.isDisposed = function () {
            return a().Context.prototype.isDisposed.apply(this)
         };
         b.prototype.open = function (c, d) {
            return a().Context.prototype.open.apply(this,
               [c, d])
         };
         b.prototype.openChild = function (c) {
            return a().Context.prototype.openChild.apply(this, [c])
         };
         b.prototype.ready = function (c, d, e, f) {
            a().Context.prototype.ready.apply(this, [c, d, e, f])
         };
         b.prototype.removeOnConnectHandler = function (c) {
            a().Context.prototype.removeOnConnectHandler.apply(this, [c])
         };
         b.prototype.restyleSelf = function (c, d, e) {
            return a().Context.prototype.restyleSelf.apply(this, [c, d, e])
         };
         b.prototype.setCloseSelfFilter = function (c) {
            a().Context.prototype.setCloseSelfFilter.apply(this, [c])
         };
         b.prototype.setGlobalParam =
            function (c, d) {
               a().Context.prototype.setGlobalParam.apply(this, [c, d])
            };
         b.prototype.setRestyleSelfFilter = function (c) {
            a().Context.prototype.setRestyleSelfFilter.apply(this, [c])
         };
         return b
      },
      fn = function (a) {
         var b = function (c, d, e, f) {
            return new(a().Iframe)(c, d, e, f)
         };
         b.prototype.applyIframesApi = function (c) {
            a().Iframe.prototype.applyIframesApi(c)
         };
         b.prototype.close = function (c, d) {
            return a().Iframe.prototype.close.apply(this, [c, d])
         };
         b.prototype.getContext = function () {
            return a().Iframe.prototype.getContext.apply(this,
               [])
         };
         b.prototype.getFrameName = function () {
            return a().Iframe.prototype.getFrameName.apply(this, [])
         };
         b.prototype.getId = function () {
            return a().Iframe.prototype.getId.apply(this, [])
         };
         b.prototype.getIframeEl = function () {
            return a().Iframe.prototype.getIframeEl.apply(this, [])
         };
         b.prototype.getOrigin = function () {
            return a().Iframe.prototype.getOrigin.apply(this, [])
         };
         b.prototype.getParam = function (c) {
            a().Iframe.prototype.getParam.apply(this, [c])
         };
         b.prototype.getSiteEl = function () {
            return a().Iframe.prototype.getSiteEl.apply(this,
               [])
         };
         b.prototype.getWindow = function () {
            return a().Iframe.prototype.getWindow.apply(this, [])
         };
         b.prototype.isDisposed = function () {
            return a().Iframe.prototype.isDisposed.apply(this, [])
         };
         b.prototype.ping = function (c, d) {
            return a().Iframe.prototype.ping.apply(this, [c, d])
         };
         b.prototype.register = function (c, d, e) {
            a().Iframe.prototype.register.apply(this, [c, d, e])
         };
         b.prototype.registerWasClosed = function (c, d) {
            a().Iframe.prototype.registerWasClosed.apply(this, [c, d])
         };
         b.prototype.registerWasRestyled = function (c, d) {
            a().Iframe.prototype.registerWasRestyled.apply(this,
               [c, d])
         };
         b.prototype.restyle = function (c, d) {
            return a().Iframe.prototype.restyle.apply(this, [c, d])
         };
         b.prototype.send = function (c, d, e, f) {
            return a().Iframe.prototype.send.apply(this, [c, d, e, f])
         };
         b.prototype.setParam = function (c, d) {
            a().Iframe.prototype.setParam.apply(this, [c, d])
         };
         b.prototype.setSiteEl = function (c) {
            a().Iframe.prototype.setSiteEl.apply(this, [c])
         };
         b.prototype.unregister = function (c, d) {
            a().Iframe.prototype.unregister.apply(this, [c, d])
         };
         return b
      },
      gn, hn, mn, on, tn, Cn, Dn, Fn, Jn, Kn, Nn, Pn, Qn, Sn, Rn, Tn;
   _.Dk.prototype.zs = _.hb(4, function (a) {
      this.T.apis = a;
      return this
   });
   gn = function (a, b) {
      a.T.onload = b
   };
   hn = function (a) {
      return a.T.rpctoken
   };
   _.jn = function (a, b) {
      a.T.queryParams = b;
      return a
   };
   _.kn = function (a, b) {
      a.T.relayOpen = b;
      return a
   };
   _.ln = function (a, b) {
      a.T.onClose = b;
      return a
   };
   mn = function (a, b) {
      a.T.controllerData = b
   };
   _.nn = function (a) {
      a.T.waitForOnload = !0;
      return a
   };
   on = function (a) {
      return (a = a.T.timeout) ? a : null
   };
   _.pn = function (a) {
      return !!a && "object" === typeof a && _.ef.test(a.push)
   };
   _.qn = function (a) {
      for (var b = 0; b < this.length; b++)
         if (this[b] === a) return b;
      return -1
   };
   _.rn = function (a, b, c) {
      if (a) {
         _.pm(_.pn(a), "arrayForEach was called with a non array value");
         for (var d = 0; d < a.length; d++) b.call(c, a[d], d)
      }
   };
   _.sn = function (a, b, c) {
      if (a)
         if (_.pn(a)) _.rn(a, b, c);
         else {
            _.pm("object" === typeof a, "objectForEach was called with a non object value");
            c = c || a;
            for (var d in a) _.hf(a, d) && void 0 !== a[d] && b.call(c, a[d], d)
         }
   };
   tn = function (a) {
      this.T = a || {}
   };
   tn.prototype.value = function () {
      return this.T
   };
   tn.prototype.getIframe = function () {
      return this.T.iframe
   };
   var un = function (a, b) {
         a.T.role = b;
         return a
      },
      vn = function (a, b) {
         a.T.data = b;
         return a
      };
   tn.prototype.ul = function (a) {
      this.T.setRpcReady = a;
      return this
   };
   var wn = function (a) {
      return a.T.setRpcReady
   };
   tn.prototype.zn = function (a) {
      this.T.rpctoken = a;
      return this
   };
   var xn = function (a) {
         a.T.selfConnect = !0;
         return a
      },
      yn = function (a) {
         this.T = a || {}
      };
   yn.prototype.value = function () {
      return this.T
   };
   var An = function (a) {
      var b = new zn;
      b.T.role = a;
      return b
   };
   yn.prototype.CT = function () {
      return this.T.role
   };
   yn.prototype.Qc = function (a) {
      this.T.handler = a;
      return this
   };
   yn.prototype.Cb = function () {
      return this.T.handler
   };
   var Bn = function (a, b) {
      a.T.filter = b;
      return a
   };
   yn.prototype.zs = function (a) {
      this.T.apis = a;
      return this
   };
   Fn = /^[\w\.\-]*$/;
   _.Gn = function (a) {
      return a.getOrigin() === a.getContext().getOrigin()
   };
   _.Hn = function () {
      return !0
   };
   _.In = function (a) {
      for (var b = _.gf(), c = 0; c < a.length; c++) b[a[c]] = !0;
      return function (d) {
         return !!b[d.Ld]
      }
   };
   Jn = function (a, b, c) {
      a = Cn[a];
      if (!a) return [];
      for (var d = [], e = 0; e < a.length; e++) d.push(_.gl(a[e].call(c, b, c)));
      return d
   };
   Kn = function (a, b, c) {
      return function (d) {
         if (!b.isDisposed()) {
            var e = this.origin,
               f = b.getOrigin();
            _.pm(e === f, "Wrong origin " + e + " != " + f);
            e = this.callback;
            d = Jn(a, d, b);
            !c && 0 < d.length && _.kl(d).then(e)
         }
      }
   };
   _.Ln = function (a, b, c) {
      _.pm("_default" != a, "Cannot update default api");
      Dn[a] = {
         map: b,
         filter: c
      }
   };
   _.Mn = function (a, b, c) {
      _.pm("_default" != a, "Cannot update default api");
      _.ff(Dn, a, {
         map: {},
         filter: _.Gn
      }).map[b] = c
   };
   Nn = function (a, b) {
      _.ff(Dn, "_default", {
         map: {},
         filter: _.Hn
      }).map[a] = b;
      _.sn(_.En.Ag, function (c) {
         c.register(a, b, _.Hn)
      })
   };
   _.On = function () {
      return _.En
   };
   Pn = /^https?:\/\/[^\/%\\?#\s]+$/i;
   Qn = {
      longdesc: !0,
      name: !0,
      src: !0,
      frameborder: !0,
      marginwidth: !0,
      marginheight: !0,
      scrolling: !0,
      align: !0,
      height: !0,
      width: !0,
      id: !0,
      "class": !0,
      title: !0,
      tabindex: !0,
      hspace: !0,
      vspace: !0,
      allowtransparency: !0
   };
   Sn = function (a) {
      this.resolve = this.reject = null;
      this.promise = _.zl((0, _.D)(function (b, c) {
         this.resolve = b;
         this.reject = c
      }, this));
      a && (this.promise = Rn(this.promise, a))
   };
   Rn = function (a, b) {
      return a.then(function (c) {
         try {
            b(c)
         } catch (d) {}
         return c
      })
   };
   Tn = function (a) {
      this.Cg = a;
      this.Context = en(a);
      this.Iframe = fn(a)
   };
   _.g = Tn.prototype;
   _.g.CROSS_ORIGIN_IFRAMES_FILTER = function (a) {
      return this.Cg().CROSS_ORIGIN_IFRAMES_FILTER(a)
   };
   _.g.SAME_ORIGIN_IFRAMES_FILTER = function (a) {
      return this.Cg().SAME_ORIGIN_IFRAMES_FILTER(a)
   };
   _.g.create = function (a, b, c) {
      return this.Cg().create(a, b, c)
   };
   _.g.getBeforeOpenStyle = function (a) {
      return this.Cg().getBeforeOpenStyle(a)
   };
   _.g.getContext = function () {
      return this.Cg().getContext()
   };
   _.g.getStyle = function (a) {
      return this.Cg().getStyle(a)
   };
   _.g.makeWhiteListIframesFilter = function (a) {
      return this.Cg().makeWhiteListIframesFilter(a)
   };
   _.g.registerBeforeOpenStyle = function (a, b) {
      return this.Cg().registerBeforeOpenStyle(a, b)
   };
   _.g.registerIframesApi = function (a, b, c) {
      return this.Cg().registerIframesApi(a, b, c)
   };
   _.g.registerIframesApiHandler = function (a, b, c) {
      return this.Cg().registerIframesApiHandler(a, b, c)
   };
   _.g.registerStyle = function (a, b) {
      return this.Cg().registerStyle(a, b)
   };
   var Un = function () {
      this.Ji = []
   };
   Un.prototype.Cg = function (a) {
      return this.Ji.length ? Vn(this.Ji[0], a) : void 0
   };
   var Vn = function (a, b) {
         b = void 0 === b ? function (c) {
            return new c
         } : b;
         return a.ef ? b(a.ef) : a.instance
      },
      Wn = function () {
         Un.apply(this, arguments)
      };
   _.E(Wn, Un);
   var Yn = function (a) {
      var b = Xn.WQ,
         c = a.priority,
         d = ~dn(b.Ji, function (e) {
            return e.priority < c ? -1 : 1
         });
      b.Ji.splice(d, 0, a)
   };
   var Xn = new function () {
      var a = this;
      this.WQ = new Wn;
      this.instance = new Tn(function () {
         return a.WQ.Cg()()
      })
   };
   Yn({
      instance: function () {
         return window.gapi.iframes
      },
      priority: 1
   });
   _.Zn = Xn.instance;
   var $n, ao;
   $n = {
      height: !0,
      width: !0
   };
   ao = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i;
   _.bo = function (a) {
      "number" === typeof a && (a = String(a) + "px");
      return a
   };
   var co = function () {
      tn.apply(this, arguments)
   };
   _.E(co, tn);
   var zn = function () {
      yn.apply(this, arguments)
   };
   _.E(zn, yn);
   var eo = function () {
      _.Dk.apply(this, arguments)
   };
   _.E(eo, _.Dk);
   var fo = function (a) {
      eo.call(this, a)
   };
   _.E(fo, eo);
   var go = function (a, b) {
      a.T.frameName = b;
      return a
   };
   fo.prototype.getFrameName = function () {
      return this.T.frameName
   };
   var ho = function (a, b) {
      a.T.rpcAddr = b;
      return a
   };
   fo.prototype.Hg = function () {
      return this.T.rpcAddr
   };
   var io = function (a, b) {
      a.T.retAddr = b;
      return a
   };
   _.g = fo.prototype;
   _.g.ni = function () {
      return this.T.retAddr
   };
   _.g.Tj = function (a) {
      this.T.origin = a;
      return this
   };
   _.g.getOrigin = function () {
      return this.T.origin
   };
   _.g.ul = function (a) {
      this.T.setRpcReady = a;
      return this
   };
   _.g.Kp = function (a) {
      this.T.context = a
   };
   var jo = function (a, b) {
      a.T._rpcReadyFn = b
   };
   fo.prototype.getIframeEl = function () {
      return this.T.iframeEl
   };
   var ko = function (a, b, c) {
      var d = a.Hg(),
         e = b.ni();
      io(ho(c, a.ni() + "/" + b.Hg()), e + "/" + d);
      go(c, b.getFrameName()).Tj(b.getOrigin())
   };
   var mo = function (a, b, c) {
         a.setTimeout(function () {
            b.closed || 5 == c ? lo(b) : (b.close(), c++, mo(a, b, c))
         }, 1E3)
      },
      lo = function (a) {
         a.closed || a.document && a.document.body && _.xe(a.document.body, "Please close this window.")
      };
   _.oo = function (a, b, c, d) {
      this.Zg = !1;
      this.tb = a;
      this.AK = b;
      this.Kq = c;
      this.Oa = d;
      this.eZ = this.Oa.ni();
      this.Ld = this.Oa.getOrigin();
      this.saa = this.Oa.getIframeEl();
      this.N_ = this.Oa.T.where;
      this.Ji = [];
      this.applyIframesApi("_default");
      a = this.Oa.T.apis || [];
      for (b = 0; b < a.length; b++) this.applyIframesApi(a[b]);
      this.tb.Ag[c] = this
   };
   _.g = _.oo.prototype;
   _.g.isDisposed = function () {
      return this.Zg
   };
   _.g.Ia = function () {
      if (!this.isDisposed()) {
         for (var a = 0; a < this.Ji.length; a++) this.unregister(this.Ji[a]);
         delete _.En.Ag[this.getFrameName()];
         this.Zg = !0
      }
   };
   _.g.getContext = function () {
      return this.tb
   };
   _.g.getOptions = function () {
      return this.Oa
   };
   _.g.Hg = function () {
      return this.AK
   };
   _.g.ni = function () {
      return this.eZ
   };
   _.g.getFrameName = function () {
      return this.Kq
   };
   _.g.getIframeEl = function () {
      return this.saa
   };
   _.g.getSiteEl = function () {
      return this.N_
   };
   _.g.setSiteEl = function (a) {
      this.N_ = a
   };
   _.g.ul = function () {
      (0, this.Oa.T._rpcReadyFn)()
   };
   _.g.setParam = function (a, b) {
      this.Oa.value()[a] = b
   };
   _.g.getParam = function (a) {
      return this.Oa.value()[a]
   };
   _.g.Ic = function () {
      return this.Oa.value()
   };
   _.g.getId = function () {
      return this.Oa.getId()
   };
   _.g.getOrigin = function () {
      return this.Ld
   };
   var po = function (a, b) {
      var c = a.Kq;
      a = a.tb.getFrameName();
      return c + ":" + a + ":" + b
   };
   _.g = _.oo.prototype;
   _.g.register = function (a, b, c) {
      _.pm(!this.isDisposed(), "Cannot register handler on disposed iframe " + a);
      _.pm((c || _.Gn)(this), "Rejecting untrusted message " + a);
      c = po(this, a);
      1 == _.ff(Cn, c, []).push(b) && (this.Ji.push(a), _.dm(c, Kn(c, this, "_g_wasClosed" === a)))
   };
   _.g.unregister = function (a, b) {
      var c = po(this, a),
         d = Cn[c];
      d && (b ? (b = _.qn.call(d, b), 0 <= b && d.splice(b, 1)) : d.splice(0, d.length), 0 == d.length && (b = _.qn.call(this.Ji, a), 0 <= b && this.Ji.splice(b, 1), _.em(c)))
   };
   _.g.m9 = function () {
      return this.Ji
   };
   _.g.applyIframesApi = function (a) {
      this.OE = this.OE || [];
      if (!(0 <= _.qn.call(this.OE, a))) {
         this.OE.push(a);
         a = Dn[a] || {
            map: {}
         };
         for (var b in a.map) _.hf(a.map, b) && this.register(b, a.map[b], a.filter)
      }
   };
   _.g.getWindow = function () {
      if (!_.Gn(this)) return null;
      var a = this.Oa.T._popupWindow;
      if (a) return a;
      var b = this.AK.split("/");
      a = this.getContext().getWindow();
      for (var c = 0; c < b.length && a; c++) {
         var d = b[c];
         a = ".." === d ? a == a.parent ? a.opener : a.parent : a.frames[d]
      }
      return a
   };
   var qo = function (a) {
      var b = {};
      if (a)
         for (var c in a) _.hf(a, c) && _.hf($n, c) && ao.test(a[c]) && (b[c] = a[c]);
      return b
   };
   _.g = _.oo.prototype;
   _.g.close = function (a, b) {
      return ro(this, "_g_close", a, b)
   };
   _.g.restyle = function (a, b) {
      return ro(this, "_g_restyle", a, b)
   };
   _.g.ss = function (a, b) {
      return ro(this, "_g_restyleDone", a, b)
   };
   _.g.L6 = function (a) {
      return this.getContext().closeSelf(a, void 0, this)
   };
   _.g.fea = function (a) {
      if (a && "object" === typeof a) return this.getContext().restyleSelf(a, void 0, this)
   };
   _.g.gea = function (a) {
      var b = this.Oa.T.onRestyle;
      b && b.call(this, a, this);
      a = a && "object" === typeof a ? qo(a) : {};
      (b = this.getIframeEl()) && a && "object" === typeof a && (_.hf(a, "height") && (a.height = _.bo(a.height)), _.hf(a, "width") && (a.width = _.bo(a.width)), _.jf(a, b.style))
   };
   _.g.M6 = function (a) {
      var b = this.Oa.T.onClose;
      b && b.call(this, a, this);
      if (b = this.getOptions().T._popupWindow) {
         var c = this.getContext().getWindow().document.getElementById(this.getId());
         c && c.parentNode && c.parentNode.removeChild(c);
         c = this.getContext().getWindow();
         _.wd && _.wi && c ? (c.focus(), mo(c, b, 0)) : (b.close(), lo(b))
      }
      b || (b = this.getIframeEl()) && b.parentNode && b.parentNode.removeChild(b);
      if (b = this.Oa.Ek()) c = {}, c.frameName = this.getFrameName(), ro(b, "_g_disposeControl", c);
      b = po(this, "_g_wasClosed");
      Jn(b, a, this)
   };
   _.g.registerWasRestyled = function (a, b) {
      this.register("_g_wasRestyled", a, b)
   };
   _.g.registerWasClosed = function (a, b) {
      this.register("_g_wasClosed", a, b)
   };
   _.g.Mga = function () {
      delete this.getContext().Ag[this.getFrameName()];
      this.getContext().getWindow().setTimeout((0, _.D)(function () {
         this.Ia()
      }, this), 0)
   };
   _.g.send = function (a, b, c, d) {
      _.pm(!this.isDisposed(), "Cannot send message to disposed iframe - " + a);
      _.pm((d || _.Gn)(this), "Wrong target for message " + a);
      c = new Sn(c);
      a = this.tb.getFrameName() + ":" + this.Kq + ":" + a;
      _.hm(this.AK, a, c.resolve, b);
      return c.promise
   };
   var ro = function (a, b, c, d) {
      return a.send(b, c, d, _.Hn)
   };
   _.g = _.oo.prototype;
   _.g.dda = function (a) {
      return a
   };
   _.g.ping = function (a, b) {
      return ro(this, "_g_ping", b, a)
   };
   _.g.S6 = function (a) {
      a = a && "object" === typeof a ? a : {};
      for (var b = a.rpcAddr, c = (this.Hg() + "/" + b).split("/"), d = this.getContext().getWindow(), e;
         (e = c.shift()) && d;) d = ".." == e ? d.parent : d.frames[e];
      _.pm(!!d, "Bad rpc address " + b);
      a._window = d;
      a._parentRpcAddr = this.Hg();
      a._parentRetAddr = this.ni();
      this.getContext();
      b = new _.so(a);
      this.mca && this.mca(b, a.controllerData);
      this.BF = this.BF || [];
      this.BF.push(b, a.controllerData)
   };
   _.g.h7 = function (a) {
      a = (a || {}).frameName;
      for (var b = this.BF || [], c = 0; c < b.length; c++)
         if (b[c].getFrameName() === a) {
            a = b.splice(c, 1)[0];
            a.Ia();
            this.rca && this.rca(a);
            return
         } _.pm(!1, "Unknown contolled iframe to dispose - " + a)
   };
   _.g.P6 = function (a) {
      var b = new fo(a);
      a = new co(b.value());
      if (a.T.selfConnect) var c = this;
      else(_.pm(Pn.test(b.getOrigin()), "Illegal origin for connected iframe - " + b.getOrigin()), c = this.getContext().Ag[b.getFrameName()], c) ? wn(b) && (c.ul(), ro(c, "_g_rpcReady")) : (b = go(io(ho(new fo, b.Hg()), b.ni()).Tj(b.getOrigin()), b.getFrameName()).ul(wn(b)).zn(hn(b)), c = this.getContext().attach(b.value()));
      b = this.getContext();
      var d = a.T.role;
      a = a.T.data;
      to(b);
      d = d || "";
      _.ff(b.zF, d, []).push({
         Wf: c,
         data: a
      });
      uo(c, a, b.vJ[d])
   };
   _.g.YL = function (a, b) {
      (new fo(b)).T._relayedDepth || (b = {}, xn(un(new co(b), "_opener")), ro(a, "_g_connect", b))
   };
   _.g.CX = function (a) {
      var b = this,
         c = a.T.messageHandlers,
         d = a.T.messageHandlersFilter,
         e = a.T.onClose;
      _.ln(_.Fk(_.Ek(a, null), null), null);
      return ro(this, "_g_open", a.value()).then(function (f) {
         var h = new fo(f[0]),
            k = h.getFrameName();
         f = new fo;
         var l = b.ni(),
            m = h.ni();
         io(ho(f, b.Hg() + "/" + h.Hg()), m + "/" + l);
         go(f, k);
         f.Tj(h.getOrigin());
         f.zs(h.T.apis);
         f.zn(hn(a));
         _.Ek(f, c);
         _.Fk(f, d);
         _.ln(f, e);
         (h = b.getContext().Ag[k]) || (h = b.getContext().attach(f.value()));
         return h
      })
   };
   _.g.BK = function (a) {
      var b = a.getUrl();
      _.pm(!b || _.Em.test(b), "Illegal url for new iframe - " + b);
      var c = a.xo().value();
      b = {};
      for (var d in c) _.hf(c, d) && _.hf(Qn, d) && (b[d] = c[d]);
      _.hf(c, "style") && (d = c.style, "object" === typeof d && (b.style = qo(d)));
      a.value().attributes = b
   };
   _.g.Mca = function (a) {
      a = new fo(a);
      this.BK(a);
      var b = a.T._relayedDepth || 0;
      a.T._relayedDepth = b + 1;
      a.T.openerIframe = this;
      var c = hn(a);
      a.zn(null);
      var d = this;
      return this.getContext().open(a.value()).then(function (e) {
         var f = (new fo(e.Ic())).T.apis,
            h = new fo;
         ko(e, d, h);
         0 == b && un(new co(h.value()), "_opener");
         h.ul(!0);
         h.zn(c);
         ro(e, "_g_connect", h.value());
         h = new fo;
         go(io(ho(h, e.Hg()), e.eZ), e.getFrameName()).Tj(e.getOrigin()).zs(f);
         return h.value()
      })
   };
   _.g.eea = function (a) {
      this.getContext().addOnOpenerHandler(function (b) {
         b.send("_g_wasRestyled", a, void 0, _.Hn)
      }, null, _.Hn)
   };
   var Co;
   _.vo = _.gf();
   _.wo = _.gf();
   _.xo = function (a, b) {
      _.vo[a] = b
   };
   _.Bo = function (a) {
      return _.vo[a]
   };
   Co = function (a, b) {
      _.kf.load("gapi.iframes.style." + a, b)
   };
   _.Do = function (a, b) {
      _.wo[a] = b
   };
   _.Eo = function (a) {
      return _.wo[a]
   };
   _.so = function (a) {
      a = a || {};
      this.Zg = !1;
      this.Jj = _.gf();
      this.Ag = _.gf();
      this.og = a._window || _.af;
      this.Qd = this.og.location.href;
      this.TX = (this.PJ = Fo(this.Qd, "parent")) ? Fo(this.Qd, "pfname") : "";
      this.Ga = this.PJ ? Fo(this.Qd, "_gfid") || Fo(this.Qd, "id") : "";
      this.Kq = _.Rm(this.Ga, this.TX);
      this.Ld = _.zh(this.Qd);
      if (this.Ga) {
         var b = new fo;
         ho(b, a._parentRpcAddr || "..");
         io(b, a._parentRetAddr || this.Ga);
         b.Tj(_.zh(this.PJ || this.Qd));
         go(b, this.TX);
         this.yb = this.attach(b.value())
      } else this.yb = null
   };
   _.g = _.so.prototype;
   _.g.isDisposed = function () {
      return this.Zg
   };
   _.g.Ia = function () {
      if (!this.isDisposed()) {
         for (var a = _.va(Object.values(this.Ag)), b = a.next(); !b.done; b = a.next()) b.value.Ia();
         this.Zg = !0
      }
   };
   _.g.getFrameName = function () {
      return this.Kq
   };
   _.g.getOrigin = function () {
      return this.Ld
   };
   _.g.getWindow = function () {
      return this.og
   };
   _.g.ub = function () {
      return this.og.document
   };
   _.g.setGlobalParam = function (a, b) {
      this.Jj[a] = b
   };
   _.g.getGlobalParam = function (a) {
      return this.Jj[a]
   };
   _.g.attach = function (a) {
      _.pm(!this.isDisposed(), "Cannot attach iframe in disposed context");
      a = new fo(a);
      a.Hg() || ho(a, a.getId());
      a.ni() || io(a, "..");
      a.getOrigin() || a.Tj(_.zh(a.getUrl()));
      a.getFrameName() || go(a, _.Rm(a.getId(), this.Kq));
      var b = a.getFrameName();
      if (this.Ag[b]) return this.Ag[b];
      var c = a.Hg(),
         d = c;
      a.getOrigin() && (d = c + "|" + a.getOrigin());
      var e = a.ni(),
         f = hn(a);
      f || (f = (f = a.getIframeEl()) && (f.getAttribute("data-postorigin") || f.src) || a.getUrl(), f = _.lf(f, "rpctoken"));
      jo(a, _.om(d, e, f, a.T._popupWindow));
      d = ((window.gadgets || {}).rpc || {}).setAuthToken;
      f && d && d(c, f);
      var h = new _.oo(this, c, b, a),
         k = a.T.messageHandlersFilter;
      _.sn(a.T.messageHandlers, function (l, m) {
         h.register(m, l, k)
      });
      wn(a) && h.ul();
      ro(h, "_g_rpcReady");
      return h
   };
   _.g.BK = function (a) {
      go(a, null);
      var b = a.getId();
      !b || Fn.test(b) && !this.getWindow().document.getElementById(b) || (_.Mg.log("Ignoring requested iframe ID - " + b), a.Se(null))
   };
   var Fo = function (a, b) {
      var c = _.lf(a, b);
      c || (c = _.Hg(_.lf(a, "jcp", ""))[b]);
      return c || ""
   };
   _.so.prototype.openChild = function (a) {
      _.pm(!this.isDisposed(), "Cannot open iframe in disposed context");
      var b = new fo(a);
      Go(this, b);
      var c = b.getFrameName();
      if (c && this.Ag[c]) return this.Ag[c];
      this.BK(b);
      c = b.getUrl();
      _.pm(c, "No url for new iframe");
      var d = b.T.queryParams || {};
      d.usegapi = "1";
      _.jn(b, d);
      d = this.tU && this.tU(c, b);
      d || (d = b.T.where, _.pm(!!d, "No location for new iframe"), c = _.an(c, d, a), b.T.iframeEl = c, d = c.getAttribute("id"));
      ho(b, d).Se(d);
      b.Tj(_.zh(b.T.eurl || ""));
      this.zW && this.zW(b, b.getIframeEl());
      c = this.attach(a);
      c.YL && c.YL(c, a);
      (a = b.T.onCreate) && a(c);
      b.T.disableRelayOpen || c.applyIframesApi("_open");
      return c
   };
   var Ho = function (a, b, c) {
         var d = b.T.canvasUrl;
         if (!d) return c;
         _.pm(!b.T.allowPost && !b.T.forcePost, "Post is not supported when using canvas url");
         var e = b.getUrl();
         _.pm(e && _.zh(e) === a.Ld && _.zh(d) === a.Ld, "Wrong origin for canvas or hidden url " + d);
         b.setUrl(d);
         _.nn(b);
         b.T.canvasUrl = null;
         return function (f) {
            var h = f.getWindow(),
               k = h.location.hash;
            k = _.$m(e) + (/#/.test(e) ? k.replace(/^#/, "&") : k);
            h.location.replace(k);
            c && c(f)
         }
      },
      Io = function (a, b, c) {
         var d = b.T.relayOpen;
         if (d) {
            var e = a.getParentIframe();
            d instanceof _.oo ?
               (e = d, _.kn(b, 0)) : 0 < Number(d) && _.kn(b, Number(d) - 1);
            if (e) {
               _.pm(!!e.CX, "Relaying iframe open is disabled");
               if (d = b.getStyle())
                  if (d = _.wo[d]) b.Kp(a), d(b.value()), b.Kp(null);
               b.T.openerIframe = null;
               c.resolve(e.CX(b));
               return !0
            }
         }
         return !1
      },
      Jo = function (a, b, c) {
         var d = b.getStyle();
         if (d)
            if (_.pm(!!_.Bo, "Defer style is disabled, when requesting style " + d), _.vo[d]) Go(a, b);
            else return Co(d, function () {
               _.pm(!!_.vo[d], "Fail to load style - " + d);
               c.resolve(a.open(b.value()))
            }), !0;
         return !1
      };
   _.so.prototype.open = function (a, b) {
      _.pm(!this.isDisposed(), "Cannot open iframe in disposed context");
      var c = new fo(a);
      b = Ho(this, c, b);
      var d = new Sn(b);
      (b = c.getUrl()) && c.setUrl(_.$m(b));
      if (Io(this, c, d) || Jo(this, c, d) || Io(this, c, d)) return d.promise;
      if (null != on(c)) {
         var e = setTimeout(function () {
               h.getIframeEl().src = "about:blank";
               d.reject({
                  timeout: "Exceeded time limit of :" + on(c) + "milliseconds"
               })
            }, on(c)),
            f = d.resolve;
         d.resolve = function (k) {
            clearTimeout(e);
            f(k)
         }
      }
      c.T.waitForOnload && gn(c.xo(), function () {
         d.resolve(h)
      });
      var h = this.openChild(a);
      c.T.waitForOnload || d.resolve(h);
      return d.promise
   };
   _.so.prototype.getParentIframe = function () {
      return this.yb
   };
   var Ko = function (a, b) {
      var c = a.getParentIframe(),
         d = !0;
      b.filter && (d = b.filter.call(b.Wf, b.params));
      return _.gl(d).then(function (e) {
         return e && c ? (b.RX && b.RX.call(a, b.params), e = b.sender ? b.sender(b.params) : ro(c, b.message, b.params), b.Kga ? e.then(function () {
            return !0
         }) : !0) : !1
      })
   };
   _.g = _.so.prototype;
   _.g.closeSelf = function (a, b, c) {
      a = Ko(this, {
         sender: function (d) {
            var e = _.En.getParentIframe();
            _.sn(_.En.Ag, function (f) {
               f !== e && ro(f, "_g_wasClosed", d)
            });
            return ro(e, "_g_closeMe", d)
         },
         message: "_g_closeMe",
         params: a,
         Wf: c,
         filter: this.getGlobalParam("onCloseSelfFilter")
      });
      b = new Sn(b);
      b.resolve(a);
      return b.promise
   };
   _.g.restyleSelf = function (a, b, c) {
      a = a || {};
      b = new Sn(b);
      b.resolve(Ko(this, {
         message: "_g_restyleMe",
         params: a,
         Wf: c,
         filter: this.getGlobalParam("onRestyleSelfFilter"),
         Kga: !0,
         RX: this.O0
      }));
      return b.promise
   };
   _.g.O0 = function (a) {
      "auto" === a.height && (a.height = _.cn())
   };
   _.g.setCloseSelfFilter = function (a) {
      this.setGlobalParam("onCloseSelfFilter", a)
   };
   _.g.setRestyleSelfFilter = function (a) {
      this.setGlobalParam("onRestyleSelfFilter", a)
   };
   var Go = function (a, b) {
      var c = b.getStyle();
      if (c) {
         b.Ah(null);
         var d = _.vo[c];
         _.pm(d, "No such style: " + c);
         b.Kp(a);
         d(b.value());
         b.Kp(null)
      }
   };
   _.so.prototype.ready = function (a, b, c, d) {
      var e = b || {},
         f = this.getParentIframe();
      this.addOnOpenerHandler(function (k) {
         _.sn(e, function (l, m) {
            k.register(m, l, d)
         }, this);
         k !== f && k.send("_ready", h, void 0, d)
      }, void 0, d);
      var h = a || {};
      h.height = h.height || "auto";
      this.O0(h);
      f && f.send("_ready", h, c, _.Hn)
   };
   _.so.prototype.connectIframes = function (a, b) {
      a = new co(a);
      var c = new co(b),
         d = wn(a);
      b = a.getIframe();
      var e = c.getIframe();
      if (e) {
         var f = hn(a),
            h = new fo;
         ko(b, e, h);
         vn(un((new co(h.value())).zn(f), a.T.role), a.T.data).ul(d);
         var k = new fo;
         ko(e, b, k);
         vn(un((new co(k.value())).zn(f), c.T.role), c.T.data).ul(!0);
         ro(b, "_g_connect", h.value(), function () {
            d || ro(e, "_g_connect", k.value())
         });
         d && ro(e, "_g_connect", k.value())
      } else c = {}, vn(un(xn(new co(c)), a.T.role), a.T.data), ro(b, "_g_connect", c)
   };
   var to = function (a) {
      a.zF || (a.zF = _.gf(), a.vJ = _.gf())
   };
   _.so.prototype.addOnConnectHandler = function (a, b, c, d) {
      to(this);
      "object" === typeof a ? (b = new zn(a), c = b.CT() || "") : (b = Bn(An(a).Qc(b).zs(c), d), c = a);
      d = this.zF[c] || [];
      a = !1;
      for (var e = 0; e < d.length && !a; e++) uo(this.Ag[d[e].Wf.getFrameName()], d[e].data, [b]), a = b.T.runOnce;
      c = _.ff(this.vJ, c, []);
      a || b.T.dontWait || c.push(b)
   };
   _.so.prototype.removeOnConnectHandler = function (a, b) {
      a = _.ff(this.vJ, a, []);
      if (b)
         for (var c = !1, d = 0; !c && d < a.length; d++) a[d].Cb() === b && (c = !0, a.splice(d, 1));
      else a.splice(0, a.length)
   };
   var uo = function (a, b, c) {
      c = c || [];
      for (var d = 0; d < c.length; d++) {
         var e = c[d];
         if (e && a) {
            var f = e.T.filter || _.Gn;
            if (a && f(a)) {
               f = e.T.apis || [];
               for (var h = 0; h < f.length; h++) a.applyIframesApi(f[h]);
               e.Cb() && e.Cb()(a, b);
               e.T.runOnce && (c.splice(d, 1), --d)
            }
         }
      }
   };
   _.so.prototype.addOnOpenerHandler = function (a, b, c) {
      var d = this.addOnConnectHandler;
      a = Bn(An("_opener").Qc(a).zs(b), c);
      a.T.runOnce = !0;
      d.call(this, a.value())
   };
   _.so.prototype.zW = function (a, b) {
      var c = a.Ek();
      if (c) {
         _.pm(c.Ld === a.getOrigin(), "Wrong controller origin " + this.Ld + " !== " + a.getOrigin());
         var d = a.Hg();
         ho(a, c.Hg());
         io(a, c.ni());
         var e = new fo;
         mn(ho(e, d), a.T.controllerData);
         _.qf(b, "load", function () {
            c.send("_g_control", e.value())
         })
      }
   };
   var Lo = function (a, b, c) {
      a = a.getWindow();
      var d = a.document,
         e = c.T.reuseWindow;
      if (e) {
         var f = c.getId();
         if (!f) throw Error("O");
      } else f = _.Qm(d, c);
      var h = f,
         k = c.T.rpcRelayUrl;
      if (k) {
         k = _.Zm(k);
         h = c.T.fragmentParams || {};
         h.rly = f;
         c.T.fragmentParams = h;
         h = c.T.where || d.body;
         _.pm(!!h, "Cannot open window in a page with no body");
         var l = {};
         l.src = k;
         l.style = "display:none;";
         l.id = f;
         l.name = f;
         _.Um(d, h, l, f);
         h = f + "_relay"
      }
      b = _.$m(b);
      var m = _.Sm(d, b, f, c.value());
      c.T.eurl = m;
      b = c.T.openAsWindow;
      "string" !== typeof b && (b = void 0);
      c = window.navigator.userAgent ||
         "";
      /Trident|MSIE/i.test(c) && /#/.test(c) && (m = "javascript:window.location.replace(" + _.af.JSON.stringify(m).replace(/#/g, "\\x23") + ")");
      if (e) {
         var n = e;
         setTimeout(function () {
            n.location.replace(m)
         })
      } else n = _.Ze(a, m, h, b);
      return {
         id: f,
         n1: n
      }
   };
   _.so.prototype.tU = function (a, b) {
      if (b.T.openAsWindow) {
         a = Lo(this, a, b);
         var c = a.id;
         _.pm(!!a.n1, "Open popup window failed");
         b.T._popupWindow = a.n1
      }
      return c
   };
   Cn = _.gf();
   Dn = _.gf();
   _.En = new _.so;
   Nn("_g_rpcReady", _.oo.prototype.ul);
   Nn("_g_discover", _.oo.prototype.m9);
   Nn("_g_ping", _.oo.prototype.dda);
   Nn("_g_close", _.oo.prototype.L6);
   Nn("_g_closeMe", _.oo.prototype.M6);
   Nn("_g_restyle", _.oo.prototype.fea);
   Nn("_g_restyleMe", _.oo.prototype.gea);
   Nn("_g_wasClosed", _.oo.prototype.Mga);
   _.Mn("control", "_g_control", _.oo.prototype.S6);
   _.Mn("control", "_g_disposeControl", _.oo.prototype.h7);
   var Mo = _.En.getParentIframe();
   Mo && Mo.register("_g_restyleDone", _.oo.prototype.eea, _.Hn);
   Nn("_g_connect", _.oo.prototype.P6);
   var No = {};
   No._g_open = _.oo.prototype.Mca;
   _.Ln("_open", No, _.Hn);
   var Oo = {
      Context: _.so,
      Iframe: _.oo,
      SAME_ORIGIN_IFRAMES_FILTER: _.Gn,
      CROSS_ORIGIN_IFRAMES_FILTER: _.Hn,
      makeWhiteListIframesFilter: _.In,
      getContext: _.On,
      registerIframesApi: _.Ln,
      registerIframesApiHandler: _.Mn,
      registerStyle: _.xo,
      registerBeforeOpenStyle: _.Do,
      getStyle: _.Bo,
      getBeforeOpenStyle: _.Eo,
      create: _.an
   };
   Yn({
      instance: function () {
         return Oo
      },
      priority: 2
   });
   _.Mn("gapi.load", "_g_gapi.load", function (a) {
      return new _.cl(function (b) {
         _.kf.load(a && "object" === typeof a && a.features || "", b)
      })
   });
   _.C("gapi.iframes.create", _.an);
   _.C("gapi.iframes.registerStyle", _.xo);
   _.C("gapi.iframes.registerBeforeOpenStyle", _.Do);
   _.C("gapi.iframes.getStyle", _.Bo);
   _.C("gapi.iframes.getBeforeOpenStyle", _.Eo);
   _.C("gapi.iframes.registerIframesApi", _.Ln);
   _.C("gapi.iframes.registerIframesApiHandler", _.Mn);
   _.C("gapi.iframes.getContext", _.On);
   _.C("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER", _.Gn);
   _.C("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER", _.Hn);
   _.C("gapi.iframes.makeWhiteListIframesFilter", _.In);
   _.C("gapi.iframes.Context", _.so);
   _.C("gapi.iframes.Context.prototype.isDisposed", _.so.prototype.isDisposed);
   _.C("gapi.iframes.Context.prototype.getWindow", _.so.prototype.getWindow);
   _.C("gapi.iframes.Context.prototype.getFrameName", _.so.prototype.getFrameName);
   _.C("gapi.iframes.Context.prototype.getGlobalParam", _.so.prototype.getGlobalParam);
   _.C("gapi.iframes.Context.prototype.setGlobalParam", _.so.prototype.setGlobalParam);
   _.C("gapi.iframes.Context.prototype.open", _.so.prototype.open);
   _.C("gapi.iframes.Context.prototype.openChild", _.so.prototype.openChild);
   _.C("gapi.iframes.Context.prototype.getParentIframe", _.so.prototype.getParentIframe);
   _.C("gapi.iframes.Context.prototype.closeSelf", _.so.prototype.closeSelf);
   _.C("gapi.iframes.Context.prototype.restyleSelf", _.so.prototype.restyleSelf);
   _.C("gapi.iframes.Context.prototype.setCloseSelfFilter", _.so.prototype.setCloseSelfFilter);
   _.C("gapi.iframes.Context.prototype.setRestyleSelfFilter", _.so.prototype.setRestyleSelfFilter);
   _.C("gapi.iframes.Context.prototype.addOnConnectHandler", _.so.prototype.addOnConnectHandler);
   _.C("gapi.iframes.Context.prototype.removeOnConnectHandler", _.so.prototype.removeOnConnectHandler);
   _.C("gapi.iframes.Context.prototype.addOnOpenerHandler", _.so.prototype.addOnOpenerHandler);
   _.C("gapi.iframes.Context.prototype.connectIframes", _.so.prototype.connectIframes);
   _.C("gapi.iframes.Iframe", _.oo);
   _.C("gapi.iframes.Iframe.prototype.isDisposed", _.oo.prototype.isDisposed);
   _.C("gapi.iframes.Iframe.prototype.getContext", _.oo.prototype.getContext);
   _.C("gapi.iframes.Iframe.prototype.getFrameName", _.oo.prototype.getFrameName);
   _.C("gapi.iframes.Iframe.prototype.getId", _.oo.prototype.getId);
   _.C("gapi.iframes.Iframe.prototype.register", _.oo.prototype.register);
   _.C("gapi.iframes.Iframe.prototype.unregister", _.oo.prototype.unregister);
   _.C("gapi.iframes.Iframe.prototype.send", _.oo.prototype.send);
   _.C("gapi.iframes.Iframe.prototype.applyIframesApi", _.oo.prototype.applyIframesApi);
   _.C("gapi.iframes.Iframe.prototype.getIframeEl", _.oo.prototype.getIframeEl);
   _.C("gapi.iframes.Iframe.prototype.getSiteEl", _.oo.prototype.getSiteEl);
   _.C("gapi.iframes.Iframe.prototype.setSiteEl", _.oo.prototype.setSiteEl);
   _.C("gapi.iframes.Iframe.prototype.getWindow", _.oo.prototype.getWindow);
   _.C("gapi.iframes.Iframe.prototype.getOrigin", _.oo.prototype.getOrigin);
   _.C("gapi.iframes.Iframe.prototype.close", _.oo.prototype.close);
   _.C("gapi.iframes.Iframe.prototype.restyle", _.oo.prototype.restyle);
   _.C("gapi.iframes.Iframe.prototype.restyleDone", _.oo.prototype.ss);
   _.C("gapi.iframes.Iframe.prototype.registerWasRestyled", _.oo.prototype.registerWasRestyled);
   _.C("gapi.iframes.Iframe.prototype.registerWasClosed", _.oo.prototype.registerWasClosed);
   _.C("gapi.iframes.Iframe.prototype.getParam", _.oo.prototype.getParam);
   _.C("gapi.iframes.Iframe.prototype.setParam", _.oo.prototype.setParam);
   _.C("gapi.iframes.Iframe.prototype.ping", _.oo.prototype.ping);
   _.C("gapi.iframes.Iframe.prototype.getOpenParams", _.oo.prototype.Ic);
   _.Ij = function (a) {
      a && "function" == typeof a.Ia && a.Ia()
   };
   _.Jj = function () {
      this.Zg = this.Zg;
      this.jp = this.jp
   };
   _.Jj.prototype.Zg = !1;
   _.Jj.prototype.isDisposed = function () {
      return this.Zg
   };
   _.Jj.prototype.Ia = function () {
      this.Zg || (this.Zg = !0, this.ua())
   };
   _.Lj = function (a, b) {
      _.Kj(a, _.$a(_.Ij, b))
   };
   _.Kj = function (a, b) {
      a.Zg ? b() : (a.jp || (a.jp = []), a.jp.push(b))
   };
   _.Jj.prototype.ua = function () {
      if (this.jp)
         for (; this.jp.length;) this.jp.shift()()
   };
   var Qj = function (a, b) {
      for (var c in a)
         if (b.call(void 0, a[c], c, a)) return !0;
      return !1
   };
   _.Zd.prototype.O = _.hb(1, function (a) {
      return _.ze(this.Hb, a)
   });
   _.Rj = function (a, b) {
      var c = a.length - b.length;
      return 0 <= c && a.indexOf(b, c) == c
   };
   _.Sj = function (a, b, c) {
      return Object.prototype.hasOwnProperty.call(a, b) ? a[b] : a[b] = c(b)
   };
   _.Uj = function (a, b) {
      this.type = "function" == typeof _.Tj && a instanceof _.Tj ? String(a) : a;
      this.currentTarget = this.target = b;
      this.defaultPrevented = this.Yv = !1
   };
   _.Uj.prototype.stopPropagation = function () {
      this.Yv = !0
   };
   _.Uj.prototype.preventDefault = function () {
      this.defaultPrevented = !0
   };
   var Wj = function () {
      if (!_.r.addEventListener || !Object.defineProperty) return !1;
      var a = !1,
         b = Object.defineProperty({}, "passive", {
            get: function () {
               a = !0
            }
         });
      try {
         var c = function () {};
         _.r.addEventListener("test", c, b);
         _.r.removeEventListener("test", c, b)
      } catch (d) {}
      return a
   }();
   _.Xj = function (a, b) {
      _.Uj.call(this, a ? a.type : "");
      this.relatedTarget = this.currentTarget = this.target = null;
      this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
      this.key = "";
      this.charCode = this.keyCode = 0;
      this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
      this.state = null;
      this.WJ = !1;
      this.pointerId = 0;
      this.pointerType = "";
      this.timeStamp = 0;
      this.mf = null;
      a && this.Ad(a, b)
   };
   _.ab(_.Xj, _.Uj);
   var Yj = {
      2: "touch",
      3: "pen",
      4: "mouse"
   };
   _.Xj.prototype.Ad = function (a, b) {
      var c = this.type = a.type,
         d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
      this.target = a.target || a.srcElement;
      this.currentTarget = b;
      (b = a.relatedTarget) ? _.ud && (_.od(b, "nodeName") || (b = null)): "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
      this.relatedTarget = b;
      d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.offsetX = _.vd || void 0 !==
         a.offsetX ? a.offsetX : a.layerX, this.offsetY = _.vd || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
      this.button = a.button;
      this.keyCode = a.keyCode || 0;
      this.key = a.key || "";
      this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.WJ = _.xd ? a.metaKey : a.ctrlKey;
      this.pointerId = a.pointerId ||
         0;
      this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Yj[a.pointerType] || "";
      this.state = a.state;
      this.timeStamp = a.timeStamp;
      this.mf = a;
      a.defaultPrevented && _.Xj.N.preventDefault.call(this)
   };
   _.Xj.prototype.stopPropagation = function () {
      _.Xj.N.stopPropagation.call(this);
      this.mf.stopPropagation ? this.mf.stopPropagation() : this.mf.cancelBubble = !0
   };
   _.Xj.prototype.preventDefault = function () {
      _.Xj.N.preventDefault.call(this);
      var a = this.mf;
      a.preventDefault ? a.preventDefault() : a.returnValue = !1
   };
   _.Zj = "closure_listenable_" + (1E6 * Math.random() | 0);
   _.ak = function (a) {
      return !(!a || !a[_.Zj])
   };
   var bk = 0;
   var ck = function (a, b, c, d, e) {
         this.listener = a;
         this.proxy = null;
         this.src = b;
         this.type = c;
         this.capture = !!d;
         this.Uf = e;
         this.key = ++bk;
         this.ew = this.yy = !1
      },
      dk = function (a) {
         a.ew = !0;
         a.listener = null;
         a.proxy = null;
         a.src = null;
         a.Uf = null
      };
   var ek = function (a) {
      this.src = a;
      this.ye = {};
      this.ox = 0
   };
   ek.prototype.add = function (a, b, c, d, e) {
      var f = a.toString();
      a = this.ye[f];
      a || (a = this.ye[f] = [], this.ox++);
      var h = fk(a, b, d, e); - 1 < h ? (b = a[h], c || (b.yy = !1)) : (b = new ck(b, this.src, f, !!d, e), b.yy = c, a.push(b));
      return b
   };
   ek.prototype.remove = function (a, b, c, d) {
      a = a.toString();
      if (!(a in this.ye)) return !1;
      var e = this.ye[a];
      b = fk(e, b, c, d);
      return -1 < b ? (dk(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.ye[a], this.ox--), !0) : !1
   };
   var gk = function (a, b) {
      var c = b.type;
      if (!(c in a.ye)) return !1;
      var d = _.nb(a.ye[c], b);
      d && (dk(b), 0 == a.ye[c].length && (delete a.ye[c], a.ox--));
      return d
   };
   ek.prototype.removeAll = function (a) {
      a = a && a.toString();
      var b = 0,
         c;
      for (c in this.ye)
         if (!a || c == a) {
            for (var d = this.ye[c], e = 0; e < d.length; e++) ++b, dk(d[e]);
            delete this.ye[c];
            this.ox--
         } return b
   };
   ek.prototype.Xq = function (a, b, c, d) {
      a = this.ye[a.toString()];
      var e = -1;
      a && (e = fk(a, b, c, d));
      return -1 < e ? a[e] : null
   };
   ek.prototype.hasListener = function (a, b) {
      var c = void 0 !== a,
         d = c ? a.toString() : "",
         e = void 0 !== b;
      return Qj(this.ye, function (f) {
         for (var h = 0; h < f.length; ++h)
            if (!(c && f[h].type != d || e && f[h].capture != b)) return !0;
         return !1
      })
   };
   var fk = function (a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
         var f = a[e];
         if (!f.ew && f.listener == b && f.capture == !!c && f.Uf == d) return e
      }
      return -1
   };
   var hk, ik, jk, nk, pk, qk, rk, uk;
   hk = "closure_lm_" + (1E6 * Math.random() | 0);
   ik = {};
   jk = 0;
   _.lk = function (a, b, c, d, e) {
      if (d && d.once) return _.kk(a, b, c, d, e);
      if (Array.isArray(b)) {
         for (var f = 0; f < b.length; f++) _.lk(a, b[f], c, d, e);
         return null
      }
      c = _.mk(c);
      return _.ak(a) ? a.ma(b, c, _.Rb(d) ? !!d.capture : !!d, e) : nk(a, b, c, !1, d, e)
   };
   nk = function (a, b, c, d, e, f) {
      if (!b) throw Error("J");
      var h = _.Rb(e) ? !!e.capture : !!e,
         k = _.ok(a);
      k || (a[hk] = k = new ek(a));
      c = k.add(b, c, d, h, f);
      if (c.proxy) return c;
      d = pk();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener) Wj || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
      else if (a.attachEvent) a.attachEvent(qk(b.toString()), d);
      else if (a.addListener && a.removeListener) a.addListener(d);
      else throw Error("K");
      jk++;
      return c
   };
   pk = function () {
      var a = rk,
         b = function (c) {
            return a.call(b.src, b.listener, c)
         };
      return b
   };
   _.kk = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
         for (var f = 0; f < b.length; f++) _.kk(a, b[f], c, d, e);
         return null
      }
      c = _.mk(c);
      return _.ak(a) ? a.Jr(b, c, _.Rb(d) ? !!d.capture : !!d, e) : nk(a, b, c, !0, d, e)
   };
   _.sk = function (a, b, c, d, e) {
      if (Array.isArray(b))
         for (var f = 0; f < b.length; f++) _.sk(a, b[f], c, d, e);
      else d = _.Rb(d) ? !!d.capture : !!d, c = _.mk(c), _.ak(a) ? a.Kc(b, c, d, e) : a && (a = _.ok(a)) && (b = a.Xq(b, c, d, e)) && _.tk(b)
   };
   _.tk = function (a) {
      if ("number" === typeof a || !a || a.ew) return !1;
      var b = a.src;
      if (_.ak(b)) return b.tN(a);
      var c = a.type,
         d = a.proxy;
      b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(qk(c), d) : b.addListener && b.removeListener && b.removeListener(d);
      jk--;
      (c = _.ok(b)) ? (gk(c, a), 0 == c.ox && (c.src = null, b[hk] = null)) : dk(a);
      return !0
   };
   qk = function (a) {
      return a in ik ? ik[a] : ik[a] = "on" + a
   };
   rk = function (a, b) {
      if (a.ew) a = !0;
      else {
         b = new _.Xj(b, this);
         var c = a.listener,
            d = a.Uf || a.src;
         a.yy && _.tk(a);
         a = c.call(d, b)
      }
      return a
   };
   _.ok = function (a) {
      a = a[hk];
      return a instanceof ek ? a : null
   };
   uk = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
   _.mk = function (a) {
      if ("function" === typeof a) return a;
      a[uk] || (a[uk] = function (b) {
         return a.handleEvent(b)
      });
      return a[uk]
   };
   _.Pj(function (a) {
      rk = a(rk)
   });
   _.vk = function () {
      _.Jj.call(this);
      this.Ck = new ek(this);
      this.G5 = this;
      this.OJ = null
   };
   _.ab(_.vk, _.Jj);
   _.vk.prototype[_.Zj] = !0;
   _.g = _.vk.prototype;
   _.g.Ao = function () {
      return this.OJ
   };
   _.g.jD = function (a) {
      this.OJ = a
   };
   _.g.addEventListener = function (a, b, c, d) {
      _.lk(this, a, b, c, d)
   };
   _.g.removeEventListener = function (a, b, c, d) {
      _.sk(this, a, b, c, d)
   };
   _.g.dispatchEvent = function (a) {
      var b, c = this.Ao();
      if (c)
         for (b = []; c; c = c.Ao()) b.push(c);
      c = this.G5;
      var d = a.type || a;
      if ("string" === typeof a) a = new _.Uj(a, c);
      else if (a instanceof _.Uj) a.target = a.target || c;
      else {
         var e = a;
         a = new _.Uj(d, c);
         _.tb(a, e)
      }
      e = !0;
      if (b)
         for (var f = b.length - 1; !a.Yv && 0 <= f; f--) {
            var h = a.currentTarget = b[f];
            e = h.ou(d, !0, a) && e
         }
      a.Yv || (h = a.currentTarget = c, e = h.ou(d, !0, a) && e, a.Yv || (e = h.ou(d, !1, a) && e));
      if (b)
         for (f = 0; !a.Yv && f < b.length; f++) h = a.currentTarget = b[f], e = h.ou(d, !1, a) && e;
      return e
   };
   _.g.ua = function () {
      _.vk.N.ua.call(this);
      this.oK();
      this.OJ = null
   };
   _.g.ma = function (a, b, c, d) {
      return this.Ck.add(String(a), b, !1, c, d)
   };
   _.g.Jr = function (a, b, c, d) {
      return this.Ck.add(String(a), b, !0, c, d)
   };
   _.g.Kc = function (a, b, c, d) {
      return this.Ck.remove(String(a), b, c, d)
   };
   _.g.tN = function (a) {
      return gk(this.Ck, a)
   };
   _.g.oK = function () {
      this.Ck && this.Ck.removeAll(void 0)
   };
   _.g.ou = function (a, b, c) {
      a = this.Ck.ye[String(a)];
      if (!a) return !0;
      a = a.concat();
      for (var d = !0, e = 0; e < a.length; ++e) {
         var f = a[e];
         if (f && !f.ew && f.capture == b) {
            var h = f.listener,
               k = f.Uf || f.src;
            f.yy && this.tN(f);
            d = !1 !== h.call(k, c) && d
         }
      }
      return d && !c.defaultPrevented
   };
   _.g.Xq = function (a, b, c, d) {
      return this.Ck.Xq(String(a), b, c, d)
   };
   _.g.hasListener = function (a, b) {
      return this.Ck.hasListener(void 0 !== a ? String(a) : void 0, b)
   };
   _.Qa.Pa = {};
   _.Qa.Pa.Vi = {};
   _.Qa.Pa.Vi.n6 = function (a) {
      try {
         return !!a.document
      } catch (b) {}
      return !1
   };
   _.Qa.Pa.Vi.LT = function (a) {
      var b = a.parent;
      return a != b && _.Qa.Pa.Vi.n6(b) ? _.Qa.Pa.Vi.LT(b) : a
   };
   _.Qa.Pa.Vi.Opa = function (a) {
      var b = a.userAgent || "";
      a = a.product || "";
      return 0 != b.indexOf("Opera") && -1 == b.indexOf("WebKit") && "Gecko" == a && 0 < b.indexOf("rv:1.")
   };
   _.Qa.Pa.Vi.Dv = function (a, b, c) {
      for (var d = [], e = 2, f = arguments.length; e < f; ++e) d.push(arguments[e]);
      return function () {
         for (var h = d.slice(), k = 0, l = arguments.length; k < l; ++k) h.push(arguments[k]);
         return b.apply(a, h)
      }
   };
   var Es, Fs;
   _.ws = function (a, b) {
      return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
   };
   _.xs = function (a, b) {
      this.x = void 0 !== a ? a : 0;
      this.y = void 0 !== b ? b : 0
   };
   _.g = _.xs.prototype;
   _.g.clone = function () {
      return new _.xs(this.x, this.y)
   };
   _.g.equals = function (a) {
      return a instanceof _.xs && _.ws(this, a)
   };
   _.g.ceil = function () {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      return this
   };
   _.g.floor = function () {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      return this
   };
   _.g.round = function () {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      return this
   };
   _.g.translate = function (a, b) {
      a instanceof _.xs ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), "number" === typeof b && (this.y += b));
      return this
   };
   _.g.scale = function (a, b) {
      this.x *= a;
      this.y *= "number" === typeof b ? b : a;
      return this
   };
   _.ys = function (a) {
      return a.scrollingElement ? a.scrollingElement : !_.vd && _.ie(a) ? a.documentElement : a.body || a.documentElement
   };
   _.zs = function (a) {
      var b = _.ys(a);
      a = a.parentWindow || a.defaultView;
      return _.qd && a.pageYOffset != b.scrollTop ? new _.xs(b.scrollLeft, b.scrollTop) : new _.xs(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
   };
   _.As = function (a, b, c, d) {
      return _.be(a.Hb, b, c, d)
   };
   _.Bs = function (a) {
      if (a instanceof _.Wc && a.constructor === _.Wc) return a.vY;
      _.Vb(a);
      return "type_error:SafeStyle"
   };
   _.Cs = function (a) {
      if (a instanceof _.cd && a.constructor === _.cd) return a.uY;
      _.Vb(a);
      return "type_error:SafeStyleSheet"
   };
   _.Ds = function (a) {
      return Number(_.Pd) >= a
   };
   Es = function (a) {
      return String(a).replace(/\-([a-z])/g, function (b, c) {
         return c.toUpperCase()
      })
   };
   Fs = function (a) {
      return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
         return c + d.toUpperCase()
      })
   };
   _.Gs = function (a, b, c) {
      return _.ne(document, arguments)
   };
   _.Hs = function (a, b, c, d) {
      this.top = a;
      this.right = b;
      this.bottom = c;
      this.left = d
   };
   _.g = _.Hs.prototype;
   _.g.Xb = function () {
      return this.right - this.left
   };
   _.g.Vc = function () {
      return this.bottom - this.top
   };
   _.g.clone = function () {
      return new _.Hs(this.top, this.right, this.bottom, this.left)
   };
   _.g.contains = function (a) {
      return this && a ? a instanceof _.Hs ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
   };
   _.g.expand = function (a, b, c, d) {
      _.Rb(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
      return this
   };
   _.g.ceil = function () {
      this.top = Math.ceil(this.top);
      this.right = Math.ceil(this.right);
      this.bottom = Math.ceil(this.bottom);
      this.left = Math.ceil(this.left);
      return this
   };
   _.g.floor = function () {
      this.top = Math.floor(this.top);
      this.right = Math.floor(this.right);
      this.bottom = Math.floor(this.bottom);
      this.left = Math.floor(this.left);
      return this
   };
   _.g.round = function () {
      this.top = Math.round(this.top);
      this.right = Math.round(this.right);
      this.bottom = Math.round(this.bottom);
      this.left = Math.round(this.left);
      return this
   };
   _.g.translate = function (a, b) {
      a instanceof _.xs ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, "number" === typeof b && (this.top += b, this.bottom += b));
      return this
   };
   _.g.scale = function (a, b) {
      b = "number" === typeof b ? b : a;
      this.left *= a;
      this.right *= a;
      this.top *= b;
      this.bottom *= b;
      return this
   };
   var Ks, Is, Ps, Ss, dt, Rs;
   _.Js = function (a, b, c) {
      if ("string" === typeof b)(b = Is(a, b)) && (a.style[b] = c);
      else
         for (var d in b) {
            c = a;
            var e = b[d],
               f = Is(c, d);
            f && (c.style[f] = e)
         }
   };
   Ks = {};
   Is = function (a, b) {
      var c = Ks[b];
      if (!c) {
         var d = Es(b);
         c = d;
         void 0 === a.style[d] && (d = (_.vd ? "Webkit" : _.ud ? "Moz" : _.qd ? "ms" : null) + Fs(d), void 0 !== a.style[d] && (c = d));
         Ks[b] = c
      }
      return c
   };
   _.Ls = function (a, b) {
      var c = a.style[Es(b)];
      return "undefined" !== typeof c ? c : a.style[Is(a, b)] || ""
   };
   _.Ms = function (a, b) {
      var c = _.$d(a);
      return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
   };
   _.Ns = function (a, b) {
      return a.currentStyle ? a.currentStyle[b] : null
   };
   _.Os = function (a, b) {
      return _.Ms(a, b) || _.Ns(a, b) || a.style && a.style[b]
   };
   Ps = function (a) {
      try {
         return a.getBoundingClientRect()
      } catch (b) {
         return {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
         }
      }
   };
   _.Ts = function (a, b) {
      b = b || _.ys(document);
      var c = b || _.ys(document);
      var d = _.Qs(a),
         e = _.Qs(c);
      if (_.qd && !_.Ds(9)) {
         var f = Rs(c, "borderLeft");
         var h = Rs(c, "borderRight");
         var k = Rs(c, "borderTop"),
            l = Rs(c, "borderBottom");
         h = new _.Hs(k, h, l, f)
      } else f = _.Ms(c, "borderLeftWidth"), h = _.Ms(c, "borderRightWidth"), k = _.Ms(c, "borderTopWidth"), l = _.Ms(c, "borderBottomWidth"), h = new _.Hs(parseFloat(k), parseFloat(h), parseFloat(l), parseFloat(f));
      c == _.ys(document) ? (f = d.x - c.scrollLeft, d = d.y - c.scrollTop, _.qd && !_.Ds(10) && (f += h.left, d += h.top)) :
         (f = d.x - e.x - h.left, d = d.y - e.y - h.top);
      a = Ss(a);
      e = c.clientHeight - a.height;
      h = c.scrollLeft;
      k = c.scrollTop;
      h += Math.min(f, Math.max(f - (c.clientWidth - a.width), 0));
      k += Math.min(d, Math.max(d - e, 0));
      c = new _.xs(h, k);
      b.scrollLeft = c.x;
      b.scrollTop = c.y
   };
   _.Qs = function (a) {
      var b = _.$d(a),
         c = new _.xs(0, 0);
      var d = b ? _.$d(b) : document;
      d = !_.qd || _.Ds(9) || _.ie(_.ae(d).Hb) ? d.documentElement : d.body;
      if (a == d) return c;
      a = Ps(a);
      b = _.zs(_.ae(b).Hb);
      c.x = a.left + b.x;
      c.y = a.top + b.y;
      return c
   };
   _.Vs = function (a, b) {
      var c = new _.xs(0, 0),
         d = _.je(_.$d(a));
      if (!_.od(d, "parent")) return c;
      do {
         var e = d == b ? _.Qs(a) : _.Us(a);
         c.x += e.x;
         c.y += e.y
      } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
      return c
   };
   _.Us = function (a) {
      a = Ps(a);
      return new _.xs(a.left, a.top)
   };
   _.Xs = function (a, b, c) {
      if (b instanceof _.Vd) c = b.height, b = b.width;
      else if (void 0 == c) throw Error("R");
      a.style.width = _.Ws(b, !0);
      a.style.height = _.Ws(c, !0)
   };
   _.Ws = function (a, b) {
      "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
      return a
   };
   _.Ys = function (a) {
      var b = Ss;
      if ("none" != _.Os(a, "display")) return b(a);
      var c = a.style,
         d = c.display,
         e = c.visibility,
         f = c.position;
      c.visibility = "hidden";
      c.position = "absolute";
      c.display = "inline";
      a = b(a);
      c.display = d;
      c.position = f;
      c.visibility = e;
      return a
   };
   Ss = function (a) {
      var b = a.offsetWidth,
         c = a.offsetHeight,
         d = _.vd && !b && !c;
      return (void 0 === b || d) && a.getBoundingClientRect ? (a = Ps(a), new _.Vd(a.right - a.left, a.bottom - a.top)) : new _.Vd(b, c)
   };
   _.Zs = function (a, b) {
      a.style.display = b ? "" : "none"
   };
   _.at = function (a) {
      var b = _.ae(void 0),
         c = b.ub();
      if (_.qd && c.createStyleSheet) b = c.createStyleSheet(), _.$s(b, a);
      else {
         c = _.As(b, "HEAD")[0];
         if (!c) {
            var d = _.As(b, "BODY")[0];
            c = b.va("HEAD");
            d.parentNode.insertBefore(c, d)
         }
         d = b.va("STYLE");
         var e;
         (e = _.Ud('style[nonce],link[rel="stylesheet"][nonce]')) && d.setAttribute("nonce", e);
         _.$s(d, a);
         b.appendChild(c, d)
      }
   };
   _.$s = function (a, b) {
      b = _.Cs(b);
      _.qd && void 0 !== a.cssText ? a.cssText = b : _.r.trustedTypes ? _.xe(a, b) : a.innerHTML = b
   };
   _.bt = _.ud ? "MozUserSelect" : _.vd || _.rd ? "WebkitUserSelect" : null;
   _.ct = function (a, b) {
      if (/^\d+px?$/.test(b)) return parseInt(b, 10);
      var c = a.style.left,
         d = a.runtimeStyle.left;
      a.runtimeStyle.left = a.currentStyle.left;
      a.style.left = b;
      b = a.style.pixelLeft;
      a.style.left = c;
      a.runtimeStyle.left = d;
      return +b
   };
   dt = {
      thin: 2,
      medium: 4,
      thick: 6
   };
   Rs = function (a, b) {
      if ("none" == _.Ns(a, b + "Style")) return 0;
      b = _.Ns(a, b + "Width");
      return b in dt ? dt[b] : _.ct(a, b)
   };
   _.et = function (a) {
      return "rtl" == _.Os(a, "direction")
   };
   _.ft = function (a, b, c, d) {
      this.left = a;
      this.top = b;
      this.width = c;
      this.height = d
   };
   _.g = _.ft.prototype;
   _.g.clone = function () {
      return new _.ft(this.left, this.top, this.width, this.height)
   };
   _.g.iI = _.ea(7);
   _.g.intersects = function (a) {
      return this.left <= a.left + a.width && a.left <= this.left + this.width && this.top <= a.top + a.height && a.top <= this.top + this.height
   };
   _.g.contains = function (a) {
      return a instanceof _.xs ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
   };
   _.g.distance = function (a) {
      var b = a.x < this.left ? this.left - a.x : Math.max(a.x - (this.left + this.width), 0);
      a = a.y < this.top ? this.top - a.y : Math.max(a.y - (this.top + this.height), 0);
      return Math.sqrt(b * b + a * a)
   };
   _.g.getSize = function () {
      return new _.Vd(this.width, this.height)
   };
   _.g.getCenter = function () {
      return new _.xs(this.left + this.width / 2, this.top + this.height / 2)
   };
   _.g.ceil = function () {
      this.left = Math.ceil(this.left);
      this.top = Math.ceil(this.top);
      this.width = Math.ceil(this.width);
      this.height = Math.ceil(this.height);
      return this
   };
   _.g.floor = function () {
      this.left = Math.floor(this.left);
      this.top = Math.floor(this.top);
      this.width = Math.floor(this.width);
      this.height = Math.floor(this.height);
      return this
   };
   _.g.round = function () {
      this.left = Math.round(this.left);
      this.top = Math.round(this.top);
      this.width = Math.round(this.width);
      this.height = Math.round(this.height);
      return this
   };
   _.g.translate = function (a, b) {
      a instanceof _.xs ? (this.left += a.x, this.top += a.y) : (this.left += a, "number" === typeof b && (this.top += b));
      return this
   };
   _.g.scale = function (a, b) {
      b = "number" === typeof b ? b : a;
      this.left *= a;
      this.width *= a;
      this.top *= b;
      this.height *= b;
      return this
   };
   _.gt = function (a) {
      return _.Os(a, "position")
   };
   _.ht = function (a, b, c) {
      if (b instanceof _.xs) {
         var d = b.x;
         b = b.y
      } else d = b, b = c;
      a.style.left = _.Ws(d, !1);
      a.style.top = _.Ws(b, !1)
   };
   _.it = function (a, b) {
      a = a.style;
      "opacity" in a ? a.opacity = b : "MozOpacity" in a ? a.MozOpacity = b : "filter" in a && (a.filter = "" === b ? "" : "alpha(opacity=" + 100 * Number(b) + ")")
   };
   _.jt = function () {
      if (_.yd) {
         var a = /Windows NT ([0-9.]+)/;
         return (a = a.exec(_.wb())) ? a[1] : "0"
      }
      return _.xd ? (a = /1[0|1][_.][0-9_.]+/, (a = a.exec(_.wb())) ? a[0].replace(/_/g, ".") : "10") : _.Ad ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(_.wb())) ? a[1] : "") : _.Bd || _.Cd || _.Dd ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(_.wb())) ? a[1].replace(/_/g, ".") : "") : ""
   }();
   var kt;
   kt = function (a) {
      return (a = a.exec(_.wb())) ? a[1] : ""
   };
   _.lt = function () {
      if (_.ri) return kt(/Firefox\/([0-9.]+)/);
      if (_.qd || _.rd || _.pd) return _.Kd;
      if (_.vi) {
         if (_.Nb() || _.Ob()) {
            var a = kt(/CriOS\/([0-9.]+)/);
            if (a) return a
         }
         return kt(/Chrome\/([0-9.]+)/)
      }
      if (_.wi && !_.Nb()) return kt(/Version\/([0-9.]+)/);
      if (_.si || _.ti) {
         if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(_.wb())) return a[1] + "." + a[2]
      } else if (_.ui) return (a = kt(/Android\s+([0-9.]+)/)) ? a : kt(/Version\/([0-9.]+)/);
      return ""
   }();
   var mt, nt, qt;
   _.ft.prototype.iI = _.hb(7, function (a) {
      var b = Math.max(this.left, a.left),
         c = Math.min(this.left + this.width, a.left + a.width);
      if (b <= c) {
         var d = Math.max(this.top, a.top);
         a = Math.min(this.top + this.height, a.top + a.height);
         d <= a && (this.left = b, this.top = d, this.width = c - b, this.height = a - d)
      }
   });
   _.Zd.prototype.yH = _.hb(2, function () {
      return _.he(this.getWindow())
   });
   mt = function (a, b) {
      return new _.xs(a.x - b.x, a.y - b.y)
   };
   nt = function (a) {
      if (_.qd && !_.Ds(8)) return a.offsetParent;
      var b = _.$d(a),
         c = _.Os(a, "position"),
         d = "fixed" == c || "absolute" == c;
      for (a = a.parentNode; a && a != b; a = a.parentNode)
         if (11 == a.nodeType && a.host && (a = a.host), c = _.Os(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
      return null
   };
   _.ot = function (a) {
      for (var b = new _.Hs(0, Infinity, Infinity, 0), c = _.ae(a), d = c.ub().body, e = c.ub().documentElement, f = _.ys(c.Hb); a = nt(a);)
         if (!(_.qd && 0 == a.clientWidth || _.vd && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != _.Os(a, "overflow")) {
            var h = _.Qs(a),
               k = new _.xs(a.clientLeft, a.clientTop);
            h.x += k.x;
            h.y += k.y;
            b.top = Math.max(b.top, h.y);
            b.right = Math.min(b.right, h.x + a.clientWidth);
            b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
            b.left = Math.max(b.left, h.x)
         } d = f.scrollLeft;
      f = f.scrollTop;
      b.left = Math.max(b.left, d);
      b.top = Math.max(b.top, f);
      c = c.yH();
      b.right = Math.min(b.right, d + c.width);
      b.bottom = Math.min(b.bottom, f + c.height);
      return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
   };
   _.pt = function (a) {
      var b = _.Qs(a);
      a = _.Ys(a);
      return new _.ft(b.x, b.y, a.width, a.height)
   };
   qt = function (a, b) {
      return (b & 8 && _.et(a) ? b ^ 4 : b) & -9
   };
   _.rt = function (a, b, c, d, e, f, h, k, l) {
      var m;
      if (m = c.offsetParent) {
         var n = "HTML" == m.tagName || "BODY" == m.tagName;
         if (!n || "static" != _.gt(m)) {
            var p = _.Qs(m);
            if (!n) {
               n = _.et(m);
               var q;
               if (q = n) {
                  q = _.wi && 0 <= _.Uc(_.lt, 10);
                  var t = _.Ed && 0 <= _.Uc(_.jt, 10),
                     v = _.vi && 0 <= _.Uc(_.lt, 85);
                  q = _.ud || q || t || v
               }
               n = q ? -m.scrollLeft : n && !_.td && "visible" != _.Os(m, "overflowX") ? m.scrollWidth - m.clientWidth - m.scrollLeft : m.scrollLeft;
               p = mt(p, new _.xs(n, m.scrollTop))
            }
         }
      }
      m = p || new _.xs;
      p = _.pt(a);
      (n = _.ot(a)) && p.iI(new _.ft(n.left, n.top, n.right - n.left, n.bottom -
         n.top));
      n = _.ae(a);
      t = _.ae(c);
      n.ub() != t.ub() && (q = n.ub().body, t = _.Vs(q, t.getWindow()), t = mt(t, _.Qs(q)), !_.qd || _.Ds(9) || _.ie(n.Hb) || (t = mt(t, _.zs(n.Hb))), p.left += t.x, p.top += t.y);
      a = qt(a, b);
      b = p.left;
      a & 4 ? b += p.width : a & 2 && (b += p.width / 2);
      b = new _.xs(b, p.top + (a & 1 ? p.height : 0));
      b = mt(b, m);
      e && (b.x += (a & 4 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
      if (h)
         if (l) var u = l;
         else if (u = _.ot(c)) u.top -= m.y, u.right -= m.x, u.bottom -= m.y, u.left -= m.x;
      e = u;
      l = b.clone();
      u = qt(c, d);
      d = _.Ys(c);
      a = k ? k.clone() : d.clone();
      k = l;
      l = a;
      k = k.clone();
      l = l.clone();
      a = 0;
      if (f ||
         0 != u) u & 4 ? k.x -= l.width + (f ? f.right : 0) : u & 2 ? k.x -= l.width / 2 : f && (k.x += f.left), u & 1 ? k.y -= l.height + (f ? f.bottom : 0) : f && (k.y += f.top);
      h && (e ? (f = k, u = l, a = 0, 65 == (h & 65) && (f.x < e.left || f.x >= e.right) && (h &= -2), 132 == (h & 132) && (f.y < e.top || f.y >= e.bottom) && (h &= -5), f.x < e.left && h & 1 && (f.x = e.left, a |= 1), h & 16 && (b = f.x, f.x < e.left && (f.x = e.left, a |= 4), f.x + u.width > e.right && (u.width = Math.min(e.right - f.x, b + u.width - e.left), u.width = Math.max(u.width, 0), a |= 4)), f.x + u.width > e.right && h & 1 && (f.x = Math.max(e.right - u.width, e.left), a |= 1), h & 2 && (a |= (f.x <
         e.left ? 16 : 0) | (f.x + u.width > e.right ? 32 : 0)), f.y < e.top && h & 4 && (f.y = e.top, a |= 2), h & 32 && (b = f.y, f.y < e.top && (f.y = e.top, a |= 8), f.y + u.height > e.bottom && (u.height = Math.min(e.bottom - f.y, b + u.height - e.top), u.height = Math.max(u.height, 0), a |= 8)), f.y + u.height > e.bottom && h & 4 && (f.y = Math.max(e.bottom - u.height, e.top), a |= 2), h & 8 && (a |= (f.y < e.top ? 64 : 0) | (f.y + u.height > e.bottom ? 128 : 0)), h = a) : h = 256, a = h);
      f = new _.ft(0, 0, 0, 0);
      f.left = k.x;
      f.top = k.y;
      f.width = l.width;
      f.height = l.height;
      h = a;
      h & 496 || (_.ht(c, new _.xs(f.left, f.top)), a = f.getSize(),
         _.Wd(d, a) || (f = a, c = c.style, _.ud ? c.MozBoxSizing = "border-box" : _.vd ? c.WebkitBoxSizing = "border-box" : c.boxSizing = "border-box", c.width = Math.max(f.width, 0) + "px", c.height = Math.max(f.height, 0) + "px"));
      return h
   };
   var st;
   st = function (a, b, c) {
      return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
   };
   _.tt = function (a, b, c, d) {
      return Array.prototype.splice.apply(a, st(arguments, 1))
   };
   _.ut = function (a, b, c) {
      if (null !== a && b in a) throw Error("k`" + b);
      a[b] = c
   };
   _.vt = function (a, b) {
      var c = b || document;
      if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
      else {
         c = document;
         var d = b || c;
         a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : _.be(c, "*", a, b)[0] || null
      }
      return a || null
   };
   _.wt = function (a, b) {
      b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
   };
   _.xt = function (a) {
      var b;
      if (_.Qd && (b = a.parentElement)) return b;
      b = a.parentNode;
      return _.ve(b) ? b : null
   };
   _.zt = function (a, b, c) {
      a && !c && (a = a.parentNode);
      for (c = 0; a;) {
         if (b(a)) return a;
         a = a.parentNode;
         c++
      }
      return null
   };
   _.At = function (a) {
      _.Jj.call(this);
      this.Ke = a;
      this.lc = {}
   };
   _.ab(_.At, _.Jj);
   var Bt = [];
   _.At.prototype.ma = function (a, b, c, d) {
      return this.zv(a, b, c, d)
   };
   _.At.prototype.zv = function (a, b, c, d, e) {
      Array.isArray(b) || (b && (Bt[0] = b.toString()), b = Bt);
      for (var f = 0; f < b.length; f++) {
         var h = _.lk(a, b[f], c || this.handleEvent, d || !1, e || this.Ke || this);
         if (!h) break;
         this.lc[h.key] = h
      }
      return this
   };
   _.At.prototype.Jr = function (a, b, c, d) {
      return Ct(this, a, b, c, d)
   };
   var Ct = function (a, b, c, d, e, f) {
      if (Array.isArray(c))
         for (var h = 0; h < c.length; h++) Ct(a, b, c[h], d, e, f);
      else {
         b = _.kk(b, c, d || a.handleEvent, e, f || a.Ke || a);
         if (!b) return a;
         a.lc[b.key] = b
      }
      return a
   };
   _.At.prototype.Kc = function (a, b, c, d, e) {
      if (Array.isArray(b))
         for (var f = 0; f < b.length; f++) this.Kc(a, b[f], c, d, e);
      else c = c || this.handleEvent, d = _.Rb(d) ? !!d.capture : !!d, e = e || this.Ke || this, c = _.mk(c), d = !!d, b = _.ak(a) ? a.Xq(b, c, d, e) : a ? (a = _.ok(a)) ? a.Xq(b, c, d, e) : null : null, b && (_.tk(b), delete this.lc[b.key]);
      return this
   };
   _.At.prototype.removeAll = function () {
      _.pb(this.lc, function (a, b) {
         this.lc.hasOwnProperty(b) && _.tk(a)
      }, this);
      this.lc = {}
   };
   _.At.prototype.ua = function () {
      _.At.N.ua.call(this);
      this.removeAll()
   };
   _.At.prototype.handleEvent = function () {
      throw Error("S");
   };
   _.Dt = function (a) {
      if (1 == a.nodeType) return _.Us(a);
      a = a.changedTouches ? a.changedTouches[0] : a;
      return new _.xs(a.clientX, a.clientY)
   };
   _.Et = function (a) {
      this.qa = a;
      this.wa = a.Ic()
   };
   _.Et.prototype.Jv = function () {
      Ft(this)
   };
   var Ft = function (a) {
      var b = a.qa.yd();
      if (a.wa.anchorBox && b && b.getIframeEl()) b = _.Qs(b.getIframeEl()), a.wa.anchorBox.left += b.x, a.wa.anchorBox.top += b.y;
      else {
         b = a.wa.anchor;
         if ("_default" != b && "_iframe" != b) {
            var c = _.ze(document, b);
            if (c) a.wa.anchorBox = _.pt(c);
            else {
               _.Mg.error("Anchor not found in DOM: " + b + '. Falling back to "_default".');
               a.wa.anchor = "_default";
               return
            }
         }
         "_iframe" == b && (b = _.he(), a.wa.anchorBox = new _.ft(0, 0, b.width, b.height))
      }
      a.wa.anchor = ""
   };
   _.Et.prototype.onBeforeParentOpen = _.Et.prototype.Jv;
   _.Gt = function (a) {
      _.Et.call(this, a)
   };
   _.E(_.Gt, _.Et);
   _.g = _.Gt.prototype;
   _.g.open = function () {
      var a = this.wa,
         b = document.createElement("ins");
      document.getElementById(a.container).appendChild(b);
      b.style.display = "block";
      _.Js(b, a.containerCss);
      this.qa.setSiteEl(b);
      this.qa.wh(b)
   };
   _.g.ee = function () {
      document.getElementById(this.qa.id).style.height = this.qa.height + "px"
   };
   _.g.close = function () {
      _.te(this.qa.getSiteEl());
      _.te(this.Nh);
      this.Nh = null
   };
   _.g.WC = _.ea(5);
   _.g.kj = function () {
      if (this.Nh) return this.Nh;
      var a = this.wa;
      !a.anchorBox && a.anchor && Ft(this);
      var b = this.qa.yd();
      if ("_default" == a.anchor && b) {
         var c = b.getSiteEl();
         c = _.pt(_.ze(document, c));
         a.anchorBox = c
      }
      if (!a.anchorBox) return _.Mg.error("No anchor box defined."), null;
      a = new _.xs(a.anchorBox.left, a.anchorBox.top);
      b && (b = _.Vs(b.getIframeEl(), window), this.mp = new _.xs, this.mp.x = b.x, this.mp.y = b.y, a.x += b.x, a.y += b.y, _.Ht(a));
      this.NE = a;
      b = _.It(this, !0);
      this.Nh = document.createElement("ins");
      this.Nh.style.cssText = b;
      document.body.appendChild(this.Nh);
      return this.Nh
   };
   _.It = function (a, b) {
      var c = a.wa;
      return "position: absolute !important;background-color: transparent !important;left: " + a.NE.x + "px !important;top: " + a.NE.y + "px !important;width: " + c.anchorBox.width + "px !important;height: " + c.anchorBox.height + "px !important;z-index: -10000 !important;display: " + (b ? "block" : "none") + " !important;"
   };
   _.Jt = function (a, b) {
      var c = 0,
         d = 0;
      if (b.pageX || b.pageY) c = b.pageX, d = b.pageY;
      else if (b.clientX || b.clientY) c = b.target ? b.target : b.srcElement, d = c.ownerDocument && c.ownerDocument.parentWindow ? c.ownerDocument.parentWindow : window, _.qd ? (c = d.document.documentElement.scrollLeft, d = d.document.documentElement.scrollTop) : (c = d.pageXOffset, d = d.pageYOffset), c = b.clientX + c, d = b.clientY + d;
      b = new _.xs(c, d);
      a = _.pt(a);
      return a = new _.Hs(a.top, a.left + a.width, a.top + a.height, a.left), a.contains(b)
   };
   _.Ht = function (a) {
      var b = window,
         c = document.body,
         d = _.Qs(c);
      b = c.currentStyle || b.getComputedStyle(c, "");
      b.position && "static" != b.position && (a.x -= d.x, a.y -= d.y)
   };
   _.Kt = function (a) {
      var b = a.qa.yd() && a.qa.yd().getSiteEl();
      b = b && b.style.zIndex ? parseInt(b.style.zIndex, 10) + 1 : 0;
      return Math.min(2147483647, Math.max(2E9, a.wa.zIndex || b))
   };
   var Lt, Mt, Nt;
   Lt = {
      "bottom-center": 1,
      "bottom-end": 13,
      "bottom-left": 1,
      "bottom-right": 5,
      "bottom-start": 9,
      "left-bottom": 1,
      "left-center": 0,
      "left-top": 0,
      "right-bottom": 5,
      "right-center": 4,
      "right-top": 4,
      "top-center": 0,
      "top-end": 12,
      "top-left": 0,
      "top-right": 4,
      "top-start": 8
   };
   Mt = {
      "bottom-center": !0,
      "top-center": !0
   };
   Nt = {
      "left-center": !0,
      "right-center": !0
   };
   _.Ot = function (a, b, c, d, e) {
      e = e || {
         x: 0,
         y: 0
      };
      if (Mt[b]) {
         var f = _.Ys(a).width / 2;
         e.x = "top-right" == d || "bottom-right" == d ? e.x + f : e.x - f
      }
      Mt[d] && (f = _.Ys(c).width / 2, e.x += f);
      Nt[b] && (f = _.Ys(a).height / 2, e.y = "right-bottom" == d || "left-bottom" == d ? e.y + f : e.y - f);
      Nt[d] && (e.y += _.Ys(c).height / 2);
      _.rt(c, Lt[d], a, Lt[b], new _.xs(e.x, e.y));
      d = _.zt(a, function (h) {
         if (h == document) return !1;
         h = _.gt(h);
         return !!h && "static" != h
      });
      c = b = 0;
      d && (c = _.Qs(d), b = -c.x, c = -c.y);
      a = a.style;
      parseInt(a.left, 10) < b && (a.left = b + "px");
      parseInt(a.top, 10) < c && (a.top = c +
         "px")
   };
   _.Pt = function (a) {
      _.Et.call(this, a.qa);
      this.Bh = a;
      this.rF = []
   };
   _.E(_.Pt, _.Gt);
   _.g = _.Pt.prototype;
   _.g.Jv = function () {
      this.Bh.Jv()
   };
   _.g.open = function () {
      this.Bh.open();
      (this.wa.closeClickDetection || this.wa.hideClickDetection) && Qt(this)
   };
   _.g.ee = function (a) {
      this.Bh.ee(a)
   };
   _.g.uX = function (a) {
      this.Bh.onRenderStart && this.Bh.onRenderStart(a)
   };
   _.g.close = function () {
      if (this.wa.closeClickDetection || this.wa.hideClickDetection) _.oc(this.rF, function (a) {
         _.tk(a)
      }), this.rF = [];
      this.Bh.close()
   };
   var Qt = function (a) {
      _.oc(["click", "touchstart"], (0, _.D)(function (b) {
         this.rF.push(_.lk(document, b, (0, _.D)(this.s6, this), !0))
      }, a))
   };
   _.Pt.prototype.s6 = function (a) {
      _.Jt(this.qa.getSiteEl(), a) || (this.wa.hideClickDetection && this.Bh.show ? this.Bh.show(!1) : this.close())
   };
   _.Pt.prototype.onBeforeParentOpen = _.Pt.prototype.Jv;
   _.Pt.prototype.open = _.Pt.prototype.open;
   _.Pt.prototype.onready = _.Pt.prototype.ee;
   _.Pt.prototype.onRenderStart = _.Pt.prototype.uX;
   _.Pt.prototype.close = _.Pt.prototype.close;
   var Iba, K7, L7;
   for (_.J7 = function (a) {
         return {
            Ic: function () {
               return a
            },
            yd: function () {
               return a.openerIframe
            }
         }
      }, Iba = function (a) {
         (new _.Et(_.J7(a))).Jv()
      }, K7 = "bubble circlepicker float hover hover-menu slide-menu".split(" "), L7 = 0; L7 < K7.length; L7++) _.wo[K7[L7]] = Iba;
   _.Yo = {};
   window.iframer = _.Yo;
   _.C("gapi.iframes.Context.prototype.ready", _.so.prototype.ready);
});
// Google Inc.
