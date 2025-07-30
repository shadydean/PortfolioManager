const express = require('express');
const router = express.Router();
const controller = require('../controllers/stockController');

router.post('/buy', controller.buyStock);
router.post('/sell', controller.sellStock);
router.get('/history', controller.getTransactionHistory);

module.exports = router;