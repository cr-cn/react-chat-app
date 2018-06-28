const express = require('express')//node.js没有原生支持es6
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const userRouter = require('./user')

const app = express()
// 接受注册传递过来的数据
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRouter)

app.listen(9093, function () {
  console.log('node app start at port 9093')
})
