/*
Spread Operator in ES6.
Spread operator allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. It allows us the privilege to obtain a list of parameters from an array. Syntax of Spread operator is the same as the Rest parameter but it works completely opposite of it.
*/

//befor ES6

// let arr1 = [ 1, 2, 3 ];
// let arr2 = [ 4, 5, 6 ];

// arr1 = arr1.concat(arr2);
// console.log(arr1);

//After ES6
let arr1 = [ 1, 2, 3 ];
let arr2 = [ 4, 5, 6 ];
let arr3 = [ 'one', 'two' ];

arr1 = [ ...arr1, ...arr2, 9, 8, 10, ...arr3 ];
console.log(arr1);
