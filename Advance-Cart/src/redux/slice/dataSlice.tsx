import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { stateType } from "../../types/type";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch(
    "https://hplussport.com/api/products/order/price"
  );
  const data = await response.json();
  return data;
});

const initialState: stateType = {
  data: null,
  isLoading: false,
  isError: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default dataSlice.reducer;
