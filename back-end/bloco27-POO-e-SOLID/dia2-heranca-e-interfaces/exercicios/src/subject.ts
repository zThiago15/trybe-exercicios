class Subject {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  
  get name() {
    return this._name;
  }

  set name(value: string) {
    if (this.validateName(value)) {
      this._name = value;
    }
  }

  validateName(name: string) {
    if (name.length < 3) {
      console.log('O nome deve possuir no mínimo 3 caracteres');
      return false;
    } else {
      return name;
    }
  }

}