import { createListenerMiddleware } from '@reduxjs/toolkit'

import {
  loadAuthData
} from '../reducer/auth'

export const authListenerMiddleware = createListenerMiddleware()
authListenerMiddleware.startListening({
   actionCreator:loadAuthData,
   effect: async (action, listenerApi) => {
      const state = {
         ...action.payload,
         isAuthenticated:true
      }
   localStorage.setItem('user', JSON.stringify(state))
  },
})

