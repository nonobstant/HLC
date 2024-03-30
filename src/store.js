import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [],
    favorites: []  // Add this line
  },
  mutations: {
    addToCart(state, item) {
      state.cart.push(item)
    },
    removeFromCart(state, item) {
      let index = state.cart.findIndex(i => i.id === item.id)
      if (index > -1) {
        state.cart.splice(index, 1)
      }
    },
    addToFavorite(state, item) {  // Add this block
      state.favorites.push(item)
    },
    removeFromFavorite(state, item) {  // Add this block
      let index = state.favorites.findIndex(i => i.id === item.id)
      if (index > -1) {
        state.favorites.splice(index, 1)
      }
    }
  },
  getters: {
    cartItems: state => state.cart,
    favoriteItems: state => state.favorites  // Add this line
  }
})