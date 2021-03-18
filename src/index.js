const add = require('./utils/add');
const divide = require('./utils/divide');
const multiply = require('./utils/multiply');
const substruct = require('./utils/substruct');

const main = function (actionType, a, b) {
  switch (actionType) {
    case 'add':
      return add(a, b);

    case 'divide':
      return divide(a, b);

    case 'multiply':
      return multiply(a, b);

    case 'substruct':
      return substruct(a, b);
  }
}

const result = main('add', 2, 3);

console.log(`result: ${result}`);

// module.exports = main;