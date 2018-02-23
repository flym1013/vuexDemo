const shopCart = {
  state: {
    goods: [
      {
        id: '0',
        name: 'vivo-X20Plus屏幕指纹版',
        hint: '逆光也清晰，照亮你的美',
        price: 3596.00,
        num: 0,
        img: require('../../assets/v.jpg')
      },
      {
        id: '1',
        name: '华为mate10Plus',
        hint: '真正的人工智能芯片',
        price: 4999.00,
        num: 0,
        img: require('../../assets/h.jpeg')
      },
      {
        id: '2',
        name: '华为mate10Plus',
        hint: '真正的人工智能芯片',
        price: 4999.00,
        num: 0,
        img: require('../../assets/v.jpg')
      }
    ],
    totalPrice: 0.00,
    totalNum: 0
  },
  mutations: {
    ADD_CART (state, id) {
      state.goods[id].num++
      state.totalNum++
      state.totalPrice += state.goods[id].price
    },
    REDUCE_CART (state, id) {
      if (state.goods[id].num > 0) {
        state.goods[id].num--
        state.totalNum--
        state.totalPrice -= state.goods[id].price
      }
    }
  }
}

export default shopCart
