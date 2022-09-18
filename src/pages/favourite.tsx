import React from 'react'

import MealsList from '@/components/MealsList'
import Meta from '@/components/Meta'
import { selectFav } from '@/slice/favourites'
import { useAppSelector } from '@/store/useReduxHooks'

const Favourites = () => {
  const { favourites } = useAppSelector(selectFav)
  return (
    <>
      <Meta pageTitle="Favourites" />
      <MealsList meals={favourites} favourite title="Favourites" />
    </>
  )
}

export default Favourites
