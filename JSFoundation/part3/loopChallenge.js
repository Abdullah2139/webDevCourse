let sum = 0;
let i = 1;
while (i <= 5) {
  sum += i;
  i++;
}
// console.log(sum);

let countDown = [];
let j = 5;
while (j >= 1) {
  // countDown.push(j);
  j--;
}
// console.log(countDown);

let teaCollection = [];
let tea;
do {
  // tea = prompt("Enter a type of tea (or 'done' to finish):");
  if (tea !== "done") {
    // teaCollection.push(tea);
  }
} while (tea !== "done");
// console.log(teaCollection);

let total = 0;
let k = 1;
do {
  total += k;
  k++;
} while (k <= 3);
// console.log(total);

let multipliedNumbers = [];
let numbers = [2, 4, 6];
for(let l = 0; l < numbers.length; l++) {
  // multipliedNumbers.push(numbers[l] * 2);
}
// console.log(multipliedNumbers);

let cities = ["New York", "Los Angeles", "Chicago"];
let cityList = [];
for (let m = 0; m < cities.length; m++) {
  const myCity = cities[m];
  cityList.push(cities[m]);
}
// console.log(cityList);