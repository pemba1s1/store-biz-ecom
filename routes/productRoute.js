
const express = require('express');
const { getTopDeals, getProductById, getNewArrival, getProductsByFilter, uploadProduct } = require('../controller/productsController');
const checkAdmin = require('../middleware/checkAdmin');
const router =  express.Router();

router.get('/', getProductsByFilter).post('/', checkAdmin, uploadProduct);
router.get('/top-deals', getTopDeals);
router.get('/new-arrival', getNewArrival);
router.get('/:id', getProductById);

module.exports = router;
