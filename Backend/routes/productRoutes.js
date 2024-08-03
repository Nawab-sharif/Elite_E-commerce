const express = require('express');
const productController = require('../controller/productController.js');
const router = express.Router();
let upload =  require('../multerConfig.js')


router.post('/saveData' ,upload.single('image'), productController.productSave);
router.get('/getData' , productController.productGet);
router.delete('/productDelete/:id', productController.productDelete)
router.put('/productUpdate/:id', productController.productUpdate)

module.exports = router;