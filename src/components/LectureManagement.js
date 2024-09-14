// src/components/LectureManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LectureManagement = ({ sessionId }) => {
    const [lectures, setLectures] = useState([]);
    const [lectureName, setLectureName] = useState('');

    useEffect(() => {
        // Fetch lectures
        axios.get(`/api/sessions/${sessionId}/lectures`)
            .then(response => setLectures(response.data))
            .catch(error => console.error('Error fetching lectures:', error));
    }, [sessionId]);

    const handleAddLecture = () => {
        axios.post(`/api/sessions/${sessionId}/lectures`, { name: lectureName })
            .then(response => {
                setLectures([...lectures, response.data]);
                setLectureName('');
            })
            .catch(error => console.error('Error adding lecture:', error));
    };

    return (
        <div>
            <h2>Manage Lectures</h2>
            <input
                type="text"
                value={lectureName}
                onChange={(e) => setLectureName(e.target.value)}
                placeholder="New Lecture Name"
            />
            <button onClick={handleAddLecture}>Add Lecture</button>
            <ul>
                {lectures.map(lecture => (
                    <li key={lecture.id}>{lecture.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default LectureManagement;
