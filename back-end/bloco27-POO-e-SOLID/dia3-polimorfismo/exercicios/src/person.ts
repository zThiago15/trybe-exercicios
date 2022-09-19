export default abstract class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this._name = name;
    this._birthDate = birthDate;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    if (name.length >= 3) {
      this._name = name;
    }
  }

  get birthDate() {
    return this._birthDate;
  }

  set birthDate(birthDate: Date) {
    if (this.validateBirthDate(birthDate)){
      this._birthDate = birthDate;
    } else {
      console.log('Data de nascimento inválida!');
      
    }
  }

  validateBirthDate(date: Date):boolean {
    const dateNow = new Date().getTime();
    const age = new Date().getFullYear() - date.getFullYear();

    if (date.getTime() > dateNow) {
      console.log('Erro: Data de nascimento maior que a data atual');
      return false;
    } else if (age > 120) {
      console.log('Erro: Idade maior que 120 anos');
    }
    
    return true;
  }
}

class Student extends Person {

}

class Professor extends Person {

}

const person1 = new Student('John', new Date());
console.log(person1.name);
console.log(person1.birthDate);

const person2 = new Professor('Mary', new Date());
console.log(person2.name);
console.log(person2.birthDate);
