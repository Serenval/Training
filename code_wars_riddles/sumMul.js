function sumMul(n,m){
 if(n <= 0 || m <= 0) {
   return 'INVALID';
 }
  
  let sum = 0;
  for (let i = n; i < m;) {
    sum += i;
    console.log(sum);
    i += i;
  }
  return sum;
}

sumMul(2,9);