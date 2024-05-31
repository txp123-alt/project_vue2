<template>
  <div id="app">
    <Header/>
    <!--指定路由组件出口位置-->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"/>
    <Test/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Test from './test'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Test
  }
}
</script>

<style>

</style>
