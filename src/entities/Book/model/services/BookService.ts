import { rtkApi } from 'shared/api/rtkApi';
import { Volume } from '../types/BookSchema';

interface ResponseSchema{
  items:Volume[];
  totalItems:number;
}
const booksApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    FetchQueriedBooks: build.query<ResponseSchema, {query:string, sort?:string, startIndex?:number, maxResults?:number}>({
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
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.items.push(...newItems.items);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.query !== previousArg?.query || currentArg?.sort !== previousArg?.sort;
      },
      transformResponse: (response:ResponseSchema) => response,
      providesTags: (result) => ['Book'],
    }),
  }),
});
export const useFetchBooksList = booksApi.useFetchQueriedBooksQuery;
