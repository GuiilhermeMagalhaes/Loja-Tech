const mysql = require("mysql");
const { Sequelize } = require("sequelize")

const db = new Sequelize('lojatech', "root", "root", {
    host: "localhost",
    dialect: "mysql"
});


module.exports = db;