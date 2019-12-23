!function(e){var t={};function o(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i=new WeakMap,n=e=>(...t)=>{const o=e(...t);return i.set(o,!0),o},s=e=>"function"==typeof e&&i.has(e),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,a=(e,t,o=null,i=null)=>{for(;t!==o;){const o=t.nextSibling;e.insertBefore(t,i),t=o}},l=(e,t,o=null)=>{for(;t!==o;){const o=t.nextSibling;e.removeChild(t),t=o}},d={},c={},p=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${p}--\x3e`,u=new RegExp(`${p}|${h}`),f="$lit$";class m{constructor(e,t){this.parts=[],this.element=t;const o=[],i=[],n=document.createTreeWalker(t.content,133,null,!1);let s=0,r=-1,a=0;const{strings:l,values:{length:d}}=e;for(;a<d;){const e=n.nextNode();if(null!==e){if(r++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:o}=t;let i=0;for(let e=0;e<o;e++)g(t[e].name,f)&&i++;for(;i-- >0;){const t=l[a],o=_.exec(t)[2],i=o.toLowerCase()+f,n=e.getAttribute(i);e.removeAttribute(i);const s=n.split(u);this.parts.push({type:"attribute",index:r,name:o,strings:s}),a+=s.length-1}}"TEMPLATE"===e.tagName&&(i.push(e),n.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(p)>=0){const i=e.parentNode,n=t.split(u),s=n.length-1;for(let t=0;t<s;t++){let o,s=n[t];if(""===s)o=b();else{const e=_.exec(s);null!==e&&g(e[2],f)&&(s=s.slice(0,e.index)+e[1]+e[2].slice(0,-f.length)+e[3]),o=document.createTextNode(s)}i.insertBefore(o,e),this.parts.push({type:"node",index:++r})}""===n[s]?(i.insertBefore(b(),e),o.push(e)):e.data=n[s],a+=s}}else if(8===e.nodeType)if(e.data===p){const t=e.parentNode;null!==e.previousSibling&&r!==s||(r++,t.insertBefore(b(),e)),s=r,this.parts.push({type:"node",index:r}),null===e.nextSibling?e.data="":(o.push(e),r--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(p,t+1));)this.parts.push({type:"node",index:-1}),a++}}else n.currentNode=i.pop()}for(const e of o)e.parentNode.removeChild(e)}}const g=(e,t)=>{const o=e.length-t.length;return o>=0&&e.slice(o)===t},y=e=>-1!==e.index,b=()=>document.createComment(""),_=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(e,t,o){this.__parts=[],this.template=e,this.processor=t,this.options=o}update(e){let t=0;for(const o of this.__parts)void 0!==o&&o.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],o=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let n,s=0,a=0,l=i.nextNode();for(;s<o.length;)if(n=o[s],y(n)){for(;a<n.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=t.pop(),l=i.nextNode());if("node"===n.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));s++}else this.__parts.push(void 0),s++;return r&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const x=` ${p} `;class w{constructor(e,t,o,i){this.strings=e,this.values=t,this.type=o,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",o=!1;for(let i=0;i<e;i++){const e=this.strings[i],n=e.lastIndexOf("\x3c!--");o=(n>-1||o)&&-1===e.indexOf("--\x3e",n+1);const s=_.exec(e);t+=null===s?e+(o?x:h):e.substr(0,s.index)+s[1]+s[2]+f+s[3]+p}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const S=e=>null===e||!("object"==typeof e||"function"==typeof e),C=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class P{constructor(e,t,o){this.dirty=!0,this.element=e,this.name=t,this.strings=o,this.parts=[];for(let e=0;e<o.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new N(this)}_getValue(){const e=this.strings,t=e.length-1;let o="";for(let i=0;i<t;i++){o+=e[i];const t=this.parts[i];if(void 0!==t){const e=t.value;if(S(e)||!C(e))o+="string"==typeof e?e:String(e);else for(const t of e)o+="string"==typeof t?t:String(t)}}return o+=e[t],o}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class N{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===d||S(e)&&e===this.value||(this.value=e,s(e)||(this.committer.dirty=!0))}commit(){for(;s(this.value);){const e=this.value;this.value=d,e(this)}this.value!==d&&this.committer.commit()}}class A{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(b()),this.endNode=e.appendChild(b())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=b()),e.__insert(this.endNode=b())}insertAfterPart(e){e.__insert(this.startNode=b()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=d,e(this)}const e=this.__pendingValue;e!==d&&(S(e)?e!==this.value&&this.__commitText(e):e instanceof w?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):C(e)?this.__commitIterable(e):e===c?(this.value=c,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,o="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=o:this.__commitNode(document.createTextNode(o)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof v&&this.value.template===t)this.value.update(e.values);else{const o=new v(t,e.processor,this.options),i=o._clone();o.update(e.values),this.__commitNode(i),this.value=o}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let o,i=0;for(const n of e)o=t[i],void 0===o&&(o=new A(this.options),t.push(o),0===i?o.appendIntoPart(this):o.insertAfterPart(t[i-1])),o.setValue(n),o.commit(),i++;i<t.length&&(t.length=i,this.clear(o&&o.endNode))}clear(e=this.startNode){l(this.startNode.parentNode,e.nextSibling,this.endNode)}}class k{constructor(e,t,o){if(this.value=void 0,this.__pendingValue=void 0,2!==o.length||""!==o[0]||""!==o[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=o}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=d,e(this)}if(this.__pendingValue===d)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=d}}class E extends P{constructor(e,t,o){super(e,t,o),this.single=2===o.length&&""===o[0]&&""===o[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends N{}let O=!1;try{const e={get capture(){return O=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class R{constructor(e,t,o){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=o,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=d,e(this)}if(this.__pendingValue===d)return;const e=this.__pendingValue,t=this.value,o=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||o);o&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=j(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=d}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const j=e=>e&&(O?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const V=new class{handleAttributeExpressions(e,t,o,i){const n=t[0];if("."===n){return new E(e,t.slice(1),o).parts}return"@"===n?[new R(e,t.slice(1),i.eventContext)]:"?"===n?[new k(e,t.slice(1),o)]:new P(e,t,o).parts}handleTextExpression(e){return new A(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function $(e){let t=z.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},z.set(e.type,t));let o=t.stringsArray.get(e.strings);if(void 0!==o)return o;const i=e.strings.join(p);return o=t.keyString.get(i),void 0===o&&(o=new m(e,e.getTemplateElement()),t.keyString.set(i,o)),t.stringsArray.set(e.strings,o),o}const z=new Map,M=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const D=(e,...t)=>new w(e,t,"html",V),U=133;function q(e,t){const{element:{content:o},parts:i}=e,n=document.createTreeWalker(o,U,null,!1);let s=B(i),r=i[s],a=-1,l=0;const d=[];let c=null;for(;n.nextNode();){a++;const e=n.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(d.push(e),null===c&&(c=e)),null!==c&&l++;void 0!==r&&r.index===a;)r.index=null!==c?-1:r.index-l,s=B(i,s),r=i[s]}d.forEach(e=>e.parentNode.removeChild(e))}const F=e=>{let t=11===e.nodeType?0:1;const o=document.createTreeWalker(e,U,null,!1);for(;o.nextNode();)t++;return t},B=(e,t=-1)=>{for(let o=t+1;o<e.length;o++){const t=e[o];if(y(t))return o}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const L=(e,t)=>`${e}--${t}`;let W=!0;void 0===window.ShadyCSS?W=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),W=!1);const I=e=>t=>{const o=L(t.type,e);let i=z.get(o);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},z.set(o,i));let n=i.stringsArray.get(t.strings);if(void 0!==n)return n;const s=t.strings.join(p);if(n=i.keyString.get(s),void 0===n){const o=t.getTemplateElement();W&&window.ShadyCSS.prepareTemplateDom(o,e),n=new m(t,o),i.keyString.set(s,n)}return i.stringsArray.set(t.strings,n),n},H=["html","svg"],J=new Set,G=(e,t,o)=>{J.add(e);const i=o?o.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:s}=n;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(i,e);const r=document.createElement("style");for(let e=0;e<s;e++){const t=n[e];t.parentNode.removeChild(t),r.textContent+=t.textContent}(e=>{H.forEach(t=>{const o=z.get(L(t,e));void 0!==o&&o.keyString.forEach(e=>{const{element:{content:t}}=e,o=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{o.add(e)}),q(e,o)})})})(e);const a=i.content;o?function(e,t,o=null){const{element:{content:i},parts:n}=e;if(null==o)return void i.appendChild(t);const s=document.createTreeWalker(i,U,null,!1);let r=B(n),a=0,l=-1;for(;s.nextNode();){for(l++,s.currentNode===o&&(a=F(t),o.parentNode.insertBefore(t,o));-1!==r&&n[r].index===l;){if(a>0){for(;-1!==r;)n[r].index+=a,r=B(n,r);return}r=B(n,r)}}}(o,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(o){a.insertBefore(r,a.firstChild);const e=new Set;e.add(r),q(o,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const K={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Q=(e,t)=>t!==e&&(t==t||e==e),X={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:Q},Y=Promise.resolve(!0),Z=1,ee=4,te=8,oe=16,ie=32,ne="finalized";class se extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=Y,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,o)=>{const i=this._attributeNameForProperty(o,t);void 0!==i&&(this._attributeToPropertyMap.set(i,o),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=X){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const o="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[o]},set(t){const i=this[e];this[o]=t,this._requestUpdate(e,i)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(ne)||e.finalize(),this[ne]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const o of t)this.createProperty(o,e[o])}}static _attributeNameForProperty(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,o=Q){return o(e,t)}static _propertyValueFromAttribute(e,t){const o=t.type,i=t.converter||K,n="function"==typeof i?i:i.fromAttribute;return n?n(e,o):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const o=t.type,i=t.converter;return(i&&i.toAttribute||K.toAttribute)(e,o)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|ie,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,o){t!==o&&this._attributeToProperty(e,o)}_propertyToAttribute(e,t,o=X){const i=this.constructor,n=i._attributeNameForProperty(e,o);if(void 0!==n){const e=i._propertyValueToAttribute(t,o);if(void 0===e)return;this._updateState=this._updateState|te,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=this._updateState&~te}}_attributeToProperty(e,t){if(this._updateState&te)return;const o=this.constructor,i=o._attributeToPropertyMap.get(e);if(void 0!==i){const e=o._classProperties.get(i)||X;this._updateState=this._updateState|oe,this[i]=o._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~oe}}_requestUpdate(e,t){let o=!0;if(void 0!==e){const i=this.constructor,n=i._classProperties.get(e)||X;i._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||this._updateState&oe||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):o=!1}!this._hasRequestedUpdate&&o&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|ee;const o=this._updatePromise;this._updatePromise=new Promise((o,i)=>{e=o,t=i});try{await o}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&ie}get _hasRequestedUpdate(){return this._updateState&ee}get hasUpdated(){return this._updateState&Z}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&Z||(this._updateState=this._updateState|Z,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~ee}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}se[ne]=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const re=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:o,elements:i}=t;return{kind:o,elements:i,finisher(t){window.customElements.define(e,t)}}})(e,t),ae=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}}:Object.assign({},t,{finisher(o){o.createProperty(t.key,e)}}),le=(e,t,o)=>{t.constructor.createProperty(o,e)};function de(e){return(t,o)=>void 0!==o?le(e,t,o):ae(e,t)}const ce="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pe=Symbol();class he{constructor(e,t){if(t!==pe)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(ce?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ue=(e,...t)=>{const o=t.reduce((t,o,i)=>t+(e=>{if(e instanceof he)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+e[i+1],e[0]);return new he(o,pe)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const fe=e=>e.flat?e.flat(1/0):function e(t,o=[]){for(let i=0,n=t.length;i<n;i++){const n=t[i];Array.isArray(n)?e(n,o):o.push(n)}return o}(e);class me extends se{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){fe(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ce?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof w&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}me.finalized=!0,me.render=(e,t,o)=>{if(!o||"object"!=typeof o||!o.scopeName)throw new Error("The `scopeName` option is required.");const i=o.scopeName,n=M.has(t),s=W&&11===t.nodeType&&!!t.host,r=s&&!J.has(i),a=r?document.createDocumentFragment():t;if(((e,t,o)=>{let i=M.get(t);void 0===i&&(l(t,t.firstChild),M.set(t,i=new A(Object.assign({templateFactory:$},o))),i.appendInto(t)),i.setValue(e),i.commit()})(e,a,Object.assign({templateFactory:I(i)},o)),r){const e=M.get(a);M.delete(a);const o=e.value instanceof v?e.value.template:void 0;G(i,a,o),l(t,t.firstChild),t.appendChild(a),M.set(t,e)}!n&&s&&window.ShadyCSS.styleElement(t.host)};var ge=ue`.todoapp {
    background: #fff;
    margin: 130px 0 40px 0;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
                0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

.info {
    margin: 65px auto 0;
    color: #4d4d4d;
    font-size: 11px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
    text-align: center;
}

.info p {
    line-height: 1;
}

.info a {
    color: inherit;
    text-decoration: none;
    font-weight: 400;
}

.info a:hover {
    text-decoration: underline;
}`,ye=function(e,t,o,i){var n,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s<3?n(r):s>3?n(t,o,r):n(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r};let be=class extends me{render(){return D`
            <section class="todoapp">
                <todo-header id="header"></todo-header>
                <todo-main id="main"></todo-main>
                <todo-footer id="footer"></todo-footer>
            </section>
            <footer class="info">
                <p>Double-click to edit a todo</p>
                <p><a href="https://github.com/dakom/todo-shipyard-lit"><u>Repo on Github</u></a></p>
            </footer>
        `}};be.styles=ge,be=ye([re("todo-app")],be);var _e,ve=ue`:focus {
    outline: 0;
}

.hidden {
    display: none;
}

.new-todo,
.edit {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    color: inherit;
    padding: 6px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

hr {
    margin: 20px 0;
    border: 0;
    border-top: 1px dashed #c5c5c5;
    border-bottom: 1px dashed #f7f7f7;
}

button {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    font-size: 100%;
    vertical-align: baseline;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    -webkit-appearance: none;
    appearance: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}`,xe=ue`.footer {
    padding: 10px 15px;
    height: 20px;
    text-align: center;
    font-size: 15px;
    border-top: 1px solid #e6e6e6;
    color: #777;
}

.footer:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
                0 8px 0 -3px #f6f6f6,
                0 9px 1px -3px rgba(0, 0, 0, 0.2),
                0 16px 0 -6px #f6f6f6,
                0 17px 2px -6px rgba(0, 0, 0, 0.2);
}

.todo-count {
    float: left;
    text-align: left;
}

.todo-count strong {
    font-weight: 300;
}

.filters {
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    right: 0;
    left: 0;
}

.filters li {
    display: inline;
}

.filters li a {
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
}

.filters li a:hover {
    border-color: rgba(175, 47, 47, 0.1);
}

.filters li a.selected {
    border-color: rgba(175, 47, 47, 0.2);
}


.clear-completed,
html .clear-completed:active {
    float: right;
    position: relative;
    line-height: 20px;
    text-decoration: none;
    cursor: pointer;
}

.clear-completed:hover {
    text-decoration: underline;
}

@media (max-width: 430px) {
    .footer {
        height: 50px;
    }

    .filters {
        bottom: 10px;
    }
}
`;let we,Se;!function(e){e[e.FilterChange=0]="FilterChange",e[e.AddTodo=1]="AddTodo",e[e.SetCompleted=2]="SetCompleted",e[e.RemoveTodo=3]="RemoveTodo",e[e.ClearCompleted=4]="ClearCompleted",e[e.SetCompletedAll=5]="SetCompletedAll"}(_e||(_e={}));const Ce=e=>{Array.isArray(e)?Se(we,e[0],e[1]):Se(we,e,void 0)},Pe=new WeakMap,Ne=n(e=>t=>{if(!(t instanceof N)||t instanceof T||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:o}=t,{element:i}=o;Pe.has(t)||(i.className=o.strings.join(" "));const{classList:n}=i,s=Pe.get(t);for(const t in s)t in e||n.remove(t);for(const t in e){const o=e[t];if(!s||o!==s[t]){n[o?"add":"remove"](t)}}Pe.set(t,e)});var Ae;!function(e){e[e.All=0]="All",e[e.Active=1]="Active",e[e.Completed=2]="Completed"}(Ae||(Ae={}));var ke=function(e,t,o,i){var n,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s<3?n(r):s>3?n(t,o,r):n(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r};let Ee=class extends me{constructor(){super(...arguments),this.total=0,this.remaining=0,this.completed=0,this.filter=Ae.All}render(){const{total:e,remaining:t,completed:o,filter:i}=this;return 0===e?D`${c}`:D`
                <footer class="footer">
                    <span class="todo-count">${Re(t)}</span>
                    <ul class="filters">
                        ${Oe(Ae.All)(i)}
                        ${Oe(Ae.Active)(i)}
                        ${Oe(Ae.Completed)(i)}
                    </ul>
                    ${o?D`<button class="clear-completed" @click=${Te}>Clear completed</button>`:c}
                </footer>
            `}};Ee.styles=[ve,xe],ke([de({type:Number})],Ee.prototype,"total",void 0),ke([de({type:Number})],Ee.prototype,"remaining",void 0),ke([de({type:Number})],Ee.prototype,"completed",void 0),ke([de({type:Number})],Ee.prototype,"filter",void 0),Ee=ke([re("todo-footer")],Ee);const Te=()=>{Ce(_e.ClearCompleted)},Oe=e=>t=>{const[o,i]={[Ae.All]:["","All"],[Ae.Active]:["active","Active"],[Ae.Completed]:["completed","Completed"]}[e],n=Ne({selected:e===t});return D`
        <li><a href="#/${o}" class=${n}>${i}</a></li>
    `},Re=e=>D`${e} item${1!==e?"s":""} left`;var je=ue`h1 {
    position: absolute;
    top: -140px;
    width: 100%;
    font-size: 80px;
    font-weight: 200;
    text-align: center;
    color: #b83f45;
    -webkit-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
}`,Ve=function(e,t,o,i){var n,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s<3?n(r):s>3?n(t,o,r):n(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r};let $e=class extends me{render(){return D`
            <header class="header">
                <h1>todos</h1>
                <todo-input id="input"></todo-input>
            </header>
        `}};$e.styles=je,$e=Ve([re("todo-header")],$e);var ze=ue`input::-webkit-input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.4);
}

input::-moz-placeholder {
    font-style: italic;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.4);
}

