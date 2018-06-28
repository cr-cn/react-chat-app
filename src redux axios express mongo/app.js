import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsync } from './index.redux'

// const mapStatetoProps = ( state ) => { return { num: state } }
// const actionCreators = { addGun, removeGun, addGunAsync }
// App = connect( mapStatetoProps, actionCreators )( App )
// @connect( mapStatetoProps, actionCreators )


@connect(
  //你要state的什么属性放到props里
  //使用了combileReducers合并了多个reducer时候，需要注意这里的state已经改变！
  state => { return { num: state.counter } },
  //你要什么方法，放到props里，自动dispatch
  { addGun, removeGun, addGunAsync }
)

class App extends Component {
  render() {
    return (
      <div>
        <h1>现在有机枪{this.props.num}把</h1>
        <button onClick={this.props.addGun}>申请武器</button>
        <button onClick={this.props.removeGun}>回收武器</button>
        <button onClick={this.props.addGunAsync}>拖两天再给</button>
      </div>
    )
  }
}
export default App