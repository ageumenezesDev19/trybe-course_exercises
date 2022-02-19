// Default Parameters:

// O que acontece se não passarmos o parâmetro de uma função?
const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!

/* Você verá que a função retornará undefined . Você consegue pensar em uma forma de corrigir esse problema?
Afinal, podemos esquecer de chamar a função com o nome do usuário. Uma solução seria: */

const greeting = (user) => {
    const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
    console.log(`Welcome ${userDisplay}!`);
  };
  
  greeting(); // Welcome usuário!

// Mas ela não é muito elegante.

/* Com o ES6, podemos pré-definir um parâmetro padrão para a função. Assim, podemos reescrever o exemplo
anterior da seguinte forma: */
const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // Welcome usuário!

// Para Fixar:

/* Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos.
Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.
*/

const multiply = (number = 1, value = 1) => number * value;
  
  console.log(multiply(8));
