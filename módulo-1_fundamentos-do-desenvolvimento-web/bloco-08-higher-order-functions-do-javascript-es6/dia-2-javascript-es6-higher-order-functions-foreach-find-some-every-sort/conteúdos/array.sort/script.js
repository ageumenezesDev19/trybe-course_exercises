// Array.sort:

// Exemplo com um array de strings:
const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

// Agora, exemplo com um array de números:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

/* a forma como ela organiza os elementos do array não é tão intuitiva. Isso ocorre,
pois ela distribui sempre por ordem alfabética . No caso, quando há elementos como números,
a sort coloca de acordo com a ordem alfabética dos códigos desse elemento na tabela de caracteres unicode! */

// Para ordenar de forma numérica crescente, é necessário passar a função a seguir:

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]

/* Explicação: Se a operação de elemento1 com elemento2 der resultado negativo, elemento1 vai para trás.
Caso contrário, vai para frente, para, de forma decrescente, só inverter elemento1 - elemento2 para elemento2 - elemento1. */

// Se realizarmos uma simples modificação no retorno da função que ordena os números, o que acontece é:
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => b - a);
console.log(points); // [ 100, 40, 25, 10, 5, 1 ]

// Para fixar:

// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  // Adicione se código aqui

  const saveNameData = [];
  for (let i = 0; i < people.length; i += 1) {
    saveNameData.push(people[i].name);
  }
  
  const saveAgeData = [];
  for (let i = 0; i < people.length; i += 1) {
      saveAgeData.push(people[i].age);
  }

  saveAgeData.sort((a, b) => a - b);


  // console.log(saveNameData);
  // console.log(saveAgeData);

  console.log(people);

// 2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.
