import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wsRequest: false,
  wsOpen: false,
  wsFailed: false,
  isSuccess: false,
  orders: [],
  total: 0,
  totalToday: 0,  
};

export const wsOrdersSlice = createSlice({
  name: "wsOrder",
  initialState,
  reducers: {
    wsInit(state) {
      state.wsRequest = true;
      state.wsOpen = false;
      state.wsFailed = false;
    },
    wsInitWithCustomUrl(state, action) {
      state.wsRequest = true;
      state.wsOpen = false;
      state.wsFailed = false;
    },
    onOpen(state) {
      state.wsOpen = true;
      state.wsFailed = false;
    },
    onClose(state) {
      state.wsRequest = false;
      state.wsOpen = false;
    },
    onError(state) {
      state.wsRequest = false;
      state.wsOpen = false;
      state.wsFailed = true;
    },
    onMessage(state, action) {
      state.wsRequest = false;
      state.orders = action.payload.orders;
      state.total = action.payload.total;
      state.totalToday = action.payload.totalToday;
      state.isSuccess = true;
    },
    wsClose(state) {
      state.wsRequest = false;
      state.wsOpen = false;
      state.wsFailed = false;
      state.isSuccess = false;
    },
  },
});

export const {
  wsInit,
  wsInitWithCustomUrl,
  onOpen,
  onClose,
  onError,
  onMessage,
  wsClose,
} = wsOrdersSlice.actions;

export default wsOrdersSlice.reducer;

export const WS_ORDER_ACTION_TYPES = {
  wsInit: wsInit.type,
  wsInitWithCustomUrl: wsInitWithCustomUrl.type,
  onOpen: onOpen.type,
  onClose: onClose.type,
  onError: onError.type,
  onMessage: onMessage.type,
  wsClose: wsClose.type,
};

// //returns order by its id
// export const selectOrderById = (id) => (state) => {
//   const order = state.wsOrders.orders.find((order) => order._id === id);
//   return order
//     ? order
//     : {
//         _id: "",
//         status: "",
//         name: "",
//         createdAt: "",
//         updatedAt: "",
//         number: 0,
//         ingredients: [""],
//       };
// };
