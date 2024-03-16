
import { configureStore } from "@reduxjs/toolkit";
import circleSlice from './circle/slice'


export const store = configureStore({
  reducer: {
    cirle: circleSlice

  }
})

export type RootState  = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch