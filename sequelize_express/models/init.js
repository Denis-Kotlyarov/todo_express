const User = require('./User');
const Todo = require('./Todo');

User.hasMany(Todo);
Todo.belongsTo(User);

const init = async () => {
    //Synchronizahen
    await User.sync({
        //Parameters - принудительно обновить, перезаписать таблицу
        alter: false,
        force: false
    });
    //Synchronizahen
    await Todo.sync({
        //Parameters - принудительно обновить, перезаписать таблицу
        alter: false,
        force: false
    });
}

module.exports = { init, User, Todo };