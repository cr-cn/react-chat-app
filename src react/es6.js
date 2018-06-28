// function hello(name) {
// 	console.log(name)
// }
// const hello1 = (name = 'rrr') => {
// 	console.log(name)
// }
// hello('123')
// hello1()
// const double = x => x * 2
// console.log(double(3))
// setTimeout(() => {
// 	console.log('56789')
// }, 2000)

// let obj = {
// 	name: 'imooc',
// 	course: 'React'
// }

// let arr = [ '123', '456' ]

// console.log( Object.keys( obj ) )
// console.log( Object.values( obj ) )
// console.log( Object.entries( obj ) )

// 对象扩展

// const obj = {
// 	name: 'imooc',
// 	course: 'react'
// }
// const obj2 = {
// 	type: 'it',
// 	name: 'woniu'
// }
// console.log( { ...obj, ...obj2, 'date': '2017'} )

//解构赋值
// let arr = [ 'hello', 'imooc' ]

// let arg1 = arr[0]
// let arg2 = arr[1]

// let [arg1, arg2] = arr

// console.log(arg1, arg2)

// const obj = {
// 	name: 'imooc',
// 	course: 'react'
// }

// const { name, course } = obj

// console.log(name, course)

// class MyApp {
// 	constructor() {
// 		this.name = 'imooc'
// 	}

// seyHello() {
// 	console.log( `hello ${this.name} !` )
// }
// const app = new MyApp()
// app.seyHello()

//常用的代码片段

let arr = [ 1, 2, 3, 4 ]

//遍历数组
arr.forEach( function ( value, index ) {
	console.log( '遍历数组', value, index )
} )

//映射新数组
let newArr = arr.map( item => item * 2 )
console.log( '映射新数组', newArr )

//所有元素是否通过测试
let x = arr.every( v => v > 3 )
console.log( '检验所有元素是否通过测试', x )

//是否有元素通过测试
console.log( '检验是否有元素通过测试', arr.some( v => v > 3 ) )

//过滤数组
console.log( '过滤数组', arr.filter( v => v > 3 ) )

//查找符合条件的元素

//根据元素查找索引值
console.log( '根据元素查找索引值', arr.indexOf( 3 ) )

//连接数组
let arr2 = [ 2, 3, 4, 5 ]
let arr3 = [ ...arr, ...arr2 ]
console.log( '连接数组', arr3 )

//数组去重
console.log( '数组去重', [ ...new Set( arr3 ) ] )


let objj = { name: 'imooc', age: 1 }
//获取对象的key
console.log( Object.keys( objj ) )

//获取对象里数据的数量
console.log( Object.keys( objj ).length )

//遍历对象
console.log( Object.entries( objj ) )

//extends 继承
const obj3 = { name: 'imooc', age: 11 }
const newObj3 = { ...obj3, job: 'it', age: 3 }
console.log( newObj3 )

//获取列表的头和尾
const [ head, ...tail ] = [ 1, 2, 3 ]
const [ last, ...initial ] = [ 1, 2, 3 ].reverse()
console.log( head, '===', tail )
console.log( last, '===', initial )


