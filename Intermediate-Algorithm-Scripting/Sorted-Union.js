function uniteUnique(arr) {
  var resultArray = [...arguments[0]];
  
  function move(element){
   for(let i in element){
     if(element[i].length > 1) move(element[i]);
     else {
     if(!resultArray.includes(element[i])) resultArray.push(element[i]);
     }}}
  
  move([...arguments].slice(1));
  return resultArray;
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);