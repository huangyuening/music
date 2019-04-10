<template>
  <div class="search">
    <div class="search-warper">
      <search-box></search-box>
    </div>
    <div class="shortcut-wrapper">
      <div class="hot-key">
        <h1 class="title">热门搜索</h1>
        <ul>
          <li  class="list" v-for="item in search">{{item.k}}</li>
        </ul>
      </div>

    </div>
    <suggest></suggest>


  </div>


</template>
<script>
  import SearchBox from './search-box.vue'
  import {getSearch} from '../api/search'
  import {ERR_OK} from '../api/config'
  import Suggest from './suggest'

  export default {
    data(){
      return{
        search:[]
      }
    },
    components:{
      SearchBox,
      Suggest
    },
    created(){
      this.getS()
    },
    methods:{
      getS(){
        getSearch().then((res)=>{
          if(res.code === ERR_OK){
            this.search=res.data.hotkey.slice(0, 12)

          }

        })
      }

    }

  }

</script>
<style rel="stylesheet/stylus" lang="stylus">
  .search-warper
    margin-top :20px
  .shortcut-wrapper
     width :100%
     margin-top :40px
    .hot-key
      margin: 0 20px 20px 20px
     .title
        margin-bottom :20px
        font-size :14px
        color:rgba(255, 255, 255, 0.5)
     .list
        display :inline-block
        line-height :20px
        background:#333
        border-radius :6px
        padding: 5px 10px
        margin: 0 15px 10px 0
        font-size :14px
        color :rgba(255, 255, 255, 0.5)


</style>
