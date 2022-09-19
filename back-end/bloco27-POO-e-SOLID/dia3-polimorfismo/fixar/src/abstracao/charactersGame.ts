abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  constructor(
    public speech: string,
    public move: string
  ) { super() }

  talk(): void {
    console.log(this.speech);
  }

  specialMove(): void {
    console.log(this.move);
  }
}

class LongRangeCharacter extends Character {
  constructor(
    public speech: string,
    public move: string
  ) { super() }

  talk(): void {
    console.log(this.speech);
  }

  specialMove(): void {
    console.log(this.move);

  }
}

function callCharacters(character: Character) {
  character.talk();
  character.specialMove();
}

const mario = new MeleeCharacter('It is me, Mario!', 'Super Jump Punch');
const simon = new LongRangeCharacter('Here it is simon!', 'Throws a cross');

callCharacters(mario);
callCharacters(simon);