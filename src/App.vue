<template>
  <div>
   <m-header></m-header>
   <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>


  </div>
</template>

<script type="text/ecmascript-6">

   import MHeader from './components/m-header/m-header.vue'
   import Tab from './components/tab.vue'

   export default{
     components:{
       MHeader,
       Tab
     }
   }




</script>

<style  rel="stylesheet/stylus" lang="stylus">


</style>
