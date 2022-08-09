const express = require('express');

const app = express();

app.use(express.json())

const Product = require('./controllers/productController');

app.get('/products', Product.getProducts);
app.get('/product/:id', Product.getProductById);
app.post('/product', Product.createProduct);
app.delete('/product/:id', Product.deleteProduct);
app.put('/product/:id', Product.updateProduct);

const port = 3000;
app.listen(port, console.log(`Listening at port ${port}`));
