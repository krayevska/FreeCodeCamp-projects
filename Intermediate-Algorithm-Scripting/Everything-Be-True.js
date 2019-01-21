function truthCheck(collection, pre) {
   return collection.every(item => item[pre]);
}

/* for(var o in collection){
   if(!collection[o][pre]) return false;
  }
  return true;*/

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");