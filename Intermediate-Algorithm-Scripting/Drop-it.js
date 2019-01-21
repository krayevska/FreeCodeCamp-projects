function dropElements(arr, func) {
  for(var i in arr){ 
   if(func(arr[i]) == true){
     return arr.slice(i);
     break;  
    }
    else {
      if(i == arr.length - 1) return [];
    }
  }
 }

dropElements([1, 2, 3, 4], function(n) {return n > 5;});
