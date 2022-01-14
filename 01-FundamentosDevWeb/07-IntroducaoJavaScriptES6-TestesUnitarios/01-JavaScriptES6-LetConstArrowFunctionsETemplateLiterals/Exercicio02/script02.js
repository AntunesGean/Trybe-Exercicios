let str = 'Antônio foi no banheiro e não sabemos o que aconteceu'; // retorna 'aconteceu'

const countWord = () => {
  const strSplit = str.split(" ");
    let retorno = strSplit.reduce((a,b) => a.length > b.length ? a : b);
    return retorno;
  };

console.log(countWord(str));