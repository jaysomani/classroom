// src/components/Login.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuthenticated }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to /classrooms if authenticated
        if (username === 'user' && password === 'password') {
            setIsAuthenticated(true);
            navigate('/classroom');
        }
    }, [username, password, setIsAuthenticated, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic authentication logic
        if (username === 'user' && password === 'password') {
            setIsAuthenticated(true);
            navigate('/classroom');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