input::input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.4);
}

input.new-todo {
    padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}`,Me=function(e,t,o,i){var n,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s<3?n(r):s>3?n(t,o,r):n(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r};let De=class extends me{render(){return D`
            <input id="input-text" class="new-todo" @keydown=${Ue} placeholder="What needs to be done?" autofocus />
        `}};De.styles=[ve,ze],De=Me([re("todo-input")],De);const Ue=e=>{if(13===e.keyCode){const t=e.target,o=t.value.trim();""!==o&&Ce([_e.AddTodo,o]),t.value=""}},qe=(e,t)=>{const o=e.startNode.parentNode,i=void 0===t?e.endNode:t.startNode,n=o.insertBefore(b(),i);o.insertBefore(b(),i);const s=new A(e.options);return s.insertAfterNode(n),s},Fe=(e,t)=>(e.setValue(t),e.commit(),e),Be=(e,t,o)=>{const i=e.startNode.parentNode,n=o?o.startNode:e.endNode,s=t.endNode.nextSibling;s!==n&&a(i,t.startNode,s,n)},Le=e=>{l(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},We=(e,t,o)=>{const i=new Map;for(let n=t;n<=o;n++)i.set(e[n],n);return i},Ie=new WeakMap,He=new WeakMap,Je=n((e,t,o)=>{let i;return void 0===o?o=t:void 0!==t&&(i=t),t=>{if(!(t instanceof A))throw new Error("repeat can only be used in text bindings");const n=Ie.get(t)||[],s=He.get(t)||[],r=[],a=[],l=[];let d,c,p=0;for(const t of e)l[p]=i?i(t,p):p,a[p]=o(t,p),p++;let h=0,u=n.length-1,f=0,m=a.length-1;for(;h<=u&&f<=m;)if(null===n[h])h++;else if(null===n[u])u--;else if(s[h]===l[f])r[f]=Fe(n[h],a[f]),h++,f++;else if(s[u]===l[m])r[m]=Fe(n[u],a[m]),u--,m--;else if(s[h]===l[m])r[m]=Fe(n[h],a[m]),Be(t,n[h],r[m+1]),h++,m--;else if(s[u]===l[f])r[f]=Fe(n[u],a[f]),Be(t,n[u],n[h]),u--,f++;else if(void 0===d&&(d=We(l,f,m),c=We(s,h,u)),d.has(s[h]))if(d.has(s[u])){const e=c.get(l[f]),o=void 0!==e?n[e]:null;if(null===o){const e=qe(t,n[h]);Fe(e,a[f]),r[f]=e}else r[f]=Fe(o,a[f]),Be(t,o,n[h]),n[e]=null;f++}else Le(n[u]),u--;else Le(n[h]),h++;for(;f<=m;){const e=qe(t,r[m+1]);Fe(e,a[f]),r[f++]=e}for(;h<=u;){const e=n[h++];null!==e&&Le(e)}Ie.set(t,r),He.set(t,l)}});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var Ge=ue`.todo-list {
    margin: 0;
    padding: 0;
    list-style: none;
}`,Ke=function(e,t,o,i){var n,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s<3?n(r):s>3?n(t,o,r):n(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r};let Qe=class extends me{constructor(){super(...arguments),this.items=[]}render(){const{items:e}=this;return D`
            <ul class="todo-list">
                ${Je(e,e=>e.id,e=>D`<todo-item id=${e.id} .item_id=${e.id} .label=${e.label} .completed=${e.completed} />`)}
            </ul>
        `}};Qe.styles=Ge,Ke([de({type:Array})],Qe.prototype,"items",void 0),Qe=Ke([re("todo-list")],Qe);var Xe=ue`.main {
    position: relative;
    z-index: 2;
    border-top: 1px solid #e6e6e6;
}

