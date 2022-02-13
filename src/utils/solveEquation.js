'use strict';

function solveEquation(a, b, c) {
  if (a === 0) {
    console.log('Error. a cannot be 0');
    return;
  }
  const discriminant = b * b - 4 * a * c;

  console.log(`Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);

  if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    console.log(`There are 2 roots:\n x1 = ${root1}\n x2 = ${root2}`);
  }

  if (discriminant === 0) {
    const root = -b / (2 * a);

    console.log(`There is 1 root:\n x = ${root}`);
  }

  if (discriminant < 0) {
    console.log(`The equation has no roots`);
  }
}

module.exports = solveEquation;
