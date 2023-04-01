import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./ingredients";
import burgerConstructorReducer from "./burgerConstructor";
import orderReducer from "./order";
import authReducer from "./auth/auth";
import wsOrdersReducer, { WS_ORDER_ACTION_TYPES } from "./wsOrders";
import { socketMiddleware } from "./middleware/socketMiddleware";

export const store = configureStore({
    reducer: {
      ingredients: ingredientsReducer,
      burgerConstructor: burgerConstructorReducer,
      order: orderReducer,
      auth: authReducer,
      wsOrders: wsOrdersReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        socketMiddleware(
          "wss://norma.nomoreparties.space/orders/all",
          WS_ORDER_ACTION_TYPES
        )
      ),
  });