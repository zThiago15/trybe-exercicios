"use strict";
class ConsoleLogger {
    log(param) {
        console.log(param);
    }
}
class ConsoleLogger2 {
    log(param) {
        console.log(param);
    }
}
class ExampleDatabase {
    constructor(
    // criando um atributo myLog, que respeita o contrato Logger, utilizando o ConsoleLogger como valor padrão
    myLog = new ConsoleLogger()) {
        this.myLog = myLog;
    }
    save(key, value) {
        this.myLog.log(`${key} e ${value}`);
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
