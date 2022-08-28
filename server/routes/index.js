let express = require('express');
let router = express.Router();
let connection = require('../db/index.js')

// get 查询数据库的所有数据

router.get("/list", (req, res) => {
    connection.query("SELECT * FROM `user`", (err, data) => {
        if (err) {
            res.send(err)
        }
        res.send(data)
    })
})


module.exports = router;




