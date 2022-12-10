// 引入Vue
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'

//使用Vuex插件
Vue.use(Vuex)

//引入配置文件
import user from './user'


//创建并暴露store
export default new Vuex.Store({

    // 实现Vuex仓库模块式开发存储数据
    modules: {
        user,
    }
})