const { Sequelize, DataTypes, Op } = require('sequelize');

const sequelize = new Sequelize('todos_express', 'root', null, {
    host: 'MySQL-5.7',
    dialect: 'mysql'
})

//Model
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
    }
}, {
    //Other data
    tableName: 'users',
    timestamps: false,
});

;(async () => {
    try {
        //Synchronizahen
        await User.sync({
            //Parameters - принудительно обновить, перезаписать таблицу
            alter: false,
            force: false
        });
        //Try create data - WORK
        // const user = await User.create({
        //     first_name: 'Jane', 
        //     last_name: 'Doe', 
        //     email: 'jane@mail.com'
        // });

        // const users = await User.findAll({
        //     where: {
        //         first_name: 'Boris'
        //     }
        // })
        // console.log(users)

        // const user = await User.findOne({
        //     where: {
        //         first_name: "Boris"
        //     }
        // });
        // user.first_name = "Alex"; 
        // user.save()

        // const user = await User.findByPk(1);
        // user.destroy()
    } catch (error) {
        console.error(error);
    }
})();