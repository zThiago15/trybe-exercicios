const fs = require('fs').promises;

async function changeSimpson() {
  
  try {
    const content = await fs.readFile('simpsons.json', 'utf-8');
  
    const changedSimpsons = JSON.parse(content).filter(({ id }) => Number(id) !== 6 && Number(id) !== 10);
    await fs.writeFile('simpsons.json', JSON.stringify(changedSimpsons));

    console.log(changedSimpsons);

  } catch(err) {
    console.log(`Erro: ${err}`);
  }
}

changeSimpson();