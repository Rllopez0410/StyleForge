(()=>{"use strict";var e,r,t,n,o,i,a,s,c,d,l,p,f,u,b={800:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(81),o=t.n(n),i=t(645),a=t.n(i)()(o());a.push([e.id,'*,::after,::before{margin:0%;padding:0%;box-sizing:border-box;color:#fff}ul{list-style:none}body{height:100dvh}.content{display:flex;flex-direction:column;background-color:#000120;background-image:linear-gradient(rgb(0, 1, 32), rgb(36, 8, 107), rgb(47, 12, 135));font-family:Georgia,"Times New Roman",Times,serif;height:100dvh}.content header{display:flex;border:1px solid red}.content header .icon{display:flex;align-items:center;padding-left:2%;flex:2;border:1px solid red}.content header nav{display:flex;justify-content:center;align-items:center;flex:3}.content header nav #nav-bar{display:flex;justify-content:center;align-items:center;gap:20px;overflow-y:visible;font-size:24px;width:500px;height:70px}.content header nav #nav-bar .tabs{display:flex;justify-content:center;align-items:center;background-color:#2f0c87;position:relative;bottom:50px;width:250px;height:200px;border-radius:0px 0px 75px 75px;box-shadow:0px 0px 10px #000;padding-top:100px;transition:450ms}.content header nav #nav-bar .tabs:hover{bottom:-50px;padding-top:20px;cursor:pointer}.content main{display:flex;justify-content:center;align-items:center;border:1px solid red;padding-top:2%;padding-bottom:2%}.content main .display{display:flex;width:1020px;height:550px;border-radius:20px;overflow:hidden;border:1px solid red;box-shadow:0px 5px 5px #000}.content main .display .browser-window{display:flex;flex-direction:column;flex:1}.content main .display .browser-window .browser-top{display:flex;justify-content:center;align-items:center;border:1px solid red;background-color:#bebebe;flex:.7}.content main .display .browser-window .browser-top .browser-btns{display:flex;justify-content:flex-start;flex:1;gap:5px;padding-left:5px;border:1px solid red}.content main .display .browser-window .browser-top .browser-btns .circles{border:1px solid red;width:20px;height:20px;border-radius:100px}.content main .display .browser-window .browser-top .browser-btns .circles:first-child{background-color:#f44}.content main .display .browser-window .browser-top .browser-btns .circles:last-child{background-color:#00b600}.content main .display .browser-window .browser-top .browser-btns .circles:nth-child(0n+2){background-color:#fefe18}.content main .display .browser-window .browser-top .browser-search{display:flex;justify-content:center;align-items:center;flex:4;border:1px solid red}.content main .display .browser-window .browser-top .browser-search .search-bar{width:600px;height:35px;background-color:#fff;border-radius:8px}.content main .display .browser-window .browser-display{flex:6;background-color:#fff;border:1px solid red}',""]);const s=a},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",n=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),n&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),n&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,n,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);n&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function t(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function n(e,n){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],d=n.base?c[0]+n.base:c[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var f=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)r[f].references++,r[f].updater(u);else{var b=o(u,n);n.byIndex=s,r.splice(s,0,{identifier:p,updater:b,references:1})}a.push(p)}return a}function o(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,o){var i=n(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);r[s].references--}for(var c=n(e,o),d=0;d<i.length;d++){var l=t(i[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=c}}},569:e=>{var r={};e.exports=function(e,t){var n=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,t)=>{e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,o&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(n,e,r.options)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},x={};function h(e){var r=x[e];if(void 0!==r)return r.exports;var t=x[e]={id:e,exports:{}};return b[e](t,t.exports,h),t.exports}h.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return h.d(r,{a:r}),r},h.d=(e,r)=>{for(var t in r)h.o(r,t)&&!h.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},h.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),h.nc=void 0,e=h(379),r=h.n(e),t=h(795),n=h.n(t),o=h(569),i=h.n(o),a=h(565),s=h.n(a),c=h(216),d=h.n(c),l=h(589),p=h.n(l),f=h(800),(u={}).styleTagTransform=p(),u.setAttributes=s(),u.insert=i().bind(null,"head"),u.domAPI=n(),u.insertStyleElement=d(),r()(f.Z,u),f.Z&&f.Z.locals&&f.Z.locals})();