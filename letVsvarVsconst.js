//here var is function Scope
//let and const  is block scoped

//👉  Example-1:

// var name = 'rohan';
// console.log(`using var: ${name}`);

// let name = 'rohan';
// console.log(`using let: ${name}`);

// const name = 'rohan';
// console.log(`using const: ${name}`);

//👉  Example-2:

// var name = 'rohan';
// name = 'patel';
// console.log(`using var ${name}`);

// let name = 'rohan';
// name = 'patel';
// console.log(`using let ${name}`);

// here got error
// const name = 'rohan';
// name = 'patel';
// console.log(`using let ${name}`);

//👉  Example-3:

// function Demo(a) {
// 	if (a) {
// 		let name = 'rohan';
// 		const sname = 'patel';
// 		console.log(`my name is ${sname} ${name}`);
// 	}
// }

// function Demo(a) {
// 	if (a) {
// 		var name = 'rohan';
// 		var sname = 'patel';
// 		console.log(`my name is ${sname} ${name}`);
// 	}
// }

// function Demo(a) {
// 	if (a) {
// 		var name = 'rohan';
// 		var sname = 'patel';
// 	}
// 	console.log(`my name is ${sname} ${name}`);
// }

//here got the error
// function Demo(a) {
// 	if (a) {
// 		let name = 'rohan';
// 		const sname = 'patel';
// 	}
// 	console.log(`my name is ${sname} ${name}`);
// }

// Demo(true);

//👉  Example:4
// var WhoWillWinToday = 'India';
// if (true) {
// 	var WhoWillWinToday = 'NewZelend';
// 	console.log(WhoWillWinToday);
// }
// console.log(WhoWillWinToday);

// let WhoWillWinToday = 'India';
// if (true) {
// 	let WhoWillWinToday = 'NewZelend';
// 	console.log(WhoWillWinToday);
// }
// console.log(WhoWillWinToday);

// const WhoWillWinToday = 'India';
// if (true) {
// 	const WhoWillWinToday = 'NewZelend';
// 	console.log(WhoWillWinToday);
// }
// console.log(WhoWillWinToday);

/* follow the more details
 👉 https://alligator.io/js/var-let-const/
 👉 https://dzone.com/articles/javascript-difference-between-var-let-and-const-ke

 */
