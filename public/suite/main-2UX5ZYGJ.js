import{$ as Pi,A as Ci,Aa as k,B as Rr,Ba as $e,C as qe,Ca as ot,D as Le,Da as Re,E as be,Ea as Bi,F as ye,Fa as Dr,G as It,Ga as er,H as u,Ha as U,I as p,J as oe,Ja as h,K as N,Ka as _t,L as A,La as Be,M as Mi,Ma as fe,N as Xe,O as Ve,P as Ue,Q as Ee,R as Y,S as Ti,T as c,U as q,V as Pe,Va as In,W as Oi,Y as Nr,Z as Ke,a as Gt,aa as he,b as Xt,ba as Ri,c as st,ca as Pn,d as Ge,da as Ni,e as Tr,ea as Ii,f as bt,fa as Ai,g as Nt,ga as yt,h as Tn,ha as Di,i as nt,ia as Fi,j as ki,ja as Yt,k as Or,ka as gt,l as Si,la as qi,m as Pr,ma as Li,n as J,na as Zt,o as wi,oa as Ir,p as De,pa as He,q as Fe,qa as At,r as Vi,ra as Jt,sa as Ui,t as Ei,ta as Ki,u as $i,ua as Ar,va as Hi,wa as Rn,x as On,xa as Se,y,ya as ft,z as ke,za as B}from"./chunk-BYGF5TYG.js";import{S as zi,a as P,b as z,ba as Nn,c as b,d as Mn,e as d,f as E,g as $,h as C}from"./chunk-NZ2EV6AM.js";function Fn(){let i=J(lt);if(!("serviceWorker"in navigator&&i.enabled!==!1))return;let e=J(Wi),t=J(Ei),r=J(Rr);t.runOutsideAngular(()=>{let a=navigator.serviceWorker,s=()=>a.controller?.postMessage({action:"INITIALIZE"});a.addEventListener("controllerchange",s),r.onDestroy(()=>{a.removeEventListener("controllerchange",s)})}),t.runOutsideAngular(()=>{let a,{registrationStrategy:s}=i;if(typeof s=="function")a=new Promise(n=>s().subscribe(()=>n()));else{let[n,...o]=(s||"registerWhenStable:30000").split(":");switch(n){case"registerImmediately":a=Promise.resolve();break;case"registerWithDelay":a=ji(+o[0]||0);break;case"registerWhenStable":a=Promise.race([r.whenStable(),ji(+o[0])]);break;default:throw new nt(5600,!1)}}a.then(()=>{r.destroyed||navigator.serviceWorker.register(e,{scope:i.scope,updateViaCache:i.updateViaCache,type:i.type}).catch(n=>console.error(ki(5604,!1)))})})}function ji(i){return new Promise(e=>setTimeout(e,i))}function qn(){let i=J(lt),e=J(Vi),t=!0;return new xt(t&&i.enabled!==!1?navigator.serviceWorker:void 0,e)}function Qi(i,e={}){return wi([An,Dn,{provide:Wi,useValue:i},{provide:lt,useValue:e},{provide:xt,useFactory:qn},Ci(Fn)])}var Fr,xt,An,Dn,Wi,lt,Gi=b(()=>{"use strict";he();he();Tn();On();Fr="Service workers are disabled or not supported by this browser",xt=class{serviceWorker;worker;registration;events;constructor(e,t){if(this.serviceWorker=e,!e)this.worker=this.events=this.registration=new Gt(r=>r.error(new nt(5601,!1)));else{let r=null,a=new Xt;this.worker=new Gt(m=>(r!==null&&m.next(r),a.subscribe(g=>m.next(g))));let s=()=>{let{controller:m}=e;m!==null&&(r=m,a.next(r))};e.addEventListener("controllerchange",s),s(),this.registration=this.worker.pipe(Nt(()=>e.getRegistration().then(m=>{if(!m)throw new nt(5601,!1);return m})));let n=new Xt;this.events=n.asObservable();let o=m=>{let{data:g}=m;g?.type&&n.next(g)};e.addEventListener("message",o),t?.get(Rr,null,{optional:!0})?.onDestroy(()=>{e.removeEventListener("controllerchange",s),e.removeEventListener("message",o)})}}postMessage(e,t){return new Promise(r=>{this.worker.pipe(bt(1)).subscribe(a=>{a.postMessage(P({action:e},t)),r()})})}postMessageWithOperation(e,t,r){let a=this.waitForOperationCompleted(r),s=this.postMessage(e,t);return Promise.all([s,a]).then(([,n])=>n)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(e){let t;return typeof e=="string"?t=r=>r.type===e:t=r=>e.includes(r.type),this.events.pipe(Tr(t))}nextEventOfType(e){return this.eventsOfType(e).pipe(bt(1))}waitForOperationCompleted(e){return new Promise((t,r)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(Tr(a=>a.nonce===e),bt(1),st(a=>{if(a.result!==void 0)return a.result;throw new Error(a.error)})).subscribe({next:t,error:r})})}get isEnabled(){return!!this.serviceWorker}},An=(()=>{class i{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new Xt;constructor(t){if(this.sw=t,!t.isEnabled){this.messages=Ge,this.notificationClicks=Ge,this.notificationCloses=Ge,this.pushSubscriptionChanges=Ge,this.subscription=Ge;return}this.messages=this.sw.eventsOfType("PUSH").pipe(st(a=>a.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(st(a=>a.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(st(a=>a.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(st(a=>a.data)),this.pushManager=this.sw.registration.pipe(st(a=>a.pushManager));let r=this.pushManager.pipe(Nt(a=>a.getSubscription()));this.subscription=new Gt(a=>{let s=r.subscribe(a),n=this.subscriptionChanges.subscribe(a);return()=>{s.unsubscribe(),n.unsubscribe()}})}requestSubscription(t){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(Fr));let r={userVisibleOnly:!0},a=this.decodeBase64(t.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),s=new Uint8Array(new ArrayBuffer(a.length));for(let n=0;n<a.length;n++)s[n]=a.charCodeAt(n);return r.applicationServerKey=s,new Promise((n,o)=>{this.pushManager.pipe(Nt(l=>l.subscribe(r)),bt(1)).subscribe({next:l=>{this.subscriptionChanges.next(l),n(l)},error:o})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(Fr));let t=r=>{if(r===null)throw new nt(5602,!1);return r.unsubscribe().then(a=>{if(!a)throw new nt(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((r,a)=>{this.subscription.pipe(bt(1),Nt(t)).subscribe({next:r,error:a})})}decodeBase64(t){return atob(t)}static \u0275fac=function(r){return new(r||i)(Pr(xt))};static \u0275prov=Or({token:i,factory:i.\u0275fac})}return i})(),Dn=(()=>{class i{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(t){if(this.sw=t,!t.isEnabled){this.versionUpdates=Ge,this.unrecoverable=Ge;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Fr));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let t=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:t},t).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new nt(5601,!1));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:t},t)}static \u0275fac=function(r){return new(r||i)(Pr(xt))};static \u0275prov=Or({token:i,factory:i.\u0275fac})}return i})(),Wi=new Si("");lt=class{enabled;updateViaCache;type;scope;registrationStrategy}});var St,wt,Ye,tr=b(()=>{"use strict";St={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},wt=i=>(...e)=>({_$litDirective$:i,values:e}),Ye=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}});var L,Xi=b(()=>{"use strict";Dr();tr();L=wt(class extends Ye{constructor(i){if(super(i),i.type!==St.ATTRIBUTE||i.name!=="class"||i.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(let r in e)e[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(e)}let t=i.element.classList;for(let r of this.st)r in e||(t.remove(r),this.st.delete(r));for(let r in e){let a=!!e[r];a===this.st.has(r)||this.nt?.has(r)||(a?(t.add(r),this.st.add(r)):(t.remove(r),this.st.delete(r)))}return ot}})});var we=b(()=>{"use strict";Xi()});var Ln,Yi,Zi,Vt,Ze,Un,Ji,ea,rr,ta=b(()=>{"use strict";Dr();({I:Ln}=Bi),Yi=i=>i,Zi=()=>document.createComment(""),Vt=(i,e,t)=>{let r=i._$AA.parentNode,a=e===void 0?i._$AB:e._$AA;if(t===void 0){let s=r.insertBefore(Zi(),a),n=r.insertBefore(Zi(),a);t=new Ln(s,n,i,i.options)}else{let s=t._$AB.nextSibling,n=t._$AM,o=n!==i;if(o){let l;t._$AQ?.(i),t._$AM=i,t._$AP!==void 0&&(l=i._$AU)!==n._$AU&&t._$AP(l)}if(s!==a||o){let l=t._$AA;for(;l!==s;){let m=Yi(l).nextSibling;Yi(r).insertBefore(l,a),l=m}}}return t},Ze=(i,e,t=i)=>(i._$AI(e,t),i),Un={},Ji=(i,e=Un)=>i._$AH=e,ea=i=>i._$AH,rr=i=>{i._$AR(),i._$AA.remove()}});var ra,X,ia=b(()=>{"use strict";Dr();tr();ta();ra=(i,e,t)=>{let r=new Map;for(let a=e;a<=t;a++)r.set(i[a],a);return r},X=wt(class extends Ye{constructor(i){if(super(i),i.type!==St.CHILD)throw Error("repeat() can only be used in text expressions")}dt(i,e,t){let r;t===void 0?t=e:e!==void 0&&(r=e);let a=[],s=[],n=0;for(let o of i)a[n]=r?r(o,n):n,s[n]=t(o,n),n++;return{values:s,keys:a}}render(i,e,t){return this.dt(i,e,t).values}update(i,[e,t,r]){let a=ea(i),{values:s,keys:n}=this.dt(e,t,r);if(!Array.isArray(a))return this.ut=n,s;let o=this.ut??=[],l=[],m,g,f=0,w=a.length-1,M=0,T=s.length-1;for(;f<=w&&M<=T;)if(a[f]===null)f++;else if(a[w]===null)w--;else if(o[f]===n[M])l[M]=Ze(a[f],s[M]),f++,M++;else if(o[w]===n[T])l[T]=Ze(a[w],s[T]),w--,T--;else if(o[f]===n[T])l[T]=Ze(a[f],s[T]),Vt(i,l[T+1],a[f]),f++,T--;else if(o[w]===n[M])l[M]=Ze(a[w],s[M]),Vt(i,a[f],a[w]),w--,M++;else if(m===void 0&&(m=ra(n,M,T),g=ra(o,f,w)),m.has(o[f]))if(m.has(o[w])){let V=g.get(n[M]),_=V!==void 0?a[V]:null;if(_===null){let D=Vt(i,a[f]);Ze(D,s[M]),l[M]=D}else l[M]=Ze(_,s[M]),Vt(i,a[f],_),a[V]=null;M++}else rr(a[w]),w--;else rr(a[f]),f++;for(;M<=T;){let V=Vt(i,l[T+1]);Ze(V,s[M]),l[M++]=V}for(;f<=w;){let V=a[f++];V!==null&&rr(V)}return this.ut=n,Ji(i,l),ot}})});var Ce=b(()=>{"use strict";ia()});var aa,sa=b(()=>{"use strict";U();aa=B`:host {
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
}`});var ir,re,Dt,na,Ne=b(()=>{"use strict";ir=Object.freeze({ink:"#1d2523",inkSoft:"#38413d",muted:"#68716d",line:"#d9d5ca",surface:"#fffdfa",surfaceAlt:"#fbfaf6",surfaceStrong:"#f0eee8",track:"#e8e3d8",allowed:"#b9cfc6",accent:"#426a8c",accentStrong:"#274c43",accentSoft:"#dce8e2",preview:"#d9824b",ok:"#4f8f5b",danger:"#9b3b37",warning:"#d9824b",reach:"#68716d"}),re=Object.freeze(["#426a8c","#d9824b","#6f8d42","#8b5f9d","#9d9a5a","#c48a70"]),Dt=String.fromCodePoint(128274),na=String.fromCodePoint(128275)});var W,oa=b(()=>{"use strict";U();W=B`:host {
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
}`});function Kn(i){return String(i??"").replace(/[<>"'&;]/g,"")}function ct(i,e={},t={}){for(let r of Object.keys(t)){if(r in e)continue;let a=r.replace(/[A-Z]/g,s=>`-${s.toLowerCase()}`);i.style.removeProperty(`--vector-${a}`)}for(let[r,a]of Object.entries(e??{})){let s=r.replace(/[A-Z]/g,n=>`-${n.toLowerCase()}`);i.style.setProperty(`--vector-${s}`,Kn(a))}}var me=b(()=>{"use strict";Ne();oa()});function le(i,e){globalThis.customElements&&!customElements.get(i)&&customElements.define(i,e)}var j,ue=b(()=>{"use strict";U();me();j=class extends er{constructor(){super(...arguments);this._theme={}}get theme(){return this._theme}set theme(t){let r=this._theme;this._theme=t??{},this.isConnected&&ct(this,this._theme,r)}connectedCallback(){super.connectedCallback(),ct(this,this._theme)}}});function R(i="tx"){return`${i}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function v(i,e=4){let t=10**e;return Math.round((Number(i??0)+Number.EPSILON)*t)/t}function se(i,e=.1){let t=Number(e??.1);return v(Math.round(i/t)*t,Hn(t))}function K(i,e=-1/0,t=1/0){return Math.min(t,Math.max(e,Number(i??0)))}function H(i){return i.replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Hn(i){let e=String(i);return e.includes(".")?e.split(".")[1].length:0}var qr=b(()=>{"use strict"});function O(i,e,t){i.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:t}))}var la=b(()=>{"use strict"});function ee(i={}){return Object.fromEntries(Object.entries(i).map(([e,t])=>[e,Number(t??0)]))}function Qn(i=[],e={}){let t=[...i].sort((r,a)=>Number(r.order??0)-Number(a.order??0)).map(r=>r.key);return[...new Set([...t,...Object.keys(e)])]}function Je(i={}){return Object.values(i).reduce((e,t)=>e+Number(t??0),0)}function sr(i={}){return Number.isFinite(Number(i.min))?Number(i.min):0}function nr(i={}){return Number.isFinite(Number(i.max))?Number(i.max):mt}function te(i,e,t,r="hard"){return{key:i,type:e,severity:r,message:t}}function Ur(i={},e=mt,t=Object.keys(i)){let r={},a=Je(i),s=t.length?Number(e??mt)/t.length:0;for(let n of t)r[n]=a>0?Number(i[n]??0)*Number(e??mt)/a:s;return ut(r,{},e,t[0])}function pt({value:i={},key:e,target:t,constraints:r={},items:a=[],total:s=mt}){let n=Qn(a,i).filter(S=>S in i||S===e),o=[],l=Ur(i,s,n),m=ee(l),g=r[e]||{};if(!e||!(e in m))return{vector:ut(m,r,s,e),hits:[te(e||"composition","sum","No active slice was available.")],delta:0};if(g.locked)return{vector:m,hits:[te(e,"locked",`${H(e)} is locked.`)],delta:0};let f=Number(t),w=sr(g),M=nr(g),T=K(f,w,M);T!==f&&o.push(te(e,T<=w?"min":"max",`${H(e)} hit ${T<=w?"minimum":"maximum"} ${v(T,2)}%.`)),T=se(T,g.step??pa);let V=T-m[e];m[e]=T;let _=-V,D=new Set([e]),F=0;for(;ha(_)&&F<Xn(n);){F+=1;let S=n.filter(I=>{if(D.has(I))return!1;let ve=r[I]||{};return ve.locked?(o.push(te(I,"locked",`${H(I)} is locked.`)),D.add(I),!1):_<0?Jn(m[I],ve):eo(m[I],ve)});if(!S.length){ua(m,e,_),o.push(te(e,"unreachable",`${H(e)} was clamped because the remaining oils cannot absorb the change.`)),_=0;break}let G=S.reduce((I,ve)=>I+ma(m[ve]),0),Q=!1;for(let I of S){let ve=r[I]||{},vt=ma(m[I])/G,Te=_*vt,Oe=sr(ve),Ae=nr(ve),x=Te;Te<0&&m[I]+Te<Oe?(x=Oe-m[I],m[I]=Oe,D.add(I),o.push(te(I,"min",`${H(I)} hit minimum ${v(Oe,2)}%.`))):Te>0&&m[I]+Te>Ae?(x=Ae-m[I],m[I]=Ae,D.add(I),o.push(te(I,"max",`${H(I)} hit maximum ${v(Ae,2)}%.`))):m[I]+=x,_=to(_-x),Q=Q||Zn(x)}if(!Q){ua(m,e,_),o.push(te(e,"unreachable","No remaining oil can legally move.")),_=0;break}}return{vector:ut(or(m,r),r,s,e),hits:Gn(o),delta:v(T-l[e],4)}}function or(i={},e={}){return Object.fromEntries(Object.entries(i).map(([t,r])=>[t,se(r,e[t]?.step??pa)]))}function ut(i={},e={},t=mt,r=null){let a=ee(i),s=Object.keys(a),n=ar(Number(t??mt)-Je(a)),o=0;for(;ha(n)&&o<Wn;){o+=1;let l=[r,...s.filter(g=>g!==r)].filter(g=>!!g),m=!1;for(let g of l){let f=e[g]||{};if(f.locked)continue;let w=sr(f),M=nr(f),T=n>0?M-a[g]:a[g]-w;if(!Yn(T))continue;let V=Math.sign(n)*Math.min(Math.abs(n),T);a[g]=ar(a[g]+V),n=ar(n-V),m=!0;break}if(!m)break}return a}function lr(i={},e={}){return[...new Set([...Object.keys(i),...Object.keys(e)])].reduce((r,a)=>r+Math.abs(Number(i[a]??0)-Number(e[a]??0)),0)}function Gn(i=[]){let e=new Set;return i.filter(t=>{let r=`${t.key}:${t.type}:${t.message}`;return e.has(r)?!1:(e.add(r),!0)})}function Xn(i){return i.length+jn}function ha(i){return Math.abs(Number(i??0))>Lr}function Yn(i){return Number(i??0)>da}function Zn(i){return Math.abs(Number(i??0))>da}function Jn(i,e){return Number(i??0)>sr(e)+Lr}function eo(i,e){return Number(i??0)<nr(e)-Lr}function ma(i){return Math.max(ca,Number(i??ca))}function ar(i){return v(i,Bn)}function to(i){return v(i,zn)}function ua(i,e,t){i[e]=ar(Number(i[e]??0)+Number(t??0))}var mt,pa,Bn,zn,Lr,da,ca,jn,Wn,ne=b(()=>{"use strict";qr();la();qr();mt=100,pa=.1,Bn=4,zn=7,Lr=1e-7,da=1e-9,ca=1e-4,jn=8,Wn=100});var Ft,Kr=b(()=>{"use strict";U();fe();Ce();sa();ue();ne();me();Ft=class extends j{static{this.styles=[W,aa]}#e;get hits(){return this.#e}set hits(e){this.#e=e}constructor(){super(),this.hits=[],this.theme={}}render(){return k`
      <div class="feedback">
        ${this.hits.length?X(this.hits,e=>`${e.key}:${e.type}:${e.message}`,e=>k`
                <button
                  class=${e.severity||"hard"}
                  data-key=${e.key}
                  @click=${()=>this._selectHit(e.key)}
                >
                  ${e.message}
                </button>
              `):k`<span class="quiet">No active constraints.</span>`}
      </div>
    `}_selectHit(e){O(this,"vector-select",{source:"constraint",role:"selection",transactionId:R("feedback"),key:e})}};d([h({attribute:!1})],Ft.prototype,"hits",1)});var va=b(()=>{"use strict";tr()});var Hr,Z,ze=b(()=>{"use strict";U();va();Hr=class extends Ye{constructor(t){super(t);this.previousNames=new Set;if(t.type!==St.ELEMENT)throw new Error("styleVariables must be used as an element directive")}render(t){return ot}update(t,[r]){let a=t.element,s=new Set(Object.keys(r));for(let n of this.previousNames)s.has(n)||a.style.removeProperty(n);for(let[n,o]of Object.entries(r))o===null?a.style.removeProperty(n):a.style.setProperty(n,o);return this.previousNames=s,ot}},Z=wt(Hr)});var ba,ya=b(()=>{"use strict";U();ba=B`:host {
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
}`});function Br(i,e=re){let t=qt(e);return t[i%t.length]}function _e(i,e=0,t=re){return i?.color??Br(e,t)}function ga(i,e=[]){return e.find(t=>Number(i)>=Number(t.min)&&Number(i)<=Number(t.max))||null}function qt(i){return Array.isArray(i)&&i.length?i:re}function Et(i=1){let e=Number(i??1);if(!Number.isFinite(e)||e>=1)return 0;let t=String(e);return t.includes("e-")?Number(t.split("e-")[1]||0):t.includes(".")?t.split(".")[1].length:0}function pe(i,e=0){let t=Math.max(0,Number(e??0));return t>0?Number(i||0).toFixed(t):String(v(i,0))}function zr(i,e=""){return String(i?.symbol??e??"").trim()||i?.label||""}var je=b(()=>{"use strict";Ne();ne()});var fa,_a,xa,ka,Sa,wa,Va,Ea,de,Lt=b(()=>{"use strict";U();fe();we();Ce();ze();ya();ue();Ne();je();ne();me();de=class extends j{constructor(){super();$(this,fa);$(this,_a);$(this,xa);$(this,ka);$(this,Sa);$(this,wa);$(this,Va);$(this,Ea);this._queryChanged=t=>{this.query=t.currentTarget.value};this.items=[],this.selectedKeys=[],this.query="",this.activeTags=[],this.itemTypes=[],this.listType="item",this.searchPlaceholder="Search items",this.theme={},this.palette=re}static{this.styles=[W,ba]}get items(){return E(this,fa)}set items(t){C(this,fa,t)}get selectedKeys(){return E(this,_a)}set selectedKeys(t){C(this,_a,t)}get query(){return E(this,xa)}set query(t){C(this,xa,t)}get activeTags(){return E(this,ka)}set activeTags(t){C(this,ka,t)}get itemTypes(){return E(this,Sa)}set itemTypes(t){C(this,Sa,t)}get listType(){return E(this,wa)}set listType(t){C(this,wa,t)}get searchPlaceholder(){return E(this,Va)}set searchPlaceholder(t){C(this,Va,t)}get palette(){return E(this,Ea)}set palette(t){C(this,Ea,t)}set state(t){this.items=t?.items??[],this.selectedKeys=t?.selectedKeys??[],this.query=t?.query??"",this.activeTags=t?.activeTags??[],this.itemTypes=t?.itemTypes??[],this.listType=t?.listType??"item",this.searchPlaceholder=t?.searchPlaceholder??"Search items",this.theme=t?.theme??{},this.palette=t?.palette??re}render(){let t=new Set(this.selectedKeys),r=this.query.toLowerCase(),a=this.items.filter(s=>{let n=!r||s.label.toLowerCase().includes(r)||s.key.toLowerCase().includes(r),o=!this.activeTags.length||this.activeTags.every(g=>s.tags?.includes(g)),l=s.type||s.category||"",m=!this.itemTypes.length||this.itemTypes.includes(l);return n&&o&&m});return k`
      <div class="search-list">
        <input
          class="search"
          type="search"
          placeholder=${this.searchPlaceholder}
          .value=${this.query}
          @input=${this._queryChanged}
        />
        <div class="items">
          ${X(a,s=>s.key,(s,n)=>k`
              <button
                class=${L({"oil-row":!0,selected:t.has(s.key)})}
                data-key=${s.key}
                @click=${()=>this._toggle(s.key)}
              >
                <span
                  class="swatch"
                  ${Z({"--item-color":_e(s,n,this.palette)})}
                ></span>
                <span
                  ><span class="item-label">${s.label}</span
                  >${s.category||s.type?k`<small>${s.category||s.type}</small>`:Re}</span
                >
                <strong>${t.has(s.key)?"Remove":"Add"}</strong>
              </button>
            `)}
        </div>
      </div>
    `}_toggle(t){let r=new Set(this.selectedKeys),a=r.has(t)?"remove":"add";r.has(t)?r.delete(t):r.add(t),O(this,"vector-change",{source:"list",role:"selection",transactionId:R("list"),key:t,selection:[...r],action:a,listType:this.listType,itemType:this.items.find(s=>s.key===t)?.type??this.items.find(s=>s.key===t)?.category})}};fa=new WeakMap,_a=new WeakMap,xa=new WeakMap,ka=new WeakMap,Sa=new WeakMap,wa=new WeakMap,Va=new WeakMap,Ea=new WeakMap,d([h({attribute:!1})],de.prototype,"items",1),d([h({attribute:!1})],de.prototype,"selectedKeys",1),d([h({attribute:!1})],de.prototype,"query",1),d([h({attribute:!1})],de.prototype,"activeTags",1),d([h({attribute:!1})],de.prototype,"itemTypes",1),d([h({attribute:!1})],de.prototype,"listType",1),d([h({attribute:!1})],de.prototype,"searchPlaceholder",1),d([h({attribute:!1})],de.prototype,"palette",1)});var cr,jr=b(()=>{"use strict";Lt();cr=class extends de{constructor(){super(),this._listType="oil",this._searchPlaceholder="Search oils"}}});var $a,Ca=b(()=>{"use strict";U();$a=B`:host {
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
}`});var ie,Wr=b(()=>{"use strict";U();fe();Ce();Ca();ue();Ne();me();ie=class extends j{static{this.styles=[W,$a]}#e;get items(){return this.#e}set items(e){this.#e=e}#t;get values(){return this.#t}set values(e){this.#t=e}#r;get constraints(){return this.#r}set constraints(e){this.#r=e}#i;get thresholds(){return this.#i}set thresholds(e){this.#i=e}#a;get unitPreferences(){return this.#a}set unitPreferences(e){this.#a=e}#s;get measurementSystem(){return this.#s}set measurementSystem(e){this.#s=e}#n;get basis(){return this.#n}set basis(e){this.#n=e}#o;get measurementScope(){return this.#o}set measurementScope(e){this.#o=e}#l;get measurementMeasure(){return this.#l}set measurementMeasure(e){this.#l=e}#c;get context(){return this.#c}set context(e){this.#c=e}#m;get role(){return this.#m}set role(e){this.#m=e}#u;get control(){return this.#u}set control(e){this.#u=e}#p;get unitDisplay(){return this.#p}set unitDisplay(e){this.#p=e}#d;get activeEmphasis(){return this.#d}set activeEmphasis(e){this.#d=e}#h;get palette(){return this.#h}set palette(e){this.#h=e}constructor(){super(),this.items=[],this.values={},this.constraints={},this.thresholds={},this.unitPreferences={},this.measurementSystem="",this.basis="",this.measurementScope="",this.measurementMeasure="",this.context=null,this.role="additive",this.control="slider",this.unitDisplay="picker",this.activeEmphasis=!0,this.theme={},this.palette=re}set state(e){let t=e??{};this.items=t.items??[],this.values=t.values??{},this.constraints=t.constraints??{},this.thresholds=t.thresholds??{},this.unitPreferences=t.unitPreferences??{},this.measurementSystem=t.measurementSystem??"",this.basis=t.basis??"",this.measurementScope=t.measurementScope??"",this.measurementMeasure=t.measurementMeasure??"",this.context=t.context??null,this.role=t.role??"additive",this.control=t.control??"slider",this.unitDisplay=t.unitDisplay??"picker",this.activeEmphasis=t.activeEmphasis!==!1,this.theme=t.theme??{},this.palette=t.palette??re}render(){return k`
      <div class="amount-list">
        ${this.items.length?X(this.items,e=>e.key,e=>{let t={item:e,value:this.values[e.key]??e.defaultValue??0,defaultValue:e.defaultValue,constraint:this.constraints[e.key]??{},hits:[],thresholds:this.thresholds[e.key]??e.thresholds??[],unitOptions:e.unitOptions??[],unitKey:this._unitKeyForItem(e),measurementSystem:this.measurementSystem,basis:this.basis,measurementScope:this.measurementScope,measurementMeasure:this.measurementMeasure,context:z(P({},this.context??{}),{density:this.context?.densities?.[e.material||e.key]??this.context?.density}),role:this.role,rangeMin:e.min??0,rangeMax:e.max??100,precision:e.precision,theme:this.theme,palette:this.palette,variant:"embedded",unitDisplay:this.unitDisplay,activeEmphasis:this.activeEmphasis};return this._renderControl(t)}):k`<div class="quiet">No selected amounts.</div>`}
      </div>
    `}_renderControl(e){return this.control==="constraint"?k`<vector-scalar-rail
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
        ></vector-scalar-rail>`:k`<vector-value-slider
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
        ></vector-value-slider>`}_unitKeyForItem(e){let t=this.unitPreferences[e.key]??"";return!t||!(e.unitOptions??[]).find(a=>a.key===t)?"":t}};d([h({attribute:!1})],ie.prototype,"items",1),d([h({attribute:!1})],ie.prototype,"values",1),d([h({attribute:!1})],ie.prototype,"constraints",1),d([h({attribute:!1})],ie.prototype,"thresholds",1),d([h({attribute:!1})],ie.prototype,"unitPreferences",1),d([h({attribute:!1})],ie.prototype,"measurementSystem",1),d([h({attribute:!1})],ie.prototype,"basis",1),d([h({attribute:!1})],ie.prototype,"measurementScope",1),d([h({attribute:!1})],ie.prototype,"measurementMeasure",1),d([h({attribute:!1})],ie.prototype,"context",1),d([h({attribute:!1})],ie.prototype,"role",1),d([h({attribute:!1})],ie.prototype,"control",1),d([h({attribute:!1})],ie.prototype,"unitDisplay",1),d([h({attribute:!1})],ie.prototype,"activeEmphasis",1),d([h({attribute:!1})],ie.prototype,"palette",1)});var Ma,Ta=b(()=>{"use strict";U();Ma=B`:host {
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
}`});var We,Qr=b(()=>{"use strict";U();fe();we();Ce();Ta();ue();ne();me();We=class extends j{static{this.styles=[W,Ma]}#e;get item(){return this.#e}set item(e){this.#e=e}#t;get options(){return this.#t}set options(e){this.#t=e}#r;get value(){return this.#r}set value(e){this.#r=e}#i;get role(){return this.#i}set role(e){this.#i=e}#a;get disabled(){return this.#a}set disabled(e){this.#a=e}constructor(){super(),this.item=null,this.options=[],this.value="",this.role="choice",this.disabled=!1,this.theme={}}set state(e){let t=e??{};this.item=t.item??null,this.options=t.options??t.item?.options??[],this.value=t.value??"",this.role=t.role??"choice",this.disabled=t.disabled??!1,this.theme=t.theme??{}}render(){return k`
      <div class="choice-control">
        ${this.item?k`<strong>${this.item.label||H(this.item.key)}</strong>`:Re}
        <div
          class="choices"
          role="group"
          aria-label=${this.item?.label||"Choice"}
        >
          ${X(this.options,e=>e.key??e.value??"",e=>{let t=e.value??e.key??"",r=t===this.value;return k`
                <button
                  type="button"
                  class=${L({selected:r})}
                  ?disabled=${this.disabled}
                  aria-pressed=${String(!!r)}
                  @click=${()=>this._select(t,e)}
                >
                  ${e.label??H(String(t))}
                </button>
              `})}
        </div>
      </div>
    `}_select(e,t){O(this,"vector-change",{source:"inspector",role:this.role,transactionId:R("choice"),key:this.item?.key,value:e,option:t})}};d([h({attribute:!1})],We.prototype,"item",1),d([h({attribute:!1})],We.prototype,"options",1),d([h({attribute:!1})],We.prototype,"value",1),d([h({attribute:!1})],We.prototype,"role",1),d([h({attribute:!1})],We.prototype,"disabled",1)});var Oa,Pa=b(()=>{"use strict";U();Oa=B`:host {
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
}`});var Ra,Na,Ia,Aa,et,Gr=b(()=>{"use strict";U();fe();Pa();ue();ne();me();et=class extends j{constructor(){super();$(this,Ra);$(this,Na);$(this,Ia);$(this,Aa);this._emit=t=>{let r=t.currentTarget,a=new FormData(r),s={min:Number(a.get("min")),max:Number(a.get("max")),locked:a.get("locked")==="on"};O(this,"vector-change",{source:"constraint",role:"constraint",transactionId:R("constraint"),key:this.item?.key,constraintRole:this.mode,constraint:s})};this.item=null,this.value=0,this.constraint={},this.mode="composition",this.theme={}}static{this.styles=[W,Oa]}get item(){return E(this,Ra)}set item(t){C(this,Ra,t)}get value(){return E(this,Na)}set value(t){C(this,Na,t)}get constraint(){return E(this,Ia)}set constraint(t){C(this,Ia,t)}get mode(){return E(this,Aa)}set mode(t){C(this,Aa,t)}render(){let t=this.item||{key:"",label:"Constraint"};return k`
      <form class="constraint-row" @change=${this._emit}>
        <strong>${t.label||H(t.key)}</strong>
        <span
          >${v(this.value,1)}${this.mode==="composition"?"%":""}</span
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
    `}};Ra=new WeakMap,Na=new WeakMap,Ia=new WeakMap,Aa=new WeakMap,d([h({attribute:!1})],et.prototype,"item",1),d([h({attribute:!1})],et.prototype,"value",1),d([h({attribute:!1})],et.prototype,"constraint",1),d([h({attribute:!1})],et.prototype,"mode",1)});var tt,mr=b(()=>{"use strict";tt=class{constructor(e){this.host=e;this.abortController=null;e.addController(this)}get active(){return this.abortController!==null}hostDisconnected(){this.cancel()}start(e){this.cancel();let t=new AbortController;this.abortController=t;let r={signal:t.signal};document.addEventListener("pointermove",e.move,r),document.addEventListener("pointerup",a=>{this.cancel(),e.end(a)},r),document.addEventListener("pointercancel",()=>{this.cancel(),e.cancel()},r)}cancel(){this.abortController?.abort(),this.abortController=null}}});function Ut(i,e){return(!e.measurementSystem||!i.system||i.system===e.measurementSystem)&&(!e.measurementScope||!i.scope||i.scope===e.measurementScope)&&(!e.measurementMeasure||!i.measure||i.measure===e.measurementMeasure)&&(!e.basis||!i.basis||i.basis===e.basis)}function Da(i,e,t){return i.find(r=>r.key===t.unitKey)??i.find(r=>!!r.system&&r.system===t.measurementSystem&&Ut(r,t))??i.find(r=>Ut(r,t))??i.find(r=>r.key===e?.defaultUnitKey&&Ut(r,t))??i[0]??null}function Fa(i,e,t){return typeof e?.fromCanonical=="function"?Number(e.fromCanonical(i,t)??0):i}function qa(i,e,t){return typeof e?.toCanonical=="function"?Number(e.toCanonical(i,t)??0):i}var La=b(()=>{"use strict"});function Ct(i){i.item=null,i.value=0,i.constraint={},i.role="composition",i.hits=[],i.rangeMin=0,i.rangeMax=100,i.precision=null,i.defaultValue=null,i.thresholds=[],i.unitOptions=[],i.unitKey="",i.measurementSystem="",i.basis="",i.measurementScope="",i.measurementMeasure="",i.context=null,i.disabled=!1,i.theme={},i.palette=re,i.variant="default",i.unitDisplay="picker",i.activeEmphasis=!0}var $t,rt,ur=b(()=>{"use strict";La();Ne();je();ne();$t={item:{attribute:!1},value:{attribute:!1},constraint:{attribute:!1},role:{attribute:!1},hits:{attribute:!1},rangeMin:{attribute:!1},rangeMax:{attribute:!1},precision:{attribute:!1},defaultValue:{attribute:!1},thresholds:{attribute:!1},unitOptions:{attribute:!1},unitKey:{attribute:!1},measurementSystem:{attribute:!1},basis:{attribute:!1},measurementScope:{attribute:!1},measurementMeasure:{attribute:!1},context:{attribute:!1},disabled:{attribute:!1},palette:{attribute:!1},variant:{attribute:!1},unitDisplay:{attribute:!1},activeEmphasis:{attribute:!1}};rt=class{constructor(e){this.host=e;e.addController(this)}hostConnected(){}get state(){let e=this.host;return{item:e.item,value:e.value,constraint:e.constraint,role:e.role,hits:e.hits,rangeMin:e.rangeMin,rangeMax:e.rangeMax,precision:e.precision,defaultValue:e.defaultValue,thresholds:e.thresholds,unitOptions:e.unitOptions,unitKey:e.unitKey,measurementSystem:e.measurementSystem,basis:e.basis,measurementScope:e.measurementScope,measurementMeasure:e.measurementMeasure,context:e.context,disabled:e.disabled,theme:e.theme,palette:e.palette,variant:e.variant,unitDisplay:e.unitDisplay,activeEmphasis:e.activeEmphasis}}setState(e){let t=this.host;Object.assign(t,{item:e.item??null,value:Number(e.value??0),constraint:e.constraint??{},role:e.role??"composition",hits:e.hits??[],rangeMin:Number(e.rangeMin??0),rangeMax:Number(e.rangeMax??100),precision:e.precision==null?null:Number(e.precision),defaultValue:e.defaultValue==null?null:Number(e.defaultValue),thresholds:e.thresholds??e.item?.thresholds??[],unitOptions:e.unitOptions??e.item?.unitOptions??[],unitKey:e.unitKey??"",measurementSystem:e.measurementSystem??"",basis:e.basis??"",measurementScope:e.measurementScope??"",measurementMeasure:e.measurementMeasure??"",context:e.context??null,disabled:!!e.disabled,theme:e.theme??{},palette:qt(e.palette),variant:e.variant??"default",unitDisplay:e.unitDisplay??"picker",activeEmphasis:e.activeEmphasis!==!1})}patchState(e){Object.assign(this.host,e)}viewState(){let e=this.host,t=this.domain(),r=this.min(),a=this.max(),s=K(e.value,t.min,t.max),n=this.places(),o=this.toDisplay(r),l=this.toDisplay(a),m=this.toDisplay(s);return{domain:t,min:r,max:a,value:s,displayMin:o,displayMax:l,displayValue:m,locked:!!e.constraint.locked,places:n,unit:this.unit(),itemColor:_e(e.item,0,e.palette),minPct:this.pct(r),maxPct:this.pct(a),valuePct:this.pct(s),minText:pe(o,n),maxText:pe(l,n),valueText:pe(m,n),domainMinText:pe(this.toDisplay(t.min),n),domainMaxText:pe(this.toDisplay(t.max),n),displayStep:this.displayStep(),thresholdKey:this.thresholdFor(s)?.key??""}}changeUnit(e){let t=this.host.unitOptions.find(r=>r.key===e);t&&(this.host.unitKey=e,O(this.host,"vector-change",{source:"inspector",role:"measurement",transactionId:R("rail-unit"),key:this.host.item?.key,unitKey:e,basis:t.basis,measurementScope:t.scope??this.host.measurementScope,measurementMeasure:t.measure??this.host.measurementMeasure,measurementSystem:t.system??this.host.measurementSystem}))}handleValue(e){return e==="min"?this.min():e==="max"?this.max():this.host.value}domain(){let e=Number.isFinite(Number(this.host.item?.min))?Number(this.host.item?.min):this.host.rangeMin,t=Number.isFinite(Number(this.host.item?.max))?Number(this.host.item?.max):this.host.rangeMax;return{min:Number.isFinite(e)?e:0,max:Number.isFinite(t)?t:100}}min(){return Number.isFinite(Number(this.host.constraint.min))?Number(this.host.constraint.min):this.domain().min}max(){return Number.isFinite(Number(this.host.constraint.max))?Number(this.host.constraint.max):this.domain().max}pct(e){let t=this.domain();return K((Number(e??0)-t.min)/(t.max-t.min||1)*100,0,100)}step(){let e=this.unitOption();if(e?.step!=null&&Number.isFinite(Number(e.step))){let t=this.toCanonical(0);return Math.abs(this.toCanonical(Number(e.step))-t)||Number(e.step)}return Number(this.host.constraint.step??this.host.item?.step??1)}places(){if(Number.isFinite(this.host.precision))return Math.max(0,Number(this.host.precision));let e=this.unitOption();return e?.precision!=null&&Number.isFinite(Number(e.precision))?Math.max(0,Number(e.precision)):Et(this.displayStep())}unit(){return this.unitOption()?.symbol??(this.host.role==="composition"?"%":this.host.item?.unit??"")}unitOption(){return Da(this.host.unitOptions,this.host.item,this.preferences())}unitMatchesOption(e){return e?Ut(e,this.preferences()):!1}toDisplay(e){return Fa(Number(e??0),this.unitOption(),this.conversionContext())}toCanonical(e){return qa(Number(e??0),this.unitOption(),this.conversionContext())}displayStep(){let e=this.unitOption();if(e?.step!=null&&Number.isFinite(Number(e.step)))return Number(e.step);let t=this.toDisplay(0);return Math.abs(this.toDisplay(this.step())-t)||this.step()}thresholdFor(e){return this.host.thresholds.find(t=>Number(e)>=Number(t.min)&&Number(e)<=Number(t.max))??null}handleHitClass(e){let t=this.host.hits.filter(r=>r.key===this.host.item?.key);return e==="min"&&t.some(r=>r.type==="min")||e==="max"&&t.some(r=>r.type==="max")||e==="value"&&t.some(r=>["locked","unreachable","solver","sum"].includes(r.type))?"hit":""}preferences(){let e=this.host;return{unitKey:e.unitKey,measurementSystem:e.measurementSystem,basis:e.basis,measurementScope:e.measurementScope,measurementMeasure:e.measurementMeasure}}conversionContext(){let e=this.host,t=e.context&&typeof e.context=="object"?e.context:{};return z(P({},t),{item:e.item,measurementSystem:e.measurementSystem,basis:e.basis,measurementScope:e.measurementScope,measurementMeasure:e.measurementMeasure})}}});function pr(i){return X(i.thresholds,e=>e.key,e=>{let t=i.percent(e.min),r=i.percent(e.max),a=i.activeThreshold(i.value)?.key===e.key;return k`
        <span
          class=${L({"threshold-band":!0,[e.severity??"ok"]:!0,active:a})}
          ${Z({"--threshold-start":`${t}%`,"--threshold-width":`${Math.max(0,r-t)}%`,"--threshold-color":e.color??null})}
          title=${e.label??e.key}
        ></span>
      `})}var Xr=b(()=>{"use strict";U();we();Ce();ze()});var Ua,Ka=b(()=>{"use strict";U();Ua=B`:host {
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
}`});var Ha,Ba,za,Mt,Yr=b(()=>{"use strict";U();fe();we();ze();mr();ur();ue();Xr();Ka();Ne();je();ne();me();Mt=class extends j{constructor(){super();$(this,Ha,"composition");this.scalar=new rt(this);this.pointerDrag=new tt(this);$(this,Ba);$(this,za,null);Ct(this)}static{this.properties=$t}get role(){return E(this,Ha)}set role(t){C(this,Ha,t)}get railElement(){return E(this,Ba)}set railElement(t){C(this,Ba,t)}static{this.styles=[W,Ua]}get _drag(){return E(this,za)}set _drag(t){C(this,za,t)}set state(t){this.scalar.setState(t)}get state(){return this.scalar.state}render(){if(!this.item)return k` <div class="empty">Select an item.</div> `;let t=this.scalar.domain(),r=this.scalar.min(),a=this.scalar.max(),s=K(this.value,t.min,t.max),n=!!this.constraint.locked,o=this.scalar.viewState(),l=this.scalar.pct(r),m=this.scalar.pct(a),g=this.scalar.pct(s),f=o.unit,w=_e(this.item,0,this.palette),M=o.minText,T=o.maxText,V=o.valueText,_=this.variant==="embedded",D=n?"Unlock value":"Lock value",F=()=>k`
      <button
        class=${L({"lock-button":!0,locked:n})}
        data-lock
        type="button"
        aria-pressed=${String(n)}
        aria-label=${D}
        title=${D}
        ?disabled=${this.disabled}
        @click=${()=>this._toggleLock()}
      >
        ${n?Dt:na}
      </button>
    `;return k`
      <section
        class=${L({"rail-control":!0,embedded:_,disabled:this.disabled,dragging:!!this._drag})}
        data-threshold=${o.thresholdKey||""}
      >
        ${_?"":k`<header>
              <span
                class="swatch"
                ${Z({"--item-color":w})}
              ></span>
              <strong>${this.item.label||H(this.item.key)}</strong>
              <output>${V}${f}</output>
              ${F()}
            </header>`}

        <div class="rail-body">
          <div class="rail" data-rail>
            <div class="full-track"></div>
            <div
              class="allowed-track"
              ${Z({"--range-start":`${l}%`,"--range-width":`${Math.max(0,m-l)}%`})}
            ></div>
            <div class="threshold-track" aria-hidden="true">
              ${pr({thresholds:this.thresholds,value:this.value,percent:S=>this.scalar.pct(S),activeThreshold:S=>this.scalar.thresholdFor(S)})}
            </div>
            ${this.defaultValue==null?"":k`<span
                  class="default-marker"
                  ${Z({"--rail-position":`${this.scalar.pct(this.defaultValue)}%`})}
                  title="Default"
                ></span>`}
            <button
              class=${L({handle:!0,min:!0,hit:!!this.scalar.handleHitClass("min"),active:this._drag?.handle==="min"})}
              data-handle="min"
              ${Z({"--rail-position":`${l}%`})}
              type="button"
              aria-label=${`Minimum ${M}${f}`}
              ?disabled=${this.disabled}
              @pointerdown=${S=>this._startDrag(S,"min")}
              @keydown=${S=>this._keydown(S,"min")}
            >
              <span class="handle-label">min</span>
              <span class="handle-dot"></span>
              <span class="handle-value">${M}${f}</span>
            </button>
            <button
              class=${L({handle:!0,value:!0,locked:n,hit:!!this.scalar.handleHitClass("value"),active:this._drag?.handle==="value"})}
              data-handle="value"
              ${Z({"--rail-position":`${g}%`})}
              type="button"
              aria-label=${`Value ${V}${f}`}
              ?disabled=${this.disabled}
              @pointerdown=${S=>this._startDrag(S,"value")}
              @keydown=${S=>this._keydown(S,"value")}
            >
              <span class="handle-label">value</span>
              <span class="handle-dot">${n?Dt:""}</span>
              <span class="handle-value">${V}${f}</span>
            </button>
            <button
              class=${L({handle:!0,max:!0,hit:!!this.scalar.handleHitClass("max"),active:this._drag?.handle==="max"})}
              data-handle="max"
              ${Z({"--rail-position":`${m}%`})}
              type="button"
              aria-label=${`Maximum ${T}${f}`}
              ?disabled=${this.disabled}
              @pointerdown=${S=>this._startDrag(S,"max")}
              @keydown=${S=>this._keydown(S,"max")}
            >
              <span class="handle-label">max</span>
              <span class="handle-dot"></span>
              <span class="handle-value">${T}${f}</span>
            </button>
          </div>
          ${_?F():""}
        </div>

        <div class="exact-row">
          <label
            >Min<input
              data-exact="min"
              type="number"
              min=${o.domainMinText}
              max=${o.domainMaxText}
              step=${o.displayStep}
              .value=${M}
              ?disabled=${this.disabled}
              @change=${S=>this._emitInputTarget("min",Number(S.currentTarget.value),"vector-change",R("rail-input"))}
          /></label>
          <label
            >Value<input
              data-exact="value"
              type="number"
              min=${o.domainMinText}
              max=${o.domainMaxText}
              step=${o.displayStep}
              .value=${V}
              ?disabled=${n||this.disabled}
              @change=${S=>this._emitInputTarget("value",Number(S.currentTarget.value),"vector-change",R("rail-input"))}
          /></label>
          <label
            >Max<input
              data-exact="max"
              type="number"
              min=${o.domainMinText}
              max=${o.domainMaxText}
              step=${o.displayStep}
              .value=${T}
              ?disabled=${this.disabled}
              @change=${S=>this._emitInputTarget("max",Number(S.currentTarget.value),"vector-change",R("rail-input"))}
          /></label>
        </div>
        ${this.unitOptions.length>1?k`
              <label class="unit-row"
                >Unit
                <select
                  data-unit
                  .value=${this.scalar.unitOption()?.key||""}
                  ?disabled=${this.disabled}
                  @change=${S=>this.scalar.changeUnit(S.currentTarget.value)}
                >
                  ${this.unitOptions.map(S=>k`<option
                        value=${S.key}
                        ?selected=${S.key===this.scalar.unitOption()?.key}
                      >
                        ${S.label}
                      </option>`)}
                </select>
              </label>
            `:Re}
      </section>
    `}_startDrag(t,r){if(!(this.disabled||t.button>0)){if(t.preventDefault(),r==="value"&&this.constraint.locked){this._emitLockedHit();return}this._drag={handle:r,transactionId:R("rail"),startX:t.clientX,startValue:this.scalar.handleValue(r),latestTarget:this.scalar.handleValue(r)},this.pointerDrag.start({move:a=>this._dragMove(a),end:()=>this._dragEnd(),cancel:()=>this._cancelDrag()})}}_dragMove(t){if(!this._drag)return;let r=this.railElement,a=Math.max(1,r?.getBoundingClientRect?.().width||1),s=this.scalar.domain(),n=(t.clientX-this._drag.startX)/a*(s.max-s.min),o=se(this._drag.startValue+n,this.scalar.step());this._drag.latestTarget=o,this._emitHandleTarget(this._drag.handle,o,"vector-preview",this._drag.transactionId)}_dragEnd(){if(!this._drag)return;let t=this._drag.handle,r=this._drag.transactionId,a=this._drag.latestTarget??this._drag.startValue;this._emitHandleTarget(t,a,"vector-change",r),this._drag=null,this.requestUpdate()}_cancelDrag(){this._drag&&(O(this,"vector-cancel",{source:"constraint",role:this.role,transactionId:this._drag.transactionId,key:this.item?.key}),this._drag=null,this.requestUpdate())}_keydown(t,r){if(this.disabled)return;let a=this.scalar.step(),s=null;if((t.key===" "||t.key==="Enter")&&r==="value"&&this.constraint.locked){t.preventDefault(),this._toggleLock();return}if(r==="value"&&this.constraint.locked){["ArrowLeft","ArrowDown","ArrowRight","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this._emitLockedHit());return}if(t.key==="ArrowRight"||t.key==="ArrowUp"?s=this.scalar.handleValue(r)+a:t.key==="ArrowLeft"||t.key==="ArrowDown"?s=this.scalar.handleValue(r)-a:t.key==="Home"?s=this.scalar.domain().min:t.key==="End"?s=this.scalar.domain().max:t.key==="Escape"&&this._cancelDrag(),s==null)return;t.preventDefault();let n=R("rail-key");this._emitHandleTarget(r,s,"vector-preview",n),this._emitHandleTarget(r,s,"vector-change",n)}_emitHandleTarget(t,r,a,s){if(!this.item?.key)return;let n=this.scalar.unitOption();if(t==="value"){if(this.constraint.locked){this._emitLockedHit(s);return}let g=se(r,this.scalar.step()),f=K(g,this.scalar.min(),this.scalar.max()),w=this.scalar.thresholdFor(f),M=[];g<this.scalar.min()&&M.push(te(this.item.key,"min",`${this.item.label||H(this.item.key)} hit minimum ${v(this.scalar.toDisplay(this.scalar.min()),this.scalar.places())}${this.scalar.unit()}.`)),g>this.scalar.max()&&M.push(te(this.item.key,"max",`${this.item.label||H(this.item.key)} hit maximum ${v(this.scalar.toDisplay(this.scalar.max()),this.scalar.places())}${this.scalar.unit()}.`));let T={source:"inspector",role:this.role,transactionId:s,key:this.item.key,previousValue:{[this.item.key]:this.value},requestedValue:{[this.item.key]:g},proposedValue:{[this.item.key]:f},delta:v(f-this.value,4),unitKey:n?.key,basis:n?.basis??this.basis??this.item?.basis,measurementScope:n?.scope??this.measurementScope,measurementMeasure:n?.measure??this.measurementMeasure,displayValue:this.scalar.toDisplay(f),canonicalValue:f,thresholdKey:w?.key,measurementSystem:this.measurementSystem||n?.system,hits:M};O(this,a,T),M.length&&O(this,"vector-constraint-hit",T);return}let o=this.scalar.domain(),l=se(K(r,o.min,o.max),this.scalar.step()),m=t==="min"?{min:l}:{max:l};O(this,a,{source:"constraint",role:"constraint",transactionId:s,key:this.item.key,constraintRole:this.role,constraint:m,unitKey:n?.key,basis:n?.basis||this.basis||this.item?.basis,measurementScope:n?.scope||this.measurementScope,measurementMeasure:n?.measure||this.measurementMeasure,displayValue:this.scalar.toDisplay(l),canonicalValue:l,measurementSystem:this.measurementSystem||n?.system})}_emitInputTarget(t,r,a,s){this._emitHandleTarget(t,this.scalar.toCanonical(r),a,s)}_toggleLock(){this.disabled||O(this,"vector-change",{source:"constraint",role:"constraint",transactionId:R("rail-lock"),key:this.item?.key,constraintRole:this.role,constraint:{locked:!this.constraint.locked}})}_emitLockedHit(t=R("rail-locked")){let r=te(this.item?.key??"constraint","locked",`${this.item?.label??H(this.item?.key??"constraint")} is locked.`);O(this,"vector-constraint-hit",{source:"constraint",role:this.role,transactionId:t,key:this.item?.key,unitKey:this.scalar.unitOption()?.key,basis:this.scalar.unitOption()?.basis||this.basis||this.item?.basis,measurementScope:this.scalar.unitOption()?.scope||this.measurementScope,measurementMeasure:this.scalar.unitOption()?.measure||this.measurementMeasure,measurementSystem:this.measurementSystem||this.scalar.unitOption()?.system,hits:[r]})}};Ha=new WeakMap,Ba=new WeakMap,za=new WeakMap,d([Be("[data-rail]")],Mt.prototype,"railElement",1),d([_t()],Mt.prototype,"_drag",1)});var dr,Zr=b(()=>{"use strict";Lt();dr=class extends de{constructor(){super(),this._listType="ingredient",this._searchPlaceholder="Search additives"}}});var ja,Wa=b(()=>{"use strict";U();ja=B`:host {
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
}`});var Qe,Jr=b(()=>{"use strict";U();fe();ze();Wa();ue();Ne();je();ne();me();Qe=class extends j{static{this.styles=[W,ja]}#e;get item(){return this.#e}set item(e){this.#e=e}#t;get value(){return this.#t}set value(e){this.#t=e}#r;get constraint(){return this.#r}set constraint(e){this.#r=e}#i;get role(){return this.#i}set role(e){this.#i=e}#a;get palette(){return this.#a}set palette(e){this.#a=e}constructor(){super(),this.item=null,this.value=0,this.constraint={},this.role="composition",this.theme={},this.palette=re}render(){if(!this.item)return k` <div class="empty">Select an oil or quality.</div> `;let e=Number(this.constraint.min??this.item.min??0),t=Number(this.constraint.max??this.item.max??100),r=Number(this.constraint.step??this.item.step??(this.role==="composition"?.1:1));return k`
      <section class="inspector">
        <header>
          <span
            class="swatch"
            ${Z({"--item-color":_e(this.item,0,this.palette)})}
          ></span>
          <strong>${this.item.label||H(this.item.key)}</strong>
          <span
            >${v(this.value,1)}${this.role==="composition"?"%":""}</span
          >
        </header>
        <input
          class="range"
          type="range"
          min=${e}
          max=${t}
          step=${r}
          .value=${String(this.value)}
          ?disabled=${!!this.constraint.locked}
          @input=${a=>this._emit(Number(a.currentTarget.value),"vector-preview")}
          @change=${a=>this._emit(Number(a.currentTarget.value),"vector-change")}
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
            max=${t}
            step=${r}
            .value=${String(v(this.value,2))}
            ?disabled=${!!this.constraint.locked}
            @change=${a=>this._emit(Number(a.currentTarget.value),"vector-change")}
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
    `}_emit(e,t){let r=this.item;if(!r)return;let a=K(e,this.constraint.min??r.min??0,this.constraint.max??r.max??100);O(this,t,{source:"inspector",role:this.role,transactionId:R("inspector"),key:r.key,requestedValue:{[r.key]:a},proposedValue:{[r.key]:a},delta:v(a-this.value,4)})}};d([h({attribute:!1})],Qe.prototype,"item",1),d([h({attribute:!1})],Qe.prototype,"value",1),d([h({attribute:!1})],Qe.prototype,"constraint",1),d([h({attribute:!1})],Qe.prototype,"role",1),d([h({attribute:!1})],Qe.prototype,"palette",1)});var Qa,Ga=b(()=>{"use strict";U();Qa=B`:host {
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
}`});function vr(i,e,t,r,a){let s=Number(i.min??0),n=Number(i.max??100),o=n===s?0:K((Number(e||0)-s)/(n-s),0,1);return Kt(Tt(t,r),a*o)}function Tt(i,e){return-Math.PI/2+i*(Math.PI*2/Math.max(1,e))}function Kt(i,e){return{x:v(Math.cos(i)*e,2),y:v(Math.sin(i)*e,2)}}function Ya(i){let e=Math.max(1,Math.hypot(i.x,i.y));return{x:v(i.x+i.x/e*15,2),y:v(i.y+i.y/e*15+3,2)}}function Za(i,e){return Ot(Array.from({length:i},(t,r)=>Kt(Tt(r,i),e)))}function Ja(i,e){return Xa(i)-Xa(e)}function Xa(i){let e=i.dataset||{};return"lockBadge"in e?0:e.limitType==="min"?1:e.limitType==="max"?2:3}function Ot(i){return i.filter(e=>e!==null).map(e=>`${e.x},${e.y}`).join(" ")}function es(i,e,t){if(Math.abs(e-i)>=359.99)return["M 0 0",`m ${-t}, 0`,`a ${t},${t} 0 1,0 ${t*2},0`,`a ${t},${t} 0 1,0 ${-t*2},0`,"Z"].join(" ");let r=hr(i,t),a=hr(e,t),s=Math.abs(e-i)>180?1:0;return`M 0 0 L ${r.x} ${r.y} A ${t} ${t} 0 ${s} 1 ${a.x} ${a.y} Z`}function hr(i,e){let t=br(i);return{x:v(Math.cos(t)*e,2),y:v(Math.sin(t)*e,2)}}function br(i){return i*Math.PI/180}var ei=b(()=>{"use strict";ne()});var ts,rs,is,as,ss,ns,os,ls,cs,ms,us,ps,ds,hs,vs,ae,ti=b(()=>{"use strict";U();fe();we();Ce();ze();mr();Ga();ue();Ne();je();ei();ne();me();ae=class extends j{constructor(){super();this.pointerDrag=new tt(this);$(this,ts);$(this,rs);$(this,is);$(this,as);$(this,ss);$(this,ns);$(this,os);$(this,ls);$(this,cs);$(this,ms);$(this,us);$(this,ps);$(this,ds);$(this,hs);$(this,vs);this.items=[],this.value={},this.constraints={},this.total=100,this.selectedKey="",this.hits=[],this.disabled=!1,this._drag=null,this.precision=null,this.centerValue=null,this.centerLabel="",this.centerPrecision=null,this.theme={},this.palette=re,this._decoratorPositions=new Map}get decoratorSlot(){return E(this,ts)}set decoratorSlot(t){C(this,ts,t)}get chartShell(){return E(this,rs)}set chartShell(t){C(this,rs,t)}static{this.styles=[W,Qa]}get _drag(){return E(this,is)}set _drag(t){C(this,is,t)}get items(){return E(this,as)}set items(t){C(this,as,t)}get value(){return E(this,ss)}set value(t){C(this,ss,t)}get constraints(){return E(this,ns)}set constraints(t){C(this,ns,t)}get total(){return E(this,os)}set total(t){C(this,os,t)}get selectedKey(){return E(this,ls)}set selectedKey(t){C(this,ls,t)}get hits(){return E(this,cs)}set hits(t){C(this,cs,t)}get disabled(){return E(this,ms)}set disabled(t){C(this,ms,t)}get precision(){return E(this,us)}set precision(t){C(this,us,t)}get centerValue(){return E(this,ps)}set centerValue(t){C(this,ps,t)}get centerLabel(){return E(this,ds)}set centerLabel(t){C(this,ds,t)}get centerPrecision(){return E(this,hs)}set centerPrecision(t){C(this,hs,t)}get palette(){return E(this,vs)}set palette(t){C(this,vs,t)}set state(t){this._setPieState(t??{})}get state(){return{items:this.items,value:this.value,constraints:this.constraints,total:this.total,selectedKey:this.selectedKey,hits:this.hits,disabled:this.disabled,precision:this.precision,centerValue:this.centerValue,centerLabel:this.centerLabel,centerPrecision:this.centerPrecision,theme:this.theme,palette:this.palette}}render(){let t=this._orderedEntries(),r=t.reduce((V,[,_])=>V+Number(_??0),0)||this.total,a=new Set(this.hits.map(V=>V.key)),s=this._places(),n=this.centerValue!=null,o=n?this.centerValue:r,l=this.centerPrecision==null?s:Number(this.centerPrecision||0),m=n?typeof o=="number"?pe(o,l):String(o):`${pe(r,s)}%`,g=this.centerLabel||"total",f=-90,w=new Map,M=X(t,([V])=>V,([V,_],D)=>{let F=this._itemFor(V,D),S=_e(F,D,this.palette),G=!!(this.constraints[V]??{}).locked,Q=Number(_??0)/r*360,I=f,ve=f+Q;f=ve;let vt=V===this.selectedKey,Te=a.has(V),Oe=(I+ve)/2,Ae=vt||Te?5:0,x=Math.cos(br(Oe))*Ae,gi=Math.sin(br(Oe))*Ae,fi=G?" locked":"",_i=pe(_,s),xi=hr(Oe,61.5);return w.set(V,{x:v((xi.x+x+104)/208*100,4),y:v((xi.y+gi+104)/208*100,4)}),$e`
        <g class="slice-wrap" transform="translate(${v(x,2)} ${v(gi,2)})">
          <path
            class=${L({slice:!0,selected:vt,hit:Te})}
            d="${es(I,ve,82)}"
            fill=${S}
            tabindex="0"
            role="button"
            aria-label=${`${F.label} ${_i} percent${fi}`}
            data-key=${V}
            @click=${()=>this._select(V)}
            @keydown=${Rt=>this._keydown(Rt,V)}
            @wheel=${Rt=>this._wheel(Rt,V)}
            @pointerdown=${Rt=>this._startDrag(Rt,V)}
          >
            <title>${F.label}: ${_i}%${fi}</title>
          </path>
        </g>
      `});this._decoratorPositions=w;let T=X(t,([V])=>V,([V,_],D)=>{let F=this._itemFor(V,D),S=!!(this.constraints[V]||{}).locked;return k`
          <button
            class=${L({"legend-item":!0,selected:V===this.selectedKey})}
            data-key=${V}
            @click=${()=>this._select(V)}
          >
            <span
              class="swatch"
              ${Z({"--item-color":_e(F,D,this.palette)})}
            ></span>
            <span>${F.label}</span>
            <strong
              >${S?`${Dt} `:""}${pe(_,s)}%</strong
            >
          </button>
        `});return k`
      <div class=${L({"chart-shell":!0,disabled:this.disabled})}>
        <div class="pie-frame">
          <svg
            class="pie"
            viewBox="-104 -104 208 208"
            aria-label="Oil percentage pie chart"
          >
            <circle class="base" cx="0" cy="0" r="82"></circle>
            ${M}
            <circle class="hole" cx="0" cy="0" r="32"></circle>
            <text class="center" x="0" y="-3" text-anchor="middle">
              ${m}
            </text>
            <text class="center-label" x="0" y="13" text-anchor="middle">
              ${g}
            </text>
          </svg>
          <div class="decorator-layer">
            <slot
              name="slice-decorator"
              @slotchange=${()=>this._positionDecorators()}
            ></slot>
          </div>
        </div>
        <div class="legend">${T}</div>
        <div class="after-legend">
          <slot name="after-legend"></slot>
        </div>
      </div>
    `}updated(){this._positionDecorators()}_patchPieState(t){Object.assign(this,t)}_setPieState(t){let r={items:t.items??[],value:ee(t.value??{}),constraints:t.constraints??{},total:Number(t.total??100),selectedKey:t.selectedKey??"",hits:t.hits??[],disabled:!!t.disabled,precision:t.precision==null?null:Number(t.precision),centerValue:t.centerValue??null,centerLabel:t.centerLabel??"",centerPrecision:t.centerPrecision==null?null:Number(t.centerPrecision),theme:t.theme??{},palette:qt(t.palette)};this.items=r.items,this.value=r.value,this.constraints=r.constraints,this.total=r.total,this.selectedKey=r.selectedKey,this.hits=r.hits,this.disabled=r.disabled,this.precision=r.precision,this.centerValue=r.centerValue,this.centerLabel=r.centerLabel,this.centerPrecision=r.centerPrecision,this.theme=r.theme,this.palette=r.palette}positionDecorators(){this._positionDecorators()}_positionDecorators(){let t=this.decoratorSlot?.assignedElements({flatten:!0})??[],r=new Map;t.forEach(a=>{let s=a.dataset.key,n=s?this._decoratorPositions.get(s):void 0;if(!s||!n){a.hidden=!0;return}r.has(s)||r.set(s,{point:n,decorators:[]}),r.get(s)?.decorators.push(a)}),r.forEach(({point:a,decorators:s})=>{s.sort(Ja),s.forEach((n,o)=>{let l=(o-(s.length-1)/2)*18;n.hidden=!1,n.style?.setProperty?.("--decorator-x",`${a.x}%`),n.style?.setProperty?.("--decorator-y",`${a.y}%`),n.style?.setProperty?.("--decorator-offset-x",`${v(l,2)}px`),n.style?.setProperty?.("--decorator-offset-y","0px")})})}_select(t){this.disabled||(this.selectedKey=t,O(this,"vector-select",{source:"pie",role:"composition",transactionId:R("select"),key:t}))}_startDrag(t,r){this.disabled||t.button>0||(t.preventDefault(),this._select(r),this._drag={key:r,transactionId:R("pie"),startX:t.clientX,startY:t.clientY,startValue:ee(this.value),latest:null},this.pointerDrag.start({move:a=>this._dragMove(a),end:a=>this._dragEnd(a),cancel:()=>this._cancelDrag()}))}_dragMove(t){if(!this._drag)return;let r=this.constraints[this._drag.key]??{},a=Number(r.step??1),s=this._drag.startY-t.clientY+(t.clientX-this._drag.startX),n=se(s/10,a),o=Number(this._drag.startValue[this._drag.key]??0)+n;this._previewTarget(o)}_dragEnd(t){if(!this._drag)return;let r=this.chartShell?.getBoundingClientRect();if(r?t.clientX<r.left-20||t.clientX>r.right+20||t.clientY<r.top-20||t.clientY>r.bottom+20:!1){this._cancelDrag();return}let s=this._drag.latest;s&&O(this,"vector-change",s),this._drag=null}_cancelDrag(){this._drag&&(O(this,"vector-cancel",{source:"pie",role:"composition",transactionId:this._drag.transactionId,previousValue:this._drag.startValue}),this._drag=null)}_wheel(t,r){if(this.disabled)return;t.preventDefault();let a=this.constraints[r]??{},s=Number(a.step??1),n=t.deltaY<0?1:-1,o=Number(this.value[r]??0)+n*s,l=R("pie-wheel"),m=this._detailForTarget(r,o,l,this.value);O(this,"vector-preview",m),O(this,"vector-change",m)}_keydown(t,r){let a=this.constraints[r]??{},s=Number(a.step??1),n=null;if(t.key==="ArrowUp"||t.key==="ArrowRight"?n=Number(this.value[r]??0)+s:t.key==="ArrowDown"||t.key==="ArrowLeft"?n=Number(this.value[r]??0)-s:t.key==="Home"?n=Number(a.min??0):t.key==="End"?n=Number(a.max??this.total):t.key==="Escape"&&(this._cancelDrag(),O(this,"vector-cancel",{source:"pie",role:"composition",transactionId:R("pie-cancel"),previousValue:this.value})),n==null)return;t.preventDefault();let o=this._detailForTarget(r,n,R("pie-key"),this.value);O(this,"vector-preview",o),O(this,"vector-change",o)}_previewTarget(t){let r=this._drag;if(!r)return;let a=this._detailForTarget(r.key,t,r.transactionId,r.startValue);r.latest=a,O(this,"vector-preview",a),a.hits?.length&&O(this,"vector-constraint-hit",a)}_detailForTarget(t,r,a,s){let n=pt({value:s,key:t,target:r,constraints:this.constraints,items:this.items,total:this.total});return{source:"pie",role:"composition",transactionId:a,key:t,previousValue:s,requestedValue:z(P({},s),{[t]:r}),proposedValue:n.vector,delta:n.delta,hits:n.hits}}_orderedEntries(){let t=this.items.map(a=>a.key);return[...new Set([...t,...Object.keys(this.value||{})])].filter(a=>a in this.value).sort((a,s)=>{let n=this.items.find(l=>l.key===a),o=this.items.find(l=>l.key===s);return Number(n?.order||0)-Number(o?.order||0)}).map(a=>[a,Number(this.value[a]??0)])}_itemFor(t,r){return this.items.find(a=>a.key===t)??{key:t,label:H(t),color:Br(r,this.palette)}}_places(){if(Number.isFinite(this.precision))return Math.max(0,Number(this.precision));let t=Object.values(this.constraints||{}).map(r=>Number(r?.step)).filter(r=>Number.isFinite(r)&&r>0);return t.length?Math.max(...t.map(r=>Et(r))):1}};ts=new WeakMap,rs=new WeakMap,is=new WeakMap,as=new WeakMap,ss=new WeakMap,ns=new WeakMap,os=new WeakMap,ls=new WeakMap,cs=new WeakMap,ms=new WeakMap,us=new WeakMap,ps=new WeakMap,ds=new WeakMap,hs=new WeakMap,vs=new WeakMap,d([Be('slot[name="slice-decorator"]')],ae.prototype,"decoratorSlot",1),d([Be(".chart-shell")],ae.prototype,"chartShell",1),d([_t()],ae.prototype,"_drag",1),d([h({attribute:!1})],ae.prototype,"items",1),d([h({attribute:!1})],ae.prototype,"value",1),d([h({attribute:!1})],ae.prototype,"constraints",1),d([h({attribute:!1})],ae.prototype,"total",1),d([h({attribute:!1})],ae.prototype,"selectedKey",1),d([h({attribute:!1})],ae.prototype,"hits",1),d([h({attribute:!1})],ae.prototype,"disabled",1),d([h({attribute:!1})],ae.prototype,"precision",1),d([h({attribute:!1})],ae.prototype,"centerValue",1),d([h({attribute:!1})],ae.prototype,"centerLabel",1),d([h({attribute:!1})],ae.prototype,"centerPrecision",1),d([h({attribute:!1})],ae.prototype,"palette",1)});var bs,ys=b(()=>{"use strict";U();bs=B`:host {
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
}`});var gs,yr,ri=b(()=>{"use strict";U();we();ys();ne();me();ur();ue();yr=class extends j{constructor(){super();$(this,gs,"composition");this.scalar=new rt(this);Ct(this)}static{this.properties=$t}get role(){return E(this,gs)}set role(t){C(this,gs,t)}static{this.styles=[W,bs]}set state(t){this.scalar.setState(t)}get state(){return this.scalar.state}render(){if(!this.item)return k` <div class="empty">Select an item.</div> `;let t=this.scalar.viewState(),r=this.scalar.unitOption();return k`
      <section
        class=${L({"quantity-input":!0,disabled:this.disabled})}
      >
        <label>
          <span>${this.item.label||H(this.item.key)}</span>
          <span class="input-wrap">
            <input
              data-quantity
              type="number"
              min=${t.domainMinText}
              max=${t.domainMaxText}
              step=${t.displayStep}
              .value=${t.valueText}
              ?disabled=${this.disabled}
              @change=${a=>this._emitQuantityValue(Number(a.currentTarget.value),"vector-change",R("quantity-input"))}
            />
            <span class="unit-suffix">${r?.symbol||t.unit}</span>
          </span>
        </label>
      </section>
    `}_emitQuantityValue(t,r,a){if(!this.item?.key)return;let s=this.scalar.unitOption(),n=this.scalar.toCanonical(t),o=se(n,this.scalar.step()),l=K(o,this.scalar.min(),this.scalar.max());O(this,r,{source:"inspector",role:this.role,transactionId:a,key:this.item.key,previousValue:{[this.item.key]:this.value},requestedValue:{[this.item.key]:o},proposedValue:{[this.item.key]:l},delta:v(l-this.value,4),unitKey:s?.key,basis:s?.basis||this.basis||this.item?.basis,measurementScope:s?.scope||this.measurementScope,measurementMeasure:s?.measure||this.measurementMeasure,displayValue:this.scalar.toDisplay(l),canonicalValue:l,measurementSystem:this.measurementSystem||s?.system,hits:[]})}};gs=new WeakMap});var fs,_s=b(()=>{"use strict";U();fs=B`:host {
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
}`});var xs,ks,Ss,ws,Vs,Es,$s,Cs,Ms,Ts,Os,Ps,Rs,ce,ii=b(()=>{"use strict";U();fe();we();Ce();mr();_s();ue();je();ei();ne();me();ce=class extends j{constructor(){super();this.pointerDrag=new tt(this);$(this,xs);$(this,ks,null);$(this,Ss);$(this,ws);$(this,Vs);$(this,Es);$(this,$s);$(this,Cs);$(this,Ms);$(this,Ts);$(this,Os);$(this,Ps);$(this,Rs);this.axes=[],this.value={},this.previewValue=null,this.targetValue=null,this.reachableRange={},this.preferredRange={},this.selectedKey="",this.hits=[],this.disabled=!1,this._drag=null,this.precision=null,this.showValues=!1,this.theme={}}get svgElement(){return E(this,xs)}set svgElement(t){C(this,xs,t)}static{this.styles=[W,fs]}get _drag(){return E(this,ks)}set _drag(t){C(this,ks,t)}get axes(){return E(this,Ss)}set axes(t){C(this,Ss,t)}get value(){return E(this,ws)}set value(t){C(this,ws,t)}get previewValue(){return E(this,Vs)}set previewValue(t){C(this,Vs,t)}get targetValue(){return E(this,Es)}set targetValue(t){C(this,Es,t)}get reachableRange(){return E(this,$s)}set reachableRange(t){C(this,$s,t)}get preferredRange(){return E(this,Cs)}set preferredRange(t){C(this,Cs,t)}get selectedKey(){return E(this,Ms)}set selectedKey(t){C(this,Ms,t)}get hits(){return E(this,Ts)}set hits(t){C(this,Ts,t)}get disabled(){return E(this,Os)}set disabled(t){C(this,Os,t)}get precision(){return E(this,Ps)}set precision(t){C(this,Ps,t)}get showValues(){return E(this,Rs)}set showValues(t){C(this,Rs,t)}set state(t){this._setRadarState(t??{})}get state(){return{axes:this.axes,value:this.value,previewValue:this.previewValue,targetValue:this.targetValue,reachableRange:this.reachableRange,preferredRange:this.preferredRange,selectedKey:this.selectedKey,hits:this.hits,disabled:this.disabled,precision:this.precision,showValues:this.showValues,theme:this.theme}}render(){let t=this.axes,r=new Set(this.hits.map(_=>_.key)),a=this._pointsFor(this.value,90),s=this.previewValue?this._pointsFor(this.previewValue,90):[],n=this.targetValue?this._pointsFor(this.targetValue,90):[],o=this.previewValue??this.value,l=this._pointsFor(o,90),m=this._pointsForRange("preferredMax",90),g=this._pointsForRange("reachableMax",90),f=X([.25,.5,.75,1],_=>_,_=>$e`
      <polygon class="grid-ring" points=${Za(t.length,90*_)}></polygon>
    `),w=X(t,_=>_.key,(_,D)=>{let F=Kt(Tt(D,t.length),96),S=Kt(Tt(D,t.length),112);return $e`
        <line class="axis" x1="0" y1="0" x2="${F.x}" y2="${F.y}"></line>
        <text class=${L({"axis-label":!0,selected:_.key===this.selectedKey})}
          x=${S.x} y=${S.y} text-anchor="middle">${_.label}</text>
      `}),M=X(t,_=>_.key,(_,D)=>{let F=vr(_,Number(o[_.key]??0),D,t.length,90),S=r.has(_.key),G=pe(o[_.key]??0,this._places(_));return $e`
        <circle class=${L({marble:!0,selected:_.key===this.selectedKey,hit:S})}
          cx=${F.x} cy=${F.y} r="6" tabindex="0" role="slider"
          aria-label=${`${_.label} ${G}`} data-key=${_.key}
          @click=${()=>this._select(_.key)}
          @pointerdown=${Q=>this._startDrag(Q,_.key)}
          @keydown=${Q=>this._keydown(Q,_.key)}>
          <title>${_.label}: ${G}</title>
        </circle>
      `}),T=this.showValues?X(l,(_,D)=>t[D]?.key||D,(_,D)=>{let F=t[D],S=Ya(_);return $e`
        <text class=${L({"value-label":!0,selected:F.key===this.selectedKey})}
          x=${S.x} y=${S.y} text-anchor="middle">
          ${pe(o[F.key]??0,this._places(F))}
        </text>
      `}):"",V=X(n,(_,D)=>t[D]?.key||D,(_,D)=>{let F=t[D];return $e`<circle class="target-dot" cx=${_.x} cy=${_.y} r="3.5"><title>${F.label} target</title></circle>`});return k`
      <div class=${L({"chart-shell":!0,disabled:this.disabled})}>
        <svg
          class="radar"
          viewBox="-130 -124 260 248"
          aria-label="Soap quality radar chart"
        >
          ${f} ${w}
          ${m.length?$e`<polygon class="preferred" points=${Ot(m)}><title>Preferred range</title></polygon>`:""}
          ${g.length?$e`<polygon class="reachable" points=${Ot(g)}><title>Axis reach</title></polygon>`:""}
          <polygon class="current" points=${Ot(a)}></polygon>
          ${s.length?$e`<polygon class="preview" points=${Ot(s)}></polygon>`:""}
          ${V} ${M} ${T}
        </svg>
        <div class="after-chart">
          <slot name="after-chart"></slot>
        </div>
      </div>
    `}_patchRadarState(t){Object.assign(this,t)}_setRadarState(t){let r={axes:t.axes??[],value:ee(t.value??{}),previewValue:t.previewValue?ee(t.previewValue):null,targetValue:t.targetValue?ee(t.targetValue):null,reachableRange:t.reachableRange??{},preferredRange:t.preferredRange??{},selectedKey:t.selectedKey??"",hits:t.hits??[],disabled:!!t.disabled,precision:t.precision==null?null:Number(t.precision),showValues:!!t.showValues,theme:t.theme??{}};this.axes=r.axes,this.value=r.value,this.previewValue=r.previewValue,this.targetValue=r.targetValue,this.reachableRange=r.reachableRange,this.preferredRange=r.preferredRange,this.selectedKey=r.selectedKey,this.hits=r.hits,this.disabled=r.disabled,this.precision=r.precision,this.showValues=r.showValues,this.theme=r.theme}_select(t){this.disabled||(this.selectedKey=t,O(this,"vector-select",{source:"radar",role:"metric",transactionId:R("select"),key:t}))}_startDrag(t,r){this.disabled||t.button>0||(t.preventDefault(),this._select(r),this._drag={key:r,transactionId:R("radar"),startValue:ee(this.value),latest:null},this.pointerDrag.start({move:a=>this._dragMove(a),end:()=>this._dragEnd(),cancel:()=>this._cancelDrag()}))}_dragMove(t){if(!this._drag)return;let r=this._valueFromPoint(t,this._drag.key);this._previewMetric(r)}_dragEnd(){this._drag&&(this._drag.latest&&O(this,"vector-change",this._drag.latest),this._drag=null)}_cancelDrag(){this._drag&&(O(this,"vector-cancel",{source:"radar",role:"metric",transactionId:this._drag.transactionId,previousValue:this._drag.startValue}),this._drag=null)}_keydown(t,r){let a=this._axis(r);if(!a)return;let s=Number(a.step??1),n=null;if(t.key==="ArrowUp"||t.key==="ArrowRight"?n=Number(this.value[r]??0)+s:t.key==="ArrowDown"||t.key==="ArrowLeft"?n=Number(this.value[r]??0)-s:t.key==="Home"?n=Number(a.min??0):t.key==="End"?n=Number(a.max??100):t.key==="Escape"&&(this._cancelDrag(),O(this,"vector-cancel",{source:"radar",role:"metric",transactionId:R("radar-cancel"),previousValue:this.value})),n==null)return;t.preventDefault();let o=this._detailForMetric(r,n,R("radar-key"),this.value);O(this,"vector-preview",o),O(this,"vector-change",o)}_previewMetric(t){let r=this._drag;if(!r)return;let a=this._detailForMetric(r.key,t,r.transactionId,r.startValue);r.latest=a,O(this,"vector-preview",a)}_detailForMetric(t,r,a,s){let n=this._axis(t),o=z(P({},s),{[t]:se(K(r,n?.min??0,n?.max??100),n?.step??1)});return{source:"radar",role:"metric",transactionId:a,key:t,previousValue:s,requestedValue:o,proposedValue:o,delta:v(Number(o[t]??0)-Number(s[t]??0),4),hits:[]}}_valueFromPoint(t,r){let a=this.svgElement;if(!a)return Number(this.value[r]??0);let s=a.getBoundingClientRect(),n=(t.clientX-s.left)/s.width*260-130,o=(t.clientY-s.top)/s.height*248-124,l=this.axes.findIndex(T=>T.key===r),m=this.axes[l],g=Tt(l,this.axes.length),f=Math.cos(g),w=Math.sin(g),M=K((n*f+o*w)/90,0,1);return Number(m?.min??0)+M*(Number(m?.max??100)-Number(m?.min??0))}_axis(t){return this.axes.find(r=>r.key===t)}_places(t){return Number.isFinite(this.precision)?Math.max(0,Number(this.precision)):Et(t.step??1)}_pointsFor(t,r){return this.axes.map((a,s)=>vr(a,Number(t[a.key]??0),s,this.axes.length,r))}_pointsForRange(t,r){return this.axes.map((a,s)=>{let n=this.reachableRange[a.key],o=t==="reachableMax"?n?.max??a.reachableMax??a.max:this.preferredRange[a.key]?.max??a.preferredMax;return o==null?null:vr(a,Number(o),s,this.axes.length,r)}).filter(a=>a!==null)}};xs=new WeakMap,ks=new WeakMap,Ss=new WeakMap,ws=new WeakMap,Vs=new WeakMap,Es=new WeakMap,$s=new WeakMap,Cs=new WeakMap,Ms=new WeakMap,Ts=new WeakMap,Os=new WeakMap,Ps=new WeakMap,Rs=new WeakMap,d([Be("svg")],ce.prototype,"svgElement",1),d([_t()],ce.prototype,"_drag",1),d([h({attribute:!1})],ce.prototype,"axes",1),d([h({attribute:!1})],ce.prototype,"value",1),d([h({attribute:!1})],ce.prototype,"previewValue",1),d([h({attribute:!1})],ce.prototype,"targetValue",1),d([h({attribute:!1})],ce.prototype,"reachableRange",1),d([h({attribute:!1})],ce.prototype,"preferredRange",1),d([h({attribute:!1})],ce.prototype,"selectedKey",1),d([h({attribute:!1})],ce.prototype,"hits",1),d([h({attribute:!1})],ce.prototype,"disabled",1),d([h({attribute:!1})],ce.prototype,"precision",1),d([h({attribute:!1})],ce.prototype,"showValues",1)});var Ns,Is=b(()=>{"use strict";U();Ns=B`:host {
  display: block;
}`});var Ht,ai=b(()=>{"use strict";U();fe();ue();Is();Ht=class extends j{static{this.styles=Ns}#e={};get state(){return this.#e}set state(e){this.#e=e}render(){return k`<vector-constraint-rail
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
    ></vector-constraint-rail>`}};d([h({attribute:!1})],Ht.prototype,"state",1)});var As,Ds=b(()=>{"use strict";U();As=B`:host {
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
}`});var Bt,si=b(()=>{"use strict";U();fe();we();Ce();ze();Ds();ue();je();ne();me();Bt=class extends j{static{this.styles=[W,As]}#e;get items(){return this.#e}set items(e){this.#e=e}constructor(){super(),this.items=[],this.theme={}}render(){return k`
      <div class="summary-meter">
        ${this.items.length?X(this.items,e=>e.key,e=>{let t=ga(e.value,e.thresholds??[]),r=Number(e.min??0),a=Number(e.max??100),s=K((Number(e.value??0)-r)/(a-r||1)*100,0,100);return k`
                  <button
                    type="button"
                    class=${L({"summary-row":!0,[t?.severity||e.severity||"ok"]:!0})}
                    data-key=${e.key}
                    @click=${()=>this._select(e,t)}
                  >
                    <span>${e.label||H(e.key)}</span>
                    <span class="summary-track"
                      ><span
                        ${Z({"--meter-fill":`${s}%`})}
                      ></span
                    ></span>
                    <strong
                      >${pe(e.value,e.precision??1)}${e.unit||""}</strong
                    >
                  </button>
                `}):k`<div class="quiet">No summary values.</div>`}
      </div>
    `}_select(e,t){O(this,"vector-select",{source:"table",role:"summary",transactionId:R("summary"),key:e.key,thresholdKey:t?.key})}};d([h({attribute:!1})],Bt.prototype,"items",1)});var Fs,qs=b(()=>{"use strict";U();Fs=B`:host {
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
}`});var xe,ni=b(()=>{"use strict";U();fe();we();Ce();qs();ue();ne();me();xe=class extends j{static{this.styles=[W,Fs]}#e;get options(){return this.#e}set options(e){this.#e=e}#t;get unitKey(){return this.#t}set unitKey(e){this.#t=e}#r;get label(){return this.#r}set label(e){this.#r=e}#i;get groupKey(){return this.#i}set groupKey(e){this.#i=e}#a;get measurementSystem(){return this.#a}set measurementSystem(e){this.#a=e}#s;get basis(){return this.#s}set basis(e){this.#s=e}#n;get measurementScope(){return this.#n}set measurementScope(e){this.#n=e}#o;get measurementMeasure(){return this.#o}set measurementMeasure(e){this.#o=e}#l;get disabled(){return this.#l}set disabled(e){this.#l=e}constructor(){super(),this.options=[],this.unitKey="",this.label="",this.groupKey="",this.measurementSystem="",this.basis="",this.measurementScope="",this.measurementMeasure="",this.disabled=!1,this.theme={}}set state(e){let t=e??{};this.options=t.options??t.unitOptions??[],this.unitKey=t.unitKey??"",this.label=t.label??"",this.groupKey=t.groupKey??t.key??"",this.measurementSystem=t.measurementSystem??"",this.basis=t.basis??"",this.measurementScope=t.measurementScope??"",this.measurementMeasure=t.measurementMeasure??"",this.disabled=t.disabled??!1,this.theme=t.theme??{}}get state(){return{options:this.options,unitKey:this.unitKey,label:this.label,groupKey:this.groupKey,measurementSystem:this.measurementSystem,basis:this.basis,measurementScope:this.measurementScope,measurementMeasure:this.measurementMeasure,disabled:this.disabled,theme:this.theme}}render(){return k`
      <div
        class=${L({"unit-toggle":!0,binary:this.options.length===2})}
        role="group"
        aria-label=${this.label||"Measurement units"}
      >
        ${this.label?k`<span class="toggle-label">${this.label}</span>`:Re}
        <span class="toggle-options">
          ${X(this.options,e=>e.key,e=>{let t=this.unitKey?e.key===this.unitKey:e.system?e.system===this.measurementSystem:e.basis===this.basis||e.scope===this.measurementScope||e.measure===this.measurementMeasure;return k`
                <button
                  type="button"
                  class=${L({selected:t})}
                  ?disabled=${this.disabled}
                  aria-pressed=${String(!!t)}
                  @click=${()=>this._select(e)}
                >
                  ${e.label}
                </button>
              `})}
        </span>
      </div>
    `}_select(e){O(this,"vector-change",{source:"inspector",role:"measurement",transactionId:R("unit"),key:this.groupKey,unitKey:e.key,basis:e.basis,measurementScope:e.scope||this.measurementScope,measurementMeasure:e.measure||this.measurementMeasure,measurementSystem:e.system||this.measurementSystem})}};d([h({attribute:!1})],xe.prototype,"options",1),d([h({attribute:!1})],xe.prototype,"unitKey",1),d([h({attribute:!1})],xe.prototype,"label",1),d([h({attribute:!1})],xe.prototype,"groupKey",1),d([h({attribute:!1})],xe.prototype,"measurementSystem",1),d([h({attribute:!1})],xe.prototype,"basis",1),d([h({attribute:!1})],xe.prototype,"measurementScope",1),d([h({attribute:!1})],xe.prototype,"measurementMeasure",1),d([h({attribute:!1})],xe.prototype,"disabled",1)});var Ls,Us=b(()=>{"use strict";U();Ls=B`:host {
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
}`});var Ks,Hs,zt,oi=b(()=>{"use strict";U();fe();we();ze();Us();je();ne();me();ur();ue();Xr();zt=class extends j{constructor(){super();$(this,Ks,"composition");this.scalar=new rt(this);$(this,Hs);Ct(this)}static{this.properties=$t}get role(){return E(this,Ks)}set role(t){C(this,Ks,t)}get sliderElement(){return E(this,Hs)}set sliderElement(t){C(this,Hs,t)}static{this.styles=[W,Ls]}set state(t){this.scalar.setState(t)}get state(){return this.scalar.state}render(){if(!this.item)return k` <div class="empty">Select an item.</div> `;let t=this.scalar.viewState(),r=t.valueText,a=t.unit,s=this.scalar.unitOption(),n=this.item.description||this.item.summary||this.item.purpose||"",o=this.activeEmphasis&&Math.abs(Number(this.value||0))>1e-9,l=()=>this.sliderElement?.dataset.transaction||R("value-slider");return k`
      <section
        class=${L({"value-slider":!0,active:o,disabled:this.disabled})}
        data-threshold=${t.thresholdKey||""}
      >
        <div class="slider-head">
          <span
            class="swatch"
            ${Z({"--item-color":_e(this.item,0,this.palette)})}
          ></span>
          <div class="slider-copy">
            <label for="slider"
              >${this.item.label||H(this.item.key)}</label
            >
            ${n?k`<small>${n}</small>`:Re}
          </div>
          <span class="slider-value">
            <output>${r}</output>
            ${this._renderUnit(s,a)}
          </span>
        </div>
        <div class="slider-track">
          <div class="full-track"></div>
          <div class="threshold-track" aria-hidden="true">
            ${pr({thresholds:this.thresholds,value:this.value,percent:m=>this.scalar.pct(m),activeThreshold:m=>this.scalar.thresholdFor(m)})}
          </div>
          <span
            class="current-marker"
            ${Z({"--marker-position":`${t.valuePct}%`})}
          ></span>
          <input
            id="slider"
            data-slider
            type="range"
            min=${t.domainMinText}
            max=${t.domainMaxText}
            step=${t.displayStep}
            .value=${r}
            ?disabled=${this.disabled}
            @input=${m=>{let g=m.currentTarget;g.dataset.transaction||=R("value-slider"),this._emitSliderValue(Number(g.value),"vector-preview",g.dataset.transaction??l())}}
            @change=${m=>{let g=m.currentTarget,f=g.dataset.transaction??l();delete g.dataset.transaction,this._emitSliderValue(Number(g.value),"vector-change",f)}}
            @keydown=${m=>this._sliderKeydown(m)}
          />
        </div>
      </section>
    `}_renderUnit(t,r){let a=this._unitPickerOptions(),s=zr(t,r);return this.unitDisplay==="text"?k`<span
        class="unit-text"
        data-unit
        data-unit-key=${t?.key||""}
        title=${t?.label||s}
        >${s}</span
      >`:a.length<=1?k`<span
        class="unit-pill static"
        data-unit
        data-unit-key=${t?.key||""}
        title=${t?.label||s}
        >${s}</span
      >`:k`
      <details class="unit-picker">
        <summary
          data-unit
          data-unit-pill
          data-unit-key=${t?.key||""}
          aria-label=${`Change unit, currently ${t?.label||s}`}
          title=${`Change unit, currently ${t?.label||s}`}
        >
          ${s}
        </summary>
        <div class="unit-menu" role="listbox" aria-label="Units">
          ${a.map(n=>k`
              <button
                type="button"
                class=${L({selected:n.key===t?.key})}
                data-unit-option=${n.key}
                role="option"
                aria-selected=${String(n.key===t?.key)}
                @click=${o=>{o.preventDefault(),this.scalar.changeUnit(n.key),this._closeUnitPicker(o.currentTarget)}}
              >
                ${n.label||zr(n,n.symbol)}
              </button>
            `)}
        </div>
      </details>
    `}_unitPickerOptions(){return this.unitOptions}_closeUnitPicker(t){let r=t.closest("details");r&&(r.open=!1)}_emitSliderValue(t,r,a){if(!this.item?.key)return;let s=this.scalar.unitOption(),n=this.scalar.toCanonical(t),o=se(n,this.scalar.step()),l=K(o,this.scalar.min(),this.scalar.max()),m=this.scalar.thresholdFor(l);O(this,r,{source:"inspector",role:this.role,transactionId:a,key:this.item.key,previousValue:{[this.item.key]:this.value},requestedValue:{[this.item.key]:o},proposedValue:{[this.item.key]:l},delta:v(l-this.value,4),unitKey:s?.key,basis:s?.basis||this.basis||this.item?.basis,measurementScope:s?.scope||this.measurementScope,measurementMeasure:s?.measure||this.measurementMeasure,displayValue:this.scalar.toDisplay(l),canonicalValue:l,thresholdKey:m?.key,measurementSystem:this.measurementSystem||s?.system,hits:[]})}_sliderKeydown(t){if(t.key!=="Escape")return;let r=t.currentTarget,a=r.dataset.transaction??R("value-slider-cancel");delete r.dataset.transaction,O(this,"vector-cancel",{source:"inspector",role:this.role,transactionId:a,key:this.item?.key})}};Ks=new WeakMap,Hs=new WeakMap,d([Be("[data-slider]")],zt.prototype,"sliderElement",1)});function Bs(){le("vector-pie-chart",ae),le("vector-radar-chart",ce),le("vector-constraint-control",et),le("vector-constraint-rail",Mt),le("vector-scalar-rail",Ht),le("vector-value-slider",zt),le("vector-quantity-input",yr),le("vector-unit-toggle",xe),le("vector-item-list",de),le("vector-ingredient-list",dr),le("vector-amount-list",ie),le("vector-choice-control",We),le("vector-summary-meter",Bt),le("oil-search-list",cr),le("vector-inspector",Qe),le("constraint-feedback-list",Ft)}var li=b(()=>{"use strict";Kr();jr();Wr();Qr();ue();Gr();Yr();Zr();Jr();Lt();ti();ri();ii();ai();si();ni();oi()});var zs=b(()=>{"use strict"});var js=b(()=>{"use strict";li();Kr();ze();li();jr();Wr();Qr();Ne();Gr();Yr();Zr();Jr();Lt();ti();ri();ii();ai();si();me();zs();ni();oi();Bs()});var gr=b(()=>{"use strict";js();ne()});function mi(i){let e=i?.constants?.sap_values?.naoh;return e&&typeof e=="object"?e:{}}function Ws(i){let{oilWeightG:e,oilVector:t,formulaValues:r,additiveValues:a,selectedAdditives:s,additiveItems:n,workspace:o}=i,l=o?.constants?.density??{},m=mi(o),g=io(t,l,.92),f=K(Number(r.superfat??5),0,100),w=K(Number(r.lye_concentration??33),1,99),M=Object.entries(t).reduce((F,[S,G])=>F+e*(G/100)*Number(m[S]??0)*(1-f/100),0),T=M*(100-w)/w,V=s.reduce((F,S)=>F+e*(Number(a[S]??0)/100),0),_=s.reduce((F,S)=>{let G=n.find(I=>I.key===S),Q=Number(l[G?.material??S]);return Number.isFinite(Q)&&Q>0?F+e*(Number(a[S]??0)/100)/Q:F},0),D=e/g+M/ci(l,"naoh",2.13)+T/ci(l,"distilled_water",1)+_;return{oilWeightG:e,lyeG:v(M,1),liquidG:v(T,1),totalMassG:v(e+M+T+V,1),volumeMl:v(D,1),volumeIn3:v(D/ro,2),oilDensity:v(g,4)}}function io(i,e,t){let r=Je(i)||100;return Object.entries(i).reduce((a,[s,n])=>a+n/r*ci(e,s,t),0)||t}function ci(i,e,t=1){let r=Number(i?.[e]??i?.[e.toLowerCase()]);return Number.isFinite(r)&&r>0?r:t}function jt(i){return i&&typeof i=="object"?i:{}}function dt(i){return Number(jt(i).density??0)||1}function fr(i,e){return i/100*Number(jt(e).oilWeightG??0)}function _r(i,e){return i/Number(jt(e).oilWeightG??1)*100}function ui(i,e){return fr(i,e)/dt(e)}function pi(i,e){return _r(i*dt(e),e)}function Qs(i,e){let t=jt(e),r=Number(t.oilWeightG??0);return i*r/Number(t.totalMassG??(r||1))}function Gs(i,e){let t=jt(e),r=Number(t.oilWeightG??1);return i*Number(t.totalMassG??(r||1))/r}var ro,Xs=b(()=>{"use strict";gr();ro=16.387064});var Ys,Zs=b(()=>{"use strict";U();Ys=B`:host {
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
}`});var it,di,Js,en,tn,ht,hi=b(()=>{"use strict";it={olive_oil:{lauric:0,myristic:0,palmitic:14,stearic:3,ricinoleic:0,oleic:69,linoleic:12,linolenic:1},coconut_oil:{lauric:48,myristic:19,palmitic:9,stearic:3,ricinoleic:0,oleic:8,linoleic:2,linolenic:0},lard:{lauric:0,myristic:1,palmitic:26,stearic:14,ricinoleic:0,oleic:44,linoleic:10,linolenic:1},castor_oil:{lauric:0,myristic:0,palmitic:2,stearic:1,ricinoleic:90,oleic:4,linoleic:4,linolenic:0},shea_butter:{lauric:0,myristic:0,palmitic:4,stearic:42,ricinoleic:0,oleic:46,linoleic:6,linolenic:0},cocoa_butter:{lauric:0,myristic:0,palmitic:26,stearic:34,ricinoleic:0,oleic:35,linoleic:3,linolenic:0},avocado_oil:{lauric:0,myristic:0,palmitic:20,stearic:1,ricinoleic:0,oleic:58,linoleic:12,linolenic:1},sweet_almond_oil:{lauric:0,myristic:0,palmitic:7,stearic:2,ricinoleic:0,oleic:68,linoleic:22,linolenic:0},sunflower_oil:{lauric:0,myristic:0,palmitic:6,stearic:4,ricinoleic:0,oleic:30,linoleic:59,linolenic:1},rice_bran_oil:{lauric:0,myristic:1,palmitic:22,stearic:2,ricinoleic:0,oleic:38,linoleic:34,linolenic:1},palm_oil:{lauric:0,myristic:1,palmitic:44,stearic:5,ricinoleic:0,oleic:39,linoleic:10,linolenic:0},jojoba_oil:{lauric:0,myristic:0,palmitic:2,stearic:1,ricinoleic:0,oleic:12,linoleic:5,linolenic:0}},di={olive_oil:"#6f8d42",coconut_oil:"#3f7f95",lard:"#b38b59",castor_oil:"#8b5f9d",shea_butter:"#c09654",cocoa_butter:"#8d5a3c",avocado_oil:"#4f9c68",sweet_almond_oil:"#c48a70",sunflower_oil:"#d6a13d",rice_bran_oil:"#9d9a5a",palm_oil:"#b66d4d",jojoba_oil:"#7fa89d"},Js={olive_oil:.134,coconut_oil:.183,lard:.138,castor_oil:.128,shea_butter:.128,cocoa_butter:.137,avocado_oil:.133,sweet_almond_oil:.136,sunflower_oil:.135,rice_bran_oil:.128,palm_oil:.142,jojoba_oil:.069},en=1.4025,tn={oleic:.899,linoleic:1.814,linolenic:2.737,ricinoleic:.86},ht=[{key:"hardness",label:"Hardness",min:0,max:80,preferredMin:29,preferredMax:54,step:1},{key:"cleansing",label:"Cleansing",min:0,max:40,preferredMin:12,preferredMax:22,step:1},{key:"conditioning",label:"Conditioning",min:0,max:90,preferredMin:44,preferredMax:69,step:1},{key:"bubbly",label:"Bubbly",min:0,max:70,preferredMin:14,preferredMax:46,step:1},{key:"creamy",label:"Creamy",min:0,max:60,preferredMin:16,preferredMax:48,step:1}]});var rn=b(()=>{"use strict"});function sn(i={}){let e=Object.keys(i.inventory?.raw_materials||{}),t=(i.base_recipes||[]).flatMap(s=>Object.keys(s.oils_pct||{})),r=Object.keys(it);return[...new Set([...t,...e,...r])].filter(s=>s in it).map((s,n)=>({key:s,label:H(s),color:di[s]||co(n),order:n,tags:lo(s)}))}function nn(i={}){let t=((i.product_recipes||[])[0]||null)?.base_recipe_id||(i.base_recipes||[])[0]?.id,r=(i.base_recipes||[]).find(a=>a.id===t)||(i.base_recipes||[])[0];return Ur(r?.oils_pct||{olive_oil:50,coconut_oil:20,palm_oil:30},100)}function on(i=[]){let e={olive_oil:{min:10,max:70,step:1},coconut_oil:{min:5,max:30,step:1},lard:{min:10,max:60,step:1},castor_oil:{min:5,max:10,step:1},shea_butter:{min:0,max:20,step:1},cocoa_butter:{min:0,max:15,step:1},avocado_oil:{min:0,max:30,step:1},sweet_almond_oil:{min:0,max:30,step:1},sunflower_oil:{min:0,max:30,step:1},rice_bran_oil:{min:0,max:40,step:1},palm_oil:{min:0,max:50,step:1},jojoba_oil:{min:0,max:10,step:1}};return Object.fromEntries(i.map(t=>[t,P({},e[t]||{min:0,max:100,step:1})]))}function Me(i={},e=it){let t=cn(i,e);return{hardness:v(t.lauric+t.myristic+t.palmitic+t.stearic,1),cleansing:v(t.lauric+t.myristic,1),conditioning:v(t.oleic+t.linoleic+t.linolenic+t.ricinoleic,1),bubbly:v(t.lauric+t.myristic+t.ricinoleic,1),creamy:v(t.palmitic+t.stearic+t.ricinoleic,1)}}function ln(i={},e={},t=it){let r=cn(i,t),a=Object.entries(tn).reduce((n,[o,l])=>n+Number(r[o]||0)*l,0),s=Object.entries(i||{}).reduce((n,[o,l])=>{let m=Number(e?.[o]??Js[o]??0);return n+Number(l||0)/100*m*en*1e3},0);return v(s-a,0)}function cn(i={},e=it){let t={lauric:0,myristic:0,palmitic:0,stearic:0,ricinoleic:0,oleic:0,linoleic:0,linolenic:0};for(let[r,a]of Object.entries(i||{})){let s=e[r];if(!s)continue;let n=Number(a||0)/100;for(let o of Object.keys(t))t[o]+=Number(s[o]||0)*n}return Object.fromEntries(Object.entries(t).map(([r,a])=>[r,v(a,2)]))}function mn({oilVector:i,key:e,target:t,oilConstraints:r={},oilItems:a=[]}){let s=pt({value:i,key:e,target:t,constraints:r,items:a,total:100});return{oilVector:s.vector,qualityVector:Me(s.vector),hits:s.hits,explanations:s.hits.map(n=>n.message)}}function Pt({oilVector:i,targetQuality:e,oilConstraints:t={},axes:r=ht,profiles:a=it}){let s=Object.keys(i||{}),n=ut(ao(i,t),t,100,s[0]),o=Me(n,a),l=an(n,o,e,i),m=no(t,s);for(let f of m){let w=!0,M=0;for(;w&&M<250;){w=!1,M+=1;let T=n,V=o,_=l;for(let D of s)for(let F of s){if(D===F)continue;let S=so(n,D,F,f,t);if(!S)continue;let G=Me(S,a),Q=an(S,G,e,i);Q+1e-7<_&&(T=S,V=G,_=Q,w=!0)}n=T,o=V,l=_}}let g=oo(n,o,e,t,r);return{oilVector:n,qualityVector:o,hits:g,explanations:g.map(f=>f.message),score:l}}function at(i,e={},t=ht){let r={};for(let a of t){let s=Pt({oilVector:i,oilConstraints:e,axes:t,targetQuality:{[a.key]:a.min}}),n=Pt({oilVector:i,oilConstraints:e,axes:t,targetQuality:{[a.key]:a.max}});r[a.key]={min:v(s.qualityVector[a.key],1),max:v(n.qualityVector[a.key],1)}}return r}function ao(i={},e={}){let t=ee(i);for(let[r,a]of Object.entries(t)){let s=e[r]||{};t[r]=K(a,s.min??0,s.max??100)}return ut(or(t,e),e,100,Object.keys(t)[0])}function un(i,e,t,r,a=[]){let s=z(P({},e),{[t]:P(P({},e[t]||{}),r)}),n=ee(i),o=Number(n[t]||0),l=Number(s[t].min??0),m=Number(s[t].max??100);return(o<l||o>m)&&(n=pt({value:n,key:t,target:K(o,l,m),constraints:s,items:a,total:100}).vector),{oilVector:n,oilConstraints:s,qualityVector:Me(n)}}function so(i,e,t,r,a){let s=a[e]||{},n=a[t]||{};if(s.locked||n.locked)return null;let o=Number(s.min??0),l=Number(n.max??100);if(Number(i[e]||0)-r<o-1e-7||Number(i[t]||0)+r>l+1e-7)return null;let m=ee(i);return m[e]=v(m[e]-r,4),m[t]=v(m[t]+r,4),ut(or(m,a),a,100,t)}function no(i={},e=[]){let t=e.reduce((a,s)=>{let n=Number(i[s]?.step||1);return!Number.isFinite(n)||n<=0?a:Math.min(a,n)},1/0),r=Number.isFinite(t)?t:1;return[5,1,.25,.1].filter(a=>a>=r-1e-7)}function an(i,e,t={},r={}){return Object.entries(t).reduce((s,[n,o])=>{let l=Number(e[n]||0)-Number(o||0);return s+l*l},0)+lr(i,r)*.015}function oo(i,e,t,r,a){let s=[];for(let[n,o]of Object.entries(t)){let l=Number(e[n]||0);if(Math.abs(l-Number(o))>.6){let m=a.find(g=>g.key===n);s.push(te(n,"unreachable",`${m?.label||H(n)} reached ${v(l,1)} instead of ${v(o,1)} with the selected oils.`))}}for(let[n,o]of Object.entries(i||{})){let l=r[n]||{};if(l.locked){s.push(te(n,"locked",`${H(n)} is locked.`));continue}l.min!=null&&Math.abs(Number(o)-Number(l.min))<.05&&s.push(te(n,"min",`${H(n)} hit minimum ${v(l.min,2)}%.`)),l.max!=null&&Math.abs(Number(o)-Number(l.max))<.05&&s.push(te(n,"max",`${H(n)} hit maximum ${v(l.max,2)}%.`))}return Math.abs(Je(i)-100)>.01&&s.push(te("composition","sum","Oil percentages must add to 100%.")),s}function lo(i){let e=new Set(["coconut_oil","lard","shea_butter","cocoa_butter","palm_oil"]),t=new Set(["olive_oil","avocado_oil","sweet_almond_oil","sunflower_oil","rice_bran_oil","jojoba_oil"]),r=new Set(["coconut_oil","castor_oil"]);return[e.has(i)?"hard":null,t.has(i)?"liquid":null,r.has(i)?"lather":null].filter(a=>a!==null)}function co(i){let e=["#426a8c","#d9824b","#6f8d42","#8b5f9d","#9d9a5a","#c48a70"];return e[i%e.length]}var pn=b(()=>{"use strict";ne();hi();rn();hi()});function Io(){globalThis.customElements&&!customElements.get("recipe-vector-workbench")&&customElements.define("recipe-vector-workbench",bi)}var mo,uo,po,kr,Sr,wr,dn,vi,ho,vo,bo,yo,go,fo,_o,xo,ko,So,wo,Vo,Eo,$o,Co,Mo,To,Oo,Po,ge,Ie,Ro,No,xr,hn,bi,vn=b(()=>{"use strict";U();we();Ce();gr();Xs();Zs();pn();gr();mo=String.fromCodePoint(128274),uo=String.fromCodePoint(8805),po=String.fromCodePoint(8804),kr=28.3495,Sr=453.592,wr=29.5735,dn=16.387064,vi={key:"percent_oils",label:"% oils",basis:"percent_oils",scope:"oils",measure:"scalar",symbol:"%",precision:1,step:.1},ho={key:"percent_batch",label:"% batch",basis:"percent_batch",scope:"batch",measure:"scalar",symbol:"%",precision:1,step:.1,fromCanonical:(i,e)=>Qs(i,e),toCanonical:(i,e)=>Gs(i,e)},vo={key:"g_per_kg_oils",label:"g/kg oils",system:"metric",basis:"weight",scope:"oils",measure:"weight",symbol:" g/kg",precision:0,step:1,fromCanonical:i=>Number(i||0)*10,toCanonical:i=>Number(i||0)/10},bo={key:"oz_per_lb_oils",label:"oz/lb oils",system:"imperial",basis:"weight",scope:"oils",measure:"weight",symbol:" oz/lb",precision:2,step:.05,fromCanonical:i=>Number(i||0)*.16,toCanonical:i=>Number(i||0)/.16},yo={key:"g_batch",label:"g",system:"metric",basis:"weight",scope:"batch",measure:"weight",symbol:" g",precision:1,step:1,fromCanonical:(i,e)=>fr(i,e),toCanonical:(i,e)=>_r(i,e)},go={key:"oz_batch",label:"oz",system:"imperial",basis:"weight",scope:"batch",measure:"weight",symbol:" oz",precision:2,step:.05,fromCanonical:(i,e)=>fr(i,e)/kr,toCanonical:(i,e)=>_r(Number(i||0)*kr,e)},fo={key:"ml_per_kg_oils",label:"ml/kg oils",system:"metric",basis:"volume",scope:"oils",measure:"volume",symbol:" ml/kg",precision:0,step:1,fromCanonical:(i,e)=>Number(i||0)*10/dt(e),toCanonical:(i,e)=>Number(i||0)*dt(e)/10},_o={key:"ml_batch",label:"ml",system:"metric",basis:"volume",scope:"batch",measure:"volume",symbol:" ml",precision:1,step:1,fromCanonical:(i,e)=>ui(i,e),toCanonical:(i,e)=>pi(i,e)},xo={key:"floz_per_lb_oils",label:"fl oz/lb oils",system:"imperial",basis:"volume",scope:"oils",measure:"volume",symbol:" fl oz/lb",precision:2,step:.05,fromCanonical:(i,e)=>Number(i||0)/100*Sr/dt(e)/wr,toCanonical:(i,e)=>Number(i||0)*wr*dt(e)/Sr*100},ko={key:"floz_batch",label:"fl oz",system:"imperial",basis:"volume",scope:"batch",measure:"volume",symbol:" fl oz",precision:2,step:.05,fromCanonical:(i,e)=>ui(i,e)/wr,toCanonical:(i,e)=>pi(Number(i||0)*wr,e)},So=[{key:"metric",label:"Metric",system:"metric",symbol:"g"},{key:"imperial",label:"Imperial",system:"imperial",symbol:"oz"}],wo=[{key:"oils",label:"Oils",scope:"oils"},{key:"batch",label:"Total",scope:"batch"}],Vo=[{key:"weight",label:"Weight",measure:"weight"},{key:"volume",label:"Volume",measure:"volume"}],Eo={key:"g",label:"g",system:"metric",basis:"weight",measure:"weight",symbol:" g",precision:0,step:25},$o={key:"kg",label:"kg",system:"metric",basis:"weight",measure:"weight",symbol:" kg",precision:2,step:.05,fromCanonical:i=>Number(i||0)/1e3,toCanonical:i=>Number(i||0)*1e3},Co={key:"oz",label:"oz",system:"imperial",basis:"weight",measure:"weight",symbol:" oz",precision:1,step:1,fromCanonical:i=>Number(i||0)/kr,toCanonical:i=>Number(i||0)*kr},Mo={key:"lb",label:"lb",system:"imperial",basis:"weight",measure:"weight",symbol:" lb",precision:2,step:.1,fromCanonical:i=>Number(i||0)/Sr,toCanonical:i=>Number(i||0)*Sr},To={key:"ml",label:"ml",system:"metric",basis:"volume",measure:"volume",symbol:" ml",precision:0,step:50},Oo={key:"l",label:"L",system:"metric",basis:"volume",measure:"volume",symbol:" L",precision:2,step:.05,fromCanonical:i=>Number(i||0)/1e3,toCanonical:i=>Number(i||0)*1e3},Po={key:"in3",label:"in3",system:"imperial",basis:"volume",measure:"volume",symbol:" in3",precision:1,step:1,fromCanonical:i=>Number(i||0)/dn,toCanonical:i=>Number(i||0)*dn},ge=[{key:"oil_weight_g",label:"Oil weight",defaultValue:1800,min:250,max:1e4,step:25,defaultUnitKey:"g",unitOptions:[Eo,$o,Co,Mo]},{key:"batch_volume_ml",label:"Batch volume",defaultValue:3e3,min:400,max:16e3,step:25,defaultUnitKey:"ml",unitOptions:[To,Oo,Po]}],Ie=[{key:"superfat",label:"Superfat",unit:"%",defaultValue:5,min:0,max:15,step:.5,defaultUnitKey:"percent_oils",unitOptions:[vi],thresholds:[{key:"lean",min:0,max:2.9,severity:"warn",label:"Low superfat can feel lean."},{key:"balanced",min:3,max:7,severity:"ok",label:"Balanced superfat range."},{key:"rich",min:7.1,max:10,severity:"warn",label:"Higher superfat can soften bars."},{key:"very_rich",min:10.1,max:15,severity:"danger",label:"Very high superfat may shorten shelf life."}]},{key:"lye_concentration",label:"Lye concentration",unit:"%",defaultValue:33,min:25,max:45,step:.5,defaultUnitKey:"percent_oils",unitOptions:[vi],thresholds:[{key:"loose",min:25,max:27.9,severity:"warn",label:"Extra water slows unmolding."},{key:"friendly",min:28,max:35,severity:"ok",label:"Friendly cold-process range."},{key:"fast",min:35.1,max:40,severity:"warn",label:"Higher concentration can speed trace."},{key:"advanced",min:40.1,max:45,severity:"danger",label:"Advanced lye concentration."}]}],Ro={key:"lye_type",label:"Lye type"},No=[{key:"naoh",label:"NaOH"},{key:"koh",label:"KOH"},{key:"blend",label:"Blend"}],xr=[vi,ho,vo,yo,bo,go,fo,_o,xo,ko],hn=[{key:"fragrance",label:"Fragrance",summary:"Scent load for the finished bar.",type:"fragrance",category:"scent",material:"fragrance_oil",color:"#8b5f9d",defaultValue:3.1,min:0,max:6,step:.1,defaultUnitKey:"percent_oils",unitOptions:xr,tags:["scent","ifra"],thresholds:[{key:"light",min:0,max:2.9,severity:"ok",label:"Light scent load."},{key:"standard",min:3,max:4.9,severity:"ok",label:"Typical scent load."},{key:"high",min:5,max:5.7,severity:"warn",label:"High scent load; check acceleration."},{key:"ifra_limit",min:5.8,max:6,severity:"danger",label:"Near supplier or IFRA maximum."}]},{key:"kaolin_clay",label:"Kaolin clay",summary:"Adds slip and can anchor scent.",type:"clay",category:"additive",material:"kaolin_clay",color:"#9d9a5a",defaultValue:.6,min:0,max:2,step:.1,defaultUnitKey:"percent_oils",unitOptions:xr,tags:["clay","slip"],thresholds:[{key:"light",min:0,max:.7,severity:"ok",label:"Light clay load."},{key:"noticeable",min:.8,max:1.4,severity:"warn",label:"Clay may affect slip and trace."},{key:"heavy",min:1.5,max:2,severity:"danger",label:"Heavy clay can feel draggy."}]},{key:"sodium_lactate",label:"Sodium lactate",summary:"Helps harden bars for unmolding.",type:"hardener",category:"additive",material:"sodium_lactate",color:"#426a8c",defaultValue:2,min:0,max:3,step:.1,defaultUnitKey:"percent_oils",unitOptions:xr,tags:["hardener"],thresholds:[{key:"normal",min:0,max:2,severity:"ok",label:"Typical hardening support."},{key:"brittle",min:2.1,max:3,severity:"warn",label:"Too much may make bars brittle."}]},{key:"botanicals",label:"Botanicals",summary:"Visual texture or top decoration.",type:"botanical",category:"decoration",material:"botanicals",color:"#6f8d42",defaultValue:.2,min:0,max:1,step:.1,defaultUnitKey:"percent_oils",unitOptions:xr,tags:["decoration","texture"],thresholds:[{key:"sprinkle",min:0,max:.3,severity:"ok",label:"Light decoration."},{key:"scratch",min:.4,max:1,severity:"warn",label:"Botanicals can brown or scratch."}]}],bi=class extends er{static{this.styles=Ys}constructor(){super(),this._workspace=null,this._initialized=!1,this._oilItems=[],this._oilVector={},this._oilConstraints={},this._qualityAxes=ht,this._qualityConstraints={},this._qualityVector={hardness:0,cleansing:0,conditioning:0,bubbly:0,creamy:0},this._reachableRange={hardness:{min:0,max:0},cleansing:{min:0,max:0},conditioning:{min:0,max:0},bubbly:{min:0,max:0},creamy:{min:0,max:0}},this._selectedOil="",this._selectedQuality="hardness",this._selectionRole="composition",this._preview=null,this._hits=[],this._history=[],this._future=[],this._theme=ir,this._palette=re,this._pendingPreviewDetail=null,this._previewFrame=0,this._measurementSystem="metric",this._measurementUnitKey="metric",this._measurementScope="oils",this._measurementScopeKey="oils",this._measurementMeasure="weight",this._measurementMeasureKey="weight",this._measurementBasis="weight",this._batchOilWeightG=1800,this._unitPreferences={},this._formulaValues=Object.fromEntries([...ge,...Ie].map(e=>[e.key,e.defaultValue??0])),this._formulaConstraints=Object.fromEntries([...ge,...Ie].map(e=>[e.key,{min:e.min,max:e.max,step:e.step}])),this._formulaChoices={lye_type:"naoh"},this._additiveItems=hn,this._selectedAdditives=["fragrance","kaolin_clay","sodium_lactate"],this._additiveValues=this._initialAdditiveValues(),this._additiveConstraints=Object.fromEntries(hn.map(e=>[e.key,{min:e.min,max:e.max,step:e.step}])),this._selectedAdditive="fragrance",this._scalarPreview=null}set workspace(e){this._workspace=e,this._initialized?this.requestUpdate():this._loadWorkspace(e||{})}get workspace(){return this._workspace}set theme(e){let t=this._theme;this._theme=P(P({},ir),e||{}),this.isConnected&&ct(this,this._theme,t),this.requestUpdate()}get theme(){return this._theme}set palette(e){this._palette=Array.isArray(e)&&e.length?e:re,this.requestUpdate()}get palette(){return this._palette}connectedCallback(){super.connectedCallback(),ct(this,this._theme),!this._initialized&&this._workspace?this._loadWorkspace(this._workspace||{}):this._initialized?this.requestUpdate():this.requestUpdate()}render(){if(!this._initialized)return k`<div class="empty">Loading recipe design tools.</div>`;let e=this._preview?.qualityVector||this._qualityVector,t=this._activeReachableRange(),r=this._preview?.oilVector||this._oilVector,a=this._activeOilConstraints(),s=this._activeFormulaValues(),n=this._activeAdditiveValues(),o=this._batchContext(r,s,n),l=ge.find(x=>x.key==="oil_weight_g")||ge[0],m=ge.find(x=>x.key==="batch_volume_ml")||ge[1],g=this._additiveItemsForContext(o),f=this._scalarHits(s,n),w=[...this._activeHits(),...f],M=this._selectedOilItems(),T=this._oilItems.find(x=>x.key===this._selectedOil),V=Object.fromEntries(Ie.map(x=>[x.key,x.thresholds||[]])),_=Object.fromEntries(g.map(x=>[x.key,x.thresholds||[]])),D=this._formulaSummary(s,n),F=this._activeMeasurementBasis(),S=ln(r,mi(this._workspace)),G={items:M,value:r,constraints:a,total:100,selectedKey:this._selectedOil,hits:w,precision:0,centerValue:S,centerLabel:"INS",centerPrecision:0,theme:this._theme,palette:this._palette},Q={axes:this._qualityAxes.map(x=>z(P({},x),{reachableMin:t[x.key]?.min,reachableMax:t[x.key]?.max})),value:this._qualityVector,previewValue:this._preview?.qualityVector||null,targetValue:this._preview?.targetQuality||null,reachableRange:t,selectedKey:this._selectedQuality,hits:w,precision:1,showValues:!0,theme:this._theme},I={item:T||null,value:r[this._selectedOil]||0,constraint:a[this._selectedOil]||{},role:"composition",hits:w,rangeMin:0,rangeMax:100,precision:0,theme:this._theme,palette:this._palette,variant:"embedded"},ve=new Set(Object.entries(a||{}).filter(([,x])=>x?.locked).map(([x])=>x)),vt=new Set(w.filter(x=>x.type==="locked").map(x=>x.key)),Te=new Set(Object.keys(a||{})),Oe=new Map(w.filter(x=>(x.type==="min"||x.type==="max")&&Te.has(x.key)).map(x=>[JSON.stringify([x.type,x.key]),x])),Ae=[...[...ve].map(x=>k`
          <span
            slot="slice-decorator"
            data-lock-badge
            data-key=${x}
            class=${L({"pie-lock-badge":!0,hit:vt.has(x)})}
            aria-hidden="true"
            title=${`${this._labelForKey(x)} locked`}
            >${mo}</span
          >
        `),...[...Oe.values()].map(x=>k`
          <span
            slot="slice-decorator"
            data-limit-badge
            data-key=${x.key}
            data-limit-type=${x.type}
            class=${L({"pie-limit-badge":!0,[x.type]:!0,[x.severity||"hard"]:!0,hit:!0})}
            aria-hidden="true"
            title=${`${this._labelForKey(x.key)} ${x.type==="min"?"minimum":"maximum"} reached`}
          >
            ${x.type==="min"?uo:po}
          </span>
        `)];return k`
      <section
        class="workbench"
        @vector-select=${x=>this._handleSelect(x.detail)}
        @vector-preview=${x=>this._handlePreview(x.detail)}
        @vector-change=${x=>this._handleChange(x.detail)}
        @vector-cancel=${()=>this._cancelPreview()}
        @vector-constraint-hit=${x=>this._handleConstraintHit(x.detail)}
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
              @click=${()=>this._loadWorkspace(this._workspace||{})}
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
              .axes=${Q.axes}
              .value=${Q.value}
              .previewValue=${Q.previewValue}
              .targetValue=${Q.targetValue}
              .reachableRange=${Q.reachableRange}
              .selectedKey=${Q.selectedKey}
              .hits=${Q.hits}
              .precision=${Q.precision}
              .showValues=${Q.showValues}
            ></vector-radar-chart>
            <div class="quality-rail-list">
              ${X(this._qualityAxes,x=>x.key,x=>this._qualityRow(x,e,t))}
            </div>
          </article>

          <article class="surface chart-card">
            <div class="card-heading">
              <h3>Oil Blend</h3>
              <span
                >${v(Je(this._preview?.oilVector||this._oilVector),1)}%</span
              >
            </div>
            <vector-pie-chart
              .items=${G.items}
              .value=${G.value}
              .constraints=${G.constraints}
              .total=${G.total}
              .selectedKey=${G.selectedKey}
              .hits=${G.hits}
              .precision=${G.precision}
              .centerValue=${G.centerValue}
              .centerLabel=${G.centerLabel}
              .centerPrecision=${G.centerPrecision}
              .palette=${G.palette}
            >
              ${Ae}
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
                <span>${w.length}</span>
              </div>
              <constraint-feedback-list
                .hits=${w}
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
                  .options=${So}
                  .unitKey=${this._measurementUnitKey}
                  .measurementSystem=${this._measurementSystem}
                ></vector-unit-toggle>
              </div>
              <div class="batch-size-grid">
                <vector-quantity-input
                  .item=${l}
                  .value=${s.oil_weight_g||0}
                  .constraint=${this._formulaConstraints.oil_weight_g||{}}
                  .unitOptions=${l.unitOptions??[]}
                  .unitKey=${""}
                  .measurementSystem=${this._measurementSystem}
                  .basis=${"weight"}
                  .measurementMeasure=${"weight"}
                  .role=${"formula"}
                  .context=${o}
                  .palette=${this._palette}
                ></vector-quantity-input>
                <vector-quantity-input
                  .item=${m}
                  .value=${s.batch_volume_ml||0}
                  .constraint=${this._formulaConstraints.batch_volume_ml||{}}
                  .unitOptions=${m.unitOptions??[]}
                  .unitKey=${""}
                  .measurementSystem=${this._measurementSystem}
                  .basis=${"volume"}
                  .measurementMeasure=${"volume"}
                  .role=${"formula"}
                  .context=${o}
                  .palette=${this._palette}
                ></vector-quantity-input>
              </div>
              <vector-choice-control
                .item=${Ro}
                .options=${No}
                .value=${this._formulaChoices.lye_type}
                .role=${"formula_choice"}
              ></vector-choice-control>
              <vector-amount-list
                .items=${Ie}
                .values=${s}
                .constraints=${this._formulaConstraints}
                .thresholds=${V}
                .unitPreferences=${this._unitPreferences}
                .measurementSystem=${this._measurementSystem}
                .basis=${"percent_oils"}
                .measurementScope=${"oils"}
                .measurementMeasure=${"scalar"}
                .context=${o}
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
                  .options=${wo}
                  .unitKey=${this._measurementScopeKey}
                  .measurementScope=${this._measurementScope}
                ></vector-unit-toggle>
                <vector-unit-toggle
                  .label=${"Measure"}
                  .groupKey=${"measure"}
                  .options=${Vo}
                  .unitKey=${this._measurementMeasureKey}
                  .measurementMeasure=${this._measurementMeasure}
                ></vector-unit-toggle>
              </div>
              <vector-amount-list
                .items=${g}
                .values=${n}
                .constraints=${this._additiveConstraints}
                .thresholds=${_}
                .unitPreferences=${this._unitPreferences}
                .measurementSystem=${this._measurementSystem}
                .basis=${F}
                .measurementScope=${this._measurementScope}
                .measurementMeasure=${this._measurementMeasure}
                .context=${o}
                .role=${"additive"}
                .control=${"slider"}
                .palette=${this._palette}
              ></vector-amount-list>
              <vector-summary-meter
                .items=${D}
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
    `}_loadWorkspace(e){this._oilItems=sn(e),this._oilVector=nn(e),this._oilConstraints=on(this._oilItems.map(t=>t.key)),this._qualityAxes=ht,this._qualityConstraints=Object.fromEntries(this._qualityAxes.map(t=>[t.key,{min:t.min,max:t.max,preferredMin:t.preferredMin,preferredMax:t.preferredMax,step:t.step||1}])),this._qualityVector=Me(this._oilVector),this._reachableRange=at(this._oilVector,this._oilConstraints,this._qualityAxes),this._selectedOil=Object.keys(this._oilVector)[0]||"",this._selectedQuality=this._qualityAxes[0]?.key||"",this._selectionRole="composition",this._preview=null,this._hits=[],this._history=[],this._future=[],this._measurementSystem="metric",this._measurementUnitKey="metric",this._measurementScope="oils",this._measurementScopeKey="oils",this._measurementMeasure="weight",this._measurementMeasureKey="weight",this._measurementBasis="weight",this._batchOilWeightG=Number(e?.batches?.[0]?.oil_weight_g||1800),this._unitPreferences={},this._formulaValues=Object.fromEntries([...ge,...Ie].map(t=>[t.key,t.defaultValue??0])),this._formulaValues.oil_weight_g=this._batchOilWeightG,this._formulaChoices={lye_type:"naoh"},this._selectedAdditives=["fragrance","kaolin_clay","sodium_lactate"],this._additiveValues=this._initialAdditiveValues(),this._selectedAdditive="fragrance",this._scalarPreview=null,this._initialized=!0,this.requestUpdate()}_initialAdditiveValues(){let e=new Set(this._selectedAdditives||[]);return Object.fromEntries(this._additiveItems.map(t=>[t.key,e.has(t.key)?t.defaultValue??0:0]))}_handleSelect(e){let{source:t,role:r,key:a}=e;if(a){if(this._additiveItems.some(s=>s.key===a)||[...ge,...Ie].some(s=>s.key===a)){this._selectedAdditive=a,this.requestUpdate();return}r==="metric"||this._qualityAxes.some(s=>s.key===a)?(this._selectedQuality=a,this._selectionRole="metric"):t==="constraint"&&this._qualityAxes.some(s=>s.key===a)?(this._selectedQuality=a,this._selectionRole="metric"):(this._selectedOil=a,this._selectionRole="composition"),this.requestUpdate()}}_handlePreview(e){this._queuePreview(e)}_queuePreview(e){if(this._pendingPreviewDetail=e||{},this._previewFrame)return;let t=()=>{this._previewFrame=0;let a=this._pendingPreviewDetail;this._pendingPreviewDetail=null,a&&this._applyPreview(a)},r=globalThis.requestAnimationFrame;if(typeof r!="function"){t();return}this._previewFrame=r(t)}_flushPreview(){if(!this._pendingPreviewDetail)return;if(this._previewFrame){let t=globalThis.cancelAnimationFrame;typeof t=="function"&&t(this._previewFrame),this._previewFrame=0}let e=this._pendingPreviewDetail;this._pendingPreviewDetail=null,this._applyPreview(e)}_clearPendingPreview(){if(this._pendingPreviewDetail=null,!this._previewFrame)return;let e=globalThis.cancelAnimationFrame;typeof e=="function"&&e(this._previewFrame),this._previewFrame=0}_applyPreview(e){if(e.role==="additive"||e.role==="formula"){this._previewScalar(e);return}if(e.role==="constraint"){this._previewConstraint(e);return}if(e.role==="composition"){let t=this._solveCompositionDetail(e);this._preview={transactionId:e.transactionId,oilVector:t.oilVector,qualityVector:t.qualityVector,oilConstraints:this._oilConstraints,qualityConstraints:this._qualityConstraints,reachableRange:this._reachableRange,hits:t.hits},this.requestUpdate();return}if(e.role==="metric"){let t=this._metricTarget(e),r=Pt({oilVector:this._oilVector,targetQuality:t,oilConstraints:this._activeOilConstraints(),axes:this._qualityAxes});this._preview={transactionId:e.transactionId,oilVector:r.oilVector,qualityVector:r.qualityVector,oilConstraints:this._oilConstraints,qualityConstraints:this._qualityConstraints,reachableRange:this._reachableRange,targetQuality:t,hits:r.hits},this.requestUpdate()}}_handleChange(e){if(this._flushPreview(),e.role==="measurement"){this._changeMeasurement(e);return}if(e.role==="formula_choice"){this._formulaChoices=z(P({},this._formulaChoices),{[e.key]:String(e.value??"")}),this.requestUpdate();return}if(e.role==="selection"){if(e.listType==="ingredient"||this._additiveItems.some(t=>t.key===e.key)){this._changeAdditiveSelection(e.key,e.action);return}this._changeOilSelection(e.key,e.action);return}if(e.role==="additive"||e.role==="formula"){this._commitScalar(e);return}if(e.role==="constraint"){if(this._commitConstraintPreview(e))return;this._changeConstraint(e);return}if(e.role==="composition"){let t=this._solveCompositionDetail(e);this._commitOilVector(t.oilVector,t.hits);return}if(e.role==="metric"){let t=this._metricTarget(e),r=Pt({oilVector:this._oilVector,targetQuality:t,oilConstraints:this._activeOilConstraints(),axes:this._qualityAxes});this._commitOilVector(r.oilVector,r.hits)}}_handleConstraintHit(e){this._hits=e.hits||[],e.key&&(this._additiveItems.some(t=>t.key===e.key)||Ie.some(t=>t.key===e.key)?this._selectedAdditive=e.key:this._qualityAxes.some(t=>t.key===e.key)?(this._selectedQuality=e.key,this._selectionRole="metric"):(this._selectedOil=e.key,this._selectionRole="composition")),this.requestUpdate()}_previewScalar(e){let t=e.key,r=e.role,a=r==="formula"?this._formulaValues:this._additiveValues,s=this._scalarTarget(e,a[t]??0),n=r==="formula"?this._resolveFormulaValues(z(P({},a),{[t]:s}),t,s):z(P({},a),{[t]:s});this._scalarPreview={scope:r,key:t,values:n,hits:this._scalarHits(r==="formula"?n:this._formulaValues,r==="additive"?n:this._additiveValues)},this.requestUpdate()}_commitScalar(e){let t=e.key,r=e.role,a=this._scalarTarget(e,r==="formula"?this._formulaValues[t]:this._additiveValues[t]);if(r==="formula"){let s=this._resolveFormulaValues(z(P({},this._formulaValues),{[t]:a}),t,a);this._batchOilWeightG=Number(s.oil_weight_g||this._batchOilWeightG),this._formulaValues=s}else this._additiveValues=z(P({},this._additiveValues),{[t]:a}),this._selectedAdditives=this._activeAdditiveKeys(this._additiveValues);this._scalarPreview=null,this.requestUpdate()}_scalarTarget(e,t=0){let r=e.key;return Number(e.canonicalValue??e.proposedValue?.[r]??e.requestedValue?.[r]??t??0)}_changeMeasurement(e){if(e.key==="system"){this._measurementUnitKey=e.unitKey||this._measurementUnitKey,this._measurementSystem=e.measurementSystem||this._measurementSystem,this._unitPreferences={},this.requestUpdate();return}if(e.key==="scope"){this._measurementScopeKey=e.unitKey||this._measurementScopeKey,this._measurementScope=e.measurementScope||(e.unitKey==="oils"||e.unitKey==="batch"?e.unitKey:this._measurementScope),this._measurementBasis=this._activeMeasurementBasis(),this._unitPreferences={},this.requestUpdate();return}if(e.key==="measure"){this._measurementMeasureKey=e.unitKey||this._measurementMeasureKey,this._measurementMeasure=e.measurementMeasure||(e.unitKey==="weight"||e.unitKey==="volume"||e.unitKey==="scalar"?e.unitKey:this._measurementMeasure),this._measurementBasis=this._activeMeasurementBasis(),this._unitPreferences={},this.requestUpdate();return}if(e.key&&e.unitKey){this._unitPreferences=z(P({},this._unitPreferences),{[e.key]:e.unitKey}),this.requestUpdate();return}this._measurementUnitKey=e.unitKey||this._measurementUnitKey,this._measurementSystem=e.measurementSystem||this._measurementSystem,this._measurementBasis=e.basis||this._activeMeasurementBasis(),this.requestUpdate()}_changeAdditiveSelection(e,t){if(!e)return;let r=new Set(this._selectedAdditives),a=this._additiveItems.find(s=>s.key===e);t==="remove"?r.delete(e):(r.add(e),!(e in this._additiveValues)&&a&&(this._additiveValues=z(P({},this._additiveValues),{[e]:a.defaultValue??0}))),this._selectedAdditives=[...r],this._selectedAdditive=e,this._scalarPreview=null,this.requestUpdate()}_previewConstraint(e){let t=this._resolveConstraintPreview(e);this._preview=t,this.requestUpdate()}_commitConstraintPreview(e){return!this._preview||this._preview.transactionId!==e.transactionId||!this._preview.constraintRole?!1:(this._pushHistory(),this._oilVector=ee(this._preview.oilVector||this._oilVector),this._qualityVector=P({},this._preview.qualityVector),this._oilConstraints=this._preview.oilConstraints||this._oilConstraints,this._qualityConstraints=this._preview.qualityConstraints||this._qualityConstraints,this._reachableRange=this._preview.reachableRange||at(this._oilVector,this._oilConstraints,this._qualityAxes),this._hits=this._preview.hits||[],this._preview=null,this._future=[],this.requestUpdate(),!0)}_resolveConstraintPreview(e){return e.constraintRole!=="composition"?this._resolveQualityConstraintPreview(e):this._resolveOilConstraintPreview(e)}_resolveOilConstraintPreview(e){let t=e.key,r=this._oilConstraints,a=this._oilVector,s=this._constraintPatchForLockedValue(t,e.constraint||{},r[t]||{},Number(a[t]||0),"%"),n=un(a,r,t,s.constraint,this._selectedOilItems()),o=at(n.oilVector,n.oilConstraints,this._qualityAxes);return{transactionId:e.transactionId,constraintRole:"composition",oilVector:n.oilVector,oilConstraints:n.oilConstraints,qualityVector:n.qualityVector,qualityConstraints:this._qualityConstraints,reachableRange:o,hits:s.hits}}_resolveQualityConstraintPreview(e){let t=e.key,r=this._qualityConstraints,a=Number(this._qualityVector[t]||0),s=this._constraintPatchForLockedValue(t,e.constraint||{},r[t]||{},a,""),n=z(P({},r),{[t]:P(P({},r[t]||{}),s.constraint)}),o=n[t]||{},l=K(a,Number(o.min??-1/0),Number(o.max??1/0)),m=this._oilVector,g=this._qualityVector,f=s.hits;if(!f.length&&Number.isFinite(l)&&Math.abs(l-a)>.001){let w=Pt({oilVector:this._oilVector,targetQuality:z(P({},this._qualityVector),{[t]:l}),oilConstraints:this._oilConstraints,axes:this._qualityAxes});m=w.oilVector,g=w.qualityVector,f=w.hits||[]}return{transactionId:e.transactionId,constraintRole:"metric",oilVector:m,oilConstraints:this._oilConstraints,qualityVector:g,qualityConstraints:n,reachableRange:this._reachableRange,hits:f}}_constraintPatchForLockedValue(e,t,r,a,s){let o=!!P(P({},r),t).locked,l=P({},t),m=[];return o&&t.min!=null&&Number(t.min)>a&&(l.min=a,m.push(te(e,"locked",`${this._labelForKey(e)} is locked at ${v(a,1)}${s}.`))),o&&t.max!=null&&Number(t.max)<a&&(l.max=a,m.push(te(e,"locked",`${this._labelForKey(e)} is locked at ${v(a,1)}${s}.`))),{constraint:l,hits:m}}_solveCompositionDetail(e){if(e.proposedValue&&Object.keys(e.proposedValue).length>1){let a=ee(e.proposedValue);return{oilVector:a,qualityVector:Me(a),hits:e.hits||[]}}let t=e.key,r=Number(e.proposedValue?.[t]??e.requestedValue?.[t]??this._oilVector[t]??0);return mn({oilVector:this._oilVector,key:t,target:r,oilConstraints:this._activeOilConstraints(),oilItems:this._selectedOilItems()})}_metricTarget(e){let t=e.key;return e.requestedValue&&Object.keys(e.requestedValue).length>1?e.requestedValue:z(P({},this._qualityVector),{[t]:Number(e.proposedValue?.[t]??e.requestedValue?.[t]??this._qualityVector[t]??0)})}_changeConstraint(e){this._preview=this._resolveConstraintPreview(e),this._commitConstraintPreview(e)}_changeOilSelection(e,t){if(e){if(this._pushHistory(),t==="add"&&!(e in this._oilVector))this._oilVector=z(P({},this._oilVector),{[e]:0}),this._selectedOil=e;else if(t==="remove"&&e in this._oilVector){if(Number(this._oilVector[e]||0)>0){let r=pt({value:this._oilVector,key:e,target:0,constraints:this._oilConstraints,items:this._selectedOilItems(),total:100});this._oilVector=r.vector,this._hits=r.hits}delete this._oilVector[e],this._selectedOil=Object.keys(this._oilVector)[0]||""}this._qualityVector=Me(this._oilVector),this._reachableRange=at(this._oilVector,this._oilConstraints,this._qualityAxes),this._preview=null,this._future=[],this.requestUpdate()}}_commitOilVector(e,t=[]){if(lr(this._oilVector,e)<.001){this._preview=null,this._hits=t,this.requestUpdate();return}this._pushHistory(),this._oilVector=ee(e),this._qualityVector=Me(this._oilVector),this._reachableRange=at(this._oilVector,this._oilConstraints,this._qualityAxes),this._preview=null,this._hits=t,this._future=[],this.requestUpdate()}_pushHistory(){this._history=[...this._history,ee(this._oilVector)].slice(-50)}_undo(){let e=this._history.at(-1);e&&(this._future=[ee(this._oilVector),...this._future].slice(0,50),this._history=this._history.slice(0,-1),this._oilVector=ee(e),this._qualityVector=Me(this._oilVector),this._reachableRange=at(this._oilVector,this._oilConstraints,this._qualityAxes),this._preview=null,this._hits=[],this.requestUpdate())}_redo(){let e=this._future[0];e&&(this._history=[...this._history,ee(this._oilVector)].slice(-50),this._future=this._future.slice(1),this._oilVector=ee(e),this._qualityVector=Me(this._oilVector),this._reachableRange=at(this._oilVector,this._oilConstraints,this._qualityAxes),this._preview=null,this._hits=[],this.requestUpdate())}_cancelPreview(){this._clearPendingPreview(),this._preview=null,this.requestUpdate()}_emitQualityRange(e,t){let r=e.currentTarget,a=r.dataset.qualityRange,s=this._qualityAxes.find(f=>f.key===a);if(!s)return;let n=s.key;t==="vector-preview"&&!r.dataset.transaction&&(r.dataset.transaction=R("quality-row"));let o=r.dataset.transaction||R("quality-row"),l=Number(r.value);this._selectedQuality=n,this._selectionRole="metric";let m=z(P({},this._qualityVector),{[n]:l}),g={source:"table",role:"metric",transactionId:o,key:n,previousValue:this._qualityVector,requestedValue:m,proposedValue:m,delta:v(l-Number(this._qualityVector[n]||0),4),hits:[]};t==="vector-preview"?this._handlePreview(g):(this._handleChange(g),delete r.dataset.transaction)}_qualityRow(e,t,r){let a=r[e.key]||{},s=Number(t[e.key]||0),n=Number(a.min??e.reachableMin??e.min??0),o=Number(a.max??e.reachableMax??e.max??100),l=e.preferredMin??n,m=e.preferredMax??o,g=e.key===this._selectedQuality,f=se(K(s,e.min??0,e.max??100),e.step||1);return k`
      <div
        class=${L({"quality-row":!0,selected:g})}
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
              ${Z({"--quality-start":`${this._qualityPct(n,e)}%`,"--quality-width":`${Math.max(0,this._qualityPct(o,e)-this._qualityPct(n,e))}%`})}
            ></span>
            <span
              class="quality-preferred"
              ${Z({"--quality-start":`${this._qualityPct(l,e)}%`,"--quality-width":`${Math.max(0,this._qualityPct(m,e)-this._qualityPct(l,e))}%`})}
            ></span>
            <span
              class="quality-current"
              ${Z({"--quality-position":`${this._qualityPct(s,e)}%`})}
            ></span>
          </div>
          <input
            data-quality-range=${e.key}
            type="range"
            min=${e.min??0}
            max=${e.max??100}
            step=${e.step||1}
            .value=${String(v(f,1))}
            aria-label=${`${e.label} target`}
            @input=${w=>this._emitQualityRange(w,"vector-preview")}
            @change=${w=>this._emitQualityRange(w,"vector-change")}
          />
        </div>
        <output>${v(s,1)}</output>
        <span class="quality-reach-label"
          >${v(n,1)}-${v(o,1)}</span
        >
      </div>
    `}_selectQuality(e){this._selectedQuality=e,this._selectionRole="metric",this.requestUpdate()}_qualityPct(e,t){let r=Number(t.min??0),a=Number(t.max??100);return K((Number(e||0)-r)/(a-r||1)*100,0,100)}_activeOilConstraints(){return this._preview?.oilConstraints||this._oilConstraints}_activeQualityConstraints(){return this._preview?.qualityConstraints||this._qualityConstraints}_activeReachableRange(){return this._preview?.reachableRange||this._reachableRange}_activeFormulaValues(){let e=this._scalarPreview?.scope==="formula"?this._scalarPreview.values:this._formulaValues;return this._withBatchFormulaValues(e)}_activeAdditiveValues(){return this._scalarPreview?.scope==="additive"?this._scalarPreview.values:this._additiveValues}_activeAdditiveKeys(e=this._activeAdditiveValues()){return this._additiveItems.map(t=>t.key).filter(t=>Math.abs(Number(e?.[t]||0))>1e-9)}_withBatchFormulaValues(e=this._formulaValues){let t=Number(e.oil_weight_g||this._batchOilWeightG||0),r=this._batchEstimateForOilWeight(t,e,this._activeAdditiveValues(),this._preview?.oilVector||this._oilVector);return z(P({},e),{oil_weight_g:v(t,1),batch_volume_ml:v(r.volumeMl,1)})}_resolveFormulaValues(e,t,r){let a=P({},e);if(t==="batch_volume_ml"){let s=this._oilWeightForBatchVolume(r,a,this._activeAdditiveValues(),this._preview?.oilVector||this._oilVector);a.oil_weight_g=v(s,1)}else t==="oil_weight_g"&&(a.oil_weight_g=v(r,1));return this._withBatchFormulaValues(a)}_activeMeasurementBasis(){return this._measurementMeasure==="volume"?"volume":"weight"}_batchContext(e=this._oilVector,t=this._activeFormulaValues(),r=this._activeAdditiveValues()){let a=this._batchEstimateForOilWeight(Number(t.oil_weight_g||this._batchOilWeightG||0),t,r,e);return z(P({},a),{densities:this._workspace?.constants?.density||{}})}_batchItems(e){return ge.map(t=>t.key!=="batch_volume_ml"?t:z(P({},t),{defaultValue:v(Number(e.volumeMl??0),1)}))}_batchSizeItem(){return ge.find(e=>e.key===(this._measurementMeasure==="volume"?"batch_volume_ml":"oil_weight_g"))||ge[0]}_batchSizeUnitOptions(){let e=this._measurementMeasure==="volume"?"volume":"weight";return(this._batchSizeItem().unitOptions??[]).filter(t=>t.measure===e)}_additiveItemsForContext(e){let t=e?.densities||{};return this._additiveItems.map(r=>{let a=r.material||r.key,s=Number.isFinite(Number(t[a]));return z(P({},r),{unitOptions:(r.unitOptions||[]).filter(n=>n.measure!=="volume"||s)})})}_batchEstimateForOilWeight(e,t=this._formulaValues,r=this._additiveValues,a=this._oilVector){return Ws({oilWeightG:e,oilVector:a,formulaValues:t,additiveValues:r,selectedAdditives:this._activeAdditiveKeys(r),additiveItems:this._additiveItems,workspace:this._workspace})}_oilWeightForBatchVolume(e,t=this._formulaValues,r=this._additiveValues,a=this._oilVector){let n=this._batchEstimateForOilWeight(1e3,t,r,a).volumeMl/1e3||1;return K(Number(e||0)/n,ge[0].min,ge[0].max)}_selectedOilItems(){let e=new Set(Object.keys(this._oilVector));return this._oilItems.filter(t=>e.has(t.key))}_labelForKey(e){return this._oilItems.find(t=>t.key===e)?.label||this._qualityAxes.find(t=>t.key===e)?.label||[...ge,...Ie,...this._additiveItems].find(t=>t.key===e)?.label||e}_activeHits(){return this._preview?.hits||this._hits||[]}_scalarHits(e=this._formulaValues,t=this._additiveValues){let r=Ie.flatMap(n=>this._thresholdHit(n,e[n.key])),a=new Set(this._activeAdditiveKeys(t)),s=this._additiveItems.filter(n=>a.has(n.key)).flatMap(n=>this._thresholdHit(n,t[n.key]));return[...r,...s]}_thresholdHit(e,t){let r=(e.thresholds||[]).find(a=>Number(t||0)>=Number(a.min)&&Number(t||0)<=Number(a.max));return!r||r.severity==="ok"?[]:[te(e.key,"threshold",r.label||`${e.label||e.key} is in ${r.severity} range.`,r.severity==="danger"?"hard":"soft")]}_formulaSummary(e,t){let r=new Set(this._activeAdditiveKeys(t)),a=Object.entries(t||{}).filter(([o])=>r.has(o)).reduce((o,[,l])=>o+Number(l||0),0),s=Number(t.fragrance||0),n=Number(e.lye_concentration||0);return[{key:"batch_volume_ml",label:"Batch volume",value:Number(e.batch_volume_ml||0),min:400,max:16e3,unit:" ml",precision:0,thresholds:[]},{key:"total_additives",label:"Additive load",value:a,min:0,max:10,unit:"%",precision:1,thresholds:[{key:"normal",min:0,max:5,severity:"ok"},{key:"busy",min:5.1,max:8,severity:"warn"},{key:"crowded",min:8.1,max:10,severity:"danger"}]},{key:"fragrance_load",label:"Fragrance load",value:s,min:0,max:6,unit:"%",precision:1,thresholds:this._additiveItems.find(o=>o.key==="fragrance")?.thresholds||[]},{key:"lye_strength",label:"Lye strength",value:n,min:25,max:45,unit:"%",precision:1,thresholds:Ie.find(o=>o.key==="lye_concentration")?.thresholds||[]}]}_statusText(){return this._preview?"Previewing a recipe change.":this._hits.length?this._hits[0].message:"Approximate quality model; fatty-acid data is a demo fixture."}};Io()});var Vr,bn=b(()=>{"use strict";he();ft();vn();he();Vr=class i{constructor(){this.workspace=J(Se)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=ke({type:i,selectors:[["rms-design-page"]],decls:2,vars:1,consts:[["aria-label","Recipe designer"],[3,"workspace"]],template:function(t,r){t&1&&(N(0,"section",0),Mi(1,"recipe-vector-workbench",1),A()),t&2&&(y(),Ve("workspace",r.workspace.workspace()))},encapsulation:2})}}});function Ao(i,e){if(i&1&&(N(0,"details")(1,"summary"),c(2,"Backup preview"),A(),N(3,"pre",9),c(4),A()()),i&2){let t=Y();y(4),q(t.workspace.backupPreview())}}var Er,yn=b(()=>{"use strict";he();ft();In();he();Er=class i{constructor(){this.workspace=J(Se)}updated(e){this.workspace.acceptState(e.detail)}exportBackup(){this.workspace.exportBackup()}resetDemo(){this.workspace.resetDemo()}async importBackup(e){let t=e.currentTarget,r=t.files?.[0];r&&(await this.workspace.importBackup(await r.text()),t.value="")}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=ke({type:i,selectors:[["rms-files-page"]],decls:14,vars:3,consts:[["aria-labelledby","backup-heading"],[1,"panel","full-width"],[1,"panel-heading"],["id","backup-heading"],[1,"badge"],[1,"backup-grid"],["title","Export JSON backup",1,"primary",3,"click"],["title","Reset demo workspace",1,"secondary",3,"click"],[3,"workspace-updated","workspace","execute"],[1,"backup-preview"]],template:function(t,r){t&1&&(N(0,"section",0)(1,"section",1)(2,"div",2)(3,"h2",3),c(4,"Backup"),A(),N(5,"span",4),c(6,"JSON"),A()(),N(7,"div",5)(8,"button",6),Ee("click",function(){return r.exportBackup()}),c(9," Export "),A(),N(10,"button",7),Ee("click",function(){return r.resetDemo()}),c(11," Reset demo "),A()(),qe(12,Ao,5,1,"details"),A(),N(13,"workspace-data-review",8),Ee("workspace-updated",function(s){return r.updated(s)}),A()()),t&2&&(y(12),Le(r.workspace.backupPreview()?12:-1),y(),Ve("workspace",r.workspace.workspace())("execute",r.workspace.execute))},encapsulation:2})}}});function Fo(i,e){if(i&1&&(N(0,"option",8),c(1),A()),i&2){let t=e.$implicit,r=Y();Ve("value",t.id)("selected",r.workspace.selectedRecipeId()===t.id),y(),Pe(" ",t.name," ")}}function qo(i,e){if(i&1&&(N(0,"option",8),c(1),A()),i&2){let t=e.$implicit,r=Y();Ve("value",t[0])("selected",r.workspace.selectedBarSize()===t[0]),y(),Pe(" ",t[1].display_name||t[0]," ")}}function Lo(i,e){if(i&1&&(N(0,"li")(1,"span"),c(2),A(),N(3,"strong"),c(4),A()()),i&2){let t=e.$implicit,r=Y(2);y(2),q(r.label(t[0])),y(2),q(r.grams(t[1]))}}function Uo(i,e){if(i&1&&(N(0,"div")(1,"div",15)(2,"div",16)(3,"span"),c(4,"Total oils"),A(),N(5,"strong"),c(6),A()(),N(7,"div",16)(8,"span"),c(9,"Total mass"),A(),N(10,"strong"),c(11),A()(),N(12,"div",16)(13,"span"),c(14,"Expected bars"),A(),N(15,"strong"),c(16),A()(),N(17,"div",16)(18,"span"),c(19,"Lye"),A(),N(20,"strong"),c(21),A()(),N(22,"div",16)(23,"span"),c(24,"Liquid"),A(),N(25,"strong"),c(26),A()(),N(27,"div",16)(28,"span"),c(29,"Fragrance"),A(),N(30,"strong"),c(31),A()()(),N(32,"ul",17),be(33,Lo,5,2,"li",null,gn),A()()),i&2){let t=e,r=Y();y(6),q(r.grams(t.total_oils_g)),y(5),q(r.grams(t.total_mass_g)),y(5),q(t.bars_expected||0),y(5),q(r.grams(t.lye_g)),y(5),q(r.grams(t.liquid_g)),y(5),q(r.grams(t.fragrance.amount_g)),y(2),ye(r.materialEntries(t))}}function Ko(i,e){i&1&&(N(0,"div",14),c(1,"No batch calculated yet."),A())}var Do,gn,$r,fn=b(()=>{"use strict";he();ft();Ar();he();Do=(i,e)=>e.id,gn=(i,e)=>e[0];$r=class i{constructor(){this.workspace=J(Se);this.recipes=Ke(()=>Jt(this.workspace.workspace()));this.barSizes=Ke(()=>Ui(this.workspace.workspace()));this.grams=qi;this.label=Zt}setRecipe(e){this.workspace.selectedRecipeId.set(e)}setBarSize(e){this.workspace.selectedBarSize.set(e)}setVolume(e){this.workspace.volumeIn3.set(Number(e))}setFragrance(e){this.workspace.fragrancePct.set(Number(e))}calculate(e){e.preventDefault(),this.workspace.calculate()}savePlan(){this.workspace.savePlan()}calculationBadge(){let e=this.workspace.currentCalculation();return e?e.costing.missing_material_costs.length?"Missing costs":gt(e.costing.total_material_cost):"Demo"}materialEntries(e){return Object.entries(e.materials_required_g)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=ke({type:i,selectors:[["rms-plan-page"]],decls:35,vars:6,consts:[["aria-labelledby","plan-heading"],[1,"split"],[1,"panel","tool-panel"],[1,"panel-heading"],["id","plan-heading"],["title","Save planned batch",1,"primary",3,"click"],[1,"form-grid",3,"submit"],[3,"change","value"],[3,"value","selected"],["type","number","min","1","step","0.01",3,"input","value"],["type","number","min","0","max","6","step","0.1",3,"input","value"],["type","submit",1,"primary","span-two"],["aria-live","polite",1,"panel","result-panel"],[1,"badge"],[1,"result-empty"],[1,"prep-grid"],[1,"prep-tile"],[1,"material-list"]],template:function(t,r){if(t&1&&(N(0,"section",0)(1,"div",1)(2,"section",2)(3,"div",3)(4,"h2",4),c(5,"Batch Calculator"),A(),N(6,"button",5),Ee("click",function(){return r.savePlan()}),c(7," + Plan "),A()(),N(8,"form",6),Ee("submit",function(s){return r.calculate(s)}),N(9,"label"),c(10," Recipe "),N(11,"select",7),Ee("change",function(s){return r.setRecipe(s.target.value)}),be(12,Fo,2,3,"option",8,Do),A()(),N(14,"label"),c(15," Mold volume "),N(16,"input",9),Ee("input",function(s){return r.setVolume(s.target.value)}),A()(),N(17,"label"),c(18," Bar size "),N(19,"select",7),Ee("change",function(s){return r.setBarSize(s.target.value)}),be(20,qo,2,3,"option",8,gn),A()(),N(22,"label"),c(23," Fragrance % "),N(24,"input",10),Ee("input",function(s){return r.setFragrance(s.target.value)}),A()(),N(25,"button",11),c(26,"Calculate"),A()()(),N(27,"section",12)(28,"div",3)(29,"h2"),c(30,"Prep Sheet"),A(),N(31,"span",13),c(32),A()(),qe(33,Uo,35,6,"div")(34,Ko,2,0,"div",14),A()()()),t&2){let a;y(11),Ve("value",r.workspace.selectedRecipeId()),y(),ye(r.recipes()),y(4),Ve("value",r.workspace.volumeIn3()),y(3),Ve("value",r.workspace.selectedBarSize()),y(),ye(r.barSizes()),y(4),Ve("value",r.workspace.fragrancePct()),y(8),q(r.calculationBadge()),y(),Le((a=r.workspace.currentCalculation())?33:34,a)}},encapsulation:2})}}});function Ho(i,e){if(i&1&&(u(0,"tr")(1,"td"),c(2),p(),u(3,"td"),c(4),p(),u(5,"td"),c(6),p()()),i&2){let t=e.$implicit,r=Y(3);y(2),q(r.label(t[0])),y(2),Oi(" ",r.number(t[1].on_hand)," ",t[1].unit||""," "),y(2),Pe(" ",r.moneyValue(t[1].avg_cost_per_unit??t[1].cost_per_unit??0)," ")}}function Bo(i,e){i&1&&(u(0,"tr")(1,"td",8),c(2,"None"),p()())}function zo(i,e){if(i&1&&(u(0,"h3"),c(1),p(),u(2,"table")(3,"thead")(4,"tr")(5,"th"),c(6,"Name"),p(),u(7,"th"),c(8,"On hand"),p(),u(9,"th"),c(10,"Avg cost"),p()()(),u(11,"tbody"),be(12,Ho,7,4,"tr",null,xn,!1,Bo,3,0,"tr"),p()()),i&2){let t=e.$implicit,r=Y(2);y(),q(t[0]),y(11),ye(r.entries(t[1]))}}function jo(i,e){if(i&1){let t=Xe();u(0,"section",0)(1,"section",2)(2,"div",3)(3,"h2",4),c(4,"Inventory"),p(),u(5,"button",5),Ue("click",function(){De(t);let a=Y();return Fe(a.runAudit())}),c(6," Audit "),p(),u(7,"a",6),c(8,"Record purchase"),p()(),u(9,"div",7),be(10,zo,15,2,null,null,xn),p()()()}if(i&2){let t=Y();y(10),ye(t.sections())}}function Wo(i,e){if(i&1&&(u(0,"section",10)(1,"div",39)(2,"span"),c(3,"Recorded inventory value"),p(),u(4,"strong"),c(5),p()(),u(6,"div",39)(7,"span"),c(8,"Recorded asset purchases"),p(),u(9,"strong"),c(10),p()(),u(11,"div",39)(12,"span"),c(13,"Monthly asset amortization"),p(),u(14,"strong"),c(15),p()()()),i&2){let t=e,r=Y(2);y(5),q(r.moneyValue(t.inventoryValue)),y(5),q(r.moneyValue(t.assetSpend)),y(5),q(r.moneyValue(t.monthlyAmortization))}}function Qo(i,e){if(i&1&&(u(0,"tr")(1,"td"),c(2),p(),u(3,"td"),c(4),p(),u(5,"td"),c(6),p(),u(7,"td"),c(8),p(),u(9,"td"),c(10),p()()),i&2){let t=e.$implicit,r=Y(2);y(2),q(t.name),y(2),q(t.purchased_at),y(2),q(r.moneyValue(t.amount_usd)),y(2),q(t.useful_life_months),y(2),q(r.assetMonthly(t))}}function Go(i,e){i&1&&(u(0,"tr")(1,"td",40),c(2,"None"),p()())}function Xo(i,e){if(i&1&&(u(0,"tr")(1,"td"),c(2),p(),u(3,"td"),c(4),p(),u(5,"td"),c(6),p()()),i&2){let t=e.$implicit,r=Y(2);y(2),q(t.date),y(2),q(t.vendor),y(2),Pe(" ",r.moneyValue(t.total??t.total_usd)," ")}}function Yo(i,e){i&1&&(u(0,"tr")(1,"td",8),c(2,"No receipts"),p()())}function Zo(i,e){if(i&1&&(u(0,"tr")(1,"td"),c(2),p(),u(3,"td"),c(4),p(),u(5,"td"),c(6),p()()),i&2){let t=e.$implicit,r=Y(2);y(2),q(t.id),y(2),q(t.status),y(2),Pe(" ",t.costed&&t.total_cost!=null?r.moneyValue(t.total_cost):"Not costed"," ")}}function Jo(i,e){i&1&&(u(0,"tr")(1,"td",8),c(2,"No batches"),p()())}function el(i,e){if(i&1){let t=Xe();u(0,"section",1)(1,"h2",9),c(2,"Finances"),p(),qe(3,Wo,16,3,"section",10),u(4,"section",2)(5,"div",3)(6,"h2",11),c(7,"Receipt"),p(),u(8,"span",12),c(9,"Manual"),p()(),u(10,"form",13),Ue("submit",function(a){De(t);let s=Y();return Fe(s.recordReceipt(a))}),u(11,"label"),c(12,"Vendor"),oe(13,"input",14),p(),u(14,"label"),c(15,"Date"),oe(16,"input",15),p(),u(17,"label"),c(18,"Payment "),u(19,"select",16)(20,"option",17),c(21,"Debit business"),p(),u(22,"option",18),c(23,"Debit personal"),p(),u(24,"option",19),c(25,"Cash"),p(),u(26,"option",20),c(27,"Credit business"),p()()(),u(28,"div",21)(29,"label"),c(30,"Item"),oe(31,"input",22),p(),u(32,"label"),c(33,"Material"),oe(34,"input",23),p(),u(35,"label"),c(36,"Qty"),oe(37,"input",24),p(),u(38,"label"),c(39,"Unit"),oe(40,"input",25),p(),u(41,"label"),c(42,"Cost"),oe(43,"input",26),p()(),u(44,"button",27),c(45,"+ Receipt"),p()()(),u(46,"section",28)(47,"div",3)(48,"h2"),c(49,"Infrastructure"),p(),u(50,"span",12),c(51),p()(),u(52,"form",29),Ue("submit",function(a){De(t);let s=Y();return Fe(s.recordAsset(a))}),u(53,"label"),c(54,"Asset"),oe(55,"input",30),p(),u(56,"label"),c(57,"Purchase date"),oe(58,"input",31),p(),u(59,"label"),c(60,"Amount"),oe(61,"input",32),p(),u(62,"label"),c(63,"Months"),oe(64,"input",33),p(),u(65,"button",34),c(66,"+ Asset"),p()(),u(67,"div",7)(68,"table")(69,"thead")(70,"tr")(71,"th"),c(72,"Asset"),p(),u(73,"th"),c(74,"Date"),p(),u(75,"th"),c(76,"Amount"),p(),u(77,"th"),c(78,"Months"),p(),u(79,"th"),c(80,"Monthly"),p()()(),u(81,"tbody"),be(82,Qo,11,5,"tr",null,yi,!1,Go,3,0,"tr"),p()()()(),u(85,"section",35)(86,"h2",36),c(87,"Recorded receipts"),p(),u(88,"div",7)(89,"table")(90,"thead")(91,"tr")(92,"th"),c(93,"Date"),p(),u(94,"th"),c(95,"Vendor"),p(),u(96,"th"),c(97,"Total"),p()()(),u(98,"tbody"),be(99,Xo,7,3,"tr",null,yi,!1,Yo,3,0,"tr"),p()()()(),u(102,"section",37)(103,"h2",38),c(104,"Batch costs"),p(),u(105,"div",7)(106,"table")(107,"thead")(108,"tr")(109,"th"),c(110,"Batch"),p(),u(111,"th"),c(112,"Status"),p(),u(113,"th"),c(114,"Recorded material cost"),p()()(),u(115,"tbody"),be(116,Zo,7,3,"tr",null,yi,!1,Jo,3,0,"tr"),p()()()()()}if(i&2){let t,r,a,s=Y();y(3),Le((t=s.workspace.reports())?3:-1,t),y(13),It("value",s.receiptDate),y(35),q(s.monthlyAmortization()),y(7),It("value",s.assetDate),y(24),ye(s.assets()),y(17),ye(((r=s.workspace.workspace())==null?null:r.receipts)||Nr(7,_n)),y(17),ye(((a=s.workspace.workspace())==null?null:a.batches)||Nr(8,_n))}}var _n,xn,yi,Qt,kn=b(()=>{"use strict";he();Yt();ft();Nn();Ar();he();_n=()=>[],xn=(i,e)=>e[0],yi=(i,e)=>e.id;Qt=class i{constructor(){this.view=J(Ni).snapshot.data.view;this.workspace=J(Se);this.receiptDate=Ir();this.assetDate=Ir();this.sections=Ke(()=>Ki(this.workspace.workspace()));this.assets=Ke(()=>this.workspace.workspace()?.assets||[]);this.monthlyAmortization=Ke(()=>{let e=this.workspace.reports();return e?`${gt(e.monthlyAmortization)} / month`:""});this.label=Zt;this.number=Li;this.moneyValue=gt}entries(e){return Object.entries(e)}assetMonthly(e){return gt(zi(e))}runAudit(){this.workspace.runAudit()}recordReceipt(e){e.preventDefault();let t=e.currentTarget,r=new FormData(t);this.workspace.recordReceipt({vendor:He(r,"vendor"),date:He(r,"date"),paymentMethod:He(r,"paymentMethod"),itemName:He(r,"itemName"),material:He(r,"material"),quantity:At(r,"quantity"),unit:He(r,"unit"),total:At(r,"total"),account:"assets.inventory.raw_materials"})}recordAsset(e){e.preventDefault();let t=e.currentTarget,r=new FormData(t);this.workspace.recordAsset({name:He(r,"name"),purchasedAt:He(r,"purchasedAt"),amountUsd:At(r,"amountUsd"),usefulLifeMonths:At(r,"usefulLifeMonths")})}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=ke({type:i,selectors:[["rms-stock-page"]],decls:2,vars:1,consts:[["aria-labelledby","stock-heading"],["aria-labelledby","finance-heading"],[1,"panel"],[1,"panel-heading"],["id","stock-heading"],["title","Run capacity audit",1,"secondary",3,"click"],["routerLink","/finances","fragment","receipt"],[1,"table-wrap"],["colspan","3"],["id","finance-heading"],["aria-label","Financial summary",1,"metric-grid"],["id","receipt"],[1,"badge"],[1,"stacked-form",3,"submit"],["name","vendor","required","","value","Demo Supply"],["name","date","type","date","required","",3,"value"],["name","paymentMethod"],["value","debit_business"],["value","debit_personal"],["value","cash"],["value","credit_business"],[1,"line-grid"],["name","itemName","required","","value","Olive oil"],["name","material","required","","value","olive_oil"],["name","quantity","type","number","min","0.001","step","0.001","value","1"],["name","unit","value","kg"],["name","total","type","number","min","0","step","0.01","value","6.40"],["type","submit",1,"primary"],[1,"panel","full-width"],[1,"asset-form",3,"submit"],["name","name","required","","value","Column mold"],["name","purchasedAt","type","date","required","",3,"value"],["name","amountUsd","type","number","min","0","step","0.01","value","48"],["name","usefulLifeMonths","type","number","min","1","step","1","value","36"],["type","submit",1,"secondary"],["aria-labelledby","purchases-heading"],["id","purchases-heading"],["aria-labelledby","batch-cost-heading"],["id","batch-cost-heading"],[1,"metric"],["colspan","5"]],template:function(t,r){t&1&&qe(0,jo,12,0,"section",0)(1,el,119,9,"section",1),t&2&&Le(r.view==="inventory"?0:1)},dependencies:[yt],encapsulation:2})}}});function rl(i,e){if(i&1){let t=Xe();u(0,"tr")(1,"td"),c(2),p(),u(3,"td"),c(4),p(),u(5,"td"),c(6),p(),u(7,"td")(8,"button",7),Ue("click",function(){let a=De(t).$implicit,s=Y();return Fe(s.plan(a.id))}),c(9," Plan batch "),p()()()}if(i&2){let t=e.$implicit;y(2),q(t.name),y(2),q(t.id),y(2),q(t.draft?"Draft":"Available")}}function il(i,e){i&1&&(u(0,"tr")(1,"td",8),c(2,"No recipes yet."),p()())}var tl,Cr,Sn=b(()=>{"use strict";he();Yt();ft();Ar();he();tl=(i,e)=>e.id;Cr=class i{constructor(){this.workspace=J(Se);this.router=J(Ai);this.recipes=Ke(()=>{let e=this.workspace.workspace();return Jt(e).map(t=>{let a=e?.product_recipes?.find(s=>s.id===t.id)?.base_recipe_id||t.id;return z(P({},t),{draft:e?.base_recipes?.find(s=>s.id===a)?.status==="draft"})})})}plan(e){this.router.navigate(["/production"],{queryParams:{recipe:e}})}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=ke({type:i,selectors:[["rms-recipes-page"]],decls:24,vars:1,consts:[["aria-labelledby","recipes-heading"],[1,"panel-heading"],["id","recipes-heading"],[1,"top-actions"],["routerLink","/recipes/calculator"],["routerLink","/recipes/design"],[1,"table-wrap"],["type","button",3,"click"],["colspan","4"]],template:function(t,r){t&1&&(u(0,"section",0)(1,"div",1)(2,"h2",2),c(3,"Recipes"),p(),u(4,"div",3)(5,"a",4),c(6,"Batch calculator"),p(),u(7,"a",5),c(8,"Recipe designer"),p()()(),u(9,"div",6)(10,"table")(11,"thead")(12,"tr")(13,"th"),c(14,"Recipe"),p(),u(15,"th"),c(16,"Identifier"),p(),u(17,"th"),c(18,"Status"),p(),oe(19,"th"),p()(),u(20,"tbody"),be(21,rl,10,3,"tr",null,tl,!1,il,3,0,"tr"),p()()()()),t&2&&(y(21),ye(r.recipes()))},dependencies:[yt],encapsulation:2})}}});var wn,Vn=b(()=>{"use strict";bn();yn();fn();kn();Sn();wn=[{path:"",pathMatch:"full",redirectTo:"production"},{path:"recipes",component:Cr},{path:"recipes/calculator",component:$r},{path:"recipes/design",component:Vr},{path:"inventory",component:Qt,data:{view:"inventory"}},{path:"finances",component:Qt,data:{view:"finances"}},{path:"production",loadComponent:()=>import("./chunk-ML5LAHQG.js").then(i=>i.FlowPage)},{path:"settings",component:Er},{path:"plan",redirectTo:"recipes/calculator"},{path:"design",redirectTo:"recipes/design"},{path:"stock",redirectTo:"inventory"},{path:"flow",redirectTo:"production"},{path:"files",redirectTo:"settings"},{path:"**",redirectTo:"production"}]});var En,$n=b(()=>{"use strict";he();Yt();Gi();Vn();Rn();En={providers:[$i(),Fi(wn),Qi("ngsw-worker.js"),{provide:lt,useFactory:()=>({enabled:!Pi()&&J(Hi).mode==="browser",registrationStrategy:"registerWhenStable:30000"})}]}});function sl(i,e){if(i&1&&(u(0,"a",6),c(1),p()),i&2){let t=e.$implicit;It("routerLink",t.path)("title",t.title),y(),Pe(" ",t.label," ")}}function nl(i,e){if(i&1){let t=Xe();u(0,"button",11),Ue("click",function(){De(t);let a=Y();return Fe(a.workspace.retrySave())}),c(1," Retry unconfirmed save "),p()}}function ol(i,e){if(i&1){let t=Xe();u(0,"button",11),Ue("click",function(){De(t);let a=Y();return Fe(a.workspace.refresh("getWorkspace"))}),c(1," Reconnect "),p()}}var al,Mr,Cn=b(()=>{"use strict";he();Yt();ft();he();al=(i,e)=>e.path;Mr=class i{constructor(){this.workspace=J(Se);this.navItems=[{path:"/production",label:"Production",title:"Batches and production"},{path:"/recipes",label:"Recipes",title:"Recipe library and design"},{path:"/inventory",label:"Inventory",title:"Materials and finished goods"},{path:"/finances",label:"Finances",title:"Purchases, assets, and costs"},{path:"/settings",label:"Settings & Data",title:"Backups and data review"}];this.workspace.initialize()}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=ke({type:i,selectors:[["rms-root"]],decls:24,vars:6,consts:[[1,"shell"],["aria-label","Workspace",1,"sidebar"],[1,"brand"],["src","./icons/icon.svg","alt","","width","34","height","34"],[1,"badge"],["aria-label","Sections",1,"tabs"],["routerLinkActive","is-active",1,"tab",3,"routerLink","title"],[1,"workspace"],[1,"topbar"],["id","sync-state"],["type","button"],["type","button",3,"click"]],template:function(t,r){if(t&1&&(u(0,"div",0)(1,"aside",1)(2,"div",2),oe(3,"img",3),u(4,"div")(5,"strong"),c(6,"Soap Suite"),p(),u(7,"span"),c(8),p(),u(9,"span",4),c(10),p()()(),u(11,"nav",5),be(12,sl,2,3,"a",6,al),p()(),u(14,"main",7)(15,"header",8)(16,"div")(17,"h1"),c(18,"Red Mountain Soap Suite"),p(),u(19,"p",9),c(20),p(),qe(21,nl,2,0,"button",10)(22,ol,2,0,"button",10),p()(),oe(23,"router-outlet"),p()()),t&2){let a;y(8),q(((a=r.workspace.workspace())==null?null:a.name)||"Workspace"),y(2),q(r.workspace.provider.label),y(2),ye(r.navItems),y(7),Ti("warning",r.workspace.statusIsError()),y(),Pe(" ",r.workspace.statusMessage()," "),y(),Le(r.workspace.retryRequest()?21:!r.workspace.workspace()&&r.workspace.statusIsError()&&r.workspace.provider.mode!=="invalid"?22:-1)}},dependencies:[yt,Di,Ii],encapsulation:2})}}});var ll=Mn(()=>{Pn();$n();Cn();Ri(Mr,En).catch(i=>console.error(i))});export default ll();
