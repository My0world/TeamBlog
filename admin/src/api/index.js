// 当前这个模块：Api进行统一管理
import apiRequests from "./ApiAjax";


//当前这个函数需不需要接受外部传递参数
//当前这个接口，给服务器传递参数params，至少是一个空对象
export const reqLogin = (login) => apiRequests({
    url: "/login",
    method: "post",
    data: login
})
