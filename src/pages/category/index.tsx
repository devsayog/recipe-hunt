import CategoryCard from '@/components/CategoryCard'
import { Heading2 } from '@/components/Typography'
import { useGetCategoriesQuery } from '@/services/mealDb'

const Index = () => {
  const { data, isLoading, isError } = useGetCategoriesQuery()

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
      <Heading2>Select categories</Heading2>
      <div className="card-grid">
        {data.categories.map((c) => (
          <CategoryCard key={c.idCategory} category={c} />
        ))}
      </div>
    </section>
  )
}

export default Index
