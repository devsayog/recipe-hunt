import { useRouter } from 'next/router'

import ErrorMessage from '@/components/ErrorMessage'
import Loader from '@/components/Loader'
import MealsList from '@/components/MealsList'
import { useGetMealsByCategoryQuery } from '@/services/mealDb'

const Slug = () => {
  const {
    query: { slug },
  } = useRouter()
  const { data, isLoading, isError } = useGetMealsByCategoryQuery(
    slug as string,
  )
  if (isLoading) {
    return <Loader />
  }
  if (isError) {
    return <ErrorMessage text="Something went wrong" showButton />
  }
  if (!data) {
    return <ErrorMessage text="No results found" />
  }
  return <MealsList title={slug as string} meals={data.meals} />
}

export default Slug
