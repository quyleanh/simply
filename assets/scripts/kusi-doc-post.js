/*!
 * simply v0.4.0
 * Copyright 2022 GodoFredo <hello@godofredo.ninja> (https://github.com/godofredoninja/simply)
 * Licensed under GPLv3
 */!function n(o,i,c){function s(t,e){if(!i[t]){if(!o[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(l)return l(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}r=i[t]={exports:{}},o[t][0].call(r.exports,function(e){return s(o[t][1][e]||e)},r,r.exports,n,o,i,c)}return i[t].exports}for(var l="function"==typeof require&&require,e=0;e<c.length;e++)s(c[e]);return s}({1:[function(e,t,r){"use strict";document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".js-kusi-doc");if(e){const t=e.querySelectorAll(["h2","h3"].join(","));if(t.length){const i=document.querySelector(".js-table-content"),r=document.querySelector(".js-sidebar-right");r&&r.classList.add("lg:block"),t.forEach(e=>{e.classList="hover-title";const t=document.createElement("a");t.href="#".concat(e.getAttribute("id"));var r=t.cloneNode(!0),n=e;if(i){r.textContent=n.textContent;const o=document.createElement("li");n.closest("h3")?r.classList="py-2 px-3 docstoc block hover:text-primary":r.classList="py-2 px-3 block hover:text-primary",o.appendChild(r),i.appendChild(o)}n=t,r=e,n.setAttribute("aria-hidden","true"),n.innerHTML='<svg class="icon is-stroke" aria-hidden="true"><use xlink:href="#icon-link"></use></svg>',n.classList="anchor px-3 inline-block invisible opacity-0 -ml-12 text-gray-500",r.insertBefore(n,r.childNodes[0])})}}})},{}]},{},[1]);