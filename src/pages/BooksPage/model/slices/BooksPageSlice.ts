import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BooksPageSchema } from '../types/BooksPageSchema';

const initialState: BooksPageSchema = {

};

export const BooksPageSlice = createSlice({
  name: 'BooksPage',
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

export const { actions: BooksPageActions } = BooksPageSlice;
export const { reducer: BooksPageReducer } = BooksPageSlice;
