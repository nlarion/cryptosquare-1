function cryptosquare(message) {
  var noPunc = message.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  var noSpace = noPunc.replace(/[" "]/g,"");
  

  return noSpace;

}
