const Appointment = require('../models/Appointment');

const bookAppointment = async (req, res) => {
    const { doctorId, patientId, date } = req.body;

    const conflict = await Appointment.findOne({ doctorId, date });
    if (conflict) {
        return res.status(400).json({ message: 'Appointment conflict' });
    }

    const newAppointment = new Appointment({ doctorId, patientId, date });
    await newAppointment.save();

    res.status(201).json({ message: 'Appointment booked successfully' });
};

module.exports = { bookAppointment };