.toggle-all {
    width: 1px;
    height: 1px;
    border: none; /* Mobile Safari */
    opacity: 0;
    position: absolute;
    right: 100%;
    bottom: 100%;
}

.toggle-all + label {
    width: 60px;
    height: 34px;
    font-size: 0;
    position: absolute;
    top: -52px;
    left: -13px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
}

.toggle-all + label:before {
    content: '❯';
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;
}

.toggle-all:checked + label:before {
    color: #737373;
}
`,Ye=function(e,t,o,i){var n,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s<3?n(r):s>3?n(t,o,r):n(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r};let Ze=class extends me{constructor(){super(...arguments),this.items=[],this.all_completed=!1}render(){const{items:e}=this;return D`
            ${0===e.length?c:D`
                    <section class="main">
                        <input id="toggle-all" class="toggle-all" type="checkbox" @change=${et} .checked=${this.all_completed} />
                        <label for="toggle-all">Mark all as complete</label>
                        <todo-list id="list" .items=${e}></todo-list>
                    </section>
                `}
        `}};Ze.styles=Xe,Ye([de({type:Array})],Ze.prototype,"items",void 0),Ye([de({type:Boolean})],Ze.prototype,"all_completed",void 0),Ze=Ye([re("todo-main")],Ze);const et=e=>{Ce([_e.SetCompletedAll,e.target.checked])};var tt=ue`li {
    position: relative;
    font-size: 24px;
    border-bottom: 1px solid #ededed;
}

