//1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let number of numbers) {
    console.log(number);
}

//2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let number of numbers) {
    soma = soma + number
}

console.log(soma);

//3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let quantity;
for (let number of numbers) {
    soma = soma + number;
}

quantity = numbers.length;
media = soma / quantity;
console.log("Média aritmética = " + media);

//4
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let quantity;
for (let number of numbers) {
    soma = soma + number;
}

quantity = numbers.length;
media = soma / quantity;
if (media > 20) {
    console.log("Valor maior que 20.")
} else {
    console.log("Valor menor ou igual a 20.");
}

//5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let grater = 0;

for (let i = 0; i < numbers.length; i += 1) {
    for (let n = 0; n < numbers.length; n += 1) {
        if (numbers[i] > numbers[n] && numbers[i] > grater) {
            grater = numbers[i];
        }
    }
}

console.log("O maior número é: " + grater);

//6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let nImpares = [];
let nOfNumbersI;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 != 0) {
        nImpares.push(numbers[i]);
    }
}

nOfNumbersI = nImpares.length;
console.log("Quantidade de números impares: " + nOfNumbersI + ".");

//7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smaller = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
    for (let n = 0; n < numbers.length; n += 1) {
        if (numbers[i] < numbers[n] && numbers[i] < smaller) {
            smaller = numbers[i];
        }
    }
}

console.log("O menor número é: " + smaller);

//8
let array1 = [];
for (let i = 1; i <= 25 && i >= 1; i += 1) {
    array1.push(" " + i);
}

console.log("O array é:" + array1 + ".");

//9
let array1 = [];
for (let i = 1; i <= 25 && i >= 1; i += 1) {
    array1.push(i);
}

let divArray = [];
for (let i2 = 0; i2 < array1.length; i2 += 1) {
    divArray.push(" " + array1[i2] / 2);
} 

console.log("Resultado da Divisão dos itens do Array =" + divArray + ".");

/* Bonos */

//1

//2

//3