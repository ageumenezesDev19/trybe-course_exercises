const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const searchAnimal = data.species.filter((item) => item.name === animal);
  const theResidents = searchAnimal[0].residents;
  const verifyAge = theResidents.every((item) => item.age >= age);
  return verifyAge;
}

module.exports = getAnimalsOlderThan;
