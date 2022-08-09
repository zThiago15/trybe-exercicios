const fs = require('fs').promises;

function readSimpsons() {
  fs.readFile('simpsons.json', 'utf-8')
    .then((content) => {
      const converted = JSON.parse(content);
      converted.forEach(({ id, name }) => console.log(`${id} - ${name}`))
    })
    .catch(err => console.log(err.message));
}

readSimpsons();