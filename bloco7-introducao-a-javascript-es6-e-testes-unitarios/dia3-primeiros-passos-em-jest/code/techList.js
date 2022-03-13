function techList(arr, nome) {

    if (arr.length === 0) {
        return 'Vazio!';
    }

    arr.sort()

    const newArrayObj = arr.map(element => {
        return {
            tech: element,
            name: nome,
        }
    });

    return newArrayObj.sort();
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
console.log(techList([], 'df'));

module.exports = techList;