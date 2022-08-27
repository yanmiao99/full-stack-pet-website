const mysql = require('mysql')
const {db} = require("../config/index.js")

const connection = mysql.createConnection(db)

module.exports = connection
