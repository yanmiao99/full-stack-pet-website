let express = require('express');
let router = express.Router();
let connection = require('../db/index.js')


// 测试接口
router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.get("/get", (req, res) => {
    // 接收 url 路径参数的方式为  :  req.query , 默认 req.query 是空对象 {}
    res.send({...req.query})
})

router.get("/get/:id", (req, res) => {
    // 接收 url 动态 id 参数的方式为 : req.params , 默认 req.query 是空对象 {}
    res.send(req.params.id) // 获取值
    res.send(req.params) // 获取整个对象 : id:xx
})

router.post("/postJson", (req, res) => {
    // 默认情况下, 如果不配置  app.use(express.json()) , 则 req.body 为 undefined ,
    // 配置了 app.use(express.json())  之后, 则可以使用 req.body 接受 post 传递过来的 json 格式数据
    res.send(req.body)
})

router.post("/postForm", (req, res) => {
    // 默认情况下, 如果不配置  app.use(express.urlencoded()) , 则 req.body 为 {} ,
    // 配置了 app.use(express.urlencoded())  之后, 则可以使用 req.body 接受 post 传递过来的 urlencoded 格式数据
    res.send(req.body)
})


// //实现增加功能
// router.post('/add', (req, res) => {
//     // 插入数据
//     const name = req.query.name;
//     const age = req.query.age;
//     // sql查询语句
//     const sql = 'insert into user(id,name,age) values(0,?,?)'
//     // 如果添加多个数据的话，用 [] 括起来
//     connection.query(sql, [name, age], function (err, result) {
//         if (err) {
//             res.send({err: '添加失败'})
//             return;
//         }
//         // res.send({message:'添加成功'})
//         res.send({message: '添加成功'})
//     })
// });


module.exports = router;
