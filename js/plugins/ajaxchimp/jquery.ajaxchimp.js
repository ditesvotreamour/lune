﻿/*
Mailchimp Ajax Submit
jQuery Plugin
Author: Siddharth Doshi

Use:
===
$('#form_id').ajaxchimp(options);

- Form should have one <input> element with attribute 'type=email'
- Form should have one label element with attribute 'for=email_input_id' (used to display error/success message)
- All options are optional.

Options:
=======
options = {
    language: 'en',
    callback: callbackFunction,
    url: 'http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh99f'
}

Notes:
=====
To get the mailchimp JSONP url (undocumented), change 'post?' to 'post-json?' and add '&c=?' to the end.
For e.g. 'http://blahblah.us1.list-manage.com/subscribe/post-json?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh99f&c=?',
*/
(function(a){a.ajaxChimp={responses:{"We have sent you a confirmation email":0,"Please enter a value":1,"An email address must contain a single @":2,"The domain portion of the email address is invalid (the portion after the @: )":3,"The username portion of the email address is invalid (the portion before the @ :)":4,"This email address looks fake or invalid. Please enter a real email address":5},translations:{en:null},init:function(c,b){a(c).ajaxChimp(b)}};a.fn.ajaxChimp=function(b){a(this).each(function(f,c){var e=a(c);var d=e.find("input[type=email]");var g=e.find("label[for="+d.attr("id")+"]");var h=a.extend({url:e.attr("action"),language:"en"},b);var j=h.url.replace("/post?","/post-json?").concat("&c=?");e.attr("novalidate","true");d.attr("name","EMAIL");e.submit(function(){var l;function n(s){if(s.result==="success"){l="We have sent you a confirmation email";g.removeClass("error").addClass("valid");d.removeClass("error").addClass("valid")}else{d.removeClass("valid").addClass("error");g.removeClass("valid").addClass("error");var q=-1;try{var r=s.msg.split(" - ",2);if(r[1]===undefined){l=s.msg}else{var p=parseInt(r[0],10);if(p.toString()===r[0]){q=r[0];l=r[1]}else{q=-1;l=s.msg}}}catch(o){q=-1;l=s.msg}}if(h.language!=="en"&&a.ajaxChimp.responses[l]!==undefined&&a.ajaxChimp.translations&&a.ajaxChimp.translations[h.language]&&a.ajaxChimp.translations[h.language][a.ajaxChimp.responses[l]]){l=a.ajaxChimp.translations[h.language][a.ajaxChimp.responses[l]]}g.html(l);g.show(2000);if(h.callback){h.callback(s)}}var i={};var k=e.serializeArray();a.each(k,function(o,p){i[p.name]=p.value});a.ajax({url:j,data:i,success:n,dataType:"jsonp",error:function(o,p){console.log("mailchimp ajax submit error: "+p)}});var m="Submitting...";if(h.language!=="en"&&a.ajaxChimp.translations&&a.ajaxChimp.translations[h.language]&&a.ajaxChimp.translations[h.language]["submit"]){m=a.ajaxChimp.translations[h.language]["submit"]}g.html(m).show(2000);return false})});return this}})(jQuery);