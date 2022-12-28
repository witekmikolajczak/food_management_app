import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const VITE_APP_REST_API_URL = import.meta.env.VITE_APP_REST_API_URL;
const VITE_APP_PARSE_APP_ID = import.meta.env.VITE_APP_PARSE_APP_ID;

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${VITE_APP_REST_API_URL}/parse/functions`,
  }),
  refetchOnMountOrArgChange: true,
  endpoints: (build) => ({
    userFullData: build.mutation({
      query: (sessionToken: string) => ({
        url: `/userFullData`,
        method: "POST",
        headers: {
          "X-Parse-Application-Id": VITE_APP_PARSE_APP_ID,
          "X-Parse-Session-Token": sessionToken,
        },
      }),

      transformResponse: (response: {
        result: {
          id: string;
          firstname: string;
          lastname: string;
          username: string;
          email: string;
          createdAt: string;
          sessionToken: string;
        };
      }) => {
        return response.result;
      },
    }),
  }),
});

export const { useUserFullDataMutation } = authApi;
