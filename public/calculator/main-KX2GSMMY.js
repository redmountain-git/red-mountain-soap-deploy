var Iu=Object.defineProperty,zy=Object.defineProperties,Wy=Object.getOwnPropertyDescriptor,Gy=Object.getOwnPropertyDescriptors;var Eu=Object.getOwnPropertySymbols;var Ky=Object.prototype.hasOwnProperty,Qy=Object.prototype.propertyIsEnumerable;var xu=t=>{throw TypeError(t)};var wu=(t,e,n)=>e in t?Iu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,b=(t,e)=>{for(var n in e||={})Ky.call(e,n)&&wu(t,n,e[n]);if(Eu)for(var n of Eu(e))Qy.call(e,n)&&wu(t,n,e[n]);return t},A=(t,e)=>zy(t,Gy(e));var h=(t,e,n)=>()=>{if(n)throw n[0];try{return t&&(e=t(t=0)),e}catch(r){throw n=[r],r}};var Zy=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(n){throw e=0,n}};var g=(t,e,n,r)=>{for(var o=r>1?void 0:r?Wy(e,n):e,i=t.length-1,s;i>=0;i--)(s=t[i])&&(o=(r?s(e,n,o):s(o))||o);return r&&o&&Iu(e,n,o),o};var Du=(t,e,n)=>e.has(t)||xu("Cannot "+n);var C=(t,e,n)=>(Du(t,e,"read from private field"),n?n.call(t):e.get(t)),S=(t,e,n)=>e.has(t)?xu("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),T=(t,e,n,r)=>(Du(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n);function V(t){let e=ye;return ye=t,e}function ko(){return ye}function Cu(t){if(No)throw new Error("");if(ye===null)return;ye.consumerOnSignalRead(t);let e=ye.producersTail;if(e!==void 0&&e.producer===t)return;let n,r=ye.recomputing;if(r&&(n=e!==void 0?e.nextProducer:ye.producers,n!==void 0&&n.producer===t)){ye.producersTail=n,n.lastReadVersion=t.version;return}let o=t.consumersTail;if(o!==void 0&&o.consumer===ye&&(!r||Xy(o,ye)))return;let i=Tn(ye),s={producer:t,consumer:ye,nextProducer:n,prevConsumer:o,lastReadVersion:t.version,nextConsumer:void 0};ye.producersTail=s,e!==void 0?e.nextProducer=s:ye.producers=s,i&&Au(t,s)}function Su(){As++}function Tu(t){if(!(Tn(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===As)){if(!t.producerMustRecompute(t)&&!Ls(t)){ks(t);return}t.producerRecomputeValue(t),ks(t)}}function Rs(t){if(t.consumers===void 0)return;let e=No;No=!0;try{for(let n=t.consumers;n!==void 0;n=n.nextConsumer){let r=n.consumer;r.dirty||Jy(r)}}finally{No=e}}function Os(){return ye?.consumerAllowSignalWrites!==!1}function Jy(t){t.dirty=!0,Rs(t),t.consumerMarkedDirty?.(t)}function ks(t){t.dirty=!1,t.lastCleanEpoch=As}function Ps(t){return t&&Mu(t),V(t)}function Mu(t){t.producersTail=void 0,t.recomputing=!0}function Nu(t,e){V(e),t&&ku(t)}function ku(t){t.recomputing=!1;let e=t.producersTail,n=e!==void 0?e.nextProducer:t.producers;if(n!==void 0){if(Tn(t))do n=Vs(n);while(n!==void 0);e!==void 0?e.nextProducer=void 0:t.producers=void 0}}function Ls(t){for(let e=t.producers;e!==void 0;e=e.nextProducer){let n=e.producer,r=e.lastReadVersion;if(r!==n.version||(Tu(n),r!==n.version))return!0}return!1}function Ro(t){if(Tn(t)){let e=t.producers;for(;e!==void 0;)e=Vs(e)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function Au(t,e){let n=t.consumersTail,r=Tn(t);if(n!==void 0?(e.nextConsumer=n.nextConsumer,n.nextConsumer=e):(e.nextConsumer=void 0,t.consumers=e),e.prevConsumer=n,t.consumersTail=e,!r)for(let o=t.producers;o!==void 0;o=o.nextProducer)Au(o.producer,o)}function Vs(t){let e=t.producer,n=t.nextProducer,r=t.nextConsumer,o=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,r!==void 0?r.prevConsumer=o:e.consumersTail=o,o!==void 0)o.nextConsumer=r;else if(e.consumers=r,!Tn(e)){let i=e.producers;for(;i!==void 0;)i=Vs(i)}return n}function Tn(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function Ru(t){Yy?.(t)}function Xy(t,e){let n=e.producersTail;if(n!==void 0){let r=e.producers;do{if(r===t)return!0;if(r===n)break;r=r.nextProducer}while(r!==void 0)}return!1}function Ou(t,e){return Object.is(t,e)}function ev(){throw new Error}function Lu(t){Pu(t)}function $s(t){Pu=t}function Fs(t,e){let n=Object.create(Fu);n.value=t,e!==void 0&&(n.equal=e);let r=()=>Vu(n);return r[nt]=n,Ru(n),[r,s=>js(n,s),s=>$u(n,s)]}function Vu(t){return Cu(t),t.value}function js(t,e){Os()||Lu(t),t.equal(t.value,e)||(t.value=e,nv(t))}function $u(t,e){Os()||Lu(t),js(t,e(t.value))}function nv(t){t.version++,Su(),Rs(t),tv?.(t)}var ye,No,As,Yy,nt,Ao,Pu,tv,Fu,Oo=h(()=>{"use strict";ye=null,No=!1,As=1,Yy=null,nt=Symbol("SIGNAL");Ao={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};Pu=ev;tv=null;Fu=A(b({},Ao),{equal:Ou,value:void 0,kind:"signal"})});function te(t){return typeof t=="function"}var Ge=h(()=>{"use strict"});function Po(t){let n=t(r=>{Error.call(r),r.stack=new Error().stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Hs=h(()=>{"use strict"});var Lo,ju=h(()=>{"use strict";Hs();Lo=Po(t=>function(n){t(this),this.message=n?`${n.length} errors occurred during unsubscription:
${n.map((r,o)=>`${o+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=n})});function _r(t,e){if(t){let n=t.indexOf(e);0<=n&&t.splice(n,1)}}var Us=h(()=>{"use strict"});function Vo(t){return t instanceof xe||t&&"closed"in t&&te(t.remove)&&te(t.add)&&te(t.unsubscribe)}function Hu(t){te(t)?t():t.unsubscribe()}var xe,Bs,Er=h(()=>{"use strict";Ge();ju();Us();xe=class t{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(let i of n)i.remove(this);else n.remove(this);let{initialTeardown:r}=this;if(te(r))try{r()}catch(i){e=i instanceof Lo?i.errors:[i]}let{_finalizers:o}=this;if(o){this._finalizers=null;for(let i of o)try{Hu(i)}catch(s){e=e??[],s instanceof Lo?e=[...e,...s.errors]:e.push(s)}}if(e)throw new Lo(e)}}add(e){var n;if(e&&e!==this)if(this.closed)Hu(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}}_hasParent(e){let{_parentage:n}=this;return n===e||Array.isArray(n)&&n.includes(e)}_addParent(e){let{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e}_removeParent(e){let{_parentage:n}=this;n===e?this._parentage=null:Array.isArray(n)&&_r(n,e)}remove(e){let{_finalizers:n}=this;n&&_r(n,e),e instanceof t&&e._removeParent(this)}};xe.EMPTY=(()=>{let t=new xe;return t.closed=!0,t})();Bs=xe.EMPTY});var Ke,wr=h(()=>{"use strict";Ke={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}});var Mn,qs=h(()=>{"use strict";Mn={setTimeout(t,e,...n){let{delegate:r}=Mn;return r?.setTimeout?r.setTimeout(t,e,...n):setTimeout(t,e,...n)},clearTimeout(t){let{delegate:e}=Mn;return(e?.clearTimeout||clearTimeout)(t)},delegate:void 0}});function $o(t){Mn.setTimeout(()=>{let{onUnhandledError:e}=Ke;if(e)e(t);else throw t})}var zs=h(()=>{"use strict";wr();qs()});function Ir(){}var Ws=h(()=>{"use strict"});function Bu(t){return Gs("E",void 0,t)}function qu(t){return Gs("N",t,void 0)}function Gs(t,e,n){return{kind:t,value:e,error:n}}var Uu,zu=h(()=>{"use strict";Uu=Gs("C",void 0,void 0)});function Nn(t){if(Ke.useDeprecatedSynchronousErrorHandling){let e=!Kt;if(e&&(Kt={errorThrown:!1,error:null}),t(),e){let{errorThrown:n,error:r}=Kt;if(Kt=null,n)throw r}}else t()}function Wu(t){Ke.useDeprecatedSynchronousErrorHandling&&Kt&&(Kt.errorThrown=!0,Kt.error=t)}var Kt,Fo=h(()=>{"use strict";wr();Kt=null});function Ks(t,e){return rv.call(t,e)}function jo(t){Ke.useDeprecatedSynchronousErrorHandling?Wu(t):$o(t)}function ov(t){throw t}function Qs(t,e){let{onStoppedNotification:n}=Ke;n&&Mn.setTimeout(()=>n(t,e))}var Qt,rv,Zs,kn,iv,Ys=h(()=>{"use strict";Ge();Er();wr();zs();Ws();zu();qs();Fo();Qt=class extends xe{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Vo(e)&&e.add(this)):this.destination=iv}static create(e,n,r){return new kn(e,n,r)}next(e){this.isStopped?Qs(qu(e),this):this._next(e)}error(e){this.isStopped?Qs(Bu(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Qs(Uu,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},rv=Function.prototype.bind;Zs=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:n}=this;if(n.next)try{n.next(e)}catch(r){jo(r)}}error(e){let{partialObserver:n}=this;if(n.error)try{n.error(e)}catch(r){jo(r)}else jo(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(n){jo(n)}}},kn=class extends Qt{constructor(e,n,r){super();let o;if(te(e)||!e)o={next:e??void 0,error:n??void 0,complete:r??void 0};else{let i;this&&Ke.useDeprecatedNextContext?(i=Object.create(e),i.unsubscribe=()=>this.unsubscribe(),o={next:e.next&&Ks(e.next,i),error:e.error&&Ks(e.error,i),complete:e.complete&&Ks(e.complete,i)}):o=e}this.destination=new Zs(o)}};iv={closed:!0,next:Ir,error:ov,complete:Ir}});var An,Ho=h(()=>{"use strict";An=typeof Symbol=="function"&&Symbol.observable||"@@observable"});function Gu(t){return t}var Ku=h(()=>{"use strict"});function Qu(t){return t.length===0?Gu:t.length===1?t[0]:function(n){return t.reduce((r,o)=>o(r),n)}}var Zu=h(()=>{"use strict";Ku()});function Yu(t){var e;return(e=t??Ke.Promise)!==null&&e!==void 0?e:Promise}function sv(t){return t&&te(t.next)&&te(t.error)&&te(t.complete)}function av(t){return t&&t instanceof Qt||sv(t)&&Vo(t)}var ae,Rn=h(()=>{"use strict";Ys();Er();Ho();Zu();wr();Ge();Fo();ae=(()=>{class t{constructor(n){n&&(this._subscribe=n)}lift(n){let r=new t;return r.source=this,r.operator=n,r}subscribe(n,r,o){let i=av(n)?n:new kn(n,r,o);return Nn(()=>{let{operator:s,source:a}=this;i.add(s?s.call(i,a):a?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(n){try{return this._subscribe(n)}catch(r){n.error(r)}}forEach(n,r){return r=Yu(r),new r((o,i)=>{let s=new kn({next:a=>{try{n(a)}catch(c){i(c),s.unsubscribe()}},error:i,complete:o});this.subscribe(s)})}_subscribe(n){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(n)}[An](){return this}pipe(...n){return Qu(n)(this)}toPromise(n){return n=Yu(n),new n((r,o)=>{let i;this.subscribe(s=>i=s,s=>o(s),()=>r(i))})}}return t.create=e=>new t(e),t})()});function cv(t){return te(t?.lift)}function Rt(t){return e=>{if(cv(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}var xr=h(()=>{"use strict";Ge()});function ft(t,e,n,r,o){return new Js(t,e,n,r,o)}var Js,Dr=h(()=>{"use strict";Ys();Js=class extends Qt{constructor(e,n,r,o,i,s){super(e),this.onFinalize=i,this.shouldUnsubscribe=s,this._next=n?function(a){try{n(a)}catch(c){e.error(c)}}:super._next,this._error=o?function(a){try{o(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:n}=this;super.unsubscribe(),!n&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}}});var Ju,Xu=h(()=>{"use strict";Hs();Ju=Po(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"})});var qe,Uo,Xs=h(()=>{"use strict";Rn();Er();Xu();Us();Fo();qe=(()=>{class t extends ae{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let r=new Uo(this,this);return r.operator=n,r}_throwIfClosed(){if(this.closed)throw new Ju}next(n){Nn(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let r of this.currentObservers)r.next(n)}})}error(n){Nn(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:r}=this;for(;r.length;)r.shift().error(n)}})}complete(){Nn(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:r,isStopped:o,observers:i}=this;return r||o?Bs:(this.currentObservers=null,i.push(n),new xe(()=>{this.currentObservers=null,_r(i,n)}))}_checkFinalizedStatuses(n){let{hasError:r,thrownError:o,isStopped:i}=this;r?n.error(o):i&&n.complete()}asObservable(){let n=new ae;return n.source=this,n}}return t.create=(e,n)=>new Uo(e,n),t})(),Uo=class extends qe{constructor(e,n){super(),this.destination=e,this.source=n}next(e){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.next)===null||r===void 0||r.call(n,e)}error(e){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.error)===null||r===void 0||r.call(n,e)}complete(){var e,n;(n=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||n===void 0||n.call(e)}_subscribe(e){var n,r;return(r=(n=this.source)===null||n===void 0?void 0:n.subscribe(e))!==null&&r!==void 0?r:Bs}}});var Cr,ed=h(()=>{"use strict";Xs();Cr=class extends qe{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let n=super._subscribe(e);return!n.closed&&e.next(this._value),n}getValue(){let{hasError:e,thrownError:n,_value:r}=this;if(e)throw n;return this._throwIfClosed(),r}next(e){super.next(this._value=e)}}});var td,nd=h(()=>{"use strict";Rn();td=new ae(t=>t.complete())});function od(t,e,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function a(u){try{l(r.next(u))}catch(d){s(d)}}function c(u){try{l(r.throw(u))}catch(d){s(d)}}function l(u){u.done?i(u.value):o(u.value).then(a,c)}l((r=r.apply(t,e||[])).next())})}function rd(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Zt(t){return this instanceof Zt?(this.v=t,this):new Zt(t)}function id(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),o,i=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(f){return function(m){return Promise.resolve(m).then(f,d)}}function a(f,m){r[f]&&(o[f]=function(E){return new Promise(function(v,N){i.push([f,E,v,N])>1||c(f,E)})},m&&(o[f]=m(o[f])))}function c(f,m){try{l(r[f](m))}catch(E){p(i[0][3],E)}}function l(f){f.value instanceof Zt?Promise.resolve(f.value.v).then(u,d):p(i[0][2],f)}function u(f){c("next",f)}function d(f){c("throw",f)}function p(f,m){f(m),i.shift(),i.length&&c(i[0][0],i[0][1])}}function sd(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof rd=="function"?rd(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=t[i]&&function(s){return new Promise(function(a,c){s=t[i](s),o(a,c,s.done,s.value)})}}function o(i,s,a,c){Promise.resolve(c).then(function(l){i({value:l,done:a})},s)}}var ea=h(()=>{"use strict"});var ad,cd=h(()=>{"use strict";ad=t=>t&&typeof t.length=="number"&&typeof t!="function"});function ld(t){return te(t?.then)}var ud=h(()=>{"use strict";Ge()});function dd(t){return te(t[An])}var fd=h(()=>{"use strict";Ho();Ge()});function pd(t){return Symbol.asyncIterator&&te(t?.[Symbol.asyncIterator])}var hd=h(()=>{"use strict";Ge()});function md(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}var gd=h(()=>{"use strict"});function lv(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var yd,vd=h(()=>{"use strict";yd=lv()});function bd(t){return te(t?.[yd])}var _d=h(()=>{"use strict";vd();Ge()});function Ed(t){return id(this,arguments,function*(){let n=t.getReader();try{for(;;){let{value:r,done:o}=yield Zt(n.read());if(o)return yield Zt(void 0);yield yield Zt(r)}}finally{n.releaseLock()}})}function wd(t){return te(t?.getReader)}var Id=h(()=>{"use strict";ea();Ge()});function xd(t){if(t instanceof ae)return t;if(t!=null){if(dd(t))return uv(t);if(ad(t))return dv(t);if(ld(t))return fv(t);if(pd(t))return Dd(t);if(bd(t))return pv(t);if(wd(t))return hv(t)}throw md(t)}function uv(t){return new ae(e=>{let n=t[An]();if(te(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function dv(t){return new ae(e=>{for(let n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function fv(t){return new ae(e=>{t.then(n=>{e.closed||(e.next(n),e.complete())},n=>e.error(n)).then(null,$o)})}function pv(t){return new ae(e=>{for(let n of t)if(e.next(n),e.closed)return;e.complete()})}function Dd(t){return new ae(e=>{mv(t,e).catch(n=>e.error(n))})}function hv(t){return Dd(Ed(t))}function mv(t,e){var n,r,o,i;return od(this,void 0,void 0,function*(){try{for(n=sd(t);r=yield n.next(),!r.done;){let s=r.value;if(e.next(s),e.closed)return}}catch(s){o={error:s}}finally{try{r&&!r.done&&(i=n.return)&&(yield i.call(n))}finally{if(o)throw o.error}}e.complete()})}var Cd=h(()=>{"use strict";ea();cd();ud();Rn();fd();hd();gd();_d();Id();Ge();zs();Ho()});function rt(t,e){return Rt((n,r)=>{let o=0;n.subscribe(ft(r,i=>{r.next(t.call(e,i,o++))}))})}var Sd=h(()=>{"use strict";xr();Dr()});var pt,Td=h(()=>{"use strict";Rn();Ws();pt=new ae(Ir)});function Bo(t,e){return Rt((n,r)=>{let o=0;n.subscribe(ft(r,i=>t.call(e,i,o++)&&r.next(i)))})}var Md=h(()=>{"use strict";xr();Dr()});var Nd=h(()=>{"use strict"});function Yt(t){return t<=0?()=>td:Rt((e,n)=>{let r=0;e.subscribe(ft(n,o=>{++r<=t&&(n.next(o),t<=r&&n.complete())}))})}var kd=h(()=>{"use strict";nd();xr();Dr()});function On(t,e){return Rt((n,r)=>{let o=null,i=0,s=!1,a=()=>s&&!o&&r.complete();n.subscribe(ft(r,c=>{o?.unsubscribe();let l=0,u=i++;xd(t(c,u)).subscribe(o=ft(r,d=>r.next(e?e(c,d,u,l++):d),()=>{o=null,a()}))},()=>{s=!0,a()}))})}var Ad=h(()=>{"use strict";Cd();xr();Dr()});var qo=h(()=>{"use strict";Rn();Xs();ed();Er();Td();Nd()});function zo(){return ta}function ot(t){let e=ta;return ta=t,e}function Pn(t){return t===Rd||t?.name==="\u0275NotFound"}var ta,Rd,na=h(()=>{"use strict";Rd=Symbol("NotFound")});var ra=h(()=>{"use strict";Oo();});var Od=h(()=>{"use strict";na();});function bv(t){return`NG0${Math.abs(t)}`}function kr(t,e){return`${bv(t)}${e?": "+e:""}`}function Q(t){for(let e in t)if(t[e]===Q)return e;throw Error("")}function Yo(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(Yo).join(", ")}]`;if(t==null)return""+t;let e=t.overriddenName||t.name;if(e)return`${e}`;let n=t.toString();if(n==null)return""+n;let r=n.indexOf(`
`);return r>=0?n.slice(0,r):n}function _a(t,e){return t?e?`${t} ${e}`:t:e||""}function Jo(t){return t.__forward_ref__=Jo,t}function Ve(t){return Fd(t)?t():t}function Fd(t){return typeof t=="function"&&t.hasOwnProperty(_v)&&t.__forward_ref__===Jo}function ne(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function Xo(t){return Ev(t,ei)}function Ev(t,e){return t.hasOwnProperty(e)&&t[e]||null}function wv(t){let e=t?.[ei]??null;return e||null}function ia(t){return t&&t.hasOwnProperty(Go)?t[Go]:null}function Ea(t){return t&&!!t.\u0275providers}function Ar(t){return Ca(t,"@Component"),t[wa]||null}function Da(t){return Ca(t,"@Directive"),t[Ia]||null}function jd(t){return Ca(t,"@Pipe"),t[xa]||null}function Ca(t,e){if(t==null)throw new R(-919,!1)}function Hd(t){return typeof t=="string"?t:t==null?"":String(t)}function Sa(t,e){return Bd("",-200,e)}function ti(t,e){throw new R(-201,!1)}function Bd(t,e,n){let r=new R(e,t);return r[Ud]=e,r[Iv]=t,n&&(r[xv]=n),r}function Dv(t){return t[Ud]}function qd(){return aa}function Le(t){let e=aa;return aa=t,e}function Ta(t,e,n){let r=Xo(t);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(n&8)return null;if(e!==void 0)return e;ti(t,"")}function Tv(t,e=0){let n=zo();if(n===void 0)throw new R(-203,!1);if(n===null)return Ta(t,void 0,e);{let r=Mv(e),o=n.retrieve(t,r);if(Pn(o)){if(r.optional)return null;throw o}return o}}function B(t,e=0){return(qd()||Tv)(Ve(t),e)}function O(t,e){return B(t,Xt(e))}function Xt(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function Mv(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function la(t){let e=[];for(let n=0;n<t.length;n++){let r=Ve(t[n]);if(Array.isArray(r)){if(r.length===0)throw new R(900,!1);let o,i=0;for(let s=0;s<r.length;s++){let a=r[s],c=Nv(a);typeof c=="number"?c===-1?o=a.token:i|=c:o=a}e.push(B(o,i))}else e.push(B(r))}return e}function Nv(t){return t[Sv]}function Vn(t,e){let n=t.hasOwnProperty(sa);return n?t[sa]:null}function ni(t,e){t.forEach(n=>Array.isArray(n)?ni(n,e):e(n))}function Ma(t,e){return e>=t.length-1?t.pop():t.splice(e,1)[0]}function zd(t,e,n,r){let o=t.length;if(o==e)t.push(n,r);else if(o===1)t.push(r,t[0]),t[0]=n;else{for(o--,t.push(t[o-1],t[o]);o>e;){let i=o-2;t[o]=t[i],o--}t[e]=n,t[e+1]=r}}function Wd(t,e,n){let r=Fn(t,e);return r>=0?t[r|1]=n:(r=~r,zd(t,r,e,n)),r}function ri(t,e){let n=Fn(t,e);if(n>=0)return t[n|1]}function Fn(t,e){return kv(t,e,1)}function kv(t,e,n){let r=0,o=t.length>>n;for(;o!==r;){let i=r+(o-r>>1),s=t[i<<n];if(e===s)return i<<n;s>e?o=i:r=i+1}return~(o<<n)}function on(t){return{\u0275providers:t}}function Gd(t){return on([{provide:jn,multi:!0,useValue:t}])}function Kd(...t){return{\u0275providers:Aa(!0,t),\u0275fromNgModule:!0}}function Aa(t,...e){let n=[],r=new Set,o,i=s=>{n.push(s)};return ni(e,s=>{let a=s;Ko(a,i,[],r)&&(o||=[],o.push(a))}),o!==void 0&&Qd(o,i),n}function Qd(t,e){for(let n=0;n<t.length;n++){let{ngModule:r,providers:o}=t[n];Ra(o,i=>{e(i,r)})}}function Ko(t,e,n,r){if(t=Ve(t),!t)return!1;let o=null,i=ia(t),s=!i&&Ar(t);if(!i&&!s){let c=t.ngModule;if(i=ia(c),i)o=c;else return!1}else{if(s&&!s.standalone)return!1;o=t}let a=r.has(o);if(s){if(a)return!1;if(r.add(o),s.dependencies){let c=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let l of c)Ko(l,e,n,r)}}else if(i){if(i.imports!=null&&!a){r.add(o);let l;ni(i.imports,u=>{Ko(u,e,n,r)&&(l||=[],l.push(u))}),l!==void 0&&Qd(l,e)}if(!a){let l=Vn(o)||(()=>new o);e({provide:o,useFactory:l,deps:Ot},o),e({provide:ka,useValue:o,multi:!0},o),e({provide:jn,useValue:()=>B(o),multi:!0},o)}let c=i.providers;if(c!=null&&!a){let l=t;Ra(c,u=>{e(u,l)})}}else return!1;return o!==t&&t.providers!==void 0}function Ra(t,e){for(let n of t)Ea(n)&&(n=n.\u0275providers),Array.isArray(n)?Ra(n,e):e(n)}function Zd(t){return t!==null&&typeof t=="object"&&Av in t}function Rv(t){return!!(t&&t.useExisting)}function Ov(t){return!!(t&&t.useFactory)}function Qo(t){return typeof t=="function"}function Or(){return oa===void 0&&(oa=new Tr),oa}function ua(t){let e=Xo(t),n=e!==null?e.factory:Vn(t);if(n!==null)return n;if(t instanceof j)throw new R(-204,!1);if(t instanceof Function)return Pv(t);throw new R(-204,!1)}function Pv(t){if(t.length>0)throw new R(-204,!1);let n=wv(t);return n!==null?()=>n.factory(t):()=>new t}function Lv(t){if(Zd(t))return Ln(void 0,t.useValue);{let e=Yd(t);return Ln(e,Wo)}}function Yd(t,e,n){let r;if(Qo(t)){let o=Ve(t);return Vn(o)||ua(o)}else if(Zd(t))r=()=>Ve(t.useValue);else if(Ov(t))r=()=>t.useFactory(...la(t.deps||[]));else if(Rv(t))r=(o,i)=>B(Ve(t.useExisting),i!==void 0&&i&8?8:void 0);else{let o=Ve(t&&(t.useClass||t.provide));if(Vv(t))r=()=>new o(...la(t.deps));else return Vn(o)||ua(o)}return r}function Sr(t){if(t.destroyed)throw new R(-205,!1)}function Ln(t,e,n=!1){return{factory:t,value:e,multi:n?[]:void 0}}function Vv(t){return!!t.deps}function $v(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function Fv(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function da(t,e){for(let n of t)Array.isArray(n)?da(n,e):n&&Ea(n)?da(n.\u0275providers,e):e(n)}function oi(t,e){let n;t instanceof en?(Sr(t),n=t):n=new ca(t);let r,o=ot(n),i=Le(void 0);try{return e()}finally{ot(o),Le(i)}}function Jd(){return qd()!==void 0||zo()!=null}function Vt(t){return Array.isArray(t)&&typeof t[Xd]=="object"}function $t(t){return Array.isArray(t)&&t[Xd]===!0}function La(t){return(t.flags&4)!==0}function zn(t){return t.componentOffset>-1}function Va(t){return(t.flags&1)===1}function Wn(t){return!!t.template}function Gn(t){return(t[L]&512)!==0}function an(t){return(t[L]&256)===256}function wt(t){for(;Array.isArray(t);)t=t[it];return t}function $a(t,e){return wt(e[t])}function Ft(t,e){return wt(e[t.index])}function Fa(t,e){return t.data[e]}function It(t,e){let n=e[t];return Vt(n)?n:n[it]}function ui(t){return(t[L]&128)===128}function $r(t,e){return e==null?null:t[e]}function ja(t){t[sn]=0}function Ha(t){t[L]&1024||(t[L]|=1024,ui(t)&&jr(t))}function Fr(t){return!!(t[L]&9216||t[Fe]?.dirty)}function Ua(t){t[_t].changeDetectionScheduler?.notify(8),t[L]&64&&(t[L]|=1024),Fr(t)&&jr(t)}function jr(t){t[_t].changeDetectionScheduler?.notify(0);let e=tn(t);for(;e!==null&&!(e[L]&8192||(e[L]|=8192,!ui(e)));)e=tn(e)}function Ba(t,e){if(an(t))throw new R(911,!1);t[mt]===null&&(t[mt]=[]),t[mt].push(e)}function rf(t,e){if(t[mt]===null)return;let n=t[mt].indexOf(e);n!==-1&&t[mt].splice(n,1)}function tn(t){let e=t[$e];return $t(e)?e[$e]:e}function of(t){return t[Hn]??=[]}function sf(t){return t.cleanup??=[]}function af(){return q.lFrame.elementDepthCount}function cf(){q.lFrame.elementDepthCount++}function lf(){q.lFrame.elementDepthCount--}function uf(){return q.skipHydrationRootTNode!==null}function df(t){return q.skipHydrationRootTNode===t}function ff(){q.skipHydrationRootTNode=null}function je(){return q.lFrame.lView}function Kn(){return q.lFrame.tView}function cn(){let t=qa();for(;t!==null&&t.type===64;)t=t.parent;return t}function qa(){return q.lFrame.currentTNode}function pf(){let t=q.lFrame,e=t.currentTNode;return t.isParent?e:e.parent}function Hr(t,e){let n=q.lFrame;n.currentTNode=t,n.isParent=e}function za(){return q.lFrame.isParent}function hf(){q.lFrame.isParent=!1}function Wa(){return fa}function Ga(t){let e=fa;return fa=t,e}function mf(t){return q.lFrame.bindingIndex=t}function Ka(){return q.lFrame.bindingIndex++}function gf(t){let e=q.lFrame,n=e.bindingIndex;return e.bindingIndex=e.bindingIndex+t,n}function yf(){return q.lFrame.inI18n}function vf(t,e){let n=q.lFrame;n.bindingIndex=n.bindingRootIndex=t,di(e)}function bf(){return q.lFrame.currentDirectiveIndex}function di(t){q.lFrame.currentDirectiveIndex=t}function _f(t){let e=q.lFrame.currentDirectiveIndex;return e===-1?null:t[e]}function Qa(t){q.lFrame.currentQueryIndex=t}function jv(t){let e=t[H];return e.type===2?e.declTNode:e.type===1?t[bt]:null}function Za(t,e,n){if(n&4){let o=e,i=t;for(;o=o.parent,o===null&&!(n&1);)if(o=jv(i),o===null||(i=i[Bn],o.type&10))break;if(o===null)return!1;e=o,t=i}let r=q.lFrame=Ef();return r.currentTNode=e,r.lView=t,!0}function fi(t){let e=Ef(),n=t[H];q.lFrame=e,e.currentTNode=n.firstChild,e.lView=t,e.tView=n,e.contextLView=t,e.bindingIndex=n.bindingStartIndex,e.inI18n=!1}function Ef(){let t=q.lFrame,e=t===null?null:t.child;return e===null?wf(t):e}function wf(t){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=e),e}function If(){let t=q.lFrame;return q.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}function pi(){let t=If();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function ln(){return q.lFrame.selectedIndex}function jt(t){q.lFrame.selectedIndex=t}function xf(){let t=q.lFrame;return Fa(t.tView,t.selectedIndex)}function Ja(){return q.lFrame.currentNamespace}function Xa(){return Df}function ec(t){Df=t}function pa(t,e=null,n=null,r){let o=Cf(t,e,n,r);return o.resolveInjectorInitializers(),o}function Cf(t,e=null,n=null,r,o=new Set){let i=[n||Ot,Kd(t)],s;return new en(i,e||Or(),s||null,o)}function Hv(){return new ha(je())}function Zo(...t){}function tc(t){let e,n;function r(){t=Zo;try{n!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(n),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{t(),r()}),typeof requestAnimationFrame=="function"&&(n=requestAnimationFrame(()=>{t(),r()})),()=>r()}function Mf(t){return queueMicrotask(()=>t()),()=>{t=Zo}}function rc(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function qv(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function e(){tc(()=>{t.callbackScheduled=!1,ga(t),t.isCheckStableRunning=!0,rc(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{e()}):t._outer.run(()=>{e()}),ga(t)}function zv(t){let e=()=>{qv(t)},n=Uv++;t._inner=t._inner.fork({name:"angular",properties:{[nc]:!0,[Mr]:n,[Mr+n]:!0},onInvokeTask:(r,o,i,s,a,c)=>{if(Wv(c))return r.invokeTask(i,s,a,c);try{return Vd(t),r.invokeTask(i,s,a,c)}finally{(t.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&e(),$d(t)}},onInvoke:(r,o,i,s,a,c,l)=>{try{return Vd(t),r.invoke(i,s,a,c,l)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!Gv(c)&&e(),$d(t)}},onHasTask:(r,o,i,s)=>{r.hasTask(i,s),o===i&&(s.change=="microTask"?(t._hasPendingMicrotasks=s.microTask,ga(t),rc(t)):s.change=="macroTask"&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(r,o,i,s)=>(r.handleError(i,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}function ga(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Vd(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function $d(t){t._nesting--,rc(t)}function Wv(t){return Nf(t,"__ignore_ng_zone__")}function Gv(t){return Nf(t,"__scheduler_tick__")}function Nf(t,e){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[e]===!0}function oc(){return on([Gd(()=>{O(Kv)})])}function Zn(t,e){let[n,r,o]=Fs(t,e?.equal),i=n,s=i[nt];return i.set=r,i.update=o,i.asReadonly=Af.bind(i),i}function Af(){let t=this[nt];if(t.readonlyFn===void 0){let e=()=>this();e[nt]=t,t.readonlyFn=e}return t.readonlyFn}var ba,R,_v,ei,Go,j,wa,Ia,xa,sa,nn,Pd,Ud,Iv,xv,aa,Cv,Jt,Sv,ca,rn,Ot,jn,Na,ka,Tr,Av,Rr,Wo,Ld,oa,Qe,en,it,H,L,$e,vt,bt,ii,Hn,Me,Pt,_t,De,Un,Oa,Bn,st,Pr,sn,si,Lt,Pa,mt,ai,Lr,Fe,ci,qn,Ze,Xd,li,ef,Vr,Et,tf,nf,q,fa,Ya,Df,gt,ze,Ur,ha,Sf,Tf,Qn,ma,ht,nc,Mr,Uv,Te,Bv,Nr,yt,un,kf,Kv,$n,Br,ic,sc,ya,va,hi=h(()=>{"use strict";Oo();qo();na();ra();Od();ba="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",R=class extends Error{code;constructor(e,n){super(kr(e,n)),this.code=e}};_v=Q({__forward_ref__:Q});ei=Q({\u0275prov:Q}),Go=Q({\u0275inj:Q}),j=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,n){this._desc=e,this.\u0275prov=void 0,typeof n=="number"?this.__NG_ELEMENT_ID__=n:n!==void 0&&(this.\u0275prov=ne({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};wa=Q({\u0275cmp:Q}),Ia=Q({\u0275dir:Q}),xa=Q({\u0275pipe:Q}),sa=Q({\u0275fac:Q}),nn=Q({__NG_ELEMENT_ID__:Q}),Pd=Q({__NG_ENV_ID__:Q});Ud=Q({ngErrorCode:Q}),Iv=Q({ngErrorMessage:Q}),xv=Q({ngTokenPath:Q});Cv={},Jt=Cv,Sv="__NG_DI_FLAG__",ca=class{injector;constructor(e){this.injector=e}retrieve(e,n){let r=Xt(n)||0;try{return this.injector.get(e,r&8?null:Jt,r)}catch(o){if(Pn(o))return o;throw o}}};rn={},Ot=[],jn=new j(""),Na=new j("",-1),ka=new j(""),Tr=class{get(e,n=Jt){if(n===Jt){let o=Bd("",-201);throw o.name="\u0275NotFound",o}return n}};Av=Q({provide:String,useValue:Q});Rr=new j(""),Wo={},Ld={};Qe=class{},en=class extends Qe{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,da(e,s=>this.processProvider(s)),this.records.set(Na,Ln(void 0,this)),o.has("environment")&&this.records.set(Qe,Ln(void 0,this));let i=this.records.get(Rr);i!=null&&typeof i.value=="string"&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(ka,Ot,{self:!0}))}retrieve(e,n){let r=Xt(n)||0;try{return this.get(e,Jt,r)}catch(o){if(Pn(o))return o;throw o}}destroy(){Sr(this),this._destroyed=!0;let e=V(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let n=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of n)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),V(e)}}onDestroy(e){return Sr(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){Sr(this);let n=ot(this),r=Le(void 0),o;try{return e()}finally{ot(n),Le(r)}}get(e,n=Jt,r){if(Sr(this),e.hasOwnProperty(Pd))return e[Pd](this);let o=Xt(r),i,s=ot(this),a=Le(void 0);try{if(!(o&4)){let l=this.records.get(e);if(l===void 0){let u=Fv(e)&&Xo(e);u&&this.injectableDefInScope(u)?l=Ln(ua(e),Wo):l=null,this.records.set(e,l)}if(l!=null)return this.hydrate(e,l,o)}let c=o&2?Or():this.parent;return n=o&8&&n===Jt?null:n,c.get(e,n)}catch(c){let l=Dv(c);throw l===-200||l===-201?new R(l,null):c}finally{Le(a),ot(s)}}resolveInjectorInitializers(){let e=V(null),n=ot(this),r=Le(void 0),o;try{let i=this.get(jn,Ot,{self:!0});for(let s of i)s()}finally{ot(n),Le(r),V(e)}}toString(){return"R3Injector[...]"}processProvider(e){e=Ve(e);let n=Qo(e)?e:Ve(e&&e.provide),r=Lv(e);if(!Qo(e)&&e.multi===!0){let o=this.records.get(n);o||(o=Ln(void 0,Wo,!0),o.factory=()=>la(o.multi),this.records.set(n,o)),n=e,o.multi.push(e)}this.records.set(n,r)}hydrate(e,n,r){let o=V(null);try{if(n.value===Ld)throw Sa("");return n.value===Wo&&(n.value=Ld,n.value=n.factory(void 0,r)),typeof n.value=="object"&&n.value&&$v(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}finally{V(o)}}injectableDefInScope(e){if(!e.providedIn)return!1;let n=Ve(e.providedIn);return typeof n=="string"?n==="any"||this.scopes.has(n):this.injectorDefTypes.has(n)}removeOnDestroy(e){let n=this._onDestroyHooks.indexOf(e);n!==-1&&this._onDestroyHooks.splice(n,1)}};it=0,H=1,L=2,$e=3,vt=4,bt=5,ii=6,Hn=7,Me=8,Pt=9,_t=10,De=11,Un=12,Oa=13,Bn=14,st=15,Pr=16,sn=17,si=18,Lt=19,Pa=20,mt=21,ai=22,Lr=23,Fe=24,ci=25,qn=26,Ze=27,Xd=1,li=7,ef=8,Vr=9,Et=10;tf="svg",nf="math";q={lFrame:wf(null),bindingsEnabled:!0,skipHydrationRootTNode:null},fa=!1;Ya=If;Df=!0;gt=class t{static THROW_IF_NOT_FOUND=Jt;static NULL=new Tr;static create(e,n){if(Array.isArray(e))return pa({name:""},n,e,"");{let r=e.name??"";return pa({name:r},e.parent,e.providers,r)}}static \u0275prov=ne({token:t,providedIn:"any",factory:()=>B(Na)});static __NG_ELEMENT_ID__=-1},ze=new j(""),Ur=(()=>{class t{static __NG_ELEMENT_ID__=Hv;static __NG_ENV_ID__=n=>n}return t})(),ha=class extends Ur{_lView;constructor(e){super(),this._lView=e}get destroyed(){return an(this._lView)}onDestroy(e){let n=this._lView;return Ba(n,e),()=>rf(n,e)}};Sf=!1,Tf=new j(""),Qn=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new Cr(!1);debugTaskTracker=O(Tf,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new ae(n=>{n.next(!1),n.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let n=this.taskId++;return this.pendingTasks.add(n),this.debugTaskTracker?.add(n),n}has(n){return this.pendingTasks.has(n)}remove(n){this.pendingTasks.delete(n),this.debugTaskTracker?.remove(n),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=ne({token:t,providedIn:"root",factory:()=>new t})}return t})(),ma=class extends qe{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,Jd()&&(this.destroyRef=O(Ur,{optional:!0})??void 0,this.pendingTasks=O(Qn,{optional:!0})??void 0)}emit(e){let n=V(null);try{super.next(e)}finally{V(n)}}subscribe(e,n,r){let o=e,i=n||(()=>null),s=r;if(e&&typeof e=="object"){let c=e;o=c.next?.bind(c),i=c.error?.bind(c),s=c.complete?.bind(c)}this.__isAsync&&(i=this.wrapInTimeout(i),o&&(o=this.wrapInTimeout(o)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:o,error:i,complete:s});return e instanceof xe&&e.add(a),a}wrapInTimeout(e){return n=>{let r=this.pendingTasks?.add();setTimeout(()=>{try{e(n)}finally{r!==void 0&&this.pendingTasks?.remove(r)}})}}},ht=ma;nc="isAngularZone",Mr=nc+"_ID",Uv=0,Te=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new ht(!1);onMicrotaskEmpty=new ht(!1);onStable=new ht(!1);onError=new ht(!1);constructor(e){let{enableLongStackTrace:n=!1,shouldCoalesceEventChangeDetection:r=!1,shouldCoalesceRunChangeDetection:o=!1,scheduleInRootZone:i=Sf}=e;if(typeof Zone>"u")throw new R(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),n&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!o&&r,s.shouldCoalesceRunChangeDetection=o,s.callbackScheduled=!1,s.scheduleInRootZone=i,zv(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(nc)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new R(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new R(909,!1)}run(e,n,r){return this._inner.run(e,n,r)}runTask(e,n,r,o){let i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,e,Bv,Zo,Zo);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(e,n,r){return this._inner.runGuarded(e,n,r)}runOutsideAngular(e){return this._outer.run(e)}},Bv={};Nr=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new ht;onMicrotaskEmpty=new ht;onStable=new ht;onError=new ht;run(e,n,r){return e.apply(n,r)}runGuarded(e,n,r){return e.apply(n,r)}runOutsideAngular(e){return e()}runTask(e,n,r,o){return e.apply(n,r)}};yt=class{_console=console;handleError(e){this._console.error("ERROR",e)}},un=new j("",{factory:()=>{let t=O(Te),e=O(Qe),n;return r=>{t.runOutsideAngular(()=>{e.destroyed&&!n?setTimeout(()=>{throw r}):(n??=e.get(yt),n.handleError(r))})}}}),kf={provide:jn,useValue:()=>{let t=O(yt,{optional:!0})},multi:!0},Kv=new j("",{factory:()=>{let t=O(ze).defaultView;if(!t)return;let e=O(un),n=i=>{e(i.reason),i.preventDefault()},r=i=>{i.error?e(i.error):e(new Error(i.message,{cause:i})),i.preventDefault()},o=()=>{t.addEventListener("unhandledrejection",n),t.addEventListener("error",r)};typeof Zone<"u"?Zone.root.run(o):o(),O(Ur).onDestroy(()=>{t.removeEventListener("error",r),t.removeEventListener("unhandledrejection",n)})}});$n=class{},Br=new j("",{factory:()=>!0}),ic=new j(""),sc=(()=>{class t{static \u0275prov=ne({token:t,providedIn:"root",factory:()=>new ya})}return t})(),ya=class{dirtyEffectCount=0;queues=new Map;add(e){this.enqueue(e),this.schedule(e)}schedule(e){e.dirty&&this.dirtyEffectCount++}remove(e){let n=e.zone,r=this.queues.get(n);r.has(e)&&(r.delete(e),e.dirty&&this.dirtyEffectCount--)}enqueue(e){let n=e.zone;this.queues.has(n)||this.queues.set(n,new Set);let r=this.queues.get(n);r.has(e)||r.add(e)}flush(){for(;this.dirtyEffectCount>0;){let e=!1;for(let[n,r]of this.queues)n===null?e||=this.flushQueue(r):e||=n.run(()=>this.flushQueue(r));e||(this.dirtyEffectCount=0)}}flushQueue(e){let n=!1;for(let r of e)r.dirty&&(this.dirtyEffectCount--,n=!0,r.run());return n}},va=class{[nt];constructor(e){this[nt]=e}destroy(){this[nt].destroy()}}});var ac=h(()=>{"use strict";Md();Sd();Ad();kd()});function np(t){return{toString:t}.toString()}function rp(t,e,n,r){e!==null?e.applyValueToInputSignal(e,r):t[n]=r}function ub(t){return t.type.prototype.ngOnChanges&&(t.setInput=fb),db}function db(){let t=ip(this),e=t?.current;if(e){let n=t.previous;if(n===rn)t.previous=e;else for(let r in e)n[r]=e[r];t.current=null,this.ngOnChanges(e)}}function fb(t,e,n,r,o){let i=this.declaredInputs[r],s=ip(t)||pb(t,{previous:rn,current:null}),a=s.current||(s.current={}),c=s.previous,l=c[i];a[i]=new bi(l&&l.currentValue,n,c===rn),rp(t,e,o,n)}function ip(t){return t[op]||null}function pb(t,e){return t[op]=e}function hb(t,e,n){let{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=e.type.prototype;if(r){let s=ub(e);(n.preOrderHooks??=[]).push(t,s),(n.preOrderCheckHooks??=[]).push(t,s)}o&&(n.preOrderHooks??=[]).push(0-t,o),i&&((n.preOrderHooks??=[]).push(t,i),(n.preOrderCheckHooks??=[]).push(t,i))}function mb(t,e){for(let n=e.directiveStart,r=e.directiveEnd;n<r;n++){let i=t.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=i;s&&(t.contentHooks??=[]).push(-n,s),a&&((t.contentHooks??=[]).push(n,a),(t.contentCheckHooks??=[]).push(n,a)),c&&(t.viewHooks??=[]).push(-n,c),l&&((t.viewHooks??=[]).push(n,l),(t.viewCheckHooks??=[]).push(n,l)),u!=null&&(t.destroyHooks??=[]).push(n,u)}}function gi(t,e,n){sp(t,e,3,n)}function yi(t,e,n,r){(t[L]&3)===n&&sp(t,e,n,r)}function cc(t,e){let n=t[L];(n&3)===e&&(n&=16383,n+=1,t[L]=n)}function sp(t,e,n,r){let o=r!==void 0?t[sn]&65535:0,i=r??-1,s=e.length-1,a=0;for(let c=o;c<s;c++)if(typeof e[c+1]=="number"){if(a=e[c],r!=null&&a>=r)break}else e[c]<0&&(t[sn]+=65536),(a<i||i==-1)&&(gb(t,n,e,c),t[sn]=(t[sn]&4294901760)+c+2),c++}function Of(t,e){Z(z.LifecycleHookStart,t,e);let n=V(null);try{e.call(t)}finally{V(n),Z(z.LifecycleHookEnd,t,e)}}function gb(t,e,n,r){let o=n[r]<0,i=n[r+1],s=o?-n[r]:n[r],a=t[s];o?t[L]>>14<t[sn]>>16&&(t[L]&3)===e&&(t[L]+=16384,Of(a,i)):Of(a,i)}function yb(t,e,n){let r=0;for(;r<n.length;){let o=n[r];if(typeof o=="number"){if(o!==0)break;r++;let i=n[r++],s=n[r++],a=n[r++];t.setAttribute(e,s,a,i)}else{let i=o,s=n[++r];vb(i)?t.setProperty(e,i,s):t.setAttribute(e,i,s),r++}}return r}function vb(t){return t.charCodeAt(0)===64}function Ac(t,e){if(!(e===null||e.length===0))if(t===null||t.length===0)t=e.slice();else{let n=-1;for(let r=0;r<e.length;r++){let o=e[r];typeof o=="number"?n=o:n===0||(n===-1||n===2?Pf(t,n,o,null,e[++r]):Pf(t,n,o,null,null))}}return t}function Pf(t,e,n,r,o){let i=0,s=t.length;if(e===-1)s=-1;else for(;i<t.length;){let a=t[i++];if(typeof a=="number"){if(a===e){s=-1;break}else if(a>e){s=i-1;break}}}for(;i<t.length;){let a=t[i];if(typeof a=="number")break;if(a===n){o!==null&&(t[i+1]=o);return}i++,o!==null&&i++}s!==-1&&(t.splice(s,0,e),i=s+1),t.splice(i++,0,n),o!==null&&t.splice(i++,0,o)}function bb(t){return t!==Jn}function pc(t){return t&32767}function _b(t){return t>>16}function hc(t,e){let n=_b(t),r=e;for(;n>0;)r=r[Bn],n--;return r}function Lf(t){let e=mc;return mc=t,e}function Ib(t,e,n){let r;typeof n=="string"?r=n.charCodeAt(0)||0:n.hasOwnProperty(nn)&&(r=n[nn]),r==null&&(r=n[nn]=wb++);let o=r&ap,i=1<<o;e.data[t+(o>>cp)]|=i}function lp(t,e){let n=up(t,e);if(n!==-1)return n;let r=e[H];r.firstCreatePass&&(t.injectorIndex=e.length,lc(r.data,t),lc(e,null),lc(r.blueprint,null));let o=dp(t,e),i=t.injectorIndex;if(bb(o)){let s=pc(o),a=hc(o,e),c=a[H].data;for(let l=0;l<8;l++)e[i+l]=a[s+l]|c[s+l]}return e[i+8]=o,i}function lc(t,e){t.push(0,0,0,0,0,0,0,0,e)}function up(t,e){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||e[t.injectorIndex+8]===null?-1:t.injectorIndex}function dp(t,e){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let n=0,r=null,o=e;for(;o!==null;){if(r=gp(o),r===null)return Jn;if(n++,o=o[Bn],r.injectorIndex!==-1)return r.injectorIndex|n<<16}return Jn}function xb(t,e,n){Ib(t,e,n)}function fp(t,e,n){if(n&8||t!==void 0)return t;ti(e,"NodeInjector")}function pp(t,e,n,r){if(n&8&&r===void 0&&(r=null),(n&3)===0){let o=t[Pt],i=Le(void 0);try{return o?o.get(e,r,n&8):Ta(e,r,n&8)}finally{Le(i)}}return fp(r,e,n)}function hp(t,e,n,r=0,o){if(t!==null){if(e[L]&2048&&!(r&2)){let s=Mb(t,e,n,r,at);if(s!==at)return s}let i=mp(t,e,n,r,at);if(i!==at)return i}return pp(e,n,r,o)}function mp(t,e,n,r,o){let i=Sb(n);if(typeof i=="function"){if(!Za(e,t,r))return r&1?fp(o,n,r):pp(e,n,r,o);try{let s;if(s=i(r),s==null&&!(r&8))ti(n);else return s}finally{Ya()}}else if(typeof i=="number"){let s=null,a=up(t,e),c=Jn,l=r&1?e[st][bt]:null;for((a===-1||r&4)&&(c=a===-1?dp(t,e):e[a+8],c===Jn||!$f(r,!1)?a=-1:(s=e[H],a=pc(c),e=hc(c,e)));a!==-1;){let u=e[H];if(Vf(i,a,u.data)){let d=Db(a,e,n,s,r,l);if(d!==at)return d}c=e[a+8],c!==Jn&&$f(r,e[H].data[a+8]===l)&&Vf(i,a,e)?(s=u,a=pc(c),e=hc(c,e)):a=-1}}return o}function Db(t,e,n,r,o,i){let s=e[H],a=s.data[t+8],c=r==null?zn(a)&&mc:r!=s&&(a.type&3)!==0,l=o&1&&i===a,u=Cb(a,s,n,c,l);return u!==null?gc(e,s,u,a,o):at}function Cb(t,e,n,r,o){let i=t.providerIndexes,s=e.data,a=i&1048575,c=t.directiveStart,l=t.directiveEnd,u=i>>20,d=r?a:a+u,p=o?a+u:l;for(let f=d;f<p;f++){let m=s[f];if(f<c&&n===m||f>=c&&m.type===n)return f}if(o){let f=s[c];if(f&&Wn(f)&&f.type===n)return c}return null}function gc(t,e,n,r,o){let i=t[n],s=e.data;if(i instanceof Wr){let a=i;if(a.resolving)throw Sa("");let c=Lf(a.canSeeViewProviders);a.resolving=!0;let l=s[n].type||s[n],u,d=a.injectImpl?Le(a.injectImpl):null,p=Za(t,r,0);try{i=t[n]=a.factory(void 0,o,s,t,r),e.firstCreatePass&&n>=r.directiveStart&&hb(n,s[n],e)}finally{d!==null&&Le(d),Lf(c),a.resolving=!1,Ya()}}return i}function Sb(t){if(typeof t=="string")return t.charCodeAt(0)||0;let e=t.hasOwnProperty(nn)?t[nn]:void 0;return typeof e=="number"?e>=0?e&ap:Tb:e}function Vf(t,e,n){let r=1<<t;return!!(n[e+(t>>cp)]&r)}function $f(t,e){return!(t&2)&&!(t&1&&e)}function Tb(){return new _i(cn(),je())}function Mb(t,e,n,r,o){let i=t,s=e;for(;i!==null&&s!==null&&s[L]&2048&&!Gn(s);){let a=mp(i,s,n,r|2,at);if(a!==at)return a;let c=i.parent;if(!c){let l=s[Pa];if(l){let u=l.get(n,at,r&-5);if(u!==at)return u}c=gp(s),s=s[Bn]}i=c}return o}function gp(t){let e=t[H],n=e.type;return n===2?e.declTNode:n===1?t[bt]:null}function Nb(){return yp(cn(),je())}function yp(t,e){return new vp(Ft(t,e))}function kb(t){return(t.flags&128)===128}function Rb(){return Ab++}function Ob(t){bp.set(t[Lt],t)}function yc(t){bp.delete(t[Lt])}function Gr(t,e){Vt(e)?(t[Ff]=e[Lt],Ob(e)):t[Ff]=e}function _p(t){return wp(t[Un])}function Ep(t){return wp(t[vt])}function wp(t){for(;t!==null&&!$t(t);)t=t[vt];return t}function Oc(t){Pb=t}function Vb(t,e){if(t==null||typeof t!="object")return;let n=jf.get(t);n||(n=new WeakSet,jf.set(t,n)),n.add(e)}function Fb(t,e,n,r){$b(t,e,n,r)}function Pc(t){return(t.flags&32)===32}function Dp(t,e,n=!1){return jb(t,e,n)}function Cp(t,e){let n=t.contentQueries;if(n!==null){let r=V(null);try{for(let o=0;o<n.length;o+=2){let i=n[o],s=n[o+1];if(s!==-1){let a=t.data[s];Qa(i),a.contentQueries(2,e[s],s)}}}finally{V(r)}}}function vc(t,e,n){Qa(0);let r=V(null);try{e(t,n)}finally{V(r)}}function Hb(t,e,n){if(La(e)){let r=V(null);try{let o=e.directiveStart,i=e.directiveEnd;for(let s=o;s<i;s++){let a=t.data[s];if(a.contentQueries){let c=n[s];a.contentQueries(1,c,s)}}}finally{V(r)}}}function Sp(t){return t instanceof bc?t.changingThisBreaksApplicationSecurity:t}function Ub(t,e){return t.createText(e)}function Bb(t,e,n){t.setValue(e,n)}function Tp(t,e,n){return t.createElement(e,n)}function _c(t,e,n,r,o){t.insertBefore(e,n,r,o)}function Mp(t,e,n){t.appendChild(e,n)}function Hf(t,e,n,r,o){r!==null?_c(t,e,n,r,o):Mp(t,e,n)}function qb(t,e,n,r){t.removeChild(null,e,n,r)}function zb(t,e,n){t.setAttribute(e,"style",n)}function Wb(t,e,n){n===""?t.removeAttribute(e,"class"):t.setAttribute(e,"class",n)}function Np(t,e,n){let{mergedAttrs:r,classes:o,styles:i}=n;r!==null&&yb(t,e,r),o!==null&&Wb(t,e,o),i!==null&&zb(t,e,i)}function Kb(t){return t.type===4&&t.value!==Gb}function Ec(t){return(t&1)===0}function Uf(t,e){return t?":not("+e.trim()+")":e}function Qb(t){let e=t[0],n=1,r=2,o="",i=!1;for(;n<t.length;){let s=t[n];if(typeof s=="string")if(r&2){let a=t[++n];o+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else r&8?o+="."+s:r&4&&(o+=" "+s);else o!==""&&!Ec(s)&&(e+=Uf(i,o),o=""),r=s,i=i||!Ec(r);n++}return o!==""&&(e+=Uf(i,o)),e}function Zb(t){return t.map(Qb).join(",")}function Yb(t){let e=[],n=[],r=1,o=2;for(;r<t.length;){let i=t[r];if(typeof i=="string")o===2?i!==""&&e.push(i,t[++r]):o===8&&n.push(i);else{if(!Ec(o))break;o=i}r++}return n.length&&e.push(1,...n),e}function kp(t,e,n,r,o,i,s,a,c,l,u){let d=Ze+r,p=d+o,f=Jb(d,p),m=typeof l=="function"?l():l;return f[H]={type:t,blueprint:f,template:n,queries:null,viewQuery:a,declTNode:e,data:f.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:p,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof i=="function"?i():i,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:c,consts:m,incompleteFirstPass:!1,ssrId:u}}function Jb(t,e){let n=[];for(let r=0;r<e;r++)n.push(r<t?null:Ht);return n}function Xb(t){let e=t.tView;return e===null||e.incompleteFirstPass?t.tView=kp(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):e}function Ap(t,e,n,r,o,i,s,a,c,l,u){let d=e.blueprint.slice();return d[it]=o,d[L]=r|4|128|8|64|1024,(l!==null||t&&t[L]&2048)&&(d[L]|=2048),ja(d),d[$e]=d[Bn]=t,d[Me]=n,d[_t]=s||t&&t[_t],d[De]=a||t&&t[De],d[Pt]=c||t&&t[Pt]||null,d[bt]=i,d[Lt]=Rb(),d[ii]=u,d[Pa]=l,d[st]=e.type==2?t[st]:d,d}function e_(t,e,n){let r=Ft(e,t),o=Xb(n),i=t[_t].rendererFactory,s=t_(t,Ap(t,o,null,Rp(n),r,e,null,i.createRenderer(r,n),null,null,null));return t[e.index]=s}function Rp(t){let e=16;return t.signals?e=4096:t.onPush&&(e=64),e}function Op(t,e,n,r){if(n===0)return-1;let o=e.length;for(let i=0;i<n;i++)e.push(r),t.blueprint.push(r),t.data.push(null);return o}function t_(t,e){return t[Un]?t[Oa][vt]=e:t[Un]=e,t[Oa]=e,e}function Jr(t=1){Pp(Kn(),je(),ln()+t,!1)}function Pp(t,e,n,r){if(!r)if((e[L]&3)===3){let i=t.preOrderCheckHooks;i!==null&&gi(e,i,n)}else{let i=t.preOrderHooks;i!==null&&yi(e,i,0,n)}jt(n)}function wc(t,e,n,r){let o=V(null);try{let[i,s,a]=t.inputs[n],c=null;(s&Ni.SignalBased)!==0&&(c=e[i][nt]),c!==null&&c.transformFn!==void 0?r=c.transformFn(r):a!==null&&(r=a.call(e,r)),t.setInput!==null?t.setInput(e,c,r,n,i):rp(e,c,i,r)}finally{V(o)}}function Lp(t,e){return n_(t,e)}function r_(t,e){let n=Ic.get(t);if(!n||n.length===0)return;let r=e.parentNode,o=e.previousSibling;for(let i=n.length-1;i>=0;i--){let s=n[i],a=s.parentNode;s===e?(n.splice(i,1),qr.add(s),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(o&&s===o||a&&r&&a!==r)&&(n.splice(i,1),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),s.parentNode?.removeChild(s))}}function o_(t,e){let n=Ic.get(t);n?n.includes(e)||n.push(e):Ic.set(t,[e])}function Vp(t){Bf.has(t)||(Bf.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}function Fp(t,e,n){let r=t.get(i_);if(Array.isArray(e))for(let o of e)r.queue.add(o),n?.detachedLeaveAnimationFns?.push(o);else r.queue.add(e),n?.detachedLeaveAnimationFns?.push(e);r.scheduler&&r.scheduler(t)}function s_(t,e){for(let[n,r]of e)Fp(t,r.animateFns)}function qf(t,e,n,r){let o=t?.[qn]?.enter;e!==null&&o&&o.has(n.index)&&s_(r,o)}function Yn(t,e,n,r,o,i,s,a){if(o!=null){let c,l=!1;$t(o)?c=o:Vt(o)&&(l=!0,o=o[it]);let u=wt(o);t===0&&r!==null?(qf(a,r,i,n),s==null?Mp(e,r,u):_c(e,r,u,s||null,!0)):t===1&&r!==null?(qf(a,r,i,n),_c(e,r,u,s||null,!0),r_(i,u)):t===2?(a?.[qn]?.leave?.has(i.index)&&o_(i,u),qr.delete(u),zf(a,i,n,d=>{if(qr.has(u)){qr.delete(u);return}qb(e,u,l,d)})):t===3&&(qr.delete(u),zf(a,i,n,()=>{e.destroyNode(u)})),c!=null&&__(e,t,n,c,i,r,s)}}function a_(t,e){jp(t,e),e[it]=null,e[bt]=null}function jp(t,e){e[_t].changeDetectionScheduler?.notify(9),Fc(t,e,e[De],2,null,null)}function c_(t){let e=t[Un];if(!e)return uc(t[H],t);for(;e;){let n=null;if(Vt(e))n=e[Un];else{let r=e[Et];r&&(n=r)}if(!n){for(;e&&!e[vt]&&e!==t;)Vt(e)&&uc(e[H],e),e=e[$e];e===null&&(e=t),Vt(e)&&uc(e[H],e),n=e&&e[vt]}e=n}}function Vc(t,e){let n=t[Vr],r=n.indexOf(e);n.splice(r,1)}function l_(t,e){if(an(e))return;let n=e[De];n.destroyNode&&Fc(t,e,n,3,null,null),c_(e)}function uc(t,e){if(an(e))return;let n=V(null);try{e[L]&=-129,e[L]|=256,e[Fe]&&Ro(e[Fe]),f_(t,e),d_(t,e),e[H].type===1&&e[De].destroy();let r=e[Pr];if(r!==null&&$t(e[$e])){r!==e[$e]&&Vc(r,e);let o=e[si];o!==null&&o.detachView(t)}yc(e)}finally{V(n)}}function zf(t,e,n,r){let o=t?.[qn];if(o==null||o.leave==null||!o.leave.has(e.index))return r(!1);t&&Xn.add(t[Lt]),Fp(n,()=>{if(o.leave&&o.leave.has(e.index)){let s=o.leave.get(e.index),a=[];if(s){for(let c=0;c<s.animateFns.length;c++){let l=s.animateFns[c],{promise:u}=l();a.push(u)}o.detachedLeaveAnimationFns=void 0}o.running=Promise.allSettled(a),u_(t,r)}else t&&Xn.delete(t[Lt]),r(!1)},o)}function u_(t,e){let n=t[qn]?.running;if(n){n.then(()=>{t[qn].running=void 0,Xn.delete(t[Lt]),e(!0)});return}e(!1)}function d_(t,e){let n=t.cleanup,r=e[Hn];if(n!==null)for(let s=0;s<n.length-1;s+=2)if(typeof n[s]=="string"){let a=n[s+3];a>=0?r[a]():r[-a].unsubscribe(),s+=2}else{let a=r[n[s+1]];n[s].call(a)}r!==null&&(e[Hn]=null);let o=e[mt];if(o!==null){e[mt]=null;for(let s=0;s<o.length;s++){let a=o[s];a()}}let i=e[Lr];if(i!==null){e[Lr]=null;for(let s of i)s.destroy()}}function f_(t,e){let n;if(t!=null&&(n=t.destroyHooks)!=null)for(let r=0;r<n.length;r+=2){let o=e[n[r]];if(!(o instanceof Wr)){let i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){let a=o[i[s]],c=i[s+1];Z(z.LifecycleHookStart,a,c);try{c.call(a)}finally{Z(z.LifecycleHookEnd,a,c)}}else{Z(z.LifecycleHookStart,o,i);try{i.call(o)}finally{Z(z.LifecycleHookEnd,o,i)}}}}}function p_(t,e,n){return h_(t,e.parent,n)}function h_(t,e,n){let r=e;for(;r!==null&&r.type&168;)e=r,r=e.parent;if(r===null)return n[it];if(zn(r)){let{encapsulation:o}=t.data[r.directiveStart+r.componentOffset];if(o===Ye.None||o===Ye.Emulated)return null}return Ft(r,n)}function m_(t,e,n){return y_(t,e,n)}function g_(t,e,n){return t.type&40?Ft(t,n):null}function Hp(t,e,n,r){let o=p_(t,r,e),i=e[De],s=r.parent||e[bt],a=m_(s,r,e);if(o!=null)if(Array.isArray(n))for(let c=0;c<n.length;c++)Hf(i,o,n[c],a,!1);else Hf(i,o,n,a,!1);Wf!==void 0&&Wf(i,r,e,n,o)}function v_(t,e){if(e!==null){let r=t[st][bt],o=e.projection;return r.projection[o]}return null}function $c(t,e,n,r,o,i,s){for(;n!=null;){let a=r[Pt];if(n.type===128){n=n.next;continue}let c=r[n.index],l=n.type;if(s&&e===0&&(c&&Gr(wt(c),r),n.flags|=2),!Pc(n))if(l&8)$c(t,e,n.child,r,o,i,!1),Yn(e,t,a,o,c,n,i,r);else if(l&32){let u=Lp(n,r),d;for(;d=u();)Yn(e,t,a,o,d,n,i,r);Yn(e,t,a,o,c,n,i,r)}else l&16?b_(t,e,r,n,o,i):Yn(e,t,a,o,c,n,i,r);n=s?n.projectionNext:n.next}}function Fc(t,e,n,r,o,i){$c(n,r,t.firstChild,e,o,i,!1)}function b_(t,e,n,r,o,i){let s=n[st],c=s[bt].projection[r.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Yn(e,t,n[Pt],o,u,r,i,n)}else{let l=c,u=s[$e];kb(r)&&(l.flags|=128),$c(t,e,l,u,o,i,!0)}}function __(t,e,n,r,o,i,s){let a=r[li],c=wt(r);a!==c&&Yn(e,t,n,i,a,o,s);for(let l=Et;l<r.length;l++){let u=r[l];Fc(u[H],u,t,e,i,a)}}function E_(t,e,n,r,o){if(e)o?t.addClass(n,r):t.removeClass(n,r);else{let i=r.indexOf("-")===-1?void 0:xt.DashCase;o==null?t.removeStyle(n,r,i):(typeof o=="string"&&o.endsWith("!important")&&(o=o.slice(0,-10),i|=xt.Important),t.setStyle(n,r,o,i))}}function Up(t,e,n,r,o){let i=ln(),s=r&2;try{jt(-1),s&&e.length>Ze&&Pp(t,e,Ze,!1);let a=s?z.TemplateUpdateStart:z.TemplateCreateStart;Z(a,o,n),n(r,o)}finally{jt(i);let a=s?z.TemplateUpdateEnd:z.TemplateCreateEnd;Z(a,o,n)}}function w_(t,e,n){T_(t,e,n),(n.flags&64)===64&&M_(t,e,n)}function I_(t,e,n=Ft){let r=e.localNames;if(r!==null){let o=e.index+1;for(let i=0;i<r.length;i+=2){let s=r[i+1],a=s===-1?n(e,t):t[s];t[o++]=a}}}function x_(t,e,n,r){let i=r.get(xp,Ip)||n===Ye.ShadowDom||n===Ye.ExperimentalIsolatedShadowDom,s=t.selectRootElement(e,i);return D_(s),s}function D_(t){C_(t)}function S_(t,e,n,r,o,i){if(t.type&3){let s=Ft(t,e);r=i!=null?i(r,t.value||"",n):r,o.setProperty(s,n,r)}else t.type&12}function T_(t,e,n){let r=n.directiveStart,o=n.directiveEnd;zn(n)&&e_(e,n,t.data[r+n.componentOffset]),t.firstCreatePass||lp(n,e);let i=n.initialInputs;for(let s=r;s<o;s++){let a=t.data[s],c=gc(e,t,s,n);if(Gr(c,e),i!==null&&k_(e,s-r,c,a,n,i),Wn(a)){let l=It(n.index,e);l[Me]=gc(e,t,s,n)}}}function M_(t,e,n){let r=n.directiveStart,o=n.directiveEnd,i=n.index,s=bf();try{jt(i);for(let a=r;a<o;a++){let c=t.data[a],l=e[a];di(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&N_(c,l)}}finally{jt(-1),di(s)}}function N_(t,e){t.hostBindings!==null&&t.hostBindings(1,e)}function k_(t,e,n,r,o,i){let s=i[e];if(s!==null)for(let a=0;a<s.length;a+=2){let c=s[a],l=s[a+1];wc(r,n,c,l)}}function A_(t,e,n,r,o){let i=Ze+n,s=e[H],a=o(s,e,t,r,n);e[i]=a,Hr(t,!0);let c=t.type===2;return c?(Np(e[De],a,t),(af()===0||Va(t))&&Gr(a,e),cf()):Gr(a,e),Xa()&&(!c||!Pc(t))&&Hp(s,e,a,t),t}function R_(t){let e=t;return za()?hf():(e=e.parent,Hr(e,!1)),e}function O_(t,e){let n=t[Pt];if(!n)return;let r;try{r=n.get(un,null)}catch{r=null}r?.(e)}function P_(t,e,n,r,o){let i=t.inputs?.[r],s=t.hostDirectiveInputs?.[r],a=!1;if(s)for(let c=0;c<s.length;c+=2){let l=s[c],u=s[c+1],d=e.data[l];wc(d,n[l],u,o),a=!0}if(i)for(let c of i){let l=n[c],u=e.data[c];wc(u,l,r,o),a=!0}return a}function L_(t,e){let n=It(e,t),r=n[H];V_(r,n);let o=n[it];o!==null&&n[ii]===null&&(n[ii]=Dp(o,n[Pt])),Z(z.ComponentStart);try{Bp(r,n,n[Me])}finally{Z(z.ComponentEnd,n[Me])}}function V_(t,e){for(let n=e.length;n<t.blueprint.length;n++)e.push(t.blueprint[n])}function Bp(t,e,n){fi(e);try{let r=t.viewQuery;r!==null&&vc(1,r,n);let o=t.template;o!==null&&Up(t,e,o,1,n),t.firstCreatePass&&(t.firstCreatePass=!1),e[si]?.finishViewCreation(t),t.staticContentQueries&&Cp(t,e),t.staticViewQueries&&vc(2,t.viewQuery,n);let i=t.components;i!==null&&$_(e,i)}catch(r){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),r}finally{e[L]&=-5,pi()}}function $_(t,e){for(let n=0;n<e.length;n++)L_(t,e[n])}function Kr(t,e,n,r,o=!1){for(;n!==null;){if(n.type===128){n=o?n.projectionNext:n.next;continue}let i=e[n.index];i!==null&&r.push(wt(i)),$t(i)&&qp(i,r);let s=n.type;if(s&8)Kr(t,e,n.child,r);else if(s&32){let a=Lp(n,e),c;for(;c=a();)r.push(c)}else if(s&16){let a=v_(e,n);if(Array.isArray(a))r.push(...a);else{let c=tn(e[st]);Kr(c[H],c,a,r,!0)}}n=o?n.projectionNext:n.next}return r}function qp(t,e){for(let n=Et;n<t.length;n++){let r=t[n],o=r[H].firstChild;o!==null&&Kr(r[H],r,o,e)}t[li]!==t[it]&&e.push(t[li])}function zp(t){if(t[ci]!==null){for(let e of t[ci])e.impl.addSequence(e);t[ci].length=0}}function F_(t){return t[Fe]??j_(t)}function j_(t){let e=Wp.pop()??Object.create(U_);return e.lView=t,e}function H_(t){t.lView[Fe]!==t&&(t.lView=null,Wp.push(t))}function B_(t){let e=t[Fe]??Object.create(q_);return e.lView=t,e}function Gp(t){return t.type!==2}function Kp(t){if(t[Lr]===null)return;let e=!0;for(;e;){let n=!1;for(let r of t[Lr])r.dirty&&(n=!0,r.zone===null||Zone.current===r.zone?r.run():r.zone.run(()=>r.run()));e=n&&!!(t[L]&8192)}}function Qp(t,e=0){let r=t[_t].rendererFactory,o=!1;o||r.begin?.();try{W_(t,e)}finally{o||r.end?.()}}function W_(t,e){let n=Wa();try{Ga(!0),xc(t,e);let r=0;for(;Fr(t);){if(r===z_)throw new R(103,!1);r++,xc(t,1)}}finally{Ga(n)}}function G_(t,e,n,r){if(an(e))return;let o=e[L],i=!1,s=!1;fi(e);let a=!0,c=null,l=null;i||(Gp(t)?(l=F_(e),c=Ps(l)):ko()===null?(a=!1,l=B_(e),c=Ps(l)):e[Fe]&&(Ro(e[Fe]),e[Fe]=null));try{ja(e),mf(t.bindingStartIndex),n!==null&&Up(t,e,n,2,r);let u=(o&3)===3;if(!i)if(u){let f=t.preOrderCheckHooks;f!==null&&gi(e,f,null)}else{let f=t.preOrderHooks;f!==null&&yi(e,f,0,null),cc(e,0)}if(s||K_(e),Kp(e),Zp(e,0),t.contentQueries!==null&&Cp(t,e),!i)if(u){let f=t.contentCheckHooks;f!==null&&gi(e,f)}else{let f=t.contentHooks;f!==null&&yi(e,f,1),cc(e,1)}Z_(t,e);let d=t.components;d!==null&&Jp(e,d,0);let p=t.viewQuery;if(p!==null&&vc(2,p,r),!i)if(u){let f=t.viewCheckHooks;f!==null&&gi(e,f)}else{let f=t.viewHooks;f!==null&&yi(e,f,2),cc(e,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),e[ai]){for(let f of e[ai])f();e[ai]=null}i||(zp(e),e[L]&=-73)}catch(u){throw i||jr(e),u}finally{l!==null&&(Nu(l,c),a&&H_(l)),pi()}}function Zp(t,e){for(let n=_p(t);n!==null;n=Ep(n))for(let r=Et;r<n.length;r++){let o=n[r];Yp(o,e)}}function K_(t){for(let e=_p(t);e!==null;e=Ep(e)){if(!(e[L]&2))continue;let n=e[Vr];for(let r=0;r<n.length;r++){let o=n[r];Ha(o)}}}function Q_(t,e,n){Z(z.ComponentStart);let r=It(e,t);try{Yp(r,n)}finally{Z(z.ComponentEnd,r[Me])}}function Yp(t,e){ui(t)&&xc(t,e)}function xc(t,e){let r=t[H],o=t[L],i=t[Fe],s=!!(e===0&&o&16);if(s||=!!(o&64&&e===0),s||=!!(o&1024),s||=!!(i?.dirty&&Ls(i)),s||=!1,i&&(i.dirty=!1),t[L]&=-9217,s)G_(r,t,r.template,t[Me]);else if(o&8192){let a=V(null);try{Kp(t),Zp(t,1);let c=r.components;c!==null&&Jp(t,c,1),zp(t)}finally{V(a)}}}function Jp(t,e,n){for(let r=0;r<e.length;r++)Q_(t,e[r],n)}function Z_(t,e){let n=t.hostBindingOpCodes;if(n!==null)try{for(let r=0;r<n.length;r++){let o=n[r];if(o<0)jt(~o);else{let i=o,s=n[++r],a=n[++r];vf(s,i);let c=e[i];Z(z.HostBindingsUpdateStart,c);try{a(2,c)}finally{Z(z.HostBindingsUpdateEnd,c)}}}}finally{jt(-1)}}function jc(t,e){let n=Wa()?64:1088;for(t[_t].changeDetectionScheduler?.notify(e);t;){t[L]|=n;let r=tn(t);if(Gn(t)&&!r)return t;t=r}return null}function Y_(t,e){if(t.length<=Et)return;let n=Et+e,r=t[n];if(r){let o=r[Pr];o!==null&&o!==t&&Vc(o,r),e>0&&(t[n-1][vt]=r[vt]);let i=Ma(t,Et+e);a_(r[H],r);let s=i[si];s!==null&&s.detachView(i[H]),r[$e]=null,r[vt]=null,r[L]&=-129}return r}function J_(t,e){let n=t[Vr],r=e[$e];if(Vt(r))t[L]|=2;else{let o=r[$e][st];e[st]!==o&&(t[L]|=2)}n===null?t[Vr]=[e]:n.push(e)}function Hc(t,e,n,r,o){let i=t.data[e];if(i===null)i=X_(t,e,n,r,o),yf()&&(i.flags|=32);else if(i.type&64){i.type=n,i.value=r,i.attrs=o;let s=pf();i.injectorIndex=s===null?-1:s.injectorIndex}return Hr(i,!0),i}function X_(t,e,n,r,o){let i=qa(),s=za(),a=s?i:i&&i.parent,c=t.data[e]=tE(t,a,n,e,r,o);return eE(t,c,i,s),c}function eE(t,e,n,r){t.firstChild===null&&(t.firstChild=e),n!==null&&(r?n.child==null&&e.parent!==null&&(n.child=e):n.next===null&&(n.next=e,e.prev=n))}function tE(t,e,n,r,o,i){let s=e?e.injectorIndex:-1,a=0;return uf()&&(a|=128),{type:n,index:r,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:o,namespace:Ja(),attrs:i,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function wi(t,e,n){let r=n?t.styles:null,o=n?t.classes:null,i=0;if(e!==null)for(let s=0;s<e.length;s++){let a=e[s];if(typeof a=="number")i=a;else if(i==1)o=_a(o,a);else if(i==2){let c=a,l=e[++s];r=_a(r,c+": "+l+";")}}n?t.styles=r:t.stylesWithoutHost=r,n?t.classes=o:t.classesWithoutHost=o}function th(t,e=0){let n=je();if(n===null)return B(t,e);let r=cn();return hp(r,n,Ve(t),e)}function nE(t,e,n,r,o){let i=r===null?null:{"":-1},s=o(t,n);if(s!==null){let a=s,c=null,l=null;for(let u of s)if(u.resolveHostDirectives!==null){[a,c,l]=u.resolveHostDirectives(s);break}iE(t,e,n,a,i,c,l)}i!==null&&r!==null&&rE(n,r,i)}function rE(t,e,n){let r=t.localNames=[];for(let o=0;o<e.length;o+=2){let i=n[e[o+1]];if(i==null)throw new R(-301,!1);r.push(e[o],i)}}function oE(t,e,n){e.componentOffset=n,(t.components??=[]).push(e.index)}function iE(t,e,n,r,o,i,s){let a=r.length,c=null;for(let p=0;p<a;p++){let f=r[p];c===null&&Wn(f)&&(c=f,oE(t,n,p)),xb(lp(n,e),t,f.type)}dE(n,t.data.length,a),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let p=0;p<a;p++){let f=r[p];f.providersResolver&&f.providersResolver(f)}let l=!1,u=!1,d=Op(t,e,a,null);a>0&&(n.directiveToIndex=new Map);for(let p=0;p<a;p++){let f=r[p];if(n.mergedAttrs=Ac(n.mergedAttrs,f.hostAttrs),aE(t,n,e,d,f),uE(d,f,o),s!==null&&s.has(f)){let[E,v]=s.get(f);n.directiveToIndex.set(f.type,[d,E+n.directiveStart,v+n.directiveStart])}else(i===null||!i.has(f))&&n.directiveToIndex.set(f.type,d);f.contentQueries!==null&&(n.flags|=4),(f.hostBindings!==null||f.hostAttrs!==null||f.hostVars!==0)&&(n.flags|=64);let m=f.type.prototype;!l&&(m.ngOnChanges||m.ngOnInit||m.ngDoCheck)&&((t.preOrderHooks??=[]).push(n.index),l=!0),!u&&(m.ngOnChanges||m.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(n.index),u=!0),d++}sE(t,n,i)}function sE(t,e,n){for(let r=e.directiveStart;r<e.directiveEnd;r++){let o=t.data[r];if(n===null||!n.has(o))Gf(0,e,o,r),Gf(1,e,o,r),Qf(e,r,!1);else{let i=n.get(o);Kf(0,e,i,r),Kf(1,e,i,r),Qf(e,r,!0)}}}function Gf(t,e,n,r){let o=t===0?n.inputs:n.outputs;for(let i in o)if(o.hasOwnProperty(i)){let s;t===0?s=e.inputs??={}:s=e.outputs??={},s[i]??=[],s[i].push(r),nh(e,i)}}function Kf(t,e,n,r){let o=t===0?n.inputs:n.outputs;for(let i in o)if(o.hasOwnProperty(i)){let s=o[i],a;t===0?a=e.hostDirectiveInputs??={}:a=e.hostDirectiveOutputs??={},a[s]??=[],a[s].push(r,i),nh(e,s)}}function nh(t,e){e==="class"?t.flags|=8:e==="style"&&(t.flags|=16)}function Qf(t,e,n){let{attrs:r,inputs:o,hostDirectiveInputs:i}=t;if(r===null||!n&&o===null||n&&i===null||Kb(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let s=null,a=0;for(;a<r.length;){let c=r[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!n&&o.hasOwnProperty(c)){let l=o[c];for(let u of l)if(u===e){s??=[],s.push(c,r[a+1]);break}}else if(n&&i.hasOwnProperty(c)){let l=i[c];for(let u=0;u<l.length;u+=2)if(l[u]===e){s??=[],s.push(l[u+1],r[a+1]);break}}a+=2}t.initialInputs??=[],t.initialInputs.push(s)}function aE(t,e,n,r,o){t.data[r]=o;let i=o.factory||(o.factory=Vn(o.type,!0)),s=new Wr(i,Wn(o),th,null);t.blueprint[r]=s,n[r]=s,cE(t,e,r,Op(t,n,o.hostVars,Ht),o)}function cE(t,e,n,r,o){let i=o.hostBindings;if(i){let s=t.hostBindingOpCodes;s===null&&(s=t.hostBindingOpCodes=[]);let a=~e.index;lE(s)!=a&&s.push(a),s.push(n,r,i)}}function lE(t){let e=t.length;for(;e>0;){let n=t[--e];if(typeof n=="number"&&n<0)return n}return 0}function uE(t,e,n){if(n){if(e.exportAs)for(let r=0;r<e.exportAs.length;r++)n[e.exportAs[r]]=t;Wn(e)&&(n[""]=t)}}function dE(t,e,n){t.flags|=1,t.directiveStart=e,t.directiveEnd=e+n,t.providerIndexes=e}function fE(t,e,n,r,o,i,s,a){let c=e[H],l=c.consts,u=$r(l,s),d=Hc(c,t,n,r,u);return i&&nE(c,e,d,$r(l,a),o),d.mergedAttrs=Ac(d.mergedAttrs,d.attrs),d.attrs!==null&&wi(d,d.attrs,!1),d.mergedAttrs!==null&&wi(d,d.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,d),d}function pE(t,e){mb(t,e),La(e)&&t.queries.elementEnd(e)}function hE(t,e,n,r,o,i){let s=e.consts,a=$r(s,o),c=Hc(e,t,n,r,a);if(c.mergedAttrs=Ac(c.mergedAttrs,c.attrs),i!=null){let l=$r(s,i);c.localNames=[];for(let u=0;u<l.length;u+=2)c.localNames.push(l[u],-1)}return c.attrs!==null&&wi(c,c.attrs,!1),c.mergedAttrs!==null&&wi(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function Uc(t,e,n){if(n===Ht)return!1;let r=t[e];return Object.is(r,n)?!1:(t[e]=n,!0)}function mE(t,e,n){return function r(o){let i=r.__ngNativeEl__;i!==void 0&&Vb(o,i);let s=zn(t)?It(t.index,e):e;jc(s,5);let a=e[Me],c=Zf(e,a,n,o),l=r.__ngNextListenerFn__;for(;l;)c=Zf(e,a,l,o)&&c,l=l.__ngNextListenerFn__;return c}}function Zf(t,e,n,r){let o=V(null);try{return Z(z.OutputStart,e,n),n(r)!==!1}catch(i){return O_(t,i),!1}finally{Z(z.OutputEnd,e,n),V(o)}}function gE(t,e,n,r,o,i,s,a){let c=Va(t),l=!1,u=null;if(!r&&c&&(u=vE(e,n,i,t.index)),u!==null){let d=u.__ngLastListenerFn__||u;d.__ngNextListenerFn__=s,u.__ngLastListenerFn__=s,l=!0}else{let d=Ft(t,n),p=r?r(d):d;Fb(n,p,i,a),r||(a.__ngNativeEl__=d);let f=o.listen(p,i,a);if(!yE(i)){let m=r?E=>r(wt(E[t.index])):t.index;bE(m,e,n,i,a,f,!1)}}return l}function yE(t){return t.startsWith("animation")||t.startsWith("transition")}function vE(t,e,n,r){let o=t.cleanup;if(o!=null)for(let i=0;i<o.length-1;i+=2){let s=o[i];if(s===n&&o[i+1]===r){let a=e[Hn],c=o[i+2];return a&&a.length>c?a[c]:null}typeof s=="string"&&(i+=2)}return null}function bE(t,e,n,r,o,i,s){let a=e.firstCreatePass?sf(e):null,c=of(n),l=c.length;c.push(o,i),a&&a.push(r,t,l,(l+1)*(s?-1:1))}function _E(t){return t.debugInfo?.className||t.type.name||null}function EE(t){return Object.keys(t).map(e=>{let[n,r,o]=t[e],i={propName:n,templateName:e,isSignal:(r&Ni.SignalBased)!==0};return o&&(i.transform=o),i})}function wE(t){return Object.keys(t).map(e=>({propName:t[e],templateName:e}))}function IE(t,e,n){let r=e instanceof Qe?e:e?.injector;return r&&t.getStandaloneInjector!==null&&(r=t.getStandaloneInjector(r)||r),r?new Cc(n,r):n}function xE(t){let e=t.get(dn,null);if(e===null)throw new R(407,!1);let n=t.get(eh,null),r=t.get($n,null),o=t.get(tr,null,{optional:!0});return{rendererFactory:e,sanitizer:n,changeDetectionScheduler:r,ngReflect:!1,tracingService:o}}function DE(t,e){let n=rh(t);return Tp(e,n,n==="svg"?tf:n==="math"?nf:null)}function CE(t){if(t?.toLowerCase()==="script")throw new R(905,!1)}function rh(t){return(t.selectors[0][0]||"div").toLowerCase()}function SE(t,e,n,r){let o=t?["ng-version","21.2.18"]:Yb(e.selectors[0]),i=null,s=null,a=0;if(n)for(let u of n)a+=u[Sc].requiredVars,u.create&&(u.targetIdx=0,(i??=[]).push(u)),u.update&&(u.targetIdx=0,(s??=[]).push(u));if(r)for(let u=0;u<r.length;u++){let d=r[u];if(typeof d!="function")for(let p of d.bindings){a+=p[Sc].requiredVars;let f=u+1;p.create&&(p.targetIdx=f,(i??=[]).push(p)),p.update&&(p.targetIdx=f,(s??=[]).push(p))}}let c=[e];if(r)for(let u of r){let d=typeof u=="function"?u:u.type,p=Da(d);c.push(p)}return kp(0,null,TE(i,s),1,a,c,null,null,null,[o],null)}function TE(t,e){return!t&&!e?null:n=>{if(n&1&&t)for(let r of t)r.create();if(n&2&&e)for(let r of e)r.update()}}function Yf(t){let e=t[Sc].kind;return e==="input"||e==="twoWay"}function ME(t,e,n){let r=t.projection=[];for(let o=0;o<e.length;o++){let i=n[o];r.push(i!=null&&i.length?Array.from(i):null)}}function oh(t,e,n=null){return new Qr({providers:t,parent:e,debugName:n,runEnvironmentInitializers:!0}).injector}function Bc(t){return np(()=>{let e=OE(t),n=A(b({},e),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===Rc.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&t.dependencies||null,getStandaloneInjector:e.standalone?o=>o.get(NE).getOrCreateStandaloneInjector(n):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||Ye.Emulated,styles:t.styles||Ot,_:null,schemas:t.schemas||null,tView:null,id:""});e.standalone&&Vp("NgStandalone"),PE(n);let r=t.dependencies;return n.directiveDefs=Jf(r,kE),n.pipeDefs=Jf(r,jd),n.id=LE(n),n})}function kE(t){return Ar(t)||Da(t)}function AE(t,e){if(t==null)return rn;let n={};for(let r in t)if(t.hasOwnProperty(r)){let o=t[r],i,s,a,c;Array.isArray(o)?(a=o[0],i=o[1],s=o[2]??i,c=o[3]||null):(i=o,s=o,a=Ni.None,c=null),n[i]=[r,a,c],e[i]=s}return n}function RE(t){if(t==null)return rn;let e={};for(let n in t)t.hasOwnProperty(n)&&(e[t[n]]=n);return e}function OE(t){let e={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:e,inputConfig:t.inputs||rn,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||Ot,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:AE(t.inputs,e),outputs:RE(t.outputs),debugInfo:null}}function PE(t){t.features?.forEach(e=>e(t))}function Jf(t,e){return t?()=>{let n=typeof t=="function"?t():t,r=[];for(let o of n){let i=e(o);i!==null&&r.push(i)}return r}:null}function LE(t){let e=0,n=typeof t.consts=="function"?"":t.consts,r=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,n,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let i of r.join("|"))e=Math.imul(31,e)+i.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function zc(t){return!!t&&typeof t.then=="function"}function ih(t){return!!t&&typeof t.subscribe=="function"}function Gc(t){return on([{provide:Wc,multi:!0,useValue:t}])}function ah(){$s(()=>{let t="";throw new R(600,t)})}function ch(t){return t.isBoundToModule}function zr(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Ce(t,e,n,r){let o=je(),i=o[H],s=t+Ze,a=i.firstCreatePass?hE(s,i,2,e,n,r):i.data[s];return A_(a,o,t,e,$E),r!=null&&I_(o,a),Ce}function Ne(){let t=cn(),e=R_(t);return df(e)&&ff(),lf(),Ne}function Ri(t,e,n,r){return Ce(t,e,n,r),Ne(),Ri}function Oi(t,e,n){let r=je(),o=Ka();if(Uc(r,o,e)){let i=Kn(),s=xf();S_(s,r,t,e,r[De],n)}return Oi}function lh(t){typeof t=="string"&&(FE=t.toLowerCase().replace(/_/g,"-"))}function eo(t,e,n){let r=je(),o=Kn(),i=cn();return(i.type&3||n)&&gE(i,o,r,n,r[De],t,e,mE(i,r,e)),eo}function mi(t,e){return t<<17|e<<2}function fn(t){return t>>17&32767}function jE(t){return(t&2)==2}function HE(t,e){return t&131071|e<<17}function Mc(t){return t|2}function er(t){return(t&131068)>>2}function dc(t,e){return t&-131069|e<<2}function UE(t){return(t&1)===1}function Nc(t){return t|1}function BE(t,e,n,r,o,i){let s=i?e.classBindings:e.styleBindings,a=fn(s),c=er(s);t[r]=n;let l=!1,u;if(Array.isArray(n)){let d=n;u=d[1],(u===null||Fn(d,u)>0)&&(l=!0)}else u=n;if(o)if(c!==0){let p=fn(t[a+1]);t[r+1]=mi(p,a),p!==0&&(t[p+1]=dc(t[p+1],r)),t[a+1]=HE(t[a+1],r)}else t[r+1]=mi(a,0),a!==0&&(t[a+1]=dc(t[a+1],r)),a=r;else t[r+1]=mi(c,0),a===0?a=r:t[c+1]=dc(t[c+1],r),c=r;l&&(t[r+1]=Mc(t[r+1])),Xf(t,u,r,!0),Xf(t,u,r,!1),qE(e,u,t,r,i),s=mi(a,c),i?e.classBindings=s:e.styleBindings=s}function qE(t,e,n,r,o){let i=o?t.residualClasses:t.residualStyles;i!=null&&typeof e=="string"&&Fn(i,e)>=0&&(n[r+1]=Nc(n[r+1]))}function Xf(t,e,n,r){let o=t[n+1],i=e===null,s=r?fn(o):er(o),a=!1;for(;s!==0&&(a===!1||i);){let c=t[s],l=t[s+1];zE(c,e)&&(a=!0,t[s+1]=r?Nc(l):Mc(l)),s=r?fn(l):er(l)}a&&(t[n+1]=r?Mc(o):Nc(o))}function zE(t,e){return t===null||e==null||(Array.isArray(t)?t[1]:t)===e?!0:Array.isArray(t)&&typeof e=="string"?Fn(t,e)>=0:!1}function Pi(t,e){return WE(t,e,null,!0),Pi}function WE(t,e,n,r){let o=je(),i=Kn(),s=gf(2);if(i.firstUpdatePass&&KE(i,t,s,r),e!==Ht&&Uc(o,s,e)){let a=i.data[ln()];XE(i,a,o,o[De],t,o[s+1]=ew(e,n),r,s)}}function GE(t,e){return e>=t.expandoStartIndex}function KE(t,e,n,r){let o=t.data;if(o[n+1]===null){let i=o[ln()],s=GE(t,n);tw(i,r)&&e===null&&!s&&(e=!1),e=QE(o,i,e,r),BE(o,i,e,n,s,r)}}function QE(t,e,n,r){let o=_f(t),i=r?e.residualClasses:e.residualStyles;if(o===null)(r?e.classBindings:e.styleBindings)===0&&(n=fc(null,t,e,n,r),n=Zr(n,e.attrs,r),i=null);else{let s=e.directiveStylingLast;if(s===-1||t[s]!==o)if(n=fc(o,t,e,n,r),i===null){let c=ZE(t,e,r);c!==void 0&&Array.isArray(c)&&(c=fc(null,t,e,c[1],r),c=Zr(c,e.attrs,r),YE(t,e,r,c))}else i=JE(t,e,r)}return i!==void 0&&(r?e.residualClasses=i:e.residualStyles=i),n}function ZE(t,e,n){let r=n?e.classBindings:e.styleBindings;if(er(r)!==0)return t[fn(r)]}function YE(t,e,n,r){let o=n?e.classBindings:e.styleBindings;t[fn(o)]=r}function JE(t,e,n){let r,o=e.directiveEnd;for(let i=1+e.directiveStylingLast;i<o;i++){let s=t[i].hostAttrs;r=Zr(r,s,n)}return Zr(r,e.attrs,n)}function fc(t,e,n,r,o){let i=null,s=n.directiveEnd,a=n.directiveStylingLast;for(a===-1?a=n.directiveStart:a++;a<s&&(i=e[a],r=Zr(r,i.hostAttrs,o),i!==t);)a++;return t!==null&&(n.directiveStylingLast=a),r}function Zr(t,e,n){let r=n?1:2,o=-1;if(e!==null)for(let i=0;i<e.length;i++){let s=e[i];typeof s=="number"?o=s:o===r&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),Wd(t,s,n?!0:e[++i]))}return t===void 0?null:t}function XE(t,e,n,r,o,i,s,a){if(!(e.type&3))return;let c=t.data,l=c[a+1],u=UE(l)?ep(c,e,n,o,er(l),s):void 0;if(!Ci(u)){Ci(i)||jE(l)&&(i=ep(c,null,n,o,a,s));let d=$a(ln(),n);E_(r,s,d,o,i)}}function ep(t,e,n,r,o,i){let s=e===null,a;for(;o>0;){let c=t[o],l=Array.isArray(c),u=l?c[1]:c,d=u===null,p=n[o+1];p===Ht&&(p=d?Ot:void 0);let f=d?ri(p,r):u===r?p:void 0;if(l&&!Ci(f)&&(f=ri(c,r)),Ci(f)&&(a=f,s))return a;let m=t[o+1];o=s?fn(m):er(m)}if(e!==null){let c=i?e.residualClasses:e.residualStyles;c!=null&&(a=ri(c,r))}return a}function Ci(t){return t!==void 0}function ew(t,e){return t==null||t===""||(typeof e=="string"?t=t+e:typeof t=="object"&&(t=Yo(Sp(t)))),t}function tw(t,e){return(t.flags&(e?8:16))!==0}function Je(t,e=""){let n=je(),r=Kn(),o=t+Ze,i=r.firstCreatePass?Hc(r,o,1,e,null):r.data[o],s=nw(r,n,i,e);n[o]=s,Xa()&&Hp(r,n,s,i),Hr(i,!1)}function rw(t,e,n,r=""){return Uc(t,Ka(),n)?e+Hd(n)+r:Ht}function Li(t,e,n){let r=je(),o=rw(r,t,e,n);return o!==Ht&&ow(r,ln(),o),Li}function ow(t,e,n){let r=$a(e,t);Bb(t[De],r,n)}function dh(){return[{provide:$n,useExisting:uh},{provide:Te,useClass:Nr},{provide:Br,useValue:!0}]}function iw(){return typeof $localize<"u"&&$localize.locale||Xr}var bi,op,Rf,Z,z,Jn,Wr,mc,Eb,ap,cp,wb,at,_i,vp,Rc,bp,Ab,Ff,Pb,Si,Lb,Ti,Yr,Mi,Ip,xp,jf,$b,jb,Ye,bc,Gb,Ht,Ni,xt,n_,NT,Ic,qr,Xn,Lc,tr,Bf,$p,i_,y_,Wf,C_,Wp,U_,q_,z_,Ei,Xp,ki,Dc,Ai,dn,eh,vi,Cc,Sc,Tc,Ii,xi,Di,Qr,NE,qc,Wc,Kc,sh,VE,pn,$E,Xr,FE,nw,uh,Qc,Zc=h(()=>{"use strict";hi();ra();Oo();qo();ac();bi=class{previousValue;currentValue;firstChange;constructor(e,n,r){this.previousValue=e,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}};op="__ngSimpleChanges__";Rf=[],Z=function(t,e=null,n){for(let r=0;r<Rf.length;r++){let o=Rf[r];o(t,e,n)}},z=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(z||{});Jn=-1,Wr=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,n,r,o){this.factory=e,this.name=o,this.canSeeViewProviders=n,this.injectImpl=r}};mc=!0;Eb=256,ap=Eb-1,cp=5,wb=0,at={};_i=class{_tNode;_lView;constructor(e,n){this._tNode=e,this._lView=n}get(e,n,r){return hp(this._tNode,this._lView,e,Xt(r),n)}};vp=(()=>{class t{nativeElement;constructor(n){this.nativeElement=n}static __NG_ELEMENT_ID__=Nb}return t})();Rc=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(Rc||{}),bp=new Map,Ab=0;Ff="__ngContext__";Si=new j("",{factory:()=>Lb}),Lb="ng",Ti=new j(""),Yr=new j("",{providedIn:"platform",factory:()=>"unknown"}),Mi=new j("",{factory:()=>O(ze).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null}),Ip=!1,xp=new j("",{factory:()=>Ip}),jf=new WeakMap;$b=(t,e,n,r)=>{};jb=()=>null;Ye=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(Ye||{}),bc=class{changingThisBreaksApplicationSecurity;constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${ba})`}};Gb="ng-template";Ht={};Ni=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(Ni||{});xt=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(xt||{});NT=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function",Ic=new WeakMap,qr=new WeakSet;Xn=new Set,Lc=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(Lc||{}),tr=new j(""),Bf=new Set;$p=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=ne({token:t,providedIn:"root",factory:()=>new t})}return t})(),i_=new j("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:O(Qe)})});y_=g_;C_=()=>null;Wp=[];U_=A(b({},Ao),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{jr(t.lView)},consumerOnSignalRead(){this.lView[Fe]=this}});q_=A(b({},Ao),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let e=tn(t.lView);for(;e&&!Gp(e[H]);)e=tn(e);e&&Ha(e)},consumerOnSignalRead(){this.lView[Fe]=this}});z_=100;Ei=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let e=this._lView,n=e[H];return Kr(n,e,n.firstChild,[])}constructor(e,n){this._lView=e,this._cdRefInjectingView=n}get context(){return this._lView[Me]}set context(e){this._lView[Me]=e}get destroyed(){return an(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[$e];if($t(e)){let n=e[ef],r=n?n.indexOf(this):-1;r>-1&&(Y_(e,r),Ma(n,r))}this._attachedToViewContainer=!1}l_(this._lView[H],this._lView)}onDestroy(e){Ba(this._lView,e)}markForCheck(){jc(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[L]&=-129}reattach(){Ua(this._lView),this._lView[L]|=128}detectChanges(){this._lView[L]|=1024,Qp(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new R(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=Gn(this._lView),n=this._lView[Pr];n!==null&&!e&&Vc(n,this._lView),jp(this._lView[H],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new R(902,!1);this._appRef=e;let n=Gn(this._lView),r=this._lView[Pr];r!==null&&!n&&J_(r,this._lView),Ua(this._lView)}};Xp=class{},ki=class{},Dc=class{resolveComponentFactory(e){throw new R(917,!1)}},Ai=class{static NULL=new Dc},dn=class{},eh=(()=>{class t{static \u0275prov=ne({token:t,providedIn:"root",factory:()=>null})}return t})(),vi={},Cc=class{injector;parentInjector;constructor(e,n){this.injector=e,this.parentInjector=n}get(e,n,r){let o=this.injector.get(e,vi,r);return o!==vi||n===vi?o:this.parentInjector.get(e,n,r)}};Sc=Symbol("BINDING");Tc=class extends Ai{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let n=Ar(e);return new Ii(n,this.ngModule)}};Ii=class extends ki{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=EE(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=wE(this.componentDef.outputs),this.cachedOutputs}constructor(e,n){super(),this.componentDef=e,this.ngModule=n,this.componentType=e.type,this.selector=Zb(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!n}create(e,n,r,o,i,s){Z(z.DynamicComponentStart);let a=V(null);try{let c=this.componentDef,l=IE(c,o||this.ngModule,e),u=xE(l),d=u.tracingService;return d&&d.componentCreate?d.componentCreate(_E(c),()=>this.createComponentRef(u,l,n,r,i,s)):this.createComponentRef(u,l,n,r,i,s)}finally{V(a)}}createComponentRef(e,n,r,o,i,s){let a=this.componentDef,c=SE(o,a,s,i),l=e.rendererFactory.createRenderer(null,a),u=o?x_(l,o,a.encapsulation,n):DE(a,l);CE(u?.tagName);let d=s?.some(Yf)||i?.some(m=>typeof m!="function"&&m.bindings.some(Yf)),p=Ap(null,c,null,512|Rp(a),null,null,e,l,n,null,Dp(u,n,!0));p[Ze]=u,fi(p);let f=null;try{let m=fE(Ze,p,2,"#host",()=>c.directiveRegistry,!0,0);Np(l,u,m),Gr(u,p),w_(c,p,m),Hb(c,m,p),pE(c,m),r!==void 0&&ME(m,this.ngContentSelectors,r),f=It(m.index,p),p[Me]=f[Me],Bp(c,p,null)}catch(m){throw f!==null&&yc(f),yc(p),m}finally{Z(z.DynamicComponentEnd),pi()}return new xi(this.componentType,p,!!d)}};xi=class extends Xp{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,n,r){super(),this._rootLView=n,this._hasInputBindings=r,this._tNode=Fa(n[H],Ze),this.location=yp(this._tNode,n),this.instance=It(this._tNode.index,n)[Me],this.hostView=this.changeDetectorRef=new Ei(n,void 0),this.componentType=e}setInput(e,n){this._hasInputBindings;let r=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),n))return;let o=this._rootLView,i=P_(r,o[H],o,e,n);this.previousInputValues.set(e,n);let s=It(r.index,o);jc(s,1)}get injector(){return new _i(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};Di=class{},Qr=class extends Di{injector;componentFactoryResolver=new Tc(this);instance=null;constructor(e){super();let n=new en([...e.providers,{provide:Di,useValue:this},{provide:Ai,useValue:this.componentFactoryResolver}],e.parent||Or(),e.debugName,new Set(["environment"]));this.injector=n,e.runEnvironmentInitializers&&n.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};NE=(()=>{class t{_injector;cachedInjectors=new Map;constructor(n){this._injector=n}getOrCreateStandaloneInjector(n){if(!n.standalone)return null;if(!this.cachedInjectors.has(n)){let r=Aa(!1,n.type),o=r.length>0?oh([r],this._injector,""):null;this.cachedInjectors.set(n,o)}return this.cachedInjectors.get(n)}ngOnDestroy(){try{for(let n of this.cachedInjectors.values())n!==null&&n.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=ne({token:t,providedIn:"environment",factory:()=>new t(B(Qe))})}return t})();qc=new j("");Wc=new j("");Kc=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((n,r)=>{this.resolve=n,this.reject=r});appInits=O(Wc,{optional:!0})??[];injector=O(gt);constructor(){}runInitializers(){if(this.initialized)return;let n=[];for(let o of this.appInits){let i=oi(this.injector,o);if(zc(i))n.push(i);else if(ih(i)){let s=new Promise((a,c)=>{i.subscribe({complete:a,error:c})});n.push(s)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),n.length===0&&r(),this.initialized=!0}static \u0275fac=function(r){return new(r||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),sh=new j("");VE=10,pn=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=O(un);afterRenderManager=O($p);zonelessEnabled=O(Br);rootEffectScheduler=O(sc);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new qe;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=O(Qn);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(rt(n=>!n))}constructor(){O(tr,{optional:!0})}whenStable(){let n;return new Promise(r=>{n=this.isStable.subscribe({next:o=>{o&&r()}})}).finally(()=>{n.unsubscribe()})}_injector=O(Qe);_rendererFactory=null;get injector(){return this._injector}bootstrap(n,r){return this.bootstrapImpl(n,r)}bootstrapImpl(n,r,o=gt.NULL){return this._injector.get(Te).run(()=>{Z(z.BootstrapComponentStart);let s=n instanceof ki;if(!this._injector.get(Kc).done){let m="";throw new R(405,m)}let c;s?c=n:c=this._injector.get(Ai).resolveComponentFactory(n),this.componentTypes.push(c.componentType);let l=ch(c)?void 0:this._injector.get(Di),u=r||c.selector,d=c.create(o,[],u,l),p=d.location.nativeElement,f=d.injector.get(qc,null);return f?.registerApplication(p),d.onDestroy(()=>{this.detachView(d.hostView),zr(this.components,d),f?.unregisterApplication(p)}),this._loadComponent(d),Z(z.BootstrapComponentEnd,d),d})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Z(z.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Lc.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw Z(z.ChangeDetectionEnd),new R(101,!1);let n=V(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,V(n),this.afterTick.next(),Z(z.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(dn,null,{optional:!0}));let n=0;for(;this.dirtyFlags!==0&&n++<VE;){Z(z.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{Z(z.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let n=!1;if(this.dirtyFlags&7){let r=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:o}of this.allViews){if(!r&&!Fr(o))continue;let i=r&&!this.zonelessEnabled?0:1;Qp(o,i),n=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}n||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:n})=>Fr(n))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(n){let r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){let r=n;zr(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView);try{this.tick()}catch(o){this.internalErrorHandler(o)}this.components.push(n),this._injector.get(sh,[]).forEach(o=>o(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>zr(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new R(406,!1);let n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(r){return new(r||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();$E=(t,e,n,r,o)=>(ec(!0),Tp(e[De],r,Ja()));Xr="en-US",FE=Xr;nw=(t,e,n,r)=>(ec(!0),Ub(e[De],r));uh=(()=>{class t{applicationErrorHandler=O(un);appRef=O(pn);taskService=O(Qn);ngZone=O(Te);zonelessEnabled=O(Br);tracing=O(tr,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new xe;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Mr):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(O(ic,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let n=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(n);return}this.switchToMicrotaskScheduler(),this.taskService.remove(n)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let n=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(n)})})}notify(n){if(!this.zonelessEnabled&&n===5)return;switch(n){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let r=this.useMicrotaskScheduler?Mf:tc;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Mr+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let n=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(r){this.applicationErrorHandler(r)}finally{this.taskService.remove(n),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let n=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(n)}}static \u0275fac=function(r){return new(r||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();Qc=new j("",{factory:()=>O(Qc,{optional:!0,skipSelf:!0})||iw()})});function to(t){return!t.moduleRef}function fw(t){let e=to(t)?t.r3Injector:t.moduleRef.injector,n=e.get(Te);return n.run(()=>{to(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let r=e.get(un),o;if(n.runOutsideAngular(()=>{o=n.onError.subscribe({next:r})}),to(t)){let i=()=>e.destroy(),s=t.platformInjector.get(Yc);s.add(i),e.onDestroy(()=>{o.unsubscribe(),s.delete(i)})}else{let i=()=>t.moduleRef.destroy(),s=t.platformInjector.get(Yc);s.add(i),t.moduleRef.onDestroy(()=>{zr(t.allPlatformModules,t.moduleRef),o.unsubscribe(),s.delete(i)})}return hw(r,n,()=>{let i=e.get(Qn),s=i.add(),a=e.get(Kc);return a.runInitializers(),a.donePromise.then(()=>{let c=e.get(Qc,Xr);if(lh(c||Xr),!e.get(dw,!0))return to(t)?e.get(pn):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(to(t)){let u=e.get(pn);return t.rootComponent!==void 0&&u.bootstrap(t.rootComponent),u}else return pw?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{i.remove(s)})})})}function hw(t,e,n){try{let r=n();return zc(r)?r.catch(o=>{throw e.runOutsideAngular(()=>t(o)),o}):r}catch(r){throw e.runOutsideAngular(()=>t(r)),r}}function mw(t=[],e){return gt.create({name:e,providers:[{provide:Rr,useValue:"platform"},{provide:Yc,useValue:new Set([()=>Vi=null])},...t]})}function gw(t=[]){if(Vi)return Vi;let e=mw(t);return Vi=e,ah(),yw(e),e}function yw(t){let e=t.get(Ti,null);oi(t,()=>{e?.forEach(n=>n())})}function ph(){return!1}function hh(t){let{rootComponent:e,appProviders:n,platformProviders:r,platformRef:o}=t;Z(z.BootstrapApplicationStart);try{let i=o?.injector??gw(r),s=[dh(),kf,...n||[]],a=new Qr({providers:s,parent:i,debugName:"",runEnvironmentInitializers:!1});return fw({r3Injector:a.injector,platformInjector:i,rootComponent:e})}catch(i){return Promise.reject(i)}finally{Z(z.BootstrapApplicationEnd)}}var Yc,dw,pw,Vi,vw,eP,He=h(()=>{"use strict";Zc();Zc();hi();hi();Yc=new j(""),dw=new j("");Vi=null;vw=1e4,eP=vw-1e3});function oo(){return mh}function Jc(t){mh??=t}var mh,ro,gh=h(()=>{"use strict";mh=null;ro=class{}});function Xc(t,e){e=encodeURIComponent(e);for(let n of t.split(";")){let r=n.indexOf("="),[o,i]=r==-1?[n,""]:[n.slice(0,r),n.slice(r+1)];if(o.trim()===e)return decodeURIComponent(i)}return null}var io,yh=h(()=>{"use strict";io=class{}});var vh,el=h(()=>{"use strict";gh();He();yh();vh="browser"});function bh(t){for(let e of t)e.remove()}function _h(t,e){let n=e.createElement("style");return n.textContent=t,n}function bw(t,e,n,r){let o=t.head?.querySelectorAll(`style[${tl}="${e}"],link[${tl}="${e}"]`);if(o)for(let i of o)i.removeAttribute(tl),i instanceof HTMLLinkElement?r.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&n.set(i.textContent,{usage:0,elements:[i]})}function rl(t,e){let n=e.createElement("link");return n.setAttribute("rel","stylesheet"),n.setAttribute("href",t),n}function xw(t){return Ew.replace(sl,t)}function Dw(t){return _w.replace(sl,t)}function Ih(t,e){return e.map(n=>n.replace(sl,t))}function Eh(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var so,$i,Hi,ol,tl,il,nl,sl,wh,_w,Ew,ww,Iw,al,ao,Fi,co,ji,xh=h(()=>{"use strict";el();He();He();so=class{_doc;constructor(e){this._doc=e}manager},$i=(()=>{class t extends so{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,o,i){return n.addEventListener(r,o,i),()=>this.removeEventListener(n,r,o,i)}removeEventListener(n,r,o,i){return n.removeEventListener(r,o,i)}static \u0275fac=function(r){return new(r||t)(B(ze))};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})(),Hi=new j(""),ol=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(n,r){this._zone=r,n.forEach(s=>{s.manager=this});let o=n.filter(s=>!(s instanceof $i));this._plugins=o.slice().reverse();let i=n.find(s=>s instanceof $i);i&&this._plugins.push(i)}addEventListener(n,r,o,i){return this._findPluginFor(r).addEventListener(n,r,o,i)}getZone(){return this._zone}_findPluginFor(n){let r=this._eventNameToPlugin.get(n);if(r)return r;if(r=this._plugins.find(i=>i.supports(n)),!r)throw new R(5101,!1);return this._eventNameToPlugin.set(n,r),r}static \u0275fac=function(r){return new(r||t)(B(Hi),B(Te))};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})(),tl="ng-app-id";il=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(n,r,o,i={}){this.doc=n,this.appId=r,this.nonce=o,bw(n,r,this.inline,this.external),this.hosts.add(n.head)}addStyles(n,r){for(let o of n)this.addUsage(o,this.inline,_h);r?.forEach(o=>this.addUsage(o,this.external,rl))}removeStyles(n,r){for(let o of n)this.removeUsage(o,this.inline);r?.forEach(o=>this.removeUsage(o,this.external))}addUsage(n,r,o){let i=r.get(n);i?i.usage++:r.set(n,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,o(n,this.doc)))})}removeUsage(n,r){let o=r.get(n);o&&(o.usage--,o.usage<=0&&(bh(o.elements),r.delete(n)))}ngOnDestroy(){for(let[,{elements:n}]of[...this.inline,...this.external])bh(n);this.hosts.clear()}addHost(n){this.hosts.add(n);for(let[r,{elements:o}]of this.inline)o.push(this.addElement(n,_h(r,this.doc)));for(let[r,{elements:o}]of this.external)o.push(this.addElement(n,rl(r,this.doc)))}removeHost(n){this.hosts.delete(n)}addElement(n,r){return this.nonce&&r.setAttribute("nonce",this.nonce),n.appendChild(r)}static \u0275fac=function(r){return new(r||t)(B(ze),B(Si),B(Mi,8),B(Yr))};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})(),nl={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},sl=/%COMP%/g,wh="%COMP%",_w=`_nghost-${wh}`,Ew=`_ngcontent-${wh}`,ww=!0,Iw=new j("",{factory:()=>ww});al=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(n,r,o,i,s,a,c=null,l=null){this.eventManager=n,this.sharedStylesHost=r,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=s,this.ngZone=a,this.nonce=c,this.tracingService=l,this.defaultRenderer=new ao(n,s,a,this.tracingService)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;let o=this.getOrCreateRenderer(n,r);return o instanceof ji?o.applyToHost(n):o instanceof co&&o.applyStyles(),o}getOrCreateRenderer(n,r){let o=this.rendererByCompId,i=o.get(r.id);if(!i){let s=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.tracingService;switch(r.encapsulation){case Ye.Emulated:i=new ji(c,l,r,this.appId,u,s,a,d);break;case Ye.ShadowDom:return new Fi(c,n,r,s,a,this.nonce,d,l);case Ye.ExperimentalIsolatedShadowDom:return new Fi(c,n,r,s,a,this.nonce,d);default:i=new co(c,l,r,u,s,a,d);break}o.set(r.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(n){this.rendererByCompId.delete(n)}static \u0275fac=function(r){return new(r||t)(B(ol),B(il),B(Si),B(Iw),B(ze),B(Te),B(Mi),B(tr,8))};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})(),ao=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,n,r,o){this.eventManager=e,this.doc=n,this.ngZone=r,this.tracingService=o}destroy(){}destroyNode=null;createElement(e,n){return n?this.doc.createElementNS(nl[n]||n,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,n){(Eh(e)?e.content:e).appendChild(n)}insertBefore(e,n,r){e&&(Eh(e)?e.content:e).insertBefore(n,r)}removeChild(e,n){n.remove()}selectRootElement(e,n){let r=typeof e=="string"?this.doc.querySelector(e):e;if(!r)throw new R(-5104,!1);return n||(r.textContent=""),r}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,n,r,o){if(o){n=o+":"+n;let i=nl[o];i?e.setAttributeNS(i,n,r):e.setAttribute(n,r)}else e.setAttribute(n,r)}removeAttribute(e,n,r){if(r){let o=nl[r];o?e.removeAttributeNS(o,n):e.removeAttribute(`${r}:${n}`)}else e.removeAttribute(n)}addClass(e,n){e.classList.add(n)}removeClass(e,n){e.classList.remove(n)}setStyle(e,n,r,o){o&(xt.DashCase|xt.Important)?e.style.setProperty(n,r,o&xt.Important?"important":""):e.style[n]=r}removeStyle(e,n,r){r&xt.DashCase?e.style.removeProperty(n):e.style[n]=""}setProperty(e,n,r){e!=null&&(e[n]=r)}setValue(e,n){e.nodeValue=n}listen(e,n,r,o){if(typeof e=="string"&&(e=oo().getGlobalEventTarget(this.doc,e),!e))throw new R(5102,!1);let i=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(e,n,i)),this.eventManager.addEventListener(e,n,i,o)}decoratePreventDefault(e){return n=>{if(n==="__ngUnwrap__")return e;e(n)===!1&&n.preventDefault()}}};Fi=class extends ao{hostEl;sharedStylesHost;shadowRoot;constructor(e,n,r,o,i,s,a,c){super(e,o,i,a),this.hostEl=n,this.sharedStylesHost=c,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=r.styles;l=Ih(r.id,l);for(let d of l){let p=document.createElement("style");s&&p.setAttribute("nonce",s),p.textContent=d,this.shadowRoot.appendChild(p)}let u=r.getExternalStyles?.();if(u)for(let d of u){let p=rl(d,o);s&&p.setAttribute("nonce",s),this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,n){return super.appendChild(this.nodeOrShadowRoot(e),n)}insertBefore(e,n,r){return super.insertBefore(this.nodeOrShadowRoot(e),n,r)}removeChild(e,n){return super.removeChild(null,n)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},co=class extends ao{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,n,r,o,i,s,a,c){super(e,i,s,a),this.sharedStylesHost=n,this.removeStylesOnCompDestroy=o;let l=r.styles;this.styles=c?Ih(c,l):l,this.styleUrls=r.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Xn.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},ji=class extends co{contentAttr;hostAttr;constructor(e,n,r,o,i,s,a,c){let l=o+"-"+r.id;super(e,n,r,i,s,a,c,l),this.contentAttr=xw(l),this.hostAttr=Dw(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,n){let r=super.createElement(e,n);return super.setAttribute(r,this.contentAttr,""),r}}});function Cw(){return lo=lo||document.head.querySelector("base"),lo?lo.getAttribute("href"):null}function Sw(t){return new URL(t,document.baseURI).pathname}async function cl(t,e,n){let r=b({rootComponent:t},kw(e,n));return hh(r)}function kw(t,e){return{platformRef:e?.platformRef,appProviders:[...Lw,...t?.providers??[]],platformProviders:Pw}}function Aw(){Ui.makeCurrent()}function Rw(){return new yt}function Ow(){return Oc(document),document}var Ui,lo,Tw,Dh,Mw,Nw,Ch,Pw,Lw,Sh=h(()=>{"use strict";el();He();He();xh();Ui=class t extends ro{supportsDOMEvents=!0;static makeCurrent(){Jc(new t)}onAndCancel(e,n,r,o){return e.addEventListener(n,r,o),()=>{e.removeEventListener(n,r,o)}}dispatchEvent(e,n){e.dispatchEvent(n)}remove(e){e.remove()}createElement(e,n){return n=n||this.getDefaultDocument(),n.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,n){return n==="window"?window:n==="document"?e:n==="body"?e.body:null}getBaseHref(e){let n=Cw();return n==null?null:Sw(n)}resetBaseElement(){lo=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Xc(document.cookie,e)}},lo=null;Tw=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(r){return new(r||t)};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})(),Dh=["alt","control","meta","shift"],Mw={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Nw={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},Ch=(()=>{class t extends so{constructor(n){super(n)}supports(n){return t.parseEventName(n)!=null}addEventListener(n,r,o,i){let s=t.parseEventName(r),a=t.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>oo().onAndCancel(n,s.domEventName,a,i))}static parseEventName(n){let r=n.toLowerCase().split("."),o=r.shift();if(r.length===0||!(o==="keydown"||o==="keyup"))return null;let i=t._normalizeKey(r.pop()),s="",a=r.indexOf("code");if(a>-1&&(r.splice(a,1),s="code."),Dh.forEach(l=>{let u=r.indexOf(l);u>-1&&(r.splice(u,1),s+=l+".")}),s+=i,r.length!=0||i.length===0)return null;let c={};return c.domEventName=o,c.fullKey=s,c}static matchEventFullKeyCode(n,r){let o=Mw[n.key]||n.key,i="";return r.indexOf("code.")>-1&&(o=n.code,i="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),Dh.forEach(s=>{if(s!==o){let a=Nw[s];a(n)&&(i+=s+".")}}),i+=o,i===r)}static eventCallback(n,r,o){return i=>{t.matchEventFullKeyCode(i,n)&&o.runGuarded(()=>r(i))}}static _normalizeKey(n){return n==="esc"?"escape":n}static \u0275fac=function(r){return new(r||t)(B(ze))};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})();Pw=[{provide:Yr,useValue:vh},{provide:Ti,useValue:Aw,multi:!0},{provide:ze,useFactory:Ow}],Lw=[{provide:Rr,useValue:"root"},{provide:yt,useFactory:Rw},{provide:Hi,useClass:$i,multi:!0},{provide:Hi,useClass:Ch,multi:!0},al,il,ol,{provide:dn,useExisting:al},{provide:io,useClass:Tw},[]]});var Th=h(()=>{"use strict";Sh();});var Bi,qi,ll,Mh,uo,Nh,U,kh,ul,dl=h(()=>{"use strict";Bi=globalThis,qi=Bi.ShadowRoot&&(Bi.ShadyCSS===void 0||Bi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ll=Symbol(),Mh=new WeakMap,uo=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==ll)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o,n=this.t;if(qi&&e===void 0){let r=n!==void 0&&n.length===1;r&&(e=Mh.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Mh.set(n,e))}return e}toString(){return this.cssText}},Nh=t=>new uo(typeof t=="string"?t:t+"",void 0,ll),U=(t,...e)=>{let n=t.length===1?t[0]:e.reduce((r,o,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1],t[0]);return new uo(n,t,ll)},kh=(t,e)=>{if(qi)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(let n of e){let r=document.createElement("style"),o=Bi.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,t.appendChild(r)}},ul=qi?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(let r of e.cssRules)n+=r.cssText;return Nh(n)})(t):t});var Vw,$w,Fw,jw,Hw,Uw,zi,Ah,Bw,qw,fo,po,Wi,Rh,Dt,ho=h(()=>{"use strict";dl();dl();({is:Vw,defineProperty:$w,getOwnPropertyDescriptor:Fw,getOwnPropertyNames:jw,getOwnPropertySymbols:Hw,getPrototypeOf:Uw}=Object),zi=globalThis,Ah=zi.trustedTypes,Bw=Ah?Ah.emptyScript:"",qw=zi.reactiveElementPolyfillSupport,fo=(t,e)=>t,po={toAttribute(t,e){switch(e){case Boolean:t=t?Bw:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Wi=(t,e)=>!Vw(t,e),Rh={attribute:!0,type:String,converter:po,reflect:!1,useDefault:!1,hasChanged:Wi};Symbol.metadata??=Symbol("metadata"),zi.litPropertyMetadata??=new WeakMap;Dt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=Rh){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){let r=Symbol(),o=this.getPropertyDescriptor(e,r,n);o!==void 0&&$w(this.prototype,e,o)}}static getPropertyDescriptor(e,n,r){let{get:o,set:i}=Fw(this.prototype,e)??{get(){return this[n]},set(s){this[n]=s}};return{get:o,set(s){let a=o?.call(this);i?.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Rh}static _$Ei(){if(this.hasOwnProperty(fo("elementProperties")))return;let e=Uw(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(fo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(fo("properties"))){let n=this.properties,r=[...jw(n),...Hw(n)];for(let o of r)this.createProperty(o,n[o])}let e=this[Symbol.metadata];if(e!==null){let n=litPropertyMetadata.get(e);if(n!==void 0)for(let[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(let[n,r]of this.elementProperties){let o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let n=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let o of r)n.unshift(ul(o))}else e!==void 0&&n.push(ul(e));return n}static _$Eu(e,n){let r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,n=this.constructor.elementProperties;for(let r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return kh(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$ET(e,n){let r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){let i=(r.converter?.toAttribute!==void 0?r.converter:po).toAttribute(n,r.type);this._$Em=e,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,n){let r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let i=r.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:po;this._$Em=o;let a=s.fromAttribute(n,i.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,n,r,o=!1,i){if(e!==void 0){let s=this.constructor;if(o===!1&&(i=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??Wi)(i,n)||r.useDefault&&r.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,n,{useDefault:r,reflect:o,wrapped:i},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??n??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(n=void 0),this._$AL.set(e,n)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[o,i]of r){let{wrapped:s}=i,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let e=!1,n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(n)}willUpdate(e){}_$AE(e){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(e){}firstUpdated(e){}};Dt.elementStyles=[],Dt.shadowRootOptions={mode:"open"},Dt[fo("elementProperties")]=new Map,Dt[fo("finalized")]=new Map,qw?.({ReactiveElement:Dt}),(zi.reactiveElementVersions??=[]).push("2.1.2")});function Bh(t,e){if(!gl(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ph!==void 0?Ph.createHTML(e):e}function yn(t,e,n=t,r){if(e===ke)return e;let o=r!==void 0?n._$Co?.[r]:n._$Cl,i=yo(e)?void 0:e._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(t),o._$AT(t,n,r)),r!==void 0?(n._$Co??=[])[r]=o:n._$Cl=o),o!==void 0&&(e=yn(t,o._$AS(t,e.values),o,r)),e}var pl,Oh,Gi,Ph,hl,Ct,ml,zw,gn,go,yo,gl,Hh,fl,mo,Lh,Vh,hn,$h,Fh,Uh,yl,x,Xe,zP,ke,Y,jh,mn,qh,vo,Ki,nr,vn,Qi,Zi,Yi,Ji,zh,Ww,Wh,bn=h(()=>{"use strict";pl=globalThis,Oh=t=>t,Gi=pl.trustedTypes,Ph=Gi?Gi.createPolicy("lit-html",{createHTML:t=>t}):void 0,hl="$lit$",Ct=`lit$${Math.random().toFixed(9).slice(2)}$`,ml="?"+Ct,zw=`<${ml}>`,gn=document,go=()=>gn.createComment(""),yo=t=>t===null||typeof t!="object"&&typeof t!="function",gl=Array.isArray,Hh=t=>gl(t)||typeof t?.[Symbol.iterator]=="function",fl=`[ 	
\f\r]`,mo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Lh=/-->/g,Vh=/>/g,hn=RegExp(`>|${fl}(?:([^\\s"'>=/]+)(${fl}*=${fl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$h=/'/g,Fh=/"/g,Uh=/^(?:script|style|textarea|title)$/i,yl=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),x=yl(1),Xe=yl(2),zP=yl(3),ke=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),jh=new WeakMap,mn=gn.createTreeWalker(gn,129);qh=(t,e)=>{let n=t.length-1,r=[],o,i=e===2?"<svg>":e===3?"<math>":"",s=mo;for(let a=0;a<n;a++){let c=t[a],l,u,d=-1,p=0;for(;p<c.length&&(s.lastIndex=p,u=s.exec(c),u!==null);)p=s.lastIndex,s===mo?u[1]==="!--"?s=Lh:u[1]!==void 0?s=Vh:u[2]!==void 0?(Uh.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=hn):u[3]!==void 0&&(s=hn):s===hn?u[0]===">"?(s=o??mo,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,l=u[1],s=u[3]===void 0?hn:u[3]==='"'?Fh:$h):s===Fh||s===$h?s=hn:s===Lh||s===Vh?s=mo:(s=hn,o=void 0);let f=s===hn&&t[a+1].startsWith("/>")?" ":"";i+=s===mo?c+zw:d>=0?(r.push(l),c.slice(0,d)+hl+c.slice(d)+Ct+f):c+Ct+(d===-2?a:f)}return[Bh(t,i+(t[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},vo=class t{constructor({strings:e,_$litType$:n},r){let o;this.parts=[];let i=0,s=0,a=e.length-1,c=this.parts,[l,u]=qh(e,n);if(this.el=t.createElement(l,r),mn.currentNode=this.el.content,n===2||n===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=mn.nextNode())!==null&&c.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let d of o.getAttributeNames())if(d.endsWith(hl)){let p=u[s++],f=o.getAttribute(d).split(Ct),m=/([.?@])?(.*)/.exec(p);c.push({type:1,index:i,name:m[2],strings:f,ctor:m[1]==="."?Qi:m[1]==="?"?Zi:m[1]==="@"?Yi:vn}),o.removeAttribute(d)}else d.startsWith(Ct)&&(c.push({type:6,index:i}),o.removeAttribute(d));if(Uh.test(o.tagName)){let d=o.textContent.split(Ct),p=d.length-1;if(p>0){o.textContent=Gi?Gi.emptyScript:"";for(let f=0;f<p;f++)o.append(d[f],go()),mn.nextNode(),c.push({type:2,index:++i});o.append(d[p],go())}}}else if(o.nodeType===8)if(o.data===ml)c.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(Ct,d+1))!==-1;)c.push({type:7,index:i}),d+=Ct.length-1}i++}}static createElement(e,n){let r=gn.createElement("template");return r.innerHTML=e,r}};Ki=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:n},parts:r}=this._$AD,o=(e?.creationScope??gn).importNode(n,!0);mn.currentNode=o;let i=mn.nextNode(),s=0,a=0,c=r[0];for(;c!==void 0;){if(s===c.index){let l;c.type===2?l=new nr(i,i.nextSibling,this,e):c.type===1?l=new c.ctor(i,c.name,c.strings,this,e):c.type===6&&(l=new Ji(i,this,e)),this._$AV.push(l),c=r[++a]}s!==c?.index&&(i=mn.nextNode(),s++)}return mn.currentNode=gn,o}p(e){let n=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},nr=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,n,r,o){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=yn(this,e,n),yo(e)?e===Y||e==null||e===""?(this._$AH!==Y&&this._$AR(),this._$AH=Y):e!==this._$AH&&e!==ke&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Hh(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Y&&yo(this._$AH)?this._$AA.nextSibling.data=e:this.T(gn.createTextNode(e)),this._$AH=e}$(e){let{values:n,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=vo.createElement(Bh(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(n);else{let i=new Ki(o,this),s=i.u(this.options);i.p(n),this.T(s),this._$AH=i}}_$AC(e){let n=jh.get(e.strings);return n===void 0&&jh.set(e.strings,n=new vo(e)),n}k(e){gl(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,o=0;for(let i of e)o===n.length?n.push(r=new t(this.O(go()),this.O(go()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);e!==this._$AB;){let r=Oh(e).nextSibling;Oh(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},vn=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,o,i){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Y}_$AI(e,n=this,r,o){let i=this.strings,s=!1;if(i===void 0)e=yn(this,e,n,0),s=!yo(e)||e!==this._$AH&&e!==ke,s&&(this._$AH=e);else{let a=e,c,l;for(e=i[0],c=0;c<i.length-1;c++)l=yn(this,a[r+c],n,c),l===ke&&(l=this._$AH[c]),s||=!yo(l)||l!==this._$AH[c],l===Y?e=Y:e!==Y&&(e+=(l??"")+i[c+1]),this._$AH[c]=l}s&&!o&&this.j(e)}j(e){e===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Qi=class extends vn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Y?void 0:e}},Zi=class extends vn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Y)}},Yi=class extends vn{constructor(e,n,r,o,i){super(e,n,r,o,i),this.type=5}_$AI(e,n=this){if((e=yn(this,e,n,0)??Y)===ke)return;let r=this._$AH,o=e===Y&&r!==Y||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==Y&&(r===Y||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ji=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){yn(this,e)}},zh={M:hl,P:Ct,A:ml,C:1,L:qh,R:Ki,D:Hh,V:yn,I:nr,H:vn,N:Zi,U:Yi,B:Qi,F:Ji},Ww=pl.litHtmlPolyfillSupport;Ww?.(vo,nr),(pl.litHtmlVersions??=[]).push("3.3.3");Wh=(t,e,n)=>{let r=n?.renderBefore??e,o=r._$litPart$;if(o===void 0){let i=n?.renderBefore??null;r._$litPart$=o=new nr(e.insertBefore(go(),i),i,void 0,n??{})}return o._$AI(t),o}});var vl,ct,Gw,Gh=h(()=>{"use strict";ho();ho();bn();bn();vl=globalThis,ct=class extends Dt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Wh(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ke}};ct._$litElement$=!0,ct.finalized=!0,vl.litElementHydrateSupport?.({LitElement:ct});Gw=vl.litElementPolyfillSupport;Gw?.({LitElement:ct});(vl.litElementVersions??=[]).push("4.2.2")});var Kh=h(()=>{"use strict";});var $=h(()=>{"use strict";ho();bn();Gh();Kh()});var Qh=h(()=>{"use strict";});function y(t){return(e,n)=>typeof n=="object"?Qw(t,e,n):((r,o,i)=>{let s=o.hasOwnProperty(i);return o.constructor.createProperty(i,r),s?Object.getOwnPropertyDescriptor(o,i):void 0})(t,e,n)}var Kw,Qw,bl=h(()=>{"use strict";ho();Kw={attribute:!0,type:String,converter:po,reflect:!1,hasChanged:Wi},Qw=(t=Kw,e,n)=>{let{kind:r,metadata:o}=n,i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),r==="setter"&&((t=Object.create(t)).wrapped=!0),i.set(n.name,t),r==="accessor"){let{name:s}=n;return{set(a){let c=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,c,t,!0,a)},init(a){return a!==void 0&&this.C(s,void 0,t,a),a}}}if(r==="setter"){let{name:s}=n;return function(a){let c=this[s];e.call(this,a),this.requestUpdate(s,c,t,!0,a)}}throw Error("Unsupported decorator location: "+r)}});function rr(t){return y(A(b({},t),{state:!0,attribute:!1}))}var Zh=h(()=>{"use strict";bl();});var Yh=h(()=>{"use strict";});var _n,or=h(()=>{"use strict";_n=(t,e,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,n),n)});function St(t,e){return(n,r,o)=>{let i=s=>s.renderRoot?.querySelector(t)??null;if(e){let{get:s,set:a}=typeof r=="object"?n:o??(()=>{let c=Symbol();return{get(){return this[c]},set(l){this[c]=l}}})();return _n(n,r,{get(){let c=s.call(this);return c===void 0&&(c=i(this),(c!==null||this.hasUpdated)&&a.call(this,c)),c}})}return _n(n,r,{get(){return i(this)}})}}var Jh=h(()=>{"use strict";or();});var Xh=h(()=>{"use strict";or();});var em=h(()=>{"use strict";or();});var tm=h(()=>{"use strict";or();});var nm=h(()=>{"use strict";or();});var Ae=h(()=>{"use strict";Qh();bl();Zh();Yh();Jh();Xh();em();tm();nm()});var ir,sr,Ut,Xi=h(()=>{"use strict";ir={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},sr=t=>(...e)=>({_$litDirective$:t,values:e}),Ut=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}}});var Zw,rm,om,ar,Bt,Yw,im,sm,es,am=h(()=>{"use strict";bn();({I:Zw}=zh),rm=t=>t,om=()=>document.createComment(""),ar=(t,e,n)=>{let r=t._$AA.parentNode,o=e===void 0?t._$AB:e._$AA;if(n===void 0){let i=r.insertBefore(om(),o),s=r.insertBefore(om(),o);n=new Zw(i,s,t,t.options)}else{let i=n._$AB.nextSibling,s=n._$AM,a=s!==t;if(a){let c;n._$AQ?.(t),n._$AM=t,n._$AP!==void 0&&(c=t._$AU)!==s._$AU&&n._$AP(c)}if(i!==o||a){let c=n._$AA;for(;c!==i;){let l=rm(c).nextSibling;rm(r).insertBefore(c,o),c=l}}}return n},Bt=(t,e,n=t)=>(t._$AI(e,n),t),Yw={},im=(t,e=Yw)=>t._$AH=e,sm=t=>t._$AH,es=t=>{t._$AR(),t._$AA.remove()}});var cm,re,lm=h(()=>{"use strict";bn();Xi();am();cm=(t,e,n)=>{let r=new Map;for(let o=e;o<=n;o++)r.set(t[o],o);return r},re=sr(class extends Ut{constructor(t){if(super(t),t.type!==ir.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let r;n===void 0?n=e:e!==void 0&&(r=e);let o=[],i=[],s=0;for(let a of t)o[s]=r?r(a,s):s,i[s]=n(a,s),s++;return{values:i,keys:o}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,r]){let o=sm(t),{values:i,keys:s}=this.dt(e,n,r);if(!Array.isArray(o))return this.ut=s,i;let a=this.ut??=[],c=[],l,u,d=0,p=o.length-1,f=0,m=i.length-1;for(;d<=p&&f<=m;)if(o[d]===null)d++;else if(o[p]===null)p--;else if(a[d]===s[f])c[f]=Bt(o[d],i[f]),d++,f++;else if(a[p]===s[m])c[m]=Bt(o[p],i[m]),p--,m--;else if(a[d]===s[m])c[m]=Bt(o[d],i[m]),ar(t,c[m+1],o[d]),d++,m--;else if(a[p]===s[f])c[f]=Bt(o[p],i[f]),ar(t,o[d],o[p]),p--,f++;else if(l===void 0&&(l=cm(s,f,m),u=cm(a,d,p)),l.has(a[d]))if(l.has(a[p])){let E=u.get(s[f]),v=E!==void 0?o[E]:null;if(v===null){let N=ar(t,o[d]);Bt(N,i[f]),c[f]=N}else c[f]=Bt(v,i[f]),ar(t,o[d],v),o[E]=null;f++}else es(o[p]),p--;else es(o[d]),d++;for(;f<=m;){let E=ar(t,c[m+1]);Bt(E,i[f]),c[f++]=E}for(;d<=p;){let E=o[d++];E!==null&&es(E)}return this.ut=s,im(t,c),ke}})});var et=h(()=>{"use strict";lm()});var um,dm=h(()=>{"use strict";$();um=U`:host {
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
}`});var ts,le,bo,fm,lt=h(()=>{"use strict";ts=Object.freeze({ink:"#1d2523",inkSoft:"#38413d",muted:"#68716d",line:"#d9d5ca",surface:"#fffdfa",surfaceAlt:"#fbfaf6",surfaceStrong:"#f0eee8",track:"#e8e3d8",allowed:"#b9cfc6",accent:"#426a8c",accentStrong:"#274c43",accentSoft:"#dce8e2",preview:"#d9824b",ok:"#4f8f5b",danger:"#9b3b37",warning:"#d9824b",reach:"#68716d"}),le=Object.freeze(["#426a8c","#d9824b","#6f8d42","#8b5f9d","#9d9a5a","#c48a70"]),bo=String.fromCodePoint(128274),fm=String.fromCodePoint(128275)});var ee,pm=h(()=>{"use strict";$();ee=U`:host {
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
}`});function Jw(t){return String(t??"").replace(/[<>"'&;]/g,"")}function En(t,e={},n={}){for(let r of Object.keys(n)){if(r in e)continue;let o=r.replace(/[A-Z]/g,i=>`-${i.toLowerCase()}`);t.style.removeProperty(`--vector-${o}`)}for(let[r,o]of Object.entries(e??{})){let i=r.replace(/[A-Z]/g,s=>`-${s.toLowerCase()}`);t.style.setProperty(`--vector-${i}`,Jw(o))}}var ve=h(()=>{"use strict";lt();pm()});function pe(t,e){globalThis.customElements&&!customElements.get(t)&&customElements.define(t,e)}var K,be=h(()=>{"use strict";$();ve();K=class extends ct{constructor(){super(...arguments);this._theme={}}get theme(){return this._theme}set theme(n){let r=this._theme;this._theme=n??{},this.isConnected&&En(this,this._theme,r)}connectedCallback(){super.connectedCallback(),En(this,this._theme)}}});function k(t="tx"){return`${t}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function D(t,e=4){let n=10**e;return Math.round((Number(t??0)+Number.EPSILON)*n)/n}function fe(t,e=.1){let n=Number(e??.1);return D(Math.round(t/n)*n,Xw(n))}function W(t,e=-1/0,n=1/0){return Math.min(n,Math.max(e,Number(t??0)))}function J(t){return t.replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Xw(t){let e=String(t);return e.includes(".")?e.split(".")[1].length:0}var _l=h(()=>{"use strict"});function M(t,e,n){t.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:n}))}var hm=h(()=>{"use strict"});function ce(t={}){return Object.fromEntries(Object.entries(t).map(([e,n])=>[e,Number(n??0)]))}function oI(t=[],e={}){let n=[...t].sort((r,o)=>Number(r.order??0)-Number(o.order??0)).map(r=>r.key);return[...new Set([...n,...Object.keys(e)])]}function cr(t={}){return Object.values(t).reduce((e,n)=>e+Number(n??0),0)}function rs(t={}){return Number.isFinite(Number(t.min))?Number(t.min):0}function os(t={}){return Number.isFinite(Number(t.max))?Number(t.max):wn}function _e(t,e,n,r="hard"){return{key:t,type:e,severity:r,message:n}}function iI(t={},e=wn,n=Object.keys(t)){let r={},o=cr(t),i=n.length?Number(e??wn)/n.length:0;for(let s of n)r[s]=o>0?Number(t[s]??0)*Number(e??wn)/o:i;return El(r,{},e,n[0])}function is({value:t={},key:e,target:n,constraints:r={},items:o=[],total:i=wn}){let s=oI(o,t).filter(w=>w in t||w===e),a=[],c=iI(t,i,s),l=ce(c),u=r[e]||{};if(!e||!(e in l))return{vector:El(l,r,i,e),hits:[_e(e||"composition","sum","No active slice was available.")],delta:0};if(u.locked)return{vector:l,hits:[_e(e,"locked",`${J(e)} is locked.`)],delta:0};let d=Number(n),p=rs(u),f=os(u),m=W(d,p,f);m!==d&&a.push(_e(e,m<=p?"min":"max",`${J(e)} hit ${m<=p?"minimum":"maximum"} ${D(m,2)}%.`)),m=fe(m,u.step??vm);let E=m-l[e];l[e]=m;let v=-E,N=new Set([e]),P=0;for(;Em(v)&&P<cI(s);){P+=1;let w=s.filter(I=>{if(N.has(I))return!1;let se=r[I]||{};return se.locked?(a.push(_e(I,"locked",`${J(I)} is locked.`)),N.add(I),!1):v<0?dI(l[I],se):fI(l[I],se)});if(!w.length){ym(l,e,v),a.push(_e(e,"unreachable",`${J(e)} was clamped because the remaining oils cannot absorb the change.`)),v=0;break}let X=w.reduce((I,se)=>I+gm(l[se]),0),G=!1;for(let I of w){let se=r[I]||{},At=gm(l[I])/X,ge=v*At,Ie=rs(se),Se=os(se),_=ge;ge<0&&l[I]+ge<Ie?(_=Ie-l[I],l[I]=Ie,N.add(I),a.push(_e(I,"min",`${J(I)} hit minimum ${D(Ie,2)}%.`))):ge>0&&l[I]+ge>Se?(_=Se-l[I],l[I]=Se,N.add(I),a.push(_e(I,"max",`${J(I)} hit maximum ${D(Se,2)}%.`))):l[I]+=_,v=pI(v-_),G=G||uI(_)}if(!G){ym(l,e,v),a.push(_e(e,"unreachable","No remaining oil can legally move.")),v=0;break}}return{vector:El(sI(l,r),r,i,e),hits:aI(a),delta:D(m-c[e],4)}}function sI(t={},e={}){return Object.fromEntries(Object.entries(t).map(([n,r])=>[n,fe(r,e[n]?.step??vm)]))}function El(t={},e={},n=wn,r=null){let o=ce(t),i=Object.keys(o),s=ns(Number(n??wn)-cr(o)),a=0;for(;Em(s)&&a<rI;){a+=1;let c=[r,...i.filter(u=>u!==r)].filter(u=>!!u),l=!1;for(let u of c){let d=e[u]||{};if(d.locked)continue;let p=rs(d),f=os(d),m=s>0?f-o[u]:o[u]-p;if(!lI(m))continue;let E=Math.sign(s)*Math.min(Math.abs(s),m);o[u]=ns(o[u]+E),s=ns(s-E),l=!0;break}if(!l)break}return o}function _m(t={},e={}){return[...new Set([...Object.keys(t),...Object.keys(e)])].reduce((r,o)=>r+Math.abs(Number(t[o]??0)-Number(e[o]??0)),0)}function aI(t=[]){let e=new Set;return t.filter(n=>{let r=`${n.key}:${n.type}:${n.message}`;return e.has(r)?!1:(e.add(r),!0)})}function cI(t){return t.length+nI}function Em(t){return Math.abs(Number(t??0))>wl}function lI(t){return Number(t??0)>bm}function uI(t){return Math.abs(Number(t??0))>bm}function dI(t,e){return Number(t??0)>rs(e)+wl}function fI(t,e){return Number(t??0)<os(e)-wl}function gm(t){return Math.max(mm,Number(t??mm))}function ns(t){return D(t,eI)}function pI(t){return D(t,tI)}function ym(t,e,n){t[e]=ns(Number(t[e]??0)+Number(n??0))}var wn,vm,eI,tI,wl,bm,mm,nI,rI,he=h(()=>{"use strict";_l();hm();_l();wn=100,vm=.1,eI=4,tI=7,wl=1e-7,bm=1e-9,mm=1e-4,nI=8,rI=100});var _o,Il=h(()=>{"use strict";$();Ae();et();dm();be();he();ve();_o=class extends K{static{this.styles=[ee,um]}#e;get hits(){return this.#e}set hits(e){this.#e=e}constructor(){super(),this.hits=[],this.theme={}}render(){return x`
      <div class="feedback">
        ${this.hits.length?re(this.hits,e=>`${e.key}:${e.type}:${e.message}`,e=>x`
                <button
                  class=${e.severity||"hard"}
                  data-key=${e.key}
                  @click=${()=>this._selectHit(e.key)}
                >
                  ${e.message}
                </button>
              `):x`<span class="quiet">No active constraints.</span>`}
      </div>
    `}_selectHit(e){M(this,"vector-select",{source:"constraint",role:"selection",transactionId:k("feedback"),key:e})}};g([y({attribute:!1})],_o.prototype,"hits",1)});var F,wm=h(()=>{"use strict";bn();Xi();F=sr(class extends Ut{constructor(t){if(super(t),t.type!==ir.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(let r in e)e[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(e)}let n=t.element.classList;for(let r of this.st)r in e||(n.remove(r),this.st.delete(r));for(let r in e){let o=!!e[r];o===this.st.has(r)||this.nt?.has(r)||(o?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return ke}})});var We=h(()=>{"use strict";wm()});var Im=h(()=>{"use strict";Xi()});var xl,ie,Tt=h(()=>{"use strict";$();Im();xl=class extends Ut{constructor(n){super(n);this.previousNames=new Set;if(n.type!==ir.ELEMENT)throw new Error("styleVariables must be used as an element directive")}render(n){return ke}update(n,[r]){let o=n.element,i=new Set(Object.keys(r));for(let s of this.previousNames)i.has(s)||o.style.removeProperty(s);for(let[s,a]of Object.entries(r))a===null?o.style.removeProperty(s):o.style.setProperty(s,a);return this.previousNames=i,ke}},ie=sr(xl)});var xm,Dm=h(()=>{"use strict";$();xm=U`:host {
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
}`});function Dl(t,e=le){let n=Eo(e);return n[t%n.length]}function Ue(t,e=0,n=le){return t?.color??Dl(e,n)}function Cm(t,e=[]){return e.find(n=>Number(t)>=Number(n.min)&&Number(t)<=Number(n.max))||null}function Eo(t){return Array.isArray(t)&&t.length?t:le}function lr(t=1){let e=Number(t??1);if(!Number.isFinite(e)||e>=1)return 0;let n=String(e);return n.includes("e-")?Number(n.split("e-")[1]||0):n.includes(".")?n.split(".")[1].length:0}function Ee(t,e=0){let n=Math.max(0,Number(e??0));return n>0?Number(t||0).toFixed(n):String(D(t,0))}function Cl(t,e=""){return String(t?.symbol??e??"").trim()||t?.label||""}var Mt=h(()=>{"use strict";lt();he()});var Sm,Tm,Mm,Nm,km,Am,Rm,Om,we,wo=h(()=>{"use strict";$();Ae();We();et();Tt();Dm();be();lt();Mt();he();ve();we=class extends K{constructor(){super();S(this,Sm);S(this,Tm);S(this,Mm);S(this,Nm);S(this,km);S(this,Am);S(this,Rm);S(this,Om);this._queryChanged=n=>{this.query=n.currentTarget.value};this.items=[],this.selectedKeys=[],this.query="",this.activeTags=[],this.itemTypes=[],this.listType="item",this.searchPlaceholder="Search items",this.theme={},this.palette=le}static{this.styles=[ee,xm]}get items(){return C(this,Sm)}set items(n){T(this,Sm,n)}get selectedKeys(){return C(this,Tm)}set selectedKeys(n){T(this,Tm,n)}get query(){return C(this,Mm)}set query(n){T(this,Mm,n)}get activeTags(){return C(this,Nm)}set activeTags(n){T(this,Nm,n)}get itemTypes(){return C(this,km)}set itemTypes(n){T(this,km,n)}get listType(){return C(this,Am)}set listType(n){T(this,Am,n)}get searchPlaceholder(){return C(this,Rm)}set searchPlaceholder(n){T(this,Rm,n)}get palette(){return C(this,Om)}set palette(n){T(this,Om,n)}set state(n){this.items=n?.items??[],this.selectedKeys=n?.selectedKeys??[],this.query=n?.query??"",this.activeTags=n?.activeTags??[],this.itemTypes=n?.itemTypes??[],this.listType=n?.listType??"item",this.searchPlaceholder=n?.searchPlaceholder??"Search items",this.theme=n?.theme??{},this.palette=n?.palette??le}render(){let n=new Set(this.selectedKeys),r=this.query.toLowerCase(),o=this.items.filter(i=>{let s=!r||i.label.toLowerCase().includes(r)||i.key.toLowerCase().includes(r),a=!this.activeTags.length||this.activeTags.every(u=>i.tags?.includes(u)),c=i.type||i.category||"",l=!this.itemTypes.length||this.itemTypes.includes(c);return s&&a&&l});return x`
      <div class="search-list">
        <input
          class="search"
          type="search"
          placeholder=${this.searchPlaceholder}
          .value=${this.query}
          @input=${this._queryChanged}
        />
        <div class="items">
          ${re(o,i=>i.key,(i,s)=>x`
              <button
                class=${F({"oil-row":!0,selected:n.has(i.key)})}
                data-key=${i.key}
                @click=${()=>this._toggle(i.key)}
              >
                <span
                  class="swatch"
                  ${ie({"--item-color":Ue(i,s,this.palette)})}
                ></span>
                <span
                  ><span class="item-label">${i.label}</span
                  >${i.category||i.type?x`<small>${i.category||i.type}</small>`:Y}</span
                >
                <strong>${n.has(i.key)?"Remove":"Add"}</strong>
              </button>
            `)}
        </div>
      </div>
    `}_toggle(n){let r=new Set(this.selectedKeys),o=r.has(n)?"remove":"add";r.has(n)?r.delete(n):r.add(n),M(this,"vector-change",{source:"list",role:"selection",transactionId:k("list"),key:n,selection:[...r],action:o,listType:this.listType,itemType:this.items.find(i=>i.key===n)?.type??this.items.find(i=>i.key===n)?.category})}};Sm=new WeakMap,Tm=new WeakMap,Mm=new WeakMap,Nm=new WeakMap,km=new WeakMap,Am=new WeakMap,Rm=new WeakMap,Om=new WeakMap,g([y({attribute:!1})],we.prototype,"items",1),g([y({attribute:!1})],we.prototype,"selectedKeys",1),g([y({attribute:!1})],we.prototype,"query",1),g([y({attribute:!1})],we.prototype,"activeTags",1),g([y({attribute:!1})],we.prototype,"itemTypes",1),g([y({attribute:!1})],we.prototype,"listType",1),g([y({attribute:!1})],we.prototype,"searchPlaceholder",1),g([y({attribute:!1})],we.prototype,"palette",1)});var ss,Sl=h(()=>{"use strict";wo();ss=class extends we{constructor(){super(),this._listType="oil",this._searchPlaceholder="Search oils"}}});var Pm,Lm=h(()=>{"use strict";$();Pm=U`:host {
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
}`});var ue,Tl=h(()=>{"use strict";$();Ae();et();Lm();be();lt();ve();ue=class extends K{static{this.styles=[ee,Pm]}#e;get items(){return this.#e}set items(e){this.#e=e}#t;get values(){return this.#t}set values(e){this.#t=e}#n;get constraints(){return this.#n}set constraints(e){this.#n=e}#r;get thresholds(){return this.#r}set thresholds(e){this.#r=e}#o;get unitPreferences(){return this.#o}set unitPreferences(e){this.#o=e}#i;get measurementSystem(){return this.#i}set measurementSystem(e){this.#i=e}#s;get basis(){return this.#s}set basis(e){this.#s=e}#a;get measurementScope(){return this.#a}set measurementScope(e){this.#a=e}#c;get measurementMeasure(){return this.#c}set measurementMeasure(e){this.#c=e}#l;get context(){return this.#l}set context(e){this.#l=e}#u;get role(){return this.#u}set role(e){this.#u=e}#d;get control(){return this.#d}set control(e){this.#d=e}#f;get unitDisplay(){return this.#f}set unitDisplay(e){this.#f=e}#p;get activeEmphasis(){return this.#p}set activeEmphasis(e){this.#p=e}#h;get palette(){return this.#h}set palette(e){this.#h=e}constructor(){super(),this.items=[],this.values={},this.constraints={},this.thresholds={},this.unitPreferences={},this.measurementSystem="",this.basis="",this.measurementScope="",this.measurementMeasure="",this.context=null,this.role="additive",this.control="slider",this.unitDisplay="picker",this.activeEmphasis=!0,this.theme={},this.palette=le}set state(e){let n=e??{};this.items=n.items??[],this.values=n.values??{},this.constraints=n.constraints??{},this.thresholds=n.thresholds??{},this.unitPreferences=n.unitPreferences??{},this.measurementSystem=n.measurementSystem??"",this.basis=n.basis??"",this.measurementScope=n.measurementScope??"",this.measurementMeasure=n.measurementMeasure??"",this.context=n.context??null,this.role=n.role??"additive",this.control=n.control??"slider",this.unitDisplay=n.unitDisplay??"picker",this.activeEmphasis=n.activeEmphasis!==!1,this.theme=n.theme??{},this.palette=n.palette??le}render(){return x`
      <div class="amount-list">
        ${this.items.length?re(this.items,e=>e.key,e=>{let n={item:e,value:this.values[e.key]??e.defaultValue??0,defaultValue:e.defaultValue,constraint:this.constraints[e.key]??{},hits:[],thresholds:this.thresholds[e.key]??e.thresholds??[],unitOptions:e.unitOptions??[],unitKey:this._unitKeyForItem(e),measurementSystem:this.measurementSystem,basis:this.basis,measurementScope:this.measurementScope,measurementMeasure:this.measurementMeasure,context:A(b({},this.context??{}),{density:this.context?.densities?.[e.material||e.key]??this.context?.density}),role:this.role,rangeMin:e.min??0,rangeMax:e.max??100,precision:e.precision,theme:this.theme,palette:this.palette,variant:"embedded",unitDisplay:this.unitDisplay,activeEmphasis:this.activeEmphasis};return this._renderControl(n)}):x`<div class="quiet">No selected amounts.</div>`}
      </div>
    `}_renderControl(e){return this.control==="constraint"?x`<vector-scalar-rail
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
        ></vector-scalar-rail>`:x`<vector-value-slider
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
        ></vector-value-slider>`}_unitKeyForItem(e){let n=this.unitPreferences[e.key]??"";return!n||!(e.unitOptions??[]).find(o=>o.key===n)?"":n}};g([y({attribute:!1})],ue.prototype,"items",1),g([y({attribute:!1})],ue.prototype,"values",1),g([y({attribute:!1})],ue.prototype,"constraints",1),g([y({attribute:!1})],ue.prototype,"thresholds",1),g([y({attribute:!1})],ue.prototype,"unitPreferences",1),g([y({attribute:!1})],ue.prototype,"measurementSystem",1),g([y({attribute:!1})],ue.prototype,"basis",1),g([y({attribute:!1})],ue.prototype,"measurementScope",1),g([y({attribute:!1})],ue.prototype,"measurementMeasure",1),g([y({attribute:!1})],ue.prototype,"context",1),g([y({attribute:!1})],ue.prototype,"role",1),g([y({attribute:!1})],ue.prototype,"control",1),g([y({attribute:!1})],ue.prototype,"unitDisplay",1),g([y({attribute:!1})],ue.prototype,"activeEmphasis",1),g([y({attribute:!1})],ue.prototype,"palette",1)});var Vm,$m=h(()=>{"use strict";$();Vm=U`:host {
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
}`});var Nt,Ml=h(()=>{"use strict";$();Ae();We();et();$m();be();he();ve();Nt=class extends K{static{this.styles=[ee,Vm]}#e;get item(){return this.#e}set item(e){this.#e=e}#t;get options(){return this.#t}set options(e){this.#t=e}#n;get value(){return this.#n}set value(e){this.#n=e}#r;get role(){return this.#r}set role(e){this.#r=e}#o;get disabled(){return this.#o}set disabled(e){this.#o=e}constructor(){super(),this.item=null,this.options=[],this.value="",this.role="choice",this.disabled=!1,this.theme={}}set state(e){let n=e??{};this.item=n.item??null,this.options=n.options??n.item?.options??[],this.value=n.value??"",this.role=n.role??"choice",this.disabled=n.disabled??!1,this.theme=n.theme??{}}render(){return x`
      <div class="choice-control">
        ${this.item?x`<strong>${this.item.label||J(this.item.key)}</strong>`:Y}
        <div
          class="choices"
          role="group"
          aria-label=${this.item?.label||"Choice"}
        >
          ${re(this.options,e=>e.key??e.value??"",e=>{let n=e.value??e.key??"",r=n===this.value;return x`
                <button
                  type="button"
                  class=${F({selected:r})}
                  ?disabled=${this.disabled}
                  aria-pressed=${String(!!r)}
                  @click=${()=>this._select(n,e)}
                >
                  ${e.label??J(String(n))}
                </button>
              `})}
        </div>
      </div>
    `}_select(e,n){M(this,"vector-change",{source:"inspector",role:this.role,transactionId:k("choice"),key:this.item?.key,value:e,option:n})}};g([y({attribute:!1})],Nt.prototype,"item",1),g([y({attribute:!1})],Nt.prototype,"options",1),g([y({attribute:!1})],Nt.prototype,"value",1),g([y({attribute:!1})],Nt.prototype,"role",1),g([y({attribute:!1})],Nt.prototype,"disabled",1)});var Fm,jm=h(()=>{"use strict";$();Fm=U`:host {
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
}`});var Hm,Um,Bm,qm,qt,Nl=h(()=>{"use strict";$();Ae();jm();be();he();ve();qt=class extends K{constructor(){super();S(this,Hm);S(this,Um);S(this,Bm);S(this,qm);this._emit=n=>{let r=n.currentTarget,o=new FormData(r),i={min:Number(o.get("min")),max:Number(o.get("max")),locked:o.get("locked")==="on"};M(this,"vector-change",{source:"constraint",role:"constraint",transactionId:k("constraint"),key:this.item?.key,constraintRole:this.mode,constraint:i})};this.item=null,this.value=0,this.constraint={},this.mode="composition",this.theme={}}static{this.styles=[ee,Fm]}get item(){return C(this,Hm)}set item(n){T(this,Hm,n)}get value(){return C(this,Um)}set value(n){T(this,Um,n)}get constraint(){return C(this,Bm)}set constraint(n){T(this,Bm,n)}get mode(){return C(this,qm)}set mode(n){T(this,qm,n)}render(){let n=this.item||{key:"",label:"Constraint"};return x`
      <form class="constraint-row" @change=${this._emit}>
        <strong>${n.label||J(n.key)}</strong>
        <span
          >${D(this.value,1)}${this.mode==="composition"?"%":""}</span
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
    `}};Hm=new WeakMap,Um=new WeakMap,Bm=new WeakMap,qm=new WeakMap,g([y({attribute:!1})],qt.prototype,"item",1),g([y({attribute:!1})],qt.prototype,"value",1),g([y({attribute:!1})],qt.prototype,"constraint",1),g([y({attribute:!1})],qt.prototype,"mode",1)});var zt,as=h(()=>{"use strict";zt=class{constructor(e){this.host=e;this.abortController=null;e.addController(this)}get active(){return this.abortController!==null}hostDisconnected(){this.cancel()}start(e){this.cancel();let n=new AbortController;this.abortController=n;let r={signal:n.signal};document.addEventListener("pointermove",e.move,r),document.addEventListener("pointerup",o=>{this.cancel(),e.end(o)},r),document.addEventListener("pointercancel",()=>{this.cancel(),e.cancel()},r)}cancel(){this.abortController?.abort(),this.abortController=null}}});function Io(t,e){return(!e.measurementSystem||!t.system||t.system===e.measurementSystem)&&(!e.measurementScope||!t.scope||t.scope===e.measurementScope)&&(!e.measurementMeasure||!t.measure||t.measure===e.measurementMeasure)&&(!e.basis||!t.basis||t.basis===e.basis)}function zm(t,e,n){return t.find(r=>r.key===n.unitKey)??t.find(r=>!!r.system&&r.system===n.measurementSystem&&Io(r,n))??t.find(r=>Io(r,n))??t.find(r=>r.key===e?.defaultUnitKey&&Io(r,n))??t[0]??null}function Wm(t,e,n){return typeof e?.fromCanonical=="function"?Number(e.fromCanonical(t,n)??0):t}function Gm(t,e,n){return typeof e?.toCanonical=="function"?Number(e.toCanonical(t,n)??0):t}var Km=h(()=>{"use strict"});function dr(t){t.item=null,t.value=0,t.constraint={},t.role="composition",t.hits=[],t.rangeMin=0,t.rangeMax=100,t.precision=null,t.defaultValue=null,t.thresholds=[],t.unitOptions=[],t.unitKey="",t.measurementSystem="",t.basis="",t.measurementScope="",t.measurementMeasure="",t.context=null,t.disabled=!1,t.theme={},t.palette=le,t.variant="default",t.unitDisplay="picker",t.activeEmphasis=!0}var ur,Wt,cs=h(()=>{"use strict";Km();lt();Mt();he();ur={item:{attribute:!1},value:{attribute:!1},constraint:{attribute:!1},role:{attribute:!1},hits:{attribute:!1},rangeMin:{attribute:!1},rangeMax:{attribute:!1},precision:{attribute:!1},defaultValue:{attribute:!1},thresholds:{attribute:!1},unitOptions:{attribute:!1},unitKey:{attribute:!1},measurementSystem:{attribute:!1},basis:{attribute:!1},measurementScope:{attribute:!1},measurementMeasure:{attribute:!1},context:{attribute:!1},disabled:{attribute:!1},palette:{attribute:!1},variant:{attribute:!1},unitDisplay:{attribute:!1},activeEmphasis:{attribute:!1}};Wt=class{constructor(e){this.host=e;e.addController(this)}hostConnected(){}get state(){let e=this.host;return{item:e.item,value:e.value,constraint:e.constraint,role:e.role,hits:e.hits,rangeMin:e.rangeMin,rangeMax:e.rangeMax,precision:e.precision,defaultValue:e.defaultValue,thresholds:e.thresholds,unitOptions:e.unitOptions,unitKey:e.unitKey,measurementSystem:e.measurementSystem,basis:e.basis,measurementScope:e.measurementScope,measurementMeasure:e.measurementMeasure,context:e.context,disabled:e.disabled,theme:e.theme,palette:e.palette,variant:e.variant,unitDisplay:e.unitDisplay,activeEmphasis:e.activeEmphasis}}setState(e){let n=this.host;Object.assign(n,{item:e.item??null,value:Number(e.value??0),constraint:e.constraint??{},role:e.role??"composition",hits:e.hits??[],rangeMin:Number(e.rangeMin??0),rangeMax:Number(e.rangeMax??100),precision:e.precision==null?null:Number(e.precision),defaultValue:e.defaultValue==null?null:Number(e.defaultValue),thresholds:e.thresholds??e.item?.thresholds??[],unitOptions:e.unitOptions??e.item?.unitOptions??[],unitKey:e.unitKey??"",measurementSystem:e.measurementSystem??"",basis:e.basis??"",measurementScope:e.measurementScope??"",measurementMeasure:e.measurementMeasure??"",context:e.context??null,disabled:!!e.disabled,theme:e.theme??{},palette:Eo(e.palette),variant:e.variant??"default",unitDisplay:e.unitDisplay??"picker",activeEmphasis:e.activeEmphasis!==!1})}patchState(e){Object.assign(this.host,e)}viewState(){let e=this.host,n=this.domain(),r=this.min(),o=this.max(),i=W(e.value,n.min,n.max),s=this.places(),a=this.toDisplay(r),c=this.toDisplay(o),l=this.toDisplay(i);return{domain:n,min:r,max:o,value:i,displayMin:a,displayMax:c,displayValue:l,locked:!!e.constraint.locked,places:s,unit:this.unit(),itemColor:Ue(e.item,0,e.palette),minPct:this.pct(r),maxPct:this.pct(o),valuePct:this.pct(i),minText:Ee(a,s),maxText:Ee(c,s),valueText:Ee(l,s),domainMinText:Ee(this.toDisplay(n.min),s),domainMaxText:Ee(this.toDisplay(n.max),s),displayStep:this.displayStep(),thresholdKey:this.thresholdFor(i)?.key??""}}changeUnit(e){let n=this.host.unitOptions.find(r=>r.key===e);n&&(this.host.unitKey=e,M(this.host,"vector-change",{source:"inspector",role:"measurement",transactionId:k("rail-unit"),key:this.host.item?.key,unitKey:e,basis:n.basis,measurementScope:n.scope??this.host.measurementScope,measurementMeasure:n.measure??this.host.measurementMeasure,measurementSystem:n.system??this.host.measurementSystem}))}handleValue(e){return e==="min"?this.min():e==="max"?this.max():this.host.value}domain(){let e=Number.isFinite(Number(this.host.item?.min))?Number(this.host.item?.min):this.host.rangeMin,n=Number.isFinite(Number(this.host.item?.max))?Number(this.host.item?.max):this.host.rangeMax;return{min:Number.isFinite(e)?e:0,max:Number.isFinite(n)?n:100}}min(){return Number.isFinite(Number(this.host.constraint.min))?Number(this.host.constraint.min):this.domain().min}max(){return Number.isFinite(Number(this.host.constraint.max))?Number(this.host.constraint.max):this.domain().max}pct(e){let n=this.domain();return W((Number(e??0)-n.min)/(n.max-n.min||1)*100,0,100)}step(){let e=this.unitOption();if(e?.step!=null&&Number.isFinite(Number(e.step))){let n=this.toCanonical(0);return Math.abs(this.toCanonical(Number(e.step))-n)||Number(e.step)}return Number(this.host.constraint.step??this.host.item?.step??1)}places(){if(Number.isFinite(this.host.precision))return Math.max(0,Number(this.host.precision));let e=this.unitOption();return e?.precision!=null&&Number.isFinite(Number(e.precision))?Math.max(0,Number(e.precision)):lr(this.displayStep())}unit(){return this.unitOption()?.symbol??(this.host.role==="composition"?"%":this.host.item?.unit??"")}unitOption(){return zm(this.host.unitOptions,this.host.item,this.preferences())}unitMatchesOption(e){return e?Io(e,this.preferences()):!1}toDisplay(e){return Wm(Number(e??0),this.unitOption(),this.conversionContext())}toCanonical(e){return Gm(Number(e??0),this.unitOption(),this.conversionContext())}displayStep(){let e=this.unitOption();if(e?.step!=null&&Number.isFinite(Number(e.step)))return Number(e.step);let n=this.toDisplay(0);return Math.abs(this.toDisplay(this.step())-n)||this.step()}thresholdFor(e){return this.host.thresholds.find(n=>Number(e)>=Number(n.min)&&Number(e)<=Number(n.max))??null}handleHitClass(e){let n=this.host.hits.filter(r=>r.key===this.host.item?.key);return e==="min"&&n.some(r=>r.type==="min")||e==="max"&&n.some(r=>r.type==="max")||e==="value"&&n.some(r=>["locked","unreachable","solver","sum"].includes(r.type))?"hit":""}preferences(){let e=this.host;return{unitKey:e.unitKey,measurementSystem:e.measurementSystem,basis:e.basis,measurementScope:e.measurementScope,measurementMeasure:e.measurementMeasure}}conversionContext(){let e=this.host,n=e.context&&typeof e.context=="object"?e.context:{};return A(b({},n),{item:e.item,measurementSystem:e.measurementSystem,basis:e.basis,measurementScope:e.measurementScope,measurementMeasure:e.measurementMeasure})}}});function ls(t){return re(t.thresholds,e=>e.key,e=>{let n=t.percent(e.min),r=t.percent(e.max),o=t.activeThreshold(t.value)?.key===e.key;return x`
        <span
          class=${F({"threshold-band":!0,[e.severity??"ok"]:!0,active:o})}
          ${ie({"--threshold-start":`${n}%`,"--threshold-width":`${Math.max(0,r-n)}%`,"--threshold-color":e.color??null})}
          title=${e.label??e.key}
        ></span>
      `})}var kl=h(()=>{"use strict";$();We();et();Tt()});var Qm,Zm=h(()=>{"use strict";$();Qm=U`:host {
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
}`});var Ym,Jm,Xm,fr,Al=h(()=>{"use strict";$();Ae();We();Tt();as();cs();be();kl();Zm();lt();Mt();he();ve();fr=class extends K{constructor(){super();S(this,Ym,"composition");this.scalar=new Wt(this);this.pointerDrag=new zt(this);S(this,Jm);S(this,Xm,null);dr(this)}static{this.properties=ur}get role(){return C(this,Ym)}set role(n){T(this,Ym,n)}get railElement(){return C(this,Jm)}set railElement(n){T(this,Jm,n)}static{this.styles=[ee,Qm]}get _drag(){return C(this,Xm)}set _drag(n){T(this,Xm,n)}set state(n){this.scalar.setState(n)}get state(){return this.scalar.state}render(){if(!this.item)return x` <div class="empty">Select an item.</div> `;let n=this.scalar.domain(),r=this.scalar.min(),o=this.scalar.max(),i=W(this.value,n.min,n.max),s=!!this.constraint.locked,a=this.scalar.viewState(),c=this.scalar.pct(r),l=this.scalar.pct(o),u=this.scalar.pct(i),d=a.unit,p=Ue(this.item,0,this.palette),f=a.minText,m=a.maxText,E=a.valueText,v=this.variant==="embedded",N=s?"Unlock value":"Lock value",P=()=>x`
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
        ${s?bo:fm}
      </button>
    `;return x`
      <section
        class=${F({"rail-control":!0,embedded:v,disabled:this.disabled,dragging:!!this._drag})}
        data-threshold=${a.thresholdKey||""}
      >
        ${v?"":x`<header>
              <span
                class="swatch"
                ${ie({"--item-color":p})}
              ></span>
              <strong>${this.item.label||J(this.item.key)}</strong>
              <output>${E}${d}</output>
              ${P()}
            </header>`}

        <div class="rail-body">
          <div class="rail" data-rail>
            <div class="full-track"></div>
            <div
              class="allowed-track"
              ${ie({"--range-start":`${c}%`,"--range-width":`${Math.max(0,l-c)}%`})}
            ></div>
            <div class="threshold-track" aria-hidden="true">
              ${ls({thresholds:this.thresholds,value:this.value,percent:w=>this.scalar.pct(w),activeThreshold:w=>this.scalar.thresholdFor(w)})}
            </div>
            ${this.defaultValue==null?"":x`<span
                  class="default-marker"
                  ${ie({"--rail-position":`${this.scalar.pct(this.defaultValue)}%`})}
                  title="Default"
                ></span>`}
            <button
              class=${F({handle:!0,min:!0,hit:!!this.scalar.handleHitClass("min"),active:this._drag?.handle==="min"})}
              data-handle="min"
              ${ie({"--rail-position":`${c}%`})}
              type="button"
              aria-label=${`Minimum ${f}${d}`}
              ?disabled=${this.disabled}
              @pointerdown=${w=>this._startDrag(w,"min")}
              @keydown=${w=>this._keydown(w,"min")}
            >
              <span class="handle-label">min</span>
              <span class="handle-dot"></span>
              <span class="handle-value">${f}${d}</span>
            </button>
            <button
              class=${F({handle:!0,value:!0,locked:s,hit:!!this.scalar.handleHitClass("value"),active:this._drag?.handle==="value"})}
              data-handle="value"
              ${ie({"--rail-position":`${u}%`})}
              type="button"
              aria-label=${`Value ${E}${d}`}
              ?disabled=${this.disabled}
              @pointerdown=${w=>this._startDrag(w,"value")}
              @keydown=${w=>this._keydown(w,"value")}
            >
              <span class="handle-label">value</span>
              <span class="handle-dot">${s?bo:""}</span>
              <span class="handle-value">${E}${d}</span>
            </button>
            <button
              class=${F({handle:!0,max:!0,hit:!!this.scalar.handleHitClass("max"),active:this._drag?.handle==="max"})}
              data-handle="max"
              ${ie({"--rail-position":`${l}%`})}
              type="button"
              aria-label=${`Maximum ${m}${d}`}
              ?disabled=${this.disabled}
              @pointerdown=${w=>this._startDrag(w,"max")}
              @keydown=${w=>this._keydown(w,"max")}
            >
              <span class="handle-label">max</span>
              <span class="handle-dot"></span>
              <span class="handle-value">${m}${d}</span>
            </button>
          </div>
          ${v?P():""}
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
              @change=${w=>this._emitInputTarget("min",Number(w.currentTarget.value),"vector-change",k("rail-input"))}
          /></label>
          <label
            >Value<input
              data-exact="value"
              type="number"
              min=${a.domainMinText}
              max=${a.domainMaxText}
              step=${a.displayStep}
              .value=${E}
              ?disabled=${s||this.disabled}
              @change=${w=>this._emitInputTarget("value",Number(w.currentTarget.value),"vector-change",k("rail-input"))}
          /></label>
          <label
            >Max<input
              data-exact="max"
              type="number"
              min=${a.domainMinText}
              max=${a.domainMaxText}
              step=${a.displayStep}
              .value=${m}
              ?disabled=${this.disabled}
              @change=${w=>this._emitInputTarget("max",Number(w.currentTarget.value),"vector-change",k("rail-input"))}
          /></label>
        </div>
        ${this.unitOptions.length>1?x`
              <label class="unit-row"
                >Unit
                <select
                  data-unit
                  .value=${this.scalar.unitOption()?.key||""}
                  ?disabled=${this.disabled}
                  @change=${w=>this.scalar.changeUnit(w.currentTarget.value)}
                >
                  ${this.unitOptions.map(w=>x`<option
                        value=${w.key}
                        ?selected=${w.key===this.scalar.unitOption()?.key}
                      >
                        ${w.label}
                      </option>`)}
                </select>
              </label>
            `:Y}
      </section>
    `}_startDrag(n,r){if(!(this.disabled||n.button>0)){if(n.preventDefault(),r==="value"&&this.constraint.locked){this._emitLockedHit();return}this._drag={handle:r,transactionId:k("rail"),startX:n.clientX,startValue:this.scalar.handleValue(r),latestTarget:this.scalar.handleValue(r)},this.pointerDrag.start({move:o=>this._dragMove(o),end:()=>this._dragEnd(),cancel:()=>this._cancelDrag()})}}_dragMove(n){if(!this._drag)return;let r=this.railElement,o=Math.max(1,r?.getBoundingClientRect?.().width||1),i=this.scalar.domain(),s=(n.clientX-this._drag.startX)/o*(i.max-i.min),a=fe(this._drag.startValue+s,this.scalar.step());this._drag.latestTarget=a,this._emitHandleTarget(this._drag.handle,a,"vector-preview",this._drag.transactionId)}_dragEnd(){if(!this._drag)return;let n=this._drag.handle,r=this._drag.transactionId,o=this._drag.latestTarget??this._drag.startValue;this._emitHandleTarget(n,o,"vector-change",r),this._drag=null,this.requestUpdate()}_cancelDrag(){this._drag&&(M(this,"vector-cancel",{source:"constraint",role:this.role,transactionId:this._drag.transactionId,key:this.item?.key}),this._drag=null,this.requestUpdate())}_keydown(n,r){if(this.disabled)return;let o=this.scalar.step(),i=null;if((n.key===" "||n.key==="Enter")&&r==="value"&&this.constraint.locked){n.preventDefault(),this._toggleLock();return}if(r==="value"&&this.constraint.locked){["ArrowLeft","ArrowDown","ArrowRight","ArrowUp","Home","End"].includes(n.key)&&(n.preventDefault(),this._emitLockedHit());return}if(n.key==="ArrowRight"||n.key==="ArrowUp"?i=this.scalar.handleValue(r)+o:n.key==="ArrowLeft"||n.key==="ArrowDown"?i=this.scalar.handleValue(r)-o:n.key==="Home"?i=this.scalar.domain().min:n.key==="End"?i=this.scalar.domain().max:n.key==="Escape"&&this._cancelDrag(),i==null)return;n.preventDefault();let s=k("rail-key");this._emitHandleTarget(r,i,"vector-preview",s),this._emitHandleTarget(r,i,"vector-change",s)}_emitHandleTarget(n,r,o,i){if(!this.item?.key)return;let s=this.scalar.unitOption();if(n==="value"){if(this.constraint.locked){this._emitLockedHit(i);return}let u=fe(r,this.scalar.step()),d=W(u,this.scalar.min(),this.scalar.max()),p=this.scalar.thresholdFor(d),f=[];u<this.scalar.min()&&f.push(_e(this.item.key,"min",`${this.item.label||J(this.item.key)} hit minimum ${D(this.scalar.toDisplay(this.scalar.min()),this.scalar.places())}${this.scalar.unit()}.`)),u>this.scalar.max()&&f.push(_e(this.item.key,"max",`${this.item.label||J(this.item.key)} hit maximum ${D(this.scalar.toDisplay(this.scalar.max()),this.scalar.places())}${this.scalar.unit()}.`));let m={source:"inspector",role:this.role,transactionId:i,key:this.item.key,previousValue:{[this.item.key]:this.value},requestedValue:{[this.item.key]:u},proposedValue:{[this.item.key]:d},delta:D(d-this.value,4),unitKey:s?.key,basis:s?.basis??this.basis??this.item?.basis,measurementScope:s?.scope??this.measurementScope,measurementMeasure:s?.measure??this.measurementMeasure,displayValue:this.scalar.toDisplay(d),canonicalValue:d,thresholdKey:p?.key,measurementSystem:this.measurementSystem||s?.system,hits:f};M(this,o,m),f.length&&M(this,"vector-constraint-hit",m);return}let a=this.scalar.domain(),c=fe(W(r,a.min,a.max),this.scalar.step()),l=n==="min"?{min:c}:{max:c};M(this,o,{source:"constraint",role:"constraint",transactionId:i,key:this.item.key,constraintRole:this.role,constraint:l,unitKey:s?.key,basis:s?.basis||this.basis||this.item?.basis,measurementScope:s?.scope||this.measurementScope,measurementMeasure:s?.measure||this.measurementMeasure,displayValue:this.scalar.toDisplay(c),canonicalValue:c,measurementSystem:this.measurementSystem||s?.system})}_emitInputTarget(n,r,o,i){this._emitHandleTarget(n,this.scalar.toCanonical(r),o,i)}_toggleLock(){this.disabled||M(this,"vector-change",{source:"constraint",role:"constraint",transactionId:k("rail-lock"),key:this.item?.key,constraintRole:this.role,constraint:{locked:!this.constraint.locked}})}_emitLockedHit(n=k("rail-locked")){let r=_e(this.item?.key??"constraint","locked",`${this.item?.label??J(this.item?.key??"constraint")} is locked.`);M(this,"vector-constraint-hit",{source:"constraint",role:this.role,transactionId:n,key:this.item?.key,unitKey:this.scalar.unitOption()?.key,basis:this.scalar.unitOption()?.basis||this.basis||this.item?.basis,measurementScope:this.scalar.unitOption()?.scope||this.measurementScope,measurementMeasure:this.scalar.unitOption()?.measure||this.measurementMeasure,measurementSystem:this.measurementSystem||this.scalar.unitOption()?.system,hits:[r]})}};Ym=new WeakMap,Jm=new WeakMap,Xm=new WeakMap,g([St("[data-rail]")],fr.prototype,"railElement",1),g([rr()],fr.prototype,"_drag",1)});var us,Rl=h(()=>{"use strict";wo();us=class extends we{constructor(){super(),this._listType="ingredient",this._searchPlaceholder="Search additives"}}});var eg,tg=h(()=>{"use strict";$();eg=U`:host {
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
}`});var kt,Ol=h(()=>{"use strict";$();Ae();Tt();tg();be();lt();Mt();he();ve();kt=class extends K{static{this.styles=[ee,eg]}#e;get item(){return this.#e}set item(e){this.#e=e}#t;get value(){return this.#t}set value(e){this.#t=e}#n;get constraint(){return this.#n}set constraint(e){this.#n=e}#r;get role(){return this.#r}set role(e){this.#r=e}#o;get palette(){return this.#o}set palette(e){this.#o=e}constructor(){super(),this.item=null,this.value=0,this.constraint={},this.role="composition",this.theme={},this.palette=le}render(){if(!this.item)return x` <div class="empty">Select an oil or quality.</div> `;let e=Number(this.constraint.min??this.item.min??0),n=Number(this.constraint.max??this.item.max??100),r=Number(this.constraint.step??this.item.step??(this.role==="composition"?.1:1));return x`
      <section class="inspector">
        <header>
          <span
            class="swatch"
            ${ie({"--item-color":Ue(this.item,0,this.palette)})}
          ></span>
          <strong>${this.item.label||J(this.item.key)}</strong>
          <span
            >${D(this.value,1)}${this.role==="composition"?"%":""}</span
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
            .value=${String(D(this.value,2))}
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
    `}_emit(e,n){let r=this.item;if(!r)return;let o=W(e,this.constraint.min??r.min??0,this.constraint.max??r.max??100);M(this,n,{source:"inspector",role:this.role,transactionId:k("inspector"),key:r.key,requestedValue:{[r.key]:o},proposedValue:{[r.key]:o},delta:D(o-this.value,4)})}};g([y({attribute:!1})],kt.prototype,"item",1),g([y({attribute:!1})],kt.prototype,"value",1),g([y({attribute:!1})],kt.prototype,"constraint",1),g([y({attribute:!1})],kt.prototype,"role",1),g([y({attribute:!1})],kt.prototype,"palette",1)});var ng,rg=h(()=>{"use strict";$();ng=U`:host {
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
}`});function fs(t,e,n,r,o){let i=Number(t.min??0),s=Number(t.max??100),a=s===i?0:W((Number(e||0)-i)/(s-i),0,1);return xo(pr(n,r),o*a)}function pr(t,e){return-Math.PI/2+t*(Math.PI*2/Math.max(1,e))}function xo(t,e){return{x:D(Math.cos(t)*e,2),y:D(Math.sin(t)*e,2)}}function ig(t){let e=Math.max(1,Math.hypot(t.x,t.y));return{x:D(t.x+t.x/e*15,2),y:D(t.y+t.y/e*15+3,2)}}function sg(t,e){return hr(Array.from({length:t},(n,r)=>xo(pr(r,t),e)))}function ag(t,e){return og(t)-og(e)}function og(t){let e=t.dataset||{};return"lockBadge"in e?0:e.limitType==="min"?1:e.limitType==="max"?2:3}function hr(t){return t.filter(e=>e!==null).map(e=>`${e.x},${e.y}`).join(" ")}function cg(t,e,n){if(Math.abs(e-t)>=359.99)return["M 0 0",`m ${-n}, 0`,`a ${n},${n} 0 1,0 ${n*2},0`,`a ${n},${n} 0 1,0 ${-n*2},0`,"Z"].join(" ");let r=ds(t,n),o=ds(e,n),i=Math.abs(e-t)>180?1:0;return`M 0 0 L ${r.x} ${r.y} A ${n} ${n} 0 ${i} 1 ${o.x} ${o.y} Z`}function ds(t,e){let n=ps(t);return{x:D(Math.cos(n)*e,2),y:D(Math.sin(n)*e,2)}}function ps(t){return t*Math.PI/180}var Pl=h(()=>{"use strict";he()});var lg,ug,dg,fg,pg,hg,mg,gg,yg,vg,bg,_g,Eg,wg,Ig,de,Ll=h(()=>{"use strict";$();Ae();We();et();Tt();as();rg();be();lt();Mt();Pl();he();ve();de=class extends K{constructor(){super();this.pointerDrag=new zt(this);S(this,lg);S(this,ug);S(this,dg);S(this,fg);S(this,pg);S(this,hg);S(this,mg);S(this,gg);S(this,yg);S(this,vg);S(this,bg);S(this,_g);S(this,Eg);S(this,wg);S(this,Ig);this.items=[],this.value={},this.constraints={},this.total=100,this.selectedKey="",this.hits=[],this.disabled=!1,this._drag=null,this.precision=null,this.centerValue=null,this.centerLabel="",this.centerPrecision=null,this.theme={},this.palette=le,this._decoratorPositions=new Map}get decoratorSlot(){return C(this,lg)}set decoratorSlot(n){T(this,lg,n)}get chartShell(){return C(this,ug)}set chartShell(n){T(this,ug,n)}static{this.styles=[ee,ng]}get _drag(){return C(this,dg)}set _drag(n){T(this,dg,n)}get items(){return C(this,fg)}set items(n){T(this,fg,n)}get value(){return C(this,pg)}set value(n){T(this,pg,n)}get constraints(){return C(this,hg)}set constraints(n){T(this,hg,n)}get total(){return C(this,mg)}set total(n){T(this,mg,n)}get selectedKey(){return C(this,gg)}set selectedKey(n){T(this,gg,n)}get hits(){return C(this,yg)}set hits(n){T(this,yg,n)}get disabled(){return C(this,vg)}set disabled(n){T(this,vg,n)}get precision(){return C(this,bg)}set precision(n){T(this,bg,n)}get centerValue(){return C(this,_g)}set centerValue(n){T(this,_g,n)}get centerLabel(){return C(this,Eg)}set centerLabel(n){T(this,Eg,n)}get centerPrecision(){return C(this,wg)}set centerPrecision(n){T(this,wg,n)}get palette(){return C(this,Ig)}set palette(n){T(this,Ig,n)}set state(n){this._setPieState(n??{})}get state(){return{items:this.items,value:this.value,constraints:this.constraints,total:this.total,selectedKey:this.selectedKey,hits:this.hits,disabled:this.disabled,precision:this.precision,centerValue:this.centerValue,centerLabel:this.centerLabel,centerPrecision:this.centerPrecision,theme:this.theme,palette:this.palette}}render(){let n=this._orderedEntries(),r=n.reduce((E,[,v])=>E+Number(v??0),0)||this.total,o=new Set(this.hits.map(E=>E.key)),i=this._places(),s=this.centerValue!=null,a=s?this.centerValue:r,c=this.centerPrecision==null?i:Number(this.centerPrecision||0),l=s?typeof a=="number"?Ee(a,c):String(a):`${Ee(r,i)}%`,u=this.centerLabel||"total",d=-90,p=new Map,f=re(n,([E])=>E,([E,v],N)=>{let P=this._itemFor(E,N),w=Ue(P,N,this.palette),X=!!(this.constraints[E]??{}).locked,G=Number(v??0)/r*360,I=d,se=d+G;d=se;let At=E===this.selectedKey,ge=o.has(E),Ie=(I+se)/2,Se=At||ge?5:0,_=Math.cos(ps(Ie))*Se,yu=Math.sin(ps(Ie))*Se,vu=X?" locked":"",bu=Ee(v,i),_u=ds(Ie,61.5);return p.set(E,{x:D((_u.x+_+104)/208*100,4),y:D((_u.y+yu+104)/208*100,4)}),Xe`
        <g class="slice-wrap" transform="translate(${D(_,2)} ${D(yu,2)})">
          <path
            class=${F({slice:!0,selected:At,hit:ge})}
            d="${cg(I,se,82)}"
            fill=${w}
            tabindex="0"
            role="button"
            aria-label=${`${P.label} ${bu} percent${vu}`}
            data-key=${E}
            @click=${()=>this._select(E)}
            @keydown=${br=>this._keydown(br,E)}
            @wheel=${br=>this._wheel(br,E)}
            @pointerdown=${br=>this._startDrag(br,E)}
          >
            <title>${P.label}: ${bu}%${vu}</title>
          </path>
        </g>
      `});this._decoratorPositions=p;let m=re(n,([E])=>E,([E,v],N)=>{let P=this._itemFor(E,N),w=!!(this.constraints[E]||{}).locked;return x`
          <button
            class=${F({"legend-item":!0,selected:E===this.selectedKey})}
            data-key=${E}
            @click=${()=>this._select(E)}
          >
            <span
              class="swatch"
              ${ie({"--item-color":Ue(P,N,this.palette)})}
            ></span>
            <span>${P.label}</span>
            <strong
              >${w?`${bo} `:""}${Ee(v,i)}%</strong
            >
          </button>
        `});return x`
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
        <div class="legend">${m}</div>
        <div class="after-legend">
          <slot name="after-legend"></slot>
        </div>
      </div>
    `}updated(){this._positionDecorators()}_patchPieState(n){Object.assign(this,n)}_setPieState(n){let r={items:n.items??[],value:ce(n.value??{}),constraints:n.constraints??{},total:Number(n.total??100),selectedKey:n.selectedKey??"",hits:n.hits??[],disabled:!!n.disabled,precision:n.precision==null?null:Number(n.precision),centerValue:n.centerValue??null,centerLabel:n.centerLabel??"",centerPrecision:n.centerPrecision==null?null:Number(n.centerPrecision),theme:n.theme??{},palette:Eo(n.palette)};this.items=r.items,this.value=r.value,this.constraints=r.constraints,this.total=r.total,this.selectedKey=r.selectedKey,this.hits=r.hits,this.disabled=r.disabled,this.precision=r.precision,this.centerValue=r.centerValue,this.centerLabel=r.centerLabel,this.centerPrecision=r.centerPrecision,this.theme=r.theme,this.palette=r.palette}positionDecorators(){this._positionDecorators()}_positionDecorators(){let n=this.decoratorSlot?.assignedElements({flatten:!0})??[],r=new Map;n.forEach(o=>{let i=o.dataset.key,s=i?this._decoratorPositions.get(i):void 0;if(!i||!s){o.hidden=!0;return}r.has(i)||r.set(i,{point:s,decorators:[]}),r.get(i)?.decorators.push(o)}),r.forEach(({point:o,decorators:i})=>{i.sort(ag),i.forEach((s,a)=>{let c=(a-(i.length-1)/2)*18;s.hidden=!1,s.style?.setProperty?.("--decorator-x",`${o.x}%`),s.style?.setProperty?.("--decorator-y",`${o.y}%`),s.style?.setProperty?.("--decorator-offset-x",`${D(c,2)}px`),s.style?.setProperty?.("--decorator-offset-y","0px")})})}_select(n){this.disabled||(this.selectedKey=n,M(this,"vector-select",{source:"pie",role:"composition",transactionId:k("select"),key:n}))}_startDrag(n,r){this.disabled||n.button>0||(n.preventDefault(),this._select(r),this._drag={key:r,transactionId:k("pie"),startX:n.clientX,startY:n.clientY,startValue:ce(this.value),latest:null},this.pointerDrag.start({move:o=>this._dragMove(o),end:o=>this._dragEnd(o),cancel:()=>this._cancelDrag()}))}_dragMove(n){if(!this._drag)return;let r=this.constraints[this._drag.key]??{},o=Number(r.step??1),i=this._drag.startY-n.clientY+(n.clientX-this._drag.startX),s=fe(i/10,o),a=Number(this._drag.startValue[this._drag.key]??0)+s;this._previewTarget(a)}_dragEnd(n){if(!this._drag)return;let r=this.chartShell?.getBoundingClientRect();if(r?n.clientX<r.left-20||n.clientX>r.right+20||n.clientY<r.top-20||n.clientY>r.bottom+20:!1){this._cancelDrag();return}let i=this._drag.latest;i&&M(this,"vector-change",i),this._drag=null}_cancelDrag(){this._drag&&(M(this,"vector-cancel",{source:"pie",role:"composition",transactionId:this._drag.transactionId,previousValue:this._drag.startValue}),this._drag=null)}_wheel(n,r){if(this.disabled)return;n.preventDefault();let o=this.constraints[r]??{},i=Number(o.step??1),s=n.deltaY<0?1:-1,a=Number(this.value[r]??0)+s*i,c=k("pie-wheel"),l=this._detailForTarget(r,a,c,this.value);M(this,"vector-preview",l),M(this,"vector-change",l)}_keydown(n,r){let o=this.constraints[r]??{},i=Number(o.step??1),s=null;if(n.key==="ArrowUp"||n.key==="ArrowRight"?s=Number(this.value[r]??0)+i:n.key==="ArrowDown"||n.key==="ArrowLeft"?s=Number(this.value[r]??0)-i:n.key==="Home"?s=Number(o.min??0):n.key==="End"?s=Number(o.max??this.total):n.key==="Escape"&&(this._cancelDrag(),M(this,"vector-cancel",{source:"pie",role:"composition",transactionId:k("pie-cancel"),previousValue:this.value})),s==null)return;n.preventDefault();let a=this._detailForTarget(r,s,k("pie-key"),this.value);M(this,"vector-preview",a),M(this,"vector-change",a)}_previewTarget(n){let r=this._drag;if(!r)return;let o=this._detailForTarget(r.key,n,r.transactionId,r.startValue);r.latest=o,M(this,"vector-preview",o),o.hits?.length&&M(this,"vector-constraint-hit",o)}_detailForTarget(n,r,o,i){let s=is({value:i,key:n,target:r,constraints:this.constraints,items:this.items,total:this.total});return{source:"pie",role:"composition",transactionId:o,key:n,previousValue:i,requestedValue:A(b({},i),{[n]:r}),proposedValue:s.vector,delta:s.delta,hits:s.hits}}_orderedEntries(){let n=this.items.map(o=>o.key);return[...new Set([...n,...Object.keys(this.value||{})])].filter(o=>o in this.value).sort((o,i)=>{let s=this.items.find(c=>c.key===o),a=this.items.find(c=>c.key===i);return Number(s?.order||0)-Number(a?.order||0)}).map(o=>[o,Number(this.value[o]??0)])}_itemFor(n,r){return this.items.find(o=>o.key===n)??{key:n,label:J(n),color:Dl(r,this.palette)}}_places(){if(Number.isFinite(this.precision))return Math.max(0,Number(this.precision));let n=Object.values(this.constraints||{}).map(r=>Number(r?.step)).filter(r=>Number.isFinite(r)&&r>0);return n.length?Math.max(...n.map(r=>lr(r))):1}};lg=new WeakMap,ug=new WeakMap,dg=new WeakMap,fg=new WeakMap,pg=new WeakMap,hg=new WeakMap,mg=new WeakMap,gg=new WeakMap,yg=new WeakMap,vg=new WeakMap,bg=new WeakMap,_g=new WeakMap,Eg=new WeakMap,wg=new WeakMap,Ig=new WeakMap,g([St('slot[name="slice-decorator"]')],de.prototype,"decoratorSlot",1),g([St(".chart-shell")],de.prototype,"chartShell",1),g([rr()],de.prototype,"_drag",1),g([y({attribute:!1})],de.prototype,"items",1),g([y({attribute:!1})],de.prototype,"value",1),g([y({attribute:!1})],de.prototype,"constraints",1),g([y({attribute:!1})],de.prototype,"total",1),g([y({attribute:!1})],de.prototype,"selectedKey",1),g([y({attribute:!1})],de.prototype,"hits",1),g([y({attribute:!1})],de.prototype,"disabled",1),g([y({attribute:!1})],de.prototype,"precision",1),g([y({attribute:!1})],de.prototype,"centerValue",1),g([y({attribute:!1})],de.prototype,"centerLabel",1),g([y({attribute:!1})],de.prototype,"centerPrecision",1),g([y({attribute:!1})],de.prototype,"palette",1)});var xg,Dg=h(()=>{"use strict";$();xg=U`:host {
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
}`});var Cg,hs,Vl=h(()=>{"use strict";$();We();Dg();he();ve();cs();be();hs=class extends K{constructor(){super();S(this,Cg,"composition");this.scalar=new Wt(this);dr(this)}static{this.properties=ur}get role(){return C(this,Cg)}set role(n){T(this,Cg,n)}static{this.styles=[ee,xg]}set state(n){this.scalar.setState(n)}get state(){return this.scalar.state}render(){if(!this.item)return x` <div class="empty">Select an item.</div> `;let n=this.scalar.viewState(),r=this.scalar.unitOption();return x`
      <section
        class=${F({"quantity-input":!0,disabled:this.disabled})}
      >
        <label>
          <span>${this.item.label||J(this.item.key)}</span>
          <span class="input-wrap">
            <input
              data-quantity
              type="number"
              min=${n.domainMinText}
              max=${n.domainMaxText}
              step=${n.displayStep}
              .value=${n.valueText}
              ?disabled=${this.disabled}
              @change=${o=>this._emitQuantityValue(Number(o.currentTarget.value),"vector-change",k("quantity-input"))}
            />
            <span class="unit-suffix">${r?.symbol||n.unit}</span>
          </span>
        </label>
      </section>
    `}_emitQuantityValue(n,r,o){if(!this.item?.key)return;let i=this.scalar.unitOption(),s=this.scalar.toCanonical(n),a=fe(s,this.scalar.step()),c=W(a,this.scalar.min(),this.scalar.max());M(this,r,{source:"inspector",role:this.role,transactionId:o,key:this.item.key,previousValue:{[this.item.key]:this.value},requestedValue:{[this.item.key]:a},proposedValue:{[this.item.key]:c},delta:D(c-this.value,4),unitKey:i?.key,basis:i?.basis||this.basis||this.item?.basis,measurementScope:i?.scope||this.measurementScope,measurementMeasure:i?.measure||this.measurementMeasure,displayValue:this.scalar.toDisplay(c),canonicalValue:c,measurementSystem:this.measurementSystem||i?.system,hits:[]})}};Cg=new WeakMap});var Sg,Tg=h(()=>{"use strict";$();Sg=U`:host {
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
}`});var Mg,Ng,kg,Ag,Rg,Og,Pg,Lg,Vg,$g,Fg,jg,Hg,me,$l=h(()=>{"use strict";$();Ae();We();et();as();Tg();be();Mt();Pl();he();ve();me=class extends K{constructor(){super();this.pointerDrag=new zt(this);S(this,Mg);S(this,Ng,null);S(this,kg);S(this,Ag);S(this,Rg);S(this,Og);S(this,Pg);S(this,Lg);S(this,Vg);S(this,$g);S(this,Fg);S(this,jg);S(this,Hg);this.axes=[],this.value={},this.previewValue=null,this.targetValue=null,this.reachableRange={},this.preferredRange={},this.selectedKey="",this.hits=[],this.disabled=!1,this._drag=null,this.precision=null,this.showValues=!1,this.theme={}}get svgElement(){return C(this,Mg)}set svgElement(n){T(this,Mg,n)}static{this.styles=[ee,Sg]}get _drag(){return C(this,Ng)}set _drag(n){T(this,Ng,n)}get axes(){return C(this,kg)}set axes(n){T(this,kg,n)}get value(){return C(this,Ag)}set value(n){T(this,Ag,n)}get previewValue(){return C(this,Rg)}set previewValue(n){T(this,Rg,n)}get targetValue(){return C(this,Og)}set targetValue(n){T(this,Og,n)}get reachableRange(){return C(this,Pg)}set reachableRange(n){T(this,Pg,n)}get preferredRange(){return C(this,Lg)}set preferredRange(n){T(this,Lg,n)}get selectedKey(){return C(this,Vg)}set selectedKey(n){T(this,Vg,n)}get hits(){return C(this,$g)}set hits(n){T(this,$g,n)}get disabled(){return C(this,Fg)}set disabled(n){T(this,Fg,n)}get precision(){return C(this,jg)}set precision(n){T(this,jg,n)}get showValues(){return C(this,Hg)}set showValues(n){T(this,Hg,n)}set state(n){this._setRadarState(n??{})}get state(){return{axes:this.axes,value:this.value,previewValue:this.previewValue,targetValue:this.targetValue,reachableRange:this.reachableRange,preferredRange:this.preferredRange,selectedKey:this.selectedKey,hits:this.hits,disabled:this.disabled,precision:this.precision,showValues:this.showValues,theme:this.theme}}render(){let n=this.axes,r=new Set(this.hits.map(v=>v.key)),o=this._pointsFor(this.value,90),i=this.previewValue?this._pointsFor(this.previewValue,90):[],s=this.targetValue?this._pointsFor(this.targetValue,90):[],a=this.previewValue??this.value,c=this._pointsFor(a,90),l=this._pointsForRange("preferredMax",90),u=this._pointsForRange("reachableMax",90),d=re([.25,.5,.75,1],v=>v,v=>Xe`
      <polygon class="grid-ring" points=${sg(n.length,90*v)}></polygon>
    `),p=re(n,v=>v.key,(v,N)=>{let P=xo(pr(N,n.length),96),w=xo(pr(N,n.length),112);return Xe`
        <line class="axis" x1="0" y1="0" x2="${P.x}" y2="${P.y}"></line>
        <text class=${F({"axis-label":!0,selected:v.key===this.selectedKey})}
          x=${w.x} y=${w.y} text-anchor="middle">${v.label}</text>
      `}),f=re(n,v=>v.key,(v,N)=>{let P=fs(v,Number(a[v.key]??0),N,n.length,90),w=r.has(v.key),X=Ee(a[v.key]??0,this._places(v));return Xe`
        <circle class=${F({marble:!0,selected:v.key===this.selectedKey,hit:w})}
          cx=${P.x} cy=${P.y} r="6" tabindex="0" role="slider"
          aria-label=${`${v.label} ${X}`} data-key=${v.key}
          @click=${()=>this._select(v.key)}
          @pointerdown=${G=>this._startDrag(G,v.key)}
          @keydown=${G=>this._keydown(G,v.key)}>
          <title>${v.label}: ${X}</title>
        </circle>
      `}),m=this.showValues?re(c,(v,N)=>n[N]?.key||N,(v,N)=>{let P=n[N],w=ig(v);return Xe`
        <text class=${F({"value-label":!0,selected:P.key===this.selectedKey})}
          x=${w.x} y=${w.y} text-anchor="middle">
          ${Ee(a[P.key]??0,this._places(P))}
        </text>
      `}):"",E=re(s,(v,N)=>n[N]?.key||N,(v,N)=>{let P=n[N];return Xe`<circle class="target-dot" cx=${v.x} cy=${v.y} r="3.5"><title>${P.label} target</title></circle>`});return x`
      <div class=${F({"chart-shell":!0,disabled:this.disabled})}>
        <svg
          class="radar"
          viewBox="-130 -124 260 248"
          aria-label="Soap quality radar chart"
        >
          ${d} ${p}
          ${l.length?Xe`<polygon class="preferred" points=${hr(l)}><title>Preferred range</title></polygon>`:""}
          ${u.length?Xe`<polygon class="reachable" points=${hr(u)}><title>Axis reach</title></polygon>`:""}
          <polygon class="current" points=${hr(o)}></polygon>
          ${i.length?Xe`<polygon class="preview" points=${hr(i)}></polygon>`:""}
          ${E} ${f} ${m}
        </svg>
        <div class="after-chart">
          <slot name="after-chart"></slot>
        </div>
      </div>
    `}_patchRadarState(n){Object.assign(this,n)}_setRadarState(n){let r={axes:n.axes??[],value:ce(n.value??{}),previewValue:n.previewValue?ce(n.previewValue):null,targetValue:n.targetValue?ce(n.targetValue):null,reachableRange:n.reachableRange??{},preferredRange:n.preferredRange??{},selectedKey:n.selectedKey??"",hits:n.hits??[],disabled:!!n.disabled,precision:n.precision==null?null:Number(n.precision),showValues:!!n.showValues,theme:n.theme??{}};this.axes=r.axes,this.value=r.value,this.previewValue=r.previewValue,this.targetValue=r.targetValue,this.reachableRange=r.reachableRange,this.preferredRange=r.preferredRange,this.selectedKey=r.selectedKey,this.hits=r.hits,this.disabled=r.disabled,this.precision=r.precision,this.showValues=r.showValues,this.theme=r.theme}_select(n){this.disabled||(this.selectedKey=n,M(this,"vector-select",{source:"radar",role:"metric",transactionId:k("select"),key:n}))}_startDrag(n,r){this.disabled||n.button>0||(n.preventDefault(),this._select(r),this._drag={key:r,transactionId:k("radar"),startValue:ce(this.value),latest:null},this.pointerDrag.start({move:o=>this._dragMove(o),end:()=>this._dragEnd(),cancel:()=>this._cancelDrag()}))}_dragMove(n){if(!this._drag)return;let r=this._valueFromPoint(n,this._drag.key);this._previewMetric(r)}_dragEnd(){this._drag&&(this._drag.latest&&M(this,"vector-change",this._drag.latest),this._drag=null)}_cancelDrag(){this._drag&&(M(this,"vector-cancel",{source:"radar",role:"metric",transactionId:this._drag.transactionId,previousValue:this._drag.startValue}),this._drag=null)}_keydown(n,r){let o=this._axis(r);if(!o)return;let i=Number(o.step??1),s=null;if(n.key==="ArrowUp"||n.key==="ArrowRight"?s=Number(this.value[r]??0)+i:n.key==="ArrowDown"||n.key==="ArrowLeft"?s=Number(this.value[r]??0)-i:n.key==="Home"?s=Number(o.min??0):n.key==="End"?s=Number(o.max??100):n.key==="Escape"&&(this._cancelDrag(),M(this,"vector-cancel",{source:"radar",role:"metric",transactionId:k("radar-cancel"),previousValue:this.value})),s==null)return;n.preventDefault();let a=this._detailForMetric(r,s,k("radar-key"),this.value);M(this,"vector-preview",a),M(this,"vector-change",a)}_previewMetric(n){let r=this._drag;if(!r)return;let o=this._detailForMetric(r.key,n,r.transactionId,r.startValue);r.latest=o,M(this,"vector-preview",o)}_detailForMetric(n,r,o,i){let s=this._axis(n),a=A(b({},i),{[n]:fe(W(r,s?.min??0,s?.max??100),s?.step??1)});return{source:"radar",role:"metric",transactionId:o,key:n,previousValue:i,requestedValue:a,proposedValue:a,delta:D(Number(a[n]??0)-Number(i[n]??0),4),hits:[]}}_valueFromPoint(n,r){let o=this.svgElement;if(!o)return Number(this.value[r]??0);let i=o.getBoundingClientRect(),s=(n.clientX-i.left)/i.width*260-130,a=(n.clientY-i.top)/i.height*248-124,c=this.axes.findIndex(m=>m.key===r),l=this.axes[c],u=pr(c,this.axes.length),d=Math.cos(u),p=Math.sin(u),f=W((s*d+a*p)/90,0,1);return Number(l?.min??0)+f*(Number(l?.max??100)-Number(l?.min??0))}_axis(n){return this.axes.find(r=>r.key===n)}_places(n){return Number.isFinite(this.precision)?Math.max(0,Number(this.precision)):lr(n.step??1)}_pointsFor(n,r){return this.axes.map((o,i)=>fs(o,Number(n[o.key]??0),i,this.axes.length,r))}_pointsForRange(n,r){return this.axes.map((o,i)=>{let s=this.reachableRange[o.key],a=n==="reachableMax"?s?.max??o.reachableMax??o.max:this.preferredRange[o.key]?.max??o.preferredMax;return a==null?null:fs(o,Number(a),i,this.axes.length,r)}).filter(o=>o!==null)}};Mg=new WeakMap,Ng=new WeakMap,kg=new WeakMap,Ag=new WeakMap,Rg=new WeakMap,Og=new WeakMap,Pg=new WeakMap,Lg=new WeakMap,Vg=new WeakMap,$g=new WeakMap,Fg=new WeakMap,jg=new WeakMap,Hg=new WeakMap,g([St("svg")],me.prototype,"svgElement",1),g([rr()],me.prototype,"_drag",1),g([y({attribute:!1})],me.prototype,"axes",1),g([y({attribute:!1})],me.prototype,"value",1),g([y({attribute:!1})],me.prototype,"previewValue",1),g([y({attribute:!1})],me.prototype,"targetValue",1),g([y({attribute:!1})],me.prototype,"reachableRange",1),g([y({attribute:!1})],me.prototype,"preferredRange",1),g([y({attribute:!1})],me.prototype,"selectedKey",1),g([y({attribute:!1})],me.prototype,"hits",1),g([y({attribute:!1})],me.prototype,"disabled",1),g([y({attribute:!1})],me.prototype,"precision",1),g([y({attribute:!1})],me.prototype,"showValues",1)});var Ug,Bg=h(()=>{"use strict";$();Ug=U`:host {
  display: block;
}`});var Do,Fl=h(()=>{"use strict";$();Ae();be();Bg();Do=class extends K{static{this.styles=Ug}#e={};get state(){return this.#e}set state(e){this.#e=e}render(){return x`<vector-constraint-rail
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
    ></vector-constraint-rail>`}};g([y({attribute:!1})],Do.prototype,"state",1)});var qg,zg=h(()=>{"use strict";$();qg=U`:host {
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
}`});var Co,jl=h(()=>{"use strict";$();Ae();We();et();Tt();zg();be();Mt();he();ve();Co=class extends K{static{this.styles=[ee,qg]}#e;get items(){return this.#e}set items(e){this.#e=e}constructor(){super(),this.items=[],this.theme={}}render(){return x`
      <div class="summary-meter">
        ${this.items.length?re(this.items,e=>e.key,e=>{let n=Cm(e.value,e.thresholds??[]),r=Number(e.min??0),o=Number(e.max??100),i=W((Number(e.value??0)-r)/(o-r||1)*100,0,100);return x`
                  <button
                    type="button"
                    class=${F({"summary-row":!0,[n?.severity||e.severity||"ok"]:!0})}
                    data-key=${e.key}
                    @click=${()=>this._select(e,n)}
                  >
                    <span>${e.label||J(e.key)}</span>
                    <span class="summary-track"
                      ><span
                        ${ie({"--meter-fill":`${i}%`})}
                      ></span
                    ></span>
                    <strong
                      >${Ee(e.value,e.precision??1)}${e.unit||""}</strong
                    >
                  </button>
                `}):x`<div class="quiet">No summary values.</div>`}
      </div>
    `}_select(e,n){M(this,"vector-select",{source:"table",role:"summary",transactionId:k("summary"),key:e.key,thresholdKey:n?.key})}};g([y({attribute:!1})],Co.prototype,"items",1)});var Wg,Gg=h(()=>{"use strict";$();Wg=U`:host {
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
}`});var Be,Hl=h(()=>{"use strict";$();Ae();We();et();Gg();be();he();ve();Be=class extends K{static{this.styles=[ee,Wg]}#e;get options(){return this.#e}set options(e){this.#e=e}#t;get unitKey(){return this.#t}set unitKey(e){this.#t=e}#n;get label(){return this.#n}set label(e){this.#n=e}#r;get groupKey(){return this.#r}set groupKey(e){this.#r=e}#o;get measurementSystem(){return this.#o}set measurementSystem(e){this.#o=e}#i;get basis(){return this.#i}set basis(e){this.#i=e}#s;get measurementScope(){return this.#s}set measurementScope(e){this.#s=e}#a;get measurementMeasure(){return this.#a}set measurementMeasure(e){this.#a=e}#c;get disabled(){return this.#c}set disabled(e){this.#c=e}constructor(){super(),this.options=[],this.unitKey="",this.label="",this.groupKey="",this.measurementSystem="",this.basis="",this.measurementScope="",this.measurementMeasure="",this.disabled=!1,this.theme={}}set state(e){let n=e??{};this.options=n.options??n.unitOptions??[],this.unitKey=n.unitKey??"",this.label=n.label??"",this.groupKey=n.groupKey??n.key??"",this.measurementSystem=n.measurementSystem??"",this.basis=n.basis??"",this.measurementScope=n.measurementScope??"",this.measurementMeasure=n.measurementMeasure??"",this.disabled=n.disabled??!1,this.theme=n.theme??{}}get state(){return{options:this.options,unitKey:this.unitKey,label:this.label,groupKey:this.groupKey,measurementSystem:this.measurementSystem,basis:this.basis,measurementScope:this.measurementScope,measurementMeasure:this.measurementMeasure,disabled:this.disabled,theme:this.theme}}render(){return x`
      <div
        class=${F({"unit-toggle":!0,binary:this.options.length===2})}
        role="group"
        aria-label=${this.label||"Measurement units"}
      >
        ${this.label?x`<span class="toggle-label">${this.label}</span>`:Y}
        <span class="toggle-options">
          ${re(this.options,e=>e.key,e=>{let n=this.unitKey?e.key===this.unitKey:e.system?e.system===this.measurementSystem:e.basis===this.basis||e.scope===this.measurementScope||e.measure===this.measurementMeasure;return x`
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
    `}_select(e){M(this,"vector-change",{source:"inspector",role:"measurement",transactionId:k("unit"),key:this.groupKey,unitKey:e.key,basis:e.basis,measurementScope:e.scope||this.measurementScope,measurementMeasure:e.measure||this.measurementMeasure,measurementSystem:e.system||this.measurementSystem})}};g([y({attribute:!1})],Be.prototype,"options",1),g([y({attribute:!1})],Be.prototype,"unitKey",1),g([y({attribute:!1})],Be.prototype,"label",1),g([y({attribute:!1})],Be.prototype,"groupKey",1),g([y({attribute:!1})],Be.prototype,"measurementSystem",1),g([y({attribute:!1})],Be.prototype,"basis",1),g([y({attribute:!1})],Be.prototype,"measurementScope",1),g([y({attribute:!1})],Be.prototype,"measurementMeasure",1),g([y({attribute:!1})],Be.prototype,"disabled",1)});var Kg,Qg=h(()=>{"use strict";$();Kg=U`:host {
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
}`});var Zg,Yg,So,Ul=h(()=>{"use strict";$();Ae();We();Tt();Qg();Mt();he();ve();cs();be();kl();So=class extends K{constructor(){super();S(this,Zg,"composition");this.scalar=new Wt(this);S(this,Yg);dr(this)}static{this.properties=ur}get role(){return C(this,Zg)}set role(n){T(this,Zg,n)}get sliderElement(){return C(this,Yg)}set sliderElement(n){T(this,Yg,n)}static{this.styles=[ee,Kg]}set state(n){this.scalar.setState(n)}get state(){return this.scalar.state}render(){if(!this.item)return x` <div class="empty">Select an item.</div> `;let n=this.scalar.viewState(),r=n.valueText,o=n.unit,i=this.scalar.unitOption(),s=this.item.description||this.item.summary||this.item.purpose||"",a=this.activeEmphasis&&Math.abs(Number(this.value||0))>1e-9,c=()=>this.sliderElement?.dataset.transaction||k("value-slider");return x`
      <section
        class=${F({"value-slider":!0,active:a,disabled:this.disabled})}
        data-threshold=${n.thresholdKey||""}
      >
        <div class="slider-head">
          <span
            class="swatch"
            ${ie({"--item-color":Ue(this.item,0,this.palette)})}
          ></span>
          <div class="slider-copy">
            <label for="slider"
              >${this.item.label||J(this.item.key)}</label
            >
            ${s?x`<small>${s}</small>`:Y}
          </div>
          <span class="slider-value">
            <output>${r}</output>
            ${this._renderUnit(i,o)}
          </span>
        </div>
        <div class="slider-track">
          <div class="full-track"></div>
          <div class="threshold-track" aria-hidden="true">
            ${ls({thresholds:this.thresholds,value:this.value,percent:l=>this.scalar.pct(l),activeThreshold:l=>this.scalar.thresholdFor(l)})}
          </div>
          <span
            class="current-marker"
            ${ie({"--marker-position":`${n.valuePct}%`})}
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
            @input=${l=>{let u=l.currentTarget;u.dataset.transaction||=k("value-slider"),this._emitSliderValue(Number(u.value),"vector-preview",u.dataset.transaction??c())}}
            @change=${l=>{let u=l.currentTarget,d=u.dataset.transaction??c();delete u.dataset.transaction,this._emitSliderValue(Number(u.value),"vector-change",d)}}
            @keydown=${l=>this._sliderKeydown(l)}
          />
        </div>
      </section>
    `}_renderUnit(n,r){let o=this._unitPickerOptions(),i=Cl(n,r);return this.unitDisplay==="text"?x`<span
        class="unit-text"
        data-unit
        data-unit-key=${n?.key||""}
        title=${n?.label||i}
        >${i}</span
      >`:o.length<=1?x`<span
        class="unit-pill static"
        data-unit
        data-unit-key=${n?.key||""}
        title=${n?.label||i}
        >${i}</span
      >`:x`
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
          ${o.map(s=>x`
              <button
                type="button"
                class=${F({selected:s.key===n?.key})}
                data-unit-option=${s.key}
                role="option"
                aria-selected=${String(s.key===n?.key)}
                @click=${a=>{a.preventDefault(),this.scalar.changeUnit(s.key),this._closeUnitPicker(a.currentTarget)}}
              >
                ${s.label||Cl(s,s.symbol)}
              </button>
            `)}
        </div>
      </details>
    `}_unitPickerOptions(){return this.unitOptions}_closeUnitPicker(n){let r=n.closest("details");r&&(r.open=!1)}_emitSliderValue(n,r,o){if(!this.item?.key)return;let i=this.scalar.unitOption(),s=this.scalar.toCanonical(n),a=fe(s,this.scalar.step()),c=W(a,this.scalar.min(),this.scalar.max()),l=this.scalar.thresholdFor(c);M(this,r,{source:"inspector",role:this.role,transactionId:o,key:this.item.key,previousValue:{[this.item.key]:this.value},requestedValue:{[this.item.key]:a},proposedValue:{[this.item.key]:c},delta:D(c-this.value,4),unitKey:i?.key,basis:i?.basis||this.basis||this.item?.basis,measurementScope:i?.scope||this.measurementScope,measurementMeasure:i?.measure||this.measurementMeasure,displayValue:this.scalar.toDisplay(c),canonicalValue:c,thresholdKey:l?.key,measurementSystem:this.measurementSystem||i?.system,hits:[]})}_sliderKeydown(n){if(n.key!=="Escape")return;let r=n.currentTarget,o=r.dataset.transaction??k("value-slider-cancel");delete r.dataset.transaction,M(this,"vector-cancel",{source:"inspector",role:this.role,transactionId:o,key:this.item?.key})}};Zg=new WeakMap,Yg=new WeakMap,g([St("[data-slider]")],So.prototype,"sliderElement",1)});function Jg(){pe("vector-pie-chart",de),pe("vector-radar-chart",me),pe("vector-constraint-control",qt),pe("vector-constraint-rail",fr),pe("vector-scalar-rail",Do),pe("vector-value-slider",So),pe("vector-quantity-input",hs),pe("vector-unit-toggle",Be),pe("vector-item-list",we),pe("vector-ingredient-list",us),pe("vector-amount-list",ue),pe("vector-choice-control",Nt),pe("vector-summary-meter",Co),pe("oil-search-list",ss),pe("vector-inspector",kt),pe("constraint-feedback-list",_o)}var Bl=h(()=>{"use strict";Il();Sl();Tl();Ml();be();Nl();Al();Rl();Ol();wo();Ll();Vl();$l();Fl();jl();Hl();Ul()});var Xg=h(()=>{"use strict"});var ey=h(()=>{"use strict";Bl();Il();Tt();Bl();Sl();Tl();Ml();lt();Nl();Al();Rl();Ol();wo();Ll();Vl();$l();Fl();jl();ve();Xg();Hl();Ul();Jg()});var ms=h(()=>{"use strict";ey();he()});function zl(t){return t?.referenceData?.sapValues??{}}function ty(t){let{oilWeightG:e,oilVector:n,formulaValues:r,additiveValues:o,selectedAdditives:i,additiveItems:s,document:a}=t,c=a?.referenceData?.density??{},l=zl(a),u=mI(n,c,.92),d=W(Number(r.superfat??5),0,100),p=W(Number(r.lye_concentration??33),1,99),f=Object.entries(n).reduce((P,[w,X])=>P+e*(X/100)*Number(l[w]??0)*(1-d/100),0),m=f*(100-p)/p,E=i.reduce((P,w)=>P+e*(Number(o[w]??0)/100),0),v=i.reduce((P,w)=>{let X=s.find(I=>I.key===w),G=Number(c[X?.material??w]);return Number.isFinite(G)&&G>0?P+e*(Number(o[w]??0)/100)/G:P},0),N=e/u+f/ql(c,"naoh",2.13)+m/ql(c,"distilled_water",1)+v;return{oilWeightG:e,lyeG:D(f,1),liquidG:D(m,1),totalMassG:D(e+f+m+E,1),volumeMl:D(N,1),volumeIn3:D(N/hI,2),oilDensity:D(u,4)}}function mI(t,e,n){let r=cr(t)||100;return Object.entries(t).reduce((o,[i,s])=>o+s/r*ql(e,i,n),0)||n}function ql(t,e,n=1){let r=Number(t?.[e]??t?.[e.toLowerCase()]);return Number.isFinite(r)&&r>0?r:n}function To(t){return t&&typeof t=="object"?t:{}}function In(t){return Number(To(t).density??0)||1}function gs(t,e){return t/100*Number(To(e).oilWeightG??0)}function ys(t,e){return t/Number(To(e).oilWeightG??1)*100}function Wl(t,e){return gs(t,e)/In(e)}function Gl(t,e){return ys(t*In(e),e)}function ny(t,e){let n=To(e),r=Number(n.oilWeightG??0);return t*r/Number(n.totalMassG??(r||1))}function ry(t,e){let n=To(e),r=Number(n.oilWeightG??1);return t*Number(n.totalMassG??(r||1))/r}var hI,Kl=h(()=>{"use strict";ms();hI=16.387064});var oy,iy=h(()=>{"use strict";$();oy=U`:host {
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
}`});function oe(t,e=4){let n=10**e;return Math.round((Number(t??0)+Number.EPSILON)*n)/n}function vs(t,e=.1){let n=Number(e??.1);return oe(Math.round(t/n)*n,gI(n))}function mr(t,e=-1/0,n=1/0){return Math.min(n,Math.max(e,Number(t??0)))}function Re(t){return t.replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function gI(t){let e=String(t);return e.includes(".")?e.split(".")[1].length:0}var Ql=h(()=>{"use strict"});function gr(t={}){return Object.fromEntries(Object.entries(t).map(([e,n])=>[e,Number(n??0)]))}function EI(t=[],e={}){let n=[...t].sort((r,o)=>Number(r.order??0)-Number(o.order??0)).map(r=>r.key);return[...new Set([...n,...Object.keys(e)])]}function ws(t={}){return Object.values(t).reduce((e,n)=>e+Number(n??0),0)}function _s(t={}){return Number.isFinite(Number(t.min))?Number(t.min):0}function Es(t={}){return Number.isFinite(Number(t.max))?Number(t.max):xn}function Oe(t,e,n,r="hard"){return{key:t,type:e,severity:r,message:n}}function Yl(t={},e=xn,n=Object.keys(t)){let r={},o=ws(t),i=n.length?Number(e??xn)/n.length:0;for(let s of n)r[s]=o>0?Number(t[s]??0)*Number(e??xn)/o:i;return Dn(r,{},e,n[0])}function Jl({value:t={},key:e,target:n,constraints:r={},items:o=[],total:i=xn}){let s=EI(o,t).filter(w=>w in t||w===e),a=[],c=Yl(t,i,s),l=gr(c),u=r[e]||{};if(!e||!(e in l))return{vector:Dn(l,r,i,e),hits:[Oe(e||"composition","sum","No active slice was available.")],delta:0};if(u.locked)return{vector:l,hits:[Oe(e,"locked",`${Re(e)} is locked.`)],delta:0};let d=Number(n),p=_s(u),f=Es(u),m=mr(d,p,f);m!==d&&a.push(Oe(e,m<=p?"min":"max",`${Re(e)} hit ${m<=p?"minimum":"maximum"} ${oe(m,2)}%.`)),m=vs(m,u.step??ly);let E=m-l[e];l[e]=m;let v=-E,N=new Set([e]),P=0;for(;fy(v)&&P<II(s);){P+=1;let w=s.filter(I=>{if(N.has(I))return!1;let se=r[I]||{};return se.locked?(a.push(Oe(I,"locked",`${Re(I)} is locked.`)),N.add(I),!1):v<0?CI(l[I],se):SI(l[I],se)});if(!w.length){cy(l,e,v),a.push(Oe(e,"unreachable",`${Re(e)} was clamped because the remaining oils cannot absorb the change.`)),v=0;break}let X=w.reduce((I,se)=>I+ay(l[se]),0),G=!1;for(let I of w){let se=r[I]||{},At=ay(l[I])/X,ge=v*At,Ie=_s(se),Se=Es(se),_=ge;ge<0&&l[I]+ge<Ie?(_=Ie-l[I],l[I]=Ie,N.add(I),a.push(Oe(I,"min",`${Re(I)} hit minimum ${oe(Ie,2)}%.`))):ge>0&&l[I]+ge>Se?(_=Se-l[I],l[I]=Se,N.add(I),a.push(Oe(I,"max",`${Re(I)} hit maximum ${oe(Se,2)}%.`))):l[I]+=_,v=TI(v-_),G=G||DI(_)}if(!G){cy(l,e,v),a.push(Oe(e,"unreachable","No remaining oil can legally move.")),v=0;break}}return{vector:Dn(Is(l,r),r,i,e),hits:wI(a),delta:oe(m-c[e],4)}}function Is(t={},e={}){return Object.fromEntries(Object.entries(t).map(([n,r])=>[n,vs(r,e[n]?.step??ly)]))}function Dn(t={},e={},n=xn,r=null){let o=gr(t),i=Object.keys(o),s=bs(Number(n??xn)-ws(o)),a=0;for(;fy(s)&&a<_I;){a+=1;let c=[r,...i.filter(u=>u!==r)].filter(u=>!!u),l=!1;for(let u of c){let d=e[u]||{};if(d.locked)continue;let p=_s(d),f=Es(d),m=s>0?f-o[u]:o[u]-p;if(!xI(m))continue;let E=Math.sign(s)*Math.min(Math.abs(s),m);o[u]=bs(o[u]+E),s=bs(s-E),l=!0;break}if(!l)break}return o}function dy(t={},e={}){return[...new Set([...Object.keys(t),...Object.keys(e)])].reduce((r,o)=>r+Math.abs(Number(t[o]??0)-Number(e[o]??0)),0)}function wI(t=[]){let e=new Set;return t.filter(n=>{let r=`${n.key}:${n.type}:${n.message}`;return e.has(r)?!1:(e.add(r),!0)})}function II(t){return t.length+bI}function fy(t){return Math.abs(Number(t??0))>Zl}function xI(t){return Number(t??0)>uy}function DI(t){return Math.abs(Number(t??0))>uy}function CI(t,e){return Number(t??0)>_s(e)+Zl}function SI(t,e){return Number(t??0)<Es(e)-Zl}function ay(t){return Math.max(sy,Number(t??sy))}function bs(t){return oe(t,yI)}function TI(t){return oe(t,vI)}function cy(t,e,n){t[e]=bs(Number(t[e]??0)+Number(n??0))}var xn,ly,yI,vI,Zl,uy,sy,bI,_I,Xl=h(()=>{"use strict";Ql();Ql();xn=100,ly=.1,yI=4,vI=7,Zl=1e-7,uy=1e-9,sy=1e-4,bI=8,_I=100});var ut,eu,tu,py,hy,Cn,nu=h(()=>{"use strict";ut={olive_oil:{lauric:0,myristic:0,palmitic:14,stearic:3,ricinoleic:0,oleic:69,linoleic:12,linolenic:1},coconut_oil:{lauric:48,myristic:19,palmitic:9,stearic:3,ricinoleic:0,oleic:8,linoleic:2,linolenic:0},lard:{lauric:0,myristic:1,palmitic:26,stearic:14,ricinoleic:0,oleic:44,linoleic:10,linolenic:1},castor_oil:{lauric:0,myristic:0,palmitic:2,stearic:1,ricinoleic:90,oleic:4,linoleic:4,linolenic:0},shea_butter:{lauric:0,myristic:0,palmitic:4,stearic:42,ricinoleic:0,oleic:46,linoleic:6,linolenic:0},cocoa_butter:{lauric:0,myristic:0,palmitic:26,stearic:34,ricinoleic:0,oleic:35,linoleic:3,linolenic:0},avocado_oil:{lauric:0,myristic:0,palmitic:20,stearic:1,ricinoleic:0,oleic:58,linoleic:12,linolenic:1},sweet_almond_oil:{lauric:0,myristic:0,palmitic:7,stearic:2,ricinoleic:0,oleic:68,linoleic:22,linolenic:0},sunflower_oil:{lauric:0,myristic:0,palmitic:6,stearic:4,ricinoleic:0,oleic:30,linoleic:59,linolenic:1},rice_bran_oil:{lauric:0,myristic:1,palmitic:22,stearic:2,ricinoleic:0,oleic:38,linoleic:34,linolenic:1},palm_oil:{lauric:0,myristic:1,palmitic:44,stearic:5,ricinoleic:0,oleic:39,linoleic:10,linolenic:0},jojoba_oil:{lauric:0,myristic:0,palmitic:2,stearic:1,ricinoleic:0,oleic:12,linoleic:5,linolenic:0}},eu={olive_oil:"#6f8d42",coconut_oil:"#3f7f95",lard:"#b38b59",castor_oil:"#8b5f9d",shea_butter:"#c09654",cocoa_butter:"#8d5a3c",avocado_oil:"#4f9c68",sweet_almond_oil:"#c48a70",sunflower_oil:"#d6a13d",rice_bran_oil:"#9d9a5a",palm_oil:"#b66d4d",jojoba_oil:"#7fa89d"},tu={olive_oil:.134,coconut_oil:.183,lard:.138,castor_oil:.128,shea_butter:.128,cocoa_butter:.137,avocado_oil:.133,sweet_almond_oil:.136,sunflower_oil:.135,rice_bran_oil:.128,palm_oil:.142,jojoba_oil:.069},py=1.4025,hy={oleic:.899,linoleic:1.814,linolenic:2.737,ricinoleic:.86},Cn=[{key:"hardness",label:"Hardness",min:0,max:80,preferredMin:29,preferredMax:54,step:1},{key:"cleansing",label:"Cleansing",min:0,max:40,preferredMin:12,preferredMax:22,step:1},{key:"conditioning",label:"Conditioning",min:0,max:90,preferredMin:44,preferredMax:69,step:1},{key:"bubbly",label:"Bubbly",min:0,max:70,preferredMin:14,preferredMax:46,step:1},{key:"creamy",label:"Creamy",min:0,max:60,preferredMin:16,preferredMax:48,step:1}]});var my=h(()=>{"use strict"});var gy=h(()=>{"use strict"});function vy(t={}){let e=Object.keys(t.oils||{}),n=Object.keys(ut);return[...new Set([...e,...n])].filter(o=>o in ut).map((o,i)=>({key:o,label:Re(o),color:eu[o]||OI(i),order:i,tags:RI(o)}))}function ru(t={}){return Yl(t.oils||{olive_oil:35,coconut_oil:22,lard:36,castor_oil:7},100)}function ou(){return{version:1,oils:ru(),oilConstraints:iu(Object.keys(ut)),batchOilWeightG:1800,measurementSystem:"metric",selectedAdditives:["fragrance","kaolin_clay","sodium_lactate"],formulaChoices:{lye_type:"naoh"},referenceData:{density:{},sapValues:tu,oilProfiles:ut}}}function iu(t=[]){let e={olive_oil:{min:10,max:70,step:1},coconut_oil:{min:5,max:30,step:1},lard:{min:10,max:60,step:1},castor_oil:{min:5,max:10,step:1},shea_butter:{min:0,max:20,step:1},cocoa_butter:{min:0,max:15,step:1},avocado_oil:{min:0,max:30,step:1},sweet_almond_oil:{min:0,max:30,step:1},sunflower_oil:{min:0,max:30,step:1},rice_bran_oil:{min:0,max:40,step:1},palm_oil:{min:0,max:50,step:1},jojoba_oil:{min:0,max:10,step:1}};return Object.fromEntries(t.map(n=>[n,b({},e[n]||{min:0,max:100,step:1})]))}function tt(t={},e=ut){let n=_y(t,e);return{hardness:oe(n.lauric+n.myristic+n.palmitic+n.stearic,1),cleansing:oe(n.lauric+n.myristic,1),conditioning:oe(n.oleic+n.linoleic+n.linolenic+n.ricinoleic,1),bubbly:oe(n.lauric+n.myristic+n.ricinoleic,1),creamy:oe(n.palmitic+n.stearic+n.ricinoleic,1)}}function by(t={},e={},n=ut){let r=_y(t,n),o=Object.entries(hy).reduce((s,[a,c])=>s+Number(r[a]||0)*c,0),i=Object.entries(t||{}).reduce((s,[a,c])=>{let l=Number(e?.[a]??tu[a]??0);return s+Number(c||0)/100*l*py*1e3},0);return oe(i-o,0)}function _y(t={},e=ut){let n={lauric:0,myristic:0,palmitic:0,stearic:0,ricinoleic:0,oleic:0,linoleic:0,linolenic:0};for(let[r,o]of Object.entries(t||{})){let i=e[r];if(!i)continue;let s=Number(o||0)/100;for(let a of Object.keys(n))n[a]+=Number(i[a]||0)*s}return Object.fromEntries(Object.entries(n).map(([r,o])=>[r,oe(o,2)]))}function Ey({oilVector:t,key:e,target:n,oilConstraints:r={},oilItems:o=[]}){let i=Jl({value:t,key:e,target:n,constraints:r,items:o,total:100});return{oilVector:i.vector,qualityVector:tt(i.vector),hits:i.hits,explanations:i.hits.map(s=>s.message)}}function yr({oilVector:t,targetQuality:e,oilConstraints:n={},axes:r=Cn,profiles:o=ut}){let i=Object.keys(t||{}),s=Dn(MI(t,n),n,100,i[0]),a=tt(s,o),c=yy(s,a,e,t),l=kI(n,i);for(let d of l){let p=!0,f=0;for(;p&&f<250;){p=!1,f+=1;let m=s,E=a,v=c;for(let N of i)for(let P of i){if(N===P)continue;let w=NI(s,N,P,d,n);if(!w)continue;let X=tt(w,o),G=yy(w,X,e,t);G+1e-7<v&&(m=w,E=X,v=G,p=!0)}s=m,a=E,c=v}}let u=AI(s,a,e,n,r);return{oilVector:s,qualityVector:a,hits:u,explanations:u.map(d=>d.message),score:c}}function Gt(t,e={},n=Cn){let r={};for(let o of n){let i=yr({oilVector:t,oilConstraints:e,axes:n,targetQuality:{[o.key]:o.min}}),s=yr({oilVector:t,oilConstraints:e,axes:n,targetQuality:{[o.key]:o.max}});r[o.key]={min:oe(i.qualityVector[o.key],1),max:oe(s.qualityVector[o.key],1)}}return r}function MI(t={},e={}){let n=gr(t);for(let[r,o]of Object.entries(n)){let i=e[r]||{};n[r]=mr(o,i.min??0,i.max??100)}return Dn(Is(n,e),e,100,Object.keys(n)[0])}function wy(t,e,n,r,o=[]){let i=A(b({},e),{[n]:b(b({},e[n]||{}),r)}),s=gr(t),a=Number(s[n]||0),c=Number(i[n].min??0),l=Number(i[n].max??100);return(a<c||a>l)&&(s=Jl({value:s,key:n,target:mr(a,c,l),constraints:i,items:o,total:100}).vector),{oilVector:s,oilConstraints:i,qualityVector:tt(s)}}function NI(t,e,n,r,o){let i=o[e]||{},s=o[n]||{};if(i.locked||s.locked)return null;let a=Number(i.min??0),c=Number(s.max??100);if(Number(t[e]||0)-r<a-1e-7||Number(t[n]||0)+r>c+1e-7)return null;let l=gr(t);return l[e]=oe(l[e]-r,4),l[n]=oe(l[n]+r,4),Dn(Is(l,o),o,100,n)}function kI(t={},e=[]){let n=e.reduce((o,i)=>{let s=Number(t[i]?.step||1);return!Number.isFinite(s)||s<=0?o:Math.min(o,s)},1/0),r=Number.isFinite(n)?n:1;return[5,1,.25,.1].filter(o=>o>=r-1e-7)}function yy(t,e,n={},r={}){return Object.entries(n).reduce((i,[s,a])=>{let c=Number(e[s]||0)-Number(a||0);return i+c*c},0)+dy(t,r)*.015}function AI(t,e,n,r,o){let i=[];for(let[s,a]of Object.entries(n)){let c=Number(e[s]||0);if(Math.abs(c-Number(a))>.6){let l=o.find(u=>u.key===s);i.push(Oe(s,"unreachable",`${l?.label||Re(s)} reached ${oe(c,1)} instead of ${oe(a,1)} with the selected oils.`))}}for(let[s,a]of Object.entries(t||{})){let c=r[s]||{};if(c.locked){i.push(Oe(s,"locked",`${Re(s)} is locked.`));continue}c.min!=null&&Math.abs(Number(a)-Number(c.min))<.05&&i.push(Oe(s,"min",`${Re(s)} hit minimum ${oe(c.min,2)}%.`)),c.max!=null&&Math.abs(Number(a)-Number(c.max))<.05&&i.push(Oe(s,"max",`${Re(s)} hit maximum ${oe(c.max,2)}%.`))}return Math.abs(ws(t)-100)>.01&&i.push(Oe("composition","sum","Oil percentages must add to 100%.")),i}function RI(t){let e=new Set(["coconut_oil","lard","shea_butter","cocoa_butter","palm_oil"]),n=new Set(["olive_oil","avocado_oil","sweet_almond_oil","sunflower_oil","rice_bran_oil","jojoba_oil"]),r=new Set(["coconut_oil","castor_oil"]);return[e.has(t)?"hard":null,n.has(t)?"liquid":null,r.has(t)?"lather":null].filter(o=>o!==null)}function OI(t){let e=["#426a8c","#d9824b","#6f8d42","#8b5f9d","#9d9a5a","#c48a70"];return e[t%e.length]}var su=h(()=>{"use strict";Xl();nu();my();Xl();gy();nu()});function ix(){globalThis.customElements&&!customElements.get("recipe-vector-workbench")&&customElements.define("recipe-vector-workbench",cu)}var PI,LI,VI,Ds,Cs,Ss,Iy,au,$I,FI,jI,HI,UI,BI,qI,zI,WI,GI,KI,QI,ZI,YI,JI,XI,ex,tx,nx,Pe,dt,rx,ox,xs,xy,cu,Dy=h(()=>{"use strict";$();We();et();ms();Kl();iy();su();ms();PI=String.fromCodePoint(128274),LI=String.fromCodePoint(8805),VI=String.fromCodePoint(8804),Ds=28.3495,Cs=453.592,Ss=29.5735,Iy=16.387064,au={key:"percent_oils",label:"% oils",basis:"percent_oils",scope:"oils",measure:"scalar",symbol:"%",precision:1,step:.1},$I={key:"percent_batch",label:"% batch",basis:"percent_batch",scope:"batch",measure:"scalar",symbol:"%",precision:1,step:.1,fromCanonical:(t,e)=>ny(t,e),toCanonical:(t,e)=>ry(t,e)},FI={key:"g_per_kg_oils",label:"g/kg oils",system:"metric",basis:"weight",scope:"oils",measure:"weight",symbol:" g/kg",precision:0,step:1,fromCanonical:t=>Number(t||0)*10,toCanonical:t=>Number(t||0)/10},jI={key:"oz_per_lb_oils",label:"oz/lb oils",system:"imperial",basis:"weight",scope:"oils",measure:"weight",symbol:" oz/lb",precision:2,step:.05,fromCanonical:t=>Number(t||0)*.16,toCanonical:t=>Number(t||0)/.16},HI={key:"g_batch",label:"g",system:"metric",basis:"weight",scope:"batch",measure:"weight",symbol:" g",precision:1,step:1,fromCanonical:(t,e)=>gs(t,e),toCanonical:(t,e)=>ys(t,e)},UI={key:"oz_batch",label:"oz",system:"imperial",basis:"weight",scope:"batch",measure:"weight",symbol:" oz",precision:2,step:.05,fromCanonical:(t,e)=>gs(t,e)/Ds,toCanonical:(t,e)=>ys(Number(t||0)*Ds,e)},BI={key:"ml_per_kg_oils",label:"ml/kg oils",system:"metric",basis:"volume",scope:"oils",measure:"volume",symbol:" ml/kg",precision:0,step:1,fromCanonical:(t,e)=>Number(t||0)*10/In(e),toCanonical:(t,e)=>Number(t||0)*In(e)/10},qI={key:"ml_batch",label:"ml",system:"metric",basis:"volume",scope:"batch",measure:"volume",symbol:" ml",precision:1,step:1,fromCanonical:(t,e)=>Wl(t,e),toCanonical:(t,e)=>Gl(t,e)},zI={key:"floz_per_lb_oils",label:"fl oz/lb oils",system:"imperial",basis:"volume",scope:"oils",measure:"volume",symbol:" fl oz/lb",precision:2,step:.05,fromCanonical:(t,e)=>Number(t||0)/100*Cs/In(e)/Ss,toCanonical:(t,e)=>Number(t||0)*Ss*In(e)/Cs*100},WI={key:"floz_batch",label:"fl oz",system:"imperial",basis:"volume",scope:"batch",measure:"volume",symbol:" fl oz",precision:2,step:.05,fromCanonical:(t,e)=>Wl(t,e)/Ss,toCanonical:(t,e)=>Gl(Number(t||0)*Ss,e)},GI=[{key:"metric",label:"Metric",system:"metric",symbol:"g"},{key:"imperial",label:"Imperial",system:"imperial",symbol:"oz"}],KI=[{key:"oils",label:"Oils",scope:"oils"},{key:"batch",label:"Total",scope:"batch"}],QI=[{key:"weight",label:"Weight",measure:"weight"},{key:"volume",label:"Volume",measure:"volume"}],ZI={key:"g",label:"g",system:"metric",basis:"weight",measure:"weight",symbol:" g",precision:0,step:25},YI={key:"kg",label:"kg",system:"metric",basis:"weight",measure:"weight",symbol:" kg",precision:2,step:.05,fromCanonical:t=>Number(t||0)/1e3,toCanonical:t=>Number(t||0)*1e3},JI={key:"oz",label:"oz",system:"imperial",basis:"weight",measure:"weight",symbol:" oz",precision:1,step:1,fromCanonical:t=>Number(t||0)/Ds,toCanonical:t=>Number(t||0)*Ds},XI={key:"lb",label:"lb",system:"imperial",basis:"weight",measure:"weight",symbol:" lb",precision:2,step:.1,fromCanonical:t=>Number(t||0)/Cs,toCanonical:t=>Number(t||0)*Cs},ex={key:"ml",label:"ml",system:"metric",basis:"volume",measure:"volume",symbol:" ml",precision:0,step:50},tx={key:"l",label:"L",system:"metric",basis:"volume",measure:"volume",symbol:" L",precision:2,step:.05,fromCanonical:t=>Number(t||0)/1e3,toCanonical:t=>Number(t||0)*1e3},nx={key:"in3",label:"in3",system:"imperial",basis:"volume",measure:"volume",symbol:" in3",precision:1,step:1,fromCanonical:t=>Number(t||0)/Iy,toCanonical:t=>Number(t||0)*Iy},Pe=[{key:"oil_weight_g",label:"Oil weight",defaultValue:1800,min:250,max:1e4,step:25,defaultUnitKey:"g",unitOptions:[ZI,YI,JI,XI]},{key:"batch_volume_ml",label:"Batch volume",defaultValue:3e3,min:400,max:16e3,step:25,defaultUnitKey:"ml",unitOptions:[ex,tx,nx]}],dt=[{key:"superfat",label:"Superfat",unit:"%",defaultValue:5,min:0,max:15,step:.5,defaultUnitKey:"percent_oils",unitOptions:[au],thresholds:[{key:"lean",min:0,max:2.9,severity:"warn",label:"Low superfat can feel lean."},{key:"balanced",min:3,max:7,severity:"ok",label:"Balanced superfat range."},{key:"rich",min:7.1,max:10,severity:"warn",label:"Higher superfat can soften bars."},{key:"very_rich",min:10.1,max:15,severity:"danger",label:"Very high superfat may shorten shelf life."}]},{key:"lye_concentration",label:"Lye concentration",unit:"%",defaultValue:33,min:25,max:45,step:.5,defaultUnitKey:"percent_oils",unitOptions:[au],thresholds:[{key:"loose",min:25,max:27.9,severity:"warn",label:"Extra water slows unmolding."},{key:"friendly",min:28,max:35,severity:"ok",label:"Friendly cold-process range."},{key:"fast",min:35.1,max:40,severity:"warn",label:"Higher concentration can speed trace."},{key:"advanced",min:40.1,max:45,severity:"danger",label:"Advanced lye concentration."}]}],rx={key:"lye_type",label:"Lye type"},ox=[{key:"naoh",label:"NaOH"},{key:"koh",label:"KOH"},{key:"blend",label:"Blend"}],xs=[au,$I,FI,HI,jI,UI,BI,qI,zI,WI],xy=[{key:"fragrance",label:"Fragrance",summary:"Scent load for the finished bar.",type:"fragrance",category:"scent",material:"fragrance_oil",color:"#8b5f9d",defaultValue:3.1,min:0,max:6,step:.1,defaultUnitKey:"percent_oils",unitOptions:xs,tags:["scent","ifra"],thresholds:[{key:"light",min:0,max:2.9,severity:"ok",label:"Light scent load."},{key:"standard",min:3,max:4.9,severity:"ok",label:"Typical scent load."},{key:"high",min:5,max:5.7,severity:"warn",label:"High scent load; check acceleration."},{key:"ifra_limit",min:5.8,max:6,severity:"danger",label:"Near supplier or IFRA maximum."}]},{key:"kaolin_clay",label:"Kaolin clay",summary:"Adds slip and can anchor scent.",type:"clay",category:"additive",material:"kaolin_clay",color:"#9d9a5a",defaultValue:.6,min:0,max:2,step:.1,defaultUnitKey:"percent_oils",unitOptions:xs,tags:["clay","slip"],thresholds:[{key:"light",min:0,max:.7,severity:"ok",label:"Light clay load."},{key:"noticeable",min:.8,max:1.4,severity:"warn",label:"Clay may affect slip and trace."},{key:"heavy",min:1.5,max:2,severity:"danger",label:"Heavy clay can feel draggy."}]},{key:"sodium_lactate",label:"Sodium lactate",summary:"Helps harden bars for unmolding.",type:"hardener",category:"additive",material:"sodium_lactate",color:"#426a8c",defaultValue:2,min:0,max:3,step:.1,defaultUnitKey:"percent_oils",unitOptions:xs,tags:["hardener"],thresholds:[{key:"normal",min:0,max:2,severity:"ok",label:"Typical hardening support."},{key:"brittle",min:2.1,max:3,severity:"warn",label:"Too much may make bars brittle."}]},{key:"botanicals",label:"Botanicals",summary:"Visual texture or top decoration.",type:"botanical",category:"decoration",material:"botanicals",color:"#6f8d42",defaultValue:.2,min:0,max:1,step:.1,defaultUnitKey:"percent_oils",unitOptions:xs,tags:["decoration","texture"],thresholds:[{key:"sprinkle",min:0,max:.3,severity:"ok",label:"Light decoration."},{key:"scratch",min:.4,max:1,severity:"warn",label:"Botanicals can brown or scratch."}]}],cu=class extends ct{static{this.styles=oy}constructor(){super(),this._document=null,this._initialized=!1,this._oilItems=[],this._oilVector={},this._oilConstraints={},this._qualityAxes=Cn,this._qualityConstraints={},this._qualityVector={hardness:0,cleansing:0,conditioning:0,bubbly:0,creamy:0},this._reachableRange={hardness:{min:0,max:0},cleansing:{min:0,max:0},conditioning:{min:0,max:0},bubbly:{min:0,max:0},creamy:{min:0,max:0}},this._selectedOil="",this._selectedQuality="hardness",this._selectionRole="composition",this._preview=null,this._hits=[],this._history=[],this._future=[],this._theme=ts,this._palette=le,this._pendingPreviewDetail=null,this._previewFrame=0,this._measurementSystem="metric",this._measurementUnitKey="metric",this._measurementScope="oils",this._measurementScopeKey="oils",this._measurementMeasure="weight",this._measurementMeasureKey="weight",this._measurementBasis="weight",this._batchOilWeightG=1800,this._unitPreferences={},this._formulaValues=Object.fromEntries([...Pe,...dt].map(e=>[e.key,e.defaultValue??0])),this._formulaConstraints=Object.fromEntries([...Pe,...dt].map(e=>[e.key,{min:e.min,max:e.max,step:e.step}])),this._formulaChoices={lye_type:"naoh"},this._additiveItems=xy,this._selectedAdditives=["fragrance","kaolin_clay","sodium_lactate"],this._additiveValues=this._initialAdditiveValues(),this._additiveConstraints=Object.fromEntries(xy.map(e=>[e.key,{min:e.min,max:e.max,step:e.step}])),this._selectedAdditive="fragrance",this._scalarPreview=null}set document(e){this._document=e,this._initialized?(this._loadDocument(e||{version:1,oils:{}}),this.requestUpdate()):this._loadDocument(e||{version:1,oils:{}})}get document(){return this._document}set theme(e){let n=this._theme;this._theme=b(b({},ts),e||{}),this.isConnected&&En(this,this._theme,n),this.requestUpdate()}get theme(){return this._theme}set palette(e){this._palette=Array.isArray(e)&&e.length?e:le,this.requestUpdate()}get palette(){return this._palette}connectedCallback(){super.connectedCallback(),En(this,this._theme),!this._initialized&&this._document?this._loadDocument(this._document):this._initialized?this.requestUpdate():this.requestUpdate()}render(){if(!this._initialized)return x`<div class="empty">Loading recipe design tools.</div>`;let e=this._preview?.qualityVector||this._qualityVector,n=this._activeReachableRange(),r=this._preview?.oilVector||this._oilVector,o=this._activeOilConstraints(),i=this._activeFormulaValues(),s=this._activeAdditiveValues(),a=this._batchContext(r,i,s),c=Pe.find(_=>_.key==="oil_weight_g")||Pe[0],l=Pe.find(_=>_.key==="batch_volume_ml")||Pe[1],u=this._additiveItemsForContext(a),d=this._scalarHits(i,s),p=[...this._activeHits(),...d],f=this._selectedOilItems(),m=this._oilItems.find(_=>_.key===this._selectedOil),E=Object.fromEntries(dt.map(_=>[_.key,_.thresholds||[]])),v=Object.fromEntries(u.map(_=>[_.key,_.thresholds||[]])),N=this._formulaSummary(i,s),P=this._activeMeasurementBasis(),w=by(r,zl(this._document)),X={items:f,value:r,constraints:o,total:100,selectedKey:this._selectedOil,hits:p,precision:0,centerValue:w,centerLabel:"INS",centerPrecision:0,theme:this._theme,palette:this._palette},G={axes:this._qualityAxes.map(_=>A(b({},_),{reachableMin:n[_.key]?.min,reachableMax:n[_.key]?.max})),value:this._qualityVector,previewValue:this._preview?.qualityVector||null,targetValue:this._preview?.targetQuality||null,reachableRange:n,selectedKey:this._selectedQuality,hits:p,precision:1,showValues:!0,theme:this._theme},I={item:m||null,value:r[this._selectedOil]||0,constraint:o[this._selectedOil]||{},role:"composition",hits:p,rangeMin:0,rangeMax:100,precision:0,theme:this._theme,palette:this._palette,variant:"embedded"},se=new Set(Object.entries(o||{}).filter(([,_])=>_?.locked).map(([_])=>_)),At=new Set(p.filter(_=>_.type==="locked").map(_=>_.key)),ge=new Set(Object.keys(o||{})),Ie=new Map(p.filter(_=>(_.type==="min"||_.type==="max")&&ge.has(_.key)).map(_=>[JSON.stringify([_.type,_.key]),_])),Se=[...[...se].map(_=>x`
          <span
            slot="slice-decorator"
            data-lock-badge
            data-key=${_}
            class=${F({"pie-lock-badge":!0,hit:At.has(_)})}
            aria-hidden="true"
            title=${`${this._labelForKey(_)} locked`}
            >${PI}</span
          >
        `),...[...Ie.values()].map(_=>x`
          <span
            slot="slice-decorator"
            data-limit-badge
            data-key=${_.key}
            data-limit-type=${_.type}
            class=${F({"pie-limit-badge":!0,[_.type]:!0,[_.severity||"hard"]:!0,hit:!0})}
            aria-hidden="true"
            title=${`${this._labelForKey(_.key)} ${_.type==="min"?"minimum":"maximum"} reached`}
          >
            ${_.type==="min"?LI:VI}
          </span>
        `)];return x`
      <section
        class="workbench"
        @vector-select=${_=>this._handleSelect(_.detail)}
        @vector-preview=${_=>this._handlePreview(_.detail)}
        @vector-change=${_=>this._handleChange(_.detail)}
        @vector-cancel=${()=>this._cancelPreview()}
        @vector-constraint-hit=${_=>this._handleConstraintHit(_.detail)}
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
              .axes=${G.axes}
              .value=${G.value}
              .previewValue=${G.previewValue}
              .targetValue=${G.targetValue}
              .reachableRange=${G.reachableRange}
              .selectedKey=${G.selectedKey}
              .hits=${G.hits}
              .precision=${G.precision}
              .showValues=${G.showValues}
            ></vector-radar-chart>
            <div class="quality-rail-list">
              ${re(this._qualityAxes,_=>_.key,_=>this._qualityRow(_,e,n))}
            </div>
          </article>

          <article class="surface chart-card">
            <div class="card-heading">
              <h3>Oil Blend</h3>
              <span
                >${D(cr(this._preview?.oilVector||this._oilVector),1)}%</span
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
              ${Se}
              <vector-constraint-rail
                slot="after-legend"
                data-oil-rail
                .item=${I.item}
                .value=${I.value}
                .constraint=${I.constraint}
                .role=${I.role}
                .hits=${I.hits}
                .rangeMin=${I.rangeMin}
                .rangeMax=${I.rangeMax}
                .precision=${I.precision}
                .palette=${I.palette}
                .variant=${I.variant}
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
                  .options=${GI}
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
                .item=${rx}
                .options=${ox}
                .value=${this._formulaChoices.lye_type}
                .role=${"formula_choice"}
              ></vector-choice-control>
              <vector-amount-list
                .items=${dt}
                .values=${i}
                .constraints=${this._formulaConstraints}
                .thresholds=${E}
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
                  .options=${KI}
                  .unitKey=${this._measurementScopeKey}
                  .measurementScope=${this._measurementScope}
                ></vector-unit-toggle>
                <vector-unit-toggle
                  .label=${"Measure"}
                  .groupKey=${"measure"}
                  .options=${QI}
                  .unitKey=${this._measurementMeasureKey}
                  .measurementMeasure=${this._measurementMeasure}
                ></vector-unit-toggle>
              </div>
              <vector-amount-list
                .items=${u}
                .values=${s}
                .constraints=${this._additiveConstraints}
                .thresholds=${v}
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
    `}_loadDocument(e){this._oilItems=vy(e),this._oilVector=ru(e),this._oilConstraints=b(b({},iu(this._oilItems.map(r=>r.key))),e.oilConstraints||{}),this._qualityAxes=Cn,this._qualityConstraints=Object.fromEntries(this._qualityAxes.map(r=>[r.key,{min:r.min,max:r.max,preferredMin:r.preferredMin,preferredMax:r.preferredMax,step:r.step||1}])),this._qualityVector=tt(this._oilVector),this._reachableRange=Gt(this._oilVector,this._oilConstraints,this._qualityAxes),this._selectedOil=Object.keys(this._oilVector)[0]||"",this._selectedQuality=this._qualityAxes[0]?.key||"",this._selectionRole="composition",this._preview=null,this._hits=[],this._history=[],this._future=[],this._measurementSystem=e.measurementSystem||"metric",this._measurementUnitKey=this._measurementSystem,this._measurementScope="oils",this._measurementScopeKey="oils",this._measurementMeasure="weight",this._measurementMeasureKey="weight",this._measurementBasis="weight",this._batchOilWeightG=Number(e.batchOilWeightG||1800),this._unitPreferences=b({},e.unitPreferences||{});let n=Object.fromEntries([...Pe,...dt].map(r=>[r.key,r.defaultValue??0]));this._formulaValues=b(b({},n),e.formulaValues||{}),this._formulaValues.oil_weight_g=this._batchOilWeightG,this._formulaChoices=b({lye_type:"naoh"},e.formulaChoices||{}),this._selectedAdditives=[...e.selectedAdditives||["fragrance","kaolin_clay","sodium_lactate"]],this._additiveValues=b(b({},this._initialAdditiveValues()),e.additiveValues||{}),this._selectedAdditive=this._selectedAdditives[0]||"fragrance",this._scalarPreview=null,this._initialized=!0,this.requestUpdate()}_initialAdditiveValues(){let e=new Set(this._selectedAdditives||[]);return Object.fromEntries(this._additiveItems.map(n=>[n.key,e.has(n.key)?n.defaultValue??0:0]))}_emitDocument(e){let n={version:1,oils:ce(this._oilVector),oilConstraints:structuredClone(this._oilConstraints),formulaValues:b({},this._formulaValues),formulaChoices:b({},this._formulaChoices),selectedAdditives:[...this._selectedAdditives],additiveValues:b({},this._additiveValues),batchOilWeightG:this._batchOilWeightG,measurementSystem:this._measurementSystem,unitPreferences:b({},this._unitPreferences),referenceData:this._document?.referenceData};this._document=n,this.dispatchEvent(new CustomEvent("calculator-change",{detail:{document:n,source:e},bubbles:!0,composed:!0}))}_handleSelect(e){let{source:n,role:r,key:o}=e;if(o){if(this._additiveItems.some(i=>i.key===o)||[...Pe,...dt].some(i=>i.key===o)){this._selectedAdditive=o,this.requestUpdate();return}r==="metric"||this._qualityAxes.some(i=>i.key===o)?(this._selectedQuality=o,this._selectionRole="metric"):n==="constraint"&&this._qualityAxes.some(i=>i.key===o)?(this._selectedQuality=o,this._selectionRole="metric"):(this._selectedOil=o,this._selectionRole="composition"),this.requestUpdate()}}_handlePreview(e){this._queuePreview(e)}_queuePreview(e){if(this._pendingPreviewDetail=e||{},this._previewFrame)return;let n=()=>{this._previewFrame=0;let o=this._pendingPreviewDetail;this._pendingPreviewDetail=null,o&&this._applyPreview(o)},r=globalThis.requestAnimationFrame;if(typeof r!="function"){n();return}this._previewFrame=r(n)}_flushPreview(){if(!this._pendingPreviewDetail)return;if(this._previewFrame){let n=globalThis.cancelAnimationFrame;typeof n=="function"&&n(this._previewFrame),this._previewFrame=0}let e=this._pendingPreviewDetail;this._pendingPreviewDetail=null,this._applyPreview(e)}_clearPendingPreview(){if(this._pendingPreviewDetail=null,!this._previewFrame)return;let e=globalThis.cancelAnimationFrame;typeof e=="function"&&e(this._previewFrame),this._previewFrame=0}_applyPreview(e){if(e.role==="additive"||e.role==="formula"){this._previewScalar(e);return}if(e.role==="constraint"){this._previewConstraint(e);return}if(e.role==="composition"){let n=this._solveCompositionDetail(e);this._preview={transactionId:e.transactionId,oilVector:n.oilVector,qualityVector:n.qualityVector,oilConstraints:this._oilConstraints,qualityConstraints:this._qualityConstraints,reachableRange:this._reachableRange,hits:n.hits},this.requestUpdate();return}if(e.role==="metric"){let n=this._metricTarget(e),r=yr({oilVector:this._oilVector,targetQuality:n,oilConstraints:this._activeOilConstraints(),axes:this._qualityAxes});this._preview={transactionId:e.transactionId,oilVector:r.oilVector,qualityVector:r.qualityVector,oilConstraints:this._oilConstraints,qualityConstraints:this._qualityConstraints,reachableRange:this._reachableRange,targetQuality:n,hits:r.hits},this.requestUpdate()}}_handleChange(e){if(this._flushPreview(),e.role==="measurement"){this._changeMeasurement(e);return}if(e.role==="formula_choice"){this._formulaChoices=A(b({},this._formulaChoices),{[e.key]:String(e.value??"")}),this.requestUpdate(),this._emitDocument("formula");return}if(e.role==="selection"){if(e.listType==="ingredient"||this._additiveItems.some(n=>n.key===e.key)){this._changeAdditiveSelection(e.key,e.action);return}this._changeOilSelection(e.key,e.action);return}if(e.role==="additive"||e.role==="formula"){this._commitScalar(e);return}if(e.role==="constraint"){if(this._commitConstraintPreview(e))return;this._changeConstraint(e);return}if(e.role==="composition"){let n=this._solveCompositionDetail(e);this._commitOilVector(n.oilVector,n.hits);return}if(e.role==="metric"){let n=this._metricTarget(e),r=yr({oilVector:this._oilVector,targetQuality:n,oilConstraints:this._activeOilConstraints(),axes:this._qualityAxes});this._commitOilVector(r.oilVector,r.hits)}}_handleConstraintHit(e){this._hits=e.hits||[],e.key&&(this._additiveItems.some(n=>n.key===e.key)||dt.some(n=>n.key===e.key)?this._selectedAdditive=e.key:this._qualityAxes.some(n=>n.key===e.key)?(this._selectedQuality=e.key,this._selectionRole="metric"):(this._selectedOil=e.key,this._selectionRole="composition")),this.requestUpdate()}_previewScalar(e){let n=e.key,r=e.role,o=r==="formula"?this._formulaValues:this._additiveValues,i=this._scalarTarget(e,o[n]??0),s=r==="formula"?this._resolveFormulaValues(A(b({},o),{[n]:i}),n,i):A(b({},o),{[n]:i});this._scalarPreview={scope:r,key:n,values:s,hits:this._scalarHits(r==="formula"?s:this._formulaValues,r==="additive"?s:this._additiveValues)},this.requestUpdate()}_commitScalar(e){let n=e.key,r=e.role,o=this._scalarTarget(e,r==="formula"?this._formulaValues[n]:this._additiveValues[n]);if(r==="formula"){let i=this._resolveFormulaValues(A(b({},this._formulaValues),{[n]:o}),n,o);this._batchOilWeightG=Number(i.oil_weight_g||this._batchOilWeightG),this._formulaValues=i}else this._additiveValues=A(b({},this._additiveValues),{[n]:o}),this._selectedAdditives=this._activeAdditiveKeys(this._additiveValues);this._scalarPreview=null,this.requestUpdate(),this._emitDocument(r==="formula"?"formula":"additive")}_scalarTarget(e,n=0){let r=e.key;return Number(e.canonicalValue??e.proposedValue?.[r]??e.requestedValue?.[r]??n??0)}_changeMeasurement(e){if(e.key==="system"){this._measurementUnitKey=e.unitKey||this._measurementUnitKey,this._measurementSystem=e.measurementSystem||this._measurementSystem,this._unitPreferences={},this.requestUpdate(),this._emitDocument("measurement");return}if(e.key==="scope"){this._measurementScopeKey=e.unitKey||this._measurementScopeKey,this._measurementScope=e.measurementScope||(e.unitKey==="oils"||e.unitKey==="batch"?e.unitKey:this._measurementScope),this._measurementBasis=this._activeMeasurementBasis(),this._unitPreferences={},this.requestUpdate(),this._emitDocument("measurement");return}if(e.key==="measure"){this._measurementMeasureKey=e.unitKey||this._measurementMeasureKey,this._measurementMeasure=e.measurementMeasure||(e.unitKey==="weight"||e.unitKey==="volume"||e.unitKey==="scalar"?e.unitKey:this._measurementMeasure),this._measurementBasis=this._activeMeasurementBasis(),this._unitPreferences={},this.requestUpdate(),this._emitDocument("measurement");return}if(e.key&&e.unitKey){this._unitPreferences=A(b({},this._unitPreferences),{[e.key]:e.unitKey}),this.requestUpdate(),this._emitDocument("measurement");return}this._measurementUnitKey=e.unitKey||this._measurementUnitKey,this._measurementSystem=e.measurementSystem||this._measurementSystem,this._measurementBasis=e.basis||this._activeMeasurementBasis(),this.requestUpdate(),this._emitDocument("measurement")}_changeAdditiveSelection(e,n){if(!e)return;let r=new Set(this._selectedAdditives),o=this._additiveItems.find(i=>i.key===e);n==="remove"?r.delete(e):(r.add(e),!(e in this._additiveValues)&&o&&(this._additiveValues=A(b({},this._additiveValues),{[e]:o.defaultValue??0}))),this._selectedAdditives=[...r],this._selectedAdditive=e,this._scalarPreview=null,this.requestUpdate(),this._emitDocument("selection")}_previewConstraint(e){let n=this._resolveConstraintPreview(e);this._preview=n,this.requestUpdate()}_commitConstraintPreview(e){return!this._preview||this._preview.transactionId!==e.transactionId||!this._preview.constraintRole?!1:(this._pushHistory(),this._oilVector=ce(this._preview.oilVector||this._oilVector),this._qualityVector=b({},this._preview.qualityVector),this._oilConstraints=this._preview.oilConstraints||this._oilConstraints,this._qualityConstraints=this._preview.qualityConstraints||this._qualityConstraints,this._reachableRange=this._preview.reachableRange||Gt(this._oilVector,this._oilConstraints,this._qualityAxes),this._hits=this._preview.hits||[],this._preview=null,this._future=[],this.requestUpdate(),this._emitDocument("constraint"),!0)}_resolveConstraintPreview(e){return e.constraintRole!=="composition"?this._resolveQualityConstraintPreview(e):this._resolveOilConstraintPreview(e)}_resolveOilConstraintPreview(e){let n=e.key,r=this._oilConstraints,o=this._oilVector,i=this._constraintPatchForLockedValue(n,e.constraint||{},r[n]||{},Number(o[n]||0),"%"),s=wy(o,r,n,i.constraint,this._selectedOilItems()),a=Gt(s.oilVector,s.oilConstraints,this._qualityAxes);return{transactionId:e.transactionId,constraintRole:"composition",oilVector:s.oilVector,oilConstraints:s.oilConstraints,qualityVector:s.qualityVector,qualityConstraints:this._qualityConstraints,reachableRange:a,hits:i.hits}}_resolveQualityConstraintPreview(e){let n=e.key,r=this._qualityConstraints,o=Number(this._qualityVector[n]||0),i=this._constraintPatchForLockedValue(n,e.constraint||{},r[n]||{},o,""),s=A(b({},r),{[n]:b(b({},r[n]||{}),i.constraint)}),a=s[n]||{},c=W(o,Number(a.min??-1/0),Number(a.max??1/0)),l=this._oilVector,u=this._qualityVector,d=i.hits;if(!d.length&&Number.isFinite(c)&&Math.abs(c-o)>.001){let p=yr({oilVector:this._oilVector,targetQuality:A(b({},this._qualityVector),{[n]:c}),oilConstraints:this._oilConstraints,axes:this._qualityAxes});l=p.oilVector,u=p.qualityVector,d=p.hits||[]}return{transactionId:e.transactionId,constraintRole:"metric",oilVector:l,oilConstraints:this._oilConstraints,qualityVector:u,qualityConstraints:s,reachableRange:this._reachableRange,hits:d}}_constraintPatchForLockedValue(e,n,r,o,i){let a=!!b(b({},r),n).locked,c=b({},n),l=[];return a&&n.min!=null&&Number(n.min)>o&&(c.min=o,l.push(_e(e,"locked",`${this._labelForKey(e)} is locked at ${D(o,1)}${i}.`))),a&&n.max!=null&&Number(n.max)<o&&(c.max=o,l.push(_e(e,"locked",`${this._labelForKey(e)} is locked at ${D(o,1)}${i}.`))),{constraint:c,hits:l}}_solveCompositionDetail(e){if(e.proposedValue&&Object.keys(e.proposedValue).length>1){let o=ce(e.proposedValue);return{oilVector:o,qualityVector:tt(o),hits:e.hits||[]}}let n=e.key,r=Number(e.proposedValue?.[n]??e.requestedValue?.[n]??this._oilVector[n]??0);return Ey({oilVector:this._oilVector,key:n,target:r,oilConstraints:this._activeOilConstraints(),oilItems:this._selectedOilItems()})}_metricTarget(e){let n=e.key;return e.requestedValue&&Object.keys(e.requestedValue).length>1?e.requestedValue:A(b({},this._qualityVector),{[n]:Number(e.proposedValue?.[n]??e.requestedValue?.[n]??this._qualityVector[n]??0)})}_changeConstraint(e){this._preview=this._resolveConstraintPreview(e),this._commitConstraintPreview(e)}_changeOilSelection(e,n){if(e){if(this._pushHistory(),n==="add"&&!(e in this._oilVector))this._oilVector=A(b({},this._oilVector),{[e]:0}),this._selectedOil=e;else if(n==="remove"&&e in this._oilVector){if(Number(this._oilVector[e]||0)>0){let r=is({value:this._oilVector,key:e,target:0,constraints:this._oilConstraints,items:this._selectedOilItems(),total:100});this._oilVector=r.vector,this._hits=r.hits}delete this._oilVector[e],this._selectedOil=Object.keys(this._oilVector)[0]||""}this._qualityVector=tt(this._oilVector),this._reachableRange=Gt(this._oilVector,this._oilConstraints,this._qualityAxes),this._preview=null,this._future=[],this.requestUpdate(),this._emitDocument("selection")}}_commitOilVector(e,n=[]){if(_m(this._oilVector,e)<.001){this._preview=null,this._hits=n,this.requestUpdate();return}this._pushHistory(),this._oilVector=ce(e),this._qualityVector=tt(this._oilVector),this._reachableRange=Gt(this._oilVector,this._oilConstraints,this._qualityAxes),this._preview=null,this._hits=n,this._future=[],this.requestUpdate(),this._emitDocument("composition")}_pushHistory(){this._history=[...this._history,ce(this._oilVector)].slice(-50)}_undo(){let e=this._history.at(-1);e&&(this._future=[ce(this._oilVector),...this._future].slice(0,50),this._history=this._history.slice(0,-1),this._oilVector=ce(e),this._qualityVector=tt(this._oilVector),this._reachableRange=Gt(this._oilVector,this._oilConstraints,this._qualityAxes),this._preview=null,this._hits=[],this.requestUpdate(),this._emitDocument("history"))}_redo(){let e=this._future[0];e&&(this._history=[...this._history,ce(this._oilVector)].slice(-50),this._future=this._future.slice(1),this._oilVector=ce(e),this._qualityVector=tt(this._oilVector),this._reachableRange=Gt(this._oilVector,this._oilConstraints,this._qualityAxes),this._preview=null,this._hits=[],this.requestUpdate(),this._emitDocument("history"))}_cancelPreview(){this._clearPendingPreview(),this._preview=null,this.requestUpdate()}_emitQualityRange(e,n){let r=e.currentTarget,o=r.dataset.qualityRange,i=this._qualityAxes.find(d=>d.key===o);if(!i)return;let s=i.key;n==="vector-preview"&&!r.dataset.transaction&&(r.dataset.transaction=k("quality-row"));let a=r.dataset.transaction||k("quality-row"),c=Number(r.value);this._selectedQuality=s,this._selectionRole="metric";let l=A(b({},this._qualityVector),{[s]:c}),u={source:"table",role:"metric",transactionId:a,key:s,previousValue:this._qualityVector,requestedValue:l,proposedValue:l,delta:D(c-Number(this._qualityVector[s]||0),4),hits:[]};n==="vector-preview"?this._handlePreview(u):(this._handleChange(u),delete r.dataset.transaction)}_qualityRow(e,n,r){let o=r[e.key]||{},i=Number(n[e.key]||0),s=Number(o.min??e.reachableMin??e.min??0),a=Number(o.max??e.reachableMax??e.max??100),c=e.preferredMin??s,l=e.preferredMax??a,u=e.key===this._selectedQuality,d=fe(W(i,e.min??0,e.max??100),e.step||1);return x`
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
              ${ie({"--quality-start":`${this._qualityPct(s,e)}%`,"--quality-width":`${Math.max(0,this._qualityPct(a,e)-this._qualityPct(s,e))}%`})}
            ></span>
            <span
              class="quality-preferred"
              ${ie({"--quality-start":`${this._qualityPct(c,e)}%`,"--quality-width":`${Math.max(0,this._qualityPct(l,e)-this._qualityPct(c,e))}%`})}
            ></span>
            <span
              class="quality-current"
              ${ie({"--quality-position":`${this._qualityPct(i,e)}%`})}
            ></span>
          </div>
          <input
            data-quality-range=${e.key}
            type="range"
            min=${e.min??0}
            max=${e.max??100}
            step=${e.step||1}
            .value=${String(D(d,1))}
            aria-label=${`${e.label} target`}
            @input=${p=>this._emitQualityRange(p,"vector-preview")}
            @change=${p=>this._emitQualityRange(p,"vector-change")}
          />
        </div>
        <output>${D(i,1)}</output>
        <span class="quality-reach-label"
          >${D(s,1)}-${D(a,1)}</span
        >
      </div>
    `}_selectQuality(e){this._selectedQuality=e,this._selectionRole="metric",this.requestUpdate()}_qualityPct(e,n){let r=Number(n.min??0),o=Number(n.max??100);return W((Number(e||0)-r)/(o-r||1)*100,0,100)}_activeOilConstraints(){return this._preview?.oilConstraints||this._oilConstraints}_activeQualityConstraints(){return this._preview?.qualityConstraints||this._qualityConstraints}_activeReachableRange(){return this._preview?.reachableRange||this._reachableRange}_activeFormulaValues(){let e=this._scalarPreview?.scope==="formula"?this._scalarPreview.values:this._formulaValues;return this._withBatchFormulaValues(e)}_activeAdditiveValues(){return this._scalarPreview?.scope==="additive"?this._scalarPreview.values:this._additiveValues}_activeAdditiveKeys(e=this._activeAdditiveValues()){return this._additiveItems.map(n=>n.key).filter(n=>Math.abs(Number(e?.[n]||0))>1e-9)}_withBatchFormulaValues(e=this._formulaValues){let n=Number(e.oil_weight_g||this._batchOilWeightG||0),r=this._batchEstimateForOilWeight(n,e,this._activeAdditiveValues(),this._preview?.oilVector||this._oilVector);return A(b({},e),{oil_weight_g:D(n,1),batch_volume_ml:D(r.volumeMl,1)})}_resolveFormulaValues(e,n,r){let o=b({},e);if(n==="batch_volume_ml"){let i=this._oilWeightForBatchVolume(r,o,this._activeAdditiveValues(),this._preview?.oilVector||this._oilVector);o.oil_weight_g=D(i,1)}else n==="oil_weight_g"&&(o.oil_weight_g=D(r,1));return this._withBatchFormulaValues(o)}_activeMeasurementBasis(){return this._measurementMeasure==="volume"?"volume":"weight"}_batchContext(e=this._oilVector,n=this._activeFormulaValues(),r=this._activeAdditiveValues()){let o=this._batchEstimateForOilWeight(Number(n.oil_weight_g||this._batchOilWeightG||0),n,r,e);return A(b({},o),{densities:this._document?.referenceData?.density||{}})}_batchItems(e){return Pe.map(n=>n.key!=="batch_volume_ml"?n:A(b({},n),{defaultValue:D(Number(e.volumeMl??0),1)}))}_batchSizeItem(){return Pe.find(e=>e.key===(this._measurementMeasure==="volume"?"batch_volume_ml":"oil_weight_g"))||Pe[0]}_batchSizeUnitOptions(){let e=this._measurementMeasure==="volume"?"volume":"weight";return(this._batchSizeItem().unitOptions??[]).filter(n=>n.measure===e)}_additiveItemsForContext(e){let n=e?.densities||{};return this._additiveItems.map(r=>{let o=r.material||r.key,i=Number.isFinite(Number(n[o]));return A(b({},r),{unitOptions:(r.unitOptions||[]).filter(s=>s.measure!=="volume"||i)})})}_batchEstimateForOilWeight(e,n=this._formulaValues,r=this._additiveValues,o=this._oilVector){return ty({oilWeightG:e,oilVector:o,formulaValues:n,additiveValues:r,selectedAdditives:this._activeAdditiveKeys(r),additiveItems:this._additiveItems,document:this._document})}_oilWeightForBatchVolume(e,n=this._formulaValues,r=this._additiveValues,o=this._oilVector){let s=this._batchEstimateForOilWeight(1e3,n,r,o).volumeMl/1e3||1;return W(Number(e||0)/s,Pe[0].min,Pe[0].max)}_selectedOilItems(){let e=new Set(Object.keys(this._oilVector));return this._oilItems.filter(n=>e.has(n.key))}_labelForKey(e){return this._oilItems.find(n=>n.key===e)?.label||this._qualityAxes.find(n=>n.key===e)?.label||[...Pe,...dt,...this._additiveItems].find(n=>n.key===e)?.label||e}_activeHits(){return this._preview?.hits||this._hits||[]}_scalarHits(e=this._formulaValues,n=this._additiveValues){let r=dt.flatMap(s=>this._thresholdHit(s,e[s.key])),o=new Set(this._activeAdditiveKeys(n)),i=this._additiveItems.filter(s=>o.has(s.key)).flatMap(s=>this._thresholdHit(s,n[s.key]));return[...r,...i]}_thresholdHit(e,n){let r=(e.thresholds||[]).find(o=>Number(n||0)>=Number(o.min)&&Number(n||0)<=Number(o.max));return!r||r.severity==="ok"?[]:[_e(e.key,"threshold",r.label||`${e.label||e.key} is in ${r.severity} range.`,r.severity==="danger"?"hard":"warn")]}_formulaSummary(e,n){let r=new Set(this._activeAdditiveKeys(n)),o=Object.entries(n||{}).filter(([a])=>r.has(a)).reduce((a,[,c])=>a+Number(c||0),0),i=Number(n.fragrance||0),s=Number(e.lye_concentration||0);return[{key:"batch_volume_ml",label:"Batch volume",value:Number(e.batch_volume_ml||0),min:400,max:16e3,unit:" ml",precision:0,thresholds:[]},{key:"total_additives",label:"Additive load",value:o,min:0,max:10,unit:"%",precision:1,thresholds:[{key:"normal",min:0,max:5,severity:"ok"},{key:"busy",min:5.1,max:8,severity:"warn"},{key:"crowded",min:8.1,max:10,severity:"danger"}]},{key:"fragrance_load",label:"Fragrance load",value:i,min:0,max:6,unit:"%",precision:1,thresholds:this._additiveItems.find(a=>a.key==="fragrance")?.thresholds||[]},{key:"lye_strength",label:"Lye strength",value:s,min:25,max:45,unit:"%",precision:1,thresholds:dt.find(a=>a.key==="lye_concentration")?.thresholds||[]}]}_statusText(){return this._preview?"Previewing a recipe change.":this._hits.length?this._hits[0].message:"Approximate quality model; fatty-acid data is a demo fixture."}};ix()});var Cy=h(()=>{"use strict";Kl();Dy()});function sx(){return Sy||(Sy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ax(){return Ty||(Ty=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}function cx(t){let e=new Promise((n,r)=>{let o=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{n(Sn(t.result)),o()},s=()=>{r(t.error),o()};t.addEventListener("success",i),t.addEventListener("error",s)});return Ts.set(e,t),e}function lx(t){if(fu.has(t))return;let e=new Promise((n,r)=>{let o=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{n(),o()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)});fu.set(t,e)}function Ay(t){pu=t(pu)}function ux(t){return ax().includes(t)?function(...e){return t.apply(hu(this),e),Sn(this.request)}:function(...e){return Sn(t.apply(hu(this),e))}}function dx(t){return typeof t=="function"?ux(t):(t instanceof IDBTransaction&&lx(t),du(t,sx())?new Proxy(t,pu):t)}function Sn(t){if(t instanceof IDBRequest)return cx(t);if(lu.has(t))return lu.get(t);let e=dx(t);return e!==t&&(lu.set(t,e),Ts.set(e,t)),e}function Ry(t,e,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){let s=indexedDB.open(t,e),a=Sn(s);return r&&s.addEventListener("upgradeneeded",c=>{r(Sn(s.result),c.oldVersion,c.newVersion,Sn(s.transaction),c)}),n&&s.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),o&&c.addEventListener("versionchange",l=>o(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}function My(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(uu.get(e))return uu.get(e);let n=e.replace(/FromIndex$/,""),r=e!==n,o=px.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||fx.includes(n)))return;let i=async function(s,...a){let c=this.transaction(s,o?"readwrite":"readonly"),l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),o&&c.done]))[0]};return uu.set(e,i),i}async function*gx(...t){let e=this;if(e instanceof IDBCursor||(e=await e.openCursor(...t)),!e)return;e=e;let n=new Proxy(e,mx);for(Oy.set(n,e),Ts.set(n,hu(e));e;)yield n,e=await(mu.get(n)||e.continue()),mu.delete(n)}function ky(t,e){return e===Symbol.asyncIterator&&du(t,[IDBIndex,IDBObjectStore,IDBCursor])||e==="iterate"&&du(t,[IDBIndex,IDBObjectStore])}var du,Sy,Ty,fu,lu,Ts,pu,hu,fx,px,uu,hx,Ny,mu,Oy,mx,Py=h(()=>{"use strict";du=(t,e)=>e.some(n=>t instanceof n);fu=new WeakMap,lu=new WeakMap,Ts=new WeakMap;pu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};hu=t=>Ts.get(t);fx=["get","getKey","getAll","getAllKeys","count"],px=["put","add","delete","clear"],uu=new Map;Ay(t=>A(b({},t),{get:(e,n,r)=>My(e,n)||t.get(e,n,r),has:(e,n)=>!!My(e,n)||t.has(e,n)}));hx=["continue","continuePrimaryKey","advance"],Ny={},mu=new WeakMap,Oy=new WeakMap,mx={get(t,e){if(!hx.includes(e))return t[e];let n=Ny[e];return n||(n=Ny[e]=function(...r){mu.set(this,Oy.get(this)[e](...r))}),n}};Ay(t=>A(b({},t),{get(e,n,r){return ky(e,n)?gx:t.get(e,n,r)},has(e,n){return ky(e,n)||t.has(e,n)}}))});var yx,Ly,Ms,Vy=h(()=>{"use strict";He();su();Py();He();yx="red-mountain-soap-calculator",Ly="current",Ms=class t{constructor(){this.document=Zn(ou());this.status=Zn("Your recipe is stored only in this browser.");this.statusIsError=Zn(!1);this.load()}update(e){this.document.set(e),this.statusIsError.set(!1),this.status.set("Saved in this browser."),this.persist(e)}reset(){this.update(ou())}database(){return this.databasePromise??=Ry(yx,1,{upgrade(e){e.createObjectStore("documents")}}),this.databasePromise}async load(){try{let n=await(await this.database()).get("documents",Ly);n?.version===1&&(this.document.set(n),this.status.set("Loaded the recipe saved in this browser."))}catch{this.statusIsError.set(!0),this.status.set("Browser storage is unavailable. This recipe will last only until the page closes.")}}async persist(e){try{await(await this.database()).put("documents",e,Ly)}catch{this.statusIsError.set(!0),this.status.set("The calculator could not save locally. Export important recipes before leaving.")}}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=ne({token:t,factory:t.\u0275fac,providedIn:"root"})}}});var Ns,$y=h(()=>{"use strict";He();Cy();Vy();He();Ns=class t{constructor(){this.state=O(Ms)}onCalculatorChange(e){let n=e.detail;n?.document&&this.state.update(n.document)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=Bc({type:t,selectors:[["rms-root"]],decls:28,vars:4,consts:[[1,"calculator-shell"],[1,"calculator-header"],["href","https://redmountainsoap.com/",1,"calculator-brand"],["src","./icons/icon.svg","alt","","width","44","height","44"],[1,"calculator-heading"],[1,"calculator-eyebrow"],["aria-live","polite",1,"calculator-status"],["type","button",1,"calculator-reset",3,"click"],[1,"calculator-workspace"],["aria-label","Recipe designer"],[3,"calculator-change","document"],["aria-labelledby","calculator-safety-title",1,"calculator-safety"],["id","calculator-safety-title"]],template:function(n,r){n&1&&(Ce(0,"div",0)(1,"header",1)(2,"a",2),Ri(3,"img",3),Ce(4,"span")(5,"strong"),Je(6,"Red Mountain Soap"),Ne(),Ce(7,"small"),Je(8,"Recipe tools"),Ne()()(),Ce(9,"div",4)(10,"p",5),Je(11,"Soap Recipe Calculator"),Ne(),Ce(12,"h1"),Je(13,"Design and balance a soap recipe"),Ne(),Ce(14,"p"),Je(15," Adjust oils, formulation settings, and additives while the visual tools show how the recipe changes. "),Ne(),Ce(16,"p",6),Je(17),Ne(),Ce(18,"button",7),eo("click",function(){return r.state.reset()}),Je(19," Reset demo recipe "),Ne()()(),Ce(20,"main",8)(21,"section",9)(22,"recipe-vector-workbench",10),eo("calculator-change",function(i){return r.onCalculatorChange(i)}),Ne()(),Ce(23,"aside",11)(24,"h2",12),Je(25,"Safety and data note"),Ne(),Ce(26,"p"),Je(27," This calculator is an educational formulation aid, not a substitute for independent lye calculations, supplier data, protective equipment, or established soapmaking safety procedures. Reference values are approximate defaults and recipes are stored only in your browser. "),Ne()()()()),n&2&&(Jr(16),Pi("warning",r.state.statusIsError()),Jr(),Li(" ",r.state.status()," "),Jr(5),Oi("document",r.state.document()))},encapsulation:2})}}});function _x(){let t=O(Mo);if(!("serviceWorker"in navigator&&t.enabled!==!1))return;let e=O(jy),n=O(Te),r=O(pn);n.runOutsideAngular(()=>{let o=navigator.serviceWorker,i=()=>o.controller?.postMessage({action:"INITIALIZE"});o.addEventListener("controllerchange",i),r.onDestroy(()=>{o.removeEventListener("controllerchange",i)})}),n.runOutsideAngular(()=>{let o,{registrationStrategy:i}=t;if(typeof i=="function")o=new Promise(s=>i().subscribe(()=>s()));else{let[s,...a]=(i||"registerWhenStable:30000").split(":");switch(s){case"registerImmediately":o=Promise.resolve();break;case"registerWithDelay":o=Fy(+a[0]||0);break;case"registerWhenStable":o=Promise.race([r.whenStable(),Fy(+a[0])]);break;default:throw new R(5600,!1)}}o.then(()=>{r.destroyed||navigator.serviceWorker.register(e,{scope:t.scope,updateViaCache:t.updateViaCache,type:t.type}).catch(s=>console.error(kr(5604,!1)))})})}function Fy(t){return new Promise(e=>setTimeout(e,t))}function Ex(){let t=O(Mo),e=O(gt),n=!0;return new vr(n&&t.enabled!==!1?navigator.serviceWorker:void 0,e)}function Hy(t,e={}){return on([vx,bx,{provide:jy,useValue:t},{provide:Mo,useValue:e},{provide:vr,useFactory:Ex},Gc(_x)])}var gu,vr,vx,bx,jy,Mo,Uy=h(()=>{"use strict";He();He();qo();ac();gu="Service workers are disabled or not supported by this browser",vr=class{serviceWorker;worker;registration;events;constructor(e,n){if(this.serviceWorker=e,!e)this.worker=this.events=this.registration=new ae(r=>r.error(new R(5601,!1)));else{let r=null,o=new qe;this.worker=new ae(l=>(r!==null&&l.next(r),o.subscribe(u=>l.next(u))));let i=()=>{let{controller:l}=e;l!==null&&(r=l,o.next(r))};e.addEventListener("controllerchange",i),i(),this.registration=this.worker.pipe(On(()=>e.getRegistration().then(l=>{if(!l)throw new R(5601,!1);return l})));let s=new qe;this.events=s.asObservable();let a=l=>{let{data:u}=l;u?.type&&s.next(u)};e.addEventListener("message",a),n?.get(pn,null,{optional:!0})?.onDestroy(()=>{e.removeEventListener("controllerchange",i),e.removeEventListener("message",a)})}}postMessage(e,n){return new Promise(r=>{this.worker.pipe(Yt(1)).subscribe(o=>{o.postMessage(b({action:e},n)),r()})})}postMessageWithOperation(e,n,r){let o=this.waitForOperationCompleted(r),i=this.postMessage(e,n);return Promise.all([i,o]).then(([,s])=>s)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(e){let n;return typeof e=="string"?n=r=>r.type===e:n=r=>e.includes(r.type),this.events.pipe(Bo(n))}nextEventOfType(e){return this.eventsOfType(e).pipe(Yt(1))}waitForOperationCompleted(e){return new Promise((n,r)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(Bo(o=>o.nonce===e),Yt(1),rt(o=>{if(o.result!==void 0)return o.result;throw new Error(o.error)})).subscribe({next:n,error:r})})}get isEnabled(){return!!this.serviceWorker}},vx=(()=>{class t{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new qe;constructor(n){if(this.sw=n,!n.isEnabled){this.messages=pt,this.notificationClicks=pt,this.notificationCloses=pt,this.pushSubscriptionChanges=pt,this.subscription=pt;return}this.messages=this.sw.eventsOfType("PUSH").pipe(rt(o=>o.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(rt(o=>o.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(rt(o=>o.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(rt(o=>o.data)),this.pushManager=this.sw.registration.pipe(rt(o=>o.pushManager));let r=this.pushManager.pipe(On(o=>o.getSubscription()));this.subscription=new ae(o=>{let i=r.subscribe(o),s=this.subscriptionChanges.subscribe(o);return()=>{i.unsubscribe(),s.unsubscribe()}})}requestSubscription(n){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(gu));let r={userVisibleOnly:!0},o=this.decodeBase64(n.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),i=new Uint8Array(new ArrayBuffer(o.length));for(let s=0;s<o.length;s++)i[s]=o.charCodeAt(s);return r.applicationServerKey=i,new Promise((s,a)=>{this.pushManager.pipe(On(c=>c.subscribe(r)),Yt(1)).subscribe({next:c=>{this.subscriptionChanges.next(c),s(c)},error:a})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(gu));let n=r=>{if(r===null)throw new R(5602,!1);return r.unsubscribe().then(o=>{if(!o)throw new R(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((r,o)=>{this.subscription.pipe(Yt(1),On(n)).subscribe({next:r,error:o})})}decodeBase64(n){return atob(n)}static \u0275fac=function(r){return new(r||t)(B(vr))};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})(),bx=(()=>{class t{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(n){if(this.sw=n,!n.isEnabled){this.versionUpdates=pt,this.unrecoverable=pt;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(gu));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let n=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:n},n).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new R(5601,!1));let n=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:n},n)}static \u0275fac=function(r){return new(r||t)(B(vr))};static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})(),jy=new j("");Mo=class{enabled;updateViaCache;type;scope;registrationStrategy}});var By,qy=h(()=>{"use strict";He();Uy();By={providers:[oc(),Hy("ngsw-worker.js",{enabled:!ph(),registrationStrategy:"registerWhenStable:30000"})]}});var wx=Zy(()=>{Th();$y();qy();cl(Ns,By).catch(t=>console.error(t))});export default wx();
