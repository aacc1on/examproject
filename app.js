const express = require('express');
require('./config/db'); 
require('dotenv').config();
const app = express();

app.use(express.json());

app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));
app.use('/posts', require('./routes/posts'));

app.listen(process.env.PORT || 3000), () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
};