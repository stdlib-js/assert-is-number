// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-tostringtag-support@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-native-class@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@v0.1.0-esm/index.mjs";function i(t){return"number"==typeof t}var n=s.prototype.toString;var o=e();function m(t){return"object"==typeof t&&(t instanceof s||(o?function(t){try{return n.call(t),!0}catch(t){return!1}}(t):"[object Number]"===r(t)))}function d(t){return i(t)||m(t)}t(d,"isPrimitive",i),t(d,"isObject",m);export{d as default,m as isObject,i as isPrimitive};
//# sourceMappingURL=index.mjs.map
