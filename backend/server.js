import express from 'express';
import products from './data/products.js';

const port = 5000;

const app = express();

// 1st route
app.get('/', (req, res) => {
  res.send('API is running..');
});

// Route for all the products
app.get('/api/products', (req, res) => {
    res.json(products)
});

// Single route
app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);

});

app.listen(port, () => console.log(`Server is running on port ${port}`));
