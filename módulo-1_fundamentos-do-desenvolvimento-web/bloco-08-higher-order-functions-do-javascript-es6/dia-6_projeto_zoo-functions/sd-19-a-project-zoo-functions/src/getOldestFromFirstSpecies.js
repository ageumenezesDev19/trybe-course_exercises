const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employeesAnimal = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const specie = data.species.find((theSpecie) => theSpecie.id === employeesAnimal);
  const oldAnimal = specie.residents.reduce((acc, theAn) => ((acc.age > theAn.age) ? acc : theAn));
  const { name, sex, age } = oldAnimal;
  return [name, sex, age];
}

// Fonte de inspiração: https://github.com/tryber/sd-19-a-project-zoo-functions/tree/eduardo-gomes-zoo-functions-project

module.exports = getOldestFromFirstSpecies;
