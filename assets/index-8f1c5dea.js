(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function mc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Fn = {},
  vc = {
    get exports() {
      return Fn;
    },
    set exports(e) {
      Fn = e;
    },
  },
  ul = {},
  ht = {},
  gc = {
    get exports() {
      return ht;
    },
    set exports(e) {
      ht = e;
    },
  },
  M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tr = Symbol.for("react.element"),
  yc = Symbol.for("react.portal"),
  wc = Symbol.for("react.fragment"),
  kc = Symbol.for("react.strict_mode"),
  Sc = Symbol.for("react.profiler"),
  _c = Symbol.for("react.provider"),
  Ec = Symbol.for("react.context"),
  xc = Symbol.for("react.forward_ref"),
  Cc = Symbol.for("react.suspense"),
  Nc = Symbol.for("react.memo"),
  zc = Symbol.for("react.lazy"),
  Wo = Symbol.iterator;
function Pc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Wo && e[Wo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ts = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ns = Object.assign,
  rs = {};
function cn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rs),
    (this.updater = n || ts);
}
cn.prototype.isReactComponent = {};
cn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
cn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ls() {}
ls.prototype = cn.prototype;
function Yi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rs),
    (this.updater = n || ts);
}
var Gi = (Yi.prototype = new ls());
Gi.constructor = Yi;
ns(Gi, cn.prototype);
Gi.isPureReactComponent = !0;
var Qo = Array.isArray,
  is = Object.prototype.hasOwnProperty,
  Xi = { current: null },
  os = { key: !0, ref: !0, __self: !0, __source: !0 };
