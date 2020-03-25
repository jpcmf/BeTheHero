const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({
    evento: 'Semana Omni...'
  });
});

module.exports = routes;
