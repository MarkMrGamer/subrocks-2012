(function () {
    function h(a) {
        throw a;
    }
    var j = void 0,
        k = !0,
        l = null,
        m = !1,
        p, q = this;

    function s(a) {
        for (var a = a.split("."), b = q, c; c = a.shift();)
            if (b[c] != l) b = b[c];
            else return l;
        return b
    }

    function aa() {}

    function ba(a) {
        a.getInstance = function () {
            return a.ke ? a.ke : a.ke = new a
        }
    }

    function ca(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function da(a) {
        return a !== j
    }

    function ea(a) {
        return "array" == ca(a)
    }

    function fa(a) {
        var b = ca(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function ga(a) {
        return "string" == typeof a
    }

    function ha(a) {
        return "function" == ca(a)
    }

    function ia(a) {
        var b = typeof a;
        return "object" == b && a != l || "function" == b
    }

    function ja(a) {
        return a[la] || (a[la] = ++ma)
    }
    var la = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36),
        ma = 0;

    function na(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function oa(a, b, c) {
        a || h(Error());
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }

    function t(a, b, c) {
        t = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? na : oa;
        return t.apply(l, arguments)
    }

    function pa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var b = Array.prototype.slice.call(arguments);
            b.unshift.apply(b, c);
            return a.apply(this, b)
        }
    }
    var qa = Date.now || function () {
        return +new Date
    };

    function ra(a, b) {
        var c = b || {},
            d;
        for (d in c) var e = ("" + c[d]).replace(/\$/g, "$$$$"),
            a = a.replace(RegExp("\\{\\$" + d + "\\}", "gi"), e);
        return a
    }

    function u(a, b) {
        var c = a.split("."),
            d = q;
        !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift());) !c.length && da(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
    }

    function v(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.J = b.prototype;
        a.prototype = new c
    }
    Function.prototype.bind = Function.prototype.bind || function (a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return t.apply(l, c)
        }
        return t(this, a)
    };

    function sa(a, b) {
        for (var c = 1; c < arguments.length; c++) var d = String(arguments[c]).replace(/\$/g, "$$$$"),
            a = a.replace(/\%s/, d);
        return a
    }

    function ta(a) {
        return /^[\s\xa0]*$/.test(a)
    }

    function va(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }

    function wa(a, b) {
        var c = String(a).toLowerCase(),
            d = String(b).toLowerCase();
        return c < d ? -1 : c == d ? 0 : 1
    }

    function ya(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    }

    function za(a) {
        if (!Aa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ba, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Da, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ea, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Fa, "&quot;"));
        return a
    }
    var Ba = /&/g,
        Da = /</g,
        Ea = />/g,
        Fa = /\"/g,
        Aa = /[&<>\"]/;

    function Ga(a) {
        if (-1 != a.indexOf("&"))
            if ("document" in q) var b = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"'
                },
                c = document.createElement("div"),
                a = a.replace(Ha, function (a, e) {
                    var f = b[a];
                    if (f) return f;
                    if ("#" == e.charAt(0)) {
                        var g = Number("0" + e.substr(1));
                        isNaN(g) || (f = String.fromCharCode(g))
                    }
                    f || (c.innerHTML = a + " ", f = c.firstChild.nodeValue.slice(0, -1));
                    return b[a] = f
                });
            else a = a.replace(/&([^;]+);/g, function (a, b) {
                switch (b) {
                case "amp":
                    return "&";
                case "lt":
                    return "<";
                case "gt":
                    return ">";
                case "quot":
                    return '"';
                default:
                    if ("#" ==
                        b.charAt(0)) {
                        var c = Number("0" + b.substr(1));
                        if (!isNaN(c)) return String.fromCharCode(c)
                    }
                    return a
                }
            });
        return a
    }
    var Ha = /&([^;\s<&]+);?/g;

    function Ia(a, b) {
        a.length > b && (a = a.substring(0, b - 3) + "...");
        return a
    }
    var Ja = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\"
        },
        La = {
            "'": "\\'"
        };

    function Ma(a, b) {
        for (var c = 0, d = va(String(a)).split("."), e = va(String(b)).split("."), f = Math.max(d.length, e.length), g = 0; 0 == c && g < f; g++) {
            var i = d[g] || "",
                n = e[g] || "",
                r = RegExp("(\\d*)(\\D*)", "g"),
                y = RegExp("(\\d*)(\\D*)", "g");
            do {
                var D = r.exec(i) || ["", "", ""],
                    G = y.exec(n) || ["", "", ""];
                if (0 == D[0].length && 0 == G[0].length) break;
                c = ((0 == D[1].length ? 0 : parseInt(D[1], 10)) < (0 == G[1].length ? 0 : parseInt(G[1], 10)) ? -1 : (0 == D[1].length ? 0 : parseInt(D[1], 10)) > (0 == G[1].length ? 0 : parseInt(G[1], 10)) ? 1 : 0) || ((0 == D[2].length) < (0 == G[2].length) ?
                    -1 : (0 == D[2].length) > (0 == G[2].length) ? 1 : 0) || (D[2] < G[2] ? -1 : D[2] > G[2] ? 1 : 0)
            } while (0 == c)
        }
        return c
    }

    function Na(a) {
        for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c), b %= 4294967296;
        return b
    };
    var Oa = Array.prototype,
        Pa = Oa.indexOf ? function (a, b, c) {
            return Oa.indexOf.call(a, b, c)
        } : function (a, b, c) {
            c = c == l ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (ga(a)) return !ga(b) || 1 != b.length ? -1 : a.indexOf(b, c);
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        w = Oa.forEach ? function (a, b, c) {
            Oa.forEach.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = ga(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Qa = Oa.filter ? function (a, b, c) {
            return Oa.filter.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = [], f =
                    0, g = ga(a) ? a.split("") : a, i = 0; i < d; i++)
                if (i in g) {
                    var n = g[i];
                    b.call(c, n, i, a) && (e[f++] = n)
                } return e
        },
        Ra = Oa.map ? function (a, b, c) {
            return Oa.map.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = Array(d), f = ga(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
            return e
        };

    function Sa(a, b) {
        var c = Ta(a, b, j);
        return 0 > c ? l : ga(a) ? a.charAt(c) : a[c]
    }

    function Ta(a, b, c) {
        for (var d = a.length, e = ga(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return f;
        return -1
    }

    function Ua(a, b) {
        return 0 <= Pa(a, b)
    }

    function Va(a) {
        if (!ea(a))
            for (var b = a.length - 1; 0 <= b; b--) delete a[b];
        a.length = 0
    }

    function Xa(a, b) {
        var c = Pa(a, b);
        0 <= c && Ya(a, c)
    }

    function Ya(a, b) {
        Oa.splice.call(a, b, 1)
    }

    function Za(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function $a(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c],
                e;
            if (ea(d) || (e = fa(d)) && d.hasOwnProperty("callee")) a.push.apply(a, d);
            else if (e)
                for (var f = a.length, g = d.length, i = 0; i < g; i++) a[f + i] = d[i];
            else a.push(d)
        }
    }

    function ab(a, b, c, d) {
        Oa.splice.apply(a, bb(arguments, 1))
    }

    function bb(a, b, c) {
        return 2 >= arguments.length ? Oa.slice.call(a, b) : Oa.slice.call(a, b, c)
    }

    function cb(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    var db;

    function eb(a) {
        a = a.className;
        return ga(a) && a.match(/\S+/g) || []
    }

    function x(a, b) {
        var c = eb(a),
            d = bb(arguments, 1),
            e = c.length + d.length;
        fb(c, d);
        a.className = c.join(" ");
        return c.length == e
    }

    function z(a, b) {
        var c = eb(a),
            d = bb(arguments, 1),
            e = gb(c, d);
        a.className = e.join(" ");
        return e.length == c.length - d.length
    }

    function fb(a, b) {
        for (var c = 0; c < b.length; c++) Ua(a, b[c]) || a.push(b[c])
    }

    function gb(a, b) {
        return Qa(a, function (a) {
            return !Ua(b, a)
        })
    }

    function hb(a, b, c) {
        for (var d = eb(a), e = m, f = 0; f < d.length; f++) d[f] == b && (ab(d, f--, 1), e = k);
        e && (d.push(c), a.className = d.join(" "))
    }

    function A(a, b, c) {
        var d = eb(a);
        ga(b) ? Xa(d, b) : ea(b) && (d = gb(d, b));
        ga(c) && !Ua(d, c) ? d.push(c) : ea(c) && fb(d, c);
        a.className = d.join(" ")
    }

    function B(a, b) {
        return Ua(eb(a), b)
    }

    function C(a, b, c) {
        c ? x(a, b) : z(a, b)
    }

    function ib(a, b) {
        var c = !B(a, b);
        C(a, b, c);
        return c
    };

    function jb(a, b) {
        this.x = da(a) ? a : 0;
        this.y = da(b) ? b : 0
    }
    jb.prototype.ta = function () {
        return new jb(this.x, this.y)
    };

    function kb(a, b) {
        return new jb(a.x - b.x, a.y - b.y)
    };

    function lb(a, b) {
        this.width = a;
        this.height = b
    }
    p = lb.prototype;
    p.ta = function () {
        return new lb(this.width, this.height)
    };
    p.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    p.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    p.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    p.scale = function (a) {
        this.width *= a;
        this.height *= a;
        return this
    };

    function mb(a, b) {
        for (var c in a) b.call(j, a[c], c, a)
    }

    function nb(a) {
        for (var b in a) return a[b]
    }

    function ob(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    }

    function pb(a, b, c) {
        for (var d in a)
            if (b.call(c, a[d], d, a)) return d
    }

    function qb(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    }
    var rb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function sb(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < rb.length; f++) c = rb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var tb, ub, vb, wb, xb, yb;

    function zb() {
        return q.navigator ? q.navigator.userAgent : l
    }

    function Ab() {
        return q.navigator
    }
    wb = vb = ub = tb = m;
    var Bb;
    if (Bb = zb()) {
        var Cb = Ab();
        tb = 0 == Bb.indexOf("Opera");
        ub = !tb && -1 != Bb.indexOf("MSIE");
        vb = !tb && -1 != Bb.indexOf("WebKit");
        wb = !tb && !vb && "Gecko" == Cb.product
    }
    var Db = tb,
        E = ub,
        Eb = wb,
        Fb = vb,
        Gb = Ab(),
        Hb = Gb && Gb.platform || "";
    xb = -1 != Hb.indexOf("Mac");
    yb = -1 != Hb.indexOf("Win");
    var Ib = !!Ab() && -1 != (Ab().appVersion || "").indexOf("X11"),
        Jb;
    a: {
        var Kb = "",
            Lb;
        if (Db && q.opera) var Mb = q.opera.version,
            Kb = "function" == typeof Mb ? Mb() : Mb;
        else if (Eb ? Lb = /rv\:([^\);]+)(\)|;)/ : E ? Lb = /MSIE\s+([^\);]+)(\)|;)/ : Fb && (Lb = /WebKit\/(\S+)/), Lb) var Nb = Lb.exec(zb()),
            Kb = Nb ? Nb[1] : "";
        if (E) {
            var Ob, Pb = q.document;
            Ob = Pb ? Pb.documentMode : j;
            if (Ob > parseFloat(Kb)) {
                Jb = String(Ob);
                break a
            }
        }
        Jb = Kb
    }
    var Qb = Jb,
        Rb = {};

    function Sb(a) {
        return Rb[a] || (Rb[a] = 0 <= Ma(Qb, a))
    }
    var Tb = {};

    function Ub(a) {
        return Tb[a] || (Tb[a] = E && !!document.documentMode && document.documentMode >= a)
    };
    var Vb = !E || Ub(9),
        Wb = !Eb && !E || E && Ub(9) || Eb && Sb("1.9.1"),
        Xb = E && !Sb("9"),
        Yb = E || Db || Fb;

    function Zb(a) {
        return a ? new $b(ac(a)) : db || (db = new $b)
    }

    function F(a) {
        return ga(a) ? document.getElementById(a) : a
    }

    function I(a, b) {
        var c = b || document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : J("*", a, b)
    }

    function K(a, b) {
        var c = b || document,
            d = l;
        return (d = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : I(a, b)[0]) || l
    }

    function J(a, b, c) {
        var d = document,
            c = c || d,
            a = a && "*" != a ? a.toUpperCase() : "";
        if (c.querySelectorAll && c.querySelector && (a || b)) return c.querySelectorAll(a + (b ? "." + b : ""));
        if (b && c.getElementsByClassName) {
            c = c.getElementsByClassName(b);
            if (a) {
                for (var d = {}, e = 0, f = 0, g; g = c[f]; f++) a == g.nodeName && (d[e++] = g);
                d.length = e;
                return d
            }
            return c
        }
        c = c.getElementsByTagName(a || "*");
        if (b) {
            d = {};
            for (f = e = 0; g = c[f]; f++) a = g.className, "function" == typeof a.split && Ua(a.split(/\s+/), b) && (d[e++] = g);
            d.length = e;
            return d
        }
        return c
    }
    var bc = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function cc(a) {
        a = a.document;
        a = dc(a) ? a.documentElement : a.body;
        return new lb(a.clientWidth, a.clientHeight)
    }

    function ec() {
        var a = window,
            b = a.document,
            c = 0;
        if (b) {
            var a = cc(a).height,
                c = b.body,
                d = b.documentElement;
            if (dc(b) && d.scrollHeight) c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight;
            else {
                var b = d.scrollHeight,
                    e = d.offsetHeight;
                d.clientHeight != e && (b = c.scrollHeight, e = c.offsetHeight);
                c = b > a ? b > e ? b : e : b < e ? b : e
            }
        }
        return c
    }

    function fc(a) {
        var b = !Fb && dc(a) ? a.documentElement : a.body,
            a = a.parentWindow || a.defaultView;
        return new jb(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function gc(a, b, c) {
        return hc(document, arguments)
    }

    function hc(a, b) {
        var c = b[0],
            d = b[1];
        if (!Vb && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', za(d.name), '"');
            if (d.type) {
                c.push(' type="', za(d.type), '"');
                var e = {};
                sb(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        var f = a.createElement(c);
        d && (ga(d) ? f.className = d : ea(d) ? x.apply(l, [f].concat(d)) : mb(d, function (a, b) {
            "style" == b ? f.style.cssText = a : "class" == b ? f.className = a : "for" == b ? f.htmlFor = a : b in bc ? f.setAttribute(bc[b], a) : 0 == b.lastIndexOf("aria-", 0) || 0 == b.lastIndexOf("data-", 0) ? f.setAttribute(b, a) :
                f[b] = a
        }));
        2 < b.length && ic(a, f, b, 2);
        return f
    }

    function ic(a, b, c, d) {
        function e(c) {
            c && b.appendChild(ga(c) ? a.createTextNode(c) : c)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            if (fa(f) && !(ia(f) && 0 < f.nodeType)) {
                var g = w,
                    i;
                a: {
                    if ((i = f) && "number" == typeof i.length) {
                        if (ia(i)) {
                            i = "function" == typeof i.item || "string" == typeof i.item;
                            break a
                        }
                        if (ha(i)) {
                            i = "function" == typeof i.item;
                            break a
                        }
                    }
                    i = m
                }
                g(i ? Za(f) : f, e)
            } else e(f)
        }
    }

    function jc(a) {
        var b = document,
            c = b.createElement("div");
        E ? (c.innerHTML = "<br>" + a, c.removeChild(c.firstChild)) : c.innerHTML = a;
        if (1 == c.childNodes.length) return c.removeChild(c.firstChild);
        for (a = b.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
        return a
    }

    function dc(a) {
        return "CSS1Compat" == a.compatMode
    }

    function kc(a, b) {
        ic(ac(a), a, arguments, 1)
    }

    function lc(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    }

    function mc(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : l
    }

    function nc(a) {
        return a.firstElementChild != j ? a.firstElementChild : oc(a.firstChild)
    }

    function oc(a) {
        for (; a && 1 != a.nodeType;) a = a.nextSibling;
        return a
    }

    function pc(a) {
        if (!a) return l;
        if (a.firstChild) return a.firstChild;
        for (; a && !a.nextSibling;) a = a.parentNode;
        return a ? a.nextSibling : l
    }

    function qc(a) {
        if (!a) return l;
        if (!a.previousSibling) return a.parentNode;
        for (a = a.previousSibling; a && a.lastChild;) a = a.lastChild;
        return a
    }

    function rc(a) {
        if (Yb) return a.parentElement;
        a = a.parentNode;
        return ia(a) && 1 == a.nodeType ? a : l
    }

    function sc(a, b) {
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    }

    function ac(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function tc(a, b) {
        if ("textContent" in a) a.textContent = b;
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = b
        } else lc(a), a.appendChild(ac(a).createTextNode(b))
    }

    function uc(a, b, c, d) {
        if (a != l)
            for (a = a.firstChild; a;) {
                if (b(a) && (c.push(a), d) || uc(a, b, c, d)) return k;
                a = a.nextSibling
            }
        return m
    }
    var vc = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        xc = {
            IMG: " ",
            BR: "\n"
        };

    function yc(a) {
        if (Xb && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var b = [];
            zc(a, b, k);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        Xb || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function zc(a, b, c) {
        if (!(a.nodeName in vc))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in xc) b.push(xc[a.nodeName]);
        else
            for (a = a.firstChild; a;) zc(a, b, c), a = a.nextSibling
    }

    function Ac(a, b, c) {
        if (!b && !c) return l;
        var d = b ? b.toUpperCase() : l;
        return Bc(a, function (a) {
            return (!d || a.nodeName == d) && (!c || B(a, c))
        }, k)
    }

    function Cc(a, b) {
        return Ac(a, l, b)
    }

    function Bc(a, b, c, d) {
        c || (a = a.parentNode);
        for (var c = d == l, e = 0; a && (c || e <= d);) {
            if (b(a)) return a;
            a = a.parentNode;
            e++
        }
        return l
    }

    function $b(a) {
        this.b = a || q.document || document
    }
    p = $b.prototype;
    p.A = function (a) {
        return ga(a) ? this.b.getElementById(a) : a
    };
    p.Qd = function (a, b, c) {
        return hc(this.b, arguments)
    };
    p.createElement = function (a) {
        return this.b.createElement(a)
    };

    function Dc(a) {
        return dc(a.b)
    }

    function Ec(a) {
        return fc(a.b)
    }
    p.appendChild = function (a, b) {
        a.appendChild(b)
    };
    p.contains = sc;
    var Fc = "StopIteration" in q ? q.StopIteration : Error("StopIteration");

    function Gc() {}
    Gc.prototype.b = function () {
        h(Fc)
    };
    Gc.prototype.Sa = function () {
        return this
    };

    function Hc(a) {
        if (a instanceof Gc) return a;
        if ("function" == typeof a.Sa) return a.Sa(m);
        if (fa(a)) {
            var b = 0,
                c = new Gc;
            c.b = function () {
                for (;;) {
                    b >= a.length && h(Fc);
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        h(Error("Not implemented"))
    }

    function Ic(a, b) {
        if (fa(a)) try {
            w(a, b, j)
        } catch (c) {
            c !== Fc && h(c)
        } else {
            a = Hc(a);
            try {
                for (;;) b.call(j, a.b(), j, a)
            } catch (d) {
                d !== Fc && h(d)
            }
        }
    };

    function Jc(a, b) {
        this.c = {};
        this.b = [];
        var c = arguments.length;
        if (1 < c) {
            c % 2 && h(Error("Uneven number of arguments"));
            for (var d = 0; d < c; d += 2) Kc(this, arguments[d], arguments[d + 1])
        } else if (a) {
            if (a instanceof Jc) c = a.pd(), d = a.qd();
            else {
                var c = ob(a),
                    e = [],
                    f = 0;
                for (d in a) e[f++] = a[d];
                d = e
            }
            for (e = 0; e < c.length; e++) Kc(this, c[e], d[e])
        }
    }
    p = Jc.prototype;
    p.Q = 0;
    p.Wb = 0;
    p.Z = function () {
        return this.Q
    };
    p.qd = function () {
        Lc(this);
        for (var a = [], b = 0; b < this.b.length; b++) a.push(this.c[this.b[b]]);
        return a
    };
    p.pd = function () {
        Lc(this);
        return this.b.concat()
    };
    p.clear = function () {
        this.c = {};
        this.Wb = this.Q = this.b.length = 0
    };

    function Lc(a) {
        if (a.Q != a.b.length) {
            for (var b = 0, c = 0; b < a.b.length;) {
                var d = a.b[b];
                Object.prototype.hasOwnProperty.call(a.c, d) && (a.b[c++] = d);
                b++
            }
            a.b.length = c
        }
        if (a.Q != a.b.length) {
            for (var e = {}, c = b = 0; b < a.b.length;) d = a.b[b], Object.prototype.hasOwnProperty.call(e, d) || (a.b[c++] = d, e[d] = 1), b++;
            a.b.length = c
        }
    }
    p.get = function (a, b) {
        return Object.prototype.hasOwnProperty.call(this.c, a) ? this.c[a] : b
    };

    function Kc(a, b, c) {
        Object.prototype.hasOwnProperty.call(a.c, b) || (a.Q++, a.b.push(b), a.Wb++);
        a.c[b] = c
    }
    p.ta = function () {
        return new Jc(this)
    };

    function Mc(a) {
        Lc(a);
        for (var b = {}, c = 0; c < a.b.length; c++) {
            var d = a.b[c];
            b[d] = a.c[d]
        }
        return b
    }
    p.Sa = function (a) {
        Lc(this);
        var b = 0,
            c = this.b,
            d = this.c,
            e = this.Wb,
            f = this,
            g = new Gc;
        g.b = function () {
            for (;;) {
                e != f.Wb && h(Error("The map has changed since the iterator was created"));
                b >= c.length && h(Fc);
                var g = c[b++];
                return a ? g : d[g]
            }
        };
        return g
    };

    function Nc(a) {
        var b = new Jc;
        Oc(a, b, Pc);
        return b
    }

    function Qc(a) {
        var b = [];
        Oc(a, b, Rc);
        return b.join("&")
    }

    function Oc(a, b, c) {
        for (var d = a.elements, e, f = 0; e = d[f]; f++)
            if (!(e.form != a || e.disabled || "fieldset" == e.tagName.toLowerCase())) {
                var g = e.name;
                switch (e.type.toLowerCase()) {
                case "file":
                case "submit":
                case "reset":
                case "button":
                    break;
                case "select-multiple":
                    e = Sc(e);
                    if (e != l)
                        for (var i, n = 0; i = e[n]; n++) c(b, g, i);
                    break;
                default:
                    i = Sc(e), i != l && c(b, g, i)
                }
            } d = a.getElementsByTagName("input");
        for (f = 0; e = d[f]; f++) e.form == a && "image" == e.type.toLowerCase() && (g = e.name, c(b, g, e.value), c(b, g + ".x", "0"), c(b, g + ".y", "0"))
    }

    function Pc(a, b, c) {
        var d = a.get(b);
        d || (d = [], Kc(a, b, d));
        d.push(c)
    }

    function Rc(a, b, c) {
        a.push(encodeURIComponent(b) + "=" + encodeURIComponent(c))
    }

    function Sc(a) {
        var b = a.type;
        if (!da(b)) return l;
        switch (b.toLowerCase()) {
        case "checkbox":
        case "radio":
            return a.checked ? a.value : l;
        case "select-one":
            return b = a.selectedIndex, 0 <= b ? a.options[b].value : l;
        case "select-multiple":
            for (var b = [], c, d = 0; c = a.options[d]; d++) c.selected && b.push(c.value);
            return b.length ? b : l;
        default:
            return da(a.value) ? a.value : l
        }
    }

    function Tc(a) {
        a = a.elements.is_private;
        if (a.type) return Sc(a);
        for (var b = 0; b < a.length; b++) {
            var c = Sc(a[b]);
            if (c) return c
        }
        return l
    };
    var Uc = /<[^>]*>|&[^;]+;/g,
        Vc = RegExp("^[^֑-߿יִ-﷿ﹰ-ﻼ]*[A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿Ⰰ-﬜︀-﹯﻽-￿]"),
        Wc = RegExp("^[^A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿Ⰰ-﬜︀-﹯﻽-￿]*[֑-߿יִ-﷿ﹰ-ﻼ]");

    function Xc(a, b) {
        return Wc.test(b ? a.replace(Uc, " ") : a)
    };
    var Yc = {
            "url-identifier": "?spf=1",
            "link-class": "spf-link",
            "request-timeout": 4E3,
            "cache-lifetime": 3E4,
            "navigate-link-clicked-callback": l,
            "navigate-history-changed-callback": l,
            "navigate-requested-callback": l,
            "navigate-processed-callback": l,
            "load-requested-callback": l,
            "load-processed-callback": l,
            "transition-class": "spf-transition",
            "transition-duration": 425,
            "transition-forward-parent-class": "spf-transition-forward",
            "transition-reverse-parent-class": "spf-transition-reverse",
            "transition-current-child-class": "spf-current",
            "transition-forward-child-class": "spf-forward",
            "transition-reverse-child-class": "spf-reverse"
        },
        Zc = {},
        $c = Date.now || function () {
            return +new Date
        },
        ad = 0;
    $c();
    !window.console || eval("false");
    var bd;

    function cd(a) {
        this.c = a;
        this.b = 0;
        this.ha = window.location.href;
        var b = this;
        this.e = function () {
            b.f.apply(b, arguments)
        }
    }
    cd.prototype.f = function (a) {
        var b = window.location.href;
        if (a.state)
            if (a = a.state, b == this.ha) this.b = a["spf-timestamp"], window.history.replaceState(a, "", b);
            else {
                var c = a["spf-timestamp"];
                a["spf-back"] = !!(c < this.b);
                this.b = c;
                this.ha = b;
                this.c(b, a)
            }
    };
    cd.prototype.replace = function (a, b, c) {
        dd(this, k, a, b, c)
    };

    function dd(a, b, c, d, e) {
        if (c || d) c = c || window.location.href, d = d || {}, a.b = $c(), d["spf-timestamp"] = a.b, b ? window.history.replaceState(d, "", c) : window.history.pushState(d, "", c), a.ha = c, e || a.c(c, d)
    };
    var fd = m;
    var gd;

    function hd(a, b) {
        var c = Zc["cache-lifetime"];
        gd || (gd = {});
        c = parseInt(c, 10);
        0 >= c || (gd[a] = new id(b, c))
    }

    function id(a, b) {
        this.data = a;
        this.b = b;
        this.c = $c()
    };

    function jd(a) {
        return a.className && a.className.match(/\S+/g) || []
    }
    var kd = Array.prototype.indexOf ? function (a, b) {
            var c = jd(a);
            return -1 != Array.prototype.indexOf.call(c, b)
        } : function (a, b) {
            for (var c = jd(a), d = 0, e = c.length; d < e; d++)
                if (c[d] == b) return k;
            return m
        },
        ld = Array.prototype.filter ? function (a, b) {
            var c = jd(a),
                c = Array.prototype.filter.call(c, function (a) {
                    return a != b
                });
            a.className = c.join(" ")
        } : function (a, b) {
            for (var c = jd(a), d = [], e = 0, f = c.length; e < f; e++) c[e] != b && d.push(c[e]);
            a.className = d.join(" ")
        };

    function md(a) {
        return a.dataset ? a.dataset.loaded : a.getAttribute("data-" + "loaded".replace(/([A-Z])/g, "-$1").toLowerCase())
    };

    function nd(a, b) {
        a in od || (od[a] = []);
        od[a].push([b, j])
    }

    function pd(a, b) {
        if (a in od)
            for (var c = od[a], d = Array.prototype.slice.call(arguments, 1), e = 0, f = c.length; e < f; e++) c[e] && c[e][0].apply(c[e][1], d)
    }

    function qd(a) {
        a ? a in od && delete od[a] : od = {}
    }
    var od = {};

    function rd(a) {
        for (var b = 0, c = 0, d = a.length; c < d; ++c) b = 31 * b + a.charCodeAt(c), b %= 4294967296;
        return b
    };

    function sd(a, b) {
        if (a) {
            var c = [],
                a = a.replace(/\x3cscript([\s\S]*?)\x3e([\s\S]*?)\x3c\/script\x3e/ig, function (a, b, d) {
                    (a = b.match(/src="([\S]+)"/)) ? c.push([a[1], k]): c.push([d, m]);
                    return ""
                }),
                d = function () {
                    if (0 < c.length) {
                        var a = c.shift(),
                            f = a[0];
                        if (a[1]) {
                            var a = d,
                                g = "spf-js-" + rd(f),
                                i = document.getElementById(g),
                                n = i && md(i),
                                i = i && !n;
                            if (n) a && a();
                            else if (a && nd(g, a), !i) {
                                var r, y = document.createElement("script");
                                y.id = g;
                                y.onload = function () {
                                    if (!md(r)) {
                                        var a = r;
                                        a.dataset ? a.dataset.loaded = "true" : a.setAttribute("data-" + "loaded".replace(/([A-Z])/g,
                                            "-$1").toLowerCase(), "true");
                                        pd(g);
                                        qd(g)
                                    }
                                };
                                y.onreadystatechange = function () {
                                    switch (y.readyState) {
                                    case "loaded":
                                    case "complete":
                                        y.onload()
                                    }
                                };
                                y.src = f;
                                f = document.getElementsByTagName("head")[0];
                                f.insertBefore(y, f.firstChild);
                                r = y
                            }
                        } else a = d, window.execScript ? window.execScript(f, "JavaScript") : (n = document.createElement("script"), n.appendChild(document.createTextNode(f)), f = document.getElementsByTagName("head")[0], f.insertBefore(n, f.firstChild)), a && a()
                    } else b && b()
                };
            d()
        }
    };
    var td;
    td = "XMLHttpRequest" in window ? function () {
        return new XMLHttpRequest
    } : "ActiveXObject" in window ? function () {
        return new ActiveXObject("Microsoft.XMLHTTP")
    } : j;
    var ud;

    function vd(a) {
        if (!a.metaKey && !a.altKey && !a.ctrlKey && !a.shiftKey) {
            var b;
            a: {
                for (b = a.target; b;) {
                    if (kd(b, Zc["link-class"])) break a;
                    b = b.parentNode
                }
                b = l
            }
            if (b) {
                var c = b.href;
                if (c == window.location.href) a.preventDefault();
                else {
                    pd("navigate-link-clicked-callback", b);
                    try {
                        dd(bd, m, c, j, j), a.preventDefault()
                    } catch (d) {}
                }
            }
        }
    }

    function wd(a, b) {
        var c = !(!b || !b["spf-back"]);
        pd("navigate-history-changed-callback", a);
        xd(a, c)
    }

    function xd(a, b) {
        yd && (ud && (ud.abort(), ud = l), ud = zd(a, function (a, d) {
            ud = l;
            Ad(d, b, "navigate-processed-callback")
        }, function (a) {
            ud = l;
            window.location.href = a
        }, "navigate-requested-callback"))
    }

    function zd(a, b, c, d) {
        function e(c) {
            try {
                var e = "JSON" in window ? JSON.parse(c.responseText) : eval("(" + c.responseText + ")")
            } catch (g) {
                f();
                return
            }
            hd(a, e);
            d && pd(d, a, e);
            b && b(a, e)
        }

        function f() {
            c && c(a)
        }
        var g = a,
            i = Zc["url-identifier"],
            n;
        if (n = -1 == g.indexOf(i)) n = 0 == i.lastIndexOf("?", 0);
        n && (g = -1 != g.indexOf("?") ? g + i.replace("?", "&") : g + i);
        a: {
            if (gd && a in gd) {
                i = gd[a];
                n = $c() - i.c;
                if (isNaN(i.b) || n < i.b) {
                    i = i.data;
                    break a
                }
                gd && a in gd && delete gd[a]
            }
            i = j
        }
        if (i) d && pd(d, a, i), b && b(a, i);
        else {
            var i = Zc["request-timeout"],
                r = e || function () {},
                y = f || function () {},
                D = f || function () {},
                G, H = td();
            H.open("GET", g, k);
            var ka = H.abort;
            H.abort = function () {
                clearTimeout(G);
                H.onreadystatechange = l;
                ka.call(H)
            };
            H.onreadystatechange = function () {
                if (4 == H.readyState) switch (clearTimeout(G), H.status) {
                case 200:
                case 204:
                case 304:
                    r(H);
                    break;
                default:
                    y(H)
                }
            };
            0 < i && (G = setTimeout(function () {
                H.abort();
                D(H)
            }, i));
            H.send(l);
            return H
        }
    }

    function Ad(a, b, c) {
        function d() {
            0 == f && (sd(a.js, function () {
                c && pd(c, a)
            }), f--)
        }
        var e = a.css;
        e && (e.replace(/\x3clink([\s\S]*?)\x3e/ig, function (a, b) {
            if (-1 != b.indexOf('rel="stylesheet"')) {
                var c = b.match(/href="([\S]+)"/);
                if (c) {
                    var c = c[1],
                        d = "spf-css-" + rd(c),
                        e = document.getElementById(d);
                    e || (e = document.createElement("link"), e.id = d, e.rel = "stylesheet", e.href = c, document.getElementsByTagName("head")[0].appendChild(e))
                }
            }
        }), e.replace(/\x3cstyle([\s\S]*?)\x3e([\s\S]*?)\x3c\/style/ig, function (a, b, c) {
            c && (a = document.createElement("style"),
                document.getElementsByTagName("head")[0].appendChild(a), "styleSheet" in a ? a.styleSheet.cssText = c : a.appendChild(document.createTextNode(c)))
        }));
        a.title && (document.title = a.title);
        var f = 0,
            e = a.html || {};
        if (Object.keys) f = Object.keys(e).length;
        else
            for (var g in e) f++;
        for (g in e)
            if (e = document.getElementById(g)) {
                var i = e["spf-key"] || (e["spf-key"] = $c() + "-" + ++ad);
                if (!Bd || !kd(e, Zc["transition-class"])) e.innerHTML = a.html[g], sd(a.html[g], function () {
                    f--;
                    d()
                });
                else {
                    Cd(i, k);
                    var n = [],
                        r = {};
                    r.reverse = !!b;
                    r.ib = e;
                    r.sg =
                        Zc["transition-current-child-class"];
                    r.reverse ? (r.Yd = Zc["transition-reverse-child-class"], r.Mc = Zc["transition-reverse-parent-class"]) : (r.Yd = Zc["transition-forward-child-class"], r.Mc = Zc["transition-forward-parent-class"]);
                    n.push([function (b, c) {
                        b.Cb = document.createElement("div");
                        b.Cb.className = b.sg;
                        var d = b.ib,
                            e = b.Cb;
                        if (e) {
                            for (var f; f = d.firstChild;) e.appendChild(f);
                            d.appendChild(e)
                        }
                        b.Db = document.createElement("div");
                        b.Db.className = b.Yd;
                        b.Db.innerHTML = a.html[b.ib.id];
                        b.reverse ? (d = b.Cb, d.parentNode.insertBefore(b.Db,
                            d)) : (d = b.Cb, d.parentNode.insertBefore(b.Db, d.nextSibling));
                        c()
                    }, 0]);
                    n.push([function (a, b) {
                        var c = a.ib,
                            d = a.Mc;
                        kd(c, d) || (c.className += " " + d);
                        b()
                    }, 0]);
                    n.push([function (a, b) {
                        a.ib.removeChild(a.Cb);
                        ld(a.ib, a.Mc);
                        var c = a.Db,
                            d, e = c.parentNode;
                        if (e && 11 != e.nodeType)
                            if (c.removeNode) c.removeNode(m);
                            else {
                                for (; d = c.firstChild;) e.insertBefore(d, c);
                                e.removeChild(c)
                            } b()
                    }, Zc["transition-duration"]]);
                    n.push([function (b, c) {
                        sd(a.html[b.ib.id], function () {
                            f--;
                            d();
                            c()
                        })
                    }, 0]);
                    Dd[i] = {
                        Xd: 0,
                        Wd: n,
                        data: r
                    };
                    Cd(i)
                }
            } d()
    }

    function Cd(a, b) {
        if (a in Dd)
            if (0 < Dd[a].Wd.length) {
                var c = Dd[a].Wd.shift();
                if (b) c[0](Dd[a].data, function () {
                    Cd(a, b)
                });
                else Dd[a].Xd = setTimeout(function () {
                    c[0](Dd[a].data, function () {
                        Cd(a, b)
                    })
                }, c[1])
            } else clearTimeout(Dd[a].Xd), delete Dd[a]
    }
    var yd = m,
        Dd = {},
        Bd;
    a: {
        for (var Ed = document.createElement("div"), Fd = ["Webkit", "Moz", "Ms", "O", "Khtml"], Gd = 0, Hd = Fd.length; Gd < Hd; Gd++)
            if (Fd[Gd] + "Transition" in Ed.style) {
                Bd = k;
                break a
            } Bd = m
    };

    function Id(a) {
        var b = !!window.history.pushState,
            a = a || {},
            c;
        for (c in Yc) {
            var d = c in a ? a[c] : Yc[c];
            Zc[c] = d;
            var e;
            if (e = b)
                if (e = d) e = c.length - 9, e = 0 <= e && c.indexOf("-callback", e) == e;
            e && nd(c, d)
        }
        b && (fd || (bd || (bd = new cd(wd)), c = bd, c.ha = window.location.href, c.replace(c.ha, l, k), window.addEventListener("popstate", c.e, m), fd = k), yd || (document.addEventListener("click", vd, m), yd = k));
        return b
    }
    window.spf = {
        init: Id,
        dispose: function () {
            yd && (document.removeEventListener("click", vd, m), yd = m);
            fd && (window.removeEventListener("popstate", bd.e, m), fd = m);
            qd();
            Zc = {}
        },
        navigate: xd,
        load: function (a, b, c) {
            zd(a, function (a, c) {
                Ad(c, m, "load-processed-callback");
                b && b(a, c)
            }, function (a) {
                c && c(a)
            }, "load-requested-callback")
        }
    };
    var Jd = window.yt && window.yt.config_ || {};
    u("yt.config_", Jd);
    var Kd = window.yt && window.yt.tokens_ || {};
    u("yt.tokens_", Kd);
    var Ld = window.yt && window.yt.globals_ || {};
    u("yt.globals_", Ld);
    var Md = window.yt && window.yt.msgs_ || {};
    u("yt.msgs_", Md);
    var Nd = window.yt && window.yt.timeouts_ || [];
    u("yt.timeouts_", Nd);
    var Od = window.yt && window.yt.intervals_ || [];
    u("yt.intervals_", Od);

    function Pd(a) {
        Qd(Jd, arguments)
    }

    function L(a, b) {
        return a in Jd ? Jd[a] : b
    }

    function Rd(a) {
        Qd(Kd, arguments)
    }

    function M(a) {
        return a in Kd ? Kd[a] : j
    }

    function Sd(a) {
        for (var b = 0, c = arguments.length; b < c; ++b) Ld[arguments[b]] = 1
    }

    function N(a, b) {
        var c = window.setTimeout(a, b);
        Nd.push(c);
        return c
    }

    function Td(a, b) {
        var c = window.setInterval(a, b);
        Od.push(c);
        return c
    }

    function Ud(a) {
        window.clearTimeout(a)
    }

    function Vd(a) {
        window.clearInterval(a)
    }

    function O(a, b, c) {
        var d = b || {};
        if (a = a in Md ? Md[a] : c)
            for (var e in d) a = a.replace(RegExp("\\$" + e, "gi"), function () {
                return d[e]
            });
        return a
    }
    ra = function (a, b) {
        var c = b || {},
            d = a in Md ? Md[a] : a;
        if (d)
            for (var e in c) var f = ("" + c[e]).replace(/\$/g, "$$$$"),
                d = d.replace(RegExp("\\{\\$" + e + "\\}", "gi"), f),
                d = d.replace(RegExp("\\$" + e, "gi"), f);
        return d
    };

    function Qd(a, b) {
        if (1 < b.length) {
            var c = b[0];
            a[c] = b[1]
        } else {
            var d = b[0];
            for (c in d) a[c] = d[c]
        }
    }
    var Wd = "Microsoft Internet Explorer" == navigator.appName;
    var Xd = {};

    function Yd(a, b, c, d) {
        if (L("EVENTS_TRACKER_INSTALLED")) {
            var e = Xd[a];
            if (!e) {
                var f = window._gaq._getAsyncTracker("eventsPageTracker");
                if (!f) return;
                window._gaq.push(function () {
                    e = f._createEventTracker(a);
                    Xd[a] = e
                })
            }
            var g = c || j,
                i = d || j;
            window._gaq.push(function () {
                e._trackEvent(b, g, i)
            })
        }
    };

    function P(a, b, c) {
        a.dataset ? a.dataset[Zd(b)] = c : a.setAttribute("data-" + b, c)
    }

    function Q(a, b) {
        return a.dataset ? a.dataset[Zd(b)] : a.getAttribute("data-" + b)
    }

    function $d(a, b) {
        a.dataset ? delete a.dataset[Zd(b)] : a.removeAttribute("data-" + b)
    }

    function ae(a, b) {
        return a.dataset ? Zd(b) in a.dataset : a.hasAttribute ? !!a.hasAttribute("data-" + b) : !!a.getAttribute("data-" + b)
    }
    var be = {};

    function Zd(a) {
        return be[a] || (be[a] = String(a).replace(/\-([a-z])/g, function (a, c) {
            return c.toUpperCase()
        }))
    };

    function ce(a) {
        var b = a.__yt_uid_key;
        b || (b = de(), a.__yt_uid_key = b);
        return b
    }
    var de = s("yt.dom.getNextId_");
    if (!de) {
        de = function () {
            return ++ee
        };
        u("yt.dom.getNextId_", de);
        var ee = 0
    }

    function fe(a) {
        var b = a.cloneNode(m);
        "TR" == b.tagName || "SELECT" == b.tagName ? w(a.childNodes, function (a) {
            b.appendChild(fe(a))
        }) : b.innerHTML = a.innerHTML;
        return b
    }

    function ge(a) {
        a = fe(F(a));
        a.removeAttribute("id");
        return a
    }

    function he(a, b, c) {
        a = J(a, b, c);
        return a.length ? a[0] : l
    }

    function ie(a, b) {
        "disabled" in a && (a.disabled = !b);
        1 == a.nodeType && C(a, "disabled", !b);
        if (a.hasChildNodes())
            for (var c = 0, d; d = a.childNodes[c]; ++c) ie(d, b)
    }

    function je() {
        var a = document;
        if ("fullScreenElement" in a) return a.fullScreenElement;
        if ("mozFullScreenElement" in a) return a.mozFullScreenElement;
        if ("msFullScreenElement" in a) return a.msFullScreenElement;
        if ("oFullScreenElement" in a) return a.oFullScreenElement;
        if ("webkitFullScreenElement" in a) return a.webkitFullScreenElement
    };

    function ke(a) {
        if (a = a || window.event) {
            for (var b in a) b in le || (this[b] = a[b]);
            this.scale = a.scale;
            this.rotation = a.rotation;
            this.Ta = a;
            if ((b = a.target || a.srcElement) && 3 == b.nodeType) b = b.parentNode;
            this.target = b;
            if (b = a.relatedTarget) try {
                b = b.nodeName && b
            } catch (c) {
                b = l
            } else "mouseover" == this.type ? b = a.fromElement : "mouseout" == this.type && (b = a.toElement);
            this.relatedTarget = b;
            this.clientX = a.clientX != j ? a.clientX : a.pageX;
            this.clientY = a.clientY != j ? a.clientY : a.pageY;
            if (document.body && document.documentElement) {
                b = document.body.scrollLeft +
                    document.documentElement.scrollLeft;
                var d = document.body.scrollTop + document.documentElement.scrollTop;
                this.pageX = a.pageX != j ? a.pageX : a.clientX + b;
                this.pageY = a.pageY != j ? a.pageY : a.clientY + d
            }
            this.keyCode = a.keyCode ? a.keyCode : a.which;
            this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
            this.altKey = a.altKey;
            this.ctrlKey = a.ctrlKey;
            this.shiftKey = a.shiftKey;
            "MozMousePixelScroll" == this.type ? (this.wheelDeltaX = a.axis == a.HORIZONTAL_AXIS ? a.detail : 0, this.wheelDeltaY = a.axis == a.HORIZONTAL_AXIS ? 0 : a.detail) :
                window.opera ? (this.wheelDeltaX = 0, this.wheelDeltaY = a.detail) : 0 == a.wheelDelta % 120 ? "WebkitTransform" in document.documentElement.style ? window.b && 0 == navigator.platform.indexOf("Mac") ? (this.wheelDeltaX = a.wheelDeltaX / -30, this.wheelDeltaY = a.wheelDeltaY / -30) : (this.wheelDeltaX = a.wheelDeltaX / -1.2, this.wheelDeltaY = a.wheelDeltaY / -1.2) : (this.wheelDeltaX = 0, this.wheelDeltaY = a.wheelDelta / -1.6) : (this.wheelDeltaX = a.wheelDeltaX / -3, this.wheelDeltaY = a.wheelDeltaY / -3)
        }
    }
    p = ke.prototype;
    p.Ta = l;
    p.type = "";
    p.target = l;
    p.relatedTarget = l;
    p.currentTarget = l;
    p.data = l;
    p.source = l;
    p.state = l;
    p.keyCode = 0;
    p.charCode = 0;
    p.altKey = m;
    p.ctrlKey = m;
    p.shiftKey = m;
    p.clientX = 0;
    p.clientY = 0;
    p.pageX = 0;
    p.pageY = 0;
    p.wheelDeltaX = 0;
    p.wheelDeltaY = 0;
    p.rotation = 0;
    p.scale = 1;
    p.changedTouches = l;
    p.preventDefault = function () {
        this.Ta.returnValue = m;
        this.Ta.preventDefault && this.Ta.preventDefault()
    };
    p.stopPropagation = function () {
        this.Ta.cancelBubble = k;
        this.Ta.stopPropagation && this.Ta.stopPropagation()
    };
    var le = {
        stopPropagation: 1,
        preventMouseEvent: 1,
        preventManipulation: 1,
        preventDefault: 1,
        layerX: 1,
        layerY: 1,
        scale: 1,
        rotation: 1
    };
    var me = s("yt.events.listeners_") || {};
    u("yt.events.listeners_", me);
    var pe = s("yt.events.counter_") || {
        count: 0
    };
    u("yt.events.counter_", pe);

    function qe(a, b, c, d) {
        return pb(me, function (e) {
            return e[0] == a && e[1] == b && e[2] == c && e[4] == !!d
        })
    }

    function R(a, b, c, d) {
        if (!a || !a.addEventListener && !a.attachEvent) return "";
        var d = !!d,
            e = qe(a, b, c, d);
        if (e) return e;
        var e = ++pe.count + "",
            f = !(!("mouseenter" == b || "mouseleave" == b) || !a.addEventListener || "onmouseenter" in document),
            g;
        g = f ? function (d) {
            d = new ke(d);
            if (!Bc(d.relatedTarget, function (b) {
                    return b == a
                }, k)) return d.currentTarget = a, d.type = b, c.call(a, d)
        } : function (b) {
            b = new ke(b);
            b.currentTarget = a;
            return c.call(a, b)
        };
        me[e] = [a, b, c, g, d];
        a.addEventListener ? "mouseenter" == b && f ? a.addEventListener("mouseover", g, d) :
            "mouseleave" == b && f ? a.addEventListener("mouseout", g, d) : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style ? a.addEventListener("MozMousePixelScroll", g, d) : a.addEventListener(b, g, d) : a.attachEvent("on" + b, g);
        return e
    }

    function re(a, b, c, d) {
        var e;
        e = R(a, b, function () {
            se(e);
            c.apply(a, arguments)
        }, d)
    }

    function T(a, b, c, d) {
        return te(a, b, c, function (a) {
            return B(a, d)
        })
    }

    function te(a, b, c, d) {
        var e = a || document;
        return R(e, b, function (a) {
            var b = Bc(a.target, function (a) {
                return a === e || d(a)
            }, k);
            b && b !== e && (a.currentTarget = b, c.call(b, a))
        })
    }

    function ue(a, b, c, d) {
        (a = qe(a, b, c, !!d)) && se(a)
    }

    function se(a) {
        "string" == typeof a && (a = [a]);
        w(a, function (a) {
            if (a in me) {
                var c = me[a],
                    d = c[0],
                    e = c[1],
                    f = c[3],
                    c = c[4];
                d.removeEventListener ? d.removeEventListener(e, f, c) : d.detachEvent("on" + e, f);
                delete me[a]
            }
        })
    }

    function ve(a) {
        a = a || window.event;
        a = a.target || a.srcElement;
        3 == a.nodeType && (a = a.parentNode);
        return a
    }

    function we(a) {
        a = a || window.event;
        a.cancelBubble = k;
        a.stopPropagation && a.stopPropagation()
    }

    function xe(a) {
        if (document.createEvent) {
            var b = document.createEvent("HTMLEvents");
            b.initEvent("click", k, k);
            a.dispatchEvent(b)
        } else b = document.createEventObject(), a.fireEvent("onclick", b)
    };

    function ye(a) {
        this.b = a
    }
    var ze = /\s*;\s*/;

    function Ae(a, b, c, d, e, f) {
        /[;=\s]/.test(b) && h(Error('Invalid cookie name "' + b + '"'));
        /[;\r\n]/.test(c) && h(Error('Invalid cookie value "' + c + '"'));
        da(d) || (d = -1);
        f = f ? ";domain=" + f : "";
        e = e ? ";path=" + e : "";
        d = 0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(qa() + 1E3 * d)).toUTCString();
        a.b.cookie = b + "=" + c + f + e + d + ""
    }
    p = ye.prototype;
    p.get = function (a, b) {
        for (var c = a + "=", d = (this.b.cookie || "").split(ze), e = 0, f; f = d[e]; e++) {
            if (0 == f.indexOf(c)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };

    function Be(a, b, c, d) {
        var e = da(a.get(b));
        Ae(a, b, "", 0, c, d);
        return e
    }
    p.pd = function () {
        return Ce(this).keys
    };
    p.qd = function () {
        return Ce(this).Rf
    };
    p.Z = function () {
        return !this.b.cookie ? 0 : (this.b.cookie || "").split(ze).length
    };
    p.clear = function () {
        for (var a = Ce(this).keys, b = a.length - 1; 0 <= b; b--) Be(this, a[b])
    };

    function Ce(a) {
        for (var a = (a.b.cookie || "").split(ze), b = [], c = [], d, e, f = 0; e = a[f]; f++) d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return {
            keys: b,
            Rf: c
        }
    }
    var De = new ye(document);
    De.c = 3950;

    function Ee(a, b, c, d, e) {
        Ae(De, "" + a, b, c, d || "/", e || "youtube.com")
    }

    function Fe(a, b) {
        return De.get("" + a, b)
    }

    function Ge(a, b, c) {
        return Be(De, "" + a, b || "/", c || "youtube.com")
    };

    function He() {
        var a = Fe("PREF");
        if (a)
            for (var a = unescape(a).split("&"), b = 0; b < a.length; b++) {
                var c = a[b].split("="),
                    d = c[0];
                (c = c[1]) && (Ie[d] = c.toString())
            }
    }
    ba(He);
    var Ie = s("yt.prefs.UserPrefs.prefs_") || {};
    u("yt.prefs.UserPrefs.prefs_", Ie);

    function Je(a) {
        /^f([1-9][0-9]*)$/.test(a) && h("ExpectedRegexMatch: " + a)
    }

    function Ke(a) {
        /^\w+$/.test(a) || h("ExpectedRegexMismatch: " + a)
    }

    function Le(a) {
        a = Ie[a] !== j ? Ie[a].toString() : l;
        return a != l && /^[A-Fa-f0-9]+$/.test(a) ? parseInt(a, 16) : l
    }
    He.prototype.get = function (a, b) {
        Ke(a);
        Je(a);
        var c = Ie[a] !== j ? Ie[a].toString() : l;
        return c != l ? c : b ? b : ""
    };

    function Me(a, b) {
        Ke(a);
        Je(a);
        b == l && h("ExpectedNotNull");
        Ie[a] = b.toString()
    }

    function Ne(a, b) {
        return !!((Le("f" + (Math.floor(b / 31) + 1)) || 0) & 1 << b % 31)
    }

    function Oe(a, b) {
        var c = "f" + (Math.floor(a / 31) + 1),
            d = 1 << a % 31,
            e = Le(c) || 0,
            e = b ? e | d : e & ~d;
        0 == e ? delete Ie[c] : (d = e.toString(16), Ie[c] = d.toString())
    }

    function Pe() {
        var a = [],
            b;
        for (b in Ie) a.push(b + "=" + escape(Ie[b]));
        Ee("PREF", a.join("&"), 31536E4)
    }
    He.prototype.clear = function () {
        Ie = {}
    };

    function Qe(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    Qe.prototype.ta = function () {
        return new Qe(this.top, this.right, this.bottom, this.left)
    };
    Qe.prototype.contains = function (a) {
        return !this || !a ? m : a instanceof Qe ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
    };

    function Re(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
    Re.prototype.ta = function () {
        return new Re(this.left, this.top, this.width, this.height)
    };
    Re.prototype.contains = function (a) {
        return a instanceof Re ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
    };

    function Se(a, b, c) {
        ga(b) ? Te(a, c, b) : mb(b, pa(Te, a))
    }

    function Te(a, b, c) {
        a.style[String(c).replace(/\-([a-z])/g, function (a, b) {
            return b.toUpperCase()
        })] = b
    }

    function Ue(a, b) {
        var c = ac(a);
        return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, l)) ? c[b] || c.getPropertyValue(b) || "" : ""
    }

    function Ve(a, b) {
        return a.currentStyle ? a.currentStyle[b] : l
    }

    function We(a, b) {
        return Ue(a, b) || Ve(a, b) || a.style && a.style[b]
    }

    function Xe(a) {
        var b = a.getBoundingClientRect();
        E && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }

    function Ye(a) {
        if (E && !Ub(8)) return a.offsetParent;
        for (var b = ac(a), c = We(a, "position"), d = "fixed" == c || "absolute" == c, a = a.parentNode; a && a != b; a = a.parentNode)
            if (c = We(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return l
    }

    function Ze(a) {
        for (var b = new Qe(0, Infinity, Infinity, 0), c = Zb(a), d = c.b.body, e = c.b.documentElement, f = !Fb && dc(c.b) ? c.b.documentElement : c.b.body; a = Ye(a);)
            if ((!E || 0 != a.clientWidth) && (!Fb || 0 != a.clientHeight || a != d) && a != d && a != e && "visible" != We(a, "overflow")) {
                var g = $e(a),
                    i;
                i = a;
                if (Eb && !Sb("1.9")) {
                    var n = parseFloat(Ue(i, "borderLeftWidth"));
                    if (af(i)) var r = i.offsetWidth - i.clientWidth - n - parseFloat(Ue(i, "borderRightWidth")),
                        n = n + r;
                    i = new jb(n, parseFloat(Ue(i, "borderTopWidth")))
                } else i = new jb(i.clientLeft, i.clientTop);
                g.x += i.x;
                g.y += i.y;
                b.top = Math.max(b.top, g.y);
                b.right = Math.min(b.right, g.x + a.clientWidth);
                b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
                b.left = Math.max(b.left, g.x)
            } d = f.scrollLeft;
        f = f.scrollTop;
        b.left = Math.max(b.left, d);
        b.top = Math.max(b.top, f);
        c = cc(c.b.parentWindow || c.b.defaultView || window);
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, f + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : l
    }

    function $e(a) {
        var b, c = ac(a),
            d = We(a, "position"),
            e = Eb && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
            f = new jb(0, 0),
            g;
        b = c ? ac(c) : document;
        g = E && !Ub(9) && !Dc(Zb(b)) ? b.body : b.documentElement;
        if (a == g) return f;
        if (a.getBoundingClientRect) b = Xe(a), a = Ec(Zb(c)), f.x = b.left + a.x, f.y = b.top + a.y;
        else if (c.getBoxObjectFor && !e) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(g), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY;
        else {
            b = a;
            do {
                f.x += b.offsetLeft;
                f.y +=
                    b.offsetTop;
                b != a && (f.x += b.clientLeft || 0, f.y += b.clientTop || 0);
                if (Fb && "fixed" == We(b, "position")) {
                    f.x += c.body.scrollLeft;
                    f.y += c.body.scrollTop;
                    break
                }
                b = b.offsetParent
            } while (b && b != a);
            if (Db || Fb && "absolute" == d) f.y -= c.body.offsetTop;
            for (b = a;
                (b = Ye(b)) && b != c.body && b != g;)
                if (f.x -= b.scrollLeft, !Db || "TR" != b.tagName) f.y -= b.scrollTop
        }
        return f
    }

    function bf(a) {
        var b = new jb;
        if (1 == a.nodeType) {
            if (a.getBoundingClientRect) {
                var c = Xe(a);
                b.x = c.left;
                b.y = c.top
            } else {
                var c = Ec(Zb(a)),
                    d = $e(a);
                b.x = d.x - c.x;
                b.y = d.y - c.y
            }
            if (Eb && !Sb(12)) {
                var e;
                E ? e = "-ms-transform" : Fb ? e = "-webkit-transform" : Db ? e = "-o-transform" : Eb && (e = "-moz-transform");
                var f;
                e && (f = We(a, e));
                f || (f = We(a, "transform"));
                f ? (a = f.match(cf), a = !a ? new jb(0, 0) : new jb(parseFloat(a[1]), parseFloat(a[2]))) : a = new jb(0, 0);
                b = new jb(b.x + a.x, b.y + a.y)
            }
        } else e = ha(a.Hg), f = a, a.targetTouches ? f = a.targetTouches[0] : e && a.Ia.targetTouches &&
            (f = a.Ia.targetTouches[0]), b.x = f.clientX, b.y = f.clientY;
        return b
    }

    function df(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    }

    function ef(a) {
        if ("none" != We(a, "display")) return ff(a);
        var b = a.style,
            c = b.display,
            d = b.visibility,
            e = b.position;
        b.visibility = "hidden";
        b.position = "absolute";
        b.display = "inline";
        a = ff(a);
        b.display = c;
        b.position = e;
        b.visibility = d;
        return a
    }

    function ff(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Fb && !b && !c;
        return (!da(b) || d) && a.getBoundingClientRect ? (a = Xe(a), new lb(a.right - a.left, a.bottom - a.top)) : new lb(b, c)
    }

    function gf(a) {
        var b = $e(a),
            a = ef(a);
        return new Re(b.x, b.y, a.width, a.height)
    }

    function af(a) {
        return "rtl" == We(a, "direction")
    }

    function hf(a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        var e = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return e
    }
    var jf = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function kf(a, b) {
        if ("none" == Ve(a, b + "Style")) return 0;
        var c = Ve(a, b + "Width");
        return c in jf ? jf[c] : hf(a, c)
    }
    var cf = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;

    function lf(a, b) {
        if ((a = F(a)) && a.style) a.style.display = b ? "" : "none", C(a, "hid", !b)
    }

    function mf(a) {
        a = F(a);
        return !a ? m : !("none" == a.style.display || B(a, "hid"))
    }

    function nf(a) {
        if (a = F(a)) mf(a) ? (a.style.display = "none", x(a, "hid")) : (a.style.display = "", z(a, "hid"))
    }

    function of (a, b) {
        if (a = F(a)) a.style.visibility = b ? "visible" : "hidden"
    }

    function pf(a) {
        a = F(a);
        if (!a) return l;
        var b = 0,
            c = 0;
        if (a.offsetParent) {
            do b += a.offsetLeft, c += a.offsetTop; while (a = a.offsetParent)
        }
        return new jb(b, c)
    }

    function U(a) {
        w(arguments, function (a) {
            lf(a, k)
        })
    }

    function V(a) {
        w(arguments, function (a) {
            lf(a, m)
        })
    }

    function qf(a) {
        w(arguments, nf)
    };

    function rf(a, b, c, d, e, f, g) {
        var i = "";
        a && (i += a + ":");
        c && (i += "//", b && (i += b + "@"), i += c, d && (i += ":" + d));
        e && (i += e);
        f && (i += "?" + f);
        g && (i += "#" + g);
        return i
    }
    var sf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

    function tf(a) {
        if (uf) {
            uf = m;
            var b = q.location;
            if (b) {
                var c = b.href;
                if (c && (c = vf(c)) && c != b.hostname) uf = k, h(Error())
            }
        }
        return a.match(sf)
    }
    var uf = Fb;

    function vf(a) {
        return (a = tf(a)[3] || l) && decodeURIComponent(a)
    }

    function wf() {
        var a = tf(document.location.href);
        return rf(a[1], a[2], a[3], a[4])
    }

    function xf(a) {
        a = tf(a);
        return rf(l, l, l, l, a[5], a[6], a[7])
    }

    function yf(a) {
        var b = a.indexOf("#");
        return 0 > b ? a : a.substr(0, b)
    }

    function zf(a) {
        if (a[1]) {
            var b = a[0],
                c = b.indexOf("#");
            0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
            c = b.indexOf("?");
            0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = j)
        }
        return a.join("")
    }

    function Af(a, b, c) {
        if (ea(b))
            for (var d = 0; d < b.length; d++) Af(a, String(b[d]), c);
        else b != l && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
    }

    function Bf(a, b, c) {
        Math.max(b.length - (c || 0), 0);
        for (c = c || 0; c < b.length; c += 2) Af(b[c], b[c + 1], a);
        return a
    }

    function Cf(a, b) {
        for (var c in b) Af(c, b[c], a);
        return a
    }

    function Df(a) {
        a = Cf([], a);
        a[0] = "";
        return a.join("")
    }

    function Ef(a, b) {
        return zf(2 == arguments.length ? Bf([a], arguments[1], 0) : Bf([a], arguments, 1))
    }
    var Ff = /#|$/;

    function Gf(a, b) {
        var c = a.search(Ff),
            d;
        a: {
            d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d) return l;
        e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return ya(a.substr(d, e - d))
    };

    function Hf(a) {
        "?" == a.charAt(0) && (a = a.substr(1));
        for (var a = a.split("&"), b = {}, c = 0, d = a.length; c < d; c++) {
            var e = a[c].split("=");
            if (1 == e.length && e[0] || 2 == e.length) {
                var f = ya(e[0] || ""),
                    e = ya(e[1] || "");
                f in b ? ea(b[f]) ? $a(b[f], e) : b[f] = [b[f], e] : b[f] = e
            }
        }
        return b
    }

    function Jf(a) {
        return -1 != a.indexOf("?") ? (a = (a || "").split("#")[0], a = a.split("?", 2), Hf(1 < a.length ? a[1] : a[0])) : {}
    }

    function Kf(a) {
        "#" == a.charAt(0) && (a = "!" == a.charAt(1) ? a.substr(2) : a.substr(1));
        return Hf(a)
    }

    function Lf(a, b) {
        return zf(Cf([a], b))
    }
    var Mf = vf;

    function Nf(a, b) {
        var c = a.split("?", 2),
            a = c[0],
            c = Hf(c[1] || ""),
            d;
        for (d in b) c[d] = b[d];
        return Lf(a, c)
    }

    function Of(a) {
        return a === l ? m : "com" == a[0] && a[1].match(/^youtube(?:-nocookie)?$/) ? k : m
    }

    function Pf(a) {
        return a === l ? m : "google" == a[1] ? k : "google" == a[2] ? "au" == a[0] && "com" == a[1] ? k : "uk" == a[0] && "co" == a[1] ? k : m : m
    }

    function Qf(a) {
        a = Mf(a);
        return a === l ? l : a.split(".").reverse()
    };

    function Rf(a) {
        a = a || {};
        this.url = a.url || this.url;
        this.urlV8 = a.url_v8 || this.urlV8;
        this.urlV9As2 = a.url_v9as2 || this.urlV9As2;
        this.minVersion = a.min_version || this.minVersion;
        this.args = a.args || qb(Sf);
        this.assets = a.assets || {};
        this.attrs = a.attrs || qb(Tf);
        this.params = a.params || qb(Uf);
        this.fallback = a.fallback || this.fallback;
        this.fallbackMessage = a.fallbackMessage || this.fallbackMessage;
        this.html5 = a.html5 || this.html5;
        this.disable = a.disable || {}
    }
    var Sf = {
            enablejsapi: 1
        },
        Tf = {
            width: "640",
            height: "385"
        },
        Uf = {
            allowscriptaccess: "always",
            allowfullscreen: "true",
            bgcolor: "#000000"
        };
    p = Rf.prototype;
    p.url = "";
    p.urlV8 = "";
    p.urlV9As2 = "";
    p.minVersion = "8.0.0";
    p.fallback = l;
    p.fallbackMessage = l;
    p.html5 = m;
    p.ta = function () {
        var a = new Rf,
            b;
        for (b in this) {
            var c = this[b];
            a[b] = "object" == ca(c) ? qb(c) : c
        }
        return a
    };

    function Vf() {
        this.b = [];
        Wf(this)
    }
    ba(Vf);
    p = Vf.prototype;
    p.R = 0;
    p.Ha = 0;
    p.hb = 0;
    p.Lc = "";
    p.Da = 0;
    p.load = function (a) {
        3 <= this.Da ? a(this) : this.b.push(a)
    };

    function Xf(a, b, c, d) {
        b = "string" == typeof b ? b.split(".") : [b, c, d];
        b[0] = parseInt(b[0], 10) || 0;
        b[1] = parseInt(b[1], 10) || 0;
        b[2] = parseInt(b[2], 10) || 0;
        return a.R > b[0] || a.R == b[0] && a.Ha > b[1] || a.R == b[0] && a.Ha == b[1] && a.hb >= b[2]
    }

    function Yf(a) {
        return -1 < a.Lc.indexOf("Gnash") && -1 == a.Lc.indexOf("AVM2") || 9 == a.R && 1 == a.Ha || 9 == a.R && 0 == a.Ha && 1 == a.hb ? m : 9 <= a.R
    }

    function Zf(a) {
        return -1 < navigator.userAgent.indexOf("Sony/COM2") && !Xf(a, 9, 1, 58) ? m : k
    }

    function Wf(a) {
        if (3 > a.Da)
            if (1 > a.Da) {
                var b = s("window.navigator.plugins"),
                    c = s("window.navigator.mimeTypes"),
                    b = b && b["Shockwave Flash"],
                    c = c && c["application/x-shockwave-flash"],
                    c = b && c && c.enabledPlugin && b.description || "";
                if (b = c) {
                    var d = b.indexOf("Shockwave Flash");
                    0 <= d && (b = b.substr(d + 15));
                    for (var d = b.split(" "), e = "", b = "", f = 0, g = d.length; f < g; f++)
                        if (e)
                            if (b) break;
                            else b = d[f];
                    else e = d[f];
                    e = e.split(".");
                    d = parseInt(e[0], 10) || 0;
                    e = parseInt(e[1], 10) || 0;
                    f = 0;
                    if ("r" == b.charAt(0) || "d" == b.charAt(0)) f = parseInt(b.substr(1),
                        10) || 0;
                    b = [d, e, f]
                } else b = [0, 0, 0];
                a.Lc = c;
                c = b;
                a.R = c[0];
                a.Ha = c[1];
                a.hb = c[2];
                a.Da = 1;
                0 < a.R ? $f(a) : Wf(a)
            } else if (2 > a.Da) {
            var i, n, r, y;
            if (Wd) {
                try {
                    i = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                } catch (D) {
                    i = l
                }
                i || a.Ud("")
            } else r = document.getElementsByTagName("body")[0], y = document.createElement("object"), y.setAttribute("type", "application/x-shockwave-flash"), i = r.appendChild(y);
            var G = t(a.Ud, a),
                H = 0,
                ka = function () {
                    if (i && "GetVariable" in i) try {
                        n = i.GetVariable("$version")
                    } catch (a) {
                        n = ""
                    }
                    n || 10 <= H ? (r && y && r.removeChild(y),
                        G(n || "")) : (H++, N(ka, 10))
                };
            N(ka, 0)
        } else $f(a)
    }
    p.Ud = function (a) {
        a ? (a = a.split(" ")[1].split(","), a = [parseInt(a[0], 10) || 0, parseInt(a[1], 10) || 0, parseInt(a[2], 10) || 0]) : a = [0, 0, 0];
        this.R = a[0];
        this.Ha = a[1];
        this.hb = a[2];
        this.Da = 2;
        0 < this.R ? $f(this) : Wf(this)
    };

    function $f(a) {
        if (3 > a.Da) {
            a.Da = 3;
            for (var b = 0, c = a.b.length; b < c; b++) a.b[b](a);
            a.b = []
        }
    };

    function ag(a, b, c) {
        if ((a = F(a)) && b && c) {
            c instanceof Rf || (c = new Rf(c));
            var d = qb(c.attrs);
            d.tabindex = 0;
            var e = qb(c.params);
            e.flashvars = Df(c.args);
            if (Wd) {
                d.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";
                e.movie = b;
                var b = document.createElement("object"),
                    f;
                for (f in d) b.setAttribute(f, d[f]);
                for (f in e) d = document.createElement("param"), d.setAttribute("name", f), d.setAttribute("value", e[f]), b.appendChild(d)
            } else {
                d.type = "application/x-shockwave-flash";
                d.src = b;
                b = document.createElement("embed");
                for (f in d) b.setAttribute(f,
                    d[f]);
                for (f in e) b.setAttribute(f, e[f])
            }
            e = document.createElement("div");
            e.appendChild(b);
            a.innerHTML = e.innerHTML
        }
    }

    function bg(a, b) {
        a = F(a);
        b instanceof Rf || (b = new Rf(b));
        if (window != window.top) {
            var c = l;
            document.referrer && (c = document.referrer.substring(0, 128));
            b.args.framer = c
        }
        cg(function (c) {
            Xf(c, b.minVersion) || L("IS_OPERA_MINI") ? (c = Yf(c) && b.url || Zf(c) && b.urlV9As2 || b.urlV8 || b.url, ag(a, c, b)) : 0 == c.R && b.fallback ? b.fallback() : 0 == c.R && b.fallbackMessage ? b.fallbackMessage() : a.innerHTML = '<div id="flash-upgrade">' + O("FLASH_UPGRADE", j, 'You need to upgrade your Adobe Flash Player to watchthis video. <br> <a href="http://get.adobe.com/flashplayer/">Download it from Adobe.</a>') +
                "</div>"
        })
    }

    function dg(a, b, c) {
        if (a) {
            a instanceof Rf || (a = new Rf(a));
            var d = !!b,
                e = F(a.attrs.id),
                f = e ? e.parentNode : l;
            if (!e || !f) N(function () {
                dg(a)
            }, 50);
            else {
                if (window != window.top) {
                    b = l;
                    if (document.referrer) {
                        var g = document.referrer.substring(0, 128),
                            i = Qf(g);
                        Of(i) || Pf(i) || (b = g)
                    } else b = "unknown";
                    b && (d = k, a.args.framer = b)
                }
                cg(function (b) {
                    if (Xf(b, a.minVersion)) {
                        var g = ""; - 1 < navigator.userAgent.indexOf("Sony/COM2") || (g = e.getAttribute("src") || e.movie);
                        if (Yf(b))(g != a.url || d) && ag(f, a.url, a);
                        else if (Zf(b))(g != a.urlV9As2 || d) && ag(f,
                            a.urlV9As2, a);
                        else if (g != a.urlV8 || d)
                            if (ag(f, a.urlV8, a), b = F("flash10-promo-div")) U(b), b = He.getInstance(), b = parseInt(b.get("ftuc") || 0, 10) + 1, Me("ftuc", b), Pe()
                    } else Wd && Xf(b, 6, 0, 65) ? (b = new Rf({
                        url: "/swf/expressInstall.swf",
                        args: {
                            MMredirectURL: window.location,
                            MMplayerType: "ActiveX",
                            MMdoctitle: document.title
                        }
                    }), ag(f, b.url, b)) : 0 == b.R && a.fallback ? a.fallback() : 0 == b.R && a.fallbackMessage ? a.fallbackMessage() : f.innerHTML = '<div id="flash-upgrade">' + O("FLASH_UPGRADE") + "</div>";
                    c && c()
                })
            }
        }
    }

    function cg(a) {
        Vf.getInstance().load(function (b) {
            He.getInstance();
            Me("fv", [b.R, b.Ha, b.hb].join("."));
            Pe();
            a(b)
        })
    };

    function eg() {}
    eg.prototype.L = m;
    eg.prototype.na = function () {
        this.L || (this.L = k, this.T())
    };
    eg.prototype.T = function () {
        this.i && fg.apply(l, this.i);
        if (this.ca)
            for (; this.ca.length;) this.ca.shift()()
    };

    function fg(a) {
        for (var b = 0, c = arguments.length; b < c; ++b) {
            var d = arguments[b];
            fa(d) ? fg.apply(l, d) : d && "function" == typeof d.na && d.na()
        }
    };

    function gg() {
        this.b = [];
        this.W = {}
    }
    v(gg, eg);
    p = gg.prototype;
    p.Dd = 1;
    p.Vb = 0;
    p.ra = function (a, b, c) {
        var d = this.W[a];
        d || (d = this.W[a] = []);
        var e = this.Dd;
        this.b[e] = a;
        this.b[e + 1] = b;
        this.b[e + 2] = c;
        this.Dd = e + 3;
        d.push(e);
        return e
    };
    p.Vd = function (a, b, c) {
        if (a = this.W[a]) {
            var d = this.b;
            if (a = Sa(a, function (a) {
                    return d[a + 1] == b && d[a + 2] == c
                })) return this.Ub(a)
        }
        return m
    };
    p.Ub = function (a) {
        if (0 != this.Vb) return this.c || (this.c = []), this.c.push(a), m;
        var b = this.b[a];
        if (b) {
            var c = this.W[b];
            c && Xa(c, a);
            delete this.b[a];
            delete this.b[a + 1];
            delete this.b[a + 2]
        }
        return !!b
    };
    p.za = function (a, b) {
        var c = this.W[a];
        if (c) {
            this.Vb++;
            for (var d = bb(arguments, 1), e = 0, f = c.length; e < f; e++) {
                var g = c[e];
                this.b[g + 1].apply(this.b[g + 2], d)
            }
            this.Vb--;
            if (this.c && 0 == this.Vb)
                for (; c = this.c.pop();) this.Ub(c);
            return 0 != e
        }
        return m
    };
    p.clear = function (a) {
        if (a) {
            var b = this.W[a];
            b && (w(b, this.Ub, this), delete this.W[a])
        } else this.b.length = 0, this.W = {}
    };
    p.Z = function (a) {
        if (a) {
            var b = this.W[a];
            return b ? b.length : 0
        }
        a = 0;
        for (b in this.W) a += this.Z(b);
        return a
    };
    p.T = function () {
        gg.J.T.call(this);
        delete this.b;
        delete this.W;
        delete this.c
    };
    var hg = s("yt.pubsub.instance_") || new gg;
    gg.prototype.subscribe = gg.prototype.ra;
    gg.prototype.unsubscribeByKey = gg.prototype.Ub;
    gg.prototype.publish = gg.prototype.za;
    gg.prototype.clear = gg.prototype.clear;
    u("yt.pubsub.instance_", hg);

    function ig(a, b, c) {
        var d = s("yt.pubsub.instance_");
        return d ? d.subscribe(a, function () {
            var a = arguments;
            N(function () {
                b.apply(c || q, a)
            }, 0)
        }, c) : 0
    }

    function jg(a) {
        var b = s("yt.pubsub.instance_");
        b && ("number" == typeof a && (a = [a]), w(a, function (a) {
            b.unsubscribeByKey(a)
        }))
    }

    function W(a, b) {
        var c = s("yt.pubsub.instance_");
        return c ? c.publish.apply(c, arguments) : m
    };
    var kg;

    function lg(a, b, c) {
        this.c = a;
        mg && (this.i = b);
        this.L = c || window;
        this.e = this.L.location;
        this.U = this.e.href.split("#")[0];
        this.H = t(this.oa, this)
    }
    var ng = E && 8 <= document.documentMode || Eb && Sb("1.9.2") || Fb && Sb("532.1"),
        mg = E && !ng;
    lg.prototype.ca = function (a, b) {
        this.f && (se(this.f), delete this.f);
        this.n && (Vd(this.n), delete this.n);
        if (a) {
            this.b = og(this);
            if (mg) {
                var c = this.i.contentWindow.document.body;
                (!c || !c.innerHTML) && pg(this, this.b)
            }
            b || this.c(this.b);
            ng ? this.f = R(this.L, "hashchange", this.H) : this.n = Td(this.H, 200)
        }
    };
    lg.prototype.oa = function () {
        if (mg) {
            var a;
            a = (a = this.i.contentWindow.document.body) ? ya(a.innerHTML.substring(1)) : "";
            a != this.b ? (this.b = a, qg(this, a), this.c(a)) : (a = og(this), a != this.b && (this.b = a, pg(this, a), this.c(a)))
        } else a = og(this), a != this.b && (this.b = a, this.c(a))
    };

    function og(a) {
        var a = a.e.href,
            b = a.indexOf("#");
        return 0 > b ? "" : a.substring(b + 1)
    }

    function qg(a, b) {
        var c = a.U + "#" + b,
            d = a.e.href;
        d == c || d + "#" == c || (a.e.href = c)
    }

    function pg(a, b) {
        var c = a.i.contentWindow.document,
            d = "#" + encodeURIComponent(String(b));
        if ((c.body ? c.body.innerHTML : "") != d) d = ["<title>", za(window.document.title || ""), "</title><body>", d, "</body>"], c.open("text/html"), c.write(d.join("")), c.close()
    }
    lg.prototype.M = function (a, b, c) {
        this.b = "" + a;
        mg && pg(this, a);
        qg(this, a);
        c || this.c(this.b)
    };

    function rg() {
        this.b = qa()
    }
    new rg;
    rg.prototype.get = function () {
        return this.b
    };

    function sg(a, b) {
        this.e = a;
        this.f = b || window;
        this.c = this.f.location;
        this.H = t(this.L, this)
    }
    var tg = !!window.history.pushState && (!Fb || Fb && Sb("534.11"));
    sg.prototype.U = function (a, b) {
        this.i && (se(this.i), delete this.i);
        this.n && (Vd(this.n), delete this.n);
        a && tg && (this.b = this.c.href, b || this.e(this.b), this.i = R(this.f, "popstate", this.H))
    };
    sg.prototype.L = function (a) {
        var b = this.c.href;
        if ((a = a.state) || b != this.b) this.b = b, this.e(b, a)
    };
    sg.prototype.M = function (a, b, c) {
        if (a || b) a = a || this.c.href, this.f.history.pushState(b, "", a), this.b = a, c || this.e(a, b)
    };
    sg.prototype.replace = function (a, b, c) {
        if (a || b) a = a || this.c.href, this.f.history.replaceState(b, "", a), this.b = a, c || this.e(a, b)
    };

    function ug(a) {
        var a = a || "hash",
            b = s("yt.history.instance_");
        b || ("state" == a ? (b = new sg(vg), sg.prototype.setEnabled = sg.prototype.U, sg.prototype.add = sg.prototype.M, sg.prototype.replace = sg.prototype.replace) : (b = new lg(vg, F("legacy-history-iframe")), lg.prototype.setEnabled = lg.prototype.ca, lg.prototype.add = lg.prototype.M, lg.prototype.replace = lg.prototype.M), kg = b, u("yt.history.instance_", kg));
        return b
    }

    function vg(a, b) {
        W("navigate", a, b)
    };

    function wg(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {}
        h(Error("Invalid JSON string: " + a))
    }

    function xg(a) {
        return eval("(" + a + ")")
    }

    function yg(a) {
        this.b = a
    }

    function zg(a, b) {
        var c = [];
        Ag(a, b, c);
        return c.join("")
    }

    function Ag(a, b, c) {
        switch (typeof b) {
        case "string":
            Bg(b, c);
            break;
        case "number":
            c.push(isFinite(b) && !isNaN(b) ? b : "null");
            break;
        case "boolean":
            c.push(b);
            break;
        case "undefined":
            c.push("null");
            break;
        case "object":
            if (b == l) {
                c.push("null");
                break
            }
            if (ea(b)) {
                var d = b.length;
                c.push("[");
                for (var e = "", f = 0; f < d; f++) c.push(e), e = b[f], Ag(a, a.b ? a.b.call(b, String(f), e) : e, c), e = ",";
                c.push("]");
                break
            }
            c.push("{");
            d = "";
            for (f in b) Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d), Bg(f, c), c.push(":"),
                Ag(a, a.b ? a.b.call(b, f, e) : e, c), d = ","));
            c.push("}");
            break;
        case "function":
            break;
        default:
            h(Error("Unknown type: " + typeof b))
        }
    }
    var Cg = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        Dg = /\uffff/.test("￿") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

    function Bg(a, b) {
        b.push('"', a.replace(Dg, function (a) {
            if (a in Cg) return Cg[a];
            var b = a.charCodeAt(0),
                e = "\\u";
            16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
            return Cg[a] = e + b.toString(16)
        }), '"')
    };
    var Eg = l;
    "undefined" != typeof XMLHttpRequest ? Eg = function () {
        return new XMLHttpRequest
    } : "undefined" != typeof ActiveXObject && (Eg = function () {
        return new ActiveXObject("Microsoft.XMLHTTP")
    });

    function Fg(a) {
        switch (a && "status" in a ? a.status : -1) {
        case 0:
        case 200:
        case 204:
        case 304:
            return k;
        default:
            return m
        }
    };

    function Gg(a, b, c, d, e) {
        var f = Eg && Eg();
        if ("open" in f) {
            f.onreadystatechange = function () {
                4 == (f && "readyState" in f ? f.readyState : 0) && b && b(f)
            };
            c = (c || "GET").toUpperCase();
            d = d || "";
            f.open(c, a, k);
            a = "POST" == c;
            if (e)
                for (var g in e) f.setRequestHeader(g, e[g]), "content-type" == g.toLowerCase() && (a = m);
            a && f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            f.send(d);
            return f
        }
    }

    function X(a, b) {
        var c = b.format || "JSON";
        b.pb && (a = document.location.protocol + "//" + document.location.hostname + a);
        var d = b.o;
        d && (a = Nf(a, d));
        var e = b.Ra || "";
        if (d = b.C) e = Hf(e), sb(e, d), e = Df(e);
        var f = m,
            g, i = Gg(a, function (a) {
                if (!f) {
                    f = k;
                    g && Ud(g);
                    var d = Fg(a),
                        e = l;
                    if (d || 400 <= a.status && 500 > a.status) {
                        var i = l;
                        switch (c) {
                        case "JSON":
                            var e = a.responseText,
                                G = a.getResponseHeader("Content-Type") || "";
                            e && 0 <= G.indexOf("json") && (i = xg(e));
                            break;
                        case "XML":
                            if (e = (e = a.responseXML) ? Hg(e) : l) i = {}, w(e.getElementsByTagName("*"), function (a) {
                                i[a.tagName] =
                                    Ig(a)
                            })
                        }
                        e = i
                    }
                    if (d) a: {
                        switch (c) {
                        case "XML":
                            d = 0 == parseInt(e && e.return_code, 10);
                            break a;
                        case "RAW":
                            d = k;
                            break a
                        }
                        d = !!e
                    }
                    e = e || {};
                    G = b.B || q;
                    d ? b.j && b.j.call(G, a, e) : b.onError && b.onError.call(G, a, e);
                    b.S && b.S.call(G, a, e)
                }
            }, b.method, e, b.headers);
        b.ag && 0 < b.timeout && (g = N(function () {
            f || (f = k, i.abort(), Ud(g), b.ag.call(b.B || q, i))
        }, b.timeout))
    }

    function Jg(a, b) {
        var c = b || {};
        c.method = a.method.toUpperCase();
        if ("POST" == c.method) c.Ra = Qc(a);
        else {
            var d = Mc(Nc(a)),
                e = c.o || {};
            sb(e, d);
            c.o = e
        }
        X(a.action, c)
    }

    function Kg(a, b) {
        var c = b.onComplete || l,
            d = b.onException || l,
            e = b.onError || l,
            f = b.update || l,
            g = b.json || m;
        return Gg(a, function (a) {
            if (Fg(a)) {
                var b = a.responseXML,
                    r = b ? Hg(b) : l,
                    b = !(!b || !r),
                    y, D;
                if (b && (y = Lg(r, "return_code"), D = Lg(r, "html_content"), 0 == y)) {
                    f && D && (F(f).innerHTML = D);
                    var G = Lg(r, "js_content");
                    if (G) {
                        var H = document.createElement("script");
                        H.text = G;
                        document.getElementsByTagName("head")[0].appendChild(H)
                    }
                }
                c && (b ? (b = Lg(r, "redirect_on_success"), y && b ? window.location = b : ((r = Lg(r, 0 == y ? "success_message" : "error_message")) &&
                    alert(r), a = g ? eval("(" + D + ")") : a, 0 == y ? c(a) : d && d(a))) : a.responseText && c(a))
            } else e && e(a)
        }, b.method || "POST", b.postBody || l, b.headers || l)
    }

    function Hg(a) {
        return !a ? l : (a = ("responseXML" in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : l
    }

    function Lg(a, b) {
        if (!a) return l;
        var c = a.getElementsByTagName(b);
        return c && 0 < c.length ? Ig(c[0]) : l
    }

    function Ig(a) {
        var b = "";
        w(a.childNodes, function (a) {
            b += a.nodeValue
        });
        return b
    }
    var Mg = {
            html5_ajax: "action_get_html5_token",
            watch_actions_ajax: "action_get_watch_actions_token",
            addto_ajax: "action_get_wl_token"
        },
        Ng = {
            html5_ajax: "html5_ajax_token",
            watch_actions_ajax: "watch_actions_ajax_token",
            addto_ajax: "addto_ajax_token"
        };

    function Og(a, b, c) {
        if (M(a)) b && window.setTimeout(b, 0);
        else {
            var d = wf() + "/token_ajax",
                e = {};
            e[Mg[a]] = 1;
            X(d, {
                format: "RAW",
                method: "GET",
                o: e,
                S: function (d) {
                    var e = Hf(d.responseText),
                        i = e[Ng[a]];
                    i ? (Rd(a, i), b && b()) : c && c(d, e)
                }
            })
        }
    };
    var Pg = {},
        Qg = {};

    function Rg(a, b, c) {
        a = F(a);
        c = c || ja(a);
        c in Pg || (Pg[c] = []);
        Pg[c].push([a, b]);
        Qg[c] = m;
        return c
    }

    function Sg(a, b) {
        var a = F(a),
            c = b || ja(a),
            d = Pg[c];
        d && (Pg[c] = Qa(d, function (b) {
            return b[0] != a
        }))
    }

    function Tg(a) {
        a in Pg && !Qg[a] && (w(Pg[a], function (a) {
            var c = a[0],
                a = a[1];
            c && "IMG" == c.tagName && (c.onload = "", c.src = a)
        }), Pg[a] = [], Qg[a] = k)
    };

    function Ug(a, b, c) {
        var d = "scriptload-" + Na(a),
            e = document.getElementById(d),
            f = e && Q(e, "loaded"),
            g = e && !f;
        if (f && !c) return b && b(), e;
        if (g && !c) return b && ig(d, b), e;
        e && (d = "scriptload-" + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ qa()).toString(36)));
        b && ig(d, b);
        var i, b = d,
            n = document.createElement("script");
        n.id = b;
        n.onload = function () {
            if (!Q(i, "loaded")) {
                P(i, "loaded", "true");
                W(d);
                var a = d,
                    b = s("yt.pubsub.instance_");
                b && b.clear(a)
            }
        };
        n.onreadystatechange = function () {
            if ("loaded" ==
                n.readyState || "complete" == n.readyState) n.onload()
        };
        n.src = a;
        a = document.getElementsByTagName("head")[0];
        a.insertBefore(n, a.firstChild);
        return i = n
    };

    function Vg(a, b) {
        var c = vf(a);
        if (c == vf(window.location.href) || !c && 0 == a.lastIndexOf("/", 0))
            if (c = xf(a), c = yf(c)) {
                var c = "s_tempdata-" + Na(c),
                    d = b ? Df(b) : "";
                Ee(c, d, 5)
            }
    };
    var Wg = {},
        Xg = 0;

    function Yg(a, b) {
        if (a) {
            var c = new Image,
                d = "" + Xg++;
            Wg[d] = c;
            c.onload = c.onerror = function () {
                b && Wg[d] && b();
                delete Wg[d]
            };
            c.src = a;
            c = eval("null")
        }
    };

    function Zg(a, b, c) {
        Yd(a, b || "null");
        a = "a=" + a + (b ? "&" + b : "").replace(/\//g, "&");
        Yg("/gen_204?" + a, c)
    }

    function $g(a, b, c, d) {
        var a = {
                name: a,
                locale: c,
                feature: d
            },
            e;
        for (e in b) a[e] = b[e];
        b = Lf("/sharing_services", a);
        Yg(b)
    }

    function ah(a, b, c, d) {
        $g(a, {
            v: b
        }, c, d)
    }

    function bh(a, b, c, d, e) {
        $g(a, {
            list: b,
            v: c
        }, d, e)
    };

    function ch(a, b, c, d, e, f, g) {
        var i, n;
        if (i = c.offsetParent) {
            var r = "HTML" == i.tagName || "BODY" == i.tagName;
            if (!r || "static" != We(i, "position")) n = $e(i), r || (r = (r = af(i)) && Eb ? -i.scrollLeft : r && (!E || !Sb("8")) ? i.scrollWidth - i.clientWidth - i.scrollLeft : i.scrollLeft, n = kb(n, new jb(r, i.scrollTop)))
        }
        i = n || new jb;
        n = gf(a);
        if (r = Ze(a)) {
            var y = new Re(r.left, r.top, r.right - r.left, r.bottom - r.top),
                r = Math.max(n.left, y.left),
                D = Math.min(n.left + n.width, y.left + y.width);
            if (r <= D) {
                var G = Math.max(n.top, y.top),
                    y = Math.min(n.top + n.height, y.top +
                        y.height);
                G <= y && (n.left = r, n.top = G, n.width = D - r, n.height = y - G)
            }
        }
        r = Zb(a);
        G = Zb(c);
        if (r.b != G.b) {
            var D = r.b.body,
                G = G.b.parentWindow || G.b.defaultView,
                y = new jb(0, 0),
                H = ac(D) ? ac(D).parentWindow || ac(D).defaultView : window,
                ka = D;
            do {
                var ua = H == G ? $e(ka) : bf(ka);
                y.x += ua.x;
                y.y += ua.y
            } while (H && H != G && (ka = H.frameElement) && (H = H.parent));
            D = kb(y, $e(D));
            E && !Dc(r) && (D = kb(D, Ec(r)));
            n.left += D.x;
            n.top += D.y
        }
        a = (b & 4 && af(a) ? b ^ 2 : b) & -5;
        b = new jb(a & 2 ? n.left + n.width : n.left, a & 1 ? n.top + n.height : n.top);
        b = kb(b, i);
        e && (b.x += (a & 2 ? -1 : 1) * e.x, b.y += (a &
            1 ? -1 : 1) * e.y);
        var S;
        if (g && (S = Ze(c))) S.top -= i.y, S.right -= i.x, S.bottom -= i.y, S.left -= i.x;
        return dh(b, c, d, f, S, g, j)
    }

    function dh(a, b, c, d, e, f, g) {
        var a = a.ta(),
            i = 0,
            n = (c & 4 && af(b) ? c ^ 2 : c) & -5,
            c = ef(b),
            g = g ? g.ta() : c.ta();
        if (d || 0 != n) n & 2 ? a.x -= g.width + (d ? d.right : 0) : d && (a.x += d.left), n & 1 ? a.y -= g.height + (d ? d.bottom : 0) : d && (a.y += d.top);
        if (f) {
            if (e) {
                i = a;
                d = 0;
                if (65 == (f & 65) && (i.x < e.left || i.x >= e.right)) f &= -2;
                if (132 == (f & 132) && (i.y < e.top || i.y >= e.bottom)) f &= -5;
                i.x < e.left && f & 1 && (i.x = e.left, d |= 1);
                i.x < e.left && (i.x + g.width > e.right && f & 16) && (g.width = Math.max(g.width - (i.x + g.width - e.right), 0), d |= 4);
                i.x + g.width > e.right && f & 1 && (i.x = Math.max(e.right -
                    g.width, e.left), d |= 1);
                f & 2 && (d |= (i.x < e.left ? 16 : 0) | (i.x + g.width > e.right ? 32 : 0));
                i.y < e.top && f & 4 && (i.y = e.top, d |= 2);
                i.y >= e.top && (i.y + g.height > e.bottom && f & 32) && (g.height = Math.max(g.height - (i.y + g.height - e.bottom), 0), d |= 8);
                i.y + g.height > e.bottom && f & 4 && (i.y = Math.max(e.bottom - g.height, e.top), d |= 2);
                f & 8 && (d |= (i.y < e.top ? 64 : 0) | (i.y + g.height > e.bottom ? 128 : 0));
                i = d
            } else i = 256;
            if (i & 496) return i
        }
        f = a;
        e = Eb && (xb || Ib) && Sb("1.9");
        f instanceof jb ? (a = f.x, f = f.y) : (a = f, f = j);
        b.style.left = df(a, e);
        b.style.top = df(f, e);
        if (!(c == g || (!c ||
                !g ? 0 : c.width == g.width && c.height == g.height))) a = Dc(Zb(ac(b))), E && (!a || !Sb("8")) ? (c = b.style, a ? (E ? (a = hf(b, Ve(b, "paddingLeft")), e = hf(b, Ve(b, "paddingRight")), f = hf(b, Ve(b, "paddingTop")), d = hf(b, Ve(b, "paddingBottom")), a = new Qe(f, e, d, a)) : (a = Ue(b, "paddingLeft"), e = Ue(b, "paddingRight"), f = Ue(b, "paddingTop"), d = Ue(b, "paddingBottom"), a = new Qe(parseFloat(f), parseFloat(e), parseFloat(d), parseFloat(a))), E ? (e = kf(b, "borderLeft"), f = kf(b, "borderRight"), d = kf(b, "borderTop"), b = kf(b, "borderBottom"), b = new Qe(d, f, b, e)) : (e = Ue(b,
            "borderLeftWidth"), f = Ue(b, "borderRightWidth"), d = Ue(b, "borderTopWidth"), b = Ue(b, "borderBottomWidth"), b = new Qe(parseFloat(d), parseFloat(f), parseFloat(b), parseFloat(e))), c.pixelWidth = g.width - b.left - a.left - a.right - b.right, c.pixelHeight = g.height - b.top - a.top - a.bottom - b.bottom) : (c.pixelWidth = g.width, c.pixelHeight = g.height)) : (b = b.style, Eb ? b.MozBoxSizing = "border-box" : Fb ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b.width = Math.max(g.width, 0) + "px", b.height = Math.max(g.height, 0) + "px");
        return i
    };
    var eh = {},
        fh = "ontouchstart" in document;

    function gh(a, b, c) {
        b in eh || (eh[b] = new gg);
        eh[b].ra(a, c)
    }

    function hh(a, b, c) {
        var d;
        switch (a) {
        case "mouseover":
        case "mouseout":
            d = 3;
            break;
        case "mouseenter":
        case "mouseleave":
            d = 9
        }
        return Bc(c, function (a) {
            return B(a, b)
        }, k, d)
    }

    function ih(a) {
        var b = "mouseover" == a.type && "mouseenter" in eh || "mouseout" == a.type && "mouseleave" in eh,
            c = a.type in eh || b;
        if ("HTML" != a.target.tagName && c) {
            if (b) {
                var b = "mouseover" == a.type ? "mouseenter" : "mouseleave",
                    c = eh[b],
                    d;
                for (d in c.W) {
                    var e = hh(b, d, a.target);
                    e && !Bc(a.relatedTarget, function (a) {
                        return a == e
                    }, k) && c.za(d, e, b, a)
                }
            }
            if (b = eh[a.type])
                for (d in b.W)(e = hh(a.type, d, a.target)) && b.za(d, e, a.type, a)
        }
    }
    R(document, "blur", ih, k);
    R(document, "change", ih, k);
    R(document, "click", ih);
    R(document, "focus", ih, k);
    R(document, "mouseover", ih);
    R(document, "mouseout", ih);
    R(document, "mousedown", ih);
    R(document, "keydown", ih);
    R(document, "keyup", ih);
    R(document, "keypress", ih);
    R(document, "cut", ih);
    R(document, "paste", ih);
    fh && (R(document, "touchstart", ih), R(document, "touchend", ih), R(document, "touchcancel", ih));
    var jh = window.yt && window.yt.uix && window.yt.uix.widgets_ || {};
    u("yt.uix.widgets_", jh);

    function kh(a) {
        var a = a.getInstance(),
            b = Y(a);
        !(b in jh) && a.Uc() && (a.register(), jh[b] = a)
    };

    function lh() {
        this.b = {}
    }
    p = lh.prototype;
    p.Rc = !!eval("false");
    p.Uc = function () {
        return k
    };

    function Z(a, b, c, d) {
        var d = Y(a, d),
            e = t(c, a);
        gh(d, b, e);
        a.b[c] = e
    }
    p.ia = function (a, b, c) {
        var d = this.getData(a, b);
        if (d && (d = s(d))) {
            var e = bb(arguments, 2);
            ab(e, 0, 0, a);
            d.apply(l, e)
        }
    };
    p.getData = function (a, b) {
        return Q(a, b)
    };
    p.setData = function (a, b, c) {
        P(a, b, c)
    };

    function mh(a, b) {
        return Cc(b, Y(a))
    }

    function Y(a, b) {
        return "yt-uix" + (a.O ? "-" + a.O : "") + (b ? "-" + b : "")
    };

    function nh() {
        this.b = {}
    }
    v(nh, lh);
    ba(nh);
    p = nh.prototype;
    p.O = "button";
    p.register = function () {
        Z(this, "click", this.Qg);
        Z(this, "keydown", this.Rg);
        Z(this, "keypress", this.Sg)
    };
    p.Qg = function (a) {
        if (a && !a.disabled) {
            if (this.getData(a, "button-toggle")) {
                var b = Cc(a, Y(this, "group"));
                if (b && this.getData(b, "button-toggle-group")) {
                    var c = this.getData(b, "button-toggle-group"),
                        b = I(Y(this), b),
                        d = Y(this, "toggled"),
                        e = B(a, d);
                    w(b, function (b) {
                        b != a || "optional" == c && e ? z(b, d) : x(a, d)
                    })
                } else ib(a, Y(this, "toggled"))
            }
            this.click(a)
        }
    };
    p.Rg = function (a, b, c) {
        if (!c.altKey && (!c.ctrlKey && !c.shiftKey) && (b = oh(this, a))) {
            var d = function (a) {
                var b = "";
                a.tagName && (b = a.tagName.toLowerCase());
                return "ul" == b || "table" == b
            };
            if (d(b)) d = b;
            else var e = [],
                d = uc(b, d, e, k) ? e[0] : j;
            if (d) {
                var d = d.tagName.toLowerCase(),
                    f;
                "ul" == d ? f = this.Yg : "table" == d && (f = this.Xg);
                f && (d = t(f, this), e = mf(b), (f = 9 == c.keyCode) || 32 == c.keyCode || 13 == c.keyCode ? (c = ph(this, b)) ? (a = nc(c), "a" == a.tagName.toLowerCase() ? window.location = a.href : xe(a)) : f && qh(this, a) : e ? 27 == c.keyCode ? (ph(this, b), qh(this,
                    a)) : d(a, b, c) : (b = B(a, Y(this, "reverse")) ? 38 : 40, c.keyCode == b && (xe(a), c.preventDefault())))
            }
        }
    };
    p.Sg = function (a, b, c) {
        !c.altKey && (!c.ctrlKey && !c.shiftKey) && (a = oh(this, a), mf(a) && c.preventDefault())
    };

    function ph(a, b) {
        var c = Y(a, "menu-item-highlight"),
            d = K(c, b);
        d && z(d, c);
        return d
    }

    function rh(a, b, c) {
        x(c, Y(a, "menu-item-highlight"));
        b.setAttribute("aria-activedescendant", c.getAttribute("id"))
    }
    p.Xg = function (a, b, c) {
        var d = ph(this, b),
            b = he("table", l, b),
            e = he("tr", l, b),
            e = J("td", l, e).length,
            b = J("td", l, b),
            d = sh(d, b, e, c); - 1 != d && (rh(this, a, b[d]), c.preventDefault())
    };
    p.Yg = function (a, b, c) {
        if (40 == c.keyCode || 38 == c.keyCode) {
            var d = ph(this, b),
                b = J("li", l, b),
                d = sh(d, b, 1, c);
            rh(this, a, b[d]);
            c.preventDefault()
        }
    };

    function sh(a, b, c, d) {
        var e = b.length,
            a = Pa(b, a);
        if (-1 == a)
            if (38 == d.keyCode) a = e - c;
            else {
                if (37 == d.keyCode || 38 == d.keyCode || 40 == d.keyCode) a = 0
            }
        else 39 == d.keyCode ? (a % c == c - 1 && (a -= c), a += 1) : 37 == d.keyCode ? (0 == a % c && (a += c), a -= 1) : 38 == d.keyCode ? (a < c && (a += e), a -= c) : 40 == d.keyCode && (a >= e - c && (a -= e), a += c);
        return a
    }

    function th(a, b) {
        if (!yb || !B(b, Y(a, "masked"))) return l;
        var c = b.iframeMask;
        c || (c = document.createElement("iframe"), c.src = 'javascript:""', c.className = Y(a, "menu-mask"), b.iframeMask = c);
        return c
    }

    function uh(a, b, c) {
        var d = Cc(b, Y(a, "group")),
            e = !!a.getData(b, "button-menu-ignore-group"),
            d = d && !e ? d : b,
            e = 5,
            f = 4,
            g = gf(b);
        if (B(b, Y(a, "reverse"))) {
            e = 4;
            f = 5;
            g = g.top + "px";
            try {
                c.style.maxHeight = g
            } catch (i) {}
        }
        B(b, "flip") && (B(b, Y(a, "reverse")) ? (e = 6, f = 7) : (e = 7, f = 6));
        var n;
        a.getData(b, "button-has-sibling-menu") ? n = Ye(d) : a.getData(b, "button-menu-root-container") && (n = vh(a, b));
        E && !Sb("8") && (n = l);
        var r;
        n && (r = gf(n), r = new Qe(-r.top, r.left, r.top, -r.left));
        n = new jb(0, 1);
        B(b, Y(a, "center-menu")) && (n.x -= Math.round((ef(c).width -
            ef(b).width) / 2));
        if (a = th(a, b)) b = ef(c), a.style.width = b.width + "px", a.style.height = b.height + "px", ch(d, e, a, f, n, r);
        ch(d, e, c, f, n, r)
    }

    function vh(a, b) {
        if (a.getData(b, "button-menu-root-container")) {
            var c = a.getData(b, "button-menu-root-container");
            return Cc(b, c)
        }
        return document.body
    }
    p.Sc = function (a) {
        if (a) {
            var b = oh(this, a);
            if (b) {
                a.setAttribute("aria-pressed", "true");
                a.setAttribute("aria-expanded", "true");
                b.originalParentNode = b.parentNode;
                b.activeButtonNode = a;
                b.parentNode.removeChild(b);
                this.getData(a, "button-has-sibling-menu") ? a.parentNode.appendChild(b) : vh(this, a).appendChild(b);
                b.style.minWidth = a.offsetWidth - 2 + "px";
                var c = th(this, a);
                c && document.body.appendChild(c);
                uh(this, a, b);
                U(b);
                this.ia(a, "button-menu-action", k);
                x(a, Y(this, "active"));
                c = t(this.Fg, this, a);
                b = R(document, "click",
                    c);
                c = R(document, "contextmenu", c);
                this.setData(a, "button-listener", b);
                this.setData(a, "button-context-menu-listener", c)
            }
        }
    };

    function qh(a, b) {
        if (b) {
            var c = oh(a, b);
            if (c) {
                b.setAttribute("aria-pressed", "false");
                b.setAttribute("aria-expanded", "false");
                V(c);
                a.ia(b, "button-menu-action", m);
                var d = th(a, b);
                N(function () {
                    d && d.parentNode && d.parentNode.removeChild(d);
                    c.originalParentNode && (c.parentNode.removeChild(c), c.originalParentNode.appendChild(c), c.originalParentNode = l, c.activeButtonNode = l)
                }, 1)
            }
            var e = Cc(b, Y(a, "group"));
            z(b, Y(a, "active"));
            e && z(e, Y(a, "group-active"));
            if (e = a.getData(b, "button-listener")) se(e), $d(b, "button-listener");
            if (e = a.getData(b, "button-context-menu-listener")) se(e), $d(b, "button-context-menu-listener")
        }
    }

    function wh(a, b) {
        return Cc(b.activeButtonNode || b.parentNode, Y(a))
    }
    p.Fg = function (a, b) {
        var c = ve(b),
            d = Cc(c, Y(this));
        if (d) {
            var d = oh(this, d),
                e = oh(this, a);
            if (d == e) return
        }
        if (!Cc(c, Y(this, "menu")) || B(c, Y(this, "menu-item")) || B(c, Y(this, "menu-close")))
            if (qh(this, a), (d = Cc(c, Y(this, "menu"))) && this.getData(a, "button-menu-indicate-selected"))(e = K(Y(this, "content"), a)) && tc(e, yc(c)), e = Y(this, "menu-item-selected"), (d = K(e, d)) && z(d, e), x(c.parentNode, e)
    };

    function oh(a, b) {
        if (!b.widgetMenu) {
            var c = a.getData(b, "button-menu-id"),
                c = c && F(c),
                d = Y(a, "menu");
            c ? (x(c, d), x(c, Y(a, "menu-external"))) : c = K(d, b);
            b.widgetMenu = c
        }
        return b.widgetMenu
    }
    p.click = function (a) {
        if (oh(this, a)) {
            var b = oh(this, a),
                c = wh(this, b);
            c && c != a ? (qh(this, c), N(t(this.Sc, this, a), 1)) : mf(b) ? qh(this, a) : this.Sc(a);
            a.focus()
        }
        this.ia(a, "button-action")
    };

    function xh() {
        this.b = {}
    }
    v(xh, lh);
    ba(xh);
    p = xh.prototype;
    p.O = "expander";
    p.register = function () {
        Z(this, "click", this.dh, "head");
        Z(this, "keypress", this.eh, "head")
    };
    p.dh = function (a) {
        yh(this, a)
    };
    p.eh = function (a, b, c) {
        c && 13 == c.keyCode && yh(this, a)
    };

    function yh(a, b) {
        var c = mh(a, b);
        c && (ib(c, Y(a, "collapsed")), a.ia(c, "expander-action"))
    }

    function zh(a, b) {
        var c = mh(a, b);
        c && (x(c, Y(a, "collapsed")), a.ia(c, "expander-action"))
    }
    p.getBodyElement = function (a) {
        return K(Y(this, "body"), a)
    };

    function Ah() {
        this.b = {}
    }
    v(Ah, lh);
    ba(Ah);
    p = Ah.prototype;
    p.O = "tooltip";
    p.jc = 0;
    p.register = function () {
        Z(this, "mouseover", this.ce);
        Z(this, "mouseout", this.Pc);
        Z(this, "click", this.Pc);
        Z(this, "touchstart", this.Gg);
        Z(this, "touchend", this.fe);
        Z(this, "touchcancel", this.fe)
    };
    p.Uc = function () {
        return !(this.Rc && 0 == Qb.indexOf("6"))
    };
    p.ce = function (a) {
        if (!(this.jc && 1E3 > qa() - this.jc)) {
            var b = parseInt(this.getData(a, "tooltip-hide-timer"), 10);
            b && ($d(a, "tooltip-hide-timer"), Ud(b));
            var b = t(function () {
                    Bh(this, a);
                    $d(a, "tooltip-show-timer")
                }, this),
                c = parseInt(this.getData(a, "tooltip-show-delay"), 10) || 0,
                b = N(b, c);
            this.setData(a, "tooltip-show-timer", b.toString());
            a.title && (this.setData(a, "tooltip-text", a.title), a.title = "")
        }
    };
    p.Pc = function (a) {
        var b = parseInt(this.getData(a, "tooltip-show-timer"), 10);
        b && (Ud(b), $d(a, "tooltip-show-timer"));
        b = t(function () {
            Ch(this, a);
            $d(a, "tooltip-hide-timer")
        }, this);
        b = N(b, 50);
        this.setData(a, "tooltip-hide-timer", b.toString());
        if (b = this.getData(a, "tooltip-text")) a.title = b
    };
    p.Gg = function (a, b, c) {
        this.jc = 0;
        a = hh(b, Y(this), c.changedTouches[0].target);
        this.ce(a)
    };
    p.fe = function (a, b, c) {
        this.jc = qa();
        a = hh(b, Y(this), c.changedTouches[0].target);
        this.Pc(a)
    };

    function Dh(a, b, c, d) {
        a.setData(b, "tooltip-text", c);
        var e = a.getData(b, "content-id");
        if (e = F(e)) e.innerHTML = c, d && Ch(a, b)
    }

    function Bh(a, b) {
        if (b) {
            var c = a.getData(b, "tooltip-text") || b.title;
            if (c) {
                var d = F(Eh(a, b));
                if (!d) {
                    d = document.createElement("div");
                    d.id = Eh(a, b);
                    d.className = Y(a, "tip");
                    var e = document.createElement("div");
                    e.className = Y(a, "tip-body");
                    var f = document.createElement("div");
                    f.className = Y(a, "tip-arrow");
                    var g = document.createElement("div");
                    g.className = Y(a, "tip-content");
                    var i;
                    i = l;
                    yb && B(b, Y(a, "masked")) && ((i = F("yt-uix-tooltip-shared-mask")) ? (i.parentNode.removeChild(i), U(i)) : (i = document.createElement("iframe"),
                        i.src = 'javascript:""', i.id = "yt-uix-tooltip-shared-mask", i.className = Y(a, "tip-mask")));
                    var n = Eh(a, b, "content");
                    g.id = n;
                    a.setData(b, "content-id", n);
                    e.appendChild(g);
                    i && d.appendChild(i);
                    d.appendChild(e);
                    d.appendChild(f);
                    (je() || document.body).appendChild(d);
                    Dh(a, b, c);
                    if ((c = parseInt(a.getData(b, "tooltip-max-width"), 10)) && e.offsetWidth > c) e.style.width = c + "px", x(g, Y(a, "normal-wrap"));
                    g = B(b, Y(a, "reverse"));
                    Fh(a, b, d, e, i, g) || Fh(a, b, d, e, i, !g);
                    var r = Y(a, "tip-visible");
                    N(function () {
                        x(d, r)
                    }, 0)
                }
            }
        }
    }

    function Fh(a, b, c, d, e, f) {
        C(c, Y(a, "tip-reverse"), f);
        var g = 0;
        f && (g = 1);
        var i = ef(b),
            f = new jb((i.width - 10) / 2, f ? i.height : 0),
            n = $e(b);
        dh(new jb(n.x + f.x, n.y + f.y), c, g);
        var g = cc(window),
            n = bf(c),
            c = ef(d),
            r = c.width / 2;
        e && (e.style.left = "3px", e.style.height = c.height + "px", e.style.width = c.width + "px");
        e = !!(g.height < n.y + i.height);
        i = !!(n.y < i.height);
        f = !!(n.x < r);
        g = !!(g.width < n.x + r);
        n = (c.width + 3) / -2 - -5;
        a = a.getData(b, "force-tooltip-direction");
        if ("left" == a || f) n = -5;
        else if ("right" == a || g) n = 20 - c.width - 3;
        d.style.left = n + "px";
        return !(e || i)
    }

    function Ch(a, b) {
        if (b) {
            var c = F(Eh(a, b));
            if (c) {
                var d = F("yt-uix-tooltip-shared-mask"),
                    e = d && Bc(d, function (a) {
                        return a == c
                    }, m, 2);
                d && e && (d.parentNode.removeChild(d), V(d), document.body.appendChild(d));
                mc(c);
                $d(b, "content-id")
            }
        }
    }

    function Eh(a, b, c) {
        a = Y(a) + ce(b);
        c && (a += "-" + c);
        return a
    };

    function Gh(a, b, c) {
        window.location = Lf(a, b || {}) + (c || "")
    }

    function Hh(a, b) {
        var c = b || {};
        c.target = c.target || a.target || "YouTube";
        c.width = c.width || 600;
        c.height = c.height || 600;
        var d = c;
        d || (d = {});
        var e = window,
            c = "undefined" != typeof a.href ? a.href : String(a),
            f = d.target || a.target,
            g = [],
            i;
        for (i in d) switch (i) {
        case "width":
        case "height":
        case "top":
        case "left":
            g.push(i + "=" + d[i]);
            break;
        case "target":
        case "noreferrer":
            break;
        default:
            g.push(i + "=" + (d[i] ? 1 : 0))
        }
        i = g.join(",");
        if (d.noreferrer) {
            if (d = e.open("", f, i)) E && -1 != c.indexOf(";") && (c = "'" + c.replace(/'/g, "%27") + "'"), d.opener =
                l, Fb ? d.location.href = c : (c = za(c), d.document.write('<META HTTP-EQUIV="refresh" content="0; url=' + c + '">'), d.document.close())
        } else d = e.open(c, f, i);
        c = d;
        if (!c) return l;
        c.opener || (c.opener = window);
        c.focus();
        return c
    }

    function Ih(a, b) {
        return !Hh(a, b)
    };

    function Jh(a, b) {
        if ("view" == a && b.convViewUrl) return b.convViewUrl;
        if (!b.baseUrl || !b.uid) return l;
        var c = b.rmktEnabled,
            d = b.focEnabled && !b.isAd;
        if (!c && !d) return l;
        var e = {
            label: d ? "followon_" + a : "default"
        };
        if (c) {
            c = {
                utuid: b.uid,
                type: a
            };
            b.vid && (c.utvid = b.vid);
            b.eventLabel && (c.el = b.eventLabel);
            b.playerStyle && (c.ps = b.playerStyle);
            b.feature && (c.feature = b.feature);
            b.ppe && (c.ppe = b.ppe);
            var f = [],
                g;
            for (g in c) f.push(encodeURIComponent(g) + "=" + encodeURIComponent(c[g]));
            e.data = f.join(";")
        }
        if (d && "view" == a && b.vid && b.uid &&
            (b.oeid || b.ieid)) b.oeid && (e.oeid = b.oeid), b.ieid && (e.ieid = b.ieid), e.evid = b.vid;
        d && (e.foc_id = b.uid);
        return Lf(b.baseUrl, e)
    }

    function Kh(a) {
        var b = L("CONVERSION_CONFIG_DICT");
        b && (a = Jh(a, b)) && Yg(a)
    };

    function Lh() {
        this.b = {}
    }
    v(Lh, lh);
    ba(Lh);
    p = Lh.prototype;
    p.O = "overlay";
    p.register = function () {
        Z(this, "click", this.Pd, "target");
        Z(this, "click", this.cc, "close")
    };
    p.Pd = function (a) {
        if (a = mh(this, a)) {
            var b = Y(this, "fg"),
                c = F(b);
            if (!c) {
                var d = K(Y(this, "content"), a);
                if (d) {
                    c = document.createElement("div");
                    c.id = b;
                    c.className = b;
                    b = this.getData(a, "overlay-hidden") || "";
                    P(c, "overlay-hidden", b);
                    b = this.getData(a, "overlay-class") || "";
                    x(c, b);
                    var e = document.createElement("div");
                    e.className = Y(this, "fg-content");
                    var b = document.createElement("div"),
                        f = Y(this, "base");
                    b.id = f;
                    x(b, f);
                    var g = Y(this, "bg"),
                        f = document.createElement("div");
                    f.id = g;
                    f.className = g;
                    f.style.height = ec() + "px";
                    g = document.createElement("span");
                    x(g, Y(this, "align"));
                    b.appendChild(g);
                    e.innerHTML = d.innerHTML;
                    d = J("iframe", l, e);
                    w(d, function (a) {
                        var b = this.getData(a, "onload");
                        b && ((b = s(b)) && R(a, "load", b), a.src = this.getData(a, "src") || a.src)
                    }, this);
                    c.appendChild(e);
                    d = document.getElementsByTagName("embed");
                    e = document.getElementsByTagName("object");
                    g = t(function (a) {
                        var b = a.style.visibility || "visible";
                        "hidden" != b && (this.setData(a, "overlay-hidden", "true"), this.setData(a, "overlay-visibility-value", b), a.style.visibility = "hidden")
                    }, this);
                    w(d, g);
                    w(e, g);
                    b.appendChild(c);
                    document.body.appendChild(f);
                    document.body.appendChild(b);
                    this.getData(a, "disable-shortcuts") || (c = t(function (a) {
                        B(a.target, Y(this, "base")) && this.cc()
                    }, this), R(b, "click", c), R(document, "keydown", t(this.ae, this)));
                    this.ia(a, "overlay-shown")
                }
            }
        }
    };
    p.cc = function () {
        var a = Y(this, "bg"),
            b = F(Y(this, "fg"));
        if (b) {
            if (B(b, Y(this, "unclosable"))) return;
            V(b);
            document.body.removeChild(b.parentNode)
        }(a = F(a)) && document.body.removeChild(a);
        var a = document.getElementsByTagName("embed"),
            c = document.getElementsByTagName("object"),
            d = t(function (a) {
                this.getData(a, "overlay-hidden") && (a.style.visibility = this.getData(a, "overlay-visibility-value"), $d(a, "overlay-hidden"))
            }, this);
        w(a, d);
        w(c, d);
        ue(document, "keydown", t(this.ae, this));
        b && this.ia(b, "overlay-hidden")
    };
    p.ae = function (a) {
        27 == a.keyCode && this.cc()
    };

    function Mh() {
        var a = Lh.getInstance(),
            b = F(Y(a, "fg"));
        return !b ? l : K(Y(a, "fg-content"), b)
    };
    var Nh = {
        Ei: 0,
        Bh: 1,
        Id: 2,
        ii: 3,
        Ch: 4,
        cj: 5,
        ej: 6,
        bj: 7,
        $i: 8,
        aj: 9,
        dj: 10,
        Zi: 11,
        Li: 12,
        Ki: 13,
        Ji: 14,
        Sh: 15,
        vi: 16,
        yi: 17,
        zi: 18,
        xi: 19,
        wi: 20,
        Mi: 21,
        Fh: 22,
        Yi: 23,
        Eh: 24,
        oh: 25,
        Gh: 26,
        Qh: 27,
        Hi: 28,
        Dh: 29,
        Gi: 30,
        Ti: 31,
        Si: 32,
        Nh: 33,
        Qi: 34,
        Ni: 35,
        Oi: 36,
        Pi: 37,
        Ri: 38,
        ji: 39,
        Bi: 40,
        ph: 41,
        Ai: 42,
        rh: 43,
        Hd: 44,
        Hh: 45,
        si: 46,
        Ui: 47,
        fj: 48,
        gj: 49,
        ij: 50,
        Ii: 51,
        wh: 52,
        yh: 53,
        ti: 54,
        di: 55,
        he: 56,
        Fi: 57,
        Ci: 58,
        Ph: 59,
        pi: 60,
        fi: 61,
        ki: 62,
        qh: 63,
        Xi: 64,
        th: 65,
        sh: 66,
        li: 67,
        Ah: 68,
        Jh: 69,
        Yh: 70,
        qi: 71,
        Rh: 72,
        Di: 73,
        mi: 74,
        Jd: 75,
        ug: 76,
        Zd: 77,
        Kh: 78,
        Vi: 79,
        gi: 80,
        xh: 81,
        oi: 82,
        Zh: 83,
        ai: 84,
        $h: 85,
        bi: 86,
        ci: 87,
        uh: 88,
        nh: 89,
        vh: 90,
        ui: 91,
        ri: 92,
        zh: 93,
        hj: 94,
        Mh: 95,
        Lh: 96,
        Oh: 97,
        hi: 98,
        Ih: 99,
        ni: 100,
        Uh: 101,
        Th: 102,
        Wh: 103,
        Xh: 104,
        Vh: 105,
        Wi: 106
    };
    var Oh = ["FL", "LL", "QL", "SV", "WL"];

    function Ph() {
        return parseInt(L("SHUFFLE_VALUE"), 10) || 0
    };

    function Qh() {
        var a = Fe("watch_queue_new");
        return a ? a.split(",") : []
    }

    function Rh(a) {
        a = bb(a, 0, 100);
        (a = a.join(",")) ? Ee("watch_queue_new", a): Ge("watch_queue_new")
    };

    function Sh(a, b, c, d) {
        this.e = a;
        this.P = b;
        this.pa = this.Kb = m;
        this.ea = new gg;
        this.K = c || [];
        this.Gb = d || 0;
        this.ob = {};
        this.f = !c;
        this.nb = "";
        this.b = -1;
        this.Za = 1;
        this.Fb = this.ma = 0;
        this.lb = this.mb = "";
        this.c = this.Wa = this.Ja = l
    }

    function Th(a) {
        a.ea.za("LIST_UPDATED")
    }
    p = Sh.prototype;
    p.isEqual = function (a) {
        return this.e != a.e ? m : this.Qa() == a.Qa()
    };
    p.Fc = function (a) {
        this.nb = a.nb || "";
        this.b = a.fa();
        this.ma = a.ma;
        this.Za = a.Za;
        this.mb = a.mb;
        this.lb = a.lb;
        this.Gb = a.Gb
    };
    p.Aa = function () {
        return this.e
    };
    p.Qa = function () {
        return this.e + (this.P || "")
    };

    function Uh(a) {
        return a.Y() ? Vh(a, "shuffled_ids", function () {
            return Ra(Wh(this), function (a) {
                return a.id
            })
        }) : a.Ba()
    }
    p.Jc = function (a) {
        var b = Uh(this);
        if (!b.length) return "";
        a = this.fa() + a;
        a >= b.length && (a %= b.length);
        return b[a]
    };

    function Xh(a, b) {
        var c = Uh(a);
        return Ra(b, function (a) {
            var b;
            a: {
                b = function (b) {
                    return b == a
                };
                for (var f = ga(c) ? c.split("") : c, g = c.length - 1; 0 <= g; g--)
                    if (g in f && b.call(j, f[g])) {
                        b = g;
                        break a
                    } b = -1
            }
            return b
        })
    }
    p.Ba = function () {
        return Za(this.K)
    };

    function Wh(a) {
        return Vh(a, "shuffled_videos", function () {
            function a(b) {
                for (var c = 1, e = [], b = b.split(""); b.length;) {
                    var c = (d + c) % b.length,
                        f = b[c];
                    Ya(b, c);
                    e.push(f)
                }
                return e.join("")
            }
            var c = this.Ba(),
                d = Ph(),
                e = [];
            w(c, function (c, d) {
                e.push({
                    id: c,
                    key: a(c),
                    index: d
                })
            });
            Oa.sort.call(e, function (a, b) {
                return cb(a.key, b.key)
            } || cb);
            var f = d >> 8;
            Ta(e, function (a) {
                return f == a.index
            });
            c = bb(e, f).concat(bb(e, 0, f));
            return Ra(c, function (a) {
                return {
                    id: a.id,
                    Ec: a.index
                }
            })
        })
    }
    p.getVideoData = function (a) {
        return this.ob[a] || {}
    };
    p.Z = function () {
        return this.Ba().length
    };
    p.fa = function () {
        return this.Y() ? Ta(Wh(this), function (a) {
            return a.Ec == this.b
        }, this) : this.b
    };
    p.Y = function () {
        return 0 < this.ma
    };
    p.ya = function () {
        return 0 <= this.b
    };
    p.vb = function () {
        return !!this.Kb
    };
    p.Bc = function () {
        return m
    };
    p.$a = function () {
        return m
    };

    function Yh(a, b, c) {
        var d = a.fa() + 1;
        d >= a.Z() && (d = 0);
        return Zh(a, d, !b, c)
    }

    function Zh(a, b, c, d) {
        var e = Uh(a)[b];
        if (!e) return l;
        var f = {
            v: e
        };
        if (1 < (Vh(a, "occurrences", function () {
                var a = {};
                w(this.Ba(), function (b) {
                    a[b] = (a[b] || 0) + 1
                });
                return a
            })[e] || 0)) e = b + 1 + a.Fb, a.Y() && (e = Wh(a)[b].Ec + 1), f.index = e;
        c && (f.playnext = a.Za);
        a.Y() && (f.shuffle = a.ma);
        d && (f.feature = d);
        return Nf(a.nb, f)
    }
    p.clear = function () {
        this.ie();
        Th(this)
    };
    p.removeItem = function (a) {
        this.Y() && (a = Wh(this)[a].Ec);
        var b = this.Ba()[a];
        this.Cd(a);
        this.b > a ? this.b -= 1 : this.b == a && (this.b = -1);
        Th(this);
        return b
    };
    p.Cd = function (a) {
        var b = this.K[a];
        Ya(this.K, a);
        X(this.ac(), {
            format: "XML",
            method: "POST",
            C: {
                video_ids: b,
                session_token: M("addto_ajax") || "",
                playlist_id: this.P || "",
                index: a
            },
            j: function (a, b) {
                this.Ja = b.html_content
            },
            onError: function (a, b) {
                this.Wa = b.error_message || O("ERROR_OCCURRED")
            },
            S: function () {
                Th(this)
            },
            B: this
        })
    };
    p.load = function (a) {
        this.f && !this.Kb && $h(this);
        ai(this, a)
    };

    function ai(a, b) {
        var c = Uh(a),
            c = Qa(c, function (a) {
                return !(a in this.ob)
            }, a);
        w(c, function (a) {
            this.ob[a] = {}
        }, a);
        var d = t(function (a) {
            for (var c in a) this.ob[c] = a[c];
            Th(this);
            b && b()
        }, a);
        c.length && X("/video_info_ajax", {
            method: "POST",
            o: {
                action_get_videos_data: 1,
                count: c.length
            },
            C: {
                video_ids: c.join(",")
            },
            j: function (a, b) {
                b.data && d(b.data)
            }
        })
    }

    function $h(a, b, c) {
        a.Kb = k;
        a.f = m;
        var d = {
            style: "bottomfeedr_json",
            action_get_list: 1,
            list: a.Qa()
        };
        c && sb(d, c);
        X("/list_ajax", {
            o: d,
            j: function (a, b) {
                var c = b.data;
                this.K = Za(c.videos);
                this.P = c.list_id;
                this.pa = !!c.editable;
                this.nb = c.video_url || "";
                this.mb = c.menu_title_html;
                this.lb = c.menu_html;
                this.Gb = c.video_count;
                this.Fb = c.index_offset;
                var c = c.video_data,
                    d;
                for (d in c) this.ob[d] = c[d]
            },
            onError: function () {},
            S: function () {
                this.Kb = m;
                ai(this);
                Th(this);
                b && b()
            },
            B: a
        })
    }

    function Vh(a, b, c) {
        if (a.c && b in a.c) return a.c[b];
        c = c.call(a);
        a.c && (a.c[b] = c);
        return c
    };

    function bi(a, b, c) {
        Sh.call(this, "FL", a, b, c)
    }
    v(bi, Sh);
    bi.prototype.ac = function () {
        return "/addto_ajax?action_delete_from_favorites=1"
    };

    function ci(a, b, c) {
        Sh.call(this, "LL", a, b, c)
    }
    v(ci, Sh);
    ci.prototype.ac = function () {
        return "/addto_ajax?action_delete_from_liked=1"
    };

    function di(a, b, c) {
        Sh.call(this, "ML", a, b, c)
    }
    v(di, Sh);
    di.prototype.Bc = function () {
        return !!this.pa
    };
    di.prototype.$a = function () {
        return !!this.pa
    };

    function ei(a, b, c, d) {
        Sh.call(this, a, b, c, d)
    }
    v(ei, Sh);
    p = ei.prototype;
    p.Ic = function (a) {
        $a(this.K, a);
        X("/addto_ajax", {
            format: "XML",
            method: "POST",
            o: {
                action_add_to_playlist: 1
            },
            C: {
                playlist_id: this.P,
                video_ids: a.join(","),
                session_token: M("addto_ajax")
            },
            onError: function () {
                this.Wa = O("ERROR_OCCURRED");
                Th(this)
            },
            B: this
        })
    };
    p.ac = function () {
        return "/addto_ajax?action_delete_from_playlist=1"
    };
    p.ie = function () {
        var a = this.K.length;
        Va(this.K);
        X("/addto_ajax", {
            format: "XML",
            method: "POST",
            o: {
                action_clear_playlist: 1,
                list_length: a,
                type: this.e
            },
            C: {
                playlist_id: this.P,
                session_token: M("addto_ajax")
            },
            onError: function () {
                this.Wa = O("ERROR_OCCURRED");
                Th(this)
            },
            B: this
        })
    };
    p.vd = function (a, b) {
        var c = this.K[a];
        Ya(this.K, a);
        ab(this.K, b, 0, c);
        var d = Za(this.K);
        X("/addto_ajax?action_move_playlist_video=1", {
            format: "XML",
            method: "POST",
            C: {
                video_ids: c,
                playlist_id: this.P,
                source_index: a,
                target_index: b,
                session_token: M("addto_ajax")
            },
            onError: function () {
                var e;
                a: if (e = this.K, !fa(e) || !fa(d) || e.length != d.length) e = m;
                    else {
                        for (var f = e.length, g = 0; g < f; g++)
                            if (e[g] !== d[g]) {
                                e = m;
                                break a
                            } e = k
                    } e && (Ya(this.K, b), ab(this.K, a, 0, c));
                this.Wa = O("ERROR_OCCURRED");
                Th(this)
            },
            B: this
        })
    };
    p.$a = function () {
        return !!this.pa
    };

    function fi(a) {
        Sh.call(this, "QL", l);
        this.pa = k;
        this.f = !a
    }
    v(fi, Sh);
    p = fi.prototype;
    p.Fc = function (a) {
        fi.J.Fc.call(this, a);
        this.f = m
    };
    p.Ba = function () {
        return Qh()
    };
    p.Ic = function (a) {
        var b = Qh();
        $a(b, a);
        Rh(b)
    };
    p.Cd = function (a) {
        var b = Uh(this)[a],
            a = Qh(),
            b = Pa(a, b);
        0 <= b && (Ya(a, b), Rh(a))
    };
    p.ie = function () {
        Rh([])
    };
    p.vd = function (a, b) {
        var c = Qh(),
            d = c[a];
        Ya(c, a);
        ab(c, b, 0, d);
        Rh(c)
    };
    p.$a = function () {
        return !!this.pa
    };

    function gi(a, b, c) {
        Sh.call(this, "SV", a, b, c);
        this.pa = k
    }
    v(gi, Sh);
    gi.prototype.load = function (a) {
        gi.J.load.call(this, a);
        !this.vb() && this.ya() && (a = Uh(this), this.fa() >= a.length - 1 && $h(this, l, {
            load_more: "1"
        }))
    };
    gi.prototype.ac = function () {
        return "/addto_ajax?action_delete_from_station=1"
    };

    function hi(a, b, c, d) {
        var e = l;
        switch (a) {
        case "PL":
        case "SP":
        case "BP":
        case "WL":
            e = new ei(a, b, c, d);
            break;
        case "FL":
            e = new bi(b, c, d);
            break;
        case "LL":
            e = new ci(b, c, d);
            break;
        case "AV":
        case "BB":
        case "ML":
        case "MC":
            e = new di(b, c, d);
            break;
        case "QL":
            e = new fi;
            break;
        case "SV":
            e = new gi(b, c, d);
            break;
        default:
            e = new Sh(a, b, c, d)
        }
        return e
    };

    function ii(a) {
        var b, c, d, e = window.location.href,
            f = k,
            g = F("page"),
            i = a || l;
        if (!i && !B(g, "watch")) return l;
        var n = Ac(i, "ul");
        n || (n = Ac(i, "ol"));
        if (B(g, "search-base") || F("search-base-div")) {
            a = "search";
            b = ji;
            var r = K("search-term");
            r && (c = r.value)
        } else if (B(g, "watch")) {
            b = ki;
            f = m;
            i || (i = L("GUIDE_ENABLED") ? K("guide-context-item") : K("watch-context-item"));
            n = F("watch-context-container");
            a = Q(n, "context-type");
            if ("channel" == a && (r = K("guide-context-image"))) r = nc(r), d = r.src;
            (r = K("context-back-link", n)) && (c = yc(K("placeholder",
                r)));
            if (r = K("context-back-link", n)) e = r.href;
            n = J("ul", l, n)[0]
        } else if (B(g, "channel"))
            if (a = "channel", F("guide")) {
                if (b = F("feed") ? li : mi, (r = J("h1", j, j)[0]) && (c = yc(r)), r = K("channel-header-profile-image")) d = r.src
            } else {
                if (g = (g = he("li", "selected", F("channel-header-main"))) && nc(g))
                    if (g = g.href, r = Sa(g.split("/"), function (a, b, c) {
                            return "user" == c[b - 2]
                        }), !r) return l;
                "featured" == r ? ((n = Cc(i, "blogger-video")) ? n = rc(n) : (n = Cc(i, "playlist"), n = rc(n)), b = ni) : "feed" == r ? b = oi : "videos" == r && (b = pi);
                (r = J("h1", j, j)[0]) && (c = yc(r));
                if (r = J("img", l, F("channel-header-main"))[0]) d = r.src
            }
        else B(g, "home") ? (a = "home", n = K("feed-page", g), n = nc(n), b = qi, r = K("branded-page-header-title")) : (a = "home", b = ri, r = nc(K("feed-header-details"))), r && (c = yc(r));
        if (!n || !b) return l;
        try {
            for (var y = nc(n), n = []; y;) si(y) || n.push(y), y = y.nextElementSibling != j ? y.nextElementSibling : oc(y.nextSibling);
            y = b;
            b = [];
            for (var D, G, H, g = r = 0; g < n.length; g++)
                if (D = n[g], !si(D)) {
                    var ka;
                    if (B(D, "playlist") || B(D, "context-playlist") || K("feed-item-content-playlist", D) || K("yt-pl-thumb-link",
                            D) || K("related-playlist", D)) {
                        var ua = D,
                            S = y,
                            Wa = j,
                            xa = j,
                            Ca = K(S.playlistId, ua);
                        Ca && (Ca = Ca.href, xa = Gf(Ca, "list"), Wa = Gf(Ca, "v"));
                        if (Wa) {
                            var Ka = j,
                                ed = K(S.playlistName, ua);
                            ed && (Ka = yc(ed));
                            var If = j,
                                ne = K(S.playlistImg, ua);
                            if (ne && (ne = he("img", l, ne))) If = Q(ne, "thumb"), If || (If = ne.src);
                            var ll = j,
                                ml = K(S.playlistVidCount, ua);
                            ml && (ll = yc(ml));
                            var nl = j,
                                oe = K(S.userImg, ua);
                            oe && (oe = he("img", l, oe)) && (nl = Q(oe, "thumb") || oe.src);
                            var ol = j,
                                wc = K(S.feedAction, ua);
                            if (wc) {
                                if (S == li || S == mi || S == ni || S == oi || S == pi) {
                                    var wc = K("yt-uix-hovercard",
                                            wc),
                                        wc = wc.cloneNode(k),
                                        Up = J("span", l, wc);
                                    w(Up, mc)
                                }
                                ol = yc(wc)
                            }
                            ka = {
                                videoId: Wa,
                                playlistId: xa,
                                playlistName: Ka,
                                playlistImg: If,
                                playlistCount: ll,
                                userImg: nl,
                                feedAction: ol,
                                itemType: "playlist"
                            }
                        } else ka = l
                    } else ka = ti(D, y);
                    if (G = ka) sc(D, i) && (H = r), b.push(G), r++
                } var Wp = b,
                Xp = H
        } catch (Br) {}
        return {
            contextList: Wp,
            contextSource: c,
            contextType: a,
            contextImage: d,
            backLink: e,
            clickedIndex: Xp,
            showNotification: f
        }
    }

    function si(a) {
        return B(a, "movie") || B(a, "music-onebox") || B(a, "video-alt-query") || B(a, "result-item-channel") || "DIV" != a.tagName && "LI" != a.tagName ? k : m
    }

    function ti(a, b) {
        var c, d = K(b.videoId, a);
        d && (d = d.href) && (c = Gf(d, "v"));
        if (!c) return l;
        var e;
        if (d = K(b.videoImg, a))(d = he("img", l, d)) && (e = Q(d, "thumb") || d.src);
        var f;
        (d = K(b.videoName, a)) && (f = yc(d));
        var g;
        (d = K(b.videoViews, a)) && (g = yc(d));
        var i;
        (d = K(b.videoTime, a)) && (i = yc(d));
        var n;
        if (d = K(b.userImg, a))(d = he("img", l, d)) && (n = Q(d, "thumb") || d.src);
        var r;
        b == pi ? r = Sa(window.location.href.split("/"), function (a, b, c) {
            return "user" == c[b - 1]
        }) : (d = b == oi || b == ri ? (d = K("metadata", a)) ? K(b.userName, d) : K(b.userName, a) : K(b.userName,
            a), d && (r = yc(d)));
        var y;
        if (d = K(b.feedAction, a)) {
            d = d.cloneNode(k);
            if (b == li || b == mi || b == ni || b == oi || b == pi) y = J("span", l, d), w(y, mc);
            y = J("div", l, d);
            w(y, mc);
            y = yc(d)
        }
        return {
            videoId: c,
            videoImg: e,
            videoName: f,
            videoViews: g,
            videoTime: i,
            userImg: n,
            userName: r,
            feedAction: y,
            itemType: "video"
        }
    }
    var ji = {
            videoViews: "viewcount",
            videoName: "result-item-translation-title",
            videoTime: "video-time",
            userName: "yt-user-name",
            userImg: "NULL",
            videoImg: "yt-thumb-clip-inner",
            videoId: "yt-uix-contextlink",
            playlistVidCount: "video-count",
            playlistName: "result-item-translation-title",
            playlistId: "yt-uix-tile-link",
            playlistImg: "playlist-large-thumb",
            feedAction: "feed-item-actions-line"
        },
        li = {
            videoViews: "view-count",
            videoName: "title",
            videoTime: "video-time",
            userName: "yt-user-name",
            userImg: "feed-item-author",
            videoImg: "feed-item-thumb",
            videoId: "yt-uix-contextlink",
            playlistVidCount: "count-label",
            playlistName: "title",
            playlistId: "yt-uix-contextlink",
            playlistImg: "yt-pl-thumb",
            feedAction: "feed-item-actions-line"
        },
        mi = {
            videoViews: "view-count",
            videoName: "title",
            videoTime: "video-time",
            userName: "yt-user-name",
            userImg: "yt-user-photo",
            videoImg: "feed-item-thumb",
            videoId: "yt-uix-contextlink",
            playlistVidCount: "video-count-block",
            playlistName: "title",
            playlistId: "yt-uix-contextlink",
            playlistImg: "video-thumb",
            feedAction: "NULL"
        },
        qi = {
            videoViews: "view-count",
            videoName: "feed-video-title",
            videoTime: "video-time",
            userName: "yt-user-name",
            userImg: "feed-item-author",
            videoImg: "feed-item-thumb",
            videoId: "yt-uix-contextlink",
            playlistVidCount: "count-label",
            playlistName: "title",
            playlistId: "yt-uix-contextlink",
            playlistImg: "yt-pl-thumb",
            feedAction: "feed-item-actions-line"
        },
        ri = {
            videoViews: "view-count",
            videoName: "feed-video-title",
            videoTime: "video-time",
            userName: "yt-user-name",
            userImg: "feed-item-author",
            videoImg: "feed-item-thumb",
            videoId: "yt-uix-contextlink",
            playlistId: "yt-uix-contextlink",
            feedAction: "feed-item-actions-line"
        },
        ki = {
            videoViews: "viewcount",
            videoName: "title",
            videoTime: "video-time",
            userName: "username",
            userImg: "context-user-thumb",
            videoImg: "context-video-thumb",
            videoId: "yt-uix-contextlink",
            playlistVidCount: "videocount",
            playlistName: "title",
            playlistId: "yt-uix-contextlink",
            playlistImg: "yt-thumb-clip-inner",
            feedAction: "action"
        },
        oi = {
            videoViews: "view-count",
            videoName: "title",
            videoTime: "video-time",
            userName: "yt-user-name",
            userImg: "feed-item-author",
            videoImg: "feed-item-thumb",
            videoId: "yt-uix-contextlink",
            playlistVidCount: "NULL",
            playlistName: "title",
            playlistId: "yt-pl-thumb-link",
            playlistImg: "feed-item-author",
            feedAction: "feed-item-actions-line"
        },
        ni = {
            videoViews: "video-view-count",
            videoName: "video-title",
            videoTime: "video-time",
            userName: "video-owner",
            userImg: "NULL",
            videoImg: "video-thumb",
            videoId: "yt-uix-contextlink",
            playlistVidCount: "video-count-box",
            playlistName: "yt-uix-tile-link",
            playlistId: "yt-uix-contextlink",
            playlistImg: "clip",
            feedAction: "NULL"
        },
        pi = {
            videoViews: "yt-c3-grid-item-viewcount",
            videoName: "content-item-title",
            videoTime: "video-time",
            userName: "NULL",
            userImg: "NULL",
            videoImg: "video-thumb",
            videoId: "yt-uix-contextlink",
            playlistVidCount: "video-count-box",
            playlistName: "yt-uix-tile-link",
            playlistId: "yt-uix-contextlink",
            playlistImg: "clip",
            feedAction: "NULL"
        };

    function ui() {};

    function vi() {}
    v(vi, ui);
    vi.prototype.Z = function () {
        var a = 0;
        Ic(this.Sa(k), function () {
            a++
        });
        return a
    };
    vi.prototype.clear = function () {
        var a;
        a = this.Sa(k);
        if (fa(a)) a = Za(a);
        else {
            a = Hc(a);
            var b = [];
            Ic(a, function (a) {
                b.push(a)
            });
            a = b
        }
        var c = this;
        w(a, function (a) {
            c.b.removeItem(a)
        })
    };

    function wi(a) {
        this.b = a
    }
    v(wi, vi);
    wi.prototype.get = function (a) {
        a = this.b.getItem(a);
        !ga(a) && a !== l && h("Storage mechanism: Invalid value was encountered");
        return a
    };
    wi.prototype.Z = function () {
        return this.b.length
    };
    wi.prototype.Sa = function (a) {
        var b = 0,
            c = this.b,
            d = new Gc;
        d.b = function () {
            b >= c.length && h(Fc);
            var d;
            d = c.key(b++);
            if (a) return d;
            d = c.getItem(d);
            ga(d) || h("Storage mechanism: Invalid value was encountered");
            return d
        };
        return d
    };
    wi.prototype.clear = function () {
        this.b.clear()
    };

    function xi() {
        var a = l;
        try {
            a = window.localStorage || l
        } catch (b) {}
        this.b = a
    }
    v(xi, wi);

    function yi(a) {
        this.fb = a;
        this.Ed = new yg
    }
    p = yi.prototype;
    p.fb = l;
    p.Ed = l;
    p.gb = function (a, b) {
        if (da(b)) {
            var c = zg(this.Ed, b);
            try {
                this.fb.b.setItem(a, c)
            } catch (d) {
                h("Storage mechanism: Quota exceeded")
            }
        } else this.fb.b.removeItem(a)
    };
    p.get = function (a) {
        a = this.fb.get(a);
        if (a !== l) try {
            return wg(a)
        } catch (b) {
            h("Storage: Invalid value was encountered")
        }
    };
    p.Xb = function (a) {
        this.fb.b.removeItem(a)
    };

    function zi(a) {
        yi.call(this, a)
    }
    v(zi, yi);

    function Ai(a) {
        this.data = a
    }

    function Bi(a) {
        return !da(a) || a instanceof Ai ? a : new Ai(a)
    }
    zi.prototype.gb = function (a, b) {
        zi.J.gb.call(this, a, Bi(b))
    };
    zi.prototype.b = function (a) {
        a = zi.J.get.call(this, a);
        if (!da(a) || a instanceof Object) return a;
        h("Storage: Invalid value was encountered")
    };
    zi.prototype.get = function (a) {
        (a = this.b(a)) ? (a = a.data, da(a) || h("Storage: Invalid value was encountered")) : a = j;
        return a
    };

    function Ci(a) {
        yi.call(this, a)
    }
    v(Ci, zi);

    function Di(a) {
        var b = a.creation,
            a = a.expiration;
        return !!a && a < qa() || !!b && b > qa()
    }
    Ci.prototype.gb = function (a, b, c) {
        if (b = Bi(b)) {
            if (c) {
                if (c < qa()) {
                    Ci.prototype.Xb.call(this, a);
                    return
                }
                b.expiration = c
            }
            b.creation = qa()
        }
        Ci.J.gb.call(this, a, b)
    };
    Ci.prototype.b = function (a, b) {
        var c = Ci.J.b.call(this, a);
        if (c)
            if (!b && Di(c)) Ci.prototype.Xb.call(this, a);
            else return c
    };

    function Ei(a) {
        yi.call(this, a)
    }
    v(Ei, Ci);

    function Fi(a, b) {
        var c = zg(new yg(j), b);
        (new Ei(new xi)).gb(a, c, qa() + 6E5)
    };
    var Gi = 0,
        Hi = 0,
        Ii = 0,
        Ji = 0,
        Ki = m;

    function Li() {
        var a = fc(document).y + cc(window).height + Hi,
            b = Ii;
        Ji = a;
        var c = Math.abs(b - a);
        if (!b || 400 <= c) {
            c = Mi(a);
            for (b = Mi(b); b < c;) Tg("thumb-group-" + c), c--;
            Ii = a
        }
    }

    function Ni() {
        for (var a = Mi(Ji); 0 <= a; a--) Tg("thumb-group-" + a)
    }

    function Oi(a) {
        Pi(function (a, c) {
            var d = Q(a, "group-key");
            d && (Sg(a, d), $d(a, "group-key"));
            a.src = c
        }, a)
    }

    function Qi(a, b) {
        Ki && Pi(function (a, d) {
            var e = Q(a, "group-key");
            Q(a, "thumb-manual") || e && !b || (e && Sg(a, e), e = "thumb-group-" + Mi(pf(a).y), Rg(a, d, e), P(a, "group-key", e))
        }, a)
    }

    function Pi(a, b) {
        var c = J("img", l, b);
        w(c, function (b) {
            var c = Q(b, "thumb");
            c && a.call(q, b, c)
        })
    }

    function Mi(a) {
        return Math.ceil(Math.max(0, a - Gi) / 400)
    };

    function Ri(a) {
        Ri[" "](a);
        return a
    }
    Ri[" "] = aa;
    !E || Ub(9);
    var Si = !E || Ub(9),
        Ti = E && !Sb("9");
    !Fb || Sb("528");
    Eb && Sb("1.9b") || E && Sb("8") || Db && Sb("9.5") || Fb && Sb("528");
    Eb && !Sb("8") || E && Sb("9");

    function Ui(a, b) {
        this.type = a;
        this.currentTarget = this.target = b
    }
    p = Ui.prototype;
    p.na = function () {};
    p.Ua = m;
    p.fc = k;
    p.stopPropagation = function () {
        this.Ua = k
    };
    p.preventDefault = function () {
        this.fc = m
    };

    function Vi(a, b) {
        a && this.init(a, b)
    }
    v(Vi, Ui);
    p = Vi.prototype;
    p.target = l;
    p.relatedTarget = l;
    p.clientX = 0;
    p.clientY = 0;
    p.keyCode = 0;
    p.charCode = 0;
    p.ctrlKey = m;
    p.altKey = m;
    p.shiftKey = m;
    p.Ia = l;
    p.init = function (a, b) {
        var c = this.type = a.type;
        Ui.call(this, c);
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (Eb) {
                var e;
                a: {
                    try {
                        Ri(d.nodeName);
                        e = k;
                        break a
                    } catch (f) {}
                    e = m
                }
                e || (d = l)
            }
        } else "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
        this.relatedTarget = d;
        this.clientX = a.clientX !== j ? a.clientX : a.pageX;
        this.clientY = a.clientY !== j ? a.clientY : a.pageY;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey =
            a.altKey;
        this.shiftKey = a.shiftKey;
        this.Ia = a;
        a.defaultPrevented && this.preventDefault();
        delete this.Ua
    };
    p.stopPropagation = function () {
        Vi.J.stopPropagation.call(this);
        this.Ia.stopPropagation ? this.Ia.stopPropagation() : this.Ia.cancelBubble = k
    };
    p.preventDefault = function () {
        Vi.J.preventDefault.call(this);
        var a = this.Ia;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = m, Ti) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    p.Hg = function () {
        return this.Ia
    };

    function Wi() {}
    var Xi = 0;
    p = Wi.prototype;
    p.key = 0;
    p.Pa = m;
    p.od = m;
    p.init = function (a, b, c, d, e, f) {
        ha(a) ? this.b = k : a && a.handleEvent && ha(a.handleEvent) ? this.b = m : h(Error("Invalid listener argument"));
        this.eb = a;
        this.c = b;
        this.src = c;
        this.type = d;
        this.capture = !!e;
        this.Tb = f;
        this.od = m;
        this.key = ++Xi;
        this.Pa = m
    };
    p.handleEvent = function (a) {
        return this.b ? this.eb.call(this.Tb || this.src, a) : this.eb.handleEvent.call(this.eb, a)
    };
    var Yi = {},
        Zi = {},
        $i = {},
        aj = {};

    function bj(a, b, c, d, e) {
        if (b) {
            if (ea(b)) {
                for (var f = 0; f < b.length; f++) bj(a, b[f], c, d, e);
                return l
            }
            var d = !!d,
                g = Zi;
            b in g || (g[b] = {
                Q: 0,
                ba: 0
            });
            g = g[b];
            d in g || (g[d] = {
                Q: 0,
                ba: 0
            }, g.Q++);
            var g = g[d],
                i = ja(a),
                n;
            g.ba++;
            if (g[i]) {
                n = g[i];
                for (f = 0; f < n.length; f++)
                    if (g = n[f], g.eb == c && g.Tb == e) {
                        if (g.Pa) break;
                        return n[f].key
                    }
            } else n = g[i] = [], g.Q++;
            var r = cj,
                y = Si ? function (a) {
                    return r.call(y.src, y.key, a)
                } : function (a) {
                    a = r.call(y.src, y.key, a);
                    if (!a) return a
                },
                f = y;
            f.src = a;
            g = new Wi;
            g.init(c, f, a, b, d, e);
            c = g.key;
            f.key = c;
            n.push(g);
            Yi[c] = g;
            $i[i] || ($i[i] = []);
            $i[i].push(g);
            a.addEventListener ? (a == q || !a.Ld) && a.addEventListener(b, f, d) : a.attachEvent(b in aj ? aj[b] : aj[b] = "on" + b, f);
            return c
        }
        h(Error("Invalid event type"))
    }

    function dj(a, b, c, d, e) {
        if (ea(b))
            for (var f = 0; f < b.length; f++) dj(a, b[f], c, d, e);
        else if (d = !!d, a = ej(a, b, d))
            for (f = 0; f < a.length; f++)
                if (a[f].eb == c && a[f].capture == d && a[f].Tb == e) {
                    fj(a[f].key);
                    break
                }
    }

    function fj(a) {
        if (!Yi[a]) return m;
        var b = Yi[a];
        if (b.Pa) return m;
        var c = b.src,
            d = b.type,
            e = b.c,
            f = b.capture;
        c.removeEventListener ? (c == q || !c.Ld) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in aj ? aj[d] : aj[d] = "on" + d, e);
        c = ja(c);
        $i[c] && (e = $i[c], Xa(e, b), 0 == e.length && delete $i[c]);
        b.Pa = k;
        if (b = Zi[d][f][c]) b.Nd = k, gj(d, f, c, b);
        delete Yi[a];
        return k
    }

    function gj(a, b, c, d) {
        if (!d.$b && d.Nd) {
            for (var e = 0, f = 0; e < d.length; e++) d[e].Pa ? d[e].c.src = l : (e != f && (d[f] = d[e]), f++);
            d.length = f;
            d.Nd = m;
            0 == f && (delete Zi[a][b][c], Zi[a][b].Q--, 0 == Zi[a][b].Q && (delete Zi[a][b], Zi[a].Q--), 0 == Zi[a].Q && delete Zi[a])
        }
    }

    function ej(a, b, c) {
        var d = Zi;
        return b in d && (d = d[b], c in d && (d = d[c], a = ja(a), d[a])) ? d[a] : l
    }

    function hj(a, b, c, d, e) {
        var f = 1,
            b = ja(b);
        if (a[b]) {
            a.ba--;
            a = a[b];
            a.$b ? a.$b++ : a.$b = 1;
            try {
                for (var g = a.length, i = 0; i < g; i++) {
                    var n = a[i];
                    n && !n.Pa && (f &= ij(n, e) !== m)
                }
            } finally {
                a.$b--, gj(c, d, b, a)
            }
        }
        return Boolean(f)
    }

    function ij(a, b) {
        a.od && fj(a.key);
        return a.handleEvent(b)
    }

    function cj(a, b) {
        if (!Yi[a]) return k;
        var c = Yi[a],
            d = c.type,
            e = Zi;
        if (!(d in e)) return k;
        var e = e[d],
            f, g;
        if (!Si) {
            f = b || s("window.event");
            var i = k in e,
                n = m in e;
            if (i) {
                if (0 > f.keyCode || f.returnValue != j) return k;
                a: {
                    var r = m;
                    if (0 == f.keyCode) try {
                        f.keyCode = -1;
                        break a
                    } catch (y) {
                        r = k
                    }
                    if (r || f.returnValue == j) f.returnValue = k
                }
            }
            r = new Vi;
            r.init(f, this);
            f = k;
            try {
                if (i) {
                    for (var D = [], G = r.currentTarget; G; G = G.parentNode) D.push(G);
                    g = e[k];
                    g.ba = g.Q;
                    for (var H = D.length - 1; !r.Ua && 0 <= H && g.ba; H--) r.currentTarget = D[H], f &= hj(g, D[H], d, k, r);
                    if (n) {
                        g = e[m];
                        g.ba = g.Q;
                        for (H = 0; !r.Ua && H < D.length && g.ba; H++) r.currentTarget = D[H], f &= hj(g, D[H], d, m, r)
                    }
                } else f = ij(c, r)
            } finally {
                D && (D.length = 0)
            }
            return f
        }
        d = new Vi(b, this);
        return f = ij(c, d)
    };

    function jj() {}
    v(jj, eg);
    p = jj.prototype;
    p.Ld = k;
    p.ec = l;
    p.Kc = function (a) {
        this.ec = a
    };
    p.addEventListener = function (a, b, c, d) {
        bj(this, a, b, c, d)
    };
    p.removeEventListener = function (a, b, c, d) {
        dj(this, a, b, c, d)
    };
    p.dispatchEvent = function (a) {
        var b = a.type || a,
            c = Zi;
        if (b in c) {
            if (ga(a)) a = new Ui(a, this);
            else if (a instanceof Ui) a.target = a.target || this;
            else {
                var d = a,
                    a = new Ui(b, this);
                sb(a, d)
            }
            var d = 1,
                e, c = c[b],
                b = k in c,
                f;
            if (b) {
                e = [];
                for (f = this; f; f = f.ec) e.push(f);
                f = c[k];
                f.ba = f.Q;
                for (var g = e.length - 1; !a.Ua && 0 <= g && f.ba; g--) a.currentTarget = e[g], d &= hj(f, e[g], a.type, k, a) && a.fc != m
            }
            if (m in c)
                if (f = c[m], f.ba = f.Q, b)
                    for (g = 0; !a.Ua && g < e.length && f.ba; g++) a.currentTarget = e[g], d &= hj(f, e[g], a.type, m, a) && a.fc != m;
                else
                    for (e = this; !a.Ua && e &&
                        f.ba; e = e.ec) a.currentTarget = e, d &= hj(f, e, a.type, m, a) && a.fc != m;
            a = Boolean(d)
        } else a = k;
        return a
    };
    p.T = function () {
        jj.J.T.call(this);
        var a, b = 0,
            c = a == l;
        a = !!a;
        if (this == l) mb($i, function (d) {
            for (var e = d.length - 1; 0 <= e; e--) {
                var f = d[e];
                if (c || a == f.capture) fj(f.key), b++
            }
        });
        else {
            var d = ja(this);
            if ($i[d])
                for (var d = $i[d], e = d.length - 1; 0 <= e; e--) {
                    var f = d[e];
                    if (c || a == f.capture) fj(f.key), b++
                }
        }
        this.ec = l
    };

    function kj(a) {
        this.c = a;
        this.b = []
    }
    v(kj, eg);
    var lj = [];

    function mj(a, b, c, d) {
        ea(c) || (lj[0] = c, c = lj);
        for (var e = 0; e < c.length; e++) {
            var f = bj(b, c[e], d || a, m, a.c || a);
            a.b.push(f)
        }
    }

    function nj(a, b, c, d, e, f) {
        if (ea(c))
            for (var g = 0; g < c.length; g++) nj(a, b, c[g], d, e, f);
        else {
            a: {
                d = d || a;f = f || a.c || a;e = !!e;
                if (b = ej(b, c, e))
                    for (c = 0; c < b.length; c++)
                        if (!b[c].Pa && b[c].eb == d && b[c].capture == e && b[c].Tb == f) {
                            b = b[c];
                            break a
                        } b = l
            }
            b && (b = b.key, fj(b), Xa(a.b, b))
        }
    }
    kj.prototype.T = function () {
        kj.J.T.call(this);
        w(this.b, fj);
        this.b.length = 0
    };
    kj.prototype.handleEvent = function () {
        h(Error("EventHandler.handleEvent not implemented"))
    };
    E || Eb && Sb("1.9.3");
    var oj = q.window;

    function pj(a, b) {
        ha(a) ? b && (a = t(a, b)) : a && "function" == typeof a.handleEvent ? a = t(a.handleEvent, a) : h(Error("Invalid listener argument"));
        oj.setTimeout(a, 10)
    };
    new gg;

    function qj(a, b) {
        this.b = a;
        var c = b || l;
        if (!c) {
            var d = [],
                e = {};
            this.b.replace(rj, function (a, b) {
                b in e || (e[b] = k, d.push(b))
            });
            c = d
        }
        c = sa("__%s__", "(" + c.join("|") + ")");
        this.c = RegExp(c, "g")
    }
    var rj = /__([a-z]+(?:_[a-z]+)*)__/g;

    function sj(a, b) {
        var c = tj(F(a));
        return new qj(c, b)
    }

    function tj(a) {
        a = a.innerHTML;
        a = a.replace(/^\s*(<\!--\s*)?/, "");
        return a = a.replace(/(\s*--\>)?\s*$/, "")
    }
    qj.prototype.da = function (a, b, c) {
        var d = t(function (d, f) {
            b && (f = b(f));
            return c ? a[f] || "" : za(a[f] || "")
        }, this);
        return this.b.replace(this.c, d)
    };

    function uj() {
        this.b = {}
    }
    v(uj, lh);
    ba(uj);
    p = uj.prototype;
    p.O = "scroller";
    p.register = function () {
        Z(this, "mouseenter", this.Zg);
        Z(this, "mouseleave", this.$g)
    };
    p.Zg = function (a) {
        var b = R(a, "mousewheel", t(this.Vg, this, a));
        this.setData(a, "scroller-mousewheel-listener", b);
        b = R(a, "scroll", t(this.Wg, this, a));
        this.setData(a, "scroller-scroll-listener", b)
    };
    p.$g = function (a) {
        se(this.getData(a, "scroller-mousewheel-listener") || "");
        this.setData(a, "scroller-mousewheel-listener", "");
        se(this.getData(a, "scroller-scroll-listener") || "");
        this.setData(a, "scroller-scroll-listener", "")
    };
    p.Vg = function (a, b) {
        b.preventDefault();
        b.wheelDeltaY && (a.scrollTop = a.scrollTop + b.wheelDeltaY)
    };
    p.Wg = function (a) {
        this.ia(a, "scroll-action")
    };

    function vj(a) {
        if (!a.length) return 0;
        var b = a[0],
            c = b.offsetHeight;
        1 < a.length && (c = a[1].offsetTop - b.offsetTop);
        return c
    }
    p.zd = function (a, b) {
        if (a && b) {
            var c = I(Y(this, "scroll-unit"), a),
                c = Pa(c, b);
            0 <= c && this.Ca(a, c)
        }
    };
    p.Ca = function (a, b) {
        if (a && !(isNaN(b) || 0 > b)) {
            var c = I(Y(this, "scroll-unit"), a);
            if (!(0 >= c.length)) {
                b >= c.length && (b = c.length - 1);
                var d = vj(c),
                    e = a.offsetHeight,
                    f = Math.max(Math.floor(a.scrollTop / d), 0);
                b > f - 1 && (d = Math.floor(e / d), e = c.length, b + d > e && (b = e - d + 1));
                0 > b && (b = 0);
                wj(this, a, c[b].offsetTop)
            }
        }
    };

    function wj(a, b, c) {
        b && !isNaN(c) && (0 > c && (c = 0), b.scrollTop = c, a.setData(b, "scroller-offset", c + ""))
    }
    p.Bd = function (a) {
        var b = this.getData(a, "scroller-offset"),
            b = parseInt(b, 10) || 0;
        wj(this, a, b)
    };

    function xj() {
        this.b = {}
    }
    v(xj, lh);
    ba(xj);
    p = xj.prototype;
    p.O = "slider";
    p.register = function () {
        Z(this, "click", this.Jg, "num");
        Z(this, "click", this.Kg, "prev");
        Z(this, "click", this.Ig, "next");
        Z(this, "mouseover", this.Pg, "ajax-trigger")
    };
    p.Jg = function (a) {
        if (a) {
            var b = mh(this, a),
                a = parseInt(this.getData(a, "slider-num"), 10);
            if (isNaN(a) || 0 > a) a = 0;
            this.ic(b, a)
        }
    };
    p.Ig = function (a, b, c) {
        if (a) {
            a = mh(this, a);
            if (B(a, Y(this, "fluid"))) {
                if (a) {
                    var d = this.getBodyElement(a),
                        b = yj(this, d),
                        e = zj(this, b),
                        f = 0 < e.length,
                        b = parseInt(this.getData(a, "slider-offset"), 10);
                    if (isNaN(b) || 0 < b) b = 0;
                    var g = Aj(this, a);
                    f ? (d = Bj(this, a, e), g = Math.floor(g / d), b = Math.abs(Math.floor(b / d)) - 1, this.Ca(a, (0 <= b ? b : 0) + g)) : (e = Cj(this, a) ? d.scrollHeight : d.scrollWidth, this.Rc && 8 > document.documentMode ? Math.abs(b - g) < e && (b -= g) : d.offsetWidth < e && (b -= g), Dj(this, a, b))
                }
            } else if (a) {
                b = parseInt(this.getData(a, "slider-current"),
                    10);
                if (isNaN(b) || 0 > b) b = 0;
                d = parseInt(this.getData(a, "slider-slides"), 10);
                if (isNaN(d) || 0 > d) d = 0;
                b = Math.min(b + 1, d - 1);
                this.ic(a, b)
            }
            c.preventDefault()
        }
    };
    p.Kg = function (a, b, c) {
        if (a) {
            a = mh(this, a);
            if (B(a, Y(this, "fluid"))) {
                if (a) {
                    var b = this.getBodyElement(a),
                        b = yj(this, b),
                        d = zj(this, b),
                        e = 0 < d.length,
                        b = parseInt(this.getData(a, "slider-offset"), 10);
                    if (isNaN(b) || 0 < b) b = 0;
                    var f = Aj(this, a);
                    e ? (d = Bj(this, a, d), f = Math.floor(f / d), b = Math.abs(Math.floor(b / d)) - 1, this.Ca(a, (0 <= b ? b : 0) - f)) : (b += f, 0 < b && (b = 0), Dj(this, a, b))
                }
            } else if (a) {
                b = parseInt(this.getData(a, "slider-current"), 10);
                if (isNaN(b) || 0 > b) b = 0;
                b = Math.max(b - 1, 0);
                this.ic(a, b)
            }
            c.preventDefault()
        }
    };
    p.Pg = function (a) {
        if (a = mh(this, a)) {
            var b = Y(this, "ajax-trigger"),
                c = I(b, a);
            w(c, function (a) {
                z(a, b)
            });
            Ej(this, a)
        }
    };

    function Ej(a, b, c) {
        var d = a.getData(b, "slider-ajax-url");
        d && !a.getData(b, "slider-loaded") && (a.setData(b, "slider-loaded", "true"), X(d, {
            B: a,
            j: function (a, d) {
                var g = jc(d.slides_html),
                    i = K(Y(this, "slides"), b);
                i && g && kc(i, g);
                c && c()
            }
        }))
    }

    function Cj(a, b) {
        return B(b, Y(a, "vertical"))
    }

    function Aj(a, b) {
        var c = a.getBodyElement(b);
        return Cj(a, b) ? c.offsetHeight : c.offsetWidth
    }
    p.ic = function (a, b) {
        if (a)
            if (this.getData(a, "slider-ajax-url") && !this.getData(a, "slider-loaded")) Ej(this, a, t(this.ic, this, a, b));
            else {
                var c = J(l, Y(this, "num"), a),
                    d = Y(this, "num-current"),
                    e;
                w(c, function (a) {
                    e = this.getData(a, "slider-num") == b;
                    C(a, d, e);
                    C(a, "yt-uix-pager-selected", e);
                    B(a, "yt-uix-button") && C(a, "yt-uix-button-toggled", e)
                }, this);
                var c = K(Y(this, "slides"), a),
                    f = Cj(this, a);
                if (c) {
                    var g = yj(this, c);
                    if (g) {
                        var i = -1 * b * (f ? g.offsetHeight : g.offsetWidth) + "px";
                        f ? c.style.top = i : af(g) ? c.style.right = i : c.style.left =
                            i
                    }
                }
                if (c = K("yt-uix-pager-current-page", a)) c.innerHTML = b + 1;
                this.setData(a, "slider-current", b + "");
                a && (c = parseInt(this.getData(a, "slider-current"), 10), f = parseInt(this.getData(a, "slider-slides"), 10), g = I(Y(this, "next"), a), i = I(Y(this, "prev"), a), w(g, function (a) {
                    a.disabled = m
                }), w(i, function (a) {
                    a.disabled = m
                }), 0 == c && w(i, function (a) {
                    a.disabled = k
                }), c == f - 1 && w(g, function (a) {
                    a.disabled = k
                }))
            }
    };
    p.zd = function (a, b) {
        if (a) {
            var c = this.getBodyElement(a),
                c = yj(this, c),
                c = zj(this, c),
                c = Pa(c, b);
            0 <= c && this.Ca(a, c)
        }
    };
    p.Ca = function (a, b) {
        if (a) {
            var c = this.getBodyElement(a),
                c = yj(this, c),
                d = zj(this, c);
            if (!(0 >= d.length)) {
                b >= d.length && (b = d.length - 1);
                var e = parseInt(this.getData(a, "slider-offset"), 10);
                if (isNaN(e) || 0 < e) e = 0;
                var c = Aj(this, a),
                    f = Bj(this, a, d),
                    e = Math.abs(Math.floor(e / f)) - 1;
                if (b > (0 <= e ? e : 0)) {
                    var e = Math.floor(c / f),
                        g = d.length;
                    b + e > g && (b = g - e + 1)
                }
                0 > b && (b = 0);
                d = d[b];
                e = af(a) ? d.offsetLeft - c + f + 10 : -1 * (d.offsetLeft - 10);
                Dj(this, a, e)
            }
        }
    };

    function Dj(a, b, c) {
        if (b) {
            isNaN(c) && (c = 0);
            var d = a.getBodyElement(b),
                d = yj(a, d),
                e = J(l, Y(a, "title"), d),
                f = af(b) ? "right" : "left";
            d.style[f] = c + "px";
            w(e, function (a) {
                a.style[f] = -1 * c + "px"
            });
            a.setData(b, "slider-offset", c + "")
        }
    }
    p.Bd = function (a) {
        var b = this.getData(a, "slider-offset"),
            b = parseInt(b, 10) || 0;
        Dj(this, a, b)
    };
    p.getBodyElement = function (a) {
        return K(Y(this, "body"), a)
    };

    function yj(a, b) {
        return K(Y(a, "slide"), b)
    }

    function zj(a, b) {
        return J(l, Y(a, "slide-unit"), b)
    }

    function Bj(a, b, c) {
        if (0 == c.length) return 0;
        var a = Cj(a, b),
            b = c[0],
            d = a ? b.offsetHeight : b.offsetWidth;
        1 < c.length && (c = c[1], d = a ? c.offsetTop - b.offsetHeight : af(b) ? b.offsetLeft - c.offsetLeft : c.offsetLeft - b.offsetLeft);
        return d
    };

    function Fj(a) {
        this.D = a;
        var b, c;
        Gj() ? (b = F("watch7-playlist-tray"), c = F("watch7-playlist-bar-title"), a = F("watch7-playlist-tray-item-template")) : (b = F("playlist-bar-tray"), c = F("playlist-bar-title"), a = F("playlist-bar-template"));
        this.b = b;
        this.i = c;
        this.ka = he("ol", l, this.b);
        this.c = F("playlist-bar-extras-menu");
        b = ob(Hj);
        this.e = sj(a, b);
        a = Q(a, "video-thumb-url") || "";
        this.f = new qj(a, b);
        T(this.b, "click", t(function () {
            N(t(this.xc, this), 0)
        }, this), "playlist-bar-tray-button")
    }
    var Hj = {
        classes: "classes",
        list_position: "index",
        video_encrypted_id: "id",
        video_title: "title",
        video_url: "url",
        video_display_name: "display_name",
        video_thumb_url: "thumb_url"
    };
    Fj.prototype.da = function (a, b, c, d, e, f) {
        var g = d.mb;
        g && (this.i.innerHTML = g, this.c && (this.c.innerHTML = d.lb));
        var i = [];
        w(a, function (a, b) {
            var e = b + f == c,
                g = d.getVideoData(a);
            g.id = a;
            g.url = Zh(d, b);
            i.push(Ij(this, g, b + 1 + f, e))
        }, this);
        this.ka.innerHTML = i.join("");
        e ? this.scroll(3) : this.scroll(5);
        a = I("item-count", this.D);
        w(a, function (a) {
            a.innerHTML = b
        });
        a = I("playing-index", this.D);
        w(a, function (a) {
            a.innerHTML = c + 1
        })
    };

    function Ij(a, b, c, d) {
        function e(a) {
            return Hj[a]
        }
        b.index = c;
        b.thumb_url = a.f.da(b, e);
        c = [];
        b.unviewable ? (c.push("playlist-bar-item-unviewable"), b.thumb_url = "//s.ytimg.com/yt/img/meh_mini-vfl0Ugnu3.png") : b.title || c.push("loading");
        d && c.push("playlist-bar-item-playing");
        b.classes = c.join(" ");
        return a.e.da(b, e)
    }
    Fj.prototype.xc = function () {
        var a;
        if (Gj()) {
            a = uj.getInstance();
            var b = this.b;
            if (b)
                if (a = I(Y(a, "scroll-unit"), b), 0 >= a.length) a = [];
                else {
                    var c = b.scrollTop,
                        d = vj(a),
                        e = b.offsetHeight,
                        b = Math.max(Math.floor(c / d), 0),
                        c = Math.min(Math.ceil((c + e) / d), a.length);
                    a = bb(a, b, c)
                }
            else a = []
        } else if (c = xj.getInstance(), d = this.b, a = c.getBodyElement(d), a = yj(c, a), a = zj(c, a), a.length) {
            b = parseInt(c.getData(d, "slider-offset"), 10);
            if (isNaN(b) || 0 < b) b = 0;
            e = Aj(c, d);
            d = Bj(c, d, a);
            c = Math.floor(-b / d);
            c = Math.max(0, c);
            d = Math.ceil((-b + e) / d);
            d = Math.min(d,
                a.length);
            a = bb(Za(a), c, d)
        } else a = [];
        w(a, function (a) {
            Oi(a)
        })
    };
    Fj.prototype.scroll = function (a, b) {
        var c;
        c = Gj() ? uj.getInstance() : xj.getInstance();
        switch (a) {
        case 3:
            var d = he("li", "playlist-bar-item-playing", this.ka);
            d ? c.zd(this.b, d) : c.Ca(this.b, 0);
            break;
        case 4:
            b && c.Ca(this.b, b);
            break;
        case 5:
            c.Bd(this.b)
        }
        this.xc()
    };
    Fj.prototype.dc = function (a) {
        var b = 0,
            c = t(function () {
                var d = J("li", "playlist-bar-item", this.ka),
                    e = !(b % 2);
                w(a, function (a) {
                    C(d[a], "playlist-bar-item-highlight", e)
                });
                b++;
                6 > b && N(c, 150)
            }, this);
        c()
    };

    function Gj() {
        return F("watch7-playlist-container") != l
    };

    function Jj(a, b) {
        this.D = a;
        this.L = F("page");
        this.ja = new Fj(this.D);
        this.e = b;
        this.vc = this.n = m;
        this.i = F("playlist-bar-bar");
        R(this.i, "click", t(this.Se, this));
        this.oa = F("playlist-bar-play-button");
        R(this.oa, "click", t(this.Ye, this));
        this.Va = F("playlist-bar-prev-button") || F("watch7-playlist-bar-prev-button");
        this.H = F("playlist-bar-next-button") || F("watch7-playlist-bar-next-button");
        R(this.Va, "click", t(this.Ze, this));
        R(this.H, "click", t(this.We, this));
        this.c = F("playlist-bar-autoplay-button");
        R(this.c, "click",
            t(this.Re, this));
        this.M = F("playlist-bar-shuffle-button") || F("watch7-playlist-bar-shuffle-button");
        R(this.M, "click", t(this.$e, this));
        this.U = F("playlist-bar-toggle-button") || F("watch7-playlist-bar-toggle-button");
        R(this.U, "click", t(this.af, this));
        this.f = F("playlist-bar-options-menu");
        T(this.f, "click", t(this.Xe, this), "yt-uix-button-menu-item");
        this.ka = F("playlist-bar-tray-content");
        T(this.ka, "click", t(this.Te, this), "delete");
        T(this.ka, "click", t(this.Ue, this), "load-lists");
        T(this.ka, "click", t(this.Ve,
            this), "load-more");
        this.ca = sj(F("playlist-bar-next-up-template") || F("watch7-playlist-bar-next-up-template"), ["video_encrypted_id"]);
        Kj(this, b, function () {
            U("watch7-playlist-tray");
            V("watch7-playlist-loading")
        });
        this.g.Z() ? Lj(this) : A(this.D, ["min", "max"], "hid");
        if (Q(this.D, "masked")) {
            var c = document.createElement("iframe");
            c.id = "playlist-bar-mask";
            c.frameBorder = "0";
            c.src = 'javascript:""';
            this.D.insertBefore(c, this.D.firstChild)
        }
    }

    function Kj(a, b, c, d) {
        if (a.g && (a.g.ea.clear("LIST_UPDATED"), a.e.isEqual(b) || d)) b.Fc(a.e), a.e = b;
        a.g = b;
        a.g.ea.ra("LIST_UPDATED", a.bb, a);
        a.g.load(c);
        a.bb(k)
    }
    p = Jj.prototype;
    p.Aa = function () {
        return this.g.Aa()
    };
    p.Qa = function () {
        return this.g.Qa()
    };
    p.ya = function () {
        return this.g.ya()
    };

    function Mj(a) {
        return a.ya() && B(a.D, "autoplay-on")
    }

    function Nj(a, b) {
        b ? A(a.D, "autoplay-off", "autoplay-on") : A(a.D, "autoplay-on", "autoplay-off");
        He.getInstance();
        Oe(Nh.ug, !b);
        Pe();
        Pd("LIST_AUTO_PLAY_ON", b)
    }
    p.Y = function () {
        return B(this.D, "shuffle-on")
    };
    p.vb = function () {
        return B(this.D, "loading")
    };

    function Lj(a) {
        Ne(He.getInstance(), Nh.Zd) ? Oj(a) : Pj(a)
    }

    function Oj(a) {
        A(a.D, ["hid", "max"], "min");
        Qj(a, k)
    }

    function Pj(a) {
        A(a.D, ["hid", "min"], "max");
        Qj(a, k);
        N(t(a.ja.xc, a.ja), 300)
    }

    function Rj(a) {
        var b;
        B(a.D, "min") ? (Pj(a), b = m) : (Oj(a), b = k);
        Zg("bf", "toggleBar=1&collapsed=" + b, j);
        He.getInstance();
        Oe(Nh.Zd, b);
        Pe();
        Sj(a, k)
    }
    p.Se = function (a) {
        Bc(a.target, function (a) {
            a = a.tagName && a.tagName.toLowerCase();
            return "a" == a || "button" == a
        }, k) || Rj(this)
    };
    p.Xe = function (a) {
        a.stopPropagation();
        switch (Q(a.currentTarget, "action")) {
        case "clear":
            this.clear();
            break;
        case "load-lists":
            Tj(this);
            break;
        case "show-active":
            this.e && Kj(this, this.e);
            break;
        case "save":
            this.vb() || (Pj(this), Uj(this, {
                o: {
                    action_get_save_playlist_form: 1
                },
                j: function (a, c) {
                    A(this.D, "lists", "save");
                    var d = c.html;
                    this.Gd = F("playlist-bar-save");
                    this.Gd.innerHTML = d;
                    d = F("playlist-bar-title-edit");
                    d.focus();
                    d.select();
                    R(F("playlist-bar-save-cancel"), "click", t(this.Vf, this));
                    R(F("playlist-bar-save-form"),
                        "submit", t(this.Wf, this))
                }
            }))
        }
    };
    p.af = function () {
        ib(this.L, "watch-playlist-collapsed");
        Rj(this)
    };
    p.Re = function () {
        var a = !Mj(this);
        Nj(this, a);
        Qj(this)
    };
    p.$e = function () {
        var a = !this.Y(),
            b = 0;
        Pd("SHUFFLE_ENABLED", a);
        a && Pd("SHUFFLE_VALUE", Math.max(1, 1E6 * Math.random()));
        a ? (A(this.D, "shuffle-off", "shuffle-on"), b = Ph()) : A(this.D, "shuffle-on", "shuffle-off");
        this.g.ma = b;
        this.bb();
        this.ja.scroll(3)
    };
    p.Ye = function () {
        Vj(this, k, "bf_play")
    };
    p.Ze = function () {
        Wj(this, "bf_prev")
    };
    p.We = function () {
        Vj(this, k, "bf_next")
    };
    p.Te = function (a) {
        a.preventDefault();
        var b = J("li", "playlist-bar-item", this.ka),
            a = Ac(a.currentTarget, "li", "playlist-bar-item"),
            b = Pa(b, a);
        this.g.Bc() && (a = this.g.Aa(), Xj(this), Zg("bf", "copyFrom=1&action=delete&list_type=" + a, j));
        var c = this.g.Aa(),
            d = Uh(this.g)[b];
        this.g.removeItem(b);
        Yj(this, O("PLAYLIST_VIDEO_DELETED"), m, m, m, function () {
            this.g.Ic([d]);
            this.bb();
            var a = this.g.Z() - 1;
            this.ja.scroll(4, a);
            this.ja.dc([a]);
            Zg("bf", "undo_delete=1&list_type=" + c, j)
        });
        Zg("bf", "delete=1&list_type=" + c, j)
    };
    p.uf = function (a) {
        var b = a.sourceIndex,
            a = a.targetIndex;
        if (!(b == a || 0 > b || 0 > a)) {
            if (this.g.Bc()) {
                var c = this.g.Aa();
                Xj(this);
                Zg("bf", "copyFrom=1&action=drag&list_type=" + c, j)
            }
            c = this.g;
            if (!c.Y() && c.$a()) {
                var d = Uh(c);
                d[b] && d[a] && (c.vd(b, a), d = c.b, d == b ? c.b = a : d > b && d <= a ? c.b -= 1 : d < b && d >= a && (c.b += 1));
                Th(c)
            }
            b = Df({
                moved_item_delta: Math.abs(a - b),
                list_type: this.g.Aa()
            });
            Zg("bf", b, j)
        }
    };

    function Wj(a, b) {
        var c;
        c = a.g;
        var d = c.fa() - 1;
        0 > d && (d = c.Z() - 1);
        if (c = Zh(c, d, m, b)) Zj(a, c, b), Gh(c)
    }

    function Vj(a, b, c) {
        b || Zg("bf", "autoplay=1&playcount=" + a.g.Za, j);
        var d = Yh(a.g, b, c);
        d && (Zj(a, d, c, !b), Gh(d))
    }

    function $j(a, b) {
        if (!(1 > b || 5 < b)) {
            Zg("bf", "delayedautoplay=" + b, j);
            a.c && Bh(Ah.getInstance(), a.c);
            var c = O("AUTOPLAY_WARNING" + b);
            c && Yj(a, c, m, k, F("watch7-playlist-container") != l)
        }
    }
    p.clear = function () {
        var a = this.g.Ba();
        this.g.clear();
        Yj(this, O("LIST_CLEARED"), m, m, m, function () {
            this.g.Ic(a);
            this.bb();
            Zg("bf", "undo_clear=1&list_type=" + b, j)
        });
        var b = this.g.Aa();
        Zg("bf", "clear=1&list_type=" + b, j)
    };
    p.Jc = function (a) {
        return this.g.Jc(a)
    };
    p.bb = function (a) {
        var b = this.g.vb(),
            c = !b && !!this.g.pa,
            d = !this.g.Z(),
            e = this.g.ya();
        this.f && (e ? A(this.f, "passive", "active") : A(this.f, "active", "passive"));
        var f = [],
            g = [];
        (e ? g : f).push("active");
        (!e ? g : f).push("passive");
        (b ? g : f).push("loading");
        (c ? g : f).push("editable");
        (d ? g : f).push("empty");
        A(this.D, f, g);
        if (!b) {
            b = this.g;
            b.c = {};
            try {
                var i = Uh(this.g),
                    n = this.g.Gb,
                    r = this.g.fa();
                this.ja.da(i, n, r, this.g, !!a, this.g.Fb);
                this.vc = m
            } finally {
                b.c = l
            }
        }
        a = this.g.Wa;
        i = this.g.Ja;
        a ? Yj(this, a, k, m) : i && Yj(this, i, m, k);
        a = this.g;
        a.Ja =
            l;
        a.Wa = l;
        Qj(this);
        this.g.$a() && this.g.Z() && !this.n && (this.n = k, Ug((L("DRAGDROP_BINARY_URL") || "") + "", t(function () {
            R(this.ka, "mouseover", t(function () {
                this.vc || (this.vc = k, this.g.$a() && !this.g.Y() && s("yt.www.lists.dragdrop").createDraggables())
            }, this));
            var a = s("yt.www.lists.dragdrop");
            a.init(this.ka, "playlist-bar-item");
            a.subscribe("DROPPED_AT_INDEX", this.uf, this)
        }, this)))
    };

    function Qj(a, b) {
        var c = O("AUTOPLAY_OFF_TOOLTIP");
        Mj(a) && (c = O("AUTOPLAY_ON_TOOLTIP"));
        var d = O("SHUFFLE_OFF_TOOLTIP");
        a.Y() && (d = O("SHUFFLE_ON_TOOLTIP"));
        var e = O("NEXT_VIDEO_NOTHUMB_TOOLTIP");
        if (a.g.ya()) {
            var f = Uh(a.g),
                g = a.g.fa();
            if ((f = (g = f[f.length == g + 1 ? 0 : g + 1]) && a.g.getVideoData(g)) && f.title) e = a.ca.da({
                video_encrypted_id: g
            }), e = a.i ? O("NEXT_VIDEO_TOOLTIP", {
                "{next_video_title}": f.title
            }) + " " + e : '<div class="playlist-bar-next-tip">' + e + " " + O("NEXT_VIDEO_TOOLTIP", {
                "{next_video_title}": f.title
            }) + "</div>"
        }
        f =
            "";
        f = a.i ? B(a.D, "min") ? O("SHOW_PLAYLIST_TOOLTIP") : O("HIDE_PLAYLIST_TOOLTIP") : B(a.L, "watch-playlist-collapsed") ? O("SHOW_PLAYLIST_TOOLTIP") : O("HIDE_PLAYLIST_TOOLTIP");
        g = Ah.getInstance();
        Dh(g, a.H, e);
        a.c && Dh(g, a.c, c);
        Dh(g, a.M, d);
        Dh(g, a.U, f, b)
    }
    p.Ea = l;
    p.Yb = l;

    function Yj(a, b, c, d, e, f) {
        b && (a.b || (a.b = F("playlist-bar-notifications"), T(a.b, "click", t(a.Pf, a), "playlist-bar-undo")), a.Yb = f || l, a.Yb && (b += ' <a class="playlist-bar-undo">' + O("UNDO_LINK") + "</a>"), K("yt-alert-content", a.b).innerHTML = b, b = K("yt-alert-icon", a.b), lf(b, !e), C(a.b, "yt-alert-error", !!c), C(a.b, "yt-alert-success", !c), U(a.b), a.Ea && (Ud(a.Ea), a.Ea = l), d && (c = t(function () {
            Sj(this)
        }, a), a.Ea = N(c, 1E4)))
    }
    p.showError = function (a, b) {
        Yj(this, a, k, b)
    };

    function Sj(a, b) {
        var c = !!a.Ea;
        if (!b || !c) V(a.b), a.Yb = l, a.Ea && (Ud(a.Ea), a.Ea = l)
    }
    p.Pf = function (a) {
        a.stopPropagation();
        a.preventDefault();
        a = this.Yb;
        Sj(this);
        a.call(this)
    };
    p.dc = function (a) {
        a = Xh(this.g, a);
        a.length && (this.ja.dc(a), this.ja.scroll(4, a[0]))
    };
    p.Vf = function (a) {
        a.preventDefault();
        z(this.D, "save")
    };
    p.Wf = function (a) {
        a.preventDefault();
        var b = Uh(this.g).join(",");
        b && (Sj(this), a = Qc(a.target), Uj(this, {
            o: {
                action_save_playlist: 1
            },
            method: "POST",
            Ra: a + ("&video_ids=" + b),
            j: function (a, b) {
                this.Gd.innerHTML = "";
                z(this.D, "save");
                var e = hi("PL", b.list_id);
                Kj(this, e, l, k);
                e = O("PLAYLIST_BAR_PLAYLIST_SAVED");
                Yj(this, e, m, k)
            }
        }))
    };
    p.Ue = function (a) {
        a.preventDefault();
        Tj(this)
    };
    p.Ve = function () {
        var a = this.g;
        $h(a, l, {
            load_more: "1"
        });
        Th(a)
    };

    function Tj(a) {
        a.vb() || (Pj(a), Uj(a, {
            o: {
                action_get_playlists: 1
            },
            j: function (a, c) {
                A(this.D, "save", "lists");
                this.eg = F("playlist-bar-lists-back");
                this.cg = R(this.eg, "click", t(this.fg, this));
                var d = c.html;
                this.Bb = F("playlist-bar-lists");
                this.Bb.innerHTML = d;
                Oi(this.Bb);
                this.dg = T(this.Bb, "click", t(this.gg, this), "playlist-bar-playlist-item")
            }
        }))
    }
    p.gg = function (a) {
        a.preventDefault();
        var b = a.currentTarget;
        b && (ak(this), a = Q(b, "list-type") || "", b = Q(b, "list-id") || "", a = hi(a, b), Kj(this, a))
    };
    p.fg = function (a) {
        a.preventDefault();
        ak(this)
    };

    function ak(a) {
        z(a.D, "lists");
        a.Bb && (a.Bb.innerHTML = "");
        se(a.dg);
        se(a.cg)
    }

    function Uj(a, b) {
        x(a.D, "loading");
        sb(b, {
            format: "JSON",
            onError: function (a, b) {
                var e = O("ERROR_OCCURRED");
                b && b.errors && (e = b.errors[0]);
                this.showError(e, k)
            },
            S: function () {
                z(this.D, "loading")
            },
            B: a
        });
        X("/playlist_bar_ajax", b)
    }
    p.fa = function () {
        return this.g.fa()
    };

    function Xj(a) {
        var b = a.g.Ba();
        Rh([]);
        var c = Qh();
        $a(c, b);
        Rh(c);
        b = new fi;
        c = a.g.fa();
        b.b = c;
        b.ma = a.g.ma;
        Kj(a, b)
    }

    function Zj(a, b, c, d) {
        var e = L("EVENT_ID");
        e && (e = {
            ei: e
        }, c && (e.feature = c), a.g.Y() && (e.shuffle = a.g.ma), d && (e.playnext = a.g.Za), Vg(b, e));
        if (L("WATCH7_ENABLED") && L("GUIDE_ENABLED") && (a = Gf(b, "v")))(b = ii()) && Fi(a, b)
    };
    var bk = l,
        ck = m;

    function dk() {
        if (!bk) {
            var a = F("playlist-bar") || F("watch7-playlist-bar");
            if (a) {
                var b;
                if (B(a, "active")) {
                    b = Q(a, "list-type") || "";
                    if ("QL" == b) b = new fi(k);
                    else {
                        var c = Q(a, "list-id") || "",
                            d = (Q(a, "video-ids") || "").split(","),
                            e = 0,
                            f = Q(a, "list-length");
                        f && (e = parseInt(f, 10));
                        b = hi(b, c, d, e)
                    }
                    c = parseInt(Q(a, "index-offset"), 10) || 0;
                    b.Fb = c;
                    b.b = parseInt(L("PLAYLIST_BAR_PLAYING_INDEX"), 10) || 0;
                    b.Za = parseInt(L("LIST_AUTO_PLAY_VALUE"), 10) || 0;
                    c = 0;
                    L("SHUFFLE_ENABLED") && (c = Ph());
                    b.ma = c
                } else b = new fi(k);
                c = Q(a, "video-url");
                b.nb =
                    c || "";
                c = B(a, "editable");
                b.pa = c;
                if (c = F("playlist-bar-title") || F("watch7-playlist-bar-title")) b.mb = c.innerHTML;
                if (c = F("playlist-bar-extras-menu")) b.lb = c.innerHTML;
                bk = new Jj(a, b)
            }
        }
        return bk
    }

    function ek(a, b) {
        var c = dk();
        if (Mj(c)) {
            var d = b || "mr_meh";
            0 < a ? ($j(c, a), N(function () {
                ek(a - 1, d)
            }, 1E3)) : Vj(c, m, d)
        }
    }

    function fk(a, b, c, d, e, f) {
        if (ck) {
            var g = dk();
            if (g) {
                var i = f || [],
                    a = hi(a, b, d || l, e || 0),
                    b = k;
                g.ya() && (b = g.g.isEqual(a));
                b ? (Kj(g, a, function () {
                    g.dc(i);
                    Yj(g, c, m, k)
                }), Lj(g)) : Yj(g, c, m, k)
            }
        }
    }

    function gk(a) {
        var b = L("LIST_END_TIME");
        b || (b = a.getDuration());
        for (var c = 5; 0 < c; c--) a.addCueRange("NEAR_END" + c, b - c, b - c + 1);
        a.addEventListener("onCueRangeEnter", "yt.www.lists.handleNearPlaybackEnd")
    }

    function hk() {
        var a = dk();
        if (!ck || !a || !a.ya()) return m;
        a = dk().Aa();
        return !Ua(Oh, a)
    };
    var ik = -1,
        jk = -1;

    function kk(a) {
        var a = !!a,
            b = F("page"),
            c = F("watch-sidebar") || F("watch7-sidebar"),
            d = F("baseDiv"),
            e = L("WIDE_PLAYER_STYLES"),
            f = 0;
        "webkitTransition" in c.style ? (f = document.defaultView.getComputedStyle(c, l), f = 1E3 * parseFloat(f["-webkit-transition-duration"])) : "MozTransition" in c.style ? (f = document.defaultView.getComputedStyle(c, l), f = 1E3 * parseFloat(f.getPropertyValue("-moz-transition-duration"))) : "OTransition" in c.style && (f = document.defaultView.getComputedStyle(c, l), f = 1E3 * parseFloat(f.getPropertyValue("-o-transition-duration")));
        if (a) x(b,
            "watch-wide"), N(function () {
            lk();
            if (d)
                for (var a = 0; a < e.length; ++a) x(d, e[a])
        }, f);
        else {
            f /= 2;
            lk("small");
            if (d)
                for (var g = 0; g < e.length; ++g) z(d, e[g]);
            N(function () {
                z(b, "watch-wide")
            }, f);
            Oi(c)
        }
        lf("masthead-utility-menulink-short", a);
        lf("masthead-utility-menulink-long", !a)
    }

    function lk(a) {
        var b = mk();
        if (!B(F("page"), "watch-wide") || "small" == a) z(b, "medium", "large");
        else {
            var c = cc(window),
                c = !!(1400 <= c.width && 1040 <= c.height);
            L("ENABLE_AUTO_LARGE") && (c || "large" == a) ? A(b, "medium", "large") : A(b, "large", "medium")
        }
    }

    function nk() {
        return F("movie_player") && ok() && Wd && 8 >= document.documentMode
    }

    function pk() {
        if (nk()) {
            Ud(jk);
            var a = mk(),
                b = "small";
            w(["small", "medium", "large"], function (c) {
                B(a, c) && (b = c)
            });
            qk({
                small: 112,
                medium: 384,
                large: 597
            } [b])
        }
    }

    function rk() {
        nk() && (jk = N(function () {
            qk(0)
        }, 50))
    }

    function qk(a) {
        var b = F("movie_player"),
            c = ok();
        "rtl" == document.body.getAttribute("dir") ? (c.style.left = a + "px", b.style.right = a + "px") : (c.style.right = a, b.style.left = a)
    }

    function sk() {
        return L("PLAYER_REFERENCE")
    }

    function tk(a) {
        Ac(a.target, "BUTTON") || a.currentTarget.click()
    }

    function ok() {
        return F("watch-player") || F("watch7-player")
    }

    function mk() {
        return F("watch-video") || F("watch7-video")
    };

    function uk(a, b, c, d, e) {
        this.k = a;
        this.yc = m;
        a = wf() + "/share_ajax";
        c = {
            action_get_email: 1,
            video_id: c,
            list: d
        };
        e && (c.new_share = 1);
        X(a, {
            format: "JSON",
            o: c,
            j: function (a, c) {
                this.k.innerHTML = c.email_html;
                this.Na();
                this.focus();
                var d = c.sharing_binary_url;
                if (d) {
                    var e = c.contacts;
                    Ug(d, t(function () {
                        var a = s("yt.sharing.ContactTools");
                        a && a.createContactTools(this.uc, l, e, b)
                    }, this))
                }
            },
            B: this
        })
    }
    p = uk.prototype;
    p.Na = function () {
        this.z = this.k.getElementsByTagName("form")[0];
        R(this.z, "submit", t(this.cf, this));
        K("share-email-send", this.z);
        this.Ja = K("share-email-success", this.k);
        this.e = K("share-email-remail", this.Ja);
        R(this.e, "click", t(function () {
            vk(this);
            this.focus()
        }, this));
        this.uc = K("share-email-recipients", this.k);
        this.b = K("share-email-note", this.k);
        this.c = K("share-email-preview-note", this.k);
        R(this.b, "keyup", t(this.bf, this))
    };
    p.ua = function () {
        this.z && (this.yc && vk(this), this.focus())
    };
    p.focus = function () {
        this.uc.focus()
    };

    function vk(a) {
        a.yc = m;
        a.uc.value = "";
        a.b.value = "";
        a.c.innerHTML = "";
        V(a.Ja);
        U(a.z)
    }
    p.bf = function () {
        var a = this.b.value,
            a = a.substring(0, 300),
            a = za(a),
            a = a.replace(/\n/g, "<br>");
        this.c.innerHTML = a
    };
    p.cf = function (a) {
        a.preventDefault();
        var b = J("button", l, this.z)[0];
        b.disabled = k;
        var c = K("share-email-captcha", this.k),
            d = K("share-email-error", this.k),
            e = K("yt-alert-content", d),
            a = wf() + xf(this.z.action);
        X(a, {
            format: "JSON",
            method: "POST",
            Ra: Qc(this.z),
            j: function () {
                this.yc = k;
                U(this.Ja);
                V(this.z);
                V(d);
                V(c)
            },
            onError: function (a, b) {
                b.captcha_html && (c.innerHTML = b.captcha_html, U(c));
                b.errors && (e.innerHTML = b.errors.join("<br>"), U(d))
            },
            S: function () {
                b.disabled = m
            },
            B: this
        })
    };

    function wk() {
        this.b = {}
    }
    v(wk, lh);
    ba(wk);
    p = wk.prototype;
    p.O = "form-input";
    p.register = function () {
        E && !Sb(9) && (Z(this, "click", this.hc, "checkbox"), Z(this, "keypressed", this.hc, "checkbox"), Z(this, "click", this.$d, "radio"), Z(this, "keypressed", this.$d, "radio"));
        Z(this, "change", this.hc, "checkbox");
        Z(this, "blur", this.vg, "select-element");
        Z(this, "change", this.Ga, "select-element");
        Z(this, "keyup", this.Ga, "select-element");
        Z(this, "focus", this.wg, "select-element");
        Z(this, "keyup", this.Nc, "text");
        Z(this, "keyup", this.Nc, "textarea");
        Z(this, "keyup", this.Nc, "bidi");
        Z(this, "click", this.xg, "reset")
    };
    p.hc = function (a) {
        var b = Cc(a, Y(this, "checkbox-container"));
        a.checked && B(b, "partial") && (a.checked = m, a.e = m, z(b, "partial"));
        C(b, "checked", a.checked)
    };
    p.hh = function (a) {
        var b = Cc(a, Y(this, "radio-container"));
        b && C(b, "checked", a.checked)
    };
    p.$d = function () {
        xk()
    };
    p.Nc = function (a) {
        var b = a.value,
            c = "";
        Xc(b) ? c = "rtl" : Vc.test(b) && (c = "ltr");
        a.dir = c
    };
    p.wg = function (a) {
        var b = Cc(a, Y(this, "select"));
        x(b, "focused");
        this.Ga(a)
    };
    p.vg = function (a) {
        var b = Cc(a, Y(this, "select"));
        z(b, "focused");
        this.Ga(a)
    };
    p.Ga = function (a) {
        var b = Cc(a, Y(this, "select")),
            b = K(Y(this, "select-value"), b),
            c = a.options[Math.max(a.selectedIndex, 0)];
        c && ("" != b.innerHTML && c.innerHTML != b.innerHTML && this.ia(a, "onchange-callback"), b.innerHTML = c.innerHTML)
    };
    p.xg = function () {
        var a = wk.getInstance(),
            b = I(Y(a, "checkbox"));
        w(b, a.hc);
        xk();
        yk()
    };

    function xk() {
        var a = wk.getInstance(),
            b = I(Y(a, "radio"));
        w(b, a.hh)
    }

    function yk() {
        var a = wk.getInstance(),
            b = I(Y(a, "select-element"));
        w(b, function (b) {
            a.Ga(b)
        })
    };

    function zk(a, b, c, d) {
        this.k = a;
        this.kb = d || m;
        a = wf() + "/share_ajax";
        b = {
            action_get_embed: 1,
            video_id: b,
            list: c
        };
        this.kb && (b.new_share = 1);
        X(a, {
            format: "JSON",
            o: b,
            j: function (a, b) {
                this.k.innerHTML = b.embed_html;
                this.gf = b.legacy_url;
                this.ff = b.legacy_code;
                this.ef = b.iframe_url;
                this.df = b.iframe_code;
                this.Na();
                var c = He.getInstance();
                this.La && (this.La.checked = !Ne(0, Nh.Id));
                this.Hb.checked = Ne(0, Nh.Hd);
                this.Ka && (this.Ka.checked = Ne(0, Nh.Jd));
                a: if (c = c.get("ems"), this.kb) {
                    "custom" == c && U(F("share-embed-customize"));
                    for (var d =
                            0; d < this.Ma.length; d++) {
                        var n = this.Ma[d];
                        if (n.value == c) {
                            n.selected = k;
                            wk.getInstance().Ga(this.va);
                            break a
                        }
                    }
                    this.Ma[0].selected = k;
                    wk.getInstance().Ga(this.va)
                } else(c in this.la ? this.la[c] : nb(this.la)).select();
                Ak(this);
                this.ua()
            },
            B: this
        })
    }
    p = zk.prototype;
    p.ab = 0;
    p.ub = 0;
    p.Na = function () {
        this.b = K("share-embed-code", this.k);
        R(this.b, "click", t(this.pe, this));
        if (this.kb) {
            this.va = F("embed-layout-options");
            this.Ma = J("option", l, this.va);
            var a = parseInt(Q(this.Ma[0], "width"), 10),
                b = parseInt(Q(this.Ma[0], "height"), 10);
            this.e = a / b;
            R(this.va, "change", t(function () {
                var a = this.va.options[Math.max(this.va.selectedIndex, 0)],
                    a = !a ? l : a.value || a.text;
                He.getInstance();
                Me("ems", a);
                Pe();
                Ak(this);
                var b = F("share-embed-customize");
                "custom" == a ? U(b) : (V(b), this.focus())
            }, this));
            a = F("share-embed-customize");
            this.f = K("share-embed-size-custom-width", a);
            this.c = K("share-embed-size-custom-height", a);
            R(this.f, "keyup", t(this.ve, this));
            R(this.c, "keyup", t(this.ue, this))
        } else {
            a = K("share-embed-size-list", this.k);
            b = I("share-embed-size-radio", a);
            this.la = {};
            w(b, function (a) {
                B(a, "share-embed-size-radio-custom") || (a = new Bk(a), this.la[a.name] = a)
            }, this);
            var b = nb(this.la).width / nb(this.la).height,
                c = K("share-embed-size-radio-custom", a),
                b = new Ck(c, b);
            this.n = this.la[b.name] = b;
            T(a, "click", t(this.re, this), "share-embed-size");
            a = K("share-embed-customize", a);
            R(a, "keyup", t(this.we, this))
        }
        var d = {},
            a = I("share-embed-option", this.k);
        w(a, function (a) {
            d[a.name] = a
        });
        (this.La = d["show-related"]) && R(this.La, "click", t(this.qe, this));
        this.Hb = d["delayed-cookies"];
        R(this.Hb, "click", t(this.oe, this));
        this.i = d["use-https"];
        R(this.i, "click", t(this.te, this));
        (this.Ka = d["use-flash-code"] || l) && R(this.Ka, "click", t(this.se, this))
    };
    p.ve = function () {
        this.ab = parseInt(this.f.value, 10);
        this.ub = Math.round(this.ab / this.e) || 0;
        this.c.value = this.ub + "";
        Ak(this)
    };
    p.ue = function () {
        this.ub = parseInt(this.c.value, 10);
        this.ab = Math.round(this.ub * this.e) || 0;
        this.ab.value = this.ab + "";
        Ak(this)
    };
    p.ua = function () {
        this.focus()
    };
    p.focus = function () {
        this.b && (this.b.focus(), this.b.select())
    };

    function Ak(a) {
        var b = a.df,
            c = a.ef;
        a.Ka && a.Ka.checked && (b = a.ff, c = a.gf);
        a.Hb.checked && (c = c.replace("youtube.com", "youtube-nocookie.com"));
        a.i.checked && (c = c.split("//"), c[0] = "https:", c = c.join("//"));
        var d = {};
        a.La && !a.La.checked && (d.rel = 0);
        c = Nf(c, d);
        if (a.kb) {
            var e = a.va.options[Math.max(a.va.selectedIndex, 0)];
            e ? "custom" == e.value ? d = {
                width: a.ab,
                height: a.ub
            } : (d = parseInt(Q(e, "width"), 10), e = parseInt(Q(e, "height"), 10), d = {
                width: d,
                height: e
            }) : d = {
                width: 0,
                height: 0
            }
        } else d = a.la, d = (e = pb(d, function (a) {
                return a.yb.checked
            },
            j)) && d[e], d = !d ? {
            width: 0,
            height: 0
        } : {
            width: d.width,
            height: d.height
        };
        if (!d.width || 200 > d.width) a.kb ? (d = parseInt(Q(a.Ma[0], "width"), 10), e = parseInt(Q(a.Ma[0], "height"), 10), d = {
            width: d,
            height: e
        }) : d = nb(a.la);
        b = b.replace(/__url__/g, za(c));
        b = b.replace(/__width__/g, d.width + "");
        b = b.replace(/__height__/g, d.height + "");
        b = za(b);
        b != a.b.innerHTML && (a.b.innerHTML = b)
    }
    p.qe = function () {
        var a = this.La.checked;
        He.getInstance();
        Oe(Nh.Id, !a);
        Pe();
        Ak(this)
    };
    p.oe = function () {
        var a = this.Hb.checked;
        He.getInstance();
        Oe(Nh.Hd, a);
        Pe();
        Ak(this)
    };
    p.te = function () {
        Ak(this)
    };
    p.se = function () {
        var a = this.Ka.checked;
        He.getInstance();
        Oe(Nh.Jd, a);
        Pe();
        Ak(this)
    };
    p.pe = function () {
        this.focus()
    };
    p.re = function (a) {
        a = K("share-embed-size-radio", a.currentTarget);
        a = this.la[a.value];
        a.select();
        He.getInstance();
        Me("ems", a.name);
        Pe();
        Ak(this);
        a != this.n && this.focus()
    };
    p.we = function () {
        Ak(this)
    };

    function Bk(a) {
        this.name = a.value;
        this.yb = a;
        this.width = parseInt(Q(this.yb, "width"), 10);
        this.height = parseInt(Q(this.yb, "height"), 10)
    }
    Bk.prototype.select = function () {
        this.yb.checked = k;
        var a = Ac(this.yb, "li"),
            b = Ac(a, "ul"),
            b = J("li", "selected", b);
        w(b, function (a) {
            z(a, "selected")
        });
        x(a, "selected")
    };

    function Ck(a, b) {
        Bk.call(this, a);
        this.e = b;
        var c = Ac(a, "li");
        this.c = K("share-embed-size-custom-width", c);
        this.b = K("share-embed-size-custom-height", c);
        R(this.c, "keyup", t(this.i, this));
        R(this.b, "keyup", t(this.f, this))
    }
    v(Ck, Bk);
    Ck.prototype.i = function () {
        this.width = parseInt(this.c.value, 10);
        this.height = Math.round(this.width / this.e) || 0;
        this.b.value = this.height + ""
    };
    Ck.prototype.f = function () {
        this.height = parseInt(this.b.value, 10);
        this.width = Math.round(this.height * this.e) || 0;
        this.c.value = this.width + ""
    };

    function Dk(a, b, c, d, e, f, g) {
        this.k = a;
        this.f = b || l;
        this.P = c || l;
        this.U = m;
        this.H = g || m;
        a = wf() + "/share_ajax";
        b = {
            action_get_share_box: 1,
            video_id: this.f,
            list: this.P
        };
        this.H && (b.new_share = 1, this.P && (b.render_playlist_options = 1));
        X(a, {
            format: "JSON",
            o: b,
            j: function (a, b) {
                this.k.innerHTML = b.share_html;
                this.ud = b.url_short;
                this.td = b.url_long;
                this.oc = b.lang;
                this.Xa = l;
                "session_index" in b && (this.Xa = b.session_index);
                this.Na();
                d && d();
                this.ua()
            },
            B: this
        })
    }
    var Ek = {
        FACEBOOK: "share_facebook",
        BLOGGER: "share_blogger",
        TWITTER: "share_twitter"
    };
    p = Dk.prototype;
    p.Na = function () {
        var a = K("share-panel-show-url-options");
        R(a, "click", t(this.Hf, this));
        a = K("share-panel-show-more");
        R(a, "click", t(this.Cf, this));
        a = K("share-panel-services", this.k);
        R(a, "click", t(this.Df, this));
        a = K("share-panel-embed", this.k);
        R(a, "click", t(this.Af, this));
        a = K("share-panel-email", this.k);
        R(a, "click", t(this.zf, this));
        (a = K("share-panel-hangout", this.k)) && R(a, "click", t(this.Bf, this));
        this.X = K("share-panel-url", this.k);
        R(this.X, "click", t(this.If, this));
        R(this.X, "focus", t(function () {
                x(this.X, "focused")
            },
            this));
        R(this.X, "blur", t(function () {
            z(this.X, "focused")
        }, this));
        this.Jb = K("share-panel-long-url", this.k);
        this.i = K("share-panel-start-at", this.k);
        this.aa = K("share-panel-start-at-time", this.k);
        R(this.aa, "keyup", t(this.Jf, this));
        R(this.aa, "click", t(this.Gf, this));
        R(this.aa, "focus", t(function () {
            x(this.aa, "focused")
        }, this));
        R(this.aa, "blur", t(function () {
            z(this.aa, "focused")
        }, this));
        this.Va = K("share-panel-hd", this.k);
        this.n = K("share-panel-url-options", this.k);
        R(this.n, "click", t(this.Rb, this));
        this.L = K("share-panel-services",
            this.k);
        this.M = K("share-panel-buttons", this.k);
        a = K("share-panel-show-more", this.k);
        R(a, "click", t(this.Ff, this));
        T(this.k, "click", t(this.Ef, this), "share-service-button");
        this.H && (T(this.k, "click", t(this.Kf, this), "share-service-expand-arrow"), this.e = K("share-panel-services-container", this.k), R(F("share-with-playlist"), "click", t(this.Nf, this)), R(F("share-with-playlist-current"), "click", t(this.Lf, this)), R(F("share-with-playlist-first"), "click", t(this.Mf, this)))
    };
    p.Kf = function (a) {
        var b = Cc(a.target, "secondary"),
            a = K("overlay", b),
            c = B(b, "expanded"),
            d = 0;
        "webkitTransition" in a.style ? (d = document.defaultView.getComputedStyle(a, l), d = 1E3 * parseFloat(d["-webkit-transition-duration"])) : "MozTransition" in a.style ? (d = document.defaultView.getComputedStyle(a, l), d = 1E3 * parseFloat(d.getPropertyValue("-moz-transition-duration"))) : "OTransition" in a.style && (d = document.defaultView.getComputedStyle(a, l), d = 1E3 * parseFloat(d.getPropertyValue("-o-transition-duration")));
        var e = "rtl" == document.body.getAttribute("dir") ?
            "right" : "left",
            c = c ? "0px" : ef(b).width + "px";
        a.style[e] = c;
        N(function () {
            ib(b, "expanded")
        }, d)
    };
    p.ua = function () {
        this.X && !B(this.X, "focused") && (this.X.focus(), this.X.select())
    };
    p.Rb = function () {
        if (!B(this.X, "focused")) {
            var a = this.ud;
            this.Jb && this.Jb.checked && (a = this.td);
            var b = {};
            this.Va && this.Va.checked && (b.hd = 1);
            var c;
            if (c = !this.i.disabled)
                if (c = this.i.checked) {
                    var d = this.aa.value;
                    c = ["h", "m", "s"];
                    var e = Za(c);
                    e.reverse();
                    var f = {},
                        d = d.toLowerCase().match(/\d+\s*[hms]?/g) || [],
                        d = Qa(d, function (a) {
                            var b = (a.match(/[hms]/) || [""])[0];
                            return b ? (f[b] = parseInt(a.match(/\d+/)[0], 10), m) : k
                        });
                    for (d.reverse(); d.length && e.length;) {
                        var g = e.shift();
                        g in f || (f[g] = parseInt(d.shift(), 10))
                    }
                    if (d.length ||
                        59 < f.s || 59 < f.m || 9 < f.h) c = l;
                    else {
                        var i = "";
                        w(c, function (a) {
                            f[a] && (i += f[a] + a)
                        });
                        c = i || l
                    }
                } c && (b.t = c);
            a = Lf(a, b);
            this.X.value != a && (this.X.value = a)
        }
    };
    p.Jf = function () {
        this.U = k;
        this.i.checked = k;
        this.Rb()
    };
    p.Gf = function () {
        this.i.checked = k;
        this.aa.value.match(/[1-9]/) || (this.aa.value = "")
    };
    p.If = function () {
        this.X.select()
    };
    p.zf = function () {
        var a = xh.getInstance();
        zh(a, this.M);
        zh(a, this.n);
        zh(a, this.L);
        this.c && V(this.c);
        this.e && V(this.e);
        this.b || (this.b = K("share-panel-email-container", this.k));
        nf(this.b);
        !Q(this.b, "disabled") && mf(this.b) && (this.ca ? this.ca.ua() : this.ca = new uk(this.b, this.Xa, this.f, this.P, this.H));
        Kh("share_mail")
    };
    p.Bf = function () {
        var a = sk();
        a && a.pauseVideo && a.pauseVideo();
        var a = Lf("https://talkgadget.google.com/hangouts", {
                hl: this.oc,
                authuser: this.Xa,
                gid: "youtube",
                gd: this.f,
                hs: 5
            }),
            b = window.screen.height,
            c = Math.min(0.9 * window.screen.width, 1E3),
            b = Math.min(0.9 * b, 800);
        ah("HANGOUT", this.f + "");
        Hh(a, {
            width: c,
            height: b
        })
    };
    p.Af = function () {
        var a = xh.getInstance();
        zh(a, this.M);
        zh(a, this.n);
        zh(a, this.L);
        this.b && V(this.b);
        this.e && V(this.e);
        this.c || (this.c = K("share-panel-embed-container", this.k));
        nf(this.c);
        !Q(this.c, "disabled") && mf(this.c) && (this.oa ? this.oa.ua() : this.oa = new zk(this.c, this.f, this.P, this.H));
        Kh("share_embed")
    };
    p.Ef = function (a) {
        a = Q(a.currentTarget, "service-name") || "";
        (a = Ek[a]) && Kh(a)
    };
    p.Hf = function () {
        zh(xh.getInstance(), this.L);
        this.b && V(this.b);
        this.c && V(this.c)
    };
    p.Cf = function () {
        zh(xh.getInstance(), this.n);
        this.b && V(this.b);
        this.c && V(this.c)
    };
    p.Ff = function () {
        Fk(this)
    };
    p.Df = function () {
        Fk(this);
        this.e && U(this.e)
    };

    function Fk(a) {
        a.b && V(a.b);
        a.c && V(a.c)
    }
    p.Nf = function (a) {
        Gk(this);
        var b = m;
        a.target.checked && (b = Ac(F("share-with-playlist-first"), "li"), b = B(b, "yt-uix-button-menu-item-selected"));
        Hk(this, a.target.checked, b)
    };

    function Ik(a) {
        F("share-with-playlist").checked = k;
        Gk(a)
    }

    function Gk(a) {
        var b = F("share-with-playlist").checked;
        K("share-panel-start-at", a.e).disabled = b;
        K("share-panel-start-at-time", a.e).disabled = b
    }
    p.Lf = function () {
        Ik(this);
        Hk(this, k)
    };
    p.Mf = function () {
        Ik(this);
        Hk(this, k, k)
    };

    function Hk(a, b, c) {
        var d = {
            action_get_share_urls: 1,
            video_id: a.f
        };
        b && (d.list = a.P);
        c && (d.use_first_video = k);
        X("share_ajax", {
            format: "JSON",
            o: d,
            j: function (a, b) {
                this.ud = b.url_short;
                this.td = b.url_long;
                this.Rb();
                F("share-services-container").innerHTML = b.share_services_html
            },
            B: a
        })
    };

    function Jk() {}
    p = Jk.prototype;
    p.de = m;
    p.Eb = l;
    p.gc = l;
    p.init = function () {
        if (!this.de) {
            this.de = k;
            this.Eb = K("player-root", j);
            this.gc = K("player-actions-container", this.Eb);
            var a = K("player-actions-close", this.gc);
            R(a, "click", t(this.zg, this))
        }
    };
    p.zg = function () {
        C(this.Eb, "actions-mode", m)
    };
    p.yg = function () {
        600 > this.Eb.clientWidth && x(this.gc, "small-view")
    };
    p.Oc = l;
    p.kf = function (a, b) {
        this.init();
        C(this.Eb, "actions-mode", k);
        if (this.Oc) this.Oc.ua();
        else {
            var c = K("player-actions-share", this.gc);
            this.Oc = new Dk(c, a, b, t(this.yg, this))
        }
    };
    var Kk, Lk, Mk, Nk, Ok, Pk, Qk;
    Qk = Pk = Ok = Nk = Mk = Lk = Kk = m;
    var Rk = zb();
    Rk && (-1 != Rk.indexOf("Firefox") ? Kk = k : -1 != Rk.indexOf("Camino") ? Lk = k : -1 != Rk.indexOf("iPhone") || -1 != Rk.indexOf("iPod") ? Mk = k : -1 != Rk.indexOf("iPad") ? Nk = k : -1 != Rk.indexOf("Android") ? Ok = k : -1 != Rk.indexOf("Chrome") ? Pk = k : -1 != Rk.indexOf("Safari") && (Qk = k));
    var Sk = Kk,
        Tk = Lk,
        Uk = Mk,
        Vk = Nk,
        Wk = Ok,
        Xk = Pk,
        Yk = Qk;
    var Zk = {};

    function $k(a, b, c) {
        if (a = F(a)) {
            var b = b instanceof Rf ? b : new Rf(b),
                d = !b.args.jsapicallback,
                e = "player" + ja(a),
                f = Zk[e];
            f && f.ed();
            f = new al(a, e, b, c);
            Zk[e] = f;
            N(function () {
                d && (q.onYouTubePlayerReady = function () {
                    bl(e)
                });
                f.write()
            }, 0);
            return f.b
        }
    }

    function cl(a, b, c) {
        return $k(a, b, {
            force: c
        })
    }

    function dl(a) {
        if (a = F(a)) {
            var a = "player" + ja(a),
                b = Zk[a];
            b && b.na();
            delete Zk[a]
        }
    }

    function bl(a) {
        a = Zk[a];
        if (!a.Ac) {
            a.Ac = k;
            var b = nc(a.f),
                c = b.getApiInterface();
            w(c, function (a) {
                "addEventListener" == a ? this.b.nativeAddEventListener = t(b[a], b) : "destroy" == a ? this.b.b = t(b[a], b) : this.b[a] = t(b[a], b)
            }, a);
            for (var d in a.c) a.b.nativeAddEventListener(d, a.c[d]);
            el(a) && a.H && a.Mb("SHARE_CLICKED", t(a.H.kf, a.H));
            a.Mb("onTabOrderChange", t(a.hf, a));
            a.Mb("onNavigate", t(a.jf, a));
            a.Pb && a.Pb(a.n)
        }
    }

    function al(a, b, c, d) {
        this.f = this.e = a;
        this.n = b;
        fl(this, c, d);
        a = this.F;
        b = !!a.disable.html5;
        c = !!a.disable.flash;
        d = zb();
        (!d ? 0 : 0 <= d.toLowerCase().indexOf("android 2.2")) ? d = k: (d = document.createElement("video"), d = !(!d || !d.canPlayType || !d.canPlayType('video/mp4; codecs="avc1.42001E, mp4a.40.2"') && !d.canPlayType('video/webm; codecs="vp8.0, vorbis"')));
        var d = d && (s("yt.player.Application") || a.assets.js),
            e = !!a.html5;
        d || (a.args.html5_unavailable = "1");
        var f = this.Lb ? this.De : this.Ee;
        e && d || c ? (this.pc = this.sc, c || (this.Nb =
            f)) : (this.pc = f, d && !b && (this.Nb = this.sc));
        this.Nb && (a.fallback = t(this.Ce, this));
        this.b = {
            addEventListener: t(this.Mb, this),
            destroy: t(this.ed, this)
        };
        a = this.ea = new gg;
        this.i || (this.i = []);
        this.i.push(a);
        this.c = {};
        this.H = el(this) ? new Jk : l
    }
    v(al, eg);
    p = al.prototype;
    p.Ac = m;
    p.F = l;
    p.Lb = l;
    p.Pb = l;
    p.pc = l;
    p.Nb = l;

    function fl(a, b, c) {
        a.F = b.ta();
        a.U = a.F.attrs.id;
        a.M = a.F.args.el;
        a.Lb = c || l;
        a.F.args.eurl || (b = document.location.toString(), -1 != b.indexOf("/embed/") && (b = "unknown", document.referrer && (b = document.referrer.substring(0, 128))), a.F.args.eurl = b);
        a.F.args.enablejsapi = "1";
        a.F.args.playerapiid = a.n;
        var d = a.e,
            e = a.M;
        a.F.fallbackMessage = function () {
            var a = O("PLAYER_FALLBACK_OVERRIDE");
            if (!a) {
                var a = O("PLAYER_FALLBACK", j, 'The Adobe Flash Player or an HTML5 supported browser is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="/html5">Learn more about upgrading to an HTML5 browser</a>'),
                    b = navigator.userAgent.match(/Version\/(\d).*Safari/);
                b && 5 <= parseInt(b[1], 10) && (a = O("QUICKTIME_FALLBACK", j, 'The Adobe Flash Player or QuickTime is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="http://www.apple.com/quicktime/download/">Get the latest version of QuickTime</a>'))
            }
            d.innerHTML = '<div class="fallback-message">' + a + "</div>";
            "embedded" == e && w(d.getElementsByTagName("a"), function (a) {
                a.setAttribute("target", "_blank")
            })
        };
        a.Pb || (a.Pb = a.F.args.jsapicallback ? gl(a.F.args.jsapicallback) : s("onYouTubePlayerReady"));
        a.F.args.jsapicallback = "ytPlayerOnYouTubePlayerReady"
    }
    p.Ce = function (a) {
        a = a || this.F;
        a instanceof Rf || (a = new Rf(a));
        delete a.fallback;
        a.html5 ? a.args.autoplay = 1 : Og("html5_ajax", this.ig);
        this.Ac = m;
        fl(this, a);
        lc(this.f);
        this.Nb()
    };
    p.write = function () {
        if (!this.L) {
            x(this.e, "player-root");
            this.F.attrs.width && Se(this.e, "width", this.F.attrs.width);
            this.F.attrs.height && Se(this.e, "height", this.F.attrs.height);
            Se(this.e, "overflow", "hidden");
            if (!this.Lb && (lc(this.f), el(this))) {
                var a = gc("div", "player-container"),
                    b = gc("div", "player-actions-container", gc("div", "player-actions-share"), gc("div", "player-actions-close", gc("div", "player-actions-close-button")));
                kc(this.e, a, b);
                this.f = a;
                s("yt.tracking.shareVideo") || (u("yt.tracking.shareVideo",
                    ah), u("yt.tracking.shareList", bh));
                s("yt.window.popup") || u("yt.window.popup", Ih)
            }
            this.pc()
        }
    };
    p.sc = function () {
        this.F.attrs.id = this.U + "-html5";
        var a = s("yt.player.Application");
        a ? new a(this.f, this.F) : Ug(this.F.assets.js, t(this.sc, this))
    };
    p.Ee = function () {
        this.F.attrs.id = this.U + "-flash";
        bg(this.f, this.F)
    };
    p.De = function () {
        dg(this.F, this.Lb.force, t(this.Sd, this))
    };
    p.Sd = function () {
        if (!this.oa) {
            var a = F(this.F.attrs.id);
            try {
                a.getApiInterface();
                bl(this.n);
                return
            } catch (b) {}
            N(t(this.Sd, this), 50)
        }
    };
    p.Mb = function (a, b) {
        var c = gl(b);
        if (c) {
            if (!this.c[a]) {
                var d = "ytPlayer" + a + this.n,
                    e = t(function (b) {
                        this.ea.za(a, b)
                    }, this);
                this.c[a] = d;
                q[d] = e;
                this.c[a] = d;
                this.b.nativeAddEventListener && this.b.nativeAddEventListener(a, d)
            }
            this.ea.ra(a, c)
        }
    };

    function gl(a) {
        var b = a;
        "string" == typeof a && (b = function () {
            s(a).apply(q, arguments)
        });
        return !b ? l : b
    }
    p.hf = function (a) {
        for (var a = a ? qc : pc, b = a(document.activeElement); b && !(1 == b.nodeType && (b.focus(), b == document.activeElement));) b = a(b)
    };
    p.jf = function (a) {
        var b = L("EVENT_ID");
        b && Vg(a.url, {
            ei: b,
            feature: a.feature
        })
    };

    function el(a) {
        return "embedded" == a.M || "profilepage" == a.M
    }
    p.ig = function () {
        X("/html5", {
            pb: k,
            method: "POST",
            C: {
                prefer_html5: k,
                session_token: M("html5_ajax")
            }
        })
    };
    p.ed = function () {
        hl(this.e)
    };
    p.T = function () {
        this.b.b && this.b.b();
        delete this.b;
        this.F.fallback = l;
        this.F.fallbackMessage = l;
        delete this.F;
        for (var a in this.c) delete q[this.c[a]];
        lc(this.f);
        al.J.T.call(this)
    };
    var il = s("yt.player.embed") || $k;
    u("yt.player.embed", il);
    var jl = s("yt.player.update") || cl;
    u("yt.player.update", jl);
    var hl = s("yt.player.destroy") || dl;
    u("yt.player.destroy", hl);
    s("ytPlayerOnYouTubePlayerReady") || u("ytPlayerOnYouTubePlayerReady", bl);
    kh(nh);
    kh(xh);
    kh(Ah);
    var $ = s("yt.timing") || {};
    u("yt.timing", $);
    $.mj = 0;
    $.lj = 0;
    $.ge = function (a, b) {
        var c = $.timer || {};
        c[a] = b ? b : qa();
        $.timer = c
    };
    $.info = function (a, b) {
        var c = $.info_args || {};
        c[a] = b;
        $.info_args = c
    };
    $.kc = function (a) {
        var a = a || L("TIMING_ACTION"),
            b = $.timer || {},
            c = $.info_args || {},
            d = b.start,
            e = "",
            f = [],
            g = [];
        delete b.start;
        $.srt && (e = "&srt=" + $.srt);
        b.aft && b.plev && (b.aft = Math.min(b.aft, b.plev));
        for (var i in b) {
            var n = Math.max(Math.round(b[i] - d), 0);
            f.push(i + "." + n)
        }
        for (i in c) g.push(i + "=" + c[i]);
        b.vr && b.gv && f.push("vl." + Math.round(b.vr - b.gv));
        var r;
        !b.aft && b.vr && b.cl ? r = b.cl > b.vr ? b.cl - d : b.vr - d : !b.aft && b.vr ? r = b.vr - d : b.aft || (r = b.ol - d);
        f.push("aft." + Math.max(Math.round(r), 0));
        Yg(["https:" == window.location.protocol ?
            "https://gg.google.com/csi" : "http://csi.gstatic.com/csi", "?v=2&s=youtube&action=", a, e, "&", g.join("&"), "&rt=", f.join(",")
        ].join(""))
    };
    $.Tc = function () {
        var a = L("TIMING_ACTION"),
            b = $.timer || {};
        a && b.start && ($.wff && -1 != a.indexOf("ajax") && b.vr && b.cl ? $.kc() : $.wff && -1 == a.indexOf("ajax") && b.vr ? $.kc() : !$.wff && (b.ol || b.aft) && $.kc())
    };
    $.je = function () {
        $.ge("ol");
        $.Tc()
    };

    function kl() {
        this.b = {}
    }
    v(kl, lh);
    ba(kl);
    kl.prototype.O = "char-counter";
    kl.prototype.register = function () {
        Z(this, "keydown", this.c, "input");
        Z(this, "paste", this.c, "input");
        Z(this, "cut", this.c, "input")
    };
    kl.prototype.c = function (a) {
        var b = mh(this, a);
        if (b) {
            var c = "true" == this.getData(b, "count-char-by-size"),
                d = parseInt(this.getData(b, "char-limit"), 10);
            isNaN(d) || 0 >= d || N(t(function () {
                var e = parseInt(a.getAttribute("maxlength"), 10);
                if (!isNaN(e)) {
                    var f = pl(a, c);
                    if (c) {
                        if (f > e) {
                            var g = a.value,
                                i = g.length,
                                n = 0,
                                e = f - e,
                                f = "",
                                r = 0;
                            do f += g[i - n], r = unescape(encodeURIComponent(f)).length, n++; while (r < e);
                            a.value = a.value.substring(0, i - n)
                        }
                    } else f > e && (a.value = a.value.substring(0, e))
                }
                g = parseInt(this.getData(b, "warn-at-chars-remaining"),
                    10);
                isNaN(g) && (g = 0);
                i = d - pl(a, c);
                C(b, Y(this, "maxed-out"), i < g);
                K(Y(this, "remaining"), b).innerHTML = i
            }, this), 0)
        }
    };

    function pl(a, b) {
        var c = a.value;
        return b ? unescape(encodeURIComponent(c)).length : c.length
    };

    function ql() {
        this.b = {}
    }
    v(ql, lh);
    ql.prototype.Uc = function () {
        return this.Rc && 0 == Qb.indexOf("6") ? m : k
    };
    ql.prototype.zb = function (a) {
        var b = mh(this, a);
        if (b) {
            x(b, Y(this, "active"));
            var c = rl(this, a, b);
            if (c) {
                c.cardTargetNode = a;
                c.cardRootNode = b;
                sl(this, a, c);
                var d = Y(this, "card-visible"),
                    e = this.getData(a, "card-delegate-show") && this.getData(b, "card-action");
                this.ia(b, "card-action", a);
                V(c);
                N(function () {
                    e || U(c);
                    x(c, d)
                }, 10)
            }
        }
    };

    function rl(a, b, c) {
        var d = Y(a, "card"),
            e = d + ce(c),
            f = F(e);
        if (f) return f;
        var g = tl(a, c);
        if (!g) return l;
        f = document.createElement("div");
        f.id = e;
        f.className = d;
        (c = Q(c, "card-class")) && x(f, c);
        c = document.createElement("div");
        c.className = Y(a, "card-border");
        b = a.getData(b, "orientation") || "horizontal";
        d = document.createElement("div");
        d.className = "yt-uix-card-border-arrow yt-uix-card-border-arrow-" + b;
        e = document.createElement("div");
        e.className = Y(a, "card-body");
        a = document.createElement("div");
        a.className = "yt-uix-card-body-arrow yt-uix-card-body-arrow-" +
            b;
        mc(g);
        e.appendChild(g);
        c.appendChild(a);
        c.appendChild(e);
        f.appendChild(d);
        f.appendChild(c);
        document.body.appendChild(f);
        return f
    }

    function sl(a, b, c) {
        var d = a.getData(b, "orientation") || "horizontal",
            e = a.getData(b, "position"),
            f = !!a.getData(b, "force-position"),
            d = "horizontal" == d,
            g = "bottomright" == e || "bottomleft" == e,
            e = "topright" == e || "bottomright" == e,
            i, n;
        e && g ? (n = 7, i = 4) : e && !g ? (n = 6, i = 5) : !e && g ? (n = 5, i = 6) : (n = 4, i = 7);
        var r = af(document.body),
            y = af(b);
        r != y && (n ^= 2);
        var D;
        d ? (y = b.offsetHeight / 2 - 12, D = new jb(-12, b.offsetHeight + 6)) : (y = b.offsetWidth / 2 - 6, D = new jb(b.offsetWidth + 6, -12));
        var G = ef(c),
            y = Math.min(y, (d ? G.height : G.width) - 24 - 6);
        6 > y && (y = 6, d ? D.y +=
            12 - b.offsetHeight / 2 : D.x += 12 - b.offsetWidth / 2);
        var H = l;
        f || (H = 10);
        G = Y(a, "card-flip");
        a = Y(a, "card-reverse");
        C(c, G, e);
        C(c, a, g);
        H = ch(b, n, c, i, D, l, H);
        !f && H && (H & 48 && (e = !e, n ^= 2, i ^= 2), H & 192 && (g = !g, n ^= 1, i ^= 1), C(c, G, e), C(c, a, g), ch(b, n, c, i, D));
        b = K("yt-uix-card-body-arrow", c);
        c = K("yt-uix-card-border-arrow", c);
        d = d ? g ? "top" : "bottom" : !r && e || r && !e ? "left" : "right";
        b.setAttribute("style", "");
        c.setAttribute("style", "");
        b.style[d] = y + "px";
        c.style[d] = y + "px"
    }

    function ul(a, b) {
        var c = mh(a, b);
        if (c) {
            var d = rl(a, b, c);
            d && (z(c, Y(a, "active")), z(d, Y(a, "card-visible")), V(d), d.cardTargetNode = l, d.cardRootNode = l)
        }
    }

    function vl(a, b, c) {
        var d = mh(a, b);
        if (d) {
            var e = tl(a, d);
            e && (e.innerHTML = c, B(d, Y(a, "active")) && (c = rl(a, b, d), sl(a, b, c), U(c)))
        }
    }

    function tl(a, b) {
        var c = b.cardContentNode;
        if (!c) {
            var d = Y(a, "content"),
                e = Y(a, "card-content"),
                c = K(d, b);
            A(c, d, e);
            b.cardContentNode = c
        }
        return c
    }
    ql.prototype.e = {
        og: 200,
        pg: 200
    };

    function wl() {
        this.b = {}
    }
    v(wl, ql);
    ba(wl);
    p = wl.prototype;
    p.O = "clickcard";
    p.register = function () {
        Z(this, "click", this.Ug, "target");
        Z(this, "click", this.Tg, "close")
    };
    p.Ug = function (a) {
        var b = this.getData(a, "card-target"),
            a = b ? F(b) : a,
            b = mh(this, a);
        B(b, Y(this, "active")) ? (ul(this, a), z(b, Y(this, "active"))) : (this.zb(a), x(b, Y(this, "active")))
    };
    p.zb = function (a) {
        wl.J.zb.call(this, a);
        var b = mh(this, a);
        xl(this);
        Q(b, "click-outside-persists") || (this.c = a, this.f = R(document, "click", t(this.Sf, this)))
    };
    p.Sf = function (a) {
        Cc(a.target, "yt-uix" + (this.O ? "-" + this.O : "") + "-card") || xl(this)
    };

    function xl(a) {
        a.c && (ul(a, a.c), a.c = l, se(a.f))
    }
    p.Tg = function (a) {
        (a = Cc(a, Y(this, "card"))) && ul(this, a.cardTargetNode)
    };

    function yl() {
        this.b = {}
    }
    v(yl, lh);
    ba(yl);
    yl.prototype.O = "close";
    yl.prototype.register = function () {
        Z(this, "click", this.c)
    };
    yl.prototype.c = function (a) {
        var b, c = this.getData(a, "close-parent-class"),
            d = this.getData(a, "close-parent-id");
        d ? b = F(d) : c && (b = Cc(a, c));
        b && V(b);
        this.ia(a, "close-callback", b)
    };

    function zl() {
        this.b = {}
    }
    v(zl, lh);
    ba(zl);
    zl.prototype.O = "contextlink";
    zl.prototype.register = function () {
        Z(this, "click", this.c)
    };
    zl.prototype.c = function (a) {
        var b = a.href;
        if (b) {
            var c = vf(b);
            if (c == window.location.host || !c && 0 == b.lastIndexOf("/", 0))
                if (c = xf(b), c = yf(c)) b = Gf(b, "v"), b == l && (b = "default_tag"), (a = ii(a)) && Fi(b, a)
        }
    };

    function Al() {
        this.b = {}
    }
    v(Al, ql);
    ba(Al);
    p = Al.prototype;
    p.O = "hovercard";
    p.register = function () {
        Z(this, "mouseenter", this.Lg, "target");
        Z(this, "mouseleave", this.Ng, "target");
        Z(this, "mouseenter", this.Mg, "card");
        Z(this, "mouseleave", this.Og, "card")
    };
    p.Lg = function (a) {
        if (Bl != a) {
            Bl && (ul(this, Bl), Bl = l);
            var b = t(this.zb, this, a),
                c = parseInt(this.getData(a, "delay-show"), 10),
                b = N(b, -1 < c ? c : this.e.og);
            this.setData(a, "card-timer", b.toString());
            Bl = a;
            a.alt && (this.setData(a, "card-alt", a.alt), a.alt = "");
            a.title && (this.setData(a, "card-title", a.title), a.title = "")
        }
    };
    p.Ng = function (a) {
        var b = parseInt(this.getData(a, "card-timer"), 10);
        Ud(b);
        mh(this, a).isCardHidable = k;
        b = parseInt(this.getData(a, "delay-hide"), 10);
        b = -1 < b ? b : this.e.pg;
        N(t(this.qg, this, a), b);
        if (b = this.getData(a, "card-alt")) a.alt = b;
        if (b = this.getData(a, "card-title")) a.title = b
    };
    p.qg = function (a) {
        mh(this, a).isCardHidable && (ul(this, a), Bl = l)
    };
    p.Mg = function (a) {
        a && (a.cardRootNode.isCardHidable = m)
    };
    p.Og = function (a) {
        a && ul(this, a.cardTargetNode)
    };
    var Bl = l;

    function Cl() {
        this.b = {}
    }
    v(Cl, lh);
    ba(Cl);
    Cl.prototype.O = "redirect-link";
    Cl.prototype.register = function () {
        Z(this, "click", this.c)
    };
    Cl.prototype.c = function (a) {
        if (!Q(a, "redirect-href-updated")) {
            P(a, "redirect-href-updated", "true");
            var b = L("XSRF_REDIRECT_TOKEN"),
                c = L("XSRF_FIELD_NAME");
            if (b && c) {
                var d = {};
                d.q = a.href;
                d[c] = b;
                a.href = Lf("/redirect", d)
            }
        }
    };

    function Dl() {
        this.b = {}
    }
    v(Dl, lh);
    ba(Dl);
    Dl.prototype.O = "sessionlink";
    Dl.prototype.register = function () {
        Z(this, "click", this.c)
    };
    Dl.prototype.c = function (a) {
        El(a)
    };

    function El(a) {
        var b = Q(a, "sessionlink-target") || a.href;
        b && (a = Q(a, "sessionlink") || "", a = Hf(a), Vg(b, a))
    };

    function Fl() {
        this.b = {}
    }
    v(Fl, lh);
    ba(Fl);
    Fl.prototype.O = "tile";
    Fl.prototype.register = function () {
        Z(this, "click", this.c)
    };
    Fl.prototype.c = function (a, b, c) {
        if (!Ac(c.target, "a") && !Ac(c.target, "button") && (a = K(Y(this, "link"), a))) E && !Sb(9) ? a.click() : (B(a, "yt-uix-sessionlink") && El(a), Gh(a.href))
    };

    function Gl(a, b) {
        this.c = a;
        this.e = m;
        this.ea = new gg;
        T(this.c, "click", t(this.n, this), "yt-dialog-dismiss");
        Hl(this, "content");
        this.f = b
    }
    var Il = {
        LOADING: "loading",
        mh: "content",
        kj: "working"
    };

    function Hl(a, b) {
        var c = K("yt-dialog-fg-content", a.c),
            d = [];
        mb(Il, function (a) {
            d.push("yt-dialog-show-" + a)
        });
        A(c, d, "yt-dialog-show-" + b)
    }

    function Jl(a) {
        if (!a.e) {
            var b = nh.getInstance(),
                c = I(Y(b, "menu"), a.c);
            w(c, function (a) {
                a = wh(b, a);
                P(a, "button-menu-root-container", "yt-dialog-base")
            });
            a.e = k
        }
        document.activeElement && document.activeElement != document.body && document.activeElement.blur();
        a.b || (a.b = F("yt-dialog-bg"), a.b || (a.b = document.createElement("div"), a.b.id = "yt-dialog-bg", a.b.className = "yt-dialog-bg", document.body.appendChild(a.b)));
        a.b.style.height = ec() + "px";
        U(a.b);
        var c = document.getElementsByTagName("embed"),
            d = document.getElementsByTagName("object"),
            e = t(function (a) {
                var b = a.style.visibility;
                "hidden" != b && (P(a, "dialog-hidden", "true"), b && P(a, "dialog-visibility-value", b), a.style.visibility = "hidden")
            }, a);
        w(c, e);
        w(d, e);
        a.f || R(document, "keydown", t(a.i, a));
        U(a.c)
    }
    Gl.prototype.n = function (a) {
        a = a.currentTarget;
        a.disabled || (a = Q(a, "action") || "", Kl(this, a))
    };

    function Kl(a, b) {
        V(a.c);
        V(a.b);
        var c = document.getElementsByTagName("embed"),
            d = document.getElementsByTagName("object"),
            e = t(function (a) {
                if (Q(a, "dialog-hidden")) {
                    $d(a, "dialog-hidden");
                    var b = Q(a, "dialog-visibility-value");
                    b ? a.style.visibility = b : a.style.visibility = l
                }
            }, a);
        w(c, e);
        w(d, e);
        a.f || ue(document, "keydown", t(a.i, a));
        a.ea.za("all");
        a.ea.za(b)
    }
    Gl.prototype.setTitle = function (a) {
        tc(K("yt-dialog-title", this.c), a)
    };
    Gl.prototype.i = function (a) {
        27 == a.keyCode && Kl(this, "cancel")
    };
    u("yt.ui.Dialog", Gl);
    var Ll, Ml, Nl = m;

    function Ol() {
        if (!F("create-channel-identity-css") && (Ug(L("CREATE_CHANNEL_JS_URL"), Pl), !F("create-channel-identity-css"))) {
            var a = L("CREATE_CHANNEL_CSS_URL"),
                b = J("head", j, j)[0],
                a = gc("link", {
                    id: "create-channel-identity-css",
                    rel: "stylesheet",
                    href: a
                });
            b.insertBefore(a, b.childNodes[0] || l)
        }
    }

    function Pl() {
        Nl = k;
        Ll && Ql(Ll)
    }

    function Rl() {
        var a = L("CREATE_CHANNEL_NEXT_URL");
        a && ("/" == a ? document.location.href = a : window.history.back())
    }

    function Sl(a) {
        if (!Ml) {
            var b = F("create-channel-identity-lb");
            if (!b) return;
            Ml = new Gl(b);
            Ml.ea.ra("all", Rl)
        }
        b = "default";
        if (a && (a = Q(a.currentTarget, "upsell"), "upload" == a || "playlist" == a || "comment" == a)) b = a;
        Ql(b)
    }

    function Ql(a) {
        Ml.setTitle(L("CREATE_CHANNEL_DIALOG_TITLE_" + a.toUpperCase()));
        Hl(Ml, "loading");
        Jl(Ml);
        if (Nl) {
            var b;
            b = "upload" == a ? L("CREATE_CHANNEL_NEXT_URL_UPLOAD") : document.location.href;
            L("HAS_GPLUS") ? s("yt.www.account.CreateChannelLightboxForm.fetchAndShow")(a, b) : s("yt.www.account.CreateGplusDialog.fetchAndShow")(a, b)
        } else Ll = a
    };
    var Tl, Ul, Vl, Wl, Xl = m;

    function Yl(a) {
        a ? document.body.style.cursor = "wait" : "wait" == document.body.style.cursor && (document.body.style.cursor = "default")
    }

    function Zl() {
        if (!F("link-gplus-css")) {
            Ug(L("LINK_GPLUS_JS_URL"), $l);
            var a = L("LINK_GPLUS_CSS_URL"),
                b = J("head", j, j)[0],
                a = gc("link", {
                    id: "link-gplus-css",
                    rel: "stylesheet",
                    href: a
                });
            b.insertBefore(a, b.childNodes[0] || l)
        }
    }

    function $l() {
        Xl = k;
        Ul && Xl && am()
    }

    function bm(a) {
        if (!Tl) {
            var b = F("link-gplus-lb");
            if (!b) return;
            Tl = new Gl(b, k)
        }
        a ? (b = Cc(a.target, "link-gplus-lightbox"), Vl = B(b, "ignore-opt-out"), Wl = Q(b, "upsell"), a.preventDefault()) : (Vl = m, Wl = "signin");
        Ul = k;
        Yl(k);
        Xl && am()
    }

    function am() {
        var a = "";
        "upload" == Wl ? a = "/my_videos_upload" : "signin" == Wl && (a = L("LINK_GPLUS_NEXT_URL"));
        s("yt.www.account.LinkGplusDialog.fetchAndShow")(Wl, a, Vl)
    };

    function cm(a, b) {
        this.b = a;
        this.c = b;
        R(F("premium-yva"), "click", t(this.rd, this))
    }
    p = cm.prototype;
    p.kh = function () {
        V("ad_creative_1");
        W("ads-masthead-hide");
        Qi(F("page"), k);
        Ni();
        this.c || V("ad_creative_collapse_btn_1");
        U("ad_creative_expand_btn_1");
        dm(this);
        Zg("homepage_collapse_masthead_ad", j, j)
    };
    p.rd = function () {
        U("ad_creative_expand_btn_1");
        mc(F("premium-yva"));
        Se(document.getElementById("feed"), {
            "margin-top": 0
        });
        dm(this)
    };
    p.ih = function () {
        A(document.getElementById("premium-yva"), "premium-yva-unexpanded", "premium-yva-expanded")
    };
    p.jh = function () {
        A(document.getElementById("premium-yva"), "premium-yva-expanded", "premium-yva-unexpanded")
    };

    function dm(a) {
        He.getInstance();
        Me("HIDDEN_MASTHEAD_ID", a.b);
        Pe()
    }
    p.gh = function () {
        V("premium-yva");
        z(F("premium-yva"), "premium-yva-unexpanded")
    };
    p.lh = function () {
        He.getInstance();
        Me("HIDDEN_MASTHEAD_ID", m);
        Pe();
        Zg("homepage_expand_masthead_ad", j, j);
        Gh(document.location.href)
    };
    var em;

    function fm() {
        var a = Mh();
        V(K("flag-comment-step1", a));
        U(K("flag-comment-step2", a));
        V(K("flag-comment-step3", a))
    }

    function gm() {
        var a = Mh(),
            b = K("flag-comment-form", a),
            c = K("flag-comment-block-user-input", a),
            d = K("submit-flag-comment", a),
            e = K("flag-comment-error-msg", a);
        V(e);
        c.disabled = k;
        d.disabled = k;
        X("/comment_servlet", {
            format: "XML",
            method: "POST",
            o: {
                flag_comment: 1
            },
            C: Hf(Qc(b)),
            j: function (b, c) {
                c && c.html_content ? (V(K("flag-comment-step1", a)), V(K("flag-comment-step2", a)), U(K("flag-comment-step3", a)), K("flag-comment-captcha-placeholder", a).innerHTML = c.html_content) : Lh.getInstance().cc()
            },
            onError: function (a, b) {
                var i =
                    b && b.error_message;
                if (i) {
                    var n = K("yt-alert-message", e);
                    tc(n, i)
                }
                U(e);
                c.disabled = m;
                d.disabled = m
            }
        })
    }

    function hm(a) {
        var b = Mh(),
            c = K("abuse-type-placeholder", b),
            a = Ac(a.currentTarget, "LABEL");
        tc(c, yc(a));
        K("continue-flag-comment", b).disabled = m
    };

    function im(a, b, c) {
        this.i = !!c;
        this.z = a;
        this.wa = he("button", l, a);
        this.V = he("textarea", l, a);
        this.Oa = l;
        this.c = K("comments-remaining-count", this.z);
        this.f = parseInt(Q(this.c, "max-count"), 10);
        this.Ya = K("comments-post-message", this.z);
        this.Xc = K("yt-alert-content", this.Ya);
        this.mc = K("comments-threshold-countdown", this.z);
        this.nc = K("comments-threshold-count", this.mc);
        this.e = [];
        this.lc = [];
        this.b = l;
        jm(this);
        km(this, this.V, "focus", this.jd);
        km(this, this.V, "blur", this.Ge);
        km(this, this.z, "submit", this.fd);
        km(this,
            this.V, "change", this.kd);
        km(this, this.V, "keyup", this.kd);
        km(this, this.V, "keydown", this.He);
        b && this.jd()
    }

    function lm(a) {
        mm(a);
        nm(a);
        z(a.z, "has-focus");
        a.wa.disabled = m;
        a.V.value = "";
        jm(a);
        a.V.blur();
        a.b = l;
        se(a.e);
        a.e = [];
        w(a.lc, function (a) {
            Vd(a)
        });
        a.lc = [];
        $d(a.z, "initialized");
        W("comment-form-reset")
    }
    p = im.prototype;
    p.focus = function () {
        this.V.focus()
    };

    function km(a, b, c, d) {
        a.e.push(R(b, c, t(d, a)))
    }

    function mm(a) {
        a.Oa && (a.Oa.innerHTML = "")
    }

    function jm(a) {
        var b = a.f - a.V.value.length;
        a.c.innerHTML = b + "";
        b = 0 > b;
        C(a.c, "too-many", b);
        a.wa.disabled = b
    }

    function nm(a) {
        V(a.mc);
        U(K("comments-remaining"));
        a.nc.innerHTML = "";
        a.wa.disabled = m
    }
    p.kd = function () {
        this.V.readOnly || jm(this)
    };
    p.He = function (a) {
        if (this.i) switch (a.keyCode) {
        case 13:
            this.fd(a);
            break;
        case 27:
            lm(this)
        }
    };
    p.jd = function () {
        B(this.z, "has-focus") || V(this.Ya);
        x(this.z, "has-focus");
        W("comments-focus", this.z)
    };
    p.Ge = function () {
        W("comments-blur", this.z)
    };
    p.fd = function (a) {
        a.preventDefault();
        if (!this.wa.disabled) {
            this.wa.disabled = k;
            this.V.readOnly = k;
            a = Hf(Qc(this.z));
            a.screen = Df({
                h: window.screen.height,
                w: window.screen.width,
                d: window.screen.colorDepth
            });
            var b = a.comment,
                b = {
                    return_ajax: "true",
                    len: b.length,
                    wc: b.split(/\s+/).length
                };
            this.z.reply_parent_id.value && (b.reply = 1);
            this.b && (b.tag = this.b);
            var c = L("PLAYBACK_ID");
            c && (a.plid = c);
            X(this.z.action, {
                format: "XML",
                method: "POST",
                o: b,
                C: a,
                S: function (a, b) {
                    var c = b.str_code;
                    switch (c) {
                    case "OK":
                        c = document.createElement("ul");
                        c.innerHTML = b.html_content;
                        c = nc(c);
                        if (this.z.reply_parent_id.value) {
                            var g = Ac(this.z, l, "comments-post-container"),
                                i = Ac(g, l, "comment");
                            mc(g);
                            A(i, "replying", "has-child");
                            x(c, "child");
                            C(c, "last", !(i.nextElementSibling != j ? i.nextElementSibling : oc(i.nextSibling)));
                            i.parentNode && i.parentNode.insertBefore(c, i.nextSibling)
                        } else g = Ac(this.z, l, "comments-section"), g = K("comment-list", g), g.insertBefore(c, g.childNodes[0] || l), lm(this);
                        Oi(c);
                        W("comment-submit-success");
                        break;
                    case "PENDING":
                        mm(this);
                        this.Xc.innerHTML =
                            O("COMMENT_PENDING");
                        A(this.Ya, "yt-alert-error", "yt-alert-info");
                        U(this.Ya);
                        break;
                    default:
                        switch (c) {
                        case "PENDING":
                            g = O("COMMENT_PENDING");
                            break;
                        case "BLOCKED":
                            g = O("COMMENT_BLOCKED");
                            break;
                        case "EMAIL":
                            g = O("COMMENT_ERROR_EMAIL");
                            break;
                        case "INLINE_CAPTCHAFAIL":
                            g = O("COMMENT_CAPTCHAFAIL");
                            break;
                        case "SHOW_COUNTDOWN":
                            g = O("SHOW_COUNTDOWN");
                            break;
                        case "FAILED_OWNER_LINKING":
                            g = O("COMMENT_OWNER_LINKING")
                        }
                        g = g || l || O("COMMENT_ERROR");
                        this.Xc.innerHTML = g;
                        A(this.Ya, "yt-alert-info", "yt-alert-error");
                        U(this.Ya);
                        switch (c) {
                        case "INLINE_CAPTCHA":
                        case "INLINE_CAPTCHAFAIL":
                            X("/comment_servlet?gimme_captcha=1", {
                                format: "XML",
                                method: "POST",
                                C: {
                                    session_token: M("comment_servlet")
                                },
                                j: function (a, b) {
                                    if (!this.Oa) {
                                        this.Oa = document.createElement("div");
                                        this.Oa.className = "comment-captcha";
                                        var c = this.V;
                                        c.parentNode && c.parentNode.insertBefore(this.Oa, c.nextSibling)
                                    }
                                    this.Oa.innerHTML = b.html_content;
                                    this.wa.disabled = m
                                },
                                B: this
                            });
                            break;
                        case "SHOW_COUNTDOWN":
                            var n = parseInt(b.countdown_timer, 10) || 30;
                            this.nc.innerHTML = n;
                            V(K("comments-remaining"));
                            U(this.mc);
                            this.wa.disabled = k;
                            var r = Td(t(function () {
                                0 == n ? (Vd(r), nm(this)) : (n--, this.nc.innerHTML = n)
                            }, this), 1E3);
                            this.lc.push(r);
                            break;
                        default:
                            this.wa.disabled = m, mm(this)
                        }
                    }
                    this.V.readOnly = m
                },
                B: this
            });
            Kh("comment")
        }
    };

    function om(a) {
        this.k = a;
        K("watch-more-comments-button");
        this.b = !!L("ENABLE_LIVE_COMMENTS");
        this.e = [];
        this.qb()
    }
    om.prototype.qb = function () {
        var a = K("comments-pagination", this.k);
        a && Q(a, "ajax-enabled") && this.e.push(T(this.k, "click", t(this.c, this), "yt-uix-pager-button"))
    };
    om.prototype.c = function (a) {
        a.preventDefault();
        a = a.currentTarget;
        if (!B(a, "yt-uix-button-toggled")) {
            var b = parseInt(Q(a, "page"), 10);
            U("comments-loading");
            W("comments-page-changing");
            P(this.k, "type", "everything");
            X("/watch_ajax?action_get_comments=1", {
                format: "XML",
                o: {
                    v: L("VIDEO_ID"),
                    p: b,
                    commentthreshold: L("COMMENTS_THRESHHOLD"),
                    commenttype: "everything",
                    enable_live_comments: this.b ? "yes" : l,
                    page_size: L("COMMENTS_PAGE_SIZE"),
                    source: L("COMMENT_SOURCE")
                },
                j: function (a, d) {
                    var e = d.html_content;
                    if (e) {
                        this.k.innerHTML =
                            e;
                        Oi(this.k);
                        var e = K("comment-list", this.k),
                            f = K("live-comments-setting", this.k);
                        e && W("comments-page-changed", e, f, b)
                    }
                    V("comments-loading")
                },
                B: this
            })
        }
    };

    function pm(a, b, c) {
        a = Ac(a, "form");
        ae(a, "initialized") || (P(a, "initialized", "true"), em = new im(a, !b, c), b && em.focus())
    }
    var qm = [];

    function rm(a) {
        var a = a.currentTarget,
            b = Ac(a, l, "comment");
        switch (Q(a, "action")) {
        case "approve":
            var a = Q(b, "id"),
                c = L("VIDEO_ID");
            z(b, "pending");
            X("/comment_servlet?field_approve_comment=1", {
                format: "XML",
                method: "POST",
                C: {
                    comment_id: a,
                    entity_id: c,
                    session_token: M("comment_servlet")
                },
                onError: function () {
                    x(b, "pending")
                }
            });
            break;
        case "block":
            confirm(O("BLOCK_USER")) && (sm(b, k), x(b, "blocked"));
            break;
        case "unblock":
            sm(b, m);
            z(b, "blocked");
            break;
        case "flag-in-place":
            if (tm()) {
                var d = F("comment-flag-area"),
                    a = Q(b, "id"),
                    c = Q(b, "author-id"),
                    e = yc(K("author", b)),
                    f = K("comment-text", b).innerHTML,
                    g = L("VIDEO_ID");
                Lh.getInstance().Pd(d);
                d = Mh();
                K("flagged-comment-id", d).value = a;
                K("flagged-comment-author-id", d).value = c;
                K("flagged-comment-video-id", d).value = g;
                tc(K("flagged-comment-author-name", d), e);
                K("flagged-comment-text", d).appendChild(jc(f));
                R(K("continue-flag-comment", d), "click", fm);
                T(d, "click", gm, "submit-flag-comment");
                T(d, "click", hm, "abuse-type-radio-input")
            }
            break;
        case "flag":
            tm() && (a = Q(b, "id"), c = L("VIDEO_ID"), V(b), x(b,
                "flagged"), X("/comment_servlet", {
                format: "XML",
                method: "POST",
                o: {
                    mark_comment_as_spam: a,
                    entity_id: c
                },
                C: {
                    session_token: M("comment_servlet")
                },
                onError: function () {
                    U(b);
                    z(b, "flagged")
                }
            }));
            break;
        case "unflag":
            a = Q(b, "id");
            X("/comment_servlet", {
                format: "XML",
                method: "POST",
                C: {
                    unmark_comment_as_spam: a,
                    entity_id: L("VIDEO_ID"),
                    session_token: M("comment_servlet")
                }
            });
            break;
        case "hide":
            x(b, "hidden");
            break;
        case "show":
            z(b, "hidden");
            break;
        case "remove":
            a = Q(b, "id");
            c = L("VIDEO_ID");
            V(b);
            X("/comment_servlet?remove_comment=1", {
                format: "XML",
                method: "POST",
                C: {
                    comment_id: a,
                    entity_id: c,
                    session_token: M("comment_servlet")
                },
                onError: function () {
                    U(b)
                }
            });
            break;
        case "reply":
            um(b);
            break;
        case "realtime-reply":
            tm() && (vm(b), em || (a = K("comments-textarea", F("comments-view")), pm(a)), a = em, lm(a), a.focus());
            break;
        case "share":
            wm(b);
            break;
        case "close-share":
            vm(b);
            break;
        case "vote-up":
            xm(b, k);
            break;
        case "vote-down":
            xm(b, m);
            break;
        case "show-parent":
            a = Q(b, "id");
            c = L("VIDEO_ID");
            z(b, "has-child");
            x(b, "child");
            if (e = F("parent-comment-loading")) {
                var i =
                    ge(e);
                b.parentNode && b.parentNode.insertBefore(i, b);
                U(i)
            }
            X("/comment_servlet?get_comment_parent=1", {
                format: "XML",
                method: "POST",
                C: {
                    comment_id: a,
                    entity_id: c,
                    session_token: M("comment_servlet")
                },
                j: function (a, c) {
                    var d = document.createElement("ul");
                    d.innerHTML = c.html_content;
                    b.parentNode && b.parentNode.insertBefore(nc(d), b);
                    mc(i)
                },
                onError: function (a, c) {
                    x(b, "has-child");
                    z(b, "child");
                    mc(i);
                    c && c.error_message ? window.alert(c.error_message) : window.alert("Request failed, please try later.")
                }
            })
        }
    }

    function tm() {
        return L("COMMENTS_SIGNIN_URL") ? (Gh(L("COMMENTS_SIGNIN_URL")), m) : !L("COMMENTS_YPC_CAN_POST_OR_REACT_TO_COMMENT") ? m : k
    }

    function sm(a, b) {
        var c = {};
        c["action_" + (b ? "" : "un") + "block_commenter"] = 1;
        var d = Q(a, "id");
        X("/link_ajax", {
            format: "XML",
            method: "POST",
            o: c,
            C: {
                session_token: M("link_ajax"),
                comment_id: d
            },
            j: function (a, b) {
                b && b.success_message && window.alert(b.success_message)
            }
        })
    }

    function um(a) {
        if (tm())
            if (B(a, "replying")) ym(a);
            else {
                x(a, "replying");
                vm(a);
                var b = K("comments-post", F("watch7-discussion") || F("watch7-discussion")),
                    b = ge(b),
                    c = document.createElement("div");
                c.className = "comments-post-container";
                a.appendChild(c);
                c.appendChild(b);
                b = new im(b);
                lm(b);
                c = Q(a, "id");
                b.z.reply_parent_id.value = c;
                if (a = Q(a, "tag")) b.b = a;
                b.focus()
            }
    }

    function ym(a) {
        B(a, "replying") && (z(a, "replying"), a = K("comments-post-container", a), mc(a))
    }

    function wm(a) {
        if (!B(a, "sharing")) {
            x(a, "sharing");
            ym(a);
            var b = ge(F("comment-share-area")),
                c = document.createElement("div");
            c.className = "comments-post-container";
            a.appendChild(c);
            c.appendChild(b);
            var d = Q(a, "id"),
                c = L("COMMENT_SHARE_URL"),
                c = c.replace("_COMMENT_ID_", d);
            K("comment-share-url", b).value = c;
            for (var a = K("comment-text", a), e, a = yc(nc(a)), c = [], f = 0; f < a.length; f++) {
                var g = c,
                    i = f,
                    n;
                n = a.charAt(f);
                if (n in La) n = La[n];
                else if (n in Ja) n = La[n] = Ja[n];
                else {
                    var r = n,
                        y = n.charCodeAt(0);
                    if (31 < y && 127 > y) r = n;
                    else {
                        if (256 >
                            y) {
                            if (r = "\\x", 16 > y || 256 < y) r += "0"
                        } else r = "\\u", 4096 > y && (r += "0");
                        r += y.toString(16).toUpperCase()
                    }
                    n = La[n] = r
                }
                g[i] = n
            }
            e = c.join("");
            a = I("icon-comment-share", b);
            w(a, function (a) {
                var b = a.getAttribute("action"),
                    b = b.replace("_COMMENT_ID_", d),
                    c;
                c = -1 != b.indexOf("twitter") ? Ia(e, 80) : Ia(e, 150);
                b = b.replace("_COMMENT_TEXT_", c);
                qm.push(R(a, "click", t(function (a) {
                    eval(a)
                }, q, b)))
            });
            U(b)
        }
    }

    function vm(a) {
        B(a, "sharing") && (z(a, "sharing"), a = K("comments-post-container", a), mc(a))
    }

    function xm(a, b) {
        if (tm() && !Q(a, "voted")) {
            var c = Q(a, "id"),
                d = L("VIDEO_ID"),
                e = Q(a, "score"),
                f = b ? 1 : -1;
            P(a, "voted", f + "");
            b ? A(a, "voted-down", "voted-up") : A(a, "voted-up", "voted-down");
            c = {
                a: f,
                id: c,
                video_id: d,
                old_vote: e
            };
            (d = Q(a, "tag")) && (c.tag = d);
            X("/comment_voting", {
                format: "XML",
                method: "POST",
                o: c,
                C: {
                    session_token: M("comment_voting")
                }
            })
        }
    };
    var zm = m,
        Am = m;

    function Bm(a) {
        var b = {
                video_ids: a.$c,
                playlist_id: a.xe || "",
                new_playlist_name: a.bd || "",
                session_token: M("addto_ajax")
            },
            c = L("PLAYBACK_ID");
        c && (b.plid = c);
        c = {};
        a.ad && (c["private"] = a.ad);
        a.qc && (c.feature = a.qc);
        var d = "";
        switch (a.Zc) {
        case "PL":
            d = a.bd ? "action_add_to_new_playlist" : "action_add_to_playlist";
            break;
        case "FL":
            d = "action_add_to_favorites";
            break;
        case "WL":
            d = "action_add_to_watch_later_list"
        }
        c[d] = 1;
        X("/addto_ajax", {
            pb: k,
            format: "XML",
            method: "POST",
            o: c,
            C: b,
            B: a.B,
            onError: a.onError,
            j: a.j
        })
    };

    function Cm() {}
    ba(Cm);
    Cm.prototype.b = 0;
    Cm.getInstance();

    function Dm(a) {
        this.e = a || Zb()
    }
    v(Dm, jj);
    p = Dm.prototype;
    p.Qf = Cm.getInstance();
    p.Fd = l;
    p.xa = m;
    p.$ = l;
    p.cb = l;
    p.bc = l;
    p.Ab = l;
    p.Yc = m;
    p.getId = function () {
        return this.Fd || (this.Fd = ":" + (this.Qf.b++).toString(36))
    };
    p.A = function () {
        return this.$
    };
    p.Kc = function (a) {
        this.cb && this.cb != a && h(Error("Method not supported"));
        Dm.J.Kc.call(this, a)
    };
    p.sd = function () {
        this.$ = this.e.createElement("div")
    };
    p.da = function (a) {
        this.xa && h(Error("Component already rendered"));
        this.$ || this.sd();
        a ? a.insertBefore(this.$, l) : this.e.b.body.appendChild(this.$);
        (!this.cb || this.cb.xa) && this.rb()
    };
    p.tc = function (a) {
        this.$ = a
    };
    p.rb = function () {
        this.xa = k;
        Em(this, function (a) {
            !a.xa && a.A() && a.rb()
        })
    };
    p.wb = function () {
        Em(this, function (a) {
            a.xa && a.wb()
        });
        if (this.n) {
            var a = this.n;
            w(a.b, fj);
            a.b.length = 0
        }
        this.xa = m
    };
    p.T = function () {
        Dm.J.T.call(this);
        this.xa && this.wb();
        this.n && (this.n.na(), delete this.n);
        Em(this, function (a) {
            a.na()
        });
        !this.Yc && this.$ && mc(this.$);
        this.cb = this.$ = this.Ab = this.bc = l
    };

    function Em(a, b) {
        a.bc && w(a.bc, b, j)
    }
    p.removeChild = function (a, b) {
        if (a) {
            var c = ga(a) ? a : a.getId(),
                a = this.Ab && c ? (c in this.Ab ? this.Ab[c] : j) || l : l;
            if (c && a) {
                var d = this.Ab;
                c in d && delete d[c];
                Xa(this.bc, a);
                b && (a.wb(), a.$ && mc(a.$));
                c = a;
                c == l && h(Error("Unable to set parent component"));
                c.cb = l;
                Dm.J.Kc.call(c, l)
            }
        }
        a || h(Error("Child is not in parent component"));
        return a
    };

    function Fm(a, b) {
        this.e = b || Zb();
        this.c = a || ""
    }
    v(Fm, Dm);
    Fm.prototype.f = l;
    var Gm = "placeholder" in document.createElement("input");
    p = Fm.prototype;
    p.xb = m;
    p.sd = function () {
        this.$ = this.e.Qd("input", {
            type: "text"
        })
    };
    p.tc = function (a) {
        Fm.J.tc.call(this, a);
        this.c || (this.c = a.getAttribute("label") || "");
        var b;
        a: {
            var c = ac(a);
            try {
                b = c && c.activeElement;
                break a
            } catch (d) {}
            b = l
        }
        b == a && (this.xb = k, z(this.A(), "label-input-label"));
        Gm ? this.A().placeholder = this.c : this.A().setAttribute("aria-label", this.c)
    };
    p.rb = function () {
        Fm.J.rb.call(this);
        var a = new kj(this);
        mj(a, this.A(), "focus", this.ld);
        mj(a, this.A(), "blur", this.rf);
        Gm ? this.b = a : (Eb && mj(a, this.A(), ["keypress", "keydown", "keyup"], this.sf), mj(a, ac(this.A()) ? ac(this.A()).parentWindow || ac(this.A()).defaultView : window, "load", this.tf), this.b = a, Hm(this));
        Im(this);
        this.A().c = this
    };
    p.wb = function () {
        Fm.J.wb.call(this);
        this.b && (this.b.na(), this.b = l);
        this.A().c = l
    };

    function Hm(a) {
        !a.H && (a.b && a.A().form) && (mj(a.b, a.A().form, "submit", a.Of), a.H = k)
    }
    p.T = function () {
        Fm.J.T.call(this);
        this.b && (this.b.na(), this.b = l)
    };
    p.ld = function () {
        this.xb = k;
        z(this.A(), "label-input-label");
        if (!Gm && !Jm(this) && !this.M) {
            var a = this,
                b = function () {
                    a.A().value = ""
                };
            E ? pj(b) : b()
        }
    };
    p.rf = function () {
        Gm || (nj(this.b, this.A(), "click", this.ld), this.f = l);
        this.xb = m;
        Im(this)
    };
    p.sf = function (a) {
        27 == a.keyCode && ("keydown" == a.type ? this.f = this.A().value : "keypress" == a.type ? this.A().value = this.f : "keyup" == a.type && (this.f = l), a.preventDefault())
    };
    p.Of = function () {
        Jm(this) || (this.A().value = "", pj(this.tg, this))
    };
    p.tg = function () {
        Jm(this) || (this.A().value = this.c)
    };
    p.tf = function () {
        Im(this)
    };

    function Jm(a) {
        return !!a.A() && "" != a.A().value && a.A().value != a.c
    }
    p.clear = function () {
        this.A().value = "";
        this.f != l && (this.f = "")
    };

    function Im(a) {
        Gm ? a.A().placeholder != a.c && (a.A().placeholder = a.c) : (Hm(a), a.A().setAttribute("aria-label", a.c));
        Jm(a) ? z(a.A(), "label-input-label") : (!a.M && !a.xb && x(a.A(), "label-input-label"), Gm || pj(a.Xf, a))
    }
    p.Xf = function () {
        this.A() && (!Jm(this) && !this.xb) && (this.A().value = this.c)
    };

    function Km(a, b, c) {
        this.b = a;
        this.f = b;
        X("/playlist_ajax", {
            o: {
                action_get_addto_panel: 1,
                video_id: this.f
            },
            j: function (a, b) {
                Lm(this, b.html);
                c()
            },
            B: this
        })
    }
    p = Km.prototype;
    p.na = function () {
        Mm(this)
    };

    function Lm(a, b) {
        a.b.innerHTML = b;
        a.ca = K("sort-playlists", a.b);
        a.e = K("playlist-items", a.b);
        a.Wc = K("added-to-message", a.b);
        a.Vc = K("added-to-message-title", a.b);
        a.ne = K("note-added-message", a.b);
        a.me = K("note-added-message-title", a.b);
        a.n = K("create-playlist", a.b);
        if (a.n) {
            a.c = K("new-playlist-title", a.b);
            var c = a.c.getAttribute("placeholder"),
                c = new Fm(c),
                d = a.c;
            c.xa && h(Error("Component already rendered"));
            if (d) {
                c.Yc = k;
                if (!c.e || c.e.b != ac(d)) c.e = Zb(d);
                c.tc(d);
                c.rb()
            } else h(Error("Invalid element to decorate"));
            a.Ib = K("create-new-playlist", a.b)
        }
        a.Jb = R(a.ca, "change", t(a.Ie, a));
        a.U = R(a.n, "submit", t(a.Me, a));
        a.H = T(a.b, "click", t(a.Ke, a), "playlist-item-favorite");
        a.L = T(a.b, "click", t(a.Le, a), "playlist-item");
        a.oa = T(a.b, "click", t(a.Oe, a), "save-note");
        a.M = T(a.b, "click", t(a.Je, a), "cancel-note");
        a.Va = R(a.c, "keyup", t(a.Ne, a));
        yk()
    }

    function Mm(a) {
        se(a.Jb);
        se(a.U);
        se(a.H);
        se(a.L);
        se(a.oa);
        se(a.M);
        se(a.Va)
    }
    p.Ie = function (a) {
        var a = {
                created: this.lg,
                privacy: this.mg,
                "a-z": this.Rd,
                "z-a": this.ng
            } [a.currentTarget.value],
            b = Za(I("playlist-item", this.e)),
            c = K("playlist-item-favorite", this.e);
        b.push(c);
        var a = b.sort(t(a, this)),
            d = document.createDocumentFragment();
        w(a, function (a) {
            d.appendChild(a)
        });
        lc(this.e);
        kc(this.e, d)
    };
    p.mg = function (a, b) {
        var c = Q(a, "is-private") || "",
            d = Q(b, "is-private") || "";
        return wa(c, d)
    };
    p.lg = function (a, b) {
        function c(a) {
            return ae(a, "time-created") ? (a = Q(a, "time-created"), parseInt(a, 10)) : (new Date).getTime() / 1E3
        }
        return c(b) - c(a)
    };
    p.Rd = function (a, b) {
        var c = Q(a, "title") || "",
            d = Q(b, "title") || "";
        return wa(c, d)
    };
    p.ng = function (a, b) {
        return this.Rd(b, a)
    };
    p.Me = function (a) {
        a.preventDefault();
        var b = K("create-playlist", this.b);
        ta(this.c.value) || (x(b, "loading"), Jg(b, {
            B: this,
            j: function (a, d) {
                z(b, "loading");
                d.html ? (Mm(this), Lm(this, d.html)) : d.errors && Nm(this, d.errors[0])
            }
        }))
    };

    function Nm(a, b) {
        var c = K("added-to-error-message", a.b);
        K("yt-alert-content", c).innerHTML = b;
        U(c)
    }
    p.Ke = function (a) {
        a.stopPropagation();
        var b = a.currentTarget;
        x(b, "loading");
        X("/addto_ajax", {
            method: "POST",
            format: "XML",
            o: {
                action_add_to_favorites: 1
            },
            C: {
                video_ids: this.f,
                session_token: M("addto_ajax"),
                plid: L("PLAYBACK_ID")
            },
            B: this,
            j: function () {
                z(b, "loading");
                this.Vc.innerHTML = Q(b, "title");
                Om(this, this.Wc);
                Pm(b)
            }
        })
    };
    p.Le = function (a) {
        var b = a.currentTarget;
        if (!B(b, "selected")) {
            a.stopPropagation();
            Qm(this);
            var a = Q(b, "playlist-id"),
                c = F("playlist-addto-top-checkbox").checked ? "True" : "False";
            x(b, "loading");
            X("/addto_ajax", {
                method: "POST",
                format: "XML",
                o: {
                    action_add_to_playlist: 1
                },
                C: {
                    playlist_id: a,
                    video_ids: this.f,
                    session_token: M("addto_ajax"),
                    plid: L("PLAYBACK_ID"),
                    add_to_top: c
                },
                B: this,
                j: function (a, c) {
                    this.nd = c.setvideo_id;
                    z(b, "loading");
                    x(b, "selected");
                    this.Vc.innerHTML = Q(b, "title");
                    Om(this, this.Wc);
                    Pm(b)
                }
            })
        }
    };

    function Pm(a) {
        a = K("playlist-video-count", a);
        a.innerHTML = parseInt(a.innerHTML, 10) + 1
    }
    p.Oe = function (a) {
        a.preventDefault();
        var b = Cc(a.currentTarget, "playlist-note-form");
        x(b, "loading");
        Jg(b, {
            C: {
                session_token: M("playlist_bar_ajax"),
                setvideo_id: this.nd
            },
            B: this,
            j: function () {
                Qm(this);
                z(b, "loading");
                var a = K("playlist-name", b);
                this.me.innerHTML = a.value;
                Om(this, this.ne)
            },
            onError: function (a, d) {
                z(b, "loading");
                Nm(this, d.errors[0])
            }
        })
    };
    p.Je = function () {
        Qm(this)
    };

    function Qm(a) {
        var b = K("selected", a.b);
        b && (z(b, "selected"), a.nd = l)
    }

    function Om(a, b) {
        a.i && V(a.i);
        a.i = b;
        U(b)
    }
    p.Ne = function () {
        this.Ib.disabled = ta(this.c.value)
    };

    function Rm(a, b, c, d, e, f, g) {
        this.k = a;
        this.n = b;
        this.ha = c;
        this.oc = d;
        this.b = !isNaN(parseInt(e, 10));
        this.Xa = l;
        this.b && (this.Xa = e);
        this.i = f || {};
        this.c = !!g;
        window.__GOOGLEAPIS = window.__GOOGLEAPIS || {};
        window.__GOOGLEAPIS.gwidget = window.__GOOGLEAPIS.gwidget || {};
        window.__GOOGLEAPIS.gwidget.lang = this.oc;
        this.b && (window.__GOOGLEAPIS["googleapis.config"] = window.__GOOGLEAPIS["googleapis.config"] || {}, window.__GOOGLEAPIS["googleapis.config"].sessionIndex = this.Xa);
        Ug("https://apis.google.com/js/plusone.js", t(this.f,
            this))
    }
    Rm.prototype.f = function () {
        var a = s("gapi.plusone.render");
        if (a) {
            var b = Math.floor(1E4 * Math.random()),
                c = "__PLUS_ONE_CALLBACK_" + b,
                d = this.k.id;
            d || (d = "plusone-button-" + b, this.k.id = d);
            window[c] = t(this.e, this);
            b = {
                callbackName: c,
                count: "false",
                href: this.ha,
                size: "medium",
                source: "google:youtube"
            };
            this.c && (b.db = 1);
            sb(b, this.i);
            U(this.k);
            a(d, b)
        }
    };
    Rm.prototype.e = function (a) {
        "off" != a.state && (ah("PLUS_ONE", this.n + ""), this.c && Ih(Lf("https://plusone.google.com/_/+1/confirm", {
            url: a.url,
            source: "google:youtube"
        }), {
            width: 480,
            height: 550
        }))
    };

    function Sm(a, b, c) {
        this.c = a;
        this.version = b;
        this.b = c
    }
    Sm.prototype.write = function (a, b, c) {
        var d = M("promo_ajax_token"),
            a = {
                action_write_promo: 1,
                method: a,
                subtype: this.c,
                version: this.version
            };
        this.b && (a.encrypted_video_id = this.b);
        d = {
            session_token: d
        };
        c && (d.json_data = c);
        X("/promo_ajax", {
            method: "POST",
            o: a,
            C: d,
            j: function () {
                if (b && (b.lf && V(F(b.lf)), b.mf && U(F(b.mf)), b.of)) return Gh(b.of)
            },
            onError: function () {
                b && b.nf && U(F(b.nf))
            }
        })
    };

    function Tm(a) {
        var b = F("insight-optout-form");
        b && Jg(b, {
            format: "XML",
            o: {
                opt_out: a
            },
            j: function () {
                var b = F("insight-public");
                C(F("insight-private"), "selected", a);
                C(b, "selected", !a)
            },
            S: function (a, b) {
                F("insight-optout-response").innerHTML = "error_message" in b ? b.error_message : ""
            }
        })
    };

    function Um(a, b, c) {
        var d = {};
        0 === b ? d.action_like_video = 1 : 1 === b ? d.action_dislike_video = 1 : d.action_indifferent_video = 1;
        d.video_id = a;
        d.plid = c.hg;
        a = {
            screen: Df({
                h: screen.height,
                w: screen.width,
                d: screen.colorDepth
            }),
            session_token: M("watch_actions_ajax")
        };
        c.Od && (a.station_id = c.Od);
        X("/watch_actions_ajax", {
            format: "XML",
            method: "POST",
            o: d,
            C: a,
            j: c.j,
            onError: c.onError,
            S: c.S
        });
        0 === b ? Kh("like") : 1 === b && Kh("dislike")
    };

    function Vm(a, b, c, d) {
        this.z = a;
        this.N = b;
        R(this.z, "submit", t(this.c, this));
        a = t(this.b, this);
        te(this.N, "click", a, function (a) {
            return "li" === a.nodeName.toLowerCase() && k
        });
        R(F("flag-video-cancel"), "click", function (a) {
            a.preventDefault();
            c()
        });
        this.Sb = d
    }
    Vm.prototype.b = function (a) {
        var b, a = a.currentTarget,
            c = nh.getInstance(),
            d = wh(c, this.N);
        qh(c, d);
        c = K(Y(c, "content"), d);
        d = K("label", a);
        c.innerHTML = yc(d);
        c = I("selected", this.N);
        w(c, function (a) {
            z(a, "selected", "child-selected")
        });
        x(a, "selected");
        d = "";
        if (c = Q(a, "subreason") || "") {
            var e = Ac(a.parentNode, "li"),
                d = Q(e, "reason") || "";
            x(e, "selected", "child-selected")
        } else d = Q(a, "reason") || "";
        b = d;
        var d = Q(a, "show-textbox-with-label"),
            e = !!Q(a, "include-time"),
            f = !!Q(a, "show-hate-group"),
            g = Q(a, "popup-url"),
            i = Q(a, "result-message") ||
            "default",
            a = !!Q(a, "no-post");
        this.z.reason.value = b;
        this.z.sub_reason.value = c;
        c = F("flag-video-more-info-comment");
        d && (F("flag-video-more-info-textarea-label").innerHTML = d);
        lf(c, !!d);
        lf(F("flag-video-more-info-time"), e);
        lf(F("flag-video-more-info-hate-group"), f);
        g && Hh(g, {
            target: "atmfc",
            width: 900,
            height: 700,
            left: 0,
            top: 0,
            status: "yes",
            toolbar: "no",
            menubar: "no",
            location: "no",
            scrollbars: "yes"
        });
        a ? (V(this.z), Wm(i)) : (P(this.z, "result-message", i), U(this.z))
    };
    Vm.prototype.c = function (a) {
        a.preventDefault();
        var b = F("flag-video-submit");
        b.disabled = k;
        var c = Q(this.z, "result-message");
        X(this.z.action, {
            format: "XML",
            method: "POST",
            Ra: Qc(this.z),
            j: function () {
                Wm(c);
                this.Sb.call(q)
            },
            onError: function (a, c) {
                Xm();
                var f = F("flag-video-error");
                c && c.error_message && (K("yt-alert-content", f).innerHTML = c.error_message);
                U(f);
                b.disabled = m
            },
            B: this
        })
    };

    function Wm(a) {
        Xm();
        V("flag-video-form-container");
        U("flag-video-result-" + a)
    }

    function Xm() {
        var a = I("flag-video-result", F("flag-video-results-container"));
        w(a, function (a) {
            V(a)
        })
    };
    var Ym, Zm;

    function $m() {
        var a = F("watch-like-unlike");
        return B(a, "liked") ? 0 : B(a, "unliked") ? 1 : 2
    }

    function an(a) {
        var b = F("watch-like-unlike"),
            b = I(Y(nh.getInstance()), b);
        w(b, function (b) {
            B(b, "yt-always-enabled") || (b.disabled = !a)
        })
    }

    function bn(a) {
        if (!L("LOGGED_IN")) {
            var b = "rating-enabled=" + L("ALLOW_RATINGS");
            0 === a ? Zg("logged-out-like", b, j) : 1 === a && Zg("logged-out-dislike", b, j)
        }
        if (L("ALLOW_RATINGS")) {
            if (b = !cn()) L("YPC_CAN_RATE_VIDEO") ? b = m : (dn("watch-actions-rental-required"), b = k), b = !b;
            if (b)
                if (L("YPC_SHOW_VPPA_CONFIRM_RATING") && !confirm(O("VPPA_CONFIRM"))) en();
                else {
                    2 !== a && fn();
                    an(m);
                    gn(a);
                    var b = {
                            hg: L("PLAYBACK_ID"),
                            Od: L("STATION_ID"),
                            j: function (b, c) {
                                var f = F("watch-like-unlike");
                                0 === a ? A(f, "unliked", "liked") : 1 === a ? A(f, "liked", "unliked") :
                                    z(f, "liked", "unliked");
                                2 !== a && (hn(c.html_content), Oi(F("watch-actions-ajax")));
                                gn(a)
                            },
                            onError: jn,
                            S: function () {
                                an(k)
                            }
                        },
                        c = L("VIDEO_ID"),
                        b = b || {};
                    Og("watch_actions_ajax", t(Um, q, c, a, b), b.onError)
                }
        } else dn("watch-actions-ratings-disabled")
    }

    function gn(a) {
        var b = F("watch-like-hovercard-plusone-liked"),
            c = F("watch-like-hovercard-plusone-not-liked");
        b && c && (0 === a ? (x(b, "hid"), z(c, "hid")) : (z(b, "hid"), x(c, "hid")))
    }

    function kn(a, b) {
        var c = a || F("watch-flag");
        if (ln(c) && !cn()) {
            fn();
            var d = 0,
                e = sk();
            e && e.pauseVideo && (e.pauseVideo(), d = e.getCurrentTime());
            d = Math.floor(d);
            e = Math.floor(d / 60);
            d = {
                action_get_flag_video_component: 1,
                video_id: L("VIDEO_ID"),
                t_mins: e,
                t_secs: d - 60 * e
            };
            b && (d.from_dislike = 1);
            X("/watch_ajax", {
                format: "XML",
                method: "GET",
                o: d,
                j: function (a, b) {
                    hn(b.html_content);
                    var d = F("flag-video-form"),
                        e = F("flag-video-menu");
                    d && e && new Vm(d, e, function () {
                        en()
                    }, function () {
                        c.disabled = k
                    })
                },
                onError: jn
            })
        }
    }
    var mn = l,
        nn = l;

    function on() {
        if (hk()) var a = pn("watch-actions-share"),
            a = K("yt-uix-button-toggled", a),
            a = Q(a, "video-id");
        else a = L("VIDEO_ID");
        return a
    }

    function qn() {
        var a = l;
        hk() && F("share-with-playlist").checked && (a = ck ? dk().Qa() : l);
        return a
    }

    function rn(a, b) {
        if (ln(a)) {
            var c = on(),
                d = qn();
            sn(c, d, b)
        }
    }

    function sn(a, b, c) {
        var d = pn("watch-actions-share-panel");
        a != mn || b != nn ? (mn = a, nn = b, dn("watch-actions-share"), U("watch-actions-share-loading"), W("watch-actions-player-sidebar-height-changed"), V("watch-actions-share-panel"), Ym = new Dk(d, a, b, function () {
            V("watch-actions-share-loading");
            dn("watch-actions-share-panel")
        })) : (dn("watch-actions-share"), dn("watch-actions-share-panel"), Ym.ua(), W("watch-actions-player-sidebar-height-changed"));
        c ? Zg("shareOpenedFromFlash", j, j) : Zg("shareOpenedFromActionBar", j, j);
        var e =
            sk(),
            f = Td(function () {
                var a = B(F("watch-share"), "active");
                if (!e || !a) Vd(f);
                else {
                    for (var a = [], b = Math.floor(e.getCurrentTime()); 0 < b;) a.unshift(b % 60), b = Math.floor(b / 60);
                    for (; 2 > a.length;) a.unshift(0);
                    a = Ra(a, function (a, b) {
                        return 0 < b && 10 > a ? "0" + a : a
                    });
                    a = a.join(":");
                    b = Ym;
                    b.aa && (!B(b.aa, "focused") && !b.U) && (b.aa.value = a, b.Rb())
                }
            }, 1E3);
        Kh("share")
    }

    function ln(a) {
        var b = !B(a, "active");
        en();
        b && (x(a, "active"), Ch(Ah.getInstance(), a));
        return b
    }

    function fn() {
        dn("watch-actions-loading");
        W("watch-actions-player-sidebar-height-changed")
    }

    function hn(a) {
        pn("watch-actions-ajax").innerHTML = a;
        dn("watch-actions-ajax")
    }

    function jn(a, b) {
        var c = b && b.error_message;
        c || (c = O("WATCH_ERROR_MESSAGE"));
        pn("watch-error-string").innerHTML = c;
        dn("watch-actions-error")
    }
    var tn = {};

    function pn(a) {
        a in tn || (tn[a] = F(a));
        return tn[a]
    }

    function dn(a) {
        var b = pn("watch-actions-area-container"),
            a = pn(a),
            c = pn("watch-actions-loading"),
            d = pn("watch-actions-area");
        mf(b) || (b.style.height = "0px", U(b));
        V(c);
        U(a);
        x(b, "transitioning");
        var e = d.offsetHeight + "px";
        N(function () {
            b.style.height = e;
            W("watch-actions-player-sidebar-height-changed")
        }, 0);
        N(function () {
            b.style.height == e && (z(b, "transitioning"), b.style.height = "auto")
        }, 500)
    }

    function en() {
        var a = pn("watch-actions-area-container");
        V(a);
        a = I("watch-actions-panel", a);
        w(a, function (a) {
            V(a)
        });
        W("watch-actions-player-sidebar-height-changed");
        pn("watch-actions-ajax").innerHTML = "";
        var a = pn("watch-actions"),
            b = pn("watch-subactions"),
            a = J("button", l, a);
        b && (b = J("button", l, b), $a(Za(a), Za(b)));
        w(a, function (a) {
            z(a, "active")
        })
    }

    function cn() {
        return !L("LOGGED_IN") ? (dn("watch-actions-logged-out"), k) : m
    };
    var un, vn, wn;

    function xn(a) {
        this.b = a;
        this.N = F("shared-addto-menu");
        this.f = Q(this.b, "feature") || "";
        this.i = B(this.b, "watch");
        this.c = Q(this.b, "video-ids") || "";
        this.K = this.c.split(",");
        da(wn) || (wn = B(this.N, "lightweight-panel"));
        (a = K("sign-in", this.N)) ? R(a, "click", t(this.Fe, this)): (a = {
            action_get_dropdown: "1"
        }, this.f && (a.feature = this.f), X("/addto_ajax", {
            pb: k,
            format: "XML",
            method: "GET",
            B: this,
            o: a,
            j: function (a, c) {
                this.N.innerHTML = c.html_content || "";
                C(this.N, "ie", E);
                this.Na();
                var d = [];
                $a(d, I("playlist-name", this.l.list));
                $a(d, I("label-name", this.l.list));
                w(d, function (a) {
                    function b(a) {
                        var c = [],
                            d;
                        for (d = 0; d < a.length; d++) c.push(a[d]), y[d] && c.push(y[d]);
                        y[d] && y[d].match(/^<\s*\//) && c.push(y[d]);
                        c = c.join("");
                        return c.length < r.length ? c + "&hellip;" : c
                    }
                    var c = F(a),
                        d, n = F(c);
                    d = fe(n);
                    c.parentNode.appendChild(d);
                    d.style.whiteSpace = "normal";
                    d.style.lineHeight = "1.5em";
                    var r = Q(n, "original-html");
                    r || (r = n.innerHTML.replace(/^\s+|\s+$/, ""), P(n, "original-html", r));
                    for (var n = /<[^>]+>/g, y = r.match(n) || [], n = r.replace(n, "<wbr>").split("<wbr>"),
                            D = d.innerHTML, G = "", H = 0; 1 > H; H++) G += "&nbsp;<br>";
                    d.innerHTML = G;
                    G = d.clientHeight || d.offsetHeight;
                    d.innerHTML = D;
                    for (var D = 0, H = n.join("").length + 1, ka = []; D < H;) {
                        var ua = D + Math.round((H - D) / 2),
                            S;
                        S = ua;
                        for (var Wa = [], xa = 0, Ca = n.length; xa < Ca && 0 < S; xa++) {
                            var Ka = n[xa];
                            Wa.push(Ka.substring(0, S));
                            S -= Ka.length
                        }
                        S = Wa;
                        d.innerHTML = b(S);
                        Wa = (d.clientHeight || d.offsetHeight) <= G;
                        d.innerHTML = "";
                        Wa ? (ka = S, D = ua + 1) : H = ua - 1
                    }
                    mc(d);
                    d = b(ka);
                    n = c.innerHTML != d;
                    c.innerHTML = d;
                    n && (a = Cc(a, "yt-uix-button-menu-item"), a.title = Q(a, "possible-tooltip"))
                })
            }
        }))
    }
    p = xn.prototype;
    p.Na = function () {
        this.l = {};
        this.l.list = F("addto-list-panel");
        this.l.Gc = F("addto-list-saved-panel");
        this.l.Zb = F("addto-list-error-panel");
        this.l.Fa = F("addto-note-input-panel");
        this.l.yd = F("addto-note-saving-panel");
        this.l.Md = F("addto-note-saved-panel");
        this.l.Hc = F("addto-note-error-panel");
        this.l.sa = F("addto-create-panel");
        this.e = this.l.list;
        T(this.l.list, "click", t(this.Zf, this), "yt-uix-button-menu-item");
        this.Qb = K("playlist-save-note", this.l.Fa);
        R(this.Qb, "click", t(this.$f, this));
        var a = K("close-button",
            this.N);
        R(a, "click", t(this.Yf, this))
    };
    p.Zf = function (a) {
        a.stopPropagation();
        var b = a.currentTarget;
        Ch(Ah.getInstance(), b);
        this.H = m;
        var a = Q(b, "list-action"),
            c = Q(b, "item-id") || "",
            b = Q(b, "item-name") || "";
        switch (a) {
        case "create-playlist":
            yn(this, this.l.sa, k);
            this.wd = K("addto-create-playlist", this.l.sa);
            this.xd = K("addto-create-playlist-label", this.l.sa);
            this.Ib = K("create-playlist-button", this.l.sa);
            this.Cc = K("privacy-form", this.l.sa);
            T(this.Cc, "click", t(this.Dc, this), "playlist-privacy-option");
            $d(this.N, "video-ids");
            var d = F("addto-create-playlist");
            R(d, "keydown", t(this.Dc, this));
            R(d, "paste", t(this.Dc, this));
            zn(this.l.sa, function () {
                d.focus()
            });
            a = K("addto-create-cancel-button", this.l.sa);
            R(a, "click", t(function () {
                An(this)
            }, this));
            a = K("create-playlist-button", this.l.sa);
            R(a, "click", t(this.yf, this));
            break;
        case "favorites":
            this.H = k;
            Bn(this, "FL");
            Cn(this, b);
            break;
        case "watch-later":
            Bn(this, "WL");
            Cn(this, b);
            break;
        case "playlist":
            Bn(this, "PL", c);
            1 < this.K.length ? Cn(this, b) : Dn(this, b);
            break;
        case "label":
            X("/labels_ajax", {
                method: "POST",
                o: {
                    action_add_members: 1
                },
                C: {
                    session_token: M("labels_ajax"),
                    label_id: c,
                    video_ids: this.c.split(",")
                },
                B: this
            }), Cn(this, b)
        }
    };

    function Cn(a, b) {
        K("addto-title", a.l.Gc).innerHTML = b;
        z(a.N, "lightweight-panel");
        yn(a, a.l.Gc, k);
        var c = K("close-note", a.N);
        U(c)
    }

    function Dn(a, b) {
        K("addto-title", a.l.Fa).innerHTML = za(b);
        yn(a, a.l.Fa, k);
        var c = K("close-note", a.N);
        U(c);
        var d = F("addto-note");
        R(d, "keydown", t(a.Td, a));
        R(d, "paste", t(a.Td, a));
        zn(a.l.Fa, function () {
            d.focus()
        })
    }

    function zn(a, b) {
        if (b) {
            var c = Fb ? "webkitTransitionEnd" : Db ? "oTransitionEnd" : Eb ? "transitionend" : E && Sb(10) ? "MSTransitionEnd" : l;
            c ? re(a, c, function () {
                b()
            }) : b()
        }
    }
    p.Td = function (a) {
        var b = a.target,
            c = K("addto-note-label", this.l.Fa);
        N(t(function () {
            var a = ta(b.value);
            a ? U(c) : V(c);
            !a && this.P && this.zc ? ie(this.Qb, k) : ie(this.Qb, m)
        }, this), 0)
    };

    function yn(a, b, c) {
        var c = c ? "slide" : "fade",
            d = ["fade", "slide"];
        A(a.e, d, c);
        A(b, d, c);
        wn && b == a.l.list && x(a.N, "lightweight-panel");
        B(b, "dismissed-panel") ? (z(b, "dismissed-panel"), z(a.e, "active-panel")) : hb(a.e, "active-panel", "dismissed-panel");
        x(b, "active-panel");
        a.e = b
    }
    p.yf = function () {
        var a = this.wd.value;
        this.bg = k;
        var b = parseInt(Tc(this.Cc), 10);
        Bn(this, "PL", l, a, b);
        1 < this.K.length ? An(this) : Dn(this, a)
    };
    p.Dc = function () {
        N(t(function () {
            var a = ta(this.wd.value);
            a ? U(this.xd) : V(this.xd);
            var b = Tc(this.Cc);
            a || !b ? ie(this.Ib, m) : ie(this.Ib, k)
        }, this), 0)
    };
    p.Yf = function () {
        An(this)
    };

    function An(a) {
        var b = nh.getInstance(),
            c = wh(b, a.N);
        c && Q(c, "video-ids") == a.c && qh(b, c)
    }

    function Bn(a, b, c, d, e) {
        a.n = b;
        Bm({
            $c: a.c,
            Zc: a.n,
            xe: c,
            bd: d,
            ad: e,
            qc: a.f,
            j: a.Qe,
            onError: a.Pe,
            B: a
        });
        $d(a.N, "video-ids");
        b = "";
        switch (a.n) {
        case "PL":
            b = d ? "new_pl" : "pl";
            break;
        case "FL":
            b = "fav";
            break;
        case "WL":
            b = "wl"
        }
        d = {
            list: b,
            feature: a.f
        };
        if ((b = Ac(a.b, "a", l)) && b.href) b = Jf(b.href), d.link_feature = b.feature || "";
        d = Df(d);
        Zg("addto", d, j);
        a.i && Kh("add_to_playlist")
    }
    p.Qe = function (a, b) {
        this.P = b.list_id || "";
        this.zc = b.setvideo_id || "";
        var c = b.html_content || "",
            d = b.list_url || "";
        if (this.P && this.zc) {
            var e = K("addto-title", this.N),
                f = document.createElement("a");
            f.href = d;
            f.innerHTML = e.innerHTML;
            lc(e);
            e.appendChild(f);
            ta(F("addto-note").value) || ie(this.Qb, k)
        }
        if (!this.i && (d = Cc(this.b, "ux-thumb-wrap")))(e = K("video-in-quicklist", d)) && mc(e), e = document.createElement("span"), e.className = "video-in-quicklist", e.innerHTML = c, d.appendChild(e);
        c = O("PLAYLIST_BAR_ADDED_TO_PLAYLIST");
        this.H &&
            (c = O("PLAYLIST_BAR_ADDED_TO_FAVORITES"));
        fk(this.n, this.P, c, this.K, this.K.length, this.K)
    };
    p.Pe = function (a, b) {
        var c = b && b.error_message;
        if (c) {
            K("error-details", this.l.Zb).innerHTML = c;
            var c = K("show-menu-link", this.l.Zb),
                d = R(c, "click", t(function (a) {
                    a.preventDefault();
                    se(d);
                    z(this.l.Fa, "dismissed-panel", "fade", "slide");
                    z(this.l.Gc, "dismissed-panel", "fade", "slide");
                    a = K("close-note", this.N);
                    V(a);
                    this.bg ? yn(this, this.l.sa, k) : yn(this, this.l.list, k)
                }, this));
            if (c = F("addto-create-name")) c.disabled = m;
            z(this.l.Zb, "dismissed-panel", "fade", "slide");
            yn(this, this.l.Zb)
        } else An(this);
        this.i && jn(0, b)
    };
    p.$f = function () {
        X("/playlist_bar_ajax", {
            method: "POST",
            pb: k,
            o: {
                action_set_playlist_item_annotation: 1
            },
            C: {
                annotation: F("addto-note").value,
                playlist_id: this.P,
                setvideo_id: this.zc,
                session_token: M("playlist_bar_ajax")
            },
            j: this.Uf,
            onError: this.Tf,
            B: this
        });
        yn(this, this.l.yd)
    };
    p.Uf = function () {
        var a = K("addto-title", this.l.Fa),
            b = fe(a);
        x(b, "yt-uix-tooltip-reverse");
        K("panel-content", this.l.Md).appendChild(b);
        yn(this, this.l.Md);
        N(t(function () {
            Ch(Ah.getInstance(), b);
            An(this)
        }, this), 3E3)
    };
    p.Tf = function (a, b) {
        var c = b && b.errors;
        if (c) {
            var d = K("error-details", this.l.Hc);
            lc(d);
            w(c, function (a) {
                var b = document.createElement("li");
                b.innerHTML = a;
                d.appendChild(b)
            });
            var c = K("add-note-link", this.l.Hc),
                e = R(c, "click", t(function (a) {
                    a.preventDefault();
                    se(e);
                    z(this.l.yd, "dismissed-panel");
                    yn(this, this.l.Fa)
                }, this));
            yn(this, this.l.Hc)
        } else An(this)
    };
    p.Fe = function () {
        var a = Nf("/addto_ajax", {
                action_redirect_to_signin_with_add: 1,
                list_type: "WL",
                video_ids: this.c,
                next_url: document.location
            }),
            b = document.createElement("form");
        b.action = a;
        b.method = "POST";
        a = document.createElement("input");
        a.type = "hidden";
        a.name = "session_token";
        a.value = M("addto_ajax_logged_out");
        b.appendChild(a);
        document.body.appendChild(b);
        b.submit()
    };
    var En = "";

    function Fn() {
        gh("addto-watch-later-button", "click", Gn);
        gh("addto-watch-later-button-success", "click", Hn);
        gh("addto-watch-later-button-sign-in", "click", In);
        T(F("shared-addto-watch-later-login"), "click", Jn, "sign-in-link")
    }

    function In(a) {
        En = Q(a, "video-ids")
    }

    function Jn(a) {
        var b = Nf("/addto_ajax", {
                action_redirect_to_signin_with_add: 1,
                list_type: "WL",
                video_ids: En,
                next_url: document.location
            }),
            c = document.createElement("form");
        c.action = b;
        c.method = "POST";
        b = document.createElement("input");
        b.type = "hidden";
        b.name = "session_token";
        b.value = M("addto_ajax_logged_out");
        c.appendChild(b);
        document.body.appendChild(c);
        c.submit();
        a.preventDefault()
    }

    function Gn(a) {
        hb(a, "addto-watch-later-button", "addto-watch-later-button-loading");
        var b = Q(a, "video-ids");
        X("/addto_ajax", {
            method: "POST",
            format: "XML",
            o: {
                action_add_to_watch_later_list: 1
            },
            C: {
                session_token: M("addto_ajax"),
                video_ids: b
            },
            j: function (c, d) {
                Kn(d.list_id, b, a)
            },
            onError: function (c, d) {
                6 == d.return_code ? Kn(d.list_id, b, a) : Ln(a, d)
            }
        })
    }

    function Hn(a) {
        hb(a, "addto-watch-later-button-success", "addto-watch-later-button-loading");
        var b = Q(a, "video-ids");
        X("/addto_ajax", {
            method: "POST",
            format: "XML",
            o: {
                action_delete_from_watch_later_list: 1
            },
            C: {
                session_token: M("addto_ajax"),
                video_ids: b
            },
            j: function () {
                hb(a, "addto-watch-later-button-loading", "addto-watch-later-button")
            },
            onError: function (b, d) {
                Ln(a, d)
            }
        })
    }

    function Kn(a, b, c) {
        hb(c, "addto-watch-later-button-loading", "addto-watch-later-button-success");
        var d = O("ADDTO_WATCH_LATER_ADDED");
        Dh(Ah.getInstance(), c, d);
        c = O("PLAYLIST_BAR_ADDED_TO_PLAYLIST");
        fk("WL", a, c, l, 0, b.split(","))
    }

    function Ln(a, b) {
        hb(a, "addto-watch-later-button-loading", "addto-watch-later-button-error");
        var c = b.error_message || O("ADDTO_WATCH_LATER_ERROR");
        Dh(Ah.getInstance(), a, c)
    };
    var Mn = m;
    var Nn = window,
        On = document,
        Pn = Nn.location;

    function Qn() {}
    var Rn = /\[native code\]/;

    function Sn(a, b, c) {
        return a[b] = a[b] || c
    }

    function Tn(a) {
        for (var b = 0; b < this.length; b++)
            if (this[b] === a) return b;
        return -1
    }

    function Un() {
        var a;
        if ((a = Object.create) && Rn.test(a)) a = a(l);
        else {
            a = {};
            for (var b in a) a[b] = j
        }
        return a
    }
    var Vn = Sn(Nn, "gapi", {});
    var Wn;
    Wn = Sn(Nn, "___jsl", Un());
    Sn(Wn, "I", 0);
    Sn(Wn, "hel", 10);

    function Xn() {
        var a = Pn.href,
            b;
        if (Wn.dpo) b = Wn.h;
        else {
            b = Wn.h;
            var c = RegExp("([#].*&|[#])jsh=([^&#]*)", "g"),
                d = RegExp("([?#].*&|[?#])jsh=([^&#]*)", "g");
            if (a = a && (c.exec(a) || d.exec(a))) try {
                b = decodeURIComponent(a[2])
            } catch (e) {}
        }
        return b
    }

    function Yn(a) {
        return Sn(Sn(Wn, "H", Un()), a, Un())
    };
    var Zn = Sn(Wn, "perf", Un());
    Sn(Zn, "g", Un());
    var $n = Sn(Zn, "i", Un());
    Sn(Zn, "r", []);
    Un();
    Un();

    function ao(a, b, c) {
        b && 0 < b.length && (b = bo(b), c && 0 < c.length && (b += "___" + bo(c)), c = b, b = Sn($n, "_p", Un()), Sn(b, c, Un())[a] = (new Date).getTime(), b = Zn.r, "function" === typeof b ? b(a, "_p", c) : b.push([a, "_p", c]))
    }

    function bo(a) {
        return a.join("__").replace(/\./g, "_").replace(/\-/g, "_").replace(/\,/g, "_")
    };
    var co = Un(),
        eo = [],
        fo;
    fo = {
        ee: "callback",
        Eg: "sync",
        Ag: "config",
        Bg: "_c",
        Cg: "h",
        jj: "platform",
        fh: "jsl",
        TIMEOUT: "timeout",
        Dg: "ontimeout"
    };
    eo.push([fo.fh, function (a) {
        for (var b in a)
            if (Object.prototype.hasOwnProperty.call(a, b)) {
                var c = a[b];
                "object" == typeof c ? Wn[b] = Sn(Wn, b, []).concat(c) : Sn(Wn, b, c)
            } if (a = a.u) b = Sn(Wn, "us", []), b.push(a), (c = /^https:(.*)$/.exec(a)) && b.push("http:" + c[1]), Sn(Wn, "u", a)
    }]);
    var go = decodeURI("%73cript");
    co.m = function (a) {
        var b = Wn.ms || "https://apis.google.com",
            a = a[0],
            c;
        if (!(c = !a)) c = 0 <= a.indexOf("..");
        c && h("Bad hint");
        return b + "/" + a.replace(/^\//, "")
    };

    function ho(a) {
        return a.join(",").replace(/\./g, "_").replace(/-/g, "_")
    }

    function io(a, b) {
        for (var c = [], d = 0; d < a.length; ++d) {
            var e = a[d];
            e && 0 > Tn.call(b, e) && c.push(e)
        }
        return c
    }
    var jo = /[@"'<>#\?&%]/,
        ko = /^https?:\/\/[^\/\?#]+\.google\.com(:\d+)?\/[^\?#]+$/,
        lo = /\/cb=/g;

    function mo(a) {
        var b = On.createElement(go);
        b.setAttribute("src", a);
        b.async = "true";
        a = On.getElementsByTagName(go)[0];
        a.parentNode.insertBefore(b, a)
    }

    function no(a, b) {
        function c(a, b) {
            if (ka) return 0;
            Nn.clearTimeout(H);
            ua.push.apply(ua, xa);
            var c = ((Vn || {}).config || {}).update;
            c ? c(D) : D && Sn(Wn, "cu", []).push(D);
            if (b) {
                ao("me0", a, S);
                try {
                    oo(function () {
                        var a;
                        a = r === Xn() ? Sn(Vn, "_", Un()) : Un();
                        a = Sn(Yn(r), "_", a);
                        b(a)
                    })
                } finally {
                    ao("me1", a, S)
                }
            }
            y && y();
            return 1
        }
        var d = b || {};
        "function" == typeof b && (d = {}, d[fo.ee] = b);
        var e = d,
            f = e && e[fo.Bg];
        if (f)
            for (var g = 0; g < eo.length; g++) {
                var i = eo[g][0],
                    n = eo[g][1];
                n && Object.prototype.hasOwnProperty.call(f, i) && n(f[i], a, e)
            }
        if (!(e = d[fo.Cg]))(e =
            Xn()) || h("Bad hint");
        var r = e,
            y = d[fo.ee],
            D = d[fo.Ag],
            f = d[fo.TIMEOUT],
            G = d[fo.Dg],
            H = l,
            ka = m;
        (f && !G || !f && G) && h("Timeout requires both the timeout parameter and ontimeout parameter to be set");
        var e = Sn(Yn(r), "r", []).sort(),
            ua = Sn(Yn(r), "L", []).sort(),
            S = [].concat(e);
        0 < f && (H = Nn.setTimeout(function () {
            ka = k;
            G()
        }, f));
        if (a) {
            f = a.split(":").sort();
            g = [];
            i = j;
            for (n = 0; n < f.length; n++) {
                var Wa = f[n];
                Wa != i && g.push(Wa);
                i = Wa
            }
            f = g
        } else f = [];
        var xa = io(f, ua);
        if (!xa.length) return c(xa);
        var xa = io(f, e),
            Ca = Sn(Wn, "CP", []),
            Ka = Ca.length;
        Ca[Ka] = function (a) {
            function b() {
                Ca[Ka] = l;
                return c(xa, a)
            }
            if (!a) return 0;
            ao("ml1", xa, S);
            if (0 < Ka && Ca[Ka - 1]) Ca[Ka] = b;
            else {
                b();
                for (var d;
                    (d = Ca[++Ka]) && d(););
            }
        };
        if (!xa.length) return Ca[Ka](Qn);
        var ed = "loaded_" + Wn.I++;
        Vn[ed] = function (a) {
            Ca[Ka](a);
            Vn[ed] = l
        };
        f = r.split(";");
        (f = (g = co[f.shift()]) && g(f)) || h("Bad hint:" + r);
        g = f = f.replace("__features__", ho(xa)).replace(/\/$/, "") + (e.length ? "/ed=1/exm=" + ho(e) : "") + ("/cb=gapi." + ed);
        i = g.match(lo);
        (!i || !(1 === i.length && ko.test(g) && !jo.test(g))) && h("Bad URL " + f);
        e.push.apply(e,
            xa);
        ao("ml0", xa, S);
        d[fo.Eg] || Nn.___gapisync ? (d = f, "loading" != On.readyState ? mo(d) : On.write("<" + go + ' src="' + encodeURI(d) + '"></' + go + ">")) : mo(f)
    };

    function oo(a) {
        if (Wn.hee && 0 < Wn.hel) try {
            return a()
        } catch (b) {
            Wn.hel--, no("debug_error", function () {
                window.___jsl.hefn(b)
            })
        } else return a()
    };
    Vn.load = function (a, b) {
        return oo(function () {
            return no(a, b)
        })
    };
    var po = -2;

    function qo() {
        if (-2 == po) {
            po = parseInt(Fe("ACTIVITY", "-1"), 10);
            R(document, "keypress", ro);
            R(document, "click", so);
            var a = L("LIST_AUTO_PLAY_VALUE");
            a && 1 < a || to()
        }
    }

    function ro() {
        to()
    }

    function so() {
        to()
    }

    function to() {
        qo();
        var a = qa();
        1E3 > a - po || (po = a, Ee("ACTIVITY", "" + a))
    }

    function uo() {
        return -1 == po || -2 == po ? -1 : Math.max(qa() - po, 0)
    };

    function vo(a, b, c, d, e, f) {
        this.b = l;
        this.qf = c;
        this.f = a;
        this.n = b;
        this.e = d;
        this.i = L("GOOGLEPLUS_HOST") + (e != l ? "/u/" + e : "") + (f != l ? "/b/" + f : "") + "/_/notifications/frame#pid=36";
        this.pf = F(a)
    }

    function wo(a, b, c, d) {
        return {
            onOpen: t(function (a) {
                return a.openInto(c)
            }, a),
            onReady: t(function () {
                b.showOnepick && d && b.showOnepick()
            }, a),
            onClose: function (a) {
                b.hideOnepick && d && b.hideOnepick();
                a.remove()
            }
        }
    }

    function xo(a, b, c) {
        if ("undefined" === typeof c) a[b]();
        else a[b](c)
    }
    vo.prototype.load = function (a) {
        iframes.setHandler("iframe-style", wo(this, a, this.f, m));
        iframes.setHandler("onepick", wo(this, a, this.n, k));
        var b = {
            setNotificationWidgetHeight: t(function (a) {
                this.pf.style.height = a
            }, this),
            setNotificationText: t(function (a) {
                this.qf(parseInt(a, 10))
            }, this),
            hideNotificationWidget: function () {
                a.hideNotificationWidget && a.hideNotificationWidget()
            },
            openSharebox: function () {},
            onError: function () {}
        };
        this.b = iframes.open(this.i, {
            style: "iframe-style"
        }, {
            origin: window.location.protocol + "//" +
                window.location.hostname,
            source: "yt",
            hl: this.e
        }, b, function () {})
    };
    vo.prototype.close = function () {
        xo(this.b, "onHide")
    };
    vo.prototype.c = function () {
        return cc(window).height - 60 - 20
    };

    function yo(a, b) {
        b ? xo(a.b, "onActive") : xo(a.b, "onIdle")
    };

    function zo(a, b, c) {
        this.e = this.c = m;
        this.n = 0;
        this.k = F("sb-container");
        this.f = F("sb-button-notify");
        this.H = he("SPAN", "yt-uix-button-content", F("sb-button-notify"));
        this.i = F("sb-onepick-target");
        this.b = new vo("sb-target", "sb-onepick-target", t(this.Be, this), a, b, c);
        this.b.load({
            hideNotificationWidget: t(this.cd, this),
            showOnepick: t(this.Ae, this),
            hideOnepick: t(this.ze, this)
        });
        this.L = ef(this.i);
        this.dd();
        R(window, "resize", t(this.dd, this));
        R(window, "click", t(this.cd, this));
        qo();
        Td(t(this.ye, this), 12E4)
    }
    p = zo.prototype;
    p.ah = function (a) {
        if (this.c) Ao(this), yo(this.b, k);
        else {
            this.e && Bo(this);
            this.b.close();
            Co(this, k, "notif");
            x(this.f, "sb-notif-clicked");
            pk();
            var b = this.b,
                c = {
                    maxWidgetHeight: b.c()
                };
            xo(b.b, "onShowNotificationsOnly", c);
            this.c = k;
            yo(this.b, m)
        }
        we(a)
    };
    p.bh = function (a) {
        if (this.e) Bo(this);
        else {
            this.c && Ao(this);
            this.b.close();
            Co(this, k, "sharebox");
            pk();
            var b = this.b,
                c = window.location.href; - 1 != c.indexOf("/watch?") && xo(b.b, "setPrefill", {
                items: [{
                    type: "http://schema.org/VideoObject",
                    id: c,
                    properties: {
                        url: [c]
                    }
                }]
            });
            xo(b.b, "onShowShareboxOnly", {
                maxWidgetHeight: b.c
            });
            this.e = k
        }
        we(a)
    };

    function Co(a, b, c) {
        c = "sb-card-" + c;
        b ? (A(a.k, "sb-off", "sb-on"), x(a.k, c)) : (A(a.k, "sb-on", "sb-off"), z(a.k, c))
    }

    function Bo(a) {
        rk();
        Co(a, m, "sharebox");
        a.e = m
    }

    function Ao(a) {
        rk();
        Co(a, m, "notif");
        a.c = m;
        z(a.f, "sb-notif-clicked")
    }
    p.cd = function () {
        if (this.c || this.e) this.b.close(), Ao(this), Bo(this), Do(this)
    };
    p.Be = function (a) {
        this.n = a;
        Do(this)
    };

    function Do(a) {
        tc(a.H, a.n + "");
        0 == a.n ? A(a.f, "sb-notif-on", "sb-notif-off") : A(a.f, "sb-notif-off", "sb-notif-on")
    }
    p.Ae = function () {
        A(this.i, "sb-off", "sb-on")
    };
    p.ze = function () {
        A(this.i, "sb-on", "sb-off")
    };
    p.dd = function () {
        var a = Math.max((cc(window).height - this.L.height) / 2, 0);
        Se(this.i, "top", a + "px")
    };
    p.ye = function () {
        6E5 < uo() ? yo(this.b, m) : yo(this.b, k)
    };

    function Eo(a) {
        T(a, "mouseover", t(Fo, a), "group-header");
        T(a, "mouseout", t(Go, a), "group-header")
    }

    function Fo() {
        x(this, "header-hover")
    }

    function Go() {
        z(this, "header-hover")
    };
    var Ho, Io;

    function Jo(a, b) {
        this.Sb = a;
        this.b = b;
        this.userData = {}
    }
    Jo.prototype.be = function () {
        return {}
    };
    Jo.prototype.le = function (a) {
        this.Sb(this, a)
    };
    Jo.prototype.Qc = function (a) {
        this.b(this, a)
    };

    function Ko(a, b) {
        Jo.call(this, a, b)
    }
    v(Ko, Jo);
    p = Ko.prototype;
    p.ha = "/subscription_ajax";
    p.jb = {};

    function Lo(a, b) {
        a.ha = Lf(a.ha, b)
    }
    p.be = function () {
        return this.jb
    };
    p.le = function (a) {
        var b = l,
            c = [O("SUBSCRIBE_SERVER_ERROR")];
        try {
            b = wg(a.responseText)
        } catch (d) {}(a = b && b.response) ? this.Sb(this, a): this.b(this, c)
    };
    p.Qc = function (a, b) {
        var c = b ? [b] : [O("SUBSCRIBE_SERVER_ERROR")];
        try {
            var d = wg(a.responseText)
        } catch (e) {
            this.b(this, c);
            return
        }
        this.b(this, d.errors)
    };
    var Mo = l,
        No = [];

    function Oo(a) {
        No.push(a);
        Mo || Po()
    }

    function Po() {
        if (No.length && !Mo) {
            var a = No.shift();
            if (a) {
                var b = a.be();
                b || (b = {});
                b.session_token = Io;
                try {
                    var c = {
                        method: "POST",
                        postBody: Df(b),
                        onComplete: Qo,
                        onException: Ro,
                        onError: Ro
                    }
                } catch (d) {
                    a.Qc({}, O("SUBSCRIBE_JS_ERROR"));
                    return
                }
                Mo = a;
                Ho(a.ha, c)
            }
        }
    }

    function Qo(a) {
        var b = Mo;
        Mo = l;
        Po();
        b && b.le(a)
    }

    function Ro(a) {
        var b = Mo;
        Mo = l;
        Po();
        b && b.Qc(a)
    };

    function So(a) {
        var b = To(a);
        "button" == Q(b, "subscription-menu-type") ? (b = nh.getInstance(), b = oh(b, a), K("subscription-menu-loader", b) && (a.loader = b.innerHTML), Uo(a)) : (b = To(a), b = F(Q(b, "subscription-expandable-id")), mf(b) ? (V(b), x(a, "yt-uix-expander-collapsed")) : (Uo(a), U(b), z(a, "yt-uix-expander-collapsed")))
    }

    function Uo(a) {
        if (!Q(a, "loaded")) {
            var b = To(a),
                c = Q(b, "subscription-type"),
                d = Q(b, "subscription-xsrf") || "",
                e = Q(b, "subscription-menu-type"),
                f = {},
                g = Q(b, "subscription-value");
            "playlist" == c ? (f.action_get_subscription_form_for_playlist = 1, c = "p") : "topic" == c ? (f.action_get_subscription_form_for_topic = 1, c = "l") : (f.action_get_subscription_form_for_user = 1, c = "u");
            Ho = Kg;
            Io = d;
            d = new Ko(Vo, function () {
                Wo(b, k)
            });
            Lo(d, f);
            f = {};
            f[c] = g;
            f.menu_type = e;
            d.jb = f || {};
            d.userData.eventTrigger = a;
            d.userData.subscription = b;
            Oo(d)
        }
    }

    function To(a) {
        return Ac(a, l, "subscription-container")
    }

    function Xo(a) {
        var b = Ac(a, l, "subscription-menu-expandable");
        if (b) return b.expandableMenuSubscription;
        a = Ac(a, l, "yt-uix-button-menu");
        b = nh.getInstance();
        a = wh(b, a);
        return To(a)
    }

    function Yo(a) {
        var b = I("subscription-container"),
            c = Q(a, "subscription-type"),
            d = Q(a, "subscription-value");
        return b = Qa(b, function (a) {
            if (Q(a, "subscription-type") == c && Q(a, "subscription-value") == d) return k
        })
    }

    function Wo(a, b) {
        var c = Q(a, "subscription-id"),
            d = Yo(a);
        w(d, function (a) {
            if (b) {
                "button" == Q(a, "subscription-menu-type") ? Zo(a) : $o(a, k);
                var d = he(l, "subscription-subscribed-container", a),
                    g = he(l, "subscribe-button", a),
                    i = he(l, "subscription-options-button", a);
                $d(a, "subscription-id");
                V(d);
                U(g);
                $d(i, "loaded")
            } else d = he(l, "subscription-subscribed-container", a), g = he(l, "subscribe-button", a), P(a, "subscription-id", c), V(g), U(d)
        })
    }

    function ap(a, b) {
        if ("button" == Q(a, "subscription-menu-type")) {
            var c = K("subscription-options-button", a),
                d = nh.getInstance(),
                e = oh(d, c);
            e && (e.innerHTML = b, uh(d, c, e))
        } else c = F(Q(a, "subscription-expandable-id")), d = K("subscription-menu-loader", c), e = K("subscription-menu-body", c), e.innerHTML = b, c.expandableMenuSubscription = a, V(d), U(e)
    }

    function Zo(a) {
        var a = K("subscription-options-button", a),
            b = nh.getInstance();
        oh(b, a);
        qh(b, a);
        if (a.loader) {
            var c = a.loader,
                d = oh(b, a);
            d && (d.innerHTML = c, uh(b, a, d))
        }
        $d(a, "loaded")
    }

    function $o(a, b) {
        var c = xh.getInstance(),
            d = K("yt-uix-expander", a),
            e = F(Q(a, "subscription-expandable-id"));
        if (b) {
            var f = K("subscription-menu-loader", e),
                g = K("subscription-menu-body", e);
            $d(d, "loaded");
            U(f);
            V(g);
            g.innerHTML = ""
        }
        mf(e) && zh(c, d)
    }

    function bp(a, b) {
        var c = a.userData.subscription,
            d = b.html_content;
        a.userData.eventTrigger.disabled = m;
        P(c, "subscription-id", b.id);
        Wo(c, m);
        d && (ap(c, d), d = K("subscription-options-button", c), P(d, "loaded", "true"), So(d), "button" == Q(c, "subscription-menu-type") && nh.getInstance().Sc(d))
    }

    function cp(a) {
        mc(a.userData.collection)
    }

    function dp(a) {
        Wo(a.userData.subscription, k)
    }

    function Vo(a, b) {
        var c = a.userData.eventTrigger,
            d = a.userData.subscription,
            e = b.html_content;
        P(d, "subscription-id", b.id);
        ap(d, e);
        P(c, "loaded", "true")
    }

    function ep(a) {
        var b = a.userData.subscription;
        a.userData.eventTrigger.disabled = m;
        a = Yo(b);
        w(a, function (a) {
            "button" == Q(a, "subscription-menu-type") ? Zo(a) : $o(a, k)
        })
    }

    function fp(a) {
        if (a = a.userData.eventTrigger) a.disabled = m
    };
    u("yt.pubsub.publish", W);

    function gp(a) {
        var b = {
            channel: "c",
            all: "a"
        };
        return b[a] || b.channel
    };

    function hp(a, b, c) {
        this.qa = a;
        this.f = b;
        this.b = !!c;
        this.c = m;
        this.e = [];
        this.i = []
    }
    p = hp.prototype;
    p.init = function () {
        var a = Cc(this.qa, "yt-subscription-button-hovercard"),
            b = t(this.jg, this),
            c = t(this.kg, this),
            b = R(a, "mouseenter", b);
        this.e.push(b);
        b = R(a, "mouseleave", c);
        this.e.push(b)
    };
    p.jg = function () {
        this.c = k;
        if (this.b) {
            var a = t(this.md, this),
                a = N(a, 500);
            this.i.push(a)
        }
    };
    p.kg = function () {
        this.c = m
    };
    p.md = function () {
        var a = Al.getInstance(),
            b;
        if (b = !this.Kd) b = mh(a, this.qa), b = !b ? m : B(b, Y(a, "active"));
        b && (this.Kd = k, b = {
            session_token: M("subscription_ajax")
        }, b[gp()] = this.f, X("/subscription_ajax", {
            method: "POST",
            o: {
                hovercard: 1,
                action_get_subscription_form_for_channel: 1
            },
            C: b,
            B: this,
            j: function (b, d) {
                vl(a, this.qa, d.response.html_content);
                this.qb()
            },
            onError: function () {
                this.Kd = m
            }
        }))
    };
    p.qb = function () {
        var a = Al.getInstance(),
            b = mh(a, this.qa),
            c = tl(a, b);
        w(c.getElementsByTagName("input"), function (a) {
            var b = t(function () {
                    Jg(c.getElementsByTagName("form")[0])
                }, this),
                a = R(a, "change", b);
            this.e.push(a)
        }, this)
    };

    function ip(a) {
        this.G = a;
        this.type = Q(a, "subscription-type") || "channel";
        this.tb = Q(a, "subscription-value") || "";
        this.c = !!Q(a, "enable-tooltip");
        this.ga = Q(a, "enable-hovercard") ? new hp(this.G, this.tb) : l;
        this.sb = m;
        this.e = [];
        this.b = [];
        this.Ob = Q(this.G, "sessionlink") || "";
        this.qb()
    }

    function jp(a) {
        a = I("yt-subscription-button-js-default", a);
        w(a, function (a) {
            Q(a, "subscription-initialized") || (new ip(a), P(a, "subscription-initialized", "true"))
        })
    }
    var kp = [];
    p = ip.prototype;
    p.getId = function () {
        return Q(this.G, "subscription-id") || l
    };

    function lp(a, b) {
        b ? P(a.G, "subscription-id", b) : $d(a.G, "subscription-id");
        mp(a)
    }

    function mp(a) {
        if (ae(a.G, "subscription-button-type")) {
            var b = "-" + Q(a.G, "subscription-button-type");
            C(a.G, "yt-uix-button-subscribed" + b, !!a.getId());
            C(a.G, "yt-uix-button-subscribe" + b, !a.getId())
        } else C(a.G, "subscribed", !!a.getId());
        a.getId() ? (b = Cc(a.G, "yt-uix-button-subscription-container"), re(b, "mouseleave", t(function () {
            x(this.G, "hover-enabled")
        }, a))) : z(a.G, "hover-enabled");
        B(a.G, "yt-uix-button-link") && (a.getId() ? np(a) : op(a));
        if (a.ga) {
            var b = a.ga,
                c = !!a.getId(),
                d = Y(Al.getInstance(), "target");
            C(b.qa, d,
                c);
            b = a.ga;
            c = !!a.getId();
            (b.b = c) || ul(Al.getInstance(), b.qa)
        }
        a.c && (b = (a.getId() ? "un" : "") + "subscribe-tooltip", b = Q(a.G, b) || "", Dh(Ah.getInstance(), a.G, b))
    }
    p.qb = function () {
        this.e.push(R(this.G, "click", t(this.vf, this)));
        this.b.push(ig("SUBSCRIBE", this.wf, this));
        this.b.push(ig("UNSUBSCRIBE", this.xf, this));
        this.ga && this.ga.init();
        kp.push(this);
        mp(this)
    };

    function pp(a, b, c, d) {
        c != a.getId() && a.tb == b && lp(a, c);
        d == a && a.ga && (a = a.ga, ul(Al.getInstance(), a.qa))
    }
    p.vf = function (a) {
        if (this.sb) return m;
        a.preventDefault();
        Ch(Ah.getInstance(), this.G);
        this.getId() ? this.Vd() : this.ra()
    };

    function np(a) {
        "BUTTON" == a.G.tagName && x(a.G.parentNode, "yt-subscription-button-disabled-mask-container");
        a.G.disabled = k
    }

    function op(a) {
        z(a.G.parentNode, "yt-subscription-button-disabled-mask-container");
        a.G.disabled = m
    }
    p.ra = function () {
        var a = this.type,
            b = this.tb,
            c = Q(this.G, "subscription-feature");
        this.sb = k;
        np(this);
        if (M("subscription_ajax")) qp(b, a, c, this);
        else if (!this.G.getAttribute("href")) {
            var d = t(this.rg, this),
                a = Ef("/signin?context=popup", "next", document.location.protocol + "//" + document.domain + "/post_login"),
                a = Ef(a, "feature", "sub_button");
            if (a = window.open(a, "loginPopup", "width=375,height=440,resizable=yes,scrollbars=yes", k)) b = ig("LOGGED_IN", function (a) {
                var b = L("LOGGED_IN_PUBSUB_KEY", b);
                jg(b);
                d(a)
            }), Pd("LOGGED_IN_PUBSUB_KEY",
                b), a.moveTo((screen.width - 375) / 2, (screen.height - 440) / 2)
        }
    };
    p.rg = function (a) {
        Rd("subscription_ajax", a.subscription_ajax);
        this.ra()
    };

    function qp(a, b, c, d) {
        var b = b || "channel",
            e = {},
            f = {
                channel: "channel",
                all: "all"
            };
        e["action_create_subscription_to_" + (f[b] || f.channel)] = 1;
        c && (e.feature = c);
        d && d.Ob && (c = Nf("/subscription_ajax", e), f = Hf(d.Ob), Vg(c, f));
        c = gp(b);
        b = {};
        b.session_token = M("subscription_ajax");
        b[c] = a;
        (c = L("PLAYBACK_ID")) && (b.plid = c);
        X("/subscription_ajax", {
            method: "POST",
            o: e,
            C: b,
            j: function (b, c) {
                W("SUBSCRIBE", a, c, d)
            },
            S: function () {
                d && (d.sb = m, B(d.G, "yt-uix-button-link") || op(d))
            }
        });
        Kh("subscribe")
    }
    p.Vd = function () {
        var a = {
                s: this.getId(),
                session_token: M("subscription_ajax")
            },
            b = {
                action_remove_subscriptions: 1
            },
            c = Q(this.G, "subscription-feature");
        c && (b.feature = c);
        (c = L("PLAYBACK_ID")) && (a.plid = c);
        this.sb = k;
        np(this);
        if (this.Ob) {
            var c = Nf("/subscription_ajax", b),
                d = Hf(this.Ob);
            Vg(c, d)
        }
        X("/subscription_ajax", {
            method: "POST",
            B: this,
            o: b,
            C: a,
            j: function (a, b) {
                lp(this, l);
                if (this.ga) {
                    var c = this.ga;
                    c.b = m;
                    ul(Al.getInstance(), c.qa)
                }
                W("UNSUBSCRIBE", this.tb, b, this)
            },
            S: function () {
                this.sb = m;
                op(this)
            }
        });
        Kh("unsubscribe")
    };
    p.wf = function (a, b, c) {
        b = b.response.id;
        pp(this, a, b, c);
        a == this.tb && (lp(this, b), this.ga && (a = this.ga, a.c && (Al.getInstance().zb(a.qa), a.md())))
    };
    p.xf = function (a, b) {
        pp(this, a, b.response.id, this)
    };

    function rp(a, b, c) {
        a = L("WATCH_CONTEXT_CONTAINER_TEMPLATE") || tj(a);
        b = L("WATCH_CONTEXT_VIDEO_TEMPLATE") || tj(b);
        c = L("WATCH_CONTEXT_PLAYLIST_TEMPLATE") || tj(c);
        this.b = new qj(a, sp);
        this.e = new qj(b, tp);
        this.c = new qj(c, up)
    }
    rp.prototype.da = function (a, b) {
        for (var c = a.contextList, d = [], e = 0, f = a.clickedIndex, g = 0; g < c.length; g++) {
            var i = {},
                n = {};
            "video" == c[g].itemType ? (i.context_type = a.contextType, i.video_id = c[g].videoId, i.video_thumb_src = c[g].videoImg, i.video_title = c[g].videoName, i.view_count = c[g].videoViews, i.video_time = c[g].videoTime, i.user_thumb_src = c[g].userImg, i.user_name = c[g].userName, i.feed_action = c[g].feedAction, c[g].feedAction && (i.item_classes = " has-action"), g == f && (i.item_classes += " context-playing"), d.push(this.e.da(i)),
                e++) : "playlist" == c[g].itemType && (n.context_type = a.contextType, n.playlist_video_id = c[g].videoId, n.playlist_id = c[g].playlistId, n.playlist_title = c[g].playlistName, n.video_thumb_src = c[g].playlistImg, n.video_count = c[g].playlistCount, n.user_thumb_src = c[g].userImg, n.feed_action = c[g].feedAction, c[g].feedAction && (n.item_classes = " has-action"), g == f && (n.item_classes += " context-playing"), d.push(this.c.da(n)), e++)
        }
        0 != e && (c = d.join(""), d = {}, d.more_from = a.contextSource, d.back_link = a.backLink, d.image_src = a.contextImage,
            d = this.b.da(d), b.innerHTML = d, d = "context-" + a.contextType, x(b, d), (e = K("context-icon")) && x(e, d), P(b, "context-type", a.contextType), P(b, "show-notification", a.showNotification), d = J("ul", l, b), d[0].innerHTML = c, P(d[0], "context-playing", f), f = F("watch-context"), f = K("context-title", f), c = yc(f), d = "", Xc(c) ? d = "rtl" : Xc(c) || (d = "ltr"), f.setAttribute("dir", d))
    };
    var sp = ["back_link", "context_videos", "more_from", "image_src"],
        tp = "context_type video_id video_thumb_src video_title view_count video_time user_thumb_src user_name feed_action item_classes".split(" "),
        up = "context_type playlist_video_id playlist_id playlist_title video_thumb_src video_count user_thumb_src feed_action item_classes".split(" ");

    function vp() {
        this.b = F("watch-context-container");
        this.ja = new rp(F("context-pane-template"), F("context-video-template"), F("context-playlist-template"))
    };

    function wp() {
        var a = new xi,
            b;
        if (b = a) a: {
            try {
                b = !!a.b && !!a.b.getItem;
                break a
            } catch (c) {}
            b = m
        }
        b && (this.b = new yi(a))
    }
    v(wp, eg);
    wp.prototype.b = l;

    function xp(a) {
        var b = {
            volume: 100,
            muted: m,
            nonNormalized: 100
        };
        if (a.b) {
            var c = {};
            try {
                c = a.b.get("yt-player-volume") || {}
            } catch (d) {
                a.b.Xb("yt-player-volume")
            }
            b.volume = isNaN(c.volume) ? 100 : Math.min(Math.max(c.volume, 0), 100);
            b.nonNormalized = isNaN(c.nonNormalized) ? b.volume : c.nonNormalized;
            b.muted = c.muted == j ? m : c.muted
        }
        return b
    }
    wp.prototype.T = function () {
        this.b = l;
        wp.J.T.call(this)
    };
    var yp = m,
        zp = -1,
        Ap = "",
        Bp = {},
        Cp = new gg,
        Dp = l;

    function Ep() {
        return L("RESUME_COOKIE_NAME")
    }

    function Fp() {
        var a = sk(),
            b = a.getDuration(),
            a = Math.floor(a.getCurrentTime()),
            c = L("VIDEO_ID");
        if (120 >= a || a + 120 >= b) {
            if (b = Ep()) a = Fe(b, "").split(","), a = Qa(a, function (a) {
                return 0 != a.indexOf(c)
            }), 0 == a.length ? Ge(b) : Ee(b, a.join(","), 1814400)
        } else if (b = Math.floor(a), a = Ep()) {
            var d = Fe(a, "").split(","),
                d = Qa(d, function (a) {
                    return 0 != a.indexOf(c) && !!a.length
                });
            4 <= d.length && d.shift();
            d.push(c + ":" + b);
            Ee(a, d.join(","), 1814400)
        }
    }

    function Gp() {
        var a = sk();
        if (a) {
            var b = L("VIDEO_ID"),
                c = a.getDuration(),
                a = Math.floor(a.getCurrentTime());
            0 == c || 20 >= a || Yg("/save_resume_204?" + Df({
                v: b,
                t: a.toString()
            }))
        }
    }

    function Hp() {
        yp = k;
        var a = sk();
        a && Ip(a)
    }

    function Ip(a, b) {
        if (Wd && !a.addEventListener) {
            var c = b ? 2 * b : 50;
            N(function () {
                Ip(a, c)
            }, c)
        } else b && Zg("ael_delayed", "delay=" + b, j), a.addEventListener("onStateChange", Jp), a.addEventListener("onVolumeChange", Kp), a.addEventListener("RATE_SENTIMENT", Lp), a.addEventListener("SHARE_CLICKED", Mp), a.addEventListener("NEXT_CLICKED", Np), a.addEventListener("SIZE_CLICKED", Op), a.addEventListener("onError", Pp), Ep() && R(window, "beforeunload", Fp), Kf(window.location.hash).q && L("WIDE_PLAYER_STYLES") && (L("WATCH7_ENABLED") ? W("player-resize",
            m) : kk(m)), gk(a), Dp = new wp, Cp.za("READY_STATE_TOPIC", a)
    }

    function Jp(a) {
        zp = a;
        switch (a) {
        case 0:
            Mj(dk()) && Vj(dk(), m, "autoplay")
        }
    }

    function Pp(a) {
        switch (a) {
        case 5:
            ek(5, "html5_ns")
        }
    }

    function Kp(a) {
        var b = Dp;
        if (b.b) {
            var c = {};
            c.volume = isNaN(a.volume) ? xp(b).volume : Math.min(Math.max(a.volume, 0), 100);
            c.nonNormalized = a.nonNormalized;
            c.muted = a.muted == j ? xp(b).muted : a.muted;
            try {
                b.b.gb("yt-player-volume", c)
            } catch (d) {}
        }
    }

    function Np() {
        Vj(dk(), k, j)
    }

    function Op(a) {
        L("FULLSCREEN_EXPAND") ? C(document.body, "fullscreen", a) : (Ee("wide", a ? "1" : "0"), L("WATCH7_ENABLED") ? W("player-resize", a) : kk(a))
    }

    function Lp(a) {
        L("WATCH7_ENABLED") && W("player-sentiment", a)
    }

    function Mp() {
        L("WATCH7_ENABLED") ? W("player-share") : rn(F("watch-share"), k)
    }

    function Qp(a, b) {
        var c = b != l ? b : k,
            d = sk();
        d.seekTo(a, k);
        c && (F("watch-video-container") ? window.scroll(0, 0) : window.location.href = "#movie_player");
        d.playVideo()
    }

    function Rp() {
        if (yp) {
            var a = window.location.hash;
            a != Ap && (Ap = a, a = Kf(a), "t" in a && a.t != Bp.t && Qp(Sp(a.t), m), Bp = a)
        }
    }

    function Sp(a) {
        var b = 0; - 1 != a.indexOf("h") && (a = a.split("h"), b = 3600 * a[0], a = a[1]); - 1 != a.indexOf("m") && (a = a.split("m"), b = 60 * a[0] + b, a = a[1]); - 1 != a.indexOf("s") ? (a = a.split("s"), b = 1 * a[0] + b) : b = 1 * a + b;
        return b
    };
    var Tp = m,
        Vp = l,
        Yp = l,
        Zp = l,
        $p = l;

    function aq(a) {
        a.addEventListener("onStateChange", bq);
        a.addEventListener("onError", cq)
    }

    function dq(a) {
        var b = $p,
            a = {
                event: a,
                aplid: Vp,
                abt: Yp,
                evtm: Math.round(qa() - b)
            };
        (b = L("PLAYER_CONFIG")) && (b.args && b.args.plid) && (a.plid = b.args.plid);
        b && (b.args && b.args.video_id) && (a.v = b.args.video_id);
        Yg("/player_204?" + Df(a))
    }

    function bq(a) {
        if (Zp) switch (a) {
        case 1:
            dq("play");
            Ud(Zp);
            Zp = l;
            Tp = m;
            break;
        case 0:
            dq("ended"), Ud(Zp), Zp = l, Tp = m
        }
    }

    function cq() {
        Zp && (dq("error"), Ud(Zp), Zp = l, Tp = m)
    }

    function eq() {
        Zp && dq("userwaiting");
        Zp = l
    }

    function fq() {
        Tp && dq("unload")
    };

    function gq() {
        var a = F("watch-video-annotation-editable"),
            b = va(F("watch-video-annotation-content").innerHTML);
        b ? A(a, ["unannotated", "editing"], ["annotated", "not-editing"]) : A(a, ["annotated", "not-editing"], ["unannotated", "editing"]);
        F("watch-video-annotation-textarea").value = b
    }

    function hq(a) {
        if (!Q(a, "saving")) {
            P(a, "saving", "true");
            var b = F("watch-video-annotation-content"),
                c = F("watch-video-annotation-textarea"),
                d = va(c.value),
                e = {};
            d || (e["delete"] = 1);
            X(a.action, {
                format: "JSON",
                method: "POST",
                o: e,
                Ra: Qc(a),
                j: function () {
                    b.innerHTML = za(d)
                },
                onError: function () {
                    c.value = b.innerHTML
                },
                S: function () {
                    $d(a, "saving");
                    gq()
                }
            })
        }
    };

    function iq(a) {
        var b = a.target;
        if (!("INPUT" == b.tagName || "TEXTAREA" == b.tagName || "SELECT" == b.tagName)) switch (a.keyCode) {
        case 78:
            a.shiftKey && Vj(dk(), k, "keys");
            break;
        case 80:
            a.shiftKey && Wj(dk(), "keys");
            break;
        case 106:
            if (a = sk()) b = a.getCurrentTime(), a.seekTo(b - 10);
            break;
        case 108:
            if (a = sk()) b = a.getCurrentTime(), a.seekTo(b + 10);
            break;
        case 107:
            (a = sk()) && (2 == zp ? a.playVideo() : a.pauseVideo())
        }
    };

    function jq() {
        He.getInstance();
        Oe(Nh.he, k);
        Pe();
        V("watch_page_survey")
    };
    var kq = ["ypc-container", "ypc-unsubscribe-link", "ypc-rap-overlay-link"];

    function lq(a) {
        var b = L("YPC_LOADER_CSS"),
            c;
        c = J("head", j, j)[0];
        c = J("link", l, c);
        w(c, function (a) {
            if (a.href == b) return a
        });
        l || (c = document.createElement("link"), c.rel = "stylesheet", c.href = b, J("head", j, j)[0].appendChild(c));
        Ug(L("YPC_LOADER_JS"), function () {
            w(L("YPC_LOADER_CALLBACKS"), function (a) {
                (a = s(a)) && a()
            });
            a && a()
        })
    };

    function mq(a, b, c, d) {
        c = Al.getInstance();
        d.html ? (vl(c, b, d.html), jp()) : (c = Al.getInstance(), ul(c, b), z(a, "yt-uix-hovercard"), z(b, "yt-uix-hovercard-target"))
    };

    function nq(a, b, c) {
        var d = c || q,
            e = a.serverUri || "//www.google.com/tools/feedback",
            f = d.GOOGLE_FEEDBACK_START;
        /iphone|ipad|ipod|android|blackberry|mini|windows\sce|windows\sphone|palm/i.test(navigator.userAgent) && (a.mobileWindow = window.open(""));
        d.GOOGLE_FEEDBACK_START_ARGUMENTS = arguments;
        f ? f.apply(d, arguments) : (d = d.document, f = d.createElement("script"), f.src = e + "/load.js", d.body.appendChild(f))
    };
    var oq = m,
        pq = "";

    function qq(a) {
        a = a.match(/[\d]+/g);
        a.length = 3;
        return a.join(".")
    }
    if (navigator.plugins && navigator.plugins.length) {
        var rq = navigator.plugins["Shockwave Flash"];
        rq && (oq = k, rq.description && (pq = qq(rq.description)));
        navigator.plugins["Shockwave Flash 2.0"] && (oq = k, pq = "2.0.0.11")
    } else if (navigator.mimeTypes && navigator.mimeTypes.length) {
        var sq = navigator.mimeTypes["application/x-shockwave-flash"];
        (oq = sq && sq.enabledPlugin) && (pq = qq(sq.enabledPlugin.description))
    } else try {
        var tq = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
            oq = k,
            pq = qq(tq.GetVariable("$version"))
    } catch (uq) {
        try {
            tq =
                new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), oq = k, pq = "6.0.21"
        } catch (vq) {
            try {
                tq = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), oq = k, pq = qq(tq.GetVariable("$version"))
            } catch (wq) {}
        }
    }
    var xq = pq;

    function yq(a) {
        return (a = a.exec(zb())) ? a[1] : ""
    }
    var zq = function () {
        if (Sk) return yq(/Firefox\/([0-9.]+)/);
        if (E || Db) return Qb;
        if (Xk) return yq(/Chrome\/([0-9.]+)/);
        if (Yk) return yq(/Version\/([0-9.]+)/);
        if (Uk || Vk) {
            var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(zb());
            if (a) return a[1] + "." + a[2]
        } else {
            if (Wk) return (a = yq(/Android\s+([0-9.]+)/)) ? a : yq(/Version\/([0-9.]+)/);
            if (Tk) return yq(/Camino\/([0-9.]+)/)
        }
        return ""
    }();

    function Aq() {
        (E ? 0 <= Ma(zq, "7") && 0 <= Ma(xq, "9") : Sk ? 0 <= Ma(zq, "3.5") : Yk ? 0 <= Ma(zq, "5") : Xk) || V("reportbug")
    };

    function Bq() {
        re(F("help-button"), "click", Cq, k)
    }

    function Cq() {
        var a = F("help-button");
        if (a) {
            var b = Q(a, "iph-topic-id"),
                c = Q(a, "help-center-host"),
                d = Q(a, "locale"),
                e = Q(a, "iph-title-text"),
                f = Q(a, "iph-search-button-text"),
                g = Q(a, "iph-search-input-text"),
                i = Q(a, "iph-anchor-text"),
                n = document.location.protocol + Q(a, "iph-js-url"),
                r = document.location.protocol + Q(a, "iph-css-url");
            n && r && (r = gc("link", {
                href: r,
                rel: "stylesheet"
            }), document.getElementsByTagName("head")[0].appendChild(r), Ug(n, function () {
                var n = s("yt.www.help.init"),
                    r = s("yt.www.help.onButtonClick");
                n(b,
                    c, l, d, e, g, f, i);
                R(a, "click", r);
                r()
            }))
        }
    };

    function Dq() {
        Eq = N(function () {
            document.getElementById("loading").style.display = ""
        }, 1250)
    }

    function Fq() {
        W("dispose");
        window.scroll(0, 0);
        var a = document.getElementById("content");
        a.style.height = a.clientHeight + "px"
    }

    function Gq() {
        Ud(Eq);
        document.getElementById("loading").style.display = "none";
        document.getElementById("content").style.height = "";
        W("init")
    }
    var Eq = 0;
    var Hq;

    function Iq(a, b, c) {
        !c || !c.html ? V(a) : (P(a, "loaded", 1), a.innerHTML = c.html, Jq(a))
    }

    function Jq(a, b) {
        var c = K("yt-picker-content", a),
            d = J(l, "yt-picker-section", c);
        w(d, t(Kq, l, Math.floor((b || c.offsetWidth) / 180)))
    }

    function Kq(a, b) {
        for (var c = J(l, "yt-picker-item", b), d = Math.ceil(c.length / a), e, f = document.createElement("div"), g = 0; g < a; g++) {
            e = document.createElement("div");
            e.className = "yt-picker-grid";
            for (var i = d * g; i < d * (g + 1); i++) c[i] && e.appendChild(c[i]);
            e.children.length && f.appendChild(e)
        }
        b.innerHTML = f.innerHTML
    };

    function Lq() {
        (function () {
            try {
                for (var a = this; a.parent != a;) "$" == a.frameElement.src && h("odd"), a = a.parent;
                a.frameElement != l && h("busted")
            } catch (b) {
                document.write("--\><plaintext style=display:none><\!--"), window.open("/", "_top"), top.location = "/"
            }
        })()
    }

    function Mq(a) {
        "block" == a.responseText && Lq()
    }
    if (window != window.top) {
        var Nq = document.referrer;
        if (window.parent != window.top) Lq();
        else {
            var Oq = Qf(Nq);
            if (Of(Oq)) Lq();
            else {
                var Pq = Qf(Nq);
                Pf(Pq) || Kg("/roger_rabbit?" + ("location=" + encodeURIComponent(Nq) + "&self=" + encodeURIComponent(window.location.href) + "&user_agent=" + encodeURIComponent(navigator.userAgent)), {
                    onComplete: Mq
                })
            }
        }
    };
    var Qq = m;

    function Rq() {
        W("init")
    }

    function Sq() {
        W("dispose")
    }

    function Tq(a, b, c) {
        var d = F("www-core-js");
        !Qq && (d && -1 != d.src.indexOf("/debug-")) && (c = Uq(c), Yg("/js_204?" + ("error=" + encodeURIComponent(a) + "&script=" + encodeURIComponent(b) + "&linenumber=" + encodeURIComponent(c) + "&url=" + encodeURIComponent(window.location.href))), Qq = k)
    }

    function Uq(a) {
        if (Eb) try {
            eval("(0)()")
        } catch (b) {
            return b.stack.replace(/(.*):/g, "").replace(/\n/g, ",")
        } else return a
    };
    var Vq = [];
    var Wq = ra("You were shown..."),
        Xq = ra("You just watched..."),
        Yq = "";

    function Zq(a, b, c, d) {
        window.google_ad_client = a;
        window.google_ad_channel = b;
        window.google_max_num_ads = 1;
        window.google_ad_output = "js";
        window.google_ad_type = "text";
        window.google_only_pyv_ads = k;
        c && (window.google_kw = c, window.google_kw_type = "broad");
        window.dclk_language && (window.google_language = window.dclk_language);
        window.google_ad_request_done = d;
        Ug("//pagead2.googlesyndication.com/pagead/show_ads.js")
    }

    function $q() {
        window.dclk_language && (window.google_language = window.dclk_language);
        window.google_ad_client = "pub-6219811747049371";
        window.google_ad_channel = "1802068507";
        window.google_ad_format = "300x250_as";
        window.google_ad_type = "text_image";
        window.google_ad_width = 300;
        window.google_ad_height = 250;
        window.google_alternate_color = "FFFFFF";
        window.google_color_border = "FFFFFF";
        window.google_color_bg = "FFFFFF";
        window.google_color_link = "0033CC";
        window.google_color_text = "444444";
        window.google_color_url = "0033CC";
        Ug("//pagead2.googlesyndication.com/pagead/show_ads.js")
    }

    function ar() {
        V("pyv-container");
        F("ppv-placeholder") ? U("ppv-placeholder") : V("homepage-sidebar-ads")
    }

    function br(a, b, c, d, e) {
        var f = Sa(b.media_template_data, function (a) {
            return !!a.imageUrl
        });
        f && (a = {
            video_id: f.videoId,
            ad_type: a,
            headline: Ga(b.line1),
            image_url: f.imageUrl,
            description1: Ga(b.line2),
            description2: Ga(b.line3),
            channel_title: f.channelName,
            test_mode: (!!e).toString()
        }, Yq = Ga(b.url), Kg("/pyv?" + Df(a), {
            method: "GET",
            update: c,
            onComplete: d
        }))
    }

    function cr(a) {
        if (0 == a.length) dr(), L("PYV_TRACK_RELATED_CTR") && (er("watch-related", m), er("watch-channel-videos-panel", m));
        else {
            var b = F("watch-channel-videos-panel");
            b && !L("IS_BRANDED_WATCH") && x(b, "yt-uix-expander-collapsed");
            br("watch_related", a[0], l, function (a) {
                var a = Lg(Hg(a.responseXML), "html_content") || "",
                    b = F(window.pyv_related_box_id || "watch-related");
                b && (0 != b.innerHTML.indexOf(a) && (b.insertBefore(jc(a), b.firstChild), L("PYV_TRACK_RELATED_CTR") && (er("watch-related", k), er("watch-channel-videos-panel",
                    k))), (a = F("pyv-watch-related-dest-url")) && a.setAttribute("href", Yq))
            }, window.google_adtest && "on" == window.google_adtest)
        }
    }

    function dr() {
        var a = F("ppv-container");
        a && U(a)
    }

    function fr(a) {
        a && of (a, k); of ("search-base-div", k)
    }

    function gr(a, b, c) {
        w(a, function (a) {
            var b = a.media_template_data[0];
            a.line1 = Ga(a.line1);
            a.line2 = Ga(a.line2);
            a.line3 = Ga(a.line3);
            a.url = Ga(a.url);
            b.imageUrl = Ga(b.imageUrl);
            b.channelName = Ga(b.channelName)
        });
        X("/pyv", {
            format: "XML",
            method: "POST",
            C: {
                pyv_ads: zg(new yg(j), a),
                ad_type: c
            },
            j: function (a, c) {
                b.innerHTML = c.html_content;
                fr(b)
            }
        })
    }

    function hr() {
        L("PYV_IS_ALLOWED") ? Zq("ca-youtube-homepage", L("PYV_AD_CHANNEL") || "", L("PYV_KW") || "", ir) : ar()
    }

    function ir(a) {
        var b = F("pyv-container");
        0 == a.length || !b ? ar() : br("homepage", a[0], b, function () {
            var a = document.getElementById("pyv-large-dest-url-image"),
                b = document.getElementById("pyv-large-dest-url");
            a && a.setAttribute("href", Yq);
            b && b.setAttribute("href", Yq)
        })
    }

    function jr() {
        if (L("PYV_IS_ALLOWED")) {
            var a = "pyvOnBrowse";
            L("PYV_CATEGORY") && (a += " pyvBrowse_" + L("PYV_CATEGORY"));
            Zq("ca-youtube-browse", a, "", kr)
        } else $q()
    }

    function kr(a) {
        var b = F("pyv-container");
        0 == a.length || !b ? $q() : br(L("PYV_NEW_BROWSE") ? "new_browse" : "browse", a[0], b, function () {
            V("ad_creative_1")
        })
    }

    function er(a, b) {
        var c = F(a);
        c && (c = J("li", "video-list-item", c), w(c, function (a, c) {
            var f = J("a", l, a);
            w(f, function (a) {
                var d = a.getAttribute("href");
                d && unescape(d).match(/\/watch(\?|#!)v=/) && (a.href = b ? a.href + ("&pvpos=" + c) : a.href + ("&pvnpos=" + c))
            })
        }))
    }

    function lr(a) {
        var b = window.location.href;
        b.indexOf("#") == b.length - 1 && Fb && (window.location.hash = "#!");
        var b = document.body,
            c = Zb(b),
            d = [];
        d.push("<!DOCTYPE html>");
        d.push("<html><head>", a, "</head><body>", j, "</body></html>");
        a = c.Qd("iframe", {
            frameborder: 0,
            style: "border:0;vertical-align:bottom;",
            src: 'javascript:""'
        });
        b.appendChild(a);
        b = d.join("");
        a = a.contentDocument || a.contentWindow.document;
        a.open();
        a.write(b);
        a.close()
    }

    function mr(a, b) {
        var c = Lg(Hg(a.responseXML), "html_content") || "",
            d = F(window.pyv_related_box_id || "watch-related");
        d && 0 != d.innerHTML.indexOf(c) && (d.insertBefore(jc(c), d.firstChild), Yg(b))
    };
    var nr = l,
        or = l,
        pr = l;

    function qr(a) {
        a = a.replace(";dc_seed=", ";kmyd=watch-channel-brand-div;dc_seed=");
        V("instream_google_companion_ad_div", "google_companion_ad_div");
        U("ad300x250", "watch-channel-brand-div");
        var b = F("ad300x250");
        if (b !== l) {
            var c = Math.round(1E4 * Math.random());
            b.innerHTML = ['<iframe src="', a, '" name="ifr_300x250ad', c, '" id="ifr_300x250ad', c, '" width="300" height="250" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>'].join("")
        }
        rr()
    }

    function sr(a) {
        a = a.replace(";dc_seed=", ";kmyd=watch-longform-ad;dc_seed=");
        V("instream_google_companion_ad_div");
        U("watch-longform-ad");
        U("watch-longform-text");
        U("watch-longform-ad-placeholder");
        var b = F("watch-longform-ad-placeholder"),
            c = Math.round(1E4 * Math.random());
        b.innerHTML = ['<iframe src="', a, '" name="ifr_300x60ad', c, '" id="ifr_300x60ad', c, '" width="300" height="60" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>'].join("");
        rr()
    }

    function tr(a) {
        var b = F("watch-longform-ad-placeholder");
        a ? (V("instream_google_companion_ad_div"), U("watch-longform-ad"), U("watch-longform-text"), U("watch-longform-ad-placeholder"), b.innerHTML = a) : V("watch-longform-ad");
        rr()
    }

    function ur(a, b) {
        var c = "ad300x250",
            d = 300,
            e = 250;
        "video" == a && (c = "watch-longform-ad-placeholder", d = 300, e = 60, V("instream_google_companion_ad_div"));
        var f = decodeURIComponent(b);
        F(c).innerHTML = ['<iframe name="fw_ad" id="fw_ad" ', 'width="' + d + '" height="' + e + '" ', 'marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>'].join("");
        var g = F("fw_ad"),
            g = g.contentWindow ? g.contentWindow : g.contentDocument.document ? g.contentDocument.document : g.contentDocument,
            d = navigator.userAgent.toLowerCase(),
            c = -1 != d.indexOf("msie"),
            d = -1 != d.indexOf("opera");
        g.document.open();
        g.document.write(f);
        c || d ? N(function () {
            g.document.close()
        }, 7500) : g.document.close();
        "video" == a ? U("watch-longform-ad") : U("watch-channel-brand-div");
        rr()
    }

    function vr() {
        U("watch-channel-brand-div");
        V("ad300x250");
        F("google_companion_ad_div").style.height = "250px";
        rr()
    }

    function wr() {
        V("watch-longform-ad");
        rr()
    }

    function xr() {
        V("watch-channel-brand-div");
        rr()
    }

    function rr() {
        W("watchads-adLoad")
    }

    function yr(a) {
        Pd("POPOUT_AD_SLOTS", a)
    }

    function zr() {
        var a = F("watch-longform-popup");
        a && (a.disabled = k)
    }

    function Ar(a) {
        var b = F("watch-longform-popup");
        b && (b.disabled = m);
        yr(a)
    }

    function Cr(a) {
        window.google_ad_output = "html";
        a ? (window.google_ad_height = "60", window.google_ad_format = "300x60_as", window.google_container_id = "instream_google_companion_ad_div") : (window.google_ad_height = "250", window.google_ad_format = "300x250_as", window.google_container_id = "google_companion_ad_div")
    }

    function Dr(a) {
        a ? (V("watch-longform-ad-placeholder", "watch-channel-brand-div"), U("watch-longform-text", "watch-longform-ad", "instream_google_companion_ad_div")) : (V("ad300x250", "watch-longform-ad"), U("google_companion_ad_div", "watch-channel-brand-div"));
        rr()
    }

    function Er() {
        V("instream_google_companion_ad_div", "watch-longform-text", "watch-longform-ad-placeholder");
        rr()
    };
    u("yt.www.watch.ads.setAdId", function (a) {
        window.ad_debug = a
    });
    u("yt.www.watch.ads.showForcedMpu", function (a) {
        F("ad300x250").innerHTML = ['<iframe src="', a, '" name="ifr_300x250ad" id="ifr_300x250ad" width="300" height="250" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>'].join("");
        U("ad300x250")
    });
    u("yt.www.watch.ads.createGutSlot", function (a) {
        googletag && (nr = googletag.defineSlot(a, [
            [300, 250],
            [300, 60]
        ], "yt-gut-content"), nr.set("ad_type", "flash"), nr.addService(googletag.companionAds()), googletag.enableServices(), a = nr.getSizes(), or = a[0], pr = a[1])
    });
    u("yt.www.watch.ads.handleMoveGutCompanion", function (a) {
        var a = a ? F("instream_google_companion_ad_div") : F("google_companion_ad_div"),
            b = F("yt-gut-content");
        b ? b.innerHTML = "" : (b = document.createElement("div"), b.id = "yt-gut-content");
        a && (a.innerHTML = "", a.appendChild(b));
        rr()
    });
    u("yt.www.watch.ads.setGutSlotSizes", function (a, b) {
        if (nr) {
            var c = nr.getSizes();
            Va(c);
            b && c.push(or);
            a && c.push(pr)
        }
    });
    u("yt.www.watch.ads.handleSetCompanion", qr);
    u("yt.www.watch.ads.handleSetCompanionForInstream", sr);
    u("yt.www.watch.ads.handleSetCompanionForLongform", tr);
    u("yt.www.watch.ads.handleSetCompanionForFreewheel", ur);
    u("yt.www.watch.ads.handleHideCompanion", vr);
    u("yt.www.watch.ads.handleHideCompanionForInstream", wr);
    u("yt.www.watch.ads.disablePopoutButton", zr);
    u("yt.www.watch.ads.enablePopoutButton", Ar);
    u("yt.www.watch.ads.handleCloseMpuCompanion", xr);
    u("yt.www.watch.ads.updatePopoutAds", yr);
    u("yt.www.watch.ads.handleSetAfvCompanionVars", Cr);
    u("yt.www.watch.ads.handleShowAfvCompanionAdDiv", Dr);
    u("yt.www.watch.ads.handleHideAfvInstreamCompanionAdDiv", Er);
    u("yt.www.watch.ads.AD_LOAD_TOPIC", "watchads-adLoad");
    u("yt.www.ads.pyv.pyvWatchAfcWithPpvCallback", function (a) {
        cr(a);
        if (0 < a.length && (a = F("ppv-container"))) {
            var b = Wb && a.children != j ? a.children : Qa(a.childNodes, function (a) {
                return 1 == a.nodeType
            });
            if (2 == b.length) {
                var c = nc(b[0]);
                c != j && "A" == c.tagName && (-1 != c.href.indexOf("feature=fvwbrel") || -1 != c.href.indexOf("feature=fvwberel")) ? V(b[0]) : V(b[1])
            }
            U(a)
        }
    });
    u("yt.www.ads.pyv.pyvWatchAfcCallback", cr);
    u("yt.www.ads.pyv.pyvSearchRhsAfcCallback", function (a) {
        var b = F("pyv-ads");
        0 != a.length && b && gr(a, b, "search_rhs")
    });
    u("yt.www.ads.pyv.pyvSearchTopAfcCallback", function (a) {
        var b = F("pyv-top-ads");
        !a.length || !b ? fr(b) : gr(a, b, "search_top")
    });
    u("yt.www.ads.pyv.pyvHomeAfcCallback", ir);
    u("yt.www.ads.pyv.showHomepagePpvAd", ar);
    u("yt.www.ads.pyv.pyvHomeRequestAds", hr);
    u("yt.www.ads.pyv.pyvBrowseRequestAds", jr);
    u("yt.www.ads.pyv.showPpvOnWatch", dr);
    u("yt.www.ads.pyv.loadPyvIframe", lr);
    u("yt.www.ads.pyv.loadPyvAfsScript", function (a) {
        Ug("/pyv_afs_ads?query=" + a)
    });
    u("yt.www.ads.pyv.hijackPyvSlotForCompanion", function (a, b) {
        if (window.pyv_backfill_vars || window.pyv_backfill_with_ppv) window.pyv_backfill_vars = window.pyv_backfill_with_ppv = m, Kg("/pyv?" + Df({
            video_id: a,
            ad_type: "watch_related_companion",
            test_mode: window.google_adtest && "on" == window.google_adtest
        }), {
            method: "GET",
            onComplete: function (a) {
                a && mr(a, b)
            }
        })
    });
    u("yt.www.ads.pyv.pyvSlotCompanionCallback", mr);
    u("yt.www.ads.pyv.backfillCompanionWithPyv", function () {
        window.pyv_backfill_vars ? lr(window.pyv_backfill_vars) : window.pyv_backfill_with_ppv && dr();
        window.pyv_backfill_vars = window.pyv_backfill_with_ppv = m
    });
    u("yt.www.ads.pyv.updatePyvSlotCompanionLabel", function (a) {
        var b = F("pyv-slot-companion-status-label");
        b && (b.innerText = a ? Wq : Xq)
    });
    Sd("pyv_related_box_id");
    u("setCompanion", qr);
    u("setInstreamCompanion", sr);
    u("setLongformCompanion", tr);
    u("setFreewheelCompanion", ur);
    u("closeInPageAdIframe", vr);
    u("hideInstreamCompanion", wr);
    u("disablePopout", zr);
    u("enablePopout", Ar);
    u("closeMpuCompanion", xr);
    u("updatePopAds", yr);
    u("setAfvCompanionVars", Cr);
    u("showAfvCompanionAdDiv", Dr);
    u("hideAfvInstreamCompanionAdDiv", Er);
    u("requestPyvAds", hr);
    u("pyvHomeRequestAds", hr);
    u("pyvBrowseRequestAds", jr);
    window.yt = window.yt || {};
    u("_gel", F);
    u("_hasclass", B);
    u("_addclass", x);
    u("_removeclass", z);
    u("_toggleclass", ib);
    u("_showdiv", U);
    u("_hidediv", V);
    u("_togglediv", qf);
    u("_ajax", Gg);
    u("goog.bind", t);
    u("goog.dom.getElementsByTagNameAndClass", function (a, b, c) {
        return J(a, b, c)
    });
    u("goog.dom.getFirstElementChild", nc);
    u("goog.array.forEach", w);
    u("goog.array.indexOf", Pa);
    u("goog.array.contains", Ua);
    u("yt.dom.hasAncestor", function (a, b, c) {
        a = F(a);
        b = F(b);
        return !!Bc(a, function (a) {
            return a === b
        }, k, c)
    });
    u("yt.setConfig", Pd);
    u("yt.getConfig", L);
    u("yt.setAjaxToken", Rd);
    u("yt.registerGlobal", Sd);
    u("yt.setTimeout", N);
    u("yt.setInterval", Td);
    u("yt.clearTimeout", Ud);
    u("yt.clearInterval", Vd);
    u("yt.setMsg", function (a) {
        Qd(Md, arguments)
    });
    u("yt.setGoogMsg", function (a) {
        Qd(Md, arguments)
    });
    u("yt.getMsg", O);
    u("yt.events.listen", R);
    u("yt.events.unlisten", ue);
    u("yt.events.stopPropagation", we);
    u("yt.events.preventDefault", function (a) {
        a = a || window.event;
        a.returnValue = m;
        a.preventDefault && a.preventDefault();
        return m
    });
    u("yt.events.getTarget", ve);
    u("yt.events.clear", function () {
        for (var a in me) se(a)
    });
    u("yt.events.Event", ke);
    ke.prototype.preventDefault = ke.prototype.preventDefault;
    ke.prototype.stopPropagation = ke.prototype.stopPropagation;
    u("yt.pubsub.subscribe", ig);
    u("yt.pubsub.unsubscribeByKey", jg);
    u("yt.pubsub.publish", W);
    u("yt.www.init", Rq);
    u("yt.www.dispose", Sq);
    R(window, "load", Rq);
    R(window, "unload", Sq);
    u("yt.www.logError", Tq);
    window.onerror = Tq;
    u("yt.uix.FormInput.selectOnChangeActionIE", function (a) {
        wk.getInstance().Ga(a)
    });
    ig("init", function () {
        yk()
    });
    u("goog.i18n.bidi.isRtlText", Xc);
    u("goog.i18n.bidi.setDirAttribute", function (a, b) {
        var c = b.value,
            d = "";
        Xc(c) ? d = "rtl" : Xc(c) || (d = "ltr");
        b.dir = d
    });
    u("yt.style.toggle", qf);
    u("yt.style.setDisplayed", lf);
    u("yt.style.isDisplayed", mf);
    u("yt.style.setVisible", of );
    u("yt.net.ajax.sendRequest", Kg);
    u("yt.net.ajax.getRootNode", Hg);
    u("yt.net.ajax.getNodeValue", Lg);
    u("yt.net.delayed.register", Rg);
    u("yt.net.delayed.load", Tg);
    u("yt.net.delayed.markAsLoaded", function (a) {
        a in Pg && (Qg[a] = k)
    });
    u("yt.net.scriptloader.load", Ug);
    u("goog.dom.forms.getFormDataString", Qc);
    u("yt.uri.buildQueryData", Df);
    u("yt.uri.appendQueryData", Lf);
    u("yt.www.feedback.start", function (a, b, c, d) {
        try {
            var c = (c || "59") + "",
                b = b || {},
                e = L("SESSION_INDEX");
            try {
                var f = sk();
                f && f.pauseVideo();
                var g = Vf.getInstance();
                b.flashVersion = [g.R, g.Ha, g.hb].join(".")
            } catch (i) {}
            a = {
                productId: c,
                locale: a,
                abuseLink: "https://support.google.com/youtube/bin/answer.py?answer=140536"
            };
            e && (a.authuser = e + "");
            d && (a.bucket = d);
            nq(a, b);
            return m
        } catch (n) {
            return k
        }
    });
    u("yt.www.feedback.startHelp", function (a, b, c, d) {
        nq({
            productId: (b || "59") + "",
            flow: "help",
            helpCenterPath: c || "/youtube",
            helpCenterContext: d,
            anchor: a
        })
    });
    u("yt.www.feedback.displayLink", Aq);
    ig("init", Aq);
    u("yt.www.help.bootstrap.init", Bq);
    ig("init", Bq);
    u("yt.net.cookies.set", Ee);
    u("yt.net.cookies.get", Fe);
    u("yt.net.cookies.remove", Ge);
    u("yt.window.redirect", Gh);
    u("yt.window.popup", Ih);
    ig("init", function () {
        L("SBOX_JS_URL") && Ug(L("SBOX_JS_URL"), function () {
            s("yt.www.masthead.searchbox.init")()
        })
    });
    kh(nh);
    kh(kl);
    kh(wl);
    kh(yl);
    kh(wk);
    kh(xh);
    kh(Al);
    kh(Lh);
    kh(Cl);
    kh(uj);
    kh(Dl);
    kh(xj);
    kh(Fl);
    kh(Ah);
    u("yt.player.update", jl);
    u("yt.player.embed", il);
    u("yt.flash.embed", bg);
    u("yt.www.watch.activity.getTimeSinceActive", uo);
    u("yt.www.watch.activity.setTimestamp", to);
    u("yt.www.watch.player.handleEndPreview", function (a) {
        var b = sk();
        b && b.stopVideo && b.stopVideo();
        (b = F("watch-checkout-offers")) && W("ypc-init-purchase", b, a)
    });
    u("yt.www.watch.player.openPopup", function (a, b, c) {
        var d = l,
            e = sk(),
            a = "/watch_popup?v=" + a;
        e && (a += "&vq=" + e.getPlaybackQuality(), d = Math.round(e.getCurrentTime()), e.stopVideo());
        L("POPOUT_AD_SLOTS") && (a += "&pop_ads=" + L("POPOUT_AD_SLOTS"));
        d && 10 < d && (a += "#t=" + d);
        Hh(a, {
            width: b,
            height: c,
            resizable: k,
            location: m,
            statusbar: m,
            menubar: m,
            scrollbars: m,
            toolbar: m
        })
    });
    u("yt.www.watch.activity.init", qo);
    u("yt.www.watch.player.updateConfig", function (a) {
        var a = a instanceof Rf ? a.args : a.args,
            b = m;
        a.jsapicallback = Hp;
        var c;
        c = L("CONVERSION_CONFIG_DICT");
        if (!c || !c.socialEnabled) c = l;
        else {
            var d, e = c.oeid,
                f = window.location.hash;
            d = Kf(f);
            var g = window.location,
                i, e = {
                    oeid: e
                },
                n = "";
            "#" == f.charAt(0) && (n = "!" == f.charAt(1) ? f.substr(0, 2) : f.substr(0, 1));
            f = Kf(f);
            for (i in e) f[i] = e[i];
            i = n + Df(f);
            g.hash = i;
            d = d.oeid;
            c = c.ieid = d
        }
        c && (a.ieid = c, b = k);
        d = Kf(window.location.hash);
        (c = d.t || d.at) ? (Bp.t = d.t, Bp.at = d.at, d = window.location.hash.replace(/\bat=[^&]*&?/,
            ""), window.location.hash = d && "#" != d ? d : "#!", c = Sp(c)) : c = 0;
        c && (a.start = c, a.resume = 1, b = k);
        return b
    });
    u("yt.www.watch.player.init", function () {
        Rp();
        Td(Rp, 1E3)
    });
    u("yt.www.watch.player.seekTo", Qp);
    u("openFull", function () {
        Hh("/watch_popup?v=" + L("VIDEO_ID"), {
            target: "FullScreenVideo",
            width: screen.availWidth,
            height: screen.availHeight,
            resizable: k,
            fullscreen: k
        })
    });
    u("checkCurrentVideo", function (a, b, c) {
        var d = L("VIDEO_ID"),
            e = d == a,
            f = ck ? dk().Qa() : l,
            b = !b || b == f;
        if (d && (!e || !b)) d = l, b && (d = dk(), e = Xh(d.g, [a])[0], d = e === j ? "" : Zh(d.g, e)), d || (d = c ? c : Nf(window.location.href, {
            v: a,
            feature: l
        })), d && Gh(d)
    });
    u("trackAnnotationsEvent", function (a, b, c) {
        var d = L("ANALYTICS_ANNOTATIONS_TRACKER");
        window._gaq.push(function () {
            d._trackEvent(a, b, c)
        })
    });
    u("reportFlashTiming", aa);
    u("reportTimingMaps", function (a, b) {
        for (var c in a) $.ge(c, a[c]);
        for (var d in b) $.info(d, b[d]);
        $.Tc()
    });
    u("yt.www.watch.playlists.editAnnotation", function () {
        A(F("watch-video-annotation-editable"), "not-editing", "editing");
        F("watch-video-annotation-textarea").focus();
        var a = F("watch-video-annotation-form");
        Q(a, "setup") || (P(a, "setup", "true"), a = K("cancel-button", a), R(a, "click", function (a) {
            a.preventDefault();
            gq()
        }))
    });
    u("yt.www.watch.playlists.removeAnnotation", function () {
        var a = F("watch-video-annotation-form");
        F("watch-video-annotation-textarea").value = "";
        hq(a)
    });
    u("yt.www.watch.playlists.submitForm", function (a) {
        hq(a)
    });
    u("yt.www.watch.abandonment.init", function (a, b) {
        Vp = a;
        Yp = b;
        var c = L("PLAYER_CONFIG"),
            c = new Rf(c);
        cg(function (a) {
            var e = $.timer || {};
            e.start && Xf(a, c.minVersion) && ($p = e.start, yp ? aq(sk()) : Cp.ra("READY_STATE_TOPIC", aq), R(window, "beforeunload", fq), a = qa() - $p, a = b - a, 0 <= a && (Zp = N(eq, a), dq("attempt")));
            Tp = k
        })
    });
    u("yt.www.watch.player.addSaveResumeOnUnloadListener", function () {
        R(window, "unload", Gp)
    });
    u("yt.history.enable", function (a, b) {
        var c = ug(b);
        c.setEnabled.call(c, k, a)
    });
    u("yt.history.disable", function () {
        var a = ug();
        a.setEnabled.call(a, m)
    });
    u("yt.www.lists.addto.toggleMenu", function (a, b) {
        var c = Ah.getInstance(),
            d = Y(c),
            e = F("shared-addto-menu");
        if (b) {
            var f = K("addto-menu", e);
            Ch(c, a);
            vn = z(a, d);
            un || (un = f.innerHTML);
            c = Q(e, "video-ids");
            d = Q(a, "video-ids");
            wn && x(e, "lightweight-panel");
            B(a, "flip") && x(e, "flip");
            d && c != d && (P(e, "video-ids", d), f.innerHTML = un, new xn(a))
        } else vn && x(a, d), z(e, "flip")
    });
    u("yt.www.lists.data.addto.saveToWatchLater", function (a, b) {
        Bm({
            $c: a,
            Zc: "WL",
            qc: b,
            j: function (b, d) {
                var e = d.list_id || "",
                    f = d.video_count || 1,
                    g = d.videos || [],
                    i = [a],
                    n = O("PLAYLIST_BAR_ADDED_TO_PLAYLIST");
                fk("WL", e, n, g, f, i)
            },
            onError: j,
            B: j
        })
    });
    u("yt.www.lists.addtowatchlater.init", Fn);
    ig("init", Fn);
    u("yt.www.watch.watch5.enableWide", kk);
    u("yt.www.watch.watch5.handleResize", function () {
        Ud(ik);
        ik = N(lk, 200)
    });
    u("yt.www.watch.watch5.updatePlayerSize", lk);
    u("yt.www.watch.watch5.handleLoadMoreRelated", function () {
        V("watch-more-related-button");
        U("watch-more-related", "watch-more-related-loading");
        X("/related_ajax", {
            o: {
                video_id: L("VIDEO_ID"),
                action_more_related_videos: 1
            },
            j: function (a, b) {
                var c = F("watch-more-related");
                c.innerHTML = b.html;
                Oi(c)
            }
        })
    });
    u("yt.www.watch.watch5.handleYouTubeMix", function () {
        var a = F("youtube-mix-button");
        a.disabled = k;
        X("/music_ajax", {
            o: {
                video_id: L("VIDEO_ID"),
                artist_id: L("ARTIST_ID"),
                action_get_mix: 1
            },
            j: function (b, c) {
                a.disabled = m;
                if ("" != c.list_id) {
                    var d = dk(),
                        e = new Sh("TL", c.list_id);
                    Kj(d, e);
                    e.b = 0;
                    d.bb(k);
                    Nj(d, k);
                    Lj(d)
                }
            }
        })
    });
    u("yt.www.watch.watch5.handleToggleMoreFromUser", function (a) {
        var b = B(a, "yt-uix-expander-collapsed"),
            c = F("watch-more-from-user");
        !b && "true" != Q(c, "loaded") && (a = {
            user_id: Q(a, "video-user-id"),
            video_id: Q(a, "video-id"),
            action_channel_videos: 1
        }, X("/watch_ajax", {
            format: "XML",
            method: "GET",
            o: a,
            j: function (a, b) {
                c.innerHTML = b.html_content;
                P(c, "loaded", "true");
                Oi(c);
                var f = parseInt(Q(F("watch-channel-discoverbox"), "slider-slide-selected"), 10);
                J("button", "yt-uix-slider-num", j)[f].click()
            }
        }));
        C(c, "collapsed", b)
    });
    u("yt.www.watch.watch5.handleToggleDescription", function (a) {
        if (B(a, "yt-uix-expander-collapsed")) Zg("descriptionClosed", j, j);
        else {
            if ((a = F("watch-source-videos-list")) && "true" != Q(a, "loaded")) {
                P(a, "loaded", "true");
                var b = Lf("/watch_ajax", {
                    action_get_video_attributions_component: 1,
                    v: L("VIDEO_ID")
                });
                Kg(b, {
                    method: "GET",
                    update: a
                })
            }
            Zg("descriptionOpened", j, j)
        }
    });
    u("yt.www.watch.watch5.purchaseComplete", function () {
        U(F("watch-player-rental-play-button"));
        var a = F("watch-player-rental-still-frame");
        V(ok());
        U(a)
    });
    u("yt.www.watch.actions.init", function () {
        var a = Kf(window.location.hash),
            b = a.action;
        if (b) {
            switch (b) {
            case "flag":
                kn()
            }
            N(function () {
                pn("watch-actions-area-container").scrollIntoView()
            }, 0);
            delete a.action;
            a = Df(a) || "#!";
            window.location.hash = a
        }
    });
    u("yt.www.watch.actions.loadPlusoneLike", function (a, b, c, d, e) {
        new Rm(F(a), b, c, d, e, {
            size: "large",
            source: "google:youtube:watch_exp"
        })
    });
    u("yt.www.watch.shortcuts.init", function () {
        R(document, "keypress", iq)
    });
    u("yt.www.watch.actions.flag", kn);
    u("yt.www.watch.actions.hide", function () {
        en()
    });
    u("yt.www.watch.actions.like", function () {
        en();
        var a = 0 == $m();
        bn(a ? 2 : 0)
    });
    u("yt.www.watch.actions.share", rn);
    u("yt.www.watch.actions.shareWithPlaylist", function () {
        var a = on(),
            b = qn();
        sn(a, b)
    });
    u("yt.www.watch.actions.addto", function (a) {
        if (ln(a) && !cn()) {
            fn();
            var a = F("watch-actions-addto"),
                b = L("VIDEO_ID");
            Zm && Zm.na();
            Zm = new Km(a, b, function () {
                dn("watch-actions-addto")
            })
        }
    });
    u("yt.www.watch.actions.stats", function (a) {
        ln(a) && (fn(), X("/insight_ajax", {
            format: "XML",
            method: "GET",
            o: {
                action_get_statistics_and_data: 1,
                v: L("VIDEO_ID")
            },
            j: function (a, c) {
                hn(c.html_content);
                var d = F("stats-opt-out-chbox");
                d && R(d, "change", function () {
                    Tm(!d.checked)
                })
            },
            onError: jn
        }))
    });
    u("yt.www.watch.actions.unlike", function () {
        en();
        var a = 1 == $m();
        bn(a ? 2 : 1)
    });
    u("yt.www.watch.actions.transcript", function (a) {
        ln(a) && (fn(), s("yt.www.watch.transcript.open")(function () {
            V("watch-actions-loading");
            dn("watch-actions-transcript")
        }))
    });
    u("yt.www.watch.actions.dismissChannelSubscriptionPromo", function () {
        var a = {
            channel_id: Q(F("yt-subscription-on-watch-promo-channel"), "channel-id")
        };
        (new Sm("ob_subscription_on_watch_promo", 0)).write("write_dismiss", j, zg(new yg(j), a))
    });
    u("yt.www.comments.init", function () {
        var a = F("comments-view");
        new om(a);
        qm.push(T(a, "click", rm, "comment-action"));
        L("COMMENT_OPEN_REPLY_BOX") && (a = I("comment", F("linked-comments-header")), um(a[a.length - 1]))
    });
    u("yt.www.comments.initForm", pm);
    u("yt.www.lists.init", function () {
        if (-1 < parseInt(L("PLAYLIST_BAR_PLAYING_INDEX"), 10)) {
            dk();
            var a = L("AUTOPLAY_DELAY");
            a && ek(a)
        }
        ck = k
    });
    u("yt.www.lists.getState", function () {
        var a = dk(),
            b = l;
        if (a) {
            var b = Uh(a.g),
                c = {};
            w(b, function (a) {
                c[a] = this.g.getVideoData(a)
            }, a);
            for (var d = a.fa(), e = Mj(a), f = a.Y() ? a.g.ma : 0, g = [], i = 0; i < b.length; i++) {
                var n = Q(a.D, "start-time" + i) || "",
                    r = Q(a.D, "end-time" + i) || "";
                g[i] = {
                    start: n,
                    end: r
                }
            }
            b = {
                autoPlay: e,
                clipRanges: g,
                index: d,
                shuffle: f,
                videoData: c,
                videoIds: b || []
            };
            b.autoPlayMax = L("PLAY_ALL_MAX")
        }
        return b
    });
    u("yt.www.lists.registerNearEndEventsWithPlayer", gk);
    u("yt.www.lists.handleNearPlaybackEnd", function (a) {
        if (ck && Mj(dk()) && "NEAR_END" == a.slice(0, -1)) {
            var a = parseInt(a.slice(-1), 10),
                b = dk();
            if (5 == a && L("PRERENDER_EXPERIMENT")) {
                var c = document.createElement("link");
                c.rel = "prerender";
                c.href = Yh(b.g, m, "autoplay");
                document.getElementsByTagName("head")[0].appendChild(c)
            }
            $j(b, a)
        }
    });
    u("yt.dom.datasets.get", Q);
    u("yt.dom.datasets.set", P);
    Sd("openFull", "checkCurrentVideo", "trackAnnotationsEvent", "reportFlashTiming", "shareVideoFromFlash", "setCompanion", "setInstreamCompanion", "setLongformCompanion", "setFreewheelCompanion", "closeInPageAdIframe", "hideInstreamCompanion", "disablePopout", "enablePopout", "closeMpuCompanion", "updatePopAds", "setAfvCompanionVars", "showAfvCompanionAdDiv", "hideAfvInstreamCompanionAdDiv", "requestPyvAds", "pyvHomeRequestAds", "pyvBrowseRequestAds", "showGutCompanion");
    u("yt.www.picker.load", function (a) {
        var b = Q(a, "picker-key"),
            c = Q(a, "picker-position"),
            c = "yt-picker-" + b + "-" + c,
            a = Q(a, "button-menu-id") == c,
            d = F(c);
        d && (a || (Hq && Hq != d && V(Hq), Hq = d, qf(d)), Q(d, "loaded") || (a = {}, a["action_" + b] = 1, a.base_url = L("CURRENT_URL"), X("/picker_ajax", {
            format: "JSON",
            method: "GET",
            o: a,
            j: t(Iq, l, d),
            onError: function () {
                V(d)
            }
        })))
    });
    u("yt.www.picker.applyGrid", Jq);
    u("yt.www.search.init", function () {
        var a = I("group-container");
        w(a, Eo)
    });
    u("yt.www.thumbnaildelayload.init", function (a) {
        Hi = a || 0;
        Gi = fc(document).y + cc(window).height + Hi;
        Ki = k;
        Qi(j, j);
        Ni();
        R(window, "scroll", Li);
        R(window, "resize", Li)
    });
    u("yt.www.xsrf.populateSessionToken", function () {
        for (var a = 0; a < document.forms.length; a++) {
            for (var b = m, c = 0; c < Vq.length; c++) document.forms[a].name == Vq[c] && (b = k);
            c = document.forms[a];
            if ("post" == c.method.toLowerCase() && b == m) {
                for (var b = m, d = 0; d < c.elements.length; d++) c.elements[d].name == L("XSRF_FIELD_NAME") && (b = k);
                b || (b = j, b = L("XSRF_TOKEN"), d = document.createElement("input"), d.setAttribute("name", L("XSRF_FIELD_NAME")), d.setAttribute("type", "hidden"), d.setAttribute("value", b), c.appendChild(d))
            }
        }
    });
    u("yt.www.masthead.performSearch", function (a, b) {
        var c = F("masthead-search"),
            d = Q(b, a) || "";
        "rentals" == d ? (c.rental.value = 1, c.search_type.value = "") : (c.search_type.value = d, c.rental.value = 0);
        if (c.search_query.value) c.submit();
        else {
            var c = b.innerHTML,
                e = F("search-btn"),
                f = e.innerHTML,
                g = Q(e, a) || "";
            e.innerHTML = c;
            P(e, a, d);
            b.innerHTML = f;
            P(b, a, g)
        }
        return m
    });
    u("yt.www.masthead.dismissGAPlusMessage", function () {
        var a = Fe("FML", "").split(","),
            b = new Date,
            b = Math.round(b.getTime() / 1E3),
            c = "",
            c = 2 != a.length ? "1," + b : parseInt(a[0], 10) + 1 + "," + b;
        Ee("FML", c, 31536E4)
    });
    u("yt.www.masthead.dismissPostLinkingMessage", function () {
        Ge("FML")
    });
    u("yt.www.masthead.toggleExpandedMasthead", function () {
        var a = F("masthead-expanded");
        nf(a);
        W("masthead-mastfeedr-toggle");
        lf("masthead-expanded-menu", k);
        lf("masthead-expanded-acct-sw-container", m);
        Mn || z(F("masthead-expanded-container"), "accountswitch");
        if (!Q(a, "loaded")) {
            var b = F("masthead-expanded-menu-gaia-photo");
            b && !b.src && (b.src = Q(b, "src"));
            X("/playlist_bar_ajax", {
                o: {
                    action_get_playlists_masthead: 1,
                    feature: "mhee"
                },
                format: "JSON",
                pb: k,
                j: function (b, d) {
                    F("masthead-expanded-lists-container").innerHTML =
                        d.html;
                    P(a, "loaded", "true")
                }
            })
        }
    });
    u("yt.www.masthead.accountswitch.init", function (a) {
        Mn = a
    });
    u("yt.www.masthead.accountswitch.toggle", function () {
        nf("masthead-expanded-acct-sw-container");
        var a = F("masthead-expanded-container"),
            b = F("masthead-expanded-acct-sw-container");
        if (mf(b)) {
            b.style.top = a.offsetTop + "px";
            E && (Sb("7") && !Sb("8")) && (b.style.top = a.offsetTop - (b.offsetTop - a.offsetTop) + "px");
            b = F("masthead-expanded-menu-acct-sw-list");
            b.offsetHeight < a.offsetHeight && (b.style.height = a.offsetHeight - 11 + "px");
            var c = F("masthead-expanded-acct-sw-iframe");
            if (!c) {
                var d = F("masthead-expanded-menu-acct-sw-list"),
                    c = gc("iframe", {
                        id: "masthead-expanded-acct-sw-iframe",
                        frameborder: 0,
                        src: 'javascript:""'
                    });
                d.parentNode && d.parentNode.insertBefore(c, d)
            }
            c.style.height = b.offsetHeight - 11 + "px";
            Mn || x(a, "accountswitch")
        } else Mn || z(a, "accountswitch")
    });
    ig("init", function () {
        L("SANDBAR_ENABLED") && no("iframes", {
            callback: function () {
                var a = F("sb-button-notify"),
                    b = F("sb-button-share"),
                    c = new zo(L("SANDBAR_LOCALE"), L("SESSION_INDEX"), L("SANDBAR_DELEGATED_SESSION_ID"));
                R(a, "click", t(c.ah, c));
                R(b, "click", t(c.bh, c));
                W("sandbar-init")
            },
            _c: {
                jsl: {
                    h: L("GAPI_HINT_PARAMS")
                }
            }
        })
    });
    u("yt.www.ads.MastheadAd", cm);
    cm.prototype.autoCollapsePremiumYva = cm.prototype.gh;
    cm.prototype.collapse_ad = cm.prototype.kh;
    cm.prototype.expand_ad = cm.prototype.lh;
    cm.prototype.userCollapsePremiumYva = cm.prototype.rd;
    cm.prototype.userExpandPremiumYva = cm.prototype.ih;
    cm.prototype.userUnexpandPremiumYva = cm.prototype.jh;
    u("yt.www.home.ads.workaroundIE", function (a) {
        !Am && zm && (Am = k, N(function () {
            a.focus()
        }, 0))
    });
    u("yt.www.home.ads.workaroundLoad", function () {
        zm = k
    });
    u("yt.www.home.ads.workaroundReset", function () {
        Am = m
    });
    u("yt.www.home.ads.writeAdsContentToIframe", function (a, b) {
        var c = F(a).contentDocument || F(a).contentWindow.document;
        c.open();
        c.write("<!DOCTYPE html><html><head></head><body>" + b + "</body></html>");
        E || c.close()
    });
    u("yt.www.channelcard.show", function (a, b) {
        var c = Q(b, "id"),
            c = {
                method: "POST",
                S: pa(mq, a, b),
                C: {
                    external_channel_id: c,
                    session_token: M("channel_details_ajax")
                }
            };
        X("/channel_details_ajax", c);
        P(a, "card-action", "");
        P(b, "card-delegate-show", "");
        P(b, "card-delay-show", "")
    });
    u("yt.tracking.doubleclick.trackActivity", function (a, b, c) {
        a = ("https:" == document.location.protocol ? "https://" : "http://") + "fls.doubleclick.net/activityi;src=" + encodeURIComponent(String(L("DBLCLK_ADVERTISER_ID"))) + ";type=" + encodeURIComponent(String(a)) + ";cat=" + encodeURIComponent(String(b));
        c && !c.ord && (a += ";ord=1");
        for (var d in c) a += ";" + encodeURIComponent(String(d)) + "=" + encodeURIComponent(String(c[d]));
        a += ";num=" + qa();
        c = document.createElement("iframe");
        c.src = a;
        c.style.display = "none";
        document.body.appendChild(c)
    });
    u("yt.tracking.track", function (a, b, c) {
        Zg(a, b, c)
    });
    u("yt.tracking.resolution", function () {
        var a = "CSS1Compat" == document.compatMode ? document.documentElement : document.body,
            a = {
                a: "resolution",
                width: screen.width,
                height: screen.height,
                depth: screen.colorDepth,
                win_width: a.clientWidth,
                win_height: a.clientHeight
            };
        window.devicePixelRatio && (a.pixel_ratio = window.devicePixelRatio);
        a = Df(a);
        Yg("/gen_204?" + a, j)
    });
    u("yt.tracking.shareList", bh);
    u("yt.tracking.shareVideo", ah);
    u("yt.tracking.shareUrl", function (a, b, c, d) {
        $g(a, {
            url: b
        }, c, d)
    });
    u("yt.analytics.urchinTracker", function () {});
    u("yt.analytics.trackEvent", Yd);
    u("yt.timing.report", $.kc);
    u("yt.timing.maybeReport", $.Tc);
    u("yt.timing.handlePageLoad", $.je);
    ig("init", $.je);
    Wd && (!document.documentMode || 8 > document.documentMode) && T(F("ie"), "click", tk, "video-thumb");
    u("yt.www.subscriptions.edit.onUpdateSubscription", function (a, b, c, d) {
        var c = c || "",
            e = m;
        (b = F("subscription_level_unsubscribe")) && b.checked && (e = k);
        b = Qc(F("subscription_level_uploads" + c).form);
        Kg("/ajax_subscriptions?" + b, {
            postBody: "session_token=" + a,
            onComplete: function (a) {
                F("subscribeMessage" + c).innerHTML = Lg(Hg(a), "html_content");
                V("edit_subscription_wrapper" + c);
                V("edit_subscription_arrow" + c);
                U("subscribeMessage" + c);
                c && (F("edit_subscription_opener" + c).style.visibility = "", N(function () {
                    V("subscribeMessage" +
                        c)
                }, 5E3));
                if (e) {
                    var b = F("channel-body"),
                        a = J("div", "subscribe-div", b),
                        b = J("div", "unsubscribe-div", b);
                    w(a, function (a) {
                        qf(a)
                    });
                    w(b, function (a) {
                        qf(a)
                    });
                    d()
                }
            }
        })
    });
    u("yt.www.subscriptions.edit.onCancelUpdateSubscription", function (a) {
        a = a || "";
        V("edit_subscription_wrapper" + a);
        V("edit_subscription_arrow" + a);
        a && (F("edit_subscription_opener" + a).style.visibility = "");
        V("alerts")
    });
    u("yt.www.subscriptions.edit.onEditSubscriptionFromRecentActivity", function (a, b, c, d) {
        window["edit_subscription_download_" + c] ? (V("subscribeMessage" + c), qf("edit_subscription_wrapper" + c), qf("edit_subscription_arrow" + c), a = F("edit_subscription_opener" + c), a.style.visibility = "visible" == a.style.visibility ? "" : "visible") : (window["edit_subscription_download_" + c] = k, Kg("/ajax_subscriptions?get_edit_subscription_form=" + b + "&i=" + c, {
            postBody: "session_token=" + a,
            onComplete: function (a) {
                F("edit_subscription_opener" + c).style.visibility =
                    "visible";
                var b = document.createElement("div");
                b.innerHTML = Lg(a.responseXML, "html_content");
                d.parentNode.insertBefore(b, d);
                U("edit_subscription_wrapper" + c);
                U("edit_subscription_arrow" + c)
            }
        }))
    });
    u("yt.www.subscriptions.SubscriptionButton.init", jp);
    u("yt.www.subscriptions.SubscriptionButton.delayedSubscribe", function (a, b) {
        qp(a, b, "delayed-sub", l)
    });
    u("yt.www.subscriptions.button.subscribe", function (a) {
        var b = To(a),
            c = Q(b, "subscription-type"),
            d = Q(b, "subscription-xsrf") || "",
            e = Q(b, "subscription-menu-type"),
            f = Q(b, "subscription-feature"),
            g = Q(b, "subscription-value"),
            i = {};
        "playlist" == c ? (i.action_create_subscription_to_playlist = 1, c = "p") : "topic" == c ? (i.action_create_subscription_to_topic = 1, c = "l") : (i.action_create_subscription_to_channel = 1, c = "c");
        f && (i.feature = f);
        a.disabled = k;
        Ho = Kg;
        Io = d;
        d = new Ko(bp, fp);
        Lo(d, i);
        i = {};
        i[c] = g;
        i.menu_type = e;
        (e = L("PLAYBACK_ID")) &&
        (i.plid = e);
        d.jb = i || {};
        d.userData.eventTrigger = a;
        d.userData.subscription = b;
        Oo(d);
        Kh("subscribe")
    });
    u("yt.www.subscriptions.button.subscribeToCollection", function (a) {
        for (var b = Xo(a), c = Cc(a, "subscription-recommendations"), d = Q(b, "subscription-xsrf") || "", e = [], f = J("input", "username", c), g = 0; g < f.length; g++) f[g].checked && e.push(f[g].value);
        0 == e.length ? mc(c) : (a.disabled = k, Ho = Kg, Io = d, d = new Ko(cp, fp), Lo(d, {
            action_create_subscription_to_users: 1
        }), f = {}, f.usernames = e.join(","), d.jb = f || {}, d.userData.eventTrigger = a, d.userData.subscription = b, d.userData.collection = c, Oo(d))
    });
    u("yt.www.subscriptions.button.unsubscribe", function (a) {
        var b = Xo(a),
            c = Q(b, "subscription-id"),
            d = Q(b, "subscription-xsrf") || "",
            e = Q(b, "subscription-feature");
        if (!a.disabled) {
            a.disabled = k;
            Ho = Kg;
            Io = d;
            var d = new Ko(dp, fp),
                f = {
                    action_remove_subscription: 1
                };
            e && (f.feature = e);
            Lo(d, f);
            e = {};
            e.subscription_id = c;
            (c = L("PLAYBACK_ID")) && (e.plid = c);
            d.jb = e || {};
            d.userData.eventTrigger = a;
            d.userData.subscription = b;
            Oo(d);
            Kh("unsubscribe")
        }
    });
    u("yt.www.subscriptions.button.update", function (a) {
        var b = Xo(a),
            c = Q(b, "subscription-id"),
            d = Q(b, "subscription-xsrf") || "";
        a.disabled = k;
        Ho = Kg;
        Io = d;
        var d = new Ko(ep, fp),
            e = Ac(a, l, "subscription-menu-form"),
            e = Mc(Nc(e));
        e.email_on_upload || (e.email_on_upload = m);
        e.action_update_subscription_preferences = 1;
        Lo(d, e);
        d.jb = {
            subscription_id: c
        };
        d.userData.eventTrigger = a;
        d.userData.subscription = b;
        Oo(d)
    });
    u("yt.www.subscriptions.button.toggleMenu", So);
    u("yt.www.subscriptions.button.closeMenu", function (a) {
        a = Xo(a);
        "button" == Q(a, "subscription-menu-type") ? Zo(a) : $o(a)
    });
    u("yt.www.account.lightbox.init", function () {
        var a = F("page");
        T(a, "mousedown", Ol, "create-channel-lightbox");
        T(a, "click", Sl, "create-channel-lightbox")
    });
    u("yt.www.account.lightbox.dismiss", function () {
        Kl(Ml, "cancel")
    });
    u("yt.www.account.lightbox.gotoContentState", function () {
        Hl(Ml, "content")
    });
    u("yt.www.account.lightbox.gotoWorkingState", function () {
        Hl(Ml, "working")
    });
    u("yt.www.account.lightbox.show", function () {
        Ol();
        Sl(l)
    });
    u("yt.www.account.linkgplusloader.init", function () {
        var a = F("page");
        T(a, "mousedown", Zl, "link-gplus-lightbox");
        T(a, "click", bm, "link-gplus-lightbox")
    });
    u("yt.www.account.linkgplusloader.dismiss", function () {
        Kl(Tl, "cancel")
    });
    u("yt.www.account.linkgplusloader.gotoContentState", function () {
        Hl(Tl, "content")
    });
    u("yt.www.account.linkgplusloader.gotoWorkingState", function () {
        Hl(Tl, "working")
    });
    u("yt.www.account.linkgplusloader.show", function () {
        Zl();
        bm(l)
    });
    u("yt.www.account.linkgplusloader.showDialog", function () {
        Hl(Tl, "content");
        Jl(Tl);
        var a = K("yt-dialog-fg", F("link-gplus-lb")),
            b = pf(a);
        a.style.position = "fixed";
        a.style.top = "95px";
        b.x && (a.style.left = b.x + "px")
    });
    u("yt.www.account.linkgplusloader.setWaitCursor", Yl);
    ig("init", function () {
        if (L("YPC_LOADER_ENABLED")) {
            for (var a = 0; a < kq.length; a++)
                if (K(kq[a])) {
                    lq();
                    break
                } ig("ypc-delayedloader-load", lq)
        }
    });
    Sd("yt", "goog", "_gel", "googleapisv0", "_hasclass", "_addclass", "_removeclass", "_showdiv", "_hidediv", "_ajax");
    u("yt.www.masthead.extended.redirectWithNewParam", function (a, b) {
        var c, d, e;
        c = window.location.href;
        c = c.split("#");
        d = 2 == c.length ? "#" + c[1] : "";
        c = c[0];
        e = Jf(c);
        e[b] = a;
        e["persist_" + b] = "1";
        c = c.split("?");
        c = c[0];
        Gh(c, e, d)
    });
    u("yt.www.insight.setOptOut", Tm);
    u("yt.www.watch.survey.takeWatchPageSurvey", function () {
        jq();
        window.open("/watch_page_survey?r2=" + L("SURVEY_REFERER") + "&r1=" + L("SURVEY_SERVLET_NAME") + "&name=" + L("SURVEY_TYPE"), "YouTube_User_Happiness_Survey", "toolbar=no,width=800,height=768,status=no,resizable=yes,fullscreen=no,scrollbars=yes").focus()
    });
    u("yt.www.watch.survey.watchPageSurveyGoAway", jq);
    u("yt.www.watch.survey.checkSurveyCompletedAndShow", function () {
        Ne(He.getInstance(), Nh.he) || U("watch_page_survey")
    });
    u("yt.www.user.unblockUserLinkByExternalId", function (a, b) {
        confirm(O("UNBLOCK_USER")) && X("/link_ajax?action_unblock_user=1", {
            format: "XML",
            method: "POST",
            Ra: L("BLOCK_USER_AJAX_XSRF") + "&uid=" + a,
            j: function () {
                b && window.location.reload()
            }
        })
    });
    u("yt.www.user.blockUserLinkByExternalId", function (a, b) {
        confirm(O("BLOCK_USER")) && X("/link_ajax?action_block_user=1", {
            format: "XML",
            method: "POST",
            Ra: L("BLOCK_USER_AJAX_XSRF") + "&uid=" + a,
            j: function () {
                b && window.location.reload()
            }
        })
    });
    u("getNextVideoId", function (a) {
        var b = dk(),
            c = Mj(b),
            d = a <= L("PLAY_ALL_MAX");
        return c && d ? b.Jc(a) : ""
    });
    Sd("getNextVideoId");
    window.yt.spf && Id({
        "navigate-history-changed-callback": Dq,
        "navigate-requested-callback": Fq,
        "navigate-processed-callback": Gq
    });
    ig("init", function () {
        L("WATCH_CONTEXT_CLIENTSIDE") && kh(zl)
    });
    u("yt.www.watch.context.init", function () {
        var a = new vp,
            b;
        b = (b = (new Ei(new xi)).get(L("VIDEO_ID", "default_tag"))) ? wg(b) : l;
        b ? (a.ja.da(b, a.b), b = k) : b = m;
        if (b && (U(a.b, "context-icon"), !L("WATCH7_ENABLED") && (a = F("watch-context-item-list")))) b = Q(a, "context-playing"), (b = parseInt(b, 10)) && uj.getInstance().Ca(a, b);
        var c = new Ei(new xi),
            d = [];
        Ic(c.fb.Sa(k), function (a) {
            var b;
            try {
                b = Ei.prototype.b.call(c, a, k)
            } catch (g) {
                if ("Storage: Invalid value was encountered" == g) return;
                h(g)
            }
            Di(b) && d.push(a)
        });
        w(d, function (a) {
            Ei.prototype.Xb.call(c,
                a)
        })
    });
})();