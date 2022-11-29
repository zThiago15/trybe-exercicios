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
    constructor() {
        super();
        this.isSuper = false;
    }
}
function myFunc(obj) {
    if (obj.isSuper === true) {
        console.log('Super!');
    }
    else {
        console.log('Sub!');
    }
}
const objSuperclass = new Superclass();
const objSubclass = new Subclass();
myFunc(objSuperclass);
myFunc(objSubclass);
