function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},c=n.parcelRequired7c6;null==c&&((c=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){r[e]=t},n.parcelRequired7c6=c),c.register("kyEFX",(function(t,n){var o,r;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var c={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)c[t[n]]=e[t[n]]},r=function(e){var t=c[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),c("kyEFX").register(JSON.parse('{"fOhVW":"index.2fd18673.js","8srZq":"Icons.496e9310.svg"}'));var a;a=new URL(c("kyEFX").resolve("8srZq"),import.meta.url).toString();const i=document.querySelector(".header__form"),u=document.querySelector(".clock"),l=document.querySelector(".square-day"),s=(document.querySelector(".abbreviation-day"),document.querySelector(".month")),d=document.querySelector(".square-country"),m=document.querySelector(".square-degrees"),f=document.querySelector(".min"),g=document.querySelector(".max"),h=document.querySelector(".dawn"),p=document.querySelector(".sunset"),y=document.querySelector(".clima-icon"),w=document.querySelector(".legend");i.addEventListener("submit",(function(e){e.preventDefault();const{elements:{ciudad:t}}=e.target;console.log(t.value),S(t.value),localStorage.setItem("clima-message",t.value),e.currentTarget.reset(),clearInterval(x)}));let x;!function(){const e=new Date;l.innerText=new Intl.DateTimeFormat("local",{day:"numeric",weekday:"short"}).format(e),s.textContent=new Intl.DateTimeFormat("local",{month:"long"}).format(e)}();const S=async function(e){try{const n=await fetch(`\n    https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=c1e47110da4d70de2cafd30f980532f1&units=metric&lang=es`),o=await n.json();if(console.log(o),!n.ok)throw new Error(`${o.message} (${n.status})`);const{main:r,sys:c,wind:i,weather:S}=o;console.log(S[0]),console.log(S[0].description),w.textContent=`El pronostico para ${o.name}, ${c.country}. el dia de hoy, ${S[0].description}`;let v=[S[0].main];console.log(v),v.includes("Clouds")&&y.setAttribute("xlink:href",`${t(a)}#icon-Nubes`),v.includes("Clear")&&y.setAttribute("xlink:href",`${t(a)}#icon-calor`),v.includes("Fog")&&y.setAttribute("xlink:href",`${t(a)}#icon-Icono1`),v.includes("Rain")&&y.setAttribute("xlink:href",`${t(a)}#icon-Icono1`),v.includes("Snow")&&y.setAttribute("xlink:href",`${t(a)}#icon-Icono3`),m.textContent=Math.trunc(r.temp),f.textContent=`${Math.trunc(r.temp_min)}°`,g.textContent=`${Math.trunc(r.temp_max)}°`,d.textContent=`${o.name}, ${c.country}`,console.log(`${o.name}, ${c.country}`);const $=function(e){let t=moment.unix(e).utc();return moment(t._i).format("LT")},q=function(e){let t=moment.unix(e).utc();return moment(t._i).format("LT")}(c.sunrise),b=$(c.sunset);h.textContent=q,p.textContent=b,function(e,t){let n=new Date(1e3*e);n.setMinutes(n.getMinutes()+n.getTimezoneOffset()),n.setSeconds(n.getSeconds()+t);const o=new Date(n);console.log(o);const r=3600*o.getHours()+60*o.getMinutes()+1*o.getSeconds();console.log(r),x=setInterval((function(){++c;const e=String(Math.floor(c/3600)).padStart(2,0),t=String(Math.floor((c-3600*e)/60)).padStart(2,0),n=String(c-(3600*e+60*t)).padStart(2,0);u.textContent=e+":"+t+":"+n}),1e3);let c=r;l.textContent=new Intl.DateTimeFormat("local",{day:"numeric",weekday:"short"}).format(o),s.textContent=new Intl.DateTimeFormat("local",{month:"long"}).format(o)}(o.dt,o.timezone)}catch(e){alert(e)}};new Promise((function(e,t){navigator.geolocation.getCurrentPosition(e,t)})).then((e=>{const{latitude:t,longitude:n}=e.coords;return fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${t}&lon=${n}&limit=&appid=c1e47110da4d70de2cafd30f980532f1`)})).then((e=>{if(!e.ok)throw new Error(`Problem with geocoding ${e.status}`);return e.json()})).then((e=>{console.log(e),console.log(`You are in ${e[0].name}, ${e[0].country}`);const t=e[0].country.toLowerCase();return S(e[0].name),fetch(`https://restcountries.com/v3.1/name/${t}`)})).then((e=>{if(!e.ok)throw new Error(`Country not found (${e.status})`);return e.json()})).then((e=>{console.log(e[0])})).catch((e=>console.error(`${e.message} 💥`))),document.addEventListener("DOMContentLoaded",(function(e){console.log("HTML analizado y dom construido")}));
//# sourceMappingURL=index.2fd18673.js.map