import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CircleProps } from "./types";


const initialState: CircleProps = {
  activeIndex: 2,
  data: [
    {
      id: 1,
      dateRange: [1980, 1986],
      label: 'Технологии'
    },
    {
      id: 2,
      dateRange: [1987, 1991],
      label: 'Кино'
    },
    {
      id: 3,
      dateRange: [1992, 1997],
      label: 'Литература'
    },
    {
      id: 4,
      dateRange: [1999, 2004],
      label: 'Музыка'
    },
    {
      id: 5,
      dateRange: [1982, 1987],
      label: 'Спорт'
    },
    {
      id: 6,
      dateRange: [2015, 2022],
      label: 'Наука'
    },

  ]
}


const circleSlice = createSlice({
  name: 'circle',
  initialState,
  reducers: {
    incrementActiveIndex: (state, action: PayloadAction<number>) => {
      state.activeIndex = action.payload
    },
    decrementActiveIndex: (state, action: PayloadAction<number>) => {
      state.activeIndex = action.payload
    }
  }
})

export const {incrementActiveIndex,decrementActiveIndex} = circleSlice.actions


export default circleSlice.reducer