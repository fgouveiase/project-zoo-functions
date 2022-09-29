const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  return species.filter((especie) => ids.includes(especie.id));
}

module.exports = getSpeciesByIds;
