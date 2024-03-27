const sumAll = function(num1, num2) {
    let sumOfAll = 0;
    if (num1 <= num2) {
        for (i = num1; i <= num2; i++) {
            sumOfAll += i;
        }
    } else {
        for (i = num2; i <= num1; i++) {
            sumOfAll += i;
        }
    }
    
    if (sumOfAll >= 0) {
        return sumOfAll;
    } else if (sumOfAll < 0) {
        return "ERROR"
    }

};

// Do not edit below this line
module.exports = sumAll;
