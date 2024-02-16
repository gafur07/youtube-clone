import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosAPI, baseURL } from "../../../config/axios.interceptors";

export const getAllVideo = createAsyncThunk(
	"fetshAllVideo",
	async(search, thunkApi) => {
		try {
			const response = await axiosAPI.get(`${baseURL}/search?q=${search}`)
			return response.data.items
		} catch (err) {
			return thunkApi.rejectWithValue(err)
		}
	}
)

