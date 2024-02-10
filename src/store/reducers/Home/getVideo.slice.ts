import { createSlice } from "@reduxjs/toolkit"
import { getAllVideo } from "./getVideo.action"

const initialState = {
	data: [],
	singleVideo: {},
	loading: false,
  history: [],
  timeViewVideos: []
}

export const VideoSlice = createSlice({
	name: "getVideo",
	initialState,
	reducers:{
		fetchingVideo: state => {
			state.loading = true
		},
		fetchedVideo: (state, action) => {
			state.singleVideo = action.payload,
			state.loading = false
		},
		catchVideo: state => {
			state.loading = false
		}
	},

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
export const { fetchingVideo, fetchedVideo, catchVideo } = VideoSlice.actions
export default VideoSlice.reducer