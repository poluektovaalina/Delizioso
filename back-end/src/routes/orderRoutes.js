const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderControllers');  // Убедитесь, что путь правильный

// Добавить новый заказ
router.post('/addOrder', orderController.addOrder);

// Получить все заказы
router.get('/getOrders', orderController.getOrders);

// Получить заказ по ID
router.get('/getOrder/:id', orderController.getOrderById);

// Обновить количество заказа (через POST запрос)
router.post('/updateOrder', orderController.updateOrder);

// Удалить заказ (через POST запрос)
router.post('/deleteOrder', orderController.deleteOrder);

module.exports = router;
