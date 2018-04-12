$.ajax({
  dataType: 'jsonp',
  url: "https://getsimpleform.com/messages?form_api_token=0ef273a2504d017e6534387cd2fa5d26",
  data: {
    name: "John",
    message: "Boston",
  }
}).done(function() {
  //callback which can be used to show a thank you message
  //and reset the form
  alert("Thank you, for contacting us");
});