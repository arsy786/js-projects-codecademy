/* 9. Arrays & Objects */

// Can have an Array of Objects
const todos = [
    {
        id: 1,
        text: 'Take out bins',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos);

// Selects 2nd value in array and only the text attribute
console.log(todos[1].text);

/* 10. Converting to JSON */

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

/* 11. Loops */

// For
for (let i = 0; i < 10; i++){
    console.log(i);
    console.log(`For Loop Number: ${i}`);
}

for (let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

// For of
for(let todo of todos) {
    console.log(todo.text);
}

// While
let i = 0;
while (i < 10) {
    console.log(`While Loop Number: ${i}`)
    i++;
}

/* 12. High order array methods */
// forEach
todos.forEach(function(todo) {
    console.log(todo.text);
});

//map
const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

//filter
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted == true;
});

console.log(todoCompleted);

// filter with map
const todoCompleted2 = todos.filter(function(todo) {
    return todo.isCompleted == true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted2);

/* 13. Conditionals */
// == disregards data type
// === accounts for data type
// && and
// || or

const x = 10;

if (x === 10) {
    console.log('x is 10');
} else if ( x > 10) {
    console.log('x is greater than 10')
} 
else {
    console.log('x is less than 10');
}

const a = 4;
const b = 10;

if (a > 5 || b > 10) {
    console.log('x is more than 5 or y is more than 10');
}

// ternary operator
// condition ? exprIfTrue : exprIfFalse

const c = 10;
const colour = x > 10 ? 'red' : 'blue';
console.log(colour);

// switch
switch(colour){
    case 'red':
        console.log('colour is red');
        break;
    case 'blue':
        console.log('colour is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}