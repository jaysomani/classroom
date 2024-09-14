const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    name: { type: String, required: true },
    units: [
        {
            title: String,
            sessions: [
                {
                    title: String,
                    content: String,
                    comments: [
                        {
                            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
                            comment: String,
                            replies: [{ comment: String }]
                        }
                    ]
                }
            ]
        }
    ],
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Class', classSchema);
