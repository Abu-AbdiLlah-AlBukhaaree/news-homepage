(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l=document.getElementById("open-nav"),a=document.getElementById("close-nav"),s=document.getElementById("nav"),r=document.getElementById("nav-items");l.addEventListener("click",()=>{s.classList.remove("hidden"),s.classList.add("block"),r.classList.remove("translate-x-full"),r.classList.add("translate-x-0")});a.addEventListener("click",()=>{s.classList.remove("block"),s.classList.add("hidden"),r.classList.remove("translate-x-0"),r.classList.add("translate-x-full")});
