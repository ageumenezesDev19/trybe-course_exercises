const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids === undefined) {
    return [];
  }
  return data.species.filter((specie) => ids.includes(specie.id));
  // (.Includes) oriundo do entendimento que obtive no código do Rafael Dias, link -> https://github.com/tryber/sd-19-a-project-zoo-functions/tree/Rafael-Dias-Zoo-Functions
}

module.exports = getSpeciesByIds;
