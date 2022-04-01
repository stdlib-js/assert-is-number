// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).isNumber=t()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(e){return!1}},r=Object.defineProperty,o=Object.prototype,n=o.toString,i=o.__defineGetter__,l=o.__defineSetter__,u=o.__lookupGetter__,a=o.__lookupSetter__;var c=r,f=function(e,t,r){var c,f,p,y;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(u.call(e,t)||a.call(e,t)?(c=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),p="get"in r,y="set"in r,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,t,r.get),y&&l&&l.call(e,t,r.set),e},p=t()?c:f;var y=function(e,t,r){p(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})};var b=function(e){return"number"==typeof e};var _=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var s=function(){return _&&"symbol"==typeof Symbol.toStringTag},v=Object.prototype.toString,d=v;var m=function(e){return d.call(e)},g=Object.prototype.hasOwnProperty;var j=function(e,t){return null!=e&&g.call(e,t)},S="function"==typeof Symbol?Symbol.toStringTag:"",h=j,w=S,O=v;var P=m,T=function(e){var t,r,o;if(null==e)return O.call(e);r=e[w],t=h(e,w);try{e[w]=void 0}catch(t){return O.call(e)}return o=O.call(e),t?e[w]=r:delete e[w],o},x=s()?T:P,E=Number,N=E.prototype.toString;var k=x,A=E,G=function(e){try{return N.call(e),!0}catch(e){return!1}},V=s();var C=function(e){return"object"==typeof e&&(e instanceof A||(V?G(e):"[object Number]"===k(e)))},F=b,q=C;var z=y,B=function(e){return F(e)||q(e)},D=C;return z(B,"isPrimitive",b),z(B,"isObject",D),B}));
//# sourceMappingURL=bundle.js.map
