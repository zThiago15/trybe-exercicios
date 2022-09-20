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

  public get type(): string {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }
}