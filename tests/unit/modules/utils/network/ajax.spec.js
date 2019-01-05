// import {
//   expect,
// } from 'chai'

// /**
//  * bug
//  * 表现：直接 import ajax 文件报错 undefined
//  * 可能是 mocha-webpack 对使用 dynamic import 的文件解析有误
//  * 临时解决：强制 export default ajax 文件
//  * version: mocha-webpack@2.0.0-beta0
//  */
// import ajax from 'utils/network/ajax'

// describe('utils/ajax test suite', () => {
//   it('get method returns a promise', () => {
//     expect(ajax.get({
//       url: ''
//     })).to.be.a('promise')
//   })
//   it('post method returns a promise', () => {
//     expect(ajax.post({
//       url: 'ajax'
//     })).to.be.a('promise')
//   })
// })
