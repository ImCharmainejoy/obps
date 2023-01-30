// import { postApi } from '~/plugins/http'
const initialState = () => {
  return {
    filter: {
      first: 10,
      skip: 0,
      search: '',
      visit_date: [],
      pre_status: ['Subject for Resubmission'],
      status: []
    }
  }
}

const state = () => {
  return initialState()
}

const mutations = {
  SET_FILTER (state, payload) {
    state.filter = Object.assign({}, state.filter, payload)
  },
  RESET_FILTER_STATE (state) {
    /*
          FUNCTION:
          RESET TO INITIAL STATE. YOU WILL APPRECIATE THIS FUNCTIONALITY
          WHEN YOU ALREADY DEALING WITH COOKIE / LOCAL STORAGE
        */
    Object.assign(state, initialState())
  }
}

const getters = {
  filter: state => state.filter
}

const actions = {
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
