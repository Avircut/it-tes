import { rtkApi } from 'shared/api/rtkApi';
import { Volume } from '../types/BookSchema';

const booksApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    FetchQueriedBooks: build.query<Volume[], {query?:string, sort?:string, startIndex?:number, maxResults?:number}>({
      query: ({
        query, sort = 'relevance', startIndex = 0, maxResults = 30,
      }) => ({
        url: '/volumes',
        params: {
          q: query,
          orderBy: sort,
          startIndex,
          maxResults,
        },
      }),
      transformResponse: (response:{items:Volume[]}) => response?.items,
      providesTags: (result) => ['Book'],
    }),
  }),
});
export const useFetchBooksList = booksApi.useFetchQueriedBooksQuery;
