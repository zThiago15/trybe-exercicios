export enum Avaliation {
  prova = 'prova',
  trabalho = 'trabalho'
}

export class Evaluation {
  private _score: number;
  private _teacher: string;
  private _type: Avaliation;

  constructor(score: number, teacher: string, type: Avaliation) {
    this._score = score;
    this._teacher = teacher;
    this._type = type;
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
    if ((this._type === 'prova' && value <= 25) || (this.type === 'trabalho' && value <= 50) && value >= 0) {
      this._score = value;

    }
  }

  public get type(): Avaliation {
    return this._type;
  }
  public set type(value: Avaliation) {
    this._type = value;
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