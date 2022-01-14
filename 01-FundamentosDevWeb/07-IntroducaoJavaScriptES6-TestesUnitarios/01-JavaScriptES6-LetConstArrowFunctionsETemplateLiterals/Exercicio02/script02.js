//Ex02 - Modo01
let str = 'Antônio foi no banheiro e não sabemos o que aconteceu'; // retorna 'aconteceu'

const countWord = () => {
  const strSplit = str.split(" ");
  let retorno = strSplit.reduce((a,b) => a.length > b.length ? a : b);
    return retorno;
  };

console.log(countWord(str));


//Ex02 - Modo02
const contaPalavra = () => {
  const strDiv = str.split(" ").reduce((a,b) => a.length > b.length ? a : b);
    return strDiv;
  };

console.log(contaPalavra(str));