const data = require('../data/zoo_data');

function isManager(id) {
  let theManager = [];
  data.employees.forEach((obj) => {
    theManager = [...theManager, ...obj.managers];
  });
  return theManager.some((mId) => mId === id);
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const relatedManager = [];
  data.employees.forEach((theObj) => {
    if (theObj.managers.some((maId) => maId === managerId)) {
      relatedManager.push(`${theObj.firstName} ${theObj.lastName}`);
    }
  });
  return relatedManager;
}

// console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
/* Utilizei o código do repositório de "eduardo-gomes" para entender como exatamente
  identificar o gerente e porque o meu código estava dando erro.

  Font: https://github.com/tryber/sd-19-a-project-zoo-functions/tree/eduardo-gomes-zoo-functions-project */

module.exports = { isManager, getRelatedEmployees };
