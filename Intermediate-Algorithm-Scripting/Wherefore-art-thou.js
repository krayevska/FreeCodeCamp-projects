function whatIsInAName(collection, source) {
  var sourceKeys = Object.keys(source);
   return collection.filter(function(o){
    for (let s = 0; s < sourceKeys.length; s++){
      if(!o.hasOwnProperty(sourceKeys[s]) || o[sourceKeys[s]] !== source[sourceKeys[s]])return false;
    }
    return true;
  });
 }

