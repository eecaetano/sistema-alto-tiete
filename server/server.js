const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/dados', async (req, res) => {
  const response = await fetch('https://mananciais.sabesp.com.br/api/Mananciais/ResumoSistemas');
  const data = await response.json();
  const altoTiete = data.find(sistema => sistema.Nome === 'Alto Tietê');
  res.json(altoTiete);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
