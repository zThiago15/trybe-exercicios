"use strict";
class MyClass {
    constructor(myNumber) {
        this.myNumber = myNumber;
    }
    myFunc(myParam) {
        const sum = this.myNumber + myParam;
        return `A soma entre ${this.myNumber} + ${myParam} é igual a ${sum}`;
    }
}
const objMyClass = new MyClass(5);
console.log(objMyClass.myFunc(3));
