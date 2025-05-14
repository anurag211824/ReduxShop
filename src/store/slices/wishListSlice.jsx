import { createSlice } from "@reduxjs/toolkit";
// Create a slice using Redux Toolkit
const slice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addWishlistItem(state, action) {
      const previousAddedItem = state.find(
        (wishListItem) => wishListItem.productId === action.payload.productId
      );
      if (!previousAddedItem) {
        state.push(action.payload);
      }
    },
    removeWishlistItem(state, action) {
      return state.filter(
        (item) => item.productId !== action.payload.productId
      );
    },
  },
});

export const { addWishlistItem, removeWishlistItem } = slice.actions;
export default slice.reducer;
