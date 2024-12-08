const router = require('express').Router();
const { CreateOrder } = require('../controllers/payment.controller');

router.post('/create', CreateOrder)   

module.exports = router