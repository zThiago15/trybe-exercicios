"use strict";
class Person {
    constructor(name, birthDate) {
        this._name = name;
        this._birthDate = birthDate;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        if (name.length >= 3) {
            this._name = name;
        }
    }
    get birthDate() {
        return this._birthDate;
    }
    set birthDate(birthDate) {
        if (this.validateBirthDate(birthDate)) {
            this._birthDate = birthDate;
        }
        else {
            console.log('Data de nascimento inválida!');
        }
    }
    validateBirthDate(date) {
        const dateNow = new Date().getTime();
        const age = new Date().getFullYear() - date.getFullYear();
        if (date.getTime() < dateNow && age <= 120) {
            return true;
        }
        return false;
    }
}
const john = new Person('John', new Date());
console.log(john.name);
console.log(john.birthDate);
