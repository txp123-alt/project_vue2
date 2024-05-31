<template>
  <div>
    <h1>测试页面</h1>
    <button @click="testThree">store.count+1</button>
    <h3>{{count}}</h3>
    <button @click="testThree">store.count-1</button>
  </div>
</template>
<script>
import testApi from '@/api'
import {mapState} from "vuex";

export default {
    name:'Test',
    computed:{
      ...mapState(['count'])
    },
    methods:{
      testThree(){
        this.$store.dispatch('add')
      },
    }
  }
</script>
<style lang="less" scoped>

</style>