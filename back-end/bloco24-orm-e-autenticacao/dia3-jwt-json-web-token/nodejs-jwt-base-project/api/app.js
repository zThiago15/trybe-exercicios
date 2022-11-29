const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const validateJWT = require('./auth/validateJWT');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apiRoutes = express.Router();

/* Aqui, importamos nossa função que valida se o usuário está ou não autenticado */
apiRoutes.get('/api/posts', validateJWT, routes.getPosts);
apiRoutes.post('/api/users', routes.createUsers);
apiRoutes.get('/api/users', routes.getUsers);
apiRoutes.post('/api/login', routes.login);

app.use(apiRoutes);

module.exports = app;