import Vue from 'vue'
import Router from 'vue-router'
import IntroView from './components/IntroView'
import RulesView from './components/RulesView'

Vue.use(Router)

const routes = [
  { path: '/', component: IntroView, name: 'intro' },
  { path: '/rules', component: RulesView, name: 'rules' }
]

export default new Router({
  routes,
  mode: 'history'
})
