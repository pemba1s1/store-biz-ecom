
const express = require('express');
const { getTopDeals, getProductById, getNewArrival, getProductsByFilter } = require('../controller/productsController');
const router =  express.Router();

router.get('/', getProductsByFilter);
router.get('/top-deals', getTopDeals);
router.get('/new-arrival', getNewArrival);
router.get('/:id', getProductById);

module.exports = router;
