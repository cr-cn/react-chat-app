## 更进一步
- Redux处理异步，需要redux-thunk插件
- npm install redux-devtools-extension 并开启
- 使用react-redux优雅的链接react和redux  

## Redux调试工具
- 新建store的时候判断window.devToolsExtension
- 使用compose结合thunk和window.devToolsExtension
- 调试窗口redux选项卡，实时看到state

## 使用React-redux
- npm install react-redux --save
- 忘记subscribe, 记住reducer action dispatch即可
- React-redux提供Provider和connect两个接口来连接

## React-redux具体使用
- Provider组件在应用层最外层，传入store即可，只用一次
- connect 负责从外部获取组件需要的参数
- connect可以用装饰器的方式来写

## 使用装饰器优化connect代码
- npm run eject 弹出个性化配置
- npm install babel-plugin-transform-decorators-legacy插件
- package.json里babel加上plugins配置

## React进阶
- 什么数据应该放在React里
- Redux管理Ajax
- Redux管理聊天数据  

## Redux-router4
- React官方推荐的路由库，最新版本是4，与之前版本不兼容，浏览器和RN均兼容
- React开发单页应用必备，践行路由即组件的概念
- 核心概念： 动态路由、Route、Link、Switch
- npm install react-router-dom --save
- Router4使用react-router-dom作为浏览器端的路由  

### Router4入门组件
- BrowserRouter，包裹整个应用
- Router路由对应渲染的组件，可嵌套
- Link跳转专用
- 在Route添加'exact'属性，表示路径完全匹配  

### Router4其他组件
- ulr参数，Route组件参数可用冒号标识参数
- Redirect组件 跳转
- Switch只渲染一个子Route组件  

## React-router4 和 redux 配合
- 复杂redux应用，多个reducer，用combineReducers合并
- Redirect组件 跳转
- Switch只渲染一个子Route组件

## 文件架构和规范
- src前端源码目录
- server后端express目录
- 根据功能文件夹：component， container，reducers等

## router怎么划分页面
- 进入应用时获取用户信息， 用户未登录跳转到login页面
- login和register页面不需要权限认证
- 用户信息，聊天列表，职位列表页面共享底部tabbar

## 其他注意事项
- Mongodb字段设计
- axios 发送异步请求
- redux管理所有的数据，组件尽量用antd-mobile，弱化css

## Express + mongodb
- Express开发web接口
- 非关系型数据库mongodb（针对于关系型数据库，例如mySql=>存储表格）
- 使用nodejs的mongoose模块链接和操作mongodb
- Express: 基于nodejs，快速、开发、极简的web开发框架
- npm install express --save 安装express
- 监听路由和响应内容，可以使用nodemon自动重启 npm install -g nodemon

## Express 其他的特性
- app.get、app.post分别开发get和post接口
- app.use使用模块
- res.send（返回文本）、res.json（返回json数据）、res.sendfile（返回文件）响应不同的内容

## Mongodb + mongoose
- 官网mongodb.com
- 安装homebrew，再brew install mongodb
- 安装mongoose：npm install mongoose --save
- 通过mongoose操作mongodb，存储的就是json，相对mysql来说，要易用很多

## Mongoose基础使用
- connect链接数据库
- 定义文档模型，Schema和model新建模型
- 一个数据库文档对应一个模型，通过模型对数据库进行操作

## Mongoose文档
- String，Number等数据结构
- 定create， remove， update分别
- Find和findOne用来查询数据

## Mongodb增删改查
- mongod --config /usr/local/etc/mongod.conf  后台启动mongodb
- Express结合mongodb
- 封装mongoose
- find, findOne 查找数据
- update更新数据
- remove删除数据

## 后续进阶
- Express和mongodb结合
- mongodb独立工具函数
- express使用body-parser支持post参数
- 使用cookie-parser存储登录信息cookie

## 使用axios发送异步请求
- 如何发送，端口不一致，使用proxy配置转发
- axios拦截器，统一loading处理
- redux里使用异步数据，渲染页面
- 简介好用的发送请求库
- npm install axios --save 安装
- axios(.get/.post)发送请求，返回promise对象
- Redux里获取数据，然后直接dispath即可

## package.json 配置汇总
- 按需加载（ant-design-mobile）：babel-plugin-import
- redux 装饰器的写法：babel-plugins-transform-decorators-legacy
- 前后端调试，前端接口（3000）直接调用后端接口（9093）的时候会发生跨域，proxy做一次转发到9093: "proxy": "http://localhost:9093"

## 登录注册功能实现

### 页面文件结构
- 组件放在Component文件夹下面
- 页面放在Container文件夹下面
- 页面入口处获取用户信息，决定跳转到哪个页面

### 基于cookie用户验证
- express依赖cookie-parser，安装：npm install cookie-parser --save
- cookie类似于一张身份卡，登录后服务器端返回，你带着cookie就可以访问受限资源
- cookie的管理，浏览器会自动处理

### 开发流程
- 用户加载页面=>（带cookie向后端获取用户信息）=>用户加载页面=>（未登录）=>登录页面=>（登录成功，前段存储cookie）=>App内部页面
- 用户加载页面=>（带cookie向后端获取用户信息）=>用户加载页面=>（已登录）=>App内部页面

