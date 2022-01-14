const str = "Tryber x aqui!"
const strB = "Bebeto"
let skills = ["css", "html", "javascript", "git", "bootstrap"];

const troca = () => {
  strNew = str.replace(/x/g, strB);
  return strNew;
}

arr = skills.sort();

console.log(troca(str));
console.log(`${strNew}`);
console.log(arr);
console.log(`${strNew} Minhas cinco principais habilidade são:
• ${arr[0]}
• ${arr[1]}
• ${arr[2]}
• ${arr[3]}
• ${arr[4]}`);

