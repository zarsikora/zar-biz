/*! For license information please see index.827b081ee079c196b9f0.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var r=n(1),i=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function s(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var l=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,r,l=s(e),c=1;c<arguments.length;c++){for(var u in n=Object(arguments[c]))a.call(n,u)&&(l[u]=n[u]);if(i){r=i(n);for(var f=0;f<r.length;f++)o.call(n,r[f])&&(l[r[f]]=n[r[f]])}}return l},c=Object(r.b)((function(e,t){var n=60103,r=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,a=60110,o=60112;t.Suspense=60113;var s=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;n=u("react.element"),r=u("react.portal"),t.Fragment=u("react.fragment"),t.StrictMode=u("react.strict_mode"),t.Profiler=u("react.profiler"),i=u("react.provider"),a=u("react.context"),o=u("react.forward_ref"),t.Suspense=u("react.suspense"),s=u("react.memo"),c=u("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p={};function m(e,t,n){this.props=e,this.context=t,this.refs=p,this.updater=n||h}function g(){}function b(e,t,n){this.props=e,this.context=t,this.refs=p,this.updater=n||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=m.prototype;var v=b.prototype=new g;v.constructor=b,l(v,m.prototype),v.isPureReactComponent=!0;var y={current:null},w=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var i,a={},o=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(o=""+t.key),t)w.call(t,i)&&!E.hasOwnProperty(i)&&(a[i]=t[i]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===a[i]&&(a[i]=l[i]);return{$$typeof:n,type:e,key:o,ref:s,props:a,_owner:y.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var T=/\/+/g;function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,i,a,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return o=o(l=e),e=""===a?"."+A(l,0):a,Array.isArray(o)?(i="",null!=e&&(i=e.replace(T,"$&/")+"/"),S(o,t,i,"",(function(e){return e}))):null!=o&&(k(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,i+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(T,"$&/")+"/")+e)),t.push(o)),1;if(l=0,a=""===a?".":a+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=a+A(s=e[c],c);l+=S(s,t,i,u,o)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),c=0;!(s=e.next()).done;)l+=S(s=s.value,t,i,u=a+A(s,c++),o);else if("object"===s)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function _(e,t,n){if(null==e)return e;var r=[],i=0;return S(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function R(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function P(){var e=C.current;if(null===e)throw Error(d(321));return e}var I={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:y,IsSomeRendererActing:{current:!1},assign:l};t.Children={map:_,forEach:function(e,t,n){_(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return _(e,(function(){t++})),t},toArray:function(e){return _(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error(d(143));return e}},t.Component=m,t.PureComponent=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var i=l({},e.props),a=e.key,o=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,s=y.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)w.call(t,u)&&!E.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){c=Array(u);for(var f=0;f<u;f++)c[f]=arguments[f+2];i.children=c}return{$$typeof:n,type:e.type,key:a,ref:o,props:i,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:o,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:c,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return P().useCallback(e,t)},t.useContext=function(e,t){return P().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return P().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return P().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return P().useLayoutEffect(e,t)},t.useMemo=function(e,t){return P().useMemo(e,t)},t.useReducer=function(e,t,n){return P().useReducer(e,t,n)},t.useRef=function(e){return P().useRef(e)},t.useState=function(e){return P().useState(e)},t.version="17.0.2"})),u=Object(r.b)((function(e){e.exports=c}))},function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i}));var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function a(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&n.path)}},n.exports),n.exports}}).call(this,n(16))},,function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return pe})),n.d(t,"b",(function(){return we})),n.d(t,"c",(function(){return ae})),n.d(t,"d",(function(){return fe})),n.d(t,"e",(function(){return he}));var r=n(0),i=n(10);n(9),n(1);function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,a(e,t)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e){return"/"===e.charAt(0)}function c(e,t){for(var n=t,r=n+1,i=e.length;r<i;n+=1,r+=1)e[n]=e[r];e.pop()}function u(e,t){if(!e)throw new Error("Invariant failed")}function f(e){return"/"===e.charAt(0)?e:"/"+e}function d(e){return"/"===e.charAt(0)?e.substr(1):e}function h(e,t){return function(e,t){return 0===e.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(e.charAt(t.length))}(e,t)?e.substr(t.length):e}function p(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e}function m(e){var t=e.pathname,n=e.search,r=e.hash,i=t||"/";return n&&"?"!==n&&(i+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(i+="#"===r.charAt(0)?r:"#"+r),i}function g(e,t,n,r){var i;"string"==typeof e?(i=function(e){var t=e||"/",n="",r="",i=t.indexOf("#");-1!==i&&(r=t.substr(i),t=t.substr(0,i));var a=t.indexOf("?");return-1!==a&&(n=t.substr(a),t=t.substr(0,a)),{pathname:t,search:"?"===n?"":n,hash:"#"===r?"":r}}(e)).state=t:(void 0===(i=s({},e)).pathname&&(i.pathname=""),i.search?"?"!==i.search.charAt(0)&&(i.search="?"+i.search):i.search="",i.hash?"#"!==i.hash.charAt(0)&&(i.hash="#"+i.hash):i.hash="",void 0!==t&&void 0===i.state&&(i.state=t));try{i.pathname=decodeURI(i.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return n&&(i.key=n),r?i.pathname?"/"!==i.pathname.charAt(0)&&(i.pathname=function(e,t){void 0===t&&(t="");var n,r=e&&e.split("/")||[],i=t&&t.split("/")||[],a=e&&l(e),o=t&&l(t),s=a||o;if(e&&l(e)?i=r:r.length&&(i.pop(),i=i.concat(r)),!i.length)return"/";if(i.length){var u=i[i.length-1];n="."===u||".."===u||""===u}else n=!1;for(var f=0,d=i.length;d>=0;d--){var h=i[d];"."===h?c(i,d):".."===h?(c(i,d),f++):f&&(c(i,d),f--)}if(!s)for(;f--;f)i.unshift("..");!s||""===i[0]||i[0]&&l(i[0])||i.unshift("");var p=i.join("/");return n&&"/"!==p.substr(-1)&&(p+="/"),p}(i.pathname,r.pathname)):i.pathname=r.pathname:i.pathname||(i.pathname="/"),i}function b(){var e=null;var t=[];return{setPrompt:function(t){return e=t,function(){e===t&&(e=null)}},confirmTransitionTo:function(t,n,r,i){if(null!=e){var a="function"==typeof e?e(t,n):e;"string"==typeof a?"function"==typeof r?r(a,i):i(!0):i(!1!==a)}else i(!0)},appendListener:function(e){var n=!0;function r(){n&&e.apply(void 0,arguments)}return t.push(r),function(){n=!1,t=t.filter((function(e){return e!==r}))}},notifyListeners:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.forEach((function(e){return e.apply(void 0,n)}))}}}var v=!("undefined"==typeof window||!window.document||!window.document.createElement);function y(e,t){t(window.confirm(e))}var w="popstate",E="hashchange";function x(){try{return window.history.state||{}}catch(e){return{}}}function k(e){void 0===e&&(e={}),v||u(!1);var t,n=window.history,r=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,i=!(-1===window.navigator.userAgent.indexOf("Trident")),a=e,o=a.forceRefresh,l=void 0!==o&&o,c=a.getUserConfirmation,d=void 0===c?y:c,k=a.keyLength,T=void 0===k?6:k,A=e.basename?p(f(e.basename)):"";function S(e){var t=e||{},n=t.key,r=t.state,i=window.location,a=i.pathname+i.search+i.hash;return A&&(a=h(a,A)),g(a,r,n)}function _(){return Math.random().toString(36).substr(2,T)}var R=b();function C(e){s(B,e),B.length=n.length,R.notifyListeners(B.location,B.action)}function P(e){(function(e){return void 0===e.state&&-1===navigator.userAgent.indexOf("CriOS")})(e)||j(S(e.state))}function I(){j(S(x()))}var O=!1;function j(e){if(O)O=!1,C();else{R.confirmTransitionTo(e,"POP",d,(function(t){t?C({action:"POP",location:e}):function(e){var t=B.location,n=L.indexOf(t.key);-1===n&&(n=0);var r=L.indexOf(e.key);-1===r&&(r=0);var i=n-r;i&&(O=!0,M(i))}(e)}))}}var D=S(x()),L=[D.key];function U(e){return A+m(e)}function M(e){n.go(e)}var F=0;function N(e){1===(F+=e)&&1===e?(window.addEventListener(w,P),i&&window.addEventListener(E,I)):0===F&&(window.removeEventListener(w,P),i&&window.removeEventListener(E,I))}var z=!1;var B={length:n.length,action:"POP",location:D,createHref:U,push:function(e,t){var i="PUSH",a=g(e,t,_(),B.location);R.confirmTransitionTo(a,i,d,(function(e){if(e){var t=U(a),o=a.key,s=a.state;if(r)if(n.pushState({key:o,state:s},null,t),l)window.location.href=t;else{var c=L.indexOf(B.location.key),u=L.slice(0,c+1);u.push(a.key),L=u,C({action:i,location:a})}else window.location.href=t}}))},replace:function(e,t){var i="REPLACE",a=g(e,t,_(),B.location);R.confirmTransitionTo(a,i,d,(function(e){if(e){var t=U(a),o=a.key,s=a.state;if(r)if(n.replaceState({key:o,state:s},null,t),l)window.location.replace(t);else{var c=L.indexOf(B.location.key);-1!==c&&(L[c]=a.key),C({action:i,location:a})}else window.location.replace(t)}}))},go:M,goBack:function(){M(-1)},goForward:function(){M(1)},block:function(e){void 0===e&&(e=!1);var t=R.setPrompt(e);return z||(N(1),z=!0),function(){return z&&(z=!1,N(-1)),t()}},listen:function(e){var t=R.appendListener(e);return N(1),function(){N(-1),t()}}};return B}var T="hashchange",A={hashbang:{encodePath:function(e){return"!"===e.charAt(0)?e:"!/"+d(e)},decodePath:function(e){return"!"===e.charAt(0)?e.substr(1):e}},noslash:{encodePath:d,decodePath:f},slash:{encodePath:f,decodePath:f}};function S(e){var t=e.indexOf("#");return-1===t?e:e.slice(0,t)}function _(){var e=window.location.href,t=e.indexOf("#");return-1===t?"":e.substring(t+1)}function R(e){window.location.replace(S(window.location.href)+"#"+e)}function C(e){void 0===e&&{},v||u(!1);var t=window.history,n=(window.navigator.userAgent.indexOf("Firefox"),e),r=n.getUserConfirmation,i=void 0===r?y:r,a=n.hashType,o=void 0===a?"slash":a,l=e.basename?p(f(e.basename)):"",c=A[o],d=c.encodePath,w=c.decodePath;function E(){var e=w(_());return l&&h(e,l),g(e)}var x=b();function k(e){s(z,e),z.length=t.length,x.notifyListeners(z.location,z.action)}var C=!1,P=null;function I(){var e,t,n=_(),r=d(n);if(n!==r)R(r);else{var a=E(),o=z.location;if(!C&&(a,o.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash))return;if(P===m(a))return;null,function(e){if(C)!1,k();else{var t="POP";x.confirmTransitionTo(e,t,i,(function(n){n?k({action:t,location:e}):function(e){var t=z.location,n=L.lastIndexOf(m(t));-1===n&&0;var r=L.lastIndexOf(m(e));-1===r&&0;var i=n-r;i&&(!0,U(i))}(e)}))}}(a)}}var O=_(),j=d(O);O!==j&&R(j);var D=E(),L=[m(D)];function U(e){t.go(e)}var M=0;function F(e){1===(M+=e)&&1===e?window.addEventListener(T,I):0===M&&window.removeEventListener(T,I)}var N=!1;var z={length:t.length,action:"POP",location:D,createHref:function(e){var t=document.querySelector("base"),n="";return t&&t.getAttribute("href")&&S(window.location.href),n+"#"+d(l+m(e))},push:function(e,t){var n="PUSH",r=g(e,void 0,void 0,z.location);x.confirmTransitionTo(r,n,i,(function(e){if(e){var t=m(r),i=d(l+t);if(_()!==i){t,function(e){window.location.hash=e}(i);var a=L.lastIndexOf(m(z.location)),o=L.slice(0,a+1);o.push(t),o,k({action:n,location:r})}else k()}}))},replace:function(e,t){var n="REPLACE",r=g(e,void 0,void 0,z.location);x.confirmTransitionTo(r,n,i,(function(e){if(e){var t=m(r),i=d(l+t);_()!==i&&(t,R(i));var a=L.indexOf(m(z.location));-1!==a&&(L[a]=t),k({action:n,location:r})}}))},go:U,goBack:function(){U(-1)},goForward:function(){U(1)},block:function(e){void 0===e&&!1;var t=x.setPrompt(e);return N||(F(1),!0),function(){return N&&(!1,F(-1)),t()}},listen:function(e){var t=x.appendListener(e);return F(1),function(){F(-1),t()}}};return z}function P(e,t,n){return Math.min(Math.max(e,t),n)}function I(e){void 0===e&&{};var t=e,n=t.getUserConfirmation,r=t.initialEntries,i=void 0===r?["/"]:r,a=t.initialIndex,o=void 0===a?0:a,l=t.keyLength,c=void 0===l?6:l,u=b();function f(e){s(w,e),w.length=w.entries.length,u.notifyListeners(w.location,w.action)}function d(){return Math.random().toString(36).substr(2,c)}var h=P(o,0,i.length-1),p=i.map((function(e){return g(e,void 0,"string"==typeof e?d():e.key||d())})),v=m;function y(e){var t=P(w.index+e,0,w.entries.length-1),r=w.entries[t];u.confirmTransitionTo(r,"POP",n,(function(e){e?f({action:"POP",location:r,index:t}):f()}))}var w={length:p.length,action:"POP",location:p[h],index:h,entries:p,createHref:v,push:function(e,t){var r="PUSH",i=g(e,t,d(),w.location);u.confirmTransitionTo(i,r,n,(function(e){if(e){var t=w.index+1,n=w.entries.slice(0);n.length>t?n.splice(t,n.length-t,i):n.push(i),f({action:r,location:i,index:t,entries:n})}}))},replace:function(e,t){var r="REPLACE",i=g(e,t,d(),w.location);u.confirmTransitionTo(i,r,n,(function(e){e&&(w.entries[w.index]=i,f({action:r,location:i}))}))},go:y,goBack:function(){y(-1)},goForward:function(){y(1)},canGo:function(e){var t=w.index+e;return t>=0&&t<w.entries.length},block:function(e){return void 0===e&&!1,u.setPrompt(e)},listen:function(e){return u.appendListener(e)}};return w}var O=1073741823,j="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:{};function D(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,r){e=n,t.forEach((function(t){return t(e,r)}))}}}var L=r.b.createContext||function(e,t){var n,a,s,l="__create-react-context-"+((j[s="__global_unique_id__"]=(j[s]||0)+1)+"__"),c=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).emitter=D(t.props.value),t}o(n,e);var r=n.prototype;return r.getChildContext=function(){var e;return(e={})[l]=this.emitter,e},r.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n,r=this.props.value,i=e.value;((a=r)===(o=i)?0!==a||1/a==1/o:a!=a&&o!=o)?n=0:(n="function"==typeof t?t(r,i):O,0!==(n|=0)&&this.emitter.set(e.value,n))}var a,o},r.render=function(){return this.props.children},n}(r.b.Component);c.childContextTypes=((n={})[l]=i.a.object.isRequired,n);var u=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).state={value:e.getValue()},e.onUpdate=function(t,n){0!=((0|e.observedBits)&n)&&e.setState({value:e.getValue()})},e}o(n,t);var r=n.prototype;return r.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=null==t?O:t},r.componentDidMount=function(){this.context[l]&&this.context[l].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=null==e?O:e},r.componentWillUnmount=function(){this.context[l]&&this.context[l].off(this.onUpdate)},r.getValue=function(){return this.context[l]?this.context[l].get():e},r.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(r.b.Component);return u.contextTypes=((a={})[l]=i.a.object,a),{Provider:c,Consumer:u}},U=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},M=J,F=H,N=function(e,t){return G(H(e,t),t)},z=G,B=K,X=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function H(e,t){for(var n,r=[],i=0,a=0,o="",s=t&&t.delimiter||"/";null!=(n=X.exec(e));){var l=n[0],c=n[1],u=n.index;if(o+=e.slice(a,u),a=u+l.length,c)o+=c[1];else{var f=e[a],d=n[2],h=n[3],p=n[4],m=n[5],g=n[6],b=n[7];o&&(r.push(o),o="");var v=null!=d&&null!=f&&f!==d,y="+"===g||"*"===g,w="?"===g||"*"===g,E=n[2]||s,x=p||m;r.push({name:h||i++,prefix:d||"",delimiter:E,optional:w,repeat:y,partial:v,asterisk:!!b,pattern:x?V(x):b?".*":"[^"+$(E)+"]+?"})}}return a<e.length&&(o+=e.substr(a)),o&&r.push(o),r}function W(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function G(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",Y(t)));return function(t,r){for(var i="",a=t||{},o=(r||{}).pretty?W:encodeURIComponent,s=0;s<e.length;s++){var l=e[s];if("string"!=typeof l){var c,u=a[l.name];if(null==u){if(l.optional){l.partial&&(i+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(U(u)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(u)+"`");if(0===u.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var f=0;f<u.length;f++){if(c=o(u[f]),!n[s].test(c))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(c)+"`");i+=(0===f?l.prefix:l.delimiter)+c}}else{if(c=l.asterisk?encodeURI(u).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):o(u),!n[s].test(c))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+c+'"');i+=l.prefix+c}}else i+=l}return i}}function $(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function V(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function q(e,t){return e.keys=t,e}function Y(e){return e&&e.sensitive?"":"i"}function K(e,t,n){U(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,i=!1!==n.end,a="",o=0;o<e.length;o++){var s=e[o];if("string"==typeof s)a+=$(s);else{var l=$(s.prefix),c="(?:"+s.pattern+")";t.push(s),s.repeat&&(c+="(?:"+l+c+")*"),a+=c=s.optional?s.partial?l+"("+c+")?":"(?:"+l+"("+c+"))?":l+"("+c+")"}}var u=$(n.delimiter||"/"),f=a.slice(-u.length)===u;return r||(a=(f?a.slice(0,-u.length):a)+"(?:"+u+"(?=$))?"),a+=i?"$":r&&f?"":"(?="+u+"|$)",q(new RegExp("^"+a,Y(n)),t)}function J(e,t,n){return U(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return q(e,t)}(e,t):U(e)?function(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(J(e[i],t,n).source);return q(new RegExp("(?:"+r.join("|")+")",Y(n)),t)}(e,t,n):function(e,t,n){return K(H(e,n),t,n)}(e,t,n)}function Z(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}M.parse=F,M.compile=N,M.tokensToFunction=z,M.tokensToRegExp=B;var Q=function(e){var t=L();return t.displayName=e,t}("Router-History"),ee=function(e){var t=L();return t.displayName=e,t}("Router"),te=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={location:t.history.location},n._isMounted=!1,n._pendingLocation=null,t.staticContext||(n.unlisten=t.history.listen((function(e){n._isMounted?n.setState({location:e}):n._pendingLocation=e}))),n}o(t,e),t.computeRootMatch=function(e){return{path:"/",url:"/",params:{},isExact:"/"===e}};var n=t.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&this.unlisten()},n.render=function(){return r.b.createElement(ee.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},r.b.createElement(Q.Provider,{children:this.props.children||null,value:this.props.history}))},t}(r.b.Component),ne=(r.b.Component,r.b.Component,{}),re=0;function ie(e,t){void 0===t&&(t={}),("string"==typeof t||Array.isArray(t))&&(t={path:t});var n=t,r=n.path,i=n.exact,a=void 0!==i&&i,o=n.strict,s=void 0!==o&&o,l=n.sensitive,c=void 0!==l&&l;return[].concat(r).reduce((function(t,n){if(!n&&""!==n)return null;if(t)return t;var r=function(e,t){var n=""+t.end+t.strict+t.sensitive,r=ne[n]||(ne[n]={});if(r[e])return r[e];var i=[],a={regexp:M(e,i,t),keys:i};return re<1e4&&(r[e]=a,re++),a}(n,{end:a,strict:s,sensitive:c}),i=r.regexp,o=r.keys,l=i.exec(e);if(!l)return null;var u=l[0],f=l.slice(1),d=e===u;return a&&!d?null:{path:n,url:"/"===n&&""===u?"/":u,isExact:d,params:o.reduce((function(e,t,n){return e[t.name]=f[n],e}),{})}}),null)}var ae=function(e){function t(){return e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){var e=this;return r.b.createElement(ee.Consumer,null,(function(t){t||u(!1);var n=e.props.location||t.location,i=s({},t,{location:n,match:e.props.computedMatch?e.props.computedMatch:e.props.path?ie(n.pathname,e.props):t.match}),a=e.props,o=a.children,l=a.component,c=a.render;return Array.isArray(o)&&0===o.length&&(o=null),r.b.createElement(ee.Provider,{value:i},i.match?o?"function"==typeof o?o(i):o:l?r.b.createElement(l,i):c?c(i):null:"function"==typeof o?o(i):null)}))},t}(r.b.Component);function oe(e){return"/"===e.charAt(0)?e:"/"+e}function se(e,t){if(!e)return t;var n=oe(e);return 0!==t.pathname.indexOf(n)?t:s({},t,{pathname:t.pathname.substr(n.length)})}function le(e){return"string"==typeof e?e:m(e)}function ce(e){return function(){u(!1)}}function ue(){}r.b.Component;var fe=function(e){function t(){return e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){var e=this;return r.b.createElement(ee.Consumer,null,(function(t){t||u(!1);var n,i,a=e.props.location||t.location;return r.b.Children.forEach(e.props.children,(function(e){if(null==i&&r.b.isValidElement(e)){n=e;var o=e.props.path||e.props.from;i=o?ie(a.pathname,s({},e.props,{path:o})):t.match}})),i?r.b.cloneElement(n,{location:a,computedMatch:i}):null}))},t}(r.b.Component),de=r.b.useContext;function he(){return de(Q)}var pe=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).history=k(t.props),t}return o(t,e),t.prototype.render=function(){return r.b.createElement(te,{history:this.history,children:this.props.children})},t}(r.b.Component),me=(r.b.Component,function(e,t){return"function"==typeof e?e(t):e}),ge=function(e,t){return"string"==typeof e?g(e,null,null,t):e},be=function(e){return e},ve=r.b.forwardRef;void 0===ve&&(ve=be);var ye=ve((function(e,t){var n=e.innerRef,i=e.navigate,a=e.onClick,o=Z(e,["innerRef","navigate","onClick"]),l=o.target,c=s({},o,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||l&&"_self"!==l||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),i())}});return c.ref=be!==ve&&t||n,r.b.createElement("a",c)})),we=ve((function(e,t){var n=e.component,i=void 0===n?ye:n,a=e.replace,o=e.to,l=e.innerRef,c=Z(e,["component","replace","to","innerRef"]);return r.b.createElement(ee.Consumer,null,(function(e){e||u(!1);var n=e.history,f=ge(me(o,e.location),e.location),d=f?n.createHref(f):"",h=s({},c,{href:d,navigate:function(){var t=me(o,e.location);(a?n.replace:n.push)(t)}});return be!==ve?h.ref=t||l:h.innerRef=l,r.b.createElement(i,h)}))})),Ee=function(e){return e},xe=r.b.forwardRef;void 0===xe&&(xe=Ee);xe((function(e,t){var n=e["aria-current"],i=void 0===n?"page":n,a=e.activeClassName,o=void 0===a?"active":a,l=e.activeStyle,c=e.className,f=e.exact,d=e.isActive,h=e.location,p=e.sensitive,m=e.strict,g=e.style,b=e.to,v=e.innerRef,y=Z(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return r.b.createElement(ee.Consumer,null,(function(e){e||u(!1);var n=h||e.location,a=ge(me(b,n),n),w=a.pathname,E=w&&w.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),x=E?ie(n.pathname,{path:E,exact:f,sensitive:p,strict:m}):null,k=!!(d?d(x,n):x),T=k?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(c,o):c,A=k?s({},g,{},l):g,S=s({"aria-current":k&&i||null,className:T,style:A,to:a},y);return Ee!==xe?S.ref=t||v:S.innerRef=v,r.b.createElement(we,S)}))}))}).call(this,n(16))},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(1),i=Object(r.b)((function(e,t){var n,r,i,a;if("object"==typeof performance&&"function"==typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}if("undefined"==typeof window||"function"!=typeof MessageChannel){var c=null,u=null,f=function(){if(null!==c)try{var e=t.unstable_now();c(!0,e),c=null}catch(e){throw setTimeout(f,0),e}};n=function(e){null!==c?setTimeout(n,0,e):(c=e,setTimeout(f,0))},r=function(e,t){u=setTimeout(e,t)},i=function(){clearTimeout(u)},t.unstable_shouldYield=function(){return!1},a=t.unstable_forceFrameRate=function(){}}else{var d=window.setTimeout,h=window.clearTimeout;if("undefined"!=typeof console){var p=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!=typeof p&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var m=!1,g=null,b=-1,v=5,y=0;t.unstable_shouldYield=function(){return t.unstable_now()>=y},a=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<e?Math.floor(1e3/e):5};var w=new MessageChannel,E=w.port2;w.port1.onmessage=function(){if(null!==g){var e=t.unstable_now();y=e+v;try{g(!0,e)?E.postMessage(null):(m=!1,g=null)}catch(e){throw E.postMessage(null),e}}else m=!1},n=function(e){g=e,m||(m=!0,E.postMessage(null))},r=function(e,n){b=d((function(){e(t.unstable_now())}),n)},i=function(){h(b),b=-1}}function x(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,i=e[r];if(!(void 0!==i&&0<A(i,t)))break e;e[r]=t,e[n]=i,n=r}}function k(e){return void 0===(e=e[0])?null:e}function T(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length;r<i;){var a=2*(r+1)-1,o=e[a],s=a+1,l=e[s];if(void 0!==o&&0>A(o,n))void 0!==l&&0>A(l,o)?(e[r]=l,e[s]=n,r=s):(e[r]=o,e[a]=n,r=a);else{if(!(void 0!==l&&0>A(l,n)))break e;e[r]=l,e[s]=n,r=s}}}return t}return null}function A(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var S=[],_=[],R=1,C=null,P=3,I=!1,O=!1,j=!1;function D(e){for(var t=k(_);null!==t;){if(null===t.callback)T(_);else{if(!(t.startTime<=e))break;T(_),t.sortIndex=t.expirationTime,x(S,t)}t=k(_)}}function L(e){if(j=!1,D(e),!O)if(null!==k(S))O=!0,n(U);else{var t=k(_);null!==t&&r(L,t.startTime-e)}}function U(e,n){O=!1,j&&(j=!1,i()),I=!0;var a=P;try{for(D(n),C=k(S);null!==C&&(!(C.expirationTime>n)||e&&!t.unstable_shouldYield());){var o=C.callback;if("function"==typeof o){C.callback=null,P=C.priorityLevel;var s=o(C.expirationTime<=n);n=t.unstable_now(),"function"==typeof s?C.callback=s:C===k(S)&&T(S),D(n)}else T(S);C=k(S)}if(null!==C)var l=!0;else{var c=k(_);null!==c&&r(L,c.startTime-n),l=!1}return l}finally{C=null,P=a,I=!1}}var M=a;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){O||I||(O=!0,n(U))},t.unstable_getCurrentPriorityLevel=function(){return P},t.unstable_getFirstCallbackNode=function(){return k(S)},t.unstable_next=function(e){switch(P){case 1:case 2:case 3:var t=3;break;default:t=P}var n=P;P=t;try{return e()}finally{P=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=M,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=P;P=e;try{return t()}finally{P=n}},t.unstable_scheduleCallback=function(e,a,o){var s=t.unstable_now();switch("object"==typeof o&&null!==o?o="number"==typeof(o=o.delay)&&0<o?s+o:s:o=s,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:R++,callback:a,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>s?(e.sortIndex=o,x(_,e),null===k(S)&&e===k(_)&&(j?i():j=!0,r(L,o-s))):(e.sortIndex=l,x(S,e),O||I||(O=!0,n(U))),e},t.unstable_wrapCallback=function(e){var t=P;return function(){var n=P;P=t;try{return e.apply(this,arguments)}finally{P=n}}}})),a=Object(r.b)((function(e){e.exports=i}))},function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n(16))},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){var r=n(20),i={}.hasOwnProperty;e.exports=Object.hasOwn||function(e,t){return i.call(r(e),t)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return F})),n.d(t,"b",(function(){return S}));var r=n(1),i="function"==typeof Symbol&&Symbol.for,a=i?Symbol.for("react.element"):60103,o=i?Symbol.for("react.portal"):60106,s=i?Symbol.for("react.fragment"):60107,l=i?Symbol.for("react.strict_mode"):60108,c=i?Symbol.for("react.profiler"):60114,u=i?Symbol.for("react.provider"):60109,f=i?Symbol.for("react.context"):60110,d=i?Symbol.for("react.async_mode"):60111,h=i?Symbol.for("react.concurrent_mode"):60111,p=i?Symbol.for("react.forward_ref"):60112,m=i?Symbol.for("react.suspense"):60113,g=i?Symbol.for("react.suspense_list"):60120,b=i?Symbol.for("react.memo"):60115,v=i?Symbol.for("react.lazy"):60116,y=i?Symbol.for("react.block"):60121,w=i?Symbol.for("react.fundamental"):60117,E=i?Symbol.for("react.responder"):60118,x=i?Symbol.for("react.scope"):60119;function k(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case d:case h:case s:case c:case l:case m:return e;default:switch(e=e&&e.$$typeof){case f:case p:case v:case b:case u:return e;default:return t}}case o:return t}}}function T(e){return k(e)===h}var A={AsyncMode:d,ConcurrentMode:h,ContextConsumer:f,ContextProvider:u,Element:a,ForwardRef:p,Fragment:s,Lazy:v,Memo:b,Portal:o,Profiler:c,StrictMode:l,Suspense:m,isAsyncMode:function(e){return T(e)||k(e)===d},isConcurrentMode:T,isContextConsumer:function(e){return k(e)===f},isContextProvider:function(e){return k(e)===u},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},isForwardRef:function(e){return k(e)===p},isFragment:function(e){return k(e)===s},isLazy:function(e){return k(e)===v},isMemo:function(e){return k(e)===b},isPortal:function(e){return k(e)===o},isProfiler:function(e){return k(e)===c},isStrictMode:function(e){return k(e)===l},isSuspense:function(e){return k(e)===m},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===s||e===h||e===c||e===l||e===m||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===b||e.$$typeof===u||e.$$typeof===f||e.$$typeof===p||e.$$typeof===w||e.$$typeof===E||e.$$typeof===x||e.$$typeof===y)},typeOf:k},S=Object(r.b)((function(e){e.exports=A})),_={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},R={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},C={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},P={};function I(e){return S.isMemo(e)?C:P[e.$$typeof]||_}P[S.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},P[S.Memo]=C;var O=Object.defineProperty,j=Object.getOwnPropertyNames,D=Object.getOwnPropertySymbols,L=Object.getOwnPropertyDescriptor,U=Object.getPrototypeOf,M=Object.prototype;var F=function e(t,n,r){if("string"!=typeof n){if(M){var i=U(n);i&&i!==M&&e(t,i,r)}var a=j(n);D&&(a=a.concat(D(n)));for(var o=I(t),s=I(n),l=0;l<a.length;++l){var c=a[l];if(!(R[c]||r&&r[c]||s&&s[c]||o&&o[c])){var u=L(n,c);try{O(t,c,u)}catch(e){}}}}return t}},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1);function i(){}function a(){}a.resetWarningCache=i;var o=Object(r.b)((function(e){e.exports=function(){function e(e,t,n,r,i,a){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==a){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:i};return n.PropTypes=n,n}()}))},function(e,t,n){"use strict";var r=n(30),i=n(5),a=n(7),o=n(52),s=n(53),l=n(55),c=n(56),u=n(57),f=n(26),d=n(58),h=r.aTypedArray,p=r.exportTypedArrayMethod,m=i.Uint16Array,g=m&&m.prototype.sort,b=!!g&&!a((function(){var e=new m(2);e.sort(null),e.sort({})})),v=!!g&&!a((function(){if(f)return f<74;if(c)return c<67;if(u)return!0;if(d)return d<602;var e,t,n=new m(516),r=Array(516);for(e=0;e<516;e++)t=e%4,n[e]=515-e,r[e]=e-2*t+3;for(n.sort((function(e,t){return(e/4|0)-(t/4|0)})),e=0;e<516;e++)if(n[e]!==r[e])return!0}));p("sort",(function(e){var t=this;if(void 0!==e&&o(e),v)return g.call(t,e);h(t);var n,r=s(t.length),i=Array(r);for(n=0;n<r;n++)i[n]=t[n];for(i=l(t,function(e){return function(t,n){return void 0!==e?+e(t,n)||0:n!=n?-1:t!=t?1:0===t&&0===n?1/t>0&&1/n<0?1:-1:t>n}}(e)),n=0;n<r;n++)t[n]=i[n];return t}),!v||b)},function(e,t,n){var r=n(7);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(e,t,n){var r=n(12),i=n(23),a=n(39);e.exports=r?function(e,t,n){return i.f(e,t,a(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var r=n(40);e.exports=r("navigator","userAgent")||""},,function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var r=n(5),i=n(21),a=n(8),o=n(19),s=n(25),l=n(42),c=i("wks"),u=r.Symbol,f=l?u:u&&u.withoutSetter||o;e.exports=function(e){return a(c,e)&&(s||"string"==typeof c[e])||(s&&a(u,e)?c[e]=u[e]:c[e]=f("Symbol."+e)),c[e]}},function(e,t,n){var r=n(5),i=n(22),a="__core-js_shared__",o=r[a]||i(a,{});e.exports=o},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},function(e,t,n){var r=n(32);e.exports=function(e){return Object(r(e))}},function(e,t,n){var r=n(35),i=n(18);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.15.0",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(e,t,n){var r=n(5),i=n(13);e.exports=function(e,t){try{i(r,e,t)}catch(n){r[e]=t}return t}},function(e,t,n){var r=n(12),i=n(36),a=n(24),o=n(38),s=Object.defineProperty;t.f=r?s:function(e,t,n){if(a(e),t=o(t,!0),a(n),i)try{return s(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var r=n(6);e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},function(e,t,n){var r=n(26),i=n(7);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},function(e,t,n){var r,i,a=n(5),o=n(14),s=a.process,l=s&&s.versions,c=l&&l.v8;c?i=(r=c.split("."))[0]<4?1:r[0]+r[1]:o&&(!(r=o.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/))&&(i=r[1]),e.exports=i&&+i},function(e,t,n){var r=n(18),i=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return i.call(e)}),e.exports=r.inspectSource},function(e,t,n){var r=n(21),i=n(19),a=r("keys");e.exports=function(e){return a[e]||(a[e]=i(e))}},,function(e,t,n){"use strict";var r,i=n(31),a=n(12),o=n(5),s=n(6),l=n(8),c=n(33),u=n(13),f=n(44),d=n(23).f,h=n(48),p=n(50),m=n(17),g=n(19),b=o.Int8Array,v=b&&b.prototype,y=o.Uint8ClampedArray,w=y&&y.prototype,E=b&&h(b),x=v&&h(v),k=Object.prototype,T=k.isPrototypeOf,A=m("toStringTag"),S=g("TYPED_ARRAY_TAG"),_=i&&!!p&&"Opera"!==c(o.opera),R=!1,C={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},P={BigInt64Array:8,BigUint64Array:8},I=function(e){if(!s(e))return!1;var t=c(e);return l(C,t)||l(P,t)};for(r in C)o[r]||(_=!1);if((!_||"function"!=typeof E||E===Function.prototype)&&(E=function(){throw TypeError("Incorrect invocation")},_))for(r in C)o[r]&&p(o[r],E);if((!_||!x||x===k)&&(x=E.prototype,_))for(r in C)o[r]&&p(o[r].prototype,x);if(_&&h(w)!==x&&p(w,x),a&&!l(x,A))for(r in R=!0,d(x,A,{get:function(){return s(this)?this[S]:void 0}}),C)o[r]&&u(o[r],S,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:_,TYPED_ARRAY_TAG:R&&S,aTypedArray:function(e){if(I(e))return e;throw TypeError("Target is not a typed array")},aTypedArrayConstructor:function(e){if(p){if(T.call(E,e))return e}else for(var t in C)if(l(C,r)){var n=o[t];if(n&&(e===n||T.call(n,e)))return e}throw TypeError("Target is not a typed array constructor")},exportTypedArrayMethod:function(e,t,n){if(a){if(n)for(var r in C){var i=o[r];if(i&&l(i.prototype,e))try{delete i.prototype[e]}catch(e){}}x[e]&&!n||f(x,e,n?t:_&&v[e]||t)}},exportTypedArrayStaticMethod:function(e,t,n){var r,i;if(a){if(p){if(n)for(r in C)if((i=o[r])&&l(i,e))try{delete i[e]}catch(e){}if(E[e]&&!n)return;try{return f(E,e,n?t:_&&E[e]||t)}catch(e){}}for(r in C)!(i=o[r])||i[e]&&!n||f(i,e,t)}},isView:function(e){if(!s(e))return!1;var t=c(e);return"DataView"===t||l(C,t)||l(P,t)},isTypedArray:I,TypedArray:E,TypedArrayPrototype:x}},function(e,t){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},function(e,t,n){var r=n(34),i=n(43),a=n(17)("toStringTag"),o="Arguments"==i(function(){return arguments}());e.exports=r?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),a))?n:o?i(t):"Object"==(r=i(t))&&"function"==typeof t.callee?"Arguments":r}},function(e,t,n){var r={};r[n(17)("toStringTag")]="z",e.exports="[object z]"===String(r)},function(e,t){e.exports=!1},function(e,t,n){var r=n(12),i=n(7),a=n(37);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},function(e,t,n){var r=n(5),i=n(6),a=r.document,o=i(a)&&i(a.createElement);e.exports=function(e){return o?a.createElement(e):{}}},function(e,t,n){var r=n(6);e.exports=function(e,t){if(!r(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!r(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var r=n(41),i=n(5),a=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?a(r[e])||a(i[e]):r[e]&&r[e][t]||i[e]&&i[e][t]}},function(e,t,n){var r=n(5);e.exports=r},function(e,t,n){var r=n(25);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var r=n(5),i=n(13),a=n(8),o=n(22),s=n(27),l=n(45),c=l.get,u=l.enforce,f=String(String).split("String");(e.exports=function(e,t,n,s){var l,c=!!s&&!!s.unsafe,d=!!s&&!!s.enumerable,h=!!s&&!!s.noTargetGet;"function"==typeof n&&("string"!=typeof t||a(n,"name")||i(n,"name",t),(l=u(n)).source||(l.source=f.join("string"==typeof t?t:""))),e!==r?(c?!h&&e[t]&&(d=!0):delete e[t],d?e[t]=n:i(e,t,n)):d?e[t]=n:o(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&c(this).source||s(this)}))},function(e,t,n){var r,i,a,o=n(46),s=n(5),l=n(6),c=n(13),u=n(8),f=n(18),d=n(28),h=n(47),p="Object already initialized",m=s.WeakMap;if(o||f.state){var g=f.state||(f.state=new m),b=g.get,v=g.has,y=g.set;r=function(e,t){if(v.call(g,e))throw new TypeError(p);return t.facade=e,y.call(g,e,t),t},i=function(e){return b.call(g,e)||{}},a=function(e){return v.call(g,e)}}else{var w=d("state");h[w]=!0,r=function(e,t){if(u(e,w))throw new TypeError(p);return t.facade=e,c(e,w,t),t},i=function(e){return u(e,w)?e[w]:{}},a=function(e){return u(e,w)}}e.exports={set:r,get:i,has:a,enforce:function(e){return a(e)?i(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!l(t)||(n=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}}},function(e,t,n){var r=n(5),i=n(27),a=r.WeakMap;e.exports="function"==typeof a&&/native code/.test(i(a))},function(e,t){e.exports={}},function(e,t,n){var r=n(8),i=n(20),a=n(28),o=n(49),s=a("IE_PROTO"),l=Object.prototype;e.exports=o?Object.getPrototypeOf:function(e){return e=i(e),r(e,s)?e[s]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?l:null}},function(e,t,n){var r=n(7);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},function(e,t,n){var r=n(24),i=n(51);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),t=n instanceof Array}catch(e){}return function(n,a){return r(n),i(a),t?e.call(n,a):n.__proto__=a,n}}():void 0)},function(e,t,n){var r=n(6);e.exports=function(e){if(!r(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},function(e,t,n){var r=n(54),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t){var n=Math.floor,r=function(e,t){var o=e.length,s=n(o/2);return o<8?i(e,t):a(r(e.slice(0,s),t),r(e.slice(s),t),t)},i=function(e,t){for(var n,r,i=e.length,a=1;a<i;){for(r=a,n=e[a];r&&t(e[r-1],n)>0;)e[r]=e[--r];r!==a++&&(e[r]=n)}return e},a=function(e,t,n){for(var r=e.length,i=t.length,a=0,o=0,s=[];a<r||o<i;)a<r&&o<i?s.push(n(e[a],t[o])<=0?e[a++]:t[o++]):s.push(a<r?e[a++]:t[o++]);return s};e.exports=r},function(e,t,n){var r=n(14).match(/firefox\/(\d+)/i);e.exports=!!r&&+r[1]},function(e,t,n){var r=n(14);e.exports=/MSIE|Trident/.test(r)},function(e,t,n){var r=n(14).match(/AppleWebKit\/(\d+)\./);e.exports=!!r&&+r[1]},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1),a=(r.b.Component,r.b.Suspense,r.b.useEffect),o=r.b.useRef,s=r.b.useState,l=n(29),c=n(2),u=(n(11),n(9));function f(){throw new Error("setTimeout has not been defined")}function d(){throw new Error("clearTimeout has not been defined")}var h,p=f,m=d;function g(e){if(p===setTimeout)return setTimeout(e,0);if((p===f||!p)&&setTimeout)return p=setTimeout,setTimeout(e,0);try{return p(e,0)}catch(t){try{return p.call(null,e,0)}catch(t){return p.call(this,e,0)}}}"function"==typeof(h="undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).setTimeout&&(p=setTimeout),"function"==typeof h.clearTimeout&&(m=clearTimeout);var b,v=[],y=!1,w=-1;function E(){y&&b&&(y=!1,b.length?v=b.concat(v):w=-1,v.length&&x())}function x(){if(!y){var e=g(E);y=!0;for(var t=v.length;t;){for(b=v,v=[];++w<t;)b&&b[w].run();w=-1,t=v.length}b=null,y=!1,function(e){if(m===clearTimeout)return clearTimeout(e);if((m===d||!m)&&clearTimeout)return m=clearTimeout,clearTimeout(e);try{m(e)}catch(t){try{return m.call(null,e)}catch(t){return m.call(this,e)}}}(e)}}function k(e,t){this.fun=e,this.array=t}k.prototype.run=function(){this.fun.apply(null,this.array)};function T(){}var A=T,S=T,_=T,R=T,C=T,P=T,I=T;var O=h.performance||{},j=O.now||O.mozNow||O.msNow||O.oNow||O.webkitNow||function(){return(new Date).getTime()};var D=new Date;var L={nextTick:function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];v.push(new k(e,t)),1!==v.length||y||g(x)},title:"browser",browser:!0,env:{NODE_ENV:"production"},argv:[],version:"",versions:{},on:A,addListener:S,once:_,off:R,removeListener:C,removeAllListeners:P,emit:I,binding:function(e){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(e){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(e){var t=.001*j.call(O),n=Math.floor(t),r=Math.floor(t%1*1e9);return e&&(n-=e[0],(r-=e[1])<0&&(n--,r+=1e9)),[n,r]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-D)/1e3}};function U(e){function t(e,r,l,c,d){for(var h,p,m,g,w,x=0,k=0,T=0,A=0,S=0,O=0,D=m=h=0,U=0,M=0,F=0,N=0,z=l.length,B=z-1,X="",H="",W="",G="";U<z;){if(p=l.charCodeAt(U),U===B&&0!==k+A+T+x&&(0!==k&&(p=47===k?10:47),A=T=x=0,z++,B++),0===k+A+T+x){if(U===B&&(0<M&&(X=X.replace(f,"")),0<X.trim().length)){switch(p){case 32:case 9:case 59:case 13:case 10:break;default:X+=l.charAt(U)}p=59}switch(p){case 123:for(h=(X=X.trim()).charCodeAt(0),m=1,N=++U;U<z;){switch(p=l.charCodeAt(U)){case 123:m++;break;case 125:m--;break;case 47:switch(p=l.charCodeAt(U+1)){case 42:case 47:e:{for(D=U+1;D<B;++D)switch(l.charCodeAt(D)){case 47:if(42===p&&42===l.charCodeAt(D-1)&&U+2!==D){U=D+1;break e}break;case 10:if(47===p){U=D+1;break e}}U=D}}break;case 91:p++;case 40:p++;case 34:case 39:for(;U++<B&&l.charCodeAt(U)!==p;);}if(0===m)break;U++}switch(m=l.substring(N,U),0===h&&(h=(X=X.replace(u,"").trim()).charCodeAt(0)),h){case 64:switch(0<M&&(X=X.replace(f,"")),p=X.charCodeAt(1)){case 100:case 109:case 115:case 45:M=r;break;default:M=I}if(N=(m=t(r,M,m,p,d+1)).length,0<j&&(w=s(3,m,M=n(I,X,F),r,R,_,N,p,d,c),X=M.join(""),void 0!==w&&0===(N=(m=w.trim()).length)&&(p=0,m="")),0<N)switch(p){case 115:X=X.replace(E,o);case 100:case 109:case 45:m=X+"{"+m+"}";break;case 107:m=(X=X.replace(b,"$1 $2"))+"{"+m+"}",m=1===P||2===P&&a("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=X+m,112===c&&(H+=m,m="")}else m="";break;default:m=t(r,n(r,X,F),m,c,d+1)}W+=m,m=F=M=D=h=0,X="",p=l.charCodeAt(++U);break;case 125:case 59:if(1<(N=(X=(0<M?X.replace(f,""):X).trim()).length))switch(0===D&&(h=X.charCodeAt(0),45===h||96<h&&123>h)&&(N=(X=X.replace(" ",":")).length),0<j&&void 0!==(w=s(1,X,r,e,R,_,H.length,c,d,c))&&0===(N=(X=w.trim()).length)&&(X="\0\0"),h=X.charCodeAt(0),p=X.charCodeAt(1),h){case 0:break;case 64:if(105===p||99===p){G+=X+l.charAt(U);break}default:58!==X.charCodeAt(N-1)&&(H+=i(X,h,p,X.charCodeAt(2)))}F=M=D=h=0,X="",p=l.charCodeAt(++U)}}switch(p){case 13:case 10:47===k?k=0:0===1+h&&107!==c&&0<X.length&&(M=1,X+="\0"),0<j*L&&s(0,X,r,e,R,_,H.length,c,d,c),_=1,R++;break;case 59:case 125:if(0===k+A+T+x){_++;break}default:switch(_++,g=l.charAt(U),p){case 9:case 32:if(0===A+x+k)switch(S){case 44:case 58:case 9:case 32:g="";break;default:32!==p&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===A+k+x&&(M=F=1,g="\f"+g);break;case 108:if(0===A+k+x+C&&0<D)switch(U-D){case 2:112===S&&58===l.charCodeAt(U-3)&&(C=S);case 8:111===O&&(C=O)}break;case 58:0===A+k+x&&(D=U);break;case 44:0===k+T+A+x&&(M=1,g+="\r");break;case 34:case 39:0===k&&(A=A===p?0:0===A?p:A);break;case 91:0===A+k+T&&x++;break;case 93:0===A+k+T&&x--;break;case 41:0===A+k+x&&T--;break;case 40:if(0===A+k+x){if(0===h)switch(2*S+3*O){case 533:break;default:h=1}T++}break;case 64:0===k+T+A+x+D+m&&(m=1);break;case 42:case 47:if(!(0<A+x+T))switch(k){case 0:switch(2*p+3*l.charCodeAt(U+1)){case 235:k=47;break;case 220:N=U,k=42}break;case 42:47===p&&42===S&&N+2!==U&&(33===l.charCodeAt(N+2)&&(H+=l.substring(N,U+1)),g="",k=0)}}0===k&&(X+=g)}O=S,S=p,U++}if(0<(N=H.length)){if(M=r,0<j&&(void 0!==(w=s(2,H,M,e,R,_,N,c,d,c))&&0===(H=w).length))return G+H+W;if(H=M.join(",")+"{"+H+"}",0!=P*C){switch(2!==P||a(H,2)||(C=0),C){case 111:H=H.replace(y,":-moz-$1")+H;break;case 112:H=H.replace(v,"::-webkit-input-$1")+H.replace(v,"::-moz-$1")+H.replace(v,":-ms-input-$1")+H}C=0}}return G+H+W}function n(e,t,n){var i=t.trim().split(m);t=i;var a=i.length,o=e.length;switch(o){case 0:case 1:var s=0;for(e=0===o?"":e[0]+" ";s<a;++s)t[s]=r(e,t[s],n).trim();break;default:var l=s=0;for(t=[];s<a;++s)for(var c=0;c<o;++c)t[l++]=r(e[c]+" ",i[s],n).trim()}return t}function r(e,t,n){var r=t.charCodeAt(0);switch(33>r&&(r=(t=t.trim()).charCodeAt(0)),r){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*n&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function i(e,t,n,r){var o=e+";",s=2*t+3*n+4*r;if(944===s){e=o.indexOf(":",9)+1;var l=o.substring(e,o.length-1).trim();return l=o.substring(0,e).trim()+l+";",1===P||2===P&&a(l,1)?"-webkit-"+l+l:l}if(0===P||2===P&&!a(o,1))return o;switch(s){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(S,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(l=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+l+o;case 1005:return h.test(o)?o.replace(d,":-webkit-")+o.replace(d,":-moz-")+o:o;case 1e3:switch(t=(l=o.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(t)){case 226:l=o.replace(w,"tb");break;case 232:l=o.replace(w,"tb-rl");break;case 220:l=o.replace(w,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+l+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(t=(o=e).length-10,s=(l=(33===o.charCodeAt(t)?o.substring(0,t):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(111>l.charCodeAt(8))break;case 115:o=o.replace(l,"-webkit-"+l)+";"+o;break;case 207:case 102:o=o.replace(l,"-webkit-"+(102<s?"inline-":"")+"box")+";"+o.replace(l,"-webkit-"+l)+";"+o.replace(l,"-ms-"+l+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return l=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+l+"-ms-flex-"+l+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(k,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(k,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===A.test(e))return 115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0)?i(e.replace("stretch","fill-available"),t,n,r).replace(":fill-available",":stretch"):o.replace(l,"-webkit-"+l)+o.replace(l,"-moz-"+l.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===n+r&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+o}return o}function a(e,t){var n=e.indexOf(1===t?":":"{"),r=e.substring(0,3!==t?n:10);return n=e.substring(n+1,e.length-1),D(2!==t?r:r.replace(T,"$1"),n,t)}function o(e,t){var n=i(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n!==t+";"?n.replace(x," or ($1)").substring(4):"("+t+")"}function s(e,t,n,r,i,a,o,s,l,u){for(var f,d=0,h=t;d<j;++d)switch(f=O[d].call(c,e,h,n,r,i,a,o,s,l,u)){case void 0:case!1:case!0:case null:break;default:h=f}if(h!==t)return h}function l(e){return void 0!==(e=e.prefix)&&(D=null,e?"function"!=typeof e?P=1:(P=2,D=e):P=0),l}function c(e,n){var r=e;if(33>r.charCodeAt(0)&&(r=r.trim()),r=[r],0<j){var i=s(-1,n,r,r,R,_,0,0,0,0);void 0!==i&&"string"==typeof i&&(n=i)}var a=t(I,r,n,0,0);return 0<j&&(void 0!==(i=s(-2,a,r,r,R,_,a.length,0,0,0))&&(a=i)),"",C=0,_=R=1,a}var u=/^\0+/g,f=/[\0\r\f]/g,d=/: */g,h=/zoo|gra/,p=/([,: ])(transform)/g,m=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,b=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,y=/:(read-only)/g,w=/[svh]\w+-[tblr]{2}/,E=/\(\s*(.*)\s*\)/g,x=/([\s\S]*?);/g,k=/-self|flex-/g,T=/[^]*?(:[rp][el]a[\w-]+)[^]*/,A=/stretch|:\s*\w+\-(?:conte|avail)/,S=/([^-])(image-set\()/,_=1,R=1,C=0,P=1,I=[],O=[],j=0,D=null,L=0;return c.use=function e(t){switch(t){case void 0:case null:j=O.length=0;break;default:if("function"==typeof t)O[j++]=t;else if("object"==typeof t)for(var n=0,r=t.length;n<r;++n)e(t[n]);else L=0|!!t}return e},c.set=l,void 0!==e&&l(e),c}var M={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var F,N,z=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,B=(F=function(e){return z.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91},N={},function(e){return void 0===N[e]&&(N[e]=F(e)),N[e]});function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var H=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},W=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!u.b.typeOf(e)},G=Object.freeze([]),$=Object.freeze({});function V(e){return"function"==typeof e}function q(e){return e.displayName||e.name||"Component"}function Y(e){return e&&"string"==typeof e.styledComponentId}var K=void 0!==L&&L.env.SC_ATTR||"data-styled",J="undefined"!=typeof window&&"HTMLElement"in window,Z=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:void 0!==L&&void 0!==L.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==L.env.REACT_APP_SC_DISABLE_SPEEDY?L.env.REACT_APP_SC_DISABLE_SPEEDY:void 0!==L&&void 0!==L.env.SC_DISABLE_SPEEDY&&""!==L.env.SC_DISABLE_SPEEDY&&L.env.SC_DISABLE_SPEEDY),Q={};function ee(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var te=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)(i<<=1)<0&&ee(16,""+e);this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=0,l=t.length;s<l;s++)this.tag.insertRule(o,t[s])&&(this.groupSizes[e]++,o++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+=this.tag.getRule(a)+"/*!sc*/\n";return t},e}(),ne=new Map,re=new Map,ie=1,ae=function(e){if(ne.has(e))return ne.get(e);for(;re.has(ie);)ie++;var t=ie++;return ne.set(e,t),re.set(t,e),t},oe=function(e){return re.get(e)},se=function(e,t){ne.set(e,t),re.set(t,e)},le="style["+K+'][data-styled-version="5.3.0"]',ce=new RegExp("^"+K+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),ue=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},fe=function(e,t){for(var n=t.innerHTML.split("/*!sc*/\n"),r=[],i=0,a=n.length;i<a;i++){var o=n[i].trim();if(o){var s=o.match(ce);if(s){var l=0|parseInt(s[1],10),c=s[2];0!==l&&(se(c,l),ue(e,c,s[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},de=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(K))return r}}(n),a=void 0!==i?i.nextSibling:null;r.setAttribute(K,"active"),r.setAttribute("data-styled-version","5.3.0");var o="undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null;return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},he=function(){function e(e){var t=this.element=de(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}ee(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),pe=function(){function e(e){var t=this.element=de(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),me=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),ge=J,be={isServer:!J,useCSSOMInjection:!Z},ve=function(){function e(e,t,n){void 0===e&&(e=$),void 0===t&&(t={}),this.options=X({},be,{},e),this.gs=t,this.names=new Map(n),!this.options.isServer&&J&&ge&&(ge=!1,function(e){for(var t=document.querySelectorAll(le),n=0,r=t.length;n<r;n++){var i=t[n];i&&"active"!==i.getAttribute(K)&&(fe(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this))}e.registerId=function(e){return ae(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(X({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,i=t.target,e=n?new me(i):r?new he(i):new pe(i),new te(e)));var e,t,n,r,i},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(ae(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(ae(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(ae(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=0;i<n;i++){var a=oe(i);if(void 0!==a){var o=e.names.get(a),s=t.getGroup(i);if(void 0!==o&&0!==s.length){var l=K+".g"+i+'[id="'+a+'"]',c="";void 0!==o&&o.forEach((function(e){e.length>0&&(c+=e+",")})),r+=""+s+l+'{content:"'+c+'"}/*!sc*/\n'}}}return r}(this)},e}(),ye=/(a)(d)/gi,we=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ee(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=we(t%52)+n;return(we(t%52)+n).replace(ye,"$1-$2")}var xe=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ke=function(e){return xe(5381,e)};function Te(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(V(n)&&!Y(n))return!1}return!0}var Ae=ke("5.3.0"),Se=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Te(e),this.componentId=t,this.baseHash=xe(Ae,t),this.baseStyle=n,ve.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))i.push(this.staticRulesId);else{var a=Xe(this.rules,e,t,n).join(""),o=Ee(xe(this.baseHash,a.length)>>>0);if(!t.hasNameForId(r,o)){var s=n(a,"."+o,void 0,r);t.insertRules(r,o,s)}i.push(o),this.staticRulesId=o}else{for(var l=this.rules.length,c=xe(this.baseHash,n.hash),u="",f=0;f<l;f++){var d=this.rules[f];if("string"==typeof d)u+=d;else if(d){var h=Xe(d,e,t,n),p=Array.isArray(h)?h.join(""):h;c=xe(c,p+f),u+=p}}if(u){var m=Ee(c>>>0);if(!t.hasNameForId(r,m)){var g=n(u,"."+m,void 0,r);t.insertRules(r,m,g)}i.push(m)}}return i.join(" ")},e}(),_e=/^\s*\/\/.*$/gm,Re=[":","[",".","#"];var Ce=r.b.createContext(),Pe=(Ce.Consumer,r.b.createContext()),Ie=(Pe.Consumer,new ve),Oe=function(e){var t,n,r,i,a=void 0===e?$:e,o=a.options,s=void 0===o?$:o,l=a.plugins,c=void 0===l?G:l,u=new U(s),f=[],d=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,i,a,o,s,l,c,u,f){switch(n){case 1:if(0===u&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===c)return r+"/*|*/";break;case 3:switch(c){case 102:case 112:return e(i[0]+r),"";default:return r+(0===f?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){f.push(e)})),h=function(e,r,a){return 0===r&&-1!==Re.indexOf(a[n.length])||a.match(i)?e:"."+t};function p(e,a,o,s){void 0===s&&(s="&");var l=e.replace(_e,""),c=a&&o?o+" "+a+" { "+l+" }":l;return t=s,n=a,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),u(o||!a?"":a,c)}return u.use([].concat(c,[function(e,t,i){2===e&&i.length&&i[0].lastIndexOf(n)>0&&(i[0]=i[0].replace(r,h))},d,function(e){if(-2===e){var t=f;return f=[],t}}])),p.hash=c.length?c.reduce((function(e,t){return t.name||ee(15),xe(e,t.name)}),5381).toString():"",p}();function je(){return r.b.useContext(Ce)||Ie}function De(){return r.b.useContext(Pe)||Oe}var Le=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Oe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return ee(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=Oe),this.name+e.hash},e}(),Ue=/([A-Z])/,Me=/([A-Z])/g,Fe=/^ms-/,Ne=function(e){return"-"+e.toLowerCase()};function ze(e){return Ue.test(e)?e.replace(Me,Ne).replace(Fe,"-ms-"):e}var Be=function(e){return null==e||!1===e||""===e};function Xe(e,t,n,r){if(Array.isArray(e)){for(var i,a=[],o=0,s=e.length;o<s;o+=1)""!==(i=Xe(e[o],t,n,r))&&(Array.isArray(i)?a.push.apply(a,i):a.push(i));return a}return Be(e)?"":Y(e)?"."+e.styledComponentId:V(e)?"function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!t?e:Xe(e(t),t,n,r):e instanceof Le?n?(e.inject(n,r),e.getName(r)):e:W(e)?function e(t,n){var r,i,a=[];for(var o in t)t.hasOwnProperty(o)&&!Be(t[o])&&(W(t[o])?a.push.apply(a,e(t[o],o)):V(t[o])?a.push(ze(o)+":",t[o],";"):a.push(ze(o)+": "+(r=o,(null==(i=t[o])||"boolean"==typeof i||""===i?"":"number"!=typeof i||0===i||r in M?String(i).trim():i+"px")+";")));return n?[n+" {"].concat(a,["}"]):a}(e):e.toString();var l}function He(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return V(e)||W(e)?Xe(H(G,[e].concat(n))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Xe(H(e,n))}var We=function(e,t,n){return void 0===n&&(n=$),e.theme!==n.theme&&e.theme||t||n.theme},Ge=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$e=/(^-|-$)/g;function Ve(e){return e.replace(Ge,"-").replace($e,"")}var qe=function(e){return Ee(ke(e)>>>0)};function Ye(e){return"string"==typeof e&&!0}var Ke=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Je=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Ze(e,t,n){var r=e[n];Ke(t)&&Ke(r)?Qe(r,t):e[n]=t}function Qe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,a=n;i<a.length;i++){var o=a[i];if(Ke(o))for(var s in o)Je(s)&&Ze(e,o[s],s)}return e}var et=r.b.createContext(),tt=(et.Consumer,{});function nt(e,t,n){var i=Y(e),a=!Ye(e),o=t.attrs,s=void 0===o?G:o,l=t.componentId,c=void 0===l?function(e,t){var n="string"!=typeof e?"sc":Ve(e);tt[n]=(tt[n]||0)+1;var r=n+"-"+qe("5.3.0"+n+tt[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):l,f=t.displayName,d=void 0===f?function(e){return Ye(e)?"styled."+e:"Styled("+q(e)+")"}(e):f,h=t.displayName&&t.componentId?Ve(t.displayName)+"-"+t.componentId:t.componentId||c,p=i&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,m=t.shouldForwardProp;i&&e.shouldForwardProp&&(m=t.shouldForwardProp?function(n,r,i){return e.shouldForwardProp(n,r,i)&&t.shouldForwardProp(n,r,i)}:e.shouldForwardProp);var g,b=new Se(n,h,i?e.componentStyle:void 0),v=b.isStatic&&0===s.length,y=function(e,t){return function(e,t,n,i){var a=e.attrs,o=e.componentStyle,s=e.defaultProps,l=e.foldedComponentIds,c=e.shouldForwardProp,u=e.styledComponentId,f=e.target,d=function(e,t,n){void 0===e&&(e=$);var r=X({},t,{theme:e}),i={};return n.forEach((function(e){var t,n,a,o=e;for(t in V(o)&&(o=o(r)),o)r[t]=i[t]="className"===t?(n=i[t],a=o[t],n&&a?n+" "+a:n||a):o[t]})),[r,i]}(We(t,r.b.useContext(et),s)||$,t,a),h=d[0],p=d[1],m=function(e,t,n,r){var i=je(),a=De();return t?e.generateAndInjectStyles($,i,a):e.generateAndInjectStyles(n,i,a)}(o,i,h),g=n,b=p.$as||t.$as||p.as||t.as||f,v=Ye(b),y=p!==t?X({},t,{},p):t,w={};for(var E in y)"$"!==E[0]&&"as"!==E&&("forwardedAs"===E?w.as=y[E]:(c?c(E,B,b):!v||B(E))&&(w[E]=y[E]));return t.style&&p.style!==t.style&&(w.style=X({},t.style,{},p.style)),w.className=Array.prototype.concat(l,u,m!==u?m:null,t.className,p.className).filter(Boolean).join(" "),w.ref=g,r.b.createElement(b,w)}(g,e,t,v)};return y.displayName=d,(g=r.b.forwardRef(y)).attrs=p,g.componentStyle=b,g.displayName=d,g.shouldForwardProp=m,g.foldedComponentIds=i?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):G,g.styledComponentId=h,g.target=i?e.target:e,g.withComponent=function(e){var r=t.componentId,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(t,["componentId"]),a=r&&r+"-"+(Ye(e)?e:Ve(q(e)));return nt(e,X({},i,{attrs:p,componentId:a}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=i?Qe({},e.defaultProps,t):t}}),g.toString=function(){return"."+g.styledComponentId},a&&Object(u.a)(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var rt=function(e){return function e(t,n,r){if(void 0===r&&(r=$),!u.b.isValidElementType(n))return ee(1,String(n));var i=function(){return t(n,r,He.apply(void 0,arguments))};return i.withConfig=function(i){return e(t,n,X({},r,{},i))},i.attrs=function(i){return e(t,n,X({},r,{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},i}(nt,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){rt[e]=rt(e)}));var it=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Te(e),ve.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var i=r(Xe(this.rules,t,n,r).join(""),""),a=this.componentId+e;n.insertRules(a,a,i)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&ve.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();var at=rt,ot=n(3),st=n(10),lt=Object(i.b)((function(e){!function(){function t(e,t,n){return e.call.apply(e.bind,arguments)}function n(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function r(e,i,a){return(r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t:n).apply(null,arguments)}var i=Date.now||function(){return+new Date};function a(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var o=!!window.FontFace;function s(e,t,n,r){if(t=e.c.createElement(t),n)for(var i in n)n.hasOwnProperty(i)&&("style"==i?t.style.cssText=n[i]:t.setAttribute(i,n[i]));return r&&t.appendChild(e.c.createTextNode(r)),t}function l(e,t,n){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(n,e.lastChild)}function c(e){e.parentNode&&e.parentNode.removeChild(e)}function u(e,t,n){t=t||[],n=n||[];for(var r=e.className.split(/\s+/),i=0;i<t.length;i+=1){for(var a=!1,o=0;o<r.length;o+=1)if(t[i]===r[o]){a=!0;break}a||r.push(t[i])}for(t=[],i=0;i<r.length;i+=1){for(a=!1,o=0;o<n.length;o+=1)if(r[i]===n[o]){a=!0;break}a||t.push(r[i])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function f(e,t){for(var n=e.className.split(/\s+/),r=0,i=n.length;r<i;r++)if(n[r]==t)return!0;return!1}function d(e,t,n){function r(){u&&i&&a&&(u(c),u=null)}t=s(e,"link",{rel:"stylesheet",href:t,media:"all"});var i=!1,a=!0,c=null,u=n||null;o?(t.onload=function(){i=!0,r()},t.onerror=function(){i=!0,c=Error("Stylesheet failed to load"),r()}):setTimeout((function(){i=!0,r()}),0),l(e,"head",t)}function h(e,t,n,r){var i=e.c.getElementsByTagName("head")[0];if(i){var a=s(e,"script",{src:t}),o=!1;return a.onload=a.onreadystatechange=function(){o||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(o=!0,n&&n(null),a.onload=a.onreadystatechange=null,"HEAD"==a.parentNode.tagName&&i.removeChild(a))},i.appendChild(a),setTimeout((function(){o||(o=!0,n&&n(Error("Script load timeout")))}),r||5e3),a}return null}function p(){this.a=0,this.c=null}function m(e){return e.a++,function(){e.a--,b(e)}}function g(e,t){e.c=t,b(e)}function b(e){0==e.a&&e.c&&(e.c(),e.c=null)}function v(e){this.a=e||"-"}function y(e,t){this.c=e,this.f=4,this.a="n";var n=(t||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function w(e){var t=[];e=e.split(/,\s*/);for(var n=0;n<e.length;n++){var r=e[n].replace(/['"]/g,"");-1!=r.indexOf(" ")||/^\d/.test(r)?t.push("'"+r+"'"):t.push(r)}return t.join(",")}function E(e){return e.a+e.f}function x(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function k(e){var t=4,n="n",r=null;return e&&((r=e.match(/(normal|oblique|italic)/i))&&r[1]&&(n=r[1].substr(0,1).toLowerCase()),(r=e.match(/([1-9]00|normal|bold)/i))&&r[1]&&(/bold/i.test(r[1])?t=7:/[1-9]00/.test(r[1])&&(t=parseInt(r[1].substr(0,1),10)))),n+t}function T(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new v("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function A(e){if(e.g){var t=f(e.f,e.a.c("wf","active")),n=[],r=[e.a.c("wf","loading")];t||n.push(e.a.c("wf","inactive")),u(e.f,n,r)}S(e,"inactive")}function S(e,t,n){e.j&&e.h[t]&&(n?e.h[t](n.c,E(n)):e.h[t]())}function _(){this.c={}}function R(e,t){this.c=e,this.f=t,this.a=s(this.c,"span",{"aria-hidden":"true"},this.f)}function C(e){l(e.c,"body",e.a)}function P(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+w(e.c)+";font-style:"+x(e)+";font-weight:"+e.f+"00;"}function I(e,t,n,r,i,a){this.g=e,this.j=t,this.a=r,this.c=n,this.f=i||3e3,this.h=a||void 0}function O(e,t,n,r,i,a,o){this.v=e,this.B=t,this.c=n,this.a=r,this.s=o||"BESbswy",this.f={},this.w=i||3e3,this.u=a||null,this.m=this.j=this.h=this.g=null,this.g=new R(this.c,this.s),this.h=new R(this.c,this.s),this.j=new R(this.c,this.s),this.m=new R(this.c,this.s),e=P(e=new y(this.a.c+",serif",E(this.a))),this.g.a.style.cssText=e,e=P(e=new y(this.a.c+",sans-serif",E(this.a))),this.h.a.style.cssText=e,e=P(e=new y("serif",E(this.a))),this.j.a.style.cssText=e,e=P(e=new y("sans-serif",E(this.a))),this.m.a.style.cssText=e,C(this.g),C(this.h),C(this.j),C(this.m)}v.prototype.c=function(e){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},I.prototype.start=function(){var e=this.c.o.document,t=this,n=i(),r=new Promise((function(r,a){!function o(){i()-n>=t.f?a():e.fonts.load(function(e){return x(e)+" "+e.f+"00 300px "+w(e.c)}(t.a),t.h).then((function(e){1<=e.length?r():setTimeout(o,25)}),(function(){a()}))}()})),a=null,o=new Promise((function(e,n){a=setTimeout(n,t.f)}));Promise.race([o,r]).then((function(){a&&(clearTimeout(a),a=null),t.g(t.a)}),(function(){t.j(t.a)}))};var j={D:"serif",C:"sans-serif"},D=null;function L(){if(null===D){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);D=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return D}function U(e,t,n){for(var r in j)if(j.hasOwnProperty(r)&&t===e.f[j[r]]&&n===e.f[j[r]])return!0;return!1}function M(e){var t,n=e.g.a.offsetWidth,a=e.h.a.offsetWidth;(t=n===e.f.serif&&a===e.f["sans-serif"])||(t=L()&&U(e,n,a)),t?i()-e.A>=e.w?L()&&U(e,n,a)&&(null===e.u||e.u.hasOwnProperty(e.a.c))?F(e,e.v):F(e,e.B):function(e){setTimeout(r((function(){M(this)}),e),50)}(e):F(e,e.v)}function F(e,t){setTimeout(r((function(){c(this.g.a),c(this.h.a),c(this.j.a),c(this.m.a),t(this.a)}),e),0)}function N(e,t,n){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=n}O.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=i(),M(this)};var z=null;function B(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&u(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),S(e,"active")):A(e.a))}function X(e){this.j=e,this.a=new _,this.h=0,this.f=this.g=!0}function H(e,t,n,i,a){var o=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=a||null,s=i||{};if(0===n.length&&o)A(t.a);else{t.f+=n.length,o&&(t.j=o);var l,c=[];for(l=0;l<n.length;l++){var f=n[l],d=s[f.c],h=t.a,p=f;if(h.g&&u(h.f,[h.a.c("wf",p.c,E(p).toString(),"loading")]),S(h,"fontloading",p),h=null,null===z)if(window.FontFace){p=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var m=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);z=p?42<parseInt(p[1],10):!m}else z=!1;h=z?new I(r(t.g,t),r(t.h,t),t.c,f,t.s,d):new O(r(t.g,t),r(t.h,t),t.c,f,t.s,e,d),c.push(h)}for(l=0;l<c.length;l++)c[l].start()}}),0)}function W(e,t){this.c=e,this.a=t}function G(e,t){this.c=e,this.a=t}function $(e,t){this.c=e||V,this.a=[],this.f=[],this.g=t||""}N.prototype.g=function(e){var t=this.a;t.g&&u(t.f,[t.a.c("wf",e.c,E(e).toString(),"active")],[t.a.c("wf",e.c,E(e).toString(),"loading"),t.a.c("wf",e.c,E(e).toString(),"inactive")]),S(t,"fontactive",e),this.m=!0,B(this)},N.prototype.h=function(e){var t=this.a;if(t.g){var n=f(t.f,t.a.c("wf",e.c,E(e).toString(),"active")),r=[],i=[t.a.c("wf",e.c,E(e).toString(),"loading")];n||r.push(t.a.c("wf",e.c,E(e).toString(),"inactive")),u(t.f,r,i)}S(t,"fontinactive",e),B(this)},X.prototype.load=function(e){this.c=new a(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,n){var r=[],i=n.timeout;!function(e){e.g&&u(e.f,[e.a.c("wf","loading")]),S(e,"loading")}(t);r=function(e,t,n){var r,i=[];for(r in t)if(t.hasOwnProperty(r)){var a=e.c[r];a&&i.push(a(t[r],n))}return i}(e.a,n,e.c);var a=new N(e.c,t,i);for(e.h=r.length,t=0,n=r.length;t<n;t++)r[t].load((function(t,n,r){H(e,a,t,n,r)}))}(this,new T(this.c,e),e)},W.prototype.load=function(e){function t(){if(a["__mti_fntLst"+r]){var n,i=a["__mti_fntLst"+r](),o=[];if(i)for(var s=0;s<i.length;s++){var l=i[s].fontfamily;null!=i[s].fontStyle&&null!=i[s].fontWeight?(n=i[s].fontStyle+i[s].fontWeight,o.push(new y(l,n))):o.push(new y(l))}e(o)}else setTimeout((function(){t()}),50)}var n=this,r=n.a.projectId,i=n.a.version;if(r){var a=n.c.o;h(this.c,(n.a.api||"https://fast.fonts.net/jsapi")+"/"+r+".js"+(i?"?v="+i:""),(function(i){i?e([]):(a["__MonotypeConfiguration__"+r]=function(){return n.a},t())})).id="__MonotypeAPIScript__"+r}else e([])},G.prototype.load=function(e){var t,n,r=this.a.urls||[],i=this.a.families||[],a=this.a.testStrings||{},o=new p;for(t=0,n=r.length;t<n;t++)d(this.c,r[t],m(o));var s=[];for(t=0,n=i.length;t<n;t++)if((r=i[t].split(":"))[1])for(var l=r[1].split(","),c=0;c<l.length;c+=1)s.push(new y(r[0],l[c]));else s.push(new y(r[0]));g(o,(function(){e(s,a)}))};var V="https://fonts.googleapis.com/css";function q(e){this.f=e,this.a=[],this.c={}}var Y={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},K={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},J={i:"i",italic:"i",n:"n",normal:"n"},Z=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function Q(e,t){this.c=e,this.a=t}var ee={Arimo:!0,Cousine:!0,Tinos:!0};function te(e,t){this.c=e,this.a=t}function ne(e,t){this.c=e,this.f=t,this.a=[]}Q.prototype.load=function(e){var t=new p,n=this.c,r=new $(this.a.api,this.a.text),i=this.a.families;!function(e,t){for(var n=t.length,r=0;r<n;r++){var i=t[r].split(":");3==i.length&&e.f.push(i.pop());var a="";2==i.length&&""!=i[1]&&(a=":"),e.a.push(i.join(a))}}(r,i);var a=new q(i);!function(e){for(var t=e.f.length,n=0;n<t;n++){var r=e.f[n].split(":"),i=r[0].replace(/\+/g," "),a=["n4"];if(2<=r.length){var o;if(o=[],s=r[1])for(var s,l=(s=s.split(",")).length,c=0;c<l;c++){var u;if((u=s[c]).match(/^[\w-]+$/))if(null==(f=Z.exec(u.toLowerCase())))u="";else{if(u=null==(u=f[2])||""==u?"n":J[u],null==(f=f[1])||""==f)f="4";else var f=K[f]||(isNaN(f)?"4":f.substr(0,1));u=[u,f].join("")}else u="";u&&o.push(u)}0<o.length&&(a=o),3==r.length&&(o=[],0<(r=(r=r[2])?r.split(","):o).length&&(r=Y[r[0]])&&(e.c[i]=r))}for(e.c[i]||(r=Y[i])&&(e.c[i]=r),r=0;r<a.length;r+=1)e.a.push(new y(i,a[r]))}}(a),d(n,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,n=[],r=0;r<t;r++)n.push(e.a[r].replace(/ /g,"+"));return t=e.c+"?family="+n.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(r),m(t)),g(t,(function(){e(a.a,a.c,ee)}))},te.prototype.load=function(e){var t=this.a.id,n=this.c.o;t?h(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){t=n.Typekit.config.fn;for(var r=[],i=0;i<t.length;i+=2)for(var a=t[i],o=t[i+1],s=0;s<o.length;s++)r.push(new y(a,o[s]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(r)}}),2e3):e([])},ne.prototype.load=function(e){var t=this.f.id,n=this.c.o,r=this;t?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[t]=function(t,n){for(var i=0,a=n.fonts.length;i<a;++i){var o=n.fonts[i];r.a.push(new y(o.name,k("font-weight:"+o.weight+";font-style:"+o.style)))}e(r.a)},h(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var re=new X(window);re.a.c.custom=function(e,t){return new G(t,e)},re.a.c.fontdeck=function(e,t){return new ne(t,e)},re.a.c.monotype=function(e,t){return new W(t,e)},re.a.c.typekit=function(e,t){return new te(t,e)},re.a.c.google=function(e,t){return new Q(t,e)};var ie={load:r(re.load,re)};e.exports?e.exports=ie:(window.WebFont=ie,window.WebFontConfig&&re.load(window.WebFontConfig))}()})),ct=Object(i.b)((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default={inactive:"inactive",active:"active",loading:"loading"}})),ut=Object(i.b)((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=c(r.b),o=c(st.a),s=c(lt),l=c(ct);function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=function(e){function t(){var e,r,i;u(this,t);for(var a=arguments.length,o=Array(a),c=0;c<a;c++)o[c]=arguments[c];return r=i=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),i.state={status:void 0},i.handleLoading=function(){i.setState({status:l.default.loading})},i.handleActive=function(){i.setState({status:l.default.active})},i.handleInactive=function(){i.setState({status:l.default.inactive})},i.loadFonts=function(){s.default.load(n({},i.props.config,{loading:i.handleLoading,active:i.handleActive,inactive:i.handleInactive}))},f(i,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this.loadFonts()}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,r=n.onStatus,i=n.config;t.status!==this.state.status&&r(this.state.status),e.config!==i&&this.loadFonts()}},{key:"render",value:function(){return this.props.children||null}}]),t}(a.default.Component);d.propTypes={config:o.default.object.isRequired,children:o.default.element,onStatus:o.default.func.isRequired},d.defaultProps={onStatus:function(){}},t.default=d})),ft=Object(i.c)(ut);var dt=e=>r.b.createElement(ht,{style:{color:e.color,opacity:e.opacity}},e.text);const ht=at.h1`
    font-size: 7rem;
    z-index: 2;
    display: block;
    text-align: center;
    @media(min-width: 768px){
        font-size: 10rem;
    }
    @media(min-width: 992px){
        margin: 0;
    }
`;var pt=Object(i.b)((function(e,t){i.a,e.exports=function(){var e="undefined"!=typeof window?window:void 0!==i.a?i.a:"undefined"!=typeof self?self:{};function t(e,t){return e(t={exports:{}},t.exports),t.exports}var n="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},r=o,a=Object.prototype.toString;function o(e){var t=a.call(e);return"[object Function]"===t||"function"==typeof e&&"[object RegExp]"!==t||"undefined"!=typeof window&&(e===window.setTimeout||e===window.alert||e===window.confirm||e===window.prompt)}var s=t((function(e,t){function n(e){return e.replace(/^\s*|\s*$/g,"")}(t=e.exports=n).left=function(e){return e.replace(/^\s*/,"")},t.right=function(e){return e.replace(/\s*$/,"")}})),l=f,c=Object.prototype.toString,u=Object.prototype.hasOwnProperty;function f(e,t,n){if(!r(t))throw new TypeError("iterator must be a function");arguments.length<3&&(n=this),"[object Array]"===c.call(e)?d(e,t,n):"string"==typeof e?h(e,t,n):p(e,t,n)}function d(e,t,n){for(var r=0,i=e.length;r<i;r++)u.call(e,r)&&t.call(n,e[r],r,e)}function h(e,t,n){for(var r=0,i=e.length;r<i;r++)t.call(n,e.charAt(r),r,e)}function p(e,t,n){for(var r in e)u.call(e,r)&&t.call(n,e[r],r,e)}var m=function(e){return"[object Array]"===Object.prototype.toString.call(e)},g=function(e){if(!e)return{};var t={};return l(s(e).split("\n"),(function(e){var n=e.indexOf(":"),r=s(e.slice(0,n)).toLowerCase(),i=s(e.slice(n+1));void 0===t[r]?t[r]=i:m(t[r])?t[r].push(i):t[r]=[t[r],i]})),t},b=y,v=Object.prototype.hasOwnProperty;function y(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var r in n)v.call(n,r)&&(e[r]=n[r])}return e}var w=A,E=A;function x(e,t){for(var n=0;n<e.length;n++)t(e[n])}function k(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}function T(e,t,n){var i=e;return r(t)?(n=t,"string"==typeof e&&(i={uri:e})):i=b(t,{uri:e}),i.callback=n,i}function A(e,t,n){return S(t=T(e,t,n))}function S(e){if(void 0===e.callback)throw new Error("callback argument missing");var t=!1,n=function(n,r,i){t||(t=!0,e.callback(n,r,i))};function r(){4===c.readyState&&setTimeout(o,0)}function i(){var e=void 0;if(e=c.response?c.response:c.responseText||_(c),b)try{e=JSON.parse(e)}catch(e){}return e}function a(e){return clearTimeout(u),e instanceof Error||(e=new Error(""+(e||"Unknown XMLHttpRequest Error"))),e.statusCode=0,n(e,v)}function o(){if(!l){var t;clearTimeout(u),t=e.useXDR&&void 0===c.status?200:1223===c.status?204:c.status;var r=v,a=null;return 0!==t?(r={body:i(),statusCode:t,method:d,headers:{},url:f,rawRequest:c},c.getAllResponseHeaders&&(r.headers=g(c.getAllResponseHeaders()))):a=new Error("Internal XMLHttpRequest Error"),n(a,r,r.body)}}var s,l,c=e.xhr||null;c||(c=e.cors||e.useXDR?new A.XDomainRequest:new A.XMLHttpRequest);var u,f=c.url=e.uri||e.url,d=c.method=e.method||"GET",h=e.body||e.data,p=c.headers=e.headers||{},m=!!e.sync,b=!1,v={body:void 0,headers:{},statusCode:0,method:d,url:f,rawRequest:c};if("json"in e&&!1!==e.json&&(b=!0,p.accept||p.Accept||(p.Accept="application/json"),"GET"!==d&&"HEAD"!==d&&(p["content-type"]||p["Content-Type"]||(p["Content-Type"]="application/json"),h=JSON.stringify(!0===e.json?h:e.json))),c.onreadystatechange=r,c.onload=o,c.onerror=a,c.onprogress=function(){},c.onabort=function(){l=!0},c.ontimeout=a,c.open(d,f,!m,e.username,e.password),m||(c.withCredentials=!!e.withCredentials),!m&&e.timeout>0&&(u=setTimeout((function(){if(!l){l=!0,c.abort("timeout");var e=new Error("XMLHttpRequest timeout");e.code="ETIMEDOUT",a(e)}}),e.timeout)),c.setRequestHeader)for(s in p)p.hasOwnProperty(s)&&c.setRequestHeader(s,p[s]);else if(e.headers&&!k(e.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in e&&(c.responseType=e.responseType),"beforeSend"in e&&"function"==typeof e.beforeSend&&e.beforeSend(c),c.send(h||null),c}function _(e){try{if("document"===e.responseType)return e.responseXML;var t=e.responseXML&&"parsererror"===e.responseXML.documentElement.nodeName;if(""===e.responseType&&!t)return e.responseXML}catch(e){}return null}function R(){}A.XMLHttpRequest=n.XMLHttpRequest||R,A.XDomainRequest="withCredentials"in new A.XMLHttpRequest?A.XMLHttpRequest:n.XDomainRequest,x(["get","put","post","patch","head","delete"],(function(e){A["delete"===e?"del":e]=function(t,n,r){return(n=T(t,n,r)).method=e.toUpperCase(),S(n)}})),w.default=E;var C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},I=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),O=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},j="";function D(e){return'\n<table style="background-color: #8CE; width: 100%; height: 100%;"><tr>\n<td align="center">\n<div style="display: table-cell; vertical-align: middle;">\n<div style="">'+e+"</div>\n</div>\n</td></tr></table>\n"}var L='\n\tThis page requires a browser that supports WebGL.<br/>\n\t<a href="http://get.webgl.org">Click here to upgrade your browser.</a>\n',U='\n\tIt does not appear your computer can support WebGL.<br/>\n\t<a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>\n',M=1,F=2;function N(e,t,n){function r(t){var n=e.parentNode;n&&(n.innerHTML=D(t))}function i(e,t){"function"==typeof n?n(e):r(t)}if(!window.WebGLRenderingContext)return i(M,L),null;var a=z(e,t);return a?a.getExtension("OES_standard_derivatives"):i(F,U),a}function z(e,t){for(var n=["webgl","experimental-webgl"],r=null,i=0;i<n.length;++i)try{r=e.getContext(n[i],t)}catch(e){if(r)break}return r}function B(e,t,n,r){var i=e.gl,a=i.createShader(n);return i.shaderSource(a,t),i.compileShader(a),i.getShaderParameter(a,i.COMPILE_STATUS)?a:(j=i.getShaderInfoLog(a),console.error("*** Error compiling shader "+a+":"+j),e.trigger("error",{shader:a,source:t,type:n,error:j,offset:r||0}),i.deleteShader(a),null)}function X(e,t,n,r){for(var i=e.gl,a=i.createProgram(),o=0;o<t.length;++o)i.attachShader(a,t[o]);if(n)for(var s=0;s<n.length;++s)i.bindAttribLocation(a,r?r[s]:s,n[s]);return i.linkProgram(a),i.getProgramParameter(a,i.LINK_STATUS)?a:(j=i.getProgramInfoLog(a),console.log("Error in program linking:"+j),i.deleteProgram(a),null)}function H(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=[];for(var r in e){var i=e[r],a=void 0;if(t&&(r=t+"."+r),"number"==typeof i)n.push({type:"float",method:"1f",name:r,value:i});else if(Array.isArray(i)){if("number"==typeof i[0])1===i.length?n.push({type:"float",method:"1f",name:r,value:i}):i.length>=2&&i.length<=4?n.push({type:"vec"+i.length,method:i.length+"fv",name:r,value:i}):i.length>4&&n.push({type:"float[]",method:"1fv",name:r+"[0]",value:i});else if("string"==typeof i[0])n.push({type:"sampler2D",method:"1i",name:r,value:i});else if(Array.isArray(i[0])&&"number"==typeof i[0][0]){if(i[0].length>=2&&i[0].length<=4)for(a=0;a<i.length;a++)n.push({type:"vec"+i[0].length,method:i[a].length+"fv",name:r+"["+a+"]",value:i[a]})}else if("object"===C(i[0]))for(a=0;a<i.length;a++)n.push.apply(n,O(H(i[a],r+"["+a+"]")))}else"boolean"==typeof i?n.push({type:"bool",method:"1i",name:r,value:i}):"string"==typeof i?n.push({type:"sampler2D",method:"1i",name:r,value:i}):"object"===(void 0===i?"undefined":C(i))&&n.push.apply(n,O(H(i,r)))}return n}function W(e){return e.getBoundingClientRect().top+e.height>0&&e.getBoundingClientRect().top<(window.innerHeight||document.documentElement.clientHeight)}function G(e){return 0==(e&e-1)}function $(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}function V(e,t){return!(!e||!t)&&e.toString()!==t.toString()}function q(e){var t=new Set;return Object.assign(e,{on:function(e,n){var r={};r[e]=n,t.add(r)},off:function(e,n){if(n){var r={};r[e]=n,t.delete(r)}else{var i=!0,a=!1,o=void 0;try{for(var s,l=t[Symbol.iterator]();!(i=(s=l.next()).done);i=!0){var c=s.value,u=!0,f=!1,d=void 0;try{for(var h,p=Object.keys(c)[Symbol.iterator]();!(u=(h=p.next()).done);u=!0)if(h.value===e)return void t.delete(c)}catch(e){f=!0,d=e}finally{try{!u&&p.return&&p.return()}finally{if(f)throw d}}}}catch(e){a=!0,o=e}finally{try{!i&&l.return&&l.return()}finally{if(a)throw o}}}},listSubscriptions:function(){var e=!0,n=!1,r=void 0;try{for(var i,a=t[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){var o=i.value;console.log(o)}}catch(e){n=!0,r=e}finally{try{!e&&a.return&&a.return()}finally{if(n)throw r}}},subscribe:function(e){t.add(e)},unsubscribe:function(e){t.delete(e)},unsubscribeAll:function(){t.clear()},trigger:function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a=!0,o=!1,s=void 0;try{for(var l,c=t[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){var u=l.value;"function"==typeof u[e]&&u[e].apply(u,O(r))}}catch(e){o=!0,s=e}finally{try{!a&&c.return&&c.return()}finally{if(o)throw s}}}})}var Y=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};P(this,e),q(this),this.gl=t,this.texture=t.createTexture(),this.texture&&(this.valid=!0),this.bind(),this.name=n,this.source=null,this.sourceType=null,this.loading=null,this.setData(1,1,new Uint8Array([0,0,0,255]),{filtering:"linear"}),this.setFiltering(r.filtering),this.load(r)}return I(e,[{key:"destroy",value:function(){this.valid&&(this.gl.deleteTexture(this.texture),this.texture=null,delete this.data,this.data=null,this.valid=!1)}},{key:"bind",value:function(t){this.valid&&("number"==typeof t&&e.activeUnit!==t&&(this.gl.activeTexture(this.gl.TEXTURE0+t),e.activeUnit=t),e.activeTexture!==this.texture&&(this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),e.activeTexture=this.texture))}},{key:"load",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loading=null,"string"==typeof e.url?void 0!==this.url&&e.url===this.url||this.setUrl(e.url,e):e.element?this.setElement(e.element,e):e.data&&e.width&&e.height&&this.setData(e.width,e.height,e.data,e)}},{key:"setUrl",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.valid)return this.url=e,this.source=this.url,this.sourceType="url",this.loading=new Promise((function(r,i){var a=e.split(".").pop().toLowerCase(),o="ogv"===a||"webm"===a||"mp4"===a,s=void 0;o?((s=document.createElement("video")).autoplay=!0,n.filtering="nearest"):s=new Image,s.onload=function(){try{t.setElement(s,n)}catch(e){console.log("Texture '"+t.name+"': failed to load url: '"+t.source+"'",e,n)}r(t)},s.onerror=function(e){console.log("Texture '"+t.name+"': failed to load url: '"+t.source+"'",e,n),r(t)},$()&&"data:"===t.source.slice(0,5)||(s.crossOrigin="anonymous"),s.src=t.source,o&&t.setElement(s,n)})),this.loading}},{key:"setData",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.width=e,this.height=t,this.source=n,this.sourceType="data",this.update(r),this.setFiltering(r),this.loading=Promise.resolve(this),this.loading}},{key:"setElement",value:function(e,t){var n=this,r=e;if("string"==typeof e&&(e=document.querySelector(e)),e instanceof HTMLCanvasElement||e instanceof HTMLImageElement||e instanceof HTMLVideoElement)this.source=e,this.sourceType="element",e instanceof HTMLVideoElement?(e.addEventListener("canplaythrough",(function(){n.intervalID=setInterval((function(){n.update(t)}),15)}),!0),e.addEventListener("ended",(function(){e.currentTime=0,e.play()}),!0)):this.update(t),this.setFiltering(t);else{var i="the 'element' parameter (`element: "+JSON.stringify(r)+"`) must be a CSS ";i+="selector string, or a <canvas>, <image> or <video> object",console.log("Texture '"+this.name+"': "+i,t)}return this.loading=Promise.resolve(this),this.loading}},{key:"update",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.valid&&(this.bind(),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1!==e.UNPACK_FLIP_Y_WEBGL),this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,e.UNPACK_PREMULTIPLY_ALPHA_WEBGL||!1),"element"===this.sourceType&&(this.source instanceof HTMLCanvasElement||this.source instanceof HTMLVideoElement||this.source instanceof HTMLImageElement&&this.source.complete)?(this.source instanceof HTMLVideoElement?(this.width=this.source.videoWidth,this.height=this.source.videoHeight):(this.width=this.source.width,this.height=this.source.height),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,this.source)):"data"===this.sourceType&&this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.width,this.height,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,this.source),this.trigger("loaded",this))}},{key:"setFiltering",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.valid){this.powerOf2=G(this.width)&&G(this.height);var t=this.powerOf2?"mipmap":"linear";this.filtering=e.filtering||t;var n=this.gl;this.bind(),this.powerOf2?(n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,e.TEXTURE_WRAP_S||e.repeat&&n.REPEAT||n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,e.TEXTURE_WRAP_T||e.repeat&&n.REPEAT||n.CLAMP_TO_EDGE),"mipmap"===this.filtering?(n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR_MIPMAP_LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.generateMipmap(n.TEXTURE_2D)):"linear"===this.filtering?(n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR)):"nearest"===this.filtering&&(n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST))):(n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),"mipmap"===this.filtering&&(this.filtering="linear"),"nearest"===this.filtering?(n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST)):(n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR)))}}}]),e}();Y.getMaxTextureSize=function(e){return e.getParameter(e.MAX_TEXTURE_SIZE)},Y.activeUnit=-1;var K=function(){function e(t,n,r){var i=this;P(this,e),q(this),n=n||{},r=r||{},this.width=t.clientWidth,this.height=t.clientHeight,this.canvas=t,this.gl=void 0,this.program=void 0,this.textures={},this.buffers={},this.uniforms={},this.vbo={},this.isValid=!1,this.BUFFER_COUNT=0,this.vertexString=n.vertexString||"\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nattribute vec2 a_position;\nattribute vec2 a_texcoord;\n\nvarying vec2 v_texcoord;\n\nvoid main() {\n    gl_Position = vec4(a_position, 0.0, 1.0);\n    v_texcoord = a_texcoord;\n}\n",this.fragmentString=n.fragmentString||"\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nvarying vec2 v_texcoord;\n\nvoid main(){\n    gl_FragColor = vec4(0.0);\n}\n";var a=N(t,n,r.onError);if(a){if(this.gl=a,this.timeLoad=this.timePrev=performance.now(),this.timeDelta=0,this.forceRender=!0,this.paused=!1,this.realToCSSPixels=window.devicePixelRatio||1,t.style.backgroundColor=n.backgroundColor||"rgba(1,1,1,0)",t.hasAttribute("data-fragment"))this.fragmentString=t.getAttribute("data-fragment");else if(t.hasAttribute("data-fragment-url")){var o=t.getAttribute("data-fragment-url");w.get(o,(function(e,t,n){i.load(n,i.vertexString)}))}if(t.hasAttribute("data-vertex"))this.vertexString=t.getAttribute("data-vertex");else if(t.hasAttribute("data-vertex-url")){var s=t.getAttribute("data-vertex-url");w.get(s,(function(e,t,n){i.load(i.fragmentString,n)}))}if(this.load(),this.program){var l=a.getAttribLocation(this.program,"a_texcoord");this.vbo.texCoords=a.createBuffer(),this.gl.bindBuffer(a.ARRAY_BUFFER,this.vbo.texCoords),this.gl.bufferData(a.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),a.STATIC_DRAW),this.gl.enableVertexAttribArray(l),this.gl.vertexAttribPointer(l,2,a.FLOAT,!1,0,0);var c=a.getAttribLocation(this.program,"a_position");if(this.vbo.vertices=a.createBuffer(),this.gl.bindBuffer(a.ARRAY_BUFFER,this.vbo.vertices),this.gl.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),a.STATIC_DRAW),this.gl.enableVertexAttribArray(c),this.gl.vertexAttribPointer(c,2,a.FLOAT,!1,0,0),t.hasAttribute("data-textures")){var u=t.getAttribute("data-textures").split(",");for(var f in u)this.setUniform("u_tex"+f,u[f])}var d={x:0,y:0};document.addEventListener("mousemove",(function(e){d.x=e.clientX||e.pageX,d.y=e.clientY||e.pageY}),!1);var h=this;return this.setMouse({x:0,y:0}),p(),this}}function p(){h.nMouse>1&&h.setMouse(d),h.resize()&&(h.forceRender=!0),h.render(),window.requestAnimationFrame(p)}}return I(e,[{key:"destroy",value:function(){for(var e in this.animated=!1,this.isValid=!1,this.textures)e.destroy&&e.destroy();for(var t in this.textures={},this.attribs)this.gl.deleteBuffer(this.attribs[t]);for(var n in this.gl.useProgram(null),this.gl.deleteProgram(this.program),this.buffers){var r=this.buffers[n];this.gl.deleteProgram(r.program)}this.program=null,this.gl=null}},{key:"load",value:function(e,t){if(t&&(this.vertexString=t),e&&(this.fragmentString=e),this.animated=!1,this.nDelta=(this.fragmentString.match(/u_delta/g)||[]).length,this.nTime=(this.fragmentString.match(/u_time/g)||[]).length,this.nDate=(this.fragmentString.match(/u_date/g)||[]).length,this.nMouse=(this.fragmentString.match(/u_mouse/g)||[]).length,this.animated=this.nDate>1||this.nTime>1||this.nMouse>1,this.fragmentString.search(/sampler2D/g))for(var n=this.fragmentString.split("\n"),r=0;r<n.length;r++){var i=n[r].match(/uniform\s*sampler2D\s*([\w]*);\s*\/\/\s*([\w|\:\/\/|\.|\-|\_]*)/i);if(i){var a=i[2].split(".").pop().toLowerCase();i[1]&&i[2]&&("jpg"===a||"jpeg"===a||"png"===a||"ogv"===a||"webm"===a||"mp4"===a)&&this.setUniform(i[1],i[2])}if(n[r].match(/\s*void\s*main\s*/g))break}var o=B(this,this.vertexString,this.gl.VERTEX_SHADER),s=B(this,this.fragmentString,this.gl.FRAGMENT_SHADER);s?this.isValid=!0:(s=B(this,"void main(){\n\tgl_FragColor = vec4(1.0);\n}",this.gl.FRAGMENT_SHADER),this.isValid=!1);var l=X(this,[o,s]);this.gl.useProgram(l),this.gl.deleteShader(o),this.gl.deleteShader(s),this.program=l,this.change=!0,this.BUFFER_COUNT=0;var c=this.getBuffers(this.fragmentString);Object.keys(c).length&&this.loadPrograms(c),this.buffers=c,this.texureIndex=this.BUFFER_COUNT,this.trigger("load",{}),this.forceRender=!0,this.render()}},{key:"test",value:function(e,t,n){var r=this.vertexString,i=this.fragmentString,a=this.paused,o=this.gl.getExtension("EXT_disjoint_timer_query"),s=o.createQueryEXT(),l=this.isValid;(t||n)&&(this.load(t,n),l=this.isValid,this.forceRender=!0,this.render()),this.paused=!0,o.beginQueryEXT(o.TIME_ELAPSED_EXT,s),this.forceRender=!0,this.render(),o.endQueryEXT(o.TIME_ELAPSED_EXT);var c=this;function u(){c.paused=a,(t||n)&&c.load(i,r)}function f(){c.forceRender=!0,c.render();var r=o.getQueryObjectEXT(s,o.QUERY_RESULT_AVAILABLE_EXT),i=c.gl.getParameter(o.GPU_DISJOINT_EXT);if(r&&!i){var a={wasValid:l,frag:t||c.fragmentString,vert:n||c.vertexString,timeElapsedMs:o.getQueryObjectEXT(s,o.QUERY_RESULT_EXT)/1e6};u(),e(a)}else window.requestAnimationFrame(f)}f()}},{key:"loadTexture",value:function(e,t,n){var r=this;n||(n={}),"string"==typeof t?n.url=t:"object"===(void 0===t?"undefined":C(t))&&t.data&&t.width&&t.height?(n.data=t.data,n.width=t.width,n.height=t.height):"object"===(void 0===t?"undefined":C(t))&&(n.element=t),this.textures[e]?this.textures[e]&&(this.textures[e].load(n),this.textures[e].on("loaded",(function(e){r.forceRender=!0}))):(this.textures[e]=new Y(this.gl,e,n),this.textures[e].on("loaded",(function(e){r.forceRender=!0})))}},{key:"refreshUniforms",value:function(){this.uniforms={}}},{key:"setUniform",value:function(e){for(var t={},n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];t[e]=r,this.setUniforms(t)}},{key:"setUniforms",value:function(e){var t=H(e);for(var n in t)"sampler2D"===t[n].type?this.loadTexture(t[n].name,t[n].value[0]):this.uniform(t[n].method,t[n].type,t[n].name,t[n].value);this.forceRender=!0}},{key:"setMouse",value:function(e){var t=this.canvas.getBoundingClientRect();if(e&&e.x&&e.x>=t.left&&e.x<=t.right&&e.y&&e.y>=t.top&&e.y<=t.bottom){var n=(e.x-t.left)*this.realToCSSPixels,r=this.canvas.height-(e.y-t.top)*this.realToCSSPixels;this.uniform("2f","vec2","u_mouse",n,r)}}},{key:"uniform",value:function(e,t,n){this.uniforms[n]=this.uniforms[n]||{};for(var r=this.uniforms[n],i=arguments.length,a=Array(i>3?i-3:0),o=3;o<i;o++)a[o-3]=arguments[o];if(V(r.value,a)||this.change||!r.location||!r.value)for(var s in r.name=n,r.type=t,r.value=a,r.method="uniform"+e,this.gl.useProgram(this.program),r.location=this.gl.getUniformLocation(this.program,n),this.gl[r.method].apply(this.gl,[r.location].concat(r.value)),this.buffers){var l=this.buffers[s];this.gl.useProgram(l.program);var c=this.gl.getUniformLocation(l.program,n);this.gl[r.method].apply(this.gl,[c].concat(r.value))}}},{key:"uniformTexture",value:function(e,t,n){if(void 0===this.textures[e])this.loadTexture(e,t,n);else{for(var r in this.uniform("1i","sampler2D",e,this.texureIndex),this.buffers){var i=this.buffers[r];this.gl.useProgram(i.program),this.gl.activeTexture(this.gl.TEXTURE0+this.texureIndex),this.gl.bindTexture(this.gl.TEXTURE_2D,this.textures[e].texture)}this.gl.useProgram(this.program),this.gl.activeTexture(this.gl.TEXTURE0+this.texureIndex),this.gl.bindTexture(this.gl.TEXTURE_2D,this.textures[e].texture),this.uniform("2f","vec2",e+"Resolution",this.textures[e].width,this.textures[e].height)}}},{key:"resize",value:function(){if(this.width!==this.canvas.clientWidth||this.height!==this.canvas.clientHeight){this.realToCSSPixels=window.devicePixelRatio||1;var e=Math.floor(this.gl.canvas.clientWidth*this.realToCSSPixels),t=Math.floor(this.gl.canvas.clientHeight*this.realToCSSPixels);return this.gl.canvas.width===e&&this.gl.canvas.height===t||(this.gl.canvas.width=e,this.gl.canvas.height=t,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)),this.width=this.canvas.clientWidth,this.height=this.canvas.clientHeight,this.resizeSwappableBuffers(),!0}return!1}},{key:"render",value:function(){if(this.visible=W(this.canvas),this.forceRender||this.change||this.animated&&this.visible&&!this.paused){var e=new Date,t=performance.now();for(var n in this.timeDelta=(t-this.timePrev)/1e3,this.timePrev=t,this.nDelta>1&&this.uniform("1f","float","u_delta",this.timeDelta),this.nTime>1&&this.uniform("1f","float","u_time",(t-this.timeLoad)/1e3),this.nDate&&this.uniform("4f","float","u_date",e.getFullYear(),e.getMonth(),e.getDate(),3600*e.getHours()+60*e.getMinutes()+e.getSeconds()+.001*e.getMilliseconds()),this.uniform("2f","vec2","u_resolution",this.canvas.width,this.canvas.height),this.buffers){var r=this.buffers[n];this.uniform("1i","sampler2D",r.name,r.bundle.input.index)}for(var i in this.texureIndex=this.BUFFER_COUNT,this.textures)this.uniformTexture(i),this.texureIndex++;this.renderPrograms(),this.trigger("render",{}),this.change=!1,this.forceRender=!1}}},{key:"pause",value:function(){this.paused=!0}},{key:"play",value:function(){this.paused=!1}},{key:"renderPrograms",value:function(){var e=this.gl,t=e.canvas.width,n=e.canvas.height;for(var r in e.viewport(0,0,t,n),this.buffers){var i=this.buffers[r];i.bundle.render(t,n,i.program,i.name),e.bindFramebuffer(e.FRAMEBUFFER,null)}e.useProgram(this.program),e.drawArrays(e.TRIANGLES,0,6)}},{key:"getBuffers",value:function(e){var t={};return e&&e.replace(/(?:^\s*)((?:#if|#elif)(?:\s*)(defined\s*\(\s*BUFFER_)(\d+)(?:\s*\))|(?:#ifdef)(?:\s*BUFFER_)(\d+)(?:\s*))/gm,(function(){var n=arguments[3]||arguments[4];t["u_buffer"+n]={fragment:"#define BUFFER_"+n+"\n"+e}})),t}},{key:"loadPrograms",value:function(e){var t=this,n=this.gl,r=B(t,t.vertexString,n.VERTEX_SHADER);for(var i in e){var a=e[i],o=B(t,a.fragment,n.FRAGMENT_SHADER,1);o?t.isValid=!0:(o=B(t,"void main(){\n\tgl_FragColor = vec4(1.0);\n}",n.FRAGMENT_SHADER),t.isValid=!1);var s=X(t,[r,o]);a.name=i,a.program=s,a.bundle=t.createSwappableBuffer(t.canvas.width,t.canvas.height,s),n.deleteShader(o)}n.deleteShader(r)}},{key:"createSwappableBuffer",value:function(e,t,n){var r=this.createBuffer(e,t,n),i=this.createBuffer(e,t,n),a=this.gl;return{input:r,output:i,swap:function(){var e=r;r=i,i=e,this.input=r,this.output=i},render:function(e,t,n,r){a.useProgram(n),a.viewport(0,0,e,t),a.bindFramebuffer(a.FRAMEBUFFER,this.input.buffer),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,this.output.texture,0),a.drawArrays(a.TRIANGLES,0,6),this.swap()},resize:function(e,t,n,r){a.useProgram(n),a.viewport(0,0,e,t),this.input.resize(e,t),this.output.resize(e,t)}}}},{key:"createBuffer",value:function(e,t,n){var r=this.gl,i=this.BUFFER_COUNT;this.BUFFER_COUNT+=2,r.getExtension("OES_texture_float");var a=r.createTexture();r.activeTexture(r.TEXTURE0+i),r.bindTexture(r.TEXTURE_2D,a),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,e,t,0,r.RGBA,r.FLOAT,null),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE);var o=r.createFramebuffer();return{index:i,texture:a,buffer:o,W:e,H:t,resize:function(e,t){r.bindFramebuffer(r.FRAMEBUFFER,o);var n=Math.min(e,this.W),s=Math.min(t,this.H),l=new Float32Array(n*s*4);r.readPixels(0,0,n,s,r.RGBA,r.FLOAT,l),r.bindFramebuffer(r.FRAMEBUFFER,null);var c=i+1,u=r.createTexture();r.activeTexture(r.TEXTURE0+c),r.bindTexture(r.TEXTURE_2D,u),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,e,t,0,r.RGBA,r.FLOAT,null),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texSubImage2D(r.TEXTURE_2D,0,0,0,n,s,r.RGBA,r.FLOAT,l);var f=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(a),r.activeTexture(r.TEXTURE0+i),r.bindTexture(r.TEXTURE_2D,u),i=this.index=i,a=this.texture=u,o=this.buffer=f,this.W=e,this.H=t}}}},{key:"resizeSwappableBuffers",value:function(){var e=this.gl,t=e.canvas.width,n=e.canvas.height;for(var r in e.viewport(0,0,t,n),this.buffers){var i=this.buffers[r];i.bundle.resize(t,n,i.program,i.name)}e.useProgram(this.program)}},{key:"version",value:function(){return"0.1.7"}}]),e}();function J(){var e=document.getElementsByClassName("glslCanvas");if(e.length>0){window.glslCanvases=[];for(var t=0;t<e.length;t++){var n=new K(e[t]);n.isValid&&window.glslCanvases.push(n)}}}return window.addEventListener("load",(function(){J()})),K}()}));var mt=({img:e,alt:t})=>{const n={sampler2D:e},i=o(),s=o(),l=(e,t)=>{e.width=t.clientWidth+window.devicePixelRatio,e.height=t.clientHeight+window.devicePixelRatio,e.style.width=t.clientWidth+"px",e.style.height=t.clientHeight+"px",console.log(e.width)};return a((()=>{const e=i.current,t=s.current,r=new pt(i.current);for(let e in n)r.setUniform(e,n[e]);l(e,t),r.load("\n  #ifdef GL_ES\n  precision highp float;\n  #endif\n\n  uniform float u_time;\n  uniform vec2 resolution;\n  uniform vec2 mouse;\n  uniform vec3 spectrum;\n\n  uniform sampler2D image;\n  //uniform sampler2D cat;\n\n\n  varying vec3 v_normal;\n  varying vec2 v_texcoord;\n\n  // NOISE - glsl fbm\n  #define NUM_OCTAVES 5\n\n  float rand(vec2 n) { \n      return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);\n  }\n\n  float noise(vec2 p){\n      vec2 ip = floor(p);\n      vec2 u = fract(p);\n      u = u*u*(3.0-2.0*u);\n      \n      float res = mix(\n          mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),\n          mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);\n      return res*res;\n  }\n\n  float fbm(vec2 x) {\n      float v = 0.0;\n      float a = 0.5;\n      vec2 shift = vec2(100);\n      // Rotate to reduce axial bias\n      mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));\n      for (int i = 0; i < NUM_OCTAVES; ++i) {\n          v += a * noise(x);\n          x = rot * x * 2.0 + shift;\n          a *= 0.5;\n      }\n      return v;\n  }\n\n  void main(void)\n  {\n      vec2 uv = v_texcoord; // sets where it is \n      //uv.y = 1.0 - uv.y; \n      \n      vec2 surface = vec2(\n          mix(-0.3, 0.3, fbm(1.3 * uv + 0.5 * u_time)), // use mix to center x\n          mix(-0.2, 0.3, fbm(1.3 * uv + 0.5 * u_time))\n      );\n\n      \n      uv += refract(vec2(0.0, 0.0), surface, 1.0 / 1.333 ); // we are looking at this straight on (1), but the surface will wave (2), refraction indice from wiki\n      \n      vec4 color = texture2D(image, uv); // sets what the colors are pulled from \n      gl_FragColor = color;\n  } \n  ");const a=()=>{e.clientWidth===t.clientWidth&&e.clientHeight===t.clientHeight||l(i.current,s.current)};return window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}}),[]),r.b.createElement("div",{ref:s,style:{width:"50vw",height:"50vh",margin:"0 auto"}},r.b.createElement("canvas",{ref:i},r.b.createElement("p",{class:"alt"},t)))},gt=n.p+"assets/hamburglar-f227efc3db1d1a7eac58a1adb1d7c40b.jpg";var bt=()=>r.b.createElement(r.b.Fragment,null,r.b.createElement(vt,{initial:{opacity:0},animate:{opacity:1}},r.b.createElement("div",null,r.b.createElement(dt,{text:"HOWDY",color:"#fff",opacity:"1"}),r.b.createElement(mt,{img:gt,alt:"Image description: Vintage image of the Hamburglar being disrupted by WebGL shaders"}),r.b.createElement(yt,null,"I'm Zar, a designer and creative technologist with a passion for equitable design, accessibility, and spicy aesthetics."),r.b.createElement(wt,null,r.b.createElement(ot.b,{to:"/work","aria-label":"View my work"},"View my work. ",r.b.createElement("span",null,"👹"))))));const vt=at(c.b.div)`
    min-height: 100vh;
    padding: 0 2rem;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    position: relative;
    @media(min-width: 768px){
        padding: 0;
    }
`,yt=at.p`
    font-family: "Roboto";
    color: #fff;
    text-align: center;
    font-size: 1.6rem;
    margin: 2rem auto;
    @media(min-width: 768px){
        width: 50%;
    }
    @media(min-width: 1440px){
        font-size: 1.111vw;
    }
    @media(min-width: 1920px){
        font-size: 2.13rem;
    }
`,wt=at.span`
    text-align: center;
    a {
        color: pink;
        font-family: "Roboto";
        margin: 0 auto;
        display: block;
        font-size: 2rem;
        text-decoration: none;
        transition: all ease 300ms;

        span {
            @media(hover: hover){
                opacity: 0;
                transition: all ease 300ms;
            }
        }

        &:hover {
            @media (hover: hover) {
                color: red;

                span {
                    opacity: 1;
                }
            }
        }
    }
`;var Et=n.p+"assets/me-min-48377618de3c63feb49f3e9adf34810b.png";var xt=()=>r.b.createElement(kt,null,r.b.createElement(Tt,{initial:{opacity:0},animate:{opacity:1}},r.b.createElement(At,{inital:{opacity:0},animate:{opacity:1}},"About"),r.b.createElement(St,null,r.b.createElement(Ct,null,r.b.createElement(Pt,null,r.b.createElement("li",null,r.b.createElement("span",null,"Pronouns:")," they/them"),r.b.createElement("li",null,r.b.createElement("span",null,"Sign:")," virgo"),r.b.createElement("li",null,r.b.createElement("span",null,"Currently learning:")," motion design, three.js, intermediate react, French"),r.b.createElement("li",null,r.b.createElement("span",null,"Interests:")," creative development, accessibility, experimental animation, language learning, equitable design, post-structuralism"),r.b.createElement("li",null,r.b.createElement("span",null,"Inspiration:")," liminal spaces, cursed images, mark rothko, beijing, earthbound"),r.b.createElement("li",null,r.b.createElement("span",null,"Role Models:")," mortis ghost, chaz bear, leyland kirby"))),r.b.createElement(_t,{inital:{opacity:0},animate:{opacity:1}},r.b.createElement(Rt,{src:Et,alt:"Portrait of Zar in a suit, sitting at a table covered in bright vintage food. They are being handed a crystal cup of multicolor jello"})))));const kt=at.div`
    background-color: #000;
`,Tt=at(c.b.div)`
    padding: 5rem;
    width: 100%;
    height: 100vh;
    display: block;
    overflow-y: scroll;
    background-color: none;
    box-sizing: border-box;
    position: relative;
    z-index: 2;
`,At=at(c.b.h1)`
    text-align: center;
    color: #fff;
    font-size: 7rem;
    @media(min-width: 992px){
        font-size: 7vw;
    }
`,St=at.div`
    max-width: 1000px;
    margin: 4rem auto 0;
    @media(min-width: 992px){
        display: flex;
    }
`,_t=at(c.b.div)`
    flex: 0 0 50%;
    position: relative;
    display: flex;
    justify-content: center;
    z-index: 3;
    @media(min-width: 992px){
        order: 1;
    }
`,Rt=at.img`
    height: 70vh; 
    width: 100%;
    object-fit: cover;
    @media(min-width: 768px){
        width: 100%;
        height: 40rem;
        object-fit: contain;
    }
    @media(min-width: 992px){
        width: auto;
        height: 50rem;
    }
`,Ct=at.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;

    @media(min-width: 992px){
        margin-bottom: 0;
        padding: 5rem;
    }
`,Pt=at.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    color: #fff;
    font-size: 2rem;
    font-family: "Roboto";
    position: relative;
    z-index: 3;

    li {
        margin-bottom: 1rem;
        &:last-child {
            margin-bottom: 0;
        }

        span {
            color: pink;
        }
    }
`;var It=({img:e,opacity:t,alt:n})=>{const i={sampler2D:e},s=o(),l=o(),u=(e,t)=>{e.width=t.clientWidth+window.devicePixelRatio,e.height=t.clientHeight+window.devicePixelRatio,e.style.width=t.clientWidth+"px",e.style.height=t.clientHeight+"px",console.log(e.width)};return a((()=>{const e=s.current,t=l.current,n=new pt(s.current);for(let e in i)n.setUniform(e,i[e]);u(e,t),n.load("\n  #ifdef GL_ES\n  precision highp float;\n  #endif\n\n  uniform float u_time;\n  uniform vec2 resolution;\n  uniform vec2 mouse;\n  uniform vec3 spectrum;\n\n  uniform sampler2D image;\n  //uniform sampler2D cat;\n\n\n  varying vec3 v_normal;\n  varying vec2 v_texcoord;\n\n  // NOISE - glsl fbm\n  #define NUM_OCTAVES 5\n\n  float rand(vec2 n) { \n      return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);\n  }\n\n  float noise(vec2 p){\n      vec2 ip = floor(p);\n      vec2 u = fract(p);\n      u = u*u*(3.0-2.0*u);\n      \n      float res = mix(\n          mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),\n          mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);\n      return res*res;\n  }\n\n  float fbm(vec2 x) {\n      float v = 0.0;\n      float a = 0.5;\n      vec2 shift = vec2(100);\n      // Rotate to reduce axial bias\n      mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));\n      for (int i = 0; i < NUM_OCTAVES; ++i) {\n          v += a * noise(x);\n          x = rot * x * 2.0 + shift;\n          a *= 0.5;\n      }\n      return v;\n  }\n\n  void main(void)\n  {\n      vec2 uv = v_texcoord; // sets where it is \n      //uv.y = 1.0 - uv.y; \n      \n      vec2 surface = vec2(\n          mix(-0.3, 0.3, fbm(1.3 * uv + 0.5 * u_time)), // use mix to center x\n          mix(-0.2, 0.3, fbm(1.3 * uv + 0.5 * u_time))\n      );\n\n      \n      uv += refract(vec2(0.0, 0.0), surface, 1.0 / 1.333 ); // we are looking at this straight on (1), but the surface will wave (2), refraction indice from wiki\n      \n      vec4 color = texture2D(image, uv); // sets what the colors are pulled from \n      gl_FragColor = color;\n  } \n  ");const r=()=>{e.clientWidth===t.clientWidth&&e.clientHeight===t.clientHeight||u(s.current,l.current)};return window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}}),[]),r.b.createElement("div",{ref:l,style:{width:"100vw",height:"100vh",opacity:t,position:"fixed"}},r.b.createElement(c.b.canvas,{inital:{opacity:0},animate:{opacity:1},ref:s},r.b.createElement("p",{class:"alt"},n)))},Ot=n.p+"assets/fresh-sites-min-12ce4f1a1fcc92f716e8aba6102982a0.png";const jt={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.15}}},Dt={hidden:{opacity:0},show:{opacity:1}};var Lt=()=>{const[e,t]=s(!1),n=Object(ot.e)();return r.b.createElement(r.b.Fragment,null,r.b.createElement(Ut,null,r.b.createElement(It,{img:Ot,opacity:".5",alt:"Vintage photography of a hand reaching into a full refrigerator, warped by WebGL shaders"}),r.b.createElement(Mt,null,e&&r.b.createElement(WorkModal,{setIsModalActive:t}),r.b.createElement(Ft,{inital:{opacity:0},animate:{opacity:1}},"Work"),r.b.createElement(Nt,{variants:jt,initial:"hidden",animate:"show"},Bt.map((e=>{let t=()=>{};return"internal"==e.type&&(t=t=>{t.preventDefault(),n.push(`/${e.slug}`)}),r.b.createElement(zt,{variants:Dt,key:e.name,bg:e.bg,text:e.text},r.b.createElement("a",{onClick:t,target:"_BLANK",href:e.link,"aria-label":e.label},r.b.createElement("span",null,e.name),r.b.createElement("p",null,e.tags),r.b.createElement("img",{src:e.img,alt:e.alt})))}))))))};const Ut=at.div`
    background-color: #000
`,Mt=at(c.b.div)`
    padding: 5rem;
    width: 100%;
    height: 100vh;
    display: block;
    overflow-y: scroll;
    background-color: none;
    box-sizing: border-box;
    position: relative;
    z-index: 2;
`,Ft=at(c.b.h1)`
    text-align: center;
    color: #fff;
    font-size: 7rem;
    @media(min-width: 992px){
        font-size: 7vw;
    }

`,Nt=at(c.b.ul)`
    list-style: none;
    padding: 0;
    text-align: center;
    font-size: 5rem;
    @media(min-width: 992px){
        font-size: 5vw;
    }

    li, a {
        color: #000;
        text-decoration: none;
        transition: all ease 300ms;
    }
`,zt=at(c.b.li)`
    background-color: ${e=>e.bg};
    width: 100%;
    margin: 2rem auto;
    position: relative;
    transition: all ease 300ms;
    @media(min-width: 992px){
        width: 50%;

        &:hover {
            img {
                opacity: 1;
            }

            a span {
                color: #fff;
                position: relative;
                z-index: 88; 
            }

            a p {
                color: #fff;
                z-index: 88;
            }
        }
    }

    img {
        position: absolute;
        width: 100%;
        height: 100%; 
        object-fit: cover;
        left: 0;
        top: 0;
        opacity: 0;
        mix-blend-mode: multiply;
        transition: all ease 300ms;
    }

    a {
        color: ${e=>e.text};
        text-decoration: none;
        box-sizing: border-box;
        display: block;
        padding: 5rem 2rem;

        p {
            transition: all ease 300ms;
            font-size: 2rem;
            display: block;
            position: relative;
            font-family: "Roboto";
        }
    }
`,Bt=[{name:"Parafactory",slug:"parafactory",type:"internal",link:"",bg:"#E49B7F",text:"#202020",img:"./../../img/work/parafactory-peek.png",alt:"High fidelity screens for mobile experience",label:"View Parafactory project",tags:"UX Research, UX Design, Prototyping, UI Design, Responsive Design, Data Visualization, Design Complete, Build In Progress"},{name:"Les Fleurs de Mars",slug:"lfdm",type:"internal",link:"",bg:"#4e573b",text:"#e1ff64",img:"./../../img/work/lfdm-peek.png",alt:"High fidelity screens for mobile experience",label:"View Les Fleurs de Mars project",tags:"UX Research, UX Design, Prototyping, UI Design, Responsive Design, Graphic Design, Completed"},{name:"Tokyo Bikes",slug:"tokyo-bikes",type:"internal",link:"",bg:"#1F2D76",text:"#F7CF07",img:"./../../img/work/tb-peek.png",alt:"UX prototype mapping for lofi digital prototype",label:"View Tokyo Bikes project",tags:"UX Research, UX Design, Prototyping, User Testing, UI Design, Completed"},{name:"Brutalist Dunks",slug:"brutalist-dunks",type:"internal",link:"",bg:"#ED5AAB",text:"#000",img:"./../../img/work/bd-peek.png",alt:"Close up of repeating brutalist Dunkin design",label:"View Brutalist Dunks Project",tags:"Graphic Design, Poster Design, Package Design, Branding, For Fun"},{name:"Alarad",type:"external",link:"https://www.alaradcapital.com/",bg:"#27331d",text:"#bd8e65",img:"./../../img/work/alarad-peek.png",alt:"Green and gold geometric designs of Alarad brand kit",label:"View Alarad project",tags:"Development, Motion Design, Animation, Wordpress, Completed"},{name:"Automic Gold",type:"external",link:"https://www.automicgold.com/",bg:"#FCE1E6",text:"#18084d",img:"./../../img/work/ag-peek.png",alt:"Close up of hand wearing Automic Gold products",label:"View Automic Gold project",tags:"Development, Site Maintenance, Accessibility, Performance, Shopify, Ongoing"},{name:"Steel Root",type:"external",link:"https://steelroot.us/",bg:"#181d40",text:"#01adcb",img:"./../../img/work/sr-peek.png",alt:"Cyborg with glowing eyes",label:"View Steel Root project",tags:"Development, Accessibility, Performance, Wordpress, Completed"},{name:"DriveForce",type:"external",link:"https://driveforce.golf",bg:"#919A6B",text:"#081D1A",img:"./../../img/work/df-peek.png",alt:"A man swinging a golf club adorned with a semicircular graphic to accentute the swing motion",label:"View DriveForce project",tags:"Development, Animation, Ecommerce, Wordpress, Completed"},{name:"TransHealth",type:"external",link:"https://www.transhealth.org/",bg:"#96b0c5",text:"#2a275b",img:"./../../img/work/th-peek.png",alt:"The Transhealth logo",label:"View Transhealth project",tags:"UX Research, Development, Accessibility, Wordpress, Completed"},{name:"ThinkForward",type:"external",link:"https://thinkforwardfinancial.com/home/",bg:"#e16e37",text:"#fff",img:"./../../img/work/tff-peek.png",alt:"A diverse group talk at a meeting table",label:"View ThinkForward project",tags:"Development, Animation, Completed"}];var Xt=n.p+"assets/gross-cake-min-c5495402939845e1b1abf7ede965b7cd.png";var Ht=()=>r.b.createElement(r.b.Fragment,null,r.b.createElement(Wt,{initial:{opacity:0},animate:{opacity:1}},r.b.createElement(It,{img:Xt,opacity:".3",alt:"Image description: Vintage photography of vibrant berry pie slices are disrupted by WebGL shaders"}),r.b.createElement(Gt,{initial:{opacity:0},animate:{opacity:1}},r.b.createElement($t,null,qt.map((e=>r.b.createElement(Vt,{key:e.name},r.b.createElement("span",null,r.b.createElement("a",{target:"_BLANK",href:e.link,"aria-label":e.label},r.b.createElement("span",null,e.name))))))))));const Wt=at(c.b.div)`
    background-color: #000;
`,Gt=at(c.b.div)`
    padding: 5rem;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    background-color: none;
    box-sizing: border-box;
    position: relative;
    z-index: 2;
`,$t=at.ul`
    list-style: none;
    text-align: center;
    padding: 0;
`,Vt=at.li`
    font-size: 5rem;
    display: block;
    position: relative;
    @media(min-width: 768px){
        font-size: 9rem;
        display: inline;
    }

    span {
        @media(min-width: 768px){
            transition: all ease 300ms;
            background: none;
            padding: 1rem .5rem;

            &:hover {
                background: #000;
            }

            @media (hover: none) {
                &:hover {
                    background: none;
                }
            }     
        }
    }

    a {
        color: #fff;
        text-decoration: none;
        transition: all ease 300ms;
        background: none;
        padding: 1rem;

        &:after {
            content: ",";
            color: #fff;
            transition: all ease 300ms;
        }
    }

    &:last-child {
        a {
            &:after {
                display: none;
            }
        }
    }
`,qt=[{name:"Email Me",link:"mailto:howdy@zarah.biz",label:"Email me"},{name:"Dribbble",link:"https://dribbble.com/zaar",label:"Visit my Dribbble"},{name:"Instagram (Main)",link:"https://www.instagram.com/jellodemon/",label:"Visit my personal Instagram"},{name:"Instagram (Design)",link:"https://www.instagram.com/zaaaaaaaaaaaaaaar/",label:"Visit my design Instagram"},{name:"LinkedIn",link:"https://www.linkedin.com/in/zarah-sikora-61980864/",label:"Visit my LinkedIn"},{name:"Resume",link:"./../../files/minimal-resume.pdf",label:"Download my resume"}];var Yt=n(15);var Kt=()=>{const e=r.b.useRef(),[t,n]=s(!1);return Object(Yt.b)((({clock:t})=>{const n=t.getElapsedTime();e.current.rotation.x=.4*n,e.current.rotation.y=.45*n})),r.b.createElement("mesh",{scale:t?1.5:1,onClick:()=>n(!t),ref:e},r.b.createElement("boxBufferGeometry",{args:[2,2,2],position:[0,5,5]}),r.b.createElement("meshNormalMaterial",null))};var Jt=()=>r.b.createElement(Zt,null,r.b.createElement(Yt.a,null,r.b.createElement("ambientLight",{intensity:.1}),r.b.createElement("directionalLight",{color:"red",position:[0,0,5]}),r.b.createElement(Kt,null)));const Zt=at.div`
    width: 100vw;
    height: 100vh;
`;var Qt=n.p+"assets/a-empathy-051b502aabdfb7f2989fe51fc1b1faff.png",en=n.p+"assets/AEmpathy-mobile-3543e894ab3d8af4ad63eb04df2a146a.png",tn=n.p+"assets/user-persona-1-min-257c7dbb48aa5b096044afb73da33884.png",nn=n.p+"assets/persona-mobile-1-min-d93b19b5f476bc7cba65e36ab7bc6e0c.png",rn=n.p+"assets/persona-mobile-2-min-a8d6d803bf7b5c6b76c553b92643ff61.png",an=n.p+"assets/user-persona-2-min-58b9e7ed03a657a3a6995e9e3bf6bdea.png",on=n.p+"assets/user-flow-10eacd8e6c0b7ce3aaae4f4cff4e1fc4.png",sn=n.p+"assets/rough-wires-1aafa719bf326b5640eb4ddc104b8794.gif",ln=n.p+"assets/polished-drafts-min-b42d1d5af4275ee1e21aa1a04524789f.png",cn=n.p+"assets/lofi-prototypes-min-cf0b4b2ff44d7cb05fa71f8877121f3a.png",un=n.p+"assets/affinity-map-436441ea37780109a54de0d5aada58b9.png",fn=n.p+"assets/hifi-proto-min-c6f654a62639c8b4cbd915d6d7dee668.png",dn=n.p+"assets/sticker-sheet-min-7d558d77736f9a5984a39c2f4576ec53.png",hn=n.p+"assets/final-mock-1-min-6125b599b61f0b102d28d91959151043.png";var pn=()=>r.b.createElement(bn,null,r.b.createElement(vn,null,r.b.createElement(kn,null,r.b.createElement("h1",null,"Tokyo Bikes")),r.b.createElement(yn,null,r.b.createElement("p",null,"Role: UX designer, UX researcher, graphic designer"),r.b.createElement("p",null,"Status: Complete"),r.b.createElement("p",null,"Duration: June 2021-July 2021"))),r.b.createElement(wn,{target:"BLANK",href:"https://docs.google.com/presentation/d/1oo_2zIuCuGhL02PfqsykkHZn0a3kpSDCHLozYLgFqHM/edit?usp=sharing","aria-label":"View Tokyo Bikes Project Slides"},"View Slides"),r.b.createElement(En,null,r.b.createElement(Tn,null,r.b.createElement(xn,null,"Project Vision"),r.b.createElement("p",null,"Over the course of the pandemic, the concept of using design and technology in an attempt to substitute face-to-face human interaction has been on many minds, mine included. After pulling a prompt to create an app for a bike shop in Tokyo, I envisioned a mobile application that could substitute for an in-person experience at a cycle shop, delivering familiarity and expertise to users from a distance.")),r.b.createElement(Tn,null,r.b.createElement(xn,null,"Challenges"),r.b.createElement(kn,null,r.b.createElement("p",null,"Increase accessibility of cycling knowledge")),r.b.createElement(kn,null,r.b.createElement("p",null,"Lower the barriers to entry associated with cycling as a hobby")),r.b.createElement(kn,null,r.b.createElement("p",null,"Create simple and easy-to-follow user flows for research and purchasing")),r.b.createElement(kn,null,r.b.createElement("p",null,"Design a visually interesting UI that doesn't sacrifice usability"))),r.b.createElement(Tn,null,r.b.createElement(xn,null,"Getting to Know the User"),r.b.createElement("p",null,"The only type of cycling I do is indoor and stationary, so my first goal was to get to know the type of user more likely to seek out a cycling app."),r.b.createElement("p",null,"To do that, I conducted interviews with four cycling enthusiasts of varying levels, ages, and genders. After transcribing their words, I was able to convert what I learned into individual empathy maps. Here is an example:"),r.b.createElement(mn,{alt:"Empathy map for user A. - mobile version",src:en}),r.b.createElement(gn,{alt:"Empathy map for user A. - desktop version",src:Qt}),r.b.createElement("p",null,"From this research, 3 consistent pain points regarding digital experiences for cyclists emerged:"),r.b.createElement(kn,null,r.b.createElement("h3",null,"Lack of Guidance from Experts"),r.b.createElement("p",null,"Users want guidance from experts on which parts and equipment are best, as well as an expert-backed knowledge base to learn more about cycling and maintenance")),r.b.createElement(kn,null,r.b.createElement("h3",null,"Poor Product Organization"),r.b.createElement("p",null,"It can be very hard and time-consuming to sort through endless pages of poorly organized products to find what the user is looking for")),r.b.createElement(kn,null,r.b.createElement("h3",null,"Overwhelmed by Options"),r.b.createElement("p",null,"Even if products are well organized, the sheer number of options per product type are enough to leave users confused and intimidated to make a purchase"))),r.b.createElement(Tn,null,r.b.createElement(xn,null,"Meet the Users"),r.b.createElement("p",null,"Because of the relatively small scope of user research, I synthesized my results into two user personas. In limiting the amount of personas, I was able to focus on a few concentrated areas of user need and be sure I fulfilled those needs well."),r.b.createElement(mn,{alt:"User persona for Sam Trieu - mobile version",src:nn}),r.b.createElement(mn,{alt:"User persona for Ellie Clark - mobile version",src:rn}),r.b.createElement(gn,{alt:"User persona for Sam Trieu - desktop version",src:tn}),r.b.createElement(gn,{alt:"User persona for Ellie Clark - desktop version",src:an})),r.b.createElement(Tn,{className:"desktopOnly"},r.b.createElement(xn,null,"Craft the Main User Journey"),r.b.createElement("p",null,"With main user needs in mind, I mapped out an initial user flow that started at product research and ended with purchase confirmation."),r.b.createElement("img",{alt:"Research and shopping user flow",src:on})),r.b.createElement(Tn,null,r.b.createElement(xn,null,"Paper Wires"),r.b.createElement("p",null,"Working iteratively through every screen on the app, I brainstormed five possible configurations of data..."),r.b.createElement("img",{alt:"Speedpaint of five rough wires for home page design",src:sn}),r.b.createElement("p",null,"...then combined my favorite parts of each configuration into a polished draft."),r.b.createElement("img",{alt:"Polished wireframes for each main app screen",src:ln})),r.b.createElement(Tn,null,r.b.createElement(xn,null,"Digital Wires"),r.b.createElement("p",null,"With initial page configuration and user flows sorted, it was time for user feedback. I digitized my polished drafts in Figma and built a low-fidelity prototype."),r.b.createElement("img",{alt:"A mockup of five low fidelity wireframe screens",src:cn}),r.b.createElement("p",null,"You can try out my low fidelity prototype ",r.b.createElement("a",{href:"https://www.figma.com/proto/7DZjYe1c27smB9w6BJPpdk/Tokyo-Bikes-Digital-Wires?node-id=5%3A20&scaling=scale-down&page-id=0%3A1&starting-point-node-id=5%3A20",target:"_BLANK"},"here"),".")),r.b.createElement(Tn,null,r.b.createElement(xn,null,"Usability Testing"),r.b.createElement("p",null,"I conducted two rounds of usability studies, both with five respondents of varying ages and genders. The first round focused on my low-fi prototype and consisted of a moderated usability study followed by a system usability scale."),r.b.createElement("img",{alt:"Digital affinity map for round 1 of usability testing",src:un}),r.b.createElement("p",null,"Once the first round of suggestions were implemented, I refined the mocks to include brand colors, visual assets, and type hierarchy..."),r.b.createElement("img",{alt:"Mockup of six high fidelity screens of mobile app",src:fn}),r.b.createElement("p",null,"...and got even more feedback! Check out my hi-fi prototype ",r.b.createElement("a",{href:"https://www.figma.com/proto/7DZjYe1c27smB9w6BJPpdk/Tokyo-Bikes-Digital-Wires?node-id=127%3A3&scaling=scale-down&page-id=127%3A2&starting-point-node-id=127%3A3&show-proto-sidebar=1",target:"_BLANK"},"here"),"."),r.b.createElement(kn,null,r.b.createElement("h3",null,"Round 1 Feedback"),r.b.createElement("p",null,"1. Users feel more secure with a pre-submission purchase review"),r.b.createElement("p",null,"2. Only some users find the expert chat function trustworthy"),r.b.createElement("p",null,"3. Multiple modes of communication will keep the app accessible to a larger user base with varied preferences")),r.b.createElement(kn,null,r.b.createElement("h3",null,"Round 2 Feedback"),r.b.createElement("p",null,"1. The sticky live chat button gets in the way of other app functions"),r.b.createElement("p",null,"2. Many users will not use the nav menu and as such, back buttons should always be available")),r.b.createElement("p",null,"With two rounds of user-backed refinement complete, the app was working as intended!")),r.b.createElement(Tn,null,r.b.createElement(xn,null,"Visual Design"),r.b.createElement("img",{alt:"Sticker sheet of main design elements used in app",src:dn}),r.b.createElement("img",{alt:"Mockup of home page of app on an iphone",src:hn})),r.b.createElement(Tn,null,r.b.createElement(xn,null,"Conclusion"),r.b.createElement("p",null,"While this particular application will not be moving into a production phase, usability study participants confirmed that if built and launched, it had the potential to improve accessibility of cycling knowledge and help combat many barriers to entry into the cycling community for beginner hobbyists."),r.b.createElement("p",null,"I hope to continue to focus on applications that improve levels of accessiliblity in the future - whether it be at the level of the technology itself through ADA compliance or accessibility of an activity like cycling to underrepresented populations."),r.b.createElement("p",null,"Challenging historical barriers to entry is one of the most meaningful things we can do in the tech and design space and I look forward to doing so as much as I can moving forward."))));const mn=at.img`
    display: block;
    @media (min-width: 768px){
        display: none;
    }
`,gn=at.img`
    display: none;
    @media (min-width: 768px){
        display: block;
    }
`,bn=at.div`
    color: #000;
    background-color: #fff;
    padding-bottom: 3rem;
    text-align: center;
    @media (min-width: 768px){
        padding-bottom: 8rem;
    }
`,vn=at.div`
    padding: 5rem 5rem 2rem;
    text-align: center;

    h1 {
        font-size: 10rem;
    }
`,yn=at.div`
    font-family: "Roboto";
    font-size: 1.6rem;
`,wn=at.a`
    color: #000;
    text-decoration: none;
    transition: all ease 300ms;
    font-size: 4rem;
    cursor: pointer;
    margin: 0 auto;
    text-align: center;
    display: inline-block;
    padding: 1rem;
    background-color: #F7CF07;

    @media(hover: hover){
        &:hover {
            background-color: #000;
            color: #fff;
        }
    }
`,En=at.div`
    font-family: "Roboto";
    padding: 0 2rem;
    @media (min-width: 768px){
        padding: 0 5rem;
        max-width: 90%;
        margin: 0 auto;
    }

    p {
        font-family: "Helvetica";
        font-size: 1.6rem;
        line-height: 1.5em;
        max-width: 60rem;
        margin: 1rem 0;
    }

    a {
        color: #000;
        text-decoration: underline;
        transition: all ease 300ms;

        &:hover {
            color: red;
        }
    }

    ul {
        padding: 0;
        margin-left: 2rem;
        font-size: 1.6rem;
        font-family: Helvetica;
        list-style: none;
        display: flex;
        max-width: 60rem;
        margin: 0 auto;
        
        li {
            margin-bottom: 1.5rem;
        }
    }

    img {
        width: 100%;
        max-width: 700px;
        height: auto;
        margin: 2rem auto;
    }
`,xn=at.h2`
    font-size: 3rem;
`,kn=at.div`
    background-color: #F7CF07;
    padding: 2rem;
    display: block;
    margin: 0 auto 2rem;
    @media (min-width: 768px){
        width: 50%;
    }

    h3 {
        font-size: 2rem;
        font-weight: 700;
        margin-top: 0;
    }

    p {
        font-family: "Roboto";
    }

    &:last-child {
        margin-bottom: 0;
    }
`,Tn=at.div`
    margin-bottom: 6rem;
    text-align: center;

    &.desktopOnly {
        display: none;
        @media (min-width: 768px){
            display: block;
        }
    }

    p {
        margin: 1rem auto;

        &:last-child{
            margin-bottom: 0;
        }
    }
`;var An=n.p+"assets/user-persona-1-2cd4b2b16cdea62042027aa73ffc7ca7.png",Sn=n.p+"assets/persona-mobile-1-1587eb1d78da88b1342c75b1ecb52f90.png",_n=n.p+"assets/persona-mobile-2-d3b2cf9564f183910a580431afe5ec89.png",Rn=n.p+"assets/user-persona-2-c6300e909224f154fe239fcb37e66f09.png",Cn=n.p+"assets/rough-wires-91096d4115fb5b9b87892027b74fc183.gif",Pn=n.p+"assets/polished-draft-min-ee7ccd956356a8dccc6fdabbceb8bf7e.png",In=n.p+"assets/lofi-prototypes-min-04f0aa79d9e1fa319188760b88219ef5.png",On=n.p+"assets/affinity-map-min-c26eb05d67ca5001d1c6ace2d593d115.png",jn=n.p+"assets/shop-sign-min-96bdfe2d8b3fa237099e83ad4bea50f7.png",Dn=n.p+"assets/cart-icons-min-54ba652d4653625da92d2264f886f8ee.png",Ln=n.p+"assets/final-desktop-screens-min-5a5f4a49d3fcb1bcacc1d820b2fd5736.png",Un=n.p+"assets/laptop-screens-min-957bc1c6347af2b2fd3c770fbe8331e3.png";var Mn=()=>r.b.createElement(zn,null,r.b.createElement(Bn,null,r.b.createElement($n,null,r.b.createElement("h1",null,"Les Fleurs de Mars")),r.b.createElement(Xn,null,r.b.createElement("p",null,"Role: UX designer, UX researcher, graphic designer"),r.b.createElement("p",null,"Status: Complete"),r.b.createElement("p",null,"Duration: August 2021"))),r.b.createElement(Hn,{target:"BLANK",href:"https://docs.google.com/presentation/d/16KpAOPEIVXkTFtuAvgK6F5HAxPLpvjGipGJYLhUbyGM/edit?usp=sharing","aria-label":"View LFDM Project Slides"},"View Slides"),r.b.createElement(Wn,null,r.b.createElement(Vn,null,r.b.createElement(Gn,null,"Project Vision"),r.b.createElement("p",null,"I was tasked with designing a shopping flow specifically for flower arrangements. I'm not someone who orders many flowers, but my impression has always been that floral arrangements are incredibly traditional in their styling, and that a user typically sacrifices aesthetics for economic accessibility or the other way around. I wanted to challenge the notion that contemporary floral arrangement cannot be accessible to all and dispel typical frustrations associated with ordering floral arrangements on a budget.")),r.b.createElement(Vn,null,r.b.createElement(Gn,null,"Challenges"),r.b.createElement($n,null,r.b.createElement("p",null,"Design for economic accessibilty without sacrificing quality of product")),r.b.createElement($n,null,r.b.createElement("p",null,"Explore options for last minute gifting needs")),r.b.createElement($n,null,r.b.createElement("p",null,"Shake up the aesthetics we associate with floral arrangement businesses"))),r.b.createElement(Vn,null,r.b.createElement(Gn,null,"Getting to Know the User"),r.b.createElement("p",null,"To fill in my lack of insight in the world of floral arrangements, I interviewed four users of varying ages and genders with recent experience ordering floral arrangements online."),r.b.createElement("p",null,"These conversations illuminated a few clear areas for improvement in the current landscape:"),r.b.createElement($n,null,r.b.createElement("h3",null,"Feeling of Diminishing Options"),r.b.createElement("p",null,"In many order flows, a user is initially presented with all product options. As they define their budgetary limitations and when/where the order needs to be delivered, these options reduce dramatically, leaving a feeling of disappointment.")),r.b.createElement($n,null,r.b.createElement("h3",null,"Product Categorization Feels Arbitrary"),r.b.createElement("p",null,"Aside from card choice, what makes a flower arrangement sympathy themed or congratulatory? Most flowers are generally agnostic of occasion, so why categorize them as occasion dependent? This is something the user would often like to decide for themself.")),r.b.createElement($n,null,r.b.createElement("h3",null,"Access Limited by Turnaround Time"),r.b.createElement("p",null,"We can't always anticipate when we will need to send a gift, so why is it that so few platforms have explored alternative modes of gifting for last minute delivery?"))),r.b.createElement(Vn,null,r.b.createElement(Gn,null,"Meet the Users"),r.b.createElement("p",null,"I synthesized the results of my research into two user personas. In limiting the amount of personas, I was able to focus on a few concentrated areas of user need and be sure I fulfilled those needs well."),r.b.createElement(Fn,{alt:"User persona for Esther M - mobile version",src:Sn}),r.b.createElement(Fn,{alt:"User persona for Jean F - mobile version",src:_n}),r.b.createElement(Nn,{alt:"User persona for Esther M - desktop version",src:An}),r.b.createElement(Nn,{alt:"User persona for Jean F - desktop version",src:Rn})),r.b.createElement(Vn,null,r.b.createElement(Gn,null,"Paper Wires"),r.b.createElement("p",null,"Once I established the basic information architecture for my web application, I moved on to drafting wires. For each screen of the desktop experience, I listed the elements that would need to be present and then began the process of iterating through possible configurations of these elements."),r.b.createElement("img",{alt:"Speedpaint of rough wires for product single design",src:Cn}),r.b.createElement("p",null,"I then combined my favorite parts of each configuration into a polished draft. Here's an example for the product display page, above the fold."),r.b.createElement("img",{alt:"Polished wireframe for the product single page",src:Pn}),r.b.createElement("p",null,"I was clearly drinking a lot of coffee this day because my lines are incredibly wiggly.")),r.b.createElement(Vn,null,r.b.createElement(Gn,null,"Digital Wires"),r.b.createElement("p",null,"Usually I would approach digital wireframes in a mobile-first manner. However, since my last project focused on mobile design, I started with desktop screens and made visual adjustments from there to mock up mobile configurations of each screen."),r.b.createElement("img",{alt:"A mockup of four low fidelity desktop wireframe screens",src:In}),r.b.createElement("p",null,"You can try out my low fidelity prototype ",r.b.createElement("a",{href:"https://xd.adobe.com/view/f746f5ea-f154-4b25-acf4-3d8c9ff2c36d-a215/",target:"_BLANK"},"here (desktop)")," and ",r.b.createElement("a",{href:"https://xd.adobe.com/view/e1407f1b-4738-4183-83fa-47edd35612de-b413/",target:"_BLANK"},"here (mobile)"),".")),r.b.createElement(Vn,null,r.b.createElement(Gn,null,"Usability Testing"),r.b.createElement("p",null,"For this project, I conducted a single-round usability study which focused on improving user experience on both desktop and mobile. I spoke with four respondents of varying ages and genders in a moderated usability test, asking them to walk me through choosing and purchasing a flower arrangement. By conducting this study in the low fidelity phase of prototyping, respondents were able to better focus on structure and flow without being distracted by colors, type, or iconography."),r.b.createElement("img",{alt:"Digital affinity map for usability testing",src:On}),r.b.createElement("p",null,"Once I implemented the suggestions gleaned from my usability study, I felt confident in the foundation of my desktop and mobile experiences and moved on to making UI decisions.")),r.b.createElement(Vn,null,r.b.createElement(Gn,null,"Visual Design"),r.b.createElement("p",null,"I knew I wanted the site to visually and tonally reflect the products I envisioned on it: contemporary and left-of-center, but not self-important or snobby. During the research phase of my work, I had conducted a competitive audit of some of the main players in the online floral arrangements market. Aesthetically speaking, I noticed a pattern of identities that were either cold, stiff, and modern or messy and unattractive in an attempt to look fun. These two polar extremes defined the baseline of what I would like to avoid."),r.b.createElement("p",null,"While honoring the clean and minimal screen structures I built in the low fidelity stage, I offset any clinical vibes that sparse page structures at times can generate by choosing a fun, fluid typeface for headlines and a pastel mesh gradient to breathe life into heroes and other content containers."),r.b.createElement("img",{alt:"Mockup of four high fidelity screens of desktop app",src:Ln}),r.b.createElement("p",null,"Additionally, I designed a simple and friendly graphic logomark and custom cart icons. Where a wordmark can feel traditional, lending a cute mascot to this brand through its logo inspires a feeling of whimsy."),r.b.createElement("img",{alt:"Mockup of LFDM logo on a shopfront sign",src:jn}),r.b.createElement("p",null,"Similarly, the cart begins as an empty vase and is filled with a single blooming flower when the user adds a product to their cart. This aberration from traditional cart iconography invites the user to have fun and enjoy their time."),r.b.createElement("img",{alt:"Enlarged copies of custom cart icons in empty and full variants (empty vase, vase with flower)",src:Dn}),r.b.createElement("p",null,"Check out my hi-fi prototype ",r.b.createElement("a",{href:"https://xd.adobe.com/view/e99ac259-83d4-4931-958a-e829eac24d55-bcc9/",target:"_BLANK"},"here (desktop)")," and ",r.b.createElement("a",{href:"https://xd.adobe.com/view/84e0afe6-3f49-412b-ba45-b5a09a4258f9-d1b3/",target:"_BLANK"},"here (mobile)"),"."),r.b.createElement("img",{alt:"Mocks of eight desktop screens of app",src:Un})),r.b.createElement(Vn,null,r.b.createElement(Gn,null,"Conclusion"),r.b.createElement("p",null,"There are a few specific features that I would like to bring attention to, as they are perhaps easily overlooked in my mocks but play a significant role in resolving some of the main user challenges outlined at the beginning of this case study."),r.b.createElement($n,null,r.b.createElement("h3",null,"Equitable Design for Diverse Budgets"),r.b.createElement("p",null,"Unlike most floral arrangement sites, this one establishes user budget as a required query parameter. Not only is attention paid to offering a catalog of products ranging in price from under $25 to over $200, but a user will only see products specific to the budget they define. This will reduce a feeling of longing for out-of-budget gifts that users may experience when forced to refine the price range once already on the product result grid.")),r.b.createElement($n,null,r.b.createElement("h3",null,"Feeling of Diminishing Options"),r.b.createElement("p",null,"In the flow where users choose their desired delivery date, zip code, and budgetary constraints, no results are displayed until all query parameters have been collected. This way, it doesn't feel like they have 75 options initially and only 12 in their price range for the date and location requested, but rather that a list of results are built as they give the tool more data to work with.")),r.b.createElement($n,null,r.b.createElement("h3",null,"Product Categorization Feels Arbitrary"),r.b.createElement("p",null,"The only two filters on the product grid page are color and type. A user can look only at flowers, elect to shop bath and body options, or filter for only blue gifts. However, they are given the agency to decide which product feels right for their unique needs without predetermined categorization.")),r.b.createElement($n,null,r.b.createElement("h3",null,"Access Limited by Turnaround Time"),r.b.createElement("p",null,"I love the idea of instant flower delivery, but how could such a thing be achieved? I was inspired heavily by  ",r.b.createElement("a",{target:"_BLANK",href:"https://infiniteobjects.com/"},"infinite objects")," to riff off a recent surge in NFT popularity but remove the environmentally unfriendly aspect of exclusivity. What if you were able to instantly send a client or loved one a digital model of a flower arrangement which they could interact with on their computer, tablet, or mobile phone? Then, after the intial reception of the gift, receive a physical version of the model cast in a lucite frame some days later? Tight timelines are no longer a problem and a whole new definition of preserved flowers is introduced to the flower arrangement space.")),r.b.createElement("p",null,"In closing, while there are no plans to move into the build phase at this time, I think there is no lack of potential in the ideas presented. Though they can be difficult to ideate around at first, very traditional market areas such as flower arrangement present creatives with some of the most unique opportunities to rejuvenate age-old concepts with modern technologies and ideas."),r.b.createElement("p",null,"Upending traditional ideas regarding access to artisan goods and what qualifies as an appropriate occasion to send and receive them is one of the many ways we can use design and development as a tool to change greater societal conversations. In other words, go send your best friend a rose :)"))));const Fn=at.img`
    display: block;
    @media (min-width: 768px){
        display: none;
    }
`,Nn=at.img`
    display: none;
    @media (min-width: 768px){
        display: block;
    }
`,zn=at.div`
    color: #000;
    background-color: #fff;
    padding-bottom: 3rem;
    text-align: center;
    @media (min-width: 768px){
        padding-bottom: 8rem;
    }
`,Bn=at.div`
    padding: 5rem 5rem 2rem;
    text-align: center;

    h1 {
        font-size: 10rem;
    }
`,Xn=at.div`
    font-family: "Roboto";
    font-size: 1.6rem;
`,Hn=at.a`
    color: #000;
    text-decoration: none;
    transition: all ease 300ms;
    font-size: 4rem;
    cursor: pointer;
    margin: 0 auto;
    text-align: center;
    display: inline-block;
    padding: 1rem;
    background-color: #e1ff64;

    @media(hover: hover){
        &:hover {
            background-color: #000;
            color: #fff;
        }
    }
`,Wn=at.div`
    font-family: "Roboto";
    padding: 0 2rem;
    @media (min-width: 768px){
        padding: 0 5rem;
        max-width: 90%;
        margin: 0 auto;
    }

    p {
        font-family: "Helvetica";
        font-size: 1.6rem;
        line-height: 1.5em;
        max-width: 60rem;
        margin: 1rem 0;
    }

    a {
        color: #000;
        text-decoration: underline;
        transition: all ease 300ms;

        &:hover {
            color: red;
        }
    }

    ul {
        padding: 0;
        margin-left: 2rem;
        font-size: 1.6rem;
        font-family: Helvetica;
        list-style: none;
        display: flex;
        max-width: 60rem;
        margin: 0 auto;
        
        li {
            margin-bottom: 1.5rem;
        }
    }

    img {
        width: 100%;
        max-width: 700px;
        height: auto;
        margin: 2rem auto;
    }
`,Gn=at.h2`
    font-size: 3rem;
`,$n=at.div`
    background-color: #e1ff64;
    padding: 2rem;
    display: block;
    margin: 0 auto 2rem;
    @media (min-width: 768px){
        width: 50%;
    }

    h3 {
        font-size: 2rem;
        font-weight: 700;
        margin-top: 0;
    }

    p {
        font-family: "Roboto";
    }

    &:last-child {
        margin-bottom: 0;
    }
`,Vn=at.div`
    margin-bottom: 6rem;
    text-align: center;

    &.desktopOnly {
        display: none;
        @media (min-width: 768px){
            display: block;
        }
    }

    p {
        margin: 1rem auto;

        &:last-child{
            margin-bottom: 0;
        }
    }
`;var qn=n.p+"assets/bd-mock-1-22d5842a8b6e2b51f64f7ffdb21c2f50.png",Yn=n.p+"assets/bd-mock-2-b823f0bb699f8fd6be79c6a9bb197cd7.png",Kn=n.p+"assets/comparison-d26cd9c12d2cb33fe1ce94ea7c270c26.png";var Jn=()=>r.b.createElement(Zn,null,r.b.createElement(Qn,null,r.b.createElement(ir,null,r.b.createElement("h1",null,"Brutalist Dunks")),r.b.createElement(er,null,r.b.createElement("p",null,"Because workers of the world (or at least Massachusetts) really do run on Dunkin."))),r.b.createElement(tr,null,r.b.createElement(ar,null,r.b.createElement(rr,null,"Inspiration"),r.b.createElement("p",null,"I was heavily inspired by Peter Chadwick's ",r.b.createElement("a",{target:"_BLANK",href:"https://www.theguardian.com/artanddesign/gallery/2018/mar/10/graphic-brutality-posters-of-italian-brutalist-architecture-in-pictures"},"Brutalismo")," project, which highlights the beauty of Italian Brutialist architecture with mid-century graphic flair. I wanted to emulate Chadwick's use of grain and loud mod shapes to build off of the inherently interesting shapes of Brutalism."),r.b.createElement("p",null,'So why not choose a famous Brutalist building like Boston City Hall? Well, when I think of quintessential proletariat institutions in Massachusetts, Dunkin Donuts ranks higher on my list. The shops may not be concrete, but the spirit of the worker is undeniable. Plus, I liked the challenge of "brutalizing" something that did not inherently fit the visual theme.'),r.b.createElement("img",{alt:"",src:Kn}),r.b.createElement("p",null,"Once I finished my first take, I decided to expand on the concept and make some companion pieces.")),r.b.createElement(ar,null,r.b.createElement(rr,null,"As Posters"),r.b.createElement("img",{alt:"",src:Yn}),r.b.createElement(nr,{href:"https://www.freepik.com/psd/poster"},"Poster psd created by antonioli")),r.b.createElement(ar,null,r.b.createElement(rr,null,"As Packaging"),r.b.createElement("img",{alt:"",src:qn}))));at.img`
    display: block;
    @media (min-width: 768px){
        display: none;
    }
`,at.img`
    display: none;
    @media (min-width: 768px){
        display: block;
    }
`;const Zn=at.div`
    color: #000;
    background-color: #fff;
    padding-bottom: 3rem;
    text-align: center;
    @media (min-width: 768px){
        padding-bottom: 8rem;
    }
`,Qn=at.div`
    padding: 5rem 5rem 2rem;
    text-align: center;

    h1 {
        font-size: 7rem;
        @media(min-width: 768px){
            font-size: 10rem;
        }
    }
`,er=at.div`
    font-family: "Roboto";
    font-size: 1.6rem;
`,tr=at.div`
    font-family: "Roboto";
    padding: 0 2rem;
    @media (min-width: 768px){
        padding: 0 5rem;
        max-width: 90%;
        margin: 0 auto;
    }

    p {
        font-family: "Helvetica";
        font-size: 1.6rem;
        line-height: 1.5em;
        max-width: 60rem;
        margin: 1rem 0;
    }

    a {
        color: #000;
        text-decoration: underline;
        transition: all ease 300ms;

        &:hover {
            color: red;
        }
    }

    ul {
        padding: 0;
        margin-left: 2rem;
        font-size: 1.6rem;
        font-family: Helvetica;
        list-style: none;
        display: flex;
        max-width: 60rem;
        margin: 0 auto;
        
        li {
            margin-bottom: 1.5rem;
        }
    }

    img {
        width: 100%;
        max-width: 700px;
        height: auto;
        margin: 2rem auto;
    }
`,nr=at.a`
    display: block;
`,rr=at.h2`
    font-size: 3rem;
`,ir=at.div`
    background-color: #ED5AAB;
    padding: 2rem;
    display: block;
    margin: 0 auto 2rem;
    @media (min-width: 768px){
        width: 50%;
    }

    h3 {
        font-size: 2rem;
        font-weight: 700;
        margin-top: 0;
    }

    p {
        font-family: "Roboto";
    }

    &:last-child {
        margin-bottom: 0;
    }
`,ar=at.div`
    margin-bottom: 6rem;
    text-align: center;

    &.desktopOnly {
        display: none;
        @media (min-width: 768px){
            display: block;
        }
    }

    p {
        margin: 1rem auto;

        &:last-child{
            margin-bottom: 0;
        }
    }
`;var or=n.p+"assets/user-persona-1-a213a73242882b1906541cae4a367bf2.png",sr=n.p+"assets/persona-mobile-1-82da9100a4a9fa3c2984699505ca7c00.png",lr=n.p+"assets/persona-mobile-2-ede75b8f9d93c80d20a943bd2a8f3d8c.png",cr=n.p+"assets/user-persona-2-1c254ce1f47cf31b14868c0913cf090c.png",ur=n.p+"assets/whiskey-map-cfed62513a9b48ac487dcf0cd09a0560.png",fr=n.p+"assets/whiskey-desktop-5383d9646da5c1d673597c3835795c18.png",dr=n.p+"assets/flavor-wheel-58a58f31dea30408060019c45fc55b45.jpg",hr=n.p+"assets/coffee-desktop-ac43fcd678bbf1e95858300a5772676f.png",pr=n.p+"assets/radar-d00c620c6089bbc220a359420a8a272a.png",mr=n.p+"assets/radar-desktop-e25786877fe4db15e1c1901223b89963.png",gr=n.p+"assets/line-7c5391bda07c6033276c3e3a0b196049.png",br=n.p+"assets/line-desktop-9a56fe88663cf366e40120204a1b5483.png",vr=n.p+"assets/rough-wires-3062b6c27b54d60ea85f30cb3fdc84f1.png",yr=n.p+"assets/dash-mock-550a27cede482be36af4ca3cb0a96bf1.png",wr=n.p+"assets/dash-mock-desktop-222360a3d868426df1b437d9f18f66c8.png",Er=n.p+"assets/poster-ae37fb9355e5c47332084374bb23302e.png",xr=n.p+"assets/responsive-82e7877a6fa50721aa4c896baf0838fb.png",kr=n.p+"assets/phone-screens-web-2e7c8d830f89727bd748e63749fe2358.png",Tr=n.p+"assets/desktop-screens-min-f1fc9f8ee0253c4e5d34d622801c3d3f.png",Ar=n.p+"assets/welcome-c9f7a6794c69d883f4ed08bc612d615c.png",Sr=n.p+"assets/tldr-2fe06fd6e759492b2098f8789daa510e.png";var _r=()=>r.b.createElement(Pr,null,r.b.createElement(Ir,null,r.b.createElement(Ur,null,r.b.createElement("h1",null,"Parafactory")),r.b.createElement(Or,null,r.b.createElement("p",null,"Role: UX designer, UX researcher, graphic designer, lead engineer"),r.b.createElement("p",null,"Status: Ongoing"),r.b.createElement("p",null,"Duration: August 2021 - ?"))),r.b.createElement(jr,{target:"BLANK",href:"https://docs.google.com/presentation/d/1uyM8GrSHhTenzP9eonUMwnPGyFij7UVjoC5KKybj8Mk/edit?usp=sharing","aria-label":"View Parafactory Project Slides"},"View Slides"),r.b.createElement(Dr,null,r.b.createElement(Fr,null,r.b.createElement(Lr,null,"Project Vision"),r.b.createElement("p",null,"I was tasked with designing a native mobile app and corresponding responsive web application for social good. Coincidentally, I'd had an idea in the works for a while which fit the theme."),r.b.createElement("p",null,"In early March of 2020 I contracted COVID-19 and completely lost the ability to smell and taste. Almost a year and a half later, I am able to smell and taste at about 20% of the capacity I originally could, but most things don't smell and taste as they should. To give a few examples of what I mean, vegetable stock cooking on a stovetop makes the kitchen smell like a dumpster and chocolate almost always tastes like blood."),r.b.createElement("p",null,"Relatively speaking, very little is known about treating olfactory nerve damage effectively. Avenues for recovery are limited, don't work reliably, and take a very long time to have any effect at all. At times, the whole thing can feel a bit hopeless."),r.b.createElement("p",null,"Despite the growing number of people struggling with long-term olfactory damage due to COVID, there are very few digital tools available to aid them in their rehabilitation and recovery. I would like to design and build a tool focused on helping people with olfactory damage track changes in their sensory perception over time.")),r.b.createElement(Fr,null,r.b.createElement(Lr,null,"Challenges"),r.b.createElement(Ur,null,r.b.createElement("p",null,"How do you numerically quantify something as complex as a flavor profile?")),r.b.createElement(Ur,null,r.b.createElement("p",null,"How do you graphically represent this data in a simple and accessible manner for easy comparison over time?")),r.b.createElement(Ur,null,r.b.createElement("p",null,'How do you introduce a benchmark for "normal" olfactory perception?'))),r.b.createElement(Fr,null,r.b.createElement(Lr,null,"Meet the Users"),r.b.createElement("p",null,"After speaking with other sufferers of long-term olfactory problems and their loved ones, I was able to craft two representative user personas for my app."),r.b.createElement("p",null,"The feedback I received made it clear to me that this tool would not only benefit anosmia and paranosmia sufferers, but also the medical staff, scientists, and loved ones striving to understand and empathize with their plight."),r.b.createElement(Rr,{alt:"User persona for Adrian P - mobile version",src:sr}),r.b.createElement(Rr,{alt:"User persona for Vivi A - mobile version",src:lr}),r.b.createElement(Cr,{alt:"User persona for Adrian P - desktop version",src:or}),r.b.createElement(Cr,{alt:"User persona for Vivi A - desktop version",src:cr})),r.b.createElement(Fr,null,r.b.createElement(Lr,null,"Data Visualization"),r.b.createElement("p",null,"Usually, at this point in the design process I am preparing to make paper wires. However, in this case, I first had to resolve the challenge of gathering and visualizing the flavor data that would comprise the crux of the app’s functionality."),r.b.createElement("p",null,"This concept does not have direct competition, and in fact the closest parallel I could think of was a mix between a wine or coffee tasting journal and a daily food intake app. Research was necessary to discern how others have quantified complex flavor profiles into numeric, visually translatable data in the past. In order to get a better idea, I looked at visual aids from sommeliers and gastronomists specifically."),r.b.createElement("p",null,"The pre-existing models I found presented a few problems:"),r.b.createElement(Cr,{alt:"a pastel four-quadrant flavor map for single-malt scotch - desktop version",src:fr}),r.b.createElement(Rr,{alt:"a pastel four-quadrant flavor map for single-malt scotch - mobile version",src:ur}),r.b.createElement(Mr,{target:"_BLANK",href:"https://vinepair.com/articles/single-malt-scotch-whisky-flavor-map-infographic/"},"Courtesy of Vinepair"),r.b.createElement("p",null,"The four-quadrant scatter plot employed frequently by whiskey sommeliers is very useful for things within a single family, but a bit too limiting if one wants to explore a broad variety of food types."),r.b.createElement(Cr,{alt:"coffee flavor wheel - desktop version",src:hr}),r.b.createElement(Rr,{alt:"coffee flavor wheel - mobile version",src:dr}),r.b.createElement(Mr,{target:"_BLANK",href:"https://www.scanews.coffee/wp-content/uploads/2016/01/SCAA_FlavorWheel.01.18.15.jpg"},"Courtesy of the Special Coffee Association of America"),r.b.createElement("p",null,"The flavor wheel, a mainstay in the third-wave coffee community, goes in the other direction and displays far too many flavor options to be useful in our case. Asking people who have little to no taste to discern between honey and molasses notes is not only a fool's errand but also wholly unhelpful."),r.b.createElement("p",null,"After much thought and collaboration, I decided to move forward with displaying the data in two ways:"),r.b.createElement(Cr,{alt:"radar chart of a user's perception of the flavor profile of a lemon vs a control - desktop version",src:mr}),r.b.createElement(Rr,{alt:"radar chart of a user's perception of the flavor profile of a lemon vs a control - mobile version",src:pr}),r.b.createElement("p",null,"First, a radar chart will allow for a clear visual representation of multiple taste nodes coming together into one unique flavor profile shape. Our app will limit entries to a handful of food options chosen for their common availability, variety, and reputation for difficulty in the anosmia community. For each food, a set number of taste nodes will be chosen for users to rank numerically between 1 and 10. While most nodes will relate to that specific food's flavor profile (sweet, fresh, etc), others relate to olfactory damage in general and will be universally included (metallic, rancid). With a ranking for each node, corresponding points can be connected to form the flavor “shape”."),r.b.createElement("p",null,"When you look at the data like this, differences between the user and control group are immediately discernible. It becomes clear that these two entities are not having the same sensory experience at all."),r.b.createElement("p",null,"This data alone doesn't show everything we want, though. Maybe a user’s ability to taste the sweet notes of a food specifically is improving over time. I wanted a way to see that as well."),r.b.createElement(Cr,{alt:"line chart of a user's perception of the sweet notes of lemon over time - desktop version",src:br}),r.b.createElement(Rr,{alt:"line chart of a user's perception of the sweet notes of lemon over time - mobile version",src:gr}),r.b.createElement("p",null,"For this, a line graph with a single flavor’s numerical ranking on the Y axis and dates of entry on the X axis tracks whether a user is getting closer or farther from the control data. In this example, on July 1st the user ranked the sweet notes of a lemon at 7 vs the control's ranking of 3, but by late August their perception of the sweet node dropped to 4, only 1 point away from the control. Their taste is evolving in a way that suggests healthy olfactory nerve regeneration."),r.b.createElement("p",null,"Okay, now for wires.")),r.b.createElement(Fr,null,r.b.createElement(Lr,null,"Paper Wires"),r.b.createElement("img",{alt:"sketch of rough wires for native app screens",src:vr})),r.b.createElement(Fr,null,r.b.createElement(Lr,null,"Digital Wires"),r.b.createElement("p",null,"I split the task of digital wireframing and prototyping into two parts: the native mobile app and web experience. I envisioned the native mobile app being specifically for account holders creating and keeping track of entries, while the web app would have both a login portal for registered users and opportunities for the public to explore visualization of aggregate user data."),r.b.createElement(Cr,{alt:"rough digital wires for the dashboard screen of the native app, web app, and mobile web app - desktop",src:wr}),r.b.createElement(Rr,{alt:"rough digital wires for the dashboard screen of the native app, web app, and mobile web app - mobile",src:yr}),r.b.createElement("p",null,"You can try out my lo-fi prototypes ",r.b.createElement("a",{target:"_BLANK",href:"https://xd.adobe.com/view/5d9ef4b0-0603-4450-8844-125a5bfac9c9-08cd/"},"here (mobile app)"),", ",r.b.createElement("a",{target:"_BLANK",href:"https://xd.adobe.com/view/a0a14b3c-9e12-4261-9721-6a96beb96471-f5f2/"},"here (mobile web)"),", and ",r.b.createElement("a",{target:"_BLANK",href:"https://xd.adobe.com/view/d5b9491d-ee1e-42c5-9c26-e2878ff39cb5-80ea/"},"here (desktop web)"),"!")),r.b.createElement(Fr,null,r.b.createElement(Lr,null,"Usability Testing"),r.b.createElement("p",null,"For this project, I spoke with four respondents of varying ages and genders in a moderated usability test, asking them to walk me through creating a new taste entry in the native mobile app. User feedback focused on further adjusting navigation flows and editing capabilities:"),r.b.createElement(Ur,null,r.b.createElement("p",null,"Remove “my foods” from lower nav bar. This isn’t a main navigational concern and should live in a less prominent place.")),r.b.createElement(Ur,null,r.b.createElement("p",null,"How can one edit their profile after account creation? Add a way to adjust bio, name, image, etc.")),r.b.createElement(Ur,null,r.b.createElement("p",null,"Allow for easy editability of past taste entries - people make mistakes."))),r.b.createElement(Fr,null,r.b.createElement(Lr,null,"Visual Design"),r.b.createElement("p",null,"The original visual concept came from a poster I made:"),r.b.createElement("img",{alt:"marbled poster with distorted lettering that spells 'otherfood'",src:Er}),r.b.createElement("p",null,"Otherfood is how I've come to describe foods that I can taste but which now taste completely different than they once did. Almost familiar, but not. I chose a simple, high contrast palette of warm neutrals and black to preserve the data as the focal point of the experience. Limiting the typeface choices to two grotesks ensured cohesion and readability. I added liquified graphical background overlays for a bit of spice and to reinforce the theme of distorted perception."),r.b.createElement("img",{alt:"welcome screen of the parafactory desktop web application",src:Ar}),r.b.createElement("img",{alt:"desktop mockups of the profile, entry single, food single, and new entry screens",src:Tr}),r.b.createElement("img",{alt:"mobile mockups of the profile, entry single, and node single screens",src:kr}),r.b.createElement("p",null,"Check out my hi-fi prototypes ",r.b.createElement("a",{target:"_BLANK",href:"https://xd.adobe.com/view/df79fd1e-86db-4d5d-bd5d-ce6e12cda110-8a2a/"},"here (mobile app)"),", ",r.b.createElement("a",{target:"_BLANK",href:"https://xd.adobe.com/view/07aab0ae-2337-4f75-9972-e0fa3248ad9c-52f9/"},"here (mobile web)"),", and ",r.b.createElement("a",{target:"_BLANK",href:"https://xd.adobe.com/view/55ff22cb-35bc-4616-aca8-360b502e39de-00ac/"},"here (desktop web)"),"."),r.b.createElement("p",null,"Note: I am actually in the process of moving my high fidelity prototypes over to Figma - these links will update soon."),r.b.createElement("img",{alt:"desktop, tablet, and mobile mocks of the entry single screen",src:xr})),r.b.createElement(Fr,null,r.b.createElement(Lr,null,"Next Steps"),r.b.createElement("p",null,"This is a tool that I'd like to use and based on that fact alone, I'm going to move forward with building it. Current next steps are as follows:"),r.b.createElement(Ur,null,r.b.createElement("h3",null,"Collect Control Data"),r.b.createElement("p",null,"I will need to replace dummy control data with the real thing.  This will require survey creation and distribution to an appropriately large and varied pool of respondents. I am aiming for about 100 respondents at this time.")),r.b.createElement(Ur,null,r.b.createElement("h3",null,"Finalize Copy"),r.b.createElement("p",null,"Not all of the copy on pages like About is finalized. I would like to provide the most easily digestible introduction to olfactory damage that I can which will require multiple drafts and feedback from people more knowledgeable than me.")),r.b.createElement(Ur,null,r.b.createElement("h3",null,"Build Web Application"),r.b.createElement("p",null,"I am planning to build out the web application in React and utilize ",r.b.createElement("a",{target:"_BLANK",href:"https://www.chartjs.org/"},"Chart.js")," for the data visualization. Further research will be necessary on account creation and data encryption.")),r.b.createElement(Ur,null,r.b.createElement("h3",null,"Accessibility Audit"),r.b.createElement("p",null,"I will have to make special considerations to ensure that my data visualization remains accessible to all. This will include research on flexible alt text generation for the custom radar charts and line graphs.")),r.b.createElement(Lr,null,"TLDR:"),r.b.createElement("img",{alt:"screenshot of text message with conspiracy theory meme and text 'IM LIKE WE CAN MAKE TASTE INTO A SHAPE USING NUMBERS'",src:Sr}),r.b.createElement("p",null,"I will continue to update this case study as I move forward with the build process :)"))));const Rr=at.img`
    display: block;
    @media (min-width: 768px){
        display: none;
    }
`,Cr=at.img`
    display: none;
    @media (min-width: 768px){
        display: block;
    }
`,Pr=at.div`
    color: #000;
    background-color: #fff;
    padding-bottom: 3rem;
    text-align: center;
    @media (min-width: 768px){
        padding-bottom: 8rem;
    }
`,Ir=at.div`
    padding: 5rem 5rem 2rem;
    text-align: center;

    h1 {
        font-size: 5rem;
        @media (min-width: 768px){
            font-size: 8rem;
        }
        @media (min-width: 992px){
            font-size: 10rem;
        }
    }
`,Or=at.div`
    font-family: "Roboto";
    font-size: 1.6rem;
`,jr=at.a`
    color: #000;
    text-decoration: none;
    transition: all ease 300ms;
    font-size: 4rem;
    cursor: pointer;
    margin: 0 auto;
    text-align: center;
    display: inline-block;
    padding: 1rem;
    background-color: #FFE9E1;

    @media(hover: hover){
        &:hover {
            background-color: #000;
            color: #fff;
        }
    }
`,Dr=at.div`
    font-family: "Roboto";
    padding: 0 2rem;
    @media (min-width: 768px){
        padding: 0 5rem;
        max-width: 90%;
        margin: 0 auto;
    }

    p {
        font-family: "Helvetica";
        font-size: 1.6rem;
        line-height: 1.5em;
        max-width: 60rem;
        margin: 1rem 0;
    }

    a {
        color: #000;
        text-decoration: underline;
        transition: all ease 300ms;

        &:hover {
            color: red;
        }
    }

    ul {
        padding: 0;
        margin-left: 2rem;
        font-size: 1.6rem;
        font-family: Helvetica;
        list-style: none;
        display: flex;
        max-width: 60rem;
        margin: 0 auto;
        
        li {
            margin-bottom: 1.5rem;
        }
    }

    img {
        width: 100%;
        max-width: 700px;
        height: auto;
        margin: 2rem auto;
    }
`,Lr=at.h2`
    font-size: 3rem;
`,Ur=at.div`
    background-color: #FFE9E1;
    padding: 2rem;
    display: block;
    margin: 0 auto 2rem;
    @media (min-width: 768px){
        width: 50%;
    }

    h3 {
        font-size: 2rem;
        font-weight: 700;
        margin-top: 0;
    }

    p {
        font-family: "Roboto";
    }

    &:last-child {
        margin-bottom: 0;
    }
`,Mr=at.a`
    display: block;
`,Fr=at.div`
    margin-bottom: 6rem;
    text-align: center;

    &.desktopOnly {
        display: none;
        @media (min-width: 768px){
            display: block;
        }
    }

    p {
        margin: 1rem auto;

        &:last-child{
            margin-bottom: 0;
        }
    }
`;var Nr=n.p+"assets/rainy-day-7b18e76787dfb6ca81273ff92f95bc90.mp3",zr=n.p+"assets/Speaker_Icon-fae9f0d4d6461604556806b8a94fbb0b.svg",Br=n.p+"assets/Mute_Icon-20faca53c145e19f1d9c61855dc7f7ff.svg";var Xr=()=>{new Audio(Nr);const[e,t]=s(!1),n=o(),i=()=>{e?n.current.pause():n.current.play(),t(!e)};return r.b.createElement(r.b.Fragment,null,r.b.createElement("audio",{ref:n,src:Nr}),r.b.createElement(Hr,{"aria-pressed":e,onClick:i,onKeyDown:i,"aria-label":"Click to toggle music on and off"},r.b.createElement("img",{alt:e?"Sound playing icon":"Sound muted icon",src:e?zr:Br})))};const Hr=at.button`
    background: none;
    outline: none;
    border: none;
    z-index: 999;
    position: absolute;
    display: none;

    @media(min-width: 768px){
        display: block
    }

    img {
        width: 3rem;
    }
`;var Wr=({handleMainNavRender:e,isNavActive:t})=>r.b.createElement(r.b.Fragment,null,r.b.createElement(Gr,{style:{top:"2rem",right:"2rem"},className:"sprite-wrapper",onClick:()=>e(),onKeyDown:()=>e(),role:"button","aria-pressed":t,"aria-label":"Click to toggle navigation"},r.b.createElement(Vr,{alt:"Illustrative depiction of Zar, they have shoulder length hair and look impassive",src:"./../img/sprite.png"}),r.b.createElement($r,{alt:"Pixel art speech bubble with text that reads 'Click Me'",src:"./../img/click-me.png"})));const Gr=at.div`
    //position: fixed;
    position: absolute;
    width: 10rem;
    height: 10rem;
    z-index: 999;
    @media(min-width: 992px){
        width: 12rem;
        height: 12rem;
    }
`,$r=at.img`
    position: absolute;
    width: 10rem;
    left: -7rem;
    display: none;
    @media(min-width: 992px){
        display: block;
    }
`,Vr=at.img`
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
    animation: bounce 1s infinite;
    cursor: pointer;
`,qr={duration:.6,ease:[.43,.13,.23,.96]},Yr={hidden:{opacity:0,background:"none"},show:{opacity:1,background:"pink",transition:{duration:.01,delay:.61}},hide:{opacity:0,transition:{duration:.3}}};var Kr=({handleMainNavRender:e})=>r.b.createElement(r.b.Fragment,null,r.b.createElement(Jr,{viewBox:"0 0 1920 1080",preserveAspectRatio:"none"},r.b.createElement(c.b.path,{initial:{scaleY:0,originY:0},animate:{scaleY:1},transition:qr,className:"morph",fill:"pink"},r.b.createElement("animate",{attributeName:"d",values:"\n                        M1920.5,27.81s-143.91,5.27-254,39.62-307.44,73.32-668-19.5S.5,27.34.5,27.34V.5H1916.6Z\n                        M1920.5,1555.21s-143.91,70.43-254,529.13-307.44,979.4-668-260.34S.5,1548.89.5,1548.89V.5h1920Z",dur:"700ms",repeatCount:"0"}))),r.b.createElement(Zr,{variants:Yr,initial:"hidden",animate:"show"},r.b.createElement(Qr,{role:"navigation","aria-label":"Main navigation"},r.b.createElement(ei,{onClick:()=>e()},r.b.createElement(ot.b,{to:"/","aria-label":"Navigate to home page"},"Home")),r.b.createElement(ei,{onClick:()=>e()},r.b.createElement(ot.b,{to:"/work","aria-label":"Navigate to work page"},"Work")),r.b.createElement(ei,{onClick:()=>e()},r.b.createElement(ot.b,{to:"/about","aria-label":"Navigate to about page"},"About")),r.b.createElement(ei,{onClick:()=>e()},r.b.createElement(ot.b,{to:"/contact","aria-label":"Navigate to contact page"},"Contact")),r.b.createElement(ei,{onClick:()=>e()},r.b.createElement(ot.b,{to:"/playground","aria-label":"Navigate to playground page"},"Playground")))));const Jr=at.svg`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 105vw;
    height: 100%;
    pointer-events: none;
    z-index: 990;
    display: block;

    path {
        width: 100vw;
        animation: dripDown 700ms;
        animation-timing-function: ease-in;
    }
`,Zr=at(c.b.div)`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: pink;
    display: block;
    z-index: 997;
    transform-origin: 50% 0%;
`,Qr=at(c.b.ul)`
    margin: 0;
    padding: 0;
    list-style: none;  
    color: red;
    display: block;
    font-size: 7rem;
    position: absolute;
    top: 10rem; 
    left: 50%;
    transform: translateX(-50%);
    opacity: 1;
    font-family: 'Detechno';
    @media(min-width: 768px){
        font-size: 12rem;
        top: 5rem;
    }
    @media(min-width: 992px){
        font-size: 8rem;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    @media(min-width: 1440){
        font-size: 7vw;
    }
`,ei=at(c.b.li)`
    cursor: pointer;
    transition: all ease 300ms;

    &:hover {
        color: black;
    }

    a {
        color: red;
        transition: all ease 300ms;

        &:hover {
            color: #000;
        }
    }
`;var ti=()=>{const[e,t]=s(!1),n=()=>{t(!e)};return r.b.createElement("div",{id:"app-wrapper",className:e?"nav-active":""},r.b.createElement(ft,{config:{custom:{families:["Detechno","Roboto"]}}},r.b.createElement(ot.a,null,r.b.createElement(ni,null),r.b.createElement(Xr,null),r.b.createElement(Wr,{handleMainNavRender:n,isNavActive:e}),r.b.createElement(c.a,null,e&&r.b.createElement(Kr,{handleMainNavRender:n})),r.b.createElement(c.a,{initial:!1,exitBeforeEnter:!0},r.b.createElement(ot.d,null,r.b.createElement(ot.c,{exact:!0,path:"/"},r.b.createElement(bt,null)),r.b.createElement(ot.c,{path:"/work"},r.b.createElement(Lt,null)),r.b.createElement(ot.c,{path:"/about"},r.b.createElement(xt,null)),r.b.createElement(ot.c,{path:"/contact"},r.b.createElement(Ht,null)),r.b.createElement(ot.c,{path:"/playground"},r.b.createElement(Jt,null)),r.b.createElement(ot.c,{path:"/tokyo-bikes"},r.b.createElement(pn,null)),r.b.createElement(ot.c,{path:"/lfdm"},r.b.createElement(Mn,null)),r.b.createElement(ot.c,{path:"/parafactory"},r.b.createElement(_r,null)),r.b.createElement(ot.c,{path:"/brutalist-dunks"},r.b.createElement(Jn,null)))))))};const ni=(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var a=He.apply(void 0,[e].concat(n)),o="sc-global-"+qe(JSON.stringify(a)),s=new it(a,o);function l(e){var t=je(),n=De(),i=r.b.useContext(et),a=r.b.useRef(t.allocateGSInstance(o)).current;return r.b.useLayoutEffect((function(){return c(a,e,t,i,n),function(){return s.removeStyles(a,t)}}),[a,e,t,i,n]),null}function c(e,t,n,r,i){if(s.isStatic)s.renderStyles(e,Q,n,i);else{var a=X({},t,{theme:We(t,r,l.defaultProps)});s.renderStyles(e,a,n,i)}}return r.b.memo(l)})`
@font-face {
    font-family: 'Detechno';
    src: local('Detechno'), url(./../fonts/LL-DEtechno/LLDEtechnoTwistGX.ttf) format('truetype');
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto'), url(./../fonts/RobotoMono-VariableFont_wght.ttf) format('truetype');
}

//Stop font flickering
.wf-loading body {
    opacity: 0;
}
.wf-active body .wf-inactive body {
    opacity: 1;
}

html {
    font-size: 62.5%;
}

body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Detechno';
    background-color: #141515;
    color: #fff;
    position: relative;
}

//fix height when nav is open
#app-wrapper {
    &.nav-active {
        height: 100vh;
        overflow: hidden;
    }
}

h1 {
    font-size: 5rem;
    margin: 0;
    @media(min-width: 992px){
        font-size: 5.556vw;
    }
    @media(min-width: 1920px){
        font-size: 10.6rem;
    }
}

span.small {
    font-size: 20px;
    opacity: .5;
}


p.alt {
    font-family: 'Roboto';
}

// ANIMATION
@keyframes bounce {
  0% {top: -2px}
  50% {top: 2px}
  100% { top: -2px}
}

@keyframes fadeIn {
    0% { opacity: 0}
    100% {opacity: 1}
}

    @keyframes spin {
        0% {
        transform: translateY(0) rotate(0deg);
        }
        100% {
        transform: translateY(-100%) rotate(360deg);
        }
    }

@keyframes bounceRight {
    0% {transform: translateX(-2px)}
    50% {transform: translateX(2px)}
    100% { transform: translateX(-2px)}
  }

  @keyframes dripDown {
    0% { d: path("M1920.5,27.81s-143.91,5.27-254,39.62-307.44,73.32-668-19.5S.5,27.34.5,27.34V.5H1916.6Z"); }
    100% { d: path("M1920.5,1555.21s-143.91,70.43-254,529.13-307.44,979.4-668-260.34S.5,1548.89.5,1548.89V.5h1920Z"); }
  }

  @keyframes dripUp {
      0% { d: path("M.5,70.13s144-3,254.59-35.53,308.57-68.38,667.6,30.22,997.55,36.63,997.55,36.63l-.43,26.83H.5Z") }
      100% { d: path("M7.56,1037.66s144.23-69.77,256.37-528,311.88-978,666.83,263.38,996.75,279.63,996.75,279.63l-7,1548.37L.5,2592.35Z") }
  }

@keyframes textWiggle {
    0% {font-variation-settings: "TWST" 100}
    50% {font-variation-settings: "TWST" 50}
    100% {font-variation-settings: "TWST" 100}
}

@-webkit-keyframes GradientShift {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes GradientShift {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes GradientShift {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
`;l.a.render(r.b.createElement(ot.a,null,r.b.createElement(ti,null)),document.getElementById("app"))},function(e,t,n){"use strict";n.r(t);var r=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,i=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}((function(e){return r.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}));t.default=i}],[[59,4,1,2,3]]]);