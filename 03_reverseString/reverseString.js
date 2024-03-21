let reversedString = "";
const reverseString = function(wordToReverse) {
    for (let i = wordToReverse.length - 1; i >= 0; i--) {
        reversedString = reversedString + wordToReverse.charAt(i);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
