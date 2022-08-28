
import { setToken, getToken } from '@/utils/auth'

const state = {
  token: getToken()

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

