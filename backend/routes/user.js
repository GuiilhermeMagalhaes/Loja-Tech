const express = require('express');
const {
    createTypeUser,
    getUsersType,
    createUser,
    getUsers,
    login
} = require('../controllers/user');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/img-users'); // Define o destino do upload para a pasta 'uploads'
    },
    filename: function (req, file, cb) {
        const originalName = file.originalname;
        cb(null, originalName); // Define o nome do arquivo para o nome original
    }
});

const upload = multer({ storage: storage });

const userRoutes = express.Router();

userRoutes.get('/getUsersType', getUsersType);

userRoutes.get('/getUsers', getUsers) 

userRoutes.post('/createUser', upload.single('image'), createUser)

userRoutes.post('/createUserType', createTypeUser);

userRoutes.post('/login', login);




module.exports = userRoutes;