import Vue from './runtime/index'
import { compileToFunctions } from './compiler/index'

// 构建方式：runtime+compiler, 这里添加 complier
const mount = Vue.prototype.$mount
Vue.prototype.$mount = function (el: string) {
  console.log(typeof el)
  return mount.call(this, el)
}

// 这里添加 compile 函数
// (Vue as any).compile = compileToFunctions

export default Vue
