const router = require('express').Router();
const { seriesController } = require ( '../controllers/series.controllers' );

router.get('/', seriesController.getSeries);

module.exports = router;