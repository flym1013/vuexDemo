import {
  ADD_CART,
  REDUCE_CART
} from './mutation-types.js'
export default {
  [ADD_CART] (state, id) {
    state.goods[id].num++
    state.totalNum++
    state.totalPrice += state.goods[id].price
    // console.log(state.totalPrice)
  },
  [REDUCE_CART] (state, id) {
    if (state.goods[id].num > 0) {
      state.goods[id].num--
      state.totalNum--
      state.totalPrice -= state.goods[id].price
    }
  }
}
