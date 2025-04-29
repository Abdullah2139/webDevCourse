const teaFlavours = ["green tea", "black tea", "oolong tea"];
// const firstTea = console.log(teaFlavours[0]);

const cities = ["London", "Paris", "New York", "Tokyo"];
// const favouriteCity = console.log(cities[2]);

const teaTypes = ["herbal tea", "white tea", "chai tea"];
teaTypes[1] = "jasmine tea";
// console.log(teaTypes);

const citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
// console.log(citiesVisited);

const teaOrders = ["chai", "green tea", "black tea", "oolong tea"];
const lastOrder = teaOrders.pop();
// console.log(teaOrders);
// console.log(lastOrder);

const popularTea = ["chai", "green tea", "black tea", "oolong tea"];
const softCopyTea = popularTea;
popularTea.pop();
// console.log(softCopyTea);
// console.log(popularTea);

const TopCities = ["London", "Paris", "New York", "Tokyo"];
const hardCopyCities = [...TopCities];
// const hardCopyCities = TopCities.slice();
TopCities.pop();
// console.log(hardCopyCities);

const topCountries = ["USA", "Canada", "UK", "Australia"];
const topCountries2 = ["pakistan", "India", "Bangladesh", "Nepal"];
const allCountries = topCountries.concat(topCountries2);
console.log(allCountries);