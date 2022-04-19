const data = require('../data/zoo_data');

const verifyExistence = (key) => {
  const theEmployee = data.employees.find((manager) => Object.values(manager).includes(key));
  if (!theEmployee) throw new Error('Informações inválidas');
  return theEmployee;
};

const employeesCoverage = (object) => {
  const theCoverage = {};
  const values = Object.values(object)[0];
  const employee = verifyExistence(values);

  theCoverage.id = employee.id;
  theCoverage.fullName = `${employee.firstName} ${employee.lastName}`;

  const findS = (specie) => data.species.find((current) => current.id === specie);
  const theAnimals = employee.responsibleFor.map(findS);
  theCoverage.species = theAnimals.map((beast) => beast.name);
  theCoverage.locations = theAnimals.map((beast) => beast.location);
  return theCoverage;
};

const withoutParam = () => {
  const allList = [];
  data.employees.forEach((employee) => allList.push(employeesCoverage({ id: employee.id })));
  return allList;
};

function getEmployeesCoverage(object) {
  // seu código aqui
  if (!object) return withoutParam();
  return employeesCoverage(object);
}

// console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));

module.exports = getEmployeesCoverage;
