import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { Categories } from '@/types/category'

const meadlDbApi = createApi({
  reducerPath: 'mealDbAPi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.themealdb.com/api/json/v1/1',
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<Categories, void>({
      query: () => '/categories.php',
    }),
  }),
})
export const { useGetCategoriesQuery } = meadlDbApi
export default meadlDbApi
