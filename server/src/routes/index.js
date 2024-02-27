// routes.js
const express = require('express');
const router = express.Router();

// Define tus rutas aquí
router.get('/ejemplo', (req, res) => {
  res.send('¡Hola desde la ruta de ejemplo!');
});

module.exports = router;
