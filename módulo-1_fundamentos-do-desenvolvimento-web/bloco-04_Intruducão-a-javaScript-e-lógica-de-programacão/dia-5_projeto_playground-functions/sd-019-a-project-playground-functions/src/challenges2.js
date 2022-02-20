// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let listaTech = [];
  if (tech != 0) {
    tech.sort();
    for (let i = 0; i < tech.length; i += 1) {
      listaTech.push({tech:tech[i], name:name});
    }
  } else {
    listaTech = 'Vazio!';
  }
  
  return listaTech;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  // seu código aqui
  let contador = 0;
  let formatNumber ="(" + numbers[0] + numbers[1] + ")" +
    " "+ numbers[2]+ numbers[3] + numbers[4] + numbers[5] + 
    numbers[6] + "-" + numbers [7] + numbers[8] + numbers[9] + numbers[10];
    
    if (numbers.length != 11){
      return "Array com tamanho incorreto.";
    }
        
    for (let i = 0; i <=numbers.length; i+=1){
      for (let c = 0; c <= numbers.length; c+=1){
        if (numbers[c] === numbers[i]) { 
          contador += 1;
        }
      }
      if (numbers[i]<0 || numbers[i]>9 || contador >=3){
        return "não é possível gerar um número de telefone com esses valores";
      }
          
      contador =0;
          
              
    }  
    return formatNumber;

} // -> Código inspirado na resolução feita por Rafael-Moraes-Dias-Playground-Functions -> Desafio 11.

// Desafio 12
function triangleCheck(side1, side2, side3) {
  // seu código aqui
  let triângulo;
  if (side1 + side2 > side3 && Math.abs(side1) - Math.abs(side2) < Math.abs(side3) && side3 + side2 > side1 && Math.abs(side3) - Math.abs(side2) < Math.abs(side1) && side3 + side1 > side2 && Math.abs(side3) - Math.abs(side1) < Math.abs(side2)) {
      triângulo = true;
      } else {
        triângulo = false;
      }
  
  return(triângulo);
} // Math.abs() -> font: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

// Desafio 13
function hydrate(bebidas) {
  // seu código aqui
  let qDeCoposDagua;
  let nDeBebidas = [];

  nDeBebidas = bebidas.match(/\d+/g).map(Number);

  if (nDeBebidas.length > 1) {
    qDeCoposDagua = nDeBebidas[0];
    for (let q = 1; q < nDeBebidas.length; q += 1) {
      qDeCoposDagua = qDeCoposDagua + nDeBebidas[q];
    }
    qDeCoposDagua = qDeCoposDagua + " copos de água";
  } else if (nDeBebidas.length === 1) {
    if (nDeBebidas[0] === 1) {
      qDeCoposDagua = nDeBebidas[0] + " copo de água";
    } else if (nDeBebidas[0] > 1) {
      qDeCoposDagua = nDeBebidas[0] + " copos de água";
    }
  }

  return(qDeCoposDagua);
} //.match(/\d+/g).map(Number) -> font: https://codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
}
