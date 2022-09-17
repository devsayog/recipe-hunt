import Image from 'next/image'
import Link from 'next/link'

import { Heading4 } from '@/components/Typography'
import type { Meal } from '@/types/meal'

interface IMealCardProps {
  meal: Meal
}
const MealCard = ({ meal: m }: IMealCardProps) => {
  return (
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
  )
}

export default MealCard
