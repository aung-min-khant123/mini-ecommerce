import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BACKEND_API }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/products/categories",
    }),
    getProductByCategory: builder.query({
        query: (slug: string) => `/products/category/${slug}`
    })
  }),
});

export const { useGetCategoriesQuery, useGetProductByCategoryQuery } = api;