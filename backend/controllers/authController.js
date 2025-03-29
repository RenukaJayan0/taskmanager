const User = require('../models/User');

const registerUser = async (req, res) => {
    const { firstName, lastName, email, password, role } = req.body;

    if (!email.endsWith('@gmail.com') || !firstName || !lastName) {
        return res.status(400).json({ message: 'Invalid email or name format' });
    }

    try {
        const newUser = new User({ firstName, lastName, email, password, role });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email, password });
        if (user) {
            res.status(200).json({ message: 'Login successful', user });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { registerUser, loginUser };