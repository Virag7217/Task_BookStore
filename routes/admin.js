const express = require('express');
const router = express.Router();

const storeController = require('../controllers/store');

const adminController = require('../controllers/admin');


router.get('/admin', adminController.getAdminPanel);

router.get('/admin/add-product', adminController.getAddProduct);

router.post('/admin/add-product', adminController.postAddProduct);

router.get('/admin/products', adminController.getProducts);

router.get('/admin/edit-product/:productId', adminController.getEditProduct);

module.exports = router;