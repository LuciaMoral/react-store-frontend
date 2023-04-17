import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // if we have an item already in the cart
      const item = state.products.find(item=>item.id === action.payload.id)
      // then add another one
      if(item){
        item.quantity+=action.payload.quantity
      } else {
        // add it to the cart array
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(item => item.id !== action.payload)
    },
    resetCart: (state, action) => {
      state.products = []
    },
  },
})


export const { addToCart, removeItem, resetCart } = cartSlice.actions

export default cartSlice.reducer
