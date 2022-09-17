import React from 'react'

import type { Meal } from '@/types/meal'

import MealCard from './MealCard'
import { Heading2 } from './Typography'

interface IMealsListProps {
  meals: Meal[]
  title: string
}
const MealsList = ({ meals, title }: IMealsListProps) => {
  return (
    <section>
      <Heading2>{title}</Heading2>
      <div className="card-grid">
        {meals.map((m) => (
          <MealCard key={m.idMeal} meal={m} />
        ))}
      </div>
    </section>
  )
}

export default MealsList
