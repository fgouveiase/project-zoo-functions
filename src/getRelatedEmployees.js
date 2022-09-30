const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  const manager = employees.some((mng) => mng.managers
    .find((e) => e === id));
  return manager;
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } if (isManager(managerId)) {
    const funcionario = employees.filter((empregado) => empregado.managers
      .some((id) => managerId === id));
    const gerenteSim = funcionario.map((pessoa) => `${pessoa.firstName} ${pessoa.lastName}`);
    return gerenteSim;
  }
}

module.exports = { isManager, getRelatedEmployees };
