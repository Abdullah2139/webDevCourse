function* numberGenerator(){
    yield 1;
    yield 2;
    yield 3;
}

const generator = numberGenerator();
// console.log(generator.next().done);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);