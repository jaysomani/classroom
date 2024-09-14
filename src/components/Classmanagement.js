// src/components/ClassManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClassManagement = () => {
    const [classes, setClasses] = useState([]);
    const [className, setClassName] = useState('');

    useEffect(() => {
        // Fetch classes
        axios.get('/api/classes')
            .then(response => setClasses(response.data))
            .catch(error => console.error('Error fetching classes:', error));
    }, []);

    const handleAddClass = () => {
        axios.post('/api/classes', { name: className })
            .then(response => {
                setClasses([...classes, response.data]);
                setClassName('');
            })
            .catch(error => console.error('Error adding class:', error));
    };

    return (
        <div>
            <h2>Manage Classes</h2>
            <input
                type="text"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                placeholder="New Class Name"
            />
            <button onClick={handleAddClass}>Add Class</button>
            <ul>
                {classes.map(cls => (
                    <li key={cls.id}>{cls.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ClassManagement;
