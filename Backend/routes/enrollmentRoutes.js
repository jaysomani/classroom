// server/routes/enrollmentRoutes.js
const express = require('express');
const router = express.Router();
const Enrollment = require('../models/Enrollment');

// Enroll a user in a class
router.post('/', async (req, res) => {
    const { userId } = req.body;
    const classId = req.params.classId;
    try {
        const newEnrollment = new Enrollment({ userId, classId });
        await newEnrollment.save();
        res.status(201).json(newEnrollment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
