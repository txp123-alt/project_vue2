//当前这个文件是对所有接口的统一管理
import request from "@/api/request";

//三级联动接口
export const reqCategoryList = () => {
    //发送请求,
    return request({url:'/product/getBaseCategoryList',method:'get'})
}