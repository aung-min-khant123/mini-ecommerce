import { configureStore } from '@reduxjs/toolkit'
import { todoApi } from './TodoApi'
import { api } from './api'
import productSliceReducer from './productSlice'


export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
    [api.reducerPath]: api.reducer,
    products: productSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware).concat(api.middleware),
})
