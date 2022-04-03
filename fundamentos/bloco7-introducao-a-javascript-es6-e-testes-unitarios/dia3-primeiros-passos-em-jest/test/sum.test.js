const sum = require('./sum.js.js');

test('if return sum(4, 5) is equal to 9', () => {
    expect(sum(4, 5)).toBe(9);
})

test('if sum(0,0) is equal to 0', () => {
    expect(sum(0, 0)).toBe(0);
})

test('if sum(4, "5") returns an error', () => {
    expect(() => sum(4, "5")).toThrow();
})

test('if message is "parameters must be numbers" when called sum(4, "5")', () => {
    expect(() => sum(4, "5")).toThrow('parameters must be numbers');
})