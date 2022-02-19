const data = require('../data/zoo_data');

/* const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]; */

// ----------------------------------------------------------------

function countEntrants(...ids) {
  //  seu código aqui
  const child = (ids[0].filter((people) => people.age < 18)).length;
  const adult = (ids[0].filter((people) => people.age >= 18 && people.age < 50)).length;
  const senior = (ids[0].filter((people) => people.age >= 50)).length;

  return { child, adult, senior };
}

function calculateEntry(theEntrants) {
  // seu código aqui
  if (theEntrants === undefined || Object.keys(theEntrants).length === 0) return 0;
  const people = countEntrants(theEntrants);
  const { adult, child, senior } = data.prices;
  return people.adult * adult + people.child * child + people.senior * senior;
}

// ----------------------------------------------------------------

// console.log(countEntrants(entrants));
// console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
