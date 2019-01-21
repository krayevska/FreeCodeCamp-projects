function rot13(str) { // LBH QVQ VG!
  var result = '';
  for(let l = 0; l < str.length; l++){
    if(str[l].charCodeAt() < 65 || str[l].charCodeAt()> 90){
      result += str[l];
    }
    else {
    result = str[l].charCodeAt() < 78 ? result + String.fromCharCode(str[l].charCodeAt()+13) : result + String.fromCharCode(str[l].charCodeAt()-13);
    }
   }
  return result;
}