// src/components/Enrollment.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Enrollment = ({ userId }) => {
    const [classes, setClasses] = useState([]);
    const [selectedClass, setSelectedClass] = useState('');

    useEffect(() => {
        // Fetch available classes
        axios.get('/api/classes')
            .then(response => setClasses(response.data))
            .catch(error => console.error('Error fetching classes:', error));
    }, []);

    const handleEnroll = (classId) => {
        axios.post(`/api/classes/${classId}/enroll`, { userId })
            .then(() => alert('Enrolled successfully!'))
            .catch(error => console.error('Error enrolling in class:', error));
    };

    return (
        <div>
            <h2>Enroll in a Class</h2>
            <select onChange={(e) => setSelectedClass(e.target.value)}>
                <option value="">Select a Class</option>
                {classes.map(cls => (
                    <option key={cls.id} value={cls.id}>{cls.name}</option>
                ))}
            </select>
            <button onClick={() => handleEnroll(selectedClass)}>Enroll</button>
        </div>
    );
};

export default Enrollment;
