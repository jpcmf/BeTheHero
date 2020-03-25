const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({
    evento: 'Semana Omni...'
  });
});

app.listen(3333);
