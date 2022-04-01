// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-tostringtag-support@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-native-class@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@esm/index.mjs";var s=function(t){return"number"==typeof t},i=n.prototype.toString;var o=r,m=n,d=function(t){try{return i.call(t),!0}catch(t){return!1}},a=e();var c=function(t){return"object"==typeof t&&(t instanceof m||(a?d(t):"[object Number]"===o(t)))},p=s,u=c;var l=t,j=function(t){return p(t)||u(t)},f=s,b=c;l(j,"isPrimitive",f),l(j,"isObject",b);var v=j;export{v as default,b as isObject,f as isPrimitive};
//# sourceMappingURL=index.mjs.map
