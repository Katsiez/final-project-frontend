import {createSlice} from "@reduxjs/toolkit"

export const cart = createSlice({
	name: 'cart',
	initialState: {
		items: []
	},

	reducers: {
		addBook: (state, action) => {
			const existingBook = state.items.find((item) => item._id === action.payload._id)
			if(existingBook) {
				existingBook.quantity += 0
			} else {
				state.items.push({...action.payload, quantity: 1})
			}
		},
		removeBook: (state, action) => {
			const existingBook = state.items.find((item) => item._id === action.payload._id)
			if (existingBook && existingBook.quantity === 1) {
				state.items = state.items.filter((item) => item._id !== action.payload._id)
			} else if (existingBook) {
				existingBook.quantity -=1
			}
		},
		removeAll: (state, action) => {
			state.items = []
		  }
	}
})