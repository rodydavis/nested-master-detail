(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=window,tt=I.ShadowRoot&&(I.ShadyCSS===void 0||I.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,et=Symbol(),ot=new WeakMap;class bt{constructor(t,e,i){if(this._$cssResult$=!0,i!==et)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(tt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ot.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ot.set(e,t))}return t}toString(){return this.cssText}}const Bt=s=>new bt(typeof s=="string"?s:s+"",void 0,et),it=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,n,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[r+1],s[0]);return new bt(e,s,et)},Dt=(s,t)=>{tt?s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=I.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,s.appendChild(i)})},lt=tt?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Bt(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K;const z=window,at=z.trustedTypes,It=at?at.emptyScript:"",ht=z.reactiveElementPolyfillSupport,X={toAttribute(s,t){switch(t){case Boolean:s=s?It:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},Et=(s,t)=>t!==s&&(t==t||s==s),Z={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:Et};class C extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;(e=this.h)!==null&&e!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Z){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Z}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(lt(n))}else t!==void 0&&e.push(lt(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Dt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Z){var n;const r=this.constructor._$Ep(t,i);if(r!==void 0&&i.reflect===!0){const o=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:X).toAttribute(e,i.type);this._$El=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,r=n._$Ev.get(t);if(r!==void 0&&this._$El!==r){const o=n.getPropertyOptions(r),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:X;this._$El=r,this[r]=c.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Et)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,r)=>this[r]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdate)===null||r===void 0?void 0:r.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}C.finalized=!0,C.elementProperties=new Map,C.elementStyles=[],C.shadowRootOptions={mode:"open"},ht==null||ht({ReactiveElement:C}),((K=z.reactiveElementVersions)!==null&&K!==void 0?K:z.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var F;const j=window,O=j.trustedTypes,ct=O?O.createPolicy("lit-html",{createHTML:s=>s}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,st="?"+_,zt=`<${st}>`,U=document,k=(s="")=>U.createComment(s),M=s=>s===null||typeof s!="object"&&typeof s!="function",St=Array.isArray,wt=s=>St(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dt=/-->/g,ut=/>/g,g=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pt=/'/g,$t=/"/g,xt=/^(?:script|style|textarea|title)$/i,jt=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),y=jt(1),A=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),vt=new WeakMap,Vt=(s,t,e)=>{var i,n;const r=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let o=r._$litPart$;if(o===void 0){const c=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=o=new N(t.insertBefore(k(),c),c,void 0,e!=null?e:{})}return o._$AI(s),o},P=U.createTreeWalker(U,129,null,!1),Ct=(s,t)=>{const e=s.length-1,i=[];let n,r=t===2?"<svg>":"",o=H;for(let a=0;a<e;a++){const l=s[a];let f,d,h=-1,u=0;for(;u<l.length&&(o.lastIndex=u,d=o.exec(l),d!==null);)u=o.lastIndex,o===H?d[1]==="!--"?o=dt:d[1]!==void 0?o=ut:d[2]!==void 0?(xt.test(d[2])&&(n=RegExp("</"+d[2],"g")),o=g):d[3]!==void 0&&(o=g):o===g?d[0]===">"?(o=n!=null?n:H,h=-1):d[1]===void 0?h=-2:(h=o.lastIndex-d[2].length,f=d[1],o=d[3]===void 0?g:d[3]==='"'?$t:pt):o===$t||o===pt?o=g:o===dt||o===ut?o=H:(o=g,n=void 0);const p=o===g&&s[a+1].startsWith("/>")?" ":"";r+=o===H?l+zt:h>=0?(i.push(f),l.slice(0,h)+"$lit$"+l.slice(h)+_+p):l+_+(h===-2?(i.push(void 0),a):p)}const c=r+(s[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ct!==void 0?ct.createHTML(c):c,i]};class R{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let r=0,o=0;const c=t.length-1,a=this.parts,[l,f]=Ct(t,e);if(this.el=R.createElement(l,i),P.currentNode=this.el.content,e===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(n=P.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const d=[];for(const h of n.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(_)){const u=f[o++];if(d.push(h),u!==void 0){const p=n.getAttribute(u.toLowerCase()+"$lit$").split(_),$=/([.?@])?(.*)/.exec(u);a.push({type:1,index:r,name:$[2],strings:p,ctor:$[1]==="."?Ot:$[1]==="?"?Ut:$[1]==="@"?Tt:B})}else a.push({type:6,index:r})}for(const h of d)n.removeAttribute(h)}if(xt.test(n.tagName)){const d=n.textContent.split(_),h=d.length-1;if(h>0){n.textContent=O?O.emptyScript:"";for(let u=0;u<h;u++)n.append(d[u],k()),P.nextNode(),a.push({type:2,index:++r});n.append(d[h],k())}}}else if(n.nodeType===8)if(n.data===st)a.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf(_,d+1))!==-1;)a.push({type:7,index:r}),d+=_.length-1}r++}}static createElement(t,e){const i=U.createElement("template");return i.innerHTML=t,i}}function S(s,t,e=s,i){var n,r,o,c;if(t===A)return t;let a=i!==void 0?(n=e._$Cl)===null||n===void 0?void 0:n[i]:e._$Cu;const l=M(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),l===void 0?a=void 0:(a=new l(s),a._$AT(s,e,i)),i!==void 0?((o=(c=e)._$Cl)!==null&&o!==void 0?o:c._$Cl=[])[i]=a:e._$Cu=a),a!==void 0&&(t=S(s,a._$AS(s,t.values),a,i)),t}class Pt{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:n}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:U).importNode(i,!0);P.currentNode=r;let o=P.nextNode(),c=0,a=0,l=n[0];for(;l!==void 0;){if(c===l.index){let f;l.type===2?f=new N(o,o.nextSibling,this,t):l.type===1?f=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(f=new Nt(o,this,t)),this.v.push(f),l=n[++a]}c!==(l==null?void 0:l.index)&&(o=P.nextNode(),c++)}return r}m(t){let e=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class N{constructor(t,e,i,n){var r;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$C_=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),M(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==A&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):wt(t)?this.O(t):this.$(t)}S(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==v&&M(this._$AH)?this._$AA.nextSibling.data=t:this.k(U.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=R.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.m(i);else{const o=new Pt(r,this),c=o.p(this.options);o.m(i),this.k(c),this._$AH=o}}_$AC(t){let e=vt.get(t.strings);return e===void 0&&vt.set(t.strings,e=new R(t)),e}O(t){St(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const r of t)n===e.length?e.push(i=new N(this.S(k()),this.S(k()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$C_=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class B{constructor(t,e,i,n,r){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const r=this.strings;let o=!1;if(r===void 0)t=S(this,t,e,0),o=!M(t)||t!==this._$AH&&t!==A,o&&(this._$AH=t);else{const c=t;let a,l;for(t=r[0],a=0;a<r.length-1;a++)l=S(this,c[i+a],e,a),l===A&&(l=this._$AH[a]),o||(o=!M(l)||l!==this._$AH[a]),l===v?t=v:t!==v&&(t+=(l!=null?l:"")+r[a+1]),this._$AH[a]=l}o&&!n&&this.P(t)}P(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Ot extends B{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===v?void 0:t}}const Wt=O?O.emptyScript:"";class Ut extends B{constructor(){super(...arguments),this.type=4}P(t){t&&t!==v?this.element.setAttribute(this.name,Wt):this.element.removeAttribute(this.name)}}class Tt extends B{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=S(this,t,e,0))!==null&&i!==void 0?i:v)===A)return;const n=this._$AH,r=t===v&&n!==v||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==v&&(n===v||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const qt={A:"$lit$",M:_,C:st,L:1,R:Ct,D:Pt,V:wt,I:S,H:N,N:B,U:Ut,B:Tt,F:Ot,W:Nt},ft=j.litHtmlPolyfillSupport;ft==null||ft(R,N),((F=j.litHtmlVersions)!==null&&F!==void 0?F:j.litHtmlVersions=[]).push("2.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var J,G;class E extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Vt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return A}}E.finalized=!0,E._$litElement$=!0,(J=globalThis.litElementHydrateSupport)===null||J===void 0||J.call(globalThis,{LitElement:E});const mt=globalThis.litElementPolyfillSupport;mt==null||mt({LitElement:E});((G=globalThis.litElementVersions)!==null&&G!==void 0?G:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=s=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(s,t):((e,i)=>{const{kind:n,elements:r}=i;return{kind:n,elements:r,finisher(o){customElements.define(e,o)}}})(s,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt=(s,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,s)}};function x(s){return(t,e)=>e!==void 0?((i,n,r)=>{n.constructor.createProperty(r,i)})(s,t,e):Kt(s,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ht(s){return x({...s,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Q;((Q=window.HTMLSlotElement)===null||Q===void 0?void 0:Q.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},kt=s=>(...t)=>({_$litDirective$:s,values:t});class Mt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:Zt}=qt,_t=()=>document.createComment(""),L=(s,t,e)=>{var i;const n=s._$AA.parentNode,r=t===void 0?s._$AB:t._$AA;if(e===void 0){const o=n.insertBefore(_t(),r),c=n.insertBefore(_t(),r);e=new Zt(o,c,s,s.options)}else{const o=e._$AB.nextSibling,c=e._$AM,a=c!==s;if(a){let l;(i=e._$AQ)===null||i===void 0||i.call(e,s),e._$AM=s,e._$AP!==void 0&&(l=s._$AU)!==c._$AU&&e._$AP(l)}if(o!==r||a){let l=e._$AA;for(;l!==o;){const f=l.nextSibling;n.insertBefore(l,r),l=f}}}return e},b=(s,t,e=s)=>(s._$AI(t,e),s),Ft={},Jt=(s,t=Ft)=>s._$AH=t,Gt=s=>s._$AH,Y=s=>{var t;(t=s._$AP)===null||t===void 0||t.call(s,!1,!0);let e=s._$AA;const i=s._$AB.nextSibling;for(;e!==i;){const n=e.nextSibling;e.remove(),e=n}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yt=(s,t,e)=>{const i=new Map;for(let n=t;n<=e;n++)i.set(s[n],n);return i},Qt=kt(class extends Mt{constructor(s){if(super(s),s.type!==Lt.CHILD)throw Error("repeat() can only be used in text expressions")}ht(s,t,e){let i;e===void 0?e=t:t!==void 0&&(i=t);const n=[],r=[];let o=0;for(const c of s)n[o]=i?i(c,o):o,r[o]=e(c,o),o++;return{values:r,keys:n}}render(s,t,e){return this.ht(s,t,e).values}update(s,[t,e,i]){var n;const r=Gt(s),{values:o,keys:c}=this.ht(t,e,i);if(!Array.isArray(r))return this.ut=c,o;const a=(n=this.ut)!==null&&n!==void 0?n:this.ut=[],l=[];let f,d,h=0,u=r.length-1,p=0,$=o.length-1;for(;h<=u&&p<=$;)if(r[h]===null)h++;else if(r[u]===null)u--;else if(a[h]===c[p])l[p]=b(r[h],o[p]),h++,p++;else if(a[u]===c[$])l[$]=b(r[u],o[$]),u--,$--;else if(a[h]===c[$])l[$]=b(r[h],o[$]),L(s,l[$+1],r[h]),h++,$--;else if(a[u]===c[p])l[p]=b(r[u],o[p]),L(s,r[h],r[u]),u--,p++;else if(f===void 0&&(f=yt(c,p,$),d=yt(a,h,u)),f.has(a[h]))if(f.has(a[u])){const m=d.get(c[p]),q=m!==void 0?r[m]:null;if(q===null){const rt=L(s,r[h]);b(rt,o[p]),l[p]=rt}else l[p]=b(q,o[p]),L(s,r[h],q),r[m]=null;p++}else Y(r[u]),u--;else Y(r[h]),h++;for(;p<=$;){const m=L(s,l[$+1]);b(m,o[p]),l[p++]=m}for(;h<=u;){const m=r[h++];m!==null&&Y(m)}return this.ut=c,Jt(s,l),A}});var Yt=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,W=(s,t,e,i)=>{for(var n=i>1?void 0:i?Xt(t,e):t,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&Yt(t,e,n),n};const te="list-view";let T=class extends E{constructor(){super(...arguments),this.items=[]}render(){var s;return y`<main>
      <header>
        <slot name="back"></slot>
        <h1>${(s=this.name)!=null?s:"List View"}</h1>
      </header>
      <ul>
        ${Qt(this.items,t=>t.id,this.buildItem.bind(this))}
      </ul>
    </main> `}buildItem(s,t){var e;return y`<li id=${t} ?selected=${((e=this.selected)==null?void 0:e.id)===s.id}>
      <span> ${t}: ${s.name} </span>
      <button @click=${()=>this.onSelectList(t)}>Items</button>
      <button @click=${()=>this.onSelectDetails(t)}>Details</button>
    </li>`}onSelectList(s){const t=this.items[s],e=new CustomEvent("select-list",{detail:{item:t,index:s}});this.dispatchEvent(e)}onSelectDetails(s){const t=this.items[s],e=new CustomEvent("select-details",{detail:{item:t,index:s}});this.dispatchEvent(e)}};T.styles=it`
    main {
      display: flex;
      flex-direction: column;
      --header-height: 80px;
    }
    header {
      display: flex;
      align-items: center;

      border-bottom: 1px solid #ccc;
      height: var(--header-height);
      box-sizing: border-box;
      padding: 0 1rem;
      font-size: 0.8rem;
    }
    ul {
      position: absolute;
      top: var(--header-height);
      left: 0;
      right: 0;
      bottom: 0;

      overflow-y: auto;
      padding: 0;
      margin: 0;
    }
    li {
      padding: 0.5rem 1rem;
    }
    li[selected] span {
      text-decoration: underline;
    }
    span {
      padding-right: 1rem;
    }
    li:first-child {
      padding-top: 1rem;
    }
    li:last-child {
      padding-bottom: 1rem;
    }
  `;W([x()],T.prototype,"name",2);W([x({type:Object})],T.prototype,"selected",2);W([x({type:Array})],T.prototype,"items",2);T=W([nt(te)],T);var ee=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,Rt=(s,t,e,i)=>{for(var n=i>1?void 0:i?ie(t,e):t,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&ee(t,e,n),n};const se="detail-view";let V=class extends E{render(){const{id:s,name:t}=this.item;return y` <main>
      <header>
        <slot name="back"></slot>
        <h1>${t}</h1>
      </header>
      <section><p>Index: ${s}</p></section>
    </main>`}};V.styles=it`
    main {
      display: flex;
      flex-direction: column;
      --header-height: 80px;
    }
    header {
      display: flex;
      align-items: center;

      border-bottom: 1px solid #ccc;
      height: var(--header-height);
      box-sizing: border-box;
      padding: 0 1rem;
      font-size: 0.8rem;
    }
    section {
      padding: 0 1rem;
    }
  `;Rt([x({type:Object})],V.prototype,"item",2);V=Rt([nt(se)],V);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=kt(class extends Mt{constructor(s){var t;if(super(s),s.type!==Lt.ATTRIBUTE||s.name!=="style"||((t=s.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((t,e)=>{const i=s[e];return i==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(s,[t]){const{style:e}=s.element;if(this.vt===void 0){this.vt=new Set;for(const i in t)this.vt.add(i);return this.render(t)}this.vt.forEach(i=>{t[i]==null&&(this.vt.delete(i),i.includes("-")?e.removeProperty(i):e[i]="")});for(const i in t){const n=t[i];n!=null&&(this.vt.add(i),i.includes("-")?e.setProperty(i,n):e[i]=n)}return A}});function At(s){return y` <button
    slot="back"
    style=${ne({background:"none",color:"inherit",padding:"0.5rem",border:"1px solid #ccc",borderRadius:"0.5rem",marginRight:"1rem",cursor:"pointer"})}
    @click=${()=>s()}
  >
    <
  </button>`}var re=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,D=(s,t,e,i)=>{for(var n=i>1?void 0:i?oe(t,e):t,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&re(t,e,n),n};const le="master-detail";let w=class extends E{constructor(){super(...arguments),this.showList=!1}render(){var s,t;return y`
      <main ?selected=${this.selected!==void 0}>
        <list-view
          .name=${(s=this.item)==null?void 0:s.name}
          .items=${(t=this.items)!=null?t:Array.from(gt(100))}
          .selected=${this.selected}
          @select-details=${this.onSelectDetails}
          @select-list=${this.onSelectList}
        >
          <slot slot="back" name="back"></slot>
        </list-view>
        ${this.buildBody()}
      </main>
    `}buildBody(){return this.selected?this.showList?y`<master-detail
          class="details"
          .item=${this.selected}
          .items=${Array.from(gt(50))}
        >
          ${At(()=>this.onBack())}
        </master-detail>`:y`<detail-view
          class="details"
          .item=${this.selected}
          @back=${this.onBack}
        >
          ${At(()=>this.onBack())}
        </detail-view>`:y`
      <div class="details empty"><p>Select an item from the list</p></div>
    `}onSelectDetails(s){const{detail:t}=s;console.log("onSelectDetails",t),this.showList=!1,this.selected=t.item}onSelectList(s){const{detail:t}=s;console.log("onSelectList",t),this.showList=!0,this.selected=t.item}onBack(){this.selected=void 0}};w.styles=it`
    main {
      display: flex;
      height: 100%;
      width: 100%;
      container-type: inline-size;
    }
    list-view {
      flex: 1;
      max-width: 300px;
      min-width: 300px;
      overflow-y: auto;
      overflow-x: hidden;
      border-right: 1px solid #ccc;
    }
    .details {
      flex: 1;
    }
    .empty {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .details button {
      display: none;
    }
    @container (inline-size < 600px) {
      main list-view {
        max-width: 100%;
      }
      main[selected] list-view {
        display: none;
      }
      main[selected] .details button {
        display: block;
      }
      .empty {
        display: none;
      }
    }
  `;D([x({type:Object})],w.prototype,"item",2);D([x({type:Array})],w.prototype,"items",2);D([Ht()],w.prototype,"selected",2);D([Ht()],w.prototype,"showList",2);w=D([nt(le)],w);function*gt(s){for(let t=0;t<s;t++)yield{id:t,name:`Item ${t}`}}
