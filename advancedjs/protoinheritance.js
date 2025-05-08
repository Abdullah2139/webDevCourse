function Person(name){
    this.name = name;
}
Person.prototype.getName = function(){
    console.log(`My name is ${this.name}`);
}
let khan = new Person('Khan');
khan.getName();