const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../config/db");
const UserTypeModel = require("./user_type")

const UsersModel = db.define("users", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    user_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: UserTypeModel,
            key: 'id'
        }
    }
});


UsersModel.belongsTo(UserTypeModel, {foreignKey: "user_type_id"});

module.exports = UsersModel;