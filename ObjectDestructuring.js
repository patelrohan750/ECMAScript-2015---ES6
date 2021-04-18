const bioData = {
	name: 'rohan',
	age: '21',
	degree: 'b.tech',
	hobby: {
		first: 'Games',
		second: 'coding'
	}
};

let { name, age, degree, hobby } = bioData;
console.log(`my name is ${name},age is ${age} and degree is ${degree}.I loved ${hobby.second}`);
