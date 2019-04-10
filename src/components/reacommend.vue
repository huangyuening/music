<template>
  <div class="reacommend" ref="reacommend">
    <div class="reacommend-content" >
      <div class="swiper-container">
        <div class="slider-wrapper">
          <div class="swiper-slide" >
            <ul>
              <li  v-for="(img,index) in reacomments" v-show="index===mark"  :key="index.cardTypeName">
                <a :href="img.linkUrl">
                  <img :src="img.picUrl" style="max-width: 100%;">
                </a>

              </li>
            </ul>
          </div>
          <div class="radio-list">
            <h1 class="list-title">电台推荐</h1>
            <ul class="item-list">
              <li v-for="items in RadioList" class="items">
                <div class="icons" style="padding: 0 10px">
                  <img :src="items.picUrl"width="100%" >
                  <h2 class="names">{{items.Ftitle}}</h2>
                </div>
              </li>
            </ul>
          </div>
          <div class="reacommend-list">
            <h1 class="list-title">热门推荐</h1>
            <ul>
              <li v-for="item in disClist" class="item">
                <div class="icons">
                  <img :src="item.picUrl" width="60" height="60">
                </div>
                <div class="text">
                  <h2 class="name">推荐者：{{item.songListAuthor}}</h2>
                  <h2 class="desc">描述：{{item.songListDesc}}</h2>
                </div>

              </li>
            </ul>
          </div>

        </div>


      </div>

    </div>

    </div>

</template>
<script>
  import {getReacommend,getDiscList} from '../api/reacommend'
  import {ERR_OK} from '../api/config'
  import Slider from '../base/slider'
  import  Swiper  from 'swiper'

  export default{
    data() {
      return{
        mark:0,
        reacomments :[],
        disClist:[],
        RadioList:[]
      }
    },
    created(){
      this.getR()
      this.play()
    },
    methods:{
      getR(){
        getReacommend().then((res) =>{
          if(res.code === ERR_OK){
            this.reacomments=res.data.slider,
            this.disClist=res.data.songList,
            this.RadioList=res.data.radioList

          }
        })
      },

      autoPlay () {
        this.mark++;
        if (this.mark === 5) {
          this.mark = 0
        }
      },
      play () {
        setInterval(this.autoPlay, 4000)
      },
      change (i) {
        this.mark = i
      }
    },
    components:{
      Slider,

    },
    mounted(){

    }

  }

</script>
<style rel="stylesheet/stylus" lang="stylus">
  .reacommend
     position :fixed
     top: 88px
     bottom :0
     width :100%
    .reacommend-content
        height: 100%
        overflow: auto
       .swiper-container
          position relative
          .slider-wrapper
            position :relative
            width :100%
            margin :0
            padding :0
            overflow:hidden
            .swiper-slide
               height 170px
  .radio-list
    .list-title
      height: 40px
      line-height: 40px
      text-align: center
      font-size: 14pxs
      color:#ffcd32
    .item-list
        display :flex
        flex :1
        overflow:auto
        justify-content :space-around

        .names
          line-height: 20px
          overflow: hidden
          font-size :14px

  .reacommend-list
    .list-title
      height: 65px
      line-height: 65px
      text-align: center
      font-size: 14px
      color:#ffcd32
    .item
      display: flex
      box-sizing: border-box
      align-items: center
      padding: 0 20px 20px 20px
      .icon
        flex: 0 0 60px
        width: 60px
        padding-right: 20px
      .text
        display: flex
        flex-direction: column
        justify-content: center
        flex: 1
        line-height: 20px
        overflow: hidden
        font-size: 14px
        .name
          margin-bottom: 10px
          color: #fff
        .desc
          color: rgba(255, 255, 255, 0.3)


</style>
