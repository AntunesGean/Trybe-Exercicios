const button = document.getElementById("cliqueme");
const buttonReset = document.getElementById("reset");
let count = 0;

button.onclick = () => {
  count += 1;
  button.innerHTML = "Clique me: " + count;
};

buttonReset.onclick = () => {
  location.reload();
  button.innerHTML = "Clique me: 0";
};