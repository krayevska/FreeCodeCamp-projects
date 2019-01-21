function smallestCommons(arr) {
  var array = arr.sort(function(a, b) {
  return b - a;
});
  
  var fullArray = [];
  for ( var i = array[0]; i >= array[1]; i-- ){
    fullArray.push(i);
  }
 
  var commonMult = 0;
  var times = 1;
  do {
    commonMult = fullArray[0] * fullArray[1] * times;
    for (var i = 2; i < fullArray.length; i++) {
      if (commonMult % fullArray[i] !== 0) {
        break;
      }
    }
    times++;
  } while (i !== fullArray.length);

return commonMult;

}


smallestCommons([1,5]);