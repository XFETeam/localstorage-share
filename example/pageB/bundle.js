!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.localstorageShare=t():e.localstorageShare=t()}(window,(function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DATA_CLONE_ERROR=t.MESSAGE=t.REJECTED=t.FULFILLED=t.REPLY=t.CALL=t.HANDSHAKE_REPLY=t.HANDSHAKE=void 0;t.HANDSHAKE="handshake";t.HANDSHAKE_REPLY="handshake-reply";t.CALL="call";t.REPLY="reply";t.FULFILLED="fulfilled";t.REJECTED="rejected";t.MESSAGE="message";t.DATA_CLONE_ERROR="DataCloneError"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ERR_NO_IFRAME_SRC=t.ERR_NOT_IN_IFRAME=t.ERR_CONNECTION_TIMEOUT=t.ERR_CONNECTION_DESTROYED=void 0;t.ERR_CONNECTION_DESTROYED="ConnectionDestroyed";t.ERR_CONNECTION_TIMEOUT="ConnectionTimeout";t.ERR_NOT_IN_IFRAME="NotInIframe";t.ERR_NO_IFRAME_SRC="NoIframeSrc"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.deserializeError=t.serializeError=void 0;t.serializeError=e=>{return{name:e.name,message:e.message,stack:e.stack}};t.deserializeError=e=>{const t=new Error;return Object.keys(e).forEach(r=>t[r]=e[r]),t}},function(e,t,r){const o=r(4);e.exports=new class{init(){const e=document.createElement("iframe");e.src="https://browniu.github.io/localstorage-share/",e.style.display="none",document.body.appendChild(e),this.connection=o({iframe:e,methods:{get:(e,t)=>{console.log(e,t)}}})}getItem(e){this.connection.promise.then(t=>{t.get(e)})}setItem(e,t){this.connection.promise.then(r=>{r.set(e,t)})}clear(){this.connection.promise.then(e=>{e.clear()})}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(0),n=r(1),i=l(r(5)),a=l(r(6)),s=l(r(7)),c=l(r(8)),d=l(r(9));function l(e){return e&&e.__esModule?e:{default:e}}t.default=e=>{let t=e.iframe,r=e.methods,l=void 0===r?{}:r,u=e.childOrigin,f=e.timeout,E=e.debug;const p=(0,s.default)(E),m=window,_=(0,i.default)(),R=_.destroy,v=_.onDestroy;if(!u){if(!t.src&&!t.srcdoc){const e=new Error("Iframe must have src or srcdoc property defined.");throw e.code=n.ERR_NO_IFRAME_SRC,e}u=(0,a.default)(t.src)}const g="null"===u?"*":u;return{promise:new Promise((e,r)=>{let i;void 0!==f&&(i=setTimeout(()=>{const e=new Error(`Connection to child timed out after ${f}ms`);e.code=n.ERR_CONNECTION_TIMEOUT,r(e),R()},f));const a={};let s,E;const _=r=>{const n=t.contentWindow;if(r.source!==n||r.data.penpal!==o.HANDSHAKE)return;if(r.origin!==u)return void p(`Parent received handshake from origin ${r.origin} which did not match expected origin ${u}`);p("Parent: Received handshake, sending reply"),r.source.postMessage({penpal:o.HANDSHAKE_REPLY,methodNames:Object.keys(l)},g);const f={localName:"Parent",local:m,remote:n,originForSending:g,originForReceiving:u};E&&E(),E=(0,c.default)(f,l,p),v(E),s&&s.forEach(e=>{delete a[e]}),s=r.data.methodNames;const _=(0,d.default)(a,f,s,R,p);v(_),clearTimeout(i),e(a)};m.addEventListener(o.MESSAGE,_),p("Parent: Awaiting handshake");var h=setInterval(()=>{document.contains(t)||(clearInterval(h),R())},6e4);v(()=>{m.removeEventListener(o.MESSAGE,_),clearInterval(h);const e=new Error("Connection destroyed");e.code=n.ERR_CONNECTION_DESTROYED,r(e)})}),destroy:R}},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=()=>{const e=[];let t=!1;return{destroy(){t=!0,e.forEach(e=>{e()})},onDestroy(r){t?r():e.push(r)}}},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const o={"http:":"80","https:":"443"},n=/^(https?:)?\/\/([^/:]+)?(:(\d+))?/,i=["file:","data:"];t.default=e=>{if(e&&i.find(t=>e.startsWith(t)))return"null";const t=document.location,r=n.exec(e);let a,s,c;return r?(a=r[1]?r[1]:t.protocol,s=r[2],c=r[4]):(a=t.protocol,s=t.hostname,c=t.port),`${a}//${s}${c&&c!==o[a]?`:${c}`:""}`},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=e=>(function(){if(e){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];console.log("[Penpal]",...r)}}),e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(0),n=r(2);t.default=(e,t,r)=>{const i=e.localName,a=e.local,s=e.remote,c=e.originForSending,d=e.originForReceiving;let l=!1;r(`${i}: Connecting call receiver`);const u=e=>{if(e.source!==s||e.data.penpal!==o.CALL)return;if(e.origin!==d)return void r(`${i} received message from origin ${e.origin} which did not match expected origin ${d}`);const a=e.data,u=a.methodName,f=a.args,E=a.id;r(`${i}: Received ${u}() call`);const p=e=>t=>{if(r(`${i}: Sending ${u}() reply`),l)return void r(`${i}: Unable to send ${u}() reply due to destroyed connection`);const a={penpal:o.REPLY,id:E,resolution:e,returnValue:t};e===o.REJECTED&&t instanceof Error&&(a.returnValue=(0,n.serializeError)(t),a.returnValueIsError=!0);try{s.postMessage(a,c)}catch(e){throw e.name===o.DATA_CLONE_ERROR&&s.postMessage({penpal:o.REPLY,id:E,resolution:o.REJECTED,returnValue:(0,n.serializeError)(e),returnValueIsError:!0},c),e}};new Promise(e=>e(t[u].apply(t,f))).then(p(o.FULFILLED),p(o.REJECTED))};return a.addEventListener(o.MESSAGE,u),()=>{l=!0,a.removeEventListener(o.MESSAGE,u)}},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,n=r(0),i=r(1),a=(o=r(10))&&o.__esModule?o:{default:o},s=r(2);t.default=(e,t,r,o,c)=>{const d=t.localName,l=t.local,u=t.remote,f=t.originForSending,E=t.originForReceiving;let p=!1;c(`${d}: Connecting call sender`);return r.reduce((e,t)=>(e[t]=(e=>(function(){for(var t=arguments.length,r=new Array(t),m=0;m<t;m++)r[m]=arguments[m];let _;c(`${d}: Sending ${e}() call`);try{u.closed&&(_=!0)}catch(e){_=!0}if(_&&o(),p){const t=new Error(`Unable to send ${e}() call due `+"to destroyed connection");throw t.code=i.ERR_CONNECTION_DESTROYED,t}return new Promise((t,o)=>{const i=(0,a.default)(),p=r=>{if(r.source!==u||r.data.penpal!==n.REPLY||r.data.id!==i)return;if(r.origin!==E)return void c(`${d} received message from origin ${r.origin} which did not match expected origin ${E}`);c(`${d}: Received ${e}() reply`),l.removeEventListener(n.MESSAGE,p);let a=r.data.returnValue;r.data.returnValueIsError&&(a=(0,s.deserializeError)(a)),(r.data.resolution===n.FULFILLED?t:o)(a)};l.addEventListener(n.MESSAGE,p),u.postMessage({penpal:n.CALL,id:i,methodName:e,args:r},f)})}))(t),e),e),()=>{p=!0}},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;let o=0;t.default=()=>++o,e.exports=t.default}])}));