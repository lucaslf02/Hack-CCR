const express = require("express");
const UserController = require("../controller/userController.js");
const router = express.Router();

router.get('/login', UserController.login);
router.get('/:id', UserController.indexId);
router.get('/', UserController.index);
router.post('/', UserController.store);

module.exports = router;