const router = require('express').Router();
const { seriesController } = require ( '../controllers' );

router.get('/', seriesController.getSeries);

module.exports = router;