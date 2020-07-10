const _ = require("lodash");

const numbers = [11, 22, 33, 55, 44, 66];

_.each(numbers, function (number, i) {
  console.log(number);
});
