let btnPdr = document.querySelectorAll(".colorTxt button")[0];
let btnBrnc = document.querySelectorAll(".colorTxt button")[1];
let btnBlue = document.querySelectorAll(".colorTxt button")[2];

btnPdr.addEventListener("click", function() {
  for (let i in document.getElementsByClassName("text"))
  document.getElementsByClassName("text")[i].style.color = "#000";
});

btnBrnc.addEventListener("click", function() {
  for (let i in document.getElementsByClassName("text"))
  document.getElementsByClassName("text")[i].style.color = "#fff";
});

btnBlue.addEventListener("click", function() {
  for (let i in document.getElementsByClassName("text"))
  document.getElementsByClassName("text")[i].style.color = "#3340F6";
});