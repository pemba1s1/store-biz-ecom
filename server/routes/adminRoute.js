
const express = require('express');
const { AdminLogin } = require('../controller/adminController');
const checkAdmin = require('../middleware/checkAdmin');
const router =  express.Router();

router.get('/verify', checkAdmin, (req, res) => {
  return res.status(200).send('Admin');
});

router.post('/login', AdminLogin);

module.exports = router;
