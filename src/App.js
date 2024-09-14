import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import ClassroomList from './components/ClassList';
import Classroom2D from './components/Classroom2D';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    console.log('Is Authenticated:', isAuthenticated); // Debugging line

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="/classrooms" element={isAuthenticated ? <ClassroomList /> : <Navigate to="/login" />} />
                <Route path="/classroom" element={isAuthenticated ? <Classroom2D /> : <Navigate to="/login" />} />
                <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;
