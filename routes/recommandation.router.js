const router = require('express').Router();

const { recommandationController } = require('../controllers/recommandation.controllers');

router.get('/', recommandationController.getRecommandation);

module.exports = router;