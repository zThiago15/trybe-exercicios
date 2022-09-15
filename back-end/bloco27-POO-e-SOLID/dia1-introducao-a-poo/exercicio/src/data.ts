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

  getMonthName(month: number) {
    switch (month) {
      case 1:
        return 'january';
      case 2:
        return 'february';
      case 3:
        return 'march';
      case 4:
        return 'april';
      case 5:
        return 'may';
      case 6:
        return 'june';
      case 7:
        return 'july';
      case 8:
        return 'august';
      case 9:
        return 'september';
      case 10:
        return 'october';
      case 11:
        return 'november';
      case 12:
        return 'december';
    }
  }

  isLeapYear(year: number) {
    if (year % 4 === 0) {
      return true;
    }
    return false;
  }

  compare(date: Data) {
    const thisDate = `${this.day}/${this.month}/${this.year}`;
    const dateToCompare = `${date.day}/${date.month}/${date.year}`;

    if (thisDate === dateToCompare) return 0;
    if (this.year > date.year) return 1;
    return -1;

  }

}