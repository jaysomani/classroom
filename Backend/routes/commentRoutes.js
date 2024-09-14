// server/routes/commentRoutes.js
const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// Get comments for a lecture
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find({ lectureId: req.params.lectureId });
        res.json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new comment
router.post('/', async (req, res) => {
    const { text } = req.body;
    try {
        const newComment = new Comment({ text, lectureId: req.params.lectureId });
        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
