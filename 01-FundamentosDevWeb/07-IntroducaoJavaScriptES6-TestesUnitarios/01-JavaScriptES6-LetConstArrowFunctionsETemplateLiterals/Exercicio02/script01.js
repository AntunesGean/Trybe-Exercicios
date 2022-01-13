//Ex01 - Modo01 (++)
const fatorial1 = (n) => {
  let result = n;

  for (let i = 1; i < n; i++) {
    result *= i;
  }  
  return result;
};
console.log(fatorial1(4));


//Ex01 - Modo02 (--)
const fatorial2 = (n) => {
  let numX = n;
  const firstN = n - 1;

  for (let i = firstN; i > 1; i--) {
    numX *= i;
  }
  return numX;
};
console.log(fatorial2(4));


//Ex01 - Modo 03 (loop)
const fatorial3 = (n) => {
  if (n > 1) {
    return n * fatorial3(n-1);
  }
  return 1;
}
console.log(fatorial3(4));


//Ex01 - Modo04 (loop - ternary operator)
const fatorial4 = (n) => n > 1 ? n*fatorial4(n-1): 1;

console.log(fatorial4(4));