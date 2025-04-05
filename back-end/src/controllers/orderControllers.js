const Order = require('../models/orderModels');  // Пример модели заказа

// Добавить новый заказ
exports.addOrder = async (req, res) => {
  try {
    // Деструктурируем все необходимые поля из тела запроса
    const { dishId, name, quantity, price, imageUrl, customerName, customerEmail } = req.body;

    // Проверяем, что обязательные поля переданы
    if (!dishId || !name || !quantity || !price || !customerName || !customerEmail) {
      return res.status(400).json({ message: 'dishId, name, quantity, price, customerName и customerEmail обязательны' });
    }

    // Создаем новый заказ с переданными данными
    const newOrder = await Order.create({ dishId, name, quantity, price, imageUrl, customerName, customerEmail });
    res.status(201).json(newOrder);
  } catch (error) {
    console.error('Error adding order:', error);
    res.status(500).json({ message: 'Ошибка при добавлении заказа', error: error.message });
  }
};

// Получить все заказы
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при получении заказов' });
  }
};

// Получить заказ по ID
exports.getOrderById = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findByPk(orderId);
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: 'Заказ не найден' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при получении заказа' });
  }
};

// Обновить количество заказа
exports.updateOrder = async (req, res) => {
  try {
    const { orderId, quantity } = req.body;

    if (!orderId || !quantity) {
      return res.status(400).json({ message: 'orderId и quantity обязательны' });
    }

    const order = await Order.findByPk(orderId);
    if (order) {
      order.quantity = quantity;
      await order.save();
      res.status(200).send('Количество успешно обновлено');
    } else {
      res.status(404).send('Заказ не найден');
    }
  } catch (error) {
    res.status(500).send('Ошибка при обновлении количества заказа');
  }
};

// Удалить заказ
exports.deleteOrder = async (req, res) => {
  try {
    // Деструктурируем ID из тела запроса
    const { id } = req.body;

    // Проверяем, что ID передан
    if (!id) {
      return res.status(400).json({ message: 'ID заказа обязательен' });
    }

    // Ищем заказ по ID
    const orderToDelete = await Order.findByPk(id);
    if (!orderToDelete) {
      return res.status(404).json({ message: 'Заказ не найден' });
    }

    // Удаляем заказ
    await orderToDelete.destroy();
    res.status(200).json({ message: 'Заказ успешно удален' });
  } catch (error) {
    console.error('Error deleting order:', error);
    res.status(500).json({ message: 'Ошибка при удалении заказа', error: error.message });
  }
};
