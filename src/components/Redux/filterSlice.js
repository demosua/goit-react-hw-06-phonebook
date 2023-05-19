import { createSlice } from '@reduxjs/toolkit'

export const filter = createSlice({
  name: 'filter',
  initialState: [],
  reducers: {
    filterChange: (state, action) => {
      state.value = action.payload;
    },
  },
})

export const { filterChange } = filter.actions