const express = require('express');
const { getAllUsers, registerController, loginController } = require('../controllers/userController');

//router object
const router = express.Router();

//get ALL the user
router.get('/all-user',getAllUsers)

//create user || POST
router.post('/register',registerController);

//Login ||POST

router.post('/login',loginController);




module.exports = router;