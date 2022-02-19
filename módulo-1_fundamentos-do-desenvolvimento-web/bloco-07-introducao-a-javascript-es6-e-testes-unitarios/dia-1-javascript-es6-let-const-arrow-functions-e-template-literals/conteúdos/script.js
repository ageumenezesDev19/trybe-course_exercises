// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`);
/*Primeira linha;
Segunda linha;
Terceira linha;*/

const myName = 'Isabella';
console.log(`Welcome ${myName}!`); // + um exemplo (Com templete Literals).

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');
/*Primeira linha;
Segunda linha;
Terceira linha;*/

const myName = 'Isabella';
console.log('Hello' + ' ' + myName + '!'); // + um exemplo (Sem template Literals).

//----------------------------------------------------------------
// Arrow functions:

// Ex:
const printName = () => {
    const myName = 'Lucas';
    return myName;
  };
  
  console.log(printName());

// ----------------------------------------------------------------
// Ternary operator:

// A sintaxe básica do operador ternário é muito simples:
`expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression); // isso é verdade

const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression); // isso é mentira
// Resumindo: x ? y : z.

// Situação em que é mais simples usar o operador ternário:
const checkIfElse = (age) => {
    if (age >= 18) {
      return `Você tem idade para dirigir!`;
    } else {
      return `Você ainda não tem idade para dirigir...`;
    }
  };
  
  const checkTernary = (age) => (
    age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`
  );
  
  // ------------------------
  
  // Situação em que usar o operador ternário não faz muito sentido:
  const checkIfElse = (fruit) => {
    if (fruit === `maçã`) {
      return `Essa fruta é vermelha`;
    } else if (fruit === `banana`) {
      return `Esta fruta é amarela`;
    } else {
      return `Não sei a cor`;
    }
  };
  
  const checkTernary = (fruit === `maçã`) ? `Essa fruta é vermelha` 
    : ((fruit === `banana`) ? `Esta fruta é amarela` : `Não sei a cor`);
  
  // Aninhar operadores  ternários, como no exemplo acima, não é uma boa prática,
  // pois torna o seu código truncado e difícil de ler, tirando todo o sentido de um
  // operador cujo objetivo é facilitar a sua vida e a da pessoa que lerá seu código
  // no futuro!
