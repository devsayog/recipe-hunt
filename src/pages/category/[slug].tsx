import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Heading2, Heading4 } from '@/components/Typography'
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
  return (
    <section>
      <Heading2>Meals</Heading2>
      <div className="card-grid">
        {data.meals.map((m) => (
          <Link key={m.idMeal} href={`/meal/${m.idMeal}`}>
            <a className="card-item grid p-0">
              <div className="col-start-1 row-start-1 rounded">
                <Image
                  src={m.strMealThumb}
                  alt={m.strMeal}
                  layout="intrinsic"
                  width={400}
                  height={300}
                  className="rounded object-cover"
                />
              </div>
              <Heading4
                className="z-50 col-start-1 row-start-1 self-end bg-zinc-800/90"
                text={m.strMeal}
              />
            </a>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Slug
