const router = require('express').Router();
const favorisController = require ( '../controllers/favoris.controllers' );

router.get('/:id', favorisController.getFavorisById);
router.post('/', favorisController.addFavoris);
router.put('/', favorisController.updateFavoris);
router.delete('/', favorisController.deleteFavoris);

module.exports = router;