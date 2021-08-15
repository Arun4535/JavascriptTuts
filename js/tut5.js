// Type conversion and Type coercion
console.log('Welcome to tut5');
let myVar;
myVar = String(34);
console.log(myVar, (typeof myVar));
let booleanVar = String(true);
// let booleanVar = true;
console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
console.log(date, (typeof date));

let arr =  String([1,2,3,4,5]);
console.log(arr.length, (typeof arr));

let i = 75;
console.log(i.toString() , (typeof i))

let stri = Number("3434");
stri = Number("343d4"); //NaN - not a number
stri = Number(false); //false - 0 , true-1
// stri = Number([1,2,3,4,5,6,7,8,9]);
console.log(stri, (typeof stri));

let number = parseFloat('34.098');


console.log(number.toFixed(2), (typeof number));

// Type coercion

let mystr = Number("698");
let mynum = 34;

console.log(mystr + mynum);
