const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const { employees } = data;
  const funcionario = employees.find((nome) =>
    nome.firstName === employeeName || nome.lastName === employeeName);
  return funcionario;
}

module.exports = getEmployeeByName;
