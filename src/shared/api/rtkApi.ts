// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GOOGLE_API_KEY } from 'shared/const/api';

// Define a service using a base URL and expected endpoints
export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: __API__,
    prepareHeaders: (headers) => {
      headers.set('X-goog-api-key', GOOGLE_API_KEY);
      return headers;
    },
  }),
  tagTypes: ['Book'],
  endpoints: (builder) => ({}),
});
