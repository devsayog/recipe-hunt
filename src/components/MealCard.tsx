import Image from 'next/image'
import Link from 'next/link'

import { Heading4 } from '@/components/Typography'
import { toggleFav } from '@/slice/favourites'
import { useAppDispatch } from '@/store/useReduxHooks'
import type { Meal } from '@/types/meal'

interface IMealCardProps {
  meal: Meal
  favourite?: boolean
}
const MealCard = ({ meal: m, favourite }: IMealCardProps) => {
  const dispatch = useAppDispatch()
  return (
    <div className="relative transition-transform hover:-translate-y-1">
      <Link key={m.idMeal} href={`/meal/${m.idMeal}`}>
        <a className="card-item  grid p-0">
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
      {favourite && (
        <button
          onClick={() => {
            dispatch(toggleFav(m))
          }}
          className="focus absolute top-0 right-0 flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 text-gray-300 transition hover:bg-gray-900"
        >
          <p className="sr-only">remove from favourites</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="tomato"
            className="h-8 w-8"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default MealCard
