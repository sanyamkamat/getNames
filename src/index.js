var allNames = require('./all-names.json');
var uniqueRandomArray = require('unique-random-array');

module.exports = {
  all: allNames,
  random: uniqueRandomArray(allNames)
};
