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
let grade = 4;
if (grade >= 90 && grade <= 100) {
    console.log("Grade = A");
} else if (grade >= 80 && grade < 90) {
    console.log("Grade = B");
} else if (grade >= 70 && grade < 80) {
    console.log("Grade = C");
} else if (grade >= 60 && grade < 70) {
    console.log("Grade = D")
} else if (grade >= 50 && grade < 60) {
    console.log("Grade = E")
} else if (grade < 50 && grade >= 0) {
    console.log("Grade = F");
} else {
    console.log("ERROR! Invalid data. Please enter numbers from 0 to 100 and try again.");
}

//8
const contN1 = 3;
const contN2 = 5;
const contN3 = 10;

if (contN1 % 2 == 0 || contN2 % 2 == 0 || contN3 % 2 == 0) {
    console.log(true);
} else {
    console.log(false);
}

//9
const contNi1 = 3;
const contNi2 = 50;
const contNi3 = 10;

if (contNi1 % 2 != 0 || contNi2 % 2 != 0 || contNi3 % 2 != 0) {
    console.log(true);
} else {
    console.log(false);
}

//10
const custo = 2000;
const valor = 3000;

let lucro = valor - (custo + (custo * (20 / 100)));

console.log("Lucro = R$" + lucro);

//11
let salarioBruto = 3000;
let inss;
let ir;
let alicota;

if (salarioBruto <= 1556.94 && salarioBruto > 0) {
    alicota = (8 / 100);
    inss = salarioBruto * alicota;
    console.log ("INSS = R$" + inss);
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    alicota = (9 / 100);
    inss = salarioBruto * alicota;
    console.log ("INSS = R$" + inss);
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    alicota = (11 / 100)
    inss = salarioBruto * alicota;
    console.log ("INSS = R$" + inss);
} else if (salarioBruto > 5189.82) {
    alicota = 570.88;
    inss = alicota;
    console.log ("INSS = R$" + inss);
} else {
    console.log("ERROR! Invalid data!")
}

let salarioBase = salarioBruto - inss; 
console.log("Salário base = R$" + salarioBase);

if (salarioBase <= 1903.98) {
    ir = 0;
    console.log("IR = R$" + ir);
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    ir = (salarioBase * (7.5 / 100)) - 142.80;
    console.log("IR = R$" + ir);
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    ir = (salarioBase * (15 / 100)) - 354.80;
    console.log("IR = R$" + ir);
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    ir = (salarioBase * (22.5 / 100)) - 636.13;
    console.log("IR = R$" + ir);
} else if (salarioBase > 4664.68) {
    ir = (salarioBase * (27.5 / 100)) - 869.36;
    console.log("IR = R$" + ir);
}

let salarioLiquido = salarioBase - ir;

if (salarioLiquido > 0) {
    console.log("O salário líquido é de R$" + salarioLiquido);
} else {
    console.log("Please enter valid values.");
}