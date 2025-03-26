import { createSlice } from "@reduxjs/toolkit";
// Create a slice using Redux Toolkit
const slice = createSlice({
    name: "wishlist", // Name of the slice
    initialState: [], // Initial state of the slice
    reducers: {
      // Reducer for adding an item to the wishlist
      addWishlistItem(state, action) {
        const previousAddedItem = state.find(
          (wishListItem) => wishListItem.productId === action.payload.productId
        );
        // If the item is not already in the wishlist, add it
        if (!previousAddedItem) {
          state.push(action.payload); // Directly mutate the state (Immer handles immutability)
        }
      },
      // Reducer for removing an item from the wishlist
      removeWishlistItem(state, action) {
        // Use filter to create a new array without the item to be removed
        return state.filter((item) => item.productId !== action.payload.productId);
      },
    },
  });

  
// Export the generated action creators
export const { addWishlistItem, removeWishlistItem } = slice.actions;

// Export the reducer
export default slice.reducer;