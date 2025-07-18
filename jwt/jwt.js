const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.jwtSign = (user) => {
    return jwt.sign({ username: user.id, email: user.email, password: user.password, role: user.role}, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });
}

exports.jwtVerify = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};