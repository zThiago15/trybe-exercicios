import Person from "./person";

class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[];
  private _worksGrades: number[];

  constructor(name: string, birthDate: Date, gradeExams: number[], gradeWork: number[]) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
    this._examsGrades = gradeExams;
    this._worksGrades = gradeWork;
  }

  get enrollment() {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length >= 16) {
      this._enrollment = value;
    }
  }

  get examsGrades() {
    return this._examsGrades;
  }

  set examsGrades(grades: Array<number>) {
    if (grades.length < 5) {
      this.examsGrades = grades;
    }
  }

  set worksGrades(grades: Array<number>) {
    if (grades.length < 3) {
      this._worksGrades = grades;
    }
  }

  sumGrades(): number {
    const sumSchool = this._examsGrades.reduce((acc, num) => acc + num);
    const sumWork = this._worksGrades.reduce((acc, num) => acc + num);

    return sumSchool + sumWork;
  }

  average(): number {
    const lengthGrades = this._examsGrades.length + this._worksGrades.length;

    const average = this.sumGrades() / lengthGrades;
    return average;
  }

  generateEnrollment() {
    return `STDU` + Math.random().toFixed(2);
  }

}
