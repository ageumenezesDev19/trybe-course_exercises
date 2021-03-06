// Array.map:

// Diferença entre fazer uma mesma função usando for e em seguida usando map:

//For:
const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
  ];
  
  const fullNames = [];
  
  for (let index = 0; index < persons.length; index += 1) {
    fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
  }
  
  console.log(fullNames);
// [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ] - Faz um novo array.

//Map:
const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
  ];
  
  const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);
  
  console.log(fullNames); /* [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ] - Faz um novo array com um código
                            mais fácil de entender e mais limpo. O for foi substituído por apenas uma linha de código.*/

// Outro Ex:

// Map
const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]

// For;
const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = [];
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > 0) {
    negativeNumbers.push(numbers[index] * -1);
  } else {
    negativeNumbers.push(numbers[index]);
  }
}

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]

// ----------------------------------------------------------------

/* Outras formas de usar o .map é unir dois arrays para criar um novo. Considere que você possui duas listas:
o preço do primeiro produto ( Arroz ) é o primeiro elemento da lista prices ( 2.99 ), e assim por diante:
 */

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

// Deseja-se juntá-las em apenas uma lista de objetos que fique dessa forma:
// const listProducts = [{ Arroz: 2.99 },...]

/* Tente criar uma função que resolva esse problema. Lembre-se, também, que as funções passadas para as HOFs podem
receber vários parâmetros, não só o elemento sobre o qual ela está sendo iterada! Use isso em seu favor */

// Escreva aqui o seu código:
const theProducts = (productsList, pricesList) => productsList.map((product, index) => (
    { [product]: pricesList[index] }));

const listProducts = theProducts(products, prices);

console.log(listProducts); // [ { Arroz: 2.99 }, { 'Feijão': 3.99 }, { Alface: 1.5 }, { Tomate: 2 } ]

// forEach vs Map:

/* O map aplica sobre os elementos de um array uma função e retorna um array novo, sem modificar o original;

A forEach não tem tal restrição. Ela pode modificar o array original e retorna nada por padrão - ela pode criar
um array novo a partir de um antigo, pode simplesmente buscar por um elemento e retorná-lo, pode não retornar nada, enfim!
Ela é genérica e pode fazer diversas coisas. */

const números = [1, 2, 3, 4, 5, 6];
console.log(números.map((numero) => numero * 2)); // Retorno: [2, 4, 6, 8, 10, 12]

const paresMenoresQueCinco = [];
números.forEach((numero) => {
  if (numero < 5 && numero % 2 === 0) {
    paresMenoresQueCinco.push(numero);
  }
});
console.log(paresMenoresQueCinco); // Retorno: [2, 4]

// ----------------------------------------------------------------

/* Então, como pode-se usar as outras HOFs junto com o map? Para os exemplos a seguir será usado um array com os dados de
estudantes de um colégio. */

const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: '59' },
        { name: 'Português', nota: '80' },
        { name: 'Química', nota: '78' },
        { name: 'Biologia', nota: '92' },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '76' },
        { name: 'Português', nota: '90' },
        { name: 'Química', nota: '70' },
        { name: 'Biologia', nota: '80' },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '91' },
        { name: 'Português', nota: '85' },
        { name: 'Química', nota: '92' },
        { name: 'Biologia', nota: '90' },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '70' },
        { name: 'Português', nota: '70' },
        { name: 'Química', nota: '60' },
        { name: 'Biologia', nota: '50' },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '80' },
        { name: 'Português', nota: '82' },
        { name: 'Química', nota: '79' },
        { name: 'Biologia', nota: '75' },
      ],
    },
  ];

// Função para buscar e imprimir o nome completo de todos os estudantes que estudam no turno da manhã.
const allNameStudents = [];

for (let index = 0; index < estudantes.length; index += 1 ) {
  if(estudantes[index].turno === 'Manhã') {
    allNameStudents.push(`${estudantes[index].nome} ${estudantes[index].sobrenome}`)
  }
}

console.log(allNameStudents);

// Com map e filter.
const allNameStudents2 = estudantes.filter((estudante) => (
    estudante.turno === 'Manhã')).map((estudante) => `${estudante.nome} ${estudante.sobrenome}`);
  
  console.log(allNameStudents2);

/* Agora vamos usar um map com um find .
Buscar um estudante pelo nome e retornar a situação dele em cada matéria:
Apenas com for : */

//For
const findStudent = (name, students) => {
    for (let index = 0; index < students.length; index += 1) {
      if (students[index].nome === name) {
        return students[index];
      }
    }
  };
  
  const reportStatus = (name, students) => {
    const getStudent = findStudent(name, students);
    const report = [];
    for (let index = 0; index < getStudent.materias.length; index += 1) {
      if (getStudent.materias[index].nota >= 60) {
        report.push(`${getStudent.materias[index].name} Aprovado`);
      } else {
        report.push(`${getStudent.materias[index].name} Reprovado`);
      }
    }
    return report;
  };
  
  console.log(reportStatus('Natalia', estudantes));

// find e map:
const reportStatus2 = (name, students) => {
    const studentInfo = students.find((student) => student.nome === name);
    return studentInfo.materias.map((materia) => (
      `${materia.name} ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`
    ));
  };
  
  console.log(reportStatus2('Wilson', estudantes));

  /* O código teve uma redução drástica no número de linhas! Primeiro, fizemos um find para buscar e retornar os
  dados do estudante. O objeto foi retornado e salvo na variável studentsInfo , depois o map foi usado para percorrer
  as matérias do objeto retornado e salvar o que se queria em um array da forma desejada.
 */
