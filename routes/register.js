const express = require('express');
const { userRegister } = require('../controllers/registerController');
//const { handleValidationErrors } = require('../middleware/hendler');
//const { validdataregister } = require('../middleware/validation.express-validator');

const router = express.Router();

router.post('/',   userRegister);

module.exports = router;
