import { createSlice } from "@reduxjs/toolkit";
import { IWsOrdersState } from "../utils/interfaces";

const initialState: IWsOrdersState = {
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
