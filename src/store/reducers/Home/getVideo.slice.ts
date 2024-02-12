import { createSlice } from "@reduxjs/toolkit"
import { getAllVideo } from "./getVideo.action"

const initialState = {
	data: [],
	singleVideo: {},
  history: [],
  timeViewVideos: [],
	loading: false,
	progress: 0,
	openMenu: false
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
		},
		openDrawer: state => {
			state.openMenu = true
		},
		closeDrawer: state => {
			state.openMenu = false
		}
	},

	extraReducers: builder => {
		builder
			.addCase(getAllVideo.pending, state => {
				state.loading = true,
				state.progress = 100
			})
			.addCase(getAllVideo.fulfilled, (state, action) => {
				state.data = action.payload,
				state.loading = false,
				state.progress = 0
			})
			.addCase(getAllVideo.rejected, state => {
				state.loading = false,
				state.progress = 0
			})
	}
})
export const { fetchingVideo, fetchedVideo, catchVideo, closeDrawer, openDrawer } = VideoSlice.actions
export default VideoSlice.reducer