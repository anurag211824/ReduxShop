import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice.jsx";
import wishListReducer from "./slices/wishListSlice.jsx";
import productReducer from "./slices/productSlice.jsx";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },
  devTools: import.meta.env.MODE !== "production",
});
