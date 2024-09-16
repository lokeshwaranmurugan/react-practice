import { configureStore } from "@reduxjs/toolkit";
import { BooksApiSlice } from "../slices/BooksApiSlice";


export const store = configureStore({
    reducer: {[BooksApiSlice.reducerPath] : BooksApiSlice.reducer},
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(BooksApiSlice.middleware);
    }
})

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
