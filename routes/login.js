const express = require('express');
const {loginController} = require('../controllers/loginController');
//const { validdatalogin } = require('../middleware/validation.express-validator');
//const { handleValidationErrors } = require('../middlewares/hendler');
const router = express.Router();

router.post('/',  loginController);


module.exports = router;