/*
Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” 
to account for their growth compared to a human of the same age. 
In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years 
in a dog’s life. How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.
Before you start doing the math in your head, let a computer take care of it! With your knowledge of 
math operators and variables, use JavaScript to convert your human age into dog years.
*/

// my age
const myAge = 23;

// the first two years of a dog's life that count differently (10.5)
let earlyYears = 2;
earlyYears *= 10.5;

// the years after the first two count differently (4)
let laterYears = myAge - 2;
laterYears *= 4;

// calc my total age in dog years
const myAgeInDogYears = earlyYears + laterYears;

// converting name to lower case
let myName = "Arsalaan".toLowerCase();

// printing output/result to console
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);