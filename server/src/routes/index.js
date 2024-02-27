const { Router } = require('express');
const movie_router = require("./movies");
const serie_router = require("./series");
const genre_router = require('./genres');

// Define tus rutas aquí
// router.get('/ejemplo', (req, res) => {
//   res.send('¡Hola desde la ruta de ejemplo!');
// });

const router = Router();

router.use('/movie', movie_router);
router.use('/serie', serie_router)
router.use('', genre_router);

module.exports = router;
