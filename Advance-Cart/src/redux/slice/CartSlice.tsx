import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../types/type";

// Define a type for the slice state
interface CartState {
  products: Array<ProductType>;
}

// Define the initial state using that type
const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = state.products.find(
        (pro) => pro.id === action.payload.id
      );
      if (product) {
        product.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removerProduct: (state, action) => {
      const product = state.products.filter(
        (pro) => pro.id !== action.payload.id
      );
      state.products = product;
    },
    incrementProduct: (state, action) => {
      const product = state.products.find(
        (pro) => pro.id === action.payload.id
      );

      product.quantity += 1;
    },
    decrementProduct: (state, action) => {
      const product = state.products.find(
        (pro) => pro.id === action.payload.id
      );
      if (product.quantity > 0) {
        product.quantity -= 1;
      }
    },
  },
});

export const {
  addProduct,
  removerProduct,
  incrementProduct,
  decrementProduct,
} = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default cartSlice.reducer;
