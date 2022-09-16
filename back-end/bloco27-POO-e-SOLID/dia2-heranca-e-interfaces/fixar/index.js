"use strict";
class Superclass {
    constructor() {
        this.isSuper = true;
    }
    sayHello() {
        console.log('Olá mundo!');
    }
}
class Subclass extends Superclass {
}
function myFunc(obj) {
    obj.sayHello();
}
const objSuperclass = new Superclass();
const objSubclass = new Subclass();
myFunc(objSuperclass);
