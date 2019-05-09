import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/components/${view}`)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Zhuye',
      component: loadView('Zhuye')
    },
    {
      path: '/wenz',
      name: 'Wenz',
      component: loadView('Wenz')
    },{
      path: '/bbcwz',
      name: 'bbcwz',
      component: loadView('bbcwz')
    },{
      path: '/jgls',
      name: 'jgls',
      component: loadView('jgls')
    },{
      path: '/jdls',
      name: 'jdls',
      component: loadView('jdls')
    },{
      path: '/xinw',
      name: 'xinw',
      component: loadView('xinw')
    },{
      path: '/agtl',
      name: 'agtl',
      component: loadView('agtl')
    },{
      path: '/xuex',
      name: 'xuex',
      component: loadView('xuexizx')
    },{
      path: '/xinwws',
      name: 'xinwws',
      component: loadView('xinwws')
    },{
      path: '/xinwss',
      name: 'xinwss',
      component: loadView('xinwss')
    },
    {
      path: '/livexw',
      name: 'livexw',
      component: loadView('livexw')
    },
    {
      path: '/zlxw',
      name: 'zlxw',
      component: loadView('zlxw')
    }
  ]
})
