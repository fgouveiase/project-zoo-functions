const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const child = entrants.filter((person) => person.age < 18).length;
  const adult = entrants.filter((person) => person.age >= 18 && person.age < 50).length;
  const senior = entrants.filter((person) => person.age >= 50).length;
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants.length === undefined) {
    return 0;
  }
  const visitantesSum = countEntrants(entrants);
  return (visitantesSum.child * prices.child)
  + (visitantesSum.adult * prices.adult) + (visitantesSum.senior * prices.senior);
}

module.exports = { calculateEntry, countEntrants };
