let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    start: function() {
        return `Starting the ${this.make} ${this.model}`;
    },
};
// console.log(car.start());

function Person(name, age) {
    this.name = name;
    this.age = age;
};
let john = new Person("John", 30);
console.log(john.name);