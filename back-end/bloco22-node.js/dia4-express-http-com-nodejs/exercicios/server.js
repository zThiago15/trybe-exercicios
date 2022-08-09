const express = require('express');
const app = express();
const fs = require('fs');

const { generateToken } = require('./generateToken');

app.use(express.json()); // bodyParser nativo

app.get('/ping', (req, res) => res.status(200).json({ message: 'pong' }));

app.post('/hello', (req, res) => {
  const { name } = req.body;
  const { authorization } = req.header;

  if (authorization.length !== 16 || !authorization) { 
    return res.status(401).json({ "message": 'Token inválido!' })
  }

  res.status(200).json({ "message": `Hello, ${name}` });

});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  const { authorization } = req.header;

  if (authorization.length !== 16 || !authorization) { 
    return res.status(401).json({ "message": 'Token inválido!' })
  }

  if (age > 17) {
    return res.status(200).json({ "message": `Hello, ${name}` });
  }
  
  return res.status(401).json({ "message": "Unanthorized" });
});

app.put('/users/:name/:age', (req, res) => {

  const { authorization } = req.header;

  if (authorization.length !== 16 || !authorization) { 
    return res.status(401).json({ "message": 'Token inválido!' })
  }

  const { name, age } = req.params;

  return res.status(201).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` })
});

// simpsons
app.get('/read-simpsons', (req, res) => {
  const { authorization } = req.header;

  if (authorization.length !== 16 || !authorization) { 
    return res.status(401).json({ "message": 'Token inválido!' })
  }

  try {
    const data = fs.readFileSync('./simpsons.json', 'utf-8');
    return res.status(200).json({ message: 'success' });
  } catch(err) {
    return res.status(500).json({ message: 'error' });
  }
});

app.get('/simpsons', (req, res) => {
  
  const { authorization } = req.header;

  if (authorization.length !== 16 || !authorization) { 
    return res.status(401).json({ "message": 'Token inválido!' })
  }

  try {
    const simpsons = fs.readFileSync('./simpsons.json', 'utf-8');
    return res.status(200).send(simpsons);
  } catch (err) {
    return res.status(500).json({ message: 'File not found!' });
  }

});

app.get('/simpsons/:id', (req, res) => {

  const { authorization } = req.header;

  if (authorization.length !== 16 || !authorization) { 
    return res.status(401).json({ "message": 'Token inválido!' })
  }

  const { id } = req.params;

  const data = JSON.parse(fs.readFileSync('./simpsons.json', 'utf-8'));
  
  const simpson = data.find((s) => s.id === id);
  
  if (!simpson) {
    return res.status(404).json({ "message": "simpson not found" });
  }

  return res.status(200).json(simpson);
});

app.post('/simpsons', (req, res) => {
  const { id, name } = req.body;

  const { authorization } = req.header;

  if (authorization.length !== 16 || !authorization) { 
    return res.status(401).json({ "message": 'Token inválido!' })
  }

  const data = JSON.parse(fs.readFileSync('./simpsons.json', 'utf-8'));
  
  const simpson = data.find((s) => Number(s.id) === id);
  if (simpson) {
    return res.status(409).json({ "message": 'id already exists!' });
  }

  data.push({ id, name });

  return res.status(204).end();

});

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;


  if (!email || !password || !firstName || !phone) {
    return res.status(401).json({ message: 'missing fields' });
  }

  const token = generateToken();
  return res.status(200).json({ token });
});

const port = 3001;
app.listen(port, () => console.log(`Listening at port ${port}`));