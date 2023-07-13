import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slice/dataSlice";
import cartReducer from "./slice/CartSlice";
export const store = configureStore({
  reducer: {
    data: dataReducer,
    cart: cartReducer,
  },
});
