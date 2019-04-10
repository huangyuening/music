<template>
  <div class="slider" ref="slider">
    <div class="sliderGroup" ref="sliderGroup">
      <!-- //vue 组件插槽 -->
      <slot>
      </slot>
    </div>
    <div class="dots">
    </div>
  </div>


</template>
<script type="text/ecmascript-6">
 import {addClass} from '../common/js/dom'
 //better-scroll主要针对移动端
 import BScroll from 'better-scroll'

  export default{
     
    //轮播组件
    props: {
      loop: {
        //循环轮播
        type: Boolean,
        default: true
      },
      //自动轮播
      autoPlay: {
        type: Boolean,
        default: true
      },
      //隔4秒轮播一次
      interval: {
        type: Number,
        default: 4000
      }
    },
    data() {
      return {
        dots: [],
        currentPageIndex: 0
      }
    },
    mounted() {
      setTimeout(() => {
        this.setSliderWidth();
        this._initSlider()

      }, 20)

      window.addEventListener('resize', () => {
        if (!this.slider) {
          return
        }
        this._setSliderWidth(true)
        this.slider.refresh()
      })
    },
    activated() {
      if (this.autoPlay) {
        this._play()
      }
    },
    deactivated() {
      clearTimeout(this.timer)
    },
    beforeDestroy() {
      clearTimeout(this.timer)
    },
    methods: {
      //获取slide的宽度
      setSliderWidth() { 
        //获取dom slideGroup元素下面的子元素
        this.children = this.$refs.slideGroup.children;
        this.dots = new Array(this.children.length)
        let width =0;
        //获取父元素的宽度
        let sliderWidth = this.$refs.slider.clientWidth;
        for(let i = 0; i < this.children.length; i ++){
          let child = this.children[i]
          addClass(child, 'slider-item')
          child.style.width = sliderWidth + 'px'
          width += sliderWidth;
        }
        //为了无缝轮播，前后需加2个dom 
        if(this.loop){
          width += 2*sliderWidth;
        }
        this.$refs.slideGroup.style.width = width + 'px';
      },
      _initSlider() {
        this.slider = new BScroll(this.$refs.slider, {
          scrollX: true,
          scrollY: false,
          //惯性
          momentum: false,
          //给slider使用
          snap: true,
          //是否无缝轮播
          snapLoop: this.loop,
          //用手指滑动可以切换
          snapThreshold: 0.3,
          //动画时间
          snapSpeed: 400,
          click:true
        })

        this.slider.on('scrollEnd', () => {
          let pageIndex = this.slider.getCurrentPage().pageX
          if (this.loop) {
            pageIndex -= 1
          }
          this.currentPageIndex = pageIndex

          if (this.autoPlay) {
            this._play()
          }
        })

        this.slider.on('beforeScrollStart', () => {
          if (this.autoPlay) {
            clearTimeout(this.timer)
          }
        })
      },
      _initDots() {
        this.dots = new Array(this.children.length)
      },
      _play() {
        let pageIndex = this.currentPageIndex + 1
        if (this.loop) {
          pageIndex += 1
        }
        this.timer = setTimeout(() => {
          this.slider.goToPage(pageIndex, 0, 400)
        }, this.interval)
      }
    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .slider
    min-height: 1px
    .sliderGroup
      position: relative
      overflow: hidden
      white-space: nowrap
      .slider-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: rgba(255, 255, 255, 0.5)
        &.active
          width: 20px
          border-radius: 5px
          background:rgba(255, 255, 255, 0.8)







</style>
