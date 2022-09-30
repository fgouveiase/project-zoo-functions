const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const nomeAnimal = species.find((especie) => especie.name === animal);
  const olderAnimal = nomeAnimal.residents.every((residentes) => residentes.age >= age);
  return olderAnimal;
}

module.exports = getAnimalsOlderThan;
