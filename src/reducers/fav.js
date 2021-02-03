import {createSlice} from "@reduxjs/toolkit"

export const fav = createSlice({
	name: "fav",
	initialState: {
		favItems: []
	},
	reducers: {
		saveFav: (state, action) => {
			const existingBook = state.favItems.find((item) => item._id === action.payload._id)
			if (existingBook) {
				existingBook.quantity += 0
			} else {
				const newArray = state.favItems.slice()
				newArray.push({...action.payload, quantity: 1})
				state.favItems = newArray
			}
		},
		removeFav: (state, action) => {
			const existingBook = state.favItems.find((item) => item._id === action.payload._id)
			if (existingBook && existingBook.quantity === 1) {
				state.favItems = state.favItems.filter((item) => item._id !== action.payload._id)
			} else if (existingBook) {
				existingBook.quantity -= 1
			}
		}
	}
})