import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Categories, Sorts } from 'entities/Book';

export const getQuery = (state: StateSchema) => state.booksPage?.query || '';
export const getCategory = (state: StateSchema) => state.booksPage?.category || Categories.ALL;
export const getSort = (state: StateSchema) => state.booksPage?.sort || Sorts.RELEVANCE;
export const getInputValue = (state: StateSchema) => state.booksPage?.inputValue || '';
export const getMaxResults = (state: StateSchema) => state.booksPage?.maxResults || 30;
export const getStartIndex = (state: StateSchema) => state.booksPage?.startIndex || 0;
export const getInited = (state: StateSchema) => state.booksPage?._inited || false;

export const getPage = createSelector(
  getStartIndex,
  getMaxResults,
  (startIndex, maxResults) => Math.ceil(startIndex / maxResults) + 1,
);
