const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  let sumOfAll = 0;
  array.forEach(element => {
    sumOfAll += element;
  });
  return sumOfAll;
};

const multiply = function(multiplies) {
  let multiplyAll = 1;
  multiplies.forEach(element => {
    multiplyAll *= element;
  });
  return multiplyAll;
};

const power = function(num1, num2) {
  let powerUp = 1;
  for (i = 0; i < num2; i++) {
    powerUp *= num1;
  }
  return powerUp;
};

const factorial = function(num) {
	let factCheck = 1;
  for (i = 1; i <= num; i++) {
    factCheck *= i;
  }
  return factCheck;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
