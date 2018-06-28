const express = require('express')
const utils = require('utility')

const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const _filter = { 'pwd': 0, '__v': 0 }

Router.get('/list', function (req, res) {
  // User.remove({}, function (err, doc) { })
  User.find({}, function (err, doc) {
    return res.json(doc)
  })
})
// 更新的接口
Router.post('/update', function (req, res) {
  const userid = req.cookies.userid
  if (!userid) {
    return json.dumps({ code: 1 })
  }
  const body = req.body
  User.findByIdAndUpdate(userid, body, function (err, doc) {
    const data = Object.assign({}, {
      user: doc.user,
      type: doc.type
    }, body)
    return res.json({ code: 0, data })
  })
})
Router.post('/login', function (req, res) {
  const { user, pwd } = req.body
  // 'pwd':0 返回字段里不显示pwd
  User.findOne({ user, pwd: md5Pwd(pwd) }, _filter, function (err, doc) {
    if (!doc) {
      return res.json({ code: 1, msg: '用户名不存在或者密码错误' })
    }
    res.cookie('userid', doc._id)
    return res.json({ code: 0, data: doc })
  })
})

// 注册部分，引入body-parser依赖
Router.post('/register', function (req, res) {
  console.log(req.body)
  const { user, pwd, type } = req.body
  User.findOne({ user }, function (err, doc) {
    if (doc) {
      return res.json({ code: 1, msg: '用户名重复' })
    }
    // 注册完成之后跳转到'～info'页面
    const userModel = new User({ user, type, pwd: md5Pwd(pwd) })
    userModel.save(function (err, doc) {
      if (err) {
        return res.json({ code: 1, msg: '后端出错了' })
      }
      const { user, type, _id } = doc
      res.cookie('userid', _id)
      return res.json({ code: 0, data: { user, type, _id } })
    })
  })
})

Router.get('/info', function (req, res) {
  const { userid } = req.cookies
  if (!userid) {
    return res.json({ code: 1 })
  }
  User.findOne({ _id: userid }, _filter, function (err, doc) {
    if (err) {
      return res.json({ code: 1, msg: '后端出错了' })
    }
    if (doc) {
      return res.json({ code: 0, data: doc })
    }
  })
  // 用户有没有cookie校验
  // return res.json({ code: 1 })
})

// 在md5基础上在自定义加密算法，专业叫法“加盐”，彻底杜绝彩虹表暴力破解
function md5Pwd(pwd) {
  const salt = '~,8x9jd!@#UHY~'
  return utils.md5(utils.md5(pwd + salt))
}

module.exports = Router