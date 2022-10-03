const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const funcionario = employees.find((pessoa) => pessoa.id === id)
    .responsibleFor[0];
  const animalAnciao = species.find((elemento) => elemento.id === funcionario)
    .residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(animalAnciao);
}

module.exports = getOldestFromFirstSpecies;
