console.log('tut3');
// Variables in js
// var, let, const
var name = 'harry';
var channel;
var marks = 34;
marks = 0;
channel = 'CodeWithHarry'
console.log(name, channel, marks);
// Rules for creating JavaScript Variables
/*
1. Cannot start with numbers
2. Can start with letter, numbers, _ or $
3. Are case sensitive
*/
var city = 'Delhi';
console.log(city);

const ownersName = 'Hari Ram';
// ownersName = 'Harry'; // Cannot do this (error)
console.log(ownersName);
const fruit = 'Orange';
//const must be initialized when declared
/* 
    const - value cant be changed
    let  - block level scope
    var - global scope
*/
{
 let city = 'Rampur';   
 city = 'Kolkata';
 console.log(city);
}
console.log(city);


const arr1 = [12,23,12,53, 3];
arr1.push(45); //operation can be done
// arr1 = [10]; //error,cant re-assign to const
console.log(arr1)

/* Most common programming case types:

1. camelCase  
2. kebab-case
3. snake_case 
4. PascalCase 


*/
