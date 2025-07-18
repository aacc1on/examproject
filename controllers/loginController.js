const { jwtSign, } = require('../jwt/jwt');
const User =  require('../models/userSchema');

exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwtSign(user);
        return res.status(200).json({ message: 'Login successful', token });
    }catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
}