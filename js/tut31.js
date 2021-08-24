console.log("this is Tutorial31.js");

class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }

    slogan(){
        return `I am ${this.name} and this company is the best`;
    }

    joiningYear(){
        return 2021 - this.experience;
    }

    //this function does not uses any object variable, therefore we use it without creating any object.
    static add(a, b){
        return a + b;
    }
}

// obj = new Programmer("Arun" ,"0"); //will assign first 2 parameters and 3rd value undefined.
// console.log(obj);
// console.log(Employee.add(34, 5))

class Programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision, language, github){
        super(givenName, givenExperience, givenDivision); //calling parent constructor
        this.language = language;
        this.github = github;
    }

    favoriteLanguage(){
        if (this.language == 'python'){
            return 'Python';
        }
        else{
            return 'JavaScript';
        }
    }

    static multiply(a, b){
        return a * b;
    }
}
//we cannot use this.variable in statis

rohan = new Programmer("Rohan", 3, "Lays", "Go", "Rohan420")
console.log(rohan)
console.log(rohan.favoriteLanguage())
console.log(Programmer.multiply(5, 7));


