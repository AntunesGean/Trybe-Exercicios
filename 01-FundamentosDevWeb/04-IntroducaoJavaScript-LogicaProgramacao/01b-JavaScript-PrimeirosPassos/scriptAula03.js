let statusAprovacao = "azul";

  switch(statusAprovacao) {

    case "verde":
      console.log("aprovada");
      break;

    case "amarelo":
      console.log("lista");
      break;

    case "vermelho":
      console.log("reprovada");
      break;

    default:
      console.log("valor não identificado")
  }