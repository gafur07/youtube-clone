import { createSlice } from '@reduxjs/toolkit'
import { getResult } from './search.action'

const initialState = {
  result: [],
  progress: 0
}

export const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(getResult.pending, state => {
        state.progress = 100
      })
      .addCase(getResult.fulfilled, (state, action) => {
        state.result = action.payload,
        state.progress = 0
      })
      .addCase(getResult.rejected, state => {
        state.progress = 0
      })
  }
})


export default resultSlice.reducer