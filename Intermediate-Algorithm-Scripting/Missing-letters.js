function fearNotLetter(str) {
 var uniArray = str.split('').map(item => item.charCodeAt());
 for(let i = 0; i < (uniArray.length - 1); i++){
   if(uniArray[i] !== (uniArray[i+1] - 1)){
     return String.fromCharCode((uniArray[i]+1));
   }
 }
 return undefined;
}

fearNotLetter("abcdefghijklmnopqrstuvwxyz");