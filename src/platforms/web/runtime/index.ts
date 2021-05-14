import Vue from 'core/index'

Vue.prototype.__patch = function () { }

Vue.prototype.$mount = function (el: string) {
  console.log(this, el)
  return el
}

export default Vue
