const router = require('express').Router();

const { SignUp } = require('../controllers/auth.controller');

router.post('/sign-up', SignUp)

module.exports = router