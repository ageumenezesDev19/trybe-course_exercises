## Português 🇧🇷 

# <strong>Operadores lógicos</strong>

### Vi aqui que, na linguagem JavaScript, temos três principais operadores lógicos: && , || e o !. Podendo ser chamados como "AND", "OR" e "NOT", respectivamente.

Isso não vai me acompanhar apenas no JavaScript, mas em toda a minha carreira. Por isso, é muito importante que eu praticipe bastante e fique bem familiarizado com o conceito de cada um deles.

#

#### Então eu fiz o que se pede a seguir...

#

## Operador AND

### Esse operador é binário. O que significa que ele precisa de dois elementos para funcionar corretamente.

Para abstrair seu funcionamento, pense o seguinte: Você está numa padaria e quer comer alguma coisa no café da manhã. Então você diz "Por favor, me vê um cafézinho <strong>E</strong> um pão na chapa".

Seria muito infeliz se você recebesse apenas o café ou só o pão, não é? Também não seria legal se recebêssemos um pão na chapa, mas a nossa bebida ser um caldo de cana. Porque nossa expectativa era de que as duas condições fossem atendidas corretamente. Esse é exatamente o papel do && . Ele só vai retornar true se as duas operações que estão em volta dele forem consideradas verdadeiras.

### Em JavaScript, nosso pedido poderia ser interpretado da seguinte maneira:
```javascript
const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}
```
Tente brincar e mude os valores das variáveis, você verá que a condição não vai ser atendida e portanto, a mensagem imprimida será outra.

### Precisamos manter em mente que só teremos true se as duas expressões em volta dele forem true também.
```javascript
  const conditionOne = true;
  const conditionTwo = false;

  console.log(conditionOne && conditionTwo);
```
Execute o código acima e veja que a verificação é false porque uma das condições não é true.

### Mas... E o que acontece se existir um encadeamento de &&? 🤔
### Imagine que exista a seguinte expressão:
```javascript
const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;
```
Você consegue imaginar qual será o resultado final? Será que vai dar erro?

A ordem que a operação vai obedecer, será da esquerda para a direita, seguindo algo parecido com a imagem abaixo.

<img width="800px" src="https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/javascript/images/chaining-operator-and-9c075d4f260c4663341da238e8ef8e48.png" alt="Encadeamento de operadores AND">
<!--Fonte: https://www.betrybe.com-->


##### <p style="text-align: center;">Encadeamento de operadores AND</p>

### Abaixo tem um mini cheat sheet para você ver em quais possibilidades teremos resposta true ou false.
```javascript
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
```
1. Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.

2. Crie uma variável chamada "message" que, inicialmente, é uma string vazia.

3. Implemente condicionais para que:

- Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".

- Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".

- Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".

- Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".

- Agora imprima a variável message fora das suas condições.

#

## Operador OR

Você já viu um operador em que as duas condições devem ser verdadeiras para que o resultado final seja verdadeiro.
Com o operador OR (ou || , no JavaScript), precisamos apenas que uma das condições sejam verdadeiras: <strong> isso ou aquilo</strong>.

Por exemplo, imagine novamente que estamos na padaria, mas nosso pedido agora vai ser diferente. Dessa vez, se não tiver um café, pode ser um suco de laranja. Como escreveríamos isso em JavaScript?
```javascript
const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}
```
### <strong>Atenção: Esse algoritmo deu certo mesmo não tendo valores true em sua operação. Isso é porque um valor não precisa ter true ou false em sua atribuição para ser considerado verdadeiro ou falso. O JavaScript computa esses valores booleanos por trás do panos, esses valores são chamados truthy e falsy , assim, quando houver um contexto booleano em alguma operação mas seus elementos não forem true ou false , esses valores serão levados em conta.</strong>
_

