function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Car(make, model) {
    this.make = make;
    this.model = model;
}

let myCar = new Car("Toyota", "Corolla");
// console.log(myCar);

function Tea(type){
    this.type = type;
    this.describe = function(){
        return `This is a cup of ${this.type} tea.`;  
    }
}
let myTea = new Tea("green");
console.log(myTea.describe());