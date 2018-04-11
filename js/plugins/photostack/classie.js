﻿/*
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */
(function(g){function c(h){return new RegExp("(^|\\s+)"+h+"(\\s+|$)")}var d,a,e;if("classList" in document.documentElement){d=function(i,h){return i.classList.contains(h)};a=function(i,h){i.classList.add(h)};e=function(i,h){i.classList.remove(h)}}else{d=function(i,h){return c(h).test(i.className)};a=function(i,h){if(!d(i,h)){i.className=i.className+" "+h}};e=function(i,h){i.className=i.className.replace(c(h)," ")}}function f(i,h){var j=d(i,h)?e:a;j(i,h)}var b={hasClass:d,addClass:a,removeClass:e,toggleClass:f,has:d,add:a,remove:e,toggle:f};if(typeof define==="function"&&define.amd){define(b)}else{g.classie=b}})(window);