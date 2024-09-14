const express = require('express');
const Class = require('../models/Class');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

// Create a class
router.post('/', authMiddleware(['instructor', 'admin']), async (req, res) => {
    try {
        const newClass = new Class(req.body);
        await newClass.save();
        res.status(201).json(newClass);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all classes (for students and instructors)
router.get('/', authMiddleware(['student', 'instructor', 'admin']), async (req, res) => {
    try {
        const classes = await Class.find().populate('students');
        res.json(classes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
