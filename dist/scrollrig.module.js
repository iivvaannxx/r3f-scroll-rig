import e,{useLayoutEffect as r,useEffect as t,forwardRef as n,useMemo as o,useRef as i,Fragment as a,cloneElement as c,useState as u,useCallback as l,memo as s,useImperativeHandle as f}from"react";import{useThree as d,invalidate as p,useFrame as v,Canvas as m,createPortal as y,useLoader as h,addEffect as g}from"@react-three/fiber";import{ResizeObserver as b}from"@juggle/resize-observer";import{parse as w}from"query-string";import S from"zustand";import E from"react-merge-refs";import{Vector2 as O,Color as R,Scene as C,MathUtils as x,DefaultLoadingManager as T,TextureLoader as P,ImageBitmapLoader as j,Texture as I,CanvasTexture as M}from"three";import{useInView as k}from"react-intersection-observer";import _ from"debounce";import A from"vecn";import{suspend as $}from"suspend-react";import V from"supports-webp";import L from"fast-deep-equal";import D from"@studio-freight/lenis";function F(){return F=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},F.apply(this,arguments)}function U(e,r){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},U(e,r)}function N(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r.indexOf(t=i[n])>=0||(o[t]=e[t]);return o}function z(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof r?r:String(r)}var q="undefined"!=typeof window?r:t,W={PRIORITY_PRELOAD:0,PRIORITY_SCISSORS:1,PRIORITY_VIEWPORTS:1,PRIORITY_GLOBAL:1e3,DEFAULT_SCALE_MULTIPLIER:1,preloadQueue:[]},Y=S(function(e){return{debug:!1,scaleMultiplier:W.DEFAULT_SCALE_MULTIPLIER,globalRender:!0,globalPriority:W.PRIORITY_GLOBAL,globalAutoClear:!1,globalClearDepth:!0,globalRenderQueue:!1,clearGlobalRenderQueue:function(){return e(function(){return{globalRenderQueue:!1}})},isCanvasAvailable:!0,hasSmoothScrollbar:!1,canvasChildren:{},renderToCanvas:function(r,t,n){return void 0===n&&(n={}),e(function(e){var o,i=e.canvasChildren;return Object.getOwnPropertyDescriptor(i,r)?(i[r].instances+=1,i[r].props.inactive=!1,{canvasChildren:i}):{canvasChildren:F({},i,((o={})[r]={mesh:t,props:n,instances:1},o))}})},updateCanvas:function(r,t){return e(function(e){var n,o=e.canvasChildren;if(o[r]){var i=o[r],a=i.instances;return{canvasChildren:F({},o,((n={})[r]={mesh:i.mesh,props:F({},i.props,t),instances:a},n))}}})},removeFromCanvas:function(r,t){return void 0===t&&(t=!0),e(function(e){var n,o=e.canvasChildren;return(null==(n=o[r])?void 0:n.instances)>1?(o[r].instances-=1,{canvasChildren:o}):t?{canvasChildren:N(o,[r].map(z))}:(o[r].instances=0,o[r].props.inactive=!0,{canvasChildren:F({},o)})})},pageReflow:0,requestReflow:function(){e(function(e){return{pageReflow:e.pageReflow+1}})},scroll:{y:0,x:0,limit:0,velocity:0,progress:0,direction:""},scrollTo:function(e){return window.scrollTo(0,e)},onScroll:function(){return function(){}}}}),Q=function(){var e=Y(function(e){return e.requestReflow});return t(function(){"fonts"in document&&document.fonts.ready.then(function(){var r,t;r=e,t={}.timeout,"requestIdleCallback"in window?window.requestIdleCallback(r,{timeout:void 0===t?100:t}):setTimeout(r,0)})},[]),null},B=["makeDefault"],G=n(function(r,t){var n=r.makeDefault,a=void 0!==n&&n,c=N(r,B),u=d(function(e){return e.set}),l=d(function(e){return e.camera}),s=d(function(e){return e.size}),f=Y(function(e){return e.pageReflow}),p=Y(function(e){return e.scaleMultiplier}),v=o(function(){return Math.max(s.width*p,s.height*p)},[s,f,p]),m=i(null);return q(function(){var e=s.height*p;m.current.aspect=s.width*p/e,m.current.fov=180/Math.PI*2*Math.atan(e/(2*m.current.position.z)),m.current.lookAt(0,0,0),m.current.updateProjectionMatrix(),m.current.updateMatrixWorld()},[v,s,p]),q(function(){if(a&&m.current){var e=l;return u({camera:m.current}),function(){return u({camera:e})}}},[l,m,a,u]),e.createElement("perspectiveCamera",F({ref:E([m,t]),position:[0,0,v],onUpdate:function(e){return e.updateProjectionMatrix()},near:.1,far:2*v},c))}),H=["makeDefault"],J=n(function(r,t){var n=r.makeDefault,a=void 0!==n&&n,c=N(r,H),u=d(function(e){return e.set}),l=d(function(e){return e.camera}),s=d(function(e){return e.size}),f=Y(function(e){return e.pageReflow}),p=Y(function(e){return e.scaleMultiplier}),v=o(function(){return Math.max(s.width*p,s.height*p)},[s,f,p]),m=i(null);return q(function(){m.current.lookAt(0,0,0),m.current.updateProjectionMatrix(),m.current.updateMatrixWorld()},[v,s]),q(function(){if(a&&m.current){var e=l;return u({camera:m.current}),function(){return u({camera:e})}}},[l,m,a,u]),e.createElement("orthographicCamera",F({left:s.width*p/-2,right:s.width*p/2,top:s.height*p/2,bottom:s.height*p/-2,far:2*v,position:[0,0,v],near:.001,ref:E([m,t]),onUpdate:function(e){return e.updateProjectionMatrix()}},c))});function X(e,r){e&&(!1===r?(e.wasFrustumCulled=e.frustumCulled,e.wasVisible=e.visible,e.visible=!0,e.frustumCulled=!1):(e.visible=!!e.wasVisible,e.frustumCulled=!!e.wasFrustumCulled),e.children.forEach(function(e){return X(e,r)}))}var K=new O,Z=function(e){void 0===e&&(e=[0]),Y.getState().globalRenderQueue=Y.getState().globalRenderQueue||[0],Y.getState().globalRenderQueue=[].concat(Y.getState().globalRenderQueue||[],e)},ee=function(e){var r=e.gl,t=e.scene,n=e.camera,o=e.left,i=e.top,a=e.width,c=e.height,u=e.layer,l=void 0===u?0:u,s=e.autoClear,f=e.clearDepth,d=void 0===f||f;if(t&&n){var p=r.autoClear;r.autoClear=void 0!==s&&s,r.setScissor(o,i,a,c),r.setScissorTest(!0),n.layers.set(l),d&&r.clearDepth(),r.render(t,n),r.setScissorTest(!1),r.autoClear=p}},re=function(e){var r=e.gl,t=e.scene,n=e.camera,o=e.left,i=e.top,a=e.width,c=e.height,u=e.layer,l=void 0===u?0:u,s=e.scissor,f=void 0===s||s,d=e.autoClear,p=void 0!==d&&d,v=e.clearDepth,m=void 0===v||v;if(t&&n){var y=r.autoClear;r.getSize(K),r.autoClear=p,r.setViewport(o,i,a,c),r.setScissor(o,i,a,c),r.setScissorTest(f),n.layers.set(l),m&&r.clearDepth(),r.render(t,n),r.setScissorTest(!1),r.setViewport(0,0,K.x,K.y),r.autoClear=y}},te=function(e,r,t,n){void 0===t&&(t=0),e&&r&&(W.preloadQueue.push(function(o){o.setScissorTest(!1),X(e,!1),r.layers.set(t),o.render(e,r),X(e,!0),n&&n()}),p())},ne=function(){var e=Y(function(e){return e.isCanvasAvailable}),r=Y(function(e){return e.hasSmoothScrollbar}),n=Y(function(e){return e.requestReflow}),o=Y(function(e){return e.debug}),i=Y(function(e){return e.scaleMultiplier});return t(function(){o&&(window._scrollRig=window._scrollRig||{},window._scrollRig.reflow=n)},[]),{debug:o,isCanvasAvailable:e,hasSmoothScrollbar:r,scaleMultiplier:i,preloadScene:te,requestRender:Z,renderScissor:ee,renderViewport:re,reflow:n}},oe=function(r){var n=r.children,o=Y(function(e){return e.canvasChildren}),i=ne();return t(function(){Object.keys(o).length||(i.debug&&console.log("GlobalRenderer","auto render empty canvas"),i.requestRender(),p())},[o]),i.debug&&console.log("GlobalChildren",Object.keys(o).length),e.createElement(e.Fragment,null,n,Object.keys(o).map(function(r){var t=o[r],n=t.mesh,u=t.props;return"function"==typeof n?e.createElement(a,{key:r},n(F({key:r},i,u))):c(n,F({key:r},u))}))},ie=function(){var e=d(function(e){return e.gl}),r=d(function(e){return e.frameloop}),t=Y(function(e){return e.globalClearDepth}),n=Y(function(e){return e.globalAutoClear}),o=Y(function(e){return e.globalPriority}),i=ne();return q(function(){e.debug.checkShaderErrors=i.debug},[i.debug]),v(function(){W.preloadQueue.length&&(e.autoClear=!1,W.preloadQueue.forEach(function(r){return r(e)}),e.clear(),W.preloadQueue=[],e.autoClear=!0,i.debug&&console.log("GlobalRenderer","preload complete. trigger global render"),i.requestRender(),p())},W.PRIORITY_PRELOAD),v(function(o){var i=o.camera,a=o.scene,c=Y.getState().globalRenderQueue;("always"===r||c)&&(e.autoClear=n,i.layers.disableAll(),c?c.forEach(function(e){i.layers.enable(e)}):i.layers.enable(0),t&&e.clearDepth(),e.render(a,i),e.autoClear=!0),Y.getState().clearGlobalRenderQueue()},o),null};function ae(e){var r={exports:{}};return e(r,r.exports),r.exports}var ce="function"==typeof Symbol&&Symbol.for,ue=ce?Symbol.for("react.element"):60103,le=ce?Symbol.for("react.portal"):60106,se=ce?Symbol.for("react.fragment"):60107,fe=ce?Symbol.for("react.strict_mode"):60108,de=ce?Symbol.for("react.profiler"):60114,pe=ce?Symbol.for("react.provider"):60109,ve=ce?Symbol.for("react.context"):60110,me=ce?Symbol.for("react.async_mode"):60111,ye=ce?Symbol.for("react.concurrent_mode"):60111,he=ce?Symbol.for("react.forward_ref"):60112,ge=ce?Symbol.for("react.suspense"):60113,be=ce?Symbol.for("react.suspense_list"):60120,we=ce?Symbol.for("react.memo"):60115,Se=ce?Symbol.for("react.lazy"):60116,Ee=ce?Symbol.for("react.block"):60121,Oe=ce?Symbol.for("react.fundamental"):60117,Re=ce?Symbol.for("react.responder"):60118,Ce=ce?Symbol.for("react.scope"):60119;function xe(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case ue:switch(e=e.type){case me:case ye:case se:case de:case fe:case ge:return e;default:switch(e=e&&e.$$typeof){case ve:case he:case Se:case we:case pe:return e;default:return r}}case le:return r}}}function Te(e){return xe(e)===ye}var Pe={AsyncMode:me,ConcurrentMode:ye,ContextConsumer:ve,ContextProvider:pe,Element:ue,ForwardRef:he,Fragment:se,Lazy:Se,Memo:we,Portal:le,Profiler:de,StrictMode:fe,Suspense:ge,isAsyncMode:function(e){return Te(e)||xe(e)===me},isConcurrentMode:Te,isContextConsumer:function(e){return xe(e)===ve},isContextProvider:function(e){return xe(e)===pe},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===ue},isForwardRef:function(e){return xe(e)===he},isFragment:function(e){return xe(e)===se},isLazy:function(e){return xe(e)===Se},isMemo:function(e){return xe(e)===we},isPortal:function(e){return xe(e)===le},isProfiler:function(e){return xe(e)===de},isStrictMode:function(e){return xe(e)===fe},isSuspense:function(e){return xe(e)===ge},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===se||e===ye||e===de||e===fe||e===ge||e===be||"object"==typeof e&&null!==e&&(e.$$typeof===Se||e.$$typeof===we||e.$$typeof===pe||e.$$typeof===ve||e.$$typeof===he||e.$$typeof===Oe||e.$$typeof===Re||e.$$typeof===Ce||e.$$typeof===Ee)},typeOf:xe},je=ae(function(e,r){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,c=e?Symbol.for("react.provider"):60109,u=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,s=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,v=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,y=e?Symbol.for("react.block"):60121,h=e?Symbol.for("react.fundamental"):60117,g=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:var p=e.type;switch(p){case l:case s:case o:case a:case i:case d:return p;default:var y=p&&p.$$typeof;switch(y){case u:case f:case m:case v:case c:return y;default:return r}}case n:return r}}}var S=s,E=u,O=c,R=t,C=f,x=o,T=m,P=v,j=n,I=a,M=i,k=d,_=!1;function A(e){return w(e)===s}r.AsyncMode=l,r.ConcurrentMode=S,r.ContextConsumer=E,r.ContextProvider=O,r.Element=R,r.ForwardRef=C,r.Fragment=x,r.Lazy=T,r.Memo=P,r.Portal=j,r.Profiler=I,r.StrictMode=M,r.Suspense=k,r.isAsyncMode=function(e){return _||(_=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||w(e)===l},r.isConcurrentMode=A,r.isContextConsumer=function(e){return w(e)===u},r.isContextProvider=function(e){return w(e)===c},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},r.isForwardRef=function(e){return w(e)===f},r.isFragment=function(e){return w(e)===o},r.isLazy=function(e){return w(e)===m},r.isMemo=function(e){return w(e)===v},r.isPortal=function(e){return w(e)===n},r.isProfiler=function(e){return w(e)===a},r.isStrictMode=function(e){return w(e)===i},r.isSuspense=function(e){return w(e)===d},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===s||e===a||e===i||e===d||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===v||e.$$typeof===c||e.$$typeof===u||e.$$typeof===f||e.$$typeof===h||e.$$typeof===g||e.$$typeof===b||e.$$typeof===y)},r.typeOf=w}()}),Ie=ae(function(e){e.exports="production"===process.env.NODE_ENV?Pe:je}),Me=Object.getOwnPropertySymbols,ke=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;function Ae(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var $e=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;var n=Object.getOwnPropertyNames(r).map(function(e){return r[e]});if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,r){for(var t,n,o=Ae(e),i=1;i<arguments.length;i++){for(var a in t=Object(arguments[i]))ke.call(t,a)&&(o[a]=t[a]);if(Me){n=Me(t);for(var c=0;c<n.length;c++)_e.call(t,n[c])&&(o[n[c]]=t[n[c]])}}return o},Ve=Function.call.bind(Object.prototype.hasOwnProperty),Le="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",De=Ve,Fe=function(){};if("production"!==process.env.NODE_ENV){var Ue=Le,Ne={},ze=De;Fe=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}}function qe(e,r,t,n,o){if("production"!==process.env.NODE_ENV)for(var i in e)if(ze(e,i)){var a;try{if("function"!=typeof e[i]){var c=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}a=e[i](r,i,n,t,null,Ue)}catch(e){a=e}if(!a||a instanceof Error||Fe((n||"React class")+": type specification of "+t+" `"+i+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof a+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),a instanceof Error&&!(a.message in Ne)){Ne[a.message]=!0;var u=o?o():"";Fe("Failed "+t+" type: "+a.message+(null!=u?u:""))}}}qe.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(Ne={})};var We=qe,Ye=function(){};function Qe(){return null}function Be(){}function Ge(){}"production"!==process.env.NODE_ENV&&(Ye=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}),Ge.resetWarningCache=Be;var He=ae(function(e){e.exports="production"!==process.env.NODE_ENV?function(e,r){var t="function"==typeof Symbol&&Symbol.iterator,n="<<anonymous>>",o={array:u("array"),bigint:u("bigint"),bool:u("boolean"),func:u("function"),number:u("number"),object:u("object"),string:u("string"),symbol:u("symbol"),any:c(Qe),arrayOf:function(e){return c(function(r,t,n,o,i){if("function"!=typeof e)return new a("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var c=r[t];if(!Array.isArray(c))return new a("Invalid "+o+" `"+i+"` of type `"+f(c)+"` supplied to `"+n+"`, expected an array.");for(var u=0;u<c.length;u++){var l=e(c,u,n,o,i+"["+u+"]",Le);if(l instanceof Error)return l}return null})},element:c(function(r,t,n,o,i){var c=r[t];return e(c)?null:new a("Invalid "+o+" `"+i+"` of type `"+f(c)+"` supplied to `"+n+"`, expected a single ReactElement.")}),elementType:c(function(e,r,t,n,o){var i=e[r];return Ie.isValidElementType(i)?null:new a("Invalid "+n+" `"+o+"` of type `"+f(i)+"` supplied to `"+t+"`, expected a single ReactElement type.")}),instanceOf:function(e){return c(function(r,t,o,i,c){return r[t]instanceof e?null:new a("Invalid "+i+" `"+c+"` of type `"+((u=r[t]).constructor&&u.constructor.name?u.constructor.name:n)+"` supplied to `"+o+"`, expected instance of `"+(e.name||n)+"`.");var u})},node:c(function(e,r,t,n,o){return s(e[r])?null:new a("Invalid "+n+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")}),objectOf:function(e){return c(function(r,t,n,o,i){if("function"!=typeof e)return new a("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var c=r[t],u=f(c);if("object"!==u)return new a("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+n+"`, expected an object.");for(var l in c)if(De(c,l)){var s=e(c,l,n,o,i+"."+l,Le);if(s instanceof Error)return s}return null})},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&Ye(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),Qe;function r(r,t,n,o,c){for(var u=r[t],l=0;l<e.length;l++)if(i(u,e[l]))return null;var s=JSON.stringify(e,function(e,r){return"symbol"===d(r)?String(r):r});return new a("Invalid "+o+" `"+c+"` of value `"+String(u)+"` supplied to `"+n+"`, expected one of "+s+".")}return c(r)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&Ye("Invalid argument supplied to oneOfType, expected an instance of array."),Qe;for(var r=0;r<e.length;r++){var t=e[r];if("function"!=typeof t)return Ye("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+p(t)+" at index "+r+"."),Qe}return c(function(r,t,n,o,i){for(var c=[],u=0;u<e.length;u++){var l=(0,e[u])(r,t,n,o,i,Le);if(null==l)return null;l.data&&De(l.data,"expectedType")&&c.push(l.data.expectedType)}return new a("Invalid "+o+" `"+i+"` supplied to `"+n+"`"+(c.length>0?", expected one of type ["+c.join(", ")+"]":"")+".")})},shape:function(e){return c(function(r,t,n,o,i){var c=r[t],u=f(c);if("object"!==u)return new a("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+n+"`, expected `object`.");for(var s in e){var p=e[s];if("function"!=typeof p)return l(n,o,i,s,d(p));var v=p(c,s,n,o,i+"."+s,Le);if(v)return v}return null})},exact:function(e){return c(function(r,t,n,o,i){var c=r[t],u=f(c);if("object"!==u)return new a("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+n+"`, expected `object`.");var s=$e({},r[t],e);for(var p in s){var v=e[p];if(De(e,p)&&"function"!=typeof v)return l(n,o,i,p,d(v));if(!v)return new a("Invalid "+o+" `"+i+"` key `"+p+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(r[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=v(c,p,n,o,i+"."+p,Le);if(m)return m}return null})}};function i(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function a(e,r){this.message=e,this.data=r&&"object"==typeof r?r:{},this.stack=""}function c(e){function r(r,t,o,i,c,u,l){if(i=i||n,u=u||o,l!==Le){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}return null==t[o]?r?new a(null===t[o]?"The "+c+" `"+u+"` is marked as required in `"+i+"`, but its value is `null`.":"The "+c+" `"+u+"` is marked as required in `"+i+"`, but its value is `undefined`."):null:e(t,o,i,c,u)}process;var t=r.bind(null,!1);return t.isRequired=r.bind(null,!0),t}function u(e){return c(function(r,t,n,o,i,c){var u=r[t];return f(u)!==e?new a("Invalid "+o+" `"+i+"` of type `"+d(u)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null})}function l(e,r,t,n,o){return new a((e||"React class")+": "+r+" type `"+t+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function s(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(s);if(null===r||e(r))return!0;var n=function(e){var r=e&&(t&&e[t]||e["@@iterator"]);if("function"==typeof r)return r}(r);if(!n)return!1;var o,i=n.call(r);if(n!==r.entries){for(;!(o=i.next()).done;)if(!s(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!s(a[1]))return!1}return!0;default:return!1}}function f(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function d(e){if(null==e)return""+e;var r=f(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function p(e){var r=d(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return a.prototype=Error.prototype,o.checkPropTypes=We,o.resetWarningCache=We.resetWarningCache,o.PropTypes=o,o}(Ie.isElement):function(){function e(e,r,t,n,o,i){if(i!==Le){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:Ge,resetWarningCache:Be};return t.PropTypes=t,t}()}),Je=/*#__PURE__*/function(e){var r,t;function n(r){var t;return(t=e.call(this,r)||this).state={error:!1},t.props=r,t}return t=e,(r=n).prototype=Object.create(t.prototype),r.prototype.constructor=r,U(r,t),n.getDerivedStateFromError=function(e){return{error:e}},n.prototype.render=function(){return this.state.error?(this.props.onError&&this.props.onError(this.state.error),null):this.props.children},n}(e.Component);Je.propTypes={onError:He.func};var Xe=["as","children","gl","style","orthographic","camera","debug","scaleMultiplier","globalRender","globalPriority","globalAutoClear","globalClearDepth"],Ke=["children","onError"],Ze=function(r){var t=r.as,n=void 0===t?m:t,o=r.children,i=r.gl,a=r.style,c=r.orthographic,u=r.camera,l=r.debug,s=r.scaleMultiplier,f=void 0===s?W.DEFAULT_SCALE_MULTIPLIER:s,d=r.globalRender,p=void 0===d||d,v=r.globalPriority,y=void 0===v?W.PRIORITY_GLOBAL:v,h=r.globalAutoClear,g=void 0!==h&&h,S=r.globalClearDepth,E=void 0===S||S,O=N(r,Xe),R=Y(function(e){return e.globalRender});return q(function(){var e=w(window.location.search);(l||void 0!==e.debug)&&Y.setState({debug:!0})},[l]),q(function(){Y.setState({scaleMultiplier:f,globalRender:p,globalPriority:y,globalAutoClear:g,globalClearDepth:E})},[f,y,p,g,E]),e.createElement(n,F({id:"ScrollRig-canvas",camera:null,gl:F({failIfMajorPerformanceCaveat:!0},i),resize:{scroll:!1,debounce:0,polyfill:b},style:F({position:"fixed",top:0,left:0,right:0,height:"100vh"},a)},O),"function"==typeof o?o(e.createElement(oe,null)):e.createElement(oe,null,o),R&&e.createElement(ie,null),!c&&e.createElement(G,F({makeDefault:!0},u)),c&&e.createElement(J,F({makeDefault:!0},u)),e.createElement(Q,null))},er=function(r){var t=r.children,n=r.onError,o=N(r,Ke);return q(function(){document.documentElement.classList.add("js-has-global-canvas")},[]),e.createElement(Je,{onError:function(e){n&&n(e),Y.setState({isCanvasAvailable:!1}),document.documentElement.classList.remove("js-has-global-canvas"),document.documentElement.classList.add("js-global-canvas-error")}},e.createElement(Ze,F({},o),t),e.createElement("noscript",null,e.createElement("style",null,"\n          .ScrollRig-visibilityHidden,\n          .ScrollRig-transparentColor {\n            visibility: unset;\n            color: unset;\n          }\n          ")))},rr=function(r){return e.createElement("mesh",{scale:r.scale},e.createElement("planeGeometry",null),e.createElement("shaderMaterial",{args:[{uniforms:{color:{value:new R("hotpink")}},vertexShader:"\n            void main() {\n              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n            }\n          ",fragmentShader:"\n            uniform vec3 color;\n            uniform float opacity;\n            void main() {\n              gl_FragColor.rgba = vec4(color, .5);\n            }\n          "}],transparent:!0}))},tr="undefined"!=typeof window;function nr(){var e=u({width:tr?window.innerWidth:Infinity,height:tr?window.innerHeight:Infinity}),r=e[0],n=e[1];return t(function(){var e=document.getElementById("ScrollRig-canvas");function r(){n({width:e?e.clientWidth:window.innerWidth,height:e?e.clientHeight:window.innerHeight})}var t,o=_.debounce(r,200);return e?(t=new ResizeObserver(o)).observe(e):window.addEventListener("resize",o),r(),function(){var e;window.removeEventListener("resize",o),null==(e=t)||e.disconnect()}},[]),r}function or(e,r,t,n,o){return n+(e-r)*(o-n)/(t-r)}var ir=function(){return{enabled:Y(function(e){return e.hasSmoothScrollbar}),scroll:Y(function(e){return e.scroll}),scrollTo:Y(function(e){return e.scrollTo}),onScroll:Y(function(e){return e.onScroll})}};function ar(e,r){var n=nr(),a=ir(),c=a.scroll,s=a.onScroll,f=Y(function(e){return e.scaleMultiplier}),d=Y(function(e){return e.pageReflow}),p=o(function(){var e={rootMargin:"50%",threshold:0,autoUpdate:!0,wrapper:window},t=r||{};return Object.keys(t).map(function(r,n){void 0!==t[r]&&(e[r]=t[r])}),e},[r]),v=p.autoUpdate,m=p.wrapper,y=k({rootMargin:p.rootMargin,threshold:p.threshold}),h=y.ref,g=y.inView;q(function(){h(e.current)},[e]);var b=u(),w=b[0],S=b[1],E=i({inViewport:!1,progress:-1,visibility:-1,viewport:-1}).current,O=i({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0}).current,R=u(O),C=R[0],x=R[1],T=i({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0,positiveYUpBottom:0}).current,P=i(A.vec3(0,0,0)).current;q(function(){var r,t=null==(r=e.current)?void 0:r.getBoundingClientRect(),n=m===window?m.scrollY:m.scrollTop,o=m===window?m.scrollX:m.scrollLeft;O.top=t.top+n,O.bottom=t.bottom+n,O.left=t.left+o,O.right=t.right+o,O.width=t.width,O.height=t.height,O.x=O.left+.5*t.width,O.y=O.top+.5*t.height,x(F({},O)),S(A.vec3((null==O?void 0:O.width)*f,(null==O?void 0:O.height)*f,1))},[e,n,d,f]);var j=l(function(r){var t=void 0===r?{}:r,o=t.onlyUpdateInViewport,i=t.scroll,a=void 0===i?c:i;if(e.current&&(void 0!==o&&!o||E.inViewport)){!function(e,r,t,n){e.top=r.top-t.y,e.bottom=r.bottom-t.y,e.left=r.left-t.x,e.right=r.right-t.x,e.width=r.width,e.height=r.height,e.x=e.left+.5*r.width-.5*n.width,e.y=e.top+.5*r.height-.5*n.height,e.positiveYUpBottom=n.height-e.bottom}(T,O,a,n),function(e,r,t){e.x=r.x*t,e.y=-1*r.y*t}(P,T,f);var u="horizontal"===a.direction,l=u?"width":"height",s=n[l]-T[u?"left":"top"];E.progress=or(s,0,n[l]+T[l],0,1),E.visibility=or(s,0,T[l],0,1),E.viewport=or(s,0,n[l],0,1)}},[e,n,f,c]);return q(function(){E.inViewport=g,j({onlyUpdateInViewport:!1})},[g]),q(function(){j({onlyUpdateInViewport:!1})},[j]),t(function(){if(v)return s(function(e){return j()})},[v,j,s]),{rect:C,bounds:T,scale:w,position:P,scrollState:E,inViewport:g,update:function(e){return j(F({onlyUpdateInViewport:!1},e))}}}var cr=["track","children","margin","inViewportMargin","inViewportThreshold","visible","hideOffscreen","scissor","debug","as","renderOrder","priority"],ur=s(function(r){var t=r.track,n=r.children,o=r.margin,i=void 0===o?0:o,a=r.inViewportMargin,c=r.inViewportThreshold,s=r.visible,f=void 0===s||s,d=r.hideOffscreen,p=void 0===d||d,m=r.scissor,h=void 0!==m&&m,g=r.debug,b=void 0!==g&&g,w=r.as,S=void 0===w?"scene":w,E=r.renderOrder,O=void 0===E?1:E,R=r.priority,x=void 0===R?W.PRIORITY_SCISSORS:R,T=N(r,cr),P=l(function(e){null!==e&&M(e)},[]),j=u(h?new C:null),I=j[0],M=j[1],k=ne(),_=k.requestRender,A=k.renderScissor,$=Y(function(e){return e.globalRender}),V=ar(t,{rootMargin:a,threshold:c}),L=V.bounds,D=V.scale,U=V.position,z=V.scrollState,Q=V.inViewport;q(function(){I&&(I.visible=p?Q&&f:f)},[I,Q,p,f]),v(function(e){var r=e.gl,t=e.camera;I&&D&&I.visible&&(I.position.y=U.y,I.position.x=U.x,h?A({gl:r,scene:I,camera:t,left:L.left-i,top:L.positiveYUpBottom-i,width:L.width+2*i,height:L.height+2*i}):_())},$?x:void 0);var B=e.createElement("group",{renderOrder:O},(!n||b)&&D&&e.createElement(rr,{scale:D}),n&&I&&D&&n(F({track:t,margin:i,renderOrder:O,scale:D,scrollState:z,inViewport:Q,scene:I,priority:x+O},T))),G=S;return h&&I?y(B,I):e.createElement(G,{ref:P},B)}),lr=["track","children","margin","inViewportMargin","inViewportThreshold","visible","hideOffscreen","debug","orthographic","renderOrder","priority"],sr=s(function(r){var t=r.track,n=r.children,o=r.margin,a=void 0===o?0:o,c=r.inViewportMargin,s=r.inViewportThreshold,f=r.visible,d=void 0===f||f,m=r.hideOffscreen,h=void 0===m||m,g=r.debug,b=void 0!==g&&g,w=r.orthographic,S=void 0!==w&&w,E=r.renderOrder,O=void 0===E?1:E,R=r.priority,x=void 0===R?W.PRIORITY_VIEWPORTS:R,T=N(r,lr),P=i(null),j=u(function(){return new C})[0],I=ne().renderViewport,M=Y(function(e){return e.pageReflow}),k=Y(function(e){return e.scaleMultiplier}),_=ar(t,{rootMargin:c,threshold:s}),A=_.rect,$=_.bounds,V=_.scale,L=_.position,D=_.scrollState,U=_.inViewport;q(function(){j.visible=h?U&&d:d},[U,h,d]);var z=u(0),Q=z[0],B=z[1];q(function(){if(A){var e=A.width*k,r=A.height*k,t=Math.max(e,r);B(t),P.current&&!S&&(P.current.aspect=(e+2*a*k)/(r+2*a*k),P.current.fov=180/Math.PI*2*Math.atan((r+2*a*k)/(2*t)),P.current.updateProjectionMatrix(),P.current.updateMatrixWorld()),p()}},[t,M,A,k]);var G=l(function(e,r){t.current&&e.target===t.current&&(r.pointer.set((e.clientX-$.left+a)/($.width+2*a)*2-1,-(e.clientY-$.top+a)/($.height+2*a)*2+1),r.raycaster.setFromCamera(r.pointer,P.current))},[$,L]);return v(function(e){j&&V&&j.visible&&I({gl:e.gl,scene:j,camera:P.current,left:$.left-a,top:$.positiveYUpBottom-a,width:$.width+2*a,height:$.height+2*a})},x),$&&y(e.createElement(e.Fragment,null,!S&&e.createElement("perspectiveCamera",{ref:P,position:[0,0,Q],onUpdate:function(e){return e.updateProjectionMatrix()}}),S&&V&&e.createElement("orthographicCamera",{ref:P,position:[0,0,Q],onUpdate:function(e){return e.updateProjectionMatrix()},left:V[0]/-2,right:V[0]/2,top:V[1]/2,bottom:V[1]/-2,far:2*Q,near:.001}),e.createElement("group",{renderOrder:O},(!n||b)&&V&&e.createElement(rr,{scale:V}),n&&j&&V&&n(F({track:t,margin:a,renderOrder:O,scale:V,scrollState:D,inViewport:U,scene:j,camera:P.current,priority:x+O},T)))),j,{events:{compute:G,priority:x},size:{width:A.width,height:A.height}})});function fr(e,r,n){void 0===r&&(r={});var i=void 0===n?{}:n,a=i.key,c=i.dispose,u=void 0===c||c,s=Y(function(e){return e.updateCanvas}),f=Y(function(e){return e.renderToCanvas}),d=Y(function(e){return e.removeFromCanvas}),p=o(function(){return a||x.generateUUID()},[]);q(function(){f(p,e,{inactive:!1})},[p]),t(function(){return function(){d(p,u)}},[p]);var v=l(function(e){s(p,e)},[s,p]);return t(function(){v(r)},[].concat(Object.values(r))),v}var dr=["children","id"],pr=n(function(e,r){var t=e.id;return fr(e.children,F({},N(e,dr),{ref:r}),{key:t}),null}),vr=!1;function mr(e,r){var n,i,a,c=void 0===r?{}:r,u=c.initTexture,l=void 0===u||u,s=c.premultiplyAlpha,f=void 0===s?"default":s,p=d(function(e){return e.gl}),v=nr(),m=Y(function(e){return e.debug}),y=$(function(){return T.itemStart("waiting for DOM image"),new Promise(function(r){var t=e.current;function n(){r(null==t?void 0:t.currentSrc)}null==t||t.addEventListener("load",n,{once:!0}),null!=t&&t.complete&&(null==t||t.removeEventListener("load",n),n())})},[e,v],{equal:L}),g=(n=!0===/^((?!chrome|android).)*safari/i.test(navigator.userAgent),a=(i=navigator.userAgent.indexOf("Firefox")>-1)?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1,"undefined"==typeof createImageBitmap||n||i&&a<98?P:j),b=h(g,y,function(e){e instanceof j&&(e.setOptions({colorSpaceConversion:"none",premultiplyAlpha:f,imageOrientation:"flipY"}),e.setRequestHeader({Accept:(vr?"image/webp,":"")+"*/*"}))}),w=o(function(){return b instanceof I?b:b instanceof ImageBitmap?new M(b):void 0},[b]);return t(function(){l&&p.initTexture(w),T.itemEnd("waiting for DOM image"),m&&console.log("useImageAsTexture","initTexture()")},[p,w,l]),w}V.then(function(e){vr=e});var yr=["children","duration","easing","smooth","direction","config"],hr=function(e){return 1===e?1:1-Math.pow(2,-10*e)},gr=n(function(e,r){var n=e.children,o=e.duration,a=void 0===o?1:o,c=e.easing,u=void 0===c?hr:c,l=e.smooth,s=void 0===l||l,d=e.direction,p=void 0===d?"vertical":d,v=e.config,m=N(e,yr),y=i();return f(r,function(){return{start:function(){var e;return null==(e=y.current)?void 0:e.start()},stop:function(){var e;return null==(e=y.current)?void 0:e.stop()},on:function(e,r){var t;return null==(t=y.current)?void 0:t.on(e,r)},once:function(e,r){var t;return null==(t=y.current)?void 0:t.once(e,r)},off:function(e,r){var t;return null==(t=y.current)?void 0:t.off(e,r)},notify:function(){var e;return null==(e=y.current)?void 0:e.notify()},scrollTo:function(e,r){var t;return null==(t=y.current)?void 0:t.scrollTo(e,r)},raf:function(e){var r;return null==(r=y.current)?void 0:r.raf(e)}}}),t(function(){var e=y.current=new D(F({duration:a,easing:u,smooth:s,direction:p},v));return function(){e.destroy()}},[a,u,s,p]),n&&n(m)}),br=function(r){var n=r.children,a=r.enabled,c=void 0===a||a,u=r.locked,s=void 0!==u&&u,f=r.scrollRestoration,d=void 0===f?"auto":f,v=r.disablePointerOnScroll,m=void 0===v||v,y=r.horizontal,h=void 0!==y&&y,b=r.scrollInContainer,w=void 0!==b&&b,S=r.updateGlobalState,E=void 0===S||S,O=r.onScroll,R=r.config,C=i(),x=i(),T=i(!1),P=Y(function(e){return e.scroll}),j=function(e){m&&C.current&&T.current!==e&&(T.current=e,C.current.style.pointerEvents=e?"none":"auto")},I=l(function(){j(!1)},[]),M=l(function(e){var r;return null==(r=x.current)||r.on("scroll",e),function(){var r;return null==(r=x.current)?void 0:r.off("scroll",e)}},[]);q(function(){"scrollRestoration"in window.history&&(window.history.scrollRestoration=d)},[]),t(function(){var e,r,t,n=g(function(e){var r;return null==(r=x.current)?void 0:r.raf(e)});null==(e=x.current)||e.on("scroll",function(e){var r=e.scroll,t=e.limit,n=e.velocity,o=e.direction,i=e.progress;E&&(P.y="vertical"===o?r:0,P.x="horizontal"===o?r:0,P.limit=t,P.velocity=n,P.direction=o,P.progress=i);var a=_.debounce(function(){return j(!0)},100,!0);Math.abs(n)>1.4?a():j(!1),O&&O({scroll:r,limit:t,velocity:n,direction:o,progress:i}),p()}),null==(r=x.current)||r.notify(),E&&(Y.setState({scrollTo:null==(t=x.current)?void 0:t.scrollTo}),Y.setState({onScroll:M}),Y.getState().scroll.y=window.scrollY,Y.getState().scroll.x=window.scrollX),document.documentElement.classList.toggle("js-smooth-scrollbar-enabled",c),document.documentElement.classList.toggle("js-smooth-scrollbar-disabled",!c),Y.setState({hasSmoothScrollbar:c});var o=function(){return p()};return window.addEventListener("pointermove",I),window.addEventListener("wheel",o),function(){n(),window.removeEventListener("pointermove",I),window.removeEventListener("wheel",o)}},[c]),t(function(){var e,r;s?null==(e=x.current)||e.stop():null==(r=x.current)||r.start()},[s]);var k=o(function(){if("undefined"==typeof document)return{};var e=document.documentElement,r=document.body,t=document.body.firstElementChild;return e.classList.toggle("ScrollRig-scrollHtml",w),r.classList.toggle("ScrollRig-scrollWrapper",w),{wrapper:r,content:t}},[w]);return e.createElement(gr,{ref:x,smooth:c,direction:h?"horizontal":"vertical",config:F(w?{smoothTouch:!0,wrapper:k.wrapper,content:k.content}:{},R)},function(e){return n(F({},e,{ref:C}))})},wr={hidden:"ScrollRig-visibilityHidden",hiddenWhenSmooth:"ScrollRig-visibilityHidden ScrollRig-hiddenIfSmooth",transparentColor:"ScrollRig-transparentColor",transparentColorWhenSmooth:"ScrollRig-transparentColor ScrollRig-hiddenIfSmooth"};export{er as GlobalCanvas,ur as ScrollScene,br as SmoothScrollbar,pr as UseCanvas,sr as ViewportScrollScene,wr as styles,fr as useCanvas,Y as useCanvasStore,mr as useImageAsTexture,ne as useScrollRig,ir as useScrollbar,ar as useTracker};
//# sourceMappingURL=scrollrig.module.js.map
