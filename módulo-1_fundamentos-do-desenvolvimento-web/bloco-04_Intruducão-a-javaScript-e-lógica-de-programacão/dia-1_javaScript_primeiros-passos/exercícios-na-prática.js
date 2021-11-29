//1
const clientes = 7;
const leeds = 20;

let adição = clientes + leeds;
console.log("Adição = " + adição);

let subtração = leeds - clientes;
console.log("Subtração = " + subtração);

let multiplicação = clientes * leeds;
console.log("Multiplicação = " + multiplicação);

let divisão = leeds / clientes;
console.log("Divisão = " + divisão);

let módulo = leeds % clientes;
console.log("Módulo = " + módulo);

//2
const number1 = 10;
const number2 = 45;

if (number1 > number2) {
    console.log(number1 + " é o maior.");
} else if (number2 > number1) {
    console.log(number2 + " é o maior");
} else {
    console.log("Os números são iguais.")
}

//3
const Nnumber1 = 10;
const Nnumber2 = 75;
const Nnumber3 = 5;

if (Nnumber1 > Nnumber2 && Nnumber1 > Nnumber3) {
    console.log(Nnumber1 + " é o maior.");
} else if (Nnumber2 > Nnumber1 && Nnumber2 > Nnumber3) {
    console.log(Nnumber2 + " é o maior");
} else if (Nnumber3 > Nnumber1 && Nnumber3 > Nnumber2) {
    console.log(Nnumber3 + " é o maior");
} else {
    console.log("Existem números iguais na operação.")
}

//4
const volue = -3;
if (volue > 0) {
    console.log("positive");
} else if (volue < 0) {
    console.log("negative");
} else {
    console.log("zero");
}

//5
const ânguloInterno1 = 35;
const ânguloInterno2 = 65;
const ânguloInterno3 = 80;

if (ânguloInterno1 > 0 && ânguloInterno2 > 0 && ânguloInterno3 > 0 && ânguloInterno1 + ânguloInterno2 + ânguloInterno3 == 180) {
    console.log(true);
} else {
    console.log(false + " (Dados inválidos, isso não é um triângulo.)")
}

//6
let peçaDeXadrez = "Peão";

switch (peçaDeXadrez.toLowerCase()) {
    case "peão":
        console.log ("Ele pode mover-se para frente ou pode capturar movendo-se para esquerda ou direita diagonalmente.");
        break;
    case "bispo":
        console.log("Move-se em linha reta diagonalmente.");
        break;
    case "torre":
        console.log("linha reta horizontalmente e verticalmente.");
        break;
    case "cavalo":
        console.log("Movimento 'L'.")
        break;
    case "rainha":
        console.log("Move-se em linha reta - verticalmente, horizontalmente ou diagonalmente.")
        break;
    case "rei":
        console.log("Move para qualquer casa adjacente.");
        break;
    default:
        console.log("Erro, esta peça não é válida.")
}

//.toLowerCase() -> Fonte:https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase.

//7
