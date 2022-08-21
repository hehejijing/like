
import { setToken } from '@/utils/auth'

const state = {
  token: null

}

const mutations = {

  setToken(state, token) {
    state.token = token
    setToken(token)
  }

}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

