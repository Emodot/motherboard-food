export const state = () => ({
  cartList: [],
  selectedProduct: {}
})

export const mutations = {
  setselectedProduct (state, val) {
    state.selectedProduct = val
  },
  updateProductValue (state, val) {
    if (val === 'increment') {
      state.selectedProduct.value++
    } else if (val === 'decrement') {
      state.selectedProduct.value--
    }
  },
  updateCartList (state, val) {
    state.cartList.push(val)
  }
}