const router = require('express').Router();
const { SignUp, SignIn, SignOut } = require('../controllers/auth.controller');

router.post('/sign-up', SignUp)
router.post('/sign-in', SignIn)
router.post('/sign-out', SignOut)

module.exports = router