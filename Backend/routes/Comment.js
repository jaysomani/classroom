// server/models/Comment.js
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: { type: String, required: true },
    lectureId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lecture', required: true }
});

module.exports = mongoose.model('Comment', commentSchema);