O símbolo "||" é a representação em caracter desse operador. Novamente, precisamos de dois elementos em torno dele para que funcione corretamente. E para que seu retorno seja verdadeiro, um de seus valores deve ser true <strong>ou</strong> ser considerado truthy.
Abaixo temos uma tabela mostrando como é o resultado de cada operação, assim como no operador "AND":
```javascript
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
```
1. Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".

2. Implemente condicionais para que:

- Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".

- Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".

- Experimente trocar o valor da string ou até mesmo montar seu próprio algoritmo. Esse assunto é muito importante para seu aprendizado :).

#

## Operador NOT

Vamos iniciar com um exemplo do que o NOT é capaz, você consegue prever o que esse código vai imprimir?
```javascript
  console.log((2 + 2) === 4);
```
Isso aqui deve nos retornar true , não é? Afinal, 2 + 2 resultar em 4 é uma declaração verdadeira. Agora, se adicionarmos o operador NOT antes dessa declaração?
```javascript
  console.log(!(2 + 2) === 4);
```
Se você executar esse código, vai perceber que o valor impresso é o oposto do anterior. 🤔

Estamos diante de um operador muito poderoso. Ele pode <strong>inverter</strong> o valor booleano de um elemento. Isso mesmo!! Se tivermos uma variável ou valor considerado true , podemos gerar o resultado oposto simplesmente fazendo !variável . Ou seja, false .

Então, sabendo que o resultado original da operação ali em cima é true , quando a gente insere o operador NOT antes da operação, teremos o valor contrário a nossa resposta final, que é false .

Vale lembrar que o conceito de truthy e falsy também se aplica aqui, por isso não estamos limitados apenas aos tipos primitivos booleanos. Podemos usar em:

|

### Strings...
```javascript
const squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false
```

### Números...
```javascript
console.log(!42); // false

console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.
```

### Valores nulos...
```javascript
console.log(!null); // true
```

### Valores indefinidos...
```javascript
console.log(!undefined); // true
```

...e em muitos outros elementos. As possibilidades são enormes!!!

#

## English 🇺🇸

# <strong>Logical Operators</strong>

### I saw here that, in the JavaScript language, we have three main logical operators: && , || and the !. They can be called as "AND", "OR" and "NOT", respectively.

This won't just follow me through JavaScript, but my entire career. So it's very important that I practice a lot and get very familiar with the concept of each of them.

#

#### So I did what is asked next...

#

## AND operator

### This operator is binary. Which means it needs two elements to work properly.

To abstract how it works, think about the following: You are in a bakery and want to eat something for breakfast. So you say "Please see me a cup of coffee <strong>AND</strong> a loaf of bread."

It would be very unfortunate if you only received the coffee or just the bread, wouldn't you? It would also not be nice if we received a loaf of bread on the plate, but our drink was sugarcane juice. Because our expectation was that both conditions were met correctly. This is exactly the role of && . It will only return true if the two operations surrounding it are considered to be true.

### In JavaScript, our request could be interpreted as follows:
```javascript
const food = 'bread on the plate';
const drink = 'coffee';

if (drink === 'coffee' && food === 'bread on the plate') {
  console.log('Thank you very much for the meal :)');
} else {
  console.log('I think there was a mistake with my order');
}
```
Try playing and change the values ​​of the variables, you will see that the condition will not be met and therefore the printed message will be different.

### We need to keep in mind that we only get true if the two expressions around it are true too.
```javascript
  const conditionOne = true;
  const conditionTwo = false;

  console.log(conditionOne && conditionTwo);
```
Run the code above and see that the check is false because one of the conditions is not true.

### But... And what happens if there is a && chain? 🤔
### Suppose the following expression exists:
```javascript
const carrots = true;
const milk = true;
const rice = true;
const bean = true;

const Shoppinglist = carrots && milk && rice && beans;
```
Can you imagine what the end result will be? Will it give an error?

The order that the operation will obey will be from left to right, following something like the image below.

<img width="800px" src="https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/javascript/images/chaining-operator-and-9c075d4f260c4663341da238e8ef8e48.png" alt="Concatenation of AND operators">
<!--Source: https://www.betrybe.com-->


