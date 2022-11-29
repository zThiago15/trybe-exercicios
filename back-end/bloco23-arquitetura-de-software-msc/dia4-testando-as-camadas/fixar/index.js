const express = require('express');

const MovieController = require('./controllers/movieController');

const app = express();

app.use(express.json());

app.post('/movies', MovieController.create);
app.get('/movies/:id', MovieController.getById);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});