import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Categories, Sorts } from 'entities/Book';
import { BooksPageSchema } from '../types/BooksPageSchema';

const initialState: BooksPageSchema = {
  query: '',
  category: Categories.ALL,
  sort: Sorts.RELEVANCE,
  startIndex: 0,
  maxResults: 30,
  _inited: false,
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
    setStartIndex: (state, action: PayloadAction<number>) => {
      state.startIndex = action.payload;
    },
    setMaxResults: (state, action: PayloadAction<number>) => {
      state.maxResults = action.payload;
    },
    IncrementPage: (state) => {
      state.startIndex += state.maxResults;
    },
    InitPage: (state) => {
      state._inited = true;
    },
  },
});

export const { actions: BooksPageActions } = BooksPageSlice;
export const { reducer: BooksPageReducer } = BooksPageSlice;
