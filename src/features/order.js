import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { makeOrder } from "../utils/api";

const initialState = {
  loading: false,
  order: [],
};

export const getOrderNumber = createAsyncThunk(
  "order/fetch",
  async (ingredientsIDs) => {
    const response = await makeOrder(ingredientsIDs);
    return response.order;
  }
);

export const postOrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrderNumber.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getOrderNumber.fulfilled, (state, action) => {
        return {
          loading: false,
          order: action.payload,
        };
      })
      .addCase(getOrderNumber.rejected, (state, action) => {
        state = initialState;
      });
  },
});

export default postOrderSlice.reducer;
