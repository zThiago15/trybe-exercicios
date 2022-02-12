let peca = "PEÃO";

switch (peca.toLowerCase()) {
  case "peão":
    break;
  case "cavalo":
    break;
  case "bispo":
    break;
  case "torre":
    break;
  case "rainha":
    console.log();
    break;

  case "rei":
    console.log();
    break;
  default:
    console.log("valor inválido!");
}

if (peca.toLowerCase() == "peão") {
  console.log("frente, 1 ou 2 casas");
} else if (pecaMinuscula == "cavalo") {
  console.log("movimentos em L");
} else if (pecaMinuscula == "bispo") {
  console.log("diagonais");
} else if (pecaMinuscula == "torre") {
  console.log("horizontal e vertical");

} else if (pecaMinuscula == "rainha") {
  console.log("Qualquer movimento, sem restrições");
  
} else if (pecaMinuscula == "rei") {
  console.log("Qualquer movimento, mas 1 casa de cada vez");
} else {
  console.log("peça inválida");
}
