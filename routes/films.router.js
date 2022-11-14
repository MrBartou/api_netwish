const router = require('express').Router();
const { filmsController } = require ( '../controllers/film.controllers' );

router.get('/', filmsController.getFilms);

module.exports = router;