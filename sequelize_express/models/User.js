const sequelize = require("../DB");
const { DataTypes } = require("sequelize");

const User = sequelize.define('User', {
    //Atributes
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    //Other data
    tableName: 'users',
    timestamps: false,
});

module.exports = User;