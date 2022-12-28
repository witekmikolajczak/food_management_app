import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const VITE_APP_REST_API_URL = import.meta.env.VITE_APP_REST_API_URL;
const VITE_APP_PARSE_APP_ID = import.meta.env.VITE_APP_PARSE_APP_ID;

interface ProductCreateInterface {
  body: ProductInterface[];
  sessionToken: string;
}

interface UpdateInterface {
  data: CurrentProductInterface;
  sessionToken: string;
  productId: string;
}
export const productApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${VITE_APP_REST_API_URL}/parse`,
  }),
  refetchOnMountOrArgChange: true,
  endpoints: (build) => ({
    createProduct: build.mutation({
      query: (data: ProductCreateInterface) => ({
        url: `/functions/createProduct`,
        method: "POST",
        headers: {
          "X-Parse-Application-Id": VITE_APP_PARSE_APP_ID,
          "X-Parse-Session-Token": data.sessionToken,
        },
        body: {
          productCollection: data.body,
        },
      }),
    }),

    productCollection: build.mutation({
      query: (sessionToken: string) => ({
        url: "/functions/productCollection",
        method: "POST",
        headers: {
          "X-Parse-Application-Id": VITE_APP_PARSE_APP_ID,
          "X-Parse-Session-Token": sessionToken,
        },
      }),
      transformResponse: (response: { result: ProductInterface[] }) => {
        return response.result;
      },
    }),

    updateProduct: build.mutation({
      query: (data: UpdateInterface) => ({
        url: `/classes/Product/${data.productId}`,
        method: "PUT",
        headers: {
          "X-Parse-Application-Id": VITE_APP_PARSE_APP_ID,
          "X-Parse-Session-Token": data.sessionToken,
        },
        body: {
          productName: data.data.productName,
          productCount: data.data.productCount,
          productUnit: data.data.productUnit,
        },
      }),
      transformResponse: (response: { result: ProductInterface[] }) => {
        return response.result;
      },
    }),

    productObject: build.mutation({
      query: (data: { sessionToken: string; productId: string }) => ({
        url: `/classes/Product/${data.productId}`,
        method: "GET",
        headers: {
          "X-Parse-Application-Id": VITE_APP_PARSE_APP_ID,
          "X-Parse-Session-Token": data.sessionToken,
        },
      }),
      transformResponse: (response: CurrentProductInterface) => {
        return response;
      },
    }),
  }),
});

export const {
  useCreateProductMutation,
  useProductCollectionMutation,
  useUpdateProductMutation,
  useProductObjectMutation,
} = productApi;
