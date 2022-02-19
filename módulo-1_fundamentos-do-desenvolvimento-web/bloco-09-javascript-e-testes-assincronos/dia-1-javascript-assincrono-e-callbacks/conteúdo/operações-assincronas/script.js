// Operações assíncronas

// ex:
setTimeout(() => {
    console.log('Comprar parafusos') // Comprar parafusos
    console.log('Adicionar ao estoque') // Adicionar ao estoque
  }, 2000);
  
  console.log('1 - Receber roda'); // 1 - Receber roda
  console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
  console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

// Praticado:
const pushNumber = (list, number) => list.push(number);

let numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers);

// ----------------------------------------------------------------
const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers); // O retorno é [2, 3]

/* Por que o primeiro código retorna o array [1, 2, 3] enquanto o segundo retorna o array [2, 3]?
Isso ocorre por causa da função setTimeout . Ela é uma função assíncrona, que espera alguns milissegundos
para executar a função passada a ela como parâmetro. No código acima, ela espera 3000 milissegundos (3 segundos)
para executar o pushNumber(numbers, 1) . Como o console.log é uma função síncrona, ele é executado antes do
setTimeout terminar. */

// Para que o console.log mostre o array correto, é necessário chamá-lo após 3000 milissegundos:
const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => console.log(numbers), 3000);
