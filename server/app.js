const express = require('express')
const app = express()
const routerTest = require('./routes/test.js')
const routerDBTest = require("./routes/dbTest.js")
const router = require("./routes/index.js")
const {port} = require("./config/index.js")
const cors = require("cors")

// 配置全局中间件 ( 中间键必须配置在路由的前面, 否则不生效 )
app.use(express.json())  // 解析 json 数据
app.use(express.urlencoded({extended: false})) // 解析 x-www-form-urlencoded 数据
app.use(cors()) // 解决跨域

// 路由
app.use('/test', routerTest);
app.use("/dbTest", routerDBTest)
app.use("/api", router)

// 静态资源
/*
* 注意点 : 指定存放静态资源的目录, 访问的时候不需要带有目录名称
* 例如 :  http://127.0.0.1:3000/images/bg.png
* 如果需要添加前缀, 则按照以下写法
* app.use("/public",express.static('public'))
* http://127.0.0.1:3000/public/images/bg.png
* */
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`✅ - 当前启动的端口为 :  ${port}`)
})



