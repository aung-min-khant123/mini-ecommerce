import { configureStore, createReducer } from "@reduxjs/toolkit";
import { todoApi } from "./TodoApi";
import { api } from "./api";
import productSliceReducer from "./productSlice";
import cartSliceReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
    [api.reducerPath]: api.reducer,
    products: productSliceReducer,
    cart: cartSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware).concat(api.middleware),
});
