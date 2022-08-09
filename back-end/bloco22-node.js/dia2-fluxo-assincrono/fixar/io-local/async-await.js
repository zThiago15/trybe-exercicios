const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('arquivo.txt', 'mundança');
    console.log('Arquivo escrito com sucesso');
  } catch(err) {
    console.log(`Erro ao escrever arquivo: ${err.message}`);
  }
}

main();