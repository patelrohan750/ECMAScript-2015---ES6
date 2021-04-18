const mylang = [ 'java', 'php', 'c', 'python', 'c++' ];

//without es6
// let top1=mylang[0];
// let top2=mylang[1];
// let top3=mylang[2];

//Now with es6
// let [ top1, top2, top3, top4, top5 ] = mylang;
// console.log(`${top1},${top2},${top3},${top4},${top5}`);

//now we access first and last element into array
//first we need array lenagth
console.log(mylang.length);
let [ top1, , , , top5 ] = mylang;
console.log(`first Elemnt: ${top1}  last Elemnt:${top5}`);
