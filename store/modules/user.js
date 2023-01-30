import { postApi, deleteApi, getApi } from '~/plugins/http'
const initialState = () => {
  return {
    user: {},
    reset_email: '',
    files: [],
    prc_file: [],
    other_permits: {},
    app_no: '',
    client_id: '',
    contact: '',
    isResubmitFile: false
  }
}

const state = () => {
  return initialState()
}

const mutations = {
  SET_IS_RESUBMIT_FILE (state, payload) {
    state.isResubmitFile = payload
  },
  SET_CONTACT (state, payload) {
    state.contact = payload
  },
  SET_CLIENT_ID (state, payload) {
    state.client_id = payload
  },
  SET_APP_NO (state, payload) {
    state.app_no = payload
  },
  SET_OTHER_PERMITS (state, payload) {
    state.other_permits = payload
  },
  SET_RESET_EMAIL (state, payload) {
    state.reset_email = payload
  },
  SET_FILES (state, payload) {
    state.files = payload
  },
  SET_PRC_FILES (state, payload) {
    state.prc_file = payload
  },
  SET_USER (state, payload) {
    state.user = payload
  },
  RESET_USER_STATE (state) {
    /*
      FUNCTION:
      RESET TO INITIAL STATE. YOU WILL APPRECIATE THIS FUNCTIONALITY
      WHEN YOU ALREADY DEALING WITH COOKIE / LOCAL STORAGE
    */
    Object.assign(state, initialState())
  }
}

const getters = {
  user: state => state.user,
  reset_email: state => state.reset_email,
  files: state => state.files,
  prc_file: state => state.prc_file,
  other_permits: state => state.other_permits,
  app_no: state => state.app_no,
  client_id: state => state.client_id,
  contact: state => state.contact,
  isResubmitFile: state => state.isResubmitFile
}

const actions = {
  POST_API ({ commit }, payload) {
    return postApi(`${payload.api}`, payload)
  },
  GET_API ({ commit }, payload) {
    return getApi(`${payload.api}`, payload)
  },
  DELETE_API ({ commit }, payload) {
    return deleteApi(`${payload.api}`, payload)
  },
  POST_ATACHMENT ({ commit }, payload) {
    return postApi(`reg/attachment/upload`, payload)
  },
  FETCH_PER_CLIENT ({ commit }, payload) {
    return postApi(`pre/fetch`, payload)
  },
  POST_ASSIGN_EVALUATOR ({ commit }, payload) {
    return postApi(`admin/assign/application`, payload)
  }
}

export default {
  namespaced: true,
  actions,
  state,
  getters,
  mutations
}
