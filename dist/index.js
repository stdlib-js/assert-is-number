"use strict";var t=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(p){throw (e=0, p)}};};var i=t(function(k,n){
function x(r){return typeof r=="number"}n.exports=x
});var o=t(function(w,a){
var N=require('@stdlib/number-ctor/dist'),g=N.prototype.toString;a.exports=g
});var v=t(function(z,c){
var j=o();function y(r){try{return j.call(r),!0}catch(e){return!1}}c.exports=y
});var s=t(function(A,b){
var O=require('@stdlib/assert-has-tostringtag-support/dist'),S=require('@stdlib/utils-native-class/dist'),P=require('@stdlib/number-ctor/dist'),h=v(),l=O();function T(r){return typeof r=="object"?r instanceof P?!0:l?h(r):S(r)==="[object Number]":!1}b.exports=T
});var q=t(function(B,f){
var d=i(),C=s();function F(r){return d(r)||C(r)}f.exports=F
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=q(),G=i(),L=s();m(u,"isPrimitive",G);m(u,"isObject",L);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
