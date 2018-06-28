import React, { Component } from 'react'
import { Button, List } from 'antd-mobile'

class App extends Component {
  render() {
    const boss = '李云龙'
    return (
      <div>
        <h2>独立团，团长，{ boss }</h2>
        <Yiying laoda='张大喵' />
        <Qibing laoda='孙德胜' />
      </div>
    )
  }
}

function Qibing( props ) {
  return <h2>骑兵连连长，{ props.laoda }， 冲啊</h2>
}

class Yiying extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      solders: [ '虎子', '柱子', '王根生' ]
    }
  }

  addSolder = () => {
    this.setState( {
      solders: [ ...this.state.solders, '新兵蛋子' + Math.random() ]
    } )
  }

  render() {
    return (
      <div>
        <h2>一营营长，{ this.props.laoda }</h2>
        <Button onClick={ () => this.addSolder() } type='primary'>新兵入伍</Button>
        <List renderHeader={ () => '士兵列表' }>
          {
            this.state.solders.map(
              ( v, index ) => {
                return (
                  <List.Item key={ index }>{ v }</List.Item>
                )
              }
            )
          }
        </List>
        <ul>
          { this.state.solders.map(
            ( item, index ) => {
              return <li key={ index }>{ item }</li>
            }
          ) }
        </ul>
      </div>
    )
  }
}
export default App