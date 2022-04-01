// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,o=Object.prototype,n=o.toString,a=o.__defineGetter__,l=o.__defineSetter__,u=o.__lookupGetter__,c=o.__lookupSetter__;var i=r,f=function(t,e,r){var i,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(u.call(t,e)||c.call(t,e)?(i=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=i):t[e]=r.value),p="get"in r,y="set"in r,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(t,e,r.get),y&&l&&l.call(t,e,r.set),t},p=e()?i:f;var y=function(t,e,r){p(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})};var b=function(t){return"number"==typeof t};var _=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var v=function(){return _&&"symbol"==typeof Symbol.toStringTag},m=Object.prototype.toString,s=m;var d=function(t){return s.call(t)},j=Object.prototype.hasOwnProperty;var g=function(t,e){return null!=t&&j.call(t,e)},S="function"==typeof Symbol?Symbol.toStringTag:"",w=g,h=S,O=m;var P=d,T=function(t){var e,r,o;if(null==t)return O.call(t);r=t[h],e=w(t,h);try{t[h]=void 0}catch(e){return O.call(t)}return o=O.call(t),e?t[h]=r:delete t[h],o},E=v()?T:P,k=Number,x=k.prototype.toString;var A=E,G=k,N=function(t){try{return x.call(t),!0}catch(t){return!1}},V=v();var C=function(t){return"object"==typeof t&&(t instanceof G||(V?N(t):"[object Number]"===A(t)))},F=b,q=C;var z=y,B=function(t){return F(t)||q(t)},D=b,H=C;z(B,"isPrimitive",D),z(B,"isObject",H);var I=B;export{I as default,H as isObject,D as isPrimitive};
//# sourceMappingURL=mod.js.map
