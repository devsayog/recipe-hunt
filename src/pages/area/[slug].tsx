import { useRouter } from 'next/router'

import MealsList from '@/components/MealsList'
import { useGetMealsByAreaQuery } from '@/services/mealDb'

const Index = () => {
  const {
    query: { slug },
  } = useRouter()
  const { data, isLoading, isError } = useGetMealsByAreaQuery(slug as string)

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

export default Index
