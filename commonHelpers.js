/* empty css                      */import{S as y,N as b,K as m}from"./assets/vendor-245775bf.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const f=(a,i,c,n={})=>{const e=document.querySelector(a),t=document.querySelector(i),r=document.querySelector(c),w={modules:[b,m],navigation:{nextEl:t,prevEl:r},direction:"horizontal",autoHeight:!1,autoWidth:!1,watchOverflow:!1,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:24},1200:{slidesPerView:3}}},l=new y(e,{...w,...n});l.update();const u=(o,s)=>{s?(o.style.opacity="0.5",o.style.cursor="not-allowed"):(o.style.opacity="1",o.style.cursor="pointer")},d=new MutationObserver(o=>{o.forEach(s=>{if(s.attributeName==="class"){const p=s.target.classList.contains("swiper-button-disabled");s.target===t?u(t,p):s.target===r&&u(r,p)}})});return d.observe(t,{attributes:!0}),d.observe(r,{attributes:!0}),l};f(".swiper.swiper-one",".button-next-svg",".button-prev-svg",{loop:!0});const g=f(".swiper.swiper-box",".button-nex",".button-pre",{on:{reachEnd:()=>setTimeout(()=>g.slideTo(0,1e3),1e3)}});
//# sourceMappingURL=commonHelpers.js.map