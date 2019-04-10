<template>
  <div class="rank">
    <div class="topList">
      <ul>
        <li  class="item" @click="selectItem(list)"  v-for="list in topList" >
            <div class="icon">
              <img :src="list.picUrl" width="100" height="100">
            </div>
            <ul class="songList">
                <li class="song" v-for="(song,index) in list.songList">
                  <span>{{index+1}}</span>
                  <span>{{song.songname}}-{{song.singername}}</span>
                </li>
            </ul>
         </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>

</template>
<script>
  import {getTopList} from '../api/rank'
  import {ERR_OK} from '../api/config'
  import {mapMutations} from 'vuex'

  export default{
    created(){
      this._getTopList()
    },
    data(){
      return{
        topList:[]
      }
    },
    methods :{
      selectItem(list) {
        this.$router.push({
          path: `/rank/${list.id}`
        })
        this.setSinger(rank)

      },

      _getTopList(){
        getTopList().then((res) =>{
          if(res.code === ERR_OK ){
            this.topList=res.data.topList
          }
        })
      },
      ...mapMutations({
        setSinger:'SET_MUSIC'
      })
    }
  }

</script>
<style rel="stylesheet/stylus" lang="stylus">
  .topList
    height: 100px
    margin :20px
    .item
      display :flex
      padding :8px 0
      .songList
        flex: 1
        display: flex
        flex-direction: column
        justify-content: center
        padding: 0 20px
        height: 100px
        overflow: hidden
        color :rgba(255, 255, 255, 0.3)
        font-size :12px
        background :#333
        .song
           overflow :hidden
           text-overflow:ellipsis
           white-space :nowrap
           line-height :20px












</style>
