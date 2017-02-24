import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import face from 'components/face'
import intro from 'components/intro'
import join from 'components/join'
import form from 'components/form'

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
    },
    {
      path: '/face',
      name: 'face',
      component: face
    },
    {
      path: '/form',
      name: 'form',
      component: form
    }
  ]
})
