import request from 'axios'

request.defaults.baseURL = 'http://27.221.53.84:48000/'

export const getTopics = ({ commit, state }) => {
  return request.get('/test/getMenu').then((response) => {
    console.log('sadf===========================')
    console.log(response.data)
    if (response.code === 30 && response.result) {
      commit('TOPICS_LIST', response.data)
    }
  }).catch((error) => {
    console.log(error)
  })
}

export const increment = ({ commit }) => commit('INCREMENT')
export const decrement = ({ commit }) => commit('DECREMENT')
