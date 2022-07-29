const express = require('express');


const app = express();

// Testando tipos de rotas
/* app.get('/hello', handleHelloWorldRequest);

app.get('/', (req, res) => res.status(200).send('hello world!'));
app.post('/', (req, res) => res.send('hello world!'));

app.put('/', (req, post) => res.send('modifying data'));

// Any HTTP method goes here
app.all('/', (req, res) => res.send('data'));

app.route('/')
  .get((req, res) => res.send('Hello wolrd! GET'))
  .post((req, res) => res.send('Hello world! POST')) */


const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

recipes.sort((a, b) => {
  let fa = a.name.toLowerCase(),
      fb = b.name.toLowerCase();

  if (fa < fb) {
      return -1;
  }
  if (fa > fb) {
      return 1;
  }
  return 0;
});

app.get('/recipes', (req, res) => res.json(recipes))

// Para fixar
const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

drinks.sort((a, b) => {
  let fa = a.name.toLowerCase(),
      fb = b.name.toLowerCase();

  if (fa < fb) {
      return -1;
  }
  if (fa > fb) {
      return 1;
  }
  return 0;
});


app.get('/drinks', (req, res) => res.json(drinks));

// HTTP server
app.listen(3001, () => {
  console.log('App listening at port 3001');
})
