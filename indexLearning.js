//First JavaScript Code
console.log('Welcome to JavaScript code in JS file')

//variables 
let myName = 'Wasif Hamdani';
console.log(myName);

//constants
const pkrRate = 0.557;
console.log(pkrRate);

//Data types: 1. primitive/value types 2. reference types
//1. String, Number, Boolean, undefined, null
// examples of each primitive types
let firstName = 'Wasif'; //String Literal
let yearsExperience = 14; //Number Literal
let isStudying = false; //Boolean Literal
let notDefinedValue = undefined;
let salary = null;

//to check variable data type, use: typeof varName e.g. typeof firstName

//2. Reference types: Object, Array, Function
let person = {      //person object with firstName and age properties
    firstName: 'Musa',
    age: 17
};
console.log(person);

//Dot notation: to access person property
person.firstName = 'Sudaif'
console.log(person.firstName);

//Bracket notation: to access person property
person['firstName'] = 'Faizan';
console.log(person.firstName);

//Arrays - typeof array is object in JS
let colors = ['yellow','green']; //[] are array literals
colors[3] = 'blue';
colors[2] = person.age; //arrays are dynamic, its elements can be of any type.
console.log(colors);

//Functions
function greeting(firstName, lastName){

    console.log(firstName+' '+lastName);
}
greeting('Wasif', 'hamdani');

function square(number){

    return number * number;
}
console.log('Square of provided number is:' + square(20));