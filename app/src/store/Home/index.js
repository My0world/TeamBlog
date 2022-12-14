//axios
import { reqGetUser, reqHotList, reqLastList } from "@/api"

const home = {
    namespaced: true,

    //actions:处理action,可以手写自己的业务逻辑，也可以处理异步
    actions: {
        // 这里可以书写业务逻辑，但是不能修改state

        //发送请求获取用户列表
        async getUserList(context) {
            let result = await reqGetUser()
            if (result.code === 200) {
                context.commit("GETUSERLIST", result.data)
            }
        },

        //热度列表
        async getHotList(context) {
            let result = await reqHotList()
            if (result.code === 200) {
                context.commit("GetHOTLIST", result.data)
            }
        },

        //最新列表
        async getLastList(context) {
            let result = await reqLastList()
            if (result.code === 200) {
                context.commit("GetLASTLIST", result.data)
            }
        }
    },

    //mutations:修改state的唯一手段
    mutations: {
        GETUSERLIST(state, value) {
            state.userList = value
        },
        GetHOTLIST(state, value) {
            state.hotList = value
        },
        GetLASTLIST(state, value) {
            state.lastList = value
        }
    },

    //state:仓库存储数据的地方
    state: {
        userList: [],
        hotList: [],
        lastList:[]
    },

    //getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
    getters: {
        PageHotList(state) {
            let result = {}
            let reslist1 = []
            let reslist2 = []
            for (let i = 0; i < state.hotList.length; i++) {
                state.hotList[i].time = state.hotList[i].time.slice(0, 10)
                let index = state.userList.findIndex(item => {
                    return item.stuId === state.hotList[i].stuId
                })
                Object.assign(result, state.hotList[i], state.userList[index]);
                reslist1.push(result)
                result = {}
            }
            for (let i = 0; i < reslist1.length; i++) {
                if (reslist1[i].type === '文章') {
                    reslist2.push(reslist1[i])
                }
            }
            return reslist2.slice(0, 6)
        },
        PictureHotList(state) {
            let result = {}
            let reslist1 = []
            let reslist2 = []
            for (let i = 0; i < state.hotList.length; i++) {
                state.hotList[i].time = state.hotList[i].time.slice(0, 10)
                let index = state.userList.findIndex(item => {
                    return item.stuId === state.hotList[i].stuId
                })
                Object.assign(result, state.hotList[i], state.userList[index]);
                reslist1.push(result)
                result = {}
            }
            for (let i = 0; i < reslist1.length; i++) {
                if (reslist1[i].type === '图片') {
                    reslist2.push(reslist1[i])
                }
            }
            return reslist2.slice(0, 4)
        },
        PageLastList(state){
            let result = []
            for (let i = 0; i < state.lastList.length; i++) {
                if (state.lastList[i].type === '文章') {
                    result.push(state.lastList[i])
                }
            }
            return result.slice(0,7)
        },
        PictureLastList(state){
            let result = []
            for (let i = 0; i < state.lastList.length; i++) {
                if (state.lastList[i].type === '图片') {
                    result.push(state.lastList[i])
                }
            }
            return result.slice(0,7)
        }
    },
}
export default home