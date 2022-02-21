import { createStore } from 'vuex'

export default createStore({
  state: {
    serverPath: 'http://35.234.34.149',
    cart: []
  },
  getters: {
  },
  mutations: {
    // 判斷進購物車的是否為新商品
    addCart(state, data) {
      let isNewProduct = true
      console.log('data：',data)
      state.cart.map(function (product) {
        console.log('product：',product)
        if (product.id === data.product.id) {
          product.number += data.number
          isNewProduct = false
        }//如果不是(產品Id在購物車裡出現)則更新購買數量
        return product
      })
      console.log('isNewProduct?',isNewProduct)
      if (isNewProduct) {//if isNewProduct = true
        let newProduct = data.product
        newProduct.number = data.number
        state.cart.push(newProduct)
      }//如果是(產品Id不曾出現)則新增產品項目到購物車
      console.log('state.cart',state.cart)
    }
  },
  actions: {
  },
  modules: {
  }
})
