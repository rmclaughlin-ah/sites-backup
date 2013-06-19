/*! Response 0.7.5 | @link responsejs.com | @author ryanve | @license MIT */
(function(e, n, p) {
  var j = e.jQuery || e.Zepto || e.ender || e.elo;
  "undefined" != typeof module && module.exports ? module.exports = p(j) : e[n] = p(j)
})(this, "Response", function(e) {
  function n(a) {
    throw new TypeError(a ? q + "." + a : q);
  }
  function p(a) {
    return "string" == typeof a ? u(a.split(" ")) : P(a) ? u(a) : []
  }
  function j(a, b, c) {
    if (null == a) return a;
    for (var d = 0, g = a.length; d < g;) b.call(c || a[d], a[d], d++, a);
    return a
  }
  function Q(a, b, c) {
    var d = [],
      g = a.length,
      r = 0,
      f;
    b = b || "";
    for (c = c || ""; r < g;) f = a[r++], null == f || d.push(b + f + c);
    return d
  }
  function u(a, b, c) {
    var d, g = 0,
      r = 0,
      f, e = [],
      j, h = "function" == typeof b;
    if (!a) return e;
    c = (j = !0 === c) ? null : c;
    for (d = a.length; r < d; r++) f = a[r], j === !(h ? b.call(c, f, r, a) : b ? typeof f === b : f) && (e[g++] = f);
    return e
  }
  function R(a, b) {
    if (!a || !b) return a;
    var c, d = b.length;
    if ("function" != typeof b && "number" == typeof d && d === d) {
      for (c = 0; c < d; c++) void 0 === b[c] || (a[c] = b[c]);
      a.length > c || (a.length = c)
    } else for (c in b) ua.call(b, c) && void 0 !== b[c] && (a[c] = b[c]);
    return a
  }
  function v(a, b, c) {
    if (null == a) return a;
    "object" == typeof a && !a.nodeType && "number" == typeof a.length && a.length === a.length ? j(a, b, c) : b.call(c || a, a);
    return a
  }
  function E(a) {
    return function(b, c) {
      var d, g = a();
      d = g >= (b || 0);
      return !c ? d : d && g <= c
    }
  }
  function w(a) {
    var b = k.devicePixelRatio;
    if (null == a) return b || (w(2) ? 2 : w(1.5) ? 1.5 : w(1) ? 1 : 0);
    if (!isFinite(a)) return !1;
    if (b && 0 < b) return b >= a;
    a = "only all and (min--moz-device-pixel-ratio:" + a + ")";
    return S(a).matches ? !0 : !! S(a.replace("-moz-", "")).matches
  }
  function aa(a) {
    return a.replace(T, "$1").replace(va, function(a, c) {
      return c.toUpperCase()
    })
  }
  function F(a) {
    return "data-" + (a ? a.replace(T, "$1").replace(wa, "$1-$2").toLowerCase() : a)
  }
  function ba(a) {
    var b;
    return !a || "string" != typeof a ? a : "true" === a ? !0 : "false" === a ? !1 : "undefined" === a ? b : "null" === a ? null : (b = parseFloat(a)) === +b ? b : a
  }
  function G(a) {
    return !a ? !1 : 1 === a.nodeType ? a : a[0] && 1 === a[0].nodeType ? a[0] : !1
  }
  function H(a, b) {
    var c = arguments.length,
      d = G(this),
      g = {},
      e = !1,
      f;
    if (c) {
      P(a) && (e = !0, a = a[0]);
      if ("string" === typeof a) {
        a = F(a);
        if (1 === c) return g = d.getAttribute(a), e ? ba(g) : g;
        if (this === d || 2 > (f = this.length || 1)) d.setAttribute(a, b);
        else for (; f--;) f in this && H.apply(this[f], arguments)
      } else if (a instanceof Object) for (f in a) a.hasOwnProperty(f) && H.call(this, f, a[f]);
      return this
    }
    if (d.dataset && DOMStringMap) return d.dataset;
    j(d.attributes, function(a) {
      if (a && (f = String(a.name).match(T))) g[aa(f[1])] = a.value
    });
    return g
  }
  function ca(a) {
    this && "string" === typeof a && (a = p(a), v(this, function(b) {
      j(a, function(a) {
        a && b.removeAttribute(F(a))
      })
    }));
    return this
  }
  function I(a, b, c) {
    return H.apply(a, xa.call(arguments, 1))
  }
  function da(a, b) {
    return ca.call(a, b)
  }
  function ea(a) {
    for (var b, c = [], d = 0, g = a.length; d < g;)(b = a[d++]) && c.push("[" + F(b.replace(U, "").replace(".", "\\.")) + "]");
    return c.join()
  }
  function V(a, b) {
    var c = a.getBoundingClientRect ? a.getBoundingClientRect() : {};
    b = "number" == typeof b ? b || 0 : 0;
    return {
      top: (c.top || 0) - b,
      left: (c.left || 0) - b,
      bottom: (c.bottom || 0) + b,
      right: (c.right || 0) + b
    }
  }
  function W(a, b) {
    var c = V(G(a), b);
    return !!c && 0 <= c.bottom && c.top <= x() && 0 <= c.right && c.left <= y()
  }
  function fa(a) {
    var b = {
      img: 1,
      input: 1,
      source: 3,
      embed: 3,
      track: 3,
      iframe: 5,
      audio: 5,
      video: 5,
      script: 5
    }[a.tagName.toLowerCase()] || -1;
    return 4 > b ? b : "string" === typeof a.getAttribute("src") ? 5 : -5
  }
  function ga(a, b, c) {
    var d;
    (!a || null == b) && n("store");
    c = "string" == typeof c && c;
    v(a, function(a) {
      d = c ? a.getAttribute(c) : 0 < fa(a) ? a.getAttribute("src") : a.innerHTML;
      null == d ? da(a, b) : I(a, b, d)
    });
    return h
  }
  function X(a, b) {
    var c = [];
    a && b && j(p(b), function(b) {
      c.push(I(a, b))
    }, a);
    return c
  }
  function Y(a) {
    z.on("resize", a);
    return h
  }
  function ha(a) {
    v(a, function(a) {
      "object" == typeof a || n("create @args");
      var c = Z(ia).configure(a),
        d, g = c.verge;
      a = c.breakpoints;
      var e = J("scroll"),
        f = J("resize");
      a.length && (d = a[0] || a[1] || !1, K(function() {
        function a() {
          c.reset();
          j(c.$e, function(a, b) {
            c[b].decideValue().updateDOM()
          }).trigger(h)
        }
        function b() {
          j(c.$e, function(a, b) {
            W(c[b].$e, g) && c[b].updateDOM()
          })
        }
        var h = $.allLoaded,
          k = !! c.lazy;
        j(c.target().$e, function(a, b) {
          c[b] = Z(c).prepareData(a);
          (!k || W(c[b].$e, g)) && c[b].updateDOM()
        });
        c.dynamic && (c.custom || d < A) && Y(a, f);
        k && (z.on(e, b), c.$e.one(h, function() {
          z.off(e, b)
        }))
      }))
    });
    return h
  }
  function ja(a, b) {
    if ("function" == typeof a && a.fn) {
      if (b || void 0 === a.fn.dataset) a.fn.dataset = H;
      if (b || void 0 === a.fn.deletes) a.fn.deletes = ca;
      var c = a.fn;
      j(["inX", "inY", "inViewport"], function(d) {
        (b || !c[d]) && (c[d] = function(b, c) {
          return a(u(this, function(a) {
            return !!a && !c === h[d](a, b)
          }))
        })
      })
    }
    return h
  }
  if ("function" != typeof e) try {
    console.log("Response was unable to run due to missing dependency.")
  } catch (Fa) {}
  var L = this,
    h, q = "Response",
    ya = L[q],
    ka = "init" + q,
    k = window,
    la = document,
    l = la.documentElement,
    K = e.domReady || e,
    z = e(k),
    B = k.screen,
    P = Array.isArray ||
  function(a) {
    return a instanceof Array
  }, ua = {}.hasOwnProperty, xa = [].slice, za = [].concat, ma = [].map, na = ma ?
  function(a, b, c) {
    return ma.call(a, b, c)
  } : function(a, b, c) {
    var d, g = a.length,
      e = [];
    for (d = 0; d < g; d++) d in a && (e[d] = b.call(c, a[d], d, a));
    return e
  }, oa = {
    width: [0, 320, 481, 641, 961, 1025, 1281],
    height: [0, 481],
    ratio: [1, 1.5, 2]
  }, ia, m, s, C = {}, t = {}, pa = {}, M = {
    all: []
  }, Aa = 1, N = B.width, O = B.height, A = N > O ? N : O, Ba = N + O - A, B = function() {
    return N
  }, qa = function() {
    return O
  }, Ca = /[^a-z0-9_\-\.]/gi, U = /^[\W\s]+|[\W\s]+$|/g, wa = /([a-z])([A-Z])/g, va = /-(.)/g, T = /^data-(.+)$/, Z = Object.create ||
  function(a) {
    function b() {}
    b.prototype = a;
    return new b
  }, J = function(a, b) {
    b = b || q;
    return a.replace(U, "") + "." + b.replace(U, "")
  }, $ = {
    allLoaded: J("allLoaded"),
    crossover: J("crossover")
  }, S = (m = k.matchMedia || k.msMatchMedia) ||
  function() {
    return {}
  }, y, ra = k;
  s = l.clientWidth;
  var D = ra.innerWidth;
  y = m && s < D && !0 === m("(min-width:" + D + "px)").matches ?
  function() {
    return ra.innerWidth
  } : function() {
    return l.clientWidth
  };
  var x, sa = k;
  s = l.clientHeight;
  D = sa.innerHeight;
  x = m && s < D && !0 === m("(min-height:" + D + "px)").matches ?
  function() {
    return sa.innerHeight
  } : function() {
    return l.clientHeight
  };
  m = E(y);
  s = E(x);
  C.band = E(B);
  C.wave = E(qa);
  var Da = function(a) {
      return "string" == typeof a ? a.toLowerCase().replace(Ca, "") : ""
    },
    ta = $.crossover,
    Ea = Math.min;
  ia = {
    $e: 0,
    mode: 0,
    breakpoints: null,
    prefix: null,
    prop: "width",
    keys: [],
    dynamic: null,
    custom: 0,
    values: [],
    fn: 0,
    verge: null,
    newValue: 0,
    currValue: 1,
    aka: null,
    lazy: null,
    i: 0,
    uid: null,
    reset: function() {
      for (var a = this.breakpoints, b = a.length, c = 0; !c && b--;) this.fn(a[b]) && (c = b);
      c !== this.i && (z.trigger(ta).trigger(this.prop + ta), this.i = c || 0);
      return this
    },
    configure: function(a) {
      R(this, a);
      var b, c, d = !0;
      b = this.prop;
      this.uid = Aa++;
      this.verge = isFinite(this.verge) ? this.verge : Ea(A, 500);
      this.fn = t[b] || n("create @fn");
      "boolean" != typeof this.dynamic && (this.dynamic = "device" !== b.substring(0, 6));
      this.custom = pa[b];
      c = this.prefix ? u(na(p(this.prefix), Da)) : ["min-" + b + "-"];
      a = 1 < c.length ? c.slice(1) : 0;
      this.prefix = c[0];
      c = this.breakpoints;
      P(c) ? (j(c, function(a) {
        if (!a && 0 !== a) throw "invalid breakpoint";
        d = d && isFinite(a)
      }), c = d ? c.sort(function(a, b) {
        return a - b
      }) : c, c.length || n("create @breakpoints")) : c = oa[b] || oa[b.split("-").pop()] || n("create @prop");
      this.breakpoints = d ? u(c, function(a) {
        return a <= A
      }) : c;
      this.keys = Q(this.breakpoints, this.prefix);
      this.aka = null;
      if (a) {
        c = [];
        for (b = a.length; b--;) c.push(Q(this.breakpoints, a[b]));
        this.aka = c;
        this.keys = za.apply(this.keys, c)
      }
      M.all = M.all.concat(M[this.uid] = this.keys);
      return this
    },
    target: function() {
      this.$e = e(ea(M[this.uid]));
      ga(this.$e, ka);
      this.keys.push(ka);
      return this
    },
    decideValue: function() {
      for (var a = null, b = this.breakpoints, c = b.length, d = c; null == a && d--;) this.fn(b[d]) && (a = this.values[d]);
      this.newValue = "string" === typeof a ? a : this.values[c];
      return this
    },
    prepareData: function(a) {
      this.$e = e(a);
      this.mode = fa(a);
      this.values = X(this.$e, this.keys);
      if (this.aka) for (a = this.aka.length; a--;) this.values = R(this.values, X(this.$e, this.aka[a]));
      return this.decideValue()
    },
    updateDOM: function() {
      if (this.currValue === this.newValue) return this;
      this.currValue = this.newValue;
      0 < this.mode ? this.$e[0].setAttribute("src", this.newValue) : null == this.newValue ? this.$e.empty && this.$e.empty() : this.$e.html ? this.$e.html(this.newValue) : (this.$e.empty && this.$e.empty(), this.$e[0].innerHTML = this.newValue);
      return this
    }
  };
  t.width = m;
  t.height = s;
  t["device-width"] = C.band;
  t["device-height"] = C.wave;
  t["device-pixel-ratio"] = w;
  h = {
    deviceMin: function() {
      return Ba
    },
    deviceMax: function() {
      return A
    },
    noConflict: function(a) {
      L[q] === h && (L[q] = ya);
      "function" == typeof a && a.call(L, h);
      return h
    },
    chain: function(a, b) {
      a = arguments.length ? a : e;
      return ja(a, b)
    },
    bridge: ja,
    create: ha,
    addTest: function(a, b) {
      "string" == typeof a && "function" == typeof b && (t[a] = b, pa[a] = 1);
      return h
    },
    datatize: F,
    camelize: aa,
    render: ba,
    store: ga,
    access: X,
    target: function(a) {
      return e(ea(p(a)))
    },
    object: Z,
    crossover: function(a, b) {
      var c, d = $.crossover;
      "function" == typeof a && (c = b, b = a, a = c);
      z.on(a ? "" + a + d : d, b);
      return h
    },
    action: function(a) {
      v(a, function(a) {
        K(a);
        Y(a)
      });
      return h
    },
    resize: Y,
    ready: K,
    affix: Q,
    sift: u,
    dpr: w,
    deletes: da,
    scrollX: function() {
      return window.pageXOffset || l.scrollLeft
    },
    scrollY: function() {
      return window.pageYOffset || l.scrollTop
    },
    deviceW: B,
    deviceH: qa,
    device: C,
    inX: function(a, b) {
      var c = V(G(a), b);
      return !!c && 0 <= c.right && c.left <= y()
    },
    inY: function(a, b) {
      var c = V(G(a), b);
      return !!c && 0 <= c.bottom && c.top <= x()
    },
    route: v,
    merge: R,
    media: S,
    wave: s,
    band: m,
    map: na,
    each: j,
    inViewport: W,
    dataset: I,
    viewportH: x,
    viewportW: y
  };
  K(function() {
    var a, b = I(la.body, "responsejs");
    b && ((a = !! k.JSON && JSON.parse) ? b = a(b) : e.parseJSON && (b = e.parseJSON(b)), b && b.create && ha(b.create));
    l.className = l.className.replace(/(^|\s)(no-)?responsejs(\s|$)/, "$1$3") + " responsejs "
  });
  return h
});