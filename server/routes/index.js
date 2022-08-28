let express = require('express');
let router = express.Router();
let connection = require('../db/index.js')

// 测试接口
router.get('/', (req, res) => {
    res.send('Hello World!')
})

module.exports = router;
