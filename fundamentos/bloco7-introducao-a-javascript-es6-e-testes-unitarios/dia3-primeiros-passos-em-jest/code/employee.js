// Dados
const professionalBoard = [{
        id: '8579-6',
        firstName: 'Ana',
        lastName: 'Gates',
        specialities: ['UX', 'Design'],
    },
    {
        id: '5569-4',
        firstName: 'George',
        lastName: 'Jobs',
        specialities: ['Frontend', 'Redux', 'React', 'CSS'],
    },
    {
        id: '4456-4',
        firstName: 'Leila',
        lastName: 'Zuckerberg',
        specialities: ['Context API', 'RTL', 'Bootstrap'],
    },
    {
        id: '1256-4',
        firstName: 'Linda',
        lastName: 'Bezos',
        specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
    },
    {
        id: '9852-2-2',
        firstName: 'Jeff',
        lastName: 'Cook',
        specialities: ['Ruby', 'SQL'],
    },
    {
        id: '4678-2',
        firstName: 'Paul',
        lastName: 'Dodds',
        specialities: ['Backend'],
    },
];

// Pesquisa
const searchEmployee = (id, detail) => {
    // Implemente seu código aqui
    // Verificar se ID consta no array de objs

    let info;
    professionalBoard.forEach((element) => {
        if (element.id === id) {

            // Se a info for incorreta, e não o ID, retornar:
            if (element[detail] === undefined) {
                info = `Informação Indisponível`;
            } else {
                info = element[detail];
            }
        }
    })
    // Se 'info' não recebeu nada, o ID não foi encontrado, então retorne:
    if (info === undefined) {
        return `ID não identificada`;

    } else {
        return info;
    }
};

console.log(searchEmployee('4678-2', 'lastName'));

module.exports = searchEmployee;