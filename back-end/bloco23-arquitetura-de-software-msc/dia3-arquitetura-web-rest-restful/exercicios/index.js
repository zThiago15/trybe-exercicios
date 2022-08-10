const express = require('express');

const route = express.Router();

route.use(express.json())

const Product = require('./controllers/productController');

route.get('/products', Product.getProducts);
route.get('/product/:id', Product.getProductById);
route.post('/product', Product.createProduct);
route.delete('/product/:id', Product.deleteProduct);
route.put('/product/:id', Product.updateProduct);

const port = 3000;
route.listen(port, console.log(`Listening at port ${port}`));
