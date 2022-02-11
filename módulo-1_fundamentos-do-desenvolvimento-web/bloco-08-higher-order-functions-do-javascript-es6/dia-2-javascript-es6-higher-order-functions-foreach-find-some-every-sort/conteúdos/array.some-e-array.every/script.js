// Array.some e Array.every:

// O exemplo abaixo usa o some para verificar se possui algum nome que começa com a letra desejada:
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

// O exemplo abaixo usará o every para verificar se o estudante passou em todas as matérias:
const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
  const verifyGrades = (studentGrades) => (
    Object.values(studentGrades).every((grade) => grade === 'Aprovado')
  );
  
  console.log(verifyGrades(grades));

// Para fixar:

/* 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver
contido e caso contrário, retorne false , use some; */

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
    return arr.some((item) => item === name);
}

console.log(hasName(names, 'Ana'));

/* 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas
tiverem a idade maior ou igual a mínima e caso contrário false , use every ;
 */

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
    //Adicione seu código aqui
    return Object.values(arr).every((age) => age.age >= minimumAge);
  }
  
  console.log(`Todos tem no mínimo 18 anos: ${verifyAges(people, 18)}`);
  console.log(`Todos tem no mínimo 16 anos: ${verifyAges(people, 16)}`);
  