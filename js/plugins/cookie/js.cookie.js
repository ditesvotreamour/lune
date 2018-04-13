﻿/*
 * JavaScript Cookie v2.1.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function(c){if(typeof define==="function"&&define.amd){define(c)}else{if(typeof exports==="object"){module.exports=c()}else{var a=window.Cookies;var b=window.Cookies=c();b.noConflict=function(){window.Cookies=a;return b}}}}(function(){function a(){var d=0;var f={};for(;d<arguments.length;d++){var c=arguments[d];for(var e in c){f[e]=c[e]}}return f}function b(d){function c(m,r,f){var q;if(arguments.length>1){f=a({path:"/"},c.defaults,f);if(typeof f.expires==="number"){var k=new Date();k.setMilliseconds(k.getMilliseconds()+f.expires*86400000);f.expires=k}try{q=JSON.stringify(r);if(/^[\{\[]/.test(q)){r=q}}catch(j){}if(!d.write){r=encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)}else{r=d.write(r,m)}m=encodeURIComponent(String(m));m=m.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);m=m.replace(/[\(\)]/g,escape);return(document.cookie=[m,"=",r,f.expires&&"; expires="+f.expires.toUTCString(),f.path&&"; path="+f.path,f.domain&&"; domain="+f.domain,f.secure?"; secure":""].join(""))}if(!m){q={}}var h=document.cookie?document.cookie.split("; "):[];var p=/(%[0-9A-Z]{2})+/g;var l=0;for(;l<h.length;l++){var o=h[l].split("=");var n=o[0].replace(p,decodeURIComponent);var g=o.slice(1).join("=");if(g.charAt(0)==='"'){g=g.slice(1,-1)}try{g=d.read?d.read(g,n):d(g,n)||g.replace(p,decodeURIComponent);if(this.json){try{g=JSON.parse(g)}catch(j){}}if(m===n){q=g;break}if(!m){q[n]=g}}catch(j){}}return q}c.get=c.set=c;c.getJSON=function(){return c.apply({json:true},[].slice.call(arguments))};c.defaults={};c.remove=function(f,e){c(f,"",a(e,{expires:-1}))};c.withConverter=b;return c}return b(function(){})}));