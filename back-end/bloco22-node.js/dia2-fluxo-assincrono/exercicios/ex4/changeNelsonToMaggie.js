const fs = require('fs').promises;

async function changeSimpson() {
  try {
    const content = await fs.readFile('simpsonsFamily.json', 'utf-8');
    const data = JSON.parse(content);
    
    data.forEach(({ nome }, index) => nome ==='Nelson Muntz' && data.splice(index, 1, { id: "5", nome: "Maggie Simpson" }))
    
    await fs.writeFile('simpsonsFamily.json', JSON.stringify(data));


  } catch(err) {
    console.log(`Erro: ${err}`);
  }
}

changeSimpson();