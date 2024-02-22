import { axiosSearch } from '@/config/axios.interceptors'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getResult = createAsyncThunk(
  "fetch/Search",

  async (q, thunkApi) => {
    try {
      const response = await axiosSearch.get(`/search?q=${q}`)
      return response.data.items
    } catch (err) {
      return thunkApi.rejectWithValue(err)
    }
  }
)