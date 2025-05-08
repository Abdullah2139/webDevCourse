// Promises are a way to handle asynchronous operations in JavaScript.
// They represent a value that may be available now, or in the future, or never.

function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "John", age: 30 };
            resolve(data);
        }, 2000);
    });
}

fetchData()
    .then((data) => {
        console.log("Data fetched:", data);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    })
    .finally(() => {
        console.log("Fetch attempt finished.");
    });