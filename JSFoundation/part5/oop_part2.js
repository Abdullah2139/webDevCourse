// getter and setter
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get getName() {
        return this.name;
    }

    set setName(name) {
        this.name = name;
    }
}
const person = new Person('John', 30);
console.log(person.getName);
person.setName = 'Doe';