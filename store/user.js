export const state = () => ({
  counter: 0
})
export const mutations = {
  increment(state, data) {
    state.counter += data
  }
}
export const actions = {
  increment({ commit, state }, data) {
    commit('increment', data)
  }
}
