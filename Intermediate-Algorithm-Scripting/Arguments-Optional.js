function addTogether() {
 
  function checkIfNum(n){
    return typeof n === 'number';
  }
  
  if(arguments.length > 1){
   if(checkIfNum(arguments[0]) && checkIfNum(arguments[1])) return arguments[0]+arguments[1];
   else return undefined;
   }

  if (arguments.length == 1){
    if(!checkIfNum(arguments[0]))return undefined;
    else {
    var onlyOne = arguments[0];
    return function(second) {
      if(!checkIfNum(second))return undefined;
      else return onlyOne + second;
      }
    }
}}

addTogether(2)(3);