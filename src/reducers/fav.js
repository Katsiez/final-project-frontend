import {createSlice} from "@reduxjs/toolkit"

export const fav = createSlice({
	name: "fav",
	initialState: {
		favBooks: []
	},
	reducers: {
		saveFav: (state, action) => {
			const existingBook = state.favBooks.find((book) => book._id === action.payload._id)
			if (existingBook) {
				existingBook.quantity += 0
			} else {
				const newArray = state.favBooks.slice()
				newArray.push({...action.payload, quantity: 1})
				state.favBooks = newArray
			}
		},
		removeFav: (state, action) => {
			const existingBook = state.favBooks.find((book) => book._id === action.payload._id)
			if (existingBook && existingBook.quantity === 1) {
				state.favBooks = state.favBooks.filter((book) => book._id !== action.payload._id)
			} else if (existingBook) {
				existingBook.quantity -= 1
			}
		}
	}
})