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
    const list = state.cartList
    for (let i = 0; i < list.length; i++) {
      if (list[i].name === val.name) {
        list.splice(i, 1)
        i--
      }
    }
    state.cartList = list
  },
  increaseCartProductValue (state, val) {
    const index = state.cartList.findIndex(item => item.name === val.name)
    if (index !== -1) {
      state.cartList[index].value++
    }
  },
  decreaseCartProductValue (state, val) {
    const index = state.cartList.findIndex(item => item.name === val.name)
    if (index !== -1) {
      state.cartList[index].value--
    }
  }
}

// export const actions = {
//   removeCartListAction ({ state, commit }, payload) {
//     console.log(payload)
//     const list = state.cartList
//     for (let i = 0; i < list.length; i++) {
//       if (list[i].name === payload.name) {
//         list.splice(i, 1)
//         i--
//       }
//     }
//     console.log(list)
//     commit('removeCartList', list)
//   }
// }
