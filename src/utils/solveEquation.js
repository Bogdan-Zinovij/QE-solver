'use strict';

function solveEquation(a, b, c) {
  if (a === 0) {
    return;
  }
  const discriminant = b * b - 4 * a * c;

  const roots = [];

  if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    roots.push(root1, root2);
  }

  if (discriminant === 0) {
    const root = -b / (2 * a);
    roots.push(root);
  }

  return roots;
}

module.exports = solveEquation;
