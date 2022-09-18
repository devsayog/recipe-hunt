import CategoryCard from '@/components/CategoryCard'
import ErrorMessage from '@/components/ErrorMessage'
import Loader from '@/components/Loader'
import { Heading2 } from '@/components/Typography'
import { useGetCategoriesQuery } from '@/services/mealDb'

const Index = () => {
  const { data, isLoading, isError } = useGetCategoriesQuery()

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
