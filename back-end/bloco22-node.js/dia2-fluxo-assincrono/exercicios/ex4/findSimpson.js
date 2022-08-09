const fs = require('fs').promises;

function findSimpson(simpsonId) {

  fs.readFile('simpsons.json', 'utf-8')
    .then((fileName) => {
      const content = JSON.parse(fileName);
      const character = content.find(({ id }) => Number(id) === simpsonId);
      if (character === undefined) {
        throw new Error('Id não encontrado')
      }

      console.log(character);
    })
    .catch(err => console.log(err.message));
}

findSimpson(6);