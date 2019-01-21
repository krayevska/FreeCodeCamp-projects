function palindrome(str) {
 return str.toLowerCase().replace(/[\W_]/gi, '') == str.toLowerCase().replace(/[\W_]/gi, '').split('').reverse().join('') ? true : false;
}
