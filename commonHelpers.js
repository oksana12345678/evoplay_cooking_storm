/* empty css                      */import{S as f,N as y,K as w}from"./assets/vendor-245775bf.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const p=(a,i,c)=>{const n=document.querySelector(a),e=document.querySelector(i),t=document.querySelector(c),r=new f(n,{modules:[y,w],navigation:{nextEl:e,prevEl:t},direction:"horizontal",autoHeight:!1,autoWidth:!1,watchOverflow:!1,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:24},1200:{slidesPerView:3}}});r.on("reachEnd",()=>{setTimeout(()=>{r.slideTo(0,1e3)},1200)}),r.update();const l=(o,s)=>{s?(o.style.opacity="0.5",o.style.cursor="not-allowed"):(o.style.opacity="1",o.style.cursor="pointer")},u=new MutationObserver(o=>{o.forEach(s=>{if(s.attributeName==="class"){const d=s.target.classList.contains("swiper-button-disabled");s.target===e?l(e,d):s.target===t&&l(t,d)}})});return u.observe(e,{attributes:!0}),u.observe(t,{attributes:!0}),r};p(".swiper.swiper-one",".button-next-svg",".button-prev-svg");p(".swiper.swiper-box",".button-nex",".button-pre");
//# sourceMappingURL=commonHelpers.js.map
