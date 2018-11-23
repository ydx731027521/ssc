import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Caipiao from '@/components/caipiao'
import Cqssc from "@/components/cqssc"
import Kuai3 from '@/components/kuai3'

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/caipiao',
      name: 'Caipiao',
      redirect:'/caipiao/cqssc',
      component:Caipiao,
      children:[
        {
          name:'Cqssc',
          path:'cqssc',
          component:Cqssc
        },
        {
          name:'Kuai3',
          path:'k3',
          component:Kuai3
        }
      ]
    }
  ]
})
