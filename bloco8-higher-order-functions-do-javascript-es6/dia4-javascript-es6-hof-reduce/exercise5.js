// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
    // escreva seu código aqui
    // 17 letras maiusculuas

    let lettersUppercase = 0;
    let lettersLowercase = 0;

    let idk = names.reduce((accumulator, current) => {
        // verificar, as letras de cada palavra
        for (const letter of current) {
            if (letter === letter.toUpperCase()) {
                lettersUppercase += 1;
            } else if (letter === letter.toLowerCase()) {
                lettersLowercase += 1;
            }
        }
        return accumulator;
    }, '')

    return `Maísculas: ${lettersUppercase}. Minúsculas: ${lettersLowercase}`;
}

console.log(containsA());