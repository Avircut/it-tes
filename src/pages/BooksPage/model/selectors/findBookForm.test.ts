import { StateSchema } from 'app/providers/StoreProvider';
import { Categories, Sorts } from 'entities/Book';
import {
  getCategory, getInputValue, getMaxResults, getPage, getQuery, getSort, getStartIndex,
} from './findBookForm';

describe('findBookForm.test', () => {
  test('Should return category', () => {
    const state:DeepPartial<StateSchema> = {
      booksPage: {
        category: Categories.ART,
        sort: Sorts.RELEVANCE,
        maxResults: 25,
        query: 'Test',
        inputValue: 'Test',
        startIndex: 3,
      },
    };
    expect(getCategory(state as StateSchema)).toEqual(Categories.ART);
  });
  test('Should return sort', () => {
    const state:DeepPartial<StateSchema> = {
      booksPage: {
        category: Categories.ART,
        sort: Sorts.RELEVANCE,
        maxResults: 25,
        query: 'Test',
        inputValue: 'Test',
        startIndex: 3,
      },
    };
    expect(getSort(state as StateSchema)).toEqual(Sorts.RELEVANCE);
  });
  test('Should return maxResults', () => {
    const state:DeepPartial<StateSchema> = {
      booksPage: {
        category: Categories.ART,
        sort: Sorts.RELEVANCE,
        maxResults: 25,
        query: 'Test',
        inputValue: 'Test',
        startIndex: 3,
      },
    };
    expect(getMaxResults(state as StateSchema)).toEqual(25);
  });
  test('Should return inputValue', () => {
    const state:DeepPartial<StateSchema> = {
      booksPage: {
        category: Categories.ART,
        sort: Sorts.RELEVANCE,
        maxResults: 25,
        query: 'Test',
        inputValue: 'Test',
        startIndex: 3,
      },
    };
    expect(getInputValue(state as StateSchema)).toEqual('Test');
  });
  test('Should return query', () => {
    const state:DeepPartial<StateSchema> = {
      booksPage: {
        category: Categories.ART,
        sort: Sorts.RELEVANCE,
        maxResults: 25,
        query: 'Test',
        inputValue: 'Test',
        startIndex: 3,
      },
    };
    expect(getQuery(state as StateSchema)).toEqual('Test');
  });
  test('Should return startIndex', () => {
    const state:DeepPartial<StateSchema> = {
      booksPage: {
        category: Categories.ART,
        sort: Sorts.RELEVANCE,
        maxResults: 25,
        query: 'Test',
        inputValue: 'Test',
        startIndex: 3,
      },
    };
    expect(getStartIndex(state as StateSchema)).toEqual(3);
  });
  test('Should return page', () => {
    const state:DeepPartial<StateSchema> = {
      booksPage: {
        category: Categories.ART,
        sort: Sorts.RELEVANCE,
        maxResults: 30,
        query: 'Test',
        inputValue: 'Test',
        startIndex: 3,
      },
    };
    expect(getPage(state as StateSchema)).toEqual(1);
  });
  test('Should return first page if start index is negative', () => {
    const state:DeepPartial<StateSchema> = {
      booksPage: {
        category: Categories.ART,
        sort: Sorts.RELEVANCE,
        maxResults: 30,
        query: 'Test',
        inputValue: 'Test',
        startIndex: -3,
      },
    };
    expect(getPage(state as StateSchema)).toEqual(1);
  });
  test('Should return correct page if not first page', () => {
    const state:DeepPartial<StateSchema> = {
      booksPage: {
        category: Categories.ART,
        sort: Sorts.RELEVANCE,
        maxResults: 30,
        query: 'Test',
        inputValue: 'Test',
        startIndex: 66,
      },
    };
    expect(getPage(state as StateSchema)).toEqual(3);
  });
});
