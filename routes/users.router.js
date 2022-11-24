const router = require('express').Router();

const userController = require('../controllers/users.controllers');
const authMiddleware = require('../middlewares/users.middlewares');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.post('/login', userController.loginUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;