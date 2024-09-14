// server/models/Session.js
const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true }
});

module.exports = mongoose.model('Session', sessionSchema);
