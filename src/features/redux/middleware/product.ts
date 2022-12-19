import { createListenerMiddleware } from "@reduxjs/toolkit";

import { loadActiveProduct } from "../reducer/product";

export const productListenerMiddleware = createListenerMiddleware();
productListenerMiddleware.startListening({
  actionCreator: loadActiveProduct,
  effect: async (action, listenerApi) => {
    localStorage.setItem("activeProduct", JSON.stringify(action.payload[0]));
  },
});
