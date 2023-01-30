const initialState = () => {
  return {
    filter: {
      first: 10,
      skip: 0,
      title: ''
    },
    drawer: true,
    guidedrawer: true,
    active: 1,
    table_options: {
      page: 1,
      take: 10,
      skip: 0
    },
    selections: []
  }
}

const state = () => {
  return initialState()
}

const mutations = {
  SET_SELECTIONS (state, payload) {
    state.selections = payload
  },
  SET_OPTIONS (state, payload) {
    state.table_options = payload
  },
  SET_ACTIVE (state, payload) {
    state.active = payload
  },
  SET_GUIDE_DRAWER (state, payload) {
    state.guidedrawer = payload
  },
  SET_DRAWER (state, payload) {
    state.drawer = payload
  },
  SET_PRIVACY_DIALOG (state, payload) {
    state.privacydialog = payload
  },
  SET_FILTER (state, payload) {
    state.filter = Object.assign({}, state.filter, payload)
  },
  RESET_EVENT_STATE (state) {
    /*
          FUNCTION:
          RESET TO INITIAL STATE. YOU WILL APPRECIATE THIS FUNCTIONALITY
          WHEN YOU ALREADY DEALING WITH COOKIE / LOCAL STORAGE
        */
    Object.assign(state, initialState())
  }
}

const getters = {
  filter: state => state.filter,
  drawer: state => state.drawer,
  guidedrawer: state => state.guidedrawer,
  active: state => state.active,
  table_options: state => state.table_options,
  selections: state => state.selections
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
