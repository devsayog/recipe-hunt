import React from 'react'

import MealsList from '@/components/MealsList'
import { selectFav } from '@/slice/favourites'
import { useAppSelector } from '@/store/useReduxHooks'

const Favourites = () => {
  const { favourites } = useAppSelector(selectFav)
  return <MealsList meals={favourites} favourite title="Favourites" />
}

export default Favourites
