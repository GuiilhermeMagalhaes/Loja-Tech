const express = require('express');
const { route } = require('./user');
const userRoutes = require('./user');

const router = express.Router();

router.use("/users", userRoutes);

module.exports = router;