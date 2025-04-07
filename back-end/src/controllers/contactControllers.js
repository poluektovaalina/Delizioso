// src/controllers/contactController.js
const Contact = require('../models/contactModels');

// Создать новый контакт
// src/controllers/contactController.js
exports.createContact = async (req, res) => {
    try {
        const { firstName, lastName, email, subject, message } = req.body;

        const newContact = await Contact.create({
            firstName,
            lastName,
            email,
            subject,
            message,
        });

        res.status(201).json({ message: 'Контакт успешно добавлен', contact: newContact });
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при добавлении контакта', details: error.message });
    }
};


// Получить все контакты
exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.findAll();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при получении контактов', details: error.message });
    }
};
