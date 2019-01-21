function sumFibs(num) {
  var arrayFib = [1];
  var item = 1;
  do{
    arrayFib.push(item); 
    item = arrayFib[arrayFib.length - 1] +  arrayFib[arrayFib.length - 2];
    }while(item <= num);

console.log(arrayFib);
return arrayFib.filter(x => x & 1).reduce((a,b) => a + b);
}

sumFibs(10);