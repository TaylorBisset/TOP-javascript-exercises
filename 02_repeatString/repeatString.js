let repeatedString = "";
const repeatString = function(string, number) {
    for (let i = 0; i < number; i++) {
        repeatedString = repeatedString + string;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
