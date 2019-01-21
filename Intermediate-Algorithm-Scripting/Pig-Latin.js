function translatePigLatin(str) {
 if(str[0].match(/[aeiou]/gi))return str + "way";
 else if(str.match(/[aeiou]/gi) === null)return str + 'ay';
 else {
   var firstVowel = str.indexOf(str.match(/[aeiou]/gi)[0]); 
   return str.slice(firstVowel) + str.slice(0, firstVowel) + "ay";
   }  
}


function translatePigLatin(str) {
    return str[0].match(/[aeiou]/gi) ? str + "way" : str.match(/[aeiou]/gi) === null ? str + 'ay' : str.slice(str.indexOf(str.match(/[aeiou]/gi)[0])) + str.slice(0, str.indexOf(str.match(/[aeiou]/gi)[0])) + "ay";
}