const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  const theEmployee = data.employees.filter((employ) => employ.firstName === employeeName
  || employ.lastName === employeeName);
  return theEmployee[0];
}

module.exports = getEmployeeByName;
