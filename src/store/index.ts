import { configureStore } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import meadlDbApi from '@/services/mealDb'
import favouritesReducer from '@/slice/favourites'

const persistConfig = {
  key: 'fav',
  storage,
}
const persistedReducer = persistReducer(persistConfig, favouritesReducer)
const store = configureStore({
  reducer: {
    favourites: persistedReducer,
    [meadlDbApi.reducerPath]: meadlDbApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(meadlDbApi.middleware),
})
export const presistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
