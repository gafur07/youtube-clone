import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosChannel } from "../../../config/axios.interceptors";
interface IChannelID {
	channelId: any;
}
export const getChannel = createAsyncThunk(
	"fetch/Channel",
	async(id: IChannelID, thunkApi) => {
		try {
			const response = await axiosChannel.get(`/channels?id=${id.channelId}`)
			return response.data.items
		} catch (err) {
			return thunkApi.rejectWithValue(err)
		}
	}
)