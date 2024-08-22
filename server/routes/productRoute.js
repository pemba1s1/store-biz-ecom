
const express = require('express');
const { getTopDeals, getProductById, getNewArrival, getProductsByFilter, uploadProduct, updateProduct, deleteProduct } = require('../controller/productsController');
const checkAdmin = require('../middleware/checkAdmin');
const router =  express.Router();

router.get('/', getProductsByFilter).post('/', checkAdmin, uploadProduct);
router.get('/top-deals', getTopDeals);
router.get('/new-arrival', getNewArrival);
router.get('/:id', getProductById).put('/:id', checkAdmin, updateProduct).delete('/:id', checkAdmin, deleteProduct);

module.exports = router;
