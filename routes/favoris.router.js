const router = require('express').Router();
const { favorisController } = require ( '../controllers' );

router.get('/', favorisController.getFavoris);
router.get('/:id', favorisController.getFavorisById);
router.post('/', favorisController.addFavoris);
router.put('/:id', favorisController.updateFavoris);
router.delete('/:id', favorisController.deleteFavoris);

module.exports = router;