function us(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      is.call(t, r) && !os.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: tr,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Xi.current,
  };
}
function Lc(e, t) {
  return {
    $$typeof: tr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Zi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === tr;
}
function Tc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ko = /\/+/g;
function Nl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Tc("" + e.key)
    : t.toString(36);
}
function Cr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case tr:
          case yc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Nl(o, 0) : r),
      Qo(l)
        ? ((n = ""),
          e != null && (n = e.replace(Ko, "$&/") + "/"),
          Cr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Zi(l) &&
            (l = Lc(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Ko, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Qo(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Nl(i, u);
      o += Cr(i, t, n, s, l);
    }
  else if (((s = Pc(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Nl(i, u++)), (o += Cr(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function sr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Cr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Mc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var se = { current: null },
  Nr = { transition: null },
  Oc = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: Nr,
    ReactCurrentOwner: Xi,
  };
M.Children = {
  map: sr,
  forEach: function (e, t, n) {
    sr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      sr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      sr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Zi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
M.Component = cn;
M.Fragment = wc;
M.Profiler = Sc;
M.PureComponent = Yi;
M.StrictMode = kc;
M.Suspense = Cc;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oc;
M.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ns({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Xi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      is.call(t, s) &&
        !os.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: tr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
M.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ec,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: _c, _context: e }),
    (e.Consumer = e)
  );
};
M.createElement = us;
M.createFactory = function (e) {
  var t = us.bind(null, e);
  return (t.type = e), t;
};
M.createRef = function () {
  return { current: null };
};
M.forwardRef = function (e) {
  return { $$typeof: xc, render: e };
};
M.isValidElement = Zi;
M.lazy = function (e) {
  return { $$typeof: zc, _payload: { _status: -1, _result: e }, _init: Mc };
};
M.memo = function (e, t) {
  return { $$typeof: Nc, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function (e) {
  var t = Nr.transition;
  Nr.transition = {};
  try {
    e();
  } finally {
    Nr.transition = t;
  }
};
M.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
M.useCallback = function (e, t) {
  return se.current.useCallback(e, t);
};
M.useContext = function (e) {
  return se.current.useContext(e);
};
M.useDebugValue = function () {};
M.useDeferredValue = function (e) {
  return se.current.useDeferredValue(e);
};
M.useEffect = function (e, t) {
  return se.current.useEffect(e, t);
};
M.useId = function () {
  return se.current.useId();
};
M.useImperativeHandle = function (e, t, n) {
  return se.current.useImperativeHandle(e, t, n);
};
M.useInsertionEffect = function (e, t) {
  return se.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function (e, t) {
  return se.current.useLayoutEffect(e, t);
};
M.useMemo = function (e, t) {
  return se.current.useMemo(e, t);
};
M.useReducer = function (e, t, n) {
  return se.current.useReducer(e, t, n);
};
M.useRef = function (e) {
  return se.current.useRef(e);
};
M.useState = function (e) {
  return se.current.useState(e);
};
M.useSyncExternalStore = function (e, t, n) {
  return se.current.useSyncExternalStore(e, t, n);
};
M.useTransition = function () {
  return se.current.useTransition();
};
M.version = "18.2.0";
(function (e) {
  e.exports = M;
})(gc);
const zt = mc(ht);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rc = ht,
  Dc = Symbol.for("react.element"),
  Ic = Symbol.for("react.fragment"),
  Fc = Object.prototype.hasOwnProperty,
  jc = Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Vc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ss(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Fc.call(t, r) && !Vc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Dc,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: jc.current,
  };
}
ul.Fragment = Ic;
ul.jsx = ss;
ul.jsxs = ss;
(function (e) {
  e.exports = ul;
})(vc);
const as = Fn.Fragment,
  p = Fn.jsx,
  P = Fn.jsxs;
var ql = {},
  bl = {},
  Uc = {
    get exports() {
      return bl;
    },
    set exports(e) {
      bl = e;
    },
  },
  ke = {},
  ei = {},
  Ac = {
    get exports() {
      return ei;
    },
    set exports(e) {
      ei = e;
    },
  },
  cs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(x, L) {
    var T = x.length;
    x.push(L);
    e: for (; 0 < T; ) {
      var Q = (T - 1) >>> 1,
        Z = x[Q];
      if (0 < l(Z, L)) (x[Q] = L), (x[T] = Z), (T = Q);
      else break e;
    }
  }
  function n(x) {
    return x.length === 0 ? null : x[0];
  }
  function r(x) {
    if (x.length === 0) return null;
    var L = x[0],
      T = x.pop();
    if (T !== L) {
      x[0] = T;
      e: for (var Q = 0, Z = x.length, or = Z >>> 1; Q < or; ) {
        var kt = 2 * (Q + 1) - 1,
          Cl = x[kt],
          St = kt + 1,
          ur = x[St];
        if (0 > l(Cl, T))
          St < Z && 0 > l(ur, Cl)
            ? ((x[Q] = ur), (x[St] = T), (Q = St))
            : ((x[Q] = Cl), (x[kt] = T), (Q = kt));
        else if (St < Z && 0 > l(ur, T)) (x[Q] = ur), (x[St] = T), (Q = St);
        else break e;
      }
    }
    return L;
  }
  function l(x, L) {
    var T = x.sortIndex - L.sortIndex;
    return T !== 0 ? T : x.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    c = [],
    v = 1,
    m = null,
    h = 3,
    w = !1,
    k = !1,
    S = !1,
    V = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(x) {
    for (var L = n(c); L !== null; ) {
      if (L.callback === null) r(c);
      else if (L.startTime <= x)
        r(c), (L.sortIndex = L.expirationTime), t(s, L);
      else break;
      L = n(c);
    }
  }
  function g(x) {
    if (((S = !1), d(x), !k))
      if (n(s) !== null) (k = !0), El(E);
      else {
        var L = n(c);
        L !== null && xl(g, L.startTime - x);
      }
  }
  function E(x, L) {
    (k = !1), S && ((S = !1), f(z), (z = -1)), (w = !0);
    var T = h;
    try {
      for (
        d(L), m = n(s);
        m !== null && (!(m.expirationTime > L) || (x && !Le()));

      ) {
        var Q = m.callback;
        if (typeof Q == "function") {
          (m.callback = null), (h = m.priorityLevel);
          var Z = Q(m.expirationTime <= L);
          (L = e.unstable_now()),
            typeof Z == "function" ? (m.callback = Z) : m === n(s) && r(s),
            d(L);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var or = !0;
      else {
        var kt = n(c);
        kt !== null && xl(g, kt.startTime - L), (or = !1);
      }
      return or;
    } finally {
      (m = null), (h = T), (w = !1);
    }
  }
  var C = !1,
    N = null,
    z = -1,
    W = 5,
    O = -1;
  function Le() {
    return !(e.unstable_now() - O < W);
  }
  function pn() {
    if (N !== null) {
      var x = e.unstable_now();
      O = x;
      var L = !0;
      try {
        L = N(!0, x);
      } finally {
        L ? hn() : ((C = !1), (N = null));
      }
    } else C = !1;
  }
  var hn;
  if (typeof a == "function")
    hn = function () {
      a(pn);
    };
  else if (typeof MessageChannel < "u") {
    var Bo = new MessageChannel(),
      hc = Bo.port2;
    (Bo.port1.onmessage = pn),
      (hn = function () {
        hc.postMessage(null);
      });
  } else
    hn = function () {
      V(pn, 0);
    };
  function El(x) {
    (N = x), C || ((C = !0), hn());
  }
  function xl(x, L) {
    z = V(function () {
      x(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (x) {
      x.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      k || w || ((k = !0), El(E));
    }),
    (e.unstable_forceFrameRate = function (x) {
      0 > x || 125 < x
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (W = 0 < x ? Math.floor(1e3 / x) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (x) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = h;
      }
      var T = h;
      h = L;
      try {
        return x();
      } finally {
        h = T;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (x, L) {
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          x = 3;
      }
      var T = h;
      h = x;
      try {
        return L();
      } finally {
        h = T;
      }
    }),
    (e.unstable_scheduleCallback = function (x, L, T) {
      var Q = e.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? Q + T : Q))
          : (T = Q),
        x)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = T + Z),
        (x = {
          id: v++,
          callback: L,
          priorityLevel: x,
          startTime: T,
          expirationTime: Z,
          sortIndex: -1,
        }),
        T > Q
          ? ((x.sortIndex = T),
            t(c, x),
            n(s) === null &&
              x === n(c) &&
              (S ? (f(z), (z = -1)) : (S = !0), xl(g, T - Q)))
          : ((x.sortIndex = Z), t(s, x), k || w || ((k = !0), El(E))),
        x
      );
    }),
    (e.unstable_shouldYield = Le),
    (e.unstable_wrapCallback = function (x) {
      var L = h;
      return function () {
        var T = h;
        h = L;
        try {
          return x.apply(this, arguments);
        } finally {
          h = T;
        }
      };
    });
})(cs);
(function (e) {
  e.exports = cs;
})(Ac);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fs = ht,
  we = ei;
function y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ds = new Set(),
  jn = {};
function It(e, t) {
  nn(e, t), nn(e + "Capture", t);
}
function nn(e, t) {
  for (jn[e] = t, e = 0; e < t.length; e++) ds.add(t[e]);
}
var Ye = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ti = Object.prototype.hasOwnProperty,
  Hc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Yo = {},
  Go = {};
function $c(e) {
  return ti.call(Go, e)
    ? !0
    : ti.call(Yo, e)
    ? !1
    : Hc.test(e)
    ? (Go[e] = !0)
    : ((Yo[e] = !0), !1);
}
function Bc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Wc(e, t, n, r) {
  if (t === null || typeof t > "u" || Bc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ae(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  te[t] = new ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  te[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  te[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  te[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  te[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ji = /[\-:]([a-z])/g;
function qi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ji, qi);
    te[t] = new ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ji, qi);
    te[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ji, qi);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function bi(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Wc(t, n, l, r) && (n = null),
    r || l === null
      ? $c(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Je = fs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ar = Symbol.for("react.element"),
  Vt = Symbol.for("react.portal"),
  Ut = Symbol.for("react.fragment"),
  eo = Symbol.for("react.strict_mode"),
  ni = Symbol.for("react.profiler"),
  ps = Symbol.for("react.provider"),
  hs = Symbol.for("react.context"),
  to = Symbol.for("react.forward_ref"),
  ri = Symbol.for("react.suspense"),
  li = Symbol.for("react.suspense_list"),
  no = Symbol.for("react.memo"),
  be = Symbol.for("react.lazy"),
  ms = Symbol.for("react.offscreen"),
  Xo = Symbol.iterator;
function mn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Xo && e[Xo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var $ = Object.assign,
  zl;
function En(e) {
  if (zl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      zl = (t && t[1]) || "";
    }
  return (
    `
` +
    zl +
    e
  );
}
var Pl = !1;
function Ll(e, t) {
  if (!e || Pl) return "";
  Pl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Pl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? En(e) : "";
}
function Qc(e) {
  switch (e.tag) {
    case 5:
      return En(e.type);
    case 16:
      return En("Lazy");
    case 13:
      return En("Suspense");
    case 19:
      return En("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ll(e.type, !1)), e;
    case 11:
      return (e = Ll(e.type.render, !1)), e;
    case 1:
      return (e = Ll(e.type, !0)), e;
    default:
      return "";
  }
}
function ii(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ut:
      return "Fragment";
    case Vt:
      return "Portal";
    case ni:
      return "Profiler";
    case eo:
      return "StrictMode";
    case ri:
      return "Suspense";
    case li:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case hs:
        return (e.displayName || "Context") + ".Consumer";
      case ps:
        return (e._context.displayName || "Context") + ".Provider";
      case to:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case no:
        return (
          (t = e.displayName || null), t !== null ? t : ii(e.type) || "Memo"
        );
      case be:
        (t = e._payload), (e = e._init);
        try {
          return ii(e(t));
        } catch {}
    }
  return null;
}
function Kc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ii(t);
    case 8:
      return t === eo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function mt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function vs(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Yc(e) {
  var t = vs(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function cr(e) {
  e._valueTracker || (e._valueTracker = Yc(e));
}
function gs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = vs(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function jr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function oi(e, t) {
  var n = t.checked;
  return $({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Zo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = mt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ys(e, t) {
  (t = t.checked), t != null && bi(e, "checked", t, !1);
}
function ui(e, t) {
  ys(e, t);
  var n = mt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? si(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && si(e, t.type, mt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Jo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function si(e, t, n) {
  (t !== "number" || jr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var xn = Array.isArray;
function Zt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + mt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ai(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return $({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function qo(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (xn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: mt(n) };
}
function ws(e, t) {
  var n = mt(t.value),
    r = mt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function bo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ks(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ci(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ks(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var fr,
  Ss = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        fr = fr || document.createElement("div"),
          fr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = fr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Vn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var zn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Gc = ["Webkit", "ms", "Moz", "O"];
Object.keys(zn).forEach(function (e) {
  Gc.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (zn[t] = zn[e]);
  });
});
function _s(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (zn.hasOwnProperty(e) && zn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Es(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = _s(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Xc = $(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function fi(e, t) {
  if (t) {
    if (Xc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function di(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var pi = null;
function ro(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var hi = null,
  Jt = null,
  qt = null;
function eu(e) {
  if ((e = lr(e))) {
    if (typeof hi != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = dl(t)), hi(e.stateNode, e.type, t));
  }
}
function xs(e) {
  Jt ? (qt ? qt.push(e) : (qt = [e])) : (Jt = e);
}
function Cs() {
  if (Jt) {
    var e = Jt,
      t = qt;
    if (((qt = Jt = null), eu(e), t)) for (e = 0; e < t.length; e++) eu(t[e]);
  }
}
function Ns(e, t) {
  return e(t);
}
function zs() {}
var Tl = !1;
function Ps(e, t, n) {
  if (Tl) return e(t, n);
  Tl = !0;
  try {
    return Ns(e, t, n);
  } finally {
    (Tl = !1), (Jt !== null || qt !== null) && (zs(), Cs());
  }
}
function Un(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = dl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var mi = !1;
if (Ye)
  try {
    var vn = {};
    Object.defineProperty(vn, "passive", {
      get: function () {
        mi = !0;
      },
    }),
      window.addEventListener("test", vn, vn),
      window.removeEventListener("test", vn, vn);
  } catch {
    mi = !1;
  }
function Zc(e, t, n, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (v) {
    this.onError(v);
  }
}
var Pn = !1,
  Vr = null,
  Ur = !1,
  vi = null,
  Jc = {
    onError: function (e) {
      (Pn = !0), (Vr = e);
    },
  };
function qc(e, t, n, r, l, i, o, u, s) {
  (Pn = !1), (Vr = null), Zc.apply(Jc, arguments);
}
function bc(e, t, n, r, l, i, o, u, s) {
  if ((qc.apply(this, arguments), Pn)) {
    if (Pn) {
      var c = Vr;
      (Pn = !1), (Vr = null);
    } else throw Error(y(198));
    Ur || ((Ur = !0), (vi = c));
  }
}
function Ft(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ls(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function tu(e) {
  if (Ft(e) !== e) throw Error(y(188));
}
function ef(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ft(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return tu(l), e;
        if (i === r) return tu(l), t;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Ts(e) {
  return (e = ef(e)), e !== null ? Ms(e) : null;
}
function Ms(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ms(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Os = we.unstable_scheduleCallback,
  nu = we.unstable_cancelCallback,
  tf = we.unstable_shouldYield,
  nf = we.unstable_requestPaint,
  K = we.unstable_now,
  rf = we.unstable_getCurrentPriorityLevel,
  lo = we.unstable_ImmediatePriority,
  Rs = we.unstable_UserBlockingPriority,
  Ar = we.unstable_NormalPriority,
  lf = we.unstable_LowPriority,
  Ds = we.unstable_IdlePriority,
  sl = null,
  Ae = null;
function of(e) {
  if (Ae && typeof Ae.onCommitFiberRoot == "function")
    try {
      Ae.onCommitFiberRoot(sl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var De = Math.clz32 ? Math.clz32 : af,
  uf = Math.log,
  sf = Math.LN2;
function af(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((uf(e) / sf) | 0)) | 0;
}
var dr = 64,
  pr = 4194304;
function Cn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Hr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = Cn(u)) : ((i &= o), i !== 0 && (r = Cn(i)));
  } else (o = n & ~l), o !== 0 ? (r = Cn(o)) : i !== 0 && (r = Cn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - De(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function cf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function ff(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - De(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = cf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function gi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Is() {
  var e = dr;
  return (dr <<= 1), !(dr & 4194240) && (dr = 64), e;
}
function Ml(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function nr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - De(t)),
    (e[t] = n);
}
function df(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - De(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function io(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - De(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var D = 0;
function Fs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var js,
  oo,
  Vs,
  Us,
  As,
  yi = !1,
  hr = [],
  it = null,
  ot = null,
  ut = null,
  An = new Map(),
  Hn = new Map(),
  tt = [],
  pf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ru(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      it = null;
      break;
    case "dragenter":
    case "dragleave":
      ot = null;
      break;
    case "mouseover":
    case "mouseout":
      ut = null;
      break;
    case "pointerover":
    case "pointerout":
      An.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Hn.delete(t.pointerId);
  }
}
function gn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = lr(t)), t !== null && oo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function hf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (it = gn(it, e, t, n, r, l)), !0;
    case "dragenter":
      return (ot = gn(ot, e, t, n, r, l)), !0;
    case "mouseover":
      return (ut = gn(ut, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return An.set(i, gn(An.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Hn.set(i, gn(Hn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Hs(e) {
  var t = xt(e.target);
  if (t !== null) {
    var n = Ft(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ls(n)), t !== null)) {
          (e.blockedOn = t),
            As(e.priority, function () {
              Vs(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function zr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = wi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (pi = r), n.target.dispatchEvent(r), (pi = null);
    } else return (t = lr(n)), t !== null && oo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function lu(e, t, n) {
  zr(e) && n.delete(t);
}
function mf() {
  (yi = !1),
    it !== null && zr(it) && (it = null),
    ot !== null && zr(ot) && (ot = null),
    ut !== null && zr(ut) && (ut = null),
    An.forEach(lu),
    Hn.forEach(lu);
}
function yn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    yi ||
      ((yi = !0),
      we.unstable_scheduleCallback(we.unstable_NormalPriority, mf)));
}
function $n(e) {
  function t(l) {
    return yn(l, e);
  }
  if (0 < hr.length) {
    yn(hr[0], e);
    for (var n = 1; n < hr.length; n++) {
      var r = hr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    it !== null && yn(it, e),
      ot !== null && yn(ot, e),
      ut !== null && yn(ut, e),
      An.forEach(t),
      Hn.forEach(t),
      n = 0;
    n < tt.length;
    n++
  )
    (r = tt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tt.length && ((n = tt[0]), n.blockedOn === null); )
    Hs(n), n.blockedOn === null && tt.shift();
}
var bt = Je.ReactCurrentBatchConfig,
  $r = !0;
function vf(e, t, n, r) {
  var l = D,
    i = bt.transition;
  bt.transition = null;
  try {
    (D = 1), uo(e, t, n, r);
  } finally {
    (D = l), (bt.transition = i);
  }
}
function gf(e, t, n, r) {
  var l = D,
    i = bt.transition;
  bt.transition = null;
  try {
    (D = 4), uo(e, t, n, r);
  } finally {
    (D = l), (bt.transition = i);
  }
}
function uo(e, t, n, r) {
  if ($r) {
    var l = wi(e, t, n, r);
    if (l === null) Hl(e, t, r, Br, n), ru(e, r);
    else if (hf(l, e, t, n, r)) r.stopPropagation();
    else if ((ru(e, r), t & 4 && -1 < pf.indexOf(e))) {
      for (; l !== null; ) {
        var i = lr(l);
        if (
          (i !== null && js(i),
          (i = wi(e, t, n, r)),
          i === null && Hl(e, t, r, Br, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Hl(e, t, r, null, n);
  }
}
var Br = null;
function wi(e, t, n, r) {
  if (((Br = null), (e = ro(r)), (e = xt(e)), e !== null))
    if (((t = Ft(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ls(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Br = e), null;
}
function $s(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (rf()) {
        case lo:
          return 1;
        case Rs:
          return 4;
        case Ar:
        case lf:
          return 16;
        case Ds:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rt = null,
  so = null,
  Pr = null;
function Bs() {
  if (Pr) return Pr;
  var e,
    t = so,
    n = t.length,
    r,
    l = "value" in rt ? rt.value : rt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Pr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Lr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function mr() {
  return !0;
}
function iu() {
  return !1;
}
function Se(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? mr
        : iu),
      (this.isPropagationStopped = iu),
      this
    );
  }
  return (
    $(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = mr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = mr));
      },
      persist: function () {},
      isPersistent: mr,
    }),
    t
  );
}
var fn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ao = Se(fn),
  rr = $({}, fn, { view: 0, detail: 0 }),
  yf = Se(rr),
  Ol,
  Rl,
  wn,
  al = $({}, rr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: co,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== wn &&
            (wn && e.type === "mousemove"
              ? ((Ol = e.screenX - wn.screenX), (Rl = e.screenY - wn.screenY))
              : (Rl = Ol = 0),
            (wn = e)),
          Ol);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Rl;
    },
  }),
  ou = Se(al),
  wf = $({}, al, { dataTransfer: 0 }),
  kf = Se(wf),
  Sf = $({}, rr, { relatedTarget: 0 }),
  Dl = Se(Sf),
  _f = $({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ef = Se(_f),
  xf = $({}, fn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Cf = Se(xf),
  Nf = $({}, fn, { data: 0 }),
  uu = Se(Nf),
  zf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Pf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Lf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Tf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Lf[e]) ? !!t[e] : !1;
}
function co() {
  return Tf;
}
var Mf = $({}, rr, {
    key: function (e) {
      if (e.key) {
        var t = zf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Lr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Pf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: co,
    charCode: function (e) {
      return e.type === "keypress" ? Lr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Lr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Of = Se(Mf),
  Rf = $({}, al, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  su = Se(Rf),
  Df = $({}, rr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: co,
  }),
  If = Se(Df),
  Ff = $({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  jf = Se(Ff),
  Vf = $({}, al, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Uf = Se(Vf),
  Af = [9, 13, 27, 32],
  fo = Ye && "CompositionEvent" in window,
  Ln = null;
Ye && "documentMode" in document && (Ln = document.documentMode);
var Hf = Ye && "TextEvent" in window && !Ln,
  Ws = Ye && (!fo || (Ln && 8 < Ln && 11 >= Ln)),
  au = String.fromCharCode(32),
  cu = !1;
function Qs(e, t) {
  switch (e) {
    case "keyup":
      return Af.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ks(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var At = !1;
function $f(e, t) {
  switch (e) {
    case "compositionend":
      return Ks(t);
    case "keypress":
      return t.which !== 32 ? null : ((cu = !0), au);
    case "textInput":
      return (e = t.data), e === au && cu ? null : e;
    default:
      return null;
  }
}
function Bf(e, t) {
  if (At)
    return e === "compositionend" || (!fo && Qs(e, t))
      ? ((e = Bs()), (Pr = so = rt = null), (At = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ws && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Wf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function fu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Wf[e.type] : t === "textarea";
}
function Ys(e, t, n, r) {
  xs(r),
    (t = Wr(t, "onChange")),
    0 < t.length &&
      ((n = new ao("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Tn = null,
  Bn = null;
function Qf(e) {
  la(e, 0);
}
function cl(e) {
  var t = Bt(e);
  if (gs(t)) return e;
}
function Kf(e, t) {
  if (e === "change") return t;
}
var Gs = !1;
if (Ye) {
  var Il;
  if (Ye) {
    var Fl = "oninput" in document;
    if (!Fl) {
      var du = document.createElement("div");
      du.setAttribute("oninput", "return;"),
        (Fl = typeof du.oninput == "function");
    }
    Il = Fl;
  } else Il = !1;
  Gs = Il && (!document.documentMode || 9 < document.documentMode);
}
function pu() {
  Tn && (Tn.detachEvent("onpropertychange", Xs), (Bn = Tn = null));
}
function Xs(e) {
  if (e.propertyName === "value" && cl(Bn)) {
    var t = [];
    Ys(t, Bn, e, ro(e)), Ps(Qf, t);
  }
}
function Yf(e, t, n) {
  e === "focusin"
    ? (pu(), (Tn = t), (Bn = n), Tn.attachEvent("onpropertychange", Xs))
    : e === "focusout" && pu();
}
function Gf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return cl(Bn);
}
function Xf(e, t) {
  if (e === "click") return cl(t);
}
function Zf(e, t) {
  if (e === "input" || e === "change") return cl(t);
}
function Jf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Fe = typeof Object.is == "function" ? Object.is : Jf;
function Wn(e, t) {
  if (Fe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ti.call(t, l) || !Fe(e[l], t[l])) return !1;
  }
  return !0;
}
function hu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function mu(e, t) {
  var n = hu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = hu(n);
  }
}
function Zs(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Zs(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Js() {
  for (var e = window, t = jr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = jr(e.document);
  }
  return t;
}
function po(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function qf(e) {
  var t = Js(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Zs(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && po(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = mu(n, i));
        var o = mu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var bf = Ye && "documentMode" in document && 11 >= document.documentMode,
  Ht = null,
  ki = null,
  Mn = null,
  Si = !1;
function vu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Si ||
    Ht == null ||
    Ht !== jr(r) ||
    ((r = Ht),
    "selectionStart" in r && po(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Mn && Wn(Mn, r)) ||
      ((Mn = r),
      (r = Wr(ki, "onSelect")),
      0 < r.length &&
        ((t = new ao("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ht))));
}
function vr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var $t = {
    animationend: vr("Animation", "AnimationEnd"),
    animationiteration: vr("Animation", "AnimationIteration"),
    animationstart: vr("Animation", "AnimationStart"),
    transitionend: vr("Transition", "TransitionEnd"),
  },
  jl = {},
  qs = {};
Ye &&
  ((qs = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete $t.animationend.animation,
    delete $t.animationiteration.animation,
    delete $t.animationstart.animation),
  "TransitionEvent" in window || delete $t.transitionend.transition);
function fl(e) {
  if (jl[e]) return jl[e];
  if (!$t[e]) return e;
  var t = $t[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in qs) return (jl[e] = t[n]);
  return e;
}
var bs = fl("animationend"),
  ea = fl("animationiteration"),
  ta = fl("animationstart"),
  na = fl("transitionend"),
  ra = new Map(),
  gu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function gt(e, t) {
  ra.set(e, t), It(t, [e]);
}
for (var Vl = 0; Vl < gu.length; Vl++) {
  var Ul = gu[Vl],
    ed = Ul.toLowerCase(),
    td = Ul[0].toUpperCase() + Ul.slice(1);
  gt(ed, "on" + td);
}
gt(bs, "onAnimationEnd");
gt(ea, "onAnimationIteration");
gt(ta, "onAnimationStart");
gt("dblclick", "onDoubleClick");
gt("focusin", "onFocus");
gt("focusout", "onBlur");
gt(na, "onTransitionEnd");
nn("onMouseEnter", ["mouseout", "mouseover"]);
nn("onMouseLeave", ["mouseout", "mouseover"]);
nn("onPointerEnter", ["pointerout", "pointerover"]);
nn("onPointerLeave", ["pointerout", "pointerover"]);
It(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
It(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
It("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
It(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
It(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
It(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Nn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  nd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));
function yu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), bc(r, t, void 0, e), (e.currentTarget = null);
}
function la(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          yu(l, u, c), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          yu(l, u, c), (i = s);
        }
    }
  }
  if (Ur) throw ((e = vi), (Ur = !1), (vi = null), e);
}
function F(e, t) {
  var n = t[Ni];
  n === void 0 && (n = t[Ni] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ia(t, e, 2, !1), n.add(r));
}
function Al(e, t, n) {
  var r = 0;
  t && (r |= 4), ia(n, e, r, t);
}
var gr = "_reactListening" + Math.random().toString(36).slice(2);
function Qn(e) {
  if (!e[gr]) {
    (e[gr] = !0),
      ds.forEach(function (n) {
        n !== "selectionchange" && (nd.has(n) || Al(n, !1, e), Al(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[gr] || ((t[gr] = !0), Al("selectionchange", !1, t));
  }
}
function ia(e, t, n, r) {
  switch ($s(t)) {
    case 1:
      var l = vf;
      break;
    case 4:
      l = gf;
      break;
    default:
      l = uo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !mi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Hl(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = xt(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Ps(function () {
    var c = i,
      v = ro(n),
      m = [];
    e: {
      var h = ra.get(e);
      if (h !== void 0) {
        var w = ao,
          k = e;
        switch (e) {
          case "keypress":
            if (Lr(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Of;
            break;
          case "focusin":
            (k = "focus"), (w = Dl);
            break;
          case "focusout":
            (k = "blur"), (w = Dl);
            break;
          case "beforeblur":
          case "afterblur":
            w = Dl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = ou;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = kf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = If;
            break;
          case bs:
          case ea:
          case ta:
            w = Ef;
            break;
          case na:
            w = jf;
            break;
          case "scroll":
            w = yf;
            break;
          case "wheel":
            w = Uf;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Cf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = su;
        }
        var S = (t & 4) !== 0,
          V = !S && e === "scroll",
          f = S ? (h !== null ? h + "Capture" : null) : h;
        S = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var g = d.stateNode;
          if (
            (d.tag === 5 &&
              g !== null &&
              ((d = g),
              f !== null && ((g = Un(a, f)), g != null && S.push(Kn(a, g, d)))),
            V)
          )
            break;
          a = a.return;
        }
        0 < S.length &&
          ((h = new w(h, k, null, n, v)), m.push({ event: h, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          h &&
            n !== pi &&
            (k = n.relatedTarget || n.fromElement) &&
            (xt(k) || k[Ge]))
        )
          break e;
        if (
          (w || h) &&
          ((h =
            v.window === v
              ? v
              : (h = v.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          w
            ? ((k = n.relatedTarget || n.toElement),
              (w = c),
              (k = k ? xt(k) : null),
              k !== null &&
                ((V = Ft(k)), k !== V || (k.tag !== 5 && k.tag !== 6)) &&
                (k = null))
            : ((w = null), (k = c)),
          w !== k)
        ) {
          if (
            ((S = ou),
            (g = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = su),
              (g = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (V = w == null ? h : Bt(w)),
            (d = k == null ? h : Bt(k)),
            (h = new S(g, a + "leave", w, n, v)),
            (h.target = V),
            (h.relatedTarget = d),
            (g = null),
            xt(v) === c &&
              ((S = new S(f, a + "enter", k, n, v)),
              (S.target = d),
              (S.relatedTarget = V),
              (g = S)),
            (V = g),
            w && k)
          )
            t: {
              for (S = w, f = k, a = 0, d = S; d; d = jt(d)) a++;
              for (d = 0, g = f; g; g = jt(g)) d++;
              for (; 0 < a - d; ) (S = jt(S)), a--;
              for (; 0 < d - a; ) (f = jt(f)), d--;
              for (; a--; ) {
                if (S === f || (f !== null && S === f.alternate)) break t;
                (S = jt(S)), (f = jt(f));
              }
              S = null;
            }
          else S = null;
          w !== null && wu(m, h, w, S, !1),
            k !== null && V !== null && wu(m, V, k, S, !0);
        }
      }
      e: {
        if (
          ((h = c ? Bt(c) : window),
          (w = h.nodeName && h.nodeName.toLowerCase()),
          w === "select" || (w === "input" && h.type === "file"))
        )
          var E = Kf;
        else if (fu(h))
          if (Gs) E = Zf;
          else {
            E = Gf;
            var C = Yf;
          }
        else
          (w = h.nodeName) &&
            w.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (E = Xf);
        if (E && (E = E(e, c))) {
          Ys(m, E, n, v);
          break e;
        }
        C && C(e, h, c),
          e === "focusout" &&
            (C = h._wrapperState) &&
            C.controlled &&
            h.type === "number" &&
            si(h, "number", h.value);
      }
      switch (((C = c ? Bt(c) : window), e)) {
        case "focusin":
          (fu(C) || C.contentEditable === "true") &&
            ((Ht = C), (ki = c), (Mn = null));
          break;
        case "focusout":
          Mn = ki = Ht = null;
          break;
        case "mousedown":
          Si = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Si = !1), vu(m, n, v);
          break;
        case "selectionchange":
          if (bf) break;
        case "keydown":
        case "keyup":
          vu(m, n, v);
      }
      var N;
      if (fo)
        e: {
          switch (e) {
            case "compositionstart":
              var z = "onCompositionStart";
              break e;
            case "compositionend":
              z = "onCompositionEnd";
              break e;
            case "compositionupdate":
              z = "onCompositionUpdate";
              break e;
          }
          z = void 0;
        }
      else
        At
          ? Qs(e, n) && (z = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
      z &&
        (Ws &&
          n.locale !== "ko" &&
          (At || z !== "onCompositionStart"
            ? z === "onCompositionEnd" && At && (N = Bs())
            : ((rt = v),
              (so = "value" in rt ? rt.value : rt.textContent),
              (At = !0))),
        (C = Wr(c, z)),
        0 < C.length &&
          ((z = new uu(z, e, null, n, v)),
          m.push({ event: z, listeners: C }),
          N ? (z.data = N) : ((N = Ks(n)), N !== null && (z.data = N)))),
        (N = Hf ? $f(e, n) : Bf(e, n)) &&
          ((c = Wr(c, "onBeforeInput")),
          0 < c.length &&
            ((v = new uu("onBeforeInput", "beforeinput", null, n, v)),
            m.push({ event: v, listeners: c }),
            (v.data = N)));
    }
    la(m, t);
  });
}
function Kn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Wr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Un(e, n)),
      i != null && r.unshift(Kn(e, i, l)),
      (i = Un(e, t)),
      i != null && r.push(Kn(e, i, l))),
      (e = e.return);
  }
  return r;
}
function jt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function wu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Un(n, i)), s != null && o.unshift(Kn(n, s, u)))
        : l || ((s = Un(n, i)), s != null && o.push(Kn(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var rd = /\r\n?/g,
  ld = /\u0000|\uFFFD/g;
function ku(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      rd,
      `
`
    )
    .replace(ld, "");
}
function yr(e, t, n) {
  if (((t = ku(t)), ku(e) !== t && n)) throw Error(y(425));
}
function Qr() {}
var _i = null,
  Ei = null;
function xi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ci = typeof setTimeout == "function" ? setTimeout : void 0,
  id = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Su = typeof Promise == "function" ? Promise : void 0,
  od =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Su < "u"
      ? function (e) {
          return Su.resolve(null).then(e).catch(ud);
        }
      : Ci;
function ud(e) {
  setTimeout(function () {
    throw e;
  });
}
function $l(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), $n(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  $n(t);
}
function st(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function _u(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var dn = Math.random().toString(36).slice(2),
  Ue = "__reactFiber$" + dn,
  Yn = "__reactProps$" + dn,
  Ge = "__reactContainer$" + dn,
  Ni = "__reactEvents$" + dn,
  sd = "__reactListeners$" + dn,
  ad = "__reactHandles$" + dn;
function xt(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ge] || n[Ue])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = _u(e); e !== null; ) {
          if ((n = e[Ue])) return n;
          e = _u(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function lr(e) {
  return (
    (e = e[Ue] || e[Ge]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Bt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function dl(e) {
  return e[Yn] || null;
}
var zi = [],
  Wt = -1;
function yt(e) {
  return { current: e };
}
function j(e) {
  0 > Wt || ((e.current = zi[Wt]), (zi[Wt] = null), Wt--);
}
function I(e, t) {
  Wt++, (zi[Wt] = e.current), (e.current = t);
}
var vt = {},
  ie = yt(vt),
  pe = yt(!1),
  Tt = vt;
function rn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return vt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function he(e) {
  return (e = e.childContextTypes), e != null;
}
function Kr() {
  j(pe), j(ie);
}
function Eu(e, t, n) {
  if (ie.current !== vt) throw Error(y(168));
  I(ie, t), I(pe, n);
}
function oa(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Kc(e) || "Unknown", l));
  return $({}, n, r);
}
function Yr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || vt),
    (Tt = ie.current),
    I(ie, e),
    I(pe, pe.current),
    !0
  );
}
function xu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = oa(e, t, Tt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      j(pe),
      j(ie),
      I(ie, e))
    : j(pe),
    I(pe, n);
}
var Be = null,
  pl = !1,
  Bl = !1;
function ua(e) {
  Be === null ? (Be = [e]) : Be.push(e);
}
function cd(e) {
  (pl = !0), ua(e);
}
function wt() {
  if (!Bl && Be !== null) {
    Bl = !0;
    var e = 0,
      t = D;
    try {
      var n = Be;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Be = null), (pl = !1);
    } catch (l) {
      throw (Be !== null && (Be = Be.slice(e + 1)), Os(lo, wt), l);
    } finally {
      (D = t), (Bl = !1);
    }
  }
  return null;
}
var Qt = [],
  Kt = 0,
  Gr = null,
  Xr = 0,
  Ee = [],
  xe = 0,
  Mt = null,
  We = 1,
  Qe = "";
function _t(e, t) {
  (Qt[Kt++] = Xr), (Qt[Kt++] = Gr), (Gr = e), (Xr = t);
}
function sa(e, t, n) {
  (Ee[xe++] = We), (Ee[xe++] = Qe), (Ee[xe++] = Mt), (Mt = e);
  var r = We;
  e = Qe;
  var l = 32 - De(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - De(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (We = (1 << (32 - De(t) + l)) | (n << l) | r),
      (Qe = i + e);
  } else (We = (1 << i) | (n << l) | r), (Qe = e);
}
function ho(e) {
  e.return !== null && (_t(e, 1), sa(e, 1, 0));
}
function mo(e) {
  for (; e === Gr; )
    (Gr = Qt[--Kt]), (Qt[Kt] = null), (Xr = Qt[--Kt]), (Qt[Kt] = null);
  for (; e === Mt; )
    (Mt = Ee[--xe]),
      (Ee[xe] = null),
      (Qe = Ee[--xe]),
      (Ee[xe] = null),
      (We = Ee[--xe]),
      (Ee[xe] = null);
}
var ye = null,
  ge = null,
  U = !1,
  Re = null;
function aa(e, t) {
  var n = Ce(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Cu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ye = e), (ge = st(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ye = e), (ge = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Mt !== null ? { id: We, overflow: Qe } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ce(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ye = e),
            (ge = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Pi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Li(e) {
  if (U) {
    var t = ge;
    if (t) {
      var n = t;
      if (!Cu(e, t)) {
        if (Pi(e)) throw Error(y(418));
        t = st(n.nextSibling);
        var r = ye;
        t && Cu(e, t)
          ? aa(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ye = e));
      }
    } else {
      if (Pi(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (ye = e);
    }
  }
}
function Nu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ye = e;
}
function wr(e) {
  if (e !== ye) return !1;
  if (!U) return Nu(e), (U = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !xi(e.type, e.memoizedProps))),
    t && (t = ge))
  ) {
    if (Pi(e)) throw (ca(), Error(y(418)));
    for (; t; ) aa(e, t), (t = st(t.nextSibling));
  }
  if ((Nu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ge = st(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ge = null;
    }
  } else ge = ye ? st(e.stateNode.nextSibling) : null;
  return !0;
}
function ca() {
  for (var e = ge; e; ) e = st(e.nextSibling);
}
function ln() {
  (ge = ye = null), (U = !1);
}
function vo(e) {
  Re === null ? (Re = [e]) : Re.push(e);
}
var fd = Je.ReactCurrentBatchConfig;
function Me(e, t) {
  if (e && e.defaultProps) {
    (t = $({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Zr = yt(null),
  Jr = null,
  Yt = null,
  go = null;
function yo() {
  go = Yt = Jr = null;
}
function wo(e) {
  var t = Zr.current;
  j(Zr), (e._currentValue = t);
}
function Ti(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function en(e, t) {
  (Jr = e),
    (go = Yt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (de = !0), (e.firstContext = null));
}
function ze(e) {
  var t = e._currentValue;
  if (go !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Yt === null)) {
      if (Jr === null) throw Error(y(308));
      (Yt = e), (Jr.dependencies = { lanes: 0, firstContext: e });
    } else Yt = Yt.next = e;
  return t;
}
var Ct = null;
function ko(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
function fa(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), ko(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Xe(e, r)
  );
}
function Xe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var et = !1;
function So(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function da(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ke(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function at(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), R & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Xe(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), ko(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Xe(e, n)
  );
}
function Tr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), io(e, n);
  }
}
function zu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function qr(e, t, n, r) {
  var l = e.updateQueue;
  et = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), o === null ? (i = c) : (o.next = c), (o = s);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (u = v.lastBaseUpdate),
      u !== o &&
        (u === null ? (v.firstBaseUpdate = c) : (u.next = c),
        (v.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var m = l.baseState;
    (o = 0), (v = c = s = null), (u = i);
    do {
      var h = u.lane,
        w = u.eventTime;
      if ((r & h) === h) {
        v !== null &&
          (v = v.next =
            {
              eventTime: w,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var k = e,
            S = u;
          switch (((h = t), (w = n), S.tag)) {
            case 1:
              if (((k = S.payload), typeof k == "function")) {
                m = k.call(w, m, h);
                break e;
              }
              m = k;
              break e;
            case 3:
              k.flags = (k.flags & -65537) | 128;
            case 0:
              if (
                ((k = S.payload),
                (h = typeof k == "function" ? k.call(w, m, h) : k),
                h == null)
              )
                break e;
              m = $({}, m, h);
              break e;
            case 2:
              et = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [u]) : h.push(u));
      } else
        (w = {
          eventTime: w,
          lane: h,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          v === null ? ((c = v = w), (s = m)) : (v = v.next = w),
          (o |= h);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (h = u),
          (u = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (v === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = v),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Rt |= o), (e.lanes = o), (e.memoizedState = m);
  }
}
function Pu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var pa = new fs.Component().refs;
function Mi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : $({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var hl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ft(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = ft(e),
      i = Ke(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = at(e, i, l)),
      t !== null && (Ie(t, e, l, r), Tr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = ft(e),
      i = Ke(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = at(e, i, l)),
      t !== null && (Ie(t, e, l, r), Tr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ue(),
      r = ft(e),
      l = Ke(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = at(e, l, r)),
      t !== null && (Ie(t, e, r, n), Tr(t, e, r));
  },
};
function Lu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Wn(n, r) || !Wn(l, i)
      : !0
  );
}
function ha(e, t, n) {
  var r = !1,
    l = vt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = ze(i))
      : ((l = he(t) ? Tt : ie.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? rn(e, l) : vt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = hl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Tu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && hl.enqueueReplaceState(t, t.state, null);
}
function Oi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = pa), So(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = ze(i))
    : ((i = he(t) ? Tt : ie.current), (l.context = rn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Mi(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && hl.enqueueReplaceState(l, l.state, null),
      qr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function kn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            u === pa && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function kr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Mu(e) {
  var t = e._init;
  return t(e._payload);
}
function ma(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = dt(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, g) {
    return a === null || a.tag !== 6
      ? ((a = Zl(d, f.mode, g)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, g) {
    var E = d.type;
    return E === Ut
      ? v(f, a, d.props.children, g, d.key)
      : a !== null &&
        (a.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === be &&
            Mu(E) === a.type))
      ? ((g = l(a, d.props)), (g.ref = kn(f, a, d)), (g.return = f), g)
      : ((g = Fr(d.type, d.key, d.props, null, f.mode, g)),
        (g.ref = kn(f, a, d)),
        (g.return = f),
        g);
  }
  function c(f, a, d, g) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Jl(d, f.mode, g)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function v(f, a, d, g, E) {
    return a === null || a.tag !== 7
      ? ((a = Lt(d, f.mode, g, E)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function m(f, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Zl("" + a, f.mode, d)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case ar:
          return (
            (d = Fr(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = kn(f, null, a)),
            (d.return = f),
            d
          );
        case Vt:
          return (a = Jl(a, f.mode, d)), (a.return = f), a;
        case be:
          var g = a._init;
          return m(f, g(a._payload), d);
      }
      if (xn(a) || mn(a))
        return (a = Lt(a, f.mode, d, null)), (a.return = f), a;
      kr(f, a);
    }
    return null;
  }
  function h(f, a, d, g) {
    var E = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return E !== null ? null : u(f, a, "" + d, g);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ar:
          return d.key === E ? s(f, a, d, g) : null;
        case Vt:
          return d.key === E ? c(f, a, d, g) : null;
        case be:
          return (E = d._init), h(f, a, E(d._payload), g);
      }
      if (xn(d) || mn(d)) return E !== null ? null : v(f, a, d, g, null);
      kr(f, d);
    }
    return null;
  }
  function w(f, a, d, g, E) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (f = f.get(d) || null), u(a, f, "" + g, E);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ar:
          return (f = f.get(g.key === null ? d : g.key) || null), s(a, f, g, E);
        case Vt:
          return (f = f.get(g.key === null ? d : g.key) || null), c(a, f, g, E);
        case be:
          var C = g._init;
          return w(f, a, d, C(g._payload), E);
      }
      if (xn(g) || mn(g)) return (f = f.get(d) || null), v(a, f, g, E, null);
      kr(a, g);
    }
    return null;
  }
  function k(f, a, d, g) {
    for (
      var E = null, C = null, N = a, z = (a = 0), W = null;
      N !== null && z < d.length;
      z++
    ) {
      N.index > z ? ((W = N), (N = null)) : (W = N.sibling);
      var O = h(f, N, d[z], g);
      if (O === null) {
        N === null && (N = W);
        break;
      }
      e && N && O.alternate === null && t(f, N),
        (a = i(O, a, z)),
        C === null ? (E = O) : (C.sibling = O),
        (C = O),
        (N = W);
    }
    if (z === d.length) return n(f, N), U && _t(f, z), E;
    if (N === null) {
      for (; z < d.length; z++)
        (N = m(f, d[z], g)),
          N !== null &&
            ((a = i(N, a, z)), C === null ? (E = N) : (C.sibling = N), (C = N));
      return U && _t(f, z), E;
    }
    for (N = r(f, N); z < d.length; z++)
      (W = w(N, f, z, d[z], g)),
        W !== null &&
          (e && W.alternate !== null && N.delete(W.key === null ? z : W.key),
          (a = i(W, a, z)),
          C === null ? (E = W) : (C.sibling = W),
          (C = W));
    return (
      e &&
        N.forEach(function (Le) {
          return t(f, Le);
        }),
      U && _t(f, z),
      E
    );
  }
  function S(f, a, d, g) {
    var E = mn(d);
    if (typeof E != "function") throw Error(y(150));
    if (((d = E.call(d)), d == null)) throw Error(y(151));
    for (
      var C = (E = null), N = a, z = (a = 0), W = null, O = d.next();
      N !== null && !O.done;
      z++, O = d.next()
    ) {
      N.index > z ? ((W = N), (N = null)) : (W = N.sibling);
      var Le = h(f, N, O.value, g);
      if (Le === null) {
        N === null && (N = W);
        break;
      }
      e && N && Le.alternate === null && t(f, N),
        (a = i(Le, a, z)),
        C === null ? (E = Le) : (C.sibling = Le),
        (C = Le),
        (N = W);
    }
    if (O.done) return n(f, N), U && _t(f, z), E;
    if (N === null) {
      for (; !O.done; z++, O = d.next())
        (O = m(f, O.value, g)),
          O !== null &&
            ((a = i(O, a, z)), C === null ? (E = O) : (C.sibling = O), (C = O));
      return U && _t(f, z), E;
    }
    for (N = r(f, N); !O.done; z++, O = d.next())
      (O = w(N, f, z, O.value, g)),
        O !== null &&
          (e && O.alternate !== null && N.delete(O.key === null ? z : O.key),
          (a = i(O, a, z)),
          C === null ? (E = O) : (C.sibling = O),
          (C = O));
    return (
      e &&
        N.forEach(function (pn) {
          return t(f, pn);
        }),
      U && _t(f, z),
      E
    );
  }
  function V(f, a, d, g) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Ut &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case ar:
          e: {
            for (var E = d.key, C = a; C !== null; ) {
              if (C.key === E) {
                if (((E = d.type), E === Ut)) {
                  if (C.tag === 7) {
                    n(f, C.sibling),
                      (a = l(C, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  C.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === be &&
                    Mu(E) === C.type)
                ) {
                  n(f, C.sibling),
                    (a = l(C, d.props)),
                    (a.ref = kn(f, C, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                n(f, C);
                break;
              } else t(f, C);
              C = C.sibling;
            }
            d.type === Ut
              ? ((a = Lt(d.props.children, f.mode, g, d.key)),
                (a.return = f),
                (f = a))
              : ((g = Fr(d.type, d.key, d.props, null, f.mode, g)),
                (g.ref = kn(f, a, d)),
                (g.return = f),
                (f = g));
          }
          return o(f);
        case Vt:
          e: {
            for (C = d.key; a !== null; ) {
              if (a.key === C)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = Jl(d, f.mode, g)), (a.return = f), (f = a);
          }
          return o(f);
        case be:
          return (C = d._init), V(f, a, C(d._payload), g);
      }
      if (xn(d)) return k(f, a, d, g);
      if (mn(d)) return S(f, a, d, g);
      kr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (n(f, a), (a = Zl(d, f.mode, g)), (a.return = f), (f = a)),
        o(f))
      : n(f, a);
  }
  return V;
}
var on = ma(!0),
  va = ma(!1),
  ir = {},
  He = yt(ir),
  Gn = yt(ir),
  Xn = yt(ir);
function Nt(e) {
  if (e === ir) throw Error(y(174));
  return e;
}
function _o(e, t) {
  switch ((I(Xn, t), I(Gn, e), I(He, ir), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ci(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ci(t, e));
  }
  j(He), I(He, t);
}
function un() {
  j(He), j(Gn), j(Xn);
}
function ga(e) {
  Nt(Xn.current);
  var t = Nt(He.current),
    n = ci(t, e.type);
  t !== n && (I(Gn, e), I(He, n));
}
function Eo(e) {
  Gn.current === e && (j(He), j(Gn));
}
var A = yt(0);
function br(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Wl = [];
function xo() {
  for (var e = 0; e < Wl.length; e++)
    Wl[e]._workInProgressVersionPrimary = null;
  Wl.length = 0;
}
var Mr = Je.ReactCurrentDispatcher,
  Ql = Je.ReactCurrentBatchConfig,
  Ot = 0,
  H = null,
  G = null,
  J = null,
  el = !1,
  On = !1,
  Zn = 0,
  dd = 0;
function ne() {
  throw Error(y(321));
}
function Co(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Fe(e[n], t[n])) return !1;
  return !0;
}
function No(e, t, n, r, l, i) {
  if (
    ((Ot = i),
    (H = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Mr.current = e === null || e.memoizedState === null ? vd : gd),
    (e = n(r, l)),
    On)
  ) {
    i = 0;
    do {
      if (((On = !1), (Zn = 0), 25 <= i)) throw Error(y(301));
      (i += 1),
        (J = G = null),
        (t.updateQueue = null),
        (Mr.current = yd),
        (e = n(r, l));
    } while (On);
  }
  if (
    ((Mr.current = tl),
    (t = G !== null && G.next !== null),
    (Ot = 0),
    (J = G = H = null),
    (el = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function zo() {
  var e = Zn !== 0;
  return (Zn = 0), e;
}
function Ve() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return J === null ? (H.memoizedState = J = e) : (J = J.next = e), J;
}
function Pe() {
  if (G === null) {
    var e = H.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var t = J === null ? H.memoizedState : J.next;
  if (t !== null) (J = t), (G = e);
  else {
    if (e === null) throw Error(y(310));
    (G = e),
      (e = {
        memoizedState: G.memoizedState,
        baseState: G.baseState,
        baseQueue: G.baseQueue,
        queue: G.queue,
        next: null,
      }),
      J === null ? (H.memoizedState = J = e) : (J = J.next = e);
  }
  return J;
}
function Jn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Kl(e) {
  var t = Pe(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = G,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      c = i;
    do {
      var v = c.lane;
      if ((Ot & v) === v)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var m = {
          lane: v,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = m), (o = r)) : (s = s.next = m),
          (H.lanes |= v),
          (Rt |= v);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (o = r) : (s.next = u),
      Fe(r, t.memoizedState) || (de = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (H.lanes |= i), (Rt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Yl(e) {
  var t = Pe(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Fe(i, t.memoizedState) || (de = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function ya() {}
function wa(e, t) {
  var n = H,
    r = Pe(),
    l = t(),
    i = !Fe(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (de = !0)),
    (r = r.queue),
    Po(_a.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (J !== null && J.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      qn(9, Sa.bind(null, n, r, l, t), void 0, null),
      q === null)
    )
      throw Error(y(349));
    Ot & 30 || ka(n, t, l);
  }
  return l;
}
function ka(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Sa(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ea(t) && xa(e);
}
function _a(e, t, n) {
  return n(function () {
    Ea(t) && xa(e);
  });
}
function Ea(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Fe(e, n);
  } catch {
    return !0;
  }
}
function xa(e) {
  var t = Xe(e, 1);
  t !== null && Ie(t, e, 1, -1);
}
function Ou(e) {
  var t = Ve();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Jn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = md.bind(null, H, e)),
    [t.memoizedState, e]
  );
}
function qn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ca() {
  return Pe().memoizedState;
}
function Or(e, t, n, r) {
  var l = Ve();
  (H.flags |= e),
    (l.memoizedState = qn(1 | t, n, void 0, r === void 0 ? null : r));
}
function ml(e, t, n, r) {
  var l = Pe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (G !== null) {
    var o = G.memoizedState;
    if (((i = o.destroy), r !== null && Co(r, o.deps))) {
      l.memoizedState = qn(t, n, i, r);
      return;
    }
  }
  (H.flags |= e), (l.memoizedState = qn(1 | t, n, i, r));
}
function Ru(e, t) {
  return Or(8390656, 8, e, t);
}
function Po(e, t) {
  return ml(2048, 8, e, t);
}
function Na(e, t) {
  return ml(4, 2, e, t);
}
function za(e, t) {
  return ml(4, 4, e, t);
}
function Pa(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function La(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ml(4, 4, Pa.bind(null, t, e), n)
  );
}
function Lo() {}
function Ta(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Co(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ma(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Co(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Oa(e, t, n) {
  return Ot & 21
    ? (Fe(n, t) || ((n = Is()), (H.lanes |= n), (Rt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (de = !0)), (e.memoizedState = n));
}
function pd(e, t) {
  var n = D;
  (D = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ql.transition;
  Ql.transition = {};
  try {
    e(!1), t();
  } finally {
    (D = n), (Ql.transition = r);
  }
}
function Ra() {
  return Pe().memoizedState;
}
function hd(e, t, n) {
  var r = ft(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Da(e))
  )
    Ia(t, n);
  else if (((n = fa(e, t, n, r)), n !== null)) {
    var l = ue();
    Ie(n, e, r, l), Fa(n, t, r);
  }
}
function md(e, t, n) {
  var r = ft(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Da(e)) Ia(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Fe(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), ko(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = fa(e, t, l, r)),
      n !== null && ((l = ue()), Ie(n, e, r, l), Fa(n, t, r));
  }
}
function Da(e) {
  var t = e.alternate;
  return e === H || (t !== null && t === H);
}
function Ia(e, t) {
  On = el = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Fa(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), io(e, n);
  }
}
var tl = {
    readContext: ze,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1,
  },
  vd = {
    readContext: ze,
    useCallback: function (e, t) {
      return (Ve().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ze,
    useEffect: Ru,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Or(4194308, 4, Pa.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Or(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Or(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ve();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ve();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = hd.bind(null, H, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ve();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ou,
    useDebugValue: Lo,
    useDeferredValue: function (e) {
      return (Ve().memoizedState = e);
    },
    useTransition: function () {
      var e = Ou(!1),
        t = e[0];
      return (e = pd.bind(null, e[1])), (Ve().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = H,
        l = Ve();
      if (U) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), q === null)) throw Error(y(349));
        Ot & 30 || ka(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Ru(_a.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        qn(9, Sa.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ve(),
        t = q.identifierPrefix;
      if (U) {
        var n = Qe,
          r = We;
        (n = (r & ~(1 << (32 - De(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Zn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = dd++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  gd = {
    readContext: ze,
    useCallback: Ta,
    useContext: ze,
    useEffect: Po,
    useImperativeHandle: La,
    useInsertionEffect: Na,
    useLayoutEffect: za,
    useMemo: Ma,
    useReducer: Kl,
    useRef: Ca,
    useState: function () {
      return Kl(Jn);
    },
    useDebugValue: Lo,
    useDeferredValue: function (e) {
      var t = Pe();
      return Oa(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = Kl(Jn)[0],
        t = Pe().memoizedState;
      return [e, t];
    },
    useMutableSource: ya,
    useSyncExternalStore: wa,
    useId: Ra,
    unstable_isNewReconciler: !1,
  },
  yd = {
    readContext: ze,
    useCallback: Ta,
    useContext: ze,
    useEffect: Po,
    useImperativeHandle: La,
    useInsertionEffect: Na,
    useLayoutEffect: za,
    useMemo: Ma,
    useReducer: Yl,
    useRef: Ca,
    useState: function () {
      return Yl(Jn);
    },
    useDebugValue: Lo,
    useDeferredValue: function (e) {
      var t = Pe();
      return G === null ? (t.memoizedState = e) : Oa(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = Yl(Jn)[0],
        t = Pe().memoizedState;
      return [e, t];
    },
    useMutableSource: ya,
    useSyncExternalStore: wa,
    useId: Ra,
    unstable_isNewReconciler: !1,
  };
function sn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Qc(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Gl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ri(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var wd = typeof WeakMap == "function" ? WeakMap : Map;
function ja(e, t, n) {
  (n = Ke(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      rl || ((rl = !0), (Bi = r)), Ri(e, t);
    }),
    n
  );
}
function Va(e, t, n) {
  (n = Ke(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ri(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ri(e, t),
          typeof r != "function" &&
            (ct === null ? (ct = new Set([this])) : ct.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Du(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new wd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Rd.bind(null, e, t, n)), t.then(e, e));
}
function Iu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Fu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ke(-1, 1)), (t.tag = 2), at(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var kd = Je.ReactCurrentOwner,
  de = !1;
function oe(e, t, n, r) {
  t.child = e === null ? va(t, null, n, r) : on(t, e.child, n, r);
}
function ju(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    en(t, l),
    (r = No(e, t, n, r, i, l)),
    (n = zo()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ze(e, t, l))
      : (U && n && ho(t), (t.flags |= 1), oe(e, t, r, l), t.child)
  );
}
function Vu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !jo(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ua(e, t, i, r, l))
      : ((e = Fr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Wn), n(o, r) && e.ref === t.ref)
    )
      return Ze(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = dt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ua(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Wn(i, r) && e.ref === t.ref)
      if (((de = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (de = !0);
      else return (t.lanes = e.lanes), Ze(e, t, l);
  }
  return Di(e, t, n, r, l);
}
function Aa(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        I(Xt, ve),
        (ve |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          I(Xt, ve),
          (ve |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        I(Xt, ve),
        (ve |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      I(Xt, ve),
      (ve |= r);
  return oe(e, t, l, n), t.child;
}
function Ha(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Di(e, t, n, r, l) {
  var i = he(n) ? Tt : ie.current;
  return (
    (i = rn(t, i)),
    en(t, l),
    (n = No(e, t, n, r, i, l)),
    (r = zo()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ze(e, t, l))
      : (U && r && ho(t), (t.flags |= 1), oe(e, t, n, l), t.child)
  );
}
function Uu(e, t, n, r, l) {
  if (he(n)) {
    var i = !0;
    Yr(t);
  } else i = !1;
  if ((en(t, l), t.stateNode === null))
    Rr(e, t), ha(t, n, r), Oi(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = ze(c))
      : ((c = he(n) ? Tt : ie.current), (c = rn(t, c)));
    var v = n.getDerivedStateFromProps,
      m =
        typeof v == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && Tu(t, o, r, c)),
      (et = !1);
    var h = t.memoizedState;
    (o.state = h),
      qr(t, r, o, l),
      (s = t.memoizedState),
      u !== r || h !== s || pe.current || et
        ? (typeof v == "function" && (Mi(t, n, v, r), (s = t.memoizedState)),
          (u = et || Lu(t, n, u, r, h, s, c))
            ? (m ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = c),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      da(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Me(t.type, u)),
      (o.props = c),
      (m = t.pendingProps),
      (h = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = ze(s))
        : ((s = he(n) ? Tt : ie.current), (s = rn(t, s)));
    var w = n.getDerivedStateFromProps;
    (v =
      typeof w == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== m || h !== s) && Tu(t, o, r, s)),
      (et = !1),
      (h = t.memoizedState),
      (o.state = h),
      qr(t, r, o, l);
    var k = t.memoizedState;
    u !== m || h !== k || pe.current || et
      ? (typeof w == "function" && (Mi(t, n, w, r), (k = t.memoizedState)),
        (c = et || Lu(t, n, c, r, h, k, s) || !1)
          ? (v ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, k, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, k, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = k)),
        (o.props = r),
        (o.state = k),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ii(e, t, n, r, i, l);
}
function Ii(e, t, n, r, l, i) {
  Ha(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && xu(t, n, !1), Ze(e, t, i);
  (r = t.stateNode), (kd.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = on(t, e.child, null, i)), (t.child = on(t, null, u, i)))
      : oe(e, t, u, i),
    (t.memoizedState = r.state),
    l && xu(t, n, !0),
    t.child
  );
}
function $a(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Eu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Eu(e, t.context, !1),
    _o(e, t.containerInfo);
}
function Au(e, t, n, r, l) {
  return ln(), vo(l), (t.flags |= 256), oe(e, t, n, r), t.child;
}
var Fi = { dehydrated: null, treeContext: null, retryLane: 0 };
function ji(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ba(e, t, n) {
  var r = t.pendingProps,
    l = A.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    I(A, l & 1),
    e === null)
  )
    return (
      Li(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = yl(o, r, 0, null)),
              (e = Lt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ji(n)),
              (t.memoizedState = Fi),
              e)
            : To(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Sd(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = dt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = dt(u, i)) : ((i = Lt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? ji(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Fi),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = dt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function To(e, t) {
  return (
    (t = yl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Sr(e, t, n, r) {
  return (
    r !== null && vo(r),
    on(t, e.child, null, n),
    (e = To(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Sd(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Gl(Error(y(422)))), Sr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = yl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Lt(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && on(t, e.child, null, o),
        (t.child.memoizedState = ji(o)),
        (t.memoizedState = Fi),
        i);
  if (!(t.mode & 1)) return Sr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(y(419))), (r = Gl(i, r, void 0)), Sr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), de || u)) {
    if (((r = q), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Xe(e, l), Ie(r, e, l, -1));
    }
    return Fo(), (r = Gl(Error(y(421)))), Sr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Dd.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ge = st(l.nextSibling)),
      (ye = t),
      (U = !0),
      (Re = null),
      e !== null &&
        ((Ee[xe++] = We),
        (Ee[xe++] = Qe),
        (Ee[xe++] = Mt),
        (We = e.id),
        (Qe = e.overflow),
        (Mt = t)),
      (t = To(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Hu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ti(e.return, t, n);
}
function Xl(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Wa(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((oe(e, t, r.children, n), (r = A.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Hu(e, n, t);
        else if (e.tag === 19) Hu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((I(A, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && br(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Xl(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && br(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Xl(t, !0, n, null, i);
        break;
      case "together":
        Xl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Rr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ze(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Rt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = dt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function _d(e, t, n) {
  switch (t.tag) {
    case 3:
      $a(t), ln();
      break;
    case 5:
      ga(t);
      break;
    case 1:
      he(t.type) && Yr(t);
      break;
    case 4:
      _o(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      I(Zr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (I(A, A.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ba(e, t, n)
          : (I(A, A.current & 1),
            (e = Ze(e, t, n)),
            e !== null ? e.sibling : null);
      I(A, A.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Wa(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        I(A, A.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Aa(e, t, n);
  }
  return Ze(e, t, n);
}
var Qa, Vi, Ka, Ya;
Qa = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Vi = function () {};
Ka = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Nt(He.current);
    var i = null;
    switch (n) {
      case "input":
        (l = oi(e, l)), (r = oi(e, r)), (i = []);
        break;
      case "select":
        (l = $({}, l, { value: void 0 })),
          (r = $({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = ai(e, l)), (r = ai(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Qr);
    }
    fi(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (jn.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (jn.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && F("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(c, s));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ya = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Sn(e, t) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Ed(e, t, n) {
  var r = t.pendingProps;
  switch ((mo(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return re(t), null;
    case 1:
      return he(t.type) && Kr(), re(t), null;
    case 3:
      return (
        (r = t.stateNode),
        un(),
        j(pe),
        j(ie),
        xo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (wr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Re !== null && (Ki(Re), (Re = null)))),
        Vi(e, t),
        re(t),
        null
      );
    case 5:
      Eo(t);
      var l = Nt(Xn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ka(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return re(t), null;
        }
        if (((e = Nt(He.current)), wr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ue] = t), (r[Yn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              F("cancel", r), F("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Nn.length; l++) F(Nn[l], r);
              break;
            case "source":
              F("error", r);
              break;
            case "img":
            case "image":
            case "link":
              F("error", r), F("load", r);
              break;
            case "details":
              F("toggle", r);
              break;
            case "input":
              Zo(r, i), F("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                F("invalid", r);
              break;
            case "textarea":
              qo(r, i), F("invalid", r);
          }
          fi(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      yr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      yr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : jn.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  F("scroll", r);
            }
          switch (n) {
            case "input":
              cr(r), Jo(r, i, !0);
              break;
            case "textarea":
              cr(r), bo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Qr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ks(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ue] = t),
            (e[Yn] = r),
            Qa(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = di(n, r)), n)) {
              case "dialog":
                F("cancel", e), F("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                F("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Nn.length; l++) F(Nn[l], e);
                l = r;
                break;
              case "source":
                F("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                F("error", e), F("load", e), (l = r);
                break;
              case "details":
                F("toggle", e), (l = r);
                break;
              case "input":
                Zo(e, r), (l = oi(e, r)), F("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = $({}, r, { value: void 0 })),
                  F("invalid", e);
                break;
              case "textarea":
                qo(e, r), (l = ai(e, r)), F("invalid", e);
                break;
              default:
                l = r;
            }
            fi(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? Es(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Ss(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Vn(e, s)
                    : typeof s == "number" && Vn(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (jn.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && F("scroll", e)
                      : s != null && bi(e, i, s, o));
              }
            switch (n) {
              case "input":
                cr(e), Jo(e, r, !1);
                break;
              case "textarea":
                cr(e), bo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + mt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Zt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Zt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Qr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return re(t), null;
    case 6:
      if (e && t.stateNode != null) Ya(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = Nt(Xn.current)), Nt(He.current), wr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ue] = t),
            (i = r.nodeValue !== n) && ((e = ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                yr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  yr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ue] = t),
            (t.stateNode = r);
      }
      return re(t), null;
    case 13:
      if (
        (j(A),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && ge !== null && t.mode & 1 && !(t.flags & 128))
          ca(), ln(), (t.flags |= 98560), (i = !1);
        else if (((i = wr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(y(317));
            i[Ue] = t;
          } else
            ln(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          re(t), (i = !1);
        } else Re !== null && (Ki(Re), (Re = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || A.current & 1 ? X === 0 && (X = 3) : Fo())),
          t.updateQueue !== null && (t.flags |= 4),
          re(t),
          null);
    case 4:
      return (
        un(), Vi(e, t), e === null && Qn(t.stateNode.containerInfo), re(t), null
      );
    case 10:
      return wo(t.type._context), re(t), null;
    case 17:
      return he(t.type) && Kr(), re(t), null;
    case 19:
      if ((j(A), (i = t.memoizedState), i === null)) return re(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Sn(i, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = br(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Sn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return I(A, (A.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            K() > an &&
            ((t.flags |= 128), (r = !0), Sn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = br(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Sn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !U)
            )
              return re(t), null;
          } else
            2 * K() - i.renderingStartTime > an &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Sn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = K()),
          (t.sibling = null),
          (n = A.current),
          I(A, r ? (n & 1) | 2 : n & 1),
          t)
        : (re(t), null);
    case 22:
    case 23:
      return (
        Io(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ve & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : re(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function xd(e, t) {
  switch ((mo(t), t.tag)) {
    case 1:
      return (
        he(t.type) && Kr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        un(),
        j(pe),
        j(ie),
        xo(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Eo(t), null;
    case 13:
      if ((j(A), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        ln();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return j(A), null;
    case 4:
      return un(), null;
    case 10:
      return wo(t.type._context), null;
    case 22:
    case 23:
      return Io(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var _r = !1,
  le = !1,
  Cd = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function Gt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        B(e, t, r);
      }
    else n.current = null;
}
function Ui(e, t, n) {
  try {
    n();
  } catch (r) {
    B(e, t, r);
  }
}
var $u = !1;
function Nd(e, t) {
  if (((_i = $r), (e = Js()), po(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            c = 0,
            v = 0,
            m = e,
            h = null;
          t: for (;;) {
            for (
              var w;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = o + l),
                m !== i || (r !== 0 && m.nodeType !== 3) || (s = o + r),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (w = m.firstChild) !== null;

            )
              (h = m), (m = w);
            for (;;) {
              if (m === e) break t;
              if (
                (h === n && ++c === l && (u = o),
                h === i && ++v === r && (s = o),
                (w = m.nextSibling) !== null)
              )
                break;
              (m = h), (h = m.parentNode);
            }
            m = w;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ei = { focusedElem: e, selectionRange: n }, $r = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var k = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (k !== null) {
                  var S = k.memoizedProps,
                    V = k.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Me(t.type, S),
                      V
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (g) {
          B(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (k = $u), ($u = !1), k;
}
function Rn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Ui(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function vl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ai(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ga(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ga(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ue], delete t[Yn], delete t[Ni], delete t[sd], delete t[ad])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Xa(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Bu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Xa(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Hi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Qr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Hi(e, t, n), e = e.sibling; e !== null; ) Hi(e, t, n), (e = e.sibling);
}
function $i(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for ($i(e, t, n), e = e.sibling; e !== null; ) $i(e, t, n), (e = e.sibling);
}
var b = null,
  Oe = !1;
function qe(e, t, n) {
  for (n = n.child; n !== null; ) Za(e, t, n), (n = n.sibling);
}
function Za(e, t, n) {
  if (Ae && typeof Ae.onCommitFiberUnmount == "function")
    try {
      Ae.onCommitFiberUnmount(sl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      le || Gt(n, t);
    case 6:
      var r = b,
        l = Oe;
      (b = null),
        qe(e, t, n),
        (b = r),
        (Oe = l),
        b !== null &&
          (Oe
            ? ((e = b),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null &&
        (Oe
          ? ((e = b),
            (n = n.stateNode),
            e.nodeType === 8
              ? $l(e.parentNode, n)
              : e.nodeType === 1 && $l(e, n),
            $n(e))
          : $l(b, n.stateNode));
      break;
    case 4:
      (r = b),
        (l = Oe),
        (b = n.stateNode.containerInfo),
        (Oe = !0),
        qe(e, t, n),
        (b = r),
        (Oe = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Ui(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      qe(e, t, n);
      break;
    case 1:
      if (
        !le &&
        (Gt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          B(n, t, u);
        }
      qe(e, t, n);
      break;
    case 21:
      qe(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((le = (r = le) || n.memoizedState !== null), qe(e, t, n), (le = r))
        : qe(e, t, n);
      break;
    default:
      qe(e, t, n);
  }
}
function Wu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Cd()),
      t.forEach(function (r) {
        var l = Id.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Te(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (b = u.stateNode), (Oe = !1);
              break e;
            case 3:
              (b = u.stateNode.containerInfo), (Oe = !0);
              break e;
            case 4:
              (b = u.stateNode.containerInfo), (Oe = !0);
              break e;
          }
          u = u.return;
        }
        if (b === null) throw Error(y(160));
        Za(i, o, l), (b = null), (Oe = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        B(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ja(t, e), (t = t.sibling);
}
function Ja(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Te(t, e), je(e), r & 4)) {
        try {
          Rn(3, e, e.return), vl(3, e);
        } catch (S) {
          B(e, e.return, S);
        }
        try {
          Rn(5, e, e.return);
        } catch (S) {
          B(e, e.return, S);
        }
      }
      break;
    case 1:
      Te(t, e), je(e), r & 512 && n !== null && Gt(n, n.return);
      break;
    case 5:
      if (
        (Te(t, e),
        je(e),
        r & 512 && n !== null && Gt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Vn(l, "");
        } catch (S) {
          B(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && ys(l, i),
              di(u, o);
            var c = di(u, i);
            for (o = 0; o < s.length; o += 2) {
              var v = s[o],
                m = s[o + 1];
              v === "style"
                ? Es(l, m)
                : v === "dangerouslySetInnerHTML"
                ? Ss(l, m)
                : v === "children"
                ? Vn(l, m)
                : bi(l, v, m, c);
            }
            switch (u) {
              case "input":
                ui(l, i);
                break;
              case "textarea":
                ws(l, i);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? Zt(l, !!i.multiple, w, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Zt(l, !!i.multiple, i.defaultValue, !0)
                      : Zt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Yn] = i;
          } catch (S) {
            B(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((Te(t, e), je(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (S) {
          B(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (Te(t, e), je(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          $n(t.containerInfo);
        } catch (S) {
          B(e, e.return, S);
        }
      break;
    case 4:
      Te(t, e), je(e);
      break;
    case 13:
      Te(t, e),
        je(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ro = K())),
        r & 4 && Wu(e);
      break;
    case 22:
      if (
        ((v = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((le = (c = le) || v), Te(t, e), (le = c)) : Te(t, e),
        je(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !v && e.mode & 1)
        )
          for (_ = e, v = e.child; v !== null; ) {
            for (m = _ = v; _ !== null; ) {
              switch (((h = _), (w = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Rn(4, h, h.return);
                  break;
                case 1:
                  Gt(h, h.return);
                  var k = h.stateNode;
                  if (typeof k.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (k.props = t.memoizedProps),
                        (k.state = t.memoizedState),
                        k.componentWillUnmount();
                    } catch (S) {
                      B(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Gt(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Ku(m);
                    continue;
                  }
              }
              w !== null ? ((w.return = h), (_ = w)) : Ku(m);
            }
            v = v.sibling;
          }
        e: for (v = null, m = e; ; ) {
          if (m.tag === 5) {
            if (v === null) {
              v = m;
              try {
                (l = m.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = _s("display", o)));
              } catch (S) {
                B(e, e.return, S);
              }
            }
          } else if (m.tag === 6) {
            if (v === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (S) {
                B(e, e.return, S);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            v === m && (v = null), (m = m.return);
          }
          v === m && (v = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Te(t, e), je(e), r & 4 && Wu(e);
      break;
    case 21:
      break;
    default:
      Te(t, e), je(e);
  }
}
function je(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Xa(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Vn(l, ""), (r.flags &= -33));
          var i = Bu(e);
          $i(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Bu(e);
          Hi(e, u, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      B(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function zd(e, t, n) {
  (_ = e), qa(e);
}
function qa(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || _r;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || le;
        u = _r;
        var c = le;
        if (((_r = o), (le = s) && !c))
          for (_ = l; _ !== null; )
            (o = _),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Yu(l)
                : s !== null
                ? ((s.return = o), (_ = s))
                : Yu(l);
        for (; i !== null; ) (_ = i), qa(i), (i = i.sibling);
        (_ = l), (_r = u), (le = c);
      }
      Qu(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (_ = i)) : Qu(e);
  }
}
function Qu(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              le || vl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !le)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Me(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Pu(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Pu(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var v = c.memoizedState;
                  if (v !== null) {
                    var m = v.dehydrated;
                    m !== null && $n(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        le || (t.flags & 512 && Ai(t));
      } catch (h) {
        B(t, t.return, h);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function Ku(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function Yu(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            vl(4, t);
          } catch (s) {
            B(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              B(t, l, s);
            }
          }
          var i = t.return;
          try {
            Ai(t);
          } catch (s) {
            B(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ai(t);
          } catch (s) {
            B(t, o, s);
          }
      }
    } catch (s) {
      B(t, t.return, s);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (_ = u);
      break;
    }
    _ = t.return;
  }
}
var Pd = Math.ceil,
  nl = Je.ReactCurrentDispatcher,
  Mo = Je.ReactCurrentOwner,
  Ne = Je.ReactCurrentBatchConfig,
  R = 0,
  q = null,
  Y = null,
  ee = 0,
  ve = 0,
  Xt = yt(0),
  X = 0,
  bn = null,
  Rt = 0,
  gl = 0,
  Oo = 0,
  Dn = null,
  fe = null,
  Ro = 0,
  an = 1 / 0,
  $e = null,
  rl = !1,
  Bi = null,
  ct = null,
  Er = !1,
  lt = null,
  ll = 0,
  In = 0,
  Wi = null,
  Dr = -1,
  Ir = 0;
function ue() {
  return R & 6 ? K() : Dr !== -1 ? Dr : (Dr = K());
}
function ft(e) {
  return e.mode & 1
    ? R & 2 && ee !== 0
      ? ee & -ee
      : fd.transition !== null
      ? (Ir === 0 && (Ir = Is()), Ir)
      : ((e = D),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : $s(e.type))),
        e)
    : 1;
}
function Ie(e, t, n, r) {
  if (50 < In) throw ((In = 0), (Wi = null), Error(y(185)));
  nr(e, n, r),
    (!(R & 2) || e !== q) &&
      (e === q && (!(R & 2) && (gl |= n), X === 4 && nt(e, ee)),
      me(e, r),
      n === 1 && R === 0 && !(t.mode & 1) && ((an = K() + 500), pl && wt()));
}
function me(e, t) {
  var n = e.callbackNode;
  ff(e, t);
  var r = Hr(e, e === q ? ee : 0);
  if (r === 0)
    n !== null && nu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && nu(n), t === 1))
      e.tag === 0 ? cd(Gu.bind(null, e)) : ua(Gu.bind(null, e)),
        od(function () {
          !(R & 6) && wt();
        }),
        (n = null);
    else {
      switch (Fs(r)) {
        case 1:
          n = lo;
          break;
        case 4:
          n = Rs;
          break;
        case 16:
          n = Ar;
          break;
        case 536870912:
          n = Ds;
          break;
        default:
          n = Ar;
      }
      n = oc(n, ba.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ba(e, t) {
  if (((Dr = -1), (Ir = 0), R & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (tn() && e.callbackNode !== n) return null;
  var r = Hr(e, e === q ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = il(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var i = tc();
    (q !== e || ee !== t) && (($e = null), (an = K() + 500), Pt(e, t));
    do
      try {
        Md();
        break;
      } catch (u) {
        ec(e, u);
      }
    while (1);
    yo(),
      (nl.current = i),
      (R = l),
      Y !== null ? (t = 0) : ((q = null), (ee = 0), (t = X));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = gi(e)), l !== 0 && ((r = l), (t = Qi(e, l)))), t === 1)
    )
      throw ((n = bn), Pt(e, 0), nt(e, r), me(e, K()), n);
    if (t === 6) nt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Ld(l) &&
          ((t = il(e, r)),
          t === 2 && ((i = gi(e)), i !== 0 && ((r = i), (t = Qi(e, i)))),
          t === 1))
      )
        throw ((n = bn), Pt(e, 0), nt(e, r), me(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          Et(e, fe, $e);
          break;
        case 3:
          if (
            (nt(e, r), (r & 130023424) === r && ((t = Ro + 500 - K()), 10 < t))
          ) {
            if (Hr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ue(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ci(Et.bind(null, e, fe, $e), t);
            break;
          }
          Et(e, fe, $e);
          break;
        case 4:
          if ((nt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - De(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Pd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ci(Et.bind(null, e, fe, $e), r);
            break;
          }
          Et(e, fe, $e);
          break;
        case 5:
          Et(e, fe, $e);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return me(e, K()), e.callbackNode === n ? ba.bind(null, e) : null;
}
function Qi(e, t) {
  var n = Dn;
  return (
    e.current.memoizedState.isDehydrated && (Pt(e, t).flags |= 256),
    (e = il(e, t)),
    e !== 2 && ((t = fe), (fe = n), t !== null && Ki(t)),
    e
  );
}
function Ki(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function Ld(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Fe(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function nt(e, t) {
  for (
    t &= ~Oo,
      t &= ~gl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - De(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Gu(e) {
  if (R & 6) throw Error(y(327));
  tn();
  var t = Hr(e, 0);
  if (!(t & 1)) return me(e, K()), null;
  var n = il(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = gi(e);
    r !== 0 && ((t = r), (n = Qi(e, r)));
  }
  if (n === 1) throw ((n = bn), Pt(e, 0), nt(e, t), me(e, K()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Et(e, fe, $e),
    me(e, K()),
    null
  );
}
function Do(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    (R = n), R === 0 && ((an = K() + 500), pl && wt());
  }
}
function Dt(e) {
  lt !== null && lt.tag === 0 && !(R & 6) && tn();
  var t = R;
  R |= 1;
  var n = Ne.transition,
    r = D;
  try {
    if (((Ne.transition = null), (D = 1), e)) return e();
  } finally {
    (D = r), (Ne.transition = n), (R = t), !(R & 6) && wt();
  }
}
function Io() {
  (ve = Xt.current), j(Xt);
}
function Pt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), id(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((mo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Kr();
          break;
        case 3:
          un(), j(pe), j(ie), xo();
          break;
        case 5:
          Eo(r);
          break;
        case 4:
          un();
          break;
        case 13:
          j(A);
          break;
        case 19:
          j(A);
          break;
        case 10:
          wo(r.type._context);
          break;
        case 22:
        case 23:
          Io();
      }
      n = n.return;
    }
  if (
    ((q = e),
    (Y = e = dt(e.current, null)),
    (ee = ve = t),
    (X = 0),
    (bn = null),
    (Oo = gl = Rt = 0),
    (fe = Dn = null),
    Ct !== null)
  ) {
    for (t = 0; t < Ct.length; t++)
      if (((n = Ct[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Ct = null;
  }
  return e;
}
function ec(e, t) {
  do {
    var n = Y;
    try {
      if ((yo(), (Mr.current = tl), el)) {
        for (var r = H.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        el = !1;
      }
      if (
        ((Ot = 0),
        (J = G = H = null),
        (On = !1),
        (Zn = 0),
        (Mo.current = null),
        n === null || n.return === null)
      ) {
        (X = 1), (bn = t), (Y = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = ee),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            v = u,
            m = v.tag;
          if (!(v.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = v.alternate;
            h
              ? ((v.updateQueue = h.updateQueue),
                (v.memoizedState = h.memoizedState),
                (v.lanes = h.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var w = Iu(o);
          if (w !== null) {
            (w.flags &= -257),
              Fu(w, o, u, i, t),
              w.mode & 1 && Du(i, c, t),
              (t = w),
              (s = c);
            var k = t.updateQueue;
            if (k === null) {
              var S = new Set();
              S.add(s), (t.updateQueue = S);
            } else k.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Du(i, c, t), Fo();
              break e;
            }
            s = Error(y(426));
          }
        } else if (U && u.mode & 1) {
          var V = Iu(o);
          if (V !== null) {
            !(V.flags & 65536) && (V.flags |= 256),
              Fu(V, o, u, i, t),
              vo(sn(s, u));
            break e;
          }
        }
        (i = s = sn(s, u)),
          X !== 4 && (X = 2),
          Dn === null ? (Dn = [i]) : Dn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = ja(i, s, t);
              zu(i, f);
              break e;
            case 1:
              u = s;
              var a = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (ct === null || !ct.has(d))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = Va(i, u, t);
                zu(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      rc(n);
    } catch (E) {
      (t = E), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function tc() {
  var e = nl.current;
  return (nl.current = tl), e === null ? tl : e;
}
function Fo() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    q === null || (!(Rt & 268435455) && !(gl & 268435455)) || nt(q, ee);
}
function il(e, t) {
  var n = R;
  R |= 2;
  var r = tc();
  (q !== e || ee !== t) && (($e = null), Pt(e, t));
  do
    try {
      Td();
      break;
    } catch (l) {
      ec(e, l);
    }
  while (1);
  if ((yo(), (R = n), (nl.current = r), Y !== null)) throw Error(y(261));
  return (q = null), (ee = 0), X;
}
function Td() {
  for (; Y !== null; ) nc(Y);
}
function Md() {
  for (; Y !== null && !tf(); ) nc(Y);
}
function nc(e) {
  var t = ic(e.alternate, e, ve);
  (e.memoizedProps = e.pendingProps),
    t === null ? rc(e) : (Y = t),
    (Mo.current = null);
}
function rc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = xd(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (Y = null);
        return;
      }
    } else if (((n = Ed(n, t, ve)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function Et(e, t, n) {
  var r = D,
    l = Ne.transition;
  try {
    (Ne.transition = null), (D = 1), Od(e, t, n, r);
  } finally {
    (Ne.transition = l), (D = r);
  }
  return null;
}
function Od(e, t, n, r) {
  do tn();
  while (lt !== null);
  if (R & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (df(e, i),
    e === q && ((Y = q = null), (ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Er ||
      ((Er = !0),
      oc(Ar, function () {
        return tn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ne.transition), (Ne.transition = null);
    var o = D;
    D = 1;
    var u = R;
    (R |= 4),
      (Mo.current = null),
      Nd(e, n),
      Ja(n, e),
      qf(Ei),
      ($r = !!_i),
      (Ei = _i = null),
      (e.current = n),
      zd(n),
      nf(),
      (R = u),
      (D = o),
      (Ne.transition = i);
  } else e.current = n;
  if (
    (Er && ((Er = !1), (lt = e), (ll = l)),
    (i = e.pendingLanes),
    i === 0 && (ct = null),
    of(n.stateNode),
    me(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (rl) throw ((rl = !1), (e = Bi), (Bi = null), e);
  return (
    ll & 1 && e.tag !== 0 && tn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Wi ? In++ : ((In = 0), (Wi = e))) : (In = 0),
    wt(),
    null
  );
}
function tn() {
  if (lt !== null) {
    var e = Fs(ll),
      t = Ne.transition,
      n = D;
    try {
      if (((Ne.transition = null), (D = 16 > e ? 16 : e), lt === null))
        var r = !1;
      else {
        if (((e = lt), (lt = null), (ll = 0), R & 6)) throw Error(y(331));
        var l = R;
        for (R |= 4, _ = e.current; _ !== null; ) {
          var i = _,
            o = i.child;
          if (_.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (_ = c; _ !== null; ) {
                  var v = _;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rn(8, v, i);
                  }
                  var m = v.child;
                  if (m !== null) (m.return = v), (_ = m);
                  else
                    for (; _ !== null; ) {
                      v = _;
                      var h = v.sibling,
                        w = v.return;
                      if ((Ga(v), v === c)) {
                        _ = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = w), (_ = h);
                        break;
                      }
                      _ = w;
                    }
                }
              }
              var k = i.alternate;
              if (k !== null) {
                var S = k.child;
                if (S !== null) {
                  k.child = null;
                  do {
                    var V = S.sibling;
                    (S.sibling = null), (S = V);
                  } while (S !== null);
                }
              }
              _ = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (_ = o);
          else
            e: for (; _ !== null; ) {
              if (((i = _), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Rn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (_ = f);
                break e;
              }
              _ = i.return;
            }
        }
        var a = e.current;
        for (_ = a; _ !== null; ) {
          o = _;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (_ = d);
          else
            e: for (o = a; _ !== null; ) {
              if (((u = _), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vl(9, u);
                  }
                } catch (E) {
                  B(u, u.return, E);
                }
              if (u === o) {
                _ = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (_ = g);
                break e;
              }
              _ = u.return;
            }
        }
        if (
          ((R = l), wt(), Ae && typeof Ae.onPostCommitFiberRoot == "function")
        )
          try {
            Ae.onPostCommitFiberRoot(sl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (D = n), (Ne.transition = t);
    }
  }
  return !1;
}
function Xu(e, t, n) {
  (t = sn(n, t)),
    (t = ja(e, t, 1)),
    (e = at(e, t, 1)),
    (t = ue()),
    e !== null && (nr(e, 1, t), me(e, t));
}
function B(e, t, n) {
  if (e.tag === 3) Xu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Xu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ct === null || !ct.has(r)))
        ) {
          (e = sn(n, e)),
            (e = Va(t, e, 1)),
            (t = at(t, e, 1)),
            (e = ue()),
            t !== null && (nr(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Rd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    q === e &&
      (ee & n) === n &&
      (X === 4 || (X === 3 && (ee & 130023424) === ee && 500 > K() - Ro)
        ? Pt(e, 0)
        : (Oo |= n)),
    me(e, t);
}
function lc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = pr), (pr <<= 1), !(pr & 130023424) && (pr = 4194304))
      : (t = 1));
  var n = ue();
  (e = Xe(e, t)), e !== null && (nr(e, t, n), me(e, n));
}
function Dd(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), lc(e, n);
}
function Id(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), lc(e, n);
}
var ic;
ic = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pe.current) de = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (de = !1), _d(e, t, n);
      de = !!(e.flags & 131072);
    }
  else (de = !1), U && t.flags & 1048576 && sa(t, Xr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Rr(e, t), (e = t.pendingProps);
      var l = rn(t, ie.current);
      en(t, n), (l = No(null, t, r, e, l, n));
      var i = zo();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            he(r) ? ((i = !0), Yr(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            So(t),
            (l.updater = hl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Oi(t, r, e, n),
            (t = Ii(null, t, r, !0, i, n)))
          : ((t.tag = 0), U && i && ho(t), oe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Rr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = jd(r)),
          (e = Me(r, e)),
          l)
        ) {
          case 0:
            t = Di(null, t, r, e, n);
            break e;
          case 1:
            t = Uu(null, t, r, e, n);
            break e;
          case 11:
            t = ju(null, t, r, e, n);
            break e;
          case 14:
            t = Vu(null, t, r, Me(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        Di(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        Uu(e, t, r, l, n)
      );
    case 3:
      e: {
        if (($a(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          da(e, t),
          qr(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = sn(Error(y(423)), t)), (t = Au(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = sn(Error(y(424)), t)), (t = Au(e, t, r, n, l));
            break e;
          } else
            for (
              ge = st(t.stateNode.containerInfo.firstChild),
                ye = t,
                U = !0,
                Re = null,
                n = va(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ln(), r === l)) {
            t = Ze(e, t, n);
            break e;
          }
          oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ga(t),
        e === null && Li(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        xi(r, l) ? (o = null) : i !== null && xi(r, i) && (t.flags |= 32),
        Ha(e, t),
        oe(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Li(t), null;
    case 13:
      return Ba(e, t, n);
    case 4:
      return (
        _o(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = on(t, null, r, n)) : oe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        ju(e, t, r, l, n)
      );
    case 7:
      return oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          I(Zr, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Fe(i.value, o)) {
            if (i.children === l.children && !pe.current) {
              t = Ze(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Ke(-1, n & -n)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var v = c.pending;
                        v === null
                          ? (s.next = s)
                          : ((s.next = v.next), (v.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Ti(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(y(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Ti(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        oe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        en(t, n),
        (l = ze(l)),
        (r = r(l)),
        (t.flags |= 1),
        oe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Me(r, t.pendingProps)),
        (l = Me(r.type, l)),
        Vu(e, t, r, l, n)
      );
    case 15:
      return Ua(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        Rr(e, t),
        (t.tag = 1),
        he(r) ? ((e = !0), Yr(t)) : (e = !1),
        en(t, n),
        ha(t, r, l),
        Oi(t, r, l, n),
        Ii(null, t, r, !0, e, n)
      );
    case 19:
      return Wa(e, t, n);
    case 22:
      return Aa(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function oc(e, t) {
  return Os(e, t);
}
function Fd(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ce(e, t, n, r) {
  return new Fd(e, t, n, r);
}
function jo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function jd(e) {
  if (typeof e == "function") return jo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === to)) return 11;
    if (e === no) return 14;
  }
  return 2;
}
function dt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ce(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Fr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) jo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Ut:
        return Lt(n.children, l, i, t);
      case eo:
        (o = 8), (l |= 8);
        break;
      case ni:
        return (
          (e = Ce(12, n, t, l | 2)), (e.elementType = ni), (e.lanes = i), e
        );
      case ri:
        return (e = Ce(13, n, t, l)), (e.elementType = ri), (e.lanes = i), e;
      case li:
        return (e = Ce(19, n, t, l)), (e.elementType = li), (e.lanes = i), e;
      case ms:
        return yl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ps:
              o = 10;
              break e;
            case hs:
              o = 9;
              break e;
            case to:
              o = 11;
              break e;
            case no:
              o = 14;
              break e;
            case be:
              (o = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ce(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Lt(e, t, n, r) {
  return (e = Ce(7, e, r, t)), (e.lanes = n), e;
}
function yl(e, t, n, r) {
  return (
    (e = Ce(22, e, r, t)),
    (e.elementType = ms),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Zl(e, t, n) {
  return (e = Ce(6, e, null, t)), (e.lanes = n), e;
}
function Jl(e, t, n) {
  return (
    (t = Ce(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Vd(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ml(0)),
    (this.expirationTimes = Ml(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ml(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Vo(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new Vd(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ce(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    So(i),
    e
  );
}
function Ud(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Vt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function uc(e) {
  if (!e) return vt;
  e = e._reactInternals;
  e: {
    if (Ft(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (he(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (he(n)) return oa(e, n, t);
  }
  return t;
}
function sc(e, t, n, r, l, i, o, u, s) {
  return (
    (e = Vo(n, r, !0, e, l, i, o, u, s)),
    (e.context = uc(null)),
    (n = e.current),
    (r = ue()),
    (l = ft(n)),
    (i = Ke(r, l)),
    (i.callback = t ?? null),
    at(n, i, l),
    (e.current.lanes = l),
    nr(e, l, r),
    me(e, r),
    e
  );
}
function wl(e, t, n, r) {
  var l = t.current,
    i = ue(),
    o = ft(l);
  return (
    (n = uc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ke(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = at(l, t, o)),
    e !== null && (Ie(e, l, o, i), Tr(e, l, o)),
    o
  );
}
function ol(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Zu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Uo(e, t) {
  Zu(e, t), (e = e.alternate) && Zu(e, t);
}
function Ad() {
  return null;
}
var ac =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ao(e) {
  this._internalRoot = e;
}
kl.prototype.render = Ao.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  wl(e, t, null, null);
};
kl.prototype.unmount = Ao.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Dt(function () {
      wl(null, e, null, null);
    }),
      (t[Ge] = null);
  }
};
function kl(e) {
  this._internalRoot = e;
}
kl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Us();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tt.length && t !== 0 && t < tt[n].priority; n++);
    tt.splice(n, 0, e), n === 0 && Hs(e);
  }
};
function Ho(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Sl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ju() {}
function Hd(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = ol(o);
        i.call(c);
      };
    }
    var o = sc(t, r, e, 0, null, !1, !1, "", Ju);
    return (
      (e._reactRootContainer = o),
      (e[Ge] = o.current),
      Qn(e.nodeType === 8 ? e.parentNode : e),
      Dt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = ol(s);
      u.call(c);
    };
  }
  var s = Vo(e, 0, !1, null, null, !1, !1, "", Ju);
  return (
    (e._reactRootContainer = s),
    (e[Ge] = s.current),
    Qn(e.nodeType === 8 ? e.parentNode : e),
    Dt(function () {
      wl(t, s, n, r);
    }),
    s
  );
}
function _l(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = ol(o);
        u.call(s);
      };
    }
    wl(t, o, e, l);
  } else o = Hd(n, t, e, l, r);
  return ol(o);
}
js = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Cn(t.pendingLanes);
        n !== 0 &&
          (io(t, n | 1), me(t, K()), !(R & 6) && ((an = K() + 500), wt()));
      }
      break;
    case 13:
      Dt(function () {
        var r = Xe(e, 1);
        if (r !== null) {
          var l = ue();
          Ie(r, e, 1, l);
        }
      }),
        Uo(e, 1);
  }
};
oo = function (e) {
  if (e.tag === 13) {
    var t = Xe(e, 134217728);
    if (t !== null) {
      var n = ue();
      Ie(t, e, 134217728, n);
    }
    Uo(e, 134217728);
  }
};
Vs = function (e) {
  if (e.tag === 13) {
    var t = ft(e),
      n = Xe(e, t);
    if (n !== null) {
      var r = ue();
      Ie(n, e, t, r);
    }
    Uo(e, t);
  }
};
Us = function () {
  return D;
};
As = function (e, t) {
  var n = D;
  try {
    return (D = e), t();
  } finally {
    D = n;
  }
};
hi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ui(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = dl(r);
            if (!l) throw Error(y(90));
            gs(r), ui(r, l);
          }
        }
      }
      break;
    case "textarea":
      ws(e, n);
      break;
    case "select":
      (t = n.value), t != null && Zt(e, !!n.multiple, t, !1);
  }
};
Ns = Do;
zs = Dt;
var $d = { usingClientEntryPoint: !1, Events: [lr, Bt, dl, xs, Cs, Do] },
  _n = {
    findFiberByHostInstance: xt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Bd = {
    bundleType: _n.bundleType,
    version: _n.version,
    rendererPackageName: _n.rendererPackageName,
    rendererConfig: _n.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Je.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ts(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: _n.findFiberByHostInstance || Ad,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var xr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!xr.isDisabled && xr.supportsFiber)
    try {
      (sl = xr.inject(Bd)), (Ae = xr);
    } catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $d;
ke.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ho(t)) throw Error(y(200));
  return Ud(e, t, null, n);
};
ke.createRoot = function (e, t) {
  if (!Ho(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = ac;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Vo(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ge] = t.current),
    Qn(e.nodeType === 8 ? e.parentNode : e),
    new Ao(t)
  );
};
ke.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = Ts(t)), (e = e === null ? null : e.stateNode), e;
};
ke.flushSync = function (e) {
  return Dt(e);
};
ke.hydrate = function (e, t, n) {
  if (!Sl(t)) throw Error(y(200));
  return _l(null, e, t, !0, n);
};
ke.hydrateRoot = function (e, t, n) {
  if (!Ho(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = ac;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = sc(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Ge] = t.current),
    Qn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new kl(t);
};
ke.render = function (e, t, n) {
  if (!Sl(t)) throw Error(y(200));
  return _l(null, e, t, !1, n);
};
ke.unmountComponentAtNode = function (e) {
  if (!Sl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Dt(function () {
        _l(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ge] = null);
        });
      }),
      !0)
    : !1;
};
ke.unstable_batchedUpdates = Do;
ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Sl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return _l(e, t, n, !1, r);
};
ke.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = ke);
})(Uc);
var qu = bl;
(ql.createRoot = qu.createRoot), (ql.hydrateRoot = qu.hydrateRoot);
const Wd = "./assets/cv-be7bdae9.pdf";
function Qd() {
  return P("div", {
    className: "cta",
    children: [
      p("a", {
        href: Wd,
        download: !0,
        className: "btn",
        children: "Download CV",
      }),
      p("a", {
        href: "#Contact",
        className: "btn btn-primary",
        children: "Let's Talk",
      }),
    ],
  });
}
var cc = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  bu = zt.createContext && zt.createContext(cc),
  pt =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (pt =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var l in t)
                Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
            }
            return e;
          }),
        pt.apply(this, arguments)
      );
    },
  Kd =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
          t.indexOf(r[l]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
            (n[r[l]] = e[r[l]]);
      return n;
    };
function fc(e) {
  return (
    e &&
    e.map(function (t, n) {
      return zt.createElement(t.tag, pt({ key: n }, t.attr), fc(t.child));
    })
  );
}
function ce(e) {
  return function (t) {
    return zt.createElement(Yd, pt({ attr: pt({}, e.attr) }, t), fc(e.child));
  };
}
function Yd(e) {
  var t = function (n) {
    var r = e.attr,
      l = e.size,
      i = e.title,
      o = Kd(e, ["attr", "size", "title"]),
      u = l || n.size || "1em",
      s;
    return (
      n.className && (s = n.className),
      e.className && (s = (s ? s + " " : "") + e.className),
      zt.createElement(
        "svg",
        pt(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: s,
            style: pt(pt({ color: e.color || n.color }, n.style), e.style),
            height: u,
            width: u,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && zt.createElement("title", null, i),
        e.children
      )
    );
  };
  return bu !== void 0
    ? zt.createElement(bu.Consumer, null, function (n) {
        return t(n);
      })
    : t(cc);
}
function _e(e) {
  return ce({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z",
        },
      },
    ],
  })(e);
}
function Gd(e) {
  return ce({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z",
        },
      },
      {
        tag: "path",
        attr: {
          d: "M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z",
        },
      },
    ],
  })(e);
}
function Xd(e) {
  return ce({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z",
        },
      },
    ],
  })(e);
}
function $o(e) {
  return ce({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z",
        },
      },
    ],
  })(e);
}
function Zd(e) {
  return ce({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",
        },
      },
    ],
  })(e);
}
function Jd(e) {
  return ce({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
        },
      },
      {
        tag: "path",
        attr: {
          d: "M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z",
        },
      },
    ],
  })(e);
}
function qd(e) {
  return ce({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z",
        },
      },
    ],
  })(e);
}
function bd() {
  return P("div", {
    className: "header__socials",
    children: [
      p("a", {
        href: "https://www.linkedin.com/in/ali-monzer-34a91827a",
        target: "_blank",
        children: p(Zd, {}),
      }),
      p("a", {
        href: "https://github.com/shadowindali",
        target: "_blank",
        children: p(Xd, {}),
      }),
      p("a", {
        href: "https://www.instagram.com/Ali_monzer10/",
        target: "_blank",
        children: p($o, {}),
      }),
    ],
  });
}
const ep = "./assets/me2-ca1bc277.jpeg";
function tp() {
  return p("section", {
    id: "home",
    className: "header",
    style: { marginTop: 0 },
    children: P("div", {
      className: "container header__container",
      children: [
        p("h5", { children: "Hello I'm" }),
        p("h1", { children: "Ali Monzer" }),
        p("h4", {
          className: "text-light",
          children: "Mobile / Web Developer",
        }),
        p("h6", {
          className: "text-light",
          children: "Expert at: Mobile Development",
        }),
        p(Qd, {}),
        p(bd, {}),
        p("div", {
          className: "me",
          children: p("img", { src: ep, alt: "me" }),
        }),
        p("a", {
          href: "#Contact",
          className: "scroll__down",
          children: "Scroll Down",
        }),
      ],
    }),
  });
}
function np(e) {
  return ce({
    tag: "svg",
    attr: { t: "1569683753031", viewBox: "0 0 1024 1024", version: "1.1" },
    child: [
      { tag: "defs", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M312.1 591.5c3.1 3.1 8.2 3.1 11.3 0l101.8-101.8 86.1 86.2c3.1 3.1 8.2 3.1 11.3 0l226.3-226.5c3.1-3.1 3.1-8.2 0-11.3l-36.8-36.8c-3.1-3.1-8.2-3.1-11.3 0L517 485.3l-86.1-86.2c-3.1-3.1-8.2-3.1-11.3 0L275.3 543.4c-3.1 3.1-3.1 8.2 0 11.3l36.8 36.8z",
        },
      },
      {
        tag: "path",
        attr: {
          d: "M904 160H548V96c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H120c-17.7 0-32 14.3-32 32v520c0 17.7 14.3 32 32 32h356.4v32L311.6 884.1c-3.7 2.4-4.7 7.3-2.3 11l30.3 47.2v0.1c2.4 3.7 7.4 4.7 11.1 2.3L512 838.9l161.3 105.8c3.7 2.4 8.7 1.4 11.1-2.3v-0.1l30.3-47.2c2.4-3.7 1.3-8.6-2.3-11L548 776.3V744h356c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z m-40 512H160V232h704v440z",
        },
      },
    ],
  })(e);
}
function rp(e) {
  return ce({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z",
        },
      },
    ],
  })(e);
}
function lp(e) {
  return ce({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z",
        },
      },
    ],
  })(e);
}
function ip(e) {
  return ce({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M6 22h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3zM5 8V5c0-.805.55-.988 1-1h13v12H5V8z",
        },
      },
      { tag: "path", attr: { d: "M8 6h9v2H8z" } },
    ],
  })(e);
}
function op(e) {
  return ce({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M5 2c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414 15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5zm14 14h-4.414L12 18.586 9.414 16H5V4h14v12z",
        },
      },
      { tag: "path", attr: { d: "M7 7h10v2H7zm0 4h7v2H7z" } },
    ],
  })(e);
}
function up() {
  const [e, t] = ht.useState("#");
  return (
    ht.useEffect(() => {
      const n = document.querySelectorAll("section"),
        r = new IntersectionObserver(
          (l) => {
            l.forEach((i) => {
              i.isIntersecting && t(`#${i.target.id}`);
            });
          },
          { threshold: 0.3, rootMargin: "0px 0px -30% 0px" }
        );
      return (
        n.forEach((l) => r.observe(l)),
        () => {
          n.forEach((l) => r.unobserve(l));
        }
      );
    }, []),
    P("nav", {
      children: [
        p("a", {
          href: "#home",
          onClick: () => t("#home"),
          className: e === "#home" ? "active" : "",
          children: p(rp, {}),
        }),
        p("a", {
          href: "#About",
          onClick: () => t("#About"),
          className: e === "#About" ? "active" : "",
          children: p(lp, {}),
        }),
        p("a", {
          href: "#Experience",
          onClick: () => t("#Experience"),
          className: e === "#Experience" ? "active" : "",
          children: p(ip, {}),
        }),
        p("a", {
          href: "#Portifolio",
          onClick: () => t("#Portifolio"),
          className: e === "#Portifolio" ? "active" : "",
          children: p(Jd, {}),
        }),
        p("a", {
          href: "#Contact",
          onClick: () => t("#Contact"),
          className: e === "#Contact" ? "active" : "",
          children: p(op, {}),
        }),
      ],
    })
  );
}
const sp = "./assets/me-about-dffb5528.jpg";
function ap(e) {
  return ce({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "path", attr: { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" } },
      { tag: "circle", attr: { cx: "9", cy: "7", r: "4" } },
      { tag: "path", attr: { d: "M23 21v-2a4 4 0 0 0-3-3.87" } },
      { tag: "path", attr: { d: "M16 3.13a4 4 0 0 1 0 7.75" } },
    ],
  })(e);
}
function cp() {
  return P("section", {
    id: "About",
    children: [
      p("h5", { children: "Get To Know" }),
      p("h2", { children: "About Me" }),
      P("div", {
        className: "container about__container",
        children: [
          p("div", {
            className: "about__me",
            children: p("div", {
              className: "about__me-image",
              children: p("img", { src: sp, alt: "About Image" }),
            }),
          }),
          P("div", {
            className: "about__content",
            children: [
              P("div", {
                className: "about__cards",
                children: [
                  P("article", {
                    className: "about__card",
                    children: [
                      p(Gd, { className: "about__icon" }),
                      p("h5", { children: "Experience" }),
                      p("small", { children: "1.5+ years" }),
                    ],
                  }),
                  P("article", {
                    className: "about__card",
                    children: [
                      p(ap, { className: "about__icon" }),
                      p("h5", { children: "Clients" }),
                      p("small", { children: "8+ Clients" }),
                    ],
                  }),
                  P("article", {
                    className: "about__card",
                    children: [
                      p(np, { className: "about__icon" }),
                      p("h5", { children: "Projects" }),
                      p("small", { children: "12+ Completed" }),
                    ],
                  }),
                ],
              }),
              p("p", {
                children:
                  "Hello, my name is Ali Monzer. I'm a 22-year-old graduate with a degree in Computer Science from the Lebanese University. I’m currently working as a Web and Mobile Developer, continuously improving my skills to grow in the field and deliver high-quality solutions that satisfy my clients.",
              }),
              p("a", {
                href: "#Contact",
                className: "btn btn-primary",
                children: "Let's Talk",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function fp() {
  return p(as, {
    children: P("section", {
      id: "Experience",
      children: [
        p("h5", { children: "What Skills I Have?" }),
        p("h2", { children: "My Experience" }),
        P("div", {
          className: "container experience__container",
          children: [
            P("div", {
              className: "experience__frontend",
              children: [
                p("h3", { children: "Frontend Development" }),
                P("div", {
                  className: "experience__content",
                  children: [
                    P("article", {
                      className: "experience__details",
                      children: [
                        p(_e, { className: "experience__details-icon" }),
                        p("div", { children: p("h4", { children: "HTML" }) }),
                      ],
                    }),
                    P("article", {
                      className: "experience__details",
                      children: [
                        p(_e, { className: "experience__details-icon" }),
                        p("div", { children: p("h4", { children: "CSS" }) }),
                      ],
                    }),
                    P("article", {
                      className: "experience__details",
                      children: [
                        p(_e, { className: "experience__details-icon" }),
                        p("div", {
                          children: p("h4", { children: "Javascript" }),
                        }),
                      ],
                    }),
                    P("article", {
                      className: "experience__details",
                      children: [
                        p(_e, { className: "experience__details-icon" }),
                        p("div", { children: p("h4", { children: "React" }) }),
                      ],
                    }),
                    P("article", {
                      className: "experience__details",
                      children: [
                        p(_e, { className: "experience__details-icon" }),
                        p("div", {
                          children: p("h4", { children: "React Native" }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            P("div", {
              className: "experience__backend",
              children: [
                p("h3", { children: "Backend Development" }),
                P("div", {
                  className: "experience__content",
                  children: [
                    P("article", {
                      className: "experience__details",
                      children: [
                        p(_e, { className: "experience__details-icon" }),
                        p("div", {
                          children: p("h4", { children: "Node.js" }),
                        }),
                      ],
                    }),
                    P("article", {
                      className: "experience__details",
                      children: [
                        p(_e, { className: "experience__details-icon" }),
                        p("div", {
                          children: p("h4", { children: "Express js" }),
                        }),
                      ],
                    }),
                    P("article", {
                      className: "experience__details",
                      children: [
                        p(_e, { className: "experience__details-icon" }),
                        p("div", {
                          children: p("h4", { children: "Mongo DB" }),
                        }),
                      ],
                    }),
                    P("article", {
                      className: "experience__details",
                      children: [
                        p(_e, { className: "experience__details-icon" }),
                        p("div", { children: p("h4", { children: "MSSQL" }) }),
                      ],
                    }),
                    P("article", {
                      className: "experience__details",
                      children: [
                        p(_e, { className: "experience__details-icon" }),
                        p("div", {
                          children: p("h4", { children: "Socket io" }),
                        }),
                      ],
                    }),
                    P("article", {
                      className: "experience__details",
                      children: [
                        p(_e, { className: "experience__details-icon" }),
                        p("div", {
                          children: p("h4", { children: "Typescript" }),
                        }),
                      ],
                    }),
                    P("article", {
                      className: "experience__details",
                      children: [
                        p(_e, { className: "experience__details-icon" }),
                        p("div", {
                          children: p("h4", { children: "Firebase" }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const dp = "./assets/weshop-1e6ce73d.png",
  pp = "./assets/chattingapp-7f37810b.png",
  hp = "./assets/bank-7a7c46b8.png",
  mp = "./assets/portfolio3-e53b5d72.png",
  vp = "./assets/portfolio1-f6ab2c00.png",
  gp = "./assets/portfolio2-2c3c0fcc.png";
function yp() {
  return P("section", {
    id: "Portifolio",
    children: [
      p("h5", { children: "My Recent Work" }),
      p("h2", { children: "Portifolio" }),
      P("div", {
        className: "container portifolio__container",
        children: [
          P("article", {
            className: "portifolio__item",
            children: [
              p("div", {
                className: "portifolio__item-image",
                children: p("img", { src: pp }),
              }),
              p("h3", { children: "Chatting App" }),
              p("div", {
                className: "portifolio__item-cta",
                children: p("a", {
                  href: "https://github.com/shadowindali/Chat-App",
                  className: "btn",
                  children: "Github",
                }),
              }),
            ],
          }),
          P("article", {
            className: "portifolio__item",
            children: [
              p("div", {
                className: "portifolio__item-image",
                children: p("img", { src: dp }),
              }),
              p("h3", { children: "WeShop" }),
              p("div", {
                className: "portifolio__item-cta",
                children: p("a", {
                  href: "https://github.com/shadowindali/Weshop",
                  className: "btn",
                  children: "Github",
                }),
              }),
            ],
          }),
          P("article", {
            className: "portifolio__item",
            children: [
              p("div", {
                className: "portifolio__item-image",
                children: p("img", { src: hp }),
              }),
              p("h3", { children: "Online Bank System" }),
              p("div", {
                className: "portifolio__item-cta",
                children: p("a", {
                  href: "https://github.com/shadowindali/Online-Bank-System",
                  className: "btn",
                  children: "Github",
                }),
              }),
            ],
          }),
          P("article", {
            className: "portifolio__item",
            children: [
              p("div", {
                className: "portifolio__item-image",
                children: p("img", { src: mp }),
              }),
              p("h3", { children: "Portifolio" }),
              p("div", {
                className: "portifolio__item-cta",
                children: p("a", {
                  href: "https://shadowindali.github.io/Portfolio/",
                  className: "btn",
                  children: "Github",
                }),
              }),
            ],
          }),
          P("article", {
            className: "portifolio__item",
            children: [
              p("div", {
                className: "portifolio__item-image",
                children: p("img", { src: vp }),
              }),
              p("h3", { children: "Ligue 1" }),
            ],
          }),
          P("article", {
            className: "portifolio__item",
            children: [
              p("div", {
                className: "portifolio__item-image",
                children: p("img", { src: gp }),
              }),
              p("h3", { children: "TRVL" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function wp(e) {
  return ce({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        },
      },
    ],
  })(e);
}
const er = { _origin: "https://api.emailjs.com" },
  kp = (e, t = "https://api.emailjs.com") => {
    (er._userID = e), (er._origin = t);
  },
  dc = (e, t, n) => {
    if (!e)
      throw "The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";
    if (!t)
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!n)
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
    return !0;
  };
class es {
  constructor(t) {
    (this.status = t.status), (this.text = t.responseText);
  }
}
const pc = (e, t, n = {}) =>
    new Promise((r, l) => {
      const i = new XMLHttpRequest();
      i.addEventListener("load", ({ target: o }) => {
        const u = new es(o);
        u.status === 200 || u.text === "OK" ? r(u) : l(u);
      }),
        i.addEventListener("error", ({ target: o }) => {
          l(new es(o));
        }),
        i.open("POST", er._origin + e, !0),
        Object.keys(n).forEach((o) => {
          i.setRequestHeader(o, n[o]);
        }),
        i.send(t);
    }),
  Sp = (e, t, n, r) => {
    const l = r || er._userID;
    return (
      dc(l, e, t),
      pc(
        "/api/v1.0/email/send",
        JSON.stringify({
          lib_version: "3.2.0",
          user_id: l,
          service_id: e,
          template_id: t,
          template_params: n,
        }),
        { "Content-type": "application/json" }
      )
    );
  },
  _p = (e) => {
    let t;
    if (
      (typeof e == "string" ? (t = document.querySelector(e)) : (t = e),
      !t || t.nodeName !== "FORM")
    )
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
    return t;
  },
  Ep = (e, t, n, r) => {
    const l = r || er._userID,
      i = _p(n);
    dc(l, e, t);
    const o = new FormData(i);
    return (
      o.append("lib_version", "3.2.0"),
      o.append("service_id", e),
      o.append("template_id", t),
      o.append("user_id", l),
      pc("/api/v1.0/email/send-form", o)
    );
  },
  xp = { init: kp, send: Sp, sendForm: Ep };
function Cp() {
  const e = ht.useRef();
  return P("section", {
    id: "Contact",
    children: [
      p("h5", { children: "Get in touch" }),
      p("h2", { children: "ContactMe" }),
      P("div", {
        className: "container contact__container",
        children: [
          P("div", {
            className: "contact__options",
            children: [
              P("article", {
                className: "contact__option",
                children: [
                  p(wp, { className: "contact__option-icon" }),
                  p("h4", { children: "Email" }),
                  p("h5", {
                    className: "text-light",
                    children: "ali_monzer16@hotmail.com",
                  }),
                  p("a", {
                    href: "mailto:ali_monzer16@hotmail.com",
                    target: "__blank",
                    children: "Send a message",
                  }),
                ],
              }),
              P("article", {
                className: "contact__option",
                children: [
                  p($o, { className: "contact__option-icon" }),
                  p("h4", { children: "Instagram" }),
                  p("h5", {
                    className: "text-light",
                    children: "ali_monzer10",
                  }),
                  p("a", {
                    href: "https://ig.me/m/ali_monzer10",
                    target: "__blank",
                    children: "Send a message",
                  }),
                ],
              }),
              P("article", {
                className: "contact__option",
                children: [
                  p(qd, { className: "contact__option-icon" }),
                  p("h4", { children: "Whatsapp" }),
                  p("h5", {
                    className: "text-light",
                    children: "+96170506572",
                  }),
                  p("a", {
                    href: "https://api.whatsapp.com/send?phone+96170506572",
                    target: "__blank",
                    children: "Send a message",
                  }),
                ],
              }),
            ],
          }),
          P("form", {
            ref: e,
            onSubmit: (n) => {
              n.preventDefault(),
                xp
                  .sendForm(
                    "service_4sj0i1x",
                    "template_seneegy",
                    e.current,
                    "ZJ1gkc59UAQgixmgA"
                  )
                  .then(
                    (r) => {
                      console.log(r.text);
                    },
                    (r) => {
                      console.log(r.text);
                    }
                  ),
                n.target.reset();
            },
            children: [
              p("input", {
                type: "text",
                name: "name",
                placeholder: "Your Full Name",
                required: !0,
              }),
              p("input", {
                type: "email",
                name: "email",
                placeholder: "Your Email",
                required: !0,
              }),
              p("textarea", {
                name: "message",
                rows: "7",
                placeholder: "Your Message",
                required: !0,
              }),
              p("button", {
                type: "submit",
                className: "btn btn-primary",
                children: "Send Message",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Np(e) {
  return ce({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z",
        },
      },
    ],
  })(e);
}
function zp() {
  return P("footer", {
    children: [
      p("a", {
        href: "#",
        className: "footer__logo",
        children: "SHADOWINDALI",
      }),
      P("ul", {
        className: "permalinks",
        children: [
          p("li", { children: p("a", { href: "#", children: "Home" }) }),
          p("li", { children: p("a", { href: "#About", children: "About" }) }),
          p("li", {
            children: p("a", { href: "#Experience", children: "Expeirience" }),
          }),
          p("li", {
            children: p("a", { href: "#Portifolio", children: "Portfolio" }),
          }),
          p("li", {
            children: p("a", { href: "#Contact", children: "Contact" }),
          }),
        ],
      }),
      P("div", {
        className: "footer__socials",
        children: [
          p("a", {
            href: "https://facebook.com/ali.monzer.522",
            children: p(Np, {}),
          }),
          p("a", {
            href: "https://instagram.com/ali_monzer10",
            children: p($o, {}),
          }),
        ],
      }),
    ],
  });
}
function Pp() {
  return P(as, {
    children: [
      p(tp, {}),
      p(up, {}),
      p(cp, {}),
      p(fp, {}),
      p(yp, {}),
      p(Cp, {}),
      p(zp, {}),
    ],
  });
}
ql.createRoot(document.getElementById("root")).render(p(Pp, {}));
