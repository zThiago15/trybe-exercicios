const myRemove = require('./remove')

test('myRemove([1, 2, 3, 4], 3) returns the corresponding array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
});

test("myRemove([1, 2, 3, 4], 3) doesn't return the array [1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
})

test("myRemove([1, 2, 3, 4], 5) returns the corresponding array", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
})