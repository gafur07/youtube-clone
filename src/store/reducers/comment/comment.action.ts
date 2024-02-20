import { axiosComment } from "@/config/axios.interceptors";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getComment = createAsyncThunk(
	"fetch/comment",
	async(id, thunkApi) => {
		try {
			const response = await axiosComment.get(`/comments?id=${id}`)
			return response.data.items
		} catch(err) {
			return thunkApi.rejectWithValue(err)
		}
	}
)