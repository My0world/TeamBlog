//axios
import { reqGetUser ,registerUser } from "@/api"

import qs from 'qs'

const team = {
    namespaced: true,

    //actions:处理action,可以手写自己的业务逻辑，也可以处理异步
    actions: {
        // 这里可以书写业务逻辑，但是不能修改state

        //获取用户信息
        async getUserList(context, value = "") {

            let result = await reqGetUser(value)
            if (result.code === 200) {
                context.commit("GETUSERLIST", result.data)
            }
        },
        //注册用户信息
        async register(context, value) {
            console.log(value);
            let result = await registerUser(qs.stringify(value))
            if (result.code === 200) {
                alert("欢迎你加入我们")
                context.dispatch("getUserList")
            }
        },

    },

    //mutations:修改state的唯一手段
    mutations: {
        //获取用户信息
        GETUSERLIST(state, value) {
            state.userList = value
        }
    },

    //state:仓库存储数据的地方
    state: {
        userList: []
    },

    //getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
    getters: {

    },
}
export default team