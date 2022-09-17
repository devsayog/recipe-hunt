import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { Categories } from '@/types/category'
import type { Meals } from '@/types/meal'

const meadlDbApi = createApi({
  reducerPath: 'mealDbAPi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.themealdb.com/api/json/v1/1',
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<Categories, void>({
      query: () => '/categories.php',
    }),
    getMealsByCategory: builder.query<Meals, string>({
      query: (q) => `/filter.php?c=${q}`,
    }),
    getMealById: builder.query<any, string>({
      query: (q) => `/lookup.php?i=${Number(q)}`,
    }),
  }),
})
export const {
  useGetCategoriesQuery,
  useGetMealsByCategoryQuery,
  useGetMealByIdQuery,
} = meadlDbApi
export default meadlDbApi
