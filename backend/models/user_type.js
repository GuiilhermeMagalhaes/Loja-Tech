const UsersModel = require("./user");
const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/db");


const UserTypeModel = db.define("user_type", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = UserTypeModel;