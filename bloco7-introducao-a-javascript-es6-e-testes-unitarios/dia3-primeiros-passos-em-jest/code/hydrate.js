function hydrate(bebidas) {
    let numAgua = bebidas.replace(/\D/g, '');

    let totalAgua = 0;
    for (let i = 0; i < numAgua.length; i += 1) {
        // convertendo cada posição de 'numAgua' pro tipo Número e somar todos os dígitos recuperados
        totalAgua += Number(numAgua[i]);
    }

    if (totalAgua === 1) {
        return `1 copo de água`;
    }
    return `${totalAgua} copos de água`;
}

module.exports = hydrate;