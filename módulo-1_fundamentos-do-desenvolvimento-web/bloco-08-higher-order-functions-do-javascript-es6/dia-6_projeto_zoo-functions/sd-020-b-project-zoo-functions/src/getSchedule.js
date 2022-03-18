const data = require('../data/zoo_data');

const allExhibition = () => {
  const schedule = Object.keys(data.hours).reduce((acc, day) => {
    acc[day] = {};
    if (day === 'Monday') {
      acc[day].officeHour = 'CLOSED';
      acc[day].exhibition = 'The zoo will be closed!';
      return acc;
    }
    acc[day].officeHour = `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
    acc[day].exhibition = data.species.reduce((available, currentSpecie) => {
      if (currentSpecie.availability.includes(day)) available.push(currentSpecie.name);
      return available;
    }, []);
    return acc;
  }, {});
  return schedule;
};

function dayTimeline(day) {
  const schedule = {};
  schedule[day] = {};
  if (day === 'Monday') {
    schedule[day].officeHour = 'CLOSED';
    schedule[day].exhibition = 'The zoo will be closed!';
    return schedule;
  }
  schedule[day].officeHour = `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
  schedule[day].exhibition = data.species.reduce((acc, currentSpecie) => {
    if (currentSpecie.availability.includes(day)) { acc.push(currentSpecie.name); }
    return acc;
  }, []);
  return schedule;
}

function animalTimeline(animalName) {
  const animal = data.species.find((specie) => specie.name === animalName);
  return animal.availability;
}

function verifyParameter(reqSchedule) {
  const param1 = data.species.some((specie) => specie.name === reqSchedule);
  const param2 = Object.keys(data.hours).includes(reqSchedule);
  if (!param1 && !param2) return allExhibition();
  if (param1) return animalTimeline(reqSchedule);
  if (param2) return dayTimeline(reqSchedule);
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget) return verifyParameter(scheduleTarget);
  return allExhibition();
}

// console.log(getSchedule('Saturday'));

// Pude fazer um 1:1 com o Roberval para me ajudar no entendimento e poder então desenvolver este código.

module.exports = getSchedule;
