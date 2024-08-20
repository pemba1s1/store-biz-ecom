
const express = require('express');
const { UserLogin, RegisterUser } = require('../controller/userController');
const router =  express.Router();

router.post('/login', UserLogin);
router.post('/register', RegisterUser);

module.exports = router;
