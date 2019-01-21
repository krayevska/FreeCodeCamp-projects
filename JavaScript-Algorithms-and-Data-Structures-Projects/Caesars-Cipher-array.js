function rot13(str) { 
  return str.split('').map(function(item){
   if(item.charCodeAt() < 65 || item.charCodeAt()> 90){
      return item;
    }
    else {
    return item.charCodeAt() < 78 ? String.fromCharCode(item.charCodeAt()+13) : String.fromCharCode(item.charCodeAt()-13);
    }
  }).join('');
}