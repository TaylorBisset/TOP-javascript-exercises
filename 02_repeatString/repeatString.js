const repeatString = function(string, number) {
    let repeatedString = "";
    if (number >= 0) {
        for (let i = 0; i < number; i++) {
            repeatedString = repeatedString + string;
        }
        return repeatedString
    } else {
        return "ERROR";
    } 
};

// Do not edit below this line
module.exports = repeatString;