##### <p style="text-align: center;">AND operator chaining</p>

### Below is a mini cheat sheet for you to see in which possibilities we will have a true or false answer.
```javascript
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
```
1. Create a constant called "currentHour" that takes a number between 4 and 24 of your choice to represent the hours of the day.

2. Create a variable called "message" which is initially an empty string.

3. Implement conditionals so that:

- If the time is greater than or equal to 22, enter "We shouldn't eat anything, it's bedtime" in the variable "message".

- If the time is greater than or equal to 18 and less than 22, enter "Rango in the evening, let's have dinner :D" in the variable "message".
If the time is greater than or equal to 14 and less than 18, enter "Shall we make a cake for breakfast?" in the variable "message".

- If the time is between 11 am and 2 pm, enter "Lunch time!!!" in the variable "message".

- If the time is between 4 and 11, enter "Hmmm, freshly brewed coffee smell" in the "message" variable.

- Now print the variable message out of your conditions.

#

## OR Operator

You've already seen an operator where both conditions must be true for the final result to be true.
With the OR operator (or || in JavaScript), we only need one of the conditions to be true: <strong>this or that</strong>.

For example, imagine again that we are at the bakery, but our order will now be different. This time, if you don't have coffee, it could be orange juice. How would we write this in JavaScript?
```javascript
const beveragePrincipal = 'coffee';
const drinkAlternativa = 'orange juice';

if (Main drink === 'coffee' || Alternative drink === 'orange juice') {
  console.log("Thanks for answering me :D")
} else {
  console.log("Hey, I didn't order this!");
}
```
### <strong>Warning: This algorithm worked even though it doesn't have true values ​​in its operation. This is because a value does not need to have true or false in its assignment to be considered true or false. JavaScript computes these boolean values ​​behind the scenes, these values ​​are called truthy and false , so when there is a boolean context in some operationration but its elements are not true or false , these values ​​will be taken into account.</strong>
_

The symbol "||" is the character representation of that operator. Again, we need two elements around it for it to work correctly. And for its return to be true, one of its values ​​must be true <strong>or</strong> be considered truthy.
Below we have a table showing how the result of each operation is, as well as in the "AND" operator:
```javascript
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
```
1. Create a variable called "weekDay" that receives the string "Wednesday".

2. Implement conditionals so that:

- If our "weekDay" variable is "Monday", "Tuesday", "Wednesday", "Thursday" or "Friday", print "Yah, another day of learning at Trybe > :D".

- If it's any weekend, print "FINALLY, well-deserved rest UwU".

- Try changing the string value or even building your own algorithm. This subject is very important for your learning :).

#

## NOT Operator

Let's start with an example of what NOT is capable of, can you predict what this code will print?
```javascript
  console.log((2 + 2) === 4);
```
This should return true to us, right? After all, 2 + 2 results in 4 is a true statement. Now, what if we add the NOT operator before this declaration?
```javascript
  console.log(!(2 + 2) === 4);
```
If you run this code, you will notice that the printed value is the opposite of the previous one. 🤔

We are facing a very powerful operator. It can <strong>invert</strong> the boolean value of an element. That's right!! If we have a variable or value considered true , we can generate the opposite result simply by making !variable . That is, false .

So, knowing that the original result of the operation up there is true , when we insert the NOT operator before the operation, we will have the opposite value to our final answer, which is false .

Remember that the concept of truthy and falsey also applies here, so we're not just limited to Boolean primitive types. We can use in:

|

### Strings...
```javascript
const squirtle = "best starter pokemon";

console.log(!squirtle); // false
```

### Numbers...
```javascript
console.log(!42); // false

console.log(!0); // true
// The number 0 has the value "falsy" in javascript. So its opposite is true.
```

### Null values...
```javascript
console.log(!null); // true
```

### Undefined values...
```javascript
console.log(!undefined); // true
```

...and many other elements. The possibilities are huge!!!