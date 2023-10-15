import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/UserSlice '

export const Store = configureStore({
  reducer: {user:userReducer},
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  })
})