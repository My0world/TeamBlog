//axios
import { reqGetSearchInfo, reqGetUser } from "@/api"

const search = {
    namespaced: true,

    //actions:处理action,可以手写自己的业务逻辑，也可以处理异步
    actions: {
        // 这里可以书写业务逻辑，但是不能修改state

        //发送请求获取搜索结果
        async getSearchList(context, value = "") {

            let result = await reqGetSearchInfo(value.trim())
            if (result.code === 200) {
                await context.dispatch('getUserList')
                context.commit("GETSEARCHLIST", result.data)
            }
        },

        //发送请求获取用户列表
        async getUserList(context) {
            let result = await reqGetUser()
            if (result.code === 200) {
                context.commit("GETUSERLIST", result.data)
            }
        }
    },

    //mutations:修改state的唯一手段
    mutations: {
        GETSEARCHLIST(state, value) {
            state.searchList = value
        },
        GETUSERLIST(state, value) {
            state.userList = value
        }
    },

    //state:仓库存储数据的地方
    state: {
        searchList: [],
        userList: []
    },

    //getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
    getters: {
        resultList(state) {
            let result = {}
            let reslist = []
            if(!state.searchList){
                return []
            }
            for (let i = 0; i < state.searchList.length; i++) {
                state.searchList[i].time = state.searchList[i].time.slice(0, 10)
                let index = state.userList.findIndex(item => {
                    return item.stuId === state.searchList[i].stuId
                })
                Object.assign(result, state.searchList[i], state.userList[index]);
                reslist.push(result)
                result = {}
            }
            return reslist
        }
    },
}
export default search