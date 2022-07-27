const fs = require('fs');

try {
  const file = 'arquivo.txt';

  const content = fs.readFileSync(file, 'utf-8');
  console.log(content);
} catch(err) {
  console.log(err.path);
}