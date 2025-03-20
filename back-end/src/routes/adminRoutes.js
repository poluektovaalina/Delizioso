const express = require('express');
const router = express.Router();
const dishController = require('../controllers/dishController');

router.post('/getDishes', dishController.getDishes);
router.post('/getDishById', dishController.getDishById);
router.post('/createDish', dishController.createDish);
router.post('/updateDish', dishController.updateDish);
router.post('/deleteDish', dishController.deleteDish);

module.exports = router;
