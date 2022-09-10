type callbackFunction<T> = (p1: T, index?: number, array?: T[]) => boolean;

function myFilter<T>(p1: T[], p2: callbackFunction<T>): T[] {
  const newArray: T[] = []
  
  for (let i = 0; i < p1.length; i += 1) {

    if (p2(p1[i], i, p1)) {
      newArray.push(p1[i]);
    }
    
  }

  return newArray;
};

console.log(myFilter([1, 2, 3], (item, index, array) => item < 3));
console.log(myFilter(['a', 'b', 'c'], (item, index, array) => item !== 'a'));



