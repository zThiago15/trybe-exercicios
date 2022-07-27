const fs = require('fs').promises;

fs.writeFile('arquivo3.txt', 'novo texto')
  .then(() => console.log('Arquivo escrito com sucesso'))
  .catch((err) => console.log(`Erro ao escrever no arquivo: ${err.message}`));