import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BooksApiResponse } from "../types/MainTypes";


export const BooksApiSlice = createApi({
    reducerPath: "BooksApi",
    baseQuery: fetchBaseQuery({baseUrl:"https://freetestapi.com/api/v1/"}),
    tagTypes: ["Books"],
    endpoints: build => ({
            getAllBooks: build.query<BooksApiResponse[], void>({
                query: () => 'books',
                providesTags: ["Books"]
            })  
    })
})

export const { useGetAllBooksQuery } = BooksApiSlice;