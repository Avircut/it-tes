import { StateSchema } from 'app/providers/StoreProvider';
import { Categories, Sorts } from 'entities/Book';

export const getQuery = (state:StateSchema) => state.bookForm?.query || '';
export const getCategory = (state:StateSchema) => state.bookForm?.category || Categories.ALL;
export const getSort = (state:StateSchema) => state.bookForm?.sort || Sorts.RELEVANCE;
