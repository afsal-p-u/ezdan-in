const router = require('express').Router();
const { addNewProduct, getAllProducts, getProduct } = require('../controllers/product.controller');
const { verifyUser } = require('../middleware/auth.middleware');

router.post('/new', addNewProduct)
router.get('/', getAllProducts)
router.get('/:id', getProduct) 

module.exports = router 