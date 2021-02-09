import { createSlice } from '@reduxjs/toolkit'

export const cart = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingProduct = state.items.find((item) => item._id === action.payload._id)
      console.log("add", state, action)

      if (existingProduct) {
        existingProduct.quantity += 0
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeItem: (state, action) => {
      const existingProduct = state.items.find((item) => item._id === action.payload._id)

      if (existingProduct && existingProduct.quantity === 1) {
        state.items = state.items.filter((item) => item._id !== action.payload._id)
      } else if (existingProduct) {
        existingProduct.quantity -= 1
      }
    },
    removeAll: (state, action) => {
      state.items = []
    }
  }
})