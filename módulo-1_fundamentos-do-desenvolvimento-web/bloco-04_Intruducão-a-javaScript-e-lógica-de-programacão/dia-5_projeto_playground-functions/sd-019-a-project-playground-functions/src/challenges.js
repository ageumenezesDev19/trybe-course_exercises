// Desafio 1
function compareTrue(p1, p2) {
  // seu código aqui
  if (p1 === true && p2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let calculo = (base * height) / 2;
  return calculo;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui  (string.split(), Fonte: //https://www.w3schools.com/jsref/jsref_split.asp)
let array = string.split(" ");
return array;
}

// Desafio 4
function concatName(name) {
  // seu código aqui
  let first = name[0];
  let last = name[name.length - 1];
  let nameConcated = last + ", " + first;
  return nameConcated;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui  // (Math.max(...), Fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
  let highestNumbers = [];
  let highestNumber = (Math.max(...numbers));
  for (let index = 0; index < numbers.length; index+=1) {
    if (numbers[index] === highestNumber) {
      highestNumbers.push(numbers[index])
    }
  }
  return highestNumbers.length;
}

// Desafio 7           5     2      3
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distCat1;
  let distCat2;
  let ahead;

  if (mouse > cat1) {
    distCat1 = mouse - cat1;
  } else if (mouse < cat1) {
    distCat1 = cat1 - mouse;
  }

  if (mouse > cat2) {
    distCat2 = mouse - cat2;
  } else if (mouse < cat2) {
    distCat2 = cat2 - mouse;
  }

  if (distCat1 < distCat2) {
    ahead = "cat1";
  } else if (distCat1 > distCat2) {
    ahead = "cat2";
  } else if (distCat1 === distCat2) {
    ahead = "os gatos trombam e o rato foge";
  }

  return ahead;
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let rtOfStrings = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 != 0) {
      rtOfStrings.push("fizz");
    } else if (array[i] % 5 === 0 && array[i] % 3 != 0) {
      rtOfStrings.push("buzz");
    
    } if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      rtOfStrings.push("fizzBuzz");
    } else if (array[i] % 3 != 0 && array[i] % 5 != 0) {
      rtOfStrings.push("bug!");
    }
  }

  return rtOfStrings;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let encode = "1";
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === "a") {
      encode = encode + "1";
    } else if (string[i] === "e") {
      encode = encode + "2";
    } else if (string[i] === "i") {
      encode = encode + "3";
    } else if (string[i] === "o") {
      encode = encode + "4";
    } else if (string[i] === "u") {
      encode = encode + "5";
    } else {
      encode = encode + string[i];
    }
  }

  encode = encode.substring(1, encode.length);
  return encode;

// -> substring(startIndex, endIndex) -> fonte: https://www.delftstack.com/pt/howto/javascript/javascript-remove-first-character-from-string/
}

function decode(string) {
  // seu código aqui
  let decode = 1;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === "1") {
      decode = decode + "a";
    } else if (string[i] === "2") {
      decode = decode + "e";
    } else if (string[i] === "3") {
      decode = decode + "i";
    } else if (string[i] === "4") {
      decode = decode + "o";
    } else if (string[i] === "5") {
      decode = decode + "u";
    } else {
      decode = decode + string[i];
    }
  }

  decode = decode.substring(1, decode.length);
  return decode;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
