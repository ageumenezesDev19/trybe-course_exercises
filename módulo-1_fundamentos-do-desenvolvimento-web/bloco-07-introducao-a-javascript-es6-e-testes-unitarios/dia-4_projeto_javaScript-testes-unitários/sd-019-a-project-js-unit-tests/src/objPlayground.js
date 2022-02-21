/*
  Implemente a função calculator que recebe dois números inteiros como parâmetro e retorna um objeto com as seguintes chaves:
    - sum;
    - mult;
    - div;
    - sub.
  Para cada chave atribua como valor a operação correspondente à sua chave:
    - sum: retorna o resultado da soma dos dois números;
    - mult: retorna o resultado da multiplicação dos dois números;
    - div: retorna o resultado da divisão dos dois números;
    - sub: retorna o resultado da subtração dos dois números.
  Os resultados das divisões devem sempre ser arredondados para baixo.
  
  Parâmetros:
  - Dois números inteiros.

  Comportamento:
  calculator(1, 2); // { sum: 3, mult: 2, div: 1, sub: 0 }
  
  Depois de ter implementado a função calculator, desenvolva uma função que converta objetos em arrays, de chaves, valores ou ambos.
  A sua função deve receber dois parâmetros:

    * o primeiro parâmetro deve ser uma string que indica o tipo de conversão;
    * o segundo parâmetro deve ser um objeto semelhante ao que é retornado pela função calculator que você acabou de desenvolver.

  Parâmetros:
  - Uma string que indica o tipo de conversão;
  - Um objeto no formato { sum: 3, mult: 2, div: 0, sub: -1 };

  Comportamento:
  arrayGenerator('keys', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ 'sum', 'mult', 'div', 'sub' ]
  arrayGenerator('values', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ 3, 2, 1, 0 ]
  arrayGenerator('entries', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ [ 'sum', 3 ], [ 'mult', 2 ], [ 'div', 1 ], [ 'sub', 0 ] ]
*/

const calculator = (number1, number2) => {
  const sum1 = Math.floor(number1 + number2);
  const mult1 = Math.floor(number1 * number2);
  const div1 = Math.floor(number1 / number2);
  const sub1 = Math.floor(number1 - number2);
  const calculation = {
    sum: +sum1.toFixed(0),
    mult: +mult1.toFixed(0),
    div: +div1.toFixed(0),
    sub: +sub1.toFixed(0),
  };

  return calculation;
}; /* Em casos onde uma variável string contem números,
  a forma mais rápida de fazer a conversão de tipos é por meio do operador "+".
  Font: https://medium.com/aprendajs/convertendo-uma-string-em-um-numero-em-javascript-e6c856fb53be */

  /* toFixed(), font: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed */
  /* Math.floor(), font: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round */

const arrayGenerator = (type, object) => {
  const keys = Object.keys(object);
  const values = Object.values(object);
  const entries = Object.entries(object);

  if (type === 'keys') {
    return keys;
  } if (type === 'values') {
    return values;
  } if (type === 'entries') {
    return entries;
  }
};

module.exports = { calculator, arrayGenerator };
