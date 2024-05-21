const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validateUserInput = require('../middlewares/validateUserInput');

router.get('/', userController.getUsers);
router.post('/', validateUserInput, userController.postUser);
router.get('/:userId', userController.getUserById);
router.put('/:userId', userController.putUserById);
router.delete('/:userId', userController.deleteUserById);

module.exports = router;
