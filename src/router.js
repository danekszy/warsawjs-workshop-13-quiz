import Vue from 'vue'
import Router from 'vue-router'
import IntroView from './components/IntroView'
import RulesView from './components/RulesView'
import PlayView from './components/PlayView'
import SettingsView from './components/SettingsView'
import WonView from './components/WonView'
import LostView from './components/LostView'
import NarrowLayout from './components/NarrowLayout'

Vue.use(Router)

const routes = [
  { path: '/', component: IntroView, name: 'intro' },
  {
    path: '/',
    component: NarrowLayout,
    children: [
      { path: '/rules', component: RulesView, name: 'rules' },
      { path: '/won', component: WonView, name: 'won' },
      { path: '/lost', component: LostView, name: 'lost' }
    ]
  },
  { path: '/play', component: PlayView, name: 'play' },
  { path: '/settings', component: SettingsView, name: 'settings' }
]

export default new Router({
  routes,
  mode: 'history'
})
