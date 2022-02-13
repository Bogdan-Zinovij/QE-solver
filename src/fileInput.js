'use strict';

const fs = require('fs');
const solveEquation = require('./utils/solveEquation');
const displayRoots = require('./utils/displayRoots');

function fileInput(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log(`Error. File '${filePath}' does not exist`);
      return;
    }

    const coefficients = data.split(' ');

    if (coefficients.length !== 3) {
      console.log('Error. Invalid file format');
      return;
    }

    for (let i = 0; i < coefficients.length; i++) {
      if (coefficients[i].length && !isNaN(+coefficients[i])) {
        coefficients[i] = +coefficients[i];
      } else {
        console.log('Error. Invalid file format');
        return;
      }
    }

    const a = coefficients[0];
    const b = coefficients[1];
    const c = coefficients[2];

    const roots = solveEquation(a, b, c);
    displayRoots(a, b, c, roots);
  });
}

module.exports = fileInput;
