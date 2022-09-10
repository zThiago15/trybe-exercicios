import Car, { color, directions, ports } from "./car";

const volkswagen = new Car('Volksware gol', color.silver, 4);

volkswagen.opentTheDoor(ports.frontLeft);
volkswagen.closeTheDoor(ports.frontLeft);
volkswagen.turnOn();
volkswagen.speedUp();
volkswagen.speedDown();
volkswagen.turn(directions.left);
volkswagen.speedUp();
volkswagen.speedDown();
volkswagen.turn(directions.right);
volkswagen.speedUp();
volkswagen.speedDown();
volkswagen.stop();
volkswagen.opentTheDoor(ports.backRight);
volkswagen.closeTheDoor(ports.backRight);

volkswagen.speedUp();
volkswagen.speedDown();
volkswagen.turn(directions.right);
volkswagen.speedUp();
volkswagen.speedDown();
volkswagen.turn(directions.left);
volkswagen.speedUp();
volkswagen.speedDown();
volkswagen.turn(directions.right);
volkswagen.speedUp();
volkswagen.speedDown();
volkswagen.stop();
volkswagen.opentTheDoor(ports.backLeft);
volkswagen.closeTheDoor(ports.backLeft);