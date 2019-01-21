function steamrollArray(arr) {
  function flat(array, res){
    for( var a = 0; a < array.length; a++){
      if(Array.isArray(array[a])) flat(array[a], res);
      else res.push(array[a]);
    }
  }
  
  var result = [];
  flat(arr, result);
  return result;
}

steamrollArray([1, [2], [3, [[4]]]]);