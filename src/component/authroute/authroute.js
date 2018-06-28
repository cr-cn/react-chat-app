import React from 'react'
import axios from 'axios'
// react-router 提供了一个withRouter组件 
// withRouter可以包装任何自定义组件，将react-router 的 history,location,match 三个对象传入
// 无需一级级传递react-router 的属性，当需要用的router 属性的时候，将组件包一层withRouter，就可以拿到需要的路由信息
import { withRouter } from 'react-router-dom'
import { loadData } from '../../redux/user.redux'
import { connect } from 'react-redux'
//装饰器
@withRouter
@connect(
  null,
  { loadData }
)
class AuthRoute extends React.Component {
  componentDidMount() {
    const publicList = ['/login', '/register']
    const pathname = this.props.location.pathname
    if (publicList.indexOf(pathname) > -1) {
      return null
    }

    //获取当前的url，通过location->pathname
    // console.log(this.props)
    // 获取用户信息
    axios.get('/user/info').
      then(res => {
        // res.status === 200 && console.log(res.data)
        if (res.status === 200) {
          if (res.data.code === 0) {
            // 有登录信息
            this.props.loadData(res.data.data)
          } else {
            // console.log(this.props.history, 'history')
            this.props.history.push('/login')
          }

          console.log(res.data)
        }
      })
    // 是否登录
    // 现在的url地址，比如login是不需要跳转的

    // 用户的type身份：boss or 牛人
    // 用户是否完善信息（选择头像，个人简介）
  }

  render() {
    return null
  }
}
export default AuthRoute