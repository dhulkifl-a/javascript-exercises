const repeatString = function(string, num) {
let newString = '';
let i = 0;

if (num <0) {
    return "ERROR"
} else{

for (; i < num; i++) {
    newString += string
}
}
return newString

};

// Do not edit below this line
module.exports = repeatString;
