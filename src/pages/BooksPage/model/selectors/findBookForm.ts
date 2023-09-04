import { StateSchema } from 'app/providers/StoreProvider';
import { Categories, Sorts } from 'entities/Book';

export const getQuery = (state:StateSchema) => state.booksPage?.query || '';
export const getCategory = (state:StateSchema) => state.booksPage?.category || Categories.ALL;
export const getSort = (state:StateSchema) => state.booksPage?.sort || Sorts.RELEVANCE;
export const getInputValue = (state:StateSchema) => state.booksPage?.inputValue || '';
export const getMaxResults = (state:StateSchema) => state.booksPage?.maxResults || 30;
export const getStartIndex = (state:StateSchema) => state.booksPage?.startIndex || 0;
