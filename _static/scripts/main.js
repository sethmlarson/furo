!function(e,t){"function"==typeof define&&define.amd?define([],function(){return t(e)}):"object"==typeof exports?module.exports=t(e):e.Gumshoe=t(e)}("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,function(u){"use strict";function f(e,t,n){var o;n.settings.events&&(o=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n}),t.dispatchEvent(o))}function n(e){var t=0;if(e.offsetParent)for(;e;)t+=e.offsetTop,e=e.offsetParent;return 0<=t?t:0}function d(e){e&&e.sort(function(e,t){return n(e.content)<n(t.content)?-1:1})}function c(e,t,n){var o,s=e.getBoundingClientRect(),r="function"==typeof(o=t).offset?parseFloat(o.offset()):parseFloat(o.offset);return n?parseInt(s.bottom,10)<(u.innerHeight||document.documentElement.clientHeight):parseInt(s.top,10)<=r}function i(){return Math.ceil(u.innerHeight+u.pageYOffset)>=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)}function v(e,t){var n,o,s=e[e.length-1];if(n=s,o=t,!(!i()||!c(n.content,o,!0)))return s;for(var r=e.length-1;0<=r;r--)if(c(e[r].content,t))return e[r]}function m(e,t){var n;!e||(n=e.nav.closest("li"))&&(n.classList.remove(t.navClass),e.content.classList.remove(t.contentClass),o(n,t),f("gumshoeDeactivate",n,{link:e.nav,content:e.content,settings:t}))}var h={navClass:"active",contentClass:"active",nested:!1,nestedClass:"active",offset:0,reflow:!1,events:!0},o=function(e,t){var n;t.nested&&e.parentNode&&((n=e.parentNode.closest("li"))&&(n.classList.remove(t.nestedClass),o(n,t)))},p=function(e,t){var n;!t.nested||(n=e.parentNode.closest("li"))&&(n.classList.add(t.nestedClass),p(n,t))};return function(e,t){var n,s,r,o,c,i={setup:function(){n=document.querySelectorAll(e),s=[],Array.prototype.forEach.call(n,function(e){var t=document.getElementById(decodeURIComponent(e.hash.substr(1)));t&&s.push({nav:e,content:t})}),d(s)}};i.detect=function(){var e,t,n,o=v(s,c);o?r&&o.content===r.content||(m(r,c),t=c,!(e=o)||(n=e.nav.closest("li"))&&(n.classList.add(t.navClass),e.content.classList.add(t.contentClass),p(n,t),f("gumshoeActivate",n,{link:e.nav,content:e.content,settings:t})),r=o):r&&(m(r,c),r=null)};function a(e){o&&u.cancelAnimationFrame(o),o=u.requestAnimationFrame(i.detect)}function l(e){o&&u.cancelAnimationFrame(o),o=u.requestAnimationFrame(function(){d(s),i.detect()})}i.destroy=function(){r&&m(r,c),u.removeEventListener("scroll",a,!1),c.reflow&&u.removeEventListener("resize",l,!1),c=o=r=n=s=null};return c=function(){var n={};return Array.prototype.forEach.call(arguments,function(e){for(var t in e){if(!e.hasOwnProperty(t))return;n[t]=e[t]}}),n}(h,t||{}),i.setup(),i.detect(),u.addEventListener("scroll",a,!1),c.reflow&&u.addEventListener("resize",l,!1),i}}),function(o,s){var r=null,c=null;function e(){var t,n=!1;o.addEventListener("scroll",function(e){t=o.scrollY,n||(o.requestAnimationFrame(function(){var e;0==(e=t)?r.classList.remove("scrolled"):r.classList.add("scrolled"),null!==c&&(0==e?c.scrollTo(0,0):Math.ceil(o.innerHeight+e)>=s.body.offsetHeight&&c.scrollTo(0,c.scrollHeight)),n=!1}),n=!0)})}s.addEventListener("DOMContentLoaded",function(){s.body.parentNode.classList.remove("no-js"),r=s.querySelector("header"),c=s.querySelector(".toc-scroll"),e(),null!==c&&new Gumshoe(".toc-tree a",{reflow:!0,recursive:!0,navClass:"scroll-current"})})}(window,document);