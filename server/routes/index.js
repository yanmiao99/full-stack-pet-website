let express = require('express');
let router = express.Router();
let connection = require('../db/index.js')

// 解决跨域问题
router.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');//*表示可以跨域任何域名都行（包括直接存在本地的html文件）出于安全考虑最好只设置 你信任的来源也可以填域名表示只接受某个域名
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');//可以支持的消息首部列表
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');//可以支持的提交方式
    res.header('Content-Type', 'application/json;charset=utf-8');//响应头中定义的类型
    next();
});


// 测试接口
router.get('/', (req, res) => {
    res.send('Hello World!')
})


module.exports = router;
