
//axios
import { reqHotList, reqUserList } from "@/api"

const Mine = {
    namespaced: true,

    //actions:处理action,可以手写自己的业务逻辑，也可以处理异步
    actions: {
        // 这里可以书写业务逻辑，但是不能修改state

        //获取detail表
        async getData(context, value = "") {
            //当前这个reqGetSearchInfo这个函数在调用获取服务器数据的时候，至少传递一个参数（空对象）
            //value形参：是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
            let result = await reqHotList()
            let stuId = value
            let obj = {
                stuId,
                result
            }
            if (result.code === 200) {
                context.commit("GETDATA", obj)
            }
        },

        //获取detail表
        async getUser(context, value = "") {
            //当前这个reqGetSearchInfo这个函数在调用获取服务器数据的时候，至少传递一个参数（空对象）
            //value形参：是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
            let result = await reqUserList()
            let stuId = value
            let obj = {
                stuId,
                result
            }
            if (result.code === 200) {
                context.commit("GETUSER", obj)
            }
        }
    },

    //mutations:修改state的唯一手段
    mutations: {
        GETDATA(state, value) {
            state.dataList = value
        },
        GETUSER(state, value) {
            state.users = value
        },

    },

    //state:仓库存储数据的地方
    state: {
        dataList: [],
        users: []
    },

    //getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
    getters: {
        picture(state) {

            let reslist1 = []
            let reslist2 = []
            if (!state.dataList.result) {
                return []
            }
            for (let i = 0; i < state.dataList.result.data.length; i++) {
                if (state.dataList.result.data[i].stuId === state.dataList.stuId) {
                    reslist1.push(state.dataList.result.data[i])
                }
            }
            for (let i = 0; i < reslist1.length; i++) {
                if (reslist1[i].type === '图片') {
                    reslist2.push(reslist1[i])
                }
            }
            return reslist2
        },
        page(state) {

            let reslist1 = []
            let reslist2 = []
            if (!state.dataList.result) {
                return []
            }
            for (let i = 0; i < state.dataList.result.data.length; i++) {
                if (state.dataList.result.data[i].stuId === state.dataList.stuId) {
                    reslist1.push(state.dataList.result.data[i])
                }
            }
            for (let i = 0; i < reslist1.length; i++) {
                if (reslist1[i].type === '文章') {
                    reslist2.push(reslist1[i])
                }
            }
            return reslist2
        },
        userList(state){
            let userList = []
            if (!state.users.result) {
                return []
            }
            for (let i = 0; i < state.users.result.data.length; i++) {
                if (state.users.result.data[i].stuId === state.users.stuId) {
                    userList.push(state.dataList.result.data[i])
                }
            }
            return userList
        }
    },
}
export default Mine