export enum Avaliation {
  prova = 'prova',
  trabalho = 'trabalho'
}

export abstract class Evaluation {
  private _score: number;
  private _teacher: string;

  constructor(score: number, teacher: string) {
    this._score = score;
    this._teacher = teacher;
  }

  public get teacher(): string {
    return this._teacher;
  }
  public set teacher(value: string) {
    this._teacher = value;
  }

  public get score(): number {
    return this._score;
  }
  
  public set score(value: number) {
    if (value >= 0) {
      this._score = value;
    }
  }

}

class Exam extends Evaluation {

  constructor(score: number, teacher: string) {
    super(score, teacher);
  }

  set score(value: number) {
    if (value <= 25) {
      this.score = value;
    }
  }
}

class Work extends Evaluation {

  constructor(score: number, teacher: string) {
    super(score, teacher);

  }

  set score(value: number) {
    if (value <= 50) {
      this.score = value;
    }
  }
  
}

class EvaluationResult {
  private _evaluation: number;
  private _score: number;

  constructor(evaluation: number, score: number ) {
    this._evaluation = evaluation;
    this._score = score;
  }

  get evaluation(): number {
    return this._evaluation;
  }
  set evaluation(value: number) {
    this._evaluation = value;
  }

  get score() {
    return this._score;
  }

  set score(value: number) {
    if (value >= 0 && value <= this.evaluation)
    this._score = value;
  }
}