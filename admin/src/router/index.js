// 配置路由

// 引入VueRouter
import VueRouter from 'vue-router'

//引入页面组件
import Home from '../page/Home/Home.vue'




//配置路由
export default new VueRouter({
    routes: [

        //使用路由组件
        { path: '/', redirect: '/home' },
        {
            name: '首页',//名字
            path: '/home',//路径
            component: Home,//组件名称
            meta: {},//路由元信息
            children: [],//二级路由
        }

    ]
})
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}