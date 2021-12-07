/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
Crie uma função que mude a cor do quadrado vermelho para branco.
Crie uma função que corrija o texto da tag <h1>.
Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/
document.querySelectorAll(".center-content p")[1].innerText = "Eu serei um cara de muito sucesso e poderei comprar ifoods sem ficar pensando no salário";
document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(76,164,109)";
document.getElementsByClassName("center-content")[0].style.backgroundColor = "#fff";
document.getElementsByTagName("h1")[0].innerText = "Exercício 5.1 - JavaScript";
document.querySelectorAll(".center-content")[0].style.textTransform = "uppercase";

arr = document.getElementsByTagName("p");
for (let i of arr) {
  console.log(i.innerHTML);
}