import { Employee } from "./employee";
import Person from "./person";

class Teacher extends Employee {
  constructor(name: string, birthDate: Date, registration: string, salary: number, admissionDate: Date) {
    super(name, birthDate, registration, salary, admissionDate);

  }

  set registration(registry: string) {
    if (registry.length >= 16)  {
      this.registration = registry;
    }
  }

  set salary(value: number) {
    if (value >= 0) {
      this.salary  = value;
    }
  }

  set admissionDate(admissionDate: Date) {
    if (admissionDate.getTime() < (new Date().getTime() + 1)) {
      this.admissionDate = admissionDate;
    }
  }

  
}