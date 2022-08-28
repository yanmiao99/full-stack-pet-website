let express = require('express');
let router = express.Router();
let connection = require('../db/index.js')

// get 查询数据库的所有数据
router.get("/list", (req, res) => {
    let sql = "SELECT * FROM user"
    connection.query(sql, (err, result) => {
        if (err) {
            res.send({
                code: 400, data: {}, msg: err
            })
            return
        }
        res.send({
            message: '查询成功', code: 200, data: result
        })
    })
})

// 条件查询

// 模糊查询
// 根据名字模糊查询
router.get('/list/:name', (req, res) => {
    // 因为在添加查询语句的时候 字符串变量默认会加上单引号
    // 所以我在这里直接用 '%'+req.query.name+'%' 包围起来
    const name = '%' + req.params.name + '%'
    // sql语句
    const sql = "select * from user where name like ?"
    connection.query(sql, name, (err, result) => {
        if (err) {
            res.send({
                code: 400, data: {}, msg: err
            })
            return
        }
        res.send({
            message: '查询成功', code: 200, data: result
        })
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

// 更新数据
router.post("/update/:id", (req, res) => {
    let name = req.body.name
    let id = req.params.id

    // 把id为0的name更改为测试
    let sql = `UPDATE user
               SET name = ?
               WHERE id = ? `
    connection.query(sql, [name, id], (err, result) => {
            if (err) {
                res.send({
                    data: {}, msg: err, code: 400
                })
                return
            }

            res.send({
                code: 200, msg: '更新成功', data: result
            })

        }
    )


})

// 删除数据
router.post('/delete/:id', (req, res) => {
    const id = req.params.id
    const sql = 'delete from user where id = ?'
    connection.query(sql, id, (err, result) => {
        if (err) {
            res.send({
                code: 400, data: {}, msg: err
            })
            return;
        }
        res.send({
            message: '删除成功', code: 200, data: {}
        })
    })

})

module.exports = router;




