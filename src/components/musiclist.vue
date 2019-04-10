<template>
  <transition name="slider">
    <div class="musicList">

    </div>

  </transition>


</template>
<script>
  import {mapGetters} from 'vuex'

  export default{
    computed: {
      ...mapGetters([
        'rank'
        ])
    },
    created(){
      console.log(this.rank)

    }
  }


</script>
<style lang="stylus" rel="stylesheet/stylus">
  .slider-enter-active,.slider-leaver-active
    transition :all 0.3s
  .slider-enter,.slider-leaver-to
    transform :translate3d(100%,0,0)



</style>
