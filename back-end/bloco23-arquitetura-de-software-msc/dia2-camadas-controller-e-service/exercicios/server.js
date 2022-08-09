const express = require('express');
const { getCep, buildCep } = require('./controller/cep');
const { pong } = require('./controller/ping');

const app = express();

app.use(express.json());

app.get('/ping', pong);
app.get('/cep/:cep', getCep)
app.post('/cep', buildCep)

const port = 3000;
app.listen(port, console.log(`Listening at port ${port}`));