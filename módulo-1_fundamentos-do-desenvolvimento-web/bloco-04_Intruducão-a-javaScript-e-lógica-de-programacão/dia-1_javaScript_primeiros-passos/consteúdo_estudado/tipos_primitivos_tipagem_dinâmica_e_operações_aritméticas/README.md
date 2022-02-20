## Português 🇧🇷 

# Hora de aplicar o que aprendi sobre Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas!

## Parte 1:

### No exemplo abaixo, foi passada as informações de um paciente. Eu tive que utilizar o operador typeof para imprimir qual o tipo das variáveis patientId , isEnrolled , patientInfo e patientEmail.

### Copiei e colei o código a seguir:

```javascript
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';
```

#

## Parte 2:

### Foi me feita uma pergunta: O que aconteceria se tentássemos checar qual o tipo da variável patientAge?, então experimentei executar o comando console.log(typeof patientAge) pra ver o que acontece. Por não ter declarado esta variável o seu tipo é undefined, como pude observar no retorno do console.log(typeof patientAge). Experimentei também trocar o valor de patientId = 50 para patientId = '50'. Executei novamente um console.log() para imprimir o tipo dessa variável após a modificação. Então eu vi que o retorno agora é uma string pois coloquei o número 50 dentro das aspas. O JavaScript interpreta como string tudo o que estiver entre aspas.

_

### Agora que conheco os operadores aritméticos básicos do JavaScript (Já sabia disso mas é bom revisar), fui praticar mais. Me passaram uma lista de operadores na tabela JavaScript Arithmetic Operators bem legal que está disponível nesse <a href="https://www.w3schools.com/js/js_operators.asp" target="_blank" rel="noopener noreferrer">link</a>. Pode ser muito útil caso eu tiver dúvidas. Fiz algumas operações simples para encontrar a área e o perímetro de um retângulo de base 5 e altura 8.

1. Crie uma costante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.
2. Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
3. Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.

#

## English 🇺🇸

# Time to apply what I learned about Primitive Types, Dynamic Typing and Arithmetic Operations!

## Part 1:

### In the example below, a patient's information was passed. I had to use the typeof operator to print what type of variables patientId , isEnrolled , patientInfo and patientEmail is.

### I copied and pasted the following code:

```javascript
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Saints',
};
const patientEmail = 'ana@email.com';
```

#

## Part 2:

### I was asked a question: What would happen if we tried to check what the patientAge variable was? so I tried running the console.log(typeof patientAge) command to see what happens. Because I didn't declare this variable, its type is undefined, as I could see in the return from console.log(typeof patientAge). I also tried changing the value from patientId = 50 to patientId = '50'. I rerun a console.log() to print the type of this variable after modification. So I saw that the return is now a string because I put the number 50 inside the quotes. JavaScript interprets anything in quotes as a string.

_

### Now that I know the basic JavaScript arithmetic operators (I already knew that but it's good to review), I went to practice more. I was given a list of operators in the really cool JavaScript Arithmetic Operators table which is available at this <a href="https://www.w3schools.com/js/js_operators.asp" target="_blank" rel="noopener noreferrer"> link</a>. It can be very helpful if I have questions. I did some simple operations to find the area and perimeter of a rectangle of base 5 and height 8.

1. Create a constant called base and a variable called height and set their respective values: 5 and 8.
2. Create a constant called area and assign it the result of multiplying the base by the height. Tip: remember to always use console.log() to print variables and check the results of operations!
3. Create a constant called perimeter and give it the sum of all sides of the rectangle.