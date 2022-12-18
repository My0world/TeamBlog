// 配置路由

// 引入VueRouter
import VueRouter from 'vue-router'

//引入页面组件
import Login from '../page/Login/Login.vue'
import Mine from '../page/Mine/Mine.vue'
import Page from '../page/Page/Page.vue'
import Picture from '../page/Picture/Picture.vue'




//配置路由
export default new VueRouter({
    routes: [

        //使用路由组件
        { path: '/', redirect: '/login' },
        {
            name: '登录',//名字
            path: '/login',//路径
            component: Login,//组件名称
            meta: {},//路由元信息
            children: [],//二级路由
        },
        {
            name: '个人信息',//名字
            path: '/mine',//路径
            component: Mine,//组件名称
            meta: {},//路由元信息
            children: [],//二级路由
        },
        {
            name: '文章',//名字
            path: '/page',//路径
            component: Page,//组件名称
            meta: {},//路由元信息
            children: [],//二级路由
        },
        {
            name: '图片',//名字
            path: '/picture',//路径
            component: Picture,//组件名称
            meta: {},//路由元信息
            children: [],//二级路由
        }

    ]
})
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}