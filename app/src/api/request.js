//对axios进行二次封装
import axios from "axios";


//创建axios实例，并且进行配置
const request = axios.create({
    //配置
    //基础路径
    baseURL:"/api",
    //请求超时时间 5秒
    timeout:5000,
})

//请求拦截器
request.interceptors.request.use((config)=>{
    //config是配置对象，里面的header请求头属性很重要
    return config
})

//相应拦截器
request.interceptors.response.use((res)=>{
    //服务器成功的回调函数
    return res.data
},(Error)=>{
    //服务器相应失败的回调函数
    return Promise.reject(new Error('false'))
})

//对外暴露axios
export default request