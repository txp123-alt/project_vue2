<template>
  <div>
    <TypeNav/>
  </div>

</template>
<script>
  export default {
    name:'Search',
    props:['keyWord'],
    mounted() {
      console.log('@mounted',this.$route)
    },
  }
</script>
<style lang="less" scoped>

</style>