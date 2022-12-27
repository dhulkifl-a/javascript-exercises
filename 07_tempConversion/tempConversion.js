const convertToCelsius = function(tempF) {
  let newTempC = (tempF - 32) * 5/9;
  return Math.round(newTempC,1)
};

const convertToFahrenheit = function(tempC) {
  let newTempF = tempc * 9/5 + 32;
  return Math.round(newTempC,1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
