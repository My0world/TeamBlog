// 配置路由

// 引入VueRouter
import VueRouter from 'vue-router'

//引入页面路由组件
import Home from '../page/Home/Home.vue'
import Page from '../page/Page/Page.vue'
import Picture from '../page/Picture/Picture.vue'
import Team from '../page/Team/Team.vue'
import Search from '../page/Search/Search.vue'


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
        },
        {
            name: '文章',//名字
            path: '/page',//路径
            component: Page,//组件名称
            meta: {},//路由元信息
            children: [],//二级路由
        },
        {
            name: '照片集',//名字
            path: '/picture',//路径
            component: Picture,//组件名称
            meta: {},//路由元信息
            children: [],//二级路由
        },
        {
            name: '团队信息',//名字
            path: '/team',//路径
            component: Team,//组件名称
            meta: {},//路由元信息
            children: [],//二级路由
        },
        {
            name: '搜索结果',//名字
            path: '/search',//路径
            component: Search,//组件名称
            meta: {},//路由元信息
            children: [],//二级路由
        }

    ]
})
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}