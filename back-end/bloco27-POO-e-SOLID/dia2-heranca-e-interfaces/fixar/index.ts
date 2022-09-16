class Superclass {
  isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  sayHello() {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {

}

function myFunc(obj: Superclass) {
  obj.sayHello();
}

const objSuperclass = new Superclass();
const objSubclass = new Subclass();

myFunc(objSuperclass);
myFunc(objSubclass);