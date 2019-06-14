import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dev2 from '@/components/Dev2'
import Dev1 from '@/components/Dev1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dev2',
      name: 'Dev2',
      component: Dev2
    },
    {
      path: '/dev1',
      name: 'Dev1',
      component: Dev1
    },
  ]
})
