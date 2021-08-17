console.log("Tut20");

let impArray = ['adrak', 'pyaz', 'bhindi'];

// // Add a key-value pair inside local Storage
localStorage.setItem('Name', 'Harry');
localStorage.setItem('Name2', 'Rohan');
// localStorage.setItem('Sabzi', impArray); //will store array as string
localStorage.setItem('Sabzi', JSON.stringify(impArray)); //json.strongify - takes object and convert to string

// Clears the entire local storage
// localStorage.clear();

// Clear a particular key-value pair
// localStorage.removeItem('Name2');

// Retrieve an item from the local Storage
// let name = localStorage.getItem('Name');
// let name = (localStorage.getItem('Sabzi'));//returns string
let name = JSON.parse(localStorage.getItem('Sabzi')); //returns array
//json.parse - takes string and return object
console.log(name)

// sessionStorage.setItem('sessionName', 'sHarry');
// sessionStorage.setItem('sessionName2', 'sRohan');
// sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray));


//functions of session storage and local storage are same.