// server/models/Lecture.js
const mongoose = require('mongoose');

const lectureSchema = new mongoose.Schema({
    name: { type: String, required: true },
    sessionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Session', required: true }
});

module.exports = mongoose.model('Lecture', lectureSchema);
