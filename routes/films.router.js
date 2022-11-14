const router = require('express').Router();
const { filmsController } = require ( '../controllers' );

router.get('/', filmsController.getFilms);

module.exports = router;