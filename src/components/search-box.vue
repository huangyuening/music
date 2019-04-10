<template>
  <div class="search-box">
    <i class="icon-search"></i>
    <input class="search_input" v-model="query"  :placeholder="placeholder">
    <i v-show="query"  @click="clear"  class="icon-dismiss"></i>
  </div>

</template>
<script>
  export default{
    props :{
      placeholder :{
        type:String,
        default:"搜索歌曲、歌手"
      }
    },
    data(){
      return{
        query:''
      }
    },
    methods:{
      clear(){
        this.query=''
      }
    },
    created(){
      this.$watch('query',(newQuery) =>{
        this.$emit('query',newQuery)
      })

    }

  }


</script>
<style lang="stylus" rel="stylesheet/stylus">
  .search-box
    display :flex
    box-sizing: border-box
    align-items :center
    background :#333
    padding:7px
    margin :0 auto
    width: 88%
    border-radius :8px

    .icon-search
       font-size :24px
       color :#222
    .search_input
      flex :1
      background :#333
      margin :0 5px
      line-height: 18px
      color : #fff
      font-size :14px
      &::placeholder
        color: rgba(255, 255, 255, 0.3)
    .icon-dismiss
      font-size: 16px
      color: #222




</style>
