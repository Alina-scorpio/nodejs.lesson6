const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsers);
router.post('/', userController.postUser);
router.get('/:userId', userController.getUserById);
router.put('/:userId', userController.putUserById);
router.delete('/:userId', userController.deleteUserById);

module.exports = router;
