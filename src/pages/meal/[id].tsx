import Image from 'next/image'
import { useRouter } from 'next/router'

import AppLink from '@/components/AppLink'
import { Heading2, Heading3, Paragraph } from '@/components/Typography'
import { useGetMealByIdQuery } from '@/services/mealDb'
import { selectFav, toggleFav } from '@/slice/favourites'
import { useAppDispatch, useAppSelector } from '@/store/useReduxHooks'

const Index = () => {
  const dispatch = useAppDispatch()
  const { favourites } = useAppSelector(selectFav)
  const {
    query: { id },
  } = useRouter()
  const { data, isError, isLoading } = useGetMealByIdQuery(id as string)
  const isFav = favourites.findIndex((f) => f.idMeal === id)

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>something went wrong...</p>
  }
  if (!data) {
    return <p>No result found</p>
  }
  const meal = data.meals[0]
  const ingredients = Object.keys(meal)
    .filter((i) => i.startsWith('strIngredient'))
    .filter((i) => meal[i].trim() !== '' && meal[i] !== null)
  const ingredientsAndMeasures: {
    id: number
    ingredient: string
    measure: string
  }[] = ingredients.map((ing, idx) => ({
    id: idx,
    ingredient: meal[ing],
    measure: meal[`strMeasure${idx + 1}`],
  }))

  const handleClick = () => {
    dispatch(
      toggleFav({
        idMeal: meal.idMeal,
        strMeal: meal.strMeal,
        strMealThumb: meal.strMealThumb,
      }),
    )
  }
  return (
    <section>
      <div className="mx-auto max-w-xs py-3 sm:mx-0 sm:max-w-none md:py-5 xl:py-8">
        <div className="flex justify-center">
          <Image
            src={meal.strMealThumb}
            alt={meal.strMeal}
            layout="intrinsic"
            height={400}
            width={700}
            className="object-cover"
          />
        </div>
        <div className="my-3 bg-red-500">
          <Heading2>{meal.strMeal}</Heading2>
        </div>
        <button
          onClick={handleClick}
          type="button"
          className="focus flex items-center rounded bg-purple-500 py-2 px-4 text-gray-200 transition-transform hover:scale-105"
        >
          <Paragraph
            text={`${
              isFav < 0 ? 'Add To Favourites' : 'Remove From Favourites'
            }`}
          />
          {isFav < 0 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="ml-2 h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="red"
              className="ml-2 h-6 w-6"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          )}
        </button>
        <div className="mt-3 sm:flex sm:justify-between md:mt-5 xl:mt-8">
          <div className="mb-2 flex items-center space-x-2">
            <Paragraph className="font-medium" text="Category: " />
            <AppLink
              href={`/category/${meal.strCategory.toLowerCase()}`}
              text={meal.strCategory}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Paragraph className="font-medium" text="Location: " />
            <AppLink
              href={`/area/${meal.strArea.toLowerCase()}`}
              text={meal.strArea}
            />
          </div>
        </div>
        <Heading3 text="Ingredients" />
        <div className="my-3 grid gap-1 sm:grid-cols-2 md:my-5">
          {ingredientsAndMeasures.map((d) => (
            <div
              key={d.id}
              className="grid grid-cols-[auto,1fr,1fr] items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="tomato"
                className="mr-1 h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <Paragraph text={d.ingredient} />
              <Paragraph className="justify-self-center" text={d.measure} />
            </div>
          ))}
        </div>
        <Heading3 text="Instructions" />
        <div className="my-3 grid gap-1 md:my-5">
          {meal.strInstructions
            .split('.')
            .filter((s: any) => s !== '')
            .map((s: string) => (
              <div key={s} className="grid grid-cols-[auto,1fr] items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="tomato"
                  className="mr-1 h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <Paragraph text={s} />
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Index
