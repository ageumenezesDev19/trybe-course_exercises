// Object Destructuring:

// Como exatamente funciona a desestruturação de objeto?
/* A sintaxe da desestruturação de objetos pede para passarmos o nome das propriedades que queremos
acessar do lado esquerdo, entre chaves, e o objeto do lado direito: */

// Ex:
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const { name, price, seller } = product;
console.log(`${name}, ${price}, ${seller}.`);
/* Dessa forma, conseguimos extrair o valor da propriedade que precisamos acessar com muito menos código,
atribuindo este valor à variáveis. Vale lembrar também que podemos adicionar quantas propriedades forem
necessárias dentro das chaves, basta seguirmos a sintaxe da desestruturação de objetos. */

/* Mas, e se a chave do objeto contiver outro objeto como valor?
Vejamos o exemplo abaixo e entenda como podemos resolver este problema: */

// definindo o objeto
const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

// desestruturando o objeto:
const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// imprimindo os valores:
console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);
/* para desconstruir uma chave que contém um objeto como valor, precisamos utilizar o nome da chave seguido por : ,
segue a sintaxe: homeWorld: { name: planetName } . Agora planetName é uma variável que recebe o valor da propriedade
name do objeto homeWorld . */

// Podemos também usar a desestruturação de objetos em conjunto com o spread operator:

const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
  };

  const { workDays, weekend } = daysOfWeek;
  console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  console.log(weekend); // ['Saturday', 'Sunday']

/* Feito a desestruturação, podemos utilizar o spread operator para juntar os valores do array workDays
com os do array weekend , colocando-os em um novo array chamado weekdays. */

const weekdays = [...workDays, ...weekend];
console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

/* Outro truque legal dessa feature é que você pode reatribuir o nome da propriedade que deseja acessar ao
declará-la como uma variável. Acompanhe o exemplo abaixo:
 */
const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };

/* As propriedades do objeto student não são nada descritivas, não é mesmo? Se fossemos desestruturar esse objeto,
as variáveis que seriam criadas ao extrair as propriedades de students teriam nomes sem significado...pensando nisso,
podemos trocar o nome da variável ao fazermos a desestruturação: */

const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };
  
  const { a: name, b: classAssigned, c: subject } = student;
  
  console.log(name); // Maria
  console.log(classAssigned); // Turma B
  console.log(subject); // Matemática

//  Essa forma de acessar um valor de um objeto e atribuí-lo a uma variável é equivalente ao que temos abaixo:
const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };
  const name = student.a;
  console.log(name); // Maria

/* Por fim, uma outra situação que podemos usar a desestruturação de objetos é quando queremos passar os valores de
um objeto como parâmetros para uma função, como no exemplo abaixo: */

const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };
  
  const printProductDetails = ({ name, price, seller }) => {
    console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
  };
  
  printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

  const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };
  
  const printProductDetails = ({ name, price, seller }) => {
    console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
  };
  
  printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

// Pra fixar:

/* 1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes
ao cargo desta pessoa usuária na empresa trappistEnterprise . Precisamos criar um terceiro objeto, que terá os
dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator . */


const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

const userJobInfos = {
    ...user,
    ...jobInfos,
}

console.log(userJobInfos);

/* 2 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente.
Para isso, utilize a desestruturação de objetos em conjunto com template literals.

Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad
is RLL-Rocket Landing Logic"
 */


const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

const userDetails = {
    ...user,
    ...jobInfos,
}

const { name, age, nationality, profession, squad, squadInitials } = userDetails;

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad
is ${squadInitials}-${squad}`);
