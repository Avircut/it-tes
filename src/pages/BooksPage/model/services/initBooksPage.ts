import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Categories, Sorts } from 'entities/Book';
import { destroyQuery } from 'shared/lib/bookQuery/destroyQuery';
import { getInited } from '../selectors/findBookForm';
import { BooksPageActions } from '../slices/BooksPageSlice';

export const initBooksPage = createAsyncThunk<
  void,
  URLSearchParams,
  {state: StateSchema}
>('BooksPage/InitPage', async (searchParams, thunkApi) => {
  const { getState, dispatch } = thunkApi;
  const inited = getInited(getState());
  if (!inited) {
    const queryFromUrl = searchParams.get('query') || '';
    const sortFromUrl = searchParams.get('sort') as Sorts;
    const maxResultsFromUrl = Number(searchParams.get('maxResults'));
    const startIndexFromUrl = Number(searchParams.get('startIndex'));
    const { inputValue, category } = destroyQuery(queryFromUrl);
    if (queryFromUrl) {
      dispatch(BooksPageActions.setQuery(inputValue));
      dispatch(BooksPageActions.setInputValue(inputValue));
      dispatch(BooksPageActions.setCategory(category as Categories));
    }
    if (sortFromUrl) {
      dispatch(BooksPageActions.setSort(sortFromUrl));
    }
    if (maxResultsFromUrl) {
      dispatch(BooksPageActions.setMaxResults(maxResultsFromUrl));
    }
    if (startIndexFromUrl) {
      dispatch(BooksPageActions.setStartIndex(startIndexFromUrl));
    }
    dispatch(BooksPageActions.InitPage());
  }
});
