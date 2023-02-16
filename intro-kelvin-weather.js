/* 
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.
Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: 
All of his forecasts describe the temperature in Kelvin.
With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.
*/

// todays forecast
let kelvin = 0;

// kelvin to celsius conversion
const celsius = kelvin - 273;

// celsius to fahrenheit conversion
let fahrenheit = celsius * (9/5) + 32;

// rounding down decimal temp
fahrenheit = Math.floor(fahrenheit);

// output
console.log(`The temperature is ${fahrenheit} degress Fahrenheit`);