const API_URL = 'http://localhost:5000/api';

export const loginUser = async ({ username, password }) => {
    try {
        const res = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        const data = await res.json();
        if (res.ok) {
            localStorage.setItem('token', data.token);
            return true;
        }
        return false;
    } catch (error) {
        console.error(error);
        return false;
    }
};

export const getClasses = async () => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${API_URL}/classes`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await res.json();
    return data;
};
