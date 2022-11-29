import { Enrollable } from "./enrollable.interface";
import Person from "./person";

export class Employee extends Person implements Enrollable {
  enrollment: string;

  constructor(
    name: string,
    birthDate: Date,
    registration: string, 
    salary: number, 
    admissionDate: Date
  ) { 
    super(name, birthDate);
    this.enrollment = registration;
   }

   generateEnrollment() {
    return 'YRH' + Math.random().toFixed(15);
  }
}