// server/routes/sessionRoutes.js
const express = require('express');
const router = express.Router();
const Session = require('../models/Session');

// Get sessions for a class
router.get('/', async (req, res) => {
    try {
        const sessions = await Session.find({ classId: req.params.classId });
        res.json(sessions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new session
router.post('/', async (req, res) => {
    const { name } = req.body;
    try {
        const newSession = new Session({ name, classId: req.params.classId });
        await newSession.save();
        res.status(201).json(newSession);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
