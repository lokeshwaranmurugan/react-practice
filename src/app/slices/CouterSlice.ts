import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CounterType } from "../types/MainTypes";

const initialState: CounterType = {
    value:0,
    isLoading: false
} 

export const CounterSlice = createSlice({
    name:"Counter",
    initialState,
    reducers: {
        increment :  (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByInput : (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
                state.value += action.payload;
                state.isLoading = false;
            })
    },
    selectors: {
        selectCount: state => state.value,
        selectLoading: state => state.isLoading
    }
});

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount:number) => {
        await new Promise((resolve) => setTimeout(resolve,1000));
        return amount;
    }
);

export const { increment, decrement, incrementByInput } = CounterSlice.actions;

export const { selectCount, selectLoading } = CounterSlice.selectors;