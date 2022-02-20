// Português 🇧🇷 

/* 1- O fatorial é a multiplicação de um número natural pelos seus antecessores,
exceto o zero. Por exemplo: */

/* O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24 */

// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

// Preferi criar arrow functions para ficar mais organizado.
const theFactorial = (factorialNumber) => {
    let result = 1;
    for (let i = factorialNumber; i > 0; i--) {
    result =  result * i;
    }

    return result;
}

console.log(theFactorial(10)); // 3628800

/* 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana"
seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar
se seu algoritmo está funcionando corretamente. */

const stringInverter = (string) => {
    let newString = '';
    for (let i = string.length - 1; i >= 0; i -= 1) {
        newString += string[i];
    }

    return newString.toLowerCase();
}

console.log(stringInverter('banana')); // ananab

// 3- Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css'];

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor.
// Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

const biggestWord = (theArray) => {
    let bigger = '';
    for (let i = 0; i < theArray.length; i += 1) {
        for (let s = 1; s < theArray.length; s += 1) {
            if (theArray[i].length > theArray[s].length
                && theArray[i].length > bigger.length) {
                bigger = theArray[i];
            }
        }
    }

    return bigger;
}

console.log(biggestWord(array)); // Javascript

const smallestWord = (theArray) => {
    let smaller = `isn't the ${biggestWord(theArray)}`;
    for (let i = 0; i < theArray.length; i += 1) {
        for (let s = 1; s < theArray.length; s += 1) {
            if (theArray[i].length < theArray[s].length
                && theArray[i].length < smaller.length) {
                smaller = theArray[i];
            }
        }
    }

    return smaller;
}

console.log(smallestWord(array));

/* 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo
que retorne o maior número primo entre 0 e 50.
 */

const biggestPrimeNumber = (num1, num2) => {
    let biggerOne = 0;
    if (num2 <= 10) {
        for (let i = num1; i <= num2; i += 1) {
            if (i % i === 0 && i === 3 || i === 5 || i === 7
                && i > biggerOne) {
                biggerOne = i;
            }
        }
    } else if (num2 >= 10) {
        for (let i = num1; i <= num2; i += 1) {
            if (i % i === 0 && i > biggerOne && i % 2 !== 0
                && i % 3 !== 0 && i % 4 !== 0 && i % 5 !== 0
                && i % 6 !== 0 && i % 7 !== 0 && i % 8 !== 0
                && i % 9 !== 0 && i % 10 !== 0) {
                biggerOne = i;
            }
        }
    }

    return biggerOne;
}

console.log(biggestPrimeNumber(0, 50)); // 47

// ----------------------------------------------------------------

// English 🇺🇸
/* 1- The factorial is the multiplication of a natural number by its predecessors,
except zero. For example: */

/* The factorial is represented by the sign !
4! = 4 x 3 x 2 x 1 = 24 */

// Based on this information, create an algorithm that returns the factorial of 10.

// I preferred to create arrow functions to be more organized.
const theFactorial = (factorialNumber) => {
    let result = 1;
    for (let i = factorialNumber; i > 0; i--) {
    result = result * i;
    }

    return result;
}

console.log(theFactorial(10)); // 3628800

/* 2- Now, develop an algorithm that is able to invert a word. For example, the word "banana"
would be inverted to "ananab". Use the string below as an example, then change it to others to verify
if your algorithm is working correctly. */

const stringInverter = (string) => {
    let newString = '';
    for (let i = string.length - 1; i >= 0; i -= 1) {
        newString += string[i];
    }

    return newString.toLowerCase();
}

console.log(stringInverter('banana')); // pineapple

// 3- Consider the array of strings below:
let array = ['java', 'javascript', 'python', 'html', 'css'];

// Write two algorithms: one that returns the largest word in this array and one that returns the smallest.
// Consider the number of characters in each word.

let array = ['java', 'javascript', 'python', 'html', 'css'];

const biggestWord = (theArray) => {
    let bigger = '';
    for (let i = 0; i < theArray.length; i += 1) {
        for (let s = 1; s < theArray.length; s += 1) {
            if (theArray[i].length > theArray[s].length
                && theArray[i].length > bigger.length) {
                bigger = theArray[i];
            }
        }
    }

    return bigger;
}

console.log(biggestWord(array)); // javascript

const smallestWord = (theArray) => {
    let smaller = `isn't the ${biggestWord(theArray)}`;
    for (let i = 0; i < theArray.length; i += 1) {
        for (let s = 1; s < theArray.length; s += 1) {
            if (theArray[i].length < theArray[s].length
                && theArray[i].length < smaller.length) {
                smaller = theArray[i];
            }
        }
    }

    return smaller;
}

console.log(smallestWord(array));

/* 4- A prime number is one that is divisible only by 1 and itself. Knowing this, write an algorithm
that returns the largest prime number between 0 and 50.
 */

const biggestPrimeNumber = (num1, num2) => {
    let biggerOne = 0;
    if (num2 <= 10) {
        for (let i = num1; i <= num2; i += 1) {
            if (i % i === 0 && i === 3 || i === 5 || i === 7
                && i > biggerOne) {
                biggerOne = i;
            }
        }
    } else if (num2 >= 10) {
        for (let i = num1; i <= num2; i += 1) {
            if (i % i === 0 && i > biggerOne && i % 2 !== 0
                && i % 3 !== 0 && i % 4 !== 0 && i % 5 !== 0
                && i % 6 !== 0 && i % 7 !== 0 && i % 8 !== 0
                && i % 9 !== 0 && i % 10 !== 0) {
                biggerOne = i;
            }
        }
    }

    return biggerOne;
}

console.log(biggestPrimeNumber(0, 50)); // 47