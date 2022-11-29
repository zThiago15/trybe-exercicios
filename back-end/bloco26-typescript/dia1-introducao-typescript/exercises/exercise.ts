export const greeter = (name: string): string => {

  return `Olá ${name}`;  
};

export const personAge = (name: string, age: number): string => {

  return `${name} tem ${age} anos`;
};

export const add = (x: number, y: number): number => {
  return x + y;
};

export const sumArray = (numbers: number[]): number => {

  return numbers.reduce(add, 0);
};

export const triangle = (base: number, height: number): number => {

  return (base * height) / 2;
};

export const square = (side: number): number => {

  return side ** 2;
};

export const rectangle = (base: number, height: number): number => {
  
  return base * height;
}

export const diamond = (D: number, d: number): number => {

  return D * d / 2;
};

export const trapeze = (B: number, b: number, h: number): number => {

  return ((B + b) * h) / 2;
};

export const circle = (r: number): number => {
  return (3.14 * r**2)
};
