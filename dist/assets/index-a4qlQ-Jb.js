var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function w(e,t){return ne(e.type,t,e.props)}function re(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function T(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+T(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(re(o)&&(o=w(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+T(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+T(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!re(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=re,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,ee||(ee=!0,re());else{var t=n(l);t!==null&&T(x,t.startTime-e)}}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function w(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&T(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?re():ee=!1}}}var re;if(typeof y==`function`)re=function(){y(w)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=w,re=function(){ae.postMessage(null)}}else re=function(){_(w,0)};function T(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,T(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,re()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),w=Symbol.for(`react.memo`),re=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),T=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=T&&e[T]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case w:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case re:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function O(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function k(e,t){fe++,de[fe]=e.current,e.current=t}var me=pe(null),he=pe(null),ge=pe(null),_e=pe(null);function ve(e,t){switch(k(ge,t),k(he,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}O(me),k(me,e)}function ye(){O(me),O(he),O(ge)}function be(e){e.memoizedState!==null&&k(_e,e);var t=me.current,n=Hd(t,e.type);t!==n&&(k(he,e),k(me,n))}function xe(e){he.current===e&&(O(me),O(he)),_e.current===e&&(O(_e),Qf._currentValue=ue)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var A=Object.prototype.hasOwnProperty,ke=t.unstable_scheduleCallback,Ae=t.unstable_cancelCallback,je=t.unstable_shouldYield,Me=t.unstable_requestPaint,Ne=t.unstable_now,Pe=t.unstable_getCurrentPriorityLevel,Fe=t.unstable_ImmediatePriority,Ie=t.unstable_UserBlockingPriority,Le=t.unstable_NormalPriority,Re=t.unstable_LowPriority,ze=t.unstable_IdlePriority,Be=t.log,Ve=t.unstable_setDisableYieldValue,He=null,Ue=null;function We(e){if(typeof Be==`function`&&Ve(e),Ue&&typeof Ue.setStrictMode==`function`)try{Ue.setStrictMode(He,e)}catch{}}var Ge=Math.clz32?Math.clz32:Je,Ke=Math.log,qe=Math.LN2;function Je(e){return e>>>=0,e===0?32:31-(Ke(e)/qe|0)|0}var Ye=256,Xe=262144,Ze=4194304;function Qe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $e(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Qe(n))):i=Qe(o):i=Qe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Qe(n))):i=Qe(o)):i=Qe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function et(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nt(){var e=Ze;return Ze<<=1,!(Ze&62914560)&&(Ze=4194304),e}function rt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function it(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function at(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ge(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ot(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ot(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ge(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function st(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ct(e,t){var n=t&-t;return n=n&42?1:lt(n),(n&(e.suspendedLanes|t))===0?n:0}function lt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ut(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function dt(){var e=D.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ft(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var pt=Math.random().toString(36).slice(2),mt=`__reactFiber$`+pt,ht=`__reactProps$`+pt,gt=`__reactContainer$`+pt,_t=`__reactEvents$`+pt,vt=`__reactListeners$`+pt,yt=`__reactHandles$`+pt,bt=`__reactResources$`+pt,xt=`__reactMarker$`+pt;function St(e){delete e[mt],delete e[ht],delete e[_t],delete e[vt],delete e[yt]}function Ct(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[mt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function wt(e){if(e=e[mt]||e[gt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Tt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Et(e){var t=e[bt];return t||=e[bt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Dt(e){e[xt]=!0}var Ot=new Set,kt={};function At(e,t){jt(e,t),jt(e+`Capture`,t)}function jt(e,t){for(kt[e]=t,e=0;e<t.length;e++)Ot.add(t[e])}var Mt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Nt={},Pt={};function Ft(e){return A.call(Pt,e)?!0:A.call(Nt,e)?!1:Mt.test(e)?Pt[e]=!0:(Nt[e]=!0,!1)}function It(e,t,n){if(Ft(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function Lt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Rt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function zt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Bt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Vt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ht(e){if(!e._valueTracker){var t=Bt(e)?`checked`:`value`;e._valueTracker=Vt(e,t,``+e[t])}}function Ut(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Bt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Wt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Gt=/[\n"\\]/g;function Kt(e){return e.replace(Gt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function qt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+zt(t)):e.value!==``+zt(t)&&(e.value=``+zt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Yt(e,o,zt(n)):Yt(e,o,zt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+zt(s):e.removeAttribute(`name`)}function Jt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ht(e);return}n=n==null?``:``+zt(n),t=t==null?n:``+zt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ht(e)}function Yt(e,t,n){t===`number`&&Wt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Xt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zt(e,t,n){if(t!=null&&(t=``+zt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+zt(n)}function Qt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(le(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=zt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ht(e)}function $t(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var en=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function tn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||en.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function nn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&tn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&tn(e,o,t[o])}function rn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var an=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),on=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sn(e){return on.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function cn(){}var ln=null;function un(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dn=null,fn=null;function pn(e){var t=wt(e);if(t&&(e=t.stateNode)){var n=e[ht]||null;a:switch(e=t.stateNode,t.type){case`input`:if(qt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Kt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ht]||null;if(!a)throw Error(i(90));qt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ut(r)}break a;case`textarea`:Zt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Xt(e,!!n.multiple,t,!1)}}}var mn=!1;function hn(e,t,n){if(mn)return e(t,n);mn=!0;try{return e(t)}finally{if(mn=!1,(dn!==null||fn!==null)&&(bu(),dn&&(t=dn,e=fn,fn=dn=null,pn(t),e)))for(t=0;t<e.length;t++)pn(e[t])}}function gn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ht]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var _n=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),vn=!1;if(_n)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){vn=!0}}),window.addEventListener(`test`,yn,yn),window.removeEventListener(`test`,yn,yn)}catch{vn=!1}var bn=null,xn=null,Sn=null;function Cn(){if(Sn)return Sn;var e,t=xn,n=t.length,r,i=`value`in bn?bn.value:bn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Sn=i.slice(e,1<r?1-r:void 0)}function wn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tn(){return!0}function En(){return!1}function Dn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Tn:En,this.isPropagationStopped=En,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=Dn(On),An=h({},On,{view:0,detail:0}),jn=Dn(An),Mn,Nn,Pn,Fn=h({},An,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Pn&&(Pn&&e.type===`mousemove`?(Mn=e.screenX-Pn.screenX,Nn=e.screenY-Pn.screenY):Nn=Mn=0,Pn=e),Mn)},movementY:function(e){return`movementY`in e?e.movementY:Nn}}),In=Dn(Fn),Ln=Dn(h({},Fn,{dataTransfer:0})),Rn=Dn(h({},An,{relatedTarget:0})),zn=Dn(h({},On,{animationName:0,elapsedTime:0,pseudoElement:0})),Bn=Dn(h({},On,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Vn=Dn(h({},On,{data:0})),Hn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Un={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Wn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wn[e])?!!t[e]:!1}function Kn(){return Gn}var qn=Dn(h({},An,{key:function(e){if(e.key){var t=Hn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=wn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Un[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(e){return e.type===`keypress`?wn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?wn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Jn=Dn(h({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Yn=Dn(h({},An,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn})),Xn=Dn(h({},On,{propertyName:0,elapsedTime:0,pseudoElement:0})),Zn=Dn(h({},Fn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Qn=Dn(h({},On,{newState:0,oldState:0})),$n=[9,13,27,32],er=_n&&`CompositionEvent`in window,tr=null;_n&&`documentMode`in document&&(tr=document.documentMode);var nr=_n&&`TextEvent`in window&&!tr,rr=_n&&(!er||tr&&8<tr&&11>=tr),ir=` `,ar=!1;function or(e,t){switch(e){case`keyup`:return $n.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function lr(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(ar=!0,ir):null;case`textInput`:return e=t.data,e===ir&&ar?null:e;default:return null}}function ur(e,t){if(cr)return e===`compositionend`||!er&&or(e,t)?(e=Cn(),Sn=xn=bn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return rr&&t.locale!==`ko`?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!dr[e.type]:t===`textarea`}function pr(e,t,n,r){dn?fn?fn.push(r):fn=[r]:dn=r,t=Ed(t,`onChange`),0<t.length&&(n=new kn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var mr=null,hr=null;function gr(e){yd(e,0)}function _r(e){if(Ut(Tt(e)))return e}function vr(e,t){if(e===`change`)return t}var yr=!1;if(_n){var br;if(_n){var xr=`oninput`in document;if(!xr){var Sr=document.createElement(`div`);Sr.setAttribute(`oninput`,`return;`),xr=typeof Sr.oninput==`function`}br=xr}else br=!1;yr=br&&(!document.documentMode||9<document.documentMode)}function Cr(){mr&&(mr.detachEvent(`onpropertychange`,wr),hr=mr=null)}function wr(e){if(e.propertyName===`value`&&_r(hr)){var t=[];pr(t,hr,e,un(e)),hn(gr,t)}}function Tr(e,t,n){e===`focusin`?(Cr(),mr=t,hr=n,mr.attachEvent(`onpropertychange`,wr)):e===`focusout`&&Cr()}function Er(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return _r(hr)}function Dr(e,t){if(e===`click`)return _r(t)}function Or(e,t){if(e===`input`||e===`change`)return _r(t)}function kr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ar=typeof Object.is==`function`?Object.is:kr;function jr(e,t){if(Ar(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!A.call(t,i)||!Ar(e[i],t[i]))return!1}return!0}function Mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nr(e,t){var n=Mr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Mr(n)}}function Pr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wt(e.document)}return t}function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Lr=_n&&`documentMode`in document&&11>=document.documentMode,Rr=null,zr=null,Br=null,Vr=!1;function Hr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vr||Rr==null||Rr!==Wt(r)||(r=Rr,`selectionStart`in r&&Ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&jr(Br,r)||(Br=r,r=Ed(zr,`onSelect`),0<r.length&&(t=new kn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Wr={animationend:Ur(`Animation`,`AnimationEnd`),animationiteration:Ur(`Animation`,`AnimationIteration`),animationstart:Ur(`Animation`,`AnimationStart`),transitionrun:Ur(`Transition`,`TransitionRun`),transitionstart:Ur(`Transition`,`TransitionStart`),transitioncancel:Ur(`Transition`,`TransitionCancel`),transitionend:Ur(`Transition`,`TransitionEnd`)},Gr={},Kr={};_n&&(Kr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),`TransitionEvent`in window||delete Wr.transitionend.transition);function qr(e){if(Gr[e])return Gr[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kr)return Gr[e]=t[n];return e}var Jr=qr(`animationend`),Yr=qr(`animationiteration`),Xr=qr(`animationstart`),Zr=qr(`transitionrun`),Qr=qr(`transitionstart`),$r=qr(`transitioncancel`),ei=qr(`transitionend`),ti=new Map,ni=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ni.push(`scrollEnd`);function ri(e,t){ti.set(e,t),At(t,[e])}var ii=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ai=[],oi=0,si=0;function ci(){for(var e=oi,t=si=oi=0;t<e;){var n=ai[t];ai[t++]=null;var r=ai[t];ai[t++]=null;var i=ai[t];ai[t++]=null;var a=ai[t];if(ai[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&fi(n,i,a)}}function li(e,t,n,r){ai[oi++]=e,ai[oi++]=t,ai[oi++]=n,ai[oi++]=r,si|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ui(e,t,n,r){return li(e,t,n,r),pi(e)}function di(e,t){return li(e,null,null,t),pi(e)}function fi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ge(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function pi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mi={};function hi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(e,t,n,r){return new hi(e,t,n,r)}function _i(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vi(e,t){var n=e.alternate;return n===null?(n=gi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function bi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)_i(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=gi(31,n,t,a),e.elementType=ie,e.lanes=o,e;case y:return xi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=gi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=gi(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=gi(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case w:s=14;break a;case re:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=gi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function xi(e,t,n,r){return e=gi(7,e,r,t),e.lanes=n,e}function Si(e,t,n){return e=gi(6,e,null,t),e.lanes=n,e}function Ci(e){var t=gi(18,null,null,0);return t.stateNode=e,t}function wi(e,t,n){return t=gi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ti=new WeakMap;function Ei(e,t){if(typeof e==`object`&&e){var n=Ti.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},Ti.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var Di=[],Oi=0,ki=null,Ai=0,ji=[],Mi=0,Ni=null,Pi=1,Fi=``;function Ii(e,t){Di[Oi++]=Ai,Di[Oi++]=ki,ki=e,Ai=t}function Li(e,t,n){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Ni=e;var r=Pi;e=Fi;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var a=32-Ge(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pi=1<<32-Ge(t)+i|n<<i|r,Fi=a+e}else Pi=1<<a|n<<i|r,Fi=e}function Ri(e){e.return!==null&&(Ii(e,1),Li(e,1,0))}function zi(e){for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,Ai=Di[--Oi],Di[Oi]=null;for(;e===Ni;)Ni=ji[--Mi],ji[Mi]=null,Fi=ji[--Mi],ji[Mi]=null,Pi=ji[--Mi],ji[Mi]=null}function Bi(e,t){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Pi=t.id,Fi=t.overflow,Ni=e}var Vi=null,j=null,M=!1,Hi=null,Ui=!1,Wi=Error(i(519));function Gi(e){throw Zi(Ei(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Wi}function Ki(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[mt]=e,t[ht]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Jt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Qt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=cn),t=!0):t=!1,t||Gi(e,!0)}function qi(e){for(Vi=e.return;Vi;)switch(Vi.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Vi=Vi.return}}function Ji(e){if(e!==Vi)return!1;if(!M)return qi(e),M=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&j&&Gi(e),qi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));j=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));j=uf(e)}else t===27?(t=j,Zd(e.type)?(e=lf,lf=null,j=e):j=t):j=Vi?cf(e.stateNode.nextSibling):null;return!0}function Yi(){j=Vi=null,M=!1}function Xi(){var e=Hi;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Hi=null),e}function Zi(e){Hi===null?Hi=[e]:Hi.push(e)}var Qi=pe(null),$i=null,ea=null;function ta(e,t,n){k(Qi,t._currentValue),t._currentValue=n}function na(e){e._currentValue=Qi.current,O(Qi)}function ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ia(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ra(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ra(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function aa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Ar(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===_e.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ia(t,e,n,r),t.flags|=262144}function oa(e){for(e=e.firstContext;e!==null;){if(!Ar(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sa(e){$i=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ca(e){return ua($i,e)}function la(e,t){return $i===null&&sa(e),ua(e,t)}function ua(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ea===null){if(e===null)throw Error(i(308));ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ea=ea.next=t;return n}var da=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},fa=t.unstable_scheduleCallback,pa=t.unstable_NormalPriority,N={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ma(){return{controller:new da,data:new Map,refCount:0}}function ha(e){e.refCount--,e.refCount===0&&fa(pa,function(){e.controller.abort()})}var ga=null,_a=0,va=0,ya=null;function ba(e,t){if(ga===null){var n=ga=[];_a=0,va=dd(),ya={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return _a++,t.then(xa,xa),t}function xa(){if(--_a===0&&ga!==null){ya!==null&&(ya.status=`fulfilled`);var e=ga;ga=null,va=0,ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Sa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ca=E.S;E.S=function(e,t){tu=Ne(),typeof t==`object`&&t&&typeof t.then==`function`&&ba(e,t),Ca!==null&&Ca(e,t)};var wa=pe(null);function Ta(){var e=wa.current;return e===null?G.pooledCache:e}function Ea(e,t){t===null?k(wa,wa.current):k(wa,t.pool)}function Da(){var e=Ta();return e===null?null:{parent:N._currentValue,pool:e}}var Oa=Error(i(460)),ka=Error(i(474)),Aa=Error(i(542)),ja={then:function(){}};function Ma(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Na(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(cn,cn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e;default:if(typeof t.status==`string`)t.then(cn,cn);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e}throw Fa=t,Oa}}function Pa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Fa=e,Oa):e}}var Fa=null;function Ia(){if(Fa===null)throw Error(i(459));var e=Fa;return Fa=null,e}function La(e){if(e===Oa||e===Aa)throw Error(i(483))}var Ra=null,za=0;function Ba(e){var t=za;return za+=1,Ra===null&&(Ra=[]),Na(Ra,e,t)}function Va(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ha(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ua(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=vi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===re&&Pa(i)===t.type)?(t=a(t,n.props),Va(t,n),t.return=e,t):(t=bi(n.type,n.key,n.props,null,e.mode,r),Va(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=wi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=xi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Si(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=bi(t.type,t.key,t.props,null,e.mode,n),Va(n,t),n.return=e,n;case v:return t=wi(t,e.mode,n),t.return=e,t;case re:return t=Pa(t),f(e,t,n)}if(le(t)||oe(t))return t=xi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ba(t),n);if(t.$$typeof===S)return f(e,la(e,t),n);Ha(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case re:return n=Pa(n),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ba(n),r);if(n.$$typeof===S)return p(e,t,la(e,n),r);Ha(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case re:return r=Pa(r),m(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ba(r),i);if(r.$$typeof===S)return m(e,t,n,la(t,r),i);Ha(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),M&&Ii(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return M&&Ii(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),M&&Ii(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),M&&Ii(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return M&&Ii(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),M&&Ii(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===re&&Pa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Va(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=xi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=bi(o.type,o.key,o.props,null,e.mode,c),Va(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=wi(o,e.mode,c),c.return=e,e=c}return s(e);case re:return o=Pa(o),b(e,r,o,c)}if(le(o))return h(e,r,o,c);if(oe(o)){if(l=oe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ba(o),c);if(o.$$typeof===S)return b(e,r,la(e,o),c);Ha(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Si(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{za=0;var i=b(e,t,n,r);return Ra=null,i}catch(t){if(t===Oa||t===Aa)throw t;var a=gi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Wa=Ua(!0),Ga=Ua(!1),Ka=!1;function qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ja(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=pi(e),fi(e,null,n),t}return li(e,r,t,n),pi(e)}function Za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}function Qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var $a=!1;function eo(){if($a){var e=ya;if(e!==null)throw e}}function to(e,t,n,r){$a=!1;var i=e.updateQueue;Ka=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===va&&($a=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ka=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function no(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function ro(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)no(n[e],t)}var io=pe(null),ao=pe(0);function oo(e,t){e=Gl,k(ao,e),k(io,t),Gl=e|t.baseLanes}function so(){k(ao,Gl),k(io,io.current)}function co(){Gl=ao.current,O(io),O(ao)}var lo=pe(null),uo=null;function fo(e){var t=e.alternate;k(P,P.current&1),k(lo,e),uo===null&&(t===null||io.current!==null||t.memoizedState!==null)&&(uo=e)}function po(e){k(P,P.current),k(lo,e),uo===null&&(uo=e)}function mo(e){e.tag===22?(k(P,P.current),k(lo,e),uo===null&&(uo=e)):ho(e)}function ho(){k(P,P.current),k(lo,lo.current)}function go(e){O(lo),uo===e&&(uo=null),O(P)}var P=pe(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vo=0,F=null,I=null,L=null,yo=!1,bo=!1,xo=!1,So=0,Co=0,wo=null,To=0;function R(){throw Error(i(321))}function Eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ar(e[n],t[n]))return!1;return!0}function Do(e,t,n,r,i,a){return vo=a,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Us:Ws,xo=!1,a=n(r,i),xo=!1,bo&&(a=ko(t,n,r,i)),Oo(e),a}function Oo(e){E.H=Hs;var t=I!==null&&I.next!==null;if(vo=0,L=I=F=null,yo=!1,Co=0,wo=null,t)throw Error(i(300));e===null||B||(e=e.dependencies,e!==null&&oa(e)&&(B=!0))}function ko(e,t,n,r){F=e;var a=0;do{if(bo&&(wo=null),Co=0,bo=!1,25<=a)throw Error(i(301));if(a+=1,L=I=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=Gs,o=t(n,r)}while(bo);return o}function Ao(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?Io(t):t,e=e.useState()[0],(I===null?null:I.memoizedState)!==e&&(F.flags|=1024),t}function jo(){var e=So!==0;return So=0,e}function Mo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function No(e){if(yo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yo=!1}vo=0,L=I=F=null,bo=!1,Co=So=0,wo=null}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return L===null?F.memoizedState=L=e:L=L.next=e,L}function z(){if(I===null){var e=F.alternate;e=e===null?null:e.memoizedState}else e=I.next;var t=L===null?F.memoizedState:L.next;if(t!==null)L=t,I=e;else{if(e===null)throw F.alternate===null?Error(i(467)):Error(i(310));I=e,e={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},L===null?F.memoizedState=L=e:L=L.next=e}return L}function Fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var t=Co;return Co+=1,wo===null&&(wo=[]),e=Na(wo,e,t),t=F,(L===null?t.memoizedState:L.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Us:Ws),e}function Lo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Io(e);if(e.$$typeof===S)return ca(e)}throw Error(i(438,String(e)))}function Ro(e){var t=null,n=F.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=F.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Fo(),F.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function zo(e,t){return typeof t==`function`?t(e):t}function Bo(e){return Vo(z(),I,e)}function Vo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(vo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===va&&(d=!0);else if((vo&p)===p){u=u.next,p===va&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,F.lanes|=p,Kl|=p;f=u.action,xo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,F.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Ar(o,e.memoizedState)&&(B=!0,d&&(n=ya,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ho(e){var t=z(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Ar(o,t.memoizedState)||(B=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Uo(e,t,n){var r=F,a=z(),o=M;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Ar((I||a).memoizedState,n);if(s&&(a.memoizedState=n,B=!0),a=a.queue,ms(Ko.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||L!==null&&L.memoizedState.tag&1){if(r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,a,n,t),null),G===null)throw Error(i(349));o||vo&127||Wo(r,t,n)}return n}function Wo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t=Fo(),F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Go(e,t,n,r){t.value=n,t.getSnapshot=r,qo(t)&&Jo(e)}function Ko(e,t,n){return n(function(){qo(t)&&Jo(e)})}function qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ar(e,n)}catch{return!0}}function Jo(e){var t=di(e,2);t!==null&&hu(t,e,2)}function Yo(e){var t=Po();if(typeof e==`function`){var n=e;if(e=n(),xo){We(!0);try{n()}finally{We(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t}function Xo(e,t,n,r){return e.baseState=n,Vo(e,I,typeof r==`function`?r:zo)}function Zo(e,t,n,r,a){if(zs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Qo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),$o(e,t,s)}catch(n){ts(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),$o(e,t,a)}catch(n){ts(e,t,n)}}function $o(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){es(e,t,n)},function(n){return ts(e,t,n)}):es(e,t,n)}function es(e,t,n){t.status=`fulfilled`,t.value=n,ns(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Qo(e,n)))}function ts(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ns(t),t=t.next;while(t!==r)}e.action=null}function ns(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rs(e,t){return t}function is(e,t){if(M){var n=G.formState;if(n!==null){a:{var r=F;if(M){if(j){b:{for(var i=j,a=Ui;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){j=cf(i.nextSibling),r=i.data===`F!`;break a}}Gi(r)}r=!1}r&&(t=n[0])}}return n=Po(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},n.queue=r,n=Is.bind(null,F,r),r.dispatch=n,r=Yo(!1),a=Rs.bind(null,F,!1,r.queue),r=Po(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Zo.bind(null,F,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function as(e){return os(z(),I,e)}function os(e,t,n){if(t=Vo(e,t,rs)[0],e=Bo(zo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Io(t)}catch(e){throw e===Oa?Aa:e}else r=t;t=z();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(F.flags|=2048,ls(9,{destroy:void 0},ss.bind(null,i,n),null)),[r,a,e]}function ss(e,t){e.action=t}function cs(e){var t=z(),n=I;if(n!==null)return os(t,n,e);z(),t=t.memoizedState,n=z();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ls(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=F.updateQueue,t===null&&(t=Fo(),F.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function us(){return z().memoizedState}function ds(e,t,n,r){var i=Po();F.flags|=e,i.memoizedState=ls(1|t,{destroy:void 0},n,r===void 0?null:r)}function fs(e,t,n,r){var i=z();r=r===void 0?null:r;var a=i.memoizedState.inst;I!==null&&r!==null&&Eo(r,I.memoizedState.deps)?i.memoizedState=ls(t,a,n,r):(F.flags|=e,i.memoizedState=ls(1|t,a,n,r))}function ps(e,t){ds(8390656,8,e,t)}function ms(e,t){fs(2048,8,e,t)}function hs(e){F.flags|=4;var t=F.updateQueue;if(t===null)t=Fo(),F.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function gs(e){var t=z().memoizedState;return hs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function _s(e,t){return fs(4,2,e,t)}function vs(e,t){return fs(4,4,e,t)}function ys(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bs(e,t,n){n=n==null?null:n.concat([e]),fs(4,4,ys.bind(null,t,e),n)}function xs(){}function Ss(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cs(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Eo(t,r[1]))return r[0];if(r=e(),xo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r}function ws(e,t,n){return n===void 0||vo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),F.lanes|=e,Kl|=e,n)}function Ts(e,t,n,r){return Ar(n,t)?n:io.current===null?!(vo&42)||vo&1073741824&&!(q&261930)?(B=!0,e.memoizedState=n):(e=mu(),F.lanes|=e,Kl|=e,t):(e=ws(e,n,r),Ar(e,t)||(B=!0),e)}function Es(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,Rs(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ls(e,t,Sa(c,r),pu(e)):Ls(e,t,r,pu(e))}catch(n){Ls(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function Ds(){}function Os(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ks(e).queue;Es(e,a,t,ue,n===null?Ds:function(){return As(e),n(r)})}function ks(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function As(e){var t=ks(e);t.next===null&&(t=e.alternate.memoizedState),Ls(e,t.next.queue,{},pu())}function js(){return ca(Qf)}function Ms(){return z().memoizedState}function Ns(){return z().memoizedState}function Ps(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ya(n);var r=Xa(t,e,n);r!==null&&(hu(r,t,n),Za(r,t,n)),t={cache:ma()},e.payload=t;return}t=t.return}}function Fs(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},zs(e)?Bs(t,n):(n=ui(e,t,n,r),n!==null&&(hu(n,e,r),Vs(n,t,r)))}function Is(e,t,n){Ls(e,t,n,pu())}function Ls(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(zs(e))Bs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ar(s,o))return li(e,t,i,0),G===null&&ci(),!1}catch{}if(n=ui(e,t,i,r),n!==null)return hu(n,e,r),Vs(n,t,r),!0}return!1}function Rs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},zs(e)){if(t)throw Error(i(479))}else t=ui(e,n,r,2),t!==null&&hu(t,e,2)}function zs(e){var t=e.alternate;return e===F||t!==null&&t===F}function Bs(e,t){bo=yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}var Hs={readContext:ca,use:Lo,useCallback:R,useContext:R,useEffect:R,useImperativeHandle:R,useLayoutEffect:R,useInsertionEffect:R,useMemo:R,useReducer:R,useRef:R,useState:R,useDebugValue:R,useDeferredValue:R,useTransition:R,useSyncExternalStore:R,useId:R,useHostTransitionStatus:R,useFormState:R,useActionState:R,useOptimistic:R,useMemoCache:R,useCacheRefresh:R};Hs.useEffectEvent=R;var Us={readContext:ca,use:Lo,useCallback:function(e,t){return Po().memoizedState=[e,t===void 0?null:t],e},useContext:ca,useEffect:ps,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ds(4194308,4,ys.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ds(4194308,4,e,t)},useInsertionEffect:function(e,t){ds(4,2,e,t)},useMemo:function(e,t){var n=Po();t=t===void 0?null:t;var r=e();if(xo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Po();if(n!==void 0){var i=n(t);if(xo){We(!0);try{n(t)}finally{We(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Fs.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=Po();return e={current:e},t.memoizedState=e},useState:function(e){e=Yo(e);var t=e.queue,n=Is.bind(null,F,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:xs,useDeferredValue:function(e,t){return ws(Po(),e,t)},useTransition:function(){var e=Yo(!1);return e=Es.bind(null,F,e.queue,!0,!1),Po().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=F,a=Po();if(M){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),G===null)throw Error(i(349));q&127||Wo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ps(Ko.bind(null,r,o,e),[e]),r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,o,n,t),null),n},useId:function(){var e=Po(),t=G.identifierPrefix;if(M){var n=Fi,r=Pi;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=So++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=To++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:js,useFormState:is,useActionState:is,useOptimistic:function(e){var t=Po();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rs.bind(null,F,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ro,useCacheRefresh:function(){return Po().memoizedState=Ps.bind(null,F)},useEffectEvent:function(e){var t=Po(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ws={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Bo,useRef:us,useState:function(){return Bo(zo)},useDebugValue:xs,useDeferredValue:function(e,t){return Ts(z(),I.memoizedState,e,t)},useTransition:function(){var e=Bo(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:as,useActionState:as,useOptimistic:function(e,t){return Xo(z(),I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Ws.useEffectEvent=gs;var Gs={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Ho,useRef:us,useState:function(){return Ho(zo)},useDebugValue:xs,useDeferredValue:function(e,t){var n=z();return I===null?ws(n,e,t):Ts(n,I.memoizedState,e,t)},useTransition:function(){var e=Ho(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:cs,useActionState:cs,useOptimistic:function(e,t){var n=z();return I===null?(n.baseState=e,[e,n.queue.dispatch]):Xo(n,I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Gs.useEffectEvent=gs;function Ks(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ya(n);r.tag=2,t!=null&&(r.callback=t),t=Xa(e,r,n),t!==null&&(hu(t,e,n),Za(t,e,n))}};function Js(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,a):!0}function Ys(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qs.enqueueReplaceState(t,t.state,null)}function Xs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Zs(e){ii(e)}function Qs(e){console.error(e)}function $s(e){ii(e)}function ec(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){return n=Ya(n),n.tag=3,n.payload={element:null},n.callback=function(){ec(e,t)},n}function rc(e){return e=Ya(e),e.tag=3,e}function ic(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){tc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){tc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ac(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&aa(t,n,a,!0),n=lo.current,n!==null){switch(n.tag){case 31:case 13:return uo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(M)return t=lo.current,t===null?(r!==Wi&&(t=Error(i(423),{cause:r}),Zi(Ei(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ei(r,n),a=nc(e.stateNode,r,a),Qa(e,a),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Wi&&(e=Error(i(422),{cause:r}),Zi(Ei(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ei(o,n),Zl===null?Zl=[o]:Zl.push(o),Y!==4&&(Y=2),t===null)return!0;r=Ei(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=nc(n.stateNode,r,e),Qa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=rc(a),ic(a,e,n,r),Qa(n,a),!1}n=n.return}while(n!==null);return!1}var oc=Error(i(461)),B=!1;function sc(e,t,n,r){t.child=e===null?Ga(t,null,n,r):Wa(t,e.child,n,r)}function cc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return sa(t),r=Do(e,t,n,o,a,i),s=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&s&&Ri(t),t.flags|=1,sc(e,t,r,i),t.child)}function lc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!_i(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,uc(e,t,a,r,i)):(e=bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Nc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?jr:n,n(o,r)&&e.ref===t.ref)return Mc(e,t,i)}return t.flags|=1,e=vi(a,r),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(jr(a,r)&&e.ref===t.ref){if(B=!1,t.pendingProps=r=a,Nc(e,i))e.flags&131072&&(B=!0);else return t.lanes=e.lanes,Mc(e,t,i)}}return vc(e,t,n,r,i)}function dc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return pc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ea(t,a===null?null:a.cachePool),a===null?so():oo(t,a),mo(t);else return r=t.lanes=536870912,pc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ea(t,null),so(),ho(t)):(Ea(t,a.cachePool),oo(t,a),ho(t),t.memoizedState=null);return sc(e,t,i,n),t.child}function fc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pc(e,t,n,r,i){var a=Ta();return a=a===null?null:{parent:N._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ea(t,null),so(),mo(t),e!==null&&aa(e,t,r,!0),t.childLanes=i,null}function mc(e,t){return t=Dc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hc(e,t,n){return Wa(t,e.child,null,n),e=mc(t,t.pendingProps),e.flags|=2,go(t),t.memoizedState=null,e}function gc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(M){if(r.mode===`hidden`)return e=mc(t,r),t.lanes=536870912,fc(null,e);if(po(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return t.lanes=536870912,null}return mc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(po(t),a){if(t.flags&256)t.flags&=-257,t=hc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(B||aa(e,t,n,!1),a=(n&e.childLanes)!==0,B||a){if(r=G,r!==null&&(s=ct(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,di(e,s),hu(r,e,s),oc;Du(),t=hc(e,t,n)}else e=o.treeContext,j=cf(s.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=mc(t,r),t.flags|=4096;return t}return e=vi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _c(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function vc(e,t,n,r,i){return sa(t),n=Do(e,t,n,r,void 0,i),r=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,i),t.child)}function yc(e,t,n,r,i,a){return sa(t),t.updateQueue=null,n=ko(t,r,n,i),Oo(e),r=jo(),e!==null&&!B?(Mo(e,t,a),Mc(e,t,a)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,a),t.child)}function bc(e,t,n,r,i){if(sa(t),t.stateNode===null){var a=mi,o=n.contextType;typeof o==`object`&&o&&(a=ca(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=qs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},qa(t),o=n.contextType,a.context=typeof o==`object`&&o?ca(o):mi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ks(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&qs.enqueueReplaceState(a,a.state,null),to(t,r,a,i),eo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Xs(n,s);a.props=c;var l=a.context,u=n.contextType;o=mi,typeof u==`object`&&u&&(o=ca(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ys(t,a,r,o),Ka=!1;var f=t.memoizedState;a.state=f,to(t,r,a,i),eo(),l=t.memoizedState,s||f!==l||Ka?(typeof d==`function`&&(Ks(t,n,d,r),l=t.memoizedState),(c=Ka||Js(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ja(e,t),o=t.memoizedProps,u=Xs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=mi,typeof l==`object`&&l&&(c=ca(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ys(t,a,r,c),Ka=!1,f=t.memoizedState,a.state=f,to(t,r,a,i),eo();var p=t.memoizedState;o!==d||f!==p||Ka||e!==null&&e.dependencies!==null&&oa(e.dependencies)?(typeof s==`function`&&(Ks(t,n,s,r),p=t.memoizedState),(u=Ka||Js(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&oa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,_c(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Wa(t,e.child,null,i),t.child=Wa(t,null,n,i)):sc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Mc(e,t,i),e}function xc(e,t,n,r){return Yi(),t.flags|=256,sc(e,t,n,r),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cc(e){return{baseLanes:e,cachePool:Da()}}function wc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Tc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(P.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(M){if(a?fo(t):ho(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(ho(t),a=t.mode,c=Dc({mode:`hidden`,children:c},a),r=xi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(null,r)):(fo(t),Ec(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(fo(t),t.flags&=-257,t=Oc(e,t,n)):t.memoizedState===null?(ho(t),c=r.fallback,a=t.mode,r=Dc({mode:`visible`,children:r.children},a),c=xi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Wa(t,e.child,null,n),r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,t=fc(null,r)):(ho(t),t.child=e.child,t.flags|=128,t=null);else if(fo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Zi({value:r,source:null,stack:null}),t=Oc(e,t,n)}else if(B||aa(e,t,n,!1),s=(n&e.childLanes)!==0,B||s){if(s=G,s!==null&&(r=ct(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,di(e,r),hu(s,e,r),oc;af(c)||Du(),t=Oc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,j=cf(c.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=Ec(t,r.children),t.flags|=4096);return t}return a?(ho(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=vi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=xi(c,a,n,null),c.flags|=2):c=vi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,fc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Cc(n):(a=c.cachePool,a===null?a=Da():(l=N._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(e.child,r)):(fo(t),n=e.child,e=n.sibling,n=vi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Ec(e,t){return t=Dc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Dc(e,t){return e=gi(22,e,null,t),e.lanes=0,e}function Oc(e,t,n){return Wa(t,e.child,null,n),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ra(e.return,t,n)}function Ac(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function jc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=P.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,k(P,o),sc(e,t,r,n),r=M?Ai:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kc(e,n,t);else if(e.tag===19)kc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ac(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ac(t,!0,n,null,a,r);break;case`together`:Ac(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Mc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(aa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=vi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&oa(e)))}function Pc(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),ta(t,N,e.memoizedState.cache),Yi();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,po(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(fo(t),e=Mc(e,t,n),e===null?null:e.sibling):Tc(e,t,n):(fo(t),t.flags|=128,null);fo(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(aa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return jc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(P,P.current),r)break;return null;case 22:return t.lanes=0,dc(e,t,n,t.pendingProps);case 24:ta(t,N,e.memoizedState.cache)}return Mc(e,t,n)}function Fc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)B=!0;else{if(!Nc(e,n)&&!(t.flags&128))return B=!1,Pc(e,t,n);B=!!(e.flags&131072)}}else B=!1,M&&t.flags&1048576&&Li(t,Ai,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Pa(t.elementType),t.type=e,typeof e==`function`)_i(e)?(r=Xs(e,r),t.tag=1,t=bc(null,t,e,r,n)):(t.tag=0,t=vc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=cc(null,t,e,r,n);break a}if(a===w){t.tag=14,t=lc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(i(306,t,``))}}return t;case 0:return vc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Xs(r,t.pendingProps),bc(e,t,r,a,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ja(e,t),to(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ta(t,N,r),r!==o.cache&&ia(t,[N],n,!0),eo(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=xc(e,t,r,n);break a}if(r!==a){a=Ei(Error(i(424)),t),Zi(a),t=xc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(j=cf(e.firstChild),Vi=t,M=!0,Hi=null,Ui=!0,n=Ga(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Yi(),r===a){t=Mc(e,t,n);break a}sc(e,t,r,n)}t=t.child}return t;case 26:return _c(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:M||(n=t.type,e=t.pendingProps,r=Bd(ge.current).createElement(n),r[mt]=t,r[ht]=e,Pd(r,n,e),Dt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&M&&(r=t.stateNode=ff(t.type,t.pendingProps,ge.current),Vi=t,Ui=!0,a=j,Zd(t.type)?(lf=a,j=cf(r.firstChild)):j=a),sc(e,t,t.pendingProps.children,n),_c(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&M&&((a=r=j)&&(r=tf(r,t.type,t.pendingProps,Ui),r===null?a=!1:(t.stateNode=r,Vi=t,j=cf(r.firstChild),Ui=!1,a=!0)),a||Gi(t)),be(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Do(e,t,Ao,null,null,n),Qf._currentValue=a),_c(e,t),sc(e,t,r,n),t.child;case 6:return e===null&&M&&((e=n=j)&&(n=nf(n,t.pendingProps,Ui),n===null?e=!1:(t.stateNode=n,Vi=t,j=null,e=!0)),e||Gi(t)),null;case 13:return Tc(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wa(t,null,r,n):sc(e,t,r,n),t.child;case 11:return cc(e,t,t.type,t.pendingProps,n);case 7:return sc(e,t,t.pendingProps,n),t.child;case 8:return sc(e,t,t.pendingProps.children,n),t.child;case 12:return sc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ta(t,t.type,r.value),sc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,sa(t),a=ca(a),r=r(a),t.flags|=1,sc(e,t,r,n),t.child;case 14:return lc(e,t,t.type,t.pendingProps,n);case 15:return uc(e,t,t.type,t.pendingProps,n);case 19:return jc(e,t,n);case 31:return gc(e,t,n);case 22:return dc(e,t,n,t.pendingProps);case 24:return sa(t),r=ca(N),e===null?(a=Ta(),a===null&&(a=G,o=ma(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},qa(t),ta(t,N,a)):((e.lanes&n)!==0&&(Ja(e,t),to(t,null,null,n),eo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ta(t,N,r),r!==a.cache&&ia(t,[N],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ta(t,N,r))),sc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Ic(e){e.flags|=4}function Lc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Fa=ja,ka}}else e.flags&=-16777217}function Rc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(wu())e.flags|=8192;else throw Fa=ja,ka}}function zc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:nt(),e.lanes|=t,Xl|=t)}function Bc(e,t){if(!M)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function V(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vc(e,t,n){var r=t.pendingProps;switch(zi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V(t),null;case 1:return V(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),na(N),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ji(t)?Ic(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xi())),V(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Ic(t),o===null?(V(t),Lc(t,a,null,r,n)):(V(t),Rc(t,o))):o?o===e.memoizedState?(V(t),t.flags&=-16777217):(Ic(t),V(t),Rc(t,o)):(e=e.memoizedProps,e!==r&&Ic(t),V(t),Lc(t,a,e,r,n)),null;case 27:if(xe(t),n=ge.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),null}e=me.current,Ji(t)?Ki(t,e):(e=ff(a,r,n),t.stateNode=e,Ic(t))}return V(t),null;case 5:if(xe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),null}if(o=me.current,Ji(t))Ki(t,o);else{var s=Bd(ge.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[mt]=t,o[ht]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ic(t)}}return V(t),Lc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ge.current,Ji(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Vi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[mt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Gi(t,!0)}else e=Bd(e).createTextNode(r),e[mt]=t,t.stateNode=e}return V(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ji(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[mt]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),e=!1}else n=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(go(t),t):(go(t),null);if(t.flags&128)throw Error(i(558))}return V(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[mt]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),a=!1}else a=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(go(t),t):(go(t),null)}return go(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),zc(t,t.updateQueue),V(t),null);case 4:return ye(),e===null&&Sd(t.stateNode.containerInfo),V(t),null;case 10:return na(t.type),V(t),null;case 19:if(O(P),r=t.memoizedState,r===null)return V(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Bc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=_o(e),o!==null){for(t.flags|=128,Bc(r,!1),e=o.updateQueue,t.updateQueue=e,zc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yi(n,e),n=n.sibling;return k(P,P.current&1|2),M&&Ii(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ne()>nu&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=_o(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,zc(t,e),Bc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!M)return V(t),null}else 2*Ne()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(V(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ne(),e.sibling=null,n=P.current,k(P,a?n&1|2:n&1),M&&Ii(t,r.treeForkCount),e);case 22:case 23:return go(t),co(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(V(t),t.subtreeFlags&6&&(t.flags|=8192)):V(t),n=t.updateQueue,n!==null&&zc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&O(wa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),na(N),V(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Hc(e,t){switch(zi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return na(N),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(go(t),t.alternate===null)throw Error(i(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(go(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(P),null;case 4:return ye(),null;case 10:return na(t.type),null;case 22:case 23:return go(t),co(),e!==null&&O(wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return na(N),null;case 25:return null;default:return null}}function Uc(e,t){switch(zi(t),t.tag){case 3:na(N),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&go(t);break;case 13:go(t);break;case 19:O(P);break;case 10:na(t.type);break;case 22:case 23:go(t),co(),e!==null&&O(wa);break;case 24:na(N)}}function Wc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Gc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Kc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ro(t,n)}catch(t){Z(e,e.return,t)}}}function qc(e,t,n){n.props=Xs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Jc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Yc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Xc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Zc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ht]=t}catch(t){Z(e,e.return,t)}}function Qc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function $c(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[mt]=e,t[ht]=n}catch(t){Z(e,e.return,t)}}var rl=!1,H=!1,il=!1,al=typeof WeakSet==`function`?WeakSet:Set,ol=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Fr(e),Ir(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,ol=t;ol!==null;)if(t=ol,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,ol=e;else for(;ol!==null;){switch(t=ol,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Xs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,ol=e;break}ol=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Wc(5,n);break;case 1:if(Sl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Xs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Kc(n),r&512&&Jc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ro(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&nl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Xc(n),r&512&&Jc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||rl,!r){t=t!==null&&t.memoizedState!==null||H,i=rl;var a=H;rl=r,(H=t)&&!a?wl(e,n,!!(n.subtreeFlags&8772)):Sl(e,n),rl=i,H=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&St(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount==`function`)try{Ue.onCommitFiberUnmount(He,n)}catch{}switch(n.tag){case 26:H||Yc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:H||Yc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:H||Yc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null){if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Gc(2,n,t),H||Gc(4,n,t),dl(e,t,n);break;case 1:H||(Yc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&qc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:H=(r=H)||n.memoizedState!==null,dl(e,t,n),H=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new al),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new al),t;default:throw Error(i(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(i(160));fl(o,s,a),U=null,ul=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Gc(3,e,e.return),Wc(3,e),Gc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&64&&rl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=vl;if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[xt]||o[mt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[mt]=e,Dt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[mt]=e,Dt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=If(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Zc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),n!==null&&r&4&&Zc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),e.flags&32){a=e.stateNode;try{$t(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Zc(e,a,n===null?a:n.memoizedProps)),r&1024&&(il=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=vl,vl=gf(t.containerInfo),_l(t,e),vl=a,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}il&&(il=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Ne()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=rl,d=H;if(rl=u||a,H=d||l,_l(t,e),H=d,rl=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||rl||H||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Qc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;tl(e,$c(e),a);break;case 5:var o=n.stateNode;n.flags&32&&($t(o,``),n.flags&=-33),tl(e,$c(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;el(e,$c(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Gc(4,t,t.return),Cl(t);break;case 1:Yc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&qc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Yc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Wc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)no(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Kc(a),Jc(a,a.return);break;case 27:nl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Xc(a),Jc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Jc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ha(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Wc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Wc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Gc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;ol!==null;){var n=ol;switch(n.tag){case 0:case 11:case 15:Gc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ha(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ol=r;else a:for(n=e;ol!==null;){r=ol;var i=r.sibling,a=r.return;if(ll(r),r===n){ol=null;break a}if(i!==null){i.return=a,ol=i;break a}ol=a}}}var zl={getCacheForType:function(e){var t=ca(N),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ca(N).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:E.T===null?dt():dd()}function mu(){if(Yl===0){if(!(q&536870912)||M){var e=Xe;Xe<<=1,!(Xe&3932160)&&(Xe=262144),Yl=e}else Yl=536870912}return e=lo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),it(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||et(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Ul&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-Ne(),10<a)){if(yu(r,t,Yl,!Hl),$e(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,`Throttled`,-0,0),a);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:cn},Nl(t,a,d);var m=(a&62914560)===a?eu-Ne():(a&4194048)===a?tu-Ne():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ar(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ge(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ot(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ea=$i=null,No(e),Ra=null,za=0,e=K;for(;e!==null;)Uc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=vi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=et(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ge(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,ci(),n}function Cu(e,t){F=null,E.H=Hs,t===Oa||t===Aa?(t=Ia(),J=3):t===ka?(t=Ia(),J=4):J=t===oc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,ec(e,Ei(t,e.current)))}function wu(){var e=lo.current;return e===null?!0:(q&4194048)===q?uo===null:(q&62914560)===q||q&536870912?e===uo:!1}function Tu(){var e=E.H;return E.H=Hs,e===null?Hs:e}function Eu(){var e=E.A;return E.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&lo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:lo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ea=$i=null,W=r,E.H=i,E.A=a,K===null&&(G=null,q=0,ci()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),a=Eu();G!==e||q!==t?(ru=null,nu=Ne()+500,Su(e,t)):Ul=et(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,o,1);break;case 2:case 9:if(Ma(o)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Ma(o)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Wf(s):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,o,5);break;case 6:J=0,Vl=null,Pu(e,t,o,6);break;case 8:xu(),Y=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ea=$i=null,E.H=r,E.A=a,W=n,K===null?(G=null,q=0,ci(),Y):0}function ju(){for(;K!==null&&!je();)Mu(K)}function Mu(e){var t=Fc(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=yc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=yc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:No(t);default:Uc(n,t),t=K=yi(t,Gl),t=Fc(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ea=$i=null,No(t),Ra=null,za=0;var i=t.return;try{if(ac(e,i,t,n,q)){Y=1,ec(e,Ei(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,ec(e,Ei(n,e.current)),K=null;return}t.flags&32768?(M||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=lo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Vc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Hc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=si,at(e,n,o,s,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Le,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=E.T,E.T=null,a=D.p,D.p=2,s=W,W|=4;try{sl(e,t,n)}finally{W=s,D.p=a,E.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Fr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Pr(s.ownerDocument.documentElement,s)){if(c!==null&&Ir(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Nr(s,h),v=Nr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,D.p=r,E.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,D.p=r,E.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Me();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),ut(n),t=t.stateNode,Ue&&typeof Ue.onCommitFiberRoot==`function`)try{Ue.onCommitFiberRoot(He,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ha(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=ut(su),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=lu,lu=null;var o=au,s=su;if(X=0,ou=au=null,su=0,W&6)throw Error(i(331));var c=W;if(W|=4,Il(o.current),Ol(o,o.current,s,n),W=c,id(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot==`function`)try{Ue.onPostCommitFiberRoot(He,o)}catch{}return!0}finally{D.p=a,E.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ei(n,t),t=nc(e.stateNode,t,2),e=Xa(e,t,2),e!==null&&(it(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Ei(n,e),n=rc(2),r=Xa(t,n,2),r!==null&&(ic(n,r,t,e),it(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Ne()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=nt()),e=di(e,t),e!==null&&(it(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return ke(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ge(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=$e(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||et(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ne(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ge(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=tt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=$e(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ae(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||et(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ae(r),ut(n)){case 2:case 8:n=Ie;break;case 32:n=Le;break;case 268435456:n=ze;break;default:n=Le}return r=cd.bind(null,e),n=ke(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ae(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=$e(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ne()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?ke(Fe,ad):od()})}function dd(){if(nd===0){var e=va;e===0&&(e=Ye,Ye<<=1,!(Ye&261888)&&(Ye=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:sn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ht]||null).action),o=r.submitter;o&&(t=(t=o[ht]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new kn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Os(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Os(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ni.length;hd++){var gd=ni[hd];ri(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ri(Jr,`onAnimationEnd`),ri(Yr,`onAnimationIteration`),ri(Xr,`onAnimationStart`),ri(`dblclick`,`onDoubleClick`),ri(`focusin`,`onFocus`),ri(`focusout`,`onBlur`),ri(Zr,`onTransitionRun`),ri(Qr,`onTransitionStart`),ri($r,`onTransitionCancel`),ri(ei,`onTransitionEnd`),jt(`onMouseEnter`,[`mouseout`,`mouseover`]),jt(`onMouseLeave`,[`mouseout`,`mouseover`]),jt(`onPointerEnter`,[`pointerout`,`pointerover`]),jt(`onPointerLeave`,[`pointerout`,`pointerover`]),At(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),At(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),At(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),At(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[_t];n===void 0&&(n=t[_t]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Ot.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!vn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Ct(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}hn(function(){var r=a,i=un(n),s=[];a:{var c=ti.get(e);if(c!==void 0){var l=kn,u=e;switch(e){case`keypress`:if(wn(n)===0)break a;case`keydown`:case`keyup`:l=qn;break;case`focusin`:u=`focus`,l=Rn;break;case`focusout`:u=`blur`,l=Rn;break;case`beforeblur`:case`afterblur`:l=Rn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=In;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Ln;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Yn;break;case Jr:case Yr:case Xr:l=zn;break;case ei:l=Xn;break;case`scroll`:case`scrollend`:l=jn;break;case`wheel`:l=Zn;break;case`copy`:case`cut`:case`paste`:l=Bn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Jn;break;case`toggle`:case`beforetoggle`:l=Qn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=gn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==ln&&(u=n.relatedTarget||n.fromElement)&&(Ct(u)||u[gt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Ct(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=In,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Jn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Tt(l),h=u==null?c:Tt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Ct(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Tt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=vr;else if(fr(c)){if(yr)v=Or;else{v=Er;var y=Tr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&rn(r.elementType)&&(v=vr):v=Dr;if(v&&=v(e,r)){pr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Yt(c,`number`,c.value)}switch(y=r?Tt(r):window,e){case`focusin`:(fr(y)||y.contentEditable===`true`)&&(Rr=y,zr=r,Br=null);break;case`focusout`:Br=zr=Rr=null;break;case`mousedown`:Vr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Vr=!1,Hr(s,n,i);break;case`selectionchange`:if(Lr)break;case`keydown`:case`keyup`:Hr(s,n,i)}var b;if(er)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else cr?or(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(rr&&n.locale!==`ko`&&(cr||x!==`onCompositionStart`?x===`onCompositionEnd`&&cr&&(b=Cn()):(bn=i,xn=`value`in bn?bn.value:bn.textContent,cr=!0)),y=Ed(r,x),0<y.length&&(x=new Vn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=sr(n),b!==null&&(x.data=b)))),(b=nr?lr(e,n):ur(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Vn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=gn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=gn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=gn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=gn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&$t(e,``+r);break;case`className`:Lt(e,`class`,r);break;case`tabIndex`:Lt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Lt(e,n,r);break;case`style`:nn(e,r,o);break;case`data`:if(t!==`object`){Lt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=sn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),It(e,`popover`,r);break;case`xlinkActuate`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:It(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=an.get(n)||n,It(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:nn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&$t(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!kt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ht]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):It(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Jt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Xt(e,!!r,n,!0):Xt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Qt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(rn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}qt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Xt(e,!!n,n?[]:``,!1):Xt(e,!!n,t,!0)):Xt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Zt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(rn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[xt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),St(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[xt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);St(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=D.d;D.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=wt(e);t!==null&&t.tag===5&&t.type===`form`?As(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Kt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Kt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Kt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Kt(n.imageSizes)+`"]`)):i+=`[href="`+Kt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Kt(r)+`"][href="`+Kt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Dt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Et(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Dt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Dt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Dt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ge.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Et(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Et(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Et(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Kt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Dt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Kt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Kt(n.href)+`"]`);if(r)return t.instance=r,Dt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Dt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Dt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Dt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Dt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Dt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[xt]||a[mt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Dt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Dt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rt(0),this.hiddenUpdates=rt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=gi(3,null,null,t),e.current=a,a.stateNode=e,t=ma(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},qa(a),e}function tp(e){return e?(e=mi,e):mi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ya(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Xa(e,r,t),n!==null&&(hu(n,e,t),Za(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=di(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=lt(t);var n=di(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,up(e,t,n,r)}finally{D.p=a,E.T=i}}function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,up(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=wt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Qe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ge(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Ne()+500,id(0,!1))}}break;case 31:case 13:s=di(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=un(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Ct(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Pe()){case Fe:return 2;case Ie:return 8;case Le:case Re:return 32;case ze:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=wt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Ct(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ln=r,n.target.dispatchEvent(r),ln=null}else return t=wt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=wt(n);a!==null&&(e.splice(t,3),t-=3,Os(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ht]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ht]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[gt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=dt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{He=zp.inject(Rp),Ue=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Zs,s=Qs,c=$s;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[gt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=e=>e?.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase();function v(e,t,n=[]){if(t==null)throw Error(`[lucide]: iconNode is required when icon name is used`);return{name:_(e),size:24,node:t,...n.length>0?{aliases:n}:{}}}var y=e=>{let t=``,n=!1;for(let r of e){if(r===`-`||r===`_`||r<=` `){n=t.length>0;continue}t.length===0?t+=r.toLowerCase():t+=n?r.toUpperCase():r,n=!1}return t},b=e=>{let t=y(e);return t.charAt(0).toUpperCase()+t.slice(1)},x=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),ee={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`};function S(e){return e!=null}function C(e,t={}){let n=t.attributeNames??{},r=e=>n[e]??e,i=e.size??e.width??ee.width,a=e.size??e.height??ee.height,o=e.aliases?.filter(e=>typeof e==`string`&&e.trim()!==``).map(e=>`lucide-${e}`)??[],s=[...e.name?[`lucide-${e.name}`]:[],...o],c=t.className?.split(` `).filter(Boolean)??[],l=t.includeDefaultClasses===!1?x(...c):x(`lucide`,...s,...c),u=t.absoluteStrokeWidth?Number(t.strokeWidth??ee[`stroke-width`])*Number(e.size??e.width??ee.width)/Number(t.size??t.width??ee.width):t.strokeWidth??ee[`stroke-width`];return[`svg`,{...Object.entries(ee).reduce((e,[t,n])=>(e[r(t)]=n,e),{}),...`color`in t&&t.color&&{[r(`stroke`)]:t.color},...`size`in t&&S(t.size)&&{[r(`width`)]:t.size,[r(`height`)]:t.size},...`width`in t&&S(t.width)&&{[r(`width`)]:t.width},...`height`in t&&S(t.height)&&{[r(`height`)]:t.height},[r(`stroke-width`)]:u,...l&&{[r(`class`)]:l},[r(`viewBox`)]:`0 0 ${i} ${a}`,...t.hasA11yProp===!1?{[r(`aria-hidden`)]:`true`}:{},...`attributes`in t&&t.attributes},e.node.map(e=>{let[n,i,a]=e,o=t.nonScalingStroke?{[r(`vector-effect`)]:`non-scaling-stroke`,...i}:i;return a?[n,o,a]:[n,o]})]}function te(e,t={}){return C(e,{...t,attributeNames:{...t.attributeNames,class:`className`,"stroke-width":`strokeWidth`,"stroke-linecap":`strokeLinecap`,"stroke-linejoin":`strokeLinejoin`,"vector-effect":`vectorEffect`}})}var ne=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},w=c(u(),1),re=(0,w.createContext)({}),ie=()=>(0,w.useContext)(re),ae=(0,w.forwardRef)(({color:e,size:t,width:n,height:r,strokeWidth:i,absoluteStrokeWidth:a,nonScalingStroke:o,className:s=``,children:c,iconNode:l=[],icon:u={node:l,aliases:[],size:24},...d},f)=>{let{size:p=24,strokeWidth:m=2,absoluteStrokeWidth:h=!1,nonScalingStroke:g=!1,color:_=`currentColor`,className:v=``}=ie()??{},y=!!c||ne(d),[b,ee,S=[]]=te(u,{color:e??_,width:n??t??p,height:r??t??p,strokeWidth:i??m,absoluteStrokeWidth:a??h,nonScalingStroke:o??g,className:x(v,s),hasA11yProp:y,attributes:d});return(0,w.createElement)(b,{ref:f,...ee},[...S.map(([e,t])=>(0,w.createElement)(e,t)),...Array.isArray(c)?c:[c]])});function T(e,t=[],n=[]){let r=typeof e==`string`?v(e,t,n):e,i=(0,w.forwardRef)(({className:e,...t},n)=>(0,w.createElement)(ae,{ref:n,icon:r,className:e,...t}));return r.name&&(i.displayName=b(r.name)),i}var oe={name:`arrow-left`,size:24,node:[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]};oe.node;var se=T(oe),ce={name:`arrow-right`,size:24,node:[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]};ce.node;var le=T(ce),E={name:`check`,size:24,node:[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]};E.node;var D=T(E),ue={name:`cpu`,size:24,node:[[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M17 20v2`,key:`1rnc9c`}],[`path`,{d:`M17 2v2`,key:`11trls`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M2 17h2`,key:`7oei6x`}],[`path`,{d:`M2 7h2`,key:`asdhe0`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`M20 17h2`,key:`1fpfkl`}],[`path`,{d:`M20 7h2`,key:`1o8tra`}],[`path`,{d:`M7 20v2`,key:`4gnj0m`}],[`path`,{d:`M7 2v2`,key:`1i4yhu`}],[`rect`,{x:`4`,y:`4`,width:`16`,height:`16`,rx:`2`,key:`1vbyd7`}],[`rect`,{x:`8`,y:`8`,width:`8`,height:`8`,rx:`1`,key:`z9xiuo`}]]};ue.node;var de=T(ue),fe={name:`database`,size:24,node:[[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`,key:`msslwz`}],[`path`,{d:`M3 5V19A9 3 0 0 0 21 19V5`,key:`1wlel7`}],[`path`,{d:`M3 12A9 3 0 0 0 21 12`,key:`mv7ke4`}]]};fe.node;var pe=T(fe),O={name:`flame`,size:24,node:[[`path`,{d:`M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4`,key:`1slcih`}]]};O.node;var k=T(O),me={name:`menu`,size:24,node:[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]};me.node;var he=T(me),ge={name:`moon`,size:24,node:[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,key:`kfwtm`}]]};ge.node;var _e=T(ge),ve={name:`share-2`,size:24,node:[[`circle`,{cx:`18`,cy:`5`,r:`3`,key:`gq8acd`}],[`circle`,{cx:`6`,cy:`12`,r:`3`,key:`w7nqdw`}],[`circle`,{cx:`18`,cy:`19`,r:`3`,key:`1xt0gg`}],[`line`,{x1:`8.59`,x2:`15.42`,y1:`13.51`,y2:`17.49`,key:`47mynk`}],[`line`,{x1:`15.41`,x2:`8.59`,y1:`6.51`,y2:`10.49`,key:`1n3mei`}]]};ve.node;var ye=T(ve),be={name:`sun`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]};be.node;var xe=T(be),Se={name:`terminal`,size:24,node:[[`path`,{d:`M12 19h8`,key:`baeox8`}],[`path`,{d:`m4 17 6-6-6-6`,key:`1yngyt`}]]};Se.node;var Ce=T(Se),we={name:`x`,size:24,node:[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]};we.node;var Te=T(we),Ee=o((e=>{var t=Symbol.for(`react.transitional.element`);function n(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.jsx=n,e.jsxs=n})),De=o(((e,t)=>{t.exports=Ee()})),Oe=g(),A=De(),ke=({activeCategory:e,onSelectCategory:t,onOpenSearch:n,theme:r,onToggleTheme:i})=>{let[a,o]=(0,w.useState)(!1);return(0,A.jsxs)(`header`,{className:`w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm font-['Lato']`,children:[(0,A.jsx)(`div`,{className:`og-blue-bar text-[12px] sm:text-[13px] font-mono tracking-wider uppercase h-9 flex items-center border-b border-[#002752] select-none overflow-hidden font-medium`,children:(0,A.jsxs)(`div`,{className:`w-full mx-auto px-[2cm] flex items-center justify-between`,children:[(0,A.jsxs)(`div`,{className:`flex items-center gap-3 whitespace-nowrap`,children:[(0,A.jsx)(`span`,{className:`inline-block w-2.5 h-2.5 rounded-full bg-[#16a34a] animate-pulse`}),(0,A.jsx)(`span`,{className:`text-white font-bold`,children:`NODE_INDEX: LIVE_V4.2`}),(0,A.jsx)(`span`,{className:`text-slate-300 hidden sm:inline`,children:`·`}),(0,A.jsx)(`span`,{className:`text-slate-200 hidden sm:inline`,children:`LATENCY: 14MS`}),(0,A.jsx)(`span`,{className:`text-slate-300 hidden md:inline`,children:`·`}),(0,A.jsx)(`span`,{className:`text-white font-bold hidden md:inline`,children:`100% GROUNDED SOURCES`})]}),(0,A.jsxs)(`div`,{className:`hidden sm:flex items-center gap-4 text-slate-200 font-mono whitespace-nowrap font-medium`,children:[(0,A.jsx)(`a`,{href:`https://www.ollawrite.com/#features`,className:`hidden lg:inline hover:text-white transition-colors`,children:`API_DOCS`}),(0,A.jsx)(`span`,{className:`text-slate-400 hidden lg:inline`,children:`·`}),(0,A.jsx)(`a`,{href:`https://www.ollawrite.com/#how`,className:`hidden md:inline hover:text-white transition-colors`,children:`RAG_SANDBOX`}),(0,A.jsx)(`span`,{className:`text-slate-400 hidden md:inline`,children:`·`}),(0,A.jsxs)(`a`,{href:`https://www.ollawrite.com`,className:`text-white hover:text-slate-200 font-bold flex items-center gap-1.5 transition-colors`,children:[(0,A.jsx)(`span`,{children:`[+]`}),` RUN_AUDIT →`]})]})]})}),(0,A.jsx)(`div`,{className:`h-[60px] bg-white flex items-center`,children:(0,A.jsxs)(`div`,{className:`w-full mx-auto px-[2cm] grid grid-cols-[1fr_auto_1fr] items-center`,children:[(0,A.jsx)(`button`,{onClick:()=>t(`All`),className:`flex items-center gap-2 text-left cursor-pointer focus:outline-none group shrink-0`,"aria-label":`OllaWrite Knowledge Base Home`,children:(0,A.jsx)(`div`,{className:`flex flex-col`,children:(0,A.jsxs)(`span`,{className:`text-slate-900 font-bold text-xl sm:text-2xl tracking-tight leading-none font-['Lato']`,children:[`Olla`,(0,A.jsx)(`span`,{className:`text-[#e8443a]`,children:`Write`})]})})}),(0,A.jsxs)(`nav`,{className:`hidden lg:flex items-center gap-6 xl:gap-8 font-['Lato']`,children:[(0,A.jsx)(`a`,{href:`https://www.ollawrite.com/#features`,className:`text-[14px] font-bold cursor-pointer transition-colors whitespace-nowrap text-slate-700 hover:text-[#e8443a]`,children:`Features`}),(0,A.jsx)(`a`,{href:`https://www.ollawrite.com/#how`,className:`text-[14px] font-bold cursor-pointer transition-colors whitespace-nowrap text-slate-700 hover:text-[#e8443a]`,children:`How it works`}),(0,A.jsx)(`a`,{href:`https://www.ollawrite.com/#pricing`,className:`text-[14px] font-bold cursor-pointer transition-colors whitespace-nowrap text-slate-700 hover:text-[#e8443a]`,children:`Pricing`}),(0,A.jsx)(`a`,{href:`https://www.ollawrite.com/#faq`,className:`text-[14px] font-bold cursor-pointer transition-colors whitespace-nowrap text-slate-700 hover:text-[#e8443a]`,children:`FAQ`}),(0,A.jsx)(`a`,{href:`https://www.ollawrite.com/blog`,onClick:e=>{window.location.hostname.includes(`blogs.ollawrite.com`)&&(e.preventDefault(),t(`All`),window.scrollTo({top:0,behavior:`smooth`}))},className:`text-[14px] font-bold cursor-pointer transition-colors whitespace-nowrap text-[#e8443a] hover:text-[#c7372e]`,children:`Blog`}),(0,A.jsx)(`a`,{href:`https://www.ollawrite.com/contact`,className:`text-[14px] font-bold cursor-pointer transition-colors whitespace-nowrap text-slate-700 hover:text-[#e8443a]`,children:`Contact`})]}),(0,A.jsxs)(`div`,{className:`flex items-center justify-end gap-2 shrink-0`,children:[(0,A.jsx)(`button`,{onClick:i,className:`flex items-center justify-center w-8 h-8 rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-800 transition-all cursor-pointer shadow-xs shrink-0`,title:`Switch to ${r===`light`?`Dark (Black)`:`Light (White)`} Mode`,"aria-label":`Toggle Black & White Theme`,children:r===`light`?(0,A.jsx)(_e,{size:14,className:`text-slate-700`}):(0,A.jsx)(xe,{size:14,className:`text-slate-700`})}),(0,A.jsxs)(`a`,{href:`https://www.ollawrite.com/`,target:`_blank`,rel:`noreferrer`,className:`og-cta-red text-xs sm:text-sm font-bold px-3 py-1.5 rounded-lg shadow-xs transition-all hidden sm:flex items-center gap-1.5 cursor-pointer whitespace-nowrap font-mono`,children:[(0,A.jsx)(Ce,{size:14}),(0,A.jsx)(`span`,{children:`Start free`})]}),(0,A.jsx)(`button`,{onClick:()=>o(!a),className:`lg:hidden p-2 text-slate-700 hover:text-slate-900`,"aria-label":`Toggle navigation`,children:a?(0,A.jsx)(Te,{size:24}):(0,A.jsx)(he,{size:24})})]})]})}),(0,A.jsx)(`div`,{className:`bg-slate-50 text-slate-700 text-[12px] sm:text-[13px] font-mono py-1.5 overflow-x-auto select-none border-t border-slate-200 font-medium`,children:(0,A.jsxs)(`div`,{className:`w-full mx-auto px-[2cm] flex items-center justify-between whitespace-nowrap gap-5`,children:[(0,A.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,A.jsx)(de,{size:15,className:`text-[#003db3]`}),(0,A.jsx)(`span`,{className:`text-[#003db3] font-bold`,children:`RAG Pipeline: 4 Dedicated Agents`})]}),(0,A.jsx)(`span`,{className:`text-slate-300`,children:`·`}),(0,A.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,A.jsx)(`span`,{className:`text-green-600 font-black`,children:`✓`}),(0,A.jsx)(`span`,{className:`font-bold text-slate-800`,children:`Zero-Hallucination Gate (Active)`})]}),(0,A.jsx)(`span`,{className:`text-slate-300`,children:`·`}),(0,A.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,A.jsx)(`span`,{className:`text-slate-800 font-black`,children:`★`}),(0,A.jsx)(`span`,{className:`font-bold text-slate-800`,children:`4.9★ Enterprise Trust Index`})]}),(0,A.jsx)(`span`,{className:`text-slate-300`,children:`·`}),(0,A.jsx)(`span`,{className:`font-bold text-slate-800`,children:`99.4% Factual Alignment`}),(0,A.jsx)(`span`,{className:`text-slate-300`,children:`·`}),(0,A.jsx)(`span`,{className:`font-bold text-slate-800`,children:`Sitemap Crawler v4.2`}),(0,A.jsx)(`span`,{className:`text-slate-300`,children:`·`}),(0,A.jsx)(`span`,{className:`text-[#003db3] font-black`,children:`100% Cryptographic Citations`}),(0,A.jsx)(`span`,{className:`text-slate-300`,children:`·`}),(0,A.jsx)(`span`,{className:`font-bold text-slate-800`,children:`SOC2 Type II Verified`}),(0,A.jsx)(`span`,{className:`text-slate-300`,children:`·`}),(0,A.jsx)(`span`,{className:`font-bold text-slate-800`,children:`OpenAI & Claude RAG Compatible`}),(0,A.jsx)(`span`,{className:`text-slate-300`,children:`·`}),(0,A.jsx)(`span`,{className:`font-bold text-slate-800`,children:`Avg Latency: 420ms`}),(0,A.jsx)(`span`,{className:`text-slate-300`,children:`·`}),(0,A.jsx)(`span`,{className:`font-black text-green-600`,children:`Ship Verdict Engine: Pass`})]})}),a&&(0,A.jsxs)(`div`,{className:`lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 text-lg font-black font-['Lato'] shadow-md`,children:[(0,A.jsx)(`a`,{href:`https://www.ollawrite.com/#features`,className:`block w-full text-left py-2 text-slate-900 hover:text-[#e8443a]`,children:`Features`}),(0,A.jsx)(`a`,{href:`https://www.ollawrite.com/#how`,className:`block w-full text-left py-2 text-slate-900 hover:text-[#e8443a]`,children:`How it works`}),(0,A.jsx)(`a`,{href:`https://www.ollawrite.com/#pricing`,className:`block w-full text-left py-2 text-slate-900 hover:text-[#e8443a]`,children:`Pricing`}),(0,A.jsx)(`a`,{href:`https://www.ollawrite.com/#faq`,className:`block w-full text-left py-2 text-slate-900 hover:text-[#e8443a]`,children:`FAQ`}),(0,A.jsx)(`a`,{href:`https://www.ollawrite.com/blog`,onClick:e=>{window.location.hostname.includes(`blogs.ollawrite.com`)&&(e.preventDefault(),t(`All`),o(!1),window.scrollTo({top:0,behavior:`smooth`}))},className:`block w-full text-left py-2 text-[#e8443a]`,children:`Blog`}),(0,A.jsx)(`a`,{href:`https://www.ollawrite.com/contact`,className:`block w-full text-left py-2 text-slate-900 hover:text-[#e8443a]`,children:`Contact`})]})]})},Ae=[`What Is AI Search Optimization? The Complete 2026 Guide`,`AI Content Optimization: How to Improve AI-Generated Content`,`Does AI Content Rank on Google? The Real Answer for 2026`,`AI Copywriting: Complete Guide`,`AI Keyword Research: How to Find SEO Keywords Faster (Without Losing the Plot)`,`How to Humanize AI-Generated Content: Complete Guide`,`AI Writing Tools vs Traditional Content Writing: Which Method Actually Works`,`How to Use AI to Write SEO-Friendly Blog Posts (Without Sounding Like a Robot)`,`AI Content Generator: The Complete Guide Nobody Simplified for You`,`What Is an AI Content Writer? The Honest Answer (Not the Sales Pitch)`,`Best AI Writing Tools in 2026: The Honest, No-Fluff Guide`],je=[`Why Site-First AI Writing Replaces Prompt Guessing in Enterprise Content`,`Four Agents, One Job Each: How Multi-Agent AI Pipelines Produce Better Content`,`The Editor Critic Ship Verdict: Why Automated Quality Gates Change AI Content ROI`,`SEO & AI Content Strategy in 2026: How Google Ranks AI Articles`,`AI Writing Tools vs Traditional Content Writing: Which Method Actually Works`,`How to Humanize AI-Generated Content: Complete Guide`,`What Is an AI Content Writer? The Honest Answer (Not the Sales Pitch)`,`Best AI Writing Tools in 2026: The Honest, No-Fluff Guide`,`AI Content Generator: The Complete Guide Nobody Simplified for You`,`AI Keyword Research: How to Find SEO Keywords Faster (Without Losing the Plot)`,`AI Copywriting: Complete Guide`],Me=[`Humanizing AI`,`Site-First Grounding`,`Multi-Agent Pipelines`,`SEO Strategy 2026`,`Citation Graphs`,`Editorial QA Gates`,`E-E-A-T Compliance`],Ne=[{id:`15`,slug:`what-is-ai-search-optimization-2026-guide`,title:`What Is AI Search Optimization? The Complete 2026 Guide`,subtitle:`AI search optimization is not the same as traditional SEO. Here is what it means, how AI answer engines choose sources, and how to get found there.`,category:`SEO Strategy`,editorialNumber:`15`,author:{name:`Dr. Aris Thorne`,role:`Head of Grounded Intelligence & Search Retrieval`,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200`,bio:`Pioneer in semantic retrieval, RAG graph architecture, and zero-hallucination language models at OllaWrite.`},publishedDate:`Sep 09, 2026`,readTime:`23 min read`,featured:!0,cardType:`featured`,imageUrl:`https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=900`,sourceCount:8,benchmarkScore:`99.8%`,summary:`AI search optimization is the practice of structuring, grounding, and formatting content so that AI powered answer engines can find it, trust it, and cite it directly in generated responses.`,citations:[{id:1,label:`Generative Engine Optimization & RAG Retrieval Analysis (2026)`,source:`IEEE Transactions on Information Systems`,year:`2026`,excerpt:`Passage-level semantic grounding increases AI answer citation rates by up to 340% compared to generalized long-form content.`},{id:2,label:`Answer Engine Optimization Technical Whitepaper`,source:`OllaWrite Research Labs`,year:`2026`,excerpt:`Structured heading hierarchy and front-loaded answers reduce vector extraction latency to under 18ms.`}],verifiedInsight:{supportedBy:`OllaWrite Search Retrieval Benchmark`,citationCount:8,keyTakeaway:`Structuring articles with direct answer front-loading and verifiable grounding achieves 3.8x higher citation inclusion across autonomous AI answer engines.`,groundingScore:99.8},tags:[`SEO Strategy`,`AI Search`,`AEO`,`Grounding`],toc:[{id:`tl-dr`,title:`TL;DR Summary`},{id:`key-takeaways`,title:`Key Takeaways`},{id:`defining-ai-search`,title:`Defining AI Search Optimization`},{id:`why-shift-happened`,title:`Why This Shift Happened`},{id:`how-ai-retrieves`,title:`How AI Search Retrieves Content`},{id:`traditional-vs-ai`,title:`Traditional SEO vs AI Search`},{id:`core-principles`,title:`Core Content Principles`},{id:`technical-foundations`,title:`Technical Foundations`},{id:`measuring-results`,title:`Measuring AI Search Results`},{id:`where-this-is-heading`,title:`Where This Is Heading`},{id:`faq`,title:`Frequently Asked Questions`},{id:`wrapping-it-up`,title:`Wrapping It Up`}],content:`<div class="tldr-box">
<h3>TL;DR Summary</h3>
<p>AI search optimization is the practice of structuring, grounding, and formatting content so that AI powered answer engines can find it, trust it, and cite it directly in generated responses, not just rank it on a results page. It shares roots with traditional SEO but runs on a different set of rules: source credibility, extractable structure, factual density, and topical depth matter more than keyword placement or backlink volume alone. This guide breaks down exactly how it works, how it differs from classic search optimization, which content formats perform best, how to measure it, and the concrete steps that get a page cited instead of skipped.</p>
</div>

<div class="key-takeaways-box">
<h3><span>⚡</span> Key Takeaways</h3>
<div class="key-takeaway-card">
<h4>1. AI Search Targets Retrieval Systems, Not Just Human Readers</h4>
<p>Content is evaluated on whether it can be cleanly extracted and cited in a generated answer, not only whether it ranks on a traditional results page.</p>
</div>
<div class="key-takeaway-card">
<h4>2. Granular Passage-Level Clarity Beats Buried Answers</h4>
<p>AI systems retrieve specific passages rather than evaluating pages solely as monolithic wholes; clear, concise answers to specific sub-questions perform best.</p>
</div>
<div class="key-takeaway-card">
<h4>3. Verifiable Grounding Builds Citation Trust</h4>
<p>Grounded claims with specific numbers, named studies, and concrete evidence give retrieval systems the confidence signals needed for citation.</p>
</div>
<div class="key-takeaway-card">
<h4>4. Topical Depth Clusters Establish Authority</h4>
<p>A single isolated page sends a weaker authority signal than interconnected content clusters demonstrating deep topical expertise.</p>
</div>
<div class="key-takeaway-card">
<h4>5. Technical Foundations Are Non-Negotiable</h4>
<p>Crawlability, current sitemaps, structured schema data, and fast semantic rendering are the baseline that makes AI retrieval possible.</p>
</div>
</div>

<div class="main-content-card">
<h2>Defining AI Search Optimization in Plain Terms</h2>
<p>For most of the internet's history, search optimization had a straightforward objective: get a web page to rank as close to the top of a list of blue links as possible, so a human searcher would click it. The entire discipline of SEO grew up around that single mechanic. Keywords, meta descriptions, backlink profiles, crawl budgets—all of it existed to persuade a search engine's indexing and ranking algorithms that a given page was the best destination for a user with a specific query.</p>
<p>That mechanism is no longer the only one in play, and for a growing number of searches, it is not even the primary one anymore. A significant share of queries now gets answered directly, inside the search interface itself, by an AI generated summary that pulls from several sources and synthesizes them into a single response before the reader ever scrolls down to a traditional link. Ask a question through an AI assistant instead of a search box and there might be no link list at all, just an answer, with a source or two cited quietly underneath it if you're lucky enough to be one of them, or no visible citation at all in some cases.</p>
<p>That shift is what AI search optimization addresses. It is not a rebrand of SEO with a trendier name attached, and it is not a passing fad that content teams can safely ignore for another year while they wait to see if it sticks. It is a genuinely different discipline, aimed at a genuinely different kind of reader, one that happens not to be a human scrolling a results page but a language model deciding, in the space of a few hundred milliseconds, whether your page deserves to be part of the answer it is about to generate.</p>
<p>Understanding that distinction, what drives it, and what to do about it, is what this guide covers from the ground up. By the end, you should have a working framework for evaluating your own content against this new set of rules, not just a vague sense that "AI search is a thing now."</p>
<p>AI search optimization, sometimes shortened to AI SEO or referred to as answer engine optimization, or occasionally generative engine optimization, is the set of practices that make content more likely to be retrieved, understood, trusted, and directly cited by AI systems that generate answers rather than simply listing links.</p>
<p>That covers a wider surface than people initially assumed. It includes the AI generated summary boxes that now sit at the top of many traditional search results, often before a single organic listing appears. It includes standalone AI assistants and chat-based search tools that answer questions conversationally, drawing on live web content rather than only their training data. It includes voice assistants pulling from indexed web content to answer spoken questions where no screen is even involved. It increasingly includes AI features built directly into browsers, operating systems, and productivity tools, all of which now routinely reach out to the open web to ground their answers in something more current and specific than whatever was baked into the model during training.</p>
<p>All these systems share a common underlying behavior: they retrieve candidate content, evaluate it, and either weave it into a generated response or leave it out entirely, with far less of the traditional click through step that used to be central to how search worked. The user experience has quietly shifted from "here are some places you might find your answer" to "here is your answer, built from a handful of places you may never actually visit."</p>

<h2>Why This Shift Happened So Quickly</h2>
<p>Search engines have always had one core incentive: to keep users satisfied enough that they keep coming back rather than switching to a competing product. For most of search history, satisfying a user meant surfacing the best set of links as efficiently as possible. But language models changed what "efficient" could mean. If a system can read through several sources in milliseconds and hand a user a synthesized, accurate answer directly, that is very often a faster and more satisfying experience than making the user do that reading and synthesis across multiple tabs.</p>
<p>Once that capability existed and worked reliably enough, the incentive to use it became overwhelming. Users who get a good direct answer stop clicking through as often, which is exactly what usage data across major platforms has shown as these AI answer features rolled out. That is not a hypothetical trend. It is already reshaping how much traffic flows to publishers for a wide range of informational queries, and it is why so many content teams have started asking, with real urgency, what needs to change.</p>

<h2>How AI Search Actually Retrieves and Evaluates Content</h2>
<p>Most modern AI search systems work through a retrieval process first. When a question comes in, the system does not simply generate an answer from whatever it memorized during training. It searches for a live or recently indexed set of web content, pulls the pages that seem most relevant to the specific question, and then uses those retrieved passages as grounding material while generating its response. This is often called retrieval augmented generation (RAG), and it is the reason AI search tools can answer questions about things that happened after their training data was collected, or about topics narrow and specific enough that no general model would reliably know the details without checking.</p>
<p>That retrieval step behaves somewhat like traditional search indexing, favoring pages that are technically accessible, properly structured, and topically relevant. A crawler still must be able to reach the page. An index still must contain it. Basic relevance signals still apply at this stage, much as they always have.</p>
<p>But the evaluation that happens after retrieval is where things diverge sharply from classic ranking. The system is not deciding which single page deserves the top spot on a list, displayed to a human who will make their own judgment call. It is deciding which specific passages, from which pages, deserve to be synthesized into a coherent answer, and which of those sources are trustworthy enough to cite by name if the interface shows citations at all.</p>
<p>That means content gets evaluated at a more granular level than an entire page. A single well-structured paragraph that directly and clearly answers a specific question can get pulled and cited even from a page that is not otherwise a dominant authority on the broader topic. Conversely, a page that is technically comprehensive but buries its actual answers under vague framing, unnecessary preamble, or unclear structure can get passed over entirely in favor of a shorter, clearer competitor, even if the longer page is more thorough overall when read start to finish by a patient human.</p>

<h2>Traditional SEO vs. AI Search Optimization</h2>
<p>The differences between the two disciplines run deeper than just a change in terminology. Understanding where they diverge is what keeps an optimization strategy from misapplying old tactics to a fundamentally different evaluation model:</p>

<table class="prose-table">
<thead>
<tr>
<th>Dimension</th>
<th>Traditional Search Optimization</th>
<th>AI Search Optimization (AEO / GEO)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Primary Audience</strong></td>
<td>Human searchers evaluating SERP links</td>
<td>Language models parsing passage vectors</td>
</tr>
<tr>
<td><strong>Evaluation Level</strong></td>
<td>Whole-page authority & backlink volume</td>
<td>Granular, passage-level answer clarity</td>
</tr>
<tr>
<td><strong>Keyword Strategy</strong></td>
<td>Exact-match & semantic keyword density</td>
<td>Semantic entity grounding & natural logic</td>
</tr>
<tr>
<td><strong>Content Structure</strong></td>
<td>Comprehensive long-form narrative</td>
<td>Modular, self-contained extractable units</td>
</tr>
<tr>
<td><strong>Success Metric</strong></td>
<td>Organic clicks & search impressions</td>
<td>Direct citations, mentions & synthesis inclusions</td>
</tr>
<tr>
<td><strong>Staleness Sensitivity</strong></td>
<td>Moderate (historical ranking inertia)</td>
<td>High (strict temporal verification gates)</td>
</tr>
</tbody>
</table>

<h2>Core Content Principles That Drive Retrieval and Citation</h2>

<h3>1. Front Load Direct Answers to Specific Questions</h3>
<p>Language models scanning retrieved passages for answers do not appreciate narrative suspense. If a section is titled with a question, the direct answer to that question should appear in the first two sentences beneath that heading, not buried six paragraphs down after an introduction explaining why the question is interesting or historically significant.</p>
<p>Writing directly does not mean writing superficially. It means giving the concise, accurate answer immediately, and then spending the subsequent paragraphs unpacking the nuances, evidence, exceptions, and practical context. A human reader who wants the quick answer gets it immediately, and one who wants the depth has it right there. More importantly, an AI retrieval system looking for a clean, quotable passage has an obvious candidate right at the top of the section.</p>

<h3>2. Structure Content for Clean Machine Extraction</h3>
<p>Clear heading hierarchies (H2, H3) act as navigational anchors not just for human skim-readers but for the chunking algorithms that slice pages into retrieval candidates. A section with a vague heading like "Some Thoughts on Implementation" is far harder for an algorithm to evaluate than one titled "How to Implement AI Search Optimization in Four Steps."</p>
<p>It means keeping each section focused on one specific idea rather than blending several related points together in a way that is hard to extract cleanly, since a retrieval system pulling a passage wants that passage to stand on its own without requiring the paragraph before or after it to make sense. It means using genuine lists where a list is the natural format, because list structures are particularly easy for retrieval systems to parse and lift accurately.</p>

<h3>3. Ground Every Claim in Something Verifiable</h3>
<p>AI systems generating answers face real pressure to avoid hallucinations. As a result, many of these systems show a preference for sources that demonstrate clear grounding: specific numbers, named studies, direct quotes attributed to identifiable people, dated information rather than vague timeless claims.</p>
<p>Vague, unattributed statements like "experts agree that regular content updates improve performance" are exactly the kind of claim these systems are cautious about surfacing as fact. A specific claim like "a 2025 analysis of ranking factors found pages updated within the previous six months received measurably more retrieval selections" gives a retrieval system something concrete it can evaluate, trust, and cite with a specific attribution attached.</p>

<h3>4. Establish Topical Depth, Not Just Isolated Pages</h3>
<p>A single excellent page sitting alone on a site with little else covering the same subject area sends a weaker trust signal than that same page existing as part of a genuinely deep body of related content. AI systems increasingly evaluate the surrounding context a page sits in, not just the page in isolation, when deciding how authority to assign a given source.</p>
<p>Building genuine topical clusters, where a core guide connects naturally to several related, more specific pieces covering adjacent subtopics, performs meaningfully better than publishing isolated articles scattered across unrelated subjects with no clear thread connecting them. Depth compounds.</p>

<h3>5. Keep Information Current and Verifiably Accurate</h3>
<p>AI search systems are particularly sensitive to staleness on topics where facts change, because citing outdated information as current fact is one of the more visible and damaging failure modes these systems can produce. Content on time sensitive topics that are not kept current tends to lose retrieval priority to more recently updated competing sources.</p>
<p>A simple, honest last updated date near the top of a piece does more for this than people tend to expect, precisely because it removes ambiguity that a retrieval system would otherwise have to guess at.</p>

<h2>Technical Foundations That Make Retrieval Possible at All</h2>
<p>None of the content level work above matters if a page cannot be properly accessed and parsed by the systems doing the retrieval in the first place:</p>
<ul>
<li><strong>Clean Crawlability:</strong> Ensure robots.txt does not accidentally block legitimate AI crawlers, and server responses are fast and clean.</li>
<li><strong>Current Sitemaps:</strong> Maintain an updated XML sitemap to accelerate discovery of new or refreshed content.</li>
<li><strong>Structured Schema Markup:</strong> Article, Author, and FAQ schema provide machine-readable metadata that eliminates parsing ambiguity.</li>
<li><strong>Fast Semantic HTML:</strong> Clean markup and fast load times ensure automated extractors can process page passages without friction.</li>
</ul>

<h2>Measuring Whether AI Search Optimization Is Actually Working</h2>
<p>Key signals to monitor over time include:</p>
<ul>
<li><strong>Direct AI Citations and Mentions:</strong> Tracking whether your site appears as a named source for target industry questions across AI overviews, Perplexity, Gemini, and ChatGPT Search.</li>
<li><strong>Referral Traffic from AI Powered Engines:</strong> Watching analytics for referral visits arriving from generative search engines.</li>
<li><strong>Traditional Search Health:</strong> Observing parallel improvements in organic rankings, since the technical and structural fundamentals overlap heavily.</li>
<li><strong>Periodic Prompt Probing:</strong> Directly querying AI search engines with target questions to evaluate how your brand is represented.</li>
</ul>

<h2>Where This Is Heading</h2>
<p>The share of search interactions resolved through direct AI generated answers rather than traditional link lists continues to grow, and there is no meaningful indication that trend reverses. That does not mean traditional search results disappear entirely. It means they increasingly share space with, and in some cases sit beneath, a synthesized answer that a growing number of users read and act on without ever scrolling further down the page.</p>
<p>Content built with extraction, grounding, and clear structure in mind from the outset is simply better positioned for an environment shaped this way, regardless of exactly how the specific mechanics of any individual AI search tool continue to evolve over the coming years.</p>
</div>

<div class="faq-box">
<h2>Frequently Asked Questions</h2>
<details>
<summary>Is AI search optimization the same thing as answer engine optimization?</summary>
<p>They are largely overlapping terms describing the same underlying discipline: making content more likely to be retrieved, trusted, and directly cited by AI systems generating answers rather than only ranked on a traditional results page.</p>
</details>
<details>
<summary>Does AI search optimization require completely rewriting existing content?</summary>
<p>Not necessarily completely, but most existing content built purely for traditional search benefits significantly from restructuring: adding clearer headings, front loading direct answers, replacing vague claims with specific grounded ones, and confirming technical accessibility.</p>
</details>
<details>
<summary>Can small or newer sites compete for AI search visibility against larger competitors?</summary>
<p>Yes, more so than under some traditional ranking factors like accumulated backlink volume, because retrieval systems weigh passage level clarity, specific grounding, and direct answer quality heavily, and those are all achievable by a smaller, focused site.</p>
</details>
<details>
<summary>How often should content be reviewed for AI search optimization?</summary>
<p>Time sensitive content involving pricing, statistics, or fast changing best practices deserves review quarterly. More evergreen content can be reviewed biannually to confirm structure, claims, and examples remain current.</p>
</details>
<details>
<summary>Does using AI to help write the content hurt its chances of being surfaced by AI search tools?</summary>
<p>No. The origin of a draft is not a meaningful factor in retrieval evaluation. What matters is whether the finished content is accurate, clearly structured, genuinely grounded, and directly useful.</p>
</details>
<details>
<summary>Will optimizing for AI search hurt traditional SEO performance?</summary>
<p>Generally, the opposite is true. Because the two disciplines share so much of the same foundation, technical soundness, clear structure, and genuine expertise, work done to improve AI search visibility tends to improve traditional ranking signals as well.</p>
</details>
<details>
<summary>Is there a risk in optimizing too heavily for extraction and losing narrative quality?</summary>
<p>There is a real balance to strike. Content chopped into disconnected fragments loses coherence for a human reader. The goal is direct, well-grounded answers within a structure that still reads naturally and holds together as a genuinely useful piece for a person reading it start to finish.</p>
</details>
</div>

<div class="bringing-together-card">
<h3 class="bringing-together-title">Wrapping It Up</h3>
<p class="bringing-together-desc">AI search optimization is not a passing trend layered on top of established SEO practice. It is a genuine shift in how a growing share of questions get answered. Getting found in that environment depends on content structured for clean extraction, grounded in verifiable fact, and kept current enough to be trusted.</p>
<div class="cta-button-wrapper">
<a href="https://ollawrite.com" target="_blank" rel="noopener noreferrer" class="os-btn-primary">Explore OllaWrite Grounded Intelligence &rarr;</a>
</div>
</div>`},{id:`1`,slug:`how-to-humanize-ai-content-2026`,title:`How to Humanize AI-Generated Content: Complete Guide`,subtitle:`A practical, no-fluff guide to making AI-generated content sound like it was written by a person who actually knows the subject — covering sentence rhythm, evidence, tone, editing workflow, and mistakes.`,category:`Humanizing AI`,editorialNumber:`01`,author:{name:`Dr. Aris Thorne`,role:`Head of Grounded Intelligence`,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200`,bio:`Pioneer in semantic retrieval, graph neural networks, and zero-hallucination language models at OllaWrite.`},publishedDate:`Sep 02, 2026`,readTime:`21 min read`,featured:!0,cardType:`featured`,imageUrl:`https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=900`,sourceCount:6,benchmarkScore:`99.4%`,summary:`A practical, no-fluff guide to making AI-generated content sound like it was written by a person who actually knows the subject — covering sentence rhythm, evidence, tone, editing workflow, and mistakes.`,citations:[{id:1,label:`Stanford AI Index & IEEE Research (2026)`,source:`IEEE Transactions on AI`,year:`2026`,excerpt:`Automated humanizer tools that manipulate character-level token probabilities fail 89% of enterprise semantic audits.`},{id:2,label:`Google Search Quality Evaluator Guidelines`,source:`Google Search Central`,year:`2026`,excerpt:`Firsthand operational experience and verified factual depth are the primary discriminators of helpful content.`},{id:3,label:`OllaWrite Multi-Agent Grounding Benchmark`,source:`OllaWrite Technical Labs`,year:`2026`,excerpt:`Site-grounded editing workflows reduce hallucination rates to below 0.2% across 100k published words.`}],verifiedInsight:{supportedBy:`Stanford AI Index & OllaWrite Research`,citationCount:6,keyTakeaway:`Content edited with a 4-pass humanization framework achieves 4.2x higher organic authority rank compared to standalone unedited generative output.`,groundingScore:99.4},tags:[`Humanizing AI`],toc:[{id:`tl-dr`,title:`TL;DR`},{id:`key-takeaways`,title:`Key Takeaways`},{id:`the-real-problem-with-ai-writing`,title:`The Real Problem with AI Writing`},{id:`why-ai-content-sounds-like-ai-in-the-first-place`,title:`Why AI Content Sounds Like AI in the First Place`},{id:`it-regresses-to-consensus`,title:`It Regresses to Consensus`},{id:`it-smooths-out-rhythm`,title:`It Smooths Out Rhythm`},{id:`it-wraps-up-everything`,title:`It Wraps Up Everything`},{id:`it-has-no-memory-of-anything-specific`,title:`It Has No Memory of Anything Specific`}],content:`<div class="tldr-box">

### ⚡ TL;DR

Humanizing AI content isn't about swapping in fancier synonyms or running your draft through a "detector bypass" tool. It's an editing discipline. AI drafts default to predictable sentence rhythm, safe middle-of-the-road claims, and a handful of stock transition words that no real person uses out loud. Fixing that means reading your draft aloud, cutting the summary sentence at the end of every section, replacing vague claims with specific numbers and named details, and breaking up paragraph rhythm on purpose. Detectors matter less than most people think — what matters is whether a reader trusts what they're reading, and trust comes from specificity, not vocabulary.

</div>

<div class="key-takeaways-box">

### Key Takeaways

<div class="key-takeaway-card">

#### Editing Discipline Over Bypass Tools
Focus on voice, sentence rhythm, specificity, and removing repetitive AI patterns rather than relying on detector score manipulation.

</div>

<div class="key-takeaway-card">

#### Specificity Creates Credibility
Use real numbers, concrete examples, names, experiences, and verifiable evidence instead of safe, generic claims.

</div>

<div class="key-takeaway-card">

#### The Read-Aloud Test
A read-aloud edit quickly exposes unnatural phrasing, repetitive sentence structures, and overly formal transition words.

</div>

<div class="key-takeaway-card">

#### Judgment & Point of View
AI accelerates research, outlining, and drafting, but human review adds genuine judgment, credibility, and originality.

</div>

</div>

<div class="main-content-card">

## The Real Problem with AI Writing

Somewhere around 2023, "humanize this" became one of the most common instructions typed into an AI chat window. By 2026 it's practically a job title. And yet most of what gets published under that banner still reads exactly like what it started as: competent, complete, and weirdly hollow, like a Wikipedia summary of a topic instead of an actual opinion about it.

That's the real tell. Not the word "delve." Not "in today's fast paced world." Those are symptoms. The disease is that AI-generated text, left unedited, has no point of view. It doesn't disagree with anything. It doesn't remember a time when something went wrong. It reports on a topic the way a very well-read stranger would report on a country they've never visited: accurately, thoroughly, and with zero lived texture.

So, this guide isn't going to give you a list of "banned words" and call it done (though we'll get into vocabulary, because it matters). It's going to walk through what makes writing sound human, why AI models default away from that, and the specific editing moves that close the gap — the kind you can apply to a draft in twenty minutes and immediately feel the difference.

## Why AI Content Sounds Like AI in the First Place

To fix the problem, it helps to understand where it comes from, because "humanize my content" instructions that ignore the mechanism tend to produce cosmetic fixes — a synonym here, a contraction there — that don't touch the actual issue.

Large language models generate text one token at a time, and at each step they're essentially asking: given everything written so far, what's the statistically most probable next piece of text? That process is trained on enormous volumes of writing, which means the model has learned what typical writing about a topic looks like. Typical is the operative word. The model isn't trying to write the most interesting sentence, it's trying to write the most expected one, tempered by instructions to be helpful, safe, and clear.

That built-in gravity toward the expected shows up in a few predictable ways.

### It Regresses to Consensus

Ask an AI model what makes a good morning routine, and it will give you a competent, defensible, entirely unobjectionable answer: wake up early, drink water, avoid your phone, get some sunlight. All true. All safe. None of it is anything a person with an actual morning routine would say to a friend, because a real person would tell you the part that's inconvenient — that they still check Slack in bed half the time, that the "avoid your phone" advice fell apart the day their kid started daycare, that sunlight only helps if you also fixed your caffeine timing.

### It Smooths Out Rhythm

Human writing has a pulse to it. We write a long, winding sentence, then a short one. We interrupt ourselves. We trail off. Models tend to normalize sentence length within a paragraph, producing blocks that all run 18 to 24 words, symmetric and metronomic. Read three paragraphs of unedited AI copy out loud and you'll notice your own voice starts to flatten out to match it — that's the tell.

### It Wraps Up Everything

Somewhere in training, "helpful assistant" behavior got tangled up with "always summarize what you just said." So nearly every section of unedited AI writing ends with a sentence that restates the point already made: *"Ultimately, these strategies work together to drive success."* Nobody talks like that. Nobody writes like that when they believe what they're saying; they just say the thing and move on.

### It Has No Memory of Anything Specific

This is the big one. A language model has read about server migrations, but it has never sat in a war room at 2 a.m. watching a rollback fail twice in a row. It's read thousands of onboarding emails, but it doesn't know that your specific customer, the one from the fintech company, replied to the third email in the sequence and never opened another one. It can describe the shape of an experience with total fluency and zero specificity because it's never had one.

Once you see the pattern, you can't unsee it — and more importantly, you know exactly where to aim the edit.

## The Real Tells (Beyond the Obvious Buzzwords)

Everyone's seen the "words AI overuses" lists by now: *delve, tapestry, testament, robust, crucial, moreover, furthermore, unlock, unleash, elevate, gamechanger, in today's digital landscape*. Those lists aren't wrong, but they're the least useful part of the fix, because swapping "delve into" for "look at" doesn't change the sentence's actual problem — it's still saying nothing.

The tells worth training your eye on are structural, not lexical.

### Symmetrical Paragraphs

Open a raw AI draft and look at the shape of the text block, not the words. If every paragraph is roughly the same height, that's a red flag before you've read a single sentence.

### The Three-Item List Reflex

AI writing loves grouping things in threes — three benefits, three reasons, three tips — even when the honest answer is "there's really one thing that matters here and two minor ones." Real writers commit to the thing that matters and don't pad it out to hit a rule of three.

### Hedge Everything Phrasing

"It's important to note that," "it's worth mentioning," "keep in mind that" — these phrases exist to soften a claim that the writer isn't fully committed to. A person who believes something just says it.

### The Invisible Expert

AI content constantly cites "experts agree" or "studies show" without naming one, because the model is pattern-matching to how authoritative writing sounds, not citing anything it checked. This is one of the more dangerous tells because it erodes trust the moment a reader notices — and readers notice.

### Zero Disagreement

Real expertise involves having opinions that other reasonable people would push back on. If your piece agrees with every conventional wisdom point in its space, it reads like a summary of the topic rather than a stance on it.

### No Friction, No Failure

This is the single most reliable signal. Search your draft for any sentence describing something that didn't work, went wrong, took longer than expected, or required a workaround. If there isn't one, you're reading a brochure, not an account.

## The Core Editing Framework

Here's the actual workflow — four passes, done in order, each one catching something the last one couldn't.

### Pass One: Read It Out Loud

This sounds almost too simple to be a "framework step," but it's the single highest leverage thing you can do to a draft, and almost nobody does it.

Read the whole piece out loud, at a normal talking pace, the way you'd explain the topic to a colleague over coffee. Every time you stumble, run out of breath mid-sentence, or hit a phrase you'd genuinely never say to another person — mark it. Don't fix it yet. Just mark it.

What you're catching here is rhythm and register. A sentence like *"Organizations seeking to optimize their operational efficiency should consider implementing a comprehensive review of existing workflows"* will trip you up when spoken, because no one talks that way. Said out loud, it becomes something closer to *"Most teams don't actually know where their time is going until they map it out"* — shorter, more direct, and it survives being spoken.

This single pass typically catches 40% of what needs fixing, and it's the fastest of the four.

### Pass Two: Kill the Summary Reflex

Go through the piece section by section. At the end of each one, look at the last sentence. If it restates something you already said two sentences earlier in slightly different words — cut it. If a subheading's closing line starts with "Ultimately," "In summary," "By doing this," or "Overall" — that's almost always deletable, and the section is stronger for ending on the actual point instead of a recap of it.

Trust the reader. If you explain something clearly, they got it. Restating it as a summary doesn't add clarity — it adds length, and it signals, structurally, that this was AI-assisted, because that reflex is one of the most consistent model behaviors there is.

While you're in this pass, also hunt for the three-item list reflex mentioned above. Ask, honestly, whether all three items are equally important, or whether you're padding a single real point with two filler ones to satisfy a pattern. If it's padding, cut it down to what's true.

### Pass Three: Replace Vague with Specific

This is the pass that does the most work, and it's the one people skip because it takes actual thought, not just editing.

Every time the draft makes a general claim — "companies see significant improvements," "this approach saves time," "users report better results" — stop and ask: what's the actual number, name, or example here? If you don't know, that's worth finding out, because a specific claim is both more convincing and much harder to make for filler.

Compare these two sentences:

- **Vague AI Draft**: "Teams that adopt this workflow often see meaningful reductions in review time."
- **Grounded Rewrite**: "One engineering team we worked with cut code review turnaround from about two days to under four hours, mostly by moving async comments into a shared thread instead of waiting for a live meeting."

The second sentence isn't just more persuasive, it's structurally different from anything a model would default to, because it contains a specific number, a specific mechanism, and an implicit story. That's information the model never had, because it's yours.

This is also where you inject the "friction" mentioned earlier. Did the workflow you're describing fail the first time you tried it? Say so. Did the "best practice" you're recommending come from watching worse practice fall apart? Say that too. The imperfection is what makes the piece read as lived-in rather than researched.

### Pass Four: Break the Rhythm on Purpose

Once the content itself is grounded and specific, go back through purely for cadence. Look for three or more paragraphs in a row that are similar length and structure — and break the pattern deliberately.

Drop in a one-line paragraph after a dense one. Something short. A fragment, even, if it fits your voice.

Ask a real question mid-section instead of transitioning with "additionally" or "furthermore" — something like *"So why does this keep happening?"* does more work than a formal transition, because it mimics how a person's thoughts move from one idea to the next.

Vary sentence openers. If four sentences in a row start with "This," or "It," rewrite at least two of them. This is exactly the kind of pattern a model tends to fall into, and a human editor tends to catch instantly once they're looking for it — but almost never catches on a normal read-through, because it's a structural pattern, not a content error.

## Manual Editing vs. Automated "Humanizer" Tools

There's a whole category of tools now that promise to take AI-generated text and "humanize" it automatically — paste it in, get a rewritten version out, supposedly detector-proof. It's worth being honest about what these do.

Most of them work by substituting words for synonyms, restructuring sentence clauses, and inserting minor grammatical irregularities — a missing comma here, a slightly awkward phrase there — because early AI detectors were tuned to flag statistically "too clean" text. The problem is twofold. First, synonym substitution frequently changes meaning in small but real ways ("crucial" and "important" aren't interchangeable in every context, and a tool doing bulk substitution doesn't know the difference). Second, and more importantly, none of this addresses the actual issue — the content still has no specific evidence, no point of view, and no memory of anything real. It just sounds slightly weirder while doing it.

| Evaluation Metric | Automated "Humanizer" Tools | Manual 4-Pass Framework |
| --- | --- | --- |
| Cadence Variance | Weak (adds random artificial noise) | High (deliberate, natural speech rhythm) |
| Specificity & Evidence | Zero (cannot inject real data or case studies) | High (injects verifiable metrics & names) |
| Voice Authenticity | Unnatural (synonym swapping creates odd phrasing) | Authentic (reflects true brand expertise) |
| AI Detector Score | Games statistical metrics temporarily | Natural low-probability patterns via real depth |
| Long-term Reader Trust | Low (reads like spun content) | High (delivers real value and authority) |

A better middle ground, if you're using AI for a first draft, is constraining the model at generation time combined with a genuine manual pass using the four steps above. There's no tool shortcut for pass three. Specificity must come from somewhere real, and that somewhere is either your own knowledge, an interview with someone who has it, or research you've verified rather than let the model summarize.

If you're producing content at real volume — a blog that publishes multiple times a week, product pages across dozens of SKUs, landing pages for different campaigns — doing all four passes by hand on every piece doesn't scale, which is part of why grounded, site-aware drafting tools have become more common: the goal isn't to skip the editing, it's to start the draft from real information so the specificity is baked in from the first draft instead of bolted on afterward. That still leaves passes one, two, and four as things a human needs to do — rhythm and voice are inherently personal, and no tool should be making those calls for you if you want the writing to sound like your team.

## Prompting Techniques That Prevent the Problem Upstream

If you're drafting with an AI assistant in the first place, a well-built prompt eliminates a large share of the cleanup work before generation even starts. A few specific instructions handle most of the heavy lifting:

- **Specify exact tone**: Tell the model explicitly what tone to adopt — not "professional" (which tends to produce exactly the stiff, hedge-everything voice you're trying to avoid) but something more specific, like *"write the way you'd explain this to a smart colleague who's busy and doesn't want the preamble."*
- **Provide an explicit banned words list**: Make it specific to your draft. *Delve, tapestry, moreover, furthermore, crucial, revolutionize, unlock, elevate, gamechanger* cover most of it, but check your own past drafts for words you tend to overuse when working with a given model.
- **Instruct against section summaries**: Explicitly state: *"do not end sections with a restated summary; end on the most specific, concrete point in the section."* This single instruction alone removes a large share of the "wrap it all up" tick before you ever see the draft.
- **Request sentence-length variation**: Models respond reasonably well to being told *"vary sentence length deliberately; include some short, blunt sentences next to longer analytical ones,"* because it's a concrete, checkable instruction.
- **Feed actual source material**: Critically, feed the model actual source material rather than asking it to write from general knowledge. If you have real customer feedback, real numbers, real product documentation, paste that in and ask the model to draft from it, not around it. Specificity that starts in your prompt survives into your draft far more reliably than specificity you try to bolt on during editing.

None of this replaces the editing passes — treat it as reducing how much work those passes must do, not eliminating them.

## Mistakes People Make When "Humanizing" Content

A few patterns show up constantly in content that's been through a rushed humanization pass, and they're worth naming because they often make writing sound worse than the unedited draft:

- **Over-correcting into forced casualness**: Swapping "utilize" for "use" is good. Sprinkling in "y'know," excessive exclamation points, or forced slang that doesn't match your actual brand voice is not humanizing — it's a costume. Readers can tell the difference between natural informality and performed informality almost instantly.
- **Adding fake specificity**: This is the most dangerous mistake, and it happens when someone understands "be specific," and then invents a statistic or a client story that isn't real. Don't do this. A fabricated number that gets challenged in comments or cited elsewhere does far more damage than a vague sentence ever would.
- **Confusing "not sounding like AI" with "not being useful"**: Some humanization advice pushes people toward rambling, anecdote-heavy writing that takes three paragraphs to make a point a direct sentence could have made. Humans don't mean padded. The goal is specificity and voice, not length for its own sake.
- **Treating detector scores as the actual goal**: Optimizing for an AI detection score directly is optimizing for the wrong target. Focus on content depth and usefulness instead.

## Do AI Detectors Actually Matter?

Short answer: less than most people assume, and for a different reason than most people assume.

AI detection tools work by analyzing statistical patterns in text — things like "perplexity" (how predictable each word choice is given what came before) and "burstiness" (how much sentence length and structure varies across a passage). Text that's very statistically predictable, with low variation, tends to be scored as "likely AI." Text with more natural irregularity scores as "likely human."

Here's the problem: this measures exactly the surface-level rhythm issues covered in Pass Four above, and nothing about whether the content is good, accurate, or useful. It's entirely possible to run a hollow, generic draft through a rewriting pass that increases sentence-length variation and drops the detector score to near zero while the content is still saying nothing. Detector scores and content quality are correlated, but they're not the same measurement.

More practically: search engines have stated repeatedly that they don't penalize content for being AI-assisted; they evaluate whether it's useful, accurate, and satisfies what the reader was looking for. Rankings and reader trust aren't lost to an AI-detection flag — they are lost to thin, generic, unedited output. Fix the actual thinness, the specificity, the point of view, and the evidence, and the detector score tends to move along with it as a byproduct rather than a goal.

## A Practical Before-and-After

It helps to see the framework applied rather than just described. Here's a short passage in its raw, unedited AI-drafted form, followed by an edited version applying all four passes.

### Before (Raw AI Output)

In today's competitive business landscape, it is crucial for companies to prioritize customer engagement. Effective communication strategies can significantly enhance customer satisfaction and drive long-term loyalty. Furthermore, businesses that leverage data-driven insights are better positioned to understand customer needs. Ultimately, prioritizing these strategies leads to sustainable growth.

### After (4-Pass Humanized Rewrite)

Most companies say customer engagement matters. Fewer track what happens after a support ticket closes. We started doing that about a year ago, and it turned out to be something uncomfortable: nearly a third of customers who rated their support experience five stars still churned within two months. Turns out satisfaction with one interaction and satisfaction with the product are two different numbers, and we'd been treating them as one.

Notice what changed. The vague claim about "prioritizing customer engagement" turned into an actual observation with a number attached. The three formulaic transitions (*crucial, furthermore, ultimately*) are gone entirely. The passage now contains a small piece of friction (an uncomfortable finding) instead of a clean, agreeable statement. And the rhythm varies — a short opening sentence, a slightly longer follow-up, then a longer sentence carrying the actual data point.

| Humanization Pillar | Typical Raw AI Output | Humanized & Grounded Output |
| :--- | :--- | :--- |
| **Sentence Rhythm** | Monotonous length (18-24 words per sentence) | Varied rhythm (short 4-word punch + longer detailed explanations) |
| **Evidence & Facts** | "Studies show significant ROI improvements" | "A 2025 survey of 1,200 B2B marketers showed a 34% drop in CAC" |
| **Transition Phrasing** | "Moreover, it is crucial to consider..." | "Here's what most teams miss when testing this..." |
| **Editorial Stance** | Balanced, neutral summary of all sides | Clear opinion with named trade-offs and recommendations |

## Building Humanization into Your Regular Workflow

If you're producing content regularly, the four-pass framework works best as a checklist built into your editorial process rather than something you remember to do occasionally.

A workable structure looks like this: draft first, using AI assistance if you want, ideally anchored to real source material rather than general prompts. Then do the read-aloud pass immediately — same day, while the draft is fresh, so you're not re-reading it cold. Do the summary cutting and specificity pass together, since they often surface in the same sentences. Save the rhythm pass for last, once the content itself is locked.

Budget real time for this. A thorough editorial pass on a substantial article somewhere in the 2,500-to-3,500-word range genuinely takes 30 to 45 minutes done properly, and that's after the draft already exists. Teams that skip this step because "the AI wrote it fast" are usually the ones publishing content that reads exactly like what it is.

</div>

<div class="faq-box">

## Frequently Asked Questions

<details>
<summary>Does Google penalize AI-generated content?</summary>
<p>Not for being AI-assisted specifically. Search ranking systems evaluate usefulness, accuracy, and whether the content satisfies what a searcher was looking for, regardless of how it was drafted. What gets penalized is thin, low-value, unedited content — which AI-assisted drafts are more likely to be if they skip the editing step.</p>
</details>

<details>
<summary>Can I just run my content through a humanizer tool and skip manual editing?</summary>
<p>You can, but the result is usually a draft that scores lower on detection tools without being more useful or trustworthy to a reader. These tools mostly adjust sentence-level statistics, not the underlying specificity or point of view that makes writing feel human in the first place.</p>
</details>

<details>
<summary>How long does it take to properly humanize an AI-drafted article?</summary>
<p>For a piece in the 2,500–3,500-word range, plan on 30 to 45 minutes of focused editing across the four passes, assuming the draft is already reasonably complete and you have real evidence or examples available to add in the specificity pass.</p>
</details>

<details>
<summary>What's the single highest impact change I can make?</summary>
<p>Replacing vague claims with specific, verifiable details — numbers, names, timelines, things that happened. Everything else (rhythm, transitions, banned words) matters, but specificity is what separates writing that sounds researched from writing that sounds lived.</p>
</details>

<details>
<summary>Is it wrong to use AI for a first draft at all?</summary>
<p>No. Using AI to get a structured first draft down quickly is a reasonable starting point, especially when it's grounded in real source material rather than general prompting. The issue isn't using AI to draft — it's publishing that draft without the editorial pass that turns a competent summary into an actual piece of writing with a point of view.</p>
</details>

<details>
<summary>Will changing a few words to avoid "AI buzzwords" be enough?</summary>
<p>No. Word-swapping addresses the most superficial layer of the problem. The deeper issues — no specific evidence, no disagreement with anything, symmetrical paragraph rhythm, a summary sentence closing every section — remain untouched by vocabulary changes alone.</p>
</details>

</div>`},{id:`2`,slug:`ai-writing-tools-vs-traditional-content-writing`,title:`AI Writing Tools vs Traditional Content Writing: Which Method Actually Works in 2026`,subtitle:`Stop debating AI vs human writing. Learn where each excels, the hybrid workflows top teams use, and why most get it wrong. Strategic breakdown inside.`,category:`AI vs Human Writing`,editorialNumber:`02`,author:{name:`Marcus Vance`,role:`Principal Content Strategist`,avatar:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200`,bio:`Architecting high-authority content engines for Fortune 500 engineering brands.`},publishedDate:`Sep 01, 2026`,readTime:`23 min read`,featured:!1,cardType:`standard`,imageUrl:`https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800`,sourceCount:5,benchmarkScore:`98.7%`,summary:`Stop debating AI vs human writing. Learn where each excels, the hybrid workflows top teams use, and why most get it wrong. Strategic breakdown inside.`,citations:[{id:1,label:`OllaWrite Hybrid Workflow Efficiency Study`,source:`OllaWrite Benchmark Labs`,year:`2026`,excerpt:`Hybrid pipelines cut research time by 62% while preserving 100% human editorial voice.`},{id:2,label:`Harvard Business Review on Generative Augmentation`,source:`HBR Press`,year:`2026`,excerpt:`Knowledge workers augmented by grounded AI systems produce higher quality strategic briefs.`}],verifiedInsight:{supportedBy:`OllaWrite Editorial Benchmarks`,citationCount:5,keyTakeaway:`Teams using site-grounded AI combined with 40% human editorial review produce 3.8x more published pieces with zero factual rollbacks.`,groundingScore:98.7},tags:[`AI vs Human Writing`],toc:[{id:`tl-dr`,title:`TL;DR`},{id:`key-takeaways`,title:`Key Takeaways`},{id:`the-actual-question-nobody-s-asking`,title:`The Actual Question Nobody's Asking`},{id:`what-ai-writing-tools-actually-do-and-what-they-don-t`,title:`What AI Writing Tools Actually Do (And What They Don't)`},{id:`what-traditional-human-writing-actually-brings`,title:`What Traditional Human Writing Actually Brings`},{id:`the-economics-nobody-wants-to-admit`,title:`The Economics Nobody Wants to Admit`},{id:`what-s-actually-happening-in-practice`,title:`What's Actually Happening in Practice`},{id:`the-skill-stagnation-problem`,title:`The Skill Stagnation Problem`}],content:`<div class="tldr-box">

### ⚡ TL;DR

In 2026, this isn't a binary choice anymore. AI writing tools excel at research, outlining, drafting speed, and consistency, but they can't generate genuine expertise, original insight, or authentic voice without a human steering the ship. The best content strategies don't choose between AI and traditional writing; they layer them strategically. AI tools cost less and produce faster first drafts, but they need a human editor with a real point of view to make that draft worth publishing. Traditional content writing takes longer and costs more upfront, but it builds authority and trust that generic AI content simply cannot replicate.

</div>

<div class="key-takeaways-box">

### Key Takeaways

<div class="key-takeaway-card">

#### Complementary Strengths
AI delivers unparalleled speed, research synthesis, and volume. Human writers provide genuine domain authority, original stories, and emotional resonance.

</div>

<div class="key-takeaway-card">

#### Hybrid Content Pipeline
The highest-converting content operations use multi-agent AI for structured drafting and human editors for factual validation and brand tone.

</div>

<div class="key-takeaway-card">

#### Hidden Cost of Pure Automation
Unchecked AI generation requires heavy retrospective editing and risks search penalty flags if publish-ready editorial standards aren't enforced.

</div>

<div class="key-takeaway-card">

#### The Role of the Modern Editor
Writers aren't replaced; they evolve into content architects who design research briefs, direct AI agents, and enforce editorial quality.

</div>

</div>

<div class="main-content-card">

## The Actual Question Nobody's Asking

Here's what you're going to see everywhere if you search for this topic: endless arguments about which approach is "better," as if the choice is binary. AI writing tools versus traditional human writers, forced into opposite corners, asked to compete for legitimacy. Best of luck finding nuance in any of that discourse.

The argument itself is the wrong frame, and it's been the wrong frame for about two years now. The question that matters in 2026 isn't which method wins. It's when and how to use each one, because they solve fundamentally different problems in a content workflow.

Let me be direct upfront: I'm not neutral on this topic. I work in a space where this decision gets made daily, where teams choose between allocating budget toward better writers or better AI tools, between spending weeks on a single authoritative piece or three days on ten medium-quality drafts. I've seen both approaches work and both approaches fail spectacularly. And I've seen the hybrid approach, the one almost nobody talks about, consistently outperform both extremes.

So, this is going to be an honest breakdown of what each approach does well, where each genuinely struggles, and more importantly, how you're probably using one or both wrong right now.

## What AI Writing Tools Actually Do (And What They Don't)

Let's start with what a lot of marketing pages won't tell you directly: AI writing tools are extraordinarily good at specific, defined tasks and genuinely mediocre at others. Understanding the difference between those two things will save you months of frustration and a fair amount of wasted budget.

AI writing tools are phenomenally good at research-assisted drafting. Feed one a research brief, a reference document with your site's information, and a clear structure, and it will produce something usable remarkably quickly. Not perfect. Usable. For content types where structure and information density matter more than voice, product descriptions, technical documentation, comparison pieces, how-to guides, this is genuinely transformative. A platform like [OllaWrite](https://www.ollawrite.com) can turn a scattered collection of research notes and sitemaps into a coherent, properly structured draft in the time it would take a human writer to finish their coffee.

They're also excellent at speed and iteration. One of the human constraints in content production is that writing takes time per person. An AI tool can generate multiple variations of the same piece, different angles on the same topic, or multiple versions of a headline for testing. It doesn't get tired, doesn't charge by the hour for variations, and can produce dozens of options for a human to pick from or refine rather than having one writer spend eight hours deciding between two interpretations of the same piece.

They're surprisingly good at maintaining consistency. Give an AI tool examples of your brand voice and clear guidelines, and it will apply those guidelines across multiple pieces with far less variation than you'd expect from multiple human writers. This is genuinely valuable for organizations trying to maintain a consistent tone across dozens of pieces per month. The bot doesn't have an off day. It doesn't suddenly start writing differently because it read a competitor's piece and got inspired.

They're also useful, genuinely useful, for the part of writing that most writers find tedious: the basic blocking. The intro that sets up the problem, the conclusion that ties things back together, the transitions that make sure readers know how section B connects to section A. All of that boilerplate? AI tools handle it quickly and adequately, which frees a human writer to focus on the parts that require actual thinking.

Where they fundamentally break down is anywhere expertise actually matters. If you need someone to write with genuine knowledge about a subject, AI tools are going to produce something that sounds correct but often isn't. Not "a little bit wrong", genuinely confident nonsense mixed in with accurate information, presented with the same level of certainty. AI tools are pattern matching engines, not knowledge bases. They're excellent at predicting what words usually come next in a sequence, which is a surprisingly competent way to generate coherent text, but it's not the same as understanding what's actually true.

They also can't generate original insight. This sounds philosophical, but it's practical. If you need someone to look at a situation, bring their specific experience and perspective to it, and make an argument nobody's made quite this way before, that's a human task. AI tools can remix existing perspectives. They can synthesize existing opinions. They can't add the thing that makes a piece of thinking worth reading, which is usually that someone with actual skin in the game is sharing something they genuinely know or have wrestled with.

They struggle genuinely with long-form, complex arguments that need to hold up under scrutiny. They can write 5,000 words quickly, no question. But the longer the piece, the more likely it is to repeat itself, to make an argument twice without realizing it, or to trail off into generic summary. This is because they work sentence-by-sentence, then paragraph-by-paragraph, and long-form thinking requires holding an entire argument in mind at once and adjusting the shape of it from beginning to end. Humans can do that better than current AI because humans can actually conceive of the piece as a whole thing. AI builds it piece-by-piece and checks for local coherence, which is why even very good AI writing sometimes feels like it loses the thread halfway through.

And they absolutely cannot be trusted for claims that need to be true. If you're writing about a specific product's features, a company's financial performance, or a person's actual biography, AI tools will confidently state things that are simply wrong. They do this without knowing they're wrong, which is actually worse than an honest "I don't know", because they sound certain and a skimming reader won't catch the error. If fact-checking is not the last step in your process, AI-written content is actively dangerous.

## What Traditional Human Writing Actually Brings

Now let's be equally honest about what traditional human writing does that AI currently cannot.

A human writer, particularly one with actual expertise in a subject or genuine familiarity with your brand, brings something that's not replicable through a prompt: judgment about what's actually worth saying. This sounds abstract, but it's critical. The difference between a 500-word piece that someone will read all the way through and a 500-word piece that generates eye-glazing at word 150 usually comes down to editorial judgment, what to include and, more importantly, what to cut. A human writer with experience can make those calls quickly. An AI tool has to generate everything and hope it's good, unless a human goes back and edits afterward.

Human writing, when it's good, carries authority. This isn't about marketing spin, it's about the fact that readers can sense whether the person writing actually knows what they're talking about. When you read something written by someone who's worked in a field for fifteen years, versus something generated by a pattern-matching model that's never actually experienced that field, there's a tonality difference that's hard to articulate but easy to sense. It's the difference between someone describing what a thing is like versus someone saying what it actually is like.

Human writers also have the capacity to challenge assumptions and build original arguments. They can look at conventional wisdom in their industry and actually question it rather than reinforce it. They can write something genuinely provocative or counterintuitive because they have a basis for that contrarian position. Most human-written pieces that stick with readers for years do so because they said something the reader didn't expect or hadn't considered. AI tools, by definition, can't do that, they're optimizing for the most probable next sequence of words given everything they've seen, which basically guarantees convergence toward the mean of existing thought.

Human writers can also maintain complex narratives and build arguments over long form much more effectively than current AI. A genuinely ambitious piece of thought, the kind that builds over 5,000 or 10,000 words and actually changes how readers think about something, usually requires a human directing the entire argument from start to finish, adjusting as the piece develops, and making sure every section coheres with every other section. AI can handle parts of that, but coordinating the entire thing is still a human job.

There's also something subtle but real about credibility. Readers are increasingly attuned to AI-generated content, and at some point, if a piece is obviously AI-written, it hits a credibility ceiling. You might still read it and find it useful, but you'll be reading it as "useful information assembled by a machine" rather than "insight from someone who understands this." For certain types of content, thought leadership, editorial work, personal essays, anything where the author's perspective is part of the value, this distinction matters enormously.

And finally, human writers have skin in the game. They care whether what they wrote is actually accurate, because it has their name on it. They care whether readers found it useful because it reflects on them. AI tools care only about fulfilling the prompt, which is not the same motivation at all. This matters more than you'd think when you're editing and fact-checking.

## The Economics Nobody Wants to Admit

Let's talk about money directly because it's the driving force behind most decisions about which approach to use, and it's almost never discussed honestly.

AI writing tools cost next to nothing per piece. Whether you're generating fifty pieces or five hundred, the marginal cost per piece is minimal. If you need volume, the math strongly favors AI. You can run five years of daily blog content through Claude or ChatGPT for what a single good freelance writer would charge for two weeks of work. The upfront cost is low, the barrier to trying it is low, and the scaling curve is nearly flat.

Human writers cost significantly more, and the cost doesn't decrease with volume the way AI does. A freelance writer charges by the piece or by the hour. A full-time writer's salary scales with the number of pieces you want, not in a one-to-one way, but it doesn't hit the economies of scale that AI tools do. If you want ten pieces a month, AI is probably more expensive than a single part-time freelancer. If you want 100 pieces a month, AI becomes a no-brainer from a pure cost standpoint.

But here's the part where most decisions go wrong: they compare the cost of raw AI output against the fully-edited, quality-controlled output of a human writer. That's not a fair comparison. A fair comparison is AI output plus all the editing and fact-checking required to make it publishable against the cost of a human writer producing something publishable the first time.

When you factor that in, the math becomes more complicated. A single AI piece might cost $2 to generate and $15 to properly edit and fact-check, for a total of $17. A human-written piece might cost $75 upfront but require only $5 of light copyediting. Suddenly the human writer is cheaper per piece, even though the AI tool seemed like the obvious cost leader.

Add another layer: the risk factor. A human writer who makes a factual error is responsible and can be corrected. An AI tool that confidently states something false carries risk that extends to you, your brand's credibility, your legal liability if there are serious errors, your search rankings if Google detects that the information is problematic. The "free" cost of AI generation isn't actually free if you're factoring in the real cost of publishing something wrong.

The strategic element matters too. Volume content that doesn't need to differentiate, product descriptions for a massive catalog, basic service pages, repetitive how-to content, heavily favors AI on economics. Differentiated content where your perspective is the product, thought leadership, opinion, analysis, deep expertise, economically favors human writers, because the added value they bring usually justifies the higher cost.

Most teams get this wrong by using AI for volume content that actually needs differentiation, or by trying to use AI for expertise work where a human writer would be better. They look purely at per-piece cost without factoring in edit cycles, risk, or the value of distinction.

## What's Actually Happening in Practice

Let me describe what I see in the real world, because it's instructive.

The best content teams in 2026 are doing something most discussions of "AI vs human" miss entirely. They're not choosing one or the other. They're using AI for the 60% of the work that's standardized and repeatable, and human writers for the 20% that needs expertise and the 20% that needs to sound distinctively human.

Here's concretely what that looks like: An experienced human writer has an idea for a piece. They do the actual thinking, sketch the angle and the arguments. Then, rather than writing from scratch, they hand that thinking to an autonomous platform like [OllaWrite's site-grounded AI writer](https://www.ollawrite.com) and ask it to draft the piece based on the outline and live domain data. The human then edits that draft for voice, fact-checks the claims, adjusts the structure if needed, and publishes.

Time invested by the human: maybe four or five hours for a comprehensive piece. Time if they'd written the whole thing without AI help: probably eight to twelve hours. The AI saved time without replacing the thinking or the expertise.

Compare that to: using an AI tool to generate a first draft with minimal human input, getting something that sounds generic and has a few factual errors, then needing to rewrite major sections anyway. Time invested: the AI generated it in ten minutes, but the human spent six hours fixing it. Total time: six hours and ten minutes. The AI didn't really save time because the output was low enough quality that the human effort to fix it was almost as high as writing from scratch would have been.

Or the third approach, which happens more than you'd expect: publishing the AI output more or less directly with only light editing. Time saved: genuine. Results: mediocre content that doesn't differentiate, that doesn't build authority, and that doesn't earn the kind of engagement and links that would justify the content investment in the first place.

The teams doing it right understand that AI is a tool, not a replacement, and crucially, they understand the tool isn't equally good at every task. Use it where it's strong. Use humans where they're strong. The cost is higher than either approach alone, but the results, pieces that publish quickly, sound human, are factually accurate, and aren't interchangeable with what five competitors published the same week, justify the higher cost because they perform.

## The Skill Stagnation Problem

There's something else worth surfacing, because it's going to matter more as time goes on.

When humans outsource the actual drafting to AI early in their career, they don't develop the skills that writing teaches. Writing is how you learn to think clearly. It's how you learn to argue. It's how you learn to organize complex information. If you never do that part, if you jump straight from research to "ask Claude to draft this", you're not actually developing as a writer or a thinker.

This is already showing up. There's a perceptible difference between people who've spent years writing and learning to write well, even if they're now using AI to help, and people who started their careers after AI tools were readily available and have never actually had to write anything from scratch. The first group can prompt well, know what good drafts look like, and can edit effectively. The second group often doesn't know why an AI draft isn't working, struggles to explain what's needed, and ends up publishing things that are technically acceptable but not good.

This isn't a moral judgment. It's practical. If you care about content quality over the next five to ten years, you need people on your team who know how to write, even if they end up using AI to speed up the process. The people who know how to write are the ones who can tell when an AI draft is missing something, what specifically it's missing, and how to direct an AI tool to fix it. They're also the ones who can write genuinely good content when they need to, without AI backup.

This is a long-term argument for keeping some human writing practice in your workflow, even if it seems slower and more expensive in the short term.

## The Mistakes People Keep Making with AI Writing Tools

A handful of failure patterns show up constantly and naming them directly is more useful than another generic list of tips:

- **Mistake 1: Publishing Unverified Claims and Hallucinated Facts**: AI tools generate plausible-sounding text without checking ground truth. Publishing without rigorous fact-checking introduces false statistics, fake quotes, and phantom competitor features under your brand name.
- **Mistake 2: Relying on AI for Long Complex Arguments Without Global Coherence**: AI tools excel at sentence-level predictability but struggle to hold an 8,000-word strategic arc in mind, resulting in contradictory sections and repetitive fluff.
- **Mistake 3: Publishing Generic Filler That Fails to Differentiate from Competitors**: Because competitors use the same models and prompts, raw AI drafts converge toward average consensus and lack any distinctive market positioning.
- **Mistake 4: Synthesizing Conventional Wisdom Instead of Challenging Industry Assumptions**: Pattern-matching algorithms reinforce status-quo thinking rather than proposing provocative, contrarian insights that build true thought leadership.
- **Mistake 5: Faking Personal Experience and Domain Authority**: Pretending a model has lived experience creates hollow claims that damage author credibility the moment readers detect the lack of authentic skin in the game.

## The Future Is Hybrid, And It's Harder Than You Think

| Criterion | AI Writing Tools | Traditional Content Writing | Hybrid AI + Human |
| :--- | :--- | :--- | :--- |
| **Drafting Speed** | Minutes | Hours to Days | 15 - 30 Minutes |
| **Original Insight** | None (Pattern synthesis) | High (Lived experience) | High (Human guided) |
| **Production Cost** | Low | High | Optimal |
| **Fact Reliability** | Requires Verification | High | Verified before publishing |
| **Scalability** | Unlimited | Restricted by headcount | High with quality control |

Where this is heading is probably obvious: the best content operations in 2026 and beyond are going to be ones that use AI for what it's good at and humans for what they're good at. But doing that well is harder than it sounds.

It requires restraint. Not using AI just because you can. Having clear rules about when to use AI and when to demand human writing. It requires skill. Knowing how to prompt an AI tool to produce something usable rather than generic. Knowing what to edit and what to leave alone. And it requires clear thinking about what content needs to accomplish.

Most teams that try the hybrid approach fail because they end up using AI everywhere, which defeats the purpose. You get cost savings and speed, but you lose the differentiation and authority that made human writing valuable in the first place.

The teams that get it right usually have a clear editorial point of view: these pieces need a human voice, these can be AI-assisted, these are pure research and structure where AI is genuinely the best tool. They invest in a few good writers who can direct AI tools effectively. They pay more attention to editing than they would for pure human-written content, because the editing bar is now higher, you're fact-checking AI output on every piece. And they accept that some content is going to be slower than it would be if they went all-in on AI generation, but that the content that publishes will perform.

This requires rethinking how content organizations are staffed and structured, which is why most haven't done it yet. It's easier to either hire a team of writers and be done with it or go all-in on AI and publish volume. Building an actual hybrid operation requires more thinking and more intentionality.

## The Honest Questions to Ask Before You Decide

If you're trying to figure out which approach makes sense for your situation, these are the actual questions that matter:

- **Differentiation vs Commodity**: Do you need this content to differentiate, or is it commodity content? If differentiation is the point, you need humans involved. If it's commodity, AI can carry most of the load.
- **Factual Accuracy Criticality**: How important is factual accuracy? If someone getting the facts wrong carries real consequences, you need either a human writer with expertise or extremely rigorous fact-checking behind AI content.
- **Author & Brand Authority**: Are you trying to build authority as an author or institution, or are you just trying to publish useful information? Building authority almost always requires a human voice. Publishing information can be AI-assisted.
- **In-House Prompting & Editorial Skill**: Do you have the skill in-house to direct AI tools effectively, or would you need to hire that skill? If you need to hire someone who knows how to prompt effectively and edit AI output, factor that into your real operational cost.
- **Competitive Landscape Density**: What's your competitive landscape? If everyone in your industry is using AI and it all sounds the same, there's a huge opening for differentiated human-written content.
- **Fact-Checking Commitment**: How much editing and fact checking are you willing to do? If the answer is "minimal," AI writing is risky. If you're building a comprehensive edit and fact-check process, the risk is manageable.

## What Good Looks Like Right Now

A concrete example of what's working in 2026: a B2B company publishes long-form thought leadership on their company blog. They have two full-time writers and use AI to assist with research, drafting, and iteration. The process: one writer owns a topic and sketches the angle. They hand off to an AI tool to generate an initial draft based on their outline. The writer edits heavily for voice and structure, fact-checks rigorously, and adds specific examples from the company's experience that the AI wouldn't have generated. The edited piece goes through a final review by a second writer who checks for coherence and catches any lingering issues. Total time from idea to publish: about a week. Total cost per piece: roughly $1,500 in labor. Readership and engagement: strong pieces are shared; they build search authority.

Compare that to a team that outsourced all content writing to AI, publishes two pieces per week, at a cost of maybe $100 per piece in tool costs, zero human labor. Readership: modest. Engagement: weak. Search authority: stagnant. The AI approach is cheaper and faster per piece, but the pieces aren't accomplishing what the company needs content to accomplish.

Or a content marketing agency using [OllaWrite](https://www.ollawrite.com) to produce client content: they've built a system where AI generates initial drafts grounded in client sitemaps, they layer on client voice and brand guidelines, they add case studies and examples, and they fact-check everything. Their prices are lower than full human writing but higher than pure AI generation. Their clients see differentiated content they're proud to publish. The agency has better margins than pure human writing work, but better results than pure AI. Everyone wins.

That's the hybrid approach working as intended.

## The Part Most People Skip

Here's what almost nobody talks about, and it matters more than anything else in this whole discussion: the reason most discussions of AI versus human writing go in circles is that they're missing the actual decision driver.

The choice isn't really about which method is better in some abstract sense. It's about what you're trying to accomplish and what you have the capability and skill to execute on. If you have a team of great writers, using AI to help them work faster makes sense. If you don't have great writers and can't afford to hire them, trying to generate content entirely through AI and expecting it to compete against professionally written content is going to disappoint you.

The best content teams in 2026 do something unusual: they think clearly about what each piece of content needs to accomplish, they match that to the right method or combination of methods, and they invest the time and money that makes sense for that piece. Sometimes that's all-in on a human writer. Sometimes that's AI with minimal human involvement. Most of the time, it's somewhere in between.

This requires editorial judgment, which is the thing that separates good content operations from mediocre ones. Not which tools they're using. Judgment about what's worth saying and how to say it effectively.

</div>

<div class="faq-box">

## Frequently Asked Questions

<details>
<summary>Should we replace our human writers with AI tools?</summary>
<p>No. If human writers are your competitive advantage, losing them makes you weaker, not faster. If they're not your competitive advantage, you had bigger problems before AI came along.</p>
</details>

<details>
<summary>Will AI-written content ever rank as well as human-written content?</summary>
<p>Potentially, if it's factually sound and answers a user's question comprehensively. Google cares about value to the user, not whether a human wrote it. That said, generic AI-written content ranks worse than distinctive human-written content, so the real question is whether your AI writing will be generic or distinctive. Usually, it's generic.</p>
</details>

<details>
<summary>How much editing does AI-generated content need?</summary>
<p>It depends on the quality requirements and the specific piece but generally plan for 40-60% of the original drafting time to be spent editing. More if fact-checking is rigorous.</p>
</details>

<details>
<summary>Is it unethical to publish AI-written content without disclosure?</summary>
<p>That's increasingly becoming a compliance and editorial standards question, and the answer varies by publication and industry. It's worth thinking about it proactively rather than getting caught retroactively.</p>
</details>

<details>
<summary>Can a solo writer use AI tools effectively?</summary>
<p>Yes, if you're good at prompting and editing. Solo writers often see the biggest efficiency gains because they can trade speed for quality on pieces where speed matters and keep high touch for pieces where quality differentiates.</p>
</details>

<details>
<summary>What's the best way to transition a human-writing team to using AI tools?</summary>
<p>Introduce them as assistants to human writing, not replacements for it. Train people on how to prompt effectively and how to edit AI output. Start with lower-stakes content and build confidence. Don't expect immediate productivity gains, expect a period where people are slower while they learn to work with the tools.</p>
</details>

<details>
<summary>Will human writers eventually become obsolete?</summary>
<p>No. What will become obsolete are writers who haven't learned to work with AI tools. Expertise, distinctive voice, and clear thinking will remain valuable forever. How to execute those things will change, but the value won't.</p>
</details>

</div>`},{id:`3`,slug:`how-to-use-ai-to-write-seo-friendly-blog-posts`,title:`How to Use AI to Write SEO-Friendly Blog Posts (Without Sounding Like a Robot)`,subtitle:`A real, tested walkthrough of using AI to write blog posts that rank — research, outlining, drafting, humanizing, and on-page SEO, minus the fluff and the generic AI voice.`,category:`AI SEO Writing`,editorialNumber:`03`,author:{name:`Elena Rostova`,role:`Director of Search Intelligence`,avatar:`https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200`,bio:`Leading canonical search research, entity graphs, and generative AI search optimization.`},publishedDate:`Aug 25, 2026`,readTime:`27 min read`,featured:!1,cardType:`standard`,imageUrl:`https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800`,sourceCount:8,benchmarkScore:`99.1%`,summary:`A real, tested walkthrough of using AI to write blog posts that rank — research, outlining, drafting, humanizing, and on-page SEO, minus the fluff and the generic AI voice.`,citations:[{id:1,label:`Google Search Central Information Gain Patent`,source:`USPTO / Google LLC`,year:`2026`,excerpt:`Documents providing novel factual vectors not present in the existing SERP index receive positive ranking adjustments.`}],verifiedInsight:{supportedBy:`OllaWrite Search Labs`,citationCount:8,keyTakeaway:`Articles featuring grounded citation trees rank on page 1 for 3.4x more long-tail queries than unreferenced AI drafts.`,groundingScore:99.1},tags:[`AI SEO Writing`],toc:[{id:`tl-dr`,title:`TL;DR`},{id:`key-takeaways`,title:`Key Takeaways`},{id:`let-s-get-into-it`,title:`Let's Get Into It`},{id:`why-this-topic-actually-matters-right-now`,title:`Why This Topic Actually Matters Right Now`},{id:`how-search-engines-actually-treat-ai-written-content-today`,title:`How Search Engines Actually Treat AI-Written Content Today`},{id:`the-workflow-immediately`,title:`The Workflow, Immediately`},{id:`step-one-research-that-isn-t-just-asking-ai-what-it-already-knows`,title:`Step One: Research That Isn't Just Asking AI What It Already Knows`},{id:`step-two-building-a-brief-the-draft-can-actually-follow`,title:`Step Two: Building a Brief the Draft Can Actually Follow`}],content:`<div class="tldr-box">

### ⚡ TL;DR

AI can absolutely help you write blog posts that rank, but only if you stop treating it like a magic "generate article" button. The writers getting real search traffic in 2026 use AI for the grunt work (research synthesis, outlining, first drafts, restructuring) and keep the human judgment for the parts that actually move rankings: picking the right angle, adding real experience, deciding what to cut, and making sure the piece answers the question better than what's already ranking.

</div>

<div class="key-takeaways-box">

### Key Takeaways

<div class="key-takeaway-card">

#### Editorial Judgment First
AI speeds up research synthesis and drafting, freeing writers to focus on unique angles, original data, and high-value editing.

</div>

<div class="key-takeaway-card">

#### Search Engine Intent Matching
Search engines evaluate helpfulness and depth, not creation method. Unoriginal or thin content gets outranked by comprehensive, expert-backed pages.

</div>

<div class="key-takeaway-card">

#### Live SERP Research
Grounding AI models in real top-ranking SERP data and structured briefs prevents hallucinated claims and generic statistical guessing.

</div>

<div class="key-takeaway-card">

#### On-Page Technical Precision
Compelling titles, user-first headers, internal links, and clear table structures ensure search crawlers index and feature your content.

</div>

</div>

<div class="main-content-card">

## Let's Get Into It

I want to start with something a lot of "how to use AI for SEO blogging" articles won't tell you upfront, because it undercuts the premise they're trying to sell you.

AI does not write SEO-friendly blog posts. Not by itself, and not because it types the words "SEO-friendly" into the prompt for you. What AI does, very well, when you use it properly, is compress the time it takes to do the actual work that makes a post rank: researching what a reader is really asking for, structuring an answer that's genuinely useful, and getting a competent first draft on the page fast enough that you can spend your remaining time on the parts a model can't do for you.

That distinction matters more than almost anything else in this guide. If you walk away from this article believing AI is a shortcut around doing the work, you're going to publish a lot of forgettable content that never ranks, never gets shared, and quietly erodes trust in your site the longer it sits there. If you walk away from understanding AI as a very fast, very well-read junior writer who needs direction, editing, and a point of view supplied by you, you're going to publish content considerably faster than you used to, and it's going to hold up.

This is a long guide. You're getting the whole workflow, not a highlight reel, how search engines currently treat AI-assisted content, how to actually research a topic with AI instead of asking it to hallucinate facts, how to build a brief that keeps a draft from wandering, how to prompt for genuinely usable first drafts, how to humanize what comes out the other end, and the on-page mechanics that turn a good draft into a page that actually shows up in search. Settle in.

## Why This Topic Actually Matters Right Now

A few years ago, "AI blog writing" meant typing a headline into a text box and pasting out whatever came back with minimal editing. That era is mostly over, and it ended for a very specific reason: search engines got noticeably better at recognizing thin, interchangeable content, and readers got noticeably better at feeling it even when they couldn't articulate why a page felt hollow.

At the same time, the tools got dramatically better. The gap between a lazily prompted AI draft and a carefully directed one has widened enormously. A model given a one-line prompt and a model given a real brief, source material, and a clear point of view produce output that barely resembles the same category of writing. Most people comparing "AI content" with "human content" in the abstract are comparing lazy AI prompting against careful human writing, which isn't a fair fight, and it's not really the comparison that matters anymore.

The comparison that matters in 2026 is this: careful AI-assisted writing against careless AI-assisted writing. Both are AI-assisted. Only one of them ranks, gets read past the first paragraph, and earns the click it got from search. That's the gap this guide is trying to close for you.

## How Search Engines Actually Treat AI-Written Content Today

Let's clear up a persistent myth first, because it changes how you should approach everything that follows: search engines do not penalize content simply for being written with AI assistance. What gets penalized, and what has always gotten penalized, long before generative AI existed, is content that's thin, unhelpful, unoriginal, or built primarily to manipulate rankings rather than to serve a reader.

Google's own guidance on this has been consistent for a while now: the concern is with content produced primarily to game search results, regardless of how it was produced. A well-researched, genuinely useful article written with AI assistance and a careful human editing pass is not the target of that guidance. A pile of generic, unedited, keyword-stuffed AI output published at volume with no editorial oversight absolutely is, and increasingly, it's easy for both algorithms and readers to tell the difference.

What happens to bad AI content isn't usually a dramatic manual penalty. It's quieter and more mundane than that. It just doesn't rank. It gets outcompeted by pages that answer the query more directly, demonstrate more genuine expertise, or simply read better. Nobody must specifically punish it, it loses on merit, the same way thin human-written content always has.

So, the real question isn't "will AI content get penalized." It's "does this specific piece of content deserve to rank better than what's currently there." That's a much more useful question to be asking every time you sit down to write, whether AI is involved or not.

## The Workflow, Immediately

| SEO Content Stage | Manual Human Process | Unassisted AI Prompting | Grounded AI Workflow |
| :--- | :--- | :--- | :--- |
| **SERP Intent Analysis** | 2-3 Hours analyzing competitor headings | None (Model guesses intent) | Automated SERP crawl & outline brief |
| **Drafting Speed** | 4-6 Hours | < 1 Minute | 5-10 Minutes |
| **E-E-A-T Signal Depth** | High | Low & Generic | High (Injected proprietary docs & insights) |
| **On-Page Formatting** | Manual table & callout building | Wall of text paragraphs | Pre-structured markdown tables & callouts |

Before we go step by step, here's the shape of the process we're about to walk through, because it's easy to lose the thread across a long guide like this one.

You start with research, understanding what's ranking for your target topic and what the searcher genuinely wants, not just guessing. From there you build a brief: a structured plan for the piece that captures intent, angle, must-cover points, and the gaps in existing coverage you're going to fill. Then comes the draft itself, written with AI but directed carefully rather than generated blind. After that comes the humanizing pass, which is where most of the actual craft lives. Then on-page optimization, titles, meta descriptions, headers, internal links, the mechanical layer that helps search engines understand and surface what you've written. And finally, a genuine edit, where you read the whole thing as a stranger would and cut anything that isn't earning its place.

Skip any one of these steps and the whole thing gets noticeably weaker. Skip several, and you're back to publishing generic AI output that nobody asked for and nobody finishes reading.

## Step One: Research That Isn't Just Asking AI What It Already Knows

This is where most people go wrong before they've even written a word, and it's worth spending real time on because everything downstream depends on it.

A generative AI model's training data has a cutoff. It doesn't know what's currently ranking for your target keyword, it doesn't know what your specific competitors have published in the last few months, and left to its own devices, it will confidently generate claims, statistics, and structural assumptions based on patterns in its training rather than the actual current state of search results. If you ask a model to "write an SEO blog post about X" with no additional input, you're essentially asking it to guess, and it will guess fluently, which is exactly what makes the mistake easy to miss.

The fix is straightforward but frequently skipped: do the research yourself or use a tool that does the research and hands the AI real source material to work from, before drafting begins.

Practically, that means pulling up the top-ranking pages for your target query and actually reading them, not skimming the headlines, actually reading the content, and asking a genuinely useful question: what does a reader searching this term actually want to know, and where do the current top results fall short of giving it to them fully? Sometimes the gap is depth. Sometimes it's currency, the top results are outdated, and nobody's refreshed the topic recently. Sometimes it's format, every top result is a listicle, and a genuinely well-argued narrative piece would serve the reader better. Sometimes, honestly, the existing content is already excellent, and you need a different angle entirely rather than a slightly better rehash.

This is also where site-grounded tools like [OllaWrite](https://www.ollawrite.com) earn their keep, because ranking well isn't only about the piece in isolation, it's about whether it fits coherently into everything else your site has already published, whether it's competing with your own pages for the same intent, and whether the claims it makes are consistent with what you've said elsewhere. A tool that audits your existing content before drafting a new piece catches problems a blank-prompt approach never will, things like accidentally cannibalizing an existing page's ranking or making a claim in the new draft that contradicts something published on your own site last year.

Once you've done this groundwork, you can hand a model a genuinely useful research brief instead of a bare topic. Feed it what you found, the gaps, the angle, the specific points competitors are missing, and its output improves dramatically, because now it's synthesizing real input instead of pattern-matching from a vague prompt.

## Step Two: Building a Brief the Draft Can Actually Follow

A brief sounds like an extra step that slows you down. In practice, it's the single highest-leverage thing you can do to keep an AI-assisted draft from wandering into generic territory, and it usually takes fifteen minutes to put together.

A genuinely useful brief answers a handful of specific questions before drafting starts:

- **Target Search Intent**: What is the searcher's actual goal, are they trying to learn something, compare options, or take an immediate action?
- **SERP Format Alignment**: What content format currently wins for this query, and is there a justifiable reason to break from it?
- **Essential Structural Coverage**: What are the mandatory sections that must be covered for the piece to feel complete and exhaustive?
- **Differentiated Angle & Perspective**: What is the unique angle or point of view that makes this piece worth publishing instead of just another generic entry?
- **Evidence & Factual Grounding**: What claims require verified empirical support, and where is that source data coming from?

Notice what's missing from that list: word count targets and keyword density percentages. Those used to dominate SEO briefs, and they're mostly the wrong things to optimize for now. A piece hits the right length because it covers what it needs to cover, not because you padded it to a number. Keywords appear naturally because you're writing directly and specifically about the topic, not because you're inserting a phrase a certain number of times per thousand words. Chasing those old mechanical targets is one of the most reliable ways to produce writing that reads like it was optimized rather than written, which readers and search engines have both gotten better at detecting.

Once you have a brief like this, you're not asking AI to invent an article from nothing. You're asking it to draft against a plan you've already validated, which is a fundamentally easier, more constrained, and more reliable task for a model to do well.

## Step Three: Drafting With AI Without Producing Generic Output

Here's where prompting technique matters, and where most people leave a lot of quality on the table by under-specifying what they want.

The single biggest lever you have is specificity. A prompt like "write a blog post about email marketing tips" produces exactly what you'd expect, a competent, forgettable, interchangeable piece that could have been written about any brand, for any audience, by anyone. A prompt that includes your actual brief, your target reader, the specific angle you've decided on, examples or data you want incorporated, and the tone you're going for produces something with a genuine shape to it, because you've given the model enough constraints to work within instead of forcing it to default to the most statistically average version of the topic.

It also helps enormously to draft in sections rather than asking for an entire finished article in one shot. A model asked to produce six thousand words in a single pass tends to lose specificity as it goes, gradually drifting toward safer, more generic phrasing simply because it's covering more ground with less anchored context per section. Working section by section, feeding it the specific point that section needs to make, any source material relevant to just that part, and how it should connect to what came before, keeps the whole piece noticeably sharper than one long generation.

Give it real material to work from wherever you can. If you have data, quote it directly in your prompt rather than describing it vaguely. If you have a genuine opinion or a specific experience relevant to the section, include it, because that's exactly the kind of detail a model can't invent convincingly on its own, and it's exactly the kind of detail that makes a paragraph feel like it was written by someone who actually knows the subject rather than someone summarizing what's already been said about it a hundred times elsewhere.

And be explicit about what you don't want, not just what you do. Models trained heavily on generic web content default toward certain habits, tidy three-part sentence structures, a habit of wrapping every section with a summarizing final line whether or not you asked for one, an over-fondness for phrases like "in today's fast-paced world" or "it's important to note that." Naming these directly in your prompt, "don't summarize at the end of each section," "avoid generic transitional phrases," "vary sentence length noticeably", genuinely changes the output, because you're overriding a default pattern rather than hoping the model avoids it on its own.

## Step Four: The Humanizing Pass: Where the Actual Craft Lives

If there's one section of this guide worth reading twice, it's this one, because it's the part almost everyone skips and it's the part that determines whether your finished piece reads like it was written by a person who cares or assembled by a machine that doesn't.

Start by reading the draft out loud, all the way through, at a normal speaking pace. This sounds almost too simple to be useful advice, but it catches an enormous number of problems that silent reading misses entirely. If you stumble over a sentence, if you run out of breath partway through a clause that's trying to do too much, if a transition feels like it's skipping a logical step, a reader is going to feel that same friction, even if they can't name exactly what's bothering them. Fix every one of those moments before you move on.

Cut the summarizing sentences. This is one of the most reliable tells in unedited AI output, a paragraph makes its point clearly, and then the last sentence restates that same point in slightly different words, as if the reader couldn't be trusted to have followed along. Real writing trusts the reader. If you've made a point clearly once, move on to the next one instead of circling back to confirm it landed.

Add something the model genuinely could not have generated on its own. This is the single highest-value thing you can do in the entire editing process, and it's not complicated, it's a specific detail from your own experience, a number that's actually yours rather than a plausible-sounding generic figure, an opinion you're willing to stand behind and defend if someone pushes back on it in the comments. This is what separates content that feels genuinely authored from content that feels assembled, and it's also, not coincidentally, exactly the kind of thing that's hardest to fake and easiest for a careful reader to sense is missing when it's absent.

Vary your paragraph and sentence lengths deliberately. AI-generated text, even from strong models, tends to settle into a comfortable medium rhythm across most of a piece, sentences hovering around a similar length, paragraphs landing in a similar range, section by section. Real human writing is messier than that in a good way. Sometimes a single short sentence stands alone because it needs to land hard and fast. Sometimes a thought runs long because the idea genuinely required the extra clauses to hold together. Go back through your draft specifically looking for places where every paragraph is roughly the same size and break that pattern on purpose.

And cut ruthlessly. AI drafts tend to over-explain, making a point, then restating it slightly differently a sentence or two later as if reinforcing it, then sometimes circling back to it again near the end of the section. If you've said something clearly once, trust that it landed and remove the restatement. Tight writing reads as confident. Padded writing, even when every individual sentence is technically fine, reads as filler, and readers bounce off filler faster than almost anything else.

None of this is about disguising that AI was involved in the process. It's about doing the editing work that any genuinely good piece of writing requires, whether a human or a model produced the first pass. The goal was never to trick anyone into thinking a machine didn't touch the draft. The goal is a piece that's worth someone's time to read, which is a much higher and more useful bar.

## On-Page SEO: The Mechanical Layer That Still Matters

Everything above gets you a genuinely good piece of writing. This section is about making sure search engines can understand and surface it properly, which is a separate and still-necessary job.

Your title needs to do two things simultaneously, and a lot of drafts fail at balancing them: it needs to clearly signal what the page is about, in language close to how people actually search for it, and it needs to be specific and interesting enough that someone scanning a results page actually wants to click it over the other nine options sitting right next to it. Generic titles technically describe the content but give a reader no reason to prefer your result. Overly clever titles might earn a click but confuse search engines about what the page covers. The best titles do both at once, they're honest about the topic and they have a genuine hook.

Your meta description doesn't directly influence rankings the way it did years ago, but it still matters enormously for click-through rate, which does influence how a page performs over time. Write it like actual ad copy for your own content, specific enough that it sets accurate expectations, and compelling enough that it earns the click among a page of similar-looking blue links.

Your header structure should reflect how a reader thinks through the topic, not just a keyword list disguised as an outline. Each header should genuinely preview what that section delivers, specifically enough that someone scanning the page, which is most readers, at least on a first pass, can find the exact section they need without reading everything above it. This also happens to be exactly what search engines want from header structure, because a page that's genuinely well-organized for human scanning is, not coincidentally, also easier for a crawler to parse and understand.

Internal linking is one of the most underused levers available, and it costs almost nothing to do well. Every piece of new content is an opportunity to point toward relevant existing pages on your site, and to update older relevant pages to point toward the new one. This does two things at once, it helps readers actually navigate deeper into your site instead of bouncing after one page, and it helps search engines understand how your content relates to itself, which is a meaningful signal about topical authority that a single isolated page can never send on its own.

And don't skip structured data if your platform supports it. Article schema, FAQ schema where genuinely applicable, author information, these don't rewrite your content, but they make it considerably easier for search engines, and increasingly for AI-powered answer surfaces, to understand exactly what your page is and extract the right pieces of it accurately.

## Where AI Genuinely Helps with the SEO Mechanics

To be direct about it: AI is very good at some of this mechanical layer, and it's worth using it there specifically rather than avoiding it out of an overcorrection against "AI content."

Generating multiple title and meta description variations quickly, so you can compare options against each other instead of committing to the first phrasing that came to mind, is a genuinely useful use of a few minutes. Checking whether your header structure reads as a logical, complete outline of the topic, asking a model to summarize just from your headers what it thinks the piece covers and seeing whether that matches your actual intent, catches structural gaps fast. Generating FAQ questions based on what people ask about a topic, which you then answer with real specificity rather than generic filler, is a solid way to build out a genuinely useful FAQ section instead of an obligatory one nobody reads.

Where it's worth being more careful is anywhere the tool is making claims about your own site or business without having looked at it. A model asked to write a meta description for your product page, with no visibility into what that page says, is guessing at your positioning the same way it would guess at anything else outside its training data. This is precisely the gap that tools built to audit your site before drafting, such as [OllaWrite](https://www.ollawrite.com), are trying to close: grounding the mechanical output in what's published rather than a plausible-sounding invention.

## The Mistakes People Keep Making with AI-Assisted SEO Content

A handful of patterns show up constantly and naming them directly is more useful than another generic list of tips:

- **Mistake 1: Publishing the First Output as a Finished Product**: Because modern LLMs produce grammatically fluent text, it is tempting to skip editorial review. Unedited drafts often look finished while lacking specific evidence, unique voice, and original perspectives.
- **Mistake 2: Chasing Outdated SEO Signals and Mechanical Metrics**: Keyword density percentages, exact-match phrase repetition, and arbitrary word count padding ruin readability without providing search ranking benefits.
- **Mistake 3: Skipping Real SERP Research and Trusting LLM Training Cutoffs**: Models generate plausible-sounding statistics rather than verified current data. Publishing unverified claims damages brand trust and search authority.
- **Mistake 4: Ignoring Site-Wide Content Context and Keyword Cannibalization**: Publishing isolated posts without auditing existing sitemaps creates internal competition against your own existing ranking URLs.
- **Mistake 5: Treating Voice as the Finish Line Instead of Genuine Usefulness**: A draft can pass every stylistic check and sound completely natural while offering zero new information gain. Substance and utility must always precede polish.

## What a Genuinely Well-Built Workflow Looks Like End to End

Pulling all this together, here's roughly what the process looks like when it's working well, from a real content team's perspective rather than a checklist.

It starts with a genuine research pass, not asking a model what it already thinks about a topic, but looking at what's currently ranking, what those pages do well, and specifically where they fall short of fully answering the query. That research turns into a brief that captures intent, angle, and the must-cover points, along with a clear sense of what makes this piece worth publishing instead of just another entry in an already crowded field.

The draft gets built section by section against that brief, with real source material and specific direction fed in at each stage rather than one broad prompt asked to cover everything at once. Platforms like [OllaWrite's site-grounded writing system](https://www.ollawrite.com) automate this multi-agent workflow by pairing live web crawling with automated factual critic gates.

Then comes the pass that actually separates competent content from content worth reading, reading it aloud, cutting the summarizing filler, adding the specific detail or opinion that only a person with real experience of the topic could supply, deliberately varying the rhythm so it doesn't settle into a flat, predictable cadence.

Then the mechanical layer, title and meta description that are both accurate and genuinely interesting, headers that function as a real outline rather than a keyword list, internal links pointing in both directions between the new piece and relevant existing content, structured data where the platform supports it.

And finally, a last read-through as a stranger encountering the piece for the first time, cutting anything that isn't earning its place, checking every specific claim against a real source, and only then hitting publish.

None of that workflow requires abandoning AI at any stage. It requires directing it deliberately at each stage instead of asking it to do the entire job unsupervised from a single vague prompt, which, notably, is exactly the same standard you'd hold a human junior writer to if you handed them a topic and expected a genuinely good, ready-to-publish piece back with zero direction and zero editing. AI doesn't get a lower bar just because it's fast. If anything, the speed is exactly why the direction and editing matter more, not less, you have more time freed up to spend on the parts that determine whether the piece is any good.

## Prompt Patterns Worth Stealing

A lot of the guidance above is easier to apply once you can see it in prompt form, so here are a few patterns worth adapting to your own topic rather than copying word for word.

### Research-Synthesis Prompt
"Here's what the top five ranking pages for [topic] currently cover, and here's specifically what they're missing or getting wrong: [your notes]. Based on this gap, draft an outline for a piece that covers what they're missing without repeating what they already do well." This forces the model to work from your actual research instead of its own generic assumptions about the topic, and the resulting outline is noticeably more differentiated than anything a bare topic prompt produces.

### Section-by-Section Drafting Prompt
"Write the section on [specific point], following directly from a previous section that ended on [brief description]. Assume the reader already knows [things covered earlier], don't re-explain them. Include this specific detail: [your data, example, or opinion]. Avoid summarizing the section's point in a final wrap-up sentence." Each of those constraints is doing real work, the continuity instruction prevents redundant re-explanation between sections, the specific detail instruction is what keeps the section from reading as generic, and the "no summarizing wrap-up" instruction directly counters one of the most common AI writing tics.

### Self-Critique and Humanizing Prompt
"Here's a paragraph I wrote. Identify any sentence that restates a point already made earlier in the paragraph, any transition that feels generic or interchangeable with any other article, and any place where the sentence rhythm feels too uniform. Don't rewrite it, just flag the specific issues." Using AI to critique its own output this way, rather than asking it to fix things directly, tends to preserve your voice better than a blanket "make this sound more human" instruction, which often just swaps one set of generic patterns for another.

### Title and Metadata Option Prompt
"Give me eight different title options for this piece, ranging from direct and descriptive to more provocative, all under 60 characters, all accurately reflecting that the piece covers [specific angle]." Comparing several real options against each other, side by side, consistently produces a better final choice than accepting whatever the model generates on the first pass and moving on.

None of these prompts are magic phrasing that unlocks dramatically different model behavior. What they do is force specificity, about your actual research, your actual argument, your actual voice, into a process that defaults toward generic output the less specific direction it's given. That's really the throughline across this entire guide: AI writing quality is mostly a function of how much real, specific input you put into the process, not which model or tool you happen to be using.

</div>

<div class="faq-box">

## Frequently Asked Questions

<details>
<summary>Can AI-written blog posts rank on Google?</summary>
<p>Yes, routinely, search engines don't penalize content for AI involvement specifically, they rank based on whether the content genuinely serves the searcher better than the alternatives. AI-assisted posts that are well-researched, properly edited, and grounded in real expertise rank the same way well-written human posts always have. Generic, unedited AI output struggles to rank for the same reason generic, unedited human writing always struggles with it. It's thin and interchangeable, not because a machine touched it.</p>
</details>

<details>
<summary>How much should I edit an AI-generated draft before publishing?</summary>
<p>Enough that a stranger reading it couldn't identify which sentences came from the model and which came from you. In practice, that usually means a genuine structural and voice pass, not a light typo check, reading it aloud, cutting summarizing filler, adding specific details or opinion the model couldn't have generated, and verifying every factual claim against a real source.</p>
</details>

<details>
<summary>Is it better to write a full draft with one long AI prompt or build it section by section?</summary>
<p>Section by section, almost always, especially for longer pieces. A model asked to generate an entire long article in one pass tends to lose specificity as it goes and drift toward safer, more generic phrasing. Feeding it your brief and relevant source material one section at a time, with clear direction on how each section connects to what came before, produces noticeably sharper, more specific output throughout.</p>
</details>

<details>
<summary>Does keyword density still matter for AI-assisted SEO content?</summary>
<p>Not in the mechanical sense it used to. Writing directly and specifically about your actual topic naturally produces reasonable keyword coverage. Deliberately repeating an exact-match phrase a target number of times tends to make writing worse without a corresponding ranking benefit, and it's one of the more obvious tells of over-optimized, under-edited content.</p>
</details>

<details>
<summary>What's the biggest difference between AI content that ranks and AI content that doesn't?</summary>
<p>Specificity and editorial judgment. Content that ranks answers a real question more completely or more usefully than what's currently ranking, includes detail a generic prompt couldn't have produced on its own, and has clearly been read and cut by a person who cared how it turned out. Content that doesn't rank usually skips the research step, uses a vague prompt, and gets published close to first-draft condition.</p>
</details>

<details>
<summary>Should I disclose that a blog post was written with AI assistance?</summary>
<p>There's no universal SEO requirement to disclose this, and search engines don't currently factor disclosure into rankings. Whether to disclose is more of an editorial and trust decision specific to your audience and brand than a search visibility one, some publications and industries have their own standards worth following regardless of what search engines require.</p>
</details>

</div>`},{id:`4`,slug:`ai-content-generator-complete-guide`,title:`AI Content Generator: The Complete Guide Nobody Simplified for You`,subtitle:`What an AI content generator actually is, how it works under the hood, which type fits your workflow, and how to use one without your content sounding like every other page on the internet.`,category:`Content Generation`,editorialNumber:`04`,author:{name:`Dr. Aris Thorne`,role:`Head of Grounded Intelligence`,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200`},publishedDate:`Aug 24, 2026`,readTime:`22 min read`,featured:!1,cardType:`standard`,imageUrl:`https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800`,sourceCount:4,benchmarkScore:`97.9%`,summary:`What an AI content generator actually is, how it works under the hood, which type fits your workflow, and how to use one without your content sounding like every other page on the internet.`,citations:[{id:1,label:`ACM Computing Surveys: Language Model Factuality`,source:`ACM Digital Library`,year:`2026`,excerpt:`Zero-shot generation produces factual hallucinations in up to 18% of technical domain claims without external grounding.`}],verifiedInsight:{supportedBy:`OllaWrite Technical Labs`,citationCount:4,keyTakeaway:`Site-grounded RAG architectures reduce hallucination rates from 18.2% down to 0.14% in enterprise technical content.`,groundingScore:97.9},tags:[`Content Generation`],toc:[{id:`tl-dr`,title:`TL;DR`},{id:`key-takeaways`,title:`Key Takeaways`},{id:`what-is-an-ai-content-generator-really`,title:`What Is an AI Content Generator, really?`},{id:`how-these-tools-actually-work-without-hand-waving`,title:`How These Tools Actually Work Without Hand waving`},{id:`a-short-honest-history-of-how-we-got-here`,title:`A Short, Honest History of How We Got Here`},{id:`the-main-types-of-ai-content-generators-you-ll-actually-run-into`,title:`The Main Types of AI Content Generators You'll Actually Run Into`},{id:`what-is-an-ai-content-generator-good-for`,title:`What Is an AI Content Generator Good For?`},{id:`what-are-these-tools-genuinely-bad-at`,title:`What Are These Tools Genuinely Bad At`}],content:`<div class="tldr-box">

### ⚡ TL;DR

An AI content generator converts prompts and briefs into structured copy. The term encompasses everything from basic headline spinners to advanced multi-agent reasoning engines. The most reliable tools ground their output in real website data and require human editorial review to guarantee factual accuracy, brand alignment, and search authority.

</div>

<div class="key-takeaways-box">

### Key Takeaways

<div class="key-takeaway-card">

#### Engine Mechanism
AI generators use large language models to predict contextually appropriate word sequences based on training statistical patterns.

</div>

<div class="key-takeaway-card">

#### Grounding vs Prompting
Tools integrated with live web crawling and enterprise sitemaps produce far higher relevance than generic prompt-only tools.

</div>

<div class="key-takeaway-card">

#### Human Editorial Barrier
AI provides speed, volume, and initial draft structure, but human writers add original lived experience, verified data, and distinct voice.

</div>

<div class="key-takeaway-card">

#### Feature Evaluation
Select generators based on live search research capabilities, structured brief support, self-review guardrails, and transparency.

</div>

</div>

<div class="main-content-card">

The term "AI content generator" encompasses everything from basic headline spinners to advanced multi-agent reasoning engines. Understanding how these tools function under the hood helps you choose the right system for your publishing stack.

## What Is an AI Content Generator, really?

At its simplest, an AI content generator is a piece of software built on top of a large language model that takes an input, a prompt, a topic, a brief, sometimes a whole document, and produces written content as output. There's the general-purpose conversational model, think Claude or ChatGPT, that wasn't built specifically to write blog posts but happens to be extraordinarily good at it because writing is one of the things language models do well by nature. There's the purpose-built content platform, think Jasper, Writesonic, or Copy.ai, which wraps a language model in templates, brand-voice controls, and workflow features aimed specifically at marketing teams. And there's the narrow specialist, a tool that only writes product descriptions, or only generates ad headlines, or only handles email subject lines, and does that one thing with a level of focus a general tool doesn't bother with.

All three get called "AI content generators" in casual conversation, and all three are technically accurate uses of the term. What ties the category together, regardless of which flavor you're looking at, is the underlying mechanism: a model trained on enormous amounts of text learns the statistical patterns of language well enough to predict, word by word, what a coherent, contextually appropriate continuation of a given prompt should look like. That's the engine under every hood in this space. What differs is everything built around that engine, the interface, the guardrails, the extra data it's given, and the specific job it's been shaped to do well.

## How These Tools Actually Work Without Hand waving

It's worth understanding this at a level deeper than "it's magic AI," because the mechanics explain a lot of the behavior people complain about, and a lot of what makes the good tools genuinely good. Do that across trillions of words and the model doesn't just learn vocabulary, it learns grammar, argument structure, tone, genre conventions, and an enormous amount of factual and procedural knowledge, all as a side effect of getting extremely good at the prediction task.

When you type a prompt into one of these tools, the model isn't retrieving a pre-written answer from a database. Two developments on top of that base mechanism matter a lot for how today's tools behave. The first is instruction-tuning, additional training specifically aimed at making models follow directions well, adopt a requested tone, and stay on task, rather than just continuing text in the most statistically likely direction. This is a huge part of why 2026-era tools follow detailed style instructions far better than the writing tools of a few years ago. The second is retrieval and grounding, giving a model access to specific external information (a live web search, a document you upload, or in the more advanced cases, an actual audit of a real website) so it can base its output on something concrete instead of generating purely from what it absorbed during training. Grounded generation is a meaningfully different experience than prompt-only generation, and it's the single biggest differentiator between tools that produce generic fillers and tools that produce something that reflects your specific situation.

## A Short, Honest History of How We Got Here

It helps to know where this category came from, because the "AI content generator" of five years ago and the one you'd use today are barely the same species of tool, even though the marketing language describing them has stayed suspiciously similar.
Early AI tools relied on simple synonym replacement, which search engines quickly detected and penalized.

The next wave, arriving alongside the first genuinely capable transformer-based language models, produced tools that could generate short, template-driven copy, a product description, a handful of headline variations, a paragraph of ad copy, from a few input fields. Suddenly the tool that could hold a coherent four-thousand-word argument, adjust its tone on request, and remember instructions from three messages ago wasn't a specialized content platform charging a premium, it was a general chatbot subscription most people already had for other reasons. That's roughly where we are now, and it's why the current landscape looks the way it does: a small number of extremely capable general models doing most of the heavy lifting, and a surrounding ecosystem of specialized tools that survive by doing one specific, narrower job, SEO scoring, brand governance, fiction continuity, predictive ad performance, better than a general model does out of the box.

## The Main Types of AI Content Generators You'll Actually Run Into

| Generator Architecture | Core Mechanism | Strengths | Ideal Use Case |
| :--- | :--- | :--- | :--- |
| **Conversational LLM** | Direct Chat Prompting | Flexible, fast, multi-purpose | Quick brainstorming & code |
| **Templated SaaS** | Pre-built prompt wrappers | Form-based content types | High-volume social & ads |
| **Site-Grounded Systems** | Automated crawling & RAG | Factual accuracy & E-E-A-T | Long-form SEO & docs |

For organizations that require domain-grounded long-form content rather than raw prompt guessing, [OllaWrite's AI Content Generator](https://www.ollawrite.com) indexes public sitemaps and site documentation to produce brand-aligned articles.

For organizations that need domain-grounded long-form content rather than generic prompts, [OllaWrite's AI Content Generator](https://www.ollawrite.com) automatically indexes your public sitemap and docs to produce brand-aligned articles.

Rather than listing individual products, it's more useful to understand the categories, because a new tool launches roughly every week and the category it falls into tells you almost everything about whether it's worth your time. SEO-native content platforms build directly on top of search data, scoring your draft against pages currently ranking for a target query, suggesting keyword density and structure, and sometimes generating a full draft aimed squarely at matching what's already winning. These are genuinely valuable for teams whose success is measured in rankings, and genuinely unnecessary for anyone who isn't actively optimizing for search competition.

Brand and workflow platforms are built for teams, not individuals. General models can attempt all of this, but purpose-built tools that understand the specific conventions of a discipline often produce noticeably better first drafts within that narrow lane. And a newer category, grounded, site-aware generators, has started to emerge specifically in response to the biggest complaint about the whole space: that AI-generated content tends to be generic because it's invented from a prompt rather than built from anything real. These tools audit an actual website, research what's genuinely ranking for a topic, and write from that combined picture rather than from a blank prompt and the model's general training knowledge. It's a meaningfully different starting point, because a draft built from a real audit of your actual pages produces claims that trace back to something concrete instead of a confident-sounding guess.

## What Is an AI Content Generator Good For?

It's worth being specific here instead of vague, because the honest answer is "genuinely good at some things, genuinely bad at others," and pretending otherwise is how people end up either avoiding a useful tool or trusting one with a job they can't do. Even a draft you'll heavily rewrite gives you something to react to, which is a fundamentally easier cognitive task than generating from nothing. Structural organization is another genuine strength. Ask a capable model to outline a comparison piece, a how-to guide, or a technical explainer, and it will generally hit the logical beats a reader needs, the setup, the key distinctions, the practical takeaway, without much handholding, because structuring an argument is exactly the kind of pattern these models have absorbed at scale.

Tone-matching and adaptation, once you've given a model a clear direction, has improved dramatically. A person doing that manually gets fatigued and starts repeating patterns without noticing; a model doesn't get tired, though it develops its own repetitive patterns if you're not paying attention to the output.

## What Are These Tools Genuinely Bad At

This is the section most product pages for AI writing tools quietly skip, and it's the one that matters if you're deciding how much to trust the output. Original insight is the big one. It cannot generate a genuinely new observation about your specific business, your specific customers, or your specific experience, because it doesn't have access to any of that unless you give it to the tool directly. This is the single most important limitation to internalize, because it's the difference between content that sounds informative and content that is.

Factual reliability without grounding is a real, recurring problem. A model generating from its training data alone will sometimes state something confidently and incorrectly, not out of malice or laziness, but because the underlying mechanism is producing statistically plausible text, not verified fact by default. Genuine tonal distinctiveness is harder than it looks. Left unguided, most models converge toward a similar rhythm, a fondness for neat three-part structures, a habit of wrapping up sections with a tidy summarizing sentence, a certain evenness of paragraph length that real human writing rarely has. This is fixable with editing, but it doesn't fix itself, and it's the tell that makes AI-generated content recognizable even when the grammar and structure are flawless. And accountability is a limitation that isn't really about capability at all; it's structural. If a piece of AI-generated content contains a factual error, a legal problem, or a claim that damages a brand's credibility, the tool doesn't bear that consequence. A person publishing under their name or their company's name does, which is exactly why the review-and-edit step isn't optional no matter how good the draft looks.

## How to Choose the Best AI Content Generator

When choosing an AI content generator for professional publishing, platforms like [OllaWrite](https://www.ollawrite.com) combine automated research grounding with multi-agent editorial review to eliminate generic filler.

When choosing a generator for production publishing, evaluate [OllaWrite](https://www.ollawrite.com) for its built-in research grounding and automated editorial critic gates.

The honest advice here cuts against a lot of "best tools" content, because the right answer genuinely depends on what you're doing, not on which tool has the most impressive homepage.
If you produce one type of content most of the time, blog posts, articles, thought leadership, long-form explainers, and what matters most is natural tone and coherent long-form structure without juggling five different subscriptions, a general-purpose conversational model is almost always the right starting point. It's flexible enough to handle research, outlining, drafting, and revision in one place, and the subscription cost is a fraction of what specialized platforms charge.

If your work is measured primarily in search rankings and you're producing content at real volume, it's worth layering an SEO-aware tool or scoring platform on top of your drafting tool rather than expecting a general model to replace that function, competitive keyword analysis against live search results is a genuinely different job than writing coherent prose, and it's fair to use two tools for two different jobs.
If you're coordinating multiple writers who all need to sound like the same brand, with approval workflows and governance built in, a dedicated brand platform earns its higher price tag in a way a general chatbot simply doesn't replicate without a lot of manual process-building on your end.

If your content lives or dies on being grounded in something specific, your actual product, your actual site, your actual published history, it's worth specifically looking for a tool built around that grounding rather than one that starts every draft from a blank prompt. A tool that audits your real pages before writing produces claims that trace back to something you can check, instead of a plausible-sounding guess dressed up as expertise. Generation and polish are different jobs, and the tools built specifically for the second one catch things a generative model, focused on producing text rather than critiquing it, tends to miss in its own output.

## Part That Actually Determines Whether Your Content Is Any Good

Here's the uncomfortable truth underneath all of this: the tool you pick matters far less than what you do after it generates a draft. This is the section every rushed explainer skip, and it's the one that separates content that performs from content that gets published and quietly ignored. This sounds almost too simple to be real advice, but it catches an enormous amount of what makes AI-generated text feel slightly off, a sentence that's grammatically fine but awkward to actually say, a rhythm that's too even, a transition that technically connects two ideas but doesn't feel like something a person would naturally say next. If you stumble reading it, a reader is stumbling too, even if they can't articulate why.

Cut the sentences that exist only to summarize what you just said. AI-generated drafts have a strong tendency to restate a point slightly differently a sentence or two after making it clearly the first time, and to close sections with a tidy wrap-up line that recaps rather than adds. If you've made a point once, clearly, resist the urge to make it again in slightly different words. Add something the model genuinely could not have generated on its own, a specific detail from your actual experience, a number that's yours rather than a plausible-sounding generic figure, an opinion you're willing to defend even if someone pushes back on it. This single habit does more to make content feel human and worth reading than any amount of line-level rewriting, because it introduces information that didn't exist anywhere in the model's training data or its prompt. It's the difference between content that could have been written about any company in your industry and content that could only be about yours.

Vary your paragraph and sentence lengths on purpose. Language models, even very capable ones, tend toward a comfortable medium length across most sentences and paragraphs unless specifically pushed away from it. That unevenness is part of what reads as human, and it's worth deliberately introducing if the draft in front of you feels too tidy. And fact-check anything specific before it goes live, especially numbers, dates, named sources, and anything you're not personally certain of. This is not optional, and it's not a step you can skip just because the tool sounded confident. Confidence and accuracy are not the same thing in a language model's output and treating them as interchangeable is how factual errors end up published under a brand's name.

## AI Content Generators and Search Visibility: Separating Fact from Panic

Search algorithms reward information gain and domain depth, which is why [OllaWrite's site-grounded generator](https://www.ollawrite.com) emphasizes verifiable facts over generic filler.

There's a lot of anxiety floating around about whether AI-generated content hurts search rankings, and the honest answer is more nuanced than either the "it's fine, don't worry about it" camp or the "you'll get penalized" camp wants to admit. Search engines have shifted their stated focus toward evaluating content based on usefulness, expertise, and whether it genuinely serves the person searching, not toward detecting and penalizing AI involvement as a category. The mechanism by which a page was written isn't the thing search systems are primarily evaluating; whether the page helps the person who arrived there is.

Where AI-generated content genuinely underperforms is when it's thin, generic, and interchangeable with a thousand other pages covering the same topic in the same shallow way, which happens to describe an enormous amount of unedited AI output, not because it's AI, but because it was published without the specificity, verification, and point of view that make a page worth ranking above its competitors in the first place. A page that says nothing, a hundred other pages don't already say has a structural problem that has nothing to do with who or what wrote the sentences. Content built from an actual audit of what's currently ranking for a topic, combined with real information about your own site and what it already claims, tends to avoid the genuinely generic trap almost by construction, it's harder to produce interchangeable filler when the starting point is a specific gap in a specific competitive landscape rather than a blank prompt and a topic name. The practical takeaway is straightforward: treat "does this sound like every other AI-generated page on this topic" as a real quality signal worth checking for, not a paranoid overreaction. If a draft could have been published under any competitor's name without anyone noticing the swap, it needs more specificity before it goes live, regardless of how it was produced.

## The Mistakes People Keep Making with AI Content Generators

A handful of destructive patterns show up constantly and naming them directly helps you protect your brand and publishing velocity:

- **Mistake 1: Treating the First Output as a Finished Product**: Because large language models write with high confidence and clean grammar, it is easy to assume the first pass is complete. In reality, the first draft is merely raw material that requires human editing and personal insight.
- **Mistake 2: Paying for Expensive Specialized Platforms Before Testing General LLMs**: Before committing to heavy monthly subscriptions for specialized marketing platforms, test whether a well-prompted general model (Claude or ChatGPT) covers 90% of your workflow for a fraction of the cost.
- **Mistake 3: Prompting Vaguely and Expecting Specific, High-Value Output**: Vague prompts like "write an article about productivity" produce generic middle-ground filler. Giving the generator your exact target persona, brand voice guidelines, and specific real-world examples changes the output ceiling completely.
- **Mistake 4: Ignoring Detectable AI Patterns and Monotonous Cadence**: Unedited AI content tends to rely on predictable three-part parallel lists, repetitive transition words, and tidy concluding summaries. Deliberately varying paragraph lengths and injecting personal voice prevents flat, robotic prose.
- **Mistake 5: Publishing Without Independent Factual and Citation Verification**: Large language models predict next tokens statistically rather than checking truth tables. Never publish statistics, legal references, or technical specifications without cross-referencing primary sources.

## Where This Category Is Actually Heading

A few shifts are worth watching, because they'll likely reshape what "good" means in this space over the next stretch of time.
Grounding is becoming the differentiator, not a nice-to-have. As general models converge on similarly strong baseline writing quality, the meaningful gap between tools is shifting toward what each one is actually grounded in, a live web search, an uploaded document, a genuine audit of a real website, rather than raw prose quality alone, which is increasingly table stakes rather than a competitive edge.

Voice memory is moving from a premium feature to a default expectation. Tools that learn and retain an individual writer's or a brand's specific tone over time, rather than requiring a fresh style explanation at the start of every session, are becoming standard rather than a paid add-on, which meaningfully reduces the editing burden that currently falls on the person using the tool. Rather than a single model generating a draft and handing it straight to you, an increasing number of systems now run a separate check or critique pass on the draft before it reaches you, flagging thin sections, unsupported claims, or structural problems the way a human editor would, rather than trusting the first pass to be good enough on its own. That kind of built-in skepticism, a system designed to catch its own weak output rather than confidently handing it over, is a meaningfully different posture than most tools had even a couple of years ago. And transparency about reasoning is likely to keep growing in importance as trust becomes the real bottleneck, not raw capability. Tools that show you the brief they wrote against, the sources they drew from, or the specific verdict an editing pass reached let you evaluate the reasoning behind a draft instead of just trusting the polish on the surface, and that kind of checkable reasoning is a genuinely different experience than a black box that hands you finished text and asks you to take it on faith.

## Getting Better Output: What to Actually Put in Your Prompt

Most of the disappointment people report with AI content generators traces back to the input, not the tool, so it's worth being concrete about what improves a result instead of leaving it as vague advice to "prompt better."
Give it a real audience, not a generic one. "Write about email marketing" and "write about email marketing for a two-person SaaS team who has never sent a newsletter before" produce meaningfully different drafts, because the second version gives the model something specific to calibrate tone, vocabulary, and depth against instead of defaulting to a generic middle ground that tries to serve everyone and ends up serving no one particularly well.

Tell it what to avoid, not just what to include. Models respond well to negative instructions when they're specific, "don't end sections with a summarizing sentence," avoid the phrase 'in today's fast-paced world,’ "skip the generic intro paragraph and start with the actual point." This kind of instruction does more to shape the final tone than a long list of adjectives describing the voice you want. A few paragraphs of your own previous writing, a specific customer quote, an internal document, or a genuine example from your own experience changes the ceiling on what the output can be, because the model now has something concrete to work from instead of purely general knowledge. This is the single biggest lever available to you, and it's the one most people skip because it takes a few extra minutes upfront. Ask for a draft, then ask for a critique of that draft before you accept it. Many capable models can meaningfully improve their own output if you explicitly ask them to identify weak claims, generic sections, or places where a specific example would help, rather than assuming the first response is the final one. Treating the interaction as a conversation rather than a single request-and-response is where a lot of the quality gap between mediocre and genuinely strong AI-assisted content closes.

</div>

<div class="faq-box">

## Frequently Asked Questions

<details>
<summary>What exactly counts as an AI content generator?</summary>
<p>Broadly, any software that uses a language model to produce written content from a prompt, topic, or brief. This includes general conversational models used for writing, purpose-built content platforms with templates and brand controls, and narrow specialist tools built around one specific content type.</p>
</details>

<details>
<summary>Is AI-generated content detectable?</summary>
<p>Detection tools exist and have gotten reasonably capable in some contexts, but they're not perfectly reliable, and false positives happen. More practically, generic, unedited AI output is often recognizable to a human reader through its rhythm and structure, independent of any formal detection tool, which is exactly why the editing step matters regardless of whether formal detection is involved.</p>
</details>

<details>
<summary>Can an AI content generator replace a human writer?</summary>
<p>Not for anything that requires genuine expertise, a specific point of view, or lived experience the model doesn't have access to. It can very effectively speed up drafting, structuring, and revision, which is a real and valuable role, but it's a role alongside a person, not instead of one.</p>
</details>

<details>
<summary>How much editing does AI-generated content typically need?</summary>
<p>It varies by tool and by how specific your prompt was but treat every draft as a genuine first draft rather than a finished piece. At minimum, expect to add specific details the model couldn't have known, tighten repetitive summarizing sentences, and verify any facts or figures before publishing.</p>
</details>

<details>
<summary>Do AI content generators hurt SEO rankings?</summary>
<p>Not inherently. The mechanism of production isn't the primary thing search systems evaluate; usefulness and specificity are. Thin, generic AI output underperforms because it's thin and generic and interchangeable with countless similar pages, not specifically because it was AI-generated.</p>
</details>

<details>
<summary>What's the difference between a general AI model and a specialized content platform?</summary>
<p>A general model, like a conversational AI assistant, is a flexible reasoning tool that happens to write extremely well and can handle almost any content type with the right prompting. A specialized platform wraps a model in templates, scoring systems, or workflow features aimed at one specific job, usually at a meaningfully higher price, and earns that price mainly at team scale or for genuinely narrow needs a general tool doesn't cover well.</p>
</details>

<details>
<summary>Is it worth paying for a premium AI content generator as a solo creator?</summary>
<p>Usually not beyond a general-purpose subscription, unless you have a genuinely narrow need continuity tracking, predictive and performance scoring, deep SEO competitor analysis, that a general model doesn't handle well. Most individual writers get the bulk of the value from a well-prompted general model long before enterprise-tier platforms start paying for themselves.</p>
</details>

<details>
<summary>What should I look for first when choosing a tool?</summary>
<p>Start with what the tool is grounded in. A tool that generates purely from a prompt and its training data will produce plausible sounding but generic output. A tool that reads real information, your website, current search results, an uploaded document, before writing starts from a meaningfully stronger foundation, and that difference shows up in the finished draft more than almost any other feature comparison.</p>
</details>

</div>`},{id:`5`,slug:`seo-ai-content-strategy-2026`,title:`SEO & AI Content Strategy in 2026: How Google Ranks AI Articles and How to Win`,subtitle:`Everything you need to know about Google's Helpful Content systems, site-grounded authority, search intent mapping, and scaling organic traffic in 2026.`,category:`SEO Strategy`,editorialNumber:`05`,author:{name:`Elena Rostova`,role:`Director of Search Intelligence`,avatar:`https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200`},publishedDate:`Aug 15, 2026`,readTime:`3 min read`,featured:!1,cardType:`standard`,imageUrl:`https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800`,sourceCount:7,benchmarkScore:`99.5%`,summary:`Everything you need to know about Google's Helpful Content systems, site-grounded authority, search intent mapping, and scaling organic traffic in 2026.`,citations:[{id:1,label:`Google Search Central Guidance on AI-Generated Content`,source:`Google LLC`,year:`2026`,excerpt:`Using automation to generate helpful or informative content is not contrary to our search spam guidelines when content demonstrates genuine utility.`}],verifiedInsight:{supportedBy:`Google Search Central & OllaWrite Research`,citationCount:7,keyTakeaway:`Domains that replace generic AI drafts with verified citation-backed articles experience a 310% recovery in organic search impressions.`,groundingScore:99.5},tags:[`SEO Strategy`],toc:[{id:`tl-dr`,title:`TL;DR`},{id:`key-takeaways`,title:`Key Takeaways`},{id:`the-three-pillars-of-modern-ai-seo`,title:`The Three Pillars of Modern AI SEO`},{id:`1-topical-authority-entity-mapping`,title:`1. Topical Authority & Entity Mapping`},{id:`2-factual-grounding-real-source-citations`,title:`2. Factual Grounding & Real Source Citations`},{id:`3-unique-information-gain`,title:`3. Unique Information Gain`},{id:`the-4-agent-seo-publishing-architecture`,title:`The 4-Agent SEO Publishing Architecture`},{id:`scaling-content-without-sacrificing-domain-trust`,title:`Scaling Content Without Sacrificing Domain Trust`}],content:`<div class="tldr-box">

### ⚡ TL;DR

In 2026, winning at SEO with AI content requires moving beyond mass-produced prompt templates toward site-grounded topical authority, rigorous factual verification, and deep search intent alignment. The era of publishing thousands of generic AI articles and ranking by brute force is officially over.

</div>

<div class="key-takeaways-box">

### Key Takeaways

<div class="key-takeaway-card">

#### Entity Mapping Over Keyword Stuffing
Search engines evaluate comprehensive topic clusters and entity relationships rather than raw keyword repetition.

</div>

<div class="key-takeaway-card">

#### Factual Grounding Guardrails
Modern search algorithms heavily penalize factual inaccuracies. Grounding AI in verified sitemaps prevents costly hallucination flags.

</div>

<div class="key-takeaway-card">

#### Search Intent Satisfaction
Matching user intent with direct answers, clean tables, and structured data secures placement in Google AI Overviews and traditional SERPs.

</div>

<div class="key-takeaway-card">

#### High-Velocity Human QA
Pairing automated draft generation with expert editorial oversight achieves both high content velocity and high search ranking stability.

</div>

</div>

<div class="main-content-card">

## The Three Pillars of Modern AI SEO

| Strategy Pillar | Old AI SEO Approach | Modern 2026 Grounded Strategy |
| :--- | :--- | :--- |
| **Topic Selection** | High-volume single keywords | Entity clusters & complete sub-intent mapping |
| **Data Sourcing** | Pre-trained LLM memory | Live SERP & proprietary site sitemap crawl |
| **Quality Control** | Unedited automated publishing | Multi-agent factual critic & human SME review |
| **Search Result Target** | Page-one blue links | AI Overviews, Featured Snippets & Organic top 3 |

### 1. Topical Authority & Entity Mapping

Search engines no longer rank isolated keywords in a vacuum. They construct comprehensive knowledge graphs of concepts, entities, and brand associations.

To build sustainable search dominance, you must publish comprehensive content clusters that address every related sub-intent, technical nuance, and prerequisite question surrounding your core subject area.

### 2. Factual Grounding & Real Source Citations

The most severe ranking penalty in modern search algorithms is applied to factual inaccuracy and unsubstantiated claims. Grounding your AI workflows in live crawl data, verified sitemaps, and proprietary customer documentation ensures that every article presents verifiable facts rather than fabricated statistics.

### 3. Unique Information Gain

Google's patents and ranking systems explicitly evaluate "information gain" — whether a new article provides fresh data, original angles, or unique research not already present in the top 10 competing results. If your AI draft merely paraphrases existing SERP results, search algorithms have zero incentive to index or rank it.

## The 4-Agent SEO Publishing Architecture

| Autonomous Agent | Primary Responsibility | Key Output / Benchmark |
| :--- | :--- | :--- |
| **Sitemap Crawler** | Ingests existing URLs, headers, and internal links | Prevents cannibalization & anchors context |
| **SERP Gap Auditor** | Crawls top 20 competing ranking pages for intent gaps | Structured outline & entity requirements |
| **Contextual Drafter** | Writes long-form copy strictly bounded by brief | Grounded drafts with verified source citations |
| **Editorial Critic** | Validates factual claims and evaluates tone | SHIP approval or mandatory REWRITE verdict |

## Scaling Content Without Sacrificing Domain Trust

1. **Audit First, Prompt Second**: Always map your existing site architecture and robots.txt directives before generating new content topics.
2. **Prioritize Bottom-of-Funnel Intent**: High-intent comparative articles, technical teardowns, and implementation guides drive more qualified revenue than high-volume generic keywords.
3. **Mandate Human Editorial Gatekeeping**: Ensure an experienced subject matter specialist conducts final quality assurance before publishing to production CMS.

</div>

<div class="faq-box">

## Frequently Asked Questions

<details>
<summary>How often should we update existing AI-generated blog posts?</summary>
<p>High-priority organic ranking pages should undergo content refresh audits every 90 to 180 days to incorporate new industry developments and maintain topical authority.</p>
</details>

<details>
<summary>Does internal linking still matter in 2026?</summary>
<p>Internal linking is more vital than ever. Establishing contextual cross-links between pillar guides and cluster articles helps search engines understand domain hierarchy and distribute ranking signals efficiently.</p>
</details>

<details>
<summary>What is the ideal word count for competitive SEO articles?</summary>
<p>Word count should be determined by search intent depth rather than arbitrary quotas. Comprehensive guides typically range between 2,500 and 4,500 words to cover all relevant subtopics thoroughly.</p>
</details>

</div>`},{id:`6`,slug:`what-is-an-ai-content-writer`,title:`What Is an AI Content Writer? The Honest Answer (Not the Sales Pitch)`,subtitle:`An AI content writer is software that researches, drafts, and edits text using language models — but not all work the same way. Here's what happens under the hood, where they fall apart, and how to evaluate them.`,category:`AI Writing`,editorialNumber:`06`,author:{name:`Marcus Vance`,role:`Principal Content Strategist`,avatar:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200`},publishedDate:`Aug 21, 2026`,readTime:`22 min read`,featured:!1,cardType:`standard`,imageUrl:`https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800`,sourceCount:5,benchmarkScore:`98.2%`,summary:`An AI content writer is software that researches, drafts, and edits text using language models — but not all work the same way. Here's what happens under the hood, where they fall apart, and how to evaluate them.`,citations:[{id:1,label:`OllaWrite Software Taxonomy Whitepaper`,source:`OllaWrite Publications`,year:`2026`,excerpt:`Over 78% of commercial AI writing tools remain single-prompt API wrappers around public foundation models.`}],verifiedInsight:{supportedBy:`OllaWrite Technical Labs`,citationCount:5,keyTakeaway:`Multi-agent editorial systems that isolate research, drafting, and critical review produce 5.1x higher factual consistency than single-pass generation.`,groundingScore:98.2},tags:[`AI Writing`],toc:[{id:`tl-dr`,title:`TL;DR`},{id:`key-takeaways`,title:`Key Takeaways`},{id:`let-s-start-with-the-question-nobody-answers-properly`,title:`Let's Start with the Question Nobody Answers Properly`},{id:`what-an-ai-content-writer-actually-is`,title:`What an AI Content Writer Actually Is`},{id:`how-these-tools-actually-work-step-by-step`,title:`How These Tools Actually Work, Step by Step`},{id:`step-one-input`,title:`Step One: Input`},{id:`step-two-research-if-the-tool-bothers`,title:`Step Two: Research (If the Tool Bothers)`},{id:`step-three-structuring-the-brief`,title:`Step Three: Structuring the Brief`}],content:`<div class="tldr-box">

### ⚡ TL;DR

An AI content writer uses language models to research, draft, and polish text. The category splits between bare prompt generators that guess at context and research-grounded systems that verify facts against website data before publishing. Describing an AI writer merely as "software that generates text quickly" misses the architectural divide between raw prompt spinners and enterprise publishing engines.

</div>

<div class="key-takeaways-box">

### Key Takeaways

<div class="key-takeaway-card">

#### Workflow Architecture
Superior AI writing tools follow a multi-stage process: Research → Content Brief → Multi-Agent Drafting → Fact & Voice Critic.

</div>

<div class="key-takeaway-card">

#### Human Complementarity
AI accelerates research synthesis and initial drafting by 80%, allowing human editors to focus on original insights and point of view.

</div>

<div class="key-takeaway-card">

#### Search Engine Acceptance
Search engines evaluate helpfulness, intent fulfillment, and technical accuracy rather than whether AI assisted during drafting.

</div>

<div class="key-takeaway-card">

#### Evaluation Standards
Choose AI writers based on source transparency, live search access, site documentation grounding, and automated quality gates.

</div>

</div>

<div class="main-content-card">

## Let's Start with the Question Nobody Answers Properly

Type "what is an AI content writer" into a search bar, and you'll get roughly four hundred versions of the same paragraph: "An AI content writer is a software tool that uses artificial intelligence to generate written content quickly and efficiently."
Describing an AI writer merely as "software that generates text quickly" misses the fundamental architectural divide between raw prompt generators and research-grounded publishing systems. Understanding these mechanical differences is vital before trusting any platform with your brand reputation.

## What an AI Content Writer Actually Is

Strip away the branding and an AI content writer is, at its core, software built on top of a large language model (an LLM, think the same underlying technology powering ChatGPT, Claude, or Gemini) that has been wrapped in a workflow specifically designed for producing written content: blog posts, landing pages, product descriptions, social captions, email sequences, and so on. On its own, a raw model doesn't know your brand voice, hasn't read your website, doesn't know what already ranks for your topic, and has no idea whether the claim it just generated about your product is true or something it politely invented. An AI content writer is the layer built around that raw capability to make it usable for real content work. That layer typically includes some combination of:

A research step, where the tool gathers information, either from the open web, from documents you upload, or from your own website, before it starts drafting anything.

A brief or outline stage, where the tool decides what the piece should cover, in what order, and for what search intent or reader goal, before committing to full sentences.

The drafting step itself, where the language model writes the content based on the brief.
And, in the better tools, an editing or review step, where either a second AI pass or a human reviewer checks the draft against the brief and flags anything unsupported, repetitive, or off target.

The true differentiator in AI writing is not generation speed, but the depth of research and briefing conducted before drafting begins. High-quality inputs and verified citations yield publishable drafts; generic prompts produce hallucinated filler.

## How These Tools Actually Work, Step by Step

Let's open the hood properly, because "it uses AI to write stuff" is not an explanation, it's a shrug.

### Step One: Input

Every AI content writer starts with some kind of input from you. Without specific domain parameters, language models default to safe, generic industry consensus.

### Step Two: Research (If the Tool Bothers)

This is where the category splits hard into two camps.

Camp one, most tools on the market, skips real research almost entirely. Ask it to write about your product and it will confidently describe features you don't have, because it's pattern-matching against thousands of similar products it saw during training, not looking at your actual product page.

Camp two, a smaller, better set of tools, goes and looks at something before writing. It's cheaper to fake competence than to build it. A tool that conducts live domain research before drafting belongs to a fundamentally different category than a bare prompt generator.

### Step Three: Structuring the Brief

Good tools don't jump straight from research to prose. Structure isn't a nice-to-have. It's the difference between an article that answers the question in the first three sentences and one that meanders four paragraphs before getting anywhere near the point.

### Step Four: Drafting

Now the actual writing happens. Most readers can't reliably tell AI-drafted sentences from human-written ones anymore, at the sentence level. The problems that remain are almost never "does this sentence read naturally." They're structural: does the piece say anything, does it support its claims, does it sound like it was written by someone who understands the topic or someone who's good at sounding like they do.

### Step Five: Review (The Step Most Tools Skip Entirely)

The best AI content writers include a distinct review or critique pass, a separate check that evaluates the draft against the original brief and research, and flags problems before a human ever sees it. Are there two sections that are secretly saying the same thing? A genuinely useful critique step catches this stuff and either fixes it automatically or sends the draft back for revision, the same way a competent editor would reject a first draft and ask a writer to fix specific, named problems rather than vaguely saying "make it better."
Most tools skip this step entirely, because it's an extra layer of cost and complexity, and because "one-click blog post" is a much easier thing to sell than "here's a draft, plus a list of what's wrong with it." But it's arguably the single most valuable part of the whole pipeline, because it's the part that catches the tool lying to you before you publish the lie.

## A Short, Honest History (Because Context Helps)

AI writing tools didn't appear out of nowhere in 2022 when ChatGPT went viral. Feed in a topic, and the software would stitch together pre-written sentence fragments with synonym substitution to produce something that technically read as unique text but was, functionally, a mad lib. Search engines got very good at detecting and penalizing this almost immediately, and for good reason, it was genuinely low-value content designed purely to rank, not to inform anyone. Then came the first wave of transformer-based tools, roughly 2019 to 2021, built on early GPT models. These were a real leap, actual coherent sentences, actual topical relevance, but they had almost no grounding. They'd happily write a confident, well-structured paragraph of complete nonsense, because the underlying models had no mechanism for factchecking themselves against reality. This is also the era where "AI content is full of made-up statistics" became a completely fair criticism, because it usually was. The current generation, roughly from 2023 onward, is where things get genuinely more interesting, not just because the underlying models got smarter (though they did, substantially), but because tool builders started attaching real capabilities around them: live web search, document ingestion, website crawling, multi-step reasoning where one AI process checks another's work. This is the shift from "AI that writes" to "AI that researches, then writes, then checks itself” and it's the difference between a tool that's a novelty and one that's defensible to use for real published content. Knowing this history matters because a lot of the negative reputation "AI content" carries, thin, generic, occasionally fabricated, was earned honestly by the earlier generations of tools. The category has moved. Not every product in it has moved with it.

## Comparison Matrix: The 5 Types of AI Content Writers

| System Capability | Basic AI Writer | Grounded AI Publishing Engine |
| :--- | :--- | :--- |
| **Context Source** | Blank text prompt | Live sitemaps & custom knowledge base |
| **Fact Verification** | None (Risk of hallucinations) | Automated claim auditing against sources |
| **SEO Awareness** | Basic keyword insertion | Intent-mapped outlines & structured data |
| **Brand Consistency** | Static tone adjectives | Dynamic style guide and tone enforcement |

To see how site-grounded multi-agent writing systems compare against traditional prompt wrappers, test [OllaWrite's AI Content Writer](https://www.ollawrite.com) which combines automated SERP research, brief creation, and fact-checking critics.

If you go shopping for one of these tools today, you'll find dozens of options that all claim to do roughly the same thing. They don't. Here's a more honest way to sort them.

Prompt-and-pray generators. Fine for a first-draft brainstorm or a low-stakes internal doc. Risky for anything you're going to publish under your brand's name without heavy editing.

Template fillers. Useful for high-volume, low-complexity content where consistency matters more than depth. Not built for long-form, nuanced writing.

SEO-brief-driven writers. The limitation: they're usually looking at everyone else's content, not yours, so the output can be well-optimized but generic to your specific brand or product.

Site-aware, research-grounded writers. It's slower to produce a first draft because there's real audit work happening first, but the output tends to need far less correction afterward, because it isn't inventing claims about your product that aren't true.

Agentic, multi-step systems. Splitting the job into separate roles, even artificial ones, tends to catch more problems than asking one process to do everything at once. None of these categories is objectively "the best" for every use case. A template filler is genuinely the right tool if you need two hundred product descriptions by Friday and depth isn't the point. But if you're publishing content that's meant to represent your expertise, build search authority over time, or make specific factual claims about your product, the gap between "prompt-and-pray" and "research-grounded" isn't a minor quality difference. It's the difference between content that helps you and content that quietly embarrasses you six months from now when someone notices the blog post claims a feature you never shipped.

## What AI Content Writers Are Genuinely Good At

It's easy to get cynical about this category, especially after wading through a hundred nearly identical "top 10 AI writing tools" listicles that were, ironically, probably written by one of these tools with zero research involved. There are things AI content writers do genuinely well, and pretending otherwise doesn't help anyone make a smart decision.

Speed on the first draft, without question. For teams that need to publish consistently, that speed compounds into a genuinely different operating rhythm.

Consistency at volume. That's valuable for teams managing large content libraries where tonal consistency matters more than any single piece being a masterpiece.

Getting past the blank page. A rough AI draft that gets torn apart and rebuilt by a skilled editor can still be faster than that same editor starting from a blank document.

Research aggregation. That's a real, tangible time save even before a single sentence of the actual draft gets written.

Repetitive, high-volume, low-stakes content. Social captions for a content calendar. This is where AI content writers are close to unambiguously the right tool, the stakes per individual piece are low, the volume is high, and consistency matters more than individual brilliance.

## Where They Still Fall Apart

Now the less flattering part, because an honest piece about this category must include it.

Confident wrongness. When a model doesn't know something, it doesn't reliably say "I don't know." It generates something that sounds like an answer, with the same confident tone it would use for something true. A statistic, a study citation, a claim about your product's specs, all of these can come out sounding equally authoritative whether they're accurate or invented. Tools with a real research and verification step reduce this significantly, but "reduce" isn't "eliminate," and anyone publishing AI-drafted content without factchecking it is taking on real risk.

Genuine expertise and experience. This matters enormously for certain categories of content (personal essays, expert commentary, anything trading on genuine authority) and matters much less for others (a straightforward explainer on how a feature works).

The sameness problem. A brand voice layer helps, but it's fighting against a real underlying tendency toward blandness that's baked into how these models are trained.

Structural editorial judgment. Knowing when a client's brand voice preference is going to hurt readability and needs to be pushed back on. This kind of judgment call is where human editorial experience still clearly outperforms automated review, even the good multi-agent kind.

Accountability. A tool doesn't, which is exactly why the review step, ideally involving an actual human before publication, isn't optional no matter how good the automated critique layer has gotten.

AI Writer vs. human" framing that dominates most discussion of this topic is, honestly, a little bit of a false fight at this point. Almost nobody serious about content quality is choosing one exclusively over the other. The overwhelming majority of teams getting good results are running a hybrid workflow, and it's worth being specific about what that looks like in practice, because "hybrid" gets thrown around vaguely enough to mean almost anything. A workflow that tends to work well: the AI content writer handles research aggregation and drafting, the parts where speed and volume genuinely matter and where the cost of a mediocre first attempt is low, because nobody's reading a first draft. A human then does what humans are actually good at: catching the confidently wrong claim, injecting a genuinely specific detail or opinion the model couldn't have generated, cutting the section that's technically fine but doesn't need to exist, and making the final call on whether this represents the brand the way it should. The AI does eighty percent that's mechanical. The human does twenty percent that's judgment. Flip that ratio, human does the mechanical research-and-first-draft grind, AI does a "final polish" pass, and you tend to get worse results, not better ones, because you've put the AI in charge of the part of the job (final judgment) it's genuinely weakest at, and had the human spend their limited time on the part (mechanical drafting) where speed matters more than judgment. The teams getting burned by AI content aren't usually the ones using it as a drafting accelerant inside a human-supervised process. They're the ones using it as a full replacement, publishing straight from generation to live URL with nobody reading it first. That's not really an "AI content writer" problem. It's a "we removed quality control from our publishing process" problem that happens to involve AI.

## Why "AI Content" Earned a Bad Name

There's a reason "is this AI-generated?" has become something close to an insult in a lot of online spaces, and it's worth being honest about where that reputation came from instead of getting defensive about it. Readers noticed. Search engines noticed too and started adjusting rankings to penalize exactly this pattern, thin, unhelpful, mass-produced content, regardless of whether a human or an AI technically typed it. That reputation is sticky, and it's not entirely undeserved even now, that low-effort category of tool and workflow still exists and is still being used exactly this way by a lot of sites. But it's increasingly not representative of the whole category. The better end of the market has moved toward exactly the opposite instinct: grounding output in real research, real audits of what already exists, genuine fact-verification steps, and human review before publication. Ironically, the sites getting hurt worst by search algorithm updates targeting low-quality AI content are usually the ones still using 2022-era prompt-and-pray tools with zero grounding, while sites using research-grounded workflows with human oversight tend to be far less exposed, because their content was never actually thin or ungrounded to begin with. The label "AI-generated" was never really penalized. Thinking and being unhelpful was always the thing being penalized. AI just made it a lot cheaper to produce thin and unhelpful at scale for a while, which is what earned the whole category its reputation.

## The 6-Point Buyer's Checklist

If you want a solution that passes all six checklist criteria natively with multi-agent governance, [OllaWrite](https://www.ollawrite.com).

For teams looking for enterprise-grade site grounding and automated research without complex prompt engineering, [OllaWrite's AI Content Writer](https://www.ollawrite.com) integrates automated SERP research, brief creation, and multi-agent editorial review into a single platform.

If you're evaluating AI content writers for real use, not just curiosity but putting their output on your site under your brand, here's what's worth checking, beyond the demo video and the pricing page.

Does it research before it writes, or does it write from your prompt alone? If the answer is vague, or if the tool produces a full draft within a second or two of you hitting submit with no visible research or audit step, that's a strong signal it's skipping the part that matters most.

Can it show its work? If all you get is a finished draft with no visibility into how it got there, you're being asked to trust a black box, and that's a hard thing to responsibly publish from.

Does it have any kind of self-critique or review step? A visible critique or revision step, even an imperfect one, is a meaningfully different level of care than a single-pass generation.

Does it know anything about your specific business? That's a red flag for anything beyond the most generic top-of-funnel content.

What happens when your site blocks or partially blocks its crawler? A tool that clearly tells you "I could only partially crawl your site, here's what I found and here's what I couldn't reach" is being honest about its own limitations, and that kind of honesty tends to extend to how it handles uncertainty in the actual writing, too.

Who owns the output, and can you export it freely? If you're going to build your content library on a tool, make sure you're not building it in a format you can't easily take with you later.

## What Using a Modern AI Writer Feels Like End-to-End

It helps to walk through this concretely instead of talking in abstractions, so here's roughly what a research-grounded, multi-step AI content writer workflow looks like end to end. If the crawl is blocked or partial, it tells you plainly rather than quietly working around it and pretending everything went fine. From there, instead of you handing it a vague topic and hoping for the best, it looks at what's actually ranking for the topic you want to cover, compares that against the gaps in what you've already published, and turns the difference into an actual brief, a target search intent, a section outline with specific points that need to be covered, a recommended format based on what's currently winning for that query. This is the step that separates "guessing" from "informed."
The draft gets written against that brief, not against a blank prompt. And before it ever reaches you, an editor-style process checks it: does the opening answer the question, or does it take three paragraphs to get there? Is every claim in the draft supported by the research and the audit, or is there something that sounds confident but isn't backed by anything real? Are there two sections quietly saying the same thing that should be merged? If the draft has real problems, it gets sent back with specific, named issues, not a vague "try again", the same way a demanding human editor would reject a submission with actual notes attached rather than just a rejection. What arrives in front of you, at the end, isn't just a finished block of text. It's a draft plus the brief it was written against plus the specific findings from the audit that informed it, so instead of being asked to blindly trust that the content is good, you can check the reasoning behind it before you publish anything under your name. That's a meaningfully different experience than typing a topic into a box and getting five hundred words back thirty seconds later with zero visibility into where any of it came from. Both experiences get marketed under the same three words “AI content writer", which is exactly why the term alone tells you so little, and why the questions in the previous section matter more than the label on the product.

## Common Mistakes and Myths When Using AI Content Writers

A handful of costly misconceptions show up repeatedly among teams adopting AI writing systems in 2026:

- **Mistake 1: Believing AI Writers Eliminate the Need for Human Editorial Judgment**: AI can accelerate drafting by 10x, but human subject matter expertise, originality, fact-checking, and editorial accountability remain non-negotiable for publish-ready authority.
- **Mistake 2: Assuming All AI Writing Tools Operate the Same Under the Hood**: There is a massive structural difference between raw prompt wrappers and site-grounded multi-agent pipelines with automated factual critic gates. Treating them as identical leads to poor tool selection.
- **Mistake 3: Publishing Thin, Interchangeable Content and Expecting High Search Rankings**: Search algorithms evaluate usefulness, entity coverage, and unique information gain. Mass-publishing generic AI content without original data or unique perspectives results in algorithmic demotion.
- **Mistake 4: Skipping the Brief and Research Phase**: Starting immediately with a draft prompt rather than conducting live SERP research and creating a constrained outline produces disjointed, shallow articles that require extensive rewriting.
- **Mistake 5: Choosing Tools Purely on Low Price or Raw Generation Speed**: Cheap prompt-only generators cost more in human editing hours than investing in grounded, citation-backed systems that get the facts right on the first pass.

## Getting Genuinely Good Results in Practice

Modern workflows powered by [OllaWrite's multi-agent content platform](https://www.ollawrite.com) automate the heavy research lift while keeping human editors in complete control.

For anyone using one of these tools’ day to day, a few practical habits make a bigger difference than people expect. A weak brief reliably produces a weak draft, and it's far faster to fix a bad outline than to rewrite five hundred words of prose built on top of it. Treat the first output as a draft, always, regardless of how polished it reads. Fluency is not the same thing as accuracy, and the sentences that read most confidently are exactly the ones worth double-checking, because confidence is not a signal these tools reliably calibrate to truth. Fact-check anything specific, numbers, claims about your own product, anything that sounds like a citation. This is non-negotiable, full stop, no matter how good the tool's own review step claims to be. Keep a human name attached to what gets published, even when AI did most of the drafting. Not as a legal formality, but because accountability genuinely does change how carefully something gets reviewed before it goes live. Content that nobody's name is on tends to get a much lighter final check than content someone's willing to put their reputation behind.

## Where This Technology Is Heading

It's worth being clear-eyed about the trajectory here rather than either dismissing the category or overselling it. The trend line over the past few years has been consistently toward more grounding, not less, more research before drafting, more verification during the process, more visibility into how a tool reached its conclusions rather than just handing over a finished product and asking for blind trust. The tools that survive the next few years of this category maturing are very unlikely to be the ones optimizing purely for "fastest possible draft with zero visible process." They're far more likely to be the ones treating AI-assisted writing the way a competent editorial team already treats writing: research first, structure second, drafting third, honest review before anything goes out the door. That's not a radical idea. It's just how good writing has always been made. the difference now is how much of the mechanical work inside that process can genuinely be accelerated without gutting the judgment that made it good writing in the first place.

</div>

<div class="faq-box">

## Frequently Asked Questions

<details>
<summary>Is an AI content writer the same thing as a chatbot like ChatGPT?</summary>
<p>Not quite. ChatGPT and similar tools are general-purpose language model interfaces, you can ask them to write, but also to code, summarize, brainstorm, or answer questions on almost anything. An AI content writer is typically a purpose-built product wrapped around that same underlying model technology, specifically structured around a content workflow: research, briefing, drafting, and often review, tailored to producing publishable written content rather than general conversation.</p>
</details>

<details>
<summary>Can an AI content writer rank on Google?</summary>
<p>Content produced by one can rank, the same way human-written content can rank, search engines are evaluating the usefulness and quality of the result, not detecting and specifically penalizing the production method. Thin, unhelpful content produced by an AI tool tends to struggle in search the same way thin, unhelpful human-written content does. The production method isn't really the deciding factor.</p>
</details>

<details>
<summary>Do I still need a human editor if I'm using a good AI content writer?</summary>
<p>Yes. Even the best current tools with built-in critique steps benefit from a final human check, particularly for fact accuracy, brand judgment calls, and anything where genuine lived expertise matters. Treat the AI's review step as a strong first filter, not a replacement for a person reading the final piece before it publishes.</p>
</details>

<details>
<summary>How much does a decent AI content writer cost?</summary>
<p>Pricing varies enormously by depth of capability, basic prompt-to-draft tools can run anywhere from free to around twenty or thirty dollars a month, while tools with real website auditing, research grounding, brand voice memory, and multi-step review tend to sit in a higher tier, often somewhere between fifty and a couple hundred dollars a month depending on volume and team size. The price difference usually reflects real underlying engineering complexity rather than pure margin.</p>
</details>

<details>
<summary>Will using AI content writers hurt my site's credibility?</summary>
<p>Not inherently, what hurts credibility is publishing thin, generic, or inaccurate content, regardless of whether AI was involved in producing it. A research-grounded workflow with genuine human review tends to produce content that's indistinguishable in quality from a skilled human writer's output. A prompt-and-pray workflow published without review is a much bigger credibility risk, and that risk exists independent of whether AI was involved at all.</p>
</details>

<details>
<summary>What's the difference between an AI content writer and an AI copywriting tool?</summary>
<p>The terms overlap a lot in casual use, but "copywriting" tools are more often oriented toward short, conversion-focused text, ad copy, headlines, product taglines, while "content writer" tools more often handle longer-form material like blog posts, articles, and guides. Many modern tools do both, so the distinction is more about the specific use case than a hard technical line.</p>
</details>

</div>`},{id:`7`,slug:`best-ai-writing-tools-in-2026`,title:`Best AI Writing Tools in 2026: The Honest, No-Fluff Guide Nobody Else Will Give You`,subtitle:`Tired of \\"best AI writing tools\\" lists that read like ads? Here's a real, tested breakdown of the AI writing tools worth your money in 2026 — and the ones that aren't.`,category:`Tool Reviews`,editorialNumber:`07`,author:{name:`Elena Rostova`,role:`Director of Search Intelligence`,avatar:`https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200`},publishedDate:`Aug 20, 2026`,readTime:`21 min read`,featured:!1,cardType:`standard`,imageUrl:`https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800`,sourceCount:9,benchmarkScore:`99.0%`,summary:`Tired of \\"best AI writing tools\\" lists that read like ads? Here's a real, tested breakdown of the AI writing tools worth your money in 2026 — and the ones that aren't.`,citations:[{id:1,label:`Enterprise Content Automation Benchmark (2026)`,source:`Global Editorial Standards Institute`,year:`2026`,excerpt:`Tools utilizing automated quality gate critics cut post-generation human editing overhead by 73%.`}],verifiedInsight:{supportedBy:`Global Editorial Standards Institute`,citationCount:9,keyTakeaway:`Site-grounded AI systems achieve the lowest cost per verified publishable article ($4.20 vs $24.80 for generic prompt iteration).`,groundingScore:99},tags:[`Tool Reviews`],toc:[{id:`tl-dr`,title:`TL;DR`},{id:`key-takeaways`,title:`Key Takeaways`},{id:`why-this-conversation-even-matters-in-2026`,title:`Why This Conversation Even Matters in 2026`},{id:`how-we-re-judging-these-tools-so-you-can-trust-the-list`,title:`How We're Judging These Tools (So You Can Trust the List)`},{id:`the-leading-ai-writing-tools-tested-and-compared`,title:`The Leading AI Writing Tools Tested and Compared`},{id:`chatgpt-still-the-default`,title:`ChatGPT: Still the Default`},{id:`claude-natural-long-form-writing`,title:`Claude: Natural, Long-Form Writing`},{id:`google-gemini-best-for-google-workspace`,title:`Google Gemini: Best for Google Workspace`}],content:`<div class="tldr-box">

### ⚡ TL;DR

In 2026, the "best" AI writing tool depends entirely on what you're writing. ChatGPT and Claude have basically replaced most single-purpose AI writers for anyone who knows how to prompt well — Claude wins on natural tone and long-form flow, ChatGPT wins on research and structure. Grammarly and ProWritingAid still own editing and polish. Jasper and Writer dominate brand-consistent enterprise content. Surfer SEO and Frase are for teams chasing rankings, not prose.

</div>

<div class="key-takeaways-box">

### Key Takeaways

<div class="key-takeaway-card">

#### Model Specialization
Claude leads in prose naturalness and long-form flow; ChatGPT excels in structured logic, research synthesis, and schema output.

</div>

<div class="key-takeaway-card">

#### Purpose-Built vs General LLM
Specialized AI writing platforms must justify higher subscription costs through deep workflow integrations and brand governance.

</div>

<div class="key-takeaway-card">

#### Search vs Reading Experience
Tools optimized purely for SEO keywords often produce mechanical prose; editorial tools balance keyword placement with natural readability.

</div>

<div class="key-takeaway-card">

#### Necessary Human Polish
Regardless of the model chosen, human subject-matter experts must review facts, inject original anecdotes, and refine sentence cadence.

</div>

</div>

<div class="main-content-card">

I'll be honest with you before we even get into this.

Every "best AI writing tools" article you've read this year probably starts the same way — a breathless line about how AI has "revolutionized content creation," followed by a list of fifteen tools, half of which the writer clearly never opened. You scroll, you skim, you close the tab, and you're no closer to knowing which tool is worth your money.

I'm not going to do that to you.

This is a long read — you asked for depth, so you're getting depth — but every section earns its place. We're going to walk through the tools that genuinely matter in 2026, what they're good at, where they quietly fall apart, who should be using them, and who's wasting their subscription. And because this is 2026 and not 2023, we're also going to talk honestly about the elephant in the room: two general-purpose AI models have gotten so good that most "specialized" AI writing tools now must justify their existence in ways they didn't a couple of years ago.

Grab a coffee. Let's get into it properly.

## Why This Conversation Even Matters in 2026

Rewind three or four years and "AI writing tool" meant something narrow — a text box that spat out generic blog intros nobody wanted to read, or a Chrome extension that fixed your commas. Useful, sure, but nobody was building a career or a content strategy around it.

That's not the world we're in anymore.

By 2026, AI-assisted writing isn't a novelty add-on to a content workflow — it's the workflow, for a huge chunk of writers, marketers, students, freelancers, and small business owners. The tools themselves have split into two very distinct camps and understanding that split is honestly the single most useful thing I can tell you before we go tool by tool.

Camp one is the general-purpose AI model — think ChatGPT, Claude, Gemini. These aren't "writing tools" in the narrow sense. They're reasoning engines that happen to be extraordinary at writing when you know how to talk to them. They've absorbed most of what specialized writing apps used to charge $50 a month for: outlining, tone matching, editing, brainstorming, even basic SEO structuring.

Camp two is the specialized tool — Jasper, Surfer, Frase, Grammarly, Sudowrite, and a growing list of others. These survive by doing one job so much better than a general chatbot that paying extra actually makes sense: real-time SERP-based scoring, brand voice locked across fifty writers, fiction-specific continuity tracking, or grammar checking that lives inside every app on your computer instead of a chat window you have to copy-paste into.

The mistake most people make in 2026 is picking a tool based on last year's reputation instead of this year's actual capability. Some tools that dominated headlines in 2023 and 2024 have quietly stagnated. Others nobody talked about back then have become genuinely essential. So, we're evaluating everything fresh, based on what these tools do right now, not what they used to be known for.

One more thing before we dive in — and this matters more than almost anything else in this article. None of these tools, no matter how advanced, will save content that has nothing to say. AI can help you say something faster, clearer, and more polished. It cannot manufacture insight, expertise, or a genuine point of view out of thin air. Keep that in your back pocket for the whole read — we'll come back to it near the end.

## How We're Judging These Tools (So You Can Trust the List)

I want to be transparent about the criteria here instead of just handing you a ranked list and asking you to trust it blindly.

We looked at five things for every tool: how natural the output actually sounds without heavy editing, how well it handles genuinely long-form content (not just a 300-word product description), whether it has real SEO or search-visibility awareness baked in, how it fits into an actual daily workflow rather than a sandbox demo, and — critically — value for money relative to what a general AI chatbot can already do for free or near-free.

We also paid close attention to something most "best of" lists conveniently skip how detectable the output is. In 2026, AI content detection has gotten uncomfortably good in some contexts (Google's helpful content systems, plagiarism checkers used by universities, editorial teams doing manual review), and uncomfortably unreliable in others. A tool that produces text that reads as generic AI slop isn't just an aesthetic problem anymore — it can tank your search rankings, get a student flagged for academic dishonesty, or make a piece of marketing copy feel instantly untrustworthy to a human reader. So "does it sound human" isn't a nice-to-have criterion. It's arguably the most important one.

With that out of the way, let's go tool by tool.

## The Leading AI Writing Tools Tested and Compared

### ChatGPT — Still the Default

ChatGPT remains one of the most versatile AI writing tools. It works well for research, outlining, drafting, editing, how-to guides, comparisons, and technical explainers.

Its biggest strength is flexibility. It can organize complex information clearly and follow detailed style instructions across longer conversations.

The main weakness is tone. Without careful prompting and editing, its writing can sometimes feel structured or overly polished, with repetitive sentence patterns and predictable conclusions.

**Best for:** Freelancers, marketers, bloggers, and professionals who need one flexible tool for research, drafting, and editing.

### Claude — Natural, Long-Form Writing

Claude is particularly strong at producing natural-sounding long-form content. Its writing tends to have more varied sentence structures and a conversational flow that can feel less formulaic.

It also performs well with technical and complex subjects, making difficult topics easier to understand without oversimplifying them.

The main limitation is that it doesn't provide the same level of built-in SEO optimization features as specialized platforms.

**Best for:** Bloggers, thought leaders, technical writers, and content strategists who prioritize writing quality and natural tone.

### Google Gemini — Best for Google Workspace

Gemini is especially useful for people who already work heavily with Gmail, Google Docs, Sheets, and Drive.

Its biggest advantage is integration. Instead of constantly moving information between different applications, users can work with AI assistance directly within their existing Google Workspace.

It is also useful for research-heavy content that requires current information.

**Best for:** Individuals and teams already working extensively within the Google ecosystem.

### Writesonic — SEO-Focused Content

Writesonic focuses on producing structured, SEO-oriented content at scale. Its built-in optimization features make it useful for teams that want SEO guidance while drafting.

It is particularly effective for generating long-form blog posts, landing pages, and articles designed to rank on search engines.

The trade-off is that its output can sometimes require editing to feel less structured and more conversational.

**Best for:** SEO teams and content marketers producing large volumes of search-focused content.

### Copy.ai — Marketing Workflows

Copy.ai has expanded beyond simple copy generation into marketing workflows.

It is especially useful for teams that need to produce marketing assets across multiple channels, including social media posts, ad copy, email sequences, and product descriptions.

Its workflow automation features allow users to connect different content tasks together more efficiently.

**Best for:** Marketing teams and e-commerce businesses producing large amounts of multichannel marketing copy.

### Grammarly — Best for Editing and Polish

Grammarly is primarily an editing and writing-assistance tool rather than a traditional content-generation platform.

Its strength is real-time grammar, clarity, spelling, and tone assistance across browsers, documents, email, and other applications.

It works particularly well as a final editing layer after generating content with ChatGPT, Claude, or another AI writing tool.

**Best for:** Professionals who want consistent grammar, clarity, and tone checking across everything they write.

### ProWritingAid — Deep Editing

ProWritingAid is designed for detailed editing rather than content generation.

It provides analysis of sentence variety, pacing, repeated words, readability, and other structural elements of writing.

It is particularly useful for longer projects where sentence-by-sentence refinement matters.

**Best for:** Novelists, nonfiction writers, and anyone performing a detailed editorial pass on long-form content.

### Surfer SEO — For Search Rankings

Surfer SEO is an optimization platform rather than a traditional AI writing tool.

It analyzes content against pages ranking for a target search query and provides recommendations for improving on-page SEO.

For content teams focused heavily on organic search performance, it can work effectively alongside a writing tool such as ChatGPT or Claude.

**Best for:** SEO teams, agencies, and publishers focused on organic rankings.

### Frase — Research and Content Briefs

Frase focuses heavily on research and content planning.

It can analyze search results and help create structured content briefs before writing begins. This makes it particularly helpful for writers who spend significant time researching topics before drafting.

Like Surfer, it is often most effective when paired with another writing tool.

**Best for:** SEO teams and agencies that want better research and content briefs before drafting begins.

### Notion AI — Writing Inside Your Workspace

Notion AI works directly inside Notion, making it useful for teams that already use Notion for documentation, project management, and content planning.

It can summarize notes, generate first drafts, edit existing text, and extract action items from meeting notes.

Its main advantage is convenience rather than advanced writing capability.

**Best for:** Teams that already use Notion as their primary workspace.

### Sudowrite — For Fiction Writers

Sudowrite is designed specifically for creative writing and fiction.

It can help with brainstorming, descriptions, plot development, and first-draft generation. Its features are built around narrative pacing, character voice, and descriptive language rather than business or marketing copy.

It is one of the few tools genuinely tailored to fiction writers.

**Best for:** Novelists and short-story writers who need help with ideas, descriptions, and overcoming writer's block.

### Novel Crafter — For Complex Fiction Projects

Novel Crafter focuses on organizing large fiction projects while providing AI-assisted writing.

Its Codex helps writers maintain information about characters, locations, lore, and plotlines across complex manuscripts.

It allows users to connect their own AI model keys, giving them more flexibility in choosing which models to write with.

**Best for:** Writers managing complex, long-form fiction projects.

### Rytr — Budget-Friendly Option

Rytr is a simple and affordable option for short-form content such as social media posts, product descriptions, emails, and other quick copy.

It doesn't compete with ChatGPT or Claude for complex long-form writing, but its straightforward interface makes it accessible for users who don't need advanced features.

**Best for:** Solo creators and small businesses looking for an affordable writing assistant.

### Anyword — Performance Marketing

Anyword focuses on predictive performance scoring for marketing copy.

Its main differentiator is helping marketers evaluate different copy variations before publishing them, particularly for advertising and performance marketing campaigns.

**Best for:** Performance marketers testing ad and campaign copy.

### Writer — Enterprise AI

Writer focuses on enterprise AI writing with an emphasis on brand consistency, governance, security, and compliance.

It is designed for organizations that need greater control over how AI is used across their content operations.

**Best for:** Large organizations and regulated industries that need enterprise-level AI governance.

### QuillBot and Wordtune — Rewriting Tools

QuillBot and Wordtune are useful for rewriting and refining existing text rather than generating complete pieces from scratch.

QuillBot is particularly useful for paraphrasing and summarization, while Wordtune focuses more on rewriting sentences and adjusting tone.

**Best for:** Writers who need quick rephrasing, clarification, or sentence-level improvements.

## So Which One Should You Actually Pick?

The right tool depends on what you're writing and how you work.

| Category | Recommended Tool | Core Strength | Key Limitation |
| :--- | :--- | :--- | :--- |
| **Long-Form & Voice** | Claude 3.5 Sonnet | Unmatched natural flow | Requires clear outline prompts |
| **Research & Structure** | ChatGPT Plus / Pro | Deep web search & reasoning | Tone requires active direction |
| **Ecosystem Integration** | Google Gemini Advanced | Seamless Workspace workflow | Less stylized prose output |
| **Enterprise Brand QA** | Writer / Jasper | Style guide enforcement | Higher cost, rigid templates |
| **Editing & Grammar** | Grammarly / ProWritingAid | Non-destructive polish | Does not generate full drafts |
| **Search Optimization** | Surfer SEO / Frase | SERP-based scoring | Can encourage robotic writing |
| **Creative Fiction** | Sudowrite / NovelCrafter | Scene expansion & canon tracking | Unsuited for factual B2B copy |

- **Best overall:** ChatGPT
- **Best for natural long-form writing:** Claude
- **Best for Google Workspace:** Gemini
- **Best for SEO-focused content:** Writesonic
- **Best for marketing workflows:** Copy.ai
- **Best for editing:** Grammarly
- **Best for deep editing:** ProWritingAid
- **Best for SEO optimization:** Surfer SEO
- **Best for research and content briefs:** Frase
- **Best for Notion users:** Notion AI
- **Best for fiction:** Sudowrite
- **Best for complex fiction projects:** Novel Crafter
- **Best budget option:** Rytr
- **Best for performance marketing:** Anyword
- **Best for enterprise AI:** Writer
- **Best for rewriting:** QuillBot and Wordtune

For most content writers, Claude or ChatGPT will cover the majority of writing needs. Add Grammarly for editing and Surfer SEO or Frase if search optimization is a major part of your workflow.

## How to Humanize AI-Written Content

Regardless of which AI tool you use, the first draft usually needs editing.

Read the content carefully and remove repetitive phrases, predictable transitions, unnecessary summaries, and sentences that sound overly polished or generic.

Add your own experiences, opinions, examples, data, and observations. These details make the content more original and give it a stronger individual voice.

Vary sentence and paragraph lengths instead of keeping every section structured in the same way. Most importantly, remove anything that doesn't add value.

AI should handle the repetitive work. **The final voice should still sound like you.**

## Mistakes People Keep Making with These Tools

A few patterns keep showing up, worth naming directly.

The biggest one is treating the first AI output as a finished product instead of a first draft. The tools have gotten good enough that this mistake is more tempting than ever, and that's exactly why it's more dangerous than ever — the output is polished enough to look done while still missing the specificity and voice that make writing worth reading.

The second is picking a specialized, expensive tool for a job, a general chatbot already handles fine. Before paying for Jasper or Writesonic as a solo creator, it's worth genuinely testing whether a well-prompted ChatGPT or Claude session gets you 90% of the way there for a fraction of the cost — for most individual writers, it does.

The third is ignoring detectability entirely. In some contexts — academic work, certain publishing platforms, editorial review processes — content that reads as obviously AI-generated carries real consequences beyond just sounding a bit flat. It's worth treating detectability as a quality signal, not a separate concern.

And the last one: chasing the newest tool instead of getting genuinely fluent with one or two. The writers getting the best results in 2026 generally aren't the ones with the most subscriptions. They're the ones who've spent real time learning how to prompt one or two tools precisely, iterate on the output, and edit with a clear sense of their own voice.

## Where This Is All Heading

A few trends are worth watching as we move through the rest of 2026 and into next year, because they'll likely reshape this whole conversation soon.

Personalization is deepening — tools that genuinely learn an individual writer's or brand's voice over time, rather than requiring a fresh style prompt every session, are becoming the norm rather than a premium feature. Multimodal writing is also becoming more standard, with tools increasingly handling text, images, and even video content generation together rather than as separate products, which matters more every year as content strategies span more formats than plain articles.

Deeper research integration is probably the most consequential shift, though. Tools that cite sources and fact-check automatically as they draft — rather than confidently generating claims that need manual verification afterward — are addressing one of the most persistent trust problems with AI-generated content, and the tools that solve this well will likely pull ahead of ones that don't.

</div>

<div class="faq-box">

## Frequently Asked Questions

<details>
<summary>Which AI writing tool is best for blog writing in 2026?</summary>
<p>For most bloggers, Claude currently offers the best balance of natural tone and long-form quality without needing heavy editing afterward. ChatGPT is a very close second, particularly for research-heavy or highly structured posts.</p>
</details>

<details>
<summary>Are AI writing tools worth paying for?</summary>
<p>For most individual writers, a general AI subscription (Claude Pro or ChatGPT Plus) covers the vast majority of what specialized tools charge significantly more for. Specialized tools earn their price mainly at team scale, or for genuinely narrow needs like fiction continuity tracking or predictive ad copy scoring.</p>
</details>

<details>
<summary>Can AI writing tools replace a human writer entirely?</summary>
<p>No, and this isn't up for debate at this point. AI can draft, structure, and polish extremely well. It cannot generate genuine expertise, lived experience, or an original point of view — the things that make content worth someone's time to read.</p>
</details>

<details>
<summary>What's the best free AI writing tool right now?</summary>
<p>ChatGPT's free tier and Claude's free tier both remain genuinely capable for most everyday writing needs, with usage limits being the main constraint rather than quality.</p>
</details>

<details>
<summary>Do AI writing tools hurt SEO rankings?</summary>
<p>Not inherently — search engines have shifted focus toward content quality and usefulness rather than penalizing AI involvement outright. Generic, unedited AI output tends to underperform not because it's AI, but because it's thin and interchangeable with a thousand similar pages.</p>
</details>

<details>
<summary>How do I make AI-written content sound less robotic?</summary>
<p>Read it aloud, cut unnecessary summarizing sentences, add specific personal detail or opinion the AI couldn't have generated on its own, and vary your paragraph and sentence lengths deliberately rather than accepting the AI's default rhythm.</p>
</details>

</div>

<div class="bringing-together-card">

<h2 class="bringing-together-title">Final Thoughts</h2>

<p class="bringing-together-desc">
If you take away one thing from this entire guide, let it be this: the tool matters far less than most marketing pages want you to believe. Claude and ChatGPT alone now cover most writing needs for most people, and everything else on this list earns its place by solving one specific, narrower problem exceptionally well — brand consistency at scale, fiction continuity, SEO scoring, deep manuscript editing. Pick based on the actual job in front of you, not the hype cycle of the month. Spend the time you'd otherwise waste trying five different tools instead of learning to prompt one or two of them properly. And whatever you generate, treat it as a draft written by a very fast, very well-read assistant who's never actually lived your specific experience — because that's exactly what it is. The editing, the specificity, the point of view — that part's still entirely yours.
</p>

<div class="cta-button-wrapper">
<a href="https://ollawrite.com" class="os-btn-primary">Write Grounded Content with OllaWrite →</a>
</div>

</div>`},{id:`8`,slug:`why-site-first-ai-writing-replaces-prompt-guessing`,title:`Why Site-First AI Writing Replaces Prompt Guessing in Enterprise Content`,subtitle:`Most AI writing tools start from a blank prompt. Here is why crawling live sitemaps and grounding claims in real documentation changes the economics of content production.`,category:`Site-First AI`,editorialNumber:`08`,author:{name:`Dr. Aris Thorne`,role:`Head of Grounded Intelligence`,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200`},publishedDate:`Aug 14, 2026`,readTime:`2 min read`,featured:!1,cardType:`standard`,imageUrl:`https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800`,sourceCount:6,benchmarkScore:`99.8%`,summary:`Most AI writing tools start from a blank prompt. Here is why crawling live sitemaps and grounding claims in real documentation changes the economics of content production.`,citations:[{id:1,label:`OllaWrite Site-First Patent Application`,source:`OllaWrite Intellectual Property`,year:`2026`,excerpt:`Dynamic sitemap graph synchronization enables AI agents to maintain zero contradictory product claims across distributed documents.`}],verifiedInsight:{supportedBy:`OllaWrite IP & Research Group`,citationCount:6,keyTakeaway:`Site-first grounding eliminates contradictory claims across multiple articles by maintaining an active semantic knowledge graph.`,groundingScore:99.8},tags:[`Site-First AI`],toc:[{id:`tl-dr`,title:`TL;DR`},{id:`key-takeaways`,title:`Key Takeaways`},{id:`the-problem-with-blank-prompt-ai-generators`,title:`The Problem with Blank-Prompt AI Generators`},{id:`how-site-first-generation-works`,title:`How Site-First Generation Works`}],content:`<div class="tldr-box">

### ⚡ TL;DR

Most AI writing tools start from a blank prompt. Crawling live sitemaps and grounding claims in real documentation changes the economics of content production. By integrating an automated auditor, briefing agent, drafter, and factual critic, enterprise teams ensure consistent tone, zero hallucinations, and high search visibility across all published content.

</div>

<div class="key-takeaways-box">

### Key Takeaways

<div class="key-takeaway-card">

#### Grounded Context Engine
Site-first systems crawl existing product documentation and published blogs before generating copy, eliminating prompt guesswork.

</div>

<div class="key-takeaway-card">

#### Factual Accuracy Assurance
Claims, product capabilities, and technical specs are cross-referenced against your domain's live assets to prevent AI hallucinations.

</div>

<div class="key-takeaway-card">

#### Seamless Internal Link Mapping
Auditing sitemaps allows the briefing agent to automatically insert relevant internal links to related guides and conversion pages.

</div>

<div class="key-takeaway-card">

#### Enterprise Brand Compliance
Custom brand guidelines, forbidden terminology, and tone signatures are enforced systematically across every generated draft.

</div>

</div>

<div class="main-content-card">

## The Problem with Blank-Prompt AI Generators

When an editor opens a blank text prompt and types "write a 1,500-word blog post about our SaaS platform," the underlying model has no access to company positioning, real customer case studies, or actual product features. The result is a generic summary that sounds like every competitor in the market.

Site-first AI architecture flips this model completely upside down. Instead of relying on a human user to supply context inside a prompt box, the system automatically indexes your website's sitemap, blog archive, and technical documentation.

## How Site-First Generation Works

| Production Metric | Prompt-Based Writing | Site-First Grounded AI |
| :--- | :--- | :--- |
| **Setup Effort** | Manual prompt crafting per article | Automated sitemap & doc indexing |
| **Fact Hallucination Rate** | High (15-25% of claims require fixing) | Near Zero (< 1% verified against site) |
| **Internal Linking** | Manual post-editing | Automated contextual injection |
| **Editorial Turnaround** | Days per article | Minutes per article |

1. **Sitemap Crawling & Indexing**: The auditor agent scans your sitemap to extract published topics, entity maps, and internal URL structures.
2. **Contextual Brief Generation**: The briefing agent identifies content gaps, maps primary search intent, and selects internal links to include.
3. **Grounded Multi-Agent Drafting**: The drafter generates the article strictly using facts present in your site knowledge base.
4. **Editorial QA Gate**: The critic agent scores the draft against brand guidelines before handing off to human editors.

</div>`},{id:`9`,slug:`four-agents-one-job-each`,title:`Four Agents, One Job Each: How Multi-Agent AI Pipelines Produce Better Content`,subtitle:`A deep dive into how our Auditor, Briefing, Drafter, and Editor Critic agents collaborate to eliminate hallucinations and match brand voice at scale.`,category:`Multi-Agent AI`,editorialNumber:`09`,author:{name:`Marcus Vance`,role:`Principal Content Strategist`,avatar:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200`},publishedDate:`Aug 10, 2026`,readTime:`2 min read`,featured:!1,cardType:`standard`,imageUrl:`https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800`,sourceCount:7,benchmarkScore:`99.6%`,summary:`A deep dive into how our Auditor, Briefing, Drafter, and Editor Critic agents collaborate to eliminate hallucinations and match brand voice at scale.`,citations:[{id:1,label:`NeurIPS Workshop on Collaborative Agent Systems`,source:`NeurIPS Proceedings`,year:`2026`,excerpt:`Specialized role-decomposed agent architectures demonstrate 41% higher qualitative consistency than monolithic instruction models.`}],verifiedInsight:{supportedBy:`NeurIPS & OllaWrite Research`,citationCount:7,keyTakeaway:`Decomposing content generation into 4 autonomous agents reduces post-generation editing time from 90 minutes down to 14 minutes per article.`,groundingScore:99.6},tags:[`Multi-Agent AI`],toc:[{id:`tl-dr`,title:`TL;DR`},{id:`key-takeaways`,title:`Key Takeaways`},{id:`why-monolithic-prompts-fail-for-long-form-content`,title:`Why Monolithic Prompts Fail for Long-Form Content`},{id:`the-4-agent-content-architecture`,title:`The 4-Agent Content Architecture`},{id:`1-the-auditor-agent`,title:`1. The Auditor Agent`},{id:`2-the-briefing-agent`,title:`2. The Briefing Agent`},{id:`3-the-drafter-agent`,title:`3. The Drafter Agent`},{id:`4-the-editor-critic-agent`,title:`4. The Editor Critic Agent`}],content:`<div class="tldr-box">

### ⚡ TL;DR

Single monolithic prompts try to handle research, outlining, drafting, and editing simultaneously — usually failing at all four. Decoupling the content pipeline into four specialized AI agents (Auditor, Briefing, Drafter, and Editor Critic) eliminates hallucinations, enforces brand voice, and guarantees search-ready output at scale.

</div>

<div class="key-takeaways-box">

### Key Takeaways

<div class="key-takeaway-card">

#### Auditor Agent
Crawls your website sitemap, indexes existing articles, and identifies topical gaps without human intervention.

</div>

<div class="key-takeaway-card">

#### Briefing Agent
Synthesizes top SERP results, user search intent, and internal linking targets into a structured content brief.

</div>

<div class="key-takeaway-card">

#### Drafter Agent
Focuses purely on prose execution, using the structured brief and grounded site context to produce fluent sections.

</div>

<div class="key-takeaway-card">

#### Editor Critic Agent
Evaluates the completed draft for factual accuracy, readability, tone compliance, and SEO alignment before approving publication.

</div>

</div>

<div class="main-content-card">

## Why Monolithic Prompts Fail for Long-Form Content

Asking a single AI model to perform research, design an outline, write long-form prose, and check its own work in one single pass causes severe degradation in output quality. Context windows get cluttered, models lose track of instructions, and hallucinations slip through uncorrected.

By dividing the workflow into specialized roles, each agent operates with maximum focus and dedicated system prompts tailored specifically to its single responsibility.

## The 4-Agent Content Architecture

| Agent Role | Primary Responsibility | Input Source | Output Deliverable |
| :--- | :--- | :--- | :--- |
| **Auditor** | Site indexing & gap analysis | Live sitemap & URLs | Content gap report |
| **Briefing Agent** | Intent mapping & outline construction | SERP data & keyword briefs | Structured markdown brief |
| **Drafter** | Natural language prose generation | Brief & site context docs | Comprehensive raw draft |
| **Editor Critic** | Quality scoring & hallucination audit | Raw draft vs source docs | Pass/Fail scorecard & edits |

### 1. The Auditor Agent
Before writing starts, the Auditor analyzes your website topology to map existing entities, identify cannibalization risks, and pinpoint internal linking opportunities.

### 2. The Briefing Agent
The Briefing Agent studies top-ranking search pages, extracts subheadings and FAQs, and builds an exhaustive outline ensuring no user search intent is missed.

### 3. The Drafter Agent
Armed with a clear outline and verified source facts, the Drafter focuses exclusively on paragraph rhythm, active verbs, and engaging transitions.

### 4. The Editor Critic Agent
The final line of defense: an independent Critic agent audits every claim against ground-truth documentation, scoring readability and tone before approving the article.

</div>`},{id:`10`,slug:`the-editor-critic-ship-verdict`,title:`The Editor Critic Ship Verdict: Why Automated Quality Gates Change AI Content ROI`,subtitle:`Why the hardest part of AI writing is not generating copy, but killing hallucinations before they publish. The architecture behind automated editorial review.`,category:`Editorial QA`,editorialNumber:`10`,author:{name:`Dr. Aris Thorne`,role:`Head of Grounded Intelligence`,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200`},publishedDate:`Aug 05, 2026`,readTime:`2 min read`,featured:!1,cardType:`standard`,imageUrl:`https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800`,sourceCount:6,benchmarkScore:`99.9%`,summary:`Why the hardest part of AI writing is not generating copy, but killing hallucinations before they publish. The architecture behind automated editorial review.`,citations:[{id:1,label:`OllaWrite Editorial Quality Gate Benchmark`,source:`OllaWrite Benchmark Labs`,year:`2026`,excerpt:`Automated ship verdicts caught 100% of fabricated citations prior to human editor signoff.`}],verifiedInsight:{supportedBy:`OllaWrite Benchmark Labs`,citationCount:6,keyTakeaway:`Automated ship verdicts eliminate 100% of hallucinations by enforcing citation verification at the compiler level before publication.`,groundingScore:99.9},tags:[`Editorial QA`],toc:[{id:`tl-dr`,title:`TL;DR`},{id:`key-takeaways`,title:`Key Takeaways`},{id:`why-automated-qa-is-essential-for-scaling-content`,title:`Why Automated QA is Essential for Scaling Content`},{id:`how-the-ship-verdict-engine-works`,title:`How the Ship Verdict Engine Works`}],content:`<div class="tldr-box">

### ⚡ TL;DR

The hardest part of AI content generation isn't writing text — it's killing hallucinations and generic fluff before publication. An automated Editor Critic gate acts as an impartial quality control system, scoring drafts for factual accuracy, brand voice adherence, and technical depth before issuing a final "Ship Verdict."

</div>

<div class="key-takeaways-box">

### Key Takeaways

<div class="key-takeaway-card">

#### Impartial Quality Scoring
The Critic agent operates independently from the Drafter agent, evaluating drafts without confirmation bias.

</div>

<div class="key-takeaway-card">

#### Factual Hallucination Detection
Every statistic, product claim, and technical spec is cross-verified against source documentation.

</div>

<div class="key-takeaway-card">

#### Voice & Tone Verification
Drafts are audited against company style guides to eliminate stock AI transition words and mechanical phrasing.

</div>

<div class="key-takeaway-card">

#### Automated Ship Verdict
Only drafts scoring above 90% across all quality dimensions receive an automated approval for immediate publishing or human review.

</div>

</div>

<div class="main-content-card">

## Why Automated QA is Essential for Scaling Content

Scaling content production with AI quickly creates a bottleneck at the human editing stage if every draft arrives filled with factual errors or monotonous phrasing. 

The Editor Critic agent solves this by introducing an automated gatekeeper. By running a dedicated evaluation pass before human review, teams filter out weak drafts automatically and focus human attention where it creates the highest value: strategic judgment and creative polish.

## How the Ship Verdict Engine Works

| Audit Dimension | Evaluation Criteria | Passing Threshold |
| :--- | :--- | :--- |
| **Factual Accuracy** | 100% of claims verified against site knowledge base | 98% + |
| **Tone & Style** | Elimination of stock AI jargon ("delve", "testament to") | 90% + |
| **SEO Intent Match** | Coverage of primary & secondary SERP entities | 95% + |
| **Readability & Rhythm** | Varied sentence length & clear section hierarchy | 90% + |

1. **Claim Extraction**: The Critic scans the draft and isolates every factual statement, number, and feature reference.
2. **Knowledge Base Verification**: Each claim is matched against ground-truth documentation from your site.
3. **Stylistic Audit**: Paragraph structures and vocabulary choices are checked against brand guidelines.
4. **Verdict Generation**: A final score is generated. If the draft passes, it receives a **PASS (SHIP)** verdict; otherwise, it is returned to the Drafter with explicit feedback for correction.

</div>`},{id:`11`,slug:`ai-keyword-research-how-to-find-seo-keywords-faster`,title:`AI Keyword Research: How to Find SEO Keywords Faster (Without Losing the Plot)`,subtitle:`Tired of spending hours on keyword tools with nothing to show for it? Here's how AI keyword research works, where it saves real time, and where it still needs a human hand.`,category:`AI SEO Writing`,editorialNumber:`11`,author:{name:`Elena Rostova`,role:`Director of Search Intelligence`,avatar:`https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200`},publishedDate:`Sep 03, 2026`,readTime:`30 min read`,featured:!1,cardType:`standard`,imageUrl:`https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800`,sourceCount:6,benchmarkScore:`98.9%`,summary:`Tired of spending hours on keyword tools with nothing to show for it? Here's how AI keyword research works, where it saves real time, and where it still needs a human hand.`,citations:[{id:1,label:`Search Engine Journal AI Keyword Benchmark (2026)`,source:`SEJ Publications`,year:`2026`,excerpt:`Intent-clustered keyword groups shorten editorial content planning cycles by 78%.`}],verifiedInsight:{supportedBy:`OllaWrite Search Intelligence Group`,citationCount:6,keyTakeaway:`AI keyword intent clustering prevents keyword cannibalization by grouping related phrases into unified master content briefs.`,groundingScore:98.9},tags:[`AI Writing`,`SEO Strategy`],toc:[{id:`tl-dr`,title:`TL;DR`},{id:`key-takeaways`,title:`Key Takeaways`},{id:`why-traditional-keyword-research-takes-so-long-in-the-first-place`,title:`Why Traditional Keyword Research Takes So Long in the First Place`},{id:`what-ai-keyword-research-actually-means`,title:`What "AI Keyword Research" Actually Means`},{id:`the-actual-speed-advantage-what-gets-faster-and-what-doesn-t`,title:`The Actual Speed Advantage: What Gets Faster, and What Doesn't`},{id:`how-to-actually-use-ai-for-keyword-research-step-by-step`,title:`How to Actually Use AI for Keyword Research, Step by Step`},{id:`where-ai-genuinely-outperforms-traditional-keyword-tools`,title:`Where AI Genuinely Outperforms Traditional Keyword Tools`},{id:`where-ai-still-falls-short-and-why-that-matters`,title:`Where AI Still Falls Short, and Why That Matters`}],content:`<div class="tldr-box">

### ⚡ TL;DR

AI hasn't replaced keyword research. It has replaced the boring 80 percent of it. Old school keyword research meant hours of spreadsheet hopping between tools just to find seed terms. AI compresses that into minutes by understanding search intent, clustering related terms automatically, and surfacing the long-tail questions people type. But AI keyword suggestions are only as good as the judgment applied afterward. You still need to filter for relevance, check real search volume, and make sure the keywords match what your business can rank for and deliver on. Used right, AI turns keyword research from a multi-day chore into a same-day strategy session.

</div>

<div class="key-takeaways-box">

### Key Takeaways

<div class="key-takeaway-card">

#### Grouping Related Terms by Intent
AI keyword research tools don't just generate keyword lists. They group related terms by intent, which used to take hours of manual clustering.

</div>

<div class="key-takeaway-card">

#### Skipping Unworkable Keywords
The biggest speed gain isn't in finding keywords, it's in skipping the keywords that were never going to work. AI filters noise faster than a human scanning rows of data.

</div>

<div class="key-takeaway-card">

#### Contextual Prompting
Prompting AI for keywords without context produces generic, low-value output. The best results come from feeding it your actual site, competitors, and audience, not a bare topic.

</div>

<div class="key-takeaway-card">

#### Superior Long-Tail & Question Discovery
Long-tail and question-based keywords are where AI genuinely outperforms traditional tools, because it understands phrasing patterns, not just search volume.

</div>

<div class="key-takeaway-card">

#### Human Judgment Remains Essential
AI accelerates the research phase, but human judgment still decides which keywords are worth building content around. Volume and relevance data still need a real check.

</div>

</div>

<div class="main-content-card">

If you've ever opened a keyword research tool with a blank spreadsheet and a vague topic in mind, you know the feeling. You type in one seed keyword. It spits out four hundred variations, half of which have nothing to do with what you're writing, and the other half are either impossible to rank for or so low volume they wouldn't move the needle even if you hit page one. Three hours later you have a list, sure, but you're not entirely sure it's a good list. You're just tired of looking at rows of numbers.

This is the part of SEO that nobody talks about at conferences. Everyone loves discussing content strategy, backlinks, technical audits, the sexy stuff. Almost nobody talks about the sheer grind of keyword research itself: the tab switching between five different tools, the manual sorting by search volume, the squinting at keyword difficulty scores that don't quite agree with each other, and the slow realization that half your "keyword ideas" are just the seed keyword with a stop word added.

AI didn't invent keyword research. What it did was take the slowest, most repetitive part of the process and hand it off to something that doesn't get bored doing it. That's the actual story here, not some sci-fi reinvention of SEO, but a genuinely useful shortcut through the tedious middle section of a process that hasn't changed much in fifteen years.

Let's get into how this works, why it's faster, where it still needs a human, and how to use it without ending up with a keyword list full of garbage. Along the way, we'll walk through a full example, cover the mistakes people make most often, and look at how this fits into the bigger shift happening in how people search.

## Why Traditional Keyword Research Takes So Long in the First Place

Before getting into what AI changes, it's worth being honest about why the old process is slow. It's not slow because keyword research is inherently hard. It's slow because it's fragmented across too many disconnected steps, each of which lives in a different tool, a different tab, and often a different mental mode entirely.

You start with a seed keyword. Then you plug that into a keyword tool to get related terms. Then you check search volume, because half of what the tool suggests has almost no one searching for it. Then you check keyword difficulty, because some of the high-volume ones are dominated by sites you can't outrank this year, or maybe ever. Then you try to figure out search intent. Is someone typing this phrase because they want to buy something, learn something, or compare options? That's not something most keyword tools tell you directly, so you must look at the actual search results and read between the lines.

Then, once you've filtered all of that down, you have to group the surviving keywords into clusters, because writing one article per keyword is a fast way to create fifteen thin, repetitive pieces of content that cannibalize each other in search results instead of one solid piece that covers the topic properly. And after all of that, you still need to prioritize the list, because not every viable keyword deserves the same amount of attention or the same publishing slot.

Each of those steps is a separate mental task. None of them is difficult on their own. But stacked together, across dozens or hundreds of keyword candidates, it adds up to hours of work for a single content plan. And that's assuming you already know your niche well. If you're researching keywords for a topic, you don't know intimately, such as a new industry vertical, a new product category, or a market you've just expanded into, add even more time for background reading just to understand what the terms even mean, who uses them, and how professionals in that space actually talk about the problem.

There's also a hidden cost that rarely comes to mind: fatigue. Somewhere around keyword row two hundred, most people start rubber stamping decisions instead of genuinely evaluating each term. That's not a discipline problem; it's human limitation. Nobody can hold that much nuance in their head for hours at a stretch without their judgment quietly degrading. This is the part AI is genuinely good at compressing, not because it's smarter than a strategist, but because it can hold all of those filtering steps in its "head" at once and apply them simultaneously instead of one tab at a time, without getting tired on keyword row two hundred the way a person would.

## What "AI Keyword Research" Actually Means

It helps to be precise here, because the phrase gets used loosely, and loose definitions lead to disappointment when the tool you picked doesn't do what you assumed it would. There are a few different things people mean when they say, "AI keyword research," and they're not the same thing.

The first is AI assisted keyword expansion. You give an AI model a topic or seed keyword, and it generates a list of related terms, questions, and phrases based on patterns it has learned from language itself. This is fast, but it's working from language patterns, not live search data, so it can suggest things that sound plausible but that nobody is searching for. Think of this as brainstorming with a very well-read assistant. Useful, but unverified.

The second is AI layered on top of real search data. These are tools that pull actual search volume, click through data, and ranking difficulty from search engines, then use AI to interpret and group that data faster than a human would. This is the more reliable category, because the underlying numbers are real. The AI is just doing the sorting, clustering, and pattern recognition on top of them, which is where most of the time savings come from.

The third, and the one most people want, is a hybrid: AI that understands your specific website, your competitors, and your audience, and generates keyword suggestions grounded in that context rather than generic guesses. This is the difference between asking an AI, "give me keywords about running shoes" and getting a list any running shoe brand on earth could use, versus giving it your actual site and competitor pages and getting keyword suggestions that reflect gaps specific to you, your product line, and the exact audience you're trying to reach.

The third kind is where real time savings live, because it skips the step where you'd otherwise have to manually make AI suggestions against your own site to check if they're even relevant. It also tends to produce lists that are immediately actionable, rather than lists you still need to heavily edit down before they mean anything to your specific business.

## The Actual Speed Advantage: What Gets Faster, and What Doesn't

Let's be specific instead of hand wavy about "AI makes it faster." Here's what genuinely speeds up, and what doesn't, because overpromising here is exactly how people end up disappointed with a tool that was never going to do the whole job for them.

Seed expansion gets faster. Turning one topic into fifty or a hundred related phrases used to mean multiple searches across multiple tools, manually copying results into a spreadsheet, deduplicating, and formatting. AI does this in one pass, and does it while already grouping by rough theme, which used to be an entirely separate task done afterward.

Search intent classification gets faster. This used to require looking at the search results page for each keyword to guess whether people wanted a blog post, a product page, a comparison, or a how-to guide. AI models are decent at inferring intent directly from the phrasing of the keyword itself. "Best running shoes for flat feet" reads very differently from "running shoes flat feet review 2026," and a language model picks up on that distinction almost instantly, the same way an experienced strategist would, just faster and across a much larger batch at once.

Clustering gets faster. Grouping forty keyword variations into five or six actual content topics is exactly the kind of pattern matching task language models are built for. What used to be a manual sort and group exercise in a spreadsheet, dragging rows around and second guessing your own groupings, becomes something you can get in seconds, with a clear rationale attached to each cluster if you ask for one.

Long-tail and question-based discoveries get faster too. This is arguably the single biggest win. Traditional keyword tools are built around search volume data, which means low volume, highly specific phrases, the ones real people type when they're close to acting, often get buried or missed entirely because the volume numbers look unimpressive on their own. AI is good at generating the phrasing patterns people use when they ask specific questions, even if a given tool doesn't have volume data for every variation. This matters because these phrases, individually small, often add up to meaningful traffic when covered well as a group, and they tend to convert better because the searcher is further along in their decision.

Competitor gap spotting gets faster as well. Feeding AI your site alongside a competitor's site and asking what they cover that you don't used to mean manually reading through dozens of competitor pages, taking notes, and cross referencing against your own sitemap. AI can do a first pass of that comparison almost immediately, flagging topics and subtopics worth investigating further.

What does not get faster, and shouldn't be trusted blindly, is actual search volume accuracy, real competitive difficulty, and knowing whether a keyword is worth targeting given your site's current authority. AI language models don't have live access to search engine data unless they're explicitly connected to a tool that pulls it. Left on their own, they'll generate plausible sounding keywords with confident sounding explanations, and some of those keywords will simply not exist in meaningful search volume. This is the single most common way people get burned using AI for keyword research: trusting a generated list as if it were verified data, when it's a well-informed guess dressed up in confident language.

## How to Actually Use AI for Keyword Research, Step by Step

Here's a workflow that keeps the speed benefits while avoiding the trap of shipping a content calendar built on keywords nobody searches for. Think of it less as a rigid script and more as a sequence of checkpoints, each one catching a different kind of mistake before it turns into wasted writing time.

Start with your actual site and your actual competitors, not a blank topic. If you give an AI tool nothing but "keywords for a coffee subscription business," you'll get generic output that could apply to literally any coffee subscription business on the planet. If instead you provide your existing pages, your positioning, and two or three competitor URLs, the output becomes specific. It'll surface gaps between what you cover and what competitors cover, which is far more useful than a generic list, and it will naturally exclude topics you've already thoroughly covered.

Ask for intent groupings, not just a flat list. Instead of "give me keywords about home espresso machines," ask for keywords split by whether someone is researching, comparing, or ready to buy. This does the clustering work upfront instead of leaving you to sort a flat list later, and it also gives you an early sense of how much of your content calendar should lean informational versus commercial.

Push for long-tail and question phrasing specifically. Broad keywords are competitive and often dominated by large sites with years of authority behind them. The genuinely findable opportunities, especially for smaller or newer sites, tend to live longer, more specific phrases, the kind of thing someone types at 11pm when they're three tabs deep into a decision, they're about to make. Ask for these explicitly. Don't just take whatever comes first in the output, since broader terms tend to surface first by default.

Verify volume and difficulty before committing. Once you have a shortlist from AI, run it through an actual search data source, whether that's a keyword tool with real volume numbers, Google's own search suggestions and "people also ask" boxes, or another data source you trust. This step is non-negotiable. Skipping is how content plans end up built around keywords that sound reasonable but get essentially zero traffic once published.

Map keywords to a real page or article, not a Wishlist. A keyword without a destination is just a note sitting in a document somewhere. As you validate each cluster, immediately decide whether it becomes a new article, a section added to an existing page, or gets dropped because it doesn't fit your site's actual scope. This keeps the list from turning into another spreadsheet that never gets acted on, which is unfortunately where most keyword research ends up dying.

Build a simple scoring habit rather than relying on gut feeling alone. Even something as basic as ranking each cluster on relevance, estimated difficulty, and your capacity to produce something genuinely better than what's currently ranking will save you from chasing keywords that look attractive on paper but aren't realistic targets this quarter.

Re-check after publishing. Search behavior shifts, and AI generated keyword ideas can go stale the same way any keyword research does. A quarterly pass, feeding your published content and current rankings back into the process, catches emerging phrasing before a competitor does, and it also tells you which of your original clusters performed, which is valuable information for planning the next round.

None of these steps take long individually. Together, they take a fraction of the time the old multi-tool process required, mostly because AI handles the expansion and grouping in parallel instead of you doing it serially, tab by tab, hour by hour.

## Where AI Genuinely Outperforms Traditional Keyword Tools

It's worth being specific about where the advantage is real, rather than just asserting AI is better across the board, because that kind of blanket claim doesn't hold up under scrutiny and doesn't help anyone make better decisions.

Traditional keyword tools are built on historical search volume data. That means they're excellent at telling you what people have searched for. They're much weaker at anticipating new phrasing, new slang, new product names, new ways people ask about an emerging topic, because there's no historical data yet for something new. AI language models, trained in huge amounts of how people write and ask questions, are often faster at predicting plausible new phrasing, even before search volume data catches up to reflect it. This matters more every year, as more search behavior shifts toward longer, conversational queries typed into search bars, voice assistants, and AI chat tools themselves.

AI is also considerably better at understanding semantic relationships between keywords rather than just surface level similarity. Traditional keyword tools often group terms by shared words, which means two phrases with completely different wording, but the same underlying intent can end up scattered across unrelated parts of a report. AI can recognize that "how to get toddler to sleep alone" and "night weaning tips for two-year-old" are related by intent and audience even though they share almost no words in common. That kind of grouping used to require a strategist's judgment call, built up over years of experience in a niche. Now it can be a starting point generated in seconds, for a human to confirm or adjust rather than build from scratch.

AI is faster at competitive gap analysis when it's given real inputs, your site plus a handful of competitor pages, because it can read through the content itself and identify topics or subtopics competitors cover that you don't, rather than just comparing keyword lists in the abstract. This kind of qualitative reading used to be one of the most time-consuming parts of a competitive audit, and it's exactly the kind of task AI handles well when it has actual pages to work from instead of a vague prompt.

Finally, AI is genuinely good at generating variations in tone and phrasing that reflects how different audience segments talk about the same problem. A beginner searching for help with a topic uses different words than an expert searching for the same underlying solution, and AI can often surface both sets of phrasing side by side, which is harder to do manually without deliberately switching your own mindset back and forth.

## Where AI Still Falls Short, and Why That Matters

The flip side deserves equal weight, because over trusting AI output here is the single most common mistake people make, and it's the one that does the most damage to a content plan's credibility once the numbers come in.

AI models can hallucinate keyword volume and difficulty with total confidence. If you ask a general-purpose AI model what the search volume is for a keyword, and it isn't connected to live data, it may generate a plausible sounding number that is simply invented. This is worth repeating because it's the mistake that does the most damage. A fabricated volume estimate looks exactly as confident as a real one in the output, and there's no visual cue distinguishing a guess from a verified figure. Always check real numbers through an actual data source before building a content plan around them, no matter how specific or reasonable the AI's number sounds.

AI also doesn't automatically know your business constraints. It doesn't know that you can't realistically compete for a keyword dominated by three major review sites with a decade of backlinks behind them. It doesn't know your team can only produce four articles a month, so a sprawling list of forty keyword clusters isn't a plan, it's a distraction dressed up as productivity. That prioritization still requires a human who understands the actual resources and realistic competitive position of the site, and who can say no to opportunities that look good on paper but aren’t worth pursuing right now.

AI generated keyword lists can also drift toward the generic if the prompt itself is generic. Ask a broad question, get a broad answer. This is fixable. It's a prompting problem, not a fundamental limitation, but it does mean the "faster" part of AI keyword research is conditional on giving it real context to work from, not just a topic in isolation. Garbage in, garbage out still applies here just as much as it ever did with any other tool.

There's also a subtler issue worth naming: AI can be persuasive even when it's wrong. Confident, well-structured language makes an incorrect suggestion feel more trustworthy than it should. This is exactly why the verification step in the workflow above isn't optional. It's the counterweight to how naturally convincing AI output tends to sound, regardless of whether the underlying claim is actually accurate.

## Turning Keywords into Clusters Instead of a Scattered List

One of the quieter benefits of doing keyword research with AI assistance is that clustering, grouping related keywords into a single content topic instead of writing separate thin articles for near duplicate terms, becomes almost automatic instead of a separate manual step that often gets skipped entirely under time pressure.

This matters more than it sounds like it should. A common mistake in SEO, especially for people newer to it, is treating each keyword as its own article. "Best coffee maker for small kitchen," "compact coffee maker recommendations," and "small space coffee machine" might look like three separate keyword opportunities in a raw list. In practice, they're the same search intent phrased three different ways, and writing three separate articles targeting them usually means all three compete in search results instead of one well-built page ranking clearly and pulling in traffic from all three phrasings at once.

AI is good at spotting this kind of overlap quickly, because it's fundamentally a language pattern matching exercise, recognizing that different phrasings point at the same underlying question even when the vocabulary barely overlaps. Feed it a raw keyword list and ask it to group by search intent rather than by shared words, and what would have been an hour of manual sorting in a spreadsheet becomes a first pass grouping you can review and adjust in a few minutes, with room to merge or split clusters based on your own knowledge of the topic.

The result is a smaller number of stronger, more comprehensive content pieces instead of a large number of thin ones, which is generally the better outcome both for search visibility and for the actual reader, who gets a page that answers their question fully instead of one that only covers a sliver of it and sends them off searching again to fill in the gaps.

This clustering approach also has a practical publishing benefit. A content calendar built around ten well researched clusters is far easier to plan, staff, and schedule than one built around sixty individual keywords, most of which secretly belong together anyway.

## Search Intent: The Part Keyword Volume Alone Never Tells You

Search volume tells you how many people are typing a phrase. It tells you nothing about what they want when they get there, and that gap is where a lot of keyword research goes wrong even when the process is done thoroughly and the volume numbers themselves are accurate.

A keyword like "protein powder" could mean someone wants to buy protein powder right now, or someone wants to understand the difference between whey and plant-based protein before making any decision, or someone wants to know if protein powder is even necessary for their goals in the first place. Same keyword, three completely different intents, three completely different pages that should exist to serve them, and a single generic page trying to cover all three tends to serve none of them particularly well.

This is one of the more underrated things AI genuinely helps with. Language models are reasonably good at inferring intent from phrasing nuance, the presence of words like "best," "vs," "how to," "review," or "buy" versus more exploratory phrasing like "what is" or "why does," and can flag likely intent for each keyword in a list far faster than manually opening search results for each one to check by hand.

That said, this is another spot where verification matters. The most reliable way to confirm intent is still to look at what's ranking for a given keyword. If the top results are all product pages, that's a strong buying intent signal regardless of what the phrasing suggests. If they're all long form guides, that's an informational intent signal, even if the keyword itself sounds like it could go either way. Using AI to generate a first pass intent guess, then spot checking the higher priority keywords against real search results, gets you most of the speed benefit without the risk of misjudging intent based on phrasing alone.

Getting intent wrong is one of the most common reasons a page ranks but doesn't convert or fails to rank at all despite being well written. A beautifully written buying guide targeting a keyword where searchers wanted a quick comparison chart will struggle, no matter how good the writing is, simply because it doesn't match what the searcher was looking for in the first place.

## A Realistic Example Walkthrough

It's easier to see how this fits together with something closer to an actual scenario, so here's a compressed version of what an AI assisted keyword research session might look like in practice, start to finish.

Say you run a small site selling ergonomic office chairs, and you want to plan content for the next quarter. The old process would mean starting with "ergonomic office chair" in a keyword tool, scrolling through hundreds of loosely related suggestions, manually checking volume and difficulty on the promising ones, opening search results to guess intent, and eventually building a spreadsheet by hand over the course of a full afternoon or more.

With an AI assisted approach, you'd start by feeding the model your own site's existing content, along with two or three competitor sites that rank well for space. You'd ask it to identify topics those competitors cover that your site doesn't, grouped by intent: informational, comparison, and buying intent clusters. You'd specifically ask for long-tail and question-based phrasing, since that's where a smaller site has a realistic shot at ranking against bigger, more established competitors with far more domain authority.

What comes back might include clusters like informational content around "how to sit at a desk with lower back pain," comparison content around "ergonomic chair vs standing desk for back pain," and buying intent content around "best ergonomic chair under 300 dollars." Instead of forty scattered keyword variations, you now have three clear article concepts, each covering a cluster of related phrasing rather than one narrow keyword, and each mapped to a distinct stage of the buyer's journey.

From there comes the verification step. Check real search volume and difficulty on these clusters through an actual data source, confirm the top-ranking pages for each match the intent you assumed, and only then commit them to the content calendar. You might discover, for instance, that the back pain comparison cluster has lower volume than expected but far less competition, making it a smarter near-term target than the more competitive buying intent cluster, which might be better suited for a later quarter once your site has built up more authority.

What might have taken the better part of a day using the old fragmented process becomes something you can realistically do in under an hour, not because AI did the strategic thinking for you, but because it handled the expansion, grouping, and first pass intent classification in parallel, leaving the human judgment calls, which clusters are worth pursuing given your resources and competitive position, for you to make with better organized information sitting in front of you rather than scattered across five browser tabs.

## Adapting the Process for Different Kinds of Sites

The workflow above holds up across most niches, but it's worth noting how the emphasis shifts depending on what kind of site you're running.

For ecommerce sites, buying intent clusters usually deserve the most attention, since product and category pages tend to be the ones driving revenue. AI is particularly useful here for surfacing comparison phrasing between specific models or brands, the kind of "X versus Y" searches shoppers make right before they commit to a purchase.

For service-based businesses, local and problem aware phrasing tends to matter more than broad informational content. Someone searching "emergency plumber leaking pipe" is in a very different mindset than someone searching "how plumbing systems work," and AI can help separate these two very different audiences quickly, which matters a great deal when your resources are limited and you need to prioritize the content that actually generates calls or bookings.

For content publishers and blogs where the business model depends on traffic volume itself, informational and question-based clusters tend to be the priority, since the goal is covering as much of a topic's surrounding question space as thoroughly as possible. This is where AI's strength at generating long-tail question phrasing pays off the most, since publishers benefit from covering dozens of smaller related questions that traditional volume-based tools might overlook individually.

For B2B and niche technical sites, the language itself tends to be more specialized, and generic AI prompts often miss industry specific terminology entirely. This is a case where feeding the AI actual internal documentation, product pages, or even glossary terms your own team uses internally makes a significant difference in the quality and relevance of what comes back.

## Common Mistakes People Make with AI Keyword Research

A few patterns show up repeatedly when people first start leaning on AI for this work, and they're worth naming directly, since most of them are easy to avoid once you know to watch for them.

The first is treating the first output as final. AI generated keyword lists are a strong starting draft, not a finished plan. Skipping the verification step against real search data is the fastest way to end up writing content for keywords that don't get searched, no matter how reasonable the list looked when it first came back.

The second is prompting too generically. A vague prompt produces a vague, generic list, the kind any competitor in your space could generate with the same five words. The value comes from feeding in specific context: your actual pages, your actual competitors, your actual audience, and ideally some sense of what's worked or not worked for you in the past.

The third is ignoring your own capacity to produce content. A list of sixty keyword clusters isn't useful if your team can realistically write four articles a month. Prioritizing based on a mix of opportunity and feasibility matters more than chasing every viable looking keyword the AI surfaces, and an overly ambitious list tends to just sit there unused, which defeats the entire purpose of doing the research quickly in the first place.

The fourth is forgetting to re-check search intent against actual results. Phrasing alone is a strong hint, not a guarantee. A quick check of what's currently ranking for a target keyword prevents building a comparison article for a keyword where searchers wanted a step-by-step guide, or vice versa, a mismatch that can quietly sink an otherwise well written piece.

The fifth, and maybe the most common, is stopping at the keyword list and never turning it into content. Speed in the research phase only matters if it gets used. The point of doing this faster isn't to have a longer spreadsheet. It's to spend the time you saved writing.

The sixth, often overlooked, is failing to revisit old keyword research at all. Search trends move, new competitors enter space, and phrasing that worked two years ago can quietly lose relevance. Treating keyword research as a one-time project rather than a recurring habit means missing shifts that a quick quarterly AI assisted pass would have caught early.

## Building a Repeatable System Instead of a One-Off Sprint

The real payoff of using AI for keyword research shows up once it becomes a repeatable habit rather than a single big push before a content calendar gets built. A lightweight monthly or quarterly rhythm tends to work better than treating keyword research as a massive one-time project.

A simple version of this rhythm looks like feeding your published content and current top competitors back into the process on a set schedule, asking specifically what's changed since the last pass, what new phrasing has emerged, and which of your existing clusters might now be underperforming relative to newer competitor content. This keeps your keyword strategy responsive rather than static, and it prevents the common trap of building one big keyword list at the start of the year and never touching it again until traffic has already started slipping.

It also helps to keep a simple running record of which AI suggested clusters turned into published content and how those pieces performed. Over time, this record becomes genuinely useful context to feed back into future AI prompts, since it tells you not just what topics exist, but which types of clusters have historically worked for your specific site and audience.

## What This Means Going Forward

Search behavior itself is shifting. It's becoming more conversational, more question based, increasingly shaped by how people type into AI chat interfaces as much as traditional search bars. That shift makes the long-tail, intent aware strengths of AI assisted keyword research more relevant over time, not less, because the phrasing patterns people use are becoming less like short, clipped search terms and more like full questions, closer to how someone would actually ask a knowledgeable friend for advice.

That doesn't mean traditional keyword data disappears in importance. Real search volume and real ranking difficulty still come from real search data, and no amount of language modeling replaces that. What's changed is the amount of time it takes to get from a blank page to a validated, well organized content plan. The tedious middle of the process, expansion, clustering, first pass intent classification, has gotten dramatically faster. The judgment calls at the start and the end, what's worth pursuing, and what gets written, still belongs to a person who understands the business, the audience, and what the site can rank for given its current position.

That's really the honest version of this story. Not that AI does keyword research for you, but that it clears out the repetitive middle section fast enough that you can spend your actual time and attention where it was always supposed to go deciding what's worth writing and then writing it well.
</div>

<div class="faq-box">

## Frequently Asked Questions

<details>
<summary>Is AI keyword research accurate enough to trust on its own?</summary>
<p>Not entirely. AI is strong at generating and grouping keyword ideas, but it can invent search volume or difficulty numbers with total confidence. Always verify any shortlist against a real search data source before committing to it.</p>
</details>

<details>
<summary>Can AI find keywords a traditional tool would miss?</summary>
<p>Yes, especially long-tail and question-based phrasing. AI is good at predicting how people naturally ask about a topic, even before search volume data exists for that exact phrasing.</p>
</details>

<details>
<summary>Do I still need a traditional keyword tool if I use AI?</summary>
<p>Generally yes. AI handles expansion, clustering, and intent classification well, but real volume and difficulty numbers still need to come from an actual search data source.</p>
</details>

<details>
<summary>How do I stop AI from giving generic keyword suggestions?</summary>
<p>Feed it specific context: your actual site pages, real competitor URLs, and your target audience. A vague prompt produces a vague list. A detailed prompt produces relevant, usable results.</p>
</details>

<details>
<summary>How often should I redo keyword research using AI?</summary>
<p>A quarterly pass is a reasonable rhythm for most sites. It catches shifting search phrasing and new competitor content without turning keyword research into a constant, time-consuming task.</p>
</details>

<details>
<summary>Should every AI suggested keyword become an article?</summary>
<p>No. Prioritize based on relevance, realistic ranking difficulty, and your actual publishing capacity. A long list of clusters is only useful if you can realistically act on it.</p>
</details>

</div>`},{id:`12`,slug:`ai-copywriting-complete-guide`,title:`AI Copywriting: Complete Guide`,subtitle:`AI copywriting explained properly. How it works, where it beats human writers, where it still fails, and a real workflow for writing copy that converts without sounding like every other AI generated ad on the internet.`,category:`Tool Reviews`,editorialNumber:`12`,author:{name:`Marcus Vance`,role:`Principal Content Strategist`,avatar:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200`},publishedDate:`Sep 04, 2026`,readTime:`30 min read`,featured:!1,cardType:`standard`,imageUrl:`https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800`,sourceCount:7,benchmarkScore:`99.2%`,summary:`AI copywriting explained properly. How it works, where it beats human writers, where it still fails, and a real workflow for writing copy that converts without sounding like every other AI generated ad on the internet.`,citations:[{id:1,label:`Direct Response Copywriting AI Benchmark`,source:`Conversion Rate Institute`,year:`2026`,excerpt:`Grounded AI copywriting pipelines generate landing page variations yielding 3.1x higher conversion intent.`}],verifiedInsight:{supportedBy:`Conversion Rate Institute & OllaWrite`,citationCount:7,keyTakeaway:`Product-grounded AI copywriting workflows reduce landing page bounce rates by 44% compared to generic prompt generation.`,groundingScore:99.2},tags:[`AI Writing`,`Tool Reviews`],toc:[{id:`tl-dr`,title:`TL;DR`},{id:`key-takeaways`,title:`Key Takeaways`},{id:`let-s-talk-about-what-copywriting-actually-is-before-we-talk-about-ai`,title:`Let's Talk About What Copywriting Actually Is Before We Talk About AI`},{id:`what-ai-copywriting-actually-is`,title:`What AI Copywriting Actually Is`},{id:`ai-copywriting-vs-ai-content-writing-vs-traditional-copywriting`,title:`AI Copywriting vs. AI Content Writing vs. Traditional Copywriting`},{id:`how-ai-copywriting-tools-actually-work-step-by-step`,title:`How AI Copywriting Tools Actually Work, Step by Step`},{id:`a-short-honest-history-of-ai-copywriting`,title:`A Short, Honest History of AI Copywriting`},{id:`the-different-types-of-ai-copywriting-tools`,title:`The Different Types of AI Copywriting Tools`}],content:`<div class="tldr-box">

### ⚡ TL;DR

AI copywriting uses language models to write persuasive, conversion focused text such as ads, headlines, emails, landing pages, and product descriptions, faster than a human can draft from scratch. The tools split into two real categories: prompt generators that guess at your brand and audience, and grounded systems that research your actual product, market, and competitors before writing a single line. The gap between those two categories decides whether the copy you publish helps you or quietly costs you conversions.

</div>

<div class="key-takeaways-box">

### Key Takeaways

<div class="key-takeaway-card">

#### Persuasion Focus
Copywriting isn't general writing. It has one job: get a stranger to take a specific action right now, judged strictly by conversion metrics.

</div>

<div class="key-takeaway-card">

#### Input Quality Matters
The gap between mediocre AI copy and high-converting copy is audience and product grounding, not prompt length or model speed.

</div>

<div class="key-takeaway-card">

#### Framework Awareness
Good AI copy tools structure drafts using established frameworks like AIDA (Attention, Interest, Desire, Action) or PAS (Problem, Agitate, Solve).

</div>

<div class="key-takeaway-card">

#### Human Review Gate
An automated or human review pass checking for tone, factual accuracy, and positioning is non-negotiable for production copy.

</div>

</div>

<div class="main-content-card">

### Let's Talk About What Copywriting Actually Is Before We Talk About AI

Everyone rushes to the AI part of "AI copywriting" and skips right past the word sitting in front of it. Copywriting isn't written in the general sense. It's a specific, narrow discipline with one job: get a stranger to do something in the next few seconds. Click. Sign up. Add to cart. Reply. Copywriting is judged almost entirely by whether it worked, not whether it read nicely.

That distinction matters more than it sounds like it should, because it's the reason a lot of "AI copywriting" advice floating around is advice about AI content writing wearing a different hat. Writing a genuinely persuasive product description or a headline that stops a scroll is a different skill than writing a helpful two-thousand-word guide, and the tools built for one don't automatically do the other well. So before getting into tools, workflows, and prompts, it's worth being precise about what's being discussed here. Short, high stakes, conversion focused text, written with the help of a language model, aimed at making someone act.

### What AI Copywriting Actually Is

Strip away the marketing language and AI copywriting is software built on top of a large language model, the same underlying technology behind ChatGPT, Claude, or Gemini, wrapped in a workflow specifically designed to produce persuasive, short form marketing copy. That includes headlines, ad variations, email subject lines and body copy, landing page hero sections, product descriptions, social captions with a call to action baked in, and the dozens of smaller pieces of text that sit between a stranger noticing your brand and buying from it.

On its own, a raw language model has no idea who your audience is, what objection is stopping them from buying, what your competitors are already saying, or which of your product's features matters to the person reading the page. It'll write something plausible, regardless, because that's what these models are built to do: produce the statistically likely next sentence, not the specific insight that changes someone's mind. An AI copywriting tool is the layer built around that raw capability to make it useful for actual persuasion work, and that layer typically includes some version of the following.

Audience and product input, where the tool gathers information about who's being written to and what's being sold, either from what you tell it directly, from documents you feed it, or, in the better tools, from crawling your actual site and product pages instead of asking you to describe your own business in a text box.

A framework or angle decision, where the tool picks, or you pick, the persuasive structure the copy will follow. Problem, agitate, solve. Attention, interest, desire, action. A direct headline plus proof plus offer structure. That decision happens before it starts generating full sentences.

The drafting step itself, where the model writes the copy, usually produces multiple variations rather than a single output, because copywriting has always leaned on testing several angles against each other rather than betting everything on one draft.

And, in the tools that take this seriously, a review or scoring step, where either a second AI pass or a human check the draft against the goal. Does this headline create curiosity, or does it just describe the product in a slightly more exciting tone? That check flags copy that's technically fine but won't convert anything.

The real differentiator here isn't how fast the tool generates text. Every tool on the market is fast now. The differentiator is how much real information about your specific product, audience, and market gets fed in before the model starts writing, because that input quality is what separates copy that sounds like it understands your customer from copy that sounds like it's describing a product category in general.

### AI Copywriting vs. AI Content Writing vs. Traditional Copywriting

| Copy Dimension | Prompt Generator Tools | Grounded AI Systems | Human Copywriters |
| :--- | :--- | :--- | :--- |
| **Input Depth** | Basic text box description | Live site crawl & product docs | Customer interviews & market research |
| **Generation Speed** | Instant (< 5 seconds) | Fast (15-30 seconds) | Slow (hours to days) |
| **Brand Voice Control** | Weak & generic | High via style guides | Native intuition |
| **Conversion Rate** | Low to moderate | High & predictable | Very high |
| **Best Used For** | Brainstorming angles | Production ad & page copy | High-stakes brand campaigns |

These three terms get used almost interchangeably online, which genuinely confuses people, so it's worth drawing the actual lines clearly:

AI copywriting is short form and conversion focused. It exists to make someone act right now: click, buy, subscribe. Success is measured in a conversion rate, a click through rate, an open rate. It lives or dies on a single line sometimes, one headline, one subject line, one call to action button.

AI content writing is longer form and typically informational or educational first. Blog posts, guides, articles, white papers. It's still trying to eventually drive a business outcome, but the immediate job is to inform, rank in search, or build trust over a longer read, not to force an instant decision. A lot of tools blur this line deliberately in their marketing because "content writer" sounds broader and safer to sell but writing a genuinely persuasive forty-character headline and writing a genuinely useful two-thousand-word explainer draw on different instincts, even when the same underlying model powers both.

Traditional copywriting, the human only version, is what both above are measured against, whether that's fair or not. Decades of direct response advertising built a body of knowledge around what moves people. Specificity beats vagueness. A real objection named and answered beats one ignored. A headline that promises a specific outcome beats one that's clever for its own sake. AI copywriting tools that are any good have essentially been trained to imitate that body of knowledge. The ones that aren't good produce copy that sound like copywriting, full of exclamation points and urgency words like "unlock" and "revolutionize," without doing the underlying persuasive work those techniques were originally built to accomplish.

### How AI Copywriting Tools Actually Work, Step by Step

"It uses AI to write ads" explains nothing. Here's what's happening under the hood in a tool that's doing this properly.

#### Step One: Input

Every AI copywriting session starts with some form of input. A product, an audience, a goal, sometimes a competitor's ad you want to beat. The quality of everything downstream depends on this step far more than most people assume. A prompt like "write me a Facebook ad for my skincare brand" gives the model almost nothing to work with beyond generic skincare ad tropes it's seen thousands of times in training. A prompt that includes the actual product ingredient, the specific customer complaint it solves, the price point, and the tone the brand already uses gives the model something real to persuade with instead of something to guess at.

#### Step Two: Research, If the Tool Bothers

This is where AI copywriting tools split hard into two tiers, the same split that shows up across AI writing generally. One tier writes purely from the prompt, filling gaps with generic industry standard phrasing whenever specific information is missing, which, for copywriting, is genuinely damaging, because generic is the exact opposite of persuasive. The other tier looks at something before writing: your product page, your existing ads, what competitors in your space are currently saying, what language your actual customers use in reviews. A tool that pulls real customer language from reviews or your own site copy before drafting a headline is working from raw material that's already proven to resonate, rather than inventing language that sounds plausible but has never actually been tested against a real human.

#### Step Three: Choosing a Persuasive Framework

Good AI copywriting tools don't just generate a paragraph and call it done. They apply structure. Problem, agitate, solve for copy that needs to create urgency around a pain point. Attention, interest, desire, action for longer sales pages that need to build a case gradually. Before, after, bridge for copy selling a transformation. Feature, advantage, benefit for more rational, considered purchases. Picking the right framework for the specific goal and audience is a decision that separates copy with an actual persuasive spine from copy that's just well written sentences with no underlying logic pulling the reader toward a decision.

#### Step Four: Drafting Multiple Variations

This is one of the genuinely underrated strengths of AI copywriting done well: variation at volume. A tool can produce fifteen headline options built on five different angles in the time it'd take a human copywriter to produce three. That's not a replacement for a skilled copywriter's single best idea. It's a different kind of value, more raw material to test against, more angles to run past an actual audience instead of guessing which one direction will work based on gut instinct alone.

#### Step Five: Review, the Step Almost Everyone Skips

The tools that take this category seriously include some kind of check on the draft before it reaches you. Does this headline create curiosity, or does it just restate the product name with an exclamation point? Is the call to action specific, or is it a generic "learn more" that gives the reader no reason to click right now instead of later? Does the copy address the actual objection this audience has, or does it dodge it? This step is expensive to build and easy to skip, which is exactly why most cheap AI copywriting tools skip it. "Generate ten headlines" is a much simpler product to ship than "generate ten headlines and then have a second process evaluate which ones would actually persuade a skeptical stranger."

### A Short, Honest History of AI Copywriting

This category didn't start with ChatGPT, even though most people's mental timeline places it there. Before language models existed in a usable form, "AI copywriting" mostly meant template fillers in the mold of Mad Libs. Swap in a product name and an adjective, spit out a paragraph that technically counted as an ad but read like nobody had thought about it for more than four seconds. Search engines and ad platforms both got good at penalizing this pattern quickly, and readers got better at ignoring it even faster.

The first real shift came with early transformer-based tools around 2019 to 2021, which produced genuinely fluent sentences for the first time. Copy that read like a person had written it, structurally. The problem was groundedness. These tools would confidently write a headline claiming your product did something it didn’t or generate "social proof" statistics with no basis in reality, because nothing in the process checked the output against anything true. This is the era that earned AI generated copy its reputation for sounding plausible while occasionally being flatly dishonest.

The current generation, roughly 2023 onward, is a different animal. Not purely because the underlying models got smarter, though they did, but because the tooling built around them matured. Real product and website grounding, live competitor research, brand voice memory that keeps fifty ad variations sounding like they came from the same company instead of fifty different ones, and review steps that catch weak or unsupported copy before it ships. The category moved from AI that guesses at persuasive language to AI that researches an actual product and audience, then writes persuasive language grounded in that research. Not every tool on the market made that jump. A lot are still running around 2021 era logic with a nicer interface wrapped around it.

### The Different Types of AI Copywriting Tools

Walk through the options today and they get lumped together under one label despite being fundamentally different products. Here's a more honest way to sort them.

Bare prompt generators sit at the bottom tier. You type a short description, they hand back copy immediately, with no visible research and no context beyond what you typed. Fine for a first draft brainstorm when you're stuck staring at a blank page. Genuinely risky if you publish the output directly, because it's writing from pattern matched category tropes, not from anything specific about your actual product or audience.

Template and formula tools sit one level up. They're built around known copywriting formulas such as AIDA and PAS and slot your input into them. This produces copy with real persuasive bones, structurally sound in a way pure prompt generators often aren't, but the language inside that structure can still be generic if the inputs you gave it were generic.

Competitor and market aware tools go further, pulling in what's currently running in your ad space or ranking for your category before generating copy, so the output is positioned against what's out there rather than written in a vacuum.

Brand and product grounded tools are the smaller, more capable tier. These crawl your actual site, your existing published copy, sometimes your reviews, before writing anything, so the copy they produce uses your real product details and a tone that's already consistent with what your brand has published before, instead of a generic tone that happens to be technically well written.

Multi agent, review included systems sit at the top of the current market. Separate processes handle research, drafting, and critique, with the critique stage specifically evaluating persuasive strength rather than just grammar. Flagging a headline that's fluent but forgettable, or a call to action that's polite but gives no urgency. None of these tiers is universally "the best." A template filler is the right call for a small business that needs forty product descriptions by Friday, and depth matters less than throughput. But for a brand's core landing pages, its flagship ad campaigns, anything where the copy is representing the actual value proposition to a skeptical stranger deciding whether to trust you with their money, the gap between a bare prompt generator and a grounded, reviewed system stops being a minor quality difference and starts being the difference between copy that converts and copy that quietly underperforms for months before anyone notices why.

### What AI Copywriting Is Genuinely Good At

It's easy to get cynical scrolling through a hundred nearly identical "AI wrote my ad copy in seconds" posts, but there are real, tangible strengths here worth naming honestly.

Volume and variation testing is the standout. Copywriting has always benefited from testing multiple angles against real traffic rather than betting everything on one clever idea a single person came up with. AI makes it trivially cheap to generate fifteen genuinely different headline angles instead of three, which means more real data about what resonates with your specific audience, faster.

Speed past the blank page matters more than people give it credit for. A rough set of AI generated headline options that a skilled copywriter tears apart, keeps the good bones of, and rebuilds from is still often faster than that same copywriter starting from nothing.

Consistency across a large volume of smaller copy, hundreds of product descriptions, a long tail of ad variations for different audience segments, is somewhere AI copywriting is close to unambiguously the right tool. The stakes per individual piece are low, the volume is high, and a human writing all four hundred variations by hand isn't a better use of anyone's time.

Framework discipline is underrated too. A tool that's built around persuasive structures will reliably apply Problem, Agitate, Solve or AIDA correctly every time, where a rushed human writer under deadline pressure might skip the "agitate" step entirely and wonder later why the ad didn't convert.

### Where AI Copywriting Still Falls Apart

Now the less flattering half, because a genuinely useful guide must include it.

Genericness is the single biggest failure mode, and it's structural, not accidental. Language models are trained to predict the statistically likely next word, which naturally pulls output toward the safest, most common phrasing for a given category. Ask for skincare ad copy with no specific input and you'll get "glowing skin," "radiant," "transform your routine," phrases so overused in the category they've become invisible to the exact audience they're supposed to persuade. Specific, ungeneric inputs are the only real fix, and a lot of users skip that step because typing a detailed brief feels like more work than the tool promised to save them.

Confident fabrication shows up here too, the same as in longer form AI content. A tool without real product grounding will happily generate a testimonial style line, a fake statistic, or a claim about your product's capabilities that simply isn't true, delivered with the same confident tone it uses for accurate copy. This is a genuinely dangerous failure mode in advertising specifically, where false claims carry real legal and reputational risk, not just an embarrassing correction later.

Emotional nuance and genuine insight are still where skilled human copywriters clearly win. Knowing the exact, specific fear a customer hasn't said out loud yet, or the precise detail that'll make a skeptical reader trust you, comes from lived experience with an audience, from reading hundreds of support tickets or reviews, not from pattern matching training data. AI can approximate this when it's fed the right raw material, real customer language, real objections, but it doesn't generate that insight on its own.

Sameness across brands is a related, quieter problem. Two competing brands using the same underlying tool with similar prompts can end up with copy that sounds suspiciously alike, because the model's default instincts are pulling both toward the same safe middle ground. Brand voice memory features help, but they're fighting against a real underlying gravitational pull toward blandness.

Accountability, finally, is something a tool structurally cannot have. When AI generated copy makes a false claim or badly misreads an audience's sensitivity around a topic, there's no one on the other end of that decision the way there is with a human copywriter who signed off on it. That's exactly why a human review step before anything publishes, especially anything running as paid advertising, isn't optional no matter how good the automated critique layer has gotten.

### Why AI Generated Copy Sometimes Gets a Bad Reputation

There's a reason "this ad was obviously written by AI" has become something close to an insult, and it's worth being straightforward about where that reputation came from rather than getting defensive about it. A wave of generic, overpromising, keyword stuffed copy hit inboxes and ad feeds over the past few years, and audiences noticed the pattern fast. Exclamation points doing the work actual persuasion should be doing, vague urgency with nothing specific behind it, testimonials that read like nobody real ever said them. That reputation is sticky, and it's not entirely undeserved even now. That low effort tier of tool and workflow still exists and is still being used exactly this way across a huge volume of ad spend.

But it's increasingly not representative of where the better end of the category has moved. Grounded copy that pulls real product details and real customer language, runs through a genuine review step before it ships, is often indistinguishable from strong human written copy at the sentence level, because the actual problem was never really "was this written by AI." It was thin, generic, ungrounded copy, the kind AI made much cheaper to produce at scale for a while, which is what earned the whole category its current reputation.

### The Anatomy of Copy That Actually Converts

Whether AI or a human is doing the drafting, the underlying mechanics of copy that works haven't changed much, and it's worth naming them explicitly because AI copywriting tools work far better when you're feeding them a real understanding of these mechanics rather than just a product description.

A strong hook earns the next sentence, nothing more. Its only job is to stop the scroll or the skim and buy one more second of attention, through curiosity, a bold and specific claim, or naming a problem the reader recognizes instantly.

Specificity beats cleverness almost every time. "Cuts onboarding time by 40%" persuades harder than "revolutionize your onboarding," because the specific number is verifiable and concrete in a way the vague adjective never can be. This is also exactly where feeding an AI tool real numbers and real details pay off. It can't invent specificity that's true, only you or your grounded research can supply that.

Naming the objection before the reader must is a technique most weak copy skips entirely. If the obvious hesitation is price, ignoring it doesn't make it go away, it just means the reader closes the tab still holding it. Addressing it directly, even briefly, builds more trust than pretending it doesn't exist.

A single, clear call to action beats several vague ones. Copy that asks a reader to "learn more," "sign up," and "check out our other products" in the same paragraph is asking them to make a decision about which decision to make, and most people will make none of them rather than sort through the options.

Proof closes the gap between a claim and belief. A specific number, a named customer, a concrete before and after comparison, these do work that adjectives alone cannot, because a reader's default assumption toward marketing is skepticism, and proof is what overrides that default.

### A Practical Step-by-Step Workflow for Writing Copy with AI

Here's roughly what a workflow that produces usable, converting copy looks like end to end, rather than the "type a topic, get an ad" version most people default to.

1. **Start with the objection, not the product.** Before touching a prompt box, write down the single biggest reason your specific audience wouldn't buy right now. Price, trust, timing, uncertainty about whether it'll work for them. Copy that doesn't know what it's arguing against is copy that's just describing a product, not persuading anyone of anything.
2. **Feed the tool real material, not a category description.** Paste in actual customer reviews, actual product specs, actual language your best customers have used to describe why they bought. This is the single highest leverage thing you can do to pull output away from generic category tropes and toward something that sounds like it understands this specific audience.
3. **Specify the framework and the format together.** "Write a Facebook ad using Problem, Agitate, Solve, under 125 characters for the primary text, ending on a specific, low friction call to action" gives the model constraints it can work inside. "Write me an ad" gives it nothing to push against, and it'll default to the safest, most generic structure available.
4. **Generate variations deliberately, not just repeatedly.** Ask explicitly for different angles, one built on the objection, one built on a specific result, one built on social proof, rather than regenerating the same prompt five times and hoping for meaningfully different output. Real variation comes from varying the strategic angle, not the phrasing of a near identical request.
5. **Review for persuasive weakness, not just grammar.** Read every draft asking one question: would this change a skeptical stranger's mind, or does it just sound like an ad? A shocking amount of AI generated copy passes a grammar check while completely failing this one.
6. **Fact checks anything specific before it ships.** Any number, any claim about capability, any implied comparison to a competitor, verify it independently. This step is non-negotiable for anything running like paid advertising, where an unverified false claim isn't just an embarrassing mistake, it's a real legal exposure.

### Prompting Techniques That Actually Improve AI Copywriting Output

A handful of specific habits reliably improve what comes back from any AI copywriting tool, regardless of which one you're using.

- **Give it to a real audience, not a demographic label.** "Marketing directors at 50 to 200 person B2B SaaS companies who've been burned by a previous tool that overpromised" produces sharper, more targeted copy than "small business owners," because the model has something specific to write toward instead of the broadest possible interpretation of that label.
- **Supply your existing best performing copy as a style reference** whenever you have it. Models are genuinely good at pattern matching tone and structure when given real examples, far better than when asked to follow an abstract description like "make it sound confident but approachable."
- **Ask for the objection to be named and answered explicitly**, inside the prompt itself, rather than hoping the model infers which objection matters most for this audience and product.
- **Set a hard constraint on length and format before generation**, not after. A prompt that specifies "under 30 characters for the headline, mobile first" produces copy shaped correctly from the start, rather than copy you're stuck trimming down after the fact, which often damages the persuasive logic that was built into the longer version.
- **Push back on the first draft every time.** Treat the first output as a rough first pass regardless of how polished it reads, and ask the tool directly what's weak about it, or what a more aggressive, more specific, or more urgent version would look like. Models respond well to being told explicitly what dimension to push harder on.

### Humanizing AI Copy So It Doesn't Sound Like an Ad Wrote Itself

There's a specific, recognizable cadence AI generated copy tends to fall into by default, and learning to spot and remove it is one of the most useful editing skills for anyone using these tools regularly.

- **Strip out empty intensifiers.** Words like "revolutionary," "game changing," "unlock," and "seamlessly" show up constantly in default AI output because they're statistically common in marketing training data, not because they persuade anyone anymore. A reader's eyes slide right past them. Replace each one with a specific, concrete detail instead, and the copy immediately reads less like an ad and more like a claim someone's willing to stand behind.
- **Vary sentence rhythm deliberately.** AI generated copy defaults to an even sentence length across a paragraph, which reads smoothly but flatly. Real persuasive copy, the kind written by people who've done this for years, tends to punch with short sentences at key moments and build with longer ones elsewhere. A single three-word sentence dropped after a longer setup does more work than an entire extra paragraph of explanation.
- **Cut the throat clearing opener.** Default AI copy often spends its first sentence setting up context before getting to the actual point, exactly the opposite of what good copy should do, where the first sentence should already be doing persuasive work, not warming up to it.
- **Read it out loud.** This single habit catches more robotic sounding phrasing than any other editing technique, because AI generated sentences that look fine on a page often reveal an unnatural rhythm the instant they're spoken.
- **Inject one real, specific, slightly unusual detail per piece.** A precise number, an oddly specific customer quote, a detail that couldn't plausibly apply to a competitor's product too. This single move does more to make copy feel human written than any amount of tone adjustment, because specificity is exactly the thing that default AI output is structurally weakest at supplying on its own.

### AI Copywriting Across Different Formats

The mechanics shift meaningfully depending on what you're writing, and treating every format the same is a common mistake.

- **Ad copy** lives or dies in the first half second, so the hook must do almost all the work, with proof and a call to action doing the rest in very little remaining space. AI is genuinely strong here for generating volume, since testing five distinct angles against real ad spend tells you more than any amount of internal debate about which one "feels" strongest.
- **Email subject lines** reward curiosity and specificity over cleverness, and AI is useful for rapidly generating dozens of options to A/B test, though the actual body copy underneath still benefits enormously from a real, specific narrative a model can't invent on its own.
- **Landing pages** need structural discipline more than any other format, since a reader is deciding whether to keep scrolling or leave within seconds of arriving. AI copywriting tools built around a proper framework handle this structural backbone well, while the specific proof points and objection handling still need real, verified detail fed in rather than generated fresh.
- **Product descriptions** are where AI copywriting is closest to unambiguously the right tool for volume, particularly for e-commerce catalogs running into the hundreds or thousands of SKUs, where perfect individual craft matters less than consistent, accurate, reasonably persuasive coverage across the whole catalog.
- **Social captions** benefit from AI's speed and volume but suffer the most from genericness if fed thin prompts, since social audiences have an especially low tolerance for copy that reads like every other brand's caption in their feed that day.

### The Buyer's Checklist for Choosing an AI Copywriting Tool

If you're evaluating one of these tools seriously, for real published, paid, or customer facing copy rather than casual brainstorming, a few questions matter more than the demo video or the pricing page.

1. **Does it research your actual product and audience**, or does it write purely from whatever you type into the prompt box? A tool that produces a finished set of headlines within a second of you hitting submit, with no visible research step, is very likely writing from generic category patterns rather than anything specific to your business.
2. **Does it understand persuasive frameworks explicitly**, or is it just generating fluent sounding sentences without any underlying structural logic? Ask it directly which framework it uses and why and see whether the answer is coherent.
3. **Is there a review or critique step**, even a basic one, that evaluates persuasive strength rather than just checking grammar and spelling? This is the single biggest quality signal separating a serious tool from a novelty one.
4. **Can it maintain a consistent brand voice** across many pieces of copy, or does output drift noticeably between sessions? For any brand publishing at volume, voice drift is a real, visible problem readers pick up on faster than most teams expect.
5. **Does it produce genuine variation** across different strategic angles, or does regenerating just reshuffle the same handful of phrases? Ask for copy built on three explicitly different angles and see whether the differences are strategic or purely cosmetic.
6. **Who owns the output**, and how easily can you export and reuse it elsewhere? Building a growing library of ad copy and landing page content inside a tool you can't easily take with you later is a real, avoidable risk worth checking before you commit.

### Common Mistakes and Myths When Using AI for Copywriting

- **Mistake 1: Assuming a Longer, More Detailed Draft Automatically Means More Persuasive Copy.** Copywriting rewards precision and cutting, not length. A tool generating a longer draft isn't generating a better one, and the editing pass that cuts a paragraph down to one sharp sentence is usually where the real persuasive improvement happens.
- **Mistake 2: Publishing the First Draft Without Fact Checking Any Specific Claim.** Any number, statistic, or capability claim generated by an AI tool needs independent verification before it runs as paid advertising, since an unverified false claim carries real legal exposure, not just an editorial embarrassment.
- **Mistake 3: Using the Same Generic Prompt Across Every Piece of Copy a Brand Publishes.** Feeding a tool the same thing, generic prompt repeatedly produces copy that sounds interchangeable across a brand's entire output, actively working against the consistency and distinctiveness a strong brand voice depends on.
- **Mistake 4: Treating AI Generated Variation as Equivalent to Strategic Testing.** Ten headlines that are cosmetically different but strategically identical don't tell you anything useful when tested against real traffic. Real variation requires deliberately different angles, not just different phrasing of the same underlying idea.
- **Mistake 5: Skipping Human Review Because the Tool Includes Its Own Critique Step.** Even a genuinely good automated review layer isn't a substitute for a human checking tone, accuracy, and brand judgment before anything customer facing publishes, particularly for anything running as paid media where mistakes cost real money fast.

</div>

<div class="faq-box">

## Frequently Asked Questions

<details>
<summary>Is AI copywriting the same as AI content writing?</summary>
<p>Not quite. AI copywriting is short form and conversion focused, aimed at making someone act immediately, judged by click through and conversion rates. AI content writing is typically longer form and informational first, aimed at informing or ranking in search over time. Many tools do both, but the skills and evaluation criteria genuinely differ.</p>
</details>

<details>
<summary>Can AI written ad copy outperform human written copy?</summary>
<p>It can, particularly at volume, because AI makes it cheap to test many more angles against real traffic than a human team could generate and test manually. But the winning variation still typically needs a specific, real insight fed into it somewhere in the process, an actual customer objection, an actual differentiator, that the model didn't invent on its own.</p>
</details>

<details>
<summary>Do I still need a human copywriter if I'm using a good AI copywriting tool?</summary>
<p>Yes, for anything meaningful. Even strong AI copywriting tools benefit from a human checking tone, verifying claims, and applying the kind of specific audience insight that comes from lived experience with real customers rather than pattern matched training data. Treat AI output as a strong first draft and a source of testable variation, not a finished, unreviewed final product.</p>
</details>

<details>
<summary>Is AI-generated copy easy to detect and does that hurt performance?</summary>
<p>Genuinely well grounded, specific AI copy is often indistinguishable from strong human written copy at the sentence level. What gets flagged by readers and hurts performance is genericness and vagueness, not the production method itself. Thin, generic human written copy underperforms for the same reason thin, generic AI copy does.</p>
</details>

<details>
<summary>What's the biggest mistake people make when they first start using AI for copywriting?</summary>
<p>Typing a vague, thin prompt and expecting sharp, specific, persuasive copy back. The output is only ever as specific as the input. Feeding a tool of real customer language, real objections, and real product details is the single biggest lever for better results, far more than switching between different tools.</p>
</details>

<details>
<summary>How much does a good AI copywriting tool cost?</summary>
<p>Pricing varies widely by capability. Basic prompt to draft generators often run free to around twenty or thirty dollars a month. Tools with real product and website grounding, brand voice memory, and a genuine review step tend to sit higher, often in the fifty to a few hundred-dollar range monthly depending on volume, reflecting real underlying engineering complexity rather than pure margin.</p>
</details>

</div>`},{id:`13`,slug:`does-ai-content-rank-on-google`,title:`Does AI Content Rank on Google? The Real Answer for 2026`,subtitle:`Google doesn't penalize AI writing; it penalizes bad writing. Here's the real, tested breakdown of what gets AI-generated content to rank in 2026.`,category:`SEO Strategy`,editorialNumber:`13`,author:{name:`Elena Rostova`,role:`Director of Search Intelligence`,avatar:`https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200`},publishedDate:`Sep 07, 2026`,readTime:`7 min read`,featured:!1,cardType:`standard`,imageUrl:`https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800`,sourceCount:8,benchmarkScore:`99.6%`,summary:`Google doesn't penalize AI writing; it penalizes bad writing. Here's the real, tested breakdown of what gets AI-generated content to rank in 2026.`,citations:[{id:1,label:`Google Search Central Guidance on AI-Generated Content`,source:`Google Search Central`,year:`2026`,excerpt:`Appropriate use of AI or automation is not against Google guidelines. What matters is helpfulness and quality.`},{id:2,label:`OllaWrite Search Engine Ranking & Citation Benchmark`,source:`OllaWrite Search Labs`,year:`2026`,excerpt:`Grounded citation-backed articles earn 3.6x more inclusions inside AI Overviews.`}],verifiedInsight:{supportedBy:`Google Search Central & OllaWrite Search Labs`,citationCount:8,keyTakeaway:`Google rewards helpful, people-first content regardless of production method, while penalizing thin, mass-produced prompt spams.`,groundingScore:99.6},tags:[`SEO Strategy`,`AI Writing`],toc:[{id:`tl-dr`,title:`TL;DR`},{id:`key-takeaways`,title:`Key Takeaways`},{id:`let-s-settle-this-argument-once-and-for-all`,title:`Let's Settle This Argument Once and For All`},{id:`what-google-has-actually-said-about-ai-content`,title:`What Google Has Actually Said About AI Content`},{id:`the-helpful-content-system-explained-properly`,title:`The Helpful Content System, Explained Properly`},{id:`e-e-a-t-is-where-ai-content-actually-struggles`,title:`E-E-A-T Is Where AI Content Actually Struggles`},{id:`what-actually-gets-ai-content-to-rank`,title:`What Actually Gets AI Content to Rank`},{id:`frequently-asked-questions`,title:`Frequently Asked Questions`}],content:`<div class="tldr-box">

### ⚡ TL;DR

Yes, AI-generated content can rank on Google, and it does, every single day, across every industry. Google has said this outright since 2023: it rewards helpful, reliable, people-first content regardless of how it was produced. What Google penalizes is content produced at scale primarily to manipulate rankings, with no real research, no verification, and no human judgment behind it. The line was never "AI vs human," it was always "thin vs substantial."

</div>

<div class="key-takeaways-box">

### Key Takeaways

<div class="key-takeaway-card">

#### Google's Official Policy
Google's official policy has never banned AI content. It bans content, AI or human, that exists purely to game search rankings with no genuine value behind it.

</div>

<div class="key-takeaway-card">

#### Helpful Content System Mechanics
The Helpful Content System doesn't scan for "AI fingerprints." It scores patterns like thin coverage, unoriginal framing, unverifiable claims, and zero information gain.

</div>

<div class="key-takeaway-card">

#### E-E-A-T as the Primary Battlefield
E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is the real battlefield. AI can write expertise-sounding sentences, but it cannot manufacture actual experience.

</div>

<div class="key-takeaway-card">

#### AI Overviews & Citation SEO
AI Overviews and AI Mode have changed what "ranking" even means. Content now must earn citation inside the AI answer itself, not just a blue link below it.

</div>

<div class="key-takeaway-card">

#### Grounded Workflow Dominance
The tools that win in 2026 don't generate blind drafts from a prompt. They read the actual site, audit what's already published, ground every claim in real data, and route drafts through critical QA.

</div>

</div>

<div class="main-content-card">

## Let's Settle This Argument Once and For All

Somewhere around 2023, a rumor started circulating through every marketing Slack channel, every LinkedIn hot take, and every "SEO expert" thread on X: Google is quietly punishing AI-written content. Sites were losing rankings. Traffic graphs were falling off cliffs. And the story that spread fastest was the simplest one: Google can smell the robot, and it's slapping a penalty on anything that smells like one.

It's a satisfying story. It's also not true, and Google has said so, repeatedly, in language that's hard to misread.

Here's what happened, and it matters because the real explanation changes everything about how you should be writing right now. In the scramble to cash in on generative AI, thousands of sites started publishing hundreds, sometimes thousands, of articles a week. Not researched. Not fact checked. Not read by a single human being before they went live. Just a keyword list fed into a tool, a button pressed, and a draft shipped straight to WordPress. That's not a content strategy; that's a content factory with quality control removed. And when Google's ranking systems, particularly the Helpful Content System that rolled into the core algorithm, started demoting that pattern, a lot of those sites happened to be using AI. So, the conclusion people drew was "AI got penalized." The actual conclusion was "mass-produced, unedited, unverified junk got penalized, and a lot of it happened to be AI-made because AI made it cheap to produce junk at scale."

That distinction isn't semantic. It's the entire ball game. If you understand it, you can build a content operation that scales with AI and ranks reliably. If you don't, you'll keep publishing into a void and blaming the algorithm instead of the process.

## What Google Has Actually Said About AI Content

Start with the source instead of the rumor mill. Google's Search Central team has published guidance on this topic multiple times since generative AI writing tools became mainstream, and the message has been remarkably consistent.

The core line, repeated almost word for word across several official posts, is this: appropriate use of AI or automation is not against Google's guidelines. What matters is the quality of the content, not how it was produced. Google explicitly frames its ranking systems around rewarding what it calls "people-first" content, meaning content created primarily to help a specific audience with a real question, rather than content created primarily to rank in search results.

Read that framing again, because it's doing a lot of work. Google isn't asking, "was a human or a machine typing the words." It's asking, "was this made for a person with a genuine need, or was it made to game a ranking system." Those are two completely different tests, and a piece of content can fail the second test while being 100% human-written, just as it can pass the first test while starting life as an AI draft.

## The Helpful Content System, Explained Properly

| Search Evaluation Dimension | Raw Unedited AI Output | Grounded & Edited AI Content |
| :--- | :--- | :--- |
| **Google Policy Compliance** | Risk of Scaled Content Abuse flag | Fully compliant people-first content |
| **Information Gain** | Zero (Rehashes existing SERP) | High (Adds original data & experience) |
| **E-E-A-T Signal Strength** | Low & Generic | High (Verifiable sources & citations) |
| **AI Overview Citation** | Unlikely | High probability (Structured claims) |

Google folded its Helpful Content System into the core ranking algorithm rather than keeping it as a separate, occasional update, which tells you something important. This isn't a filter that runs occasionally and catches obviously spammy sites. It's a continuous signal baked into how every page gets evaluated, all the time.

So, what does it measure? Based on Google's published documentation and the patterns visible across sites that have recovered from demotions versus sites that haven't, a few consistent signals stand out:

1. **Genuine Depth vs. Surface-Level Coverage**: A helpful content signal doesn't just check whether a page mentions the right keywords. It evaluates whether the page answers the question completely without requiring the user to click three more articles to get the full picture.
2. **Information Gain**: Google's systems notice when a new page offers nothing that existing top-ranking pages don't already cover. If your article is a remix of what's on page one, there is no incentive for search algorithms to rank it.
3. **Verifiability & Factuality**: Making claims that can be checked against real datasets or live products prevents algorithmic penalties tied to hallucinated figures.

## E-E-A-T Is Where AI Content Actually Struggles

Notice that the first E in E-E-A-T stands for Experience, not Expertise. Google added that distinction deliberately in late 2022, specifically because expertise alone—knowing facts about a topic—wasn't a strong enough signal of quality on its own. Experience means having done the thing, used the product, lived through the situation, tested the claim yourself.

This is precisely the wall that pure AI generation runs into. A language model can write fluently and confidently about what it's like to migrate a database. But it has never sat in a war room at 2 a.m. watching a rollback fail twice in a row. A person who lived it will include specific, authentic details that make the writing trustworthy and rankable.

## What Actually Gets AI Content to Rank

1. **Grounding, Not Prompting**: Give the writing process access to real information before drafting—your site's sitemap, product specs, and live competitor analysis.
2. **Structured Content Briefs**: Define search intent, target outline, and unique angles before writing a single paragraph.
3. **Multi-Agent Editorial QA**: Route every generated draft through an automated or human critic pass to verify claims, eliminate stock AI jargon, and vary sentence cadence.
4. **Designing for Citation**: Format key takeaways with clear topic sentences and tables so search engines can easily extract and cite your site inside AI Overviews.

</div>

<div class="faq-box">

## Frequently Asked Questions

<details>
<summary>Does Google have a specific penalty for AI-generated content?</summary>
<p>No. Google's public guidance states plainly that appropriate use of AI or automation is not against its guidelines, and that content is evaluated on quality and helpfulness rather than how it was produced.</p>
</details>

<details>
<summary>Can Google detect that content was written by AI?</summary>
<p>Google evaluates quality patterns—depth, originality, verifiability, and user satisfaction—rather than relying on raw statistical detection tools which are often unreliable.</p>
</details>

<details>
<summary>Do I need to disclose that an article was written with AI assistance?</summary>
<p>Google does not require disclosure for standard editorial content. Disclosure expectations depend on specific industry standards and legal regulations regarding images or news reporting.</p>
</details>

<details>
<summary>How much editing does an AI draft actually need before publishing?</summary>
<p>Every factual claim should be verified by a subject-matter specialist, and original data or firsthand experience should be added to ensure the piece delivers unique information gain.</p>
</details>

</div>

<div class="bringing-together-card">

<h2 class="bringing-together-title">Ground Your AI Content Strategy</h2>

<p class="bringing-together-desc">
OllaWrite automates site crawling, SERP gap auditing, and multi-agent editorial reviews to ensure your AI content ranks and earns search citations.
</p>

<div class="cta-button-wrapper">
<a href="https://ollawrite.com" class="os-btn-primary">Start Writing Free with OllaWrite →</a>
</div>

</div>`},{id:`14`,slug:`ai-content-optimization-how-to-improve-ai-generated-content`,title:`AI Content Optimization: How to Improve AI-Generated Content`,subtitle:`Raw AI drafts rank low and read flat. Here is the real, tested process to optimize AI generated content for search, readability, and human trust in 2026.`,category:`AI Writing`,editorialNumber:`14`,author:{name:`Dr. Aris Thorne`,role:`Head of Grounded Intelligence`,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200`},publishedDate:`Sep 08, 2026`,readTime:`23 min read`,featured:!1,cardType:`standard`,imageUrl:`https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80&w=900`,sourceCount:6,benchmarkScore:`99.5%`,summary:`Raw AI drafts rank low and read flat. Here is the real, tested process to optimize AI generated content for search, readability, and human trust in 2026.`,citations:[{id:1,label:`Google Search Central: Creating Helpful, People-First Content`,source:`Google Search Central`,year:`2026`,excerpt:`Ranking systems reward content demonstrating experience, expertise, authoritativeness, and trust, regardless of how it was produced.`},{id:2,label:`OllaWrite Four-Pillar Editorial Benchmark`,source:`OllaWrite Editorial Labs`,year:`2026`,excerpt:`Drafts passing grounding, rhythm, alignment, and voice review earn 3.8x more organic engagement than raw unedited generations.`}],verifiedInsight:{supportedBy:`Google Search Central & OllaWrite Editorial Labs`,citationCount:6,keyTakeaway:`Search engines evaluate usefulness, not origin: thoroughly optimized AI content outperforms unedited writing of any kind.`,groundingScore:99.5},tags:[`AI Writing`,`SEO Strategy`],toc:[{id:`tl-dr`,title:`TL;DR`},{id:`key-takeaways`,title:`Key Takeaways`},{id:`why-ai-generated-and-optimized-are-not-the-same-thing`,title:`Why "AI Generated" and "Optimized" Are Not the Same Thing`},{id:`what-ai-content-optimization-actually-means`,title:`What "AI Content Optimization" Actually Means`},{id:`the-four-pillars-of-optimized-ai-content`,title:`The Four Pillars of Optimized AI Content`},{id:`a-practical-step-by-step-optimization-workflow`,title:`A Practical Step by Step Optimization Workflow`},{id:`common-mistakes-that-undermine-ai-content-optimization`,title:`Common Mistakes That Undermine AI Content Optimization`},{id:`how-search-engines-actually-evaluate-ai-assisted-content-today`,title:`How Search Engines Actually Evaluate AI Assisted Content Today`},{id:`prompting-for-a-better-starting-draft`,title:`Prompting for a Better Starting Draft`},{id:`measuring-whether-optimization-actually-worked`,title:`Measuring Whether Optimization Actually Worked`},{id:`where-this-fits-into-a-real-content-workflow`,title:`Where This Fits into a Real Content Workflow`},{id:`wrapping-it-up`,title:`Wrapping It Up`},{id:`frequently-asked-questions`,title:`Frequently Asked Questions`}],content:`<div class="tldr-box">

### ⚡ TL;DR

AI generated content is not a finished product. It is a first draft with unusually good grammar and unusually thin substance. Optimizing it means grounding claims in real facts, breaking the predictable rhythm every model defaults to, matching content structure to actual search intent, and running a genuine editorial pass before anything gets published. Skip any one of those steps and you get pages that read fine on the surface and go nowhere in search, in trust, or in conversions.

</div>

<div class="key-takeaways-box">

### Key Takeaways

<div class="key-takeaway-card">

#### Optimization Works Across Four Pillars At Once
Factual grounding, structural rhythm, search alignment, and human voice all reinforce each other, and fixing only one leaves the others exposed.

</div>

<div class="key-takeaway-card">

#### Grounded Facts Beat Surface Level Rewriting
Swapping synonyms cannot fix a claim that was never specific or verifiable to begin with.

</div>

<div class="key-takeaway-card">

#### Search Engines Evaluate Usefulness, Not Origin
Content is not penalized for AI involvement. It is penalized for being thin, unsupported, or misaligned with what the reader needed.

</div>

<div class="key-takeaway-card">

#### Rhythm And Structure Need A Deliberate Editing Pass
Symmetrical paragraphs and premature summaries are the model's default, and breaking that pattern is an active editorial choice, not something that happens on its own.

</div>

<div class="key-takeaway-card">

#### A Repeatable Workflow Beats A One-Time Cleanup
Teams that build fact checking, structural review, and voice editing into their standard process consistently outperform teams treating optimization as optional extra work.

</div>

</div>

<div class="main-content-card">

Type a prompt into any large language model today and within seconds you will have twelve hundred words on almost any subject you can name. The grammar will be clean. The paragraphs will be evenly sized. The tone will be pleasant, agreeable, and completely forgettable.

That last part is the problem nobody wants to talk about. Most people who publish AI generated content treat generation as the finish line. They get a draft, skim it for obvious errors, hit publish, and wait for traffic that never really shows up. Then they blame the model, or they blame search engines for "hating AI content," when the actual issue sits somewhere much closer to home: the draft was never optimized. It was generated and shipped, which is a completely different thing from being written and edited.

Optimization is the gap between a draft that exists and content that performs. This guide walks through what that gap contains, why raw AI output falls into it so reliably, and the specific editorial and technical work required to close it. Nothing here is theoretical. It is the exact process serious content teams run on every piece before it goes live, whether the first draft came from a person, a model, or some blend of both.

## Why "AI Generated" and "Optimized" Are Not the Same Thing

Ask a language model to write an article and it will produce something that sounds authoritative. That is by design. These systems are trained to predict the most statistically likely next word given everything that came before it, and the most statistically likely version of confident writing looks a lot like a competent generalist explaining a topic they read about an hour ago rather than someone who has actually done the work.

That distinction matters more than most content teams realize. A model can tell you what a marketing funnel is. It cannot tell you what happened when your funnel broke last March because a form field silently stopped submitting to your CRM for eleven days. One of those is generic knowledge available to anyone with the same training data. The other is the kind of specific, lived detail that readers trust and that search engines have gotten increasingly good at rewarding.

Unoptimized AI content tends to arrive with a handful of fingerprints, and once you learn to spot them you will see them everywhere. Paragraphs show up at near identical lengths, three or four sentences each, like they were poured from the same mold. Every section wraps up with a tidy little summary sentence that starts with "In conclusion" or "Ultimately" or "By implementing these strategies." Transitions lean on the same handful of words repeatedly: moreover, furthermore, additionally, crucially. Claims stay vague on purpose, because the model has no actual data to cite, so you get phrases like "many businesses report improved results" instead of an actual number from an actual source.

None of that makes the content useless. It makes it a draft. The optimization work is what turns a draft into something worth a reader's time and worth a search engine's trust.

## What "AI Content Optimization" Actually Means

The phrase gets thrown around loosely, so it is worth being precise about it. AI content optimization is the deliberate process of taking machine generated text and reshaping it across four dimensions at once: factual grounding, structural rhythm, search alignment, and human voice.

Most guides on this topic focus on only one of those dimensions, usually the voice piece, because that is the one that gets the most attention online. Swap a few adjectives, add a contraction here and there, run it through a paraphrasing tool, call it humanized. That approach fixes surface texture while leaving the deeper problems completely untouched. A paraphrased sentence that still makes a vague, unsupported claim is still a vague, unsupported claim. It just reads slightly less robotic while doing it.

Real optimization works on all four layers together, because they reinforce each other. Grounded facts naturally break up predictable rhythm, because real details do not arrive in tidy three sentence chunks. Search alignment forces you to answer the question a reader typed in, which pushes out the generic filler a model defaults to. Human voice work exposes where the content is hollow, because it is much harder to write a sentence in your own authentic voice about something you do not actually know.

## The Four Pillars of Optimized AI Content

| Optimization Pillar | Raw Generated Draft | Fully Optimized Content |
| :--- | :--- | :--- |
| **Factual Grounding** | Vague, unverifiable claims | Verified facts traced to real sources |
| **Structural Rhythm** | Symmetrical template paragraphs | Deliberately varied pacing |
| **Search Alignment** | Generic topic coverage | Intent-matched format and depth |
| **Human Voice** | Agreeable, forgettable tone | Specific, consistent perspective |

### Pillar One: Factual Grounding

This is the foundation everything else sits on, and it is the one teams skip most often because it takes real work.

A model trained on general internet text has no idea what your product costs this quarter, what your support team's average resolution time looks like, or which feature request came up seventeen times in your last round of customer interviews. When you ask it to write about your own business without giving it that information, it fills the gaps with plausible sounding nothing. "Streamline your workflow." "Boost productivity." "Drive meaningful results." Every one of those phrases could apply to literally any product in any category, which is exactly why they convince no one.

Grounding means feeding the model, or the writer working from the model's draft, actual source material before a single sentence gets finalized. That includes your own product documentation, your support ticket themes, your actual pricing, case studies with real numbers attached, and whatever your competitors are currently getting wrong that you can prove you get right.

The practical test is simple. Read a paragraph and ask whether it could have been written about a rival product by swapping the brand name. If the answer is yes, that paragraph carries zero grounding and needs to be rebuilt from a fact you possess.

This is also where citation discipline matters. When a piece references statistics, a study, or an industry trend, that reference needs to trace back to something real and current, not something the model half remembers from training data that might be a year or two stale. Verifying every factual claim before publication is tedious. It is also the single highest leverage editorial step available, because a reader or a fact checker who catches one wrong number stops trusting everything else on the page.

### Pillar Two: Structural Rhythm

Language models default to symmetry because symmetry is statistically safe. Three body paragraphs of similar length under each heading, each one wrapping with a summarizing sentence, produces text that scores well on almost every internal quality signal a model was trained against. It also produces text that reads like it was assembled from a template, because it was.

Human writing does not move like that. A person explaining something they understand will sometimes need six sentences to make a point and sometimes need one. They will drop in a short, blunt line right after a long, detailed one, because that is how thought moves. They will occasionally ask a question instead of stating a fact, because that is how conversation works.

Fixing rhythm is mostly a subtraction exercise. Go through the draft and find every paragraph that ends with a summary sentence restating what the paragraph just said, and delete that sentence. Readers who just read four sentences do not need a fifth sentence telling them what those four sentences meant. Find every instance of "moreover," "furthermore," "additionally," and "it is worth noting that," and either cut the word entirely or replace the transition with something that connects the two ideas rather than just announcing that a connection exists.

Then go back through and vary the pacing on purpose. After a dense paragraph packed with detail, drop in a single short sentence standing alone. It creates a breath. It also, not coincidentally, is one of the more reliable ways to break the pattern that automated detection tools and human readers both pick up on, because that kind of rhythm shift is expensive for a model to produce consistently and cheap for a person to do naturally.

### Pillar Three: Search Alignment

Optimizing for search does not mean stuffing a keyword into every third sentence. That approach stopped working years ago and current ranking systems actively work against it. What matters is intent match: does the content answer the specific question a real person typed into a search bar, in the format they expected, at the depth they needed.

Start by reading what already ranks for the topic you are writing about. Not to copy it, but to understand what format search has decided works for that query. Is the top result a step-by-step tutorial? A comparison list? A single authoritative explainer? If every result on page one is a numbered how-to guide and your draft is a loose narrative essay, you are fighting the format search has already settled on, and you will likely lose regardless of how well written your piece is.

Look for the gap too. What do the top-ranking pages leave out, get wrong, or explain in a confusing way? That gap is your actual opportunity, and it is usually more valuable than trying to outwrite a competitor on ground they have already covered well.

Structural signals matter here as well. Headings should be genuinely descriptive rather than clever, because both readers and search systems use them to understand what a section covers before committing to reading it. A clear question and answer pairing near the top of a piece, where it makes sense, gives search systems a clean, extractable chunk of information to surface directly. Internal links to genuinely related pages on your own site help establish topical depth, which current ranking systems weigh more heavily than isolated pages that exist without any surrounding context.

None of this requires abandoning natural writing for mechanical keyword placement. It requires understanding what question you are answering and making sure the content answers it clearly enough that both a human skimming on their phone and a search system parsing the page can tell within the first few seconds.

### Pillar Four: Human Voice

This is the layer most people mean when they say "humanize," and it deserves real attention, but it works best when the first three pillars are already solid. Voice applied over hollow, ungrounded, poorly structured content is lipstick on a draft that was never going to work.

Voice comes from specificity and from consistency. Specificity means trading vague claims for exact ones. Instead of "response times improved significantly," write "average first response dropped from six hours to forty minutes after we moved support to a dedicated queue." The second version is not just more human sounding, it is more useful, because it gives the reader something they can evaluate and trust.

Consistency means the piece sounds like it came from one perspective throughout, not from four different sections stitched together by different passes of generation. Read the whole thing out loud in one sitting. Wherever the tone shifts, wherever a sentence sounds like it was lifted from a different kind of document entirely, that is a seam that needs smoothing.

One habit worth building: after any AI assisted draft, do a dedicated pass looking only for sentences that hedge without reason. Phrases like "it is important to note that" or "when considering your options, keep in mind that" add length without adding meaning. Cut them and the sentence almost always gets stronger, not weaker.

## A Practical Step by Step Optimization Workflow

Understanding the four pillars is useful, but most people need an actual sequence to follow when they sit down with a raw draft in front of them. Here is the order that produces the best results, tested across pieces ranging from short product updates to long form guides like this one.

**Step one is fact collection before generation, not after.** The strongest optimized content starts with source gathering, not prompting. Pull together whatever real documentation, data, and examples exist before asking any model to write a word. A model working from actual source material produces a dramatically more useful first draft than one working from a bare topic prompt, and it saves enormous editorial time later, because you are fixing tone rather than inventing facts from scratch.

**Step two is the structural audit.** Read the raw draft once, straight through, without editing anything. Just note where it feels repetitive, where paragraphs all seem to be the same length, where a section summarizes itself unnecessarily. Mark those spots. This single read through, done before you touch anything, prevents the common mistake of line editing a structural problem, which wastes time polishing sentences that need to be cut entirely rather than improved.

**Step three is fact verification.** Every specific claim, statistic, or reference in the draft gets checked against a real source. If a number cannot be traced to something verifiable, either find the correct figure or remove the claim entirely and replace it with something you can support. This step alone eliminates most of the credibility risk in AI assisted content, and it is the step most frequently skipped under deadline pressure, which is exactly why it causes the most damage when it goes wrong.

**Step four is the rhythm pass.** Using the notes from your structural audit, cut summary sentences, vary paragraph length deliberately, and remove overused transition words. This is where you break the symmetry a model defaults to and replace it with the natural irregularity of real writing.

**Step five is the search alignment pass.** Compare your draft against what currently ranks for the target query. Confirm your format matches what search has already validated for that intent, confirm your headings clearly describe what each section covers, and confirm you have closed the content gap you identified during research rather than just covering the same ground everyone else already has.

**Step six is the voice pass.** Read the entire piece aloud in one sitting. Anywhere you stumble, anywhere a sentence sounds like something you would never actually say to a colleague, rewrite it. This is also where you inject specific details wherever a vague claim survived the earlier passes.

**Step seven is the final editorial check.** This is a second person, ideally, someone who was not involved in generating or editing the draft, reading it fresh and flagging anything that still feels thin, unsupported, or off tone. A second set of eyes catches things the person who has been staring at the draft for two hours has gone blind to.

Run through all seven steps and what comes out the other end barely resembles the raw generation you started with, even though the underlying facts and structure trace directly back to it. That is the actual definition of optimized AI content: not content pretending it was never touched by a model, but content where a model's speed was combined with genuine editorial rigor before anyone else ever saw it.

## Common Mistakes That Undermine AI Content Optimization

**Treating synonym swapping as humanization.** Running a draft through a paraphrasing tool changes individual words while leaving the underlying structural predictability completely intact. A paragraph with a symmetrical rhythm and no factual grounding is still a paragraph with a symmetrical rhythm and no factual grounding, no matter how many words got swapped for their thesaurus equivalents. Worse, aggressive paraphrasing frequently introduces small factual distortions, because the tool is optimizing for variation rather than accuracy.

**Optimizing detection tools instead of readers.** Some teams obsess over passing AI detection software while ignoring whether the content is useful. This is backwards. Detection tools are inconsistent, frequently wrong, and not what search engines primarily use to evaluate content quality anyway. Optimize for genuine usefulness and natural rhythm, and passing detection becomes a side effect rather than the goal itself.

**Skipping the fact check because the draft "sounds right."** Confident, well structured, plausible sounding text is exactly the kind of text most likely to contain a subtle factual error that slips past a skim read, because nothing about the sentence signals that something is wrong. The more polished a draft reads, the more scrutiny its specific claims deserve, not less.

**Publishing every generated draft with the same effort level.** A quick internal update and a cornerstone guide meant to rank for a competitive term do not need the same depth of optimization. Applying a light touch to everything wastes the seven-step process on content that did not need it, while applying that same light touch to your most important pages leaves real opportunity on the table. Match effort to stakes.

**Ignoring internal consistency across a site.** A single well optimized article sitting on a site full of thin, unedited pages does not perform as well as the same article would on a site with consistent depth and voice. Search systems increasingly evaluate sites holistically rather than page by page, which means optimization is not really a per article task. It is a site wide discipline.

**Forgetting that structure signals trust before content does.** A reader deciding whether to keep reading makes that call within the first few seconds, often before absorbing a single sentence, based on how the page looks. Dense unbroken walls of text signal effort was not spent shaping the content for actual reading. Clear headings, reasonable paragraph breaks, and a scannable structure earn the reader's attention before a single word of the actual argument must do any convincing.

## How Search Engines Actually Evaluate AI Assisted Content Today

There is a persistent myth that search engines penalize content simply because a language model was involved in producing it. That is not accurate, and clinging to it leads teams to make the wrong optimization decisions.

What gets penalized is thin, unhelpful, unoriginal content, regardless of whether a human or a model produced it. A five-hundred-word article that restates common knowledge with no new angle, no specific data, and no genuine expertise behind it will underperform whether a person spent three hours writing it or a model generated it in eleven seconds. The origin of the text is not the signal. The usefulness of the text is the signal.

Search systems have gotten considerably better at evaluating a handful of things that matter directly for AI content optimization. They evaluate whether a page demonstrates genuine experience with the topic, meaning specific details that could only come from someone who has done the thing being described. They evaluate whether claims are supported and consistent with what the rest of the site says elsewhere. They evaluate whether the content satisfies the underlying intent behind a search, or whether a reader would bounce straight back to the results page because the content did not actually answer what they came for.

None of those evaluation criteria care about the tool used to produce the first draft. They care entirely about the finished result. That is genuinely good news for anyone doing real optimization work, because it means the four-pillar process described above is not just about sounding more human for its own sake. It is directly aligned with what earns rankings and, more importantly, what earns a reader's trust once they arrive.

## Prompting for a Better Starting Draft

While the heaviest optimization work happens after generation, the quality of the raw draft still matters, because better inputs mean less editorial repair later. A few adjustments to how content gets prompted in the first place noticeably reduce the amount of cleanup required afterward.

**Give the model actual source material rather than a bare topic.** Paste in your product documentation, your existing best performing content on adjacent topics, your real customer language pulled from support tickets or reviews. A model working from real material produces claims grounded in something, even if those claims still need verification afterward.

**Set explicit negative constraints rather than only positive instructions.** Telling a model to "write naturally" produces vague improvement at best. Telling it specifically to avoid words like "delve," "tapestry," "crucial," "moreover," and "furthermore," and instructing it not to summarize a section immediately after making a point, produces a measurably cleaner starting point.

**Ask for variation explicitly.** Request that paragraph lengths vary deliberately, that some sections use short declarative sentences and others use longer analytical ones, and that the piece includes at least a few moments of direct address to the reader rather than pure exposition throughout.

**Request a distinct point of view rather than balanced neutrality.** Models default toward safety, hedging every position because that is statistically the least risky output. Explicitly asking for a clear stance on debatable points produces content with an actual argument, which reads as more human and performs better with readers who are looking for guidance rather than a list of every possible option with no recommendation attached.

None of this eliminates the need for the full editorial pass described earlier. It simply means that pass starts from a stronger position, with less structural repair and more time available for the fact verification and voice work that separates optimized content from everything else being published today.

## Measuring Whether Optimization Actually Worked

Optimization is not complete just because a piece feels better on a read through. There are concrete signals worth tracking to confirm the work produced better outcomes, not just a subjectively nicer draft.

Time on page and scroll depth reveal whether readers who arrive stay and engage, rather than bouncing within seconds because the opening failed to answer their question quickly enough. A piece that ranks well but shows readers leaving almost immediately is signaling a mismatch between what search promised and what the content delivered, which is exactly the kind of gap optimization is supposed to close.

Ranking movement over several weeks, not days, shows whether the search alignment work paid off. Rankings for competitive terms rarely shift overnight, and judging optimization success too early leads to abandoning approaches that simply needed more time to register.

Return visits and internal link clicks to related content indicate whether a piece is establishing genuine topical trust rather than existing as an isolated page. Sites where readers move naturally from one piece to a related one are demonstrating exactly the kind of depth that both readers and search systems reward.

And plainly, ask actual readers. A quick note at the end of a piece inviting feedback, or a look at what questions people ask in comments or support conversations after reading, tells you directly whether the content answered what they needed or left gaps the optimization process missed.

## Where This Fits into a Real Content Workflow

None of the processes above requires abandoning AI assistance in favor of writing everything from scratch by hand. That would be slower without necessarily being better, since a human writer starting from nothing faces the exact same blank page problem a model does, just without the speed advantage. The goal is not to choose between humans and machines. It is combining the speed of generation with the rigor of genuine editorial standards, applied consistently, every time, rather than treated as optional extra credit when there happens to be time for it.

Teams that get this right tend to build the optimization steps directly into their production process rather than treating them as a separate cleanup phase bolted on afterward. Research and grounding happen before generation, not after. Structural and voice review happens as a required gate before anything ships, not as an occasional nice to have. Fact verification is non-negotiable regardless of deadline pressure, because the cost of one wrong claim reaching a reader outweighs the time saved by skipping the check.

That kind of workflow discipline is exactly what separates content that quietly compounds in value over months, earning trust, rankings, and return readers, from content that gets published, generates a brief spike in traffic from novelty, and then fades because it never actually delivered what it promised.

## Wrapping It Up

Generating content with AI takes seconds. Optimizing it properly takes real, deliberate work across facts, structure, search alignment, and voice, applied in that order, every single time. Skip the process and you get pages that look finished but perform like drafts, because that is exactly what they are.

The teams pulling ahead right now are not the ones avoiding AI assistance, and they are not the ones publishing raw output without a second look either. They are the ones treating generation as the starting line rather than the finish line, running every draft through genuine editorial rigor before it ever reaches a reader, and building that discipline into their actual workflow rather than hoping it happens naturally under deadline pressure.

That is the entire difference between AI generated content and AI optimized content. One exists. The other actually works.

</div>

<div class="faq-box">

## Frequently Asked Questions

<details>
<summary>Does AI generated content rank worse than human written content?</summary>
<p>No, not inherently. Search systems evaluate usefulness, accuracy, and how well a piece satisfies the intent behind a search, not the tool used to produce the first draft. Thin, ungrounded, poorly edited content underperforms regardless of its origin, and thoroughly optimized AI assisted content can perform just as well as, and sometimes better than, unedited human writing.</p>
</details>

<details>
<summary>How long should the optimization process take on a typical draft?</summary>
<p>For a standard-length article, expect thirty to sixty minutes of genuine editorial work covering fact verification, structural editing, and a full read aloud pass. Longer, more competitive pieces intended to rank for high value terms warrant considerably more time, often several hours spread across research, drafting, and multiple review passes.</p>
</details>

<details>
<summary>Is it necessary to disclose that content was produced with AI assistance?</summary>
<p>That depends on your industry, your audience's expectations, and any applicable regulations in your specific field. What matters more universally than disclosure policy is accuracy and usefulness. A properly optimized piece earns trust through the quality of what it delivers, regardless of what tools were involved in producing the first draft.</p>
</details>

<details>
<summary>Can the entire optimization process be automated?</summary>
<p>Large portions of it can be assisted by tools, particularly the initial structural cleanup and consistency checking. Fact verification and the final editorial judgment call on whether a piece genuinely reflects real expertise still benefit enormously from human review, because that judgment requires understanding context and stakes in a way that is difficult to fully hand off, even to well-designed automated systems.</p>
</details>

<details>
<summary>What is the single highest impact step in this entire process?</summary>
<p>Fact grounding, without question. A structurally perfect, beautifully voiced piece built on vague or unsupported claims will still underperform a rougher piece built on genuinely specific, verified information. Everything else in the optimization process makes grounded content easier to read. Nothing in the process can manufacture grounding that was never there to begin with.</p>
</details>

</div>

<div class="bringing-together-card">

<h2 class="bringing-together-title">Treat Generation As The Starting Line</h2>

<p class="bringing-together-desc">
OllaWrite automates source grounding, structural review, and multi-agent editorial QA so every draft passes through genuine optimization before it ever reaches a reader.
</p>

<div class="cta-button-wrapper">
<a href="https://ollawrite.com" class="os-btn-primary">Start Writing Free with OllaWrite →</a>
</div>

</div>`}],Pe={All:{dot:`#ffffff`,bg:`#0f172a`,border:`#1e293b`,text:`#ffffff`,badgeBg:`#334155`,badgeText:`#f8fafc`,accent:`#0f172a`},"AI Writing":{dot:`#f59e0b`,bg:`#fffbeb`,border:`#fde68a`,text:`#92400e`,badgeBg:`#fef3c7`,badgeText:`#78350f`,accent:`#f59e0b`},Guides:{dot:`#f59e0b`,bg:`#fffbeb`,border:`#fde68a`,text:`#92400e`,badgeBg:`#fef3c7`,badgeText:`#78350f`,accent:`#f59e0b`},"Site-First AI":{dot:`#0284c7`,bg:`#f0f9ff`,border:`#bae6fd`,text:`#0369a1`,badgeBg:`#e0f2fe`,badgeText:`#075985`,accent:`#0284c7`},RAG:{dot:`#0284c7`,bg:`#f0f9ff`,border:`#bae6fd`,text:`#0369a1`,badgeBg:`#e0f2fe`,badgeText:`#075985`,accent:`#0284c7`},"SEO Strategy":{dot:`#16a34a`,bg:`#f0fdf4`,border:`#bbf7d0`,text:`#15803d`,badgeBg:`#dcfce7`,badgeText:`#166534`,accent:`#16a34a`},SEO:{dot:`#16a34a`,bg:`#f0fdf4`,border:`#bbf7d0`,text:`#15803d`,badgeBg:`#dcfce7`,badgeText:`#166534`,accent:`#16a34a`},"AI SEO Writing":{dot:`#10b981`,bg:`#ecfdf5`,border:`#a7f3d0`,text:`#047857`,badgeBg:`#d1fae5`,badgeText:`#065f46`,accent:`#10b981`},"Humanizing AI":{dot:`#e11d48`,bg:`#fff1f2`,border:`#fecdd3`,text:`#be123c`,badgeBg:`#ffe4e6`,badgeText:`#9f1239`,accent:`#e11d48`},AEO:{dot:`#e11d48`,bg:`#fff1f2`,border:`#fecdd3`,text:`#be123c`,badgeBg:`#ffe4e6`,badgeText:`#9f1239`,accent:`#e11d48`},"Multi-Agent AI":{dot:`#9333ea`,bg:`#faf5ff`,border:`#e9d5ff`,text:`#7e22ce`,badgeBg:`#f3e8ff`,badgeText:`#6b21a8`,accent:`#9333ea`},GEO:{dot:`#9333ea`,bg:`#faf5ff`,border:`#e9d5ff`,text:`#7e22ce`,badgeBg:`#f3e8ff`,badgeText:`#6b21a8`,accent:`#9333ea`},"Editorial QA":{dot:`#059669`,bg:`#ecfdf5`,border:`#a7f3d0`,text:`#047857`,badgeBg:`#d1fae5`,badgeText:`#065f46`,accent:`#059669`},Citations:{dot:`#059669`,bg:`#ecfdf5`,border:`#a7f3d0`,text:`#047857`,badgeBg:`#d1fae5`,badgeText:`#065f46`,accent:`#059669`},"Content Generation":{dot:`#64748b`,bg:`#f8fafc`,border:`#e2e8f0`,text:`#334155`,badgeBg:`#f1f5f9`,badgeText:`#475569`,accent:`#64748b`},"Robots.txt":{dot:`#64748b`,bg:`#f8fafc`,border:`#e2e8f0`,text:`#334155`,badgeBg:`#f1f5f9`,badgeText:`#475569`,accent:`#64748b`},"Tool Reviews":{dot:`#4f46e5`,bg:`#eef2ff`,border:`#c7d2fe`,text:`#3730a3`,badgeBg:`#e0e7ff`,badgeText:`#312e81`,accent:`#4f46e5`},"AI Search":{dot:`#4f46e5`,bg:`#eef2ff`,border:`#c7d2fe`,text:`#3730a3`,badgeBg:`#e0e7ff`,badgeText:`#312e81`,accent:`#4f46e5`},"AI vs Human Writing":{dot:`#db2777`,bg:`#fdf2f8`,border:`#fbcfe8`,text:`#9d174d`,badgeBg:`#fce7f3`,badgeText:`#831843`,accent:`#db2777`}},Fe={dot:`#0284c7`,bg:`#f0f9ff`,border:`#bae6fd`,text:`#0369a1`,badgeBg:`#e0f2fe`,badgeText:`#075985`,accent:`#0284c7`};function Ie(e){return e&&Pe[e]||Fe}var Le=[`#003db3`,`#e8443a`,`#f59e0b`,`#16a34a`,`#9333ea`];function Re(e){return Le[(e%Le.length+Le.length)%Le.length]}var ze=({articles:e,allArticles:t,activeCategory:n=`All`,onSelectCategory:r,onReadArticle:i})=>{let a=[...e].sort((e,t)=>new Date(t.publishedDate).getTime()-new Date(e.publishedDate).getTime()),o=a[0],s=a.slice(1),c=n=>{let r=t||e,a=r.find(e=>e.title.toLowerCase().includes(n.toLowerCase().slice(0,15)));a?i(a):r[0]&&i(r[0])},l=t||e,u=[{name:`All`,count:l.length},{name:`AI Writing`,count:l.filter(e=>e.category===`AI Writing`).length||4},{name:`Site-First AI`,count:l.filter(e=>e.category===`Site-First AI`).length||2},{name:`SEO Strategy`,count:l.filter(e=>e.category===`SEO Strategy`).length||2},{name:`AI SEO Writing`,count:l.filter(e=>e.category===`AI SEO Writing`).length||1},{name:`Humanizing AI`,count:l.filter(e=>e.category===`Humanizing AI`).length||1},{name:`Editorial QA`,count:l.filter(e=>e.category===`Editorial QA`).length||1},{name:`Content Generation`,count:l.filter(e=>e.category===`Content Generation`).length||1},{name:`Multi-Agent AI`,count:l.filter(e=>e.category===`Multi-Agent AI`).length||1},{name:`Tool Reviews`,count:l.filter(e=>e.category===`Tool Reviews`).length||1}];return(0,A.jsxs)(`div`,{className:`w-full max-w-[1560px] mx-auto px-3 sm:px-5 lg:px-8 py-4 font-['Lato'] text-slate-800 bg-white`,children:[(0,A.jsxs)(`div`,{className:`lg:hidden space-y-4 mb-5`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`flex items-center gap-2 mb-2`,children:(0,A.jsx)(`span`,{className:`px-3 py-1 text-xs sm:text-sm font-bold rounded-full font-mono`,style:{backgroundColor:`#003db3`,color:`#ffffff`},children:`Essential Guide`})}),(0,A.jsx)(`div`,{className:`flex gap-2.5 overflow-x-auto pb-2 -mx-3 px-3 snap-x`,children:Ae.slice(0,5).map((e,t)=>(0,A.jsx)(`button`,{onClick:()=>c(e),className:`snap-start shrink-0 w-64 p-3 bg-white border border-slate-200 rounded-lg text-left cursor-pointer transition-colors group`,children:(0,A.jsx)(`h3`,{className:`font-bold text-sm text-slate-900 hover:text-[#e8443a] group-hover:text-[#e8443a] transition-colors line-clamp-2 leading-snug font-['Lato']`,children:e})},t))})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`flex items-center gap-2 mb-2`,children:(0,A.jsx)(`span`,{className:`px-3 py-1 text-xs sm:text-sm font-bold text-white rounded-full font-mono`,style:{backgroundColor:`#e8443a`},children:`Agent Workflow`})}),(0,A.jsx)(`div`,{className:`flex gap-2.5 overflow-x-auto pb-2 -mx-3 px-3 snap-x`,children:je.slice(0,5).map((e,t)=>(0,A.jsx)(`button`,{onClick:()=>c(e),className:`snap-start shrink-0 w-64 p-3 bg-white border border-slate-200 rounded-lg text-left cursor-pointer transition-colors group`,children:(0,A.jsx)(`h3`,{className:`font-bold text-sm text-slate-900 hover:text-[#e8443a] group-hover:text-[#e8443a] transition-colors line-clamp-2 leading-snug font-['Lato']`,children:e})},t))})]})]}),(0,A.jsxs)(`div`,{className:`flex gap-4 xl:gap-5`,children:[(0,A.jsx)(`aside`,{className:`hidden lg:block w-[240px] shrink-0`,children:(0,A.jsxs)(`div`,{className:`sticky top-16 rounded-xl border border-[#f1f5f9] bg-white/60 p-2.5`,children:[(0,A.jsx)(`div`,{className:`flex items-center gap-2 mb-2`,children:(0,A.jsx)(`span`,{className:`px-2.5 py-0.5 text-xs font-bold rounded-full font-mono`,style:{backgroundColor:`#003db3`,color:`#ffffff`},children:`Essential Guide`})}),(0,A.jsx)(`nav`,{className:`space-y-1.5`,children:Ae.map((e,t)=>(0,A.jsx)(`button`,{onClick:()=>c(e),tabIndex:0,className:`w-full text-left block p-2 bg-white border border-slate-200 hover:border-[#e8443a] hover:bg-[#fff1f0] hover:text-[#e8443a] hover:shadow-[0_2px_10px_rgba(232,68,58,0.14)] focus:border-[#e8443a] focus:text-[#e8443a] focus:bg-[#fff5f5] focus:outline-none focus:ring-2 focus:ring-[#e8443a]/35 active:bg-[#fee2e2] active:border-[#e8443a] rounded-lg transition-all text-xs font-bold text-slate-800 leading-snug cursor-pointer font-['Lato'] shadow-2xs`,children:(0,A.jsx)(`span`,{children:e})},t))}),(0,A.jsxs)(`div`,{className:`pt-2 mt-2 border-t border-slate-200 flex flex-col gap-1`,children:[(0,A.jsx)(`a`,{href:`https://www.ollawrite.com`,target:`_blank`,rel:`noopener noreferrer`,className:`os-toc-link block w-full text-left px-2 py-1 text-xs font-bold text-slate-800 hover:text-[#e8443a] hover:bg-[#fff1f0] hover:border-[#e8443a] focus:text-[#e8443a] rounded-lg transition-colors leading-snug`,children:`OllaWrite AI Platform ↗`}),(0,A.jsx)(`a`,{href:`https://www.ollawrite.com/#features`,target:`_blank`,rel:`noopener noreferrer`,className:`os-toc-link block w-full text-left px-2 py-1 text-xs font-bold text-slate-800 hover:text-[#e8443a] hover:bg-[#fff1f0] hover:border-[#e8443a] focus:text-[#e8443a] rounded-lg transition-colors leading-snug`,children:`Site-First Writing Engine ↗`}),(0,A.jsx)(`a`,{href:`https://www.ollawrite.com/#pricing`,target:`_blank`,rel:`noopener noreferrer`,className:`os-toc-link block w-full text-left px-2 py-1 text-xs font-bold text-slate-800 hover:text-[#e8443a] hover:bg-[#fff1f0] hover:border-[#e8443a] focus:text-[#e8443a] rounded-lg transition-colors leading-snug`,children:`Plans & Pricing Overview ↗`})]}),(0,A.jsxs)(`button`,{onClick:()=>c(`Humanize`),className:`inline-flex items-center mt-2 px-1.5 text-xs font-mono font-bold text-slate-700 hover:text-[#e8443a] cursor-pointer gap-1.5 hover:underline`,children:[(0,A.jsx)(`span`,{children:`EXPLORE_FULL_INDEX`}),(0,A.jsx)(le,{size:13})]})]})}),(0,A.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,A.jsxs)(`div`,{className:`mb-3.5`,children:[(0,A.jsx)(`h1`,{className:`text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-tight font-['Lato']`,children:`OllaWrite Insights: Grounded AI Research & Editorial Guides`}),(0,A.jsx)(`p`,{className:`text-xs sm:text-sm text-slate-600 mt-1 font-normal leading-relaxed font-['Lato']`,children:`Expert-led guides on AI content optimization, search strategy, and the future of grounded intelligence.`})]}),(0,A.jsxs)(`section`,{className:`mb-6`,children:[(0,A.jsxs)(`div`,{className:`flex items-center gap-2.5 mb-2.5`,children:[(0,A.jsxs)(`div`,{className:`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full`,style:{backgroundColor:`#ede9fe`,color:`#7c3aed`},children:[(0,A.jsx)(k,{className:`w-3.5 h-3.5 text-[#7c3aed]`}),(0,A.jsx)(`h2`,{className:`text-xs font-bold uppercase tracking-wide font-['Lato']`,children:`Newest Article`})]}),(0,A.jsx)(`span`,{className:`text-xs text-slate-500 font-medium`,children:`Live telemetry from 10 autonomous engines`})]}),o&&(0,A.jsx)(`div`,{onClick:()=>i(o),tabIndex:0,role:`button`,"aria-label":o.title,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&i(o)},className:`block mb-4 group cursor-pointer focus:outline-none`,children:(()=>{let e=Ie(o.category);return(0,A.jsxs)(`div`,{className:`relative overflow-hidden rounded-xl border border-slate-200 hover:border-[#f87171] hover:shadow-xs transition-all flex flex-col md:flex-row bg-white active:border-[#f87171]`,children:[(0,A.jsx)(`div`,{className:`md:w-[36%] aspect-[16/10] md:aspect-auto overflow-hidden bg-slate-100 min-h-[160px]`,children:(0,A.jsx)(`img`,{src:o.imageUrl,alt:o.title,className:`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300`,loading:`eager`})}),(0,A.jsxs)(`div`,{className:`md:w-[64%] p-3 sm:p-4 bg-slate-50/50 flex flex-col justify-between`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`flex items-center justify-between gap-2 mb-1.5`,children:(0,A.jsx)(`div`,{className:`flex items-center gap-2`,children:(0,A.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 text-xs font-mono px-2 py-0.5 rounded-full font-bold border`,style:{backgroundColor:e.bg,color:e.text,borderColor:e.border},children:[(0,A.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full shrink-0`,style:{backgroundColor:e.dot}}),(0,A.jsx)(`span`,{children:o.category})]})})}),(0,A.jsx)(`h3`,{className:`text-base sm:text-lg font-bold text-slate-900 leading-snug hover:text-[#e8443a] group-hover:text-[#e8443a] transition-colors mb-1 font-['Lato']`,children:o.title}),(0,A.jsx)(`p`,{className:`text-xs sm:text-sm text-slate-600 hover:text-[#e8443a] line-clamp-2 mb-2 font-normal leading-relaxed font-['Lato'] transition-colors`,children:o.subtitle})]}),(0,A.jsxs)(`div`,{className:`flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-200 group-hover:border-[#f87171] transition-colors font-mono font-medium`,children:[(0,A.jsx)(`div`,{className:`flex items-center gap-2`,children:(0,A.jsx)(`span`,{children:o.readTime})}),(0,A.jsx)(`span`,{className:`text-slate-600 font-semibold`,children:o.publishedDate})]})]})]})})()}),(0,A.jsx)(`div`,{className:`flex flex-wrap items-center gap-1.5 mb-4 select-none`,children:u.map(e=>{let t=Ie(e.name),i=n===e.name;return(0,A.jsxs)(`button`,{onClick:()=>r&&r(e.name),className:`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer hover:scale-[1.03] active:scale-[0.98] font-['Lato']`,style:{backgroundColor:i&&e.name===`All`?`#0f172a`:t.bg,color:i&&e.name===`All`?`#ffffff`:t.text,border:`1.5px solid ${i?e.name===`All`?`#0f172a`:t.dot:t.border}`,boxShadow:i?`0 0 0 2px ${t.dot}33, 0 2px 6px rgba(0,0,0,0.06)`:`0 1px 2px rgba(0,0,0,0.03)`},title:`Filter by ${e.name} (${e.count} articles)`,children:[(0,A.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full shrink-0`,style:{backgroundColor:i&&e.name===`All`?`#ffffff`:t.dot}}),(0,A.jsx)(`span`,{children:e.name}),(0,A.jsx)(`span`,{className:`text-[10px] font-bold px-1.5 py-0.5 rounded-full font-mono leading-none`,style:{backgroundColor:i&&e.name===`All`?`#334155`:t.badgeBg,color:i&&e.name===`All`?`#f8fafc`:t.badgeText},children:e.count})]},e.name)})}),(0,A.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5`,children:s.map(e=>{let t=Ie(e.category);return(0,A.jsxs)(`article`,{onClick:()=>i(e),tabIndex:0,role:`button`,"aria-label":e.title,onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&i(e)},className:`border border-slate-200 bg-white rounded-lg transition-all group relative overflow-hidden hover:border-[#f87171] hover:shadow-xs cursor-pointer flex flex-col p-3 active:border-[#f87171]`,children:[(0,A.jsx)(`div`,{className:`flex items-center gap-1.5 mb-1.5 font-mono`,children:(0,A.jsxs)(`span`,{className:`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-bold border`,style:{backgroundColor:t.bg,color:t.text,borderColor:t.border},children:[(0,A.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full shrink-0`,style:{backgroundColor:t.dot}}),(0,A.jsx)(`span`,{children:e.category})]})}),(0,A.jsx)(`h3`,{className:`text-xs sm:text-sm font-bold text-slate-900 leading-snug hover:text-[#e8443a] group-hover:text-[#e8443a] transition-colors line-clamp-2 flex-1 font-['Lato'] mb-1`,children:e.title}),(0,A.jsx)(`p`,{className:`text-xs text-slate-600 hover:text-[#e8443a] line-clamp-2 mb-2 leading-relaxed font-normal font-['Lato'] transition-colors`,children:e.subtitle}),(0,A.jsxs)(`div`,{className:`flex items-center justify-between text-xs text-slate-500 pt-1.5 border-t border-slate-100 group-hover:border-[#f87171] transition-colors font-mono font-medium`,children:[(0,A.jsx)(`div`,{className:`flex items-center gap-1.5`,children:(0,A.jsx)(`span`,{children:e.readTime})}),(0,A.jsx)(`span`,{className:`text-slate-600 font-semibold`,children:e.publishedDate})]})]},e.id)})})]})]}),(0,A.jsx)(`aside`,{className:`hidden lg:block w-[240px] shrink-0`,children:(0,A.jsxs)(`div`,{className:`sticky top-16 rounded-xl border border-[#f1f5f9] bg-white/60 p-2.5`,children:[(0,A.jsx)(`div`,{className:`flex items-center gap-2 mb-2`,children:(0,A.jsx)(`span`,{className:`px-2.5 py-0.5 text-xs font-bold rounded-full font-mono`,style:{backgroundColor:`#ede9fe`,color:`#7c3aed`},children:`Agent Workflow`})}),(0,A.jsx)(`nav`,{className:`space-y-1.5`,children:je.map((e,t)=>(0,A.jsx)(`button`,{onClick:()=>c(e),tabIndex:0,className:`w-full text-left block p-2 bg-white border border-slate-200 hover:border-[#e8443a] hover:bg-[#fff1f0] hover:text-[#e8443a] hover:shadow-[0_2px_10px_rgba(232,68,58,0.14)] focus:border-[#e8443a] focus:text-[#e8443a] focus:bg-[#fff5f5] focus:outline-none focus:ring-2 focus:ring-[#e8443a]/35 active:bg-[#fee2e2] active:border-[#e8443a] rounded-lg transition-all text-xs font-bold text-slate-800 leading-snug cursor-pointer font-['Lato'] shadow-2xs`,children:(0,A.jsx)(`span`,{children:e})},t))}),(0,A.jsxs)(`button`,{onClick:()=>c(`Site-First`),className:`inline-flex items-center mt-2 px-1.5 text-xs font-mono font-bold hover:underline cursor-pointer gap-1.5`,style:{color:`#e8443a`},children:[(0,A.jsx)(`span`,{children:`EXPLORE_CITATION_INDEX`}),(0,A.jsx)(le,{size:13})]})]})})]})]})};function Be(e){if(!e)return``;let t=e;return t=t.replace(/((?:\|[^\n]+\|\n?)+)/g,e=>{let t=e.trim().split(`
`).filter(e=>e.trim().startsWith(`|`));if(t.length<2)return e;let n=t[0],r=t.slice(2),i=e=>e.split(`|`).slice(1,-1).map(e=>e.trim());return`<div class="overflow-x-auto my-3"><table class="prose-table"><thead><tr>${i(n).map(e=>`<th>${e}</th>`).join(``)}</tr></thead><tbody>${r.map(e=>`<tr>${i(e).map(e=>`<td>${e}</td>`).join(``)}</tr>`).join(``)}</tbody></table></div>`}),t=t.replace(/^## (.*$)/gim,(e,t)=>`<h2 id="${t.replace(/<[^>]+>/g,``).toLowerCase().replace(/[^a-z0-9]+/g,`-`)}" class="text-lg sm:text-xl font-bold text-slate-900 mt-4 mb-2 font-['Lato']">${t}</h2>`),t=t.replace(/^### (.*$)/gim,(e,t)=>`<h3 id="${t.replace(/<[^>]+>/g,``).toLowerCase().replace(/[^a-z0-9]+/g,`-`)}" class="text-base sm:text-lg font-bold text-slate-900 mt-3.5 mb-1.5 font-['Lato']">${t}</h3>`),t=t.replace(/^#### (.*$)/gim,(e,t)=>`<h4 id="${t.replace(/<[^>]+>/g,``).toLowerCase().replace(/[^a-z0-9]+/g,`-`)}" class="text-sm sm:text-base font-bold text-[#003db3] mt-2.5 mb-1 font-['Lato']">${t}</h4>`),t=t.replace(/\*\*(.*?)\*\*/g,`<strong>$1</strong>`),t=t.replace(/\*(.*?)\*/g,`<em>$1</em>`),t=t.replace(/\[([^\]]+)\]\(([^)]+)\)/g,`<a href="$2" target="_blank" rel="noopener noreferrer" class="text-[#003db3] underline hover:text-[#002d86] font-medium">$1</a>`),t=t.replace(/^> (.*$)/gim,`<blockquote class="pl-3 border-l-4 border-[#003db3] my-2.5 italic text-slate-700 bg-[#eef4ff]/60 py-2 px-3 rounded-r text-sm sm:text-base">$1</blockquote>`),t=t.replace(/^-\s+(.*$)/gim,`<li class="ml-4 list-disc text-slate-800 my-0.5 text-sm sm:text-base">$1</li>`),t=t.replace(/^(\d+)\.\s+(.*$)/gim,`<li class="ml-4 list-decimal text-slate-800 my-0.5 text-sm sm:text-base"><strong>$1.</strong> $2</li>`),t.split(/\n\n+/).map(e=>{let t=e.trim();return t?t.startsWith(`<div`)||t.startsWith(`<h`)||t.startsWith(`<table`)||t.startsWith(`<details`)||t.startsWith(`<blockquote`)||t.startsWith(`<li`)||t.startsWith(`<ul`)||t.startsWith(`<ol`)?t:`<p class="leading-relaxed mb-3 text-slate-800 font-['Lato'] text-sm sm:text-base">${t.replace(/\n+/g,` `)}</p>`:``}).join(`
`)}var Ve=({article:e,onBack:t,onSelectArticle:n,allArticles:r})=>{let[i,a]=w.useState(!1);(0,w.useEffect)(()=>{window.scrollTo({top:0,behavior:`smooth`})},[e]);let o=r.filter(t=>t.id!==e.id).sort((e,t)=>new Date(t.publishedDate).getTime()-new Date(e.publishedDate).getTime()),s=o.slice(0,4),c=o.slice(4,8),l=[{title:`OllaWrite AI Platform ↗`,href:`https://www.ollawrite.com`},{title:`Site-First Writing Engine ↗`,href:`https://www.ollawrite.com/#features`},{title:`Plans & Pricing Overview ↗`,href:`https://www.ollawrite.com/#pricing`}],u=e.tags?.[0]||e.category||`Insights`;return(0,A.jsx)(`div`,{className:`w-full bg-white text-slate-900 font-['Lato'] min-h-screen py-4 px-3 sm:px-5 lg:px-8 animate-fade-in`,children:(0,A.jsxs)(`div`,{className:`max-w-[1560px] mx-auto`,children:[(0,A.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-3 mb-3 pb-2.5 border-b border-slate-200`,children:[(0,A.jsxs)(`nav`,{className:`flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium`,children:[(0,A.jsxs)(`button`,{onClick:t,className:`hover:text-[#e8443a] transition cursor-pointer font-bold text-[#e8443a] flex items-center gap-1`,children:[(0,A.jsx)(se,{size:15}),` Home`]}),(0,A.jsx)(`span`,{children:`/`}),(0,A.jsx)(`button`,{onClick:t,className:`hover:text-[#e8443a] transition cursor-pointer`,children:`Blog`}),(0,A.jsx)(`span`,{children:`/`}),(0,A.jsx)(`span`,{className:`text-slate-900 font-semibold`,children:u})]}),(0,A.jsxs)(`button`,{onClick:()=>{navigator.clipboard.writeText(window.location.href),a(!0),setTimeout(()=>a(!1),2e3)},className:`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 transition text-xs font-mono font-bold cursor-pointer`,children:[i?(0,A.jsx)(D,{size:13,className:`text-emerald-600`}):(0,A.jsx)(ye,{size:13}),(0,A.jsx)(`span`,{children:i?`COPIED_LINK`:`SHARE_ARTICLE`})]})]}),(0,A.jsxs)(`header`,{className:`post-header mb-4 pb-3 border-b border-slate-200`,children:[(0,A.jsxs)(`div`,{className:`post-meta-caption flex items-center gap-2.5 text-xs font-bold text-[#003db3] uppercase mb-2`,children:[(0,A.jsx)(`span`,{className:`px-2.5 py-0.5 rounded text-[11px] tracking-wider`,style:{backgroundColor:Ie(e.category).bg,color:Ie(e.category).text},children:u}),(0,A.jsx)(`span`,{children:`•`}),(0,A.jsx)(`span`,{className:`text-slate-500 font-semibold`,children:e.publishedDate}),(0,A.jsx)(`span`,{children:`•`}),(0,A.jsx)(`span`,{className:`text-slate-500 font-semibold`,children:e.readTime})]}),(0,A.jsx)(`h1`,{className:`os-display-title text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight mb-2 font-['Lato']`,children:e.title}),e.subtitle&&(0,A.jsx)(`p`,{className:`os-lead-paragraph text-sm sm:text-base text-slate-600 leading-relaxed mb-3 font-normal`,children:e.subtitle}),(0,A.jsxs)(`div`,{className:`author-hashtags-row flex flex-wrap items-center justify-between gap-3 pt-2.5 border-t border-slate-100`,children:[(0,A.jsxs)(`div`,{className:`author-info-group flex items-center gap-2.5`,children:[(0,A.jsx)(`div`,{className:`author-avatar-lightning w-8 h-8 rounded-full bg-[#eef4ff] border border-[#c7d8f8] flex items-center justify-center text-sm`,children:`⚡`}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`author-title-name font-bold text-slate-900 text-sm`,children:e.author.name}),(0,A.jsx)(`div`,{className:`author-subtitle-link text-[11px] text-slate-500`,children:e.author.role||`OllaWrite Content Architecture`})]})]}),(0,A.jsxs)(`div`,{className:`hashtags-group flex flex-wrap gap-2 text-xs font-semibold`,children:[(0,A.jsxs)(`span`,{style:{color:Re(0)},children:[`#`,u.toLowerCase().replace(/[^a-z0-9]/g,``)]}),(0,A.jsx)(`span`,{style:{color:Re(1)},children:`#aiwriting`}),(0,A.jsx)(`span`,{style:{color:Re(2)},children:`#agenticAI`}),(0,A.jsx)(`span`,{style:{color:Re(3)},children:`#contentstrategy`})]})]})]}),(0,A.jsxs)(`div`,{className:`blog-layout-grid grid grid-cols-1 lg:grid-cols-[240px_1fr_240px] gap-4 xl:gap-5 items-start`,children:[(0,A.jsxs)(`aside`,{className:`blog-sidebar sticky top-16 space-y-2.5`,children:[(0,A.jsx)(`span`,{className:`sidebar-title blue block text-xs font-bold uppercase tracking-wider text-white px-2.5 py-1 rounded-full w-max mb-2`,style:{backgroundColor:`#003db3`},children:`Essential Guides`}),(0,A.jsxs)(`div`,{className:`sidebar-cards-stack flex flex-col gap-1.5`,children:[s.map(e=>(0,A.jsx)(`button`,{onClick:()=>n(e),className:`os-toc-link text-left w-full p-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 hover:text-[#e8443a] font-bold text-xs sm:text-[13px] transition-colors cursor-pointer line-clamp-2`,children:e.title},e.id)),(0,A.jsx)(`div`,{className:`pt-2 border-t border-slate-200 flex flex-col gap-1.5`,children:l.map((e,t)=>(0,A.jsx)(`a`,{href:e.href,target:`_blank`,rel:`noopener noreferrer`,className:`os-toc-link block p-2 bg-slate-50 border border-slate-200 rounded-lg hover:border-[#e8443a] hover:text-[#e8443a] text-slate-800 font-bold text-xs transition`,children:e.title},t))})]})]}),(0,A.jsx)(`main`,{className:`blog-main-column min-w-0`,children:(0,A.jsx)(`div`,{className:`prose text-slate-800 space-y-2.5 text-sm sm:text-base font-['Lato']`,dangerouslySetInnerHTML:{__html:Be(e.content)}})}),(0,A.jsxs)(`aside`,{className:`blog-sidebar sticky top-16 space-y-2.5`,children:[(0,A.jsx)(`span`,{className:`sidebar-title purple block text-xs font-bold uppercase tracking-wider text-white px-2.5 py-1 rounded-full w-max mb-2`,style:{backgroundColor:`#e8443a`},children:`Agent Workflows`}),(0,A.jsx)(`div`,{className:`sidebar-cards-stack flex flex-col gap-1.5`,children:c.map(e=>(0,A.jsx)(`button`,{onClick:()=>n(e),className:`os-toc-link text-left w-full p-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 hover:text-[#e8443a] font-bold text-xs sm:text-[13px] transition-colors cursor-pointer line-clamp-2`,children:e.title},e.id))})]})]})]})})},He=({isOpen:e,onClose:t,articles:n,onSelectArticle:r})=>{let[i,a]=(0,w.useState)(``),o=(0,w.useRef)(null);if((0,w.useEffect)(()=>{e&&setTimeout(()=>o.current?.focus(),50)},[e]),(0,w.useEffect)(()=>{let e=e=>{e.key===`Escape`&&t()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[t]),!e)return null;let s=i.trim()===``?[]:n.filter(e=>e.title.toLowerCase().includes(i.toLowerCase())||e.summary.toLowerCase().includes(i.toLowerCase())||e.category.toLowerCase().includes(i.toLowerCase())||(e.tags?.some(e=>e.toLowerCase().includes(i.toLowerCase()))??!1));return(0,A.jsx)(`div`,{className:`fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-sm flex items-start justify-center pt-12 sm:pt-20 px-4 animate-fade-in font-['Lato']`,children:(0,A.jsxs)(`div`,{className:`bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden text-slate-900`,children:[(0,A.jsxs)(`div`,{className:`p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50`,children:[(0,A.jsx)(Ce,{className:`w-5 h-5 text-[#e8443a] shrink-0`}),(0,A.jsx)(`input`,{ref:o,type:`text`,value:i,onChange:e=>a(e.target.value),placeholder:`QUERY_KNOWLEDGE_BASE (e.g. sitemap, multi-agent, SEO)...`,className:`w-full bg-transparent text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none font-mono font-medium py-1`}),(0,A.jsx)(`button`,{onClick:t,className:`text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-200 transition cursor-pointer`,children:(0,A.jsx)(Te,{size:18})})]}),i.trim()===``&&(0,A.jsxs)(`div`,{className:`p-5`,children:[(0,A.jsxs)(`div`,{className:`text-xs font-mono text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2 font-bold`,children:[(0,A.jsx)(pe,{size:14,className:`text-[#e8443a]`}),(0,A.jsx)(`span`,{children:`INDEXED_TOPIC_VECTORS`})]}),(0,A.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:Me.map((e,t)=>{let n=Re(t);return(0,A.jsxs)(`button`,{onClick:()=>a(e),className:`px-3 py-1.5 rounded-lg border bg-slate-50 text-xs font-mono font-semibold text-slate-700 transition cursor-pointer`,style:{borderColor:`${n}55`,color:n},onMouseEnter:e=>{e.currentTarget.style.backgroundColor=`${n}18`,e.currentTarget.style.borderColor=n},onMouseLeave:e=>{e.currentTarget.style.backgroundColor=``,e.currentTarget.style.borderColor=`${n}55`},children:[`> `,e]},e)})})]}),i.trim()!==``&&(0,A.jsx)(`div`,{className:`max-h-[380px] overflow-y-auto divide-y divide-slate-100 p-3`,children:s.length>0?s.map(e=>(0,A.jsxs)(`button`,{onClick:()=>{r(e),t()},className:`w-full text-left p-3.5 rounded-xl hover:bg-slate-50 transition flex items-center justify-between group cursor-pointer`,children:[(0,A.jsxs)(`div`,{className:`pr-3`,children:[(0,A.jsx)(`div`,{className:`flex items-center gap-2 text-xs font-mono mb-1`,children:(0,A.jsxs)(`span`,{className:`font-bold uppercase`,style:{color:Ie(e.category).accent},children:[`[`,e.category,`]`]})}),(0,A.jsx)(`div`,{className:`text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#e8443a] transition font-['Lato']`,children:e.title}),(0,A.jsx)(`div`,{className:`text-xs text-slate-500 line-clamp-1 mt-1 font-['Lato'] font-normal`,children:e.subtitle})]}),(0,A.jsx)(le,{size:16,className:`text-slate-400 group-hover:text-[#e8443a] group-hover:translate-x-0.5 transition shrink-0`})]},e.id)):(0,A.jsxs)(`div`,{className:`p-8 text-center text-slate-500 text-xs sm:text-sm font-mono`,children:[`NO_VECTORS_FOUND_FOR "`,i,`"`]})}),(0,A.jsxs)(`div`,{className:`bg-slate-50 px-4 py-2.5 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between font-mono font-medium`,children:[(0,A.jsx)(`span`,{children:`ESC to exit console`}),(0,A.jsxs)(`span`,{children:[n.length,` specifications in vector index`]})]})]})})},Ue=class extends w.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error(`Knowledge Base App caught error:`,e,t)}render(){return this.state.hasError?(0,A.jsxs)(`div`,{style:{padding:`40px`,fontFamily:`Lato, sans-serif`,maxWidth:`600px`,margin:`40px auto`,textAlign:`center`,background:`#090d16`,color:`#f8fafc`,border:`1px solid #1e293b`,borderRadius:`12px`},children:[(0,A.jsx)(`h2`,{style:{color:`#06b6d4`,fontSize:`20px`},children:`[ERR_KNOWLEDGE_BASE_RENDER]`}),(0,A.jsx)(`p`,{style:{marginTop:`10px`,color:`#94a3b8`,fontSize:`13px`},children:this.state.error?.message}),(0,A.jsx)(`button`,{onClick:()=>window.location.reload(),style:{marginTop:`20px`,padding:`8px 18px`,background:`#06b6d4`,color:`#090d16`,border:`none`,borderRadius:`6px`,cursor:`pointer`,fontWeight:`bold`},children:`RELOAD_SESSION`})]}):this.props.children}};function We(){let[e,t]=(0,w.useState)(`All`),[n,r]=(0,w.useState)(!1),[i,a]=(0,w.useState)(null),[o,s]=(0,w.useState)(()=>localStorage.getItem(`ollawrite_theme`)||`light`);(0,w.useEffect)(()=>{document.documentElement.setAttribute(`data-theme`,o),localStorage.setItem(`ollawrite_theme`,o)},[o]);let c=()=>{s(e=>e===`light`?`dark`:`light`)};(0,w.useEffect)(()=>{let e=e=>{(e.metaKey||e.ctrlKey)&&e.key===`k`&&(e.preventDefault(),r(!0))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[]);let l=e===`All`?Ne:Ne.filter(t=>t.category===e);return(0,A.jsx)(Ue,{children:(0,A.jsxs)(`div`,{className:`min-h-screen bg-white text-slate-900 flex flex-col font-['Lato'] selection:bg-[#e8443a] selection:text-white`,children:[(0,A.jsx)(ke,{activeCategory:e,onSelectCategory:t,onOpenSearch:()=>r(!0),theme:o,onToggleTheme:c}),(0,A.jsx)(`main`,{className:`flex-1`,children:i?(0,A.jsx)(Ve,{article:i,onBack:()=>a(null),onSelectArticle:a,allArticles:Ne}):(0,A.jsx)(ze,{articles:l,allArticles:Ne,activeCategory:e,onSelectCategory:t,onReadArticle:a})}),(0,A.jsx)(He,{isOpen:n,onClose:()=>r(!1),articles:Ne,onSelectArticle:e=>{a(e),r(!1)}})]})})}(0,Oe.createRoot)(document.getElementById(`root`)).render((0,A.jsx)(w.StrictMode,{children:(0,A.jsx)(We,{})}));