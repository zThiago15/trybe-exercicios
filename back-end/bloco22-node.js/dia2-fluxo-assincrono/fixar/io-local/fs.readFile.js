const fs = require('fs');

fs.readFile('arquivo1.txt', 'utf-8', (err, content) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(content);
});

// Utilizando promise
fs.readFile('arquivo.txt', 'utf8')
  .then((data) => {
    console.log(`Conteúdo do arquivo: ${data}`);
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
  });