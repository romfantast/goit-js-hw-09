function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},l=o.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},o.parcelRequired7c6=l);var i=l("eWCmQ");function r(e,o){const t=Math.random()>.3;return new Promise(((n,l)=>{t?n(e,o):l(e,o)}))}({formEl:document.querySelector(".form")}).formEl.addEventListener("submit",(o=>{o.preventDefault();const t=+o.target.elements.delay.value,n=+o.target.elements.interval.value,l=+o.target.elements.amount.value;let s=null,a=0;setTimeout((()=>{console.log(t),r({position:a,delay:t}).then((({position:o,delay:t})=>{console.log(o,t),console.log("then",t+o*n),e(i).Notify.success(`✅ Fulfilled promise ${o} in ${t+o*n}ms`)})).catch((({position:o,delay:t})=>{console.log(o,t),console.log("catch",t+o*n),e(i).Notify.failure(`❌ Rejected promise ${o} in ${t+o*n}ms`)})),a++,s=setInterval((()=>{r({position:a,delay:t}).then((({position:o,delay:t})=>{e(i).Notify.success(`✅ Fulfilled promise ${o} in ${t+o*n}ms`)})).catch((({position:o,delay:t})=>{e(i).Notify.failure(`❌ Rejected promise ${o} in ${t+o*n}ms`)})),a++,a===l&&clearInterval(s)}),n)}),t)}));
//# sourceMappingURL=03-promises.566700f3.js.map
