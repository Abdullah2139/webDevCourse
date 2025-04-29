// let teas = ["Earl Grey", "Green Tea", "Chamomile", "Mint Tea", "Chai", "Black Tea"];
// let selectedTeas = [];
// for (let i = 0; i < teas.length; i++) {
//   if (teas[i] === "Chai") {
//     break;
//   }
//     selectedTeas.push(teas[i]);
// }
// console.log(selectedTeas);

// let cities = ["london", "paris", "new york", "berlin"];
// let selectedCities = [];
// for (let i = 0; i < cities.length; i++) {
//     if (cities[i] === "paris") {
//         continue;
//     }
//     selectedCities.push(cities[i]);
// }
// console.log(selectedCities);

// let numbers = [1, 2, 3, 4, 5];
// let selectedNumbers = [];
// for (const num of numbers) {
//   if (num === 4) {
//     break;
//   }
//   selectedNumbers.push(num);
// }
// console.log(selectedNumbers);

// let myNumbers = [2, 5, 7, 9];
// let doubleNumbers = [];
// for (let i = 0; i < myNumbers.length; i++) {
//   if (myNumbers[i] === 7) {
//     continue;
//   }
//   doubleNumbers.push(myNumbers[i] * 2);
// }
// console.log(doubleNumbers);

let myTeas = ["Earl Grey", "Green Tea", "Chamomile", "Mint Tea", "Chai", "Black Tea"];
let selectedTeas = [];
for (const tea of myTeas) {
  if (tea.length > 10) {
    break;
  }
  selectedTeas.push(tea);
}
console.log(selectedTeas);