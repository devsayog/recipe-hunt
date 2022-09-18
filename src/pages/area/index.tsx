import CategoryCard from '@/components/CategoryCard'
import ErrorMessage from '@/components/ErrorMessage'
import Loader from '@/components/Loader'
import { Heading2 } from '@/components/Typography'
import { useGetAreasQuery } from '@/services/mealDb'

const Index = () => {
  const { data, isError, isLoading } = useGetAreasQuery()

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
    <section>
      <Heading2>Select by area</Heading2>
      <div className="card-grid">
        {data.meals.map((m) => {
          const category = {
            strCategory: m.strArea,
            strCategoryThumb: `/images/${m.strArea.toLowerCase()}.webp`,
          }
          return <CategoryCard key={m.strArea} category={category} area />
        })}
      </div>
    </section>
  )
}

export default Index
