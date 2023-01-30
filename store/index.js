import Vue from 'vue'
import Vuex from 'vuex'

import events from './modules/events'
import user from './modules/user'
import filters from './modules/filters'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    modules: {
      events,
      user,
      filters
    }
  })
}

export default store
