const express = require('express');
const router = express.Router();

const storeController = require('../controllers/store');

router.get('/',storeController.getHome);

router.get('/login', storeController.getLogin)

router.get('/signup',storeController.getSignup);

module.exports = router;

