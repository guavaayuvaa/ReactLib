
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jsonPlaceholderApi = createApi({
  reducerPath: 'jsonPlaceholderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  tagTypes: ['Users', 'Posts', 'Todos'],
  endpoints: (builder) => ({
    
    getUsers: builder.query({
      query: () => '/users',
      providesTags: ['Users'],
    }),
    getUser: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: (result, error, id) => [{ type: 'Users', id }],
    }),

    
    getPosts: builder.query({
      query: () => '/posts',
      providesTags: ['Posts'],
    }),
    addPost: builder.mutation({
      query: (newPost) => ({
        url: '/posts',
        method: 'POST',
        body: newPost,
      }),
      invalidatesTags: ['Posts'],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Posts'],
    }),

    
    getTodos: builder.query({
      query: () => '/todos',
      providesTags: ['Todos'],
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: '/todos',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['Todos'],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useGetPostsQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
} = jsonPlaceholderApi;
