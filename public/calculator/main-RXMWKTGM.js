var Kc=Object.defineProperty,Gh=Object.defineProperties,Kh=Object.getOwnPropertyDescriptor,Qh=Object.getOwnPropertyDescriptors;var Wc=Object.getOwnPropertySymbols;var Zh=Object.prototype.hasOwnProperty,Yh=Object.prototype.propertyIsEnumerable;var Qc=t=>{throw TypeError(t)};var Gc=(t,e,n)=>e in t?Kc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,v=(t,e)=>{for(var n in e||={})Zh.call(e,n)&&Gc(t,n,e[n]);if(Wc)for(var n of Wc(e))Yh.call(e,n)&&Gc(t,n,e[n]);return t},M=(t,e)=>Gh(t,Qh(e));var m=(t,e,n,r)=>{for(var o=r>1?void 0:r?Kh(e,n):e,i=t.length-1,s;i>=0;i--)(s=t[i])&&(o=(r?s(e,n,o):s(o))||o);return r&&o&&Kc(e,n,o),o};var Zc=(t,e,n)=>e.has(t)||Qc("Cannot "+n);var D=(t,e,n)=>(Zc(t,e,"read from private field"),n?n.call(t):e.get(t)),x=(t,e,n)=>e.has(t)?Qc("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),C=(t,e,n,r)=>(Zc(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n);var fe=null,so=!1,Wi=1,Jh=null,Ue=Symbol("SIGNAL");function L(t){let e=fe;return fe=t,e}function ao(){return fe}var co={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Yc(t){if(so)throw new Error("");if(fe===null)return;fe.consumerOnSignalRead(t);let e=fe.producersTail;if(e!==void 0&&e.producer===t)return;let n,r=fe.recomputing;if(r&&(n=e!==void 0?e.nextProducer:fe.producers,n!==void 0&&n.producer===t)){fe.producersTail=n,n.lastReadVersion=t.version;return}let o=t.consumersTail;if(o!==void 0&&o.consumer===fe&&(!r||em(o,fe)))return;let i=fn(fe),s={producer:t,consumer:fe,nextProducer:n,prevConsumer:o,lastReadVersion:t.version,nextConsumer:void 0};fe.producersTail=s,e!==void 0?e.nextProducer=s:fe.producers=s,i&&rl(t,s)}function Jc(){Wi++}function Xc(t){if(!(fn(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===Wi)){if(!t.producerMustRecompute(t)&&!Zi(t)){zi(t);return}t.producerRecomputeValue(t),zi(t)}}function Gi(t){if(t.consumers===void 0)return;let e=so;so=!0;try{for(let n=t.consumers;n!==void 0;n=n.nextConsumer){let r=n.consumer;r.dirty||Xh(r)}}finally{so=e}}function Ki(){return fe?.consumerAllowSignalWrites!==!1}function Xh(t){t.dirty=!0,Gi(t),t.consumerMarkedDirty?.(t)}function zi(t){t.dirty=!1,t.lastCleanEpoch=Wi}function Qi(t){return t&&el(t),L(t)}function el(t){t.producersTail=void 0,t.recomputing=!0}function tl(t,e){L(e),t&&nl(t)}function nl(t){t.recomputing=!1;let e=t.producersTail,n=e!==void 0?e.nextProducer:t.producers;if(n!==void 0){if(fn(t))do n=Yi(n);while(n!==void 0);e!==void 0?e.nextProducer=void 0:t.producers=void 0}}function Zi(t){for(let e=t.producers;e!==void 0;e=e.nextProducer){let n=e.producer,r=e.lastReadVersion;if(r!==n.version||(Xc(n),r!==n.version))return!0}return!1}function lo(t){if(fn(t)){let e=t.producers;for(;e!==void 0;)e=Yi(e)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function rl(t,e){let n=t.consumersTail,r=fn(t);if(n!==void 0?(e.nextConsumer=n.nextConsumer,n.nextConsumer=e):(e.nextConsumer=void 0,t.consumers=e),e.prevConsumer=n,t.consumersTail=e,!r)for(let o=t.producers;o!==void 0;o=o.nextProducer)rl(o.producer,o)}function Yi(t){let e=t.producer,n=t.nextProducer,r=t.nextConsumer,o=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,r!==void 0?r.prevConsumer=o:e.consumersTail=o,o!==void 0)o.nextConsumer=r;else if(e.consumers=r,!fn(e)){let i=e.producers;for(;i!==void 0;)i=Yi(i)}return n}function fn(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function ol(t){Jh?.(t)}function em(t,e){let n=e.producersTail;if(n!==void 0){let r=e.producers;do{if(r===t)return!0;if(r===n)break;r=r.nextProducer}while(r!==void 0)}return!1}function il(t,e){return Object.is(t,e)}function tm(){throw new Error}var sl=tm;function al(t){sl(t)}function Ji(t){sl=t}var nm=null;function Xi(t,e){let n=Object.create(ul);n.value=t,e!==void 0&&(n.equal=e);let r=()=>cl(n);return r[Ue]=n,ol(n),[r,s=>es(n,s),s=>ll(n,s)]}function cl(t){return Yc(t),t.value}function es(t,e){Ki()||al(t),t.equal(t.value,e)||(t.value=e,rm(t))}function ll(t,e){Ki()||al(t),es(t,e(t.value))}var ul=M(v({},co),{equal:il,value:void 0,kind:"signal"});function rm(t){t.version++,Jc(),Gi(t),nm?.(t)}function J(t){return typeof t=="function"}function uo(t){let n=t(r=>{Error.call(r),r.stack=new Error().stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var fo=uo(t=>function(n){t(this),this.message=n?`${n.length} errors occurred during unsubscription:
${n.map((r,o)=>`${o+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=n});function Xn(t,e){if(t){let n=t.indexOf(e);0<=n&&t.splice(n,1)}}var me=class t{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(let i of n)i.remove(this);else n.remove(this);let{initialTeardown:r}=this;if(J(r))try{r()}catch(i){e=i instanceof fo?i.errors:[i]}let{_finalizers:o}=this;if(o){this._finalizers=null;for(let i of o)try{dl(i)}catch(s){e=e??[],s instanceof fo?e=[...e,...s.errors]:e.push(s)}}if(e)throw new fo(e)}}add(e){var n;if(e&&e!==this)if(this.closed)dl(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}}_hasParent(e){let{_parentage:n}=this;return n===e||Array.isArray(n)&&n.includes(e)}_addParent(e){let{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e}_removeParent(e){let{_parentage:n}=this;n===e?this._parentage=null:Array.isArray(n)&&Xn(n,e)}remove(e){let{_finalizers:n}=this;n&&Xn(n,e),e instanceof t&&e._removeParent(this)}};me.EMPTY=(()=>{let t=new me;return t.closed=!0,t})();var ts=me.EMPTY;function po(t){return t instanceof me||t&&"closed"in t&&J(t.remove)&&J(t.add)&&J(t.unsubscribe)}function dl(t){J(t)?t():t.unsubscribe()}var Re={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var pn={setTimeout(t,e,...n){let{delegate:r}=pn;return r?.setTimeout?r.setTimeout(t,e,...n):setTimeout(t,e,...n)},clearTimeout(t){let{delegate:e}=pn;return(e?.clearTimeout||clearTimeout)(t)},delegate:void 0};function ho(t){pn.setTimeout(()=>{let{onUnhandledError:e}=Re;if(e)e(t);else throw t})}function er(){}var fl=ns("C",void 0,void 0);function pl(t){return ns("E",void 0,t)}function hl(t){return ns("N",t,void 0)}function ns(t,e,n){return{kind:t,value:e,error:n}}var Ot=null;function hn(t){if(Re.useDeprecatedSynchronousErrorHandling){let e=!Ot;if(e&&(Ot={errorThrown:!1,error:null}),t(),e){let{errorThrown:n,error:r}=Ot;if(Ot=null,n)throw r}}else t()}function ml(t){Re.useDeprecatedSynchronousErrorHandling&&Ot&&(Ot.errorThrown=!0,Ot.error=t)}var Pt=class extends me{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,po(e)&&e.add(this)):this.destination=sm}static create(e,n,r){return new mn(e,n,r)}next(e){this.isStopped?os(hl(e),this):this._next(e)}error(e){this.isStopped?os(pl(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?os(fl,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},om=Function.prototype.bind;function rs(t,e){return om.call(t,e)}var is=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:n}=this;if(n.next)try{n.next(e)}catch(r){mo(r)}}error(e){let{partialObserver:n}=this;if(n.error)try{n.error(e)}catch(r){mo(r)}else mo(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(n){mo(n)}}},mn=class extends Pt{constructor(e,n,r){super();let o;if(J(e)||!e)o={next:e??void 0,error:n??void 0,complete:r??void 0};else{let i;this&&Re.useDeprecatedNextContext?(i=Object.create(e),i.unsubscribe=()=>this.unsubscribe(),o={next:e.next&&rs(e.next,i),error:e.error&&rs(e.error,i),complete:e.complete&&rs(e.complete,i)}):o=e}this.destination=new is(o)}};function mo(t){Re.useDeprecatedSynchronousErrorHandling?ml(t):ho(t)}function im(t){throw t}function os(t,e){let{onStoppedNotification:n}=Re;n&&pn.setTimeout(()=>n(t,e))}var sm={closed:!0,next:er,error:im,complete:er};var gn=typeof Symbol=="function"&&Symbol.observable||"@@observable";function gl(t){return t}function yl(t){return t.length===0?gl:t.length===1?t[0]:function(n){return t.reduce((r,o)=>o(r),n)}}var ie=(()=>{class t{constructor(n){n&&(this._subscribe=n)}lift(n){let r=new t;return r.source=this,r.operator=n,r}subscribe(n,r,o){let i=cm(n)?n:new mn(n,r,o);return hn(()=>{let{operator:s,source:a}=this;i.add(s?s.call(i,a):a?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(n){try{return this._subscribe(n)}catch(r){n.error(r)}}forEach(n,r){return r=vl(r),new r((o,i)=>{let s=new mn({next:a=>{try{n(a)}catch(c){i(c),s.unsubscribe()}},error:i,complete:o});this.subscribe(s)})}_subscribe(n){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(n)}[gn](){return this}pipe(...n){return yl(n)(this)}toPromise(n){return n=vl(n),new n((r,o)=>{let i;this.subscribe(s=>i=s,s=>o(s),()=>r(i))})}}return t.create=e=>new t(e),t})();function vl(t){var e;return(e=t??Re.Promise)!==null&&e!==void 0?e:Promise}function am(t){return t&&J(t.next)&&J(t.error)&&J(t.complete)}function cm(t){return t&&t instanceof Pt||am(t)&&po(t)}function lm(t){return J(t?.lift)}function yt(t){return e=>{if(lm(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function Je(t,e,n,r,o){return new ss(t,e,n,r,o)}var ss=class extends Pt{constructor(e,n,r,o,i,s){super(e),this.onFinalize=i,this.shouldUnsubscribe=s,this._next=n?function(a){try{n(a)}catch(c){e.error(c)}}:super._next,this._error=o?function(a){try{o(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:n}=this;super.unsubscribe(),!n&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};var bl=uo(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var ke=(()=>{class t extends ie{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let r=new go(this,this);return r.operator=n,r}_throwIfClosed(){if(this.closed)throw new bl}next(n){hn(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let r of this.currentObservers)r.next(n)}})}error(n){hn(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:r}=this;for(;r.length;)r.shift().error(n)}})}complete(){hn(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:r,isStopped:o,observers:i}=this;return r||o?ts:(this.currentObservers=null,i.push(n),new me(()=>{this.currentObservers=null,Xn(i,n)}))}_checkFinalizedStatuses(n){let{hasError:r,thrownError:o,isStopped:i}=this;r?n.error(o):i&&n.complete()}asObservable(){let n=new ie;return n.source=this,n}}return t.create=(e,n)=>new go(e,n),t})(),go=class extends ke{constructor(e,n){super(),this.destination=e,this.source=n}next(e){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.next)===null||r===void 0||r.call(n,e)}error(e){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.error)===null||r===void 0||r.call(n,e)}complete(){var e,n;(n=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||n===void 0||n.call(e)}_subscribe(e){var n,r;return(r=(n=this.source)===null||n===void 0?void 0:n.subscribe(e))!==null&&r!==void 0?r:ts}};var tr=class extends ke{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let n=super._subscribe(e);return!n.closed&&e.next(this._value),n}getValue(){let{hasError:e,thrownError:n,_value:r}=this;if(e)throw n;return this._throwIfClosed(),r}next(e){super.next(this._value=e)}};var _l=new ie(t=>t.complete());function wl(t,e,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function a(u){try{l(r.next(u))}catch(d){s(d)}}function c(u){try{l(r.throw(u))}catch(d){s(d)}}function l(u){u.done?i(u.value):o(u.value).then(a,c)}l((r=r.apply(t,e||[])).next())})}function El(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Lt(t){return this instanceof Lt?(this.v=t,this):new Lt(t)}function Il(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),o,i=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(f){return function(h){return Promise.resolve(h).then(f,d)}}function a(f,h){r[f]&&(o[f]=function(_){return new Promise(function(b,N){i.push([f,_,b,N])>1||c(f,_)})},h&&(o[f]=h(o[f])))}function c(f,h){try{l(r[f](h))}catch(_){p(i[0][3],_)}}function l(f){f.value instanceof Lt?Promise.resolve(f.value.v).then(u,d):p(i[0][2],f)}function u(f){c("next",f)}function d(f){c("throw",f)}function p(f,h){f(h),i.shift(),i.length&&c(i[0][0],i[0][1])}}function Dl(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof El=="function"?El(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=t[i]&&function(s){return new Promise(function(a,c){s=t[i](s),o(a,c,s.done,s.value)})}}function o(i,s,a,c){Promise.resolve(c).then(function(l){i({value:l,done:a})},s)}}var xl=t=>t&&typeof t.length=="number"&&typeof t!="function";function Cl(t){return J(t?.then)}function Sl(t){return J(t[gn])}function Tl(t){return Symbol.asyncIterator&&J(t?.[Symbol.asyncIterator])}function Ml(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function um(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Nl=um();function kl(t){return J(t?.[Nl])}function Al(t){return Il(this,arguments,function*(){let n=t.getReader();try{for(;;){let{value:r,done:o}=yield Lt(n.read());if(o)return yield Lt(void 0);yield yield Lt(r)}}finally{n.releaseLock()}})}function Rl(t){return J(t?.getReader)}function Ol(t){if(t instanceof ie)return t;if(t!=null){if(Sl(t))return dm(t);if(xl(t))return fm(t);if(Cl(t))return pm(t);if(Tl(t))return Pl(t);if(kl(t))return hm(t);if(Rl(t))return mm(t)}throw Ml(t)}function dm(t){return new ie(e=>{let n=t[gn]();if(J(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function fm(t){return new ie(e=>{for(let n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function pm(t){return new ie(e=>{t.then(n=>{e.closed||(e.next(n),e.complete())},n=>e.error(n)).then(null,ho)})}function hm(t){return new ie(e=>{for(let n of t)if(e.next(n),e.closed)return;e.complete()})}function Pl(t){return new ie(e=>{gm(t,e).catch(n=>e.error(n))})}function mm(t){return Pl(Al(t))}function gm(t,e){var n,r,o,i;return wl(this,void 0,void 0,function*(){try{for(n=Dl(t);r=yield n.next(),!r.done;){let s=r.value;if(e.next(s),e.closed)return}}catch(s){o={error:s}}finally{try{r&&!r.done&&(i=n.return)&&(yield i.call(n))}finally{if(o)throw o.error}}e.complete()})}function Be(t,e){return yt((n,r)=>{let o=0;n.subscribe(Je(r,i=>{r.next(t.call(e,i,o++))}))})}var Xe=new ie(er);function yo(t,e){return yt((n,r)=>{let o=0;n.subscribe(Je(r,i=>t.call(e,i,o++)&&r.next(i)))})}function $t(t){return t<=0?()=>_l:yt((e,n)=>{let r=0;e.subscribe(Je(n,o=>{++r<=t&&(n.next(o),t<=r&&n.complete())}))})}function yn(t,e){return yt((n,r)=>{let o=null,i=0,s=!1,a=()=>s&&!o&&r.complete();n.subscribe(Je(r,c=>{o?.unsubscribe();let l=0,u=i++;Ol(t(c,u)).subscribe(o=Je(r,d=>r.next(e?e(c,d,u,l++):d),()=>{o=null,a()}))},()=>{s=!0,a()}))})}var as;function vo(){return as}function qe(t){let e=as;return as=t,e}var Ll=Symbol("NotFound");function vn(t){return t===Ll||t?.name==="\u0275NotFound"}var Is="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",A=class extends Error{code;constructor(e,n){super(sr(e,n)),this.code=e}};function _m(t){return`NG0${Math.abs(t)}`}function sr(t,e){return`${_m(t)}${e?": "+e:""}`}function G(t){for(let e in t)if(t[e]===G)return e;throw Error("")}function Do(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(Do).join(", ")}]`;if(t==null)return""+t;let e=t.overriddenName||t.name;if(e)return`${e}`;let n=t.toString();if(n==null)return""+n;let r=n.indexOf(`
`);return r>=0?n.slice(0,r):n}function Ds(t,e){return t?e?`${t} ${e}`:t:e||""}var Em=G({__forward_ref__:G});function xo(t){return t.__forward_ref__=xo,t}function xe(t){return Hl(t)?t():t}function Hl(t){return typeof t=="function"&&t.hasOwnProperty(Em)&&t.__forward_ref__===xo}function ee(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function Co(t){return wm(t,So)}function wm(t,e){return t.hasOwnProperty(e)&&t[e]||null}function Im(t){let e=t?.[So]??null;return e||null}function ls(t){return t&&t.hasOwnProperty(_o)?t[_o]:null}var So=G({\u0275prov:G}),_o=G({\u0275inj:G}),j=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,n){this._desc=e,this.\u0275prov=void 0,typeof n=="number"?this.__NG_ELEMENT_ID__=n:n!==void 0&&(this.\u0275prov=ee({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function xs(t){return t&&!!t.\u0275providers}var Cs=G({\u0275cmp:G}),Ss=G({\u0275dir:G}),Ts=G({\u0275pipe:G});var us=G({\u0275fac:G}),Ut=G({__NG_ELEMENT_ID__:G}),$l=G({__NG_ENV_ID__:G});function ar(t){return Ns(t,"@Component"),t[Cs]||null}function Ms(t){return Ns(t,"@Directive"),t[Ss]||null}function Ul(t){return Ns(t,"@Pipe"),t[Ts]||null}function Ns(t,e){if(t==null)throw new A(-919,!1)}function Bl(t){return typeof t=="string"?t:t==null?"":String(t)}var ql=G({ngErrorCode:G}),Dm=G({ngErrorMessage:G}),xm=G({ngTokenPath:G});function ks(t,e){return zl("",-200,e)}function To(t,e){throw new A(-201,!1)}function zl(t,e,n){let r=new A(e,t);return r[ql]=e,r[Dm]=t,n&&(r[xm]=n),r}function Cm(t){return t[ql]}var ds;function Wl(){return ds}function De(t){let e=ds;return ds=t,e}function As(t,e,n){let r=Co(t);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(n&8)return null;if(e!==void 0)return e;To(t,"")}var Sm={},Vt=Sm,Tm="__NG_DI_FLAG__",fs=class{injector;constructor(e){this.injector=e}retrieve(e,n){let r=Ft(n)||0;try{return this.injector.get(e,r&8?null:Vt,r)}catch(o){if(vn(o))return o;throw o}}};function Mm(t,e=0){let n=vo();if(n===void 0)throw new A(-203,!1);if(n===null)return As(t,void 0,e);{let r=Nm(e),o=n.retrieve(t,r);if(vn(o)){if(r.optional)return null;throw o}return o}}function B(t,e=0){return(Wl()||Mm)(xe(t),e)}function R(t,e){return B(t,Ft(e))}function Ft(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function Nm(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function ps(t){let e=[];for(let n=0;n<t.length;n++){let r=xe(t[n]);if(Array.isArray(r)){if(r.length===0)throw new A(900,!1);let o,i=0;for(let s=0;s<r.length;s++){let a=r[s],c=km(a);typeof c=="number"?c===-1?o=a.token:i|=c:o=a}e.push(B(o,i))}else e.push(B(r))}return e}function km(t){return t[Tm]}function _n(t,e){let n=t.hasOwnProperty(us);return n?t[us]:null}function Mo(t,e){t.forEach(n=>Array.isArray(n)?Mo(n,e):e(n))}function Rs(t,e){return e>=t.length-1?t.pop():t.splice(e,1)[0]}function Gl(t,e,n,r){let o=t.length;if(o==e)t.push(n,r);else if(o===1)t.push(r,t[0]),t[0]=n;else{for(o--,t.push(t[o-1],t[o]);o>e;){let i=o-2;t[o]=t[i],o--}t[e]=n,t[e+1]=r}}function Kl(t,e,n){let r=wn(t,e);return r>=0?t[r|1]=n:(r=~r,Gl(t,r,e,n)),r}function No(t,e){let n=wn(t,e);if(n>=0)return t[n|1]}function wn(t,e){return Am(t,e,1)}function Am(t,e,n){let r=0,o=t.length>>n;for(;o!==r;){let i=r+(o-r>>1),s=t[i<<n];if(e===s)return i<<n;s>e?o=i:r=i+1}return~(o<<n)}var Bt={},vt=[],In=new j(""),Os=new j("",-1),Ps=new j(""),rr=class{get(e,n=Vt){if(n===Vt){let o=zl("",-201);throw o.name="\u0275NotFound",o}return n}};function qt(t){return{\u0275providers:t}}function Ql(t){return qt([{provide:In,multi:!0,useValue:t}])}function Zl(...t){return{\u0275providers:Ls(!0,t),\u0275fromNgModule:!0}}function Ls(t,...e){let n=[],r=new Set,o,i=s=>{n.push(s)};return Mo(e,s=>{let a=s;Eo(a,i,[],r)&&(o||=[],o.push(a))}),o!==void 0&&Yl(o,i),n}function Yl(t,e){for(let n=0;n<t.length;n++){let{ngModule:r,providers:o}=t[n];$s(o,i=>{e(i,r)})}}function Eo(t,e,n,r){if(t=xe(t),!t)return!1;let o=null,i=ls(t),s=!i&&ar(t);if(!i&&!s){let c=t.ngModule;if(i=ls(c),i)o=c;else return!1}else{if(s&&!s.standalone)return!1;o=t}let a=r.has(o);if(s){if(a)return!1;if(r.add(o),s.dependencies){let c=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let l of c)Eo(l,e,n,r)}}else if(i){if(i.imports!=null&&!a){r.add(o);let l;Mo(i.imports,u=>{Eo(u,e,n,r)&&(l||=[],l.push(u))}),l!==void 0&&Yl(l,e)}if(!a){let l=_n(o)||(()=>new o);e({provide:o,useFactory:l,deps:vt},o),e({provide:Ps,useValue:o,multi:!0},o),e({provide:In,useValue:()=>B(o),multi:!0},o)}let c=i.providers;if(c!=null&&!a){let l=t;$s(c,u=>{e(u,l)})}}else return!1;return o!==t&&t.providers!==void 0}function $s(t,e){for(let n of t)xs(n)&&(n=n.\u0275providers),Array.isArray(n)?$s(n,e):e(n)}var Rm=G({provide:String,useValue:G});function Jl(t){return t!==null&&typeof t=="object"&&Rm in t}function Om(t){return!!(t&&t.useExisting)}function Pm(t){return!!(t&&t.useFactory)}function wo(t){return typeof t=="function"}var cr=new j(""),bo={},Vl={},cs;function lr(){return cs===void 0&&(cs=new rr),cs}var Oe=class{},jt=class extends Oe{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,ms(e,s=>this.processProvider(s)),this.records.set(Os,bn(void 0,this)),o.has("environment")&&this.records.set(Oe,bn(void 0,this));let i=this.records.get(cr);i!=null&&typeof i.value=="string"&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(Ps,vt,{self:!0}))}retrieve(e,n){let r=Ft(n)||0;try{return this.get(e,Vt,r)}catch(o){if(vn(o))return o;throw o}}destroy(){nr(this),this._destroyed=!0;let e=L(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let n=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of n)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),L(e)}}onDestroy(e){return nr(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){nr(this);let n=qe(this),r=De(void 0),o;try{return e()}finally{qe(n),De(r)}}get(e,n=Vt,r){if(nr(this),e.hasOwnProperty($l))return e[$l](this);let o=Ft(r),i,s=qe(this),a=De(void 0);try{if(!(o&4)){let l=this.records.get(e);if(l===void 0){let u=jm(e)&&Co(e);u&&this.injectableDefInScope(u)?l=bn(hs(e),bo):l=null,this.records.set(e,l)}if(l!=null)return this.hydrate(e,l,o)}let c=o&2?lr():this.parent;return n=o&8&&n===Vt?null:n,c.get(e,n)}catch(c){let l=Cm(c);throw l===-200||l===-201?new A(l,null):c}finally{De(a),qe(s)}}resolveInjectorInitializers(){let e=L(null),n=qe(this),r=De(void 0),o;try{let i=this.get(In,vt,{self:!0});for(let s of i)s()}finally{qe(n),De(r),L(e)}}toString(){return"R3Injector[...]"}processProvider(e){e=xe(e);let n=wo(e)?e:xe(e&&e.provide),r=$m(e);if(!wo(e)&&e.multi===!0){let o=this.records.get(n);o||(o=bn(void 0,bo,!0),o.factory=()=>ps(o.multi),this.records.set(n,o)),n=e,o.multi.push(e)}this.records.set(n,r)}hydrate(e,n,r){let o=L(null);try{if(n.value===Vl)throw ks("");return n.value===bo&&(n.value=Vl,n.value=n.factory(void 0,r)),typeof n.value=="object"&&n.value&&Fm(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}finally{L(o)}}injectableDefInScope(e){if(!e.providedIn)return!1;let n=xe(e.providedIn);return typeof n=="string"?n==="any"||this.scopes.has(n):this.injectorDefTypes.has(n)}removeOnDestroy(e){let n=this._onDestroyHooks.indexOf(e);n!==-1&&this._onDestroyHooks.splice(n,1)}};function hs(t){let e=Co(t),n=e!==null?e.factory:_n(t);if(n!==null)return n;if(t instanceof j)throw new A(-204,!1);if(t instanceof Function)return Lm(t);throw new A(-204,!1)}function Lm(t){if(t.length>0)throw new A(-204,!1);let n=Im(t);return n!==null?()=>n.factory(t):()=>new t}function $m(t){if(Jl(t))return bn(void 0,t.useValue);{let e=Xl(t);return bn(e,bo)}}function Xl(t,e,n){let r;if(wo(t)){let o=xe(t);return _n(o)||hs(o)}else if(Jl(t))r=()=>xe(t.useValue);else if(Pm(t))r=()=>t.useFactory(...ps(t.deps||[]));else if(Om(t))r=(o,i)=>B(xe(t.useExisting),i!==void 0&&i&8?8:void 0);else{let o=xe(t&&(t.useClass||t.provide));if(Vm(t))r=()=>new o(...ps(t.deps));else return _n(o)||hs(o)}return r}function nr(t){if(t.destroyed)throw new A(-205,!1)}function bn(t,e,n=!1){return{factory:t,value:e,multi:n?[]:void 0}}function Vm(t){return!!t.deps}function Fm(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function jm(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function ms(t,e){for(let n of t)Array.isArray(n)?ms(n,e):n&&xs(n)?ms(n.\u0275providers,e):e(n)}function ko(t,e){let n;t instanceof jt?(nr(t),n=t):n=new fs(t);let r,o=qe(n),i=De(void 0);try{return e()}finally{qe(o),De(i)}}function eu(){return Wl()!==void 0||vo()!=null}var ze=0,H=1,O=2,Ce=3,ot=4,it=5,Ao=6,Dn=7,_e=8,bt=9,st=10,ge=11,xn=12,Vs=13,Cn=14,We=15,ur=16,zt=17,Ro=18,_t=19,Fs=20,tt=21,Oo=22,dr=23,Se=24,Po=25,Sn=26,Pe=27,tu=1;var Lo=7,nu=8,fr=9,at=10;function Et(t){return Array.isArray(t)&&typeof t[tu]=="object"}function wt(t){return Array.isArray(t)&&t[tu]===!0}function js(t){return(t.flags&4)!==0}function Tn(t){return t.componentOffset>-1}function Hs(t){return(t.flags&1)===1}function Mn(t){return!!t.template}function Nn(t){return(t[O]&512)!==0}function Wt(t){return(t[O]&256)===256}var ru="svg",ou="math";function ct(t){for(;Array.isArray(t);)t=t[ze];return t}function Us(t,e){return ct(e[t])}function It(t,e){return ct(e[t.index])}function Bs(t,e){return t.data[e]}function lt(t,e){let n=e[t];return Et(n)?n:n[ze]}function $o(t){return(t[O]&128)===128}function pr(t,e){return e==null?null:t[e]}function qs(t){t[zt]=0}function zs(t){t[O]&1024||(t[O]|=1024,$o(t)&&mr(t))}function hr(t){return!!(t[O]&9216||t[Se]?.dirty)}function Ws(t){t[st].changeDetectionScheduler?.notify(8),t[O]&64&&(t[O]|=1024),hr(t)&&mr(t)}function mr(t){t[st].changeDetectionScheduler?.notify(0);let e=Ht(t);for(;e!==null&&!(e[O]&8192||(e[O]|=8192,!$o(e)));)e=Ht(e)}function Gs(t,e){if(Wt(t))throw new A(911,!1);t[tt]===null&&(t[tt]=[]),t[tt].push(e)}function iu(t,e){if(t[tt]===null)return;let n=t[tt].indexOf(e);n!==-1&&t[tt].splice(n,1)}function Ht(t){let e=t[Ce];return wt(e)?e[Ce]:e}function su(t){return t[Dn]??=[]}function au(t){return t.cleanup??=[]}var q={lFrame:Iu(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var gs=!1;function cu(){return q.lFrame.elementDepthCount}function lu(){q.lFrame.elementDepthCount++}function uu(){q.lFrame.elementDepthCount--}function du(){return q.skipHydrationRootTNode!==null}function fu(t){return q.skipHydrationRootTNode===t}function pu(){q.skipHydrationRootTNode=null}function Te(){return q.lFrame.lView}function kn(){return q.lFrame.tView}function Gt(){let t=Ks();for(;t!==null&&t.type===64;)t=t.parent;return t}function Ks(){return q.lFrame.currentTNode}function hu(){let t=q.lFrame,e=t.currentTNode;return t.isParent?e:e.parent}function gr(t,e){let n=q.lFrame;n.currentTNode=t,n.isParent=e}function Qs(){return q.lFrame.isParent}function mu(){q.lFrame.isParent=!1}function Zs(){return gs}function Ys(t){let e=gs;return gs=t,e}function gu(t){return q.lFrame.bindingIndex=t}function Js(){return q.lFrame.bindingIndex++}function yu(t){let e=q.lFrame,n=e.bindingIndex;return e.bindingIndex=e.bindingIndex+t,n}function vu(){return q.lFrame.inI18n}function bu(t,e){let n=q.lFrame;n.bindingIndex=n.bindingRootIndex=t,Vo(e)}function _u(){return q.lFrame.currentDirectiveIndex}function Vo(t){q.lFrame.currentDirectiveIndex=t}function Eu(t){let e=q.lFrame.currentDirectiveIndex;return e===-1?null:t[e]}function Xs(t){q.lFrame.currentQueryIndex=t}function Hm(t){let e=t[H];return e.type===2?e.declTNode:e.type===1?t[it]:null}function ea(t,e,n){if(n&4){let o=e,i=t;for(;o=o.parent,o===null&&!(n&1);)if(o=Hm(i),o===null||(i=i[Cn],o.type&10))break;if(o===null)return!1;e=o,t=i}let r=q.lFrame=wu();return r.currentTNode=e,r.lView=t,!0}function Fo(t){let e=wu(),n=t[H];q.lFrame=e,e.currentTNode=n.firstChild,e.lView=t,e.tView=n,e.contextLView=t,e.bindingIndex=n.bindingStartIndex,e.inI18n=!1}function wu(){let t=q.lFrame,e=t===null?null:t.child;return e===null?Iu(t):e}function Iu(t){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=e),e}function Du(){let t=q.lFrame;return q.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var ta=Du;function jo(){let t=Du();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function Kt(){return q.lFrame.selectedIndex}function Dt(t){q.lFrame.selectedIndex=t}function xu(){let t=q.lFrame;return Bs(t.tView,t.selectedIndex)}function na(){return q.lFrame.currentNamespace}var Cu=!0;function ra(){return Cu}function oa(t){Cu=t}function ys(t,e=null,n=null,r){let o=Su(t,e,n,r);return o.resolveInjectorInitializers(),o}function Su(t,e=null,n=null,r,o=new Set){let i=[n||vt,Zl(t)],s;return new jt(i,e||lr(),s||null,o)}var nt=class t{static THROW_IF_NOT_FOUND=Vt;static NULL=new rr;static create(e,n){if(Array.isArray(e))return ys({name:""},n,e,"");{let r=e.name??"";return ys({name:r},e.parent,e.providers,r)}}static \u0275prov=ee({token:t,providedIn:"any",factory:()=>B(Os)});static __NG_ELEMENT_ID__=-1},Ae=new j(""),yr=(()=>{class t{static __NG_ELEMENT_ID__=Um;static __NG_ENV_ID__=n=>n}return t})(),vs=class extends yr{_lView;constructor(e){super(),this._lView=e}get destroyed(){return Wt(this._lView)}onDestroy(e){let n=this._lView;return Gs(n,e),()=>iu(n,e)}};function Um(){return new vs(Te())}var Tu=!1,Mu=new j(""),An=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new tr(!1);debugTaskTracker=R(Mu,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new ie(n=>{n.next(!1),n.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let n=this.taskId++;return this.pendingTasks.add(n),this.debugTaskTracker?.add(n),n}has(n){return this.pendingTasks.has(n)}remove(n){this.pendingTasks.delete(n),this.debugTaskTracker?.remove(n),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=ee({token:t,providedIn:"root",factory:()=>new t})}return t})(),bs=class extends ke{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,eu()&&(this.destroyRef=R(yr,{optional:!0})??void 0,this.pendingTasks=R(An,{optional:!0})??void 0)}emit(e){let n=L(null);try{super.next(e)}finally{L(n)}}subscribe(e,n,r){let o=e,i=n||(()=>null),s=r;if(e&&typeof e=="object"){let c=e;o=c.next?.bind(c),i=c.error?.bind(c),s=c.complete?.bind(c)}this.__isAsync&&(i=this.wrapInTimeout(i),o&&(o=this.wrapInTimeout(o)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:o,error:i,complete:s});return e instanceof me&&e.add(a),a}wrapInTimeout(e){return n=>{let r=this.pendingTasks?.add();setTimeout(()=>{try{e(n)}finally{r!==void 0&&this.pendingTasks?.remove(r)}})}}},et=bs;function Io(...t){}function ia(t){let e,n;function r(){t=Io;try{n!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(n),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{t(),r()}),typeof requestAnimationFrame=="function"&&(n=requestAnimationFrame(()=>{t(),r()})),()=>r()}function Nu(t){return queueMicrotask(()=>t()),()=>{t=Io}}var sa="isAngularZone",or=sa+"_ID",Bm=0,be=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new et(!1);onMicrotaskEmpty=new et(!1);onStable=new et(!1);onError=new et(!1);constructor(e){let{enableLongStackTrace:n=!1,shouldCoalesceEventChangeDetection:r=!1,shouldCoalesceRunChangeDetection:o=!1,scheduleInRootZone:i=Tu}=e;if(typeof Zone>"u")throw new A(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),n&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!o&&r,s.shouldCoalesceRunChangeDetection=o,s.callbackScheduled=!1,s.scheduleInRootZone=i,Wm(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(sa)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new A(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new A(909,!1)}run(e,n,r){return this._inner.run(e,n,r)}runTask(e,n,r,o){let i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,e,qm,Io,Io);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(e,n,r){return this._inner.runGuarded(e,n,r)}runOutsideAngular(e){return this._outer.run(e)}},qm={};function aa(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function zm(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function e(){ia(()=>{t.callbackScheduled=!1,_s(t),t.isCheckStableRunning=!0,aa(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{e()}):t._outer.run(()=>{e()}),_s(t)}function Wm(t){let e=()=>{zm(t)},n=Bm++;t._inner=t._inner.fork({name:"angular",properties:{[sa]:!0,[or]:n,[or+n]:!0},onInvokeTask:(r,o,i,s,a,c)=>{if(Gm(c))return r.invokeTask(i,s,a,c);try{return Fl(t),r.invokeTask(i,s,a,c)}finally{(t.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&e(),jl(t)}},onInvoke:(r,o,i,s,a,c,l)=>{try{return Fl(t),r.invoke(i,s,a,c,l)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!Km(c)&&e(),jl(t)}},onHasTask:(r,o,i,s)=>{r.hasTask(i,s),o===i&&(s.change=="microTask"?(t._hasPendingMicrotasks=s.microTask,_s(t),aa(t)):s.change=="macroTask"&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(r,o,i,s)=>(r.handleError(i,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}function _s(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Fl(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function jl(t){t._nesting--,aa(t)}var ir=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new et;onMicrotaskEmpty=new et;onStable=new et;onError=new et;run(e,n,r){return e.apply(n,r)}runGuarded(e,n,r){return e.apply(n,r)}runOutsideAngular(e){return e()}runTask(e,n,r,o){return e.apply(n,r)}};function Gm(t){return ku(t,"__ignore_ng_zone__")}function Km(t){return ku(t,"__scheduler_tick__")}function ku(t,e){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[e]===!0}var rt=class{_console=console;handleError(e){this._console.error("ERROR",e)}},Qt=new j("",{factory:()=>{let t=R(be),e=R(Oe),n;return r=>{t.runOutsideAngular(()=>{e.destroyed&&!n?setTimeout(()=>{throw r}):(n??=e.get(rt),n.handleError(r))})}}}),Au={provide:In,useValue:()=>{let t=R(rt,{optional:!0})},multi:!0},Qm=new j("",{factory:()=>{let t=R(Ae).defaultView;if(!t)return;let e=R(Qt),n=i=>{e(i.reason),i.preventDefault()},r=i=>{i.error?e(i.error):e(new Error(i.message,{cause:i})),i.preventDefault()},o=()=>{t.addEventListener("unhandledrejection",n),t.addEventListener("error",r)};typeof Zone<"u"?Zone.root.run(o):o(),R(yr).onDestroy(()=>{t.removeEventListener("error",r),t.removeEventListener("unhandledrejection",n)})}});function ca(){return qt([Ql(()=>{R(Qm)})])}function Rn(t,e){let[n,r,o]=Xi(t,e?.equal),i=n,s=i[Ue];return i.set=r,i.update=o,i.asReadonly=Ru.bind(i),i}function Ru(){let t=this[Ue];if(t.readonlyFn===void 0){let e=()=>this();e[Ue]=t,t.readonlyFn=e}return t.readonlyFn}var En=class{},vr=new j("",{factory:()=>!0});var la=new j("");var ua=(()=>{class t{static \u0275prov=ee({token:t,providedIn:"root",factory:()=>new Es})}return t})(),Es=class{dirtyEffectCount=0;queues=new Map;add(e){this.enqueue(e),this.schedule(e)}schedule(e){e.dirty&&this.dirtyEffectCount++}remove(e){let n=e.zone,r=this.queues.get(n);r.has(e)&&(r.delete(e),e.dirty&&this.dirtyEffectCount--)}enqueue(e){let n=e.zone;this.queues.has(n)||this.queues.set(n,new Set);let r=this.queues.get(n);r.has(e)||r.add(e)}flush(){for(;this.dirtyEffectCount>0;){let e=!1;for(let[n,r]of this.queues)n===null?e||=this.flushQueue(r):e||=n.run(()=>this.flushQueue(r));e||(this.dirtyEffectCount=0)}}flushQueue(e){let n=!1;for(let r of e)r.dirty&&(this.dirtyEffectCount--,n=!0,r.run());return n}},ws=class{[Ue];constructor(e){this[Ue]=e}destroy(){this[Ue].destroy()}};function rd(t){return{toString:t}.toString()}function od(t,e,n,r){e!==null?e.applyValueToInputSignal(e,r):t[n]=r}var zo=class{previousValue;currentValue;firstChange;constructor(e,n,r){this.previousValue=e,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}};function dg(t){return t.type.prototype.ngOnChanges&&(t.setInput=pg),fg}function fg(){let t=sd(this),e=t?.current;if(e){let n=t.previous;if(n===Bt)t.previous=e;else for(let r in e)n[r]=e[r];t.current=null,this.ngOnChanges(e)}}function pg(t,e,n,r,o){let i=this.declaredInputs[r],s=sd(t)||hg(t,{previous:Bt,current:null}),a=s.current||(s.current={}),c=s.previous,l=c[i];a[i]=new zo(l&&l.currentValue,n,c===Bt),od(t,e,o,n)}var id="__ngSimpleChanges__";function sd(t){return t[id]||null}function hg(t,e){return t[id]=e}var Ou=[];var K=function(t,e=null,n){for(let r=0;r<Ou.length;r++){let o=Ou[r];o(t,e,n)}},z=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(z||{});function mg(t,e,n){let{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=e.type.prototype;if(r){let s=dg(e);(n.preOrderHooks??=[]).push(t,s),(n.preOrderCheckHooks??=[]).push(t,s)}o&&(n.preOrderHooks??=[]).push(0-t,o),i&&((n.preOrderHooks??=[]).push(t,i),(n.preOrderCheckHooks??=[]).push(t,i))}function gg(t,e){for(let n=e.directiveStart,r=e.directiveEnd;n<r;n++){let i=t.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=i;s&&(t.contentHooks??=[]).push(-n,s),a&&((t.contentHooks??=[]).push(n,a),(t.contentCheckHooks??=[]).push(n,a)),c&&(t.viewHooks??=[]).push(-n,c),l&&((t.viewHooks??=[]).push(n,l),(t.viewCheckHooks??=[]).push(n,l)),u!=null&&(t.destroyHooks??=[]).push(n,u)}}function Uo(t,e,n){ad(t,e,3,n)}function Bo(t,e,n,r){(t[O]&3)===n&&ad(t,e,n,r)}function da(t,e){let n=t[O];(n&3)===e&&(n&=16383,n+=1,t[O]=n)}function ad(t,e,n,r){let o=r!==void 0?t[zt]&65535:0,i=r??-1,s=e.length-1,a=0;for(let c=o;c<s;c++)if(typeof e[c+1]=="number"){if(a=e[c],r!=null&&a>=r)break}else e[c]<0&&(t[zt]+=65536),(a<i||i==-1)&&(yg(t,n,e,c),t[zt]=(t[zt]&4294901760)+c+2),c++}function Pu(t,e){K(z.LifecycleHookStart,t,e);let n=L(null);try{e.call(t)}finally{L(n),K(z.LifecycleHookEnd,t,e)}}function yg(t,e,n,r){let o=n[r]<0,i=n[r+1],s=o?-n[r]:n[r],a=t[s];o?t[O]>>14<t[zt]>>16&&(t[O]&3)===e&&(t[O]+=16384,Pu(a,i)):Pu(a,i)}var Pn=-1,Er=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,n,r,o){this.factory=e,this.name=o,this.canSeeViewProviders=n,this.injectImpl=r}};function vg(t,e,n){let r=0;for(;r<n.length;){let o=n[r];if(typeof o=="number"){if(o!==0)break;r++;let i=n[r++],s=n[r++],a=n[r++];t.setAttribute(e,s,a,i)}else{let i=o,s=n[++r];bg(i)?t.setProperty(e,i,s):t.setAttribute(e,i,s),r++}}return r}function bg(t){return t.charCodeAt(0)===64}function Pa(t,e){if(!(e===null||e.length===0))if(t===null||t.length===0)t=e.slice();else{let n=-1;for(let r=0;r<e.length;r++){let o=e[r];typeof o=="number"?n=o:n===0||(n===-1||n===2?Lu(t,n,o,null,e[++r]):Lu(t,n,o,null,null))}}return t}function Lu(t,e,n,r,o){let i=0,s=t.length;if(e===-1)s=-1;else for(;i<t.length;){let a=t[i++];if(typeof a=="number"){if(a===e){s=-1;break}else if(a>e){s=i-1;break}}}for(;i<t.length;){let a=t[i];if(typeof a=="number")break;if(a===n){o!==null&&(t[i+1]=o);return}i++,o!==null&&i++}s!==-1&&(t.splice(s,0,e),i=s+1),t.splice(i++,0,n),o!==null&&t.splice(i++,0,o)}function _g(t){return t!==Pn}function ga(t){return t&32767}function Eg(t){return t>>16}function ya(t,e){let n=Eg(t),r=e;for(;n>0;)r=r[Cn],n--;return r}var va=!0;function $u(t){let e=va;return va=t,e}var wg=256,cd=wg-1,ld=5,Ig=0,Ge={};function Dg(t,e,n){let r;typeof n=="string"?r=n.charCodeAt(0)||0:n.hasOwnProperty(Ut)&&(r=n[Ut]),r==null&&(r=n[Ut]=Ig++);let o=r&cd,i=1<<o;e.data[t+(o>>ld)]|=i}function ud(t,e){let n=dd(t,e);if(n!==-1)return n;let r=e[H];r.firstCreatePass&&(t.injectorIndex=e.length,fa(r.data,t),fa(e,null),fa(r.blueprint,null));let o=fd(t,e),i=t.injectorIndex;if(_g(o)){let s=ga(o),a=ya(o,e),c=a[H].data;for(let l=0;l<8;l++)e[i+l]=a[s+l]|c[s+l]}return e[i+8]=o,i}function fa(t,e){t.push(0,0,0,0,0,0,0,0,e)}function dd(t,e){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||e[t.injectorIndex+8]===null?-1:t.injectorIndex}function fd(t,e){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let n=0,r=null,o=e;for(;o!==null;){if(r=yd(o),r===null)return Pn;if(n++,o=o[Cn],r.injectorIndex!==-1)return r.injectorIndex|n<<16}return Pn}function xg(t,e,n){Dg(t,e,n)}function pd(t,e,n){if(n&8||t!==void 0)return t;To(e,"NodeInjector")}function hd(t,e,n,r){if(n&8&&r===void 0&&(r=null),(n&3)===0){let o=t[bt],i=De(void 0);try{return o?o.get(e,r,n&8):As(e,r,n&8)}finally{De(i)}}return pd(r,e,n)}function md(t,e,n,r=0,o){if(t!==null){if(e[O]&2048&&!(r&2)){let s=Ng(t,e,n,r,Ge);if(s!==Ge)return s}let i=gd(t,e,n,r,Ge);if(i!==Ge)return i}return hd(e,n,r,o)}function gd(t,e,n,r,o){let i=Tg(n);if(typeof i=="function"){if(!ea(e,t,r))return r&1?pd(o,n,r):hd(e,n,r,o);try{let s;if(s=i(r),s==null&&!(r&8))To(n);else return s}finally{ta()}}else if(typeof i=="number"){let s=null,a=dd(t,e),c=Pn,l=r&1?e[We][it]:null;for((a===-1||r&4)&&(c=a===-1?fd(t,e):e[a+8],c===Pn||!Fu(r,!1)?a=-1:(s=e[H],a=ga(c),e=ya(c,e)));a!==-1;){let u=e[H];if(Vu(i,a,u.data)){let d=Cg(a,e,n,s,r,l);if(d!==Ge)return d}c=e[a+8],c!==Pn&&Fu(r,e[H].data[a+8]===l)&&Vu(i,a,e)?(s=u,a=ga(c),e=ya(c,e)):a=-1}}return o}function Cg(t,e,n,r,o,i){let s=e[H],a=s.data[t+8],c=r==null?Tn(a)&&va:r!=s&&(a.type&3)!==0,l=o&1&&i===a,u=Sg(a,s,n,c,l);return u!==null?ba(e,s,u,a,o):Ge}function Sg(t,e,n,r,o){let i=t.providerIndexes,s=e.data,a=i&1048575,c=t.directiveStart,l=t.directiveEnd,u=i>>20,d=r?a:a+u,p=o?a+u:l;for(let f=d;f<p;f++){let h=s[f];if(f<c&&n===h||f>=c&&h.type===n)return f}if(o){let f=s[c];if(f&&Mn(f)&&f.type===n)return c}return null}function ba(t,e,n,r,o){let i=t[n],s=e.data;if(i instanceof Er){let a=i;if(a.resolving)throw ks("");let c=$u(a.canSeeViewProviders);a.resolving=!0;let l=s[n].type||s[n],u,d=a.injectImpl?De(a.injectImpl):null,p=ea(t,r,0);try{i=t[n]=a.factory(void 0,o,s,t,r),e.firstCreatePass&&n>=r.directiveStart&&mg(n,s[n],e)}finally{d!==null&&De(d),$u(c),a.resolving=!1,ta()}}return i}function Tg(t){if(typeof t=="string")return t.charCodeAt(0)||0;let e=t.hasOwnProperty(Ut)?t[Ut]:void 0;return typeof e=="number"?e>=0?e&cd:Mg:e}function Vu(t,e,n){let r=1<<t;return!!(n[e+(t>>ld)]&r)}function Fu(t,e){return!(t&2)&&!(t&1&&e)}var Wo=class{_tNode;_lView;constructor(e,n){this._tNode=e,this._lView=n}get(e,n,r){return md(this._tNode,this._lView,e,Ft(r),n)}};function Mg(){return new Wo(Gt(),Te())}function Ng(t,e,n,r,o){let i=t,s=e;for(;i!==null&&s!==null&&s[O]&2048&&!Nn(s);){let a=gd(i,s,n,r|2,Ge);if(a!==Ge)return a;let c=i.parent;if(!c){let l=s[Fs];if(l){let u=l.get(n,Ge,r&-5);if(u!==Ge)return u}c=yd(s),s=s[Cn]}i=c}return o}function yd(t){let e=t[H],n=e.type;return n===2?e.declTNode:n===1?t[it]:null}function kg(){return vd(Gt(),Te())}function vd(t,e){return new bd(It(t,e))}var bd=(()=>{class t{nativeElement;constructor(n){this.nativeElement=n}static __NG_ELEMENT_ID__=kg}return t})();function Ag(t){return(t.flags&128)===128}var La=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(La||{}),_d=new Map,Rg=0;function Og(){return Rg++}function Pg(t){_d.set(t[_t],t)}function _a(t){_d.delete(t[_t])}var ju="__ngContext__";function wr(t,e){Et(e)?(t[ju]=e[_t],Pg(e)):t[ju]=e}function Ed(t){return Id(t[xn])}function wd(t){return Id(t[ot])}function Id(t){for(;t!==null&&!wt(t);)t=t[ot];return t}var Lg;function $a(t){Lg=t}var Xo=new j("",{factory:()=>$g}),$g="ng";var ei=new j(""),Cr=new j("",{providedIn:"platform",factory:()=>"unknown"});var ti=new j("",{factory:()=>R(Ae).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Dd=!1,xd=new j("",{factory:()=>Dd});var Hu=new WeakMap;function Vg(t,e){if(t==null||typeof t!="object")return;let n=Hu.get(t);n||(n=new WeakSet,Hu.set(t,n)),n.add(e)}var Fg=(t,e,n,r)=>{};function jg(t,e,n,r){Fg(t,e,n,r)}function Va(t){return(t.flags&32)===32}var Hg=()=>null;function Cd(t,e,n=!1){return Hg(t,e,n)}function Sd(t,e){let n=t.contentQueries;if(n!==null){let r=L(null);try{for(let o=0;o<n.length;o+=2){let i=n[o],s=n[o+1];if(s!==-1){let a=t.data[s];Xs(i),a.contentQueries(2,e[s],s)}}}finally{L(r)}}}function Ea(t,e,n){Xs(0);let r=L(null);try{e(t,n)}finally{L(r)}}function Ug(t,e,n){if(js(e)){let r=L(null);try{let o=e.directiveStart,i=e.directiveEnd;for(let s=o;s<i;s++){let a=t.data[s];if(a.contentQueries){let c=n[s];a.contentQueries(1,c,s)}}}finally{L(r)}}}var Le=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(Le||{});var wa=class{changingThisBreaksApplicationSecurity;constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Is})`}};function Td(t){return t instanceof wa?t.changingThisBreaksApplicationSecurity:t}function Bg(t,e){return t.createText(e)}function qg(t,e,n){t.setValue(e,n)}function Md(t,e,n){return t.createElement(e,n)}function Ia(t,e,n,r,o){t.insertBefore(e,n,r,o)}function Nd(t,e,n){t.appendChild(e,n)}function Uu(t,e,n,r,o){r!==null?Ia(t,e,n,r,o):Nd(t,e,n)}function zg(t,e,n,r){t.removeChild(null,e,n,r)}function Wg(t,e,n){t.setAttribute(e,"style",n)}function Gg(t,e,n){n===""?t.removeAttribute(e,"class"):t.setAttribute(e,"class",n)}function kd(t,e,n){let{mergedAttrs:r,classes:o,styles:i}=n;r!==null&&vg(t,e,r),o!==null&&Gg(t,e,o),i!==null&&Wg(t,e,i)}var Kg="ng-template";function Qg(t){return t.type===4&&t.value!==Kg}function Da(t){return(t&1)===0}function Bu(t,e){return t?":not("+e.trim()+")":e}function Zg(t){let e=t[0],n=1,r=2,o="",i=!1;for(;n<t.length;){let s=t[n];if(typeof s=="string")if(r&2){let a=t[++n];o+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else r&8?o+="."+s:r&4&&(o+=" "+s);else o!==""&&!Da(s)&&(e+=Bu(i,o),o=""),r=s,i=i||!Da(r);n++}return o!==""&&(e+=Bu(i,o)),e}function Yg(t){return t.map(Zg).join(",")}function Jg(t){let e=[],n=[],r=1,o=2;for(;r<t.length;){let i=t[r];if(typeof i=="string")o===2?i!==""&&e.push(i,t[++r]):o===8&&n.push(i);else{if(!Da(o))break;o=i}r++}return n.length&&e.push(1,...n),e}var xt={};function Ad(t,e,n,r,o,i,s,a,c,l,u){let d=Pe+r,p=d+o,f=Xg(d,p),h=typeof l=="function"?l():l;return f[H]={type:t,blueprint:f,template:n,queries:null,viewQuery:a,declTNode:e,data:f.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:p,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof i=="function"?i():i,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:c,consts:h,incompleteFirstPass:!1,ssrId:u}}function Xg(t,e){let n=[];for(let r=0;r<e;r++)n.push(r<t?null:xt);return n}function ey(t){let e=t.tView;return e===null||e.incompleteFirstPass?t.tView=Ad(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):e}function Rd(t,e,n,r,o,i,s,a,c,l,u){let d=e.blueprint.slice();return d[ze]=o,d[O]=r|4|128|8|64|1024,(l!==null||t&&t[O]&2048)&&(d[O]|=2048),qs(d),d[Ce]=d[Cn]=t,d[_e]=n,d[st]=s||t&&t[st],d[ge]=a||t&&t[ge],d[bt]=c||t&&t[bt]||null,d[it]=i,d[_t]=Og(),d[Ao]=u,d[Fs]=l,d[We]=e.type==2?t[We]:d,d}function ty(t,e,n){let r=It(e,t),o=ey(n),i=t[st].rendererFactory,s=ny(t,Rd(t,o,null,Od(n),r,e,null,i.createRenderer(r,n),null,null,null));return t[e.index]=s}function Od(t){let e=16;return t.signals?e=4096:t.onPush&&(e=64),e}function Pd(t,e,n,r){if(n===0)return-1;let o=e.length;for(let i=0;i<n;i++)e.push(r),t.blueprint.push(r),t.data.push(null);return o}function ny(t,e){return t[xn]?t[Vs][ot]=e:t[xn]=e,t[Vs]=e,e}function Sr(t=1){Ld(kn(),Te(),Kt()+t,!1)}function Ld(t,e,n,r){if(!r)if((e[O]&3)===3){let i=t.preOrderCheckHooks;i!==null&&Uo(e,i,n)}else{let i=t.preOrderHooks;i!==null&&Bo(e,i,0,n)}Dt(n)}var ni=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(ni||{});function xa(t,e,n,r){let o=L(null);try{let[i,s,a]=t.inputs[n],c=null;(s&ni.SignalBased)!==0&&(c=e[i][Ue]),c!==null&&c.transformFn!==void 0?r=c.transformFn(r):a!==null&&(r=a.call(e,r)),t.setInput!==null?t.setInput(e,c,r,n,i):od(e,c,i,r)}finally{L(o)}}var ut=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(ut||{}),ry;function $d(t,e){return ry(t,e)}var px=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var Ca=new WeakMap,br=new WeakSet;function oy(t,e){let n=Ca.get(t);if(!n||n.length===0)return;let r=e.parentNode,o=e.previousSibling;for(let i=n.length-1;i>=0;i--){let s=n[i],a=s.parentNode;s===e?(n.splice(i,1),br.add(s),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(o&&s===o||a&&r&&a!==r)&&(n.splice(i,1),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),s.parentNode?.removeChild(s))}}function iy(t,e){let n=Ca.get(t);n?n.includes(e)||n.push(e):Ca.set(t,[e])}var Ln=new Set,Fa=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(Fa||{}),Vn=new j(""),qu=new Set;function Vd(t){qu.has(t)||(qu.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var Fd=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=ee({token:t,providedIn:"root",factory:()=>new t})}return t})();var sy=new j("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:R(Oe)})});function jd(t,e,n){let r=t.get(sy);if(Array.isArray(e))for(let o of e)r.queue.add(o),n?.detachedLeaveAnimationFns?.push(o);else r.queue.add(e),n?.detachedLeaveAnimationFns?.push(e);r.scheduler&&r.scheduler(t)}function ay(t,e){for(let[n,r]of e)jd(t,r.animateFns)}function zu(t,e,n,r){let o=t?.[Sn]?.enter;e!==null&&o&&o.has(n.index)&&ay(r,o)}function On(t,e,n,r,o,i,s,a){if(o!=null){let c,l=!1;wt(o)?c=o:Et(o)&&(l=!0,o=o[ze]);let u=ct(o);t===0&&r!==null?(zu(a,r,i,n),s==null?Nd(e,r,u):Ia(e,r,u,s||null,!0)):t===1&&r!==null?(zu(a,r,i,n),Ia(e,r,u,s||null,!0),oy(i,u)):t===2?(a?.[Sn]?.leave?.has(i.index)&&iy(i,u),br.delete(u),Wu(a,i,n,d=>{if(br.has(u)){br.delete(u);return}zg(e,u,l,d)})):t===3&&(br.delete(u),Wu(a,i,n,()=>{e.destroyNode(u)})),c!=null&&Ey(e,t,n,c,i,r,s)}}function cy(t,e){Hd(t,e),e[ze]=null,e[it]=null}function Hd(t,e){e[st].changeDetectionScheduler?.notify(9),Ua(t,e,e[ge],2,null,null)}function ly(t){let e=t[xn];if(!e)return pa(t[H],t);for(;e;){let n=null;if(Et(e))n=e[xn];else{let r=e[at];r&&(n=r)}if(!n){for(;e&&!e[ot]&&e!==t;)Et(e)&&pa(e[H],e),e=e[Ce];e===null&&(e=t),Et(e)&&pa(e[H],e),n=e&&e[ot]}e=n}}function ja(t,e){let n=t[fr],r=n.indexOf(e);n.splice(r,1)}function uy(t,e){if(Wt(e))return;let n=e[ge];n.destroyNode&&Ua(t,e,n,3,null,null),ly(e)}function pa(t,e){if(Wt(e))return;let n=L(null);try{e[O]&=-129,e[O]|=256,e[Se]&&lo(e[Se]),py(t,e),fy(t,e),e[H].type===1&&e[ge].destroy();let r=e[ur];if(r!==null&&wt(e[Ce])){r!==e[Ce]&&ja(r,e);let o=e[Ro];o!==null&&o.detachView(t)}_a(e)}finally{L(n)}}function Wu(t,e,n,r){let o=t?.[Sn];if(o==null||o.leave==null||!o.leave.has(e.index))return r(!1);t&&Ln.add(t[_t]),jd(n,()=>{if(o.leave&&o.leave.has(e.index)){let s=o.leave.get(e.index),a=[];if(s){for(let c=0;c<s.animateFns.length;c++){let l=s.animateFns[c],{promise:u}=l();a.push(u)}o.detachedLeaveAnimationFns=void 0}o.running=Promise.allSettled(a),dy(t,r)}else t&&Ln.delete(t[_t]),r(!1)},o)}function dy(t,e){let n=t[Sn]?.running;if(n){n.then(()=>{t[Sn].running=void 0,Ln.delete(t[_t]),e(!0)});return}e(!1)}function fy(t,e){let n=t.cleanup,r=e[Dn];if(n!==null)for(let s=0;s<n.length-1;s+=2)if(typeof n[s]=="string"){let a=n[s+3];a>=0?r[a]():r[-a].unsubscribe(),s+=2}else{let a=r[n[s+1]];n[s].call(a)}r!==null&&(e[Dn]=null);let o=e[tt];if(o!==null){e[tt]=null;for(let s=0;s<o.length;s++){let a=o[s];a()}}let i=e[dr];if(i!==null){e[dr]=null;for(let s of i)s.destroy()}}function py(t,e){let n;if(t!=null&&(n=t.destroyHooks)!=null)for(let r=0;r<n.length;r+=2){let o=e[n[r]];if(!(o instanceof Er)){let i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){let a=o[i[s]],c=i[s+1];K(z.LifecycleHookStart,a,c);try{c.call(a)}finally{K(z.LifecycleHookEnd,a,c)}}else{K(z.LifecycleHookStart,o,i);try{i.call(o)}finally{K(z.LifecycleHookEnd,o,i)}}}}}function hy(t,e,n){return my(t,e.parent,n)}function my(t,e,n){let r=e;for(;r!==null&&r.type&168;)e=r,r=e.parent;if(r===null)return n[ze];if(Tn(r)){let{encapsulation:o}=t.data[r.directiveStart+r.componentOffset];if(o===Le.None||o===Le.Emulated)return null}return It(r,n)}function gy(t,e,n){return vy(t,e,n)}function yy(t,e,n){return t.type&40?It(t,n):null}var vy=yy,Gu;function Ud(t,e,n,r){let o=hy(t,r,e),i=e[ge],s=r.parent||e[it],a=gy(s,r,e);if(o!=null)if(Array.isArray(n))for(let c=0;c<n.length;c++)Uu(i,o,n[c],a,!1);else Uu(i,o,n,a,!1);Gu!==void 0&&Gu(i,r,e,n,o)}function by(t,e){if(e!==null){let r=t[We][it],o=e.projection;return r.projection[o]}return null}function Ha(t,e,n,r,o,i,s){for(;n!=null;){let a=r[bt];if(n.type===128){n=n.next;continue}let c=r[n.index],l=n.type;if(s&&e===0&&(c&&wr(ct(c),r),n.flags|=2),!Va(n))if(l&8)Ha(t,e,n.child,r,o,i,!1),On(e,t,a,o,c,n,i,r);else if(l&32){let u=$d(n,r),d;for(;d=u();)On(e,t,a,o,d,n,i,r);On(e,t,a,o,c,n,i,r)}else l&16?_y(t,e,r,n,o,i):On(e,t,a,o,c,n,i,r);n=s?n.projectionNext:n.next}}function Ua(t,e,n,r,o,i){Ha(n,r,t.firstChild,e,o,i,!1)}function _y(t,e,n,r,o,i){let s=n[We],c=s[it].projection[r.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];On(e,t,n[bt],o,u,r,i,n)}else{let l=c,u=s[Ce];Ag(r)&&(l.flags|=128),Ha(t,e,l,u,o,i,!0)}}function Ey(t,e,n,r,o,i,s){let a=r[Lo],c=ct(r);a!==c&&On(e,t,n,i,a,o,s);for(let l=at;l<r.length;l++){let u=r[l];Ua(u[H],u,t,e,i,a)}}function wy(t,e,n,r,o){if(e)o?t.addClass(n,r):t.removeClass(n,r);else{let i=r.indexOf("-")===-1?void 0:ut.DashCase;o==null?t.removeStyle(n,r,i):(typeof o=="string"&&o.endsWith("!important")&&(o=o.slice(0,-10),i|=ut.Important),t.setStyle(n,r,o,i))}}function Bd(t,e,n,r,o){let i=Kt(),s=r&2;try{Dt(-1),s&&e.length>Pe&&Ld(t,e,Pe,!1);let a=s?z.TemplateUpdateStart:z.TemplateCreateStart;K(a,o,n),n(r,o)}finally{Dt(i);let a=s?z.TemplateUpdateEnd:z.TemplateCreateEnd;K(a,o,n)}}function Iy(t,e,n){My(t,e,n),(n.flags&64)===64&&Ny(t,e,n)}function Dy(t,e,n=It){let r=e.localNames;if(r!==null){let o=e.index+1;for(let i=0;i<r.length;i+=2){let s=r[i+1],a=s===-1?n(e,t):t[s];t[o++]=a}}}function xy(t,e,n,r){let i=r.get(xd,Dd)||n===Le.ShadowDom||n===Le.ExperimentalIsolatedShadowDom,s=t.selectRootElement(e,i);return Cy(s),s}function Cy(t){Sy(t)}var Sy=()=>null;function Ty(t,e,n,r,o,i){if(t.type&3){let s=It(t,e);r=i!=null?i(r,t.value||"",n):r,o.setProperty(s,n,r)}else t.type&12}function My(t,e,n){let r=n.directiveStart,o=n.directiveEnd;Tn(n)&&ty(e,n,t.data[r+n.componentOffset]),t.firstCreatePass||ud(n,e);let i=n.initialInputs;for(let s=r;s<o;s++){let a=t.data[s],c=ba(e,t,s,n);if(wr(c,e),i!==null&&Ay(e,s-r,c,a,n,i),Mn(a)){let l=lt(n.index,e);l[_e]=ba(e,t,s,n)}}}function Ny(t,e,n){let r=n.directiveStart,o=n.directiveEnd,i=n.index,s=_u();try{Dt(i);for(let a=r;a<o;a++){let c=t.data[a],l=e[a];Vo(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&ky(c,l)}}finally{Dt(-1),Vo(s)}}function ky(t,e){t.hostBindings!==null&&t.hostBindings(1,e)}function Ay(t,e,n,r,o,i){let s=i[e];if(s!==null)for(let a=0;a<s.length;a+=2){let c=s[a],l=s[a+1];xa(r,n,c,l)}}function Ry(t,e,n,r,o){let i=Pe+n,s=e[H],a=o(s,e,t,r,n);e[i]=a,gr(t,!0);let c=t.type===2;return c?(kd(e[ge],a,t),(cu()===0||Hs(t))&&wr(a,e),lu()):wr(a,e),ra()&&(!c||!Va(t))&&Ud(s,e,a,t),t}function Oy(t){let e=t;return Qs()?mu():(e=e.parent,gr(e,!1)),e}function Py(t,e){let n=t[bt];if(!n)return;let r;try{r=n.get(Qt,null)}catch{r=null}r?.(e)}function Ly(t,e,n,r,o){let i=t.inputs?.[r],s=t.hostDirectiveInputs?.[r],a=!1;if(s)for(let c=0;c<s.length;c+=2){let l=s[c],u=s[c+1],d=e.data[l];xa(d,n[l],u,o),a=!0}if(i)for(let c of i){let l=n[c],u=e.data[c];xa(u,l,r,o),a=!0}return a}function $y(t,e){let n=lt(e,t),r=n[H];Vy(r,n);let o=n[ze];o!==null&&n[Ao]===null&&(n[Ao]=Cd(o,n[bt])),K(z.ComponentStart);try{qd(r,n,n[_e])}finally{K(z.ComponentEnd,n[_e])}}function Vy(t,e){for(let n=e.length;n<t.blueprint.length;n++)e.push(t.blueprint[n])}function qd(t,e,n){Fo(e);try{let r=t.viewQuery;r!==null&&Ea(1,r,n);let o=t.template;o!==null&&Bd(t,e,o,1,n),t.firstCreatePass&&(t.firstCreatePass=!1),e[Ro]?.finishViewCreation(t),t.staticContentQueries&&Sd(t,e),t.staticViewQueries&&Ea(2,t.viewQuery,n);let i=t.components;i!==null&&Fy(e,i)}catch(r){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),r}finally{e[O]&=-5,jo()}}function Fy(t,e){for(let n=0;n<e.length;n++)$y(t,e[n])}function Ir(t,e,n,r,o=!1){for(;n!==null;){if(n.type===128){n=o?n.projectionNext:n.next;continue}let i=e[n.index];i!==null&&r.push(ct(i)),wt(i)&&zd(i,r);let s=n.type;if(s&8)Ir(t,e,n.child,r);else if(s&32){let a=$d(n,e),c;for(;c=a();)r.push(c)}else if(s&16){let a=by(e,n);if(Array.isArray(a))r.push(...a);else{let c=Ht(e[We]);Ir(c[H],c,a,r,!0)}}n=o?n.projectionNext:n.next}return r}function zd(t,e){for(let n=at;n<t.length;n++){let r=t[n],o=r[H].firstChild;o!==null&&Ir(r[H],r,o,e)}t[Lo]!==t[ze]&&e.push(t[Lo])}function Wd(t){if(t[Po]!==null){for(let e of t[Po])e.impl.addSequence(e);t[Po].length=0}}var Gd=[];function jy(t){return t[Se]??Hy(t)}function Hy(t){let e=Gd.pop()??Object.create(By);return e.lView=t,e}function Uy(t){t.lView[Se]!==t&&(t.lView=null,Gd.push(t))}var By=M(v({},co),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{mr(t.lView)},consumerOnSignalRead(){this.lView[Se]=this}});function qy(t){let e=t[Se]??Object.create(zy);return e.lView=t,e}var zy=M(v({},co),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let e=Ht(t.lView);for(;e&&!Kd(e[H]);)e=Ht(e);e&&zs(e)},consumerOnSignalRead(){this.lView[Se]=this}});function Kd(t){return t.type!==2}function Qd(t){if(t[dr]===null)return;let e=!0;for(;e;){let n=!1;for(let r of t[dr])r.dirty&&(n=!0,r.zone===null||Zone.current===r.zone?r.run():r.zone.run(()=>r.run()));e=n&&!!(t[O]&8192)}}var Wy=100;function Zd(t,e=0){let r=t[st].rendererFactory,o=!1;o||r.begin?.();try{Gy(t,e)}finally{o||r.end?.()}}function Gy(t,e){let n=Zs();try{Ys(!0),Sa(t,e);let r=0;for(;hr(t);){if(r===Wy)throw new A(103,!1);r++,Sa(t,1)}}finally{Ys(n)}}function Ky(t,e,n,r){if(Wt(e))return;let o=e[O],i=!1,s=!1;Fo(e);let a=!0,c=null,l=null;i||(Kd(t)?(l=jy(e),c=Qi(l)):ao()===null?(a=!1,l=qy(e),c=Qi(l)):e[Se]&&(lo(e[Se]),e[Se]=null));try{qs(e),gu(t.bindingStartIndex),n!==null&&Bd(t,e,n,2,r);let u=(o&3)===3;if(!i)if(u){let f=t.preOrderCheckHooks;f!==null&&Uo(e,f,null)}else{let f=t.preOrderHooks;f!==null&&Bo(e,f,0,null),da(e,0)}if(s||Qy(e),Qd(e),Yd(e,0),t.contentQueries!==null&&Sd(t,e),!i)if(u){let f=t.contentCheckHooks;f!==null&&Uo(e,f)}else{let f=t.contentHooks;f!==null&&Bo(e,f,1),da(e,1)}Yy(t,e);let d=t.components;d!==null&&Xd(e,d,0);let p=t.viewQuery;if(p!==null&&Ea(2,p,r),!i)if(u){let f=t.viewCheckHooks;f!==null&&Uo(e,f)}else{let f=t.viewHooks;f!==null&&Bo(e,f,2),da(e,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),e[Oo]){for(let f of e[Oo])f();e[Oo]=null}i||(Wd(e),e[O]&=-73)}catch(u){throw i||mr(e),u}finally{l!==null&&(tl(l,c),a&&Uy(l)),jo()}}function Yd(t,e){for(let n=Ed(t);n!==null;n=wd(n))for(let r=at;r<n.length;r++){let o=n[r];Jd(o,e)}}function Qy(t){for(let e=Ed(t);e!==null;e=wd(e)){if(!(e[O]&2))continue;let n=e[fr];for(let r=0;r<n.length;r++){let o=n[r];zs(o)}}}function Zy(t,e,n){K(z.ComponentStart);let r=lt(e,t);try{Jd(r,n)}finally{K(z.ComponentEnd,r[_e])}}function Jd(t,e){$o(t)&&Sa(t,e)}function Sa(t,e){let r=t[H],o=t[O],i=t[Se],s=!!(e===0&&o&16);if(s||=!!(o&64&&e===0),s||=!!(o&1024),s||=!!(i?.dirty&&Zi(i)),s||=!1,i&&(i.dirty=!1),t[O]&=-9217,s)Ky(r,t,r.template,t[_e]);else if(o&8192){let a=L(null);try{Qd(t),Yd(t,1);let c=r.components;c!==null&&Xd(t,c,1),Wd(t)}finally{L(a)}}}function Xd(t,e,n){for(let r=0;r<e.length;r++)Zy(t,e[r],n)}function Yy(t,e){let n=t.hostBindingOpCodes;if(n!==null)try{for(let r=0;r<n.length;r++){let o=n[r];if(o<0)Dt(~o);else{let i=o,s=n[++r],a=n[++r];bu(s,i);let c=e[i];K(z.HostBindingsUpdateStart,c);try{a(2,c)}finally{K(z.HostBindingsUpdateEnd,c)}}}}finally{Dt(-1)}}function Ba(t,e){let n=Zs()?64:1088;for(t[st].changeDetectionScheduler?.notify(e);t;){t[O]|=n;let r=Ht(t);if(Nn(t)&&!r)return t;t=r}return null}function Jy(t,e){if(t.length<=at)return;let n=at+e,r=t[n];if(r){let o=r[ur];o!==null&&o!==t&&ja(o,r),e>0&&(t[n-1][ot]=r[ot]);let i=Rs(t,at+e);cy(r[H],r);let s=i[Ro];s!==null&&s.detachView(i[H]),r[Ce]=null,r[ot]=null,r[O]&=-129}return r}function Xy(t,e){let n=t[fr],r=e[Ce];if(Et(r))t[O]|=2;else{let o=r[Ce][We];e[We]!==o&&(t[O]|=2)}n===null?t[fr]=[e]:n.push(e)}var Go=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let e=this._lView,n=e[H];return Ir(n,e,n.firstChild,[])}constructor(e,n){this._lView=e,this._cdRefInjectingView=n}get context(){return this._lView[_e]}set context(e){this._lView[_e]=e}get destroyed(){return Wt(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Ce];if(wt(e)){let n=e[nu],r=n?n.indexOf(this):-1;r>-1&&(Jy(e,r),Rs(n,r))}this._attachedToViewContainer=!1}uy(this._lView[H],this._lView)}onDestroy(e){Gs(this._lView,e)}markForCheck(){Ba(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[O]&=-129}reattach(){Ws(this._lView),this._lView[O]|=128}detectChanges(){this._lView[O]|=1024,Zd(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new A(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=Nn(this._lView),n=this._lView[ur];n!==null&&!e&&ja(n,this._lView),Hd(this._lView[H],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new A(902,!1);this._appRef=e;let n=Nn(this._lView),r=this._lView[ur];r!==null&&!n&&Xy(r,this._lView),Ws(this._lView)}};function qa(t,e,n,r,o){let i=t.data[e];if(i===null)i=ev(t,e,n,r,o),vu()&&(i.flags|=32);else if(i.type&64){i.type=n,i.value=r,i.attrs=o;let s=hu();i.injectorIndex=s===null?-1:s.injectorIndex}return gr(i,!0),i}function ev(t,e,n,r,o){let i=Ks(),s=Qs(),a=s?i:i&&i.parent,c=t.data[e]=nv(t,a,n,e,r,o);return tv(t,c,i,s),c}function tv(t,e,n,r){t.firstChild===null&&(t.firstChild=e),n!==null&&(r?n.child==null&&e.parent!==null&&(n.child=e):n.next===null&&(n.next=e,e.prev=n))}function nv(t,e,n,r,o,i){let s=e?e.injectorIndex:-1,a=0;return du()&&(a|=128),{type:n,index:r,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:o,namespace:na(),attrs:i,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var ef=class{},ri=class{},Ta=class{resolveComponentFactory(e){throw new A(917,!1)}},oi=class{static NULL=new Ta},Zt=class{};var tf=(()=>{class t{static \u0275prov=ee({token:t,providedIn:"root",factory:()=>null})}return t})();var qo={},Ma=class{injector;parentInjector;constructor(e,n){this.injector=e,this.parentInjector=n}get(e,n,r){let o=this.injector.get(e,qo,r);return o!==qo||n===qo?o:this.parentInjector.get(e,n,r)}};function Ko(t,e,n){let r=n?t.styles:null,o=n?t.classes:null,i=0;if(e!==null)for(let s=0;s<e.length;s++){let a=e[s];if(typeof a=="number")i=a;else if(i==1)o=Ds(o,a);else if(i==2){let c=a,l=e[++s];r=Ds(r,c+": "+l+";")}}n?t.styles=r:t.stylesWithoutHost=r,n?t.classes=o:t.classesWithoutHost=o}function nf(t,e=0){let n=Te();if(n===null)return B(t,e);let r=Gt();return md(r,n,xe(t),e)}function rv(t,e,n,r,o){let i=r===null?null:{"":-1},s=o(t,n);if(s!==null){let a=s,c=null,l=null;for(let u of s)if(u.resolveHostDirectives!==null){[a,c,l]=u.resolveHostDirectives(s);break}sv(t,e,n,a,i,c,l)}i!==null&&r!==null&&ov(n,r,i)}function ov(t,e,n){let r=t.localNames=[];for(let o=0;o<e.length;o+=2){let i=n[e[o+1]];if(i==null)throw new A(-301,!1);r.push(e[o],i)}}function iv(t,e,n){e.componentOffset=n,(t.components??=[]).push(e.index)}function sv(t,e,n,r,o,i,s){let a=r.length,c=null;for(let p=0;p<a;p++){let f=r[p];c===null&&Mn(f)&&(c=f,iv(t,n,p)),xg(ud(n,e),t,f.type)}fv(n,t.data.length,a),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let p=0;p<a;p++){let f=r[p];f.providersResolver&&f.providersResolver(f)}let l=!1,u=!1,d=Pd(t,e,a,null);a>0&&(n.directiveToIndex=new Map);for(let p=0;p<a;p++){let f=r[p];if(n.mergedAttrs=Pa(n.mergedAttrs,f.hostAttrs),cv(t,n,e,d,f),dv(d,f,o),s!==null&&s.has(f)){let[_,b]=s.get(f);n.directiveToIndex.set(f.type,[d,_+n.directiveStart,b+n.directiveStart])}else(i===null||!i.has(f))&&n.directiveToIndex.set(f.type,d);f.contentQueries!==null&&(n.flags|=4),(f.hostBindings!==null||f.hostAttrs!==null||f.hostVars!==0)&&(n.flags|=64);let h=f.type.prototype;!l&&(h.ngOnChanges||h.ngOnInit||h.ngDoCheck)&&((t.preOrderHooks??=[]).push(n.index),l=!0),!u&&(h.ngOnChanges||h.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(n.index),u=!0),d++}av(t,n,i)}function av(t,e,n){for(let r=e.directiveStart;r<e.directiveEnd;r++){let o=t.data[r];if(n===null||!n.has(o))Ku(0,e,o,r),Ku(1,e,o,r),Zu(e,r,!1);else{let i=n.get(o);Qu(0,e,i,r),Qu(1,e,i,r),Zu(e,r,!0)}}}function Ku(t,e,n,r){let o=t===0?n.inputs:n.outputs;for(let i in o)if(o.hasOwnProperty(i)){let s;t===0?s=e.inputs??={}:s=e.outputs??={},s[i]??=[],s[i].push(r),rf(e,i)}}function Qu(t,e,n,r){let o=t===0?n.inputs:n.outputs;for(let i in o)if(o.hasOwnProperty(i)){let s=o[i],a;t===0?a=e.hostDirectiveInputs??={}:a=e.hostDirectiveOutputs??={},a[s]??=[],a[s].push(r,i),rf(e,s)}}function rf(t,e){e==="class"?t.flags|=8:e==="style"&&(t.flags|=16)}function Zu(t,e,n){let{attrs:r,inputs:o,hostDirectiveInputs:i}=t;if(r===null||!n&&o===null||n&&i===null||Qg(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let s=null,a=0;for(;a<r.length;){let c=r[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!n&&o.hasOwnProperty(c)){let l=o[c];for(let u of l)if(u===e){s??=[],s.push(c,r[a+1]);break}}else if(n&&i.hasOwnProperty(c)){let l=i[c];for(let u=0;u<l.length;u+=2)if(l[u]===e){s??=[],s.push(l[u+1],r[a+1]);break}}a+=2}t.initialInputs??=[],t.initialInputs.push(s)}function cv(t,e,n,r,o){t.data[r]=o;let i=o.factory||(o.factory=_n(o.type,!0)),s=new Er(i,Mn(o),nf,null);t.blueprint[r]=s,n[r]=s,lv(t,e,r,Pd(t,n,o.hostVars,xt),o)}function lv(t,e,n,r,o){let i=o.hostBindings;if(i){let s=t.hostBindingOpCodes;s===null&&(s=t.hostBindingOpCodes=[]);let a=~e.index;uv(s)!=a&&s.push(a),s.push(n,r,i)}}function uv(t){let e=t.length;for(;e>0;){let n=t[--e];if(typeof n=="number"&&n<0)return n}return 0}function dv(t,e,n){if(n){if(e.exportAs)for(let r=0;r<e.exportAs.length;r++)n[e.exportAs[r]]=t;Mn(e)&&(n[""]=t)}}function fv(t,e,n){t.flags|=1,t.directiveStart=e,t.directiveEnd=e+n,t.providerIndexes=e}function pv(t,e,n,r,o,i,s,a){let c=e[H],l=c.consts,u=pr(l,s),d=qa(c,t,n,r,u);return i&&rv(c,e,d,pr(l,a),o),d.mergedAttrs=Pa(d.mergedAttrs,d.attrs),d.attrs!==null&&Ko(d,d.attrs,!1),d.mergedAttrs!==null&&Ko(d,d.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,d),d}function hv(t,e){gg(t,e),js(e)&&t.queries.elementEnd(e)}function mv(t,e,n,r,o,i){let s=e.consts,a=pr(s,o),c=qa(e,t,n,r,a);if(c.mergedAttrs=Pa(c.mergedAttrs,c.attrs),i!=null){let l=pr(s,i);c.localNames=[];for(let u=0;u<l.length;u+=2)c.localNames.push(l[u],-1)}return c.attrs!==null&&Ko(c,c.attrs,!1),c.mergedAttrs!==null&&Ko(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function za(t,e,n){if(n===xt)return!1;let r=t[e];return Object.is(r,n)?!1:(t[e]=n,!0)}function gv(t,e,n){return function r(o){let i=r.__ngNativeEl__;i!==void 0&&Vg(o,i);let s=Tn(t)?lt(t.index,e):e;Ba(s,5);let a=e[_e],c=Yu(e,a,n,o),l=r.__ngNextListenerFn__;for(;l;)c=Yu(e,a,l,o)&&c,l=l.__ngNextListenerFn__;return c}}function Yu(t,e,n,r){let o=L(null);try{return K(z.OutputStart,e,n),n(r)!==!1}catch(i){return Py(t,i),!1}finally{K(z.OutputEnd,e,n),L(o)}}function yv(t,e,n,r,o,i,s,a){let c=Hs(t),l=!1,u=null;if(!r&&c&&(u=bv(e,n,i,t.index)),u!==null){let d=u.__ngLastListenerFn__||u;d.__ngNextListenerFn__=s,u.__ngLastListenerFn__=s,l=!0}else{let d=It(t,n),p=r?r(d):d;jg(n,p,i,a),r||(a.__ngNativeEl__=d);let f=o.listen(p,i,a);if(!vv(i)){let h=r?_=>r(ct(_[t.index])):t.index;_v(h,e,n,i,a,f,!1)}}return l}function vv(t){return t.startsWith("animation")||t.startsWith("transition")}function bv(t,e,n,r){let o=t.cleanup;if(o!=null)for(let i=0;i<o.length-1;i+=2){let s=o[i];if(s===n&&o[i+1]===r){let a=e[Dn],c=o[i+2];return a&&a.length>c?a[c]:null}typeof s=="string"&&(i+=2)}return null}function _v(t,e,n,r,o,i,s){let a=e.firstCreatePass?au(e):null,c=su(n),l=c.length;c.push(o,i),a&&a.push(r,t,l,(l+1)*(s?-1:1))}var Na=Symbol("BINDING");function Ev(t){return t.debugInfo?.className||t.type.name||null}var ka=class extends oi{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let n=ar(e);return new Qo(n,this.ngModule)}};function wv(t){return Object.keys(t).map(e=>{let[n,r,o]=t[e],i={propName:n,templateName:e,isSignal:(r&ni.SignalBased)!==0};return o&&(i.transform=o),i})}function Iv(t){return Object.keys(t).map(e=>({propName:t[e],templateName:e}))}function Dv(t,e,n){let r=e instanceof Oe?e:e?.injector;return r&&t.getStandaloneInjector!==null&&(r=t.getStandaloneInjector(r)||r),r?new Ma(n,r):n}function xv(t){let e=t.get(Zt,null);if(e===null)throw new A(407,!1);let n=t.get(tf,null),r=t.get(En,null),o=t.get(Vn,null,{optional:!0});return{rendererFactory:e,sanitizer:n,changeDetectionScheduler:r,ngReflect:!1,tracingService:o}}function Cv(t,e){let n=of(t);return Md(e,n,n==="svg"?ru:n==="math"?ou:null)}function Sv(t){if(t?.toLowerCase()==="script")throw new A(905,!1)}function of(t){return(t.selectors[0][0]||"div").toLowerCase()}var Qo=class extends ri{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=wv(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=Iv(this.componentDef.outputs),this.cachedOutputs}constructor(e,n){super(),this.componentDef=e,this.ngModule=n,this.componentType=e.type,this.selector=Yg(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!n}create(e,n,r,o,i,s){K(z.DynamicComponentStart);let a=L(null);try{let c=this.componentDef,l=Dv(c,o||this.ngModule,e),u=xv(l),d=u.tracingService;return d&&d.componentCreate?d.componentCreate(Ev(c),()=>this.createComponentRef(u,l,n,r,i,s)):this.createComponentRef(u,l,n,r,i,s)}finally{L(a)}}createComponentRef(e,n,r,o,i,s){let a=this.componentDef,c=Tv(o,a,s,i),l=e.rendererFactory.createRenderer(null,a),u=o?xy(l,o,a.encapsulation,n):Cv(a,l);Sv(u?.tagName);let d=s?.some(Ju)||i?.some(h=>typeof h!="function"&&h.bindings.some(Ju)),p=Rd(null,c,null,512|Od(a),null,null,e,l,n,null,Cd(u,n,!0));p[Pe]=u,Fo(p);let f=null;try{let h=pv(Pe,p,2,"#host",()=>c.directiveRegistry,!0,0);kd(l,u,h),wr(u,p),Iy(c,p,h),Ug(c,h,p),hv(c,h),r!==void 0&&Nv(h,this.ngContentSelectors,r),f=lt(h.index,p),p[_e]=f[_e],qd(c,p,null)}catch(h){throw f!==null&&_a(f),_a(p),h}finally{K(z.DynamicComponentEnd),jo()}return new Zo(this.componentType,p,!!d)}};function Tv(t,e,n,r){let o=t?["ng-version","21.2.18"]:Jg(e.selectors[0]),i=null,s=null,a=0;if(n)for(let u of n)a+=u[Na].requiredVars,u.create&&(u.targetIdx=0,(i??=[]).push(u)),u.update&&(u.targetIdx=0,(s??=[]).push(u));if(r)for(let u=0;u<r.length;u++){let d=r[u];if(typeof d!="function")for(let p of d.bindings){a+=p[Na].requiredVars;let f=u+1;p.create&&(p.targetIdx=f,(i??=[]).push(p)),p.update&&(p.targetIdx=f,(s??=[]).push(p))}}let c=[e];if(r)for(let u of r){let d=typeof u=="function"?u:u.type,p=Ms(d);c.push(p)}return Ad(0,null,Mv(i,s),1,a,c,null,null,null,[o],null)}function Mv(t,e){return!t&&!e?null:n=>{if(n&1&&t)for(let r of t)r.create();if(n&2&&e)for(let r of e)r.update()}}function Ju(t){let e=t[Na].kind;return e==="input"||e==="twoWay"}var Zo=class extends ef{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,n,r){super(),this._rootLView=n,this._hasInputBindings=r,this._tNode=Bs(n[H],Pe),this.location=vd(this._tNode,n),this.instance=lt(this._tNode.index,n)[_e],this.hostView=this.changeDetectorRef=new Go(n,void 0),this.componentType=e}setInput(e,n){this._hasInputBindings;let r=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),n))return;let o=this._rootLView,i=Ly(r,o[H],o,e,n);this.previousInputValues.set(e,n);let s=lt(r.index,o);Ba(s,1)}get injector(){return new Wo(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function Nv(t,e,n){let r=t.projection=[];for(let o=0;o<e.length;o++){let i=n[o];r.push(i!=null&&i.length?Array.from(i):null)}}var Yo=class{};var Dr=class extends Yo{injector;componentFactoryResolver=new ka(this);instance=null;constructor(e){super();let n=new jt([...e.providers,{provide:Yo,useValue:this},{provide:oi,useValue:this.componentFactoryResolver}],e.parent||lr(),e.debugName,new Set(["environment"]));this.injector=n,e.runEnvironmentInitializers&&n.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function sf(t,e,n=null){return new Dr({providers:t,parent:e,debugName:n,runEnvironmentInitializers:!0}).injector}var kv=(()=>{class t{_injector;cachedInjectors=new Map;constructor(n){this._injector=n}getOrCreateStandaloneInjector(n){if(!n.standalone)return null;if(!this.cachedInjectors.has(n)){let r=Ls(!1,n.type),o=r.length>0?sf([r],this._injector,""):null;this.cachedInjectors.set(n,o)}return this.cachedInjectors.get(n)}ngOnDestroy(){try{for(let n of this.cachedInjectors.values())n!==null&&n.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=ee({token:t,providedIn:"environment",factory:()=>new t(B(Oe))})}return t})();function Wa(t){return rd(()=>{let e=Pv(t),n=M(v({},e),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===La.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&t.dependencies||null,getStandaloneInjector:e.standalone?o=>o.get(kv).getOrCreateStandaloneInjector(n):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||Le.Emulated,styles:t.styles||vt,_:null,schemas:t.schemas||null,tView:null,id:""});e.standalone&&Vd("NgStandalone"),Lv(n);let r=t.dependencies;return n.directiveDefs=Xu(r,Av),n.pipeDefs=Xu(r,Ul),n.id=$v(n),n})}function Av(t){return ar(t)||Ms(t)}function Rv(t,e){if(t==null)return Bt;let n={};for(let r in t)if(t.hasOwnProperty(r)){let o=t[r],i,s,a,c;Array.isArray(o)?(a=o[0],i=o[1],s=o[2]??i,c=o[3]||null):(i=o,s=o,a=ni.None,c=null),n[i]=[r,a,c],e[i]=s}return n}function Ov(t){if(t==null)return Bt;let e={};for(let n in t)t.hasOwnProperty(n)&&(e[t[n]]=n);return e}function Pv(t){let e={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:e,inputConfig:t.inputs||Bt,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||vt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:Rv(t.inputs,e),outputs:Ov(t.outputs),debugInfo:null}}function Lv(t){t.features?.forEach(e=>e(t))}function Xu(t,e){return t?()=>{let n=typeof t=="function"?t():t,r=[];for(let o of n){let i=e(o);i!==null&&r.push(i)}return r}:null}function $v(t){let e=0,n=typeof t.consts=="function"?"":t.consts,r=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,n,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let i of r.join("|"))e=Math.imul(31,e)+i.charCodeAt(0)<<0;return e+=2147483648,"c"+e}var Ga=new j("");function Ka(t){return!!t&&typeof t.then=="function"}function af(t){return!!t&&typeof t.subscribe=="function"}var Qa=new j("");function Za(t){return qt([{provide:Qa,multi:!0,useValue:t}])}var Ya=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((n,r)=>{this.resolve=n,this.reject=r});appInits=R(Qa,{optional:!0})??[];injector=R(nt);constructor(){}runInitializers(){if(this.initialized)return;let n=[];for(let o of this.appInits){let i=ko(this.injector,o);if(Ka(i))n.push(i);else if(af(i)){let s=new Promise((a,c)=>{i.subscribe({complete:a,error:c})});n.push(s)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),n.length===0&&r(),this.initialized=!0}static \u0275fac=function(r){return new(r||t)};static \u0275prov=ee({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),cf=new j("");function lf(){Ji(()=>{let t="";throw new A(600,t)})}function uf(t){return t.isBoundToModule}var Vv=10;var Jt=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=R(Qt);afterRenderManager=R(Fd);zonelessEnabled=R(vr);rootEffectScheduler=R(ua);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new ke;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=R(An);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(Be(n=>!n))}constructor(){R(Vn,{optional:!0})}whenStable(){let n;return new Promise(r=>{n=this.isStable.subscribe({next:o=>{o&&r()}})}).finally(()=>{n.unsubscribe()})}_injector=R(Oe);_rendererFactory=null;get injector(){return this._injector}bootstrap(n,r){return this.bootstrapImpl(n,r)}bootstrapImpl(n,r,o=nt.NULL){return this._injector.get(be).run(()=>{K(z.BootstrapComponentStart);let s=n instanceof ri;if(!this._injector.get(Ya).done){let h="";throw new A(405,h)}let c;s?c=n:c=this._injector.get(oi).resolveComponentFactory(n),this.componentTypes.push(c.componentType);let l=uf(c)?void 0:this._injector.get(Yo),u=r||c.selector,d=c.create(o,[],u,l),p=d.location.nativeElement,f=d.injector.get(Ga,null);return f?.registerApplication(p),d.onDestroy(()=>{this.detachView(d.hostView),_r(this.components,d),f?.unregisterApplication(p)}),this._loadComponent(d),K(z.BootstrapComponentEnd,d),d})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){K(z.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Fa.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw K(z.ChangeDetectionEnd),new A(101,!1);let n=L(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,L(n),this.afterTick.next(),K(z.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Zt,null,{optional:!0}));let n=0;for(;this.dirtyFlags!==0&&n++<Vv;){K(z.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{K(z.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let n=!1;if(this.dirtyFlags&7){let r=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:o}of this.allViews){if(!r&&!hr(o))continue;let i=r&&!this.zonelessEnabled?0:1;Zd(o,i),n=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}n||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:n})=>hr(n))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(n){let r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){let r=n;_r(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView);try{this.tick()}catch(o){this.internalErrorHandler(o)}this.components.push(n),this._injector.get(cf,[]).forEach(o=>o(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>_r(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new A(406,!1);let n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(r){return new(r||t)};static \u0275prov=ee({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function _r(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function ye(t,e,n,r){let o=Te(),i=o[H],s=t+Pe,a=i.firstCreatePass?mv(s,i,2,e,n,r):i.data[s];return Ry(a,o,t,e,Fv),r!=null&&Dy(o,a),ye}function Ee(){let t=Gt(),e=Oy(t);return fu(e)&&pu(),uu(),Ee}function ii(t,e,n,r){return ye(t,e,n,r),Ee(),ii}var Fv=(t,e,n,r,o)=>(oa(!0),Md(e[ge],r,na()));function si(t,e,n){let r=Te(),o=Js();if(za(r,o,e)){let i=kn(),s=xu();Ty(s,r,t,e,r[ge],n)}return si}var Tr="en-US";var jv=Tr;function df(t){typeof t=="string"&&(jv=t.toLowerCase().replace(/_/g,"-"))}function Mr(t,e,n){let r=Te(),o=kn(),i=Gt();return(i.type&3||n)&&yv(i,o,r,n,r[ge],t,e,gv(i,r,e)),Mr}function Ho(t,e){return t<<17|e<<2}function Yt(t){return t>>17&32767}function Hv(t){return(t&2)==2}function Uv(t,e){return t&131071|e<<17}function Aa(t){return t|2}function $n(t){return(t&131068)>>2}function ha(t,e){return t&-131069|e<<2}function Bv(t){return(t&1)===1}function Ra(t){return t|1}function qv(t,e,n,r,o,i){let s=i?e.classBindings:e.styleBindings,a=Yt(s),c=$n(s);t[r]=n;let l=!1,u;if(Array.isArray(n)){let d=n;u=d[1],(u===null||wn(d,u)>0)&&(l=!0)}else u=n;if(o)if(c!==0){let p=Yt(t[a+1]);t[r+1]=Ho(p,a),p!==0&&(t[p+1]=ha(t[p+1],r)),t[a+1]=Uv(t[a+1],r)}else t[r+1]=Ho(a,0),a!==0&&(t[a+1]=ha(t[a+1],r)),a=r;else t[r+1]=Ho(c,0),a===0?a=r:t[c+1]=ha(t[c+1],r),c=r;l&&(t[r+1]=Aa(t[r+1])),ed(t,u,r,!0),ed(t,u,r,!1),zv(e,u,t,r,i),s=Ho(a,c),i?e.classBindings=s:e.styleBindings=s}function zv(t,e,n,r,o){let i=o?t.residualClasses:t.residualStyles;i!=null&&typeof e=="string"&&wn(i,e)>=0&&(n[r+1]=Ra(n[r+1]))}function ed(t,e,n,r){let o=t[n+1],i=e===null,s=r?Yt(o):$n(o),a=!1;for(;s!==0&&(a===!1||i);){let c=t[s],l=t[s+1];Wv(c,e)&&(a=!0,t[s+1]=r?Ra(l):Aa(l)),s=r?Yt(l):$n(l)}a&&(t[n+1]=r?Aa(o):Ra(o))}function Wv(t,e){return t===null||e==null||(Array.isArray(t)?t[1]:t)===e?!0:Array.isArray(t)&&typeof e=="string"?wn(t,e)>=0:!1}function ai(t,e){return Gv(t,e,null,!0),ai}function Gv(t,e,n,r){let o=Te(),i=kn(),s=yu(2);if(i.firstUpdatePass&&Qv(i,t,s,r),e!==xt&&za(o,s,e)){let a=i.data[Kt()];eb(i,a,o,o[ge],t,o[s+1]=tb(e,n),r,s)}}function Kv(t,e){return e>=t.expandoStartIndex}function Qv(t,e,n,r){let o=t.data;if(o[n+1]===null){let i=o[Kt()],s=Kv(t,n);nb(i,r)&&e===null&&!s&&(e=!1),e=Zv(o,i,e,r),qv(o,i,e,n,s,r)}}function Zv(t,e,n,r){let o=Eu(t),i=r?e.residualClasses:e.residualStyles;if(o===null)(r?e.classBindings:e.styleBindings)===0&&(n=ma(null,t,e,n,r),n=xr(n,e.attrs,r),i=null);else{let s=e.directiveStylingLast;if(s===-1||t[s]!==o)if(n=ma(o,t,e,n,r),i===null){let c=Yv(t,e,r);c!==void 0&&Array.isArray(c)&&(c=ma(null,t,e,c[1],r),c=xr(c,e.attrs,r),Jv(t,e,r,c))}else i=Xv(t,e,r)}return i!==void 0&&(r?e.residualClasses=i:e.residualStyles=i),n}function Yv(t,e,n){let r=n?e.classBindings:e.styleBindings;if($n(r)!==0)return t[Yt(r)]}function Jv(t,e,n,r){let o=n?e.classBindings:e.styleBindings;t[Yt(o)]=r}function Xv(t,e,n){let r,o=e.directiveEnd;for(let i=1+e.directiveStylingLast;i<o;i++){let s=t[i].hostAttrs;r=xr(r,s,n)}return xr(r,e.attrs,n)}function ma(t,e,n,r,o){let i=null,s=n.directiveEnd,a=n.directiveStylingLast;for(a===-1?a=n.directiveStart:a++;a<s&&(i=e[a],r=xr(r,i.hostAttrs,o),i!==t);)a++;return t!==null&&(n.directiveStylingLast=a),r}function xr(t,e,n){let r=n?1:2,o=-1;if(e!==null)for(let i=0;i<e.length;i++){let s=e[i];typeof s=="number"?o=s:o===r&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),Kl(t,s,n?!0:e[++i]))}return t===void 0?null:t}function eb(t,e,n,r,o,i,s,a){if(!(e.type&3))return;let c=t.data,l=c[a+1],u=Bv(l)?td(c,e,n,o,$n(l),s):void 0;if(!Jo(u)){Jo(i)||Hv(l)&&(i=td(c,null,n,o,a,s));let d=Us(Kt(),n);wy(r,s,d,o,i)}}function td(t,e,n,r,o,i){let s=e===null,a;for(;o>0;){let c=t[o],l=Array.isArray(c),u=l?c[1]:c,d=u===null,p=n[o+1];p===xt&&(p=d?vt:void 0);let f=d?No(p,r):u===r?p:void 0;if(l&&!Jo(f)&&(f=No(c,r)),Jo(f)&&(a=f,s))return a;let h=t[o+1];o=s?Yt(h):$n(h)}if(e!==null){let c=i?e.residualClasses:e.residualStyles;c!=null&&(a=No(c,r))}return a}function Jo(t){return t!==void 0}function tb(t,e){return t==null||t===""||(typeof e=="string"?t=t+e:typeof t=="object"&&(t=Do(Td(t)))),t}function nb(t,e){return(t.flags&(e?8:16))!==0}function $e(t,e=""){let n=Te(),r=kn(),o=t+Pe,i=r.firstCreatePass?qa(r,o,1,e,null):r.data[o],s=rb(r,n,i,e);n[o]=s,ra()&&Ud(r,n,s,i),gr(i,!1)}var rb=(t,e,n,r)=>(oa(!0),Bg(e[ge],r));function ob(t,e,n,r=""){return za(t,Js(),n)?e+Bl(n)+r:xt}function ci(t,e,n){let r=Te(),o=ob(r,t,e,n);return o!==xt&&ib(r,Kt(),o),ci}function ib(t,e,n){let r=Us(e,t);qg(t[ge],r,n)}var ff=(()=>{class t{applicationErrorHandler=R(Qt);appRef=R(Jt);taskService=R(An);ngZone=R(be);zonelessEnabled=R(vr);tracing=R(Vn,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new me;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(or):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(R(la,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let n=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(n);return}this.switchToMicrotaskScheduler(),this.taskService.remove(n)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let n=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(n)})})}notify(n){if(!this.zonelessEnabled&&n===5)return;switch(n){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let r=this.useMicrotaskScheduler?Nu:ia;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(or+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let n=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(r){this.applicationErrorHandler(r)}finally{this.taskService.remove(n),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let n=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(n)}}static \u0275fac=function(r){return new(r||t)};static \u0275prov=ee({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function pf(){return[{provide:En,useExisting:ff},{provide:be,useClass:ir},{provide:vr,useValue:!0}]}function sb(){return typeof $localize<"u"&&$localize.locale||Tr}var Ja=new j("",{factory:()=>R(Ja,{optional:!0,skipSelf:!0})||sb()});var Xa=new j(""),fb=new j("");function Nr(t){return!t.moduleRef}function pb(t){let e=Nr(t)?t.r3Injector:t.moduleRef.injector,n=e.get(be);return n.run(()=>{Nr(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let r=e.get(Qt),o;if(n.runOutsideAngular(()=>{o=n.onError.subscribe({next:r})}),Nr(t)){let i=()=>e.destroy(),s=t.platformInjector.get(Xa);s.add(i),e.onDestroy(()=>{o.unsubscribe(),s.delete(i)})}else{let i=()=>t.moduleRef.destroy(),s=t.platformInjector.get(Xa);s.add(i),t.moduleRef.onDestroy(()=>{_r(t.allPlatformModules,t.moduleRef),o.unsubscribe(),s.delete(i)})}return mb(r,n,()=>{let i=e.get(An),s=i.add(),a=e.get(Ya);return a.runInitializers(),a.donePromise.then(()=>{let c=e.get(Ja,Tr);if(df(c||Tr),!e.get(fb,!0))return Nr(t)?e.get(Jt):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(Nr(t)){let u=e.get(Jt);return t.rootComponent!==void 0&&u.bootstrap(t.rootComponent),u}else return hb?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{i.remove(s)})})})}var hb;function mb(t,e,n){try{let r=n();return Ka(r)?r.catch(o=>{throw e.runOutsideAngular(()=>t(o)),o}):r}catch(r){throw e.runOutsideAngular(()=>t(r)),r}}var li=null;function gb(t=[],e){return nt.create({name:e,providers:[{provide:cr,useValue:"platform"},{provide:Xa,useValue:new Set([()=>li=null])},...t]})}function yb(t=[]){if(li)return li;let e=gb(t);return li=e,lf(),vb(e),e}function vb(t){let e=t.get(ei,null);ko(t,()=>{e?.forEach(n=>n())})}function mf(){return!1}var bb=1e4;var $0=bb-1e3;function gf(t){let{rootComponent:e,appProviders:n,platformProviders:r,platformRef:o}=t;K(z.BootstrapApplicationStart);try{let i=o?.injector??yb(r),s=[pf(),Au,...n||[]],a=new Dr({providers:s,parent:i,debugName:"",runEnvironmentInitializers:!1});return pb({r3Injector:a.injector,platformInjector:i,rootComponent:e})}catch(i){return Promise.reject(i)}finally{K(z.BootstrapApplicationEnd)}}var yf=null;function Rr(){return yf}function ec(t){yf??=t}var Ar=class{};function tc(t,e){e=encodeURIComponent(e);for(let n of t.split(";")){let r=n.indexOf("="),[o,i]=r==-1?[n,""]:[n.slice(0,r),n.slice(r+1)];if(o.trim()===e)return decodeURIComponent(i)}return null}var Or=class{};var vf="browser";var Pr=class{_doc;constructor(e){this._doc=e}manager},ui=(()=>{class t extends Pr{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,o,i){return n.addEventListener(r,o,i),()=>this.removeEventListener(n,r,o,i)}removeEventListener(n,r,o,i){return n.removeEventListener(r,o,i)}static \u0275fac=function(r){return new(r||t)(B(Ae))};static \u0275prov=ee({token:t,factory:t.\u0275fac})}return t})(),pi=new j(""),ic=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(n,r){this._zone=r,n.forEach(s=>{s.manager=this});let o=n.filter(s=>!(s instanceof ui));this._plugins=o.slice().reverse();let i=n.find(s=>s instanceof ui);i&&this._plugins.push(i)}addEventListener(n,r,o,i){return this._findPluginFor(r).addEventListener(n,r,o,i)}getZone(){return this._zone}_findPluginFor(n){let r=this._eventNameToPlugin.get(n);if(r)return r;if(r=this._plugins.find(i=>i.supports(n)),!r)throw new A(5101,!1);return this._eventNameToPlugin.set(n,r),r}static \u0275fac=function(r){return new(r||t)(B(pi),B(be))};static \u0275prov=ee({token:t,factory:t.\u0275fac})}return t})(),nc="ng-app-id";function bf(t){for(let e of t)e.remove()}function _f(t,e){let n=e.createElement("style");return n.textContent=t,n}function _b(t,e,n,r){let o=t.head?.querySelectorAll(`style[${nc}="${e}"],link[${nc}="${e}"]`);if(o)for(let i of o)i.removeAttribute(nc),i instanceof HTMLLinkElement?r.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&n.set(i.textContent,{usage:0,elements:[i]})}function oc(t,e){let n=e.createElement("link");return n.setAttribute("rel","stylesheet"),n.setAttribute("href",t),n}var sc=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(n,r,o,i={}){this.doc=n,this.appId=r,this.nonce=o,_b(n,r,this.inline,this.external),this.hosts.add(n.head)}addStyles(n,r){for(let o of n)this.addUsage(o,this.inline,_f);r?.forEach(o=>this.addUsage(o,this.external,oc))}removeStyles(n,r){for(let o of n)this.removeUsage(o,this.inline);r?.forEach(o=>this.removeUsage(o,this.external))}addUsage(n,r,o){let i=r.get(n);i?i.usage++:r.set(n,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,o(n,this.doc)))})}removeUsage(n,r){let o=r.get(n);o&&(o.usage--,o.usage<=0&&(bf(o.elements),r.delete(n)))}ngOnDestroy(){for(let[,{elements:n}]of[...this.inline,...this.external])bf(n);this.hosts.clear()}addHost(n){this.hosts.add(n);for(let[r,{elements:o}]of this.inline)o.push(this.addElement(n,_f(r,this.doc)));for(let[r,{elements:o}]of this.external)o.push(this.addElement(n,oc(r,this.doc)))}removeHost(n){this.hosts.delete(n)}addElement(n,r){return this.nonce&&r.setAttribute("nonce",this.nonce),n.appendChild(r)}static \u0275fac=function(r){return new(r||t)(B(Ae),B(Xo),B(ti,8),B(Cr))};static \u0275prov=ee({token:t,factory:t.\u0275fac})}return t})(),rc={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},ac=/%COMP%/g;var wf="%COMP%",Eb=`_nghost-${wf}`,wb=`_ngcontent-${wf}`,Ib=!0,Db=new j("",{factory:()=>Ib});function xb(t){return wb.replace(ac,t)}function Cb(t){return Eb.replace(ac,t)}function If(t,e){return e.map(n=>n.replace(ac,t))}var cc=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(n,r,o,i,s,a,c=null,l=null){this.eventManager=n,this.sharedStylesHost=r,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=s,this.ngZone=a,this.nonce=c,this.tracingService=l,this.defaultRenderer=new Lr(n,s,a,this.tracingService)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;let o=this.getOrCreateRenderer(n,r);return o instanceof fi?o.applyToHost(n):o instanceof $r&&o.applyStyles(),o}getOrCreateRenderer(n,r){let o=this.rendererByCompId,i=o.get(r.id);if(!i){let s=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.tracingService;switch(r.encapsulation){case Le.Emulated:i=new fi(c,l,r,this.appId,u,s,a,d);break;case Le.ShadowDom:return new di(c,n,r,s,a,this.nonce,d,l);case Le.ExperimentalIsolatedShadowDom:return new di(c,n,r,s,a,this.nonce,d);default:i=new $r(c,l,r,u,s,a,d);break}o.set(r.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(n){this.rendererByCompId.delete(n)}static \u0275fac=function(r){return new(r||t)(B(ic),B(sc),B(Xo),B(Db),B(Ae),B(be),B(ti),B(Vn,8))};static \u0275prov=ee({token:t,factory:t.\u0275fac})}return t})(),Lr=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,n,r,o){this.eventManager=e,this.doc=n,this.ngZone=r,this.tracingService=o}destroy(){}destroyNode=null;createElement(e,n){return n?this.doc.createElementNS(rc[n]||n,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,n){(Ef(e)?e.content:e).appendChild(n)}insertBefore(e,n,r){e&&(Ef(e)?e.content:e).insertBefore(n,r)}removeChild(e,n){n.remove()}selectRootElement(e,n){let r=typeof e=="string"?this.doc.querySelector(e):e;if(!r)throw new A(-5104,!1);return n||(r.textContent=""),r}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,n,r,o){if(o){n=o+":"+n;let i=rc[o];i?e.setAttributeNS(i,n,r):e.setAttribute(n,r)}else e.setAttribute(n,r)}removeAttribute(e,n,r){if(r){let o=rc[r];o?e.removeAttributeNS(o,n):e.removeAttribute(`${r}:${n}`)}else e.removeAttribute(n)}addClass(e,n){e.classList.add(n)}removeClass(e,n){e.classList.remove(n)}setStyle(e,n,r,o){o&(ut.DashCase|ut.Important)?e.style.setProperty(n,r,o&ut.Important?"important":""):e.style[n]=r}removeStyle(e,n,r){r&ut.DashCase?e.style.removeProperty(n):e.style[n]=""}setProperty(e,n,r){e!=null&&(e[n]=r)}setValue(e,n){e.nodeValue=n}listen(e,n,r,o){if(typeof e=="string"&&(e=Rr().getGlobalEventTarget(this.doc,e),!e))throw new A(5102,!1);let i=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(e,n,i)),this.eventManager.addEventListener(e,n,i,o)}decoratePreventDefault(e){return n=>{if(n==="__ngUnwrap__")return e;e(n)===!1&&n.preventDefault()}}};function Ef(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var di=class extends Lr{hostEl;sharedStylesHost;shadowRoot;constructor(e,n,r,o,i,s,a,c){super(e,o,i,a),this.hostEl=n,this.sharedStylesHost=c,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=r.styles;l=If(r.id,l);for(let d of l){let p=document.createElement("style");s&&p.setAttribute("nonce",s),p.textContent=d,this.shadowRoot.appendChild(p)}let u=r.getExternalStyles?.();if(u)for(let d of u){let p=oc(d,o);s&&p.setAttribute("nonce",s),this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,n){return super.appendChild(this.nodeOrShadowRoot(e),n)}insertBefore(e,n,r){return super.insertBefore(this.nodeOrShadowRoot(e),n,r)}removeChild(e,n){return super.removeChild(null,n)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},$r=class extends Lr{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,n,r,o,i,s,a,c){super(e,i,s,a),this.sharedStylesHost=n,this.removeStylesOnCompDestroy=o;let l=r.styles;this.styles=c?If(c,l):l,this.styleUrls=r.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Ln.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},fi=class extends $r{contentAttr;hostAttr;constructor(e,n,r,o,i,s,a,c){let l=o+"-"+r.id;super(e,n,r,i,s,a,c,l),this.contentAttr=xb(l),this.hostAttr=Cb(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,n){let r=super.createElement(e,n);return super.setAttribute(r,this.contentAttr,""),r}};var hi=class t extends Ar{supportsDOMEvents=!0;static makeCurrent(){ec(new t)}onAndCancel(e,n,r,o){return e.addEventListener(n,r,o),()=>{e.removeEventListener(n,r,o)}}dispatchEvent(e,n){e.dispatchEvent(n)}remove(e){e.remove()}createElement(e,n){return n=n||this.getDefaultDocument(),n.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,n){return n==="window"?window:n==="document"?e:n==="body"?e.body:null}getBaseHref(e){let n=Sb();return n==null?null:Tb(n)}resetBaseElement(){Vr=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return tc(document.cookie,e)}},Vr=null;function Sb(){return Vr=Vr||document.head.querySelector("base"),Vr?Vr.getAttribute("href"):null}function Tb(t){return new URL(t,document.baseURI).pathname}var Mb=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(r){return new(r||t)};static \u0275prov=ee({token:t,factory:t.\u0275fac})}return t})(),Df=["alt","control","meta","shift"],Nb={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},kb={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},xf=(()=>{class t extends Pr{constructor(n){super(n)}supports(n){return t.parseEventName(n)!=null}addEventListener(n,r,o,i){let s=t.parseEventName(r),a=t.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Rr().onAndCancel(n,s.domEventName,a,i))}static parseEventName(n){let r=n.toLowerCase().split("."),o=r.shift();if(r.length===0||!(o==="keydown"||o==="keyup"))return null;let i=t._normalizeKey(r.pop()),s="",a=r.indexOf("code");if(a>-1&&(r.splice(a,1),s="code."),Df.forEach(l=>{let u=r.indexOf(l);u>-1&&(r.splice(u,1),s+=l+".")}),s+=i,r.length!=0||i.length===0)return null;let c={};return c.domEventName=o,c.fullKey=s,c}static matchEventFullKeyCode(n,r){let o=Nb[n.key]||n.key,i="";return r.indexOf("code.")>-1&&(o=n.code,i="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),Df.forEach(s=>{if(s!==o){let a=kb[s];a(n)&&(i+=s+".")}}),i+=o,i===r)}static eventCallback(n,r,o){return i=>{t.matchEventFullKeyCode(i,n)&&o.runGuarded(()=>r(i))}}static _normalizeKey(n){return n==="esc"?"escape":n}static \u0275fac=function(r){return new(r||t)(B(Ae))};static \u0275prov=ee({token:t,factory:t.\u0275fac})}return t})();async function lc(t,e,n){let r=v({rootComponent:t},Ab(e,n));return gf(r)}function Ab(t,e){return{platformRef:e?.platformRef,appProviders:[...$b,...t?.providers??[]],platformProviders:Lb}}function Rb(){hi.makeCurrent()}function Ob(){return new rt}function Pb(){return $a(document),document}var Lb=[{provide:Cr,useValue:vf},{provide:ei,useValue:Rb,multi:!0},{provide:Ae,useFactory:Pb}];var $b=[{provide:cr,useValue:"root"},{provide:rt,useFactory:Ob},{provide:pi,useClass:ui,multi:!0},{provide:pi,useClass:xf,multi:!0},cc,sc,ic,{provide:Zt,useExisting:cc},{provide:Or,useClass:Mb},[]];var mi=globalThis,gi=mi.ShadowRoot&&(mi.ShadyCSS===void 0||mi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,uc=Symbol(),Cf=new WeakMap,Fr=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==uc)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o,n=this.t;if(gi&&e===void 0){let r=n!==void 0&&n.length===1;r&&(e=Cf.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Cf.set(n,e))}return e}toString(){return this.cssText}},Sf=t=>new Fr(typeof t=="string"?t:t+"",void 0,uc),U=(t,...e)=>{let n=t.length===1?t[0]:e.reduce((r,o,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1],t[0]);return new Fr(n,t,uc)},Tf=(t,e)=>{if(gi)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(let n of e){let r=document.createElement("style"),o=mi.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,t.appendChild(r)}},dc=gi?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(let r of e.cssRules)n+=r.cssText;return Sf(n)})(t):t;var{is:Vb,defineProperty:Fb,getOwnPropertyDescriptor:jb,getOwnPropertyNames:Hb,getOwnPropertySymbols:Ub,getPrototypeOf:Bb}=Object,yi=globalThis,Mf=yi.trustedTypes,qb=Mf?Mf.emptyScript:"",zb=yi.reactiveElementPolyfillSupport,jr=(t,e)=>t,Hr={toAttribute(t,e){switch(e){case Boolean:t=t?qb:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},vi=(t,e)=>!Vb(t,e),Nf={attribute:!0,type:String,converter:Hr,reflect:!1,useDefault:!1,hasChanged:vi};Symbol.metadata??=Symbol("metadata"),yi.litPropertyMetadata??=new WeakMap;var dt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=Nf){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){let r=Symbol(),o=this.getPropertyDescriptor(e,r,n);o!==void 0&&Fb(this.prototype,e,o)}}static getPropertyDescriptor(e,n,r){let{get:o,set:i}=jb(this.prototype,e)??{get(){return this[n]},set(s){this[n]=s}};return{get:o,set(s){let a=o?.call(this);i?.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Nf}static _$Ei(){if(this.hasOwnProperty(jr("elementProperties")))return;let e=Bb(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(jr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(jr("properties"))){let n=this.properties,r=[...Hb(n),...Ub(n)];for(let o of r)this.createProperty(o,n[o])}let e=this[Symbol.metadata];if(e!==null){let n=litPropertyMetadata.get(e);if(n!==void 0)for(let[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(let[n,r]of this.elementProperties){let o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let n=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let o of r)n.unshift(dc(o))}else e!==void 0&&n.push(dc(e));return n}static _$Eu(e,n){let r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,n=this.constructor.elementProperties;for(let r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Tf(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$ET(e,n){let r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){let i=(r.converter?.toAttribute!==void 0?r.converter:Hr).toAttribute(n,r.type);this._$Em=e,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,n){let r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let i=r.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Hr;this._$Em=o;let a=s.fromAttribute(n,i.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,n,r,o=!1,i){if(e!==void 0){let s=this.constructor;if(o===!1&&(i=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??vi)(i,n)||r.useDefault&&r.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,n,{useDefault:r,reflect:o,wrapped:i},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??n??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(n=void 0),this._$AL.set(e,n)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[o,i]of r){let{wrapped:s}=i,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let e=!1,n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(n)}willUpdate(e){}_$AE(e){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(e){}firstUpdated(e){}};dt.elementStyles=[],dt.shadowRootOptions={mode:"open"},dt[jr("elementProperties")]=new Map,dt[jr("finalized")]=new Map,zb?.({ReactiveElement:dt}),(yi.reactiveElementVersions??=[]).push("2.1.2");var pc=globalThis,kf=t=>t,bi=pc.trustedTypes,Af=bi?bi.createPolicy("lit-html",{createHTML:t=>t}):void 0,hc="$lit$",ft=`lit$${Math.random().toFixed(9).slice(2)}$`,mc="?"+ft,Wb=`<${mc}>`,tn=document,Br=()=>tn.createComment(""),qr=t=>t===null||typeof t!="object"&&typeof t!="function",gc=Array.isArray,Vf=t=>gc(t)||typeof t?.[Symbol.iterator]=="function",fc=`[ 	
\f\r]`,Ur=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Rf=/-->/g,Of=/>/g,Xt=RegExp(`>|${fc}(?:([^\\s"'>=/]+)(${fc}*=${fc}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Pf=/'/g,Lf=/"/g,Ff=/^(?:script|style|textarea|title)$/i,yc=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),w=yc(1),Ve=yc(2),TA=yc(3),we=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),$f=new WeakMap,en=tn.createTreeWalker(tn,129);function jf(t,e){if(!gc(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Af!==void 0?Af.createHTML(e):e}var Hf=(t,e)=>{let n=t.length-1,r=[],o,i=e===2?"<svg>":e===3?"<math>":"",s=Ur;for(let a=0;a<n;a++){let c=t[a],l,u,d=-1,p=0;for(;p<c.length&&(s.lastIndex=p,u=s.exec(c),u!==null);)p=s.lastIndex,s===Ur?u[1]==="!--"?s=Rf:u[1]!==void 0?s=Of:u[2]!==void 0?(Ff.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=Xt):u[3]!==void 0&&(s=Xt):s===Xt?u[0]===">"?(s=o??Ur,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,l=u[1],s=u[3]===void 0?Xt:u[3]==='"'?Lf:Pf):s===Lf||s===Pf?s=Xt:s===Rf||s===Of?s=Ur:(s=Xt,o=void 0);let f=s===Xt&&t[a+1].startsWith("/>")?" ":"";i+=s===Ur?c+Wb:d>=0?(r.push(l),c.slice(0,d)+hc+c.slice(d)+ft+f):c+ft+(d===-2?a:f)}return[jf(t,i+(t[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},zr=class t{constructor({strings:e,_$litType$:n},r){let o;this.parts=[];let i=0,s=0,a=e.length-1,c=this.parts,[l,u]=Hf(e,n);if(this.el=t.createElement(l,r),en.currentNode=this.el.content,n===2||n===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=en.nextNode())!==null&&c.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let d of o.getAttributeNames())if(d.endsWith(hc)){let p=u[s++],f=o.getAttribute(d).split(ft),h=/([.?@])?(.*)/.exec(p);c.push({type:1,index:i,name:h[2],strings:f,ctor:h[1]==="."?Ei:h[1]==="?"?wi:h[1]==="@"?Ii:rn}),o.removeAttribute(d)}else d.startsWith(ft)&&(c.push({type:6,index:i}),o.removeAttribute(d));if(Ff.test(o.tagName)){let d=o.textContent.split(ft),p=d.length-1;if(p>0){o.textContent=bi?bi.emptyScript:"";for(let f=0;f<p;f++)o.append(d[f],Br()),en.nextNode(),c.push({type:2,index:++i});o.append(d[p],Br())}}}else if(o.nodeType===8)if(o.data===mc)c.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(ft,d+1))!==-1;)c.push({type:7,index:i}),d+=ft.length-1}i++}}static createElement(e,n){let r=tn.createElement("template");return r.innerHTML=e,r}};function nn(t,e,n=t,r){if(e===we)return e;let o=r!==void 0?n._$Co?.[r]:n._$Cl,i=qr(e)?void 0:e._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(t),o._$AT(t,n,r)),r!==void 0?(n._$Co??=[])[r]=o:n._$Cl=o),o!==void 0&&(e=nn(t,o._$AS(t,e.values),o,r)),e}var _i=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:n},parts:r}=this._$AD,o=(e?.creationScope??tn).importNode(n,!0);en.currentNode=o;let i=en.nextNode(),s=0,a=0,c=r[0];for(;c!==void 0;){if(s===c.index){let l;c.type===2?l=new Fn(i,i.nextSibling,this,e):c.type===1?l=new c.ctor(i,c.name,c.strings,this,e):c.type===6&&(l=new Di(i,this,e)),this._$AV.push(l),c=r[++a]}s!==c?.index&&(i=en.nextNode(),s++)}return en.currentNode=tn,o}p(e){let n=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},Fn=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,n,r,o){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=nn(this,e,n),qr(e)?e===Q||e==null||e===""?(this._$AH!==Q&&this._$AR(),this._$AH=Q):e!==this._$AH&&e!==we&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Vf(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Q&&qr(this._$AH)?this._$AA.nextSibling.data=e:this.T(tn.createTextNode(e)),this._$AH=e}$(e){let{values:n,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=zr.createElement(jf(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(n);else{let i=new _i(o,this),s=i.u(this.options);i.p(n),this.T(s),this._$AH=i}}_$AC(e){let n=$f.get(e.strings);return n===void 0&&$f.set(e.strings,n=new zr(e)),n}k(e){gc(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,o=0;for(let i of e)o===n.length?n.push(r=new t(this.O(Br()),this.O(Br()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);e!==this._$AB;){let r=kf(e).nextSibling;kf(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},rn=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,o,i){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Q}_$AI(e,n=this,r,o){let i=this.strings,s=!1;if(i===void 0)e=nn(this,e,n,0),s=!qr(e)||e!==this._$AH&&e!==we,s&&(this._$AH=e);else{let a=e,c,l;for(e=i[0],c=0;c<i.length-1;c++)l=nn(this,a[r+c],n,c),l===we&&(l=this._$AH[c]),s||=!qr(l)||l!==this._$AH[c],l===Q?e=Q:e!==Q&&(e+=(l??"")+i[c+1]),this._$AH[c]=l}s&&!o&&this.j(e)}j(e){e===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ei=class extends rn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Q?void 0:e}},wi=class extends rn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Q)}},Ii=class extends rn{constructor(e,n,r,o,i){super(e,n,r,o,i),this.type=5}_$AI(e,n=this){if((e=nn(this,e,n,0)??Q)===we)return;let r=this._$AH,o=e===Q&&r!==Q||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==Q&&(r===Q||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Di=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){nn(this,e)}},Uf={M:hc,P:ft,A:mc,C:1,L:Hf,R:_i,D:Vf,V:nn,I:Fn,H:rn,N:wi,U:Ii,B:Ei,F:Di},Gb=pc.litHtmlPolyfillSupport;Gb?.(zr,Fn),(pc.litHtmlVersions??=[]).push("3.3.3");var Bf=(t,e,n)=>{let r=n?.renderBefore??e,o=r._$litPart$;if(o===void 0){let i=n?.renderBefore??null;r._$litPart$=o=new Fn(e.insertBefore(Br(),i),i,void 0,n??{})}return o._$AI(t),o};var vc=globalThis,Ke=class extends dt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Bf(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return we}};Ke._$litElement$=!0,Ke.finalized=!0,vc.litElementHydrateSupport?.({LitElement:Ke});var Kb=vc.litElementPolyfillSupport;Kb?.({LitElement:Ke});(vc.litElementVersions??=[]).push("4.2.2");var Qb={attribute:!0,type:String,converter:Hr,reflect:!1,hasChanged:vi},Zb=(t=Qb,e,n)=>{let{kind:r,metadata:o}=n,i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),r==="setter"&&((t=Object.create(t)).wrapped=!0),i.set(n.name,t),r==="accessor"){let{name:s}=n;return{set(a){let c=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,c,t,!0,a)},init(a){return a!==void 0&&this.C(s,void 0,t,a),a}}}if(r==="setter"){let{name:s}=n;return function(a){let c=this[s];e.call(this,a),this.requestUpdate(s,c,t,!0,a)}}throw Error("Unsupported decorator location: "+r)};function g(t){return(e,n)=>typeof n=="object"?Zb(t,e,n):((r,o,i)=>{let s=o.hasOwnProperty(i);return o.constructor.createProperty(i,r),s?Object.getOwnPropertyDescriptor(o,i):void 0})(t,e,n)}function jn(t){return g(M(v({},t),{state:!0,attribute:!1}))}var on=(t,e,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,n),n);function pt(t,e){return(n,r,o)=>{let i=s=>s.renderRoot?.querySelector(t)??null;if(e){let{get:s,set:a}=typeof r=="object"?n:o??(()=>{let c=Symbol();return{get(){return this[c]},set(l){this[c]=l}}})();return on(n,r,{get(){let c=s.call(this);return c===void 0&&(c=i(this),(c!==null||this.hasUpdated)&&a.call(this,c)),c}})}return on(n,r,{get(){return i(this)}})}}var Hn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Un=t=>(...e)=>({_$litDirective$:t,values:e}),Ct=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};var{I:Yb}=Uf,qf=t=>t;var zf=()=>document.createComment(""),Bn=(t,e,n)=>{let r=t._$AA.parentNode,o=e===void 0?t._$AB:e._$AA;if(n===void 0){let i=r.insertBefore(zf(),o),s=r.insertBefore(zf(),o);n=new Yb(i,s,t,t.options)}else{let i=n._$AB.nextSibling,s=n._$AM,a=s!==t;if(a){let c;n._$AQ?.(t),n._$AM=t,n._$AP!==void 0&&(c=t._$AU)!==s._$AU&&n._$AP(c)}if(i!==o||a){let c=n._$AA;for(;c!==i;){let l=qf(c).nextSibling;qf(r).insertBefore(c,o),c=l}}}return n},St=(t,e,n=t)=>(t._$AI(e,n),t),Jb={},Wf=(t,e=Jb)=>t._$AH=e,Gf=t=>t._$AH,xi=t=>{t._$AR(),t._$AA.remove()};var Kf=(t,e,n)=>{let r=new Map;for(let o=e;o<=n;o++)r.set(t[o],o);return r},te=Un(class extends Ct{constructor(t){if(super(t),t.type!==Hn.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let r;n===void 0?n=e:e!==void 0&&(r=e);let o=[],i=[],s=0;for(let a of t)o[s]=r?r(a,s):s,i[s]=n(a,s),s++;return{values:i,keys:o}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,r]){let o=Gf(t),{values:i,keys:s}=this.dt(e,n,r);if(!Array.isArray(o))return this.ut=s,i;let a=this.ut??=[],c=[],l,u,d=0,p=o.length-1,f=0,h=i.length-1;for(;d<=p&&f<=h;)if(o[d]===null)d++;else if(o[p]===null)p--;else if(a[d]===s[f])c[f]=St(o[d],i[f]),d++,f++;else if(a[p]===s[h])c[h]=St(o[p],i[h]),p--,h--;else if(a[d]===s[h])c[h]=St(o[d],i[h]),Bn(t,c[h+1],o[d]),d++,h--;else if(a[p]===s[f])c[f]=St(o[p],i[f]),Bn(t,o[d],o[p]),p--,f++;else if(l===void 0&&(l=Kf(s,f,h),u=Kf(a,d,p)),l.has(a[d]))if(l.has(a[p])){let _=u.get(s[f]),b=_!==void 0?o[_]:null;if(b===null){let N=Bn(t,o[d]);St(N,i[f]),c[f]=N}else c[f]=St(b,i[f]),Bn(t,o[d],b),o[_]=null;f++}else xi(o[p]),p--;else xi(o[d]),d++;for(;f<=h;){let _=Bn(t,c[h+1]);St(_,i[f]),c[f++]=_}for(;d<=p;){let _=o[d++];_!==null&&xi(_)}return this.ut=s,Wf(t,c),we}});var Qf=U`:host {
  display: block;
}

.feedback {
  display: grid;
  gap: 6px;
}

button,
.quiet {
  min-height: 32px;
  border-radius: 8px;
  padding: 7px 10px;
  font: inherit;
  text-align: left;
}

button {
  border: 1px solid var(--_vector-line);
  background: var(--_vector-surface);
  color: var(--_vector-ink);
  cursor: pointer;
}

button.hard {
  border-color: color-mix(in srgb, var(--_vector-danger) 45%, transparent);
  color: var(--_vector-danger);
  background: color-mix(in srgb, var(--_vector-danger) 8%, transparent);
}

button.soft {
  border-color: color-mix(in srgb, var(--_vector-warning) 45%, transparent);
  color: var(--_vector-warning);
  background: color-mix(in srgb, var(--_vector-warning) 10%, transparent);
}

.quiet {
  display: block;
  color: var(--_vector-muted);
  border: 1px dashed var(--_vector-line);
}`;var Ci=Object.freeze({ink:"#1d2523",inkSoft:"#38413d",muted:"#68716d",line:"#d9d5ca",surface:"#fffdfa",surfaceAlt:"#fbfaf6",surfaceStrong:"#f0eee8",track:"#e8e3d8",allowed:"#b9cfc6",accent:"#426a8c",accentStrong:"#274c43",accentSoft:"#dce8e2",preview:"#d9824b",ok:"#4f8f5b",danger:"#9b3b37",warning:"#d9824b",reach:"#68716d"}),se=Object.freeze(["#426a8c","#d9824b","#6f8d42","#8b5f9d","#9d9a5a","#c48a70"]),Wr=String.fromCodePoint(128274),Zf=String.fromCodePoint(128275);var Z=U`:host {
  --_vector-ink: var(--vector-ink, #1d2523);
  --_vector-ink-soft: var(--vector-ink-soft, #38413d);
  --_vector-muted: var(--vector-muted, #68716d);
  --_vector-line: var(--vector-line, #d9d5ca);
  --_vector-surface: var(--vector-surface, #fffdfa);
  --_vector-surface-alt: var(--vector-surface-alt, #fbfaf6);
  --_vector-surface-strong: var(--vector-surface-strong, #f0eee8);
  --_vector-track: var(--vector-track, #e8e3d8);
  --_vector-allowed: var(--vector-allowed, #b9cfc6);
  --_vector-accent: var(--vector-accent, #426a8c);
  --_vector-accent-strong: var(--vector-accent-strong, #274c43);
  --_vector-accent-soft: var(--vector-accent-soft, #dce8e2);
  --_vector-preview: var(--vector-preview, #d9824b);
  --_vector-ok: var(--vector-ok, #4f8f5b);
  --_vector-danger: var(--vector-danger, #9b3b37);
  --_vector-warning: var(--vector-warning, #d9824b);
  --_vector-reach: var(--vector-reach, #68716d);
}`;function Xb(t){return String(t??"").replace(/[<>"'&;]/g,"")}function sn(t,e={},n={}){for(let r of Object.keys(n)){if(r in e)continue;let o=r.replace(/[A-Z]/g,i=>`-${i.toLowerCase()}`);t.style.removeProperty(`--vector-${o}`)}for(let[r,o]of Object.entries(e??{})){let i=r.replace(/[A-Z]/g,s=>`-${s.toLowerCase()}`);t.style.setProperty(`--vector-${i}`,Xb(o))}}var W=class extends Ke{constructor(){super(...arguments);this._theme={}}get theme(){return this._theme}set theme(n){let r=this._theme;this._theme=n??{},this.isConnected&&sn(this,this._theme,r)}connectedCallback(){super.connectedCallback(),sn(this,this._theme)}};function ue(t,e){globalThis.customElements&&!customElements.get(t)&&customElements.define(t,e)}function S(t,e,n){t.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:n}))}function T(t="tx"){return`${t}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function y(t,e=4){let n=10**e;return Math.round((Number(t??0)+Number.EPSILON)*n)/n}function ae(t,e=.1){let n=Number(e??.1);return y(Math.round(t/n)*n,e_(n))}function $(t,e=-1/0,n=1/0){return Math.min(n,Math.max(e,Number(t??0)))}function V(t){return t.replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function e_(t){let e=String(t);return e.includes(".")?e.split(".")[1].length:0}var an=100,ep=.1,t_=4,n_=7,bc=1e-7,tp=1e-9,Yf=1e-4,r_=8,o_=100;function ne(t={}){return Object.fromEntries(Object.entries(t).map(([e,n])=>[e,Number(n??0)]))}function np(t=[],e={}){let n=[...t].sort((r,o)=>Number(r.order??0)-Number(o.order??0)).map(r=>r.key);return[...new Set([...n,...Object.keys(e)])]}function ht(t={}){return Object.values(t).reduce((e,n)=>e+Number(n??0),0)}function Gr(t={}){return Number.isFinite(Number(t.min))?Number(t.min):0}function Kr(t={}){return Number.isFinite(Number(t.max))?Number(t.max):an}function oe(t,e,n,r="hard"){return{key:t,type:e,severity:r,message:n}}function Ti(t={},e=an,n=Object.keys(t)){let r={},o=ht(t),i=n.length?Number(e??an)/n.length:0;for(let s of n)r[s]=o>0?Number(t[s]??0)*Number(e??an)/o:i;return Tt(r,{},e,n[0])}function Mt({value:t={},key:e,target:n,constraints:r={},items:o=[],total:i=an}){let s=np(o,t).filter(I=>I in t||I===e),a=[],c=Ti(t,i,s),l=ne(c),u=r[e]||{};if(!e||!(e in l))return{vector:Tt(l,r,i,e),hits:[oe(e||"composition","sum","No active slice was available.")],delta:0};if(u.locked)return{vector:l,hits:[oe(e,"locked",`${V(e)} is locked.`)],delta:0};let d=Number(n),p=Gr(u),f=Kr(u),h=$(d,p,f);h!==d&&a.push(oe(e,h<=p?"min":"max",`${V(e)} hit ${h<=p?"minimum":"maximum"} ${y(h,2)}%.`)),h=ae(h,u.step??ep);let _=h-l[e];l[e]=h;let b=-_,N=new Set([e]),P=0;for(;op(b)&&P<i_(s);){P+=1;let I=s.filter(k=>{if(N.has(k))return!1;let ve=r[k]||{};return ve.locked?(a.push(oe(k,"locked",`${V(k)} is locked.`)),N.add(k),!1):b<0?c_(l[k],ve):l_(l[k],ve)});if(!I.length){Xf(l,e,b),a.push(oe(e,"unreachable",`${V(e)} was clamped because the remaining oils cannot absorb the change.`)),b=0;break}let X=I.reduce((k,ve)=>k+Jf(l[ve]),0),Y=!1;for(let k of I){let ve=r[k]||{},dn=Jf(l[k])/X,je=b*dn,He=Gr(ve),Ye=Kr(ve),E=je;je<0&&l[k]+je<He?(E=He-l[k],l[k]=He,N.add(k),a.push(oe(k,"min",`${V(k)} hit minimum ${y(He,2)}%.`))):je>0&&l[k]+je>Ye?(E=Ye-l[k],l[k]=Ye,N.add(k),a.push(oe(k,"max",`${V(k)} hit maximum ${y(Ye,2)}%.`))):l[k]+=E,b=u_(b-E),Y=Y||a_(E)}if(!Y){Xf(l,e,b),a.push(oe(e,"unreachable","No remaining oil can legally move.")),b=0;break}}return{vector:Tt(Qr(l,r),r,i,e),hits:rp(a),delta:y(h-c[e],4)}}function Qr(t={},e={}){return Object.fromEntries(Object.entries(t).map(([n,r])=>[n,ae(r,e[n]?.step??ep)]))}function Tt(t={},e={},n=an,r=null){let o=ne(t),i=Object.keys(o),s=Si(Number(n??an)-ht(o)),a=0;for(;op(s)&&a<o_;){a+=1;let c=[r,...i.filter(u=>u!==r)].filter(u=>!!u),l=!1;for(let u of c){let d=e[u]||{};if(d.locked)continue;let p=Gr(d),f=Kr(d),h=s>0?f-o[u]:o[u]-p;if(!s_(h))continue;let _=Math.sign(s)*Math.min(Math.abs(s),h);o[u]=Si(o[u]+_),s=Si(s-_),l=!0;break}if(!l)break}return o}function Zr(t={},e={}){return[...new Set([...Object.keys(t),...Object.keys(e)])].reduce((r,o)=>r+Math.abs(Number(t[o]??0)-Number(e[o]??0)),0)}function rp(t=[]){let e=new Set;return t.filter(n=>{let r=`${n.key}:${n.type}:${n.message}`;return e.has(r)?!1:(e.add(r),!0)})}function i_(t){return t.length+r_}function op(t){return Math.abs(Number(t??0))>bc}function s_(t){return Number(t??0)>tp}function a_(t){return Math.abs(Number(t??0))>tp}function c_(t,e){return Number(t??0)>Gr(e)+bc}function l_(t,e){return Number(t??0)<Kr(e)-bc}function Jf(t){return Math.max(Yf,Number(t??Yf))}function Si(t){return y(t,t_)}function u_(t){return y(t,n_)}function Xf(t,e,n){t[e]=Si(Number(t[e]??0)+Number(n??0))}var Qe={olive_oil:{lauric:0,myristic:0,palmitic:14,stearic:3,ricinoleic:0,oleic:69,linoleic:12,linolenic:1},coconut_oil:{lauric:48,myristic:19,palmitic:9,stearic:3,ricinoleic:0,oleic:8,linoleic:2,linolenic:0},lard:{lauric:0,myristic:1,palmitic:26,stearic:14,ricinoleic:0,oleic:44,linoleic:10,linolenic:1},castor_oil:{lauric:0,myristic:0,palmitic:2,stearic:1,ricinoleic:90,oleic:4,linoleic:4,linolenic:0},shea_butter:{lauric:0,myristic:0,palmitic:4,stearic:42,ricinoleic:0,oleic:46,linoleic:6,linolenic:0},cocoa_butter:{lauric:0,myristic:0,palmitic:26,stearic:34,ricinoleic:0,oleic:35,linoleic:3,linolenic:0},avocado_oil:{lauric:0,myristic:0,palmitic:20,stearic:1,ricinoleic:0,oleic:58,linoleic:12,linolenic:1},sweet_almond_oil:{lauric:0,myristic:0,palmitic:7,stearic:2,ricinoleic:0,oleic:68,linoleic:22,linolenic:0},sunflower_oil:{lauric:0,myristic:0,palmitic:6,stearic:4,ricinoleic:0,oleic:30,linoleic:59,linolenic:1},rice_bran_oil:{lauric:0,myristic:1,palmitic:22,stearic:2,ricinoleic:0,oleic:38,linoleic:34,linolenic:1},palm_oil:{lauric:0,myristic:1,palmitic:44,stearic:5,ricinoleic:0,oleic:39,linoleic:10,linolenic:0},jojoba_oil:{lauric:0,myristic:0,palmitic:2,stearic:1,ricinoleic:0,oleic:12,linoleic:5,linolenic:0}},_c={olive_oil:"#6f8d42",coconut_oil:"#3f7f95",lard:"#b38b59",castor_oil:"#8b5f9d",shea_butter:"#c09654",cocoa_butter:"#8d5a3c",avocado_oil:"#4f9c68",sweet_almond_oil:"#c48a70",sunflower_oil:"#d6a13d",rice_bran_oil:"#9d9a5a",palm_oil:"#b66d4d",jojoba_oil:"#7fa89d"},Ec={olive_oil:.134,coconut_oil:.183,lard:.138,castor_oil:.128,shea_butter:.128,cocoa_butter:.137,avocado_oil:.133,sweet_almond_oil:.136,sunflower_oil:.135,rice_bran_oil:.128,palm_oil:.142,jojoba_oil:.069},ip=1.4025,sp={oleic:.899,linoleic:1.814,linolenic:2.737,ricinoleic:.86},cn=[{key:"hardness",label:"Hardness",min:0,max:80,preferredMin:29,preferredMax:54,step:1},{key:"cleansing",label:"Cleansing",min:0,max:40,preferredMin:12,preferredMax:22,step:1},{key:"conditioning",label:"Conditioning",min:0,max:90,preferredMin:44,preferredMax:69,step:1},{key:"bubbly",label:"Bubbly",min:0,max:70,preferredMin:14,preferredMax:46,step:1},{key:"creamy",label:"Creamy",min:0,max:60,preferredMin:16,preferredMax:48,step:1}];function cp(t={}){let e=Object.keys(t.oils||{}),n=Object.keys(Qe);return[...new Set([...e,...n])].filter(o=>o in Qe).map((o,i)=>({key:o,label:V(o),color:_c[o]||g_(i),order:i,tags:m_(o)}))}function wc(t={}){return Ti(t.oils||{olive_oil:35,coconut_oil:22,lard:36,castor_oil:7},100)}function Ic(){return{version:1,oils:wc(),oilConstraints:Dc(Object.keys(Qe)),batchOilWeightG:1800,measurementSystem:"metric",selectedAdditives:["fragrance","kaolin_clay","sodium_lactate"],formulaChoices:{lye_type:"naoh"},referenceData:{density:{},sapValues:Ec,oilProfiles:Qe}}}function Dc(t=[]){let e={olive_oil:{min:10,max:70,step:1},coconut_oil:{min:5,max:30,step:1},lard:{min:10,max:60,step:1},castor_oil:{min:5,max:10,step:1},shea_butter:{min:0,max:20,step:1},cocoa_butter:{min:0,max:15,step:1},avocado_oil:{min:0,max:30,step:1},sweet_almond_oil:{min:0,max:30,step:1},sunflower_oil:{min:0,max:30,step:1},rice_bran_oil:{min:0,max:40,step:1},palm_oil:{min:0,max:50,step:1},jojoba_oil:{min:0,max:10,step:1}};return Object.fromEntries(t.map(n=>[n,v({},e[n]||{min:0,max:100,step:1})]))}function Fe(t={},e=Qe){let n=up(t,e);return{hardness:y(n.lauric+n.myristic+n.palmitic+n.stearic,1),cleansing:y(n.lauric+n.myristic,1),conditioning:y(n.oleic+n.linoleic+n.linolenic+n.ricinoleic,1),bubbly:y(n.lauric+n.myristic+n.ricinoleic,1),creamy:y(n.palmitic+n.stearic+n.ricinoleic,1)}}function lp(t={},e={},n=Qe){let r=up(t,n),o=Object.entries(sp).reduce((s,[a,c])=>s+Number(r[a]||0)*c,0),i=Object.entries(t||{}).reduce((s,[a,c])=>{let l=Number(e?.[a]??Ec[a]??0);return s+Number(c||0)/100*l*ip*1e3},0);return y(i-o,0)}function up(t={},e=Qe){let n={lauric:0,myristic:0,palmitic:0,stearic:0,ricinoleic:0,oleic:0,linoleic:0,linolenic:0};for(let[r,o]of Object.entries(t||{})){let i=e[r];if(!i)continue;let s=Number(o||0)/100;for(let a of Object.keys(n))n[a]+=Number(i[a]||0)*s}return Object.fromEntries(Object.entries(n).map(([r,o])=>[r,y(o,2)]))}function dp({oilVector:t,key:e,target:n,oilConstraints:r={},oilItems:o=[]}){let i=Mt({value:t,key:e,target:n,constraints:r,items:o,total:100});return{oilVector:i.vector,qualityVector:Fe(i.vector),hits:i.hits,explanations:i.hits.map(s=>s.message)}}function qn({oilVector:t,targetQuality:e,oilConstraints:n={},axes:r=cn,profiles:o=Qe}){let i=Object.keys(t||{}),s=Tt(d_(t,n),n,100,i[0]),a=Fe(s,o),c=ap(s,a,e,t),l=p_(n,i);for(let d of l){let p=!0,f=0;for(;p&&f<250;){p=!1,f+=1;let h=s,_=a,b=c;for(let N of i)for(let P of i){if(N===P)continue;let I=f_(s,N,P,d,n);if(!I)continue;let X=Fe(I,o),Y=ap(I,X,e,t);Y+1e-7<b&&(h=I,_=X,b=Y,p=!0)}s=h,a=_,c=b}}let u=h_(s,a,e,n,r);return{oilVector:s,qualityVector:a,hits:u,explanations:u.map(d=>d.message),score:c}}function Nt(t,e={},n=cn){let r={};for(let o of n){let i=qn({oilVector:t,oilConstraints:e,axes:n,targetQuality:{[o.key]:o.min}}),s=qn({oilVector:t,oilConstraints:e,axes:n,targetQuality:{[o.key]:o.max}});r[o.key]={min:y(i.qualityVector[o.key],1),max:y(s.qualityVector[o.key],1)}}return r}function d_(t={},e={}){let n=ne(t);for(let[r,o]of Object.entries(n)){let i=e[r]||{};n[r]=$(o,i.min??0,i.max??100)}return Tt(Qr(n,e),e,100,Object.keys(n)[0])}function fp(t,e,n,r,o=[]){let i=M(v({},e),{[n]:v(v({},e[n]||{}),r)}),s=ne(t),a=Number(s[n]||0),c=Number(i[n].min??0),l=Number(i[n].max??100);return(a<c||a>l)&&(s=Mt({value:s,key:n,target:$(a,c,l),constraints:i,items:o,total:100}).vector),{oilVector:s,oilConstraints:i,qualityVector:Fe(s)}}function f_(t,e,n,r,o){let i=o[e]||{},s=o[n]||{};if(i.locked||s.locked)return null;let a=Number(i.min??0),c=Number(s.max??100);if(Number(t[e]||0)-r<a-1e-7||Number(t[n]||0)+r>c+1e-7)return null;let l=ne(t);return l[e]=y(l[e]-r,4),l[n]=y(l[n]+r,4),Tt(Qr(l,o),o,100,n)}function p_(t={},e=[]){let n=e.reduce((o,i)=>{let s=Number(t[i]?.step||1);return!Number.isFinite(s)||s<=0?o:Math.min(o,s)},1/0),r=Number.isFinite(n)?n:1;return[5,1,.25,.1].filter(o=>o>=r-1e-7)}function ap(t,e,n={},r={}){return Object.entries(n).reduce((i,[s,a])=>{let c=Number(e[s]||0)-Number(a||0);return i+c*c},0)+Zr(t,r)*.015}function h_(t,e,n,r,o){let i=[];for(let[s,a]of Object.entries(n)){let c=Number(e[s]||0);if(Math.abs(c-Number(a))>.6){let l=o.find(u=>u.key===s);i.push(oe(s,"unreachable",`${l?.label||V(s)} reached ${y(c,1)} instead of ${y(a,1)} with the selected oils.`))}}for(let[s,a]of Object.entries(t||{})){let c=r[s]||{};if(c.locked){i.push(oe(s,"locked",`${V(s)} is locked.`));continue}c.min!=null&&Math.abs(Number(a)-Number(c.min))<.05&&i.push(oe(s,"min",`${V(s)} hit minimum ${y(c.min,2)}%.`)),c.max!=null&&Math.abs(Number(a)-Number(c.max))<.05&&i.push(oe(s,"max",`${V(s)} hit maximum ${y(c.max,2)}%.`))}return Math.abs(ht(t)-100)>.01&&i.push(oe("composition","sum","Oil percentages must add to 100%.")),i}function m_(t){let e=new Set(["coconut_oil","lard","shea_butter","cocoa_butter","palm_oil"]),n=new Set(["olive_oil","avocado_oil","sweet_almond_oil","sunflower_oil","rice_bran_oil","jojoba_oil"]),r=new Set(["coconut_oil","castor_oil"]);return[e.has(t)?"hard":null,n.has(t)?"liquid":null,r.has(t)?"lather":null].filter(o=>o!==null)}function g_(t){let e=["#426a8c","#d9824b","#6f8d42","#8b5f9d","#9d9a5a","#c48a70"];return e[t%e.length]}var Yr=class extends W{static{this.styles=[Z,Qf]}#e;get hits(){return this.#e}set hits(e){this.#e=e}constructor(){super(),this.hits=[],this.theme={}}render(){return w`
      <div class="feedback">
        ${this.hits.length?te(this.hits,e=>`${e.key}:${e.type}:${e.message}`,e=>w`
                <button
                  class=${e.severity||"hard"}
                  data-key=${e.key}
                  @click=${()=>this._selectHit(e.key)}
                >
                  ${e.message}
                </button>
              `):w`<span class="quiet">No active constraints.</span>`}
      </div>
    `}_selectHit(e){S(this,"vector-select",{source:"constraint",role:"selection",transactionId:T("feedback"),key:e})}};m([g({attribute:!1})],Yr.prototype,"hits",1);var F=Un(class extends Ct{constructor(t){if(super(t),t.type!==Hn.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(let r in e)e[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(e)}let n=t.element.classList;for(let r of this.st)r in e||(n.remove(r),this.st.delete(r));for(let r in e){let o=!!e[r];o===this.st.has(r)||this.nt?.has(r)||(o?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return we}});var xc=class extends Ct{constructor(n){super(n);this.previousNames=new Set;if(n.type!==Hn.ELEMENT)throw new Error("styleVariables must be used as an element directive")}render(n){return we}update(n,[r]){let o=n.element,i=new Set(Object.keys(r));for(let s of this.previousNames)i.has(s)||o.style.removeProperty(s);for(let[s,a]of Object.entries(r))a===null?o.style.removeProperty(s):o.style.setProperty(s,a);return this.previousNames=i,we}},re=Un(xc);var pp=U`:host {
  display: block;
}

.search-list {
  display: grid;
  gap: 10px;
}

.search {
  min-height: 36px;
  border: 1px solid var(--_vector-line);
  border-radius: 8px;
  padding: 0 10px;
  background: var(--_vector-surface);
  color: var(--_vector-ink);
}

.items {
  display: grid;
  gap: 6px;
  max-block-size: 280px;
  overflow: auto;
}

.oil-row {
  display: grid;
  grid-template-columns: 14px minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
  min-height: 34px;
  border: 1px solid var(--_vector-line);
  border-radius: 8px;
  background: var(--_vector-surface);
  color: var(--_vector-ink);
  text-align: left;
  cursor: pointer;
}

.oil-row.selected {
  border-color: var(--_vector-accent-strong);
  background: var(--_vector-accent-soft);
}

.swatch {
  inline-size: 12px;
  block-size: 12px;
  border-radius: 999px;
  background: var(--item-color);
}

.item-label {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

small {
  display: block;
  color: var(--_vector-muted);
  font-size: 0.7rem;
  text-transform: capitalize;
}

strong {
  color: var(--_vector-accent-strong);
  font-size: 0.78rem;
}`;function Cc(t,e=se){let n=Jr(e);return n[t%n.length]}function Me(t,e=0,n=se){return t?.color??Cc(e,n)}function hp(t,e=[]){return e.find(n=>Number(t)>=Number(n.min)&&Number(t)<=Number(n.max))||null}function Jr(t){return Array.isArray(t)&&t.length?t:se}function zn(t=1){let e=Number(t??1);if(!Number.isFinite(e)||e>=1)return 0;let n=String(e);return n.includes("e-")?Number(n.split("e-")[1]||0):n.includes(".")?n.split(".")[1].length:0}function pe(t,e=0){let n=Math.max(0,Number(e??0));return n>0?Number(t||0).toFixed(n):String(y(t,0))}function Sc(t,e=""){return String(t?.symbol??e??"").trim()||t?.label||""}var mp,gp,yp,vp,bp,_p,Ep,wp,he=class extends W{constructor(){super();x(this,mp);x(this,gp);x(this,yp);x(this,vp);x(this,bp);x(this,_p);x(this,Ep);x(this,wp);this._queryChanged=n=>{this.query=n.currentTarget.value};this.items=[],this.selectedKeys=[],this.query="",this.activeTags=[],this.itemTypes=[],this.listType="item",this.searchPlaceholder="Search items",this.theme={},this.palette=se}static{this.styles=[Z,pp]}get items(){return D(this,mp)}set items(n){C(this,mp,n)}get selectedKeys(){return D(this,gp)}set selectedKeys(n){C(this,gp,n)}get query(){return D(this,yp)}set query(n){C(this,yp,n)}get activeTags(){return D(this,vp)}set activeTags(n){C(this,vp,n)}get itemTypes(){return D(this,bp)}set itemTypes(n){C(this,bp,n)}get listType(){return D(this,_p)}set listType(n){C(this,_p,n)}get searchPlaceholder(){return D(this,Ep)}set searchPlaceholder(n){C(this,Ep,n)}get palette(){return D(this,wp)}set palette(n){C(this,wp,n)}set state(n){this.items=n?.items??[],this.selectedKeys=n?.selectedKeys??[],this.query=n?.query??"",this.activeTags=n?.activeTags??[],this.itemTypes=n?.itemTypes??[],this.listType=n?.listType??"item",this.searchPlaceholder=n?.searchPlaceholder??"Search items",this.theme=n?.theme??{},this.palette=n?.palette??se}render(){let n=new Set(this.selectedKeys),r=this.query.toLowerCase(),o=this.items.filter(i=>{let s=!r||i.label.toLowerCase().includes(r)||i.key.toLowerCase().includes(r),a=!this.activeTags.length||this.activeTags.every(u=>i.tags?.includes(u)),c=i.type||i.category||"",l=!this.itemTypes.length||this.itemTypes.includes(c);return s&&a&&l});return w`
      <div class="search-list">
        <input
          class="search"
          type="search"
          placeholder=${this.searchPlaceholder}
          .value=${this.query}
          @input=${this._queryChanged}
        />
        <div class="items">
          ${te(o,i=>i.key,(i,s)=>w`
              <button
                class=${F({"oil-row":!0,selected:n.has(i.key)})}
                data-key=${i.key}
                @click=${()=>this._toggle(i.key)}
              >
                <span
                  class="swatch"
                  ${re({"--item-color":Me(i,s,this.palette)})}
                ></span>
                <span
                  ><span class="item-label">${i.label}</span
                  >${i.category||i.type?w`<small>${i.category||i.type}</small>`:Q}</span
                >
                <strong>${n.has(i.key)?"Remove":"Add"}</strong>
              </button>
            `)}
        </div>
      </div>
    `}_toggle(n){let r=new Set(this.selectedKeys),o=r.has(n)?"remove":"add";r.has(n)?r.delete(n):r.add(n),S(this,"vector-change",{source:"list",role:"selection",transactionId:T("list"),key:n,selection:[...r],action:o,listType:this.listType,itemType:this.items.find(i=>i.key===n)?.type??this.items.find(i=>i.key===n)?.category})}};mp=new WeakMap,gp=new WeakMap,yp=new WeakMap,vp=new WeakMap,bp=new WeakMap,_p=new WeakMap,Ep=new WeakMap,wp=new WeakMap,m([g({attribute:!1})],he.prototype,"items",1),m([g({attribute:!1})],he.prototype,"selectedKeys",1),m([g({attribute:!1})],he.prototype,"query",1),m([g({attribute:!1})],he.prototype,"activeTags",1),m([g({attribute:!1})],he.prototype,"itemTypes",1),m([g({attribute:!1})],he.prototype,"listType",1),m([g({attribute:!1})],he.prototype,"searchPlaceholder",1),m([g({attribute:!1})],he.prototype,"palette",1);var Mi=class extends he{constructor(){super(),this._listType="oil",this._searchPlaceholder="Search oils"}};var Ip=U`:host {
  display: block;
}

.amount-list {
  display: grid;
  gap: 8px;
}

.quiet {
  min-height: 34px;
  border: 1px dashed var(--_vector-line);
  border-radius: 8px;
  color: var(--_vector-muted);
  padding: 8px 10px;
}`;var ce=class extends W{static{this.styles=[Z,Ip]}#e;get items(){return this.#e}set items(e){this.#e=e}#t;get values(){return this.#t}set values(e){this.#t=e}#n;get constraints(){return this.#n}set constraints(e){this.#n=e}#r;get thresholds(){return this.#r}set thresholds(e){this.#r=e}#o;get unitPreferences(){return this.#o}set unitPreferences(e){this.#o=e}#i;get measurementSystem(){return this.#i}set measurementSystem(e){this.#i=e}#s;get basis(){return this.#s}set basis(e){this.#s=e}#a;get measurementScope(){return this.#a}set measurementScope(e){this.#a=e}#c;get measurementMeasure(){return this.#c}set measurementMeasure(e){this.#c=e}#l;get context(){return this.#l}set context(e){this.#l=e}#u;get role(){return this.#u}set role(e){this.#u=e}#d;get control(){return this.#d}set control(e){this.#d=e}#f;get unitDisplay(){return this.#f}set unitDisplay(e){this.#f=e}#p;get activeEmphasis(){return this.#p}set activeEmphasis(e){this.#p=e}#h;get palette(){return this.#h}set palette(e){this.#h=e}constructor(){super(),this.items=[],this.values={},this.constraints={},this.thresholds={},this.unitPreferences={},this.measurementSystem="",this.basis="",this.measurementScope="",this.measurementMeasure="",this.context=null,this.role="additive",this.control="slider",this.unitDisplay="picker",this.activeEmphasis=!0,this.theme={},this.palette=se}set state(e){let n=e??{};this.items=n.items??[],this.values=n.values??{},this.constraints=n.constraints??{},this.thresholds=n.thresholds??{},this.unitPreferences=n.unitPreferences??{},this.measurementSystem=n.measurementSystem??"",this.basis=n.basis??"",this.measurementScope=n.measurementScope??"",this.measurementMeasure=n.measurementMeasure??"",this.context=n.context??null,this.role=n.role??"additive",this.control=n.control??"slider",this.unitDisplay=n.unitDisplay??"picker",this.activeEmphasis=n.activeEmphasis!==!1,this.theme=n.theme??{},this.palette=n.palette??se}render(){return w`
      <div class="amount-list">
        ${this.items.length?te(this.items,e=>e.key,e=>{let n={item:e,value:this.values[e.key]??e.defaultValue??0,defaultValue:e.defaultValue,constraint:this.constraints[e.key]??{},hits:[],thresholds:this.thresholds[e.key]??e.thresholds??[],unitOptions:e.unitOptions??[],unitKey:this._unitKeyForItem(e),measurementSystem:this.measurementSystem,basis:this.basis,measurementScope:this.measurementScope,measurementMeasure:this.measurementMeasure,context:M(v({},this.context??{}),{density:this.context?.densities?.[e.material||e.key]??this.context?.density}),role:this.role,rangeMin:e.min??0,rangeMax:e.max??100,precision:e.precision,theme:this.theme,palette:this.palette,variant:"embedded",unitDisplay:this.unitDisplay,activeEmphasis:this.activeEmphasis};return this._renderControl(n)}):w`<div class="quiet">No selected amounts.</div>`}
      </div>
    `}_renderControl(e){return this.control==="constraint"?w`<vector-scalar-rail
          .item=${e.item}
          .value=${e.value}
          .constraint=${e.constraint}
          .role=${e.role}
          .hits=${e.hits}
          .rangeMin=${e.rangeMin}
          .rangeMax=${e.rangeMax}
          .precision=${e.precision??null}
          .defaultValue=${e.defaultValue??null}
          .thresholds=${e.thresholds??[]}
          .unitOptions=${e.unitOptions??[]}
          .unitKey=${e.unitKey??""}
          .measurementSystem=${e.measurementSystem??""}
          .basis=${e.basis??""}
          .measurementScope=${e.measurementScope??""}
          .measurementMeasure=${e.measurementMeasure??""}
          .context=${e.context??null}
          .disabled=${e.disabled}
          .palette=${e.palette}
          .variant=${e.variant}
          .unitDisplay=${e.unitDisplay}
          .activeEmphasis=${e.activeEmphasis}
        ></vector-scalar-rail>`:w`<vector-value-slider
          .item=${e.item}
          .value=${e.value}
          .constraint=${e.constraint}
          .role=${e.role}
          .hits=${e.hits}
          .rangeMin=${e.rangeMin}
          .rangeMax=${e.rangeMax}
          .precision=${e.precision??null}
          .defaultValue=${e.defaultValue??null}
          .thresholds=${e.thresholds??[]}
          .unitOptions=${e.unitOptions??[]}
          .unitKey=${e.unitKey??""}
          .measurementSystem=${e.measurementSystem??""}
          .basis=${e.basis??""}
          .measurementScope=${e.measurementScope??""}
          .measurementMeasure=${e.measurementMeasure??""}
          .context=${e.context??null}
          .disabled=${e.disabled}
          .palette=${e.palette}
          .variant=${e.variant}
          .unitDisplay=${e.unitDisplay}
          .activeEmphasis=${e.activeEmphasis}
        ></vector-value-slider>`}_unitKeyForItem(e){let n=this.unitPreferences[e.key]??"";return!n||!(e.unitOptions??[]).find(o=>o.key===n)?"":n}};m([g({attribute:!1})],ce.prototype,"items",1),m([g({attribute:!1})],ce.prototype,"values",1),m([g({attribute:!1})],ce.prototype,"constraints",1),m([g({attribute:!1})],ce.prototype,"thresholds",1),m([g({attribute:!1})],ce.prototype,"unitPreferences",1),m([g({attribute:!1})],ce.prototype,"measurementSystem",1),m([g({attribute:!1})],ce.prototype,"basis",1),m([g({attribute:!1})],ce.prototype,"measurementScope",1),m([g({attribute:!1})],ce.prototype,"measurementMeasure",1),m([g({attribute:!1})],ce.prototype,"context",1),m([g({attribute:!1})],ce.prototype,"role",1),m([g({attribute:!1})],ce.prototype,"control",1),m([g({attribute:!1})],ce.prototype,"unitDisplay",1),m([g({attribute:!1})],ce.prototype,"activeEmphasis",1),m([g({attribute:!1})],ce.prototype,"palette",1);var Dp=U`:host {
  display: block;
}

.choice-control {
  display: grid;
  gap: 8px;
}

strong {
  color: var(--_vector-ink);
  font-size: 0.85rem;
}

.choices {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

button {
  min-height: 32px;
  border: 1px solid var(--_vector-line);
  border-radius: 8px;
  background: var(--_vector-surface);
  color: var(--_vector-ink);
  padding: 0 10px;
  cursor: pointer;
}

button.selected {
  border-color: var(--_vector-accent-strong);
  background: var(--_vector-accent-soft);
  color: var(--_vector-accent-strong);
  font-weight: 700;
}

button:disabled {
  opacity: 0.58;
  cursor: default;
}`;var mt=class extends W{static{this.styles=[Z,Dp]}#e;get item(){return this.#e}set item(e){this.#e=e}#t;get options(){return this.#t}set options(e){this.#t=e}#n;get value(){return this.#n}set value(e){this.#n=e}#r;get role(){return this.#r}set role(e){this.#r=e}#o;get disabled(){return this.#o}set disabled(e){this.#o=e}constructor(){super(),this.item=null,this.options=[],this.value="",this.role="choice",this.disabled=!1,this.theme={}}set state(e){let n=e??{};this.item=n.item??null,this.options=n.options??n.item?.options??[],this.value=n.value??"",this.role=n.role??"choice",this.disabled=n.disabled??!1,this.theme=n.theme??{}}render(){return w`
      <div class="choice-control">
        ${this.item?w`<strong>${this.item.label||V(this.item.key)}</strong>`:Q}
        <div
          class="choices"
          role="group"
          aria-label=${this.item?.label||"Choice"}
        >
          ${te(this.options,e=>e.key??e.value??"",e=>{let n=e.value??e.key??"",r=n===this.value;return w`
                <button
                  type="button"
                  class=${F({selected:r})}
                  ?disabled=${this.disabled}
                  aria-pressed=${String(!!r)}
                  @click=${()=>this._select(n,e)}
                >
                  ${e.label??V(String(n))}
                </button>
              `})}
        </div>
      </div>
    `}_select(e,n){S(this,"vector-change",{source:"inspector",role:this.role,transactionId:T("choice"),key:this.item?.key,value:e,option:n})}};m([g({attribute:!1})],mt.prototype,"item",1),m([g({attribute:!1})],mt.prototype,"options",1),m([g({attribute:!1})],mt.prototype,"value",1),m([g({attribute:!1})],mt.prototype,"role",1),m([g({attribute:!1})],mt.prototype,"disabled",1);var xp=U`:host {
  display: block;
}

.constraint-row {
  display: grid;
  grid-template-columns: minmax(90px, 1fr) 56px repeat(3, minmax(60px, 0.7fr));
  gap: 8px;
  align-items: end;
  padding: 8px 0;
  border-bottom: 1px solid var(--_vector-line);
}

strong {
  color: var(--_vector-ink);
  font-size: 0.88rem;
}

span,
label {
  color: var(--_vector-muted);
  font-size: 0.78rem;
}

input {
  min-height: 30px;
  width: 100%;
  border: 1px solid var(--_vector-line);
  border-radius: 8px;
  padding: 0 8px;
  background: var(--_vector-surface);
  color: var(--_vector-ink);
}

input[type=checkbox] {
  inline-size: 20px;
}

@media (max-width: 720px) {
  .constraint-row {
    grid-template-columns: 1fr 56px;
  }
  label {
    display: grid;
    grid-template-columns: 48px 1fr;
    grid-column: 1/-1;
    align-items: center;
  }
}`;var Cp,Sp,Tp,Mp,kt=class extends W{constructor(){super();x(this,Cp);x(this,Sp);x(this,Tp);x(this,Mp);this._emit=n=>{let r=n.currentTarget,o=new FormData(r),i={min:Number(o.get("min")),max:Number(o.get("max")),locked:o.get("locked")==="on"};S(this,"vector-change",{source:"constraint",role:"constraint",transactionId:T("constraint"),key:this.item?.key,constraintRole:this.mode,constraint:i})};this.item=null,this.value=0,this.constraint={},this.mode="composition",this.theme={}}static{this.styles=[Z,xp]}get item(){return D(this,Cp)}set item(n){C(this,Cp,n)}get value(){return D(this,Sp)}set value(n){C(this,Sp,n)}get constraint(){return D(this,Tp)}set constraint(n){C(this,Tp,n)}get mode(){return D(this,Mp)}set mode(n){C(this,Mp,n)}render(){let n=this.item||{key:"",label:"Constraint"};return w`
      <form class="constraint-row" @change=${this._emit}>
        <strong>${n.label||V(n.key)}</strong>
        <span
          >${y(this.value,1)}${this.mode==="composition"?"%":""}</span
        >
        <label
          >Min<input
            name="min"
            data-field="min"
            type="number"
            step=${this.constraint.step||.1}
            .value=${String(this.constraint.min??0)}
        /></label>
        <label
          >Max<input
            name="max"
            data-field="max"
            type="number"
            step=${this.constraint.step||.1}
            .value=${String(this.constraint.max??100)}
        /></label>
        <label
          >Lock<input
            name="locked"
            data-field="locked"
            type="checkbox"
            .checked=${!!this.constraint.locked}
        /></label>
      </form>
    `}};Cp=new WeakMap,Sp=new WeakMap,Tp=new WeakMap,Mp=new WeakMap,m([g({attribute:!1})],kt.prototype,"item",1),m([g({attribute:!1})],kt.prototype,"value",1),m([g({attribute:!1})],kt.prototype,"constraint",1),m([g({attribute:!1})],kt.prototype,"mode",1);var At=class{constructor(e){this.host=e;this.abortController=null;e.addController(this)}get active(){return this.abortController!==null}hostDisconnected(){this.cancel()}start(e){this.cancel();let n=new AbortController;this.abortController=n;let r={signal:n.signal};document.addEventListener("pointermove",e.move,r),document.addEventListener("pointerup",o=>{this.cancel(),e.end(o)},r),document.addEventListener("pointercancel",()=>{this.cancel(),e.cancel()},r)}cancel(){this.abortController?.abort(),this.abortController=null}};function Xr(t,e){return(!e.measurementSystem||!t.system||t.system===e.measurementSystem)&&(!e.measurementScope||!t.scope||t.scope===e.measurementScope)&&(!e.measurementMeasure||!t.measure||t.measure===e.measurementMeasure)&&(!e.basis||!t.basis||t.basis===e.basis)}function Np(t,e,n){return t.find(r=>r.key===n.unitKey)??t.find(r=>!!r.system&&r.system===n.measurementSystem&&Xr(r,n))??t.find(r=>Xr(r,n))??t.find(r=>r.key===e?.defaultUnitKey&&Xr(r,n))??t[0]??null}function kp(t,e,n){return typeof e?.fromCanonical=="function"?Number(e.fromCanonical(t,n)??0):t}function Ap(t,e,n){return typeof e?.toCanonical=="function"?Number(e.toCanonical(t,n)??0):t}var Wn={item:{attribute:!1},value:{attribute:!1},constraint:{attribute:!1},role:{attribute:!1},hits:{attribute:!1},rangeMin:{attribute:!1},rangeMax:{attribute:!1},precision:{attribute:!1},defaultValue:{attribute:!1},thresholds:{attribute:!1},unitOptions:{attribute:!1},unitKey:{attribute:!1},measurementSystem:{attribute:!1},basis:{attribute:!1},measurementScope:{attribute:!1},measurementMeasure:{attribute:!1},context:{attribute:!1},disabled:{attribute:!1},palette:{attribute:!1},variant:{attribute:!1},unitDisplay:{attribute:!1},activeEmphasis:{attribute:!1}};function Gn(t){t.item=null,t.value=0,t.constraint={},t.role="composition",t.hits=[],t.rangeMin=0,t.rangeMax=100,t.precision=null,t.defaultValue=null,t.thresholds=[],t.unitOptions=[],t.unitKey="",t.measurementSystem="",t.basis="",t.measurementScope="",t.measurementMeasure="",t.context=null,t.disabled=!1,t.theme={},t.palette=se,t.variant="default",t.unitDisplay="picker",t.activeEmphasis=!0}var Rt=class{constructor(e){this.host=e;e.addController(this)}hostConnected(){}get state(){let e=this.host;return{item:e.item,value:e.value,constraint:e.constraint,role:e.role,hits:e.hits,rangeMin:e.rangeMin,rangeMax:e.rangeMax,precision:e.precision,defaultValue:e.defaultValue,thresholds:e.thresholds,unitOptions:e.unitOptions,unitKey:e.unitKey,measurementSystem:e.measurementSystem,basis:e.basis,measurementScope:e.measurementScope,measurementMeasure:e.measurementMeasure,context:e.context,disabled:e.disabled,theme:e.theme,palette:e.palette,variant:e.variant,unitDisplay:e.unitDisplay,activeEmphasis:e.activeEmphasis}}setState(e){let n=this.host;Object.assign(n,{item:e.item??null,value:Number(e.value??0),constraint:e.constraint??{},role:e.role??"composition",hits:e.hits??[],rangeMin:Number(e.rangeMin??0),rangeMax:Number(e.rangeMax??100),precision:e.precision==null?null:Number(e.precision),defaultValue:e.defaultValue==null?null:Number(e.defaultValue),thresholds:e.thresholds??e.item?.thresholds??[],unitOptions:e.unitOptions??e.item?.unitOptions??[],unitKey:e.unitKey??"",measurementSystem:e.measurementSystem??"",basis:e.basis??"",measurementScope:e.measurementScope??"",measurementMeasure:e.measurementMeasure??"",context:e.context??null,disabled:!!e.disabled,theme:e.theme??{},palette:Jr(e.palette),variant:e.variant??"default",unitDisplay:e.unitDisplay??"picker",activeEmphasis:e.activeEmphasis!==!1})}patchState(e){Object.assign(this.host,e)}viewState(){let e=this.host,n=this.domain(),r=this.min(),o=this.max(),i=$(e.value,n.min,n.max),s=this.places(),a=this.toDisplay(r),c=this.toDisplay(o),l=this.toDisplay(i);return{domain:n,min:r,max:o,value:i,displayMin:a,displayMax:c,displayValue:l,locked:!!e.constraint.locked,places:s,unit:this.unit(),itemColor:Me(e.item,0,e.palette),minPct:this.pct(r),maxPct:this.pct(o),valuePct:this.pct(i),minText:pe(a,s),maxText:pe(c,s),valueText:pe(l,s),domainMinText:pe(this.toDisplay(n.min),s),domainMaxText:pe(this.toDisplay(n.max),s),displayStep:this.displayStep(),thresholdKey:this.thresholdFor(i)?.key??""}}changeUnit(e){let n=this.host.unitOptions.find(r=>r.key===e);n&&(this.host.unitKey=e,S(this.host,"vector-change",{source:"inspector",role:"measurement",transactionId:T("rail-unit"),key:this.host.item?.key,unitKey:e,basis:n.basis,measurementScope:n.scope??this.host.measurementScope,measurementMeasure:n.measure??this.host.measurementMeasure,measurementSystem:n.system??this.host.measurementSystem}))}handleValue(e){return e==="min"?this.min():e==="max"?this.max():this.host.value}domain(){let e=Number.isFinite(Number(this.host.item?.min))?Number(this.host.item?.min):this.host.rangeMin,n=Number.isFinite(Number(this.host.item?.max))?Number(this.host.item?.max):this.host.rangeMax;return{min:Number.isFinite(e)?e:0,max:Number.isFinite(n)?n:100}}min(){return Number.isFinite(Number(this.host.constraint.min))?Number(this.host.constraint.min):this.domain().min}max(){return Number.isFinite(Number(this.host.constraint.max))?Number(this.host.constraint.max):this.domain().max}pct(e){let n=this.domain();return $((Number(e??0)-n.min)/(n.max-n.min||1)*100,0,100)}step(){let e=this.unitOption();if(e?.step!=null&&Number.isFinite(Number(e.step))){let n=this.toCanonical(0);return Math.abs(this.toCanonical(Number(e.step))-n)||Number(e.step)}return Number(this.host.constraint.step??this.host.item?.step??1)}places(){if(Number.isFinite(this.host.precision))return Math.max(0,Number(this.host.precision));let e=this.unitOption();return e?.precision!=null&&Number.isFinite(Number(e.precision))?Math.max(0,Number(e.precision)):zn(this.displayStep())}unit(){return this.unitOption()?.symbol??(this.host.role==="composition"?"%":this.host.item?.unit??"")}unitOption(){return Np(this.host.unitOptions,this.host.item,this.preferences())}unitMatchesOption(e){return e?Xr(e,this.preferences()):!1}toDisplay(e){return kp(Number(e??0),this.unitOption(),this.conversionContext())}toCanonical(e){return Ap(Number(e??0),this.unitOption(),this.conversionContext())}displayStep(){let e=this.unitOption();if(e?.step!=null&&Number.isFinite(Number(e.step)))return Number(e.step);let n=this.toDisplay(0);return Math.abs(this.toDisplay(this.step())-n)||this.step()}thresholdFor(e){return this.host.thresholds.find(n=>Number(e)>=Number(n.min)&&Number(e)<=Number(n.max))??null}handleHitClass(e){let n=this.host.hits.filter(r=>r.key===this.host.item?.key);return e==="min"&&n.some(r=>r.type==="min")||e==="max"&&n.some(r=>r.type==="max")||e==="value"&&n.some(r=>["locked","unreachable","solver","sum"].includes(r.type))?"hit":""}preferences(){let e=this.host;return{unitKey:e.unitKey,measurementSystem:e.measurementSystem,basis:e.basis,measurementScope:e.measurementScope,measurementMeasure:e.measurementMeasure}}conversionContext(){let e=this.host,n=e.context&&typeof e.context=="object"?e.context:{};return M(v({},n),{item:e.item,measurementSystem:e.measurementSystem,basis:e.basis,measurementScope:e.measurementScope,measurementMeasure:e.measurementMeasure})}};function Ni(t){return te(t.thresholds,e=>e.key,e=>{let n=t.percent(e.min),r=t.percent(e.max),o=t.activeThreshold(t.value)?.key===e.key;return w`
        <span
          class=${F({"threshold-band":!0,[e.severity??"ok"]:!0,active:o})}
          ${re({"--threshold-start":`${n}%`,"--threshold-width":`${Math.max(0,r-n)}%`,"--threshold-color":e.color??null})}
          title=${e.label??e.key}
        ></span>
      `})}var Rp=U`:host {
  display: block;
}

* {
  box-sizing: border-box;
}

.empty,
.rail-control {
  border: 1px solid var(--_vector-line);
  border-radius: 8px;
  padding: 12px;
  background: var(--_vector-surface-alt);
}

.empty {
  color: var(--_vector-muted);
}

header {
  display: grid;
  grid-template-columns: 14px minmax(0, 1fr) auto auto;
  gap: 8px;
  align-items: center;
  margin-bottom: 18px;
}

.swatch {
  inline-size: 12px;
  block-size: 12px;
  border-radius: 999px;
  background: var(--item-color);
}

strong {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

output {
  color: var(--_vector-ink);
  font-weight: 700;
}

button,
input {
  font: inherit;
}

.lock-button {
  display: inline-grid;
  place-items: center;
  inline-size: 34px;
  min-height: 30px;
  border: 1px solid var(--_vector-line);
  border-radius: 8px;
  background: var(--_vector-surface);
  color: var(--_vector-ink);
  padding: 0;
  cursor: pointer;
  font-weight: 800;
  line-height: 1;
}

.lock-button.locked {
  border-color: var(--_vector-accent-strong);
  background: var(--_vector-accent-soft);
  color: var(--_vector-accent-strong);
  font-weight: 700;
}

.rail-body {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: center;
  gap: 8px;
}

.embedded {
  padding: 10px 12px 12px;
}

.embedded .rail-body {
  grid-template-columns: minmax(0, 1fr) 34px;
}

.rail {
  position: relative;
  block-size: 86px;
  margin: 0 12px 4px;
  touch-action: none;
}

.embedded .rail {
  margin-inline: 12px 4px;
}

.full-track,
.allowed-track,
.threshold-track {
  position: absolute;
  left: 0;
  right: 0;
  top: 40px;
  block-size: 8px;
  border-radius: 999px;
}

.full-track {
  background: var(--_vector-track);
}

.threshold-track {
  overflow: hidden;
  background: transparent;
  z-index: 1;
}

.threshold-band {
  position: absolute;
  top: 0;
  bottom: 0;
  left: var(--threshold-start);
  width: var(--threshold-width);
  background: var(--threshold-color, color-mix(in srgb, var(--_vector-accent-strong) 35%, transparent));
}

.threshold-band.ok {
  background: var(--threshold-color, color-mix(in srgb, var(--_vector-ok) 42%, transparent));
}

.threshold-band.warn {
  background: var(--threshold-color, color-mix(in srgb, var(--_vector-warning) 46%, transparent));
}

.threshold-band.danger {
  background: var(--threshold-color, color-mix(in srgb, var(--_vector-danger) 48%, transparent));
}

.threshold-band.active {
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--_vector-ink) 30%, transparent);
}

.allowed-track {
  left: var(--range-start);
  right: auto;
  width: var(--range-width);
  background: color-mix(in srgb, var(--_vector-allowed) 38%, transparent);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--_vector-accent-strong) 16%, transparent);
}

.default-marker {
  position: absolute;
  top: 32px;
  block-size: 24px;
  inline-size: 2px;
  background: var(--_vector-ink-soft);
  border-radius: 999px;
  opacity: 0.58;
  left: var(--rail-position);
}

.handle {
  position: absolute;
  top: 28px;
  display: grid;
  place-items: center;
  inline-size: 34px;
  block-size: 34px;
  margin-left: -17px;
  border: 0;
  background: transparent;
  color: var(--_vector-ink);
  cursor: ew-resize;
  padding: 0;
  outline-offset: 4px;
  left: var(--rail-position);
}

.handle,
.default-marker {
  z-index: 2;
}

.handle-dot {
  display: grid;
  place-items: center;
  inline-size: 18px;
  block-size: 18px;
  border: 2px solid var(--_vector-accent);
  background: var(--_vector-surface);
  color: var(--_vector-accent-strong);
  font-size: 0.65rem;
  font-weight: 800;
  line-height: 1;
}

.min .handle-dot,
.max .handle-dot {
  border-radius: 999px;
}

.value .handle-dot {
  inline-size: 22px;
  block-size: 22px;
  border-color: var(--_vector-accent-strong);
  background: var(--_vector-accent-strong);
  color: var(--_vector-surface);
  transform: rotate(45deg);
}

.value.locked .handle-dot {
  border-color: var(--_vector-accent-strong);
  background: var(--_vector-accent-soft);
  color: var(--_vector-accent-strong);
  transform: none;
  border-radius: 7px;
}

.handle-label,
.handle-value {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  transition: opacity 120ms ease, transform 120ms ease;
  white-space: nowrap;
}

.handle-label {
  top: -20px;
  color: var(--_vector-muted);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0;
}

.handle-value {
  top: 34px;
  color: var(--_vector-ink);
  font-size: 0.74rem;
  font-weight: 700;
}

.rail:hover .handle-label,
.rail:hover .handle-value,
.handle:focus .handle-label,
.handle:focus .handle-value,
.rail-control.dragging .handle-label,
.rail-control.dragging .handle-value,
.handle.active .handle-label,
.handle.active .handle-value {
  opacity: 1;
  transform: translateY(-1px);
}

.handle.hit .handle-dot {
  border-color: var(--_vector-danger);
  animation: railPulse 700ms ease-in-out infinite alternate;
}

.exact-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
  margin-top: 6px;
}

.embedded .exact-row {
  margin-right: 42px;
}

label {
  display: grid;
  gap: 5px;
  color: var(--_vector-muted);
  font-size: 0.76rem;
}

input,
select {
  min-height: 32px;
  width: 100%;
  border: 1px solid var(--_vector-line);
  border-radius: 8px;
  background: var(--_vector-surface);
  color: var(--_vector-ink);
  padding: 0 8px;
}

input:disabled,
select:disabled,
button:disabled {
  opacity: 0.58;
  background: var(--_vector-surface-strong);
  cursor: default;
}

.unit-row {
  margin-top: 8px;
}

.disabled {
  opacity: 0.65;
  pointer-events: none;
}

@keyframes railPulse {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.28);
  }
}
@media (max-width: 720px) {
  header {
    grid-template-columns: 14px minmax(0, 1fr) auto;
  }
  .lock-button {
    grid-column: 1/-1;
    justify-self: start;
  }
  .embedded .lock-button {
    grid-column: auto;
    justify-self: stretch;
  }
  .exact-row {
    grid-template-columns: 1fr;
  }
  .embedded .exact-row {
    margin-right: 0;
  }
}`;var Op,Pp,Lp,Kn=class extends W{constructor(){super();x(this,Op,"composition");this.scalar=new Rt(this);this.pointerDrag=new At(this);x(this,Pp);x(this,Lp,null);Gn(this)}static{this.properties=Wn}get role(){return D(this,Op)}set role(n){C(this,Op,n)}get railElement(){return D(this,Pp)}set railElement(n){C(this,Pp,n)}static{this.styles=[Z,Rp]}get _drag(){return D(this,Lp)}set _drag(n){C(this,Lp,n)}set state(n){this.scalar.setState(n)}get state(){return this.scalar.state}render(){if(!this.item)return w` <div class="empty">Select an item.</div> `;let n=this.scalar.domain(),r=this.scalar.min(),o=this.scalar.max(),i=$(this.value,n.min,n.max),s=!!this.constraint.locked,a=this.scalar.viewState(),c=this.scalar.pct(r),l=this.scalar.pct(o),u=this.scalar.pct(i),d=a.unit,p=Me(this.item,0,this.palette),f=a.minText,h=a.maxText,_=a.valueText,b=this.variant==="embedded",N=s?"Unlock value":"Lock value",P=()=>w`
      <button
        class=${F({"lock-button":!0,locked:s})}
        data-lock
        type="button"
        aria-pressed=${String(s)}
        aria-label=${N}
        title=${N}
        ?disabled=${this.disabled}
        @click=${()=>this._toggleLock()}
      >
        ${s?Wr:Zf}
      </button>
    `;return w`
      <section
        class=${F({"rail-control":!0,embedded:b,disabled:this.disabled,dragging:!!this._drag})}
        data-threshold=${a.thresholdKey||""}
      >
        ${b?"":w`<header>
              <span
                class="swatch"
                ${re({"--item-color":p})}
              ></span>
              <strong>${this.item.label||V(this.item.key)}</strong>
              <output>${_}${d}</output>
              ${P()}
            </header>`}

        <div class="rail-body">
          <div class="rail" data-rail>
            <div class="full-track"></div>
            <div
              class="allowed-track"
              ${re({"--range-start":`${c}%`,"--range-width":`${Math.max(0,l-c)}%`})}
            ></div>
            <div class="threshold-track" aria-hidden="true">
              ${Ni({thresholds:this.thresholds,value:this.value,percent:I=>this.scalar.pct(I),activeThreshold:I=>this.scalar.thresholdFor(I)})}
            </div>
            ${this.defaultValue==null?"":w`<span
                  class="default-marker"
                  ${re({"--rail-position":`${this.scalar.pct(this.defaultValue)}%`})}
                  title="Default"
                ></span>`}
            <button
              class=${F({handle:!0,min:!0,hit:!!this.scalar.handleHitClass("min"),active:this._drag?.handle==="min"})}
              data-handle="min"
              ${re({"--rail-position":`${c}%`})}
              type="button"
              aria-label=${`Minimum ${f}${d}`}
              ?disabled=${this.disabled}
              @pointerdown=${I=>this._startDrag(I,"min")}
              @keydown=${I=>this._keydown(I,"min")}
            >
              <span class="handle-label">min</span>
              <span class="handle-dot"></span>
              <span class="handle-value">${f}${d}</span>
            </button>
            <button
              class=${F({handle:!0,value:!0,locked:s,hit:!!this.scalar.handleHitClass("value"),active:this._drag?.handle==="value"})}
              data-handle="value"
              ${re({"--rail-position":`${u}%`})}
              type="button"
              aria-label=${`Value ${_}${d}`}
              ?disabled=${this.disabled}
              @pointerdown=${I=>this._startDrag(I,"value")}
              @keydown=${I=>this._keydown(I,"value")}
            >
              <span class="handle-label">value</span>
              <span class="handle-dot">${s?Wr:""}</span>
              <span class="handle-value">${_}${d}</span>
            </button>
            <button
              class=${F({handle:!0,max:!0,hit:!!this.scalar.handleHitClass("max"),active:this._drag?.handle==="max"})}
              data-handle="max"
              ${re({"--rail-position":`${l}%`})}
              type="button"
              aria-label=${`Maximum ${h}${d}`}
              ?disabled=${this.disabled}
              @pointerdown=${I=>this._startDrag(I,"max")}
              @keydown=${I=>this._keydown(I,"max")}
            >
              <span class="handle-label">max</span>
              <span class="handle-dot"></span>
              <span class="handle-value">${h}${d}</span>
            </button>
          </div>
          ${b?P():""}
        </div>

        <div class="exact-row">
          <label
            >Min<input
              data-exact="min"
              type="number"
              min=${a.domainMinText}
              max=${a.domainMaxText}
              step=${a.displayStep}
              .value=${f}
              ?disabled=${this.disabled}
              @change=${I=>this._emitInputTarget("min",Number(I.currentTarget.value),"vector-change",T("rail-input"))}
          /></label>
          <label
            >Value<input
              data-exact="value"
              type="number"
              min=${a.domainMinText}
              max=${a.domainMaxText}
              step=${a.displayStep}
              .value=${_}
              ?disabled=${s||this.disabled}
              @change=${I=>this._emitInputTarget("value",Number(I.currentTarget.value),"vector-change",T("rail-input"))}
          /></label>
          <label
            >Max<input
              data-exact="max"
              type="number"
              min=${a.domainMinText}
              max=${a.domainMaxText}
              step=${a.displayStep}
              .value=${h}
              ?disabled=${this.disabled}
              @change=${I=>this._emitInputTarget("max",Number(I.currentTarget.value),"vector-change",T("rail-input"))}
          /></label>
        </div>
        ${this.unitOptions.length>1?w`
              <label class="unit-row"
                >Unit
                <select
                  data-unit
                  .value=${this.scalar.unitOption()?.key||""}
                  ?disabled=${this.disabled}
                  @change=${I=>this.scalar.changeUnit(I.currentTarget.value)}
                >
                  ${this.unitOptions.map(I=>w`<option
                        value=${I.key}
                        ?selected=${I.key===this.scalar.unitOption()?.key}
                      >
                        ${I.label}
                      </option>`)}
                </select>
              </label>
            `:Q}
      </section>
    `}_startDrag(n,r){if(!(this.disabled||n.button>0)){if(n.preventDefault(),r==="value"&&this.constraint.locked){this._emitLockedHit();return}this._drag={handle:r,transactionId:T("rail"),startX:n.clientX,startValue:this.scalar.handleValue(r),latestTarget:this.scalar.handleValue(r)},this.pointerDrag.start({move:o=>this._dragMove(o),end:()=>this._dragEnd(),cancel:()=>this._cancelDrag()})}}_dragMove(n){if(!this._drag)return;let r=this.railElement,o=Math.max(1,r?.getBoundingClientRect?.().width||1),i=this.scalar.domain(),s=(n.clientX-this._drag.startX)/o*(i.max-i.min),a=ae(this._drag.startValue+s,this.scalar.step());this._drag.latestTarget=a,this._emitHandleTarget(this._drag.handle,a,"vector-preview",this._drag.transactionId)}_dragEnd(){if(!this._drag)return;let n=this._drag.handle,r=this._drag.transactionId,o=this._drag.latestTarget??this._drag.startValue;this._emitHandleTarget(n,o,"vector-change",r),this._drag=null,this.requestUpdate()}_cancelDrag(){this._drag&&(S(this,"vector-cancel",{source:"constraint",role:this.role,transactionId:this._drag.transactionId,key:this.item?.key}),this._drag=null,this.requestUpdate())}_keydown(n,r){if(this.disabled)return;let o=this.scalar.step(),i=null;if((n.key===" "||n.key==="Enter")&&r==="value"&&this.constraint.locked){n.preventDefault(),this._toggleLock();return}if(r==="value"&&this.constraint.locked){["ArrowLeft","ArrowDown","ArrowRight","ArrowUp","Home","End"].includes(n.key)&&(n.preventDefault(),this._emitLockedHit());return}if(n.key==="ArrowRight"||n.key==="ArrowUp"?i=this.scalar.handleValue(r)+o:n.key==="ArrowLeft"||n.key==="ArrowDown"?i=this.scalar.handleValue(r)-o:n.key==="Home"?i=this.scalar.domain().min:n.key==="End"?i=this.scalar.domain().max:n.key==="Escape"&&this._cancelDrag(),i==null)return;n.preventDefault();let s=T("rail-key");this._emitHandleTarget(r,i,"vector-preview",s),this._emitHandleTarget(r,i,"vector-change",s)}_emitHandleTarget(n,r,o,i){if(!this.item?.key)return;let s=this.scalar.unitOption();if(n==="value"){if(this.constraint.locked){this._emitLockedHit(i);return}let u=ae(r,this.scalar.step()),d=$(u,this.scalar.min(),this.scalar.max()),p=this.scalar.thresholdFor(d),f=[];u<this.scalar.min()&&f.push(oe(this.item.key,"min",`${this.item.label||V(this.item.key)} hit minimum ${y(this.scalar.toDisplay(this.scalar.min()),this.scalar.places())}${this.scalar.unit()}.`)),u>this.scalar.max()&&f.push(oe(this.item.key,"max",`${this.item.label||V(this.item.key)} hit maximum ${y(this.scalar.toDisplay(this.scalar.max()),this.scalar.places())}${this.scalar.unit()}.`));let h={source:"inspector",role:this.role,transactionId:i,key:this.item.key,previousValue:{[this.item.key]:this.value},requestedValue:{[this.item.key]:u},proposedValue:{[this.item.key]:d},delta:y(d-this.value,4),unitKey:s?.key,basis:s?.basis??this.basis??this.item?.basis,measurementScope:s?.scope??this.measurementScope,measurementMeasure:s?.measure??this.measurementMeasure,displayValue:this.scalar.toDisplay(d),canonicalValue:d,thresholdKey:p?.key,measurementSystem:this.measurementSystem||s?.system,hits:f};S(this,o,h),f.length&&S(this,"vector-constraint-hit",h);return}let a=this.scalar.domain(),c=ae($(r,a.min,a.max),this.scalar.step()),l=n==="min"?{min:c}:{max:c};S(this,o,{source:"constraint",role:"constraint",transactionId:i,key:this.item.key,constraintRole:this.role,constraint:l,unitKey:s?.key,basis:s?.basis||this.basis||this.item?.basis,measurementScope:s?.scope||this.measurementScope,measurementMeasure:s?.measure||this.measurementMeasure,displayValue:this.scalar.toDisplay(c),canonicalValue:c,measurementSystem:this.measurementSystem||s?.system})}_emitInputTarget(n,r,o,i){this._emitHandleTarget(n,this.scalar.toCanonical(r),o,i)}_toggleLock(){this.disabled||S(this,"vector-change",{source:"constraint",role:"constraint",transactionId:T("rail-lock"),key:this.item?.key,constraintRole:this.role,constraint:{locked:!this.constraint.locked}})}_emitLockedHit(n=T("rail-locked")){let r=oe(this.item?.key??"constraint","locked",`${this.item?.label??V(this.item?.key??"constraint")} is locked.`);S(this,"vector-constraint-hit",{source:"constraint",role:this.role,transactionId:n,key:this.item?.key,unitKey:this.scalar.unitOption()?.key,basis:this.scalar.unitOption()?.basis||this.basis||this.item?.basis,measurementScope:this.scalar.unitOption()?.scope||this.measurementScope,measurementMeasure:this.scalar.unitOption()?.measure||this.measurementMeasure,measurementSystem:this.measurementSystem||this.scalar.unitOption()?.system,hits:[r]})}};Op=new WeakMap,Pp=new WeakMap,Lp=new WeakMap,m([pt("[data-rail]")],Kn.prototype,"railElement",1),m([jn()],Kn.prototype,"_drag",1);var ki=class extends he{constructor(){super(),this._listType="ingredient",this._searchPlaceholder="Search additives"}};var $p=U`:host {
  display: block;
}

.empty,
.inspector {
  border: 1px solid var(--_vector-line);
  border-radius: 8px;
  padding: 12px;
  background: var(--_vector-surface-alt);
}

.empty {
  color: var(--_vector-muted);
}

header {
  display: grid;
  grid-template-columns: 14px minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
  margin-bottom: 10px;
}

.swatch {
  inline-size: 12px;
  block-size: 12px;
  border-radius: 999px;
  background: var(--item-color);
}

.range {
  width: 100%;
}

.stepper {
  display: grid;
  grid-template-columns: 38px 1fr 38px;
  gap: 6px;
  margin-top: 8px;
}

button,
input {
  min-height: 34px;
  border: 1px solid var(--_vector-line);
  border-radius: 8px;
  background: var(--_vector-surface);
  color: var(--_vector-ink);
}

input {
  padding: 0 8px;
}`;var gt=class extends W{static{this.styles=[Z,$p]}#e;get item(){return this.#e}set item(e){this.#e=e}#t;get value(){return this.#t}set value(e){this.#t=e}#n;get constraint(){return this.#n}set constraint(e){this.#n=e}#r;get role(){return this.#r}set role(e){this.#r=e}#o;get palette(){return this.#o}set palette(e){this.#o=e}constructor(){super(),this.item=null,this.value=0,this.constraint={},this.role="composition",this.theme={},this.palette=se}render(){if(!this.item)return w` <div class="empty">Select an oil or quality.</div> `;let e=Number(this.constraint.min??this.item.min??0),n=Number(this.constraint.max??this.item.max??100),r=Number(this.constraint.step??this.item.step??(this.role==="composition"?.1:1));return w`
      <section class="inspector">
        <header>
          <span
            class="swatch"
            ${re({"--item-color":Me(this.item,0,this.palette)})}
          ></span>
          <strong>${this.item.label||V(this.item.key)}</strong>
          <span
            >${y(this.value,1)}${this.role==="composition"?"%":""}</span
          >
        </header>
        <input
          class="range"
          type="range"
          min=${e}
          max=${n}
          step=${r}
          .value=${String(this.value)}
          ?disabled=${!!this.constraint.locked}
          @input=${o=>this._emit(Number(o.currentTarget.value),"vector-preview")}
          @change=${o=>this._emit(Number(o.currentTarget.value),"vector-change")}
        />
        <div class="stepper">
          <button
            data-delta=${-r}
            ?disabled=${!!this.constraint.locked}
            @click=${()=>this._emit(this.value-r,"vector-change")}
          >
            -
          </button>
          <input
            class="exact"
            type="number"
            min=${e}
            max=${n}
            step=${r}
            .value=${String(y(this.value,2))}
            ?disabled=${!!this.constraint.locked}
            @change=${o=>this._emit(Number(o.currentTarget.value),"vector-change")}
          />
          <button
            data-delta=${r}
            ?disabled=${!!this.constraint.locked}
            @click=${()=>this._emit(this.value+r,"vector-change")}
          >
            +
          </button>
        </div>
      </section>
    `}_emit(e,n){let r=this.item;if(!r)return;let o=$(e,this.constraint.min??r.min??0,this.constraint.max??r.max??100);S(this,n,{source:"inspector",role:this.role,transactionId:T("inspector"),key:r.key,requestedValue:{[r.key]:o},proposedValue:{[r.key]:o},delta:y(o-this.value,4)})}};m([g({attribute:!1})],gt.prototype,"item",1),m([g({attribute:!1})],gt.prototype,"value",1),m([g({attribute:!1})],gt.prototype,"constraint",1),m([g({attribute:!1})],gt.prototype,"role",1),m([g({attribute:!1})],gt.prototype,"palette",1);var Vp=U`:host {
  display: block;
}

.chart-shell {
  display: grid;
  gap: 12px;
  align-items: center;
  justify-items: center;
  min-width: 0;
}

.pie-frame {
  position: relative;
  display: grid;
  place-items: center;
  inline-size: 100%;
  max-inline-size: 330px;
  min-inline-size: 220px;
}

.pie {
  inline-size: 100%;
  touch-action: none;
}

.decorator-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

::slotted([slot=slice-decorator]) {
  position: absolute;
  left: var(--decorator-x, -999px);
  top: var(--decorator-y, -999px);
  transform: translate(-50%, -50%) translate(var(--decorator-offset-x, 0px), var(--decorator-offset-y, 0px));
  pointer-events: none;
}

.base {
  fill: var(--_vector-surface-strong);
}

.hole {
  fill: var(--_vector-surface);
  stroke: var(--_vector-line);
  stroke-width: 1;
}

.slice {
  stroke: var(--_vector-surface);
  stroke-width: 1.5;
  cursor: ns-resize;
  transition: transform 120ms ease, stroke-width 120ms ease, filter 120ms ease;
  outline: none;
}

.slice:hover,
.slice:focus,
.slice.selected {
  filter: brightness(1.04);
  stroke: var(--_vector-ink);
  stroke-width: 2;
}

.slice.hit {
  stroke: var(--_vector-danger);
  stroke-width: 3;
  animation: pulse 900ms ease-in-out infinite alternate;
}

.center {
  font: 700 18px system-ui, sans-serif;
  fill: var(--_vector-ink);
}

.center-label {
  font: 11px system-ui, sans-serif;
  fill: var(--_vector-muted);
}

.legend {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(138px, 1fr));
  gap: 6px;
  inline-size: 100%;
  min-width: 0;
}

.legend-item {
  display: grid;
  grid-template-columns: 14px minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
  min-height: 32px;
  border: 1px solid var(--_vector-line);
  border-radius: 8px;
  background: var(--_vector-surface);
  color: var(--_vector-ink);
  text-align: left;
  cursor: pointer;
}

.legend-item.selected {
  border-color: var(--_vector-accent-strong);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--_vector-accent-strong) 12%, transparent);
}

.after-legend {
  inline-size: 100%;
  min-width: 0;
}

::slotted([slot=after-legend]) {
  display: block;
  inline-size: 100%;
}

.swatch {
  inline-size: 12px;
  block-size: 12px;
  border-radius: 999px;
  background: var(--item-color);
}

.disabled {
  opacity: 0.55;
  pointer-events: none;
}

@keyframes pulse {
  from {
    stroke-width: 2.5;
  }
  to {
    stroke-width: 5;
  }
}`;function Ri(t,e,n,r,o){let i=Number(t.min??0),s=Number(t.max??100),a=s===i?0:$((Number(e||0)-i)/(s-i),0,1);return eo(Qn(n,r),o*a)}function Qn(t,e){return-Math.PI/2+t*(Math.PI*2/Math.max(1,e))}function eo(t,e){return{x:y(Math.cos(t)*e,2),y:y(Math.sin(t)*e,2)}}function jp(t){let e=Math.max(1,Math.hypot(t.x,t.y));return{x:y(t.x+t.x/e*15,2),y:y(t.y+t.y/e*15+3,2)}}function Hp(t,e){return Zn(Array.from({length:t},(n,r)=>eo(Qn(r,t),e)))}function Up(t,e){return Fp(t)-Fp(e)}function Fp(t){let e=t.dataset||{};return"lockBadge"in e?0:e.limitType==="min"?1:e.limitType==="max"?2:3}function Zn(t){return t.filter(e=>e!==null).map(e=>`${e.x},${e.y}`).join(" ")}function Bp(t,e,n){if(Math.abs(e-t)>=359.99)return["M 0 0",`m ${-n}, 0`,`a ${n},${n} 0 1,0 ${n*2},0`,`a ${n},${n} 0 1,0 ${-n*2},0`,"Z"].join(" ");let r=Ai(t,n),o=Ai(e,n),i=Math.abs(e-t)>180?1:0;return`M 0 0 L ${r.x} ${r.y} A ${n} ${n} 0 ${i} 1 ${o.x} ${o.y} Z`}function Ai(t,e){let n=Oi(t);return{x:y(Math.cos(n)*e,2),y:y(Math.sin(n)*e,2)}}function Oi(t){return t*Math.PI/180}var qp,zp,Wp,Gp,Kp,Qp,Zp,Yp,Jp,Xp,eh,th,nh,rh,oh,le=class extends W{constructor(){super();this.pointerDrag=new At(this);x(this,qp);x(this,zp);x(this,Wp);x(this,Gp);x(this,Kp);x(this,Qp);x(this,Zp);x(this,Yp);x(this,Jp);x(this,Xp);x(this,eh);x(this,th);x(this,nh);x(this,rh);x(this,oh);this.items=[],this.value={},this.constraints={},this.total=100,this.selectedKey="",this.hits=[],this.disabled=!1,this._drag=null,this.precision=null,this.centerValue=null,this.centerLabel="",this.centerPrecision=null,this.theme={},this.palette=se,this._decoratorPositions=new Map}get decoratorSlot(){return D(this,qp)}set decoratorSlot(n){C(this,qp,n)}get chartShell(){return D(this,zp)}set chartShell(n){C(this,zp,n)}static{this.styles=[Z,Vp]}get _drag(){return D(this,Wp)}set _drag(n){C(this,Wp,n)}get items(){return D(this,Gp)}set items(n){C(this,Gp,n)}get value(){return D(this,Kp)}set value(n){C(this,Kp,n)}get constraints(){return D(this,Qp)}set constraints(n){C(this,Qp,n)}get total(){return D(this,Zp)}set total(n){C(this,Zp,n)}get selectedKey(){return D(this,Yp)}set selectedKey(n){C(this,Yp,n)}get hits(){return D(this,Jp)}set hits(n){C(this,Jp,n)}get disabled(){return D(this,Xp)}set disabled(n){C(this,Xp,n)}get precision(){return D(this,eh)}set precision(n){C(this,eh,n)}get centerValue(){return D(this,th)}set centerValue(n){C(this,th,n)}get centerLabel(){return D(this,nh)}set centerLabel(n){C(this,nh,n)}get centerPrecision(){return D(this,rh)}set centerPrecision(n){C(this,rh,n)}get palette(){return D(this,oh)}set palette(n){C(this,oh,n)}set state(n){this._setPieState(n??{})}get state(){return{items:this.items,value:this.value,constraints:this.constraints,total:this.total,selectedKey:this.selectedKey,hits:this.hits,disabled:this.disabled,precision:this.precision,centerValue:this.centerValue,centerLabel:this.centerLabel,centerPrecision:this.centerPrecision,theme:this.theme,palette:this.palette}}render(){let n=this._orderedEntries(),r=n.reduce((_,[,b])=>_+Number(b??0),0)||this.total,o=new Set(this.hits.map(_=>_.key)),i=this._places(),s=this.centerValue!=null,a=s?this.centerValue:r,c=this.centerPrecision==null?i:Number(this.centerPrecision||0),l=s?typeof a=="number"?pe(a,c):String(a):`${pe(r,i)}%`,u=this.centerLabel||"total",d=-90,p=new Map,f=te(n,([_])=>_,([_,b],N)=>{let P=this._itemFor(_,N),I=Me(P,N,this.palette),X=!!(this.constraints[_]??{}).locked,Y=Number(b??0)/r*360,k=d,ve=d+Y;d=ve;let dn=_===this.selectedKey,je=o.has(_),He=(k+ve)/2,Ye=dn||je?5:0,E=Math.cos(Oi(He))*Ye,Uc=Math.sin(Oi(He))*Ye,Bc=X?" locked":"",qc=pe(b,i),zc=Ai(He,61.5);return p.set(_,{x:y((zc.x+E+104)/208*100,4),y:y((zc.y+Uc+104)/208*100,4)}),Ve`
        <g class="slice-wrap" transform="translate(${y(E,2)} ${y(Uc,2)})">
          <path
            class=${F({slice:!0,selected:dn,hit:je})}
            d="${Bp(k,ve,82)}"
            fill=${I}
            tabindex="0"
            role="button"
            aria-label=${`${P.label} ${qc} percent${Bc}`}
            data-key=${_}
            @click=${()=>this._select(_)}
            @keydown=${Jn=>this._keydown(Jn,_)}
            @wheel=${Jn=>this._wheel(Jn,_)}
            @pointerdown=${Jn=>this._startDrag(Jn,_)}
          >
            <title>${P.label}: ${qc}%${Bc}</title>
          </path>
        </g>
      `});this._decoratorPositions=p;let h=te(n,([_])=>_,([_,b],N)=>{let P=this._itemFor(_,N),I=!!(this.constraints[_]||{}).locked;return w`
          <button
            class=${F({"legend-item":!0,selected:_===this.selectedKey})}
            data-key=${_}
            @click=${()=>this._select(_)}
          >
            <span
              class="swatch"
              ${re({"--item-color":Me(P,N,this.palette)})}
            ></span>
            <span>${P.label}</span>
            <strong
              >${I?`${Wr} `:""}${pe(b,i)}%</strong
            >
          </button>
        `});return w`
      <div class=${F({"chart-shell":!0,disabled:this.disabled})}>
        <div class="pie-frame">
          <svg
            class="pie"
            viewBox="-104 -104 208 208"
            aria-label="Oil percentage pie chart"
          >
            <circle class="base" cx="0" cy="0" r="82"></circle>
            ${f}
            <circle class="hole" cx="0" cy="0" r="32"></circle>
            <text class="center" x="0" y="-3" text-anchor="middle">
              ${l}
            </text>
            <text class="center-label" x="0" y="13" text-anchor="middle">
              ${u}
            </text>
          </svg>
          <div class="decorator-layer">
            <slot
              name="slice-decorator"
              @slotchange=${()=>this._positionDecorators()}
            ></slot>
          </div>
        </div>
        <div class="legend">${h}</div>
        <div class="after-legend">
          <slot name="after-legend"></slot>
        </div>
      </div>
    `}updated(){this._positionDecorators()}_patchPieState(n){Object.assign(this,n)}_setPieState(n){let r={items:n.items??[],value:ne(n.value??{}),constraints:n.constraints??{},total:Number(n.total??100),selectedKey:n.selectedKey??"",hits:n.hits??[],disabled:!!n.disabled,precision:n.precision==null?null:Number(n.precision),centerValue:n.centerValue??null,centerLabel:n.centerLabel??"",centerPrecision:n.centerPrecision==null?null:Number(n.centerPrecision),theme:n.theme??{},palette:Jr(n.palette)};this.items=r.items,this.value=r.value,this.constraints=r.constraints,this.total=r.total,this.selectedKey=r.selectedKey,this.hits=r.hits,this.disabled=r.disabled,this.precision=r.precision,this.centerValue=r.centerValue,this.centerLabel=r.centerLabel,this.centerPrecision=r.centerPrecision,this.theme=r.theme,this.palette=r.palette}positionDecorators(){this._positionDecorators()}_positionDecorators(){let n=this.decoratorSlot?.assignedElements({flatten:!0})??[],r=new Map;n.forEach(o=>{let i=o.dataset.key,s=i?this._decoratorPositions.get(i):void 0;if(!i||!s){o.hidden=!0;return}r.has(i)||r.set(i,{point:s,decorators:[]}),r.get(i)?.decorators.push(o)}),r.forEach(({point:o,decorators:i})=>{i.sort(Up),i.forEach((s,a)=>{let c=(a-(i.length-1)/2)*18;s.hidden=!1,s.style?.setProperty?.("--decorator-x",`${o.x}%`),s.style?.setProperty?.("--decorator-y",`${o.y}%`),s.style?.setProperty?.("--decorator-offset-x",`${y(c,2)}px`),s.style?.setProperty?.("--decorator-offset-y","0px")})})}_select(n){this.disabled||(this.selectedKey=n,S(this,"vector-select",{source:"pie",role:"composition",transactionId:T("select"),key:n}))}_startDrag(n,r){this.disabled||n.button>0||(n.preventDefault(),this._select(r),this._drag={key:r,transactionId:T("pie"),startX:n.clientX,startY:n.clientY,startValue:ne(this.value),latest:null},this.pointerDrag.start({move:o=>this._dragMove(o),end:o=>this._dragEnd(o),cancel:()=>this._cancelDrag()}))}_dragMove(n){if(!this._drag)return;let r=this.constraints[this._drag.key]??{},o=Number(r.step??1),i=this._drag.startY-n.clientY+(n.clientX-this._drag.startX),s=ae(i/10,o),a=Number(this._drag.startValue[this._drag.key]??0)+s;this._previewTarget(a)}_dragEnd(n){if(!this._drag)return;let r=this.chartShell?.getBoundingClientRect();if(r?n.clientX<r.left-20||n.clientX>r.right+20||n.clientY<r.top-20||n.clientY>r.bottom+20:!1){this._cancelDrag();return}let i=this._drag.latest;i&&S(this,"vector-change",i),this._drag=null}_cancelDrag(){this._drag&&(S(this,"vector-cancel",{source:"pie",role:"composition",transactionId:this._drag.transactionId,previousValue:this._drag.startValue}),this._drag=null)}_wheel(n,r){if(this.disabled)return;n.preventDefault();let o=this.constraints[r]??{},i=Number(o.step??1),s=n.deltaY<0?1:-1,a=Number(this.value[r]??0)+s*i,c=T("pie-wheel"),l=this._detailForTarget(r,a,c,this.value);S(this,"vector-preview",l),S(this,"vector-change",l)}_keydown(n,r){let o=this.constraints[r]??{},i=Number(o.step??1),s=null;if(n.key==="ArrowUp"||n.key==="ArrowRight"?s=Number(this.value[r]??0)+i:n.key==="ArrowDown"||n.key==="ArrowLeft"?s=Number(this.value[r]??0)-i:n.key==="Home"?s=Number(o.min??0):n.key==="End"?s=Number(o.max??this.total):n.key==="Escape"&&(this._cancelDrag(),S(this,"vector-cancel",{source:"pie",role:"composition",transactionId:T("pie-cancel"),previousValue:this.value})),s==null)return;n.preventDefault();let a=this._detailForTarget(r,s,T("pie-key"),this.value);S(this,"vector-preview",a),S(this,"vector-change",a)}_previewTarget(n){let r=this._drag;if(!r)return;let o=this._detailForTarget(r.key,n,r.transactionId,r.startValue);r.latest=o,S(this,"vector-preview",o),o.hits?.length&&S(this,"vector-constraint-hit",o)}_detailForTarget(n,r,o,i){let s=Mt({value:i,key:n,target:r,constraints:this.constraints,items:this.items,total:this.total});return{source:"pie",role:"composition",transactionId:o,key:n,previousValue:i,requestedValue:M(v({},i),{[n]:r}),proposedValue:s.vector,delta:s.delta,hits:s.hits}}_orderedEntries(){let n=this.items.map(o=>o.key);return[...new Set([...n,...Object.keys(this.value||{})])].filter(o=>o in this.value).sort((o,i)=>{let s=this.items.find(c=>c.key===o),a=this.items.find(c=>c.key===i);return Number(s?.order||0)-Number(a?.order||0)}).map(o=>[o,Number(this.value[o]??0)])}_itemFor(n,r){return this.items.find(o=>o.key===n)??{key:n,label:V(n),color:Cc(r,this.palette)}}_places(){if(Number.isFinite(this.precision))return Math.max(0,Number(this.precision));let n=Object.values(this.constraints||{}).map(r=>Number(r?.step)).filter(r=>Number.isFinite(r)&&r>0);return n.length?Math.max(...n.map(r=>zn(r))):1}};qp=new WeakMap,zp=new WeakMap,Wp=new WeakMap,Gp=new WeakMap,Kp=new WeakMap,Qp=new WeakMap,Zp=new WeakMap,Yp=new WeakMap,Jp=new WeakMap,Xp=new WeakMap,eh=new WeakMap,th=new WeakMap,nh=new WeakMap,rh=new WeakMap,oh=new WeakMap,m([pt('slot[name="slice-decorator"]')],le.prototype,"decoratorSlot",1),m([pt(".chart-shell")],le.prototype,"chartShell",1),m([jn()],le.prototype,"_drag",1),m([g({attribute:!1})],le.prototype,"items",1),m([g({attribute:!1})],le.prototype,"value",1),m([g({attribute:!1})],le.prototype,"constraints",1),m([g({attribute:!1})],le.prototype,"total",1),m([g({attribute:!1})],le.prototype,"selectedKey",1),m([g({attribute:!1})],le.prototype,"hits",1),m([g({attribute:!1})],le.prototype,"disabled",1),m([g({attribute:!1})],le.prototype,"precision",1),m([g({attribute:!1})],le.prototype,"centerValue",1),m([g({attribute:!1})],le.prototype,"centerLabel",1),m([g({attribute:!1})],le.prototype,"centerPrecision",1),m([g({attribute:!1})],le.prototype,"palette",1);var ih=U`:host {
  display: block;
}

* {
  box-sizing: border-box;
}

.empty,
.quantity-input {
  border: 1px solid var(--_vector-line);
  border-radius: 8px;
  padding: 10px 12px;
  background: var(--_vector-surface-alt);
}

.empty {
  color: var(--_vector-muted);
}

label {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(118px, 0.8fr);
  gap: 10px;
  align-items: center;
  color: var(--_vector-ink);
  font-size: 0.84rem;
  font-weight: 700;
}

.input-wrap {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  border: 1px solid var(--_vector-line);
  border-radius: 8px;
  background: var(--_vector-surface);
  overflow: hidden;
}

input {
  min-width: 0;
  min-height: 34px;
  border: 0;
  background: transparent;
  color: var(--_vector-ink);
  padding: 0 8px;
  text-align: right;
  font: inherit;
}

.unit-suffix {
  min-width: 46px;
  padding: 0 8px 0 2px;
  color: var(--_vector-muted);
  font-size: 0.78rem;
  font-weight: 700;
}

input:disabled {
  opacity: 0.58;
  cursor: default;
}

.disabled {
  opacity: 0.65;
  pointer-events: none;
}

@media (max-width: 720px) {
  label {
    grid-template-columns: 1fr;
  }
}`;var sh,Pi=class extends W{constructor(){super();x(this,sh,"composition");this.scalar=new Rt(this);Gn(this)}static{this.properties=Wn}get role(){return D(this,sh)}set role(n){C(this,sh,n)}static{this.styles=[Z,ih]}set state(n){this.scalar.setState(n)}get state(){return this.scalar.state}render(){if(!this.item)return w` <div class="empty">Select an item.</div> `;let n=this.scalar.viewState(),r=this.scalar.unitOption();return w`
      <section
        class=${F({"quantity-input":!0,disabled:this.disabled})}
      >
        <label>
          <span>${this.item.label||V(this.item.key)}</span>
          <span class="input-wrap">
            <input
              data-quantity
              type="number"
              min=${n.domainMinText}
              max=${n.domainMaxText}
              step=${n.displayStep}
              .value=${n.valueText}
              ?disabled=${this.disabled}
              @change=${o=>this._emitQuantityValue(Number(o.currentTarget.value),"vector-change",T("quantity-input"))}
            />
            <span class="unit-suffix">${r?.symbol||n.unit}</span>
          </span>
        </label>
      </section>
    `}_emitQuantityValue(n,r,o){if(!this.item?.key)return;let i=this.scalar.unitOption(),s=this.scalar.toCanonical(n),a=ae(s,this.scalar.step()),c=$(a,this.scalar.min(),this.scalar.max());S(this,r,{source:"inspector",role:this.role,transactionId:o,key:this.item.key,previousValue:{[this.item.key]:this.value},requestedValue:{[this.item.key]:a},proposedValue:{[this.item.key]:c},delta:y(c-this.value,4),unitKey:i?.key,basis:i?.basis||this.basis||this.item?.basis,measurementScope:i?.scope||this.measurementScope,measurementMeasure:i?.measure||this.measurementMeasure,displayValue:this.scalar.toDisplay(c),canonicalValue:c,measurementSystem:this.measurementSystem||i?.system,hits:[]})}};sh=new WeakMap;var ah=U`:host {
  display: block;
}

.chart-shell {
  display: grid;
  gap: 12px;
  place-items: center;
  min-width: 0;
}

.radar {
  inline-size: 100%;
  max-inline-size: 460px;
  min-inline-size: 260px;
  overflow: visible;
  touch-action: none;
}

.grid-ring {
  fill: none;
  stroke: var(--_vector-line);
  stroke-width: 0.8;
}

.axis {
  stroke: var(--_vector-line);
  stroke-width: 0.8;
}

.axis-label {
  font: 10px system-ui, sans-serif;
  fill: var(--_vector-ink-soft);
}

.axis-label.selected {
  font-weight: 800;
  fill: var(--_vector-accent-strong);
}

.preferred {
  fill: color-mix(in srgb, var(--_vector-accent-strong) 8%, transparent);
  stroke: color-mix(in srgb, var(--_vector-accent-strong) 35%, transparent);
  stroke-dasharray: 3 3;
}

.reachable {
  fill: color-mix(in srgb, var(--_vector-reach) 13%, transparent);
  stroke: color-mix(in srgb, var(--_vector-reach) 30%, transparent);
}

.current {
  fill: color-mix(in srgb, var(--_vector-accent) 22%, transparent);
  stroke: var(--_vector-accent);
  stroke-width: 2;
}

.preview {
  fill: color-mix(in srgb, var(--_vector-preview) 16%, transparent);
  stroke: var(--_vector-preview);
  stroke-width: 2;
  stroke-dasharray: 4 3;
}

.target-dot {
  fill: var(--_vector-preview);
  stroke: var(--_vector-surface);
  stroke-width: 1;
}

.marble {
  fill: var(--_vector-surface);
  stroke: var(--_vector-accent);
  stroke-width: 2;
  cursor: grab;
  outline: none;
}

.marble:hover,
.marble:focus,
.marble.selected {
  stroke: var(--_vector-ink);
  stroke-width: 3;
}

.marble.hit {
  stroke: var(--_vector-danger);
  animation: pulse 900ms ease-in-out infinite alternate;
}

.value-label {
  font: 700 10px system-ui, sans-serif;
  fill: var(--_vector-ink);
  stroke: var(--_vector-surface);
  stroke-width: 3;
  paint-order: stroke;
  pointer-events: none;
}

.value-label.selected {
  fill: var(--_vector-accent-strong);
}

.after-chart {
  inline-size: 100%;
  min-width: 0;
}

::slotted([slot=after-chart]) {
  display: block;
  inline-size: 100%;
}

.disabled {
  opacity: 0.55;
  pointer-events: none;
}

@keyframes pulse {
  from {
    r: 6;
  }
  to {
    r: 8;
  }
}`;var ch,lh,uh,dh,fh,ph,hh,mh,gh,yh,vh,bh,_h,de=class extends W{constructor(){super();this.pointerDrag=new At(this);x(this,ch);x(this,lh,null);x(this,uh);x(this,dh);x(this,fh);x(this,ph);x(this,hh);x(this,mh);x(this,gh);x(this,yh);x(this,vh);x(this,bh);x(this,_h);this.axes=[],this.value={},this.previewValue=null,this.targetValue=null,this.reachableRange={},this.preferredRange={},this.selectedKey="",this.hits=[],this.disabled=!1,this._drag=null,this.precision=null,this.showValues=!1,this.theme={}}get svgElement(){return D(this,ch)}set svgElement(n){C(this,ch,n)}static{this.styles=[Z,ah]}get _drag(){return D(this,lh)}set _drag(n){C(this,lh,n)}get axes(){return D(this,uh)}set axes(n){C(this,uh,n)}get value(){return D(this,dh)}set value(n){C(this,dh,n)}get previewValue(){return D(this,fh)}set previewValue(n){C(this,fh,n)}get targetValue(){return D(this,ph)}set targetValue(n){C(this,ph,n)}get reachableRange(){return D(this,hh)}set reachableRange(n){C(this,hh,n)}get preferredRange(){return D(this,mh)}set preferredRange(n){C(this,mh,n)}get selectedKey(){return D(this,gh)}set selectedKey(n){C(this,gh,n)}get hits(){return D(this,yh)}set hits(n){C(this,yh,n)}get disabled(){return D(this,vh)}set disabled(n){C(this,vh,n)}get precision(){return D(this,bh)}set precision(n){C(this,bh,n)}get showValues(){return D(this,_h)}set showValues(n){C(this,_h,n)}set state(n){this._setRadarState(n??{})}get state(){return{axes:this.axes,value:this.value,previewValue:this.previewValue,targetValue:this.targetValue,reachableRange:this.reachableRange,preferredRange:this.preferredRange,selectedKey:this.selectedKey,hits:this.hits,disabled:this.disabled,precision:this.precision,showValues:this.showValues,theme:this.theme}}render(){let n=this.axes,r=new Set(this.hits.map(b=>b.key)),o=this._pointsFor(this.value,90),i=this.previewValue?this._pointsFor(this.previewValue,90):[],s=this.targetValue?this._pointsFor(this.targetValue,90):[],a=this.previewValue??this.value,c=this._pointsFor(a,90),l=this._pointsForRange("preferredMax",90),u=this._pointsForRange("reachableMax",90),d=te([.25,.5,.75,1],b=>b,b=>Ve`
      <polygon class="grid-ring" points=${Hp(n.length,90*b)}></polygon>
    `),p=te(n,b=>b.key,(b,N)=>{let P=eo(Qn(N,n.length),96),I=eo(Qn(N,n.length),112);return Ve`
        <line class="axis" x1="0" y1="0" x2="${P.x}" y2="${P.y}"></line>
        <text class=${F({"axis-label":!0,selected:b.key===this.selectedKey})}
          x=${I.x} y=${I.y} text-anchor="middle">${b.label}</text>
      `}),f=te(n,b=>b.key,(b,N)=>{let P=Ri(b,Number(a[b.key]??0),N,n.length,90),I=r.has(b.key),X=pe(a[b.key]??0,this._places(b));return Ve`
        <circle class=${F({marble:!0,selected:b.key===this.selectedKey,hit:I})}
          cx=${P.x} cy=${P.y} r="6" tabindex="0" role="slider"
          aria-label=${`${b.label} ${X}`} data-key=${b.key}
          @click=${()=>this._select(b.key)}
          @pointerdown=${Y=>this._startDrag(Y,b.key)}
          @keydown=${Y=>this._keydown(Y,b.key)}>
          <title>${b.label}: ${X}</title>
        </circle>
      `}),h=this.showValues?te(c,(b,N)=>n[N]?.key||N,(b,N)=>{let P=n[N],I=jp(b);return Ve`
        <text class=${F({"value-label":!0,selected:P.key===this.selectedKey})}
          x=${I.x} y=${I.y} text-anchor="middle">
          ${pe(a[P.key]??0,this._places(P))}
        </text>
      `}):"",_=te(s,(b,N)=>n[N]?.key||N,(b,N)=>{let P=n[N];return Ve`<circle class="target-dot" cx=${b.x} cy=${b.y} r="3.5"><title>${P.label} target</title></circle>`});return w`
      <div class=${F({"chart-shell":!0,disabled:this.disabled})}>
        <svg
          class="radar"
          viewBox="-130 -124 260 248"
          aria-label="Soap quality radar chart"
        >
          ${d} ${p}
          ${l.length?Ve`<polygon class="preferred" points=${Zn(l)}><title>Preferred range</title></polygon>`:""}
          ${u.length?Ve`<polygon class="reachable" points=${Zn(u)}><title>Axis reach</title></polygon>`:""}
          <polygon class="current" points=${Zn(o)}></polygon>
          ${i.length?Ve`<polygon class="preview" points=${Zn(i)}></polygon>`:""}
          ${_} ${f} ${h}
        </svg>
        <div class="after-chart">
          <slot name="after-chart"></slot>
        </div>
      </div>
    `}_patchRadarState(n){Object.assign(this,n)}_setRadarState(n){let r={axes:n.axes??[],value:ne(n.value??{}),previewValue:n.previewValue?ne(n.previewValue):null,targetValue:n.targetValue?ne(n.targetValue):null,reachableRange:n.reachableRange??{},preferredRange:n.preferredRange??{},selectedKey:n.selectedKey??"",hits:n.hits??[],disabled:!!n.disabled,precision:n.precision==null?null:Number(n.precision),showValues:!!n.showValues,theme:n.theme??{}};this.axes=r.axes,this.value=r.value,this.previewValue=r.previewValue,this.targetValue=r.targetValue,this.reachableRange=r.reachableRange,this.preferredRange=r.preferredRange,this.selectedKey=r.selectedKey,this.hits=r.hits,this.disabled=r.disabled,this.precision=r.precision,this.showValues=r.showValues,this.theme=r.theme}_select(n){this.disabled||(this.selectedKey=n,S(this,"vector-select",{source:"radar",role:"metric",transactionId:T("select"),key:n}))}_startDrag(n,r){this.disabled||n.button>0||(n.preventDefault(),this._select(r),this._drag={key:r,transactionId:T("radar"),startValue:ne(this.value),latest:null},this.pointerDrag.start({move:o=>this._dragMove(o),end:()=>this._dragEnd(),cancel:()=>this._cancelDrag()}))}_dragMove(n){if(!this._drag)return;let r=this._valueFromPoint(n,this._drag.key);this._previewMetric(r)}_dragEnd(){this._drag&&(this._drag.latest&&S(this,"vector-change",this._drag.latest),this._drag=null)}_cancelDrag(){this._drag&&(S(this,"vector-cancel",{source:"radar",role:"metric",transactionId:this._drag.transactionId,previousValue:this._drag.startValue}),this._drag=null)}_keydown(n,r){let o=this._axis(r);if(!o)return;let i=Number(o.step??1),s=null;if(n.key==="ArrowUp"||n.key==="ArrowRight"?s=Number(this.value[r]??0)+i:n.key==="ArrowDown"||n.key==="ArrowLeft"?s=Number(this.value[r]??0)-i:n.key==="Home"?s=Number(o.min??0):n.key==="End"?s=Number(o.max??100):n.key==="Escape"&&(this._cancelDrag(),S(this,"vector-cancel",{source:"radar",role:"metric",transactionId:T("radar-cancel"),previousValue:this.value})),s==null)return;n.preventDefault();let a=this._detailForMetric(r,s,T("radar-key"),this.value);S(this,"vector-preview",a),S(this,"vector-change",a)}_previewMetric(n){let r=this._drag;if(!r)return;let o=this._detailForMetric(r.key,n,r.transactionId,r.startValue);r.latest=o,S(this,"vector-preview",o)}_detailForMetric(n,r,o,i){let s=this._axis(n),a=M(v({},i),{[n]:ae($(r,s?.min??0,s?.max??100),s?.step??1)});return{source:"radar",role:"metric",transactionId:o,key:n,previousValue:i,requestedValue:a,proposedValue:a,delta:y(Number(a[n]??0)-Number(i[n]??0),4),hits:[]}}_valueFromPoint(n,r){let o=this.svgElement;if(!o)return Number(this.value[r]??0);let i=o.getBoundingClientRect(),s=(n.clientX-i.left)/i.width*260-130,a=(n.clientY-i.top)/i.height*248-124,c=this.axes.findIndex(h=>h.key===r),l=this.axes[c],u=Qn(c,this.axes.length),d=Math.cos(u),p=Math.sin(u),f=$((s*d+a*p)/90,0,1);return Number(l?.min??0)+f*(Number(l?.max??100)-Number(l?.min??0))}_axis(n){return this.axes.find(r=>r.key===n)}_places(n){return Number.isFinite(this.precision)?Math.max(0,Number(this.precision)):zn(n.step??1)}_pointsFor(n,r){return this.axes.map((o,i)=>Ri(o,Number(n[o.key]??0),i,this.axes.length,r))}_pointsForRange(n,r){return this.axes.map((o,i)=>{let s=this.reachableRange[o.key],a=n==="reachableMax"?s?.max??o.reachableMax??o.max:this.preferredRange[o.key]?.max??o.preferredMax;return a==null?null:Ri(o,Number(a),i,this.axes.length,r)}).filter(o=>o!==null)}};ch=new WeakMap,lh=new WeakMap,uh=new WeakMap,dh=new WeakMap,fh=new WeakMap,ph=new WeakMap,hh=new WeakMap,mh=new WeakMap,gh=new WeakMap,yh=new WeakMap,vh=new WeakMap,bh=new WeakMap,_h=new WeakMap,m([pt("svg")],de.prototype,"svgElement",1),m([jn()],de.prototype,"_drag",1),m([g({attribute:!1})],de.prototype,"axes",1),m([g({attribute:!1})],de.prototype,"value",1),m([g({attribute:!1})],de.prototype,"previewValue",1),m([g({attribute:!1})],de.prototype,"targetValue",1),m([g({attribute:!1})],de.prototype,"reachableRange",1),m([g({attribute:!1})],de.prototype,"preferredRange",1),m([g({attribute:!1})],de.prototype,"selectedKey",1),m([g({attribute:!1})],de.prototype,"hits",1),m([g({attribute:!1})],de.prototype,"disabled",1),m([g({attribute:!1})],de.prototype,"precision",1),m([g({attribute:!1})],de.prototype,"showValues",1);var Eh=U`:host {
  display: block;
}`;var to=class extends W{static{this.styles=Eh}#e={};get state(){return this.#e}set state(e){this.#e=e}render(){return w`<vector-constraint-rail
      .item=${this.state.item??null}
      .value=${this.state.value??0}
      .constraint=${this.state.constraint??{}}
      .role=${this.state.role??"composition"}
      .hits=${this.state.hits??[]}
      .rangeMin=${this.state.rangeMin??0}
      .rangeMax=${this.state.rangeMax??100}
      .precision=${this.state.precision??null}
      .defaultValue=${this.state.defaultValue??null}
      .thresholds=${this.state.thresholds??[]}
      .unitOptions=${this.state.unitOptions??[]}
      .unitKey=${this.state.unitKey??""}
      .measurementSystem=${this.state.measurementSystem??""}
      .basis=${this.state.basis??""}
      .measurementScope=${this.state.measurementScope??""}
      .measurementMeasure=${this.state.measurementMeasure??""}
      .context=${this.state.context??null}
      .disabled=${this.state.disabled??!1}
      .palette=${this.state.palette}
      .variant=${this.state.variant??"default"}
      .unitDisplay=${this.state.unitDisplay??"picker"}
      .activeEmphasis=${this.state.activeEmphasis??!0}
    ></vector-constraint-rail>`}};m([g({attribute:!1})],to.prototype,"state",1);var wh=U`:host {
  display: block;
}

.summary-meter {
  display: grid;
  gap: 6px;
}

.summary-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(82px, 0.8fr) auto;
  gap: 8px;
  align-items: center;
  min-height: 34px;
  border: 1px solid var(--_vector-line);
  border-radius: 8px;
  background: var(--_vector-surface);
  color: var(--_vector-ink);
  padding: 6px 8px;
  text-align: left;
  cursor: pointer;
}

.summary-row.warn {
  border-color: color-mix(in srgb, var(--_vector-warning) 55%, var(--_vector-line));
}

.summary-row.danger {
  border-color: color-mix(in srgb, var(--_vector-danger) 55%, var(--_vector-line));
  color: var(--_vector-danger);
}

.summary-track {
  position: relative;
  block-size: 7px;
  border-radius: 999px;
  background: var(--_vector-track);
  overflow: hidden;
}

.summary-track span {
  position: absolute;
  inset-block: 0;
  left: 0;
  border-radius: inherit;
  background: var(--_vector-accent-strong);
  width: var(--meter-fill);
}

.warn .summary-track span {
  background: var(--_vector-warning);
}

.danger .summary-track span {
  background: var(--_vector-danger);
}

strong {
  font-size: 0.78rem;
}

.quiet {
  min-height: 34px;
  border: 1px dashed var(--_vector-line);
  border-radius: 8px;
  color: var(--_vector-muted);
  padding: 8px 10px;
}`;var no=class extends W{static{this.styles=[Z,wh]}#e;get items(){return this.#e}set items(e){this.#e=e}constructor(){super(),this.items=[],this.theme={}}render(){return w`
      <div class="summary-meter">
        ${this.items.length?te(this.items,e=>e.key,e=>{let n=hp(e.value,e.thresholds??[]),r=Number(e.min??0),o=Number(e.max??100),i=$((Number(e.value??0)-r)/(o-r||1)*100,0,100);return w`
                  <button
                    type="button"
                    class=${F({"summary-row":!0,[n?.severity||e.severity||"ok"]:!0})}
                    data-key=${e.key}
                    @click=${()=>this._select(e,n)}
                  >
                    <span>${e.label||V(e.key)}</span>
                    <span class="summary-track"
                      ><span
                        ${re({"--meter-fill":`${i}%`})}
                      ></span
                    ></span>
                    <strong
                      >${pe(e.value,e.precision??1)}${e.unit||""}</strong
                    >
                  </button>
                `}):w`<div class="quiet">No summary values.</div>`}
      </div>
    `}_select(e,n){S(this,"vector-select",{source:"table",role:"summary",transactionId:T("summary"),key:e.key,thresholdKey:n?.key})}};m([g({attribute:!1})],no.prototype,"items",1);var Ih=U`:host {
  display: block;
}

.unit-toggle {
  display: grid;
  gap: 5px;
}

.toggle-label {
  color: var(--_vector-muted);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0;
}

.toggle-options {
  display: inline-grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(0, 1fr);
  gap: 0;
  padding: 3px;
  border: 1px solid var(--_vector-line);
  border-radius: 999px;
  background: var(--_vector-surface-strong);
}

button {
  min-height: 30px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--_vector-ink);
  padding: 0 11px;
  cursor: pointer;
  white-space: nowrap;
}

button.selected {
  background: var(--_vector-surface);
  color: var(--_vector-accent-strong);
  font-weight: 700;
  box-shadow: 0 1px 4px color-mix(in srgb, var(--_vector-ink) 14%, transparent);
}

button:disabled {
  opacity: 0.58;
  cursor: default;
}`;var Ne=class extends W{static{this.styles=[Z,Ih]}#e;get options(){return this.#e}set options(e){this.#e=e}#t;get unitKey(){return this.#t}set unitKey(e){this.#t=e}#n;get label(){return this.#n}set label(e){this.#n=e}#r;get groupKey(){return this.#r}set groupKey(e){this.#r=e}#o;get measurementSystem(){return this.#o}set measurementSystem(e){this.#o=e}#i;get basis(){return this.#i}set basis(e){this.#i=e}#s;get measurementScope(){return this.#s}set measurementScope(e){this.#s=e}#a;get measurementMeasure(){return this.#a}set measurementMeasure(e){this.#a=e}#c;get disabled(){return this.#c}set disabled(e){this.#c=e}constructor(){super(),this.options=[],this.unitKey="",this.label="",this.groupKey="",this.measurementSystem="",this.basis="",this.measurementScope="",this.measurementMeasure="",this.disabled=!1,this.theme={}}set state(e){let n=e??{};this.options=n.options??n.unitOptions??[],this.unitKey=n.unitKey??"",this.label=n.label??"",this.groupKey=n.groupKey??n.key??"",this.measurementSystem=n.measurementSystem??"",this.basis=n.basis??"",this.measurementScope=n.measurementScope??"",this.measurementMeasure=n.measurementMeasure??"",this.disabled=n.disabled??!1,this.theme=n.theme??{}}get state(){return{options:this.options,unitKey:this.unitKey,label:this.label,groupKey:this.groupKey,measurementSystem:this.measurementSystem,basis:this.basis,measurementScope:this.measurementScope,measurementMeasure:this.measurementMeasure,disabled:this.disabled,theme:this.theme}}render(){return w`
      <div
        class=${F({"unit-toggle":!0,binary:this.options.length===2})}
        role="group"
        aria-label=${this.label||"Measurement units"}
      >
        ${this.label?w`<span class="toggle-label">${this.label}</span>`:Q}
        <span class="toggle-options">
          ${te(this.options,e=>e.key,e=>{let n=this.unitKey?e.key===this.unitKey:e.system?e.system===this.measurementSystem:e.basis===this.basis||e.scope===this.measurementScope||e.measure===this.measurementMeasure;return w`
                <button
                  type="button"
                  class=${F({selected:n})}
                  ?disabled=${this.disabled}
                  aria-pressed=${String(!!n)}
                  @click=${()=>this._select(e)}
                >
                  ${e.label}
                </button>
              `})}
        </span>
      </div>
    `}_select(e){S(this,"vector-change",{source:"inspector",role:"measurement",transactionId:T("unit"),key:this.groupKey,unitKey:e.key,basis:e.basis,measurementScope:e.scope||this.measurementScope,measurementMeasure:e.measure||this.measurementMeasure,measurementSystem:e.system||this.measurementSystem})}};m([g({attribute:!1})],Ne.prototype,"options",1),m([g({attribute:!1})],Ne.prototype,"unitKey",1),m([g({attribute:!1})],Ne.prototype,"label",1),m([g({attribute:!1})],Ne.prototype,"groupKey",1),m([g({attribute:!1})],Ne.prototype,"measurementSystem",1),m([g({attribute:!1})],Ne.prototype,"basis",1),m([g({attribute:!1})],Ne.prototype,"measurementScope",1),m([g({attribute:!1})],Ne.prototype,"measurementMeasure",1),m([g({attribute:!1})],Ne.prototype,"disabled",1);var Dh=U`:host {
  display: block;
}

* {
  box-sizing: border-box;
}

.empty,
.value-slider {
  border: 1px solid var(--_vector-line);
  border-radius: 8px;
  padding: 10px 12px;
  background: var(--_vector-surface-alt);
}

.empty {
  color: var(--_vector-muted);
}

.value-slider {
  display: grid;
  gap: 8px;
}

.slider-head {
  display: grid;
  grid-template-columns: 12px minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
}

.swatch {
  inline-size: 12px;
  block-size: 12px;
  border-radius: 999px;
  background: var(--item-color);
}

.slider-copy {
  display: grid;
  gap: 2px;
  min-width: 0;
}

label {
  color: var(--_vector-ink);
  font-size: 0.84rem;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

small {
  color: var(--_vector-muted);
  font-size: 0.72rem;
  line-height: 1.25;
}

.slider-value {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
  min-width: 0;
  color: var(--_vector-ink);
  font-size: 0.82rem;
  font-weight: 600;
  text-align: right;
}

.value-slider.active label,
.value-slider.active .slider-value {
  font-weight: 850;
}

output {
  color: inherit;
  font: inherit;
}

.unit-text {
  color: var(--_vector-muted);
  font-size: 0.76rem;
  font-weight: 600;
}

.slider-track {
  position: relative;
  min-height: 30px;
  display: grid;
  align-items: center;
}

.full-track,
.threshold-track {
  position: absolute;
  left: 0;
  right: 0;
  top: 11px;
  block-size: 8px;
  border-radius: 999px;
}

.full-track {
  background: var(--_vector-track);
}

.threshold-track {
  overflow: hidden;
}

.threshold-band {
  position: absolute;
  top: 0;
  bottom: 0;
  left: var(--threshold-start);
  width: var(--threshold-width);
  background: var(--threshold-color, color-mix(in srgb, var(--_vector-accent-strong) 35%, transparent));
}

.threshold-band.ok {
  background: var(--threshold-color, color-mix(in srgb, var(--_vector-ok) 42%, transparent));
}

.threshold-band.warn {
  background: var(--threshold-color, color-mix(in srgb, var(--_vector-warning) 46%, transparent));
}

.threshold-band.danger {
  background: var(--threshold-color, color-mix(in srgb, var(--_vector-danger) 48%, transparent));
}

.threshold-band.active {
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--_vector-ink) 30%, transparent);
}

.current-marker {
  position: absolute;
  top: 4px;
  inline-size: 4px;
  block-size: 22px;
  margin-left: -2px;
  border-radius: 999px;
  background: var(--_vector-accent-strong);
  pointer-events: none;
  z-index: 1;
  left: var(--marker-position);
}

input[type=range] {
  position: relative;
  z-index: 2;
  width: 100%;
  opacity: 0.02;
  cursor: ew-resize;
}

.unit-picker {
  position: relative;
}

.unit-picker summary {
  list-style: none;
  cursor: pointer;
}

.unit-picker summary::-webkit-details-marker {
  display: none;
}

.unit-pill,
.unit-picker summary {
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  max-width: 92px;
  border: 1px solid var(--_vector-line);
  border-radius: 999px;
  background: var(--_vector-surface);
  color: var(--_vector-accent-strong);
  padding: 0 8px;
  font-size: 0.7rem;
  font-weight: 800;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.unit-pill.static {
  color: var(--_vector-muted);
}

.unit-picker[open] summary {
  border-color: var(--_vector-accent-strong);
  background: var(--_vector-accent-soft);
}

.unit-menu {
  position: absolute;
  right: 0;
  top: calc(100% + 4px);
  z-index: 5;
  display: grid;
  gap: 3px;
  min-width: 120px;
  padding: 4px;
  border: 1px solid var(--_vector-line);
  border-radius: 8px;
  background: var(--_vector-surface);
  box-shadow: 0 8px 20px color-mix(in srgb, var(--_vector-ink) 14%, transparent);
}

.unit-menu button {
  min-height: 28px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--_vector-ink);
  padding: 0 8px;
  text-align: left;
  font-size: 0.76rem;
  cursor: pointer;
}

.unit-menu button:hover,
.unit-menu button:focus {
  background: var(--_vector-surface-strong);
  outline: none;
}

.unit-menu button.selected {
  background: var(--_vector-accent-soft);
  color: var(--_vector-accent-strong);
  font-weight: 800;
}

input:disabled,
.disabled .unit-picker summary {
  opacity: 0.58;
  cursor: default;
}

.disabled {
  opacity: 0.65;
  pointer-events: none;
}`;var xh,Ch,ro=class extends W{constructor(){super();x(this,xh,"composition");this.scalar=new Rt(this);x(this,Ch);Gn(this)}static{this.properties=Wn}get role(){return D(this,xh)}set role(n){C(this,xh,n)}get sliderElement(){return D(this,Ch)}set sliderElement(n){C(this,Ch,n)}static{this.styles=[Z,Dh]}set state(n){this.scalar.setState(n)}get state(){return this.scalar.state}render(){if(!this.item)return w` <div class="empty">Select an item.</div> `;let n=this.scalar.viewState(),r=n.valueText,o=n.unit,i=this.scalar.unitOption(),s=this.item.description||this.item.summary||this.item.purpose||"",a=this.activeEmphasis&&Math.abs(Number(this.value||0))>1e-9,c=()=>this.sliderElement?.dataset.transaction||T("value-slider");return w`
      <section
        class=${F({"value-slider":!0,active:a,disabled:this.disabled})}
        data-threshold=${n.thresholdKey||""}
      >
        <div class="slider-head">
          <span
            class="swatch"
            ${re({"--item-color":Me(this.item,0,this.palette)})}
          ></span>
          <div class="slider-copy">
            <label for="slider"
              >${this.item.label||V(this.item.key)}</label
            >
            ${s?w`<small>${s}</small>`:Q}
          </div>
          <span class="slider-value">
            <output>${r}</output>
            ${this._renderUnit(i,o)}
          </span>
        </div>
        <div class="slider-track">
          <div class="full-track"></div>
          <div class="threshold-track" aria-hidden="true">
            ${Ni({thresholds:this.thresholds,value:this.value,percent:l=>this.scalar.pct(l),activeThreshold:l=>this.scalar.thresholdFor(l)})}
          </div>
          <span
            class="current-marker"
            ${re({"--marker-position":`${n.valuePct}%`})}
          ></span>
          <input
            id="slider"
            data-slider
            type="range"
            min=${n.domainMinText}
            max=${n.domainMaxText}
            step=${n.displayStep}
            .value=${r}
            ?disabled=${this.disabled}
            @input=${l=>{let u=l.currentTarget;u.dataset.transaction||=T("value-slider"),this._emitSliderValue(Number(u.value),"vector-preview",u.dataset.transaction??c())}}
            @change=${l=>{let u=l.currentTarget,d=u.dataset.transaction??c();delete u.dataset.transaction,this._emitSliderValue(Number(u.value),"vector-change",d)}}
            @keydown=${l=>this._sliderKeydown(l)}
          />
        </div>
      </section>
    `}_renderUnit(n,r){let o=this._unitPickerOptions(),i=Sc(n,r);return this.unitDisplay==="text"?w`<span
        class="unit-text"
        data-unit
        data-unit-key=${n?.key||""}
        title=${n?.label||i}
        >${i}</span
      >`:o.length<=1?w`<span
        class="unit-pill static"
        data-unit
        data-unit-key=${n?.key||""}
        title=${n?.label||i}
        >${i}</span
      >`:w`
      <details class="unit-picker">
        <summary
          data-unit
          data-unit-pill
          data-unit-key=${n?.key||""}
          aria-label=${`Change unit, currently ${n?.label||i}`}
          title=${`Change unit, currently ${n?.label||i}`}
        >
          ${i}
        </summary>
        <div class="unit-menu" role="listbox" aria-label="Units">
          ${o.map(s=>w`
              <button
                type="button"
                class=${F({selected:s.key===n?.key})}
                data-unit-option=${s.key}
                role="option"
                aria-selected=${String(s.key===n?.key)}
                @click=${a=>{a.preventDefault(),this.scalar.changeUnit(s.key),this._closeUnitPicker(a.currentTarget)}}
              >
                ${s.label||Sc(s,s.symbol)}
              </button>
            `)}
        </div>
      </details>
    `}_unitPickerOptions(){return this.unitOptions}_closeUnitPicker(n){let r=n.closest("details");r&&(r.open=!1)}_emitSliderValue(n,r,o){if(!this.item?.key)return;let i=this.scalar.unitOption(),s=this.scalar.toCanonical(n),a=ae(s,this.scalar.step()),c=$(a,this.scalar.min(),this.scalar.max()),l=this.scalar.thresholdFor(c);S(this,r,{source:"inspector",role:this.role,transactionId:o,key:this.item.key,previousValue:{[this.item.key]:this.value},requestedValue:{[this.item.key]:a},proposedValue:{[this.item.key]:c},delta:y(c-this.value,4),unitKey:i?.key,basis:i?.basis||this.basis||this.item?.basis,measurementScope:i?.scope||this.measurementScope,measurementMeasure:i?.measure||this.measurementMeasure,displayValue:this.scalar.toDisplay(c),canonicalValue:c,thresholdKey:l?.key,measurementSystem:this.measurementSystem||i?.system,hits:[]})}_sliderKeydown(n){if(n.key!=="Escape")return;let r=n.currentTarget,o=r.dataset.transaction??T("value-slider-cancel");delete r.dataset.transaction,S(this,"vector-cancel",{source:"inspector",role:this.role,transactionId:o,key:this.item?.key})}};xh=new WeakMap,Ch=new WeakMap,m([pt("[data-slider]")],ro.prototype,"sliderElement",1);function Sh(){ue("vector-pie-chart",le),ue("vector-radar-chart",de),ue("vector-constraint-control",kt),ue("vector-constraint-rail",Kn),ue("vector-scalar-rail",to),ue("vector-value-slider",ro),ue("vector-quantity-input",Pi),ue("vector-unit-toggle",Ne),ue("vector-item-list",he),ue("vector-ingredient-list",ki),ue("vector-amount-list",ce),ue("vector-choice-control",mt),ue("vector-summary-meter",no),ue("oil-search-list",Mi),ue("vector-inspector",gt),ue("constraint-feedback-list",Yr)}Sh();var y_=16.387064;function Mc(t){return t?.referenceData?.sapValues??{}}function Th(t){let{oilWeightG:e,oilVector:n,formulaValues:r,additiveValues:o,selectedAdditives:i,additiveItems:s,document:a}=t,c=a?.referenceData?.density??{},l=Mc(a),u=v_(n,c,.92),d=$(Number(r.superfat??5),0,100),p=$(Number(r.lye_concentration??33),1,99),f=Object.entries(n).reduce((P,[I,X])=>P+e*(X/100)*Number(l[I]??0)*(1-d/100),0),h=f*(100-p)/p,_=i.reduce((P,I)=>P+e*(Number(o[I]??0)/100),0),b=i.reduce((P,I)=>{let X=s.find(k=>k.key===I),Y=Number(c[X?.material??I]);return Number.isFinite(Y)&&Y>0?P+e*(Number(o[I]??0)/100)/Y:P},0),N=e/u+f/Tc(c,"naoh",2.13)+h/Tc(c,"distilled_water",1)+b;return{oilWeightG:e,lyeG:y(f,1),liquidG:y(h,1),totalMassG:y(e+f+h+_,1),volumeMl:y(N,1),volumeIn3:y(N/y_,2),oilDensity:y(u,4)}}function v_(t,e,n){let r=ht(t)||100;return Object.entries(t).reduce((o,[i,s])=>o+s/r*Tc(e,i,n),0)||n}function Tc(t,e,n=1){let r=Number(t?.[e]??t?.[e.toLowerCase()]);return Number.isFinite(r)&&r>0?r:n}function oo(t){return t&&typeof t=="object"?t:{}}function ln(t){return Number(oo(t).density??0)||1}function Li(t,e){return t/100*Number(oo(e).oilWeightG??0)}function $i(t,e){return t/Number(oo(e).oilWeightG??1)*100}function Nc(t,e){return Li(t,e)/ln(e)}function kc(t,e){return $i(t*ln(e),e)}function Mh(t,e){let n=oo(e),r=Number(n.oilWeightG??0);return t*r/Number(n.totalMassG??(r||1))}function Nh(t,e){let n=oo(e),r=Number(n.oilWeightG??1);return t*Number(n.totalMassG??(r||1))/r}var kh=U`:host {
  display: block;
  color: var(--vector-ink);
}

* {
  box-sizing: border-box;
}

button,
input {
  font: inherit;
}

.workbench {
  display: grid;
  gap: 16px;
}

.toolbar,
.card-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.toolbar {
  padding: 4px 0;
}

h2,
h3,
p {
  margin: 0;
}

h2 {
  font-size: 1rem;
}

h3 {
  font-size: 0.95rem;
}

p,
.card-heading span {
  color: var(--vector-muted);
  font-size: 0.82rem;
}

.toolbar-actions {
  display: flex;
  gap: 8px;
}

button {
  min-height: 34px;
  border: 1px solid var(--vector-line);
  border-radius: 8px;
  background: var(--vector-surface);
  color: var(--vector-ink);
  padding: 0 12px;
  cursor: pointer;
}

button:disabled {
  opacity: 0.45;
  cursor: default;
}

button:hover:not(:disabled) {
  border-color: var(--vector-accent-strong);
}

.surface {
  border: 1px solid var(--vector-line);
  border-radius: 8px;
  background: var(--vector-surface);
  padding: 14px;
  min-width: 0;
}

.visual-grid {
  display: grid;
  grid-template-columns: minmax(320px, 1.1fr) minmax(320px, 1.1fr) minmax(240px, 0.8fr);
  gap: 14px;
  align-items: start;
}

.control-grid {
  display: grid;
  grid-template-columns: minmax(300px, 1fr) minmax(260px, 0.8fr) minmax(340px, 1fr);
  gap: 14px;
  align-items: start;
}

.side-stack {
  display: grid;
  gap: 14px;
}

.formula-stack,
.additive-stack {
  display: grid;
  gap: 10px;
}

.measurement-toggles {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
  align-items: end;
}

.measurement-toggles.system-only {
  grid-template-columns: minmax(150px, 0.45fr);
}

.measurement-toggles.additive-toggles {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.batch-size-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.card-heading {
  margin-bottom: 12px;
}

.pie-lock-badge,
.pie-limit-badge {
  display: grid;
  place-items: center;
  inline-size: 22px;
  block-size: 22px;
  border-radius: 999px;
  background: var(--vector-surface);
  border: 1px solid var(--vector-line);
  box-shadow: 0 1px 4px color-mix(in srgb, var(--vector-ink) 18%, transparent);
  font-size: 0.72rem;
  font-weight: 800;
  line-height: 1;
}

.pie-lock-badge {
  color: var(--vector-accent-strong);
}

.pie-limit-badge {
  color: var(--vector-danger);
  border-color: color-mix(in srgb, var(--vector-danger) 55%, var(--vector-line));
}

.pie-limit-badge.soft {
  color: var(--vector-warning);
  border-color: color-mix(in srgb, var(--vector-warning) 65%, var(--vector-line));
}

.pie-lock-badge.hit,
.pie-limit-badge.hit {
  animation: badgePulse 700ms ease-in-out infinite alternate;
}

.quality-rail-list {
  display: grid;
  gap: 8px;
}

.quality-row {
  display: grid;
  grid-template-columns: minmax(96px, 0.8fr) minmax(150px, 1.4fr) 48px 70px;
  gap: 10px;
  align-items: center;
  min-height: 42px;
  padding: 7px 8px;
  border: 1px solid var(--vector-line);
  border-radius: 8px;
  background: var(--vector-surface-alt);
}

.quality-row.selected {
  border-color: var(--vector-accent-strong);
  background: var(--vector-accent-soft);
}

.quality-name {
  min-height: 28px;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--vector-ink);
  text-align: left;
  font-weight: 500;
}

.quality-row.selected .quality-name {
  color: var(--vector-accent-strong);
  font-weight: 800;
}

.quality-combo {
  position: relative;
  min-height: 28px;
  display: grid;
  align-items: center;
}

.quality-track {
  position: absolute;
  left: 0;
  right: 0;
  top: 10px;
  height: 8px;
  border-radius: 999px;
  background: var(--vector-track);
  overflow: hidden;
  pointer-events: none;
}

.quality-reach,
.quality-preferred {
  position: absolute;
  top: 0;
  bottom: 0;
  left: var(--quality-start);
  width: var(--quality-width);
  border-radius: 999px;
}

.quality-reach {
  background: color-mix(in srgb, var(--vector-reach) 20%, transparent);
}

.quality-preferred {
  background: color-mix(in srgb, var(--vector-accent-strong) 22%, transparent);
}

.quality-current {
  position: absolute;
  top: -4px;
  left: var(--quality-position);
  inline-size: 4px;
  block-size: 16px;
  margin-left: -2px;
  border-radius: 999px;
  background: var(--vector-accent-strong);
}

.quality-combo input {
  position: relative;
  z-index: 1;
  width: 100%;
  opacity: 0.01;
  cursor: ew-resize;
}

.quality-row output {
  font-weight: 600;
  text-align: right;
}

.quality-reach-label {
  color: var(--vector-muted);
  font-size: 0.78rem;
  text-align: right;
}

.empty {
  padding: 16px;
  color: var(--vector-muted);
  border: 1px dashed var(--vector-line);
  border-radius: 8px;
}

@keyframes badgePulse {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
}
@media (max-width: 1180px) {
  .visual-grid,
  .control-grid {
    grid-template-columns: 1fr;
  }
  .toolbar {
    align-items: stretch;
    flex-direction: column;
  }
}
@media (max-width: 720px) {
  .measurement-toggles,
  .measurement-toggles.system-only,
  .measurement-toggles.additive-toggles,
  .batch-size-grid {
    grid-template-columns: 1fr;
  }
  .quality-row {
    grid-template-columns: 1fr 52px;
  }
  .quality-combo,
  .quality-reach-label {
    grid-column: 1/-1;
  }
}`;var b_=String.fromCodePoint(128274),__=String.fromCodePoint(8805),E_=String.fromCodePoint(8804),Fi=28.3495,ji=453.592,Hi=29.5735,Ah=16.387064,Ac={key:"percent_oils",label:"% oils",basis:"percent_oils",scope:"oils",measure:"scalar",symbol:"%",precision:1,step:.1},w_={key:"percent_batch",label:"% batch",basis:"percent_batch",scope:"batch",measure:"scalar",symbol:"%",precision:1,step:.1,fromCanonical:(t,e)=>Mh(t,e),toCanonical:(t,e)=>Nh(t,e)},I_={key:"g_per_kg_oils",label:"g/kg oils",system:"metric",basis:"weight",scope:"oils",measure:"weight",symbol:" g/kg",precision:0,step:1,fromCanonical:t=>Number(t||0)*10,toCanonical:t=>Number(t||0)/10},D_={key:"oz_per_lb_oils",label:"oz/lb oils",system:"imperial",basis:"weight",scope:"oils",measure:"weight",symbol:" oz/lb",precision:2,step:.05,fromCanonical:t=>Number(t||0)*.16,toCanonical:t=>Number(t||0)/.16},x_={key:"g_batch",label:"g",system:"metric",basis:"weight",scope:"batch",measure:"weight",symbol:" g",precision:1,step:1,fromCanonical:(t,e)=>Li(t,e),toCanonical:(t,e)=>$i(t,e)},C_={key:"oz_batch",label:"oz",system:"imperial",basis:"weight",scope:"batch",measure:"weight",symbol:" oz",precision:2,step:.05,fromCanonical:(t,e)=>Li(t,e)/Fi,toCanonical:(t,e)=>$i(Number(t||0)*Fi,e)},S_={key:"ml_per_kg_oils",label:"ml/kg oils",system:"metric",basis:"volume",scope:"oils",measure:"volume",symbol:" ml/kg",precision:0,step:1,fromCanonical:(t,e)=>Number(t||0)*10/ln(e),toCanonical:(t,e)=>Number(t||0)*ln(e)/10},T_={key:"ml_batch",label:"ml",system:"metric",basis:"volume",scope:"batch",measure:"volume",symbol:" ml",precision:1,step:1,fromCanonical:(t,e)=>Nc(t,e),toCanonical:(t,e)=>kc(t,e)},M_={key:"floz_per_lb_oils",label:"fl oz/lb oils",system:"imperial",basis:"volume",scope:"oils",measure:"volume",symbol:" fl oz/lb",precision:2,step:.05,fromCanonical:(t,e)=>Number(t||0)/100*ji/ln(e)/Hi,toCanonical:(t,e)=>Number(t||0)*Hi*ln(e)/ji*100},N_={key:"floz_batch",label:"fl oz",system:"imperial",basis:"volume",scope:"batch",measure:"volume",symbol:" fl oz",precision:2,step:.05,fromCanonical:(t,e)=>Nc(t,e)/Hi,toCanonical:(t,e)=>kc(Number(t||0)*Hi,e)},k_=[{key:"metric",label:"Metric",system:"metric",symbol:"g"},{key:"imperial",label:"Imperial",system:"imperial",symbol:"oz"}],A_=[{key:"oils",label:"Oils",scope:"oils"},{key:"batch",label:"Total",scope:"batch"}],R_=[{key:"weight",label:"Weight",measure:"weight"},{key:"volume",label:"Volume",measure:"volume"}],O_={key:"g",label:"g",system:"metric",basis:"weight",measure:"weight",symbol:" g",precision:0,step:25},P_={key:"kg",label:"kg",system:"metric",basis:"weight",measure:"weight",symbol:" kg",precision:2,step:.05,fromCanonical:t=>Number(t||0)/1e3,toCanonical:t=>Number(t||0)*1e3},L_={key:"oz",label:"oz",system:"imperial",basis:"weight",measure:"weight",symbol:" oz",precision:1,step:1,fromCanonical:t=>Number(t||0)/Fi,toCanonical:t=>Number(t||0)*Fi},$_={key:"lb",label:"lb",system:"imperial",basis:"weight",measure:"weight",symbol:" lb",precision:2,step:.1,fromCanonical:t=>Number(t||0)/ji,toCanonical:t=>Number(t||0)*ji},V_={key:"ml",label:"ml",system:"metric",basis:"volume",measure:"volume",symbol:" ml",precision:0,step:50},F_={key:"l",label:"L",system:"metric",basis:"volume",measure:"volume",symbol:" L",precision:2,step:.05,fromCanonical:t=>Number(t||0)/1e3,toCanonical:t=>Number(t||0)*1e3},j_={key:"in3",label:"in3",system:"imperial",basis:"volume",measure:"volume",symbol:" in3",precision:1,step:1,fromCanonical:t=>Number(t||0)/Ah,toCanonical:t=>Number(t||0)*Ah},Ie=[{key:"oil_weight_g",label:"Oil weight",defaultValue:1800,min:250,max:1e4,step:25,defaultUnitKey:"g",unitOptions:[O_,P_,L_,$_]},{key:"batch_volume_ml",label:"Batch volume",defaultValue:3e3,min:400,max:16e3,step:25,defaultUnitKey:"ml",unitOptions:[V_,F_,j_]}],Ze=[{key:"superfat",label:"Superfat",unit:"%",defaultValue:5,min:0,max:15,step:.5,defaultUnitKey:"percent_oils",unitOptions:[Ac],thresholds:[{key:"lean",min:0,max:2.9,severity:"warn",label:"Low superfat can feel lean."},{key:"balanced",min:3,max:7,severity:"ok",label:"Balanced superfat range."},{key:"rich",min:7.1,max:10,severity:"warn",label:"Higher superfat can soften bars."},{key:"very_rich",min:10.1,max:15,severity:"danger",label:"Very high superfat may shorten shelf life."}]},{key:"lye_concentration",label:"Lye concentration",unit:"%",defaultValue:33,min:25,max:45,step:.5,defaultUnitKey:"percent_oils",unitOptions:[Ac],thresholds:[{key:"loose",min:25,max:27.9,severity:"warn",label:"Extra water slows unmolding."},{key:"friendly",min:28,max:35,severity:"ok",label:"Friendly cold-process range."},{key:"fast",min:35.1,max:40,severity:"warn",label:"Higher concentration can speed trace."},{key:"advanced",min:40.1,max:45,severity:"danger",label:"Advanced lye concentration."}]}],H_={key:"lye_type",label:"Lye type"},U_=[{key:"naoh",label:"NaOH"},{key:"koh",label:"KOH"},{key:"blend",label:"Blend"}],Vi=[Ac,w_,I_,x_,D_,C_,S_,T_,M_,N_],Rh=[{key:"fragrance",label:"Fragrance",summary:"Scent load for the finished bar.",type:"fragrance",category:"scent",material:"fragrance_oil",color:"#8b5f9d",defaultValue:3.1,min:0,max:6,step:.1,defaultUnitKey:"percent_oils",unitOptions:Vi,tags:["scent","ifra"],thresholds:[{key:"light",min:0,max:2.9,severity:"ok",label:"Light scent load."},{key:"standard",min:3,max:4.9,severity:"ok",label:"Typical scent load."},{key:"high",min:5,max:5.7,severity:"warn",label:"High scent load; check acceleration."},{key:"ifra_limit",min:5.8,max:6,severity:"danger",label:"Near supplier or IFRA maximum."}]},{key:"kaolin_clay",label:"Kaolin clay",summary:"Adds slip and can anchor scent.",type:"clay",category:"additive",material:"kaolin_clay",color:"#9d9a5a",defaultValue:.6,min:0,max:2,step:.1,defaultUnitKey:"percent_oils",unitOptions:Vi,tags:["clay","slip"],thresholds:[{key:"light",min:0,max:.7,severity:"ok",label:"Light clay load."},{key:"noticeable",min:.8,max:1.4,severity:"warn",label:"Clay may affect slip and trace."},{key:"heavy",min:1.5,max:2,severity:"danger",label:"Heavy clay can feel draggy."}]},{key:"sodium_lactate",label:"Sodium lactate",summary:"Helps harden bars for unmolding.",type:"hardener",category:"additive",material:"sodium_lactate",color:"#426a8c",defaultValue:2,min:0,max:3,step:.1,defaultUnitKey:"percent_oils",unitOptions:Vi,tags:["hardener"],thresholds:[{key:"normal",min:0,max:2,severity:"ok",label:"Typical hardening support."},{key:"brittle",min:2.1,max:3,severity:"warn",label:"Too much may make bars brittle."}]},{key:"botanicals",label:"Botanicals",summary:"Visual texture or top decoration.",type:"botanical",category:"decoration",material:"botanicals",color:"#6f8d42",defaultValue:.2,min:0,max:1,step:.1,defaultUnitKey:"percent_oils",unitOptions:Vi,tags:["decoration","texture"],thresholds:[{key:"sprinkle",min:0,max:.3,severity:"ok",label:"Light decoration."},{key:"scratch",min:.4,max:1,severity:"warn",label:"Botanicals can brown or scratch."}]}],Rc=class extends Ke{static{this.styles=kh}constructor(){super(),this._document=null,this._initialized=!1,this._oilItems=[],this._oilVector={},this._oilConstraints={},this._qualityAxes=cn,this._qualityConstraints={},this._qualityVector={hardness:0,cleansing:0,conditioning:0,bubbly:0,creamy:0},this._reachableRange={hardness:{min:0,max:0},cleansing:{min:0,max:0},conditioning:{min:0,max:0},bubbly:{min:0,max:0},creamy:{min:0,max:0}},this._selectedOil="",this._selectedQuality="hardness",this._selectionRole="composition",this._preview=null,this._hits=[],this._history=[],this._future=[],this._theme=Ci,this._palette=se,this._pendingPreviewDetail=null,this._previewFrame=0,this._measurementSystem="metric",this._measurementUnitKey="metric",this._measurementScope="oils",this._measurementScopeKey="oils",this._measurementMeasure="weight",this._measurementMeasureKey="weight",this._measurementBasis="weight",this._batchOilWeightG=1800,this._unitPreferences={},this._formulaValues=Object.fromEntries([...Ie,...Ze].map(e=>[e.key,e.defaultValue??0])),this._formulaConstraints=Object.fromEntries([...Ie,...Ze].map(e=>[e.key,{min:e.min,max:e.max,step:e.step}])),this._formulaChoices={lye_type:"naoh"},this._additiveItems=Rh,this._selectedAdditives=["fragrance","kaolin_clay","sodium_lactate"],this._additiveValues=this._initialAdditiveValues(),this._additiveConstraints=Object.fromEntries(Rh.map(e=>[e.key,{min:e.min,max:e.max,step:e.step}])),this._selectedAdditive="fragrance",this._scalarPreview=null}set document(e){this._document=e,this._initialized?(this._loadDocument(e||{version:1,oils:{}}),this.requestUpdate()):this._loadDocument(e||{version:1,oils:{}})}get document(){return this._document}set theme(e){let n=this._theme;this._theme=v(v({},Ci),e||{}),this.isConnected&&sn(this,this._theme,n),this.requestUpdate()}get theme(){return this._theme}set palette(e){this._palette=Array.isArray(e)&&e.length?e:se,this.requestUpdate()}get palette(){return this._palette}connectedCallback(){super.connectedCallback(),sn(this,this._theme),!this._initialized&&this._document?this._loadDocument(this._document):this._initialized?this.requestUpdate():this.requestUpdate()}render(){if(!this._initialized)return w`<div class="empty">Loading recipe design tools.</div>`;let e=this._preview?.qualityVector||this._qualityVector,n=this._activeReachableRange(),r=this._preview?.oilVector||this._oilVector,o=this._activeOilConstraints(),i=this._activeFormulaValues(),s=this._activeAdditiveValues(),a=this._batchContext(r,i,s),c=Ie.find(E=>E.key==="oil_weight_g")||Ie[0],l=Ie.find(E=>E.key==="batch_volume_ml")||Ie[1],u=this._additiveItemsForContext(a),d=this._scalarHits(i,s),p=[...this._activeHits(),...d],f=this._selectedOilItems(),h=this._oilItems.find(E=>E.key===this._selectedOil),_=Object.fromEntries(Ze.map(E=>[E.key,E.thresholds||[]])),b=Object.fromEntries(u.map(E=>[E.key,E.thresholds||[]])),N=this._formulaSummary(i,s),P=this._activeMeasurementBasis(),I=lp(r,Mc(this._document)),X={items:f,value:r,constraints:o,total:100,selectedKey:this._selectedOil,hits:p,precision:0,centerValue:I,centerLabel:"INS",centerPrecision:0,theme:this._theme,palette:this._palette},Y={axes:this._qualityAxes.map(E=>M(v({},E),{reachableMin:n[E.key]?.min,reachableMax:n[E.key]?.max})),value:this._qualityVector,previewValue:this._preview?.qualityVector||null,targetValue:this._preview?.targetQuality||null,reachableRange:n,selectedKey:this._selectedQuality,hits:p,precision:1,showValues:!0,theme:this._theme},k={item:h||null,value:r[this._selectedOil]||0,constraint:o[this._selectedOil]||{},role:"composition",hits:p,rangeMin:0,rangeMax:100,precision:0,theme:this._theme,palette:this._palette,variant:"embedded"},ve=new Set(Object.entries(o||{}).filter(([,E])=>E?.locked).map(([E])=>E)),dn=new Set(p.filter(E=>E.type==="locked").map(E=>E.key)),je=new Set(Object.keys(o||{})),He=new Map(p.filter(E=>(E.type==="min"||E.type==="max")&&je.has(E.key)).map(E=>[JSON.stringify([E.type,E.key]),E])),Ye=[...[...ve].map(E=>w`
          <span
            slot="slice-decorator"
            data-lock-badge
            data-key=${E}
            class=${F({"pie-lock-badge":!0,hit:dn.has(E)})}
            aria-hidden="true"
            title=${`${this._labelForKey(E)} locked`}
            >${b_}</span
          >
        `),...[...He.values()].map(E=>w`
          <span
            slot="slice-decorator"
            data-limit-badge
            data-key=${E.key}
            data-limit-type=${E.type}
            class=${F({"pie-limit-badge":!0,[E.type]:!0,[E.severity||"hard"]:!0,hit:!0})}
            aria-hidden="true"
            title=${`${this._labelForKey(E.key)} ${E.type==="min"?"minimum":"maximum"} reached`}
          >
            ${E.type==="min"?__:E_}
          </span>
        `)];return w`
      <section
        class="workbench"
        @vector-select=${E=>this._handleSelect(E.detail)}
        @vector-preview=${E=>this._handlePreview(E.detail)}
        @vector-change=${E=>this._handleChange(E.detail)}
        @vector-cancel=${()=>this._cancelPreview()}
        @vector-constraint-hit=${E=>this._handleConstraintHit(E.detail)}
      >
        <div class="toolbar">
          <div>
            <h2>Recipe Designer</h2>
            <p data-status>${this._statusText()}</p>
          </div>
          <div class="toolbar-actions">
            <button
              data-action="undo"
              ?disabled=${!this._history.length}
              @click=${()=>this._undo()}
            >
              Undo
            </button>
            <button
              data-action="redo"
              ?disabled=${!this._future.length}
              @click=${()=>this._redo()}
            >
              Redo
            </button>
            <button
              data-action="reset"
              @click=${()=>this._loadDocument(this._document||{version:1,oils:this._oilVector})}
            >
              Reset
            </button>
          </div>
        </div>

        <div class="visual-grid">
          <article class="surface chart-card">
            <div class="card-heading">
              <h3>Quality Radar</h3>
              <span>axis reach</span>
            </div>
            <vector-radar-chart
              .axes=${Y.axes}
              .value=${Y.value}
              .previewValue=${Y.previewValue}
              .targetValue=${Y.targetValue}
              .reachableRange=${Y.reachableRange}
              .selectedKey=${Y.selectedKey}
              .hits=${Y.hits}
              .precision=${Y.precision}
              .showValues=${Y.showValues}
            ></vector-radar-chart>
            <div class="quality-rail-list">
              ${te(this._qualityAxes,E=>E.key,E=>this._qualityRow(E,e,n))}
            </div>
          </article>

          <article class="surface chart-card">
            <div class="card-heading">
              <h3>Oil Blend</h3>
              <span
                >${y(ht(this._preview?.oilVector||this._oilVector),1)}%</span
              >
            </div>
            <vector-pie-chart
              .items=${X.items}
              .value=${X.value}
              .constraints=${X.constraints}
              .total=${X.total}
              .selectedKey=${X.selectedKey}
              .hits=${X.hits}
              .precision=${X.precision}
              .centerValue=${X.centerValue}
              .centerLabel=${X.centerLabel}
              .centerPrecision=${X.centerPrecision}
              .palette=${X.palette}
            >
              ${Ye}
              <vector-constraint-rail
                slot="after-legend"
                data-oil-rail
                .item=${k.item}
                .value=${k.value}
                .constraint=${k.constraint}
                .role=${k.role}
                .hits=${k.hits}
                .rangeMin=${k.rangeMin}
                .rangeMax=${k.rangeMax}
                .precision=${k.precision}
                .palette=${k.palette}
                .variant=${k.variant}
              ></vector-constraint-rail>
            </vector-pie-chart>
          </article>

          <aside class="side-stack">
            <article class="surface">
              <div class="card-heading">
                <h3>Limits</h3>
                <span>${p.length}</span>
              </div>
              <constraint-feedback-list
                .hits=${p}
              ></constraint-feedback-list>
            </article>
          </aside>
        </div>

        <div class="control-grid">
          <article class="surface formula-panel">
            <div class="card-heading"><h3>Formula</h3></div>
            <div class="formula-stack">
              <div class="measurement-toggles system-only">
                <vector-unit-toggle
                  .label=${"System"}
                  .groupKey=${"system"}
                  .options=${k_}
                  .unitKey=${this._measurementUnitKey}
                  .measurementSystem=${this._measurementSystem}
                ></vector-unit-toggle>
              </div>
              <div class="batch-size-grid">
                <vector-quantity-input
                  .item=${c}
                  .value=${i.oil_weight_g||0}
                  .constraint=${this._formulaConstraints.oil_weight_g||{}}
                  .unitOptions=${c.unitOptions??[]}
                  .unitKey=${""}
                  .measurementSystem=${this._measurementSystem}
                  .basis=${"weight"}
                  .measurementMeasure=${"weight"}
                  .role=${"formula"}
                  .context=${a}
                  .palette=${this._palette}
                ></vector-quantity-input>
                <vector-quantity-input
                  .item=${l}
                  .value=${i.batch_volume_ml||0}
                  .constraint=${this._formulaConstraints.batch_volume_ml||{}}
                  .unitOptions=${l.unitOptions??[]}
                  .unitKey=${""}
                  .measurementSystem=${this._measurementSystem}
                  .basis=${"volume"}
                  .measurementMeasure=${"volume"}
                  .role=${"formula"}
                  .context=${a}
                  .palette=${this._palette}
                ></vector-quantity-input>
              </div>
              <vector-choice-control
                .item=${H_}
                .options=${U_}
                .value=${this._formulaChoices.lye_type}
                .role=${"formula_choice"}
              ></vector-choice-control>
              <vector-amount-list
                .items=${Ze}
                .values=${i}
                .constraints=${this._formulaConstraints}
                .thresholds=${_}
                .unitPreferences=${this._unitPreferences}
                .measurementSystem=${this._measurementSystem}
                .basis=${"percent_oils"}
                .measurementScope=${"oils"}
                .measurementMeasure=${"scalar"}
                .context=${a}
                .role=${"formula"}
                .control=${"slider"}
                .unitDisplay=${"text"}
                .activeEmphasis=${!1}
                .palette=${this._palette}
              ></vector-amount-list>
            </div>
          </article>

          <article class="surface additive-panel">
            <div class="card-heading"><h3>Additives</h3></div>
            <div class="additive-stack">
              <div class="measurement-toggles additive-toggles">
                <vector-unit-toggle
                  .label=${"Basis"}
                  .groupKey=${"scope"}
                  .options=${A_}
                  .unitKey=${this._measurementScopeKey}
                  .measurementScope=${this._measurementScope}
                ></vector-unit-toggle>
                <vector-unit-toggle
                  .label=${"Measure"}
                  .groupKey=${"measure"}
                  .options=${R_}
                  .unitKey=${this._measurementMeasureKey}
                  .measurementMeasure=${this._measurementMeasure}
                ></vector-unit-toggle>
              </div>
              <vector-amount-list
                .items=${u}
                .values=${s}
                .constraints=${this._additiveConstraints}
                .thresholds=${b}
                .unitPreferences=${this._unitPreferences}
                .measurementSystem=${this._measurementSystem}
                .basis=${P}
                .measurementScope=${this._measurementScope}
                .measurementMeasure=${this._measurementMeasure}
                .context=${a}
                .role=${"additive"}
                .control=${"slider"}
                .palette=${this._palette}
              ></vector-amount-list>
              <vector-summary-meter
                .items=${N}
              ></vector-summary-meter>
            </div>
          </article>

          <article class="surface">
            <div class="card-heading">
              <h3>Oil Library</h3>
              <span>${this._selectedOilItems().length} selected</span>
            </div>
            <oil-search-list
              .items=${this._oilItems}
              .selectedKeys=${Object.keys(this._oilVector)}
              .palette=${this._palette}
            ></oil-search-list>
          </article>
        </div>
      </section>
    `}_loadDocument(e){this._oilItems=cp(e),this._oilVector=wc(e),this._oilConstraints=v(v({},Dc(this._oilItems.map(r=>r.key))),e.oilConstraints||{}),this._qualityAxes=cn,this._qualityConstraints=Object.fromEntries(this._qualityAxes.map(r=>[r.key,{min:r.min,max:r.max,preferredMin:r.preferredMin,preferredMax:r.preferredMax,step:r.step||1}])),this._qualityVector=Fe(this._oilVector),this._reachableRange=Nt(this._oilVector,this._oilConstraints,this._qualityAxes),this._selectedOil=Object.keys(this._oilVector)[0]||"",this._selectedQuality=this._qualityAxes[0]?.key||"",this._selectionRole="composition",this._preview=null,this._hits=[],this._history=[],this._future=[],this._measurementSystem=e.measurementSystem||"metric",this._measurementUnitKey=this._measurementSystem,this._measurementScope="oils",this._measurementScopeKey="oils",this._measurementMeasure="weight",this._measurementMeasureKey="weight",this._measurementBasis="weight",this._batchOilWeightG=Number(e.batchOilWeightG||1800),this._unitPreferences=v({},e.unitPreferences||{});let n=Object.fromEntries([...Ie,...Ze].map(r=>[r.key,r.defaultValue??0]));this._formulaValues=v(v({},n),e.formulaValues||{}),this._formulaValues.oil_weight_g=this._batchOilWeightG,this._formulaChoices=v({lye_type:"naoh"},e.formulaChoices||{}),this._selectedAdditives=[...e.selectedAdditives||["fragrance","kaolin_clay","sodium_lactate"]],this._additiveValues=v(v({},this._initialAdditiveValues()),e.additiveValues||{}),this._selectedAdditive=this._selectedAdditives[0]||"fragrance",this._scalarPreview=null,this._initialized=!0,this.requestUpdate()}_initialAdditiveValues(){let e=new Set(this._selectedAdditives||[]);return Object.fromEntries(this._additiveItems.map(n=>[n.key,e.has(n.key)?n.defaultValue??0:0]))}_emitDocument(e){let n={version:1,oils:ne(this._oilVector),oilConstraints:structuredClone(this._oilConstraints),formulaValues:v({},this._formulaValues),formulaChoices:v({},this._formulaChoices),selectedAdditives:[...this._selectedAdditives],additiveValues:v({},this._additiveValues),batchOilWeightG:this._batchOilWeightG,measurementSystem:this._measurementSystem,unitPreferences:v({},this._unitPreferences),referenceData:this._document?.referenceData};this._document=n,this.dispatchEvent(new CustomEvent("calculator-change",{detail:{document:n,source:e},bubbles:!0,composed:!0}))}_handleSelect(e){let{source:n,role:r,key:o}=e;if(o){if(this._additiveItems.some(i=>i.key===o)||[...Ie,...Ze].some(i=>i.key===o)){this._selectedAdditive=o,this.requestUpdate();return}r==="metric"||this._qualityAxes.some(i=>i.key===o)?(this._selectedQuality=o,this._selectionRole="metric"):n==="constraint"&&this._qualityAxes.some(i=>i.key===o)?(this._selectedQuality=o,this._selectionRole="metric"):(this._selectedOil=o,this._selectionRole="composition"),this.requestUpdate()}}_handlePreview(e){this._queuePreview(e)}_queuePreview(e){if(this._pendingPreviewDetail=e||{},this._previewFrame)return;let n=()=>{this._previewFrame=0;let o=this._pendingPreviewDetail;this._pendingPreviewDetail=null,o&&this._applyPreview(o)},r=globalThis.requestAnimationFrame;if(typeof r!="function"){n();return}this._previewFrame=r(n)}_flushPreview(){if(!this._pendingPreviewDetail)return;if(this._previewFrame){let n=globalThis.cancelAnimationFrame;typeof n=="function"&&n(this._previewFrame),this._previewFrame=0}let e=this._pendingPreviewDetail;this._pendingPreviewDetail=null,this._applyPreview(e)}_clearPendingPreview(){if(this._pendingPreviewDetail=null,!this._previewFrame)return;let e=globalThis.cancelAnimationFrame;typeof e=="function"&&e(this._previewFrame),this._previewFrame=0}_applyPreview(e){if(e.role==="additive"||e.role==="formula"){this._previewScalar(e);return}if(e.role==="constraint"){this._previewConstraint(e);return}if(e.role==="composition"){let n=this._solveCompositionDetail(e);this._preview={transactionId:e.transactionId,oilVector:n.oilVector,qualityVector:n.qualityVector,oilConstraints:this._oilConstraints,qualityConstraints:this._qualityConstraints,reachableRange:this._reachableRange,hits:n.hits},this.requestUpdate();return}if(e.role==="metric"){let n=this._metricTarget(e),r=qn({oilVector:this._oilVector,targetQuality:n,oilConstraints:this._activeOilConstraints(),axes:this._qualityAxes});this._preview={transactionId:e.transactionId,oilVector:r.oilVector,qualityVector:r.qualityVector,oilConstraints:this._oilConstraints,qualityConstraints:this._qualityConstraints,reachableRange:this._reachableRange,targetQuality:n,hits:r.hits},this.requestUpdate()}}_handleChange(e){if(this._flushPreview(),e.role==="measurement"){this._changeMeasurement(e);return}if(e.role==="formula_choice"){this._formulaChoices=M(v({},this._formulaChoices),{[e.key]:String(e.value??"")}),this.requestUpdate(),this._emitDocument("formula");return}if(e.role==="selection"){if(e.listType==="ingredient"||this._additiveItems.some(n=>n.key===e.key)){this._changeAdditiveSelection(e.key,e.action);return}this._changeOilSelection(e.key,e.action);return}if(e.role==="additive"||e.role==="formula"){this._commitScalar(e);return}if(e.role==="constraint"){if(this._commitConstraintPreview(e))return;this._changeConstraint(e);return}if(e.role==="composition"){let n=this._solveCompositionDetail(e);this._commitOilVector(n.oilVector,n.hits);return}if(e.role==="metric"){let n=this._metricTarget(e),r=qn({oilVector:this._oilVector,targetQuality:n,oilConstraints:this._activeOilConstraints(),axes:this._qualityAxes});this._commitOilVector(r.oilVector,r.hits)}}_handleConstraintHit(e){this._hits=e.hits||[],e.key&&(this._additiveItems.some(n=>n.key===e.key)||Ze.some(n=>n.key===e.key)?this._selectedAdditive=e.key:this._qualityAxes.some(n=>n.key===e.key)?(this._selectedQuality=e.key,this._selectionRole="metric"):(this._selectedOil=e.key,this._selectionRole="composition")),this.requestUpdate()}_previewScalar(e){let n=e.key,r=e.role,o=r==="formula"?this._formulaValues:this._additiveValues,i=this._scalarTarget(e,o[n]??0),s=r==="formula"?this._resolveFormulaValues(M(v({},o),{[n]:i}),n,i):M(v({},o),{[n]:i});this._scalarPreview={scope:r,key:n,values:s,hits:this._scalarHits(r==="formula"?s:this._formulaValues,r==="additive"?s:this._additiveValues)},this.requestUpdate()}_commitScalar(e){let n=e.key,r=e.role,o=this._scalarTarget(e,r==="formula"?this._formulaValues[n]:this._additiveValues[n]);if(r==="formula"){let i=this._resolveFormulaValues(M(v({},this._formulaValues),{[n]:o}),n,o);this._batchOilWeightG=Number(i.oil_weight_g||this._batchOilWeightG),this._formulaValues=i}else this._additiveValues=M(v({},this._additiveValues),{[n]:o}),this._selectedAdditives=this._activeAdditiveKeys(this._additiveValues);this._scalarPreview=null,this.requestUpdate(),this._emitDocument(r==="formula"?"formula":"additive")}_scalarTarget(e,n=0){let r=e.key;return Number(e.canonicalValue??e.proposedValue?.[r]??e.requestedValue?.[r]??n??0)}_changeMeasurement(e){if(e.key==="system"){this._measurementUnitKey=e.unitKey||this._measurementUnitKey,this._measurementSystem=e.measurementSystem||this._measurementSystem,this._unitPreferences={},this.requestUpdate(),this._emitDocument("measurement");return}if(e.key==="scope"){this._measurementScopeKey=e.unitKey||this._measurementScopeKey,this._measurementScope=e.measurementScope||(e.unitKey==="oils"||e.unitKey==="batch"?e.unitKey:this._measurementScope),this._measurementBasis=this._activeMeasurementBasis(),this._unitPreferences={},this.requestUpdate(),this._emitDocument("measurement");return}if(e.key==="measure"){this._measurementMeasureKey=e.unitKey||this._measurementMeasureKey,this._measurementMeasure=e.measurementMeasure||(e.unitKey==="weight"||e.unitKey==="volume"||e.unitKey==="scalar"?e.unitKey:this._measurementMeasure),this._measurementBasis=this._activeMeasurementBasis(),this._unitPreferences={},this.requestUpdate(),this._emitDocument("measurement");return}if(e.key&&e.unitKey){this._unitPreferences=M(v({},this._unitPreferences),{[e.key]:e.unitKey}),this.requestUpdate(),this._emitDocument("measurement");return}this._measurementUnitKey=e.unitKey||this._measurementUnitKey,this._measurementSystem=e.measurementSystem||this._measurementSystem,this._measurementBasis=e.basis||this._activeMeasurementBasis(),this.requestUpdate(),this._emitDocument("measurement")}_changeAdditiveSelection(e,n){if(!e)return;let r=new Set(this._selectedAdditives),o=this._additiveItems.find(i=>i.key===e);n==="remove"?r.delete(e):(r.add(e),!(e in this._additiveValues)&&o&&(this._additiveValues=M(v({},this._additiveValues),{[e]:o.defaultValue??0}))),this._selectedAdditives=[...r],this._selectedAdditive=e,this._scalarPreview=null,this.requestUpdate(),this._emitDocument("selection")}_previewConstraint(e){let n=this._resolveConstraintPreview(e);this._preview=n,this.requestUpdate()}_commitConstraintPreview(e){return!this._preview||this._preview.transactionId!==e.transactionId||!this._preview.constraintRole?!1:(this._pushHistory(),this._oilVector=ne(this._preview.oilVector||this._oilVector),this._qualityVector=v({},this._preview.qualityVector),this._oilConstraints=this._preview.oilConstraints||this._oilConstraints,this._qualityConstraints=this._preview.qualityConstraints||this._qualityConstraints,this._reachableRange=this._preview.reachableRange||Nt(this._oilVector,this._oilConstraints,this._qualityAxes),this._hits=this._preview.hits||[],this._preview=null,this._future=[],this.requestUpdate(),this._emitDocument("constraint"),!0)}_resolveConstraintPreview(e){return e.constraintRole!=="composition"?this._resolveQualityConstraintPreview(e):this._resolveOilConstraintPreview(e)}_resolveOilConstraintPreview(e){let n=e.key,r=this._oilConstraints,o=this._oilVector,i=this._constraintPatchForLockedValue(n,e.constraint||{},r[n]||{},Number(o[n]||0),"%"),s=fp(o,r,n,i.constraint,this._selectedOilItems()),a=Nt(s.oilVector,s.oilConstraints,this._qualityAxes);return{transactionId:e.transactionId,constraintRole:"composition",oilVector:s.oilVector,oilConstraints:s.oilConstraints,qualityVector:s.qualityVector,qualityConstraints:this._qualityConstraints,reachableRange:a,hits:i.hits}}_resolveQualityConstraintPreview(e){let n=e.key,r=this._qualityConstraints,o=Number(this._qualityVector[n]||0),i=this._constraintPatchForLockedValue(n,e.constraint||{},r[n]||{},o,""),s=M(v({},r),{[n]:v(v({},r[n]||{}),i.constraint)}),a=s[n]||{},c=$(o,Number(a.min??-1/0),Number(a.max??1/0)),l=this._oilVector,u=this._qualityVector,d=i.hits;if(!d.length&&Number.isFinite(c)&&Math.abs(c-o)>.001){let p=qn({oilVector:this._oilVector,targetQuality:M(v({},this._qualityVector),{[n]:c}),oilConstraints:this._oilConstraints,axes:this._qualityAxes});l=p.oilVector,u=p.qualityVector,d=p.hits||[]}return{transactionId:e.transactionId,constraintRole:"metric",oilVector:l,oilConstraints:this._oilConstraints,qualityVector:u,qualityConstraints:s,reachableRange:this._reachableRange,hits:d}}_constraintPatchForLockedValue(e,n,r,o,i){let a=!!v(v({},r),n).locked,c=v({},n),l=[];return a&&n.min!=null&&Number(n.min)>o&&(c.min=o,l.push(oe(e,"locked",`${this._labelForKey(e)} is locked at ${y(o,1)}${i}.`))),a&&n.max!=null&&Number(n.max)<o&&(c.max=o,l.push(oe(e,"locked",`${this._labelForKey(e)} is locked at ${y(o,1)}${i}.`))),{constraint:c,hits:l}}_solveCompositionDetail(e){if(e.proposedValue&&Object.keys(e.proposedValue).length>1){let o=ne(e.proposedValue);return{oilVector:o,qualityVector:Fe(o),hits:e.hits||[]}}let n=e.key,r=Number(e.proposedValue?.[n]??e.requestedValue?.[n]??this._oilVector[n]??0);return dp({oilVector:this._oilVector,key:n,target:r,oilConstraints:this._activeOilConstraints(),oilItems:this._selectedOilItems()})}_metricTarget(e){let n=e.key;return e.requestedValue&&Object.keys(e.requestedValue).length>1?e.requestedValue:M(v({},this._qualityVector),{[n]:Number(e.proposedValue?.[n]??e.requestedValue?.[n]??this._qualityVector[n]??0)})}_changeConstraint(e){this._preview=this._resolveConstraintPreview(e),this._commitConstraintPreview(e)}_changeOilSelection(e,n){if(e){if(this._pushHistory(),n==="add"&&!(e in this._oilVector))this._oilVector=M(v({},this._oilVector),{[e]:0}),this._selectedOil=e;else if(n==="remove"&&e in this._oilVector){if(Number(this._oilVector[e]||0)>0){let r=Mt({value:this._oilVector,key:e,target:0,constraints:this._oilConstraints,items:this._selectedOilItems(),total:100});this._oilVector=r.vector,this._hits=r.hits}delete this._oilVector[e],this._selectedOil=Object.keys(this._oilVector)[0]||""}this._qualityVector=Fe(this._oilVector),this._reachableRange=Nt(this._oilVector,this._oilConstraints,this._qualityAxes),this._preview=null,this._future=[],this.requestUpdate(),this._emitDocument("selection")}}_commitOilVector(e,n=[]){if(Zr(this._oilVector,e)<.001){this._preview=null,this._hits=n,this.requestUpdate();return}this._pushHistory(),this._oilVector=ne(e),this._qualityVector=Fe(this._oilVector),this._reachableRange=Nt(this._oilVector,this._oilConstraints,this._qualityAxes),this._preview=null,this._hits=n,this._future=[],this.requestUpdate(),this._emitDocument("composition")}_pushHistory(){this._history=[...this._history,ne(this._oilVector)].slice(-50)}_undo(){let e=this._history.at(-1);e&&(this._future=[ne(this._oilVector),...this._future].slice(0,50),this._history=this._history.slice(0,-1),this._oilVector=ne(e),this._qualityVector=Fe(this._oilVector),this._reachableRange=Nt(this._oilVector,this._oilConstraints,this._qualityAxes),this._preview=null,this._hits=[],this.requestUpdate(),this._emitDocument("history"))}_redo(){let e=this._future[0];e&&(this._history=[...this._history,ne(this._oilVector)].slice(-50),this._future=this._future.slice(1),this._oilVector=ne(e),this._qualityVector=Fe(this._oilVector),this._reachableRange=Nt(this._oilVector,this._oilConstraints,this._qualityAxes),this._preview=null,this._hits=[],this.requestUpdate(),this._emitDocument("history"))}_cancelPreview(){this._clearPendingPreview(),this._preview=null,this.requestUpdate()}_emitQualityRange(e,n){let r=e.currentTarget,o=r.dataset.qualityRange,i=this._qualityAxes.find(d=>d.key===o);if(!i)return;let s=i.key;n==="vector-preview"&&!r.dataset.transaction&&(r.dataset.transaction=T("quality-row"));let a=r.dataset.transaction||T("quality-row"),c=Number(r.value);this._selectedQuality=s,this._selectionRole="metric";let l=M(v({},this._qualityVector),{[s]:c}),u={source:"table",role:"metric",transactionId:a,key:s,previousValue:this._qualityVector,requestedValue:l,proposedValue:l,delta:y(c-Number(this._qualityVector[s]||0),4),hits:[]};n==="vector-preview"?this._handlePreview(u):(this._handleChange(u),delete r.dataset.transaction)}_qualityRow(e,n,r){let o=r[e.key]||{},i=Number(n[e.key]||0),s=Number(o.min??e.reachableMin??e.min??0),a=Number(o.max??e.reachableMax??e.max??100),c=e.preferredMin??s,l=e.preferredMax??a,u=e.key===this._selectedQuality,d=ae($(i,e.min??0,e.max??100),e.step||1);return w`
      <div
        class=${F({"quality-row":!0,selected:u})}
        data-quality=${e.key}
        @click=${()=>this._selectQuality(e.key)}
      >
        <button class="quality-name" type="button" data-quality=${e.key}>
          ${e.label}
        </button>
        <div class="quality-combo">
          <div class="quality-track" aria-hidden="true">
            <span
              class="quality-reach"
              ${re({"--quality-start":`${this._qualityPct(s,e)}%`,"--quality-width":`${Math.max(0,this._qualityPct(a,e)-this._qualityPct(s,e))}%`})}
            ></span>
            <span
              class="quality-preferred"
              ${re({"--quality-start":`${this._qualityPct(c,e)}%`,"--quality-width":`${Math.max(0,this._qualityPct(l,e)-this._qualityPct(c,e))}%`})}
            ></span>
            <span
              class="quality-current"
              ${re({"--quality-position":`${this._qualityPct(i,e)}%`})}
            ></span>
          </div>
          <input
            data-quality-range=${e.key}
            type="range"
            min=${e.min??0}
            max=${e.max??100}
            step=${e.step||1}
            .value=${String(y(d,1))}
            aria-label=${`${e.label} target`}
            @input=${p=>this._emitQualityRange(p,"vector-preview")}
            @change=${p=>this._emitQualityRange(p,"vector-change")}
          />
        </div>
        <output>${y(i,1)}</output>
        <span class="quality-reach-label"
          >${y(s,1)}-${y(a,1)}</span
        >
      </div>
    `}_selectQuality(e){this._selectedQuality=e,this._selectionRole="metric",this.requestUpdate()}_qualityPct(e,n){let r=Number(n.min??0),o=Number(n.max??100);return $((Number(e||0)-r)/(o-r||1)*100,0,100)}_activeOilConstraints(){return this._preview?.oilConstraints||this._oilConstraints}_activeQualityConstraints(){return this._preview?.qualityConstraints||this._qualityConstraints}_activeReachableRange(){return this._preview?.reachableRange||this._reachableRange}_activeFormulaValues(){let e=this._scalarPreview?.scope==="formula"?this._scalarPreview.values:this._formulaValues;return this._withBatchFormulaValues(e)}_activeAdditiveValues(){return this._scalarPreview?.scope==="additive"?this._scalarPreview.values:this._additiveValues}_activeAdditiveKeys(e=this._activeAdditiveValues()){return this._additiveItems.map(n=>n.key).filter(n=>Math.abs(Number(e?.[n]||0))>1e-9)}_withBatchFormulaValues(e=this._formulaValues){let n=Number(e.oil_weight_g||this._batchOilWeightG||0),r=this._batchEstimateForOilWeight(n,e,this._activeAdditiveValues(),this._preview?.oilVector||this._oilVector);return M(v({},e),{oil_weight_g:y(n,1),batch_volume_ml:y(r.volumeMl,1)})}_resolveFormulaValues(e,n,r){let o=v({},e);if(n==="batch_volume_ml"){let i=this._oilWeightForBatchVolume(r,o,this._activeAdditiveValues(),this._preview?.oilVector||this._oilVector);o.oil_weight_g=y(i,1)}else n==="oil_weight_g"&&(o.oil_weight_g=y(r,1));return this._withBatchFormulaValues(o)}_activeMeasurementBasis(){return this._measurementMeasure==="volume"?"volume":"weight"}_batchContext(e=this._oilVector,n=this._activeFormulaValues(),r=this._activeAdditiveValues()){let o=this._batchEstimateForOilWeight(Number(n.oil_weight_g||this._batchOilWeightG||0),n,r,e);return M(v({},o),{densities:this._document?.referenceData?.density||{}})}_batchItems(e){return Ie.map(n=>n.key!=="batch_volume_ml"?n:M(v({},n),{defaultValue:y(Number(e.volumeMl??0),1)}))}_batchSizeItem(){return Ie.find(e=>e.key===(this._measurementMeasure==="volume"?"batch_volume_ml":"oil_weight_g"))||Ie[0]}_batchSizeUnitOptions(){let e=this._measurementMeasure==="volume"?"volume":"weight";return(this._batchSizeItem().unitOptions??[]).filter(n=>n.measure===e)}_additiveItemsForContext(e){let n=e?.densities||{};return this._additiveItems.map(r=>{let o=r.material||r.key,i=Number.isFinite(Number(n[o]));return M(v({},r),{unitOptions:(r.unitOptions||[]).filter(s=>s.measure!=="volume"||i)})})}_batchEstimateForOilWeight(e,n=this._formulaValues,r=this._additiveValues,o=this._oilVector){return Th({oilWeightG:e,oilVector:o,formulaValues:n,additiveValues:r,selectedAdditives:this._activeAdditiveKeys(r),additiveItems:this._additiveItems,document:this._document})}_oilWeightForBatchVolume(e,n=this._formulaValues,r=this._additiveValues,o=this._oilVector){let s=this._batchEstimateForOilWeight(1e3,n,r,o).volumeMl/1e3||1;return $(Number(e||0)/s,Ie[0].min,Ie[0].max)}_selectedOilItems(){let e=new Set(Object.keys(this._oilVector));return this._oilItems.filter(n=>e.has(n.key))}_labelForKey(e){return this._oilItems.find(n=>n.key===e)?.label||this._qualityAxes.find(n=>n.key===e)?.label||[...Ie,...Ze,...this._additiveItems].find(n=>n.key===e)?.label||e}_activeHits(){return this._preview?.hits||this._hits||[]}_scalarHits(e=this._formulaValues,n=this._additiveValues){let r=Ze.flatMap(s=>this._thresholdHit(s,e[s.key])),o=new Set(this._activeAdditiveKeys(n)),i=this._additiveItems.filter(s=>o.has(s.key)).flatMap(s=>this._thresholdHit(s,n[s.key]));return[...r,...i]}_thresholdHit(e,n){let r=(e.thresholds||[]).find(o=>Number(n||0)>=Number(o.min)&&Number(n||0)<=Number(o.max));return!r||r.severity==="ok"?[]:[oe(e.key,"threshold",r.label||`${e.label||e.key} is in ${r.severity} range.`,r.severity==="danger"?"hard":"warn")]}_formulaSummary(e,n){let r=new Set(this._activeAdditiveKeys(n)),o=Object.entries(n||{}).filter(([a])=>r.has(a)).reduce((a,[,c])=>a+Number(c||0),0),i=Number(n.fragrance||0),s=Number(e.lye_concentration||0);return[{key:"batch_volume_ml",label:"Batch volume",value:Number(e.batch_volume_ml||0),min:400,max:16e3,unit:" ml",precision:0,thresholds:[]},{key:"total_additives",label:"Additive load",value:o,min:0,max:10,unit:"%",precision:1,thresholds:[{key:"normal",min:0,max:5,severity:"ok"},{key:"busy",min:5.1,max:8,severity:"warn"},{key:"crowded",min:8.1,max:10,severity:"danger"}]},{key:"fragrance_load",label:"Fragrance load",value:i,min:0,max:6,unit:"%",precision:1,thresholds:this._additiveItems.find(a=>a.key==="fragrance")?.thresholds||[]},{key:"lye_strength",label:"Lye strength",value:s,min:25,max:45,unit:"%",precision:1,thresholds:Ze.find(a=>a.key==="lye_concentration")?.thresholds||[]}]}_statusText(){return this._preview?"Previewing a recipe change.":this._hits.length?this._hits[0].message:"Approximate quality model; fatty-acid data is a demo fixture."}};function B_(){globalThis.customElements&&!customElements.get("recipe-vector-workbench")&&customElements.define("recipe-vector-workbench",Rc)}B_();var Lc=(t,e)=>e.some(n=>t instanceof n),Oh,Ph;function q_(){return Oh||(Oh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function z_(){return Ph||(Ph=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var $c=new WeakMap,Oc=new WeakMap,Ui=new WeakMap;function W_(t){let e=new Promise((n,r)=>{let o=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{n(un(t.result)),o()},s=()=>{r(t.error),o()};t.addEventListener("success",i),t.addEventListener("error",s)});return Ui.set(e,t),e}function G_(t){if($c.has(t))return;let e=new Promise((n,r)=>{let o=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{n(),o()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)});$c.set(t,e)}var Vc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $c.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Fh(t){Vc=t(Vc)}function K_(t){return z_().includes(t)?function(...e){return t.apply(Fc(this),e),un(this.request)}:function(...e){return un(t.apply(Fc(this),e))}}function Q_(t){return typeof t=="function"?K_(t):(t instanceof IDBTransaction&&G_(t),Lc(t,q_())?new Proxy(t,Vc):t)}function un(t){if(t instanceof IDBRequest)return W_(t);if(Oc.has(t))return Oc.get(t);let e=Q_(t);return e!==t&&(Oc.set(t,e),Ui.set(e,t)),e}var Fc=t=>Ui.get(t);function jh(t,e,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){let s=indexedDB.open(t,e),a=un(s);return r&&s.addEventListener("upgradeneeded",c=>{r(un(s.result),c.oldVersion,c.newVersion,un(s.transaction),c)}),n&&s.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),o&&c.addEventListener("versionchange",l=>o(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}var Z_=["get","getKey","getAll","getAllKeys","count"],Y_=["put","add","delete","clear"],Pc=new Map;function Lh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pc.get(e))return Pc.get(e);let n=e.replace(/FromIndex$/,""),r=e!==n,o=Y_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||Z_.includes(n)))return;let i=async function(s,...a){let c=this.transaction(s,o?"readwrite":"readonly"),l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),o&&c.done]))[0]};return Pc.set(e,i),i}Fh(t=>M(v({},t),{get:(e,n,r)=>Lh(e,n)||t.get(e,n,r),has:(e,n)=>!!Lh(e,n)||t.has(e,n)}));var J_=["continue","continuePrimaryKey","advance"],$h={},jc=new WeakMap,Hh=new WeakMap,X_={get(t,e){if(!J_.includes(e))return t[e];let n=$h[e];return n||(n=$h[e]=function(...r){jc.set(this,Hh.get(this)[e](...r))}),n}};async function*eE(...t){let e=this;if(e instanceof IDBCursor||(e=await e.openCursor(...t)),!e)return;e=e;let n=new Proxy(e,X_);for(Hh.set(n,e),Ui.set(n,Fc(e));e;)yield n,e=await(jc.get(n)||e.continue()),jc.delete(n)}function Vh(t,e){return e===Symbol.asyncIterator&&Lc(t,[IDBIndex,IDBObjectStore,IDBCursor])||e==="iterate"&&Lc(t,[IDBIndex,IDBObjectStore])}Fh(t=>M(v({},t),{get(e,n,r){return Vh(e,n)?eE:t.get(e,n,r)},has(e,n){return Vh(e,n)||t.has(e,n)}}));var tE="red-mountain-soap-calculator",Uh="current",Bi=class t{constructor(){this.document=Rn(Ic());this.status=Rn("Your recipe is stored only in this browser.");this.statusIsError=Rn(!1);this.load()}update(e){this.document.set(e),this.statusIsError.set(!1),this.status.set("Saved in this browser."),this.persist(e)}reset(){this.update(Ic())}database(){return this.databasePromise??=jh(tE,1,{upgrade(e){e.createObjectStore("documents")}}),this.databasePromise}async load(){try{let n=await(await this.database()).get("documents",Uh);n?.version===1&&(this.document.set(n),this.status.set("Loaded the recipe saved in this browser."))}catch{this.statusIsError.set(!0),this.status.set("Browser storage is unavailable. This recipe will last only until the page closes.")}}async persist(e){try{await(await this.database()).put("documents",e,Uh)}catch{this.statusIsError.set(!0),this.status.set("The calculator could not save locally. Export important recipes before leaving.")}}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=ee({token:t,factory:t.\u0275fac,providedIn:"root"})}};var qi=class t{constructor(){this.state=R(Bi)}onCalculatorChange(e){let n=e.detail;n?.document&&this.state.update(n.document)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=Wa({type:t,selectors:[["rms-root"]],decls:28,vars:4,consts:[[1,"calculator-shell"],[1,"calculator-header"],["href","https://redmountainsoap.com/",1,"calculator-brand"],["src","./icons/icon.svg","alt","","width","44","height","44"],[1,"calculator-heading"],[1,"calculator-eyebrow"],["aria-live","polite",1,"calculator-status"],["type","button",1,"calculator-reset",3,"click"],[1,"calculator-workspace"],["aria-label","Recipe designer"],[3,"calculator-change","document"],["aria-labelledby","calculator-safety-title",1,"calculator-safety"],["id","calculator-safety-title"]],template:function(n,r){n&1&&(ye(0,"div",0)(1,"header",1)(2,"a",2),ii(3,"img",3),ye(4,"span")(5,"strong"),$e(6,"Red Mountain Soap"),Ee(),ye(7,"small"),$e(8,"Recipe tools"),Ee()()(),ye(9,"div",4)(10,"p",5),$e(11,"Soap Recipe Calculator"),Ee(),ye(12,"h1"),$e(13,"Design and balance a soap recipe"),Ee(),ye(14,"p"),$e(15," Adjust oils, formulation settings, and additives while the visual tools show how the recipe changes. "),Ee(),ye(16,"p",6),$e(17),Ee(),ye(18,"button",7),Mr("click",function(){return r.state.reset()}),$e(19," Reset demo recipe "),Ee()()(),ye(20,"main",8)(21,"section",9)(22,"recipe-vector-workbench",10),Mr("calculator-change",function(i){return r.onCalculatorChange(i)}),Ee()(),ye(23,"aside",11)(24,"h2",12),$e(25,"Safety and data note"),Ee(),ye(26,"p"),$e(27," This calculator is an educational formulation aid, not a substitute for independent lye calculations, supplier data, protective equipment, or established soapmaking safety procedures. Reference values are approximate defaults and recipes are stored only in your browser. "),Ee()()()()),n&2&&(Sr(16),ai("warning",r.state.statusIsError()),Sr(),ci(" ",r.state.status()," "),Sr(5),si("document",r.state.document()))},encapsulation:2})}};var Hc="Service workers are disabled or not supported by this browser",Yn=class{serviceWorker;worker;registration;events;constructor(e,n){if(this.serviceWorker=e,!e)this.worker=this.events=this.registration=new ie(r=>r.error(new A(5601,!1)));else{let r=null,o=new ke;this.worker=new ie(l=>(r!==null&&l.next(r),o.subscribe(u=>l.next(u))));let i=()=>{let{controller:l}=e;l!==null&&(r=l,o.next(r))};e.addEventListener("controllerchange",i),i(),this.registration=this.worker.pipe(yn(()=>e.getRegistration().then(l=>{if(!l)throw new A(5601,!1);return l})));let s=new ke;this.events=s.asObservable();let a=l=>{let{data:u}=l;u?.type&&s.next(u)};e.addEventListener("message",a),n?.get(Jt,null,{optional:!0})?.onDestroy(()=>{e.removeEventListener("controllerchange",i),e.removeEventListener("message",a)})}}postMessage(e,n){return new Promise(r=>{this.worker.pipe($t(1)).subscribe(o=>{o.postMessage(v({action:e},n)),r()})})}postMessageWithOperation(e,n,r){let o=this.waitForOperationCompleted(r),i=this.postMessage(e,n);return Promise.all([i,o]).then(([,s])=>s)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(e){let n;return typeof e=="string"?n=r=>r.type===e:n=r=>e.includes(r.type),this.events.pipe(yo(n))}nextEventOfType(e){return this.eventsOfType(e).pipe($t(1))}waitForOperationCompleted(e){return new Promise((n,r)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(yo(o=>o.nonce===e),$t(1),Be(o=>{if(o.result!==void 0)return o.result;throw new Error(o.error)})).subscribe({next:n,error:r})})}get isEnabled(){return!!this.serviceWorker}},nE=(()=>{class t{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new ke;constructor(n){if(this.sw=n,!n.isEnabled){this.messages=Xe,this.notificationClicks=Xe,this.notificationCloses=Xe,this.pushSubscriptionChanges=Xe,this.subscription=Xe;return}this.messages=this.sw.eventsOfType("PUSH").pipe(Be(o=>o.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(Be(o=>o.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(Be(o=>o.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(Be(o=>o.data)),this.pushManager=this.sw.registration.pipe(Be(o=>o.pushManager));let r=this.pushManager.pipe(yn(o=>o.getSubscription()));this.subscription=new ie(o=>{let i=r.subscribe(o),s=this.subscriptionChanges.subscribe(o);return()=>{i.unsubscribe(),s.unsubscribe()}})}requestSubscription(n){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(Hc));let r={userVisibleOnly:!0},o=this.decodeBase64(n.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),i=new Uint8Array(new ArrayBuffer(o.length));for(let s=0;s<o.length;s++)i[s]=o.charCodeAt(s);return r.applicationServerKey=i,new Promise((s,a)=>{this.pushManager.pipe(yn(c=>c.subscribe(r)),$t(1)).subscribe({next:c=>{this.subscriptionChanges.next(c),s(c)},error:a})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(Hc));let n=r=>{if(r===null)throw new A(5602,!1);return r.unsubscribe().then(o=>{if(!o)throw new A(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((r,o)=>{this.subscription.pipe($t(1),yn(n)).subscribe({next:r,error:o})})}decodeBase64(n){return atob(n)}static \u0275fac=function(r){return new(r||t)(B(Yn))};static \u0275prov=ee({token:t,factory:t.\u0275fac})}return t})(),rE=(()=>{class t{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(n){if(this.sw=n,!n.isEnabled){this.versionUpdates=Xe,this.unrecoverable=Xe;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Hc));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let n=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:n},n).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new A(5601,!1));let n=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:n},n)}static \u0275fac=function(r){return new(r||t)(B(Yn))};static \u0275prov=ee({token:t,factory:t.\u0275fac})}return t})(),qh=new j("");function oE(){let t=R(io);if(!("serviceWorker"in navigator&&t.enabled!==!1))return;let e=R(qh),n=R(be),r=R(Jt);n.runOutsideAngular(()=>{let o=navigator.serviceWorker,i=()=>o.controller?.postMessage({action:"INITIALIZE"});o.addEventListener("controllerchange",i),r.onDestroy(()=>{o.removeEventListener("controllerchange",i)})}),n.runOutsideAngular(()=>{let o,{registrationStrategy:i}=t;if(typeof i=="function")o=new Promise(s=>i().subscribe(()=>s()));else{let[s,...a]=(i||"registerWhenStable:30000").split(":");switch(s){case"registerImmediately":o=Promise.resolve();break;case"registerWithDelay":o=Bh(+a[0]||0);break;case"registerWhenStable":o=Promise.race([r.whenStable(),Bh(+a[0])]);break;default:throw new A(5600,!1)}}o.then(()=>{r.destroyed||navigator.serviceWorker.register(e,{scope:t.scope,updateViaCache:t.updateViaCache,type:t.type}).catch(s=>console.error(sr(5604,!1)))})})}function Bh(t){return new Promise(e=>setTimeout(e,t))}function iE(){let t=R(io),e=R(nt),n=!0;return new Yn(n&&t.enabled!==!1?navigator.serviceWorker:void 0,e)}var io=class{enabled;updateViaCache;type;scope;registrationStrategy};function zh(t,e={}){return qt([nE,rE,{provide:qh,useValue:t},{provide:io,useValue:e},{provide:Yn,useFactory:iE},Za(oE)])}var Wh={providers:[ca(),zh("ngsw-worker.js",{enabled:!mf(),registrationStrategy:"registerWhenStable:30000"})]};lc(qi,Wh).catch(t=>console.error(t));
