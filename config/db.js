const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Database connection successful');
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });

