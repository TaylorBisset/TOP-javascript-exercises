const removeFromArray = function(array, argument) {
    const newArray = [];

    array.forEach(element => {
        if (element != argument) {
            newArray.push(element)
        }
    });

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
