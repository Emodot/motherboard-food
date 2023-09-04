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
  },
  removeCartList (state, val) {
    state.cartList = val
    // state.cartList.push(val)
  }
}

export const actions = {
  removeCartListAction ({ state, commit }, payload) {
    console.log(payload)
    let list = state.cartList
    list = list.reduce((acc, item) => {
      if (item.name !== payload.name) {
        acc.push(item)
      }
      return acc
    }, [])
    console.log(list)
    commit('removeCartList', list)
  }
}
