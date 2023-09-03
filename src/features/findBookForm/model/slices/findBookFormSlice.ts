import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Categories, Sorts } from 'entities/Book';
import { FindBookFormSchema } from '../types/findBookFormSchema';

const initialState: FindBookFormSchema = {
  query: '',
  category: Categories.ALL,
  sort: Sorts.RELEVANCE,
};

export const findBookFormSlice = createSlice({
  name: 'findBookForm',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setCategory: (state, action: PayloadAction<Categories>) => {
      state.category = action.payload;
    },
    setSort: (state, action: PayloadAction<Sorts>) => {
      state.sort = action.payload;
    },
  },
});

export const { actions: findBookFormActions } = findBookFormSlice;
export const { reducer: findBookFormReducer } = findBookFormSlice;
