const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    role: String, // 'doctor' or 'patient'
    password: String
});

module.exports = mongoose.model('User', userSchema);