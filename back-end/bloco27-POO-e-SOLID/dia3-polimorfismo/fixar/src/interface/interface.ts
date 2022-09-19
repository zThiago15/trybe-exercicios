interface Character {
  name: string;
  skill: string;
}

interface DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [];

interface IModel {
  create(): void
  select(): void
  update(): void
  delete(): void
}

class LocalDbModel implements IModel {
  create(): void {
    
  }

  select(): void {
    
  }

  update(): void {
    
  }

  delete(): void {
    
  }
}

class CharacterService {
  db: LocalDbModel;

  constructor(dbModel: LocalDbModel) {
    this.db = dbModel;
  }
}