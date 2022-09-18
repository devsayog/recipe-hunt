import { useRouter } from 'next/router'

import ErrorMessage from '@/components/ErrorMessage'
import Loader from '@/components/Loader'
import MealsList from '@/components/MealsList'
import Meta from '@/components/Meta'
import { useGetMealsByAreaQuery } from '@/services/mealDb'

const Index = () => {
  const {
    query: { slug },
  } = useRouter()
  const { data, isLoading, isError } = useGetMealsByAreaQuery(slug as string)

  if (isLoading) {
    return <Loader />
  }
  if (isError) {
    return <ErrorMessage text="Something went wrong" showButton />
  }
  if (!data) {
    return <ErrorMessage text="No results found" />
  }

  return (
    <>
      <Meta pageTitle={slug as string} />
      <MealsList title={slug as string} meals={data.meals} />
    </>
  )
}

export default Index
