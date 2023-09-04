import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Categories, Sorts } from 'entities/Book';
import { BooksPageSchema } from '../types/BooksPageSchema';

const initialState: BooksPageSchema = {
  query: '',
  category: Categories.ALL,
  sort: Sorts.RELEVANCE,
  startIndex: 0,
  maxResults: 30,
};

export const BooksPageSlice = createSlice({
  name: 'BooksPage',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
      state.startIndex = 0;
    },
    setCategory: (state, action: PayloadAction<Categories>) => {
      state.category = action.payload;
      state.startIndex = 0;
    },
    setSort: (state, action: PayloadAction<Sorts>) => {
      state.sort = action.payload;
      state.startIndex = 0;
    },
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    IncrementPage: (state) => {
      state.startIndex += state.maxResults;
    },
  },
});

export const { actions: BooksPageActions } = BooksPageSlice;
export const { reducer: BooksPageReducer } = BooksPageSlice;
