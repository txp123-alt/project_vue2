import Vue from 'vue'
import VueRouter from "vue-router";

//使用vuerouter插件
Vue.use(VueRouter)

//重写push|replace方法
//① 首先将原push方法保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//②重写
VueRouter.prototype.push = function (location,resolve,reject){
    if (resolve && reject){
        //call() 与 apply 区别与联系
        //① 联系: 都可以调用函数一次，都可以篡改函数上下文一次
        //② 区别: call传递参数时用','隔开，apply传递参数时使用数组
        originPush.call(this,location,resolve,reject)
    }else {
        originPush.call(this,location,()=>{},()=>{})
    }
}

VueRouter.prototype.replace = function (location, resolve, reject){
    if (resolve && reject){
        originReplace.call(this,location,resolve,reject)
    }else {
        originReplace.call(this,location,()=>{},()=>{})
    }
}


//引入路由组件
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

//配置路由
export default new VueRouter({
    //配置路由
    routes:[
        //设置重定向,当用户访问未配置的路径时,会触发跳转
        {
            path:"*",
            redirect:"/home"
        },
        {
            path:"/home",
            component: Home,
            meta:{show:true},
        },
        {
            path:"/search",
            name:"search",
            component: Search,
            meta:{show:true},
            props:true,
        },
        {
            path:"/login",
            component: Login,
            meta:{show:false},
        },
        {
            path:"/register",
            component: Register,
            meta:{show:false},
        },
    ],
})