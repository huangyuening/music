import Vue from 'vue'
import Router from 'vue-router'
import Reacommend from '@/components/reacommend'
import Search from '@/components/search'
import Rank from '@/components/rank'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/reacommend'

    },
    {
      path: '/reacommend',
      name: 'reacommend',
      component: Reacommend
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },



  ]
})
