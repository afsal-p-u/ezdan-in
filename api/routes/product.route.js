const router = require('express').Router();
const { addNewProduct, getAllProducts, getProduct } = require('../controllers/product.controller');
const { verifyUser, verifyAdmin } = require('../middleware/auth.middleware');

router.post('/new', verifyAdmin, addNewProduct)
router.get('/', getAllProducts)
router.get('/:id', getProduct) 

module.exports = router 