// reservationControllers.js
const Reservation = require('../models/reservationModels');

// Создать новое бронирование
exports.createReservation = async (req, res) => {
    try {
        const { firstName, lastName, phoneNumber, email, occasion, specialRequest } = req.body;
        const reservation = await Reservation.create({
            firstName,
            lastName,
            phoneNumber,
            email,
            occasion,
            specialRequest
        });
        res.status(201).json({ message: 'Бронирование успешно создано', reservation });
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при создании бронирования', details: error.message });
    }
};

// Получить все бронирования
exports.getAllReservations = async (req, res) => {
    try {
        const reservations = await Reservation.findAll();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при получении бронирований', details: error.message });
    }
};

// Получить бронирование по ID
exports.getReservationById = async (req, res) => {
    try {
        const { id } = req.params;
        const reservation = await Reservation.findByPk(id);
        if (!reservation) {
            return res.status(404).json({ error: 'Бронирование не найдено' });
        }
        res.status(200).json(reservation);
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при получении бронирования', details: error.message });
    }
};

// Удалить бронирование по имени и фамилии
exports.deleteReservation = async (req, res) => {
    try {
        const { firstName, lastName } = req.body;
        const result = await Reservation.destroy({
            where: {
                firstName: firstName,
                lastName: lastName
            }
        });
        if (result === 0) {
            return res.status(404).json({ error: 'Бронирование не найдено' });
        }
        res.status(200).json({ message: 'Бронирование успешно удалено' });
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при удалении бронирования', details: error.message });
    }
};
