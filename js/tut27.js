console.log("This is tut27");

// let obj = {name : 'Arun'}
// console.log(typeof obj);
// console.log(obj.name);


let car = {
    name : 'Maruti',
    topSpeed : 89,
    run: function(){
        console.log('Car is running');
    }
}
// console.log(car);
// car.run();


//Constructor
//we have seen constructor while creating date objects.
//generalCar is constructor
function generalCar(inpName , speed) {
    this.name = inpName;
    this.topSpeed = speed;
    this.run = function(){
        console.log(`${this.name} is running at ${this.topSpeed}km/hr`);
    } 
    this.analyze = function(){
        console.log(`${this.name} is slower by ${200 - this.topSpeed}km/hr than mercedes`);
    }
}
car1 = new generalCar('Nissan' , 100);
car2 = new generalCar('Kia' , 120);
car3 = new generalCar('Mercedes' , 200);


car1.run();
car2.run();
car2.analyze();
car3.analyze();
