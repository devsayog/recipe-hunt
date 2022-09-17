import { useRouter } from 'next/router'

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
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>something went wrong...</p>
  }
  if (!data) {
    return <p>No result found</p>
  }
  return <MealsList title={slug as string} meals={data.meals} />
}

export default Slug
