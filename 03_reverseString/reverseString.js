const reverseString = function(string) {

    let i = 0;
    reversedString = '';

    for (; i < (string.lenght - 1); i++) {
        reverseString = string + reverseString;
    }

    return reverseString

};

// Do not edit below this line
module.exports = reverseString;
