import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const VITE_APP_REST_API_URL = import.meta.env.VITE_APP_REST_API_URL;
const VITE_APP_PARSE_APP_ID = import.meta.env.VITE_APP_PARSE_APP_ID;

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${VITE_APP_REST_API_URL}/parse`,
  }),
  refetchOnMountOrArgChange: true,
  endpoints: (build) => ({
    register: build.mutation({
      query: (data: {
        firstname: string;
        lastname: string;
        username: string;
        password: string;
        email: string;
      }) => ({
        url: `/users`,
        method: "POST",
        headers: {
          "X-Parse-Application-Id": VITE_APP_PARSE_APP_ID,
        },
        body: data,
      }),
      transformResponse: (response: {
        id: string;
        createdAt: string;
        sessionToken: string;
      }) => {
        return response;
      },
    }),

    login: build.mutation({
      query: (data: { username: string; password: string }) => ({
        url: `/login`,
        method: "POST",
        headers: {
          "X-Parse-Application-Id": VITE_APP_PARSE_APP_ID,
        },
        body: data,
      }),
      transformResponse: (response: {
        objectId: string;
        firstname: string;
        lastname: string;
        username: string;
        email: string;
        createdAt: string;
        sessionToken: string;
      }) => {
        const result = {
          id: response.objectId,
          firstname: response.firstname,
          lastname: response.lastname,
          username: response.username,
          email: response.email,
          createdAt: response.createdAt,
          sessionToken: response.sessionToken,
        };

        return result;
      },
    }),

    logout: build.mutation({
      query: (sessionToken: string) => ({
        url: `/logout`,
        method: "POST",
        headers: {
          "X-Parse-Application-Id": VITE_APP_PARSE_APP_ID,
          "X-Parse-Session-Token": sessionToken,
        },
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } =
  authApi;
