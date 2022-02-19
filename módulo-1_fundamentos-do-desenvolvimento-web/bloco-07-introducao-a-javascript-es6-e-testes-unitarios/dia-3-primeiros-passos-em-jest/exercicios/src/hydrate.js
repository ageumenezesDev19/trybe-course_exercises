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

module.exports = hydrate;
