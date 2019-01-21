function sumPrimes(num) {
  var sum = 0;
  LoopOne :
  for(var current = num % 2 == 0 ? num - 1 : num; current > 1; current -= 2){
    for(var i = current - 1; i > 1; i--){
     if(current % i === 0) continue LoopOne;
     }
    sum = sum + current;
    }
return sum+2;  
}

sumPrimes(977);