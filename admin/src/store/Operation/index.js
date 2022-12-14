import qs from 'qs'

//axios
import { deleteItem } from "@/api"

const operation = {
    namespaced: true,

    //actions:处理action,可以手写自己的业务逻辑，也可以处理异步
    actions: {
        // 这里可以书写业务逻辑，但是不能修改state

        //获取detail表
        async deleteData(context, value = {}) {
            //当前这个reqGetSearchInfo这个函数在调用获取服务器数据的时候，至少传递一个参数（空对象）
            //value形参：是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
            await deleteItem(qs.stringify(value))
        },
    },

    //mutations:修改state的唯一手段
    mutations: {


    },

    //state:仓库存储数据的地方
    state: {

    },

    //getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
    getters: {

    },
}
export default operation