li:last-child {
    border-bottom: none;
}

li.editing {
    border-bottom: none;
    padding: 0;
}

li.editing .edit {
    display: block;
    width: calc(100% - 43px);
    padding: 12px 16px;
    margin: 0 0 0 43px;
}

li.editing .view {
    display: none;
}

li .toggle {
    text-align: center;
    width: 40px;
    /* auto, since non-WebKit browsers doesn't support input styling */
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    border: none; /* Mobile Safari */
    -webkit-appearance: none;
    appearance: none;
}

li .toggle {
    opacity: 0;
}

li .toggle + label {
    /*
        Firefox requires \`#\` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433
        IE and Edge requires *everything* to be escaped to render, so we do that instead of just the \`#\` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/
    */
    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
    background-repeat: no-repeat;
    background-position: center left;
}

li .toggle:checked + label {
    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
}

li label {
    word-break: break-all;
    padding: 15px 15px 15px 60px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
    font-weight: 400;
    color: #4d4d4d;
}

li.completed label {
    color: #cdcdcd;
    text-decoration: line-through;
}

li .destroy {
    display: none;
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    margin-bottom: 11px;
    transition: color 0.2s ease-out;
}

li .destroy:hover {
    color: #af5b5e;
}

li .destroy:after {
    content: '×';
}

