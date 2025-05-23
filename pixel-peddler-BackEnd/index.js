// index.js
const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API Backend de Pixel Peddler');
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});

app.get('/api/products', async (req, res) => {
  const products = [/* بعض المنتجات التجريبية هنا */];
  res.json(products);
});

