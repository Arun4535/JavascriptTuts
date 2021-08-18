console.log("Welcome to tutorial 24");

let today = new Date(); //current time and date
console.log(today);
// console.log(typeof today); //reference datatype,object
let otherDate = new Date('8-4-2003 04:54:08');
// otherDate = new Date('June 13 1976');
// otherDate = new Date('09/16/1976'); //mm-dd-yyyy format only.
console.log(otherDate);
let a;
a = otherDate.getDay();  //returns 0-sunday,1-monday ... sat-6
a = otherDate.getDate();// date 1-31
a = otherDate.getMinutes();
// a = otherDate.getSeconds();
// a = otherDate.getHours();
a = otherDate.getTime(); //no. of seconds from 1st jan 1970.
a = otherDate.getMilliseconds();
a = otherDate.getMonth(); //0-jan,1-feb,.. ,11-dec
console.log(a);
otherDate.setDate(23);
otherDate.setMonth(0);
otherDate.setFullYear(1900);

// let b = otherDate.getTime();
// console.log(b); //negative for years before 1970

otherDate.setMinutes(2);
otherDate.setHours(1);
otherDate.setSeconds(3);
console.log(otherDate);
 