li:hover .destroy {
    display: block;
}

li .edit {
    display: none;
}

li.editing:last-child {
    margin-bottom: -1px;
}`,ot=function(e,t,o,i){var n,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s<3?n(r):s>3?n(t,o,r):n(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r};let it=class extends me{constructor(){super(...arguments),this.label="",this.item_id="",this.completed=!1}render(){return D`
            <li class=${Ne({completed:this.completed})} >
                <div class="view">
                    <input class="toggle" type="checkbox" .checked=${this.completed} @change=${e=>nt(this.item_id)(e.target.checked)}/>
                    <label>${this.label}</label>
                    <button class="destroy" @click=${()=>st(this.item_id)} ></button>
                </div>
            </li>
        `}};it.styles=[ve,tt],ot([de({type:String})],it.prototype,"label",void 0),ot([de({type:String})],it.prototype,"item_id",void 0),ot([de({type:Boolean})],it.prototype,"completed",void 0),it=ot([re("todo-item")],it);const nt=e=>t=>{Ce([_e.SetCompleted,[e,t]])},st=e=>{Ce([_e.RemoveTodo,e])},rt=()=>{const e=location.hash.substr(2);return"active"===e?Ae.Active:"completed"===e?Ae.Completed:Ae.All};window.load_wasm(e=>{const t=e.init_app();(e=>t=>{we=e,Se=t,Ce([_e.AddTodo,"local storage"])})(t)(e.send_event_to_rust);const o=document.createElement("todo-app");o.id="app",document.body.appendChild(o);const i=o=>{e.on_tick(t,o),requestAnimationFrame(i)};requestAnimationFrame(i),window.addEventListener("hashchange",()=>{Ce([_e.FilterChange,rt()])}),Ce([_e.FilterChange,rt()])})}]);