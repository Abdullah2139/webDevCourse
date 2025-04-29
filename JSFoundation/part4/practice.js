function stringToNumber(input) {
    const num = Number(input);
    if (isNaN(num)) {
        return "Not a number";
    }
    return num;
}
console.log(stringToNumber("123")); 
