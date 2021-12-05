// 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer. Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato: { area: 0, perimetro: 0 }. 
// Fórmulas: 
// perimetro = (2*base) + (2*altura)
// area = base * altura (editado)

// let base;
// let altura;
// let perimetro;

// function areaPerimetro (base, altura) {
//    let objQuad = {
//      perimetro: (2 * base) + (2 * altura),
//      area: base * altura
//    }
//    return objQuad;
// }
// console.log("A area do perimetro é", areaPerimetro(4,4));



// Crie uma função que, dado um array de números inteiros, retorne a quantidade de números pares e ímpares no formato: { pares: 0, ímpares: 0 }

// let array = [2, 8, 10, 23];
// let pares;
// let impares;
// function parImpar (array) {
//   let parImpar = {
//     pares: 0,
//     impares:0
//   }
//   for (let num of array) {
//     if (num % 2 === 0){
//       parImpar.pares += 1;
//     } else  {
//       parImpar.impares +=1;
//     }    
//   }
// return parImpar;
// }
// console.log(parImpar(array));



// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
// Valor de teste: ‘trybe’ e ‘be’
// valor esperado no retorno da função: true
// verificaFimPalavra(‘trybe’, ‘be’);
// Retorno esperado: true
// verificaFimPalavra(‘joaofernando’, ‘fernan’);
// Retorno esperado: false;
// Dica: Use o SPLIT.

// function verificaFimPalavra(word, ending) {
//   return word.endsWith(ending);
// }

// console.log(verificaFimPalavra("trybe","be"));
// console.log(verificaFimPalavra("joaofernando","fernan"));

function verificaFimPalavra(word, ending) {
  if (word.split(ending) - ending) {
    return true;
  } else {
    return false;
  }
}

let word = "trybe";
let ending = "be";
let wordSplit = word.split("");
let endingSplit = ending.split("");
if (wordSplit.lastIndexOf(endingSplit)

console.log(verificaFimPalavra("trybe","be"));
console.log(verificaFimPalavra("joaofernando","fernan"));

var array = [2, 5, 9, 2];
console.log(array.lastIndexOf(5, 2));