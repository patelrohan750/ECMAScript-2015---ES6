/*
 The rest parameter syntax allows us to represent an indefinite number of arguments as an array. A function's last parameter can be prefixed with ... which will cause all remaining (user supplied) arguments to be placed within a "standard" javascript array.
*/

//befor ES6
// function sum(a,b){
//     console.log(a+b);
// }

// sum(1,2,3,4,5,6);

//After Es6
//Example:1
// function sum(...inputs) {
// 	console.log(...inputs);
// 	console.log(inputs);

// 	let total = 0;
// 	for (let i of inputs) {
// 		total += i;
// 	}
// 	console.log(total);
// }

// sum(1, 2, 3, 4, 5, 6);

//Example:2
function fun(a, b, ...c) {
	console.log(`a=${a},b=${b}`);
	console.log(c);
	console.log(c[0]);
	console.log(c.length);
	console.log(c.indexOf('fifth'));
}
fun('first', 'second', 'third', 'fourth', 'fifth');
