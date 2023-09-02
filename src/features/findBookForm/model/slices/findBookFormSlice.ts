import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FindBookFormSchema } from '../types/findBookFormSchema';

const initialState: FindBookFormSchema = {
    
};

export const findBookFormSlice = createSlice({
    name: 'findBookForm',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: findBookFormActions } = findBookFormSlice;
export const { reducer: findBookFormReducer } = findBookFormSlice;