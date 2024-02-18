import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosChannel } from "../../../config/axios.interceptors";

export const getChannel = createAsyncThunk(
	"fetch/Channel",
	async(channelId, thunkApi) => {
		try {
			const response = await axiosChannel.get(`/channels?id=${channelId}`)
			return response.data.items
		} catch (err) {
			return thunkApi.rejectWithValue(err)
		}
	}
)