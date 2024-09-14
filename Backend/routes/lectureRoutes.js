// server/routes/lectureRoutes.js
const express = require('express');
const router = express.Router();
const Lecture = require('../models/Lecture');

// Get lectures for a session
router.get('/', async (req, res) => {
    try {
        const lectures = await Lecture.find({ sessionId: req.params.sessionId });
        res.json(lectures);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new lecture
router.post('/', async (req, res) => {
    const { name } = req.body;
    try {
        const newLecture = new Lecture({ name, sessionId: req.params.sessionId });
        await newLecture.save();
        res.status(201).json(newLecture);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
