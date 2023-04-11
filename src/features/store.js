import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartReducer from "./slices/CartSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { ApiSlice } from "./slices/ApiSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [ApiSlice.reducerPath]: ApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiSlice.middleware),
});

setupListeners(store.dispatch);
