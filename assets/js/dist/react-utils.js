!function(){"use strict";var e={d:function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,c=[],a=!0,f=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);a=!0);}catch(e){f=!0,o=e}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(f)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.r(t),e.d(t,{ConditionalWrapper:function(){return o},FadeIn:function(){return a},create:function(){return W},getComponents:function(){return p},useFocusTrap:function(){return F},useScript:function(){return O},useStateWithDep:function(){return $}});var o=function(e){var t=e.condition,r=e.wrapper,n=e.children;return t?r(n):n},i=gform.libraries,u=i.React.useState,c=i.React.useEffect;function a(e){var t=n(u(0),2),r=t[0],o=t[1],a="number"==typeof e.transitionDuration?e.transitionDuration:400,f="number"==typeof e.transformDistance?e.transformDistance:20,l="number"==typeof e.delay?e.delay:50,s=e.wrapperTag||"div",d=e.childTag||"div",p=void 0===e.visible||e.visible;return c((function(){var t=i.React.Children.count(e.children);if(p||(t=0),t===r){var n=setTimeout((function(){e.onComplete&&e.onComplete()}),a);return function(){return clearTimeout(n)}}var u=t>r?1:-1,c=setTimeout((function(){o(r+u)}),l);return function(){return clearTimeout(c)}}),[i.React.Children.count(e.children),l,r,p,a]),i.React.createElement(s,{className:e.className},i.React.Children.map(e.children,(function(t,n){return i.React.createElement(d,{className:e.childClassName,style:{transition:"opacity ".concat(a,"ms, transform ").concat(a,"ms"),transform:r>n?"none":"translateY(".concat(f,"px)"),opacity:r>n?1:0}},t)})))}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function l(e,t,r){return n=function(e,t){if("object"!=f(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==f(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e;var n}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){return Object.keys(e).reduce((function(r,n){var o=t[n]||{};return r[n]={component:o.component||e[n],props:d({$style:o.style},o.props)},r}),{})}var m=["src","checkForExisting"],y=i.React.useState,v=i.React.useEffect,b="undefined"!=typeof window&&void 0!==window.document,g={},h=function(e){var t=document.querySelector('script[src="'.concat(e,'"]'));if(t)return g[e]={loading:!1,error:null,scriptEl:t}};function O(e){var t=e.src,r=e.checkForExisting,o=void 0!==r&&r,i=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,m),u=t?g[t]:void 0;!u&&o&&t&&b&&(u=h(t));var c=n(y(u?u.loading:Boolean(t)),2),a=c[0],f=c[1],l=n(y(u?u.error:null),2),s=l[0],d=l[1];return v((function(){if(b&&t&&a&&!s){var e;!(u=g[t])&&o&&(u=h(t)),u?e=u.scriptEl:((e=document.createElement("script")).src=t,Object.keys(i).forEach((function(t){void 0===e[t]?e.setAttribute(t,i[t]):e[t]=i[t]})),u=g[t]={loading:!0,error:null,scriptEl:e});var r=function(){u&&(u.loading=!1),f(!1)},n=function(e){u&&(u.error=e),d(e)};return e.addEventListener("load",r),e.addEventListener("error",n),document.body.appendChild(e),function(){e.removeEventListener("load",r),e.removeEventListener("error",n)}}}),[t]),[a,s]}var w=gform.utils,j=/input|select|textarea|button|object/,S="a, input, select, textarea, button, object, [tabindex]";function E(e){var t=e.getAttribute("tabindex");return null===t&&(t=void 0),parseInt(t,10)}function P(e){var t=e.nodeName.toLowerCase(),r=!isNaN(E(e));return(j.test(t)&&!e.disabled||e instanceof HTMLAnchorElement&&e.href||r)&&function(e){for(var t,r=e;r&&r!==document.body;){if(t=r,!(0,w.isJestTest)()&&(t.offsetWidth<=0&&t.offsetHeight<=0||"none"===t.style.display))return!1;r=r.parentNode}return!0}(e)}function A(e){var t=E(e);return(isNaN(t)||t>=0)&&P(e)}function D(e){return Array.from(e.querySelectorAll(S)).filter(A)}var T=[],R=null,k=!1;function C(){k=!0}function L(){if(k){if(k=!1,!R)return;if(!R)return;if(R.contains(document.activeElement))return;(D(R)[0]||R).focus()}}var x=i.React.useCallback,N=i.React.useEffect,M=i.React.useRef,F=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=M(),n=M(null),o=x((function(o){if(n.current&&n.current(),r.current&&(function(){var e=null;try{(e=T.pop())&&setTimeout((function(){return e.focus()}))}catch(t){console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}(),R=null,document.removeEventListener("focusout",C),document.removeEventListener("focusin",L)),e&&o){R=o,document.addEventListener("focusout",C,!1),document.addEventListener("focusin",L,!0),T.push(document.activeElement);setTimeout((function(){o.ownerDocument?function(e){n.current=t.disableAriaHider?null:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"body > :not(script)",r=Array.from(document.querySelectorAll(t)).map((function(t){if(!t.contains(e)){var r=t.getAttribute("aria-hidden");return null!==r&&"false"!==r||t.setAttribute("aria-hidden","true"),{node:t,ariaHidden:r}}}));return function(){r.forEach((function(e){e&&(null===e.ariaHidden?e.node.removeAttribute("aria-hidden"):e.node.setAttribute("aria-hidden",e.ariaHidden))}))}}(e);var r=null;if(t.focusSelector&&(r="string"==typeof t.focusSelector?e.querySelector(t.focusSelector):t.focusSelector),!r){var o=Array.from(e.querySelectorAll(S));!(r=o.find(A)||o.find(P)||null)&&P(e)&&(r=e)}r?r.focus():console.warn('[useFocusTrap]: Failed to find a focusable element after activating the focus trap. Make sure to include at an element that can recieve focus. As a fallback, you can also set "tabIndex={-1}" on the focus trap node.',e)}(o):console.warn("[useFocusTrap]: The focus trap is not part of the DOM yet, so it is unable to correctly set focus. Make sure to render the ref node.",o)})),r.current=o}else r.current=null}),[e,t.focusSelector,t.disableAriaHider]);return N((function(){if(e){var t=function(e){"Tab"===e.key&&r.current&&function(e,t){var r=D(e);if(r.length){if(r[t.shiftKey?0:r.length-1]===document.activeElement||e===document.activeElement){t.preventDefault();var n=r[t.shiftKey?r.length-1:0];n&&n.focus()}}else t.preventDefault()}(r.current,e)};return document.addEventListener("keydown",t),function(){document.removeEventListener("keydown",t)}}}),[e]),o};function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var q,W=function(e,t){var r=(0,i.zustand)((function(r){return I(I({},e),t(r))}));return r.getData=function(){var t=r.getState();return(0,w.filterObject)(t,(function(t){var r=n(t,1)[0];return void 0!==e[r]}))},r.getActions=function(){var e=r.getState(),o=t();return(0,w.filterObject)(e,(function(e){var t=n(e,1)[0];return void 0!==o[t]}))},r},K=i.React.useState,Y=i.React.useEffect;function $(e){var t=n(K(e),2),r=t[0],o=t[1];return Y((function(){o(e)}),[e]),[r,o]}window.gform=window.gform||{},window.gform.utils=window.gform.utils||{},window.gform.utils.react=window.gform.utils.react||{},q=window.gform.utils.react,Object.entries(t).forEach((function(e){var t=n(e,2),r=t[0],o=t[1];q[r]=o}))}();
//# sourceMappingURL=react-utils.js.map