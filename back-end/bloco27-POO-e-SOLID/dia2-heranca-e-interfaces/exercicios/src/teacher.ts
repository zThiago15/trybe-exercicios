import Person from "./person";

class Teacher extends Person implements Employee {
  private _registration: string;
  private _salary: number;
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, registration: string, salary: number, admissionDate: Date) {
    super(name, birthDate);
    this._registration = this.generateRegistration();
    this._salary = salary;
    this._admissionDate = admissionDate;
  }

  set registration(registry: string) {
    if (registry.length >= 16)  {
      this._registration = registry;
    }
  }

  set salary(value: number) {
    if (value >= 0) {
      this._salary  = value;
    }
  }

  set admissionDate(admissionDate: Date) {
    if (admissionDate.getTime() < (new Date().getTime() + 1)) {
      this._admissionDate = admissionDate;
    }
  }

  generateRegistration() {
    return 'YRH' + Math.random().toFixed(15);
  }
}