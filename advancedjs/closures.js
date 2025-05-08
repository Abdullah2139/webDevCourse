// Closures are functions that remember the environment in which they were created.
// They can access variables from their outer scope even after that scope has finished executing.

function outer(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}
let increment = outer(); // `increment` is a closure that remembers the `counter` variable
console.log(increment());