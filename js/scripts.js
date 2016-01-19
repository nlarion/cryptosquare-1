function cryptosquare(message) {
  var noPunc = message.replace(/[.,'\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  var noSpace = noPunc.replace(/[" "]/g,"");
  var noCaps = noSpace.toLowerCase();
  var len = noCaps.length;
  var perfectSquares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225];
  var col = 0;
  for (var i = 0; i < len; i++) {
    if (perfectSquares[i] >= len) {
      col += Math.sqrt(perfectSquares[i]);
      break;
    }
  }
  var brokenStr = [];
  for (var j = 0; j < col; j++) {
    brokenStr.push(noCaps.slice(col*j, col*(j+1)));
  }

  var emptyString = "";
  var codedArray = [];
  for ( var x = 0; x < col; x++) {
    for ( var y = 0; y < col; y++) {
      emptyString += brokenStr[y][x];
      if (emptyString.length === 5) {
         codedArray.push(emptyString);
         emptyString = "";
      }
    }
  }
  // debugger;

  return codedArray;
}
