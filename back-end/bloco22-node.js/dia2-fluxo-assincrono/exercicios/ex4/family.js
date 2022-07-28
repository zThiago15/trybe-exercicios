const fs = require('fs').promises;

async function getSimpsonsFamily() {
  const content = await fs.readFile('simpsons.json', 'utf-8');

  const familySimpsons = JSON.parse(content).filter(({ id }) => Number(id) < 5);
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(familySimpsons));
}

getSimpsonsFamily();