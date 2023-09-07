import { rtkApi } from 'shared/api/rtkApi';
import { addQueryParams } from 'shared/lib/url/addQueryParams';
import { Volume } from '../types/BookSchema';

export interface BooksResponseSchema {
  items: Volume[];
  totalItems: number;
}
interface BooksRequestSchema {
  query: string;
  sort?: string;
  startIndex?: number;
  maxResults?: number;
}
const booksApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    FetchQueriedBooks: build.query<BooksResponseSchema, BooksRequestSchema>({
      query: ({
        query,
        sort = 'relevance',
        startIndex = 0,
        maxResults = 30,
      }) => {
        addQueryParams({
          query,
          sort,
          startIndex: String(startIndex),
          maxResults: String(maxResults),
        });
        return {
          url: '/volumes',
          params: {
            q: query,
            orderBy: sort,
            startIndex,
            maxResults,
          },
        };
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems, { arg }) => {
        // If first page (only if changed query or sort) replace all volumes
        if (arg.startIndex === 0) {
          currentCache.items = newItems.items;
          currentCache.totalItems = newItems.totalItems;
        } else if (newItems.totalItems) {
          currentCache.items.push(...newItems.items);
          // Handle if Google API returns no items
        } else if (!newItems.items && arg.startIndex !== undefined) {
          currentCache.totalItems = arg.startIndex;
        }
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.startIndex !== previousArg?.startIndex;
      },
      transformResponse: (response: BooksResponseSchema) => response,
      providesTags: (result) => ['Book'],
    }),
  }),
});
export const useFetchBooksList = booksApi.useFetchQueriedBooksQuery;
