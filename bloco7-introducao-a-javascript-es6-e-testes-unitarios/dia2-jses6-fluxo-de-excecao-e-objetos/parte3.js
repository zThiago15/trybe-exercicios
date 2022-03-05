const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 - Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addTurno = (obj, chave, valor) => {

  obj[chave] = valor;
  return obj;

}
console.log(addTurno(lesson2, 'turno', 'noite'));

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listarChaves = (obj) => {
  return Object.keys(obj);

}

console.log(listarChaves(lesson1));
console.log(listarChaves(lesson2));

// 3 - Crie uma função para mostrar o tamanho de um objeto.

const tamanhoObj = (obj) => {
  let tamanho = 0;
  for (const key in obj) {
    tamanho += 1;
  }
  return `Tamanho: ${tamanho}`;
}

console.log(tamanhoObj(lesson1));

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listarValores = (obj) => {

  return Object.values(obj);
}

console.log(listarValores(lesson3));
console.log('');

// 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons).

const allLessons = {
  lesson1: Object.assign({}, lesson1),
  lesson2: Object.assign({}, lesson2),
  lesson3: Object.assign({}, lesson3)
}
console.log(allLessons);

// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

function totalEstudantes(obj) {
  const les1 = obj.lesson1.numeroEstudantes;
  const les2 = obj.lesson2.numeroEstudantes;
  const les3 = obj.lesson3.numeroEstudantes;

  const total = les1 + les2 + les3;
  return total;
}

console.log(totalEstudantes(allLessons));

// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
const getValueFromKey = (obj, key) => {
  try {
    const keys = Object.keys(obj);

    if (keys[key] == undefined) {
      throw new Error(`Erro: Número inválido. Posições disponíveis: ${keys.length}`);
    }

    return keys[key];

  } catch (erro) {
    return erro.message;
  }
}

console.log(getValueFromKey(lesson1, 3));

// 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const checkKeyValue = (obj, key, value) => {

  const propriedades = Object.entries(obj);
  for (let i = 0; i < propriedades.length; i += 1) {
    if (propriedades[i][0] == key && propriedades[i][1] == value) {
      return true;
    }
  }
  return false;
}

console.log(checkKeyValue(lesson3, 'materia', 'Matemática')); // true
console.log(checkKeyValue(lesson3, 'turno', 'manha')); // false

// Bônus
// 1B - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 

const countStudents = (obj) => {
  const data = Object.entries(obj);
  let totalEstudantes = 0;

  for (let i = 0; i < data.length; i += 1) {
    totalEstudantes += data[i][1].numeroEstudantes;
  }

  return totalEstudantes;
}

console.log(countStudents(allLessons));

// 2B - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

//console.log(createReport(allLessons, 'Maria Clara'))
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */
console.log('----------------');

const generateReport = (obj, prof) => {
  const data = Object.entries(obj);
  const aulas = [];
  let estudantes = 0;

  for (let i = 0; i < data.length; i += 1) {
    // checar professor
    if (data[i][1].professor == prof) {

      aulas.push(data[i][1].materia);
      estudantes += data[i][1].numeroEstudantes;
    }
  }
  const report = {
    professor: prof,
    aulas: aulas,
    estudantes: estudantes
  }

  return report;
}

console.log(generateReport(allLessons, 'Carlos'));