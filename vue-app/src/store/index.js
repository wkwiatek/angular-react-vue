import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let lastId = 1

export default new Vuex.Store({
  state: {
    products: [
      { id: 0, name: 'Apple', isSoldOut: false },
      { id: 1, name: 'Coffee', isSoldOut: false }
    ]
  },
  mutations: {
    addProduct (state, product) {
      state.products.push({
        id: ++lastId,
        isSoldOut: false,
        ...product
      })
    },
    buyProduct (state, productId) {
      const productToBeSold = state.products.find(p => p.id === productId)
      productToBeSold.isSoldOut = true
    }
  },
  actions: {
    addProduct ({ commit }, product) {
      commit('addProduct', product)
    },
    buyProduct ({ commit }, id) {
      commit('buyProduct', id)
    }
  },
  strict: true
})
