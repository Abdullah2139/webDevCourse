function fetchUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "John Doe", age: 30 });
        }, 2000);
    });
}

async function getUserData() {
    try {
        console.log("Fetching user data...");
        const userData = await fetchUserData();
        console.log("User Data:", userData);
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}
getUserData();