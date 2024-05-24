const sequelize = require("../DB");
const { DataTypes } = require("sequelize");
const User = require('./User');

const Todo = sequelize.define('Todo', {
    //Atributes
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // authorID: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: User,
    //         key: 'id',
    //     },
    //     allowNull: false,
    // }
}, {
    //Other data
    tableName: 'todos',
    timestamps: false,
});

module.exports = Todo;