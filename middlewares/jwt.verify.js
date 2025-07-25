const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.jwtVerify = (req, res, next) => {
    const token = req.headers['token'];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; 
        next();
    } catch (error) {
        console.error(error);
        return res.status(403).json({ message: 'Invalid token' });
    }
};