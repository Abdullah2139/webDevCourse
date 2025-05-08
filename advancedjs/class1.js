console.log("Hello, World!");

function sayHello() {
    console.log("Hello from a function!");
}

setTimeout(() => {
    sayHello();
}, 2000);

for (let i = 0; i < 5; i++) {
    console.log(i);
}