function destroyer(arr) {
  var array = Array.prototype.slice.call(arguments).slice(1);
  for(let i in arr){
    if (array.indexOf(arr[i]) >= 0) delete arr[i];
  }
  return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


function destroyer(arr) {
  var array = Array.prototype.slice.call(arguments).slice(1);
    return arr.filter(function(item){
      return !array.includes(item);
    });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

function destroyer(arr) {
  var array = Array.prototype.slice.call(arguments).slice(1);
    return arr.filter( item => !array.includes(item));
  }
