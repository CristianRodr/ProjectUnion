!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},c=n.parcelRequired7c6;null==c&&((c=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){r[e]=t},n.parcelRequired7c6=c),c.register("iE7OH",(function(t,n){var o,r;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var c={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)c[t[n]]=e[t[n]]},r=function(e){var t=c[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),c.register("aNJCr",(function(t,n){var o;e(t.exports,"getBundleURL",(function(){return o}),(function(e){return o=e}));var r={};function c(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var t=r[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return c(e[2])}return"/"}(),r[e]=t),t}})),c("iE7OH").register(JSON.parse('{"iRWaR":"index.a0ed4c70.js","8Ip6y":"Icons.496e9310.svg","6KzB2":"index.8064ebdc.js"}'));var a,u=c("bpxeT"),i=c("2TvXO");a=c("aNJCr").getBundleURL("iRWaR")+c("iE7OH").resolve("8Ip6y");var l=document.querySelector(".header__form"),s=document.querySelector(".clock"),d=document.querySelector(".square-day"),f=(document.querySelector(".abbreviation-day"),document.querySelector(".month")),m=document.querySelector(".square-country"),g=document.querySelector(".square-degrees"),p=document.querySelector(".min"),h=document.querySelector(".max"),v=document.querySelector(".dawn"),x=document.querySelector(".sunset"),y=document.querySelector(".clima-icon"),w=document.querySelector(".legend");l.addEventListener("submit",(function(e){e.preventDefault();var t=e.target.elements.ciudad;console.log(t.value),q(t.value),localStorage.setItem("clima-message",t.value),e.currentTarget.reset(),clearInterval(b)}));var S,b;S=new Date,d.innerText=new Intl.DateTimeFormat("local",{day:"numeric",weekday:"short"}).format(S),f.textContent=new Intl.DateTimeFormat("local",{month:"long"}).format(S);var C,q=(C=t(u)(t(i).mark((function e(n){var o,r,c,u,l,S,C,q,k,E;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E=function(e,t){var n=new Date(1e3*e);n.setMinutes(n.getMinutes()+n.getTimezoneOffset()),n.setSeconds(n.getSeconds()+t);var o=new Date(n);console.log(o);var r=3600*o.getHours()+60*o.getMinutes()+1*o.getSeconds();console.log(r),b=setInterval((function(){++c;var e=String(Math.floor(c/3600)).padStart(2,0),t=String(Math.floor((c-3600*e)/60)).padStart(2,0),n=String(c-(3600*e+60*t)).padStart(2,0);s.textContent=e+":"+t+":"+n}),1e3);var c=r;return d.textContent=new Intl.DateTimeFormat("local",{day:"numeric",weekday:"short"}).format(o),f.textContent=new Intl.DateTimeFormat("local",{month:"long"}).format(o),n},e.prev=1,e.next=4,fetch("\n    https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&appid=c1e47110da4d70de2cafd30f980532f1&units=metric&lang=es"));case 4:return o=e.sent,e.next=7,o.json();case 7:if(r=e.sent,console.log(r),o.ok){e.next=11;break}throw new Error("".concat(r.message," (").concat(o.status,")"));case 11:c=r.main,u=r.sys,r.wind,l=r.weather,console.log(l[0]),console.log(l[0].description),w.textContent="El pronostico para ".concat(r.name,", ").concat(u.country,". el dia de hoy, ").concat(l[0].description),S=[l[0].main],console.log(S),S.includes("Clouds")&&y.setAttribute("xlink:href","".concat(t(a),"#icon-Nubes")),S.includes("Clear")&&y.setAttribute("xlink:href","".concat(t(a),"#icon-calor")),S.includes("Fog")&&y.setAttribute("xlink:href","".concat(t(a),"#icon-Icono1")),S.includes("Rain")&&y.setAttribute("xlink:href","".concat(t(a),"#icon-Icono1")),S.includes("Snow")&&y.setAttribute("xlink:href","".concat(t(a),"#icon-Icono3")),g.textContent=Math.trunc(c.temp),p.textContent="".concat(Math.trunc(c.temp_min),"°"),h.textContent="".concat(Math.trunc(c.temp_max),"°"),m.textContent="".concat(r.name,", ").concat(u.country),console.log("".concat(r.name,", ").concat(u.country)),C=function(e){var t=moment.unix(e).utc();return moment(t._i).format("LT")},i=u.sunrise,_=void 0,_=moment.unix(i).utc(),q=moment(_._i).format("LT"),k=C(u.sunset),v.textContent=q,x.textContent=k,E(r.dt,r.timezone),e.next=40;break;case 37:e.prev=37,e.t0=e.catch(1),alert(e.t0);case 40:case"end":return e.stop()}var i,_}),e,null,[[1,37]])}))),function(e){return C.apply(this,arguments)});new Promise((function(e,t){navigator.geolocation.getCurrentPosition(e,t)})).then((function(e){var t=e.coords,n=t.latitude,o=t.longitude;return fetch("http://api.openweathermap.org/geo/1.0/reverse?lat=".concat(n,"&lon=").concat(o,"&limit=&appid=c1e47110da4d70de2cafd30f980532f1"))})).then((function(e){if(!e.ok)throw new Error("Problem with geocoding ".concat(e.status));return e.json()})).then((function(e){console.log(e),console.log("You are in ".concat(e[0].name,", ").concat(e[0].country));var t=e[0].country.toLowerCase();return q(e[0].name),fetch("https://restcountries.com/v3.1/name/".concat(t))})).then((function(e){if(!e.ok)throw new Error("Country not found (".concat(e.status,")"));return e.json()})).then((function(e){console.log(e[0])})).catch((function(e){return console.error("".concat(e.message," 💥"))})),document.addEventListener("DOMContentLoaded",(function(e){console.log("HTML analizado y dom construido")}))}();
//# sourceMappingURL=index.a0ed4c70.js.map