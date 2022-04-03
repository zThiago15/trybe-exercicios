const myFizzBuzz = require('../code/fizzBuzz');

test('verify if number is divible by 3 and 5 and check return', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
})

test('verify if number is only divisible by 3 and check return', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
})

test('verify if number is only divisible by 5 and check return', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
})

test('verify if number is not divisible by 3 and 5 and check return', () => {
    expect(myFizzBuzz(17)).toBe(17);
})

test("make a call with a param that's not a number and check if returns correctly", () => {
    expect(myFizzBuzz('hello')).toBe(false);
})