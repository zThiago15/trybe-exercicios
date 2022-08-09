const fs = require('fs');

function writeFile(arquivo, conteudo) {
  try {
    fs.writeFileSync(`${__dirname}/${arquivo}`, conteudo);
    return 'ok';
  } catch(err) {
    return 'não foi possível escrever arquivo';
  }

}

console.log(writeFile);

module.exports = { writeFile };
