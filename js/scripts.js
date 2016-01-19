function cryptosquare(message) {
  var noPunc = message.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  var noSpace = noPunc.replace(/[" "]/g,"");
  var noCaps = noSpace.toLowerCase();

  return noCaps;

}
