// server/routes/classRoutes.js
const express = require('express');
const router = express.Router();
const Class = require('../models/Class');

// Get all classes
router.get('/', async (req, res) => {
    try {
        const classes = await Class.find();
        res.json(classes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new class
router.post('/', async (req, res) => {
    const className = req.body.name;
    try {
        const newClass = new Class({ name: className });
        await newClass.save();
        res.status(201).json(newClass);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
