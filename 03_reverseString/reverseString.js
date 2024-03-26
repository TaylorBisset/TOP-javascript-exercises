const reverseString = function(wordToReverse) {
    let reversedString = "";
    for (let i = wordToReverse.length - 1; i >= 0; i--) {
        reversedString += wordToReverse[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
