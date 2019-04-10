<template>
  <div class="suggest">
    <h1 class="title" >搜索记录</h1>
    <ul class="suggest-list">
      <li class="suggest-item">
        <div class="icon">
          <i class="icon-music"></i>
        </div>
        <div class="name">
          <span class="text">周杰伦</span>
        </div>
      </li>
      <li class="suggest-item">
        <div class="icon">
          <i class="icon-music"></i>
        </div>
        <div class="name">
          <span class="text">稻香</span>
        </div>
      </li>
    </ul>
  </div>

</template>
<script>
  export  default{
    prop:{
      query:{
        type:String,
        default:''

      }
    },
    methods:{


    },
    watch:{
      query(){
        this.search()
      }
    },
    data(){
      return{

      }
    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .suggest
     overflow :hidden
     height :100%
    .title
      padding :20px
     .suggest-list
        margin: 0 20px 20px 20px
        .suggest-item
          display :flex
          padding-bottom :10px
          .icon
             flex :0 0 30px
             font-size :14px
             color :rgba(255, 255, 255, 0.3)
          .name
             font-size :14px
             color :rgba(255, 255, 255, 0.3)
             overflow :hidden
             .text
                text-overflow: ellipsis
                overflow: hidden
                white-space: nowrap

</style>
