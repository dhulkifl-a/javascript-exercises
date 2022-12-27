const sumAll = function(i,j) {

    let sum = 0;

    if (i < 0 || j < 0 || isNaN(i) || isNaN(j)) {
        return "ERROR"
    } else if ( i < j) {
    for (; i <= j; i++) {
        sum += i;
    }
    } else if ( i > j) {
    for (; j <= i; j++) {
        sum += j;  
    }
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
