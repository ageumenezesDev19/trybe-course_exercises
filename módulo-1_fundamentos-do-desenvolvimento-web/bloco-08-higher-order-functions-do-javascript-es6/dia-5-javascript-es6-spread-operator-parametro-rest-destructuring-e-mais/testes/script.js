const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); /* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */

const months2 = [...summer, ...fall, ...winter, ...spring, ...numbers];
console.log(months2); /* [
    'JAN', 'FEV', 'MAR',
    'ABR', 'MAI', 'JUN',
    'JUL', 'AGO', 'SET',
    'OUT', 'NOV', 'DEZ',
    1,     2,     3
] */

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5

const people = {
    id: 101,
    name: 'Alysson',
    age: 25,
  };
  
  const about = {
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer',
  };
  
  const customer = { ...people, ...about };
  console.log(customer); /* {
    id: 101,
    name: 'Alysson',
    age: 25,
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer'
} */

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Manga', 'Quiuí', 'Jaca'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite', 'Creme', 'Açúcar'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  const mix = [...fruit, ...additional];
    return mix;
};

console.log(fruitSalad(specialFruit, additionalItens));