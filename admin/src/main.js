// 引入Vue
import Vue from 'vue'

// 引入App
import App from './App.vue'

// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//使用插件
Vue.use(ElementUI);


// 引入vue-router
import VueRouter from 'vue-router'
import router from './router'
// 使用vue-router插件
Vue.use(VueRouter)

//引入Vuex
import store from './store'

//创建vue实例对象---vm
// eslint-disable-next-line no-unused-vars
const vm = new Vue({
  el: "#app",
  render: h => h(App),

  //注册路由：底下的写法KV一致省略V【router小写的】
  //注册路由信息：当这里书写router的时候，组件身上都拥有$route,$router属性
  router,

  //注册仓库：组件实例的身上会多个一个属性$store属性
  store,

  beforeCreate() {
    //全局事件总线
    Vue.prototype.$bus = this
  }
})
