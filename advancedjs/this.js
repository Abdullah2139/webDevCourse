const person = {
  name: "John",
  greet() {
    console.log(`Hello, my name is ${this.name}`); // 'this' refers to the person object
    },
};
person.greet();

const greetFunction = person.greet;
// greetFunction();

const boundGreet = person.greet.bind({ name: "Jane" });
boundGreet();