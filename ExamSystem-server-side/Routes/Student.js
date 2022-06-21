const express = require('express');
const router = express.Router();
const studentController= require('../Controllers/Student');
const validateRequest=require('../middlewares/ValidateRequest');
const { body } = require('express-validator');







router.post('/',validateRequest([
    body('name').exists(),
    body('email').isEmail(),
    body('email').exists(),
    body('password').isLength({ min: 6 })
]),studentController.saveStudent);



module.exports=router;