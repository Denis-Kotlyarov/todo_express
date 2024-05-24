const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "MySQL-5.7",
    user: "root",
    password: null,
    database: "work_pc"
})

connection.connect(err => {
    if (err) console.log(err);
    console.log("Conected");
})

connection.execute('SELECT * FROM `customers` WHERE id = ?', [1], (err, res) => {
    if (err) console.log(err);
    console.log(res)

    connection.end(err => {
        if (err) console.log(err);
        console.log("Disconected");
    })
})