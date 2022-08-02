const express = require('express');

const app = express();
app.use(express.json());

const validateProduct = (req, res, next) => {
  const { productName } = req.body;
  if (!productName) {
    return res.status(404).json({ "message": "O campo productName é obrigatório" });
  } else if (productName.length < 4) {
    return res.status(400).json({ "message": "O campo productName deve ter pelo menos 4 caracteres" });
  }

  next();
}

const validateDateFormat = (date) => {
  const splittedData = date.split('/');
  
  const d = new Date(`${splittedData[2]}-${splittedData[1]}-${splittedData[0]}`);

  const validateDay = d.getDate() + 1 === Number(splittedData[0]);
  const validateMonth = d.getMonth() + 1 === Number(splittedData[1]);
  const validateYear = d.getFullYear() === Number(splittedData[2]);
  const validateDate = validateDay && validateMonth && validateYear;
  
  return validateDate;
}

const validateInfos = (req, res, next) => {
  const { infos } = req.body;

  if (!infos) {
    return res.status(400).json({ "message": "O campo infos é obrigatório" });
  } else if (!infos.saleDate) {
    return res.status(400).json({ "message": "O campo saleDate é obrigatório" });
  } else if (!infos.warrantyPeriod) {
    return res.status(400).json({ "message": "O campo warrantyPeriod é obrigatório" } );
  }

  // validate date - https://stackoverflow.com/questions/6177975/how-to-validate-date-with-format-mm-dd-yyyy-in-javascript
  const validateDate = validateDateFormat(infos.saleDate);
  const warrantyPeriod = Number(infos.warrantyPeriod);

  if (!validateDate) {
    return res.status(400).json({ "message": "O campo saleDate não é uma data válida" });
  } else if (warrantyPeriod < 1 || warrantyPeriod > 3) {
    return res.status(400).json({ "message": "O campo warrantyPeriod precisa estar entre 1 e 3" });
  }
  next();
  
}

app.post('/sales', validateProduct, validateInfos, (req, res, _next) => {
  return res.status(201).json({ "message": "Venda cadastrada com sucesso" });
});


app.listen(3001, () => console.log('Listening at port 3001'));