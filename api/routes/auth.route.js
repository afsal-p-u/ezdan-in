const router = require('express').Router();

const { SignUp, SignIn } = require('../controllers/auth.controller');

router.post('/sign-up', SignUp)
router.post('/sign-in', SignIn)

module.exports = router