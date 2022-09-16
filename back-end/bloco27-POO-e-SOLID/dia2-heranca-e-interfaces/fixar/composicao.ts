interface Logger {
  log(pam: string): void
}

class ConsoleLogger implements Logger {
  log(param: string) {
    console.log(param);
  }
}

class ConsoleLogger2 implements Logger {
  log(param: string) {
    console.log(param);
  }
}

interface Database {
  myLog: Logger;

  save(key: string, value: string): void;
}

class ExampleDatabase implements Database {
  constructor(
    // criando um atributo myLog, que respeita o contrato Logger, utilizando o ConsoleLogger como valor padrão
    public myLog: Logger =  new ConsoleLogger()
  ) { }

  save(key: string, value: string) {
    this.myLog.log(`${key} e ${value}`)
  }
}


const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();

database1.save('name', 'Thiago');
database2.save('age', '20');
database3.save('career', 'software development');