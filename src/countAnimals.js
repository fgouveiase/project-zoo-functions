const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    const soma = species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
    return soma;
  }
  if (animal.specie && animal.sex) {
    const nomeSex = species.find((individuo) => individuo.name === animal.specie).residents
      .filter((individuo) => individuo.sex === animal.sex).length;
    return nomeSex;
  }
  const todos = species.find((individuo) => individuo.name === animal.specie).residents.length;
  return todos;
}
module.exports = countAnimals;
