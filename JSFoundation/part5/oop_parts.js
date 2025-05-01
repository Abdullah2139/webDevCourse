// Encapsulation

class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }
    getBalance() {
        return `$ ${this.#balance}`;
    }
}
let account = new BankAccount();
// console.log(account.getBalance());

// Abstraction (hiding complex implementation details)

class coffeeMachine {
    #waterAmount = 0;
    #coffeeAmount = 0;

    constructor(water, coffee) {
        this.#waterAmount = water;
        this.#coffeeAmount = coffee;
    }

    makeCoffee() {
        if (this.#waterAmount < 50 || this.#coffeeAmount < 10) {
            console.log("Not enough water or coffee!");
            return;
        }
        this.#waterAmount -= 50;
        this.#coffeeAmount -= 10;
        console.log("Coffee made!");
    }
}
let machine = new coffeeMachine(100, 20);
// machine.makeCoffee();

// Polymorphism (same method name, different implementations)

class Animal {
    speak() {
        console.log("Animal speaks");
    }
}
class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}
class Cat extends Animal {
    speak() {
        console.log("Cat meows");
    }
}
let dog = new Dog();
let cat = new Cat();
// dog.speak();
// cat.speak();

// static method
class MathUtils {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
}
console.log(MathUtils.add(5, 3));
console.log(MathUtils.subtract(5, 3));