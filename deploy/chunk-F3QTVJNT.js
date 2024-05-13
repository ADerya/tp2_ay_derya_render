import{$ as _t,A as E,Aa as Et,B as x,E as W,F as J,H as ht,I as gt,Ia as It,N as St,Oa as N,P as I,Q as yt,S as F,Sb as Mt,T as mt,X as l,Y as P,aa as g,ba as a,ca as vt,g as Y,ga as R,j as M,k as ft,l as pt,la as Q,m as Z,n as _,o as z,p as v,pa as Ot,q as D,r as K,t as T,v as w,wa as tt,xb as At,z as q}from"./chunk-HHE3TX7T.js";var C=(()=>{class t{constructor(){this.bootstrap$=new pt(1)}get appBootstrapped$(){return this.bootstrap$.asObservable()}bootstrap(){this.bootstrap$.next(!0),this.bootstrap$.complete()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function se(t,r){return t===r}function ae(t,r,e){if(r===null||e===null||r.length!==e.length)return!1;let n=r.length;for(let o=0;o<n;o++)if(!t(r[o],e[o]))return!1;return!0}function k(t,r=se){let e=null,n=null;function o(){return ae(r,e,arguments)||(n=t.apply(null,arguments)),e=arguments,n}return o.reset=function(){e=null,n=null},o}var ce=(()=>{class t{static set(e){this._value=e}static pop(){let e=this._value;return this._value={},e}}return t._value={},t})(),et=new g("INITIAL_STATE_TOKEN",{providedIn:"root",factory:()=>ce.pop()}),jt=new g("\u0275NGXS_STATE_FACTORY"),bt=new g("\u0275NGXS_STATE_CONTEXT_FACTORY");function Dt(t){return typeof t=="function"}function G(t){return t.constructor&&t.constructor.type?t.constructor.type:t.type}var Ft=(t,r,e)=>{t=Object.assign({},t);let n=r.split("."),o=n.length-1;return n.reduce((i,s,c)=>(c===o?i[s]=e:i[s]=Array.isArray(i[s])?i[s].slice():Object.assign({},i[s]),i&&i[s]),t),t},ut=(t,r)=>r.split(".").reduce((e,n)=>e&&e[n],t),nt=t=>t&&typeof t=="object"&&!Array.isArray(t),rt=(t,...r)=>{if(!r.length)return t;let e=r.shift();if(nt(t)&&nt(e))for(let n in e)nt(e[n])?(t[n]||Object.assign(t,{[n]:{}}),rt(t[n],e[n])):Object.assign(t,{[n]:e[n]});return rt(t,...r)};function le(t,r,e){throw new Error(`State name '${t}' from ${r} already exists in ${e}.`)}function de(t){throw new Error(`States must be decorated with @State() decorator, but "${t}" isn't.`)}function fe(t){return`'${t}' class should be decorated with @Injectable() right after the @State() decorator`}function pe(){throw new Error("You have forgotten to import the NGXS module!")}var Pt=(()=>{class t{constructor(e,n){this._ngZone=e,this._platformId=n}enter(e){return Mt(this._platformId)?this.runInsideAngular(e):this.runOutsideAngular(e)}leave(e){return this.runInsideAngular(e)}runInsideAngular(e){return N.isInAngularZone()?e():this._ngZone.run(e)}runOutsideAngular(e){return N.isInAngularZone()?this._ngZone.runOutsideAngular(e):e()}}return t.\u0275fac=function(e){return new(e||t)(a(N),a(Et))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var Rt=new g("ROOT_OPTIONS"),Ct=new g("ROOT_STATE_TOKEN"),kt=new g("FEATURE_STATE_TOKEN"),he=new g("NGXS_PLUGINS"),S="NGXS_META",Bt="NGXS_OPTIONS_META",ot="NGXS_SELECTOR_META",U=(()=>{class t{constructor(){this.defaultsState={},this.selectorOptions={injectContainerState:!0,suppressErrors:!0},this.compatibility={strictContentSecurityPolicy:!1},this.executionStrategy=Pt}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=l({token:t,factory:function(e){let n=null;return e?n=new e:n=(o=>rt(new t,o))(a(Rt)),n},providedIn:"root"}),t})(),it=class{constructor(r,e,n){this.previousValue=r,this.currentValue=e,this.firstChange=n}},ge=(()=>{class t{enter(e){return e()}leave(e){return e()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),$t=new g("USER_PROVIDED_NGXS_EXECUTION_STRATEGY"),Se=new g("NGXS_EXECUTION_STRATEGY",{providedIn:"root",factory:()=>{let t=vt(Ot),r=t.get($t);return r?t.get(r):t.get(typeof _t.Zone<"u"?Pt:ge)}});function Vt(t){if(!t.hasOwnProperty(S)){let r={name:null,actions:{},defaults:{},path:null,makeRootSelector(e){return e.getStateGetter(r.name)},children:[]};Object.defineProperty(t,S,{value:r})}return j(t)}function j(t){return t[S]}function ye(t){return t.hasOwnProperty(ot)||Object.defineProperty(t,ot,{value:{makeRootSelector:null,originalFn:null,containerClass:null,selectorName:null,getSelectorOptions:()=>({})}}),Gt(t)}function Gt(t){return t[ot]}function me(t){let r=t.slice();return e=>r.reduce((n,o)=>n&&n[o],e)}function _e(t){let r=t,e="store."+r[0],n=0,o=r.length,i=e;for(;++n<o;)i=i+" && "+(e=e+"."+r[n]);return new Function("store","return "+i+";")}function Ut(t,r){return r&&r.compatibility&&r.compatibility.strictContentSecurityPolicy?me(t):_e(t)}function ve(t){let r=e=>t.find(o=>o===e)[S].name;return t.reduce((e,n)=>{let{name:o,children:i}=n[S];return e[o]=(i||[]).map(r),e},{})}function Oe(t){return t.reduce((r,e)=>{let n=e[S];return r[n.name]=e,r},{})}function Ee(t,r={}){let e=(n,o)=>{for(let i in n)if(n.hasOwnProperty(i)&&n[i].indexOf(o)>=0){let s=e(n,i);return s!==null?`${s}.${i}`:i}return null};for(let n in t)if(t.hasOwnProperty(n)){let o=e(t,n);r[n]=o?`${o}.${n}`:n}return r}function Ie(t){let r=[],e={},n=(o,i=[])=>{Array.isArray(i)||(i=[]),i.push(o),e[o]=!0,t[o].forEach(s=>{e[s]||n(s,i.slice(0))}),r.indexOf(o)<0&&r.push(o)};return Object.keys(t).forEach(o=>n(o)),r.reverse()}function Ae(t){return typeof t=="object"&&t!==null||typeof t=="function"}function Me(...t){return Ne(t,["DISPATCHED"])}function Ne(t,r,e=be){let n=De(t),o=r&&Te(r);return function(i){return i.pipe(je(n,o),e())}}function je(t,r){return E(e=>{let n=G(e.action),o=t[n],i=r?r[e.status]:!0;return o&&i})}function be(){return T(t=>t.action)}function De(t){return t.reduce((r,e)=>(r[G(e)]=!0,r),{})}function Te(t){return t.reduce((r,e)=>(r[e]=!0,r),{})}function $(t){return r=>new Y(e=>r.subscribe({next(n){t.leave(()=>e.next(n))},error(n){t.leave(()=>e.error(n))},complete(){t.leave(()=>e.complete())}}))}var Lt=(()=>{class t{constructor(e){this._executionStrategy=e}enter(e){return this._executionStrategy.enter(e)}leave(e){return this._executionStrategy.leave(e)}}return t.\u0275fac=function(e){return new(e||t)(a(Se))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function Xt(t){let r=[],e=!1;return function(...o){if(e){r.unshift(o);return}for(e=!0,t(...o);r.length>0;){let i=r.pop();i&&t(...i)}e=!1}}var st=class extends M{constructor(){super(...arguments),this._orderedNext=Xt(r=>super.next(r))}next(r){this._orderedNext(r)}},at=class extends ft{constructor(r){super(r),this._orderedNext=Xt(e=>super.next(e)),this._currentValue=r}getValue(){return this._currentValue}next(r){this._currentValue=r,this._orderedNext(r)}},Ht=(()=>{class t extends st{ngOnDestroy(){this.complete()}}return t.\u0275fac=(()=>{let r;return function(n){return(r||(r=Q(t)))(n||t)}})(),t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var Yt=t=>(...r)=>t.shift()(...r,(...n)=>Yt(t)(...n));function we(t,r){return e=>{let n=!1;return e.subscribe({error:o=>{r.enter(()=>Promise.resolve().then(()=>{n||r.leave(()=>t.reportErrorSafely(o))}))}}),new Y(o=>(n=!0,e.pipe($(r)).subscribe(o)))}}var Zt=(()=>{class t{constructor(e){this._injector=e,this._errorHandler=null}reportErrorSafely(e){this._errorHandler===null&&(this._errorHandler=this._injector.get(It));try{this._errorHandler.handleError(e)}catch{}}}return t.\u0275fac=function(e){return new(e||t)(a(tt))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),lt=(()=>{class t extends at{constructor(){super({})}ngOnDestroy(){this.complete()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),ct=(()=>{class t{constructor(e,n){this._parentManager=e,this._pluginHandlers=n,this.plugins=[],this.registerHandlers()}get rootPlugins(){return this._parentManager&&this._parentManager.plugins||this.plugins}registerHandlers(){let e=this.getPluginHandlers();this.rootPlugins.push(...e)}getPluginHandlers(){return(this._pluginHandlers||[]).map(n=>n.handle?n.handle.bind(n):n)}}return t.\u0275fac=function(e){return new(e||t)(a(t,12),a(he,8))},t.\u0275prov=l({token:t,factory:t.\u0275fac}),t})(),zt=(()=>{class t extends M{}return t.\u0275fac=(()=>{let r;return function(n){return(r||(r=Q(t)))(n||t)}})(),t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),xe=(()=>{class t{constructor(e,n,o,i,s,c){this._actions=e,this._actionResults=n,this._pluginManager=o,this._stateStream=i,this._ngxsExecutionStrategy=s,this._internalErrorReporter=c}dispatch(e){return this._ngxsExecutionStrategy.enter(()=>this.dispatchByEvents(e)).pipe(we(this._internalErrorReporter,this._ngxsExecutionStrategy))}dispatchByEvents(e){return Array.isArray(e)?e.length===0?v(this._stateStream.getValue()):q(e.map(n=>this.dispatchSingle(n))):this.dispatchSingle(e)}dispatchSingle(e){let n=this._stateStream.getValue(),o=this._pluginManager.plugins;return Yt([...o,(i,s)=>{i!==n&&this._stateStream.next(i);let c=this.getActionResultStream(s);return c.subscribe(u=>this._actions.next(u)),this._actions.next({action:s,status:"DISPATCHED"}),this.createDispatchObservable(c)}])(n,e).pipe(I())}getActionResultStream(e){return this._actionResults.pipe(E(n=>n.action===e&&n.status!=="DISPATCHED"),J(1),I())}createDispatchObservable(e){return e.pipe(gt(n=>{switch(n.status){case"SUCCESSFUL":return v(this._stateStream.getValue());case"ERRORED":return D(n.error);default:return Z}})).pipe(I())}}return t.\u0275fac=function(e){return new(e||t)(a(Ht),a(zt),a(ct),a(lt),a(Lt),a(Zt))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=(()=>{class t{constructor(e,n,o){this._stateStream=e,this._dispatcher=n,this._config=o}getRootStateOperations(){return{getState:()=>this._stateStream.getValue(),setState:n=>this._stateStream.next(n),dispatch:n=>this._dispatcher.dispatch(n)}}setStateToTheCurrentWithNew(e){let n=this.getRootStateOperations(),o=n.getState();n.setState(Object.assign(Object.assign({},o),e.defaults))}}return t.\u0275fac=function(e){return new(e||t)(a(lt),a(xe),a(U))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function Fe(t){return r=>{let e=Object.assign({},r);for(let n in t)e[n]=t[n];return e}}var dt=(()=>{class t{constructor(e){this._internalStateOperations=e}createStateContext(e){let n=this._internalStateOperations.getRootStateOperations();return{getState(){let o=n.getState();return qt(o,e.path)},patchState(o){let i=n.getState(),s=Fe(o);return Tt(n,i,s,e.path)},setState(o){let i=n.getState();return Dt(o)?Tt(n,i,o,e.path):Kt(n,i,o,e.path)},dispatch(o){return n.dispatch(o)}}}}return t.\u0275fac=function(e){return new(e||t)(a(b))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function Kt(t,r,e,n){let o=Ft(r,n,e);return t.setState(o),o}function Tt(t,r,e,n){let o=qt(r,n),i=e(o);return Kt(t,r,i,n)}function qt(t,r){return ut(t,r)}var _n=new RegExp("^[a-zA-Z0-9_]+$");function Pe(t,r,e){let n=e[t];n&&n!==r&&le(t,r.name,n.name)}function Re(t){t.forEach(r=>{j(r)||de(r.name)})}function Ce(t){Be(t)||ke(t)||console.warn(fe(t.name))}function ke(t){return!!t.\u0275prov}function Be(t){return(t.__annotations__||[]).some(e=>e?.ngMetadataName==="Injectable")}var Wt=(()=>{class t{}return t.type="@@INIT",t})(),Jt=(()=>{class t{constructor(e){this.addedStates=e}}return t.type="@@UPDATE_STATE",t})(),$e=new g("NGXS_DEVELOPMENT_OPTIONS",{providedIn:"root",factory:()=>({warnOnUnhandledActions:!0})}),Ve=(()=>{class t{constructor(e){this._ignoredActions=new Set([Wt.type,Jt.type]),typeof e.warnOnUnhandledActions=="object"&&this.ignoreActions(...e.warnOnUnhandledActions.ignore)}ignoreActions(...e){for(let n of e)this._ignoredActions.add(n.type)}warn(e){Array.from(this._ignoredActions).some(o=>o===G(e))||(e=e.constructor&&e.constructor.name!=="Object"?e.constructor.name:e.type,console.warn(`The ${e} action has been dispatched but hasn't been handled. This may happen if the state with an action handler for this action is not registered.`))}}return t.\u0275fac=function(e){return new(e||t)(a($e))},t.\u0275prov=l({token:t,factory:t.\u0275fac}),t})(),B=!1,A=(()=>{class t{constructor(e,n,o,i,s,c,u){this._injector=e,this._config=n,this._parentFactory=o,this._actions=i,this._actionResults=s,this._stateContextFactory=c,this._initialState=u,this._actionsSubscription=null,this._states=[],this._statesByName={},this._statePaths={},this.getRuntimeSelectorContext=k(()=>{let f=this;function m(p){let h=f.statePaths[p];return h?Ut(h.split("."),f._config):null}return this._parentFactory?this._parentFactory.getRuntimeSelectorContext():{getStateGetter(p){let h=m(p);return h||((...ie)=>(h||(h=m(p)),h?h(...ie):void 0))},getSelectorOptions(p){let h=f._config.selectorOptions;return Object.assign(Object.assign({},h),p||{})}}})}get states(){return this._parentFactory?this._parentFactory.states:this._states}get statesByName(){return this._parentFactory?this._parentFactory.statesByName:this._statesByName}get statePaths(){return this._parentFactory?this._parentFactory.statePaths:this._statePaths}static _cloneDefaults(e){let n=e;return Array.isArray(e)?n=e.slice():Ae(e)?n=Object.assign({},e):e===void 0&&(n={}),n}ngOnDestroy(){var e;(e=this._actionsSubscription)===null||e===void 0||e.unsubscribe()}add(e){B&&Re(e);let{newStates:n}=this.addToStatesMap(e);if(!n.length)return[];let o=ve(n),i=Ie(o),s=Ee(o),c=Oe(n),u=[];for(let f of i){let m=c[f],d=s[f],p=m[S];this.addRuntimeInfoToMeta(p,d),B&&Ce(m);let h={name:f,path:d,isInitialised:!1,actions:p.actions,instance:this._injector.get(m),defaults:t._cloneDefaults(p.defaults)};this.hasBeenMountedAndBootstrapped(f,d)||u.push(h),this.states.push(h)}return u}addAndReturnDefaults(e){let n=e||[],o=this.add(n);return{defaults:o.reduce((s,c)=>Ft(s,c.path,c.defaults),{}),states:o}}connectActionHandlers(){if(this._parentFactory||this._actionsSubscription!==null)return;let e=new M;this._actionsSubscription=this._actions.pipe(E(n=>n.status==="DISPATCHED"),w(n=>{e.next(n);let o=n.action;return this.invokeActions(e,o).pipe(T(()=>({action:o,status:"SUCCESSFUL"})),W({action:o,status:"CANCELED"}),x(i=>v({action:o,status:"ERRORED",error:i})))})).subscribe(n=>this._actionResults.next(n))}invokeActions(e,n){let o=G(n),i=[],s=!1;for(let c of this.states){let u=c.actions[o];if(u)for(let f of u){let m=this._stateContextFactory.createStateContext(c);try{let d=c.instance[f.fn](m,n);d instanceof Promise&&(d=z(d)),K(d)?(d=d.pipe(w(p=>p instanceof Promise?z(p):K(p)?p:v(p)),W({})),f.options.cancelUncompleted&&(d=d.pipe(F(e.pipe(Me(n)))))):d=v({}).pipe(I()),i.push(d)}catch(d){i.push(D(d))}s=!0}}if(B&&!s){let c=this._injector.get(Ve,null);c&&c.warn(n)}return i.length||i.push(v({})),q(i)}addToStatesMap(e){let n=[],o=this.statesByName;for(let i of e){let s=j(i).name;B&&Pe(s,i,o),!o[s]&&(n.push(i),o[s]=i)}return{newStates:n}}addRuntimeInfoToMeta(e,n){this.statePaths[e.name]=n,e.path=n}hasBeenMountedAndBootstrapped(e,n){let o=ut(this._initialState,n)!==void 0;return this.statesByName[e]&&o}}return t.\u0275fac=function(e){return new(e||t)(a(tt),a(U),a(t,12),a(Ht),a(zt),a(dt),a(et,8))},t.\u0275prov=l({token:t,factory:t.\u0275fac}),t})();function Ge(t,r,e){return n=>{let{argumentSelectorFunctions:o,selectorOptions:i}=Le(n,t,r);return function(c){let u=o.map(f=>f(c));try{return e(...u)}catch(f){if(f instanceof TypeError&&i.suppressErrors)return;throw f}}}}function Ue(t,r){let e=r&&r.containerClass,o=k(function(...s){let c=t.apply(e,s);return c instanceof Function?k.apply(null,[c]):c});return Object.setPrototypeOf(o,t),o}function Le(t,r,e=[]){let n=r.getSelectorOptions(),o=t.getSelectorOptions(n),s=Xe(e,o,r.containerClass).map(c=>Qt(c)(t));return{selectorOptions:o,argumentSelectorFunctions:s}}function Xe(t=[],r,e){let n=[],o=t.length===0||r.injectContainerState;return e&&o&&j(e)&&n.push(e),t&&n.push(...t),n}function Qt(t){let r=Gt(t)||j(t);return r&&r.makeRootSelector||(()=>t)}var L=(()=>{class t{constructor(e,n,o,i,s,c){this._stateStream=e,this._internalStateOperations=n,this._config=o,this._internalExecutionStrategy=i,this._stateFactory=s,this._selectableStateStream=this._stateStream.pipe($(this._internalExecutionStrategy),I({bufferSize:1,refCount:!0})),this.initStateStream(c)}dispatch(e){return this._internalStateOperations.getRootStateOperations().dispatch(e)}select(e){let n=this.getStoreBoundSelectorFn(e);return this._selectableStateStream.pipe(T(n),x(o=>{let{suppressErrors:i}=this._config.selectorOptions;return o instanceof TypeError&&i?v(void 0):D(o)}),ht(),$(this._internalExecutionStrategy))}selectOnce(e){return this.select(e).pipe(J(1))}selectSnapshot(e){return this.getStoreBoundSelectorFn(e)(this._stateStream.getValue())}subscribe(e){return this._selectableStateStream.pipe($(this._internalExecutionStrategy)).subscribe(e)}snapshot(){return this._internalStateOperations.getRootStateOperations().getState()}reset(e){return this._internalStateOperations.getRootStateOperations().setState(e)}getStoreBoundSelectorFn(e){let n=Qt(e),o=this._stateFactory.getRuntimeSelectorContext();return n(o)}initStateStream(e){let n=this._stateStream.value;if(!n||Object.keys(n).length===0){let s=Object.keys(this._config.defaultsState).length>0?Object.assign(Object.assign({},this._config.defaultsState),e):e;this._stateStream.next(s)}}}return t.\u0275fac=function(e){return new(e||t)(a(lt),a(b),a(U),a(Lt),a(A),a(et,8))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),V=(()=>{class t{constructor(e,n){t.store=e,t.config=n}ngOnDestroy(){t.store=null,t.config=null}}return t.store=null,t.config=null,t.\u0275fac=function(e){return new(e||t)(a(L),a(U))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),te=(()=>{class t{constructor(e,n,o,i,s){this._store=e,this._internalErrorReporter=n,this._internalStateOperations=o,this._stateContextFactory=i,this._bootstrapper=s,this._destroy$=new M}ngOnDestroy(){this._destroy$.next()}ngxsBootstrap(e,n){this._internalStateOperations.getRootStateOperations().dispatch(e).pipe(E(()=>!!n),mt(()=>this._invokeInitOnStates(n.states)),w(()=>this._bootstrapper.appBootstrapped$),E(o=>!!o),x(o=>(this._internalErrorReporter.reportErrorSafely(o),Z)),F(this._destroy$)).subscribe(()=>this._invokeBootstrapOnStates(n.states))}_invokeInitOnStates(e){for(let n of e){let o=n.instance;o.ngxsOnChanges&&this._store.select(i=>ut(i,n.path)).pipe(yt(void 0),St(),F(this._destroy$)).subscribe(([i,s])=>{let c=new it(i,s,!n.isInitialised);o.ngxsOnChanges(c)}),o.ngxsOnInit&&o.ngxsOnInit(this._getStateContext(n)),n.isInitialised=!0}}_invokeBootstrapOnStates(e){for(let n of e){let o=n.instance;o.ngxsAfterBootstrap&&o.ngxsAfterBootstrap(this._getStateContext(n))}}_getStateContext(e){return this._stateContextFactory.createStateContext(e)}}return t.\u0275fac=function(e){return new(e||t)(a(L),a(Zt),a(b),a(dt),a(C))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),He=(()=>{class t{constructor(e,n,o,i,s=[],c){let u=e.addAndReturnDefaults(s);n.setStateToTheCurrentWithNew(u),e.connectActionHandlers(),c.ngxsBootstrap(new Wt,u)}}return t.\u0275fac=function(e){return new(e||t)(a(A),a(b),a(L),a(V),a(Ct,8),a(te))},t.\u0275mod=R({type:t}),t.\u0275inj=P({}),t})(),Ye=(()=>{class t{constructor(e,n,o,i=[],s){let c=t.flattenStates(i),u=o.addAndReturnDefaults(c);u.states.length&&(n.setStateToTheCurrentWithNew(u),s.ngxsBootstrap(new Jt(u.defaults),u))}static flattenStates(e=[]){return e.reduce((n,o)=>n.concat(o),[])}}return t.\u0275fac=function(e){return new(e||t)(a(L),a(b),a(A),a(kt,8),a(te))},t.\u0275mod=R({type:t}),t.\u0275inj=P({}),t})(),vn=(()=>{class t{static forRoot(e=[],n={}){return{ngModule:He,providers:[A,ct,...e,...t.ngxsTokenProviders(e,n)]}}static forFeature(e=[]){return{ngModule:Ye,providers:[A,ct,...e,{provide:kt,multi:!0,useValue:e}]}}static ngxsTokenProviders(e,n){return[{provide:$t,useValue:n.executionStrategy},{provide:Ct,useValue:e},{provide:Rt,useValue:n},{provide:At,useFactory:t.appBootstrapListenerFactory,multi:!0,deps:[C]},{provide:bt,useExisting:dt},{provide:jt,useExisting:A}]}static appBootstrapListenerFactory(e){return()=>e.bootstrap()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=R({type:t}),t.\u0275inj=P({}),t})();function X(t,r){return(e,n)=>{let o=Vt(e.constructor);Array.isArray(t)||(t=[t]);for(let i of t){let s=i.type;o.actions[s]||(o.actions[s]=[]),o.actions[s].push({fn:n,options:r||{},type:s})}}}function ee(t){return r=>{let e=r,n=Vt(e),o=Object.getPrototypeOf(e),i=Ze(o,t);ze({meta:n,inheritedStateClass:o,optionsWithInheritance:i}),e[Bt]=i}}function Ze(t,r){let e=t[Bt]||{};return Object.assign(Object.assign({},e),r)}function ze(t){let{meta:r,inheritedStateClass:e,optionsWithInheritance:n}=t,{children:o,defaults:i,name:s}=n,c=typeof s=="string"?s:s&&s.getName()||null;if(e.hasOwnProperty(S)){let u=e[S]||{};r.actions=Object.assign(Object.assign({},r.actions),u.actions)}r.children=o,r.defaults=i,r.name=c}var Ke=36;function qe(t){return V.store||pe(),V.store.select(t)}function We(t,r,e=[]){if(r=r||Je(t),typeof r=="string"){let n=e.length?[r,...e]:r.split(".");return Ut(n,V.config)}return r}function Je(t){let r=t.length-1;return t.charCodeAt(r)===Ke?t.slice(0,r):t}function On(t,...r){return function(e,n){let o=n.toString(),i=`__${o}__selector`,s=We(o,t,r);Object.defineProperties(e,{[i]:{writable:!0,enumerable:!1,configurable:!0},[o]:{enumerable:!0,configurable:!0,get(){return this[i]||(this[i]=qe(s))}}})}}var wt="NGXS_SELECTOR_OPTIONS_META",xt={getOptions:t=>t&&t[wt]||{},defineOptions:(t,r)=>{t&&(t[wt]=r)}};function Qe(t,r){let e=ye(t);e.originalFn=t;let n=()=>({});r&&(e.containerClass=r.containerClass,e.selectorName=r.selectorName||null,n=r.getSelectorOptions||n);let o=Object.assign({},e);return e.getSelectorOptions=()=>tn(o,n()),e}function tn(t,r){return Object.assign(Object.assign(Object.assign(Object.assign({},xt.getOptions(t.containerClass)||{}),xt.getOptions(t.originalFn)||{}),t.getSelectorOptions()||{}),r)}function en(t,r,e){let n=Ue(r,e),o=Qe(r,e);return o.makeRootSelector=Ge(o,t,n),n}function H(t){return(r,e,n)=>{n||(n=Object.getOwnPropertyDescriptor(r,e));let o=n?.value,i=en(t,o,{containerClass:r,selectorName:e.toString(),getSelectorOptions(){return{}}}),s={configurable:!0,get(){return i}};return s.originalFn=o,s}}var ne=(()=>{let r=class r{constructor(n){this.product=n}};r.type="[Panier] Ajouter produit";let t=r;return t})(),re=(()=>{let r=class r{constructor(n){this.id=n}};r.type="[Panier] Supprimer produit";let t=r;return t})(),oe=(()=>{let r=class r{};r.type="[Panier] Clear";let t=r;return t})();var y,O=(y=class{static getProduitPanier(r){return r.produits}static prixTotalPanier(r){return r.produits.reduce((e,n)=>e+n.product.price*n.quantite,0)}static nombreProduitDansPanier(r){return r.produits.length}ajouterProduit(r,e){let n=r.getState(),o={product:e.product,quantite:1};r.patchState({produits:[...n.produits,o]})}supprimerProduit(r,e){let n=r.getState(),o=n.produits.find(i=>i.product.id===e.id)?.product;r.patchState({produits:n.produits.filter(i=>i.product.id!==e.id)})}clearBasket(r){r.setState({produits:[]})}},y.\u0275fac=function(e){return new(e||y)},y.\u0275prov=l({token:y,factory:y.\u0275fac}),y);_([X(ne)],O.prototype,"ajouterProduit",null);_([X(re)],O.prototype,"supprimerProduit",null);_([X(oe)],O.prototype,"clearBasket",null);_([H()],O,"getProduitPanier",null);_([H()],O,"prixTotalPanier",null);_([H()],O,"nombreProduitDansPanier",null);O=_([ee({name:"panier",defaults:{produits:[]}})],O);export{L as a,vn as b,On as c,ne as d,re as e,O as f};
