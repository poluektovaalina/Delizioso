const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationControllers');

// Маршрут для создания нового бронирования
router.post('/reservations', reservationController.createReservation);

// Маршрут для получения всех бронирований
router.get('/reservations', reservationController.getAllReservations);

// Маршрут для получения бронирования по ID
router.get('/reservations/:id', reservationController.getReservationById);

router.post('/deleteReservation', reservationController.deleteReservation);

module.exports = router;
