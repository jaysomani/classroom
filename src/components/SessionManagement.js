// src/components/SessionManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SessionManagement = ({ classId }) => {
    const [sessions, setSessions] = useState([]);
    const [sessionName, setSessionName] = useState('');

    useEffect(() => {
        // Fetch sessions
        axios.get(`/api/classes/${classId}/sessions`)
            .then(response => setSessions(response.data))
            .catch(error => console.error('Error fetching sessions:', error));
    }, [classId]);

    const handleAddSession = () => {
        axios.post(`/api/classes/${classId}/sessions`, { name: sessionName })
            .then(response => {
                setSessions([...sessions, response.data]);
                setSessionName('');
            })
            .catch(error => console.error('Error adding session:', error));
    };

    return (
        <div>
            <h2>Manage Sessions</h2>
            <input
                type="text"
                value={sessionName}
                onChange={(e) => setSessionName(e.target.value)}
                placeholder="New Session Name"
            />
            <button onClick={handleAddSession}>Add Session</button>
            <ul>
                {sessions.map(sess => (
                    <li key={sess.id}>{sess.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SessionManagement;
