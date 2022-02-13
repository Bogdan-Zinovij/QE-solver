'use strict';

const interactiveInput = require('./interactiveInput');
const fileInput = require('./fileInput');

const filePath = process.argv[2];
if (filePath) {
  fileInput(filePath);
} else {
  interactiveInput();
}
