import {createSlice} from "@reduxjs/toolkit"
//Not currently using this reducer. Need to figure out a way to implement it, it's a bit tricky considering I already have an onClick that isn't toggle.

export const rating = createSlice({
	name: "rating",
	initialState: {
		ratedBooks: []
	},
	reducers: {
		saveRated: (state, action) => {
			const existingBook = state.ratedBooks.find((book) => book._id === action.payload._id)
			if (existingBook) {
				existingBook.quantity += 0
			} else {
				const newArray = state.ratedBooks.slice()
				newArray.push({...action.payload, quantity: 1})
				state.ratedBooks = newArray
			}
		},
		removeRated: (state, action) => {
			const existingBook = state.ratedBooks.find((book) => book._id === action.payload._id)
			if (existingBook && existingBook.quantity === 1) {
				state.ratedBooks = state.ratedBooks.filter((book) => book._id !== action.payload._id)
			} else if (existingBook) {
				existingBook.quantity -= 1
			}
		}
	}
})