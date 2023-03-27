const express = require('express');
const router = express.Router();

// User Controller
const ctrlUser=require("../controller/userController");


// User Router
router.get('/UserAdded', ctrlUser.userAdded);
router.get('/AllUser',ctrlUser.findAllUser);
router.delete('/UserRemove/:id',ctrlUser.deleteUser);
router.put('/UserUpdate/:id',ctrlUser.updateUser);
router.post('/signup',ctrlUser.signup);
router.post('/auth',ctrlUser.auth);
router.post('/StateWithDistricts',ctrlUser.StateWithDistricts);


module.exports=router