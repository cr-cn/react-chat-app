import { createStore } from 'redux'

//新建store
//通过reducer建立
//根据老的state和action 生成新的state

function counter( state=0, action ) {
  switch ( action.type ){

    case '加1把机关枪':
      return state + 1

    case '减1把机关枪':
      return state - 1
      
    default:
      return 10
  }
}
const store = createStore(counter)

//拿store里的state
const init = store.getState()

console.log(init)

function listener() {
  const current = store.getState()
  console.log(`现在有机关枪${current}把`)
}

//订阅事件
store.subscribe(listener)

//派发事件 传递action
store.dispatch({ type: '加1把机关枪' })
store.dispatch({ type: '减1把机关枪' })
store.dispatch({ type: '加1把机关枪' })

//把store.dispatch方法传递给组件，内部可以调用修改状态
//subscribe订阅render函数，每次修改都重新渲染
//Redux相关内容，移到单独的文件index.redux.js单独管理

