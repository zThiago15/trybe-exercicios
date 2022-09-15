class Data {
  day: number;
  month: number;
  year: number;

  constructor(day: number, month: number, year: number) {
    const validateDay = day >= 1 && day <= 31;
    const validateMonth = month >= 1 && day <= 11;
    const validateYear = String(year).length === 4;

    if (validateDay && validateMonth && validateYear) {
      this.day = day;
      this.month = month;
      this.year = year;
    } else {
      this.day = 1
      this.month = 1;
      this.year = 1900;
    }
  }
}