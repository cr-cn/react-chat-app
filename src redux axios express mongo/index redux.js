import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { counter, addGun, removeGun, addGunAsync } from './index.redux'


const store = createStore(
  counter,
  compose(
    applyMiddleware( thunk ),
    //window.devToolsExtension 测试redux的工具
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

function render() {
  ReactDOM.render( <App store={ store } addGun={ addGun } removeGun={ removeGun } addGunAsync={ addGunAsync } />, document.getElementById( 'root' ) )
}

render()

store.subscribe( render )
