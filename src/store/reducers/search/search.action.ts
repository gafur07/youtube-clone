import { axiosSearch } from '@/config/axios.interceptors'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface ISearch {
  q: any;
}

export const getResult = createAsyncThunk(
  "fetch/Search",

  async (arg: ISearch, thunkApi) => {
    try {
      const response = await axiosSearch.get(`/search?q=${arg.q}`)
      return response.data.items
    } catch (err) {
      return thunkApi.rejectWithValue(err)
    }
  }
)