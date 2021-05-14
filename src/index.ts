console.info('Vue new 之前会做一系列的初始化工作')
console.info('开始初始化')

import Vue from 'web/entry-runtime-with-compiler'

console.info('结束初始化')

console.info('new Vue 开始执行')
const app = new Vue({
  el: '#app'
})

console.info('结束执行')

console.log(Vue, app)
