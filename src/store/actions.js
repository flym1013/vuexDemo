import {ADD_CART, REDUCE_CART} from './mutation-types.js'
export default {
  addCart ({
    commit,
    state
  }) {
    commit(ADD_CART, 1)
  },
  reduceCart ({
    commit,
    state
  }) {
    commit(REDUCE_CART, 1)
  }
}
