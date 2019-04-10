import Vue from 'vue'
import Router from 'vue-router'
import Reacommend from '@/components/reacommend'
import Search from '@/components/search'
import Singer from '@/components/singer'
import Rank from '@/components/rank'
import Musiclist from '@/components/musiclist'

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
      path: '/singer',
      name: 'singer',
      component: Singer,
      children:[
        {
          path: ':id',
          component: Musiclist
        }
      ]
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },



  ]
})
