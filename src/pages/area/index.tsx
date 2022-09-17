import CategoryCard from '@/components/CategoryCard'
import { Heading2 } from '@/components/Typography'
import { useGetAreasQuery } from '@/services/mealDb'

const Index = () => {
  const { data, isError, isLoading } = useGetAreasQuery()

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>something went wrong...</p>
  }
  if (!data) {
    return <p>No result found</p>
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
