import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const VITE_APP_REST_API_URL = import.meta.env.VITE_APP_REST_API_URL
const VITE_APP_PARSE_APP_ID = import.meta.env.VITE_APP_PARSE_APP_ID

interface ProductCreateInterface {
   body: ProductInterface[],
   sessionToken: string
}


export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${VITE_APP_REST_API_URL}/parse/functions`,
  }),
  refetchOnMountOrArgChange: true,
  endpoints: (build) => ({
    createProduct: build.mutation({
      query: (data:ProductCreateInterface) => ({ 
        url: `/createProduct`, 
        method: 'POST', 
        headers: {
           'X-Parse-Application-Id': VITE_APP_PARSE_APP_ID,
           'X-Parse-Session-Token': data.sessionToken
        },
        body:{
          productCollection:data.body
        }
      }),

    }),
  }),
});

export const { useCreateProductMutation } = authApi;
