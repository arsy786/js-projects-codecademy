// This is my first JS code!

/* 1. Console/Hello World */
console.log('Hello World');

/* 2. Variables */
let firstName = 'Arsalaan';
let lastName = 'Naeem';
console.log(firstName, lastName);

/* 3. Constants */
const interestRate = 0.3; // Cannot be changed

/* 4. Primitive Types */
let name = 'Calton'; // String Literal
let age = 23; // Number Literal
let isApproved  = true; // Boolean Literal
let streetName = undefined; // Undefined
let selectedColour = null; // Null

/* 5. Dynamic Typing */
// Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time.

/* 6. Objects (Reference Type) */
let car = {
    model: 'Ford',
    year: 2013
};
console.log(car);

// Dot Notation - common
car.model = 'Ford Fiesta';
console.log(car.model);

// Bracket Notation - used in dynamic cases
let selection = 'model';
car[selection] = 'Ford Focus';

/* 7. Array (Reference Type) */
let selectedFruits = ['apple', 'banana'];

// Arrays are also objects
selectedFruits[2] = 'pear'; 

console.log(selectedFruits);
console.log(selectedFruits[0]);

selectedFruits[3] = 1;
console.log(selectedFruits);
console.log(selectedFruits.length);

/* 8. Function (Reference Type) */
function greet() {
    console.log('Hello World');
}

greet();

function greetPerson(name) {
    console.log('Hello ' + name);
}

greetPerson('John');
greetPerson('Mark');

function greetPersonWithAge(name, age) {
    console.log('Hello ' + name + ' you are ' + age + ' years old!');
}

greetPersonWithAge('Arsalaan', 23)

function square(number) {
    return number * number;
}

console.log(square(2));