const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const quantity = {};
    data.species.forEach((item) => {
      quantity[item.name] = item.residents.length;
    });
    return quantity;
  }
  const beast = data.species.find((ani) => ani.name === animal.specie);
  if (animal.sex === undefined) {
    return beast.residents.length;
  }
  return beast.residents.filter((ani) => ani.sex === animal.sex).length;
}

// console.log(countAnimals({ specie: 'tigers' }));

module.exports = countAnimals;
