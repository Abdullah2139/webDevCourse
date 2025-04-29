// function makeTea(typeOfTea) {
//     return `Making ${typeOfTea}`;
// }

// let teaOrder = makeTea("green tea");
// console.log(teaOrder);

function orderTea(teaType) {
    function confirmOrder() {
        return `Order confirmed for ${teaType}`;
    }
    return confirmOrder();
}
let order = orderTea("chai");
console.log(order);