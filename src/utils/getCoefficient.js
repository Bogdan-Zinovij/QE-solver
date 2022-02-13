'use strict';

const ps = require('prompt-sync');
const prompt = ps({ sigint: true });

function getCoefficient(coefName) {
  let coef;
  let isValid = false;
  do {
    coef = prompt(` ${coefName} = `).trim();
    if (isNaN(+coef) || coef.length === 0) {
      console.log(`Error. Expected a valid real number, got ${coef} instead`);
    } else {
      isValid = true;
    }
    if (coefName === 'a' && +coef === 0) {
      console.log('Error. a cannot be 0');
      isValid = false;
    }
  } while (!isValid);

  return +coef;
}

module.exports = getCoefficient;
