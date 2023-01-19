// Every NodeJS file is a CommonJS(which is a library) module.
// Modules - encapsulated code (which shares only the needed minimum).
// when we use "require" we get/import what was put in the module['exports'] property:
const {
  john, peter, somePropOne, somePropTwo,
} = require('./names');
const sayHi = require('./utils');
// every required module IS EXECUTED so "sum()" invocation
// inside "function-executed" module wil be run:
require('./function-executed');

console.log(somePropOne);
console.log(somePropTwo);

sayHi('susan');
sayHi(john);
sayHi(peter);
// is not available anymore because it's a local variable of the names module:
// console.log(SECRET);
