import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const VITE_APP_REST_API_URL = process.env.VITE_APP_REST_API_URL
const VITE_APP_PARSE_APP_ID = process.env.VITE_APP_PARSE_APP_ID

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${VITE_APP_REST_API_URL}/parse`,
  }),
  refetchOnMountOrArgChange: true,
  endpoints: (build) => ({

    register: build.mutation({
      query: (data:{
        firstname:string, 
        lastname:string, 
        username:string, 
        password:string, 
        email:string
      } 
    ) => ({ 
        url: `/users`, 
        method: 'POST', 
        headers: {
           'X-Parse-Application-Id': VITE_APP_PARSE_APP_ID
        },
        body: data
      }),
      transformResponse: (
        response: {
          result: {
            objectId:string, 
            createdAt:string, 
            sessionToken:string
          }
        }) => {
        return response.result;
      },
    }),

    login: build.mutation({
      query: (data:{
        username:string, 
        password:string, 
      } 
    ) => ({ 
        url: `/login`, 
        method: 'POST', 
        headers: {
           'X-Parse-Application-Id': VITE_APP_PARSE_APP_ID
        },
        body: data
      }),
      transformResponse: (
        response: {
          result: {
            objectId:string,
            firstname:string,
            lastname:string,
            username:string,
            email:string 
            createdAt:string, 
            sessionToken:string
          }
        }) => {
        return response.result;
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
