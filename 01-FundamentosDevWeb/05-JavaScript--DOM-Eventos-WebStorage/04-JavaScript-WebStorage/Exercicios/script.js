let btnPdr = document.querySelectorAll(".colorTxt button")[0];
let btnBrnc = document.querySelectorAll(".colorTxt button")[1];
let btnBlue = document.querySelectorAll(".colorTxt button")[2];

btnPdr.addEventListener("click", function() {
  for (let i of document.getElementsByClassName("text"))
  i.style.color = "#000";
});

btnBrnc.addEventListener("click", function() {
  for (let i of document.getElementsByClassName("text"))
  i.style.color = "#fff";
});

btnBlue.addEventListener("click", function() {
  for (let i of document.getElementsByClassName("text"))
  i.style.color = "#3340F6";
});

let btnPqn = document.querySelectorAll(".fontSize button")[0];
let btnPadr = document.querySelectorAll(".fontSize button")[1];
let btnGrnd = document.querySelectorAll(".fontSize button")[2];

btnPqn.addEventListener("click", function() {
  for (let i of document.getElementsByClassName("text"))
  i.style.fontSize = "12px";
});

btnPadr.addEventListener("click", function() {
  for (let i of document.getElementsByClassName("text"))
  i.style.fontSize = "16px";
});

btnGrnd.addEventListener("click", function() {
  for (let i of document.getElementsByClassName("text"))
  i.style.fontSize = "20px";
});

let btnPqnH = document.querySelectorAll(".spaceTxt button")[0];
let btnNrmH = document.querySelectorAll(".spaceTxt button")[1];
let btnGrnH = document.querySelectorAll(".spaceTxt button")[2];

btnPqnH.addEventListener("click", function() {
  for (let i of document.getElementsByClassName("text"))
  i.style.lineHeight = "80%";
});

btnNrmH.addEventListener("click", function() {
  for (let i of document.getElementsByClassName("text"))
  i.style.lineHeight = "normal";
});

btnGrnH.addEventListener("click", function() {
  for (let i of document.getElementsByClassName("text"))
  i.style.lineHeight = "200%";
});

let btnFmlyA = document.querySelectorAll(".fontFmly button")[0];
let btnFmlyB = document.querySelectorAll(".fontFmly button")[1];
let btnGmlyC = document.querySelectorAll(".fontFmly button")[2];

btnFmlyA.addEventListener("click", function() {
  for (let i of document.getElementsByClassName("text"))
  i.style.fontFamily = "Arial";
});

btnFmlyB.addEventListener("click", function() {
  for (let i of document.getElementsByClassName("text"))
  i.style.fontFamily = "Times New Roman";
});

btnGmlyC.addEventListener("click", function() {
  for (let i of document.getElementsByClassName("text"))
  i.style.fontFamily = "Open Sans";
});