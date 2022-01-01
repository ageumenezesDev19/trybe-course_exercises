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
for (i = 0; i < numbers.length; i += 1); {
    for (i2 = numbers.length - 1; i2 <= numbers.length -1 && i2 >= 0; i2 -= 1) {
        if (numbers[i2] > numbers[i]) {
            grater.push(numbers[i2])
        }
    }
}

console.log(grater);
// Código inacabado, terminarei depois... (Que eu achar uma solução);
// Unfinished code, I'll finish later... (When I find a solution);