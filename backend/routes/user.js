const express = require('express');
const createTypeUser = require('../controllers/user');
const getUsersType = require('../controllers/user');


const userRoutes = express.Router();

userRoutes.post('/createUserType', createTypeUser);

userRoutes.get('/getUsersType', getUsersType);

module.exports = userRoutes;