function Person(){
  this.name = 'hjc';
}
Person.prototype.sayName = function (){
  console.log(this.name);
}
let hjc = new Person();
console.log(Person.prototype);
console.log(Object.getPrototypeOf(hjc));

let a = {};
let b = Object.prototype;
console.log(Object.getPrototypeOf(a) === b);
