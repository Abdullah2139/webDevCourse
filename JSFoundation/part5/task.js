// Task 1: Encapsulation Using Getters and Setters

// Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.
class BankAccount {
    #balance; // Private property

    constructor(initialBalance) {
        this.#balance = initialBalance >= 0 ? initialBalance : 0;
    }

    get balance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && this.#balance - amount >= 0) {
            this.#balance -= amount;
        } else if (amount > 0) {
            console.log("Insufficient funds.");
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    }
}