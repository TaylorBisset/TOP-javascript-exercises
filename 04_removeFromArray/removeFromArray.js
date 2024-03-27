const removeFromArray = function(array, ...itemToRemove) {
    const newArray = [];

    array.forEach(element => {
        if (!itemToRemove.includes(element)) {
            newArray.push(element)
        }
    });

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
