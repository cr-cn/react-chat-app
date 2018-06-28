const express = require('express')//node.js没有原生支持es6
const mongoose = require('mongoose')

//链接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://127.0.0.1:27017'
mongoose.connect(DB_URL)
//显示连接成功
mongoose.connection.on('connected', function () {
  console.log('mongo connect success')
})

//类似于mysql的表，mongo里有文字段的概念
const User = mongoose.model('user', new mongoose.Schema({
  user: { type: String, require: true },
  age: { type: Number, require: true }
}))

// 增
// User.create({ user: 'xiaohong', age: 18 }, function (err, doc) {
//   if (!err) { console.log(doc) } else { console.log(err) }
// })


// 删
// User.remove({ user: 'xiaohong' }, function (err, doc) {
//   console.log(doc)
// })

// 改
// User.update({ 'user': 'xiaoming' }, { '$set': { age: 26 } }, function (err, doc) {
//   console.log(doc)
// })




//新建app
const app = express()

app.get('/', function (req, res) {
  res.send('<h1>hello world</h1>')
})

// 查 类似于sql语句里的where
// app.get('/data', function (req, res) {
//   // User.find({ user: 'xiaoming' }, function (err, doc) {
//   //使用findOne查找出来的是对象，而用find查找出来的是对象的集合（数组）
//   User.findOne({ user: 'xiaoming' }, function (err, doc) {
//     res.json(doc)
//   })
// })

app.get('/data', function (req, res) {
  //chrome浏览器上可以安装插件，直接显示优化后的json数据包
  User.find({}, function (err, doc) {
    res.json(doc)
  })
  // res.json({ name: 'imooc React App', type: 'ITT' })
})

app.listen(9093, function () {
  console.log('node app start at port 9093')
})
