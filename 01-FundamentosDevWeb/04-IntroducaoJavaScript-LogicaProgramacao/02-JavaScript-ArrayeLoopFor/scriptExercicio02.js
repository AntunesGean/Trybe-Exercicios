let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
}

console.log(soma);

// usando reducer
// const arr = [1, 2, 3, 4];
// const reducer = (accumulator, curr) => accumulator + curr;
// console.log(arr.reduce(reducer));


// usando lodash
// var lodash = require('lodash');
// var arr = [3, 6, 1, 5, 8];
// var sum = lodash.sum(arr);
// console.log(sum); 