// 当前这个模块：Api进行统一管理
import apiRequests from "./ApiAjax";

//当前这个函数需不需要接受外部传递参数
//当前这个接口，给服务器传递参数params，至少是一个空对象
export const reqGetSearchInfo = (keyword) => apiRequests({
    url: "detail/search?content=" + keyword,
    method: "get",
})

export const reqGetUser = () => apiRequests({
    url: "user",
    method: "get",
})

export const registerUser = (obj) => apiRequests({
    url: "user",
    method: "post",
    data: obj
})

export const reqHotList = () => apiRequests({
    url: "detail/hot",
    method: "get",
})

export const reqLastList = () => apiRequests({
    url: "detail/last",
    method: "get",
})
