const fs = require('fs');

const promiseReadFile = (file) => {
  const promiseFile = new Promise((resolve, reject) => {
    fs.readFile(file, (err, content) => {
      if (err) {
        reject(new Error(err));
      }

      resolve(content);
    })
  })

  return promiseFile;
}

promiseReadFile('file1.txt')
  .then((result) => console.log(`File1.txt tem ${result.byteLength} bytes`)) // caso não tenha erros
  .catch(err => console.log(err)); // retorna erro da função readFIle do módulo interno 'fs'