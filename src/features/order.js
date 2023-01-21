import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderNumber: null,
};

const postOrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    postOrder(state, action) {
      return action.payload.order;
    },
    postFail(state, action) {
      return initialState
    }
  },
});

export const { postOrder } = postOrderSlice.actions;

export default postOrderSlice.reducer;
