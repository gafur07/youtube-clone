import { createSlice } from "@reduxjs/toolkit"
import { getChannel } from "./channel.action"

const initialState = {
	channel: [],
	progress: 0
}

export const channelSlice = createSlice({
	name: "channel",
	initialState,
	reducers: {},

	extraReducers: builder => {
		builder
			.addCase(getChannel.pending, state => {
				state.progress = 100
			})
			.addCase(getChannel.fulfilled, (state, action) => {
				state.channel = action.payload,
				state.progress = 0
			})
			.addCase(getChannel.rejected, state => {
				state.progress = 0
			})
	}
})

export default channelSlice.reducer