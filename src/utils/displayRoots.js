'use strict';

function displayRoots(a, b, c, roots) {
  if (a === 0) {
    console.log('Error. a cannot be 0');
    return;
  }

  console.log(`Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);

  if (roots.length > 1) {
    console.log(`There are 2 roots:\n x1 = ${roots[0]}\n x2 = ${roots[1]}`);
  }

  if (roots.length === 1) {
    console.log(`There is 1 root:\n x = ${roots[0]}`);
  }

  if (roots.length === 0) {
    console.log(`The equation has no roots`);
  }
}

module.exports = displayRoots;
