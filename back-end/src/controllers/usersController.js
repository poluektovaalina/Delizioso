const User = require('../models/usersModels')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const registerUser = async (req, res) => {
    try {
        const { email, name, password } = req.body;
        console.log(email, password, name);

      
        const findOneEmail = await User.findOne({ where: { email } });
        if (findOneEmail) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        const user = await User.create({ email, name, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ message: 'User not found' });
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        res.json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { registerUser, loginUser, getAllUsers }