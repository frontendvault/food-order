import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],

  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    decrement: () => {},
    clearCart: () => {},
    removeItem: () => {},
  },
});

export const { addToCart, decrement, clearCart, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
