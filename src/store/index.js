import Vue from 'vue'
import Vuex from 'vuex'
import * as user from './modules/user'
import * as event from './modules/events'
import * as notification from './modules/notifications'
import 'nprogress/nprogress.css'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    event,
    notification
  },
  state: {
    categories: [
      'spurs-fan',
      'gamer',
      'student',
      'nature-lover',
      'coder',
      'sportsman',
      'cricket fan'
    ]
  }
})
