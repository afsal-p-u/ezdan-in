const router = require('express').Router();
const { addNewProduct, getAllProducts, getProduct } = require('../controllers/product.controller');

router.post('/new', addNewProduct)
router.get('/', getAllProducts)
router.get('/:id', getProduct) 

module.exports = router 