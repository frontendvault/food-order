// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiSlice = createApi({
  reducerPath: "ApiSlice",
  providesTags: ["Products"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetAllProductsQuery } = ApiSlice;
