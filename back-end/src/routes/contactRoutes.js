// src/routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactControllers');

// Маршрут для создания нового контакта
router.post('/contact', contactController.createContact);

// Маршрут для получения всех контактов
router.get('/contacts', contactController.getAllContacts);

module.exports = router;
