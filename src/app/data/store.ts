import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { BooksApiSlice } from "../slices/BooksApiSlice";
import { CounterSlice } from "../slices/CouterSlice";

export const RootReducers = combineSlices(CounterSlice, BooksApiSlice);

export const store = configureStore({
    // reducer: {[BooksApiSlice.reducerPath] : BooksApiSlice.reducer},
    reducer: RootReducers,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(BooksApiSlice.middleware);
    }
})

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
