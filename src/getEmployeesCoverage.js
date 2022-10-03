const data = require('../data/zoo_data');

const { species, employees } = data;

const objeto = employees.map((elemento) => {
  const obj = {
    id: elemento.id,
    fullName: `${elemento.firstName} ${elemento.lastName}`,
    species: elemento.responsibleFor.map((param) => species
      .find((animal) => animal.id === param).name),
    locations: elemento.responsibleFor.map((param) => species
      .find((animal) => animal.id === param).location),
  };
  return obj;
});
function getEmployeesCoverage(func) {
  if (func === undefined) {
    return objeto;
  }
  const dados = objeto;
  const tne = dados.find((e) => e.fullName
    .includes(Object.values(func)) || e.id.includes(Object.values(func)));
  if (tne === undefined) {
    throw new Error('Informações inválidas');
  }
  return tne;
}

module.exports = getEmployeesCoverage;
