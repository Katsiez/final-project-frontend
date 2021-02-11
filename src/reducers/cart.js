import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingProduct = state.items.find(
        (item) => item.bookID === action.payload.bookID
      );

      if (existingProduct) {
        existingProduct.quantity += 0;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const existingProduct = state.items.find(
        (item) => item.bookID === action.payload.bookID
      );

      if (existingProduct && existingProduct.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.bookID !== action.payload.bookID
        );
      } else if (existingProduct) {
        existingProduct.quantity -= 1;
      }
    },
    removeAll: (state, action) => {
      state.items = [];
    },
  },
});
