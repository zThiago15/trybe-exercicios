const fs = require('fs').promises;

Promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt'),
  fs.readFile('file3.txt'),
])
  .then(([file1, file2, file3]) => {
    const filesSize = file1.byteLength + file2.byteLength  + file3.byteLength;
    console.log(`Tamanho total dos arquivos: ${filesSize} bytes`);
  })
  .catch((err) => console.log(`Erro ao ler arquivos: ${err.message}`));