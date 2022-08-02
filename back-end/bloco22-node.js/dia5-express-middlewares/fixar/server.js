const express = require('express');
const authMiddleware = require('./auth-middleware');

const app = express();

app.use(express.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

// this route doesn't need to authenticate
app.get('/', (req, res) => {
  return res.status(200).json(recipes);
});


app.use(authMiddleware);


const validateName = (req, res, next) => {
  const { name } = req.body;

  if (!name || name === '') {
    return res.status(400).json({ message: "Invalid data!" });
  }

  next();
}

const validatePrice = (req, res, next) => {
  const { price } = req.body;

  if (!price || typeof price !== 'number' || price < 0) {
    return res.status(400).json({ message: "Invalid data!"});
  }
  
  next();
}

const routerRecipe = require('./recipesRouter');

app.use('/recipes', routerRecipe);

const port = 3001;

app.listen(port, () => console.log(`Listening at port ${port}`))