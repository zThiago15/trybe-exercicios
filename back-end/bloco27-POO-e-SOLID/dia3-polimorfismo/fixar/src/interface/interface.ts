interface IModel {
  create(): void
  select(): void
  update(): void
  delete(): void
}

class LocalDbModel implements IModel {
  create(): void {
    console.log('create');
  }

  select(): void {
    console.log('select');
  }

  update(): void {
    console.log('update');
  }

  delete(): void {
    console.log('delete');
  }
}

class MockedDbModel implements IModel {
  create(): void {
    console.log('mock create');
  }

  select(): void {
    console.log('mock select');
  }

  update(): void {
    console.log('mock update');
  }

  delete(): void {
    console.log('mock delete');
  }
}

class CharacterService {
  db: LocalDbModel;

  constructor(dbModel: IModel) {
    this.db = dbModel;
  }
}

const myDbMySQL = new LocalDbModel();
const mockMySQL = new MockedDbModel();


const characterService = new CharacterService(myDbMySQL);
const characterService2 = new CharacterService(mockMySQL);