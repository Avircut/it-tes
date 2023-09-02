import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BooksDetailPageSchema } from '../types/BooksDetailPageSchema';

const initialState: BooksDetailPageSchema = {

};

export const BooksDetailPageSlice = createSlice({
  name: 'BooksDetailPage',
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

export const { actions: BooksDetailPageActions } = BooksDetailPageSlice;
export const { reducer: BooksDetailPageReducer } = BooksDetailPageSlice;
