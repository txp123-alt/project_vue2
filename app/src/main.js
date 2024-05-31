import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from "@/router";
//引入仓库
import store from "@/store";
//注册全局组件
//search中的三级联动组件
import TypeNav from "@/components/TypeNav";
//第一个参数：全局组件的名字， 第二个参数：具体的组件
Vue.component(TypeNav.name,TypeNav)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //注册路由 组件身上会多$route, $router属性
  router,
  //注册vuex的store 组件身上会多 $store属性
  store
}).$mount('#app')
