console.log("we are in tut28");

let obj = {
    name : "Arun",
    field : 'Computer'
}
console.log(obj);

//What is prototype?
/*
    when we create an object using object literal as above(obj),it uses object prototype

    like when we make a website,we use already created features and inherite .

    prototype is from where we started.

    object created using object literal, there prototype cannot be overwritten.

    dont over-write object.prototype

    create object using contructor and over-write the prototype
*/

Object.prototype.getName = function() {
    //dont modify Object prototype
    //make your own object and modify that object prototype
    //Object refers to all objects.
}

function obje(givenName) {
    this.name = givenName;
}
obje.prototype.getName = function() {
    return this.name;
}

let obj2 = new obje('dj');
console.log(obj2);
console.log(obj2.getName());