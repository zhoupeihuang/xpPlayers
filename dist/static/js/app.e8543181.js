(function(e){function t(t){for(var o,a,u=t[0],i=t[1],f=t[2],l=0,s=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&s.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);b&&b(t);while(s.length)s.shift()();return c.push.apply(c,f||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},c=[];function a(e){return u.p+"static/js/"+({about:"about"}[e]||e)+"."+{about:"bf24b7d4","chunk-0cfce052":"9285ff47","chunk-2d0abba2":"7de0f46f","chunk-78a2b544":"4b247c66","chunk-21ad2eca":"33c90c26"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=a(e);var f=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",f.name="ChunkLoadError",f.type=o,f.request=c,n[1](f)}r[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var b=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("7a23");const r={id:"nav"};function c(e,t){const n=Object(o["u"])("router-link"),c=Object(o["u"])("router-view");return Object(o["q"])(),Object(o["d"])(o["a"],null,[Object(o["e"])("div",r,[Object(o["g"])(n,{to:"/"},{default:Object(o["y"])(()=>[Object(o["f"])("Home")]),_:1}),Object(o["f"])(" | "),Object(o["g"])(n,{to:"/zhibo"},{default:Object(o["y"])(()=>[Object(o["f"])("直播")]),_:1}),Object(o["f"])(" | "),Object(o["g"])(n,{to:"/huifang"},{default:Object(o["y"])(()=>[Object(o["f"])("回放")]),_:1}),Object(o["f"])(" | "),Object(o["g"])(n,{to:"/video"},{default:Object(o["y"])(()=>[Object(o["f"])("video")]),_:1})]),Object(o["g"])(c)],64)}n("7af5");var a=n("6b0d"),u=n.n(a);const i={},f=u()(i,[["render",c]]);var l=f,b=n("6605"),s=n("cf05"),d=n.n(s);const p={class:"home"},h=Object(o["e"])("img",{alt:"Vue logo",src:d.a},null,-1),m=[h];function v(e,t,n,r,c,a){return Object(o["q"])(),Object(o["d"])("div",p,m)}var j={name:"Home",components:{}};const O=u()(j,[["render",v]]);var g=O;const y=[{path:"/",name:"Home",component:g},{path:"/about",name:"About",component:()=>n.e("about").then(n.bind(null,"f820"))},{path:"/zhibo",name:"Zhibo",component:()=>Promise.all([n.e("chunk-0cfce052"),n.e("chunk-78a2b544")]).then(n.bind(null,"757b")),meta:{title:"直播m3u8",icon:"video"}},{path:"/huifang",name:"Huifang",component:()=>Promise.all([n.e("chunk-0cfce052"),n.e("chunk-2d0abba2")]).then(n.bind(null,"1706")),meta:{title:"回放播放器",icon:"video"}},{path:"/video",name:"Video",component:()=>n.e("chunk-21ad2eca").then(n.bind(null,"007b")),meta:{title:"video",icon:"video"}}],k=Object(b["a"])({history:Object(b["b"])(),routes:y});var w=k,P=n("5502"),_=Object(P["a"])({state:{},mutations:{},actions:{},modules:{}});n("b321");Object(o["c"])(l).use(_).use(w).mount("#app")},"7af5":function(e,t,n){"use strict";n("9e82")},"9e82":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"static/img/logo.82b9c7a5.png"}});