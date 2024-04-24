import { createSlice } from '@reduxjs/toolkit';

export const statisticsSlice = createSlice({
    name: 'statistics',
    initialState: {
        expensesAmountPerCategory: [],
    },
    reducers: {
        setExpenseAmountPerCategory: (state, action) => {
            return {...state, expensesAmountPerCategory: [...action.payload] };
        }
    }
});

export const { setExpenseAmountPerCategory } = statisticsSlice.actions;

export default statisticsSlice.reducer;