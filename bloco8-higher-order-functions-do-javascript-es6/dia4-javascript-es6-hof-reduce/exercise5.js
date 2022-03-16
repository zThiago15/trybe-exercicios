// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
    // escreva seu código aqui

    let lettersUppercase = 0;
    let lettersLowercase = 0;

    const total = names.reduce((accumulator, current) => {
        // verificar, as letras de cada palavra
        for (const letter of current) {
            if (letter === 'A') {
                lettersUppercase += 1;
                accumulator += 1;
            } else if (letter === 'a') {
                lettersLowercase += 1;
                accumulator += 1;
            }
        }
        return accumulator;
    }, 0)

    return `A: ${lettersUppercase}. a: ${lettersLowercase}. Total ${total}.`;
}

console.log(containsA());