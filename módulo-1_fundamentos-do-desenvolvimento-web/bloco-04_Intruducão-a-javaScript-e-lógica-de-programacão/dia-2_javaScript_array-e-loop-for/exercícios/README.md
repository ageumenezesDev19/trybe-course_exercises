## Português 🇧🇷

# <strong>Agora a prática</strong>

### Aqui foi a hora de colocar a mão na massa e aprofundar os meus conhecimentos em JavaScript - Array e loop For 🎯💪!

### Segue as orientações:

## Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

```javascript
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
```

1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

- A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

5. Utilizando for, descubra qual o maior valor contido no array e imprima-o;

6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

7. Utilizando for, descubra qual o menor valor contido no array e imprima-o;

8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

#

# Bônus

### Para os próximos exercícios tive que <a href="http://devfuria.com.br/logica-de-programacao/introducao-ao-algoritmo-de-ordenacao-bubble-sort/" target="_blank" rel="noopener noreferrer">ler este artigo</a> e tentar entender o que está acontencedo no código abaixo:

```javascript
for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
}
```
1. Ordene o array numbers em ordem crescente e imprima seus valores;

2. Ordene o array numbers em ordem decrescente e imprima seus valores;

3. Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:

```javascript
[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
```

#

## English 🇺🇸

# <strong>Now practice</strong>

### Here was the time to get my hands dirty and deepen my knowledge of JavaScript - Array and For loop 🎯💪!

### Follow the guidelines:

## Carefully read the statements and do what you ask! We will use this array to perform exercises 1 through 7:

```javascript
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
```

1. In this first exercise, go through the array printing all the values ​​it contains with the console.log() function;

2. For the second exercise, add up all the values ​​contained in the array and print the result;

3. For the third exercise, calculate and print the arithmetic mean of the values ​​contained in the array;

- The arithmetic mean is the result of the sum of all elements divided by the total number of elements.

4. With the same code as the previous exercise, if the final value is greater than 20, print the message: "value greater than 20". If not, print the message: "value less than or equal to 20";

5. Using for, find the largest value contained in the array and print it;

6. Find out how many odd values ​​there are in the array and print the result. If none exist, print the message: "no odd values ​​found";

7. Using for, find the smallest value contained in the array and print it;

8. Using for, create an array that goes from 1 to 25 and print the result;

9. Using the array created in the previous exercise, print the result of dividing each element by 2.

#

# Bonus

### For the next exercises I had to <a href="http://devfuria.com.br/logica-de-programacao/introducao-ao-algoritmo-de-ordenacao-bubble-sort/" target="_blank" rel="noopener noreferrer">read this article</a> and try to understand what is happening in the code below:

```javascript
for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
}
```
1. Sort the array numbers in ascending order and print their values;

2. Sort the array numbers in descending order and print their values;

3. Now create a new array from the numbers array, without losing it. Each value in the new array must equal the corresponding value in the array numbers multiplied by the following. For example: the first value of the new array should be 45, as it is the multiplication of 5 (first value) and 9 (next value). The second value of the new array should be 27, as it is the multiplication of 9 (second value) and 3 (next value), and so on. If there is no next value, the multiplication should be done by 2. Do this using the for and the push method. The result should be the array below:

```javascript
[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
```