'use strict';

const solveEquation = require('./utils/solveEquation');
const getCoefficient = require('./utils/getCoefficient');
const displayRoots = require('./utils/displayRoots');

function interactiveInput() {
  const a = getCoefficient('a');
  const b = getCoefficient('b');
  const c = getCoefficient('c');

  const roots = solveEquation(a, b, c);
  displayRoots(a, b, c, roots);
}

module.exports = interactiveInput;
