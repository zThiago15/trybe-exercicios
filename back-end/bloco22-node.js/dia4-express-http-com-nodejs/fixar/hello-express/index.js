const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json())

// API receitas
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

app.post('/recipes', (req, res) => {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price });

  res.status(201).json({ message: 'Recipe created successfully!' })
})


// edit recipe
app.put('/recipes/:id', (req, res) => {
  const { name, price } = req.body;
  const { id } = req.params;
  
  // findIndex - https://www.w3schools.com/jsref/jsref_findindex.asp
  const recipeIndex = recipes.findIndex((r) => r.id = Number(id));

  if (recipeIndex === -1) {
    return res.status(404).json({ message: 'Recipe not found!' })
  }

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price }
  // saved
  return res.status(204).end();

})

app.delete('/recipes/:id', (req, res) => {
  const { id } = req.params;

  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if(recipeIndex === -1) {
    return res.status(404).json({ message: 'Recipe not found!' });
  }

  // splice - https://www.w3schools.com/jsref/jsref_splice.asp
  recipes.splice(recipeIndex, 1);

  res.status(204).end();

})

// Using 'query string' to filter recipes
app.get('/recipes/search', (req, res) => {
  const { name, maxPrice, minPrice } = req.query;

  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price <= maxPrice && r.price >= minPrice);
  if(filteredRecipes.length === 0) {
    return res.status(404).json({ message: 'Did not found any recipe'});
  }

  return res.status(200).json(filteredRecipes);

})

app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;

  const recipe = recipes.find((r) => r.id === Number(id));
  if(!recipe) {
    return res.status(404).json({ message: "Error: Recipe not found" })
  }

  return res.status(200).json(recipe);
})


// API bebidas
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


app.get('/drinks/search', (req, res) => {
  const { name } = req.query;

  const drinksFiltered = drinks.filter((drink) => drink.name.includes(name));

  if (drinksFiltered.length === 0) {
    res.status(404).json({ message: 'Error: drink not found' });
  }

  res.status(200).json(drinksFiltered); 
})

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;

  const drink = drinks.find((drink) => drink.id === Number(id));
  if (!drink) {
    return res.status(404).json({ message: "Error: drink not found"});
  }
  return res.status(200).json(drink);
  
})

app.put('/drinks/:id', (req, res) => {
  const { name, price } = req.body;
  const { id } = req.params;

  const drinkIndex = drinks.findIndex((d) => d.id === Number(id));

  if (drinkIndex === -1) {
    return res.status(404).json({ message: 'Error: drink not found' })
  }

  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price }

  return res.status(204).end();
})

app.delete('/drinks/:id', (req, res) => {
  const { id } = req.params;

  const drinkIndex = drinks.findIndex((d) => d.id === Number(id));

  if (drinkIndex === -1) {
    return res.status(404).json({ message: 'Error: drink not found' });
  }

  drinks.splice(drinkIndex, 1);

  return res.status(204).end();

})

app.all('*', (req, res) => {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!` })
})

// HTTP server
const port = 3001;
app.listen(port, () => {
  console.log(`App listening at port ${port}`);
})
