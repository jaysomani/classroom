const jwt = require('jsonwebtoken');
const secret = 'secretKey'; // Again, use environment variables in production.

const authMiddleware = (roles = []) => {
    return (req, res, next) => {
        const token = req.headers['authorization'];

        if (!token) return res.status(403).json({ message: 'No token provided' });

        jwt.verify(token.split(' ')[1], secret, (err, decoded) => {
            if (err) return res.status(403).json({ message: 'Failed to authenticate token' });

            if (roles.length && !roles.includes(decoded.role)) {
                return res.status(401).json({ message: 'Access denied' });
            }

            req.userId = decoded.id;
            req.userRole = decoded.role;
            next();
        });
    };
};

module.exports = { authMiddleware };
