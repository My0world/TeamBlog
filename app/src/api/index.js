// 当前这个模块：Api进行统一管理
import apiRequests from "./ApiAjax";

//获取搜索模块数据 地址：/api/list  请求方式：post   参数：需要参数
// {
//     "category3Id": "61",
//     "categoryName": "手机",
//     "keyword": "小米",
//     "order": "1:desc",
//     "pageNo": 1,
//     "pageSize": 10,
//     "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
//     "trademark": "4:小米"
// }
//当前这个函数需不需要接受外部传递参数
//当前这个接口，给服务器传递参数params，至少是一个空对象
export const reqGetSearchInfo = (keyword) => apiRequests({
    url: "/list",
    method: "post",
    data: keyword
})
