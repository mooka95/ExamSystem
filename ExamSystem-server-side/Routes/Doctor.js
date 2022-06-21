const express = require('express');
const router = express.Router();
const doctorController= require('../Controllers/Doctor');
const validateRequest=require('../middlewares/ValidateRequest');
const { body } = require('express-validator');


router.post('/',validateRequest([
    body('name').exists(),
    body('email').isEmail(),
    body('email').exists(),
    body('password').isLength({ min: 6 })
]),doctorController.saveDoctor);



module.exports =router;