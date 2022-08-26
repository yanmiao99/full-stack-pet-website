const express = require('express')
const app = express()
const router = require('./routes/index.js')
const port = 3000

app.use('/test', router);

app.listen(port, () => {
    console.log(`当前启动的端口为 :  ${port}`)
})
