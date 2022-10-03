const data = require('../data/zoo_data');

const { species, hours } = data;

const dayKeys = Object.keys(hours);

function exibicao(horario) {
  return species.filter((elemento) => elemento.availability.includes(horario))
    .map((param) => param.name);
}

function showDay() {
  const objetoDays = {};
  dayKeys.forEach((dia) => {
    objetoDays[dia] = {
      officeHour: `Open from ${data.hours[dia].open}am until ${data.hours[dia].close}pm`,
      exhibition: exibicao(dia),
    };
    if (dia === 'Monday') {
      objetoDays[dia] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
  });
  return objetoDays;
}

function getSchedule(scheduleTarget) {
  const getAnimal = species.some((algum) => algum.name === scheduleTarget);
  if (scheduleTarget === undefined) {
    return showDay();
  } if (!getAnimal && !dayKeys.includes(scheduleTarget)) {
    return showDay();
  } if (dayKeys.includes(scheduleTarget)) {
    return { [scheduleTarget]: showDay()[scheduleTarget] };
  }
  return species.find((animal) => animal.name === scheduleTarget).availability;
}

module.exports = getSchedule;
