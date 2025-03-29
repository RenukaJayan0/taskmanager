const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    doctorId: String,
    patientId: String,
    date: Date
});

module.exports = mongoose.model('Appointment', appointmentSchema);