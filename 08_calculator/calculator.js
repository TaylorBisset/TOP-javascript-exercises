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

const power = function() {
	
};

const factorial = function() {
	
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
