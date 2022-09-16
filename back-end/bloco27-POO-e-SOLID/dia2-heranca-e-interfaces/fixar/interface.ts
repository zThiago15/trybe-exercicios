interface myInterface {
  myNumber: number;

  myFunc(myParam: number): string;
}

class MyClass implements myInterface {
  constructor(public myNumber: number) {

  }

  myFunc(myParam: number): string {
    const sum = this.myNumber + myParam;
    return `A soma entre ${this.myNumber} + ${myParam} é igual a ${sum}`;
  }
}

const objMyClass = new MyClass(5);
console.log(objMyClass.myFunc(3));
