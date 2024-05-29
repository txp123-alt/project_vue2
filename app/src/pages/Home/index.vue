<template>
  <div>
    <!--三级联动已经注册为全局组件，这里不需重新引入-->
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor/>
    <Brand/>
  </div>
</template>
<script>
//引入组件
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
  export default {
    name:'Home',
    components: {
      ListContainer,
      Recommend,
      Rank,
      Like,
      Floor,
      Brand,
    },
  }
</script>
<style lang="less" scoped>

</style>