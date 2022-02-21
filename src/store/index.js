import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    serverPath: 'http://35.234.34.149',
    cart: []
  },
  getters: {
    currentQuantity(state){
      let total = 0;
      for(var i=0;i<state.cart.length;i++){
        total += state.cart[i].number
      }
      return total
    }
  },
  mutations: {
    // 判斷進購物車的是否為新商品
    addCart(state, data) {
      let isNewProduct = true
      state.cart.map(function (product) {
        if (product.id === data.product.id) {
          product.number += data.number
          isNewProduct = false
        }//如果不是(產品Id在購物車裡出現)則更新購買數量
        return product
      })
      if (isNewProduct) {//if isNewProduct = true
        let newProduct = data.product
        newProduct.number = data.number
        state.cart.push(newProduct)
      }//如果是(產品Id不曾出現)則新增產品項目到購物車
    }
  },
  actions: {
  },
  modules: {
  },
  plugins:[
    createPersistedState()
  ]
})
