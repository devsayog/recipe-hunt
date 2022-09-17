/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '@/store'
import type { Meal } from '@/types/meal'

export type FavouriteState = {
  favourites: Meal[]
}
const initialState: FavouriteState = {
  favourites: [],
}

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    toggleFav: (state, action: PayloadAction<Meal>) => {
      const { idMeal } = action.payload
      const index = state.favourites.findIndex((i) => i.idMeal === idMeal)
      if (index >= 0) {
        state.favourites.splice(index, 1)
      } else {
        state.favourites.push(action.payload)
      }
    },
  },
})

export const selectFav = (state: RootState) => state.favourites
export const { toggleFav } = favouritesSlice.actions
export default favouritesSlice.reducer
