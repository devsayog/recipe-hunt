import React from 'react'

import type { Meal } from '@/types/meal'

import MealCard from './MealCard'
import { Heading2, Paragraph } from './Typography'

interface IMealsListProps {
  meals: Meal[]
  title: string
  favourite?: boolean
}
const MealsList = ({ meals, title, favourite }: IMealsListProps) => {
  return (
    <section>
      <Heading2>{title}</Heading2>
      {meals.length > 0 ? (
        <div className="card-grid">
          {meals.map((m) => (
            <MealCard favourite={favourite} key={m.idMeal} meal={m} />
          ))}
        </div>
      ) : (
        <Paragraph
          className="mt-5 text-red-500 md:mt-8"
          text={`No ${title} results found`}
        />
      )}
    </section>
  )
}

export default MealsList
