const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordem = (oddsAndEvens) => oddsAndEvens.sort((a, b) => a - b);

console.log(`Os números ${ordem(oddsAndEvens)} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