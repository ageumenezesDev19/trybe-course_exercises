// Array Destructuring:

/* Com a desestruturação de array podemos declarar todas as variáveis contendo os nomes dos países usando
apenas uma única linha de código:  (A diferença entre ele e o Object destructuring é que no caso do objeto utilizamos
    chaves para acessar os valores das propriedades e dentro das chaves colocamos os keys, já no array destructuring usamos
    colchetes e dentro deles colocamos variáveis para representar os valores dos indexes).
 */

    const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
    const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;
    
    console.log(firstCountry); // Brazil
    console.log(secondCountry); // Japan
    console.log(thirdCountry); // China
    console.log(fourthCountry); // Canada
    // Ou
    console.log(firstCountry, secondCountry, thirdCountry, fourthCountry);

// Para Fixar:

// 1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const [saudação1, saudação2] = saudacoes;
console.log(saudação1); // Olá
// Ou:
console.log(saudação1); // Olá
saudação2('Meus nome é Ageu!'); // Meus nome é Ageu!

/* 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays,
corrija os valores das variáveis. */

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[comida = 'arroz', animal = 'gato', bebida = 'água'];
console.log(comida, animal, bebida);

/* 3 - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir.
Através de array destructuring, faça com que existam apenas números pares na variável numerosPares .
*/
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
const [, , , fourth, fifth, sixth, seventh] = numerosPares;
console.log(fourth, fifth, sixth, seventh);
