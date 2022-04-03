const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
]

console.log(arrays[0]);

function flatten() {

  let values = arrays.reduce((accumulator, current) => {

    return accumulator += ` ${current} `;
  })

  let arrayValues = [];
  arrayValues.push(values);

  return arrayValues;
}

console.log(flatten());