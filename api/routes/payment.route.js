const router = require('express').Router();
const { CreateOrder } = require('../controllers/payment.controller');
const { verifyUser } = require('../middleware/auth.middleware');

router.post('/create', CreateOrder)   
// router.post('/create', verifyUser, CreateOrder)   

module.exports = router