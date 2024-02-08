import { createSlice } from "@reduxjs/toolkit"
import { getAllVideo } from "./getVideo.action"

const initialState = {
	data: [],
	singleSelectedVideo: {},
	loading: false,
  history: [],
  timeViewVideos: []
}

export const VideoSlice = createSlice({
	name: "getVideo",
	initialState,
	reducers:{},

	extraReducers: builder => {
		builder
			.addCase(getAllVideo.pending, state => {
				state.loading = true
			})
			.addCase(getAllVideo.fulfilled, (state, action) => {
				state.data = action.payload,
				state.loading = false
			})
			.addCase(getAllVideo.rejected, state => {
				state.loading = false
			})
	}
})

export default VideoSlice.reducer