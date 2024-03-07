const express = require('express');
const cacauTrybe = require('./cacauTrybe');
const checkPermissions = require('./middlewares/checkPermissions');
const errorHandler = require('./middlewares/errorHandler');
const limiter = require('./middlewares/rateLimiter');

const app = express();

app.use(express.json());
app.use(limiter)
app.post('/chocolates', async (req, res) => {
  const { name, brandId } = req.body;
  if(name === '')
    return res.status(400).json([])
  const chocolate = await cacauTrybe.createChocolate(name, brandId);
  res.status(201).json({ chocolate });
});

app.delete('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const deleted = await cacauTrybe.deleteChocolate(Number(id));

  if (deleted) return res.status(204).end();
  res.status(404).json({ message: 'chocolate not found' });
});

app.get('/chocolates', checkPermissions, async (req, res, next) => {
  try {
    const err = new Error('Não consegui observar chocolates')
    throw err
  } catch (error) {
    next(error)
  }
  // const chocolates = await cacauTrybe.getAllChocolates();
  // res.status(200).json({ chocolates });
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  // Usamos o Number para converter o id em um inteiro
  const chocolate = await cacauTrybe.getChocolateById(Number(id));
  res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacauTrybe.getChocolatesByBrand(Number(brandId));
  if(chocolates.length == 0)
    return res.status(404).json([])
  return res.status(200).json({ chocolates });
});

app.use(errorHandler)

module.exports = app;
