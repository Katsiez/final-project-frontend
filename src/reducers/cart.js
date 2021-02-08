import { createSlice } from '@reduxjs/toolkit'

export const cart = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      const existingProduct = state.items.find((item) => item.id === action.payload.id)

      if (existingProduct) {
        existingProduct.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeItem: (state, action) => {
      const existingProduct = state.items.find((item) => item.id === action.payload.id)

      if (existingProduct && existingProduct.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload.id)
      } else if (existingProduct) {
        existingProduct.quantity -= 1
      }
    }
  }
})

// import { createSlice } from '@reduxjs/toolkit'

// export const cart = createSlice({
//   name: 'cart',
//   initialState: {
//     books: []
//   },
//   reducers: {
//     addBook: (state, action) => {
//       console.log(action.payload)
//       const existinBook = state.books.find((book) => book._id === action.payload._id)

//       if (existinBook) {
//         existinBook.quantity += 0
//       } else {
//         state.books.push({ ...action.payload, quantity: 1 })
//       }
//     },
//     removeBook: (state, action) => {
//       const existinBook = state.books.find((book) => book._id === action.payload._id)

//       if (existinBook && existinBook.quantity === 1) {
//         state.books = state.books.filter((book) => book._id !== action.payload._id)
//       } else if (existinBook) {
//         existinBook.quantity -= 1
//       }
//     },
//     clearCart: (state) => {
//       state.books = []
//     }
//   }
// })