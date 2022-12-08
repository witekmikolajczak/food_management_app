import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const VITE_APP_REST_API_URL = import.meta.env.VITE_APP_REST_API_URL
const VITE_APP_PARSE_APP_ID = import.meta.env.VITE_APP_PARSE_APP_ID

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${VITE_APP_REST_API_URL}/parse/functions`,
  }),
  refetchOnMountOrArgChange: true,
  endpoints: (build) => ({
    userFullData: build.mutation({
      query: (data:{
        sessionToken:string, 
      } 
    ) => ({ 
        url: `/userFullData`, 
        method: 'POST', 
        headers: {
           'X-Parse-Application-Id': VITE_APP_PARSE_APP_ID,
           'X-Parse-Session-Token': data.sessionToken
        },
      }),

      transformResponse: (
        response: {
          objectId:string,
          firstname:string,
          lastname:string,
          username:string,
          email:string 
          createdAt:string, 
          sessionToken:string
        }) => {
          const result = {
            id:response.objectId,
            firstname:response.firstname,
            lastname:response.lastname,
            username:response.username,
            email:response.email,
            createdAt:response.createdAt,
            sessionToken:response.sessionToken
          }
          
        return result;
      },
    }),
  }),
});

export const { useUserFullDataMutation } = authApi;
