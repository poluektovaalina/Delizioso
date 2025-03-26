const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminControllers');

router.get('/getDishes', adminController.getDishes);
router.post('/getDishById', adminController.getDishById);
router.post('/createDish', adminController.createDish);
router.post('/updateDish', adminController.updateDish);
router.post('/deleteDish', adminController.deleteDish);

module.exports = router;
