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


//实现增加功能
router.post('/add', (req, res) => {
    // 插入数据
    const name = req.body.name;
    const age = req.body.age;
    // sql查询语句
    const sql = 'insert into user(id,name,age) values(4,?,?)'
    // 如果添加多个数据的话，用 [] 括起来
    connection.query(sql, [name, age], (err, result) => {
        if (err) {
            res.send({
                code: 400, data: {}, msg: err
            })
            return;
        }
        res.send({
            message: '添加成功', code: 200, data: {}
        })
    })
});


module.exports = router;




