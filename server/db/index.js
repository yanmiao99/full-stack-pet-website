const mysql = require('mysql')
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345678',
    database:'pet-website-database' //数据库名称
})

console.log(connection);

module.exports = connection
