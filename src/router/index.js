import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import intro from 'components/intro'
import join from 'components/join'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/intro',
      name: 'intro',
      component: intro
    },
    {
      path: '/join',
      name: 'join',
      component: join
    }
  ]
})
