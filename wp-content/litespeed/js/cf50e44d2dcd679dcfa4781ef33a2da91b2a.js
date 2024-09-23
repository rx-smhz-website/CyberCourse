/*! This file is auto-generated */
(()=>{var e={6689:(e,t,n)=>{"use strict";n.d(t,{createUndoManager:()=>c});var r=n(923),o=n.n(r);function u(e,t){const n={...e};return Object.entries(t).forEach((([e,t])=>{n[e]?n[e]={...n[e],to:t.to}:n[e]=t})),n}const i=(e,t)=>{const n=e?.findIndex((({id:e})=>"string"==typeof e?e===t.id:o()(e,t.id))),r=[...e];return-1!==n?r[n]={id:t.id,changes:u(r[n].changes,t.changes)}:r.push(t),r};function c(){let e=[],t=[],n=0;const r=()=>{e=e.slice(0,n||void 0),n=0},u=()=>{var n;const r=0===e.length?0:e.length-1;let o=null!==(n=e[r])&&void 0!==n?n:[];t.forEach((e=>{o=i(o,e)})),t=[],e[r]=o};return{addRecord(n,c=!1){const s=!n||(e=>!e.filter((({changes:e})=>Object.values(e).some((({from:e,to:t})=>"function"!=typeof e&&"function"!=typeof t&&!o()(e,t))))).length)(n);if(c){if(s)return;n.forEach((e=>{t=i(t,e)}))}else{if(r(),t.length&&u(),s)return;e.push(n)}},undo(){t.length&&(r(),u());const o=e[e.length-1+n];if(o)return n-=1,o},redo(){const t=e[e.length+n];if(t)return n+=1,t},hasUndo:()=>!!e[e.length-1+n],hasRedo:()=>!!e[e.length+n]}}},3758:function(e){
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
var t;t=function(){return function(){var e={686:function(e,t,n){"use strict";n.d(t,{default:function(){return x}});var r=n(279),o=n.n(r),u=n(370),i=n.n(u),c=n(817),s=n.n(c);function a(e){try{return document.execCommand(e)}catch(e){return!1}}var l=function(e){var t=s()(e);return a("cut"),t},f=function(e,t){var n=function(e){var t="rtl"===document.documentElement.getAttribute("dir"),n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[t?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(r,"px"),n.setAttribute("readonly",""),n.value=e,n}(e);t.container.appendChild(n);var r=s()(n);return a("copy"),n.remove(),r},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";return"string"==typeof e?n=f(e,t):e instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null==e?void 0:e.type)?n=f(e.value,t):(n=s()(e),a("copy")),n};function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.action,n=void 0===t?"copy":t,r=e.container,o=e.target,u=e.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==o){if(!o||"object"!==p(o)||1!==o.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&o.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(o.hasAttribute("readonly")||o.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return u?d(u,{container:r}):o?"cut"===n?l(o):d(o,{container:r}):void 0};function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r,o,u=b(e);if(t){var i=b(this).constructor;n=Reflect.construct(u,arguments,i)}else n=u.apply(this,arguments);return r=this,!(o=n)||"object"!==v(o)&&"function"!=typeof o?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r):o}}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function w(e,t){var n="data-clipboard-".concat(e);if(t.hasAttribute(n))return t.getAttribute(n)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(u,e);var t,n,r,o=g(u);function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=o.call(this)).resolveOptions(t),n.listenClick(e),n}return t=u,n=[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===v(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=i()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget,n=this.action(t)||"copy",r=h({action:n,container:this.container,target:this.target(t),text:this.text(t)});this.emit(r?"success":"error",{action:n,text:r,trigger:t,clearSelection:function(){t&&t.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(e){return w("action",e)}},{key:"defaultTarget",value:function(e){var t=w("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return w("text",e)}},{key:"destroy",value:function(){this.listener.destroy()}}],r=[{key:"copy",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return d(e,t)}},{key:"cut",value:function(e){return l(e)}},{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}],n&&m(t.prototype,n),r&&m(t,r),u}(o()),x=E},828:function(e){if("undefined"!=typeof Element&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},438:function(e,t,n){var r=n(828);function o(e,t,n,r,o){var i=u.apply(this,arguments);return e.addEventListener(n,i,o),{destroy:function(){e.removeEventListener(n,i,o)}}}function u(e,t,n,o){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&o.call(e,n)}}e.exports=function(e,t,n,r,u){return"function"==typeof e.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return o(e,t,n,r,u)})))}},879:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},370:function(e,t,n){var r=n(879),o=n(438);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!r.string(t))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(r.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}(e,t,n);if(r.string(e))return function(e,t,n){return o(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(e){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(e),r.removeAllRanges(),r.addRange(o),t=r.toString()}return t}},279:function(e){function t(){}t.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function o(){r.off(e,o),t.apply(n,arguments)}return o._=t,this.on(e,o,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],o=[];if(r&&t)for(var u=0,i=r.length;u<i;u++)r[u].fn!==t&&r[u].fn._!==t&&o.push(r[u]);return o.length?n[e]=o:delete n[e],this}},e.exports=t,e.exports.TinyEmitter=t}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}return n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n(686)}().default},e.exports=t()},1933:(e,t,n)=>{var r;!function(o,u,i){if(o){for(var c,s={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},a={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},l={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},f={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},d=1;d<20;++d)s[111+d]="f"+d;for(d=0;d<=9;++d)s[d+96]=d.toString();b.prototype.bind=function(e,t,n){var r=this;return e=e instanceof Array?e:[e],r._bindMultiple.call(r,e,t,n),r},b.prototype.unbind=function(e,t){return this.bind.call(this,e,(function(){}),t)},b.prototype.trigger=function(e,t){var n=this;return n._directMap[e+":"+t]&&n._directMap[e+":"+t]({},e),n},b.prototype.reset=function(){var e=this;return e._callbacks={},e._directMap={},e},b.prototype.stopCallback=function(e,t){if((" "+t.className+" ").indexOf(" mousetrap ")>-1)return!1;if(g(t,this.target))return!1;if("composedPath"in e&&"function"==typeof e.composedPath){var n=e.composedPath()[0];n!==e.target&&(t=n)}return"INPUT"==t.tagName||"SELECT"==t.tagName||"TEXTAREA"==t.tagName||t.isContentEditable},b.prototype.handleKey=function(){return this._handleKey.apply(this,arguments)},b.addKeycodes=function(e){for(var t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);c=null},b.init=function(){var e=b(u);for(var t in e)"_"!==t.charAt(0)&&(b[t]=function(t){return function(){return e[t].apply(e,arguments)}}(t))},b.init(),o.Mousetrap=b,e.exports&&(e.exports=b),void 0===(r=function(){return b}.call(t,n,t,e))||(e.exports=r)}function p(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)}function h(e){if("keypress"==e.type){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return s[e.which]?s[e.which]:a[e.which]?a[e.which]:String.fromCharCode(e.which).toLowerCase()}function v(e){return"shift"==e||"ctrl"==e||"alt"==e||"meta"==e}function m(e,t,n){return n||(n=function(){if(!c)for(var e in c={},s)e>95&&e<112||s.hasOwnProperty(e)&&(c[s[e]]=e);return c}()[e]?"keydown":"keypress"),"keypress"==n&&t.length&&(n="keydown"),n}function y(e,t){var n,r,o,u=[];for(n=function(e){return"+"===e?["+"]:(e=e.replace(/\+{2}/g,"+plus")).split("+")}(e),o=0;o<n.length;++o)r=n[o],f[r]&&(r=f[r]),t&&"keypress"!=t&&l[r]&&(r=l[r],u.push("shift")),v(r)&&u.push(r);return{key:r,modifiers:u,action:t=m(r,u,t)}}function g(e,t){return null!==e&&e!==u&&(e===t||g(e.parentNode,t))}function b(e){var t=this;if(e=e||u,!(t instanceof b))return new b(e);t.target=e,t._callbacks={},t._directMap={};var n,r={},o=!1,i=!1,c=!1;function s(e){e=e||{};var t,n=!1;for(t in r)e[t]?n=!0:r[t]=0;n||(c=!1)}function a(e,n,o,u,i,c){var s,a,l,f,d=[],p=o.type;if(!t._callbacks[e])return[];for("keyup"==p&&v(e)&&(n=[e]),s=0;s<t._callbacks[e].length;++s)if(a=t._callbacks[e][s],(u||!a.seq||r[a.seq]==a.level)&&p==a.action&&("keypress"==p&&!o.metaKey&&!o.ctrlKey||(l=n,f=a.modifiers,l.sort().join(",")===f.sort().join(",")))){var h=!u&&a.combo==i,m=u&&a.seq==u&&a.level==c;(h||m)&&t._callbacks[e].splice(s,1),d.push(a)}return d}function l(e,n,r,o){t.stopCallback(n,n.target||n.srcElement,r,o)||!1===e(n,r)&&(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}(n),function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}(n))}function f(e){"number"!=typeof e.which&&(e.which=e.keyCode);var n=h(e);n&&("keyup"!=e.type||o!==n?t.handleKey(n,function(e){var t=[];return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}(e),e):o=!1)}function d(e,t,u,i){function a(t){return function(){c=t,++r[e],clearTimeout(n),n=setTimeout(s,1e3)}}function f(t){l(u,t,e),"keyup"!==i&&(o=h(t)),setTimeout(s,10)}r[e]=0;for(var d=0;d<t.length;++d){var p=d+1===t.length?f:a(i||y(t[d+1]).action);m(t[d],p,i,e,d)}}function m(e,n,r,o,u){t._directMap[e+":"+r]=n;var i,c=(e=e.replace(/\s+/g," ")).split(" ");c.length>1?d(e,c,n,r):(i=y(e,r),t._callbacks[i.key]=t._callbacks[i.key]||[],a(i.key,i.modifiers,{type:i.action},o,e,u),t._callbacks[i.key][o?"unshift":"push"]({callback:n,modifiers:i.modifiers,action:i.action,seq:o,level:u,combo:e}))}t._handleKey=function(e,t,n){var r,o=a(e,t,n),u={},f=0,d=!1;for(r=0;r<o.length;++r)o[r].seq&&(f=Math.max(f,o[r].level));for(r=0;r<o.length;++r)if(o[r].seq){if(o[r].level!=f)continue;d=!0,u[o[r].seq]=1,l(o[r].callback,n,o[r].combo,o[r].seq)}else d||l(o[r].callback,n,o[r].combo);var p="keypress"==n.type&&i;n.type!=c||v(e)||p||s(u),i=d&&"keydown"==n.type},t._bindMultiple=function(e,t,n){for(var r=0;r<e.length;++r)m(e[r],t,n)},p(e,"keypress",f),p(e,"keydown",f),p(e,"keyup",f)}}("undefined"!=typeof window?window:null,"undefined"!=typeof window?document:null)},5760:()=>{!function(e){if(e){var t={},n=e.prototype.stopCallback;e.prototype.stopCallback=function(e,r,o,u){return!!this.paused||!t[o]&&!t[u]&&n.call(this,e,r,o)},e.prototype.bindGlobal=function(e,n,r){if(this.bind(e,n,r),e instanceof Array)for(var o=0;o<e.length;o++)t[e[o]]=!0;else t[e]=!0},e.init()}}("undefined"!=typeof Mousetrap?Mousetrap:void 0)},923:e=>{"use strict";e.exports=window.wp.isShallowEqual}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={exports:{}};return e[r].call(u.exports,u,u.exports,n),u.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r),n.d(r,{__experimentalUseDialog:()=>Z,__experimentalUseDragging:()=>X,__experimentalUseDropZone:()=>Re,__experimentalUseFixedWindowList:()=>Me,__experimentalUseFocusOutside:()=>$,compose:()=>m,createHigherOrderComponent:()=>a,debounce:()=>f,ifCondition:()=>g,observableMap:()=>p,pipe:()=>v,pure:()=>x,throttle:()=>d,useAsyncList:()=>be,useConstrainedTabbing:()=>j,useCopyOnClick:()=>N,useCopyToClipboard:()=>U,useDebounce:()=>Se,useDebouncedInput:()=>ke,useDisabled:()=>G,useFocusOnMount:()=>q,useFocusReturn:()=>W,useFocusableIframe:()=>Le,useInstanceId:()=>L,useIsomorphicLayoutEffect:()=>Q,useKeyboardShortcut:()=>ee,useMediaQuery:()=>ne,useMergeRefs:()=>B,useObservableValue:()=>Oe,usePrevious:()=>re,useReducedMotion:()=>oe,useRefEffect:()=>A,useResizeObserver:()=>ye,useStateWithHistory:()=>se,useThrottle:()=>Te,useViewportMatch:()=>he,useWarnOnChange:()=>we,withGlobalEvents:()=>C,withInstanceId:()=>D,withSafeTimeout:()=>M,withState:()=>O});var e=function(){return e=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},e.apply(this,arguments)};Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError;function t(e){return e.toLowerCase()}var o=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],u=/[^A-Z0-9]+/gi;function i(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce((function(e,t){return e.replace(t,n)}),e)}function c(e,t){var n=e.charAt(0),r=e.substr(1).toLowerCase();return t>0&&n>="0"&&n<="9"?"_"+n+r:""+n.toUpperCase()+r}function s(n,r){return void 0===r&&(r={}),function(e,n){void 0===n&&(n={});for(var r=n.splitRegexp,c=void 0===r?o:r,s=n.stripRegexp,a=void 0===s?u:s,l=n.transform,f=void 0===l?t:l,d=n.delimiter,p=void 0===d?" ":d,h=i(i(e,c,"$1\0$2"),a,"\0"),v=0,m=h.length;"\0"===h.charAt(v);)v++;for(;"\0"===h.charAt(m-1);)m--;return h.slice(v,m).split("\0").map(f).join(p)}(n,e({delimiter:"",transform:c},r))}function a(e,t){return n=>{const r=e(n);return r.displayName=l(t,n),r}}const l=(e,t)=>{const n=t.displayName||t.name||"Component";return`${s(null!=e?e:"")}(${n})`},f=(e,t,n)=>{let r,o,u,i,c,s=0,a=0,l=!1,f=!1,d=!0;function p(t){const n=r,i=o;return r=void 0,o=void 0,a=t,u=e.apply(i,n),u}function h(e,t){i=setTimeout(e,t)}function v(e){return e-(c||0)}function m(e){const n=v(e);return void 0===c||n>=t||n<0||f&&e-a>=s}function y(){const e=Date.now();if(m(e))return b(e);h(y,function(e){const n=v(e),r=e-a,o=t-n;return f?Math.min(o,s-r):o}(e))}function g(){i=void 0}function b(e){return g(),d&&r?p(e):(r=o=void 0,u)}function w(){return void 0!==i}function E(...e){const n=Date.now(),i=m(n);if(r=e,o=this,c=n,i){if(!w())return function(e){return a=e,h(y,t),l?p(e):u}(c);if(f)return h(y,t),p(c)}return w()||h(y,t),u}return n&&(l=!!n.leading,f="maxWait"in n,void 0!==n.maxWait&&(s=Math.max(n.maxWait,t)),d="trailing"in n?!!n.trailing:d),E.cancel=function(){void 0!==i&&clearTimeout(i),a=0,g(),r=c=o=void 0},E.flush=function(){return w()?b(Date.now()):u},E.pending=w,E},d=(e,t,n)=>{let r=!0,o=!0;return n&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),f(e,t,{leading:r,trailing:o,maxWait:t})};function p(){const e=new Map,t=new Map;function n(e){const n=t.get(e);if(n)for(const e of n)e()}return{get:t=>e.get(t),set(t,r){e.set(t,r),n(t)},delete(t){e.delete(t),n(t)},subscribe(e,n){let r=t.get(e);return r||(r=new Set,t.set(e,r)),r.add(n),()=>{r.delete(n),0===r.size&&t.delete(e)}}}}const h=(e=!1)=>(...t)=>(...n)=>{const r=t.flat();return e&&r.reverse(),r.reduce(((e,t)=>[t(...e)]),n)[0]},v=h(),m=h(!0),y=window.ReactJSXRuntime;const g=function(e){return a((t=>n=>e(n)?(0,y.jsx)(t,{...n}):null),"ifCondition")};var b=n(923),w=n.n(b);const E=window.wp.element,x=a((function(e){return e.prototype instanceof E.Component?class extends e{shouldComponentUpdate(e,t){return!w()(e,this.props)||!w()(t,this.state)}}:class extends E.Component{shouldComponentUpdate(e){return!w()(e,this.props)}render(){return(0,y.jsx)(e,{...this.props})}}}),"pure"),S=window.wp.deprecated;var k=n.n(S);const T=new class{constructor(){this.listeners={},this.handleEvent=this.handleEvent.bind(this)}add(e,t){this.listeners[e]||(window.addEventListener(e,this.handleEvent),this.listeners[e]=[]),this.listeners[e].push(t)}remove(e,t){this.listeners[e]&&(this.listeners[e]=this.listeners[e].filter((e=>e!==t)),this.listeners[e].length||(window.removeEventListener(e,this.handleEvent),delete this.listeners[e]))}handleEvent(e){this.listeners[e.type]?.forEach((t=>{t.handleEvent(e)}))}};function C(e){return k()("wp.compose.withGlobalEvents",{since:"5.7",alternative:"useEffect"}),a((t=>{class n extends E.Component{constructor(e){super(e),this.handleEvent=this.handleEvent.bind(this),this.handleRef=this.handleRef.bind(this)}componentDidMount(){Object.keys(e).forEach((e=>{T.add(e,this)}))}componentWillUnmount(){Object.keys(e).forEach((e=>{T.remove(e,this)}))}handleEvent(t){const n=e[t.type];"function"==typeof this.wrappedRef[n]&&this.wrappedRef[n](t)}handleRef(e){this.wrappedRef=e,this.props.forwardedRef&&this.props.forwardedRef(e)}render(){return(0,y.jsx)(t,{...this.props.ownProps,ref:this.handleRef})}}return(0,E.forwardRef)(((e,t)=>(0,y.jsx)(n,{ownProps:e,forwardedRef:t})))}),"withGlobalEvents")}const R=new WeakMap;const L=function(e,t,n){return(0,E.useMemo)((()=>{if(n)return n;const r=function(e){const t=R.get(e)||0;return R.set(e,t+1),t}(e);return t?`${t}-${r}`:r}),[e,n,t])},D=a((e=>t=>{const n=L(e);return(0,y.jsx)(e,{...t,instanceId:n})}),"instanceId"),M=a((e=>class extends E.Component{constructor(e){super(e),this.timeouts=[],this.setTimeout=this.setTimeout.bind(this),this.clearTimeout=this.clearTimeout.bind(this)}componentWillUnmount(){this.timeouts.forEach(clearTimeout)}setTimeout(e,t){const n=setTimeout((()=>{e(),this.clearTimeout(n)}),t);return this.timeouts.push(n),n}clearTimeout(e){clearTimeout(e),this.timeouts=this.timeouts.filter((t=>t!==e))}render(){return(0,y.jsx)(e,{...this.props,setTimeout:this.setTimeout,clearTimeout:this.clearTimeout})}}),"withSafeTimeout");function O(e={}){return k()("wp.compose.withState",{since:"5.8",alternative:"wp.element.useState"}),a((t=>class extends E.Component{constructor(t){super(t),this.setState=this.setState.bind(this),this.state=e}render(){return(0,y.jsx)(t,{...this.props,...this.state,setState:this.setState})}}),"withState")}const _=window.wp.dom;function A(e,t){const n=(0,E.useRef)();return(0,E.useCallback)((t=>{t?n.current=e(t):n.current&&n.current()}),t)}const j=function(){return A((e=>{function t(t){const{key:n,shiftKey:r,target:o}=t;if("Tab"!==n)return;const u=r?"findPrevious":"findNext",i=_.focus.tabbable[u](o)||null;if(o.contains(i))return t.preventDefault(),void i?.focus();if(e.contains(i))return;const c=r?"append":"prepend",{ownerDocument:s}=e,a=s.createElement("div");a.tabIndex=-1,e[c](a),a.addEventListener("blur",(()=>e.removeChild(a))),a.focus()}return e.addEventListener("keydown",t),()=>{e.removeEventListener("keydown",t)}}),[])};var P=n(3758),I=n.n(P);function N(e,t,n=4e3){k()("wp.compose.useCopyOnClick",{since:"5.8",alternative:"wp.compose.useCopyToClipboard"});const r=(0,E.useRef)(),[o,u]=(0,E.useState)(!1);return(0,E.useEffect)((()=>{let o;if(e.current)return r.current=new(I())(e.current,{text:()=>"function"==typeof t?t():t}),r.current.on("success",(({clearSelection:e,trigger:t})=>{e(),t&&t.focus(),n&&(u(!0),clearTimeout(o),o=setTimeout((()=>u(!1)),n))})),()=>{r.current&&r.current.destroy(),clearTimeout(o)}}),[t,n,u]),o}function z(e){const t=(0,E.useRef)(e);return t.current=e,t}function U(e,t){const n=z(e),r=z(t);return A((e=>{const t=new(I())(e,{text:()=>"function"==typeof n.current?n.current():n.current||""});return t.on("success",(({clearSelection:e})=>{e(),r.current&&r.current()})),()=>{t.destroy()}}),[])}const V=window.wp.keycodes;function q(e="firstElement"){const t=(0,E.useRef)(e),n=e=>{e.focus({preventScroll:!0})},r=(0,E.useRef)();return(0,E.useEffect)((()=>{t.current=e}),[e]),A((e=>{var o;if(e&&!1!==t.current&&!e.contains(null!==(o=e.ownerDocument?.activeElement)&&void 0!==o?o:null)){if("firstElement"!==t.current)return n(e),()=>{r.current&&clearTimeout(r.current)};r.current=setTimeout((()=>{const t=_.focus.tabbable.find(e)[0];t&&n(t)}),0)}}),[])}let K=null;const W=function(e){const t=(0,E.useRef)(null),n=(0,E.useRef)(null),r=(0,E.useRef)(e);return(0,E.useEffect)((()=>{r.current=e}),[e]),(0,E.useCallback)((e=>{if(e){if(t.current=e,n.current)return;n.current=e.ownerDocument.activeElement}else if(n.current){const e=t.current?.contains(t.current?.ownerDocument.activeElement);var o;if(t.current?.isConnected&&!e)return void(null!==(o=K)&&void 0!==o||(K=n.current));r.current?r.current():(n.current.isConnected?n.current:K)?.focus(),K=null}}),[])},H=["button","submit"];function $(e){const t=(0,E.useRef)(e);(0,E.useEffect)((()=>{t.current=e}),[e]);const n=(0,E.useRef)(!1),r=(0,E.useRef)(),o=(0,E.useCallback)((()=>{clearTimeout(r.current)}),[]);(0,E.useEffect)((()=>()=>o()),[]),(0,E.useEffect)((()=>{e||o()}),[e,o]);const u=(0,E.useCallback)((e=>{const{type:t,target:r}=e;["mouseup","touchend"].includes(t)?n.current=!1:function(e){if(!(e instanceof window.HTMLElement))return!1;switch(e.nodeName){case"A":case"BUTTON":return!0;case"INPUT":return H.includes(e.type)}return!1}(r)&&(n.current=!0)}),[]),i=(0,E.useCallback)((e=>{if(e.persist(),n.current)return;const o=e.target.getAttribute("data-unstable-ignore-focus-outside-for-relatedtarget");o&&e.relatedTarget?.closest(o)||(r.current=setTimeout((()=>{document.hasFocus()?"function"==typeof t.current&&t.current(e):e.preventDefault()}),0))}),[]);return{onFocus:o,onMouseDown:u,onMouseUp:u,onTouchStart:u,onTouchEnd:u,onBlur:i}}function F(e,t){"function"==typeof e?e(t):e&&e.hasOwnProperty("current")&&(e.current=t)}function B(e){const t=(0,E.useRef)(),n=(0,E.useRef)(!1),r=(0,E.useRef)(!1),o=(0,E.useRef)([]),u=(0,E.useRef)(e);return u.current=e,(0,E.useLayoutEffect)((()=>{!1===r.current&&!0===n.current&&e.forEach(((e,n)=>{const r=o.current[n];e!==r&&(F(r,null),F(e,t.current))})),o.current=e}),e),(0,E.useLayoutEffect)((()=>{r.current=!1})),(0,E.useCallback)((e=>{F(t,e),r.current=!0,n.current=null!==e;const i=e?u.current:o.current;for(const t of i)F(t,e)}),[])}const Z=function(e){const t=(0,E.useRef)(),{constrainTabbing:n=!1!==e.focusOnMount}=e;(0,E.useEffect)((()=>{t.current=e}),Object.values(e));const r=j(),o=q(e.focusOnMount),u=W(),i=$((e=>{t.current?.__unstableOnClose?t.current.__unstableOnClose("focus-outside",e):t.current?.onClose&&t.current.onClose()})),c=(0,E.useCallback)((e=>{e&&e.addEventListener("keydown",(e=>{e.keyCode===V.ESCAPE&&!e.defaultPrevented&&t.current?.onClose&&(e.preventDefault(),t.current.onClose())}))}),[]);return[B([n?r:null,!1!==e.focusOnMount?u:null,!1!==e.focusOnMount?o:null,c]),{...i,tabIndex:-1}]};function G({isDisabled:e=!1}={}){return A((t=>{if(e)return;const n=t?.ownerDocument?.defaultView;if(!n)return;const r=[],o=()=>{t.childNodes.forEach((e=>{e instanceof n.HTMLElement&&(e.getAttribute("inert")||(e.setAttribute("inert","true"),r.push((()=>{e.removeAttribute("inert")}))))}))},u=f(o,0,{leading:!0});o();const i=new window.MutationObserver(u);return i.observe(t,{childList:!0}),()=>{i&&i.disconnect(),u.cancel(),r.forEach((e=>e()))}}),[e])}const Q="undefined"!=typeof window?E.useLayoutEffect:E.useEffect;function X({onDragStart:e,onDragMove:t,onDragEnd:n}){const[r,o]=(0,E.useState)(!1),u=(0,E.useRef)({onDragStart:e,onDragMove:t,onDragEnd:n});Q((()=>{u.current.onDragStart=e,u.current.onDragMove=t,u.current.onDragEnd=n}),[e,t,n]);const i=(0,E.useCallback)((e=>u.current.onDragMove&&u.current.onDragMove(e)),[]),c=(0,E.useCallback)((e=>{u.current.onDragEnd&&u.current.onDragEnd(e),document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",c),o(!1)}),[]),s=(0,E.useCallback)((e=>{u.current.onDragStart&&u.current.onDragStart(e),document.addEventListener("mousemove",i),document.addEventListener("mouseup",c),o(!0)}),[]);return(0,E.useEffect)((()=>()=>{r&&(document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",c))}),[r]),{startDrag:s,endDrag:c,isDragging:r}}var Y=n(1933),J=n.n(Y);n(5760);const ee=function(e,t,{bindGlobal:n=!1,eventName:r="keydown",isDisabled:o=!1,target:u}={}){const i=(0,E.useRef)(t);(0,E.useEffect)((()=>{i.current=t}),[t]),(0,E.useEffect)((()=>{if(o)return;const t=new(J())(u&&u.current?u.current:document);return(Array.isArray(e)?e:[e]).forEach((e=>{const o=e.split("+"),u=new Set(o.filter((e=>e.length>1))),c=u.has("alt"),s=u.has("shift");if((0,V.isAppleOS)()&&(1===u.size&&c||2===u.size&&c&&s))throw new Error(`Cannot bind ${e}. Alt and Shift+Alt modifiers are reserved for character input.`);t[n?"bindGlobal":"bind"](e,((...e)=>i.current(...e)),r)})),()=>{t.reset()}}),[e,n,r,u,o])},te=new Map;function ne(e){const t=(0,E.useMemo)((()=>{const t=function(e){if(!e)return null;let t=te.get(e);return t||("undefined"!=typeof window&&"function"==typeof window.matchMedia?(t=window.matchMedia(e),te.set(e,t),t):null)}(e);return{subscribe:e=>t?(t.addEventListener?.("change",e),()=>{t.removeEventListener?.("change",e)}):()=>{},getValue(){var e;return null!==(e=t?.matches)&&void 0!==e&&e}}}),[e]);return(0,E.useSyncExternalStore)(t.subscribe,t.getValue,(()=>!1))}function re(e){const t=(0,E.useRef)();return(0,E.useEffect)((()=>{t.current=e}),[e]),t.current}const oe=()=>ne("(prefers-reduced-motion: reduce)");var ue=n(6689);function ie(e,t){switch(t.type){case"UNDO":{const t=e.manager.undo();return t?{...e,value:t[0].changes.prop.from}:e}case"REDO":{const t=e.manager.redo();return t?{...e,value:t[0].changes.prop.to}:e}case"RECORD":return e.manager.addRecord([{id:"object",changes:{prop:{from:e.value,to:t.value}}}],t.isStaged),{...e,value:t.value}}return e}function ce(e){return{manager:(0,ue.createUndoManager)(),value:e}}function se(e){const[t,n]=(0,E.useReducer)(ie,e,ce);return{value:t.value,setValue:(0,E.useCallback)(((e,t)=>{n({type:"RECORD",value:e,isStaged:t})}),[]),hasUndo:t.manager.hasUndo(),hasRedo:t.manager.hasRedo(),undo:(0,E.useCallback)((()=>{n({type:"UNDO"})}),[]),redo:(0,E.useCallback)((()=>{n({type:"REDO"})}),[])}}const ae={huge:1440,wide:1280,large:960,medium:782,small:600,mobile:480},le={">=":"min-width","<":"max-width"},fe={">=":(e,t)=>t>=e,"<":(e,t)=>t<e},de=(0,E.createContext)(null),pe=(e,t=">=")=>{const n=(0,E.useContext)(de),r=ne(!n&&`(${le[t]}: ${ae[e]}px)`||void 0);return n?fe[t](ae[e],n):r};pe.__experimentalWidthProvider=de.Provider;const he=pe;const ve=(e,t,n)=>e[t]?e[t][0]?e[t][0][n]:e[t][n]:"contentBoxSize"===t?e.contentRect["inlineSize"===n?"width":"height"]:void 0;function me(e={}){const t=e.onResize,n=(0,E.useRef)(void 0);n.current=t;const r=e.round||Math.round,o=(0,E.useRef)(),[u,i]=(0,E.useState)({width:void 0,height:void 0}),c=(0,E.useRef)(!1);(0,E.useEffect)((()=>(c.current=!1,()=>{c.current=!0})),[]);const s=(0,E.useRef)({width:void 0,height:void 0}),a=function(e,t){const n=(0,E.useRef)(null),r=(0,E.useRef)(null),o=(0,E.useRef)(),u=(0,E.useCallback)((()=>{let i=null;n.current?i=n.current:t&&(i=t instanceof HTMLElement?t:t.current),r.current&&r.current.element===i&&r.current.reporter===u||(o.current&&(o.current(),o.current=null),r.current={reporter:u,element:i},i&&(o.current=e(i)))}),[t,e]);return(0,E.useEffect)((()=>{u()}),[u]),(0,E.useCallback)((e=>{n.current=e,u()}),[u])}((0,E.useCallback)((t=>(o.current&&o.current.box===e.box&&o.current.round===r||(o.current={box:e.box,round:r,instance:new ResizeObserver((t=>{const o=t[0];let u="borderBoxSize";u="border-box"===e.box?"borderBoxSize":"device-pixel-content-box"===e.box?"devicePixelContentBoxSize":"contentBoxSize";const a=ve(o,u,"inlineSize"),l=ve(o,u,"blockSize"),f=a?r(a):void 0,d=l?r(l):void 0;if(s.current.width!==f||s.current.height!==d){const e={width:f,height:d};s.current.width=f,s.current.height=d,n.current?n.current(e):c.current||i(e)}}))}),o.current.instance.observe(t,{box:e.box}),()=>{o.current&&o.current.instance.unobserve(t)})),[e.box,r]),e.ref);return(0,E.useMemo)((()=>({ref:a,width:u.width,height:u.height})),[a,u?u.width:null,u?u.height:null])}function ye(){const{ref:e,width:t,height:n}=me(),r=(0,E.useMemo)((()=>({width:null!=t?t:null,height:null!=n?n:null})),[t,n]);return[(0,y.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,pointerEvents:"none",opacity:0,overflow:"hidden",zIndex:-1},"aria-hidden":"true",ref:e}),r]}const ge=window.wp.priorityQueue;const be=function(e,t={step:1}){const{step:n=1}=t,[r,o]=(0,E.useState)([]);return(0,E.useEffect)((()=>{let t=function(e,t){const n=[];for(let r=0;r<e.length;r++){const o=e[r];if(!t.includes(o))break;n.push(o)}return n}(e,r);t.length<n&&(t=t.concat(e.slice(t.length,n))),o(t);const u=(0,ge.createQueue)();for(let r=t.length;r<e.length;r+=n)u.add({},(()=>{(0,E.flushSync)((()=>{o((t=>[...t,...e.slice(r,r+n)]))}))}));return()=>u.reset()}),[e]),r};const we=function(e,t="Change detection"){const n=re(e);Object.entries(null!=n?n:[]).forEach((([n,r])=>{r!==e[n]&&console.warn(`${t}: ${n} key changed:`,r,e[n])}))},Ee=window.React;function xe(e,t){var n=(0,Ee.useState)((function(){return{inputs:t,result:e()}}))[0],r=(0,Ee.useRef)(!0),o=(0,Ee.useRef)(n),u=r.current||Boolean(t&&o.current.inputs&&function(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,o.current.inputs))?o.current:{inputs:t,result:e()};return(0,Ee.useEffect)((function(){r.current=!1,o.current=u}),[u]),u.result}function Se(e,t,n){const r=xe((()=>f(e,null!=t?t:0,n)),[e,t,n]);return(0,E.useEffect)((()=>()=>r.cancel()),[r]),r}function ke(e=""){const[t,n]=(0,E.useState)(e),[r,o]=(0,E.useState)(e),u=Se(o,250);return(0,E.useEffect)((()=>{u(t)}),[t,u]),[t,n,r]}function Te(e,t,n){const r=xe((()=>d(e,null!=t?t:0,n)),[e,t,n]);return(0,E.useEffect)((()=>()=>r.cancel()),[r]),r}function Ce(e){const t=(0,E.useRef)();return t.current=e,t}function Re({dropZoneElement:e,isDisabled:t,onDrop:n,onDragStart:r,onDragEnter:o,onDragLeave:u,onDragEnd:i,onDragOver:c}){const s=Ce(n),a=Ce(r),l=Ce(o),f=Ce(u),d=Ce(i),p=Ce(c);return A((n=>{if(t)return;const r=null!=e?e:n;let o=!1;const{ownerDocument:u}=r;function i(e){o||(o=!0,u.addEventListener("dragend",y),u.addEventListener("mousemove",y),a.current&&a.current(e))}function c(e){e.preventDefault(),r.contains(e.relatedTarget)||l.current&&l.current(e)}function h(e){!e.defaultPrevented&&p.current&&p.current(e),e.preventDefault()}function v(e){(function(e){const{defaultView:t}=u;if(!(e&&t&&e instanceof t.HTMLElement&&r.contains(e)))return!1;let n=e;do{if(n.dataset.isDropZone)return n===r}while(n=n.parentElement);return!1})(e.relatedTarget)||f.current&&f.current(e)}function m(e){e.defaultPrevented||(e.preventDefault(),e.dataTransfer&&e.dataTransfer.files.length,s.current&&s.current(e),y(e))}function y(e){o&&(o=!1,u.removeEventListener("dragend",y),u.removeEventListener("mousemove",y),d.current&&d.current(e))}return r.dataset.isDropZone="true",r.addEventListener("drop",m),r.addEventListener("dragenter",c),r.addEventListener("dragover",h),r.addEventListener("dragleave",v),u.addEventListener("dragenter",i),()=>{delete r.dataset.isDropZone,r.removeEventListener("drop",m),r.removeEventListener("dragenter",c),r.removeEventListener("dragover",h),r.removeEventListener("dragleave",v),u.removeEventListener("dragend",y),u.removeEventListener("mousemove",y),u.removeEventListener("dragenter",i)}}),[t,e])}function Le(){return A((e=>{const{ownerDocument:t}=e;if(!t)return;const{defaultView:n}=t;if(n)return n.addEventListener("blur",r),()=>{n.removeEventListener("blur",r)};function r(){t&&t.activeElement===e&&e.focus()}}),[])}const De=30;function Me(e,t,n,r){var o,u;const i=null!==(o=r?.initWindowSize)&&void 0!==o?o:De,c=null===(u=r?.useWindowing)||void 0===u||u,[s,a]=(0,E.useState)({visibleItems:i,start:0,end:i,itemInView:e=>e>=0&&e<=i});return(0,E.useLayoutEffect)((()=>{if(!c)return;const o=(0,_.getScrollContainer)(e.current),u=e=>{var u;if(!o)return;const i=Math.ceil(o.clientHeight/t),c=e?i:null!==(u=r?.windowOverscan)&&void 0!==u?u:i,s=Math.floor(o.scrollTop/t),l=Math.max(0,s-c),f=Math.min(n-1,s+i+c);a((e=>{const t={visibleItems:i,start:l,end:f,itemInView:e=>l<=e&&e<=f};return e.start!==t.start||e.end!==t.end||e.visibleItems!==t.visibleItems?t:e}))};u(!0);const i=f((()=>{u()}),16);return o?.addEventListener("scroll",i),o?.ownerDocument?.defaultView?.addEventListener("resize",i),o?.ownerDocument?.defaultView?.addEventListener("resize",i),()=>{o?.removeEventListener("scroll",i),o?.ownerDocument?.defaultView?.removeEventListener("resize",i)}}),[t,e,n,r?.expandedState,r?.windowOverscan,c]),(0,E.useLayoutEffect)((()=>{if(!c)return;const r=(0,_.getScrollContainer)(e.current),o=e=>{switch(e.keyCode){case V.HOME:return r?.scrollTo({top:0});case V.END:return r?.scrollTo({top:n*t});case V.PAGEUP:return r?.scrollTo({top:r.scrollTop-s.visibleItems*t});case V.PAGEDOWN:return r?.scrollTo({top:r.scrollTop+s.visibleItems*t})}};return r?.ownerDocument?.defaultView?.addEventListener("keydown",o),()=>{r?.ownerDocument?.defaultView?.removeEventListener("keydown",o)}}),[n,t,e,s.visibleItems,c,r?.expandedState]),[s,a]}function Oe(e,t){const[n,r]=(0,E.useMemo)((()=>[n=>e.subscribe(t,n),()=>e.get(t)]),[e,t]);return(0,E.useSyncExternalStore)(n,r,r)}})(),(window.wp=window.wp||{}).compose=r})()
;