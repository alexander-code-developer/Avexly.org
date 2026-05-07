import e from "react";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region ../../node_modules/react-icons/lib/iconContext.mjs
var r = {
	color: void 0,
	size: void 0,
	className: void 0,
	style: void 0,
	attr: void 0
}, i = e.createContext && /* @__PURE__ */ e.createContext(r), a = [
	"attr",
	"size",
	"title"
];
function o(e, t) {
	if (e == null) return {};
	var n, r, i = s(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function s(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function c() {
	return c = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, c.apply(null, arguments);
}
function l(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function u(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? l(Object(n), !0).forEach(function(t) {
			d(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function d(e, t, n) {
	return (t = f(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function f(e) {
	var t = p(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function p(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function m(t) {
	return t && t.map((t, n) => /* @__PURE__ */ e.createElement(t.tag, u({ key: n }, t.attr), m(t.child)));
}
function h(t) {
	return (n) => /* @__PURE__ */ e.createElement(g, c({ attr: u({}, t.attr) }, n), m(t.child));
}
function g(t) {
	var n = (n) => {
		var { attr: r, size: i, title: s } = t, l = o(t, a), d = i || n.size || "1em", f;
		return n.className && (f = n.className), t.className && (f = (f ? f + " " : "") + t.className), /* @__PURE__ */ e.createElement("svg", c({
			stroke: "currentColor",
			fill: "currentColor",
			strokeWidth: "0"
		}, n.attr, r, l, {
			className: f,
			style: u(u({ color: t.color || n.color }, n.style), t.style),
			height: d,
			width: d,
			xmlns: "http://www.w3.org/2000/svg"
		}), s && /* @__PURE__ */ e.createElement("title", null, s), t.children);
	};
	return i === void 0 ? n(r) : /* @__PURE__ */ e.createElement(i.Consumer, null, (e) => n(e));
}
//#endregion
//#region ../../node_modules/react-icons/lu/index.mjs
function _(e) {
	return h({
		tag: "svg",
		attr: {
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		},
		child: [{
			tag: "path",
			attr: { d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" },
			child: []
		}]
	})(e);
}
//#endregion
//#region components/AtomicButton.jsx
var v = ({ children: e, onClick: r, icon: i = _ }) => /* @__PURE__ */ n("button", {
	onClick: r,
	className: "group relative px-8 py-4 bg-slate-900 text-white rounded-xl font-bold uppercase text-xs tracking-[0.2em] overflow-hidden transition-all border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
	children: [/* @__PURE__ */ n("span", {
		className: "relative z-10 flex items-center gap-2",
		children: [
			/* @__PURE__ */ t(i, { className: "w-4 h-4 text-blue-400" }),
			" ",
			e
		]
	}), /* @__PURE__ */ t("div", { className: "absolute top-0 left-0 w-full h-[2px] bg-blue-500 shadow-[0_0_15px_#3b82f6] -translate-y-full group-hover:animate-scan" })]
});
//#endregion
export { v as AtomicButton };
