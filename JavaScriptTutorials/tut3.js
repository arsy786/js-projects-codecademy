/* 14. Constructor Functions & Prototypes*/

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName =lastName;
    this.dob = new Date(dob); // Date object

    // can create functions inside of here
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }

}

// Instantiate Object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person1);
console.log(person2.getFullName);

// Prototypes (converts the function of an object from a property to a method) - prevents creating functions with each object created
// this is before classes were introduced JS (ES6)

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

console.log(person2.getBirthYear)

/* 15. Classes */
// Completely replaces the above for creating classes, contructors, methods, instantiating objects etc.


class Footballer {
    
    constructor(firstName, lastName, position) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
    }

    getFullNameAndPosition() {
        return `${this.firstName} ${this.lastName}, ${this.position}`;
    }
}

// Instantiate object
const footballer1 = new Footballer('Cristiano', 'Ronaldo', 'CF');

console.log(footballer1.getFullNameAndPosition());