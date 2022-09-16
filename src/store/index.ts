import { configureStore } from '@reduxjs/toolkit'

import meadlDbApi from '@/services/mealDb'

const store = configureStore({
  reducer: {
    [meadlDbApi.reducerPath]: meadlDbApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(meadlDbApi.middleware),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
