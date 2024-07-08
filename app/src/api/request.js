//对axios进行二次封装  下载axios npm install axios
import axios from "axios";
//引入进度条
import nprogress from "nprogress"
//引入进度条样式
import "nprogress/nprogress.css"



//创建axios实例，并且进行配置
const request = axios.create({
    //配置
    //基础路径
    baseURL:"/api",
    //请求超时时间 5秒
    timeout:5000,
})

//请求拦截器
//参数中的config是一个配置对象，里面有一个很重要的属性， header请求头
request.interceptors.request.use((config)=>{
    //网络请求加载进度条开始
    nprogress.start()
    //config是配置对象，里面的header请求头属性很重要
    return config
})

//相响应拦截器
request.interceptors.response.use((res)=>{
    //网络请求完成，进度条关闭
    nprogress.done()
    //服务器成功的回调函数
    return res.data
},(err)=>{
    //服务器相应失败的回调函数
    return Promise.reject(new Error('false'))
})

//对外暴露axios
export default request