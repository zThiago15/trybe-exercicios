const fs = require('fs').promises;

async function addNelson() {
  const content = JSON.parse(await fs.readFile('simpsonsFamily.json', 'utf-8'));

  const nelson = { id: "5", nome: 'Nelson Muntz' };
  content.push(nelson);

  await fs.writeFile('simpsonsFamily.json', JSON.stringify(content));
}

addNelson();