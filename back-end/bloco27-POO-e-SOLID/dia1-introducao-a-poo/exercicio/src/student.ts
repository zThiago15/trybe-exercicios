class Student {
  register: string;
  name: string;
  gradeSchool: number[];
  gradeWork: number[];

  constructor(register: string, name: string, gradeSchool: number[], gradeWork: number[]) {
    this.register = register;
    this.name = name;
    this.gradeSchool = gradeSchool;
    this.gradeWork = gradeWork;
  }

  sumGrades() {
    const sumSchool = this.gradeSchool.reduce((acc, num) => acc + num);
    const sumWork = this.gradeWork.reduce((acc, num) => acc + num);

    return sumSchool + sumWork;
  }
}
