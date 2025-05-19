import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const errorLogsApi = createApi({
  reducerPath: 'errorLogsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }), // fake endpoint
  endpoints: (builder) => ({
    getErrorLogs: builder.query({
      query: () => 'posts', // Using posts as dummy logs
      pollingInterval: 5000,
    }),
  }),
});

export const { useGetErrorLogsQuery } = errorLogsApi;
