!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SimpleImage=e():t.SimpleImage=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){function r(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n(1).toString();var o=function(){function t(e){var n=e.data,r=(e.config,e.api),i=e.readOnly;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=r,this.readOnly=i,this.blockIndex=this.api.blocks.getCurrentBlockIndex()+1,this.CSS={baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive,wrapper:"editorjs-iframe",holder:["editorjs-iframe__frame","flex"]},this.nodes={wrapper:null,holder:null,image:null,iframe:null},this.data={frame:void 0!==n.frame?n.frame:"",alignment:!!n.alignment&&n.alignment},this.settings=[{name:"LeftAligned",icon:'<svg  width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M12.83 344h262.34A12.82 12.82 0 0 0 288 331.17v-22.34A12.82 12.82 0 0 0 275.17 296H12.83A12.82 12.82 0 0 0 0 308.83v22.34A12.82 12.82 0 0 0 12.83 344zm0-256h262.34A12.82 12.82 0 0 0 288 75.17V52.83A12.82 12.82 0 0 0 275.17 40H12.83A12.82 12.82 0 0 0 0 52.83v22.34A12.82 12.82 0 0 0 12.83 88zM432 168H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0 256H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16z"/></svg>'},{name:"Centered",icon:'<svg  width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M108.1 88h231.81A12.09 12.09 0 0 0 352 75.9V52.09A12.09 12.09 0 0 0 339.91 40H108.1A12.09 12.09 0 0 0 96 52.09V75.9A12.1 12.1 0 0 0 108.1 88zM432 424H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0-256H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm-92.09 176A12.09 12.09 0 0 0 352 331.9v-23.81A12.09 12.09 0 0 0 339.91 296H108.1A12.09 12.09 0 0 0 96 308.09v23.81a12.1 12.1 0 0 0 12.1 12.1z"/></svg>'},{name:"RightAligned",icon:'<svg  width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M16 216h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16zm416 208H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm3.17-384H172.83A12.82 12.82 0 0 0 160 52.83v22.34A12.82 12.82 0 0 0 172.83 88h262.34A12.82 12.82 0 0 0 448 75.17V52.83A12.82 12.82 0 0 0 435.17 40zm0 256H172.83A12.82 12.82 0 0 0 160 308.83v22.34A12.82 12.82 0 0 0 172.83 344h262.34A12.82 12.82 0 0 0 448 331.17v-22.34A12.82 12.82 0 0 0 435.17 296z"/></svg>'}]}var e,n,i;return e=t,i=[{key:"sanitize",get:function(){return{frame:!0,html:{}}}},{key:"isReadOnlySupported",get:function(){return!0}},{key:"pasteConfig",get:function(){return{tags:["iframe"],patterns:{iframe:/(?:<iframe[^>]*)(?:(?:\/>)|(?:>.*?<\/iframe>))/}}}}],(n=[{key:"render",value:function(){var t=this._make("div",[this.CSS.baseClass,this.CSS.wrapper]),e=this._make("div",this.CSS.loading),n=this._make("div",this.CSS.holder),r=this._make("iframe");return t.appendChild(e),n.appendChild(r),t.classList.remove(this.CSS.loading),t.appendChild(n),this.data.frame&&(r.parentElement.innerHTML=this.data.frame),e.remove(),r.onerror=function(t){},this.nodes.holder=n,this.nodes.wrapper=t,this.nodes.iframe=r,this.data.alignment&&(console.log(this.data.alignment),this._acceptTuneView()),t}},{key:"save",value:function(t){var e=t.querySelector("iframe");return e?(Object.assign(this.data,{frame:e.parentElement.innerHTML}),this._data.frame=e.parentElement.innerHTML,this._data):this.data}},{key:"onPaste",value:function(t){switch(t.type){case"tag":var e=t.detail.data;this.data={frame:e};break;case"pattern":var n=t.detail.data;this.data={frame:n},this._data=Object.assign({},this.data,{frame:n})}}},{key:"data",get:function(){return this._data},set:function(t){this._data=Object.assign({},this.data,t),this.nodes.iframe&&(this.nodes.iframe.parentElement.innerHTML=this.data.frame)}},{key:"renderSettings",value:function(){var t=this,e=document.createElement("div");return this.settings.forEach((function(n){var r=document.createElement("div");r.setAttribute("id",n.name),r.classList.add(t.CSS.settingsButton),r.innerHTML=n.icon,r.addEventListener("click",(function(){t._toggleTune(n.name)})),t.data.alignment==n.name&&r.classList.add(t.CSS.settingsButtonActive),e.appendChild(r)})),e}},{key:"_make",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=document.createElement(t);for(var o in Array.isArray(n)?(e=a.classList).add.apply(e,r(n)):n&&a.classList.add(n),i)a[o]=i[o];return a}},{key:"_toggleTune",value:function(t){var e=this;this.data[t]=!this.data[t],this.data.alignment=t,this.settings.forEach((function(n){n.name==t?document.getElementById(n.name).classList.add(e.CSS.settingsButtonActive):document.getElementById(n.name).classList.remove(e.CSS.settingsButtonActive)})),this._acceptTuneView()}},{key:"_acceptTuneView",value:function(){"LeftAligned"==this.data.alignment?this.nodes.holder.classList.add("justify-start"):this.nodes.holder.classList.remove("justify-start"),"RightAligned"==this.data.alignment?this.nodes.holder.classList.add("justify-end"):this.nodes.holder.classList.remove("justify-end"),"Centered"==this.data.alignment?this.nodes.holder.classList.add("justify-center"):this.nodes.holder.classList.remove("justify-center")}}])&&a(e.prototype,n),i&&a(e,i),t}();t.exports=o},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".editorjs-iframe {}\n\n.editorjs-iframe .cdx-loader {\n  min-height: 200px;\n}\n\n.editorjs-iframe .cdx-input {\n  margin-top: 10px;\n}\n\n.editorjs-iframe iframe {\n  max-width: 100%;\n  vertical-align: bottom;\n}\n\n.editorjs-iframe__caption[contentEditable=true][data-placeholder]:empty::before {\n  position: absolute;\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n }\n\n.editorjs-iframe__caption[contentEditable=true][data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.editorjs-iframe__caption[contentEditable=true][data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n.flex{\n  display: flex;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),a=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[n].concat(a).concat([i]).join("\n")}var o;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<t.length;i++){var o=t[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(t,e,n){var r,i,a={},o=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(t){return document.querySelector(t)},l=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=s.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),u=null,c=0,f=[],d=n(5);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=a[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(b(r.parts[o],e))}else{var s=[];for(o=0;o<r.parts.length;o++)s.push(b(r.parts[o],e));a[r.id]={id:r.id,refs:1,parts:s}}}}function h(t,e){for(var n=[],r={},i=0;i<t.length;i++){var a=t[i],o=e.base?a[0]+e.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[o]?r[o].parts.push(s):n.push(r[o]={id:o,parts:[s]})}return n}function m(t,e){var n=l(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),f.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=l(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,i)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function y(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),g(e,t.attrs),m(t,e),e}function g(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function b(t,e){var n,r,i,a;if(e.transform&&t.css){if(!(a=e.transform(t.css)))return function(){};t.css=a}if(e.singleton){var o=c++;n=u||(u=y(e)),r=j.bind(null,n,o,!1),i=j.bind(null,n,o,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),m(t,e),e}(e),r=x.bind(null,n,e),i=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(e),r=S.bind(null,n),i=function(){v(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return p(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var o=n[i];(s=a[o.id]).refs--,r.push(s)}t&&p(h(t,e),e);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete a[s.id]}}}};var w,A=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function j(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=A(e,i);else{var a=document.createTextNode(i),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(a,o[e]):t.appendChild(a)}}function S(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function x(t,e,n){var r=n.css,i=n.sourceMap,a=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||a)&&(r=d(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var i,a=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?t:(i=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}}])}));